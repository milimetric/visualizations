function Mercator(selector, json) {

    // projection fns
    var xy = d3.geo.mercator(),
    path = d3.geo.path().projection(xy);

    // create countries container
    var countries = d3.select(selector)
      .append("svg")
      .append("g")
        .attr("id", "countries");
    
    var color = d3.scale.quantize().range([d3.rgb(247,251,255), d3.rgb(222,235,247), d3.rgb(198,219,239), d3.rgb(158,202,225), d3.rgb(107,174,214), d3.rgb(66,146,198), d3.rgb(33,113,181), d3.rgb(8,81,156), d3.rgb(8,48,107)]).domain([0,1])

    d3.json("world-countries.json", function(loadedFeatures) {

      countries
        .selectAll("path")
          .data(loadedFeatures.features)
        .enter().append("path")
          .attr("d", path)
        .append("title")
          .text(function(d) { return d.properties.name; });
        
        d3.json(json, function(loadedData) {
          console.log('loading world-rand3.json');
          data = loadedData;
          countries
            .selectAll("path")
              .style('fill', function(d) { return data[d.id] ? color(data[d.id]).toString() : '#000000'; });
              //.attr('class', quantize);
        });
    });


    function quantize(d) {
      console.log("d: " + d);
      return "q" + Math.min(8, ~~(data[d.id] * 90 / 12)) + "-9";
    }
}
