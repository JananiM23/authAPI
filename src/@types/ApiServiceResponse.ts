export declare type ApiServiceResponse = {
    statusCode: number,
    response: {
        status: boolean,
        message: string,
        data?: [] | object;
    }
}