const toggle = document.getElementById("toggle")
const light = document.getElementById("light")



let toggleStatus = false

toggle.onchange = () => {
  toggleStatus = toggle.checked
  if(toggleStatus){
    light.href = "styles/light.css"
  }else {
    light.href = ""
  }
}
