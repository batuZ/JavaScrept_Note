//js学习笔记.js

### 01､常用调试命令

	document.write('向文档中写入内容');
	console.log('向控制台写内容，用于调试代码');
	alert('弹窗，也可用于调试');

### 02､杂记

	拆行符：  alert('hello\
		world!');

	注示： //
		/**/

	获取对象的类型： alert(typeof val);

	所有全局对象的父级都是 window ,可能通过 window.str 进行调用

	检测对象上是否有指定的属性
		'getNumber' in obj => true
		或
		obj.hasOwnProperty('getNnmber'); => true 

	检测对象是不是目标函数创建的
		thePro instanecof Project; => true


### 03､变量

	var str = 'hello';
	var int_num = 3;
	var flo_num =3.14;
	var boo = true;
	//重名会被覆盖，区分大小写

### 04､数据类型
	//数值类型，包括整数和小数。

		//无穷大(1.79e309)/小(-1,79e309)
		var maxNumber = Infinity;
		var minNumber = -Infinity;

		//非数字,不能和另一个Nan做比较，要用方法 isNaN(unNumber) => true
		var nuNumber = NaN;

### 05､类型转换

	//隐式类型转换:

		//以下类型可以当false用： (以外都是true)
		undefined	//未定义的对象
		null		//空对象
		0			//0 不为0都是true
		NaN 		//非数字
		""			//空字符串

		//数字的隐式转换
		undefined   -> NaN
		null		-> 	0	
		false		->  0
		true		->  1
		'abc'		-> NaN
		'25'		->  25

	//强制类型转换
		var num = 123;
		var str = String(num); -> '123'

		var aNum = Number(str); -> 123
			aNum = Number(true); -> 1

		var str = 'hello';
			aNum = Number(str); -> NaN

	//字符串强转为整数
		var str1 = '5566';
		radix = 0 / 2 / 8 / 10 / 16
		var num_int = parseInt(str1,radix);//radix 进制，默认为十进制

		//当字符串中有字母时，只从最左边开始取到字母前一位，后面不管有没有数字全部忽略
		//字符串中最前和最后的空格无视，字符串中间的空格当字母对待
		var str1 = ' 123a4 56 ';
		var num_int = parseInt(str1); -> 123

		//完全不能转换返回 Nan

	//字符串强转为小数
		var str2 = '3.14';
		var num_float = parsefloat(str2); -> 3.14

		//完全不能转换返回 Nan

### 06､特殊的运算符

	//比较运算符 
		==   值相等为true
		===	 全等于，值和类型都一样为true
		!==	 不全等

### 07､函数

	//函数是全局的，可以在定义前调
		test();
	//定义函数,参数为局部变量，只能在函数内有访问
		function test(num1,num2){
			return num1+num2;
		}

	//关于传参
		test()时，会传两个 undefined
		test(3)时，会传一个3,一个 undefined
		test(1,2,3,4)时，只会传前两个，其它忽略

		//不支持默认参数，可以通过下面的方法代替
		function test(num1,num2) {
			//当num1有值时用num1,num1为underfined时赋值为3
			num1=num1||3;
			num2=num2!==undefined?num2:2;
			arguments[0]=arguments[0]|| 5;
			arguments[1]=arguments[1]|| 7;
		}

		//函数中的 arguments ,是函数参数的集合array
		//实现可变参数的函数
		function sum() {
			for (var i = 0; i < arguments.length; i++) {
				var he+= arguments[i];
			}
			return he;
		}

		//函数也是数值，可以赋值给变量
		var myFun = function add(obj) {	obj.tostring(); };
		myFun(obj);

		//匿名函数
		var tt = function(x,y){return x+y};

		//回调函数
		function test(x,y,callback) {
			return callback(x,y);
		}
		function hehe(e,r) {
			return e+r;
		}
		test(3,4,5,hehe);

		//系统定义的回调函数
		function fun1(a) {
			return a*2;
		}
		function fun2(x,y) {
			return x+y;
		}
		//call 直接调用
		fun1.call(fun2,5,6);

		//apply 打包参数调用
		var paramsArr = [8,9];
		fun1.apply(fun2,paramsArr);

		//自调函数,声明、定义、执行一次性完成
		//只调用一次，一般用于初始化
		//好处是不会产生全局变量
			//  匿名无参
			(function(){alert('自调函数');})();
			// 	带参
			(
				function fun(x,y) {
					alert(x+y);
				}
				)(44,67);

