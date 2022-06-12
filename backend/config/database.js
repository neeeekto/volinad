const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),

    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "volinad"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "admin"),
    },
    debug: false,
  },
});
