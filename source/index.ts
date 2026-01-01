import { Lista } from "./escadeada";

const lista = new Lista();

lista.adicionarInicio(5);
lista.adicionarfinal(10);
lista.adicionarfinal(20);
lista.adicionarP(15, 2);

console.log("Do início ao fim:");
lista.imprimirinicio();

console.log("Do fim ao início:");
lista.imprimirfinal();

console.log("Buscar 15:", lista.buscar(15));
console.log("Quantidade:", lista.elementos());

console.log("Removido início:", lista.removerprimeiro());
console.log("Removido final:", lista.removerultimo());
console.log("Removido posição 1:", lista.removerP(1));

console.log("Lista vazia?", lista.listavazia());

lista.imprimirinicio();
