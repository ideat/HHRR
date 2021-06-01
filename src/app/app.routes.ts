import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: DashboardComponent },
    { path: '**', component: NopagefoundComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );