import pg from "pg";

async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new pg.Pool({
    connectionString:
      "postgres://hshtargr:f4pyJc6DdsDJDFCtGEZhX-X6QKJdbw1c@baasu.db.elephantsql.com/hshtargr",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
