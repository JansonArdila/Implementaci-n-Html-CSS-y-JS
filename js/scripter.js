var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);        
    }
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["codigoAuto"] = document.getElementById("codigoAuto").value;
    formData["nombreAuto"] = document.getElementById("nombreAuto").value;
    formData["modeloAuto"] = document.getElementById("modeloAuto").value;
    formData["serieAuto"] = document.getElementById("serieAuto").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.codigoAuto;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nombreAuto;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.modeloAuto;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.serieAuto;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Borrar</button>`
}


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('codigoAuto').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nombreAuto').value = selectedRow.cells[1].innerHTML;
    document.getElementById('modeloAuto').value = selectedRow.cells[2].innerHTML;
    document.getElementById('serieAuto').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.codigoAuto;
    selectedRow.cells[1].innerHTML = formData.nombreAuto;
    selectedRow.cells[2].innerHTML = formData.modeloAuto;
    selectedRow.cells[3].innerHTML = formData.serieAuto;
}

function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);   
    }
    resetForm();
}

function resetForm(){
    document.getElementById('codigoAuto').value = '';
    document.getElementById('nombreAuto').value = '';
    document.getElementById('modeloAuto').value = '';
    document.getElementById('serieAuto').value = '';
}