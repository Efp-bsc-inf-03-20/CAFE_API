import { Entity, PrimaryGeneratedColumn, Column, AfterInsert } from 'typeorm';
import { google } from 'googleapis';

@Entity({ name: 'cafeA' })
export class CafeA {
  @PrimaryGeneratedColumn()
  orderid: number;

  @Column()
  foodType: string;

  @Column()
  phonenumber: string;

  @Column()
  location: string;

  @Column()
  paymentmethod: string;

  @Column({ nullable: true }) // Allow null values for the email column
  email: string | null;

  @Column({ default: new Date() })
  orderedAt: Date;

  @AfterInsert()
  async sendNotification() {
    try {
      // Configure your Gmail API credentials
      const credentials = {
        client_id: '945057323641-9398cr0bfvkj5a0arnjq539ermva23ou.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uris: ['YOUR_REDIRECT_URI'],
        refresh_token: 'YOUR_REFRESH_TOKEN',
      };

      const oauth2Client = new google.auth.OAuth2(
        credentials.client_id,
        credentials.client_secret,
        credentials.redirect_uris[0]
      );

      oauth2Client.setCredentials({ refresh_token: credentials.refresh_token });

      const gmail = google.gmail({
        version: 'v1',
        auth: oauth2Client,
      });

      const mailOptions = {
        requestBody: {
          raw: this.createMessage(),
        },
        userId: 'me',
      };

      await gmail.users.messages.send(mailOptions);
      console.log('Notification email sent successfully.');
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  }
  private createMessage(){
    const subject = 'New Order Notification';
    const message='Food:'+this.foodType+''+'location:'+this.location+''+'orderid:'+this.orderid+''+'orderDate:'+
    this.orderedAt+''+'phone number:'+this.phonenumber+'paymemt method:'+this.paymentmethod+''+'your order has been placed successfully';
    

    const emailLines = [
      `From: ${'patsondamascus@gmail.com'}`,
      `To: ${this.email || ''}`,
      'Content-Type: text/html;charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${subject}`,
      '',
      `${message}`,
    ];

    const email = emailLines.join('\r\n').trim();
    const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');

    return encodedEmail;
  }
}
