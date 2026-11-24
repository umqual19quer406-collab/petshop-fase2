# Petshop Meu Amigo Fiel

Projeto acadêmico desenvolvido por Demetrius Souza Telles para a
disciplina Fundamentos de Sistemas Web.

Esta versão corresponde à Fase 2 e dá continuidade às páginas HTML
criadas na Fase 1, acrescentando CSS, Bootstrap, JavaScript,
cadastro e agendamento demonstrativo.

## Links do projeto

- Site: https://umqual19quer406-collab.github.io/petshop-fase1/
- Repositório: https://github.com/umqual19quer406-collab/petshop-fase1

O nome do repositório foi mantido para preservar o endereço utilizado
na Fase 1. Seu conteúdo foi atualizado para a Fase 2.

## Objetivo

Apresentar os produtos e serviços de um petshop fictício, com navegação
entre páginas, catálogo ilustrado e formulário para simular uma
solicitação de atendimento.

Os produtos atendem cães e gatos. Os serviços de banho e tosa são
destinados a cães de pequeno porte.

## Tecnologias utilizadas

- HTML5 para a estrutura e o conteúdo.
- CSS3 para estilos, organização e adaptação a telas pequenas.
- Bootstrap 5.3.9 para o carrossel da página inicial.
- JavaScript para cálculo de preços, máscaras, validação e resumo.
- Git e GitHub para controle de versão e armazenamento do código.
- GitHub Pages para publicação do site.

## Funcionalidades

### Página inicial

- Apresentação do petshop.
- Carrossel com três destaques do catálogo.
- Botões para avançar e voltar entre os destaques.
- Links para produtos, serviços e agendamento.

### Produtos

Catálogo com seis produtos, organizados em três categorias:

- Acessórios.
- Rações não perecíveis.
- Higiene e limpeza.

Cada produto apresenta imagem, descrição e preço demonstrativo.

### Serviços

O site apresenta banho e tosa, com as seguintes opções:

| Serviço | Sem tele-busca | Com tele-busca |
| ------- | -------------- | -------------- |
| Banho   | R$ 50,00       | R$ 70,00       |
| Tosa    | R$ 60,00       | R$ 80,00       |

A tele-busca acrescenta R$ 20,00 e inclui ida e volta.
O serviço de tosa não inclui banho.

### Cadastro e agendamento demonstrativo

O formulário reúne:

- Dados do cliente: nome, CPF, sexo, telefone e e-mail.
- Endereço do cliente.
- Dados do pet: nome, espécie atendida, raça, idade e observações.
- Escolha entre banho e tosa.
- Escolha entre tele-busca e entrega e retirada pelo responsável.
- Seleção de data e horário.
- Confirmação de conferência dos dados.

O JavaScript oferece:

- Cálculo automático do serviço e do adicional de transporte.
- Formatação de valores em reais.
- Máscaras de CPF, telefone e CEP.
- Validação de data e horário para rejeitar momentos passados.
- Verificação dos campos obrigatórios e dos formatos definidos no HTML.
- Resumo da solicitação após a validação.
- Ocultação do resumo anterior quando os campos são alterados.

## Como utilizar

1. Acesse o site pelo link do GitHub Pages.
2. Utilize o menu para navegar entre as quatro páginas.
3. Consulte os produtos e os serviços.
4. Abra a página Agendamento.
5. Preencha o formulário com dados fictícios.
6. Escolha o serviço e a forma de atendimento.
7. Selecione uma data e um horário futuros.
8. Marque a confirmação de conferência dos dados.
9. Clique em Confirmar solicitação.
10. Confira o resumo demonstrativo exibido na página.

Se algum campo estiver inválido, corrija a informação indicada
e tente confirmar novamente.

## Acessibilidade

Foram incluídos os seguintes recursos:

