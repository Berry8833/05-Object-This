// TODO: What is `this` referring to here?
console.log(this);

// TODO: What is `this` referring to here?
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
helloThis();

// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10,
  name:"mgmg",
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
this.child
this.child.ageTenYears

// TODO: What is `this` referring to here? What will be logged in the console?
var investor ={
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};
investor.investment.investmentGrowth();





// TODO: Call the `helloThis` function and the object methods to check results in the console
var a = window.prompt("Avalue");
var b = window.prompt("Bvalue");
console.log(a+b);

var a = parseInt(window.prompt("Avalue"));
var b = parseInt(window.prompt("Bvalue"));
console.log(a-b);



alert("Where you go?");
var choose = function(){
  var question = prompt("left or right");
  if(question == "right"){
    alert("You have chosen right");
  }else if(question == "left"){
    alert("You have chosen left");
  }else("You don't chosen");
}
choose();



