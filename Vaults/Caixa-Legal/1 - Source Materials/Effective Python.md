23-06-2026 17:20

Tags: [[Python]]

# Effective Python

> In a file, functions and classes should be separated by two blank lines.

Sempre me foi uma dúvida e, mesmo lendo o pep8 vagamente não cheguei nessa parte. Big interessante de saber

> Even simple functions that seem to have obvious errors will not be reported as having problems before program execution | Python defers nearly all error checking until runtime, including detection of problems that seem like they should be obvious during program startup.

Achei legal saber isso pois os erros no python acabam sendo exclusivos do compilador estar na linha que eles existem. Pode não parecer um problema tãooo grande, mas pra mim, que várias vezes fez trabalhos em que você tinha inputs demorados de se escrever e sempre ter que reescrevê-los até chegar o erro era uma trabalheira.

> As soon as your expressions get complicated, it’s time to consider splitting them into smaller pieces — such as intermediate variables — and moving logic into helper functions

Ideia boa quando você está fazendo um super cálculo matemático, por exemplo. No lugar de comentar "Isso faz tal coisa", encapsular ele em uma função com um nome que descreve o que está sendo feito

> Image
![[Pasted image 20260624091927.png]]

Bem interessante essa ideia de unpacking de sets. Um `bubble sort` que deveria ter várias linhas fica muito mais imples dessa forma

> If I really need to achieve brevity and put this logic in a single expression, I can do that by moving it all into a helper function that I call inline

Mais uma vez a ideia de encapsular. Eis que te procurava em todos os cantos e tu estavas aqui comigo

> Image
![[Pasted image 20260708085125.png]]

Achei interessante essa ideia de unpack usando o `*`. O livro só fala que pode ser perigoso caso você esteja usando uma estrutura muito grande, já que ele aloca memória e pode acabar consumindo a memória toda da máquina. Mas, com certeza, em estruturas pequenas para exercícios simples ou até mesmo o dia-a-dia, usar isso quebra um galho.

Outro uso bem legal para o `*` é quando precisamos pegar os 2 extremos de uma lista, por exemplo. Digamos que foi retornada uma lista e queremos o valor com índice `0` e índice `-1`, podemos fazer unpack da seguinte forma:

```python
first_value, *middle, last_value = lista
```

Assim teremos o índice `0` na variável first_value e o índice `-1` na variável last_value 

> Image
![[Pasted image 20260708100821.png]]

Não é algo trivial de se saber, já que o python já fez a mudança, mas é interessante. Antigamente, versões menores que a `Python 3.5`, a ordenação de um `dict` no python era feita por `hashs` e não pela ordem em que os dados foram inseridos. Isso causava um problema, pois caso usássemos o `print()` para debug, e depois utilizasse a posição do dict baseada na posição no print, ficaria tudo errado.

> An assignment expression—also known as the walrus operator—is a new syntax feature introduced in Python 3.8 to solve a long-standing problem with the language that can cause code duplication. Whereas normal assignment statements are written a = b and pronounced “a equals b,” these assignments are written a := b and pronounced “a walrus b” (because := looks like a pair of eyeballs and tusks).

Big walrus operator. Meio chatinho de entender mas faz todo sentido quando consideramos processamento. Vamos lá, digamos que a gente quer usar uma função em um list comprehension. Segue o exemplo:

```python
lista = [abs(a) for a in numeros if abs(a) is not None]
```
É um exemplo meio esquisito mas da pra passar a ideia. Aqui estamos chamando a função `abs()` 2 vezes, ou seja, processando ela 2 vezes e caso ela seja bem pesada, digamos que demore `5 segundos` para ser executada, estamos gastando `10 segundos` no total. Já com o `walrus operator` nós não temos esse problema. Segue o exemplo:

```python
lista = [b for a in numeros if (b := abs(a)) is not None]
```
Agora temos o uso do walrus em `(b := abs(a))`. O que ele faz é exatamente é rodar a função e colocar o retorno da função dentro da variável `b`. Ou seja, aqui só rodamos a função uma vez. Note que foi colocado um parênteses externo e ele é muito importante para que o `is not None` não capture apenas o `abs(a)`.

> Image
![[Pasted image 20260714104118.png]]

Essa função, de início, me pareceu muito estranha mas ela faz total sentido quando consideramos que o `(0, x)` e `(1, x)` são tuplas que são consideradas no `sort()`. Por exemplo, se o número está no grupo, ele sempre vai estar com `(0, )` no início e se não estiver no grupo, sempre vai ter `(1, )` no início. Essas tuplas também são ordenadas e ele sempre conta primeiro as que começam com `0`, depois as que começam com `1`

> Image
![[Pasted image 20260716094718.png]]
![[Pasted image 20260716094742.png]]

Interessante essa keyword `nonlocal` apesar de eu nunca ter usado/visto antes de ler o livro. O que o carinha do reddit falou / que eu entendi é: Como ensinado pelo big HappyHippyHippo antigamente, o que nasce numa função morre numa função. Caso você tenha uma função `nested`, você pode referenciar as variáveis externas utilizando a keyword `nonlocal`


> Image
![[Pasted image 20260716102118.png]]

Ao enviar argumentos para uma função nós temos a possibilidade de usar algo como `name: "Roberto"`. Isso é a maneira convencional, agora o símbolo `**` nos permite mandar diretamente um dicionário como argumento. Eu achei isso mais interessante do que útil, já que como dito anteriormente, em versões mais antigas do python, em que os dicionários eram ordenados por `hashes`, a ordem deles ficava meio bagunçada e isso pode ocasionar uns big erros

> Image
![[Pasted image 20260716103022.png]]

Muito interessante notar que a hora, por mais que houve um `sleep(0,1)` não mudou. Isso se da pela forma que o compilador do python trabalha. Como a ideia dele é ler linha à linha, ele acaba computando o `when=datetime.now()` só 1 vez. Ou seja, mucho cuidado ao receber funções diretamente como parâmetros

> Image
![[Pasted image 20260720094502.png]]

> Image
![[Pasted image 20260720101427.png]]







