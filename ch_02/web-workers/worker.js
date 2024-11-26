console.log('Hello from Worker.js');

self.onmessage = (msg) => {
  console.log('message from main:', msg.data);
  postMessage('message was sended by executor');
};
