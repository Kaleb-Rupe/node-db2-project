// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "toyota",
    model: "prius",
    mileage: 21500,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1111111111111",
    make: "toyota",
    model: "corolla",
    mileage: 11500,
    title: "salvage",
  },
  {
    vin: "1111111111111",
    make: "ford",
    model: "focus",
    mileage: 2500,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
