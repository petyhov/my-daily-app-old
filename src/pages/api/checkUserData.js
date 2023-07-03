import { usersData } from '@/data';

export default async function handler(req, res) {
  const { password, userName } = req.body;
  const currentUser = usersData.find((user) => user.name === userName);

  if (currentUser.password === password) {
    return res.status(200).json({ loggedIn: true });
  }

  res.status(400).json({ loggedIn: false, error: 'wrong password' });
}
