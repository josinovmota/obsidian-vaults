25-05-2026 09:51

Tags:[[Programming]], [[Clean code]]

# The pragmatic programmer

>Responsibility is something you actively agree to. You make a commitment to ensure that something is done right, but you don’t necessarily have direct control over every aspect of it.

Tomar responsabilidade sobre o que você faz abre espaço para mais um ponto, que é o de lidar com os seus atos. Antes de chegar e falar "Isso aqui não tem como ser resolvido", olhar se existe alguma forma de resolver. Se não existir, trazer uma forma de resolver, nem que seja recomeçar do zero e explicar os benefícios de recomeçar do zero.

>One broken window, left unrepaired for any substantial length of time, instills in the inhabitants of the building a sense of abandonment—a sense that the powers that be don’t care about the building. So another window gets broken. People start littering. Graffiti appears. Serious structural damage begins. In a relatively short span of time, the building becomes damaged beyond the owner’s desire to fix it, and the sense of abandonment becomes reality.

Como o texto fala, um pequeno problema pode gerar um ambiente de descaso. Ambiente esse que é terra fértil para vários outros problemas. JUST FIX BROKEN WINDOWS!!!!!

>Don’t spoil a perfectly good program by overembellishment and overrefinement.

Eu já li em algum livro, não tenho certeza se nesse aqui, sobre uma atualização de um software que não agradou ao público. Aconteceu que as pessoas estavam, por anos, acostumadas com um layout no tal programa e, do nada, mudaram o layout. Como essa parte do livro fala, não estrague algo perfeitamente bom com esse super-embelezamento

> Over-embellishment

O livro fala sobre a questão do over-embellishment. Há um bom tempo eu li em um livro que um app perdeu grande parte do seu público por, do nada, trocar todo o layout. A visão que foi passada é que as pessoas, por anos, estavam acostumadas com um layout e ao mudar (afim de deixar mais moderno e bonito) acabou afastando os usuários

> You could be better positioned for that new job opening if you tried out that other language…

O big Tiberius é um exemplo. Antes mesmo de ficar boladão na área já estava aprendendo Chinês (Algo que normalmente nem pensamos em aprender) e com certeza isso abriu muitas portas

> Isolation can be deadly to your career

Voltar com as lives né :P. Networking ajuda muito

> Experiment with different environments

Vou começar um novo desafio que é o de aprender um shortcut ou plugin por dia para melhorar ainda mais meu desempenho

> You need to ensure that the knowledge in your portfolio is accurate and unswayed by either vendor or media hype

O grande problema do `hype-cycle`. Tanto não adianta colocar no seu portfolio que você sabe 1001 coisas sem saber como também não adianta colocar coisas supérfluas que você viu em ambientes ruims i.e vídeo de 8 min no youtube, canais sensacionalistas, etc. É de grande importância saber que o canal no yt ganha com sua visualização e não com um bom conteúdo. Pra eles, fazer com que você veja um vídeo até o fim é a forma de ganhar dinheiro. Outra coisa é que se eles te derem a resposta pra o que você quer logo de cara, vão ficar sem público

> Having the best ideas, the finest code, or the most pragmatic thinking is ultimately sterile unless you can communicate with other people

The huge problem of não saber se comunicar. Acho muito importante ir atrás disso, já que muitas das vezes eu tenho uma ideia muito boa mas não consigo comunicá-la da melhor forma

> CHOOSE YOUR MOMENT It’s six o’clock on Friday afternoon, following a week when the auditors have been in. Your  boss’s youngest is in the hospital, it’s pouring rain outside, and the commute home is guaranteed to be a nightmare. This probably isn’t a good time to ask her for a memory upgrade for your laptop.

Muito importante avaliar o melhor momento agir. Acho que isso linka bem com a ideia de assumir seus erros. Assumir é o correto, mas assumir num momento ruim pode fazer com que suas medidas para consertar nem ouvidas sejam

> There’s one technique that you must use if you want people to listen to you: listen to them

Huge tip. Ouvir os outros é um passo super importante para ser ouvido, principalmente quando você ouve com atenção, faz perguntas e da valor ao que está sendo dito

> Dry principle

O dry principle fala daquilo que já vi em muito códigos por aí. Uma função `main()` que chama outras funções, cada uma com sua própria responsabilidade. A ideia por trás disso é que caso você precise fazer manutenção em algo, vai saber exatamente aonde ele está e não precisará mudar ao longo de todo o código. Também tem a ideia de que se um objeto é fruto de outros objetos, que ele seja calculado na sua criação, como mostra o exemplo à seguir:

![[Pasted image 20260609123811.png]]

> Don’t rely on the properties of things you can’t control

O livro ainda falando sobre o conceito de `DRY`, diz que você deve ter cuidado com libs, apis, e afins que você não controla de ponta à ponta. Um caso recente foi o dos programadores que quebraram o `math.random()`. Certo que à fim de poupar trabalho, às vezes temos que confiar em certas libs, mas é importante estar atento a isso

> Tracer bullet development

Agora o livro introduz o conceito de `tracer bullet development` que nada mais é do que fazer um esqueleto do seu projeto final afim de reunir feedbacks, ideias, etc. Fazer esse esqueleto, por mais simples que seja, também ajuda a conectar as diversas tecnologias usadas no projeto, como API, Libraries, etc. Ter elas conectadas e sob controle (`DRY`) é sempre muito importante.

> They won’t be disappointed by a lack of functionality; they’ll be ecstatic to see some visible progress toward their system. They also get to contribute as the project progresses

Fazer o esqueleto ( bullet tracer development ), como eu disse anteriormente, pode trazer feedbacks, insights e ser um propulsor para o projeto. Como o livro cita também, quando foram criar os primeiros carros, por ser algo muito caro, fizeram projetos com madeira, argila, para chegar num design final. E isso mais uma vez linka com a história da `stone soup`, uma vez que os usuários veem a sopa de pedras ( esqueleto ), vão cada vez mais trazendo ingredientes

> You use the technique in situations where you’re not 100% certain of where you’re going ( tracer bullet )

Existe uma grande diferença entre prototipar e fazer o bullet tracer. Enquanto no bullet tracer fazemos um esqueleto que condiz com o design final, ao prototipar fazemos algo que será apagado, mas que ainda assim ajuda a entender o design final

> What sorts of things might you choose to investigate with a prototype? Anything that carries risk. Anything that hasn’t been tried before

Como explicado anteriormente, o `bullet tracer` é o esqueleto do projeto, mas que reflete muito mais os projeto final do que o protótipo. Com isso, é fácil de perceber que no protótipo podemos nos arriscar muito mais e tentar coisas novas

> Remind them that you can build a great prototype of a new car out of balsa wood and duct tape, but you wouldn’t try to drive it in rush-hour traffic!

Como o livro cita, é importante ter cuidado com a reação do público aos seus protótipos. Como dito acima, é muito fácil fazer o "esqueleto" de um carro com madeira ou fita, mas esse esqueleto não consegue ser testado numa rua movimentada. O que acontece, muitas vezes, é as pessoas acharem que o protótipo já serve para ser entregue ao público

> Internal domain language vs External domain language

É legal saber a diferença das domain languages para conseguir se situar melhor. Enquanto a internal é criada na própria linguagem de programação do projeto, o external é criada em outra. Mas essa não é a única diferença. Não basta só criar uma domain language em outra linguagem de programação, você também vai precisar criar um tradutor, o que traz ainda mais complexidade para o código como um todo

