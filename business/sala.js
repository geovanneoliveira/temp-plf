class sala{
    constructor(nome_){
        this.nome = nome_
        this.porta = false
        this.ar = false
        this.datashow = false
    }

    abrirSala(){
        this.porta = true
        this.ligarAr()
        console.log("sala aberta!\n\n")
    }

    fecharSala(){
        this.ar = false
        this.datashow = false
        this.porta = false
    }

    ligarAr(){
        this.ar = true
    }

    desligarAr(){
        this.ar = false
    }

    ligarData(){
        this.datashow = false
    }

    desligarData(){
        this.datashow = false
    }


}
module.exports = sala