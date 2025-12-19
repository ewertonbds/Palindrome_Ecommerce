import readlinesync = require("readline-sync");

export function main(){
    let opcao: number;

    while(true){
        console.log("======= Palindrome | CONTROLE DE ESTOQUE =======");
        console.log("================================================");
        console.log("          1- Cadastrar produto                  ");
        console.log("          2- Listar todos os produtos           ");
        console.log("          3- Buscar produto por ID              ");
        console.log("          4- Atualizar produto                  ");
        console.log("          5- Remover produto                    ");
        console.log("          6- Entrada de estoque                 ");
        console.log("          7- Saída de estoque                   ");
        console.log("          8- Listar produtos por categoria      ");
        console.log("          9- Exibir produtos com estoque baixo  ");
        console.log("          0- Sair                              ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 9){
            console.log("\nEncerrando o sistema...");
            console.log("Até a próxima, Pequeno Sombra!\n");
            sobre();
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");
                break;

            case 2:
                console.log("\n\nListar todos os produtos\n\n");
                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");
                break;
            case 5:
                console.log("\n\nRemover produto\n\n");
                break;
            case 6:
                console.log("\n\nEntrada de estoque\n\n");
                break;
            case 7:
                console.log("\n\nSaída de estoque\n\n");
                break;
            case 8:
                console.log("\n\nListar produtos por categoria\n\n");
                break;
            case 9:
                console.log("\n\nExibir produtos com estoque baixo\n\n");
                break;
            
            default:
                console.log("\nOpção inválida!\n");
                break;

        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ewerton Bezerra");
    console.log("Generation Brasil - ewertonb@genstudents ");
    console.log("github.com/ewertonbds");
    console.log("*****************************************************");
}

main();