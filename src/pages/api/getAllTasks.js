import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('my-daily-app');
    const data = await db.collection('completedTasks').find().toArray();
    res.status(200).json({ tasks: data });
  } catch (e) {
    console.error(e);
  }
}
