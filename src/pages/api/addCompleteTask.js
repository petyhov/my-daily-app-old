import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { task, rightAnswer, checkAnswer } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('my-daily-app');
    await db.collection('completedTasks').insertOne({
      task,
      rightAnswer,
      checkAnswer,
    });
    res.status(200).json({ status: 'complete' });
  } catch (e) {
    console.error(e);
  }
}
