import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'admin', component: AdminComponent},
];
