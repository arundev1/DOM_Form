
var forms = document.getElementsByClassName('reqvali');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
        event.stopPropagation();
        }else{
            iterateTableData();
        }
        form.classList.add('vali_done');
    }, false);
    });

  
var Form_val = document.getElementById('Form_val');
let formValues = [];

function iterateTableData() {
    var checks = document.getElementsByName('food[]');
    var len = checks.length;
    let selectedFood = [];
    var leng=selectedFood.length;
    for (var i=0; i<len; i++) {
        if(checks[i].checked){
            selectedFood.push(checks[i].value);
        }
        else{
            return "Select 2 item"
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
    Form_val.reset();
    forms.classList.remove('vali_done');
}
