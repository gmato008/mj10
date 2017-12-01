Ext.define('MobileJudge.view.stats.StatsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.stats',

    requires: [
        'MobileJudge.proxy.API',
        'MobileJudge.store.stats.GradeAverage',
        'MobileJudge.store.stats.QuestionAverage',
    ],

    stores: {
        avgProjectGrades: {
            type: 'gradeAverage',
            storeId: 'statsProjectGrades',
            proxy: {
                type: 'api',
                url: '/api/stats/project_grades'
            }
        },
        avgQuestionGrades: {
            type: 'questionAverage',
            storeId: 'statsQuestionGrades',
            proxy: {
                type: 'api',
                url: '/api/stats/question_grades'
            }
        }
    }
});
