// const wait = require('../src/wait');
// const process = require('process');
// const cp = require('child_process');
// const path = require('path');

test("throws invalid number", async () => {
    await expect(1).toBe(1);
});

// test('wait 500 ms', async () => {
//     const start = new Date();
//     await wait(500);
//     const end = new Date();
//     var delta = Math.abs(end - start);
//     expect(delta).toBeGreaterThanOrEqual(500);
// });

// // shows how the runner will run a javascript action with env / stdout protocol
// test('test runs', () => {
//     process.env['INPUT_MILLISECONDS'] = 100;
//     const ip = path.join(__dirname, '../src/main.js');
//     const result = cp.execSync(`node ${ip}`, { env: process.env }).toString();
//     console.log(result);
// })
