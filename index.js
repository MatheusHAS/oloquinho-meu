const axios = require('axios')
let argv = require('minimist')(process.argv.slice(2))
const stdio = require('stdio');

const OPTIONS = {
    ENDPOINT: `https://api2.totalvoice.com.br`,
}

const oloquinho = {
    meu: async (from, to, token) => {
        try {
            to = to.replace(/[()\- a-zA-Z]/g, to)
            from = from.replace(/[()\- a-zA-Z]/g, from)

            console.log(`ô loquinho meu...`)
            console.log(`De: ${from}\nPara: ${to}\nToken: ${token}`)

            const axiosInstance = axios.create({
                baseURL: OPTIONS.ENDPOINT,
                timeout: 5000,
                headers: {
                    'Access-Token': token,
                }
            })

            await axiosInstance.post('/composto', {
                    numero_destino: `${to}`,
                    dados: [
                        {
                            acao: 'audio',
                            acao_dados: {
                                url_audio: 'https://github.com/MatheusHAS/oloquinho-meu/raw/master/oloquinho-meu.mp3',
                            },
                        }
                    ],
                    bina: `${from}`
                })
                .then((resp) => console.log(`Essa ferinha ai meu, quem sabe faz ao vivo!`))
                .catch((err) => console.error(`Tá pegando fogo bixo: ${err}`))
            
        } catch (exception) {
            console.error(`Eita: ${exception}`)
        }
    }
}

if (argv.de && argv.para && argv.token) {
    oloquinho.meu(argv.de, argv.para, argv.token)
} else {
    stdio.question('Destinatário: Digite o Telefone (com DDD)', function (err, to) {
        stdio.question('Remetente: Digite o Telefone (com DDD)', function (err, from) {
            stdio.question('Token do TotalVoice', function (err, token) {
                oloquinho.meu(from, to, token)
            });
        });
    });
}