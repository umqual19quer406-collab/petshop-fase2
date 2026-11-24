// Localiza o formulário e a área que exibirá o preço.
const formulario = document.getElementById("form-agendamento");
const resumoPreco = document.getElementById("resumo-preco");

// Formata os valores como moeda brasileira.
const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// Calcula o valor conforme o serviço e o transporte escolhidos.
function atualizarPreco() {
  const servicoSelecionado = formulario.querySelector(
    'input[name="servico"]:checked',
  );

  const atendimentoSelecionado = formulario.querySelector(
    'input[name="forma_atendimento"]:checked',
  );

  // Ainda não é possível calcular sem as duas escolhas.
  if (!servicoSelecionado || !atendimentoSelecionado) {
    resumoPreco.textContent =
      "Selecione o serviço e a forma de atendimento para consultar o valor.";
    return;
  }

  let precoServico;

  if (servicoSelecionado.value === "banho") {
    precoServico = 50;
  } else if (servicoSelecionado.value === "tosa") {
    precoServico = 60;
  } else {
    resumoPreco.textContent = "Selecione um serviço válido.";
    return;
  }

  let adicionalTransporte = 0;

  if (atendimentoSelecionado.value === "tele-busca") {
    adicionalTransporte = 20;
  }

  const total = precoServico + adicionalTransporte;

  resumoPreco.textContent =
    `Serviço: ${moeda.format(precoServico)} | ` +
    `Tele-busca: ${moeda.format(adicionalTransporte)} | ` +
    `Total demonstrativo: ${moeda.format(total)}`;
}

// Atualiza o preço quando uma das opções muda.
const opcoes = formulario.querySelectorAll(
  'input[name="servico"], input[name="forma_atendimento"]',
);

for (const opcao of opcoes) {
  opcao.addEventListener("change", atualizarPreco);
}

// Considera também opções que o navegador possa ter restaurado.
atualizarPreco();

// Localiza os campos e a mensagem de validação.
const campoData = document.getElementById("data-agendamento");
const campoHora = document.getElementById("hora-agendamento");
const erroAgendamento = document.getElementById("erro-agendamento");

