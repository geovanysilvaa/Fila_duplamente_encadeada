import { Fila } from "./fila";

export class Lista {
    inicio: Fila | null = null;
    fim: Fila | null = null;
    contador: number;

    constructor() {
        this.contador = 0;
    }

    public adicionarfinal(valor: number) {
        const novo = new Fila(valor);

        if (!this.inicio) {
            this.inicio = this.fim = novo;
        } else {
            this.fim!.proximo = novo;
            novo.anterior = this.fim;
            this.fim = novo;
        }
        this.contador++;
    }

    public imprimirinicio() {
        let atual = this.inicio;
        while (atual) {
            console.log(atual.elemento);
            atual = atual.proximo;
        }
    }

    public imprimirfinal() {
        let atual = this.fim;
        while (atual) {
            console.log(atual.elemento);
            atual = atual.anterior;
        }
    }

    public adicionarInicio(valor: number) {
        const novo = new Fila(valor);
        if (!this.inicio) {
            this.inicio = novo;
            this.fim = novo;
        } else {
            novo.proximo = this.inicio;
            this.inicio.anterior = novo;
            this.inicio = novo;
        }
        this.contador++;
    }

    public removerprimeiro() {
        if (!this.inicio) {
            return null;
        }

        let valor = this.inicio.elemento;

        if (this.inicio == this.fim) {
            this.fim = null;
            this.inicio = null;
        } else {
            this.inicio = this.inicio.proximo;
            this.inicio!.anterior = null;
        }
        this.contador--;
        return valor;
    }

    public elementos() {
        return this.contador;
    }

    public removerultimo() {
        if (!this.fim) {
            return null;
        }

        let valor = this.fim?.elemento;

        if (this.fim == this.inicio) {
            this.fim = null;
            this.inicio = null;
        } else {
            this.fim = this.fim.anterior;
            this.fim!.proximo = null;
        }
        this.contador--;
        return valor;
    }

    public listavazia() {
        if (this.contador == 0) {
            return true;
        } else {
            return false;
        }
    }

    public buscar(valor: number) {
        let atual = this.inicio;
        while (atual) {
            if (atual.elemento == valor) {
                return true;
            }
            atual = atual.proximo
        }
        return false;
    }

    public adicionarP(valor: number, posicao: number) {

        if (posicao == 0) {
            this.adicionarInicio(valor);
            return;
        }
        if (posicao >= this.contador) {
            this.adicionarfinal(valor);
            return;
        }


        let novo = new Fila(valor);
        let atual = this.inicio;
        let i = 0;

        while (i < posicao) {
            atual = atual!.proximo;
            i++;
        }

        novo.anterior = atual!.anterior;
        novo.proximo = atual;

        atual!.anterior!.proximo = novo;
        atual!.anterior = novo;

        this.contador++;

    }

    public removerP(posicao: number) {
        if (!this.inicio || posicao < 0 || posicao >= this.contador) {
            return null;
        }

        if (posicao === 0) {
            return this.removerprimeiro();
        }

        if (posicao === this.contador - 1) {
            return this.removerultimo();
        }

        let atual:Fila|null = this.inicio!;
        let i = 0;

        while (i < posicao) {
            atual = atual!.proximo;
            i++;
        }

        const valor = atual!.elemento;

        atual!.anterior!.proximo = atual!.proximo;
        atual!.proximo!.anterior = atual!.anterior;

        this.contador--;

        return valor;
    }
}
