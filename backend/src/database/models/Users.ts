// - id —> *PK*
// - username (o @ do usuário)
// - password (*hasheada*)
// - accountId —> *FK* Accounts[id]

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import Accounts from './Accounts';

class Users extends Model {
  public id!: number;

  public username!: string;

  public password!: string;

  public accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: false,
});

// Users.belongsTo(Accounts, { foreignKey: 'accountId' });

export default Users;