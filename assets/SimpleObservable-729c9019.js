import{j as e}from"./Accessor-815cb0cf.js";class r extends e{notify(){const o=this._observers;if(o&&o.length>0){const t=o.slice();for(const s of t)s.onInvalidated(),s.onCommitted()}}}export{r as s};
