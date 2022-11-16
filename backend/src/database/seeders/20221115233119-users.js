module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'ng.vitor',
          password: '$2a$10$PRohJmrqPnfEVpg.ioFBkO3mYvmODLpeIQJFTnTsxsWrlAR41LF2G', // ng.vitor
          accountId: 1,
        },
        {
          username: 'ng.gabriela',
          password: '$2a$10$mXdmY4Y49gsGEem0xV9TVu8mZKW91XsdI1xPKAq503Frhi.k0Hk2G', // ng.gabriela
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
