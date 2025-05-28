import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Postsリソースのハンドラー
export const handlePosts = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        // サンプルの投稿データ
        const posts = [
            { id: '1', title: '最初の投稿', content: 'これは最初の投稿内容です。' },
            { id: '2', title: '2番目の投稿', content: 'これは2番目の投稿内容です。' },
            { id: '3', title: '3番目の投稿', content: 'これは3番目の投稿内容です。' }
        ];

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        };
    } catch (error) {
        console.error('Error handling posts request:', error);

        return {
            statusCode: 404,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Posts not found'
            })
        };
    }
};