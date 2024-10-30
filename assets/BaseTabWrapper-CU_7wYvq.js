import{j as v}from"./jsx-runtime-QvZ8i92b.js";import{R as I,r as u,b as Gu}from"./index-uubelm5h.js";import{r as Yt,f as Uu}from"./index-CfOt2XX2.js";var ge=function(){return ge=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ge.apply(this,arguments)};function Hr(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var te="-ms-",Ot="-moz-",ee="-webkit-",Mi="comm",Or="rule",ra="decl",Xu="@import",Vi="@keyframes",Yu="@layer",Ni=Math.abs,na=String.fromCharCode,Cn=Object.assign;function Ku(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function ji(e){return e.trim()}function je(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function yr(e,t,r){return e.indexOf(t,r)}function oe(e,t){return e.charCodeAt(t)|0}function ht(e,t,r){return e.slice(t,r)}function Ee(e){return e.length}function Di(e){return e.length}function jt(e,t){return t.push(e),e}function Zu(e,t){return e.map(t).join("")}function Ya(e,t){return e.filter(function(r){return!je(r,t)})}var zr=1,bt=1,Oi=0,ke=0,ie=0,Ct="";function Br(e,t,r,n,a,i,l,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:zr,column:bt,length:l,return:"",siblings:o}}function We(e,t){return Cn(Br("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ct(e){for(;e.root;)e=We(e.root,{children:[e]});jt(e,e.siblings)}function Qu(){return ie}function Ju(){return ie=ke>0?oe(Ct,--ke):0,bt--,ie===10&&(bt=1,zr--),ie}function Se(){return ie=ke<Oi?oe(Ct,ke++):0,bt++,ie===10&&(bt=1,zr++),ie}function tt(){return oe(Ct,ke)}function hr(){return ke}function Fr(e,t){return ht(Ct,e,t)}function qn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ec(e){return zr=bt=1,Oi=Ee(Ct=e),ke=0,[]}function tc(e){return Ct="",e}function fn(e){return ji(Fr(ke-1,Tn(e===91?e+2:e===40?e+1:e)))}function rc(e){for(;(ie=tt())&&ie<33;)Se();return qn(e)>2||qn(ie)>3?"":" "}function nc(e,t){for(;--t&&Se()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Fr(e,hr()+(t<6&&tt()==32&&Se()==32))}function Tn(e){for(;Se();)switch(ie){case e:return ke;case 34:case 39:e!==34&&e!==39&&Tn(ie);break;case 40:e===41&&Tn(e);break;case 92:Se();break}return ke}function ac(e,t){for(;Se()&&e+ie!==57;)if(e+ie===84&&tt()===47)break;return"/*"+Fr(t,ke-1)+"*"+na(e===47?e:Se())}function ic(e){for(;!qn(tt());)Se();return Fr(e,ke)}function lc(e){return tc(br("",null,null,null,[""],e=ec(e),0,[0],e))}function br(e,t,r,n,a,i,l,o,s){for(var c=0,m=0,d=l,g=0,f=0,x=0,p=1,h=1,y=1,b=0,$="",k=a,w=i,H=n,S=$;h;)switch(x=b,b=Se()){case 40:if(x!=108&&oe(S,d-1)==58){yr(S+=B(fn(b),"&","&\f"),"&\f",Ni(c?o[c-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:S+=fn(b);break;case 9:case 10:case 13:case 32:S+=rc(x);break;case 92:S+=nc(hr()-1,7);continue;case 47:switch(tt()){case 42:case 47:jt(oc(ac(Se(),hr()),t,r,s),s);break;default:S+="/"}break;case 123*p:o[c++]=Ee(S)*y;case 125*p:case 59:case 0:switch(b){case 0:case 125:h=0;case 59+m:y==-1&&(S=B(S,/\f/g,"")),f>0&&Ee(S)-d&&jt(f>32?Za(S+";",n,r,d-1,s):Za(B(S," ","")+";",n,r,d-2,s),s);break;case 59:S+=";";default:if(jt(H=Ka(S,t,r,c,m,a,o,$,k=[],w=[],d,i),i),b===123)if(m===0)br(S,t,H,H,k,i,d,o,w);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:br(e,H,H,n&&jt(Ka(e,H,H,0,0,a,o,$,a,k=[],d,w),w),a,w,d,o,n?k:w);break;default:br(S,H,H,H,[""],w,0,o,w)}}c=m=f=0,p=y=1,$=S="",d=l;break;case 58:d=1+Ee(S),f=x;default:if(p<1){if(b==123)--p;else if(b==125&&p++==0&&Ju()==125)continue}switch(S+=na(b),b*p){case 38:y=m>0?1:(S+="\f",-1);break;case 44:o[c++]=(Ee(S)-1)*y,y=1;break;case 64:tt()===45&&(S+=fn(Se())),g=tt(),m=d=Ee($=S+=ic(hr())),b++;break;case 45:x===45&&Ee(S)==2&&(p=0)}}return i}function Ka(e,t,r,n,a,i,l,o,s,c,m,d){for(var g=a-1,f=a===0?i:[""],x=Di(f),p=0,h=0,y=0;p<n;++p)for(var b=0,$=ht(e,g+1,g=Ni(h=l[p])),k=e;b<x;++b)(k=ji(h>0?f[b]+" "+$:B($,/&\f/g,f[b])))&&(s[y++]=k);return Br(e,t,r,a===0?Or:o,s,c,m,d)}function oc(e,t,r,n){return Br(e,t,r,Mi,na(Qu()),ht(e,2,-2),0,n)}function Za(e,t,r,n,a){return Br(e,t,r,ra,ht(e,0,n),ht(e,n+1,-1),n,a)}function zi(e,t,r){switch(Ku(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Ot+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ot+e+te+e+e;case 5936:switch(oe(e,t+11)){case 114:return ee+e+te+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+te+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+te+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+te+e+e;case 6165:return ee+e+te+"flex-"+e+e;case 5187:return ee+e+B(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return ee+e+te+"flex-item-"+B(e,/flex-|-self/g,"")+(je(e,/flex-|baseline/)?"":te+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return ee+e+te+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+te+B(e,"shrink","negative")+e;case 5292:return ee+e+te+B(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+B(e,"-grow","")+ee+e+te+B(e,"grow","positive")+e;case 4554:return ee+B(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!je(e,/flex-|baseline/))return te+"grid-column-align"+ht(e,t)+e;break;case 2592:case 3360:return te+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,a){return t=a,je(n.props,/grid-\w+-end/)})?~yr(e+(r=r[t].value),"span",0)?e:te+B(e,"-start","")+e+te+"grid-row-span:"+(~yr(r,"span",0)?je(r,/\d+/):+je(r,/\d+/)-+je(e,/\d+/))+";":te+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return je(n.props,/grid-\w+-start/)})?e:te+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ee(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ot+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yr(e,"stretch",0)?zi(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,i,l,o,s,c){return te+a+":"+i+c+(l?te+a+"-span:"+(o?s:+s-+i)+c:"")+e});case 4949:if(oe(e,t+6)===121)return B(e,":",":"+ee)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(oe(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+te+"$2box$3")+e;case 100:return B(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Cr(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function sc(e,t,r,n){switch(e.type){case Yu:if(e.children.length)break;case Xu:case ra:return e.return=e.return||e.value;case Mi:return"";case Vi:return e.return=e.value+"{"+Cr(e.children,n)+"}";case Or:if(!Ee(e.value=e.props.join(",")))return""}return Ee(r=Cr(e.children,n))?e.return=e.value+"{"+r+"}":""}function uc(e){var t=Di(e);return function(r,n,a,i){for(var l="",o=0;o<t;o++)l+=e[o](r,n,a,i)||"";return l}}function cc(e){return function(t){t.root||(t=t.return)&&e(t)}}function mc(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case ra:e.return=zi(e.value,e.length,r);return;case Vi:return Cr([We(e,{value:B(e.value,"@","@"+ee)})],n);case Or:if(e.length)return Zu(r=e.props,function(a){switch(je(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ct(We(e,{props:[B(a,/:(read-\w+)/,":"+Ot+"$1")]})),ct(We(e,{props:[a]})),Cn(e,{props:Ya(r,n)});break;case"::placeholder":ct(We(e,{props:[B(a,/:(plac\w+)/,":"+ee+"input-$1")]})),ct(We(e,{props:[B(a,/:(plac\w+)/,":"+Ot+"$1")]})),ct(We(e,{props:[B(a,/:(plac\w+)/,te+"input-$1")]})),ct(We(e,{props:[a]})),Cn(e,{props:Ya(r,n)});break}return""})}}var dc={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe={},$t=typeof process<"u"&&xe!==void 0&&(xe.REACT_APP_SC_ATTR||xe.SC_ATTR)||"data-styled",Bi="active",Fi="data-styled-version",Wr="6.1.13",aa=`/*!sc*/
`,qr=typeof window<"u"&&"HTMLElement"in window,vc=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==""?xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.SC_DISABLE_SPEEDY!==void 0&&xe.SC_DISABLE_SPEEDY!==""&&xe.SC_DISABLE_SPEEDY!=="false"&&xe.SC_DISABLE_SPEEDY),Gr=Object.freeze([]),kt=Object.freeze({});function gc(e,t,r){return r===void 0&&(r=kt),e.theme!==r.theme&&e.theme||t||r.theme}var Wi=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pc=/(^-|-$)/g;function Qa(e){return e.replace(fc,"-").replace(pc,"")}var xc=/(a)(d)/gi,sr=52,Ja=function(e){return String.fromCharCode(e+(e>25?39:97))};function An(e){var t,r="";for(t=Math.abs(e);t>sr;t=t/sr|0)r=Ja(t%sr)+r;return(Ja(t%sr)+r).replace(xc,"$1-$2")}var pn,Gi=5381,ft=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ui=function(e){return ft(Gi,e)};function yc(e){return An(Ui(e)>>>0)}function hc(e){return e.displayName||e.name||"Component"}function xn(e){return typeof e=="string"&&!0}var Xi=typeof Symbol=="function"&&Symbol.for,Yi=Xi?Symbol.for("react.memo"):60115,bc=Xi?Symbol.for("react.forward_ref"):60112,$c={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kc={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ki={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wc=((pn={})[bc]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pn[Yi]=Ki,pn);function ei(e){return("type"in(t=e)&&t.type.$$typeof)===Yi?Ki:"$$typeof"in e?wc[e.$$typeof]:$c;var t}var _c=Object.defineProperty,Sc=Object.getOwnPropertyNames,ti=Object.getOwnPropertySymbols,Ic=Object.getOwnPropertyDescriptor,Hc=Object.getPrototypeOf,ri=Object.prototype;function Zi(e,t,r){if(typeof t!="string"){if(ri){var n=Hc(t);n&&n!==ri&&Zi(e,n,r)}var a=Sc(t);ti&&(a=a.concat(ti(t)));for(var i=ei(e),l=ei(t),o=0;o<a.length;++o){var s=a[o];if(!(s in kc||r&&r[s]||l&&s in l||i&&s in i)){var c=Ic(t,s);try{_c(e,s,c)}catch{}}}}return e}function wt(e){return typeof e=="function"}function ia(e){return typeof e=="object"&&"styledComponentId"in e}function et(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ni(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Wt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function En(e,t,r){if(r===void 0&&(r=!1),!r&&!Wt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=En(e[n],t[n]);else if(Wt(t))for(var n in t)e[n]=En(e[n],t[n]);return e}function la(e,t){Object.defineProperty(e,"toString",{value:t})}function Kt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cc=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,i=a;t>=i;)if((i<<=1)<0)throw Kt(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var l=a;l<i;l++)this.groupSizes[l]=0}for(var o=this.indexOfGroup(t+1),s=(l=0,r.length);l<s;l++)this.tag.insertRule(o,r[l])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r;this.groupSizes[t]=0;for(var i=n;i<a;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),i=a+n,l=a;l<i;l++)r+="".concat(this.tag.getRule(l)).concat(aa);return r},e}(),$r=new Map,Tr=new Map,kr=1,ur=function(e){if($r.has(e))return $r.get(e);for(;Tr.has(kr);)kr++;var t=kr++;return $r.set(e,t),Tr.set(t,e),t},qc=function(e,t){kr=t+1,$r.set(e,t),Tr.set(t,e)},Tc="style[".concat($t,"][").concat(Fi,'="').concat(Wr,'"]'),Ac=new RegExp("^".concat($t,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ec=function(e,t,r){for(var n,a=r.split(","),i=0,l=a.length;i<l;i++)(n=a[i])&&e.registerName(t,n)},Rc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(aa),a=[],i=0,l=n.length;i<l;i++){var o=n[i].trim();if(o){var s=o.match(Ac);if(s){var c=0|parseInt(s[1],10),m=s[2];c!==0&&(qc(m,c),Ec(e,m,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(o)}}},ai=function(e){for(var t=document.querySelectorAll(Tc),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute($t)!==Bi&&(Rc(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Pc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qi=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(o){var s=Array.from(o.querySelectorAll("style[".concat($t,"]")));return s[s.length-1]}(r),i=a!==void 0?a.nextSibling:null;n.setAttribute($t,Bi),n.setAttribute(Fi,Wr);var l=Pc();return l&&n.setAttribute("nonce",l),r.insertBefore(n,i),n},Lc=function(){function e(t){this.element=Qi(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,i=n.length;a<i;a++){var l=n[a];if(l.ownerNode===r)return l}throw Kt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Mc=function(){function e(t){this.element=Qi(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Vc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ii=qr,Nc={isServer:!qr,useCSSOMInjection:!vc},Ji=function(){function e(t,r,n){t===void 0&&(t=kt),r===void 0&&(r={});var a=this;this.options=ge(ge({},Nc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&qr&&ii&&(ii=!1,ai(this)),la(this,function(){return function(i){for(var l=i.getTag(),o=l.length,s="",c=function(d){var g=function(y){return Tr.get(y)}(d);if(g===void 0)return"continue";var f=i.names.get(g),x=l.getGroup(d);if(f===void 0||!f.size||x.length===0)return"continue";var p="".concat($t,".g").concat(d,'[id="').concat(g,'"]'),h="";f!==void 0&&f.forEach(function(y){y.length>0&&(h+="".concat(y,","))}),s+="".concat(x).concat(p,'{content:"').concat(h,'"}').concat(aa)},m=0;m<o;m++)c(m);return s}(a)})}return e.registerId=function(t){return ur(t)},e.prototype.rehydrate=function(){!this.server&&qr&&ai(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ge(ge({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new Vc(a):n?new Lc(a):new Mc(a)}(this.options),new Cc(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ur(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ur(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ur(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jc=/&/g,Dc=/^\s*\/\/.*$/gm;function el(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=el(r.children,t)),r})}function Oc(e){var t,r,n,a=kt,i=a.options,l=i===void 0?kt:i,o=a.plugins,s=o===void 0?Gr:o,c=function(g,f,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):g},m=s.slice();m.push(function(g){g.type===Or&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jc,r).replace(n,c))}),l.prefix&&m.push(mc),m.push(sc);var d=function(g,f,x,p){f===void 0&&(f=""),x===void 0&&(x=""),p===void 0&&(p="&"),t=p,r=f,n=new RegExp("\\".concat(r,"\\b"),"g");var h=g.replace(Dc,""),y=lc(x||f?"".concat(x," ").concat(f," { ").concat(h," }"):h);l.namespace&&(y=el(y,l.namespace));var b=[];return Cr(y,uc(m.concat(cc(function($){return b.push($)})))),b};return d.hash=s.length?s.reduce(function(g,f){return f.name||Kt(15),ft(g,f.name)},Gi).toString():"",d}var zc=new Ji,Rn=Oc(),tl=I.createContext({shouldForwardProp:void 0,styleSheet:zc,stylis:Rn});tl.Consumer;I.createContext(void 0);function li(){return u.useContext(tl)}var Bc=function(){function e(t,r){var n=this;this.inject=function(a,i){i===void 0&&(i=Rn);var l=n.name+i.hash;a.hasNameForId(n.id,l)||a.insertRules(n.id,l,i(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,la(this,function(){throw Kt(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rn),this.name+t.hash},e}(),Fc=function(e){return e>="A"&&e<="Z"};function oi(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Fc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var rl=function(e){return e==null||e===!1||e===""},nl=function(e){var t,r,n=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!rl(i)&&(Array.isArray(i)&&i.isCss||wt(i)?n.push("".concat(oi(a),":"),i,";"):Wt(i)?n.push.apply(n,Hr(Hr(["".concat(a," {")],nl(i),!1),["}"],!1)):n.push("".concat(oi(a),": ").concat((t=a,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in dc||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function rt(e,t,r,n){if(rl(e))return[];if(ia(e))return[".".concat(e.styledComponentId)];if(wt(e)){if(!wt(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return rt(a,t,r,n)}var i;return e instanceof Bc?r?(e.inject(r,n),[e.getName(n)]):[e]:Wt(e)?nl(e):Array.isArray(e)?Array.prototype.concat.apply(Gr,e.map(function(l){return rt(l,t,r,n)})):[e.toString()]}function Wc(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(wt(r)&&!ia(r))return!1}return!0}var Gc=Ui(Wr),Uc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Wc(t),this.componentId=r,this.baseHash=ft(Gc,r),this.baseStyle=n,Ji.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=et(a,this.staticRulesId);else{var i=ni(rt(this.rules,t,r,n)),l=An(ft(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,l)){var o=n(i,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,o)}a=et(a,l),this.staticRulesId=l}else{for(var s=ft(this.baseHash,n.hash),c="",m=0;m<this.rules.length;m++){var d=this.rules[m];if(typeof d=="string")c+=d;else if(d){var g=ni(rt(d,t,r,n));s=ft(s,g+m),c+=g}}if(c){var f=An(s>>>0);r.hasNameForId(this.componentId,f)||r.insertRules(this.componentId,f,n(c,".".concat(f),void 0,this.componentId)),a=et(a,f)}}return a},e}(),al=I.createContext(void 0);al.Consumer;var yn={};function Xc(e,t,r){var n=ia(e),a=e,i=!xn(e),l=t.attrs,o=l===void 0?Gr:l,s=t.componentId,c=s===void 0?function(k,w){var H=typeof k!="string"?"sc":Qa(k);yn[H]=(yn[H]||0)+1;var S="".concat(H,"-").concat(yc(Wr+H+yn[H]));return w?"".concat(w,"-").concat(S):S}(t.displayName,t.parentComponentId):s,m=t.displayName,d=m===void 0?function(k){return xn(k)?"styled.".concat(k):"Styled(".concat(hc(k),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Qa(t.displayName),"-").concat(t.componentId):t.componentId||c,f=n&&a.attrs?a.attrs.concat(o).filter(Boolean):o,x=t.shouldForwardProp;if(n&&a.shouldForwardProp){var p=a.shouldForwardProp;if(t.shouldForwardProp){var h=t.shouldForwardProp;x=function(k,w){return p(k,w)&&h(k,w)}}else x=p}var y=new Uc(r,g,n?a.componentStyle:void 0);function b(k,w){return function(H,S,q){var E=H.attrs,A=H.componentStyle,j=H.defaultProps,N=H.foldedComponentIds,Y=H.styledComponentId,X=H.target,D=I.useContext(al),O=li(),L=H.shouldForwardProp||O.shouldForwardProp,K=gc(S,D,j)||kt,G=function(_e,fe,V){for(var Q,re=ge(ge({},fe),{className:void 0,theme:V}),J=0;J<_e.length;J+=1){var Z=wt(Q=_e[J])?Q(re):Q;for(var U in Z)re[U]=U==="className"?et(re[U],Z[U]):U==="style"?ge(ge({},re[U]),Z[U]):Z[U]}return fe.className&&(re.className=et(re.className,fe.className)),re}(E,S,K),be=G.as||X,ce={};for(var ve in G)G[ve]===void 0||ve[0]==="$"||ve==="as"||ve==="theme"&&G.theme===K||(ve==="forwardedAs"?ce.as=G.forwardedAs:L&&!L(ve,be)||(ce[ve]=G[ve]));var Fe=function(_e,fe){var V=li(),Q=_e.generateAndInjectStyles(fe,V.styleSheet,V.stylis);return Q}(A,G),$e=et(N,Y);return Fe&&($e+=" "+Fe),G.className&&($e+=" "+G.className),ce[xn(be)&&!Wi.has(be)?"class":"className"]=$e,ce.ref=q,u.createElement(be,ce)}($,k,w)}b.displayName=d;var $=I.forwardRef(b);return $.attrs=f,$.componentStyle=y,$.displayName=d,$.shouldForwardProp=x,$.foldedComponentIds=n?et(a.foldedComponentIds,a.styledComponentId):"",$.styledComponentId=g,$.target=n?a.target:e,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(w){for(var H=[],S=1;S<arguments.length;S++)H[S-1]=arguments[S];for(var q=0,E=H;q<E.length;q++)En(w,E[q],!0);return w}({},a.defaultProps,k):k}}),la($,function(){return".".concat($.styledComponentId)}),i&&Zi($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function si(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var ui=function(e){return Object.assign(e,{isCss:!0})};function _(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(wt(e)||Wt(e))return ui(rt(si(Gr,Hr([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?rt(n):ui(rt(si(n,t)))}function Pn(e,t,r){if(r===void 0&&(r=kt),!t)throw Kt(1,t);var n=function(a){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,r,_.apply(void 0,Hr([a],i,!1)))};return n.attrs=function(a){return Pn(e,t,ge(ge({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return Pn(e,t,ge(ge({},r),a))},n}var il=function(e){return Pn(Xc,e)},C=il;Wi.forEach(function(e){C[e]=il(e)});const Yc={"w-1":e=>_`
        max-width: ${e.boxWidth_1};
    `,"w-2":e=>_`
        max-width: ${e.boxWidth_2};
    `,"w-3":e=>_`
        max-width: ${e.boxWidth_3};
    `,"w-4":e=>_`
        max-width: ${e.boxWidth_4};
    `,"w-5":e=>_`
        max-width: ${e.boxWidth_5};
    `,"w-6":e=>_`
        max-width: ${e.boxWidth_6};
    `,"w-null":()=>_`
        width: auto;
    `},Ur={"g-1":e=>_`
        gap: ${e.boxGap_1};
    `,"g-2":e=>_`
        gap: ${e.boxGap_2};
    `,"g-3":e=>_`
        gap: ${e.boxGap_3};
    `,"g-4":e=>_`
        gap: ${e.boxGap_4};
    `,"g-5":e=>_`
        gap: ${e.boxGap_5};
    `,"g-6":e=>_`
        gap: ${e.boxGap_6};
    `,"g-null":()=>_`
        gap: 0;
    `},ll={"p-1":e=>_`
        padding: ${e.boxPadding_1};
    `,"p-2":e=>_`
        padding: ${e.boxPadding_2};
    `,"p-3":e=>_`
        padding: ${e.boxPadding_3};
    `,"p-4":e=>_`
        padding: ${e.boxPadding_4};
    `,"p-5":e=>_`
        padding: ${e.boxPadding_5};
    `,"p-6":e=>_`
        padding: ${e.boxPadding_6};
    `,"p-null":()=>_`
        padding: 0;
    `},Kc={"br-1":e=>_`
        border-radius: ${e.boxBorderRadius_1};
    `,"br-2":e=>_`
        border-radius: ${e.boxBorderRadius_2};
    `,"br-3":e=>_`
        border-radius: ${e.boxBorderRadius_3};
    `,"br-null":()=>_`
        border-radius: 0;
    `},ol={"shd-1":e=>_`
        box-shadow: ${`${e.$box.boxShadow_1}`} ${e.$boxShadowColor??e.$colors.shadowColor};
    `,"shd-2":e=>_`
        box-shadow: ${`${e.$box.boxShadow_2}`} ${e.$boxShadowColor??e.$colors.shadowColor};
    `,"shd-3":e=>_`
        box-shadow: ${`${e.$box.boxShadow_3}`} ${e.$boxShadowColor??e.$colors.shadowColor};
    `,"shd-null":()=>_`
        box-shadow: none;
    `},Ve=e=>_`
    display: ${e.$boxDisplay??"grid"};
    ${e.$boxGapVariant&&Ur[e.$boxGapVariant](e.$styles)}
    ${e.$boxPaddingVariant&&ll[e.$boxPaddingVariant](e.$styles)};
    ${e.$boxWidthVariant&&Yc[e.$boxWidthVariant](e.$styles)};
`,Zt=e=>_`
    ${e.$boxRadiusVariant&&Kc[e.$boxRadiusVariant](e.$styles)};
    ${e.$boxShadowVariant&&ol[e.$boxShadowVariant]({$box:e.$styles,$colors:e.$colors,$boxShadowColor:e.$boxShadowColor})}
    ${e.$boxBorderColor&&_`
        border: 1px solid ${e.$boxBorderColor};
    `}
`,ne=(e,t)=>{if(!t)return"";const r=/(?:m[trblxy]?)-(\d+)/,n=t.match(r);if(!n)return"";const[,a]=n,i=e[`margin_${a}`];if(t.startsWith("mx-"))return`margin-left: ${i}; margin-right: ${i};`;if(t.startsWith("my-"))return`margin-top: ${i}; margin-bottom: ${i};`;switch(t.charAt(1)){case"t":return`margin-top: ${i};`;case"r":return`margin-right: ${i};`;case"b":return`margin-bottom: ${i};`;case"l":return`margin-left: ${i};`;default:return`margin: ${i};`}},zt={primary:"#2563EB",secondary:"#E5F1FF",lightElem:"#A9C1CF",primaryItem:"#2563EB",primaryItemActive:"#1D4ED8",successItem:"#16A34A",successItemActive:"#15803D",infoItem:"#1E40AF",infoItemActive:"#18338C",errorItem:"#DC2626",errorItemActive:"#B91C1C",warningItem:"#EA580C",warningItemActive:"#C2410C",background:"#ffffff",backgroundBox:"#ffffff",backgroundTooltip:"#1f1f1fc8",disabled:"#B9BCBE",shadowColor:"#002B4D40",backgroundSuccess:"#DCFCE740",backgroundError:"#FEE2E240",backgroundInfo:"#DBEAFE40",backgroundWarning:"#FFEDD540",title:"#1A242A",text:"#1A242A",textItem:"#F5F5F5",link:"#2563EB",linkActive:"#1D4ED8",prompt:"#4f4f4f",alpha:"#ffffff",omega:"#000000"},Zc={primary:"#3B82F6",secondary:"#21222D",lightElem:"#A9C1CF",primaryItem:"#3B82F6",primaryItemActive:"#2563EB",successItem:"#4ADE80",successItemActive:"#22C55E",infoItem:"#60A5FA",infoItemActive:"#3B82F6",errorItem:"#F87171",errorItemActive:"#EF4444",warningItem:"#FB923C",warningItemActive:"#F97316",background:"#171821",backgroundBox:"#21222D",backgroundTooltip:"#171821",disabled:"#B9BCBE",shadowColor:"#00000000",backgroundSuccess:"#4ADE8040",backgroundError:"#F8717140",backgroundInfo:"#60A5FA40",backgroundWarning:"#FB923C40",title:"#F0F4FE",text:"#F0F4FE",textItem:"#F0F4FE",link:"#2563EB",linkActive:"#1D4ED8",prompt:"#94A3B8",alpha:"#ffffff",omega:"#000000"},oa={base:{borderRadiusItem:"8px"},mr:{margin_1:"4px",margin_2:"8px",margin_3:"12px",margin_4:"20px",margin_5:"28px",margin_6:"36px",margin_7:"44px",margin_8:"52px",margin_9:"60px",margin_10:"68px",margin_11:"76px",margin_12:"82px"},btn:{btnPadding_X_L:"14px",btnPadding_Y_L:"5px",btnPadding_X_M:"12px",btnPadding_Y_M:"3px",btnHeight_L:"38px",btnHeight_M:"32px",btnIconSize_L:"20px",btnIconSize_M:"18px"},inp:{inpPadding_X_L:"14px",inpPadding_Y_L:"5px",inpPadding_X_M:"12px",inpPadding_Y_M:"5px",inpHeight_L:"38px",inpHeight_M:"32px",inpIconSize_L:"20px",inpIconSize_M:"18px"},select:{selectPadding_X_L:"14px",selectPadding_Y_L:"5px",selectPadding_X_M:"12px",selectPadding_Y_M:"5px",selectHeight_L:"38px",selectHeight_M:"32px",selectIconSize_L:"20px",selectIconSize_M:"18px"},avatar:{avatarSize_1:"24px",avatarSize_2:"32px",avatarSize_3:"45px",avatarFontSize_1:"10px",avatarFontSize_2:"14px",avatarFontSize_3:"20px",avatarFontWeight:"600"},checkbox:{checkboxSize_L:"24px",checkboxSize_M:"20px",checkboxLoadingSize_L:"20px",checkboxLoadingSize_M:"16px"},switch:{switchSize_X_L:"36px",switchSize_Y_L:"20px",switchSize_X_M:"30px",switchSize_Y_M:"18px",switchThumbSize_L:"18px",switchThumbSize_M:"16px",switchThumbTranslateX_L:"17px",switchThumbTranslateX_M:"13px"},slider:{thumbSize_L:"16px",thumbSize_M:"14px"},radio:{radioSize_L:"24px",radioSize_M:"20px",radioSizeIndicator_L:"10px",radioSizeIndicator_M:"8px"},icon:{iconSize_L:"24px",iconSize_M:"20px"},typography:{fontSizeItem:"14px",fontSizeGlobal:"14px",h1:"38px",h2:"30px",h3:"24px",h4:"20px",h5:"18px",h6:"16px",fontWeightTitle:"400",fontWeightItem:"700",fontWeightGlobal:"400"},box:{boxBorderRadius_1:"8px",boxBorderRadius_2:"12px",boxBorderRadius_3:"20px",boxShadow_1:"2px 2px 3px 0px",boxShadow_2:"3px 3px 6px 2px",boxShadow_3:"4px 4px 12px 5px",boxWidth_1:"120px",boxWidth_2:"260px",boxWidth_3:"300px",boxWidth_4:"460px",boxWidth_5:"680px",boxWidth_6:"720px",boxPadding_1:"4px",boxPadding_2:"8px",boxPadding_3:"12px",boxPadding_4:"20px",boxPadding_5:"28px",boxPadding_6:"36px",boxGap_1:"4px",boxGap_2:"8px",boxGap_3:"12px",boxGap_4:"20px",boxGap_5:"28px",boxGap_6:"36px"}},sl=u.createContext({currentColorThemeName:"light",currentColorScheme:zt,listThemeColors:[],changeColorThemeHandler:()=>{},setColorThemeHandler:()=>{},currentStyles:oa,updateStylesHandler:()=>{}}),Qc=({children:e,customColorThemes:t=[],colorThemeName:r="light",addColorsLight:n,addColorsDark:a,currentStyles:i=oa})=>{const[l,o]=u.useState(r),[s,c]=u.useState({...zt,...n}),[m,d]=u.useState([{type:"light",name:"Light Theme",colors:{...zt,...n}},{type:"dark",name:"Dark Theme",colors:{...Zc,...a}},...t]),[g,f]=u.useState(i);u.useEffect(()=>{o(r)},[r]),u.useEffect(()=>{const b=m.find($=>$.type===l);c(b?b.colors:{...zt,...n})},[l,m,n]);const y={currentColorThemeName:l,currentColorScheme:s,listThemeColors:m,changeColorThemeHandler:b=>{const $=m.find(k=>k.type===b);$&&(o(b),c($.colors))},setColorThemeHandler:b=>{m.some(k=>k.name===b.name)?console.warn(`Theme with name ${b.name} already exists`):d([...m,b])},currentStyles:g,updateStylesHandler:b=>{f($=>({...$,...b}))}};return v.jsx(sl.Provider,{value:y,children:e})},ul=()=>{const e=u.useContext(sl);if(!e)throw new Error("useThemeContext must be used within a BaseThemeProvider");return e};Qc.__docgenInfo={description:"",methods:[],displayName:"BaseThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},colorThemeName:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | `_custom_${string}`",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"`_custom_${string}`"}]},description:"",defaultValue:{value:"'light'",computed:!1}},customColorThemes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    type: TypeColorTheme;
    name: string;
    colors: TypeColorScheme;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'light' | 'dark' | `_custom_${string}`",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"`_custom_${string}`"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"colors",value:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}],required:!0}}]}}],raw:"TypeCustomColorTheme[]"},description:"",defaultValue:{value:"[]",computed:!1}},addColorsLight:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: Hex }",signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}},description:""},addColorsDark:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: Hex }",signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}},description:""},currentStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    // base
    base: TypeSSBase;
    //margin
    mr: TypeSSMR;
    //btn
    btn: TypeSSBtn;
    //inp
    inp: TypeSSInp;
    //select
    select: TypeSSSelect;
    //avatar
    avatar: TypeSSAvatar;
    //radio
    radio: TypeSSRadio;
    // icon
    icon: TypeSSIcon;
    //checkbox
    checkbox: TypeSSCheckbox;
    // switch
    switch: TypeSSSwitch;
    //slider
    slider: TypeSSSlider;
    //text
    typography: TypeSSTypography;

    //box
    box: TypeSSBox;
}`,signature:{properties:[{key:"base",value:{name:"signature",type:"object",raw:`{
    borderRadiusItem: string;
}`,signature:{properties:[{key:"borderRadiusItem",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}},{key:"btn",value:{name:"signature",type:"object",raw:`{
    btnPadding_X_L: string;
    btnPadding_Y_L: string;
    btnPadding_X_M: string;
    btnPadding_Y_M: string;
    btnHeight_L: string;
    btnHeight_M: string;
    btnIconSize_L: string;
    btnIconSize_M: string;
}`,signature:{properties:[{key:"btnPadding_X_L",value:{name:"string",required:!0}},{key:"btnPadding_Y_L",value:{name:"string",required:!0}},{key:"btnPadding_X_M",value:{name:"string",required:!0}},{key:"btnPadding_Y_M",value:{name:"string",required:!0}},{key:"btnHeight_L",value:{name:"string",required:!0}},{key:"btnHeight_M",value:{name:"string",required:!0}},{key:"btnIconSize_L",value:{name:"string",required:!0}},{key:"btnIconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"inp",value:{name:"signature",type:"object",raw:`{
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
}`,signature:{properties:[{key:"inpPadding_X_L",value:{name:"string",required:!0}},{key:"inpPadding_Y_L",value:{name:"string",required:!0}},{key:"inpPadding_X_M",value:{name:"string",required:!0}},{key:"inpPadding_Y_M",value:{name:"string",required:!0}},{key:"inpHeight_L",value:{name:"string",required:!0}},{key:"inpHeight_M",value:{name:"string",required:!0}},{key:"inpIconSize_L",value:{name:"string",required:!0}},{key:"inpIconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"select",value:{name:"signature",type:"object",raw:`{
    selectPadding_X_L: string;
    selectPadding_Y_L: string;
    selectPadding_X_M: string;
    selectPadding_Y_M: string;
    selectHeight_L: string;
    selectHeight_M: string;
    selectIconSize_L: string;
    selectIconSize_M: string;
}`,signature:{properties:[{key:"selectPadding_X_L",value:{name:"string",required:!0}},{key:"selectPadding_Y_L",value:{name:"string",required:!0}},{key:"selectPadding_X_M",value:{name:"string",required:!0}},{key:"selectPadding_Y_M",value:{name:"string",required:!0}},{key:"selectHeight_L",value:{name:"string",required:!0}},{key:"selectHeight_M",value:{name:"string",required:!0}},{key:"selectIconSize_L",value:{name:"string",required:!0}},{key:"selectIconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"avatar",value:{name:"signature",type:"object",raw:`{
    avatarSize_1: string;
    avatarSize_2: string;
    avatarSize_3: string;
    avatarFontSize_1: string;
    avatarFontSize_2: string;
    avatarFontSize_3: string;
    avatarFontWeight: string;
}`,signature:{properties:[{key:"avatarSize_1",value:{name:"string",required:!0}},{key:"avatarSize_2",value:{name:"string",required:!0}},{key:"avatarSize_3",value:{name:"string",required:!0}},{key:"avatarFontSize_1",value:{name:"string",required:!0}},{key:"avatarFontSize_2",value:{name:"string",required:!0}},{key:"avatarFontSize_3",value:{name:"string",required:!0}},{key:"avatarFontWeight",value:{name:"string",required:!0}}]},required:!0}},{key:"radio",value:{name:"signature",type:"object",raw:`{
    radioSize_L: string;
    radioSize_M: string;
    radioSizeIndicator_L: string;
    radioSizeIndicator_M: string;
}`,signature:{properties:[{key:"radioSize_L",value:{name:"string",required:!0}},{key:"radioSize_M",value:{name:"string",required:!0}},{key:"radioSizeIndicator_L",value:{name:"string",required:!0}},{key:"radioSizeIndicator_M",value:{name:"string",required:!0}}]},required:!0}},{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"checkbox",value:{name:"signature",type:"object",raw:`{
    checkboxSize_L: string;
    checkboxSize_M: string;
    checkboxLoadingSize_L: string;
    checkboxLoadingSize_M: string;
}`,signature:{properties:[{key:"checkboxSize_L",value:{name:"string",required:!0}},{key:"checkboxSize_M",value:{name:"string",required:!0}},{key:"checkboxLoadingSize_L",value:{name:"string",required:!0}},{key:"checkboxLoadingSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"switch",value:{name:"signature",type:"object",raw:`{
    switchSize_X_L: string;
    switchSize_Y_L: string;
    switchSize_X_M: string;
    switchSize_Y_M: string;
    switchThumbSize_L: string;
    switchThumbSize_M: string;
    switchThumbTranslateX_L: string;
    switchThumbTranslateX_M: string;
}`,signature:{properties:[{key:"switchSize_X_L",value:{name:"string",required:!0}},{key:"switchSize_Y_L",value:{name:"string",required:!0}},{key:"switchSize_X_M",value:{name:"string",required:!0}},{key:"switchSize_Y_M",value:{name:"string",required:!0}},{key:"switchThumbSize_L",value:{name:"string",required:!0}},{key:"switchThumbSize_M",value:{name:"string",required:!0}},{key:"switchThumbTranslateX_L",value:{name:"string",required:!0}},{key:"switchThumbTranslateX_M",value:{name:"string",required:!0}}]},required:!0}},{key:"slider",value:{name:"signature",type:"object",raw:`{
    thumbSize_L: string;
    thumbSize_M: string;
}`,signature:{properties:[{key:"thumbSize_L",value:{name:"string",required:!0}},{key:"thumbSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}},{key:"box",value:{name:"signature",type:"object",raw:`{
    boxBorderRadius_1: string;
    boxBorderRadius_2: string;
    boxBorderRadius_3: string;

    boxShadow_1: string;
    boxShadow_2: string;
    boxShadow_3: string;

    boxWidth_1: string;
    boxWidth_2: string;
    boxWidth_3: string;
    boxWidth_4: string;
    boxWidth_5: string;
    boxWidth_6: string;

    boxPadding_1: string;
    boxPadding_2: string;
    boxPadding_3: string;
    boxPadding_4: string;
    boxPadding_5: string;
    boxPadding_6: string;

    boxGap_1: string;
    boxGap_2: string;
    boxGap_3: string;
    boxGap_4: string;
    boxGap_5: string;
    boxGap_6: string;
}`,signature:{properties:[{key:"boxBorderRadius_1",value:{name:"string",required:!0}},{key:"boxBorderRadius_2",value:{name:"string",required:!0}},{key:"boxBorderRadius_3",value:{name:"string",required:!0}},{key:"boxShadow_1",value:{name:"string",required:!0}},{key:"boxShadow_2",value:{name:"string",required:!0}},{key:"boxShadow_3",value:{name:"string",required:!0}},{key:"boxWidth_1",value:{name:"string",required:!0}},{key:"boxWidth_2",value:{name:"string",required:!0}},{key:"boxWidth_3",value:{name:"string",required:!0}},{key:"boxWidth_4",value:{name:"string",required:!0}},{key:"boxWidth_5",value:{name:"string",required:!0}},{key:"boxWidth_6",value:{name:"string",required:!0}},{key:"boxPadding_1",value:{name:"string",required:!0}},{key:"boxPadding_2",value:{name:"string",required:!0}},{key:"boxPadding_3",value:{name:"string",required:!0}},{key:"boxPadding_4",value:{name:"string",required:!0}},{key:"boxPadding_5",value:{name:"string",required:!0}},{key:"boxPadding_6",value:{name:"string",required:!0}},{key:"boxGap_1",value:{name:"string",required:!0}},{key:"boxGap_2",value:{name:"string",required:!0}},{key:"boxGap_3",value:{name:"string",required:!0}},{key:"boxGap_4",value:{name:"string",required:!0}},{key:"boxGap_5",value:{name:"string",required:!0}},{key:"boxGap_6",value:{name:"string",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
    // base
    base: {
        borderRadiusItem: '8px',
    },

    //margin
    mr: {
        margin_1: '4px',
        margin_2: '8px',
        margin_3: '12px',
        margin_4: '20px',
        margin_5: '28px',
        margin_6: '36px',
        margin_7: '44px',
        margin_8: '52px',
        margin_9: '60px',
        margin_10: '68px',
        margin_11: '76px',
        margin_12: '82px',
    },

    //btn
    btn: {
        btnPadding_X_L: '14px',
        btnPadding_Y_L: '5px',
        btnPadding_X_M: '12px',
        btnPadding_Y_M: '3px',
        btnHeight_L: '38px',
        btnHeight_M: '32px',
        btnIconSize_L: '20px',
        btnIconSize_M: '18px',
    },

    //inp
    inp: {
        inpPadding_X_L: '14px',
        inpPadding_Y_L: '5px',
        inpPadding_X_M: '12px',
        inpPadding_Y_M: '5px',
        inpHeight_L: '38px',
        inpHeight_M: '32px',
        inpIconSize_L: '20px',
        inpIconSize_M: '18px',
    },

    //select
    select: {
        selectPadding_X_L: '14px',
        selectPadding_Y_L: '5px',
        selectPadding_X_M: '12px',
        selectPadding_Y_M: '5px',
        selectHeight_L: '38px',
        selectHeight_M: '32px',
        selectIconSize_L: '20px',
        selectIconSize_M: '18px',
    },

    //avatar
    avatar: {
        avatarSize_1: '24px',
        avatarSize_2: '32px',
        avatarSize_3: '45px',
        avatarFontSize_1: '10px',
        avatarFontSize_2: '14px',
        avatarFontSize_3: '20px',
        avatarFontWeight: '600',
    },

    //checkbox
    checkbox: {
        checkboxSize_L: '24px',
        checkboxSize_M: '20px',
        checkboxLoadingSize_L: '20px',
        checkboxLoadingSize_M: '16px',
    },

    // switch
    switch: {
        switchSize_X_L: '36px',
        switchSize_Y_L: '20px',
        switchSize_X_M: '30px',
        switchSize_Y_M: '18px',
        switchThumbSize_L: '18px',
        switchThumbSize_M: '16px',
        switchThumbTranslateX_L: '17px',
        switchThumbTranslateX_M: '13px',
    },

    // switch
    slider: {
        thumbSize_L: '16px',
        thumbSize_M: '14px',
    },

    // radio
    radio: {
        radioSize_L: '24px',
        radioSize_M: '20px',
        radioSizeIndicator_L: '10px',
        radioSizeIndicator_M: '8px',
    },

    // icon
    icon: {
        iconSize_L: '24px',
        iconSize_M: '20px',
    },

    //text
    typography: {
        fontSizeItem: '14px',
        fontSizeGlobal: '14px',
        h1: '38px',
        h2: '30px',
        h3: '24px',
        h4: '20px',
        h5: '18px',
        h6: '16px',
        fontWeightTitle: '400',
        fontWeightItem: '700',
        fontWeightGlobal: '400',
    },

    //box
    box: {
        boxBorderRadius_1: '8px',
        boxBorderRadius_2: '12px',
        boxBorderRadius_3: '20px',

        boxShadow_1: '2px 2px 3px 0px',
        boxShadow_2: '3px 3px 6px 2px',
        boxShadow_3: '4px 4px 12px 5px',

        boxWidth_1: '120px',
        boxWidth_2: '260px',
        boxWidth_3: '300px',
        boxWidth_4: '460px',
        boxWidth_5: '680px',
        boxWidth_6: '720px',

        boxPadding_1: '4px',
        boxPadding_2: '8px',
        boxPadding_3: '12px',
        boxPadding_4: '20px',
        boxPadding_5: '28px',
        boxPadding_6: '36px',

        boxGap_1: '4px',
        boxGap_2: '8px',
        boxGap_3: '12px',
        boxGap_4: '20px',
        boxGap_5: '28px',
        boxGap_6: '36px',
    },
}`,computed:!1}}}};const F=(e,t)=>{const r=ul(),n=t||(r!=null&&r.currentStyles?r.currentStyles:oa);return e.reduce((a,i)=>(i in n&&(a[i]=n[i]),a),{})},cl=C.div`
    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box,$boxDisplay:e.$boxDisplay})};
    ${e=>ne(e.$styles.mr,e.$mr)};
`,Jc=I.memo(I.forwardRef(({mr:e,boxWidthVariant:t,boxDisplay:r,boxPaddingVariant:n,boxGapVariant:a,as:i="div",$styles:l,...o},s)=>{const c=F(["box","mr"],l);return v.jsx(cl,{ref:s,as:i,$styles:c,$mr:e,$boxWidthVariant:t,$boxPaddingVariant:n,$boxGapVariant:a,$boxDisplay:r,...o,children:o.children})})),em={Box:cl};Jc.__docgenInfo={description:"",methods:[],displayName:"BaseBox",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};const W=e=>{const t=ul();return e||(t!=null&&t.currentColorScheme?t.currentColorScheme:zt)},tm=C(em.Box)`
    background-color: ${e=>e.$bg??e.$colors.backgroundBox};

    ${e=>Zt({$colors:e.$colors,$boxBorderColor:e.$boxBorderColor,$boxShadowColor:e.$boxShadowColor,$boxShadowVariant:e.$boxShadowVariant,$boxRadiusVariant:e.$boxRadiusVariant,$styles:e.$styles.box})};
`,rm=I.memo(I.forwardRef(({as:e="div",bg:t,boxBorderColor:r,boxRadiusVariant:n,boxShadowVariant:a,boxShadowColor:i,$colors:l,...o},s)=>{const c=W(l),m=F(["box","mr"],o.$styles);return v.jsx(tm,{ref:s,as:e,$styles:m,$colors:c,$mr:o.mr,$boxWidthVariant:o.boxWidthVariant,$boxPaddingVariant:o.boxPaddingVariant,$boxGapVariant:o.boxGapVariant,$boxDisplay:o.boxDisplay,$bg:t,$boxBorderColor:r,$boxRadiusVariant:n,$boxShadowVariant:a,$boxShadowColor:i,...o,children:o.children})}));rm.__docgenInfo={description:"",methods:[],displayName:"SimpleBox",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};const nm=C.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    background-color: ${e=>e.$bg??e.$colors.background};
`,am=I.memo(I.forwardRef(({as:e="div",bg:t,$colors:r,...n},a)=>{const i=W(r);return v.jsx(nm,{ref:a,as:e,$bg:t,$colors:i,...n,children:n.children})}));am.__docgenInfo={description:"",methods:[],displayName:"BaseContainer",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};const im=C.div`
    margin: 0 auto;
    height: 100%;
    @media screen and (min-width: 1281px) {
        max-width: 1800px;
    }
    @media screen and (max-width: 1280px) {
        max-width: 100%;
    }
`,lm=C.div`
    position: relative;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    padding: 0 30px;
    @media screen and (max-width: 767px) {
        padding: 0 15px;
    }
`,om=I.memo(I.forwardRef(({as:e="div",rootProps:t,...r},n)=>v.jsx(lm,{ref:n,as:e,...t,children:v.jsx(im,{...r,children:r.children})})));om.__docgenInfo={description:"",methods:[],displayName:"BaseLayout",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};var R=(e=>(e.M="M",e.L="L",e))(R||{}),le=(e=>(e.ERROR="error",e.INFO="info",e.WARNING="warning",e.SUCCESS="success",e.DEFAULT="default",e))(le||{}),ut=(e=>(e.RIGHT="right",e.LEFT="left",e))(ut||{}),Ue=(e=>(e.VERTICAL="vertical",e.HORIZONTAL="horizontal",e))(Ue||{});const sm={[Ue.HORIZONTAL]:_`
        display: inline-flex;
        align-items: center;
    `,[Ue.VERTICAL]:_`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    `},um=C.div`
    position: relative;
    width: fit-content;
    background-color: ${e=>e.$bg??e.$colors.secondary};
    ${e=>Zt({$colors:e.$colors,$boxBorderColor:e.$boxBorderColor,$boxShadowColor:e.$boxShadowColor,$boxShadowVariant:e.$boxShadowVariant,$boxRadiusVariant:e.$boxRadiusVariant,$styles:e.$styles.box})};
    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box})};
    ${e=>sm[e.$orientation]}
    ${e=>ne(e.$styles.mr,e.$mr)};
`,cm=I.memo(I.forwardRef(({mr:e,boxWidthVariant:t,boxPaddingVariant:r="p-1",bg:n,boxGapVariant:a="g-1",boxBorderColor:i,boxRadiusVariant:l="br-1",boxShadowVariant:o="shd-1",boxShadowColor:s,orientation:c=Ue.HORIZONTAL,onChangeActiveItem:m,activeItem:d,itemSizeVariant:g=R.L,itemColor:f,itemOpacityHover:x,itemOpacityActive:p,itemTextColor:h,itemTextColorActive:y,$styles:b,$colors:$,...k},w)=>{const H=W($),S=F(["box","mr","btn","typography"],b),[q,E]=u.useState(d??""),A=u.useCallback(N=>{const Y=N.currentTarget.getAttribute("value");E(Y||""),m&&m(Y||"")},[m]),j=u.useMemo(()=>I.Children.map(k.children,N=>I.isValidElement(N)&&N.props.value?I.cloneElement(N,{onClick:A,active:N.props.value===q,sizeVariant:g,color:f,opacityHover:x,opacityActive:p,textColor:h,textColorActive:y,$styles:b,$colors:$,tabIndex:0,"aria-pressed":N.props.value===q?"true":"false",...N.props}):N),[k.children,A,q,g,f,b,$,p,x,h,y]);return v.jsx(um,{ref:w,$styles:S,$colors:H,$mr:e,$boxWidthVariant:t,$boxPaddingVariant:r,$boxGapVariant:a,$bg:n,$boxBorderColor:i,$boxRadiusVariant:l,$boxShadowVariant:o,$boxShadowColor:s,$orientation:c,...k,children:j})}));cm.__docgenInfo={description:"",methods:[],displayName:"BaseMenuGroup",props:{boxPaddingVariant:{defaultValue:{value:"'p-1'",computed:!1},required:!1},boxGapVariant:{defaultValue:{value:"'g-1'",computed:!1},required:!1},boxRadiusVariant:{defaultValue:{value:"'br-1'",computed:!1},required:!1},boxShadowVariant:{defaultValue:{value:"'shd-1'",computed:!1},required:!1},orientation:{defaultValue:{value:"OC.HORIZONTAL",computed:!0},required:!1},itemSizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1}}};const T=({cs:e,variant:t,disabled:r,color:n,opacity:a="",hover:i=!1})=>r?`${e.disabled}${a}`:n?`${n}${a}`:i?`${t==="error"?e.errorItemActive:t==="info"?e.infoItemActive:t==="warning"?e.warningItemActive:t==="success"?e.successItemActive:e.primaryItemActive}${a}`:`${t==="error"?e.errorItem:t==="info"?e.infoItem:t==="warning"?e.warningItem:t==="success"?e.successItem:e.primaryItem}${a}`,Qt=(e,t,r=800)=>{const n=e.currentTarget,a=n.getBoundingClientRect(),i=document.createElement("span"),l=Math.max(a.width,a.height),o=l/2;if(i.style.width=i.style.height=`${l}px`,i.style.left=`${e.clientX-a.left-o}px`,i.style.top=`${e.clientY-a.top-o}px`,i.style.backgroundColor=t,i.style.position="absolute",i.style.borderRadius="50%",i.style.transform="scale(0)",i.style.animation=`ripple ${r}ms linear`,"adoptedStyleSheets"in document){const c=new CSSStyleSheet;c.insertRule(`
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `),document.adoptedStyleSheets=[...document.adoptedStyleSheets,c]}else{const c=document.createElement("style");c.textContent=`
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `,document.head.appendChild(c)}i.classList.add("ripple");const s=n.getElementsByClassName("ripple")[0];s&&s.remove(),n.appendChild(i)},mm={[R.L]:e=>_`
        height: ${e.$styles.btn.btnHeight_L};
        padding: ${`${e.$styles.btn.btnPadding_Y_L} ${e.$styles.btn.btnPadding_X_L}`};
    `,[R.M]:e=>_`
        height: ${e.$styles.btn.btnHeight_M};
        padding: ${`${e.$styles.btn.btnPadding_Y_M} ${e.$styles.btn.btnPadding_X_M}`};
    `},dm=C.button`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    transition: background-color 400ms;
    background-color: transparent;
    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    font-weight: ${e=>e.$styles.typography.fontWeightGlobal};
    border-radius: ${({$styles:e})=>e.base.borderRadiusItem};
    cursor: ${e=>e.disabled?"default":"pointer"};
    border: 0;
    color: ${e=>e.$textColor??e.$colors.text};
    ${e=>mm[e.$sizeVariant](e)};
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
    ${e=>{if(e.$active)return _`
                background-color: ${T({cs:e.$colors,color:e.$color??e.$colors.primaryItem,opacity:e.$opacityActive??"40"})};
                color: ${e.$textColorActive??e.$colors.textItem};
            `}};

    &:not([disabled]):hover {
        ${e=>!e.$active&&_`
                background-color: ${T({cs:e.$colors,color:e.$color??e.$colors.primaryItem,opacity:e.$opacityHover??"60"})};
            `}
        transition: all 0.3s ease-in-out;
    }
`,vm=I.memo(I.forwardRef(({active:e,color:t,sizeVariant:r=R.L,onClick:n,opacityHover:a,opacityActive:i,textColor:l,textColorActive:o,$colors:s,$styles:c,blocked:m,_isActiveHover:d=!0,...g},f)=>{const x=W(s),p=F(["base","btn","typography"],c),h=async y=>{Qt(y,T({cs:x,color:t??x.textItem,opacity:"40"})),n&&await n(y)};return v.jsx(dm,{ref:f,$colors:x,$styles:p,$sizeVariant:r,$opacityHover:a,$opacityActive:i,$textColor:l,$textColorActive:o,$color:t,$blocked:m,$active:e,$_isActiveHover:d,onClick:h,...g,children:g.children})}));vm.__docgenInfo={description:"",methods:[],displayName:"BaseMenuItem",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};var ae=(e=>(e.TEXT="text",e.CONTAINED="contained",e.OUTLINED="outlined",e))(ae||{}),nt=(e=>(e.LEFT="left",e.CENTER="center",e.RIGHT="right",e))(nt||{});const gm={[R.L]:e=>_`
        height: ${e.btnHeight_L};
        padding: ${`${e.btnPadding_Y_L} ${e.btnPadding_X_L}`};
    `,[R.M]:e=>_`
        height: ${e.btnHeight_M};
        padding: ${`${e.btnPadding_Y_M} ${e.btnPadding_X_M}`};
    `},fm={[ae.CONTAINED]:e=>_`
        color: ${e.$colors.textItem};
        background-color: ${T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            background-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }
    `,[ae.TEXT]:e=>_`
        color: ${T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
        background-color: transparent;
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }
    `,[ae.OUTLINED]:e=>_`
        color: ${T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
        background-color: transparent;
        border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
        border-left: 1px solid;
        border-right: 1px solid;
        border-top: 1px solid;
        border-bottom: 1px solid;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }
    `},ml=C.button`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    transition: background-color 400ms;
    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    font-weight: ${e=>e.$styles.typography.fontWeightItem};
    border-radius: ${({$styles:e})=>e.base.borderRadiusItem};
    cursor: ${e=>e.disabled?"default":"pointer"};
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>gm[e.$sizeVariant](e.$styles.btn)};
    ${e=>fm[e.$variant](e)};
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,pm=I.memo(I.forwardRef(({mr:e,color:t,sizeVariant:r=R.L,colorVariant:n=le.DEFAULT,variant:a=ae.CONTAINED,onClick:i,$colors:l,$styles:o,blocked:s,_isActiveHover:c=!0,...m},d)=>{const g=W(l),f=F(["base","btn","typography","mr"],o),x=async p=>{Qt(p,T({cs:g,color:a===ae.CONTAINED?g.alpha:t,variant:n,opacity:"40"})),i&&await i(p)};return v.jsx(ml,{ref:d,$colors:g,$styles:f,$sizeVariant:r,$mr:e,$color:t,$colorVariant:n,$variant:a,onClick:x,$blocked:s,$_isActiveHover:c,...m,children:m.children})})),dl={Button:ml};pm.__docgenInfo={description:"",methods:[],displayName:"BaseButton",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},variant:{defaultValue:{value:"VB.CONTAINED",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const sa=({icon:e,size:t,sizeVariant:r,rest:n})=>{if(!e)return null;const a={[R.L]:{width:t.inpIconSize_L,height:t.inpIconSize_L,minWidth:t.inpIconSize_L,minheight:t.inpIconSize_L},[R.M]:{width:t.inpIconSize_M,height:t.inpIconSize_M,minWidth:t.inpIconSize_M,minHeight:t.inpIconSize_M}};return I.cloneElement(e,{_importantColor:!!(e!=null&&e.props.color),...n,style:{...a[r]},...e==null?void 0:e.props})},Xr=({icon:e,size:t,sizeVariant:r,rest:n})=>{if(!e)return null;const a={[R.L]:{width:t.btnIconSize_L,height:t.btnIconSize_L,minWidth:t.btnIconSize_L,minHeight:t.btnIconSize_L},[R.M]:{width:t.btnIconSize_M,height:t.btnIconSize_M,minWidth:t.btnIconSize_M,minHeight:t.btnIconSize_M}};return I.cloneElement(e,{_importantColor:!!(e!=null&&e.props.color),...n,style:{...a[r]},...e==null?void 0:e.props})};sa.__docgenInfo={description:"",methods:[],displayName:"renderIconTextField",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
}`,signature:{properties:[{key:"inpPadding_X_L",value:{name:"string",required:!0}},{key:"inpPadding_Y_L",value:{name:"string",required:!0}},{key:"inpPadding_X_M",value:{name:"string",required:!0}},{key:"inpPadding_Y_M",value:{name:"string",required:!0}},{key:"inpHeight_L",value:{name:"string",required:!0}},{key:"inpHeight_M",value:{name:"string",required:!0}},{key:"inpIconSize_L",value:{name:"string",required:!0}},{key:"inpIconSize_M",value:{name:"string",required:!0}}]}},description:""},sizeVariant:{required:!0,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},rest:{required:!1,tsType:{name:"object"},description:""}}};Xr.__docgenInfo={description:"",methods:[],displayName:"renderIconButton",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    btnPadding_X_L: string;
    btnPadding_Y_L: string;
    btnPadding_X_M: string;
    btnPadding_Y_M: string;
    btnHeight_L: string;
    btnHeight_M: string;
    btnIconSize_L: string;
    btnIconSize_M: string;
}`,signature:{properties:[{key:"btnPadding_X_L",value:{name:"string",required:!0}},{key:"btnPadding_Y_L",value:{name:"string",required:!0}},{key:"btnPadding_X_M",value:{name:"string",required:!0}},{key:"btnPadding_Y_M",value:{name:"string",required:!0}},{key:"btnHeight_L",value:{name:"string",required:!0}},{key:"btnHeight_M",value:{name:"string",required:!0}},{key:"btnIconSize_L",value:{name:"string",required:!0}},{key:"btnIconSize_M",value:{name:"string",required:!0}}]}},description:""},sizeVariant:{required:!0,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},rest:{required:!1,tsType:{name:"object"},description:""}}};const ci={[ae.CONTAINED]:e=>_`
        color: ${e.$colors.textItem};
    `,[ae.TEXT]:e=>_`
        color: ${T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.hover})};
    `,[ae.OUTLINED]:e=>_`
        color: ${T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.hover})};
    `},xm={[R.L]:e=>_`
        width: ${e.btnHeight_L};
        height: ${e.btnHeight_L};
    `,[R.M]:e=>_`
        width: ${e.btnHeight_M};
        height: ${e.btnHeight_M};
    `},ym=C(dl.Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>e.$borderRadius==="round"&&_`
            border-radius: 50%;
            ${xm[e.$sizeVariant](e.$styles.btn)}
        `}
    svg {
        ${e=>ci[e.$variant]({...e,hover:!1})};
    }

    &:not([disabled]):hover {
        svg {
            ${e=>ci[e.$variant]({...e,hover:e.$_isActiveHover})};
        }
    }
`,hm=I.memo(I.forwardRef(({borderRadius:e="default",sizeVariant:t=R.L,colorVariant:r=le.DEFAULT,variant:n=ae.CONTAINED,_isActiveHover:a=!0,...i},l)=>{const o=W(i.$colors),s=F(["base","btn","typography","mr"],i.$styles),c=u.useMemo(()=>Xr({icon:i.children,size:s.btn,sizeVariant:t,rest:{$colors:o}}),[i.children,o,s,t]),m=async d=>{Qt(d,T({cs:o,color:n===ae.CONTAINED?o.alpha:i.color,variant:r,opacity:"40"})),i.onClick&&await i.onClick(d)};return v.jsx(ym,{ref:l,$colors:o,$styles:s,onClick:m,$color:i.color,color:i.color,$blocked:i.blocked,$mr:i.mr,$sizeVariant:t,$colorVariant:r,$variant:n,$borderRadius:e,$_isActiveHover:a,...i,children:c&&c})}));hm.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{borderRadius:{defaultValue:{value:"'default'",computed:!1},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},variant:{defaultValue:{value:"VB.CONTAINED",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ar=C.div`
    ${e=>e.$iconPosition===ut.RIGHT?_`
                order: 1;
                margin-left: 6px;
            `:_`
                order: 0;
                margin-right: 6px;
            `}
`,mi={[ae.CONTAINED]:e=>_`
        color: ${e.$colors.textItem};
    `,[ae.TEXT]:e=>_`
        color: ${T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.hover})};
    `,[ae.OUTLINED]:e=>_`
        color: ${T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.hover})};
    `},vl=C(dl.Button)`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 70px;
    ${Ar} {
        svg {
            ${e=>mi[e.$variant]({...e,hover:!1})};
        }
    }
    &:not([disabled]):hover {
        ${Ar} {
            svg {
                ${e=>mi[e.$variant]({...e,hover:e.$_isActiveHover})};
            }
        }
    }
