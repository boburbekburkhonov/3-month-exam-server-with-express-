import { ErrorHandler } from "../../error/error.handler.js";
import model from "./model.js";

class ComplexControllers {
  async GET_ID(req, res, next) {
    const { id } = req.params;

    const foundComplex = await model
      .getComplexId(id)
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    if (foundComplex) res.json(foundComplex);
  }

  async GET_COMPANY_ID(req, res, next) {
    const { id } = req.params;

    const foundComplex = await model
      .getComplexCompanyId(id)
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    if (foundComplex) res.json(foundComplex);
  }

  async GET(req, res, next) {
    const allComplex = await model
      .getComplex()
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    if (allComplex) res.json(allComplex);
  }

  async POST(req, res, next) {
    const { complexName, company } = req.filtered;

    const allComplex = await model
      .getComplex()
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    const foundComplex = allComplex.find(
      (e) =>
        e.complex_name.toLowerCase() == complexName.toLowerCase() &&
        e.complex_company_id == company
    );

    if (foundComplex) {
      return next(
        new ErrorHandler("Bunday complex allaqachon yaratilgan", 400)
      );
    }

    const createdComplex = await model
      .createComplex(complexName, company)
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    if (createdComplex)
      res.status(201).json({
        message: "Complex created successfully",
        status: 201,
      });
  }

  async DELETE(req, res, next) {
    const { id } = req.params;

    const deletedComplex = await model
      .deleteComplex(id)
      .catch((err) => next(new ErrorHandler(err.message, 503)));

    if (deletedComplex)
      res.status(200).json({
        message: "Complex deleted successfully",
        status: 204,
      });
  }
}

export default new ComplexControllers()