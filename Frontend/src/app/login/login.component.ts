import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../servicios/usuarios.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CanActivate, Router } from "@angular/router";
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private UsuarioService: UsuariosService,
    private router: Router
  ) {}

  formularioRegistro = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(40)]),
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
      ),
    ]),
    rol: new FormControl("5ed57bd129b6a53e447a1940"),
    nombreRol: new FormControl("Registrado"),
  });

  formularioLogin = new FormGroup({
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
      ),
    ]),
  });

  login: boolean = true;
  registro: boolean = false;
  servidorEstatus: boolean = false;
  mensajeServidor: String = "";
  ngOnInit(): void {
    sessionStorage.removeItem("user");}

  cambiarPanelLogin() {
    this.login = true;
    this.registro = false;
  }
  cambiarPanelRegistro() {
    this.login = false;
    this.registro = true;
  }
  logearse() {
    if (this.formularioLogin.valid) {
      this.UsuarioService.loginUsuario(this.formularioLogin.value).subscribe(
        (res: any) => {
          //console.log(res);
          if (!res.codigoEstadoLogin) {
            this.mensajeServidor = res.mensaje;
            this.servidorEstatus = true;
          } else {
          Toast.fire({
            icon: "success",
            title: "Signed con éxito",
          });
           let datosUser = {
             name: res.user.name,
             rol: res.user.rolId,
             codigoEstadoLogin: res.codigoEstadoLogin,
           };
          sessionStorage.setItem("user", JSON.stringify(datosUser));
          //console.log(JSON.parse(sessionStorage.getItem("user")));
          this.router.navigate(["/paginaPrincipal"]);
          }
        }
      );
    }
  }
  registrar() {
    this.UsuarioService.registroUsuario(
      this.formularioRegistro.value
    ).subscribe((res: any) => {
      console.log(res);
      this.cambiarPanelLogin();
    });
  }
  get name() {
    return this.formularioRegistro.get("name");
  }
  get password() {
    return this.formularioRegistro.get("password");
  }
  get email() {
    return this.formularioRegistro.get("email");
  }
  get emailL() {
    return this.formularioLogin.get("email");
  }
  get passwordL() {
    return this.formularioLogin.get("password");
  }
}
