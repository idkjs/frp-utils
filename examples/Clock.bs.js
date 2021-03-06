// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");
var React$Frp = require("../react/src/react.bs.js");

function gettimeofday(param) {
  return Date.now();
}

function sleep(ms) {
  return new Promise((function (resolve, _reject) {
                setTimeout((function (param) {
                        return resolve(undefined);
                      }), ms);
                
              }));
}

function localtime(time) {
  var seconds = new Date(time).getSeconds();
  var seconds$1 = seconds | 0;
  var minutes = new Date(time).getMinutes();
  var minutes$1 = minutes | 0;
  var hours = new Date(time).getHours();
  var hours$1 = hours | 0;
  return [
          seconds$1,
          minutes$1,
          hours$1
        ];
}

var Unix = {
  gettimeofday: gettimeofday,
  sleep: sleep,
  localtime: localtime
};

function pr_time(time) {
  var tm = localtime(time);
  return Curry._3(Printf.printf(/* Format */{
                  _0: {
                    TAG: /* String_literal */11,
                    _0: "\x1b[8D",
                    _1: {
                      TAG: /* Int */4,
                      _0: /* Int_d */0,
                      _1: {
                        TAG: /* Lit_padding */0,
                        _0: /* Zeros */2,
                        _1: 2
                      },
                      _2: /* No_precision */0,
                      _3: {
                        TAG: /* Char_literal */12,
                        _0: /* ':' */58,
                        _1: {
                          TAG: /* Int */4,
                          _0: /* Int_d */0,
                          _1: {
                            TAG: /* Lit_padding */0,
                            _0: /* Zeros */2,
                            _1: 2
                          },
                          _2: /* No_precision */0,
                          _3: {
                            TAG: /* Char_literal */12,
                            _0: /* ':' */58,
                            _1: {
                              TAG: /* Int */4,
                              _0: /* Int_d */0,
                              _1: {
                                TAG: /* Lit_padding */0,
                                _0: /* Zeros */2,
                                _1: 2
                              },
                              _2: /* No_precision */0,
                              _3: {
                                TAG: /* Flush */10,
                                _0: /* End_of_format */0
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  _1: "\x1b[8D%02d:%02d:%02d%!"
                }), tm[2], tm[1], tm[0]);
}

var match = React$Frp.E.create(undefined);

var send = match[1];

var $$event = match[0];

function run(param) {
  while(true) {
    Curry._2(send, undefined, Date.now());
    sleep(1);
  };
  
}

var printer = React$Frp.E.map(pr_time, $$event);

run(undefined);

var seconds = $$event;

exports.Unix = Unix;
exports.pr_time = pr_time;
exports.seconds = seconds;
exports.run = run;
exports.printer = printer;
/* match Not a pure module */
