Meteor.startup(function () {
    new TreeMapGraph('.treeMap .chart', 'participation.json');
    new SankeyGraph('.sankey .chart', 'participation.graph.json');
});
