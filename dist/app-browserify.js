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
    document.querySelector('.hovercontainer').innerHTML = hex

    // var S = `${3*d.getSeconds()}px`
    // document.body.querySelector('hr').style['width'] = S

    ;
};

setInterval(clock, 1000); // put in browsrify //

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYmVuamFtaW5ob3dhcmQvRGVza3RvcC9HaXRodWIgUHJvamVjdHMvSXJvbiBZYXJkLzRfV2Vlay9DbG9jay9qcy9hcHAtYnJvd3NlcmlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0lBLElBQUksS0FBSyxHQUFHLFNBQVIsS0FBSyxHQUFTO0FBQ2QsUUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTs7QUFFcEIsUUFBSSxJQUFJLFFBQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEFBQUUsQ0FBQTs7QUFFdEUsWUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBOzs7O0FBSXJELFFBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTs7QUFFOUQsUUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBOztBQUV4QixRQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQUEsQ0FBQyxDQUFBOztBQUU3RCxRQUFJLEtBQUssWUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUE7QUFDckMsWUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFBOztBQUV6QyxRQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLFlBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRzs7Ozs7QUFBQSxLQUFBO0NBTTVELENBQUE7O0FBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyAtLT4gZGF0ZVxuLy8tLT4gSEg6TU06U1Ncbi8vLS0+ICNSUkdHQkJcbi8vIC0tPiByZ2IocnIsZ2csYmIpXG52YXIgY2xvY2sgPSAoKSA9PiB7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKClcblxuICAgIHZhciB0ZXh0ID0gYCR7bm93LmdldEhvdXJzKCl9OiR7bm93LmdldE1pbnV0ZXMoKX06JHtub3cuZ2V0U2Vjb25kcygpfWBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSB0ZXh0XG5cbiAgICAvL2dldCBzb21lIGNvbG9yXG5cbiAgICB2YXIgSE1TID0gW25vdy5nZXRIb3VycygpLCBub3cuZ2V0TWludXRlcygpLCBub3cuZ2V0U2Vjb25kcygpXVxuXG4gICAgdmFyIHJhbmdlID0gWzI0LCA2MCwgNjBdXG5cbiAgICB2YXIgdmFsdWUgPSBITVMubWFwKCh2LCBpKSA9PiBNYXRoLmZsb29yKHYgLyByYW5nZVtpXSAqIDI1NSkpXG5cbiAgICB2YXIgY29sb3IgPSBgcmdiKCR7dmFsdWUuam9pbignLCcpfSlgXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVsnYmFja2dyb3VuZCddID0gY29sb3JcblxuICAgIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdmVyY29udGFpbmVyJykuaW5uZXJIVE1MID0gaGV4XG5cbiAgICAvLyB2YXIgUyA9IGAkezMqZC5nZXRTZWNvbmRzKCl9cHhgXG4gICAgLy8gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdocicpLnN0eWxlWyd3aWR0aCddID0gU1xuXG4gICBcbn1cblxuc2V0SW50ZXJ2YWwoY2xvY2ssIDEwMDApIC8vIHB1dCBpbiBicm93c3JpZnkgLy9cbiJdfQ==
