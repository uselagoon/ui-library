"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./index.cjs86.js"),R=require("react");/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function a(){if(p)return t.__exports;p=1;var f=R,c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(o,e,i){var r,n={},_=null,s=null;i!==void 0&&(_=""+i),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)d.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:c,type:o,key:_,ref:s,props:n,_owner:m.current}}return t.__exports.Fragment=l,t.__exports.jsx=u,t.__exports.jsxs=u,t.__exports}exports.__require=a;
