
const date = "12-05-2025"


const a : any = [{
    name : "velu",
    age : "dfi"
}]

if(a){
    console.log(a, "This Is IF");
}
else if(a[0].name){
    console.log(a);
}
else if(a[0].age){
    console.log(a);  
}
else{
    throw new Error("Somethig error");   
}
