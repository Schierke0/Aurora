import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AutenticacionUserGuard implements CanActivate {
  datosUser = JSON.parse(sessionStorage.getItem("user"));
  router: any;
  constructor(){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.datosUser.codigoEstadoLogin == true &&
      this.datosUser.rol == "5ed57bda29b6a53e447a1941"
    ) {
      return true;
    } else {
      sessionStorage.clear();
      this.router.navigate(["/admin"]);
      return false;
    }
  }
}
