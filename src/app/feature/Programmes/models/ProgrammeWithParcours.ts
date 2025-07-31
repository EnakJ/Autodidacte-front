import {Parcours} from "./Parcours";

export interface ProgrammeWithParcours{
  progId : string;
  progMatricule : string;
  progIntitule : string;
  progDescription : string;
  progObjectif : string;
  progCertified : string;
  progDebut : string;
  progEtat : string;
  progression : string;
  progStatus : string;
  parcours : Parcours[];
}
