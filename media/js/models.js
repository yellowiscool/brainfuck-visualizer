var Cell = Backbone.Model.extend({
    defaults: {
        value: 0
    },
    inc: function () {
        this.set("value", this.get("value") + 1);
    },
    dec: function () {
        this.set("value", this.get("value") - 1);
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
        this.set("index", this.get("index") - 1);
    },
    right: function () {
        this.set("index", this.get("index") + 1);
    }
});
