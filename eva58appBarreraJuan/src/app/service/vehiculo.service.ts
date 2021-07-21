import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Automovil } from '../domain/Automovil';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(public afs : AngularFirestore) { }

  save(contacto: Automovil){
    const refContactos = this.afs.collection("Automoviles");
    if(contacto.uid == null){
        contacto.uid = this.afs.createId();
        contacto.activo = true;
    }
    refContactos.doc(contacto.uid).set(Object.assign({}, contacto))
  }

  getContactos():Observable<any[]> {
    return this.afs.collection("Automoviles", 
                              ref => ref.where("activo", "==", true)).valueChanges();
  }



}
