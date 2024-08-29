import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { AppointmentFormComponent } from '../calendar/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    //AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule 
    
  ],
  exports: [
    //AppointmentFormComponent,
     
  ]
})

export class AppointmentModule { }