//function f1() {
//	let n = 5;
//	if (true) {
//		let n = 10;
//	}
//	console.log(n); // 5
//}
//f1();

//ES5 和 ES6关于函数提升的差异：
//function f() { console.log('I am outside!'); }
//var a = 'out';
//(function () {
//	if(false) {
//		// 重复声明一次函数f
//		function f() { console.log('I am inside!'); }
//		var a = 'in';
//	}
//	f();
//}());
//console.log(a);

//块级作用域外部，无法调用块级作用域内部定义的函数。
//{
//	let a = 'string';
//	function f3(){
//		console.log(a);
//	}
//}
//f3();

//ES5中这个f4函数可以执行 PS,ES5的严格模式规定，函数只能在顶层作用域和函数内声明
//{
//	var a = 'string';
//	function f4(){
//		console.log(a);
//	}
//}
//f4();

//ES6中需要在块级作用域外定义f5后才能执行
let f5;
{
	let a = 'string';
	f5 = function (){
		console.log(a);
	}
}
f5();