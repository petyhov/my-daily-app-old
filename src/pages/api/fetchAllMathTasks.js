import mathTasks from '@/data/mathTasks.json';

export default function handler(req, res) {
  res.status(200).json(mathTasks);
}
