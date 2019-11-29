import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TermsService } from '../terms.service';

@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styles: []
})
export class TermsListComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  terms: any[];
  pagesCount: number;
  currentPage = 1;
  constructor(
    private termService: TermsService) {
  }

  ngOnInit() {
    this.subscription.add(this.termService.getAll()
      .subscribe(result => {
        if (result.success) {
          this.terms = result.data;
          this.pagesCount = result.pagesCount;
        }
      }));
  }

  loadMore() {
    if (this.currentPage <= this.pagesCount) {
      this.subscription.add(this.termService.getAll(this.currentPage)
        .subscribe(result => {
          if (result.success) {
            result.data.forEach(d => {
              this.terms.push(d);
            });
            this.currentPage = this.currentPage + 1;
          }
        }));
    }
  }
  deleteTerm(id) {
    const confirmed = confirm('are you sure?');
    if (confirmed) {
      this.subscription.add(this.termService.delete(id)
        .subscribe(result => {
          if (result.success) {
            this.terms = this.terms.filter(t => t.id !== id);
          }
        }));
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
