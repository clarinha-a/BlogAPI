import { NextFunction } from "express";

export const privateRoute = async (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    const user = await verifyRequest(req)
    if(!user){
        return res.status(401).json({ error: 'Unauthorized'})
    }
    req.user= user
    next()
}