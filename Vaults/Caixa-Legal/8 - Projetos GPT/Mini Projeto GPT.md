# Projeto 1 — Mini-Analisador de Texto (com **uv**)

📌 **Objetivo**  
Criar um programa em Python que leia um arquivo `.txt` e gere estatísticas sobre o conteúdo:
- Número total de palavras, frases e parágrafos.
- Lista das palavras mais frequentes (ignorando artigos e preposições).
- Possibilidade de o usuário indicar o nome do arquivo de texto.

---

## 📂 Estrutura do Projeto

```
mini_analisador_texto/
│
├── data/
│   └── exemplo.txt           # Arquivo(s) de texto para teste
│
├── src/
│   └── analisador.py         # Código principal
│
├── README.md                 # Documentação do projeto
├── pyproject.toml            # Criado pelo uv
└── uv.lock                   # Criado pelo uv
```

---

## ✅ Checklist do Desenvolvimento

### 1. Preparação do ambiente
- [x] Criar pasta do projeto `mini_analisador_texto`.
- [x] Criar subpastas `data/` (para arquivos `.txt`) e `src/` (para código).
- [x] Abrir a pasta no VS Code ou IDE de preferência.
- [x] Instalar o **uv**:  
  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
- [x] Criar o arquivo `pyproject.toml` inicial com:
  ```bash
  uv init
  ```
- [x] Criar repositório no GitHub e fazer o primeiro commit com estrutura inicial.

### 2. Lógica inicial
- [x] Criar função para ler um arquivo `.txt` e retornar o conteúdo como string.
- [ ] Criar função para contar palavras.
- [ ] Criar função para contar frases (baseado em `.`, `!`, `?`).
- [ ] Criar função para contar parágrafos (baseado em quebras de linha duplas).
- [ ] Criar função para encontrar as palavras mais frequentes (usando `collections.Counter`).
- [ ] Criar lista de palavras ignoradas (stopwords básicas em português).

### 3. Interface com o usuário
- [ ] Perguntar ao usuário o nome do arquivo (input ou argumento via `argparse`).
- [ ] Se o arquivo não existir, exibir mensagem de erro amigável.
- [ ] Exibir resultados de forma clara no terminal.

### 4. Testes e validação
- [ ] Criar ao menos 2 arquivos `.txt` com conteúdos diferentes para testar.
- [ ] Verificar se a contagem de palavras e frases está correta.
- [ ] Testar com textos pequenos e grandes.
- [ ] Tratar erros de codificação (UTF-8).

### 5. Documentação
- [ ] Preencher `README.md` com:
  - Objetivo do projeto.
  - Como executar usando `uv run`.
  - Exemplos de uso.
- [ ] Adicionar exemplos de saída no README.
- [ ] Fazer commit final com código e documentação.

---

## 📚 Conceitos aprendidos neste projeto
- Estruturação de pastas de projeto.
- Leitura de arquivos em Python.
- Manipulação de strings.
- Uso de funções e bibliotecas padrão (`collections`).
- Boas práticas de versionamento com Git.
- Criação de documentação mínima (`README.md`).
- Uso do **uv** para gerenciamento de projeto.

---

## 🚀 Desafios extras (opcional)
- Implementar opção para analisar textos em inglês.
- Criar exportação do resultado para um arquivo `.csv`.
- Adicionar interface gráfica simples com `tkinter`.
