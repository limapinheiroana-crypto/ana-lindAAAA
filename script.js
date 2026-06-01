// 1. Mostrar/Esconder o botão "Voltar ao Topo" conforme o usuário rola a página
const btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Ação de clicar no botão e ir para o topo suavemente
btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 2. Animação de números subindo (Contadores de Impacto)
const numeros = document.querySelectorAll('.numero');

numeros.forEach(numero => {
    const atualizarContador = () => {
        const alvo = +numero.getAttribute('data-alvo');
        const atual = +numero.innerText;

        // Velocidade do contador
        const incremento = alvo / 100;

        if (atual < alvo) {
            numero.innerText = Math.ceil(atual + incremento);
            setTimeout(atualizarContador, 20);
        } else {
            numero.innerText = alvo;
        }
    };
    
    atualizarContador();
});
