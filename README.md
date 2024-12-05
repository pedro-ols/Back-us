# Projeto de Gamificação - Back-end 🎉

Este projeto é baseado na proposta de "gamificação" do conteúdo da matéria de Back-end. Ele será desenvolvido em **4 etapas**, conforme detalhado abaixo.

---

## Entregas do Projeto

### Etapas:

1. **Primeira Etapa:**
   - Criar um **Diagrama de Classes (UML)** com todas as classes necessárias para o game.  
   - O diagrama deve conter:
     - Classes, atributos e métodos seguindo as regras do UML.
   - **Dica:** Use ferramentas como [Miro](https://miro.com/) para desenhar o diagrama.

2. **Segunda Etapa:**
   - Criar o **código das classes, servidor e rotas**, de acordo com o diagrama desenvolvido.
   - Seguir o documento fornecido no anexo com as instruções específicas do grupo.

3. **Terceira Etapa:**
   - **Copiar os arquivos** do repositório do professor para o repositório do grupo.
   - Criar a pasta `terceiraEtapa`:
     - **Comentar as linhas** que você não compreende no código.
     - Refazer o **Diagrama de Classe (UML)** com base no código fornecido pelo professor.
     - Implementar as 4 rotas existentes (CRUD) relacionadas aos cadastros.

4. **Quarta Etapa:**
   - Configurar o **Postman**:
     - Testar e validar as rotas de cadastro.
   - Última oportunidade para ajustar o Diagrama UML, Classes e Rotas conforme orientações do professor.
   - **Dica:** Documentar melhorias no `README.md` e na pasta `anexos`.

---

## Informações do Grupo

- **Número da Etapa:** Estamos na etapa 4  
- **Número do Grupo:** Somos os grupos 6
- **Arquivo Responsável:** **Classe Dev e Sabotador** (UML, validações e código)

### **Detalhes das Classes**

#### Classe **Dev**
- **Atributos**:
  - **grupo**: `Number` (herdado de `Aluno`)
  - **nome**: `String` (herdado de `Aluno`)
  - **apelido**: `String` (herdado de `Aluno`)
  - **senha**: `String` (herdado de `Aluno`)
  - **estaVivo**: `Boolean` (herdado de `Aluno`)
  - **localAtual**: `String` (Valor inicial: `"Recepção"`, sobrescrito na classe `Dev`)
- **Método**:
  - **mostrarPapel()**: Retorna uma string indicando que o jogador é um "Dev" com objetivo de resolver problemas backend no SENAI.

#### Classe **Sabotador**
- **Atributos**:
  - **grupo**: `Number` (herdado de `Aluno`)
  - **nome**: `String` (herdado de `Aluno`)
  - **apelido**: `String` (herdado de `Aluno`)
  - **senha**: `String` (herdado de `Aluno`)
  - **estaVivo**: `Boolean` (herdado de `Aluno`)
  - **localAtual**: `String` (Valor inicial: `"Recepção"`, sobrescrito na classe `Sabotador`)
- **Métodos**:
  - **mostrarPapel()**: Retorna uma string indicando que o jogador é um "Sabotador" com o objetivo de atrapalhar os "DEVs".
  - **eliminar(alvo)**: Recebe um objeto `alvo` (um outro jogador) e retorna uma string indicando que o jogador foi eliminado pelo sabotador.

---

### **Integrantes e Contribuições**

- **Integrante 1 (Giovanni):**  linkagem do cadastro routes com a index e criação e produçao do diagrama
- **Integrante 2 (Joao Gianoni):** Criação e produção do diagrama, e comentando os códigos.
- **Integrante 3 (Vitor):** linkagem do cadastro routes com a index, criação do CRUD
- **Integrante 4 (Pedro Oliveira):** Criação das classes de Dev e Sabotador, criação das rotas de buscar e adicionar   
- **Integrante 5 (Vinicius Valverde):** Criação de todas as rotas crud
- **Integrante 6 (Julia Martins):** Criação e produção do diagrama, e comentando os códigos.
- **Integrante 7 (Gabriela Fernanda):** Criação e produção do diagrama, e comentando os códigos.  

---

## Anexos e Evidências

- **Print do Diagrama UML:** (Imagem ou PDF anexado na pasta `anexos`)    
- **Repositório GitHub:** [Link para o repositório público]  

---

**Observação:** Mantenha o projeto organizado e atualizado para facilitar o acompanhamento dos professores e o entendimento de todos os integrantes do grupo.

