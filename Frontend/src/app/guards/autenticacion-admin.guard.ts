import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from 'rxjs';
import { UsuariosService } from "../servicios/usuarios.service";

@Injectable({
  providedIn: "root",
})
export class AutenticacionAdminGuard implements CanActivate {
  datosUser = JSON.parse(sessionStorage.getItem("user"));
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (this.datosUser!= null) {
     if (
       this.datosUser.codigoEstadoLogin == true &&
       this.datosUser.rol == "5ed57bda29b6a53e447a1941"
     )
       return true;
   }
     else{
      sessionStorage.clear();
      console.log("este usuario no esta logeado");
      this.router.navigateByUrl("/admin");
      return false;
    }
  }
}
