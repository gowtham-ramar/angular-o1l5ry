import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './day3/component/login/login.component';
import { HomeComponent } from './day3/component/home/home.component';
import { ContactComponent } from './day3/component/contact/contact.component';

const routes: Routes =[
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
    //   { path: '**', redirectTo: 'login' },
      {
        path: 'home-lazy',
        loadChildren: './day3/customers/customers.module#CustomersModule'
      },
      
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
    ]

@NgModule({
  declarations: [ 
    LoginComponent, HomeComponent, ContactComponent
  ],
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


