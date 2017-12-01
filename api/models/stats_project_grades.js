module.exports = function(sequelize, DataTypes) {
    var stats = sequelize.define('stats_project_grades', {
        project: {
            type: DataTypes.STRING,
            get: function()  {
                var project = this.getDataValue('projectName'),
                    grade = this.getDataValue('grade');
                return project + ': ' + grade;
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
