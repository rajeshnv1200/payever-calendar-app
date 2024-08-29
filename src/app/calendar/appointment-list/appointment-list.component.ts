import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input() appointments: any[] = [];

  editAppointment(appointment: any) {
    // 
  }

  deleteAppointment(appointment: any) {
    // 
  }
}
