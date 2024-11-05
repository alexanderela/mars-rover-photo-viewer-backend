/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('favorites', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('roverName');
      table.string('imgSrc');
      table.string('earthDate');
      table.integer('sol').unsigned();
      table.string('cameraName');
      table.string('cameraFullName');
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
