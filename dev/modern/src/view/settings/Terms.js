Ext.define('MobileJudge.view.settings.Terms', {
    extend: 'Ext.form.Panel',
    alias: 'widget.terms',
    reference: 'termForm',
    trackResetOnLoad: true,	
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.Number'
    ],

    items: [{
        xtype: 'fieldset',
        title: 'Select a Term',
        layout: 'vbox',
        items: [{
            xtype: 'selectfield',
            label: 'Select Term',
            labelWidth: 150,
            reference: 'termSelector',
            displayField: 'name',
            valueField: 'id',
            bind: {
                store: '{terms}',
                disabled: '{status.canSave}'
            }
        }, {
            xtype: 'button',
            text: 'New',
            iconCls: 'x-fa fa-edit',
            ui: 'action',
            bind: {
                disabled: '{!status.canCreate}'
            },
            handler: 'onNewTermClick'
        }, {
            xtype: 'button',
            text: 'Save',
            iconCls: 'x-fa fa-save',
            ui: 'confirm',
            bind: {
                disabled: '{!status.canSave}'
            },
            handler: 'onSaveTermClick'
        }, {
            xtype: 'button',
            text: 'Delete',
            iconCls: 'x-fa fa-remove',
            ui: 'decline',
            bind: {
                disabled: '{!status.canDelete}'
            },
            handler: 'onDeleteTermClick'
        }, {
            xtype: 'button',
            text: 'Make Active',
            ui: 'action',
            iconCls: 'x-fa fa-calendar-check-o',
            handler: 'onMakeActiveTerm',
            bind: {
                hidden: '{selectedTerm.active}',
                disabled: '{status.canSave}'
            }
        }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Selected Term',
        items: [{
            xtype: 'textfield',
            label: 'Name',
            labelWidth: 150,
            bind: '{selectedTerm.name}'
        }, {
            xtype: 'checkboxfield',
            label: 'IsActive?',
            labelWidth: 150,
            bind: '{selectedTerm.active}'
        }, {
            xtype: 'checkboxfield',
            label: 'Judge Login?',
            labelWidth: 150,
            bind: '{selectedTerm.allowJudgeLogin}'
        }, {
            xtype: 'checkboxfield',
            label: 'Stud. Grades?',
            labelWidth: 150,
            bind: '{selectedTerm.showGrades}'
        }, {
            xtype: 'numberfield',
            label: 'Stud. per Judge',
            labelWidth: 150,
            bind: '{selectedTerm.studentsPerJudge}'
        }, {
            xtype: 'numberfield',
            label: 'Display Order',
            labelWidth: 150,
            bind: '{selectedTerm.display}'
        }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Senior Project Website',
        defaultType: 'textfield',
        defaults: {
            labelWidth: 100
        },
        items: [{
            label: 'Url',
            bind: '{selectedTerm.srProjectUrl}'
        }, {
            label: 'Token',
            bind: '{selectedTerm.srProjectToken}'
        }, {
            label: 'Live Url',
            bind: '{selectedTerm.liveUrl}'
        }, {
            label: 'Dev. Url',
            bind: '{selectedTerm.developmentUrl}'
        }, {
            label: 'No Prof. Img Url',
            bind: '{selectedTerm.noProfileImageUrl}'
        }]

    }, {
        xtype: 'fieldset',
        title: 'Email Settings',
        defaults: {
            labelWidth: 150
        },
        items: [{
            xtype: 'textfield',
            label: 'From',
            bind: '{selectedTerm.mailFrom}'
        }, {
            xtype: 'selectfield',
	    reference: 'passwordReset',
            label: 'Reset Pass.',
            displayField: 'name',
            valueField: 'id',
            //bind: {
            //  store: '{templates4Terms}',
            //    value: '{selectedTerm.resetPasswordTemplate}'
            //}
        }, {
            xtype: 'selectfield',
	    reference: 'confirmTemplateSelector',
            label: 'Confirm Reg.',
            displayField: 'name',
            valueField: 'id',
            //bind: {
            //    store: '{templates4Terms}',
            //    value: '{selectedTerm.confirmTemplate}'
            //}

        }, {
            xtype: 'selectfield',
            label: 'Confirm Acpt.',
	    reference: 'acceptConfirmSelector',
            displayField: 'name',
            valueField: 'id',
            //bind: {
            //    store: '{templates4Terms}',
            //    value: '{selectedTerm.acceptanceConfirmation}'
            //}
        }, {
            xtype: 'selectfield',
            label: 'Reject Template',
	    reference: 'rejectInviteSelector',
            displayField: 'name',
            valueField: 'id',
            //bind: {
            //    store: '{templates4Term}',
            //    value: '{selectedTerm.rejectInviteTemplate}'
            //}
        }, 
	{
            xtype: 'selectfield',
            label: 'Remv. Template',
	    reference: 'removeInviteSelector',
            displayField: 'name',
            valueField: 'id',
            //bind: {
            //    store: '{templates4Term}',
            //    value: '{selectedTerm.removeInviteTemplate}'
            //}
        }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Event Info',
        layout: 'vbox',
        defaultType: 'textfield',
        defaults: {
            labelWidth: 150
        },
        items: [{
            label: 'Start Date',
            bind: '{selectedTerm.startDate}'
        }, {
            label: 'Start Time',
            bind: '{selectedTerm.startTime}'
        }, {
            label: 'End Date',
            bind: '{selectedTerm.endDate}'
        }, {
            label: 'End Time',
            bind: '{selectedTerm.endTime}'
        }, {
            label: 'Deadline Date',
            bind: '{selectedTerm.deadlineDate}'
        }, {
            label: 'Deadline Time',
            bind: '{selectedTerm.deadlineTime}'
        }, {
            label: 'Place',
            bind: '{selectedTerm.location}'
        }, {
            label: 'Map Url',
            bind: '{selectedTerm.mapImageUrl}'
        }]
    }]

});




