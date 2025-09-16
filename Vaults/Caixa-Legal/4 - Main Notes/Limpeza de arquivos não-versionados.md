03-07-2025 06:10

Tags:[[Git]]

# Limpeza de arquivos não-versionados

Ao utilizar o comando `git status` temos uma ideia de como está a nossa **Tree** do git. Nesse comando temos uma ideia dos arquivos que estão visíveis na nossa **Máquina** e o que já está ou não dentro do **Staging**. Manter um **Workspace Clean** de **Arquivos Não-versionados** nada mais é do que:

- Não ter arquivos **untracked**

# Git Como limpar o workspace

Para fazer a limpeza de arquivos que estão **Untracked** utilizamos o comando:

```shell
git clean
```

Esse comando tem duas flags, sendo elas o `-f`, `-d`, `-x` e `-n`, sendo o `-f` utilizado para apagar, de fato, o `-d` para apagar diretórios também e o `-x` para apagar os arquivos que estão incluídos da `.ignore` e, por último, o `-n` que simula o que será apagado caso o `git clean` seja utilizado

## ⚠️ Importante Notar ⚠️

Apagar arquivos pode acabar fazendo você perder **Horas de Trabalho**, então é importante que você tenha absoluta certeza de que vai utilizar esse comando da maneira correta