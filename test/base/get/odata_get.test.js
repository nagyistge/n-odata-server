/// <reference path="../../../typings/main.d.ts" />
//import expect = require("chai").expect;
var chai = require("chai");
var chai_1 = require("chai");
var chaiAsPromised = require("chai-as-promised");
var odata_get_1 = require("../../../lib/base/get/odata_get");
/* see here for a good description of chai-as-promised: http://www.sitepoint.com/promises-in-javascript-unit-tests-the-definitive-guide/ */
describe("ODataGetBase", function () {
    before(function () {
        chai.use(chaiAsPromised);
    });
    describe("_getCollectionData", function () {
        var sut;
        beforeEach(function () {
            sut = new odata_get_1.ODataGetBase();
        });
        it("should return ordered collection", function () {
            // TODO: implement a lot of tests here
            var req = {
                url: "http://localhost:3000/Customer?$orderby=quantity"
            };
            var res = {
                status: 0
            };
            return chai_1.expect(sut._getCollectionData(req, res)).to.eventually.equal(20);
        });
    });
});
//# sourceMappingURL=odata_get.test.js.map