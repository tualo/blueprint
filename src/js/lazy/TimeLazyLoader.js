Ext.define('Tualo.Blueprint.lazy.TimePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'blueprintTimeLazyPanel',

    title: 'Blueprint Time',
    html: 'Die Zeit wird geladen...',

    initComponent: function () {
        this.callParent(arguments);
        this.loadTime();
    },

    loadTime: function () {
        Ext.Ajax.request({
            url: '/blueprint/time',
            success: function (response) {
                var data = Ext.decode(response.responseText);
                this.update('<div><strong>Zeit:</strong> ' + data.datetime + '<br/>' +
                    '<strong>Zeitzone:</strong> ' + data.timezone + '</div>');
            },
            scope: this
        });
    }
});
