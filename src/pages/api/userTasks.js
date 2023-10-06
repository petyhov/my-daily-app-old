import { ObjectId } from 'mongodb';

import { apiConstants } from '@/configs';

import { connectToDatabase } from '../../libs/mongodb';

export default async function handler(req, res) {
  try {
    if (req.method === apiConstants.get) {
      const { db } = await connectToDatabase();
      const data = await db.collection('userTasks').find({}).toArray();
      res.status(200).json(data);
    }

    if (req.method === apiConstants.put) {
      const { _id, value } = req.body;

      const { db } = await connectToDatabase();
      const data = await db.collection('userTasks').updateOne(
        {
          _id: new ObjectId(_id),
        },
        {
          $set: {
            isDone: value,
          },
        }
      );

      if (data.matchedCount === 0) {
        return res.status(401).json('user task not found');
      }

      res.status(200).json(data);
    }
  } catch (e) {
    console.error(e);
  }
}
