import Itransportadora from "../transportadora/Itransportadora";
import Transportadora from "../transportadora/transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements Itransportadora{
    private token : Token;

//é o constructor que recebe qual será adaptada
    constructor(private transportadora: Transportadora){        
console.log("Adaptando transportadora no correios.")
    }

    authToken(): Token {
       return new Token();
    }
   
    sendCorreios(): void {
       return this.transportadora.sendCorreios();
    }
    
    recieveCorreios(): void {
       return this.transportadora.recieveCorreios();
    }
}