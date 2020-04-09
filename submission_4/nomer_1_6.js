for (var i = 1; i <= 5; i++) {
    var x = '';
    var y = '';
    var z = '';
    for(var j = 1; j <= i; j++) {
        var y = y + '_';
    }
    for(var k = i; k <= 5; k++){
        var x = x + '*';
    }
    for(var l = i+1; l <= 5;l++){
        var z = z + '*';
    }
    console.log(y+x+z);
}