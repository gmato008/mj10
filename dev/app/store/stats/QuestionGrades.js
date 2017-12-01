Ext.define('MobileJudge.store.stats.QuestionGrades2', {
    extend: 'Ext.data.Store',
    alias: 'store.questionGrades2',
    // TODO: get average grade
    groupField: 'question',
    fields: ['grade', 'question'],

    autoLoad: true,
    pageSize: 0
});
