module.exports = function(sequelize, DataTypes) {
    var stats = sequelize.define('stats_question_grades', {
        question: {
            type: DataTypes.STRING,
            get: function()  {
                var question = this.getDataValue('question'),
                    grade = this.getDataValue('grade');
                return question + ': ' + grade;
            }
        },
        grade: DataTypes.INTEGER(3)
    }, {
        timestamps: false,
        tableName: 'judges_grades',
        classMethods: {
            associate: function () {
                stats.removeAttribute('id');
            }
        }
    });
    return stats;
};
