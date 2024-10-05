import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-reader',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './email-reader.component.html',
  styleUrl: './email-reader.component.css'
})
export class EmailReaderComponent {
  email = {
    from: '',
    to: '',
    subject: '',
    body: ''
  };
  sendEmail() {
    if (!this.email.from || !this.email.to) {
      alert('Please fill out all required fields.');
      return;
    }
    alert('Email Sent!\n' + JSON.stringify(this.email));
  }

  clearForm() {
    this.email = {
      from: '',
      to: '',
      subject: '',
      body: ''
    };
  }
}
