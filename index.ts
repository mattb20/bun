import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(req){
    const url = new URL(req.url)
    if(url.pathname === '/') {
      const body = figlet.textSync('Welcome to my bun app')
      return new Response(body);
    }
    if(url.pathname === '/about') {
      return new Response('About me!')
    }
    return new Response('404')
  }
});
console.log(`Listening on PORT http://localhost:${server.port}`);
