//function f1() {
//	let n = 5;
//	if (true) {
//		let n = 10;
//	}
//	console.log(n); // 5
//}
//f1();

//ES5 �� ES6���ں��������Ĳ��죺
//function f() { console.log('I am outside!'); }
//var a = 'out';
//(function () {
//	if(false) {
//		// �ظ�����һ�κ���f
//		function f() { console.log('I am inside!'); }
//		var a = 'in';
//	}
//	f();
//}());
//console.log(a);

//�鼶�������ⲿ���޷����ÿ鼶�������ڲ�����ĺ�����
//{
//	let a = 'string';
//	function f3(){
//		console.log(a);
//	}
//}
//f3();

//ES5�����f4��������ִ�� PS,ES5���ϸ�ģʽ�涨������ֻ���ڶ���������ͺ���������
//{
//	var a = 'string';
//	function f4(){
//		console.log(a);
//	}
//}
//f4();

//ES6����Ҫ�ڿ鼶�������ⶨ��f5�����ִ��
let f5;
{
	let a = 'string';
	f5 = function (){
		console.log(a);
	}
}
f5();