import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule)
  },
  {
    path: 'withdrawal',
    loadChildren: () => import('./withdrawal/withdrawal.module').then(m => m.WithdrawalModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
