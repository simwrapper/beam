import{o as j,c as M,p as m}from"./cubehelix-004858ee.js";class A{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const r=this._partials;let t=0;for(let i=0;i<this._n&&i<32;i++){const o=r[i],f=n+o,a=Math.abs(n)<Math.abs(o)?n-(f-o):o-(f-n);a&&(r[t++]=a),n=f}return r[t]=n,this._n=t+1,this}valueOf(){const n=this._partials;let r=this._n,t,i,o,f=0;if(r>0){for(f=n[--r];r>0&&(t=f,i=n[--r],f=t+i,o=i-(f-t),!o););r>0&&(o<0&&n[r-1]<0||o>0&&n[r-1]>0)&&(i=o*2,t=f+i,i==t-f&&(f=t))}return f}}function F(e,n){const r=new A;if(n===void 0)for(let t of e)(t=+t)&&r.add(t);else{let t=-1;for(let i of e)(i=+n(i,++t,e))&&r.add(i)}return+r}function O(e,n){const r=new A;let t=-1;return Float64Array.from(e,n===void 0?i=>r.add(+i||0):i=>r.add(+n(i,++t,e)||0))}const p=Math.sqrt(50),q=Math.sqrt(10),I=Math.sqrt(2);function l(e,n,r){const t=(n-e)/Math.max(0,r),i=Math.floor(Math.log10(t)),o=t/Math.pow(10,i),f=o>=p?10:o>=q?5:o>=I?2:1;let a,c,u;return i<0?(u=Math.pow(10,-i)/f,a=Math.round(e*u),c=Math.round(n*u),a/u<e&&++a,c/u>n&&--c,u=-u):(u=Math.pow(10,i)*f,a=Math.round(e/u),c=Math.round(n/u),a*u<e&&++a,c*u>n&&--c),c<a&&.5<=r&&r<2?l(e,n,r*2):[a,c,u]}function V(e,n,r){if(n=+n,e=+e,r=+r,!(r>0))return[];if(e===n)return[e];const t=n<e,[i,o,f]=t?l(n,e,r):l(e,n,r);if(!(o>=i))return[];const a=o-i+1,c=new Array(a);if(t)if(f<0)for(let u=0;u<a;++u)c[u]=(o-u)/-f;else for(let u=0;u<a;++u)c[u]=(o-u)*f;else if(f<0)for(let u=0;u<a;++u)c[u]=(i+u)/-f;else for(let u=0;u<a;++u)c[u]=(i+u)*f;return c}function w(e,n,r){return n=+n,e=+e,r=+r,l(e,n,r)[2]}function z(e,n,r){n=+n,e=+e,r=+r;const t=n<e,i=t?w(n,e,r):w(e,n,r);return(t?-1:1)*(i<0?1/-i:i)}function T(e,n,r){e=+e,n=+n,r=(i=arguments.length)<2?(n=e,e=0,1):i<3?1:+r;for(var t=-1,i=Math.max(0,Math.ceil((n-e)/r))|0,o=new Array(i);++t<i;)o[t]=e+t*r;return o}function x(e,n){n||(n=[]);var r=e?Math.min(n.length,e.length):0,t=n.slice(),i;return function(o){for(i=0;i<r;++i)t[i]=e[i]*(1-o)+n[i]*o;return t}}function v(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $(e,n){return(v(n)?x:k)(e,n)}function k(e,n){var r=n?n.length:0,t=e?Math.min(r,e.length):0,i=new Array(t),o=new Array(r),f;for(f=0;f<t;++f)i[f]=_(e[f],n[f]);for(;f<r;++f)o[f]=n[f];return function(a){for(f=0;f<t;++f)o[f]=i[f](a);return o}}function N(e,n){var r=new Date;return e=+e,n=+n,function(t){return r.setTime(e*(1-t)+n*t),r}}function s(e,n){return e=+e,n=+n,function(r){return e*(1-r)+n*r}}function S(e,n){var r={},t={},i;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in e?r[i]=_(e[i],n[i]):t[i]=n[i];return function(o){for(i in r)t[i]=r[i](o);return t}}var g=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,d=new RegExp(g.source,"g");function D(e){return function(){return e}}function R(e){return function(n){return e(n)+""}}function B(e,n){var r=g.lastIndex=d.lastIndex=0,t,i,o,f=-1,a=[],c=[];for(e=e+"",n=n+"";(t=g.exec(e))&&(i=d.exec(n));)(o=i.index)>r&&(o=n.slice(r,o),a[f]?a[f]+=o:a[++f]=o),(t=t[0])===(i=i[0])?a[f]?a[f]+=i:a[++f]=i:(a[++f]=null,c.push({i:f,x:s(t,i)})),r=d.lastIndex;return r<n.length&&(o=n.slice(r),a[f]?a[f]+=o:a[++f]=o),a.length<2?c[0]?R(c[0].x):D(n):(n=c.length,function(u){for(var h=0,y;h<n;++h)a[(y=c[h]).i]=y.x(u);return a.join("")})}function _(e,n){var r=typeof n,t;return n==null||r==="boolean"?j(n):(r==="number"?s:r==="string"?(t=M(n))?(n=t,m):B:n instanceof M?m:n instanceof Date?N:v(n)?x:Array.isArray(n)?k:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?S:s)(e,n)}function C(e,n){return e=+e,n=+n,function(r){return Math.round(e*(1-r)+n*r)}}export{A,_ as a,C as b,V as c,w as d,$ as e,N as f,B as g,O as h,s as i,F as j,x as n,S as o,T as r,z as t};
//# sourceMappingURL=round-6ee9f28e.js.map
