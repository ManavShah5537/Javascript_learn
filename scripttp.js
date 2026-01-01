let arr=[1,2,3,4];

arr.forEach((sq,m) => {
  console.log(m**2);
  
});

let filter = arr.filter((val)=>{
  return val>2;
}
)
console.log(filter);

let n= prompt("Enter a number: ");
let ar=[];

for(let i=0;i<n;i++)
{
  ar[i]=i+1;
}
console.log(ar);

let output = ar.reduce((pre,cur)=>{
  return pre*cur;
}
)
console.log(output);