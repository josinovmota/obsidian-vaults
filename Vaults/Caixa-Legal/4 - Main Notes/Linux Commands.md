29-05-2024 10:11

Tags:[[3 - Tags/Linux|Linux]], [[Linux All-In-One For Dummies]]

# Linux Bash Commands

# uname -srv
+ Esse comando serve para vermos a versão do *Kernel* que está sendo utilizada na nossa máquina.

| Flag | Descrição                        |
| ---- | -------------------------------- |
| -s   | Printar o nome do Kernel         |
| -r   | Printar a release date do Kernel |
| -v   | Printar a versão do Kernel       |

# ps -ax
+ Esse comando mostra os serviços que estão ativos no nosso computador.

| Flag | Descrição                                               |
| ---- | ------------------------------------------------------- |
| -a   | Printar os processos ativos                             |
| -x   | Printar os processos que não são associados ao terminal |

# ls -al

+ Comando que possibilita vermos os diretórios e arquivos presentes no diretório em que estamos

| Flag | Descrição                                       |
| ---- | ----------------------------------------------- |
| -a   | Printa também os *hiden files*                  |
| -l   | Printa mais informações do que somente os nomes |
+ Exemplos de ls -al: 
```bash
drwxr-xr-x 2 user group 4096 May 29 12:34 directory
-rw-r--r-- 1 user group 1024 May 29 12:34 file.txt
```

| Exemplo      | Significado                                         |
| ------------ | --------------------------------------------------- |
| d            | Tipo de arquivo(File Type)                          |
| rwxr-xr-x    | Settings de permissão do *directory*                |
| 4096         | Tamanho em *Bytes* do *directory*                   |
| May 29 12:34 | Última vez em que o *directory* foi modificado      |
| directory    | A *pasta* ou *arquivo* encontrada nesse *diretório* |
+ Exemplos da triplas de permissões no ls -l :

| Permissão | Descrição |
| --------- | --------- |
| R         | Read      |
| W         | Write     |
| X         | Execute   |


![[Pasted image 20240530092123.png]]

# cat
+ O comando *cat* serve para ver o conteúdo de um arquivo de texto, por exemplo:
```bash
cat init.txt
```

# grep
+ Comando que serve para procurar um texto em um arquivo de texto, por exemplo:
```bash
grep "Hello World" /home/workspace/main.py
```
# References

Linux All-In-One For Dummies