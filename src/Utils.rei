open React;


module Utils: {
  /*

     Emits the value of a ReasonReact event into a signal or an event,
     returns a callback function to be used by the event prop of an
     element.

     For example, you can have a signal created with

     let (nameS, nameF) = S.create("");

     And in a text input you can have

     <input _type="text" onChange=(ReactReact.emitEventToStream(nameF)) />

     This way, whenever onChange happens, nameF is called and nameS is updated.

     You can do it for events in the same way.

     signalF: a function that emits a value to a signal or to an event

     It's called ToStream because it supports both signals and events

   */
  // let emitEventToStream: ('a => unit, ReactEvent.Form.t) => unit;
  /*

     Converts a Js.Promise.t into an event.

   */
  let eventFromPromise:
    Js.Promise.t('a) => event(Belt.Result.t('a, Js.Promise.error));
  module Event: {
    /*

       Takes an event that produces other events and keeps it as a single
       stream of the latest event that was emitted.

       In other words, when a new event is emitted, the stream from
       the previous event is now ignored.

     */
    let join: event(event('a)) => event('a);
    /*

       Takes an event and a function that takes the value emitted by
       the first parameter to return an event, and then returns the
       event produced by this function.

       Similar to Js.Promise.then_

     */
    let bind: (event('a), 'a => event('b)) => event('b);
  };
};
