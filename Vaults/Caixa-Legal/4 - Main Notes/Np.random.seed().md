2024-10-07 08:07

Tags:[[Numpy]]

# Np.random.seed()

Sempre que buscamos gerar números aleatórios esperamos, obviamente, que eles sempre venham aleatórios e todas as vezes que formos gerar esses números, venham outros aleatórios. O método **random.seed()** da lib **numpy** faz com que os dados sejam gerados aleatoriamente, porém, não mudem todas as vezes que tentarmos gerar novamente os dados

# Example


Ao usar o método random.seed, sempre que gerarmos os dados com base no mesmo comando, eles virão os mesmos(obviamente que da primeira vez eles foram gerados aleatoriamente)
```python
import numpy as np

np.random.seed(1)

random_number = np.random.rand(5)

print(random_number)

> [0.57019677 0.43860151 0.98837384 0.10204481 0.20887676]

random_number = np.random.rand(5)

print(random_number)

> [0.57019677 0.43860151 0.98837384 0.10204481 0.20887676]
```

# References

Introduction To Statistical Learning with Python