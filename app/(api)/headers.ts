
type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const getHeaders = (requestType: RequestType) => {
    let allowedMethods: string;

    switch (requestType) {
        case 'GET':
            allowedMethods = 'GET, OPTIONS';
            break;
        case 'POST':
            allowedMethods = 'POST, OPTIONS';
            break;
        case 'PUT':
            allowedMethods = 'PUT, OPTIONS';
            break;
        case 'PATCH':
            allowedMethods = 'PATCH, OPTIONS';
            break;
        case 'DELETE':
            allowedMethods = 'DELETE, OPTIONS';
            break;
        default:
            allowedMethods = 'OPTIONS';
    };

    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': allowedMethods,
        'Access-Control-Allow-Headers': 'Content-Type'
    };
};
