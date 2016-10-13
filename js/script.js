// TIME NODES

var clockNode = document.querySelector('#clock')
var hourNode = document.querySelector('#hours')
var minuteNode = document.querySelector('#minutes')
var secondNode = document.querySelector('#seconds')
var backgroundNode = document.querySelector('#clockBody')

// COLOR NODES

var colorNode = document.querySelector('#hexColor')
var redNode = document.querySelector ('#red')
var greenNode = document.querySelector('#green')
var blueNode = document.querySelector('#blue')

var currentTimeAndColor = function() {

    //  TIME CLOCK

    var d = new Date()
    var currentHour = d.getHours()
    var currentMinute = d.getMinutes()
    var currentSecond = d.getSeconds()

    console.log(currentHour)

    if(currentHour > 12) {
        currentHour = currentHour - 12
    }

    if(currentHour < 10) {
        currentHour = '0' + currentHour
    }

    if(currentMinute < 10) {
        currentMinute = '0' + currentMinute
    }

    if(currentSecond < 10) {
        currentSecond = '0' + currentSecond
    }

    hourNode.innerHTML = currentHour + ':'
    minuteNode.innerHTML = currentMinute + ':'
    secondNode.innerHTML = currentSecond

    // COLOR CLOCK

    var innerHourNumber = parseInt(currentHour) + 150
    var innerMinuteNumber = parseInt(currentMinute) + 150
    var innerSecondNumber = parseInt(currentSecond) + 150

    //INNER GRADIENT

    var hexHourInner = innerHourNumber.toString(16)
    var hexMinuteInner = innerMinuteNumber.toString(16)
    var hexSecondInner = innerSecondNumber.toString(16)


    redNode.innerHTML = hexHourInner + ':'
    greenNode.innerHTML = hexMinuteInner + ':'
    blueNode.innerHTML = hexSecondInner

    // OUTER GRADIENT

    var outerHourNumber = parseInt(currentHour) + 25
    var outerMinuteNumber = parseInt(currentMinute) + 25
    var outerSecondNumber = parseInt(currentSecond) + 25

    var hexHourOuter =  outerHourNumber.toString(16)
    var hexMinuteOuter = outerMinuteNumber.toString(16)
    var hexSecondOuter = outerSecondNumber.toString(16)




    // BACKGROUND COLOR


    var innerBackgroundColor = '#' + hexHourInner + hexMinuteInner + hexSecondInner
    var outerBackgroundColor = '#' + hexHourOuter + hexMinuteOuter + hexSecondOuter

    console.log(innerBackgroundColor)
    console.log(outerBackgroundColor)

    backgroundNode.style.background = 'radial-gradient(circle, ' + innerBackgroundColor + ' ,' + outerBackgroundColor + ')'



}

window.setInterval(currentTimeAndColor, 1000)

//why am i only getting 5 characters for my outer hex color? (hex hour outer is return only 1 value instead of 2)