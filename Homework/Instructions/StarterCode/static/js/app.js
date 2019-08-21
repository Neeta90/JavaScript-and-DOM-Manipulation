// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);
//  Step 1: Loop Through `data` 
data.forEach(function (UFOSighting) {
  // Step 2:  Use d3 to append one table row `tr` for each UFO  object
  console.log(UFOSighting);
  var row = tbody.append("tr");
  // Step 3:  Use `Object.entries` 
  Object.entries(UFOSighting).forEach(function ([key, value]) {
    console.log(key, value);
    // Step 4: Use d3 to append 1 cell per UFOSighting value 
    // Append a cell to the row for each value
    // in the UFOSighting  object
    var cell = row.append("td");
    // Step 5: Use d3 to update each cell's text with UFOSighting  values 
    // Append a cell to the row for each value in the UFOSighting  object
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
/*data.forEach((UFOSighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});*/
