var a = [10, 5, 6, 8, 11, 0, 15, 2, 458, 47]

// 冒泡排序
// 邻近两个两两相比；
function maopao(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            var temp = 0;
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    console.log(a);
}

// 插入排序
// 1. 是最新的一个数，在这里我们不妨叫它a【i】,（i从0到n-1），并把它放在temp里。temp=a【i】；最下面我会讲讲为什么要把a【i】赋值给temp；为什么不能直接用a【i】来比较；
// 2. temp元素每次都与前面的元素a【j】比较，这里我们用j代替（j=i-i）。
// 3. 当temp<a【j】时：a【j】就向后移动；由原来下标a【j】变成了a【j+1】。也就是a【j+1】=a【j】。并且一直比较。
// 4. 直到temp>a【j】的时候，这个时候，a【j】不需要向后移动；这时候temp就直接插入到a【j】的后面，也就是a【j+1】。即a【j+1】=temp；
function charu(a) {
    for (let i = 0; i < a.length; i++) {
        var temp = a[i];
        var j = i - 1;
        while (j >= 0 && temp < a[j]) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = temp;
    }
    console.log(a)
}

// 希尔排序
// 1. 每个数a【i】,（i从0到n-1）都会与前面一定距离（这个距离的值我们暂且用gap表示）的数a【i-gap】做比较，并把它放在temp里。temp=a【i】；（当然i-gap必须>=0，小于0；自然就不比较了；具体可以看我下面的图解）
// 2. temp元素每次都与前面的元素a【j】比较，这里我们用j代替（j=i-gap）。
// 3. 当temp<a【j】时：a【j】就向后移动；由原来下标a【j】变成了a【j+gap】。也就是a【j+gap】=a【j】。并且一直比较。
// 4. 直到temp>a【j】的时候，这个时候，a【j】不需要向后移动；这时候temp就直接插入到a【j】的后面，也就是a【j+gap】。即a【j+gap】=temp；
// 5. 我们会发现，它的规律与插入排序的区别，就是a【i】与前面的数比较。而这个数，不再是1的距离，而是gap的距离。gap的变化是：第一次：gap=n/2，第二次：gap=gap/2；第三次：gap=gap/2；……；gap不断地变小，直到gap=1；
function xier(a) {
    var gap = Math.floor(a.length / 2);
    while (gap) {
        for (let i = 0; i < a.length; i += gap) {
            var temp = a[i];
            var j = i - gap;
            while (j >= 0 && temp < a[j]) {
                a[j + gap] = a[j];
                j -= gap;
            }
            a[j + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    console.log(a)
}

// 快速排序
// i和j分别为哨兵；
function kuaisu(left, right, a) {
    console.log(left,"到",right)
    if (i > j) {
        return
    }
    var flag = a[left];//以最左边为准基数；
    var i = left;
    var j = right;
    while (i < j) {
        while (i < j && a[j] >= flag) { j--};//哨兵j向左移动
        while (i < j && a[i] <= flag) { i++ };// 哨兵i向右移动
        if (i < j) {
            // 两个哨兵调换位置；
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            // 继续循环；
        }
    }
    //当i=j时跳出循环；交换基位位置；
    console.log(i,"换位置",j)
    var temp = a[i];
    a[left] = a[i];
    a[i] = flag;
    console.log(a,"?")
    if (left == i) {
        return;
    }
    if (j + 1 == right) {
        return;
    }
    kuaisu(left, i-1, a);
    kuaisu(j+1, right, a);
}

kuaisu(0, a.length-1, a);

