import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntegrationService } from '../../service/IntegrationService/integration.service';

@Component({
  selector: 'app-tracing',
  imports: [CommonModule],
  templateUrl: './tracing.component.html',
  styleUrl: './tracing.component.css'
})
export class TracingComponent {
  selectedFile!: File;
  loading = false;
  result: any = null;
  notification = '';
  notificationType = 'success';

  constructor(
    private traceService: IntegrationService
  ) {}

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (file) {

      this.selectedFile = file;

      this.showNotification(
        'Image selected successfully',
        'success'
      );
    }
  }

  traceImage() {
    if (!this.selectedFile) {
      this.showNotification(
        'Please choose an image',
        'error'
      );
      return;
    }

    this.loading = true;

    this.result = null;

    this.traceService
      .traceImage(this.selectedFile)
      .subscribe({

        next: (res) => {
          this.result = res;
          this.loading = false;

          if (res.status === 'FOUND') {
            this.showNotification(
              'Suspicious user identified successfully',
              'success'
            );
          } else {

            this.showNotification(
              'No suspicious user found',
              'warning'
            );
          }
        },

        error: () => {

          this.loading = false;

          this.showNotification(
            'Tracing failed',
            'error'
          );
        }
      });
  }

  showNotification(
    message: string,
    type: string
  ) {

    this.notification = message;

    this.notificationType = type;

    setTimeout(() => {
      this.notification = '';
    }, 4000);
  }
}
