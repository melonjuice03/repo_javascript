for (var i = 1; i <= 5; i++) {
    var x = '';
    var y = '';
    for(var j = i; j <= 5; j++) {
        var y = y + '_';
    }
    for(var k = 1; k <= i; k++){
        var x = x + '*';
    }
    console.log(y+x);
}