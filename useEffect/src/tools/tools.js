export const printText = (text) => {
    const el = document.createElement('div')
    el.innerHTML = text
    document.querySelector('body').appendChild(el)
}