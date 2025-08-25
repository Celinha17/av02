import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Policial 
{
  id?: number;
  rg_civil: string;
  rg_militar: string;
  cpf: string;
  data_nascimento: string;
  matricula: string;
}

@Injectable({
  providedIn: 'root'
})

export class PolicialService 
{

  private apiUrl = 'http://localhost:3000/api/policiais';

  constructor(private http: HttpClient) { }

  cadastrar(policial: Policial): Observable<Policial> {
    return this.http.post<Policial>(this.apiUrl, policial);
  }

  listar(): Observable<Policial[]> {
    return this.http.get<Policial[]>(this.apiUrl);
  }

}
