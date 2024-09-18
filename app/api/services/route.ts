import connectDb from '@/lib/dbConnect';
import Service from '@/models/Service';
import type { NextApiRequest, NextApiResponse } from 'next';

connectDb();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const services = await Service.find({});
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching services' });
        }
    } else if (req.method === 'POST') {
        try {
            const service = new Service(req.body);
            await service.save();
            res.status(201).json(service);
        } catch (error) {
            res.status(500).json({ error: 'Error creating service' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
