var xc=Object.defineProperty;var yc=(a,t,e)=>t in a?xc(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var Vi=(a,t,e)=>yc(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="160",Mc=0,Ka=1,Sc=2,Lo=1,Po=2,un=3,Cn=0,Le=1,Ee=2,En=0,ui=1,ja=2,Za=3,Ja=4,bc=5,kn=100,wc=101,Ec=102,Qa=103,tr=104,Tc=200,Ac=201,Cc=202,Rc=203,va=204,_a=205,Lc=206,Pc=207,Dc=208,Ic=209,Uc=210,Nc=211,Oc=212,Fc=213,kc=214,Bc=0,Gc=1,zc=2,gs=3,Vc=4,Hc=5,Wc=6,qc=7,Do=0,Xc=1,Yc=2,Tn=0,$c=1,Kc=2,jc=3,Io=4,Zc=5,Jc=6,Uo=300,pi=301,mi=302,xa=303,ya=304,Es=306,Fe=1e3,tn=1001,Ma=1002,ke=1003,er=1004,Os=1005,$e=1006,Qc=1007,Oi=1008,An=1009,tl=1010,el=1011,La=1012,No=1013,Sn=1014,bn=1015,Fi=1016,Oo=1017,Fo=1018,Gn=1020,nl=1021,en=1023,il=1024,sl=1025,zn=1026,gi=1027,al=1028,ko=1029,rl=1030,Bo=1031,Go=1033,Fs=33776,ks=33777,Bs=33778,Gs=33779,nr=35840,ir=35841,sr=35842,ar=35843,zo=36196,rr=37492,or=37496,cr=37808,lr=37809,hr=37810,dr=37811,ur=37812,fr=37813,pr=37814,mr=37815,gr=37816,vr=37817,_r=37818,xr=37819,yr=37820,Mr=37821,zs=36492,Sr=36494,br=36495,ol=36283,wr=36284,Er=36285,Tr=36286,Vo=3e3,Vn=3001,cl=3200,ll=3201,Ho=0,hl=1,Ke="",Se="srgb",pn="srgb-linear",Pa="display-p3",Ts="display-p3-linear",vs="linear",ee="srgb",_s="rec709",xs="p3",qn=7680,Ar=519,dl=512,ul=513,fl=514,Wo=515,pl=516,ml=517,gl=518,vl=519,Cr=35044,Rr="300 es",Sa=1035,fn=2e3,ys=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lr=1234567;const Pi=Math.PI/180,ki=180/Math.PI;function xi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[a&255]+Ce[a>>8&255]+Ce[a>>16&255]+Ce[a>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function be(a,t,e){return Math.max(t,Math.min(e,a))}function Da(a,t){return(a%t+t)%t}function _l(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function xl(a,t,e){return a!==t?(e-a)/(t-a):0}function Di(a,t,e){return(1-e)*a+e*t}function yl(a,t,e,n){return Di(a,t,1-Math.exp(-e*n))}function Ml(a,t=1){return t-Math.abs(Da(a,t*2)-t)}function Sl(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function bl(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function wl(a,t){return a+Math.floor(Math.random()*(t-a+1))}function El(a,t){return a+Math.random()*(t-a)}function Tl(a){return a*(.5-Math.random())}function Al(a){a!==void 0&&(Lr=a);let t=Lr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cl(a){return a*Pi}function Rl(a){return a*ki}function ba(a){return(a&a-1)===0&&a!==0}function Ll(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ms(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Pl(a,t,e,n,i){const s=Math.cos,o=Math.sin,r=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":a.set(r*h,c*d,c*u,r*l);break;case"YZY":a.set(c*u,r*h,c*d,r*l);break;case"ZXZ":a.set(c*d,c*u,r*h,r*l);break;case"XZX":a.set(r*h,c*g,c*f,r*l);break;case"YXY":a.set(c*f,r*h,c*g,r*l);break;case"ZYZ":a.set(c*g,c*f,r*h,r*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ne(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const wa={DEG2RAD:Pi,RAD2DEG:ki,generateUUID:xi,clamp:be,euclideanModulo:Da,mapLinear:_l,inverseLerp:xl,lerp:Di,damp:yl,pingpong:Ml,smoothstep:Sl,smootherstep:bl,randInt:wl,randFloat:El,randFloatSpread:Tl,seededRandom:Al,degToRad:Cl,radToDeg:Rl,isPowerOfTwo:ba,ceilPowerOfTwo:Ll,floorPowerOfTwo:Ms,setQuaternionFromProperEuler:Pl,normalize:Ne,denormalize:ci};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,s,o,r,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,r,c,l)}set(t,e,n,i,s,o,r,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],x=i[7],R=i[2],T=i[5],A=i[8];return s[0]=o*v+r*y+c*R,s[3]=o*m+r*_+c*T,s[6]=o*p+r*x+c*A,s[1]=l*v+h*y+d*R,s[4]=l*m+h*_+d*T,s[7]=l*p+h*x+d*A,s[2]=u*v+f*y+g*R,s[5]=u*m+f*_+g*T,s[8]=u*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*s*h+n*r*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=h*o-r*l,u=r*c-h*s,f=l*s-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(r*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-r*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*r)+o+t,-i*l,i*c,-i*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Ht;function qo(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ss(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Dl(){const a=Ss("canvas");return a.style.display="block",a}const Pr={};function Ii(a){a in Pr||(Pr[a]=!0,console.warn(a))}const Dr=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ir=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[pn]:{transfer:vs,primaries:_s,toReference:a=>a,fromReference:a=>a},[Se]:{transfer:ee,primaries:_s,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Ts]:{transfer:vs,primaries:xs,toReference:a=>a.applyMatrix3(Ir),fromReference:a=>a.applyMatrix3(Dr)},[Pa]:{transfer:ee,primaries:xs,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Ir),fromReference:a=>a.applyMatrix3(Dr).convertLinearToSRGB()}},Il=new Set([pn,Ts]),Zt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Il.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Hi[t].toReference,i=Hi[e].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return Hi[a].primaries},getTransfer:function(a){return a===Ke?vs:Hi[a].transfer}};function fi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Hs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Xn;class Xo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Ss("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ul=0;class Yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=xi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Ws(i[o].image)):s.push(Ws(i[o]))}else s=Ws(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ws(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Xo.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nl=0;class Ge extends _i{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=tn,i=tn,s=$e,o=Oi,r=en,c=An,l=Ge.DEFAULT_ANISOTROPY,h=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=xi(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?Se:Ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fe:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fe:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Vn:Vo}set encoding(t){Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vn?Se:Ke}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Uo;Ge.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(f+1)/2,R=(p+1)/2,T=(h+u)/4,A=(d+v)/4,I=(g+m)/4;return _>x&&_>R?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=A/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?Se:Ke),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $o extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-r;const p=c*u+l*f+h*g+d*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,r=Math.sin(r*T)/R}const x=r*y;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-r){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=r*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-r*f,t[e+2]=l*g+h*f+r*u-c*d,t[e+3]=h*g-r*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>r&&n>d){const f=2*Math.sqrt(1+n-r-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(r>d){const f=2*Math.sqrt(1+r-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-r);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+i*l-s*c,this._y=i*h+o*c+s*r-n*l,this._z=s*h+o*l+n*c-i*r,this._w=o*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ur.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ur.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*i-r*n),h=2*(r*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-r*h,this.y=n+c*h+r*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*o-n*c,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new C,Ur=new Bi;class Wn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(s,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),qi.subVectors(this.max,wi),Yn.subVectors(t.a,wi),$n.subVectors(t.b,wi),Kn.subVectors(t.c,wi),vn.subVectors($n,Yn),_n.subVectors(Kn,$n),Pn.subVectors(Yn,Kn);let e=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!Xs(e,Yn,$n,Kn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Yn,$n,Kn,qi))?!1:(Xi.crossVectors(vn,_n),e=[Xi.x,Xi.y,Xi.z],Xs(e,Yn,$n,Kn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new C,new C,new C,new C,new C,new C,new C,new C],je=new C,Wi=new Wn,Yn=new C,$n=new C,Kn=new C,vn=new C,_n=new C,Pn=new C,wi=new C,qi=new C,Xi=new C,Dn=new C;function Xs(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){Dn.fromArray(a,s);const r=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const kl=new Wn,Ei=new C,Ys=new C;class yi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Ys)),this.expandByPoint(Ei.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new C,$s=new C,Yi=new C,xn=new C,Ks=new C,$i=new C,js=new C;class Ia{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$s.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),xn.copy(this.origin).sub($s);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Yi),r=xn.dot(this.direction),c=-xn.dot(Yi),l=xn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-r,u=o*r-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*r)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($s).addScaledVector(Yi,u),f}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,c=n+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,s){Ks.subVectors(e,t),$i.subVectors(n,t),js.crossVectors(Ks,$i);let o=this.direction.dot(js),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;xn.subVectors(this.origin,t);const c=r*this.direction.dot($i.crossVectors(xn,$i));if(c<0)return null;const l=r*this.direction.dot(Ks.cross(xn));if(l<0||c+l>o)return null;const h=-r*xn.dot(js);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,s,o,r,c,l,h,d,u,f,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,r,c,l,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,r,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=r,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/jn.setFromMatrixColumn(t,0).length(),s=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=r*h,v=r*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-r*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*r,e[4]=g*r-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=f*r-g,e[6]=v+u*r,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*r,e[4]=-o*d,e[8]=g+f*r,e[1]=f+g*r,e[5]=o*h,e[9]=v-u*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=r*h,v=r*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=r*c,v=r*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=r*c,v=r*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=r*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bl,t,Gl)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),yn.crossVectors(n,He),yn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),yn.crossVectors(n,He)),yn.normalize(),Ki.crossVectors(He,yn),i[0]=yn.x,i[4]=Ki.x,i[8]=He.x,i[1]=yn.y,i[5]=Ki.y,i[9]=He.y,i[2]=yn.z,i[6]=Ki.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],R=n[15],T=i[0],A=i[4],I=i[8],M=i[12],w=i[1],N=i[5],z=i[9],j=i[13],P=i[2],O=i[6],W=i[10],Y=i[14],q=i[3],X=i[7],$=i[11],et=i[15];return s[0]=o*T+r*w+c*P+l*q,s[4]=o*A+r*N+c*O+l*X,s[8]=o*I+r*z+c*W+l*$,s[12]=o*M+r*j+c*Y+l*et,s[1]=h*T+d*w+u*P+f*q,s[5]=h*A+d*N+u*O+f*X,s[9]=h*I+d*z+u*W+f*$,s[13]=h*M+d*j+u*Y+f*et,s[2]=g*T+v*w+m*P+p*q,s[6]=g*A+v*N+m*O+p*X,s[10]=g*I+v*z+m*W+p*$,s[14]=g*M+v*j+m*Y+p*et,s[3]=y*T+_*w+x*P+R*q,s[7]=y*A+_*N+x*O+R*X,s[11]=y*I+_*z+x*W+R*$,s[15]=y*M+_*j+x*Y+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*d-i*l*d-s*r*u+n*l*u+i*r*f-n*c*f)+v*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+m*(+e*l*d-e*r*f-s*o*d+n*o*f+s*r*h-n*l*h)+p*(-i*r*h-e*c*d+e*r*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=d*m*l-v*u*l+v*c*f-r*m*f-d*c*p+r*u*p,_=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*v*l-g*d*l+g*r*f-o*v*f-h*r*p+o*d*p,R=g*d*c-h*v*c-g*r*u+o*v*u+h*r*m-o*d*m,T=e*y+n*_+i*x+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(r*m*s-v*c*s+v*i*l-n*m*l-r*i*p+n*c*p)*A,t[3]=(d*c*s-r*u*s-d*i*l+n*u*l+r*i*f-n*c*f)*A,t[4]=_*A,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*A,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*A,t[8]=x*A,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*A,t[10]=(o*v*s-g*r*s+g*n*l-e*v*l-o*n*p+e*r*p)*A,t[11]=(h*r*s-o*d*s-h*n*l+e*d*l+o*n*f-e*r*f)*A,t[12]=R*A,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*A,t[14]=(g*r*i-o*v*i-g*n*c+e*v*c+o*n*m-e*r*m)*A,t[15]=(o*d*i-h*r*i+h*n*c-e*d*c-o*n*u+e*r*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,c=t.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*o,0,l*c-i*r,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,c=e._w,l=s+s,h=o+o,d=r+r,u=s*l,f=s*h,g=s*d,v=o*h,m=o*d,p=r*d,y=c*l,_=c*h,x=c*d,R=n.x,T=n.y,A=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+x)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+_)*A,i[9]=(m-y)*A,i[10]=(1-(u+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=jn.set(i[0],i[1],i[2]).length();const o=jn.set(i[4],i[5],i[6]).length(),r=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/s,h=1/o,d=1/r;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o,r=fn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(r===fn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(r===ys)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,r=fn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h;let g,v;if(r===fn)g=(o+s)*d,v=-2*d;else if(r===ys)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new C,Ze=new se,Bl=new C(0,0,0),Gl=new C(1,1,1),yn=new C,Ki=new C,He=new C,Nr=new se,Or=new Bi;class As{constructor(t=0,e=0,n=0,i=As.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Or.setFromEuler(this),this.setFromQuaternion(Or,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const Fr=new C,Zn=new Bi,ln=new se,ji=new C,Ti=new C,Vl=new C,Hl=new Bi,kr=new C(1,0,0),Br=new C(0,1,0),Gr=new C(0,0,1),Wl={type:"added"},ql={type:"removed"};class ge extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new C,e=new As,n=new Bi,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(kr,t)}rotateY(t){return this.rotateOnAxis(Br,t)}rotateZ(t){return this.rotateOnAxis(Gr,t)}translateOnAxis(t,e){return Fr.copy(t).applyQuaternion(this.quaternion),this.position.add(Fr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kr,t)}translateY(t){return this.translateOnAxis(Br,t)}translateZ(t){return this.translateOnAxis(Gr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ti,ji,this.up):ln.lookAt(ji,Ti,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(ln),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ql)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,Vl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new C(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new C,hn=new C,Zs=new C,dn=new C,Jn=new C,Qn=new C,zr=new C,Js=new C,Qs=new C,ta=new C;let Zi=!1;class Qe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Je.subVectors(i,e),hn.subVectors(n,e),Zs.subVectors(t,e);const o=Je.dot(Je),r=Je.dot(hn),c=Je.dot(Zs),l=hn.dot(hn),h=hn.dot(Zs),d=o*l-r*r;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-r*h)*u,g=(o*h-r*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,i,s,o,r,c){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(t,e,n,i,s,o,r,c)}static getInterpolation(t,e,n,i,s,o,r,c){return this.getBarycoord(t,e,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(r,dn.z),c)}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),hn.subVectors(t,e),Je.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Je.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Jn.subVectors(i,n),Qn.subVectors(s,n),Js.subVectors(t,n);const c=Jn.dot(Js),l=Qn.dot(Js);if(c<=0&&l<=0)return e.copy(n);Qs.subVectors(t,i);const h=Jn.dot(Qs),d=Qn.dot(Qs);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Jn,o);ta.subVectors(t,s);const f=Jn.dot(ta),g=Qn.dot(ta);if(g>=0&&f<=g)return e.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(Qn,r);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return zr.subVectors(s,i),r=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(zr,r);const p=1/(m+v+u);return o=v*p,r=u*p,e.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function ea(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Da(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ea(o,s,t+1/3),this.g=ea(o,s,t),this.b=ea(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Ko[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Zt.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Se){Zt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Ji);const n=Di(Mn.h,Ji.h,e),i=Di(Mn.s,Ji.s,e),s=Di(Mn.l,Ji.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new ut;ut.NAMES=Ko;let Xl=0;class Mi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ui,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=_a,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ar,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ar&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const c=s[r];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Te extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new C,Qi=new gt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cr&&(t.usage=this.usage),t}}class jo extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zo extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yl=0;const Ye=new se,na=new ge,ti=new C,We=new Wn,Ai=new Wn,Me=new C;class Pe extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qo(t)?Zo:jo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(We.min,Ai.min),We.expandByPoint(Me),Me.addVectors(We.max,Ai.max),We.expandByPoint(Me)):(We.expandByPoint(Ai.min),We.expandByPoint(Ai.max))}We.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Me.fromBufferAttribute(r,l),c&&(ti.fromBufferAttribute(t,l),Me.add(ti)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<r;w++)l[w]=new C,h[w]=new C;const d=new C,u=new C,f=new C,g=new gt,v=new gt,m=new gt,p=new C,y=new C;function _(w,N,z){d.fromArray(i,w*3),u.fromArray(i,N*3),f.fromArray(i,z*3),g.fromArray(o,w*2),v.fromArray(o,N*2),m.fromArray(o,z*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);const j=1/(v.x*m.y-m.x*v.y);isFinite(j)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(j),y.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(j),l[w].add(p),l[N].add(p),l[z].add(p),h[w].add(y),h[N].add(y),h[z].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,N=x.length;w<N;++w){const z=x[w],j=z.start,P=z.count;for(let O=j,W=j+P;O<W;O+=3)_(n[O+0],n[O+1],n[O+2])}const R=new C,T=new C,A=new C,I=new C;function M(w){A.fromArray(s,w*3),I.copy(A);const N=l[w];R.copy(N),R.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(I,N);const j=T.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=j}for(let w=0,N=x.length;w<N;++w){const z=x[w],j=z.start,P=z.count;for(let O=j,W=j+P;O<W;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,o=new C,r=new C,c=new C,l=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){r.isInterleavedBufferAttribute?f=c[v]*r.data.stride+r.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ze(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=t(c,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new se,In=new Ia,ts=new yi,Hr=new C,ei=new C,ni=new C,ii=new C,ia=new C,es=new C,ns=new gt,is=new gt,ss=new gt,Wr=new C,qr=new C,Xr=new C,as=new C,rs=new C;class D extends ge{constructor(t=new Pe,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){es.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=r[c],d=s[c];h!==0&&(ia.fromBufferAttribute(d,t),o?es.addScaledVector(ia,h):es.addScaledVector(ia.sub(e),h))}e.add(es)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),In.copy(t.ray).recast(t.near),!(ts.containsPoint(In.origin)===!1&&(In.intersectSphere(ts,Hr)===null||In.origin.distanceToSquared(Hr)>(t.far-t.near)**2))&&(Vr.copy(s).invert(),In.copy(t.ray).applyMatrix4(Vr),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,r=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=_;x<R;x+=3){const T=r.getX(x),A=r.getX(x+1),I=r.getX(x+2);i=os(this,p,t,n,l,h,d,T,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=r.getX(m),_=r.getX(m+1),x=r.getX(m+2);i=os(this,o,t,n,l,h,d,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=_;x<R;x+=3){const T=x,A=x+1,I=x+2;i=os(this,p,t,n,l,h,d,T,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;i=os(this,o,t,n,l,h,d,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function $l(a,t,e,n,i,s,o,r){let c;if(t.side===Le?c=n.intersectTriangle(o,s,i,!0,r):c=n.intersectTriangle(i,s,o,t.side===Cn,r),c===null)return null;rs.copy(r),rs.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:a}}function os(a,t,e,n,i,s,o,r,c,l){a.getVertexPosition(r,ei),a.getVertexPosition(c,ni),a.getVertexPosition(l,ii);const h=$l(a,t,e,n,ei,ni,ii,as);if(h){i&&(ns.fromBufferAttribute(i,r),is.fromBufferAttribute(i,c),ss.fromBufferAttribute(i,l),h.uv=Qe.getInterpolation(as,ei,ni,ii,ns,is,ss,new gt)),s&&(ns.fromBufferAttribute(s,r),is.fromBufferAttribute(s,c),ss.fromBufferAttribute(s,l),h.uv1=Qe.getInterpolation(as,ei,ni,ii,ns,is,ss,new gt),h.uv2=h.uv1),o&&(Wr.fromBufferAttribute(o,r),qr.fromBufferAttribute(o,c),Xr.fromBufferAttribute(o,l),h.normal=Qe.getInterpolation(as,ei,ni,ii,Wr,qr,Xr,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:c,c:l,normal:new C,materialIndex:0};Qe.getNormal(ei,ni,ii,d.normal),h.face=d}return h}class Xt extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,m,p,y,_,x,R,T,A,I,M){const w=x/A,N=R/I,z=x/2,j=R/2,P=T/2,O=A+1,W=I+1;let Y=0,q=0;const X=new C;for(let $=0;$<W;$++){const et=$*N-j;for(let nt=0;nt<O;nt++){const H=nt*w-z;X[v]=H*y,X[m]=et*_,X[p]=P,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(nt/A),d.push(1-$/I),Y+=1}}for(let $=0;$<I;$++)for(let et=0;et<A;et++){const nt=u+et+O*$,H=u+et+O*($+1),K=u+(et+1)+O*($+1),lt=u+(et+1)+O*$;c.push(nt,H,lt),c.push(H,K,lt),q+=6}r.addGroup(f,q,M),f+=q,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(a){const t={};for(let e=0;e<a.length;e++){const n=vi(a[e]);for(const i in n)t[i]=n[i]}return t}function Kl(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Jo(a){return a.getRenderTarget()===null?a.outputColorSpace:Zt.workingColorSpace}const jl={clone:vi,merge:Oe};var Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Kl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qo extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends Qo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ai=1;class Ql extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(si,ai,t,e);i.layers=this.layers,this.add(i);const s=new qe(si,ai,t,e);s.layers=this.layers,this.add(s);const o=new qe(si,ai,t,e);o.layers=this.layers,this.add(o);const r=new qe(si,ai,t,e);r.layers=this.layers,this.add(r);const c=new qe(si,ai,t,e);c.layers=this.layers,this.add(c);const l=new qe(si,ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,r,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tc extends Ge{constructor(t,e,n,i,s,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,i,s,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vn?Se:Ke),this.texture=new tc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xt(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:En});s.uniforms.tEquirect.value=e;const o=new D(i,s),r=e.minFilter;return e.minFilter===Oi&&(e.minFilter=$e),new Ql(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const sa=new C,eh=new C,nh=new Ht;class On{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nh.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new yi,cs=new C;class Na{constructor(t=new On,e=new On,n=new On,i=new On,s=new On,o=new On){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,s=i[0],o=i[1],r=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-s,u-l,m-f,x-p).normalize(),n[1].setComponents(c+s,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+g,x+y).normalize(),n[3].setComponents(c-o,u-h,m-g,x-y).normalize(),n[4].setComponents(c-r,u-d,m-v,x-_).normalize(),e===fn)n[5].setComponents(c+r,u+d,m+v,x+_).normalize();else if(e===ys)n[5].setComponents(r,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function ih(a,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=d.byteLength,g=a.createBuffer();a.bindBuffer(h,g),a.bufferData(h,d,u),l.onUploadCallback();let v;if(d instanceof Float32Array)v=a.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=a.SHORT;else if(d instanceof Uint32Array)v=a.UNSIGNED_INT;else if(d instanceof Int32Array)v=a.INT;else if(d instanceof Int8Array)v=a.BYTE;else if(d instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(a.bindBuffer(d,l),f.count===-1&&g.length===0&&a.bufferSubData(d,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];e?a.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):a.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:r,update:c}}class nn extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,d=t/r,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let _=0;_<l;_++){const x=_*d-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/r),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<r;y++){const _=y+l*p,x=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(_,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,su=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Su=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:ch,alphatest_pars_fragment:lh,aomap_fragment:hh,aomap_pars_fragment:dh,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:_h,clipping_planes_fragment:xh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:Mh,clipping_planes_vertex:Sh,color_fragment:bh,color_pars_fragment:wh,color_pars_vertex:Eh,color_vertex:Th,common:Ah,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Lh,displacementmap_vertex:Ph,emissivemap_fragment:Dh,emissivemap_pars_fragment:Ih,colorspace_fragment:Uh,colorspace_pars_fragment:Nh,envmap_fragment:Oh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:kh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Zh,envmap_vertex:Gh,fog_vertex:zh,fog_pars_vertex:Vh,fog_fragment:Hh,fog_pars_fragment:Wh,gradientmap_pars_fragment:qh,lightmap_fragment:Xh,lightmap_pars_fragment:Yh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:jh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:hd,map_fragment:dd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:vd,morphnormal_vertex:_d,morphtarget_pars_vertex:xd,morphtarget_vertex:yd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:bd,normal_pars_vertex:wd,normal_vertex:Ed,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Ld,opaque_fragment:Pd,packing:Dd,premultiplied_alpha_fragment:Id,project_vertex:Ud,dithering_fragment:Nd,dithering_pars_fragment:Od,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:Gd,shadowmap_vertex:zd,shadowmask_pars_fragment:Vd,skinbase_vertex:Hd,skinning_pars_vertex:Wd,skinning_vertex:qd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:jd,transmission_fragment:Zd,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tu,uv_vertex:eu,worldpos_vertex:nu,background_vert:iu,background_frag:su,backgroundCube_vert:au,backgroundCube_frag:ru,cube_vert:ou,cube_frag:cu,depth_vert:lu,depth_frag:hu,distanceRGBA_vert:du,distanceRGBA_frag:uu,equirect_vert:fu,equirect_frag:pu,linedashed_vert:mu,linedashed_frag:gu,meshbasic_vert:vu,meshbasic_frag:_u,meshlambert_vert:xu,meshlambert_frag:yu,meshmatcap_vert:Mu,meshmatcap_frag:Su,meshnormal_vert:bu,meshnormal_frag:wu,meshphong_vert:Eu,meshphong_frag:Tu,meshphysical_vert:Au,meshphysical_frag:Cu,meshtoon_vert:Ru,meshtoon_frag:Lu,points_vert:Pu,points_frag:Du,shadow_vert:Iu,shadow_frag:Uu,sprite_vert:Nu,sprite_frag:Ou},st={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},an={basic:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Oe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Oe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Oe([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Oe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Oe([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Oe([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Oe([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Oe([st.lights,st.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};an.physical={uniforms:Oe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ls={r:0,b:0,g:0};function Fu(a,t,e,n,i,s,o){const r=new ut(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(r,c):_&&_.isColor&&(v(_,1),y=!0);const x=a.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Es)?(h===void 0&&(h=new D(new Xt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:vi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ee,(d!==_||u!==_.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new D(new nn(2,2),new mn({name:"BackgroundMaterial",uniforms:vi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=a.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(ls,Jo(a)),n.buffers.color.setClear(ls.r,ls.g,ls.b,p,o)}return{getClearColor:function(){return r},setClearColor:function(m,p=1){r.set(m),c=p,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(r,c)},render:g}}function ku(a,t,e,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},c=m(null);let l=c,h=!1;function d(P,O,W,Y,q){let X=!1;if(o){const $=v(Y,W,O);l!==$&&(l=$,f(l.object)),X=p(P,Y,W,q),X&&y(P,Y,W,q)}else{const $=O.wireframe===!0;(l.geometry!==Y.id||l.program!==W.id||l.wireframe!==$)&&(l.geometry=Y.id,l.program=W.id,l.wireframe=$,X=!0)}q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(P,O,W,Y),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,O,W){const Y=W.wireframe===!0;let q=r[P.id];q===void 0&&(q={},r[P.id]=q);let X=q[O.id];X===void 0&&(X={},q[O.id]=X);let $=X[Y];return $===void 0&&($=m(u()),X[Y]=$),$}function m(P){const O=[],W=[],Y=[];for(let q=0;q<i;q++)O[q]=0,W[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,O,W,Y){const q=l.attributes,X=O.attributes;let $=0;const et=W.getAttributes();for(const nt in et)if(et[nt].location>=0){const K=q[nt];let lt=X[nt];if(lt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;$++}return l.attributesNum!==$||l.index!==Y}function y(P,O,W,Y){const q={},X=O.attributes;let $=0;const et=W.getAttributes();for(const nt in et)if(et[nt].location>=0){let K=X[nt];K===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),q[nt]=lt,$++}l.attributes=q,l.attributesNum=$,l.index=Y}function _(){const P=l.newAttributes;for(let O=0,W=P.length;O<W;O++)P[O]=0}function x(P){R(P,0)}function R(P,O){const W=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;W[P]=1,Y[P]===0&&(a.enableVertexAttribArray(P),Y[P]=1),q[P]!==O&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function T(){const P=l.newAttributes,O=l.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==P[W]&&(a.disableVertexAttribArray(W),O[W]=0)}function A(P,O,W,Y,q,X,$){$===!0?a.vertexAttribIPointer(P,O,W,q,X):a.vertexAttribPointer(P,O,W,Y,q,X)}function I(P,O,W,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const q=Y.attributes,X=W.getAttributes(),$=O.defaultAttributeValues;for(const et in X){const nt=X[et];if(nt.location>=0){let H=q[et];if(H===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const K=H.normalized,lt=H.itemSize,yt=e.get(H);if(yt===void 0)continue;const xt=yt.buffer,It=yt.type,Nt=yt.bytesPerElement,Tt=n.isWebGL2===!0&&(It===a.INT||It===a.UNSIGNED_INT||H.gpuType===No);if(H.isInterleavedBufferAttribute){const qt=H.data,F=qt.stride,De=H.offset;if(qt.isInstancedInterleavedBuffer){for(let St=0;St<nt.locationSize;St++)R(nt.location+St,qt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let St=0;St<nt.locationSize;St++)x(nt.location+St);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let St=0;St<nt.locationSize;St++)A(nt.location+St,lt/nt.locationSize,It,K,F*Nt,(De+lt/nt.locationSize*St)*Nt,Tt)}else{if(H.isInstancedBufferAttribute){for(let qt=0;qt<nt.locationSize;qt++)R(nt.location+qt,H.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let qt=0;qt<nt.locationSize;qt++)x(nt.location+qt);a.bindBuffer(a.ARRAY_BUFFER,xt);for(let qt=0;qt<nt.locationSize;qt++)A(nt.location+qt,lt/nt.locationSize,It,K,lt*Nt,lt/nt.locationSize*qt*Nt,Tt)}}else if($!==void 0){const K=$[et];if(K!==void 0)switch(K.length){case 2:a.vertexAttrib2fv(nt.location,K);break;case 3:a.vertexAttrib3fv(nt.location,K);break;case 4:a.vertexAttrib4fv(nt.location,K);break;default:a.vertexAttrib1fv(nt.location,K)}}}}T()}function M(){z();for(const P in r){const O=r[P];for(const W in O){const Y=O[W];for(const q in Y)g(Y[q].object),delete Y[q];delete O[W]}delete r[P]}}function w(P){if(r[P.id]===void 0)return;const O=r[P.id];for(const W in O){const Y=O[W];for(const q in Y)g(Y[q].object),delete Y[q];delete O[W]}delete r[P.id]}function N(P){for(const O in r){const W=r[O];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const q in Y)g(Y[q].object),delete Y[q];delete W[P.id]}}function z(){j(),h=!0,l!==c&&(l=c,f(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:z,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Bu(a,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function r(h,d){a.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,g;if(i)f=a,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];e.update(g,s,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Gu(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,x=o||t.has("OES_texture_float"),R=_&&x,T=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:T}}function zu(a){const t=this;let e=null,n=0,i=!1,s=!1;const o=new On,r=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=a.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const y=s?0:n,_=y*4;let x=p.clippingState||null;c.value=x,x=h(g,u,_,f);for(let R=0;R!==_;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;r.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(d[_]).applyMatrix4(y,r),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Vu(a){let t=new WeakMap;function e(o,r){return r===xa?o.mapping=pi:r===ya&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===xa||r===ya)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new th(c.height/2);return l.fromEquirectangularTexture(a,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class nc extends Qo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,Yr=[.125,.215,.35,.446,.526,.582],Bn=20,aa=new nc,$r=new ut;let ra=null,oa=0,ca=0;const Fn=(1+Math.sqrt(5))/2,ri=1/Fn,Kr=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Fn,ri),new C(0,Fn,-ri),new C(ri,0,Fn),new C(-ri,0,Fn),new C(Fn,ri,0),new C(-Fn,ri,0)];class jr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,ca),t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Fi,format:en,colorSpace:pn,depthBuffer:!1},i=Zr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zr(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(s)),this._blurMaterial=Wu(s,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i){const r=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor($r),h.toneMapping=Tn,h.autoClear=!1;const f=new Te({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new D(new Xt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy($r),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(r.up.set(0,c[p],0),r.lookAt(l[p],0,0)):y===1?(r.up.set(0,0,c[p]),r.lookAt(0,l[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,l[p]));const _=this._cubeSize;hs(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pi||t.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jr());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Kr[(i-1)%Kr.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new D(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Bn;m>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const p=[];let y=0;for(let A=0;A<Bn;++A){const I=A/v,M=Math.exp(-I*I/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const x=this._sizeLods[i],R=3*x*(i>_-li?i-_+li:0),T=4*(this._cubeSize-x);hs(e,R,T,3*x,2*x),c.setRenderTarget(e),c.render(d,aa)}}function Hu(a){const t=[],e=[],n=[];let i=a;const s=a-li+1+Yr.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let c=1/r;o>a-li?c=Yr[o-a+li-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,I=T>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(M,v*g*T),_.set(u,m*g*T);const w=[T,T,T,T,T,T];x.set(w,p*g*T)}const R=new Pe;R.setAttribute("position",new ze(y,v)),R.setAttribute("uv",new ze(_,m)),R.setAttribute("faceIndex",new ze(x,p)),t.push(R),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zr(a,t,e){const n=new Hn(a,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Wu(a,t,e){const n=new Float32Array(Bn),i=new C(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Jr(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Qr(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qu(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===xa||c===ya,h=c===pi||c===mi;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new jr(a)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new jr(a));const u=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xu(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yu(a,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],a.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],a.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const R=y[_+0],T=y[_+1],A=y[_+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const R=_+0,T=_+1,A=_+2;u.push(R,T,T,A,A,R)}}else return;const m=new(qo(u)?Zo:jo)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:c,getWireframeAttribute:h}}function $u(a,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let r,c;function l(f){r=f.type,c=f.bytesPerElement}function h(f,g){a.drawElements(s,g,r,f*c),e.update(g,s,1)}function d(f,g,v){if(v===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,r,f*c,v),e.update(g,s,v)}function u(f,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,r,f,0,v);let p=0;for(let y=0;y<v;y++)p+=g[y];e.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Ku(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case a.TRIANGLES:e.triangles+=r*(s/3);break;case a.LINES:e.lines+=r*(s/2);break;case a.LINE_STRIP:e.lines+=r*(s-1);break;case a.LINE_LOOP:e.lines+=r*s;break;case a.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ju(a,t){return a[0]-t[0]}function Zu(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Ju(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new oe,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let O=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var f=O;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),R===!0&&(M=3);let w=h.attributes.position.count*M,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const z=new Float32Array(w*N*4*v),j=new $o(z,w,N,v);j.type=bn,j.needsUpdate=!0;const P=M*4;for(let W=0;W<v;W++){const Y=T[W],q=A[W],X=I[W],$=w*N*4*W;for(let et=0;et<Y.count;et++){const nt=et*P;_===!0&&(o.fromBufferAttribute(Y,et),z[$+nt+0]=o.x,z[$+nt+1]=o.y,z[$+nt+2]=o.z,z[$+nt+3]=0),x===!0&&(o.fromBufferAttribute(q,et),z[$+nt+4]=o.x,z[$+nt+5]=o.y,z[$+nt+6]=o.z,z[$+nt+7]=0),R===!0&&(o.fromBufferAttribute(X,et),z[$+nt+8]=o.x,z[$+nt+9]=o.y,z[$+nt+10]=o.z,z[$+nt+11]=X.itemSize===4?o.w:1)}}m={count:v,texture:j,size:new gt(w,N)},s.set(h,m),h.addEventListener("dispose",O)}let p=0;for(let _=0;_<u.length;_++)p+=u[_];const y=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[h.id]=v}for(let x=0;x<g;x++){const R=v[x];R[0]=x,R[1]=u[x]}v.sort(Zu);for(let x=0;x<8;x++)x<g&&v[x][1]?(r[x][0]=v[x][0],r[x][1]=v[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(ju);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const R=r[x],T=R[0],A=R[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+x)!==m[T]&&h.setAttribute("morphTarget"+x,m[T]),p&&h.getAttribute("morphNormal"+x)!==p[T]&&h.setAttribute("morphNormal"+x,p[T]),i[x]=A,y+=A):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(a,"morphTargetBaseInfluence",_),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function Qu(a,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==l&&(e.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,a.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class ic extends Ge{constructor(t,e,n,i,s,o,r,c,l,h){if(h=h!==void 0?h:zn,h!==zn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=Sn),n===void 0&&h===gi&&(n=Gn),super(null,i,s,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sc=new Ge,ac=new ic(1,1);ac.compareFunction=Wo;const rc=new $o,oc=new Fl,cc=new tc,to=[],eo=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function Si(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=to[i];if(s===void 0&&(s=new Float32Array(i),to[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function ve(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function _e(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Cs(a,t){let e=eo[t];e===void 0&&(e=new Int32Array(t),eo[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function tf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function ef(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;a.uniform2fv(this.addr,t),_e(e,t)}}function nf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;a.uniform3fv(this.addr,t),_e(e,t)}}function sf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;a.uniform4fv(this.addr,t),_e(e,t)}}function af(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;so.set(n),a.uniformMatrix2fv(this.addr,!1,so),_e(e,n)}}function rf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;io.set(n),a.uniformMatrix3fv(this.addr,!1,io),_e(e,n)}}function of(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;no.set(n),a.uniformMatrix4fv(this.addr,!1,no),_e(e,n)}}function cf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function lf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;a.uniform2iv(this.addr,t),_e(e,t)}}function hf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;a.uniform3iv(this.addr,t),_e(e,t)}}function df(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;a.uniform4iv(this.addr,t),_e(e,t)}}function uf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function ff(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;a.uniform2uiv(this.addr,t),_e(e,t)}}function pf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;a.uniform3uiv(this.addr,t),_e(e,t)}}function mf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;a.uniform4uiv(this.addr,t),_e(e,t)}}function gf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const s=this.type===a.SAMPLER_2D_SHADOW?ac:sc;e.setTexture2D(t||s,i)}function vf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oc,i)}function _f(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cc,i)}function xf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rc,i)}function yf(a){switch(a){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return af;case 35675:return rf;case 35676:return of;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}function Mf(a,t){a.uniform1fv(this.addr,t)}function Sf(a,t){const e=Si(t,this.size,2);a.uniform2fv(this.addr,e)}function bf(a,t){const e=Si(t,this.size,3);a.uniform3fv(this.addr,e)}function wf(a,t){const e=Si(t,this.size,4);a.uniform4fv(this.addr,e)}function Ef(a,t){const e=Si(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Tf(a,t){const e=Si(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Af(a,t){const e=Si(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Cf(a,t){a.uniform1iv(this.addr,t)}function Rf(a,t){a.uniform2iv(this.addr,t)}function Lf(a,t){a.uniform3iv(this.addr,t)}function Pf(a,t){a.uniform4iv(this.addr,t)}function Df(a,t){a.uniform1uiv(this.addr,t)}function If(a,t){a.uniform2uiv(this.addr,t)}function Uf(a,t){a.uniform3uiv(this.addr,t)}function Nf(a,t){a.uniform4uiv(this.addr,t)}function Of(a,t,e){const n=this.cache,i=t.length,s=Cs(e,i);ve(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||sc,s[o])}function Ff(a,t,e){const n=this.cache,i=t.length,s=Cs(e,i);ve(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||oc,s[o])}function kf(a,t,e){const n=this.cache,i=t.length,s=Cs(e,i);ve(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||cc,s[o])}function Bf(a,t,e){const n=this.cache,i=t.length,s=Cs(e,i);ve(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rc,s[o])}function Gf(a){switch(a){case 5126:return Mf;case 35664:return Sf;case 35665:return bf;case 35666:return wf;case 35674:return Ef;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Rf;case 35668:case 35672:return Lf;case 35669:case 35673:return Pf;case 5125:return Df;case 36294:return If;case 36295:return Uf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Bf}}class zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gf(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function ao(a,t){a.seq.push(t),a.map[t.id]=t}function Wf(a,t,e){const n=a.name,i=n.length;for(la.lastIndex=0;;){const s=la.exec(n),o=la.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===i){ao(e,l===void 0?new zf(r,a,t):new Vf(r,a,t));break}else{let d=e.map[r];d===void 0&&(d=new Hf(r),ao(e,d)),e=d}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Wf(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ro(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const qf=37297;let Xf=0;function Yf(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function $f(a){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(a);let n;switch(t===e?n="":t===xs&&e===_s?n="LinearDisplayP3ToLinearSRGB":t===_s&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),a){case pn:case Ts:return[n,"LinearTransferOETF"];case Se:case Pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function oo(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Yf(a.getShaderSource(t),o)}else return i}function Kf(a,t){const e=$f(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jf(a,t){let e;switch(t){case $c:e="Linear";break;case Kc:e="Reinhard";break;case jc:e="OptimizedCineon";break;case Io:e="ACESFilmic";break;case Jc:e="AgX";break;case Zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function Jf(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hi).join(`
`)}function Qf(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tp(a,t){const e={},n=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),o=s.name;let r=1;s.type===a.FLOAT_MAT2&&(r=2),s.type===a.FLOAT_MAT3&&(r=3),s.type===a.FLOAT_MAT4&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function hi(a){return a!==""}function co(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lo(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(a){return a.replace(ep,ip)}const np=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(a,t){let e=Ft[t];if(e===void 0){const n=np.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(a){return a.replace(sp,ap)}function ap(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uo(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rp(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function op(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Do:t="ENVMAP_BLENDING_MULTIPLY";break;case Xc:t="ENVMAP_BLENDING_MIX";break;case Yc:t="ENVMAP_BLENDING_ADD";break}return t}function hp(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dp(a,t,e,n){const i=a.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=rp(e),l=op(e),h=cp(e),d=lp(e),u=hp(e),f=e.isWebGL2?"":Zf(e),g=Jf(e),v=Qf(s),m=i.createProgram();let p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hi).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hi).join(`
`),y.length>0&&(y+=`
`)):(p=[uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),y=[f,uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Tn?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Kf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),o=Ea(o),o=co(o,e),o=lo(o,e),r=Ea(r),r=co(r,e),r=lo(r,e),o=ho(o),r=ho(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=_+p+o,R=_+y+r,T=ro(i,i.VERTEX_SHADER,x),A=ro(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(z){if(a.debug.checkShaderErrors){const j=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(A).trim();let W=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,T,A);else{const q=oo(i,T,"vertex"),X=oo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+q+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||O==="")&&(Y=!1);Y&&(z.diagnostics={runnable:W,programLog:j,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:y}})}i.deleteShader(T),i.deleteShader(A),M=new ms(i,m),w=tp(i,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,qf)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let up=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pp(t),e.set(t,n)),n}}class pp{constructor(t){this.id=up++,this.code=t,this.usedTimes=0}}function mp(a,t,e,n,i,s,o){const r=new Ua,c=new fp,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,w,N,z,j){const P=z.fog,O=j.geometry,W=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),q=Y&&Y.mapping===Es?Y.image.height:null,X=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=$!==void 0?$.length:0;let nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let H,K,lt,yt;if(X){const Ie=an[X];H=Ie.vertexShader,K=Ie.fragmentShader}else H=M.vertexShader,K=M.fragmentShader,c.update(M),lt=c.getVertexShaderID(M),yt=c.getFragmentShaderID(M);const xt=a.getRenderTarget(),It=j.isInstancedMesh===!0,Nt=j.isBatchedMesh===!0,Tt=!!M.map,qt=!!M.matcap,F=!!Y,De=!!M.aoMap,St=!!M.lightMap,Pt=!!M.bumpMap,mt=!!M.normalMap,ce=!!M.displacementMap,kt=!!M.emissiveMap,E=!!M.metalnessMap,S=!!M.roughnessMap,B=M.anisotropy>0,Q=M.clearcoat>0,J=M.iridescence>0,tt=M.sheen>0,vt=M.transmission>0,ct=B&&!!M.anisotropyMap,ft=Q&&!!M.clearcoatMap,Et=Q&&!!M.clearcoatNormalMap,Bt=Q&&!!M.clearcoatRoughnessMap,Z=J&&!!M.iridescenceMap,jt=J&&!!M.iridescenceThicknessMap,Wt=tt&&!!M.sheenColorMap,Lt=tt&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,pt=!!M.specularColorMap,Ot=!!M.specularIntensityMap,$t=vt&&!!M.transmissionMap,he=vt&&!!M.thicknessMap,zt=!!M.gradientMap,it=!!M.alphaMap,L=M.alphaTest>0,rt=!!M.alphaHash,ot=!!M.extensions,At=!!O.attributes.uv1,bt=!!O.attributes.uv2,Jt=!!O.attributes.uv3;let Qt=Tn;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Qt=a.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:K,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Nt,instancing:It,instancingColor:It&&j.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:xt===null?a.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:pn,map:Tt,matcap:qt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:q,aoMap:De,lightMap:St,bumpMap:Pt,normalMap:mt,displacementMap:u&&ce,emissiveMap:kt,normalMapObjectSpace:mt&&M.normalMapType===hl,normalMapTangentSpace:mt&&M.normalMapType===Ho,metalnessMap:E,roughnessMap:S,anisotropy:B,anisotropyMap:ct,clearcoat:Q,clearcoatMap:ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:Bt,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:jt,sheen:tt,sheenColorMap:Wt,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Ot,transmission:vt,transmissionMap:$t,thicknessMap:he,gradientMap:zt,opaque:M.transparent===!1&&M.blending===ui,alphaMap:it,alphaTest:L,alphaHash:rt,combine:M.combine,mapUv:Tt&&v(M.map.channel),aoMapUv:De&&v(M.aoMap.channel),lightMapUv:St&&v(M.lightMap.channel),bumpMapUv:Pt&&v(M.bumpMap.channel),normalMapUv:mt&&v(M.normalMap.channel),displacementMapUv:ce&&v(M.displacementMap.channel),emissiveMapUv:kt&&v(M.emissiveMap.channel),metalnessMapUv:E&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:ct&&v(M.anisotropyMap.channel),clearcoatMapUv:ft&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(M.sheenRoughnessMap.channel),specularMapUv:Mt&&v(M.specularMap.channel),specularColorMapUv:pt&&v(M.specularColorMap.channel),specularIntensityMapUv:Ot&&v(M.specularIntensityMap.channel),transmissionMapUv:$t&&v(M.transmissionMap.channel),thicknessMapUv:he&&v(M.thicknessMap.channel),alphaMapUv:it&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(mt||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:bt,vertexUv3s:Jt,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(Tt||it),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&N.length>0,shadowMapType:a.shadowMap.type,toneMapping:Qt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ee,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ot&&M.extensions.derivatives===!0,extensionFragDepth:ot&&M.extensions.fragDepth===!0,extensionDrawBuffers:ot&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(w,M),_(w,M),w.push(a.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){r.disableAll(),w.isWebGL2&&r.enable(0),w.supportsVertexTextures&&r.enable(1),w.instancing&&r.enable(2),w.instancingColor&&r.enable(3),w.matcap&&r.enable(4),w.envMap&&r.enable(5),w.normalMapObjectSpace&&r.enable(6),w.normalMapTangentSpace&&r.enable(7),w.clearcoat&&r.enable(8),w.iridescence&&r.enable(9),w.alphaTest&&r.enable(10),w.vertexColors&&r.enable(11),w.vertexAlphas&&r.enable(12),w.vertexUv1s&&r.enable(13),w.vertexUv2s&&r.enable(14),w.vertexUv3s&&r.enable(15),w.vertexTangents&&r.enable(16),w.anisotropy&&r.enable(17),w.alphaHash&&r.enable(18),w.batching&&r.enable(19),M.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.skinning&&r.enable(4),w.morphTargets&&r.enable(5),w.morphNormals&&r.enable(6),w.morphColors&&r.enable(7),w.premultipliedAlpha&&r.enable(8),w.shadowMapEnabled&&r.enable(9),w.useLegacyLights&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function x(M){const w=g[M.type];let N;if(w){const z=an[w];N=jl.clone(z.uniforms)}else N=M.uniforms;return N}function R(M,w){let N;for(let z=0,j=l.length;z<j;z++){const P=l[z];if(P.cacheKey===w){N=P,++N.usedTimes;break}}return N===void 0&&(N=new dp(a,w,M,s),l.push(N)),N}function T(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:I}}function gp(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function vp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function fo(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function po(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=a[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},a[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function r(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||vp),n.length>1&&n.sort(u||fo),i.length>1&&i.sort(u||fo)}function h(){for(let d=t,u=a.length;d<u;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function _p(){let a=new WeakMap;function t(n,i){const s=a.get(n);let o;return s===void 0?(o=new po,a.set(n,[o])):i>=s.length?(o=new po,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function xp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ut};break;case"SpotLight":e={position:new C,direction:new C,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new C,halfWidth:new C,halfHeight:new C};break}return a[t.id]=e,e}}}function yp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Mp=0;function Sp(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function bp(a,t){const e=new xp,n=yp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,o=new se,r=new se;function c(h,d){let u=0,f=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,x=0,R=0,T=0,A=0,I=0,M=0;h.sort(Sp);const w=d===!0?Math.PI:1;for(let z=0,j=h.length;z<j;z++){const P=h[z],O=P.color,W=P.intensity,Y=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*W*w,f+=O.g*W*w,g+=O.b*W*w;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],W);M++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[v]=et,i.directionalShadowMap[v]=q,i.directionalShadowMatrix[v]=P.shadow.matrix,x++}i.directional[v]=X,v++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(W*w),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[p]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=$.matrix,P.castShadow){const et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[p]=et,i.spotShadowMap[p]=q,T++}p++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=X,y++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(W*w),X.groundColor.copy(P.groundColor).multiplyScalar(W*w),i.hemi[_]=X,_++}}y>0&&(t.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==x||N.numPointShadows!==R||N.numSpotShadows!==T||N.numSpotMaps!==A||N.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=M,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=x,N.numPointShadows=R,N.numSpotShadows=T,N.numSpotMaps=A,N.numLightProbes=M,i.version=Mp++)}function l(h,d){let u=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const x=h[y];if(x.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(x.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(r),R.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function mo(a,t){const e=new bp(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function wp(a,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let c;return r===void 0?(c=new mo(a,t),e.set(s,[c])):o>=r.length?(c=new mo(a,t),r.push(c)):c=r[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ep extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tp extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rp(a,t,e){let n=new Na;const i=new gt,s=new gt,o=new oe,r=new Ep({depthPacking:ll}),c=new Tp,l={},h=e.maxTextureSize,d={[Cn]:Le,[Le]:Cn,[Ee]:Ee},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Ap,fragmentShader:Cp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=a.getRenderTarget(),w=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),z=a.state;z.setBlending(En),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const j=p!==un&&this.type===un,P=p===un&&this.type!==un;for(let O=0,W=T.length;O<W;O++){const Y=T[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const X=q.getFrameExtents();if(i.multiply(X),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||j===!0||P===!0){const et=this.type!==un?{minFilter:ke,magFilter:ke}:{};q.map!==null&&q.map.dispose(),q.map=new Hn(i.x,i.y,et),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const $=q.getViewportCount();for(let et=0;et<$;et++){const nt=q.getViewport(et);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),z.viewport(o),q.updateMatrices(Y,et),n=q.getFrustum(),x(A,I,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===un&&y(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(M,w,N)};function y(T,A){const I=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(A,null,I,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(A,null,I,f,v,null)}function _(T,A,I,M){let w=null;const N=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?c:r,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=w.uuid,j=A.uuid;let P=l[z];P===void 0&&(P={},l[z]=P);let O=P[j];O===void 0&&(O=w.clone(),P[j]=O,A.addEventListener("dispose",R)),w=O}if(w.visible=A.visible,w.wireframe=A.wireframe,M===un?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=a.properties.get(w);z.light=I}return w}function x(T,A,I,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const j=t.update(T),P=T.material;if(Array.isArray(P)){const O=j.groups;for(let W=0,Y=O.length;W<Y;W++){const q=O[W],X=P[q.materialIndex];if(X&&X.visible){const $=_(T,X,M,w);T.onBeforeShadow(a,T,A,I,j,$,q),a.renderBufferDirect(I,null,j,$,T,q),T.onAfterShadow(a,T,A,I,j,$,q)}}}else if(P.visible){const O=_(T,P,M,w);T.onBeforeShadow(a,T,A,I,j,O,null),a.renderBufferDirect(I,null,j,O,T,null),T.onAfterShadow(a,T,A,I,j,O,null)}}const z=T.children;for(let j=0,P=z.length;j<P;j++)x(z[j],A,I,M,w)}function R(T){T.target.removeEventListener("dispose",R);for(const I in l){const M=l[I],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Lp(a,t,e){const n=e.isWebGL2;function i(){let L=!1;const rt=new oe;let ot=null;const At=new oe(0,0,0,0);return{setMask:function(bt){ot!==bt&&!L&&(a.colorMask(bt,bt,bt,bt),ot=bt)},setLocked:function(bt){L=bt},setClear:function(bt,Jt,Qt,xe,Ie){Ie===!0&&(bt*=xe,Jt*=xe,Qt*=xe),rt.set(bt,Jt,Qt,xe),At.equals(rt)===!1&&(a.clearColor(bt,Jt,Qt,xe),At.copy(rt))},reset:function(){L=!1,ot=null,At.set(-1,0,0,0)}}}function s(){let L=!1,rt=null,ot=null,At=null;return{setTest:function(bt){bt?Nt(a.DEPTH_TEST):Tt(a.DEPTH_TEST)},setMask:function(bt){rt!==bt&&!L&&(a.depthMask(bt),rt=bt)},setFunc:function(bt){if(ot!==bt){switch(bt){case Bc:a.depthFunc(a.NEVER);break;case Gc:a.depthFunc(a.ALWAYS);break;case zc:a.depthFunc(a.LESS);break;case gs:a.depthFunc(a.LEQUAL);break;case Vc:a.depthFunc(a.EQUAL);break;case Hc:a.depthFunc(a.GEQUAL);break;case Wc:a.depthFunc(a.GREATER);break;case qc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ot=bt}},setLocked:function(bt){L=bt},setClear:function(bt){At!==bt&&(a.clearDepth(bt),At=bt)},reset:function(){L=!1,rt=null,ot=null,At=null}}}function o(){let L=!1,rt=null,ot=null,At=null,bt=null,Jt=null,Qt=null,xe=null,Ie=null;return{setTest:function(te){L||(te?Nt(a.STENCIL_TEST):Tt(a.STENCIL_TEST))},setMask:function(te){rt!==te&&!L&&(a.stencilMask(te),rt=te)},setFunc:function(te,Ue,sn){(ot!==te||At!==Ue||bt!==sn)&&(a.stencilFunc(te,Ue,sn),ot=te,At=Ue,bt=sn)},setOp:function(te,Ue,sn){(Jt!==te||Qt!==Ue||xe!==sn)&&(a.stencilOp(te,Ue,sn),Jt=te,Qt=Ue,xe=sn)},setLocked:function(te){L=te},setClear:function(te){Ie!==te&&(a.clearStencil(te),Ie=te)},reset:function(){L=!1,rt=null,ot=null,At=null,bt=null,Jt=null,Qt=null,xe=null,Ie=null}}}const r=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,R=null,T=null,A=null,I=null,M=new ut(0,0,0),w=0,N=!1,z=null,j=null,P=null,O=null,W=null;const Y=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const $=a.getParameter(a.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),q=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=X>=2);let et=null,nt={};const H=a.getParameter(a.SCISSOR_BOX),K=a.getParameter(a.VIEWPORT),lt=new oe().fromArray(H),yt=new oe().fromArray(K);function xt(L,rt,ot,At){const bt=new Uint8Array(4),Jt=a.createTexture();a.bindTexture(L,Jt),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qt=0;Qt<ot;Qt++)n&&(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)?a.texImage3D(rt,0,a.RGBA,1,1,At,0,a.RGBA,a.UNSIGNED_BYTE,bt):a.texImage2D(rt+Qt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,bt);return Jt}const It={};It[a.TEXTURE_2D]=xt(a.TEXTURE_2D,a.TEXTURE_2D,1),It[a.TEXTURE_CUBE_MAP]=xt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[a.TEXTURE_2D_ARRAY]=xt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),It[a.TEXTURE_3D]=xt(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Nt(a.DEPTH_TEST),c.setFunc(gs),kt(!1),E(Ka),Nt(a.CULL_FACE),mt(En);function Nt(L){u[L]!==!0&&(a.enable(L),u[L]=!0)}function Tt(L){u[L]!==!1&&(a.disable(L),u[L]=!1)}function qt(L,rt){return f[L]!==rt?(a.bindFramebuffer(L,rt),f[L]=rt,n&&(L===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=rt),L===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=rt)),!0):!1}function F(L,rt){let ot=v,At=!1;if(L)if(ot=g.get(rt),ot===void 0&&(ot=[],g.set(rt,ot)),L.isWebGLMultipleRenderTargets){const bt=L.texture;if(ot.length!==bt.length||ot[0]!==a.COLOR_ATTACHMENT0){for(let Jt=0,Qt=bt.length;Jt<Qt;Jt++)ot[Jt]=a.COLOR_ATTACHMENT0+Jt;ot.length=bt.length,At=!0}}else ot[0]!==a.COLOR_ATTACHMENT0&&(ot[0]=a.COLOR_ATTACHMENT0,At=!0);else ot[0]!==a.BACK&&(ot[0]=a.BACK,At=!0);At&&(e.isWebGL2?a.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function De(L){return m!==L?(a.useProgram(L),m=L,!0):!1}const St={[kn]:a.FUNC_ADD,[wc]:a.FUNC_SUBTRACT,[Ec]:a.FUNC_REVERSE_SUBTRACT};if(n)St[Qa]=a.MIN,St[tr]=a.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(St[Qa]=L.MIN_EXT,St[tr]=L.MAX_EXT)}const Pt={[Tc]:a.ZERO,[Ac]:a.ONE,[Cc]:a.SRC_COLOR,[va]:a.SRC_ALPHA,[Uc]:a.SRC_ALPHA_SATURATE,[Dc]:a.DST_COLOR,[Lc]:a.DST_ALPHA,[Rc]:a.ONE_MINUS_SRC_COLOR,[_a]:a.ONE_MINUS_SRC_ALPHA,[Ic]:a.ONE_MINUS_DST_COLOR,[Pc]:a.ONE_MINUS_DST_ALPHA,[Nc]:a.CONSTANT_COLOR,[Oc]:a.ONE_MINUS_CONSTANT_COLOR,[Fc]:a.CONSTANT_ALPHA,[kc]:a.ONE_MINUS_CONSTANT_ALPHA};function mt(L,rt,ot,At,bt,Jt,Qt,xe,Ie,te){if(L===En){p===!0&&(Tt(a.BLEND),p=!1);return}if(p===!1&&(Nt(a.BLEND),p=!0),L!==bc){if(L!==y||te!==N){if((_!==kn||T!==kn)&&(a.blendEquation(a.FUNC_ADD),_=kn,T=kn),te)switch(L){case ui:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ja:a.blendFunc(a.ONE,a.ONE);break;case Za:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ja:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ja:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Za:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ja:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,R=null,A=null,I=null,M.set(0,0,0),w=0,y=L,N=te}return}bt=bt||rt,Jt=Jt||ot,Qt=Qt||At,(rt!==_||bt!==T)&&(a.blendEquationSeparate(St[rt],St[bt]),_=rt,T=bt),(ot!==x||At!==R||Jt!==A||Qt!==I)&&(a.blendFuncSeparate(Pt[ot],Pt[At],Pt[Jt],Pt[Qt]),x=ot,R=At,A=Jt,I=Qt),(xe.equals(M)===!1||Ie!==w)&&(a.blendColor(xe.r,xe.g,xe.b,Ie),M.copy(xe),w=Ie),y=L,N=!1}function ce(L,rt){L.side===Ee?Tt(a.CULL_FACE):Nt(a.CULL_FACE);let ot=L.side===Le;rt&&(ot=!ot),kt(ot),L.blending===ui&&L.transparent===!1?mt(En):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),r.setMask(L.colorWrite);const At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Nt(a.SAMPLE_ALPHA_TO_COVERAGE):Tt(a.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){z!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),z=L)}function E(L){L!==Mc?(Nt(a.CULL_FACE),L!==j&&(L===Ka?a.cullFace(a.BACK):L===Sc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Tt(a.CULL_FACE),j=L}function S(L){L!==P&&(q&&a.lineWidth(L),P=L)}function B(L,rt,ot){L?(Nt(a.POLYGON_OFFSET_FILL),(O!==rt||W!==ot)&&(a.polygonOffset(rt,ot),O=rt,W=ot)):Tt(a.POLYGON_OFFSET_FILL)}function Q(L){L?Nt(a.SCISSOR_TEST):Tt(a.SCISSOR_TEST)}function J(L){L===void 0&&(L=a.TEXTURE0+Y-1),et!==L&&(a.activeTexture(L),et=L)}function tt(L,rt,ot){ot===void 0&&(et===null?ot=a.TEXTURE0+Y-1:ot=et);let At=nt[ot];At===void 0&&(At={type:void 0,texture:void 0},nt[ot]=At),(At.type!==L||At.texture!==rt)&&(et!==ot&&(a.activeTexture(ot),et=ot),a.bindTexture(L,rt||It[L]),At.type=L,At.texture=rt)}function vt(){const L=nt[et];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){lt.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),lt.copy(L))}function $t(L){yt.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),yt.copy(L))}function he(L,rt){let ot=d.get(rt);ot===void 0&&(ot=new WeakMap,d.set(rt,ot));let At=ot.get(L);At===void 0&&(At=a.getUniformBlockIndex(rt,L.name),ot.set(L,At))}function zt(L,rt){const At=d.get(rt).get(L);h.get(rt)!==At&&(a.uniformBlockBinding(rt,At,L.__bindingPointIndex),h.set(rt,At))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},et=null,nt={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,R=null,T=null,A=null,I=null,M=new ut(0,0,0),w=0,N=!1,z=null,j=null,P=null,O=null,W=null,lt.set(0,0,a.canvas.width,a.canvas.height),yt.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Nt,disable:Tt,bindFramebuffer:qt,drawBuffers:F,useProgram:De,setBlending:mt,setMaterial:ce,setFlipSided:kt,setCullFace:E,setLineWidth:S,setPolygonOffset:B,setScissorTest:Q,activeTexture:J,bindTexture:tt,unbindTexture:vt,compressedTexImage2D:ct,compressedTexImage3D:ft,texImage2D:Mt,texImage3D:pt,updateUBOMapping:he,uniformBlockBinding:zt,texStorage2D:Wt,texStorage3D:Lt,texSubImage2D:Et,texSubImage3D:Bt,compressedTexSubImage2D:Z,compressedTexSubImage3D:jt,scissor:Ot,viewport:$t,reset:it}}function Pp(a,t,e,n,i,s,o){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return f?new OffscreenCanvas(E,S):Ss("canvas")}function v(E,S,B,Q){let J=1;if((E.width>Q||E.height>Q)&&(J=Q/Math.max(E.width,E.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const tt=S?Ms:Math.floor,vt=tt(J*E.width),ct=tt(J*E.height);d===void 0&&(d=g(vt,ct));const ft=B?g(vt,ct):d;return ft.width=vt,ft.height=ct,ft.getContext("2d").drawImage(E,0,0,vt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+ct+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return ba(E.width)&&ba(E.height)}function p(E){return r?!1:E.wrapS!==tn||E.wrapT!==tn||E.minFilter!==ke&&E.minFilter!==$e}function y(E,S){return E.generateMipmaps&&S&&E.minFilter!==ke&&E.minFilter!==$e}function _(E){a.generateMipmap(E)}function x(E,S,B,Q,J=!1){if(r===!1)return S;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let tt=S;if(S===a.RED&&(B===a.FLOAT&&(tt=a.R32F),B===a.HALF_FLOAT&&(tt=a.R16F),B===a.UNSIGNED_BYTE&&(tt=a.R8)),S===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(tt=a.R8UI),B===a.UNSIGNED_SHORT&&(tt=a.R16UI),B===a.UNSIGNED_INT&&(tt=a.R32UI),B===a.BYTE&&(tt=a.R8I),B===a.SHORT&&(tt=a.R16I),B===a.INT&&(tt=a.R32I)),S===a.RG&&(B===a.FLOAT&&(tt=a.RG32F),B===a.HALF_FLOAT&&(tt=a.RG16F),B===a.UNSIGNED_BYTE&&(tt=a.RG8)),S===a.RGBA){const vt=J?vs:Zt.getTransfer(Q);B===a.FLOAT&&(tt=a.RGBA32F),B===a.HALF_FLOAT&&(tt=a.RGBA16F),B===a.UNSIGNED_BYTE&&(tt=vt===ee?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(tt=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(tt=a.RGB5_A1)}return(tt===a.R16F||tt===a.R32F||tt===a.RG16F||tt===a.RG32F||tt===a.RGBA16F||tt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(E,S,B){return y(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){return E===ke||E===er||E===Os?a.NEAREST:a.LINEAR}function A(E){const S=E.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&h.delete(S)}function I(E){const S=E.target;S.removeEventListener("dispose",I),N(S)}function M(E){const S=n.get(E);if(S.__webglInit===void 0)return;const B=E.source,Q=u.get(B);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(Q).length===0&&u.delete(B)}n.remove(E)}function w(E){const S=n.get(E);a.deleteTexture(S.__webglTexture);const B=E.source,Q=u.get(B);delete Q[S.__cacheKey],o.memory.textures--}function N(E){const S=E.texture,B=n.get(E),Q=n.get(S);if(Q.__webglTexture!==void 0&&(a.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let tt=0;tt<B.__webglFramebuffer[J].length;tt++)a.deleteFramebuffer(B.__webglFramebuffer[J][tt]);else a.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)a.deleteFramebuffer(B.__webglFramebuffer[J]);else a.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,tt=S.length;J<tt;J++){const vt=n.get(S[J]);vt.__webglTexture&&(a.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(E)}let z=0;function j(){z=0}function P(){const E=z;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),z+=1,E}function O(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function W(E,S){const B=n.get(E);if(E.isVideoTexture&&ce(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(B,E,S);return}}e.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+S)}function Y(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){lt(B,E,S);return}e.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+S)}function q(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){lt(B,E,S);return}e.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+S)}function X(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){yt(B,E,S);return}e.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+S)}const $={[Fe]:a.REPEAT,[tn]:a.CLAMP_TO_EDGE,[Ma]:a.MIRRORED_REPEAT},et={[ke]:a.NEAREST,[er]:a.NEAREST_MIPMAP_NEAREST,[Os]:a.NEAREST_MIPMAP_LINEAR,[$e]:a.LINEAR,[Qc]:a.LINEAR_MIPMAP_NEAREST,[Oi]:a.LINEAR_MIPMAP_LINEAR},nt={[dl]:a.NEVER,[vl]:a.ALWAYS,[ul]:a.LESS,[Wo]:a.LEQUAL,[fl]:a.EQUAL,[gl]:a.GEQUAL,[pl]:a.GREATER,[ml]:a.NOTEQUAL};function H(E,S,B){if(B?(a.texParameteri(E,a.TEXTURE_WRAP_S,$[S.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,$[S.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,$[S.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,et[S.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,et[S.minFilter])):(a.texParameteri(E,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(E,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(S.wrapS!==tn||S.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,a.TEXTURE_MAG_FILTER,T(S.magFilter)),a.texParameteri(E,a.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==ke&&S.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ke||S.minFilter!==Os&&S.minFilter!==Oi||S.type===bn&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===Fi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A));const Q=S.source;let J=u.get(Q);J===void 0&&(J={},u.set(Q,J));const tt=O(S);if(tt!==E.__cacheKey){J[tt]===void 0&&(J[tt]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[tt].usedTimes++;const vt=J[E.__cacheKey];vt!==void 0&&(J[E.__cacheKey].usedTimes--,vt.usedTimes===0&&w(S)),E.__cacheKey=tt,E.__webglTexture=J[tt].texture}return B}function lt(E,S,B){let Q=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=a.TEXTURE_3D);const J=K(E,S),tt=S.source;e.bindTexture(Q,E.__webglTexture,a.TEXTURE0+B);const vt=n.get(tt);if(tt.version!==vt.__version||J===!0){e.activeTexture(a.TEXTURE0+B);const ct=Zt.getPrimaries(Zt.workingColorSpace),ft=S.colorSpace===Ke?null:Zt.getPrimaries(S.colorSpace),Et=S.colorSpace===Ke||ct===ft?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Bt=p(S)&&m(S.image)===!1;let Z=v(S.image,Bt,!1,i.maxTextureSize);Z=kt(S,Z);const jt=m(Z)||r,Wt=s.convert(S.format,S.colorSpace);let Lt=s.convert(S.type),Mt=x(S.internalFormat,Wt,Lt,S.colorSpace,S.isVideoTexture);H(Q,S,jt);let pt;const Ot=S.mipmaps,$t=r&&S.isVideoTexture!==!0&&Mt!==zo,he=vt.__version===void 0||J===!0,zt=R(S,Z,jt);if(S.isDepthTexture)Mt=a.DEPTH_COMPONENT,r?S.type===bn?Mt=a.DEPTH_COMPONENT32F:S.type===Sn?Mt=a.DEPTH_COMPONENT24:S.type===Gn?Mt=a.DEPTH24_STENCIL8:Mt=a.DEPTH_COMPONENT16:S.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===zn&&Mt===a.DEPTH_COMPONENT&&S.type!==La&&S.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Sn,Lt=s.convert(S.type)),S.format===gi&&Mt===a.DEPTH_COMPONENT&&(Mt=a.DEPTH_STENCIL,S.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Gn,Lt=s.convert(S.type))),he&&($t?e.texStorage2D(a.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(a.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Wt,Lt,null));else if(S.isDataTexture)if(Ot.length>0&&jt){$t&&he&&e.texStorage2D(a.TEXTURE_2D,zt,Mt,Ot[0].width,Ot[0].height);for(let it=0,L=Ot.length;it<L;it++)pt=Ot[it],$t?e.texSubImage2D(a.TEXTURE_2D,it,0,0,pt.width,pt.height,Wt,Lt,pt.data):e.texImage2D(a.TEXTURE_2D,it,Mt,pt.width,pt.height,0,Wt,Lt,pt.data);S.generateMipmaps=!1}else $t?(he&&e.texStorage2D(a.TEXTURE_2D,zt,Mt,Z.width,Z.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,Z.width,Z.height,Wt,Lt,Z.data)):e.texImage2D(a.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Wt,Lt,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&he&&e.texStorage3D(a.TEXTURE_2D_ARRAY,zt,Mt,Ot[0].width,Ot[0].height,Z.depth);for(let it=0,L=Ot.length;it<L;it++)pt=Ot[it],S.format!==en?Wt!==null?$t?e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,Z.depth,Wt,pt.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,it,Mt,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(a.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,Z.depth,Wt,Lt,pt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,it,Mt,pt.width,pt.height,Z.depth,0,Wt,Lt,pt.data)}else{$t&&he&&e.texStorage2D(a.TEXTURE_2D,zt,Mt,Ot[0].width,Ot[0].height);for(let it=0,L=Ot.length;it<L;it++)pt=Ot[it],S.format!==en?Wt!==null?$t?e.compressedTexSubImage2D(a.TEXTURE_2D,it,0,0,pt.width,pt.height,Wt,pt.data):e.compressedTexImage2D(a.TEXTURE_2D,it,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(a.TEXTURE_2D,it,0,0,pt.width,pt.height,Wt,Lt,pt.data):e.texImage2D(a.TEXTURE_2D,it,Mt,pt.width,pt.height,0,Wt,Lt,pt.data)}else if(S.isDataArrayTexture)$t?(he&&e.texStorage3D(a.TEXTURE_2D_ARRAY,zt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Lt,Z.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,Wt,Lt,Z.data);else if(S.isData3DTexture)$t?(he&&e.texStorage3D(a.TEXTURE_3D,zt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Lt,Z.data)):e.texImage3D(a.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,Wt,Lt,Z.data);else if(S.isFramebufferTexture){if(he)if($t)e.texStorage2D(a.TEXTURE_2D,zt,Mt,Z.width,Z.height);else{let it=Z.width,L=Z.height;for(let rt=0;rt<zt;rt++)e.texImage2D(a.TEXTURE_2D,rt,Mt,it,L,0,Wt,Lt,null),it>>=1,L>>=1}}else if(Ot.length>0&&jt){$t&&he&&e.texStorage2D(a.TEXTURE_2D,zt,Mt,Ot[0].width,Ot[0].height);for(let it=0,L=Ot.length;it<L;it++)pt=Ot[it],$t?e.texSubImage2D(a.TEXTURE_2D,it,0,0,Wt,Lt,pt):e.texImage2D(a.TEXTURE_2D,it,Mt,Wt,Lt,pt);S.generateMipmaps=!1}else $t?(he&&e.texStorage2D(a.TEXTURE_2D,zt,Mt,Z.width,Z.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,Wt,Lt,Z)):e.texImage2D(a.TEXTURE_2D,0,Mt,Wt,Lt,Z);y(S,jt)&&_(Q),vt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function yt(E,S,B){if(S.image.length!==6)return;const Q=K(E,S),J=S.source;e.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+B);const tt=n.get(J);if(J.version!==tt.__version||Q===!0){e.activeTexture(a.TEXTURE0+B);const vt=Zt.getPrimaries(Zt.workingColorSpace),ct=S.colorSpace===Ke?null:Zt.getPrimaries(S.colorSpace),ft=S.colorSpace===Ke||vt===ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Et=S.isCompressedTexture||S.image[0].isCompressedTexture,Bt=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let it=0;it<6;it++)!Et&&!Bt?Z[it]=v(S.image[it],!1,!0,i.maxCubemapSize):Z[it]=Bt?S.image[it].image:S.image[it],Z[it]=kt(S,Z[it]);const jt=Z[0],Wt=m(jt)||r,Lt=s.convert(S.format,S.colorSpace),Mt=s.convert(S.type),pt=x(S.internalFormat,Lt,Mt,S.colorSpace),Ot=r&&S.isVideoTexture!==!0,$t=tt.__version===void 0||Q===!0;let he=R(S,jt,Wt);H(a.TEXTURE_CUBE_MAP,S,Wt);let zt;if(Et){Ot&&$t&&e.texStorage2D(a.TEXTURE_CUBE_MAP,he,pt,jt.width,jt.height);for(let it=0;it<6;it++){zt=Z[it].mipmaps;for(let L=0;L<zt.length;L++){const rt=zt[L];S.format!==en?Lt!==null?Ot?e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,rt.width,rt.height,Lt,rt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,pt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,rt.width,rt.height,Lt,Mt,rt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,pt,rt.width,rt.height,0,Lt,Mt,rt.data)}}}else{zt=S.mipmaps,Ot&&$t&&(zt.length>0&&he++,e.texStorage2D(a.TEXTURE_CUBE_MAP,he,pt,Z[0].width,Z[0].height));for(let it=0;it<6;it++)if(Bt){Ot?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Z[it].width,Z[it].height,Lt,Mt,Z[it].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,pt,Z[it].width,Z[it].height,0,Lt,Mt,Z[it].data);for(let L=0;L<zt.length;L++){const ot=zt[L].image[it].image;Ot?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,ot.width,ot.height,Lt,Mt,ot.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,pt,ot.width,ot.height,0,Lt,Mt,ot.data)}}else{Ot?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,Mt,Z[it]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,pt,Lt,Mt,Z[it]);for(let L=0;L<zt.length;L++){const rt=zt[L];Ot?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,Lt,Mt,rt.image[it]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,pt,Lt,Mt,rt.image[it])}}}y(S,Wt)&&_(a.TEXTURE_CUBE_MAP),tt.__version=J.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xt(E,S,B,Q,J,tt){const vt=s.convert(B.format,B.colorSpace),ct=s.convert(B.type),ft=x(B.internalFormat,vt,ct,B.colorSpace);if(!n.get(S).__hasExternalTextures){const Bt=Math.max(1,S.width>>tt),Z=Math.max(1,S.height>>tt);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,ft,Bt,Z,S.depth,0,vt,ct,null):e.texImage2D(J,tt,ft,Bt,Z,0,vt,ct,null)}e.bindFramebuffer(a.FRAMEBUFFER,E),mt(S)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Q,J,n.get(B).__webglTexture,0,Pt(S)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Q,J,n.get(B).__webglTexture,tt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function It(E,S,B){if(a.bindRenderbuffer(a.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let Q=r===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(B||mt(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===bn?Q=a.DEPTH_COMPONENT32F:J.type===Sn&&(Q=a.DEPTH_COMPONENT24));const tt=Pt(S);mt(S)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,tt,Q,S.width,S.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,tt,Q,S.width,S.height)}else a.renderbufferStorage(a.RENDERBUFFER,Q,S.width,S.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Pt(S);B&&mt(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Q,a.DEPTH24_STENCIL8,S.width,S.height):mt(S)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Q,a.DEPTH24_STENCIL8,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,E)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<Q.length;J++){const tt=Q[J],vt=s.convert(tt.format,tt.colorSpace),ct=s.convert(tt.type),ft=x(tt.internalFormat,vt,ct,tt.colorSpace),Et=Pt(S);B&&mt(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Et,ft,S.width,S.height):mt(S)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Et,ft,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ft,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Nt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,J=Pt(S);if(S.depthTexture.format===zn)mt(S)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0);else if(S.depthTexture.format===gi)mt(S)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(E){const S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=a.createRenderbuffer(),It(S.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),It(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(E,S,B){const Q=n.get(E);S!==void 0&&xt(Q.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Tt(E)}function F(E){const S=E.texture,B=n.get(E),Q=n.get(S);E.addEventListener("dispose",I),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=S.version,o.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,tt=E.isWebGLMultipleRenderTargets===!0,vt=m(E)||r;if(J){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(r&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let ft=0;ft<S.mipmaps.length;ft++)B.__webglFramebuffer[ct][ft]=a.createFramebuffer()}else B.__webglFramebuffer[ct]=a.createFramebuffer()}else{if(r&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)B.__webglFramebuffer[ct]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(tt)if(i.drawBuffers){const ct=E.texture;for(let ft=0,Et=ct.length;ft<Et;ft++){const Bt=n.get(ct[ft]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&mt(E)===!1){const ct=tt?S:[S];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<ct.length;ft++){const Et=ct[ft];B.__webglColorRenderbuffer[ft]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const Bt=s.convert(Et.format,Et.colorSpace),Z=s.convert(Et.type),jt=x(Et.internalFormat,Bt,Z,Et.colorSpace,E.isXRRenderTarget===!0),Wt=Pt(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,Wt,jt,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ft,a.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),It(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(J){e.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),H(a.TEXTURE_CUBE_MAP,S,vt);for(let ct=0;ct<6;ct++)if(r&&S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)xt(B.__webglFramebuffer[ct][ft],E,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else xt(B.__webglFramebuffer[ct],E,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(S,vt)&&_(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ct=E.texture;for(let ft=0,Et=ct.length;ft<Et;ft++){const Bt=ct[ft],Z=n.get(Bt);e.bindTexture(a.TEXTURE_2D,Z.__webglTexture),H(a.TEXTURE_2D,Bt,vt),xt(B.__webglFramebuffer,E,Bt,a.COLOR_ATTACHMENT0+ft,a.TEXTURE_2D,0),y(Bt,vt)&&_(a.TEXTURE_2D)}e.unbindTexture()}else{let ct=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?ct=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,Q.__webglTexture),H(ct,S,vt),r&&S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)xt(B.__webglFramebuffer[ft],E,S,a.COLOR_ATTACHMENT0,ct,ft);else xt(B.__webglFramebuffer,E,S,a.COLOR_ATTACHMENT0,ct,0);y(S,vt)&&_(ct),e.unbindTexture()}E.depthBuffer&&Tt(E)}function De(E){const S=m(E)||r,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,J=B.length;Q<J;Q++){const tt=B[Q];if(y(tt,S)){const vt=E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,ct=n.get(tt).__webglTexture;e.bindTexture(vt,ct),_(vt),e.unbindTexture()}}}function St(E){if(r&&E.samples>0&&mt(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,Q=E.height;let J=a.COLOR_BUFFER_BIT;const tt=[],vt=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ct=n.get(E),ft=E.isWebGLMultipleRenderTargets===!0;if(ft)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(a.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Et,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,ct.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Et,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){tt.push(a.COLOR_ATTACHMENT0+Et),E.depthBuffer&&tt.push(vt);const Bt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Bt===!1&&(E.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ft&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]),Bt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[vt]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[vt])),ft){const Z=n.get(S[Et]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Z,0)}a.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,a.NEAREST),l&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ft)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(a.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Et,a.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]);const Bt=n.get(S[Et]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,ct.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Et,a.TEXTURE_2D,Bt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Pt(E){return Math.min(i.maxSamples,E.samples)}function mt(E){const S=n.get(E);return r&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(E){const S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function kt(E,S){const B=E.colorSpace,Q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Sa||B!==pn&&B!==Ke&&(Zt.getTransfer(B)===ee?r===!1?t.has("EXT_sRGB")===!0&&Q===en?(E.format=Sa,E.minFilter=$e,E.generateMipmaps=!1):S=Xo.sRGBToLinear(S):(Q!==en||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=mt}function Dp(a,t,e){const n=e.isWebGL2;function i(s,o=Ke){let r;const c=Zt.getTransfer(o);if(s===An)return a.UNSIGNED_BYTE;if(s===Oo)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Fo)return a.UNSIGNED_SHORT_5_5_5_1;if(s===tl)return a.BYTE;if(s===el)return a.SHORT;if(s===La)return a.UNSIGNED_SHORT;if(s===No)return a.INT;if(s===Sn)return a.UNSIGNED_INT;if(s===bn)return a.FLOAT;if(s===Fi)return n?a.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===nl)return a.ALPHA;if(s===en)return a.RGBA;if(s===il)return a.LUMINANCE;if(s===sl)return a.LUMINANCE_ALPHA;if(s===zn)return a.DEPTH_COMPONENT;if(s===gi)return a.DEPTH_STENCIL;if(s===Sa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===al)return a.RED;if(s===ko)return a.RED_INTEGER;if(s===rl)return a.RG;if(s===Bo)return a.RG_INTEGER;if(s===Go)return a.RGBA_INTEGER;if(s===Fs||s===ks||s===Bs||s===Gs)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nr||s===ir||s===sr||s===ar)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ar)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rr||s===or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===rr)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cr||s===lr||s===hr||s===dr||s===ur||s===fr||s===pr||s===mr||s===gr||s===vr||s===_r||s===xr||s===yr||s===Mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_r)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zs||s===Sr||s===br)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===zs)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===br)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ol||s===wr||s===Er||s===Tr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(s===wr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gn?n?a.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Ip extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Up={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Up)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Np extends _i{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=e.getContextAttributes();let m=null,p=null;const y=[],_=[],x=new gt;let R=null;const T=new qe;T.layers.enable(1),T.viewport=new oe;const A=new qe;A.layers.enable(2),A.viewport=new oe;const I=[T,A],M=new Ip;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=y[H];return K===void 0&&(K=new ha,y[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=y[H];return K===void 0&&(K=new ha,y[H]=K),K.getGripSpace()},this.getHand=function(H){let K=y[H];return K===void 0&&(K=new ha,y[H]=K),K.getHandSpace()};function z(H){const K=_.indexOf(H.inputSource);if(K===-1)return;const lt=y[K];lt!==void 0&&(lt.update(H.inputSource,H.frame,l||o),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",P);for(let H=0;H<y.length;H++){const K=_[H];K!==null&&(_[H]=null,y[H].disconnect(K))}w=null,N=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",j),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(x),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Hn(f.framebufferWidth,f.framebufferHeight,{format:en,type:An,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,lt=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=v.stencil?gi:zn,lt=v.stencil?Gn:Sn);const xt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(xt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Hn(u.textureWidth,u.textureHeight,{format:en,type:An,depthTexture:new ic(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const It=t.properties.get(p);It.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(r),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(H){for(let K=0;K<H.removed.length;K++){const lt=H.removed[K],yt=_.indexOf(lt);yt>=0&&(_[yt]=null,y[yt].disconnect(lt))}for(let K=0;K<H.added.length;K++){const lt=H.added[K];let yt=_.indexOf(lt);if(yt===-1){for(let It=0;It<y.length;It++)if(It>=_.length){_.push(lt),yt=It;break}else if(_[It]===null){_[It]=lt,yt=It;break}if(yt===-1)break}const xt=y[yt];xt&&xt.connect(lt)}}const O=new C,W=new C;function Y(H,K,lt){O.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(lt.matrixWorld);const yt=O.distanceTo(W),xt=K.projectionMatrix.elements,It=lt.projectionMatrix.elements,Nt=xt[14]/(xt[10]-1),Tt=xt[14]/(xt[10]+1),qt=(xt[9]+1)/xt[5],F=(xt[9]-1)/xt[5],De=(xt[8]-1)/xt[0],St=(It[8]+1)/It[0],Pt=Nt*De,mt=Nt*St,ce=yt/(-De+St),kt=ce*-De;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(kt),H.translateZ(ce),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Nt+ce,S=Tt+ce,B=Pt-kt,Q=mt+(yt-kt),J=qt*Tt/S*E,tt=F*Tt/S*E;H.projectionMatrix.makePerspective(B,Q,J,tt,E,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=A.near=T.near=H.near,M.far=A.far=T.far=H.far,(w!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);const K=H.parent,lt=M.cameras;q(M,K);for(let yt=0;yt<lt.length;yt++)q(lt[yt],K);lt.length===2?Y(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),X(H,M,K)};function X(H,K,lt){lt===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ki*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let $=null;function et(H,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let yt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,yt=!0);for(let xt=0;xt<lt.length;xt++){const It=lt[xt];let Nt=null;if(f!==null)Nt=f.getViewport(It);else{const qt=d.getViewSubImage(u,It);Nt=qt.viewport,xt===0&&(t.setRenderTargetTextures(p,qt.colorTexture,u.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(p))}let Tt=I[xt];Tt===void 0&&(Tt=new qe,Tt.layers.enable(xt),Tt.viewport=new oe,I[xt]=Tt),Tt.matrix.fromArray(It.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(It.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),xt===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),yt===!0&&M.cameras.push(Tt)}}for(let lt=0;lt<y.length;lt++){const yt=_[lt],xt=y[lt];yt!==null&&xt!==void 0&&xt.update(yt,K,l||o)}$&&$(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const nt=new ec;nt.setAnimationLoop(et),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}function Op(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jo(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fp(a,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(y,R);const T=t.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){const _=d();y.__bindingPointIndex=_;const x=a.createBuffer(),R=y.__size,T=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,R,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<r;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=i[y.id],x=y.uniforms,R=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let T=0,A=x.length;T<A;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,w=I.length;M<w;M++){const N=I[M];if(f(N,T,M,R)===!0){const z=N.__offset,j=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let O=0;O<j.length;O++){const W=j[O],Y=v(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,a.bufferSubData(a.UNIFORM_BUFFER,z+P,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,z,N.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,_,x,R){const T=y.value,A=_+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const _=y.uniforms;let x=0;const R=16;for(let A=0,I=_.length;A<I;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,N=M.length;w<N;w++){const z=M[w],j=Array.isArray(z.value)?z.value:[z.value];for(let P=0,O=j.length;P<O;P++){const W=j[P],Y=v(W),q=x%R;q!==0&&R-q<Y.boundary&&(x+=R-q),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Y.storage}}}const T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)a.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class lc{constructor(t={}){const{canvas:e=Dl(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const _=this;let x=!1,R=0,T=0,A=null,I=-1,M=null;const w=new oe,N=new oe;let z=null;const j=new ut(0);let P=0,O=e.width,W=e.height,Y=1,q=null,X=null;const $=new oe(0,0,O,W),et=new oe(0,0,O,W);let nt=!1;const H=new Na;let K=!1,lt=!1,yt=null;const xt=new se,It=new gt,Nt=new C,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return A===null?Y:1}let F=n;function De(b,U){for(let G=0;G<b.length;G++){const V=b[G],k=e.getContext(V,U);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),F=De(U,b),F===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,Pt,mt,ce,kt,E,S,B,Q,J,tt,vt,ct,ft,Et,Bt,Z,jt,Wt,Lt,Mt,pt,Ot,$t;function he(){St=new Xu(F),Pt=new Gu(F,St,t),St.init(Pt),pt=new Dp(F,St,Pt),mt=new Lp(F,St,Pt),ce=new Ku(F),kt=new gp,E=new Pp(F,St,mt,kt,Pt,pt,ce),S=new Vu(_),B=new qu(_),Q=new ih(F,Pt),Ot=new ku(F,St,Q,Pt),J=new Yu(F,Q,ce,Ot),tt=new Qu(F,J,Q,ce),Wt=new Ju(F,Pt,E),Bt=new zu(kt),vt=new mp(_,S,B,St,Pt,Ot,Bt),ct=new Op(_,kt),ft=new _p,Et=new wp(St,Pt),jt=new Fu(_,S,B,mt,tt,u,c),Z=new Rp(_,tt,Pt),$t=new Fp(F,ce,Pt,mt),Lt=new Bu(F,St,ce,Pt),Mt=new $u(F,St,ce,Pt),ce.programs=vt.programs,_.capabilities=Pt,_.extensions=St,_.properties=kt,_.renderLists=ft,_.shadowMap=Z,_.state=mt,_.info=ce}he();const zt=new Np(_,F);this.xr=zt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(O,W,!1))},this.getSize=function(b){return b.set(O,W)},this.setSize=function(b,U,G=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,W=U,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(O*Y,W*Y).floor()},this.setDrawingBufferSize=function(b,U,G){O=b,W=U,Y=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,U,G,V){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,U,G,V),mt.viewport(w.copy($).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,U,G,V){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,G,V),mt.scissor(N.copy(et).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){mt.setScissorTest(nt=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,U=!0,G=!0){let V=0;if(b){let k=!1;if(A!==null){const ht=A.texture.format;k=ht===Go||ht===Bo||ht===ko}if(k){const ht=A.texture.type,_t=ht===An||ht===Sn||ht===La||ht===Gn||ht===Oo||ht===Fo,wt=jt.getClearColor(),Rt=jt.getClearAlpha(),Gt=wt.r,Dt=wt.g,Ut=wt.b;_t?(f[0]=Gt,f[1]=Dt,f[2]=Ut,f[3]=Rt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Gt,g[1]=Dt,g[2]=Ut,g[3]=Rt,F.clearBufferiv(F.COLOR,0,g))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),Et.dispose(),kt.dispose(),S.dispose(),B.dispose(),tt.dispose(),Ot.dispose(),$t.dispose(),vt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Ie),zt.removeEventListener("sessionend",te),yt&&(yt.dispose(),yt=null),Ue.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=ce.autoReset,U=Z.enabled,G=Z.autoUpdate,V=Z.needsUpdate,k=Z.type;he(),ce.autoReset=b,Z.enabled=U,Z.autoUpdate=G,Z.needsUpdate=V,Z.type=k}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const U=b.target;U.removeEventListener("dispose",ot),At(U)}function At(b){bt(b),kt.remove(b)}function bt(b){const U=kt.get(b).programs;U!==void 0&&(U.forEach(function(G){vt.releaseProgram(G)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,V,k,ht){U===null&&(U=Tt);const _t=k.isMesh&&k.matrixWorld.determinant()<0,wt=mc(b,U,G,V,k);mt.setMaterial(V,_t);let Rt=G.index,Gt=1;if(V.wireframe===!0){if(Rt=J.getWireframeAttribute(G),Rt===void 0)return;Gt=2}const Dt=G.drawRange,Ut=G.attributes.position;let ue=Dt.start*Gt,Ve=(Dt.start+Dt.count)*Gt;ht!==null&&(ue=Math.max(ue,ht.start*Gt),Ve=Math.min(Ve,(ht.start+ht.count)*Gt)),Rt!==null?(ue=Math.max(ue,0),Ve=Math.min(Ve,Rt.count)):Ut!=null&&(ue=Math.max(ue,0),Ve=Math.min(Ve,Ut.count));const ye=Ve-ue;if(ye<0||ye===1/0)return;Ot.setup(k,V,wt,G,Rt);let rn,le=Lt;if(Rt!==null&&(rn=Q.get(Rt),le=Mt,le.setIndex(rn)),k.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*qt()),le.setMode(F.LINES)):le.setMode(F.TRIANGLES);else if(k.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),mt.setLineWidth(Vt*qt()),k.isLineSegments?le.setMode(F.LINES):k.isLineLoop?le.setMode(F.LINE_LOOP):le.setMode(F.LINE_STRIP)}else k.isPoints?le.setMode(F.POINTS):k.isSprite&&le.setMode(F.TRIANGLES);if(k.isBatchedMesh)le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)le.renderInstances(ue,ye,k.count);else if(G.isInstancedBufferGeometry){const Vt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ds=Math.min(G.instanceCount,Vt);le.renderInstances(ue,ye,Ds)}else le.render(ue,ye)};function Jt(b,U,G){b.transparent===!0&&b.side===Ee&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,zi(b,U,G),b.side=Cn,b.needsUpdate=!0,zi(b,U,G),b.side=Ee):zi(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),m=Et.get(G),m.init(),y.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);const V=new Set;return b.traverse(function(k){const ht=k.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const wt=ht[_t];Jt(wt,G,k),V.add(wt)}else Jt(ht,G,k),V.add(ht)}),y.pop(),m=null,V},this.compileAsync=function(b,U,G=null){const V=this.compile(b,U,G);return new Promise(k=>{function ht(){if(V.forEach(function(_t){kt.get(_t).currentProgram.isReady()&&V.delete(_t)}),V.size===0){k(b);return}setTimeout(ht,10)}St.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Qt=null;function xe(b){Qt&&Qt(b)}function Ie(){Ue.stop()}function te(){Ue.start()}const Ue=new ec;Ue.setAnimationLoop(xe),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(b){Qt=b,zt.setAnimationLoop(b),b===null?Ue.stop():Ue.start()},zt.addEventListener("sessionstart",Ie),zt.addEventListener("sessionend",te),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(U),U=zt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),m=Et.get(b,y.length),m.init(),y.push(m),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,K=Bt.init(this.clippingPlanes,lt),v=ft.get(b,p.length),v.init(),p.push(v),sn(b,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,X),this.info.render.frame++,K===!0&&Bt.beginShadows();const G=m.state.shadowsArray;if(Z.render(G,b,U),K===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(v,b),m.setupLights(_._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let k=0,ht=V.length;k<ht;k++){const _t=V[k];Ha(v,b,_t,_t.viewport)}}else Ha(v,b,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),Ot.resetDefaultState(),I=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function sn(b,U,G,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){V&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const _t=tt.update(b),wt=b.material;wt.visible&&v.push(b,_t,wt,G,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){const _t=tt.update(b),wt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Nt.copy(_t.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(wt)){const Rt=_t.groups;for(let Gt=0,Dt=Rt.length;Gt<Dt;Gt++){const Ut=Rt[Gt],ue=wt[Ut.materialIndex];ue&&ue.visible&&v.push(b,_t,ue,G,Nt.z,Ut)}}else wt.visible&&v.push(b,_t,wt,G,Nt.z,null)}}const ht=b.children;for(let _t=0,wt=ht.length;_t<wt;_t++)sn(ht[_t],U,G,V)}function Ha(b,U,G,V){const k=b.opaque,ht=b.transmissive,_t=b.transparent;m.setupLightsView(G),K===!0&&Bt.setGlobalState(_.clippingPlanes,G),ht.length>0&&pc(k,ht,U,G),V&&mt.viewport(w.copy(V)),k.length>0&&Gi(k,U,G),ht.length>0&&Gi(ht,U,G),_t.length>0&&Gi(_t,U,G),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function pc(b,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ht=Pt.isWebGL2;yt===null&&(yt=new Hn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Fi:An,minFilter:Oi,samples:ht?4:0})),_.getDrawingBufferSize(It),ht?yt.setSize(It.x,It.y):yt.setSize(Ms(It.x),Ms(It.y));const _t=_.getRenderTarget();_.setRenderTarget(yt),_.getClearColor(j),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const wt=_.toneMapping;_.toneMapping=Tn,Gi(b,G,V),E.updateMultisampleRenderTarget(yt),E.updateRenderTargetMipmap(yt);let Rt=!1;for(let Gt=0,Dt=U.length;Gt<Dt;Gt++){const Ut=U[Gt],ue=Ut.object,Ve=Ut.geometry,ye=Ut.material,rn=Ut.group;if(ye.side===Ee&&ue.layers.test(V.layers)){const le=ye.side;ye.side=Le,ye.needsUpdate=!0,Wa(ue,G,V,Ve,ye,rn),ye.side=le,ye.needsUpdate=!0,Rt=!0}}Rt===!0&&(E.updateMultisampleRenderTarget(yt),E.updateRenderTargetMipmap(yt)),_.setRenderTarget(_t),_.setClearColor(j,P),_.toneMapping=wt}function Gi(b,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ht=b.length;k<ht;k++){const _t=b[k],wt=_t.object,Rt=_t.geometry,Gt=V===null?_t.material:V,Dt=_t.group;wt.layers.test(G.layers)&&Wa(wt,U,G,Rt,Gt,Dt)}}function Wa(b,U,G,V,k,ht){b.onBeforeRender(_,U,G,V,k,ht),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,U,G,V,b,ht),k.transparent===!0&&k.side===Ee&&k.forceSinglePass===!1?(k.side=Le,k.needsUpdate=!0,_.renderBufferDirect(G,U,V,k,b,ht),k.side=Cn,k.needsUpdate=!0,_.renderBufferDirect(G,U,V,k,b,ht),k.side=Ee):_.renderBufferDirect(G,U,V,k,b,ht),b.onAfterRender(_,U,G,V,k,ht)}function zi(b,U,G){U.isScene!==!0&&(U=Tt);const V=kt.get(b),k=m.state.lights,ht=m.state.shadowsArray,_t=k.state.version,wt=vt.getParameters(b,k.state,ht,U,G),Rt=vt.getProgramCacheKey(wt);let Gt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?B:S).get(b.envMap||V.environment),Gt===void 0&&(b.addEventListener("dispose",ot),Gt=new Map,V.programs=Gt);let Dt=Gt.get(Rt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===_t)return Xa(b,wt),Dt}else wt.uniforms=vt.getUniforms(b),b.onBuild(G,wt,_),b.onBeforeCompile(wt,_),Dt=vt.acquireProgram(wt,Rt),Gt.set(Rt,Dt),V.uniforms=wt.uniforms;const Ut=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),Xa(b,wt),V.needsLights=vc(b),V.lightsStateVersion=_t,V.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function qa(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ms.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Xa(b,U){const G=kt.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function mc(b,U,G,V,k){U.isScene!==!0&&(U=Tt),E.resetTextureUnits();const ht=U.fog,_t=V.isMeshStandardMaterial?U.environment:null,wt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pn,Rt=(V.isMeshStandardMaterial?B:S).get(V.envMap||_t),Gt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Dt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,Ve=!!G.morphAttributes.color;let ye=Tn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=_.toneMapping);const rn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=rn!==void 0?rn.length:0,Vt=kt.get(V),Ds=m.state.lights;if(K===!0&&(lt===!0||b!==M)){const Xe=b===M&&V.id===I;Bt.setState(V,b,Xe)}let de=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ds.state.version||Vt.outputColorSpace!==wt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||Vt.envMap!==Rt||V.fog===!0&&Vt.fog!==ht||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Bt.numPlanes||Vt.numIntersection!==Bt.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Dt||Vt.morphTargets!==Ut||Vt.morphNormals!==ue||Vt.morphColors!==Ve||Vt.toneMapping!==ye||Pt.isWebGL2===!0&&Vt.morphTargetsCount!==le)&&(de=!0):(de=!0,Vt.__version=V.version);let Rn=Vt.currentProgram;de===!0&&(Rn=zi(V,U,k));let Ya=!1,bi=!1,Is=!1;const Ae=Rn.getUniforms(),Ln=Vt.uniforms;if(mt.useProgram(Rn.program)&&(Ya=!0,bi=!0,Is=!0),V.id!==I&&(I=V.id,bi=!0),Ya||M!==b){Ae.setValue(F,"projectionMatrix",b.projectionMatrix),Ae.setValue(F,"viewMatrix",b.matrixWorldInverse);const Xe=Ae.map.cameraPosition;Xe!==void 0&&Xe.setValue(F,Nt.setFromMatrixPosition(b.matrixWorld)),Pt.logarithmicDepthBuffer&&Ae.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,bi=!0,Is=!0)}if(k.isSkinnedMesh){Ae.setOptional(F,k,"bindMatrix"),Ae.setOptional(F,k,"bindMatrixInverse");const Xe=k.skeleton;Xe&&(Pt.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ae.setValue(F,"boneTexture",Xe.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ae.setOptional(F,k,"batchingTexture"),Ae.setValue(F,"batchingTexture",k._matricesTexture,E));const Us=G.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&Pt.isWebGL2===!0)&&Wt.update(k,G,Rn),(bi||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,Ae.setValue(F,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ln.envMap.value=Rt,Ln.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),bi&&(Ae.setValue(F,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&gc(Ln,Is),ht&&V.fog===!0&&ct.refreshFogUniforms(Ln,ht),ct.refreshMaterialUniforms(Ln,V,Y,W,yt),ms.upload(F,qa(Vt),Ln,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ms.upload(F,qa(Vt),Ln,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(F,"center",k.center),Ae.setValue(F,"modelViewMatrix",k.modelViewMatrix),Ae.setValue(F,"normalMatrix",k.normalMatrix),Ae.setValue(F,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xe=V.uniformsGroups;for(let Ns=0,_c=Xe.length;Ns<_c;Ns++)if(Pt.isWebGL2){const $a=Xe[Ns];$t.update($a,Rn),$t.bind($a,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function gc(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function vc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,G){kt.get(b.texture).__webglTexture=U,kt.get(b.depthTexture).__webglTexture=G;const V=kt.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const G=kt.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){A=b,R=U,T=G;let V=!0,k=null,ht=!1,_t=!1;if(b){const Rt=kt.get(b);Rt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Rt.__webglFramebuffer===void 0?E.setupRenderTarget(b):Rt.__hasExternalTextures&&E.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);const Dt=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?k=Dt[U][G]:k=Dt[U],ht=!0):Pt.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?k=kt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[G]:k=Dt,w.copy(b.viewport),N.copy(b.scissor),z=b.scissorTest}else w.copy($).multiplyScalar(Y).floor(),N.copy(et).multiplyScalar(Y).floor(),z=nt;if(mt.bindFramebuffer(F.FRAMEBUFFER,k)&&Pt.drawBuffers&&V&&mt.drawBuffers(b,k),mt.viewport(w),mt.scissor(N),mt.setScissorTest(z),ht){const Rt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,G)}else if(_t){const Rt=kt.get(b.texture),Gt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Gt)}I=-1},this.readRenderTargetPixels=function(b,U,G,V,k,ht,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){mt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Rt=b.texture,Gt=Rt.format,Dt=Rt.type;if(Gt!==en&&pt.convert(Gt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Dt===Fi&&(St.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Dt!==An&&pt.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===bn&&(Pt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&G>=0&&G<=b.height-k&&F.readPixels(U,G,V,k,pt.convert(Gt),pt.convert(Dt),ht)}finally{const Rt=A!==null?kt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(b,U,G=0){const V=Math.pow(2,-G),k=Math.floor(U.image.width*V),ht=Math.floor(U.image.height*V);E.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,b.x,b.y,k,ht),mt.unbindTexture()},this.copyTextureToTexture=function(b,U,G,V=0){const k=U.image.width,ht=U.image.height,_t=pt.convert(G.format),wt=pt.convert(G.type);E.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,b.x,b.y,k,ht,_t,wt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,_t,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,b.x,b.y,_t,wt,U.image),V===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G,V,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=b.max.x-b.min.x+1,_t=b.max.y-b.min.y+1,wt=b.max.z-b.min.z+1,Rt=pt.convert(V.format),Gt=pt.convert(V.type);let Dt;if(V.isData3DTexture)E.setTexture3D(V,0),Dt=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)E.setTexture2DArray(V,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Ut=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ve=F.getParameter(F.UNPACK_SKIP_PIXELS),ye=F.getParameter(F.UNPACK_SKIP_ROWS),rn=F.getParameter(F.UNPACK_SKIP_IMAGES),le=G.isCompressedTexture?G.mipmaps[k]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Dt,k,U.x,U.y,U.z,ht,_t,wt,Rt,Gt,le.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,k,U.x,U.y,U.z,ht,_t,wt,Rt,le.data)):F.texSubImage3D(Dt,k,U.x,U.y,U.z,ht,_t,wt,Rt,Gt,le),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rn),k===0&&V.generateMipmaps&&F.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,mt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pa?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Vn:Vo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vn?Se:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class kp extends lc{}kp.prototype.isWebGL1Renderer=!0;class Fa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new Fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class go extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const oi=new se,vo=new se,ds=[],_o=new Wn,Gp=new se,Ci=new D,Ri=new yi;class da extends D{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new go(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),_o.copy(t.boundingBox).applyMatrix4(oi),this.boundingBox.union(_o)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),Ri.copy(t.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Ri)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),t.ray.intersectsSphere(Ri)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,oi),vo.multiplyMatrices(n,oi),Ci.matrixWorld=vo,Ci.raycast(t,ds);for(let o=0,r=ds.length;o<r;o++){const c=ds[o];c.instanceId=s,c.object=this,e.push(c)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new go(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ta extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xo=new se,Aa=new Ia,us=new yi,fs=new C;class yo extends ge{constructor(t=new Pe,e=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=s,t.ray.intersectsSphere(us)===!1)return;xo.copy(i).invert(),Aa.copy(t.ray).applyMatrix4(xo);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);fs.fromBufferAttribute(d,m),Mo(fs,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)fs.fromBufferAttribute(d,g),Mo(fs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Mo(a,t,e,n,i,s,o){const r=Aa.distanceSqToPoint(a);if(r<e){const c=new C;Aa.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:o})}}class Nn extends Ge{constructor(t,e,n,i,s,o,r,c,l){super(t,e,n,i,s,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let r=0,c=s-1,l;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),l=n[i]-o,l<0)r=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),r=this.getPoint(s),c=e||(o.isVector2?new gt:new C);return c.copy(r).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],s=[],o=[],r=new C,c=new se;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],r),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(be(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(r,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(be(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(r.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends gn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new gt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const r=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zp extends hc{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ka(){let a=0,t=0,e=0,n=0;function i(s,o,r,c){a=s,t=r,e=-3*s+3*o-2*r-c,n=2*s-2*o+r+c}return{initCatmullRom:function(s,o,r,c,l){i(o,r,l*(r-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,r,c,l,h,d){let u=(o-s)/l-(r-s)/(l+h)+(r-o)/h,f=(r-o)/h-(c-o)/(h+d)+(c-r)/d;u*=h,f*=h,i(o,r,u,f)},calc:function(s){const o=s*s,r=o*s;return a+t*s+e*o+n*r}}}const ps=new C,ua=new ka,fa=new ka,pa=new ka;class Ba extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:c===0&&r===s-1&&(r=s-2,c=1);let l,h;this.closed||r>0?l=i[(r-1)%s]:(ps.subVectors(i[0],i[1]).add(i[0]),l=ps);const d=i[r%s],u=i[(r+1)%s];if(this.closed||r+2<s?h=i[(r+2)%s]:(ps.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ua.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),fa.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),pa.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),fa.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),pa.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ua.calc(c),fa.calc(c),pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function So(a,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,r=a*a,c=a*r;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*r+s*a+e}function Vp(a,t){const e=1-a;return e*e*t}function Hp(a,t){return 2*(1-a)*a*t}function Wp(a,t){return a*a*t}function Ui(a,t,e,n){return Vp(a,t)+Hp(a,e)+Wp(a,n)}function qp(a,t){const e=1-a;return e*e*e*t}function Xp(a,t){const e=1-a;return 3*e*e*a*t}function Yp(a,t){return 3*(1-a)*a*a*t}function $p(a,t){return a*a*a*t}function Ni(a,t,e,n,i){return qp(a,t)+Xp(a,e)+Yp(a,n)+$p(a,i)}class Kp extends gn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(Ni(t,i.x,s.x,o.x,r.x),Ni(t,i.y,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jp extends gn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(Ni(t,i.x,s.x,o.x,r.x),Ni(t,i.y,s.y,o.y,r.y),Ni(t,i.z,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zp extends gn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jp extends gn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qp extends gn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ui(t,i.x,s.x,o.x),Ui(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dc extends gn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ui(t,i.x,s.x,o.x),Ui(t,i.y,s.y,o.y),Ui(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),r=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(So(r,c.x,l.x,h.x,d.x),So(r,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var em=Object.freeze({__proto__:null,ArcCurve:zp,CatmullRomCurve3:Ba,CubicBezierCurve:Kp,CubicBezierCurve3:jp,EllipseCurve:hc,LineCurve:Zp,LineCurve3:Jp,QuadraticBezierCurve:Qp,QuadraticBezierCurve3:dc,SplineCurve:tm});class Ga extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],r=[],c=[],l=new C,h=new gt;o.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),r.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ct extends Pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function y(){const x=new C,R=new C;let T=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const M=[],w=I/s,N=w*(e-t)+t;for(let z=0;z<=i;z++){const j=z/i,P=j*c+r,O=Math.sin(P),W=Math.cos(P);R.x=N*O,R.y=-w*n+m,R.z=N*W,d.push(R.x,R.y,R.z),x.set(O,A,W).normalize(),u.push(x.x,x.y,x.z),f.push(j,1-w),M.push(g++)}v.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const w=v[M][I],N=v[M+1][I],z=v[M+1][I+1],j=v[M][I+1];h.push(w,N,j),h.push(N,z,j),T+=6}l.addGroup(p,T,0),p+=T}function _(x){const R=g,T=new gt,A=new C;let I=0;const M=x===!0?t:e,w=x===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const N=g;for(let z=0;z<=i;z++){const P=z/i*c+r,O=Math.cos(P),W=Math.sin(P);A.x=M*W,A.y=m*w,A.z=M*O,d.push(A.x,A.y,A.z),u.push(0,w,0),T.x=O*.5+.5,T.y=W*.5*w+.5,f.push(T.x,T.y),g++}for(let z=0;z<i;z++){const j=R+z,P=N+z;x===!0?h.push(P,P+1,j):h.push(P+1,P,j),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yt extends Ct{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,r=Math.PI*2){super(0,t,e,n,i,s,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:r}}static fromJSON(t){return new Yt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];r(i),l(n),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(y){const _=new C,x=new C,R=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],x),f(e[T+2],R),c(_,x,R,y)}function c(y,_,x,R){const T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const M=y.clone().lerp(x,I/T),w=_.clone().lerp(x,I/T),N=T-I;for(let z=0;z<=N;z++)z===0&&I===T?A[I][z]=M:A[I][z]=M.clone().lerp(w,z/N)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const w=Math.floor(M/2);M%2===0?(u(A[I][w+1]),u(A[I+1][w]),u(A[I][w])):(u(A[I][w+1]),u(A[I+1][w+1]),u(A[I+1][w]))}}function l(y){const _=new C;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function h(){const y=new C;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const x=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(x,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],R=o[y+4],T=Math.max(_,x,R),A=Math.min(_,x,R);T>.9&&A<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const y=new C,_=new C,x=new C,R=new C,T=new gt,A=new gt,I=new gt;for(let M=0,w=0;M<s.length;M+=9,w+=6){y.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),R.copy(y).add(_).add(x).divideScalar(3);const N=m(R);v(T,w+0,y,N),v(A,w+2,_,N),v(I,w+4,x,N)}}function v(y,_,x,R){R<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.vertices,t.indices,t.radius,t.details)}}class we extends za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new we(t.radius,t.detail)}}class ne extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+r,Math.PI);let l=0;const h=[],d=new C,u=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(i+T*s)*Math.sin(o+_*r),d.y=t*Math.cos(o+_*r),d.z=t*Math.sin(i+T*s)*Math.sin(o+_*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const _=h[p][y+1],x=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(_,x,T),(p!==n-1||c<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rs extends Pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],r=[],c=[],l=[],h=new C,d=new C,u=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),r.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ls extends Pe{constructor(t=new dc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const r=new C,c=new C,l=new gt;let h=new C;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function v(){for(let _=0;_<e;_++)m(_);m(s===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);const x=o.normals[_],R=o.binormals[_];for(let T=0;T<=i;T++){const A=T/i*Math.PI*2,I=Math.sin(A),M=-Math.cos(A);c.x=M*x.x+I*R.x,c.y=M*x.y+I*R.y,c.z=M*x.z+I*R.z,c.normalize(),u.push(c.x,c.y,c.z),r.x=h.x+n*c.x,r.y=h.y+n*c.y,r.z=h.z+n*c.z,d.push(r.x,r.y,r.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=i;x++){const R=(i+1)*(_-1)+(x-1),T=(i+1)*_+(x-1),A=(i+1)*_+x,I=(i+1)*(_-1)+x;g.push(R,T,I),g.push(T,A,I)}}function y(){for(let _=0;_<=e;_++)for(let x=0;x<=i;x++)l.x=_/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ls(new em[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class at extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Va extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class nm extends Va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new se,bo=new C,wo=new C;class uc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bo.setFromMatrixPosition(t.matrixWorld),e.position.copy(bo),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Eo=new se,Li=new C,ga=new C;class im extends uc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Li.setFromMatrixPosition(t.matrixWorld),n.position.copy(Li),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),Eo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo)}}class Ps extends Va{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sm extends uc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class To extends Va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class am{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ao();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ao(){return(typeof performance>"u"?Date:performance).now()}class fc{constructor(t,e,n=0,i=1/0){this.ray=new Ia(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ca(t,this,n,e),n.sort(Co),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ca(t[i],this,n,e);return n.sort(Co),n}}function Co(a,t){return a.distance-t.distance}function Ca(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Ca(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);class rm{constructor(t=document.body){this.domElement=t,this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1,sprint:!1,interact:!1,inventory:!1,build:!1,slot1:!1,slot2:!1,slot3:!1,slot4:!1,slot5:!1,slot6:!1},this.mouse={leftDown:!1,rightDown:!1,leftClicked:!1,rightClicked:!1,dx:0,dy:0,wheel:0},this.isPointerLocked=!1,this.sensitivity=.0022,this.invertY=!1,this.onLockChange=null,this.onInteractPress=null,this.onInventoryToggle=null,this.onBuildToggle=null,this.onRotatePress=null,this.onSlotSelect=null,this.onPauseToggle=null,this.setupListeners()}setupListeners(){window.addEventListener("keydown",t=>this.handleKeyDown(t)),window.addEventListener("keyup",t=>this.handleKeyUp(t)),window.addEventListener("mousedown",t=>this.handleMouseDown(t)),window.addEventListener("mouseup",t=>this.handleMouseUp(t)),window.addEventListener("mousemove",t=>this.handleMouseMove(t)),window.addEventListener("wheel",t=>this.handleWheel(t),{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement,this.onLockChange&&this.onLockChange(this.isPointerLocked)})}requestLock(){if(this.domElement&&!this.isPointerLocked)try{this.domElement.requestPointerLock()}catch(t){console.warn("Pointer lock request error:",t)}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}handleKeyDown(t){if(!t.repeat)switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"Space":this.keys.jump=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!0;break;case"KeyE":this.keys.interact=!0,this.onInteractPress&&this.onInteractPress();break;case"KeyI":case"Tab":t.preventDefault(),this.keys.inventory=!0,this.onInventoryToggle&&this.onInventoryToggle();break;case"KeyB":this.keys.build=!0,this.onBuildToggle&&this.onBuildToggle();break;case"KeyR":this.onRotatePress&&this.onRotatePress();break;case"Digit1":this.onSlotSelect&&this.onSlotSelect(0);break;case"Digit2":this.onSlotSelect&&this.onSlotSelect(1);break;case"Digit3":this.onSlotSelect&&this.onSlotSelect(2);break;case"Digit4":this.onSlotSelect&&this.onSlotSelect(3);break;case"Digit5":this.onSlotSelect&&this.onSlotSelect(4);break;case"Digit6":this.onSlotSelect&&this.onSlotSelect(5);break;case"Digit7":this.onSlotSelect&&this.onSlotSelect(6);break;case"Escape":this.onPauseToggle&&this.onPauseToggle();break}}handleKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"Space":this.keys.jump=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!1;break;case"KeyE":this.keys.interact=!1;break}}handleMouseDown(t){this.isPointerLocked&&(t.button===0?(this.mouse.leftDown=!0,this.mouse.leftClicked=!0):t.button===2&&(this.mouse.rightDown=!0,this.mouse.rightClicked=!0))}handleMouseUp(t){t.button===0?this.mouse.leftDown=!1:t.button===2&&(this.mouse.rightDown=!1)}handleMouseMove(t){this.isPointerLocked&&(this.mouse.dx+=t.movementX||0,this.mouse.dy+=t.movementY||0)}handleWheel(t){this.isPointerLocked&&(this.mouse.wheel+=Math.sign(t.deltaY))}resetDeltas(){this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0,this.mouse.leftClicked=!1,this.mouse.rightClicked=!1}}class om{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.ambientGain=null,this.musicGain=null,this.settings={masterVolume:.8,sfxVolume:.9,ambientVolume:.6,musicVolume:.5,enabled:!0},this.ambientOscillators=[],this.oceanNode=null,this.rainNode=null,this.musicInterval=null,this.isNightMusic=!1,this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.settings.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(this.settings.ambientVolume,this.ctx.currentTime),this.ambientGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.settings.musicVolume,this.ctx.currentTime),this.musicGain.connect(this.masterGain),this.startAmbientSoundscape(),this.startRainSoundscape(),this.startProceduralMusic(),this.initialized=!0}catch(t){console.warn("AudioContext not allowed or failed to initialize yet:",t)}}resume(){this.initialized?this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume():this.init()}setMasterVolume(t){this.settings.masterVolume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.settings.masterVolume,this.ctx.currentTime,.05)}setSfxVolume(t){this.settings.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&this.ctx&&this.sfxGain.gain.setTargetAtTime(this.settings.sfxVolume,this.ctx.currentTime,.05)}setAmbientVolume(t){this.settings.ambientVolume=Math.max(0,Math.min(1,t)),this.ambientGain&&this.ctx&&this.ambientGain.gain.setTargetAtTime(this.settings.ambientVolume,this.ctx.currentTime,.05)}setMusicVolume(t){this.settings.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&this.ctx&&this.musicGain.gain.setTargetAtTime(this.settings.musicVolume,this.ctx.currentTime,.05)}setRainIntensity(t){if(this.rainNode&&this.rainNode.gain&&this.ctx){const e=Math.max(0,Math.min(1,t))*.16;this.rainNode.gain.gain.setTargetAtTime(e,this.ctx.currentTime,.2)}}startRainSoundscape(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let r=0;r<t;r++)n[r]=(Math.random()*2-1)*.08;const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(2200,this.ctx.currentTime),s.Q.setValueAtTime(.8,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(0,this.ctx.currentTime),i.connect(s),s.connect(o),o.connect(this.ambientGain),i.start(),this.rainNode={source:i,gain:o}}startProceduralMusic(){if(!this.ctx||this.musicInterval)return;const t=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99],e=[220,261.63,293.66,329.63,392,440,523.25,659.25];let n=0;const i=[[174.61,220,261.63,329.63],[196,246.94,293.66,392],[164.81,196,246.94,293.66],[220,261.63,329.63,392]],s=[[110,164.81,220,261.63],[146.83,220,261.63,329.63],[130.81,196,246.94,293.66],[110,164.81,220,261.63]],o=()=>{if(!this.ctx||!this.settings.enabled)return;const c=this.ctx.currentTime,l=this.isNightMusic?s:i,h=l[n%l.length];n++,h.forEach(d=>{const u=this.ctx.createOscillator(),f=this.ctx.createGain(),g=this.ctx.createBiquadFilter();u.type="triangle",u.frequency.setValueAtTime(d,c),g.type="lowpass",g.frequency.setValueAtTime(this.isNightMusic?450:680,c),f.gain.setValueAtTime(1e-4,c),f.gain.linearRampToValueAtTime(.024,c+2.5),f.gain.exponentialRampToValueAtTime(1e-4,c+8.5),u.connect(g),g.connect(f),f.connect(this.musicGain),u.start(c),u.stop(c+9)})},r=()=>{if(!this.ctx||!this.settings.enabled)return;const c=this.ctx.currentTime,l=this.isNightMusic?e:t,h=l[Math.floor(Math.random()*l.length)],d=this.ctx.createOscillator(),u=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(h,c),u.gain.setValueAtTime(.045,c),u.gain.exponentialRampToValueAtTime(1e-4,c+1.4),d.connect(u),u.connect(this.musicGain),d.start(c),d.stop(c+1.5)};setInterval(()=>{o()},8500),setInterval(()=>{Math.random()<.65&&(r(),Math.random()<.35&&setTimeout(r,240))},2200),setTimeout(o,1e3)}setNightMusic(t){this.isNightMusic=t}startAmbientSoundscape(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,s=0,o=0,r=0,c=0,l=0,h=0;for(let m=0;m<t;m++){const p=Math.random()*2-1;i=.99886*i+p*.0555179,s=.99332*s+p*.0750759,o=.969*o+p*.153852,r=.8665*r+p*.3104856,c=.55*c+p*.5329522,l=-.7616*l-p*.016898,n[m]=(i+s+o+r+c+l+h+p*.5362)*.08,h=p*.115926}const d=this.ctx.createBufferSource();d.buffer=e,d.loop=!0;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(320,this.ctx.currentTime);const f=this.ctx.createOscillator();f.type="sine",f.frequency.setValueAtTime(.18,this.ctx.currentTime),this.ctx.createGain().gain.setValueAtTime(.04,this.ctx.currentTime);const v=this.ctx.createGain();v.gain.setValueAtTime(.08,this.ctx.currentTime),f.connect(u.frequency),d.connect(u),u.connect(v),v.connect(this.ambientGain),d.start(),f.start(),this.oceanNode={source:d,lfo:f,gain:v}}playFootstep(t="sand"){if(!this.ctx||!this.settings.enabled)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter();t==="sand"?(s.type="bandpass",s.frequency.setValueAtTime(700+Math.random()*200,e),s.Q.setValueAtTime(1.5,e),n.type="triangle",n.frequency.setValueAtTime(75+Math.random()*25,e),n.frequency.exponentialRampToValueAtTime(30,e+.08),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.09)):t==="water"?(s.type="lowpass",s.frequency.setValueAtTime(1100,e),n.type="sine",n.frequency.setValueAtTime(350+Math.random()*80,e),n.frequency.exponentialRampToValueAtTime(120,e+.15),i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(.001,e+.16)):t==="wood"?(s.type="lowpass",s.frequency.setValueAtTime(600,e),n.type="square",n.frequency.setValueAtTime(160+Math.random()*30,e),n.frequency.exponentialRampToValueAtTime(50,e+.08),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.08)):(s.type="bandpass",s.frequency.setValueAtTime(900+Math.random()*250,e),s.Q.setValueAtTime(2,e),n.type="triangle",n.frequency.setValueAtTime(90+Math.random()*30,e),n.frequency.exponentialRampToValueAtTime(35,e+.07),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.001,e+.08)),n.connect(s),s.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.18)}playJump(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(280,t+.12),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.15)}playSwing(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(220,t+.14),i.Q.setValueAtTime(2.5,t),e.type="sawtooth",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(60,t+.14),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.16)}playChopTree(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(750,t),e.type="triangle",e.frequency.setValueAtTime(190+Math.random()*40,t),e.frequency.exponentialRampToValueAtTime(45,t+.18),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.2);const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(1200+Math.random()*500,t),s.frequency.exponentialRampToValueAtTime(300,t+.04),o.gain.setValueAtTime(.2,t),o.gain.exponentialRampToValueAtTime(.001,t+.05),s.connect(o),o.connect(this.sfxGain),s.start(t),s.stop(t+.06)}playMineRock(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1550+Math.random()*200,t),e.frequency.exponentialRampToValueAtTime(900,t+.12),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.15);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(120,t),i.frequency.exponentialRampToValueAtTime(35,t+.12),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.12),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.13)}playGather(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1400,t),i.Q.setValueAtTime(3,t),e.type="triangle",e.frequency.setValueAtTime(320,t),e.frequency.linearRampToValueAtTime(480,t+.08),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.1),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playBerryPluck(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(620,t),e.frequency.exponentialRampToValueAtTime(880,t+.09),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.11),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playTreeFall(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(95,t),e.frequency.exponentialRampToValueAtTime(25,t+.35),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.38),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.4)}playStoneBreak(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(50,t+.28),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.32)}playDrink(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime;[0,.15,.3].forEach(e=>{const n=t+e,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(450,n),i.frequency.exponentialRampToValueAtTime(240,n+.09),s.gain.setValueAtTime(.25,n),s.gain.exponentialRampToValueAtTime(.001,n+.1),i.connect(s),s.connect(this.sfxGain),i.start(n),i.stop(n+.12)})}playEat(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime;[0,.12,.24].forEach(e=>{const n=t+e,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(280+Math.random()*80,n),i.frequency.exponentialRampToValueAtTime(110,n+.06),s.gain.setValueAtTime(.18,n),s.gain.exponentialRampToValueAtTime(.001,n+.07),i.connect(s),s.connect(this.sfxGain),i.start(n),i.stop(n+.08)})}playCraft(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime;[440,554.37,659.25,880].forEach((n,i)=>{const s=t+i*.07,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,s),r.gain.setValueAtTime(.2,s),r.gain.exponentialRampToValueAtTime(.001,s+.22),o.connect(r),r.connect(this.sfxGain),o.start(s),o.stop(s+.25)})}playPlaceStructure(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(45,t+.14),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.16)}playHurt(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(40,t+.22),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.26)}playPickup(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(880,t+.08),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.1),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playUIClick(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(650,t),e.frequency.exponentialRampToValueAtTime(400,t+.05),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.07)}playSpearThrust(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(260,t+.16),e.type="sawtooth",e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(90,t+.16),n.gain.setValueAtTime(.24,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.19)}playThunder(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(45,t+2.5),e.type="sawtooth",e.frequency.setValueAtTime(65,t),e.frequency.exponentialRampToValueAtTime(25,t+2.2),n.gain.setValueAtTime(.35,t),n.gain.linearRampToValueAtTime(.42,t+.15),n.gain.exponentialRampToValueAtTime(.001,t+2.8),e.connect(i),i.connect(n),n.connect(this.ambientGain),e.start(t),e.stop(t+3)}playQuestComplete(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const s=t+i*.09,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,s),r.gain.setValueAtTime(.22,s),r.gain.exponentialRampToValueAtTime(.001,s+.45),o.connect(r),r.connect(this.sfxGain),o.start(s),o.stop(s+.5)})}playItemDrop(){if(!this.ctx||!this.settings.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(160,t+.06),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.08)}}const ie=new om;class wn{static hasSave(){return localStorage.getItem(this.SAVE_KEY)!==null}static saveGame(t,e,n){try{const i={timestamp:Date.now(),player:{x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.yaw,pitch:t.pitch,vitals:t.vitals},inventory:t.inventory.serialize(),timeWeather:{timeOfDay:e.timeOfDay,dayCount:e.dayCount,weather:e.weather},structures:n.serialize()};return localStorage.setItem(this.SAVE_KEY,JSON.stringify(i)),!0}catch(i){return console.error("Failed to save game:",i),!1}}static loadGame(t,e,n){try{const i=localStorage.getItem(this.SAVE_KEY);if(!i)return!1;const s=JSON.parse(i);return s.player&&(t.position.set(s.player.x,s.player.y,s.player.z),t.yaw=s.player.yaw||0,t.pitch=s.player.pitch||0,s.player.vitals&&Object.assign(t.vitals,s.player.vitals)),s.inventory&&t.inventory.deserialize(s.inventory),s.timeWeather&&(e.timeOfDay=s.timeWeather.timeOfDay||9,e.dayCount=s.timeWeather.dayCount||1,s.timeWeather.weather&&e.setWeather&&e.setWeather(s.timeWeather.weather),e.update(0,t.position)),s.structures&&n.deserialize(s.structures),!0}catch(i){return console.error("Failed to load game:",i),!1}}static clearSave(){localStorage.removeItem(this.SAVE_KEY)}}Vi(wn,"SAVE_KEY","island_survival_save_data");class cm{constructor(t,e){this.scene=t,this.renderer=e,this.dayDuration=720,this.timeOfDay=9.5,this.dayCount=1,this.weather="clear",this.weatherTimer=160,this.rainParticles=null,this.rainVelocities=null,this.rainIntensity=0,this.lightningTimer=0,this.sunLight=null,this.moonLight=null,this.hemiLight=null,this.sunMesh=null,this.sunCorona=null,this.moonMesh=null,this.skyDome=null,this.skyMaterial=null,this.cloudsGroup=null,this.cloudMaterial=null,this.starField=null,this.sunDirection=new C,this.init()}init(){this.scene.fog=new Fa(9489145,.0028),this.createAtmosphericSkyDome(),this.hemiLight=new nm(11789820,9268835,.7),this.scene.add(this.hemiLight),this.sunLight=new To(16775399,1.5),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=380;const t=80;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-4e-4,this.scene.add(this.sunLight),this.moonLight=new To(9489145,.35),this.moonLight.castShadow=!1,this.scene.add(this.moonLight);const e=new ne(16,16,16),n=new Te({color:16775620});this.sunMesh=new D(e,n);const i=new nn(64,64),s=new Te({color:16769154,transparent:!0,opacity:.55,side:Ee});this.sunCorona=new D(i,s),this.sunMesh.add(this.sunCorona),this.scene.add(this.sunMesh);const o=new ne(12,16,16),r=new Te({color:14737632});this.moonMesh=new D(o,r),this.scene.add(this.moonMesh),this.createStars(),this.createRealisticClouds(),this.createRainSystem(),this.update(0)}createRainSystem(){const e=new Pe,n=new Float32Array(3e3*3),i=new Float32Array(3e3);for(let o=0;o<3e3;o++)n[o*3+0]=(Math.random()-.5)*80,n[o*3+1]=Math.random()*50,n[o*3+2]=(Math.random()-.5)*80,i[o]=26+Math.random()*12;e.setAttribute("position",new ze(n,3)),this.rainVelocities=i;const s=new Ta({color:12312315,size:.35,transparent:!0,opacity:0,depthWrite:!1});this.rainParticles=new yo(e,s),this.scene.add(this.rainParticles)}createAtmosphericSkyDome(){const t=new ne(650,32,24);this.skyMaterial=new mn({uniforms:{uZenithColor:{value:new ut(1668818)},uHorizonColor:{value:new ut(12312315)},uSunPosition:{value:new C(0,1,0)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uZenithColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunPosition;
        varying vec3 vWorldPosition;

        void main() {
          vec3 dir = normalize(vWorldPosition);
          float heightFactor = clamp(dir.y * 1.5, 0.0, 1.0);

          // Smooth atmospheric gradient from horizon to zenith
          vec3 sky = mix(uHorizonColor, uZenithColor, pow(heightFactor, 0.65));

          // Soft sun bloom glow across the sky
          float sunDot = max(0.0, dot(dir, normalize(uSunPosition)));
          sky += vec3(0.35, 0.25, 0.1) * pow(sunDot, 12.0);

          gl_FragColor = vec4(sky, 1.0);
        }
      `,side:Le,depthWrite:!1}),this.skyDome=new D(t,this.skyMaterial),this.scene.add(this.skyDome)}createStars(){const e=new Pe,n=new Float32Array(1400*3),i=620;for(let o=0;o<1400;o++){const r=2*Math.PI*Math.random(),c=Math.acos(Math.random()*.9+.1);n[o*3]=i*Math.sin(c)*Math.cos(r),n[o*3+1]=i*Math.cos(c),n[o*3+2]=i*Math.sin(c)*Math.sin(r)}e.setAttribute("position",new ze(n,3));const s=new Ta({color:16777215,size:2.2,transparent:!0,opacity:0});this.starField=new yo(e,s),this.scene.add(this.starField)}createRealisticClouds(){this.cloudsGroup=new dt,this.cloudMaterial=new at({color:16777215,roughness:.95,metalness:.02,transparent:!0,opacity:.88,flatShading:!0});const t=this.cloudMaterial,e=24;for(let n=0;n<e;n++){const i=new dt,s=7+Math.floor(Math.random()*5);for(let c=0;c<s;c++){const l=16+Math.random()*16,h=new we(l,1),d=new D(h,t);d.position.set((c-s/2)*16+(Math.random()-.5)*12,(Math.random()-.5)*7,(Math.random()-.5)*16),d.scale.set(1.4,.65,1.1),i.add(d)}const o=n/e*Math.PI*2+Math.random()*.3,r=60+Math.random()*340;i.position.set(Math.cos(o)*r,95+(Math.random()-.5)*20,Math.sin(o)*r),this.cloudsGroup.add(i)}this.scene.add(this.cloudsGroup)}update(t,e=new C(0,0,0)){if(this.timeOfDay+=t/this.dayDuration*24,this.timeOfDay>=24&&(this.timeOfDay-=24,this.dayCount++),ie&&ie.setNightMusic&&ie.setNightMusic(this.isNight()),this.weatherTimer-=t,this.weatherTimer<=0){const x=Math.random();x<.55?this.weather="clear":x<.75?this.weather="cloudy":x<.9?this.weather="rain":this.weather="storm",this.weatherTimer=140+Math.random()*180}let n=0,i=0;if(this.weather==="rain"?(n=.65,i=.55):this.weather==="storm"&&(n=.88,i=1),ie&&ie.setRainIntensity&&ie.setRainIntensity(i),this.rainParticles){this.rainParticles.position.set(e.x,0,e.z);const x=this.rainParticles.material;if(x.opacity=wa.lerp(x.opacity,n,t*2),x.opacity>.02){const R=this.rainParticles.geometry.attributes.position.array,T=this.rainVelocities,A=T.length;for(let I=0;I<A;I++)R[I*3+1]-=T[I]*t,R[I*3+1]<0&&(R[I*3+1]=45+Math.random()*8);this.rainParticles.geometry.attributes.position.needsUpdate=!0}}if(this.weather==="storm"&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=10+Math.random()*18,this.sunLight))){const x=this.sunLight.intensity;this.sunLight.intensity=4.2,ie&&ie.playThunder&&ie.playThunder(),setTimeout(()=>{this.sunLight&&(this.sunLight.intensity=x)},140)}if(this.cloudMaterial){let x=new ut(16777215);this.weather==="cloudy"?x.set(11583173):this.weather==="rain"?x.set(7901340):this.weather==="storm"&&x.set(3622735),this.cloudMaterial.color.lerp(x,t*1.5)}this.cloudsGroup&&this.cloudsGroup.children.forEach(x=>{x.position.x+=t*2.2,x.position.x>480&&(x.position.x=-480)});const s=(this.timeOfDay-6)/24*Math.PI*2,o=480,r=e.x+Math.cos(s)*o,c=e.y+Math.sin(s)*o,l=e.z+Math.cos(s*.5)*50;this.sunMesh.position.set(r,c,l),this.sunLight.position.set(r,c,l),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld(),this.sunCorona&&this.sunCorona.lookAt(e),this.sunDirection.set(Math.cos(s),Math.sin(s),.1).normalize();const h=s+Math.PI,d=e.x+Math.cos(h)*o,u=e.y+Math.sin(h)*o,f=e.z+Math.cos(h*.5)*50;this.moonMesh.position.set(d,u,f),this.moonLight.position.set(d,u,f),this.moonLight.target.position.copy(e),this.moonLight.target.updateMatrixWorld(),this.skyDome&&this.skyDome.position.copy(e),this.starField&&this.starField.position.copy(e);const g=new ut,v=new ut;let m=0,p=0,y=0;const _=this.timeOfDay;if(_>=5&&_<7){const x=(_-5)/2;v.set(660518).lerp(new ut(16612936),x),g.set(396312).lerp(new ut(6046328),x),m=x*.9,y=(1-x)*.9}else if(_>=7&&_<9){const x=(_-7)/2;v.set(16612936).lerp(new ut(9489145),x),g.set(6046328).lerp(new ut(1668818),x),m=.9+x*.6,y=0}else if(_>=9&&_<16.5)v.set(11789820),g.set(166097),m=1.5,y=0;else if(_>=16.5&&_<19){const x=(_-16.5)/2.5;v.set(11789820).lerp(new ut(16733986),x),g.set(166097).lerp(new ut(6953882),x),m=1.5-x*1,y=x*.4}else if(_>=19&&_<21){const x=(_-19)/2;v.set(16733986).lerp(new ut(858922),x),g.set(6953882).lerp(new ut(330776),x),m=(1-x)*.5,p=x*.4,y=.4+x*.6}else v.set(660516),g.set(132882),m=0,p=.4,y=1;if(this.skyMaterial&&this.skyMaterial.uniforms&&(this.skyMaterial.uniforms.uHorizonColor.value.copy(v),this.skyMaterial.uniforms.uZenithColor.value.copy(g),this.skyMaterial.uniforms.uSunPosition.value.set(r,c,l)),this.weather==="rain"?(m*=.45,v.lerp(new ut(5533306),.45),g.lerp(new ut(3622735),.45)):this.weather==="storm"&&(m*=.22,v.lerp(new ut(2503224),.7),g.lerp(new ut(1712935),.7)),this.scene.background||(this.scene.background=new ut),this.scene.background.copy(v),this.scene.fog){this.scene.fog.color.copy(v);const x=this.weather==="rain"||this.weather==="storm"?.0048:.0028;this.scene.fog.density=wa.lerp(this.scene.fog.density,x,.05)}this.sunLight.intensity=Math.max(0,m),this.moonLight.intensity=Math.max(0,p),this.hemiLight.intensity=.25+m*.45,this.starField&&(this.starField.material.opacity=this.weather==="rain"||this.weather==="storm"?0:y)}sleepUntilMorning(){this.timeOfDay=6,this.dayCount++,this.update(0)}getFormattedTime(){const t=Math.floor(this.timeOfDay*60),e=Math.floor(t/60)%24,n=t%60,i=e.toString().padStart(2,"0"),s=n.toString().padStart(2,"0");return`${i}:${s}`}isNight(){return this.timeOfDay<5.5||this.timeOfDay>19.5}setWeather(t){["clear","cloudy","rain","storm"].includes(t)&&(this.weather=t,this.weatherTimer=240)}}class Ro{constructor(t=1337){this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);let e=t%2147483647;e<=0&&(e+=2147483646);const n=()=>(e=e*16807%2147483647,(e-1)/2147483646);for(let i=0;i<256;i++)this.p[i]=i;for(let i=255;i>0;i--){const s=Math.floor(n()*(i+1)),o=this.p[i];this.p[i]=this.p[s],this.p[s]=o}for(let i=0;i<512;i++)this.perm[i]=this.p[i&255],this.permMod12[i]=this.perm[i]%12;this.grad3=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1])}noise2D(t,e){const n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6;let s=0,o=0,r=0;const c=(t+e)*n,l=Math.floor(t+c),h=Math.floor(e+c),d=(l+h)*i,u=l-d,f=h-d,g=t-u,v=e-f;let m=0,p=0;g>v?(m=1,p=0):(m=0,p=1);const y=g-m+i,_=v-p+i,x=g-1+2*i,R=v-1+2*i,T=l&255,A=h&255;let I=.5-g*g-v*v;if(I>=0){const N=this.permMod12[T+this.perm[A]]*3;I*=I,s=I*I*(this.grad3[N]*g+this.grad3[N+1]*v)}let M=.5-y*y-_*_;if(M>=0){const N=this.permMod12[T+m+this.perm[A+p]]*3;M*=M,o=M*M*(this.grad3[N]*y+this.grad3[N+1]*_)}let w=.5-x*x-R*R;if(w>=0){const N=this.permMod12[T+1+this.perm[A+1]]*3;w*=w,r=w*w*(this.grad3[N]*x+this.grad3[N+1]*R)}return 70*(s+o+r)}fbm2D(t,e,n=5,i=.5,s=2){let o=0,r=1,c=1,l=0;for(let h=0;h<n;h++)o+=this.noise2D(t*r,e*r)*c,l+=c,c*=i,r*=s;return o/l}}class bs{static createSandTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#eddab4",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let o=0;o<512;o++)for(let r=0;r<512;r++){const c=(o*512+r)*4,l=Math.sin(r*.08+Math.sin(o*.04)*3)*8,h=(Math.random()-.5)*16,d=Math.random()<.02?25:Math.random()<.015?-25:0;i[c]=Math.min(255,Math.max(0,237+l+h+d)),i[c+1]=Math.min(255,Math.max(0,218+l*.9+h+d)),i[c+2]=Math.min(255,Math.max(0,180+l*.7+h)),i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s.repeat.set(12,12),s}static createWetSandTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#bda87f",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let o=0;o<512;o++)for(let r=0;r<512;r++){const c=(o*512+r)*4,l=(Math.random()-.5)*12;i[c]=Math.min(255,Math.max(0,189+l)),i[c+1]=Math.min(255,Math.max(0,168+l)),i[c+2]=Math.min(255,Math.max(0,127+l)),i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s.repeat.set(12,12),s}static createGrassTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#2e7d32",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let o=0;o<512;o++)for(let r=0;r<512;r++){const c=(o*512+r)*4,l=Math.sin(r*.05)*Math.cos(o*.05),h=Math.sin(r*.12+o*.1),d=l*25+h*18+(Math.random()-.5)*20;i[c]=Math.min(255,Math.max(0,46+d*.5)),i[c+1]=Math.min(255,Math.max(0,125+d)),i[c+2]=Math.min(255,Math.max(0,50+d*.4)),i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s.repeat.set(14,14),s}static createRockTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#5c544d",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let o=0;o<512;o++)for(let r=0;r<512;r++){const c=(o*512+r)*4,l=Math.sin(o*.15+(Math.random()-.5)*2)*22,h=(Math.random()-.5)*25,d=l+h;i[c]=Math.min(255,Math.max(0,95+d)),i[c+1]=Math.min(255,Math.max(0,88+d)),i[c+2]=Math.min(255,Math.max(0,80+d)),i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s.repeat.set(10,10),s}static createPalmBarkTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=256,t.height=512;const e=t.getContext("2d");e.fillStyle="#6d4c41",e.fillRect(0,0,256,512);const n=e.getImageData(0,0,256,512),i=n.data;for(let o=0;o<512;o++)for(let r=0;r<256;r++){const c=(o*256+r)*4,l=Math.sin(o*.4)*28,h=(Math.random()-.5)*18,d=l+h;i[c]=Math.min(255,Math.max(0,109+d)),i[c+1]=Math.min(255,Math.max(0,76+d*.8)),i[c+2]=Math.min(255,Math.max(0,65+d*.7)),i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s}static createPalmLeafTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=256,t.height=512;const e=t.getContext("2d");e.clearRect&&e.clearRect(0,0,256,512),e.strokeStyle="#8bc34a",e.lineWidth=4,e.beginPath(),e.moveTo(128,500),e.quadraticCurveTo(128,200,128,20),e.stroke(),e.strokeStyle="#2e7d32",e.lineWidth=3;for(let i=480;i>30;i-=6){const s=i/512,o=Math.sin(s*Math.PI)*110+10,r=(1-s)*.2;e.beginPath(),e.moveTo(128,i),e.quadraticCurveTo(128-o*.6,i-10,128-o,i+20-r*50),e.stroke(),e.beginPath(),e.moveTo(128,i),e.quadraticCurveTo(128+o*.6,i-10,128+o,i+20-r*50),e.stroke()}return new Nn(t)}static createCausticsTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,256,256);const n=e.getImageData(0,0,256,256),i=n.data;for(let o=0;o<256;o++)for(let r=0;r<256;r++){const c=(o*256+r)*4,l=Math.sin(r*.15+o*.1),h=Math.sin(r*.08-o*.12),d=Math.sin(Math.sqrt(r*r+o*o)*.1);let u=(l+h+d)/3;u=Math.pow(Math.max(0,u),2.5)*255,i[c]=u,i[c+1]=u,i[c+2]=u,i[c+3]=255}e.putImageData(n,0,0);const s=new Nn(t);return s.wrapS=Fe,s.wrapT=Fe,s.repeat.set(16,16),s}}class lm{constructor(t,e=-45,n=-30,i=16){this.scene=t,this.entranceX=e,this.entranceZ=n,this.groundY=i,this.group=new dt,this.mineralNodes=[],this.mushrooms=[],this.init()}init(){this.group.position.set(this.entranceX,this.groundY,this.entranceZ);const t=new Ba([new C(0,0,0),new C(5,-1.5,-12),new C(12,-3,-26),new C(10,-3.5,-42),new C(-2,-3,-52)]),e=new Ls(t,24,4.2,12,!1),n=new at({color:3025190,roughness:.95,metalness:.05,side:Le,flatShading:!0}),i=new D(e,n);i.castShadow=!0,i.receiveShadow=!0,this.group.add(i);const s=new nn(6,60);s.rotateX(-Math.PI/2);const o=new at({color:4011312,roughness:.9}),r=new D(s,o);r.position.set(5,-3.2,-26),this.group.add(r);const c=new at({color:4866877,roughness:.92,flatShading:!0});for(let u=0;u<18;u++){const f=1.2+Math.random()*2.2,g=.2+Math.random()*.25,v=new Yt(g,f,6);v.rotateX(Math.PI);const m=new D(v,c);m.position.set((Math.random()-.5)*5+6,1.2+Math.random()*.8,-8-Math.random()*38),this.group.add(m)}for(let u=0;u<14;u++){const f=.8+Math.random()*1.6,g=.2+Math.random()*.2,v=new Yt(g,f,6),m=new D(v,c);m.position.set((Math.random()-.5)*4+6,-3.2+f*.5,-10-Math.random()*36),this.group.add(m)}this.createGlowingMushrooms(8,-2.8,-22,58879),this.createGlowingMushrooms(11,-3.2,-36,58998),this.createGlowingMushrooms(2,-2.8,-48,7798531),this.createMineralNode(8.2,-1.8,-18,"iron_vein"),this.createMineralNode(12.5,-2.2,-32,"crystal_deposit"),this.createMineralNode(-.5,-2.2,-45,"iron_vein");const l=new Ga(3.5,16);l.rotateX(-Math.PI/2);const h=new at({color:48340,roughness:.1,metalness:.2,transparent:!0,opacity:.82}),d=new D(l,h);d.position.set(6,-3.15,-34),this.group.add(d),this.scene.add(this.group)}createGlowingMushrooms(t,e,n,i){const s=new dt;s.position.set(t,e,n);const o=new at({color:i,emissive:i,emissiveIntensity:.85,roughness:.3}),r=new at({color:2503224,roughness:.8});for(let l=0;l<5;l++){const h=new Ct(.04,.05,.45,6),d=new D(h,r);d.position.set((Math.random()-.5)*.6,.22,(Math.random()-.5)*.6),d.rotation.z=(Math.random()-.5)*.4,s.add(d);const u=new ne(.18,8,8,0,Math.PI*2,0,Math.PI*.55),f=new D(u,o);f.position.copy(d.position),f.position.y+=.22,s.add(f)}const c=new Ps(i,2.2,14);c.position.set(0,.8,0),s.add(c),this.group.add(s),this.mushrooms.push({group:s,light:c,color:i})}createMineralNode(t,e,n,i){const s=new dt;s.position.set(t,e,n);const o=i==="crystal_deposit",r=new we(.85,1),c=new at({color:o?58879:9268835,emissive:o?48340:4073251,emissiveIntensity:o?.6:.1,roughness:o?.2:.8,metalness:o?.4:.7,flatShading:!0}),l=new D(r,c);l.castShadow=!0,s.add(l),s.userData={type:"rock_node",subType:i,maxHealth:100,health:100,resourceYield:o?{flint:4,stone:4,scrap_metal:2}:{stone:6,flint:3,scrap_metal:2}},this.group.add(s),this.mineralNodes.push(s)}isInsideCave(t){const e=t.clone().sub(this.group.position);return e.z<2&&e.z>-55&&Math.abs(e.x-6)<6}}class hm{constructor(t,e=650,n=200){this.scene=t,this.size=e,this.resolution=n,this.noise=new Ro(5555),this.detailNoise=new Ro(9999),this.heightData=new Float32Array((n+1)*(n+1)),this.geometry=null,this.mesh=null,this.radius=e*.44,this.maxHeight=52,this.beachHeight=2.6,this.waterLevel=0,this.hiddenCave=null,this.init()}init(){this.geometry=new nn(this.size,this.size,this.resolution,this.resolution),this.geometry.rotateX(-Math.PI/2);const t=this.geometry.attributes.position,e=new Float32Array(t.count*3),n=new ut(15917758),i=new ut(12559993),s=new ut(3706428),o=new ut(1793568),r=new ut(6379087),c=new ut(9274234);for(let m=0;m<t.count;m++){const p=t.getX(m),y=t.getZ(m),_=this.computeHeight(p,y);t.setY(m,_),this.heightData[m]=_}this.geometry.computeVertexNormals();const l=this.geometry.attributes.normal,h=new ut,d=new C;let u=0;for(let m=0;m<t.count;m++){const p=t.getY(m);d.fromBufferAttribute(l,m);const y=1-d.y;if(p<this.waterLevel-.2){const _=Math.min(1,Math.abs(p)/8);h.copy(i).multiplyScalar(.7-_*.3)}else if(p<=this.beachHeight){const _=Math.max(0,Math.min(1,(p-this.waterLevel)/this.beachHeight));h.copy(i).lerp(n,_)}else if(y>.42||p>18&&y>.32){const _=Math.min(1,(y-.32)*3);h.copy(s).lerp(r,_),p>26&&h.lerp(c,.6)}else if(p<18){const _=(this.detailNoise.noise2D(t.getX(m)*.04,t.getZ(m)*.04)+1)*.5;if(h.copy(s).lerp(o,_),p<this.beachHeight+1.8){const x=(p-this.beachHeight)/1.8;h.lerp(n,1-x)}}else{const _=Math.min(1,(p-18)/(this.maxHeight-18));h.copy(o).lerp(c,_)}e[u++]=h.r,e[u++]=h.g,e[u++]=h.b}this.geometry.setAttribute("color",new ze(e,3));const f=bs.createSandTexture(),g=new at({vertexColors:!0,map:f,roughness:.85,metalness:.05,flatShading:!1});this.mesh=new D(this.geometry,g),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.scene.add(this.mesh);const v=this.getElevation(-45,-30);this.hiddenCave=new lm(this.scene,-45,-30,v)}computeHeight(t,e){const n=Math.sqrt(t*t+e*e),i=n/this.radius;let s=1-Math.pow(i,2.4);if(s=Math.max(0,s),s<=0)return-10-(n-this.radius)*.08;const o=Math.abs(this.noise.noise2D(t*.008,e*.008)),r=this.noise.fbm2D(t*.006,e*.006,5,.52,2.1),c=this.noise.fbm2D(t*.016,e*.016,4,.48,2),l=this.detailNoise.noise2D(t*.07,e*.07)*.5,h=Math.hypot(t+20,e+30)/(this.radius*.6);let d=0;h<1&&(d=Math.pow(1-h,2)*36*(o*1.4+.2));const u=t*.012+Math.sin(e*.02)*.4,f=e*.012,g=Math.abs(this.noise.noise2D(u+25,f+25));let v=0;g<.14&&i<.8&&(v=(1-g/.14)*3.2);let m=(r*16+c*9+d+l)*s-v;const p=Math.hypot(t- -45,e- -30);if(p<8){const y=(1-p/8)*4.5;m-=y}return m>-.8&&m<2.8&&(m=(m+.8)*.65-.2),m}getElevation(t,e){if(this.hiddenCave&&this.hiddenCave.isInsideCave(new C(t,0,e)))return this.hiddenCave.groundY-3.2;const n=this.size/2;if(t<-n||t>n||e<-n||e>n)return-12;const i=(t+n)/this.size*this.resolution,s=(e+n)/this.size*this.resolution,o=Math.floor(i),r=Math.floor(s);if(o<0||o>=this.resolution||r<0||r>=this.resolution)return-12;const c=i-o,l=s-r,h=this.resolution+1,d=r*h+o,u=r*h+(o+1),f=(r+1)*h+o,g=(r+1)*h+(o+1),v=this.heightData[d]!==void 0?this.heightData[d]:0,m=this.heightData[u]!==void 0?this.heightData[u]:v,p=this.heightData[f]!==void 0?this.heightData[f]:v,y=this.heightData[g]!==void 0?this.heightData[g]:v,_=v*(1-c)+m*c,x=p*(1-c)+y*c;return _*(1-l)+x*l}getNormal(t,e,n=new C){const s=this.getElevation(t-.5,e),o=this.getElevation(t+.5,e),r=this.getElevation(t,e-.5),c=this.getElevation(t,e+.5);return n.set(s-o,2*.5,r-c).normalize(),n}}class dm{constructor(t,e=1400){this.scene=t,this.size=e,this.waterLevel=0,this.mesh=null,this.material=null,this.time=0,this.underwaterGroup=new dt,this.fishList=[],this.init(),this.createUnderwaterScenery()}init(){const e=new nn(this.size,this.size,160,160);e.rotateX(-Math.PI/2);const n=bs.createCausticsTexture();this.material=new mn({uniforms:{uTime:{value:0},uDeepWaterColor:{value:new ut(13158)},uShallowWaterColor:{value:new ut(58879)},uFoamColor:{value:new ut(16777215)},uCausticsTex:{value:n},uSunDirection:{value:new C(.5,.8,.3).normalize()},uSunColor:{value:new ut(16774880)}},vertexShader:`
        uniform float uTime;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vWaveHeight;
        varying vec2 vUv;

        vec3 gerstnerWave(vec3 pos, float steepness, float wavelength, vec2 dir, float speed, inout vec3 tangent, inout vec3 binormal) {
          float k = 2.0 * 3.14159 / wavelength;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(dir);
          float f = k * (dot(d, pos.xz) - speed * uTime);
          float a = steepness / k;

          tangent += vec3(
            -d.x * d.x * (steepness * sin(f)),
            d.x * (steepness * cos(f)),
            -d.x * d.y * (steepness * sin(f))
          );
          binormal += vec3(
            -d.x * d.y * (steepness * sin(f)),
            d.y * (steepness * cos(f)),
            -d.y * d.y * (steepness * sin(f))
          );

          return vec3(
            d.x * (a * cos(f)),
            a * sin(f),
            d.y * (a * cos(f))
          );
        }

        void main() {
          vUv = uv;
          vec3 gridPoint = position;
          vec3 tangent = vec3(1.0, 0.0, 0.0);
          vec3 binormal = vec3(0.0, 0.0, 1.0);
          vec3 p = gridPoint;

          // 3-Octave Gerstner Wave displacement
          p += gerstnerWave(gridPoint, 0.16, 26.0, vec2(1.0, 0.25), 1.1, tangent, binormal);
          p += gerstnerWave(gridPoint, 0.12, 13.0, vec2(0.65, 0.75), 1.5, tangent, binormal);
          p += gerstnerWave(gridPoint, 0.07, 5.5, vec2(-0.3, 0.95), 2.2, tangent, binormal);

          vec3 normal = normalize(cross(binormal, tangent));
          vNormal = normal;
          vWaveHeight = p.y;

          vec4 worldPos = modelMatrix * vec4(p, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uDeepWaterColor;
        uniform vec3 uShallowWaterColor;
        uniform vec3 uFoamColor;
        uniform sampler2D uCausticsTex;
        uniform vec3 uSunDirection;
        uniform vec3 uSunColor;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vWaveHeight;
        varying vec2 vUv;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 norm = normalize(vNormal);

          // Fresnel reflectance
          float fresnel = dot(viewDir, norm);
          fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
          fresnel = pow(fresnel, 2.5);

          // Sun Specular reflection
          vec3 halfVector = normalize(uSunDirection + viewDir);
          float spec = max(0.0, dot(norm, halfVector));
          spec = pow(spec, 110.0) * 1.8;

          // Depth-based tropical color blend
          float dist = length(vWorldPosition.xz);
          float depthFactor = clamp((dist - 130.0) / 110.0, 0.0, 1.0);
          vec3 waterColor = mix(uShallowWaterColor, uDeepWaterColor, depthFactor);

          // Animated Caustics in shallow waters
          if (depthFactor < 0.8) {
            vec2 causticsUv = vWorldPosition.xz * 0.05 + vec2(uTime * 0.02, uTime * 0.015);
            float caustics = texture2D(uCausticsTex, causticsUv).r;
            waterColor += vec3(0.12, 0.22, 0.25) * caustics * (1.0 - depthFactor);
          }

          // Shoreline & Crest foam
          float foamMask = smoothstep(0.24, 0.38, vWaveHeight);
          waterColor = mix(waterColor, uFoamColor, foamMask * 0.7);

          // Final color composition with specular glints
          vec3 finalColor = mix(waterColor, uDeepWaterColor * 1.4, fresnel * 0.45) + uSunColor * spec;

          // Water transparency
          float alpha = mix(0.78, 0.94, depthFactor);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0}),this.mesh=new D(e,this.material),this.mesh.position.y=this.waterLevel,this.scene.add(this.mesh)}createUnderwaterScenery(){this.scene.add(this.underwaterGroup);const t=120,e=[16728193,16748800,58998,8146431,45311],n=new we(1.2,1),i=new at({color:16739904,roughness:.8,flatShading:!0}),s=new da(n,i,t/2),o=new Yt(.18,1.6,5),r=new at({color:16728193,roughness:.7,flatShading:!0}),c=new da(o,r,t/2),l=new ge,h=new ut;for(let g=0;g<t/2;g++){const v=g/(t/2)*Math.PI*2+Math.random()*.2,m=145+Math.random()*55,p=Math.cos(v)*m,y=Math.sin(v)*m,_=-1.8-Math.random()*2.5;l.position.set(p,_,y);const x=.8+Math.random()*.7;l.scale.set(x,x*.7,x),l.rotation.set(0,Math.random()*Math.PI,0),l.updateMatrix(),s.setMatrixAt(g,l.matrix),h.setHex(e[g%e.length]),s.setColorAt(g,h),l.position.set(p+2,_+.3,y+2);const R=.9+Math.random()*.8;l.scale.set(R,R,R),l.rotation.set((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4),l.updateMatrix(),c.setMatrixAt(g,l.matrix),h.setHex(e[(g+2)%e.length]),c.setColorAt(g,h)}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),this.underwaterGroup.add(s),this.underwaterGroup.add(c);const d=180,u=new Ct(.04,.1,2.4,4),f=new at({color:1793568,roughness:.6,side:Ee});this.kelpInstanced=new da(u,f,d),this.kelpPositions=[];for(let g=0;g<d;g++){const v=Math.random()*Math.PI*2,m=140+Math.random()*65,p=Math.cos(v)*m,y=Math.sin(v)*m,_=-1.2-Math.random()*2.5;l.position.set(p,_,y),l.scale.set(1,.8+Math.random()*.6,1),l.rotation.set((Math.random()-.5)*.2,Math.random()*Math.PI,0),l.updateMatrix(),this.kelpInstanced.setMatrixAt(g,l.matrix),this.kelpPositions.push({pos:new C(p,_,y),origRot:l.rotation.clone()})}this.kelpInstanced.instanceMatrix.needsUpdate=!0,this.underwaterGroup.add(this.kelpInstanced),this.createFishSchools()}createFishSchools(){const t=new dt,e=32,n=new at({color:16739584,roughness:.4}),i=new at({color:166097,roughness:.4}),s=new at({color:16766464,roughness:.4});for(let o=0;o<e;o++){const r=new dt,c=new Yt(.12,.42,6);c.rotateZ(Math.PI/2);const l=o%3===0?n:o%3===1?i:s,h=new D(c,l);r.add(h);const d=new Yt(.08,.18,3);d.rotateZ(-Math.PI/2);const u=new D(d,l);u.position.set(-.25,0,0),r.add(u);const g=o%4/4*Math.PI*2,v=150+Math.random()*30;r.position.set(Math.cos(g)*v+(Math.random()-.5)*8,-1.2-Math.random()*1.5,Math.sin(g)*v+(Math.random()-.5)*8),r.userData={baseAngle:g,radius:v,orbitSpeed:.15+(Math.random()-.5)*.05,phase:Math.random()*10,fin:u},t.add(r),this.fishList.push(r)}this.underwaterGroup.add(t)}getWaveHeight(t,e,n=this.time){const i=2*Math.PI/26,s=i*(t*.97+e*.25-1.1*n),o=.16/i*Math.sin(s),r=2*Math.PI/13,c=r*(t*.65+e*.75-1.5*n),l=.12/r*Math.sin(c),h=2*Math.PI/5.5,d=h*(-t*.3+e*.95-2.2*n),u=.07/h*Math.sin(d);return this.waterLevel+o+l+u}update(t,e){this.time+=t,this.material&&this.material.uniforms&&(this.material.uniforms.uTime.value=this.time,e&&this.material.uniforms.uSunDirection.value.copy(e));for(let n of this.fishList){const i=n.userData;i.baseAngle+=i.orbitSpeed*t*.4;const s=Math.cos(i.baseAngle)*i.radius,o=Math.sin(i.baseAngle)*i.radius,r=Math.sin(this.time*2+i.phase)*.25;n.position.x=s,n.position.z=o,n.position.y=-1.6+r,n.rotation.y=-i.baseAngle+Math.PI/2,i.fin&&(i.fin.rotation.y=Math.sin(this.time*12+i.phase)*.45)}}}class pe{static getTextures(){return!this.barkTex&&typeof document<"u"&&(this.barkTex=bs.createPalmBarkTexture(),this.leafTex=bs.createPalmLeafTexture()),{bark:this.barkTex||null,leaf:this.leafTex||null}}static createPalmTree(t="tall"){const e=new dt,n=this.getTextures();let i=13.5+Math.random()*4,s=2.8+Math.random()*2.2;t==="leaning"?(s=5.2+Math.random()*2,i=11+Math.random()*2.5):t==="young"&&(i=7.5+Math.random()*2,s=1.2);const o=Math.random()*Math.PI*2,r=[],c=8;for(let T=0;T<=c;T++){const A=T/c,I=A*i,M=Math.pow(A,1.4)*s,w=M*Math.cos(o),N=M*Math.sin(o);r.push(new C(w,I,N))}const l=new Ba(r),h=new Ls(l,20,.52,10,!1),d=new at({color:8545357,map:n.bark,roughness:.88,metalness:.05}),u=new D(h,d);u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new Ct(.55,.85,.8,8),g=new D(f,d);g.position.y=.4,e.add(g);const v=r[r.length-1],m=new dt;m.position.copy(v);const p=new at({color:3706428,roughness:.6,metalness:.08,side:Ee}),y=14+Math.floor(Math.random()*4);for(let T=0;T<y;T++){const A=T/y*Math.PI*2+(Math.random()-.5)*.15,I=this.createDetailedFrond(p,i);I.rotation.y=A;const M=T%3;I.rotation.x=.25+M*.18+Math.random()*.1,m.add(I)}const _=new at({color:5520683,roughness:.75}),x=new we(.35,1),R=4+Math.floor(Math.random()*3);for(let T=0;T<R;T++){const A=new D(x,_),I=T/R*Math.PI*2;A.position.set(Math.cos(I)*.48,-.35-Math.random()*.2,Math.sin(I)*.48),A.castShadow=!0,m.add(A)}return e.add(m),e.userData={type:"palm_tree",name:"Coconut Palm",maxHealth:80,health:80,resourceYield:{wood:4,leaves:3,coconut:2},toolCategory:"axe",height:i,frondGroup:m},e}static createDetailedFrond(t,e){const n=new dt,i=5.2+Math.min(e*.15,2),s=9,o=new Ct(.04,.06,i,5);o.rotateX(Math.PI/2);const r=new at({color:6856504,roughness:.7}),c=new D(o,r);c.position.z=i*.5,n.add(c);for(let l=1;l<s;l++){const h=l/s,d=Math.sin(h*Math.PI)*1.6+.3,u=i/s*1.1,f=new Yt(d*.5,u,3);f.rotateX(Math.PI/2);const g=new D(f,t),v=Math.pow(h,2)*1.4;g.position.set(0,-v,h*i),g.scale.set(1,.08,1),g.castShadow=!0,n.add(g)}return n}static createJungleTree(){const t=new dt,e=13+Math.random()*4,n=new Ct(.75,1.3,e,8),i=new at({color:4863269,roughness:.92,flatShading:!0}),s=new D(n,i);s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);const o=new at({color:1793568,roughness:.75,flatShading:!0}),r=6;for(let c=0;c<r;c++){const l=4.2+Math.random()*2.2,h=new we(l,1),d=new D(h,o),u=c/r*Math.PI*2,f=2.2+Math.random()*2.5;d.position.set(Math.cos(u)*f,e+(Math.random()-.5)*2.5,Math.sin(u)*f),d.scale.set(1.3,.75,1.3),d.castShadow=!0,t.add(d)}return t.userData={type:"jungle_tree",name:"Rainforest Banyan",maxHealth:110,health:110,resourceYield:{wood:6,leaves:4,fiber:4},toolCategory:"axe"},t}static createRockNode(){const t=new dt,e=1.3+Math.random()*.8,n=new we(e,1),i=n.attributes.position;for(let r=0;r<i.count;r++){const c=new C().fromBufferAttribute(i,r);c.x+=(Math.random()-.5)*.4,c.y*=.65+Math.random()*.3,c.z+=(Math.random()-.5)*.4,i.setXYZ(r,c.x,c.y,c.z)}n.computeVertexNormals();const s=new at({color:7234393,roughness:.9,metalness:.15,flatShading:!0}),o=new D(n,s);return o.castShadow=!0,o.receiveShadow=!0,o.position.y=e*.45,t.add(o),t.userData={type:"rock_node",name:"Granite Boulder",maxHealth:75,health:75,resourceYield:{stone:5,flint:2},toolCategory:"pickaxe"},t}static createDriftwood(){const t=new dt,e=3+Math.random()*1.8,n=new Ct(.2,.28,e,7);n.rotateZ(Math.PI/2);const i=new at({color:10389626,roughness:.95,flatShading:!0}),s=new D(n,i);return s.position.y=.18,s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,t.add(s),t.userData={type:"driftwood",name:"Beach Driftwood",maxHealth:25,health:25,resourceYield:{wood:3,fiber:2},isDirectPickup:!0,pickupPrompt:"[E] Gather Driftwood Timber"},t}static createGroundCoconut(){const t=new dt,e=new we(.26,1),n=new at({color:6111287,roughness:.88,flatShading:!0}),i=new D(e,n);i.position.y=.2,i.scale.set(.9,1.15,.9),i.castShadow=!0,t.add(i);const s=new Te({color:2562321}),o=new ne(.035,4,4);for(let r=0;r<3;r++){const c=new D(o,s),l=r/3*Math.PI*2;c.position.set(Math.cos(l)*.08,.42,Math.sin(l)*.08),t.add(c)}return t.userData={type:"ground_coconut",name:"Fresh Coconut",isDirectPickup:!0,resourceYield:{coconut:1},pickupPrompt:"[E] Pick up Fresh Coconut"},t}static createGroundStone(){const t=new dt,e=new we(.24,1),n=e.attributes.position;for(let o=0;o<n.count;o++){const r=new C().fromBufferAttribute(n,o);r.x+=(Math.random()-.5)*.08,r.y*=.55,r.z+=(Math.random()-.5)*.08,n.setXYZ(o,r.x,r.y,r.z)}e.computeVertexNormals();const i=new at({color:7901340,roughness:.82,metalness:.1,flatShading:!0}),s=new D(e,i);return s.position.y=.1,s.castShadow=!0,t.add(s),t.userData={type:"ground_stone",name:"Hard Stone",isDirectPickup:!0,resourceYield:{stone:1},pickupPrompt:"[E] Pick up Hard Stone"},t}static createBerryBush(){const t=new dt,e=new at({color:3046706,roughness:.7,flatShading:!0}),n=4;for(let c=0;c<n;c++){const l=.6+Math.random()*.35,h=new we(l,1),d=new D(h,e),u=c/n*Math.PI*2;d.position.set(Math.cos(u)*.35,.45+(Math.random()-.5)*.2,Math.sin(u)*.35),d.castShadow=!0,t.add(d)}const i=new at({color:12720219,roughness:.35,metalness:.1}),s=new ne(.085,6,6),o=new dt,r=8;for(let c=0;c<r;c++){const l=new D(s,i),h=c/r*Math.PI*2+(Math.random()-.5)*.3,d=.65+Math.random()*.25;l.position.set(Math.cos(h)*d,.5+(Math.random()-.5)*.3,Math.sin(h)*d),l.castShadow=!0,o.add(l)}return t.add(o),t.userData={type:"berry_bush",name:"Island Berry Bush",isDirectPickup:!0,berryGroup:o,resourceYield:{berries:3},pickupPrompt:"[E] Pick Island Berries"},t}static createMushroomNode(){const t=new dt,e=new at({color:16119285,roughness:.85}),n=new at({color:13840175,roughness:.5}),i=new Te({color:16777215}),s=3;for(let o=0;o<s;o++){const r=new dt,c=.7+Math.random()*.5,l=new Ct(.035,.05,.3,6),h=new D(l,e);h.position.y=.15,r.add(h);const d=new Yt(.18,.14,8),u=new D(d,n);u.position.y=.3,r.add(u);const f=new ne(.022,4,4);for(let v=0;v<4;v++){const m=new D(f,i),p=v/4*Math.PI*2;m.position.set(Math.cos(p)*.09,.28,Math.sin(p)*.09),r.add(m)}const g=o/s*Math.PI*2;r.position.set(Math.cos(g)*.22,0,Math.sin(g)*.22),r.scale.set(c,c,c),r.castShadow=!0,t.add(r)}return t.userData={type:"mushroom_node",name:"Wild Forest Mushrooms",isDirectPickup:!0,resourceYield:{mushroom:2},pickupPrompt:"[E] Harvest Wild Mushrooms"},t}static createFernNode(){const t=new dt,e=7,n=new at({color:4431943,roughness:.65,side:Ee});for(let i=0;i<e;i++){const s=i/e*Math.PI*2,o=new Yt(.35,1.4,4);o.rotateX(Math.PI/2.5);const r=new D(o,n);r.rotation.y=s,r.position.set(Math.cos(s)*.25,.15,Math.sin(s)*.25),r.scale.set(1,.06,1),r.castShadow=!0,t.add(r)}return t.userData={type:"fern_node",name:"Tropical Fern Plant",isDirectPickup:!0,resourceYield:{fiber:3,leaves:2},pickupPrompt:"[E] Harvest Plant Fiber & Leaves"},t}static createMonsteraBush(){const t=new dt,e=6,n=new at({color:3046706,roughness:.65,side:Ee});for(let i=0;i<e;i++){const s=i/e*Math.PI*2,o=new Yt(.65,1.9,5);o.rotateX(Math.PI/2.3);const r=new D(o,n);r.rotation.y=s,r.position.set(Math.cos(s)*.35,.3,Math.sin(s)*.35),r.scale.set(1,.1,1),r.castShadow=!0,t.add(r)}return t.userData={type:"bush",name:"Monstera Shrub",maxHealth:30,health:30,resourceYield:{fiber:3,leaves:3,berries:2},isDirectPickup:!0,pickupPrompt:"[E] Harvest Foliage & Berries"},t}}Vi(pe,"barkTex",null),Vi(pe,"leafTex",null);class um{constructor(t,e){this.scene=t,this.terrain=e,this.interactiveNodes=[],this.group=new dt,this.scene.add(this.group),this.particles=[],this.fallingTrees=[]}generateFoliage(t=480){const e=this.terrain.radius;for(let n=0;n<t;n++){const i=Math.sqrt(Math.random())*(e*.94),s=Math.random()*Math.PI*2,o=Math.cos(s)*i,r=Math.sin(s)*i,c=this.terrain.getElevation(o,r);if(c<.25||Math.hypot(o-50,r-70)<16||Math.hypot(o- -45,r- -30)<10)continue;let d=null;if(c<=3.2){const u=Math.random();if(u<.38){const f=Math.random()<.45?"leaning":"tall";if(d=pe.createPalmTree(f),Math.random()<.7){const g=pe.createGroundCoconut(),v=(Math.random()-.5)*3.5,m=o+v,p=r+v,y=this.terrain.getElevation(m,p);y>=.2&&(g.position.set(m,y,p),g.rotation.y=Math.random()*Math.PI*2,this.group.add(g),this.interactiveNodes.push(g))}}else u<.58?d=pe.createGroundStone():u<.76?d=pe.createDriftwood():u<.9?d=pe.createGroundCoconut():d=pe.createRockNode()}else if(c<=18){const u=Math.random();u<.22?d=pe.createPalmTree("tall"):u<.44?d=pe.createJungleTree():u<.6?d=pe.createBerryBush():u<.74?d=pe.createFernNode():u<.86?d=pe.createMushroomNode():u<.94?d=pe.createRockNode():d=pe.createGroundStone()}else{const u=Math.random();u<.48?d=pe.createRockNode():u<.72?d=pe.createGroundStone():u<.88?d=pe.createFernNode():d=pe.createMushroomNode()}d&&(d.position.set(o,c,r),d.rotation.y=Math.random()*Math.PI*2,this.group.add(d),this.interactiveNodes.push(d))}if(this.terrain.hiddenCave&&this.terrain.hiddenCave.mineralNodes)for(let n of this.terrain.hiddenCave.mineralNodes)this.interactiveNodes.push(n)}checkRaycast(t,e=4){const n=t.intersectObjects(this.group.children,!0);for(let i of n)if(i.distance<=e){let s=i.object;for(;s&&s.parent!==this.group;)s=s.parent;if(s&&s.userData&&s.userData.type)return{node:s,point:i.point,distance:i.distance}}if(this.terrain.hiddenCave){const i=t.intersectObjects(this.terrain.hiddenCave.group.children,!0);for(let s of i)if(s.distance<=e){let o=s.object;for(;o&&o.parent!==this.terrain.hiddenCave.group;)o=o.parent;if(o&&o.userData&&o.userData.type)return{node:o,point:s.point,distance:s.distance}}}return null}gatherDirectNode(t,e,n){if(!t||!t.userData)return!1;const i=t.userData.resourceYield||{},s=t.userData.type,o=this.interactiveNodes.indexOf(t);o!==-1&&this.interactiveNodes.splice(o,1),this.spawnPickupParticles(t.position,s);let r=1;const c=setInterval(()=>{r-=.2,r<=.1?(clearInterval(c),t.parent&&t.parent.remove(t)):t.scale.set(r,r,r)},25);return n&&n(i,s),!0}damageNode(t,e,n,i,s){if(!t||!t.userData)return null;if(t.userData.health-=e,this.wobbleNode(t),this.spawnHitParticles(n,t.userData.type),t.userData.health<=0){const o=t.userData.resourceYield||{},r=t.userData.type;s&&s(o,r);const c=this.interactiveNodes.indexOf(t);return c!==-1&&this.interactiveNodes.splice(c,1),r==="palm_tree"||r==="jungle_tree"?this.animateFallingTree(t,i):r==="rock_node"?(i&&i.playStoneBreak(),this.shatterRock(t)):this.destroyNode(t),{destroyed:!0,yield:o}}return{destroyed:!1,health:t.userData.health}}wobbleNode(t){const e=t.rotation.x,n=t.rotation.z,i=.08;t.rotation.x+=(Math.random()-.5)*i,t.rotation.z+=(Math.random()-.5)*i,setTimeout(()=>{t&&t.parent&&(t.rotation.x=e,t.rotation.z=n)},110)}animateFallingTree(t,e){e&&e.playTreeFall();const n=Math.random()>.5?"x":"z",i=Math.random()>.5?1:-1;this.fallingTrees.push({node:t,axis:n,dir:i,angle:0,speed:.05})}shatterRock(t){this.spawnHitParticles(t.position,"rock_node",18);let e=1;const n=setInterval(()=>{e-=.18,e<=.1?(clearInterval(n),t.parent&&t.parent.remove(t)):t.scale.set(e,e,e)},28)}destroyNode(t){let e=1;const n=setInterval(()=>{e-=.15,e<=.1?(clearInterval(n),t.parent&&t.parent.remove(t)):t.scale.set(e,e,e)},28)}spawnHitParticles(t,e,n=8){if(!t)return;let i=9268835;e==="rock_node"?i=9479342:e==="bush"||e==="fern_node"?i=5025616:e==="berry_bush"&&(i=12720219);const s=new Te({color:i}),o=new Xt(.12,.12,.12);for(let r=0;r<n;r++){const c=new D(o,s);c.position.copy(t),c.userData={velocity:new C((Math.random()-.5)*4.5,Math.random()*3.5+1.2,(Math.random()-.5)*4.5),life:.45},this.scene.add(c),this.particles.push(c)}}spawnPickupParticles(t,e){let n=16771899;e==="berry_bush"?n=15277667:e==="mushroom_node"?n=16733986:e==="ground_coconut"?n=9268835:e==="ground_stone"?n=9489145:e==="fern_node"&&(n=8505220);const i=new Te({color:n}),s=new Xt(.08,.08,.08);for(let o=0;o<7;o++){const r=new D(s,i);r.position.set(t.x,t.y+.3,t.z),r.userData={velocity:new C((Math.random()-.5)*2.2,Math.random()*2.5+1,(Math.random()-.5)*2.2),life:.35},this.scene.add(r),this.particles.push(r)}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.userData.life-=t,n.position.addScaledVector(n.userData.velocity,t),n.userData.velocity.y-=9.8*t,n.userData.life<=0&&(this.scene.remove(n),this.particles.splice(e,1))}for(let e=this.fallingTrees.length-1;e>=0;e--){const n=this.fallingTrees[e];n.speed+=t*3.5,n.angle+=n.speed*t,n.axis==="x"?n.node.rotation.x+=n.dir*n.speed*t:n.node.rotation.z+=n.dir*n.speed*t,n.angle>=Math.PI/2&&(n.node.parent&&n.node.parent.remove(n.node),this.fallingTrees.splice(e,1))}}}class fm{constructor(t,e,n=50,i=70){this.scene=t,this.terrain=e,this.x=n,this.z=i,this.y=e.getElevation(n,i),this.group=new dt,this.scavengeCrates=[],this.init()}init(){this.group.position.set(this.x,this.y,this.z);const t=new Ct(2.8,2.8,12,16,1,!0,0,Math.PI*1.55);t.rotateZ(Math.PI/2);const e=new at({color:14606046,metalness:.75,roughness:.35,side:Ee}),n=new D(t,e);n.position.set(0,1.8,0),n.rotation.z=.12,n.rotation.y=.4,n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const i=new Ct(2.82,2.82,11.8,16,1,!0,.4,.6);i.rotateZ(Math.PI/2);const s=new at({color:161725,side:Ee}),o=new D(i,s);o.position.copy(n.position),o.rotation.copy(n.rotation),this.group.add(o);const r=new Xt(10,.35,3.2),c=new at({color:13421772,metalness:.8,roughness:.3}),l=new D(r,c);l.position.set(-8,2.2,5),l.rotation.set(.3,.6,-.4),l.castShadow=!0,this.group.add(l);const h=new Ct(1.2,1.1,3.5,12);h.rotateX(Math.PI/2);const d=new at({color:3622735,metalness:.9,roughness:.3}),u=new D(h,d);u.position.set(-9.5,.8,7.5),u.rotation.set(.2,.4,.1),u.castShadow=!0,this.group.add(u);const f=new Rs(1.8,.35,8,12);f.rotateX(Math.PI/2);const g=new at({color:16757504,roughness:.6}),v=new D(f,g);v.position.set(6,.25,-4),v.scale.set(1.4,1,1),v.castShadow=!0,this.group.add(v),this.createScavengeCrate(-3,.4,-2,"emergency_crate"),this.createScavengeCrate(4,.4,2,"luggage_1"),this.createScavengeCrate(-2,.4,6,"luggage_2"),this.createScavengeCrate(7,.4,-2,"cargo_box"),this.createEmergencyFlare(),this.scene.add(this.group)}createEmergencyFlare(){const t=new Ct(.08,.08,.4,8),e=new at({color:16727296,emissive:16727296,emissiveIntensity:.8}),n=new D(t,e);n.position.set(2.5,.2,3.5),this.group.add(n);const i=new Ps(16739584,2,14);i.position.set(2.5,.5,3.5),this.group.add(i),this.smokePuffs=[];const s=new at({color:9479342,transparent:!0,opacity:.35,roughness:.95});for(let o=0;o<8;o++){const r=new we(.35+o*.12,1),c=new D(r,s);c.position.set(2.5+(Math.random()-.5)*.4,.5+o*1.2,3.5+(Math.random()-.5)*.4),this.group.add(c),this.smokePuffs.push({mesh:c,baseHeight:.5+o*1.2,offset:Math.random()*10})}}update(t){if(this.smokePuffs){const e=performance.now()*.002;this.smokePuffs.forEach(n=>{n.mesh.position.y+=t*1.2,n.mesh.position.x=2.5+Math.sin(e+n.offset)*.4,n.mesh.position.y>10.5&&(n.mesh.position.y=.6)})}}createScavengeCrate(t,e,n,i){const s=new dt;s.position.set(t,e,n);const o=i.includes("luggage");let r,c;o?(r=new Xt(.8,.4,.6),c=new at({color:i==="luggage_1"?12000284:1402304,roughness:.7})):(r=new Xt(1.1,.85,1.1),c=new at({color:9268835,roughness:.85}));const l=new D(r,c);l.castShadow=!0,l.receiveShadow=!0,s.add(l),s.userData={type:"crash_crate",id:i,searched:!1,loot:o?{scrap_metal:2,bandage:1}:{scrap_metal:3,flint:2,coconut:1}},this.group.add(s),this.scavengeCrates.push(s)}checkScavenge(t,e=3.5){const n=t.intersectObjects(this.group.children,!0);for(let i of n)if(i.distance<=e){let s=i.object;for(;s&&s.parent!==this.group;)s=s.parent;if(s&&s.userData&&s.userData.type==="crash_crate")return s}return null}}class Be{static getSharedMaterials(){return this._mats||(this._mats={deerFur:new at({color:9263926,roughness:.85,flatShading:!0}),deerUnderbelly:new at({color:14142664,roughness:.9,flatShading:!0}),antler:new at({color:6111287,roughness:.7,flatShading:!0}),hoof:new at({color:2171169,roughness:.9}),rabbitFur:new at({color:9268835,roughness:.95,flatShading:!0}),rabbitBelly:new at({color:16119285,roughness:.9}),earPink:new at({color:16764370,roughness:.8}),birdRed:new at({color:13840175,roughness:.7,flatShading:!0}),birdBlue:new at({color:1668818,roughness:.6,flatShading:!0}),birdYellow:new at({color:16498733,roughness:.6}),beak:new at({color:2503224,roughness:.5}),fishOrange:new at({color:16739584,roughness:.4,flatShading:!0}),fishWhite:new at({color:16777215,roughness:.4}),fishFin:new at({color:16755456,roughness:.3,transparent:!0,opacity:.85}),snakeGreen:new at({color:3046706,roughness:.7,flatShading:!0}),snakeGold:new at({color:16498733,roughness:.6}),snakeTongue:new Te({color:13959168}),boarDark:new at({color:4073251,roughness:.95,flatShading:!0}),boarSnout:new at({color:6111287,roughness:.9}),tusk:new at({color:16777215,roughness:.3}),crabRed:new at({color:14172949,roughness:.6,metalness:.1}),blackEye:new Te({color:1118481}),amberEye:new Te({color:16757504})}),this._mats}static createDeer(){const t=new dt,e=this.getSharedMaterials(),n=new Ct(.38,.44,1.35,7);n.rotateX(Math.PI/2);const i=new D(n,e.deerFur);i.position.y=.95,i.castShadow=!0,t.add(i);const s=new Xt(.48,.18,.9),o=new D(s,e.deerUnderbelly);o.position.set(0,.76,.05),t.add(o);const r=new dt;r.position.set(0,1.15,.55);const c=new Ct(.18,.26,.65,6);c.rotateX(Math.PI/4);const l=new D(c,e.deerFur);l.position.set(0,.22,.18),r.add(l);const h=new dt;h.position.set(0,.45,.35);const d=new Yt(.22,.52,6);d.rotateX(-Math.PI/2.2);const u=new D(d,e.deerFur);u.castShadow=!0,h.add(u);const f=new Xt(.12,.12,.16),g=new D(f,e.deerUnderbelly);g.position.set(0,-.05,.28),h.add(g);const v=new ne(.045,4,4),m=new D(v,e.blackEye);m.position.set(0,-.02,.36),h.add(m);const p=new ne(.038,5,5),y=new D(p,e.blackEye);y.position.set(.13,.08,.1);const _=new D(p,e.blackEye);_.position.set(-.13,.08,.1),h.add(y),h.add(_);const x=new Yt(.07,.24,4),R=new D(x,e.deerFur);R.position.set(.16,.22,-.06),R.rotation.z=-.5,R.rotation.x=-.2;const T=new D(x,e.deerFur);T.position.set(-.16,.22,-.06),T.rotation.z=.5,T.rotation.x=-.2,h.add(R),h.add(T);const A=new Ct(.025,.035,.55,5),I=new Ct(.018,.025,.28,4),M=new dt;M.position.set(.1,.18,-.02);const w=new D(A,e.antler);w.position.set(.08,.26,-.04),w.rotation.z=-.3,w.rotation.x=-.2;const N=new D(I,e.antler);N.position.set(.15,.28,.06),N.rotation.z=-.7,N.rotation.x=.4,M.add(w),M.add(N),h.add(M);const z=new dt;z.position.set(-.1,.18,-.02);const j=new D(A,e.antler);j.position.set(-.08,.26,-.04),j.rotation.z=.3,j.rotation.x=-.2;const P=new D(I,e.antler);P.position.set(-.15,.28,.06),P.rotation.z=.7,P.rotation.x=.4,z.add(j),z.add(P),h.add(z),r.add(h),t.add(r);const O=new Yt(.08,.22,4);O.rotateX(Math.PI/1.5);const W=new D(O,e.deerUnderbelly);W.position.set(0,1.05,-.72),t.add(W);const Y=new Ct(.055,.042,.85,6),q=new Xt(.07,.08,.1),X=[],$=[[-.18,.42,.42],[.18,.42,.42],[-.19,.42,-.45],[.19,.42,-.45]];for(let et of $){const nt=new dt;nt.position.set(et[0],et[1],et[2]);const H=new D(Y,e.deerFur);H.position.y=0,H.castShadow=!0,nt.add(H);const K=new D(q,e.hoof);K.position.set(0,-.4,.01),nt.add(K),t.add(nt),X.push(nt)}return t.userData={type:"deer",name:"Wild Deer",maxHealth:45,health:45,speed:6.2,fleeRadius:14,alertRadius:22,loot:{raw_meat:2,animal_hide:2,bone:1},legs:X,head:h,neck:r,tail:W},t}static createRabbit(){const t=new dt,e=this.getSharedMaterials(),n=new ne(.24,7,7);n.scale(1,.85,1.25);const i=new D(n,e.rabbitFur);i.position.y=.22,i.castShadow=!0,t.add(i);const s=new ne(.18,6,6);s.scale(.9,.5,1);const o=new D(s,e.rabbitBelly);o.position.set(0,.14,.05),t.add(o);const r=new dt;r.position.set(0,.32,.24);const c=new ne(.16,7,7);c.scale(.9,.95,1.05);const l=new D(c,e.rabbitFur);l.castShadow=!0,r.add(l);const h=new ne(.028,4,4),d=new D(h,e.earPink);d.position.set(0,-.02,.17),r.add(d);const u=new ne(.03,5,5),f=new D(u,e.blackEye);f.position.set(.11,.05,.08);const g=new D(u,e.blackEye);g.position.set(-.11,.05,.08),r.add(f),r.add(g);const v=new Yt(.045,.32,5),m=new Yt(.03,.28,4),p=new dt;p.position.set(.065,.14,-.02),p.rotation.z=-.15,p.rotation.x=-.1;const y=new D(v,e.rabbitFur),_=new D(m,e.earPink);_.position.z=.015,p.add(y),p.add(_),r.add(p);const x=new dt;x.position.set(-.065,.14,-.02),x.rotation.z=.15,x.rotation.x=-.1;const R=new D(v,e.rabbitFur),T=new D(m,e.earPink);T.position.z=.015,x.add(R),x.add(T),r.add(x),t.add(r);const A=new ne(.065,6,6),I=new D(A,e.rabbitBelly);I.position.set(0,.22,-.32),t.add(I);const M=new Xt(.07,.05,.14),w=[],N=[[-.1,.03,.14],[.1,.03,.14],[-.12,.04,-.16],[.12,.04,-.16]];for(let z of N){const j=new D(M,e.rabbitFur);j.position.set(z[0],z[1],z[2]),t.add(j),w.push(j)}return t.userData={type:"rabbit",name:"Island Hare",maxHealth:15,health:15,speed:5.4,fleeRadius:8,alertRadius:14,loot:{raw_meat:1,fiber:2,bone:1},legs:w,head:r,earL:p,earR:x},t}static createBird(){const t=new dt,e=this.getSharedMaterials(),n=new Yt(.18,.65,6);n.rotateX(-Math.PI/2.5);const i=new D(n,e.birdRed);i.position.y=.28,i.castShadow=!0,t.add(i);const s=new ne(.15,6,6);s.scale(.8,.9,1);const o=new D(s,e.birdYellow);o.position.set(0,.25,.08),t.add(o);const r=new ne(.12,6,6),c=new D(r,e.birdRed);c.position.set(0,.46,.22),t.add(c);const l=new Yt(.05,.15,4);l.rotateX(-Math.PI/1.7);const h=new D(l,e.beak);h.position.set(0,.44,.35),t.add(h);const d=new ne(.022,4,4),u=new D(d,e.blackEye);u.position.set(.09,.48,.26);const f=new D(d,e.blackEye);f.position.set(-.09,.48,.26),t.add(u),t.add(f);const g=new Xt(.65,.03,.35);g.translate(.32,0,0);const v=new dt;v.position.set(.1,.32,.02);const m=new D(g,e.birdBlue);m.castShadow=!0,v.add(m),t.add(v);const p=new dt;p.position.set(-.1,.32,.02);const y=new D(g,e.birdBlue);y.rotation.y=Math.PI,y.castShadow=!0,p.add(y),t.add(p);const _=new nn(.14,.7);_.rotateX(Math.PI/2.3);const x=new D(_,e.birdBlue);x.position.set(0,.22,-.45),t.add(x);const R=new Ct(.015,.015,.12,4),T=new D(R,e.beak);T.position.set(.08,.06,.02);const A=new D(R,e.beak);return A.position.set(-.08,.06,.02),t.add(T),t.add(A),t.userData={type:"bird",name:"Tropical Macaw",maxHealth:18,health:18,speed:7.2,fleeRadius:7,loot:{feathers:3,raw_meat:1},wingL:v,wingR:p,isFlying:!1,altitude:0,tail:x},t}static createFish(){const t=new dt,e=this.getSharedMaterials(),n=new ne(.16,7,7);n.scale(.65,1,1.85);const i=new D(n,e.fishOrange);i.position.y=.18,t.add(i);const s=new Ct(.165,.165,.08,7);s.rotateX(Math.PI/2),s.scale(.68,1.02,1);const o=new D(s,e.fishWhite);o.position.set(0,.18,.08),t.add(o);const r=new D(s,e.fishWhite);r.position.set(0,.18,-.12),t.add(r);const c=new nn(.12,.26);c.rotateZ(Math.PI/4);const l=new D(c,e.fishFin);l.position.set(0,.32,0),t.add(l);const h=new dt;h.position.set(0,.18,-.28);const d=new Yt(.15,.24,4);d.rotateX(-Math.PI/2),d.scale(.18,1,1);const u=new D(d,e.fishFin);u.position.set(0,0,-.12),h.add(u),t.add(h);const f=new nn(.12,.16),g=new D(f,e.fishFin);g.position.set(.12,.16,.12),g.rotation.y=.6;const v=new D(f,e.fishFin);v.position.set(-.12,.16,.12),v.rotation.y=-.6,t.add(g),t.add(v);const m=new ne(.024,4,4),p=new D(m,e.blackEye);p.position.set(.09,.2,.22);const y=new D(m,e.blackEye);return y.position.set(-.09,.2,.22),t.add(p),t.add(y),t.userData={type:"fish",name:"Tropical Reef Fish",maxHealth:10,health:10,speed:2.8,scatterRadius:3.5,loot:{raw_fish:1},tailPivot:h},t}static createSnake(){const t=new dt,e=this.getSharedMaterials(),n=8,i=[];for(let f=0;f<n;f++){const g=Math.max(.04,.08-f*.006),v=new ne(g,6,6);v.scale(1.1,.7,1.3);const m=f%2===0?e.snakeGreen:e.snakeGold,p=new D(v,m);p.position.set(0,g*.7,-f*.15),p.castShadow=!0,t.add(p),i.push(p)}const s=new dt;s.position.set(0,.1,.08);const o=new Yt(.09,.22,4);o.rotateX(-Math.PI/2.2),o.scale(1.2,.6,1);const r=new D(o,e.snakeGreen);r.castShadow=!0,s.add(r);const c=new ne(.022,4,4),l=new D(c,e.amberEye);l.position.set(.07,.03,.05);const h=new D(c,e.amberEye);h.position.set(-.07,.03,.05),s.add(l),s.add(h);const d=new Xt(.015,.005,.12),u=new D(d,e.snakeTongue);return u.position.set(0,-.01,.15),s.add(u),t.add(s),t.userData={type:"snake",name:"Jungle Viper",maxHealth:28,health:28,speed:3.2,attackRadius:2.2,hissRadius:5,loot:{snake_skin:1,raw_meat:1},segments:i,headGroup:s,tongue:u},t}static createBoar(){const t=new dt,e=this.getSharedMaterials(),n=new Ct(.48,.65,1.4,8);n.rotateX(Math.PI/2);const i=new D(n,e.boarDark);i.position.y=.75,i.castShadow=!0,t.add(i);const s=new dt;s.position.set(0,.85,.85);const o=new Yt(.38,.75,6);o.rotateX(-Math.PI/2);const r=new D(o,e.boarDark);r.castShadow=!0,s.add(r);const c=new Ct(.16,.18,.25,6);c.rotateX(Math.PI/2);const l=new D(c,e.boarSnout);l.position.set(0,-.07,.4),s.add(l);const h=new Yt(.04,.22,4);h.rotateX(Math.PI/3);const d=new D(h,e.tusk);d.position.set(.18,-.11,.3),d.rotation.z=.2;const u=new D(h,e.tusk);u.position.set(-.18,-.11,.3),u.rotation.z=-.2,s.add(d),s.add(u);const f=new Yt(.12,.28,4),g=new D(f,e.boarDark);g.position.set(.24,.27,-.2),g.rotation.z=.5;const v=new D(f,e.boarDark);v.position.set(-.24,.27,-.2),v.rotation.z=-.5,s.add(g),s.add(v),t.add(s);const m=new Ct(.1,.08,.58,6),p=[],y=[[-.26,.3,.45],[.26,.3,.45],[-.28,.3,-.45],[.28,.3,-.45]];for(let _ of y){const x=new D(m,e.hoof);x.position.set(_[0],_[1],_[2]),x.castShadow=!0,t.add(x),p.push(x)}return t.userData={type:"boar",name:"Wild Boar",maxHealth:65,health:65,speed:3.8,chargeSpeed:6.5,aggroRadius:9,loot:{raw_meat:2,animal_hide:2,bone:2},legs:p,head:s},t}static createCrab(){const t=new dt,e=this.getSharedMaterials(),n=new we(.35,1);n.scale(1.2,.5,.9);const i=new D(n,e.crabRed);i.position.y=.22,i.castShadow=!0,t.add(i);const s=new ne(.045,6,6),o=new D(s,e.blackEye);o.position.set(.12,.38,.24);const r=new D(s,e.blackEye);r.position.set(-.12,.38,.24),t.add(o),t.add(r);const c=new Yt(.12,.32,5);c.rotateX(Math.PI/2);const l=new D(c,e.crabRed);l.position.set(.38,.22,.28),l.rotation.y=.4,l.castShadow=!0,t.add(l);const h=new D(c,e.crabRed);h.position.set(-.38,.22,.28),h.rotation.y=-.4,h.castShadow=!0,t.add(h);const d=new Ct(.025,.02,.32,4),u=[];for(let f=-1;f<=1;f+=2)for(let g=0;g<3;g++){const v=new D(d,e.crabRed),m=(g-1)*.14;v.position.set(f*.35,.12,m),v.rotation.z=f*.7,v.rotation.y=f*.2,v.castShadow=!0,t.add(v),u.push(v)}return t.userData={type:"crab",name:"Coastal Crab",maxHealth:25,health:25,speed:2.2,fleeRadius:5,loot:{raw_crab:1},legs:u},t}}class pm{constructor(t,e){this.scene=t,this.terrain=e,this.animals=[],this.respawnQueue=[],this.group=new dt,this.scene.add(this.group),this._v1=new C,this._v2=new C,this._lookTarget=new C}spawnAnimals(t={}){const e=this.terrain.radius,n=t.deer!==void 0?t.deer:7,i=t.rabbits!==void 0?t.rabbits:10,s=t.birds!==void 0?t.birds:8,o=t.fish!==void 0?t.fish:12,r=t.snakes!==void 0?t.snakes:6,c=t.boars!==void 0?t.boars:6,l=t.crabs!==void 0?t.crabs:10;for(let h=0;h<n;h++){const d=this.findBiomePosition(.25,.7,3,15);if(d){const u=Be.createDeer();u.position.copy(d),u.rotation.y=Math.random()*Math.PI*2,u.userData.ai={state:"wander",target:d.clone(),homePos:d.clone(),timer:2+Math.random()*4,animTime:Math.random()*10,attackCooldown:0},this.group.add(u),this.animals.push(u)}}for(let h=0;h<i;h++){const d=this.findBiomePosition(.45,.88,1.2,8.5);if(d){const u=Be.createRabbit();u.position.copy(d),u.rotation.y=Math.random()*Math.PI*2,u.userData.ai={state:"wander",target:d.clone(),homePos:d.clone(),timer:1.5+Math.random()*3,animTime:Math.random()*10,hopOffset:0},this.group.add(u),this.animals.push(u)}}for(let h=0;h<s;h++){const d=h%2===1,u=h/s*Math.PI*2+Math.random()*.4,f=e*(.3+Math.random()*.45),g=Math.cos(u)*f,v=Math.sin(u)*f,m=this.terrain.getElevation(g,v),p=Be.createBird();if(d){const y=24+Math.random()*12;p.position.set(g,y,v),p.userData.isFlying=!0,p.userData.altitude=y,p.userData.ai={state:"soar",orbitAngle:u,orbitRadius:f,orbitSpeed:.18+Math.random()*.12,timer:6+Math.random()*8,animTime:Math.random()*10}}else p.position.set(g,Math.max(1,m),v),p.userData.isFlying=!1,p.userData.ai={state:"perch",target:new C(g,m,v),homePos:new C(g,m,v),timer:3+Math.random()*6,animTime:Math.random()*10};this.group.add(p),this.animals.push(p)}for(let h=0;h<o;h++){const d=h/o*Math.PI*2+(Math.random()-.5)*.5,u=e*(.85+Math.random()*.22),f=Math.cos(d)*u,g=Math.sin(d)*u,v=this.terrain.getElevation(f,g);if(v<.2){const m=Be.createFish(),p=Math.min(-.25,Math.max(-1.4,v+.35));m.position.set(f,p,g),m.userData.ai={state:"swim",target:new C(f,p,g),homePos:new C(f,p,g),timer:2+Math.random()*4,animTime:Math.random()*10},this.group.add(m),this.animals.push(m)}}for(let h=0;h<r;h++){const d=this.findBiomePosition(.2,.72,2.8,14);if(d){const u=Be.createSnake();u.position.copy(d),u.rotation.y=Math.random()*Math.PI*2,u.userData.ai={state:"wander",target:d.clone(),homePos:d.clone(),timer:2.5+Math.random()*4,animTime:Math.random()*10,attackCooldown:0},this.group.add(u),this.animals.push(u)}}for(let h=0;h<c;h++){const d=this.findBiomePosition(.18,.65,3.5,16);if(d){const u=Be.createBoar();u.position.copy(d),u.rotation.y=Math.random()*Math.PI*2,u.userData.ai={state:"wander",target:d.clone(),homePos:d.clone(),timer:3+Math.random()*5,animTime:Math.random()*10,attackCooldown:0},this.group.add(u),this.animals.push(u)}}for(let h=0;h<l;h++){const d=Math.random()*Math.PI*2,u=e*(.78+Math.random()*.18),f=Math.cos(d)*u,g=Math.sin(d)*u,v=this.terrain.getElevation(f,g);if(v>.1&&v<2.5){const m=Be.createCrab();m.position.set(f,v,g),m.userData.ai={state:"wander",target:new C(f,v,g),homePos:new C(f,v,g),timer:2+Math.random()*4,animTime:Math.random()*10},this.group.add(m),this.animals.push(m)}}}findBiomePosition(t,e,n,i){const s=this.terrain.radius;for(let o=0;o<30;o++){const r=Math.random()*Math.PI*2,c=s*(t+Math.random()*(e-t)),l=Math.cos(r)*c,h=Math.sin(r)*c,d=this.terrain.getElevation(l,h);if(d>=n&&d<=i)return new C(l,d,h)}return null}update(t,e,n){this.updateRespawns(t);for(let i=this.animals.length-1;i>=0;i--){const s=this.animals[i];if(!s.parent)continue;const o=s.userData,r=o.ai;r.timer-=t,r.attackCooldown>0&&(r.attackCooldown-=t);const c=s.position.distanceTo(e),l=c<85;switch(l&&(r.animTime+=t*7),o.type){case"deer":this.updateDeer(s,t,e,c,l);break;case"rabbit":this.updateRabbit(s,t,e,c,l);break;case"bird":this.updateBird(s,t,e,c,l);break;case"fish":this.updateFish(s,t,e,c,l);break;case"snake":this.updateSnake(s,t,e,c,l,n);break;case"boar":this.updateBoar(s,t,e,c,l,n);break;case"crab":this.updateCrab(s,t,e,c,l);break}}}updateDeer(t,e,n,i,s){const o=t.userData,r=o.ai;if(i<o.fleeRadius||o.health<o.maxHealth)r.state="flee";else if(i<o.alertRadius&&r.state!=="flee")r.state="alert";else if(r.timer<=0&&(r.state=Math.random()<.35?"idle":"wander",r.timer=3.5+Math.random()*5,r.state==="wander")){const d=Math.random()*Math.PI*2,u=6+Math.random()*8;r.target.set(t.position.x+Math.cos(d)*u,0,t.position.z+Math.sin(d)*u)}let c=this._v1.set(0,0,0),l=0;r.state==="flee"?(c.subVectors(t.position,n).setY(0),c.lengthSq()>.01&&c.normalize(),l=o.speed*1.35,i>o.alertRadius+10&&(r.state="wander")):r.state==="alert"?(c.subVectors(n,t.position).setY(0),c.lengthSq()>.01&&(this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget)),o.head&&s&&(o.head.rotation.x=wa.lerp(o.head.rotation.x,-.35,.1))):r.state==="wander"?(c.subVectors(r.target,t.position).setY(0),c.length()>.6?(c.normalize(),l=o.speed*.45):r.state="idle"):r.state==="idle"&&o.head&&s&&(o.head.rotation.x=Math.sin(r.animTime*.4)*.28+.15),l>0&&(t.position.addScaledVector(c,l*e),this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget),o.legs&&s&&o.legs.forEach((d,u)=>{const f=u%2===0?1:-1,g=r.state==="flee"?.75:.45;d.rotation.x=Math.sin(r.animTime*(r.state==="flee"?2:1)+u)*g*f}));const h=this.terrain.getElevation(t.position.x,t.position.z);t.position.y=Math.max(1.8,h),h<1.8&&(r.target.set(0,0,0),r.state="wander")}updateRabbit(t,e,n,i,s){const o=t.userData,r=o.ai;if(i<o.fleeRadius||o.health<o.maxHealth)r.state="flee";else if(i<o.alertRadius&&r.state!=="flee")r.state="alert";else if(r.timer<=0&&(r.state=Math.random()<.4?"idle":"wander",r.timer=2+Math.random()*3.5,r.state==="wander")){const u=Math.random()*Math.PI*2,f=3.5+Math.random()*5;r.target.set(t.position.x+Math.cos(u)*f,0,t.position.z+Math.sin(u)*f)}let c=this._v1.set(0,0,0),l=0;r.state==="flee"?(c.subVectors(t.position,n).setY(0),c.lengthSq()>.01&&c.normalize(),l=o.speed*1.35,i>o.alertRadius+6&&(r.state="wander")):r.state==="alert"?(c.subVectors(n,t.position).setY(0),c.lengthSq()>.01&&(this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget)),o.earL&&o.earR&&s&&(o.earL.rotation.z=-.1+Math.sin(r.animTime*1.5)*.08,o.earR.rotation.z=.1+Math.cos(r.animTime*1.5)*.08)):r.state==="wander"?(c.subVectors(r.target,t.position).setY(0),c.length()>.4?(c.normalize(),l=o.speed*.55):r.state="idle"):r.state==="idle"&&o.earL&&o.earR&&s&&(o.earL.rotation.z=-.15+Math.sin(r.animTime*1.2)*.12,o.earR.rotation.z=.15+Math.cos(r.animTime*1.2)*.12);let h=0;if(l>0){t.position.addScaledVector(c,l*e),this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget);const u=r.state==="flee"?14:9;h=Math.abs(Math.sin(r.animTime*(u/7)))*.28,o.legs&&s&&o.legs.forEach((f,g)=>{f.rotation.x=Math.sin(r.animTime*2+g)*.4})}const d=this.terrain.getElevation(t.position.x,t.position.z);t.position.y=Math.max(.6,d)+h,d<.6&&(r.target.set(0,0,0),r.state="wander")}updateBird(t,e,n,i,s){const o=t.userData,r=o.ai;if(!o.isFlying)if(i<o.fleeRadius||o.health<o.maxHealth)o.isFlying=!0,r.state="takeoff",o.altitude=26+Math.random()*8,r.orbitAngle=Math.atan2(t.position.z,t.position.x),r.orbitRadius=Math.hypot(t.position.x,t.position.z),r.orbitSpeed=.2;else{r.timer<=0&&(r.timer=2+Math.random()*4,t.rotation.y+=(Math.random()-.5)*1.2),o.wingL&&o.wingR&&(o.wingL.rotation.z=0,o.wingR.rotation.z=0);return}if(r.state==="takeoff"){if(t.position.y+=e*7.5,o.wingL&&o.wingR&&s){const c=Math.sin(r.animTime*3.5)*.75;o.wingL.rotation.z=c,o.wingR.rotation.z=-c}t.position.y>=o.altitude&&(r.state="soar")}else{r.orbitAngle+=e*(r.orbitSpeed||.18);const c=Math.cos(r.orbitAngle)*r.orbitRadius,l=Math.sin(r.orbitAngle)*r.orbitRadius;this._v1.set(c,o.altitude+Math.sin(r.orbitAngle*3)*1.5,l),t.position.lerp(this._v1,e*2);const h=r.orbitAngle+.1;if(this._lookTarget.set(Math.cos(h)*r.orbitRadius,t.position.y,Math.sin(h)*r.orbitRadius),t.lookAt(this._lookTarget),t.rotation.z=-.35,r.animTime*.6%6<2.2&&o.wingL&&o.wingR&&s){const u=Math.sin(r.animTime*2.2)*.55;o.wingL.rotation.z=u,o.wingR.rotation.z=-u}else o.wingL&&o.wingR&&(o.wingL.rotation.z=.05,o.wingR.rotation.z=-.05)}}updateFish(t,e,n,i,s){const o=t.userData,r=o.ai;if(i<o.scatterRadius||o.health<o.maxHealth)r.state="scatter";else if(r.timer<=0&&(r.state=Math.random()<.3?"idle":"swim",r.timer=2.5+Math.random()*4,r.state==="swim")){const d=Math.random()*Math.PI*2,u=4+Math.random()*6;r.target.set(t.position.x+Math.cos(d)*u,0,t.position.z+Math.sin(d)*u)}let c=this._v1.set(0,0,0),l=0;if(r.state==="scatter"?(c.subVectors(t.position,n).setY(0),c.lengthSq()>.01&&c.normalize(),l=o.speed*1.6,i>o.scatterRadius+5&&(r.state="swim")):r.state==="swim"&&(c.subVectors(r.target,t.position).setY(0),c.length()>.5?(c.normalize(),l=o.speed*.6):r.state="idle"),l>0&&(t.position.addScaledVector(c,l*e),this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget)),o.tailPivot&&s){const d=r.state==="scatter"?2.8:1.4;o.tailPivot.rotation.y=Math.sin(r.animTime*d)*.42}const h=this.terrain.getElevation(t.position.x,t.position.z);if(t.position.y=Math.min(-.25,Math.max(h+.25,-1.35+Math.sin(r.animTime*.5)*.12)),h>-.15){const d=this._v2.set(t.position.x,0,t.position.z).normalize().multiplyScalar(this.terrain.radius*.95);r.target.copy(d),r.state="swim"}}updateSnake(t,e,n,i,s,o){const r=t.userData,c=r.ai;if(i<r.attackRadius||r.health<r.maxHealth)c.state="attack";else if(i<r.hissRadius)c.state="hiss";else if(c.timer<=0&&(c.state=Math.random()<.4?"idle":"wander",c.timer=2.5+Math.random()*4,c.state==="wander")){const u=Math.random()*Math.PI*2,f=3+Math.random()*4;c.target.set(t.position.x+Math.cos(u)*f,0,t.position.z+Math.sin(u)*f)}let l=this._v1.set(0,0,0),h=0;c.state==="attack"?(l.subVectors(n,t.position).setY(0),l.lengthSq()>.01&&l.normalize(),h=r.speed*1.25,i<1.7&&c.attackCooldown<=0&&(o&&o(12,"⚠️ Jungle Viper Bitten you! (-12 HP)"),c.attackCooldown=2.2,t.position.addScaledVector(l,-.6))):c.state==="hiss"?(l.subVectors(n,t.position).setY(0),l.lengthSq()>.01&&(this._lookTarget.copy(t.position).add(l),t.lookAt(this._lookTarget)),r.headGroup&&s&&(r.headGroup.position.y=.22+Math.sin(c.animTime*.8)*.04)):c.state==="wander"&&(l.subVectors(c.target,t.position).setY(0),l.length()>.4?(l.normalize(),h=r.speed*.5):c.state="idle"),h>0&&(t.position.addScaledVector(l,h*e),this._lookTarget.copy(t.position).add(l),t.lookAt(this._lookTarget)),s&&(r.segments&&r.segments.forEach((u,f)=>{const g=Math.sin(c.animTime*1.2+f*.75)*.13;u.position.x=g}),r.tongue&&(r.tongue.position.z=.14+Math.sin(c.animTime*3.5)*.06));const d=this.terrain.getElevation(t.position.x,t.position.z);t.position.y=Math.max(.6,d),d<.6&&(c.target.set(0,0,0),c.state="wander")}updateBoar(t,e,n,i,s,o){const r=t.userData,c=r.ai;if(i<r.aggroRadius||r.health<r.maxHealth)c.state="charge";else if(c.timer<=0&&(c.state=Math.random()<.35?"idle":"wander",c.timer=3+Math.random()*5,c.state==="wander")){const u=Math.random()*Math.PI*2,f=5+Math.random()*7;c.target.set(t.position.x+Math.cos(u)*f,0,t.position.z+Math.sin(u)*f)}let l=this._v1.set(0,0,0),h=0;c.state==="charge"?(l.subVectors(n,t.position).setY(0),l.lengthSq()>.01&&l.normalize(),h=r.chargeSpeed||6.5,r.head&&s&&(r.head.rotation.x=-.22),i<1.8&&c.attackCooldown<=0&&(o&&o(18,"⚠️ Wild Boar Gored you with ivory tusks! (-18 HP)"),c.attackCooldown=1.6,t.position.addScaledVector(l,-.8))):c.state==="wander"?(l.subVectors(c.target,t.position).setY(0),l.length()>.5?(l.normalize(),h=r.speed*.55):c.state="idle",r.head&&s&&(r.head.rotation.x=0)):c.state==="idle"&&r.head&&s&&(r.head.rotation.x=Math.sin(c.animTime*.5)*.18+.1),h>0&&(t.position.addScaledVector(l,h*e),this._lookTarget.copy(t.position).add(l),t.lookAt(this._lookTarget),r.legs&&s&&r.legs.forEach((u,f)=>{const g=f%2===0?1:-1,v=c.state==="charge"?.65:.42;u.rotation.x=Math.sin(c.animTime*(c.state==="charge"?1.8:1)+f)*v*g}));const d=this.terrain.getElevation(t.position.x,t.position.z);t.position.y=Math.max(1.8,d),d<1.8&&(c.target.set(0,0,0),c.state="wander")}updateCrab(t,e,n,i,s){const o=t.userData,r=o.ai;if(i<o.fleeRadius)r.state="flee";else if(r.timer<=0&&(r.state=Math.random()<.4?"idle":"wander",r.timer=2+Math.random()*4,r.state==="wander")){const d=Math.random()*Math.PI*2,u=3+Math.random()*4;r.target.set(t.position.x+Math.cos(d)*u,0,t.position.z+Math.sin(d)*u)}let c=this._v1.set(0,0,0),l=0;r.state==="flee"?(c.subVectors(t.position,n).setY(0),c.lengthSq()>.01&&c.normalize(),l=o.speed*1.35):r.state==="wander"&&(c.subVectors(r.target,t.position).setY(0),c.length()>.4?(c.normalize(),l=o.speed*.5):r.state="idle"),l>0&&(t.position.addScaledVector(c,l*e),this._lookTarget.copy(t.position).add(c),t.lookAt(this._lookTarget),o.legs&&s&&o.legs.forEach((d,u)=>{d.rotation.x=Math.sin(r.animTime*1.8+u)*.35}));const h=this.terrain.getElevation(t.position.x,t.position.z);t.position.y=Math.max(.08,h)}checkAttack(t,e=3.8){const n=t.intersectObjects(this.group.children,!0);for(let i of n)if(i.distance<=e){let s=i.object;for(;s&&s.parent!==this.group;)s=s.parent;if(s&&s.userData&&s.userData.type)return{animal:s,point:i.point,distance:i.distance}}return null}damageAnimal(t,e,n){if(!t||!t.userData)return;const i=t.userData;i.health-=e,t.traverse(s=>{if(s.isMesh&&s.material&&s.material.color){const o=s.material.color.clone();s.material.color.set(16717636),setTimeout(()=>{s&&s.material&&s.material.color.copy(o)},130)}}),i.type==="deer"||i.type==="rabbit"||i.type==="crab"?i.ai.state="flee":i.type==="bird"?(i.isFlying=!0,i.ai.state="takeoff",i.altitude=28):(i.type==="boar"||i.type==="snake")&&(i.ai.state="charge"),i.health<=0&&(n&&n(i.loot,i.type,i.name),this.destroyAnimal(t))}destroyAnimal(t){const e=this.animals.indexOf(t);e!==-1&&this.animals.splice(e,1);const n=t.userData.type,i=t.userData.ai?t.userData.ai.homePos:t.position.clone();this.respawnQueue.push({type:n,timer:55,spawnPos:i});let s=0;const o=setInterval(()=>{s++,t.rotation.z+=.16,t.position.y-=.04,t.scale.multiplyScalar(.92),s>14&&(clearInterval(o),this.group.remove(t))},30)}updateRespawns(t){for(let e=this.respawnQueue.length-1;e>=0;e--){const n=this.respawnQueue[e];n.timer-=t,n.timer<=0&&(this.spawnSingleAnimal(n.type,n.spawnPos),this.respawnQueue.splice(e,1))}}spawnSingleAnimal(t,e){let n=null;switch(t){case"deer":n=Be.createDeer();break;case"rabbit":n=Be.createRabbit();break;case"bird":n=Be.createBird();break;case"fish":n=Be.createFish();break;case"snake":n=Be.createSnake();break;case"boar":n=Be.createBoar();break;case"crab":n=Be.createCrab();break}if(n){const i=e||new C(0,2,0),s=this.terrain.getElevation(i.x,i.z);n.position.set(i.x,Math.max(.2,s),i.z),n.userData.ai={state:"wander",target:i.clone(),homePos:i.clone(),timer:3+Math.random()*4,animTime:Math.random()*10,attackCooldown:0},this.group.add(n),this.animals.push(n)}}}const Kt={WOOD:{id:"wood",name:"Palm Wood",category:"resource",icon:"🪵",description:"Sturdy timber harvested from palm trees. Essential for tools, weapons, and shelter.",maxStack:50},STONE:{id:"stone",name:"Hard Stone",category:"resource",icon:"🪨",description:"Smooth river stone found on beaches and mined from boulders.",maxStack:50},FLINT:{id:"flint",name:"Sharp Flint",category:"resource",icon:"🔪",description:"Chipped mineral with razor-sharp edges. Used for spears and fire starting.",maxStack:30},FIBER:{id:"fiber",name:"Plant Fiber",category:"resource",icon:"🌿",description:"Tough fibers stripped from jungle ferns and palm leaves. Used for cordage and lashings.",maxStack:50},LEAVES:{id:"leaves",name:"Tropical Leaves",category:"resource",icon:"🍃",description:"Broad tropical leaves harvested from jungle trees and ferns. Used for thatching and clothing.",maxStack:50},PALM_FROND:{id:"palm_frond",name:"Palm Fronds",category:"resource",icon:"🌴",description:"Large tropical palm fronds used for thatching roofs, lean-to shelters, and crafting.",maxStack:30},MUSHROOM:{id:"mushroom",name:"Wild Forest Mushroom",category:"consumable",icon:"🍄",description:"Edible forest mushroom harvested from shady roots and caves. Restores hunger and vitality.",maxStack:30,consumable:{hunger:16,thirst:6,health:8,useSound:"eat"}},SCRAP_METAL:{id:"scrap_metal",name:"Plane Debris Scrap",category:"resource",icon:"⚙️",description:"Alloy salvaged from the plane crash wreckage. Useful for advanced mechanisms.",maxStack:20},HERB:{id:"herb",name:"Medicinal Herbs",category:"resource",icon:"🌱",description:"Healing tropical flora. Can be applied directly or crafted into soothing bandages.",maxStack:25,consumable:{hunger:5,thirst:2,health:15,useSound:"eat"}},FEATHERS:{id:"feathers",name:"Tropical Feathers",category:"resource",icon:"🪶",description:"Soft brightly colored bird plumage collected from island birds.",maxStack:40},ANIMAL_HIDE:{id:"animal_hide",name:"Animal Hide",category:"resource",icon:"🦌",description:"Tough pelt harvested from deer and boars. Used for leather crafting.",maxStack:25},BONE:{id:"bone",name:"Animal Bone",category:"resource",icon:"🦴",description:"Sturdy bone harvested from game animals. Useful for tools and talismans.",maxStack:30},SNAKE_SKIN:{id:"snake_skin",name:"Serpent Scales",category:"resource",icon:"🐍",description:"Patterned scales stripped from venomous island vipers.",maxStack:20},COCONUT:{id:"coconut",name:"Fresh Coconut",category:"consumable",icon:"🥥",description:"Sweet coconut milk and meat. Restores thirst and slight hunger.",maxStack:15,consumable:{hunger:12,thirst:25,health:2,useSound:"drink"}},BERRIES:{id:"berries",name:"Island Berries",category:"consumable",icon:"🫐",description:"Juicy tropical wild berries. Sweet and thirst-quenching.",maxStack:30,consumable:{hunger:10,thirst:8,health:3,useSound:"eat"}},RAW_CRAB:{id:"raw_crab",name:"Raw Crab Meat",category:"consumable",icon:"🦀",description:"Freshly harvested coastal crab meat. Better cooked to avoid food sickness.",maxStack:15,consumable:{hunger:15,thirst:-5,health:-5,useSound:"eat"}},COOKED_CRAB:{id:"cooked_crab",name:"Grilled Crab Meat",category:"consumable",icon:"🍤",description:"Roasted to perfection on the campfire. Plump and delicious.",maxStack:15,consumable:{hunger:35,thirst:5,health:15,useSound:"eat"}},RAW_FISH:{id:"raw_fish",name:"Raw Reef Fish",category:"consumable",icon:"🐟",description:"Freshly caught coastal reef fish. Cook over a campfire before eating.",maxStack:15,consumable:{hunger:18,thirst:-4,health:-5,useSound:"eat"}},COOKED_FISH:{id:"cooked_fish",name:"Grilled Reef Fish",category:"consumable",icon:"🐠",description:"Tender fish grilled to perfection over a campfire. Highly nutritious.",maxStack:15,consumable:{hunger:42,thirst:8,health:22,useSound:"eat"}},RAW_MEAT:{id:"raw_meat",name:"Raw Game Meat",category:"consumable",icon:"🥩",description:"Raw meat from island wildlife. High protein, but unsafe raw.",maxStack:15,consumable:{hunger:20,thirst:-8,health:-10,useSound:"eat"}},COOKED_MEAT:{id:"cooked_meat",name:"Roasted Meat Steak",category:"consumable",icon:"🍖",description:"Hearty roasted steak. Greatly restores hunger and vitality.",maxStack:15,consumable:{hunger:55,thirst:5,health:30,useSound:"eat"}},WATER_CANTEEN:{id:"water_canteen",name:"Purified Water Flask",category:"consumable",icon:"💧",description:"Fresh clean water sealed in a hollow coconut canteen.",maxStack:5,consumable:{hunger:0,thirst:60,health:5,useSound:"drink"}},BANDAGE:{id:"bandage",name:"Herbal Bandage",category:"consumable",icon:"🩹",description:"Plant fibers woven with healing medicinal herbs. Heals 40 HP.",maxStack:10,consumable:{hunger:0,thirst:0,health:40,useSound:"eat"}},WOODEN_AXE:{id:"wooden_axe",name:"Wooden Axe",category:"tool",toolType:"axe",icon:"🪓",description:"Carved hardwood axe. Efficient at chopping palm timber and collecting leaves.",efficiency:{tree:2.6,rock:.6,attack:16},durability:80,maxStack:1},STONE_AXE:{id:"stone_axe",name:"Stone Hatchet",category:"tool",toolType:"axe",icon:"🪓",description:"Sharpened stone bound to a wooden handle. Chops trees and timber rapidly.",efficiency:{tree:3.5,rock:1,attack:22},durability:100,maxStack:1},STONE_PICKAXE:{id:"stone_pickaxe",name:"Stone Pickaxe",category:"tool",toolType:"pickaxe",icon:"⛏️",description:"Pointed flint pick. Shatters boulders and extracts flint and mineral ore.",efficiency:{tree:1,rock:3.5,attack:18},durability:100,maxStack:1},WOODEN_SPEAR:{id:"wooden_spear",name:"Wooden Spear",category:"tool",toolType:"spear",icon:"🗡️",description:"Fire-hardened hunting spear with a sharpened tip. Long reach and high damage against wildlife.",efficiency:{tree:.8,rock:.5,attack:35},durability:80,maxStack:1},FISHING_ROD:{id:"fishing_rod",name:"Fishing Rod",category:"tool",toolType:"rod",icon:"🎣",description:"Bamboo fishing pole with a plant fiber line and stone hook. Cast into coastal waters to catch fish.",efficiency:{tree:.2,rock:.1,attack:8},durability:60,maxStack:1},TORCH:{id:"torch",name:"Survival Torch",category:"tool",toolType:"torch",icon:"🔥",description:"Burns bright with resin-soaked fiber. Illuminates dark nights and caves.",durability:150,maxStack:1},BUILDING_HAMMER:{id:"building_hammer",name:"Construction Mallet",category:"tool",toolType:"hammer",icon:"🔨",description:"Use to enter Building Blueprint mode and construct island shelters.",durability:100,maxStack:1},PALM_HAT:{id:"palm_hat",name:"Woven Palm Hat",category:"equipment",equipSlot:"head",icon:"👒",description:"Woven from tropical palm leaves. Blocks scorching sun and reduces thirst depletion by 20%.",armor:5,maxStack:1},FIBER_VEST:{id:"fiber_vest",name:"Fiber Chest Armor",category:"equipment",equipSlot:"chest",icon:"🦺",description:"Reinforced vest woven from tough jungle fiber. Absorbs animal bites and falls.",armor:12,maxStack:1},LEAF_PANTS:{id:"leaf_pants",name:"Palm Leaf Kilt",category:"equipment",equipSlot:"legs",icon:"🩳",description:"Lightweight tropical kilt providing thorn protection and agility.",armor:8,maxStack:1},SHELL_AMULET:{id:"shell_amulet",name:"Seashell Talisman",category:"equipment",equipSlot:"accessory",icon:"📿",description:"Ocean shell necklace that increases stamina recovery speed by 25%.",armor:3,maxStack:1},CAMPFIRE:{id:"campfire",name:"Campfire",category:"structure",icon:"⛺",description:"Provides heat, light, and allows cooking raw meats and fish. Keeps predators away.",structureType:"campfire",maxStack:5},BASIC_SHELTER:{id:"basic_shelter",name:"Basic Shelter",category:"structure",icon:"🏕️",description:"A sturdy lean-to shelter with palm leaf bedding. Sleep safely through the night to dawn.",structureType:"shelter",maxStack:3},STORAGE_BOX:{id:"storage_box",name:"Storage Box",category:"structure",icon:"📦",description:"Crafted wooden storage box to store gathered resources and extra tools safely.",structureType:"chest",maxStack:5},WOOD_FOUNDATION:{id:"wood_foundation",name:"Wood Foundation",category:"structure",icon:"🪵",description:"Elevated wooden deck platform to build base walls and living quarters on.",structureType:"foundation",maxStack:10},WOOD_WALL:{id:"wood_wall",name:"Wood Wall",category:"structure",icon:"🧱",description:"Solid wooden plank wall. Protects your camp from coastal winds and animals.",structureType:"wall",maxStack:10},WOOD_DOOR:{id:"wood_door",name:"Wood Doorway & Door",category:"structure",icon:"🚪",description:"Wall with an interactive wooden door that can be opened and closed.",structureType:"doorway",maxStack:5},WOOD_ROOF:{id:"wood_roof",name:"Thatched Roof",category:"structure",icon:"🏠",description:"Angled palm frond roof to keep rain off your head.",structureType:"roof",maxStack:10},RAIN_COLLECTOR:{id:"rain_collector",name:"Rainwater Basin",category:"structure",icon:"🪣",description:"Collects clean fresh rainwater continuously for safe drinking.",structureType:"collector",maxStack:3}};Kt.SHELTER_LEAN_TO=Kt.BASIC_SHELTER;Kt.STORAGE_CHEST=Kt.STORAGE_BOX;const ws=[{id:"craft_wooden_axe",result:"WOODEN_AXE",count:1,category:"tools",ingredients:[{item:"WOOD",count:3},{item:"FIBER",count:2}]},{id:"craft_stone_pickaxe",result:"STONE_PICKAXE",count:1,category:"tools",ingredients:[{item:"WOOD",count:3},{item:"STONE",count:3},{item:"FIBER",count:2}]},{id:"craft_wooden_spear",result:"WOODEN_SPEAR",count:1,category:"tools",ingredients:[{item:"WOOD",count:4},{item:"STONE",count:2},{item:"FIBER",count:2}]},{id:"craft_campfire",result:"CAMPFIRE",count:1,category:"building",ingredients:[{item:"WOOD",count:4},{item:"STONE",count:4}]},{id:"craft_basic_shelter",result:"BASIC_SHELTER",count:1,category:"building",ingredients:[{item:"WOOD",count:5},{item:"LEAVES",count:6},{item:"FIBER",count:4}]},{id:"craft_storage_box",result:"STORAGE_BOX",count:1,category:"building",ingredients:[{item:"WOOD",count:6},{item:"FIBER",count:3}]},{id:"craft_fishing_rod",result:"FISHING_ROD",count:1,category:"tools",ingredients:[{item:"WOOD",count:3},{item:"FIBER",count:4},{item:"STONE",count:1}]},{id:"craft_stone_axe",result:"STONE_AXE",count:1,category:"tools",ingredients:[{item:"WOOD",count:3},{item:"STONE",count:2},{item:"FIBER",count:2}]},{id:"craft_torch",result:"TORCH",count:1,category:"tools",ingredients:[{item:"WOOD",count:2},{item:"FIBER",count:3}]},{id:"craft_building_hammer",result:"BUILDING_HAMMER",count:1,category:"tools",ingredients:[{item:"WOOD",count:3},{item:"STONE",count:2},{item:"FIBER",count:1}]},{id:"craft_palm_hat",result:"PALM_HAT",count:1,category:"equipment",ingredients:[{item:"LEAVES",count:4},{item:"FIBER",count:2}]},{id:"craft_fiber_vest",result:"FIBER_VEST",count:1,category:"equipment",ingredients:[{item:"FIBER",count:8},{item:"LEAVES",count:2}]},{id:"craft_leaf_pants",result:"LEAF_PANTS",count:1,category:"equipment",ingredients:[{item:"LEAVES",count:6},{item:"FIBER",count:4}]},{id:"craft_shell_amulet",result:"SHELL_AMULET",count:1,category:"equipment",ingredients:[{item:"STONE",count:2},{item:"FIBER",count:3}]},{id:"craft_bandage",result:"BANDAGE",count:1,category:"survival",ingredients:[{item:"FIBER",count:3},{item:"HERB",count:1}]},{id:"craft_water_canteen",result:"WATER_CANTEEN",count:1,category:"survival",ingredients:[{item:"COCONUT",count:1},{item:"FIBER",count:2}]},{id:"craft_wood_foundation",result:"WOOD_FOUNDATION",count:1,category:"building",ingredients:[{item:"WOOD",count:6}]},{id:"craft_wood_wall",result:"WOOD_WALL",count:1,category:"building",ingredients:[{item:"WOOD",count:4},{item:"FIBER",count:1}]},{id:"craft_wood_door",result:"WOOD_DOOR",count:1,category:"building",ingredients:[{item:"WOOD",count:5},{item:"FIBER",count:2}]},{id:"craft_wood_roof",result:"WOOD_ROOF",count:1,category:"building",ingredients:[{item:"WOOD",count:4},{item:"LEAVES",count:4}]},{id:"craft_rain_collector",result:"RAIN_COLLECTOR",count:1,category:"building",ingredients:[{item:"WOOD",count:4},{item:"LEAVES",count:4},{item:"COCONUT",count:1}]}];class mm{constructor(t=24,e=6){this.backpackSize=t,this.hotbarSize=e,this.slots=new Array(e+t).fill(null),this.selectedHotbarIndex=0,this.equipment={head:null,chest:null,legs:null,accessory:null},this.onInventoryChanged=null,this.initStarterItems()}initStarterItems(){this.addItem("wood",4),this.addItem("stone",2),this.addItem("fiber",4),this.addItem("coconut",2),this.addItem("stone_axe",1)}clear(){this.slots=new Array(this.hotbarSize+this.backpackSize).fill(null),this.equipment={head:null,chest:null,legs:null,accessory:null},this.onInventoryChanged&&this.onInventoryChanged()}getEquippedItem(){return this.slots[this.selectedHotbarIndex]}selectHotbarIndex(t){t>=0&&t<this.hotbarSize&&(this.selectedHotbarIndex=t,this.onInventoryChanged&&this.onInventoryChanged())}addItem(t,e=1){const n=Object.keys(Kt).find(o=>Kt[o].id===t);if(!n)return console.warn("Unknown item ID:",t),!1;const i=Kt[n];let s=e;for(let o=0;o<this.slots.length;o++){const r=this.slots[o];if(r&&r.id===t&&r.count<i.maxStack){const c=i.maxStack-r.count,l=Math.min(c,s);if(r.count+=l,s-=l,s<=0)break}}if(s>0){for(let o=0;o<this.slots.length;o++)if(!this.slots[o]){const r=Math.min(i.maxStack,s);if(this.slots[o]={id:t,count:r,durability:i.durability||null},s-=r,s<=0)break}}return this.onInventoryChanged&&this.onInventoryChanged(),s<e}getItemCount(t){let e=0;for(let n of this.slots)n&&n.id===t&&(e+=n.count);return e}removeItem(t,e=1){let n=e;for(let i=0;i<this.slots.length;i++){const s=this.slots[i];if(s&&s.id===t)if(s.count>n){s.count-=n,n=0;break}else n-=s.count,this.slots[i]=null}return this.onInventoryChanged&&this.onInventoryChanged(),n===0}moveOrMerge(t,e){if(t===e||t<0||t>=this.slots.length||e<0||e>=this.slots.length)return;const n=this.slots[t],i=this.slots[e];if(n){if(!i)this.slots[e]=n,this.slots[t]=null;else if(n.id===i.id){const s=Object.values(Kt).find(c=>c.id===n.id),r=(s?s.maxStack:50)-i.count;if(r>0){const c=Math.min(r,n.count);i.count+=c,n.count-=c,n.count<=0&&(this.slots[t]=null)}else this.slots[t]=i,this.slots[e]=n}else this.slots[t]=i,this.slots[e]=n;this.onInventoryChanged&&this.onInventoryChanged()}}equipItem(t,e){const n=this.slots[e];if(!n)return!1;const i=Object.values(Kt).find(o=>o.id===n.id);if(!i||i.category!=="equipment"||i.equipSlot!==t)return!1;const s=this.equipment[t];return this.equipment[t]=n,this.slots[e]=s,this.onInventoryChanged&&this.onInventoryChanged(),!0}unequipItem(t){const e=this.equipment[t];if(!e)return!1;const n=this.slots.findIndex(i=>i===null);return n===-1?!1:(this.slots[n]=e,this.equipment[t]=null,this.onInventoryChanged&&this.onInventoryChanged(),!0)}getTotalArmor(){let t=0;for(let e of Object.keys(this.equipment)){const n=this.equipment[e];if(n){const i=Object.values(Kt).find(s=>s.id===n.id);i&&i.armor&&(t+=i.armor)}}return t}hasAccessory(t){return this.equipment.accessory&&this.equipment.accessory.id===t}canCraft(t){const e=ws.find(n=>n.id===t);if(!e)return!1;for(let n of e.ingredients){const i=Kt[n.item];if(!i||this.getItemCount(i.id)<n.count)return!1}return!0}craft(t){if(!this.canCraft(t))return!1;const e=ws.find(i=>i.id===t);if(!e)return!1;for(let i of e.ingredients){const s=Kt[i.item];this.removeItem(s.id,i.count)}const n=Kt[e.result];return this.addItem(n.id,e.count),this.onInventoryChanged&&this.onInventoryChanged(),!0}swapSlots(t,e){this.moveOrMerge(t,e)}serialize(){return{slots:this.slots,equipment:this.equipment,selectedHotbarIndex:this.selectedHotbarIndex}}deserialize(t){t&&t.slots&&(this.slots=t.slots,this.equipment=t.equipment||{head:null,chest:null,legs:null,accessory:null},this.selectedHotbarIndex=t.selectedHotbarIndex||0)}}class re{static getMaterials(){return{wood:new at({color:6111287,roughness:.9,flatShading:!0}),plank:new at({color:9268835,roughness:.85}),thatch:new at({color:3369246,roughness:.8,side:Ee}),stone:new at({color:6381921,roughness:.95,flatShading:!0}),metal:new at({color:3622735,roughness:.4,metalness:.8})}}static createCampfire(t=!1){const e=new dt,n=this.getMaterials(),i=new we(.22,1),s=8;for(let r=0;r<s;r++){const c=r/s*Math.PI*2,l=new D(i,n.stone);l.position.set(Math.cos(c)*.75,.1,Math.sin(c)*.75),l.scale.set(1,.7,1),l.castShadow=!t,e.add(l)}const o=new Ct(.08,.09,.85,6);o.rotateX(Math.PI/2);for(let r=0;r<3;r++){const c=new D(o,n.wood);c.rotation.y=r*Math.PI/3,c.position.y=.12,c.castShadow=!t,e.add(c)}if(!t){const r=new Yt(.24,.55,6),c=new Te({color:16739584}),l=new D(r,c);l.position.y=.38,e.add(l);const h=new Ps(16742912,2.5,16);h.position.set(0,.6,0),e.add(h),e.userData={type:"campfire",name:"Campfire",flame:l,light:h,isCampfire:!0}}return e}static createShelter(t=!1){const e=new dt,n=this.getMaterials(),i=new Ct(.08,.09,2.8,6),s=new D(i,n.wood);s.position.set(-1.2,1.2,0),s.rotation.z=-.3,e.add(s);const o=new D(i,n.wood);o.position.set(1.2,1.2,0),o.rotation.z=.3,e.add(o);const r=new Ct(.08,.08,2.8,6);r.rotateZ(Math.PI/2);const c=new D(r,n.wood);c.position.set(0,2.2,0),e.add(c);const l=new nn(2.6,2.4);l.rotateX(-Math.PI/3);const h=new D(l,n.thatch);h.position.set(0,1.2,-.6),h.castShadow=!t,e.add(h);const d=new Xt(1.4,.18,2),u=new D(d,n.thatch);return u.position.set(0,.1,.2),e.add(u),e.userData={type:"shelter",name:"Lean-to Shelter & Bed",isBed:!0},e}static createFoundation(t=!1){const e=new dt,n=this.getMaterials(),i=new Ct(.12,.14,1.2,6),s=[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8]];for(let c of s){const l=new D(i,n.wood);l.position.set(c[0],.6,c[1]),e.add(l)}const o=new Xt(4,.22,4),r=new D(o,n.plank);return r.position.y=1.2,r.castShadow=!t,r.receiveShadow=!t,e.add(r),e.userData={type:"foundation",name:"Wood Foundation"},e}static createWall(t=!1){const e=new dt,n=this.getMaterials(),i=new Xt(4,2.8,.25),s=new D(i,n.plank);s.position.y=1.4,s.castShadow=!t,s.receiveShadow=!t,e.add(s);const o=new Ct(.1,.1,4,6);o.rotateZ(Math.PI/2);const r=new D(o,n.wood);return r.position.y=2.7,e.add(r),e.userData={type:"wall",name:"Wood Wall"},e}static createDoor(t=!1){const e=new dt,n=this.getMaterials(),i=new Xt(1.3,2.8,.25),s=new D(i,n.plank);s.position.set(-1.35,1.4,0),e.add(s);const o=new D(i,n.plank);o.position.set(1.35,1.4,0),e.add(o);const r=new Xt(1.4,.6,.25),c=new D(r,n.plank);c.position.set(0,2.5,0),e.add(c);const l=new dt;l.position.set(-.7,0,0);const h=new Xt(1.35,2.2,.15),d=new D(h,n.wood);return d.position.set(.675,1.1,0),l.add(d),e.add(l),e.userData={type:"door",name:"Wood Door",doorPivot:l,isOpen:!1,toggleDoor:()=>{e.userData.isOpen=!e.userData.isOpen,l.rotation.y=e.userData.isOpen?Math.PI/2.2:0}},e}static createRoof(t=!1){const e=new dt,n=this.getMaterials(),i=new Yt(3,1.8,4);i.rotateY(Math.PI/4);const s=new D(i,n.thatch);return s.position.y=.9,s.castShadow=!t,e.add(s),e.userData={type:"roof",name:"Thatched Roof"},e}static createChest(t=!1){const e=new dt,n=this.getMaterials(),i=new Xt(1.2,.5,.75),s=new D(i,n.plank);s.position.y=.25,s.castShadow=!t,e.add(s);const o=n.metal,r=new Xt(1.22,.08,.77),c=new D(r,o);c.position.y=.1,e.add(c);const l=new D(r,o);l.position.y=.45,e.add(l);const h=new dt;h.position.set(0,.5,-.375);const d=new Xt(1.24,.14,.78),u=new D(d,n.wood);u.position.set(0,.07,.39),h.add(u);const f=new Xt(.12,.18,.08),g=new D(f,n.metal);return g.position.set(0,.04,.79),h.add(g),e.add(h),e.userData={type:"chest",name:"Storage Box",isChest:!0,lidPivot:h,isOpen:!1,items:Array.from({length:12},()=>null),toggleOpen:v=>{const m=v!==void 0?v:!e.userData.isOpen;e.userData.isOpen=m,h.rotation.x=m?-Math.PI/2.5:0}},e}static createRainCollector(t=!1){const e=new dt,n=this.getMaterials(),i=new Ct(.6,.5,.7,8),s=new D(i,n.wood);s.position.y=.35,s.castShadow=!t,e.add(s);const o=new Yt(.9,.5,6);o.rotateX(Math.PI);const r=new D(o,n.thatch);return r.position.y=.85,e.add(r),e.userData={type:"collector",name:"Rainwater Collector",waterLevel:50,maxWater:100,isCollector:!0},e}}const di=[{id:"wood_foundation",name:"Wood Floor",fullName:"Wood Foundation & Floor",icon:"🪵",cost:[{id:"wood",count:6}],costLabel:"6 Wood"},{id:"wood_wall",name:"Wood Wall",fullName:"Wood Timber Wall",icon:"🧱",cost:[{id:"wood",count:4},{id:"fiber",count:1}],costLabel:"4 Wood, 1 Fiber"},{id:"wood_door",name:"Wood Door",fullName:"Wood Doorway & Door",icon:"🚪",cost:[{id:"wood",count:5},{id:"fiber",count:2}],costLabel:"5 Wood, 2 Fiber"},{id:"wood_roof",name:"Thatch Roof",fullName:"Thatched Pyramid Roof",icon:"🎪",cost:[{id:"wood",count:4},{id:"leaves",count:4}],costLabel:"4 Wood, 4 Leaves"},{id:"basic_shelter",name:"Lean-to Shelter",fullName:"Small Wooden Shelter & Bed",icon:"🏕️",cost:[{id:"wood",count:5},{id:"leaves",count:6},{id:"fiber",count:4}],costLabel:"5 Wood, 6 Leaves, 4 Fiber"},{id:"storage_box",name:"Storage Box",fullName:"Storage Box (12 Slots)",icon:"📦",cost:[{id:"wood",count:6},{id:"fiber",count:3}],costLabel:"6 Wood, 3 Fiber"},{id:"campfire",name:"Campfire",fullName:"Campfire & Cooking Ring",icon:"🔥",cost:[{id:"wood",count:4},{id:"stone",count:4}],costLabel:"4 Wood, 4 Stone"}];class gm{constructor(t,e,n,i){this.scene=t,this.terrain=e,this.inventory=n,this.audio=i,this.activeBlueprint=null,this.ghostMesh=null,this.ghostRotation=0,this.placedStructures=[],this.structuresGroup=new dt,this.structuresGroup.name="PlacedStructures",this.scene.add(this.structuresGroup),this.isSnapped=!1,this.lastSnapId=null,this.snapInfo="",this.validationReason="",this.raycaster=new fc,this.raycaster.far=14,this.validGhostMat=new Te({color:65416,transparent:!0,opacity:.55,wireframe:!1,depthWrite:!1}),this.invalidGhostMat=new Te({color:16717636,transparent:!0,opacity:.55,wireframe:!1,depthWrite:!1})}canAfford(t){if(!t)return!1;if(this.inventory.getItemCount(t)>0)return!0;const e=di.find(n=>n.id===t);if(!e||!e.cost)return!1;for(let n of e.cost)if(this.inventory.getItemCount(n.id)<n.count)return!1;return!0}getCostString(t){const e=di.find(n=>n.id===t);return e?e.costLabel:""}getMissingCostString(t){const e=di.find(i=>i.id===t);if(!e||!e.cost)return"Missing materials";const n=[];for(let i of e.cost){const s=this.inventory.getItemCount(i.id);s<i.count&&n.push(`${i.count} ${i.id} (Have: ${s})`)}return n.length>0?`Need: ${n.join(", ")}`:""}consumeMaterials(t){if(this.inventory.getItemCount(t)>0)return this.inventory.removeItem(t,1);const e=di.find(n=>n.id===t);if(!e||!e.cost)return!1;for(let n of e.cost)if(this.inventory.getItemCount(n.id)<n.count)return!1;for(let n of e.cost)this.inventory.removeItem(n.id,n.count);return this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),!0}startBuilding(t){this.activeBlueprint===t&&this.ghostMesh||(this.cancelBuilding(),this.activeBlueprint=t,this.ghostRotation=0,this.isSnapped=!1,this.lastSnapId=null,this.createGhostMesh(t))}cancelBuilding(){this.activeBlueprint=null,this.ghostMesh&&(this.scene.remove(this.ghostMesh),this.ghostMesh=null),this.isSnapped=!1,this.lastSnapId=null,this.snapInfo="",this.validationReason=""}rotateBlueprint(){this.ghostMesh&&(this.isSnapped&&(this.activeBlueprint==="wood_wall"||this.activeBlueprint==="wood_door")?this.ghostRotation+=Math.PI:this.ghostRotation+=Math.PI/4,this.ghostRotation=this.ghostRotation%(Math.PI*2),this.audio&&this.audio.playUIClick())}createGhostMesh(t){let e=null;t==="campfire"?e=re.createCampfire(!0):t==="shelter_lean_to"||t==="basic_shelter"?e=re.createShelter(!0):t==="wood_foundation"?e=re.createFoundation(!0):t==="wood_wall"?e=re.createWall(!0):t==="wood_door"?e=re.createDoor(!0):t==="wood_roof"?e=re.createRoof(!0):t==="storage_chest"||t==="storage_box"?e=re.createChest(!0):t==="rain_collector"&&(e=re.createRainCollector(!0)),e&&(e.traverse(n=>{n.isMesh&&(n.material=this.validGhostMat,n.castShadow=!1,n.receiveShadow=!1)}),e.rotation.y=this.ghostRotation,this.ghostMesh=e,this.scene.add(this.ghostMesh))}update(t,e=null){if(!this.ghostMesh||!this.activeBlueprint)return;const n=t.position,i=new C;t.getWorldDirection(i),this.raycaster.set(n,i);const s=this.raycaster.intersectObjects(this.structuresGroup.children,!0);let o=null,r=null;if(s.length>0&&s[0].distance<8.5)o=s[0].point.clone(),r=s[0].object;else{let f=!1;const g=.25;for(let v=1.2;v<=9;v+=g){const m=n.x+i.x*v,p=n.y+i.y*v,y=n.z+i.z*v,_=this.terrain.getElevation(m,y);if(p<=_){o=new C(m,_,y),f=!0;break}}if(!f){const v=n.x+i.x*4.5,m=n.z+i.z*4.5,p=this.terrain.getElevation(v,m);o=new C(v,p,m)}}const c=this.findBestSnapSocket(o,this.activeBlueprint,i);let l=o,h=this.ghostRotation;if(c){this.isSnapped=!0,l=c.position,h=c.rotationY+this.ghostRotation,this.snapInfo=c.type;const f=`${Math.round(l.x*5)}_${Math.round(l.z*5)}_${Math.round(l.y*5)}`;this.lastSnapId!==f&&(this.lastSnapId=f,this.audio&&this.audio.playUIClick())}else if(this.isSnapped=!1,this.lastSnapId=null,this.snapInfo="",r){let f=r;for(;f&&f.parent!==this.structuresGroup;)f=f.parent;f&&f.userData&&f.userData.type==="foundation"&&(l.y=f.position.y+1.2)}this.ghostMesh.position.copy(l),this.ghostMesh.rotation.set(0,h,0);const d=this.validatePlacement(l,e||n),u=d?this.validGhostMat:this.invalidGhostMat;this.ghostMesh.traverse(f=>{f.isMesh&&f.material!==u&&(f.material=u)}),this.ghostMesh.userData.isValid=d}findBestSnapSocket(t,e,n){if(this.placedStructures.length===0)return null;let i=null,s=1/0;const o=2.6;for(let r of this.placedStructures){const c=r.userData.type,l=r.position,h=r.rotation.y;if(e==="wood_foundation"){if(c==="foundation"){const d=[{x:4,z:0},{x:-4,z:0},{x:0,z:4},{x:0,z:-4}];for(let u of d){const f=Math.cos(h),g=Math.sin(h),v=l.x+(u.x*f-u.z*g),m=l.z+(u.x*g+u.z*f),p=l.y,y=new C(v,p,m),_=y.distanceTo(t);_<o&&_<s&&(this.placedStructures.some(R=>R!==r&&R.userData.type==="foundation"&&R.position.distanceTo(y)<.6)||(s=_,i={position:y,rotationY:h,type:"Lateral Foundation"}))}}}else if(e==="wood_wall"||e==="wood_door"){if(c==="foundation"){const d=[{x:0,z:-2,rot:0},{x:0,z:2,rot:Math.PI},{x:2,z:0,rot:-Math.PI/2},{x:-2,z:0,rot:Math.PI/2}];for(let u of d){const f=Math.cos(h),g=Math.sin(h),v=l.x+(u.x*f-u.z*g),m=l.z+(u.x*g+u.z*f),p=l.y+1.2,y=new C(v,p,m),_=y.distanceTo(t);_<o&&_<s&&(this.placedStructures.some(R=>(R.userData.type==="wall"||R.userData.type==="door")&&R.position.distanceTo(y)<.6)||(s=_,i={position:y,rotationY:h+u.rot,type:"Perimeter Wall"}))}}else if(c==="wall"||c==="door"){const d=new C(l.x,l.y+2.8,l.z),u=d.distanceTo(t);u<o&&u<s&&(this.placedStructures.some(g=>(g.userData.type==="wall"||g.userData.type==="door")&&g.position.distanceTo(d)<.6)||(s=u,i={position:d,rotationY:h,type:"2nd Story Wall Stack"}))}}else if(e==="wood_roof"){if(c==="wall"||c==="door"){const d=new C(l.x,l.y+2.8,l.z),u=d.distanceTo(t);u<o&&u<s&&(this.placedStructures.some(g=>g.userData.type==="roof"&&g.position.distanceTo(d)<.8)||(s=u,i={position:d,rotationY:h,type:"Wall Top Roof"}))}else if(c==="foundation"){const u=this.placedStructures.some(v=>(v.userData.type==="wall"||v.userData.type==="door")&&Math.hypot(v.position.x-l.x,v.position.z-l.z)<2.5)?l.y+4:l.y+1.2,f=new C(l.x,u,l.z),g=f.distanceTo(t);g<3.2&&g<s&&(this.placedStructures.some(m=>m.userData.type==="roof"&&m.position.distanceTo(f)<.8)||(s=g,i={position:f,rotationY:h,type:"Foundation Roof Cap"}))}}else if((e==="storage_box"||e==="storage_chest"||e==="campfire")&&c==="foundation"){const d=l.y+1.2;if(Math.hypot(t.x-l.x,t.z-l.z)<1.8){const f=new C(t.x,d,t.z);s=.1,i={position:f,rotationY:h,type:"Floor Deck Surface"}}}}return i}validatePlacement(t,e){if(!this.canAfford(this.activeBlueprint))return this.validationReason=this.getMissingCostString(this.activeBlueprint),!1;if(t.y<-.2)return this.validationReason="Cannot build underwater in ocean",!1;if(e){const s=Math.hypot(t.x-e.x,t.z-e.z),o=Math.abs(t.y-e.y);if(this.activeBlueprint==="wood_wall"||this.activeBlueprint==="wood_door"){if(s<1.3&&o<2.8)return this.validationReason="Obstructed by player body",!1}else if(this.activeBlueprint==="wood_foundation"&&s<1.5&&o<1.4)return this.validationReason="Obstructed by player body",!1}if(this.activeBlueprint==="wood_foundation"){const s=this.terrain.getElevation(t.x,t.z);if(s>t.y+1.2)return this.validationReason="Terrain too steep / buried",!1;if(t.y-s>4.5)return this.validationReason="Too high above ground level",!1}return this.placedStructures.some(s=>s.userData.type===this.getTypeForBlueprint(this.activeBlueprint)&&s.position.distanceTo(t)<.4)?(this.validationReason="Space already occupied",!1):(this.validationReason="Ready to place",!0)}getTypeForBlueprint(t){return t==="campfire"?"campfire":t==="basic_shelter"||t==="shelter_lean_to"?"shelter":t==="wood_foundation"?"foundation":t==="wood_wall"?"wall":t==="wood_door"?"door":t==="wood_roof"?"roof":t==="storage_box"||t==="storage_chest"?"chest":t==="rain_collector"?"collector":null}placeStructure(){if(!this.ghostMesh||!this.ghostMesh.userData.isValid||!this.activeBlueprint)return!1;const t=this.activeBlueprint;if(!this.consumeMaterials(t))return!1;const e=this.ghostMesh.position.clone(),n=this.ghostMesh.rotation.y;let i=null;return t==="campfire"?i=re.createCampfire(!1):t==="shelter_lean_to"||t==="basic_shelter"?i=re.createShelter(!1):t==="wood_foundation"?i=re.createFoundation(!1):t==="wood_wall"?i=re.createWall(!1):t==="wood_door"?i=re.createDoor(!1):t==="wood_roof"?i=re.createRoof(!1):t==="storage_chest"||t==="storage_box"?i=re.createChest(!1):t==="rain_collector"&&(i=re.createRainCollector(!1)),i?(i.position.copy(e),i.rotation.y=n,this.structuresGroup.add(i),this.placedStructures.push(i),this.audio&&this.audio.playPlaceStructure(),this.canAfford(t)||(this.ghostMesh.userData.isValid=!1),!0):!1}checkInteraction(t,e=3.8){const n=t.intersectObjects(this.structuresGroup.children,!0);for(let i of n)if(i.distance<=e){let s=i.object;for(;s&&s.parent!==this.structuresGroup;)s=s.parent;if(s&&s.userData&&s.userData.type)return s}return null}updateCampfires(t){const e=performance.now()*.005;for(let n of this.placedStructures)if(n.userData&&n.userData.isCampfire&&n.userData.flame&&n.userData.light){const i=Math.sin(e*3+n.position.x)*.12+Math.cos(e*5)*.08;n.userData.flame.scale.set(1+i,1+i*1.4,1+i),n.userData.light.intensity=2.5+i*1.5}}serialize(){return this.placedStructures.map(t=>{const e={type:t.userData.type,x:Number(t.position.x.toFixed(3)),y:Number(t.position.y.toFixed(3)),z:Number(t.position.z.toFixed(3)),rotY:Number(t.rotation.y.toFixed(3))};return t.userData.type==="chest"&&t.userData.items&&(e.items=t.userData.items.map(n=>n?{id:n.id,count:n.count}:null)),t.userData.type==="door"&&(e.isOpen=!!t.userData.isOpen),e})}deserialize(t){if(Array.isArray(t)){for(;this.structuresGroup.children.length>0;)this.structuresGroup.remove(this.structuresGroup.children[0]);this.placedStructures=[];for(let e of t){let n=null;e.type==="campfire"?n=re.createCampfire(!1):e.type==="shelter"?n=re.createShelter(!1):e.type==="foundation"?n=re.createFoundation(!1):e.type==="wall"?n=re.createWall(!1):e.type==="door"?n=re.createDoor(!1):e.type==="roof"?n=re.createRoof(!1):e.type==="chest"?n=re.createChest(!1):e.type==="collector"&&(n=re.createRainCollector(!1)),n&&(n.position.set(e.x,e.y,e.z),n.rotation.y=e.rotY||0,e.type==="chest"&&e.items&&(n.userData.items=e.items),e.type==="door"&&e.isOpen&&n.userData.toggleDoor(),this.structuresGroup.add(n),this.placedStructures.push(n))}}}}class vm{constructor(t){this.camera=t,this.root=new dt,this.root.renderOrder=999,this.camera.add(this.root),this.basePos=new C(0,-.25,-.46),this.root.position.copy(this.basePos),this.currentToolType=null,this.pendingToolType=null,this.activeToolMesh=null,this.torchLight=null,this.flameMesh=null,this.isSwinging=!1,this.swingProgress=0,this.swingDuration=.28,this.isUsing=!1,this.useProgress=0,this.useDuration=.72,this.isGathering=!1,this.gatherProgress=0,this.gatherDuration=.32,this.switchProgress=1,this.switchDuration=.2,this.idleTime=0,this.walkBob=0,this.skinMat=new at({color:13802362,roughness:.72,metalness:.04}),this.woodMat=new at({color:7162945,roughness:.85}),this.stoneMat=new at({color:7697781,roughness:.88,flatShading:!0}),this.cordMat=new at({color:9268835,roughness:.95}),this.initDualArms(),this.buildToolMesh("hands"),this.currentToolType="hands"}initDualArms(){this.rightArmGroup=new dt,this.rightArmGroup.position.set(.24,0,0);const t=new Ct(.046,.058,.38,8);t.rotateX(Math.PI/2.3);const e=new D(t,this.skinMat);e.position.set(.05,-.1,.04),this.rightArmGroup.add(e);const n=new Xt(.085,.07,.11),i=new D(n,this.skinMat);i.position.set(.04,.03,-.1),this.rightArmGroup.add(i);const s=new Xt(.08,.05,.065),o=new D(s,this.skinMat);o.position.set(.04,.065,-.145),this.rightArmGroup.add(o);const r=new Xt(.035,.04,.06),c=new D(r,this.skinMat);c.position.set(.005,.045,-.12),c.rotation.y=.35,this.rightArmGroup.add(c),this.root.add(this.rightArmGroup),this.leftRestPos=new C(-.32,-.28,.16),this.leftArmGroup=new dt,this.leftArmGroup.position.copy(this.leftRestPos);const l=new Ct(.048,.062,.54,8);l.rotateX(Math.PI/2.3);const h=new D(l,this.skinMat);h.position.set(-.04,-.1,.12),this.leftArmGroup.add(h);const d=new Xt(.08,.065,.1),u=new D(d,this.skinMat);u.position.set(-.035,.02,-.08),this.leftArmGroup.add(u);const f=new Xt(.075,.038,.065),g=new D(f,this.skinMat);g.position.set(-.035,.035,-.125),this.leftArmGroup.add(g);const v=new Xt(.032,.035,.055),m=new D(v,this.skinMat);m.position.set(-.005,.025,-.1),m.rotation.y=-.35,this.leftArmGroup.add(m),this.root.add(this.leftArmGroup)}setEquippedTool(t){this.currentToolType===t||this.pendingToolType===t||(this.pendingToolType=t,this.switchProgress=0)}buildToolMesh(t){if(this.currentToolType=t,this.activeToolMesh&&(this.rightArmGroup.remove(this.activeToolMesh),this.activeToolMesh=null),this.torchLight&&(this.rightArmGroup.remove(this.torchLight),this.torchLight=null),this.flameMesh=null,t==="hands")return;const e=new dt;if(e.position.set(.04,.065,-.12),t==="stone_axe"||t==="wooden_axe"){const n=new Ct(.02,.024,.62,7),i=new D(n,this.woodMat);i.position.y=.16,e.add(i);const s=t==="wooden_axe"?this.woodMat:this.stoneMat,o=new Xt(.18,.13,.04),r=new D(o,s);r.position.set(.06,.4,0),e.add(r);const c=new Ct(.028,.028,.08,6),l=new D(c,this.cordMat);l.position.set(0,.4,0),e.add(l),e.rotation.set(.25,.12,-.36)}else if(t==="fishing_rod"){const n=new Ct(.012,.022,1.65,6),i=new at({color:9268835,roughness:.7}),s=new D(n,i);s.position.set(0,.35,-.45),s.rotation.x=-Math.PI/3,e.add(s);const o=new Ct(.003,.003,.75,4),r=new Te({color:15658734}),c=new D(o,r);c.position.set(0,.6,-1.05),e.add(c);const l=new Rs(.025,.006,4,8,Math.PI*1.5),h=new at({color:11583173,metalness:.8}),d=new D(l,h);d.position.set(0,.22,-1.05),e.add(d)}else if(t==="stone_pickaxe"){const n=new Ct(.02,.024,.65,7),i=new D(n,this.woodMat);i.position.y=.16,e.add(i);const s=new Yt(.04,.36,5);s.rotateZ(Math.PI/2);const o=new D(s,this.stoneMat);o.position.set(0,.42,0),e.add(o),e.rotation.set(.25,.12,-.36)}else if(t==="wooden_spear"){const n=new Ct(.018,.022,1.4,6),i=new D(n,this.woodMat);i.position.set(0,.25,-.2),i.rotation.x=-Math.PI/2.4,e.add(i);const s=new Yt(.038,.22,4);s.rotateX(Math.PI/2);const o=new D(s,this.stoneMat);o.position.set(0,.72,-.78),e.add(o)}else if(t==="torch"){const n=new Ct(.026,.03,.55,6),i=new D(n,this.woodMat);i.position.y=.16,e.add(i);const s=new Ct(.05,.04,.14,6),o=new D(s,this.cordMat);o.position.set(0,.38,0),e.add(o);const r=new Yt(.07,.2,6),c=new Te({color:16739584});this.flameMesh=new D(r,c),this.flameMesh.position.set(0,.5,0),e.add(this.flameMesh),this.torchLight=new Ps(16748800,2.5,20),this.torchLight.position.set(0,.52,0),e.add(this.torchLight),e.rotation.set(.2,.1,-.22)}else if(t==="building_hammer"){const n=new Ct(.022,.026,.5,6),i=new D(n,this.woodMat);i.position.y=.14,e.add(i);const s=new Ct(.07,.07,.18,6);s.rotateZ(Math.PI/2);const o=new D(s,this.woodMat);o.position.set(0,.34,0),e.add(o),e.rotation.set(.22,.1,-.32)}else if(t==="coconut"){const n=new we(.12,1),i=new at({color:5125673,roughness:.85}),s=new D(n,i);s.position.set(0,.06,-.03),e.add(s)}else if(t==="water_canteen"){const n=new Ct(.07,.08,.22,8),i=new at({color:6111287,roughness:.7}),s=new D(n,i);s.position.set(0,.08,-.03),e.add(s)}else if(t==="mushroom"){const n=new Ct(.02,.03,.12,6),i=new at({color:16119285,roughness:.8}),s=new D(n,i);s.position.set(0,.04,-.02),e.add(s);const o=new Yt(.08,.06,8),r=new at({color:15022389,roughness:.6}),c=new D(o,r);c.position.set(0,.1,-.02),e.add(c)}else if(t==="leaves"||t==="palm_frond"||t==="fiber"){const n=new Yt(.1,.38,4);n.rotateX(Math.PI/2);const i=new at({color:3706428,roughness:.65}),s=new D(n,i);s.position.set(0,.1,-.05),e.add(s)}else if(t==="stone"){const n=new we(.08,1),i=new D(n,this.stoneMat);i.position.set(0,.05,-.03),e.add(i)}else if(t==="wood"){const n=new Ct(.04,.045,.32,6);n.rotateZ(Math.PI/3);const i=new D(n,this.woodMat);i.position.set(0,.06,-.03),e.add(i)}else{const n=new we(.1,1),i=new at({color:t.includes("cooked")?9259301:t.includes("crab")?14172949:t==="berries"?8069026:12986408,roughness:.65}),s=new D(n,i);s.position.set(0,.06,-.03),e.add(s)}this.activeToolMesh=e,this.rightArmGroup.add(e)}swing(){this.isSwinging||this.isUsing||this.isGathering||(this.isSwinging=!0,this.swingProgress=0)}use(){this.isUsing||this.isSwinging||this.isGathering||(this.isUsing=!0,this.useProgress=0)}gather(){this.isGathering||this.isSwinging||this.isUsing||(this.isGathering=!0,this.gatherProgress=0)}update(t,e,n){if(this.idleTime+=t*2.2,this.switchProgress<1){this.switchProgress+=t/this.switchDuration,this.switchProgress>=.5&&this.pendingToolType&&(this.buildToolMesh(this.pendingToolType),this.pendingToolType=null);const i=Math.sin(this.switchProgress*Math.PI)*.22;this.root.position.y=this.basePos.y-i}else this.root.position.y=this.basePos.y;if(this.flameMesh&&this.torchLight){const i=Math.sin(this.idleTime*14)*.15+(Math.random()-.5)*.1;this.flameMesh.scale.set(1+i,1+i*1.5,1+i),this.torchLight.intensity=2.4+i*1.2}if(e){const i=n?12.5:8;this.walkBob+=t*i;const s=Math.sin(this.walkBob*.5)*(n?.035:.02),o=Math.abs(Math.sin(this.walkBob))*(n?.038:.022);this.root.position.x=this.basePos.x+s,this.root.position.y=(this.switchProgress<1?this.root.position.y:this.basePos.y)+o,this.rightArmGroup.rotation.z=Math.sin(this.walkBob*.5)*.08,this.leftArmGroup.rotation.z=-Math.sin(this.walkBob*.5)*.04,this.leftArmGroup.position.y=this.leftRestPos.y-Math.sin(this.walkBob)*.01}else{const i=Math.sin(this.idleTime*.6)*.006,s=Math.sin(this.idleTime*1.2)*.008;this.root.position.x=this.basePos.x+i,this.switchProgress>=1&&(this.root.position.y=this.basePos.y+s),this.rightArmGroup.rotation.z=0,this.leftArmGroup.rotation.z=0,this.leftArmGroup.position.copy(this.leftRestPos)}if(this.isSwinging)if(this.swingProgress+=t/this.swingDuration,this.swingProgress>=1)this.swingProgress=0,this.isSwinging=!1,this.rightArmGroup.rotation.set(0,0,0),this.rightArmGroup.position.set(.24,0,0);else{const i=this.swingProgress,s=Math.sin(i*Math.PI);this.currentToolType==="wooden_spear"?(this.rightArmGroup.position.z=-s*.38,this.rightArmGroup.position.y=s*.06,this.rightArmGroup.rotation.x=s*.15,this.rightArmGroup.rotation.y=-s*.1):(this.rightArmGroup.rotation.x=-s*1.25,this.rightArmGroup.rotation.y=s*.45,this.rightArmGroup.rotation.z=-s*.55,this.rightArmGroup.position.z=-s*.16,this.rightArmGroup.position.x=.24-s*.08)}else if(this.isUsing)if(this.useProgress+=t/this.useDuration,this.useProgress>=1)this.useProgress=0,this.isUsing=!1,this.rightArmGroup.rotation.set(0,0,0),this.rightArmGroup.position.set(.24,0,0);else{const i=this.useProgress,s=Math.sin(i*Math.PI);this.rightArmGroup.position.x=.24-s*.16,this.rightArmGroup.position.y=s*.18,this.rightArmGroup.position.z=-s*.14,this.rightArmGroup.rotation.x=s*.65,this.rightArmGroup.rotation.y=-s*.35,this.rightArmGroup.position.y+=Math.sin(i*Math.PI*8)*.012}else if(this.isGathering)if(this.gatherProgress+=t/this.gatherDuration,this.gatherProgress>=1)this.gatherProgress=0,this.isGathering=!1,this.rightArmGroup.rotation.set(0,0,0),this.rightArmGroup.position.set(.24,0,0),this.leftArmGroup.position.copy(this.leftRestPos);else{const i=this.gatherProgress,s=Math.sin(i*Math.PI);this.rightArmGroup.position.x=.24-s*.12,this.rightArmGroup.position.y=-s*.16,this.rightArmGroup.position.z=-s*.24,this.rightArmGroup.rotation.x=-s*.4,this.rightArmGroup.rotation.z=s*.2,this.leftArmGroup.position.x=this.leftRestPos.x+s*.08,this.leftArmGroup.position.y=this.leftRestPos.y+s*.1}}}class _m{constructor(){this.stats={daysSurvived:1,distanceWalked:0,resourcesHarvested:0,itemsCrafted:0,structuresBuilt:0,animalsHunted:0,mealsCooked:0,damageDealt:0},this.tutorial={step:0,completed:!1,scavengeCount:0,woodCount:0},this.steps=[{id:"scavenge",title:"🧳 Scavenge the Crash Site",desc:"Search plane debris or pick up coconuts & stones on the beach.",goal:3,get progress(){return this.current||0}},{id:"craft_tool",title:"🪓 Craft Your First Tool",desc:"Press [Tab] to open Crafting. Craft a Wooden Axe or Stone Hatchet.",goal:1,get progress(){return this.current||0}},{id:"harvest_wood",title:"🪵 Harvest Island Timber",desc:"Equip your axe ([1-6]) and chop palm trees for wood & fiber.",goal:6,get progress(){return this.current||0}},{id:"craft_spear",title:"🗡️ Forge a Hunting Spear",desc:"Open Crafting ([Tab]) and forge a Wooden Spear with 4.8m reach.",goal:1,get progress(){return this.current||0}},{id:"hunt_and_cook",title:"🥩 Hunt Wildlife & Cook Meat",desc:"Hunt an animal (Deer, Boar, Rabbit, Fish) and roast meat at a Campfire.",goal:1,get progress(){return this.current||0}},{id:"build_shelter",title:"🏕️ Construct Base Shelter",desc:"Press [B] for Base Construction Mode. Build a foundation or shelter.",goal:1,get progress(){return this.current||0}}],this.onTutorialUpdate=null,this.onTutorialCompleted=null,this.load()}recordDistance(t){t>0&&t<50&&(this.stats.distanceWalked+=Math.round(t))}recordHarvest(t=1){this.stats.resourcesHarvested+=t,this.tutorial.step===0&&(this.tutorial.scavengeCount+=t,this.tutorial.scavengeCount>=3?this.advanceTutorial(0):this.onTutorialUpdate&&this.onTutorialUpdate(this.getCurrentTutorialObjective()))}recordWoodGathered(t=1){this.tutorial.step===2&&(this.tutorial.woodCount+=t,this.tutorial.woodCount>=6?this.advanceTutorial(2):this.onTutorialUpdate&&this.onTutorialUpdate(this.getCurrentTutorialObjective()))}recordCraft(t){this.stats.itemsCrafted++,this.tutorial.step===1?(t==="wooden_axe"||t==="stone_axe"||t==="stone_pickaxe")&&this.advanceTutorial(1):this.tutorial.step===3&&t==="wooden_spear"&&this.advanceTutorial(3)}recordHunt(){this.stats.animalsHunted++}recordCook(){this.stats.mealsCooked++,this.tutorial.step===4&&this.advanceTutorial(4)}recordBuild(){this.stats.structuresBuilt++,this.tutorial.step===5&&this.advanceTutorial(5)}advanceTutorial(t){this.tutorial.step===t&&(this.tutorial.step++,ie.playQuestComplete(),this.tutorial.step>=this.steps.length&&(this.tutorial.completed=!0,this.onTutorialCompleted&&this.onTutorialCompleted()),this.save(),this.onTutorialUpdate&&this.onTutorialUpdate(this.getCurrentTutorialObjective()))}getCurrentTutorialObjective(){if(this.tutorial.completed||this.tutorial.step>=this.steps.length)return{title:"👑 Master Survivor",desc:"You have conquered all survival essentials! Explore caves and build freely.",completed:!0,progress:"100%"};const t=this.steps[this.tutorial.step];let e="";return this.tutorial.step===0?e=` (${Math.min(3,this.tutorial.scavengeCount)}/3)`:this.tutorial.step===2&&(e=` (${Math.min(6,this.tutorial.woodCount)}/6)`),{stepIndex:this.tutorial.step+1,totalSteps:this.steps.length,title:t.title,desc:t.desc+e,completed:!1}}getRankTitle(){const t=this.stats.daysSurvived,e=this.stats.animalsHunted,n=this.stats.structuresBuilt;return t>=10&&e>=15&&n>=10?"🏆 Legendary Apex Survivor":t>=5||e>=8?"🏕️ Seasoned Island Pioneer":t>=2||n>=4?"🌴 Resourceful Castaway":"🏝️ Island Stranded Novice"}save(){try{localStorage.setItem("island_survival_stats",JSON.stringify({stats:this.stats,tutorial:this.tutorial}))}catch{}}load(){try{const t=localStorage.getItem("island_survival_stats");if(t){const e=JSON.parse(t);e.stats&&Object.assign(this.stats,e.stats),e.tutorial&&Object.assign(this.tutorial,e.tutorial)}}catch{}}reset(){this.stats={daysSurvived:1,distanceWalked:0,resourcesHarvested:0,itemsCrafted:0,structuresBuilt:0,animalsHunted:0,mealsCooked:0,damageDealt:0},this.tutorial={step:0,completed:!1,scavengeCount:0,woodCount:0},this.save()}}const me=new _m;class xm{constructor(t,e,n,i,s,o){this.camera=t,this.scene=e,this.terrain=n,this.ocean=i,this.inventory=s,this.audio=o,this.camera.rotation.order="YXZ",this.arms=new vm(t),this.position=new C(56,1.8,76),this.velocity=new C,this.height=1.75,this.yaw=-Math.PI/2,this.pitch=0,this.walkSpeed=4.8,this.sprintSpeed=8.2,this.swimSpeed=3.6,this.jumpForce=7.2,this.gravity=-20,this.isGrounded=!0,this.isSwimming=!1,this.isUnderwater=!1,this.isSprinting=!1,this.isResting=!0,this.footstepTimer=0,this.vitals={health:100,hunger:90,thirst:85,stamina:100,oxygen:100},this.starveAlertTimer=0,this.thirstAlertTimer=0,this.isDead=!1,this.daysSurvived=1,this.onVitalsChanged=null,this.onPlayerDeath=null,this.onNotification=null,this.onDamageTaken=null,this.onOpenChest=null,this.onExitBuildMode=null,this.onStructurePlaced=null,this.raycaster=new fc}handleMouseLook(t,e,n=.0022,i=!1){if(this.isDead)return;this.yaw-=t*n;const s=i?-1:1;this.pitch-=e*n*s;const o=Math.PI/2-.04;this.pitch=Math.max(-o,Math.min(o,this.pitch)),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}update(t,e,n,i,s,o,r){if(this.isDead)return;this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.camera.up.set(0,1,0);const c=this.inventory.getEquippedItem(),l=c?c.id:"hands";this.arms.setEquippedTool(l),c&&(c.id==="wood_foundation"||c.id==="wood_wall"||c.id==="wood_door"||c.id==="wood_roof"||c.id==="campfire"||c.id==="basic_shelter"||c.id==="storage_box"||c.id==="shelter_lean_to"||c.id==="storage_chest"||c.id==="rain_collector")&&s?s.activeBlueprint!==c.id&&s.startBuilding(c.id):s&&s.activeBlueprint&&!this.manualBuildMode&&s.cancelBuilding(),this.updateMovement(t,e),this.updateSurvivalVitals(t,r);const d=e.keys.forward||e.keys.backward||e.keys.left||e.keys.right;this.arms.update(t,d&&this.isGrounded,this.isSprinting),this.updateRaycaster(),e.mouse.leftClicked&&this.handlePrimaryAction(n,i,s),e.mouse.rightClicked&&this.handleSecondaryAction(s)}updateMovement(t,e){const n=(e.keys.right?1:0)-(e.keys.left?1:0),i=(e.keys.backward?1:0)-(e.keys.forward?1:0),s=new C(n,0,i),o=s.lengthSq()>.001;this.isResting=!o,o&&(s.normalize(),s.applyAxisAngle(new C(0,1,0),this.yaw)),this.terrain.getElevation(this.position.x,this.position.z);const r=this.ocean.getWaveHeight(this.position.x,this.position.z);this.isSwimming=this.position.y<r+.2,this.isUnderwater=this.position.y+this.height<r+.1;const c=e.keys.sprint&&o&&e.keys.forward&&!this.isSwimming;this.isSprinting=c&&this.vitals.stamina>4,this.isSprinting&&(this.vitals.stamina=Math.max(0,this.vitals.stamina-t*18));let l=this.walkSpeed;if(this.isSwimming?l=this.swimSpeed:this.isSprinting&&(l=this.sprintSpeed),this.isSwimming){if(e.keys.jump)this.velocity.y=3.2;else if(e.keys.sprint)this.velocity.y=-2.8;else{const d=r-.4;this.velocity.y=(d-this.position.y)*4}this.velocity.x=s.x*l,this.velocity.z=s.z*l}else this.velocity.x=s.x*l,this.velocity.z=s.z*l,e.keys.jump&&this.isGrounded&&this.vitals.stamina>=10&&(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.vitals.stamina=Math.max(0,this.vitals.stamina-12),this.audio.playJump()),this.velocity.y+=this.gravity*t;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.velocity.y*t,o&&(this.isGrounded||this.isSwimming)&&me.recordDistance(l*t);const h=this.terrain.getElevation(this.position.x,this.position.z);if(!this.isSwimming&&this.position.y<=h&&(this.position.y=h,this.velocity.y=0,this.isGrounded=!0),this.camera.position.set(this.position.x,this.position.y+this.height,this.position.z),o&&(this.isGrounded||this.isSwimming)){const d=this.isSprinting?.3:this.isSwimming?.65:.46;if(this.footstepTimer+=t,this.footstepTimer>=d){this.footstepTimer=0;let u="sand";this.isSwimming||this.position.y<h+.3&&h<.2?u="water":h>2.5&&(u="grass"),this.audio.playFootstep(u)}}}updateSurvivalVitals(t,e){if(!this.isSprinting){const o=this.isResting?24:12;let r=1;(this.vitals.thirst<20||this.vitals.hunger<20)&&(r=.5),this.vitals.stamina=Math.min(100,this.vitals.stamina+t*o*r)}const n=this.isSprinting?.42:.16;this.vitals.hunger=Math.max(0,this.vitals.hunger-t*n);let i=.28;e&&e.timeOfDay>=11&&e.timeOfDay<=15&&(i*=1.5),this.isSprinting&&(i*=1.8),e&&(e.weather==="rain"||e.weather==="storm")&&!this.isUnderwater&&(i*=.25,this.vitals.thirst=Math.min(100,this.vitals.thirst+t*.15)),this.vitals.thirst=Math.max(0,this.vitals.thirst-t*i),this.isUnderwater?this.vitals.oxygen=Math.max(0,this.vitals.oxygen-t*12.5):this.vitals.oxygen=Math.min(100,this.vitals.oxygen+t*25);let s=0;this.starveAlertTimer-=t,this.thirstAlertTimer-=t,this.vitals.hunger<=0&&(s+=t*2.2,this.starveAlertTimer<=0&&(this.starveAlertTimer=6,this.onNotification&&this.onNotification("⚠️ You are STARVING! Find food immediately."))),this.vitals.thirst<=0&&(s+=t*3.8,this.thirstAlertTimer<=0&&(this.thirstAlertTimer=5,this.onNotification&&this.onNotification("🚨 You are DEHYDRATED! Drink freshwater immediately."))),this.vitals.oxygen<=0&&(s+=t*16),s>0?this.takeDamage(s,this.vitals.thirst<=0?"Severe Dehydration":"Starvation"):this.vitals.hunger>70&&this.vitals.thirst>70&&this.vitals.health<100&&(this.vitals.health=Math.min(100,this.vitals.health+t*1.5)),this.onVitalsChanged&&this.onVitalsChanged(this.vitals)}takeDamage(t,e=""){const n=this.inventory?this.inventory.getTotalArmor():0,i=Math.min(.65,n*.02),s=Math.max(.5,t*(1-i));this.vitals.health=Math.max(0,this.vitals.health-s),this.audio.playHurt(),this.onDamageTaken&&this.onDamageTaken(),this.vitals.health<=0&&!this.isDead&&this.die(e)}die(t){this.isDead=!0,this.onPlayerDeath&&this.onPlayerDeath(t)}respawn(){this.isDead=!1,this.position.set(56,1.8,76),this.velocity.set(0,0,0),this.vitals.health=100,this.vitals.hunger=85,this.vitals.thirst=85,this.vitals.stamina=100,this.vitals.oxygen=100,this.yaw=-Math.PI/2,this.pitch=0,this.camera.rotation.order="YXZ",this.camera.rotation.set(0,this.yaw,0,"YXZ")}updateRaycaster(){this.raycaster.setFromCamera(new gt(0,0),this.camera)}handlePrimaryAction(t,e,n){if(n&&n.activeBlueprint){if(n.placeStructure()){const h=n.getTypeForBlueprint(n.activeBlueprint);me.recordBuild(),this.onNotification&&this.onNotification(`🔨 Constructed ${h?h.toUpperCase():"Structure"}!`),this.onStructurePlaced&&this.onStructurePlaced()}else this.onNotification&&n.validationReason&&this.onNotification(`⚠️ ${n.validationReason}`);return}if(this.vitals.stamina<5){this.onNotification&&this.onNotification("Too exhausted to swing!");return}this.vitals.stamina=Math.max(0,this.vitals.stamina-5),this.vitals.hunger=Math.max(0,this.vitals.hunger-.2),this.arms.swing();const i=this.inventory.getEquippedItem();let s=10,o="hands",r=3.6;if(i){const h=Object.values(Kt).find(d=>d.id===i.id);h&&(o=h.id,h.efficiency&&(s=h.efficiency.attack||10,h.efficiency.tree,h.efficiency.rock),o==="wooden_spear"&&(r=4.8))}o==="wooden_spear"&&this.audio.playSpearThrust?this.audio.playSpearThrust():this.audio.playSwing();const c=e.checkAttack(this.raycaster,r);if(c){e.damageAnimal(c.animal,s,(h,d,u)=>{me.recordHunt();let f=[];for(let g of Object.keys(h)){this.inventory.addItem(g,h[g]);const v=Object.values(Kt).find(p=>p.id===g),m=v?v.name:g.replace("_"," ").toUpperCase();f.push(`+${h[g]} ${m}`)}this.onNotification&&this.onNotification(`🏹 Hunted ${u||d.toUpperCase()}! (${f.join(", ")})`),this.audio.playPickup()});return}const l=t.checkRaycast(this.raycaster,3.8);if(l){const h=l.node,d=h.userData.type;if(h.userData.isDirectPickup){d==="berry_bush"?this.audio.playBerryPluck():d==="ground_coconut"||d==="ground_stone"?this.audio.playPickup():this.audio.playGather(),t.gatherDirectNode(h,this.audio,f=>{me.recordHarvest(1);for(let g of Object.keys(f))this.inventory.addItem(g,f[g]),this.onNotification&&this.onNotification(`+${f[g]} ${g.replace("_"," ").toUpperCase()}`)});return}let u=15;if(o==="fishing_rod"){const f=this.ocean.getWaveHeight(this.position.x,this.position.z);if(this.position.y<f+2.4||Math.hypot(this.position.x,this.position.z)>135){this.audio.playPickup(),Math.random()<.7?(this.inventory.addItem("raw_fish",1),this.onNotification&&this.onNotification("🎣 Reeled in a Raw Reef Fish! Cook it at a campfire.")):this.onNotification&&this.onNotification("🎣 The fish nibbled and got away! Cast again.");return}}d==="palm_tree"||d==="jungle_tree"?(o==="stone_axe"?u=42:o==="wooden_axe"?u=30:(u=8,this.onNotification&&Math.random()<.4&&this.onNotification("Tip: Equip an Axe to chop trees quickly!")),this.audio.playChopTree()):d==="rock_node"?(o==="stone_pickaxe"?u=38:(u=6,this.onNotification&&Math.random()<.4&&this.onNotification("Tip: Equip a Stone Pickaxe to mine boulders!")),this.audio.playMineRock()):(u=25,this.audio.playGather()),t.damageNode(h,u,l.point,this.audio,f=>{me.recordHarvest(1),(d==="palm_tree"||d==="jungle_tree")&&me.recordWoodGathered(2);for(let g of Object.keys(f))this.inventory.addItem(g,f[g]),this.onNotification&&this.onNotification(`+${f[g]} ${g.replace("_"," ").toUpperCase()}`)})}}handleSecondaryAction(t){if(t&&t.activeBlueprint){t.cancelBuilding(),this.onExitBuildMode&&this.onExitBuildMode();return}const e=this.inventory.getEquippedItem();if(!e)return;const n=Object.values(Kt).find(i=>i.id===e.id);if(n&&n.consumable){const i=n.consumable;this.arms.use();const s=i.hunger||0,o=i.thirst||0,r=i.health||0;this.vitals.hunger=Math.min(100,Math.max(0,this.vitals.hunger+s)),this.vitals.thirst=Math.min(100,Math.max(0,this.vitals.thirst+o)),this.vitals.health=Math.min(100,Math.max(0,this.vitals.health+r)),i.useSound==="drink"?this.audio.playDrink():this.audio.playEat(),this.inventory.removeItem(e.id,1);let c=[];s>0&&c.push(`+${s} Hunger`),o>0&&c.push(`+${o} Thirst`),r>0&&c.push(`+${r} Health`),r<0&&c.push(`${r} Health (Food Sickness)`),this.onNotification&&this.onNotification(`Consumed ${n.name} (${c.join(", ")})`)}}interact(t,e,n,i){const s=n.checkRaycast(this.raycaster,3.8);if(s&&s.node.userData.isDirectPickup){const l=s.node,h=l.userData.type;this.arms.gather(),h==="berry_bush"?this.audio.playBerryPluck():h==="ground_coconut"||h==="ground_stone"?this.audio.playPickup():this.audio.playGather(),n.gatherDirectNode(l,this.audio,(d,u)=>{me.recordHarvest(1);for(let f of Object.keys(d))this.inventory.addItem(f,d[f]),this.onNotification&&this.onNotification(`+${d[f]} ${f.replace("_"," ").toUpperCase()}`)});return}const o=e.checkScavenge(this.raycaster,3.5);if(o&&!o.userData.searched){o.userData.searched=!0,me.recordHarvest(1),this.arms.gather();const l=o.userData.loot||{};for(let h of Object.keys(l))this.inventory.addItem(h,l[h]),this.onNotification&&this.onNotification(`Scavenged: +${l[h]} ${h.replace("_"," ").toUpperCase()}`);this.audio.playPickup();return}const r=t.checkInteraction(this.raycaster,3.8);if(r){const l=r.userData;if(l.isChest){this.onOpenChest&&this.onOpenChest(r);return}else if(l.type==="door"){l.toggleDoor(),this.audio.playPlaceStructure();return}else if(l.isBed){i.sleepUntilMorning(),this.vitals.health=Math.min(100,this.vitals.health+25),this.vitals.stamina=100,this.audio.playDrink(),this.onNotification&&this.onNotification("Slept until morning! Vitality restored.");return}else if(l.isCampfire){this.inventory.getItemCount("raw_fish")>0?(this.inventory.removeItem("raw_fish",1),this.inventory.addItem("cooked_fish",1),this.audio.playCraft(),me.recordCook(),this.onNotification&&this.onNotification("🐠 Grilled Fresh Reef Fish on the campfire! (+42 Hunger, +22 Health)")):this.inventory.getItemCount("raw_crab")>0?(this.inventory.removeItem("raw_crab",1),this.inventory.addItem("cooked_crab",1),this.audio.playCraft(),me.recordCook(),this.onNotification&&this.onNotification("🦀 Roasted Crab Meat on the campfire! (+35 Hunger, +15 Health)")):this.inventory.getItemCount("raw_meat")>0?(this.inventory.removeItem("raw_meat",1),this.inventory.addItem("cooked_meat",1),this.audio.playCraft(),me.recordCook(),this.onNotification&&this.onNotification("🥩 Grilled Roasted Steak on the campfire! (+55 Hunger, +30 Health)")):this.onNotification&&this.onNotification("Campfire: Hold Raw Meat, Crab, or Fish to cook.");return}else if(l.isCollector){this.arms.use(),this.vitals.thirst=Math.min(100,this.vitals.thirst+50),this.audio.playDrink(),this.onNotification&&this.onNotification("Drank pure collected rainwater! (+50 Thirst)");return}}const c=this.terrain.getElevation(this.position.x,this.position.z);if(c>.4&&c<2.2&&Math.hypot(this.position.x,this.position.z)<140){this.arms.use(),this.vitals.thirst=Math.min(100,this.vitals.thirst+35),this.audio.playDrink(),this.onNotification&&this.onNotification("Drank fresh clean stream water! (+35 Thirst)");return}}getInteractionPrompt(t,e,n,i){const s=this.inventory?this.inventory.getEquippedItem():null;if(t&&t.activeBlueprint){const u=t.isSnapped?` 🧲 [SNAP: ${t.snapInfo}]`:"",f=t.getTypeForBlueprint(t.activeBlueprint)||"Piece",g=t.getCostString(t.activeBlueprint);return t.ghostMesh&&t.ghostMesh.userData&&t.ghostMesh.userData.isValid?`[Left Click] Place ${f.toUpperCase()} (-${g}) | [R] Rotate 45° | [B / Right Click] Exit${u}`:`❌ Cannot Place: ${t.validationReason||"Invalid Placement"} | [R] Rotate 45° | [B / Right Click] Exit`}const o=n.checkRaycast(this.raycaster,3.8);if(o){const u=o.node.userData;if(u.isDirectPickup&&u.pickupPrompt)return u.pickupPrompt;if(u.type==="palm_tree")return"[Left Click] Chop Palm Tree (Axe: Wood, Leaves, Coconuts)";if(u.type==="jungle_tree")return"[Left Click] Chop Rainforest Timber (Axe: Wood, Leaves, Fiber)";if(u.type==="rock_node")return"[Left Click] Mine Boulder (Pickaxe: Stone, Flint)";if(u.type==="driftwood")return"[E] Gather Driftwood | [Left Click] Chop"}const r=e.checkScavenge(this.raycaster,3.5);if(r&&!r.userData.searched)return"[E] Scavenge Airplane Debris";const c=t.checkInteraction(this.raycaster,3.8);if(c){const u=c.userData;if(u.isChest)return"[E] Open Storage Box";if(u.type==="door")return`[E] ${u.isOpen?"Close Door":"Open Door"}`;if(u.isBed)return"[E] Sleep in Shelter until Morning (06:00)";if(u.isCampfire)return"[E] Cook Food at Campfire";if(u.isCollector)return"[E] Drink Clean Rainwater"}const l=s&&s.id==="wooden_spear"?4.8:3.6,h=i.checkAttack(this.raycaster,l);if(h){const u=h.animal.userData,f=u.name||"Wildlife";return`[Left Click] ${s&&s.id==="wooden_spear"?"Spear":"Hunt"} ${f} (Health: ${u.health}/${u.maxHealth})`}const d=this.terrain.getElevation(this.position.x,this.position.z);if(d>.4&&d<2.2&&Math.hypot(this.position.x,this.position.z)<140)return"[E] Drink Clean Freshwater Stream";if(s){const u=Object.values(Kt).find(f=>f.id===s.id);if(u&&u.consumable)return`[Right Click] Consume ${u.name}`}return null}}class ym{constructor(t=document.body){this.container=t,this.element=null,this.notificationsContainer=null,this.promptEl=null,this.damageVignetteEl=null,this.floatingFeedbacksContainer=null,this.isBuildMode=!1,this.onBuildPieceSelect=null,this.prevVitals={health:100,hunger:100,thirst:100,stamina:100},this.init()}init(){this.element=document.createElement("div"),this.element.id="game-hud",this.element.className="hud-container",this.element.innerHTML=`
      <!-- Fullscreen Damage & Danger Vignette -->
      <div id="damage-vignette" class="damage-vignette"></div>

      <!-- Top Left: Time, Day, Compass, Weather & Survival Tutorial -->
      <div class="hud-top-left">
        <div class="hud-panel time-panel">
          <div class="time-header">
            <span id="hud-celestial-icon">☀️</span>
            <span id="hud-day-text">Day 1</span>
            <span id="hud-clock-text">09:00</span>
            <span id="hud-weather-badge" class="weather-badge">CLEAR</span>
          </div>
          <div class="compass-bar">
            <span id="hud-compass-text">N</span>
          </div>
        </div>

        <!-- Interactive Survival Tutorial Guide -->
        <div id="hud-tutorial-panel" class="hud-panel tutorial-panel">
          <div class="tutorial-header">
            <span class="tutorial-badge">SURVIVAL GUIDE</span>
            <span id="tutorial-step-tag" class="tutorial-step-tag">Step 1/6</span>
          </div>
          <div id="tutorial-title" class="tutorial-title">🧳 Scavenge the Crash Site</div>
          <div id="tutorial-desc" class="tutorial-desc">Search plane debris or pick up coconuts & stones. (0/3)</div>
        </div>
      </div>

      <!-- Top Right: Notification Feed -->
      <div class="hud-top-right">
        <div id="hud-notifications" class="notifications-feed"></div>
      </div>

      <!-- Center: Crosshair & Interaction Prompt -->
      <div class="hud-center">
        <div class="crosshair-dot"></div>
        <div id="hud-prompt" class="interaction-prompt hidden"></div>
      </div>

      <!-- Bottom Left: Survival Vitals (Health, Hunger, Thirst, Stamina) -->
      <div class="hud-bottom-left">
        <!-- Floating Stat Gains (+Hunger, +Thirst, +HP) -->
        <div id="hud-stat-feedbacks" class="stat-feedbacks-stack"></div>

        <div class="hud-panel vitals-panel">
          <div class="vitals-header">
            <span>SURVIVAL VITALS</span>
            <span id="vitals-status-badge" class="vitals-badge">STABLE</span>
          </div>

          <!-- 1. HEALTH -->
          <div class="vital-row" id="row-health">
            <span class="vital-icon">❤️</span>
            <div class="vital-meta">
              <span class="vital-name">HEALTH</span>
              <span id="badge-health" class="vital-warning-badge hidden">CRITICAL</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-health" class="vital-bar-fill vital-health" style="width: 100%"></div>
            </div>
            <span id="val-health" class="vital-val">100</span>
          </div>

          <!-- 2. HUNGER -->
          <div class="vital-row" id="row-hunger">
            <span class="vital-icon">🍖</span>
            <div class="vital-meta">
              <span class="vital-name">HUNGER</span>
              <span id="badge-hunger" class="vital-warning-badge hidden">STARVING</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-hunger" class="vital-bar-fill vital-hunger" style="width: 90%"></div>
            </div>
            <span id="val-hunger" class="vital-val">90</span>
          </div>

          <!-- 3. THIRST -->
          <div class="vital-row" id="row-thirst">
            <span class="vital-icon">💧</span>
            <div class="vital-meta">
              <span class="vital-name">THIRST</span>
              <span id="badge-thirst" class="vital-warning-badge hidden">DEHYDRATED</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-thirst" class="vital-bar-fill vital-thirst" style="width: 85%"></div>
            </div>
            <span id="val-thirst" class="vital-val">85</span>
          </div>

          <!-- 4. STAMINA -->
          <div class="vital-row" id="row-stamina">
            <span class="vital-icon">⚡</span>
            <div class="vital-meta">
              <span class="vital-name">STAMINA</span>
              <span id="badge-stamina" class="vital-warning-badge hidden">EXHAUSTED</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-stamina" class="vital-bar-fill vital-stamina" style="width: 100%"></div>
            </div>
            <span id="val-stamina" class="vital-val">100</span>
          </div>

          <!-- Oxygen (Shown underwater) -->
          <div id="row-oxygen" class="vital-row hidden">
            <span class="vital-icon">🫧</span>
            <div class="vital-meta"><span class="vital-name">OXYGEN</span></div>
            <div class="vital-bar-track">
              <div id="bar-oxygen" class="vital-bar-fill vital-oxygen" style="width: 100%"></div>
            </div>
            <span id="val-oxygen" class="vital-val">100</span>
          </div>
        </div>
      </div>

      <!-- Bottom Center: Hotbar & Base Construction Quick-Bar -->
      <div class="hud-bottom-center">
        <!-- Building Mode Quick-Bar Overlay (Shown in [B] Base Construction Mode) -->
        <div id="hud-build-bar" class="build-mode-container hidden">
          <div class="build-mode-header">
            <span class="build-mode-title">🔨 BASE CONSTRUCTION MODE</span>
            <span class="build-mode-sub">Press <kbd>1-7</kbd> to Select Piece • <kbd>R</kbd> Rotate • <kbd>B</kbd> Exit</span>
          </div>
          <div id="build-piece-slots" class="build-piece-slots"></div>
        </div>

        <div id="hud-equipped-name" class="equipped-name-badge">Hands</div>
        <div id="hud-hotbar" class="hotbar-slots"></div>
        <div class="hotbar-hint">[1-6] Select | [Tab/I] Inventory & Craft | [B] Build | [R] Rotate</div>
      </div>
    `,this.container.appendChild(this.element),this.notificationsContainer=this.element.querySelector("#hud-notifications"),this.promptEl=this.element.querySelector("#hud-prompt"),this.damageVignetteEl=this.element.querySelector("#damage-vignette"),this.floatingFeedbacksContainer=this.element.querySelector("#hud-stat-feedbacks"),this.renderHotbarSlots()}renderHotbarSlots(){const t=this.element.querySelector("#hud-hotbar");t.innerHTML="";for(let e=0;e<6;e++){const n=document.createElement("div");n.className=`hotbar-slot ${e===0?"active":""}`,n.setAttribute("data-index",e),n.dataset&&(n.dataset.index=e),n.innerHTML=`
        <span class="slot-key">${e+1}</span>
        <div class="slot-icon"></div>
        <span class="slot-count"></span>
      `,t.appendChild(n)}}updateVitals(t,e){const n=(g,v)=>{const m=this.element.querySelector(`#bar-${g}`),p=this.element.querySelector(`#val-${g}`),y=Math.max(0,Math.min(100,Math.round(v)));return m&&(m.style.width=`${y}%`),p&&(p.textContent=y),y},i=n("health",t.health),s=n("hunger",t.hunger),o=n("thirst",t.thirst),r=n("stamina",t.stamina);n("oxygen",t.oxygen);const c=this.element.querySelector("#badge-health"),l=this.element.querySelector("#badge-hunger"),h=this.element.querySelector("#badge-thirst"),d=this.element.querySelector("#badge-stamina"),u=this.element.querySelector("#vitals-status-badge");i<=25?(c.classList.remove("hidden"),this.element.querySelector("#bar-health").classList.add("pulse-danger")):(c.classList.add("hidden"),this.element.querySelector("#bar-health").classList.remove("pulse-danger")),s<=20?(l.classList.remove("hidden"),this.element.querySelector("#bar-hunger").classList.add("pulse-warning")):(l.classList.add("hidden"),this.element.querySelector("#bar-hunger").classList.remove("pulse-warning")),o<=20?(h.classList.remove("hidden"),this.element.querySelector("#bar-thirst").classList.add("pulse-warning")):(h.classList.add("hidden"),this.element.querySelector("#bar-thirst").classList.remove("pulse-warning")),r<=10?(d.classList.remove("hidden"),this.element.querySelector("#bar-stamina").classList.add("pulse-exhausted")):(d.classList.add("hidden"),this.element.querySelector("#bar-stamina").classList.remove("pulse-exhausted")),i<=20||s<=0||o<=0?(u.textContent="DYING",u.className="vitals-badge danger"):s<=20||o<=20?(u.textContent="DANGER",u.className="vitals-badge warning"):s>=75&&o>=75?(u.textContent="NOURISHED (+HP)",u.className="vitals-badge nourished"):(u.textContent="STABLE",u.className="vitals-badge stable"),t.hunger>this.prevVitals.hunger+4&&this.showFloatingStat(`+${Math.round(t.hunger-this.prevVitals.hunger)} Hunger`,"#ff9800"),t.thirst>this.prevVitals.thirst+4&&this.showFloatingStat(`+${Math.round(t.thirst-this.prevVitals.thirst)} Thirst`,"#00bcd4"),t.health>this.prevVitals.health+4&&this.showFloatingStat(`+${Math.round(t.health-this.prevVitals.health)} Health`,"#4caf50"),this.prevVitals={...t};const f=this.element.querySelector("#row-oxygen");f&&(e||t.oxygen<98?f.classList.remove("hidden"):f.classList.add("hidden"))}showFloatingStat(t,e){if(!this.floatingFeedbacksContainer)return;const n=document.createElement("div");n.className="floating-stat-gain",n.textContent=t,n.style.color=e,n.style.borderColor=e,this.floatingFeedbacksContainer.appendChild(n),setTimeout(()=>{n.classList.add("fade-up"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},500)},1200)}triggerDamageFlash(){this.damageVignetteEl&&(this.damageVignetteEl.classList.add("flash"),setTimeout(()=>{this.damageVignetteEl&&this.damageVignetteEl.classList.remove("flash")},280))}updateTimeAndCompass(t,e,n,i,s="clear"){const o=this.element.querySelector("#hud-clock-text"),r=this.element.querySelector("#hud-day-text"),c=this.element.querySelector("#hud-celestial-icon"),l=this.element.querySelector("#hud-compass-text"),h=this.element.querySelector("#hud-weather-badge");if(o&&(o.textContent=t),r&&(r.textContent=`Day ${e}`),c&&(c.textContent=n?"🌙":"☀️"),h&&(s==="storm"?(h.textContent="STORM ⛈️",h.className="weather-badge storm"):s==="rain"?(h.textContent="RAIN 🌧️",h.className="weather-badge rain"):s==="cloudy"?(h.textContent="OVERCAST ☁️",h.className="weather-badge cloudy"):(h.textContent="SUNNY ☀️",h.className="weather-badge sunny")),l){let d=i*(180/Math.PI)%360;d<0&&(d+=360);const u=["N","NE","E","SE","S","SW","W","NW"],f=Math.round(d/45)%8;l.textContent=`${u[f]} (${Math.round(d)}°)`}}updateTutorial(t){const e=this.element.querySelector("#tutorial-title"),n=this.element.querySelector("#tutorial-desc"),i=this.element.querySelector("#tutorial-step-tag"),s=this.element.querySelector("#hud-tutorial-panel");!t||!e||!n||(e.textContent=t.title,n.textContent=t.desc,i&&(i.textContent=t.completed?"COMPLETED ✔":`Step ${t.stepIndex}/${t.totalSteps}`),t.completed&&s&&s.classList.add("completed"))}updateHotbar(t){const e=t.slots.slice(0,6),n=t.selectedHotbarIndex,s=this.element.querySelector("#hud-hotbar").children;for(let c=0;c<6;c++){const l=s[c],h=e[c],d=l.querySelector(".slot-icon"),u=l.querySelector(".slot-count");if(c===n?l.classList.add("active"):l.classList.remove("active"),h){const f=Object.values(Kt).find(g=>g.id===h.id);d.textContent=f?f.icon:"📦",u.textContent=h.count>1?h.count:""}else d.textContent="",u.textContent=""}const o=t.getEquippedItem(),r=this.element.querySelector("#hud-equipped-name");if(o){const c=Object.values(Kt).find(l=>l.id===o.id);r.textContent=c?c.name:"Unknown Item"}else r.textContent="Bare Hands"}showInteractionPrompt(t){this.promptEl&&(t?(this.promptEl.textContent=t,this.promptEl.classList.remove("hidden")):this.promptEl.classList.add("hidden"))}addNotification(t){if(!this.notificationsContainer)return;const e=document.createElement("div");e.className="toast-notification",e.textContent=t,this.notificationsContainer.appendChild(e),setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)},2800)}setBuildMode(t,e,n){this.isBuildMode=!!t;const i=this.element.querySelector("#hud-build-bar");i&&i.classList.toggle("hidden",!this.isBuildMode),this.isBuildMode&&this.updateBuildBar(e,n)}updateBuildBar(t,e){const n=this.element.querySelector("#build-piece-slots");!n||!t||(n.innerHTML="",di.forEach((i,s)=>{const o=t.canAfford(i.id),r=t.activeBlueprint===i.id,c=document.createElement("div");c.className=`build-slot ${r?"active":""} ${o?"affordable":"unaffordable"}`,c.title=`${i.fullName} (Cost: ${i.costLabel})`,c.innerHTML=`
        <span class="build-slot-key">${s+1}</span>
        <span class="build-slot-icon">${i.icon}</span>
        <span class="build-slot-name">${i.name}</span>
        <span class="build-slot-cost">${i.costLabel} ${o?"✔":"✖"}</span>
      `,c.addEventListener("click",l=>{l.stopPropagation(),this.onBuildPieceSelect?this.onBuildPieceSelect(i.id):(t.startBuilding(i.id),this.updateBuildBar(t,e))}),n.appendChild(c)}))}setVisible(t){this.element&&(this.element.style.display=t?"block":"none")}}class Mm{constructor(t,e,n,i=document.body){this.inventory=t,this.buildingSystem=e,this.audio=n,this.container=i,this.isOpen=!1,this.selectedSlotIndex=null,this.selectedEquipSlot=null,this.selectedRecipeId="craft_wooden_axe",this.activeCategory="all",this.searchQuery="",this.activeChest=null,this.selectedChestSlotIndex=null,this.dragSource=null,this.onClose=null,this.init()}init(){this.element=document.createElement("div"),this.element.id="inventory-screen",this.element.className="modal-backdrop hidden",this.element.innerHTML=`
      <div class="inventory-window pro-layout">
        <!-- Window Header -->
        <div class="window-header">
          <div class="header-left">
            <span class="header-badge">ISLAND SURVIVOR</span>
            <h2 id="main-window-title">🎒 BACKPACK & CRAFTING WORKBENCH</h2>
          </div>
          <div class="header-right">
            <span class="hotkey-tip">Press <kbd>Tab</kbd> or <kbd>I</kbd> to Close</span>
            <button id="inv-close-btn" class="close-x-btn" title="Close Inventory">✖</button>
          </div>
        </div>

        <!-- Window Body: 3-Column Layout -->
        <div class="window-body">
          <!-- COLUMN 1: Character Equipment & Item Inspector -->
          <div class="inv-column col-character">
            <div class="section-header">
              <span class="sec-icon">👤</span>
              <span class="sec-title">SURVIVOR & GEAR</span>
            </div>

            <!-- Paperdoll / Equipment Slots -->
            <div class="equipment-container">
              <div class="paperdoll-silhouette">
                <div class="silhouette-graphic">🏝️</div>
              </div>

              <div class="equipment-slots-grid">
                <!-- Head Slot -->
                <div class="equip-slot-card" data-equip-slot="head">
                  <div class="equip-slot-label">HEAD</div>
                  <div class="equip-slot" id="equip-slot-head">
                    <span class="slot-placeholder">👒</span>
                  </div>
                </div>

                <!-- Chest Slot -->
                <div class="equip-slot-card" data-equip-slot="chest">
                  <div class="equip-slot-label">TORSO</div>
                  <div class="equip-slot" id="equip-slot-chest">
                    <span class="slot-placeholder">🦺</span>
                  </div>
                </div>

                <!-- Legs Slot -->
                <div class="equip-slot-card" data-equip-slot="legs">
                  <div class="equip-slot-label">LEGS</div>
                  <div class="equip-slot" id="equip-slot-legs">
                    <span class="slot-placeholder">🩳</span>
                  </div>
                </div>

                <!-- Accessory Slot -->
                <div class="equip-slot-card" data-equip-slot="accessory">
                  <div class="equip-slot-label">TALISMAN</div>
                  <div class="equip-slot" id="equip-slot-accessory">
                    <span class="slot-placeholder">📿</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Survivor Gear Stats Summary -->
            <div class="gear-stats-card">
              <div class="stat-line">
                <span>🛡️ Total Armor:</span>
                <span id="gear-stat-armor" class="val-highlight">0%</span>
              </div>
              <div class="stat-line">
                <span>⚡ Stamina Boost:</span>
                <span id="gear-stat-stamina" class="val-highlight">Normal</span>
              </div>
              <div class="stat-line">
                <span>☀️ Sun Protection:</span>
                <span id="gear-stat-sun" class="val-highlight">Normal</span>
              </div>
            </div>

            <!-- Item Inspector Details -->
            <div class="section-header inspector-header-bar">
              <span class="sec-icon">🔍</span>
              <span class="sec-title">ITEM INSPECTOR</span>
            </div>
            <div id="item-inspector" class="item-inspector empty">
              <div class="inspector-placeholder">Select or drag any item to view properties.</div>
            </div>
          </div>

          <!-- COLUMN 2: Storage Grid (Hotbar + 24 Backpack Slots) -->
          <div class="inv-column col-storage">
            <!-- Hotbar Section (1 - 6) -->
            <div class="section-header">
              <span class="sec-icon">⚡</span>
              <span class="sec-title">QUICK ACCESS HOTBAR (1 - 6)</span>
            </div>
            <div id="inv-hotbar-grid" class="slots-grid hotbar-grid"></div>

            <!-- Main Backpack Grid (24 Slots) -->
            <div class="section-header backpack-header">
              <div class="flex-between">
                <span><span class="sec-icon">🎒</span> <span class="sec-title">BACKPACK STORAGE (24 SLOTS)</span></span>
                <span id="inv-capacity-badge" class="capacity-badge">0 / 30 Items</span>
              </div>
            </div>
            <div id="inv-backpack-grid" class="slots-grid backpack-grid"></div>

            <!-- Drop Zone for Discarding -->
            <div id="inv-drop-zone" class="drop-zone-box">
              <span class="drop-icon">🗑️</span>
              <span class="drop-text">Drag item here to drop onto ground</span>
            </div>
          </div>

          <!-- COLUMN 3: Crafting Workbench / Storage Box Transfer -->
          <div class="inv-column col-crafting">
            <!-- 1. Normal Crafting View -->
            <div id="crafting-panel-view" class="column-view-group">
              <div class="section-header">
                <span class="sec-icon">🔨</span>
                <span class="sec-title">CRAFTING BLUEPRINTS</span>
              </div>

              <!-- Search Bar -->
              <div class="craft-search-bar">
                <input type="text" id="craft-search-input" placeholder="🔍 Search recipes..." />
              </div>

              <!-- Crafting Category Tabs -->
              <div class="crafting-tabs">
                <button class="craft-tab active" data-category="all">All</button>
                <button class="craft-tab" data-category="tools">Tools</button>
                <button class="craft-tab" data-category="survival">Survival</button>
                <button class="craft-tab" data-category="building">Building</button>
                <button class="craft-tab" data-category="equipment">Gear</button>
              </div>

              <!-- Recipe Selection List -->
              <div id="recipe-list" class="recipe-list"></div>

              <!-- Recipe Materials Details & Craft Action -->
              <div id="recipe-details" class="recipe-details"></div>
            </div>

            <!-- 2. Placed Storage Box Transfer View -->
            <div id="chest-panel-view" class="column-view-group hidden">
              <div class="section-header flex-between">
                <span><span class="sec-icon">📦</span> <span class="sec-title">STORAGE BOX (12 SLOTS)</span></span>
                <div class="chest-quick-btns">
                  <button id="btn-chest-take-all" class="chest-btn">Take All</button>
                  <button id="btn-chest-store-all" class="chest-btn">Deposit All</button>
                </div>
              </div>
              <div id="chest-slots-grid" class="chest-slots-grid"></div>
              <div class="chest-hint-note">Click or drag items to transfer between your backpack and the storage box.</div>
            </div>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents(),this.render()}bindEvents(){this.element.querySelector("#inv-close-btn").addEventListener("click",()=>{this.close()}),this.element.addEventListener("click",o=>{o.target===this.element&&this.close()}),this.element.querySelector("#craft-search-input").addEventListener("input",o=>{this.searchQuery=o.target.value.toLowerCase().trim(),this.renderRecipeList()});const e=this.element.querySelectorAll(".craft-tab");e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(r=>r.classList.remove("active")),o.classList.add("active"),this.activeCategory=o.dataset.category,this.renderRecipeList()})});const n=this.element.querySelector("#inv-drop-zone");n.addEventListener("dragover",o=>{o.preventDefault(),n.classList.add("drag-active")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-active")}),n.addEventListener("drop",o=>{o.preventDefault(),n.classList.remove("drag-active"),this.dragSource&&(this.dragSource.type==="inventory"?this.inventory.slots[this.dragSource.index]&&(this.inventory.slots[this.dragSource.index]=null,this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playUIClick(),this.selectedSlotIndex=null,this.render()):this.dragSource.type==="equipment"?(this.inventory.equipment[this.dragSource.slotKey]=null,this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playUIClick(),this.selectedEquipSlot=null,this.render()):this.dragSource.type==="chest"&&this.activeChest&&(this.activeChest.userData.items[this.dragSource.index]=null,this.audio.playUIClick(),this.selectedChestSlotIndex=null,this.render()),this.dragSource=null)});const i=this.element.querySelector("#btn-chest-take-all");i&&i.addEventListener("click",()=>{if(!this.activeChest||!this.activeChest.userData.items)return;const o=this.activeChest.userData.items;for(let r=0;r<o.length;r++){const c=o[r];c&&this.inventory.addItem(c.id,c.count)&&(o[r]=null)}this.audio.playPickup(),this.render()});const s=this.element.querySelector("#btn-chest-store-all");s&&s.addEventListener("click",()=>{if(!this.activeChest||!this.activeChest.userData.items)return;const o=this.activeChest.userData.items;for(let r=0;r<this.inventory.slots.length;r++){const c=this.inventory.slots[r];if(c){let l=o.findIndex(h=>h&&h.id===c.id);l!==-1?(o[l].count+=c.count,this.inventory.slots[r]=null):(l=o.findIndex(h=>h===null),l!==-1&&(o[l]={id:c.id,count:c.count},this.inventory.slots[r]=null))}}this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playPickup(),this.render()})}open(t=null){this.isOpen=!0,this.activeChest=t,this.selectedChestSlotIndex=null,this.selectedSlotIndex=null,this.selectedEquipSlot=null,this.activeChest&&this.activeChest.userData&&this.activeChest.userData.toggleOpen&&this.activeChest.userData.toggleOpen(!0),this.element.classList.remove("hidden"),this.audio.playUIClick(),this.render()}close(){this.isOpen=!1,this.activeChest&&this.activeChest.userData&&this.activeChest.userData.toggleOpen&&this.activeChest.userData.toggleOpen(!1),this.activeChest=null,this.selectedChestSlotIndex=null,this.element.classList.add("hidden"),this.audio.playUIClick(),this.onClose&&this.onClose()}toggle(){this.isOpen?this.close():this.open()}render(){this.renderEquipment(),this.renderSlots(),this.renderInspector();const t=this.element.querySelector("#main-window-title"),e=this.element.querySelector("#crafting-panel-view"),n=this.element.querySelector("#chest-panel-view");this.activeChest?(t&&(t.textContent="📦 STORAGE BOX & BACKPACK TRANSFER"),e&&e.classList.add("hidden"),n&&(n.classList.remove("hidden"),this.renderChestSlots())):(t&&(t.textContent="🎒 BACKPACK & CRAFTING WORKBENCH"),e&&e.classList.remove("hidden"),n&&n.classList.add("hidden"),this.renderRecipeList(),this.renderRecipeDetails())}renderEquipment(){const t=["head","chest","legs","accessory"],e={head:"👒",chest:"🦺",legs:"🩳",accessory:"📿"};for(let o of t){const r=this.element.querySelector(`#equip-slot-${o}`);if(!r)continue;const c=this.inventory.equipment[o];if(r.innerHTML="",r.className=`equip-slot ${this.selectedEquipSlot===o?"selected":""}`,c){const l=Object.values(Kt).find(h=>h.id===c.id);r.innerHTML=`
          <span class="slot-icon">${l?l.icon:"🛡️"}</span>
          <span class="slot-name-badge">${l?l.name:c.id}</span>
        `,r.setAttribute("draggable","true"),r.addEventListener("dragstart",h=>{this.dragSource={type:"equipment",slotKey:o},h.dataTransfer.setData("text/plain",JSON.stringify(this.dragSource)),r.classList.add("is-dragging")}),r.addEventListener("dragend",()=>{r.classList.remove("is-dragging"),this.dragSource=null})}else r.innerHTML=`<span class="slot-placeholder">${e[o]}</span>`,r.removeAttribute("draggable");r.addEventListener("click",()=>{this.audio.playUIClick(),this.selectedEquipSlot===o?this.selectedEquipSlot=null:(this.selectedEquipSlot=o,this.selectedSlotIndex=null,this.selectedChestSlotIndex=null),this.render()}),r.addEventListener("dragover",l=>{l.preventDefault(),l.dataTransfer.dropEffect="move",r.classList.add("drag-over")}),r.addEventListener("dragleave",()=>{r.classList.remove("drag-over")}),r.addEventListener("drop",l=>{if(l.preventDefault(),r.classList.remove("drag-over"),this.dragSource&&this.dragSource.type==="inventory"){const h=this.dragSource.index;this.inventory.equipItem(o,h)&&(this.audio.playUIClick(),this.render()),this.dragSource=null}})}const n=this.element.querySelector("#gear-stat-armor");if(n){const o=this.inventory.getTotalArmor();n.textContent=`+${o}% Defense`}const i=this.element.querySelector("#gear-stat-stamina");i&&(i.textContent=this.inventory.hasAccessory("shell_amulet")?"+25% Regen":"Normal");const s=this.element.querySelector("#gear-stat-sun");s&&(s.textContent=this.inventory.equipment.head&&this.inventory.equipment.head.id==="palm_hat"?"-20% Thirst Drain":"Normal")}renderSlots(){const t=this.element.querySelector("#inv-hotbar-grid"),e=this.element.querySelector("#inv-backpack-grid"),n=this.element.querySelector("#inv-capacity-badge");t.innerHTML="",e.innerHTML="";let i=0;for(let s=0;s<6;s++){this.inventory.slots[s]&&i++;const o=this.createSlotElement(s,!0);t.appendChild(o)}for(let s=6;s<30;s++){this.inventory.slots[s]&&i++;const o=this.createSlotElement(s,!1);e.appendChild(o)}n&&(n.textContent=`${i} / 30 Slots`)}createSlotElement(t,e){const n=this.inventory.slots[t],i=document.createElement("div");if(i.className=`inv-slot ${t===this.selectedSlotIndex?"selected":""} ${e?"hotbar-slot-style":""}`,i.dataset.index=t,e){const s=document.createElement("span");s.className="slot-key-number",s.textContent=t+1,i.appendChild(s)}if(n){const s=Object.values(Kt).find(r=>r.id===n.id);i.setAttribute("draggable","true");const o=document.createElement("div");o.className="slot-item-content",o.innerHTML=`
        <span class="slot-icon">${s?s.icon:"📦"}</span>
        <span class="slot-count-badge">${n.count>1?n.count:""}</span>
      `,i.appendChild(o),i.addEventListener("dragstart",r=>{this.dragSource={type:"inventory",index:t},r.dataTransfer.setData("text/plain",JSON.stringify(this.dragSource)),i.classList.add("is-dragging")}),i.addEventListener("dragend",()=>{i.classList.remove("is-dragging"),this.dragSource=null})}else i.removeAttribute("draggable");return i.addEventListener("dragover",s=>{s.preventDefault(),s.dataTransfer.dropEffect="move",i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",s=>{if(s.preventDefault(),i.classList.remove("drag-over"),this.dragSource){if(this.dragSource.type==="inventory"){const o=this.dragSource.index;o!==t&&(this.inventory.moveOrMerge(o,t),this.audio.playUIClick(),this.render())}else if(this.dragSource.type==="equipment"){const o=this.dragSource.slotKey,r=this.inventory.equipment[o];if(r){const c=this.inventory.slots[t];if(!c)this.inventory.slots[t]=r,this.inventory.equipment[o]=null;else{const l=Object.values(Kt).find(h=>h.id===c.id);l&&l.category==="equipment"&&l.equipSlot===o&&(this.inventory.equipment[o]=c,this.inventory.slots[t]=r)}this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playUIClick(),this.render()}}else if(this.dragSource.type==="chest"&&this.activeChest){const o=this.dragSource.index,r=this.activeChest.userData.items[o];if(r){const c=this.inventory.slots[t];c?c.id===r.id?(c.count+=r.count,this.activeChest.userData.items[o]=null):(this.inventory.slots[t]=r,this.activeChest.userData.items[o]=c):(this.inventory.slots[t]=r,this.activeChest.userData.items[o]=null),this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playUIClick(),this.render()}}this.dragSource=null}}),i.addEventListener("click",()=>{if(this.audio.playUIClick(),this.selectedChestSlotIndex!==null&&this.activeChest){const s=this.activeChest.userData.items[this.selectedChestSlotIndex];if(s){const o=this.inventory.slots[t];o?o.id===s.id?(o.count+=s.count,this.activeChest.userData.items[this.selectedChestSlotIndex]=null):(this.inventory.slots[t]=s,this.activeChest.userData.items[this.selectedChestSlotIndex]=o):(this.inventory.slots[t]=s,this.activeChest.userData.items[this.selectedChestSlotIndex]=null),this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.selectedChestSlotIndex=null,this.render();return}}if(this.selectedEquipSlot!==null){const s=this.inventory.equipment[this.selectedEquipSlot];if(s&&!n){this.inventory.slots[t]=s,this.inventory.equipment[this.selectedEquipSlot]=null,this.selectedEquipSlot=null,this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.render();return}}this.selectedSlotIndex===null?n&&(this.selectedSlotIndex=t):this.selectedSlotIndex===t?this.selectedSlotIndex=null:(this.inventory.moveOrMerge(this.selectedSlotIndex,t),this.selectedSlotIndex=null),this.selectedChestSlotIndex=null,this.render()}),i}renderChestSlots(){const t=this.element.querySelector("#chest-slots-grid");if(!t||!this.activeChest)return;t.innerHTML="";const e=this.activeChest.userData.items||[];for(let n=0;n<12;n++){const i=e[n],s=document.createElement("div");if(s.className=`inv-slot ${n===this.selectedChestSlotIndex?"selected":""}`,s.dataset.chestIndex=n,i){const o=Object.values(Kt).find(r=>r.id===i.id);s.setAttribute("draggable","true"),s.innerHTML=`
          <div class="slot-item-content">
            <span class="slot-icon">${o?o.icon:"📦"}</span>
            <span class="slot-count-badge">${i.count>1?i.count:""}</span>
          </div>
        `,s.addEventListener("dragstart",r=>{this.dragSource={type:"chest",index:n},r.dataTransfer.setData("text/plain",JSON.stringify(this.dragSource)),s.classList.add("is-dragging")}),s.addEventListener("dragend",()=>{s.classList.remove("is-dragging"),this.dragSource=null})}s.addEventListener("dragover",o=>{o.preventDefault(),o.dataTransfer.dropEffect="move",s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",o=>{if(o.preventDefault(),s.classList.remove("drag-over"),this.dragSource){if(this.dragSource.type==="inventory"){const r=this.dragSource.index,c=this.inventory.slots[r];if(c){const l=e[n];l?l.id===c.id?(l.count+=c.count,this.inventory.slots[r]=null):(e[n]=c,this.inventory.slots[r]=l):(e[n]=c,this.inventory.slots[r]=null),this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.audio.playUIClick(),this.render()}}else if(this.dragSource.type==="chest"){const r=this.dragSource.index;if(r!==n){const c=e[n];e[n]=e[r],e[r]=c,this.audio.playUIClick(),this.render()}}this.dragSource=null}}),s.addEventListener("click",()=>{if(this.audio.playUIClick(),this.selectedSlotIndex!==null){const o=this.inventory.slots[this.selectedSlotIndex];if(o){const r=e[n];r?r.id===o.id?(r.count+=o.count,this.inventory.slots[this.selectedSlotIndex]=null):(e[n]=o,this.inventory.slots[this.selectedSlotIndex]=r):(e[n]=o,this.inventory.slots[this.selectedSlotIndex]=null),this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.selectedSlotIndex=null,this.render();return}}this.selectedChestSlotIndex===n?this.selectedChestSlotIndex=null:(this.selectedChestSlotIndex=n,this.selectedSlotIndex=null,this.selectedEquipSlot=null),this.render()}),t.appendChild(s)}}renderInspector(){const t=this.element.querySelector("#item-inspector");let e=null,n=!1,i=!1;if(this.selectedChestSlotIndex!==null&&this.activeChest?(e=this.activeChest.userData.items[this.selectedChestSlotIndex],i=!0):this.selectedSlotIndex!==null?e=this.inventory.slots[this.selectedSlotIndex]:this.selectedEquipSlot!==null&&(e=this.inventory.equipment[this.selectedEquipSlot],n=!0),!e){t.className="item-inspector empty",t.innerHTML='<div class="inspector-placeholder">Click or drag any item in your backpack, hotbar, or equipment slots to inspect.</div>';return}const s=Object.values(Kt).find(v=>v.id===e.id);if(!s)return;t.className="item-inspector active";let o="";s.consumable&&(s.consumable.hunger&&(o+=`<span class="stat-badge stat-hunger">🍖 +${s.consumable.hunger} Hunger</span>`),s.consumable.thirst&&(o+=`<span class="stat-badge stat-thirst">💧 +${s.consumable.thirst} Thirst</span>`),s.consumable.health&&(o+=`<span class="stat-badge stat-health">❤️ +${s.consumable.health} Health</span>`)),s.efficiency&&(o+=`<span class="stat-badge stat-attack">⚔️ Attack: ${s.efficiency.attack}</span>`,s.efficiency.tree>1&&(o+=`<span class="stat-badge stat-chop">🪓 Chop: x${s.efficiency.tree}</span>`),s.efficiency.rock>1&&(o+=`<span class="stat-badge stat-mine">⛏️ Mine: x${s.efficiency.rock}</span>`)),s.armor&&(o+=`<span class="stat-badge stat-armor">🛡️ Armor: +${s.armor}%</span>`);let r="";i?r='<button id="btn-inspect-take" class="btn-action primary">📤 Take to Backpack</button>':(this.activeChest&&(r+='<button id="btn-inspect-store" class="btn-action primary">📥 Store in Box</button>'),s.category==="consumable"?r+='<button id="btn-inspect-consume" class="btn-action secondary">🍽️ Consume / Eat</button>':s.category==="equipment"?n?r+='<button id="btn-inspect-unequip" class="btn-action primary">🛡️ Unequip Item</button>':r+=`<button id="btn-inspect-equip" class="btn-action primary">🛡️ Equip to ${s.equipSlot.toUpperCase()}</button>`:s.category==="structure"&&(r+='<button id="btn-inspect-build" class="btn-action secondary">📐 Enter Blueprint Mode</button>')),t.innerHTML=`
      <div class="inspector-header">
        <span class="inspector-icon">${s.icon}</span>
        <div class="inspector-meta">
          <div class="inspector-title">${s.name}</div>
          <div class="inspector-cat">${s.category.toUpperCase()} • ${e.count>1?`Stack of ${e.count}`:"Single Item"}</div>
        </div>
      </div>
      <div class="inspector-desc">${s.description}</div>
      <div class="inspector-stats">${o}</div>
      <div class="inspector-actions">
        ${r}
        <button id="btn-inspect-drop" class="btn-action danger" title="Drop item onto ground">🗑️ Drop</button>
      </div>
    `;const c=t.querySelector("#btn-inspect-take");c&&c.addEventListener("click",()=>{this.inventory.addItem(e.id,e.count)&&(this.activeChest.userData.items[this.selectedChestSlotIndex]=null,this.selectedChestSlotIndex=null,this.audio.playPickup(),this.render())});const l=t.querySelector("#btn-inspect-store");l&&this.activeChest&&l.addEventListener("click",()=>{const v=this.activeChest.userData.items;let m=v.findIndex(p=>p&&p.id===e.id);m!==-1?(v[m].count+=e.count,this.inventory.slots[this.selectedSlotIndex]=null):(m=v.findIndex(p=>p===null),m!==-1&&(v[m]={id:e.id,count:e.count},this.inventory.slots[this.selectedSlotIndex]=null)),this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.selectedSlotIndex=null,this.audio.playPickup(),this.render()});const h=t.querySelector("#btn-inspect-consume");h&&h.addEventListener("click",()=>{this.inventory.removeItem(e.id,1),this.audio.playEat(),this.selectedSlotIndex=null,this.render()});const d=t.querySelector("#btn-inspect-equip");d&&d.addEventListener("click",()=>{this.selectedSlotIndex!==null&&(this.inventory.equipItem(s.equipSlot,this.selectedSlotIndex),this.selectedSlotIndex=null,this.audio.playUIClick(),this.render())});const u=t.querySelector("#btn-inspect-unequip");u&&u.addEventListener("click",()=>{this.selectedEquipSlot&&(this.inventory.unequipItem(this.selectedEquipSlot),this.selectedEquipSlot=null,this.audio.playUIClick(),this.render())});const f=t.querySelector("#btn-inspect-build");f&&f.addEventListener("click",()=>{this.buildingSystem.startBuilding(e.id),this.close()});const g=t.querySelector("#btn-inspect-drop");g&&g.addEventListener("click",()=>{this.selectedChestSlotIndex!==null&&this.activeChest?(this.activeChest.userData.items[this.selectedChestSlotIndex]=null,this.selectedChestSlotIndex=null):this.selectedSlotIndex!==null?(this.inventory.slots[this.selectedSlotIndex]=null,this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.selectedSlotIndex=null):this.selectedEquipSlot!==null&&(this.inventory.equipment[this.selectedEquipSlot]=null,this.inventory.onInventoryChanged&&this.inventory.onInventoryChanged(),this.selectedEquipSlot=null),this.audio.playUIClick(),this.render()})}renderRecipeList(){const t=this.element.querySelector("#recipe-list");if(!t)return;t.innerHTML="";const e=ws.filter(n=>{const i=Kt[n.result];return!(!i||this.activeCategory!=="all"&&n.category!==this.activeCategory||this.searchQuery&&!i.name.toLowerCase().includes(this.searchQuery))});if(e.length===0){t.innerHTML='<div class="recipe-empty-msg">No blueprints match your filter.</div>';return}for(let n of e){const i=Kt[n.result],s=this.inventory.canCraft(n.id),o=n.id===this.selectedRecipeId,r=n.ingredients.map(l=>{const h=Kt[l.item];return`${h?h.icon:""} x${l.count}`}).join("  "),c=document.createElement("div");c.className=`recipe-card ${o?"selected":""} ${s?"craftable":"locked"}`,c.innerHTML=`
        <span class="recipe-icon">${i.icon}</span>
        <div class="recipe-info">
          <div class="recipe-name">${i.name}</div>
          <div class="recipe-ing-preview">${r}</div>
        </div>
        <div class="recipe-status-pill ${s?"ready":"missing"}">
          ${s?"✨ Ready":"Locked"}
        </div>
      `,c.addEventListener("click",()=>{this.selectedRecipeId=n.id,this.audio.playUIClick(),this.renderRecipeList(),this.renderRecipeDetails()}),t.appendChild(c)}}renderRecipeDetails(){const t=this.element.querySelector("#recipe-details");if(!t)return;const e=ws.find(l=>l.id===this.selectedRecipeId);if(!e){t.innerHTML='<div class="inspector-placeholder">Select a recipe from the list above.</div>';return}const n=Kt[e.result];if(!n)return;const i=this.inventory.canCraft(e.id);let s="";for(let l of e.ingredients){const h=Kt[l.item];if(!h)continue;const d=this.inventory.getItemCount(h.id),u=d>=l.count;s+=`
        <div class="ing-row ${u?"met":"missing"}">
          <span class="ing-icon">${h.icon}</span>
          <span class="ing-name">${h.name}</span>
          <span class="ing-count">${d} / ${l.count} ${u?"✔":"✖"}</span>
        </div>
      `}let o="";n.category==="structure"&&this.inventory.getItemCount(n.id)>0&&(o='<button id="btn-blueprint-mode" class="btn-action secondary">📐 Enter Blueprint Mode</button>'),t.innerHTML=`
      <div class="recipe-detail-header">
        <span class="recipe-detail-icon">${n.icon}</span>
        <div class="recipe-detail-text">
          <h3>${n.name}</h3>
          <p>${n.description}</p>
        </div>
      </div>

      <div class="section-title">REQUIRED MATERIALS</div>
      <div class="ingredients-list">${s}</div>

      <div class="craft-actions">
        <button id="btn-craft" class="btn-craft ${i?"active":"disabled"}" ${i?"":"disabled"}>
          🔨 Craft ${n.name} ${i?"":"(Missing Materials)"}
        </button>
        ${o}
      </div>
    `;const r=t.querySelector("#btn-craft");r&&i&&r.addEventListener("click",()=>{this.inventory.craft(e.id)&&(this.audio.playCraft(),me.recordCraft(n.id),r.classList.add("craft-pulse"),setTimeout(()=>r.classList.remove("craft-pulse"),300),this.render())});const c=t.querySelector("#btn-blueprint-mode");c&&c.addEventListener("click",()=>{this.buildingSystem.startBuilding(n.id),this.close()})}}class Sm{constructor(t,e,n,i,s=document.body){this.audio=t,this.onNewGame=e,this.onContinue=n,this.onOpenSettings=i,this.container=s,this.element=null,this.isVisible=!0,this.init()}init(){this.element=document.createElement("div"),this.element.id="main-menu-screen",this.element.className="main-menu-container";const t=wn.hasSave();this.element.innerHTML=`
      <div class="menu-overlay">
        <!-- Brand Title & Lore -->
        <div class="menu-header">
          <div class="game-badge">🌴 3D PACIFIC SURVIVAL SIMULATION</div>
          <h1 class="game-title">ISLAND SURVIVAL</h1>
          <p class="game-subtitle">Stranded on an uncharted tropical atoll after a plane crash. Hunt, gather, craft, build shelters, and endure.</p>
        </div>

        <!-- Main Action Buttons -->
        <div class="menu-buttons">
          <button id="btn-new-game" class="btn-menu primary">
            <span class="btn-icon">⚡</span>
            <div class="btn-content">
              <span class="btn-title">NEW GAME</span>
              <span class="btn-desc">Awaken at the beach plane wreckage</span>
            </div>
          </button>

          <button id="btn-continue" class="btn-menu secondary ${t?"":"disabled"}" ${t?"":'title="No save game found"'}>
            <span class="btn-icon">💾</span>
            <div class="btn-content">
              <span class="btn-title">CONTINUE</span>
              <span class="btn-desc">${t?"Resume your island journey":"No saved game found"}</span>
            </div>
          </button>

          <button id="btn-settings" class="btn-menu">
            <span class="btn-icon">⚙️</span>
            <div class="btn-content">
              <span class="btn-title">SETTINGS</span>
              <span class="btn-desc">Graphics, Audio & Controls</span>
            </div>
          </button>

          <button id="btn-guide" class="btn-menu">
            <span class="btn-icon">📖</span>
            <div class="btn-content">
              <span class="btn-title">CONTROLS & GUIDE</span>
              <span class="btn-desc">Keybindings & survival tips</span>
            </div>
          </button>

          <button id="btn-exit" class="btn-menu danger">
            <span class="btn-icon">🚪</span>
            <div class="btn-content">
              <span class="btn-title">EXIT GAME</span>
              <span class="btn-desc">Quit survival simulation</span>
            </div>
          </button>
        </div>

        <!-- Version & Credits -->
        <div class="menu-footer">
          <span>Three.js • First-Person 3D WebGL • Island Survival v1.0</span>
        </div>
      </div>

      <!-- Controls Guide Modal -->
      <div id="guide-modal" class="modal-backdrop hidden">
        <div class="guide-window">
          <div class="window-header">
            <h2>📖 SURVIVAL CONTROLS & SURVIVOR'S GUIDE</h2>
            <button id="guide-close-btn" class="close-x-btn">✖</button>
          </div>
          <div class="guide-body">
            <div class="guide-grid">
              <div class="guide-card">
                <h4>🎮 KEYBOARD & MOUSE CONTROLS</h4>
                <ul>
                  <li><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> - Walk / Strafe</li>
                  <li><kbd>Shift</kbd> - Sprint (consumes stamina)</li>
                  <li><kbd>Space</kbd> - Jump / Swim to surface</li>
                  <li><kbd>Mouse Look</kbd> - Rotate first-person camera</li>
                  <li><kbd>Left Click</kbd> - Swing tool / Mine / Chop / Attack</li>
                  <li><kbd>Right Click</kbd> - Eat / Drink in hand | Cancel build</li>
                  <li><kbd>E</kbd> - Contextual interact (Scavenge, Cook, Sleep, Drink)</li>
                  <li><kbd>Tab</kbd> / <kbd>I</kbd> - Open Backpack & Crafting</li>
                  <li><kbd>1</kbd> - <kbd>6</kbd> - Select Hotbar Item</li>
                  <li><kbd>B</kbd> - Open Construction Blueprint</li>
                  <li><kbd>R</kbd> - Rotate building hologram</li>
                  <li><kbd>Esc</kbd> - Pause Menu</li>
                </ul>
              </div>

              <div class="guide-card">
                <h4>🥥 SURVIVAL BASICS</h4>
                <p><strong>1. Hydration & Hunger:</strong> Drink from coconuts, freshwater inland streams, or build a Rainwater Basin. Thirst depletes quickly under the midday sun.</p>
                <p><strong>2. Tool Progression:</strong> Start by punching or scavenging plane debris. Craft a Stone Hatchet to chop palms and a Pickaxe to mine boulders for flint.</p>
                <p><strong>3. Wildlife:</strong> Crabs on the beach yield raw crab meat. Boars in the jungle provide leather and steak. Always cook meat over a Campfire to avoid sickness!</p>
                <p><strong>4. Nightfall:</strong> Nights are dark and cold. Craft a Survival Torch for light and a Palm Leaf Shelter to sleep through the night until 06:00 dawn.</p>
              </div>
            </div>
            <button id="guide-ok-btn" class="btn-menu primary" style="margin-top: 18px; width: 100%;">Understood, Let's Survive!</button>
          </div>
        </div>
      </div>

      <!-- Exit Confirmation Modal -->
      <div id="exit-modal" class="modal-backdrop hidden">
        <div class="exit-window">
          <h3>Are you sure you want to exit?</h3>
          <p>Your current island survival progress will be safely saved in your browser.</p>
          <div class="exit-actions">
            <button id="btn-exit-confirm" class="btn-menu danger">Confirm Exit</button>
            <button id="btn-exit-cancel" class="btn-menu secondary">Stay on Island</button>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){this.element.querySelector("#btn-new-game").addEventListener("click",()=>{this.audio.playUIClick(),this.hide(),this.onNewGame&&this.onNewGame()}),this.element.querySelector("#btn-continue").addEventListener("click",()=>{wn.hasSave()?(this.audio.playUIClick(),this.hide(),this.onContinue&&this.onContinue()):alert('No existing save found. Please click "NEW GAME" to begin your journey!')}),this.element.querySelector("#btn-settings").addEventListener("click",()=>{this.audio.playUIClick(),this.onOpenSettings&&this.onOpenSettings()});const e=this.element.querySelector("#guide-modal");this.element.querySelector("#btn-guide").addEventListener("click",()=>{this.audio.playUIClick(),e.classList.remove("hidden")});const n=()=>{this.audio.playUIClick(),e.classList.add("hidden")};this.element.querySelector("#guide-close-btn").addEventListener("click",n),this.element.querySelector("#guide-ok-btn").addEventListener("click",n);const i=this.element.querySelector("#exit-modal");this.element.querySelector("#btn-exit").addEventListener("click",()=>{this.audio.playUIClick(),i.classList.remove("hidden")}),this.element.querySelector("#btn-exit-cancel").addEventListener("click",()=>{this.audio.playUIClick(),i.classList.add("hidden")}),this.element.querySelector("#btn-exit-confirm").addEventListener("click",()=>{try{window.close()}catch{}document.body.innerHTML=`
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#0d1b2a;color:#fff;font-family:sans-serif;text-align:center;">
          <h1 style="font-size:32px;margin-bottom:12px;">🌴 You have left the island.</h1>
          <p style="color:#90e0ef;font-size:18px;">Thank you for playing ISLAND SURVIVAL.</p>
          <button onclick="location.reload()" style="margin-top:20px;padding:12px 28px;background:#00b4d8;color:#000;border:none;border-radius:6px;font-size:16px;cursor:pointer;font-weight:bold;">Restart Game</button>
        </div>
      `})}show(){this.isVisible=!0,this.element.classList.remove("hidden");const t=this.element.querySelector("#btn-continue");wn.hasSave()?(t.classList.remove("disabled"),t.querySelector(".btn-desc").textContent="Resume your island journey"):(t.classList.add("disabled"),t.querySelector(".btn-desc").textContent="No saved game found")}hide(){this.isVisible=!1,this.element.classList.add("hidden")}}class bm{constructor(t,e,n,i,s=document.body){this.audio=t,this.inputManager=e,this.camera=n,this.renderer=i,this.container=s,this.element=null,this.isOpen=!1,this.onClose=null,this.settings={masterVol:80,musicVol:50,sfxVol:90,ambientVol:65,sensitivity:5,invertY:!1,fov:75,shadows:!0},this.loadSettings(),this.init()}loadSettings(){try{const t=localStorage.getItem("island_survival_settings");t&&Object.assign(this.settings,JSON.parse(t))}catch{}}saveSettings(){try{localStorage.setItem("island_survival_settings",JSON.stringify(this.settings))}catch{}}init(){this.element=document.createElement("div"),this.element.id="settings-modal",this.element.className="modal-backdrop hidden",this.element.innerHTML=`
      <div class="settings-window">
        <div class="window-header">
          <h2>⚙️ GAME SETTINGS</h2>
          <button id="settings-close-x" class="close-x-btn">✖</button>
        </div>

        <div class="settings-body">
          <!-- Audio Settings -->
          <div class="settings-section">
            <h3>🔊 AUDIO & MUSIC</h3>
            <div class="setting-item">
              <label>Master Volume: <span id="lbl-master-vol">${this.settings.masterVol}%</span></label>
              <input type="range" id="slider-master-vol" min="0" max="100" value="${this.settings.masterVol}">
            </div>
            <div class="setting-item">
              <label>Background Island Music: <span id="lbl-music-vol">${this.settings.musicVol}%</span></label>
              <input type="range" id="slider-music-vol" min="0" max="100" value="${this.settings.musicVol}">
            </div>
            <div class="setting-item">
              <label>Sound Effects: <span id="lbl-sfx-vol">${this.settings.sfxVol}%</span></label>
              <input type="range" id="slider-sfx-vol" min="0" max="100" value="${this.settings.sfxVol}">
            </div>
            <div class="setting-item">
              <label>Ocean, Wind & Rain: <span id="lbl-ambient-vol">${this.settings.ambientVol}%</span></label>
              <input type="range" id="slider-ambient-vol" min="0" max="100" value="${this.settings.ambientVol}">
            </div>
          </div>

          <!-- Controls Settings -->
          <div class="settings-section">
            <h3>🎮 CONTROLS & CAMERA</h3>
            <div class="setting-item">
              <label>Mouse Look Sensitivity: <span id="lbl-sens">${this.settings.sensitivity}</span></label>
              <input type="range" id="slider-sens" min="1" max="10" value="${this.settings.sensitivity}">
            </div>
            <div class="setting-item checkbox-item">
              <label for="check-invert-y">Invert Y-Axis Look:</label>
              <input type="checkbox" id="check-invert-y" ${this.settings.invertY?"checked":""}>
            </div>
            <div class="setting-item">
              <label>Field of View (FOV): <span id="lbl-fov">${this.settings.fov}°</span></label>
              <input type="range" id="slider-fov" min="60" max="95" value="${this.settings.fov}">
            </div>
          </div>

          <!-- Video & Performance -->
          <div class="settings-section">
            <h3>🖥️ GRAPHICS</h3>
            <div class="setting-item checkbox-item">
              <label for="check-shadows">Dynamic Sun Shadows & Cascades:</label>
              <input type="checkbox" id="check-shadows" ${this.settings.shadows?"checked":""}>
            </div>
          </div>

          <!-- Quick Keybindings Reference -->
          <div class="settings-section">
            <h3>⌨️ KEYBINDINGS REFERENCE</h3>
            <div class="keybindings-grid">
              <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> Move</div>
              <div><kbd>Shift</kbd> Sprint</div>
              <div><kbd>Space</kbd> Jump / Swim Up</div>
              <div><kbd>Left Click</kbd> Attack / Spear / Chop / Mine / Place</div>
              <div><kbd>Right Click</kbd> Eat / Drink / Cancel Build</div>
              <div><kbd>E</kbd> Interact / Gather / Scavenge / Cook / Sleep</div>
              <div><kbd>1 - 6</kbd> Select Hotbar Slot</div>
              <div><kbd>Tab</kbd> / <kbd>I</kbd> Backpack & Crafting Screen</div>
              <div><kbd>B</kbd> Base Construction Mode</div>
              <div><kbd>R</kbd> Rotate Blueprint 45°</div>
              <div><kbd>Esc</kbd> Pause Menu</div>
            </div>
          </div>

          <div class="settings-actions">
            <button id="btn-settings-save" class="btn-menu primary">Save & Close</button>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents(),this.applySettings()}bindEvents(){const t=(n,i,s,o)=>{const r=this.element.querySelector(`#${n}`),c=this.element.querySelector(`#${i}`);r.addEventListener("input",l=>{const h=parseInt(l.target.value);c.textContent=`${h}${s}`,o(h)})};t("slider-master-vol","lbl-master-vol","%",n=>{this.settings.masterVol=n,this.audio.setMasterVolume(n/100)}),t("slider-music-vol","lbl-music-vol","%",n=>{this.settings.musicVol=n,this.audio.setMusicVolume&&this.audio.setMusicVolume(n/100)}),t("slider-sfx-vol","lbl-sfx-vol","%",n=>{this.settings.sfxVol=n,this.audio.setSfxVolume(n/100)}),t("slider-ambient-vol","lbl-ambient-vol","%",n=>{this.settings.ambientVol=n,this.audio.setAmbientVolume(n/100)}),t("slider-sens","lbl-sens","",n=>{this.settings.sensitivity=n,this.inputManager.sensitivity=5e-4+n/10*.0035}),t("slider-fov","lbl-fov","°",n=>{this.settings.fov=n,this.camera&&(this.camera.fov=n,this.camera.updateProjectionMatrix())}),this.element.querySelector("#check-invert-y").addEventListener("change",n=>{this.settings.invertY=n.target.checked,this.inputManager.invertY=n.target.checked}),this.element.querySelector("#check-shadows").addEventListener("change",n=>{this.settings.shadows=n.target.checked,this.renderer&&(this.renderer.shadowMap.enabled=n.target.checked)});const e=()=>{this.saveSettings(),this.close()};this.element.querySelector("#settings-close-x").addEventListener("click",e),this.element.querySelector("#btn-settings-save").addEventListener("click",e)}applySettings(){this.audio.setMasterVolume(this.settings.masterVol/100),this.audio.setMusicVolume&&this.audio.setMusicVolume(this.settings.musicVol/100),this.audio.setSfxVolume(this.settings.sfxVol/100),this.audio.setAmbientVolume(this.settings.ambientVol/100),this.inputManager.sensitivity=5e-4+this.settings.sensitivity/10*.0035,this.inputManager.invertY=this.settings.invertY,this.camera&&(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.shadowMap.enabled=this.settings.shadows)}open(){this.isOpen=!0,this.element.classList.remove("hidden"),this.audio.playUIClick()}close(){this.isOpen=!1,this.element.classList.add("hidden"),this.onClose&&this.onClose()}}class wm{constructor(t,e,n,i,s,o=document.body){this.audio=t,this.onResume=e,this.onSave=n,this.onSettings=i,this.onMainMenu=s,this.container=o,this.isOpen=!1,this.element=null,this.init()}init(){this.element=document.createElement("div"),this.element.id="pause-menu-modal",this.element.className="modal-backdrop hidden",this.element.innerHTML=`
      <div class="pause-window">
        <h2>⏸️ GAME PAUSED</h2>

        <!-- Survivor Honor Title Badge -->
        <div id="pause-rank-badge" class="pause-rank-badge">🌴 Resourceful Castaway</div>

        <!-- Live Survival Statistics Box -->
        <div class="pause-stats-summary">
          <div class="pause-stat-item">
            <span class="p-lbl">Days Lived:</span>
            <span id="p-stat-days" class="p-val">1</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Traveled:</span>
            <span id="p-stat-dist" class="p-val">0m</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Harvested:</span>
            <span id="p-stat-harvest" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Hunted:</span>
            <span id="p-stat-hunt" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Crafted:</span>
            <span id="p-stat-craft" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Structures:</span>
            <span id="p-stat-build" class="p-val">0</span>
          </div>
        </div>

        <div class="pause-buttons">
          <button id="btn-pause-resume" class="btn-menu primary">
            <span class="btn-icon">▶️</span>
            <div class="btn-content">
              <span class="btn-title">RESUME</span>
              <span class="btn-desc">Return to survival</span>
            </div>
          </button>

          <button id="btn-pause-save" class="btn-menu secondary">
            <span class="btn-icon">💾</span>
            <div class="btn-content">
              <span class="btn-title">SAVE GAME</span>
              <span class="btn-desc">Persist progress to browser</span>
            </div>
          </button>

          <button id="btn-pause-settings" class="btn-menu">
            <span class="btn-icon">⚙️</span>
            <div class="btn-content">
              <span class="btn-title">SETTINGS</span>
              <span class="btn-desc">Audio, controls & visuals</span>
            </div>
          </button>

          <button id="btn-pause-main-menu" class="btn-menu danger">
            <span class="btn-icon">🏠</span>
            <div class="btn-content">
              <span class="btn-title">MAIN MENU</span>
              <span class="btn-desc">Save and return to title</span>
            </div>
          </button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){this.element.querySelector("#btn-pause-resume").addEventListener("click",()=>{this.close(),this.onResume&&this.onResume()}),this.element.querySelector("#btn-pause-save").addEventListener("click",()=>{if(this.audio.playCraft(),this.onSave){this.onSave();const t=this.element.querySelector("#btn-pause-save .btn-desc");t.textContent="Saved Successfully!",setTimeout(()=>{t.textContent="Persist progress to browser"},2e3)}}),this.element.querySelector("#btn-pause-settings").addEventListener("click",()=>{this.audio.playUIClick(),this.onSettings&&this.onSettings()}),this.element.querySelector("#btn-pause-main-menu").addEventListener("click",()=>{this.audio.playUIClick(),this.close(),this.onMainMenu&&this.onMainMenu()})}open(){this.isOpen=!0;const t=me.stats,e=this.element.querySelector("#pause-rank-badge");e&&(e.textContent=me.getRankTitle());const n=(i,s)=>{const o=this.element.querySelector(`#${i}`);o&&(o.textContent=s)};n("p-stat-days",t.daysSurvived),n("p-stat-dist",`${t.distanceWalked}m`),n("p-stat-harvest",t.resourcesHarvested),n("p-stat-hunt",t.animalsHunted),n("p-stat-craft",t.itemsCrafted),n("p-stat-build",t.structuresBuilt),this.element.classList.remove("hidden"),this.audio.playUIClick()}close(){this.isOpen=!1,this.element.classList.add("hidden")}}class Em{constructor(t,e,n,i=document.body){this.audio=t,this.onRespawn=e,this.onMainMenu=n,this.container=i,this.element=null,this.init()}init(){this.element=document.createElement("div"),this.element.id="death-screen-modal",this.element.className="modal-backdrop death-backdrop hidden",this.element.innerHTML=`
      <div class="death-window">
        <div class="skull-badge">💀</div>
        <h1 class="death-title">YOU PERISHED ON THE ISLAND</h1>
        <p id="death-reason" class="death-reason">Succumbed to the elements</p>

        <!-- Survivor Honor Title Badge -->
        <div id="death-rank-badge" class="death-rank-badge">🌴 Resourceful Castaway</div>

        <!-- Full Survival Statistics Grid -->
        <div class="death-stats-grid">
          <div class="stat-box">
            <span class="stat-num" id="stat-days-survived">1</span>
            <span class="stat-lbl">DAYS LIVED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-distance-walked">0m</span>
            <span class="stat-lbl">DISTANCE EXPLORED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-harvested">0</span>
            <span class="stat-lbl">RESOURCES GATHERED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-hunted">0</span>
            <span class="stat-lbl">WILDLIFE HUNTED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-crafted">0</span>
            <span class="stat-lbl">ITEMS CRAFTED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-structures">0</span>
            <span class="stat-lbl">STRUCTURES BUILT</span>
          </div>
        </div>

        <div class="death-actions">
          <button id="btn-respawn" class="btn-menu primary">
            <span class="btn-icon">⚡</span>
            <div class="btn-content">
              <span class="btn-title">RESPAWN ON SHORE</span>
              <span class="btn-desc">Wake up at plane crash site</span>
            </div>
          </button>

          <button id="btn-death-menu" class="btn-menu secondary">
            <span class="btn-icon">🏠</span>
            <div class="btn-content">
              <span class="btn-title">MAIN MENU</span>
              <span class="btn-desc">Return to title screen</span>
            </div>
          </button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.element.querySelector("#btn-respawn").addEventListener("click",()=>{this.audio.playUIClick(),this.hide(),this.onRespawn&&this.onRespawn()}),this.element.querySelector("#btn-death-menu").addEventListener("click",()=>{this.audio.playUIClick(),this.hide(),this.onMainMenu&&this.onMainMenu()})}show(t,e){const n=this.element.querySelector("#death-reason"),i=this.element.querySelector("#death-rank-badge");n&&(n.textContent=t||"The harsh island elements overtook you");const s=me.stats;s.daysSurvived=Math.max(s.daysSurvived,e||1),i&&(i.textContent=me.getRankTitle());const o=(r,c)=>{const l=this.element.querySelector(`#${r}`);l&&(l.textContent=c)};o("stat-days-survived",s.daysSurvived),o("stat-distance-walked",`${s.distanceWalked}m`),o("stat-harvested",s.resourcesHarvested),o("stat-hunted",s.animalsHunted),o("stat-crafted",s.itemsCrafted),o("stat-structures",s.structuresBuilt),this.element.classList.remove("hidden")}hide(){this.element.classList.add("hidden")}}class Tm{constructor(t,e=document.body){this.game=t,this.container=e,this.visible=window.location.search.includes("debug=true"),this.fps=60,this.frameCount=0,this.lastFpsUpdate=performance.now(),this.element=null,this.init(),this.bindHotkeys()}init(){this.element=document.createElement("div"),this.element.id="debug-overlay",this.element.className="debug-overlay"+(this.visible?"":" hidden"),this.element.innerHTML=`
      <div class="debug-panel">
        <div class="debug-header">
          <span class="debug-title">🛠️ ISLAND SURVIVAL DEBUG v1.2</span>
          <span id="dbg-fps" class="debug-badge fps-badge">60 FPS</span>
        </div>
        <div class="debug-section">
          <div class="debug-row"><span>POS:</span> <span id="dbg-pos" class="dbg-val">0, 0, 0</span></div>
          <div class="debug-row"><span>YAW:</span> <span id="dbg-yaw" class="dbg-val">0°</span></div>
          <div class="debug-row"><span>BIOME:</span> <span id="dbg-biome" class="dbg-val">Beach</span></div>
          <div class="debug-row"><span>TIME:</span> <span id="dbg-time" class="dbg-val">Day 1 09:00</span></div>
        </div>
        <div class="debug-section">
          <div class="debug-subtitle">🎯 TARGETED RESOURCE NODE:</div>
          <div id="dbg-target-info" class="dbg-target-box">Looking at nothing</div>
        </div>
        <div class="debug-section">
          <div class="debug-subtitle">⚡ DEBUG HOTKEYS:</div>
          <div class="debug-hotkeys">
            <div><kbd>F1</kbd> Give 20x All Resources & Tools</div>
            <div><kbd>F2</kbd> Advance Time (+3 Hours)</div>
            <div><kbd>F3</kbd> Toggle Debug Overlay</div>
            <div><kbd>F4</kbd> God Mode (Refill All Vitals)</div>
            <div><kbd>F5</kbd> Cycle Weather (Clear / Rain / Storm)</div>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.element);const t=document.createElement("style");t.textContent=`
      .debug-overlay {
        position: fixed;
        top: 80px;
        left: 20px;
        z-index: 99999;
        pointer-events: none;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 12px;
        color: #00ff66;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
      }
      .debug-overlay.hidden {
        display: none !important;
      }
      .debug-panel {
        background: rgba(10, 18, 14, 0.88);
        border: 1px solid rgba(0, 255, 102, 0.4);
        border-radius: 6px;
        padding: 10px 14px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        min-width: 280px;
      }
      .debug-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0,255,102,0.25);
        padding-bottom: 6px;
        margin-bottom: 6px;
      }
      .debug-title {
        font-weight: bold;
        color: #afffcf;
      }
      .debug-badge {
        background: rgba(0,255,102,0.2);
        border: 1px solid #00ff66;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
      }
      .debug-section {
        margin-top: 6px;
        padding-top: 4px;
        border-top: 1px dashed rgba(255,255,255,0.1);
      }
      .debug-subtitle {
        color: #ffd54f;
        font-size: 11px;
        margin-bottom: 3px;
      }
      .debug-row {
        display: flex;
        justify-content: space-between;
        line-height: 1.4;
      }
      .dbg-val {
        color: #ffffff;
      }
      .dbg-target-box {
        background: rgba(0,0,0,0.4);
        padding: 4px 8px;
        border-radius: 4px;
        color: #80d8ff;
        font-size: 11px;
        line-height: 1.35;
      }
      .debug-hotkeys {
        font-size: 11px;
        color: #b0bec5;
        line-height: 1.45;
      }
      .debug-hotkeys kbd {
        background: #263238;
        border: 1px solid #455a64;
        color: #ffeb3b;
        padding: 1px 4px;
        border-radius: 3px;
        font-size: 10px;
      }
    `,document.head.appendChild(t)}bindHotkeys(){window.addEventListener("keydown",t=>{(t.code==="F3"||t.code==="Backquote")&&(t.preventDefault(),this.toggle()),t.code==="F1"&&(t.preventDefault(),this.giveAllResources()),t.code==="F2"&&(t.preventDefault(),this.advanceTime()),t.code==="F4"&&(t.preventDefault(),this.refillVitals()),t.code==="F5"&&(t.preventDefault(),this.cycleWeather())})}cycleWeather(){const t=this.game.timeWeather;if(!t)return;const e=["clear","cloudy","rain","storm"],n=e.indexOf(t.weather),i=e[(n+1)%e.length];t.setWeather(i),this.game.hud&&this.game.hud.addNotification(`🌧️ [DEBUG] Set Weather: ${i.toUpperCase()}`)}toggle(){this.visible=!this.visible,this.element.classList.toggle("hidden",!this.visible),this.game.hud&&this.game.hud.addNotification(`Debug Overlay: ${this.visible?"ENABLED":"DISABLED"}`)}giveAllResources(){const t=this.game.inventory;t&&(t.addItem("wood",20),t.addItem("stone",20),t.addItem("leaves",20),t.addItem("coconut",10),t.addItem("berries",15),t.addItem("mushroom",10),t.addItem("fiber",20),t.addItem("flint",10),t.addItem("wooden_axe",1),t.addItem("stone_axe",1),t.addItem("stone_pickaxe",1),t.addItem("wooden_spear",1),t.addItem("fishing_rod",1),t.addItem("torch",1),t.addItem("building_hammer",1),t.addItem("water_canteen",1),t.addItem("palm_hat",1),t.addItem("fiber_vest",1),t.addItem("raw_meat",6),t.addItem("cooked_meat",4),t.addItem("raw_fish",6),t.addItem("cooked_fish",4),t.addItem("animal_hide",8),t.addItem("bone",8),t.addItem("feathers",10),t.addItem("snake_skin",6),t.addItem("wood_foundation",8),t.addItem("wood_wall",12),t.addItem("wood_door",2),t.addItem("wood_roof",4),t.addItem("storage_box",2),t.addItem("campfire",2),t.addItem("basic_shelter",1),this.game.inventoryUI&&this.game.inventoryUI.isOpen&&this.game.inventoryUI.render(),this.game.hud&&(this.game.hud.updateHotbar(t),this.game.hud.addNotification("🛠️ [DEBUG] Added 20x All Resources, Crafting Tools & Wearable Gear!")))}advanceTime(){const t=this.game.timeWeather;t&&(t.timeOfDay=(t.timeOfDay+.125)%1,t.update(0,this.game.player.position),this.game.hud&&this.game.hud.addNotification(`⏳ [DEBUG] Fast-forwarded time (+3h) -> ${t.getFormattedTime()}`))}refillVitals(){const t=this.game.player;t&&(t.vitals.health=100,t.vitals.hunger=100,t.vitals.thirst=100,t.vitals.stamina=100,t.vitals.oxygen=100,this.game.hud&&(this.game.hud.updateVitals(t.vitals,!1),this.game.hud.addNotification("💚 [DEBUG] God Mode: All vitals refilled to 100%!")))}update(t){if(!this.visible)return;this.frameCount++;const e=performance.now();if(e-this.lastFpsUpdate>=500){this.fps=Math.round(this.frameCount*1e3/(e-this.lastFpsUpdate)),this.frameCount=0,this.lastFpsUpdate=e;const l=document.getElementById("dbg-fps");l&&(l.textContent=`${this.fps} FPS`)}const n=this.game.player;if(!n)return;const i=document.getElementById("dbg-pos");i&&(i.textContent=`X: ${n.position.x.toFixed(1)}, Y: ${n.position.y.toFixed(1)}, Z: ${n.position.z.toFixed(1)}`);const s=document.getElementById("dbg-yaw");if(s){const l=Math.round((n.yaw%(Math.PI*2)+Math.PI*2)%(Math.PI*2)*(180/Math.PI));s.textContent=`${l}° (order: YXZ)`}const o=document.getElementById("dbg-biome");if(o){const l=n.position.y;let h="Coastal Beach";n.isUnderwater?h="Underwater Ocean":n.isSwimming?h="Ocean Surface":l>18?h="Mountain Ridge":l>3.2&&(h="Tropical Rainforest Jungle"),o.textContent=h}const r=document.getElementById("dbg-time");r&&this.game.timeWeather&&(r.textContent=`Day ${this.game.timeWeather.dayCount} ${this.game.timeWeather.getFormattedTime()}`);const c=document.getElementById("dbg-target-info");if(c){const l=this.game.wildlife?this.game.wildlife.checkAttack(n.raycaster,5):null;if(l&&l.animal&&l.animal.userData){const h=l.animal.userData,d=h.name||h.type.toUpperCase(),u=l.distance?l.distance.toFixed(2):"3.0",f=h.loot?Object.entries(h.loot).map(([g,v])=>`${g}:${v}`).join(", "):"None";c.innerHTML=`<strong>🐾 ${d}</strong> (${u}m) | HP: ${h.health}/${h.maxHealth} [State: ${h.ai?h.ai.state:"idle"}]<br><span style="color:#ffb74d">Hunt Drops: [${f}]</span>`}else if(this.game.foliage){const h=this.game.foliage.checkRaycast(n.raycaster,4);if(h&&h.node&&h.node.userData){const d=h.node.userData,u=d.name||d.type,f=h.distance.toFixed(2),g=d.health!==void 0?` | HP: ${d.health}/${d.maxHealth}`:" [Direct [E] Pickup]",v=d.resourceYield?Object.entries(d.resourceYield).map(([m,p])=>`${m}:${p}`).join(", "):"None";c.innerHTML=`<strong>${u}</strong> (${f}m)${g}<br><span style="color:#a7ffeb">Drops: [${v}]</span>`}else c.textContent="Looking at terrain / atmosphere"}}}}class Am{constructor(){this.container=document.getElementById("canvas-container"),this.STATE_MENU="MENU",this.STATE_PLAYING="PLAYING",this.STATE_INVENTORY="INVENTORY",this.STATE_PAUSED="PAUSED",this.STATE_DEAD="DEAD",this.state=this.STATE_MENU,this.menuOrbitAngle=0,this.clock=new am,this.initThree(),this.initWorld(),this.initPlayerAndSystems(),this.initUI(),this.bindEvents(),this.animate()}initThree(){this.scene=new Bp,this.camera=new qe(75,window.innerWidth/window.innerHeight,.1,1200),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.renderer=new lc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Po,this.renderer.toneMapping=Io,this.renderer.toneMappingExposure=1.05,this.renderer.setClearColor(9489145,1),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initWorld(){this.input=new rm(this.renderer.domElement),this.timeWeather=new cm(this.scene,this.renderer),this.terrain=new hm(this.scene,600,160),this.ocean=new dm(this.scene,1400),this.foliage=new um(this.scene,this.terrain),this.foliage.generateFoliage(360),this.crashSite=new fm(this.scene,this.terrain,50,70),this.wildlife=new pm(this.scene,this.terrain),this.wildlife.spawnAnimals({deer:7,rabbits:10,birds:8,fish:12,snakes:6,boars:6,crabs:10})}initPlayerAndSystems(){this.inventory=new mm(24,6),this.building=new gm(this.scene,this.terrain,this.inventory,ie),this.player=new xm(this.camera,this.scene,this.terrain,this.ocean,this.inventory,ie)}initUI(){this.hud=new ym,this.hud.updateHotbar(this.inventory),this.inventoryUI=new Mm(this.inventory,this.building,ie),this.settingsModal=new bm(ie,this.input,this.camera,this.renderer),this.pauseMenu=new wm(ie,()=>this.resumeGame(),()=>wn.saveGame(this.player,this.timeWeather,this.building),()=>this.settingsModal.open(),()=>this.returnToMainMenu()),this.deathScreen=new Em(ie,()=>this.respawnPlayer(),()=>this.returnToMainMenu()),me.onTutorialUpdate=t=>{this.hud.updateTutorial(t)},me.onTutorialCompleted=()=>{this.hud.addNotification("🏆 CONGRATULATIONS! You completed the Survival Guide!")},this.hud.updateTutorial(me.getCurrentTutorialObjective()),this.mainMenu=new Sm(ie,()=>this.startNewGame(),()=>this.continueGame(),()=>this.settingsModal.open()),this.debugOverlay=new Tm(this),this.inventory.onInventoryChanged=()=>{this.hud.updateHotbar(this.inventory),this.hud.isBuildMode&&this.hud.updateBuildBar(this.building,this.inventory)},this.hud.onBuildPieceSelect=t=>{this.building.startBuilding(t),this.hud.updateBuildBar(this.building,this.inventory),ie.playUIClick()},this.player.onExitBuildMode=()=>{this.hud.setBuildMode(!1,this.building,this.inventory)},this.player.onStructurePlaced=()=>{this.hud.isBuildMode&&this.hud.updateBuildBar(this.building,this.inventory),wn.saveGame(this.player,this.timeWeather,this.building)},this.player.onNotification=t=>{this.hud.addNotification(t)},this.player.onVitalsChanged=t=>{this.hud.updateVitals(t,this.player.isUnderwater)},this.player.onDamageTaken=()=>{this.hud.triggerDamageFlash()},this.player.onPlayerDeath=t=>{this.state=this.STATE_DEAD,this.input.exitLock(),this.deathScreen.show(t,this.timeWeather.dayCount)},this.player.onOpenChest=t=>{this.state=this.STATE_INVENTORY,this.input.exitLock(),this.inventoryUI.open(t)},this.hud.setVisible(!1)}bindEvents(){this.input.onLockChange=t=>{!t&&this.state===this.STATE_PLAYING&&this.openPauseMenu()},this.input.onInteractPress=()=>{this.state===this.STATE_PLAYING&&this.player.interact(this.building,this.crashSite,this.foliage,this.timeWeather)},this.input.onInventoryToggle=()=>{this.state===this.STATE_PLAYING?this.openInventory():this.state===this.STATE_INVENTORY&&this.closeInventory()},this.inventoryUI.onClose=()=>{this.state===this.STATE_INVENTORY&&this.resumeGame()},this.input.onBuildToggle=()=>{this.state===this.STATE_PLAYING&&(this.hud.isBuildMode?(this.hud.setBuildMode(!1,this.building,this.inventory),this.building.cancelBuilding(),ie.playUIClick()):(this.hud.setBuildMode(!0,this.building,this.inventory),this.building.startBuilding("wood_foundation"),this.hud.updateBuildBar(this.building,this.inventory),ie.playUIClick()))},this.input.onRotatePress=()=>{this.state===this.STATE_PLAYING&&this.building.activeBlueprint&&this.building.rotateBlueprint()},this.input.onSlotSelect=t=>{if(this.state===this.STATE_PLAYING)if(this.hud.isBuildMode){const e=di[t];e&&(this.building.startBuilding(e.id),this.hud.updateBuildBar(this.building,this.inventory),ie.playUIClick())}else t<6&&(this.inventory.selectHotbarIndex(t),this.hud.updateHotbar(this.inventory),ie.playUIClick())},this.input.onPauseToggle=()=>{this.state===this.STATE_PLAYING?this.openPauseMenu():this.state===this.STATE_PAUSED?this.resumeGame():this.state===this.STATE_INVENTORY&&this.closeInventory()}}startNewGame(){ie.resume(),this.state=this.STATE_PLAYING,this.mainMenu.hide(),this.hud.setVisible(!0),this.camera.up.set(0,1,0),this.camera.rotation.order="YXZ",this.camera.rotation.set(0,-Math.PI/2,0,"YXZ"),this.player.respawn(),this.input.requestLock(),this.hud.addNotification("Stranded on island. Search plane debris for supplies!")}continueGame(){ie.resume(),wn.loadGame(this.player,this.timeWeather,this.building)?(this.state=this.STATE_PLAYING,this.mainMenu.hide(),this.hud.setVisible(!0),this.camera.up.set(0,1,0),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.player.pitch,this.player.yaw,0,"YXZ"),this.input.requestLock(),this.hud.addNotification("Game loaded successfully. Welcome back to the island!")):this.startNewGame()}openInventory(){this.state=this.STATE_INVENTORY,this.input.exitLock(),this.inventoryUI.open()}closeInventory(){this.inventoryUI.close(),this.resumeGame()}openPauseMenu(){this.state=this.STATE_PAUSED,this.input.exitLock(),this.pauseMenu.open()}resumeGame(){this.state=this.STATE_PLAYING,this.pauseMenu.close(),this.inventoryUI.close(),this.settingsModal.close(),this.input.requestLock()}returnToMainMenu(){wn.saveGame(this.player,this.timeWeather,this.building),this.state=this.STATE_MENU,this.input.exitLock(),this.pauseMenu.close(),this.hud.setVisible(!1),this.mainMenu.show()}respawnPlayer(){this.player.respawn(),this.resumeGame(),this.hud.addNotification("You woke up ashore with renewed determination.")}animate(){requestAnimationFrame(()=>this.animate());const t=Math.min(this.clock.getDelta(),.1);if(this.state===this.STATE_MENU){this.menuOrbitAngle+=t*.08;const e=180,n=Math.cos(this.menuOrbitAngle)*e,i=Math.sin(this.menuOrbitAngle)*e,s=32+Math.sin(this.menuOrbitAngle*2)*6;this.camera.position.set(n,s,i),this.camera.lookAt(0,10,0),this.ocean.update(t,this.timeWeather.sunDirection),this.timeWeather.update(t*.5,new C(0,0,0)),this.building.updateCampfires(t),this.crashSite.update(t),this.renderer.render(this.scene,this.camera);return}if(this.state===this.STATE_PLAYING){if(this.player.handleMouseLook(this.input.mouse.dx,this.input.mouse.dy,this.input.sensitivity,this.input.invertY),this.input.mouse.wheel!==0){let n=this.inventory.selectedHotbarIndex+this.input.mouse.wheel;n<0&&(n=5),n>5&&(n=0),this.inventory.selectHotbarIndex(n),this.hud.updateHotbar(this.inventory),ie.playUIClick()}this.player.update(t,this.input,this.foliage,this.wildlife,this.building,this.crashSite,this.timeWeather),this.building.update(this.camera,this.player.position);const e=this.player.getInteractionPrompt(this.building,this.crashSite,this.foliage,this.wildlife);this.hud.showInteractionPrompt(e)}this.wildlife.update(t,this.player.position,(e,n)=>{this.player.takeDamage(e,n)}),this.ocean.update(t,this.timeWeather.sunDirection),this.timeWeather.update(t,this.player.position),this.foliage.update(t),this.crashSite.update(t),this.building.updateCampfires(t),(this.state===this.STATE_PLAYING||this.state===this.STATE_INVENTORY)&&this.hud.updateTimeAndCompass(this.timeWeather.getFormattedTime(),this.timeWeather.dayCount,this.timeWeather.isNight(),this.player.yaw,this.timeWeather.weather),this.input.resetDeltas(),this.debugOverlay&&this.debugOverlay.update(t),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Am});
//# sourceMappingURL=index-D-YY39d0.js.map
