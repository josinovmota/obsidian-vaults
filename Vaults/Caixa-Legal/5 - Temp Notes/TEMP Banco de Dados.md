# IMPORTANTE !!! 

Lembrar de melhorar a explicação dentro do [[Modelo Entidade-Relacionamento - MER]] quando começar a colocar a mão na massa e entender melhor as coisas

Ver se ainda vou me aprofundar nas novas fases do Projeto de BD para escrever sobre elas

--- 

Modelo de dados relacional

Normalização

1fn - Lembrar da ideia de chave estrangeira fazendo referência a outra tabela | várias ocorrências da mesma palavra nas tuplas de uma mesma entidade não é 100% errado, mas pode ocasionar algumas inconsistências como dificuldade nada hora de alterar os nomes caso haja alguma alterações neles, portanto faz-se necessário a decomposição da tabela | valores atomicos e sem repetição de nomes nas tuplas

2fn - ocorrência de chave composta. Reforça a ideia de que todos os campos da tupla tem que estar relacionados com a chave principal da relação(entidade ou tabela) 

3fn - a 3fn fala sobre que não devem existir atributos(campos) que derivem de atributos que não são as chaves principais. Esses campos derivados deve ser apagados e feitos dinamicamente

