import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../servicios/usuarios.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CanActivate, Router } from "@angular/router";
import Swal from "sweetalert2";
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
  selector: "app-login-admin",
  templateUrl: "./login-admin.component.html",
  styleUrls: ["./login-admin.component.css"],
})
export class LoginAdminComponent implements OnInit {
  constructor(
    private UsuarioService: UsuariosService,
    private router: Router
  ) {}
  servidorEstatus: boolean = false;
  mensajeServidor: String = "";

  ngOnInit(): void {}
  formularioLogin = new FormGroup({
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
      ),
    ]),
  });
  get emailL() {
    return this.formularioLogin.get("email");
  }
  get passwordL() {
    return this.formularioLogin.get("password");
  }
  logearse() {
    if (this.formularioLogin.valid) {
      this.UsuarioService.loginUsuario(this.formularioLogin.value).subscribe(
        (res: any) => {
          console.log(res);
          if (!res.codigoEstadoLogin) {
            this.mensajeServidor = res.mensaje;
            this.servidorEstatus = true;
          } else {
            Toast.fire({
              icon: "success",
              title: "Signed con éxito",
            });
            this.router.navigate(["/dashboard"]);
          }
        }
      );
    }
  }
}
