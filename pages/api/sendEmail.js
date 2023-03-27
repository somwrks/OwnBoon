import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  const { email } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: 'noreply@ownboon.com', 
    subject: 'Thank you for signing up!',
    text: 'Thank you for signing up at OwnBoon',
    html: '<strong>We Will Update You Soon.</strong>',
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
};
