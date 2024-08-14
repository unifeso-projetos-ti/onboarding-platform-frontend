const formEl = document.getElementById('form-api');
const respostaEl = document.getElementById('resposta-api');
const confirmacaoEl = document.getElementById('confirmacao-cadastro');

formEl.addEventListener('submit', evento => {
  evento.preventDefault();

  const formData = new FormData(formEl);
  const data = {
    usuario: formData.get('usuario'),
    nome: formData.get('nome'),
    email: formData.get('email'),
    senha: formData.get('senha'),
  };

  fetch("http://172.16.103.247:9000/core/create-user/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (!res.ok) {
      return res.json().then(error => Promise.reject(error));
    }
    return res.json();
  }).then(data => {
    if (data.msg) {
      respostaEl.textContent = data.msg;
      // Mostra a tela de confirmação
      confirmacaoEl.style.display = 'block';

    } else {
      respostaEl.textContent = 'Resposta inválida recebida da API';
    }
  }).catch(error => {
    console.error('Erro:', error);
    if (error.errors) {
      const errorMessages = Object.values(error.errors).map(err => err.join(' ')).join(' ');
      respostaEl.textContent = `Erro ao enviar para a API: ${errorMessages}`;
    } else if (error.msg) {
      respostaEl.textContent = error.msg;
    } else {
      respostaEl.textContent = 'Erro ao enviar para a API';
    }
  });
});

function fecharConfirmacao() {
  confirmacaoEl.style.display = 'none';
  window.location.href = "../login/login.html";
}