
 document.getElementById('enviarBtn').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('.checkin:checked');
     var listaOrdenada = document.getElementById('tarefas');
                        
        listaOrdenada.innerHTML = '';
                        
        checkboxes.forEach(function(checkbox) {
        var listItem = document.createElement('li');
        listItem.textContent = checkbox.nextElementSibling.textContent;
        listaOrdenada.appendChild(listItem);
});
});
                