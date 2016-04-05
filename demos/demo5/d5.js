//let [head,...tail] = [1,2,3,4];
//console.log(head);
//console.log(tail);
//
//function* fibs(){
//	var a = 0;
//	var b = 1;
//	while(true){
//		yield a;
//		[a,b] = [b,a+b];
//	}
//}
//var [first,second,third,forth,fifth] = fibs();
//console.log(first,second,third,forth,fifth);
//
//let [x = y,y= 1] = [2,4];
//console.log(x);

//let {toString:s} = 123;
//console.log(s);

//function move({x,y} = {x:0,y:0}){
//	return [x,y];
//}
//console.log(move([3,8]));
//console.log(move({x:3,y:8}));
//console.log(move({x:3}));
//console.log(move({}));
//console.log(move());

function move1({x = 0,y = 0} = {}){
	return [x,y];
}
console.log(move1([3,8]));
console.log(move1({x:3,y:8}));
console.log(move1({x:3}));
console.log(move1({}));
console.log(move1());