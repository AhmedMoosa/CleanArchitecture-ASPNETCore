import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Term } from '..';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-terms-form',
  templateUrl: './terms-form.component.html',
  styles: []
})
export class TermsFormComponent implements OnInit {

  termForm: FormGroup;
  descMaxLength = 100;
  nameMaxLength = 25;
  @Input() model: Term;
  @Output() submitEvent = new EventEmitter<Term>();
  constructor(private fb: FormBuilder, private loaderService : LoaderService) { }

  ngOnInit() {
    if (!this.model) {
      this.model = new Term();
    }
    this.createTermForm();
  }

  createTermForm() {
    this.termForm = this.fb.group({
      name: [this.model.name, [Validators.required, Validators.maxLength(this.nameMaxLength)]],
      description: [this.model.description, [Validators.required, Validators.maxLength(this.descMaxLength)]],
    });
  }

  submit(form) {
    if (this.termForm.valid) {
      this.submitEvent.emit(form);
    }
  }
  get isLoading() {
    return this.loaderService.isLoading;
  }
}
