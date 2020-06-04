import { Component, OnInit } from '@angular/core';
import { PaginaEstaticaService } from '../servicios/pagina-estatica.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-paginas-visibles',
  templateUrl: './paginas-visibles.component.html',
  styleUrls: ['./paginas-visibles.component.css']
})
export class PaginasVisiblesComponent implements OnInit {

  constructor(private paginaEstaticaService: PaginaEstaticaService) { }
paginas:any=[]
//true visible publica false privada
  ngOnInit(): void {
    this.cargarPaginas();
  }
  cargarPaginas(){
    this.paginaEstaticaService.obtenerPaginas().subscribe((res: any) => {
      this.paginas = res;
      console.log(this.paginas);
    })
  }
  cambiarVisibilidad(opciones, id){
    console.log(opciones);
    let estado = opciones[0].EstadoPagina;
    if (estado)//true si es visible
    {
      Swal.fire({
        title: "La pagina es publica",
        text: "¿Quieres que sea privada?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#209C31",
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, es privada ahora",
      }).then((result) => {
        if (result.value) {
          opciones[0].EstadoPagina=false;
          this.paginaEstaticaService.actualizarPagina(id,{"opciones": opciones}).subscribe((res: any) => {
            console.log(res);
            this.cargarPaginas();
            Swal.fire("Pagina actualizada", "", "success");
          });


        }
      });
    } else {
      Swal.fire({
        title: "La pagina es privada",
        text: "¿Quieres que sea publica?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#209C31",
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, es publica ahora",
      }).then((result) => {
        if (result.value) {
          opciones[0].EstadoPagina = true;
          this.paginaEstaticaService.actualizarPagina(id, { "opciones": opciones }).subscribe((res: any) => {
            console.log(res);
           // this.cargarPaginas();
            Swal.fire("Pagina actualizada", "", "success");
          });


        }
      });
    }
  }

}
