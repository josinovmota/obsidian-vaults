2024-10-12 15:14

Tags:[[Numpy]]

# Numpy Arrays Methods

Os arrays do numpy, ou DataFrames tem vários métodos, dentre esses métodos podemos listar os:

+ shape()
+ dtype()
+ zeros()
+ unique()

# Example

shape():

A função ou métodos shape retorna a quantidade de linhas e colunas do DataFrame:
```python
df = np.array([[1,2,3], [4,5,6]])

np.shape(df)

> (2, 3)

df.shape

> (2, 3)
```

dtype:

O método dtype retorna os tipos de dados usados no DataFrame:
```python
df = np.array([[1,2,3], [4,5,6]])

df.dtype

> dtype('int32')
```

zeros()

A função np.zeros() cria um DataFrame ou Series com valores 0. Como parâmetro é preciso passar o shape:

```python
df = np.zeros((2,2))

> array([[ 0.,  0.],
        [ 0.,  0.]])
```

unique()

A função unique() vai retornar apenas os valores que são únicos do DataFrame ou Series:
```python
df = np.array([[1,2,3], [4, 4, 6]])

np.unique(df)

> array([1,2,3,4,6])
```
# References

Just searching in youtube :P