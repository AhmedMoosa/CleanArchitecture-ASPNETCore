import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'terms',
        loadChildren: () => import('./terms/terms.module')
          .then(t => t.TermsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
