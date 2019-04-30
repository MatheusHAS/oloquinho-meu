const axios = require('axios')
let argv = require('minimist')(process.argv.slice(2))
const stdio = require('stdio');

const OPTIONS = {
    ENDPOINT: `https://api2.totalvoice.com.br`,
}

const onError = (err) => console.error(err)


const oloquinho = {
    meu: async (from = '', to = '', token = '') => {
        try {
            to = to.toString().replace(/\D/ig, '')
            from = from.toString().replace(/\D/ig, '')

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
                numero_destino: to,
                dados: [
                    {
                        acao: 'audio',
                        acao_dados: {
                            url_audio: 'https://github.com/MatheusHAS/oloquinho-meu/raw/master/oloquinho-meu.mp3',
                        },
                    }
                ],
                bina: from
            })
                .then((resp) => console.log(`Essa ferinha ai meu, quem sabe faz ao vivo!`))
                .catch((err) => onError(`Tá pegando fogo bixo: ${err}`))

        } catch (exception) {
            onError(`Eita: ${exception}`)
        }
    }
}

let { de, para, token } = argv;

if (de && para && token) {
    oloquinho.meu(de, para, token)
} else {
    stdio.question('Destinatário: Digite o Telefone (com DDD)', function (err, to) {
        if (err) return onError(`Oculelê: ${err}`);
        stdio.question('Remetente: Digite o Telefone (com DDD)', function (err, from) {
            if (err) return onError(`Oculelê: ${err}`);
            stdio.question('Token do TotalVoice', function (err, token) {
                if (err) return onError(`Oculelê: ${err}`);
                oloquinho.meu(from, to, token)
            });
        });
    });
}