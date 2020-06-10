var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function(ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      var item = row.append("td");
      item.text(value);
    });
  });


// Set up button and filter by date
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach(function(report) {
    var row = tbody.append("tr");
    Object.entries(report).forEach(function([key, value]) {
        var item = row.append("td");
        item.text(value);
    });
});
}