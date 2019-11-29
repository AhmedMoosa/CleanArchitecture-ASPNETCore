import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private loaderService: LoaderService) {

  }

  get isLoading() {
    return this.loaderService.isLoading;
  }

}
