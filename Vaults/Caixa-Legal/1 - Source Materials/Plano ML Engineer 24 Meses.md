# Plano de 24 Meses — De onde você está até ML/AI Engineer remoto internacional

**Elaborado em:** 29 de agosto de 2026
**Janela do plano:** Setembro/2026 → Agosto/2028
**Alvo:** contrato remoto com empresa estrangeira (EUA/Europa) como Machine Learning Engineer ou AI Engineer, pago em USD/EUR.

> Links verificados em 29/08/2026. Se algum quebrar, busque pelo nome do recurso — todos são conhecidos o bastante para serem encontrados.

---

## ÍNDICE

0. [Ação urgente — próximas 72 horas](#0-ação-urgente--próximas-72-horas)
1. [Premissas e como adaptar o plano](#1-premissas-e-como-adaptar-o-plano)
2. [O alvo, com precisão](#2-o-alvo-com-precisão)
3. [Método de estudo — as regras](#3-método-de-estudo--as-regras)
4. [Grade semanal fixa](#4-grade-semanal-fixa)
5. [A biblioteca (livros, em ordem)](#5-a-biblioteca-livros-em-ordem)
6. [Cursos e vídeos](#6-cursos-e-vídeos)
7. [Cronograma mês a mês](#7-cronograma-mês-a-mês)
8. [Projeto 1 — Sistema vivo (spec completa)](#8-projeto-1--sistema-vivo-spec-completa)
9. [Projeto 2 — Open source (playbook do primeiro PR)](#9-projeto-2--open-source-playbook-do-primeiro-pr)
10. [Projeto 3 — Cliente real](#10-projeto-3--cliente-real)
11. [Inglês — plano operacional](#11-inglês--plano-operacional)
12. [Vitrine: GitHub, LinkedIn, currículo](#12-vitrine-github-linkedin-currículo)
13. [Candidatura internacional](#13-candidatura-internacional)
14. [Contrato, CNPJ e impostos](#14-contrato-cnpj-e-impostos)
15. [Checkpoints e critérios de correção de rota](#15-checkpoints-e-critérios-de-correção-de-rota)
16. [Armadilhas](#16-armadilhas)
17. [Honestidade sobre probabilidades + plano B](#17-honestidade-sobre-probabilidades--plano-b)

---

## 0. AÇÃO URGENTE — PRÓXIMAS 72 HORAS

Não comece pelo capítulo 1. Comece por isto, hoje.

- [x] **Inscrever-se no ML Zoomcamp — a turma de 2026 começa em 14 de setembro de 2026.** É gratuito, dura 4 meses, e a turma ao vivo roda **uma vez por ano**. Se você perder, o próximo cohort ao vivo é setembro de 2027. Inscrição: `courses.datatalks.club/register/ml-zoomcamp/`
  - Por que a turma ao vivo importa: só nela existem prazos, correção de exercícios, revisão por pares e certificado. O modo self-paced não tem nada disso.
- [ ] **Entrar no Slack da DataTalks.Club** (`datatalks.club`) nos canais `#course-ml-zoomcamp` e `#course-mlops-zoomcamp`. Comunidade global, em inglês — já começa a treinar escrita técnica.
- [x] **Comprar o Géron novo** (ver §5, livro #3). Chegou a edição PyTorch em outubro/2025; a versão TensorFlow que você vê em listas antigas está defasada.
- [ ] **Fazer o teste de inglês EF SET** (`efset.org`, gratuito, ~50min). Anote o resultado. É seu baseline. Sem esse número você não sabe onde está.
- [ ] **Criar o repositório do diário de bordo** no GitHub: `learning-log`. Um arquivo markdown por semana. Isso vira prova de consistência de 24 meses.

---

## 1. PREMISSAS E COMO ADAPTAR O PLANO

Estou assumindo:

| Premissa | Se não for seu caso |
|---|---|
| Você programa em Python em nível intermediário (escreve scripts, usa pandas) | Se for iniciante total, adicione 3 meses na Fase 1 e faça o "Python for Everybody" antes |
| Inglês entre B1 e B2 | Se for A2/B1, dobre o tempo de inglês para 1h/dia e atrase a Fase 4 em 3 meses |
| Você tem 15–20h/semana livres | Se tiver menos de 10h, o plano vira 36 meses. Ajuste o calendário, não o conteúdo |
| Você mora no Brasil e vai continuar morando | Se pretende sair do país, o caminho é outro (visto, relocação) — me avise |
| Você não tem emprego em dados hoje | Se já tem, pule a "corrida por emprego" da Fase 1 e ganhe 4 meses |

**Regra de ouro sobre seguir o plano à risca:** siga a *estrutura* religiosamente (horas, ordem das fases, critérios de conclusão). Adapte o *conteúdo* quando a realidade der sinal — por exemplo, se você conseguir emprego onde já usa PyTorch em produção, corte metade da Fase 2. Aderência cega a um plano de 24 meses é tão ruim quanto não ter plano.

---

## 2. O ALVO, COM PRECISÃO

### O que você vai ser

**Machine Learning Engineer com forte pé em MLOps.** Não "cientista de dados". Não "analista". A combinação que mais contrata em 2026 é ML engineer de produção somado a um lean credível de MLOps.

### O que isso significa na prática

Você vai ser a pessoa que pega um problema de negócio, decide se ML resolve, constrói o modelo, **coloca em produção**, monitora, e conserta quando degrada. Notebook é 20% do trabalho. Os outros 80% são engenharia de software aplicada a ML.

### Sobre SQL — leia com atenção

Você disse que não gosta. Três fatos:

1. **Não tem escapatória.** Python e SQL são os dois pilares em praticamente toda vaga da área; sem os dois você é filtrado no ATS antes de qualquer humano ler.
2. **É pequeno.** SQL bem feito para ML são ~40 horas de estudo. Window functions, CTEs, agregações, joins, e entender plano de execução. Isso é 3 semanas do seu cronograma, não uma carreira.
3. **Tem um caminho que dói menos:** aprenda SQL via **DuckDB** em cima de arquivos Parquet locais. Você escreve SQL sobre seus próprios dados de ML, dentro do seu próprio projeto Python, sem servidor, sem DBA, sem dashboard. É SQL como ferramenta de engenharia, não como trabalho de BI. É a diferença entre odiar e tolerar.

**Power BI:** ignore. De verdade. Não entra neste plano em nenhum momento.

### Especialização (decisão do mês 10)

A maioria dos empregadores de ML engineer prefere especialistas de domínio a generalistas versáteis. No mês 10 você escolhe **uma** trilha e vai fundo:

- **A) LLM/AI Engineering** — RAG, avaliação, fine-tuning, agentes. Maior volume de vagas hoje, maior competição, mais volátil.
- **B) Séries temporais / forecasting** — demanda, preço, capacidade. Menos glamour, muito menos concorrência, demanda estável em varejo, energia, logística, fintech.
- **C) Visão computacional** — indústria, agro, medicina. Nicho técnico, boa barreira de entrada.

Minha recomendação, se você quiser a razão risco/retorno melhor: **B, com uma camada de A por cima.** Forecasting sério + saber embutir LLM onde faz sentido é um perfil raro e caro. Mas essa é sua escolha no mês 10, com mais informação do que você tem hoje.

---

## 3. MÉTODO DE ESTUDO — AS REGRAS

Estas regras valem os 24 meses inteiros. Elas são o que separa "estudei 2 anos" de "sou contratável".

### Regra 1 — Proporção 60/30/10
De cada 10 horas: **6 construindo código**, 3 estudando teoria, 1 escrevendo/publicando. Se a proporção inverter em qualquer semana, você entrou em tutorial hell.

### Regra 2 — Teoria puxada, não empurrada
Nunca leia um capítulo "porque está na lista". Leia porque o projeto travou e você precisa daquilo. Exceção: os livros de fundamentos da Fase 1, que são leitura sequencial mesmo.

### Regra 3 — Como ler um livro técnico (você gosta de livros, então isto importa)
Para cada capítulo:
1. Leia o capítulo inteiro **sem** anotar. 40 min.
2. Feche o livro. Escreva do zero, em 10 linhas, o que o capítulo dizia. À mão ou no `learning-log`.
3. Abra o notebook e **reimplemente o conceito principal sem olhar o código do autor**. Se travar, olhe, feche, tente de novo.
4. Anote no Anki 3 a 5 cartões — só conceitos que você errou no passo 2.
5. Uma frase no `learning-log`: "onde eu usaria isso no meu projeto".

Sem os passos 2 e 3, ler é entretenimento. Um capítulo bem feito assim leva 2 a 3 horas. **É melhor terminar 4 livros desse jeito do que 15 lendo passivamente.**

### Regra 4 — Repetição espaçada com Anki
Baixe o Anki (grátis, `apps.ankiweb.net`). 15 min/dia, sempre. Deck único chamado `MLE`. Só entram cartões que **você mesmo escreveu**. Nada de deck baixado pronto.

### Regra 5 — Regra do commit diário
Todo dia de estudo termina com um commit no GitHub. Mesmo que seja uma linha de README. O gráfico de contribuições verde por 24 meses é sinal social real para recrutador — perfis de GitHub são avaliados por qualidade de código, complexidade do projeto e consistência das contribuições.

### Regra 6 — Nada de vídeo sem teclado
Assistir aula com o editor fechado é proibido. Se o vídeo tem código, você pausa e digita. Se não tem código (conceitual), você faz anotação ativa.

### Regra 7 — Escreva em público, em inglês, uma vez por mês
Um post técnico curto (600–1000 palavras) sobre algo que você construiu. Dev.to, Medium ou blog próprio. Isso compõe juros: no mês 24 você tem 20 artefatos públicos em inglês provando que você pensa e comunica.

---

## 4. GRADE SEMANAL FIXA

**Total: 17h30/semana.** Sustentável. Não negocie para baixo nas primeiras 8 semanas — é onde o hábito se forma.

| Dia | Bloco 1 | Bloco 2 | Total |
|---|---|---|---|
| Segunda | 1h30 — estudo/curso | 30min — inglês | 2h00 |
| Terça | 1h30 — projeto (código) | 30min — inglês | 2h00 |
| Quarta | 1h30 — estudo/curso | 30min — inglês | 2h00 |
| Quinta | 1h30 — projeto (código) | 30min — inglês | 2h00 |
| Sexta | 1h30 — projeto (código) | 30min — inglês | 2h00 |
| Sábado | 4h00 — bloco profundo de projeto | — | 4h00 |
| Domingo | 2h00 — revisão + escrita + Anki da semana | 1h30 — leitura de livro | 3h30 |

**Regras da grade:**
- O bloco de 1h30 é **contínuo**. Celular em outro cômodo. Sem Slack, sem YouTube aberto.
- Inglês é bloco **separado** e inegociável. Se cortar algo numa semana ruim, corte o estudo, nunca o inglês.
- Sábado 4h é onde o projeto realmente anda. Proteja com a vida.
- **Uma semana de folga a cada 8.** Sem culpa. Burnout no mês 9 mata o plano inteiro.

---

## 5. A BIBLIOTECA (LIVROS, EM ORDEM)

Organizada por fase. **Obrigatório** = você lê inteiro, com o método da Regra 3. **Referência** = consulta pontual.

### Fase 1 — Fundamentos (meses 1–5)

**1. `Effective Python: 125 Specific Ways to Write Better Python` — Brett Slatkin (3ª ed., Addison-Wesley, 2024)** — *Obrigatório*
Por quê: você precisa sair de "escrevo scripts" para "escrevo código que outro engenheiro revisa sem sofrer". Formato de 125 itens curtos é perfeito para ler 3 itens/dia.
Como: 3 itens por dia útil, 5 meses. Implemente cada item no seu código real.

**2. `An Introduction to Statistical Learning with Applications in Python` (ISLP) — James, Witten, Hastie, Tibshirani, Taylor** — *Obrigatório*
**PDF gratuito e legal em `statlearning.com`.** Este é o livro de estatística/ML que dá a base conceitual sem te afogar em prova matemática. Faça os labs em Python.
Capítulos essenciais: 2 (statistical learning), 3 (regressão linear), 4 (classificação), 5 (resampling/CV), 6 (seleção de modelo), 8 (árvores).
Como: 1 capítulo a cada 2 semanas, com os labs feitos.

**3. `Hands-On Machine Learning with Scikit-Learn and PyTorch` — Aurélien Géron (O'Reilly, out/2025, ©2026, 878 páginas)** — *Obrigatório, é o livro-espinha-dorsal do plano*
**Atenção:** este é o livro novo, reescrito em PyTorch e apoiado no ecossistema Hugging Face. A edição anterior (Scikit-Learn, Keras & TensorFlow, 3ª ed. de 2022) está desatualizada para o mercado atual — PyTorch venceu. ISBN 9798341607989. Notebooks e material de apoio: `ageron.github.io/homlp`
Como: Parte I (caps. 1–9, ML clássico) nos meses 2–5. Parte II (deep learning) nos meses 6–9. Cada capítulo pelo método da Regra 3.

**4. `Mathematics for Machine Learning` — Deisenroth, Faisal, Ong** — *Referência*
**PDF gratuito em `mml-book.github.io`.** Não leia de capa a capa. Use quando o Géron ou o ISLP citarem algo que você não entende: cap. 2 (álgebra linear), 5 (cálculo vetorial), 6 (probabilidade), 7 (otimização).

**5. `Practical Statistics for Data Scientists` — Bruce, Bruce & Gedeck (2ª ed., O'Reilly)** — *Referência*
Consulta para "como faço este teste, e por quê". Excelente para preparar as entrevistas de estatística.

### Fase 2 — Engenharia e produção (meses 6–13)

**6. `Designing Machine Learning Systems` — Chip Huyen (O'Reilly, 2022)** — *Obrigatório*
O livro de design de sistema de ML. Bestseller #1 da Amazon em IA, traduzido para mais de 10 idiomas. Foca em fundamentos e não em ferramenta específica, por isso envelheceu bem apesar de ser pré-ChatGPT.
Como: leia inteiro nos meses 6–8. **Este é o livro que você vai citar em entrevista.**

**7. `The Missing README: A Guide for the New Software Engineer` — Chris Riccomini & Dmitriy Ryaboy (No Starch, 2021)** — *Obrigatório, leitura rápida*
Cobre exatamente o buraco de quem vem de fora da engenharia: code review, testes, on-call, escrever design doc, trabalhar em time. Um fim de semana. Impacto enorme.

**8. `A Philosophy of Software Design` — John Ousterhout (2ª ed.)** — *Obrigatório, leitura rápida*
190 páginas sobre complexidade e como escondê-la. Muda como você estrutura código para sempre.

**9. `Architecture Patterns with Python` — Percival & Gregory (O'Reilly)** — *Referência*
**Gratuito online em `cosmicpython.com`.** Para quando o Projeto 1 virar uma bagunça de arquivos soltos e você precisar de estrutura.

**10. `Fluent Python` — Luciano Ramalho (2ª ed., O'Reilly, 2022)** — *Referência, opcional mas recomendado*
Brasileiro, e o livro mais profundo de Python que existe. 1000 páginas. Leia por seções conforme a necessidade, nunca inteiro de uma vez. Tem tradução da Novatec ("Python Fluente") se preferir.

### Fase 3 — Especialização e profundidade (meses 10–18)

**11. `AI Engineering: Building Applications with Foundation Models` — Chip Huyen (O'Reilly, 2025)** — *Obrigatório se escolher a trilha LLM*
Foi o livro mais lido da plataforma O'Reilly em 2025. Complementa o DMLS: aquele cobre ML tradicional, este cobre construir em cima de modelos de fundação — engenharia de contexto, avaliação, fine-tuning eficiente. Material de apoio: `github.com/chiphuyen/aie-book`

**12. `Build a Large Language Model (From Scratch)` — Sebastian Raschka (Manning, 2024)** — *Obrigatório se escolher a trilha LLM*
Você constrói um LLM linha por linha em PyTorch. É o que transforma "sei usar a API da OpenAI" em "entendo o que está acontecendo lá dentro".

**13. `Forecasting: Principles and Practice` — Hyndman & Athanasopoulos (3ª ed.)** — *Obrigatório se escolher a trilha séries temporais*
**Gratuito em `otexts.com/fpp3`.** O código é em R; leia pela teoria, que é insuperável, e implemente em Python com `statsforecast`/`nixtla` ou `sktime`.

**14. `Designing Data-Intensive Applications` (2ª ed.) — Kleppmann & Riccomini (O'Reilly, março/2026)** — *Obrigatório, meses 14–18*
A 2ª edição saiu em março de 2026, com capítulos novos sobre trade-offs de arquitetura e requisitos não-funcionais. É o livro de system design. Você não vai usar 70% dele no dia a dia, mas ele é a diferença entre passar e não passar numa entrevista de system design em empresa gringa boa.
Como: 1 capítulo por semana, meses 14–18. Caps. 1–5 e 7–9 são os que mais caem.

**15. `Machine Learning System Design Interview` — Ali Aminian & Alex Xu (ByteByteGo, 2023)** — *Obrigatório, meses 18–22*
Formato de casos resolvidos. É literalmente o formato da entrevista.

**16. `Machine Learning Q and AI` — Sebastian Raschka (No Starch, 2024)** — *Obrigatório, meses 18–24*
30 perguntas conceituais avançadas, respondidas em 3–5 páginas cada. Material de revisão perfeito para as semanas de entrevista.

**17. `Introduction to Machine Learning Interviews` — Chip Huyen** — *Obrigatório*
**Gratuito em `huyenchip.com/ml-interviews-book`.** Estrutura do processo seletivo de ML + banco de perguntas.

### Se quiser ir mais fundo (opcional, qualquer momento)

- `Hands-On Large Language Models` — Alammar & Grootendorst (O'Reilly, 2024) — o mais visual sobre LLMs
- `Statistical Rethinking` — Richard McElreath — estatística bayesiana; difícil e transformador
- `The Hundred-Page Machine Learning Book` — Burkov — revisão rápida, ótimo antes de entrevista
- `Machine Learning Design Patterns` — Lakshmanan et al. (O'Reilly) — 30 padrões recorrentes

---

## 6. CURSOS E VÍDEOS

### Espinha dorsal — os Zoomcamps (DataTalks.Club, todos gratuitos)

| Curso | Formato | Quando fazer | Link |
|---|---|---|---|
| **ML Zoomcamp** | 4 meses, cohort ao vivo | **Set–Dez/2026** (começa 14/09/2026) | `github.com/DataTalksClub/machine-learning-zoomcamp` |
| **MLOps Zoomcamp** | Self-paced (sem cohort ao vivo previsto para 2026) | Meses 8–11 | `github.com/DataTalksClub/mlops-zoomcamp` |
| **LLM Zoomcamp** | Cohort anual | 2027, se escolher trilha LLM | `datatalks.club` |
| **Data Engineering Zoomcamp** | 9 semanas, cohort em janeiro | Jan/2027 — **só se ainda não tiver emprego** | `datatalks.club` |
| **AI Dev Tools Zoomcamp** | Novo, lançou 31/08/2026 | Opcional, meses 4–6 | `datatalks.club` |

O ML Zoomcamp é gratuito, com todos os vídeos e materiais abertos, e cobre justamente o que a maioria dos cursos pula: persistência de modelo, containerização e o workflow completo de produção. Pré-requisito do MLOps Zoomcamp: Python, noções de Docker, e o workflow de ML — ou seja, faça o ML Zoomcamp primeiro.

### Deep learning — os dois melhores gratuitos

**`Neural Networks: Zero to Hero` — Andrej Karpathy** (`karpathy.ai/zero-to-hero.html`)
Constrói rede neural do zero, de backpropagation até um GPT funcionando, inteiramente em código. É considerada a explicação mais clara de internals de modelo que existe. **Faça nos meses 7–9, digitando cada linha junto com ele.** Depois, o `nanochat` do mesmo autor — o "ChatGPT do zero" que dá pra treinar por cerca de US$100.
(O `LLM101n` da Eureka Labs foi anunciado mas até 2026 segue sem lançamento completo. Não conte com ele.)

**`Practical Deep Learning for Coders` — fast.ai** (`course.fast.ai`)
Abordagem top-down: você treina modelos bons na aula 1 e entende a teoria depois. Assume cerca de um ano de experiência em programação. Ótimo complemento ao Karpathy (que é bottom-up). Meses 8–10.

### Complementares

- **Hugging Face Learn** (`huggingface.co/learn`) — gratuito. Cursos de NLP, LLM, Agents e Deep RL. É o melhor material sobre LLMs modernos e agentes. Meses 12–16.
- **StatQuest com Josh Starmer** (YouTube) — quando um conceito estatístico não entrar. Ninguém explica melhor.
- **3Blue1Brown** (YouTube) — séries "Essence of Linear Algebra", "Essence of Calculus" e "Neural Networks". Assista **antes** de abrir o Mathematics for ML.
- **Made With ML** (`madewithml.com`) — gratuito, MLOps com boas práticas de engenharia.
- **Full Stack Deep Learning** (`fullstackdeeplearning.com`) — gratuito, foco em levar modelo à produção.
- **Stanford CS231n** (visão) e **CS224n** (NLP) — palestras no YouTube. Só se escolher essas trilhas.

### Podcasts (para o trânsito, academia, louça — não conta como estudo)
Latent Space · MLOps Community Podcast · The TWIML AI Podcast · Practical AI

---

## 7. CRONOGRAMA MÊS A MÊS

### FASE 1 — Fundação + Emprego (Mês 1 a 5 · Set/2026 → Jan/2027)

**Objetivo da fase:** base sólida de Python/ML/SQL + estar empregado em dados no Brasil.

**Mês 1 (Set/2026)**
- [ ] ML Zoomcamp começa dia 14. Módulos 1–2. Entregar todas as tarefas no prazo.
- [ ] Ambiente profissional: `uv` (gerenciador de pacotes), `ruff` (linter), `pytest`, pre-commit hooks. Nunca mais `pip install` solto.
- [ ] Git de verdade: branch, rebase interativo, PR, resolução de conflito. Tutorial: `learngitbranching.js.org`
- [ ] Começar Effective Python (3 itens/dia).
- [ ] **Começar a se candidatar a vagas de dados no Brasil.** Sim, já. Mesmo despreparado. Meta: 10 candidaturas/semana.
- [ ] Inglês: 30min/dia + agendar 1ª aula no italki.

**Mês 2 (Out/2026)**
- [ ] ML Zoomcamp módulos 3–4.
- [ ] ISLP caps. 2–3 com labs.
- [ ] **SQL, semana intensiva:** DuckDB + SQL sobre Parquet. Recurso: `sqlbolt.com` (básico) → `pgexercises.com` (window functions) → DuckDB docs. 15h no total.
- [ ] Géron cap. 1–2 (o projeto end-to-end do cap. 2 é excelente).
- [ ] Candidaturas continuam: 10/semana.

**Mês 3 (Nov/2026)**
- [ ] ML Zoomcamp módulos 5–6 (deployment com Docker — o módulo mais valioso).
- [ ] ISLP caps. 4–5.
- [ ] Géron caps. 3–4.
- [ ] **Escolher o dataset do Projeto 1** (ver §8) e fazer o primeiro ingest funcional.
- [ ] 1º post técnico em inglês.

**Mês 4 (Dez/2026)**
- [ ] ML Zoomcamp: **capstone + certificado**. Prioridade máxima do mês.
- [ ] Géron caps. 5–6.
- [ ] Projeto 1: pipeline de ingestão rodando agendado.

**Mês 5 (Jan/2027)**
- [ ] ISLP caps. 6 e 8.
- [ ] Géron caps. 7–9 (ensembles, redução de dimensionalidade, clustering).
- [ ] Projeto 1: primeiro modelo + baseline burro documentado.
- [ ] **Decisão:** se ainda não tiver emprego, entre no Data Engineering Zoomcamp (começa em janeiro). Se tiver, pule.
- [ ] Reavaliar inglês com o EF SET. Comparar com o baseline.

**Critério de saída da Fase 1** (não avance sem isso):
- Certificado do ML Zoomcamp na mão
- Consegue escrever uma query com window function sem consultar
- Consegue explicar viés-variância, validação cruzada e vazamento de dados em voz alta, em inglês, em 2 minutos
- Projeto 1 tem um modelo treinado e um baseline

---

### FASE 2 — Produção e Deep Learning (Mês 6 a 11 · Fev/2027 → Jul/2027)

**Objetivo:** transformar o Projeto 1 em sistema de verdade + entender deep learning por dentro.

**Mês 6 (Fev/2027)**
- [ ] Ler `Designing Machine Learning Systems` (Huyen), caps. 1–4.
- [ ] Ler `The Missing README` inteiro.
- [ ] Projeto 1: MLflow para tracking de experimentos. Todo treino versionado.
- [ ] Testes: cobertura mínima de 60% no Projeto 1 com pytest.

**Mês 7 (Mar/2027)**
- [ ] DMLS caps. 5–8.
- [ ] **Karpathy Zero to Hero, aulas 1–3** (micrograd, makemore). Digitando junto.
- [ ] Projeto 1: FastAPI + Dockerfile. API rodando local.
- [ ] Géron caps. 10–11 (redes neurais, treinamento profundo).

**Mês 8 (Abr/2027)**
- [ ] DMLS caps. 9–11. Terminar o livro.
- [ ] Karpathy aulas 4–6.
- [ ] **MLOps Zoomcamp** (self-paced) módulos 1–3.
- [ ] Projeto 1: **deploy público**. Fly.io, Render ou Hugging Face Spaces. URL viva.
- [ ] Ler `A Philosophy of Software Design`.

**Mês 9 (Mai/2027)**
- [ ] Karpathy aulas 7–8 (GPT do zero). Este é um marco.
- [ ] MLOps Zoomcamp módulos 4–5 (monitoramento com Evidently).
- [ ] Projeto 1: monitoramento de drift ativo + alerta.
- [ ] Géron caps. 12–14 (PyTorch custom, CNNs).

**Mês 10 (Jun/2027)**
- [ ] MLOps Zoomcamp módulo 6 + boas práticas. **CI/CD com GitHub Actions no Projeto 1.**
- [ ] fast.ai aulas 1–4.
- [ ] **DECISÃO DE ESPECIALIZAÇÃO** (trilha A, B ou C — ver §2). Escreva 1 página justificando a escolha no `learning-log`.
- [ ] Projeto 1: retreino automático quando drift dispara.

**Mês 11 (Jul/2027)**
- [ ] fast.ai aulas 5–8.
- [ ] Géron caps. 15–16 (sequências, atenção, transformers).
- [ ] **Projeto 1: FINALIZAR.** README completo (spec em §8), post técnico longo em inglês, vídeo de 3 min demonstrando.
- [ ] Começar Projeto 2 (open source) — ver §9.

**Critério de saída da Fase 2:**
- Projeto 1 no ar, com URL pública, rodando sozinho há pelo menos 4 semanas
- Você consegue desenhar num papel a arquitetura de um sistema de ML em produção e explicar cada caixa
- Certificado do MLOps Zoomcamp (se rodar cohort) ou capstone concluído
- Escreveu um GPT do zero e entende cada linha

---

### FASE 3 — Especialização + Open Source (Mês 12 a 17 · Ago/2027 → Jan/2028)

**Objetivo:** profundidade num vertical + sinal social de código revisado por terceiros.

**Mês 12 (Ago/2027)**
- [ ] Livro da trilha escolhida (Raschka LLM / Hyndman forecasting / CS231n visão).
- [ ] **Projeto 2: primeiro PR mergeado.** Alvo: documentação em um dos repos de §9.
- [ ] Marco de 1 ano: reescreva seu currículo do zero.

**Mês 13 (Set/2027)**
- [ ] Trilha: continuar livro + curso Hugging Face correspondente.
- [ ] Projeto 2: PRs 2 e 3.
- [ ] **Começar a caçar o cliente do Projeto 3** (ver §10). Isso leva 4–8 semanas para conseguir. Comece cedo.

**Mês 14 (Out/2027)**
- [ ] **Começar DDIA 2ª edição.** 1 capítulo/semana daqui até o mês 18.
- [ ] Projeto 2: PRs 4 e 5.
- [ ] Projeto 3: escopo fechado com o cliente, documento de requisitos assinado.

**Mês 15 (Nov/2027)**
- [ ] DDIA caps. 2–5.
- [ ] Projeto 3: construção.
- [ ] Trilha: projeto pequeno específico da especialização.

**Mês 16 (Dez/2027)**
- [ ] DDIA caps. 6–8.
- [ ] Projeto 3: entrega e deploy.
- [ ] Projeto 2: PRs 6–8. Objetivo total: 5 a 10 mergeados.

**Mês 17 (Jan/2028)**
- [ ] DDIA caps. 9–11.
- [ ] Projeto 3: **medir impacto**. Número antes/depois. Pedir depoimento por escrito ao cliente.
- [ ] Escrever o case study do Projeto 3 em inglês.

**Critério de saída da Fase 3:**
- 5+ PRs mergeados em projetos reconhecidos
- Projeto 3 entregue com número de impacto e depoimento
- Você é claramente melhor que a média num vertical específico
- DDIA lido

---

### FASE 4 — Preparação de Entrevista (Mês 18 a 21 · Fev/2028 → Mai/2028)

**Objetivo:** virar a chave de "sei fazer" para "sei provar em 45 minutos, em inglês, sob pressão".

**Mês 18 (Fev/2028)**
- [ ] `Machine Learning System Design Interview` (Aminian & Xu) — 2 casos/semana.
- [ ] `Introduction to ML Interviews` (Huyen) — banco de perguntas.
- [ ] **Inglês vira 1h/dia.** Foco total em mock interview.
- [ ] Refazer EF SET. Meta: C1.

**Mês 19 (Mar/2028)**
- [ ] Coding: 3 problemas de LeetCode/semana (fácil-médio, foco em Python, arrays, hash, strings). Não exagere — ML engineer raramente cai em hard.
- [ ] `Machine Learning Q and AI` (Raschka) — 3 perguntas/semana.
- [ ] **Mocks reais:** `interviewing.io` ou `pramp.com`, 1/semana, em inglês.

**Mês 20 (Abr/2028)**
- [ ] Escrever e decorar as 6 histórias STAR (situação-tarefa-ação-resultado) dos seus 3 projetos, em inglês.
- [ ] Gravar-se explicando cada projeto em 3 minutos. Assistir. Refazer até ficar natural.
- [ ] Mocks de system design de ML, 1/semana.
- [ ] Refazer LinkedIn e GitHub inteiros em inglês (§12).

**Mês 21 (Mai/2028)**
- [ ] Simulação de loop completo: 1 coding + 1 ML design + 1 comportamental na mesma semana.
- [ ] Pesquisar e listar 80 empresas-alvo em planilha (nome, o que faz, contrata no Brasil?, tem vaga?, contato de engenheiro).
- [ ] Networking: comentar em issues, responder em Slacks, ir a meetups online. Os melhores candidatos de IA muitas vezes não estão procurando emprego — estão resolvendo problemas interessantes e contribuindo em open source. Seja encontrável nesses lugares.

---

### FASE 5 — Caça (Mês 22 a 24 · Jun/2028 → Ago/2028, e além)

**Mês 22 (Jun/2028)**
- [ ] **20 candidaturas/semana.** Sim, vinte. Volume é parte da estratégia.
- [ ] 50% via job board, 50% via outbound direto (mensagem a engenheiro da empresa, não a recrutador).
- [ ] Planilha de tracking: empresa, data, canal, status, feedback.

**Mês 23 (Jul/2028)**
- [ ] Continuar volume. Analisar taxa de conversão por etapa.
- [ ] Se não passa da triagem de currículo → problema é currículo/perfil.
- [ ] Se passa e cai no técnico → problema é preparação técnica.
- [ ] Se passa no técnico e cai no final → problema é inglês/comunicação.
- [ ] Diagnostique e corrija a etapa específica.

**Mês 24 (Ago/2028)**
- [ ] Negociação de oferta. Nunca aceite o primeiro número.
- [ ] Estruturar CNPJ/contrato (§14).
- [ ] Se ainda não houver oferta: **isso é normal.** Ver §17.

---

## 8. PROJETO 1 — SISTEMA VIVO (SPEC COMPLETA)

Este é o projeto que responde "me conta sobre algo que você construiu". Ele roda dos meses 3 ao 11.

### Por que não Kaggle

O Kaggle te entrega os dados, o enunciado e a métrica de avaliação. Um trabalho de verdade exige que você defina os três. Um portfólio liderado por classificador do Titanic não diferencia ninguém, porque cem outros candidatos submeteram exatamente o mesmo projeto, com a mesma acurácia de 83% e a mesma frase sobre regressão logística. Não sinaliza nada.

### O critério que torna o projeto "vivo"

**Os dados precisam atualizar sozinhos.** Isso é o que força você a construir ingestão, agendamento, retreino, monitoramento e tratamento de erro — exatamente as coisas que faltam em 95% dos portfólios.

### Escolha UMA destas fontes (todas brasileiras, públicas, sujas e vivas)

**Opção A — ONS: carga de energia elétrica** *(minha recomendação se escolher séries temporais)*
`dados.ons.org.br` — dados horários de carga por subsistema, atualizados diariamente, série longa.
Problema: prever carga horária para as próximas 48h por subsistema. Detectar anomalias.
Por que é bom: problema real de bilhões de reais, sazonalidade múltipla (hora, dia, mês), efeito de feriado e temperatura, e um baseline óbvio para bater.

**Opção B — ANP: preços de combustíveis**
`gov.br/anp` → série histórica de preços, semanal, por município e bandeira. Milhões de linhas, encoding inconsistente, mudanças de esquema ao longo dos anos.
Problema: prever preço médio semanal por município + detectar postos/municípios com precificação anômala.

**Opção C — ANAC: atrasos de voo (VRA)**
Dados mensais de voos regulares, com horário previsto e realizado.
Problema: prever probabilidade de atraso > 30 min por voo. Classificação com desbalanceamento real, features de aeroporto/companhia/horário/clima (cruze com INMET).

**Opção D — Portal da Transparência: contratos e licitações**
Problema: detecção de anomalia em fornecedores. Aprendizado não supervisionado + explicabilidade.

### Requisitos obrigatórios de entrega

**Dados e pipeline**
- [ ] Ingestão automática agendada (Prefect ou Airflow, ou GitHub Actions cron para começar)
- [ ] Armazenamento em Parquet particionado
- [ ] **Camada de análise em DuckDB com SQL** (é aqui que você faz as pazes com SQL)
- [ ] Validação de schema com Pandera ou Great Expectations — o pipeline **falha** se o dado vier errado
- [ ] Versionamento de dados com DVC

**Modelagem**
- [ ] **Baseline burro documentado** (média móvel, último valor, classe majoritária). Se seu modelo não bate o baseline por margem clara, o projeto ainda não terminou.
- [ ] Split temporal correto — nada de shuffle em série temporal
- [ ] Todos os experimentos no MLflow: parâmetros, métricas, artefatos
- [ ] Análise de erro escrita: onde o modelo erra e **por quê**

**Produção**
- [ ] API FastAPI com validação Pydantic, `/health`, `/predict`, docs OpenAPI
- [ ] Dockerfile multi-stage, imagem < 1GB
- [ ] Deploy público com URL viva (Fly.io, Render ou HF Spaces — todos com tier gratuito)
- [ ] CI/CD no GitHub Actions: lint + testes + build a cada push
- [ ] Testes com pytest, cobertura ≥ 60%
- [ ] Monitoramento de drift com Evidently, rodando semanalmente
- [ ] Retreino automático disparado por degradação de métrica

**Documentação — o README (leia isto duas vezes)**
Escreva o README como se explicasse para um engenheiro sênior cético. Ele precisa conter:
1. **Que decisão de negócio este modelo apoia.** Uma frase. Se você não consegue escrever, o projeto não tem propósito.
2. Arquitetura em diagrama (Mermaid ou Excalidraw)
3. Baseline vs. modelo, com números
4. **Latência p50 e p99 em ms** e **custo estimado por 1.000 previsões**
5. Como o sistema falha e o que acontece quando falha
6. O que você tentou e **não** funcionou — isto impressiona mais que os acertos
7. Limitações honestas

### A diferença que isso faz numa entrevista

Resposta fraca: "construí um classificador de imagens, cheguei a 95% de acurácia."
Resposta forte: descreve o pipeline de pré-processamento, o tracking de experimentos, o deploy com endpoint vivo, a otimização que cortou latência, e o impacto que aquilo teria em custo e experiência do usuário.

Uma delas demonstra engenharia, impacto e escalabilidade. A outra não demonstra nada.

---

## 9. PROJETO 2 — OPEN SOURCE (PLAYBOOK DO PRIMEIRO PR)

**Meta: 5 a 10 PRs mergeados até o mês 16.**

Por que isso vale mais que qualquer projeto pessoal: seu código foi revisado e aprovado por um engenheiro sênior que não te conhece e não tinha obrigação de ser gentil. É a validação externa mais barata que existe.

### Alvos, em ordem de facilidade

| Repositório | Por que | Onde começar |
|---|---|---|
| **scikit-learn** | Cultura de mentoria excelente, muitas issues marcadas para iniciante | label `good first issue` |
| **Evidently** | Menor, maintainers acessíveis, e é MLOps puro — casa com seu perfil | issues abertas |
| **MLflow** | Você já vai usar no Projeto 1. Contribuir no que você usa é o caminho natural | docs e bugs pequenos |
| **Optuna** | Bem organizado, boa documentação de contribuição | `good first issue` |
| **Polars** | Rápido crescimento, muita coisa a documentar | docs |
| **Hugging Face `datasets` / `transformers`** | Visibilidade alta, mas mais concorrido | docs primeiro |
| **sktime / statsforecast** | Se escolher séries temporais | issues |

### O passo a passo do primeiro PR (siga literalmente)

1. **Escolha 1 repo.** Só um. Use a biblioteca no seu Projeto 1 por pelo menos 3 semanas antes de tentar contribuir.
2. **Leia o `CONTRIBUTING.md` inteiro.** Duas vezes.
3. **Rode os testes localmente** e faça passar. Isso sozinho leva um dia e elimina 80% dos desistentes.
4. **Primeiro PR = documentação.** Um typo, um exemplo faltando, uma docstring confusa. Objetivo aqui não é impressionar, é entender o processo: fork, branch, commit, PR, CI, review, mudanças pedidas, merge.
5. **Segundo PR = teste faltando.** Encontre uma função sem cobertura. Escreva o teste.
6. **Terceiro em diante = bug real.** Filtre issues por `good first issue` + `help wanted` + sem assignee + com discussão já feita.
7. **Comente na issue antes de codar:** "I'd like to work on this. My approach would be X. Does that sound right?" Isso evita trabalho jogado fora e já te apresenta ao maintainer.
8. **Quando pedirem mudanças, agradeça e implemente rápido.** A responsividade é lembrada.

### Tempo esperado
Primeiro PR: 2 a 4 semanas de esforço, com frustração. Do terceiro em diante: 2 a 5 dias cada. É normal ter PR ignorado ou fechado. Não personalize.

---

## 10. PROJETO 3 — CLIENTE REAL

**Meses 13 a 17.** O projeto mais difícil de conseguir e o mais valioso.

### O que é
Um problema de ML resolvido para uma pessoa ou organização de verdade, com prazo, escopo negociado e alguém do outro lado que se importa com o resultado. **De graça está ótimo** — você não está vendendo, está comprando experiência.

### Onde encontrar (em ordem de facilidade)
1. **A empresa onde você trabalha.** Um problema fora do seu escopo, proposto ao gestor. Facílimo e você já tem acesso aos dados.
2. **Negócio de família ou de amigo.** Previsão de demanda para uma loja, churn para uma academia, roteirização para uma distribuidora.
3. **ONG.** `voluntariado.org.br`, ou aborde ONGs locais direto. Muitas têm dados e nenhuma capacidade técnica.
4. **Clínica, escola, pequeno e-commerce local.** Aborde por e-mail com uma proposta concreta de 3 parágrafos, não com "posso ajudar com dados?".

### Regras não negociáveis
- [ ] **Documento de escopo de 1 página, aceito por escrito antes de começar.** Problema, métrica de sucesso, prazo, o que está fora do escopo.
- [ ] Prazo máximo: 10 semanas. Projeto sem prazo não termina.
- [ ] Precisa ir para produção, mesmo que "produção" seja uma planilha atualizada automaticamente ou um bot no WhatsApp.
- [ ] **Você precisa medir o antes e o depois.** Sem número, não é case.
- [ ] **Peça um depoimento por escrito ao final.** 3 frases bastam. Isso vai no LinkedIn.
- [ ] Se envolver dados pessoais, assine um acordo simples de confidencialidade e anonimize tudo que for público.

### O entregável para o portfólio
Um case study em inglês, 800–1200 palavras:
- Contexto do negócio (sem revelar nada confidencial)
- Qual era a dor, em números
- Por que ML e não uma regra simples
- O que você construiu
- **O resultado, em número**
- O que você faria diferente

---

## 11. INGLÊS — PLANO OPERACIONAL

Este é, na estatística de brasileiros que tentam vaga gringa, o gargalo mais comum. Para vagas técnicas, a maioria exige inglês avançado, especialmente na escrita.

### Meta por fase
| Fase | Meta | Como medir |
|---|---|---|
| Mês 1 | Baseline | EF SET (`efset.org`, grátis) |
| Mês 6 | B2 sólido | EF SET + conseguir uma conversa técnica de 30 min |
| Mês 12 | B2+ | Escrever post técnico sem tradutor |
| Mês 18 | C1 | Passar num mock interview em inglês sem travar |
| Mês 22 | C1 confortável | Fazer piada e discordar de alguém em inglês |

### A rotina diária (30 min, virando 1h no mês 18)

**3x por semana — aula com professor (25–30 min)**
`italki.com` ou `preply.com`. Escolha professor de conversação, não de gramática. **Custo: R$ 40–80/aula.** Peça explicitamente: "I want to practice explaining technical work and answering job interview questions."

**2x por semana — produção ativa sozinho**
- Grave-se por 3 min explicando o que fez naquela semana no projeto. Ouça. Anote 3 erros. Refaça.
- Ou: escreva 200 palavras técnicas em inglês. Passe no Grammarly. Estude as correções.

**Todo dia — Anki de vocabulário técnico**
Cartões só com termos que você encontrou lendo, não listas prontas. Foco em *collocations*: "roll out a model", "degrade over time", "trade off latency for accuracy", "reach out to", "loop someone in".

### A partir do mês 18 — mock interviews
- `interviewing.io` — mocks técnicos com engenheiros reais, alguns gratuitos
- `pramp.com` — gratuito, peer-to-peer
- Contrate um professor de italki especificamente para simulação comportamental

### Consumo passivo (não conta como estudo, mas ajuda)
- Séries/filmes com legenda **em inglês**, nunca em português
- Podcasts da §6 em velocidade 1x
- Mude celular, notebook e navegador para inglês. Hoje.

---

## 12. VITRINE: GITHUB, LINKEDIN, CURRÍCULO

Tudo em **inglês**. Sem exceção.

### GitHub
- [ ] README de perfil (`seunome/seunome`): 1 parágrafo sobre você, 3 projetos fixados com 1 linha cada, stack, link para LinkedIn
- [ ] **Repositórios fixados: no máximo 3.** Um repo lixo visível vale menos que zero.
- [ ] Todo repo público tem README de qualidade. Sem exceção.
- [ ] Delete ou torne privado tudo que for tutorial seguido, curso antigo, teste.
- [ ] Commits com mensagens em inglês, no padrão convencional (`feat:`, `fix:`, `docs:`)

### LinkedIn
- [ ] Perfil inteiro em inglês. Headline: `Machine Learning Engineer | Production ML & MLOps | Python, PyTorch, AWS`
- [ ] "Open to work" ligado, com localização **Remote** e países-alvo
- [ ] Seção "About": 3 parágrafos — o que você faz, prova (projetos/números), o que procura
- [ ] Experiência descrita com **verbo de ação + número**. "Reduced forecast error by 18% by replacing a rule-based baseline with a gradient boosting model serving 40k daily predictions."
- [ ] 1 post por mês (o mesmo do §3, Regra 7)

### Currículo
- [ ] **1 página. Uma.** Recrutador gringo descarta 2 páginas de júnior/pleno.
- [ ] Formato: PDF, ATS-friendly (sem coluna dupla, sem ícone, sem foto, sem barra de proficiência)
- [ ] Ordem: Nome/contato/GitHub/LinkedIn → Summary (2 linhas) → Skills → Experience → Projects → Education
- [ ] **Todo bullet tem número.** Sem número, corte o bullet.
- [ ] Adapte para cada vaga: repita as palavras exatas do anúncio nas Skills. O ATS faz correspondência literal.
- [ ] Sem foto. Sem estado civil. Sem CPF. Padrão americano.

---

## 13. CANDIDATURA INTERNACIONAL

### Onde procurar

**Job boards especializados**
- `ai-jobs.net` — só IA/ML, com salários
- `weworkremotely.com`
- `remoteok.com`
- `wellfound.com` (ex-AngelList) — startups
- `jobnagringa.com.br` — curadoria de vagas que aceitam brasileiros
- LinkedIn com filtro "Remote" + país-alvo

**Plataformas de matching**
- Turing, Toptal (aprovação rigorosa, mas pagam bem), Hired

**O canal que funciona melhor: outbound direto**
Job boards têm desempenho ruim para talento de IA. Recrutamento via comunidade e abordagem direta produz resultados melhores. Traduzindo para você: **mande mensagem para o engenheiro, não para o recrutador.**

Template de outbound (adapte, não copie):
> Hi [Name] — I saw your PR on [repo] fixing [thing]. I've been working with [same library] on a production forecasting system ([link]) and ran into a related issue with [specific thing]. Curious how your team handled [specific technical question]. Also — is [company] hiring ML engineers who work remotely from Brazil?

Isso é específico, prova que você é técnico, e faz uma pergunta real. Taxa de resposta muito maior que "estou procurando oportunidades".

### Volume e conversão esperados
- 20 candidaturas/semana durante os meses 22–24
- Taxa de resposta realista: 3 a 8%
- De 200 candidaturas: ~10 conversas iniciais, ~4 processos técnicos, ~1 oferta
- **Isso é normal.** Não é sinal de que você é ruim.

### Filtros que aumentam muito a chance
- Empresas **remote-first desde a fundação** (não as que "adotaram remoto")
- Empresas que já têm brasileiros no time (verifique no LinkedIn)
- Empresas que mencionam "LatAm", "distributed team" ou "async" na descrição
- Fuso: EUA (compatível) > Europa (parcial) > Ásia (evite)

---

## 14. CONTRATO, CNPJ E IMPOSTOS

**Não abra CNPJ antes de ter proposta na mão.**

### Os três formatos

**1. Contractor / PJ** — o mais comum
Você emite invoice mensal, recebe por Wise/Payoneer/Deel. Precisa de CNPJ.
- MEI: teto de R$ 81.000/ano em 2026 (média R$ 6.750/mês). **Você vai estourar.**
- Migre para ME no Simples Nacional: até R$ 360.000/ano, alíquotas progressivas entre ~6% e 19,5% conforme atividade e faturamento.
- Detalhe que economiza dinheiro: serviços prestados ao exterior podem ter isenção de ISS em muitos municípios.

**2. EOR (Employer of Record)** — o mais seguro
Deel, Remote.com e Rippling te contratam formalmente via entidade legal brasileira em nome da empresa estrangeira. Você recebe como CLT, com benefícios, mas trabalha para a empresa de fora. Modelo mais protegido do ponto de vista trabalhista e previdenciário, e cada vez mais comum.

**3. Freelance/plataforma** — Upwork, Toptal. Menos estável, útil como ponte.

### Checklist prático (mês 24, não antes)
- [ ] Contador **que já atenda PJ de tecnologia com faturamento em dólar**. Isso é específico — não vá em qualquer contador.
- [ ] CNAE correto (desenvolvimento de software / consultoria em TI)
- [ ] Conta em Wise ou Payoneer
- [ ] Reserve **30% de cada recebimento** para impostos e câmbio antes de gastar qualquer coisa
- [ ] Leia o contrato inteiro, especialmente: propriedade intelectual, cláusula de rescisão, jurisdição, e o que acontece se o dólar despencar

---

## 15. CHECKPOINTS E CRITÉRIOS DE CORREÇÃO DE ROTA

A cada 3 meses, pare e responda por escrito no `learning-log`:

**Checkpoint trimestral**
1. Cumpri ≥ 80% das horas planejadas? (Se não: o problema é a grade ou a vida? Ajuste a grade, não a culpa.)
2. Meu último commit no Projeto 1 foi há quantos dias? (Mais de 10 = projeto estagnado, é o sinal de alerta mais confiável.)
3. Consigo explicar em inglês, em 3 minutos, o que fiz nos últimos 3 meses?
4. Meu inglês subiu de verdade ou só me acostumei a ouvir?

**Gatilhos de correção de rota**

| Sintoma | Diagnóstico | Ação |
|---|---|---|
| 3 meses sem terminar nada | Escopo grande demais | Corte o Projeto 1 pela metade. Entregue a metade. |
| Estudando muito, construindo pouco | Tutorial hell | Proibido consumir conteúdo novo por 30 dias. Só código. |
| Sem emprego no Brasil até o mês 8 | Currículo ou canal errado | Peça revisão de currículo em comunidade; mude a estratégia de canal; considere vaga de analista mesmo abaixo do que quer. |
| Inglês estagnado no mês 12 | Consumo passivo demais | Troque para 4 aulas/semana com professor. Sem atalho. |
| Motivação zerada por 3 semanas | Cansaço real | Tire 2 semanas totalmente off. O plano tem folga para isso. |
| Consegue emprego gringo antes do mês 24 | Ótimo | Aceite. O plano era a rota, não a regra. |

---

## 16. ARMADILHAS

1. **Esperar 6 projetos antes de aplicar.** Dois bastam para começar. Esperar cinco ou seis custa meses; aplique com dois sólidos enquanto constrói o terceiro — as rejeições iniciais dão sinal do que falta. Comece a aplicar para vagas internacionais no **mês 18**, não no 22.

2. **Confundir pesquisa com engenharia.** O maior erro de contratação em IA é confundir experiência em pesquisa com engenharia de produção. Um candidato que explica a arquitetura de um transformer mas nunca colocou modelo em produção trava o roadmap. Não seja essa pessoa.

3. **Colecionar certificados.** Um certificado do ML Zoomcamp com capstone real vale mais que dez do Coursera. Depois de 2 ou 3, o retorno é zero.

4. **Não terminar o Projeto 1.** Um projeto terminado e no ar vale mais que quatro pela metade. Se precisar cortar escopo, corte — mas termine.

5. **Achar que o emprego brasileiro é "tempo perdido".** Não é. É o item mais valioso do seu currículo. Experiência de produção paga bate qualquer portfólio.

6. **Estudar sozinho.** Entre no Slack da DataTalks.Club, participe. Isolamento mata plano longo.

7. **Ignorar SQL até o fim.** Você vai ser filtrado no ATS. Faça no mês 2 e acabe com isso.

8. **Achar que precisa saber tudo antes de aplicar.** Ninguém sabe. Aplique com 60% dos requisitos.

---

## 17. HONESTIDADE SOBRE PROBABILIDADES + PLANO B

Você pediu um plano com "muita chance de êxito". Vou ser honesto sobre o que isso significa.

**O que este plano garante:** se você completar tudo, no mês 24 você será um ML engineer competente, empregável, com portfólio real, código revisado por terceiros e inglês funcional. Isso é 100% sob seu controle.

**O que este plano não garante:** uma oferta remota internacional em exatamente 24 meses. Isso depende de fatores fora de você — ciclo macroeconômico, política de contratação remota das empresas naquele semestre, sorte no timing. A contratação em big techs em 2026 está normalizada e seletiva, concentrada em IA e ML, não em expansão ampla de headcount. Só cerca de 5% dos anúncios de cientista de dados marcam explicitamente "remoto".

**Minha estimativa honesta, se você completar o plano:**
- Emprego em dados no Brasil até o mês 8: muito provável
- Salto salarial relevante no Brasil até o mês 18: provável
- Oferta remota internacional até o mês 24: possível, mas não o cenário mais provável
- Oferta remota internacional até o mês 36: provável

**Ou seja: prepare-se para 24 meses e não se surpreenda se levar 30 ou 36.** A diferença entre quem chega e quem não chega quase nunca é talento — é quem continua depois do mês 20 quando o entusiasmo já acabou.

### Plano B (que na verdade é um bom plano A alternativo)
Se aos 24 meses não houver oferta gringa, você terá: emprego em ML no Brasil, 3 projetos reais, PRs em open source e inglês C1. Desse ponto, os caminhos são:
- **Consultoria PJ para clientes internacionais** via Upwork/Toptal — mais fácil de entrar que CLT gringo, e vira referência
- **Empresa brasileira que atende cliente global** e paga indexado a dólar (existem várias)
- **Continuar aplicando** — cada 6 meses de experiência adicional dobra sua taxa de resposta

Nenhum desses é fracasso.

---

## RESUMO EM UMA PÁGINA (para imprimir e colar na parede)

```
HOJE:        Inscrever no ML Zoomcamp (começa 14/09/2026) + teste EF SET
MÊS 1-5:     Fundamentos + SQL + emprego no Brasil + começar Projeto 1
MÊS 6-11:    MLOps + deep learning + Projeto 1 no ar
MÊS 12-17:   Especialização + open source (5-10 PRs) + Projeto 3 com cliente
MÊS 18-21:   Preparação de entrevista + inglês para C1 + DDIA
MÊS 22-24:   20 candidaturas/semana + negociação

TODO DIA:    1h30 bloco de estudo/projeto + 30min inglês + 1 commit
TODO SÁBADO: 4h de projeto
TODO MÊS:    1 post técnico em inglês
A CADA 3M:   Checkpoint escrito

REGRA MESTRA: 60% construindo, 30% teoria, 10% escrevendo.
              Se inverter, você parou de progredir.
```
