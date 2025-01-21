14-05-2024 09:25

Tags:[[3 - Tags/Linux|Linux]], [[Linux All-In-One For Dummies]]

# Linux Structure

A estrutura do Linux é composta por alguns componentes importantes que vou citar à seguir:

## Kernel

O kernel é o orquestrador entre o *Hardware* e o Usuário e tem algumas funções bem importantes, como:

System Memory Management
+ O kernel é responsável por criar blocos de memórias reservados para cada aplicação. É importante que cada aplicação tenha seu próprio espaço reservado para não have interações entre elas

Software Program Management
+ O kernel também é responsável pela execução do programas. Assim que o computador inicia, junto a ele alguns programas são iniciados juntos. A forma mais utilizada pelo linux hoje em dia é o *Systemd*

Hardware Management
+ O Kernel também é responsável pelos drivers, tendo como papel ser o *Middleman* entre os drivers e as aplicações

File System Management
+ Com o Kernel em mãos, temos quase todas as funcionalidades básicas para começar a usar um sistema, mas aí vem um problema. Como vamos usar comandos, olhar arquivos, manipular textos? Por sorte, em paralelo a criação do Linux, existia um grupo criando o *GNU* que traria o *Coreutils*, um pacote com várias funcionalidades como File Handling, Manipuladores de texto, Manipuladores de processos, entre outros. Hoje, todo o pacote Linux é comumente chamado de Linux, porém, para dar os devidos créditos aos criadores do GNU, existem pessoas que ainda hoje o chamam de *GNU/Linux*

Linux Graphical Interface
+ Depois de termos todas essas coisas, precisamos de uma interface gráfica. Hoje em dia para o linux existem algumas bem famosas, como o *KDE* e *GNOME*:
+ KDE: O KDE é uma interface mais parecida com a do Windows, deixando assim mais confortável para aqueles que estão migrando
+ GNOME: Já o GNOME tem características próprias, tornando assim algo mais exclusivo do Linux, como a barra de tarefas nas laterais entre outras coisas

Command Line
+ Agora, para finalizar e dar o toque principal do linux, precisamos ter comandos em uma interface gráfica para facilitar o nosso uso, para isso, foram criadas as *CLI(Command-Line Interface)*
+ Shell: O *Shell* é um interpretador de comandos que funciona dentro da *CLI* e da vida aos comandos como o *cd*, *ls*, *mv* entre outros. Existem vários tipos de Shell, sendo os mais famosos o *Bash* e o *Zsh*

Distributions
+ Como vimos, o Linux é um conjunto de coisas, sendo eles o *Kernel*, *GNU*, *Interface Gráficas* e *CLI*. Dada a necessidade de facilitar a instalação de todo esse conjunto, foram criadas as distribuições que tem características próprias para cada um desses items. Hoje em dia existem distribuições com o *Ubuntu*, *Fedora*, *OpenSuse*, *Debian*


 References

Linux All-In-One For Dummies