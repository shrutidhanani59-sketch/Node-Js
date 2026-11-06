const http = require("http");
const app = http.createServer((req , res)=>{
    const url = req.url;
    
    res.writeHead(200, { "Content-Type": "text/html" });
    
    let title = "";
    let content = "";

    if (url == "/") {
        
        res.write(`<h1 style="color:#2563eb; font-size:45px;">Welcome to My Website!</h1>
            <p style="color:#475569; font-size:18px;">Learn, Explore and Build Your Future.</p>
             <a href="/about" style="display:inline-block; background:#2563eb; color:white; padding:14px 28px; border-radius:8px; text-decoration:none;">Learn More</a>`);
    } else if (url == "/about") {
        res.write(`<h1 style="color:#2563eb;">About Me</h1>
            <p style="font-size:18px;">I am a Web Developer.</p>`);
    } else if (url == "/skill") {
        res.write(` <h1 style="color:#2563eb;">My Skills</h1>
            <p>HTML | CSS | JavaScript | React | Node.js</p>`);
    } else if (url == "/project") {
       res.write(`<h1 style="color:#2563eb;">My Projects</h1>
            <p>Weather App | Quiz App | JobFinder App</p>`);
    } else if (url == "/contact") {
       res.write(`<h1 style="color:#2563eb;">Contact Me</h1>
            <p>Email: example@gmail.com</p>`);
    } else {
        res.write(`<h1 style='color:red;'>404 - Page Not Found</h1>`);
        return;
    }


    res.end();
});

app.listen(3000);