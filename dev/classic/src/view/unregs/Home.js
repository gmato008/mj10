Ext.define('MobileJudge.view.unregs.Home', {
	extend: 'Ext.container.Container',
	xtype: 'unreghome',

	controller: 'unregistered',
	viewModel: {
		type: 'unregistered'
	},

	items: [
		{
			xtype: 'container',
			reference: 'wizard',
			layout: 'card',
			margin: 20,
			items: [
				{
					xtype: 'unregjudges',
					title: 'Judges',
				},
			]
		}
	]

});
