const _ = require('lodash');

// chunk,片段化数组
const arr = [1,2,3,4,5,6,7,8,9];
console.log('chunk---', _.chunk(arr,2));


// compact，去除假值。（将所有的空值，0，NaN过滤掉）
console.log('compact---', _.compact(['1','2',' ',0]));


// uniq，数组去重。（将数组中的对象去重，只能是数组去重，不能是对象去重。）
console.log('uniq---', _.uniq([1,1,3]));



// filter和reject，过滤集合，传入匿名函数。（二者放在一起讨论的原因是，两个函数类似但返回的值是相反。）
console.log('filter---', _.filter([1,2],x => x = 1));

console.log('reject---', _.reject([1,2],x => x=1));




// map
console.log('map---', _.map([1,2],x => x+1))


// merge合并, 
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
console.log('merge---', _.merge(object, other));


// extend
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
console.log('assignIn---', _.assignIn({ 'a': 0 }, new Foo, new Bar));


// concat
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log('concat---', other, array);



// keys
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;



console.log('keys---')
console.log(_.keys(new Foo));
console.log(_.keys('hi'));