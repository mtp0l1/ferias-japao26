/* =========================================================
   JAPÃO 09/2026 — DADOS INICIAIS (seed)
   Edite aqui OU pelo próprio site (localStorage).
   "Restaurar dados iniciais" volta para o conteúdo deste arquivo.
   Campos vazios podem ser omitidos — o app aplica defaults.
   ========================================================= */
window.SEED_DATA = {
  versao: 1,
  meta: {
    titulo: "Japão 2026",
    periodo: "04–22 de setembro de 2026",
    viajante: "Matheus",
    cidades: ["toquio", "kyoto", "osaka"]
  },

  /* ---------- LUGARES ---------- */
  lugares: [
    // ——— Shibuya / Harajuku / Omotesando ———
    { id: "lg-shibuya-crossing", nome: "Shibuya Crossing", cidade: "toquio", bairro: "Shibuya", categoria: "fotos", prioridade: "alta", status: "quero", melhorHorario: "fim de tarde / noite (letreiros acesos)", tempoEstimado: "30 min", notas: "Vista boa também do Starbucks Tsutaya e do Shibuya Sky." },
    { id: "lg-mags-park", nome: "MAG's PARK Rooftop (Shibuya109)", nomeOriginal: "Mags top rooftop", cidade: "toquio", bairro: "Shibuya", categoria: "fotos", prioridade: "media", status: "quero", motivo: "Vista de cima do cruzamento de Shibuya.", verificarPertoDaViagem: true, notas: "[A VERIFICAR] horário e ingresso." },
    { id: "lg-scramble-square", nome: "Shibuya Scramble Square (Shibuya Sky)", nomeOriginal: "Scramble Square", cidade: "toquio", bairro: "Shibuya", categoria: "fotos", prioridade: "alta", status: "quero", precisaIngresso: true, melhorHorario: "pôr do sol (reservar horário com antecedência)", verificarPertoDaViagem: true, notas: "Ingresso do Shibuya Sky costuma esgotar para o pôr do sol. [A VERIFICAR] preço e reserva." },
    { id: "lg-meiji-shrine", nome: "Meiji Shrine + barris de saquê", nomeOriginal: "Meiji Shrine / Sakê Barrels", cidade: "toquio", bairro: "Harajuku / Yoyogi", categoria: "templos", prioridade: "alta", status: "quero", melhorHorario: "manhã cedo, antes da multidão", tempoEstimado: "1h30", notas: "Entrada gratuita. Bom para goshuin." },
    { id: "lg-harajuku", nome: "Harajuku", nomeOriginal: "Harakuju", cidade: "toquio", bairro: "Harajuku", categoria: "bairros", prioridade: "alta", status: "quero", notas: "Nome corrigido de “Harakuju”. Combina com Takeshita, Omotesando e Meiji Shrine no mesmo dia." },
    { id: "lg-takeshita", nome: "Takeshita Street", cidade: "toquio", bairro: "Harajuku", categoria: "bairros", prioridade: "media", status: "quero", melhorHorario: "cedo (lota muito a partir do meio-dia)" },
    { id: "lg-omotesando", nome: "Omotesando", cidade: "toquio", bairro: "Omotesando", categoria: "bairros", prioridade: "alta", status: "quero", motivo: "Arquitetura, flagships, cafés. Perto do Nezu Museum." },
    { id: "lg-gyozaro", nome: "Harajuku Gyozaro (gyoza)", nomeOriginal: "Harakuju Gyozarou", cidade: "toquio", bairro: "Harajuku", categoria: "comida", prioridade: "media", status: "quero", custoEstimado: "barato", notas: "Fila anda rápido." },
    { id: "lg-tonkatsu-omotesando", nome: "Tonkatsu em Omotesando", nomeOriginal: "Tonkatsu omotesando", cidade: "toquio", bairro: "Omotesando", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] qual restaurante — possivelmente Maisen (Aoyama)." },
    { id: "lg-nezu-museum", nome: "Nezu Museum", cidade: "toquio", bairro: "Aoyama / Omotesando", categoria: "museus", prioridade: "alta", status: "quero", precisaIngresso: true, motivo: "Arquitetura de Kengo Kuma + jardim. Combina design e foto.", verificarPertoDaViagem: true, notas: "[A VERIFICAR] se exige reserva online por horário." },
    { id: "lg-number-sugar", nome: "Number Sugar (caramelos)", cidade: "toquio", bairro: "Omotesando", categoria: "cafes", prioridade: "media", status: "quero", motivo: "Caramelo artesanal, embalagem bonita — bom presente." },
    { id: "lg-afuri", nome: "Afuri Ramen", cidade: "toquio", bairro: "Harajuku / Ebisu", categoria: "comida", prioridade: "media", status: "quero", notas: "Ramen de yuzu. Várias unidades." },

    // ——— Shinjuku ———
    { id: "lg-kabukicho", nome: "Kabukicho", cidade: "toquio", bairro: "Shinjuku", categoria: "bairros", prioridade: "media", status: "quero", melhorHorario: "noite", notas: "Ignorar aliciadores de rua (touts)." },
    { id: "lg-3d-cat", nome: "Gato 3D gigante (Cross Shinjuku Vision)", nomeOriginal: "3D Giant Cat Shinjuku", cidade: "toquio", bairro: "Shinjuku", categoria: "fotos", prioridade: "media", status: "quero", notas: "Telão em frente à saída leste da estação Shinjuku. Aparece a cada poucos minutos." },
    { id: "lg-omoide-yokocho", nome: "Omoide Yokocho", cidade: "toquio", bairro: "Shinjuku", categoria: "comida", prioridade: "alta", status: "quero", melhorHorario: "noite", motivo: "Vielas de yakitori, clima retrô — ótimo para foto.", notas: "Lugares pequenos, dinheiro vivo ajuda." },
    { id: "lg-golden-gai", nome: "Golden Gai", nomeOriginal: "Golden Guy", cidade: "toquio", bairro: "Shinjuku", categoria: "bairros", prioridade: "alta", status: "quero", melhorHorario: "noite", notas: "Nome corrigido de “Golden Guy”. Bares minúsculos; alguns cobram cover." },
    { id: "lg-hanazono", nome: "Hanazono Shrine", cidade: "toquio", bairro: "Shinjuku", categoria: "templos", prioridade: "media", status: "quero", notas: "Colado no Golden Gai — dá para combinar." },
    { id: "lg-fuunji", nome: "Fuunji (tsukemen)", cidade: "toquio", bairro: "Shinjuku", categoria: "comida", prioridade: "alta", status: "quero", custoEstimado: "¥1.000–1.500", notas: "Fila famosa. Ir fora do horário de pico. Máquina de tíquetes (dinheiro)." },
    { id: "lg-yodobashi", nome: "Yodobashi Camera (Shinjuku)", nomeOriginal: "Yodobashi", cidade: "toquio", bairro: "Shinjuku", categoria: "games", prioridade: "alta", status: "quero", motivo: "Comprar GoPro para o Fuji + eletrônicos. Tax-free.", fonte: "memória do projeto", notas: "Levar passaporte para tax-free." },

    // ——— Asakusa / Skytree / leste ———
    { id: "lg-sensoji", nome: "Senso-ji", nomeOriginal: "Senso-Ji Temple / Sensoji temple", cidade: "toquio", bairro: "Asakusa", categoria: "templos", prioridade: "alta", status: "quero", melhorHorario: "bem cedo (antes das 8h) ou à noite iluminado", tempoEstimado: "1h30", notas: "Apareceu 2x na lista original — unificado." },
    { id: "lg-nakamise", nome: "Nakamise-dori", nomeOriginal: "Nakamise Street / Nakamise shopping street", cidade: "toquio", bairro: "Asakusa", categoria: "mercados", prioridade: "media", status: "quero", notas: "Rua de acesso ao Senso-ji. Apareceu 2x na lista — unificado. Snacks e souvenirs." },
    { id: "lg-unagi-onigiri", nome: "Onigiri de enguia grelhada", nomeOriginal: "Grilled Unagi Onigiri", cidade: "toquio", bairro: "Asakusa", categoria: "comida", prioridade: "media", status: "quero", notas: "[A VERIFICAR] qual barraca/loja — provável região de Asakusa/Nakamise." },
    { id: "lg-curry-bread", nome: "Curry bread (kare pan)", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", notas: "[A VERIFICAR] padaria específica — candidatas comuns: Cattlea (Yanaka) e padarias de Asakusa." },
    { id: "lg-asakusa-underground", nome: "Asakusa Underground Street", cidade: "toquio", bairro: "Asakusa", categoria: "comida", prioridade: "media", status: "talvez", motivo: "Galeria subterrânea antiga (1955), clima Showa." },
    { id: "lg-kappabashi", nome: "Kappabashi (rua das facas e utensílios)", nomeOriginal: "Kappabashi / Kappabashi street", cidade: "toquio", bairro: "entre Asakusa e Ueno", categoria: "compras", prioridade: "alta", status: "quero", motivo: "Facas japonesas (Kaneyoshi Saku), utensílios de cozinha.", notas: "Apareceu 2x na lista — unificado. Muitas lojas fecham ~17h. Ver regras de faca na bagagem em Info Úteis." },
    { id: "lg-skytree", nome: "Tokyo Skytree", cidade: "toquio", bairro: "Sumida", categoria: "fotos", prioridade: "media", status: "talvez", precisaIngresso: true, verificarPertoDaViagem: true, notas: "Alternativa: ver o Skytree de fora (Jukken Bridge) sem subir." },
    { id: "lg-jukken-bridge", nome: "Jukken Bridge (reflexo do Skytree)", nomeOriginal: "Jukken bridge", cidade: "toquio", bairro: "Sumida", categoria: "fotos", prioridade: "media", status: "quero", melhorHorario: "anoitecer, com o Skytree aceso", notas: "[A VERIFICAR] melhor ponto exato do reflexo no canal." },
    { id: "lg-takagi-shrine", nome: "Takagi Shrine", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] qual santuário — há mais de um Takagi Jinja na região de Sumida." },
    { id: "lg-tobiki-inari", nome: "Tobikiinari Shrine", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] nome e localização exata." },
    { id: "lg-koto-tenso", nome: "Koto Tenso Jinja", cidade: "toquio", bairro: "Koto [A VERIFICAR]", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] localização exata." },
    { id: "lg-sunamachi", nome: "Sunamachi Ginza (shotengai)", cidade: "toquio", bairro: "Koto", categoria: "mercados", prioridade: "media", status: "quero", motivo: "Rua comercial popular, comida barata de rua, zero turística.", melhorHorario: "tarde (muitas barracas abrem depois das 10h30)" },

    // ——— Ueno / Yanaka / Jimbocho ———
    { id: "lg-ueno-park", nome: "Ueno Park", cidade: "toquio", bairro: "Ueno", categoria: "bairros", prioridade: "media", status: "quero", notas: "Museus em volta; combina com Yanaka a pé." },
    { id: "lg-museu-arte-tokyo", nome: "Museu de arte de Tóquio", nomeOriginal: "Museu de arte de tokyo", cidade: "toquio", bairro: "Ueno [A VERIFICAR]", categoria: "museus", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] qual museu — provável Tokyo Metropolitan Art Museum (Ueno) ou MOT (Kiyosumi). Ver exposições na data." },
    { id: "lg-yanaka-ginza", nome: "Yanaka Ginza", cidade: "toquio", bairro: "Yanaka", categoria: "bairros", prioridade: "alta", status: "quero", motivo: "Tóquio antiga (shitamachi), gatos, lojinhas. Ótima caminhada sem pressa.", melhorHorario: "fim de tarde (escadaria do pôr do sol)" },
    { id: "lg-kayaba-coffee", nome: "Kayaba Coffee", cidade: "toquio", bairro: "Yanaka", categoria: "cafes", prioridade: "alta", status: "quero", motivo: "Kissaten de 1938. Pedir o sanduíche de ovo.", verificarPertoDaViagem: true },
    { id: "lg-shitamachi", nome: "Shitamachi (região antiga)", cidade: "toquio", bairro: "Yanaka / Nezu / Sendagi", categoria: "bairros", prioridade: "media", status: "quero", notas: "“Shitamachi” é o nome da região antiga (Yanesen), não um lugar único. Cobre Yanaka Ginza, Nezu Shrine e Kayaba no mesmo passeio." },
    { id: "lg-nezu-shrine", nome: "Nezu Shrine", nomeOriginal: "Nezu Shirine", cidade: "toquio", bairro: "Nezu", categoria: "templos", prioridade: "alta", status: "quero", motivo: "Corredor de toriis vermelhos sem ir a Kyoto. Nome corrigido de “Nezu Shirine”." },
    { id: "lg-jimbocho", nome: "Jimbocho (bairro dos livros)", cidade: "toquio", bairro: "Jimbocho", categoria: "design", prioridade: "media", status: "quero", motivo: "Sebos, livrarias antigas, prints." },
    { id: "lg-bondy", nome: "Bondy (curry europeu)", nomeOriginal: "Restaurante Bondy", cidade: "toquio", bairro: "Jimbocho", categoria: "comida", prioridade: "alta", status: "quero", notas: "Clássico de curry de Jimbocho — combina com o passeio dos livros." },

    // ——— Akihabara ———
    { id: "lg-akihabara", nome: "Akihabara", cidade: "toquio", bairro: "Akihabara", categoria: "games", prioridade: "alta", status: "quero", motivo: "Eletrônicos, retro games, arcades." },
    { id: "lg-gigo", nome: "GiGO Arcades", nomeOriginal: "Gigo Arcades", cidade: "toquio", bairro: "Akihabara", categoria: "games", prioridade: "media", status: "quero", notas: "Vários prédios numerados na região." },
    { id: "lg-super-potato", nome: "Super Potato (retro games)", cidade: "toquio", bairro: "Akihabara", categoria: "games", prioridade: "alta", status: "quero", motivo: "Jogos e consoles retrô. Conferir preços com calma — nem tudo é barato." },

    // ——— Ginza / Tsukiji / baía ———
    { id: "lg-tsukiji", nome: "Tsukiji Outer Market", nomeOriginal: "Tsukiji Outer Market (2x na lista)", cidade: "toquio", bairro: "Tsukiji", categoria: "mercados", prioridade: "alta", status: "quero", melhorHorario: "manhã (muita coisa fecha ~14h)", notas: "Apareceu 2x na lista — unificado. Camiseta do mercado está na lista de compras." },
    { id: "lg-toyosu", nome: "Toyosu Market", cidade: "toquio", bairro: "Toyosu", categoria: "mercados", prioridade: "media", status: "talvez", melhorHorario: "manhã bem cedo", verificarPertoDaViagem: true, notas: "[A VERIFICAR] regras de visita/leilão de atum." },
    { id: "lg-ginza", nome: "Ginza (bairro)", cidade: "toquio", bairro: "Ginza", categoria: "bairros", prioridade: "media", status: "quero", notas: "Rua principal fecha para pedestres nos fins de semana à tarde." },
    { id: "lg-ginza-flagships", nome: "Ginza flagships (Uniqlo, Muji, Itoya…)", nomeOriginal: "Ginza flagships", cidade: "toquio", bairro: "Ginza", categoria: "compras", prioridade: "media", status: "quero", notas: "Uniqlo Ginza (12 andares), Muji Ginza (com hotel), Itoya (papelaria, 12 andares), Dover Street Market (CDG)." },
    { id: "lg-art-aquarium", nome: "Art Aquarium Museum", cidade: "toquio", bairro: "Ginza", categoria: "museus", prioridade: "media", status: "talvez", precisaIngresso: true, verificarPertoDaViagem: true, notas: "[A VERIFICAR] preço e reserva." },
    { id: "lg-muji-ginza", nome: "Muji (flagship Ginza)", nomeOriginal: "Muji", cidade: "toquio", bairro: "Ginza", categoria: "compras", prioridade: "alta", status: "quero", motivo: "Papelaria Muji está na lista de compras. Flagship mundial." },
    { id: "lg-hie-shrine", nome: "Hie Shrine", cidade: "toquio", bairro: "Akasaka", categoria: "templos", prioridade: "media", status: "quero", motivo: "Escadaria de toriis — foto clássica sem multidão de Kyoto." },
    { id: "lg-palacio-imperial", nome: "Palácio Imperial (jardins externos)", nomeOriginal: "Palácio imperial", cidade: "toquio", bairro: "Chiyoda", categoria: "bairros", prioridade: "baixa", status: "talvez", notas: "Jardins do leste são gratuitos; interior não abre ao público normalmente." },

    // ——— Shibuya oeste / Daikanyama / Shimokitazawa / Setagaya ———
    { id: "lg-daikanyama-tsite", nome: "Daikanyama T-Site (Tsutaya Books)", nomeOriginal: "DAIKANYAMA T-SITE / Tsutaya books", cidade: "toquio", bairro: "Daikanyama", categoria: "design", prioridade: "alta", status: "quero", motivo: "Livraria + design + café. “Tsutaya books” da lista provavelmente é aqui — unificado.", tempoEstimado: "1h30" },
    { id: "lg-garden-house", nome: "Garden House Crafts", cidade: "toquio", bairro: "Daikanyama", categoria: "cafes", prioridade: "media", status: "quero", notas: "Padaria/brunch perto do T-Site — combina no mesmo passeio." },
    { id: "lg-shimokitazawa", nome: "Shimokitazawa", cidade: "toquio", bairro: "Shimokitazawa", categoria: "bairros", prioridade: "alta", status: "quero", motivo: "Brechós, vinil, cafés — o bairro mais alinhado com o seu estilo.", tempoEstimado: "meio dia" },
    { id: "lg-gotokuji", nome: "Gotokuji (templo dos maneki-neko)", nomeOriginal: "Gotokuji temple", cidade: "toquio", bairro: "Setagaya", categoria: "templos", prioridade: "media", status: "quero", motivo: "Milhares de gatos da sorte. Combina com Shimokitazawa (mesma linha Odakyu)." },

    // ——— Cafés / padarias / doces (localização a confirmar) ———
    { id: "lg-amam-dacotan", nome: "AMAM DACOTAN (padaria)", nomeOriginal: "Padaria Amamdacotam", cidade: "toquio", bairro: "Omotesando", categoria: "cafes", prioridade: "alta", status: "quero", notas: "Nome corrigido de “Amamdacotam”. Fila grande de manhã.", verificarPertoDaViagem: true },
    { id: "lg-caspace", nome: "Cas:pace", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] nome e endereço — não confirmado." },
    { id: "lg-sweet-check", nome: "Sweet check", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] o que é / onde fica — não confirmado." },
    { id: "lg-eteco-bread", nome: "eteco bread", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] endereço." },
    { id: "lg-shiroi-koibito", nome: "Língua de gato Shiroi Koibito", cidade: "toquio", bairro: "depachika / aeroporto", categoria: "comida", prioridade: "media", status: "quero", notas: "Produto de Hokkaido (Ishiya) — procurar em depachika (porão de depto. de luxo) ou no aeroporto. Também está na lista de compras." },

    // ——— Restaurantes a confirmar ———
    { id: "lg-ichiran", nome: "Ichiran Ramen", cidade: "toquio", bairro: "várias unidades", categoria: "comida", prioridade: "media", status: "quero", notas: "24h em algumas unidades — bom para a noite da chegada." },
    { id: "lg-sushi-kidoguchi", nome: "Sushi Kidoguchi", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", precisaReservar: true, notas: "[A VERIFICAR] endereço e reserva." },
    { id: "lg-sushi-itsutsu", nome: "Sushi Itsutsu", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", precisaReservar: true, notas: "[A VERIFICAR] endereço e reserva." },
    { id: "lg-sushi-masashi", nome: "Sushi Masashi", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", precisaReservar: true, notas: "[A VERIFICAR] endereço e reserva — sushi desse nível costuma exigir reserva com semanas de antecedência." },
    { id: "lg-miyakawa-tempura", nome: "Miyakawa (tempura)", nomeOriginal: "Miyakawa tempura", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] endereço." },
    { id: "lg-menchirashi", nome: "Menchirashi", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] o que é / onde fica." },
    { id: "lg-shodai", nome: "Shodai", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] endereço." },
    { id: "lg-hiro-ramen", nome: "Hiro Ramen", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] endereço." },
    { id: "lg-hamburg-yoshi", nome: "Hamburg Yoshi", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] endereço e se precisa reservar." },
    { id: "lg-shogun-pizza", nome: "Shogun pizza", cidade: "toquio", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] nome exato e endereço." },
    { id: "lg-gyukatsu-divercity", nome: "Gyukatsu Kyoto Katsugyu (DiverCity Odaiba)", nomeOriginal: "Gyukatsu Kyoto Katsugyu Diver City Tokyo Plaza", cidade: "toquio", bairro: "Odaiba", categoria: "comida", prioridade: "media", status: "talvez", notas: "Rede de gyukatsu — há unidades mais centrais se Odaiba não entrar no roteiro." },

    // ——— Segunda mão / mercados de pulga ———
    { id: "lg-bookoff-ikebukuro", nome: "Book Off (Ikebukuro)", nomeOriginal: "Bookoff - Ikebukuro", cidade: "toquio", bairro: "Ikebukuro", categoria: "compras", prioridade: "media", status: "quero", motivo: "Segunda mão: games, mídia, eletrônicos. Há unidades grandes em outros bairros também (Shibuya, Akiba)." },
    { id: "lg-flea-market", nome: "Tokyo City Flea Market (Ohi Racecourse)", nomeOriginal: "Tokyo city flea market", cidade: "toquio", bairro: "Shinagawa", categoria: "mercados", prioridade: "media", status: "talvez", verificarPertoDaViagem: true, notas: "[A VERIFICAR] datas — costuma ser em fins de semana específicos. Conferir calendário para 12/13, 19/20 set." },
    { id: "lg-loft", nome: "Loft (Shibuya)", cidade: "toquio", bairro: "Shibuya", categoria: "compras", prioridade: "alta", status: "quero", motivo: "Papelaria, lâmpada e presentes da lista de compras." },

    // ——— Fora de Tóquio / a confirmar ———
    { id: "lg-jindaiji", nome: "Jindaiji (templo + soba)", cidade: "toquio", bairro: "Chofu (afastado)", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "2º templo mais antigo de Tóquio, área verde, restaurantes de soba. Meio dia de passeio — avaliar se cabe." },
    { id: "lg-takayama", nome: "Takayama", cidade: "outra", bairro: "Gifu", categoria: "fora", prioridade: "baixa", status: "talvez", notas: "[cidade a confirmar] Takayama fica nos Alpes Japoneses (~4h30 de Tóquio) — não é bate-volta viável. Manter só se valer pernoite." },
    { id: "lg-nishiki", nome: "Nishiki Market", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "mercados", prioridade: "alta", status: "quero", notas: "Estava na lista de Tóquio, mas o Nishiki Market fica em Kyoto — movido. Encaixa nos dias 10–12/09." },

    // ——— KYOTO — Templos, santuários e jardins ———
    { id: "lg-tenryuji", nome: "Tenryū-ji", cidade: "kyoto", bairro: "Arashiyama", categoria: "templos", prioridade: "alta", status: "quero" },
    { id: "lg-gioji", nome: "Gio-ji", cidade: "kyoto", bairro: "Arashiyama (Saga)", categoria: "templos", prioridade: "media", status: "quero", notas: "Nome corrigido de 'Giõji'." },
    { id: "lg-otagi-nenbutsuji", nome: "Otagi Nenbutsu-ji", cidade: "kyoto", bairro: "Saga Toriimoto (Arashiyama)", categoria: "templos", prioridade: "alta", status: "quero", notas: "Apareceu 2x na sua lista — unificado. NÃO é o mesmo templo que o Adashino Nenbutsu-ji (abaixo), apesar do nome parecido — confirmei por pesquisa. Ficam na mesma rua, dá pra visitar os dois." },
    { id: "lg-adashino-nenbutsuji", nome: "Adashino Nenbutsu-ji", cidade: "kyoto", bairro: "Saga Toriimoto (Arashiyama)", categoria: "templos", prioridade: "alta", status: "quero", notas: "Templo diferente do Otagi Nenbutsu-ji — este tem ~8.000 estátuas em memória aos mortos sem família; o Otagi tem 1.200 rakan de expressões variadas e mais artístico." },
    { id: "lg-fushimi-inari", nome: "Fushimi Inari Taisha", cidade: "kyoto", bairro: "Fushimi", categoria: "templos", prioridade: "alta", status: "quero", melhorHorario: "manhã bem cedo, antes da multidão" },
    { id: "lg-komyoin", nome: "Komyo-in", cidade: "kyoto", bairro: "Tofuku-ji (Higashiyama/Fushimi)", categoria: "templos", prioridade: "media", status: "quero", notas: "Sub-templo do complexo Tofuku-ji, jardim de pedras Hoshin-tei. Apareceu 2x — unificado." },
    { id: "lg-tofukuji", nome: "Tofuku-ji", cidade: "kyoto", bairro: "Higashiyama/Fushimi", categoria: "templos", prioridade: "alta", status: "quero", notas: "Apareceu 2x — unificado." },
    { id: "lg-kenninji", nome: "Kennin-ji", cidade: "kyoto", bairro: "Gion", categoria: "templos", prioridade: "media", status: "quero", notas: "Apareceu 2x — unificado." },
    { id: "lg-kiyomizudera", nome: "Kiyomizu-dera", cidade: "kyoto", bairro: "Higashiyama", categoria: "templos", prioridade: "alta", status: "quero", notas: "Apareceu 4x na sua lista ('Kiyomizu dera' x2, 'Kiyomizu-dera', 'Kyomizu') — unificado." },
    { id: "lg-ginkakuji", nome: "Ginkaku-ji", cidade: "kyoto", bairro: "Higashiyama (norte)", categoria: "templos", prioridade: "alta", status: "quero" },
    { id: "lg-kinkakuji", nome: "Kinkaku-ji (Pavilhão Dourado)", cidade: "kyoto", bairro: "Kita", categoria: "templos", prioridade: "alta", status: "quero" },
    { id: "lg-kodaiji", nome: "Kodai-ji", cidade: "kyoto", bairro: "Higashiyama", categoria: "templos", prioridade: "media", status: "quero" },
    { id: "lg-nanzenji", nome: "Nanzen-ji complex (+ Konchi-in, aqueduto)", cidade: "kyoto", bairro: "Higashiyama (Nanzen-ji)", categoria: "templos", prioridade: "alta", status: "quero", motivo: "Complexo com o Konchi-in e o aqueduto de tijolos (Suirokaku) dentro do próprio terreno — dá pra ver tudo na mesma parada." },
    { id: "lg-yasaka-shrine", nome: "Yasaka Shrine", cidade: "kyoto", bairro: "Gion", categoria: "templos", prioridade: "alta", status: "quero", notas: "Apareceu 2x — unificado." },
    { id: "lg-hokanji", nome: "Hokan-ji (Pagode Yasaka)", cidade: "kyoto", bairro: "Higashiyama", categoria: "templos", prioridade: "media", status: "quero" },
    { id: "lg-kitano-tenmangu", nome: "Kitano Tenmangu Shrine", cidade: "kyoto", bairro: "Kamishichiken", categoria: "templos", prioridade: "media", status: "quero", notas: "Nome corrigido de 'Kitano Tenmagu Shire'." },
    { id: "lg-tenjuan", nome: "Tenju-an", cidade: "kyoto", bairro: "Higashiyama (Nanzen-ji)", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "Sub-templo do Nanzen-ji com jardim próprio — ingresso separado do complexo principal." },
    { id: "lg-saihoji", nome: "Saihō-ji (Kokedera)", cidade: "kyoto", bairro: "Nishikyo", categoria: "templos", prioridade: "baixa", status: "talvez", verificarPertoDaViagem: true, notas: "[A VERIFICAR] costuma exigir reserva por carta/formulário com bastante antecedência — não é visita espontânea." },
    { id: "lg-jizoin", nome: "Jizō-in (Templo do Bambu)", cidade: "kyoto", bairro: "Arashiyama (Saga)", categoria: "templos", prioridade: "baixa", status: "talvez" },
    { id: "lg-matsunoo-taisha", nome: "Matsuno-o Taisha", cidade: "kyoto", bairro: "Nishikyo (Arashiyama)", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "Nome provável — sua lista tinha 'Matsuotaisha'." },
    { id: "lg-otani-honbyo", nome: "Otani Hombyo", cidade: "kyoto", bairro: "Higashiyama", categoria: "templos", prioridade: "baixa", status: "talvez" },
    { id: "lg-yasaka-koshindo", nome: "Yasaka Koshin-do", cidade: "kyoto", bairro: "Higashiyama (perto do Yasaka Shrine)", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "Diferente do Yasaka Shrine, apesar do nome parecido — santuário pequeno e colorido, boa foto." },
    { id: "lg-reigenin", nome: "Reigen-in", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "templos", prioridade: "baixa", status: "talvez", verificarPertoDaViagem: true, notas: "[A VERIFICAR] a qual complexo pertence e se abre normalmente ao público." },
    { id: "lg-sanjusangendo", nome: "Sanjūsangen-do", cidade: "kyoto", bairro: "Higashiyama (perto da Est. Kyoto)", categoria: "templos", prioridade: "alta", status: "quero", notas: "1.001 estátuas de Kannon." },

    // ——— KYOTO — Bairros, ruas e natureza ———
    { id: "lg-gion-bairro", nome: "Gion (bairro)", cidade: "kyoto", bairro: "Gion", categoria: "bairros", prioridade: "alta", status: "quero" },
    { id: "lg-higashiyama-bairro", nome: "Higashiyama (bairro)", cidade: "kyoto", bairro: "Higashiyama", categoria: "bairros", prioridade: "media", status: "talvez", notas: "Distrito amplo que já cobre Kiyomizu-dera, Gion, Yasaka, Kodai-ji, Ninenzaka/Sannenzaka — pode ser redundante como item separado. Sua escolha manter ou remover." },
    { id: "lg-ninenzaka-sannenzaka", nome: "Ninenzaka e Sannenzaka", cidade: "kyoto", bairro: "Higashiyama", categoria: "bairros", prioridade: "alta", status: "quero" },
    { id: "lg-pontocho", nome: "Pontocho Alley", cidade: "kyoto", bairro: "centro (rio Kamo)", categoria: "bairros", prioridade: "alta", status: "quero", melhorHorario: "noite" },
    { id: "lg-kamo-river", nome: "Rio Kamo (passeio à beira-rio)", cidade: "kyoto", bairro: "centro", categoria: "bairros", prioridade: "media", status: "quero" },
    { id: "lg-arashiyama-bamboo", nome: "Arashiyama Bamboo Grove", cidade: "kyoto", bairro: "Arashiyama", categoria: "bairros", prioridade: "alta", status: "quero", melhorHorario: "bem cedo, antes da multidão" },
    { id: "lg-togetsukyo", nome: "Togetsukyo Bridge", cidade: "kyoto", bairro: "Arashiyama", categoria: "fotos", prioridade: "media", status: "quero" },
    { id: "lg-philosophers-path", nome: "Philosopher's Path", cidade: "kyoto", bairro: "Higashiyama (Ginkaku-ji a Nanzen-ji)", categoria: "bairros", prioridade: "alta", status: "quero", notas: "Combina bem com Ginkaku-ji e Nanzen-ji no mesmo passeio." },
    { id: "lg-nishijin", nome: "Nishijin (bairro)", cidade: "kyoto", bairro: "Nishijin", categoria: "bairros", prioridade: "media", status: "quero" },
    { id: "lg-fushimi-sake", nome: "Fushimi (bairro das destilarias de saquê)", cidade: "kyoto", bairro: "Fushimi", categoria: "bairros", prioridade: "media", status: "quero" },
    { id: "lg-kurama-kibune", nome: "Kurama e Kibune", cidade: "kyoto", bairro: "norte de Kyoto (montanhas)", categoria: "fora", prioridade: "media", status: "talvez", notas: "Excursão de meio dia/dia inteiro — trilha + onsen + restaurantes sobre o rio. Une 'Kurama/Kihune' e 'Mount Kurama' da sua lista." },
    { id: "lg-saga-toriimoto-street", nome: "Saga Toriimoto Street", cidade: "kyoto", bairro: "Arashiyama (Saga)", categoria: "bairros", prioridade: "media", status: "quero", notas: "Rua tradicional preservada, acesso aos templos Otagi/Adashino Nenbutsu-ji." },

    // ——— KYOTO — Bate-volta ———
    { id: "lg-uji", nome: "Uji (bate-volta — chá matcha)", cidade: "kyoto", bairro: "Uji", categoria: "fora", prioridade: "alta", status: "quero", notas: "Já combina com o Nintendo Museum no dia 11/09." },
    { id: "lg-amanohashidate", nome: "Amanohashidate", cidade: "kyoto", bairro: "norte de Kyoto (litoral)", categoria: "fora", prioridade: "baixa", status: "talvez", verificarPertoDaViagem: true, notas: "[A VERIFICAR] ~2h de trem de Kyoto — dia inteiro, avaliar se cabe no roteiro." },

    // ——— KYOTO — Compras ———
    { id: "lg-goat-kyoto", nome: "GOAT Kyoto Shijo (camisas vintage)", cidade: "kyoto", bairro: "Shijo", categoria: "compras", prioridade: "alta", status: "quero", fonte: "memória do projeto" },
    { id: "lg-teramachi-dori", nome: "Teramachi-dori", cidade: "kyoto", bairro: "centro", categoria: "compras", prioridade: "media", status: "quero", notas: "Nome corrigido de 'Teremachi Don Street'." },
    { id: "lg-shinkyogoku", nome: "Shinkyogoku Shopping Street", cidade: "kyoto", bairro: "centro", categoria: "compras", prioridade: "media", status: "quero" },
    { id: "lg-kyukyodo", nome: "Kyukyodo (papelaria/incenso)", cidade: "kyoto", bairro: "centro", categoria: "design", prioridade: "alta", status: "quero", notas: "Apareceu 2x — unificado." },
    { id: "lg-dedepartment-kyoto", nome: "D&Department Kyoto", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "design", prioridade: "media", status: "quero", notas: "Nome corrigido de 'D&Departament'." },

    // ——— KYOTO — Design, livros e papelaria ———
    { id: "lg-le-labo-kyoto", nome: "Le Labo Kyoto Machiya (perfumaria + café)", cidade: "kyoto", bairro: "centro (machiya)", categoria: "cafes", prioridade: "media", status: "quero", notas: "Une 'Le labo' e 'Le labo café' da sua lista — é a mesma loja, uma perfumaria numa casa machiya restaurada com café integrado." },

    // ——— KYOTO — Games e tecnologia ———
    { id: "lg-nintendo-kyoto-store", nome: "Nintendo Kyoto (loja)", cidade: "kyoto", bairro: "centro", categoria: "games", prioridade: "alta", status: "quero", notas: "Une 'Nintendo Kyoto' e 'Nintendo Store' — mesma loja oficial." },

    // ——— KYOTO — Museus, mercados e experiências ———
    { id: "lg-samurai-ninja-museum", nome: "Samurai & Ninja Museum", cidade: "kyoto", bairro: "centro", categoria: "museus", prioridade: "baixa", status: "talvez" },
    { id: "lg-kyoto-intl-manga-museum", nome: "Kyoto International Manga Museum", cidade: "kyoto", bairro: "centro", categoria: "museus", prioridade: "media", status: "quero" },

    // ——— KYOTO — Cafés e padarias ———
    { id: "lg-sarasa-nishijin", nome: "Sarasa Nishijin", cidade: "kyoto", bairro: "Nishijin", categoria: "cafes", prioridade: "media", status: "quero", fonte: "memória do projeto" },
    { id: "lg-motoi-gyoza", nome: "Motoi Gyoza", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", notas: "Apareceu 2x — unificado." },
    { id: "lg-hikiniku-to-come", nome: "Hikiniku To Come", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", notas: "Apareceu 2x (diferença de maiúsculas) — unificado." },

    // ——— KYOTO — Comida e restaurantes ———
    { id: "lg-ichiran-kyoto", nome: "Ichiran Ramen (Kyoto)", cidade: "kyoto", bairro: "várias unidades", categoria: "comida", prioridade: "media", status: "quero", notas: "ID separado de 'lg-ichiran' (Tóquio) para não duplicar." },
    { id: "lg-yamacho", nome: "Yamacho (unagi)", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", verificarPertoDaViagem: true, notas: "[A VERIFICAR] só abre em dias de semana — checar antes de planejar." },
    { id: "lg-tensuke", nome: "Tensuke (tempura)", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", verificarPertoDaViagem: true, notas: "[A VERIFICAR] fechado às segundas." },
    { id: "lg-tonys", nome: "Tony's", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "media", status: "quero", verificarPertoDaViagem: true, notas: "[A VERIFICAR] fechado às segundas." },
    { id: "lg-amam-dacotan-arashiyama", nome: "AMAM DACOTAN (Arashiyama)", cidade: "kyoto", bairro: "Arashiyama", categoria: "cafes", prioridade: "media", status: "quero", notas: "ID separado de 'lg-amam-dacotan' (Tóquio/Omotesando) para não duplicar — pode ser a mesma marca em unidade diferente." },
    { id: "lg-tsukimochiya-kawamichiya", nome: "Kawamichiya (soba tradicional)", cidade: "kyoto", bairro: "centro", categoria: "comida", prioridade: "media", status: "talvez", notas: "Nome provável a partir da sua lista." },
    { id: "lg-katcto", nome: "Kacto", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável — checar mais perto da viagem." },
    { id: "lg-yagi", nome: "Yagi", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-sugari", nome: "Sugari", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-wakabaya", nome: "Wakabaya", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-rikka-knot", nome: "Rikka Knot", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-sowgen", nome: "Sowgen", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-pelgag", nome: "Pelgag", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-kyo-amahare", nome: "Kyo Amahare", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-nuunu-kyoto", nome: "Nuunu Kyoto", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-matsubata", nome: "Matsubata", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-kyoto-ranzan", nome: "Kyoto Ranzan", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-a-too", nome: "A-too", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-ojamakan", nome: "Ojamakan", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-japan-edition", nome: "Japan Edition", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-niitodo", nome: "Niitodo", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-onigiri-ranma", nome: "Onigiri Ranma", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-renkonya", nome: "Renkonya", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-sway", nome: "Sway", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-saryo-tesshin", nome: "Saryo Tesshin", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-yamamoto-menzou", nome: "Yamamoto Menzou", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-kyoto-engine-ramen", nome: "Kyoto Engine Ramen", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-public-tokyo-kyoto", nome: "Public Tokyo (Kyoto)", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável — nome sugere marca de Tóquio com unidade em Kyoto." },
    { id: "lg-sanjo-dori", nome: "Sanjo-dori", cidade: "kyoto", bairro: "centro", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "Nome corrigido de 'Sanja Street' (não confirmado)." },
    { id: "lg-yusai-tei", nome: "Arashiyama Yusai-tei", cidade: "kyoto", bairro: "Arashiyama", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-junsei", nome: "Junsei (tofu kaiseki)", cidade: "kyoto", bairro: "Higashiyama (Nanzen-ji)", categoria: "comida", prioridade: "media", status: "quero", notas: "Tradicional, ao lado do Nanzen-ji — bom pra um almoço leve depois do templo." },

    // ——— OSAKA — Fora de Kyoto (sugestão: mover pra Osaka) ———
    { id: "lg-katsuoji", nome: "Katsuo-ji Temple", cidade: "osaka", bairro: "Minoh", categoria: "templos", prioridade: "baixa", status: "talvez", notas: "Estava na sua lista de Kyoto, mas fica em Minoh (região metropolitana de Osaka) — confirmado por pesquisa: ~1h de Osaka, ~1h30-2h de Kyoto via trem+ônibus. Movido para cidade:'osaka'; melhor encaixar num dos dias livres de Osaka (13-15/09) do que tentar como bate-volta de Kyoto." },

    { id: "lg-chureito-pagoda", nome: "Chureito Pagoda (Arakurayama Sengen Park)", cidade: "kawaguchiko", bairro: "Fujiyoshida", categoria: "fotos", prioridade: "alta", status: "quero", melhorHorario: "antes das 8h (evitar excursões)", motivo: "Vista clássica do Fuji com o pagode em primeiro plano — a foto mais icônica da região.", notas: "Sugestão clássica/óbvia pra preencher Kawaguchiko — ainda sem lugares específicos seus. Envolve subir escadas até o mirante." },
    { id: "lg-oishi-park", nome: "Oishi Park", cidade: "kawaguchiko", bairro: "margem norte do lago Kawaguchiko", categoria: "fotos", prioridade: "media", status: "quero", motivo: "Caminhada fácil na margem do lago com vista do Fuji, sem custo.", notas: "Sugestão clássica pra preencher — confirmar mais perto da data." },
    { id: "lg-kawaguchiko-music-forest", nome: "Kawaguchiko Music Forest Museum", cidade: "kawaguchiko", bairro: "margem do lago Kawaguchiko", categoria: "museus", prioridade: "baixa", status: "talvez", motivo: "Museu de caixas de música com jardim estilo europeu à beira do lago.", notas: "Sugestão clássica pra preencher — opcional, avaliar tempo disponível entre a descida do Fuji e o deslocamento a Kyoto." },
    { id: "lg-kachikachiyama-ropeway", nome: "Kachi Kachi Yama Ropeway (Mt. Fuji Panoramic Ropeway)", cidade: "kawaguchiko", bairro: "margem do lago Kawaguchiko", categoria: "fotos", prioridade: "media", status: "talvez", motivo: "Teleférico curto com vista panorâmica do Fuji e do lago do alto.", notas: "Sugestão clássica pra preencher." },
    { id: "lg-fujiq-highland", nome: "Fuji-Q Highland", cidade: "kawaguchiko", bairro: "Fujiyoshida", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Parque de diversões famoso pelas montanhas-russas radicais, com o Fuji ao fundo.", notas: "Sugestão clássica pra preencher — só cabe se sobrar tempo/energia fora dos dias de subida (08–09/09)." },
    { id: "lg-daibutsu-kotokuin", nome: "Great Buddha (Kotoku-in)", cidade: "kamakura", bairro: "Hase", categoria: "templos", prioridade: "alta", status: "quero", motivo: "O Grande Buda de Kamakura — estátua de bronze de 750 anos, símbolo da cidade.", notas: "Sugestão clássica pra preencher Kamakura — encaixar antes/depois do Yabusame no dia 16/09, se der tempo." },
    { id: "lg-hasedera-kamakura", nome: "Hase-dera", cidade: "kamakura", bairro: "Hase", categoria: "templos", prioridade: "media", status: "quero", motivo: "Templo com vista da baía de Kamakura, famoso pelas hortênsias e pelo santuário de Kannon.", notas: "Sugestão clássica pra preencher — fica a poucos minutos a pé do Grande Buda." },
    { id: "lg-tsurugaoka-hachimangu", nome: "Tsurugaoka Hachiman-gū", cidade: "kamakura", bairro: "centro de Kamakura", categoria: "templos", prioridade: "alta", status: "quero", motivo: "Principal santuário de Kamakura — é onde tradicionalmente acontecem as cerimônias de Yabusame.", notas: "Provável local do Yabusame do dia 16/09 — confirmar local exato do evento perto da data." },
    { id: "lg-komachi-dori", nome: "Komachi-dori", cidade: "kamakura", bairro: "centro de Kamakura", categoria: "comida", prioridade: "media", status: "talvez", motivo: "Rua de comércio e comidinhas de rua entre a estação e o Tsurugaoka Hachiman-gū.", notas: "Sugestão clássica pra preencher — bom pra comer algo rápido entre uma atração e outra." },
    { id: "lg-himeji-castle", nome: "Castelo de Himeji", cidade: "himeji", bairro: "centro de Himeji", categoria: "fotos", prioridade: "alta", status: "confirmado", motivo: "Castelo mais bem preservado do Japão, Patrimônio Mundial da UNESCO — já está no roteiro do dia 14/09.", notas: "Já estava no roteiro (bate-volta de Osaka); adicionado aqui como lugar pra aparecer na aba de Himeji." },
    { id: "lg-kokoen", nome: "Jardim Koko-en", cidade: "himeji", bairro: "ao lado do Castelo de Himeji", categoria: "fotos", prioridade: "alta", status: "confirmado", motivo: "Conjunto de jardins japoneses tradicionais logo ao lado do castelo.", notas: "Já estava no roteiro do dia 14/09; adicionado aqui como lugar pra aparecer na aba de Himeji." },
    { id: "lg-otemae-dori", nome: "Otemae-dori", cidade: "himeji", bairro: "entre a estação e o castelo", categoria: "bairros", prioridade: "baixa", status: "talvez", motivo: "Avenida principal ligando a estação ao castelo, com restaurantes pra comer antes de voltar a Osaka.", notas: "Sugestão clássica pra preencher." },
    { id: "lg-himeji-art-museum", nome: "Himeji City Museum of Art", cidade: "himeji", bairro: "próximo ao Castelo de Himeji", categoria: "museus", prioridade: "baixa", status: "talvez", motivo: "Museu de arte a poucos minutos a pé do castelo.", notas: "Sugestão clássica pra preencher — opcional, só se sobrar tempo no bate-volta." },
    { id: "lg-engyoji", nome: "Engyō-ji (Monte Shosha)", cidade: "himeji", bairro: "Monte Shosha", categoria: "templos", prioridade: "baixa", status: "talvez", motivo: "Complexo de templos no topo da montanha, acesso de teleférico; cenário de filmagem de 'O Último Samurai'.", notas: "Sugestão clássica pra preencher — provavelmente não cabe no mesmo bate-volta do castelo, é um passeio à parte de meio período." },

    // ——— Adições a pedido do usuário: lista pessoal de Kyoto + clichês p/ Osaka/Kawaguchiko/Kamakura/Himeji ———
    { id: "lg-arashiyama-monkey-park", nome: "Arashiyama Monkey Park Iwatayama", cidade: "kyoto", bairro: "Arashiyama", categoria: "fora", prioridade: "media", status: "quero", motivo: "Parque com mais de 100 macacos-japoneses soltos e vista de Kyoto do alto — subida a pé de uns 20 min." },
    { id: "lg-pottery-tanuki", nome: "Pottery Tanuki", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-vou", nome: "VOU", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-ninenzaka-cafe-garakuta", nome: "Ninenzaka Café Garakuta", cidade: "kyoto", bairro: "Ninenzaka (Higashiyama)", categoria: "cafes", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] confirmar horário de funcionamento mais perto da data." },
    { id: "lg-takaragaike-park", nome: "Takaragaike Park", cidade: "kyoto", bairro: "norte de Kyoto (Sakyo)", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Parque com lago grande e trilha tranquila — bom pra caminhar sem pressa, fora do circuito turístico." },
    { id: "lg-coyote-ordinary-shop", nome: "Coyote the Ordinary Shop", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-planet-kamigyo", nome: "Planet (447-5 Kajiicho, Kamigyo Ward)", cidade: "kyoto", bairro: "Kamigyo", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] endereço que você anotou — confirmar o que é (loja/galeria/café) mais perto da data." },
    { id: "lg-stardust-kyoto", nome: "Stardust", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-jikkokubune", nome: "Jikkokubune (passeio de barco)", cidade: "kyoto", bairro: "Fushimi", categoria: "fora", prioridade: "media", status: "quero", motivo: "Passeio de barco tradicional pelo canal de Fushimi, perto das destilarias de saquê.", notas: "Referência sua: @kyotofushimikankou — confirmar horários e reserva mais perto da data." },
    { id: "lg-kawai-kanjiro-house", nome: "Kawai Kanjiro's House", cidade: "kyoto", bairro: "Higashiyama (Gojozaka)", categoria: "museus", prioridade: "media", status: "quero", motivo: "Casa-ateliê do ceramista Kawai Kanjirō preservada com fornos e peças originais — bom encaixe pra quem gosta de design/artesanato." },
    { id: "lg-poj-studio", nome: "POJ Studio", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-lisn-kyoto", nome: "Lisn", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "compras", prioridade: "media", status: "talvez", motivo: "Loja de incensos contemporânea (marca irmã da Shoyeido) — embalagens bonitas, boa pra presente/lembrança.", notas: "[A VERIFICAR] confirmar endereço exato mais perto da data." },
    { id: "lg-shinpuhkan", nome: "ShinPuhKan", cidade: "kyoto", bairro: "centro de Kyoto (Nijo)", categoria: "compras", prioridade: "media", status: "talvez", motivo: "Complexo de lojas de moda/design instalado num prédio histórico da telefônica — mistura arquitetura e compras." },
    { id: "lg-kotoro-coffee", nome: "Kotoro Coffee", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-kyocera-museum", nome: "Kyoto City Kyocera Museum of Art", cidade: "kyoto", bairro: "Okazaki", categoria: "museus", prioridade: "media", status: "talvez", motivo: "Principal museu de arte de Kyoto, prédio de 1933 renovado — fica perto do Philosopher's Path e do Nanzen-ji." },
    { id: "lg-okochi-sanso", nome: "Okochi Sanso Garden", cidade: "kyoto", bairro: "Arashiyama", categoria: "fotos", prioridade: "media", status: "quero", motivo: "Jardim/vila de um ator do cinema mudo japonês no alto de Arashiyama — vista da cidade, com chá incluso na entrada." },
    { id: "lg-murakami-kaishindo", nome: "Murakami Kaishindo", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "comida", prioridade: "media", status: "talvez", motivo: "Doceria tradicional conhecida pelo kompeitō (balinha colorida artesanal) — boa pra levar de lembrança." },
    { id: "lg-chocolat-nakagyo", nome: "Chocolat (Nakagyo Ward)", cidade: "kyoto", bairro: "Nakagyo", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável — nome sugere chocolateria." },
    { id: "lg-gyukatsu-katsugyu", nome: "Gyukatsu Kyoto Katsugyu", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "comida", prioridade: "media", status: "quero", motivo: "Rede famosa de gyukatsu (bife empanado à milanesa que você mesmo grelha na chapa da mesa).", notas: "Você também listou como 'Kyoto Katsugyu' — é o mesmo lugar, entrada única." },
    { id: "lg-nijo-castle", nome: "Nijo Castle", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "fotos", prioridade: "alta", status: "quero", motivo: "Castelo Patrimônio Mundial da UNESCO, famoso pelos 'pisos-rouxinol' que rangem contra invasores." },
    { id: "lg-ryozen-kannon", nome: "Ryozen Kannon", cidade: "kyoto", bairro: "Higashiyama", categoria: "templos", prioridade: "baixa", status: "talvez", motivo: "Estátua enorme de concreto em homenagem aos mortos da Segunda Guerra — memorial pouco visitado, perto do Kiyomizu-dera." },
    { id: "lg-kura-sushi-kyoto", nome: "Kura Sushi", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "baixa", status: "talvez", motivo: "Rede de sushi giratório (kaiten-zushi) bem avaliada e barata.", notas: "[A VERIFICAR] confirmar a unidade mais próxima da sua hospedagem." },
    { id: "lg-rio-katsura", nome: "Rio Katsura", cidade: "kyoto", bairro: "Arashiyama", categoria: "fotos", prioridade: "baixa", status: "talvez", motivo: "Rio que passa sob a Ponte Togetsukyo, na mesma área da Bamboo Grove — dá pra combinar no mesmo passeio." },
    { id: "lg-ramen-factory", nome: "Ramen Factory", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-kamishichiken", nome: "Kamishichiken", cidade: "kyoto", bairro: "Kamigyo", categoria: "bairros", prioridade: "media", status: "talvez", motivo: "Bairro de gueixas mais antigo de Kyoto — mais tranquilo e menos turístico que Gion." },
    { id: "lg-hozugawa-river", nome: "Hozugawa River (descida de barco)", cidade: "kyoto", bairro: "Arashiyama/Kameoka", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Descida de rio de cerca de 2h em barco tradicional remado, terminando perto da Bamboo Grove — passeio de meio período." },
    { id: "lg-hanamikoji-street", nome: "Hanamikoji Street", cidade: "kyoto", bairro: "Higashiyama/Gion", categoria: "bairros", prioridade: "alta", status: "quero", motivo: "Rua principal de Gion, com casas machiya preservadas — melhor no fim de tarde/início da noite (chance de ver gueixas/maiko)." },
    { id: "lg-itoh-dining", nome: "Itoh Dining", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-gion-sushi-shokichi", nome: "Gion Sushi Shokichi", cidade: "kyoto", bairro: "Higashiyama/Gion", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] nome sugere sushi em Gion — confirmar detalhes e reserva mais perto da data." },
    { id: "lg-aman-living-pavilion", nome: "Aman Kyoto — Living Pavilion", cidade: "kyoto", bairro: "norte de Kyoto (Takagamine)", categoria: "cafes", prioridade: "baixa", status: "talvez", motivo: "Café/salão do hotel Aman Kyoto, em meio a um bosque.", notas: "[A VERIFICAR] confirmar se aceita não-hóspedes sem reserva — preço tende a ser alto." },
    { id: "lg-kyoto-gyoen", nome: "Kyoto Gyoen (Jardim do Palácio Imperial)", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "fotos", prioridade: "media", status: "quero", motivo: "Parque enorme e gratuito ao redor do antigo Palácio Imperial — bom pra caminhar sem pressa." },
    { id: "lg-murin-an", nome: "Murin-an Garden", cidade: "kyoto", bairro: "Okazaki", categoria: "fotos", prioridade: "media", status: "talvez", motivo: "Jardim de estilo japonês da era Meiji perto do Philosopher's Path — menos concorrido que os grandes templos." },
    { id: "lg-tsujikura", nome: "Tsujikura", cidade: "kyoto", bairro: "Higashiyama/Gion", categoria: "compras", prioridade: "media", status: "talvez", motivo: "Loja tradicional de guarda-chuvas e lanternas de papel (wagasa/chōchin) — peças bonitas pra decoração." },
    { id: "lg-issey-miyake-kyoto", nome: "Issey Miyake", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "compras", prioridade: "media", status: "talvez", motivo: "Loja da grife japonesa de moda/design — combina com seu interesse em design.", notas: "[A VERIFICAR] confirmar endereço da unidade em Kyoto mais perto da data." },
    { id: "lg-starbucks-yasaka-chaya", nome: "Starbucks Yasaka Chaya", cidade: "kyoto", bairro: "Higashiyama", categoria: "cafes", prioridade: "media", status: "talvez", motivo: "Starbucks dentro de uma casa machiya de 100 anos, com sala em tatame — uma das lojas mais fotografadas da rede no mundo." },
    { id: "lg-tempura-ten-no-meshi", nome: "Kyoto Tempura Ten no Meshi Gionhonten", cidade: "kyoto", bairro: "Higashiyama/Gion", categoria: "comida", prioridade: "media", status: "talvez", motivo: "Especializado em donburi de tempura, no meio de Gion — bom pra almoço rápido e bem avaliado." },
    { id: "lg-shijo-dori", nome: "Shijo Dori Street", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "bairros", prioridade: "media", status: "talvez", motivo: "Principal rua de compras de Kyoto, liga Gion ao centro — passagem natural entre pontos do roteiro." },
    { id: "lg-travelers-factory-kyoto", nome: "Travelers Factory Kyoto", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "design", prioridade: "media", status: "quero", motivo: "Loja da marca de cadernos Traveler's Notebook — combina com seu interesse em papelaria." },
    { id: "lg-weekenders-coffee", nome: "Weekenders Coffee", cidade: "kyoto", bairro: "centro de Kyoto", categoria: "cafes", prioridade: "media", status: "quero", motivo: "Uma das cafeterias de especialidade mais respeitadas de Kyoto — espaço pequeno e simples, foco total no café." },
    { id: "lg-walden-woods-kyoto", nome: "Walden Woods Kyoto", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] confirmar endereço mais perto da data." },
    { id: "lg-tendon-makino", nome: "Tendon Makino", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-sushiro-kyoto", nome: "Sushiro", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "baixa", status: "talvez", motivo: "Rede de sushi giratório (kaiten-zushi) popular e barata.", notas: "[A VERIFICAR] confirmar a unidade mais próxima da sua hospedagem." },
    { id: "lg-davada-coffee-records", nome: "Davada Coffee & Records", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável — nome sugere café com discos de vinil." },
    { id: "lg-good-morning-record-bar", nome: "Good Morning Record Bar", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-cafe-bibliotic-hello", nome: "Café Bibliotic Hello!", cidade: "kyoto", bairro: "Nakagyo", categoria: "cafes", prioridade: "media", status: "talvez", motivo: "Café-livraria-galeria num casarão antigo, com jardim — clássico de Kyoto pra sentar sem pressa." },
    { id: "lg-jazz-spot-yamatoya", nome: "Jazz Spot Yamatoya", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", motivo: "Jazz kissa (bar-café de jazz old-school, som alto em vinil).", notas: "[A VERIFICAR] confirmar endereço e horário mais perto da data." },
    { id: "lg-surugaya-shimogyo", nome: "Surugaya (Shimogyo Ward)", cidade: "kyoto", bairro: "Shimogyo", categoria: "games", prioridade: "media", status: "quero", motivo: "Loja de segunda mão de games, action figures e mídia — combina com seu interesse em videogames." },
    { id: "lg-edit-mode-shimogyo", nome: "Edit Mode (Shimogyo Ward)", cidade: "kyoto", bairro: "Shimogyo", categoria: "compras", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] nome sugere brechó/loja de roupa em segunda mão — confirmar mais perto da data." },
    { id: "lg-bookoff-kyoto", nome: "Bookoff", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "compras", prioridade: "baixa", status: "talvez", motivo: "Rede de segunda mão de livros, games, eletrônicos e mídia em geral — boa pra garimpo.", notas: "[A VERIFICAR] confirmar a unidade mais próxima da sua hospedagem." },
    { id: "lg-hamono-furuta", nome: "Hamono Furuta", cidade: "kyoto", bairro: "centro de Kyoto (perto do Nishiki Market)", categoria: "compras", prioridade: "alta", status: "quero", motivo: "Loja tradicional de facas japonesas — combina direto com seu interesse em facas.", notas: "[A VERIFICAR] confirmar endereço exato e se fazem gravação/afiação na hora." },
    { id: "lg-gion-unagi-kawato", nome: "Gion Unagi Kawato", cidade: "kyoto", bairro: "Higashiyama/Gion", categoria: "comida", prioridade: "media", status: "talvez", notas: "[A VERIFICAR] nome sugere restaurante de unagi (enguia) em Gion — confirmar mais perto da data." },
    { id: "lg-sushi-azabu-omakase", nome: "Sushi Azabu Omakase", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "comida", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] nome sugere omakase — costuma exigir reserva com bastante antecedência. Confirmar endereço antes de contar com esse lugar." },
    { id: "lg-panel-cafe", nome: "Panel Café", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-arabica-kyoto", nome: "% Arabica Kyoto", cidade: "kyoto", bairro: "Arashiyama / Higashiyama (Ninenzaka)", categoria: "cafes", prioridade: "alta", status: "quero", motivo: "Cafeteria minimalista super fotogênica, com unidades em Arashiyama (vista do rio) e em Ninenzaka — hoje provavelmente a cafeteria mais famosa de Kyoto." },
    { id: "lg-micasadeco-cafe", nome: "Micasadeco & Café Kyoto", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "cafes", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] confirmar endereço mais perto da data." },
    { id: "lg-wagyu-hokusai", nome: "Wagyu Hokusai", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-yakiniku-washino", nome: "Yakiniku Washino", cidade: "kyoto", bairro: "[A VERIFICAR]", categoria: "confirmar", prioridade: "baixa", status: "talvez", notas: "[A VERIFICAR] não localizei referência confiável." },
    { id: "lg-osaka-castle", nome: "Osaka Castle", cidade: "osaka", bairro: "centro de Osaka", categoria: "fotos", prioridade: "alta", status: "quero", motivo: "Castelo símbolo da cidade, cercado por um parque grande — bom mirante do terraço no topo." },
    { id: "lg-dotonbori", nome: "Dotonbori", cidade: "osaka", bairro: "centro de Osaka", categoria: "bairros", prioridade: "alta", status: "quero", motivo: "Canal com os letreiros icônicos (Glico Man) e a maior concentração de comida de rua da cidade — já está no seu roteiro do dia 13/09 à noite." },
    { id: "lg-shinsaibashi-suji", nome: "Shinsaibashi-suji", cidade: "osaka", bairro: "Shinsaibashi", categoria: "compras", prioridade: "alta", status: "quero", motivo: "Rua coberta de compras que emenda com Amerika-mura — já prevista pro dia 13/09." },
    { id: "lg-kuromon-ichiba", nome: "Kuromon Ichiba Market", cidade: "osaka", bairro: "Nipponbashi", categoria: "mercados", prioridade: "alta", status: "quero", motivo: "Mercado coberto conhecido como 'a cozinha de Osaka' — bom pra petiscar frutos do mar e wagyu na hora." },
    { id: "lg-umeda-sky-building", nome: "Umeda Sky Building", cidade: "osaka", bairro: "Umeda", categoria: "fotos", prioridade: "media", status: "talvez", motivo: "Torre gêmea com mirante circular a céu aberto no topo — boa vista panorâmica da cidade, ótima ao pôr do sol.", notas: "Já citado como opção de plano B pro dia 14/09." },
    { id: "lg-shitennoji", nome: "Shitenno-ji", cidade: "osaka", bairro: "centro de Osaka", categoria: "templos", prioridade: "media", status: "talvez", motivo: "Um dos templos budistas mais antigos do Japão, fundado no século VI." },
    { id: "lg-osaka-aquarium", nome: "Osaka Aquarium Kaiyukan", cidade: "osaka", bairro: "Tempozan", categoria: "fora", prioridade: "media", status: "talvez", motivo: "Um dos maiores aquários do mundo, com tanque central de tubarão-baleia." },
    { id: "lg-universal-studios-japan", nome: "Universal Studios Japan", cidade: "osaka", bairro: "Konohana", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Parque temático com área de Super Nintendo World — forte combinação com seu interesse em games.", notas: "Consome o dia inteiro; avaliar se cabe junto com Himeji e o dia livre de Osaka." },
    { id: "lg-den-den-town", nome: "Den Den Town", cidade: "osaka", bairro: "Nipponbashi", categoria: "games", prioridade: "alta", status: "quero", motivo: "Bairro eletrônico de Osaka, equivalente à Akihabara de Tóquio — games retrô, eletrônicos e lojas de colecionáveis.", notas: "Já estava mencionado no seu roteiro do dia 15/09." },
    { id: "lg-namba-yasaka-shrine", nome: "Namba Yasaka Shrine", cidade: "osaka", bairro: "Namba", categoria: "templos", prioridade: "media", status: "talvez", motivo: "Santuário pequeno e curioso, com um palco em formato de cabeça de leão gigante." },
    { id: "lg-nakanoshima", nome: "Nakanoshima", cidade: "osaka", bairro: "centro de Osaka", categoria: "fotos", prioridade: "baixa", status: "talvez", motivo: "Ilha fluvial entre dois rios, com prédios históricos e o museu de arte — caminhada tranquila." },
    { id: "lg-konjaku-museum", nome: "Osaka Museum of Housing and Living (Konjaku Kan)", cidade: "osaka", bairro: "Tenjinbashi", categoria: "museus", prioridade: "baixa", status: "talvez", motivo: "Recria uma rua de Osaka do período Edo em tamanho real, dentro do museu." },
    { id: "lg-oshino-hakkai", nome: "Oshino Hakkai", cidade: "kawaguchiko", bairro: "Oshino", categoria: "fotos", prioridade: "media", status: "quero", motivo: "Vilarejo com oito nascentes de água cristalina vindas do degelo do Fuji — vista clássica do Fuji ao fundo." },
    { id: "lg-saiko-iyashi-no-sato", nome: "Saiko Iyashi no Sato", cidade: "kawaguchiko", bairro: "Saiko", categoria: "fotos", prioridade: "media", status: "talvez", motivo: "Vilarejo reconstruído de casas de telhado de colmo (estilo gassho-zukuri), com o Fuji como pano de fundo." },
    { id: "lg-kawaguchiko-lake-cycling", nome: "Passeio de bicicleta/pedalinho no lago Kawaguchiko", cidade: "kawaguchiko", bairro: "margem do lago", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Trilha plana ao redor do lago, boa pra bike alugada ou pedalinho com vista do Fuji, ritmo mais leve." },
    { id: "lg-zeniarai-benten", nome: "Zeniarai Benten Shrine", cidade: "kamakura", bairro: "Kamakura", categoria: "templos", prioridade: "media", status: "talvez", motivo: "Santuário escondido numa caverna onde a tradição é lavar dinheiro numa fonte, pra 'multiplicar' a sorte financeira." },
    { id: "lg-engakuji", nome: "Engaku-ji", cidade: "kamakura", bairro: "Kita-Kamakura", categoria: "templos", prioridade: "media", status: "talvez", motivo: "Um dos principais templos zen de Kamakura, num terreno arborizado perto da estação de Kita-Kamakura." },
    { id: "lg-kenchoji", nome: "Kencho-ji", cidade: "kamakura", bairro: "Kita-Kamakura", categoria: "templos", prioridade: "media", status: "talvez", motivo: "Templo zen mais antigo do Japão, com portão imponente e jardins tradicionais." },
    { id: "lg-enoshima", nome: "Enoshima", cidade: "kamakura", bairro: "ilha próxima a Kamakura", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Ilha pequena com santuário, mirante e frutos do mar — passeio de meio período se sobrar tempo/energia no dia 16/09." },
    { id: "lg-himeji-central-park", nome: "Himeji Central Park", cidade: "himeji", bairro: "arredores de Himeji", categoria: "fora", prioridade: "baixa", status: "talvez", motivo: "Parque safari + parque de diversões nos arredores da cidade — só faz sentido se decidir esticar o bate-volta." },
  ],

  /* ---------- COMPRAS ---------- */
  compras: [
    // roupas e tênis
    { id: "cp-onitsuka", item: "Onitsuka Tiger", categoria: "roupas", cidade: "toquio", prioridade: "alta", status: "comprar", observacoes: "Modelos exclusivos do Japão. Flagships em Ginza e Omotesando." },
    { id: "cp-samba-sftm", item: "Song For The Mute x adidas Samba LX Friezeit", categoria: "roupas", prioridade: "alta", status: "pesquisar", observacoes: "[A VERIFICAR] disponibilidade/estoque — lançamento limitado." },
    { id: "cp-uniqlo", item: "Roupa da Uniqlo", categoria: "roupas", cidade: "toquio", loja: "Uniqlo Ginza (flagship)", prioridade: "media", status: "comprar", observacoes: "Tax-free acima de ¥5.000. Colabs exclusivas do Japão." },
    { id: "cp-adidas-japao", item: "Camiseta Adidas Japão Away", categoria: "roupas", prioridade: "media", status: "pesquisar", observacoes: "[A VERIFICAR] onde tem — Adidas flagship ou lojas de futebol." },
    { id: "cp-camisa-time-antiga", item: "Camisa de time antiga (vintage)", categoria: "segunda-mao", cidade: "toquio", loja: "Vintage Sports Football (Shibuya) · GOAT (Kyoto) · Jerseum (Osaka)", prioridade: "alta", status: "comprar", fonte: "memória do projeto", observacoes: "Lojas já mapeadas no projeto." },
    { id: "cp-drmartens", item: "Dr. Martens", categoria: "roupas", prioridade: "media", status: "pesquisar", observacoes: "Conferir se o preço compensa vs Brasil." },
    { id: "cp-brecho", item: "Roupas vintage em brechó", categoria: "segunda-mao", cidade: "toquio", loja: "Shimokitazawa / Koenji", prioridade: "alta", status: "comprar" },
    { id: "cp-jeans", item: "Jeans Kapital ou Momotaro", categoria: "roupas", cidade: "toquio", prioridade: "alta", status: "comprar", observacoes: "Nome corrigido de “momotauro”. Kapital: Ebisu/Shinjuku. Momotaro: loja em Aoyama. Jeans japonês selvedge — experimentar antes." },
    { id: "cp-billys-vans", item: "BILLY'S x Vans Loafer", categoria: "roupas", cidade: "toquio", loja: "BILLY'S (Harajuku/Shibuya)", prioridade: "media", status: "pesquisar", observacoes: "[A VERIFICAR] estoque." },
    { id: "cp-gu", item: "Roupa da GU", categoria: "roupas", cidade: "toquio", prioridade: "baixa", status: "comprar", observacoes: "Irmã barata da Uniqlo." },
    { id: "cp-bape", item: "Roupa da Bape", categoria: "roupas", cidade: "toquio", loja: "Bape Store Harajuku", prioridade: "media", status: "pesquisar" },
    { id: "cp-cdg", item: "Roupa da Comme des Garçons", categoria: "roupas", cidade: "toquio", loja: "Dover Street Market Ginza / Aoyama", prioridade: "media", status: "pesquisar" },
    { id: "cp-kith", item: "Roupa ou meia da Kith", categoria: "roupas", cidade: "toquio", loja: "Kith Tokyo (Shibuya, Miyashita Park)", prioridade: "media", status: "pesquisar" },
    { id: "cp-camiseta-tsukiji", item: "Camiseta Tsukiji Market", categoria: "souvenirs", cidade: "toquio", loja: "Tsukiji Outer Market", prioridade: "media", status: "comprar" },

    // eletrônicos
    { id: "cp-ps5pro", item: "PS5 Pro", categoria: "eletronicos", cidade: "toquio", loja: "Yodobashi / Bic Camera", prioridade: "media", status: "pesquisar", observacoes: "Fonte bivolt (100–240V). Atenção: volume/peso na mala, imposto na alfândega brasileira (cota US$1.000 aéreo) e garantia só no Japão. [A VERIFICAR] preço e diferença vs Brasil." },
    { id: "cp-airpods", item: "AirPods", categoria: "eletronicos", loja: "Apple Store / Yodobashi", prioridade: "media", status: "pesquisar", observacoes: "Garantia Apple é internacional. Comparar preço tax-free vs Brasil." },
    { id: "cp-airpods-max", item: "AirPods Max", categoria: "eletronicos", loja: "Apple Store / Yodobashi", prioridade: "baixa", status: "pesquisar", observacoes: "Volumoso — pesar espaço na mala." },
    { id: "cp-imac", item: "iMac?", categoria: "eletronicos", prioridade: "baixa", status: "pesquisar", observacoes: "Fonte bivolt, mas MUITO volumoso para bagagem + imposto acima da cota. Teclado JIS se comprado no Japão. Repensar." },
    { id: "cp-ipad-usado", item: "iPad de 2ª mão?", categoria: "segunda-mao", cidade: "toquio", loja: "Book Off / Sofmap / Janpara (Akihabara)", prioridade: "media", status: "pesquisar", observacoes: "Conferir estado da bateria e se é modelo japonês (som de câmera travado não se aplica a iPad; checar SIM lock)." },
    { id: "cp-iphone18", item: "Trocar iPhone 15 Pro por 18?", categoria: "eletronicos", prioridade: "baixa", status: "pesquisar", observacoes: "iPhone japonês tem som de obturador obrigatório que não desativa. Avaliar se compensa vs garantia/imposto. [A VERIFICAR] preços em setembro." },
    { id: "cp-macbook-usado", item: "MacBook de 2ª mão?", categoria: "segunda-mao", cidade: "toquio", loja: "Sofmap / Janpara (Akihabara)", prioridade: "baixa", status: "pesquisar", observacoes: "Teclado JIS na maioria dos usados no Japão — conferir antes." },
    { id: "cp-casio", item: "Relógio Casio Vintage?", categoria: "eletronicos", cidade: "toquio", loja: "Yodobashi / lojas de usados", prioridade: "media", status: "pesquisar" },
    { id: "cp-mouse", item: "Mouse?", categoria: "eletronicos", loja: "Yodobashi", prioridade: "baixa", status: "pesquisar" },
    { id: "cp-capinha", item: "Capinha de iPhone", categoria: "eletronicos", prioridade: "baixa", status: "comprar" },

    // videogames
    { id: "cp-retro-games", item: "Games retrô (Super Potato / Book Off)", categoria: "videogames", cidade: "toquio", loja: "Akihabara", prioridade: "media", status: "pesquisar", observacoes: "Item derivado dos lugares salvos — ajustar como quiser." },

    // papelaria
    { id: "cp-goshuin", item: "Caderno Goshuin para templos", categoria: "papelaria", cidade: "toquio", loja: "primeiro templo da viagem (Meiji ou Senso-ji)", prioridade: "alta", status: "comprar", observacoes: "Comprar no início da viagem para colecionar carimbos desde o dia 1." },
    { id: "cp-travelers-caderno", item: "Caderno da Travelers Factory", categoria: "papelaria", cidade: "toquio", loja: "Travelers Factory Tokyo Station", prioridade: "alta", status: "comprar", observacoes: "Edições exclusivas da loja da Tokyo Station." },
    { id: "cp-travelers-extras", item: "Adesivos e cartões postais da Travelers", categoria: "papelaria", cidade: "toquio", loja: "Travelers Factory Tokyo Station", prioridade: "media", status: "comprar" },
    { id: "cp-muji-papelaria", item: "Papelaria da Muji", categoria: "papelaria", cidade: "toquio", loja: "Muji Ginza", prioridade: "media", status: "comprar" },
    { id: "cp-loft-papelaria", item: "Papelaria na Loft", categoria: "papelaria", cidade: "toquio", loja: "Loft Shibuya", prioridade: "media", status: "comprar" },

    // perfumes e beleza
    { id: "cp-lelabo", item: "Le Labo perfume", categoria: "perfumes", cidade: "toquio", prioridade: "media", status: "pesquisar", observacoes: "Frascos >100ml vão na bagagem despachada. [A VERIFICAR] exclusivos city (Gaiac 10 é o de Tóquio)." },
    { id: "cp-bleu-chanel", item: "Bleu de Chanel", categoria: "perfumes", prioridade: "baixa", status: "pesquisar", observacoes: "Comparar duty free Dubai vs Japão. Líquido na mala despachada." },
    { id: "cp-fita-dentes", item: "Fita smile white teeth pack", categoria: "beleza", loja: "drugstores (Matsukiyo etc.)", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] nome exato do produto." },
    { id: "cp-creme-cravos", item: "Algum creme pra cravos?", categoria: "beleza", loja: "drugstores", prioridade: "baixa", status: "pesquisar", observacoes: "Marcas comuns: Hada Labo, Cure. [A VERIFICAR] produto específico." },
    { id: "cp-cortador-unha", item: "Cortador de unha", categoria: "beleza", loja: "Kai / Loft / drugstore", prioridade: "media", status: "comprar", observacoes: "Os da marca KAI/Seki Edge são referência. Vai na mala despachada (objeto cortante)." },
    { id: "cp-pinca", item: "Pinça", categoria: "beleza", loja: "Kai / Loft", prioridade: "baixa", status: "comprar", observacoes: "Mala despachada." },

    // cozinha e facas
    { id: "cp-faca-kaneyoshi", item: "Faca Kaneyoshi Saku", categoria: "cozinha", cidade: "toquio", loja: "Kappabashi [A VERIFICAR loja exata]", prioridade: "alta", status: "pesquisar", observacoes: "OBRIGATÓRIO despachar (nunca na mão). Pedir nota para tax-free e embrulho de viagem. Declarar na alfândega BR se passar da cota." },
    { id: "cp-talheres", item: "Talheres", categoria: "cozinha", cidade: "toquio", loja: "Kappabashi / Muji", prioridade: "baixa", status: "pesquisar" },
    { id: "cp-dengama", item: "Dengama", categoria: "cozinha", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] o que é — possivelmente loja de cerâmica/donabe." },

    // souvenirs
    { id: "cp-daruma", item: "Daruma", categoria: "souvenirs", prioridade: "media", status: "comprar", observacoes: "Pintar um olho ao fazer o pedido, o outro quando realizar." },
    { id: "cp-imas", item: "Ímãs", categoria: "souvenirs", prioridade: "media", status: "comprar" },
    { id: "cp-chaveiros", item: "Chaveiros", categoria: "souvenirs", prioridade: "media", status: "comprar" },
    { id: "cp-canecas", item: "Canecas", categoria: "souvenirs", prioridade: "media", status: "comprar", observacoes: "Embrulhar bem — mala despachada." },
    { id: "cp-leque", item: "Leque?", categoria: "souvenirs", prioridade: "baixa", status: "pesquisar" },
    { id: "cp-tokyo-banana", item: "Tokyo Banana", categoria: "souvenirs", cidade: "toquio", loja: "estações / aeroporto", prioridade: "media", status: "comprar", observacoes: "Comprar no FIM da viagem (validade curta). Tem em Narita." },
    { id: "cp-shiroi-koibito", item: "Língua de gato Shiroi Koibito", categoria: "souvenirs", loja: "depachika / aeroporto", prioridade: "media", status: "comprar", observacoes: "Produto de Hokkaido — achável em depachika e aeroportos." },

    // revistas, livros e música
    { id: "cp-popeye-brutus", item: "Revista Popeye + Brutus", categoria: "midia", cidade: "toquio", loja: "Tsutaya / conbini / livrarias", prioridade: "media", status: "comprar" },
    { id: "cp-mononoke-lp", item: "Princesa Mononoke soundtrack LP", categoria: "midia", cidade: "toquio", loja: "Tower Records Shibuya / Disk Union / HMV", prioridade: "alta", status: "pesquisar", observacoes: "LP: transportar plano, entre roupas, na despachada — ou na mão em sacola própria. [A VERIFICAR] estoque." },
    { id: "cp-ukiyoe-print", item: "Print da Ukiyoe Gallery", categoria: "design", cidade: "toquio", prioridade: "media", status: "pesquisar", observacoes: "[A VERIFICAR] qual galeria — levar tubo rígido para transporte." },

    // Fuji
    { id: "cp-kongozue", item: "Kongōzue de madeira do Mt. Fuji", categoria: "fuji", cidade: "fuji", loja: "5ª estação / cabanas na subida", prioridade: "alta", status: "comprar", observacoes: "Bastão de madeira — cada estação carimba a fogo (taxa por carimbo, dinheiro vivo). Excede bagagem de mão: despachar ou avaliar transporte." },
    { id: "cp-souvenirs-fuji", item: "Souvenirs do Mt. Fuji", categoria: "fuji", cidade: "fuji", loja: "5ª estação", prioridade: "media", status: "comprar", observacoes: "Levar ienes em espécie — cartão nem sempre aceito na montanha." },

    // design e objetos
    { id: "cp-shupatto", item: "Bolsa da Shupatto", categoria: "design", loja: "Loft / Tokyu Hands", prioridade: "media", status: "comprar" },
    { id: "cp-carteira", item: "Carteira", categoria: "design", prioridade: "baixa", status: "pesquisar" },
    { id: "cp-lampada-loft", item: "Lâmpada na Loft", categoria: "design", cidade: "toquio", loja: "Loft", prioridade: "baixa", status: "pesquisar", observacoes: "Voltagem Japão = 100V. Conferir compatibilidade 127/220V do Brasil antes de comprar." },
    { id: "cp-dedepartment", item: "D&Department", categoria: "design", cidade: "toquio", prioridade: "media", status: "pesquisar", observacoes: "Loja de design de longa vida útil. [A VERIFICAR] endereço atual da unidade de Tóquio." },
    { id: "cp-pro-antiques", item: "Pro Antiques", categoria: "segunda-mao", cidade: "toquio", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] nome/endereço — possivelmente “PRO ANTIQUES COM” (Nishi-Ogikubo)." },
    { id: "cp-the-harvest", item: "The Haverst", categoria: "confirmar", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] o que é — nome possivelmente “The Harvest”." },
    { id: "cp-bevara", item: "Bevara", categoria: "confirmar", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] o que é — não identificado." },
    { id: "cp-mala-rimowa", item: "Mala da riwona?", categoria: "design", prioridade: "baixa", status: "pesquisar", observacoes: "[A VERIFICAR] — provavelmente RIMOWA. Comprar mala no início da viagem resolve espaço para as compras. Conferir preço Japão vs duty free." }
  ],

  /* ---------- CHECKLIST: ANTES DE VIAJAR ---------- */
  checklist: [
    { id: "ck-sumo", titulo: "Comprar ingresso do sumô (Aki Basho) — vendas abrem 08/08", categoria: "ingressos", prazo: "2026-08-08", prioridade: "alta", status: "pendente", link: "https://sumo.pia.jp/en/", observacoes: "Prioridade: domingo 20/09 (fallback 19 e 18). Cadeira ~¥3.500–14.000. Lembrete já criado para 08/08 09:00.", },
    { id: "ck-hospedagem", titulo: "Fechar hospedagens (Tóquio ×3 períodos, Kyoto, Osaka, Kawaguchiko?)", categoria: "hospedagem", prazo: "2026-08-01", prioridade: "alta", status: "pendente", observacoes: "Preferência: Airbnb (parcelamento). Referências: UNPLAN Kagurazaka, Toyoko Inn (quarto privado)." },
    { id: "ck-gear-rental", titulo: "Reservar aluguel de equipamento do Fuji (La Mont ou Yamarent)", categoria: "fuji", prazo: "2026-08-10", prioridade: "alta", status: "pendente", observacoes: "Retirada na 5ª estação preferida. Ver detalhes na aba Fuji." },
    { id: "ck-seguro", titulo: "Contratar seguro viagem (cobrindo trekking/altitude)", categoria: "documentos", prazo: "2026-08-15", prioridade: "alta", status: "pendente", observacoes: "Confirmar que cobre atividade de montanha até 3.776m." },
    { id: "ck-esim", titulo: "Comprar eSIM de dados (Ubigi, Airalo etc.)", categoria: "internet", prazo: "2026-08-25", prioridade: "media", status: "pendente", observacoes: "Ativar só ao chegar. iPhone 15 Pro aceita eSIM dual." },
    { id: "ck-ic-card", titulo: "Adicionar Suica no Apple Wallet e carregar", categoria: "transporte", prazo: "2026-09-01", prioridade: "media", status: "pendente", observacoes: "Suica no iPhone dispensa cartão físico. Recarga com Apple Pay (Mastercard/Visa podem falhar — testar antes)." },
    { id: "ck-cash", titulo: "Planejar dinheiro: ienes em espécie + cartão sem IOF alto", categoria: "dinheiro", prazo: "2026-08-25", prioridade: "alta", status: "pendente", observacoes: "Saque no 7-Eleven ATM funciona bem. Fuji e izakayas pequenas = espécie." },
    { id: "ck-nintendo-qr", titulo: "Emitir QR do Nintendo Museum — 10/09 às 14:00 JST (NÃO antes)", categoria: "ingressos", prazo: "2026-09-10", prioridade: "alta", status: "pendente", observacoes: "Site do museu → Review Tickets → Issue QR Code. Irreversível. Levar passaporte no dia.", link: "https://museum-tickets.nintendo.com/" },
    { id: "ck-gopro", titulo: "Comprar GoPro na Yodobashi Shinjuku (dia 06 ou 07/09)", categoria: "compras", prazo: "2026-09-07", prioridade: "media", status: "pendente", observacoes: "Para o Fuji. Tax-free com passaporte." },
    { id: "ck-apps", titulo: "Baixar apps: Google Maps offline, Windy, 3DWiggle, app oficial do Fuji", categoria: "apps", prazo: "2026-09-01", prioridade: "media", status: "pendente", observacoes: "Windy = decisão go/no-go do Fuji 1–2 dias antes." },
    { id: "ck-backup-docs", titulo: "Backup de documentos (passaporte, reservas, QRs) no iCloud + offline", categoria: "documentos", prazo: "2026-09-01", prioridade: "alta", status: "pendente", observacoes: "Salvar PDFs no app Arquivos para acesso sem internet." },
    { id: "ck-malas", titulo: "Planejar malas (ir com folga — voltar cheio de compras)", categoria: "malas", prazo: "2026-09-02", prioridade: "media", status: "pendente", observacoes: "Emirates: 2×23kg despachadas + 10kg mão. Facas/perfumes/LP na despachada." },
    { id: "ck-remedios", titulo: "Separar remédios pessoais + Compeed (bolhas)", categoria: "saude", prazo: "2026-09-01", prioridade: "media", status: "pendente", observacoes: "Alguns remédios comuns no BR são controlados no Japão (pseudoefedrina) — conferir antes de levar." },
    { id: "ck-passaporte", titulo: "Conferir validade do passaporte (6+ meses)", categoria: "documentos", prazo: "2026-08-01", prioridade: "alta", status: "pendente", observacoes: "Brasileiros não precisam de visto para turismo (até 90 dias) — confirmar perto da viagem." },
    { id: "ck-vivo", titulo: "Confirmar roaming/bloqueios da Vivo para números japoneses", categoria: "internet", prazo: "2026-08-25", prioridade: "baixa", status: "pendente", observacoes: "Vivo já bloqueou chamadas para 050 VoIP uma vez — resolvido via *8486. Testar de novo se precisar." }
  ],

  /* ---------- VOOS ---------- */
  voos: [
    { id: "vo-ida-1", trecho: "Ida · trecho 1", companhia: "Emirates", numeroVoo: "EK262", origem: "São Paulo", destino: "Dubai", aeroportoOrigem: "GRU · Terminal 3", aeroportoDestino: "DXB · Terminal 3", data: "2026-09-04", horarioSaida: "01:05", horarioChegada: "23:00", terminal: "GRU T3", assento: "não selecionado [A VERIFICAR]", codigoReserva: "[A VERIFICAR]", status: "confirmado", observacoes: "A380-800 · Econômica Flex · 14h55 de voo. Bagagem: 2×23kg + 1×10kg de mão.", fonte: "itinerário Emirates", sensivel: true },
    { id: "vo-ida-2", trecho: "Ida · trecho 2", companhia: "Emirates", numeroVoo: "EK312", origem: "Dubai", destino: "Tóquio Haneda", aeroportoOrigem: "DXB · Terminal 3", aeroportoDestino: "HND · Terminal 3", data: "2026-09-05", horarioSaida: "07:40", horarioChegada: "22:20", terminal: "DXB T3", assento: "não selecionado [A VERIFICAR]", codigoReserva: "[A VERIFICAR]", status: "confirmado", observacoes: "B777-300ER · 9h40 de voo. Conexão em Dubai: 8h40 (dá para descansar no aeroporto).", fonte: "itinerário Emirates", sensivel: true },
    { id: "vo-volta-1", trecho: "Volta · trecho 1", companhia: "Emirates", numeroVoo: "EK319", origem: "Tóquio Narita", destino: "Dubai", aeroportoOrigem: "NRT · Terminal 2", aeroportoDestino: "DXB · Terminal 3", data: "2026-09-21", horarioSaida: "22:30", horarioChegada: "04:05 (+1)", terminal: "NRT T2", assento: "não selecionado [A VERIFICAR]", codigoReserva: "[A VERIFICAR]", status: "confirmado", observacoes: "A380-800 · 10h35 de voo. ATENÇÃO: sai de NARITA (não Haneda) — Narita Express ou Skyliner com folga.", fonte: "itinerário Emirates", sensivel: true },
    { id: "vo-volta-2", trecho: "Volta · trecho 2", companhia: "Emirates", numeroVoo: "EK261", origem: "Dubai", destino: "São Paulo", aeroportoOrigem: "DXB · Terminal 3", aeroportoDestino: "GRU · Terminal 3", data: "2026-09-22", horarioSaida: "09:05", horarioChegada: "17:15", terminal: "DXB T3", assento: "não selecionado [A VERIFICAR]", codigoReserva: "[A VERIFICAR]", status: "confirmado", observacoes: "A380-800 · 15h10 de voo. Conexão em Dubai: 5h.", fonte: "itinerário Emirates", sensivel: true }
  ],

  /* ---------- RESERVAS ---------- */
  reservas: [
    { id: "rs-kamaiwakan", nome: "Kamaiwakan Dormitory (cabana no Fuji)", tipo: "hospedagem", cidade: "fuji", data: "2026-09-08", horario: "check-in 11:00–19:00", endereco: "7ª estação da Yoshida Trail, 2.790m", codigoReserva: "B-KD9EAMD", documentoOrigem: "e-mail Japan Mountain Huts (Outlook, 30/05/2026)", status: "reservado", sensivel: true, fonte: "reserva Kamaiwakan", notas: "1x pernoite + jantar (curry). Inclui colchonete, saco de dormir, travesseiro, tomada. 2–3h de subida da 5ª estação; 3,5–4h até o cume. Cancelamento: 10–20 dias 30% · 2–9 dias 50% · 1 dia 80% · no dia 100%. Contato: info@japanmountainhuts.com" },
    { id: "rs-permit-yoshida", nome: "Permit de escalada — Yoshida Trail", tipo: "ingresso", cidade: "fuji", data: "2026-09-08", horario: "admissão 03:00–23:59", endereco: "5617 Kamiyoshida, Komitakeshita, Fujiyoshida, Yamanashi (5ª estação)", codigoReserva: "162889RX6883", link: "https://www.asoview.com/", documentoOrigem: "comprovante Asoview (QR no site — Gestão de reservas)", status: "reservado", sensivel: true, fonte: "comprovante Asoview", notas: "¥4.000 · 1 pessoa · nome LOURESMATHEUS. QR code fica no site da Asoview → “Mostrar código QR”. Salvar screenshot offline antes da subida. Não reembolsável." },
    { id: "rs-nintendo", nome: "Nintendo Museum", tipo: "ingresso", cidade: "kyoto", data: "2026-09-11", horario: "entrada 16:30–17:00", endereco: "Uji, Kyoto (acesso por transporte público — não há estacionamento)", codigoReserva: "M0715231122", link: "https://museum-tickets.nintendo.com/", documentoOrigem: "comprovante Nintendo Museum", status: "confirmar", sensivel: true, fonte: "comprovante Nintendo Museum", notas: "¥3.300 · 1 adulto. AÇÃO: emitir QR em 10/09 às 14:00 JST (Review Tickets → Issue QR Code — irreversível). Levar passaporte." },
    { id: "rs-sumo", nome: "Sumô — Aki Basho (Ryogoku Kokugikan)", tipo: "ingresso", cidade: "toquio", data: "2026-09-20", horario: "melhores lutas ~16h", endereco: "Ryogoku Kokugikan, Sumida", codigoReserva: "", link: "https://sumo.pia.jp/en/", status: "pagar", fonte: "memória do projeto", notas: "COMPRAR EM 08/08 (abertura das vendas). Prioridade 20/09; fallback 19 e 18. Cadeira ~¥3.500–14.000; cadeira permite filmar (sem flash/tripé)." },
    { id: "rs-gear", nome: "Aluguel de equipamento Fuji (La Mont ou Yamarent)", tipo: "equipamento", cidade: "fuji", data: "2026-09-08", horario: "[A DEFINIR]", endereco: "retirada na 5ª estação (preferido)", status: "confirmar", fonte: "memória do projeto", notas: "Ainda não reservado. Ver checklist completo na aba Fuji." },
    { id: "rs-hosp-tokyo1", nome: "Hospedagem Tóquio I (05–08/09)", tipo: "hospedagem", cidade: "toquio", data: "2026-09-05", status: "confirmar", notas: "[A VERIFICAR] — Airbnb preferido (parcelamento). Chegada 22:20 em HND: escolher lugar de fácil acesso à noite." },
    { id: "rs-hosp-kyoto", nome: "Hospedagem Kyoto (09–13/09)", tipo: "hospedagem", cidade: "kyoto", data: "2026-09-09", status: "confirmar", notas: "[A VERIFICAR] — chegada dia 09 à noite, cansado do Fuji. Perto de estação ajuda." },
    { id: "rs-hosp-osaka", nome: "Hospedagem Osaka (13–16/09)", tipo: "hospedagem", cidade: "osaka", data: "2026-09-13", status: "confirmar", notas: "[A VERIFICAR] — Namba/Shinsaibashi facilita a noite." },
    { id: "rs-hosp-tokyo2", nome: "Hospedagem Tóquio II (16–21/09)", tipo: "hospedagem", cidade: "toquio", data: "2026-09-16", status: "confirmar", notas: "[A VERIFICAR] — último dia sai de NARITA: considerar isso na localização." }
  ],

  /* ---------- DOCUMENTOS ---------- */
  documentos: [
    { id: "dc-passaporte", nome: "Passaporte", tipo: "documento", linkOuReferencia: "físico + foto no iCloud", observacao: "Validade 6+ meses. Necessário para tax-free e Nintendo Museum.", status: "ok", sensivel: true },
    { id: "dc-itinerario-emirates", nome: "Itinerário Emirates (4 trechos)", tipo: "passagem", linkOuReferencia: "PDF/print no projeto + e-mail Emirates", observacao: "EK262/EK312 ida · EK319/EK261 volta.", status: "ok", sensivel: true, fonte: "itinerário Emirates" },
    { id: "dc-kamaiwakan", nome: "Confirmação Kamaiwakan", tipo: "reserva", linkOuReferencia: "e-mail Outlook 30/05/2026 (Japan Mountain Huts)", observacao: "Código B-KD9EAMD. Levar salvo offline.", status: "ok", sensivel: true, fonte: "reserva Kamaiwakan" },
    { id: "dc-permit-fuji", nome: "QR do permit Yoshida Trail", tipo: "ingresso", linkOuReferencia: "site Asoview → Gestão de reservas → Mostrar código QR", observacao: "Salvar screenshot ANTES da subida (sem sinal na montanha).", status: "pendente", sensivel: true, fonte: "comprovante Asoview" },
    { id: "dc-nintendo", nome: "Ingresso Nintendo Museum", tipo: "ingresso", linkOuReferencia: "museum-tickets.nintendo.com → Review Tickets", observacao: "QR só pode ser emitido em 10/09 14:00 JST.", status: "pendente", sensivel: true, fonte: "comprovante Nintendo Museum" },
    { id: "dc-seguro", nome: "Seguro viagem", tipo: "seguro", linkOuReferencia: "[A VERIFICAR]", observacao: "Contratar cobrindo trekking até 3.776m.", status: "pendente", sensivel: true },
    { id: "dc-gear-rental", nome: "Comprovante aluguel de equipamento", tipo: "reserva", linkOuReferencia: "[A VERIFICAR]", observacao: "Criar quando reservar La Mont/Yamarent.", status: "pendente", sensivel: true }
  ],

  /* ---------- ROTEIRO POR DIA ---------- */
  roteiro: [
    { id: "dia-0904", data: "2026-09-04", cidade: "voo", titulo: "Embarque", manha: "—", tarde: "Últimos preparos, conferir malas e documentos.", noite: "Voo EK262 sai de GRU à 01:05 (madrugada de 04/09) → Dubai.", deslocamentos: "Casa → GRU com folga (voo à 01:05).", reservas: "Check-in Emirates online 48h antes.", planoB: "" },
    { id: "dia-0905", data: "2026-09-05", cidade: "toquio", titulo: "Chegada em Tóquio", manha: "Conexão em Dubai (8h40) · EK312 sai 07:40.", tarde: "Voo.", noite: "Chega em HND 22:20. Imigração + bagagem + transporte. Objetivo: só chegar e dormir.", deslocamentos: "HND → hospedagem (monorail/Keikyu até ~24h; táxi se perder o último trem).", reservas: "Hospedagem Tóquio I [A VERIFICAR].", planoB: "Onsen do aeroporto de Haneda se precisar relaxar; conbini para jantar." },
    { id: "dia-0906", data: "2026-09-06", cidade: "toquio", titulo: "Recuperação + Shinjuku", manha: "Acordar sem pressa. Café da manhã tranquilo.", tarde: "Yodobashi Shinjuku (GoPro + eletrônicos). Suica no Apple Wallet.", noite: "Omoide Yokocho ou Ichiran. Gato 3D no telão.", deslocamentos: "Base → Shinjuku.", reservas: "", planoB: "Se o jet lag bater, só conbini + descanso." },
    { id: "dia-0907", data: "2026-09-07", cidade: "toquio", titulo: "Leve + preparação Fuji", manha: "Passeio leve: Meiji Shrine + Harajuku (comprar caderno goshuin).", tarde: "Separar mochila do Fuji. Conferir clima no Windy. Salvar QR do permit offline.", noite: "Jantar cedo, dormir cedo.", deslocamentos: "", reservas: "Confirmar retirada do equipamento alugado.", planoB: "Se clima do dia 08 estiver ruim: avaliar cancelamento (política na aba Fuji)." },
    { id: "dia-0908", data: "2026-09-08", cidade: "fuji", titulo: "Subida do Fuji → Kamaiwakan", manha: "Cedo: deslocamento para a 5ª estação (Subaru Line). Retirar equipamento alugado.", tarde: "Início da subida (~2–3h até a cabana). Ritmo LENTO. Check-in Kamaiwakan 11:00–19:00.", noite: "Jantar (curry) na cabana. Dormir cedo — saída de madrugada.", deslocamentos: "Shinjuku → Kawaguchiko (ônibus/trem) → ônibus 5ª estação. [A DEFINIR horários]", reservas: "Kamaiwakan B-KD9EAMD · Permit 162889RX6883 (QR salvo).", planoB: "Se clima virar: cancelar e reagendar impossível (trilha fecha 10/09) — aceitar perda e curtir Kawaguchiko." },
    { id: "dia-0909", data: "2026-09-09", cidade: "fuji", titulo: "Goraikō + descida → Kyoto", manha: "Saída ~2–3h antes do amanhecer para o cume (3,5–4h da cabana). Goraikō. Descida pela Yoshida (atenção à bifurcação Shita Edoya).", tarde: "Devolver equipamento. Descanso/banho (onsen tattoo-friendly em Kawaguchiko).", noite: "Deslocamento para Kyoto (chegada à noite, cansado).", deslocamentos: "5ª estação → Kawaguchiko → Mishima/Shin-Fuji → Shinkansen → Kyoto. [A DEFINIR horários]", reservas: "Hospedagem Kyoto [A VERIFICAR].", planoB: "Se exausto: dormir em Kawaguchiko e ir a Kyoto cedo no dia 10." },
    { id: "dia-0910", data: "2026-09-10", cidade: "kyoto", titulo: "Kyoto leve + QR Nintendo", manha: "Recuperação. Café bom, caminhada leve (Nishiki Market).", tarde: "⚠️ 14:00 JST: emitir QR do Nintendo Museum (irreversível). Gion / Higashiyama sem pressa.", noite: "Jantar tranquilo.", deslocamentos: "", reservas: "", planoB: "Funaoka Onsen ou Goko Yu (tattoo-friendly) para as pernas." },
    { id: "dia-0911", data: "2026-09-11", cidade: "kyoto", titulo: "Kyoto + Nintendo Museum", manha: "Templos cedo (Fushimi Inari de manhã evita multidão).", tarde: "Ir para Uji. Nintendo Museum — entrada 16:30–17:00. Levar passaporte.", noite: "Voltar a Kyoto, jantar.", deslocamentos: "Kyoto ⇄ Uji (JR Nara Line, ~20–30 min).", reservas: "Nintendo M0715231122.", planoB: "" },
    { id: "dia-0912", data: "2026-09-12", cidade: "kyoto", titulo: "Kyoto — dia livre", manha: "[A DEFINIR] Arashiyama? Goshuin nos templos?", tarde: "[A DEFINIR] GOAT Kyoto (camisas vintage), a-cho purikura perto do Nishiki.", noite: "[A DEFINIR]", deslocamentos: "", reservas: "", planoB: "" },
    { id: "dia-0913", data: "2026-09-13", cidade: "osaka", titulo: "Kyoto → Osaka", manha: "Check-out, trem para Osaka (~30 min).", tarde: "Primeira volta: Shinsaibashi / Amerika-mura (Jerseum — camisas vintage).", noite: "Dotonbori.", deslocamentos: "Kyoto → Osaka.", reservas: "Hospedagem Osaka [A VERIFICAR].", planoB: "" },
    { id: "dia-0914", data: "2026-09-14", cidade: "osaka", titulo: "Bate-volta Himeji", manha: "Shinkansen para Himeji (~30–40 min). Castelo de Himeji.", tarde: "Jardim Koko-en. Voltar a Osaka.", noite: "Osaka livre.", deslocamentos: "Osaka ⇄ Himeji.", reservas: "", planoB: "Se chover forte, trocar por dia urbano em Osaka (Umeda Sky, Den Den Town)." },
    { id: "dia-0915", data: "2026-09-15", cidade: "osaka", titulo: "Osaka — dia livre", manha: "[A DEFINIR] Osaka Castle? Kuromon Market?", tarde: "[A DEFINIR] Den Den Town (games retrô), Round1 purikura.", noite: "[A DEFINIR] Solaniwa Onsen (tattoo-friendly)?", deslocamentos: "", reservas: "", planoB: "" },
    { id: "dia-0916", data: "2026-09-16", cidade: "toquio", titulo: "Kamakura (Yabusame) → Tóquio", manha: "Cedo: Osaka → Kamakura (Shinkansen até Shin-Yokohama/Tóquio + JR).", tarde: "Yabusame (arco e flecha a cavalo) 13:00–16:00.", noite: "Seguir para Tóquio, check-in hospedagem final.", deslocamentos: "Osaka → Kamakura → Tóquio (dia longo de trem).", reservas: "Hospedagem Tóquio II [A VERIFICAR].", planoB: "Se cansar: pular Kamakura e ir direto a Tóquio (Yabusame é o motivo do desvio — decidir na véspera)." },
    { id: "dia-0917", data: "2026-09-17", cidade: "toquio", titulo: "Tóquio — [A DEFINIR]", manha: "[A DEFINIR] Sugestão: Tsukiji Outer Market cedo + Ginza.", tarde: "[A DEFINIR] Kappabashi (facas) + Asakusa/Senso-ji.", noite: "[A DEFINIR] Jukken Bridge (reflexo do Skytree).", deslocamentos: "", reservas: "", planoB: "" },
    { id: "dia-0918", data: "2026-09-18", cidade: "toquio", titulo: "Tóquio — [A DEFINIR]", manha: "[A DEFINIR] Sugestão: Yanaka + Nezu Shrine + Kayaba Coffee.", tarde: "[A DEFINIR] Akihabara (Super Potato, GiGO).", noite: "[A DEFINIR] Golden Gai.", deslocamentos: "", reservas: "", planoB: "" },
    { id: "dia-0919", data: "2026-09-19", cidade: "toquio", titulo: "Tóquio — [A DEFINIR]", manha: "[A DEFINIR] Sugestão: Shimokitazawa (brechós) + Gotokuji.", tarde: "[A DEFINIR] Daikanyama T-Site + Shibuya.", noite: "[A DEFINIR] Shibuya Sky no pôr do sol (reservar).", deslocamentos: "", reservas: "", planoB: "" },
    { id: "dia-0920", data: "2026-09-20", cidade: "toquio", titulo: "Sumô + últimas compras", manha: "Compras finais / mala.", tarde: "Aki Basho no Ryogoku Kokugikan (melhores lutas ~16h).", noite: "Jantar de despedida.", deslocamentos: "", reservas: "Ingresso sumô (comprar 08/08).", planoB: "Sem ingresso do dia 20 → tentar 19 ou 18." },
    { id: "dia-0921", data: "2026-09-21", cidade: "toquio", titulo: "Último dia + voo (NARITA)", manha: "Manhã livre leve. Fechar malas (facas/líquidos na despachada).", tarde: "Sair MUITO cedo para Narita — N'EX ~1h de Tóquio + margem. Tax-free/compras finais no aeroporto (Tokyo Banana).", noite: "EK319 sai de NRT T2 às 22:30.", deslocamentos: "Hospedagem → NRT (sair ~17h30 no máximo).", reservas: "", planoB: "" },
    { id: "dia-0922", data: "2026-09-22", cidade: "voo", titulo: "Volta", manha: "Chega em Dubai 04:05. Conexão 5h. EK261 sai 09:05.", tarde: "Voo.", noite: "Chega em GRU às 17:15.", deslocamentos: "", reservas: "", planoB: "" }
  ],

  /* ---------- MONTE FUJI ---------- */
  fuji: {
    resumo: {
      datas: "08–09 de setembro de 2026",
      trilha: "Yoshida Trail (Yamanashi)",
      cabana: "Kamaiwakan — 7ª estação, 2.790m",
      altitude: "5ª estação 2.305m → cabana 2.790m → cume 3.776m",
      objetivo: "Goraikō — nascer do sol no cume, 09/09",
      atencao: "A trilha FECHA em 10/09 — é a última janela. Decisão go/no-go pelo Windy 1–2 dias antes."
    },
    timeline: [
      { id: "ft-1", hora: "08/09 manhã cedo", titulo: "Tóquio → Kawaguchiko", detalhe: "Ônibus do Busta Shinjuku ou trem (Fujikyu). [A DEFINIR horário]" },
      { id: "ft-2", hora: "08/09 fim da manhã", titulo: "Kawaguchiko → 5ª estação (Subaru Line)", detalhe: "Ônibus de montanha. Retirar equipamento alugado. Mostrar QR do permit no portão. [A DEFINIR horário]" },
      { id: "ft-3", hora: "08/09 ~1h na 5ª estação", titulo: "Aclimatação na 5ª estação (2.305m)", detalhe: "Ficar 1h+ antes de subir ajuda o corpo a se ajustar. Comprar kongōzue, água, snacks. Banheiros pagos (moedas)." },
      { id: "ft-4", hora: "08/09 tarde", titulo: "Subida até a Kamaiwakan (2–3h)", detalhe: "Ritmo lento, pausas curtas frequentes. Check-in até 19:00." },
      { id: "ft-5", hora: "08/09 noite", titulo: "Jantar + dormir na cabana", detalhe: "Curry incluso. Dormir o máximo possível — mesmo sem sono, descansar deitado." },
      { id: "ft-6", hora: "09/09 ~1:30–2:00 [A DEFINIR]", titulo: "Saída para o cume", detalhe: "3,5–4h até o topo. Headlamp, camadas, luvas. Nascer do sol em setembro ≈ 5:20–5:30." },
      { id: "ft-7", hora: "09/09 ~5:20", titulo: "Goraikō no cume (3.776m)", detalhe: "Frio intenso (pode ficar perto de 0°C). Agasalhar ANTES de parar para esperar." },
      { id: "ft-8", hora: "09/09 manhã", titulo: "Descida pela Yoshida (3–4h)", detalhe: "⚠️ Na bifurcação Shita Edoya, seguir YOSHIDA (não Subashiri). Scree castiga joelho — bastões ajudam." },
      { id: "ft-9", hora: "09/09 meio-dia", titulo: "5ª estação → devolver equipamento → Kawaguchiko", detalhe: "Banho: onsen tattoo-friendly em Kawaguchiko. Comer bem." },
      { id: "ft-10", hora: "09/09 tarde/noite", titulo: "Kawaguchiko → Kyoto", detalhe: "Via Mishima/Shin-Fuji + Shinkansen. [A DEFINIR horários] Plano B: dormir em Kawaguchiko." }
    ],
    equipamentos: [
      { id: "fe-boots", item: "Bota de trekking", grupo: "calcados", origem: "alugar", prioridade: "alta", status: "pendente", observacao: "EVO SL não serve para o scree vulcânico. Experimentar na retirada." },
      { id: "fe-rainjacket", item: "Jaqueta de chuva (hardshell)", grupo: "chuva", origem: "alugar", prioridade: "alta", status: "pendente" },
      { id: "fe-rainpants", item: "Calça de chuva", grupo: "chuva", origem: "alugar", prioridade: "alta", status: "pendente" },
      { id: "fe-backpack", item: "Mochila 30L + capa de chuva", grupo: "mochila", origem: "alugar", prioridade: "alta", status: "pendente" },
      { id: "fe-trekpants", item: "Calça de trekking", grupo: "roupas", origem: "alugar", prioridade: "alta", status: "pendente" },
      { id: "fe-fleece", item: "Fleece térmico", grupo: "termica", origem: "alugar", prioridade: "alta", status: "pendente" },
      { id: "fe-gaiters", item: "Polainas (gaiters)", grupo: "calcados", origem: "alugar", prioridade: "media", status: "pendente", observacao: "Contra pedrisco no tênis na descida." },
      { id: "fe-poles", item: "Bastões de trekking", grupo: "mochila", origem: "alugar", prioridade: "alta", status: "pendente", observacao: "Ou usar o kongōzue comprado na 5ª estação." },
      { id: "fe-headlamp", item: "Headlamp (lanterna de cabeça)", grupo: "iluminacao", origem: "alugar", prioridade: "alta", status: "pendente", observacao: "Essencial para a saída de madrugada. Pilha reserva." },
      { id: "fe-baselayer", item: "Base layer térmica (blusa + calça)", grupo: "termica", origem: "levar", prioridade: "alta", status: "pendente", observacao: "Trazer do Brasil ou comprar na Uniqlo dia 06/07 (Heattech)." },
      { id: "fe-gloves", item: "Luvas", grupo: "termica", origem: "levar", prioridade: "alta", status: "pendente" },
      { id: "fe-buff", item: "Buff / máscara contra poeira", grupo: "roupas", origem: "levar", prioridade: "media", status: "pendente", observacao: "Poeira vulcânica na descida." },
      { id: "fe-compeed", item: "Compeed (curativo para bolhas)", grupo: "emergencia", origem: "levar", prioridade: "alta", status: "pendente", observacao: "Trazer do Brasil." },
      { id: "fe-powerbank", item: "Power bank", grupo: "eletronicos", origem: "levar", prioridade: "alta", status: "pendente", observacao: "Frio drena bateria — manter perto do corpo." },
      { id: "fe-agua", item: "Água (2L para começar)", grupo: "agua", origem: "comprar-japao", prioridade: "alta", status: "pendente", observacao: "Comprar embaixo — na montanha custa ¥500+/garrafa." },
      { id: "fe-snacks", item: "Snacks (onigiri, chocolate, castanhas)", grupo: "comida", origem: "comprar-japao", prioridade: "alta", status: "pendente", observacao: "Comprar em conbini na véspera." },
      { id: "fe-cash", item: "Dinheiro vivo (¥10.000+ em moedas/notas)", grupo: "dinheiro", origem: "levar", prioridade: "alta", status: "pendente", observacao: "Banheiros (¥200–300), carimbos do kongōzue, água. Cartão não vale na montanha." },
      { id: "fe-docs", item: "Passaporte + QR do permit (screenshot offline)", grupo: "documentos", origem: "levar", prioridade: "alta", status: "pendente" },
      { id: "fe-gopro", item: "GoPro + iPhone carregados", grupo: "eletronicos", origem: "comprar-japao", prioridade: "media", status: "pendente", observacao: "GoPro: comprar na Yodobashi dia 06/07." },
      { id: "fe-oculos", item: "Óculos de sol + protetor solar", grupo: "emergencia", origem: "levar", prioridade: "media", status: "pendente", observacao: "Sol forte acima das nuvens." }
    ],
    aluguel: {
      loja: "La Mont ou Yamarent [A DEFINIR qual]",
      retirada: "5ª estação (preferido) — 08/09 de manhã",
      devolucao: "5ª estação — 09/09 após a descida",
      itens: "Bota, jaqueta+calça de chuva, mochila+capa, calça trekking, fleece, polainas, bastões, headlamp",
      preco: "[A VERIFICAR]",
      link: "[A VERIFICAR] — yamarent.com / la-mont.jp",
      regras: "[A VERIFICAR] política de tamanho, troca e devolução",
      status: "pendente",
      checklistRetirada: "Experimentar bota com a meia que vai usar · conferir capa de chuva da mochila · testar headlamp · conferir tamanho das luvas se alugar"
    },
    saude: {
      reduzirRisco: [
        "Suba devagar — ritmo de conversa, passos curtos. Chegar cansado na cabana é sinal de ritmo errado.",
        "Fique 1h+ na 5ª estação antes de começar (aclimatação).",
        "Hidrate-se o tempo todo — pouco e sempre, não de uma vez.",
        "Evite álcool na véspera e durante a subida.",
        "Coma algo leve em intervalos regulares, mesmo sem fome.",
        "Durma/descanse na cabana mesmo sem sono — deitar já ajuda.",
        "Dor de cabeça leve no início da noite? Hidrate, descanse e reavalie antes de subir mais.",
        "Se sintomas piorarem, NÃO continue subindo."
      ],
      sinaisAtencao: [
        "Leves (comuns acima de 2.500m): dor de cabeça leve, náusea leve, cansaço maior que o esperado, sono ruim.",
        "Atenção: dor de cabeça que não melhora com hidratação/descanso, vômito, tontura, falta de ar em repouso.",
        "Graves (raros, emergência): confusão mental, perda de coordenação (andar cambaleante), sonolência extrema, falta de ar intensa em repouso, lábios/unhas azulados."
      ],
      quandoParar: [
        "Se os sintomas pioram mesmo em repouso → descer é o tratamento. Descer 300–500m já costuma melhorar.",
        "Confusão, descoordenação ou sonolência extrema → descer imediatamente acompanhado, é emergência.",
        "Se a equipe da cabana ou guias orientarem parar — eles veem isso todo dia.",
        "Meta é voltar inteiro. O Goraikō da 7ª/8ª estação também é bonito."
      ],
      antesDaSubida: [
        "Dormir bem nas 2 noites anteriores",
        "Testar o calçado (na retirada do aluguel)",
        "Separar roupas por camadas (base + fleece + chuva)",
        "Conferir clima no Windy (véspera e manhã)",
        "Confirmar transporte até a 5ª estação",
        "Confirmar reserva da cabana (B-KD9EAMD)",
        "Levar dinheiro físico (¥10.000+)",
        "Carregar celular + power bank",
        "Comprar água e snacks no conbini",
        "Baixar mapas offline + screenshot do QR do permit"
      ],
      verificarPerto: [
        "Regras da trilha 2026 (fujisan-climb.jp) — em 2026: ¥4.000/pessoa, limite 4.000/dia, portão fecha 14:00–03:00 (quem tem reserva de cabana passa)",
        "Clima e abertura da trilha (temporada Yoshida termina 10/09)",
        "Transporte Shinjuku ⇄ Kawaguchiko ⇄ 5ª estação (horários de setembro)",
        "Regras da cabana (check-in até 19:00)",
        "Seguro viagem cobrindo trekking",
        "Condição física — manter corrida/escada nas semanas antes"
      ],
      avisoMedico: "Estas são boas práticas gerais de fontes oficiais (CDC, site oficial do Fuji), não aconselhamento médico. Medicamentos preventivos como acetazolamida só com orientação médica — converse com um médico de viagem antes se quiser avaliar. Bullet climbing (subir direto sem dormir) multiplica o risco de mal de altitude e hipotermia — sua reserva na cabana já é a melhor prevenção."
    }
  },

  /* ---------- INFORMAÇÕES ÚTEIS ---------- */
  infoUteis: {
    frases: [
      { jp: "すみません", romaji: "Sumimasen", pt: "Com licença / desculpa (abre qualquer conversa)" },
      { jp: "ありがとうございます", romaji: "Arigatō gozaimasu", pt: "Muito obrigado" },
      { jp: "これをください", romaji: "Kore o kudasai", pt: "Este aqui, por favor (apontando)" },
      { jp: "いくらですか？", romaji: "Ikura desu ka?", pt: "Quanto custa?" },
      { jp: "英語のメニューはありますか？", romaji: "Eigo no menyū wa arimasu ka?", pt: "Tem cardápio em inglês?" },
      { jp: "免税できますか？", romaji: "Menzei dekimasu ka?", pt: "Consigo tax-free? (mostrar passaporte)" },
      { jp: "トイレはどこですか？", romaji: "Toire wa doko desu ka?", pt: "Onde é o banheiro?" },
      { jp: "予約しています", romaji: "Yoyaku shite imasu", pt: "Tenho reserva" },
      { jp: "持ち帰りでお願いします", romaji: "Mochikaeri de onegaishimasu", pt: "Para viagem, por favor" },
      { jp: "カードで払えますか？", romaji: "Kādo de haraemasu ka?", pt: "Posso pagar com cartão?" }
    ],
    emergencia: [
      { titulo: "Polícia", detalhe: "110" },
      { titulo: "Ambulância / bombeiros", detalhe: "119" },
      { titulo: "Japan Visitor Hotline (JNTO, 24h, inglês)", detalhe: "050-3816-2787" },
      { titulo: "Consulado-Geral do Brasil em Tóquio", detalhe: "[A VERIFICAR] telefone de plantão antes de viajar" }
    ],
    transporte: [
      "Suica no Apple Wallet resolve metrô, trem, ônibus e conbini.",
      "Google Maps funciona muito bem para rotas de trem no Japão.",
      "Último trem costuma ser ~0:00–0:30 — depois disso, táxi (caro).",
      "Volta: o voo sai de NARITA. N'EX (~1h de Tóquio Station) ou Skyliner (de Ueno).",
      "Shinkansen Kyoto/Osaka: comprar assento reservado em setembro é tranquilo, exceto feriados. [A VERIFICAR] Silver Week 2026 (19–23/09 tem feriados — trens mais cheios)."
    ],
    pagamentos: [
      "Cartão funciona em quase tudo nas cidades, mas leve espécie: izakayas pequenas, templos (goshuin ~¥300–500), mercados, Fuji.",
      "Saque internacional: ATMs do 7-Eleven aceitam cartões estrangeiros.",
      "Tax-free: mínimo ¥5.000 por loja/dia, passaporte físico obrigatório. Sistema antigo (desconto na hora) vale até 31/10/2026."
    ],
    etiqueta: [
      "Não comer andando na rua (exceto em áreas de mercado/festival).",
      "Fila indiana na escada rolante (esquerda em Tóquio, direita em Osaka).",
      "Silêncio no trem — chamada de voz é falta grave.",
      "Tatuagem: onsen público tradicional geralmente veta. Alternativas tattoo-friendly já mapeadas (ver Links).",
      "Gorjeta não existe — insistir constrange."
    ],
    lixo: [
      "Quase não há lixeiras na rua — leve um saquinho na mochila.",
      "Conbinis têm lixeiras (para o que você comprou lá).",
      "Garrafas PET têm coleta separada (máquinas de venda costumam ter cesto ao lado)."
    ],
    energia: [
      "Tomada tipo A (2 pinos chatos), 100V.",
      "Eletrônicos modernos (iPhone, MacBook, GoPro) são bivolt — só precisa do adaptador de pino.",
      "Secador/aparelhos resistivos brasileiros 220V NÃO funcionam direito."
    ],
    alfandega: [
      "Cota de isenção Brasil (aéreo): US$ 1.000 + US$ 1.000 em duty free na chegada. Acima disso: 50% sobre o excedente (declarar na e-DBV).",
      "Facas: SEMPRE na bagagem despachada, embaladas. No Japão, andar com faca na rua é crime — leve lacrada da loja para o hotel.",
      "Perfumes/líquidos >100ml: despachada.",
      "Eletrônicos: nota fiscal ajuda na declaração. Garantia de produto comprado no Japão raramente vale no Brasil (Apple é exceção parcial).",
      "[A VERIFICAR] regras da e-DBV perto da viagem."
    ],
    links: [
      { titulo: "Site oficial de escalada do Fuji", url: "https://www.fujisan-climb.jp/en/" },
      { titulo: "Asoview — QR do permit", url: "https://www.asoview.com/" },
      { titulo: "Nintendo Museum — tickets", url: "https://museum-tickets.nintendo.com/" },
      { titulo: "Sumô — venda de ingressos", url: "https://sumo.pia.jp/en/" },
      { titulo: "Yamarent (aluguel equipamento)", url: "https://www.yamarent.com/" },
      { titulo: "JNTO — informações oficiais", url: "https://www.japan.travel/en/" },
      { titulo: "Windy (clima do Fuji)", url: "https://www.windy.com/" },
      { titulo: "Onsen tattoo-friendly (mapeados)", url: "", nota: "Kawaguchiko: opções locais · Kyoto: Funaoka Onsen, Goko Yu · Osaka: Solaniwa Onsen, Healthy Spa Tateba · Haneda: onsen do aeroporto" },
      { titulo: "Camisas vintage de futebol", url: "", nota: "Vintage Sports Football (Shibuya) · GOAT Kyoto Shijo · Jerseum (Osaka, Amerika-mura) · Footuni (online)" },
      { titulo: "Tameshigiri (corte com katana)", url: "", nota: "MAIKOYA (Tóquio/Kyoto) · Yuushindo (Osaka)" }
    ]
  }
};
