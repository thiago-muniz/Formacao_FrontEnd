export class ContaCorrente{
    agencia;
    // #saldo = 0; hastag para tornar  o atributo privado
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return "Retirou " + valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return; //early return - avalia o q não quer primeiro
        }
        this._saldo += valor;
    }
}