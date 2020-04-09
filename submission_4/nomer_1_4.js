for (var i = 1; i <= 5; i++) {
    var x = '';
    var y = '';
    for(var j = 1; j <= i; j++) {
        var y = y + '_';
    }
    for(var k = i; k <= 5; k++){
        var x = x + '*';
    }
    console.log(y+x);
}