module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'web-burg',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
