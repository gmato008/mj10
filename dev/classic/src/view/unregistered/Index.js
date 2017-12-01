Ext.define('MobileJudge.view.unregistered.Index', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.unregistered',

    requires: [
        'Ext.view.View',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.field.File'
    ],

    controller: 'unregistered',
    viewModel: {
        type: 'unregistered'
    },

    cls: 'shadow',
    activeTab: 0,
    margin: 20,

    defaults: {
        cls: 'user-grid',
        viewConfig: {
            preserveScrollOnRefresh: true,
            preserveScrollOnReload: true,
            loadMask: false
        },

        headerBorders: false,
        rowLines: false
    },
    
    items: [
        {
            xtype: 'unregjudges',
            title: 'Judges',
            iconCls: 'x-fa fa-legal',
        }
    ]
});