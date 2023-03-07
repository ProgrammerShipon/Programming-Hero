// 1) How will you access Sophia’s secondary school location?

let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },

          { location: "St Lorence" },
        ],
      },
    ],
  },
};

const {
  Sophia: {
    study: [{ primary }],
  },
} = data;

const { study } = data.Sophia;
const [primarys, secondarys] = study;
const { secondary } = secondarys;
const [school, location] = secondary;
const { school_name } = school;

// console.log(`${Secon_school_name}, ${Secon_location}`);
console.log(primary);

/*

const {
  Sophia: {
    study: [
      {
        primary: [
          // { first_school },
          // { school_name: primarySchool },
          // { location: primarySchoolLocation },
        ],
      },
      // {
      //   secondarys: [
      //     { school_name: secondarySchool },
      //     { location: secondarySchoolLocation },
      //   ],
      // },
    ],
  },
} = data;
*/
