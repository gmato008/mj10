Ext.define('MobileJudge.view.settings.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

    init: function(view) {
        this.model = view.getViewModel();
	//this.model.notify();

    },

    onTermsLoaded: function() {
        var select = this.getReferences().termSelector,
            rec = select.getStore().findRecord('active', true);
        select.setValue(rec.get('id'));

    },

    onTemplatesLoaded: function() {
	var store = this.model.getStore('templates4Term'),
        models = store.getRange(),
        n = 0,
        size = models.length,
        data = [];

        for (; n < size; n++) {
            data.push(models[n].data);
        }

        //JSONArray = Ext.JSON.encode(data);

        //console.log(data);

	//Forgot password template
	var select = this.getReferences().passwordReset;
	select.setStore('terms');
	var termModelActiveRecord = select.getStore().findRecord('active', true);
	var num = termModelActiveRecord.get('resetPasswordTemplate');
	select.setStore('templates4Term');
	rec = select.getStore().findRecord('id', num);
	select.setOptions(data);
	select.setValue(num);


	
	//Confirm template
	var select2 = this.getReferences().confirmTemplateSelector;
	select2.setStore('terms');
	termModelActiveRecord = select2.getStore().findRecord('active', true);
	num = termModelActiveRecord.get('confirmTemplate');
	select2.setStore('templates4Term');
	rec = select2.getStore().findRecord('id', num);
	//select2.setValue(rec.get('id'));
	select2.setOptions(data);
	select2.setValue(num);	

	
	//acceptance confirm template
        var select3 = this.getReferences().acceptConfirmSelector;
        select3.setStore('terms');
        termModelActiveRecord = select3.getStore().findRecord('active', true);
        num = termModelActiveRecord.get('acceptanceConfirmation');
        select3.setStore('templates4Term');
        rec = select3.getStore().findRecord('id', num);
        //select3.setValue(rec.get('id'));
	select3.setOptions(data);
        select3.setValue(num);
	
	var select4 = this.getReferences().rejectInviteSelector;
        select4.setStore('terms');
        termModelActiveRecord = select4.getStore().findRecord('active', true);
        num = termModelActiveRecord.get('rejectInviteTemplate');
        select4.setStore('templates4Term');
        rec = select4.getStore().findRecord('id', num);
        //select4.setValue(rec.get('id'));
	select4.setOptions(data);
        select4.setValue(num);


	var select5 = this.getReferences().removeInviteSelector;
        select5.setStore('terms');
        termModelActiveRecord = select5.getStore().findRecord('active', true);
        num = termModelActiveRecord.get('removeInviteTemplate');
        select5.setStore('templates4Term');
        rec = select5.getStore().findRecord('id', num);
        //select5.setValue(rec.get('id'));
	select5.setOptions(data);
        select5.setValue(num);

	
    },

    onNewTermClick: function() {
        var me = this,
            select = me.getReferences().termSelector,
            store = me.model.getStore('terms'),
            now = new Date(),
            month = now.getMonth(),
            rec = new MobileJudge.model.settings.Term({
                name: 'New Term',
                start: now,
                end: now,
                deadline: now
            });

        store.rejectChanges();
        store.insert(0, rec);
        select.setValue(rec);
    },

    onSaveTermClick: function() {

        var me = this,
            form = me.getReferences().termForm,
            store = me.model.getStore('terms'),
            rec = me.model.get('selectedTerm'),
            changed = false;

        //if (!form.isValid()) return;
        if (rec.modified && rec.modified.active === false && rec.get('active'))
        {

            changed = rec.get('name');

        }
        store.sync({
            success: function() {
                if (changed) Ext.GlobalEvents.fireEvent('termChanged', changed);
            }
        });

    },

    onDeleteTermClick: function() {
        var me = this,
            store = me.model.getStore('terms'),
            rec = me.model.get('selectedTerm');
        Ext.Msg.confirm('Delete', 'Are you sure you want to delete the selected record?',
            function(choice) {
                if (choice !== 'yes') return;
                var sync = !rec.phantom;
                store.remove(rec);
                if (sync) store.sync();
                me.onTermsLoaded(store);
            }, this);
    },

    onMakeActiveTerm: function() {
        var me = this, rec = me.model.get('selectedTerm');
        rec.set('active', true);
        me.onSaveTermClick();

    },

    onNewQuestionButtonClick: function(button) {
        var rec = new MobileJudge.model.settings.Question(),
            grid = button.up('grid'),
            editor = grid.getPlugins('gridEditor');
        grid.getStore().insert(0, rec);
        //if (editor) editor.startEdit(rec, 0);
    },

    onRefreshButtonClick: function(button) {
        var grid = button.up('grid'),
            store = grid.getStore();
        store.reload();
    }


});
