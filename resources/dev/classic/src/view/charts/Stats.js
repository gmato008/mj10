Ext.define('MobileJudge.view.charts.Stats', {
    extend: 'Ext.container.Container',
    xtype: 'stats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'charts',
    viewModel: {
        type: 'charts'
    },
    layout: 'responsivecolumn',

    defaultType: 'basepie',
    defaults: {
        iconCls: 'x-fa fa-pie-chart',
        userCls: 'big-33 small-100',
        height: 300,
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype:'livegrades',
            height: 400,
            userCls: 'big-100 small-100'
        }
    ]
});

