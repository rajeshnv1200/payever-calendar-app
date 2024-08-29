import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  deleteAppointment(id: string) {
    throw new Error('Method not implemented.');
  }
  private appointments: Appointment[] = [];

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  addAppointment(appointment: Appointment): Observable<void> {
    this.appointments.push(appointment);
    return of();
  }

  updateAppointment(updatedAppointment: Partial<Appointment>, p0: any): Observable<void> {
    const index = this.appointments.findIndex(a => a.id === updatedAppointment.id);
    if (index !== -1) {
      this.appointments[index] = { ...this.appointments[index], ...updatedAppointment };
    }
    return of();
  }
  
  
}
