
//300000   200
console.log('Requisição a cada 5min durante 10H')

function timeout() {
    setTimeout(function () {
        fetch('https://rotas.onrender.com/ativar', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json"
            },
        })
            .then(res => res.status == 201 ? console.log('Api OK') : null)
            .catch(error => console.error(error));

        timeout();
    }, 300000);
}
timeout()