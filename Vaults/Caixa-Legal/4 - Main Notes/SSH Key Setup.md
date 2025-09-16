2024-10-01 09:22

Tags:[[Linux]], [[Github]]

# SSH Key Setup

## Step 1 - Checar por chave SSH existente

Comando para checar se já existe uma ssh key registrada na máquina

```bash
ls -al ~/.ssh
```

## Step 2 - Gerar nova chave SSH

Comando para criar a chave ssh

```bash
ssh-keygen -t rsa -b 4096 -C "githubEmail@email.com"
```

Depois Clicar Enter para salvar na file location já escolhida
Depois selecionar uma Passphrase segura para a chave
## Step 3 - Adicionar a ssh key no github

Comando para copiar a SSH Key no Ctrl + C

Windows 11:
```shell
Get-Content ~/.ssh/id_rsa.pub | Set-Clipboard
```

Linux:

```shell
cat ~/.ssh/id_rsa.pub | xclip -sel copy
```


Após isso ir no Github > Settings > SSH and GPG Keys > New SSH Key
e terminar o processo

## Step 4 - Testar a conexão com o github

```bash
ssh -T git@github.com
```

Ta pronto o sorvetinho
# References

Big chat gpt <3