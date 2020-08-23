import { Context, APIGatewayEvent } from "aws-lambda";


export function handler(event: APIGatewayEvent, context?: Context): string {
    return `Hello, ${context}!`;
}
