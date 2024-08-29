import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent {

  appointment: any = { title: '', description: '' };

  hours: number[] = Array.from({ length: 24 }, (_, i) => i); // 0-23 hours
  minutes: number[] = [0, 15, 30, 45]; // 0, 15, 30, 45 minutes

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.appointment = data.appointment || { title: '', description: '' };
    }
  }

  onSubmit(): void {
    this.dialogRef.close(this.appointment);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  
 
}
