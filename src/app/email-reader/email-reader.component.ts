import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-email-reader',
  standalone: true,
  imports: [FormsModule],
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
    alert(`Email Sent!\n\nFrom: ${this.email.from}\nTo: ${this.email.to}\nSubject: ${this.email.subject}\nBody: ${this.email.body}`);
    this.clearForm();
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
