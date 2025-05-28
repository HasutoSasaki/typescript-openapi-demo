import { Request, Response } from 'express';

export class ApiController {
    getMethod(req: Request, res: Response): void {
        res.json({ message: "This is an example response" });
    }

    getMethodById(req: Request, res: Response): void {
        const id = req.params.id;

        // 例として、IDが存在するかの簡単なチェック
        if (id === "123") {
            res.json({ message: `This is an example response for ID ${id}` });
        } else {
            res.status(404).json({ error: "Example data not found" });
        }
    }

    postMethod(req: Request, res: Response): void {
        const data = req.body;
        res.json({ received: data });
    }
}
