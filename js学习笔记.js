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

	对象的特性：
		proto 		//父对象的属性，当自身属性使用
		class
		extensible

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












