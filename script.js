/* ==========================================================================
   TECH PARA TODOS — script.js
   Função: ligar e desligar o modo de Alto Contraste.
   Todo o VISUAL do modo está no style.css (classe "alto-contraste").
   Este script só adiciona/remove essa classe no <body> quando o
   botão é clicado.
   ========================================================================== */

// Pega o botão pelo id definido no HTML
const botaoContraste = document.getElementById("btn-alto-contraste");

// Adiciona a ação de clique no botão
botaoContraste.addEventListener("click", function () {

  // Liga ou desliga a classe "alto-contraste" no body.
  // classList.toggle() adiciona a classe se ela não existir,
  // e remove se ela já existir.
  document.body.classList.toggle("alto-contraste");

  // Verifica se o modo está ativado agora, para atualizar o texto
  // e o estado do botão (importante para acessibilidade)
  const ativado = document.body.classList.contains("alto-contraste");

  if (ativado) {
    botaoContraste.textContent = "Desativar Alto Contraste";
    botaoContraste.setAttribute("aria-pressed", "true");
  } else {
    botaoContraste.textContent = "Ativar Alto Contraste";
    botaoContraste.setAttribute("aria-pressed", "false");
  }
});

/* ==========================================================================
   Botão circular: mostra/esconde o painel de acessibilidade
   (Alto Contraste + botões de fonte).
   Mesma lógica de antes: só liga/desliga uma classe (aqui, "visivel").
   ========================================================================== */

// Pega o novo botão circular e o painel pelo id definido no HTML
const botaoToggle = document.getElementById("btn-toggle-contraste");
const painelAcessibilidade = document.getElementById("painel-acessibilidade");

botaoToggle.addEventListener("click", function () {

  // Mostra ou esconde o painel inteiro (contraste + fonte)
  painelAcessibilidade.classList.toggle("visivel");

  // Verifica se está visível agora, para atualizar o botão circular
  const visivel = painelAcessibilidade.classList.contains("visivel");

  botaoToggle.setAttribute("aria-expanded", visivel);
  botaoToggle.setAttribute(
    "aria-label",
    visivel ? "Esconder opções de acessibilidade" : "Mostrar opções de acessibilidade"
  );
});

/* ==========================================================================
   Botões "A+" e "A−": aumentam ou diminuem o tamanho da letra do site.
   A ideia é simples: mudamos o tamanho de fonte do <html>. Como o CSS
   do site usa "rem" (unidade relativa ao <html>), todo o texto que
   depende dessa unidade aumenta ou diminui junto, de forma proporcional.
   ========================================================================== */

const botaoFonteMais = document.getElementById("btn-fonte-mais");
const botaoFonteMenos = document.getElementById("btn-fonte-menos");

// Tamanho da fonte em porcentagem (100% = tamanho normal do navegador)
let tamanhoFonte = 100;

// Limites para não deixar o texto grande ou pequeno demais
const TAMANHO_MINIMO = 80;
const TAMANHO_MAXIMO = 150;

function aplicarTamanhoFonte() {
  document.documentElement.style.fontSize = tamanhoFonte + "%";
}

botaoFonteMais.addEventListener("click", function () {
  if (tamanhoFonte < TAMANHO_MAXIMO) {
    tamanhoFonte += 10;
    aplicarTamanhoFonte();
  }
});

botaoFonteMenos.addEventListener("click", function () {
  if (tamanhoFonte > TAMANHO_MINIMO) {
    tamanhoFonte -= 10;
    aplicarTamanhoFonte();
  }
});