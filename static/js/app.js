////CREATE TABLE

// pulls in data from data.js
var tableData = data;
console.log(tableData);

// create a variable to reference the table body from the html
var tbody = d3.select("tbody");

//loop through the data file objects and append tr & td to the tbody with the data object data
tableData.forEach(sighting => {
    //set row variable and append the table row before you loop through the objects data 
    var row = tbody.append("tr");
    //loop through object data and append the table
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
})


////UPDATE FILTER SO IT TAKES USER INPUT AND FILTERS 

//Select the Filter Table button
var button = d3.select("button");

//Add listener to button and record the user input & then react accordingly
button.on("click", function() {

    //get the user input date
    var userInputDate = d3.select("#datetime").property("value");
    console.log("The user input date is:", userInputDate);

    //filter by the input date
    var filteredData = tableData.filter(sighting => sighting.datetime === userInputDate);

    console.log(filteredData);

    //clear old table & update table for the filtered data
    d3.selectAll("td").remove();

    filteredData.forEach(sightings => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    }); 
    

});


