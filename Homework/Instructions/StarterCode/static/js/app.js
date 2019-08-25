// from data.js
  var tableData = data;

// Get a reference to the table body
  var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
  console.log(data);

// Select the submit button
  var submit = d3.select("#filter-btn");
  submit.on("click", function() {

      // Prevent the page from refreshing
      d3.event.preventDefault();

      // Select the input element and get the raw HTML node
     var inputDate = d3.select("#datetime");
     var inputCity = d3.select("#cityname");
     var inputState = d3.select("#statename");
     var inputCountry = d3.select("#countryname");
     var inputShape = d3.select("#shape");
      // Get the value property of the input element
     var input_Date = inputDate.property("value");        
     var input_City = inputCity.property("value");
     var input_State = inputState.property("value");
     var input_Country = inputCountry.property("value");
     var input_Shape = inputShape.property("value");
      // filtering the data on the basis of user input
     var filterDate = tableData.filter(info => info.datetime === input_Date);
     var filterCity = tableData.filter(info => info.city === input_City);
     var filterState = tableData.filter(info => info.state === input_State);
     var filterCountry = tableData.filter(info => info.country === input_Country);
     var filterShape = tableData.filter(info => info.shape === input_Shape);
     console.log(filterDate);
     console.log(filterCity);
     document.getElementsByTagName('tbody')[0].innerHTML = '';
    // Loop Through `data`
      filterDate.forEach(function(UFOSighting) {
    // Use d3 to append one table row `tr` for each UFO  object
      //console.log(UFOSighting);
     //function UFOSighting(data){
        var row = tbody.append("tr");
    //  Use `Object.entries` 
         Object.entries(UFOSighting).forEach(function ([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value in the UFOSighting  object
        var cell = row.append("td");
    // Append a cell to the row for each value in the UFOSighting  object
        cell.text(value);
      });
    }); 
    filterCity.forEach(function(UFOSighting) {
      console.log(UFOSighting);
      var row = tbody.append("tr");
      Object.entries(UFOSighting).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      
  });
});
  filterState.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  
});
});
filterCountry.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  
});
});
filterShape.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  
});
});
});


