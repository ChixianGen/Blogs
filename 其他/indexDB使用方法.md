# IndexedDB：

## 步骤:
1. 打开数据库：request=indexedDB.open(dbName,1)
2. 写打开失败的方法：request.onerror=function（e）{……}；
3. 写打开成功的方法：request.onsuccess=function（e）{……};
4. 写数据库版本更新时执行的方法：request.onupgradeneeded = function(event){……}
5. 在第4步的方法里创建数据对象仓库：objectStore = db.createObjectStore("仓库名", {keyPath: "主键",autoIncrement: true自增|false不自增});
6. 在第5步后面创建索引：var idx = store.createIndex('usernameIndex','userName',{unique: false})
7. 在第6步以后，创建一个事务数据库，var tx = db.transaction('对象仓库名','事务方法readonly只读|readwrite读写');事务数据库可以使用这三个事件：onabort()：事务中断。onomplete()：事务完成。onerror()：事务出错。
8. 在第3步，展开写，db=event.target.result；
9. 对数据进行操作，在第7步后面写var store = tx.objectStore("test");var ob = store.get(x);方法有add（），put（），delete（）get（）
10. 如果要对数据遍历的话接着第9步：var store = tx.objectStore("test");var cursor = store.openCursor();

IndexedDB 是一种可以让你在用户的浏览器内持久化存储数据的方法。IndexedDB 为生成 Web Application 提供了丰富的查询能力，使我们的应用在在线和离线方法时都可以正常工作。

## 基本模式
IndexedDB 鼓励使用的基本模式如下所示：
1. 打开数据库并且开始一个事务。
2. 创建一个 object store。
3. 构建一个请求来执行一些数据库操作，像增加或提取数据等。
4. 通过监听正确类型的 DOM 事件以等待操作完成。
5. 在操作结果上进行一些操作（可以在 request 对象中找到）

## IndexedDB具有以下特点：
1. 键值对储存。 IndexedDB内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以“键值对”的形式保存，每一个数据都有对应的键名，键名是独一无二的，不能有重复，否则会抛出一个错误。
2. 异步。 IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作，这与localStorage形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
3. 支持事务。 IndexedDB支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回到事务发生之前的状态，不存在只改写一部分数据的情况。
4. 同域限制 IndexedDB也受到同域限制，每一个数据库对应创建该数据库的域名。来自不同域名的网页，只能访问自身域名下的数据库，而不能访问其他域名下的数据库。
5. 储存空间大 IndexedDB的储存空间比localStorage大得多，一般来说不少于250MB。IE的储存上限是250MB，Chrome和Opera是剩余空间的某个百分比，Firefox则没有上限。
6. 支持二进制储存。

## 判断是否支持indexedDB：
```js
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}

// 打开我们的数据库
var request = indexedDB.open('dbName', 1);  // 打开 dbName 数据库
request.onerror = function(e){              // 监听连接数据库失败时执行
    console.log('连接数据库失败');
}
request.onsuccess = function(e){            // 监听连接数据库成功时执行
    console.log('连接数据库成功');
}
```

> indexedDB.open 方法来连接数据库，该方法接收两个参数，第一个是`数据库名`，第二个是`数据库版本号`。
该方法会返回一个 `IDBOpenDBRequest 对象`，代表一个请求连接数据库的请求对象。我们可以通过监听请求对象的 `onsuccess` 和` onerror `事件来定义连接成功或失败需执行的方法。

```js
var request = indexedDB.open('dbName', 2);  // 更新版本，打开版本为2的数据库
// ...
request.onupgradeneeded = function(e){
    console.log('新数据库版本号为=' + e.newVersion);
}
```
我们通过监听请求对象的 onupgradeneeded 事件来定义数据库版本更新时执行的方法。
第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件。

创建对象仓库
object store（对象仓库）是 indexedDB 数据库的基础，在indexedDB 中并没有数据库表，而对象仓库，就是相当于一个数据库表。

