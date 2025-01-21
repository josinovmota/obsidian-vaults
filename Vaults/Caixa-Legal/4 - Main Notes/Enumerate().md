2024-10-04 08:59

Tags:[[Python]], [[Programming]]

# Enumerate()

Enumerate é uma função que facilita quando buscamos o **índice** e o **valor** de um array em python

# Example

Sem a enumerate():
```python
index = 0

for value in collections:
	index +=1
```

Com a enumerate():
```python
for index, value in enumerate(collections):
	# Agora você tem tanto o índice como o valor
```

# Meaning

Eu estou precisando criar um dicionário que contenha tanto a posição do índice como o índice para concluir um projeto. Para cada valor em uma lista ordenada, seu índice é a sua posição na lista, ou seja: [0,1,2,3,4,5,6]
mas essa lista contém apenas os valores dos índices. Para criar esse dicionário, decidi usar a enumerate() na lista, pois ela vai fornecer o índice e o valor do índice
# References

Python for data analysis