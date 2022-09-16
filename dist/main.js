"use strict";
//Problema 1
for (let x = 1; x <= 10; x++) {
    console.log(`Tabuada ${x} `);
    for (var y = 1; y <= 10; y++) {
        console.log(` ${x} X ${y} =  ${x * y} `);
    }
}
//Problema 2
//CEP: 01311-100
/^[0-9]{5}-[0-9]{3}$/i;
//EMAIL: email@fiap.com.br
/^[a-z 0-9._]+@[a-z 0-9._]\.([a-z]+)?$/i;
//CPF: 333.111.222-00
/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
//CNPJ: 12.321.123/0001-02
/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/i;
//RG: 22.455.213-2
/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/;
//expressão regular onde o formato 123.456.abc.def seja válido, porém 2123.456.abc.def também pode ser válido
/^([0-9]{3,4}\.[0-9]{3}\.[a-z]{3}\.[a-z]{3}$/i;
