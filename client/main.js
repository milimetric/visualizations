Meteor.startup(function () {
    new TreeMapGraph('.treeMap .chart', 'participation.json');
    new SankeyGraph('.sankey .chart', 'participation.graph.json');
    new Mercator('.mercator .chart', 'world-rand3.json');
});
