import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { PagesComponent } from "./pages.component";


const pagesRoutes: Routes =[
    {
        path: '', 
        component: PagesComponent,
        children: [

            { path: 'dashboard', component: DashboardComponent },
            { path: 'graphic', component: GraphicsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
    
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);