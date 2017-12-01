Ext.define('MobileJudge.view.stats.Base', {
    extend: 'Ext.Panel',
    xtype: 'basechart',

    requires: [
        'Ext.chart.*'
    ],

    cls: 'quick-graph-panel shadow',

    ui: 'light',
    layout: 'fit',

    platformConfig: {
        classic: {
            headerPosition: 'top'
        },
        modern: {
            header: {
                docked: 'top'
            }
        }
    },

    tools: [
        {
            type: 'refresh',
            tooltip: 'Refresh'
            // callback: 'onRefreshChart'
        }
    ],

    defaults: {
        width: '100%'
    }
});
