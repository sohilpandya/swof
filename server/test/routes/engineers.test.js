var test = require('tape');
var request = require('supertest');
var app = require('../../index');
var data = require('../data');

const server = request.agent(app);

test('/engineers returns 200 with data', (t) => {
  server
    .get('/engineers')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'tested for errors');
      t.equal(res.statusCode, 200, 'res.statuscode should be 200');
      t.equal(res.body.engineers.length, 10,' we have 10 engineers')
      t.end();
    });

});

test('/engineers post request should return a status of 201', t => {

  const payload = data;

  const expected = { data: "engineers have been saved!" }

  server
    .post('/engineers')
    .send(payload)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'tested for errors')
      t.same(res.body, expected, 'Results as expected')
      t.end();
    })

});
