import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('./authentication/login.module').then(m => m.LoginModule)
      },
      {
        path: 'itineraries',
        loadChildren: () => import('./itineraries/itineraries.module').then(m => m.ItinerariesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
