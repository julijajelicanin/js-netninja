function greet(){
    console.log("hello");
}

const speak = function(){
    console.log("good day");
};

greet();

speak();

//arguments and parametres
const greeting = function(name){
    console.log(`good day ${name}`);
};

const greetings_2 =function(name, surname){
    console.log(`Hi ${name} ${surname}`);
};

greeting('julija');
greetings_2('Julija','Jelicanin');

//returning values-regulR FUNCTION
 const calcArea = function(radius){
    return 3.14*radius**2;
 };

 const area= calcArea(5);
 console.log(area);

 //arrow function
 const calculateArea =(radius)=>{
    return 3.14*radius**2;
 };

 const area_2 =calculateArea(5);
 console.log('area is:' ,area_2);

 //practice functions
 const practice= function(){
    return 'hello world';
 };

 const practice1=()=>{
    return 'hello world';
 }

 //practice 2

 const bill = function(products, tax){

    let total=0;
    for(let i=0; i< products.length; i++)
    {
        total+=products[i] +products[i]*tax;
    }
    return total;
 }


 function bill1(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

 //methods
 const name2 = "shaun";

 let resultTwo = name2.toUpperCase();
 console.log(resultTwo);


 //for each

 let people = ['mario','luigi','shaun','marco'];

 const logPerson=(person, index)=> {
    console.log(`${index} - hi ${person}`);
 };

 people.forEach(logPerson);

//arrow function (using for each)
 people.forEach((person) => { 
    console.log(person);
 });