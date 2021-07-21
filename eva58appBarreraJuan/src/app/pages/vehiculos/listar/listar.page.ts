import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router"
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  contactos: any;

  constructor(private router: Router, private contactoService: VehiculoService) { }

  ngOnInit() {
    this.contactos = this.contactoService.getContactos();
  }

  async editar(color,marca,matricula, tipo){

    let params: NavigationExtras ={
      queryParams: {
        color: color,
        marca: marca,
        matricula:matricula,
        tipo : tipo
      }
    }
    this.router.navigate(["vehiculos/editar"], params)
  }


  crear(){
    this.router.navigate(["vehiculos/crear"])
  }

  editarContacto(contacto: any){
    //()
    let params: NavigationExtras ={
      queryParams: {
        contacto: contacto
      }
    }
    this.router.navigate(["vehiculos/crear"], params)
  }


}
