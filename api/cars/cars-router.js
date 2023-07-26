const Cars = require("./cars-model");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll("cars", cars);
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const car = await Cars.getById(req.parama.id);
    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const car = await Cars.create(req.body);
    res.json(car);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
