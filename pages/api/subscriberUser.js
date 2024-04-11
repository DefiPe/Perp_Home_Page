// import fetch from 'isomorphic-unfetch';

// pages/api/subscribeUser.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  //console.log(email);

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // const AUDIENCE_ID = process.env.NEXT_MAILCHIMP_AUDIENCE_ID;
    // const API_KEY = process.env.MAILCHIMP_API_KEY;
    // const DATACENTER = process.env.NEXT_MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: "subscribed",
    };
    //console.log(data);

    const response = await fetch(
      `https://us9.api.mailchimp.com/3.0/lists/c54c47cd26/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `api_key ${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    let xyz = await response.json();
   // console.log(xyz);

    if (response.status >= 400) {
      //const data = await response.json();
      //res.status(500).json({ error: "Error" });
      throw new Error(data.title || "Failed to subscribe user.");
    }

    return res.status(201).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }

  // catch(e){
  //   console.log(e)
  // }
}
