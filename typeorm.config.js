module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'subway-group-odrer',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: false,
};
