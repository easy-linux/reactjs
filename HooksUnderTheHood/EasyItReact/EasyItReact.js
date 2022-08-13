import vNode from './vNode'
import { getRender, setRender } from './vDom'
import { getComponent, setComponent, removeComponent, forEach } from './storage'

export const createElement = (component, params = {}, parent = null) => {
  const vnode = vNode(component, params, parent)
  setComponent(vnode)
  return vnode
}

export const renderRoot = (vnode) => {
  const node = getComponent(vnode.__id)
  const result = node.render()
  setRender(vnode.__id, result)
  node.parent.innerHTML = result.render()
  return result
}

export const renderStages = {
  CLEANUP: 'cleanup',
  RENDER: 'render',
  UNMOUNT: 'unmount'
}

export const eventToComponent = (id, event, data) => {
  const render = getRender(id)
  if (render) {
    if (render?.eventHandler && typeof (render.eventHandler === 'function')) {
      render.eventHandler(event, data)
    }
  }
}

export const eventToComponentByPropId = (id, event, data) => {
  forEach(component => {
    if (component.params['id'] === id) {
      eventToComponent(component.__id, event, data)
    }
  })
}

const rerender = () => {
  let root, needReRender = false
  forEach(component => {
    if (component) {
      if (component.parent?.innerHTML) {
        root = component
      }
      if (component.prevState !== JSON.stringify(component.currState)) {
        needReRender = true
        console.log('rerender', component)
      }
    }
  })

  if (needReRender) {
    const result = root.render()
    root.parent.innerHTML = result.render()
  }

  setTimeout(rerender, 200)
}

setTimeout(rerender, 200)

export { useEffect, useState } from './hooks'

