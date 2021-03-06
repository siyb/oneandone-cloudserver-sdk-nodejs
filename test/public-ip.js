/**
 * Created by Ali on 8/11/2016.
 */

var assert = require('assert');
var oneandone = require('../lib/liboneandone');
var helper = require('../test/testHelper');
var publicIp = {};

describe('PublicIps tests', function () {
    this.timeout(900000);
    before(function (done) {
        helper.authenticate(oneandone);
        var publicIpData = {
            "reverse_dns": "node.com",
            "type": oneandone.IPType.IPV4
        };
        oneandone.createPublicIp(publicIpData, function (error, response, body) {
            helper.assertNoError(201, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            publicIp = JSON.parse(body);
            done();
        });
    });

    removePublicIp = function (toRemove, callback) {
        if (toRemove.id) {
            oneandone.deletePublicIp(toRemove.id, function (error, response, body) {
                callback();
            });
        }
        else {
            callback();
        }
    };

    after(function (done) {
        removePublicIp(publicIp, function () {
            done();
        });
    });

    it('List public ips', function (done) {
        oneandone.listPublicIps(function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert(object.length > 0);
            done();
        });
    });

    it('List public ips with options', function (done) {
        var options = {
            query: "node"
        };

        setTimeout(function () {
            oneandone.listPublicIpsWithOptions(options, function (error, response, body) {
                helper.assertNoError(200, response, function (result) {
                    assert(result);
                });
                assert.notEqual(response, null);
                assert.notEqual(body, null);
                var object = JSON.parse(body);
                assert(object.length > 0);
                done();
            });
        }, 5000);
    });

    it('Get publicIp', function (done) {
        oneandone.getPublicIp(publicIp.id, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.id, publicIp.id);
            done();
        });
    });

    it('Update publicIp', function (done) {
        updateData = {
            "reverse_dns": "example.es"
        };
        oneandone.updatePublicIp(publicIp.id, updateData, function (error, response, body) {
            helper.assertNoError(200, response, function (result) {
                assert(result);
            });
            assert.notEqual(response, null);
            assert.notEqual(body, null);
            var object = JSON.parse(body);
            assert.equal(object.name, updateData.name);
            done();
        });
    });

});