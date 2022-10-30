import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  /**URL = 'https://pintegradorarc.herokuapp.com/persona/';**/

  perURL = 'http://localhost:8080/per/';

  constructor(private httpCliente: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.httpCliente.get<Persona>(this.perURL+'traer/perfil')
  }
  public detail(id: number): Observable<Persona> {
    return this.httpCliente.get<Persona>(this.perURL + `detail/${id}`);
  }
  public save(persona: Persona): Observable<any> {
    return this.httpCliente.post<any>(this.perURL + 'create', persona);
  }
  public update(id: number, persona: Persona): Observable<any> {
    return this.httpCliente.put<any>(this.perURL + `update/${id}`, persona);
  }
  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.perURL + `delete/${id}`);
  }
}