### 08､变量的作用域
	//函数外 var a=9; 	全局
	//函数内 a=9;		全局
	//函数内 var a=9; 	局部，在函数内所有位置可访问

### 09､转码
	//url转码：
	var urls = 'http://www.gvitech.com';
	var res = encodeURI(ruls);
	var unRes = decodeURI(res);

	var res1 = encodeURIComponent(urls);
	var unRes1 = decodeURIComponent(res1);

	//字符串转码
	var str = 'hello world';
	var res2 = escape(str2);
	var unRes2 = unescape(res2);

### 10､eval 字符串转为代码
	var str = 'var ss = 12;';
	eval(str);
	alert(ss);
	//危险，低效，少用或不用

### 11､对象，对象是一种复合类型
	
	自定义对象之：对象字面量

		var obj = {}; //空对象 typeof obj => object
		var obj1 = {x:1,y:2};
		var obj2 = {
			'name':'batu',
			"age": 33,
			carColoer: 'green'
		};

	自定义对象之：通过内置父类创建对象
		var obj3 = new Object(); 	//空对象
		var arr = new Array();		//空数组
		var date = new Date();		//日期对象
		var reg = new new RegExp(‘js’); //空的正则对象

	自定义对象之：通过构造函数创建对象
		//需要先有一个近似类的函数
		function Project(name,user_id,groups,photos) {
			this.name=name;
			this.user_id=user_id;
			this.groups=groups;
			this.photos=photos;
		}

		var thePro = new Project('pro01',33,new groups(),new photos());
		typeof thePro; => object

		//检测对象是不是目标函数创建的
		thePro instanecof Project; => true

	自定义对象之：
		//无原型创建对象
		通过object.create(null)创建一个空对象
		
		// {x:4}为父原型的对象，第一个参数是原型
		var obj4 = object.create({x:4});
		
		//基于对象创建对象
		var obj5 = obj4.create();
		obj5==obj4; => true

### 12､对象属性的访问操作
	var pro = {
		'proName':'testPro01',
		'proSize': 1024,
		'proStatus':true,
		'proID': 12
	};

	访问

		var getname = pro.proName;
		//以 . 访问属性时，如果属性与某个变量冲突就会出错
		//以 ['  '] 访问，即使名称相同也不会产生冲突，更安全
			getname = pro['proName'];

	增加属性

		var group = {};
		group.name = 'grp01';
		group.width = 4000;
		group.hieght = 3000;
		group.getCount = function () {
			return photos.count;
		};

		alert(group.width);
		var count =	group.getCount();
	
	修改属性
		group.name = 'grp03';
		group['width'] = 5000;

	删除对象的某个属性
		delete group.hieght;
		group.hasOwnProperty('hieght'); => false

	遍历对象的属性
		for(var itm in pro){
			alert(itm);
		}
		或
		var arr = pro.keys(); => Array
		或
		pro.getOwnPropertyNames();

	检测对象上是否有指定的属性
		bool isHad = 'getNumber' in obj

