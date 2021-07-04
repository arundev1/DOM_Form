
var forms = document.getElementsByClassName('needs-validation');
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
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
        form.classList.add('was-validated');
    }, false);
    });

  
var myForm = document.getElementById('myForm');
let formValues = [];

function iterateTableData() {
    var cboxes = document.getElementsByName('food[]');
    var len = cboxes.length;
    let selectedFood = [];
    for (var i=0; i<len; i++) {
        if(cboxes[i].checked){
            selectedFood.push(cboxes[i].value);
        }
    }
    formValues.push({
        firstName: myForm.firstName.value,
        lastName: myForm.lastName.value,
        address: myForm.address.value,
        pincode: myForm.pincode.value,
        gender: myForm.gender.value,
        food: selectedFood,
        country: myForm.country.value,
        state: myForm.state.value
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
    forms.classList.remove('was-validated');
}
