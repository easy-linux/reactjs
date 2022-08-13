
const virtualDom = new Map()

export const addRender = (node) => {
  if(!virtualDom.has(node.__id)){
    virtualDom.set(node.__id, node)
  }
}

export const setRender = (id, result) => {
    virtualDom.set(id, result)
}

export const getRender = (id) => {
  return virtualDom.get(id)
}

export const removeRender = (id) => {
  return virtualDom.delete(id)
}

export const clearDom = () => {
  virtualDom.clear()
}