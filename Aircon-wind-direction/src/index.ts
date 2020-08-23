import { Context, APIGatewayEvent } from "aws-lambda";
import axios from 'axios';

export async function handler(event: APIGatewayEvent, context?: Context): Promise<string> {
    const token = process.env['remoToken'];
    console.log(token);
    return `Hello, ${token}!`;
}
