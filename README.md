# Help UP

API do Projeto Help UP, destinado aprestação de serviços de cuidados.

# Teste da API via Postman

Para usar localmente basta clonar o projeto, ou se preferir, fazer o download como ZIP.
Ao terminar, entrar na pasta do projeto onde se localiza o arquivo `package.json` via terminal (cmd ou bash) e executar primeiro o comando `npm install` depois que terminar o download das dependências, digite o comando `npm start` e dê enter o servidor irá iniciar normalmente, mais o banco de dados estára apontando para outro banco, crie um banco de dados local na sua máquina com o nome do seu desejo, em seguinta entre na pasta `libs` e abra o arquivo js `config.js` e altere os seguintes campos para apontar para seu banco de dados:

    module.exports = {
        database: 'SEU_BANCO_DE_DADOS',
        username: 'SEU_USUARIO_DO_BD',
        password: 'SUA_SENHA_DO_BD',
        params: {
            dialect: 'mysql',

            host: 'SEU_HOST', // Normalmente é localhost se estiver na sua máquina, se não, ponha o IP onde o banco de encontra. 

            //port: 3306, // Descomente esta propriedade. A padrão do Mysql é 3306, se não for digite a porta que está configurada no seu banco.

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            operatorAliases: Op,
        }
    };

Concluindo essas estapas não se preocupe na criação de tabelas. a API estará fazendo isso por você :). Divirta-se.

Caso não queria realizar este processo, acesse a API no endereço `https://helpup-api-desafio.herokuapp.com` que é a home.

Mais detalhes, continue lendo...

## Calls ( Atendimentos - Cuidadores)

### GET

Busca todos

Local: `http://localhost:3000/calls`

Remoto: `https://helpup-api-desafio.herokuapp.com/calls`

RETURN:

    [
        {
          "id": 1,
          "description": "Estou precisando de cuidados",
          "done": false,
          "informations": "Idoso, diabetes, presão alta, dificuldades de locomoção",
          "callsValue": 60,
          "created_at": "2019-03-19T13:04:01.783Z",
          "updated_at": "2019-03-19T13:04:01.783Z",
          "caregiver_id": null
        },
        {
          "id": 2,
          "description": "Estou precisando de cuidados",
          "done": false,
          "informations": "Idoso, diabetes, presão alta, dificuldades de locomoção",
          "callsValue": 60,
          "created_at": "2019-03-19T13:04:10.025Z",
          "updated_at": "2019-03-19T13:04:10.025Z",
          "caregiver_id": null
        }
    ]

Busca por ID

Local: `http://localhost:3000/calls/1`

Remoto: `https://helpup-api-desafio.herokuapp.com/calls/1`

RETURN:

    {
      "id": 1,
      "description": "Estou precisando de cuidados",
      "done": false,
      "informations": "Idoso, diabetes, presão alta, dificuldades de locomoção",
      "callsValue": 60,
      "created_at": "2019-03-19T13:04:01.783Z",
      "updated_at": "2019-03-19T13:04:01.783Z",
      "caregiver_id": null
    }

### POST

Adiciona

Local: `http://localhost:3000/calls`

Remoto: `https://helpup-api-desafio.herokuapp.com/calls`

BODY

    {
      "description": "Estou precisando de cuidados",
      "done": false,
      "informations": "Idoso, diabetes, presão alta, dificuldades de locomoção",
      "callsValue": 60.0
    }

RETURN

    {
      "id": 6,
      "description": "Estou precisando de cuidados",
      "done": false,
      "informations": "Idoso, diabetes, presão alta, dificuldades de locomoção",
      "callsValue": 60,
      "updated_at": "2019-03-19T13:04:13.037Z",
      "created_at": "2019-03-19T13:04:13.037Z"
    }

### DELETE

Remove

Local: `http://localhost:3000/calls/2`

Remoto: `https://helpup-api-desafio.herokuapp.com/calls/2`

## Caregivers (Cuidadores)

### GET

Busca todos

Local: `http://localhost:3000/caregivers`

Remoto: `https://helpup-api-desafio.herokuapp.com/caregivers`

RESULT

    [
      {
          "id": 1,
          "name": "Fulana De Tal",
          "email": "fulanadetal@recife.com",
          "gender": "F",
          "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
          "location": "Recife",
          "isGraduate": "0",
          "hasCourse": "1",
          "created_at": "2019-03-19T13:31:13.539Z",
          "updated_at": "2019-03-19T13:31:13.539Z"
      },
      {
          "id": 2,
          "name": "Fulana De Tal 2",
          "email": "fulanadetal2@recife.com",
          "gender": "F",
          "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
          "location": "Recife",
          "isGraduate": "0",
          "hasCourse": "1",
          "created_at": "2019-03-19T13:34:17.706Z",
          "updated_at": "2019-03-19T13:34:17.706Z"
      }
    ]

Busca por ID

Local: `http://localhost:3000/caregivers/1`

Remoto: `https://helpup-api-desafio.herokuapp.com/caregivers/1`

RESULT

    {
        "id": 1,
        "name": "Fulana De Tal",
        "email": "fulanadetal@recife.com",
        "gender": "F",
        "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
        "location": "Recife",
        "isGraduate": "0",
        "hasCourse": "1",
        "created_at": "2019-03-19T13:31:13.539Z",
        "updated_at": "2019-03-19T13:31:13.539Z"
    }

### POST

Adiciona

Local: `http://localhost:3000/caregivers`

Remoto: `https://helpup-api-desafio.herokuapp.com/caregivers`

BODY

    {
      "name": "Fulana De Tal",
      "email": "fulanadetal@recife.com",
      "gender": "F",
      "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
      "location": "Recife",
      "isGraduate": false,
      "hasCourse": true
    }

RESULT

    {
      "id": 1,
      "name": "Fulana De Tal",
      "email": "fulanadetal@recife.com",
      "gender": "F",
      "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
      "location": "Recife",
      "isGraduate": false,
      "hasCourse": true,
      "updated_at": "2019-03-19T13:31:13.539Z",
      "created_at": "2019-03-19T13:31:13.539Z"
    }

### PUT

Altera dados já cadastrados

Local: `http://localhost:3000/caregivers/2`

Remoto: `https://helpup-api-desafio.herokuapp.com/caregivers/2`

BODY

    {
      "name": "Fulana De Tal 2",
      "email": "fulanadetal2@recife.com",
      "gender": "F",
      "address": "Rua das ninfas, 25, Boa vista, Recife, PE",
      "location": "Recife",
      "isGraduate": false,
      "hasCourse": true
    }

### DELETE

Remove

Local: `http://localhost:3000/caregivers/1`

Remota: `https://helpup-api-desafio.herokuapp.com/caregivers/1`