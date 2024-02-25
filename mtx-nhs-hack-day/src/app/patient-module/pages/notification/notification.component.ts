import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  notification?: string
  date?: string

  ngOnInit(): void {
    this.notification = this.getNotification();
    this.date = this.getDate();
  }

  private getNotification(): string {
    return "alert";
  }

  private getDate(): string {
    return "25/02/2024";
  }
}