### 13､对象的特性，对象属性的特性

	属性的特性：

		定义和修改这些特性的方法
		创建对象时定义的属性特性的值都为true
		调用这个函数时默认值都是flase

		writable		//是否可写的

		enumerable 		//是否可枚举的,遍历对象属性名时，这个属性名是否能被发现，
						//		for..in|obj.keys()
						// 通过propertyIsEnumerable判断属性是否可枚举
						object.propertyIsEnumerable("x");

		configurable	//是否可配置的,比如删除或重新修改writable、enumerable的配置
						// 		使obj变成可写可枚举等，是个权限控制

		value 			//包括属性的值，用来读写属性，默认为 undefinded
		getter 			//获取属性的值
		setter 			//设置属性的值

		ex:
			var obj = {};
			//给obj增加一条属性x值为22,此时的所有特性均为false,不能写，不能删，不能枚举
			Object.defineProperty(obj, 'x', { value:22 });

			var obj1 = {};
			//给obj增加一条属性y值为54,并指定特性
			Object.defineProperty(obj1, 'y', {
				value: 54,
				writable:true, 			//是否可写的
				enumerable:true, 		//是否可枚举的,遍历对象属性名时，这个属性名是否能被发现
				configurable:true 		//是否可配置的,比如删除或重新修改writable、enumerable的配置
			});							// 		使obj变成可写可枚举等，是个权限控制

			//一次为对象设置多条属性
			Object.defineProperties(obj1,{
				name:{
					value:'haha'
				},
				types{
					value:3,
					writable:true
				},
				color{value:red,
					writable:true,
					enumerable:true}
			});
			
			//查看指定属性的特性描述
			console.log(
				Object.getOwnPropertyDescriptor(obj1, 'color');
				);

		set\get 存取器

			在字面量对象中
				var obj={
					get name(){return 'batu';}
					set name(val){ alert(val);}
				};
				var strName = obj.name;
				obj.name = 'zhangzhi';

			在objectDefine中
				Object.defineProperty(obj, 'email', {
					get : function () { return 'batu';}
					set : function (value) { console.log(value); }
				});

	属性继承
		function Father(){
			this.jump = 'jumping';
		}

		var obj = new Father();
		obj.name = 'hiboy';

		//jump 是prototype,父对象的属性
		console.log(obj.jump);


	对象的特性：
		//查看父对象的原型,croom subry支持，IE不支持 
		proto 		
			function Father (){};
			var obj = new Father();
			obj.__proto__ => Father(function)

		//描述对象类型的字符串
		class
			//内置对象类型不能通过 typeof 获取其准确的类型，只能得到object
			//需要自己写一个函数来实现
			function classof(obj){
				if(obj === undefined)
					return 'undefined';
				if(obj === null)
					return 'null';
				return Object.prototype.toString.call(obj).slice(8, -1);
			}
			var obj = new Array();
			console.log(classof(obj));

		extensible???


