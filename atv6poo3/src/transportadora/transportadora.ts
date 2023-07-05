import Token from "../utils/Token";
import Itransportadora from "./Itransportadora";

export default class Transportadora implements Itransportadora{
    private token : Token;
    
    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.getToken())
        console.log("transportadora enviando encomenda");
    }
    recieveCorreios(): void {
        console.log("transportadora entregou encomenda");
    }
}