var request = indexedDB.open('dbName', 3);
// ...
request.onupgradeneeded = function(e){
    var db = e.target.result;//要有的
    var store = db.createObjectStore('Users', {keyPath: 'userId', autoIncrement: false});
    console.log('创建对象仓库成功');
}
db.createObjectStore 方法接收两个参数，第一个为对象仓库名，第二个参数为可选参数，值为一个js对象。该对象中的 keyPath 属性为主键，相当于数据库表中 id 为主键。autoIncrement 属性为 false，则表示主键值不自增，添加数据时需指定主键值。

注意：在数据库中，对象仓库名不可重复，否则浏览器会报错。

Key Path	Key Generator	    Description
1.No	No	：这种对象存储空间可以持有任意类型的值，甚至是像数字和字符串这种基本数据类型的值。每当我们想要增加一个新值的时候，必须提供一个单独的键参数。
2.Yes	No	：这种对象存储空间只能持有 JavaScript 对象。这些对象必须具有一个和 key path 同名的属性。
3.No	Yes	:这种对象存储空间可以持有任意类型的值。键会为我们自动生成，或者如果你想要使用一个特定键的话你可以提供一个单独的键参数。
4.Yes	Yes	:这种对象存储空间只能持有 JavaScript 对象。通常一个键被生成的同时，生成的键的值被存储在对象中的一个和 key path 同名的属性中。然而，如果这样的一个属性已经存在的话，这个属性的值被用作键而不会生成一个新的键。

objectStoreNames属性（是db的属性）
objectStoreNames属性返回一个DOMStringList对象，里面包含了当前数据库所有“对象仓库”的名称。可以使用DOMStringList对象的contains方法，检查数据库是否包含某个“对象仓库”。

if(!db.objectStoreNames.contains("firstOS")) {//上面代码先判断某个“对象仓库”是否存在，如果不存在就创建该对象仓库。
     db.createObjectStore("firstOS");
}

创建索引
indexedDB 数据库中通过数据对象的某个属性来创建索引，在数据库中进行检索时，只能通过被设为索引的属性进行检索。

var request = indexedDB.open('dbName', 4);
// ...
request.onupgradeneeded = function(e){
    var db = e.target.result;
    var store = db.createObjectStore('newUsers', {keyPath: 'userId', autoIncrement: false});
    var idx = store.createIndex('usernameIndex','userName',{unique: false})
    console.log('创建索引成功');
}
store.createIndex 方法接收三个参数，第一个为索引名，第二个为数据对象的属性，上例中使用 userName 属性来创建索引，第三个参数为可选参数，值为一个js对象。该对象中的 unique 属性为 true，代表索引值不可以相同，即两条数据的 userName 不可以相同，为 false 则可以相同。

transaction方法是db的方法
transaction方法用于创建一个数据库事务。向数据库添加数据之前，必须先创建数据库事务。
在 indexedDB 中，所有数据操作都只能在事务中执行。连接数据库成功后，可以使用 IDBOpenDBRequest 对象的 transaction 方法开启只读事务或读写事务。
transaction方法有三个事件，可以用来定义回调函数。

1.onabort()：事务中断。
2.onomplete()：事务完成。
3.onerror()：事务出错。

var request = indexedDB.open('dbName', 5);
// ...
request.onupgradeneeded = function(e){
    var db = e.target.result;
    var tx = db.transaction('Users','readonly');
    tx.oncomplete = function(e){
        console.log('事务结束了');
    }
    tx.onabort = function(e){
        console.log('事务被中止了');
    }
}
db.transaction 方法接收两个参数，第一个参数可以是字符串或数组，字符串时则是一个对象仓库名，数组时则是由对象仓库名组成的数组，transaction 可以对参数中任何一个对象仓库进行操作。第二个参数为事务模式，传入 readonly 时只能对对象仓库进行读操作，无法写操作。可以传入 readwrite 进行读写操作。

transaction方法返回一个事务对象，该对象的objectStore方法用于获取指定的对象仓库。
var t = db.transaction(["firstOS"],"readwrite");
var store = t.objectStore("firstOS");


