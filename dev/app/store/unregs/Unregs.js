Ext.define('MobileJudge.store.unregs.Unregs', {
    extend: 'Ext.data.Store',
    alias: 'store.unregjudges',

    model: 'MobileJudge.model.unregs.UnregJudge',

    proxy: {
        type: 'api',
        url: '/api/unregjudges',
    },

    remoteSort: true,
    remoteFilter: true,
    autoLoad: true,
    pageSize: 25
});
