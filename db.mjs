import fs from 'fs';
import { Sequelize } from 'sequelize';

const dbConfig = {
  database: fs.readFileSync('/etc/config/database', 'utf8').trim(),
  username: fs.readFileSync('/etc/config/user', 'utf8').trim(),
  password: fs.readFileSync('/etc/config/password', 'utf8').trim(),
  host: fs.readFileSync('/etc/config/host', 'utf8').trim(),
  dialect: 'mysql',
};

const db = new Sequelize(dbConfig);

export default db;
