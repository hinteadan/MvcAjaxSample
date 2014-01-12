(function ($, undefined) {
    'use strict';

    function Logger(jqContainer) {

        if (!jqContainer || jqContainer.length === 0) {
            throw new Error('A log container must be provided');
        }

        function logEntry(message) {
            jqContainer.append('<p>' + new Date() + ' : ' + message + '</p>');
        }

        this.message = logEntry;
    }

    this.Logger = Logger;

}).call(this, this.$);