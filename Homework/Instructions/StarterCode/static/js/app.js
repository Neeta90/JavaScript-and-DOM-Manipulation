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
    // var inputCity = d3.select("#cityname");
      // Get the value property of the input element
     var input_Date = inputDate.property("value");        
     //var input_city = inputCity.property("value");
      // filtering the data on the basis of user input
     var filterDate = tableData.filter(info => info.datetime === input_Date);
    // var filterCity = tableData.filter(info => info.city === input_city);
     console.log(filterDate);
     //console.log(filterCity);
     document.getElementsByTagName('tbody')[0].innerHTML = '';
    // Loop Through `data`
      filterDate.forEach(function(UFOSighting) {
    // Use d3 to append one table row `tr` for each UFO  object
      console.log(UFOSighting);
     //function UFOSighting(data){
        var row = tbody.append("tr");
    //  Use `Object.entries` 
         Object.entries(UFOSighting).forEach(function ([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value in the UFOSighting  object
        var cell = row.append("td");
    // Append a cell to the row for each value in the UFOSighting  object
        cell.text(value);
   // filterDate.forEach(function(UFOSighting) {
  });
});
});

/*function getdata(filterdata){
  var filteredDate = tableData.filter(info => info.datetime === inputValue);
  var filtercity = tableData.filter(info => info.city === input_city_value);
  //if (filteredDate || filtercity){
    switch
      UFOSighting(filteredDate);
      UFOSighting(filtercity);
   }
}*/

