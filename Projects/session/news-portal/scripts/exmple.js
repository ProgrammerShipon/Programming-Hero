var ufjson = [
  {
    amount: "50",
    discount: "0",
    start_date: "2021-01-01T18:24:18.790+08:00",
    end_date: "2020-01-29T18:24:18.790+08:00",
  },
  {
    amount: "100",
    discount: "10",
    start_date: "2021-01-21T18:24:18.790+08:00",
    end_date: "2020-01-25T18:24:18.790+0[8:00",
  },
];

var dateNow = new Date();
var filteredJson = ufjson.filter(
  (item, index) =>
    new Date(item.start_date).getTime() <= dateNow.getTime() &&
    new Date(item.end_date).getTime() <= dateNow.getTime()
);

console.log("item:", filteredJson);
