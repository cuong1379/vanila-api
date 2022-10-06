require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {
  port,
  mongo
} = require('./config');
const authenticate = require('./middleware/verifyToken')
const MainModule = require('./modules/main/main.module')
const EnglishModule = require('./modules/english/english.module')
const NoteModule = require('./modules/note/note.module')
const ProfileModule = require('./modules/profile/profile.module')
const app = express();

(async () => {
  try {
    // Setup main app and middlewares
    app.use(cors());
    app.use(express.json());

    // Connect mongo database
    mongoose.Promise = Promise;
    await mongoose.connect(mongo.uri, mongo.options);

    // Setup routes with modules
    app.use('/api', MainModule);
    app.use('/api/auth/profile', authenticate, ProfileModule);
    app.use('/api/english', authenticate, EnglishModule);
    app.use('/api/note', authenticate, NoteModule);

    app.listen(port, console.log(`App run on port ${port}`));

  } catch (err) {
    console.log(err.stack);
  }
})()