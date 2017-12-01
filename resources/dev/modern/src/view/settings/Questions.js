var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone'],
    data: [
        { 'id': '16', 'text': 'How significant is the problem?', 'value': '10', 'display': '1', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '17', 'text': 'How significant is the solution?', 'value': '10', 'display': '2', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '18', 'text': 'How impressive is the demo?', 'value': '10', 'display': '3', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '19', 'text': 'How well prepared is the student?', 'value': '10', 'display': '4', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '20', 'text': 'How expressive and self-sustained is the poster?', 'value': '10', 'display': '4', 'enabled': '✔', 'bool': 'x'  }
    ]
});

Ext.define('MobileJudge.view.settings.Questions', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.questions',
    title: 'Questions',

    store: store,

    columns: [
        { text: '',  dataIndex: 'id', width: '10' },
        { text: 'Question', dataIndex: 'text', width: '250' },
        { text: 'Max', dataIndex: 'value', width: '45' },
        { text: 'Order', dataIndex: 'display', width: '55'},
        { text: 'Enabled', dataIndex: 'enabled', width: '70'},
        { text: '', dataIndex: 'bool', width: '20'}
    ],

    height: 200,
    layout: 'fit',
    fullscreen: true
});
