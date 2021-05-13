let clickButton = document.getElementById("myClick")
let numClick = document.getElementById("numClick")
let clicks = 0

clickButton.addEventListener("click", function()
  {
    clicks++
    console.log(clicks)
    numClick.innerHTML = clicks
  }
)