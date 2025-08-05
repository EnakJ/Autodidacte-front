import {Injectable, OnInit} from "@angular/core";
import {environement} from "../../../../environements/environement";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programme} from "../models/Programme";
import {ProgrammeWithParcours} from "../models/ProgrammeWithParcours";

@Injectable({providedIn: 'root'})
export class ProgrammeService{
  private api_url: string = `${environement.api_url}/programs`;

  constructor(private httpClient: HttpClient ) {
  }

  // Methode : ecuperer tous les programmes
  getAllPrograms(): Observable<Programme[]>{
    return this.httpClient.get<Programme[]>(this.api_url)
  }


  // Methode : recupere programme par Id
  getProgramById(programId: string): Observable<Programme>{
    return this.httpClient.get<Programme>(`${this.api_url}/${programId}`)
  }


  //Methode : recupere un programme avec leurs parcours
  getProgramWithParcours(programId: string): Observable<ProgrammeWithParcours>{
    return this.httpClient.get<ProgrammeWithParcours>(`${this.api_url}/programParcoursParId/${programId}`)
  }

}
