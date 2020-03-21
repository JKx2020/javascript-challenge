////CREATE TABLE

// pulls in data from data.js
var tableData = data;

// create a variable to reference the table body from the html
var tbody = d3.select("tbody");

//loop through the data file objects and append tr & td to the tbody with the data object data
data.forEach(sighting => {
    //set row variable and append the table row before you loop through the objects data 
    var row = tbody.append("tr");
    //loop through object data and append the table
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
})


////EDIT FILTER SO IT TAKES USER INPUT AND FILTERS 

//Select the Filter Table button
var button = d3.select("button");

//Add listener
button.on("click", function() {
    // Select the input element where the user will add in the filter date
    //get the value property of the input element
    var input = d3.select("#datetime").property("value");
    console.log(input);

    //set filter to the input value
    var filteredData = data.filter(dateInput => data.Date === input);
});


