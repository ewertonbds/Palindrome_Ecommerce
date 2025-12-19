import { Produto } from "./Produto";

export class ProdutoAcessorio extends Produto {

private _local: string;
    private _material: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, local: string, material: string){
        super(id, nome, preco, quantidade);
        this._local = local;
        this._material = material;
    }

    public get local(){
    return this._local
    }

    public set local(local: string){
    this._local = local;
    }

    public get material(){
        return this._material
    }

    public set material(material: string){
        this._material = material;
    }

    public visualizar(): void{
    super.visualizar();
    console.log(`O material é ${this._material}`)
    console.log(`O local é ${this._local}`)

    }
}