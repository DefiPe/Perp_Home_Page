import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const records = await base(process.env.AIRTABLE_TABLE_NAME).select({}).firstPage();
      const data = records.map(record => record.fields);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { fields } = req.body;
      const createdRecord = await base(process.env.AIRTABLE_TABLE_NAME).create(fields);
      res.status(200).json(createdRecord.fields);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
};
