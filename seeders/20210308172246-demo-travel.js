'use strict';

// const { DESCRIBE } = require("sequelize/types/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Places', [{
        name: "Laos",
        description: "Activities: $2.50 to see waterfalls, $7 tubing, $6 for tiger balm massage, or rent a motorbike for cheap!",
        link: "https://www.bemytravelmuse.com/wp-content/uploads/2018/12/waterfall-272654_1920.jpg",
        cost: 30
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Places', null, {});
  }
};
