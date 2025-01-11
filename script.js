// script.js

function registrarDados() {
    // Obtendo os valores dos campos do formulário
    const motorista = document.getElementById('motorista').value;
    const placa = document.getElementById('placa').value;
    const dataEntrada = document.getElementById('dataEntrada').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const dataSaida = document.getElementById('dataSaida').value;
    const horaSaida = document.getElementById('horaSaida').value;
    const carga = document.getElementById('carga').value;
    const empresa = document.getElementById('empresa').value;

    // Validando se todos os campos foram preenchidos
    if (!motorista || !placa || !dataEntrada || !horaEntrada || !dataSaida || !horaSaida || !carga || !empresa) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibindo o botão para envio para WhatsApp
    document.getElementById('whatsappBtn').style.display = 'block';
    
    // Armazenando os dados para envio posterior
    window.dadosFormulario = {
        motorista,
        placa,
        dataEntrada,
        horaEntrada,
        dataSaida,
        horaSaida,
        carga,
        empresa
    };

    alert("Dados registrados com sucesso!");
}

function enviarWhatsApp() {
    const dados = window.dadosFormulario;
    
    // Criando a mensagem formatada para o WhatsApp
    const mensagem = `*Controle Diário de Entradas e Saídas - Fazenda São José*\n\n` +
                     `*Nome do Motorista:* ${dados.motorista}\n` +
                     `*Placa do Caminhão:* ${dados.placa}\n` +
                     `*Data e Hora de Entrada:* ${dados.dataEntrada} ${dados.horaEntrada}\n` +
                     `*Data e Hora de Saída:* ${dados.dataSaida} ${dados.horaSaida}\n` +
                     `*Carga:* ${dados.carga}\n` +
                     `*Empresa:* ${dados.empresa}`;
    
    // Codificando a mensagem para URL
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    
    // Redirecionando para o WhatsApp
    window.open(url, '_blank');
}
