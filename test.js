const {EventQueue, QueuedEventEmitter } = require('./');

const numbers = [...Array(20).keys()];

var eventQueue = new EventQueue();

numbers.forEach(number => {
    eventQueue.push("number", number);
});

const emitter = new QueuedEventEmitter();

emitter.on("number", (number) => {
    console.log("number", number);
})

emitter.run(eventQueue);