// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React$FrpUtils = require("../react/src/react.bs.js");

function eventFromPromise(promise) {
  var match = React$FrpUtils.E.create(undefined);
  var promiseF = match[1];
  promise.then(function (x) {
          Curry._2(promiseF, undefined, {
                TAG: /* Ok */0,
                _0: x
              });
          return promise;
        }).catch(function (x) {
        Curry._2(promiseF, undefined, {
              TAG: /* Error */1,
              _0: x
            });
        return promise;
      });
  return match[0];
}

function join(ee) {
  return React$FrpUtils.E.$$switch(React$FrpUtils.E.never, ee);
}

function bind(e, f) {
  return join(React$FrpUtils.E.map(f, e));
}

var $$Event = {
  join: join,
  bind: bind
};

var Utils = {
  eventFromPromise: eventFromPromise,
  $$Event: $$Event
};

exports.Utils = Utils;
/* React-FrpUtils Not a pure module */
