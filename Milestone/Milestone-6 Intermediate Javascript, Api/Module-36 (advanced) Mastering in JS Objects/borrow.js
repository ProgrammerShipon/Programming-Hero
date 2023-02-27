const kodomAli = {
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

const result = kodomAli.exam();
// console.log(result);

const badamAli = {
  name: "kacha badam",
  money: 8000,
};

const result2 = kodomAli.exam.call(badamAli);
console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 50);
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000, 200);
console.log(remaining);
