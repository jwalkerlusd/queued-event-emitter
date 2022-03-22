# queued-event-emitter

Queued Event Emitter (queued-event-emitter)

Extending EventEmitter, sequentially and synchronously emits events defined in an array

Usage:
    QueuedEventEmitter - accepts an EventQueue and emits the events it defines.
        extends EventEmitter - all methods of EventEmitter are compatible
        .run(eventQueue) - processes the EventQueue and emits events
    EventQueue - contains the definitions of events to emit with a QueuedEventEmitter
        .push(eventName[, ...args])
    
