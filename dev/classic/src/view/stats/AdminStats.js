Ext.define('MobileJudge.view.stats.AdminStats', {
    extend: 'Ext.container.Container',
    xtype: 'admin_stats',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'MobileJudge.view.charts.ChartsModel',
        'MobileJudge.view.charts.Controller',
        'MobileJudge.view.stats.*'
    ],

    controller: 'charts',
    viewModel: {
        type: 'charts'
    },
    layout: 'responsivecolumn',

    defaultType: 'basechart',
    defaults: {
        iconCls: 'x-fa fa-pie-chart',
        userCls: 'big-33 small-100',
        height: 750,
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype:'gradeByProject',
            userCls: 'big-100 small-100'
        },
        {
            xtype:'gradeByQuestion',
            userCls: 'big-100 small-100'
        }
    ]
});