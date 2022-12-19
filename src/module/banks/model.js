import PG from "../../utils/postgres.js";

class Banks extends PG {
  getBanksId(id) {
    return this.fetchData(
      `
      select * from banks where bank_money_term = $1 order by bank_give_money;
    `,
      id
    );
  }

  getBanks() {
    return this.fetchData(`
      select * from banks;
    `);
  }

  createBanks(name, money, term, percentage) {
    return this.fetchData(
      `
      call banksAdd($1,$2, $3,$4)
    `,
      name,
      money,
      term,
      percentage
    );
  }

  deleteBanks(id) {
    return this.fetchData(
      `
      call banksDelete($1)
    `,
      id
    );
  }
}

export default new Banks()