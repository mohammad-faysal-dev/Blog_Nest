import { type Request, type Response, type NextFunction } from 'express';
import { Prisma } from '../../generated/prisma/client';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    let statusCode = 500;
    let errorMessage = "Internal server error";
    let errorDetails = err;
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        errorMessage = "You provied incorrect field type or missing fields!"
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            statusCode = 400;
            errorMessage = "An optional field because it depends one or more records that were required but"
        }
        else if (err.code === "P2002") {
            statusCode = 400;
            errorMessage = "Duplicate key error"
        }
        else if (err.code === "P2003") {
            statusCode = 400;
            errorMessage = "Foreign key constraint failed"
        }
    }
    else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = 500;
        errorMessage = "Error occurred during query execution"
    }
    res.status(statusCode);
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}

export default errorHandler