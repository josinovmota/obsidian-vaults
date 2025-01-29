28-01-2025 23:22

Tags:[[Lógica de programação e Algorítmos]], [[Uninter]]

# Slicing

Tópico super importante pois será usado mais pra frente na manipulação de **DataFrames**, **Series** e afins. Slicing nada mais é do que **Fatiar** uma string ou, como vai haver mais pra frente, **Fatiar** tabelas. Ela é caracterizada pelos caracteres **:** e aqui está um exemplo do funcionamento dela:

![[Pasted image 20250128232436.png]]

É importante notar que números negativos também funcionam, então caso queiramos pegar os 2 últimos caracteres de uma string, por exemplo, podemos usar:

![[Pasted image 20250129005737.png]]

Como podemos ver, nós escrevemos entre os **:** as posições que queremos dentro de uma string(usarei string como exemplo, mas se aplica a **DataFrames**). Uma string começa no índice 0, isso é super recorrente no mundo da programação, então aqui cito alguns exemplos de **Slicing**:

Aqui temos um exemplo de **Slicing** aonde escrevemos apenas o **fim**:

![[Pasted image 20250128232946.png]]

Aqui temos um exemplo de **Slicing** aonde escrevemos apenas o **início**:

![[Pasted image 20250128233027.png]]

Aqui temos um exemplo muito interessante que é o de inverter uma string. Na etapa salto escrevemos -1, ou seja, ele vai saltar de trás pra frente e de um e um índice:

![[Pasted image 20250128233052.png]]
