03-07-2025 07:56

Tags:[[Git]]

# Git Como desfazer mudanças de um arquivo na Staging Area

Digamos que você está lá no seu trabalho e teve que mudar um arquivo de **Português** para **Inglês**. Você fez todas as mudanças e deu um `git add` para as mudanças irem para **Staging** e estava há ponto de dar um `git push`. Mas acontece que no meio do percurso, seu chefe chegou e falou "Deixa do jeito que estava anteriormente mesmo". Agora temos que retornoar o arquivo que já está em **Staging** para a versão da **HEAD** da sua **Branch** atual. Para isso, utilizamos o:

```shell
git restore --staged main.py
```

Assim, o arquivo já dentro do **Staging** muda para a versão da **HEAD** da sua branch atual