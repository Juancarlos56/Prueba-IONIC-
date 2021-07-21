import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'vehiculos/buscar',
    loadChildren: () => import('./pages/vehiculos/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'vehiculos/listar',
    loadChildren: () => import('./pages/vehiculos/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'vehiculos/crear',
    loadChildren: () => import('./pages/vehiculos/crear/crear.module').then( m => m.CrearPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
