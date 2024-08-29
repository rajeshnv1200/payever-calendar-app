import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})




export class AppointmentFormComponent {

  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formCancelled = new EventEmitter<void>();

  onCancel() {
    throw new Error('Method not implemented.');
    this.formCancelled.emit();
  }

  appointment: any = { title: '', description: '', time: '' };

  onSubmit() {
    this.formSubmitted.emit(this.appointment);
    this.closeForm();
  }

  closeForm() {
    this.appointment = { title: '', description: '' };
  }

  
  
};
