import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AutenticacionUserGuard implements CanActivate {
  datosUser = JSON.parse(sessionStorage.getItem("user"));
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if(this.datosUser!= null){
     if (this.datosUser.codigoEstadoLogin==true)
          return true;
      } else {
      sessionStorage.clear();
      //this.router.navigate(["/login"]);
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
