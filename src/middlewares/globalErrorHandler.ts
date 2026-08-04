import { type Request, type Response, type NextFunction } from 'express';
import { Prisma } from '../../generated/prisma/client';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    let statusCode = 500;
    let errorMessage = "Internal server error";
    let errorDetails = err;
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 500;
        errorMessage = "You provied incorrect field type or missing fields!"
    }
    res.status(500);
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}

export default errorHandler