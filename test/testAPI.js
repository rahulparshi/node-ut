const chai = require('chai'),
    should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const app = require('../app');
const nock = require('nock');

describe('Test policy service', function () {
    this.timeout(10000);
    beforeEach(async () => {
    });

    it('Policy for progress chart with security posture as Weak', async () => {
        nock("https://jsonplaceholder.typicode.com")
            .get("/todos/1")
            .reply(200, {
                "data": {
                    "key": "value"
                },
                "status": {
                    "message": "",
                    "type": "success"
                },
                "statusCode": 200
            });


        let res = await chai.request(app)
            .get("/test");

        console.log("res.body", res.body);
        res.should.have.status(200);
        res.body.should.containSubset({
            "data": {
                "key": "value"
            },
            "status": {
                "message": "",
                "type": "success"
            },
            "statusCode": 200
        });
    });

});
