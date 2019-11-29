import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsListComponent } from './terms-list/terms-list.component';
import { TermsEditComponent } from './terms-edit/terms-edit.component';
import { TermsCreateComponent } from './terms-create/terms-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TermsListComponent },
  { path: 'create', component: TermsCreateComponent },
  { path: 'edit/:id', component: TermsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
