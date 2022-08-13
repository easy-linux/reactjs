import { setRender, removeRender } from './vDom'
import { getComponent, removeComponent, setComponent } from './storage'
import { renderStages } from './EasyItReact'
import { setCurrentComponent } from './hooks'

function createChildrenTree(children, parent) {
  return children.map(c => {
    const vnode =  vNode(c.component, c.params, parent)
    setComponent(vnode)
    return vnode
  })
}

function renderChildren(children) {
  return children.map(c => {
    const ch = renderChildren(c.children)
    const result = c.render({children: ch})
    return result.render()
  }).join('')
}

function vNode(component, params = {}, parent = null) {
  var localParams = {},  children = [];
  const __id = Symbol()
  Object.keys(params).forEach(key => {
    if (key === 'children') {
      children = createChildrenTree(params[key], __id)
    } else {
      localParams[key] = params[key]
    }
  })

  function unmount() {
    const currComponent = getComponent(__id)
    currComponent.renderStage = renderStages.UNMOUNT
    setCurrentComponent(currComponent)
    currComponent.component(currComponent.params)
    removeRender(__id)
    removeComponent(__id)
  }

  function render() {
    const currComponent = getComponent(__id)
    currComponent.prevState = JSON.stringify(currComponent.currState)
    currComponent.renderStage = renderStages.CLEANUP
    setCurrentComponent(currComponent)
    const childrenData = renderChildren(currComponent.children)
    currComponent.component({...localParams, children: childrenData})
    currComponent.renderStage = renderStages.RENDER
    setCurrentComponent(currComponent)
    const result = currComponent.component({...localParams, children: childrenData})
    

    setRender(__id, result)
    
    return result
  }

  return {
    __id,
    component,
    children,
    parent,
    hooks: [],
    params: localParams,
    prevState: '{}',
    currState: {},
    render: render,
    unmount: unmount,
  }

}

export default vNode