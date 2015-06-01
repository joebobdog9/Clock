(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementByID("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () {
        startTime();
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + 1;
    };
    return i;
}

},{}]},{},[1])
# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYmVuamFtaW5ob3dhcmQvRGVza3RvcC9HaXRodWIgUHJvamVjdHMvSXJvbiBZYXJkLzRfV2Vlay9DbG9jay9qcy9hcHAtYnJvd3NlcmlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBUyxRQUFRLEdBQUc7QUFDaEIsUUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QixRQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekIsUUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzNCLFFBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMzQixZQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FDcEMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMxQixRQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBVztBQUMxQixpQkFBUyxFQUFFLENBQUE7S0FDZCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ1g7O0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQ2xCLFFBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNSLFNBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0tBQ2QsQ0FBQztBQUNGLFdBQU8sQ0FBQyxDQUFDO0NBQ1oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gc3RhcnRUbWUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgdmFyIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHMgPSB0b2RheS5nZXRTZWNvbmRzKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SUQoJ3R4dCcpLmlubmVySFRNTCA9XG4gICAgICAgIGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHM7XG4gICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzdGFydFRpbWUoKVxuICAgIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGltZShpKSB7XG4gICAgaWYgKGkgPCAxMCkge1xuICAgICAgICBpID0gXCIwXCIgKyAxXG4gICAgfTtcbiAgICByZXR1cm4gaTtcbn1cblxuIl19

// --> date
//--> HH:MM:SS
//--> #RRGGBB
// --> rgb(rr,gg,bb)
var clock = () => {
    var now = new Date()
    var text('${now.gethours}:${now.getminutes}:{now.getSeconds}')
    document.querySelector('.container').innerHTML = text

//get some color

var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()]
var range = [24, 60, 60]
var value =  HMS.map((v,i) => Math.floor(v/range[i]*255)
var color = `rgb(${value.join(','})`
document.body.style['backround'] = color

}

setInterval(clock, 1000) // put in browsrify //



