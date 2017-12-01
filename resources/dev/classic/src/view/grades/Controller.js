Ext.define('MobileJudge.view.grades.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grades',

    windows: {},
    model: null,
    deleteRecord: {},

    init: function (view) {
        this.model = view.getViewModel();
    },

    onStatesLoaded: function (store, records) {
        var filter = store.getStoreId().replace(/States/, 'Filter');
        this.model.set(filter, records);
    },

    onFilterChange: function (selModel, selections) {
        var filter = selections.map(function (r) {
            return r.get('abbr');
        });
        this.model.getStore(selModel.storeId).filter('abbr', Ext.isEmpty(filter) ? 'XX' : filter);

    },

    viewJudges: function(grid, rowIdx, colIdx){
        var store = grid.getStore();
        var id = store.getAt(rowIdx).data.id;
        var name = store.getAt(rowIdx).data.fullName;
        var data = store.getAt(rowIdx).data;

        var myStore = new Ext.data.Store({
            field: ['judgeName', 'grade', 'status'],
            data: [
                {"judgeName":"Masoud", "grade":"10", "status": "Accepted"}
            ]
        });

        var judgesView = new Ext.grid.Panel({
            width: 800,
            height: 600,
            title: "Judge's Grades for " + name,
            titleAlign: 'center',
            floating: true,
            modal: true,
            draggable: true,
            closable : true,

            store: myStore,

            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    dataIndex:'judgeName',
                    width: 415,
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Grade',
                    dataIndex:'grade',
                    width: 125,
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Status',
                    dataIndex:'status',
                    width: 260,
                }

            ],
        });

        judgesView.show();




        Ext.Ajax.request({
            url: '/api/grades',
            method: 'GET',
            success: function (response, options) {
                var gradeData = Ext.decode(response.responseText);
                gradeData.forEach(function(obj){
                    if(obj.studentId == id){
                        console.log(obj);
                    }
                });
            }

        });
    },

});







