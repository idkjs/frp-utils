module Unix = {
  type t = float;
  let gettimeofday = (): t => Js.Date.now();
  let sleep = ms => {
    Js.Promise.(
      make((~resolve, ~reject as _reject) => {
        let value = ();
        Js.Global.setTimeout(() => resolve(. value), ms)->ignore;
      })
    );
  };

  let localtime = (~time: float) => {
    let seconds = time->Js.Date.fromFloat->Js.Date.getSeconds;
    let seconds = seconds->int_of_float;
    let minutes = time->Js.Date.fromFloat->Js.Date.getMinutes;
    let minutes = minutes->int_of_float;
    let hours = time->Js.Date.fromFloat->Js.Date.getHours;
    let hours = hours->int_of_float;
    (seconds, minutes, hours);
  };
};

let pr_time = time => {
  let tm = Unix.localtime(~time);
  let (tm_sec, tm_min, tm_hour) = tm;
  Printf.printf("\027[8D%02d:%02d:%02d%!", tm_hour, tm_min, tm_sec);
};
open React;

let (seconds, run) = {
  let (event, send) = E.create();
  let run = () =>
    while (true) {
      send(Unix.gettimeofday());
      Unix.sleep(1) |> ignore;
    };
  (event, run);
};

let printer = E.map(pr_time, seconds);

let () = run();
