import { join } from 'path';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'devuser',
  password: '1234',
  database: 'blog',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // synchronize: true,
  // logging: true,
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
};

const AppDataSource = new DataSource(config);

export { AppDataSource };

export default config;
