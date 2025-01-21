2024-10-04 09:01

Tags:[[Python]], [[Programming]]

# Zip()

A função zip serve quando queremos fazer pares entre dois **arrays**. Ou seja, o índice 0 com o índice 0, o índice 1 com o índice 1 e assim sucessivamente

# Example

Um uso da função zip():

```python
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]

dictionary = {}

for key, value in zip(lista1, lista2):
	dictionary[key] = value
```


# References

Python for data analysis