### 14､数组
	创建数组
		// 	字面量创建
		var arr = [];
		arr = [1, 'aa'+'bb', 3.14, [x,y], null, undefined, {x:'X'}, false];
		arr = [1, , 3]; -> [1,undefined,3]

		//构造函数
		var arr = new Array();
		arr = new Array(3); length->3
		arr = new Array(1, 'aa'+'bb', 3.14, [x,y], null, undefined, {x:'X'}, false);
	
	操作数组
		var arr = [1, 'aa'+'bb', 3.14, [x,y], null, undefined, {x:'X'}, false];

		//读
			var s = arr[1];

		//改
			arr[0] = 44;

		//增

			//增加成员到指定位置
			arr[60] = 'haha'; -> length=61;

			//增加成员到数组未尾
			arr.push(55.5);
			arr.push('f','g');

			//增加成员到数组开始位置
			arr.unshift(4.2);
			arr.unshift('h',3);


		//删

			//删掉指定的成员,删完后数组的长度是不变的，也就是索引不变，可以肆意的for delete!
			delete arr[3];

			//删掉最后一个成员,返回被删的成员
			var lastOne = arr.pop();

			//删掉第一个成员，返回这个成员
			var fristOne = arr.shift();

	关于length

		//设置length的值，小于现有值数组会被截断，大于现有值成员数量无变化
		arr = [1,2,3,4,5,6];
		arr.length = 3; arr -> [1,2,3] 

		//当length=0时会清空数组

		//如果不想让数组可以修改长度可以设置一下数组的length属性的特性
		Object.defineProperty(arr, 'length', {writable:false});


	遍历数组

		//连续数组，稠密数组
		for (var i = 0; i < arr.length; i++) {
			arr[i]
		}

		//不连续数组，稀疏数组
		for (var itm in arr) {
			itm
		}
		//只遍历自己的成员（属性）
		for(var itm in arr)	{
			if(arr.hasOwnProperty(itm)){
				itm
			}
		}
		
		//实例方法，用来exite,find,max,min等
		arr.forEach(function(i){if(i>99) return i;});

	Array的内置方法

	join
		//用 , 把成员连在一起（默认为 ，），返回个字符串，是切分字符串的逆向操作
		arr.join(',')

	reverse
		//返转数组内成员的顺序，返回一个新数组
	    var newArr = arr.reverse();

	sort
	    //排顺，默认参照Unicode编码
	    //自定义排序，接收每一个成员与下一个成员参与的表达式
	    //获得返回值，并对返回值进行从小到大的排序
	    //	传入两个成员，当前成员a,下个成员b
	    //  返回值flase=0,a会向前排，true=1,a会向后排
	    //  从小到大
		arr.sort(function (a,b) {return a>b;});
		//  从大到小
		arr.sort(function (a,b) {return a<b;});
		//  或
		arr.sort(function (a,b) {return a-b;});

	concat
		//把指定的对象连接到当前数组的后面，返回一个新的数组
		var newArr = arr.concat(4,'e',[4,5,6]);

	slice
		//截取当前数组中的一部份，返回一个新的数组，且原数组不变
		var newArr = arr.slice(3);   //从下标3开始到最后
		var newArr = arr.slice(2,4); //从下标2开始，截4个

	splice
		//取出当前数组中的一部份，返回被取出的部份
		//同时可以选择是否要用新的成员替换到原来的位置
		var getArr = arr.splice(2, 4); //取出从2开始的4个成员返回，原数组中的删掉
			//取出从2开始的4个成员返回，并把参数中的对象放入被取出成员的位置上
		var getsetArr = arr.splice(2, 4, 'a','b','c','d','e');

	map
		//对数组中每个成员执行一次指定的函数，并返回到一个新的数组中
		var newArr = arr.map(function (a) {return a*2; });

	filter | every | some
		//用指定的规则过滤数组，并得到一个成员全部符合条件的新数组
		//遍历数组中的每个成员，把返回true的成员放到新的数组中
		var newArr = arr.filter(function (a) { return a>0;});

		//every | some 返回值为bool
		//every如果有任何一个成员的表达式返回了false,every返回false,全部为true时every返回true
		//some 如果有任何一个成员的表达式返回了true,some返回true,全部为false时some返回false

	reduce | reduceRight
		//成员累加器，把传入的参数a,b操作后返回一个值ab继续与c进行操作，最后返回一个值
		//也可以传入一个初始值
		//reduce 从左到右 reduceRight 从右到左
		var arr = [3,4,5,6,7];
		
		var val = arr.reduce(function (a,b) {return a+b;});
		/*过程为：
			r = 3+4;
			r = r+5;
			r = r+6;
			r = r+7;
			return r;
			*/

		var val = arr.reduce(function (a,b) {return a+b},  10);
		/*过程
			r = 10;
			r = r+3;
			r = r+4;
			r = r+5;
			r = r+6;
			r = r+7;
			return r;
		*/

	indexOf | lastIndexOf
		//在数组中搜索指定的成员的索引，indexOf是搜索第一个出现的成员，lastIndexOf是搜索最后一个出现的成员
		//第一个参数是要找的目标成员，第二个参数可选，指定从哪个位置开始找
		//找到了返回索引值，找不到返回 -1
		//	从第四个对象开始找到 'e' 的索引
		var itm_id = arr.indexOf('e', 4)

	isArray
		//判断一个对象是否是数组
		Array.isArray(arr); -> true

	toString
		//把数组直接转为字符串
		arr.toString();















