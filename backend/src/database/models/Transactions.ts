// - id —> *PK*
// - debitedAccountId —> *FK* Accounts[id]
// - creditedAccountId —> *FK* Accounts[id]
// - value
// - createdAt

import { Model, INTEGER, DECIMAL } from 'sequelize';
import Accounts from './Accounts';
import db from '.';

class Transactions extends Model {
  public id!: number;

  public debitedAccountId!: number;

  public creditedAccountId!: number;

  public value!: number;

  public createdAt!: Date;
}

Transactions.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'id',
    },
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'id',
    },
  },
  value: {
    type: DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
  },
}, {
  sequelize: db,
  tableName: 'transactions',
  timestamps: false,
});

Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccountId', as: 'debitedAccount' });
Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccountId', as: 'creditedAccount' });

export default Transactions;