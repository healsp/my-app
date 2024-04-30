import type { NextApiRequest, NextApiResponse } from 'next'

function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({message: "jsonvalue"});
}

export default handler;