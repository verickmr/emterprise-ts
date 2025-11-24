import { HttpResponse, HttpStatus } from "./protocols.ts"

export const badRequest = (error: any): HttpResponse<any> => {
    return {
        statusCode: HttpStatus.BAD_REQUEST,
        body: error
    }
}

export const ok = <T>(body:any): HttpResponse<T> => {
    return {
        statusCode: HttpStatus.OK,
        body
    }
}

export const created = <T>(body: any): HttpResponse<T> => {
    return {
        statusCode: HttpStatus.CREATED,
        body
    }
}

export const internalServerError = (error: any): HttpResponse<any>  => {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        body: {
            message: "Internal server error",
            error: String(error)
        }
    }
}

