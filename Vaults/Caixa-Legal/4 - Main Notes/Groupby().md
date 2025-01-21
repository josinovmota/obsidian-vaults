2024-10-06 07:09

Tags:[[Pandas]]

# Groupby()

A função groupby() da lib pandas serve para agrupar os valores e aplicar uma função sobre eles

# Example

Um exemplo de groupby:

```python
df = pd.DataFrame({'Status': ['Yes', 'Yes', 'No', 'Yes'], 'Id': [1, 2, 3, 4]})

df

> [Status, Id]
  [Yes, 1]
  [Yes, 2]
  [No, 3]
  [Yes, 4]

df.groupby('Status').count()
```

Esse é o retorno do groupby:

![[Pasted image 20241012153225.png]]

Ou seja, ele agrupou os No e Yes e contou quando haviam de cada

# Meaning

Eu recebi um dataframe com uma coluna chamada ['Status'], essa coluna tem apenas valores Sim e Não e eu preciso contar quantos Sim e Não existem nessa coluna inteira. O groupby é uma boa solução pois ele vai agrupar os valores dessa coluna e após isso posso usar uma função neles. Nesse caso foi usada a função count() que conta cada aparição de cada valor da coluna
# References 

Just searching in youtube :P