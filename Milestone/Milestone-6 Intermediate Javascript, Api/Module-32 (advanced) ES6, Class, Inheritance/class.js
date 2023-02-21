// syntactic sugar
class Instructor {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  name;
  designation = "Web Course Instructor";
  team = "Web team";
  location;
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQui(module) {
    console.log(`please create qui for module ${module}`);
  }
}

const raju = new Instructor("raju", "Pabna");
console.log(raju);
raju.startSupportSession("9.00");
raju.createQui(60);

const Shipon = new Instructor("Shipon", "Rajbari");
console.log(Shipon);
