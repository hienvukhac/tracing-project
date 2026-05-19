import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { label: 'Tổng số tệp gốc', value: '150', icon: 'description', color: '#2c7be5' },
    { label: 'Bản sao được phân phối', value: '1,250', icon: 'content_copy', color: '#00d97e' },
    { label: 'Vi phạm được phát hiện', value: '05', icon: 'warning', color: '#e63757' },
    { label: 'Người dùng được quản lý', value: '980', icon: 'person', color: '#f6c343' }
  ];

  chartData = [
    { day: 'Mon', percent: 60 },
    { day: 'Tue', percent: 40 },
    { day: 'Wed', percent: 55 },
    { day: 'Thu', percent: 80 },
    { day: 'Fri', percent: 90 },
    { day: 'Sat', percent: 70 },
    { day: 'Sun', percent: 45 }
  ];

  activities = [
    { time: '10:20 PM', action: 'Embedding', content: 'Project_Secret_v1.pdf', user: 'User_A' },
    { time: '09:15 PM', action: 'Upload', content: 'New_API_Doc.docx', user: 'Admin' },
    { time: '08:05 PM', action: 'Embedding', content: 'Training_Video.mp4', user: 'User_B' }
  ];


  alerts = [
    { fileName: 'Movie_Leak.mp4', leakerId: '8829' },
    { fileName: 'Doc_TopSecret.pdf', leakerId: '1045' }
  ];
}
