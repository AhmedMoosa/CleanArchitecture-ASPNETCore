import { Component, OnInit, OnDestroy } from '@angular/core';
import { TermsService } from '../terms.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-create',
  templateUrl: './terms-create.component.html',
  styles: []
})
export class TermsCreateComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  constructor(
    private termService: TermsService,
    private router: Router) {
  }

  ngOnInit() {
  }

  save(form) {
    this.subscription.add(this.termService.create(form)
      .subscribe(result => {
        if (result.success) {
          this.router.navigate(['/terms']);
        }
      }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
