import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as d3 from "d3";
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';
import { SettingModule } from './setting/setting.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PagesModule } from './pages/pages.module';
import { CoupensModule } from './coupens/coupens.module';
import { MediaModule } from './media/media.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    ProductsModule,
    SettingModule,
    StatisticsModule,
    ProductsModule,
    PagesModule,
    CoupensModule,
    MediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
