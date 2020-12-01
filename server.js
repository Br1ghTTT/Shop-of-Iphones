const http = require('http')
//const url = require('url');
const static = require('node-static');
const twilio = require('twilio');
const client = new twilio('ACe826814f667bf051e2cc920a93cace66', '209b0823bcebbc78ad76f4bfdb880d6d');
const file = new static.Server('.');

function accept(req, res){
    if(req.url == '/note'){
        setTimeout(function(){
                client.messages.create({
                    to: '+380938541772',
                    from: '+14132695234',
                    body: "We've got your message, and we'll notificate you when Iphone 12 are going to be available at our service",
                  }).then((message) => console.log(message.sid)); 
                  res.end("Message has already sent")        
        },3000);
    }else{
        file.serve(req,res);
    }
}

http.createServer(accept).listen(5050);
console.log("Server is running on port 5050");