操作数据（的方法）
1.add() : 增加数据。接收一个参数，为需要保存到对象仓库中的对象。
2.put() : 增加或修改数据。接收一个参数，为需要保存到对象仓库中的对象。
3.get() : 获取数据。接收一个参数，为需要获取数据的主键值。
4.delete() : 删除数据。接收一个参数，为需要获取数据的主键值。
var request = indexedDB.open('dbName', 5);
// ...
request.onsuccess = function(e){
    var db = e.target.result;
    var tx = db.transaction('Users','readwrite');
    var store = tx.objectStore('Users');
    var value = {
        'userId': 1,
        'userName': 'linxin',
        'age': 24
    }
    var req1 = store.put(value);        // 保存数据
    var req2 = store.get(1);            // 获取索引userId为1的数据
    req2.onsuccess = function(){
        console.log(this.result.userName);    // linxin
    }
    var req3 = store.delete(1);             // 删除索引为1的数据
    req3.onsuccess = function(){
        console.log('删除数据成功');        // 删除数据成功
    }
}
add 和 put 的作用类似，区别在于 put 保存数据时，如果该数据的主键在数据库中已经有相同主键的时候，则会修改数据库中对应主键的对象，而使用 add 保存数据，如果该主键已经存在，则保存失败。


检索数据
上面我们知道使用 get() 方法可以获取数据，但是需要制定主键值。如果我们想要获取一个区间的数据，可以使用游标。游标通过对象仓库的 openCursor 方法创建并打开。

想要遍历数据，就要openCursor方法，它在当前对象仓库里面建立一个读取光标（cursor）。
var t = db.transaction(["test"], "readonly");
var store = t.objectStore("test");

var cursor = store.openCursor();

openCursor方法也是异步的，有自己的success和error事件，可以对它们指定回调函数。
cursor.onsuccess = function(e) {
    var res = e.target.result;
    if(res) {
        console.log("Key", res.key);
        console.dir("Data", res.value);
        res.continue();
    }
}
## openCursor 方法接收两个参数，
第一个是 IDBKeyRange 对象，该对象创建方法主要有以下几种：
### IDBKeyRange对象的作用是生成一个表示范围的Range对象。生成方法有四种：
1. lowerBound方法：指定范围的下限。
2. upperBound方法：指定范围的上限。
3. bound方法：指定范围的上下限。
4. only方法：指定范围中只有一个值。

```js
// boundRange 表示主键值从1到10(包含1和10)的集合。
// 如果第三个参数为true，则表示不包含最小键值1，如果第四参数为true，则表示不包含最大键值10，默认都为false
var boundRange = IDBKeyRange.bound(1, 10, false, false);

// onlyRange 表示由一个主键值的集合。only() 参数则为主键值，整数类型。
var onlyRange = IDBKeyRange.only(1);

// lowerRaneg 表示大于等于1的主键值的集合。
// 第二个参数可选，为true则表示不包含最小主键1，false则包含，默认为false
var lowerRange = IDBKeyRange.lowerBound(1, false);

// upperRange 表示小于等于10的主键值的集合。
// 第二个参数可选，为true则表示不包含最大主键10，false则包含，默认为false
var upperRange = IDBKeyRange.upperBound(10, false);
```

### openCursor 方法的第二个参数表示游标的读取方向，主要有以下几种：
1. next : 游标中的数据按主键值升序排列，主键值相等的数据都被读取
2. nextunique : 游标中的数据按主键值升序排列，主键值相等只读取第一条数据
3. prev : 游标中的数据按主键值降序排列，主键值相等的数据都被读取
4. prevunique : 游标中的数据按主键值降序排列，主键值相等只读取第一条数据

```js
var request = indexedDB.open('dbName', 6); //打开一个数据库，第6的版本
// ...
request.onsuccess = function(e){//打开并创建一个游标
    var db = e.target.result;
    var tx = db.transaction('Users','readwrite');
    var store = tx.objectStore('Users');
    var range = IDBKeyRange.bound(1,10);
    var req = store.openCursor(range, 'next');
    req.onsuccess = function(){
        var cursor = this.result;
        if(cursor){
            console.log(cursor.value.userName);
            cursor.continue();
        }else{
            console.log('检索结束');
        }
    }
}
```
当存在符合检索条件的数据时，可以通过 update 方法更新该数据：

