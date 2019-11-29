import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsFormComponent } from './terms-form/terms-form.component';
import { TermsCreateComponent } from './terms-create/terms-create.component';
import { TermsEditComponent } from './terms-edit/terms-edit.component';
import { TermsListComponent } from './terms-list/terms-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TermsFormComponent, TermsCreateComponent, TermsEditComponent, TermsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TermsRoutingModule
  ]
})
export class TermsModule { }
