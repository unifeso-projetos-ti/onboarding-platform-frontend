// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"

// export function TextareaWithButton() {
//     return (
//         <div className="Comentario">
//             <Textarea placeholder="Type your message here." />
//             <Button>Send message</Button>
//         </div>
//     )
// }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('comentarioForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const assunto = document.getElementById('assunto').value;
        const comentario = document.getElementById('text').value;

        const data = {
            assunto: assunto,
            comentario: comentario
        };

        fetch('http://172.16.103.247:9000/core/feedback/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar o comentário.');
            }
            return response.json();
        })
        .then(data => {
            alert('Comentário enviado com sucesso!');
            // Aqui você pode fazer algo após o envio bem-sucedido, como redirecionar o usuário ou exibir uma mensagem de sucesso.
        })
        .catch(error => {
            console.error('Erro ao enviar o comentário:', error);
            alert('Ocorreu um erro ao enviar o comentário. Por favor, tente novamente.');
        });
    });
});

