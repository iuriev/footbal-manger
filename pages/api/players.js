import { players } from './data/players';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(players);
  };
}
