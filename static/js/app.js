// buildTable(tableData)

// function buildTable(tableData){
//     var table = document.getElementById("myTable")

//     // Clears the table 
//     table.innerHTML = ''

//     // for loop that loops through all of our data
//     for (var i = 0; i < data.length; i++){
//         var row =`<tr>
//                     <td>${data[i].datetime}</td>
//                     <td>${data[i].city}</td>
//                     <td>${data[i].state}</td>
//                     <td>${data[i].country}</td>
//                     <td>${data[i].shape}</td>
//                     <td>${data[i].durationMinutes}</td>
//                     <td>${data[i].comments}</td>
//                 </tr>`
//         table.innerHTML += row
//     }
// }
// -----------------------------------------------------------

// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// selecting the submission button
function runEnter() {

    // stop the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // print in console
    console.log(inputValue);
    console.log(tableData);

    // filter the data based on the input
    var filteredData = tableData.filter(row => row.datetime === inputValue);

    // log the filtered data 
    console.log("filtered data", filteredData);

    // append filtered data to the table 
    filteredData.forEach(function(info) {
        var row = d3.select("tbody").append("tr");
        Object.entries(info).forEach(function([key,value]) {
             console.log(key,value);
             var cell = row.append("td");
             cell.text(value);
        });
    });
};
    // -----------------------------------------------------------
