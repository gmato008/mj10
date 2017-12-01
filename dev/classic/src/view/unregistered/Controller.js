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
            //var rec = view.getRecord(item);
            
            var store = view.getStore();
            console.log("===============================");
            console.log(store);
            var rec = store.getById(JSON.stringify(record.id));
            //var rec = view.getRecord(record.id);
            console.log("===============================");
            console.log(rec.get('email'));
            //console.log(rec.get('fullName'));
            localStorage.setItem("email", rec.get('email'));
            var fullName = rec.get('fullName');
            localStorage.setItem("userName", rec.get('fullName'));
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

