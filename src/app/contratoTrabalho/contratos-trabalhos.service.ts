import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contratoTrabalho } from './contratoTrabalho.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosTrabalhosService {

  private apiUrl = 'http://localhost:3000/contratoTrabalho';

  constructor(private http: HttpClient) { }

  listarContratoTrabalho(): Observable<contratoTrabalho[]>{
    return this.http.get<contratoTrabalho[]>(this.apiUrl);
  }

  cadastrarContratoTrabalho(ContratoTrabalho: contratoTrabalho): Observable<contratoTrabalho>{
    return this.http.post<contratoTrabalho>(this.apiUrl, ContratoTrabalho);
  }

  buscaContratoTrabalho(id: number): Observable<contratoTrabalho>{
    return this.http.get<contratoTrabalho>(`${this.apiUrl}/${id}`);
  }

  atualizarContratoTrabalho(id: number, ContratoTrabalho: contratoTrabalho): Observable<contratoTrabalho>{
    /*Colocar os itens que podem ser atualizados*/

    return this.http.patch<contratoTrabalho>(`${this.apiUrl}/${id}`, ContratoTrabalho);
  }

  deletarContratoTrabalho(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
