module.exports = {
    noop: function() {
        // no operation
    },

    defer: function(func, args) {
        return setTimeout(function() {
            func.apply(undefined, args);
        }, 1);
    },

    merge: function(obj1, obj2) {
        for (var attrname in obj2) {
            obj1[attrname] = obj2[attrname];
        }

        return obj1;
    },

    LOG: function(obj) {
        try {
            console.error(obj);
        } catch (e) {

        }
    }
};