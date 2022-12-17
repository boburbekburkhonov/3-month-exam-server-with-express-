import { ErrorHandler } from "../../error/error.handler.js";
import model from "./model.js";

class CompanyControllers {
  async GET(req, res, next) {
    const allCompany = await model.getCompany()
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(allCompany) res.json(allCompany)
  }

  async POST(req, res, next) {
    const { name, imgUrl } = req.filtered;

    const allCompany = await model.getCompany()
    .catch(err => next(new ErrorHandler(err.message, 503)));

    const foundCompany = allCompany.find(e => e.company_name.toLowerCase() == name.toLowerCase())

    if(foundCompany){
      return next(new ErrorHandler('Bunday companiya allaqachon yaratilgan', 400))
    }

    const createdCompany = await model.createCompany(name, imgUrl)
    .catch(err => next(new ErrorHandler(err.message, 503)))


    if(createdCompany) res.status(201).json({
      message: 'Company created successfully',
      status: 201
    })
  }

  async DELETE(req, res, next){
    const { id } = req.params;

    const deletedCompany = await model.deleteCompany(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(deletedCompany) res.status(200).json({
      message: 'Company deleted successfully',
      status: 204
    })
  }
}

export default new CompanyControllers()