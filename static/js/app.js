////CREATE TABLE

// from data.js
var tableData = data;

// create a variable to reference the table body from the html
var tbody = d3.select("tbody");

//loop through the data and append tr & td to the tbody with the data object data
data.forEach(sighting => {
    //set row variable and append the table row before you loop through the objects data so that all the data will be 'inline' instead of show up in a column
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

    });
})


