2024-10-10 17:31

Tags:[[SQL]]

# SELECT Statement

Quando vamos fazer uma **Query** na linguagem **SQL** precisamos selecionar a **Coluna**(Nossa Row dentro da Table) e é aí que o SELECT entra.

# Example

Nesse exemplo de query estamos invocando todas as **Rows** da table **STUDENTS** e nós teremos como retorno todo o DataFrame **STUDENTS**
```SQL
SELECT *
FROM STUDENTS
```

O SELECT statement pode dar tanto o nome da row como o símbolo * para representar todas as rows

Dentro do statement SELECT temos uma função chamada DISTINCT que serve para trazer apenas os valores distintos dessa row:

Nesse caso estamos invocando apenas os nomes distintos da Table STUDENTS
```SQL
SELECT DISTINCT first_name
FROM STUDENTS
```
# References

Just searching in youtube :P