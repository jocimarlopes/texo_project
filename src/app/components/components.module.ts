import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { DashboardCardsComponent } from "./dashboard-cards/dashboard-cards.component";
import { ListCardComponent } from "./list-card/list-card.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { MinWidthInformationComponent } from "./min-width-information/min-width-information.component";
import { SkeletonComponent } from "./skeleton/skeleton.component";

@NgModule({
    declarations: [
        HeaderComponent,
        DashboardCardsComponent,
        ListCardComponent,
        PaginationComponent,
        MinWidthInformationComponent,
        SkeletonComponent
    ],
    imports: [IonicModule, CommonModule],
    exports: [
        HeaderComponent,
        DashboardCardsComponent,
        ListCardComponent,
        PaginationComponent,
        MinWidthInformationComponent,
        SkeletonComponent
    ]
})

export class ComponentsModule {

    constructor() { }
}