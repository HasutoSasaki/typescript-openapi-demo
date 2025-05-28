import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { handleShare, handlePosts } from './handler/index.js';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log('Event received:', JSON.stringify(event, null, 2));

    try {
        // パスに基づいてハンドラーをルーティング
        const path = event.path;
        const method = event.httpMethod.toLowerCase();

        if (path === '/share' && method === 'post') {
            return await handleShare(event);
        } else if (path === '/posts' && method === 'get') {
            return await handlePosts(event);
        }

        // 未対応のパスやメソッド
        return {
            statusCode: 404,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Not Found'
            })
        };
    } catch (error) {
        console.error('Unhandled error:', error);

        // 汎用エラーレスポンス
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        };
    }
};