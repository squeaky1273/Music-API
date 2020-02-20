require('dotenv').config()
const app = require("../index.js")
const mongoose = require('mongoose')
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http")
const jwt = require('jsonwebtoken')
const assert = chai.assert

const Artist = require('../models/artist.js');
const User = require('../models/user.js');

chai.config.includeStack = true;

chai.should()
chai.use(chaiHttp);

const sampleArtist = {
  name: 'Ariana Grande',
  active: 'yes'
}

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('Artists', () => {
  // TODO: Implement more tests.
  beforeEach((done) => {
    User.create({username: 'test_user', password: 'itsasecret'})
    done()
  })

  afterEach((done) => {
    User.remove({username: 'test_user'}).then(() => {
      Artist.remove({name: 'Ariana Grande'}).then(() => done())
    })
  })

  it('should load homepage', () => {
    chai.request(app)
      .get('/api/artist')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done();
      })
  })
    // Test Index
    it('should show all artists', (done) => {
      let artist = new Artist(sampleArtist);
      artist.save().then((savedArtist) => {
        chai.request(app)
          .get('/artists')
          .end((err, res) => {
            if (err) {
              return done(err)
            }
  
            assert.equal(res.status, 200)
            assert.isArray(res.body)
            return done()
          })
      })
    })
  
    it('should show a specific artist', (done) => {
      let artist = new Artist(sampleArtist);
      artist.save().then((savedArtist) => {
        chai.request(app)
          .get(`/artists/${savedArtist._id}`)
          .set('jwttoken', jwt.sign({ username: 'test_user' }, process.env.JWT_SECRET))
          .end((err, res) => {
            if (err) return done(err);
  
            assert.equal(res.body.name, 'Ariana Grande')
            return done()
          })
      })
    })
  
    it('should POST a new artist', (done) => {
      chai.request(app)
        .post('/artists')
        .set('jwttoken', jwt.sign({ username: 'test_user' }, process.env.JWT_SECRET))
        .send(sampleDog)
        .then(res => {
          assert.equal(res.status, 200)
          assert.equal(res.body.name, 'Ariana Grnade')
          assert.isNotEmpty(res.body._id)
  
          // make sure data actually got added to the database
          Artist.find({name: 'Ariana Grande'}).then(result => {
            assert.equal(result.length, 1)
          })
  
          return done()
        }).catch(err => {
          return done(err)
        })
    })
});