let str1 = "INeuron";
let itr2= str1[Symbol.iterator]();
 let res=itr2.next();
 console.log(res);

 while(!res.done)
 {
    console.log(res.value);
    res=itr2.next();
 }