
type signalPair('a) = {
  signal: Frp.signal('a),
  setSignal: 'a => unit,
};

module Utils = {

  let eventFromPromise = promise => {
    open Belt.Result;
    open Js.Promise;
    let (promiseE, promiseF) = Frp.E.create();
    promise
    |> then_(x => {
         promiseF(Ok(x));
         promise;
       })
    |> catch(x => {
         promiseF(Error(x));
         promise;
       })
    |> ignore;
    promiseE;
  };
  module Event = {
    let join = ee => Frp.E.switch_(Frp.E.never, ee);
    let bind = (e, f) => join(Frp.E.map(f, e));
  };
};
