  module Test = {

    let join = ee => Frp.E.switch_(Frp.E.never, ee);
    let bind = (e, f) => join(Frp.E.map(f, e));
  };
