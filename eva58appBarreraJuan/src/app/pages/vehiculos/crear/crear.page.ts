import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Automovil } from 'src/app/domain/Automovil';
import { VehiculoService } from 'src/app/service/vehiculo.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  
  contacto: Automovil = new Automovil();
  contador: any;

  constructor(private route: ActivatedRoute, 
        private router: Router,
        private contactoService: VehiculoService){

        route.queryParams.subscribe(params =>{
          console.log(params)
          //Para parametros constantes
          //this.contacto = params.contacto;

          //Para parametros de tipo objeto
          this.contacto = new Automovil();

          if(this.router.getCurrentNavigation().extras.queryParams){
            this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto;
            console.log(this.contacto);
        }
      }
    )
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.contacto);
    this.contactoService.save(this.contacto);
    this.router.navigate(['/vehiculos/listar'])
  }


}
