
    var util = require('util');
    var Options = require('options-cache');

    function App(options) {
        Options.call(this, options);
    }
    util.inherits(App, Options);

    App.prototype.foo = function(value) {
        this.enable(value);
    };

    App.prototype.bar = function(value) {
        if (this.enabled(value)) {
            // do something
        }
    };
