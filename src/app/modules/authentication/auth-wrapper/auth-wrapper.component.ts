import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {

  @Input() heading: string = '';
  @Input() subHeading: string = '';
  @Input() formName: string = '';
  @Input() footer: TemplateRef<any> | null = null;
  @Input() header: TemplateRef<any> | null = null;
  @Input() actionBody: TemplateRef<any> | null = null;

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit(): void {
    
  }

  onFormReady(form: FormGroup): void {
    this.formReady.emit(form); 
  }

}
