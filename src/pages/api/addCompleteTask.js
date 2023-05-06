import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { task, secretValue, rightAnswer, checkAnswer } = req.body;
  try {
    const { db } = await connectToDatabase();
    await db.collection('completedTasks').insertOne({
      task,
      secretValue,
      rightAnswer,
      checkAnswer,
      date: new Date(),
    });
    res.status(200).json({ status: 'complete' });
  } catch (e) {
    console.error(e);
  }
}
