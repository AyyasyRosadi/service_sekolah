import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


class Validator {
    protected validate = (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(415).json({message:"Data masih belum tepat"})
        }
        next()
    }
}

export default Validator;