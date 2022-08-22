//factory function --> Função normal que retorna valores(ex objetos).

//constructor function --> Função que faz muita coisa, ja cria e retorna objeto. Apenas criamos ela, e aparti disso ela vai replicado automaticamente os proximos objetos.

//Sempre usar o (new) na frente da função construtora, quando for usa-lá para construir uma nova coisa..observe abaixo.

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();  
        this.pressionaEnter();

    }; 

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
             if(e.keyCode === 13) {
                 this.soma();
            }
        });
    };


    this.cliqueBotoes = () => {
        document.addEventListener('click', event =>  {
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el); 
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.oneDelet();
            if(el.classList.contains('btn-ep')) this.soma();    
        });
    };

    this.clearDisplay = () => this.display.value = '';
    this.oneDelet = () => this.display.value = this.display.value.slice(0, -1);

    this.addNumDisplay =  el => {
        this.display.value += el.innerText;
        this.display.focus(); //foco no display ao aperta tecla enter.
    };

    this.soma = () => {
    const conta = eval(this.display.value);

        try{
            const conta = eval(this.display.value);

            if(!conta) {
                alert("Conta inválida!");
                return;
            }
            this.display.value = String(conta);
        } catch(e) {
            alert("Conta inválida!");
                return;
        }   
    };

   // ñ precisa add o (el), já que ao clicka ele vai apagar.
     
};


const calculadora = new Calculadora();
calculadora.inicia();