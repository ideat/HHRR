import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { PAGES_ROUTES } from "./pages.routes";


@NgModule({
    declarations: [
        DashboardComponent,
        GraphicsComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        GraphicsComponent,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}