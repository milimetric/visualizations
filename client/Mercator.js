function Mercator(selector, json) {

// projection fns
var xy = d3.geo.mercator(),
path = d3.geo.path().projection(xy);

// create countries container
var countries = d3.select(selector)
  .append("svg")
  .append("g")
    .attr("id", "countries");

d3.json("data/world-countries.json", function(collection) {

  countries
    .selectAll("path")
      .data(collection.features)
    .enter().append("path")
      .attr("d", path)
    .append("title")
      .text(function(d) { return d.properties.name; });
});

d3.json(json, function(collection) {
  console.log('loading world-rand3.json');
  data = collection;
  countries
    .selectAll("path")
      .attr("class", quantize);
});

function quantize(d) {
  console.log("d: " + d);
  return "q" + Math.min(8, ~~(data[d.id] * 90 / 12)) + "-9";
}
}