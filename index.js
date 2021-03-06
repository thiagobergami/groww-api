const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/user-sample', (request, response) => {
    const data = {
        "id": "btc-000-000-02-01",
        "usuario": "mat_acc",
        "nome": "Matheus Accioly",
        "idade": 22,
        "document-type": "cnpjs",
        "document-number": "15.555.555-5",
        "nome-ficticio": "Ximira e Xeló",
        "cartões": {
            "id": "card-vv-00000.000.02",
            "data_created": "2021-07-20T05:33:34",
            "marca": "CartãoMaster",
            "nome-label": "Matheus Accioly",
            "digitos": "5555 4444 3333 2222",
            "expira": "0730",
            "valid": true,
        },
        "banco": {
            "nome": "XPTO",
            "saldo-em-conta": -3000.00,
            "limite": 4000.00,
            "numero-conta": "000.00",
            "agencia": "12.45.67"
        },
        "conta-ativa": [true],
        "emprestimo": {
            "valor": 5000.00,
            "mensalidade": 54,
            "amortização": 300.00
        },
        "transacao": {
            "id": "tr-0000.000.01",
            "status": "autorizado",
            "plataform": "groww fin",
            "date_created": "2021-06-30T12:24:59",
            "valor": 1000.00,
            "paid_amount": 1000.00,
            "refunded_amount": 0,
            "card_holder_name": "Victória Duningham",
            "card_digits": "9999 8888 7777 6666",
            "expire_date": "0122",
            "is_approved": null,
            "boleto_url": null,
            "boleto_barcode": null,
            "boleto_expirate_date": null,
            "customer": {
                "name": "Victórioa Dunigham",
                "id": "cm-0000.000.01",
                "country": "BR",
                "document_number": null,
                "document_cpf": "cpf",
                "email": "vic_big_boss@groww.com.br",
                "phone": [
                    "+552111111111"
                ],
                "born_at": null,
                "birthday": "1970-01-01",
                "gender": null,
                "documents": [{
                    "object": "document",
                    "type": "cpf",
                    "number": "00000000000"
                }]
            },
            "shipping": {
                "address": {
                    "object": "address",
                    "street": "Rua Matrix",
                    "complementary": null,
                    "street_number": "9999",
                    "neighborhood": "Rio Cotia",
                    "city": "Cotia",
                    "state": "sp",
                    "zipcode": "06714360",
                    "country": "br",
                    "id": 146610
                },
                "object": "shipping",
                "id": 28,
                "name": "Victória Duningham",
                "fee": 20,
                "delivery_date": "2000-12-21",
                "expedited": true
            },
            "items": [
                {
                    "object": "item",
                    "id": "1",
                    "title": "Red pill",
                    "unit_price": 1000,
                    "quantity": 1,
                }
            ],
        },
        "links_pagamento": {
            "amount": 1000,
            "date_created": "2018-08-02T14:29:47.128Z",
            "expires_at": "2018-08-02T15:29:47.126Z",
            "id": "pl_cjkcnpnug01w3nx6d7rz1dgit",
            "items": [
                {
                    "category": null,
                    "created_at": "2018-08-02T14:29:47.149Z",
                    "id": "it-0000.0000.00.01",
                    "model": "payment_link",
                    "quantity": 1,
                    "title": "Red Pill",
                    "unit_price": 1000,
                    "updated_at": "2018-08-02T14:29:47.149Z"
                }
            ],
            "max_orders": 1,
            "object": "payment_link",
            "payment_config": {
                "boleto": {
                    "enabled": true,
                    "expires_in": 20
                },
                "credit_card": {
                    "enabled": true,
                    "free_installments": 4,
                    "max_installments": 12
                },
            },
            "status": "active",
            "url": "https://groww.fin/tBJ7Dr9xSX"
        }
    }
    response.json(data).status(200).send();
});


app.listen(3000, () => {
    console.log('Server is running');
});
