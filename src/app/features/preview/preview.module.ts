import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewRoutesModule } from './preview.routes';
import { ButtonsPage } from './pages/buttons/buttons.page';
import { ColorsPage } from './pages/colors/colors.page';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsPage } from './pages/forms/forms.page';


@NgModule({
  declarations: [ButtonsPage, ColorsPage, FormsPage],
  imports: [
    CommonModule,
    PreviewRoutesModule,
    FontAwesomeModule
  ]
})
export class PreviewModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
