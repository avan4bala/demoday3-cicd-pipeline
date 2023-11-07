export async function handler(event: string, contect: string) {
    console.log('Stage Name is: ' + process.env.stage );
    return {
        body: 'Hello, this is a Lambda for Demo Day 3!',
        statusCode: 200,
    };
}