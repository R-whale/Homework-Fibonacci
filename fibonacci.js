//定义函数
function Fibonacci(){}
//定义函数的静态方法
Fibonacci.of = function(n){
    return n<2 ? n : Fibonacci.of(n-1) +  Fibonacci.of(n-2);
}
//定义main()函数，循环打印Fibonacci数列
function main(re){
    for(var i = 1;; i+=1){
        var m = Fibonacci.of(i);
        if (m > 200){
            break;
        }      
        console.log(Fibonacci.of(i));
    }
}
//调用main()函数
main(200)
