console.log('Hello from main.js');

const worker = new Worker('worker.js');

worker.onmessage = (msg) => {
  console.log('Received message from executor', msg.data);
};

worker.postMessage('message sended to executor');

console.log('end main.js');
