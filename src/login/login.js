document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    };

    fetch('http://172.16.103.247:9000/core/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Login bem-sucedido');
                alert('Login realizado com sucesso!');
                window.location.href = "../../index.html";
            } else {
                console.error('Erro durante o login');
                //console.log(document.getElementById('msg'))
                document.getElementById('error-message').style.display = 'block';

            }
        })
        .catch(error => {
            console.error('Erro:', error);

        });
});

document.getElementById('cadastre-se-btn').addEventListener('click', function () {
    window.location.href = '../cadFuncionario/cadFuncionario.html'; // 
});