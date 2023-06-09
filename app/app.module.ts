import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { DessertItemComponent } from './components/home-area/dessert-item/dessert-item.component';
import { ServiceComponent } from './component/service/service.component';
import { AppConfigServiceComponent } from './utils/app-config-service/app-config-service.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    SearchComponent,
    ProductsListComponent,
    AboutComponent,
    PageNotFoundComponent,
    DessertsComponent,
    DessertItemComponent,
    ServiceComponent,
    AppConfigServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
