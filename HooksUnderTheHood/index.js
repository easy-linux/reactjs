import Counter from "./Counter"
import Text from "./Text"
import { createElement, renderRoot, eventToComponent, eventToComponentByPropId } from './EasyItReact'

const root = document.getElementById('app')
const App = createElement(Counter, {
  id: 'root',
  children: [
    {
      component: Text, params: {
        id: 'text1', text: '1 text', children: [
          { component: Text, params: { id: 'text11', text: '11 text' } },
          { component: Counter, params: { id: 'text12', text: '11 text', children: [
            { component: Text, params: { id: 'text12-1', text: '11-2 text' } },
          ] } }
        ]
      }
    },
    { component: Text, params: { id: 'text2', text: '2 text' } },
    { component: Text, params: { id: 'text3', text: '3 text' } },
  ]
}, root)

renderRoot(App)

eventToComponent(App.__id, 'click')
eventToComponent(App.__id, 'type', 'New interesting text!')

setTimeout(() => {
  console.log('timer 1000')
  eventToComponent(App.__id, 'click')
}, 1000)

setTimeout(() => {
  console.log('timer 2000')
  eventToComponent(App.__id, 'type', 'New text2!')
}, 2000)

setTimeout(() => {
  console.log('timer 2000')
  eventToComponent(App.__id, 'type', 'New text3!')
}, 3000)


const btnClick = document.getElementById('btn-test')
btnClick.addEventListener('click', () => {
  eventToComponent(App.__id, 'click')
})

const btnType = document.getElementById('btn-type')
btnType.addEventListener('click', () => {
  const text = document.getElementById('input-type')
  eventToComponent(App.__id, 'type', text.value)
})

const btnChildClick = document.getElementById('btn-child-test')
btnChildClick.addEventListener('click', () => {
  const comp = document.querySelector('input[name="texts"]:checked')
  if (comp) {
    const id = comp.id
    eventToComponentByPropId(id, 'click')
  }
})


const btnChildType = document.getElementById('child-type')
btnChildType.addEventListener('click', () => {
  const text = document.getElementById('input-child-type')
  const textComp = document.querySelector('input[name="texts"]:checked')

  if (textComp) {
    const id = textComp.id
    eventToComponentByPropId(id, 'type', text.value)
  }
})