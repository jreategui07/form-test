import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  formTest: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formTest = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      hasPhone: [false, Validators.required],
      phoneNumber: ['', Validators.required],
    });

  }

  onSubmit() {
    console.log(this.formTest.controls.hasPhone.value);
  }

}
