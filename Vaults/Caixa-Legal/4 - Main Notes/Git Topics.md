18-07-2025 17:18

Tags:[[Treinamento Tiberius]]

# Git Topics

# Configuration

Configurar o git em um novo workspace é algo muito importante. Para configurar a ssh key é possível utilizar [[SSH Key Setup]]

# Staging

Staging ou Index nada mais é do que uma área aonde estão todos os **diretórios** ou **arquivos** adicionados pelo `git add <nome-do-file>`. Podemos ver os **arquivos** que estão em staging por meio do comando `git status`

# Commiting

O commit é uma maneira de **versionar os arquivos**. Ele pega tudo que está em `Staging` e salva **localmente**. Commitar constantemente é muito importante pois é uma maneira rápida e fácil de voltar a sua pasta a um estado anterior (muitas das vezes, um estado em que um problema que foi criado posteriormente não existe). Sempre que o commit é feito, temos um registro com **data/hora** de quando foi feito, também podemos dar um **nome** ao commit, assim ficando fácil de localizar quais mudanças foram feitas em cada commit

# Repositories: Remote vs Local

É importante notar que nem tudo no sistema git que está de forma `remota` tem que estar de forma `local`. Para levar aquilo que está no local (na nossa máquina) para o remoto precisamos dar um `git push`. Isso é importante pois nem sempre queremos que aquilo que está em nossa máquina/branches esteja aparecendo no github.

# Stashing

Digamos que estamos trabalhando em uma `branch` e temos que mudar para outra, mas queremos manter salvo tudo aquilo que estamos fazendo anteriormente. É aí que entra o comando `git stash`. Ele deixa "Stashado" tudo aquilo que estávamos fazendo para podermos continuar depois

# Branching

Uma branch nada mais é do que uma versão daquele ambiente em que você está trabalhando. Nela é possível alterar coisas, fazer testes, sem ter que se preocupar em estar mexendo na raíz do nosso projeto `main`

# Rebasing

O `git rebase` é um jeito de deixar a árvore de commits mais organizada. Por exemplo:

Digamos que a gente tinha esses 2 commits na main
```
main:           A---B
```

E aí resolvemos criar uma `branch` feature aonde criamos lá 2 commit
```
feature:           C---D
```

Mas aí, nesse meio tempo, a nossa `main` avançou 2 commits
```
main:           A---B---C---D
                    \
feature:             C---D
```

Afim de deixar a árvore de commits mais bonita, utilizamos um `git rebase` que a deixa assim:
```
main:           A---B---C---D
                             \
feature:                      C'---D'
```

# Merging

Um `merge` é quando pegamos o conteúdo de uma branch e tentamos misturar com outra branch

Temos 2 commits na main, A e B
```
main:           A---B
```

Aí criamos um branch, e nela, 2 commits C e D
```
feature:        C---D
```

Ao dar um `merge` nossa árvore de commits ficaria:
```
main:           A---B-------E
                     \     /
feature:              C---D
```
Aonde foi criado um commit `E` para significar a união da branch `main` com a branch `feature` 

# Rebase vs Merge

O `merge` por si só é bem diferente do `rebase`. Enquanto o merge une os commits de 2 branches em um só, mas preserva o histórico, o rebase deixa a árvore de commits mais linear, mas some com a ideia de histórico, já que leva os commits anteriores para a head.

# .gitignore

O arquivo .gitignore comporta todos aqueles arquivos que você não quer que apareçam no github após dar um `git push`. Ele é importante pois certas coisas você não quer que apareçam lá, como senhas, conexões pra bancos de dado, etc
