import{b as p}from"./index-c7e5a57b.js";function s(r,t,c){var e,l,n,i,o;t==null&&(t=100);function f(){var u=Date.now()-i;u<t&&u>=0?e=setTimeout(f,t-u):(e=null,c||(o=r.apply(n,l),n=l=null))}var a=function(){n=this,l=arguments,i=Date.now();var u=c&&!e;return e||(e=setTimeout(f,t)),u&&(o=r.apply(n,l),n=l=null),o};return a.clear=function(){e&&(clearTimeout(e),e=null)},a.flush=function(){e&&(o=r.apply(n,l),n=l=null,clearTimeout(e),e=null)},a}s.debounce=s;var m=s;const d=p(m);export{d as a,m as d};
//# sourceMappingURL=index-4f081855.js.map
