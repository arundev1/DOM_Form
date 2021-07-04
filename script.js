var form = document.getElementsByClassName('val');
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

  
var form_val = document.getElementById('form_val');
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
        firstName: form_val.firstName.value,
        lastName: form_val.lastName.value,
        address: form_val.address.value,
        pincode: form_val.pincode.value,
        gender: form_val.gender.value,
        food: selectedFood,
        country: form_val.country.value,
        state: form_val.state.value
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
    form_val.reset();
    forms.classList.remove('validation_done');
}
