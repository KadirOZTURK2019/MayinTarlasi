var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

 

  server.listen(3001, function(){
    console.log('listening on *:3001');
  });



  io.on('connection', function(socket){
     socket.on('startgame',function (data) {// bu iş htmlden tetiklenince çalışacak olan kısımtır (butona basıldığında)
       //  console.log(data);
       // alttaki kodlar /** ile anılacak ve çalışan kod üzeinde gidiyor*/

        var mayinlar =[];
        var satirmayin=[];
        for ( i = 0; i < 10; i++) {
            var mayinnumara1 = Math.floor(Math.random()*4) +1 ;
            var mayinnumara2 = Math.floor(Math.random()*4) +1 ;

            if (mayinnumara1==mayinnumara2) {
                i--;
            }
            else {
                satirmayin.push(mayinnumara1);
                satirmayin.push(mayinnumara2);
                mayinlar.push(satirmayin);
                satirmayin=[]; // mevcut diziyi boşatmak için yapıldı
            }
            
        }
      //  socket.emit("sendmayin",mayinlar);// bu scrpit ön tarafa yollamak için mayinlar dizisini sendmayin adi ile
     

    }) ;
    socket.on('oyna',function (oyundata) {// burası ön taraftan tetiklendi

        //console.log(oyundata); tıklanan butnonunattribiute u nedir onu yazar
      });
  });
   