var epilogue = require('epilogue');
var fetch = require('node-fetch');
fetch.Promise = require('bluebird');
var _ = require('lodash');

module.exports = function(server, db){
	var trim = /^\/|\/$/g;

	server.post(apiPrefix + '/judge_second_view', function(req, res, next){
		db.judges_grade.findAll({
			where: {
				judgeId: req.params.judgeId
			}
		}).then(function(judge_grades){
			var iteration = 0;
			var response = [];
			var obj = {
						    student: judge_grades[0].student,
						    gradeAverage: 0,
                            rawGrade:0,
                            studentId: judge_grades[0].studentId,
                            judgeId: judge_grades[0].judgeId,
                            projectName: judge_grades[0].projectName,
                            accepted: false,
                            rejected: false,
                            pending: false
					  };
			judge_grades.forEach(function(st){
				if(obj.studentId != st.studentId){
					response.push(obj);
					obj = {	
								student: st.student,
								gradeAverage: st.accepted === "Accepted" ? st.grade:0,
								rawGrade: st.grade,
								studentId: st.studentId,
								judgeId: st.judgeId,
								projectName: st.projectName,
								accepted: false,
								rejected: false,
								pending: false
						  };
				}
				else{
					if(st.accepted == "Accepted"){
						obj.accepted = true;
						obj.gradeAverage = obj.gradeAverage + st.grade;
						obj.rawGrade = obj.rawGrade + st.grade;
					}
					else if (st.accepted == "Pending"){
						obj.pending = true;
						obj.rawGrade = obj.rawGrade + st.grade;
					}
					else{
						obj.rejected = true;
						obj.rawGrade = obj.rawGrade + st.grade;
					}
				}
				iteration++;
				if(iteration === judge_grades.length){
					response.push(obj);
					res.json(response);
				}
			})
		})
		next();
	});
	server.put(apiPrefix + '/judge_second_view_save',function(req, res, next){
		var stateId = 0;
		var count = 0;
		var data = req.params.data;

		if(req.params.state == "Accepted"){
			stateId = 1;
		}
		else if (req.params.state == "Rejected"){
			stateId = 2;
		}
		else{
			stateId = 0;
		}

		if (data.length == 1) {
			fetch.Promise.all([
				db.grade.findAll({
					where: {
						judgeId: data[0].judgeId,
						studentId: data[0].studentId
					}
				}),
			]).then(function(arr){
				var grades = arr[0];
				data.forEach(function(obj){
					grades.forEach(function(grade){
						if(grade.studentId == obj.studentId){
							grade.state = stateId;
							grade.save();
						}
					})
					count++;

					if(count === data.length){
						res.json({result: true});
						next();
					}
				})
			})
		}
		else{
			fetch.Promise.all([
				db.grade.findAll({
					where: {
						judgeId: data[0].judgeId
					}
				}),
			]).then(function(arr){
				var grades = arr[0];
				data.forEach(function(obj){
					grades.forEach(function(grade){
						if(grade.studentId == obj.studentId){
							grade.state = stateId;
							grade.save();
						}
					})
					count++;

					if(count === data.length){
						res.json({result: true});
						next();
					}
				})
			})
		}
	});
	return epilogue.resource({
		model: db.judges_grade,
		endpoints: [apiPrefix + '/judge_second_view']
	});
};