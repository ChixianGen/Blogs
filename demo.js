var aaa = [];
var arr = [[1, [5, 8, 8], 3], [5], [6, 78], 112];
var brr = [];

function channge() {
    while (arr.length > 0) {
        var i = 0;
        if (arr[i].length > 0) {
            arr.push(arr[i])
            // for (var j = 0; j < arr[i].length; j++) {
            //     arr.push(arr[i][j]);
            // }
        }else {
            brr.push(arr[i])
        }
        arr.shift();
        i++;
    }
}

channge();