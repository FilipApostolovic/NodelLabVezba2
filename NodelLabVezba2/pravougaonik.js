var a;
var b;

var povrsina = function (a, b) {
    var P = a * b;
    console.log(P);
}
var obim = function (a, b) {
    var O = 2 * (a + b);
    console.log(O);
}



module.exports.povrsina = povrsina;
module.exports.obim = obim;
