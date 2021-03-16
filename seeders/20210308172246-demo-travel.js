'use strict';

// const { DESCRIBE } = require("sequelize/types/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Places', [
      {
        name: "Laos",
        description: "Activities: $2.50 to see waterfalls, $7 tubing, $6 for tiger balm massage, or rent a motorbike for cheap!",
        link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/12/waterfall-272654_1920.jpg",
        cost: 30,
      },
      {
         name: "Cambodia",
         description: "Activities: $60.00 diving trip, $62/3days Angkor Wat - largest religious temple in the world",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/02/8070028218_90810b8c8b_b.jpg",
         cost: 25,
       },
       {
         name: "Vietnam",
         description: "Activities: $8.00/day Motorbike, $1.50 Shank Pork Dinner, $1.00 Strong Coffee",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2017/05/vietnamroute-1.jpg",
         cost: 30,
       },
       {
         name: "Northern Thailand",
         description: "Activities: $2.50 Pad Thai Dinner, $1.60 Vist White Temple, $10 Motor Bike",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/06/white-temple-1024x687.jpg",
         cost: 30,
       },
       {
         name: "Indonesia",
         description: "Activities: $15 Riding Scooter thru Moutains, $0 Relax at the Beach in a Hammock",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/03/indonesiaitinerary.jpg",
         cost: 30,
       },
       {
         name: "Malaysia",
         description: "Activities: $0 Explore jungles of Bornea, $450 Learn to Scuba Dive ",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2017/07/TIOMAN-1.jpg",
         cost: 35,
       },
       {
         name: "Romania",
         description: "Activities: $0 Vist medieval villages, $0 Walking Tours ",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/12/peles-castle-818943_1920.jpg",
         cost: 33,
       },
       {
         name: "Greece",
         description: "Activities: $0 Beaches, $0 Walking Tours ",
         link: "https://www.bemytravelmuse.com/wp-content/uploads/2019/08/sailing-greek-islands-poros.jpg",
         cost: 40,
       },
      ], {});
//   },], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Places', null, {});
  }
};
