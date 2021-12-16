//尽量不要定义全局函数，容易重名

//1:利用函数对象可以返回一份新的对象
var fn = function () {
    return {
        checkName: function () { },
        checkName: function () { },
        //...
    }
}
//每次返回的都是一个新的对象，大家使用的时候不会互相影响
var a = fn()
a.checkName()


