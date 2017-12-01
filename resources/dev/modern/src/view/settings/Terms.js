Ext.define('MobileJudge.view.settings.Terms', {
    extend: 'Ext.form.Panel',
    xtype: 'panel',
    //fullscreen: true,
    //renderTo: Ext.getBody(),
    alias: 'widget.terms',

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
                options: [{
                    text: 'Fall 2017',
                    value: 'first'
                }, {
                    text: 'Second Option',
                    value: 'second'
                }, {
                    text: 'Third Option',
                    value: 'third'
                }]
            }, {
                xtype: 'button',
                text: 'New',
                iconCls: 'x-fa fa-edit',
                ui: 'action'
            }, {
                xtype: 'button',
                text: 'Save',
                iconCls: 'x-fa fa-save',
                ui: 'confirm'
            }, {
                xtype: 'button',
                text: 'Delete',
                iconCls: 'x-fa fa-remove',
                ui: 'decline'
            }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Selected Term',
        items: [{
                xtype: 'textfield',
                label: 'Name',
		labelWidth: 150
            }, {
                xtype: 'checkboxfield',
                label: 'Is Active?',
                labelWidth: 150

            }, {
                xtype: 'checkboxfield',
                label: 'Judge Login?',
                labelWidth: 150
            }, {
                xtype: 'checkboxfield',
                label: 'Stud. Grades?',
                labelWidth: 150
            }, {
                xtype: 'numberfield',
                label: 'Stud. per Judge',
                labelWidth: 150
            }, {
                xtype: 'numberfield',
                label: 'Display Order',
                labelWidth: 150
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
            label: 'Url'
        }, {
            label: 'Token'
        }, {
            label: 'Live Url'
        }, {
            label: 'Dev. Url'
        }, {
            label: 'No Prof. Img Url'
        }]

    }, {
        xtype: 'fieldset',
        title: 'Email Settings',
	defaults: {
		labelWidth: 150
	},
        items: [{
                xtype: 'textfield',
                label: 'From'
                    //placeHolder: 'Masoud Sadjadi <sadjadi@cs.fiu.edu>'
            }, {
                xtype: 'selectfield',
                label: 'Reset Pass.',
                options: [{
                        text: 'Forgot Password'
                            //value:
                    }

                ]
            }, {
                xtype: 'selectfield',
                label: 'Confirm Reg.',
                options: [{
                        text: 'Registration Confirmation for Judges'
                            //value:
                    }

                ]
            }, {
                xtype: 'selectfield',
                label: 'Confirm Reg.',
                options: [{
                        text: 'Acceptance Confirmation for Judges'
                            //value:
                    }

                ]
            }, {
                xtype: 'selectfield',
                label: 'Reject Template',
                options: [{
                        text: 'Judge Reject Invite'
                            //value:
                    }

                ]
            }, {
                xtype: 'selectfield',
                label: 'Acpt. Template',
                options: [{
                        text: 'Judge Accept Invite'
                            //value:
                    }

                ]
            }, {
                xtype: 'selectfield',
                label: 'Remv. Template',
                options: [{
                        text: 'Judge Remove Invite'
                            //value:
                    }

                ]
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
            label: 'Start Date'
        }, {
            label: 'Start Time'
        }, {
            label: 'End Date'
        }, {
            label: 'End Time'
        }, {
            label: 'Deadline Date'
        }, {
            label: 'Deadline Time'
        }, {
            label: 'Place'
        }, {
            label: 'Map Url'
        }]
    }]

});

