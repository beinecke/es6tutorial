var a = [],b = [];
//�ַ���ģ�������Ƿ�Ʋ��
for (let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(`array a use keyword "let",and 6th element\'s result is ${i}`);
	};
}
for (var i = 0; i < 10; i++) {
	b[i] = function () {
		console.log(`array a use keyword "var",and 6th element\'s result is ${i}`);
	};
}
a[5]();
b[5]();