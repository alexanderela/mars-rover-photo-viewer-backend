const express = require('express');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Mars Rover Photo-Viewer Backend';

app.get('/', (request, response) => {
  response.send('Welcome to my sample GitHub REST API app');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
});

app.get('/api/v1/favorites', async (request, response) => {
  try {
    const favorites = await database('favorites').select();
    response.status(200).json(favorites);
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/favorites/new', async (request, response) => {
  const favorite = request.body;

  const requiredParams = [
    'id',
    'name',
    'roverName',
    'imgSrc',
    'earthDate',
    'sol',
    'cameraName',
    'cameraFullName'
  ];

  for (const requiredParam of requiredParams) {
    if (!favorite[requiredParam]) {
      return response
        .status(422)
        .send({ error: `Error: Required param '${requiredParam}'<String> missing` });
    }
  }

  try {
    const newFavorite = await database('favorites').insert(favorite);
    console.log('newFavorite: ', newFavorite);
    response.status(201).json({ id: favorite.id });
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.delete('/api/v1/favorites/:id', async (request, response) => {
  try {
    const favoriteId = request.params.id;
    const numDeleted = await database('favorites')
      .where('id', favoriteId)
      .del();

    if (numDeleted === 0) {
      return response.status(404).send({ error: `There is no favorite with 'id' of '${favoriteId}'.  Please check the entered id and try again.` });
    }

    response.status(200).json({ message: `${favoriteId} successfully deleted` });
  } catch (error) {
    response.status(500).json({ error });
  }
});

module.exports = app;
