module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'accounts',
      [
        {
          balance: 100.00,
        },
        {
          balance: 100.00,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
