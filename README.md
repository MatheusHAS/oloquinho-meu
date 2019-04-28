# oloquinho-meu
> "Baseado na obra de [@haskellcamargo, gemidao-do-zap](https://github.com/haskellcamargo/gemidao-do-zap)"

# O que isso faz?
Envie o famoso "Oloquinho meu" para seus amigos via chamada telefonica.

É necessário criar uma conta no [TotalVoice](https://totalvoice.com.br), ele te fornecem R$ 3,00 de créditos para testar o serviço. Cada envio de "oloquinhos", custa cerca de R$ 0,35. Use com sabedoria.

Para se cadastrar é necessário um e-mail e um celular válido. O Celular que você cadastra na sua conta, será sua "bina", portanto você deverá usar esse número no parametro `--de` (mais informações abaixo). 

Caso deseje cadastrar mais números como "bina" é possível através do painel administrativo do TotalVoice.

Na tela inicial após logado no TotalVoice você pode obter seu *Token*

# Do que preciso?
`node`

# Instalação
`sudo npm install`

# E para executar?
* `node index.js --de {telefoneComDDD} --para {telefoneComDDD} --token {tokenTotalVoice}`

ou simplesmente

* `node index.js`
E informar os dados conforme solicitados.

| Parâmetro  |  Obrigatório  | Descrição |
| :------------ |:---------------:| -----:|
| --de | ✅ | Número de telefone com DDD da Bina (cadastrado no site do TotalVoice) |
| --para | ✅ | Número de telefone com DDD da pessoa que receberá |
| --token | ✅ | Seu token de acesso do TotalVoice |

# Disclaimer
Os autores deste projeto não possuem qualquer ligação com a TotalVoice. TotalVoice é uma marca registrada.
