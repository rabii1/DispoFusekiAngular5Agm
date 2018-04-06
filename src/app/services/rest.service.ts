import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Personne} from '../models/personne';
import {Result} from '../models/result';

@Injectable()
export class RestService {


  baseUrl: any =' http://localhost:1337'

  constructor(public http:HttpClient) {


    }

   getAllDisponibilite() {
    return this.http.get(this.baseUrl+"/Disponibilte/list")
  };
  getAllPersonnePhyP(key) : Observable<Result>{
    return this.http.get<Result>(this.baseUrl+"/PersonnePhyP/list/"+key)
  }

}
