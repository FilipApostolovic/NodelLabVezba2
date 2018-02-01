
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var zadatak4 = function (broj) {
    var e = new EventEmitter();        
    var brIteracija = broj;
    var count = 0;
    var iter = 0;
    var poruka = '';
    e.emit('start');
    var t = setInterval(function () {        
        if (count == 7 || count == 0) {
                count = 0;
                iter++;
                poruka += "Iteracija br: " + iter + " ";
        };
        poruka += Math.floor(Math.random() * 10);

        if (iter == brIteracija & count == 6) {
            e.emit('end')
            clearInterval(t);
            fs.writeFile('text.txt', poruka + " **************************** ", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        };        
        count++;
    }, 500);

    return (e);
};

var r = zadatak4(3);

r.on('start', function () {
    console.log('Pocelo je.');
});

r.on('end', function () {
    console.log('Zavrsilo se.');
});