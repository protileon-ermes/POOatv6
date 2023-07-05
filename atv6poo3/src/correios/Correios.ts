import Token from "../utils/Token";
import Icorreios from "./Icorreios";

export default class Correios implements Icorreios{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
       this.token = this.authToken();
       console.log("TOKEN: "+ this.token.getToken())
       console.log("Correios enviando encomenda");
    }
    recieveCorreios(): void {
       console.log("Correios encomenda recebida");
    }
}