// Formata a data local como AAAA-MM-DD.
function obterDataLocal(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

// Confere a data e o horário e mantém o erro visível.
function validarDataHorario() {
  const agora = new Date();
  const hoje = obterDataLocal(agora);

  campoData.min = hoje;

  // Remove os erros anteriores antes de verificar novamente.
  campoData.setCustomValidity("");
  campoHora.setCustomValidity("");
  erroAgendamento.textContent = "";

  if (!campoData.value) {
    return false;
  }

  if (campoData.value < hoje) {
    const mensagem = "A data não pode estar no passado.";

    campoData.setCustomValidity(mensagem);
    erroAgendamento.textContent = mensagem;
    return false;
  }

  if (!campoHora.value) {
    return false;
  }

  const agendamento = new Date(`${campoData.value}T${campoHora.value}`);

  if (Number.isNaN(agendamento.getTime())) {
    const mensagem = "Informe uma data e um horário válidos.";

    campoHora.setCustomValidity(mensagem);
    erroAgendamento.textContent = mensagem;
    return false;
  }

  if (agendamento <= agora) {
    const mensagem = "Esse horário já passou. Escolha um horário futuro.";

    campoHora.setCustomValidity(mensagem);
    erroAgendamento.textContent = mensagem;
    return false;
  }

  return true;
}

// Verifica enquanto o usuário edita e ao concluir a alteração.
campoData.addEventListener("input", validarDataHorario);
campoData.addEventListener("change", validarDataHorario);

campoHora.addEventListener("input", validarDataHorario);
campoHora.addEventListener("change", validarDataHorario);

// Revalida ao entrar nos campos.
campoData.addEventListener("focus", validarDataHorario);
campoHora.addEventListener("focus", validarDataHorario);

// Confere também valores restaurados pelo navegador.
validarDataHorario();

// Localiza o botão, a mensagem e a seção de resumo.
const botaoConfirmar = formulario.querySelector('button[type="submit"]');
const resultadoAgendamento = document.getElementById("resultado-agendamento");
const resumoAgendamento = document.getElementById("resumo-agendamento");

// Preenche o resumo com os dados já validados.
function mostrarResumoAgendamento() {
  const servico = formulario.querySelector('input[name="servico"]:checked');

  const atendimento = formulario.querySelector(
    'input[name="forma_atendimento"]:checked',
  );

  const nomePet = document.getElementById("nome-pet").value.trim();

  const nomeServico = servico.value === "banho" ? "Banho" : "Tosa";
  const comTeleBusca = atendimento.value === "tele-busca";

  // Aproveita o total já calculado e exibido por atualizarPreco().
  // O resumo completo dos valores fica disponível no mesmo texto.
  document.getElementById("resumo-total").textContent = resumoPreco.textContent;

  document.getElementById("resumo-pet").textContent = nomePet;

  document.getElementById("resumo-servico").textContent = nomeServico;

  document.getElementById("resumo-atendimento").textContent = comTeleBusca
    ? "Tele-busca no endereço informado, com ida e volta."
    : "O responsável levará e buscará o pet no local.";

  // O input fornece AAAA-MM-DD; exibimos DD/MM/AAAA.
  const [ano, mes, dia] = campoData.value.split("-");

  document.getElementById("resumo-data").textContent = `${dia}/${mes}/${ano}`;

  document.getElementById("resumo-horario").textContent = campoHora.value;

  // Torna a seção visível.
  resumoAgendamento.hidden = false;
}

// Retira a confirmação anterior quando o formulário muda.
function limparResumoAgendamento() {
  resultadoAgendamento.textContent = "";
  resumoAgendamento.hidden = true;
}

// Confere os dados antes de apresentar o resumo.
formulario.addEventListener("submit", function (evento) {
  // Mantém a demonstração na página, sem enviar os dados.
  evento.preventDefault();

  limparResumoAgendamento();

  // Atualiza a conferência usando o momento da confirmação.
  const dataHorarioValidos = validarDataHorario();

  if (!formulario.reportValidity() || !dataHorarioValidos) {
    return;
  }

  atualizarPreco();
  mostrarResumoAgendamento();

  resultadoAgendamento.textContent =
    "Solicitação demonstrativa validada. Confira o resumo abaixo.";
});

// Evita manter um resumo que não corresponde mais aos campos.
formulario.addEventListener("input", limparResumoAgendamento);
formulario.addEventListener("change", limparResumoAgendamento);

// A validação é acionada pelo nosso código com reportValidity().
formulario.noValidate = true;

// Habilita o botão após preparar os eventos.
botaoConfirmar.disabled = false;

// Formata o CPF como 000.000.000-00.
function formatarCPF(valor) {
  return valor
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

// Formata o CEP como 00000-000.
function formatarCEP(valor) {
  return valor
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/^(\d{5})(\d)/, "$1-$2");
}

// Aceita telefone fixo com 10 números e celular com 11.
function formatarTelefone(valor) {
  const numeros = valor.replace(/\D/g, "").slice(0, 11);

  if (numeros.length === 0) {
    return "";
  }

  if (numeros.length <= 2) {
    return `(${numeros}`;
  }

  const ddd = numeros.slice(0, 2);
  const telefone = numeros.slice(2);

  // Celular tem cinco números antes do hífen; fixo tem quatro.
  const tamanhoPrefixo = telefone.length > 8 ? 5 : 4;
  const prefixo = telefone.slice(0, tamanhoPrefixo);
  const final = telefone.slice(tamanhoPrefixo);

  return `(${ddd}) ${prefixo}${final ? "-" + final : ""}`;
}

// Aplica a máscara preservando a posição de edição pelos números.
function aplicarMascara(campo, formatar) {
  const posicao = campo.selectionStart ?? campo.value.length;
  const numerosAntes = campo.value.slice(0, posicao).replace(/\D/g, "").length;

  const valorFormatado = formatar(campo.value);

  if (campo.value === valorFormatado) {
    return;
  }

  campo.value = valorFormatado;

  if (document.activeElement !== campo) {
    return;
  }

  let novaPosicao = 0;
  let quantidade = 0;

  while (novaPosicao < valorFormatado.length && quantidade < numerosAntes) {
    if (/[0-9]/.test(valorFormatado[novaPosicao])) {
      quantidade++;
    }

    novaPosicao++;
  }

  campo.setSelectionRange(novaPosicao, novaPosicao);
}

// Relaciona cada campo à sua função de formatação.
const camposComMascara = [
  { campo: document.getElementById("cpf"), formatar: formatarCPF },
  { campo: document.getElementById("telefone"), formatar: formatarTelefone },
  { campo: document.getElementById("cep"), formatar: formatarCEP },
];

for (const { campo, formatar } of camposComMascara) {
  campo.addEventListener("input", function () {
    aplicarMascara(campo, formatar);
  });

  campo.addEventListener("change", function () {
    aplicarMascara(campo, formatar);
  });

  // Formata também valores que já estavam preenchidos.
  aplicarMascara(campo, formatar);
}
