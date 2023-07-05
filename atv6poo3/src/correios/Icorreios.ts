import Token from "../utils/Token";

export default interface Icorreios{
    authToken() : Token;
    sendCorreios() : void;
    recieveCorreios() : void;
}