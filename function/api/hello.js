// functions/api/hello.js
// functions/api/hello.js
export function onRequest(context) {
    return new Response(JSON.stringify({ 
      message: "Hello from Cloudflare Worker!" 
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
};