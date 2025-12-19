import { Produto } from "./Produto";

export class ProdutoVestuario extends Produto {

    private _tecido: string;
    private _tamanho: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, tecido: string, tamanho: string){
        super(id, nome, preco, quantidade)
        this._tecido = tecido;
        this._tamanho = tamanho;
    }

    public get tecido(){
        return this._tecido;
    }

    public set tecido(tecido: string){
        this._tecido = tecido;
    }

    public get tamanho(){
        return this._tamanho;
    }

    public set tamanho(tamanho:string){
        this._tamanho = tamanho;
    }

    public visualizar(): void{
        super.visualizar();
        console.log(`O tecido é ${this._tecido}`)
        console.log(`O tamanho é ${this._tamanho}`)

    }
}