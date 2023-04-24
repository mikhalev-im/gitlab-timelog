import{S as He,i as Ie,s as $e,k as O,q as U,a as L,l as C,m as k,r as N,h as p,c as R,n as M,b as j,G as m,H as se,I as ye,e as be,M as Ye,u as re}from"../chunks/index.e6ee7f0b.js";import{p as Le}from"../chunks/stores.1dc0a94e.js";import{j as G}from"../chunks/singletons.3d82ed5a.js";import{q as Re,g as Ae,a as Qe}from"../chunks/urql-svelte.10f3327e.js";import{r as g,t as v,a as E,b as Be,s as pe,e as Xe}from"../chunks/index.8989bbf5.js";G.disable_scroll_handling;const je=G.goto;G.invalidate;G.invalidateAll;G.preload_data;G.preload_code;G.before_navigate;G.after_navigate;function Ge(a,t){g(2,arguments);var e=v(a),r=E(t);if(isNaN(r))return new Date(NaN);if(!r)return e;var n=e.getDate(),i=new Date(e.getTime());i.setMonth(e.getMonth()+r+1,0);var o=i.getDate();return n>=o?i:(e.setFullYear(i.getFullYear(),i.getMonth(),n),e)}function ie(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ie=function(e){return typeof e}:ie=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(a)}function Z(a,t){if(g(2,arguments),!t||ie(t)!=="object")return new Date(NaN);var e=t.years?E(t.years):0,r=t.months?E(t.months):0,n=t.weeks?E(t.weeks):0,i=t.days?E(t.days):0,o=t.hours?E(t.hours):0,s=t.minutes?E(t.minutes):0,l=t.seconds?E(t.seconds):0,u=v(a),d=r||e?Ge(u,r+e*12):u,c=i||n?Be(d,i+n*7):d,f=s+o*60,h=l+f*60,w=h*1e3,x=new Date(c.getTime()+w);return x}function Ve(a,t){g(2,arguments);var e=v(a).getTime(),r=E(t);return new Date(e+r)}var Je={};function ae(){return Je}function me(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var ze=864e5;function Ke(a,t){g(2,arguments);var e=pe(a),r=pe(t),n=e.getTime()-me(e),i=r.getTime()-me(r);return Math.round((n-i)/ze)}function K(a,t){g(2,arguments);var e=v(a),r=v(t),n=e.getTime()-r.getTime();return n<0?-1:n>0?1:n}var Ze=6e4,et=36e5;function oe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oe=function(e){return typeof e}:oe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(a)}function tt(a){return g(1,arguments),a instanceof Date||oe(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function rt(a){if(g(1,arguments),!tt(a)&&typeof a!="number")return!1;var t=v(a);return!isNaN(Number(t))}function at(a,t){g(2,arguments);var e=v(a),r=v(t),n=e.getFullYear()-r.getFullYear(),i=e.getMonth()-r.getMonth();return n*12+i}function nt(a,t){g(2,arguments);var e=v(a),r=v(t);return e.getFullYear()-r.getFullYear()}function Te(a,t){var e=a.getFullYear()-t.getFullYear()||a.getMonth()-t.getMonth()||a.getDate()-t.getDate()||a.getHours()-t.getHours()||a.getMinutes()-t.getMinutes()||a.getSeconds()-t.getSeconds()||a.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function it(a,t){g(2,arguments);var e=v(a),r=v(t),n=Te(e,r),i=Math.abs(Ke(e,r));e.setDate(e.getDate()-n*i);var o=Number(Te(e,r)===-n),s=n*(i-o);return s===0?0:s}function he(a,t){return g(2,arguments),v(a).getTime()-v(t).getTime()}var _e={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ot="trunc";function ve(a){return a?_e[a]:_e[ot]}function st(a,t,e){g(2,arguments);var r=he(a,t)/et;return ve(e==null?void 0:e.roundingMethod)(r)}function ut(a,t,e){g(2,arguments);var r=he(a,t)/Ze;return ve(e==null?void 0:e.roundingMethod)(r)}function lt(a){g(1,arguments);var t=v(a),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function dt(a){g(1,arguments);var t=v(a);return Xe(t).getTime()===lt(t).getTime()}function ct(a,t){g(2,arguments);var e=v(a),r=v(t),n=K(e,r),i=Math.abs(at(e,r)),o;if(i<1)o=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-n*i);var s=K(e,r)===-n;dt(v(a))&&i===1&&K(a,r)===1&&(s=!1),o=n*(i-Number(s))}return o===0?0:o}function ft(a,t,e){g(2,arguments);var r=he(a,t)/1e3;return ve(e==null?void 0:e.roundingMethod)(r)}function mt(a,t){g(2,arguments);var e=v(a),r=v(t),n=K(e,r),i=Math.abs(nt(e,r));e.setFullYear(1584),r.setFullYear(1584);var o=K(e,r)===-n,s=n*(i-Number(o));return s===0?0:s}function ht(a,t){g(2,arguments);var e=E(t);return Ve(a,-e)}var vt=864e5;function gt(a){g(1,arguments);var t=v(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/vt)+1}function ue(a){g(1,arguments);var t=1,e=v(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function Ue(a){g(1,arguments);var t=v(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=ue(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=ue(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function wt(a){g(1,arguments);var t=Ue(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=ue(e);return r}var yt=6048e5;function bt(a){g(1,arguments);var t=v(a),e=ue(t).getTime()-wt(t).getTime();return Math.round(e/yt)+1}function le(a,t){var e,r,n,i,o,s,l,u;g(1,arguments);var d=ae(),c=E((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:d.weekStartsOn)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=v(a),h=f.getUTCDay(),w=(h<c?7:0)+h-c;return f.setUTCDate(f.getUTCDate()-w),f.setUTCHours(0,0,0,0),f}function Ne(a,t){var e,r,n,i,o,s,l,u;g(1,arguments);var d=v(a),c=d.getUTCFullYear(),f=ae(),h=E((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,h),w.setUTCHours(0,0,0,0);var x=le(w,t),y=new Date(0);y.setUTCFullYear(c,0,h),y.setUTCHours(0,0,0,0);var T=le(y,t);return d.getTime()>=x.getTime()?c+1:d.getTime()>=T.getTime()?c:c-1}function pt(a,t){var e,r,n,i,o,s,l,u;g(1,arguments);var d=ae(),c=E((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:d.firstWeekContainsDate)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1),f=Ne(a,t),h=new Date(0);h.setUTCFullYear(f,0,c),h.setUTCHours(0,0,0,0);var w=le(h,t);return w}var Tt=6048e5;function _t(a,t){g(1,arguments);var e=v(a),r=le(e,t).getTime()-pt(e,t).getTime();return Math.round(r/Tt)+1}function b(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var Mt={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return b(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):b(r+1,2)},d:function(t,e){return b(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return b(t.getUTCHours()%12||12,e.length)},H:function(t,e){return b(t.getUTCHours(),e.length)},m:function(t,e){return b(t.getUTCMinutes(),e.length)},s:function(t,e){return b(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return b(i,e.length)}};const X=Mt;var z={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Dt={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return X.y(t,e)},Y:function(t,e,r,n){var i=Ne(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return b(s,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):b(o,e.length)},R:function(t,e){var r=Ue(t);return b(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return b(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return b(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return b(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return X.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return b(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=_t(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):b(i,e.length)},I:function(t,e,r){var n=bt(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):b(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):X.d(t,e)},D:function(t,e,r){var n=gt(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):b(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return b(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return b(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return b(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=z.noon:n===0?i=z.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=z.evening:n>=12?i=z.afternoon:n>=4?i=z.morning:i=z.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return X.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):X.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):b(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):b(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):X.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):X.s(t,e)},S:function(t,e){return X.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return De(o);case"XXXX":case"XX":return J(o);case"XXXXX":case"XXX":default:return J(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return De(o);case"xxxx":case"xx":return J(o);case"xxxxx":case"xxx":default:return J(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Me(o,":");case"OOOO":default:return"GMT"+J(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Me(o,":");case"zzzz":default:return"GMT"+J(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return b(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return b(o,e.length)}};function Me(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+b(i,2)}function De(a,t){if(a%60===0){var e=a>0?"-":"+";return e+b(Math.abs(a)/60,2)}return J(a,t)}function J(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=b(Math.floor(n/60),2),o=b(n%60,2);return r+i+e+o}const Ot=Dt;var Oe=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Fe=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ct=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return Oe(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Oe(n,e)).replace("{{time}}",Fe(i,e))},kt={p:Fe,P:Ct};const St=kt;var Pt=["D","DD"],xt=["YY","YYYY"];function Et(a){return Pt.indexOf(a)!==-1}function Wt(a){return xt.indexOf(a)!==-1}function Ce(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Yt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ut=function(t,e,r){var n,i=Yt[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const Nt=Ut;function fe(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var Ft={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ht={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},It={date:fe({formats:Ft,defaultWidth:"full"}),time:fe({formats:qt,defaultWidth:"full"}),dateTime:fe({formats:Ht,defaultWidth:"full"})};const $t=It;var Lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Rt=function(t,e,r,n){return Lt[t]};const At=Rt;function ee(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var s=a.defaultWidth,l=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[l]||a.values[s]}var u=a.argumentCallback?a.argumentCallback(t):t;return n[u]}}var Qt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Xt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Gt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Vt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jt=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},zt={ordinalNumber:Jt,era:ee({values:Qt,defaultWidth:"wide"}),quarter:ee({values:Bt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ee({values:Xt,defaultWidth:"wide"}),day:ee({values:jt,defaultWidth:"wide"}),dayPeriod:ee({values:Gt,defaultWidth:"wide",formattingValues:Vt,defaultFormattingWidth:"wide"})};const Kt=zt;function te(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(s)?er(s,function(c){return c.test(o)}):Zt(s,function(c){return c.test(o)}),u;u=a.valueCallback?a.valueCallback(l):l,u=e.valueCallback?e.valueCallback(u):u;var d=t.slice(o.length);return{value:u,rest:d}}}function Zt(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function er(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function tr(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var rr=/^(\d+)(th|st|nd|rd)?/i,ar=/\d+/i,nr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ir={any:[/^b/i,/^(a|c)/i]},or={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sr={any:[/1/i,/2/i,/3/i,/4/i]},ur={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},lr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},dr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},cr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},fr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},mr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},hr={ordinalNumber:tr({matchPattern:rr,parsePattern:ar,valueCallback:function(t){return parseInt(t,10)}}),era:te({matchPatterns:nr,defaultMatchWidth:"wide",parsePatterns:ir,defaultParseWidth:"any"}),quarter:te({matchPatterns:or,defaultMatchWidth:"wide",parsePatterns:sr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:te({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),day:te({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),dayPeriod:te({matchPatterns:fr,defaultMatchWidth:"any",parsePatterns:mr,defaultParseWidth:"any"})};const vr=hr;var gr={code:"en-US",formatDistance:Nt,formatLong:$t,formatRelative:At,localize:Kt,match:vr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const qe=gr;var wr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,br=/^'([^]*?)'?$/,pr=/''/g,Tr=/[a-zA-Z]/;function ke(a,t,e){var r,n,i,o,s,l,u,d,c,f,h,w,x,y,T,H,W,I;g(2,arguments);var B=String(t),F=ae(),A=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:F.locale)!==null&&r!==void 0?r:qe,$=E((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(u=e.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:F.firstWeekContainsDate)!==null&&o!==void 0?o:(c=F.locale)===null||c===void 0||(f=c.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!($>=1&&$<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=E((h=(w=(x=(y=e==null?void 0:e.weekStartsOn)!==null&&y!==void 0?y:e==null||(T=e.locale)===null||T===void 0||(H=T.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&x!==void 0?x:F.weekStartsOn)!==null&&w!==void 0?w:(W=F.locale)===null||W===void 0||(I=W.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&h!==void 0?h:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!A.localize)throw new RangeError("locale must contain localize property");if(!A.formatLong)throw new RangeError("locale must contain formatLong property");var _=v(a);if(!rt(_))throw new RangeError("Invalid time value");var Y=me(_),D=ht(_,Y),Q={firstWeekContainsDate:$,weekStartsOn:S,locale:A,_originalDate:_},ne=B.match(yr).map(function(P){var q=P[0];if(q==="p"||q==="P"){var V=St[q];return V(P,A.formatLong)}return P}).join("").match(wr).map(function(P){if(P==="''")return"'";var q=P[0];if(q==="'")return _r(P);var V=Ot[q];if(V)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Wt(P)&&Ce(P,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Et(P)&&Ce(P,t,String(a)),V(D,P,A.localize,Q);if(q.match(Tr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+q+"`");return P}).join("");return ne}function _r(a){var t=a.match(br);return t?t[1].replace(pr,"'"):a}var Mr=["years","months","weeks","days","hours","minutes","seconds"];function Dr(a,t){var e,r,n,i,o;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var s=ae(),l=(e=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:s.locale)!==null&&e!==void 0?e:qe,u=(n=t==null?void 0:t.format)!==null&&n!==void 0?n:Mr,d=(i=t==null?void 0:t.zero)!==null&&i!==void 0?i:!1,c=(o=t==null?void 0:t.delimiter)!==null&&o!==void 0?o:" ";if(!l.formatDistance)return"";var f=u.reduce(function(h,w){var x="x".concat(w.replace(/(^.)/,function(T){return T.toUpperCase()})),y=a[w];return typeof y=="number"&&(d||a[w])?h.concat(l.formatDistance(x,y)):h},[]).join(c);return f}function Or(a){g(1,arguments);var t=v(a.start),e=v(a.end);if(isNaN(t.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(e.getTime()))throw new RangeError("End Date is invalid");var r={};r.years=Math.abs(mt(e,t));var n=K(e,t),i=Z(t,{years:n*r.years});r.months=Math.abs(ct(e,i));var o=Z(i,{months:n*r.months});r.days=Math.abs(it(e,o));var s=Z(o,{days:n*r.days});r.hours=Math.abs(st(e,s));var l=Z(s,{hours:n*r.hours});r.minutes=Math.abs(ut(e,l));var u=Z(l,{minutes:n*r.minutes});return r.seconds=Math.abs(ft(e,u)),r}const de=a=>Dr(Or({start:0,end:a*1e3}));function Se(a,t,e){const r=a.slice();return r[5]=t[e],r}function Pe(a,t,e){const r=a.slice();return r[8]=t[e],r}function Cr(a){let t=!Object.keys(a[0]).length,e,r,n=t&&xe(),i=Object.values(a[0]),o=[];for(let s=0;s<i.length;s+=1)o[s]=We(Se(a,i,s));return{c(){n&&n.c(),e=L();for(let s=0;s<o.length;s+=1)o[s].c();r=be()},l(s){n&&n.l(s),e=R(s);for(let l=0;l<o.length;l+=1)o[l].l(s);r=be()},m(s,l){n&&n.m(s,l),j(s,e,l);for(let u=0;u<o.length;u+=1)o[u].m(s,l);j(s,r,l)},p(s,l){if(l&1&&(t=!Object.keys(s[0]).length),t?n||(n=xe(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),l&1){i=Object.values(s[0]);let u;for(u=0;u<i.length;u+=1){const d=Se(s,i,u);o[u]?o[u].p(d,l):(o[u]=We(d),o[u].c(),o[u].m(r.parentNode,r))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}},d(s){n&&n.d(s),s&&p(e),Ye(o,s),s&&p(r)}}}function kr(a){let t,e;return{c(){t=O("p"),e=U("Oops..."),this.h()},l(r){t=C(r,"P",{class:!0});var n=k(t);e=N(n,"Oops..."),n.forEach(p),this.h()},h(){M(t,"class","px-10 py-6")},m(r,n){j(r,t,n),m(t,e)},p:se,d(r){r&&p(t)}}}function Sr(a){let t,e;return{c(){t=O("p"),e=U("Loading..."),this.h()},l(r){t=C(r,"P",{class:!0});var n=k(t);e=N(n,"Loading..."),n.forEach(p),this.h()},h(){M(t,"class","px-10 py-6")},m(r,n){j(r,t,n),m(t,e)},p:se,d(r){r&&p(t)}}}function xe(a){let t,e;return{c(){t=O("p"),e=U("No timelogs in given time period"),this.h()},l(r){t=C(r,"P",{class:!0});var n=k(t);e=N(n,"No timelogs in given time period"),n.forEach(p),this.h()},h(){M(t,"class","px-10 py-6")},m(r,n){j(r,t,n),m(t,e)},d(r){r&&p(t)}}}function Ee(a){let t,e,r=ke(new Date(a[8].spentAt),"dd MMM HH:mm")+"",n,i,o,s=de(a[8].timeSpent)+"",l,u,d,c,f=a[8].issue.title+"",h,w,x;return{c(){t=O("tr"),e=O("td"),n=U(r),i=L(),o=O("td"),l=U(s),u=L(),d=O("td"),c=O("a"),h=U(f),x=L(),this.h()},l(y){t=C(y,"TR",{class:!0});var T=k(t);e=C(T,"TD",{class:!0});var H=k(e);n=N(H,r),H.forEach(p),i=R(T),o=C(T,"TD",{class:!0});var W=k(o);l=N(W,s),W.forEach(p),u=R(T),d=C(T,"TD",{class:!0});var I=k(d);c=C(I,"A",{class:!0,href:!0});var B=k(c);h=N(B,f),B.forEach(p),I.forEach(p),x=R(T),T.forEach(p),this.h()},h(){M(e,"class","whitespace-nowrap px-6 py-2"),M(o,"class","whitespace-nowrap px-6 py-2"),M(c,"class","hover:text-blue-500"),M(c,"href",w=a[8].issue.webUrl),M(d,"class","whitespace-nowrap px-6 py-2 max-w-md truncate"),M(t,"class","border-b")},m(y,T){j(y,t,T),m(t,e),m(e,n),m(t,i),m(t,o),m(o,l),m(t,u),m(t,d),m(d,c),m(c,h),m(t,x)},p(y,T){T&1&&r!==(r=ke(new Date(y[8].spentAt),"dd MMM HH:mm")+"")&&re(n,r),T&1&&s!==(s=de(y[8].timeSpent)+"")&&re(l,s),T&1&&f!==(f=y[8].issue.title+"")&&re(h,f),T&1&&w!==(w=y[8].issue.webUrl)&&M(c,"href",w)},d(y){y&&p(t)}}}function We(a){let t,e,r=a[5].name+"",n,i,o=de(a[5].totalSpent)+"",s,l,u,d,c,f,h,w,x,y,T,H,W,I,B,F,A,$=a[5].timelogs,S=[];for(let _=0;_<$.length;_+=1)S[_]=Ee(Pe(a,$,_));return{c(){t=O("div"),e=O("h2"),n=U(r),i=U(" ("),s=U(o),l=U(")"),u=L(),d=O("table"),c=O("thead"),f=O("tr"),h=O("th"),w=U("Spent At"),x=L(),y=O("th"),T=U("Spent"),H=L(),W=O("th"),I=U("Issue"),B=L(),F=O("tbody");for(let _=0;_<S.length;_+=1)S[_].c();A=L(),this.h()},l(_){t=C(_,"DIV",{class:!0});var Y=k(t);e=C(Y,"H2",{class:!0});var D=k(e);n=N(D,r),i=N(D," ("),s=N(D,o),l=N(D,")"),D.forEach(p),u=R(Y),d=C(Y,"TABLE",{class:!0});var Q=k(d);c=C(Q,"THEAD",{class:!0});var ne=k(c);f=C(ne,"TR",{});var P=k(f);h=C(P,"TH",{scope:!0,class:!0});var q=k(h);w=N(q,"Spent At"),q.forEach(p),x=R(P),y=C(P,"TH",{scope:!0,class:!0});var V=k(y);T=N(V,"Spent"),V.forEach(p),H=R(P),W=C(P,"TH",{scope:!0,class:!0});var ge=k(W);I=N(ge,"Issue"),ge.forEach(p),P.forEach(p),ne.forEach(p),B=R(Q),F=C(Q,"TBODY",{});var we=k(F);for(let ce=0;ce<S.length;ce+=1)S[ce].l(we);we.forEach(p),Q.forEach(p),A=R(Y),Y.forEach(p),this.h()},h(){M(e,"class","mb-4 text-xl font-extrabold leading-none tracking-tight px-6 text-gray-900"),M(h,"scope","col"),M(h,"class","px-6 py-2 w-36"),M(y,"scope","col"),M(y,"class","px-6 py-2 w-36"),M(W,"scope","col"),M(W,"class","px-6 py-2"),M(c,"class","border-b font-medium text-left"),M(d,"class","text-sm font-light w-full table-fixed"),M(t,"class","px-4 py-6")},m(_,Y){j(_,t,Y),m(t,e),m(e,n),m(e,i),m(e,s),m(e,l),m(t,u),m(t,d),m(d,c),m(c,f),m(f,h),m(h,w),m(f,x),m(f,y),m(y,T),m(f,H),m(f,W),m(W,I),m(d,B),m(d,F);for(let D=0;D<S.length;D+=1)S[D].m(F,null);m(t,A)},p(_,Y){if(Y&1&&r!==(r=_[5].name+"")&&re(n,r),Y&1&&o!==(o=de(_[5].totalSpent)+"")&&re(s,o),Y&1){$=_[5].timelogs;let D;for(D=0;D<$.length;D+=1){const Q=Pe(_,$,D);S[D]?S[D].p(Q,Y):(S[D]=Ee(Q),S[D].c(),S[D].m(F,null))}for(;D<S.length;D+=1)S[D].d(1);S.length=$.length}},d(_){_&&p(t),Ye(S,_)}}}function Pr(a){let t,e,r,n,i,o;function s(d,c){return d[1].fetching?Sr:d[1].error?kr:Cr}let l=s(a),u=l(a);return{c(){t=O("div"),e=O("div"),r=O("p"),n=O("a"),i=U("Back to projects"),o=L(),u.c(),this.h()},l(d){t=C(d,"DIV",{class:!0});var c=k(t);e=C(c,"DIV",{class:!0});var f=k(e);r=C(f,"P",{class:!0});var h=k(r);n=C(h,"A",{class:!0,href:!0});var w=k(n);i=N(w,"Back to projects"),w.forEach(p),h.forEach(p),o=R(f),u.l(f),f.forEach(p),c.forEach(p),this.h()},h(){M(n,"class","hover:text-blue-500"),M(n,"href","/projects"),M(r,"class","px-10"),M(e,"class","rounded-lg border bg-white p-6 w-2/3"),M(t,"class","flex justify-center items-center m-4")},m(d,c){j(d,t,c),m(t,e),m(e,r),m(r,n),m(n,i),m(e,o),u.m(e,null)},p(d,[c]){l===(l=s(d))&&u?u.p(d,c):(u.d(1),u=l(d),u&&(u.c(),u.m(e,null)))},i:se,o:se,d(d){d&&p(t),u.d()}}}function xr(a,t,e){let r,n;ye(a,Le,l=>e(4,r=l));let{data:i}=t;if(i.start!==r.url.searchParams.get("start")||i.end!==r.url.searchParams.get("end")){let l=new URLSearchParams(r.url.searchParams.toString());l.set("start",i.start),l.set("end",i.end),je(`?${l.toString()}`)}const o=Re({client:Ae(),query:Qe`
			query {
				timelogs(startTime:"${i.start}", endTime:"${i.end}", projectId: "${i.gid}") {
          nodes{
            issue{ id, title, webUrl },
            user { id, name },
            spentAt,
            timeSpent,
          }
        }
			}
		`});ye(a,o,l=>e(1,n=l));let s;return o.subscribe(l=>{if(l.fetching||l.error){e(0,s={});return}e(0,s=l.data.timelogs.nodes.reduce((u,d)=>{const{user:c,...f}=d;return u[c.id]||(u[c.id]={...c,timelogs:[],totalSpent:0}),u[c.id].timelogs.push(f),u[c.id].totalSpent+=f.timeSpent,u},{}))}),a.$$set=l=>{"data"in l&&e(3,i=l.data)},[s,n,o,i]}class Fr extends He{constructor(t){super(),Ie(this,t,xr,Pr,$e,{data:3})}}export{Fr as default};
