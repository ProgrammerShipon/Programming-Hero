// syntactic sugar
class TeamMember {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  name;
  location;

  provideFeedback() {
    console.log(`${this.name} thank you for your feed  back`);
  }
}

class Instructor extends TeamMember {
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  designation = "Web Course Instructor";
  team = "Web team";
  tech;

  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }

  createQui(module) {
    console.log(`please create qui for module ${module}`);
  }
}

class Developer extends TeamMember {
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  designation = "Web Course Instructor";
  team = "Web team";
  tech;

  developFeature(feature) {
    console.log(`start the support session at ${feature}`);
  }

  release(version) {
    console.log(`please create qui for module ${version}`);
  }
}

class JobPlacement extends TeamMember {
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }

  designation = "Job Placement Commandos";
  team = "Web team";
  region;

  provideResume(feature) {
    console.log(`start the support session at ${feature}`);
  }

  prepareStudent(version) {
    console.log(`please create qui for module ${version}`);
  }
}

const alia = new Developer("Alia Bhatt", "Dhaka", "React");
console.log(alia);

const Shipon = new Instructor(
  "Shipon Hossen Raju",
  "Pabna",
  "Full Stack Web Developer"
);
console.log(Shipon);

const Raju = new JobPlacement("Raju", "Pabna", "US");
console.log(Raju);
