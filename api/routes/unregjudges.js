var epilogue = require('epilogue');
var	fetch = require('node-fetch');
fetch.Promise = require('bluebird');
var _ = require('lodash');

module.exports = function(server, db) {
	var trim = /^\/|\/$/g;
    
    server.post(apiPrefix + '/unregjudges', function(req, res, next) {
        
        Promise.all([
            db.term.getActiveTerm({ attributes: ['id']}),
            db.user.findAll({
                where: {
                    role: 2
                }
            })
        ])/*.then(function(unreg_judge){
                var iteration = 0;
                var response = [];
                var obj = {
                        fullName: unreg_judge[0].fullName,
                        id: unreg_judge[0].id,
                        email: unreg_judge[0].email
                };
                unreg_judge.forEach(function(judge){
                    if(obj.id != judge.id){
                        response.push(obj);
                        obj = {
                            fullName: judge.fullName,
                            id: judge.id,
                            email: judge.email
                        };
                    }
                    iteration++;
                    if(iteration === unreg_judge.length){
                        response.push(obj);
                        res.json(response);
                    }
                })

            })*/    
        next();
	});
    
    
	return epilogue.resource({
		model: db.unreg_judges,
        excludeAttributes: ['password','oauth'],
        actions: ['list'],
        search: {
            param: 'query',
            attributes: [ 'fullName', 'affiliation', 'email' ]
        },
        endpoints: [apiPrefix + '/unregjudges']
	});
};
