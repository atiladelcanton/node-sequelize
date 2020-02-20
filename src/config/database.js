module.exports = {
  host: "127.0.0.1",
  username: "dev",
  password: "dev123",
  database: "sequeli",
  dialect: "postgres",
  storage: "./__testes__/database.sqlite",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
