Ext.define('Tualo.Blueprint.controller.modern.TimeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.blueprintModernTimeController',

    init: function () {
        this.loadTime();
    },

    loadTime: function () {
        Ext.Ajax.request({
            url: '/blueprint/time',
            success: function (response) {
                var data = Ext.decode(response.responseText);
                this.getView().setHtml('<div><strong>Zeit:</strong> ' + data.datetime + '<br/>' +
                    '<strong>Zeitzone:</strong> ' + data.timezone + '<br/>' +
                    '<strong>Anfragen:</strong> ' + data.request_count + '</div>');
            },
            scope: this
        });
    }
});
