function validateForm() {
    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se os campos obrigatórios estão preenchidos
    if (nome === '' || email === '' || telefone === '') {
        alert('Por favor, preencha o Nome, E-mail e Telefone para solicitar um orçamento.');
        return false;
    }

    // Verifica um formato básico de e-mail (regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Se a validação passar, simula o envio e prepara o objeto para o Backend
    
    // Objeto de dados (Payload)
    const formData = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    // ----------------------------------------------------
    // MVP: Simulação de envio e feedback para o usuário
    // ----------------------------------------------------
    
    console.log("Dados prontos para envio (simulado):", formData);
    alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');

    // Limpa o formulário após a simulação de envio
    document.getElementById('quoteForm').reset();
    
    // No próximo passo, esta função fará uma chamada real ao Backend (API Java)
    // sendDataToJavaBackend(formData); 
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth' // Esta é a chave para o scroll suave
        });
    }
}