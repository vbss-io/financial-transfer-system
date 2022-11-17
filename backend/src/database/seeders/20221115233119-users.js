module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'ng.vitor',
          password: '$2a$10$sBGeYDoSiObbWfg9DqfoMeUUq/BjRaR9CQdrlbkSa3tl3Jh33LJpO', // nG1.vitor
          accountId: 1,
        },
        {
          username: 'ng.gabriela',
          password: '$2a$10$iyXwPCxhABH5d83GbtF.H.xVVqa8/iFtikdkzxxFn/9b01S3k44oi', // nG2.gabriela
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
