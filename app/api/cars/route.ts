// import type { NextApiRequest, NextApiResponse } from 'next';


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const client = await clientPromise;
//   const db = client.db('car_spraying');

//   if (req.method === 'GET') {
//     const cars = await db.collection('cars').find({}).toArray();
//     res.status(200).json(cars);
//   } else if (req.method === 'POST') {
//     const { make, model, year, images, videos, description } = req.body;
//     const result = await db.collection('cars').insertOne({ make, model, year, images, videos, description });
//     res.status(201).json(result.ops[0]);
//   }
// }
