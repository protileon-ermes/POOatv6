import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import Icorreios from "./correios/Icorreios";
import Itransportadora from "./transportadora/Itransportadora";
import Transportadora from "./transportadora/transportadora";

const encomendaCorreios : Icorreios = new Correios();
encomendaCorreios.sendCorreios();
encomendaCorreios.recieveCorreios();

const encomendaTransportadora : Itransportadora= new TransportadoraAdapter(new Transportadora);
encomendaTransportadora.sendCorreios();
encomendaTransportadora.recieveCorreios();


