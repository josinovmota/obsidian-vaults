2024-10-04 09:56

Tags:[[ISLP]], [[Statistics]], [[Statistical Learning]]

# Overfitting

Overfitting ocorre quando o nosso **modelo estatístico** captura muito bem a disposição dos dados de **TREINO** mas performa mal com os dados de **TESTE**.
Modelos **Supervised** dispõem de tanto dados de **TREINO** como dados de **TESTE** 
# Example

Digamos que estamos buscando prever **Altura** baseada no **Peso**. Para isso, dividimos nossos dados em dados de treino e teste e treinamos o nosso modelo usando os dados de treino. Ao ver o resultado, notamos que o nosso modelo performou MUITO BEM com os dados de treino. De certa forma isso pode ser uma boa notícia, porém, nos casos reais nós não queremos que o nosso modelo se dê bem com os dados de treino e sim com os dados reais que serão coletados conforme o tempo passa. Ao testamos os dados de teste, descobrimos que o nosso modelo não performou bem. Isso pode significar diversas coisas, desde a escola errada do modelo entre outras possíveis causas. O fato do nosso modelo se dar bem com os dados de Treino e se dar mal com os dados de Teste é chamado de **OverFitting**

# References

Introduction To Statistical Learning with Python