- Idioma da página definido como português do Brasil.
- Texto alternativo nas imagens informativas.
- Títulos e elementos semânticos para organizar o conteúdo.
- Rótulos associados aos campos por meio de label, for e id.
- Agrupamento de campos com fieldset e legend.
- Identificação textual dos campos obrigatórios.
- Contorno de foco para navegação por teclado.
- Links e botões nativos do HTML.
- Identificação da página atual no menu com aria-current.
- Orientação do e-mail associada ao campo com aria-describedby.
- Mensagens dinâmicas com role="status" e role="alert".
- Mensagens de erro em texto, sem depender somente de cores.
- Carrossel com controles manuais, sem rotação automática.

Esses recursos contribuem para a acessibilidade, mas não representam
uma certificação de conformidade integral com as diretrizes WCAG.

## Ajustes realizados na Fase 2

- Criação de um arquivo CSS compartilhado entre as páginas.
- Padronização de cores, tipografia, menus, campos e botões.
- Organização de produtos e serviços em cartões.
- Adaptação das grades para uma coluna em telas pequenas.
- Inclusão do carrossel na página inicial.
- Criação da página de cadastro e agendamento.
- Implementação das funções em um arquivo JavaScript separado.
- Padronização dos links de agendamento nos menus e rodapés.
- Correção do nome do arquivo JavaScript para corresponder
  ao caminho indicado no HTML.
- Inclusão de mensagens para datas e horários inválidos.
- Inclusão de máscaras e regras de formato nos campos.
- Inclusão do cálculo e do resumo da solicitação.
- Atualização dos comentários e da documentação.

## Estrutura do projeto

- index.html: página inicial e carrossel.
- produtos.html: catálogo de produtos.
- servicos.html: descrição e preços dos serviços.
- agendamento.html: cadastro e solicitação demonstrativa.
- estilos.css: estilos compartilhados e regras responsivas.
- agendamento.js: cálculos, máscaras, validações e resumo.
- imagens/: arquivos de imagens do catálogo e do carrossel.
- README.md: documentação e instruções de uso.

## Como visualizar localmente

1. Baixe ou clone o repositório.
2. Se baixar um ZIP, extraia seu conteúdo.
3. Abra index.html em um navegador.
4. Utilize o menu para acessar as demais páginas.

Mantenha os arquivos e a pasta imagens na estrutura original.

É necessário acesso à internet para carregar os arquivos do Bootstrap,
utilizados pelo carrossel por meio de uma CDN.

O projeto não exige instalação de pacotes, banco de dados ou servidor
de aplicação para essa demonstração.

## Roteiro de verificação

- Navegar entre as quatro páginas pelos menus.
- Conferir o carregamento das imagens.
- Avançar e voltar no carrossel.
- Navegar com Tab e Shift + Tab, observando o foco.
- Conferir a apresentação em tela pequena.
- Testar as máscaras digitando e colando valores.
- Tentar confirmar com campos obrigatórios vazios.
- Tentar confirmar com data ou horário passado.
- Conferir os preços das quatro combinações de atendimento.
- Confirmar com dados válidos e conferir o resumo.
- Alterar um campo e verificar se o resumo anterior desaparece.

## Limitações e caráter demonstrativo

O projeto representa um petshop fictício, sem comercialização real.

O formulário não envia os dados a um servidor nem os grava
em banco de dados ou armazenamento local da aplicação.

A confirmação apenas valida os campos e apresenta um resumo.
Não há reserva real de horário, consulta de disponibilidade,
pagamento ou envio de e-mail.

As máscaras e os padrões de CPF, telefone e CEP verificam o formato.
Não verificam os dígitos verificadores do CPF nem a existência
do telefone ou do CEP.

A validação de e-mail verifica o formato aceito pelo navegador,
não a existência da caixa postal.

A conferência de data e horário utiliza o relógio local do dispositivo.

O navegador pode oferecer seu próprio recurso de salvar dados
para preenchimento automático, independentemente do site.

Utilize somente dados fictícios durante os testes.
