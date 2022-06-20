## PASSOS PARA CRIAR O PROJETO

    1 - yarn init -y
    2 - yarn tsc --init
    3 - yarn add typescript ts-node-dev @types/express @types/node @types/cors -D
    4 - yarn add typeorm express pg cors

## ADICIONAR OS SCRIPTS NO PACKAGE.JSON

    "scripts": {
        "dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
        "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
    },

## CRIAR A PASTA SRC
    - Criar o arquivo server.ts

## ALTERAR ARQUIVO TSCONFIG.JSON
    -  "experimentalDecorators": true,                
    -  "emitDecoratorMetadata": true,  
    -  "target": "es6",
    -  "rootDir": "./src",   
    -  "outDir": "./dist",  

## ALTERAR OS DIRETORIOS PARA DIST QUANDO FOR SUBIR A APLICACAO

## COMANDOS PARA RODAR
    - yarn typeorm migration:create -n 'nome_da_tabela'