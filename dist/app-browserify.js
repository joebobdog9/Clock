(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// --> date
//--> HH:MM:SS
//--> #RRGGBB
// --> rgb(rr,gg,bb)
'use strict';

var clock = function clock() {
    var now = new Date();

    var text = '' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    document.querySelector('.container').innerHTML = text;

    //get some color

    var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()];

    var range = [24, 60, 60];

    var value = HMS.map(function (v, i) {
        return Math.floor(v / range[i] * 255);
    });

    var color = 'rgb(' + value.join(',') + ')';
    document.body.style['background'] = color;

    var hex = value.toString(16);
    document.querySelector('.hovercontainer').innerHTML = hex;

    var S = '' + 3 * d.getSeconds() + 'px';
    document.body.querySelector('hr').style['width'] = S;
};

setInterval(clock, 1000); // put in browsrify //

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYmVuamFtaW5ob3dhcmQvRGVza3RvcC9HaXRodWIgUHJvamVjdHMvSXJvbiBZYXJkLzRfV2Vlay9DbG9jay9qcy9hcHAtYnJvd3NlcmlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0lBLElBQUksS0FBSyxHQUFHLFNBQVIsS0FBSyxHQUFTO0FBQ2QsUUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTs7QUFFcEIsUUFBSSxJQUFJLFFBQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEFBQUUsQ0FBQTs7QUFFdEUsWUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBOzs7O0FBSXJELFFBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTs7QUFFOUQsUUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBOztBQUV4QixRQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQUEsQ0FBQyxDQUFBOztBQUU3RCxRQUFJLEtBQUssWUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUE7QUFDckMsWUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFBOztBQUV6QyxRQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLFlBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBOztBQUV6RCxRQUFJLENBQUMsUUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFJLENBQUE7QUFDL0IsWUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtDQUd2RCxDQUFBOztBQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gLS0+IGRhdGVcbi8vLS0+IEhIOk1NOlNTXG4vLy0tPiAjUlJHR0JCXG4vLyAtLT4gcmdiKHJyLGdnLGJiKVxudmFyIGNsb2NrID0gKCkgPT4ge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpXG5cbiAgICB2YXIgdGV4dCA9IGAke25vdy5nZXRIb3VycygpfToke25vdy5nZXRNaW51dGVzKCl9OiR7bm93LmdldFNlY29uZHMoKX1gXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gdGV4dFxuXG4gICAgLy9nZXQgc29tZSBjb2xvclxuXG4gICAgdmFyIEhNUyA9IFtub3cuZ2V0SG91cnMoKSwgbm93LmdldE1pbnV0ZXMoKSwgbm93LmdldFNlY29uZHMoKV1cblxuICAgIHZhciByYW5nZSA9IFsyNCwgNjAsIDYwXVxuXG4gICAgdmFyIHZhbHVlID0gSE1TLm1hcCgodiwgaSkgPT4gTWF0aC5mbG9vcih2IC8gcmFuZ2VbaV0gKiAyNTUpKVxuXG4gICAgdmFyIGNvbG9yID0gYHJnYigke3ZhbHVlLmpvaW4oJywnKX0pYFxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbJ2JhY2tncm91bmQnXSA9IGNvbG9yXG5cbiAgICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ZlcmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGhleFxuXG4gICAgdmFyIFMgPSBgJHszKmQuZ2V0U2Vjb25kcygpfXB4YFxuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignaHInKS5zdHlsZVsnd2lkdGgnXSA9IFNcblxuICAgXG59XG5cbnNldEludGVydmFsKGNsb2NrLCAxMDAwKSAvLyBwdXQgaW4gYnJvd3NyaWZ5IC8vXG4iXX0=
