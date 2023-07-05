import Token from "../utils/Token";

export default interface Itransportadora{
    authToken(): Token;
    sendCorreios() : void;
    recieveCorreios() : void;
}