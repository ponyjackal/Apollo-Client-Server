'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'example@example.com',
      OrganizationId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Edward D. Cardona',
      email: 'Edward@Edward.com',
      OrganizationId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'James L. Blake',
      email: 'James@James.com',
      OrganizationId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John K. Nebel',
      email: 'John@John.com',
      OrganizationId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Peter S. Gray',
      email: 'Peter@Peter.com',
      OrganizationId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dylan L. Potts',
      email: 'Dylan@Dylan.com',
      OrganizationId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Robert N. Heidt',
      email: 'Robert@Robert.com',
      OrganizationId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jason K. Smith',
      email: 'Jason@Jason.com',
      OrganizationId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kurt L. Holly',
      email: 'Kurt@Kurt.com',
      OrganizationId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});

  }
};
