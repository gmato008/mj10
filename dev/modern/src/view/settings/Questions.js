Ext.define('MobileJudge.view.settings.Questions', {
    extend: 'Ext.grid.Grid',
    // xtype: 'grid',
    alias: 'widget.questions',

    requires: [
        'Ext.grid.plugin.Editable'
    ],
    store: 'questions',

    plugins: {
        type: 'grideditable',
        pluginId: 'gridEditor',
        triggerEvent: 'doubletap',
        enableDeleteButton: true,

        formConfig: {
            items: [
                {
                    xtype: 'textfield',
                    name: 'text',
                    label: 'Question'
                },
                {
                    xtype: 'textfield',
                    name: 'value',
                    label: 'Max'
                },
                {
                    xtype: 'textfield',
                    name: 'display',
                    label: 'Order'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'enabled',
                    label: 'Enabled?'
                },
            ]

        }

    },



    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    handler: 'onNewQuestionButtonClick'
                },
                {
                    xtype: 'button',
                    text: 'Refresh',
                    handler: 'onRefreshButtonClick'
                }

            ]
        }
    ],

    columns: [
        {text: '', dataIndex: 'id', width: '40'},
        {text: 'Question', dataIndex: 'text', width: '250'},
        {text: 'Max', dataIndex: 'value', width: '70'},
        {text: 'Order', dataIndex: 'display', width: '70'},
        {text: 'Enabled', dataIndex: 'enabled', width: '80'},
    ],

    height: 500,
    layout: 'fit'
    //fullscreen: true,
});
