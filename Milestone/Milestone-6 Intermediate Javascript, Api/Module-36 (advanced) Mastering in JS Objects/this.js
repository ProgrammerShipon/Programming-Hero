// console.log(this);

const kodomAli = {
  name: "Kodom Ali",
  money: "5000",
  study: "Math",
  subjects: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name + " is participating in an exam";
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
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

// kodomAli.exam();

const badamAli = {
  name: "kacha badam",
  money: 8000,
};

badamAli.exam = kodomAli.exam();
console.log(badamAli.exam);

function clickHandler() {
  console.log("inside click handler", this);
}

document.getElementById("btn-click2").addEventListener("click", function () {
  console.log(this);
});
