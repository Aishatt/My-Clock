setInterval(setClock, 1000);//because we want to call a certain function every second,every 1000millisec

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('#hour  ') //WE Can also use this


//elements we need to use

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    //note that you can use any variable name
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio) //we call this function to get our clock working
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
