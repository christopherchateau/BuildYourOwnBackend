const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require ('../server.js')
const expect = chai.expect
chai.use(chaiHttp)

describe('Server file', () => {
  describe('/api/v1/cerebral_beers/styles', () => {
    it('should have a 200 status', (done) => {
      chai.request(app)
        .get('/api/v1/cerebral_beers/styles')
        .end((error, response) => {
          expect(response).to.have.status(200)
          done()
        })
    })

    it('should return the data as JSON', (done) => {
      chai.request(app)
        .get('/api/v1/cerebral_beers/styles')
        .end((error, response) => {
          expect(response).to.be.json
          done()
        })
    })

    it('should return an array with all of the beer styles', (done) => {
      chai.request(app)
        .get('/api/v1/cerebral_beers/styles')
        .end((error, response) => {
          expect(response.body).to.be.a('array')
          expect(response.body.length).to.equal(43)
          done()
        })
    })

    it('should correctly add a new style', (done) => {
      const newStyle = {
        style_name: 'freddies secret style',
        description: 'omg so amazing wow'
      }

      chai.request(app)
        .post('/api/v1/cerebral_beers/styles')
        .send(newStyle)
        .end((error, response) => {
          expect(response).to.have.status(201)
          expect(response.body).to.equal('Beer Style successfully added!')
          done()
        })
    })


  })

  // describe('/api/v1/cerebral_beers/styles')

})