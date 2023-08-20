const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({ status: 404, message: "not found" });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = async (req, res, next) => {
  try {
    return await res.json();
  } catch (err) {
    next(err);
  }
};

const checkVinNumberValid = async (req, res, next) => {
  try {
    return await res.json();
  } catch (err) {
    next(err);
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    return await res.json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
