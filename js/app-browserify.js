// --> date
//--> HH:MM:SS
//--> #RRGGBB
// --> rgb(rr,gg,bb)
var clock = () => {
    var now = new Date()

    var text = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

    document.querySelector('.container').innerHTML = text

    //get some color

    var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()]

    var range = [24, 60, 60]

    var value = HMS.map((v, i) => Math.floor(v / range[i] * 255))

    var color = `rgb(${value.join(',')})`
    document.body.style['background'] = color

    var hex = value.toString(16);
    document.querySelector('.hovercontainer').innerHTML = hex

    var S = `${3*d.getSeconds()}px`
    document.body.querySelector('hr').style['width'] = S

   
}

setInterval(clock, 1000) // put in browsrify //
