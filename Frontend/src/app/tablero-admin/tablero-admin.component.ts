import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../servicios/usuarios.service";
import { CanActivate, Router } from "@angular/router";
import Swal from "sweetalert2";
import { SidebarModule } from "ng-sidebar";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
@Component({
  selector: "app-tablero-admin",
  templateUrl: "./tablero-admin.component.html",
  styleUrls: ["./tablero-admin.component.css"],
})
export class TableroAdminComponent implements OnInit {
  constructor(
    private UsuarioService: UsuariosService,
    private router: Router
  ) {}
  datosUser;
  isCollapsed;
  ngOnInit(): void {
    this.datosUser = JSON.parse(sessionStorage.getItem("user"));
  }
  logout() {
    this.UsuarioService.logoutUsuario().subscribe((res: any) => {
      Toast.fire({
        icon: "success",
        title: "Logout con éxito",
      });
      this.router.navigate(["/admin"]);
    });
  }
  NgbdCollapseBasic() {
    this.isCollapsed = false;
  }
}


