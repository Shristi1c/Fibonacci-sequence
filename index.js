function fibonacci(n){
  if (n==0){
    return 0;
  }
  if (n==1)
    return 1;
  const fib=[0,1];
  if (n>=2){
    for(var i=2;i<=n;i++)
      fib[i] = fib[i-1]+fib[i-2];
    
  }
    return fib;
}
console.log(fibonacci(7))