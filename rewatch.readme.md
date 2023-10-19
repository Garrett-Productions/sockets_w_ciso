ImageKit.io, it works with URL imputs 

1. Imagekit includes 'image transformations' within the url.
Ex) /demo/tr:w-300,h-300/medium.jpg
2. Water marking can be used in the url as well


Server Sides- Video 1 Notes

* What is a Socket?
- Pushing content out to the clients, 
- 2 way communication, game development, updates in real time
- We cant do this with a typical http request, sockets
- HTTP doesn't do real time chat or games.
- The req-res cycle, as soon at that request, responds, the socket closes.
- This means that we can not have a conversation because as soon as this response is done the socket closes.
- HTTP FORGETS ABOUT EVERYTHING OCNE YOU SEND THAT RESPONSE.

-Sockets give us the ability to listen for events, we're not sending request every minute to check, its always open, and listening 
-Socket says "hey lemme know when you get a message, I'll receive it automatically."


OPENING UP VS