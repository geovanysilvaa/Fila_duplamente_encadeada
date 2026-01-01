export class Fila {
    elemento: number;
    anterior: Fila | null;
    proximo: Fila | null;
    constructor(elemento:number,anterior:Fila | null = null,proximo:Fila | null = null){
        this.elemento = elemento;
        this.anterior = anterior;
        this.proximo = proximo;
    }
}