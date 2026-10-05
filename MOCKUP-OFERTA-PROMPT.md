# Prompt — Mockup da oferta (stack do Plano Completo) · Revisão Técnico

> Documento para o GPT produzir a imagem. Estrutura da **skill de mockup digital**: notebook como protagonista, celular ao lado, materiais tangíveis atrás e fundo 100% transparente.

---

## 1. Onde a imagem vai ser usada

A mesma imagem entra em dois lugares da página de vendas:

1. **Topo do card do Plano Completo** (seção Planos), no lugar dos 2 celulares que estão lá hoje. É a área de destaque logo abaixo do preço (R$ 47,90).
2. **Pop-up de downsell** ("Leve o Plano Completo por menos que o Básico", R$ 32,90), no mesmo papel e em tamanho menor.

Os dois cards têm **fundo branco**. Por isso a imagem precisa vir **sem fundo** (PNG transparente), com sombra suave que funcione sobre o branco.

---

## 2. Arquivos para anexar junto com este prompt

| Arquivo (no projeto) | Para quê |
|---|---|
| `public/landing/app/tema/desk-1.webp` | **Tela do notebook.** Print real do app no computador: tema "Higiene das mãos: os 5 momentos" com a prancha ilustrada e o índice lateral |
| `public/landing/app/m-dash.webp` | **Tela do celular.** Print real do painel do app ("Continue de onde parou") |
| `public/interface/brand/revisao-tecnico-horizontal.svg` | Logo horizontal, para as capas dos materiais |
| `public/interface/brand/revisao-tecnico-mark.svg` | Símbolo da marca |

As telas do notebook e do celular **devem usar esses prints reais**, aplicados em perspectiva. Não inventar outra interface: o mockup precisa mostrar exatamente o que a aluna recebe.

---

## 3. O produto (o que o mockup precisa comunicar)

**Revisão Visual para Concurso de Técnico de Enfermagem**, marca **Revisão Técnico**.

É um **aplicativo web** de revisão que funciona no computador e no celular: 8 áreas, 31 temas e 223 questões comentadas. Cada tema tem prancha ilustrada, conteúdo em partes curtas, pegadinhas da banca, resumo final e teste.

O Plano Completo vem acompanhado de **3 materiais bônus** em PDF:

1. **Guia de Cálculos de Enfermagem — Passo a Passo**
2. **Checklist da Reta Final — 7 Dias Antes da Prova**
3. **Guia de Prefixos, Sufixos e Termos da Enfermagem**

Em 1 segundo, a pessoa precisa entender: **"é um aplicativo que eu uso no computador e no celular, e ainda levo 3 guias."**

---

## 4. Mapa da composição

**Formato:** horizontal **4:3**, **2400 × 1800 px**, **PNG com fundo 100% transparente**.

**Ordem visual (o que o olho vê primeiro):**
1. Notebook (o aplicativo, protagonista)
2. Celular ao lado (acesso no celular)
3. Os 3 materiais bônus atrás (valor extra)
4. Sombras de contato que unem o conjunto

### 4.1 Elemento principal — notebook
- **Tipo:** notebook moderno estilo MacBook, alumínio prata, borda de tela fina e preta.
- **Posição:** centro, levemente deslocado para a esquerda; ocupa cerca de **60% da largura** da imagem.
- **Perspectiva:** **3/4 suave**, girado uns 15° para a direita e visto um pouco de cima. A tela fica bem legível, sem distorção forte.
- **Tela:** o print `desk-1.webp` inteiro, aplicado com a mesma perspectiva da tampa. A prancha ilustrada colorida precisa aparecer com clareza; é o elemento mais chamativo da tela.
- **Escala de referência:** notebook = **100%**.

### 4.2 Elemento secundário — celular
- **Tipo:** smartphone moderno (estilo iPhone), moldura escura, Dynamic Island.
- **Posição:** **à direita do notebook**, em pé, na frente da base do notebook, cobrindo levemente o canto inferior direito dele.
- **Escala:** altura de cerca de **55% da altura da tampa** do notebook.
- **Perspectiva:** a mesma do notebook (mesmo ponto de vista e mesma luz), levemente girado para a esquerda, olhando para o centro.
- **Tela:** o print `m-dash.webp`, legível.

### 4.3 Elementos de fundo — os 3 materiais bônus
- **Tipo:** **3 guias impressos em formato livreto/apostila A4**, com espessura real (lombada visível, umas 40 a 80 páginas).
- **Posição:** **atrás do notebook**, em leque ou ligeiramente escalonados, aparecendo por trás e acima da tampa à **esquerda**. A parte de cima de cada capa fica visível o bastante para ler o título.
- **Escala:** cada capa com altura de cerca de **70% da altura da tampa**; parcialmente escondidas pelo notebook.
- **Função:** parecer material de apoio. **Nunca competir com o notebook.**

