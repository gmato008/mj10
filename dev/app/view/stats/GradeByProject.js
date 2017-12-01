Ext.define('MobileJudge.view.stats.GradeByProject', {
    extend: 'MobileJudge.view.stats.Base',
    xtype: 'gradeByProject',

    requires: [
        'Ext.util.Format',
        'MobileJudge.store.stats.GradeAverage'
    ],

    title: 'Average Grade by Project',
    platformConfig: {
        classic: {
            layout: 'fit',
            items: [{
                xtype: 'cartesian',
                store: {
                    type: 'gradeAverage'
                },
                insetPadding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20
                },
                legend: {
                    docked: "top",
                    centered: true
                },
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    maximum: 50,
                    grid: true,
                    title: {
                        text: 'Average Grade',
                        fontSize: 16
                    }
                }, {
                    type: 'category3d',
                    title: {
                        text: 'Project',
                        fontSize: 16
                    },
                    position: 'bottom',
                    renderer: function(axis, v){
                        v = Ext.util.Format.ellipsis(v,30);
                        return v.replace(/((?:\w+ ){3})/gi, "$1\n");
                    },
                    label: {
                        fontSize: 10,
                        rotate: {
                            degrees: -50
                        }
                    }
                }],
                series: [{
                    type: 'bar3d',
                    xField: 'project',
                    yField: ['avgGrade', 'rawGrade'],
                    title: ['Approved Grade', 'Raw Grade'],
                    stacked: false,
                    showInLegend: true,
                    style: {
                        minGapWidth: 10
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: ['avgGrade', 'rawGrade'],
                        display: 'insideEnd',
                        renderer: function (text) {
                            return Ext.Number.toFixed(parseFloat(text), 2);
                        }
                    },
                    // highlight: {
                    //     fillStyle: ['#5DBCD2']
                    // },
                    listeners: {
                        itemclick: function(chart, item) {
                            var store = Ext.createByAlias('store.projectGrades');
                            var msg = "<p style=\"text-align: center;\">";
                            msg += "Average Accepted Grade: " + item.record.get('avgGrade') +
                                "<br>Average Raw Grade: " + item.record.get('rawGrade');
                            msg += "<br>-------------------------------";

                            for (var i = 0; i < store.getCount(); i++) {
                                if(item.record.get('project') === store.getAt(i).get('project')){
                                    msg += "<br>" + store.getAt(i).get('fullname').toString()
                                        + " -- "
                                        + store.getAt(i).get('rawGrade');
                                }
                            }
                            msg += "</p>";

                            Ext.Msg.alert(item.record.get('project'), msg);
                        }
                    }
                    // interactions: [
                    //     'panzoom',
                    //     'itemhighlight',
                    //     {
                    //         type: 'iteminfo',
                    //         listeners: {
                    //             show: function (me, item, panel) {
                    //                 panel.setHtml('Student: ' + item.record.get('fullName'));
                    //                 // panel.setWidth('90%');
                    //                 // panel.setHeight('60%');
                    //                 // var store = Ext.getStore('MobileJudge.model.grade.Student');
                    //                 // var msg = "<br>-------------------------------";
                    //                 // if (item.record.data.fullName !== null) {
                    //                 //     for (var i = 0; i < store.getCount(); i++) {
                    //                 //         if (store.getAt(i).get('fullName') === item.record.data.fullName) {
                    //                 //             msg += "<br>" + store.getAt(i).get('fullName').toString().charAt(0) + " -- " + store.getAt(i).get('rawGrade');
                    //                 //         }
                    //                 //     }
                    //                 //
                    //                 //     panel.setHtml("<p>" + item.record.data.fullName + "<br>Student ID: " + item.record.data.id + "<br> Raw Grade: " + item.record.data.rawGrade + "<br> Approved Grade: " + item.record.data.grade + "<br> Project: " + item.record.data.project + "<br> Location: " + item.record.data.location + msg + "</p>");
                    //                 // }
                    //
                    //                 // else {
                    //                 //     for (i = 0; i < store.getAllCount(); i++) {
                    //                 //         if (store.getAt(i).get('Name') === item.record.data.Name) {
                    //                 //             msg += "<br>" + store.getAt(i).get('StuName').toString().charAt(0) + ". " + store.getAt(i).get('StuLName') + " -- Raw: " + store.getAt(i).get('RawGrade') + " Accepted: " + store.getAt(i).get('ApprovedGrade');
                    //                 //             //msg += "<br>" + store.getAt(i).get('StuName') + " "+ store.getAt(i).get('StuLName') + " -- Raw: n/a Accepted: n/a";
                    //                 //         }
                    //                 //     }
                    //                 //
                    //                 //
                    //                 //     panel.setHtml("<center>" + item.record.data.Name + "<br> Raw Grade: " + item.record.data.RawGrade + "<br> Approved Grade: " + item.record.data.ApprovedGrade + msg + "</center>");
                    //                 //     //panel.setWidth(200);
                    //                 //     //panel.setHeight(200);
                    //                 //     //panel.setHtml("" + item.record.data.Name + "<br> Raw Grade: n/a <br> Approved Grade: n/a" + msg);
                    //                 // }
                    //
                    //
                    //                 //panel.setHtml("First Name: " + "First Name "+ "<br>Last Name: " + "last Name"+"<br>Student ID: " + "ID " + "<br> Raw Grade: " + item.record.data.RawGrade + "<br> Approved Grade: " + item.record.data.ApprovedGrade + "<br> Project: " + item.record.data.project + "<br> Location: " + item.record.data.location);
                    //
                    //             }
                    //         }
                    //     }
                    // ]
                }],
                plugins: {
                    ptype: 'chartitemevents',
                    moveEvents: true
                }
            }]
        }
    }
});
