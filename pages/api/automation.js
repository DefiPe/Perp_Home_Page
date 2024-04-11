import { create } from '@mailchimp/mailchimp_marketing';
import axios from 'axios';

create({
  apiKey: 'a2f6a8730d326e15723f3dba5eb12c29-us9',
  server: 'us9',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await axios.post(
        `https://us9.api.mailchimp.com/3.0/lists/c54c47cd26/members`,
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`apikey:${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`).toString('base64')}`,
          },
        }
      );

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}



//049613d1d26bcda5deef9b921574e9a6-us9
