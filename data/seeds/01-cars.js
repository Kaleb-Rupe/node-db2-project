// STRETCH
const cars = [
  {
    vin: "11111111111235637",
    make: "toyota",
    model: "prius",
    mileage: 21500,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "11111111111549517",
    make: "toyota",
    model: "corolla",
    mileage: 11500,
    title: "salvage",
  },
  {
    vin: "11111111111569432",
    make: "ford",
    model: "focus",
    mileage: 2500,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
