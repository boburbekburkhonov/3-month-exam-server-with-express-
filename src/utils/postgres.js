import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgres://cbsofokk:qPI7NIZN2h1f_meyPvNwZMXYbzhXE9YZ@tiny.db.elephantsql.com/cbsofokk",
});

class PG {
  #pool = pool;

  async fetchData(SQL, ...params) {
    const client = await this.#pool.connect();

    try {
      const { rows } = await client.query(SQL, params.length ? params : null);
      return rows;
    } finally {
      client.release();
    }
  }
}

export default PG;