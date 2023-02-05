import { Component } from '@angular/core';
import { Item } from '../item';

const myItem = new Item(42, 'Name Two', 'new power', 'Alias Two')


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  powers = ['One', 'Two', 'Three', 'Four'];

  model = new Item(18, 'Name', this.powers[0], 'Alias');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newItem() {
    this.model = new Item(42, '', '')
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; 
  }

}
