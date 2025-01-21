2024-10-06 07:02

Tags:[[Pandas]]

# Apply()

A função **apply()** da lib pandas serve para aplicar uma função em todos os valores do nosso **DataFrame**

# Example

Exemplo da função apply()
 ```python
df = pd.DataFrame({A: [1, 2, 3], B: [4, 5, 6]})

df.apply(lambda x: x*2)

A   2 4 6
B   8 10 12
```

# Meaning

Ocorreu um problema, na hora de criar o DataFrame foi inserido uma unidade de valor à mais aos índices e é preciso remover essa unidade. Afim de consertar isso, podemos utilizar a função apply() para remover uma unidade de cada índice

# References

Just searching in youtube :P