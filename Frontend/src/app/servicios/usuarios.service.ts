import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  registroUsuario(data) {
    return this.httpClient.post("http://localhost:8888/usuario/registro", data);
  }
  actualizarRolUsuario(idUser,data) {
    return this.httpClient.put(`http://localhost:8888/usuario/${idUser}`, data);
  }
  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get("http://localhost:8888/usuario");
  }
  obtenerUsuario(idUser): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/usuario/${idUser}`);
  }
  loginUsuario(data) {
    return this.httpClient.post(`http://localhost:8888/usuario/login`,data);
  }
  logoutUsuario() {
    return this.httpClient.get(`http://localhost:8888/usuario/logout`);
  }
}