`,gl=C.div`
    flex-grow: 1;
    display: inline-block;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: ${e=>e.$position};
`,bm=I.memo(I.forwardRef(({icon:e,sizeVariant:t=R.L,colorVariant:r=le.DEFAULT,variant:n=ae.CONTAINED,position:a=nt.CENTER,iconPosition:i=ut.LEFT,_isActiveHover:l=!0,iconContainerProps:o,contentProps:s,...c},m)=>{const d=W(c.$colors),g=F(["base","btn","typography","mr"],c.$styles),f=u.useMemo(()=>Xr({icon:e,size:g.btn,sizeVariant:t,rest:{$colors:d}}),[e,d,g,t]),x=async p=>{Qt(p,T({cs:d,color:n===ae.CONTAINED?d.alpha:c.color,variant:r,opacity:"40"})),c.onClick&&await c.onClick(p)};return v.jsxs(vl,{ref:m,$colors:d,$styles:g,onClick:x,$sizeVariant:t,$colorVariant:r,$variant:n,$color:c.color,color:c.color,$mr:c.mr,$blocked:c.blocked,$_isActiveHover:l,...c,children:[f&&v.jsx(Ar,{$iconPosition:i,...o,children:f}),v.jsx(gl,{$position:a,...s,children:c.children})]})})),Ln={Button:vl,IconContainer:Ar,ContentContainer:gl};bm.__docgenInfo={description:"",methods:[],displayName:"SimpleButton",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},variant:{defaultValue:{value:"VB.CONTAINED",computed:!0},required:!1},position:{defaultValue:{value:"BP.CENTER",computed:!0},required:!1},iconPosition:{defaultValue:{value:"IIP.LEFT",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const ua=_`
    &::after {
        content: '';
        position: absolute;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        transition: opacity 0.5s;
        animation: 0.8s linear infinite rotate_StyledLoadingItemEffect;
        transition-delay: 0.5s;
        transition-duration: 1s;
    }
    @keyframes rotate_StyledLoadingItemEffect {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,di={[R.L]:e=>_`
        width: ${e.btnIconSize_L};
        height: ${e.btnIconSize_L};
    `,[R.M]:e=>_`
        width: ${e.btnIconSize_M};
        height: ${e.btnIconSize_M};
    `},$m={[ae.CONTAINED]:e=>_`
        border-color: ${e.$colors.textItem};
    `,[ae.TEXT]:e=>_`
        border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
    `,[ae.OUTLINED]:e=>_`
        border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
    `},km=C(Ln.Button)`
    ${e=>e.$isLoading&&_`
            pointer-events: none;
        `}
`,wm=C.span`
    position: relative;
    margin: 0 6px 2px 6px;
    ${e=>di[e.$sizeVariant](e.$styles.btn)}
    ${e=>{if(e.$isLoading&&!e.$disabled)return _`
                &::after {
                    border: 1px solid;
                    left: 3px;
                    ${di[e.$sizeVariant](e.$styles.btn)}
                    ${$m[e.$variant](e)}
                }

                ${ua}
            `}}
`,_m=I.memo(I.forwardRef(({isLoading:e,sizeVariant:t=R.L,colorVariant:r=le.DEFAULT,variant:n=ae.CONTAINED,position:a=nt.CENTER,iconPosition:i=ut.LEFT,_isActiveHover:l=!0,loadingProps:o,...s},c)=>{const m=W(s.$colors),d=F(["base","btn","typography","mr"],s.$styles),g=u.useMemo(()=>Xr({icon:s.icon,size:d.btn,sizeVariant:t,rest:{$colors:m}}),[s.icon,m,d,t]),f=async x=>{Qt(x,T({cs:m,color:n===ae.CONTAINED?m.alpha:s.color,variant:r,opacity:"40"})),s.onClick&&await s.onClick(x)};return v.jsxs(km,{ref:c,$colors:m,$styles:d,onClick:f,$sizeVariant:t,$colorVariant:r,$variant:n,$mr:s.mr,$isLoading:e,$blocked:s.blocked,$color:s.color,$_isActiveHover:!e&&l,...s,children:[g&&v.jsx(Ln.IconContainer,{$iconPosition:i,...s.iconContainerProps,children:g}),v.jsx(Ln.ContentContainer,{$position:a,...s.contentProps,children:s.children}),v.jsx(wm,{$isLoading:e,$disabled:s.disabled,$colors:m,$styles:d,$sizeVariant:t,$colorVariant:r,$variant:n,$color:s.color,...o})]})}));_m.__docgenInfo={description:"",methods:[],displayName:"SubmitButton",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},variant:{defaultValue:{value:"VB.CONTAINED",computed:!0},required:!1},position:{defaultValue:{value:"BP.CENTER",computed:!0},required:!1},iconPosition:{defaultValue:{value:"IIP.LEFT",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const fl=C.input`
    border: none;
    outline: 0;
    width: 100%;
    line-height: normal;
    background-color: transparent;
    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: 0 0 0 10px ${e=>e.$inputAutofill??e.$colors.background} inset !important;
        -webkit-text-fill-color: ${e=>e.$inputAutofillText??e.$colors.prompt} !important;
        color: ${e=>e.$inputAutofillText??e.$colors.prompt} !important;
    }
`,Sm=I.memo(({inputAutofill:e,inputAutofillText:t,$colors:r,$styles:n,...a})=>{const i=W(r),l=F(["typography"],n);return v.jsx(fl,{$inputAutofill:e,$inputAutofillText:t,$styles:l,$colors:i,...a})}),Im={Input:fl};Sm.__docgenInfo={description:"",methods:[],displayName:"BaseInput",props:{inputAutofill:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},inputAutofillText:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    typography: TypeSSTypography;
}`,signature:{properties:[{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""}}};var qt=(e=>(e.OUTLINED="outlined",e))(qt||{}),Bt=(e=>(e.LEFT="left",e.TOP="top",e.RIGHT="right",e))(Bt||{});const Hm={[R.L]:e=>_`
        height: ${e.$styles.inp.inpHeight_L};
        padding: ${`${e.$styles.inp.inpPadding_Y_L} ${e.$styles.inp.inpPadding_X_L}`};
    `,[R.M]:e=>_`
        height: ${e.$styles.inp.inpHeight_M};
        padding: ${`${e.$styles.inp.inpPadding_Y_M} ${e.$styles.inp.inpPadding_X_M}`};
    `},Cm={[qt.OUTLINED]:e=>_`
        color: ${e.$colors.prompt};
        background-color: transparent;
        border: 1px solid
            ${T({cs:e.$colors,color:e.$color,disabled:e.$disabled,variant:e.$colorVariant})};
        ${!e.$disabled&&_`
            &:hover {
                transition: all 0.3s ease-in-out;
                border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            }
            ${e.$_isFocused&&_`
                transition: all 0.3s ease-in-out;
                box-shadow: 0 0 3px 0
                    ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})}
                    inset;
                border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            `}
        `}
    `},pl=C.div`
    display: inline-block;
    position: relative;
    overflow: hidden;

    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    border-radius: ${({$styles:e})=>e.base.borderRadiusItem};

    ${e=>Cm[e.$variant](e)}
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>Hm[e.$sizeVariant](e)};

    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,qm=I.memo(({mr:e,color:t,disabled:r,blocked:n,variant:a=qt.OUTLINED,colorVariant:i=le.DEFAULT,sizeVariant:l=R.L,_isFocused:o,_isActiveHover:s=!0,$colors:c,$styles:m,...d})=>{const g=W(c),f=F(["base","inp","typography","mr"],m);return v.jsx(pl,{$mr:e,$colors:g,$styles:f,$color:t,$disabled:r,$colorVariant:i,$sizeVariant:l,$variant:a,$blocked:n,$_isFocused:o,$_isActiveHover:s,...d,children:d.children})}),Tm={Root:pl};qm.__docgenInfo={description:"",methods:[],displayName:"RootTextField",props:{mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},variant:{required:!1,tsType:{name:"literal",value:"'outlined'"},description:"",defaultValue:{value:"VI.OUTLINED",computed:!0}},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"VC.DEFAULT",computed:!0}},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:"",defaultValue:{value:"VS.L",computed:!0}},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},blocked:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"base",value:{name:"signature",type:"object",raw:`{
    borderRadiusItem: string;
}`,signature:{properties:[{key:"borderRadiusItem",value:{name:"string",required:!0}}]},required:!0}},{key:"inp",value:{name:"signature",type:"object",raw:`{
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
}`,signature:{properties:[{key:"inpPadding_X_L",value:{name:"string",required:!0}},{key:"inpPadding_Y_L",value:{name:"string",required:!0}},{key:"inpPadding_X_M",value:{name:"string",required:!0}},{key:"inpPadding_Y_M",value:{name:"string",required:!0}},{key:"inpHeight_L",value:{name:"string",required:!0}},{key:"inpHeight_M",value:{name:"string",required:!0}},{key:"inpIconSize_L",value:{name:"string",required:!0}},{key:"inpIconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},_isFocused:{required:!1,tsType:{name:"boolean"},description:""},_isActiveHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const xl=C(Im.Input)`
    &:disabled {
        color: ${e=>e.$colors.disabled};
    }
    &::placeholder {
        user-select: none;
        color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    }
    &:not([disabled]) {
        color: ${e=>e.$colors.prompt};
    }
`,yl=C(Tm.Root)`
    display: inline-flex;
    align-items: center;
`,Am=I.memo(I.forwardRef(({mr:e,blocked:t,color:r,variant:n=qt.OUTLINED,sizeVariant:a=R.L,colorVariant:i=le.DEFAULT,_isActiveHover:l=!0,$colors:o,$styles:s,rootProps:c,...m},d)=>{const g=W(o),f=F(["base","inp","typography","mr"],s),[x,p]=u.useState(!1),h=u.useCallback(()=>!m.disabled&&p(!0),[m.disabled]),y=u.useCallback(()=>!m.disabled&&p(!1),[m.disabled]);return v.jsx(yl,{$mr:e,$colors:g,$styles:f,$color:r,$colorVariant:i,$variant:n,$sizeVariant:a,$disabled:m.disabled,$_isFocused:x,$_isActiveHover:l,$blocked:t,onFocus:h,onBlur:y,...c,children:v.jsx(xl,{ref:d,$styles:{typography:f.typography},$colors:g,$color:r,$colorVariant:i,...m})})})),hl={Root:yl,Input:xl};Am.__docgenInfo={description:"",methods:[],displayName:"BaseTextField",props:{variant:{defaultValue:{value:"VI.OUTLINED",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const Er=C.div`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    ${e=>e.$disabled&&_`
            pointer-events: none;
        `};
    ${e=>e.$useBtn&&_`
            cursor: pointer;
        `};
    ${e=>e.$iconPosition===ut.RIGHT?_`
                order: 1;
                margin-left: 6px;
            `:_`
                order: 0;
                margin-right: 6px;
            `}
`,bl=C(hl.Root)`
    display: inline-flex;
    align-items: center;
    min-width: 100px;
    ${Er} {
        svg {
            color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.$disabled,variant:e.$colorVariant,hover:e.$_isFocused})};
        }
    }
    &:hover {
        ${Er} {
            svg {
                color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.$disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            }
        }
    }
`,$l=C(hl.Input)`
    &:disabled {
        color: ${e=>e.$colors.disabled};
    }
    &::placeholder {
        color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    }
    &:not([disabled]) {
        color: ${e=>e.$colors.prompt};
    }
`,Em=I.memo(I.forwardRef(({mr:e,icon:t,color:r,iconOnClick:n,_isActiveHover:a=!0,iconPosition:i=ut.LEFT,variant:l=qt.OUTLINED,sizeVariant:o=R.L,colorVariant:s=le.DEFAULT,$colors:c,$styles:m,rootProps:d,iconContainerProps:g,...f},x)=>{const p=W(c),h=F(["base","inp","typography","mr"],m),[y,b]=u.useState(!1),$=u.useCallback(()=>!f.disabled&&b(!0),[f.disabled]),k=u.useCallback(()=>!f.disabled&&b(!1),[f.disabled]),w=u.useMemo(()=>sa({icon:t,size:h.inp,sizeVariant:o,rest:{$colors:p}}),[t,p,h,o]);return v.jsxs(bl,{$mr:e,$colors:p,$styles:h,$color:r,$colorVariant:s,$sizeVariant:o,$variant:l,$disabled:f.disabled,$blocked:f.blocked,$_isActiveHover:a,$_isFocused:y,onFocus:$,onBlur:k,...d,children:[t&&v.jsx(Er,{as:n?"button":"div",onClick:n,$disabled:f.disabled,$iconPosition:i,$useBtn:!!n,type:"button",...g,children:w}),v.jsx($l,{ref:x,$styles:{typography:h.typography},$colors:p,$color:r,$colorVariant:s,...f})]})})),Mn={Root:bl,IconContainer:Er,Input:$l};Em.__docgenInfo={description:"",methods:[],displayName:"SimpleTextField",props:{_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1},iconPosition:{defaultValue:{value:"IIP.LEFT",computed:!0},required:!1},variant:{defaultValue:{value:"VI.OUTLINED",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1}}};const Rm=C(Mn.Input)`
    ${e=>e.$isLoading&&_`
            pointer-events: none;
        `}
`,vi={[R.L]:e=>_`
        width: ${e.$styles.inp.inpIconSize_L};
        height: ${e.$styles.inp.inpIconSize_L};
    `,[R.M]:e=>_`
        width: ${e.$styles.inp.inpIconSize_M};
        height: ${e.$styles.inp.inpIconSize_M};
    `},Pm=C.span`
    margin: 0 6px 2px 6px;
    ${e=>vi[e.$sizeVariant](e)}
    ${e=>{if(e.$isLoading&&!e.$disabled)return _`
                &::after {
                    ${vi[e.$sizeVariant](e)}
                    border: 1px solid ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
                }
                ${ua}
            `}}
`,Lm=I.memo(I.forwardRef(({mr:e,icon:t,color:r,iconOnClick:n,_isActiveHover:a=!0,isLoading:i=!1,iconPosition:l=ut.LEFT,variant:o=qt.OUTLINED,sizeVariant:s=R.L,colorVariant:c=le.DEFAULT,$colors:m,$styles:d,rootProps:g,iconContainerProps:f,loadingProps:x,...p},h)=>{const y=W(m),b=F(["base","inp","typography","mr"],d),[$,k]=u.useState(!1),w=u.useCallback(()=>(!p.disabled||i)&&k(!0),[p.disabled,i]),H=u.useCallback(()=>(!p.disabled||i)&&k(!1),[p.disabled,i]),S=u.useMemo(()=>sa({icon:t,size:b.inp,sizeVariant:s,rest:{$colors:y}}),[t,y,b,s]);return v.jsxs(Mn.Root,{$mr:e,$colors:y,$styles:b,$color:r,$colorVariant:c,$sizeVariant:s,$variant:o,$disabled:p.disabled,$blocked:p.blocked,$_isFocused:$,$_isActiveHover:!i&&a,onFocus:w,onBlur:H,...g,children:[t&&v.jsx(Mn.IconContainer,{as:n?"button":"div",onClick:n,$iconPosition:l,$disabled:p.disabled||i,$useBtn:!!n,type:"button",...f,children:S}),v.jsx(Rm,{ref:h,$styles:{typography:b.typography},$colors:y,$color:r,$colorVariant:c,$isLoading:i,disabled:p.disabled,...p}),v.jsx(Pm,{$styles:b,$colors:y,$color:r,$colorVariant:c,$isLoading:i,$sizeVariant:s,$disabled:p.disabled,...x})]})}));Lm.__docgenInfo={description:"",methods:[],displayName:"SubmitTextField",props:{_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:"IIP.LEFT",computed:!0},required:!1},variant:{defaultValue:{value:"VI.OUTLINED",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1}}};const Mm=C.span`
    position: absolute;
    font-size: 10px;
    top: calc(100% + 2px);
    left: 0;
    color: ${e=>T({cs:e.$colors,variant:e.$colorVariant})};
`,ca=I.memo(I.forwardRef(({$colors:e,message:t,...r},n)=>{const a=W(e);if(t)return v.jsx(Mm,{ref:n,$colors:a,$colorVariant:t.colorVariant??"error",...r,children:t.text})}));ca.__docgenInfo={description:"",methods:[],displayName:"MessageBox"};const kl=C.p`
    font-size: ${e=>e.$styles.typography.fontSizeGlobal};
    font-weight: ${e=>e.$styles.typography.fontWeightGlobal};
    color: ${e=>e.$color??e.$colors.text};
    line-height: normal;
`,Vm=I.memo(({as:e="p",color:t,$colors:r,$styles:n,...a})=>{const i=W(r),l=F(["typography"],n);return v.jsx(kl,{as:e,$colors:i,$styles:l,$color:t,...a,children:a.children})}),ma={Text:kl};Vm.__docgenInfo={description:"",methods:[],displayName:"BaseText",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    typography: TypeSSTypography;
}`,signature:{properties:[{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'p'",computed:!1}}}};const Nm={[Bt.TOP]:_`
        display: grid;
    `,[Bt.RIGHT]:_`
        display: flex;
        align-items: center;
        > * {
            order: 1;
        }
        > :first-child {
            order: 2;
        }
    `,[Bt.LEFT]:_`
        display: flex;
        align-items: center;
    `},jm=C.div`
    position: relative;
    max-width: 100%;
    width: fit-content;
    ${e=>Ur[e.$boxGapVariant](e.$styles.box)};
    ${e=>ne(e.$styles.mr,e.$mr)}
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
    ${e=>Nm[e.$positionLabel]}
`,Dm=C(ma.Text)`
    position: relative;
    cursor: pointer;
    user-select: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
    width: fit-content;
    ${e=>e.$required&&_`
            padding-right: 8px;
            &:before {
                content: '*';
                position: absolute;
                top: 0;
                right: 0;
                color: ${e.$colors.errorItem};
            }
        `};
`,Om=I.memo(I.forwardRef(({mr:e,id:t,children:r,required:n,blocked:a,customLabel:i,positionLabel:l=Bt.TOP,$colors:o,$styles:s,label:c,message:m,boxGapVariant:d="g-2",labelColor:g,messageProps:f,labelProps:x,...p},h)=>{const y=W(o),b=F(["box","mr","typography"],s),$=u.useMemo(()=>I.cloneElement(r,{id:t}),[r,t]);return v.jsxs(jm,{ref:h,$colors:y,$blocked:a,$styles:b,$mr:e,$positionLabel:l,$boxGapVariant:d,...p,children:[i||v.jsx(Dm,{as:"label",htmlFor:t,$required:n,$colors:y,$styles:{typography:b.typography},$color:g,...x,children:c}),$,v.jsx(ca,{$colors:y,message:m,...f})]})}));Om.__docgenInfo={description:"",methods:[],displayName:"WrapperInput",props:{positionLabel:{defaultValue:{value:"PIL.TOP",computed:!0},required:!1},boxGapVariant:{defaultValue:{value:"'g-2'",computed:!1},required:!1}}};const zm={[R.L]:e=>_`
        padding: ${e.inpPadding_Y_L} 5px ${e.inpPadding_Y_L} ${e.inpPadding_X_L};
    `,[R.M]:e=>_`
        padding: ${e.inpPadding_Y_M} 3px ${e.inpPadding_Y_M} ${e.inpPadding_X_M};
    `},wl=C.div`
    position: relative;
    display: inline-block;
    overflow: hidden;
    background-color: transparent;
    line-height: normal;
    ${e=>zm[e.$sizeVariant](e.$styles.inp)};
    border-radius: ${e=>e.$styles.base.borderRadiusItem};
    color: ${e=>e.$colors.prompt};
    border: 1px solid
        ${e=>T({cs:e.$colors,color:e.$color,disabled:e.$disabled,variant:e.$colorVariant})};

    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>{if(!e.$disabled)return _`
                &:hover {
                    transition: all 0.3s ease-in-out;
                    border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
                }
                ${e.$_isFocused&&_`
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0 0 3px 0
                        ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})}
                        inset;
                    border-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
                `}
            `}};
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,Bm=I.memo(({mr:e,color:t,disabled:r,blocked:n,sizeVariant:a=R.L,colorVariant:i=le.DEFAULT,$colors:l,$styles:o,_isActiveHover:s=!0,_isFocused:c,...m})=>{const d=W(l),g=F(["base","mr","inp"],o);return v.jsx(wl,{$mr:e,$styles:g,$colors:d,$color:t,$blocked:n,$colorVariant:i,$sizeVariant:a,$disabled:r,$_isActiveHover:s,$_isFocused:c,...m,children:m.children})}),Fm={Root:wl};Bm.__docgenInfo={description:"",methods:[],displayName:"RootTextarea",props:{mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:"",defaultValue:{value:"VS.L",computed:!0}},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"VC.DEFAULT",computed:!0}},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"base",value:{name:"signature",type:"object",raw:`{
    borderRadiusItem: string;
}`,signature:{properties:[{key:"borderRadiusItem",value:{name:"string",required:!0}}]},required:!0}},{key:"inp",value:{name:"signature",type:"object",raw:`{
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
}`,signature:{properties:[{key:"inpPadding_X_L",value:{name:"string",required:!0}},{key:"inpPadding_Y_L",value:{name:"string",required:!0}},{key:"inpPadding_X_M",value:{name:"string",required:!0}},{key:"inpPadding_Y_M",value:{name:"string",required:!0}},{key:"inpHeight_L",value:{name:"string",required:!0}},{key:"inpHeight_M",value:{name:"string",required:!0}},{key:"inpIconSize_L",value:{name:"string",required:!0}},{key:"inpIconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},blocked:{required:!1,tsType:{name:"boolean"},description:""},_isActiveHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},_isFocused:{required:!1,tsType:{name:"boolean"},description:""}}};const _l=C.textarea`
    outline: 0;
    background-color: transparent;
    line-height: 20px;
    font-size: ${e=>e.$styles.typography.fontSizeItem};
    border: 0;
    height: 100%;
    width: 100%;
    resize: ${e=>e.$resize?"vertical":"none"};
`,Wm=I.memo(I.forwardRef(({resize:e,$styles:t,...r},n)=>{const a=F(["typography"],t);return v.jsx(_l,{ref:n,$styles:a,$resize:e,...r})})),Gm={Textarea:_l};Wm.__docgenInfo={description:"",methods:[],displayName:"BaseInputArea",props:{$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    typography: TypeSSTypography;
}`,signature:{properties:[{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},resize:{required:!1,tsType:{name:"boolean"},description:""}}};const Yr=e=>_`
    &::-webkit-scrollbar-track {
        width: 3px;
    }
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 3px;
        max-height: 3px;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$hover})};
    }
`,Sl=C(Gm.Textarea)`
    padding: 0 3px 0 0;
`,Um=C(Fm.Root)`
    ${Sl} {
        ${e=>Yr({$colors:e.$colors,$color:e.$color,$colorVariant:e.$colorVariant,$hover:e.$_isActiveHover})}
        &:disabled {
            color: ${e=>e.$colors.disabled};
        }
        &::placeholder {
            user-select: none;
            color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.$disabled,variant:e.$colorVariant})};
        }
        &:not([disabled]) {
            color: ${e=>e.$colors.prompt};
        }
    }
`,Xm=I.memo(I.forwardRef(({mr:e,color:t,sizeVariant:r=R.L,colorVariant:n=le.DEFAULT,$colors:a,$styles:i,_isActiveHover:l=!0,resize:o,blocked:s,propsRoot:c,...m},d)=>{const g=W(a),f=F(["base","mr","typography","inp"],i),[x,p]=u.useState(!1),h=u.useCallback(()=>!m.disabled&&p(!0),[m.disabled]),y=u.useCallback(()=>!m.disabled&&p(!1),[m.disabled]);return v.jsx(Um,{$mr:e,$styles:f,$colors:g,$color:t,$colorVariant:n,$sizeVariant:r,$_isActiveHover:l,onFocus:h,onBlur:y,$_isFocused:x,$disabled:m.disabled,$blocked:s,...c,children:v.jsx(Sl,{ref:d,$resize:o,$styles:f,...m})})}));Xm.__docgenInfo={description:"",methods:[],displayName:"BaseTextarea",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};function P(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Ym(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Il(...e){return t=>e.forEach(r=>Ym(r,t))}function z(...e){return u.useCallback(Il(...e),e)}function Km(e,t){const r=u.createContext(t);function n(i){const{children:l,...o}=i,s=u.useMemo(()=>o,Object.values(o));return v.jsx(r.Provider,{value:s,children:l})}function a(i){const l=u.useContext(r);if(l)return l;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return n.displayName=e+"Provider",[n,a]}function me(e,t=[]){let r=[];function n(i,l){const o=u.createContext(l),s=r.length;r=[...r,l];function c(d){const{scope:g,children:f,...x}=d,p=(g==null?void 0:g[e][s])||o,h=u.useMemo(()=>x,Object.values(x));return v.jsx(p.Provider,{value:h,children:f})}function m(d,g){const f=(g==null?void 0:g[e][s])||o,x=u.useContext(f);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${d}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,m]}const a=()=>{const i=r.map(l=>u.createContext(l));return function(o){const s=(o==null?void 0:o[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...o,[e]:s}}),[o,s])}};return a.scopeName=e,[n,Zm(a,...t)]}function Zm(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const l=n.reduce((o,{useScope:s,scopeName:c})=>{const d=s(i)[`__scope${c}`];return{...o,...d}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function se(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function Ie({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,a]=Qm({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,o=se(r),s=u.useCallback(c=>{if(i){const d=typeof c=="function"?c(e):c;d!==e&&o(d)}else a(c)},[i,e,a,o]);return[l,s]}function Qm({defaultProp:e,onChange:t}){const r=u.useState(e),[n]=r,a=u.useRef(n),i=se(t);return u.useEffect(()=>{a.current!==n&&(i(n),a.current=n)},[n,a,i]),r}function Jt(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var ue=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function er(e){const[t,r]=u.useState(void 0);return ue(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const i=a[0];let l,o;if("borderBoxSize"in i){const s=i.borderBoxSize,c=Array.isArray(s)?s[0]:s;l=c.inlineSize,o=c.blockSize}else l=e.offsetWidth,o=e.offsetHeight;r({width:l,height:o})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}var it=u.forwardRef((e,t)=>{const{children:r,...n}=e,a=u.Children.toArray(r),i=a.find(Jm);if(i){const l=i.props.children,o=a.map(s=>s===i?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:s);return v.jsx(Vn,{...n,ref:t,children:u.isValidElement(l)?u.cloneElement(l,void 0,o):null})}return v.jsx(Vn,{...n,ref:t,children:r})});it.displayName="Slot";var Vn=u.forwardRef((e,t)=>{const{children:r,...n}=e;if(u.isValidElement(r)){const a=td(r);return u.cloneElement(r,{...ed(n,r.props),ref:t?Il(t,a):a})}return u.Children.count(r)>1?u.Children.only(null):null});Vn.displayName="SlotClone";var Hl=({children:e})=>v.jsx(v.Fragment,{children:e});function Jm(e){return u.isValidElement(e)&&e.type===Hl}function ed(e,t){const r={...t};for(const n in t){const a=e[n],i=t[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...o)=>{i(...o),a(...o)}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function td(e){var n,a;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var rd=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],M=rd.reduce((e,t)=>{const r=u.forwardRef((n,a)=>{const{asChild:i,...l}=n,o=i?it:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(o,{...l,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function nd(e,t){e&&Yt.flushSync(()=>e.dispatchEvent(t))}var da="Switch",[ad,Ky]=me(da),[id,ld]=ad(da),Cl=u.forwardRef((e,t)=>{const{__scopeSwitch:r,name:n,checked:a,defaultChecked:i,required:l,disabled:o,value:s="on",onCheckedChange:c,...m}=e,[d,g]=u.useState(null),f=z(t,b=>g(b)),x=u.useRef(!1),p=d?!!d.closest("form"):!0,[h=!1,y]=Ie({prop:a,defaultProp:i,onChange:c});return v.jsxs(id,{scope:r,checked:h,disabled:o,children:[v.jsx(M.button,{type:"button",role:"switch","aria-checked":h,"aria-required":l,"data-state":Al(h),"data-disabled":o?"":void 0,disabled:o,value:s,...m,ref:f,onClick:P(e.onClick,b=>{y($=>!$),p&&(x.current=b.isPropagationStopped(),x.current||b.stopPropagation())})}),p&&v.jsx(od,{control:d,bubbles:!x.current,name:n,value:s,checked:h,required:l,disabled:o,style:{transform:"translateX(-100%)"}})]})});Cl.displayName=da;var ql="SwitchThumb",Tl=u.forwardRef((e,t)=>{const{__scopeSwitch:r,...n}=e,a=ld(ql,r);return v.jsx(M.span,{"data-state":Al(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:t})});Tl.displayName=ql;var od=e=>{const{control:t,checked:r,bubbles:n=!0,...a}=e,i=u.useRef(null),l=Jt(r),o=er(t);return u.useEffect(()=>{const s=i.current,c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"checked").set;if(l!==r&&d){const g=new Event("click",{bubbles:n});d.call(s,r),s.dispatchEvent(g)}},[l,r,n]),v.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Al(e){return e?"checked":"unchecked"}var sd=Cl,ud=Tl;const cd={[R.L]:e=>_`
        width: ${e.switchThumbSize_L};
        height: ${e.switchThumbSize_L};
    `,[R.M]:e=>_`
        width: ${e.switchThumbSize_M};
        height: ${e.switchThumbSize_M};
    `},md={[R.L]:e=>_`
        transform: translateX(${e.switchThumbTranslateX_L});
    `,[R.M]:e=>_`
        transform: translateX(${e.switchThumbTranslateX_M});
    `},dd={[R.L]:e=>_`
        width: ${e.switchSize_X_L};
        height: ${e.switchSize_Y_L};
    `,[R.M]:e=>_`
        width: ${e.switchSize_X_M};
        height: ${e.switchSize_Y_M};
    `},El=C(ud)`
    display: block;
    background-color: ${e=>e.$colors.textItem};
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(1px);
    will-change: transform;
    &[data-state='checked'] {
        ${e=>md[e.$sizeVariant](e.$styles.switch)}
    }
    ${e=>cd[e.$sizeVariant](e.$styles.switch)}
`,Rl=C(sd)`
    all: unset;
    background-color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    border-radius: 9999px;
    position: relative;
    &[data-state='checked'] {
        background-color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
    }

    ${e=>dd[e.$sizeVariant](e.$styles.switch)}
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,vd=I.memo(I.forwardRef(({mr:e,color:t,colorVariant:r=le.DEFAULT,sizeVariant:n=R.L,blocked:a,$colors:i,$styles:l,_isActiveHover:o=!0,thumbProps:s,...c},m)=>{const d=W(i),g=F(["switch","mr"],l);return v.jsx(Rl,{ref:m,$color:t,$mr:e,$blocked:a,$colors:d,$styles:g,$colorVariant:r,$sizeVariant:n,$_isActiveHover:o,...c,children:v.jsx(El,{$colors:d,$styles:g,$sizeVariant:n,...s})})})),Pl={Root:Rl,Thumb:El};vd.__docgenInfo={description:"",methods:[],displayName:"BaseSwitch",props:{mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"VC.DEFAULT",computed:!0}},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:"",defaultValue:{value:"VS.L",computed:!0}},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},blocked:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    switch: TypeSSSwitch;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"switch",value:{name:"signature",type:"object",raw:`{
    switchSize_X_L: string;
    switchSize_Y_L: string;
    switchSize_X_M: string;
    switchSize_Y_M: string;
    switchThumbSize_L: string;
    switchThumbSize_M: string;
    switchThumbTranslateX_L: string;
    switchThumbTranslateX_M: string;
}`,signature:{properties:[{key:"switchSize_X_L",value:{name:"string",required:!0}},{key:"switchSize_Y_L",value:{name:"string",required:!0}},{key:"switchSize_X_M",value:{name:"string",required:!0}},{key:"switchSize_Y_M",value:{name:"string",required:!0}},{key:"switchThumbSize_L",value:{name:"string",required:!0}},{key:"switchThumbSize_M",value:{name:"string",required:!0}},{key:"switchThumbTranslateX_L",value:{name:"string",required:!0}},{key:"switchThumbTranslateX_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},_isActiveHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},thumbProps:{required:!1,tsType:{name:"ReactComponentPropsWithRef",raw:"React.ComponentPropsWithRef<typeof Switch.Thumb>",elements:[{name:"Switch.Thumb"}]},description:""}}};const gd={[R.L]:e=>_`
        width: ${e.switchThumbSize_L};
        height: ${e.switchThumbSize_L};
    `,[R.M]:e=>_`
        width: ${e.switchThumbSize_M};
        height: ${e.switchThumbSize_M};
    `},fd=C(Pl.Root)`
    ${e=>{if(e.$isLoading&&!e.disabled)return _`
                pointer-events: none;
                &::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    top: 0;
                    ${e.checked||e.defaultChecked?"right: 0":"left: 0"};
                    ${gd[e.$sizeVariant](e.$styles.switch)}
                    border: 1px solid ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
                    animation: 0.8s linear infinite show_Switch;
                    @keyframes show_Switch {
                        0% {
                            transform: scale(0);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                }
            `}}
`,pd=I.memo(I.forwardRef(({mr:e,color:t,isLoading:r,blocked:n,colorVariant:a=le.DEFAULT,sizeVariant:i=R.L,$colors:l,$styles:o,_isActiveHover:s=!0,thumbProps:c,...m},d)=>{const g=W(l),f=F(["switch","mr"],o);return v.jsx(fd,{ref:d,$color:t,$mr:e,$colors:g,$styles:f,$colorVariant:a,$sizeVariant:i,$_isActiveHover:s,$isLoading:r,$blocked:n,...m,children:v.jsx(Pl.Thumb,{$colors:g,$styles:f,$sizeVariant:i,...c})})}));pd.__docgenInfo={description:"",methods:[],displayName:"SubmitSwitch",props:{colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};function xd(e,t){return u.useReducer((r,n)=>t[r][n]??r,e)}var de=e=>{const{present:t,children:r}=e,n=yd(t),a=typeof r=="function"?r({present:n.isPresent}):u.Children.only(r),i=z(n.ref,hd(a));return typeof r=="function"||n.isPresent?u.cloneElement(a,{ref:i}):null};de.displayName="Presence";function yd(e){const[t,r]=u.useState(),n=u.useRef({}),a=u.useRef(e),i=u.useRef("none"),l=e?"mounted":"unmounted",[o,s]=xd(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const c=cr(n.current);i.current=o==="mounted"?c:"none"},[o]),ue(()=>{const c=n.current,m=a.current;if(m!==e){const g=i.current,f=cr(c);e?s("MOUNT"):f==="none"||(c==null?void 0:c.display)==="none"?s("UNMOUNT"):s(m&&g!==f?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,s]),ue(()=>{if(t){const c=d=>{const f=cr(n.current).includes(d.animationName);d.target===t&&f&&Yt.flushSync(()=>s("ANIMATION_END"))},m=d=>{d.target===t&&(i.current=cr(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:u.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function cr(e){return(e==null?void 0:e.animationName)||"none"}function hd(e){var n,a;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var va="Checkbox",[bd,Zy]=me(va),[$d,kd]=bd(va),Ll=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:a,defaultChecked:i,required:l,disabled:o,value:s="on",onCheckedChange:c,...m}=e,[d,g]=u.useState(null),f=z(t,$=>g($)),x=u.useRef(!1),p=d?!!d.closest("form"):!0,[h=!1,y]=Ie({prop:a,defaultProp:i,onChange:c}),b=u.useRef(h);return u.useEffect(()=>{const $=d==null?void 0:d.form;if($){const k=()=>y(b.current);return $.addEventListener("reset",k),()=>$.removeEventListener("reset",k)}},[d,y]),v.jsxs($d,{scope:r,state:h,disabled:o,children:[v.jsx(M.button,{type:"button",role:"checkbox","aria-checked":at(h)?"mixed":h,"aria-required":l,"data-state":Nl(h),"data-disabled":o?"":void 0,disabled:o,value:s,...m,ref:f,onKeyDown:P(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:P(e.onClick,$=>{y(k=>at(k)?!0:!k),p&&(x.current=$.isPropagationStopped(),x.current||$.stopPropagation())})}),p&&v.jsx(wd,{control:d,bubbles:!x.current,name:n,value:s,checked:h,required:l,disabled:o,style:{transform:"translateX(-100%)"}})]})});Ll.displayName=va;var Ml="CheckboxIndicator",Vl=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...a}=e,i=kd(Ml,r);return v.jsx(de,{present:n||at(i.state)||i.state===!0,children:v.jsx(M.span,{"data-state":Nl(i.state),"data-disabled":i.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});Vl.displayName=Ml;var wd=e=>{const{control:t,checked:r,bubbles:n=!0,...a}=e,i=u.useRef(null),l=Jt(r),o=er(t);return u.useEffect(()=>{const s=i.current,c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"checked").set;if(l!==r&&d){const g=new Event("click",{bubbles:n});s.indeterminate=at(r),d.call(s,at(r)?!1:r),s.dispatchEvent(g)}},[l,r,n]),v.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:at(r)?!1:r,...a,tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function at(e){return e==="indeterminate"}function Nl(e){return at(e)?"indeterminate":e?"checked":"unchecked"}var _d=Ll,jl=Vl;const ga=C.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    fill: none;
    stroke: ${e=>T({cs:e.$colors,disabled:e.$disabled,color:e.$color,variant:e.$colorVariant})};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`,Sd={[R.L]:e=>_`
        width: ${e.checkboxSize_L};
        height: ${e.checkboxSize_L};
        min-width: ${e.checkboxSize_L};
        min-height: ${e.checkboxSize_L};
    `,[R.M]:e=>_`
        width: ${e.checkboxSize_M};
        height: ${e.checkboxSize_M};
        min-width: ${e.checkboxSize_M};
        min-height: ${e.checkboxSize_M};
    `},Dl=C(_d)`
    position: relative;
    background-color: transparent;
    cursor: ${e=>e.disabled?"default":"pointer"};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    border: 1px solid
        ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
    &:not([disabled]):hover {
        border-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};

        background-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover,opacity:"20"})};
        ${ga} {
            stroke: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }
    }
    ${e=>Sd[e.$sizeVariant](e.$styles.checkbox)};
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,Id=I.memo(I.forwardRef(({mr:e,color:t,colorVariant:r=le.DEFAULT,sizeVariant:n=R.L,blocked:a,$colors:i,$styles:l,_isActiveHover:o=!0,indicatorProps:s,iconProps:c,polylineProps:m,...d},g)=>{const f=W(i),x=F(["base","checkbox","mr"],l);return v.jsx(Dl,{ref:g,$color:t,$mr:e,$colors:f,$blocked:a,$styles:x,$colorVariant:r,$sizeVariant:n,$_isActiveHover:o,...d,children:v.jsx(jl,{...s,children:v.jsx(ga,{$colors:f,$colorVariant:r,$disabled:d.disabled,$color:t,viewBox:"0 0 24 24",...c,children:v.jsx("polyline",{points:"20 6 9 17 4 12",...m})})})})})),Nn={Root:Dl,Icon:ga,Indicator:jl};Id.__docgenInfo={description:"",methods:[],displayName:"BaseCheckbox",props:{colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const Hd={[R.L]:e=>_`
        width: ${e.checkboxLoadingSize_L};
        height: ${e.checkboxLoadingSize_L};
    `,[R.M]:e=>_`
        width: ${e.checkboxLoadingSize_M};
        height: ${e.checkboxLoadingSize_M};
    `},Cd=C(Nn.Root)`
    ${e=>{if(e.$isLoading&&!e.disabled)return _`
                pointer-events: none;
                border-color: transparent;
                svg {
                    stroke: ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
                }
                &::after {
                    top: 0;
                    left: 0;
                    ${Hd[e.$sizeVariant](e.$styles.checkbox)}
                    border: 1px solid ${T({cs:e.$colors,color:e.$color,variant:e.$colorVariant})};
                }
                ${ua}
            `}}
`,qd=I.memo(I.forwardRef(({isLoading:e,colorVariant:t=le.DEFAULT,sizeVariant:r=R.L,_isActiveHover:n=!0,...a},i)=>{const l=W(a.$colors),o=F(["base","checkbox","mr"],a.$styles);return v.jsx(Cd,{ref:i,$isLoading:e,$color:a.color,$mr:a.mr,$colors:l,$blocked:a.blocked,$styles:o,$colorVariant:t,$sizeVariant:r,$_isActiveHover:n,...a,children:v.jsx(Nn.Indicator,{...a.indicatorProps,children:v.jsx(Nn.Icon,{$colors:l,$disabled:a.disabled,$colorVariant:t,viewBox:"0 0 24 24",...a.iconProps,children:v.jsx("polyline",{points:"20 6 9 17 4 12",...a.polylineProps})})})})}));qd.__docgenInfo={description:"",methods:[],displayName:"SubmitCheckbox",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:""},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};function Td(e,t=globalThis==null?void 0:globalThis.document){const r=se(e);u.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[r,t])}var Ad="DismissableLayer",jn="dismissableLayer.update",Ed="dismissableLayer.pointerDownOutside",Rd="dismissableLayer.focusOutside",gi,Ol=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),tr=u.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:o,...s}=e,c=u.useContext(Ol),[m,d]=u.useState(null),g=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=u.useState({}),x=z(t,S=>d(S)),p=Array.from(c.layers),[h]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),y=p.indexOf(h),b=m?p.indexOf(m):-1,$=c.layersWithOutsidePointerEventsDisabled.size>0,k=b>=y,w=Md(S=>{const q=S.target,E=[...c.branches].some(A=>A.contains(q));!k||E||(a==null||a(S),l==null||l(S),S.defaultPrevented||o==null||o())},g),H=Vd(S=>{const q=S.target;[...c.branches].some(A=>A.contains(q))||(i==null||i(S),l==null||l(S),S.defaultPrevented||o==null||o())},g);return Td(S=>{b===c.layers.size-1&&(n==null||n(S),!S.defaultPrevented&&o&&(S.preventDefault(),o()))},g),u.useEffect(()=>{if(m)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(gi=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(m)),c.layers.add(m),fi(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=gi)}},[m,g,r,c]),u.useEffect(()=>()=>{m&&(c.layers.delete(m),c.layersWithOutsidePointerEventsDisabled.delete(m),fi())},[m,c]),u.useEffect(()=>{const S=()=>f({});return document.addEventListener(jn,S),()=>document.removeEventListener(jn,S)},[]),v.jsx(M.div,{...s,ref:x,style:{pointerEvents:$?k?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,H.onFocusCapture),onBlurCapture:P(e.onBlurCapture,H.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,w.onPointerDownCapture)})});tr.displayName=Ad;var Pd="DismissableLayerBranch",Ld=u.forwardRef((e,t)=>{const r=u.useContext(Ol),n=u.useRef(null),a=z(t,n);return u.useEffect(()=>{const i=n.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),v.jsx(M.div,{...e,ref:a})});Ld.displayName=Pd;function Md(e,t=globalThis==null?void 0:globalThis.document){const r=se(e),n=u.useRef(!1),a=u.useRef(()=>{});return u.useEffect(()=>{const i=o=>{if(o.target&&!n.current){let s=function(){zl(Ed,r,c,{discrete:!0})};const c={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=s,t.addEventListener("click",a.current,{once:!0})):s()}else t.removeEventListener("click",a.current);n.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}function Vd(e,t=globalThis==null?void 0:globalThis.document){const r=se(e),n=u.useRef(!1);return u.useEffect(()=>{const a=i=>{i.target&&!n.current&&zl(Rd,r,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function fi(){const e=new CustomEvent(jn);document.dispatchEvent(e)}function zl(e,t,r,{discrete:n}){const a=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?nd(a,i):a.dispatchEvent(i)}var Nd=Gu.useId||(()=>{}),jd=0;function Le(e){const[t,r]=u.useState(Nd());return ue(()=>{r(n=>n??String(jd++))},[e]),t?`radix-${t}`:""}const Dd=["top","right","bottom","left"],Pe=Math.min,ye=Math.max,Rr=Math.round,mr=Math.floor,Xe=e=>({x:e,y:e}),Od={left:"right",right:"left",bottom:"top",top:"bottom"},zd={start:"end",end:"start"};function Dn(e,t,r){return ye(e,Pe(t,r))}function Oe(e,t){return typeof e=="function"?e(t):e}function ze(e){return e.split("-")[0]}function Tt(e){return e.split("-")[1]}function fa(e){return e==="x"?"y":"x"}function pa(e){return e==="y"?"height":"width"}function Ye(e){return["top","bottom"].includes(ze(e))?"y":"x"}function xa(e){return fa(Ye(e))}function Bd(e,t,r){r===void 0&&(r=!1);const n=Tt(e),a=xa(e),i=pa(a);let l=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Pr(l)),[l,Pr(l)]}function Fd(e){const t=Pr(e);return[On(e),t,On(t)]}function On(e){return e.replace(/start|end/g,t=>zd[t])}function Wd(e,t,r){const n=["left","right"],a=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?t?a:n:t?n:a;case"left":case"right":return t?i:l;default:return[]}}function Gd(e,t,r,n){const a=Tt(e);let i=Wd(ze(e),r==="start",n);return a&&(i=i.map(l=>l+"-"+a),t&&(i=i.concat(i.map(On)))),i}function Pr(e){return e.replace(/left|right|bottom|top/g,t=>Od[t])}function Ud(e){return{top:0,right:0,bottom:0,left:0,...e}}function Bl(e){return typeof e!="number"?Ud(e):{top:e,right:e,bottom:e,left:e}}function Lr(e){const{x:t,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:t,right:t+n,bottom:r+a,x:t,y:r}}function pi(e,t,r){let{reference:n,floating:a}=e;const i=Ye(t),l=xa(t),o=pa(l),s=ze(t),c=i==="y",m=n.x+n.width/2-a.width/2,d=n.y+n.height/2-a.height/2,g=n[o]/2-a[o]/2;let f;switch(s){case"top":f={x:m,y:n.y-a.height};break;case"bottom":f={x:m,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-a.width,y:d};break;default:f={x:n.x,y:n.y}}switch(Tt(t)){case"start":f[l]-=g*(r&&c?-1:1);break;case"end":f[l]+=g*(r&&c?-1:1);break}return f}const Xd=async(e,t,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:i=[],platform:l}=r,o=i.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(t));let c=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:m,y:d}=pi(c,n,s),g=n,f={},x=0;for(let p=0;p<o.length;p++){const{name:h,fn:y}=o[p],{x:b,y:$,data:k,reset:w}=await y({x:m,y:d,initialPlacement:n,placement:g,strategy:a,middlewareData:f,rects:c,platform:l,elements:{reference:e,floating:t}});m=b??m,d=$??d,f={...f,[h]:{...f[h],...k}},w&&x<=50&&(x++,typeof w=="object"&&(w.placement&&(g=w.placement),w.rects&&(c=w.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:a}):w.rects),{x:m,y:d}=pi(c,g,s)),p=-1)}return{x:m,y:d,placement:g,strategy:a,middlewareData:f}};async function Gt(e,t){var r;t===void 0&&(t={});const{x:n,y:a,platform:i,rects:l,elements:o,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=Oe(t,e),x=Bl(f),h=o[g?d==="floating"?"reference":"floating":d],y=Lr(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(h)))==null||r?h:h.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:m,strategy:s})),b=d==="floating"?{x:n,y:a,width:l.floating.width,height:l.floating.height}:l.reference,$=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),k=await(i.isElement==null?void 0:i.isElement($))?await(i.getScale==null?void 0:i.getScale($))||{x:1,y:1}:{x:1,y:1},w=Lr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:b,offsetParent:$,strategy:s}):b);return{top:(y.top-w.top+x.top)/k.y,bottom:(w.bottom-y.bottom+x.bottom)/k.y,left:(y.left-w.left+x.left)/k.x,right:(w.right-y.right+x.right)/k.x}}const Yd=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:a,rects:i,platform:l,elements:o,middlewareData:s}=t,{element:c,padding:m=0}=Oe(e,t)||{};if(c==null)return{};const d=Bl(m),g={x:r,y:n},f=xa(a),x=pa(f),p=await l.getDimensions(c),h=f==="y",y=h?"top":"left",b=h?"bottom":"right",$=h?"clientHeight":"clientWidth",k=i.reference[x]+i.reference[f]-g[f]-i.floating[x],w=g[f]-i.reference[f],H=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c));let S=H?H[$]:0;(!S||!await(l.isElement==null?void 0:l.isElement(H)))&&(S=o.floating[$]||i.floating[x]);const q=k/2-w/2,E=S/2-p[x]/2-1,A=Pe(d[y],E),j=Pe(d[b],E),N=A,Y=S-p[x]-j,X=S/2-p[x]/2+q,D=Dn(N,X,Y),O=!s.arrow&&Tt(a)!=null&&X!==D&&i.reference[x]/2-(X<N?A:j)-p[x]/2<0,L=O?X<N?X-N:X-Y:0;return{[f]:g[f]+L,data:{[f]:D,centerOffset:X-D-L,...O&&{alignmentOffset:L}},reset:O}}}),Kd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:a,middlewareData:i,rects:l,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:p=!0,...h}=Oe(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const y=ze(a),b=Ye(o),$=ze(o)===o,k=await(s.isRTL==null?void 0:s.isRTL(c.floating)),w=g||($||!p?[Pr(o)]:Fd(o)),H=x!=="none";!g&&H&&w.push(...Gd(o,p,x,k));const S=[o,...w],q=await Gt(t,h),E=[];let A=((n=i.flip)==null?void 0:n.overflows)||[];if(m&&E.push(q[y]),d){const X=Bd(a,l,k);E.push(q[X[0]],q[X[1]])}if(A=[...A,{placement:a,overflows:E}],!E.every(X=>X<=0)){var j,N;const X=(((j=i.flip)==null?void 0:j.index)||0)+1,D=S[X];if(D)return{data:{index:X,overflows:A},reset:{placement:D}};let O=(N=A.filter(L=>L.overflows[0]<=0).sort((L,K)=>L.overflows[1]-K.overflows[1])[0])==null?void 0:N.placement;if(!O)switch(f){case"bestFit":{var Y;const L=(Y=A.filter(K=>{if(H){const G=Ye(K.placement);return G===b||G==="y"}return!0}).map(K=>[K.placement,K.overflows.filter(G=>G>0).reduce((G,be)=>G+be,0)]).sort((K,G)=>K[1]-G[1])[0])==null?void 0:Y[0];L&&(O=L);break}case"initialPlacement":O=o;break}if(a!==O)return{reset:{placement:O}}}return{}}}};function xi(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function yi(e){return Dd.some(t=>e[t]>=0)}const Zd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:n="referenceHidden",...a}=Oe(e,t);switch(n){case"referenceHidden":{const i=await Gt(t,{...a,elementContext:"reference"}),l=xi(i,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:yi(l)}}}case"escaped":{const i=await Gt(t,{...a,altBoundary:!0}),l=xi(i,r.floating);return{data:{escapedOffsets:l,escaped:yi(l)}}}default:return{}}}}};async function Qd(e,t){const{placement:r,platform:n,elements:a}=e,i=await(n.isRTL==null?void 0:n.isRTL(a.floating)),l=ze(r),o=Tt(r),s=Ye(r)==="y",c=["left","top"].includes(l)?-1:1,m=i&&s?-1:1,d=Oe(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof x=="number"&&(f=o==="end"?x*-1:x),s?{x:f*m,y:g*c}:{x:g*c,y:f*m}}const Jd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:a,y:i,placement:l,middlewareData:o}=t,s=await Qd(t,e);return l===((r=o.offset)==null?void 0:r.placement)&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:a+s.x,y:i+s.y,data:{...s,placement:l}}}}},ev=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:a}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:o={fn:h=>{let{x:y,y:b}=h;return{x:y,y:b}}},...s}=Oe(e,t),c={x:r,y:n},m=await Gt(t,s),d=Ye(ze(a)),g=fa(d);let f=c[g],x=c[d];if(i){const h=g==="y"?"top":"left",y=g==="y"?"bottom":"right",b=f+m[h],$=f-m[y];f=Dn(b,f,$)}if(l){const h=d==="y"?"top":"left",y=d==="y"?"bottom":"right",b=x+m[h],$=x-m[y];x=Dn(b,x,$)}const p=o.fn({...t,[g]:f,[d]:x});return{...p,data:{x:p.x-r,y:p.y-n}}}}},tv=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:r,y:n,placement:a,rects:i,middlewareData:l}=t,{offset:o=0,mainAxis:s=!0,crossAxis:c=!0}=Oe(e,t),m={x:r,y:n},d=Ye(a),g=fa(d);let f=m[g],x=m[d];const p=Oe(o,t),h=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(s){const $=g==="y"?"height":"width",k=i.reference[g]-i.floating[$]+h.mainAxis,w=i.reference[g]+i.reference[$]-h.mainAxis;f<k?f=k:f>w&&(f=w)}if(c){var y,b;const $=g==="y"?"width":"height",k=["top","left"].includes(ze(a)),w=i.reference[d]-i.floating[$]+(k&&((y=l.offset)==null?void 0:y[d])||0)+(k?0:h.crossAxis),H=i.reference[d]+i.reference[$]+(k?0:((b=l.offset)==null?void 0:b[d])||0)-(k?h.crossAxis:0);x<w?x=w:x>H&&(x=H)}return{[g]:f,[d]:x}}}},rv=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:a,elements:i}=t,{apply:l=()=>{},...o}=Oe(e,t),s=await Gt(t,o),c=ze(r),m=Tt(r),d=Ye(r)==="y",{width:g,height:f}=n.floating;let x,p;c==="top"||c==="bottom"?(x=c,p=m===(await(a.isRTL==null?void 0:a.isRTL(i.floating))?"start":"end")?"left":"right"):(p=c,x=m==="end"?"top":"bottom");const h=f-s.top-s.bottom,y=g-s.left-s.right,b=Pe(f-s[x],h),$=Pe(g-s[p],y),k=!t.middlewareData.shift;let w=b,H=$;if(d?H=m||k?Pe($,y):y:w=m||k?Pe(b,h):h,k&&!m){const q=ye(s.left,0),E=ye(s.right,0),A=ye(s.top,0),j=ye(s.bottom,0);d?H=g-2*(q!==0||E!==0?q+E:ye(s.left,s.right)):w=f-2*(A!==0||j!==0?A+j:ye(s.top,s.bottom))}await l({...t,availableWidth:H,availableHeight:w});const S=await a.getDimensions(i.floating);return g!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}};function At(e){return Fl(e)?(e.nodeName||"").toLowerCase():"#document"}function he(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Be(e){var t;return(t=(Fl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fl(e){return e instanceof Node||e instanceof he(e).Node}function He(e){return e instanceof Element||e instanceof he(e).Element}function Me(e){return e instanceof HTMLElement||e instanceof he(e).HTMLElement}function hi(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof he(e).ShadowRoot}function rr(e){const{overflow:t,overflowX:r,overflowY:n,display:a}=Ce(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(a)}function nv(e){return["table","td","th"].includes(At(e))}function Kr(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ya(e){const t=ha(),r=He(e)?Ce(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function av(e){let t=Ke(e);for(;Me(t)&&!_t(t);){if(ya(t))return t;if(Kr(t))return null;t=Ke(t)}return null}function ha(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _t(e){return["html","body","#document"].includes(At(e))}function Ce(e){return he(e).getComputedStyle(e)}function Zr(e){return He(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ke(e){if(At(e)==="html")return e;const t=e.assignedSlot||e.parentNode||hi(e)&&e.host||Be(e);return hi(t)?t.host:t}function Wl(e){const t=Ke(e);return _t(t)?e.ownerDocument?e.ownerDocument.body:e.body:Me(t)&&rr(t)?t:Wl(t)}function Ut(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const a=Wl(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),l=he(a);if(i){const o=zn(l);return t.concat(l,l.visualViewport||[],rr(a)?a:[],o&&r?Ut(o):[])}return t.concat(a,Ut(a,[],r))}function zn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Gl(e){const t=Ce(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const a=Me(e),i=a?e.offsetWidth:r,l=a?e.offsetHeight:n,o=Rr(r)!==i||Rr(n)!==l;return o&&(r=i,n=l),{width:r,height:n,$:o}}function ba(e){return He(e)?e:e.contextElement}function pt(e){const t=ba(e);if(!Me(t))return Xe(1);const r=t.getBoundingClientRect(),{width:n,height:a,$:i}=Gl(t);let l=(i?Rr(r.width):r.width)/n,o=(i?Rr(r.height):r.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!o||!Number.isFinite(o))&&(o=1),{x:l,y:o}}const iv=Xe(0);function Ul(e){const t=he(e);return!ha()||!t.visualViewport?iv:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lv(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==he(e)?!1:t}function lt(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),i=ba(e);let l=Xe(1);t&&(n?He(n)&&(l=pt(n)):l=pt(e));const o=lv(i,r,n)?Ul(i):Xe(0);let s=(a.left+o.x)/l.x,c=(a.top+o.y)/l.y,m=a.width/l.x,d=a.height/l.y;if(i){const g=he(i),f=n&&He(n)?he(n):n;let x=g,p=zn(x);for(;p&&n&&f!==x;){const h=pt(p),y=p.getBoundingClientRect(),b=Ce(p),$=y.left+(p.clientLeft+parseFloat(b.paddingLeft))*h.x,k=y.top+(p.clientTop+parseFloat(b.paddingTop))*h.y;s*=h.x,c*=h.y,m*=h.x,d*=h.y,s+=$,c+=k,x=he(p),p=zn(x)}}return Lr({width:m,height:d,x:s,y:c})}function ov(e){let{elements:t,rect:r,offsetParent:n,strategy:a}=e;const i=a==="fixed",l=Be(n),o=t?Kr(t.floating):!1;if(n===l||o&&i)return r;let s={scrollLeft:0,scrollTop:0},c=Xe(1);const m=Xe(0),d=Me(n);if((d||!d&&!i)&&((At(n)!=="body"||rr(l))&&(s=Zr(n)),Me(n))){const g=lt(n);c=pt(n),m.x=g.x+n.clientLeft,m.y=g.y+n.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-s.scrollLeft*c.x+m.x,y:r.y*c.y-s.scrollTop*c.y+m.y}}function sv(e){return Array.from(e.getClientRects())}function Xl(e){return lt(Be(e)).left+Zr(e).scrollLeft}function uv(e){const t=Be(e),r=Zr(e),n=e.ownerDocument.body,a=ye(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=ye(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-r.scrollLeft+Xl(e);const o=-r.scrollTop;return Ce(n).direction==="rtl"&&(l+=ye(t.clientWidth,n.clientWidth)-a),{width:a,height:i,x:l,y:o}}function cv(e,t){const r=he(e),n=Be(e),a=r.visualViewport;let i=n.clientWidth,l=n.clientHeight,o=0,s=0;if(a){i=a.width,l=a.height;const c=ha();(!c||c&&t==="fixed")&&(o=a.offsetLeft,s=a.offsetTop)}return{width:i,height:l,x:o,y:s}}function mv(e,t){const r=lt(e,!0,t==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,i=Me(e)?pt(e):Xe(1),l=e.clientWidth*i.x,o=e.clientHeight*i.y,s=a*i.x,c=n*i.y;return{width:l,height:o,x:s,y:c}}function bi(e,t,r){let n;if(t==="viewport")n=cv(e,r);else if(t==="document")n=uv(Be(e));else if(He(t))n=mv(t,r);else{const a=Ul(e);n={...t,x:t.x-a.x,y:t.y-a.y}}return Lr(n)}function Yl(e,t){const r=Ke(e);return r===t||!He(r)||_t(r)?!1:Ce(r).position==="fixed"||Yl(r,t)}function dv(e,t){const r=t.get(e);if(r)return r;let n=Ut(e,[],!1).filter(o=>He(o)&&At(o)!=="body"),a=null;const i=Ce(e).position==="fixed";let l=i?Ke(e):e;for(;He(l)&&!_t(l);){const o=Ce(l),s=ya(l);!s&&o.position==="fixed"&&(a=null),(i?!s&&!a:!s&&o.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||rr(l)&&!s&&Yl(e,l))?n=n.filter(m=>m!==l):a=o,l=Ke(l)}return t.set(e,n),n}function vv(e){let{element:t,boundary:r,rootBoundary:n,strategy:a}=e;const l=[...r==="clippingAncestors"?Kr(t)?[]:dv(t,this._c):[].concat(r),n],o=l[0],s=l.reduce((c,m)=>{const d=bi(t,m,a);return c.top=ye(d.top,c.top),c.right=Pe(d.right,c.right),c.bottom=Pe(d.bottom,c.bottom),c.left=ye(d.left,c.left),c},bi(t,o,a));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function gv(e){const{width:t,height:r}=Gl(e);return{width:t,height:r}}function fv(e,t,r){const n=Me(t),a=Be(t),i=r==="fixed",l=lt(e,!0,i,t);let o={scrollLeft:0,scrollTop:0};const s=Xe(0);if(n||!n&&!i)if((At(t)!=="body"||rr(a))&&(o=Zr(t)),n){const d=lt(t,!0,i,t);s.x=d.x+t.clientLeft,s.y=d.y+t.clientTop}else a&&(s.x=Xl(a));const c=l.left+o.scrollLeft-s.x,m=l.top+o.scrollTop-s.y;return{x:c,y:m,width:l.width,height:l.height}}function hn(e){return Ce(e).position==="static"}function $i(e,t){return!Me(e)||Ce(e).position==="fixed"?null:t?t(e):e.offsetParent}function Kl(e,t){const r=he(e);if(Kr(e))return r;if(!Me(e)){let a=Ke(e);for(;a&&!_t(a);){if(He(a)&&!hn(a))return a;a=Ke(a)}return r}let n=$i(e,t);for(;n&&nv(n)&&hn(n);)n=$i(n,t);return n&&_t(n)&&hn(n)&&!ya(n)?r:n||av(e)||r}const pv=async function(e){const t=this.getOffsetParent||Kl,r=this.getDimensions,n=await r(e.floating);return{reference:fv(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xv(e){return Ce(e).direction==="rtl"}const yv={convertOffsetParentRelativeRectToViewportRelativeRect:ov,getDocumentElement:Be,getClippingRect:vv,getOffsetParent:Kl,getElementRects:pv,getClientRects:sv,getDimensions:gv,getScale:pt,isElement:He,isRTL:xv};function hv(e,t){let r=null,n;const a=Be(e);function i(){var o;clearTimeout(n),(o=r)==null||o.disconnect(),r=null}function l(o,s){o===void 0&&(o=!1),s===void 0&&(s=1),i();const{left:c,top:m,width:d,height:g}=e.getBoundingClientRect();if(o||t(),!d||!g)return;const f=mr(m),x=mr(a.clientWidth-(c+d)),p=mr(a.clientHeight-(m+g)),h=mr(c),b={rootMargin:-f+"px "+-x+"px "+-p+"px "+-h+"px",threshold:ye(0,Pe(1,s))||1};let $=!0;function k(w){const H=w[0].intersectionRatio;if(H!==s){if(!$)return l();H?l(!1,H):n=setTimeout(()=>{l(!1,1e-7)},1e3)}$=!1}try{r=new IntersectionObserver(k,{...b,root:a.ownerDocument})}catch{r=new IntersectionObserver(k,b)}r.observe(e)}return l(!0),i}function bv(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,c=ba(e),m=a||i?[...c?Ut(c):[],...Ut(t)]:[];m.forEach(y=>{a&&y.addEventListener("scroll",r,{passive:!0}),i&&y.addEventListener("resize",r)});const d=c&&o?hv(c,r):null;let g=-1,f=null;l&&(f=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var $;($=f)==null||$.observe(t)})),r()}),c&&!s&&f.observe(c),f.observe(t));let x,p=s?lt(e):null;s&&h();function h(){const y=lt(e);p&&(y.x!==p.x||y.y!==p.y||y.width!==p.width||y.height!==p.height)&&r(),p=y,x=requestAnimationFrame(h)}return r(),()=>{var y;m.forEach(b=>{a&&b.removeEventListener("scroll",r),i&&b.removeEventListener("resize",r)}),d==null||d(),(y=f)==null||y.disconnect(),f=null,s&&cancelAnimationFrame(x)}}const $v=Jd,kv=ev,wv=Kd,_v=rv,Sv=Zd,ki=Yd,Iv=tv,Hv=(e,t,r)=>{const n=new Map,a={platform:yv,...r},i={...a.platform,_c:n};return Xd(e,t,{...a,platform:i})};var wr=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Mr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!Mr(e[n],t[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,a[n]))return!1;for(n=r;n--!==0;){const i=a[n];if(!(i==="_owner"&&e.$$typeof)&&!Mr(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Zl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function wi(e,t){const r=Zl(e);return Math.round(t*r)/r}function _i(e){const t=u.useRef(e);return wr(()=>{t.current=e}),t}function Cv(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:i,floating:l}={},transform:o=!0,whileElementsMounted:s,open:c}=e,[m,d]=u.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[g,f]=u.useState(n);Mr(g,n)||f(n);const[x,p]=u.useState(null),[h,y]=u.useState(null),b=u.useCallback(L=>{L!==H.current&&(H.current=L,p(L))},[]),$=u.useCallback(L=>{L!==S.current&&(S.current=L,y(L))},[]),k=i||x,w=l||h,H=u.useRef(null),S=u.useRef(null),q=u.useRef(m),E=s!=null,A=_i(s),j=_i(a),N=u.useCallback(()=>{if(!H.current||!S.current)return;const L={placement:t,strategy:r,middleware:g};j.current&&(L.platform=j.current),Hv(H.current,S.current,L).then(K=>{const G={...K,isPositioned:!0};Y.current&&!Mr(q.current,G)&&(q.current=G,Yt.flushSync(()=>{d(G)}))})},[g,t,r,j]);wr(()=>{c===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,d(L=>({...L,isPositioned:!1})))},[c]);const Y=u.useRef(!1);wr(()=>(Y.current=!0,()=>{Y.current=!1}),[]),wr(()=>{if(k&&(H.current=k),w&&(S.current=w),k&&w){if(A.current)return A.current(k,w,N);N()}},[k,w,N,A,E]);const X=u.useMemo(()=>({reference:H,floating:S,setReference:b,setFloating:$}),[b,$]),D=u.useMemo(()=>({reference:k,floating:w}),[k,w]),O=u.useMemo(()=>{const L={position:r,left:0,top:0};if(!D.floating)return L;const K=wi(D.floating,m.x),G=wi(D.floating,m.y);return o?{...L,transform:"translate("+K+"px, "+G+"px)",...Zl(D.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:K,top:G}},[r,o,D.floating,m.x,m.y]);return u.useMemo(()=>({...m,update:N,refs:X,elements:D,floatingStyles:O}),[m,N,X,D,O])}const qv=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?ki({element:n.current,padding:a}).fn(r):{}:n?ki({element:n,padding:a}).fn(r):{}}}},Tv=(e,t)=>({...$v(e),options:[e,t]}),Av=(e,t)=>({...kv(e),options:[e,t]}),Ev=(e,t)=>({...Iv(e),options:[e,t]}),Rv=(e,t)=>({...wv(e),options:[e,t]}),Pv=(e,t)=>({..._v(e),options:[e,t]}),Lv=(e,t)=>({...Sv(e),options:[e,t]}),Mv=(e,t)=>({...qv(e),options:[e,t]});var Vv="Arrow",Ql=u.forwardRef((e,t)=>{const{children:r,width:n=10,height:a=5,...i}=e;return v.jsx(M.svg,{...i,ref:t,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:v.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ql.displayName=Vv;var Nv=Ql,$a="Popper",[Jl,Et]=me($a),[jv,eo]=Jl($a),to=e=>{const{__scopePopper:t,children:r}=e,[n,a]=u.useState(null);return v.jsx(jv,{scope:t,anchor:n,onAnchorChange:a,children:r})};to.displayName=$a;var ro="PopperAnchor",no=u.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:n,...a}=e,i=eo(ro,r),l=u.useRef(null),o=z(t,l);return u.useEffect(()=>{i.onAnchorChange((n==null?void 0:n.current)||l.current)}),n?null:v.jsx(M.div,{...a,ref:o})});no.displayName=ro;var ka="PopperContent",[Dv,Ov]=Jl(ka),ao=u.forwardRef((e,t)=>{var V,Q,re,J,Z,U;const{__scopePopper:r,side:n="bottom",sideOffset:a=0,align:i="center",alignOffset:l=0,arrowPadding:o=0,avoidCollisions:s=!0,collisionBoundary:c=[],collisionPadding:m=0,sticky:d="partial",hideWhenDetached:g=!1,updatePositionStrategy:f="optimized",onPlaced:x,...p}=e,h=eo(ka,r),[y,b]=u.useState(null),$=z(t,pe=>b(pe)),[k,w]=u.useState(null),H=er(k),S=(H==null?void 0:H.width)??0,q=(H==null?void 0:H.height)??0,E=n+(i!=="center"?"-"+i:""),A=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},j=Array.isArray(c)?c:[c],N=j.length>0,Y={padding:A,boundary:j.filter(Bv),altBoundary:N},{refs:X,floatingStyles:D,placement:O,isPositioned:L,middlewareData:K}=Cv({strategy:"fixed",placement:E,whileElementsMounted:(...pe)=>bv(...pe,{animationFrame:f==="always"}),elements:{reference:h.anchor},middleware:[Tv({mainAxis:a+q,alignmentAxis:l}),s&&Av({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?Ev():void 0,...Y}),s&&Rv({...Y}),Pv({...Y,apply:({elements:pe,rects:Ae,availableWidth:Mt,availableHeight:Vt})=>{const{width:Nt,height:Wu}=Ae.reference,or=pe.floating.style;or.setProperty("--radix-popper-available-width",`${Mt}px`),or.setProperty("--radix-popper-available-height",`${Vt}px`),or.setProperty("--radix-popper-anchor-width",`${Nt}px`),or.setProperty("--radix-popper-anchor-height",`${Wu}px`)}}),k&&Mv({element:k,padding:o}),Fv({arrowWidth:S,arrowHeight:q}),g&&Lv({strategy:"referenceHidden",...Y})]}),[G,be]=oo(O),ce=se(x);ue(()=>{L&&(ce==null||ce())},[L,ce]);const ve=(V=K.arrow)==null?void 0:V.x,Fe=(Q=K.arrow)==null?void 0:Q.y,$e=((re=K.arrow)==null?void 0:re.centerOffset)!==0,[_e,fe]=u.useState();return ue(()=>{y&&fe(window.getComputedStyle(y).zIndex)},[y]),v.jsx("div",{ref:X.setFloating,"data-radix-popper-content-wrapper":"",style:{...D,transform:L?D.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:_e,"--radix-popper-transform-origin":[(J=K.transformOrigin)==null?void 0:J.x,(Z=K.transformOrigin)==null?void 0:Z.y].join(" "),...((U=K.hide)==null?void 0:U.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:v.jsx(Dv,{scope:r,placedSide:G,onArrowChange:w,arrowX:ve,arrowY:Fe,shouldHideArrow:$e,children:v.jsx(M.div,{"data-side":G,"data-align":be,...p,ref:$,style:{...p.style,animation:L?void 0:"none"}})})})});ao.displayName=ka;var io="PopperArrow",zv={top:"bottom",right:"left",bottom:"top",left:"right"},lo=u.forwardRef(function(t,r){const{__scopePopper:n,...a}=t,i=Ov(io,n),l=zv[i.placedSide];return v.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:v.jsx(Nv,{...a,ref:r,style:{...a.style,display:"block"}})})});lo.displayName=io;function Bv(e){return e!==null}var Fv=e=>({name:"transformOrigin",options:e,fn(t){var h,y,b;const{placement:r,rects:n,middlewareData:a}=t,l=((h=a.arrow)==null?void 0:h.centerOffset)!==0,o=l?0:e.arrowWidth,s=l?0:e.arrowHeight,[c,m]=oo(r),d={start:"0%",center:"50%",end:"100%"}[m],g=(((y=a.arrow)==null?void 0:y.x)??0)+o/2,f=(((b=a.arrow)==null?void 0:b.y)??0)+s/2;let x="",p="";return c==="bottom"?(x=l?d:`${g}px`,p=`${-s}px`):c==="top"?(x=l?d:`${g}px`,p=`${n.floating.height+s}px`):c==="right"?(x=`${-s}px`,p=l?d:`${f}px`):c==="left"&&(x=`${n.floating.width+s}px`,p=l?d:`${f}px`),{data:{x,y:p}}}});function oo(e){const[t,r="center"]=e.split("-");return[t,r]}var wa=to,Qr=no,_a=ao,Sa=lo,Wv="Portal",nr=u.forwardRef((e,t)=>{var o;const{container:r,...n}=e,[a,i]=u.useState(!1);ue(()=>i(!0),[]);const l=r||a&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return l?Uu.createPortal(v.jsx(M.div,{...n,ref:t}),l):null});nr.displayName=Wv;var Gv="VisuallyHidden",Ia=u.forwardRef((e,t)=>v.jsx(M.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Ia.displayName=Gv;var Uv=Ia,[Jr,Qy]=me("Tooltip",[Et]),en=Et(),so="TooltipProvider",Xv=700,Bn="tooltip.open",[Yv,Ha]=Jr(so),uo=e=>{const{__scopeTooltip:t,delayDuration:r=Xv,skipDelayDuration:n=300,disableHoverableContent:a=!1,children:i}=e,[l,o]=u.useState(!0),s=u.useRef(!1),c=u.useRef(0);return u.useEffect(()=>{const m=c.current;return()=>window.clearTimeout(m)},[]),v.jsx(Yv,{scope:t,isOpenDelayed:l,delayDuration:r,onOpen:u.useCallback(()=>{window.clearTimeout(c.current),o(!1)},[]),onClose:u.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>o(!0),n)},[n]),isPointerInTransitRef:s,onPointerInTransitChange:u.useCallback(m=>{s.current=m},[]),disableHoverableContent:a,children:i})};uo.displayName=so;var tn="Tooltip",[Kv,ar]=Jr(tn),co=e=>{const{__scopeTooltip:t,children:r,open:n,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:l,delayDuration:o}=e,s=Ha(tn,e.__scopeTooltip),c=en(t),[m,d]=u.useState(null),g=Le(),f=u.useRef(0),x=l??s.disableHoverableContent,p=o??s.delayDuration,h=u.useRef(!1),[y=!1,b]=Ie({prop:n,defaultProp:a,onChange:S=>{S?(s.onOpen(),document.dispatchEvent(new CustomEvent(Bn))):s.onClose(),i==null||i(S)}}),$=u.useMemo(()=>y?h.current?"delayed-open":"instant-open":"closed",[y]),k=u.useCallback(()=>{window.clearTimeout(f.current),h.current=!1,b(!0)},[b]),w=u.useCallback(()=>{window.clearTimeout(f.current),b(!1)},[b]),H=u.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{h.current=!0,b(!0)},p)},[p,b]);return u.useEffect(()=>()=>window.clearTimeout(f.current),[]),v.jsx(wa,{...c,children:v.jsx(Kv,{scope:t,contentId:g,open:y,stateAttribute:$,trigger:m,onTriggerChange:d,onTriggerEnter:u.useCallback(()=>{s.isOpenDelayed?H():k()},[s.isOpenDelayed,H,k]),onTriggerLeave:u.useCallback(()=>{x?w():window.clearTimeout(f.current)},[w,x]),onOpen:k,onClose:w,disableHoverableContent:x,children:r})})};co.displayName=tn;var Fn="TooltipTrigger",mo=u.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,a=ar(Fn,r),i=Ha(Fn,r),l=en(r),o=u.useRef(null),s=z(t,o,a.onTriggerChange),c=u.useRef(!1),m=u.useRef(!1),d=u.useCallback(()=>c.current=!1,[]);return u.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),v.jsx(Qr,{asChild:!0,...l,children:v.jsx(M.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...n,ref:s,onPointerMove:P(e.onPointerMove,g=>{g.pointerType!=="touch"&&!m.current&&!i.isPointerInTransitRef.current&&(a.onTriggerEnter(),m.current=!0)}),onPointerLeave:P(e.onPointerLeave,()=>{a.onTriggerLeave(),m.current=!1}),onPointerDown:P(e.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:P(e.onFocus,()=>{c.current||a.onOpen()}),onBlur:P(e.onBlur,a.onClose),onClick:P(e.onClick,a.onClose)})})});mo.displayName=Fn;var Ca="TooltipPortal",[Zv,Qv]=Jr(Ca,{forceMount:void 0}),vo=e=>{const{__scopeTooltip:t,forceMount:r,children:n,container:a}=e,i=ar(Ca,t);return v.jsx(Zv,{scope:t,forceMount:r,children:v.jsx(de,{present:r||i.open,children:v.jsx(nr,{asChild:!0,container:a,children:n})})})};vo.displayName=Ca;var St="TooltipContent",go=u.forwardRef((e,t)=>{const r=Qv(St,e.__scopeTooltip),{forceMount:n=r.forceMount,side:a="top",...i}=e,l=ar(St,e.__scopeTooltip);return v.jsx(de,{present:n||l.open,children:l.disableHoverableContent?v.jsx(fo,{side:a,...i,ref:t}):v.jsx(Jv,{side:a,...i,ref:t})})}),Jv=u.forwardRef((e,t)=>{const r=ar(St,e.__scopeTooltip),n=Ha(St,e.__scopeTooltip),a=u.useRef(null),i=z(t,a),[l,o]=u.useState(null),{trigger:s,onClose:c}=r,m=a.current,{onPointerInTransitChange:d}=n,g=u.useCallback(()=>{o(null),d(!1)},[d]),f=u.useCallback((x,p)=>{const h=x.currentTarget,y={x:x.clientX,y:x.clientY},b=ng(y,h.getBoundingClientRect()),$=ag(y,b),k=ig(p.getBoundingClientRect()),w=og([...$,...k]);o(w),d(!0)},[d]);return u.useEffect(()=>()=>g(),[g]),u.useEffect(()=>{if(s&&m){const x=h=>f(h,m),p=h=>f(h,s);return s.addEventListener("pointerleave",x),m.addEventListener("pointerleave",p),()=>{s.removeEventListener("pointerleave",x),m.removeEventListener("pointerleave",p)}}},[s,m,f,g]),u.useEffect(()=>{if(l){const x=p=>{const h=p.target,y={x:p.clientX,y:p.clientY},b=(s==null?void 0:s.contains(h))||(m==null?void 0:m.contains(h)),$=!lg(y,l);b?g():$&&(g(),c())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[s,m,l,c,g]),v.jsx(fo,{...e,ref:i})}),[eg,tg]=Jr(tn,{isInside:!1}),fo=u.forwardRef((e,t)=>{const{__scopeTooltip:r,children:n,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:l,...o}=e,s=ar(St,r),c=en(r),{onClose:m}=s;return u.useEffect(()=>(document.addEventListener(Bn,m),()=>document.removeEventListener(Bn,m)),[m]),u.useEffect(()=>{if(s.trigger){const d=g=>{const f=g.target;f!=null&&f.contains(s.trigger)&&m()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[s.trigger,m]),v.jsx(tr,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:d=>d.preventDefault(),onDismiss:m,children:v.jsxs(_a,{"data-state":s.stateAttribute,...c,...o,ref:t,style:{...o.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[v.jsx(Hl,{children:n}),v.jsx(eg,{scope:r,isInside:!0,children:v.jsx(Uv,{id:s.contentId,role:"tooltip",children:a||n})})]})})});go.displayName=St;var po="TooltipArrow",rg=u.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,a=en(r);return tg(po,r).isInside?null:v.jsx(Sa,{...a,...n,ref:t})});rg.displayName=po;function ng(e,t){const r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),a=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(r,n,a,i)){case i:return"left";case a:return"right";case r:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function ag(e,t,r=5){const n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return n}function ig(e){const{top:t,right:r,bottom:n,left:a}=e;return[{x:a,y:t},{x:r,y:t},{x:r,y:n},{x:a,y:n}]}function lg(e,t){const{x:r,y:n}=e;let a=!1;for(let i=0,l=t.length-1;i<t.length;l=i++){const o=t[i].x,s=t[i].y,c=t[l].x,m=t[l].y;s>n!=m>n&&r<(c-o)*(n-s)/(m-s)+o&&(a=!a)}return a}function og(e){const t=e.slice();return t.sort((r,n)=>r.x<n.x?-1:r.x>n.x?1:r.y<n.y?-1:r.y>n.y?1:0),sg(t)}function sg(e){if(e.length<=1)return e.slice();const t=[];for(let n=0;n<e.length;n++){const a=e[n];for(;t.length>=2;){const i=t[t.length-1],l=t[t.length-2];if((i.x-l.x)*(a.y-l.y)>=(i.y-l.y)*(a.x-l.x))t.pop();else break}t.push(a)}t.pop();const r=[];for(let n=e.length-1;n>=0;n--){const a=e[n];for(;r.length>=2;){const i=r[r.length-1],l=r[r.length-2];if((i.x-l.x)*(a.y-l.y)>=(i.y-l.y)*(a.x-l.x))r.pop();else break}r.push(a)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var xo=uo,yo=co,ug=mo,ho=vo,cg=go;const mg=C(cg)`
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-state='delayed-open'][data-side='top'] {
        animation-name: slideDownAndFade;
    }
    &[data-state='delayed-open'][data-side='right'] {
        animation-name: slideLeftAndFade;
    }
    &[data-state='delayed-open'][data-side='bottom'] {
        animation-name: slideUpAndFade;
    }
    &[data-state='delayed-open'][data-side='left'] {
        animation-name: slideRightAndFade;
    }

    @keyframes slideUpAndFade {
        from {
            opacity: 0;
            transform: translateY(2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRightAndFade {
        from {
            opacity: 0;
            transform: translateX(-2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDownAndFade {
        from {
            opacity: 0;
            transform: translateY(-2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideLeftAndFade {
        from {
            opacity: 0;
            transform: translateX(2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`,bo={Content:mg},$o=C(ug)`
    all: unset;
    display: inline-block;
`,ko=C(bo.Content)`
    background-color: ${e=>e.$colors.backgroundTooltip};
    color: ${e=>e.$colors.textItem};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    border-radius: ${e=>e.$styles.box.boxBorderRadius_1};
    padding: ${e=>e.$styles.box.boxPadding_1};
    box-shadow: ${e=>`${e.$styles.box.boxShadow_1} ${e.$colors.shadowColor}`};
`,dg=I.memo(I.forwardRef(({tooltip:e,providerProps:t,rootProps:r,triggerProps:n,portalProps:a,$colors:i,$styles:l,...o},s)=>{const c=W(i),m=F(["box"],l);return v.jsx(xo,{...t,children:v.jsxs(yo,{...r,children:[v.jsx($o,{ref:s,...n,children:o.children}),v.jsx(ho,{...a,children:v.jsx(ko,{$colors:c,$styles:m,side:"bottom",...o,children:e})})]})})})),dr={Provider:xo,Root:yo,Portal:ho,Content:ko,Trigger:$o};dg.__docgenInfo={description:"",methods:[],displayName:"BaseTooltip"};const vg=C(bo.Content)`
    ${e=>Ve({$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box})};
    ${e=>Zt({$colors:e.$colors,$boxBorderColor:e.$boxBorderColor,$boxShadowColor:e.$boxShadowColor,$boxShadowVariant:e.$boxShadowVariant,$boxRadiusVariant:e.$boxRadiusVariant,$styles:e.$styles.box})};
    background-color: ${e=>e.$bg??e.$colors.backgroundTooltip};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    color: ${e=>e.$colors.textItem};
`,gg=I.memo(I.forwardRef(({bg:e,tooltip:t,boxPaddingVariant:r="p-1",boxGapVariant:n,boxBorderColor:a,boxShadowColor:i,boxShadowVariant:l="shd-1",boxRadiusVariant:o="br-1",$colors:s,$styles:c,providerProps:m,rootProps:d,triggerProps:g,portalProps:f,...x},p)=>{const h=W(s),y=F(["box"],c);return v.jsx(dr.Provider,{...m,children:v.jsxs(dr.Root,{...d,children:[v.jsx(dr.Trigger,{ref:p,...g,children:x.children}),v.jsx(dr.Portal,{...f,children:v.jsx(vg,{$bg:e,$colors:h,$styles:y,$boxPaddingVariant:r,$boxGapVariant:n,$boxBorderColor:a,$boxShadowColor:i,$boxShadowVariant:l,$boxRadiusVariant:o,side:"bottom",...x,children:t})})]})})}));gg.__docgenInfo={description:"",methods:[],displayName:"SimpleTooltip",props:{boxPaddingVariant:{defaultValue:{value:"'p-1'",computed:!1},required:!1},boxShadowVariant:{defaultValue:{value:"'shd-1'",computed:!1},required:!1},boxRadiusVariant:{defaultValue:{value:"'br-1'",computed:!1},required:!1}}};function Xt(e,[t,r]){return Math.min(r,Math.max(t,e))}function qa(e){const t=e+"CollectionProvider",[r,n]=me(t),[a,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),l=f=>{const{scope:x,children:p}=f,h=I.useRef(null),y=I.useRef(new Map).current;return v.jsx(a,{scope:x,itemMap:y,collectionRef:h,children:p})};l.displayName=t;const o=e+"CollectionSlot",s=I.forwardRef((f,x)=>{const{scope:p,children:h}=f,y=i(o,p),b=z(x,y.collectionRef);return v.jsx(it,{ref:b,children:h})});s.displayName=o;const c=e+"CollectionItemSlot",m="data-radix-collection-item",d=I.forwardRef((f,x)=>{const{scope:p,children:h,...y}=f,b=I.useRef(null),$=z(x,b),k=i(c,p);return I.useEffect(()=>(k.itemMap.set(b,{ref:b,...y}),()=>void k.itemMap.delete(b))),v.jsx(it,{[m]:"",ref:$,children:h})});d.displayName=c;function g(f){const x=i(e+"CollectionConsumer",f);return I.useCallback(()=>{const h=x.collectionRef.current;if(!h)return[];const y=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(x.itemMap.values()).sort((k,w)=>y.indexOf(k.ref.current)-y.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:l,Slot:s,ItemSlot:d},g,n]}var fg=u.createContext(void 0);function Rt(e){const t=u.useContext(fg);return e||t||"ltr"}var bn=0;function Ta(){u.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Si()),document.body.insertAdjacentElement("beforeend",e[1]??Si()),bn++,()=>{bn===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),bn--}},[])}function Si(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var $n="focusScope.autoFocusOnMount",kn="focusScope.autoFocusOnUnmount",Ii={bubbles:!1,cancelable:!0},pg="FocusScope",rn=u.forwardRef((e,t)=>{const{loop:r=!1,trapped:n=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...l}=e,[o,s]=u.useState(null),c=se(a),m=se(i),d=u.useRef(null),g=z(t,p=>s(p)),f=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(n){let p=function($){if(f.paused||!o)return;const k=$.target;o.contains(k)?d.current=k:Ge(d.current,{select:!0})},h=function($){if(f.paused||!o)return;const k=$.relatedTarget;k!==null&&(o.contains(k)||Ge(d.current,{select:!0}))},y=function($){if(document.activeElement===document.body)for(const w of $)w.removedNodes.length>0&&Ge(o)};document.addEventListener("focusin",p),document.addEventListener("focusout",h);const b=new MutationObserver(y);return o&&b.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",h),b.disconnect()}}},[n,o,f.paused]),u.useEffect(()=>{if(o){Ci.add(f);const p=document.activeElement;if(!o.contains(p)){const y=new CustomEvent($n,Ii);o.addEventListener($n,c),o.dispatchEvent(y),y.defaultPrevented||(xg(kg(wo(o)),{select:!0}),document.activeElement===p&&Ge(o))}return()=>{o.removeEventListener($n,c),setTimeout(()=>{const y=new CustomEvent(kn,Ii);o.addEventListener(kn,m),o.dispatchEvent(y),y.defaultPrevented||Ge(p??document.body,{select:!0}),o.removeEventListener(kn,m),Ci.remove(f)},0)}}},[o,c,m,f]);const x=u.useCallback(p=>{if(!r&&!n||f.paused)return;const h=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,y=document.activeElement;if(h&&y){const b=p.currentTarget,[$,k]=yg(b);$&&k?!p.shiftKey&&y===k?(p.preventDefault(),r&&Ge($,{select:!0})):p.shiftKey&&y===$&&(p.preventDefault(),r&&Ge(k,{select:!0})):y===b&&p.preventDefault()}},[r,n,f.paused]);return v.jsx(M.div,{tabIndex:-1,...l,ref:g,onKeyDown:x})});rn.displayName=pg;function xg(e,{select:t=!1}={}){const r=document.activeElement;for(const n of e)if(Ge(n,{select:t}),document.activeElement!==r)return}function yg(e){const t=wo(e),r=Hi(t,e),n=Hi(t.reverse(),e);return[r,n]}function wo(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function Hi(e,t){for(const r of e)if(!hg(r,{upTo:t}))return r}function hg(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function bg(e){return e instanceof HTMLInputElement&&"select"in e}function Ge(e,{select:t=!1}={}){if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&bg(e)&&t&&e.select()}}var Ci=$g();function $g(){let e=[];return{add(t){const r=e[0];t!==r&&(r==null||r.pause()),e=qi(e,t),e.unshift(t)},remove(t){var r;e=qi(e,t),(r=e[0])==null||r.resume()}}}function qi(e,t){const r=[...e],n=r.indexOf(t);return n!==-1&&r.splice(n,1),r}function kg(e){return e.filter(t=>t.tagName!=="A")}var wg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},mt=new WeakMap,vr=new WeakMap,gr={},wn=0,_o=function(e){return e&&(e.host||_o(e.parentNode))},_g=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=_o(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Sg=function(e,t,r,n){var a=_g(t,Array.isArray(e)?e:[e]);gr[r]||(gr[r]=new WeakMap);var i=gr[r],l=[],o=new Set,s=new Set(a),c=function(d){!d||o.has(d)||(o.add(d),c(d.parentNode))};a.forEach(c);var m=function(d){!d||s.has(d)||Array.prototype.forEach.call(d.children,function(g){if(o.has(g))m(g);else try{var f=g.getAttribute(n),x=f!==null&&f!=="false",p=(mt.get(g)||0)+1,h=(i.get(g)||0)+1;mt.set(g,p),i.set(g,h),l.push(g),p===1&&x&&vr.set(g,!0),h===1&&g.setAttribute(r,"true"),x||g.setAttribute(n,"true")}catch(y){console.error("aria-hidden: cannot operate on ",g,y)}})};return m(t),o.clear(),wn++,function(){l.forEach(function(d){var g=mt.get(d)-1,f=i.get(d)-1;mt.set(d,g),i.set(d,f),g||(vr.has(d)||d.removeAttribute(n),vr.delete(d)),f||d.removeAttribute(r)}),wn--,wn||(mt=new WeakMap,mt=new WeakMap,vr=new WeakMap,gr={})}},Aa=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=wg(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Sg(n,a,r,"aria-hidden")):function(){return null}},Re=function(){return Re=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Re.apply(this,arguments)};function So(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function Ig(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var _r="right-scroll-bar-position",Sr="width-before-scroll-bar",Hg="with-scroll-bars-hidden",Cg="--removed-body-scroll-bar-size";function _n(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function qg(e,t){var r=u.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}var Tg=typeof window<"u"?u.useLayoutEffect:u.useEffect,Ti=new WeakMap;function Ag(e,t){var r=qg(null,function(n){return e.forEach(function(a){return _n(a,n)})});return Tg(function(){var n=Ti.get(r);if(n){var a=new Set(n),i=new Set(e),l=r.current;a.forEach(function(o){i.has(o)||_n(o,null)}),i.forEach(function(o){a.has(o)||_n(o,l)})}Ti.set(r,e)},[e]),r}function Eg(e){return e}function Rg(e,t){t===void 0&&(t=Eg);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var l=t(i,n);return r.push(l),function(){r=r.filter(function(o){return o!==l})}},assignSyncMedium:function(i){for(n=!0;r.length;){var l=r;r=[],l.forEach(i)}r={push:function(o){return i(o)},filter:function(){return r}}},assignMedium:function(i){n=!0;var l=[];if(r.length){var o=r;r=[],o.forEach(i),l=r}var s=function(){var m=l;l=[],m.forEach(i)},c=function(){return Promise.resolve().then(s)};c(),r={push:function(m){l.push(m),c()},filter:function(m){return l=l.filter(m),r}}}};return a}function Pg(e){e===void 0&&(e={});var t=Rg(null);return t.options=Re({async:!0,ssr:!1},e),t}var Io=function(e){var t=e.sideCar,r=So(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return u.createElement(n,Re({},r))};Io.isSideCarExport=!0;function Lg(e,t){return e.useMedium(t),Io}var Ho=Pg(),Sn=function(){},nn=u.forwardRef(function(e,t){var r=u.useRef(null),n=u.useState({onScrollCapture:Sn,onWheelCapture:Sn,onTouchMoveCapture:Sn}),a=n[0],i=n[1],l=e.forwardProps,o=e.children,s=e.className,c=e.removeScrollBar,m=e.enabled,d=e.shards,g=e.sideCar,f=e.noIsolation,x=e.inert,p=e.allowPinchZoom,h=e.as,y=h===void 0?"div":h,b=e.gapMode,$=So(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=g,w=Ag([r,t]),H=Re(Re({},$),a);return u.createElement(u.Fragment,null,m&&u.createElement(k,{sideCar:Ho,removeScrollBar:c,shards:d,noIsolation:f,inert:x,setCallbacks:i,allowPinchZoom:!!p,lockRef:r,gapMode:b}),l?u.cloneElement(u.Children.only(o),Re(Re({},H),{ref:w})):u.createElement(y,Re({},H,{className:s,ref:w}),o))});nn.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};nn.classNames={fullWidth:Sr,zeroRight:_r};var Mg=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Vg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Mg();return t&&e.setAttribute("nonce",t),e}function Ng(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function jg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Dg=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Vg())&&(Ng(t,r),jg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Og=function(){var e=Dg();return function(t,r){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},Co=function(){var e=Og(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},zg={left:0,top:0,right:0,gap:0},In=function(e){return parseInt(e||"",10)||0},Bg=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[In(r),In(n),In(a)]},Fg=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return zg;var t=Bg(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Wg=Co(),xt="data-scroll-locked",Gg=function(e,t,r,n){var a=e.left,i=e.top,l=e.right,o=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Hg,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(o,"px ").concat(n,`;
  }
  body[`).concat(xt,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(o,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(_r,` {
    right: `).concat(o,"px ").concat(n,`;
  }
  
  .`).concat(Sr,` {
    margin-right: `).concat(o,"px ").concat(n,`;
  }
  
  .`).concat(_r," .").concat(_r,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Sr," .").concat(Sr,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(xt,`] {
    `).concat(Cg,": ").concat(o,`px;
  }
`)},Ai=function(){var e=parseInt(document.body.getAttribute(xt)||"0",10);return isFinite(e)?e:0},Ug=function(){u.useEffect(function(){return document.body.setAttribute(xt,(Ai()+1).toString()),function(){var e=Ai()-1;e<=0?document.body.removeAttribute(xt):document.body.setAttribute(xt,e.toString())}},[])},Xg=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;Ug();var i=u.useMemo(function(){return Fg(a)},[a]);return u.createElement(Wg,{styles:Gg(i,!t,a,r?"":"!important")})},Wn=!1;if(typeof window<"u")try{var fr=Object.defineProperty({},"passive",{get:function(){return Wn=!0,!0}});window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Wn=!1}var dt=Wn?{passive:!1}:!1,Yg=function(e){return e.tagName==="TEXTAREA"},qo=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!Yg(e)&&r[t]==="visible")},Kg=function(e){return qo(e,"overflowY")},Zg=function(e){return qo(e,"overflowX")},Ei=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=To(e,n);if(a){var i=Ao(e,n),l=i[1],o=i[2];if(l>o)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Qg=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Jg=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},To=function(e,t){return e==="v"?Kg(t):Zg(t)},Ao=function(e,t){return e==="v"?Qg(t):Jg(t)},ef=function(e,t){return e==="h"&&t==="rtl"?-1:1},tf=function(e,t,r,n,a){var i=ef(e,window.getComputedStyle(t).direction),l=i*n,o=r.target,s=t.contains(o),c=!1,m=l>0,d=0,g=0;do{var f=Ao(e,o),x=f[0],p=f[1],h=f[2],y=p-h-i*x;(x||y)&&To(e,o)&&(d+=y,g+=x),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!s&&o!==document.body||s&&(t.contains(o)||t===o));return(m&&(Math.abs(d)<1||!a)||!m&&(Math.abs(g)<1||!a))&&(c=!0),c},pr=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ri=function(e){return[e.deltaX,e.deltaY]},Pi=function(e){return e&&"current"in e?e.current:e},rf=function(e,t){return e[0]===t[0]&&e[1]===t[1]},nf=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},af=0,vt=[];function lf(e){var t=u.useRef([]),r=u.useRef([0,0]),n=u.useRef(),a=u.useState(af++)[0],i=u.useState(Co)[0],l=u.useRef(e);u.useEffect(function(){l.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var p=Ig([e.lockRef.current],(e.shards||[]).map(Pi),!0).filter(Boolean);return p.forEach(function(h){return h.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),p.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(p,h){if("touches"in p&&p.touches.length===2)return!l.current.allowPinchZoom;var y=pr(p),b=r.current,$="deltaX"in p?p.deltaX:b[0]-y[0],k="deltaY"in p?p.deltaY:b[1]-y[1],w,H=p.target,S=Math.abs($)>Math.abs(k)?"h":"v";if("touches"in p&&S==="h"&&H.type==="range")return!1;var q=Ei(S,H);if(!q)return!0;if(q?w=S:(w=S==="v"?"h":"v",q=Ei(S,H)),!q)return!1;if(!n.current&&"changedTouches"in p&&($||k)&&(n.current=w),!w)return!0;var E=n.current||w;return tf(E,h,p,E==="h"?$:k,!0)},[]),s=u.useCallback(function(p){var h=p;if(!(!vt.length||vt[vt.length-1]!==i)){var y="deltaY"in h?Ri(h):pr(h),b=t.current.filter(function(w){return w.name===h.type&&(w.target===h.target||h.target===w.shadowParent)&&rf(w.delta,y)})[0];if(b&&b.should){h.cancelable&&h.preventDefault();return}if(!b){var $=(l.current.shards||[]).map(Pi).filter(Boolean).filter(function(w){return w.contains(h.target)}),k=$.length>0?o(h,$[0]):!l.current.noIsolation;k&&h.cancelable&&h.preventDefault()}}},[]),c=u.useCallback(function(p,h,y,b){var $={name:p,delta:h,target:y,should:b,shadowParent:of(y)};t.current.push($),setTimeout(function(){t.current=t.current.filter(function(k){return k!==$})},1)},[]),m=u.useCallback(function(p){r.current=pr(p),n.current=void 0},[]),d=u.useCallback(function(p){c(p.type,Ri(p),p.target,o(p,e.lockRef.current))},[]),g=u.useCallback(function(p){c(p.type,pr(p),p.target,o(p,e.lockRef.current))},[]);u.useEffect(function(){return vt.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:g}),document.addEventListener("wheel",s,dt),document.addEventListener("touchmove",s,dt),document.addEventListener("touchstart",m,dt),function(){vt=vt.filter(function(p){return p!==i}),document.removeEventListener("wheel",s,dt),document.removeEventListener("touchmove",s,dt),document.removeEventListener("touchstart",m,dt)}},[]);var f=e.removeScrollBar,x=e.inert;return u.createElement(u.Fragment,null,x?u.createElement(i,{styles:nf(a)}):null,f?u.createElement(Xg,{gapMode:e.gapMode}):null)}function of(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const sf=Lg(Ho,lf);var an=u.forwardRef(function(e,t){return u.createElement(nn,Re({},e,{ref:t,sideCar:sf}))});an.classNames=nn.classNames;var uf=[" ","Enter","ArrowUp","ArrowDown"],cf=[" ","Enter"],ir="Select",[ln,on,mf]=qa(ir),[Pt,Jy]=me(ir,[mf,Et]),sn=Et(),[df,Ze]=Pt(ir),[vf,gf]=Pt(ir),Eo=e=>{const{__scopeSelect:t,children:r,open:n,defaultOpen:a,onOpenChange:i,value:l,defaultValue:o,onValueChange:s,dir:c,name:m,autoComplete:d,disabled:g,required:f}=e,x=sn(t),[p,h]=u.useState(null),[y,b]=u.useState(null),[$,k]=u.useState(!1),w=Rt(c),[H=!1,S]=Ie({prop:n,defaultProp:a,onChange:i}),[q,E]=Ie({prop:l,defaultProp:o,onChange:s}),A=u.useRef(null),j=p?!!p.closest("form"):!0,[N,Y]=u.useState(new Set),X=Array.from(N).map(D=>D.props.value).join(";");return v.jsx(wa,{...x,children:v.jsxs(df,{required:f,scope:t,trigger:p,onTriggerChange:h,valueNode:y,onValueNodeChange:b,valueNodeHasChildren:$,onValueNodeHasChildrenChange:k,contentId:Le(),value:q,onValueChange:E,open:H,onOpenChange:S,dir:w,triggerPointerDownPosRef:A,disabled:g,children:[v.jsx(ln.Provider,{scope:t,children:v.jsx(vf,{scope:e.__scopeSelect,onNativeOptionAdd:u.useCallback(D=>{Y(O=>new Set(O).add(D))},[]),onNativeOptionRemove:u.useCallback(D=>{Y(O=>{const L=new Set(O);return L.delete(D),L})},[]),children:r})}),j?v.jsxs(Jo,{"aria-hidden":!0,required:f,tabIndex:-1,name:m,autoComplete:d,value:q,onChange:D=>E(D.target.value),disabled:g,children:[q===void 0?v.jsx("option",{value:""}):null,Array.from(N)]},X):null]})})};Eo.displayName=ir;var Ro="SelectTrigger",Po=u.forwardRef((e,t)=>{const{__scopeSelect:r,disabled:n=!1,...a}=e,i=sn(r),l=Ze(Ro,r),o=l.disabled||n,s=z(t,l.onTriggerChange),c=on(r),[m,d,g]=es(x=>{const p=c().filter(b=>!b.disabled),h=p.find(b=>b.value===l.value),y=ts(p,x,h);y!==void 0&&l.onValueChange(y.value)}),f=()=>{o||(l.onOpenChange(!0),g())};return v.jsx(Qr,{asChild:!0,...i,children:v.jsx(M.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":Qo(l.value)?"":void 0,...a,ref:s,onClick:P(a.onClick,x=>{x.currentTarget.focus()}),onPointerDown:P(a.onPointerDown,x=>{const p=x.target;p.hasPointerCapture(x.pointerId)&&p.releasePointerCapture(x.pointerId),x.button===0&&x.ctrlKey===!1&&(f(),l.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)},x.preventDefault())}),onKeyDown:P(a.onKeyDown,x=>{const p=m.current!=="";!(x.ctrlKey||x.altKey||x.metaKey)&&x.key.length===1&&d(x.key),!(p&&x.key===" ")&&uf.includes(x.key)&&(f(),x.preventDefault())})})})});Po.displayName=Ro;var Lo="SelectValue",Mo=u.forwardRef((e,t)=>{const{__scopeSelect:r,className:n,style:a,children:i,placeholder:l="",...o}=e,s=Ze(Lo,r),{onValueNodeHasChildrenChange:c}=s,m=i!==void 0,d=z(t,s.onValueNodeChange);return ue(()=>{c(m)},[c,m]),v.jsx(M.span,{...o,ref:d,style:{pointerEvents:"none"},children:Qo(s.value)?v.jsx(v.Fragment,{children:l}):i})});Mo.displayName=Lo;var ff="SelectIcon",Vo=u.forwardRef((e,t)=>{const{__scopeSelect:r,children:n,...a}=e;return v.jsx(M.span,{"aria-hidden":!0,...a,ref:t,children:n||"▼"})});Vo.displayName=ff;var pf="SelectPortal",No=e=>v.jsx(nr,{asChild:!0,...e});No.displayName=pf;var ot="SelectContent",jo=u.forwardRef((e,t)=>{const r=Ze(ot,e.__scopeSelect),[n,a]=u.useState();if(ue(()=>{a(new DocumentFragment)},[]),!r.open){const i=n;return i?Yt.createPortal(v.jsx(Do,{scope:e.__scopeSelect,children:v.jsx(ln.Slot,{scope:e.__scopeSelect,children:v.jsx("div",{children:e.children})})}),i):null}return v.jsx(Oo,{...e,ref:t})});jo.displayName=ot;var De=10,[Do,Qe]=Pt(ot),xf="SelectContentImpl",Oo=u.forwardRef((e,t)=>{const{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:l,side:o,sideOffset:s,align:c,alignOffset:m,arrowPadding:d,collisionBoundary:g,collisionPadding:f,sticky:x,hideWhenDetached:p,avoidCollisions:h,...y}=e,b=Ze(ot,r),[$,k]=u.useState(null),[w,H]=u.useState(null),S=z(t,V=>k(V)),[q,E]=u.useState(null),[A,j]=u.useState(null),N=on(r),[Y,X]=u.useState(!1),D=u.useRef(!1);u.useEffect(()=>{if($)return Aa($)},[$]),Ta();const O=u.useCallback(V=>{const[Q,...re]=N().map(U=>U.ref.current),[J]=re.slice(-1),Z=document.activeElement;for(const U of V)if(U===Z||(U==null||U.scrollIntoView({block:"nearest"}),U===Q&&w&&(w.scrollTop=0),U===J&&w&&(w.scrollTop=w.scrollHeight),U==null||U.focus(),document.activeElement!==Z))return},[N,w]),L=u.useCallback(()=>O([q,$]),[O,q,$]);u.useEffect(()=>{Y&&L()},[Y,L]);const{onOpenChange:K,triggerPointerDownPosRef:G}=b;u.useEffect(()=>{if($){let V={x:0,y:0};const Q=J=>{var Z,U;V={x:Math.abs(Math.round(J.pageX)-(((Z=G.current)==null?void 0:Z.x)??0)),y:Math.abs(Math.round(J.pageY)-(((U=G.current)==null?void 0:U.y)??0))}},re=J=>{V.x<=10&&V.y<=10?J.preventDefault():$.contains(J.target)||K(!1),document.removeEventListener("pointermove",Q),G.current=null};return G.current!==null&&(document.addEventListener("pointermove",Q),document.addEventListener("pointerup",re,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",re,{capture:!0})}}},[$,K,G]),u.useEffect(()=>{const V=()=>K(!1);return window.addEventListener("blur",V),window.addEventListener("resize",V),()=>{window.removeEventListener("blur",V),window.removeEventListener("resize",V)}},[K]);const[be,ce]=es(V=>{const Q=N().filter(Z=>!Z.disabled),re=Q.find(Z=>Z.ref.current===document.activeElement),J=ts(Q,V,re);J&&setTimeout(()=>J.ref.current.focus())}),ve=u.useCallback((V,Q,re)=>{const J=!D.current&&!re;(b.value!==void 0&&b.value===Q||J)&&(E(V),J&&(D.current=!0))},[b.value]),Fe=u.useCallback(()=>$==null?void 0:$.focus(),[$]),$e=u.useCallback((V,Q,re)=>{const J=!D.current&&!re;(b.value!==void 0&&b.value===Q||J)&&j(V)},[b.value]),_e=n==="popper"?Gn:zo,fe=_e===Gn?{side:o,sideOffset:s,align:c,alignOffset:m,arrowPadding:d,collisionBoundary:g,collisionPadding:f,sticky:x,hideWhenDetached:p,avoidCollisions:h}:{};return v.jsx(Do,{scope:r,content:$,viewport:w,onViewportChange:H,itemRefCallback:ve,selectedItem:q,onItemLeave:Fe,itemTextRefCallback:$e,focusSelectedItem:L,selectedItemText:A,position:n,isPositioned:Y,searchRef:be,children:v.jsx(an,{as:it,allowPinchZoom:!0,children:v.jsx(rn,{asChild:!0,trapped:b.open,onMountAutoFocus:V=>{V.preventDefault()},onUnmountAutoFocus:P(a,V=>{var Q;(Q=b.trigger)==null||Q.focus({preventScroll:!0}),V.preventDefault()}),children:v.jsx(tr,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:V=>V.preventDefault(),onDismiss:()=>b.onOpenChange(!1),children:v.jsx(_e,{role:"listbox",id:b.contentId,"data-state":b.open?"open":"closed",dir:b.dir,onContextMenu:V=>V.preventDefault(),...y,...fe,onPlaced:()=>X(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:P(y.onKeyDown,V=>{const Q=V.ctrlKey||V.altKey||V.metaKey;if(V.key==="Tab"&&V.preventDefault(),!Q&&V.key.length===1&&ce(V.key),["ArrowUp","ArrowDown","Home","End"].includes(V.key)){let J=N().filter(Z=>!Z.disabled).map(Z=>Z.ref.current);if(["ArrowUp","End"].includes(V.key)&&(J=J.slice().reverse()),["ArrowUp","ArrowDown"].includes(V.key)){const Z=V.target,U=J.indexOf(Z);J=J.slice(U+1)}setTimeout(()=>O(J)),V.preventDefault()}})})})})})})});Oo.displayName=xf;var yf="SelectItemAlignedPosition",zo=u.forwardRef((e,t)=>{const{__scopeSelect:r,onPlaced:n,...a}=e,i=Ze(ot,r),l=Qe(ot,r),[o,s]=u.useState(null),[c,m]=u.useState(null),d=z(t,S=>m(S)),g=on(r),f=u.useRef(!1),x=u.useRef(!0),{viewport:p,selectedItem:h,selectedItemText:y,focusSelectedItem:b}=l,$=u.useCallback(()=>{if(i.trigger&&i.valueNode&&o&&c&&p&&h&&y){const S=i.trigger.getBoundingClientRect(),q=c.getBoundingClientRect(),E=i.valueNode.getBoundingClientRect(),A=y.getBoundingClientRect();if(i.dir!=="rtl"){const Z=A.left-q.left,U=E.left-Z,pe=S.left-U,Ae=S.width+pe,Mt=Math.max(Ae,q.width),Vt=window.innerWidth-De,Nt=Xt(U,[De,Vt-Mt]);o.style.minWidth=Ae+"px",o.style.left=Nt+"px"}else{const Z=q.right-A.right,U=window.innerWidth-E.right-Z,pe=window.innerWidth-S.right-U,Ae=S.width+pe,Mt=Math.max(Ae,q.width),Vt=window.innerWidth-De,Nt=Xt(U,[De,Vt-Mt]);o.style.minWidth=Ae+"px",o.style.right=Nt+"px"}const j=g(),N=window.innerHeight-De*2,Y=p.scrollHeight,X=window.getComputedStyle(c),D=parseInt(X.borderTopWidth,10),O=parseInt(X.paddingTop,10),L=parseInt(X.borderBottomWidth,10),K=parseInt(X.paddingBottom,10),G=D+O+Y+K+L,be=Math.min(h.offsetHeight*5,G),ce=window.getComputedStyle(p),ve=parseInt(ce.paddingTop,10),Fe=parseInt(ce.paddingBottom,10),$e=S.top+S.height/2-De,_e=N-$e,fe=h.offsetHeight/2,V=h.offsetTop+fe,Q=D+O+V,re=G-Q;if(Q<=$e){const Z=h===j[j.length-1].ref.current;o.style.bottom="0px";const U=c.clientHeight-p.offsetTop-p.offsetHeight,pe=Math.max(_e,fe+(Z?Fe:0)+U+L),Ae=Q+pe;o.style.height=Ae+"px"}else{const Z=h===j[0].ref.current;o.style.top="0px";const pe=Math.max($e,D+p.offsetTop+(Z?ve:0)+fe)+re;o.style.height=pe+"px",p.scrollTop=Q-$e+p.offsetTop}o.style.margin=`${De}px 0`,o.style.minHeight=be+"px",o.style.maxHeight=N+"px",n==null||n(),requestAnimationFrame(()=>f.current=!0)}},[g,i.trigger,i.valueNode,o,c,p,h,y,i.dir,n]);ue(()=>$(),[$]);const[k,w]=u.useState();ue(()=>{c&&w(window.getComputedStyle(c).zIndex)},[c]);const H=u.useCallback(S=>{S&&x.current===!0&&($(),b==null||b(),x.current=!1)},[$,b]);return v.jsx(bf,{scope:r,contentWrapper:o,shouldExpandOnScrollRef:f,onScrollButtonChange:H,children:v.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k},children:v.jsx(M.div,{...a,ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});zo.displayName=yf;var hf="SelectPopperPosition",Gn=u.forwardRef((e,t)=>{const{__scopeSelect:r,align:n="start",collisionPadding:a=De,...i}=e,l=sn(r);return v.jsx(_a,{...l,...i,ref:t,align:n,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Gn.displayName=hf;var[bf,Ea]=Pt(ot,{}),Un="SelectViewport",$f=u.forwardRef((e,t)=>{const{__scopeSelect:r,nonce:n,...a}=e,i=Qe(Un,r),l=Ea(Un,r),o=z(t,i.onViewportChange),s=u.useRef(0);return v.jsxs(v.Fragment,{children:[v.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),v.jsx(ln.Slot,{scope:r,children:v.jsx(M.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:o,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:P(a.onScroll,c=>{const m=c.currentTarget,{contentWrapper:d,shouldExpandOnScrollRef:g}=l;if(g!=null&&g.current&&d){const f=Math.abs(s.current-m.scrollTop);if(f>0){const x=window.innerHeight-De*2,p=parseFloat(d.style.minHeight),h=parseFloat(d.style.height),y=Math.max(p,h);if(y<x){const b=y+f,$=Math.min(x,b),k=b-$;d.style.height=$+"px",d.style.bottom==="0px"&&(m.scrollTop=k>0?k:0,d.style.justifyContent="flex-end")}}}s.current=m.scrollTop})})})]})});$f.displayName=Un;var Bo="SelectGroup",[kf,wf]=Pt(Bo),Fo=u.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=Le();return v.jsx(kf,{scope:r,id:a,children:v.jsx(M.div,{role:"group","aria-labelledby":a,...n,ref:t})})});Fo.displayName=Bo;var Wo="SelectLabel",_f=u.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=wf(Wo,r);return v.jsx(M.div,{id:a.id,...n,ref:t})});_f.displayName=Wo;var Vr="SelectItem",[Sf,Go]=Pt(Vr),Uo=u.forwardRef((e,t)=>{const{__scopeSelect:r,value:n,disabled:a=!1,textValue:i,...l}=e,o=Ze(Vr,r),s=Qe(Vr,r),c=o.value===n,[m,d]=u.useState(i??""),[g,f]=u.useState(!1),x=z(t,y=>{var b;return(b=s.itemRefCallback)==null?void 0:b.call(s,y,n,a)}),p=Le(),h=()=>{a||(o.onValueChange(n),o.onOpenChange(!1))};if(n==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return v.jsx(Sf,{scope:r,value:n,disabled:a,textId:p,isSelected:c,onItemTextChange:u.useCallback(y=>{d(b=>b||((y==null?void 0:y.textContent)??"").trim())},[]),children:v.jsx(ln.ItemSlot,{scope:r,value:n,disabled:a,textValue:m,children:v.jsx(M.div,{role:"option","aria-labelledby":p,"data-highlighted":g?"":void 0,"aria-selected":c&&g,"data-state":c?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...l,ref:x,onFocus:P(l.onFocus,()=>f(!0)),onBlur:P(l.onBlur,()=>f(!1)),onPointerUp:P(l.onPointerUp,h),onPointerMove:P(l.onPointerMove,y=>{var b;a?(b=s.onItemLeave)==null||b.call(s):y.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(l.onPointerLeave,y=>{var b;y.currentTarget===document.activeElement&&((b=s.onItemLeave)==null||b.call(s))}),onKeyDown:P(l.onKeyDown,y=>{var $;(($=s.searchRef)==null?void 0:$.current)!==""&&y.key===" "||(cf.includes(y.key)&&h(),y.key===" "&&y.preventDefault())})})})})});Uo.displayName=Vr;var Dt="SelectItemText",Xo=u.forwardRef((e,t)=>{const{__scopeSelect:r,className:n,style:a,...i}=e,l=Ze(Dt,r),o=Qe(Dt,r),s=Go(Dt,r),c=gf(Dt,r),[m,d]=u.useState(null),g=z(t,y=>d(y),s.onItemTextChange,y=>{var b;return(b=o.itemTextRefCallback)==null?void 0:b.call(o,y,s.value,s.disabled)}),f=m==null?void 0:m.textContent,x=u.useMemo(()=>v.jsx("option",{value:s.value,disabled:s.disabled,children:f},s.value),[s.disabled,s.value,f]),{onNativeOptionAdd:p,onNativeOptionRemove:h}=c;return ue(()=>(p(x),()=>h(x)),[p,h,x]),v.jsxs(v.Fragment,{children:[v.jsx(M.span,{id:s.textId,...i,ref:g}),s.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Yt.createPortal(i.children,l.valueNode):null]})});Xo.displayName=Dt;var Yo="SelectItemIndicator",Ko=u.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e;return Go(Yo,r).isSelected?v.jsx(M.span,{"aria-hidden":!0,...n,ref:t}):null});Ko.displayName=Yo;var Xn="SelectScrollUpButton",If=u.forwardRef((e,t)=>{const r=Qe(Xn,e.__scopeSelect),n=Ea(Xn,e.__scopeSelect),[a,i]=u.useState(!1),l=z(t,n.onScrollButtonChange);return ue(()=>{if(r.viewport&&r.isPositioned){let o=function(){const c=s.scrollTop>0;i(c)};const s=r.viewport;return o(),s.addEventListener("scroll",o),()=>s.removeEventListener("scroll",o)}},[r.viewport,r.isPositioned]),a?v.jsx(Zo,{...e,ref:l,onAutoScroll:()=>{const{viewport:o,selectedItem:s}=r;o&&s&&(o.scrollTop=o.scrollTop-s.offsetHeight)}}):null});If.displayName=Xn;var Yn="SelectScrollDownButton",Hf=u.forwardRef((e,t)=>{const r=Qe(Yn,e.__scopeSelect),n=Ea(Yn,e.__scopeSelect),[a,i]=u.useState(!1),l=z(t,n.onScrollButtonChange);return ue(()=>{if(r.viewport&&r.isPositioned){let o=function(){const c=s.scrollHeight-s.clientHeight,m=Math.ceil(s.scrollTop)<c;i(m)};const s=r.viewport;return o(),s.addEventListener("scroll",o),()=>s.removeEventListener("scroll",o)}},[r.viewport,r.isPositioned]),a?v.jsx(Zo,{...e,ref:l,onAutoScroll:()=>{const{viewport:o,selectedItem:s}=r;o&&s&&(o.scrollTop=o.scrollTop+s.offsetHeight)}}):null});Hf.displayName=Yn;var Zo=u.forwardRef((e,t)=>{const{__scopeSelect:r,onAutoScroll:n,...a}=e,i=Qe("SelectScrollButton",r),l=u.useRef(null),o=on(r),s=u.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return u.useEffect(()=>()=>s(),[s]),ue(()=>{var m;const c=o().find(d=>d.ref.current===document.activeElement);(m=c==null?void 0:c.ref.current)==null||m.scrollIntoView({block:"nearest"})},[o]),v.jsx(M.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerDown:P(a.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(n,50))}),onPointerMove:P(a.onPointerMove,()=>{var c;(c=i.onItemLeave)==null||c.call(i),l.current===null&&(l.current=window.setInterval(n,50))}),onPointerLeave:P(a.onPointerLeave,()=>{s()})})}),Cf="SelectSeparator",qf=u.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e;return v.jsx(M.div,{"aria-hidden":!0,...n,ref:t})});qf.displayName=Cf;var Kn="SelectArrow",Tf=u.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=sn(r),i=Ze(Kn,r),l=Qe(Kn,r);return i.open&&l.position==="popper"?v.jsx(Sa,{...a,...n,ref:t}):null});Tf.displayName=Kn;function Qo(e){return e===""||e===void 0}var Jo=u.forwardRef((e,t)=>{const{value:r,...n}=e,a=u.useRef(null),i=z(t,a),l=Jt(r);return u.useEffect(()=>{const o=a.current,s=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(s,"value").set;if(l!==r&&m){const d=new Event("change",{bubbles:!0});m.call(o,r),o.dispatchEvent(d)}},[l,r]),v.jsx(Ia,{asChild:!0,children:v.jsx("select",{...n,ref:i,defaultValue:r})})});Jo.displayName="BubbleSelect";function es(e){const t=se(e),r=u.useRef(""),n=u.useRef(0),a=u.useCallback(l=>{const o=r.current+l;t(o),function s(c){r.current=c,window.clearTimeout(n.current),c!==""&&(n.current=window.setTimeout(()=>s(""),1e3))}(o)},[t]),i=u.useCallback(()=>{r.current="",window.clearTimeout(n.current)},[]);return u.useEffect(()=>()=>window.clearTimeout(n.current),[]),[r,a,i]}function ts(e,t,r){const a=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=r?e.indexOf(r):-1;let l=Af(e,Math.max(i,0));a.length===1&&(l=l.filter(c=>c!==r));const s=l.find(c=>c.textValue.toLowerCase().startsWith(a.toLowerCase()));return s!==r?s:void 0}function Af(e,t){return e.map((r,n)=>e[(t+n)%e.length])}var Ef=Eo,Rf=Po,Pf=Mo,Lf=Vo,Mf=No,Vf=jo,Nf=Fo,jf=Uo,Df=Xo,Of=Ko;const zf={[R.L]:e=>_`
        width: ${e.$styles.icon.iconSize_L};
        height: ${e.$styles.icon.iconSize_L};
        min-width: ${e.$styles.icon.iconSize_L};
        min-height: ${e.$styles.icon.iconSize_L};
    `,[R.M]:e=>_`
        width: ${e.$styles.icon.iconSize_M};
        height: ${e.$styles.icon.iconSize_M};
        min-width: ${e.$styles.icon.iconSize_M};
        min-height: ${e.$styles.icon.iconSize_M};
    `},Bf=C.svg`
    display: block;
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    transition: all 0.3s ease-in-out;

    color: ${({$colors:e,$color:t,$colorVariant:r,$disabled:n,$_importantColor:a})=>`${T({cs:e,color:t,variant:r,disabled:n})} ${a?"!important":""}`};

    ${e=>zf[e.$sizeVariant](e)}
`,qe=({children:e,xmlns:t,viewBox:r,sizeVariant:n=R.L,colorVariant:a=le.DEFAULT,color:i,style:l,mr:o,disabled:s,_importantColor:c,$colors:m,$styles:d,...g})=>{const f=W(m),x=F(["mr","icon"],d);return v.jsx(Bf,{viewBox:r,xmlns:t,fill:"none",$mr:o,$color:i,$colors:f,$styles:x,$colorVariant:a,$sizeVariant:n,$disabled:s,$_importantColor:c,style:l,...g,children:e})};qe.__docgenInfo={description:"",methods:[],displayName:"IconSVGContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:"",defaultValue:{value:"VS.L",computed:!0}},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"VC.DEFAULT",computed:!0}},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const rs=({...e})=>v.jsx(qe,{viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M2 7l4 4 7-7",strokeWidth:"1.5",stroke:"currentColor",fill:"none"})});rs.__docgenInfo={description:"",methods:[],displayName:"BaseCheck",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};var gt=(e=>(e.LEFT="left",e.TOP="top",e.RIGHT="right",e.BOTTOM="bottom",e))(gt||{});C(qe)`
    transform: ${e=>e.$rotate};
`;const Ff=C(qe)`
    transform: ${e=>e.$rotate};
`,ns=({position:e=gt.TOP,...t})=>{const r={[gt.LEFT]:"rotate(90deg)",[gt.BOTTOM]:"rotate(0deg)",[gt.TOP]:"rotate(180deg)",[gt.RIGHT]:"rotate(-90deg)"};return v.jsx(Ff,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",$rotate:r[e],...t,children:v.jsx("path",{d:"M14.9999 16.465L21.1874 10.2775L22.9549 12.045L14.9999 20L7.04492 12.045L8.81242 10.2775L14.9999 16.465Z",fill:"currentColor"})})};ns.__docgenInfo={description:"",methods:[],displayName:"Arrow",props:{position:{required:!1,tsType:{name:"union",raw:"'left' | 'top' | 'right' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"IP.TOP",computed:!0}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const Wf=({...e})=>v.jsx(qe,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M21.25 19.0562V27.6463C21.25 27.7568 21.2207 27.8654 21.165 27.961C21.1094 28.0565 21.0294 28.1356 20.9332 28.1901C20.8369 28.2447 20.728 28.2727 20.6174 28.2713C20.5068 28.27 20.3986 28.2393 20.3038 28.1825L15 25L9.69625 28.1825C9.6013 28.2394 9.49295 28.2701 9.38227 28.2713C9.27159 28.2726 9.16255 28.2445 9.0663 28.1898C8.97006 28.1352 8.89006 28.0559 8.83449 27.9602C8.77891 27.8645 8.74976 27.7557 8.75 27.645V19.0575C7.13269 17.7626 5.95749 15.9973 5.38682 14.0057C4.81616 12.014 4.87819 9.89423 5.56436 7.93934C6.25053 5.98444 7.52695 4.29093 9.21723 3.09285C10.9075 1.89476 12.9282 1.25125 15 1.25125C17.0718 1.25125 19.0925 1.89476 20.7828 3.09285C22.473 4.29093 23.7495 5.98444 24.4356 7.93934C25.1218 9.89423 25.1838 12.014 24.6132 14.0057C24.0425 15.9973 22.8673 17.7626 21.25 19.0575V19.0562ZM11.25 20.5225V24.335L15 22.085L18.75 24.335V20.5225C17.5586 21.0044 16.2852 21.2514 15 21.25C13.7148 21.2514 12.4414 21.0044 11.25 20.5225ZM15 18.75C16.9891 18.75 18.8968 17.9598 20.3033 16.5533C21.7098 15.1468 22.5 13.2391 22.5 11.25C22.5 9.26088 21.7098 7.35322 20.3033 5.9467C18.8968 4.54018 16.9891 3.75 15 3.75C13.0109 3.75 11.1032 4.54018 9.6967 5.9467C8.29018 7.35322 7.5 9.26088 7.5 11.25C7.5 13.2391 8.29018 15.1468 9.6967 16.5533C11.1032 17.9598 13.0109 18.75 15 18.75Z",fill:"currentColor"})});Wf.__docgenInfo={description:"",methods:[],displayName:"Award",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const Gf=({...e})=>v.jsx(qe,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M2.5 16.25H10V26.25H2.5V16.25ZM20 10H27.5V26.25H20V10ZM11.25 3.75H18.75V26.25H11.25V3.75ZM5 18.75V23.75H7.5V18.75H5ZM13.75 6.25V23.75H16.25V6.25H13.75ZM22.5 12.5V23.75H25V12.5H22.5Z",fill:"currentColor"})});Gf.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};C(qe)`
    transform: ${e=>e.$rotate};
`;const Uf=({...e})=>v.jsx(qe,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M11.6775 23.4775L9.26372 22.83L10.2475 19.1562C8.77493 18.6132 7.40637 17.8217 6.20122 16.8162L3.50997 19.5087L1.74122 17.74L4.43372 15.0487C2.91382 13.2284 1.89258 11.0447 1.46997 8.71125L3.92997 8.2625C4.87872 13.515 9.47372 17.5 15 17.5C20.525 17.5 25.1212 13.515 26.07 8.2625L28.53 8.71C28.1079 11.0438 27.0871 13.228 25.5675 15.0487L28.2587 17.74L26.49 19.5087L23.7987 16.8162C22.5936 17.8217 21.225 18.6132 19.7525 19.1562L20.7362 22.8312L18.3225 23.4775L17.3375 19.8025C15.7904 20.0676 14.2095 20.0676 12.6625 19.8025L11.6775 23.4775Z",fill:"currentColor"})});Uf.__docgenInfo={description:"",methods:[],displayName:"EyeClose",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const Xf=({...e})=>v.jsx(qe,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M15.0001 3.75C21.7401 3.75 27.3476 8.6 28.5238 15C27.3488 21.4 21.7401 26.25 15.0001 26.25C8.26007 26.25 2.65257 21.4 1.47632 15C2.65132 8.6 8.26007 3.75 15.0001 3.75ZM15.0001 23.75C17.5494 23.7494 20.0231 22.8835 22.0161 21.294C24.0092 19.7044 25.4037 17.4853 25.9713 15C25.4016 12.5166 24.0062 10.3 22.0133 8.71253C20.0205 7.12506 17.5479 6.26066 15.0001 6.26066C12.4522 6.26066 9.97968 7.12506 7.98679 8.71253C5.9939 10.3 4.59853 12.5166 4.02882 15C4.59644 17.4853 5.99091 19.7044 7.984 21.294C9.97709 22.8835 12.4507 23.7494 15.0001 23.75V23.75ZM15.0001 20.625C13.5082 20.625 12.0775 20.0324 11.0226 18.9775C9.9677 17.9226 9.37507 16.4918 9.37507 15C9.37507 13.5082 9.9677 12.0774 11.0226 11.0225C12.0775 9.96763 13.5082 9.375 15.0001 9.375C16.4919 9.375 17.9227 9.96763 18.9775 11.0225C20.0324 12.0774 20.6251 13.5082 20.6251 15C20.6251 16.4918 20.0324 17.9226 18.9775 18.9775C17.9227 20.0324 16.4919 20.625 15.0001 20.625ZM15.0001 18.125C15.8289 18.125 16.6237 17.7958 17.2098 17.2097C17.7958 16.6237 18.1251 15.8288 18.1251 15C18.1251 14.1712 17.7958 13.3763 17.2098 12.7903C16.6237 12.2042 15.8289 11.875 15.0001 11.875C14.1713 11.875 13.3764 12.2042 12.7904 12.7903C12.2043 13.3763 11.8751 14.1712 11.8751 15C11.8751 15.8288 12.2043 16.6237 12.7904 17.2097C13.3764 17.7958 14.1713 18.125 15.0001 18.125Z",fill:"currentColor"})});Xf.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const Yf=({...e})=>v.jsx(qe,{viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M22.5388 20.7713L27.8925 26.1238L26.1238 27.8925L20.7713 22.5388C18.7797 24.1353 16.3025 25.0036 13.75 25C7.54 25 2.5 19.96 2.5 13.75C2.5 7.54 7.54 2.5 13.75 2.5C19.96 2.5 25 7.54 25 13.75C25.0036 16.3025 24.1353 18.7797 22.5388 20.7713ZM20.0312 19.8438C21.6176 18.2124 22.5036 16.0255 22.5 13.75C22.5 8.915 18.5838 5 13.75 5C8.915 5 5 8.915 5 13.75C5 18.5838 8.915 22.5 13.75 22.5C16.0255 22.5036 18.2124 21.6176 19.8438 20.0312L20.0312 19.8438V19.8438Z",fill:"currentColor"})});Yf.__docgenInfo={description:"",methods:[],displayName:"Search",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},xmlns:{required:!1,tsType:{name:"string"},description:""},viewBox:{required:!1,tsType:{name:"string"},description:""},sizeVariant:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'warning' | 'success' | 'default'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},_importantColor:{required:!1,tsType:{name:"boolean"},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    icon: TypeSSIcon;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"icon",value:{name:"signature",type:"object",raw:`{
    iconSize_L: string;
    iconSize_M: string;
}`,signature:{properties:[{key:"iconSize_L",value:{name:"string",required:!0}},{key:"iconSize_M",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};C(qe)`
    transform: ${e=>e.$rotate};
`;const Kf=C(Lf)`
    margin-left: 8px;
    svg {
        width: 20px;
        height: 20px;
    }
`,Zf=C(jf)`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${e=>e.disabled?"default":"pointer"};
`,yt={Icon:Kf,Item:Zf},as=C(Nf)`
    padding: 10px 0;
    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`,is=C.div`
    font-size: 13px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`,Qf=({label:e,labelProps:t,...r},n)=>v.jsxs(as,{ref:n,...r,children:[e&&v.jsx(is,{...t,children:e}),r.children]}),Jf=I.forwardRef(Qf),ep={Label:is,Group:as};Jf.__docgenInfo={description:"",methods:[],displayName:"BaseSelectGroup"};const tp={[R.L]:e=>_`
        height: ${e.selectHeight_L};
        padding: ${`${e.selectPadding_Y_L} ${e.selectPadding_X_L}`};
    `,[R.M]:e=>_`
        height: ${e.selectHeight_M};
        padding: ${`${e.selectPadding_Y_M} ${e.selectPadding_X_M}`};
    `},rp={[nt.CENTER]:"center",[nt.LEFT]:"space-between",[nt.RIGHT]:"right"},np=C(Rf)`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: ${e=>rp[e.$positionTrigger]};
    border-radius: ${e=>e.$styles.base.borderRadiusItem};
    font-weight: ${e=>e.$styles.typography.fontWeightItem};
    border: 1px solid
        ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    outline: none;
    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    cursor: ${e=>e.disabled?"default":"pointer"};
    line-height: normal;
    width: ${e=>e.$width};
    &:not([disabled]):hover {
        color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        border-color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        &[data-placeholder] {
            color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }
        ${yt.Icon} {
            transition: all 0.3s ease-in-out;
            svg {
                color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            }
        }
    }
    &[data-placeholder] {
        color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
    }

    ${yt.Icon} {
        transform: rotate(180deg);
        svg {
            color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant})};
        }
    }
    &[data-state='open'] {
        color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        border-color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        &[data-placeholder] {
            color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }

        ${yt.Icon} {
            transform: rotate(0deg);
            svg {
                color: ${e=>T({cs:e.$colors,color:e.$color,disabled:e.disabled,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            }
        }
    }
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
    ${e=>tp[e.$sizeVariant](e.$styles.select)};
    span {
        &:nth-child(1) {
            user-select: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,ap=C(Vf)`
    overflow: hidden;
    background-color: ${e=>e.$colors.backgroundBox};
    font-size: ${e=>e.$styles.typography.fontSizeItem};
    border-radius: ${e=>e.$styles.base.borderRadiusItem};
    width: ${e=>e.$width};
    ${yt.Item} {
        &[data-disabled] {
            color: ${e=>e.$colors.disabled};
            svg {
                color: ${e=>e.$colors.disabled};
            }
        }

        color: ${e=>T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};

        svg {
            color: ${e=>T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        }

        &:not([data-disabled]):hover {
            transition: all 0.1s ease-in-out;
            background-color: ${e=>T({cs:e.$colors,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            color: ${e=>e.$colors.backgroundBox};
            svg {
                color: ${e=>e.$colors.backgroundBox};
            }
        }
    }
    ${e=>ll[e.$boxPaddingVariant](e.$styles.box)};
    ${e=>e.$boxShadowVariant&&ol[e.$boxShadowVariant]({$box:e.$styles.box,$colors:e.$colors})}

    ${ep.Group} {
        color: ${e=>e.$colors.disabled};
        border-color: ${e=>e.$colors.disabled};
    }
`,ip=C.div`
    max-height: ${e=>e.$maxHeight??"300px"};
    overflow-y: auto;
    margin: 0 -4px;
    padding: 0 3px;
    ${e=>Yr({$colors:e.$colors,$color:e.$color,$colorVariant:e.$colorVariant,$hover:e.$_isActiveHover})}
`,lp=I.memo(I.forwardRef(({mr:e,color:t,width:r,maxHeight:n,placeholder:a,positionTrigger:i=nt.CENTER,sizeVariant:l=R.L,colorVariant:o=le.DEFAULT,boxPaddingVariant:s="p-1",boxShadowVariant:c="shd-1",blocked:m,$colors:d,$styles:g,_isActiveHover:f=!0,triggerProps:x,valueProps:p,iconProps:h,iconArrowProps:y,portalProps:b,contentProps:$,viewportProps:k,...w},H)=>{const S=W(d),q=F(["base","box","select","typography","mr"],g);return v.jsxs(Ef,{...w,children:[v.jsxs(np,{ref:H,$mr:e,$colors:S,$styles:q,$color:t,$width:r,$sizeVariant:l,$colorVariant:o,$positionTrigger:i,$_isActiveHover:f,$blocked:m,disabled:w.disabled,...x,children:[v.jsx(Pf,{placeholder:a,...p}),v.jsx(yt.Icon,{...h,children:v.jsx(ns,{...y})})]}),v.jsx(Mf,{...b,children:v.jsx(ap,{side:"bottom",position:"popper",$colorVariant:o,$colors:S,$styles:q,$color:t,$width:r,sideOffset:5,$boxPaddingVariant:s,$boxShadowVariant:c,$_isActiveHover:f,...$,children:v.jsx(ip,{$colors:S,$color:t,$colorVariant:o,$maxHeight:n,$_isActiveHover:f,...k,children:w.children})})})]})}));lp.__docgenInfo={description:"",methods:[],displayName:"BaseSelectContent",props:{positionTrigger:{defaultValue:{value:"BP.CENTER",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},boxPaddingVariant:{defaultValue:{value:"'p-1'",computed:!1},required:!1},boxShadowVariant:{defaultValue:{value:"'shd-1'",computed:!1},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const op=C(yt.Item)`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
`,sp=C(Of)`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        min-width: 14px;
        max-width: 14px;
        width: 14px;
        height: 14px;
    }
`,up=({indicatorProps:e,iconProps:t,itemTextProps:r,...n},a)=>v.jsxs(op,{ref:a,...n,children:[v.jsx(sp,{...e,children:v.jsx(rs,{...t})}),v.jsx(Df,{...r,children:n.children})]}),cp=I.forwardRef(up);cp.__docgenInfo={description:"",methods:[],displayName:"BaseSelectItem"};var Ra="Popover",[ls,eh]=me(Ra,[Et]),lr=Et(),[mp,Je]=ls(Ra),os=e=>{const{__scopePopover:t,children:r,open:n,defaultOpen:a,onOpenChange:i,modal:l=!1}=e,o=lr(t),s=u.useRef(null),[c,m]=u.useState(!1),[d=!1,g]=Ie({prop:n,defaultProp:a,onChange:i});return v.jsx(wa,{...o,children:v.jsx(mp,{scope:t,contentId:Le(),triggerRef:s,open:d,onOpenChange:g,onOpenToggle:u.useCallback(()=>g(f=>!f),[g]),hasCustomAnchor:c,onCustomAnchorAdd:u.useCallback(()=>m(!0),[]),onCustomAnchorRemove:u.useCallback(()=>m(!1),[]),modal:l,children:r})})};os.displayName=Ra;var ss="PopoverAnchor",dp=u.forwardRef((e,t)=>{const{__scopePopover:r,...n}=e,a=Je(ss,r),i=lr(r),{onCustomAnchorAdd:l,onCustomAnchorRemove:o}=a;return u.useEffect(()=>(l(),()=>o()),[l,o]),v.jsx(Qr,{...i,...n,ref:t})});dp.displayName=ss;var us="PopoverTrigger",cs=u.forwardRef((e,t)=>{const{__scopePopover:r,...n}=e,a=Je(us,r),i=lr(r),l=z(t,a.triggerRef),o=v.jsx(M.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ps(a.open),...n,ref:l,onClick:P(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?o:v.jsx(Qr,{asChild:!0,...i,children:o})});cs.displayName=us;var Pa="PopoverPortal",[vp,gp]=ls(Pa,{forceMount:void 0}),ms=e=>{const{__scopePopover:t,forceMount:r,children:n,container:a}=e,i=Je(Pa,t);return v.jsx(vp,{scope:t,forceMount:r,children:v.jsx(de,{present:r||i.open,children:v.jsx(nr,{asChild:!0,container:a,children:n})})})};ms.displayName=Pa;var It="PopoverContent",ds=u.forwardRef((e,t)=>{const r=gp(It,e.__scopePopover),{forceMount:n=r.forceMount,...a}=e,i=Je(It,e.__scopePopover);return v.jsx(de,{present:n||i.open,children:i.modal?v.jsx(fp,{...a,ref:t}):v.jsx(pp,{...a,ref:t})})});ds.displayName=It;var fp=u.forwardRef((e,t)=>{const r=Je(It,e.__scopePopover),n=u.useRef(null),a=z(t,n),i=u.useRef(!1);return u.useEffect(()=>{const l=n.current;if(l)return Aa(l)},[]),v.jsx(an,{as:it,allowPinchZoom:!0,children:v.jsx(vs,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,l=>{var o;l.preventDefault(),i.current||(o=r.triggerRef.current)==null||o.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,l=>{const o=l.detail.originalEvent,s=o.button===0&&o.ctrlKey===!0,c=o.button===2||s;i.current=c},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1})})})}),pp=u.forwardRef((e,t)=>{const r=Je(It,e.__scopePopover),n=u.useRef(!1),a=u.useRef(!1);return v.jsx(vs,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l,o;(l=e.onCloseAutoFocus)==null||l.call(e,i),i.defaultPrevented||(n.current||(o=r.triggerRef.current)==null||o.focus(),i.preventDefault()),n.current=!1,a.current=!1},onInteractOutside:i=>{var s,c;(s=e.onInteractOutside)==null||s.call(e,i),i.defaultPrevented||(n.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=i.target;((c=r.triggerRef.current)==null?void 0:c.contains(l))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}})}),vs=u.forwardRef((e,t)=>{const{__scopePopover:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:i,disableOutsidePointerEvents:l,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:m,...d}=e,g=Je(It,r),f=lr(r);return Ta(),v.jsx(rn,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:i,children:v.jsx(tr,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:m,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:c,onDismiss:()=>g.onOpenChange(!1),children:v.jsx(_a,{"data-state":ps(g.open),role:"dialog",id:g.contentId,...f,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),gs="PopoverClose",xp=u.forwardRef((e,t)=>{const{__scopePopover:r,...n}=e,a=Je(gs,r);return v.jsx(M.button,{type:"button",...n,ref:t,onClick:P(e.onClick,()=>a.onOpenChange(!1))})});xp.displayName=gs;var yp="PopoverArrow",fs=u.forwardRef((e,t)=>{const{__scopePopover:r,...n}=e,a=lr(r);return v.jsx(Sa,{...a,...n,ref:t})});fs.displayName=yp;function ps(e){return e?"open":"closed"}var xs=os,hp=cs,ys=ms,bp=ds,$p=fs;const hs=C(hp)`
    all: unset;
    width: fit-content;
`,La=C($p)``,bs=C(bp)`
    position: relative;
    background-color: ${e=>e.$bg??e.$colors.backgroundBox};
    ${La} {
        fill: ${e=>e.$bg??e.$colors.backgroundBox};
    }
`,kp=I.memo(I.forwardRef(({trigger:e,bg:t,$colors:r,triggerProps:n,portalProps:a,contentProps:i,arrowProps:l,...o},s)=>{const c=W(r);return v.jsxs(xs,{...o,children:[v.jsx(hs,{ref:s,...n,children:e}),v.jsx(ys,{...a,children:v.jsxs(bs,{$colors:c,$bg:t,sideOffset:8,...i,children:[o.children,v.jsx(La,{...l})]})})]})})),Ir={Root:xs,Portal:ys,Content:bs,Trigger:hs,Arrow:La};kp.__docgenInfo={description:"",methods:[],displayName:"BasePopup"};const wp=C(Ir.Content)`
    overflow: hidden;
    width: ${e=>e.$width??"260px"};
    height: ${e=>e.$height??"100%"};
    max-height: ${e=>e.$maxHeight??"300px"};
    ${e=>Zt({$colors:e.$colors,$boxBorderColor:e.$boxBorderColor,$boxShadowColor:e.$boxShadowColor,$boxShadowVariant:e.$boxShadowVariant,$boxRadiusVariant:e.$boxRadiusVariant,$styles:e.$styles.box})};
`,$s=C.div`
    position: relative;
    padding-right: 8px;
    svg {
        width: 20px;
        height: 20px;
    }
`,_p=C.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`,Sp=C.div`
    margin-left: 2px;
    width: 100%;
    font-size: ${e=>e.$styles.typography.h6};
    color: ${e=>e.$colors.title};
    border-bottom: 1px solid ${e=>e.$colors.disabled};
    ${e=>Ve({$boxPaddingVariant:e.$boxPaddingVariant,$styles:e.$styles.box,$boxDisplay:"inline-flex"})};
    ${$s} {
        svg {
            color: ${e=>e.$color??e.$colors.primaryItem};
        }
    }
`,Ip=C.div`
    position: relative;
    overflow: auto;
    display: flex;
    align-items: center;
    max-height: calc((${e=>e.$maxHeight??"300px"}) - 50px);
    margin: 4px 0 8px 2px;
    font-size: ${e=>e.$styles.typography.fontSizeGlobal};
    font-weight: ${e=>e.$styles.typography.fontWeightGlobal};
    color: ${e=>e.$colors.text};
    line-height: 20px;
    ${e=>Ve({$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box})};
    ${e=>Yr({$colors:e.$colors,$color:e.$color??e.$colors.primaryItem})}
`,Hp=I.memo(I.forwardRef(({icon:e,title:t,trigger:r,bg:n,color:a,width:i,height:l,maxHeight:o,boxPaddingVariant:s="p-1",boxGapVariant:c,boxBorderColor:m,boxShadowColor:d,boxShadowVariant:g="shd-1",boxRadiusVariant:f="br-1",$colors:x,$styles:p,triggerProps:h,portalProps:y,contentProps:b,headerProps:$,cardProps:k,iconProps:w,titleProps:H,...S},q)=>{const E=W(x),A=F(["mr","box","typography"],p);return v.jsxs(Ir.Root,{...S,children:[v.jsx(Ir.Trigger,{ref:q,...h,children:r}),v.jsx(Ir.Portal,{...y,children:v.jsxs(wp,{$colors:E,$styles:A,$bg:n,$boxBorderColor:m,$boxShadowColor:d,$boxShadowVariant:g,$boxRadiusVariant:f,$width:i,$height:l,$maxHeight:o,sideOffset:8,...b,children:[v.jsxs(Sp,{$colors:E,$styles:A,$color:a,$boxPaddingVariant:s,...$,children:[v.jsx($s,{...w,children:e}),v.jsx(_p,{...H,children:t})]}),v.jsx(Ip,{$colors:E,$styles:A,$color:a,$boxPaddingVariant:s,$boxGapVariant:c,$height:l,$maxHeight:o,...k,children:S.children})]})})]})}));Hp.__docgenInfo={description:"",methods:[],displayName:"SimplePopup",props:{boxPaddingVariant:{defaultValue:{value:"'p-1'",computed:!1},required:!1},boxShadowVariant:{defaultValue:{value:"'shd-1'",computed:!1},required:!1},boxRadiusVariant:{defaultValue:{value:"'br-1'",computed:!1},required:!1}}};var Ma="Dialog",[ks,th]=me(Ma),[Cp,Te]=ks(Ma),ws=e=>{const{__scopeDialog:t,children:r,open:n,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,o=u.useRef(null),s=u.useRef(null),[c=!1,m]=Ie({prop:n,defaultProp:a,onChange:i});return v.jsx(Cp,{scope:t,triggerRef:o,contentRef:s,contentId:Le(),titleId:Le(),descriptionId:Le(),open:c,onOpenChange:m,onOpenToggle:u.useCallback(()=>m(d=>!d),[m]),modal:l,children:r})};ws.displayName=Ma;var _s="DialogTrigger",qp=u.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=Te(_s,r),i=z(t,a.triggerRef);return v.jsx(M.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ja(a.open),...n,ref:i,onClick:P(e.onClick,a.onOpenToggle)})});qp.displayName=_s;var Va="DialogPortal",[Tp,Ss]=ks(Va,{forceMount:void 0}),Is=e=>{const{__scopeDialog:t,forceMount:r,children:n,container:a}=e,i=Te(Va,t);return v.jsx(Tp,{scope:t,forceMount:r,children:u.Children.map(n,l=>v.jsx(de,{present:r||i.open,children:v.jsx(nr,{asChild:!0,container:a,children:l})}))})};Is.displayName=Va;var Nr="DialogOverlay",Hs=u.forwardRef((e,t)=>{const r=Ss(Nr,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,i=Te(Nr,e.__scopeDialog);return i.modal?v.jsx(de,{present:n||i.open,children:v.jsx(Ap,{...a,ref:t})}):null});Hs.displayName=Nr;var Ap=u.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=Te(Nr,r);return v.jsx(an,{as:it,allowPinchZoom:!0,shards:[a.contentRef],children:v.jsx(M.div,{"data-state":ja(a.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),st="DialogContent",Cs=u.forwardRef((e,t)=>{const r=Ss(st,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,i=Te(st,e.__scopeDialog);return v.jsx(de,{present:n||i.open,children:i.modal?v.jsx(Ep,{...a,ref:t}):v.jsx(Rp,{...a,ref:t})})});Cs.displayName=st;var Ep=u.forwardRef((e,t)=>{const r=Te(st,e.__scopeDialog),n=u.useRef(null),a=z(t,r.contentRef,n);return u.useEffect(()=>{const i=n.current;if(i)return Aa(i)},[]),v.jsx(qs,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,o=l.button===0&&l.ctrlKey===!0;(l.button===2||o)&&i.preventDefault()}),onFocusOutside:P(e.onFocusOutside,i=>i.preventDefault())})}),Rp=u.forwardRef((e,t)=>{const r=Te(st,e.__scopeDialog),n=u.useRef(!1),a=u.useRef(!1);return v.jsx(qs,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l,o;(l=e.onCloseAutoFocus)==null||l.call(e,i),i.defaultPrevented||(n.current||(o=r.triggerRef.current)==null||o.focus(),i.preventDefault()),n.current=!1,a.current=!1},onInteractOutside:i=>{var s,c;(s=e.onInteractOutside)==null||s.call(e,i),i.defaultPrevented||(n.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=i.target;((c=r.triggerRef.current)==null?void 0:c.contains(l))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}})}),qs=u.forwardRef((e,t)=>{const{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:i,...l}=e,o=Te(st,r),s=u.useRef(null),c=z(t,s);return Ta(),v.jsxs(v.Fragment,{children:[v.jsx(rn,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:i,children:v.jsx(tr,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":ja(o.open),...l,ref:c,onDismiss:()=>o.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(Vp,{titleId:o.titleId}),v.jsx(jp,{contentRef:s,descriptionId:o.descriptionId})]})]})}),Na="DialogTitle",Pp=u.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=Te(Na,r);return v.jsx(M.h2,{id:a.titleId,...n,ref:t})});Pp.displayName=Na;var Ts="DialogDescription",Lp=u.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=Te(Ts,r);return v.jsx(M.p,{id:a.descriptionId,...n,ref:t})});Lp.displayName=Ts;var As="DialogClose",Mp=u.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=Te(As,r);return v.jsx(M.button,{type:"button",...n,ref:t,onClick:P(e.onClick,()=>a.onOpenChange(!1))})});Mp.displayName=As;function ja(e){return e?"open":"closed"}var Es="DialogTitleWarning",[rh,Rs]=Km(Es,{contentName:st,titleName:Na,docsSlug:"dialog"}),Vp=({titleId:e})=>{const t=Rs(Es),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return u.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Np="DialogDescriptionWarning",jp=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rs(Np).contentName}}.`;return u.useEffect(()=>{var i;const a=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Dp=ws,Op=Is,zp=Hs,Bp=Cs;const Fp=C(zp)`
    position: fixed;
    inset: 0;
    animation: overlayShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes overlayShow_BaseDialog {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`,Wp=C(Bp)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: contentShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes contentShow_BaseDialog {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,Ps={Overlay:Fp,Content:Wp},Gp=C(Ps.Overlay)`
    backdrop-filter: blur(${e=>e.$overlayBlur??"0px"});
    background-color: ${e=>T({cs:e.$colors,color:e.$overlayColor??e.$colors.omega,opacity:"90"})};
`,Up=C(Ps.Content)`
    background-color: ${e=>e.$bg??e.$colors.backgroundBox};
    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box})};
    ${e=>Zt({$colors:e.$colors,$boxBorderColor:e.$boxBorderColor,$boxShadowColor:e.$boxShadowColor,$boxShadowVariant:e.$boxShadowVariant,$boxRadiusVariant:e.$boxRadiusVariant,$styles:e.$styles.box})};
`,Xp=I.memo(I.forwardRef(({bg:e,boxBorderColor:t,boxShadowColor:r,boxShadowVariant:n,boxRadiusVariant:a="br-2",boxPaddingVariant:i="p-3",boxWidthVariant:l,boxGapVariant:o,overlayBlur:s,overlayColor:c,$colors:m,$styles:d,overlayProps:g,portalProps:f,contentProps:x,...p},h)=>{const y=W(m),b=F(["box"],d);return v.jsx(Dp,{...p,children:v.jsx(Op,{...f,children:v.jsx(Gp,{$colors:y,$styles:b,$overlayColor:c,$overlayBlur:s,...g,children:v.jsx(Up,{ref:h,$colors:y,$styles:b,$boxPaddingVariant:i,$bg:e,$boxBorderColor:t,$boxShadowColor:r,$boxShadowVariant:n,$boxRadiusVariant:a,$boxWidthVariant:l,$boxGapVariant:o,...x,children:p.children})})})})}));Xp.__docgenInfo={description:"",methods:[],displayName:"BaseDialog",props:{boxRadiusVariant:{defaultValue:{value:"'br-2'",computed:!1},required:!1},boxPaddingVariant:{defaultValue:{value:"'p-3'",computed:!1},required:!1}}};const Yp=C(ma.Text)`
    ${e=>ne(e.$styles.mr,e.$mr)};
    ${e=>e.$isEllipsis&&_`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`,Kp=I.memo(({as:e="p",children:t,mr:r,color:n,isEllipsis:a,$colors:i,$styles:l,...o})=>{const s=W(i),c=F(["typography","mr"],l);return v.jsx(Yp,{$mr:r,as:e,$colors:s,$styles:c,$isEllipsis:a,$color:n,...o,children:t})});Kp.__docgenInfo={description:"",methods:[],displayName:"BaseParagraph",props:{mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},isEllipsis:{required:!1,tsType:{name:"boolean"},description:""},$styles:{required:!1,tsType:{name:"intersection",raw:`{
    mr: TypeSSMR;
} & TBaseText.Styles`,elements:[{name:"signature",type:"object",raw:`{
    mr: TypeSSMR;
}`,signature:{properties:[{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},{name:"TBaseText.Styles"}]},description:""},as:{defaultValue:{value:"'p'",computed:!1},required:!1}}};const Zp={h1:e=>e.h1,h2:e=>e.h2,h3:e=>e.h3,h4:e=>e.h4,h5:e=>e.h5,h6:e=>e.h6},Qp=C.h1`
    font-size: ${e=>Zp[e.$as](e.$styles.typography)};
    font-weight: ${e=>e.$styles.typography.fontWeightTitle};
    color: ${e=>e.$color??e.$colors.title};
    line-height: normal;
    ${e=>ne(e.$styles.mr,e.$mr)};
    ${e=>e.$isEllipsis&&_`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`,Jp=I.memo(({mr:e,as:t="h3",color:r,isEllipsis:n,$colors:a,$styles:i,...l})=>{const o=W(a),s=F(["typography","mr"],i);return v.jsx(Qp,{as:t,$as:t,$mr:e,$isEllipsis:n,$colors:o,$styles:s,$color:r,...l,children:l.children})});Jp.__docgenInfo={description:"",methods:[],displayName:"BaseTitle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:""},isEllipsis:{required:!1,tsType:{name:"boolean"},description:""},mr:{required:!1,tsType:{name:"union",raw:`| 'm-1'
| 'm-2'
| 'm-3'
| 'm-4'
| 'm-5'
| 'm-6'
| 'm-7'
| 'm-8'
| 'm-9'
| 'm-10'
| 'm-11'
| 'm-12'
| 'mt-1'
| 'mt-2'
| 'mt-3'
| 'mt-4'
| 'mt-5'
| 'mt-6'
| 'mt-7'
| 'mt-8'
| 'mt-9'
| 'mt-10'
| 'mt-11'
| 'mt-12'
| 'mb-1'
| 'mb-2'
| 'mb-3'
| 'mb-4'
| 'mb-5'
| 'mb-6'
| 'mb-7'
| 'mb-8'
| 'mb-9'
| 'mb-10'
| 'mb-11'
| 'mb-12'
| 'ml-1'
| 'ml-2'
| 'ml-3'
| 'ml-4'
| 'ml-5'
| 'ml-6'
| 'ml-7'
| 'ml-8'
| 'ml-9'
| 'ml-10'
| 'ml-11'
| 'ml-12'
| 'mr-1'
| 'mr-2'
| 'mr-3'
| 'mr-4'
| 'mr-5'
| 'mr-6'
| 'mr-7'
| 'mr-8'
| 'mr-9'
| 'mr-10'
| 'mr-11'
| 'mr-12'
| 'mx-1'
| 'mx-2'
| 'mx-3'
| 'mx-4'
| 'mx-5'
| 'mx-6'
| 'mx-7'
| 'mx-8'
| 'mx-9'
| 'mx-10'
| 'mx-11'
| 'mx-12'
| 'my-1'
| 'my-2'
| 'my-3'
| 'my-4'
| 'my-5'
| 'my-6'
| 'my-7'
| 'my-8'
| 'my-9'
| 'my-10'
| 'my-11'
| 'my-12'`,elements:[{name:"literal",value:"'m-1'"},{name:"literal",value:"'m-2'"},{name:"literal",value:"'m-3'"},{name:"literal",value:"'m-4'"},{name:"literal",value:"'m-5'"},{name:"literal",value:"'m-6'"},{name:"literal",value:"'m-7'"},{name:"literal",value:"'m-8'"},{name:"literal",value:"'m-9'"},{name:"literal",value:"'m-10'"},{name:"literal",value:"'m-11'"},{name:"literal",value:"'m-12'"},{name:"literal",value:"'mt-1'"},{name:"literal",value:"'mt-2'"},{name:"literal",value:"'mt-3'"},{name:"literal",value:"'mt-4'"},{name:"literal",value:"'mt-5'"},{name:"literal",value:"'mt-6'"},{name:"literal",value:"'mt-7'"},{name:"literal",value:"'mt-8'"},{name:"literal",value:"'mt-9'"},{name:"literal",value:"'mt-10'"},{name:"literal",value:"'mt-11'"},{name:"literal",value:"'mt-12'"},{name:"literal",value:"'mb-1'"},{name:"literal",value:"'mb-2'"},{name:"literal",value:"'mb-3'"},{name:"literal",value:"'mb-4'"},{name:"literal",value:"'mb-5'"},{name:"literal",value:"'mb-6'"},{name:"literal",value:"'mb-7'"},{name:"literal",value:"'mb-8'"},{name:"literal",value:"'mb-9'"},{name:"literal",value:"'mb-10'"},{name:"literal",value:"'mb-11'"},{name:"literal",value:"'mb-12'"},{name:"literal",value:"'ml-1'"},{name:"literal",value:"'ml-2'"},{name:"literal",value:"'ml-3'"},{name:"literal",value:"'ml-4'"},{name:"literal",value:"'ml-5'"},{name:"literal",value:"'ml-6'"},{name:"literal",value:"'ml-7'"},{name:"literal",value:"'ml-8'"},{name:"literal",value:"'ml-9'"},{name:"literal",value:"'ml-10'"},{name:"literal",value:"'ml-11'"},{name:"literal",value:"'ml-12'"},{name:"literal",value:"'mr-1'"},{name:"literal",value:"'mr-2'"},{name:"literal",value:"'mr-3'"},{name:"literal",value:"'mr-4'"},{name:"literal",value:"'mr-5'"},{name:"literal",value:"'mr-6'"},{name:"literal",value:"'mr-7'"},{name:"literal",value:"'mr-8'"},{name:"literal",value:"'mr-9'"},{name:"literal",value:"'mr-10'"},{name:"literal",value:"'mr-11'"},{name:"literal",value:"'mr-12'"},{name:"literal",value:"'mx-1'"},{name:"literal",value:"'mx-2'"},{name:"literal",value:"'mx-3'"},{name:"literal",value:"'mx-4'"},{name:"literal",value:"'mx-5'"},{name:"literal",value:"'mx-6'"},{name:"literal",value:"'mx-7'"},{name:"literal",value:"'mx-8'"},{name:"literal",value:"'mx-9'"},{name:"literal",value:"'mx-10'"},{name:"literal",value:"'mx-11'"},{name:"literal",value:"'mx-12'"},{name:"literal",value:"'my-1'"},{name:"literal",value:"'my-2'"},{name:"literal",value:"'my-3'"},{name:"literal",value:"'my-4'"},{name:"literal",value:"'my-5'"},{name:"literal",value:"'my-6'"},{name:"literal",value:"'my-7'"},{name:"literal",value:"'my-8'"},{name:"literal",value:"'my-9'"},{name:"literal",value:"'my-10'"},{name:"literal",value:"'my-11'"},{name:"literal",value:"'my-12'"}]},description:""},$colors:{required:!1,tsType:{name:"intersection",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
}`,elements:[{name:"signature",type:"object",raw:`{
    primary: Hex;
    secondary: Hex;

    //other
    lightElem: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundWarning: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omega: Hex;
}`,signature:{properties:[{key:"primary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"secondary",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"lightElem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"primaryItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"successItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"infoItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"errorItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"warningItemActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"background",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundBox",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundTooltip",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"disabled",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"shadowColor",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundSuccess",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundError",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundInfo",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"backgroundWarning",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"title",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"text",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"textItem",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"link",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"linkActive",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"prompt",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"alpha",value:{name:"literal",value:"`#${string}`",required:!0}},{key:"omega",value:{name:"literal",value:"`#${string}`",required:!0}}]}},{name:"signature",type:"object",raw:`{
    [key: string]: Hex;
}`,signature:{properties:[{key:{name:"string"},value:{name:"literal",value:"`#${string}`",required:!0}}]}}]},description:""},$styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    typography: TypeSSTypography;
    mr: TypeSSMR;
}`,signature:{properties:[{key:"typography",value:{name:"signature",type:"object",raw:`{
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
}`,signature:{properties:[{key:"fontSizeItem",value:{name:"string",required:!0}},{key:"fontSizeGlobal",value:{name:"string",required:!0}},{key:"h1",value:{name:"string",required:!0}},{key:"h2",value:{name:"string",required:!0}},{key:"h3",value:{name:"string",required:!0}},{key:"h4",value:{name:"string",required:!0}},{key:"h5",value:{name:"string",required:!0}},{key:"h6",value:{name:"string",required:!0}},{key:"fontWeightTitle",value:{name:"string",required:!0}},{key:"fontWeightItem",value:{name:"string",required:!0}},{key:"fontWeightGlobal",value:{name:"string",required:!0}}]},required:!0}},{key:"mr",value:{name:"signature",type:"object",raw:`{
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
}`,signature:{properties:[{key:"margin_1",value:{name:"string",required:!0}},{key:"margin_2",value:{name:"string",required:!0}},{key:"margin_3",value:{name:"string",required:!0}},{key:"margin_4",value:{name:"string",required:!0}},{key:"margin_5",value:{name:"string",required:!0}},{key:"margin_6",value:{name:"string",required:!0}},{key:"margin_7",value:{name:"string",required:!0}},{key:"margin_8",value:{name:"string",required:!0}},{key:"margin_9",value:{name:"string",required:!0}},{key:"margin_10",value:{name:"string",required:!0}},{key:"margin_11",value:{name:"string",required:!0}},{key:"margin_12",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h3'",computed:!1}}}};var Ls=["PageUp","PageDown"],Ms=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Vs={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Lt="Slider",[Zn,ex,tx]=qa(Lt),[Ns,nh]=me(Lt,[tx]),[rx,un]=Ns(Lt),js=u.forwardRef((e,t)=>{const{name:r,min:n=0,max:a=100,step:i=1,orientation:l="horizontal",disabled:o=!1,minStepsBetweenThumbs:s=0,defaultValue:c=[n],value:m,onValueChange:d=()=>{},onValueCommit:g=()=>{},inverted:f=!1,...x}=e,p=u.useRef(new Set),h=u.useRef(0),b=l==="horizontal"?nx:ax,[$=[],k]=Ie({prop:m,defaultProp:c,onChange:A=>{var N;(N=[...p.current][h.current])==null||N.focus(),d(A)}}),w=u.useRef($);function H(A){const j=ux($,A);E(A,j)}function S(A){E(A,h.current)}function q(){const A=w.current[h.current];$[h.current]!==A&&g($)}function E(A,j,{commit:N}={commit:!1}){const Y=vx(i),X=gx(Math.round((A-n)/i)*i+n,Y),D=Xt(X,[n,a]);k((O=[])=>{const L=ox(O,D,j);if(dx(L,s*i)){h.current=L.indexOf(D);const K=String(L)!==String(O);return K&&N&&g(L),K?L:O}else return O})}return v.jsx(rx,{scope:e.__scopeSlider,name:r,disabled:o,min:n,max:a,valueIndexToChangeRef:h,thumbs:p.current,values:$,orientation:l,children:v.jsx(Zn.Provider,{scope:e.__scopeSlider,children:v.jsx(Zn.Slot,{scope:e.__scopeSlider,children:v.jsx(b,{"aria-disabled":o,"data-disabled":o?"":void 0,...x,ref:t,onPointerDown:P(x.onPointerDown,()=>{o||(w.current=$)}),min:n,max:a,inverted:f,onSlideStart:o?void 0:H,onSlideMove:o?void 0:S,onSlideEnd:o?void 0:q,onHomeKeyDown:()=>!o&&E(n,0,{commit:!0}),onEndKeyDown:()=>!o&&E(a,$.length-1,{commit:!0}),onStepKeyDown:({event:A,direction:j})=>{if(!o){const X=Ls.includes(A.key)||A.shiftKey&&Ms.includes(A.key)?10:1,D=h.current,O=$[D],L=i*X*j;E(O+L,D,{commit:!0})}}})})})})});js.displayName=Lt;var[Ds,Os]=Ns(Lt,{startEdge:"left",endEdge:"right",size:"width",direction:1}),nx=u.forwardRef((e,t)=>{const{min:r,max:n,dir:a,inverted:i,onSlideStart:l,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...m}=e,[d,g]=u.useState(null),f=z(t,$=>g($)),x=u.useRef(),p=Rt(a),h=p==="ltr",y=h&&!i||!h&&i;function b($){const k=x.current||d.getBoundingClientRect(),w=[0,k.width],S=Da(w,y?[r,n]:[n,r]);return x.current=k,S($-k.left)}return v.jsx(Ds,{scope:e.__scopeSlider,startEdge:y?"left":"right",endEdge:y?"right":"left",direction:y?1:-1,size:"width",children:v.jsx(zs,{dir:p,"data-orientation":"horizontal",...m,ref:f,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:$=>{const k=b($.clientX);l==null||l(k)},onSlideMove:$=>{const k=b($.clientX);o==null||o(k)},onSlideEnd:()=>{x.current=void 0,s==null||s()},onStepKeyDown:$=>{const w=Vs[y?"from-left":"from-right"].includes($.key);c==null||c({event:$,direction:w?-1:1})}})})}),ax=u.forwardRef((e,t)=>{const{min:r,max:n,inverted:a,onSlideStart:i,onSlideMove:l,onSlideEnd:o,onStepKeyDown:s,...c}=e,m=u.useRef(null),d=z(t,m),g=u.useRef(),f=!a;function x(p){const h=g.current||m.current.getBoundingClientRect(),y=[0,h.height],$=Da(y,f?[n,r]:[r,n]);return g.current=h,$(p-h.top)}return v.jsx(Ds,{scope:e.__scopeSlider,startEdge:f?"bottom":"top",endEdge:f?"top":"bottom",size:"height",direction:f?1:-1,children:v.jsx(zs,{"data-orientation":"vertical",...c,ref:d,style:{...c.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:p=>{const h=x(p.clientY);i==null||i(h)},onSlideMove:p=>{const h=x(p.clientY);l==null||l(h)},onSlideEnd:()=>{g.current=void 0,o==null||o()},onStepKeyDown:p=>{const y=Vs[f?"from-bottom":"from-top"].includes(p.key);s==null||s({event:p,direction:y?-1:1})}})})}),zs=u.forwardRef((e,t)=>{const{__scopeSlider:r,onSlideStart:n,onSlideMove:a,onSlideEnd:i,onHomeKeyDown:l,onEndKeyDown:o,onStepKeyDown:s,...c}=e,m=un(Lt,r);return v.jsx(M.span,{...c,ref:t,onKeyDown:P(e.onKeyDown,d=>{d.key==="Home"?(l(d),d.preventDefault()):d.key==="End"?(o(d),d.preventDefault()):Ls.concat(Ms).includes(d.key)&&(s(d),d.preventDefault())}),onPointerDown:P(e.onPointerDown,d=>{const g=d.target;g.setPointerCapture(d.pointerId),d.preventDefault(),m.thumbs.has(g)?g.focus():n(d)}),onPointerMove:P(e.onPointerMove,d=>{d.target.hasPointerCapture(d.pointerId)&&a(d)}),onPointerUp:P(e.onPointerUp,d=>{const g=d.target;g.hasPointerCapture(d.pointerId)&&(g.releasePointerCapture(d.pointerId),i(d))})})}),Bs="SliderTrack",Fs=u.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,a=un(Bs,r);return v.jsx(M.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...n,ref:t})});Fs.displayName=Bs;var Qn="SliderRange",Ws=u.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,a=un(Qn,r),i=Os(Qn,r),l=u.useRef(null),o=z(t,l),s=a.values.length,c=a.values.map(g=>Us(g,a.min,a.max)),m=s>1?Math.min(...c):0,d=100-Math.max(...c);return v.jsx(M.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...n,ref:o,style:{...e.style,[i.startEdge]:m+"%",[i.endEdge]:d+"%"}})});Ws.displayName=Qn;var Jn="SliderThumb",Gs=u.forwardRef((e,t)=>{const r=ex(e.__scopeSlider),[n,a]=u.useState(null),i=z(t,o=>a(o)),l=u.useMemo(()=>n?r().findIndex(o=>o.ref.current===n):-1,[r,n]);return v.jsx(ix,{...e,ref:i,index:l})}),ix=u.forwardRef((e,t)=>{const{__scopeSlider:r,index:n,name:a,...i}=e,l=un(Jn,r),o=Os(Jn,r),[s,c]=u.useState(null),m=z(t,b=>c(b)),d=s?!!s.closest("form"):!0,g=er(s),f=l.values[n],x=f===void 0?0:Us(f,l.min,l.max),p=sx(n,l.values.length),h=g==null?void 0:g[o.size],y=h?cx(h,x,o.direction):0;return u.useEffect(()=>{if(s)return l.thumbs.add(s),()=>{l.thumbs.delete(s)}},[s,l.thumbs]),v.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[o.startEdge]:`calc(${x}% + ${y}px)`},children:[v.jsx(Zn.ItemSlot,{scope:e.__scopeSlider,children:v.jsx(M.span,{role:"slider","aria-label":e["aria-label"]||p,"aria-valuemin":l.min,"aria-valuenow":f,"aria-valuemax":l.max,"aria-orientation":l.orientation,"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,tabIndex:l.disabled?void 0:0,...i,ref:m,style:f===void 0?{display:"none"}:e.style,onFocus:P(e.onFocus,()=>{l.valueIndexToChangeRef.current=n})})}),d&&v.jsx(lx,{name:a??(l.name?l.name+(l.values.length>1?"[]":""):void 0),value:f},n)]})});Gs.displayName=Jn;var lx=e=>{const{value:t,...r}=e,n=u.useRef(null),a=Jt(t);return u.useEffect(()=>{const i=n.current,l=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(l,"value").set;if(a!==t&&s){const c=new Event("input",{bubbles:!0});s.call(i,t),i.dispatchEvent(c)}},[a,t]),v.jsx("input",{style:{display:"none"},...r,ref:n,defaultValue:t})};function ox(e=[],t,r){const n=[...e];return n[r]=t,n.sort((a,i)=>a-i)}function Us(e,t,r){const i=100/(r-t)*(e-t);return Xt(i,[0,100])}function sx(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function ux(e,t){if(e.length===1)return 0;const r=e.map(a=>Math.abs(a-t)),n=Math.min(...r);return r.indexOf(n)}function cx(e,t,r){const n=e/2,i=Da([0,50],[0,n]);return(n-i(t)*r)*r}function mx(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function dx(e,t){if(t>0){const r=mx(e);return Math.min(...r)>=t}return!0}function Da(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function vx(e){return(String(e).split(".")[1]||"").length}function gx(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}var fx=js,px=Fs,xx=Ws,yx=Gs;const Xs=C(px)`
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 1px;
    }
    &[data-orientation='horizontal'] {
        height: 1px;
    }
`,Ys=C(xx)`
    position: absolute;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 2px;
    }
    &[data-orientation='horizontal'] {
        height: 2px;
    }
`,Ks=C(yx)`
    display: block;
    border-radius: 50%;
`,xr={[R.L]:e=>e.thumbSize_L,[R.M]:e=>e.thumbSize_M},hx=C(fx)`
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}}
    &[data-orientation='vertical'] {
        flex-direction: column;
        width: ${e=>xr[e.$sizeVariant](e.$styles.slider)};
        height: ${e=>e.$length??"200px"};
    }
    &[data-orientation='horizontal'] {
        width: ${e=>e.$length??"200px"};
        height: ${e=>xr[e.$sizeVariant](e.$styles.slider)};
    }
    ${Xs} {
        background-color: ${e=>e.$colors.disabled};
    }
    ${Ys} {
        background-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
    }
    ${Ks} {
        background-color: ${e=>e.disabled?e.$colors.disabled:e.$colors.backgroundBox};
        width: ${e=>xr[e.$sizeVariant](e.$styles.slider)};
        height: ${e=>xr[e.$sizeVariant](e.$styles.slider)};
        border: 1px solid ${e=>e.$colors.disabled};
        &:not([disabled]):focus {
            outline: none;
            border: 2px solid
                ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:!0})};
        }
    }
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,bx=I.memo(I.forwardRef(({mr:e,color:t,length:r,blocked:n,colorVariant:a=le.DEFAULT,sizeVariant:i=R.L,$colors:l,$styles:o,trackProps:s,rangeProps:c,thumbProps:m,...d},g)=>{const f=W(l),x=F(["slider","mr"],o);return v.jsxs(hx,{ref:g,$color:t,$mr:e,$length:r,$colors:f,$styles:x,$blocked:n,$colorVariant:a,$sizeVariant:i,...d,children:[v.jsx(Xs,{...s,children:v.jsx(Ys,{...c})}),d.defaultValue&&d.defaultValue.map((p,h)=>v.jsx(Ks,{...m},h))]})}));bx.__docgenInfo={description:"",methods:[],displayName:"BaseSlider",props:{colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1}}};var Oa="Avatar",[$x,ah]=me(Oa),[kx,Zs]=$x(Oa),Qs=u.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[a,i]=u.useState("idle");return v.jsx(kx,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:v.jsx(M.span,{...n,ref:t})})});Qs.displayName=Oa;var Js="AvatarImage",eu=u.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:a=()=>{},...i}=e,l=Zs(Js,r),o=wx(n),s=se(c=>{a(c),l.onImageLoadingStatusChange(c)});return ue(()=>{o!=="idle"&&s(o)},[o,s]),o==="loaded"?v.jsx(M.img,{...i,ref:t,src:n}):null});eu.displayName=Js;var tu="AvatarFallback",ru=u.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...a}=e,i=Zs(tu,r),[l,o]=u.useState(n===void 0);return u.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>o(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?v.jsx(M.span,{...a,ref:t}):null});ru.displayName=tu;function wx(e){const[t,r]=u.useState("idle");return ue(()=>{if(!e){r("error");return}let n=!0;const a=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),a.onload=i("loaded"),a.onerror=i("error"),a.src=e,()=>{n=!1}},[e]),t}var _x=Qs,Sx=eu,Ix=ru,Ft=(e=>(e.S="small",e.M="medium",e.L="large",e))(Ft||{});const Hx={[Ft.S]:e=>_`
        width: ${e.avatarSize_1};
        min-width: ${e.avatarSize_1};
        height: ${e.avatarSize_1};
        font-size: ${e.avatarFontSize_1};
    `,[Ft.M]:e=>_`
        width: ${e.avatarSize_2};
        min-width: ${e.avatarSize_2};
        height: ${e.avatarSize_2};
        font-size: ${e.avatarFontSize_2};
    `,[Ft.L]:e=>_`
        width: ${e.avatarSize_3};
        min-width: ${e.avatarSize_3};
        height: ${e.avatarSize_3};
        font-size: ${e.avatarFontSize_3};
    `},nu=C(Ix)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-transform: uppercase;
`,Cx=C(Sx)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`,qx=C(_x)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    border-radius: 100%;
    ${e=>Hx[e.$sizeVariant](e.$styles.avatar)}
    ${nu} {
        background-color: ${e=>e.$bg??e.$colors.lightElem};
        color: ${e=>e.$color??e.$colors.textItem};
        font-weight: ${e=>e.$styles.avatar.avatarFontWeight};
    }
    ${e=>{var t;return ne((t=e.$styles)==null?void 0:t.mr,e.$mr)}};
`,Tx=I.memo(I.forwardRef(({mr:e,color:t,bg:r,sizeVariant:n=Ft.L,rootProps:a,fallbackProps:i,$colors:l,$styles:o,...s},c)=>{const m=W(l),d=F(["avatar","mr"],o),g=u.useCallback(f=>{const x=f==null?void 0:f.split(" ").slice(0,2);return x==null?void 0:x.map(p=>p.slice(0,Math.min(1,p.length))).join("")},[]);return v.jsxs(qx,{ref:c,$colors:m,$styles:d,$color:t,style:s.style,$mr:e,$bg:r,$sizeVariant:n,...a,children:[v.jsx(Cx,{...s}),v.jsx(nu,{delayMs:600,...i,children:g(s.alt)})]})}));Tx.__docgenInfo={description:"",methods:[],displayName:"BaseAvatar",props:{sizeVariant:{defaultValue:{value:"VSA.L",computed:!0},required:!1}}};var Hn="rovingFocusGroup.onEntryFocus",Ax={bubbles:!1,cancelable:!0},cn="RovingFocusGroup",[ea,au,Ex]=qa(cn),[Rx,mn]=me(cn,[Ex]),[Px,Lx]=Rx(cn),iu=u.forwardRef((e,t)=>v.jsx(ea.Provider,{scope:e.__scopeRovingFocusGroup,children:v.jsx(ea.Slot,{scope:e.__scopeRovingFocusGroup,children:v.jsx(Mx,{...e,ref:t})})}));iu.displayName=cn;var Mx=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:a=!1,dir:i,currentTabStopId:l,defaultCurrentTabStopId:o,onCurrentTabStopIdChange:s,onEntryFocus:c,preventScrollOnEntryFocus:m=!1,...d}=e,g=u.useRef(null),f=z(t,g),x=Rt(i),[p=null,h]=Ie({prop:l,defaultProp:o,onChange:s}),[y,b]=u.useState(!1),$=se(c),k=au(r),w=u.useRef(!1),[H,S]=u.useState(0);return u.useEffect(()=>{const q=g.current;if(q)return q.addEventListener(Hn,$),()=>q.removeEventListener(Hn,$)},[$]),v.jsx(Px,{scope:r,orientation:n,dir:x,loop:a,currentTabStopId:p,onItemFocus:u.useCallback(q=>h(q),[h]),onItemShiftTab:u.useCallback(()=>b(!0),[]),onFocusableItemAdd:u.useCallback(()=>S(q=>q+1),[]),onFocusableItemRemove:u.useCallback(()=>S(q=>q-1),[]),children:v.jsx(M.div,{tabIndex:y||H===0?-1:0,"data-orientation":n,...d,ref:f,style:{outline:"none",...e.style},onMouseDown:P(e.onMouseDown,()=>{w.current=!0}),onFocus:P(e.onFocus,q=>{const E=!w.current;if(q.target===q.currentTarget&&E&&!y){const A=new CustomEvent(Hn,Ax);if(q.currentTarget.dispatchEvent(A),!A.defaultPrevented){const j=k().filter(O=>O.focusable),N=j.find(O=>O.active),Y=j.find(O=>O.id===p),D=[N,Y,...j].filter(Boolean).map(O=>O.ref.current);su(D,m)}}w.current=!1}),onBlur:P(e.onBlur,()=>b(!1))})})}),lu="RovingFocusGroupItem",ou=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:a=!1,tabStopId:i,...l}=e,o=Le(),s=i||o,c=Lx(lu,r),m=c.currentTabStopId===s,d=au(r),{onFocusableItemAdd:g,onFocusableItemRemove:f}=c;return u.useEffect(()=>{if(n)return g(),()=>f()},[n,g,f]),v.jsx(ea.ItemSlot,{scope:r,id:s,focusable:n,active:a,children:v.jsx(M.span,{tabIndex:m?0:-1,"data-orientation":c.orientation,...l,ref:t,onMouseDown:P(e.onMouseDown,x=>{n?c.onItemFocus(s):x.preventDefault()}),onFocus:P(e.onFocus,()=>c.onItemFocus(s)),onKeyDown:P(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){c.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const p=jx(x,c.orientation,c.dir);if(p!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let y=d().filter(b=>b.focusable).map(b=>b.ref.current);if(p==="last")y.reverse();else if(p==="prev"||p==="next"){p==="prev"&&y.reverse();const b=y.indexOf(x.currentTarget);y=c.loop?Dx(y,b+1):y.slice(b+1)}setTimeout(()=>su(y))}})})})});ou.displayName=lu;var Vx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nx(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function jx(e,t,r){const n=Nx(e.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Vx[n]}function su(e,t=!1){const r=document.activeElement;for(const n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}function Dx(e,t){return e.map((r,n)=>e[(t+n)%e.length])}var uu=iu,cu=ou,za="Radio",[Ox,mu]=me(za),[zx,Bx]=Ox(za),du=u.forwardRef((e,t)=>{const{__scopeRadio:r,name:n,checked:a=!1,required:i,disabled:l,value:o="on",onCheck:s,...c}=e,[m,d]=u.useState(null),g=z(t,p=>d(p)),f=u.useRef(!1),x=m?!!m.closest("form"):!0;return v.jsxs(zx,{scope:r,checked:a,disabled:l,children:[v.jsx(M.button,{type:"button",role:"radio","aria-checked":a,"data-state":fu(a),"data-disabled":l?"":void 0,disabled:l,value:o,...c,ref:g,onClick:P(e.onClick,p=>{a||s==null||s(),x&&(f.current=p.isPropagationStopped(),f.current||p.stopPropagation())})}),x&&v.jsx(Fx,{control:m,bubbles:!f.current,name:n,value:o,checked:a,required:i,disabled:l,style:{transform:"translateX(-100%)"}})]})});du.displayName=za;var vu="RadioIndicator",gu=u.forwardRef((e,t)=>{const{__scopeRadio:r,forceMount:n,...a}=e,i=Bx(vu,r);return v.jsx(de,{present:n||i.checked,children:v.jsx(M.span,{"data-state":fu(i.checked),"data-disabled":i.disabled?"":void 0,...a,ref:t})})});gu.displayName=vu;var Fx=e=>{const{control:t,checked:r,bubbles:n=!0,...a}=e,i=u.useRef(null),l=Jt(r),o=er(t);return u.useEffect(()=>{const s=i.current,c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"checked").set;if(l!==r&&d){const g=new Event("click",{bubbles:n});d.call(s,r),s.dispatchEvent(g)}},[l,r,n]),v.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function fu(e){return e?"checked":"unchecked"}var Wx=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Ba="RadioGroup",[Gx,ih]=me(Ba,[mn,mu]),pu=mn(),xu=mu(),[Ux,Xx]=Gx(Ba),yu=u.forwardRef((e,t)=>{const{__scopeRadioGroup:r,name:n,defaultValue:a,value:i,required:l=!1,disabled:o=!1,orientation:s,dir:c,loop:m=!0,onValueChange:d,...g}=e,f=pu(r),x=Rt(c),[p,h]=Ie({prop:i,defaultProp:a,onChange:d});return v.jsx(Ux,{scope:r,name:n,required:l,disabled:o,value:p,onValueChange:h,children:v.jsx(uu,{asChild:!0,...f,orientation:s,dir:x,loop:m,children:v.jsx(M.div,{role:"radiogroup","aria-required":l,"aria-orientation":s,"data-disabled":o?"":void 0,dir:x,...g,ref:t})})})});yu.displayName=Ba;var hu="RadioGroupItem",bu=u.forwardRef((e,t)=>{const{__scopeRadioGroup:r,disabled:n,...a}=e,i=Xx(hu,r),l=i.disabled||n,o=pu(r),s=xu(r),c=u.useRef(null),m=z(t,c),d=i.value===a.value,g=u.useRef(!1);return u.useEffect(()=>{const f=p=>{Wx.includes(p.key)&&(g.current=!0)},x=()=>g.current=!1;return document.addEventListener("keydown",f),document.addEventListener("keyup",x),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",x)}},[]),v.jsx(cu,{asChild:!0,...o,focusable:!l,active:d,children:v.jsx(du,{disabled:l,required:i.required,checked:d,...s,...a,name:i.name,ref:m,onCheck:()=>i.onValueChange(a.value),onKeyDown:P(f=>{f.key==="Enter"&&f.preventDefault()}),onFocus:P(a.onFocus,()=>{var f;g.current&&((f=c.current)==null||f.click())})})})});bu.displayName=hu;var Yx="RadioGroupIndicator",$u=u.forwardRef((e,t)=>{const{__scopeRadioGroup:r,...n}=e,a=xu(r);return v.jsx(gu,{...a,...n,ref:t})});$u.displayName=Yx;var Kx=yu,Zx=bu,Qx=$u;const Jx={[Ue.HORIZONTAL]:_`
        flex-direction: row;
        align-items: center;
    `,[Ue.VERTICAL]:_`
        flex-direction: column;
        align-items: start;
    `},ey=C(Kx)`
    position: relative;
    display: flex;
    ${e=>Ur[e.$boxGapVariant](e.$styles.box)};
    ${e=>Jx[e.$orientation]};
`,ty=C.div`
    position: relative;
    display: grid;
    ${e=>Ur[e.$boxGapVariantLabel](e.$styles.box)};
    ${e=>ne(e.$styles.mr,e.$mr)}
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,ry=I.memo(I.forwardRef(({mr:e,blocked:t,$colors:r,$styles:n,labelColor:a,label:i,boxGapVariantLabel:l="g-1",boxGapVariant:o="g-1",orientation:s=Ue.VERTICAL,message:c,rootProps:m,labelProps:d,messageProps:g,...f},x)=>{const p=W(r),h=F(["mr","box","typography"],n);return v.jsxs(ty,{ref:x,$mr:e,$styles:h,$blocked:t,$boxGapVariantLabel:l,...m,children:[v.jsx(ma.Text,{$colors:p,$styles:h,$color:a,...d,children:i}),v.jsx(ey,{$styles:h,$boxGapVariant:o,$orientation:s,...f,children:f.children}),v.jsx(ca,{$colors:p,message:c,...g})]})}));ry.__docgenInfo={description:"",methods:[],displayName:"BaseRadioGroup",props:{boxGapVariantLabel:{defaultValue:{value:"'g-1'",computed:!1},required:!1},boxGapVariant:{defaultValue:{value:"'g-1'",computed:!1},required:!1},orientation:{defaultValue:{value:"OC.VERTICAL",computed:!0},required:!1}}};const ny={[R.L]:e=>_`
        width: ${e.radioSize_L};
        height: ${e.radioSize_L};
    `,[R.M]:e=>_`
        width: ${e.radioSize_M};
        height: ${e.radioSize_M};
    `},ay={[R.L]:e=>_`
        width: ${e.radioSizeIndicator_L};
        height: ${e.radioSizeIndicator_L};
    `,[R.M]:e=>_`
        width: ${e.radioSizeIndicator_M};
        height: ${e.radioSizeIndicator_M};
    `},ta=C(Qx)`
    &::after {
        position: absolute;
        content: '';
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        ${e=>ay[e.$sizeVariant](e.$styles.radio)};
    }
`,iy=C(Zx)`
    position: relative;
    background-color: transparent;
    outline: none;
    border-radius: 100%;
    border: 1px solid
        ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
    transition: all 0.3s ease-in-out;
    ${ta} {
        &::after {
            background-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant})};
        }
    }
    &:not([disabled]):hover {
        border-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
        ${ta} {
            &::after {
                transition: all 0.3s ease-in-out;
                background-color: ${e=>T({cs:e.$colors,disabled:e.disabled,color:e.$color,variant:e.$colorVariant,hover:e.$_isActiveHover})};
            }
        }
    }
    cursor: ${e=>e.disabled?"default":"pointer"};
    ${e=>ny[e.$sizeVariant](e.$styles.radio)};
    ${e=>ne(e.$styles.mr,e.$mr)}
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,ly=I.memo(I.forwardRef(({colorVariant:e=le.DEFAULT,sizeVariant:t=R.L,mr:r,color:n,blocked:a,$colors:i,$styles:l,_isActiveHover:o=!0,indicatorProps:s,...c},m)=>{const d=W(i),g=F(["mr","radio"],l);return v.jsx(iy,{ref:m,$color:n,$mr:r,$colors:d,$blocked:a,$styles:g,$colorVariant:e,$sizeVariant:t,$_isActiveHover:o,...c,children:v.jsx(ta,{$sizeVariant:t,$styles:g,...s})})}));ly.__docgenInfo={description:"",methods:[],displayName:"BaseRadioItem",props:{colorVariant:{defaultValue:{value:"VC.DEFAULT",computed:!0},required:!1},sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1},_isActiveHover:{defaultValue:{value:"true",computed:!1},required:!1}}};const oy=C.div`
    overflow-y: auto;
    ${e=>e.$size}
    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$boxGapVariant:e.$boxGapVariant,$styles:e.$styles.box,$boxDisplay:e.$boxDisplay})};
    ${e=>ne(e.$styles.mr,e.$mr)};
    ${e=>Yr({$colors:e.$colors,$color:e.$thumbColor??e.$colors.primaryItem})}
`,sy=I.memo(I.forwardRef(({mr:e,children:t,boxWidthVariant:r,boxDisplay:n,boxPaddingVariant:a,boxGapVariant:i,thumbColor:l,size:o,$colors:s,$styles:c,...m},d)=>{const g=W(s),f=F(["mr","box"],c);return v.jsx(oy,{ref:d,$mr:e,$colors:g,$thumbColor:l,$styles:f,$size:o,$boxWidthVariant:r,$boxPaddingVariant:a,$boxGapVariant:i,$boxDisplay:n,...m,children:t})}));sy.__docgenInfo={description:"",methods:[],displayName:"AdaptiveScrollArea"};function uy(e,t){return u.useReducer((r,n)=>t[r][n]??r,e)}var Fa="ScrollArea",[ku,lh]=me(Fa),[cy,we]=ku(Fa),wu=u.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:n="hover",dir:a,scrollHideDelay:i=600,...l}=e,[o,s]=u.useState(null),[c,m]=u.useState(null),[d,g]=u.useState(null),[f,x]=u.useState(null),[p,h]=u.useState(null),[y,b]=u.useState(0),[$,k]=u.useState(0),[w,H]=u.useState(!1),[S,q]=u.useState(!1),E=z(t,j=>s(j)),A=Rt(a);return v.jsx(cy,{scope:r,type:n,dir:A,scrollHideDelay:i,scrollArea:o,viewport:c,onViewportChange:m,content:d,onContentChange:g,scrollbarX:f,onScrollbarXChange:x,scrollbarXEnabled:w,onScrollbarXEnabledChange:H,scrollbarY:p,onScrollbarYChange:h,scrollbarYEnabled:S,onScrollbarYEnabledChange:q,onCornerWidthChange:b,onCornerHeightChange:k,children:v.jsx(M.div,{dir:A,...l,ref:E,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":$+"px",...e.style}})})});wu.displayName=Fa;var _u="ScrollAreaViewport",Su=u.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:n,nonce:a,...i}=e,l=we(_u,r),o=u.useRef(null),s=z(t,o,l.onViewportChange);return v.jsxs(v.Fragment,{children:[v.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),v.jsx(M.div,{"data-radix-scroll-area-viewport":"",...i,ref:s,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style},children:v.jsx("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});Su.displayName=_u;var Ne="ScrollAreaScrollbar",Iu=u.forwardRef((e,t)=>{const{forceMount:r,...n}=e,a=we(Ne,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:l}=a,o=e.orientation==="horizontal";return u.useEffect(()=>(o?i(!0):l(!0),()=>{o?i(!1):l(!1)}),[o,i,l]),a.type==="hover"?v.jsx(my,{...n,ref:t,forceMount:r}):a.type==="scroll"?v.jsx(dy,{...n,ref:t,forceMount:r}):a.type==="auto"?v.jsx(Hu,{...n,ref:t,forceMount:r}):a.type==="always"?v.jsx(Wa,{...n,ref:t}):null});Iu.displayName=Ne;var my=u.forwardRef((e,t)=>{const{forceMount:r,...n}=e,a=we(Ne,e.__scopeScrollArea),[i,l]=u.useState(!1);return u.useEffect(()=>{const o=a.scrollArea;let s=0;if(o){const c=()=>{window.clearTimeout(s),l(!0)},m=()=>{s=window.setTimeout(()=>l(!1),a.scrollHideDelay)};return o.addEventListener("pointerenter",c),o.addEventListener("pointerleave",m),()=>{window.clearTimeout(s),o.removeEventListener("pointerenter",c),o.removeEventListener("pointerleave",m)}}},[a.scrollArea,a.scrollHideDelay]),v.jsx(de,{present:r||i,children:v.jsx(Hu,{"data-state":i?"visible":"hidden",...n,ref:t})})}),dy=u.forwardRef((e,t)=>{const{forceMount:r,...n}=e,a=we(Ne,e.__scopeScrollArea),i=e.orientation==="horizontal",l=vn(()=>s("SCROLL_END"),100),[o,s]=uy("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return u.useEffect(()=>{if(o==="idle"){const c=window.setTimeout(()=>s("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(c)}},[o,a.scrollHideDelay,s]),u.useEffect(()=>{const c=a.viewport,m=i?"scrollLeft":"scrollTop";if(c){let d=c[m];const g=()=>{const f=c[m];d!==f&&(s("SCROLL"),l()),d=f};return c.addEventListener("scroll",g),()=>c.removeEventListener("scroll",g)}},[a.viewport,i,s,l]),v.jsx(de,{present:r||o!=="hidden",children:v.jsx(Wa,{"data-state":o==="hidden"?"hidden":"visible",...n,ref:t,onPointerEnter:P(e.onPointerEnter,()=>s("POINTER_ENTER")),onPointerLeave:P(e.onPointerLeave,()=>s("POINTER_LEAVE"))})})}),Hu=u.forwardRef((e,t)=>{const r=we(Ne,e.__scopeScrollArea),{forceMount:n,...a}=e,[i,l]=u.useState(!1),o=e.orientation==="horizontal",s=vn(()=>{if(r.viewport){const c=r.viewport.offsetWidth<r.viewport.scrollWidth,m=r.viewport.offsetHeight<r.viewport.scrollHeight;l(o?c:m)}},10);return Ht(r.viewport,s),Ht(r.content,s),v.jsx(de,{present:n||i,children:v.jsx(Wa,{"data-state":i?"visible":"hidden",...a,ref:t})})}),Wa=u.forwardRef((e,t)=>{const{orientation:r="vertical",...n}=e,a=we(Ne,e.__scopeScrollArea),i=u.useRef(null),l=u.useRef(0),[o,s]=u.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=Eu(o.viewport,o.content),m={...n,sizes:o,onSizesChange:s,hasThumb:c>0&&c<1,onThumbChange:g=>i.current=g,onThumbPointerUp:()=>l.current=0,onThumbPointerDown:g=>l.current=g};function d(g,f){return yy(g,l.current,o,f)}return r==="horizontal"?v.jsx(vy,{...m,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const g=a.viewport.scrollLeft,f=Li(g,o,a.dir);i.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollLeft=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollLeft=d(g,a.dir))}}):r==="vertical"?v.jsx(gy,{...m,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const g=a.viewport.scrollTop,f=Li(g,o);i.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollTop=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollTop=d(g))}}):null}),vy=u.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...a}=e,i=we(Ne,e.__scopeScrollArea),[l,o]=u.useState(),s=u.useRef(null),c=z(t,s,i.onScrollbarXChange);return u.useEffect(()=>{s.current&&o(getComputedStyle(s.current))},[s]),v.jsx(qu,{"data-orientation":"horizontal",...a,ref:c,sizes:r,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":dn(r)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,d)=>{if(i.viewport){const g=i.viewport.scrollLeft+m.deltaX;e.onWheelScroll(g),Pu(g,d)&&m.preventDefault()}},onResize:()=>{s.current&&i.viewport&&l&&n({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:s.current.clientWidth,paddingStart:Dr(l.paddingLeft),paddingEnd:Dr(l.paddingRight)}})}})}),gy=u.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...a}=e,i=we(Ne,e.__scopeScrollArea),[l,o]=u.useState(),s=u.useRef(null),c=z(t,s,i.onScrollbarYChange);return u.useEffect(()=>{s.current&&o(getComputedStyle(s.current))},[s]),v.jsx(qu,{"data-orientation":"vertical",...a,ref:c,sizes:r,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":dn(r)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,d)=>{if(i.viewport){const g=i.viewport.scrollTop+m.deltaY;e.onWheelScroll(g),Pu(g,d)&&m.preventDefault()}},onResize:()=>{s.current&&i.viewport&&l&&n({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:s.current.clientHeight,paddingStart:Dr(l.paddingTop),paddingEnd:Dr(l.paddingBottom)}})}})}),[fy,Cu]=ku(Ne),qu=u.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:n,hasThumb:a,onThumbChange:i,onThumbPointerUp:l,onThumbPointerDown:o,onThumbPositionChange:s,onDragScroll:c,onWheelScroll:m,onResize:d,...g}=e,f=we(Ne,r),[x,p]=u.useState(null),h=z(t,E=>p(E)),y=u.useRef(null),b=u.useRef(""),$=f.viewport,k=n.content-n.viewport,w=se(m),H=se(s),S=vn(d,10);function q(E){if(y.current){const A=E.clientX-y.current.left,j=E.clientY-y.current.top;c({x:A,y:j})}}return u.useEffect(()=>{const E=A=>{const j=A.target;(x==null?void 0:x.contains(j))&&w(A,k)};return document.addEventListener("wheel",E,{passive:!1}),()=>document.removeEventListener("wheel",E,{passive:!1})},[$,x,k,w]),u.useEffect(H,[n,H]),Ht(x,S),Ht(f.content,S),v.jsx(fy,{scope:r,scrollbar:x,hasThumb:a,onThumbChange:se(i),onThumbPointerUp:se(l),onThumbPositionChange:H,onThumbPointerDown:se(o),children:v.jsx(M.div,{...g,ref:h,style:{position:"absolute",...g.style},onPointerDown:P(e.onPointerDown,E=>{E.button===0&&(E.target.setPointerCapture(E.pointerId),y.current=x.getBoundingClientRect(),b.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),q(E))}),onPointerMove:P(e.onPointerMove,q),onPointerUp:P(e.onPointerUp,E=>{const A=E.target;A.hasPointerCapture(E.pointerId)&&A.releasePointerCapture(E.pointerId),document.body.style.webkitUserSelect=b.current,f.viewport&&(f.viewport.style.scrollBehavior=""),y.current=null})})})}),jr="ScrollAreaThumb",Tu=u.forwardRef((e,t)=>{const{forceMount:r,...n}=e,a=Cu(jr,e.__scopeScrollArea);return v.jsx(de,{present:r||a.hasThumb,children:v.jsx(py,{ref:t,...n})})}),py=u.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:n,...a}=e,i=we(jr,r),l=Cu(jr,r),{onThumbPositionChange:o}=l,s=z(t,d=>l.onThumbChange(d)),c=u.useRef(),m=vn(()=>{c.current&&(c.current(),c.current=void 0)},100);return u.useEffect(()=>{const d=i.viewport;if(d){const g=()=>{if(m(),!c.current){const f=hy(d,o);c.current=f,o()}};return o(),d.addEventListener("scroll",g),()=>d.removeEventListener("scroll",g)}},[i.viewport,m,o]),v.jsx(M.div,{"data-state":l.hasThumb?"visible":"hidden",...a,ref:s,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:P(e.onPointerDownCapture,d=>{const f=d.target.getBoundingClientRect(),x=d.clientX-f.left,p=d.clientY-f.top;l.onThumbPointerDown({x,y:p})}),onPointerUp:P(e.onPointerUp,l.onThumbPointerUp)})});Tu.displayName=jr;var Ga="ScrollAreaCorner",Au=u.forwardRef((e,t)=>{const r=we(Ga,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&n?v.jsx(xy,{...e,ref:t}):null});Au.displayName=Ga;var xy=u.forwardRef((e,t)=>{const{__scopeScrollArea:r,...n}=e,a=we(Ga,r),[i,l]=u.useState(0),[o,s]=u.useState(0),c=!!(i&&o);return Ht(a.scrollbarX,()=>{var d;const m=((d=a.scrollbarX)==null?void 0:d.offsetHeight)||0;a.onCornerHeightChange(m),s(m)}),Ht(a.scrollbarY,()=>{var d;const m=((d=a.scrollbarY)==null?void 0:d.offsetWidth)||0;a.onCornerWidthChange(m),l(m)}),c?v.jsx(M.div,{...n,ref:t,style:{width:i,height:o,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Dr(e){return e?parseInt(e,10):0}function Eu(e,t){const r=e/t;return isNaN(r)?0:r}function dn(e){const t=Eu(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function yy(e,t,r,n="ltr"){const a=dn(r),i=a/2,l=t||i,o=a-l,s=r.scrollbar.paddingStart+l,c=r.scrollbar.size-r.scrollbar.paddingEnd-o,m=r.content-r.viewport,d=n==="ltr"?[0,m]:[m*-1,0];return Ru([s,c],d)(e)}function Li(e,t,r="ltr"){const n=dn(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-a,l=t.content-t.viewport,o=i-n,s=r==="ltr"?[0,l]:[l*-1,0],c=Xt(e,s);return Ru([0,l],[0,o])(c)}function Ru(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function Pu(e,t){return e>0&&e<t}var hy=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return function a(){const i={left:e.scrollLeft,top:e.scrollTop},l=r.left!==i.left,o=r.top!==i.top;(l||o)&&t(),r=i,n=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(n)};function vn(e,t){const r=se(e),n=u.useRef(0);return u.useEffect(()=>()=>window.clearTimeout(n.current),[]),u.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function Ht(e,t){const r=se(t);ue(()=>{let n=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(r)});return a.observe(e),()=>{window.cancelAnimationFrame(n),a.unobserve(e)}}},[e,r])}var by=wu,$y=Su,ky=Iu,wy=Tu,_y=Au;const Sy=C(by)`
    overflow: hidden;
`,Iy=C($y)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,Hy=C(ky)`
    cursor: pointer;
    display: flex;
    user-select: none;
    touch-action: none;
`,Cy=C(wy)`
    flex: 1;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        min-width: 30px;
        min-height: 30px;
    }
`,gn={Root:Sy,Viewport:Iy,Scrollbar:Hy,Thumb:Cy},qy=C(gn.Root)`
    width: ${e=>e.$width};
    height: ${e=>e.$height};
    ${e=>ne(e.$styles.mr,e.$mr)};
`,Ty=C(gn.Scrollbar)`
    transition: background 160ms ease-out;
    &:hover {
        background-color: ${e=>e.$bgScrollbar??T({cs:e.$colors,color:e.$colors.primaryItem,opacity:"60"})};
    }

    &[data-orientation='vertical'] {
        width: 3px;
    }
    &[data-orientation='horizontal'] {
        flex-direction: column;
        height: 3px;
    }
`,Ay=C(gn.Thumb)`
    background-color: ${e=>e.$thumbColor??e.$colors.primaryItemActive};
    border-radius: 2px;
`,Ey=I.memo(I.forwardRef(({mr:e,orientation:t=Ue.VERTICAL,width:r,height:n,bgScrollbar:a,thumbColor:i,$colors:l,$styles:o,viewportProps:s,scrollbarProps:c,thumbProps:m,cornerProps:d,...g},f)=>{const x=W(l),p=F(["mr"],o);return v.jsxs(qy,{ref:f,$mr:e,$width:r,$height:n,$styles:p,...g,children:[v.jsx(gn.Viewport,{...s,children:g.children}),v.jsx(Ty,{$colors:x,$bgScrollbar:a,orientation:t,...c,children:v.jsx(Ay,{$colors:x,$thumbColor:i,...m})}),v.jsx(_y,{...d})]})}));Ey.__docgenInfo={description:"",methods:[],displayName:"BaseScrollArea",props:{orientation:{defaultValue:{value:"OC.VERTICAL",computed:!0},required:!1}}};var Ua="Tabs",[Ry,oh]=me(Ua,[mn]),Lu=mn(),[Py,Xa]=Ry(Ua),Mu=u.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,onValueChange:a,defaultValue:i,orientation:l="horizontal",dir:o,activationMode:s="automatic",...c}=e,m=Rt(o),[d,g]=Ie({prop:n,onChange:a,defaultProp:i});return v.jsx(Py,{scope:r,baseId:Le(),value:d,onValueChange:g,orientation:l,dir:m,activationMode:s,children:v.jsx(M.div,{dir:m,"data-orientation":l,...c,ref:t})})});Mu.displayName=Ua;var Vu="TabsList",Nu=u.forwardRef((e,t)=>{const{__scopeTabs:r,loop:n=!0,...a}=e,i=Xa(Vu,r),l=Lu(r);return v.jsx(uu,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:n,children:v.jsx(M.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});Nu.displayName=Vu;var ju="TabsTrigger",Du=u.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,disabled:a=!1,...i}=e,l=Xa(ju,r),o=Lu(r),s=Bu(l.baseId,n),c=Fu(l.baseId,n),m=n===l.value;return v.jsx(cu,{asChild:!0,...o,focusable:!a,active:m,children:v.jsx(M.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":c,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:s,...i,ref:t,onMouseDown:P(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?l.onValueChange(n):d.preventDefault()}),onKeyDown:P(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(n)}),onFocus:P(e.onFocus,()=>{const d=l.activationMode!=="manual";!m&&!a&&d&&l.onValueChange(n)})})})});Du.displayName=ju;var Ou="TabsContent",zu=u.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,forceMount:a,children:i,...l}=e,o=Xa(Ou,r),s=Bu(o.baseId,n),c=Fu(o.baseId,n),m=n===o.value,d=u.useRef(m);return u.useEffect(()=>{const g=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(g)},[]),v.jsx(de,{present:a||m,children:({present:g})=>v.jsx(M.div,{"data-state":m?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":s,hidden:!g,id:c,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:g&&i})})});zu.displayName=Ou;function Bu(e,t){return`${e}-trigger-${t}`}function Fu(e,t){return`${e}-content-${t}`}var Ly=Mu,My=Nu,Vy=Du,Ny=zu;const jy={[R.L]:e=>_`
        height: ${e.btnHeight_L};
        padding: ${`${e.btnPadding_Y_L} ${e.btnPadding_X_L}`};
    `,[R.M]:e=>_`
        height: ${e.btnHeight_M};
        padding: ${`${e.btnPadding_Y_M} ${e.btnPadding_X_M}`};
    `},Dy=C(Vy)`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    outline: 0;
    transition: all 400ms;
    font-size: ${({$styles:e})=>e.typography.fontSizeItem};
    cursor: ${e=>e.disabled?"default":"pointer"};
    ${e=>jy[e.$sizeVariant](e.$styles.btn)};
    ${e=>ne(e.$styles.mr,e.$mr)};

    &[data-state='active'] {
        color: ${e=>e.$colors.primaryItemActive};
        border-color: ${e=>e.$colors.primaryItemActive};

        &:disabled {
            border-color: ${e=>e.$colors.disabled};
        }
        &:not([disabled]):hover {
            color: ${e=>e.$colors.primaryItemActive};
            border-color: ${e=>e.$colors.primaryItemActive};
        }
    }
    &:not([disabled]):hover {
        color: ${e=>e.$colors.primaryItem};
        border-color: ${e=>e.$colors.primaryItem};
    }
    &:disabled {
        color: ${e=>e.$colors.disabled};
    }
    ${e=>e.$blocked&&_`
            pointer-events: none;
        `}
`,Oy=I.memo(I.forwardRef(({mr:e,sizeVariant:t=R.L,blocked:r,$colors:n,$styles:a,...i},l)=>{const o=W(n),s=F(["mr","btn","typography"],a);return v.jsx(Dy,{ref:l,$mr:e,$styles:s,$colors:o,$blocked:r,$sizeVariant:t,...i,value:i.value,children:i.children})}));Oy.__docgenInfo={description:"",methods:[],displayName:"BaseTab",props:{sizeVariant:{defaultValue:{value:"VS.L",computed:!0},required:!1}}};const zy=C(Ny)`
    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$styles:e.$styles.box,$boxDisplay:e.$boxDisplay})};
    ${e=>ne(e.$styles.mr,e.$mr)};
`,By=I.memo(I.forwardRef(({mr:e,boxWidthVariant:t,boxPaddingVariant:r,boxDisplay:n,$styles:a,...i},l)=>{const o=F(["mr","box"],a);return v.jsx(zy,{ref:l,$mr:e,$styles:o,$boxWidthVariant:t,$boxPaddingVariant:r,$boxDisplay:n,...i,children:i.children})}));By.__docgenInfo={description:"",methods:[],displayName:"BaseTabContent"};const Fy=C(Ly)`
    &[data-orientation='vertical'] {
        display: block;
    }

    &[data-orientation='horizontal'] {
        display: flex;
    }

    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$styles:e.$styles.box})};
    ${e=>ne(e.$styles.mr,e.$mr)};
`,Wy=C(My)`
    &[data-orientation] {
        display: ${e=>e.$orientation==="vertical"?"block":"inline-flex"};
    }

    ${e=>Ve({$boxWidthVariant:e.$boxWidthVariant,$boxPaddingVariant:e.$boxPaddingVariant,$styles:e.$styles.box})};
    ${e=>ne(e.$styles.mr,e.$mr)};
`,Gy=I.memo(I.forwardRef(({mr:e,tabs:t,boxWidthVariant:r,boxPaddingVariant:n,tabsListProps:a,$styles:i,...l},o)=>{const s=F(["mr","box"],i);return v.jsxs(Fy,{ref:o,$mr:e,$styles:s,$boxWidthVariant:r,$boxPaddingVariant:n,orientation:"vertical",...l,children:[v.jsxs(Wy,{$mr:e,$styles:s,$boxWidthVariant:r,$boxPaddingVariant:n,$orientation:(a==null?void 0:a.orientation)??"horizontal",...a,children:[...t]}),l.children]})}));Gy.__docgenInfo={description:"",methods:[],displayName:"BaseTabWrapper"};export{Wf as A,Tx as B,Ey as C,lp as D,Xf as E,cp as F,Jf as G,bx as H,vd as I,pd as J,Gy as K,Oy as L,By as M,dg as N,gg as O,Kp as P,Qc as Q,ul as R,rm as S,le as V,Om as W,Jc as a,am as b,om as c,cm as d,vm as e,pm as f,Jp as g,bm as h,Gf as i,_m as j,Id as k,Vm as l,qd as m,Xp as n,Em as o,Am as p,Xm as q,Yf as r,Uf as s,Lm as t,kp as u,Hp as v,ry as w,R as x,ly as y,sy as z};
