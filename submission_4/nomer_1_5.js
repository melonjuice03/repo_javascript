for (var i = 1; i <= 5; i++) {
    var x = '';
    var y = '';
    var z = '';
    for(var j = i; j <= 5; j++) {
        var y = y + '_';
    }
    for(var k = 1; k <= i; k++){
        var x = x + '*';
    }
    for(var l = 1; l <= i-1;l++){
        var z = z + '*';
    }
    console.log(y+x+z);
}