/**
 * Created by Ali on 8/15/2016.
 */

module.exports = {
    mpEndPointPath: "monitoring_policies",
    portsPath: "ports",
    processesPath: "processes",
    serversPath: "servers",

    listMonitoringPolicies: function (callback) {
        req.is_get([this.mpEndPointPath], callback)
    },

    listMonitoringPoliciesWithOptions: function (options, callback) {
        var path = this.mpEndPointPath;
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
    createMonitoringPolicy: function (json, callback) {
        req.is_post([this.mpEndPointPath], json, callback)
    },
    getMonitoringPolicy: function (mp_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id], callback)
    },
    updateMonitoringPolicy: function (mp_id, json, callback) {
        req.is_put([this.mpEndPointPath, mp_id], json, callback)
    },
    deleteMonitoringPolicy: function (mp_id, callback) {
        req.is_del([this.mpEndPointPath, mp_id], callback)
    },

    //ports

    listMonitoringPoliciesPorts: function (mp_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.portsPath], callback)
    },
    createMonitoringPolicyForPorts: function (mp_id, json, callback) {
        req.is_post([this.mpEndPointPath, mp_id, this.portsPath], json, callback)
    },
    getPortsMonitoringPolicy: function (mp_id, port_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.portsPath, port_id], callback)
    },
    updatePortsMonitoringPolicy: function (mp_id, port_id, json, callback) {
        req.is_put([this.mpEndPointPath, mp_id, this.portsPath, port_id], json, callback)
    },
    deletePortsMonitoringPolicy: function (mp_id, port_id, callback) {
        req.is_del([this.mpEndPointPath, mp_id, this.portsPath, port_id], callback)
    },

    //processes
    listMonitoringPoliciesProcesses: function (mp_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.processesPath], callback)
    },
    createMonitoringPolicyForProcesses: function (mp_id, json, callback) {
        req.is_post([this.mpEndPointPath, mp_id, this.processesPath], json, callback)
    },
    getProcessesMonitoringPolicy: function (mp_id, process_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.processesPath, process_id], callback)
    },
    updateProcessesMonitoringPolicy: function (mp_id, process_id, json, callback) {
        req.is_put([this.mpEndPointPath, mp_id, this.processesPath, process_id], json, callback)
    },
    deleteProcessesMonitoringPolicy: function (mp_id, process_id, callback) {
        req.is_del([this.mpEndPointPath, mp_id, this.processesPath, process_id], callback)
    },

    //servers
    listMonitoringPoliciesServers: function (mp_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.serversPath], callback)
    },
    createMonitoringPolicyForServers: function (mp_id, json, callback) {
        req.is_post([this.mpEndPointPath, mp_id, this.serversPath], json, callback)
    },
    getServersMonitoringPolicy: function (mp_id, server_id, callback) {
        req.is_get([this.mpEndPointPath, mp_id, this.serversPath, server_id], callback)
    },
    deleteServersMonitoringPolicy: function (mp_id, server_id, callback) {
        req.is_del([this.mpEndPointPath, mp_id, this.serversPath, server_id], callback)
    },
}
