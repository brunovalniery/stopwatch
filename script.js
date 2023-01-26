const date = new Date()
document.getElementById("now").innerHTML = date
    .toLocaleTimeString()
    .slice(0, -3)

