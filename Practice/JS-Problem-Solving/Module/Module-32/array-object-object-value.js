/**
 *       Practice Problem - 7 ( Access Object Values)
 * let data = {
 *    location: [
 *       latitude: '34.5, 37.8',
 *       longitude: '98.77 , 58.7',
 *       city: 'Hyderabad',
 *       country: 'India'
 *    ]
 * }
 *
 * console the value of city
 */

let data = [
  {
    location: {
      latitude: "34.5, 37.8",
      longitude: "98.77 , 58.7",
      city: "Hyderabad",
      country: "India",
    },
  },
];

const { location } = data[0];
const { city } = location;
console.log(city);
