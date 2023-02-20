let state = {
  itemSelected: null,
  items: [],
};

const callBacks = new Map();

const subscribe = (callback) => {
  const id = Symbol();
  if (callback?.call) {
    callBacks.set(id, callback);
    return () => {
      if (callBacks.has(id)) {
        callBacks.delete(id);
      }
    };
  }
};

const notifyAboutUpdates = () => {
  callBacks.forEach((callback) => {
    callback();
    console.log('callback called')
  });
};

const setSelected = (item) => {
  state = {
    ...state,
    itemSelected: item,
  };
  notifyAboutUpdates();
};

const addItems = (data) => {
  state = {
    ...state,
    items: [...state.items, ...data],
  };
  notifyAboutUpdates();
};

const getState = () => state;

const storage = {
  subscribe,
  setSelected,
  addItems,
  getState,
};


export default storage
