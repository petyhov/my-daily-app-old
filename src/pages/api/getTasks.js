import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    const test = new Date('2015-05-07T12:00:00Z').toLocaleString('uk-UA');
    const test2 = new Date('07.05.2023, 23:44:35').getDate();
    console.log('test', test);

    console.log('test2', test2);
    console.log('07.05.2023, 23:44:35');

    const data = await db
      .collection('completedTasks')
      .find({
        date: test,
      })
      .toArray();

    res.status(200).json({ tasks: data });
  } catch (e) {
    console.error(e);
  }
}
