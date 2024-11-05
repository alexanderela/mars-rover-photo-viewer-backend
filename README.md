# Mars Rover Photo Viewer Back-End
#### This is a simple node/express server that allows users of the Mars Rover Photo Viewer app to store favorite Mars rover photos. This backend application does not currently have a database for individual users. However, this is coming soon.


### See it Live


## Tech Stack
- Node.js
- Express
- Knex.js
- Heroku

#### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `psql CREATE DATABASE favorites`

* `knex migrate:latest`

* `knex seed:run`


## API Endpoints
### Favorites
#### GET all favorites
```
/api/v1/favorites 
```

Returns an array of all favorite photo objects

#### POST new favorite
```
/api/v1/favorites/new
```

Returns an object with new favorite's id property. Example:
```
  {
      "id": 1228213
  }
```

#### DELETE Remove specific favorite photo from database
```
/api/v1/favorites/:id
```

Returns an object with a 'success' message. Example:
```
{
  "message": "1228213 successfully deleted"
}
```

# To Contribute to the Project:

- Follow the setup instructions above to get the app up and running locally on your machine.

- Our list of Issues on GitHub Issues: (https://github.com/alexanderela/mars-rover-photo-viewer-backend/issues)
  Please use these issues to direct the contributions you desire to make.

- To send a Pull Request via GitHub:
    - Checkout a new branch
    - Add a forked version of this repo as your remote
    - Push up changes to your forked repo
    - Request the Pull Request to the original repo
    - Include a brief commit message details the changes you have made
    - Make sure to write tests for the front end
    - Make sure all tests are passing before you make a Pull Request
    - Before submitting, Rebase your work on the current master branch


## Database created and designed by 
* [Alex Ela](https://github.com/alexanderela)
