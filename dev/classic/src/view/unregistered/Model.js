Ext.define('MobileJudge.view.unregistered.Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.unregistered',

    requires: [
            'Ext.data.proxy.LocalStorage',
            'Ext.data.identifier.Uuid'
    ],


    stores: {

        unregjudges: {
            type: 'unregjudges',
            storeId: 'unregjudges'
        }
    }
});