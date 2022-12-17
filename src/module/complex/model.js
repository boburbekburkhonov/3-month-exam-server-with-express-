import PG from "../../utils/postgres.js";

class Complex extends PG {
  getComplex(){
    return this.fetchData(`
      select * from complex
    `)
  }

  createComplex(complexName, company){
    return this.fetchData(`
      call complexAdd($1,$2)
    `,
    complexName,
    company
    )
  }

  deleteComplex(id){
    return this.fetchData(`
      call complexDelete($1)
    `, id)
  }
}

export default new Complex()