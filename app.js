//変数宣言
// 整数を代入する
let int1 = 1;

// 負数を代入する
let int2 = -10;

// 小数点を代入する
let float1 = 3.14;

// 文字列を代入する
let str = 'JavaScriptを覚えよう';

//アラートを表示
alert(int1);


//四則演算
// 足し算
alert(4 + 3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);


//文字列の結合
alert('Hello' + 'World');

let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);


//条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


//繰り返し処理
//while文
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//do...while文
let number = 1;

do{
  alert(number + '回目' );
  number = number + 1;
}while(number <= 3);

//for文
let i;
let numb = 0;

for(i = 1; i < 11; i++){
  numb = numb + i;
}

alert('1から10まで足し算した結果は' + numb + 'です');




