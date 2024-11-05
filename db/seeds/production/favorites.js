/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const favorites = require('../../../data/favorites');

const createFavorites = async (knex, favorite) => {
  return await knex('favorites').insert({
    id: favorite.id,
    name: favorite.name,
    roverName: favorite.roverName,
    imgSrc: favorite.imgSrc,
    earthDate: favorite.earthDate,
    sol: favorite.sol,
    cameraName: favorite.cameraName,
    cameraFullName: favorite.cameraFullName
  }, 'id');
};

exports.seed = async function (knex) {
  try {
    await knex('favorites').del();

    const favoritesPromises = favorites.map(favorite => {
      return createFavorites(knex, favorite);
    });

    return Promise.all(favoritesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
