import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class RolesService {
  constructor(private httpClient: HttpClient) {}

  obtenerRoles(): Observable<any> {
    return this.httpClient.get("http://localhost:8888/rol");
  }

  obtenerNombreRol(idRol): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/rol/${idRol}`);
  }
}
