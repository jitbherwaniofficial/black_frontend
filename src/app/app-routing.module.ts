import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then((m)=>m.ProductsModule)
  },
  {
    path:'statistics',
    loadChildren: () => import('./statistics/statistics.module').then((m)=>m.StatisticsModule)
  },
  {
    path:'coupens',
    loadChildren: () => import('./coupens/coupens.module').then((m)=>m.CoupensModule)
  },
  {
    path:'pages',
    loadChildren: () => import('./pages/pages.module').then((m)=>m.PagesModule)
  },
  {
    path:'media',
    loadChildren: () => import('./media/media.module').then((m)=>m.MediaModule)
  },
  {
    path:'settings',
    loadChildren: () => import('./setting/setting.module').then((m)=>m.SettingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
