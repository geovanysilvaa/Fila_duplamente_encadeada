# 📌 Lista Duplamente Encadeada em TypeScript
## 👥 Integrantes

- Geovany de Oliveira Silva Batista
- Afonso Vanderlei da Silva

---

### 📖 Descrição

- Este projeto implementa o Tipo de Dado Abstrato (TDA) Lista Duplamente Encadeada utilizando TypeScript, sem o uso de estruturas prontas como Array ou bibliotecas externas.

- A lista é composta por nós (classe Fila), onde cada nó possui:

- um valor (elemento)

- uma referência para o próximo nó

- uma referência para o nó anterior

- Isso permite percorrer a lista do início para o fim e do fim para o início.

---

### 🧠 Estrutura do Projeto

- Fila.ts → representa o nó da lista

- Lista.ts → implementação da lista duplamente encadeada

- teste.ts (ou similar) → exemplos de uso e testes

---

### ⚙️ Funcionalidades Implementadas

- Adicionar elemento no início da lista

- Adicionar elemento no final da lista

- Adicionar elemento em uma posição específica

- Remover e retornar o primeiro elemento

- Remover e retornar o último elemento

- Remover e retornar um elemento por posição

- Buscar um valor na lista

- Verificar se a lista está vazia

- Retornar a quantidade de elementos

- Exibir os elementos do início para o fim

- Exibir os elementos do fim para o início

---

### ▶️ Como Executar

- Clone o repositório:

- git clone https://github.com/geovanysilvaa/Fila_duplamente_encadeada.git

---

### Acesse a pasta do projeto:

- cd nome-do-repositorio


### Compile o TypeScript:

- tsc


### Execute o arquivo de testes:

- node dist/teste.js


- (ou diretamente com ts-node, se estiver usando)

---

### 🧪 Exemplo de Uso
- const lista = new Lista();

- lista.adicionarInicio(10);
- lista.adicionarfinal(20);
- lista.adicionarP(15, 1);

- lista.imprimirinicio(); 
- // 10 15 20

- lista.imprimirfinal(); 
- // 20 15 10

- console.log(lista.buscar(15)); // true
- console.log(lista.removerP(1)); // 15
- console.log(lista.elementos()); // 2

---

### 📌 Observações

- Não foram utilizadas estruturas prontas como Array

- Implementação feita apenas com classes e ponteiros

- Projeto desenvolvido para fins acadêmicos (Estrutura de Dados)