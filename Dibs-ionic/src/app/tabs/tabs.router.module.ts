import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: '../Home/Home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'Dibs',
        children: [
          {
            path: '',
            loadChildren: '../Dibs/Dibs.module#DibsPageModule'
          }
        ]
      },
      {
        path: 'Money',
        children: [
          {
            path: '',
            loadChildren: '../Money/Money.module#MoneyPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
