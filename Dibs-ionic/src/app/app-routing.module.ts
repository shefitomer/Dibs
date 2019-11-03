import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Home', loadChildren: './Home/Home.module#HomePageModule' },
  { path: 'Dibs', loadChildren: './Dibs/Dibs.module#DibsPageModule' },
  { path: 'Money', loadChildren: './Money/Money.module#MoneyPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: '', loadChildren: './Login/Login.module#LoginPageModule' },
  /*{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
