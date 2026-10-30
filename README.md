# NutriGame — A cesta das boas escolhas

Mini-game educativo em português, feito com HTML, CSS e JavaScript puro, para GitHub Pages. Não exige banco, cadastro ou instalação.

## Jogar

Comece a missão e arraste os cartões para a cesta ou para “Deixar fora da cesta”. Também é possível selecionar com clique/toque e clicar no destino; com teclado, use Tab e Enter.

- Fruta, legume ou verdura na cesta: +10 pontos.
- Ultraprocessado fora da cesta: +5 pontos.
- Destino incorreto, incluindo ultraprocessado na cesta: −5 pontos.
- Cada cartão vale uma única decisão. São 12 cartões e até 90 pontos.
- Desafio: 60 segundos. Prática: sem relógio. Pausa e reinício disponíveis.
- O jogo pausa ao trocar de aba. O recorde é local e separado por modo; bloquear o armazenamento não impede jogar.

## Arquivos

- `index.html`: página e estrutura acessível.
- `style.css`: visual responsivo e animações com redução de movimento.
- `engine.js`: catálogo e regras de pontuação, relógio e pausa.
- `game.js`: interação por ponteiro (mouse/toque), clique e teclado.
- `test.cjs`: testes das regras. Execute `node --test test.cjs`.

## Publicação

Em Settings → Pages, escolha Deploy from a branch, branch main e pasta / (root). Todos os caminhos de arquivos são relativos para funcionar em páginas de projeto.

## Conteúdo educativo

Exemplos baseados no Guia Alimentar para a População Brasileira e no Ministério da Saúde:
https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/in-natura-processados-ultraprocessados-conheca-os-tipos-de-alimento

Nem todo produto industrializado é ultraprocessado. Os cartões de sorvete e salgadinho especificam versões industrializadas; as ilustrações são emojis e podem variar conforme o aparelho. O jogo promove escolhas e aprendizado sem associar alimentos a valor moral.

A imagem do Drive do enunciado não pôde ser acessada; a interface foi criada a partir da descrição da atividade. Fontes Google são opcionais: sem elas, o jogo usa fontes do dispositivo.
