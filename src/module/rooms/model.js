import PG from "../../utils/postgres.js";

class Rooms extends PG {
  getRooms(){
    return this.fetchData(`
      select
      c.complex_name,
      r.room_count,
      r.room_size,
      r.room_price
      from
        complex c
      join
        rooms r
      on
        c.complex_id = r.room_complex_id;
    `)
  }

  createRooms(count, size, price, complex){
    return this.fetchData(`
      call roomsAdd($1,$2, $3,$4)
    `,
    count,
    size,
    price,
    complex
    )
  }

  deleteRooms(id){
    return this.fetchData(`
      call roomsDelete($1)
    `, id)
  }
}

export default new Rooms()