import PG from "../../utils/postgres.js";

class Company extends PG {
  getCompany(){
    return this.fetchData(`
      select * from company
    `)
  }

  createCompany(name, imgUrl){
    return this.fetchData(`
      call companyAdd($1,$2)
    `,
      name,
      imgUrl
    )
  }

  deleteCompany(id){
    return this.fetchData(`
      call companyDelete($1)
    `, id)
  }
}

export default new Company()