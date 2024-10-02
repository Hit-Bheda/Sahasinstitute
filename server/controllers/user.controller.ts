import { Request, RequestHandler, Response } from "express";

export const test: RequestHandler = ( req: Request, res: Response ) => {
    res.status(200).json({message: "test"})
}