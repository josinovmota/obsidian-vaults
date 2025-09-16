Bem-vindo aluno, você está prestes a começar um BIG treinamento de git e python que te fará passar pelas fases iniciais de um ambiente versionado no Github

## Primeira fase

1. Crie um Repositório no [github](https://github.com/) com o nome `0-git-python`. Lembre-se de, na hora de criar, aceitar a opção "Adicionar README".
2. Clone o repositório para a sua máquina. Opcional: Clone usando um SSH Protocol

## Segunda fase

1. Crie duas pastas no seu repositório, já clonado. Uma com o nome `git` e a outra com o nome `python`
2. Edite a `README.md` Explicando aos leitores o que será feito nesse repositório. Opcional: Coloque alguma imagem, isso enriquece ainda mais o repositório

## Terceira fase - python

1. Dentro da pasta `python` crie um arquivo chamado `exercise.py` e cole isso dentro dele:
```python
"""
Exercício:
Calcular o custo total de uma refeição com gorjeta e imposto.

Você receberá:
1) O preço base da refeição (meal_cost) — antes de gorjeta e impostos.
2) A porcentagem da gorjeta (tip_percent).
3) A porcentagem do imposto (tax_percent).

Tarefas:
- Calcular o valor da gorjeta a partir do preço base.
- Calcular o valor do imposto a partir do preço base.
- Somar todos os valores para obter o custo total.
- Arredondar o valor final para o inteiro mais próximo.
- Mostrar o valor final.

Crie suas respostas abaixo de cada TODO
"""

# Entrada de dados
meal_cost = 12.00   # preço base da refeição
tip_percent = 20   # porcentagem da gorjeta
tax_percent = 8   # porcentagem do imposto

# TODO: Calcular gorjeta

# TODO: Calcular imposto

# TODO: Calcular total

# TODO: Arredondar e exibir resultado

```
2. Após concluir o exercício, parta para a quarta fase

## Quarta fase - Git

1. Dentro da pasta `git` crie um arquivo chamado `exercise.md` e nele responda as seguintes questões:

 - O que é o Git e para que ele serve?
    
- Qual a diferença entre `git init` e `git clone`?
    
- Como você verifica o estado atual do repositório?
    
- Como adicionar um arquivo específico ao _stage_?
    
- Como adicionar todos os arquivos modificados ao _stage_?
    
- Como confirmar (salvar) mudanças no repositório?
    
- Como visualizar o histórico de commits?
    
- Como criar um novo branch?

Note que o arquivo é um `.md`, ou seja, ele é um arquivo em **Markdown**. Utilize os aspectos do Markdown afim de tornar as respostas melhores de serem lidas

## Quinta fase

1. Agora que você fez os dois exercícios, está na hora de subir aquilo que está na sua máquina para o repositório remoto. Faça isso utilizando os comandos

- git add
- git commit
- git push

Após isso, me sinalize para que eu faça a review
