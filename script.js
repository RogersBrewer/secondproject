


  function addItem(event) {

  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;   
  var todayWeight = document.getElementById("today-weight").value;
  var myNurse = document.getElementById("my-nurse").value; 
  var myDoctor = document.getElementById("my-doctor").value;
  var painAmTaking = document.getElementById("pain-am-taking").value;
  var additionalMedications = document.getElementById("additional-medications").value;
  var lastPainMed = document.getElementById("last-pain-med").value;
  var nextPainMed = document.getElementById("next-pain-med").value;  
  var breastfed = document.getElementById("breastfed").value;
  var pumped = document.getElementById("pumped").value;
  var wetDiaper = document.getElementById("wet-diaper").value;
  var shool = document.getElementById("shool").value;
  var other = document.getElementById("other").value;
  
  
    // For debugging purposes to see what we typed in the input fields
 

  // Create a new table row on the fly
  var newRow = document.createElement("tr");

  // Add table cells to the new table row
  var fields = [
    date, 
    time,
    todayWeight,
    myNurse,
    myDoctor,
    painAmTaking,
    additionalMedications,
    lastPainMed,
    nextPainMed,    
    breastfed, 
    pumped, 
    wetDiaper, 
    shool, 
    other, 

  ];
  for(var index = 0; index < fields.length; index++) {
    newRow.innerHTML += "<td>" + fields[index] + "</td>";
  }
  var fieldIds = [
    "date", 
    "time",
    "today-weight",
    "my-nurse",
    "my-doctor",
    "pain-am-taking",
    "additional-medications",
    "last-pain-med",
    "next-pain-med",     
    "breastfed", 
    "pumped", 
    "wet-diaper", 
    "shool", 
    "other", 
   
  ];

  // Clear up the form fields
  for (var index = 0; index < fieldIds.length; index++) {
    document.getElementById(fieldIds[index]).value = '';
  }

 
  // Finally add the new record (new row) to the end of the table
  document.getElementById("list").appendChild(newRow);  
}

function myFunction(val) {
  var wel =  document.getElementById('wel')
  var welText = document.createTextNode('    WELCOME AND CONGRATULATIONS ON YOUR NEW BABY!!  ')
  var name = document.getElementById('my-name').value
  var nameText = document.createTextNode(name)
  

  
  
  wel.appendChild(nameText)
  wel.appendChild(welText)
   
 }

  



