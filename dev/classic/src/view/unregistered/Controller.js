Ext.define('MobileJudge.view.unregistered.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.unregistered',

    windows: {},
    model: null,
    deleteRecord: {},

    init: function (view) {
        this.model = view.getViewModel();
        var data = null;
        var text = 'Accept';
        var dataArray = null;
        var status = null;
        //var store = Ext.getStore('unregjudges');
        //this.store = Ext.create('MobileJudge.store.unregs.Unregs');
    },

    onTap: function (view, index, item, record) {
            localStorage.setItem("userId", JSON.stringify(record.id));
            //localStorage.setItem("email", JSON.stringify(record.email));
            
            Ext.widget({
                xtype: 'register',
                record: record,
                viewModel : {
                    data: {
                        unregjudges: record
                    }
                } 
            });
        
    },

});

