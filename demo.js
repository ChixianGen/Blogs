function jisuan(num1) {
    var arr = num1.split(',');
    var a1 = arr[0].split('').reverse();
    var a2 = arr[1].split('').reverse();
    // console.log(a1, a2)
    if (a1.length >= a2.length) {
        var brr = [];
        brr[0] = 0;
        for (var i = 0; i <= a1.length - 1; i++) {
            if(a2[i]==null){
                a2[i]=0;
            }
            brr[i] = brr[i] + Number(a1[i]) + Number(a2[i]);
            if (brr[i] >= 10) {
                brr[i] = 0;
                brr[i + 1] = 1;
            } else {
                brr[i + 1] = 0
            }
        }
    }else{
        var brr = [];
        brr[0] = 0;
        for (var i = 0; i <= a2.length - 1; i++) {
            if(a1[i]==null){
                a1[i]=0;
            }
            brr[i] = brr[i] + Number(a1[i]) + Number(a2[i]);
            if (brr[i] >= 10) {
                brr[i] = 0;
                brr[i + 1] = 1;
            } else {
                if(i+1 <= a2.length - 1){
                    brr[i + 1] = 0
                }
            }
        }
    }
    brr=brr.reverse()
    // console.log(brr,"??")
    if (brr[0] == 0) {
        brr.shift(0);
    }
    // console.log(brr)
    var smg = '';
    for (let i = 0; i < brr.length; i++) {
        smg = smg + brr[i]
    }
    console.log(smg,"??")
    return smg;
}
jisuan('12,34');