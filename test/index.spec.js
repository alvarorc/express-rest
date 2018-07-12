const { expect } = require('chai');

describe('Sanity server', function () {
  it('should response 200', function (done) {
    api
      .get('/api/v1')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(true).to.be.true;
        done();
      });
  });
});
