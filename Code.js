const SHEET = 'Form Responses 1';

function onOpen(e) {
    SpreadsheetApp.getUi()
        .createMenu('MA OE!')
        .addItem('Quem quer ingresso?', 'main')
        .addToUi();
}

function showResultsDialog(ganhadores) {
    var html = HtmlService.createTemplateFromFile('results_page');
    html.ganhadores = JSON.stringify(ganhadores);

    html = html.evaluate().setWidth(400).setHeight(600);
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Resultados do sorteio');
}

function main() {
    const ui = SpreadsheetApp.getUi();

    const resultado = ui.prompt(
        'Quem quer ingresso??',
        'Quantos ingressos serão sorteados?',
        ui.ButtonSet.OK_CANCEL
    );

    const botao = resultado.getSelectedButton();

    if (botao != ui.Button.OK) return;

    const ingressos = resultado.getResponseText();

    let participantes = getObjectsFromSheets(SHEET);

    let ganhadores = sorteio(participantes, ingressos);

    showResultsDialog(
        ganhadores.map((item) => {
            return {
                name: item['Nome'],
                user: item['@ no twitter'],
            };
        })
    );
}

function sorteio(array, quantidadeNumeros = 1) {
    let resultado = [];
    console.log('Iniciando sorteio');
    while (resultado.length != quantidadeNumeros) {
        console.log(`Fazendo o sorteio do ${resultado.length + 1} item`);
        array = shuffleArray(array);
        let sorteio = random(1, array.length - 1);
        resultado.push(array.splice(sorteio, 1)[0]);
    }
    return resultado;
}
