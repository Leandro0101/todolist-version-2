export function showElement (elementId){
  const element = document.querySelector(`#${elementId}`)
  element.style.display = 'block'
}

export function hiddeElement(elementId){
  const element = document.querySelector(`#${elementId}`)
  element.style.display = 'none'
}

export function changeCheckBox(elementId1, elementId2){
  showElement(elementId2)
  hiddeElement(elementId1)
}

