self.onmessage = ({ data: { buffer, name } }) => {
  const view = new Int32Array(buffer);
  console.log(`Executor ${name} started`);
  const result = Atomics.wait(view, 0, 0, 1000);
  console.log(`Executor ${name} waked with code ${result}`);
}