### 4.4 Sobreposição (frente para trás)
1. **Frente:** celular (na frente do canto inferior direito do notebook)
2. **Meio:** notebook
3. **Trás:** os 3 guias, escalonados (Guia 1 mais à frente, Guia 3 mais ao fundo)

### 4.5 Escala relativa
| Elemento | Escala |
|---|---|
| Notebook | 100% |
| Guias bônus (cada) | ~70% da altura da tampa |
| Celular | ~55% da altura da tampa |

---

## 5. Capas dos 3 guias (criar do zero)

Mesma família visual para os 3, cada um com uma cor de destaque própria, todas da paleta da marca:

| Guia | Título na capa | Cor de destaque | Elemento gráfico sugerido |
|---|---|---|---|
| 1 | **Guia de Cálculos de Enfermagem** · subtítulo "Passo a Passo" | azul-petróleo `#0f5c6e` | seringa e gotas, fórmula de gotejamento estilizada |
| 2 | **Checklist da Reta Final** · subtítulo "7 Dias Antes da Prova" | amarelo `#f6d55c` (com texto escuro `#06262f`) | calendário com 7 dias marcados com ✓ |
| 3 | **Guia de Prefixos, Sufixos e Termos** · subtítulo "da Enfermagem" | verde-água `#5fb3bb` | blocos de palavras (ex.: "-ite", "hiper-", "-algia") |

Em todas as capas:
- selo pequeno **"BÔNUS"** no canto superior;
- logo **Revisão Técnico** pequeno no rodapé da capa;
- tipografia sem serifa, pesada (extra-bold) e legível;
- títulos **legíveis na imagem final**, mesmo pequenos.

---

## 6. Identidade visual (usar exatamente esta)

- **Azul-petróleo (autoridade):** `#0f5c6e`, escuro `#083e4b`, quase preto `#06262f`
- **Verde-água (estrutura):** `#5fb3bb`
- **Amarelo marca-texto (destaque):** `#f6d55c`
- **Off-white do app:** `#f9f8f4`
- **Verde de confirmação:** `#06a742`
- **Tipografia:** sem serifa geométrica, títulos em extra-bold
- **Estilo:** limpo, comercial, contemporâneo; cores com presença e contraste

---

## 7. Luz, sombra e fundo

- **Fundo:** **100% transparente.** Sem parede, sem piso, sem mesa, sem cenário, sem gradiente, sem vinheta.
- **Luz:** única, vinda de cima à esquerda, suave e de estúdio. Telas com brilho próprio leve.
- **Sombras:** sombra de contato suave embaixo do notebook e do celular (semitransparente, que funcione sobre fundo branco) e sombras leves entre os guias e o notebook. Todas na mesma direção.
- **Reflexo:** reflexo discreto no vidro das telas, sem esconder o conteúdo.
- **Bordas:** recorte limpo, sem halo branco ou cinza em volta dos objetos.

---

## 8. Realismo

Render **fotorrealista de produto**, nível de mockup comercial: alumínio com textura real, espessura nos guias, telas nítidas. Todos os objetos no mesmo espaço físico, com perspectiva e luz coerentes.

---

## 9. O que evitar

- Fundo branco, cinza, colorido ou qualquer cenário (tem que ser transparente)
- Tablet, livro de capa dura, caixa de produto, troféu, dourado, selos de "valor de R$"
- Mais de 3 materiais atrás, ou materiais maiores que o notebook
- Interface inventada nas telas (usar os prints reais anexados)
- Telas com perspectiva diferente da do aparelho
- Texto ilegível, letras deformadas ou palavras inventadas nas capas
- Logos de outras marcas (Apple, Windows etc.)
- Pessoas, mãos, plantas, xícaras e objetos decorativos
- Cores lavadas, bege dominante, pastéis apagados

---

## 10. Entregáveis

1. **PNG transparente 2400 × 1800 px** (4:3), versão principal
2. **PNG transparente 1800 × 1800 px** (1:1), mesma composição mais compacta, para o pop-up de downsell no celular

---

## 11. Checklist antes de aprovar

- [ ] Em 1 segundo dá para ver que o notebook é o produto principal?
- [ ] As telas mostram os prints reais do app (prancha ilustrada no notebook, painel no celular)?
- [ ] O celular está ao lado, na frente, com a mesma perspectiva e luz?
- [ ] Os 3 guias estão atrás, menores, com títulos legíveis?
- [ ] O fundo está 100% transparente, com sombras suaves e bordas limpas?
- [ ] Cores e logo são do Revisão Técnico?
- [ ] Nada de cenário, decoração ou marca de terceiros?

---

## 12. Aviso importante (para o dono do produto)

Os 3 guias **ainda não foram produzidos**. A capa pode ser criada agora para o mockup, mas a imagem **só pode ir para a página publicada quando os 3 materiais existirem e estiverem sendo entregues**. Mostrar bônus que a cliente não recebe gera pedido de reembolso.
