//使用模块对象 module
//console.log('这是模块2');
/**
 * module： 保存提供和当前模块有关的一些信息
 * 在这个module
 * 我们可以通过这个对象把一个模块中的局部变量对象
 * 在module对象下，有一个字对象，exports 对象
 * 我们可以通过这个对象把一个模块中的局部变量对象进行提供访问
 */
var a = 100;
module.exports.a = a;
