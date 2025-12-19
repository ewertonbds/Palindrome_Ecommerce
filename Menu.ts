import readlinesync = require("readline-sync");
import { ProdutoAcessorio } from "./src/models/ProdutoAcessorio";
import { ProdutoVestuario } from "./src/models/ProdutoVestuario";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {


    // Instância da Classe ProdutoController
    let produtos: ProdutoController = new ProdutoController();

    // Variáveis Auxiliares
    let opcao, id, tipo, quantidade: number;
    let nome, material, tamanho, local, tecido: string;
    let preco: number;

    // Tipos de Produto
    const tiposProdutos = ["Acessório", "Vestuário"];
    console.log("\nCriar Produtos\n");

    // Produto de Vestuário
    let pv1: ProdutoVestuario = new ProdutoVestuario(
        produtos.gerarId(),
        "Camisa Oversized Darkness",
        120.00,
        3,
        "Algodão",
        "M"
    );
    produtos.cadastrar(pv1);

    // Produto de Vestuário
    let pv2: ProdutoVestuario = new ProdutoVestuario(
        produtos.gerarId(),
        "Calça com Cruz",
        150.00,
        2,
        "Jeans",
        "G"
    );
    produtos.cadastrar(pv2);

    // Produto de Acessórios
    let pd1: ProdutoAcessorio = new ProdutoAcessorio(
        produtos.gerarId(),
        "Anel de caveira",
        80.00,
        1,
        "Prata",
        "Mão"
    );
    produtos.cadastrar(pd1);

    // Produto de Acessórios
    let pd2: ProdutoAcessorio = new ProdutoAcessorio(
        produtos.gerarId(),
        "Cruz",
        150.00,
        1,
        "Aço",
        "Pescoço"
    );
    produtos.cadastrar(pd2);

    // Listar todos os produtos
    produtos.listarTodos();

    while (true) {
        console.log("================================================");
        console.log("======= Palindrome | Controle de Estoque =======");
        console.log("================================================");
        console.log("          1- Cadastrar produto                  ");
        console.log("          2- Listar todos os produtos           ");
        console.log("          3- Buscar produto por ID              ");
        console.log("          4- Atualizar produto                  ");
        console.log("          5- Remover produto                    ");
        console.log("          6- Entrada de estoque                 ");
        console.log("          7- Saída de estoque                   ");
        console.log("          8- Sair                               ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8) {
            console.log("\nEncerrando o sistema");
            console.log("Até a próxima, Pequena Sombra!\n");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");
                console.log("Tipo do produto:");
                console.log("1 - " + tiposProdutos[0]);
                console.log("2 - " + tiposProdutos[1]);
                tipo = readlinesync.questionInt("Escolha: ");
                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                quantidade = readlinesync.questionInt("Quantidade: ");

                id = produtos.gerarId();
                switch (tipo) {
                    case 1:
                        material = readlinesync.question("Material: ");
                        local = readlinesync.question("Local: ");

                        produtos.cadastrar(
                            new ProdutoAcessorio(id, nome, preco, quantidade, material, local)
                        );
                        break;

                    case 2:
                        tecido = readlinesync.question("Tecido: ");
                        tamanho = readlinesync.question("Tamanho (PP/P/M/G/GG): ");

                        produtos.cadastrar(
                            new ProdutoVestuario(id, nome, preco, quantidade, tecido, tamanho)
                        );
                        break;

                    default:
                        console.log("Tipo inválido!");
                        break;
                }

                keyPress()
                break;

            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                produtos.listarTodos();

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                id = readlinesync.questionInt("Digite o ID: ");
                produtos.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");

                console.log("Tipo do produto:");
                console.log("1 - " + tiposProdutos[0]);
                console.log("2 - " + tiposProdutos[1]);
                tipo = readlinesync.questionInt("Escolha: ");

                id = readlinesync.questionInt("Digite o ID do produto: ");
                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                quantidade = readlinesync.questionInt("Quantidade: ");

                if (tipo == 1) {
                    material = readlinesync.question("Material: ");
                    local = readlinesync.question("Local: ");

                    produtos.atualizar(
                        new ProdutoAcessorio(id, nome, preco, quantidade, material, local)
                    );

                } else if (tipo == 2) {
                    material = readlinesync.question("Material: ");
                    tamanho = readlinesync.question("Tamanho (PP/P/M/G/GG): ");

                    produtos.atualizar(
                        new ProdutoVestuario(id, nome, preco, quantidade, material, tamanho)
                    );

                } else {
                    console.log("Tipo inválido!");
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nRemover produto\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                produtos.deletar(id);

                keyPress()
                break;
            case 6:
                console.log("\n\nEntrada de estoque\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                quantidade = readlinesync.questionInt("Quantidade: ");
                produtos.entradaEstoque(id, quantidade);
                keyPress();
                break;

            case 7:
                console.log("\n\nSaída de estoque\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                quantidade = readlinesync.questionInt("Quantidade: ");
                produtos.saidaEstoque(id, quantidade);
                keyPress();
                break;

            default:
                console.log("\nOpção inválida!\n");

                break;

        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ewerton Bezerra ");
    console.log("Generation Brasil - ewertonb@genstudents.org");
    console.log("github.com/ewertonbds");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();