const test = require('tape');
const request = require('supertest');
const app = require('../../index');
const data = require('../data');

const server = request.agent(app);

test('/shift post request should return a status of 201', (t) => {
  const payload = data;
  server
    .post('/shift')
    .send(payload)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'tested for errors')
      t.equal(res.body.engineers.length, 10, 'we have 10 engineers')
      t.end();
    })
});