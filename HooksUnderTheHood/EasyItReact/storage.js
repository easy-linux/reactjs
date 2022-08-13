
const Storage = new Map()

export const addComponent = (node) => {
  if(!Storage.has(node.__id)){
    Storage.set(node.__id, node)
  }
}

export const setComponent = (node) => {
  Storage.set(node.__id, node)
}

export const getComponent = (id) => {
  return Storage.get(id)
}

export const removeComponent = (id) => {
  if(Storage.has(id)){
    return Storage.delete(id)
  }
  return false
}

export const forEach = (callback) => {
  Storage.forEach(callback)
}

export const clearComponents = () => {
  Storage.clear()
}