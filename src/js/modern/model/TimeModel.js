Ext.define('Tualo.Blueprint.model.modern.TimeModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'datetime', type: 'string' },
        { name: 'timezone', type: 'string' },
        { name: 'request_count', type: 'int' }
    ]
});
