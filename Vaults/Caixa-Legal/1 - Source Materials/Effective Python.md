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

Achei interessante essa ideia de unpack usando o `*`. O livro só fala que pode ser perigoso caso você esteja usando uma estrutura muito grande, já que ele aloca memória e pode acabar consumindo a memória toda da máquina. Mas, com certeza, em estruturas pequenas para exercícios simples ou até mesmo o dia-a-dia, usar isso quebra um galho

> Image
![[Pasted image 20260708100821.png]]

Não é algo trivial de se saber, já que o python já fez a mudança, mas é interessante. Antigamente, versões menores que a `Python 3.5`, a ordenação de um `dict` no python era feita por `hashs` e não pela ordem em que os dados foram inseridos. Isso causava um problema, pois caso usássemos o `print()` para debug, e depois utilizasse a posição do dict baseada na posição no print, ficaria tudo errado.

