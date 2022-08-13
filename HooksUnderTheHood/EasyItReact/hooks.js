import { renderStages } from './EasyItReact'
import { getComponent, setComponent } from './storage'

let currentComponent, currentHook = 0;

export const setCurrentComponent = (comp) => {
  currentComponent = comp
  currentHook = 0
}

export const useEffect = (callback, depArray) => {
  const comp = getComponent(currentComponent.__id)
  const hooks = comp.hooks
  const renderStage = currentComponent.renderStage
  const hasNoDeps = !depArray
  const prev = comp.hooks[currentHook] 
  if(renderStage === renderStages.UNMOUNT){
    if(prev?.cleanup && typeof(prev.cleanup) === 'function'){
      prev.cleanup()
    }
    currentHook++
    return
  }
  const hasChangedDeps = prev?.deps ? !depArray.every((el, i) => el === prev.deps[i]) : true
  if (hasNoDeps || hasChangedDeps) {
    if(renderStage === renderStages.CLEANUP){
      if(prev?.cleanup && typeof(prev.cleanup) === 'function'){
        prev.cleanup()
      }
    }
    if(renderStage === renderStages.RENDER){
       const result = callback()
       comp.hooks[currentHook] = {deps: depArray, cleanup: result}
    }
  }
  setComponent(comp)
  currentHook++ // done with this hook
}


export const useState = (initialValue) => {
  const compId = currentComponent.__id
  const renderStage = currentComponent.renderStage
  const comp = getComponent(compId)
  const hooks = comp.hooks
  if(renderStage === renderStages.UNMOUNT){
    currentHook++
    return
  }
  const setStateHookIndex = currentHook // for setState's closure!

  if(!comp.currState['state']){
    comp.currState['state'] = {}
  }
  
  if(!hooks[currentHook]){
    comp.currState['state'][''+setStateHookIndex] = initialValue
    hooks[currentHook] = [
      initialValue,
      newState => {
        const comp = getComponent(compId)
        comp.hooks[setStateHookIndex][0] = newState
        if(comp.currState['state']){
          comp.currState['state'][''+setStateHookIndex] = newState
        } 
        setComponent(comp)
      }
    ]
  } else {
    if(comp.currState['state']){
      comp.currState['state'][''+setStateHookIndex] = hooks[setStateHookIndex][0]
    } 
  }
  setComponent(comp)
  
  return hooks[currentHook++]
}