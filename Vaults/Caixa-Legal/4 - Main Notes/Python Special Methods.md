18-11-2026 15:57

Tags: [[Programming]]

# Python Special Methods

Entender que é o `interpretador do python` que chama esses métodos especiais e não você. Ou seja, se você adicionar um `__len__` à sua classe, não vai precisar escrever `__len__(object)`. Como ele já está adicionado à classe, basta usar `len(object)`

# "\_\_repr\_\_" e "\_\_str\_\_"

Esses são dois `special methods` que modificam o output da chamada de um objeto, seja apenas pela nome, seja printando o nome


```python
vec = Vector()

print(vec)
vec
```

Esses dois exemplos, sem ter os métodos especiais \_\_repr\_\_ e \_\_str\_\_ na classe Vector, entregarão um output como `<Vector object at 0x10e100070>` e não é exatamente isso que queremos, partindo da ideia de que terá um usuário usando a library. Aqui eu mostro o exemplo com esses métodos especiais

![[Pasted image 20261119142143.png]]

Ambos são diferentes, pois precisamos ter em mente que o `repr` é algo mais usado para debug e que deve seguir a seguinte ideia:

![[Pasted image 20261119142243.png]]

Já o `str` pode ser usado apenas como uma visualização simples do vetor, ou seja, não precisa ser o mais próximo possível de mostrar como deve ser recriado o objeto




