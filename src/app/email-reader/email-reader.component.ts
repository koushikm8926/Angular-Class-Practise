import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
@Component({
  selector: 'app-email-reader',
  standalone: true,
  imports: [FormsModule, CommonModule,HighlightDirective],
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


  sentEmails: Array<{ to: string; subject: string }> = [];

  sendEmail() {
    if (this.email.from && this.email.to && this.email.subject) {
      this.sentEmails.push({
        to: this.email.to,
        subject: this.email.subject,
      });

      // Optionally, you can clear the form after sending
      this.clearForm();
    }
    else {
      console.error('Form is invalid:', this.email); // Log an error if the form is invalid
    }
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
