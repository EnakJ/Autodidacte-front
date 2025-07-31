import {Formation} from "./Formation";

export interface ParcoursWithFormations{
  parcoursId : string;
  parcIntitule : string;
  parcMatricule : string;
  parcDescription : string;
  parcObjectif : string;
  parcDebut : string;
  parcStatus : string;
  parcEtat : string;
  parcCertified : string;
  formationDTOS : Formation[];
}
