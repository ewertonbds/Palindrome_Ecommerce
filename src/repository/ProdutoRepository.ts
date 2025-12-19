import { Produto } from "../models/Produto"

export interface ProdutoRepository {
	// CRUD do produto
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
	atualizar (produto: Produto): void;
	deletar(numero: number): void;

}