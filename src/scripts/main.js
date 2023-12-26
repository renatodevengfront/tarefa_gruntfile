document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('#class').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let container = document.getElementById('#class').value;
        container = parseInt(container);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('#class').innerText = numeroAleatorio;
        document.querySelector('#class').computedStyleMap.display = 'block';
    })
})