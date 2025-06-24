"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=e=>({animationDuration:e,animationFillMode:"both"}),r=e=>({animationDuration:e,animationFillMode:"both"}),s=function(e,t,i,n){const a=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]:Object.assign(Object.assign({},o(n)),{animationPlayState:"paused"}),[`${a}${e}-leave`]:Object.assign(Object.assign({},r(n)),{animationPlayState:"paused"}),[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:i,animationPlayState:"running",pointerEvents:"none"}}};exports.initMotion=s;
