import { Component, OnInit } from '@angular/core';
import { CategoriaService } from "../servicios/categoria.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { PaginaPostService } from '../servicios/pagina-post.service';
@Component({
  selector: "app-admin-post",
  templateUrl: "./admin-post.component.html",
  styleUrls: ["./admin-post.component.css"],
})
export class AdminPostComponent implements OnInit {
  constructor(
    private categoriaService: CategoriaService,
    private modalService: NgbModal,
    private paginaPostService: PaginaPostService
  ) {}
  categorias: any = [];
  comentarios: any = [];
  nombreCategoria: String;
  idCategoriaActual: String;
  nuevoNombre: String;

  name = "Angular";
  page = 1;
  pageSize = 4; //cantidad items a mostrar

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarComentarios();
  }
  cargarCategorias() {
    this.categoriaService.obtenerCategorias().subscribe((res: any) => {
      this.categorias = res;
    });
  }
  cargarComentarios() {
    this.paginaPostService.obtenerTodosComentarios().subscribe((res: any) => {
      res.forEach((e) => {
        e.comentarios.forEach((el) => {
          el.categoria=e.categoria;
          el.idPost = e._id;
          this.comentarios.push(el);
        });
      });
    });
  }
  eliminarCategoria(idCategoria, nombreCategoria) {
    Swal.fire({
      title: "¿Seguro quieres eliminar la categoria?",
      text: "No puedes reestablecerlo.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.value) {
        this.categoriaService
          .eliminarCategoria(idCategoria)
          .subscribe((res) => {
                        this.cargarCategorias();
            Swal.fire("Categoria eliminada", nombreCategoria, "success");
          });
      }
    });
    //console.log(idCategoria);
  }
  modalActualizar(idCategoria, nombreModal) {
    this.modalService.open(nombreModal);
    this.idCategoriaActual = idCategoria;
    //this.categoriaService.actualizarCategoria
  }
  actualizarCategoria() {
    let data = {
      nombreCategoria: this.nuevoNombre,
    };
    this.categoriaService
      .actualizarCategoria(this.idCategoriaActual, data)
      .subscribe((res: any) => {
        console.log(res);
        this.cargarCategorias();
        this.nuevoNombre = "";
        this.idCategoriaActual = "";
        this.modalService.dismissAll();
        Swal.fire("Categoria actualizada con exito", "", "success");
      });
  }

  nuevaCategoria() {
    let data = {
      nombreCategoria: this.nombreCategoria,
    };
    this.categoriaService.crearCategoria(data).subscribe((res: any) => {
      this.nombreCategoria = "";
      this.cargarCategorias();
      Swal.fire(
        "Tu archivo se ha cargado",
        res.ArchivoGuardado.nombreCategoria,
        "success"
      );
    });
  }
  marcarInapropiado(estado, idPost, idComentario){
if (estado)//true si es inapropiado, quitar inapropiado
{
   Swal.fire({
     title: "¿Ya no es inapropiado?",
     text: "Cambiar a comentario apropiado",
     icon: "question",
     showCancelButton: true,
     confirmButtonColor: "#209C31",
     cancelButtonColor: "#3085d6",
     cancelButtonText: "Cancelar",
     confirmButtonText: "Si, cambiar",
   }).then((result) => {
     if (result.value) {
       this.paginaPostService
         .cambiarEstadoComentario(idPost, idComentario, { inapropiado: false })
         .subscribe((res: any) => {
           this.cargarComentarios();
           Swal.fire("Comentario actualizado", "", "success");
         });
     }
   });
}else{
   Swal.fire({
     title: "¿Ya no es inapropiado?",
     text: "Cambiar a comentario inapropiado",
     icon: "question",
     showCancelButton: true,
     confirmButtonColor: "#209C31",
     cancelButtonColor: "#3085d6",
     cancelButtonText: "Cancelar",
     confirmButtonText: "Si, cambiar",
   }).then((result) => {
     if (result.value) {
       this.paginaPostService
         .cambiarEstadoComentario(idPost, idComentario, { inapropiado: true })
         .subscribe((res: any) => {
           this.cargarComentarios();
           Swal.fire("Comentario actualizado", "", "success");
         });
     }
   });
}
  }
  eliminarComentario(idComentario, idPost){
    Swal.fire({
      title: "¿Seguro quieres eliminar la categoria?",
      text: "No puedes reestablecerlo.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.value) {
         this.paginaPostService.eliminarComentario(idPost,idComentario).subscribe((res:any)=>{
      this.cargarComentarios();
      Swal.fire("Comentario eliminada", "", "success");
         })
      }
    });
  }
}
