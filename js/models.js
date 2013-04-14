Backbone.Model.prototype.increase = function (key, addition) {
    this.set(key, this.get(key) + addition)
};

var Cell = Backbone.Model.extend({
    defaults: {
        value: 0
    },
    inc: function () {
        this.increase("value", 1);
    },
    dec: function () {
        this.increase("value", -1);
    },
    char: function () {
        return String.fromCharCode(this.get("value"))
    }
});

var Tape = Backbone.Collection.extend({
    model: Cell
});

var Pointer = Backbone.Model.extend({
    defaults: {
        index: 0
    },
    left: function () {
        this.increase("index", -1);
    },
    right: function () {
        this.increase("index", +1);
    }
});
