import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const data = await db.collection('completedTasks').find({}).toArray();
    res.status(200).json({ tasks: data });
  } catch (e) {
    console.error(e);
  }
}
