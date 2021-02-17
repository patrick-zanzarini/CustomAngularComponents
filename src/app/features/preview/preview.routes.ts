import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsPage } from './pages/buttons/buttons.page';
import { ColorsPage } from './pages/colors/colors.page';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsPage,
  },

  {
    path: 'colors',
    component: ColorsPage,
  },

  {
    path: '**',
    redirectTo: '/buttons',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewRoutesModule {}