```js
cursor.update({
    userId : cursor.key,
    userName : 'Hello',
    age : 18
});
```
可以通过 delete 方法删除该数据：
```js
cursor.delete();
```
可以通过 continue 方法继续读取下一条数据，否则读到第一条数据之后不再继续读取：
```js
cursor.continue();
```
--- 

## 例子：
```html
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>HTML5 - IndexedDB</title>
<script type="text/javascript">
var db;
var request;//打开的数据库名字
var objectStore;//对象仓库
//创建数据库
function _create(dbName){
    request=indexedDB.open(dbName,1);//打开dbName数据库，版本为1；

   //监听链接数据库失败
        request.onerror = function () {
               alert("打开数据库失败:"+event.target.message);
               //监听链接数据库失败，执行的函数
        }

   //监听连接数据库成功执行
        request.onsuccess = function (event) {//监听连接数据库成功
            alert("打开数据库成功!");
            db=event.target.result;//这一句一定要加，什么意思，不理解
            var transaction = db.transaction(["info"], "readwrite");
            objectStore = transaction.objectStore("info");
        }

   //定义数据库版本更新时执行的方法
        request.onupgradeneeded = function(event) {
            alert("版本变化！");
            db = event.target.result;
          //创建对像仓库，info：对象仓库名，主键是userId，autoincrement：true主键自增，false为不自增；
            objectStore = db.createObjectStore("info", {keyPath: "userId",autoIncrement: true});
         }
     }

//删除数据库
    function _delete(dbName){
        try{
            request=indexedDB.deleteDatabase(dbName);
            request.onerror = function (event) {
                alert("删除数据库失败:"+event.target.message);
            }
            request.onsuccess = function (event) {
                alert("删除数据库成功!");
            }
        }catch(e){
           alert(e.getMessage);
        }
    }
//获取数据库
    function _get (argument) {
        var p=document.getElementById("display");//获得html中的display
        p.innerHTML="";//获取数据前先清理一下页面已显示的数据
        if(!db){
            alert("请打开数据先！");
            return false;
        }
        var store = db.transaction("info").objectStore("info");
        var keyRange = IDBKeyRange.lowerBound(0);//规定keyRange从0开始
        var cursorRequest = store.openCursor(keyRange);//按照keyRange的设置开启游标
        cursorRequest.onsuccess = function (e) {
            var result = e.target.result;
            if (!!result == false)
                return;
            _render(result.value);
            result.continue();//这边执行轮询读取
        };
        cursorRequest.onerror = function (e) {
            alert("数据检索失败！");
        };
    }
    function _render (e) {
        var p=document.getElementById("display");
        p.innerHTML+="姓名:"+e.name+" 年龄:"+e.age+" 性别:"+e.xb+"<br />";
    }
    function _add (argument) {
        var name=document.getElementById("name").value;
        var age=document.getElementById("age").value;
        var xb,flag=document.getElementById("nan").checked;
        if(flag)
            xb="男";
        else
            xb="女";
        var detail={
            name:name,
            age:age,
            xb:xb
        }
        if(!db){
            alert("请打开数据先！");
            return false;
        }
        var transaction = db.transaction(["info"], "readwrite");//所有数据操作都只能在事务中执行
        //info：是对象名仓库，readwrite是读写事务
        objectStore = transaction.objectStore("info");
        objectStore.add(detail);//给数据仓库添加这条数据
        alert("添加成功！");
    }
</script>
</head>
    <body>
        <small>添加前请先打开数据库(如数据库不存在则执行创建过程)</small><br /><br />
        <button onclick="_create('user')">打开数据库</button>
        <button onclick="_delete('user')">删除数据库</button><br /><br />
        姓名：<input type="text" id="name"><br />
        年龄：<input type="number" id="age" min=1><br />
        性别：<br />
              男：<input type="radio" id="nan" name="xb" value="male" checked>
              女：<input type="radio" id="nv" name="xb" value="female"><br />

        <button onclick="_add()">添加数据</button>
        <button onclick="_get()">获取数据</button><br />
        <p id="display"></p>

</body>
</html>
```