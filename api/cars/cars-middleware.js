const checkCarId = async (req, res, next) => {
  try {
    return await res.json();
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
