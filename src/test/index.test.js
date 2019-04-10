import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
import server from '../index';

const app = request(server);

describe('INAVLID ROUTE', () => {
  it('should return 404 if route not found', (done) => {
    app
      .get('/invalidRoute')
      .expect(404)
      .end((err, response) => {
        if (err) return done(err);
        const { body: result } = response;
        expect(result)
          .to.have.property('message')
          .which.is.a('string');
        expect(result.message).to.equal(
          'This route does not exist. Visit /api/v1/**'
        );
        done();
      });
  });
});
