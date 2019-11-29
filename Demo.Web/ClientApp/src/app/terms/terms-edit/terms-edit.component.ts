import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TermsService } from '../terms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Term } from '..';

@Component({
  selector: 'app-terms-edit',
  templateUrl: './terms-edit.component.html',
  styles: []
})
export class TermsEditComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  selectedTerm: any;
  constructor(
    private termService: TermsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const routeSub = this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      const detailsSub = this.termService.find(id).subscribe(result => {
        if (result.success) {
          this.selectedTerm = result.data;
        }
      });
      this.subscription.add(detailsSub);
    });
    this.subscription.add(routeSub);
  }

  save(form) {
    this.subscription.add(this.termService.update(this.selectedTerm.id, form)
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
