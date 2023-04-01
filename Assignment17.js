var c=["John", "Rohn", "Danny", "James"];

for(let i=0;i<c.length;i++)
{
     console.log(c[i]);
}

let g=c[Symbol.iterator]();

console.log(typeof c[Symbol.iterator]());

 let firstValue=g.next();

      console.log(firstValue);

      let secondValue=g.next();
      console.log(secondValue);

      console.log(g.next().value);
      console.log(g.next().done);

      console.log(g.next());