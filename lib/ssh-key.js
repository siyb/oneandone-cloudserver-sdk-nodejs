/**
 * Created by aajdinov on 1/20/2018.
 */

module.exports = {
    sshKeyEndPointPath: "ssh_keys",

    listSshKeys: function (callback) {
        req.is_get([this.sshKeyEndPointPath], callback)
    },

    listSshKeysWithOptions: function (options, callback) {
        var path = this.sshKeyEndPointPath;
        if (options) {
            path += "?";
            if (options.page) {
                path += "&page=" + options.page;
            }
            if (options.perPage) {
                path += "&per_page=" + options.perPage;
            }
            if (options.sort) {
                path += "&sort=" + options.sort;
            }
            if (options.query) {
                path += "&q=" + options.query;
            }
            if (options.fields) {
                path += "&fields=" + options.fields;
            }
        }

        req.is_get([path], callback)
    },

    createSshKey: function (json, callback) {
        req.is_post([this.sshKeyEndPointPath], json, callback)
    },

    getSshKey: function (ssh_key_id, callback) {
        req.is_get([this.sshKeyEndPointPath, ssh_key_id], callback)
    },

    updateSshKey: function (ssh_key_id, json, callback) {
        req.is_put([this.sshKeyEndPointPath, ssh_key_id], json, callback)
    },

    deleteSshKey: function (ssh_key_id, callback) {
        req.is_del([this.sshKeyEndPointPath, ssh_key_id], callback)
    },
}