# Help UP

API do Projeto Help UP, destinado aprestação de serviços de cuidados.

# Teste da API via Postman

## Calls ( Atendimentos - Cuidadores)

### GET

Busca todos

http://localhost:3000/calls

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

http://localhost:3000/calls/1

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

http://localhost:3000/calls

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

http://localhost:3000/calls/2


## Caregivers (Cuidadores)

### GET

Busca todos

http://localhost:3000/caregivers

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

http://localhost:3000/caregivers/1

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

http://localhost:3000/caregivers

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

http://localhost:3000/caregivers/2

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

http://localhost:3000/caregivers/1