// test/test.js
const chai = require('chai');
const { expect } = chai;
const request = require('supertest');
const express = require('express');

describe('Sample API test', function () {
  let app;

  before(function () {
    app = express();
    app.get('/hello', (req, res) => res.send('Hello World'));
  });

  it('GET /should return Hello, GitHub Actions!', async function () {
    const res = await request(app).get('/hello');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello World');
  });
});
