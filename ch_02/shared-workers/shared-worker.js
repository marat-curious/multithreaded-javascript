const ID = Math.floor(Math.random() * 999999);
console.log('shared-worker.js');

const ports = new Set();

self.onconnect = (event) => {
  const port = event.ports[0];
  ports.add(port);
  console.log('Connection:', ID, ports.size);

  port.onmessage = (event) => {
    console.log('Message:', ID, event.data);

    for (let p of ports) {
      p.postMessage([ID, event.data]);
    }
  };
};
