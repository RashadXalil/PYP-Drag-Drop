const blueBox = document.getElementById('blue')
const redBox = document.getElementById('red')
const greenBox = document.getElementById('green')
const items = document.getElementsByClassName('item')
const dropZones = document.getElementsByClassName('drop-zone')
const unrankedDropZone = document.getElementById('unranked-drop-zone')
for (let i = 0; i < dropZones.length - 1; i++) {
  dropZones[i].ondrop = function (ev) {
    ev.preventDefault()
    var data = ev.dataTransfer.getData('text')
    ev.target.appendChild(document.getElementById(data))
    console.log(this)
    if (this !== data.parentNode) {
      this.append(document.getElementById(data))
    }
  }
  dropZones[i].ondragover = function (ev) {
    ev.preventDefault()
  }
}
for (let i = 0; i < items.length; i++) {
  items[i].ondragstart = function (ev) {
    ev.dataTransfer.setData('text', ev.target.id)
  }
}
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('dblclick', function (e) {
    if (this.parentNode !== unrankedDropZone) {
      let element = e.target
      let parentElement = e.target.parentElement
      parentElement.removeChild(element)
      unrankedDropZone.appendChild(element)
    }
  })
}
