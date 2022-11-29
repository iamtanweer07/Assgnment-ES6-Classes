class Car 
{
  constructor(brand)
  {
    this.carname = brand;
  }
  present()
  {
    return 'I have a ' + this.carname;
  }
}
class Model extends Car 
 {   // extends keyword is used to create child class of another class(parent)
  constructor(brand,mod)
  {
    super(brand);  // super method to call the parent's constructor function.
    this.model = mod;
  }
  show()
  {
    return this.present() + ', it is a' + this.model;
  }
}
myCar = new Model("Jaguar"," F-Type");
document.getElementById("demo").innerHTML = myCar.show();