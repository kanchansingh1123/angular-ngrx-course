import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class AppNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 150000,
      verticalPosition: 'top'
    });
  }
}
