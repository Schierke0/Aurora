import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { RolesService } from '../servicios/roles.service';
import Swal from "sweetalert2";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  constructor(
    private usuarioService: UsuariosService,
    private servicioRoles: RolesService,
    private modalService: NgbModal
  ) {}

  usuarios: any = [];
  roles: any = [];
  opcionSeleccionado: string = '0';
  idRolSelecionado: string = '';
  nombreRolSeleccionado;
  name;
  email;
  password;

  ngOnInit(): void {
   // this.obtenerRol();
    this.cargarUsuarios();
    this.servicioRoles.obtenerRoles().subscribe((res) => this.roles=res);
  }

  open(content) {
    this.modalService.open(content);
  }
  GuardarUser(){
    let data={
      email:this.email,
      password:this.password,
      name:this.name,
      rol: this.idRolSelecionado,
      nombreRol: this.nombreRolSeleccionado
    }
    this.usuarioService.registroUsuario(data).subscribe((res:any)=>{
      this.cargarUsuarios();
      Swal.fire(
        `Usuario ${this.nombreRolSeleccionado} creado`,
        res.ArchivoGuardado.name,
        "success"
      );
      this.modalService.dismissAll();
    })
  }
  cargarUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe((res: any) => {
      this.usuarios = res;
    });
  }
  capturar() {
    this.idRolSelecionado = this.opcionSeleccionado;
    this.getNombreRol();
  }
  getNombreRol(){
    this.servicioRoles.obtenerNombreRol(this.idRolSelecionado).subscribe(res => { this.nombreRolSeleccionado= res.nombreRol});
  }
}
