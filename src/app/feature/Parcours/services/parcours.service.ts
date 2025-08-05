import {Injectable} from "@angular/core";
import {environement} from "../../../../environements/environement";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Parcours} from "../models/Parcours";
import {ParcoursWithFormations} from "../models/ParcoursWithFormations";

@Injectable({providedIn: 'root'})
export class ParcoursService{
  private api_url: string = `${environement.api_url}/parcours`;
  constructor(private httpClient: HttpClient) {
  }

  //Methode pour recupérer tous les parcours
  getAllParcours():Observable<Parcours[]>{
    return this.httpClient.get<Parcours[]>(`${this.api_url}`);
  }


  //Recupere les parcours avec leurs formations
  getAllParcoursWithFormation():Observable<ParcoursWithFormations[]>{
    return this.httpClient.get<ParcoursWithFormations[]>(`${this.api_url}/parcoursWithFormations`);
  }


  //Recupere un parcours par son id
  getParcoursById(parcoursId: string):Observable<Parcours>{
    return this.httpClient.get<Parcours>(`${this.api_url}/parcours/${parcoursId}/parcour`);
  }


  getParcoursImage(parcoursId: string){
    return this.httpClient.get(`${this.api_url}/${parcoursId}/image`, {responseType: 'blob'});
  }
}
