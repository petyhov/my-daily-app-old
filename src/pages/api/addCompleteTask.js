import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { secretTask, secretValue, checkAnswer } = req.body;

  try {
    const { db } = await connectToDatabase();
    await db.collection('completedTasks').insertOne({
      secretTask,
      secretValue,
      checkAnswer,
      date: new Date().getTime(),
    });
    res.status(200).json({ status: 'complete' });
  } catch (e) {
    console.error(e);
  }
}
