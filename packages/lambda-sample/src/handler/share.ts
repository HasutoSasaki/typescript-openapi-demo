import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { paths } from '../api/v1.d';

// Shareリソースのハンドラー
export const handleShare = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        // リクエストボディのパース
        const body = event.body ? JSON.parse(event.body) : {};

        // 型安全なリクエストボディの処理
        const requestBody = body as paths['/share']['post']['requestBody']['content']['application/json'];

        console.log('Sharing resource:', {
            userName: requestBody.userName,
            itemId: requestBody.itemId,
            itemName: requestBody.itemName
        });

        // 成功レスポンスを返す
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                userId: '12345' // サンプルユーザーID
            })
        };
    } catch (error) {
        console.error('Error handling share request:', error);

        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: 'Invalid request'
            })
        };
    }
};