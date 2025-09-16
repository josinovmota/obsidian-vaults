03-07-2025 07:37

Tags:[[Git]]

# Git Como desfazer mudanças em um file

Digamos que você está lá no seu trabalho e teve que mudar um arquivo de **Português** para **Inglês**. No meio do percurso, seu chefe chegou e falou "Deixa do jeito que estava anteriormente mesmo". No lugar de apagar tudo e reescrever aquilo que estava escrito antes, podemos usar o `git restore`. Por exemplo

As alterações estavam no arquivo main.py e agora queremos voltá-lo ao que era antes. E por antes eu digo o que estava no último commit da minha **branch atual**, por exemplo:

```shell
git restore main.py
```

Caso eu queira especificar de qual **branch** eu quero voltar, devo utilizar o `--source=<branch>`.

```shell
git restore --source=feature/git main.py
```

Aqui estamos restaurando o arquivo ao estado dele no último commit(HEAD) da branch `feature/git`