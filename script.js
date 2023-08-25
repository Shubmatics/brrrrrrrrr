
function updateMenu2() {
  var menu1 = document.getElementById("menu1");
  var menu2 = document.getElementById("menu2");

  // Clear the current options
  menu2.innerHTML = "";

  // Get the selected value from the first menu
  var selectedValue = menu1.value;

  // If no option is selected, display the "Select option first" text in the second menu
  if (selectedValue === "") {
    var defaultOption = document.createElement("option");
    defaultOption.text = "Select a Department";
    menu2.add(defaultOption);
    return; // Exit the function
  }

  // Define the options for the second menu based on the selection from the first menu
  var options;
  if (selectedValue === "option1") {
    options = ["Select Department", "Anatomy", "Biochemistry","Biomedical Laboratory Sciences","Chemical Pathology","Haematology", "Immunology", "Medical Microbiology and Parasitology", "Pathology", "Pharmacology and Therapeutics", "Physiology", "Virology"  ];
  } else if (selectedValue === "option2") {
    options = ["Select Department", "Anaesthesia", "Community Medicine", "Institute Of Child HEalth", "Medicine", "Nuclear Medicine", "Nursing", "Obstetrics and Gynaecology", "Oto-Rhino-Laryngology", "Ophthalmology", "Paediatrics", "physiotherapy", "Psychiatry", "Radiation Oncology", "Radiology", "Surgery"];
  } else if (selectedValue === "option3") {
    options = ["Select Department", "Environmental Health Sciences", "Epidemiology and Medical Statistics", "Health Policy and Management", "Health Promotion and Education", "Human Nutrition"];
  }else if (selectedValue === "option4") {
    options = ["Select Department", "Child Oral Health", "Oral and Maxillofacial Surgery", "Oral Pathology/ Oral Medicine", " Periodontology and Community Dentistry","Restorative Dentistry" ];
  }
  

  // Populate the second menu with new options
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.text = options[i];
    menu2.add(option);
  }
}



var addButton = document.getElementBytype('addButton');
var labelCount = 0;



function addLabel() {
  labelCount++;

  var labelsContainer = document.getElementById('labelsContainer');

  // Create placeholders container
  var placeholdersContainer = document.createElement('div');
  placeholdersContainer.classList.add('input-container'); // Add a CSS class for styling

  // Create first input element
  var input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('id', 'input' + labelCount + '-1');
  input1.setAttribute('name', 'input' + labelCount + '-1');
  input1.setAttribute('placeholder', 'Facility Name');

  // Create second input element
  var input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'input' + labelCount + '-2');
  input2.setAttribute('name', 'input' + labelCount + '-2');
  input2.setAttribute('placeholder', 'Value');

  // Create third input element
  var input3 = document.createElement('input');
  input3.setAttribute('type', 'text');
  input3.setAttribute('id', 'input' + labelCount + '-3');
  input3.setAttribute('name', 'input' + labelCount + '-3');
  input3.setAttribute('placeholder', 'Capacity/Comment');

  // Create remove button
  var removeButton = document.createElement('button');
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('onclick', 'removeLabel(this)');
  removeButton.innerHTML = 'Remove';

  // Append inputs to placeholders container
  placeholdersContainer.appendChild(input1);
  placeholdersContainer.appendChild(input2);
  placeholdersContainer.appendChild(input3);
  placeholdersContainer.appendChild(removeButton);

  // Append placeholders container to container
  labelsContainer.appendChild(placeholdersContainer);

}
{
inputContainer.appendChild(inputGroup);
}

function removeLabel(button) {
  var placeholdersContainer = button.parentNode; // Get the parent container of the clicked button
  var labelsContainer = document.getElementById('labelsContainer');
  labelsContainer.removeChild(placeholdersContainer);

  // Adjust margins of remaining input-groups
  var remainingGroups = inputContainer.getElementsByClassName('input-group');
  for (var i = 0; i < remainingGroups.length; i++) {
    remainingGroups[i].style.marginBottom = '-40px';
  }
}



