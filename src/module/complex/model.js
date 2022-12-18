import PG from "../../utils/postgres.js";

class Complex extends PG {
  getComplexId(id) {
    return this.fetchData(
      `
      select
      *
      from
        company c
      right join
        complex cp
      on
        c.company_id = cp.complex_company_id
      where cp.complex_id = $1
    `,
      id
    );
  }

  getComplexCompanyId(id) {
    return this.fetchData(
      `
      select
      *
      from
        company c
      right join
        complex cp
      on
        c.company_id = cp.complex_company_id
      where cp.complex_company_id = $1
    `,
      id
    );
  }

  getComplex() {
    return this.fetchData(`
      select
      *
      from
        company c
      right join
        complex cp
      on
        c.company_id = cp.complex_company_id;
    `);
  }

  createComplex(complexName, company) {
    return this.fetchData(
      `
      call complexAdd($1,$2)
    `,
      complexName,
      company
    );
  }

  deleteComplex(id) {
    return this.fetchData(
      `
      call complexDelete($1)
    `,
      id
    );
  }
}

export default new Complex()