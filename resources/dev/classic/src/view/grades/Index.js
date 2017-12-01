Ext.define('MobileJudge.view.grades.Index', {
    extend: 'Ext.tab.Panel',
    xtype: 'grades',

    requires: [
        'Ext.view.View',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.field.File'
    ],

    controller: 'grades',
    viewModel: {
        type: 'grades'
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
            xtype: 'gradesstudents',
            title: 'Student Grades',
            iconCls: 'x-fa fa-book',

        },
    ]
});
