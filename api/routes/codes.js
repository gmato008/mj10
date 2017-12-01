var epilogue = require('epilogue'),
	_ = require('lodash');

module.exports = function(server, db) {
	function createFilter(filter) {
		return function (req, res, context) {
			context.criteria = _.assign(filter || {}, req.params, context.criteria);
			return context.continue;
		};
	}

	var students = epilogue.resource({
			model: db.code,
			excludeAttributes: ['createdAt', 'updatedAt'],
			actions: ['read', 'list'],
			pagination: false,
			endpoints: [apiPrefix + '/codes/students', apiPrefix + '/codes/students/:id']
		}),
		judges = epilogue.resource({
			model: db.code,
			excludeAttributes: ['createdAt', 'updatedAt'],
			actions: ['read','list'],
			pagination: false,
			endpoints: [apiPrefix + '/codes/judges', apiPrefix + '/codes/judges/:id']
		}),
		admins = epilogue.resource({
			model: db.code,
			excludeAttributes: ['createdAt', 'updatedAt'],
			actions: ['read','list'],
			pagination: false,
			endpoints: [apiPrefix + '/codes/admins', apiPrefix + '/codes/admins/:id']
		}),
        unreg = epilogue.resource({
            model: db.code,
            excludeAttributes: ['createdAt', 'updatedAt'],
            actions: ['read','list'],
            pagination: false,
            endpoints: [apiPrefix + '/codes/unreg', apiPrefix + '/codes/unreg/:id']
        }),
		filterByType = epilogue.resource({
			model: db.code,
			excludeAttributes: ['createdAt', 'updatedAt'],
			actions: ['read', 'list'],
			pagination: false,
			endpoints: [apiPrefix + '/codes/:type', apiPrefix + '/codes/:type/:id']
		});

	admins.use({
		list: { fetch: { before: createFilter({type: 'states', abbr: { $like: '3%' }}) } },
		read: { fetch: { before: createFilter({type: 'states', abbr: { $like: '3%' }}) } },
	});
	judges.use({
		list: { fetch: { before: createFilter({type: 'states', abbr: { $like: '2%' }}) } },
		read: { fetch: { before: createFilter({type: 'states', abbr: { $like: '2%' }}) } },
	});
	students.use({
		list: { fetch: { before: createFilter({type: 'states', abbr: { $like: '1%' }}) } },
		read: { fetch: { before: createFilter({type: 'states', abbr: { $like: '1%' }}) } },
	});
    unreg.use({
        list: { fetch: { before: createFilter({type: 'states', abbr: { $like: '4%' }}) } },
        read: { fetch: { before: createFilter({type: 'states', abbr: { $like: '4%' }}) } },
    });
	filterByType.use({
		list: { fetch: { before: createFilter() } },
		read: { fetch: { before: createFilter() } }
	});

	return {
		byType: filterByType,
		students: students,
		judges: judges,
		admins: admins,
		unreg: unreg,
		all: epilogue.resource({
			model: db.code,
			excludeAttributes: ['createdAt','updatedAt'],
			actions: ['list'],
			pagination: false,
			endpoints: [apiPrefix + '/codes', apiPrefix + '/codes/:type/:id']
		})
	};
};