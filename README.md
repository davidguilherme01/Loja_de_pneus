⚙️ PNEUS_ONLINE_MANAGER.md
Sistema Web de Gestão e Vendas de Pneus -- Documentação Oficial do Projeto
Este documento define a estrutura, objetivos, requisitos e metodologia do Sistema Web de Gestão e Vendas de Pneus, desenvolvido para modernizar o atendimento e a gestão de lojas do setor.

1. Visão Geral
Atualmente, muitas lojas de pneus enfrentam dificuldades na gestão de estoque, controle de vendas e atendimento ao cliente. Processos manuais ou sistemas desatualizados geram erros em cadastros, atrasos em pedidos e falhas na comunicação. Além disso, os clientes têm dificuldade em encontrar produtos compatíveis com seus veículos, comparar preços ou agendar serviços de forma online.



2. Objetivo do Sistema
O objetivo geral do projeto é desenvolver um sistema web para gestão e vendas de pneus, permitindo o controle de estoque, cadastro de clientes, registro de vendas e agendamento de serviços. O foco principal é a praticidade e a modernização do atendimento.

3. Princípios do Sistema

Praticidade e Modernização: Foco na modernização do atendimento de negócios tradicionais.



Interface Intuitiva: Criação de uma interface simplificada para o cadastro e busca de pneus.


Segurança e Simplicidade: Permitir cadastro de clientes e agendamento de serviços de forma simples e segura.


Automação de Estoque: Implementar alertas automáticos para reposição.



Responsividade: Interface acessível em dispositivos móveis e desktops.

4. Arquitetura da Aplicação
Foi desenvolvido um sistema web de gestão com painel administrativo e área do cliente.

Tecnologias Utilizadas:


Linguagens: HTML, CSS, JAVASCRIPT, JAVA.


Frameworks: Laravel (backend), Bootstrap (frontend).


Ferramentas/Plataformas: Github, Visual Studio Code, XAMPP.

Estrutura Sugerida:

    src/
      ├─ components/
      ├─ controllers/ (Laravel)
      ├─ views/ (Blade/Frontend)
      ├─ public/ (Assets)
      └─ database/
5. Requisitos Funcionais
O sistema é dividido em painel administrativo e área do cliente  e permite:

Cadastro e Gestão
Cadastro e controle de produtos (pneus, marcas, modelos e tamanhos).

Criar uma interface intuitiva para a busca de pneus por modelo, aro e marca.

Implementar um módulo de controle de estoque com alertas automáticos de reposição.


Vendas e Serviços
Desenvolver uma área para vendas e geração de relatórios financeiros.


Permitir agendamento de serviços (troca, alinhamento, balanceamento).

Permitir cadastro de clientes.

6. Regras de Negócio
O sistema deve operar com a gestão de estoque automatizada.

Deve haver alertas automáticos de reposição de estoque para notificar baixa quantidade.

A busca deve ser precisa, permitindo a filtragem de pneus por modelo, aro e marca.

O agendamento de serviços deve ser simples e seguro.

7. Backlog por Fases (Metodologia Scrum )

O desenvolvimento foi dividido em etapas iterativas, seguindo a metodologia Scrum.

FASE 1 --- Planejamento e MVP (Mínimo Produto Viável)

Análise de Requisitos: Levantamento das necessidades da loja e dos usuários.


Planejamento do Sistema: Definição das funcionalidades e arquitetura.


Desenvolvimento Base: Implementação do backend (estrutura principal) e banco de dados.


MVP: Lançamento das funcionalidades básicas de cadastro de produtos e registro de vendas.

FASE 2 --- Implementação e Testes

Desenvolvimento Frontend: Implementação da interface responsiva do cliente e painel administrativo.



Módulos Chave: Implementação completa da Gestão de Estoque automatizada e do Módulo de Agendamentos.


Testes e Validação: Verificação de usabilidade, performance e correção de erros.

FASE 3 --- Expansão e Feedback

Implantação: Disponibilização do sistema para uso.



Relatórios Avançados: Finalização da área para geração de relatórios financeiros.


Feedback: Coleta de sugestões com proprietários de lojas de pneus locais e usuários.


8. Diretrizes de UX

Interface Intuitiva: Facilidade de uso para todas as funcionalidades, desde a busca de pneus até o cadastro.


Responsividade: O layout deve ser fluido e acessível em dispositivos móveis e desktops.


Layout Limpo: Priorizar a praticidade e clareza das informações.

9. Entrega
Repositório completo no GitHub.

README detalhado com instruções de instalação e uso.