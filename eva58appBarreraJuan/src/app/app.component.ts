import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscar', url: '/vehiculos/buscar', icon: 'search-outline' },
    //{ title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    //{ title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Listado', url: '/vehiculos/listar', icon: 'list-circle' },
    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Crear', url: '/vehiculos/crear', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
