// - id —> *PK*
// - balance

import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';

class Accounts extends Model {
  public id!: number;

  public balance!: number;
}

Accounts.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'accounts',
});

export default Accounts;