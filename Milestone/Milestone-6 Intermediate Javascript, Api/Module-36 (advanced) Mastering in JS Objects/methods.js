const student = {
  name: "Kodom Ali",
  money: "5000",
  study: "Math",
  subjects: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name + " is participating in an exam";
  },
  improveExam: function (subjects) {
    this.exam();
    return `${this.name} is takeing improvement exam on ${subjects}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const output = student.exam();
console.log(output);

const reExam = student.improveExam(["Algebra", " calculus"]);
console.log(reExam);

const remaining = student.treatDey(900, 100);
console.log(remaining);

const dolaReamining = student.treatDey(500, 50);
console.log(dolaReamining);
