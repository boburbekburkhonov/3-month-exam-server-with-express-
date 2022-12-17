import { ErrorHandler } from "../../error/error.handler.js";
import model from "./model.js";

class BanksControllers {
  async GET(req, res, next) {
    const allBanks = await model.getBanks()
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(allBanks) res.json(allBanks)
  }

  async POST(req, res, next) {
    const { name, money, term, percentage } = req.filtered;

    const allBanks = await model.getBanks()
    .catch(err => next(new ErrorHandler(err.message, 503)))

    const foundBank = allBanks.find(e => e.bank_name.toLowerCase() == name.toLowerCase() && e.bank_give_money == money && e.bank_money_term == term && e.bank_percentage == percentage)
    console.log(foundBank);
    if(foundBank){
      return next(new ErrorHandler('Bunday bank xizmati bor', 200))
    }

    const createdBanks = await model.createBanks(name, money, term, percentage)
    .catch(err => next(new ErrorHandler(err.message, 503)))


    if(createdBanks) res.status(201).json({
      message: 'Banks created successfully',
      status: 201
    })
  }

  async DELETE(req, res, next){
    const { id } = req.params;

    const deletedBanks = await model.deleteBanks(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(deletedBanks) res.sendStatus(204)
  }
}

export default new BanksControllers()