let h1 = document.querySelector('h1')

function digiClock() {
    let latestTime = new Date()

    h1.innerHTML = latestTime.toLocaleTimeString()
}

setInterval(digiClock, 1000) //ms

// 1s = 1000ms