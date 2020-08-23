import { Context, APIGatewayEvent } from "aws-lambda";
import axios from 'axios';

export async function handler(event: APIGatewayEvent, context?: Context): Promise<string> {
    const token = process.env['remoToken'];
    const baseRequest = axios.create({
        baseURL: `api.nature.global`,
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'json'
    });

    const res = await baseRequest.get('/1/devices');
    console.log(res);
    return `Hello, ${token}!`;
}
