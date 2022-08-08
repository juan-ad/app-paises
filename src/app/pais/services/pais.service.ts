import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino:string ): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.apiUrl}/name/${termino}`);
  }
}
