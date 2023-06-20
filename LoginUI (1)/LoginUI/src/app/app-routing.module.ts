import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate:[PermissionGuard],
  data:{
    Role: 'User'
  }
     },
  {
    path: 'forgotpassword',component:ForgotpasswordComponent

  },
  {
    path: 'admin',
    component:AdminComponent, canActivate:[PermissionGuard],
    data:{
      Role:'Admin'
    }
  },

  {
    path: 'client',
    component:ClientComponent, canActivate:[PermissionGuard],
    data:{
      Role:'Client'
    }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
