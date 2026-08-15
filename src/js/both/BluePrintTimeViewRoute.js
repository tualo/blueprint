Ext.define('Tualo.routes.blueprint.TimeView', {
    statics: {
        load: async function () {
            return [
                {
                    name: 'TimeView Blueprint',
                    path: '#blueprint-timeview'
                }
            ]
        }
    },
    url: 'blueprint-timeview',
    handler: {
        action: function () {

            Ext.getApplication().addView('Tualo.Blueprint.lazy.TimePanel', {
                type: type,
                reportnumber: reportnumber
            });

        },
        before: function (action) {
            action.resume();
        }

    }
});