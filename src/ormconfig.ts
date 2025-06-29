import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'devuser',
  password: '1234',
  database: 'blog',
  entities: [__dirname + '**/*.entity{.ts,.js}'],
  synchronize: true, // Note: Do not use in production
};

export default config;
