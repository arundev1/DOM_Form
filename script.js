
var forms = document.getElementsByClassName('reqvali');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
        event.stopPropagation();
        }else{
            console.log(forms);
            iterateTableData();
        }
        form.classList.add('validation_done');
    }, false);
    });

  
var Form_val = document.getElementById('Form_val');
let formValues = [];

function iterateTableData() {
    var cboxes = document.getElementsByName('food[]');
    
    let selectedFood = [];
    for (var i=0; i<cboxes.length; i++) {
        if(cboxes[i].checked){
            selectedFood.push(cboxes[i].value);
        }
    }
    formValues.push({
        firstName: Form_val.firstName.value,
        lastName: Form_val.lastName.value,
        address: Form_val.address.value,
        pincode: Form_val.pincode.value,
        gender: Form_val.gender.value,
        food: selectedFood,
        country: Form_val.country.value,
        state: Form_val.state.value
    })
    var tbody = '';
    formValues.forEach(value=>{
        tbody += "<tr>";
        tbody += `<td> ${value.firstName} </td>`;
        tbody += `<td> ${value.lastName} </td>`;
        tbody += `<td> ${value.address} </td>`;
        tbody += `<td> ${value.pincode} </td>`;
        tbody += `<td> ${value.gender} </td>`;
        tbody += `<td> ${value.food} </td>`;
        tbody += `<td> ${value.country} </td>`;
        tbody += `<td> ${value.state} </td> </tr>`;
    });
    var tableData = document.getElementById('table-data');
    tableData.innerHTML = tbody;
    myForm.reset();
    forms.classList.remove('validation_done');
}