const toggle = document.getElementById("toggle")

let a = document.getElementsByTagName("section")[0]

let toggleStatus = false

toggle.onchange = () => {
  toggleStatus = toggle.checked
  if(toggleStatus){
    console.log("white")
  }else {
    console.log("dark")
  }
}
