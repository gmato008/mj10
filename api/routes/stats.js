var epilogue = require('epilogue');

module.exports = function(server, db) {
    return {
        avgProjectGrades: epilogue.resource({
            model: db.stats_project_grades,
            endpoints: [apiPrefix + '/stats/project_grades'],
            actions: ['list'],
            pagination: false
        }),
        avgQuestionGrades: epilogue.resource({
            model: db.stats_question_grades,
            endpoints: [apiPrefix + '/stats/question_grades'],
            actions: ['list'],
            pagination: false
        })
    };
};
