07-07-2026 10:11

Tags: [[Python]]

# Max Value Python

Um big problema que eu sempre tive é o de encontrar o maior ou menor valor em uma lista/dict. Ter um algorítmo já pronto pra isso me ajudaria muito e é aí aqui surge o `max()`. Nele podemos passar o argumento `key` e descobrir o maior. Segue o exemplo:

```python
dicionario = {'maçã' : 1, 'mamão': 5}

print(max(dicionario, key=dicionario.get))

>> mamão
```

Ou seja, o `max()` itera as chaves do dicionario mas toma como valor o `dicionario.get` que é justamente os valores de cada chave