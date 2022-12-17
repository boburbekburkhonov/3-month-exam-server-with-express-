import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgres://postgres:boburbek0119@localhost:5432/n37'
})

class PG {
  #pool = pool;

  async fetchData(SQL, ...params){
    const client = await this.#pool.connect();

    try{
      const { rows } =  await client.query(SQL, params.length ? params : null);
      return rows
    } finally{
      client.release()
    }
  }
}

export default PG;