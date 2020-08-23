import { Context, APIGatewayEvent } from "aws-lambda";
import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();

export async function handler(event: APIGatewayEvent, context?: Context): Promise<string> {
    const token = process.env['REMO_TOKEN'];
    const baseRequest = axios.create({
        baseURL: `https://api.nature.global`,
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'json'
    });

    const res = await baseRequest.get('/1/devices')
        .catch(e => {
            console.error(e);
        });
    return res ? 'success!' : 'failured';
}
