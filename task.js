const prompt = require("prompt-sync")();

let age = prompt("Enter your age:")
if(age>=20 & age<23)
{
  console.log("PG students");
}
else if(age<20 & age>=18)
{
   console.log("UG students");
}
else if(age>0 & age<18)
{
    console.log("School students");
}
else if(age>23 & age<100 )
{
    console.log("Working employee");
}
else{
   console.log("Invalid Input");
}
