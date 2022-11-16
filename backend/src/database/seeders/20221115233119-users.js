module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'ng.vitor',
          password: 'ng.vitor',
          accountId: 1,
        },
        {
          username: 'ng.gabriela',
          password: 'ng.gabriela',
          accountId: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
