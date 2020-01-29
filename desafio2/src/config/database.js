import 'dotenv/config';

export const dialect = 'postgres';
export const host = process.env.DB_HOST;
export const username = process.env.DB_USER;
export const password = process.env.DB_PASS;
export const database = process.env.DB_NAME;
export const define = {
  timestamps: true,
  underscored: true,
  underscoredAll: true,
};
