import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './home/home-shell/home-shell.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'shoppinglist',
        loadChildren: './shopping/shopping.module#ShoppingModule'
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
