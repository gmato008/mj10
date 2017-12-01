Ext.define('MobileJudge.view.grades.Students', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gradesstudents',

    requires: [
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Action',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar'
    ],

    bind: {store: '{students}'},


    dockedItems: [
        {

            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'dataview',
                    cls: 'stateSelector',
                    loadMask: false,
                    trackOver: false,
                    itemSelector: '.stateSelector button',
                    selectedItemCls: 'selected',
                    selectionModel: {
                        type: 'dataviewmodel',
                        storeId: 'students',
                        mode: 'SIMPLE'
                    },
                    tpl: [
                        '<tpl for=".">',
                        '<button type="button" title="{name}" id="{name}">{abbr}</button>',
                        '</tpl>',

                    ],
                    bind: {
                        selection: '{studentFilterSelection}',
                        store: '{studentStates}'
                    },
                    listeners: {
                        selectionchange: 'onFilterChange'
                    }

                },

                '->',
                {
                    xtype: 'searchfilter',
                    width: 400,
                    fieldLabel: 'Search',
                    labelWidth: 50,
                    bind: {
                        store: '{students}'
                    }
                },
                '->',
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{students}'
        }
    ],
    columns: [
        {
            xtype: 'gridcolumn',
            width: 75,
            dataIndex: 'id',
            hideable: false,
            text: '',
        },
        {
            xtype: 'gridcolumn',
            renderer: function (value) {
                return "<img class='profilePic' src='" + value + "' alt='Profile Pic' height='40px' width='40px'>";
            },
            width: 75,
            dataIndex: 'profileImgUrl',
            sortable: false,
            hideable: false,
            text: ''
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'fullName',
            text: 'Name',
            flex: 1,
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'project',
            text: 'Project',
            flex: 2,
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'grade',
            text: 'Grade',
            flex: 2,
        },
        {
            xtype: 'actioncolumn',
            items: [
                {
                    iconCls: 'fa fa-eye',
                    tooltip: 'View Grades',
                    handler: 'viewJudges',
                }
            ],

            width: 40,
            sortable: false,
            hideable: false
        }

    ],
});

