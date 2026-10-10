(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,M=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,P=37821,Fe=36492,Ie=36494,Le=36495,F=36283,Re=36284,I=36285,L=36286,ze=2300,Be=2301,Ve=2302,He=2303,Ue=2400,We=2401,Ge=2402,Ke=3200,qe=`srgb`,Je=`srgb-linear`,Ye=`linear`,Xe=`srgb`,Ze=7680,Qe=35044,$e=35048,et=2e3;function tt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function st(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ct(...e){let t=e.join(` `);t in at||(at[t]=!0,R(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ft=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pt=1234567,mt=Math.PI/180,ht=180/Math.PI;function gt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ft[e&255]+ft[e>>8&255]+ft[e>>16&255]+ft[e>>24&255]+`-`+ft[t&255]+ft[t>>8&255]+`-`+ft[t>>16&15|64]+ft[t>>24&255]+`-`+ft[n&63|128]+ft[n>>8&255]+`-`+ft[n>>16&255]+ft[n>>24&255]+ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function _t(e,t){return(e%t+t)%t}function vt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function yt(e,t,n){return e===t?0:(n-e)/(t-e)}function bt(e,t,n){return(1-n)*e+n*t}function xt(e,t,n,r){return bt(e,t,1-Math.exp(-n*r))}function St(e,t=1){return t-Math.abs(_t(e,t*2)-t)}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Et(e,t){return e+Math.random()*(t-e)}function Dt(e){return e*(.5-Math.random())}function Ot(e){e!==void 0&&(pt=e);let t=pt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kt(e){return e*mt}function At(e){return e*ht}function jt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Lt={DEG2RAD:mt,RAD2DEG:ht,generateUUID:gt,clamp:B,euclideanModulo:_t,mapLinear:vt,inverseLerp:yt,lerp:bt,damp:xt,pingpong:St,smoothstep:Ct,smootherstep:wt,randInt:Tt,randFloat:Et,randFloatSpread:Dt,seededRandom:Ot,degToRad:kt,radToDeg:At,isPowerOfTwo:jt,ceilPowerOfTwo:Mt,floorPowerOfTwo:Nt,setQuaternionFromProperEuler:Pt,normalize:It,denormalize:Ft};o=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=V,e.prototype.isVector2=!0;var Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=H,t.prototype.isVector3=!0;var zt=new H,Bt=new Rt,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=U,n.prototype.isMatrix3=!0;var Vt=new U,Ht=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ye:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Je]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),e}var W=Wt();function Gt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Kt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var qt,Jt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qt===void 0&&(qt=rt(`canvas`)),qt.width=e.width,qt.height=e.height;let t=qt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=qt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Gt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Gt(t[e]/255)*255):t[e]=Gt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Yt=0,Xt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=gt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Zt(r[t].image)):e.push(Zt(r[t]))}else e=Zt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Zt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Jt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Qt=0,$t=new H,en=class e extends dt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=gt(),this.name=``,this.source=new Xt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($t).x}get height(){return this.source.getSize($t).y}get depth(){return this.source.getSize($t).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=300,en.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var tn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=tn,r.prototype.isVector4=!0;var nn=class extends dt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];let r=new en({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},rn=class extends nn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},an=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},on=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},sn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cn.setFromMatrixColumn(e,0).length(),i=1/cn.setFromMatrixColumn(e,1).length(),a=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(un,e,dn)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fn.crossVectors(n,mn),fn.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fn.crossVectors(n,mn)),fn.normalize(),pn.crossVectors(mn,fn),r[0]=fn.x,r[4]=pn.x,r[8]=mn.x,r[1]=fn.y,r[5]=pn.y,r[9]=mn.y,r[2]=fn.z,r[6]=pn.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*ee+s*te+c*re,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*ee+d*te+f*re,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*ee+h*te+g*re,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*ee+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=cn.set(r[0],r[1],r[2]).length(),o=cn.set(r[4],r[5],r[6]).length(),s=cn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ln.copy(this);let c=1/a,l=1/o,u=1/s;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=sn,i.prototype.isMatrix4=!0;var cn=new H,ln=new sn,un=new H(0,0,0),dn=new H(1,1,1),fn=new H,pn=new H,mn=new H,hn=new sn,gn=new Rt,_n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gn.setFromEuler(this),this.setFromQuaternion(gn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER=`XYZ`;var vn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},yn=0,bn=new H,xn=new Rt,Sn=new sn,Cn=new H,wn=new H,Tn=new H,En=new Rt,Dn=new H(1,0,0),On=new H(0,1,0),kn=new H(0,0,1),An={type:`added`},jn={type:`removed`},Mn={type:`childadded`,child:null},Nn={type:`childremoved`,child:null},Pn=class e extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=gt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new _n,r=new Rt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new sn},normalMatrix:{value:new U}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(Dn,e)}rotateY(e){return this.rotateOnAxis(On,e)}rotateZ(e){return this.rotateOnAxis(kn,e)}translateOnAxis(e,t){return bn.copy(e).applyQuaternion(this.quaternion),this.position.add(bn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dn,e)}translateY(e){return this.translateOnAxis(On,e)}translateZ(e){return this.translateOnAxis(kn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cn.copy(e):Cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(wn,Cn,this.up):Sn.lookAt(Cn,wn,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),xn.setFromRotationMatrix(Sn),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,Tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,En,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pn.DEFAULT_UP=new H(0,1,0),Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},In={type:`move`},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(In)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=_t(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vn(i,r,e+1/3),this.g=Vn(i,r,e),this.b=Vn(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=qe){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=Rn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}copyLinearToSRGB(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return W.workingToColorSpace(Hn.copy(this),e),Math.round(B(Hn.r*255,0,255))*65536+Math.round(B(Hn.g*255,0,255))*256+Math.round(B(Hn.b*255,0,255))}getHexString(e=qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=qe){W.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bn);let n=bt(zn.h,Bn.h,t),r=bt(zn.s,Bn.s,t),i=bt(zn.l,Bn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new G;G.NAMES=Rn;var Un=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Wn=class extends Pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new H,tr=new tn,nr=new tn,rr=new tn,ir=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gn.subVectors(r,t),Kn.subVectors(n,t),qn.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Kn),s=Gn.dot(qn),c=Kn.dot(Kn),l=Kn.dot(qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)!==null&&Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jn.x),s.addScaledVector(a,Jn.y),s.addScaledVector(o,Jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return tr.setScalar(0),nr.setScalar(0),rr.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,i.x),a.addScaledVector(nr,i.y),a.addScaledVector(rr,i.z),a}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),Kn.subVectors(e,t),Gn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yn.subVectors(r,n),Xn.subVectors(i,n),Qn.subVectors(e,n);let s=Yn.dot(Qn),c=Xn.dot(Qn);if(s<=0&&c<=0)return t.copy(n);$n.subVectors(e,r);let l=Yn.dot($n),u=Xn.dot($n);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Yn,a);er.subVectors(e,i);let f=Yn.dot(er),p=Xn.dot(er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ar=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sr):sr.fromBufferAttribute(r,t),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),gr.subVectors(this.max,hr),lr.subVectors(e.a,hr),ur.subVectors(e.b,hr),dr.subVectors(e.c,hr),fr.subVectors(ur,lr),pr.subVectors(dr,ur),mr.subVectors(lr,dr);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-mr.z,mr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,mr.z,0,-mr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-mr.y,mr.x,0];return!yr(t,lr,ur,dr,gr)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,lr,ur,dr,gr))?!1:(_r.crossVectors(fr,pr),t=[_r.x,_r.y,_r.z],yr(t,lr,ur,dr,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new H,new H,new H,new H,new H,new H,new H,new H],sr=new H,cr=new ar,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H;function yr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vr.fromArray(e,a);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),s=t.dot(vr),c=n.dot(vr),l=r.dot(vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var br=new H,xr=new V,Sr=0,Cr=class extends dt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qe,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new ar,Or=new H,kr=new H,Ar=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new sn,Nr=new Pn,Pr=new H,Fr=new ar,Ir=new ar,Lr=new H,Rr=class e extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=gt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(tt(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=new H,Br=new H,Vr=new U,Hr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=gt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ze,this.stencilZFail=Ze,this.stencilZPass=Ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=new H,Kr=new H,qr=new H,Jr=new H,Yr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kr.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Kr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Jr.dot(this.direction),s=-Jr.dot(qr),c=Jr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kr).addScaledVector(qr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Gr.subVectors(e.center,this.origin);let n=Gr.dot(this.direction),r=Gr.dot(Gr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=ee-ne*k,se=O-M*k,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*k+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xr=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zr=new sn,Qr=new Yr,$r=new Ar,ei=new H,ti=new H,ni=new H,ri=new H,ii=new H,ai=new H,oi=new H,si=new H,ci=class extends Pn{constructor(e=new Rr,t=new Xr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),!($r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2))&&(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new H;ir.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=ir.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=ir.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=ir.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};ir.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class extends en{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pi=new sn,mi=new sn,hi=[],gi=new ar,_i=new sn,vi=new ci,yi=new Ar,bi=class extends ci{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,_i)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),gi.copy(e.boundingBox).applyMatrix4(pi),this.boundingBox.union(gi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),yi.copy(e.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(vi.geometry=this.geometry,vi.material=this.material,vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yi.copy(this.boundingSphere),yi.applyMatrix4(n),e.ray.intersectsSphere(yi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,pi),mi.multiplyMatrices(n,pi),vi.matrixWorld=mi,vi.raycast(e,hi);for(let e=0,n=hi.length;e<n;e++){let n=hi[e];n.instanceId=i,n.object=this,t.push(n)}hi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Ar,Si=new V(.5,.5),Ci=new H,wi=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=et,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476+Si.distanceTo(e.center),xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ci.x=r.normal.x>0?e.max.x:e.min.x,Ci.y=r.normal.y>0?e.max.y:e.min.y,Ci.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ti=class extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ei=new H,Di=new H,Oi=new sn,ki=new Yr,Ai=new Ar,ji=new H,Mi=new H,Ni=class extends Pn{constructor(e=new Rr,t=new Ti){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ei.fromBufferAttribute(t,e-1),Di.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ei.distanceTo(Di);e.setAttribute(`lineDistance`,new Er(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(r),Ai.radius+=i,e.ray.intersectsSphere(Ai)===!1)return;Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Pi(this,e,ki,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Pi(this,e,ki,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Pi(this,e,ki,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Pi(this,e,ki,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Pi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ei.fromBufferAttribute(s,i),Di.fromBufferAttribute(s,a),n.distanceSqToSegment(Ei,Di,ji,Mi)>r)return;ji.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ji);if(!(c<t.near||c>t.far))return{distance:c,point:Mi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Fi=new H,Ii=new H,Li=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Fi.fromBufferAttribute(t,e),Ii.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Fi.distanceTo(Ii);e.setAttribute(`lineDistance`,new Er(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ri=class extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zi=new sn,Bi=new Yr,Vi=new Ar,Hi=new H,Ui=class extends Pn{constructor(e=new Rr,t=new Ri){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Vi.radius+=i,e.ray.intersectsSphere(Vi)===!1)return;zi.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Hi.fromBufferAttribute(l,n),Wi(Hi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Hi.fromBufferAttribute(l,a),Wi(Hi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Wi(e,t,n,r,i,a,o){let s=Bi.distanceSqToPoint(e);if(s<n){let n=new H;Bi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gi=class extends en{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ki=class extends en{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qi=class extends Ki{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ji=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yi=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xi=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class e extends Xi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class e extends Rr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Er(i,3)),this.setAttribute(`normal`,new Er(i.slice(),3)),this.setAttribute(`uv`,new Er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},$i=new H,ea=new H,ta=new H,na=new ir,ra=class extends Rr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(mt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=na;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),na.getNormal(ta),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=na[c[e]],o=na[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(ta.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:ta.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];$i.fromBufferAttribute(a,t),ea.fromBufferAttribute(a,n),d.push($i.x,$i.y,$i.z),d.push(ea.x,ea.y,ea.z)}this.setAttribute(`position`,new Er(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ia=class e extends Qi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},aa=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},oa=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function sa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(la(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(la(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ca(e){let t={};for(let n=0;n<e.length;n++){let r=sa(e[n]);for(let e in r)t[e]=r[e]}return t}function la(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ua(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var fa={clone:sa,merge:ca},pa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ha=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pa,this.fragmentShader=ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=ua(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new sn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},_a=class extends Wr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Sa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ca=class extends Sa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ue,endingEnd:Ue}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case We:i=e,o=2*t-n;break;case Ge:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case We:a=e,s=2*n-t;break;case Ge:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ta=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ea=class extends Sa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ka(n,t,g,y,r);i[p]=Da(x,o,_,b,m)}return i}};function Da(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Oa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ka(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Da(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Oa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Aa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xa(e.settings)&&(n.settings={inTangents:ba(e.settings.inTangents,Array),outTangents:ba(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ze:t=this.InterpolantFactoryMethodDiscrete;break;case Be:t=this.InterpolantFactoryMethodLinear;break;case Ve:t=this.InterpolantFactoryMethodSmooth;break;case He:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ze;case this.InterpolantFactoryMethodLinear:return Be;case this.InterpolantFactoryMethodSmooth:return Ve;case this.InterpolantFactoryMethodBezier:return He}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xa(this.settings)&&(ja(this.settings.inTangents,e),ja(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ve,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ja(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Aa.prototype.ValueTypeName=``,Aa.prototype.TimeBufferType=Float32Array,Aa.prototype.ValueBufferType=Float32Array,Aa.prototype.DefaultInterpolation=Be;var Ma=class extends Aa{constructor(e,t,n){super(e,t,n)}};Ma.prototype.ValueTypeName=`bool`,Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=ze,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName=`color`;var Pa=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName=`number`;var Fa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ia=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName=`quaternion`,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Aa{constructor(e,t,n){super(e,t,n)}};La.prototype.ValueTypeName=`string`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=ze,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`vector`;var za=class extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ba=class extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Va=new sn,Ha=new H,Ua=new H,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Va,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new H,Ka=new Rt,qa=new H,Ja=class extends Pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=et,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Ka,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ka,qa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ga,Ka,qa),qa.x===1&&qa.y===1&&qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ka,qa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ya=new H,Xa=new V,Za=new V,Qa=class extends Ja{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,Za),t.subVectors(Za,Xa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$a=class extends Ja{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eo=class extends Wa{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new eo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},no=-90,ro=1,io=class extends Pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qa(no,ro,e,t);r.layers=this.layers,this.add(r);let i=new Qa(no,ro,e,t);i.layers=this.layers,this.add(i);let a=new Qa(no,ro,e,t);a.layers=this.layers,this.add(a);let o=new Qa(no,ro,e,t);o.layers=this.layers,this.add(o);let s=new Qa(no,ro,e,t);s.layers=this.layers,this.add(s);let c=new Qa(no,ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ao=class extends Qa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},oo=`\\[\\]\\.:\\/`,so=RegExp(`[\\[\\]\\.:\\/]`,`g`),co=`[^\\[\\]\\.:\\/]`,lo=`[^`+oo.replace(`\\.`,``)+`]`,uo=`((?:WC+[\\/:])*)`.replace(`WC`,co),fo=`(WCOD+)?`.replace(`WCOD`,lo),po=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,co),mo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,co),ho=RegExp(`^`+uo+fo+po+mo+`$`),go=[`material`,`materials`,`bones`,`map`],_o=class{constructor(e,t,n){let r=n||vo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(so,``)}static parseTrackName(e){let t=ho.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);go.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vo.Composite=_o,vo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vo.prototype.GetterByBindingType=[vo.prototype._getValue_direct,vo.prototype._getValue_array,vo.prototype._getValue_arrayElement,vo.prototype._getValue_toArray],vo.prototype.SetterByBindingTypeAndVersioning=[[vo.prototype._setValue_direct,vo.prototype._setValue_direct_setNeedsUpdate,vo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_array,vo.prototype._setValue_array_setNeedsUpdate,vo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_arrayElement,vo.prototype._setValue_arrayElement_setNeedsUpdate,vo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_fromArray,vo.prototype._setValue_fromArray_setNeedsUpdate,vo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yo=new sn,bo=class{constructor(e,t,n=0,r=1/0){this.ray=new Yr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return yo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yo),this}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(xo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)So(e[r],this,n,t);return n.sort(xo),n}};function xo(e,t){return e.distance-t.distance}function So(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)So(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Co(e,t,n,r){let i=wo(r);switch(n){case A:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case F:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case I:case L:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function wo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function To(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Eo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},q={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Do={basic:{uniforms:ca([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:ca([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:ca([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:ca([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:ca([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new G(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:ca([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:ca([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:ca([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:ca([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:ca([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:ca([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:ca([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:ca([q.lights,q.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Do.physical={uniforms:ca([Do.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Oo={r:0,b:0,g:0},ko=new sn,Ao=new U;Ao.set(-1,0,0,0,1,0,0,0,1);function jo(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ci(new Yi(1,1,1),new ha({name:`BackgroundCubeMaterial`,uniforms:sa(Do.backgroundCube.uniforms),vertexShader:Do.backgroundCube.vertexShader,fragmentShader:Do.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ko.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ao),l.material.toneMapped=W.getTransfer(i.colorSpace)!==Xe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ci(new aa(2,2),new ha({name:`BackgroundMaterial`,uniforms:sa(Do.background.uniforms),vertexShader:Do.background.vertexShader,fragmentShader:Do.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==Xe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Oo,da(e)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Mo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function No(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Po(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Io=4,Lo=6,Ro=20,zo=256,Bo=new $a,Vo=new G,Ho=null,Uo=0,Wo=0,Go=!1,Ko=new H,qo=new H,Jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ko}=i;Ho=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ts(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=es(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Uo,Wo),this._renderer.xr.enabled=Go,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Je,depthBuffer:!1},r=Xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yo(r)),this._blurMaterial=$o(r,e,t),this._ggxMaterial=Qo(r,e,t)}return r}_compileMaterial(e){let t=new ci(new Rr,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,r,i){let a=new Qa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Vo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Yi,new Xr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Vo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Zo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ts()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=es());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Zo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Io?n-d+Io:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Zo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Bo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Zo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Bo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Zo(t,3*l*(r>this._lodMax-Io?r-this._lodMax+Io:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Bo)}};function Yo(e){let t=[],n=[],r=e,i=e-Io+1+Lo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?qo.set(1,r,n):e===1?qo.set(-n,1,-r):e===2?qo.set(-n,r,1):e===3?qo.set(-1,r,-n):e===4?qo.set(-n,-1,r):qo.set(n,r,-1),qo.toArray(l,(e*6+t)*3)}}let u=new Rr;u.setAttribute(`position`,new Cr(c,3)),u.setAttribute(`outputDirection`,new Cr(l,3)),n.push(new ci(u,null)),r>Io&&r--}return{lodMeshes:n,sizeLods:t}}function Xo(e,t,n){let r=new rn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Zo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Qo(e,t,n){return new ha({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:zo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ns(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $o(e,t,n){return new ha({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ns(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function es(){return new ha({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ns(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ts(){return new ha({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ns(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rs=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Gi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),i=new ha({name:`CubemapFromEquirect`,uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new io(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function is(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new rs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Jo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Jo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function as(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function os(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Tr:wr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ss(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function cs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ls(e,t,n){let r=new WeakMap,i=new tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new an(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function us(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ds={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function fs(e,t,n,r,i,a){let o=new rn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Rr;l.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let u=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ci(l,u),f=new $a(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},W.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ds[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ps=new en,ms=new Ki(1,1),hs=new an,gs=new on,_s=new Gi,vs=[],ys=[],bs=new Float32Array(16),xs=new Float32Array(9),Ss=new Float32Array(4);function Cs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=vs[i];if(a===void 0&&(a=new Float32Array(i),vs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ws(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ts(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Es(e,t){let n=ys[t];n===void 0&&(n=new Int32Array(t),ys[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ws(n,t))return;e.uniform2fv(this.addr,t),Ts(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ws(n,t))return;e.uniform3fv(this.addr,t),Ts(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ws(n,t))return;e.uniform4fv(this.addr,t),Ts(n,t)}}function js(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ws(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ts(n,t)}else{if(ws(n,r))return;Ss.set(r),e.uniformMatrix2fv(this.addr,!1,Ss),Ts(n,r)}}function Ms(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ws(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ts(n,t)}else{if(ws(n,r))return;xs.set(r),e.uniformMatrix3fv(this.addr,!1,xs),Ts(n,r)}}function Ns(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ws(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ts(n,t)}else{if(ws(n,r))return;bs.set(r),e.uniformMatrix4fv(this.addr,!1,bs),Ts(n,r)}}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ws(n,t))return;e.uniform2iv(this.addr,t),Ts(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ws(n,t))return;e.uniform3iv(this.addr,t),Ts(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ws(n,t))return;e.uniform4iv(this.addr,t),Ts(n,t)}}function Rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ws(n,t))return;e.uniform2uiv(this.addr,t),Ts(n,t)}}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ws(n,t))return;e.uniform3uiv(this.addr,t),Ts(n,t)}}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ws(n,t))return;e.uniform4uiv(this.addr,t),Ts(n,t)}}function Hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ms.compareFunction=n.isReversedDepthBuffer()?518:515,a=ms):a=ps,n.setTexture2D(t||a,i)}function Us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||gs,i)}function Ws(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||_s,i)}function Gs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||hs,i)}function Ks(e){switch(e){case 5126:return Ds;case 35664:return Os;case 35665:return ks;case 35666:return As;case 35674:return js;case 35675:return Ms;case 35676:return Ns;case 5124:case 35670:return Ps;case 35667:case 35671:return Fs;case 35668:case 35672:return Is;case 35669:case 35673:return Ls;case 5125:return Rs;case 36294:return zs;case 36295:return Bs;case 36296:return Vs;case 35678:case 36198:case 36298:case 36306:case 35682:return Hs;case 35679:case 36299:case 36307:return Us;case 35680:case 36300:case 36308:case 36293:return Ws;case 36289:case 36303:case 36311:case 36292:return Gs}}function qs(e,t){e.uniform1fv(this.addr,t)}function Js(e,t){let n=Cs(t,this.size,2);e.uniform2fv(this.addr,n)}function Ys(e,t){let n=Cs(t,this.size,3);e.uniform3fv(this.addr,n)}function Xs(e,t){let n=Cs(t,this.size,4);e.uniform4fv(this.addr,n)}function Zs(e,t){let n=Cs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Qs(e,t){let n=Cs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function $s(e,t){let n=Cs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ec(e,t){e.uniform1iv(this.addr,t)}function tc(e,t){e.uniform2iv(this.addr,t)}function nc(e,t){e.uniform3iv(this.addr,t)}function rc(e,t){e.uniform4iv(this.addr,t)}function ic(e,t){e.uniform1uiv(this.addr,t)}function ac(e,t){e.uniform2uiv(this.addr,t)}function oc(e,t){e.uniform3uiv(this.addr,t)}function sc(e,t){e.uniform4uiv(this.addr,t)}function cc(e,t,n){let r=this.cache,i=t.length,a=Es(n,i);ws(r,a)||(e.uniform1iv(this.addr,a),Ts(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ms:ps;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function lc(e,t,n){let r=this.cache,i=t.length,a=Es(n,i);ws(r,a)||(e.uniform1iv(this.addr,a),Ts(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||gs,a[e])}function uc(e,t,n){let r=this.cache,i=t.length,a=Es(n,i);ws(r,a)||(e.uniform1iv(this.addr,a),Ts(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||_s,a[e])}function dc(e,t,n){let r=this.cache,i=t.length,a=Es(n,i);ws(r,a)||(e.uniform1iv(this.addr,a),Ts(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||hs,a[e])}function fc(e){switch(e){case 5126:return qs;case 35664:return Js;case 35665:return Ys;case 35666:return Xs;case 35674:return Zs;case 35675:return Qs;case 35676:return $s;case 5124:case 35670:return ec;case 35667:case 35671:return tc;case 35668:case 35672:return nc;case 35669:case 35673:return rc;case 5125:return ic;case 36294:return ac;case 36295:return oc;case 36296:return sc;case 35678:case 36198:case 36298:case 36306:case 35682:return cc;case 35679:case 36299:case 36307:return lc;case 35680:case 36300:case 36308:case 36293:return uc;case 36289:case 36303:case 36311:case 36292:return dc}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ks(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fc(t.type)}},hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function _c(e,t){e.seq.push(t),e.map[t.id]=t}function vc(e,t,n){let r=e.name,i=r.length;for(gc.lastIndex=0;;){let a=gc.exec(r),o=gc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){_c(n,l===void 0?new pc(s,e,t):new mc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new hc(s),_c(n,e)),n=e}}}var yc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);vc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function bc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var xc=37297,Sc=0;function Cc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var wc=new U;function Tc(e){W._getMatrix(wc,W.workingColorSpace,e);let t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Ye:return[t,`LinearTransferOETF`];case Xe:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ec(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Cc(e.getShaderSource(t),r)}return i}function Dc(e,t){let n=Tc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Oc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function kc(e,t){let n=Oc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ac=new H;function jc(){return W.getLuminanceCoefficients(Ac),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ac.x.toFixed(4)}, ${Ac.y.toFixed(4)}, ${Ac.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Mc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Fc).join(`
`)}function Nc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Pc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Fc(e){return e!==``}function Ic(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rc=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(e){return e.replace(Rc,Vc)}var Bc=new Map;function Vc(e,t){let n=K[t];if(n===void 0){let e=Bc.get(t);if(e!==void 0)n=K[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return zc(n)}var Hc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(e){return e.replace(Hc,Wc)}function Wc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Gc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Kc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function qc(e){return Kc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Jc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Yc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Jc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Xc={302:`ENVMAP_MODE_REFRACTION`};function Zc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Xc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Qc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function $c(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Qc[e.combine]||`ENVMAP_BLENDING_NONE`}function el(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function tl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=qc(n),l=Yc(n),u=Zc(n),d=$c(n),f=el(n),p=Mc(n),m=Nc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fc).join(`
`),_.length>0&&(_+=`
`)):(g=[Gc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Fc).join(`
`),_=[Gc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:kc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Dc(`linearToOutputTexel`,n.outputColorSpace),jc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Fc).join(`
`)),o=zc(o),o=Ic(o,n),o=Lc(o,n),s=zc(s),s=Ic(s,n),s=Lc(s,n),o=Uc(o),s=Uc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=bc(i,i.VERTEX_SHADER,y),S=bc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ec(i,x,`vertex`),n=Ec(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new yc(i,h),T=Pc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,xc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var nl=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new il(e),t.set(e,n)),n}},il=class{constructor(e){this.id=nl++,this.code=e,this.usedTimes=0}};function al(e){return e===1030||e===37490||e===36285}function ol(e,t,n,r,i,a){let o=new vn,s=new rl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Do[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&al(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Do[t];n=fa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new tl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function sl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function cl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ul(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||cl),r.length>1&&r.sort(t||ll),i.length>1&&i.sort(t||ll)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function dl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ul,e.set(t,[i])):n>=r.length?(i=new ul,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new G};break;case`SpotLight`:n={position:new H,direction:new H,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ml=0;function hl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gl(e){let t=new fl,n=pl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new sn,o=new sn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(hl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ml++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function _l(e){let t=new gl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function vl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new _l(e),t.set(n,[a])):r>=i.length?(a=new _l(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var yl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Sl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Cl=new sn,wl=new H,Tl=new H;function El(e,t,n){let r=new wi,i=new V,a=new V,o=new tn,s=new va,c=new ya,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:yl,fragmentShader:bl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rr;g.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ci(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new rn(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ki(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new rs(i.x),d.map.depthTexture=new qi(i.x,C)):(d.map=new rn(i.x,i.y),d.map.depthTexture=new Ki(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),wl.setFromMatrixPosition(l.matrixWorld),e.position.copy(wl),Tl.copy(e.position),Tl.add(xl[t]),e.up.copy(Sl[t]),e.lookAt(Tl),e.updateMatrixWorld(),n.makeTranslation(-wl.x,-wl.y,-wl.z),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new rn(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Dl(e,t){function n(){let t=!1,n=new tn,r=null,i=new tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ut[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new tn().fromArray(ae),ce=new tn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(j&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:ze}}function Ol(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):rt(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ye:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},he={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===M,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&be(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Co(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Co(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kl(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Al=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ji(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ha({vertexShader:Al,fragmentShader:jl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends dt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Ml,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new V,T=null,E=null,D=new Qa;D.viewport=new tn;let O=new Qa;O.viewport=new tn;let k=[D,O],A=new ao,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?M:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new Ki(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let se=new H,ce=new H;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,re=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ht*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new Qa,o.layers.enable(n),o.viewport=new tn,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ji,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new To;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Pl=new sn,Fl=new U;Fl.set(-1,0,0,0,1,0,0,0,1);function Il(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Pl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ll(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Rl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zl=null;function Bl(){return zl===null&&(zl=new di(Rl,16,16,ae,T),zl.name=`DFG_LUT`,zl.minFilter=h,zl.magFilter=h,zl.wrapS=u,zl.wrapT=u,zl.generateMipmaps=!1,zl.needsUpdate=!0),zl}var Vl=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new H,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ae=null,ce=null;this._outputColorSpace=qe;let le=0,ue=0,N=null,de=-1,fe=null,pe=new tn,me=new tn,he=null,ge=new G(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new tn(0,0,ve,ye),we=new tn(0,0,ve,ye),Te=!1,Ee=new wi,De=!1,Oe=!1,ke=new sn,Ae=new H,je=new tn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,L,ze,Be,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function at(){Ie=new as(P),Ie.init(),tt=new kl(P,Ie),Le=new Po(P,Ie,e,tt),F=new Dl(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ae=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new cs(P),I=new sl,L=new Ol(P,Ie,F,I,Le,tt,Re),ze=new is(j),Be=new Eo(P),nt=new Mo(P,Be),Ve=new os(P,Be,Re,nt),He=new us(P,Ve,Be,nt,Re),Ze=new ls(P,Le,L),Je=new Fo(I),Ue=new ol(j,ze,Ie,Le,nt,Je),We=new Il(j,I),Ge=new dl,Ke=new vl(Ie),Xe=new jo(j,ze,F,He,p,s),Ye=new El(j,He,Le),rt=new Ll(P,Re,Le,F),Qe=new No(P,Ie,Re),$e=new ss(P,Ie,Re),Re.programs=Ue.programs,j.capabilities=Le,j.extensions=Ie,j.properties=I,j.renderLists=Ge,j.shadowMap=Ye,j.state=F,j.info=Re}m!==1009&&(te=new fs(m,t.width,t.height,o,r,i));let st=new Nl(j,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){st.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,P.clearBufferiv(P.COLOR,0,b))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe.dispose(),Ge.dispose(),Ke.dispose(),I.dispose(),ze.dispose(),He.dispose(),nt.dispose(),rt.dispose(),Ue.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),ot(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){ot(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),I.remove(e)}function mt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Be.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),O=Ke.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),M!==null&&M.updateLights(O.state.lightsArray),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),De===!0&&Je.setGlobalState(this.clippingPlanes,t),M!==null&&Ye.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),O=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function B(e){gt&&gt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new To;yt.setAnimationLoop(B),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),O=Ke.get(e,A.length),O.init(t),O.state.textureUnits=L.getTextureUnits(),A.push(O),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,et,t.reversedDepth),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),w=Ge.get(e,k.length),w.init(),k.push(w),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),w.finish(),M!==null&&M.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(xe,Se),Ne=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ne&&Xe.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Je.beginShadows();let i=O.state.shadowsArray;if(Ye.render(i,e,t),De===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ne&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(w,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ne&&Xe.render(e),xt(w,e,t)}N!==null&&ue===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),nt.resetDefaultState(),de=-1,fe=null,A.pop(),A.length>0?(O=A[A.length-1],L.setTextureUnits(O.state.textureUnits),De===!0&&Je.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,M!==null&&M.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=He.update(e),a=e.material;a.visible&&w.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,je.z,s,t)}}else a.visible&&w.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),De===!0&&Je.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new rn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Xe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),De===!0&&Je.setGlobalState(j.clippingPlanes,r),Ct(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=yc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Me),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=O.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=Ot(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,L),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,L),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Bl()),C){if(T.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,be,ye,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}yc.upload(P,Et(v),E,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(yc.upload(P,Et(v),E,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Mt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await lt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ae),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return et}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}};function Hl(){return{uTime:{value:0},uMoonDir:{value:new H(.3,.7,.4).normalize()},uSunDir:{value:new H(.8,-.5,.1).normalize()},uSkyZenith:{value:new G(.01,.015,.04)},uSkyHorizon:{value:new G(.04,.06,.12)},uFogColor:{value:new G(.04,.06,.12)},uDawn:{value:0},uNight:{value:1},uLamps:{value:.6},uLightPos:{value:new H(0,-1e3,0)},uLightGlow:{value:0}}}function Ul(e){"@babel/helpers - typeof";return Ul=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ul(e)}function Wl(e,t){if(Ul(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ul(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Gl(e){var t=Wl(e,`string`);return Ul(t)==`symbol`?t:t+``}function J(e,t,n){return(t=Gl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Kl={low:{level:`low`,minPixelRatio:.6,maxPixelRatio:1,antialias:!1,shadows:!1,shadowMapSize:512,patchCell:7,corridorSegments:150,density:.5,starCount:2600,drawDistance:42e3},medium:{level:`medium`,minPixelRatio:.75,maxPixelRatio:1.5,antialias:!0,shadows:!0,shadowMapSize:1024,patchCell:5,corridorSegments:210,density:.8,starCount:4200,drawDistance:46e3},high:{level:`high`,minPixelRatio:1,maxPixelRatio:2,antialias:!0,shadows:!0,shadowMapSize:2048,patchCell:3.75,corridorSegments:280,density:1,starCount:6500,drawDistance:5e4}};function ql(){try{return window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>1}catch{return!1}}function Jl(e){let t=navigator,n=t.hardwareConcurrency||4,r=t.deviceMemory??4,i=ql(),a=Math.min(window.screen.width,window.screen.height)<600,o=``;try{if(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);o=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER)||``).toLowerCase()}}catch{o=``}return/(swiftshader|llvmpipe|software|mali-4|mali-t|adreno \(tm\) [3-5]\d\d|powervr|intel\(r\) hd graphics [2-5]\d{2,3})/.test(o)||r<=2||n<=2||i&&a?`low`:i?`medium`:n>=8&&r>=8?`high`:`medium`}var Yl=class{constructor(e,t){J(this,`renderer`,void 0),J(this,`profile`,void 0),J(this,`avg`,16.7),J(this,`timer`,0),J(this,`current`,void 0),this.renderer=e,this.profile=t,this.current=Math.min(window.devicePixelRatio||1,t.maxPixelRatio),this.renderer.setPixelRatio(this.current)}get pixelRatio(){return this.current}setProfile(e){this.profile=e,this.current=Math.min(window.devicePixelRatio||1,e.maxPixelRatio),this.renderer.setPixelRatio(this.current),this.timer=0}update(e){if(e<=0||e>250||(this.avg+=(e-this.avg)*.05,this.timer+=e,this.timer<1500))return;this.timer=0;let t=Math.min(window.devicePixelRatio||1,this.profile.maxPixelRatio),n=this.current;this.avg>24?n=Math.max(this.profile.minPixelRatio,this.current-.1):this.avg<14&&this.current<t&&(n=Math.min(t,this.current+.05)),Math.abs(n-this.current)>.001&&(this.current=n,this.renderer.setPixelRatio(n))}},Xl={quality:`auto`,soundEnabled:!0,volume:.5,reducedMotion:`system`,lookSensitivity:1,invertY:!1,hotspots:!0,textScale:1,arabicCaptions:!0,pace:1,continueMode:`wait`,lightStyle:`figure`,laterBuildings:!1,seenHelp:!1},Zl=`night-journey-al-isra.settings.v1`;function Ql(){let e={...Xl};try{let t=window.localStorage.getItem(Zl);if(!t)return e;let n=JSON.parse(t);(n.quality===`auto`||n.quality===`low`||n.quality===`medium`||n.quality===`high`)&&(e.quality=n.quality),typeof n.soundEnabled==`boolean`&&(e.soundEnabled=n.soundEnabled),typeof n.volume==`number`&&isFinite(n.volume)&&(e.volume=Math.min(1,Math.max(0,n.volume))),(n.reducedMotion===`system`||n.reducedMotion===`on`||n.reducedMotion===`off`)&&(e.reducedMotion=n.reducedMotion),typeof n.lookSensitivity==`number`&&isFinite(n.lookSensitivity)&&(e.lookSensitivity=Math.min(2,Math.max(.4,n.lookSensitivity))),typeof n.invertY==`boolean`&&(e.invertY=n.invertY),typeof n.hotspots==`boolean`&&(e.hotspots=n.hotspots),typeof n.textScale==`number`&&isFinite(n.textScale)&&(e.textScale=Math.min(1.4,Math.max(1,n.textScale))),typeof n.arabicCaptions==`boolean`&&(e.arabicCaptions=n.arabicCaptions),(n.pace===1||n.pace===.75)&&(e.pace=n.pace),(n.continueMode===`wait`||n.continueMode===`auto`)&&(e.continueMode=n.continueMode),(n.lightStyle===`figure`||n.lightStyle===`point`)&&(e.lightStyle=n.lightStyle),typeof n.laterBuildings==`boolean`&&(e.laterBuildings=n.laterBuildings),typeof n.seenHelp==`boolean`&&(e.seenHelp=n.seenHelp)}catch{}return e}function $l(e){try{window.localStorage.setItem(Zl,JSON.stringify(e))}catch{}}function eu(){try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function tu(e){return e.reducedMotion===`on`||e.reducedMotion!==`off`&&eu()}var nu=class{constructor(){J(this,`removers`,[])}add(e,t,n,r){e.addEventListener(t,n,r),this.removers.push(()=>e.removeEventListener(t,n,r))}removeAll(){for(;this.removers.length;)this.removers.pop()()}},ru=Math.PI*2,iu=Math.PI/180;function au(e,t,n){return e<t?t:e>n?n:e}function ou(e){return e<0?0:e>1?1:e}function su(e,t,n){return e+(t-e)*n}function Y(e,t,n){let r=ou((n-e)/(t-e));return r*r*(3-2*r)}function cu(e){return-(Math.cos(Math.PI*ou(e))-1)/2}function lu(e,t,n,r){return su(e,t,1-Math.exp(-n*r))}function uu(e){return e=(e+Math.PI)%ru,e<0&&(e+=ru),e-Math.PI}function du(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fu=[`hour`,`light`,`lightPath`,`ascend`,`trail`,`trailAnchor`,`stars`,`moonlight`,`lamps`,`haze`,`glow`];function pu(){return{hour:22.5,light:0,lightPath:0,ascend:0,trail:0,trailAnchor:0,stars:.5,moonlight:1,lamps:.6,haze:.2,glow:0}}function mu(e,t){for(let n of fu)e[n]=t[n];return e}function hu(e,t,n,r){for(let i of fu)e[i]=t[i]+(n[i]-t[i])*r;return e}var gu=class{constructor(e){J(this,`tracks`,[]);let t=[...e].sort((e,t)=>e.t-t.t);for(let e of fu){let n=[],r=[];for(let i of t){let t=i[e];typeof t==`number`&&(n.push(i.t),r.push(t))}if(n.length===0)throw Error(`EnvTimeline: key "${e}" has no keyframe (t=0 must be complete)`);this.tracks.push({key:e,t:Float64Array.from(n),v:Float64Array.from(r),m:_u(n,r)})}}evaluate(e,t){let n=ou(e);for(let e of this.tracks)t[e.key]=vu(e,n);return t}};function _u(e,t){let n=e.length,r=new Float64Array(n);if(n<2)return r;let i=[];for(let r=0;r<n-1;r++){let n=e[r+1]-e[r];i.push(n>0?(t[r+1]-t[r])/n:0)}r[0]=0,r[n-1]=0;for(let e=1;e<n-1;e++)i[e-1]*i[e]<=0?r[e]=0:r[e]=2*i[e-1]*i[e]/(i[e-1]+i[e]);return r}function vu(e,t){let{t:n,v:r,m:i}=e,a=n.length;if(a===1||t<=n[0])return r[0];if(t>=n[a-1])return r[a-1];let o=0;for(;o<a-2&&t>n[o+1];)o++;let s=n[o+1]-n[o];if(s<=0)return r[o+1];let c=(t-n[o])/s,l=c*c,u=l*c,d=2*u-3*l+1,f=u-2*l+c,p=-2*u+3*l,m=u-l;return d*r[o]+f*s*i[o]+p*r[o+1]+m*s*i[o+1]}var yu=-21.7*iu,bu=12e3,xu={x:Math.sin(yu),z:-Math.cos(yu)},Su={x:-xu.z,z:xu.x};function Cu(e,t){return e*xu.x+t*xu.z}function wu(e,t){return e*Su.x+t*Su.z}function Tu(e,t){return[xu.x*e+Su.x*t,xu.z*e+Su.z*t]}var Eu={yaw:45*iu,halfX:5,halfZ:6,height:12};function Du(e,t){let n=Math.cos(Eu.yaw),r=Math.sin(Eu.yaw);return[e*n+t*r,-e*r+t*n]}function Ou(e,t){let n=Math.cos(Eu.yaw),r=Math.sin(Eu.yaw);return[e*n-t*r,e*r+t*n]}var ku={center:[0,-Eu.halfZ+.4],innerRadius:7.4,thickness:1.3,height:1.3,from:14*iu,to:166*iu},Au=(()=>{let[e,t]=Du(0,-Eu.halfZ-3.6);return{x:e,z:t}})(),ju={x:17.5,z:7,radius:1.5},Mu=[10,62,118,172,214,262,318].map(e=>e*iu),Nu={x:0,z:0,radius:300},Pu={x:xu.x*bu,z:xu.z*bu},X={y:440,yaw:5*iu,halfU:150,halfV:238,wall:6,parapet:1.1};function Fu(e,t){let n=e-Pu.x,r=t-Pu.z,i=Math.cos(X.yaw),a=Math.sin(X.yaw);return[n*i-r*a,n*a+r*i]}function Iu(e,t){let n=Math.cos(X.yaw),r=Math.sin(X.yaw);return[Pu.x+e*n+t*r,Pu.z-e*r+t*n]}function Lu(e,t){let n=Math.abs(e)-X.halfU,r=Math.abs(t)-X.halfV;return Math.hypot(Math.max(n,0),Math.max(r,0))+Math.min(Math.max(n,r),0)}var Ru={v:-40,halfWidth:7,length:110},zu={u:-14,v:-40,rx:9.5,rz:7,height:1.7},Bu={u:4,v:150},Vu={x:Pu.x,z:Pu.z,radius:520},Hu=(()=>{let[e,t]=Tu(6800,950);return{x:e,z:t,radius:260,top:62}})(),Uu={x:Hu.x,z:Hu.z,radius:230},Wu=[{x:0,z:0,half:720},{x:Pu.x,z:Pu.z,half:820},{x:Hu.x,z:Hu.z,half:380}];function Gu(e,t,n=0){for(let r of Wu)if(Math.abs(e-r.x)<r.half-n&&Math.abs(t-r.z)<r.half-n)return!0;return!1}var Ku=`هذا النور الهادئ رمز اختاره هذا الموقع. وليس صورة لأحد، ولا وجه له ولا ملامح جسدية، وليس ادعاءً بأن الآية (الإسراء: ١) تصف النبي ﷺ بأنه نور — فالآية لا تقول ذلك.`,qu=`في نحو سنة ٦٢٠م كانت الساحة الكبرى المسوَّرة في القدس خالية في معظمها وخرِبة. ولم يكن عليها بعدُ بناء مسجد: فبعد سنة ٦٣٨م بُني عليها مسجد بسيط، واكتمل بناء قبة الصخرة سنة ٦٩١–٦٩٢م (سنة ٧٢هـ، بحسب نقشها نفسه)، ثم تلاه أول مسجد أقصى كبير في أوائل القرن الثامن الميلادي.`,Ju=[`سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ`,`لَيْلًا`,`مِنَ الْمَسْجِدِ الْحَرَامِ`,`إِلَى الْمَسْجِدِ الْأَقْصَى`,`الَّذِي بَارَكْنَا حَوْلَهُ`,`لِنُرِيَهُ مِنْ آيَاتِنَا`,`إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ`],Yu={phrases:Ju,sources:{"bukhari-349":{cite:`صحيح البخاري ٣٤٩`,detail:`كتاب الصلاة، أول حديث فيه؛ من رواية أبي ذر. يروي النبي ﷺ أن سقف بيته في مكة فُتح، وغُسل صدره بماء زمزم، وعُرج به إلى السماوات حيث فُرضت الصلاة.`},"bukhari-3886":{cite:`صحيح البخاري ٣٨٨٦`,detail:`كتاب مناقب الأنصار؛ من رواية جابر بن عبد الله. لما كذّبته قريش أظهر الله له بيت المقدس فوصفه لهم.`},"bukhari-3887":{cite:`صحيح البخاري ٣٨٨٧`,detail:`كتاب مناقب الأنصار؛ من رواية أنس بن مالك عن مالك بن صعصعة. الرواية الطويلة للإسراء والمعراج، وتبدأ والنبي ﷺ مضطجع في الحطيم (الحِجر).`},"bukhari-3888":{cite:`صحيح البخاري ٣٨٨٨`,detail:`كتاب مناقب الأنصار؛ ابن عباس في تفسير الآية (الإسراء: ٦٠): ما أُري النبي ﷺ ليلة أُسري به إلى بيت المقدس كان مشاهدة حقيقية بالعين، لا منامًا.`},"bukhari-4709":{cite:`صحيح البخاري ٤٧٠٩`,detail:`كتاب التفسير، سورة الإسراء؛ من رواية أبي هريرة. عُرض عليه في بيت المقدس ليلة الرحلة قدحان من خمر ولبن، فأخذ اللبن.`},"muslim-162a":{cite:`صحيح مسلم ١٦٢`,detail:`كتاب الإيمان؛ من رواية أنس بن مالك. البراق؛ يربطه النبي ﷺ في بيت المقدس بالحلقة التي كان يستعملها الأنبياء، ويصلي في المسجد ركعتين، ويختار اللبن، ثم يُعرج به إلى السماوات.`},"muslim-172":{cite:`صحيح مسلم ١٧٢`,detail:`كتاب الإيمان؛ من رواية أبي هريرة. لما سألته قريش عن بيت المقدس أُري إياه؛ ورأى كذلك الأنبياء السابقين يصلّون، ولما حانت الصلاة أمّهم.`},"muslim-173":{cite:`صحيح مسلم ١٧٣`,detail:`كتاب الإيمان؛ من رواية عبد الله. ليلة الرحلة انتُهي بالنبي ﷺ إلى سدرة المنتهى، ويربطها الراوي بالآية (النجم: ١٦).`},"muslim-177a":{cite:`صحيح مسلم ١٧٧`,detail:`كتاب الإيمان؛ يروي مسروق عن عائشة أن النبي ﷺ فسّر ما رآه في الآية (النجم: ١٣) بأنه جبريل عليه السلام في صورته الحقيقية.`},tabari:{cite:`الطبري، جامع البيان`,detail:`تفسير القرآن لمحمد بن جرير الطبري (ت ٩٢٣م)، عند الآية (الإسراء: ١).`},"ibn-kathir":{cite:`ابن كثير، تفسير القرآن العظيم`,detail:`تفسير القرآن لإسماعيل بن كثير (ت ١٣٧٣م)، عند الآية (الإسراء: ١).`},zamakhshari:{cite:`الزمخشري، الكشاف`,detail:`تفسير القرآن لمحمود الزمخشري (ت ١١٤٤م)، عند الآية (الإسراء: ١).`},"ibn-ishaq":{cite:`ابن إسحاق، سيرة رسول الله`,detail:`السيرة النبوية المبكرة لمحمد بن إسحاق (ت نحو ٧٦٧م)، بتهذيب ابن هشام؛ والترجمة الإنجليزية لـ أ. غيوم بعنوان The Life of Muhammad (١٩٥٥)، فصول الإسراء والمعراج.`},"history-haram":{cite:`تاريخ المسجد الحرام`,detail:`الروايات التاريخية المعتمدة عن مكة وحرمها، بدءًا بكتاب «أخبار مكة» للأزرقي (القرن التاسع الميلادي): إعادة قريش بناء الكعبة في نحو سنة ٦٠٥م، وأول تسوير للحرم في عهد الخليفة عمر سنة ١٧هـ / ٦٣٨م.`},"history-jerusalem":{cite:`تاريخ حرم القدس`,detail:`الدراسات التاريخية والأثرية عن القدس: الساحة التي بُنيت في عهد هيرودس؛ والتدمير سنة ٧٠م؛ والحكم الساساني منذ سنة ٦١٤م وعودة البيزنطيين في نحو سنة ٦٣٠م؛ وقبة الصخرة المؤرَّخة بنقشها نفسه بسنة ٧٢هـ (٦٩١–٦٩٢م)؛ وأول مسجد أقصى كبير في أوائل القرن الثامن الميلادي.`}},sourceKinds:{quran:{label:`قرآن`,description:`كلمات الآية من نص تنزيل الموثَّق، كما هي حرفًا بحرف، مع الإشارة إلى موضعها.`},summary:{label:`ما تقوله الآية`,description:`إعادة صياغة بسيطة للآية المشار إليها، دون إضافة شيء إليها.`},hadith:{label:`حديث`,description:`صياغة بالمعنى لرواية في أحد كتب الحديث، مع ذكر الكتاب ورقم الحديث. وليست من الآية.`},commentary:{label:`تفسير`,description:`رأي مفسر مسمّى للقرآن، أو رواية من السيرة النبوية المبكرة. وليس من الآية.`},history:{label:`تاريخ`,description:`معلومات تاريخية وأثرية عن الأماكن. وليست من الآية.`},reconstruction:{label:`إعادة بناء فنية`,description:`اختيار صُنع لهذه التجربة — المشهد والمباني والنور والسماء والصوت — وليس سجلًّا للحدث.`}},chapters:{makkah:{title:`الليل في مكة`,subtitle:`﴿سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ﴾`,short:`مكة`,cues:{m1:`مكة ليلًا، في نحو سنة ٦٢٠م. الوادي والبيوت والحرم إعادة بناء فنية؛ والآية لا تصفها.`,m2:Ju[0],m3:`تبدأ الآية بتسبيح الله، وتعرض الرحلة على أنها فعله: هو الذي أسرى بعبده. ولا تذكر اسم العبد.`,m4:`تروي الأحاديث الرحلة بلسان النبي محمد ﷺ نفسه. ففي صحيح البخاري ٣٨٨٧ بدأت الليلة وهو مضطجع في الحطيم (الحِجر) بجوار الكعبة، وفي صحيح البخاري ٣٤٩ كان في بيته بمكة.`,m5:Ku}},departure:{title:`من المسجد الحرام`,subtitle:`المسجد الحرام`,short:`الانطلاق`,cues:{d1:Ju[2],d2:`كان المسجد الحرام في زمن النبي ﷺ الساحة المكشوفة حول الكعبة، تحيط بها البيوت من قرب. ويُنسب أول جدار له إلى الخليفة عمر سنة ١٧هـ (٦٣٨م).`,d3:`يذكر الطبري الروايات المختلفة في موضع بدء الرحلة — الحرم نفسه أو بيت في مكة. ويشير المفسرون إلى أن الحرم كله يمكن أن يسمى المسجد الحرام.`,d4:`تصف الأحاديث (صحيح البخاري ٣٨٨٧، صحيح مسلم ١٦٢) البراق: دابة بيضاء للركوب، أكبر من الحمار وأصغر من البغل، تبلغ خطوته مدى بصره. ولا يُعرض هنا.`,d5:`النور الصاعد من الحِجر رمز هادئ لبداية الرحلة — لا تصوير لكيفية وقوعها.`}},journey:{title:`ليلًا`,subtitle:`الرحلة`,short:`ليلًا`,cues:{n1:Ju[1],n2:`الفعل «أسرى» يدل بنفسه على السير بالمرء ليلًا. ويبيّن الزمخشري أن زيادة كلمة «ليلًا» بصيغة التنكير تدل على أن الرحلة استغرقت بعض ليلة واحدة.`,n3:`بين مكة والقدس نحو ١٢٤٠ كيلومترًا في خط مستقيم، عبر الجبال والحرّات والصحارى.`,n4:`في سيرة ابن إسحاق، تعترض قريش بأن القافلة كانت تحتاج شهرًا لتبلغ الشام وشهرًا لتعود — وهو يتحدث عن ليلة واحدة.`,n5:`الأرض في الأسفل مختصرة ورمزية: تقع القدس في اتجاهها الحقيقي من مكة، لكن على نحو جزء من مئة من المسافة الحقيقية. ولا تُعرض أي محطات في الطريق.`,n6:`تذكر الآية زمن الرحلة — ليلًا — ومكانيها. ولا تقول شيئًا عن الطريق بينهما.`}},aqsa:{title:`إلى المسجد الأقصى`,subtitle:`المسجد الأقصى`,short:`الأقصى`,cues:{a1:Ju[3],a2:`يرى مفسرون مسلمون كالطبري وابن كثير أن المسجد الأقصى، أي «أبعد المساجد»، هو حرم القدس (بيت المقدس)، كما تذكر الأحاديث التي تصف الرحلة.`,a3:`في نحو سنة ٦٢٠م كانت الساحة الكبرى خالية في معظمها وخرِبة. ولم يكن عليها بعدُ بناء مسجد: فقد اكتمل بناء قبة الصخرة سنة ٦٩١–٦٩٢م، وتلاه أول مسجد أقصى كبير في أوائل القرن الثامن الميلادي.`,a4:`في صحيح مسلم ١٦٢ يروي النبي ﷺ أنه أوثق دابته عند الحلقة التي كان الأنبياء عليهم السلام يستعملونها، ثم صلى ركعتين في المسجد. وفي صحيح مسلم ١٧٢ أنه رأى الأنبياء السابقين يصلّون، وأمّهم.`,a5:`في صحيح البخاري ٤٧٠٩ أنه عُرض عليه في بيت المقدس قدح من خمر وقدح من لبن، فاختار اللبن؛ فقال جبريل عليه السلام إنه هُدي إلى الفطرة.`}},blessed:{title:`الذي باركنا حوله`,subtitle:`الأرض المباركة`,short:`الأرض المباركة`,cues:{b1:Ju[4],b2:`يفسّر الطبري هذه البركة بأنها لمن يسكنون حوله — في معايشهم وزروعهم وأشجارهم.`,b3:`يصف ابن كثير بيت المقدس بأنه موطن الأنبياء منذ عهد إبراهيم عليه السلام.`,b4:`تكسو بساتين الزيتون التلال هنا صورةً لتلك البركة. والأشجار والمدرّجات والمدينة إعادة بناء فنية.`,b5:`تقول الآية إن الله بارك حول المسجد الأقصى. ولا تعدّد هذه البركات.`}},signs:{title:`لنريه من آياتنا`,subtitle:`الآيات`,short:`الآيات`,cues:{s1:Ju[5],s2:`تذكر الآية غاية الرحلة: أن يُريه الله بعض آياته. ولا تقول ما هي.`,s3:`تمضي الأحاديث فتصف عروجًا عبر السماوات السبع (المعراج): يسلّم النبي ﷺ على الأنبياء السابقين، ويُرفع إلى سدرة المنتهى، وتُفرض الصلوات اليومية — خمسًا في النهاية (صحيح البخاري ٣٨٨٧ و٣٤٩).`,s4:`عِنْدَ سِدْرَةِ الْمُنْتَهَىٰ`,s5:`هذا المقطع من سورة أخرى (النجم: ١٣–١٨)، لا من (الإسراء: ١). ويربط كثير من المفسرين تلك الآيات بليلة المعراج، كما في رواية صحيح مسلم ١٧٣.`,s6:`السماء المعروضة هي سماء الليل المعتادة. ولا تمثّل أي صورة هنا السماوات ولا ما تصفه الأحاديث.`}},return:{title:`السميع البصير`,subtitle:`العودة إلى مكة قبل الفجر`,short:`العودة`,cues:{r1:`في سيرة ابن إسحاق يعود النبي ﷺ إلى مكة قبل الصباح ويحدّث الناس برحلته.`,r2:`في صحيح البخاري ٣٨٨٦ يروي النبي ﷺ أنه لما كذّبته قريش أظهر الله له بيت المقدس أمام عينيه، فوصفه لهم وهو يراه.`,r3:`في سيرة ابن إسحاق يصدّق أبو بكر الخبر في الحال، ويُعرف بالصدّيق — «الذي يصدّق بالحق».`,r4:Ju[6],r5:`تذكر الآية بداية الرحلة ونهايتها، وزمنها وغايتها، وتُختم بتسمية الله السميع البصير.`,r6:`يطلع الفجر على مكة. وما جرى تلك الليلة معروف من الآية والروايات؛ وهذه التجربة تأمّل فيها، لا سجلّ لها.`}}},objects:{kaaba:{name:`الكعبة`,sections:{history:`تقوم الكعبة في وسط الحرم. وتذكر المصادر الإسلامية أن قريشًا أعادت بناءها قبل البعثة بسنوات قليلة، في نحو سنة ٦٠٥م، وتركت جزءًا من أساسها الأصلي خارجها — وهو الموضع الذي يحيط به جدار الحِجر المنخفض.`,start:`في صحيح البخاري ٣٨٨٧ يروي النبي ﷺ أن ليلة الرحلة بدأت وهو مضطجع في الحطيم بجوار الكعبة.`,shown:`يُعرض حجمها وكسوتها الداكنة وبابها المرتفع عن الأرض ببساطة. وقد تغيّر لون الكسوة ونقشها عبر القرون؛ والحزام المطرّز بالذهب الذي يُرى اليوم متأخر كثيرًا.`}},hijr:{name:`الحِجر (الحطيم)`,sections:{report:`في صحيح البخاري ٣٨٨٧ يذكر النبي ﷺ أن الليلة بدأت وهو مضطجع في الحطيم أو الحِجر. وفي صحيح البخاري ٣٤٩ يذكر أن سقف بيته في مكة انفتح. والروايتان كلتاهما مذكورتان هنا؛ ووُضع النور في هذا الموضع بناءً على الأولى.`,history:`يحدّد الجدار المنخفض نصف الدائري بجوار الكعبة أرضًا كانت من أساسها الأصلي، لكنها تُركت خارجها حين أعادت قريش بناءها.`,shown:`ارتفاع الجدار وسُمكه إعادة بناء.`}},zamzam:{name:`بئر زمزم`,sections:{report:`في صحيح البخاري ٣٤٩، من رواية أبي ذر، يروي النبي ﷺ أنه قبل أن يُعرج به شُقّ صدره وغُسل بماء زمزم ومُلئ حكمةً وإيمانًا.`,history:`تقع البئر على مسافة قصيرة شرق الكعبة. وحافتها الحجرية وإطارها الخشبي البسيط هنا إعادة بناء.`}},sanctuary:{name:`المسجد الحرام`,sections:{verse:Ju[2],history:`كان الحرم في زمن النبي ﷺ الساحة المكشوفة حول الكعبة، تحيط بها البيوت من قرب. ويُنسب أول جدار له إلى الخليفة عمر الذي وسّعه سنة ١٧هـ (٦٣٨م)؛ ولم تكن الأروقة التي بُنيت في القرون اللاحقة موجودة.`,commentary:`يذكر الطبري الروايات المختلفة في موضع بدء الرحلة. ويشير المفسرون إلى أن حرم مكة كله يمكن أن يسمى المسجد الحرام.`,shown:`أُغفلت عدة معالم من ذلك الزمن — منها الأصنام التي تذكر المصادر الإسلامية أنها كانت حول الكعبة حتى فتح مكة سنة ٦٣٠م — ولا يُعرض أي إنسان.`}},makkah:{name:`مكة`,sections:{history:`تقع مكة في وادٍ ضيق جاف بين جبال من الغرانيت، ويقع جبل أبي قبيس شرق الحرم. وكانت في نحو سنة ٦٢٠م بلدة لقريش، تعيش على التجارة وعلى الحج إلى الكعبة.`,date:`لا يحدّد القرآن تاريخ الرحلة. ويجعلها ابن إسحاق في مكة، قبل الهجرة إلى المدينة؛ ويذكر العلماء بعده تواريخ مختلفة. ويُحتفى بالسابع والعشرين من رجب على نطاق واسع، لكنه رأي واحد من عدة آراء.`,shown:`البيوت والأزقة والسُّرُج والجبال إعادة بناء فنية؛ وعددها وأشكالها متخيَّلة.`}},"night-sky":{name:`سماء الليل`,sections:{verse:Ju[1],summary:`تقول الآية إن الرحلة كانت ليلًا. ولا تصف السماء ولا القمر ولا نجوم تلك الليلة.`,shown:`تدور النجوم ببطء مع مرور الساعات. وطور القمر ومساره اختيار فني، لا ادعاء عن تلك الليلة.`}},light:{name:`عن هذا النور`,sections:{symbol:`هذا النور الهادئ رمز يراعي حرمة المقام، اختاره هذا الموقع. يدل على موضع الرحلة في المشهد دون تصوير النبي ﷺ: لا وجه له ولا ملامح جسدية.`,verse:`تسمّيه الآية (الإسراء: ١) ﴿بِعَبْدِهِ﴾ ولا تصف هيئته. والنور ليس ادعاءً بأن الآية تصفه بأنه نور.`,choice:`سطوعه ولونه وحركته اختيارات فنية. ويمكنك من الإعدادات أن تعرضه نقطةَ ضوء صغيرة فقط.`}},journey:{name:`الإسراء ليلًا`,sections:{verse:`سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا`,awake:`في صحيح البخاري ٣٨٨٨ يقول ابن عباس، في تفسير الآية (الإسراء: ٦٠)، إن ما أُري النبي ﷺ ليلة أُسري به إلى بيت المقدس كان مشاهدةً حقيقيةً بالعين، لا منامًا.`,views:`يرى أكثر علماء المسلمين أن الرحلة كانت بالجسد والروح، في اليقظة. وتذكر سيرة ابن إسحاق أيضًا رأي بعض المسلمين الأوائل أنها كانت رؤيا.`,shown:`مسار النور وارتفاعه ووجهته رمزية. والمسافات مختصرة نحو مئة ضعف.`}},desert:{name:`الطريق شمالًا`,sections:{history:`بين مكة والقدس جبال الحجاز، وحرّات واسعة، وصحارى وبوادٍ — نحو ١٢٤٠ كيلومترًا في خط مستقيم.`,caravan:`في سيرة ابن إسحاق تقول قريش إن القافلة كانت تحتاج شهرًا لتبلغ الشام وشهرًا لتعود.`,shown:`هذه الأرض مختصرة ورمزية، وليست خريطة. والربوة التي تقف عليها متخيَّلة.`}},aqsa:{name:`المسجد الأقصى`,sections:{verse:Ju[3],identity:`يرى مفسرون كالطبري وابن كثير أن المسجد الأقصى هو حرم القدس، بيت المقدس. وكلمة «مسجد» تعني موضع السجود؛ ولا تقتضي وجود بناء.`,history:qu,prayer:`في صحيح مسلم ١٦٢ يروي النبي ﷺ أنه أوثق دابته عند الحلقة التي كان الأنبياء عليهم السلام يستعملونها، وصلى في المسجد ركعتين؛ وفي صحيح مسلم ١٧٢ أنه أمّ الأنبياء السابقين في الصلاة.`,shown:`الأسوار والأطلال والشجيرات والبوابة إعادة بناء فنية لحال الساحة في نحو سنة ٦٢٠م. ولا يُحدَّد الموضع الذي صلى فيه بالضبط.`}},rock:{name:`الصخرة`,sections:{history:`نتوء طبيعي من الصخر الأصلي قرب وسط الساحة. وبُنيت فوقه قبة الصخرة التي اكتملت سنة ٦٩١–٦٩٢م.`,tradition:`تربط روايات إسلامية متأخرة الصخرة بالمعراج. ولا تذكر الأحاديث المذكورة هنا (صحيح البخاري ٣٨٨٧، صحيح مسلم ١٦٢) الموضع الذي بدأ منه.`}},jerusalem:{name:`القدس في نحو سنة ٦٢٠م`,sections:{history:`كانت القدس آنذاك مدينة مسوّرة فيها كنائس وأديرة وبيوت. وقد استولى عليها الفرس الساسانيون سنة ٦١٤م، واستعادها الإمبراطور البيزنطي هرقل في نحو سنة ٦٣٠م.`,described:`في صحيح البخاري ٣٨٨٦ يروي النبي ﷺ أنه لما كذّبته قريش أظهر الله له بيت المقدس، فوصفه لهم.`,shown:`البيوت والكنائس العامة وسور المدينة إعادة بناء فنية؛ ولا يحاكي أي بناء بناءً حقيقيًا.`}},olives:{name:`ما حوله من البركة`,sections:{verse:Ju[4],tabari:`يفسّر الطبري البركة بأنها لمن حوله من الناس، في معايشهم وزروعهم وأشجارهم.`,ibnKathir:`يصف ابن كثير بيت المقدس بأنه موطن الأنبياء منذ عهد إبراهيم عليه السلام.`,shown:`بساتين الزيتون على جبل الزيتون وفي الأودية صورة لتلك البركة؛ وامتدادها اختيار فني.`}},"later-buildings":{name:`بُني لاحقًا (مخططات)`,sections:{history:`تُظهر هذه المخططات مباني قائمة على الساحة اليوم لكنها لم تكن موجودة ليلة الرحلة: قبة الصخرة التي اكتملت سنة ٦٩١–٦٩٢م في عهد الخليفة الأموي عبد الملك، والمسجد الأقصى الذي بُني أول مرة على نطاق واسع في أوائل القرن الثامن الميلادي.`,shown:`تُعرض خطوطًا باهتة فقط وبأحجام تقريبية، لتساعدك على معرفة طريقك. ويمكنك إخفاؤها من الإعدادات.`}},ascension:{name:`المعراج`,sections:{verse:Ju[5],miraj:`تصف الأحاديث (صحيح البخاري ٣٨٨٧، صحيح مسلم ١٦٢، صحيح البخاري ٣٤٩) عروجًا عبر السماوات السبع: في كل سماء يسلّم النبي ﷺ على أنبياء سابقين؛ ويُرفع إلى سدرة المنتهى؛ وتُفرض الصلوات اليومية، خمسين ثم تُخفَّف إلى خمس.`,najm:`لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ`,connection:`هذه هي الآية (النجم: ١٨) من سورة النجم — لا من (الإسراء: ١). ويربط كثير من المفسرين (النجم: ١٣–١٨) بليلة المعراج، كما يفعل صحيح مسلم ١٧٣ في شأن سدرة المنتهى. وروت عائشة أن النبي ﷺ فسّر ما رآه في (النجم: ١٣) بأنه جبريل عليه السلام في صورته الحقيقية (صحيح مسلم ١٧٧).`,shown:`لا شيء هنا يصوّر السماوات. والنور الصاعد وسماء الليل المعتادة رموز فحسب.`}}}},Xu={app:{title:`الإسراء`,documentTitle:`الإسراء — تجربة قرآنية ثلاثية الأبعاد`,titleAr:`الإسراء`,tagline:`الإسراء — تجربة قرآنية ثلاثية الأبعاد`,loading:{title:`تهيئة الليل`,renderer:`تشغيل محرك العرض`,terrain:`تشكيل الأرض`,makkah:`بناء مكة`,jerusalem:`بناء القدس`,vegetation:`غرس بساتين الزيتون`,light:`رسم مسار النور`,sky:`وضع النجوم`,audio:`تجهيز الصوت`,shaders:`تجهيز المظلِّلات`,ready:`جاهز`},toasts:{edge:`لقد بلغت حافة هذه المنطقة. استعمل شريط الرحلة للانتقال إلى مكان آخر.`,qualityReload:`تتغير تفاصيل الأرض والمباني بعد إعادة تحميل الصفحة.`,audioBlocked:`المتصفح يمنع الصوت. انقر في أي مكان لتفعيله.`,soundOn:`تشغيل الصوت`,soundOff:`إيقاف الصوت`,chapterEnded:`خذ وقتك، وتابع حين تكون مستعدًا.`}},intro:{kicker:`تجربة قرآنية ثلاثية الأبعاد`,lead:`تأمّل هادئ تفاعلي في إسراء النبي محمد ﷺ كما ورد في الآية الأولى من سورة الإسراء: من المسجد الحرام في مكة إلى المسجد الأقصى في القدس، ليلًا.`,verseTitle:`القرآن (الإسراء: ١)`,verseCite:`— {ref}، مع التفسير الميسر`,legendTitle:`كيف تقرأ ما تراه`,depiction:`احترامًا للنبي ﷺ لا يُصوَّر أبدًا. ويدل على الرحلة نور هادئ بلا وجه ولا ملامح — وهو رمز فني، وليس ادعاءً بأن الآية تصفه بأنه نور.`,distinction:`الآية وحدها هي القرآن. أما التفاصيل المأخوذة من الحديث والمفسرين والتاريخ وإعادة البناء الفنية فهي معنونة بذلك حيثما ظهرت.`,begin:`ابدأ الرحلة الموجَّهة`,beginHint:`سبعة فصول، نحو ٩ دقائق — يمكنك الإيقاف في أي وقت`,explore:`تجوّل بهدوء`,exploreHint:`امشِ في مكة، وعلى الطريق، وفي القدس`,chapters:`الفصول`,verse:`الآية`,sources:`المصادر`,settings:`الإعدادات`,controls:`التحكم`,about:`عن التجربة`,exit:`العودة إلى الموقع الرئيسي`,soundNote:`الصوت اختياري وهادئ — أصوات الليل فقط، بلا موسيقى ولا أصوات بشرية. يمكنك إيقافه بزر السماعة أو من الإعدادات.`},hud:{chapterOf:`الفصل {n} من {total}`,readVerse:`اقرأ الآية`,verse:`الآية`,chapters:`الفصول`,sources:`المصادر`,help:`المساعدة`,settings:`الإعدادات`,pause:`قائمة الإيقاف`,mute:`إيقاف الصوت`,unmute:`تشغيل الصوت`,inspectKey:`E`,inspect:`تفحّص`,inspectWhat:`تفحّص: {name}`,lookTitle:`انقر لتنظر حولك`,lookBody:`تحرّك بـ W A S D أو بالأسهم • Shift للمشي أسرع • E للتفحّص • Esc لتحرير الفأرة`,watchChapter:`شاهد هذا الفصل`,narration:`السرد`,captionHint:`انقر على النص لقراءة مصادره`,phraseLabel:`في الآية (الإسراء: ١)`,journeyBar:`الرحلة`,journeyFrom:`المسجد الحرام`,journeyTo:`المسجد الأقصى`,journeyGo:`انتقل إلى الفصل {n}: {title}`},transport:{prev:`الفصل السابق`,next:`الفصل التالي`,play:`تشغيل`,pause:`إيقاف مؤقت`,replay:`إعادة الفصل`,continue:`متابعة`,continueTo:`تابع إلى الفصل {n}`,finish:`إنهاء`,explore:`تجوّل من هنا`,exploreHint:`اترك الرحلة الموجَّهة وامشِ في المكان`,progress:`تقدّم الفصل`},panels:{close:`إغلاق`,infoReadVerse:`اقرأ الآية`,sourcesFor:`المصادر`,versesTitle:`الآية — القرآن (الإسراء: ١)`,tabVerse:`الإسراء: ١`,tabPhrases:`مقطعًا مقطعًا`,tabRelated:`آيات ذات صلة`,basmalaNote:`البسملة تُفتتح بها سورة الإسراء، وليست جزءًا من الآية ١.`,phrasesIntro:`يتأمل كل فصل من فصول الرحلة الموجَّهة مقطعًا من الآية. وتقسيم الآية إلى مقاطع وسيلة لتيسير القراءة فحسب.`,phraseChapter:`الفصل {n}`,relatedIntro:`هذه الآيات ليست جزءًا من (الإسراء: ١). يربطها المفسرون والأحاديث بليلة الرحلة، وهي معروضة هنا لتقرأها بنفسك.`,related1760:`فسّر ابن عباس ﴿الرُّؤْيَا الَّتِي أَرَيْنَاكَ﴾ في (الإسراء: ٦٠) بما أُري النبي ﷺ ليلة الرحلة (صحيح البخاري ٣٨٨٨).`,related5313:`يربط كثير من المفسرين (النجم: ١٣–١٨) بالمعراج (قارن صحيح مسلم ١٧٣)؛ وروت عائشة أن النبي ﷺ فسّر ما في (النجم: ١٣) بأنه جبريل عليه السلام (صحيح مسلم ١٧٧).`,arabicSource:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني، الإصدار ١٫١)، tanzil.net — رخصة المشاع الإبداعي، النسبة ٣٫٠ (CC BY 3.0)، منقول كما هو دون تغيير، ومقابَل بنسختين أخريين.`,tafsirLabel:`التفسير الميسر:`,translationSource:`التفسير: التفسير الميسر، مجمع الملك فهد لطباعة المصحف الشريف، عن مشروع تنزيل (tanzil.net). وهو شرح لمعاني الآيات، وليس ترجمة؛ والقرآن هو النص العربي وحده.`,tanzilLink:`tanzil.net`,listen:`استمع إلى تلاوات (الإسراء: ١) على Quran.com`,listenNote:`يفتح quran.com في نافذة جديدة. ولا تتضمن هذه التجربة أي تلاوة مسجّلة.`,chaptersTitle:`الفصول`,chapterCurrent:`الفصل الحالي`,chapterGo:`انتقل إلى الفصل {n}`,pauseTitle:`متوقف مؤقتًا`,resume:`متابعة`,restartChapter:`أعد هذا الفصل`,restartAll:`ابدأ من جديد`,mainMenu:`القائمة الرئيسة`,exitSite:`العودة إلى الموقع الرئيسي`,sourcesTitle:`المصادر والعناوين`,sourcesIntro:`كل ما تقرؤه معنون. والنص الموسوم بـ«قرآن» وحده هو الآية؛ وما سواه مأخوذ من المصادر أدناه أو هو اختيار فني.`,sourcesHadith:`الحديث`,sourcesTafsir:`التفاسير`,sourcesSira:`السيرة النبوية`,sourcesHistory:`التاريخ`,sourcesQuran:`نص القرآن`,sourcesNote:`يُشار إلى الأحاديث بأرقامها في sunnah.com، وتُعرض هنا بالمعنى؛ ولا يُنقل نص أي حديث ولا ترجمته. تُفتح الروابط في نافذة جديدة.`,open:`فتح`},settings:{title:`الإعدادات`,language:`اللغة`,languageNote:`تغيير اللغة يعيد تحميل الصفحة.`,graphics:`الرسوميات`,quality:`جودة الرسوميات`,qualityAuto:`تلقائي`,qualityLow:`منخفضة (الأفضل للهواتف القديمة)`,qualityMedium:`متوسطة`,qualityHigh:`عالية`,qualityNote:`تتكيّف الدقة تلقائيًا لتبقى الحركة سلسة.`,sound:`الصوت`,soundOn:`تشغيل الصوت (أصوات ليلية هادئة)`,volume:`مستوى الصوت`,reading:`القراءة`,arabicCaptions:`اعرض كلمات الآية بالرسم العثماني في النصوص`,pace:`سرعة السرد`,paceNormal:`عادية`,paceSlow:`أبطأ (وقت أطول للقراءة)`,continueMode:`في نهاية كل فصل`,continueWait:`انتظرني`,continueAuto:`تابع تلقائيًا`,textSize:`حجم النص`,textNormal:`عادي`,textLarge:`كبير`,textLarger:`أكبر`,view:`ما يُعرض`,lightStyle:`النور الرمزي`,lightFigure:`نور هادئ قائم (بلا ملامح)`,lightPoint:`نقطة ضوء فقط`,laterBuildings:`اعرض مخططات المباني التي بُنيت لاحقًا على الساحة في القدس`,markers:`اعرض علامات على الأماكن القابلة للتفحّص`,comfort:`الراحة`,motion:`تقليل الحركة`,motionSystem:`اتبع إعداد النظام`,motionOn:`مفعّل`,motionOff:`معطّل`,motionNote:`كاميرا أهدأ، ودوران أبطأ للسماء، ولا حركة في الواجهة.`,sensitivity:`حساسية النظر`,invertY:`اعكس النظر العمودي`},help:{title:`التحكم`,desktop:`لوحة المفاتيح والفأرة`,touch:`شاشة اللمس`,guidedTitle:`الرحلة الموجَّهة`,guided:`تتحرك الكاميرا ببطء من تلقاء نفسها بينما تظهر النصوص. وينتظرك كل فصل في نهايته (يمكنك تغيير ذلك من الإعدادات). أوقف الرحلة متى شئت، أو انقر على نص لقراءة مصادره، أو افتح الآية — وتتوقف الرحلة ما دامت لوحة مفتوحة.`,exploreTitle:`التجوّل الهادئ`,explore:`امشِ بحرية في مكة، وعلى ربوة في الطريق، وعلى الساحة في القدس. واستعمل شريط الرحلة في الأسفل للتنقل بين أماكن الليلة ولحظاتها.`,rows:[[`W A S D / الأسهم`,`الحركة`],[`Shift`,`المشي أسرع`],[`الفأرة`,`النظر حولك (انقر على المشهد أولًا)`],[`E أو النقر`,`تفحّص ما في الوسط`],[`Esc`,`تحرير الفأرة / إغلاق لوحة / إيقاف مؤقت`],[`Space`,`تشغيل الرحلة الموجَّهة أو إيقافها أو متابعتها`],[`N / B`,`الفصل التالي / السابق`],[`1 – 7`,`الانتقال إلى فصل`],[`V`,`اقرأ الآية`],[`C`,`الفصول`],[`M`,`تشغيل الصوت أو إيقافه`],[`H`,`هذه المساعدة`],[`P`,`قائمة الإيقاف`]],touchRows:[[`عصا التحكم (أسفل اليسار)`,`الحركة — ادفعها إلى آخرها للمشي أسرع`],[`السحب في مكان آخر`,`النظر حولك`],[`المس مكانًا أو علامة`,`لتفحّصه`],[`زر التفحّص`,`تفحّص ما في الوسط`],[`شريط الرحلة`,`الانتقال إلى مكان أو فصل`]],tip:`الحلقات المضيئة تدل على الأماكن التي يمكنك تفحّصها. ويمكنك أيضًا لمس الأرض أو السماء. ويمكن إخفاء الحلقات من الإعدادات.`},about:{title:`عن هذه التجربة`,purposeTitle:`الغاية`,purpose:`تأمّل تعليمي يحترم المقام في الإسراء كما ورد في (الإسراء: ١). وليس إعادة بناء تاريخية أو أثرية، ولا تدّعي أي صورة هنا أنها تُظهر ما حدث.`,labelsTitle:`العناوين`,depictionTitle:`التصوير`,depiction:`لا يُصوَّر النبي محمد ﷺ أبدًا: لا هيئة ولا وجه ولا صوت. ويدل على الرحلة نور هادئ بلا ملامح؛ وهو اختيار فني لهذا الموقع، وليس ادعاءً بأن الآية (الإسراء: ١) تصفه بأنه يشعّ نورًا. ولا يُصوَّر كذلك البراق، ولا جبريل عليه السلام، ولا الأنبياء السابقون، ولا السماوات؛ والأحاديث التي تذكرهم معروضة بالمعنى مع الإحالة إليها.`,placesTitle:`الأماكن`,places:`أُعيد بناء مكة والقدس ببساطة كما ربما كانتا في نحو سنة ٦٢٠م: الكعبة في حرم مكشوف تحيط به البيوت؛ والساحة الكبرى في القدس خالية في معظمها، قبل بناء قبة الصخرة (٦٩١–٦٩٢م) والمسجد الأقصى (أوائل القرن الثامن الميلادي). والمسافة بينهما مختصرة نحو مئة ضعف، أما الاتجاه فحقيقي.`,textsTitle:`النصوص`,arabic:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني، الإصدار ١٫١)، CC BY 3.0، منقول كما هو ومقابَل بنسخة api.alquran.cloud ونص مجمع الملك فهد (api.quran.com).`,translation:`التفسير: التفسير الميسر، إعداد نخبة من العلماء، مجمع الملك فهد لطباعة المصحف الشريف، عن مشروع تنزيل. وهو شرح لمعاني الآيات وليس ترجمة، ويُعرض تحت عنوان «التفسير الميسر».`,hadith:`تُعرض الأحاديث بالمعنى ويُشار إليها باسم الكتاب ورقم الحديث (بترقيم sunnah.com)؛ ويُشار إلى التفاسير والسيرة المبكرة باسم المؤلف والكتاب. انظر «المصادر».`,tanzilNotice:`إشعار حقوق مشروع تنزيل (منقول كما هو مطلوب):`,audioTitle:`الصوت`,audio:`كل الأصوات تُولَّد في متصفحك: صرير الجنادب، وبومة بعيدة، وهبّات ريح نادرة، وطيور عند الفجر. ولا موسيقى ولا تلاوة. وللاستماع إلى تلاوة الآية استعمل الرابط في لوحة الآية (quran.com).`,assetsTitle:`المحتوى والخصوصية`,assets:`كل منظر ومبنى وشجرة ونجم وصوت مولَّد بالبرمجة؛ ولا تُستعمل نماذج ثلاثية الأبعاد أو صور أو ملفات صوتية من جهات أخرى. والخط القرآني هو Amiri Quran (SIL Open Font License 1.1)، وخط الواجهة العربية والكردية هو Vazirmatn (SIL Open Font License 1.1)، ويُقدَّمان مع الموقع. ولا تُجمع أي بيانات؛ والإعدادات محفوظة في متصفحك فقط. وكأي موقع، يمكن فحص الشيفرة التي تصل إلى متصفحك.`,limitsTitle:`الحدود`,limits:`الأحجام والمسافات والمباني والقمر والتوقيت والنور اختيارات فنية. وحيث تختلف المصادر تذكر التجربة ذلك بدل أن تختار بصمت.`},complete:{title:`اكتملت الرحلة`,body:`تأمّلت في الإسراء كما ورد في (الإسراء: ١).`,explore:`تجوّل بهدوء`,restart:`شاهد من البداية مرة أخرى`,verse:`اقرأ الآية`,sources:`المصادر`},fallback:{noWebglTitle:`الرسوميات ثلاثية الأبعاد غير متاحة`,noWebgl:`تحتاج هذه التجربة إلى WebGL 2، وهو غير متوفر في هذا المتصفح أو الجهاز (أو معطّل). ولا يزال بإمكانك قراءة الآية ونص كل فصل أدناه.`,lostTitle:`توقفت الرسوميات`,lost:`أوقف المتصفح الرسوميات ثلاثية الأبعاد، وكثيرًا ما يحدث ذلك عند نفاد ذاكرة الجهاز. أعد التحميل للمتابعة، أو اقرأ النص أدناه.`,errorTitle:`حدث خطأ`,error:`تعذّر بدء التجربة. يمكنك إعادة التحميل، أو قراءة الآية والنص أدناه.`,reload:`إعادة التحميل`,storyTitle:`الفصول`}},Zu=`ڕووناکییە نەرمەکە هێمایەکە بۆ ئەم ماڵپەڕە هەڵبژێردراوە. وێنەی کەس نییە، هیچ ڕوخسار و تایبەتمەندییەکی جەستەیی نییە، و بانگەشەی ئەوە نییە کە ئایەتی (الإسراء: ١) پەیامبەر (د.خ) وەک ڕووناکی وەسف دەکات — ئایەتەکە شتی وا ناڵێت.`,Qu=`لە دەوروبەری ساڵی ٦٢٠ی زایینیدا سەکۆ گەورە شووراکراوەکەی قودس زۆربەی بەتاڵ و وێران بوو. هێشتا هیچ بینایەکی مزگەوت لەسەری نەبوو: دوای ساڵی ٦٣٨ی زایینی مزگەوتێکی سادە لەسەری دروست کرا؛ قوببەی سەخرە لە ساڵی ٦٩١–٦٩٢ی زایینیدا تەواو کرا (ساڵی ٧٢ی کۆچی، بەپێی نووسراوەکەی خۆی)؛ و یەکەم مزگەوتی گەورەی ئەقسا لە سەرەتای سەدەی هەشتەمدا بە دوایدا هات.`,$u=[`بێگەردیی تەواوەتی بۆ ئەو زاتەی کە … شەوڕەویی بە بەندەکەی خۆی کرد`,`لە شەوێکدا`,`لە سوجدەگای حەرامەوە`,`بەرەو ئەو سوجدەگا هەرە دوورەی`,`کە چواردەوریمان بەرەکەتبەخش کردووە`,`تا لە نیشانەکانمانی پێشان بدەین`,`بەدڵنیاییەوە ئەو زاتە فرەبیس و فرەبینە.`],ed={phrases:$u,sources:{"bukhari-349":{cite:`صەحیحی بوخاری ٣٤٩`,detail:`کتێبی نوێژ، یەکەم گێڕانەوە؛ ئەبووزەڕ گێڕاویەتەوە. پەیامبەر (د.خ) دەگێڕێتەوە کە سەربانی ماڵەکەی لە مەککە کرایەوە، سنگی بە ئاوی زەمزەم شوورا، و بەرز کرایەوە بۆ ئاسمانەکان، کە لەوێ نوێژەکان فەرز کران.`},"bukhari-3886":{cite:`صەحیحی بوخاری ٣٨٨٦`,detail:`کتێبی فەزڵەکانی ئەنسار؛ جابیری کوڕی عەبدوڵڵا گێڕاویەتەوە. کاتێک قوڕەیش بە درۆیان دانا، خودا قودسی لە بەردەمیدا دەرخست و ئەو وەسفی بۆ کردن.`},"bukhari-3887":{cite:`صەحیحی بوخاری ٣٨٨٧`,detail:`کتێبی فەزڵەکانی ئەنسار؛ ئەنەسی کوڕی مالیک لە مالیکی کوڕی صەعصەعەوە گێڕاویەتەوە. گێڕانەوە درێژەکەی شەوڕەوی و میعراج (المعراج)، کە دەست پێ دەکات کاتێک پەیامبەر (د.خ) لە حەتیم (حیجر) ڕاکشابوو.`},"bukhari-3888":{cite:`صەحیحی بوخاری ٣٨٨٨`,detail:`کتێبی فەزڵەکانی ئەنسار؛ ئیبن عەبباس دەربارەی ئایەتی (الإسراء: ٦٠): ئەو دیمەنانەی لەو شەوەدا کە پەیامبەر (د.خ) برا بۆ قودس پێشانی دران، بینینی ڕاستەقینە بوون، نەک خەو.`},"bukhari-4709":{cite:`صەحیحی بوخاری ٤٧٠٩`,detail:`کتێبی ڕاڤە (تەفسیر)، سورەتی الإسراء؛ ئەبووهورەیرە گێڕاویەتەوە. لە قودس، لە شەوی گەشتەکەدا، جامی مەی و شیری پێشکەش کرا و شیرەکەی وەرگرت.`},"muslim-162a":{cite:`صەحیحی موسلیم ١٦٢`,detail:`کتێبی ئیمان؛ ئەنەسی کوڕی مالیک گێڕاویەتەوە. بوراق؛ پەیامبەر (د.خ) لە قودس دەیبەستێتەوە بەو ئەڵقەیەی هەواڵدەران بەکاریان دەهێنا، دوو ڕکات نوێژ لە مزگەوتەکەدا دەکات، شیر هەڵدەبژێرێت، و بەرز دەکرێتەوە بۆ ئاسمانەکان.`},"muslim-172":{cite:`صەحیحی موسلیم ١٧٢`,detail:`کتێبی ئیمان؛ ئەبووهورەیرە گێڕاویەتەوە. کاتێک قوڕەیش دەربارەی قودس پرسیاریان لە پەیامبەر (د.خ) کرد، قودسی پێشان درا؛ هەروەها هەواڵدەرانی پێشووی بە نوێژکردنەوە بینی، و کاتێک کاتی نوێژ هات، پێشنوێژیی بۆ کردن.`},"muslim-173":{cite:`صەحیحی موسلیم ١٧٣`,detail:`کتێبی ئیمان؛ لە عەبدوڵڵاوە گێڕدراوەتەوە. لە شەوی گەشتەکەدا پەیامبەر (د.خ) برا بۆ سیدرەی مونتەها (سدرة المنتهى)؛ گێڕەرەوەکە بە ئایەتی (النجم: ١٦)ـەوە دەیبەستێتەوە.`},"muslim-177a":{cite:`صەحیحی موسلیم ١٧٧`,detail:`کتێبی ئیمان؛ مەسرووق لە عائیشەوە دەگێڕێتەوە کە پەیامبەر (د.خ) ئەوەی لە ئایەتی (النجم: ١٣)دا بینی، بە فریشتە جیبریل لە شێوە ڕاستەقینەکەی خۆیدا ڕاڤە کرد.`},tabari:{cite:`تەبەری، ”جامع البيان“`,detail:`ڕاڤەی قورئانی موحەممەدی کوڕی جەریری تەبەری (کۆچی دوایی ٩٢٣ی زایینی)، دەربارەی ئایەتی (الإسراء: ١).`},"ibn-kathir":{cite:`ئیبن کەسیر، ”تفسير القرآن العظيم“`,detail:`ڕاڤەی قورئانی ئیسماعیلی کوڕی کەسیر (کۆچی دوایی ١٣٧٣ی زایینی)، دەربارەی ئایەتی (الإسراء: ١).`},zamakhshari:{cite:`زەمەخشەری، ”الكشاف“`,detail:`ڕاڤەی قورئانی مەحموودی زەمەخشەری (کۆچی دوایی ١١٤٤ی زایینی)، دەربارەی ئایەتی (الإسراء: ١).`},"ibn-ishaq":{cite:`ئیبن ئیسحاق، ”سيرة رسول الله“`,detail:`ژیاننامە کۆنەکەی پەیامبەر (د.خ) لە نووسینی موحەممەدی کوڕی ئیسحاق (کۆچی دوایی نزیکەی ٧٦٧ی زایینی)، بە ئامادەکردنی ئیبن هیشام؛ وەرگێڕانی ئینگلیزیی ئا. گیۆم، ”The Life of Muhammad“ (١٩٥٥)، بەشەکانی شەوڕەوی و میعراج.`},"history-haram":{cite:`مێژووی سوجدەگای حەرام`,detail:`گێڕانەوە مێژووییە باوەکانی مەککە و حەرەمەکەی، کە بە ”أخبار مكة“ی ئەزرەقی (سەدەی نۆیەم) دەست پێ دەکەن: دووبارە دروستکردنەوەی کەعبە لەلایەن قوڕەیشەوە لە دەوروبەری ساڵی ٦٠٥ی زایینی، و یەکەم دەورەدانی حەرەمەکە بە دیوار لە سەردەمی خەلیفە عومەردا لە ساڵی ١٧ی کۆچی / ٦٣٨ی زایینی.`},"history-jerusalem":{cite:`مێژووی حەرەمی قودس`,detail:`توێژینەوەی مێژوویی و شوێنەوارناسی دەربارەی قودس: ئەو سەکۆیەی لە سەردەمی هیرۆددا دروست کرا؛ وێرانکردنی ساڵی ٧٠ی زایینی؛ دەسەڵاتی ساسانی لە ساڵی ٦١٤ی زایینییەوە و گەڕانەوەی بیزەنتییەکان لە دەوروبەری ساڵی ٦٣٠ی زایینی؛ قوببەی سەخرە، کە نووسراوەکەی خۆی مێژووەکەی بە ساڵی ٧٢ی کۆچی (٦٩١–٦٩٢ی زایینی) دیاری دەکات؛ یەکەم مزگەوتی گەورەی ئەقسا لە سەرەتای سەدەی هەشتەمدا.`}},sourceKinds:{quran:{label:`قورئان`,description:`وشەکانی ئایەتەکە: عەرەبی لە دەقی پشتڕاستکراوەی تەنزیلەوە، کوردی لە وەرگێڕانی هێڤییەوە، وشە بە وشە، لەگەڵ ئاماژەی ئایەتەکە.`},summary:{label:`ئەوەی ئایەتەکە دەیڵێت`,description:`دووبارە گوتنەوەیەکی سادەی ئایەتە ئاماژەپێکراوەکە، بێ ئەوەی هیچی بخاتە سەر.`},hadith:{label:`فەرموودە`,description:`گێڕانەوەیەک بە واتا لە کۆکراوەیەکی فەرموودە، بە ناوی کۆکراوەکە و ژمارەکەیەوە. بەشێک نییە لە ئایەتەکە.`},commentary:{label:`ڕاڤە`,description:`بۆچوونی ڕاڤەکارێکی ناودراوی قورئان، یان گێڕانەوەیەک لە ژیاننامە کۆنەکەی پەیامبەر (د.خ) (سیرە). بەشێک نییە لە ئایەتەکە.`},history:{label:`مێژوو`,description:`زانیاریی مێژوویی و شوێنەوارناسی دەربارەی شوێنەکان. بەشێک نییە لە ئایەتەکە.`},reconstruction:{label:`بونیادنانەوەی هونەری`,description:`هەڵبژاردنێک بۆ ئەم ئەزموونە — دیمەن، بینا، ڕووناکی، ئاسمان و دەنگ — نەک تۆمارێکی ڕووداوەکە.`}},chapters:{makkah:{title:`شەو لە مەککە`,subtitle:`بێگەردیی تەواوەتی بۆ ئەو زاتەی کە … شەوڕەویی بە بەندەکەی خۆی کرد`,short:`مەککە`,cues:{m1:`مەککە بە شەو، لە دەوروبەری ساڵی ٦٢٠ی زایینی. دۆڵەکە، خانووەکان و حەرەمەکە بونیادنانەوەیەکی هونەرین؛ ئایەتەکە وەسفیان ناکات.`,m2:$u[0],m3:`ئایەتەکە بە بێگەردکردنی خودا دەست پێ دەکات و گەشتەکە وەک کاری ئەو دەخاتە ڕوو: ئەو شەوڕەویی بە بەندەکەی خۆی کرد. ناوی بەندەکە نابات.`,m4:`فەرموودەکان گەشتەکە بە زمانی خودی پەیامبەر موحەممەد (د.خ) دەگێڕنەوە. بەپێی صەحیحی بوخاری ٣٨٨٧، شەوەکە دەستی پێ کرد کاتێک لە حەتیم (حیجر) لە تەنیشت کەعبە ڕاکشابوو؛ بەپێی صەحیحی بوخاری ٣٤٩، لە ماڵەکەی خۆی لە مەککە.`,m5:Zu}},departure:{title:`لە سوجدەگای حەرامەوە`,subtitle:`سوجدەگای حەرام`,short:`دەرچوون`,cues:{d1:$u[2],d2:`لە سەردەمی پەیامبەردا (د.خ) سوجدەگای حەرام زەوییە کراوەکەی دەوری کەعبە بوو، کە خانوو لە نزیکەوە دەوریان دابوو. یەکەم دیوارەکەی دەدرێتە پاڵ خەلیفە عومەر، لە ساڵی ١٧ی کۆچی (٦٣٨ی زایینی).`,d3:`تەبەری گێڕانەوە جیاوازەکان تۆمار دەکات دەربارەی ئەوەی گەشتەکە لە کوێوە دەستی پێ کرد — خودی حەرەمەکە یان ماڵێک لە مەککە. ڕاڤەکاران ئاماژە بەوە دەکەن کە هەموو ناوچە پیرۆزەکە دەتوانرێت ”سوجدەگای حەرام“ی پێ بگوترێت.`,d4:`فەرموودەکان (صەحیحی بوخاری ٣٨٨٧، صەحیحی موسلیم ١٦٢) باسی بوراق دەکەن: وڵاغێکی سواریی سپی، لە گوێدرێژ گەورەتر و لە هێستر بچووکتر، کە هەنگاوەکەی دەگەیشتە ئەوپەڕی چاوی. لێرەدا پیشان نادرێت.`,d5:`ئەو ڕووناکییەی لە حیجرەوە بەرز دەبێتەوە هێمایەکی ئارامە بۆ دەستپێکی گەشتەکە — نەک وێناکردنی ئەوەی چۆن ڕوویدا.`}},journey:{title:`لە شەوێکدا`,subtitle:`گەشتەکە`,short:`بە شەو`,cues:{n1:$u[1],n2:`کرداری ”أسرى“ خۆی واتای ”بە شەو بردن“ دەدات. زەمەخشەری ڕوونی دەکاتەوە کە وشەی زیادکراوی ”ليلًا“ (بە شەو)، کە بە شێوەی نەناسراو هاتووە، نیشان دەدات کە گەشتەکە تەنیا بەشێک لە یەک شەوی خایاند.`,n3:`مەککە و قودس بە هێڵی ڕاست نزیکەی ١٢٤٠ کیلۆمەتر لێک دوورن، بە نێو شاخ، کێڵگەی لاڤا و بیاباندا.`,n4:`لە ژیاننامە کۆنەکەی ئیبن ئیسحاقدا دەربارەی پەیامبەر (د.خ)، قوڕەیش ناڕەزایی دەردەبڕن کە کاروان مانگێکی پێویست بوو بۆ گەیشتن بە شام و مانگێکیش بۆ گەڕانەوە — و ئەو باسی یەک شەوی دەکرد.`,n5:`ئەو زەوییەی لە خوارەوەیە کورتکراوە و هێماییە: قودس لە ئاراستە ڕاستەقینەکەی خۆیدا لە مەککەوە دەکەوێت، بەڵام بە نزیکەی یەک لە سەدی دووریی ڕاستەقینە. هیچ وەستانێک لە ڕێگەدا پیشان نادرێت.`,n6:`ئایەتەکە کاتی گەشتەکە — بە شەو — و دوو شوێنەکەی دەدات. هیچ دەربارەی ڕێگەی نێوانیان ناڵێت.`}},aqsa:{title:`بەرەو سوجدەگا هەرە دوورەکە`,subtitle:`سوجدەگای ئەقسا`,short:`ئەقسا`,cues:{a1:$u[3],a2:`ڕاڤەکارانی موسوڵمان وەک تەبەری و ئیبن کەسیر ”المسجد الأقصى“، واتە ”دوورترین سوجدەگا“، بە حەرەمی قودس (بەیتولمەقدیس) دادەنێن، هەروەک ئەو فەرموودانەی باسی گەشتەکە دەکەن.`,a3:`لە دەوروبەری ساڵی ٦٢٠ی زایینیدا سەکۆ گەورەکە زۆربەی بەتاڵ و وێران بوو. هێشتا هیچ بینایەکی مزگەوت لەسەری نەبوو: قوببەی سەخرە لە ساڵی ٦٩١–٦٩٢ی زایینیدا تەواو کرا، و یەکەم مزگەوتی گەورەی ئەقسا لە سەرەتای سەدەی هەشتەمدا بە دوایدا هات.`,a4:`بەپێی صەحیحی موسلیم ١٦٢، پەیامبەر (د.خ) دەگێڕێتەوە کە وڵاغەکەی بەو ئەڵقەیەوە بەستەوە کە هەواڵدەران بەکاریان دەهێنا و دوو ڕکات نوێژی لە مزگەوتەکەدا کرد. صەحیحی موسلیم ١٧٢ دەگێڕێتەوە کە هەواڵدەرانی پێشووی بە نوێژکردنەوە بینی و پێشنوێژیی بۆ کردن.`,a5:`بەپێی صەحیحی بوخاری ٤٧٠٩، لە قودس جامێک مەی و جامێک شیری پێشکەش کرا و شیرەکەی هەڵبژارد؛ جیبریل گوتی کە ئەو ڕێنموونی کراوە بۆ ڕێگەی سروشتی (الفطرة).`}},blessed:{title:`کە چواردەوریمان بەرەکەتبەخش کردووە`,subtitle:`خاکە بەرەکەتدارەکە`,short:`خاکی بەرەکەتدار`,cues:{b1:$u[4],b2:`تەبەری ئەم بەرەکەتە بەوە ڕاڤە دەکات کە بە خەڵکی دەوروبەری دراوە — لە بژێو، کشتوکاڵ و دارەکانیاندا.`,b3:`ئیبن کەسیر قودس وەک نیشتمانی هەواڵدەران لە سەردەمی ئیبراهیمەوە وەسف دەکات.`,b4:`باخی زەیتوون گردەکانی ئێرە دادەپۆشن وەک وێنەیەک بۆ ئەو بەرەکەتە. دارەکان، تەراسە کشتوکاڵییەکان و شارەکە بونیادنانەوەی هونەرین.`,b5:`ئایەتەکە دەڵێت کە خودا چواردەوری سوجدەگا هەرە دوورەکەی بەرەکەتبەخش کردووە. بەرەکەتەکان ناژمێرێت.`}},signs:{title:`تا لە نیشانەکانمانی پێشان بدەین`,subtitle:`نیشانەکان`,short:`نیشانەکان`,cues:{s1:$u[5],s2:`ئایەتەکە مەبەستی گەشتەکە دەدات: پیشاندانی هەندێک لە نیشانەکانی خودا (آيات) بە ئەو. ناڵێت ئەو نیشانانە چی بوون.`,s3:`فەرموودەکان دواتر باسی بەرزبوونەوەیەک بە نێو حەوت ئاسمانەکەدا دەکەن (میعراج): پەیامبەر (د.خ) سڵاو لە هەواڵدەرانی پێشوو دەکات، دەبرێت بۆ سیدرەی مونتەها، و نوێژە ڕۆژانەکان فەرز دەکرێن — لە کۆتاییدا پێنج (صەحیحی بوخاری ٣٨٨٧ و ٣٤٩).`,s4:`لەلای سیدرەی مونتەها`,s5:`ئەو دێڕە لە سورەتێکی دیکەیە (النجم: ١٣–١٨)، نەک لە (الإسراء: ١). زۆرێک لە ڕاڤەکاران ئەو ئایەتانە بە شەوی میعراجەوە دەبەستنەوە، هەروەک گێڕانەوەکەی صەحیحی موسلیم ١٧٣.`,s6:`ئەو ئاسمانەی پیشان دەدرێت ئاسمانی ئاسایی شەوە. هیچ وێنەیەک لێرەدا نوێنەرایەتیی ئاسمانەکان یان ئەوەی فەرموودەکان باسی دەکەن ناکات.`}},return:{title:`فرەبیس و فرەبین`,subtitle:`گەڕانەوە بۆ مەککە پێش بەرەبەیان`,short:`گەڕانەوە`,cues:{r1:`لە ژیاننامە کۆنەکەی ئیبن ئیسحاقدا، پەیامبەر (د.خ) پێش بەیانی گەڕاوەتەوە مەککە و باسی گەشتەکەی بۆ خەڵک دەکات.`,r2:`بەپێی صەحیحی بوخاری ٣٨٨٦، پەیامبەر (د.خ) دەگێڕێتەوە کە کاتێک قوڕەیش بە درۆیان دانا، خودا قودسی لە بەردەمیدا دەرخست، و ئەو لە کاتێکدا سەیری دەکرد وەسفی بۆ کردن.`,r3:`لە ژیاننامەکەی ئیبن ئیسحاقدا، ئەبووبەکر یەکسەر گێڕانەوەکە پەسەند دەکات، و بە ”صدیق“ — ”ئەوەی ڕاستی پەسەند دەکات“ — لەبیر دەمێنێت.`,r4:$u[6],r5:`ئایەتەکە سەرەتا و کۆتایی گەشتەکە، کاتەکەی و مەبەستەکەی ناو دەبات، و بە ناوبردنی خودا وەک فرەبیس و فرەبین کۆتایی دێت.`,r6:`بەرەبەیان دێتە مەککە. ئەوەی ئەو شەوە ڕوویدا لە ڕێگەی ئایەتەکە و گێڕانەوەکانەوە زانراوە؛ ئەم ئەزموونە تێڕامانێکە لەوان، نەک تۆمارێک.`}}},objects:{kaaba:{name:`کەعبە`,sections:{history:`کەعبە لە ناوەڕاستی حەرەمەکەدا ڕاوەستاوە. سەرچاوە ئیسلامییەکان دەگێڕنەوە کە قوڕەیش چەند ساڵێک پێش پەیامبەرایەتیی پەیامبەر (د.خ)، لە دەوروبەری ساڵی ٦٠٥ی زایینی، دووبارە دروستیان کردەوە و بەشێک لە بناغە ڕەسەنەکەیان لە دەرەوە بەجێ هێشت — ئەو زەوییەی دیوارە نزمەکەی حیجر دەوری داوە.`,start:`بەپێی صەحیحی بوخاری ٣٨٨٧، پەیامبەر (د.خ) دەگێڕێتەوە کە شەوی گەشتەکە دەستی پێ کرد کاتێک لە حەتیم، لە تەنیشت کەعبە، ڕاکشابوو.`,shown:`قەبارەکەی، پۆشاکە تاریکەکەی و دەرگاکەی کە لە زەوی بەرزترە بە سادەیی پیشان دراون. ڕەنگ و نەخشی پۆشاکەکە بە درێژایی سەدەکان گۆڕاوە؛ ئەو پشتێنە زێڕچنراوەی ئەمڕۆ دەبینرێت زۆر دواترە.`}},hijr:{name:`حیجر (حەتیم)`,sections:{report:`بەپێی صەحیحی بوخاری ٣٨٨٧، پەیامبەر (د.خ) دەڵێت شەوەکە دەستی پێ کرد کاتێک لە حەتیم یان حیجر ڕاکشابوو. بەپێی صەحیحی بوخاری ٣٤٩، دەڵێت سەربانی ماڵەکەی لە مەککە کرایەوە. هەردووکیان ئاماژەیان پێ کراوە؛ ڕووناکییەکە لەبەر یەکەمیان لێرە دانراوە.`,history:`دیوارە نزمە نیوەبازنەییەکەی تەنیشت کەعبە ئەو زەوییە دیاری دەکات کە سەر بە بناغە ڕەسەنەکەی بوو، بەڵام کاتێک قوڕەیش دووبارە دروستیان کردەوە لە دەرەوە بەجێ هێڵرا.`,shown:`بەرزی و ئەستووریی دیوارەکە بونیادنانەوەیە.`}},zamzam:{name:`بیری زەمزەم`,sections:{report:`بەپێی صەحیحی بوخاری ٣٤٩، کە ئەبووزەڕ گێڕاویەتەوە، پەیامبەر (د.خ) دەگێڕێتەوە کە پێش ئەوەی بەرز بکرێتەوە، سنگی کرایەوە، بە ئاوی زەمزەم شوورا و پڕ کرا لە دانایی و ئیمان.`,history:`بیرەکە کەمێک لە ڕۆژهەڵاتی کەعبەوەیە. لێوارە بەردینەکەی و چوارچێوە دارینە سادەکەی لێرەدا بونیادنانەوەن.`}},sanctuary:{name:`سوجدەگای حەرام — المسجد الحرام`,sections:{verse:$u[2],history:`لە سەردەمی پەیامبەردا (د.خ) حەرەمەکە زەوییە کراوەکەی دەوری کەعبە بوو، کە خانوو لە نزیکەوە دەوریان دابوو. یەکەم دیوارەکەی دەدرێتە پاڵ خەلیفە عومەر، کە لە ساڵی ١٧ی کۆچی (٦٣٨ی زایینی) فراوانی کرد؛ ڕیزە کۆڵەکەکانی سەدەکانی دواتر بوونیان نەبوو.`,commentary:`تەبەری گێڕانەوە جیاوازەکان تۆمار دەکات دەربارەی ئەوەی گەشتەکە لە کوێوە دەستی پێ کرد. ڕاڤەکاران ئاماژە بەوە دەکەن کە هەموو ناوچە پیرۆزەکەی مەککە دەتوانرێت ”سوجدەگای حەرام“ی پێ بگوترێت.`,shown:`چەند تایبەتمەندییەکی ئەو سەردەمە لابراون — لەوانە ئەو بتانەی سەرچاوە ئیسلامییەکان دەڵێن تا فەتحی مەککە لە ساڵی ٦٣٠ی زایینی لە دەوری کەعبە بوون — و هیچ کەسێک پیشان نادرێت.`}},makkah:{name:`مەککە`,sections:{history:`مەککە لە دۆڵێکی تەسک و وشکدایە لە نێو شاخە گرانیتییەکاندا، و ئەبووقوبەیس لە ڕۆژهەڵاتی حەرەمەکەوەیە. لە دەوروبەری ساڵی ٦٢٠ی زایینیدا شارۆچکەیەکی قوڕەیش بوو، کە بە بازرگانی و بە حەجی کەعبە دەژیان.`,date:`قورئان مێژووی گەشتەکە دیاری ناکات. ئیبن ئیسحاق لە مەککەی دادەنێت، پێش کۆچکردن بۆ مەدینە؛ زانایانی دواتر مێژووی جیاواز دەدەن. ٢٧ی ڕەجەب بە بەرفراوانی یادی دەکرێتەوە، بەڵام تەنیا یەکێکە لە چەند بۆچوونێک.`,shown:`خانووەکان، کۆڵانەکان، چراکان و شاخەکان بونیادنانەوەیەکی هونەرین؛ ژمارە و شێوەکانیان داهێنراون.`}},"night-sky":{name:`ئاسمانی شەو`,sections:{verse:$u[1],summary:`ئایەتەکە دەڵێت گەشتەکە بە شەو بوو. وەسفی ئاسمان، مانگ یان ئەستێرەکانی ئەو شەوە ناکات.`,shown:`ئەستێرەکان بە هێواشی دەسووڕێنەوە لەگەڵ تێپەڕبوونی کاتژمێرەکان. قۆناغ و ڕێڕەوی مانگ هەڵبژاردنێکی هونەرییە، نەک بانگەشەیەک دەربارەی ئەو شەوە.`}},light:{name:`دەربارەی ئەم ڕووناکییە`,sections:{symbol:`ئەم ڕووناکییە نەرمە هێمایەکی بەڕێزە کە بۆ ئەم ماڵپەڕە هەڵبژێردراوە. شوێنی گەشتەکە لە دیمەنەکەدا دیاری دەکات بەبێ ئەوەی پەیامبەر (د.خ) وێنا بکات: هیچ ڕوخسار و هیچ تایبەتمەندییەکی جەستەیی نییە.`,verse:`ئایەتی (الإسراء: ١) بە «بەندەکەی خۆی» ناوی دەبات و وەسفی ڕواڵەتی ناکات. ڕووناکییەکە بانگەشەی ئەوە نییە کە ئایەتەکە ئەو وەک ڕووناکی وەسف دەکات.`,choice:`ڕووناکی، ڕەنگ و جووڵەکەی هونەرین. لە ڕێکخستنەکاندا دەتوانیت تەنیا وەک خاڵێکی بچووکی ڕووناکی پیشانی بدەیت.`}},journey:{name:`گەشتە شەوانەکە`,sections:{verse:`بێگەردیی تەواوەتی بۆ ئەو زاتەی کە لە شەوێکدا شەوڕەویی بە بەندەکەی خۆی کرد`,awake:`بەپێی صەحیحی بوخاری ٣٨٨٨، ئیبن عەبباس لە ڕاڤەی ئایەتی (الإسراء: ٦٠)دا دەڵێت ئەو دیمەنانەی لەو شەوەدا کە پەیامبەر (د.خ) برا بۆ قودس پێشانی دران، بینینی ڕاستەقینە بوون، نەک خەو.`,views:`زۆربەی زانایانی موسوڵمان پێیان وایە گەشتەکە بە جەستە و ڕۆح و بە ئاگایی بووە. ژیاننامەکەی ئیبن ئیسحاق بۆچوونی هەندێک لە موسوڵمانانی سەرەتاش تۆمار دەکات کە پێیان وابووە بینینێک (ڕوئیا) بووە.`,shown:`ڕێگەی ڕووناکییەکە، بەرزییەکەی و ڕێڕەوەکەی هێمایین. دوورییەکان نزیکەی سەد هێندە کورت کراونەتەوە.`}},desert:{name:`ڕێگەی باکوور`,sections:{history:`لە نێوان مەککە و قودسدا شاخەکانی حیجاز، کێڵگە فراوانەکانی لاڤا، بیابان و دەشتی وشک هەن — نزیکەی ١٢٤٠ کیلۆمەتر بە هێڵی ڕاست.`,caravan:`لە ژیاننامەکەی ئیبن ئیسحاقدا قوڕەیش دەڵێن کاروان مانگێکی پێویست بوو بۆ گەیشتن بە شام و مانگێکیش بۆ گەڕانەوە.`,shown:`ئەم وڵاتە کورتکراوە و هێماییە، نەخشە نییە. ئەو گردۆڵکەیەی لەسەری ڕاوەستاویت داهێنراوە.`}},aqsa:{name:`سوجدەگای ئەقسا — المسجد الأقصى`,sections:{verse:$u[3],identity:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر ”المسجد الأقصى“ بە حەرەمی قودس، بەیتولمەقدیس، دادەنێن. وشەی ”مسجد“ واتای شوێنی سوجدەبردنە؛ مانای بینا ناگەیەنێت.`,history:Qu,prayer:`بەپێی صەحیحی موسلیم ١٦٢، پەیامبەر (د.خ) دەگێڕێتەوە کە وڵاغەکەی بەو ئەڵقەیەوە بەستەوە کە هەواڵدەران بەکاریان دەهێنا و دوو ڕکات نوێژی لە مزگەوتەکەدا کرد؛ و بەپێی صەحیحی موسلیم ١٧٢، پێشنوێژیی بۆ هەواڵدەرانی پێشوو کرد.`,shown:`دیوارەکان، وێرانەکان، دەوەنەکان و دەروازەکە بونیادنانەوەیەکی هونەرین بۆ دۆخی سەکۆکە لە دەوروبەری ساڵی ٦٢٠ی زایینیدا. ئەو شوێنەی بە وردی تێیدا نوێژی کرد دیاری نەکراوە.`}},rock:{name:`بەردەکە (سەخرە)`,sections:{history:`بەردێکی سروشتیی بنەڕەتییە لە نزیک ناوەڕاستی سەکۆکە. قوببەی سەخرە لەسەری دروست کرا و لە ساڵی ٦٩١–٦٩٢ی زایینیدا تەواو کرا.`,tradition:`نەریتی موسوڵمانانی دواتر بەردەکە بە میعراجەوە دەبەستێتەوە. ئەو فەرموودانەی لێرەدا ئاماژەیان پێ کراوە (صەحیحی بوخاری ٣٨٨٧، صەحیحی موسلیم ١٦٢) ناوی ئەو شوێنە نابەن کە میعراج لێیەوە دەستی پێ کرد.`}},jerusalem:{name:`قودس لە دەوروبەری ساڵی ٦٢٠ی زایینیدا`,sections:{history:`قودس ئەوکات شارێکی شووراداری کڵێسا، دێر و خانوو بوو. فارسە ساسانییەکان لە ساڵی ٦١٤ی زایینیدا گرتبوویان؛ ئیمپراتۆری بیزەنتی هێراکلیۆس لە دەوروبەری ساڵی ٦٣٠ی زایینیدا گەڕاندییەوە.`,described:`بەپێی صەحیحی بوخاری ٣٨٨٦، پەیامبەر (د.خ) دەگێڕێتەوە کە کاتێک قوڕەیش بە درۆیان دانا، خودا قودسی لە بەردەمیدا دەرخست و ئەو وەسفی بۆ کردن.`,shown:`خانووەکان، کڵێسا گشتییەکان و شووراکەی شار بونیادنانەوەیەکی هونەرین؛ هیچ بینایەک لاساییی بینایەکی ڕاستەقینە ناکاتەوە.`}},olives:{name:`چواردەورە بەرەکەتدارەکە`,sections:{verse:$u[4],tabari:`تەبەری بەرەکەتەکە بەوە ڕاڤە دەکات کە بە خەڵکی دەوروبەری دراوە، لە بژێو، کشتوکاڵ و دارەکانیاندا.`,ibnKathir:`ئیبن کەسیر قودس وەک نیشتمانی هەواڵدەران لە سەردەمی ئیبراهیمەوە وەسف دەکات.`,shown:`باخە زەیتوونەکانی کێوی زەیتوون و دۆڵەکان وێنەیەکن بۆ ئەو بەرەکەتە؛ فراوانییەکەیان هونەرییە.`}},"later-buildings":{name:`دواتر دروست کران (هێڵکاری)`,sections:{history:`ئەم هێڵکارییانە ئەو بینایانە پیشان دەدەن کە ئەمڕۆ لەسەر سەکۆکەن بەڵام لە شەوی گەشتەکەدا بوونیان نەبوو: قوببەی سەخرە، کە لە ساڵی ٦٩١–٦٩٢ی زایینیدا لە سەردەمی خەلیفەی ئومەوی عەبدولمەلیکدا تەواو کرا، و مزگەوتی ئەقسا، کە یەکەمجار بە شێوەیەکی گەورە لە سەرەتای سەدەی هەشتەمدا دروست کرا.`,shown:`تەنیا وەک هێڵکاریی کاڵ و بە قەبارەی نزیکەیی پیشان دەدرێن، بۆ ئەوەی یارمەتیت بدەن ڕێگەی خۆت بدۆزیتەوە. لە ڕێکخستنەکاندا بیانکوژێنەوە.`}},ascension:{name:`میعراج (المعراج)`,sections:{verse:$u[5],miraj:`فەرموودەکان (صەحیحی بوخاری ٣٨٨٧، صەحیحی موسلیم ١٦٢، صەحیحی بوخاری ٣٤٩) باسی بەرزبوونەوەیەک بە نێو حەوت ئاسمانەکەدا دەکەن: لە هەر یەکێکیاندا پەیامبەر (د.خ) سڵاو لە هەواڵدەرانی پێشوو دەکات؛ دەبرێت بۆ سیدرەی مونتەها؛ و نوێژە ڕۆژانەکان فەرز دەکرێن، لە پەنجاوە بۆ پێنج کەم دەکرێنەوە.`,najm:`بەڕاستی لە نیشانە هەرە گەورەکانی پەروەردگاری بینی.`,connection:`ئەوە ئایەتی (النجم: ١٨)ـە لە سورەتی النجم — نەک لە (الإسراء: ١). زۆرێک لە ڕاڤەکاران (النجم: ١٣–١٨) بە شەوی میعراجەوە دەبەستنەوە، هەروەک صەحیحی موسلیم ١٧٣ بۆ سیدرەی مونتەها. عائیشە گێڕاویەتەوە کە پەیامبەر (د.خ) ئەوەی لە (النجم: ١٣)دا بینی، بە فریشتە جیبریل لە شێوە ڕاستەقینەکەی خۆیدا ڕاڤە کرد (صەحیحی موسلیم ١٧٧).`,shown:`هیچ شتێک لێرەدا ئاسمانەکان وێنا ناکات. ڕووناکییە بەرزبووەوەکە و ئاسمانی ئاسایی شەو تەنیا هێمان.`}}}},td={app:{title:`شەوڕەوی`,documentTitle:`شەوڕەوی — الإسراء: ئەزموونێکی قورئانیی سێڕەهەندی`,titleAr:`الإسراء`,tagline:`الإسراء — ئەزموونێکی قورئانیی سێڕەهەندی`,loading:{title:`ئامادەکردنی شەوەکە`,renderer:`دەستپێکردنی وێنەکێش`,terrain:`شێوەدانی زەوییەکە`,makkah:`بنیادنانی مەککە`,jerusalem:`بنیادنانی قودس`,vegetation:`چاندنی باخە زەیتوونەکان`,light:`کێشانی ڕێگەی ڕووناکییەکە`,sky:`دانانی ئەستێرەکان`,audio:`ئامادەکردنی دەنگ`,shaders:`ئامادەکردنی شەیدەرەکان`,ready:`ئامادەیە`},toasts:{edge:`گەیشتوویتە لێواری ئەم ناوچەیە. بۆ چوون بۆ شوێنێکی دیکە شریتی گەشتەکە بەکار بهێنە.`,qualityReload:`وردەکاریی زەوی و بیناکان دوای نوێکردنەوەی پەڕەکە دەگۆڕێن.`,audioBlocked:`دەنگ لەلایەن وێبگەڕەکەوە ڕێگری لێ کراوە. بۆ هەڵکردنی، لە هەر شوێنێک بدە.`,soundOn:`دەنگ هەڵکرا`,soundOff:`دەنگ کوژایەوە`,chapterEnded:`پەلە مەکە. هەرکات ئامادە بوویت، بەردەوام بە.`}},intro:{kicker:`ئەزموونێکی قورئانیی سێڕەهەندی`,lead:`تێڕامانێکی ئارام و کارلێکەر لە شەوڕەویی پەیامبەر موحەممەد (د.خ)، وەک لە یەکەم ئایەتی سورەتی الإسراء هاتووە: لە سوجدەگای حەرام لە مەککە بەرەو سوجدەگای ئەقسا لە قودس، بە شەو.`,verseTitle:`قورئان (الإسراء: ١)`,verseCite:`— {ref}، وەرگێڕانی هێڤی`,legendTitle:`ئەوەی دەیبینیت چۆن بخوێنیتەوە`,depiction:`لە ڕووی ڕێزەوە، پەیامبەر (د.خ) هەرگیز وێنا ناکرێت. ڕووناکییەکی نەرم بەبێ ڕوخسار و بەبێ هیچ تایبەتمەندییەک شوێنی گەشتەکە دیاری دەکات — هێمایەکی هونەرییە، نەک بانگەشەی ئەوەی کە ئایەتەکە ئەو وەک ڕووناکی وەسف دەکات.`,distinction:`تەنیا ئایەتەکە قورئانە. وردەکارییەکانی فەرموودە، ڕاڤەکاران، مێژوو و بونیادنانەوەی هونەری لە هەر شوێنێک دەرکەون، بە ناونیشانی خۆیانەوە دیاری کراون.`,begin:`دەستپێکردنی گەشتی ڕێنموونیکراو`,beginHint:`حەوت بەش، نزیکەی ٩ خولەک — هەرکات بتەوێت ڕایبگرە`,explore:`گەڕانی ئارام`,exploreHint:`لە مەککە، لە ڕێگەکە و لە قودس پیاسە بکە`,chapters:`بەشەکان`,verse:`ئایەتەکە`,sources:`سەرچاوەکان`,settings:`ڕێکخستنەکان`,controls:`کۆنترۆڵەکان`,about:`دەربارە`,exit:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`,soundNote:`دەنگ ئارەزوومەندانە و کپە — تەنیا دەنگی شەو، بێ مۆسیقا و بێ دەنگی مرۆڤ. بە دوگمەی بڵندگۆکە یان لە ڕێکخستنەکاندا بیکوژێنەوە.`},hud:{chapterOf:`بەشی {n} لە {total}`,readVerse:`خوێندنەوەی ئایەتەکە`,verse:`ئایەتەکە`,chapters:`بەشەکان`,sources:`سەرچاوەکان`,help:`یارمەتی`,settings:`ڕێکخستنەکان`,pause:`لیستی وەستان`,mute:`کوژاندنەوەی دەنگ`,unmute:`هەڵکردنی دەنگ`,inspectKey:`E`,inspect:`سەیرکردن`,inspectWhat:`سەیرکردن: {name}`,lookTitle:`بۆ سەیرکردنی دەوروبەر کرتە بکە`,lookBody:`بە W A S D یان تیرەکان بجووڵێ • Shift بۆ خێراتر ڕۆیشتن • E بۆ سەیرکردن • Esc بۆ ئازادکردنی ماوس`,watchChapter:`سەیرکردنی ئەم بەشە`,narration:`گێڕانەوە`,captionHint:`بۆ خوێندنەوەی سەرچاوەکان کرتە لە ژێرنووسەکە بکە`,phraseLabel:`لە ئایەتی (الإسراء: ١)`,journeyBar:`گەشتەکە`,journeyFrom:`سوجدەگای حەرام`,journeyTo:`سوجدەگای ئەقسا`,journeyGo:`چوون بۆ بەشی {n}: {title}`},transport:{prev:`بەشی پێشوو`,next:`بەشی دواتر`,play:`لێدان`,pause:`وەستاندن`,replay:`دووبارەکردنەوەی بەش`,continue:`بەردەوامبوون`,continueTo:`بەردەوامبوون بۆ بەشی {n}`,finish:`کۆتایی`,explore:`لێرەوە بگەڕێ`,exploreHint:`گەشتی ڕێنموونیکراو جێبهێڵە و بە دەوروبەردا پیاسە بکە`,progress:`پێشکەوتنی بەش`},panels:{close:`داخستن`,infoReadVerse:`خوێندنەوەی ئایەتەکە`,sourcesFor:`سەرچاوەکان`,versesTitle:`ئایەتەکە — قورئان (الإسراء: ١)`,tabVerse:`الإسراء: ١`,tabPhrases:`بڕگە بە بڕگە`,tabRelated:`ئایەتە پەیوەندیدارەکان`,basmalaNote:`بەسمەلە سورەتی الإسراء دەکاتەوە؛ بەشێک نییە لە ئایەتی ١.`,phrasesIntro:`هەر بەشێکی گەشتی ڕێنموونیکراو تێڕامانە لە بڕگەیەکی ئایەتەکە. ڕێکخستنی بڕگە عەرەبی و کوردییەکان بەرامبەر یەکتر یارمەتییەکە بۆ خوێندنەوە، نەک وەرگێڕانی وشە بە وشە.`,phraseChapter:`بەشی {n}`,relatedIntro:`ئەم ئایەتانە بەشێک نین لە (الإسراء: ١). ڕاڤەکاران و فەرموودەکان بە شەوی گەشتەکەوە دەیانبەستنەوە؛ لێرەدا هاتوون بۆ ئەوەی خۆت بیانخوێنیتەوە.`,related1760:`ئیبن عەبباس ئەوەی هێڤی لە (الإسراء: ٦٠) بە «ئەو خەونەیش کە پێشانمان دایت» وەریگێڕاوە، بەوە ڕاڤە کردووە کە ئەو شتانە بوون کە لە شەوی گەشتەکەدا پێشانی پەیامبەر (د.خ) دران (صەحیحی بوخاری ٣٨٨٨).`,related5313:`زۆرێک لە ڕاڤەکاران (النجم: ١٣–١٨) بە میعراجەوە دەبەستنەوە (بەراورد بکە بە صەحیحی موسلیم ١٧٣)؛ عائیشە گێڕاویەتەوە کە پەیامبەر (د.خ) ئەوەی لە (النجم: ١٣) هاتووە بە فریشتە جیبریل ڕاڤە کردووە (صەحیحی موسلیم ١٧٧).`,arabicSource:`عەرەبی: دەقی قورئانی تەنزیل (ڕێنووسی عوسمانی، وەشانی ١.١)، tanzil.net — Creative Commons Attribution 3.0، وەک خۆی بەبێ گۆڕانکاری، و لەگەڵ دوو کۆپیی دیکە بەراورد کراوە.`,tafsirLabel:`التفسير الميسر:`,translationSource:`کوردی: وەرگێڕانی هێڤی، وەرگێڕ: ئەلەند کاوە عەلی ئەحمەد — هەموو مافەکان پارێزراون؛ بە ڕێپێدانی وەرگێڕ بەکار هاتووە. وەرگێڕان واتا دەگەیەنێت؛ تەنیا دەقە عەرەبییەکە قورئانە.`,tanzilLink:`tanzil.net`,listen:`گوێگرتن لە خوێندنەوەی (الإسراء: ١) لە Quran.com`,listenNote:`quran.com لە تابێکی نوێدا دەکاتەوە. هیچ خوێندنەوەیەکی دەنگی لەگەڵ ئەم ئەزموونەدا نییە.`,chaptersTitle:`بەشەکان`,chapterCurrent:`بەشی ئێستا`,chapterGo:`چوون بۆ بەشی {n}`,pauseTitle:`وەستێنراوە`,resume:`بەردەوامبوون`,restartChapter:`دەستپێکردنەوەی ئەم بەشە`,restartAll:`دەستپێکردنەوە لە سەرەتاوە`,mainMenu:`لیستی سەرەکی`,exitSite:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`,sourcesTitle:`سەرچاوەکان و ناونیشانەکان`,sourcesIntro:`هەرچی دەیخوێنیتەوە ناونیشانی لەسەرە. تەنیا ئەو دەقەی ناونیشانی ”قورئان“ی لەسەرە ئایەتەکەیە؛ ئەوانی دیکە لەم سەرچاوانەی خوارەوە وەرگیراون یان هەڵبژاردنێکی هونەرین.`,sourcesHadith:`فەرموودە`,sourcesTafsir:`ڕاڤەکان (تەفسیر)`,sourcesSira:`ژیاننامە (سیرە)`,sourcesHistory:`مێژوو`,sourcesQuran:`دەقی قورئان`,sourcesNote:`فەرموودەکان بە ژمارەکانی sunnah.com ئاماژەیان پێ کراوە و لێرەدا بە واتا گێڕدراونەتەوە؛ هیچ وەرگێڕانێکی فەرموودە وەک خۆی دانەنراوە. بەستەرەکان لە تابێکی نوێدا دەکرێنەوە.`,open:`کردنەوە`},settings:{title:`ڕێکخستنەکان`,language:`زمان`,languageNote:`گۆڕینی زمان پەڕەکە نوێ دەکاتەوە.`,graphics:`گرافیک`,quality:`کوالیتیی گرافیک`,qualityAuto:`خۆکار`,qualityLow:`نزم (باشترین بۆ مۆبایلە کۆنەکان)`,qualityMedium:`مامناوەند`,qualityHigh:`بەرز`,qualityNote:`ڕوونی وێنە خۆکارانە دەگونجێنرێت بۆ ئەوەی جووڵە نەرم بمێنێتەوە.`,sound:`دەنگ`,soundOn:`دەنگ هەڵکراوە (دەنگی کپی شەو)`,volume:`بەرزیی دەنگ`,reading:`خوێندنەوە`,arabicCaptions:`پیشاندانی وشە عەرەبییەکانی ئایەتەکە لە ژێرنووسەکاندا`,pace:`خێرایی گێڕانەوە`,paceNormal:`ئاسایی`,paceSlow:`هێواشتر (کاتی زیاتر بۆ خوێندنەوە)`,continueMode:`لە کۆتایی هەر بەشێکدا`,continueWait:`چاوەڕێم بکە`,continueAuto:`خۆکارانە بەردەوام بە`,textSize:`قەبارەی نووسین`,textNormal:`ئاسایی`,textLarge:`گەورە`,textLarger:`گەورەتر`,view:`ئەوەی پیشان دەدرێت`,lightStyle:`ڕووناکییە هێماییەکە`,lightFigure:`ڕووناکییەکی نەرمی ڕاوەستاو (بێ هیچ تایبەتمەندییەک)`,lightPoint:`تەنیا خاڵێکی ڕووناکی`,laterBuildings:`هێڵکاریی ئەو بینایانەی دواتر لەسەر سەکۆکەی قودس دروست کران`,markers:`پیشاندانی نیشانە لەسەر ئەو شوێنانەی دەتوانیت سەیریان بکەیت`,comfort:`ئاسوودەیی`,motion:`کەمکردنەوەی جووڵە`,motionSystem:`پەیڕەوی ڕێکخستنی سیستەم`,motionOn:`هەڵکراو`,motionOff:`کوژاوە`,motionNote:`کامێرای ئارامتر، سووڕانی هێواشتری ئاسمان، بێ جووڵەی ڕووکار.`,sensitivity:`هەستیاریی سەیرکردن`,invertY:`پێچەوانەکردنەوەی سەیرکردنی ستوونی`},help:{title:`کۆنترۆڵەکان`,desktop:`تەختەکلیل و ماوس`,touch:`شاشەی دەستلێدان`,guidedTitle:`گەشتی ڕێنموونیکراو`,guided:`کامێراکە خۆی بە هێواشی دەجووڵێت لە کاتێکدا ژێرنووسەکان دەردەکەون. هەر بەشێک لە کۆتاییدا چاوەڕێت دەکات (دەتوانیت ئەمە لە ڕێکخستنەکاندا بگۆڕیت). هەرکات بتەوێت ڕایبگرە، کرتە لە ژێرنووسێک بکە بۆ خوێندنەوەی سەرچاوەکانی، یان ئایەتەکە بکەرەوە — تا پانێڵێک کراوە بێت گەشتەکە ڕادەگیرێت.`,exploreTitle:`گەڕانی ئارام`,explore:`بە ئازادی لە مەککە، لەسەر گردۆڵکەیەک لە ڕێگەکەدا و لەسەر سەکۆکەی قودس پیاسە بکە. بۆ گواستنەوە لە نێوان شوێن و ساتەکانی شەوەکەدا، شریتی گەشتەکەی خوارەوە بەکار بهێنە.`,rows:[[`W A S D / تیرەکان`,`جووڵە`],[`Shift`,`خێراتر ڕۆیشتن`],[`ماوس`,`سەیرکردنی دەوروبەر (سەرەتا کرتە لە دیمەنەکە بکە)`],[`E یان کرتە`,`سەیرکردنی ئەوەی لە ناوەڕاستدایە`],[`Esc`,`ئازادکردنی ماوس / داخستنی پانێڵ / وەستان`],[`Space`,`لێدان، وەستاندن یان بەردەوامبوونی گەشتی ڕێنموونیکراو`],[`N / B`,`بەشی دواتر / پێشوو`],[`1 – 7`,`چوون بۆ بەشێک`],[`V`,`خوێندنەوەی ئایەتەکە`],[`C`,`بەشەکان`],[`M`,`هەڵکردن یان کوژاندنەوەی دەنگ`],[`H`,`ئەم یارمەتییە`],[`P`,`لیستی وەستان`]],touchRows:[[`دەستەی جووڵە (خوارەوەی چەپ)`,`جووڵە — بە تەواوی پاڵی بنێ بۆ خێراتر ڕۆیشتن`],[`ڕاکێشان لە شوێنێکی دیکە`,`سەیرکردنی دەوروبەر`],[`لێدان لە شوێنێک یان نیشانەیەک`,`سەیرکردنی`],[`دوگمەی سەیرکردن`,`سەیرکردنی ئەوەی لە ناوەڕاستدایە`],[`شریتی گەشتەکە`,`چوون بۆ شوێنێک یان بەشێک`]],tip:`ئەڵقە درەوشاوەکان ئەو شوێنانە دیاری دەکەن کە دەتوانیت سەیریان بکەیت. دەتوانیت لە زەوی یان ئاسمانیش بدەیت. لە ڕێکخستنەکاندا دەتوانیت ئەڵقەکان بکوژێنیتەوە.`},about:{title:`دەربارەی ئەم ئەزموونە`,purposeTitle:`مەبەست`,purpose:`تێڕامانێکی فێرکاری و بەڕێز لە شەوڕەوی (الإسراء) وەک لە (الإسراء: ١) هاتووە. بونیادنانەوەیەکی مێژوویی یان شوێنەوارناسی نییە، و هیچ وێنەیەک لێرەدا بانگەشەی ئەوە ناکات کە ئەوەی ڕوویداوە پیشان دەدات.`,labelsTitle:`ناونیشانەکان`,depictionTitle:`وێناکردن`,depiction:`پەیامبەر موحەممەد (د.خ) هەرگیز وێنا ناکرێت: نە پەیکەر، نە ڕوخسار، نە دەنگ. ڕووناکییەکی نەرمی بێ تایبەتمەندی شوێنی گەشتەکە دیاری دەکات؛ ئەمە هەڵبژاردنێکی هونەریی ئەم ماڵپەڕەیە، نەک بانگەشەی ئەوەی کە ئایەتی (الإسراء: ١) ئەو وەک ڕووناکیدەر وەسف دەکات. بوراق، فریشتە جیبریل، هەواڵدەرانی پێشوو و ئاسمانەکانیش وێنا ناکرێن؛ ئەو فەرموودانەی باسیان دەکەن بە واتا گێڕدراونەتەوە و ئاماژەیان پێ کراوە.`,placesTitle:`شوێنەکان`,places:`مەککە و قودس بە سادەیی وەک ئەوەی لەوانەیە لە دەوروبەری ساڵی ٦٢٠ی زایینی بووبن بونیاد نراونەتەوە: کەعبە لە ناو حەرەمێکی کراوەدا کە خانوو دەوری داوە؛ سەکۆ گەورەکەی قودس کە زۆربەی بەتاڵ بوو، پێش دروستکردنی قوببەی سەخرە (٦٩١–٦٩٢ی زایینی) و مزگەوتی ئەقسا (سەرەتای سەدەی هەشتەم). دووریی نێوانیان نزیکەی سەد هێندە کورت کراوەتەوە؛ ئاراستەکەی ڕاستە.`,textsTitle:`دەقەکان`,arabic:`عەرەبی: دەقی قورئانی تەنزیل (عوسمانی، وەشانی ١.١)، CC BY 3.0، وەک خۆی گوازراوەتەوە و لەگەڵ api.alquran.cloud و دەقی کۆمەڵگەی پاشا فەهد (api.quran.com) بەراورد کراوە.`,translation:`کوردی: وەرگێڕانی هێڤی (وەرگێڕانی واتاکانی قورئان بۆ کوردیی ناوەندی)، وەرگێڕ: ئەلەند کاوە عەلی ئەحمەد؛ بە ڕێپێدانی وەرگێڕ بەکار هاتووە. ئایەتەکان ڕاستەوخۆ لە بنکەدراوەی وەرگێڕانەکەوە وەرگیراون.`,hadith:`فەرموودەکان بە واتا گێڕدراونەتەوە و بە ناوی کۆکراوە و ژمارەکەیانەوە (ژمارەکردنی sunnah.com) ئاماژەیان پێ کراوە؛ ڕاڤەکان و ژیاننامە کۆنەکە بە ناوی نووسەر و بەرهەمەکەوە ئاماژەیان پێ کراوە. بڕوانە ”سەرچاوەکان“.`,tanzilNotice:`ئاگاداریی مافی بڵاوکردنەوەی تەنزیل (وەک پێویستە دووبارە کراوەتەوە):`,audioTitle:`دەنگ`,audio:`هەموو دەنگەکان لە وێبگەڕەکەتدا دروست دەکرێن: سیسرک، کوندەپەپوویەکی دوور، شنەبای دەگمەن و باڵندە لە بەرەبەیاندا. هیچ مۆسیقا و هیچ خوێندنەوەیەکی قورئان نییە. بۆ گوێگرتن لە خوێندنەوەی ئایەتەکە، بەستەرەکەی پانێڵی ئایەتەکە (quran.com) بەکار بهێنە.`,assetsTitle:`کەرەستەکان و تایبەتمەندی`,assets:`هەموو دیمەن، بینا، دار، ئەستێرە و دەنگێک بە کۆد دروست کراوە؛ هیچ مۆدێلی سێڕەهەندی، وێنە یان فایلی دەنگیی لایەنی سێیەم بەکار نەهاتووە. فۆنتی عەرەبی Amiri Quran ـە (SIL Open Font License 1.1) و فۆنتی کوردی و عەرەبیی ڕووکار Vazirmatn ـە (SIL Open Font License 1.1)، هەردووکیان لەگەڵ ماڵپەڕەکەدا هاتوون. هیچ زانیارییەک کۆ ناکرێتەوە؛ ڕێکخستنەکان تەنیا لە وێبگەڕەکەتدا هەڵدەگیرێن. وەک هەر ماڵپەڕێک، ئەو کۆدەی دەگاتە وێبگەڕەکەت دەتوانرێت بپشکنرێت.`,limitsTitle:`سنوورەکان`,limits:`قەبارە، دووری، بیناکان، مانگ، کات و ڕووناکییەکە هەڵبژاردنی هونەرین. لە شوێنێک سەرچاوەکان جیاواز بن، ئەزموونەکە ئەوە دەڵێت نەک بە بێدەنگی یەکێکیان هەڵبژێرێت.`},complete:{title:`گەشتەکە تەواو بوو`,body:`تێڕامات لە شەوڕەوی کرد، وەک لە (الإسراء: ١) هاتووە.`,explore:`گەڕانی ئارام`,restart:`دووبارە سەیرکردن لە سەرەتاوە`,verse:`خوێندنەوەی ئایەتەکە`,sources:`سەرچاوەکان`},fallback:{noWebglTitle:`گرافیکی سێڕەهەندی بەردەست نییە`,noWebgl:`ئەم ئەزموونە پێویستی بە WebGL 2 هەیە، کە ئەم وێبگەڕە یان ئامێرە دابینی ناکات (یان کوژاوەتەوە). هێشتا دەتوانیت ئایەتەکە و دەقی هەموو بەشەکان لە خوارەوە بخوێنیتەوە.`,lostTitle:`گرافیکەکە وەستا`,lost:`وێبگەڕەکە گرافیکە سێڕەهەندییەکەی وەستاند، زۆرجار لەبەر ئەوەی بیرگەی ئامێرەکە کەم بووەتەوە. بۆ بەردەوامبوون پەڕەکە نوێ بکەرەوە، یان دەقەکەی خوارەوە بخوێنەوە.`,errorTitle:`هەڵەیەک ڕوویدا`,error:`ئەزموونەکە نەیتوانی دەست پێ بکات. دەتوانیت پەڕەکە نوێ بکەیتەوە، یان ئایەتەکە و دەقەکەی خوارەوە بخوێنیتەوە.`,reload:`نوێکردنەوە`,storyTitle:`بەشەکان`}},nd={"bukhari-349":{cite:`Sahih al-Bukhari 349`,detail:`Book of Prayer, first report; narrated by Abu Dharr. The Prophet relates that the roof of his house in Makkah was opened, his chest was washed with Zamzam water, and he was taken up to the heavens, where the prayers were enjoined.`,url:`https://sunnah.com/bukhari:349`,type:`hadith`},"bukhari-3886":{cite:`Sahih al-Bukhari 3886`,detail:`Book of the Merits of the Ansar; narrated by Jabir ibn Abdullah. When the Quraysh disbelieved him, Allah displayed Jerusalem before him and he described it to them.`,url:`https://sunnah.com/bukhari:3886`,type:`hadith`},"bukhari-3887":{cite:`Sahih al-Bukhari 3887`,detail:`Book of the Merits of the Ansar; narrated by Anas ibn Malik from Malik ibn Sasaa. The long account of the Night Journey and the Ascension (al-Miʿraj), beginning while the Prophet lay in al-Hatim (al-Hijr).`,url:`https://sunnah.com/bukhari:3887`,type:`hadith`},"bukhari-3888":{cite:`Sahih al-Bukhari 3888`,detail:`Book of the Merits of the Ansar; Ibn Abbas on verse 17:60: the sights shown to the Prophet on the night he was taken to Jerusalem were actual sights, not dreams.`,url:`https://sunnah.com/bukhari:3888`,type:`hadith`},"bukhari-4709":{cite:`Sahih al-Bukhari 4709`,detail:`Book of Commentary, Surat al-Isra; narrated by Abu Huraira. At Jerusalem on the night of the journey he was offered cups of wine and milk and took the milk.`,url:`https://sunnah.com/bukhari:4709`,type:`hadith`},"muslim-162a":{cite:`Sahih Muslim 162a`,detail:`Book of Faith; narrated by Anas ibn Malik. Al-Buraq; the Prophet tethers it at Jerusalem to the ring used by the prophets, prays two units of prayer in the mosque, chooses milk, and is taken up to the heavens.`,url:`https://sunnah.com/muslim:162a`,type:`hadith`},"muslim-172":{cite:`Sahih Muslim 172`,detail:`Book of Faith; narrated by Abu Huraira. Questioned by the Quraysh about Jerusalem, the Prophet is shown it; he also saw the earlier prophets at prayer and, when the time of prayer came, led them.`,url:`https://sunnah.com/muslim:172`,type:`hadith`},"muslim-173":{cite:`Sahih Muslim 173`,detail:`Book of Faith; narrated from Abdullah. On the night of the journey the Prophet was taken to the Lote Tree of the utmost boundary (Sidrat al-Muntaha); the narrator connects it with verse 53:16.`,url:`https://sunnah.com/muslim:173`,type:`hadith`},"muslim-177a":{cite:`Sahih Muslim 177a`,detail:`Book of Faith; Masruq reports from Aisha that the Prophet explained what he saw in verse 53:13 as the angel Gabriel in his true form.`,url:`https://sunnah.com/muslim:177a`,type:`hadith`},tabari:{cite:`al-Tabari, Jamiʿ al-Bayan`,detail:`The commentary on the Quran by Muhammad ibn Jarir al-Tabari (d. 923 CE), on verse 17:1.`,type:`tafsir`},"ibn-kathir":{cite:`Ibn Kathir, Tafsir al-Qurʾan al-ʿAzim`,detail:`The commentary on the Quran by Ismaʿil ibn Kathir (d. 1373 CE), on verse 17:1.`,type:`tafsir`},zamakhshari:{cite:`al-Zamakhshari, al-Kashshaf`,detail:`The commentary on the Quran by Mahmud al-Zamakhshari (d. 1144 CE), on verse 17:1.`,type:`tafsir`},"ibn-ishaq":{cite:`Ibn Ishaq, Sirat Rasul Allah`,detail:`The early biography of the Prophet by Muhammad ibn Ishaq (d. c. 767 CE), as edited by Ibn Hisham; English translation by A. Guillaume, The Life of Muhammad (1955), the chapters on the Night Journey and the Ascension.`,type:`sira`},"history-haram":{cite:`History of the Sacred Mosque`,detail:`Standard historical accounts of Makkah and its sanctuary, beginning with al-Azraqi’s Akhbar Makka (9th century): the rebuilding of the Kaaba by the Quraysh around 605 CE, and the first enclosure of the sanctuary under the caliph Umar in 17 AH / 638 CE.`,type:`history`},"history-jerusalem":{cite:`History of the Jerusalem sanctuary`,detail:`Historical and archaeological scholarship on Jerusalem: the platform built in the time of Herod; the destruction of 70 CE; Sasanian rule from 614 CE and the Byzantine return around 630 CE; the Dome of the Rock, dated by its own inscription to 72 AH (691–692 CE); the first large al-Aqsa Mosque in the early 8th century.`,type:`history`}},rd={en:{lang:`en`,dir:`ltr`,digits:`latn`,quote:[`“`,`”`],ui:{app:{title:`The Night Journey`,documentTitle:`The Night Journey — Al-Isra: A Quranic 3D Experience`,titleAr:`الإسراء`,tagline:`Al-Isra — a Quranic 3D experience`,loading:{title:`Preparing the night`,renderer:`Starting the renderer`,terrain:`Shaping the land`,makkah:`Building Makkah`,jerusalem:`Building Jerusalem`,vegetation:`Planting the olive groves`,light:`Tracing the path of light`,sky:`Placing the stars`,audio:`Preparing sound`,shaders:`Compiling shaders`,ready:`Ready`},toasts:{edge:`You have reached the edge of this area. Use the journey bar to go to another place.`,qualityReload:`Terrain and building detail change after reloading the page.`,audioBlocked:`Sound is blocked by the browser. Tap anywhere to enable it.`,soundOn:`Sound on`,soundOff:`Sound off`,chapterEnded:`Take your time. Continue when you are ready.`}},intro:{kicker:`A Quranic 3D experience`,lead:`A quiet, interactive reflection on the Night Journey of the Prophet Muhammad (peace be upon him), as told in the first verse of Surat al-Isra: from al-Masjid al-Haram in Makkah to al-Masjid al-Aqsa in Jerusalem, by night.`,verseTitle:`Quran 17:1`,verseCite:`— {ref}, tr. M. M. Pickthall`,legendTitle:`How to read what you see`,depiction:`Out of respect, the Prophet is never depicted. A soft light without face or features marks the journey — an artistic symbol, not a claim that the verse describes him as light.`,distinction:`Only the verse is Quran. Details from hadith, commentators, history and the artistic reconstruction are labelled as such wherever they appear.`,begin:`Begin the guided journey`,beginHint:`Seven chapters, about 9 minutes — pause any time`,explore:`Explore calmly`,exploreHint:`Walk in Makkah, on the way, and in Jerusalem`,chapters:`Chapters`,verse:`The verse`,sources:`Sources`,settings:`Settings`,controls:`Controls`,about:`About`,exit:`Return to the main website`,soundNote:`Sound is optional and quiet — night sounds only, no music or voices. Turn it off with the speaker button or in Settings.`},hud:{chapterOf:`Chapter {n} of {total}`,readVerse:`Read the verse`,verse:`The verse`,chapters:`Chapters`,sources:`Sources`,help:`Help`,settings:`Settings`,pause:`Pause menu`,mute:`Turn sound off`,unmute:`Turn sound on`,inspectKey:`E`,inspect:`Inspect`,inspectWhat:`Inspect: {name}`,lookTitle:`Click to look around`,lookBody:`Move with W A S D or the arrow keys · Shift to walk faster · E to inspect · Esc to release the mouse`,watchChapter:`Watch this chapter`,narration:`Narration`,captionHint:`Click the caption to read the sources`,phraseLabel:`In verse 17:1`,journeyBar:`The journey`,journeyFrom:`al-Masjid al-Haram`,journeyTo:`al-Masjid al-Aqsa`,journeyGo:`Go to chapter {n}: {title}`},transport:{prev:`Previous chapter`,next:`Next chapter`,play:`Play`,pause:`Pause`,replay:`Replay chapter`,continue:`Continue`,continueTo:`Continue to chapter {n}`,finish:`Finish`,explore:`Explore here`,exploreHint:`Leave the guided journey and walk around`,progress:`Chapter progress`},panels:{close:`Close`,infoReadVerse:`Read the verse`,sourcesFor:`Sources`,versesTitle:`The verse — Quran 17:1`,tabVerse:`17:1`,tabPhrases:`Phrase by phrase`,tabRelated:`Related verses`,basmalaNote:`The Basmala opens Surat al-Isra; it is not part of verse 1.`,phrasesIntro:`Each chapter of the guided journey reflects on one phrase of the verse. The alignment of Arabic and English phrases is a reading aid, not a word-for-word translation.`,phraseChapter:`Chapter {n}`,relatedIntro:`These verses are not part of 17:1. Commentators and hadith connect them with the night of the journey; they are given here so you can read them yourself.`,related1760:`Ibn Abbas explained the “sight” of 17:60 as what the Prophet was shown on the night of the journey (Sahih al-Bukhari 3888).`,related5313:`Many commentators connect An-Najm 53:13–18 with the ascension (compare Sahih Muslim 173); Aisha reported the Prophet’s explanation of 53:13 as the angel Gabriel (Sahih Muslim 177a).`,arabicSource:`Arabic: Tanzil Quran Text (Uthmani script, v1.1), tanzil.net — Creative Commons Attribution 3.0, reproduced verbatim and checked against two further copies.`,tafsirLabel:`Al-Tafsir al-Muyassar:`,translationSource:`English: Mohammed Marmaduke Pickthall, The Meaning of the Glorious Koran (1930) — public domain. A translation conveys the meaning; only the Arabic is the Quran.`,tanzilLink:`tanzil.net`,listen:`Listen to recitations of 17:1 on Quran.com`,listenNote:`Opens quran.com in a new tab. No recitation is bundled with this experience.`,chaptersTitle:`Chapters`,chapterCurrent:`Current chapter`,chapterGo:`Go to chapter {n}`,pauseTitle:`Paused`,resume:`Resume`,restartChapter:`Restart this chapter`,restartAll:`Restart from the beginning`,mainMenu:`Main menu`,exitSite:`Return to the main website`,sourcesTitle:`Sources and labels`,sourcesIntro:`Everything you read is labelled. Only text marked “Quran” is the verse; the rest comes from the sources below or is an artistic choice.`,sourcesHadith:`Hadith`,sourcesTafsir:`Commentaries (tafsir)`,sourcesSira:`Biography (sira)`,sourcesHistory:`History`,sourcesQuran:`Quran text`,sourcesNote:`Hadith are cited by their sunnah.com reference numbers and paraphrased here; no hadith translation is reproduced. Links open in a new tab.`,open:`Open`},settings:{title:`Settings`,language:`Language`,languageNote:`Changing the language reloads the page.`,graphics:`Graphics`,quality:`Graphics quality`,qualityAuto:`Automatic`,qualityLow:`Low (best for older phones)`,qualityMedium:`Medium`,qualityHigh:`High`,qualityNote:`Resolution adapts automatically to keep motion smooth.`,sound:`Sound`,soundOn:`Sound on (quiet night sounds)`,volume:`Volume`,reading:`Reading`,arabicCaptions:`Show the Arabic words of the verse in captions`,pace:`Narration pace`,paceNormal:`Normal`,paceSlow:`Slower (more time to read)`,continueMode:`At the end of each chapter`,continueWait:`Wait for me`,continueAuto:`Continue automatically`,textSize:`Text size`,textNormal:`Normal`,textLarge:`Large`,textLarger:`Larger`,view:`What is shown`,lightStyle:`The symbolic light`,lightFigure:`A soft, upright light (no features)`,lightPoint:`Only a point of light`,laterBuildings:`Outline the buildings built later on the platform in Jerusalem`,markers:`Show markers on inspectable places`,comfort:`Comfort`,motion:`Reduce motion`,motionSystem:`Follow system setting`,motionOn:`On`,motionOff:`Off`,motionNote:`Calmer camera, slower turning of the sky, no interface animations.`,sensitivity:`Look sensitivity`,invertY:`Invert vertical look`},help:{title:`Controls`,desktop:`Keyboard and mouse`,touch:`Touch screen`,guidedTitle:`Guided journey`,guided:`The camera moves slowly by itself while captions appear. Each chapter waits for you at its end (you can change this in Settings). Pause at any time, click a caption to read its sources, or open the verse — the journey pauses while a panel is open.`,exploreTitle:`Calm exploration`,explore:`Walk freely in Makkah, on a knoll along the way, and on the platform in Jerusalem. Use the journey bar at the bottom to move between places and moments of the night.`,rows:[[`W A S D / arrow keys`,`Move`],[`Shift`,`Walk faster`],[`Mouse`,`Look around (click the view first)`],[`E or click`,`Inspect what is in the centre`],[`Esc`,`Release the mouse / close a panel / pause`],[`Space`,`Play, pause or continue the guided journey`],[`N / B`,`Next / previous chapter`],[`1 – 7`,`Go to a chapter`],[`V`,`Read the verse`],[`C`,`Chapters`],[`M`,`Sound on or off`],[`H`,`This help`],[`P`,`Pause menu`]],touchRows:[[`Joystick (bottom left)`,`Move — push fully to walk faster`],[`Drag elsewhere`,`Look around`],[`Tap a place or marker`,`Inspect it`],[`Inspect button`,`Inspect what is in the centre`],[`Journey bar`,`Go to a place or chapter`]],tip:`Glowing rings mark places you can inspect. You can also tap the land or the sky. Turn the rings off in Settings.`},about:{title:`About this experience`,purposeTitle:`Purpose`,purpose:`An educational, respectful reflection on the Night Journey (al-Isra) as told in Quran 17:1. It is not a historical or archaeological reconstruction, and no image here claims to show what happened.`,labelsTitle:`The labels`,depictionTitle:`Depiction`,depiction:`The Prophet Muhammad (peace be upon him) is never depicted: no figure, face or voice. A soft light without features marks the journey; it is an artistic choice of this website, not a claim that verse 17:1 describes him as emitting light. Al-Buraq, the angel Gabriel, the earlier prophets and the heavens are not depicted either; the hadith that mention them are paraphrased and cited.`,placesTitle:`Places`,places:`Makkah and Jerusalem are reconstructed simply as they may have looked around 620 CE: the Kaaba in an open sanctuary ringed by houses; the great platform in Jerusalem standing largely empty, before the Dome of the Rock (691–692 CE) and the al-Aqsa Mosque (early 8th century) were built. The distance between them is compressed about a hundredfold; the direction is true.`,textsTitle:`Texts`,arabic:`Arabic: Tanzil Quran Text (Uthmani, v1.1), CC BY 3.0, copied verbatim and cross-checked against api.alquran.cloud and the King Fahd Complex text (api.quran.com).`,translation:`English: M. M. Pickthall, The Meaning of the Glorious Koran (1930), public domain; three digital copies compared.`,hadith:`Hadith are paraphrased and cited by collection and number (sunnah.com numbering); commentaries and the early biography are cited by author and work. See “Sources”.`,tanzilNotice:`Tanzil copyright notice (reproduced as required):`,audioTitle:`Sound`,audio:`All sound is generated in your browser: crickets, a distant owl, rare gusts of wind and birds at dawn. There is no music and no recitation. To listen to a recitation of the verse, use the link in the verse panel (quran.com).`,assetsTitle:`Assets and privacy`,assets:`Every landscape, building, tree, star and sound is generated by code; no third-party 3D models, images or audio files are used. The Arabic font is Amiri Quran (SIL Open Font License 1.1), served with the site. No data is collected; settings are stored only in your browser. Like any website, the code delivered to your browser can be inspected.`,limitsTitle:`Limitations`,limits:`Sizes, distances, buildings, the moon, the timing and the light are artistic choices. Where sources differ, the experience says so rather than choosing silently.`},complete:{title:`The journey is complete`,body:`You have reflected on the Night Journey as told in Quran 17:1.`,explore:`Explore calmly`,restart:`Watch again from the beginning`,verse:`Read the verse`,sources:`Sources`},fallback:{noWebglTitle:`3D graphics are not available`,noWebgl:`This experience needs WebGL 2, which this browser or device does not provide (or it is turned off). You can still read the verse and the text of every chapter below.`,lostTitle:`The graphics stopped`,lost:`The browser stopped the 3D graphics, often because the device ran low on memory. Reload to continue, or read the text below.`,errorTitle:`Something went wrong`,error:`The experience could not start. You can reload, or read the verse and the text below.`,reload:`Reload`,storyTitle:`The chapters`}},content:{phrases:[`Glorified be He Who carried His servant`,`by night`,`from the Inviolable Place of Worship`,`to the Far distant place of worship`,`the neighbourhood whereof We have blessed`,`that We might show him of Our tokens!`,`Lo! He, only He, is the Hearer, the Seer.`],sources:Object.fromEntries(Object.entries(nd).map(([e,t])=>[e,{cite:t.cite,detail:t.detail}])),sourceKinds:{quran:{label:`Quran`,description:`The words of the verse: Arabic from the verified Tanzil text, English from Pickthall’s translation, quoted word for word, with the verse reference.`},summary:{label:`What the verse says`,description:`A plain restatement of the cited verse, adding nothing to it.`},hadith:{label:`Hadith`,description:`A paraphrase of a report in a hadith collection, cited by collection and number. Not part of the verse.`},commentary:{label:`Commentary`,description:`The view of a named Quran commentator, or a report from the early biography of the Prophet (sira). Not part of the verse.`},history:{label:`History`,description:`Historical and archaeological information about the places. Not part of the verse.`},reconstruction:{label:`Artistic reconstruction`,description:`A choice made for this experience — landscape, buildings, light, sky and sound — not a record of the event.`}},chapters:{makkah:{title:`The Night in Makkah`,subtitle:`Glorified be He Who carried His servant`,short:`Makkah`,cues:{m1:`Makkah by night, around the year 620 CE. The valley, the houses and the sanctuary are an artistic reconstruction; the verse does not describe them.`,m2:`Glorified be He Who carried His servant`,m3:`The verse opens by glorifying Allah and presents the journey as His act: He carried His servant. It does not name the servant.`,m4:`The hadith narrate the journey in the Prophet Muhammad’s own words. In Sahih al-Bukhari 3887 the night began while he lay in al-Hatim (al-Hijr), beside the Kaaba; in Sahih al-Bukhari 349, in his house in Makkah.`,m5:`The soft light is a symbol chosen for this website. It is not a portrait, it has no face or bodily features, and it is not a claim that verse 17:1 describes the Prophet as light — the verse does not say so.`}},departure:{title:`From the Inviolable Place of Worship`,subtitle:`al-Masjid al-Haram`,short:`Departure`,cues:{d1:`from the Inviolable Place of Worship`,d2:`In the Prophet’s time the Sacred Mosque was the open ground around the Kaaba, closely ringed by houses. Its first wall is attributed to the caliph Umar, in 17 AH (638 CE).`,d3:`Al-Tabari records the different reports of where the journey began — the sanctuary itself or a house in Makkah. Commentators note that the whole sacred precinct can be called al-Masjid al-Haram.`,d4:`The hadith (Sahih al-Bukhari 3887, Sahih Muslim 162a) describe al-Buraq, a white riding animal larger than a donkey and smaller than a mule, whose stride reached as far as it could see. It is not shown here.`,d5:`The light rising from al-Hijr is a quiet symbol of the journey’s beginning — not a depiction of how it happened.`}},journey:{title:`By Night`,subtitle:`The journey`,short:`By night`,cues:{n1:`by night`,n2:`The verb asrā already means “to make travel by night”. Al-Zamakhshari explains that the added word laylan, “by night”, in the indefinite, shows that the journey took only part of one night.`,n3:`Makkah and Jerusalem lie about 1,240 km apart in a straight line, across mountains, lava fields and desert.`,n4:`In Ibn Ishaq’s early biography of the Prophet, the Quraysh object that a caravan needed a month to reach Syria and a month to return — and he spoke of a single night.`,n5:`The land below is compressed and symbolic: Jerusalem lies in its true direction from Makkah, but at about a hundredth of the real distance. No stops along the way are shown.`,n6:`The verse gives the journey’s time — by night — and its two places. It says nothing about the way between them.`}},aqsa:{title:`To the Far Distant Place of Worship`,subtitle:`al-Masjid al-Aqsa`,short:`al-Aqsa`,cues:{a1:`to the Far distant place of worship`,a2:`Muslim commentators such as al-Tabari and Ibn Kathir identify al-Masjid al-Aqsa, “the farthest place of worship”, with the sanctuary of Jerusalem (Bayt al-Maqdis), as the hadith describing the journey do.`,a3:`Around 620 CE the great platform stood largely empty and in ruins. No mosque building stood there yet: the Dome of the Rock was completed in 691–692 CE, and the first large al-Aqsa Mosque followed in the early 8th century.`,a4:`In Sahih Muslim 162a the Prophet relates that he tethered his mount at the ring used by the prophets and prayed two units of prayer in the mosque. Sahih Muslim 172 relates that he saw the earlier prophets at prayer and led them.`,a5:`Sahih al-Bukhari 4709 relates that at Jerusalem he was offered a cup of wine and a cup of milk, and chose the milk; Gabriel said he had been guided to the natural way (al-fitra).`}},blessed:{title:`Whose Surroundings We Have Blessed`,subtitle:`The blessed land`,short:`Blessed land`,cues:{b1:`the neighbourhood whereof We have blessed`,b2:`Al-Tabari explains this blessing as given to the people who live around it — in their livelihood, their crops and their trees.`,b3:`Ibn Kathir describes Jerusalem as the home of the prophets from the time of Abraham.`,b4:`Olive groves cover the hills here as an image of that blessing. The trees, terraces and city are an artistic reconstruction.`,b5:`The verse says that Allah blessed the surroundings of the Far Mosque. It does not list the blessings.`}},signs:{title:`That We Might Show Him of Our Tokens`,subtitle:`The signs`,short:`The signs`,cues:{s1:`that We might show him of Our tokens!`,s2:`The verse gives the purpose of the journey: to show him some of Allah’s signs (āyāt). It does not say what they were.`,s3:`The hadith go on to describe an ascent through the seven heavens (al-Miʿraj): the Prophet greets earlier prophets, is taken to the Lote Tree of the utmost boundary, and the daily prayers are enjoined — in the end, five (Sahih al-Bukhari 3887, 349).`,s4:`By the lote-tree of the utmost boundary,`,s5:`That line is from another surah, An-Najm (53:13–18), not from 17:1. Many commentators connect those verses with the night of the ascension, as does the report in Sahih Muslim 173.`,s6:`The sky shown is the ordinary night sky. No image here represents the heavens or what the hadith describe.`}},return:{title:`The Hearer, the Seer`,subtitle:`Back in Makkah before dawn`,short:`Return`,cues:{r1:`In Ibn Ishaq’s early biography, the Prophet is back in Makkah before morning and tells the people of his journey.`,r2:`In Sahih al-Bukhari 3886 he relates that when the Quraysh disbelieved him, Allah displayed Jerusalem before him, and he described it to them while looking at it.`,r3:`In Ibn Ishaq’s biography, Abu Bakr affirms the account at once, and is remembered as al-Siddiq — “the one who affirms the truth”.`,r4:`Lo! He, only He, is the Hearer, the Seer.`,r5:`The verse names the start and the end of the journey, its time and its purpose, and closes by naming Allah the Hearer, the Seer.`,r6:`Dawn comes to Makkah. What happened that night is known through the verse and the reports; this experience is a reflection on them, not a record.`}}},objects:{kaaba:{name:`The Kaaba`,sections:{history:`The Kaaba stands at the centre of the sanctuary. Islamic sources relate that the Quraysh rebuilt it a few years before the Prophet’s mission, around 605 CE, leaving part of its original foundation outside — the ground enclosed by the low wall of al-Hijr.`,start:`In Sahih al-Bukhari 3887 the Prophet relates that the night of the journey began while he lay in al-Hatim, beside the Kaaba.`,shown:`Its size, its dark cloth covering and its door raised above the ground are shown simply. The covering’s colour and pattern changed over the centuries; the gold-embroidered band seen today is much later.`}},hijr:{name:`al-Hijr (al-Hatim)`,sections:{report:`In Sahih al-Bukhari 3887 the Prophet says the night began while he was lying in al-Hatim or al-Hijr. In Sahih al-Bukhari 349 he says the roof of his house in Makkah was opened. Both are cited; the light is placed here because of the first.`,history:`The low semicircular wall beside the Kaaba marks ground that belonged to its original foundation but was left outside when the Quraysh rebuilt it.`,shown:`The wall’s height and thickness are a reconstruction.`}},zamzam:{name:`The well of Zamzam`,sections:{report:`In Sahih al-Bukhari 349, narrated by Abu Dharr, the Prophet relates that before he was taken up, his chest was opened, washed with Zamzam water and filled with wisdom and faith.`,history:`The well lies a short distance east of the Kaaba. Its stone curb and simple wooden frame here are a reconstruction.`}},sanctuary:{name:`al-Masjid al-Haram — the Sacred Mosque`,sections:{verse:`from the Inviolable Place of Worship`,history:`In the Prophet’s time the sanctuary was the open ground around the Kaaba, closely surrounded by houses. Its first wall is attributed to the caliph Umar, who enlarged it in 17 AH (638 CE); the colonnades of later centuries did not exist.`,commentary:`Al-Tabari records the different reports of where the journey began. Commentators note that the whole sacred precinct of Makkah can be called al-Masjid al-Haram.`,shown:`Several features of the time are left out — among them the idols that Islamic sources say stood around the Kaaba until the conquest of Makkah in 630 CE — and no people are shown.`}},makkah:{name:`Makkah`,sections:{history:`Makkah lies in a narrow, dry valley among granite mountains, with Abu Qubays to the east of the sanctuary. Around 620 CE it was a town of the Quraysh, living by trade and by the pilgrimage to the Kaaba.`,date:`The Quran does not date the journey. Ibn Ishaq places it in Makkah, before the emigration to Madinah; later scholars give different dates. The 27th of Rajab is widely commemorated, but it is one view among several.`,shown:`The houses, lanes, lamps and mountains are an artistic reconstruction; their number and shapes are invented.`}},"night-sky":{name:`The night sky`,sections:{verse:`by night`,summary:`The verse says the journey was by night. It does not describe the sky, the moon or the stars of that night.`,shown:`The stars turn slowly as the hours pass. The moon’s phase and course are an artistic choice, not a claim about that night.`}},light:{name:`About this light`,sections:{symbol:`This soft light is a respectful symbol chosen for this website. It marks where the journey is in the scene without depicting the Prophet: it has no face and no bodily features.`,verse:`Verse 17:1 calls him “His servant” and does not describe his appearance. The light is not a claim that the verse describes him as light.`,choice:`Its brightness, colour and movement are artistic. In Settings you can show it only as a small point of light.`}},journey:{name:`The journey by night`,sections:{verse:`Glorified be He Who carried His servant by night`,awake:`In Sahih al-Bukhari 3888, Ibn Abbas, explaining verse 17:60, says that the sights shown to the Prophet on the night he was taken to Jerusalem were actual sights, not dreams.`,views:`Most Muslim scholars hold that the journey was made in body and spirit, while awake. Ibn Ishaq’s biography also records the view of some early Muslims that it was a vision.`,shown:`The path of light, its height and its course are symbolic. Distances are compressed about a hundredfold.`}},desert:{name:`The way north`,sections:{history:`Between Makkah and Jerusalem lie the mountains of the Hijaz, wide lava fields, deserts and steppe — about 1,240 km in a straight line.`,caravan:`In Ibn Ishaq’s biography the Quraysh say a caravan needed a month to reach Syria and a month to return.`,shown:`This country is compressed and symbolic, not a map. The knoll you stand on is invented.`}},aqsa:{name:`al-Masjid al-Aqsa — the Far Mosque`,sections:{verse:`to the Far distant place of worship`,identity:`Commentators such as al-Tabari and Ibn Kathir identify al-Masjid al-Aqsa with the sanctuary of Jerusalem, Bayt al-Maqdis. The word masjid means a place of prostration; it does not imply a building.`,history:`Around 620 CE the great walled platform in Jerusalem stood largely empty and in ruins. No mosque building stood there yet: after 638 CE a simple mosque was built on it; the Dome of the Rock was completed in 691–692 CE (72 AH, by its own inscription); and the first large al-Aqsa Mosque followed in the early 8th century.`,prayer:`In Sahih Muslim 162a the Prophet relates that he tethered his mount at the ring used by the prophets and prayed two units of prayer in the mosque; in Sahih Muslim 172, that he led the earlier prophets in prayer.`,shown:`The walls, ruins, scrub and gateway are an artistic reconstruction of the platform’s state around 620 CE. Where exactly he prayed is not marked.`}},rock:{name:`The rock`,sections:{history:`A natural outcrop of bedrock near the centre of the platform. The Dome of the Rock was built over it, completed in 691–692 CE.`,tradition:`Later Muslim tradition associates the rock with the ascension. The hadith cited here (Sahih al-Bukhari 3887, Sahih Muslim 162a) do not name the place from which it began.`}},jerusalem:{name:`Jerusalem around 620 CE`,sections:{history:`Jerusalem was then a walled city of churches, monasteries and houses. The Sasanian Persians had taken it in 614 CE; the Byzantine emperor Heraclius regained it around 630 CE.`,described:`In Sahih al-Bukhari 3886 the Prophet relates that when the Quraysh disbelieved him, Allah displayed Jerusalem before him and he described it to them.`,shown:`The houses, the generic churches and the city wall are an artistic reconstruction; no building copies a real one.`}},olives:{name:`The blessed surroundings`,sections:{verse:`the neighbourhood whereof We have blessed`,tabari:`Al-Tabari explains the blessing as given to the people around it, in their livelihood, crops and trees.`,ibnKathir:`Ibn Kathir describes Jerusalem as the home of the prophets from the time of Abraham.`,shown:`The olive groves on the Mount of Olives and in the valleys are an image of that blessing; their extent is artistic.`}},"later-buildings":{name:`Built later (outlines)`,sections:{history:`These outlines show buildings that stand on the platform today but did not exist on the night of the journey: the Dome of the Rock, completed in 691–692 CE under the Umayyad caliph Abd al-Malik, and the al-Aqsa Mosque, first built on a large scale in the early 8th century.`,shown:`Shown only as faint outlines with approximate sizes, to help you find your way. Turn them off in Settings.`}},ascension:{name:`The ascension (al-Miʿraj)`,sections:{verse:`that We might show him of Our tokens!`,miraj:`The hadith (Sahih al-Bukhari 3887, Sahih Muslim 162a, Sahih al-Bukhari 349) describe an ascent through the seven heavens: at each, the Prophet greets earlier prophets; he is taken to the Lote Tree of the utmost boundary; and the daily prayers are enjoined, fifty reduced to five.`,najm:`Verily he saw one of the greater revelations of his Lord.`,connection:`That is verse 53:18, from Surat An-Najm — not from 17:1. Many commentators connect 53:13–18 with the night of the ascension, as does Sahih Muslim 173 for the Lote Tree. Aisha reported that the Prophet explained what he saw in 53:13 as the angel Gabriel in his true form (Sahih Muslim 177a).`,shown:`Nothing here depicts the heavens. The rising light and the ordinary night sky are symbols only.`}}}}},ckb:{lang:`ckb`,dir:`rtl`,digits:`arab`,quote:[`«`,`»`],ui:td,content:ed},ar:{lang:`ar`,dir:`rtl`,digits:`arab`,quote:[`﴿`,`﴾`],ui:Xu,content:Yu}},id=[{code:`en`,name:`English`},{code:`ckb`,name:`کوردی`},{code:`ar`,name:`العربية`}],ad=`quran-3d:language`,od=rd.en;function Z(){return od}function sd(e){if(!e)return null;let t=e.trim().toLowerCase();return t===`en`||t.startsWith(`en-`)?`en`:t===`ckb`||t.startsWith(`ckb-`)||t===`ku-arab`||t===`ku-iq`||t===`ku-ir`||t===`sorani`?`ckb`:t===`ar`||t.startsWith(`ar-`)?`ar`:null}function cd(){try{let e=sd(new URLSearchParams(window.location.search).get(`lang`));if(e)return e}catch{}try{let e=sd(window.localStorage.getItem(ad));if(e)return e}catch{}try{for(let e of navigator.languages??[navigator.language]){let t=sd(e);if(t)return t}}catch{}return`en`}function ld(e){try{window.localStorage.setItem(ad,e)}catch{}let t=new URL(window.location.href);t.searchParams.set(`lang`,e),window.location.replace(t.toString())}function ud(e){od=rd[e]??rd.en,typeof document<`u`&&(document.documentElement.lang=od.lang,document.documentElement.dir=od.dir,document.title=od.ui.app.documentTitle)}var dd=`٠١٢٣٤٥٦٧٨٩`;function fd(e){let t=String(e);return od.digits===`latn`?t:t.replace(/[0-9]/g,e=>dd[Number(e)]).replace(/%/g,`٪`)}function pd(){return od.dir===`rtl`?` • `:` · `}function md(e){return`${od.quote[0]}${e}${od.quote[1]}`}function hd(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?fd(t[n]):e)}var gd=`Tanzil Quran Text (Uthmani, Version 1.1)
Copyright (C) 2007-2026 Tanzil Project
License: Creative Commons Attribution 3.0
This copy of the Quran text is carefully produced, highly
verified and continuously monitored by a group of specialists
at Tanzil Project.
TERMS OF USE:
- Permission is granted to copy and distribute verbatim copies
  of this text, but CHANGING IT IS NOT ALLOWED.
- This Quran text can be used in any website or application,
  provided that its source (Tanzil Project) is clearly indicated,
  and a link is made to tanzil.net to enable users to keep
  track of changes.
- This copyright notice shall be included in all verbatim copies
  of the text, and shall be reproduced appropriately in all files
  derived from or containing substantial portion of this text.
Please check updates at: http://tanzil.net/updates/`,_d=`بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ`,vd={"17:1":`سُبْحَٰنَ ٱلَّذِىٓ أَسْرَىٰ بِعَبْدِهِۦ لَيْلًا مِّنَ ٱلْمَسْجِدِ ٱلْحَرَامِ إِلَى ٱلْمَسْجِدِ ٱلْأَقْصَا ٱلَّذِى بَٰرَكْنَا حَوْلَهُۥ لِنُرِيَهُۥ مِنْ ءَايَٰتِنَآ ۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ`,"17:60":`وَإِذْ قُلْنَا لَكَ إِنَّ رَبَّكَ أَحَاطَ بِٱلنَّاسِ ۚ وَمَا جَعَلْنَا ٱلرُّءْيَا ٱلَّتِىٓ أَرَيْنَٰكَ إِلَّا فِتْنَةً لِّلنَّاسِ وَٱلشَّجَرَةَ ٱلْمَلْعُونَةَ فِى ٱلْقُرْءَانِ ۚ وَنُخَوِّفُهُمْ فَمَا يَزِيدُهُمْ إِلَّا طُغْيَٰنًا كَبِيرًا`,"53:13":`وَلَقَدْ رَءَاهُ نَزْلَةً أُخْرَىٰ`,"53:14":`عِندَ سِدْرَةِ ٱلْمُنتَهَىٰ`,"53:15":`عِندَهَا جَنَّةُ ٱلْمَأْوَىٰٓ`,"53:16":`إِذْ يَغْشَى ٱلسِّدْرَةَ مَا يَغْشَىٰ`,"53:17":`مَا زَاغَ ٱلْبَصَرُ وَمَا طَغَىٰ`,"53:18":`لَقَدْ رَأَىٰ مِنْ ءَايَٰتِ رَبِّهِ ٱلْكُبْرَىٰٓ`},yd={meta:{id:`ar.muyassar`,language:`ar`,kind:`tafsir`,title:`التفسير الميسر`,translator:`مجمع الملك فهد لطباعة المصحف الشريف`,translatorLatin:`King Fahd Glorious Quran Printing Complex`,firstPublished:2009,source:`Tanzil Project translation file ar.muyassar`,sourceUrl:`https://tanzil.net/trans/`,license:`Published by the King Fahd Glorious Quran Printing Complex; distributed by the Tanzil Project for non-commercial use with attribution.`,retrieved:`2026-10-09`,notice:`# --------------------------------------------------------------------
#
#  Quran Translation
#  Name: تفسير المیسر
#  Translator: King Fahad Quran Complex
#  Language: Arabic
#  ID: ar.muyassar
#  Last Update: January 7, 2011
#  Source: Tanzil.net
#
# --------------------------------------------------------------------`},verses:{"17:1":`يمجِّد الله نفسه ويعظم شأنه، لقدرته على ما لا يقدر عليه أحد سواه، لا إله غيره، ولا رب سواه، فهو الذي أسرى بعبده محمد صلى الله عليه وسلم زمنًا من الليل بجسده وروحه، يقظة لا منامًا، من المسجد الحرام بـ "مكة" إلى المسجد الأقصى بـ "بيت المقدس" الذي بارك الله حوله في الزروع والثمار وغير ذلك، وجعله محلا لكثير من الأنبياء؛ ليشاهد عجائب قدرة الله وأدلة وحدانيته. إن الله سبحانه وتعالى هو السميع لجميع الأصوات، البصير بكل مُبْصَر، فيعطي كُلا ما يستحقه في الدنيا والآخرة.`,"17:60":`واذكر -أيها الرسول- حين قلنا لك: إن ربك أحاط بالناس علمًا وقدرة. وما جعلنا الرؤيا التي أريناكها عِيانًا ليلة الإسراء والمعراج من عجائب المخلوقات إلا اختبارًا للناس؛ ليتميز كافرهم من مؤمنهم، وما جعلنا شجرة الزقوم الملعونة التي ذكرت في القرآن إلا ابتلاء للناس. ونخوِّف المشركين بأنواع العذاب والآيات، ولا يزيدهم التخويف إلا تماديًا في الكفر والضلال.`,"53:13":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`,"53:14":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`,"53:15":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`,"53:16":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`,"53:17":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`,"53:18":`أتُكذِّبون محمدًا صلى الله عليه وسلم، فتجادلونه على ما يراه ويشاهده من آيات ربه؟ ولقد رأى محمد صلى الله عليه وسلم جبريل على صورته الحقيقية مرة أخرى عند سدرة المنتهى- شجرة نَبْق- وهي في السماء السابعة، ينتهي إليها ما يُعْرَج به من الأرض، وينتهي إليها ما يُهْبَط به من فوقها، عندها جنة المأوى التي وُعِد بها المتقون. إذ يغشى السدرة من أمر الله شيء عظيم، لا يعلم وصفه إلا الله عز وجل. وكان النبي صلى الله عليه وسلم على صفة عظيمة من الثبات والطاعة، فما مال بصره يمينًا ولا شمالا ولا جاوز ما أُمِر برؤيته. لقد رأى محمد صلى الله عليه وسلم ليلة المعراج من آيات ربه الكبرى الدالة على قدرة الله وعظمته من الجنة والنار وغير ذلك.`}},bd={meta:{id:`ckb.hevi`,language:`ckb`,kind:`translation`,title:`وەرگێڕانی هێڤی`,translator:`ئەلەند کاوە عەلی ئەحمەد`,translatorLatin:`Aland Kawa Ali Ahmad`,firstPublished:2024,source:`Hevi database (E_Hevi.db), table Ayats, column hevi`,sourceUrl:``,license:`© Aland Kawa Ali Ahmad. All rights reserved; used in this experience with the translator’s permission.`,retrieved:`2026-10-09`,notice:`Hevi translation of the meanings of the Quran into Central Kurdish (Sorani). Do not copy without the translator’s permission.`},verses:{"17:1":`بێگەردیی تەواوەتی بۆ ئەو زاتەی کە لە شەوێکدا شەوڕەویی بە بەندەکەی خۆی کرد — لە سوجدەگای حەرامەوە بەرەو ئەو سوجدەگا هەرە دوورەی کە چواردەوریمان بەرەکەتبەخش کردووە – تا لە نیشانەکانمانی پێشان بدەین. بەدڵنیاییەوە ئەو زاتە فرەبیس و فرەبینە.`,"17:60":`دەمێکیش پێمان گوتیت: «بەدڵنیاییەوە پەروەردگارت دەوردەری ئینسانەکانە.» ئەو خەونەیش کە پێشانمان دایت و درەختە نەفرینلێکراوەکەی نێو قورئان بۆ خەڵک هەر هەڵسەنگاندنێکی سەخت بوون. هەرچەندە دەیانترسێنین، بەڵام تەنیا ڕۆچوونێکی گەورەیان بۆ پتر دەکات.`,"53:13":`بەڕاستی لە دابەزینێکی دیکەدا بینیەوە،`,"53:14":`لەلای سیدرەی مونتەها`,"53:15":`کە باخەچڕی پەناگە لەلایدایە؛`,"53:16":`دەمێک سیدرەی داپۆشی ئەوەی کە دایپۆشی،`,"53:17":`بینایی لاینەدا و ڕۆ نەچوو.`,"53:18":`بەڕاستی لە نیشانە هەرە گەورەکانی پەروەردگاری بینی.`}},xd={id:`en-pickthall`,lang:`en`,name:`The Meaning of the Glorious Koran`,translator:`Mohammed Marmaduke Pickthall`,year:1930,license:`Public domain`,sourceUrl:`https://tanzil.net/trans/en.pickthall`,verses:{"17:1":`Glorified be He Who carried His servant by night from the Inviolable Place of Worship to the Far distant place of worship the neighbourhood whereof We have blessed, that We might show him of Our tokens! Lo! He, only He, is the Hearer, the Seer.`,"17:60":`And (it was a warning) when we told thee: Lo! thy Lord encompasseth mankind, and We appointed the sight which We showed thee as an ordeal for mankind, and (likewise) the Accursed Tree in the Qur'an. We warn them, but it increaseth them in naught save gross impiety.`,"53:13":`And verily he saw him yet another time`,"53:14":`By the lote-tree of the utmost boundary,`,"53:15":`Nigh unto which is the Garden of Abode.`,"53:16":`When that which shroudeth did enshroud the lote-tree,`,"53:17":`The eye turned not aside nor yet was overbold.`,"53:18":`Verily he saw one of the greater revelations of his Lord.`}},Sd={17:{number:17,name:`Al-Isra`,nameAr:`الإسراء`},53:{number:53,name:`An-Najm`,nameAr:`النجم`}},Cd=`17:1`,wd=[{surah:17,from:60,to:60},{surah:53,from:13,to:18}];function Td(e){let t=e.meta;return{id:t.id,lang:t.language,name:t.title,translator:t.translator,year:t.firstPublished,license:t.license,sourceUrl:t.sourceUrl,kind:t.kind===`tafsir`?`tafsir`:`translation`,verses:e.verses}}var Ed={en:xd,ckb:Td(bd),ar:Td(yd)};function Dd(e=Z().lang){return Ed[e]??xd}function Od(e,t){return`${e}:${t}`}function kd(e){let[t,n]=e.split(`:`);return{surah:Number(t),ayah:Number(n)}}function Ad(e){return vd[e]??``}function jd(e,t=Z().lang){return Dd(t).verses[e]??``}function Md(e,t,n){return Ad(e).split(` `).slice(t,n).join(` `)}function Nd(e){let t=[];for(let n=e.from;n<=e.to;n++)t.push(Od(e.surah,n));return t}function Pd(){return Z().digits===`arab`}function Fd(e){return Sd[e]?.nameAr??fd(e)}function Id(e){let{surah:t,ayah:n}=kd(e);if(Pd())return`${Fd(t)}: ${fd(n)}`;let r=Sd[t];return`${r?r.name+` `:``}${t}:${n}`}function Ld(e){if(Pd())return`${Fd(e.surah)}: ${fd(e.from)}${e.from===e.to?``:`–${fd(e.to)}`}`;let t=Sd[e.surah],n=e.from===e.to?`${e.from}`:`${e.from}–${e.to}`;return`${t?t.name+` `:``}${e.surah}:${n}`}function Rd(e){return Pd()?fd(kd(e).ayah):e}function zd(e,t,n=Z().lang){let r=e[t+1];if(r===void 0)return!1;let i=jd(e[t],n),a=jd(r,n);return a!==``&&i===a}function Bd(e){let t=[],n=0;for(;n<e.length;){let{surah:r,ayah:i}=kd(e[n]),a=i,o=n+1;for(;o<e.length;){let t=kd(e[o]);if(t.surah!==r||t.ayah!==a+1)break;a=t.ayah,o++}Pd()?t.push(Ld({surah:r,from:i,to:a})):t.push(a===i?`${r}:${i}`:`${r}:${i}–${a}`),n=o}return t.join(Pd()?`؛ `:`; `)}var Vd=[{from:0,to:4,en:`Glorified be He Who carried His servant`},{from:4,to:5,en:`by night`},{from:5,to:8,en:`from the Inviolable Place of Worship`},{from:8,to:11,en:`to the Far distant place of worship`},{from:11,to:14,en:`the neighbourhood whereof We have blessed`},{from:14,to:17,en:`that We might show him of Our tokens!`},{from:18,to:22,en:`Lo! He, only He, is the Hearer, the Seer.`}];function Hd(e,t,n){let[r,i]=Iu(e,t);return[r,X.y+n,i]}function Ud(e){return Md(`17:1`,Vd[e].from,Vd[e].to)}var Wd=[Au.x,1.4,Au.z],Gd=Hd(4,150,1.2),Kd=Hd(0,0,4);function qd(e,t,n,r,i=0){return{x:e,z:t,yaw:Math.atan2(-(n-e),-(r-t)),pitch:i}}var Jd=qd(16,30,0,0,.12),Yd={x:Hu.x,z:Hu.z,yaw:Math.atan2(Su.x,Su.z),pitch:.22},Xd=(()=>{let[e,t]=Iu(-40,110);return qd(e,t,Gd[0],Gd[2],.04)})(),Zd=[{t:0,hour:22.4,light:0,lightPath:0,ascend:0,trail:0,trailAnchor:0,stars:.5,moonlight:1,lamps:.7,haze:.25,glow:0},{t:.42,light:0,glow:0},{t:.62,light:1,glow:.8},{t:1,hour:22.9,lamps:.6,light:1,glow:.8}],Qd=[{t:0,pos:[-250,125,320],look:[0,4,0],fov:50},{t:.35,pos:[-115,48,125],look:[0,6,0],fov:50},{t:.7,pos:[-40,9,36],look:[-6,3,-6],fov:50},{t:1,pos:[-29,4.6,15],look:Wd,fov:48}],$d=[{at:2,dur:11,kind:`reconstruction`,key:`m1`,refs:[]},{at:14,dur:10,kind:`quran`,key:`m2`,refs:[`17:1`],ar:Ud(0)},{at:25,dur:11,kind:`summary`,key:`m3`,refs:[`17:1`]},{at:37,dur:13,kind:`hadith`,key:`m4`,refs:[],sources:[`bukhari-3887`,`bukhari-349`]},{at:51,dur:13,kind:`reconstruction`,key:`m5`,refs:[]}],ef=[{t:0,hour:22.9,light:1,lightPath:0,ascend:0,trail:0,trailAnchor:0,stars:.5,moonlight:1,lamps:.6,haze:.25,glow:.8},{t:.3,lightPath:0,glow:.8,trail:0},{t:.56,lightPath:.0056,glow:.15,trail:1},{t:1,hour:23.1,lightPath:.068,glow:0,trail:1,lamps:.6}],tf=[{t:0,pos:[-29,4.6,15],look:Wd,fov:48},{t:.32,pos:[-36,5.5,26],look:[Au.x,6,Au.z],fov:50},{t:.56,pos:[-70,26,64],look:[Au.x,62,Au.z],fov:54},{t:.78,pos:[16,-6,-70],look:[0,4,60],space:`light`,fov:55},{t:1,pos:[45,18,-130],look:[0,0,70],space:`light`,fov:55}],nf=[{at:2,dur:9,kind:`quran`,key:`d1`,refs:[`17:1`],ar:Ud(2)},{at:12,dur:12,kind:`history`,key:`d2`,refs:[],sources:[`history-haram`]},{at:25,dur:12,kind:`commentary`,key:`d3`,refs:[`17:1`],sources:[`tabari`]},{at:38,dur:12,kind:`hadith`,key:`d4`,refs:[],sources:[`bukhari-3887`,`muslim-162a`]},{at:51,dur:9,kind:`reconstruction`,key:`d5`,refs:[]}],rf=[{t:0,hour:23.1,light:1,lightPath:.068,ascend:0,trail:1,trailAnchor:0,stars:.5,moonlight:1,lamps:.6,haze:.25,glow:0},{t:.5,stars:.9,haze:.15},{t:.97,lightPath:.925},{t:1,hour:23.6,lightPath:.925,stars:.6,lamps:.5,haze:.18}],af=[{t:0,pos:[45,18,-130],look:[0,0,70],space:`light`,fov:55},{t:.2,pos:[-95,45,-170],look:[0,-30,220],space:`light`,fov:55},{t:.42,pos:[-230,18,40],look:[0,-4,0],space:`light`,fov:52},{t:.62,pos:[30,-55,250],look:[0,25,0],space:`light`,fov:52},{t:.82,pos:[120,70,-210],look:[0,-40,300],space:`light`,fov:55},{t:1,pos:[24,34,-160],look:[0,-35,210],space:`light`,fov:55}],of=[{at:2,dur:8,kind:`quran`,key:`n1`,refs:[`17:1`],ar:Ud(1)},{at:11,dur:14,kind:`commentary`,key:`n2`,refs:[`17:1`],sources:[`zamakhshari`]},{at:26,dur:12,kind:`history`,key:`n3`,refs:[]},{at:39,dur:13,kind:`commentary`,key:`n4`,refs:[],sources:[`ibn-ishaq`]},{at:53,dur:13,kind:`reconstruction`,key:`n5`,refs:[]},{at:67,dur:12,kind:`summary`,key:`n6`,refs:[`17:1`]}],sf=[{t:0,hour:23.6,light:1,lightPath:.925,ascend:0,trail:1,trailAnchor:0,stars:.6,moonlight:1,lamps:.5,haze:.18,glow:0},{t:.5,lightPath:1,glow:.2},{t:.7,glow:.75},{t:1,hour:24,lightPath:1,trail:.45,glow:.75}],cf=[{t:0,pos:[24,34,-160],look:[0,-35,210],space:`light`,fov:55},{t:.28,pos:Hd(-260,420,110),look:Hd(0,60,0),fov:50},{t:.52,pos:Hd(-45,215,26),look:Gd,fov:50},{t:.78,pos:Hd(-34,182,4.2),look:Gd,fov:46},{t:1,pos:Hd(-62,190,9),look:Hd(4,148,2),fov:52}],lf=[{at:2,dur:10,kind:`quran`,key:`a1`,refs:[`17:1`],ar:Ud(3)},{at:13,dur:12,kind:`commentary`,key:`a2`,refs:[`17:1`],sources:[`tabari`,`ibn-kathir`]},{at:26,dur:14,kind:`history`,key:`a3`,refs:[],sources:[`history-jerusalem`]},{at:41,dur:13,kind:`hadith`,key:`a4`,refs:[],sources:[`muslim-162a`,`muslim-172`]},{at:55,dur:12,kind:`hadith`,key:`a5`,refs:[],sources:[`bukhari-4709`]}],uf=[{t:0,hour:24,light:1,lightPath:1,ascend:0,trail:.45,trailAnchor:0,stars:.6,moonlight:1,lamps:.5,haze:.18,glow:.75},{t:.5,moonlight:1.15,haze:.12},{t:1,hour:24.5,trail:.2,moonlight:1.15,lamps:.4,glow:.6}],df=[{t:0,pos:Hd(-62,190,9),look:Hd(4,148,2),fov:52},{t:.25,pos:Hd(160,330,90),look:Kd,fov:52},{t:.5,pos:Hd(700,200,125),look:Hd(0,0,10),fov:50},{t:.75,pos:Hd(640,-360,110),look:Hd(0,0,10),fov:50},{t:1,pos:Hd(230,-260,60),look:Hd(0,60,160),fov:54}],ff=[{at:2,dur:10,kind:`quran`,key:`b1`,refs:[`17:1`],ar:Ud(4)},{at:13,dur:12,kind:`commentary`,key:`b2`,refs:[`17:1`],sources:[`tabari`]},{at:26,dur:11,kind:`commentary`,key:`b3`,refs:[`17:1`],sources:[`ibn-kathir`]},{at:38,dur:12,kind:`reconstruction`,key:`b4`,refs:[]},{at:51,dur:11,kind:`summary`,key:`b5`,refs:[`17:1`]}],pf=[{t:0,hour:24.5,light:1,lightPath:1,ascend:0,trail:.2,trailAnchor:0,stars:.6,moonlight:1.15,lamps:.4,haze:.12,glow:.6},{t:.16,ascend:0,glow:.6},{t:.3,glow:0},{t:.78,ascend:1,stars:1},{t:1,hour:25.5,ascend:1,trail:0,stars:1,moonlight:.75,lamps:.3,glow:0,light:0}],mf=[{t:0,pos:Hd(230,-260,60),look:Hd(0,60,160),fov:54},{t:.18,pos:Hd(-52,122,1.8),look:[0,0,0],lookSpace:`light`,fov:56},{t:.5,pos:Hd(-74,102,2.2),look:[0,0,0],lookSpace:`light`,fov:62},{t:.76,pos:Hd(-90,92,2.6),look:Hd(250,-420,1250),fov:66},{t:1,pos:Hd(-96,88,2.8),look:Hd(520,-900,900),fov:70}],hf=[{at:2,dur:10,kind:`quran`,key:`s1`,refs:[`17:1`],ar:Ud(5)},{at:13,dur:11,kind:`summary`,key:`s2`,refs:[`17:1`]},{at:25,dur:15,kind:`hadith`,key:`s3`,refs:[],sources:[`bukhari-3887`,`bukhari-349`]},{at:41,dur:9,kind:`quran`,key:`s4`,refs:[`53:14`],ar:Md(`53:14`,0,3)},{at:51,dur:12,kind:`commentary`,key:`s5`,refs:[`53:13`,`53:14`,`53:15`,`53:16`,`53:17`,`53:18`],sources:[`muslim-173`]},{at:64,dur:11,kind:`reconstruction`,key:`s6`,refs:[]}],gf=[{t:0,hour:25.5,light:0,lightPath:1,ascend:1,trail:0,trailAnchor:0,stars:1,moonlight:.75,lamps:.3,haze:.12,glow:0},{t:.05,ascend:0,trailAnchor:1,light:0,trail:0},{t:.12,lightPath:1},{t:.18,light:1,trail:.6,haze:.2},{t:.56,lightPath:0,glow:.1},{t:.62,hour:26,glow:.7,trail:.5,moonlight:1},{t:.78,trail:0,stars:.8},{t:1,hour:29.35,light:.55,glow:.45,stars:.5,lamps:.15,moonlight:1,haze:.3}],_f=[{t:0,pos:[-40,172,260],look:[-1500,560,-4e3],fov:50},{t:.34,pos:[-42,140,228],look:[-620,240,-1500],fov:50},{t:.6,pos:[-52,38,92],look:[Au.x,7,Au.z],fov:50},{t:.8,pos:[-82,26,112],look:[60,30,-150],fov:52},{t:1,pos:[-122,40,150],look:[260,70,-80],fov:55}],vf=[{at:3,dur:12,kind:`commentary`,key:`r1`,refs:[],sources:[`ibn-ishaq`]},{at:16,dur:13,kind:`hadith`,key:`r2`,refs:[],sources:[`bukhari-3886`]},{at:30,dur:11,kind:`commentary`,key:`r3`,refs:[],sources:[`ibn-ishaq`]},{at:42,dur:10,kind:`quran`,key:`r4`,refs:[`17:1`],ar:Ud(6)},{at:53,dur:12,kind:`summary`,key:`r5`,refs:[`17:1`]},{at:66,dur:10,kind:`reconstruction`,key:`r6`,refs:[]}],yf=[{id:`makkah`,place:`makkah`,duration:64,env:Zd,camera:Qd,cues:$d,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(0),spawn:Jd,focus:[`kaaba`,`hijr`,`light`]},{id:`departure`,place:`makkah`,duration:62,env:ef,camera:tf,cues:nf,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(2),spawn:Jd,focus:[`sanctuary`,`zamzam`,`light`]},{id:`journey`,place:`journey`,duration:84,env:rf,camera:af,cues:of,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(1),spawn:Yd,focus:[`journey`,`night-sky`,`desert`]},{id:`aqsa`,place:`jerusalem`,duration:70,env:sf,camera:cf,cues:lf,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(3),spawn:Xd,focus:[`aqsa`,`rock`,`light`]},{id:`blessed`,place:`jerusalem`,duration:64,env:uf,camera:df,cues:ff,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(4),spawn:Xd,focus:[`olives`,`jerusalem`,`aqsa`]},{id:`signs`,place:`jerusalem`,duration:76,env:pf,camera:mf,cues:hf,refs:[`17:1`,`53:14`],reading:[{surah:17,from:1,to:1},{surah:53,from:13,to:18}],phraseAr:Ud(5),spawn:{...Xd,pitch:.45},focus:[`ascension`,`night-sky`]},{id:`return`,place:`makkah`,duration:78,env:gf,camera:_f,cues:vf,refs:[`17:1`],reading:[{surah:17,from:1,to:1}],phraseAr:Ud(6),spawn:Jd,focus:[`kaaba`,`sanctuary`,`night-sky`],cut:!0}],bf=[0,2,1,3,4,5,6],xf=class{constructor(e){J(this,`chapters`,void 0),J(this,`index`,0),J(this,`time`,0),J(this,`playing`,!1),J(this,`mode`,`guided`),J(this,`pace`,1),J(this,`env`,pu()),J(this,`evaluators`,void 0),J(this,`target`,pu()),J(this,`blendFrom`,pu()),J(this,`blendElapsed`,0),J(this,`blendDuration`,0),J(this,`activeCueIndex`,-1),this.chapters=e,this.evaluators=e.map(e=>new gu(e.env)),this.evaluate()}get chapter(){return this.chapters[this.index]}get count(){return this.chapters.length}get progress(){return ou(this.time/this.chapter.duration)}get ended(){return this.time>=this.chapter.duration}get isLast(){return this.index===this.chapters.length-1}get activeCue(){return this.activeCueIndex>=0?this.chapter.cues[this.activeCueIndex]:null}goTo(e,t,n=0,r=3.5){this.index=Math.max(0,Math.min(this.chapters.length-1,e)),this.time=Math.max(0,n),t===`smooth`?(mu(this.blendFrom,this.env),this.blendElapsed=0,this.blendDuration=r):this.blendDuration=0,this.evaluate()}update(e){this.playing&&(this.time=Math.min(this.time+e*this.pace,this.chapter.duration)),this.blendDuration>0&&(this.blendElapsed+=e,this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)),this.evaluate()}evaluate(){if(this.evaluators[this.index].evaluate(this.progress,this.target),this.blendDuration>0){let e=cu(this.blendElapsed/this.blendDuration);hu(this.env,this.blendFrom,this.target,e)}else mu(this.env,this.target);if(this.activeCueIndex=-1,this.mode===`guided`){let e=this.chapter.cues;for(let t=0;t<e.length;t++){let n=e[t];if(this.time>=n.at&&this.time<n.at+n.dur){this.activeCueIndex=t;break}}}}},Sf=.5*(Math.sqrt(3)-1),Cf=(3-Math.sqrt(3))/6,wf=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Tf=class{constructor(e=1){J(this,`perm`,new Uint8Array(512));let t=du(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}for(let e=0;e<512;e++)this.perm[e]=n[e&255]}noise(e,t){let n=this.perm,r=(e+t)*Sf,i=Math.floor(e+r),a=Math.floor(t+r),o=(i+a)*Cf,s=e-(i-o),c=t-(a-o),l=+(s>c),u=s>c?0:1,d=s-l+Cf,f=c-u+Cf,p=s-1+2*Cf,m=c-1+2*Cf,h=i&255,g=a&255,_=0,v=0,y=0,b=.5-s*s-c*c;if(b>0){let e=wf[n[h+n[g]]&7];b*=b,_=b*b*(e[0]*s+e[1]*c)}let x=.5-d*d-f*f;if(x>0){let e=wf[n[h+l+n[g+u]]&7];x*=x,v=x*x*(e[0]*d+e[1]*f)}let S=.5-p*p-m*m;if(S>0){let e=wf[n[h+1+n[g+1]]&7];S*=S,y=S*S*(e[0]*p+e[1]*m)}return 70*(_+v+y)}fbm(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.noise(e*o,t*o),c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=4,r=2,i=.5){let a=.5,o=1,s=0,c=0;for(let l=0;l<n;l++){let n=1-Math.abs(this.noise(e*o,t*o));s+=a*n*n,c+=a,a*=i,o*=r}return s/c}},Ef=new Tf(5711),Df=new Tf(1715),Of=new Tf(3391);function kf(e,t){if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[r,i]=e[n];if(t<=r){let[a,o]=e[n-1],s=(t-a)/(r-a);return o+(i-o)*s*s*(3-2*s)}}return e[e.length-1][1]}var Af=[[-8e3,120],[-1500,40],[600,30],[2600,250],[5200,360],[7e3,300],[9300,330],[10800,400],[12e3,420],[2e4,420]],jf=[[-6e3,.7],[-800,.65],[800,.7],[2e3,1],[5200,1],[6300,.12],[9200,.14],[10200,.38],[13500,.4]];function Mf(e,t,n){let r=.5,i=1,a=0,o=0;for(let s=0;s<n;s++){let n=Df.noise(e*i,t*i),s=1-Math.sqrt(n*n+.02);a+=r*s*s,o+=r,r*=.45,i*=2.1}return a/o}function Nf(e,t){let n=Cu(e,t),r=wu(e,t),i=kf(Af,n),a=kf(jf,n);i+=a*540*Mf(e/1900+7.1,t/1900-3.3,4)**1.6,i+=40*Df.fbm(e/800,t/800,3);let o=Y(6e3,6600,n)*(1-Y(9e3,9600,n));if(o>0){i+=o*9*Df.ridged(e/140,t/140,2);let a=Y(1200,2600,r)*o;if(a>0){let o=Df.fbm(e/900,t/900,2)*3;i+=a*22*(.5+.5*Math.sin((n*.8+r*.6)/95+o))**2}}return i+=420*Y(6500,15e3,Math.abs(r)),i}var Pf={x:Math.sin(18*Math.PI/180),z:-Math.cos(18*Math.PI/180)};function Ff(e,t,n,r,i,a){let o=Math.hypot(e-n,t-r)/i;return o>=1?0:a*(1-o*o)**2}function If(e,t){let n=e*Pf.x+t*Pf.z,r=e*-Pf.z+t*Pf.x,i=.012*n+1.2*Of.fbm(e/90,t/90,2),a=92+30*Math.sin(n/170+.6)+40*Y(200,700,-n),o=Y(a,a+210,Math.abs(r)),s=.7+.42*Mf(e/190+2.2,t/190-1.7,3)+.06*Of.noise(e/23,t/23),c=o*(105+55*Y(0,600,n))*s;c+=Ff(e,t,300,-40,260,120),c+=Ff(e,t,-330,-170,300,150),c+=Ff(e,t,120,-620,300,90),c+=Ff(e,t,-150,520,280,70);let l=i+c*(.4+.6*o);return l*=Y(48,120,Math.hypot(e,t)),l}function Lf(e,t){let n=[[-620,-60],[-560,220],[-420,420],[-160,520],[120,520],[330,430]],r=1/0;for(let i=0;i<n.length-1;i++){let[a,o]=n[i],[s,c]=n[i+1],l=s-a,u=c-o,d=ou(((e-a)*l+(t-o)*u)/(l*l+u*u)),f=Math.hypot(e-a-l*d,t-o-u*d);f<r&&(r=f)}return r}function Rf(e,t){let n=X.y,r=n-18;r+=34*Y(180,760,-e)*(1-.4*Y(200,600,t)),r+=14*Y(250,700,-t),r-=9*Math.exp(-(((e+205)/55)**2))*Y(-450,0,t),r-=58*Math.exp(-(((e-330)/115)**2))*(.8+.2*Y(-400,400,t)),r+=96*Math.exp(-(((e-880)/290)**2)),r-=40*Math.exp(-((Lf(e,t)/75)**2)),r-=14*Y(200,520,t)*Y(-100,200,e),r+=4*Of.fbm(e/110,t/110,3)+2*Of.fbm(e/30,t/30,2);let i=Lu(e,t),a=n-9-.12*Math.max(0,i-6);return i<90&&(r=Math.min(r,a+(r-a)*Y(40,90,i))),r}function zf(e,t){let n=X.y,r=Rf(e,t),i=Lu(e,t),a=Math.abs(t-Ru.v)<Ru.halfWidth+1.5,o=-X.halfU-Ru.length;if(a&&e<-X.halfU+1&&e>o-10){let i=Rf(o,Ru.v),a=ou((e-o)/(-X.halfU-X.wall-o)),s=r+(i+(n-i)*a-r)*Y(o-10,o,e),c=Y(Ru.halfWidth,Ru.halfWidth+1.5,Math.abs(t-Ru.v));return s+(Math.min(r,s)-s)*c}if(i<=.5)return n;let s=Y(.5,X.wall-.5,i);return n+(r-n)*s}var Bf=NaN;function Vf(){if(Number.isNaN(Bf)){let e=-1/0;for(let t=0;t<=700;t+=70)for(let n=0;n<24;n++){let r=n/24*Math.PI*2;e=Math.max(e,Nf(Hu.x+Math.cos(r)*t,Hu.z+Math.sin(r)*t))}Bf=e+22}return Bf}function Hf(e,t,n){let r=Math.hypot(e-Hu.x,t-Hu.z),i=Math.max(n+Hu.top,Vf()),a=1-Y(28,Hu.radius,r),o=3.5*Of.ridged(e/22,t/22,2)*Y(20,60,r);return n+(i-n)*a**1.15+o*a}function Q(e,t){let n=Nf(e,t),r=Math.hypot(e,t);if(r<1600){let i=1-Y(900,1600,r);n+=(If(e,t)-n)*i}let i=e-Pu.x,a=t-Pu.z,o=Math.hypot(i,a);if(o<2100){let[r,i]=Fu(e,t),a=1-Y(1300,2100,o),s=zf(r,i);n=a>=1?s:n+(s-n)*a}return Math.hypot(e-Hu.x,t-Hu.z)<Hu.radius+10&&(n=Hf(e,t,n)),n}function Uf(e,t,n=2){let r=Q(e+n,t)-Q(e-n,t),i=Q(e,t+n)-Q(e,t-n);return Math.hypot(r,i)/(2*n)}function Wf(e,t){let n=(e-zu.u)/zu.rx,r=(t-zu.v)/zu.rz,i=n*n+r*r;return i>=1?-1/0:X.y+zu.height*Math.sqrt(1-i)*(.85+.15*Of.noise(e/3,t/3))}var Gf=55;function Kf(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}var qf=class{constructor(e){J(this,`camera`,void 0),J(this,`keys`,[]),J(this,`pts`,[]),J(this,`looks`,[]),J(this,`tmpPos`,new H),J(this,`tmpLook`,new H),J(this,`blendPos`,new H),J(this,`blendQuat`,new Rt),J(this,`targetQuat`,new Rt),J(this,`blendFov`,Gf),J(this,`blendElapsed`,0),J(this,`blendDuration`,0),J(this,`lightPos`,new H),J(this,`lightYaw`,0),J(this,`lightInit`,!1),this.camera=e}setKeys(e){for(this.keys=[...e].sort((e,t)=>e.t-t.t);this.pts.length<this.keys.length;)this.pts.push(new H),this.looks.push(new H)}blendFromCurrent(e){this.blendPos.copy(this.camera.position),this.blendQuat.copy(this.camera.quaternion),this.blendFov=this.camera.fov,this.blendElapsed=0,this.blendDuration=e}snapLight(e){this.lightPos.copy(e.position),this.lightYaw=e.yaw,this.lightInit=!0}resolve(e,t,n){if(n!==`light`)return e.set(t[0],t[1],t[2]);let r=Math.cos(this.lightYaw),i=Math.sin(this.lightYaw),a=this.lightPos;return e.set(a.x+t[0]*r+t[2]*i,a.y+t[1],a.z-t[0]*i+t[2]*r)}update(e,t,n,r,i){let a=this.keys;if(a.length===0)return;if(!this.lightInit||r<=0)this.snapLight(t);else{let e=1-Math.exp(-r*6);this.lightPos.lerp(t.position,e);let n=t.yaw-this.lightYaw;n=Math.atan2(Math.sin(n),Math.cos(n)),this.lightYaw+=n*(1-Math.exp(-r*1.2))}let o=a.length;for(let e=0;e<o;e++){let t=a[e],n=this.resolve(this.pts[e],t.pos,t.space);this.resolve(this.looks[e],t.look,t.lookSpace??t.space).sub(n).normalize()}let s=su(ou(e),cu(e),.5),c=0;for(;c<o-2&&s>a[c+1].t;)c++;let l=a[0].fov??Gf;if(o===1||s<=a[0].t)this.tmpPos.copy(this.pts[0]),this.tmpLook.copy(this.looks[0]);else if(s>=a[o-1].t)this.tmpPos.copy(this.pts[o-1]),this.tmpLook.copy(this.looks[o-1]),l=a[o-1].fov??Gf;else{let e=a[c+1].t-a[c].t,t=e>0?(s-a[c].t)/e:1,n=Math.max(0,c-1),r=c,i=c+1,u=Math.min(o-1,c+2),d=this.pts,f=this.looks;this.tmpPos.set(Kf(d[n].x,d[r].x,d[i].x,d[u].x,t),Kf(d[n].y,d[r].y,d[i].y,d[u].y,t),Kf(d[n].z,d[r].z,d[i].z,d[u].z,t)),this.tmpLook.set(Kf(f[n].x,f[r].x,f[i].x,f[u].x,t),Kf(f[n].y,f[r].y,f[i].y,f[u].y,t),Kf(f[n].z,f[r].z,f[i].z,f[u].z,t)),l=su(a[r].fov??Gf,a[i].fov??Gf,cu(t))}if(this.tmpLook.normalize().multiplyScalar(40).add(this.tmpPos),!i){let e=.12;this.tmpPos.x+=Ef.noise(n*.09,3.1)*e,this.tmpPos.y+=Ef.noise(n*.08,7.7)*e*.6,this.tmpLook.x+=Ef.noise(n*.05,1.3)*e*1.5,this.tmpLook.y+=Ef.noise(n*.06,5.9)*e*.8}this.keepClear(this.tmpPos);let u=this.camera;if(u.position.copy(this.tmpPos),u.up.set(0,1,0),u.lookAt(this.tmpLook),this.blendDuration>0){this.blendElapsed+=r;let e=cu(this.blendElapsed/this.blendDuration);this.targetQuat.copy(u.quaternion),u.position.lerpVectors(this.blendPos,this.tmpPos,e),u.quaternion.slerpQuaternions(this.blendQuat,this.targetQuat,e),l=su(this.blendFov,l,e),this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)}Math.abs(u.fov-l)>.01&&(u.fov=Lt.clamp(l,20,80),u.updateProjectionMatrix())}keepClear(e){let t=Q(e.x,e.z)+1.4;if(e.y<t&&(e.y=t),e.y<Eu.height+1.5){let[t,n]=Ou(e.x,e.z);Math.abs(t)<Eu.halfX+1.2&&Math.abs(n)<Eu.halfZ+1.2&&(e.y=Eu.height+1.5)}}},Jf=1.05,Yf=1700;function Xf(e,t,n){let r=-1/0;for(let i=0;i<=n;i+=n/3){let n=i===0?1:10;for(let a=0;a<n;a++){let o=a/n*Math.PI*2;r=Math.max(r,Q(e+Math.cos(o)*i,t+Math.sin(o)*i))}}return r}function Zf(){let e=[],t=Au,n=Q(t.x,t.z);e.push(new H(t.x,n+Jf,t.z)),e.push(new H(t.x,n+16,t.z)),e.push(new H(t.x+xu.x*20,n+70,t.z+xu.z*20));let r=[900,2100,3400,4700,6e3,7300,8600,9800,10800],i=[0,50,-70,60,90,-20,-80,-40,15],a=r.map((e,t)=>Tu(e,i[t])),o=a.map(([e,t],n)=>Xf(e,t,800)+(n===0?260:420)),s=Math.max(...o.slice(1,-1)),c=r.map((e,t)=>{let n=Y(600,3e3,e),r=1-.3*Y(8500,10800,e);return Math.max(o[t],s*(.55+.45*n)*r)});for(let e=0;e<2;e++)c=c.map((e,t)=>{let n=c[Math.max(0,t-1)],r=c[Math.min(c.length-1,t+1)];return Math.max(o[t],(n+2*e+r)/4)});a.forEach(([t,n],r)=>e.push(new H(t,c[r],n)));let[l,u]=Iu(Bu.u,Bu.v),[d,f]=Tu(bu-620,40);return e.push(new H(d,X.y+210,f)),e.push(new H(l-xu.x*30,X.y+70,u-xu.z*30)),e.push(new H(l,X.y+15,u)),e.push(new H(l,X.y+Jf,u)),e}function Qf(e,t,n,r,i,a){let o=.5,s=e.distanceTo(t)**o||1e-4,c=t.distanceTo(n)**o||1e-4,l=n.distanceTo(r)**o||1e-4,u=new H().subVectors(n,t).add(new H().subVectors(t,e).divideScalar(s).sub(new H().subVectors(n,e).divideScalar(s+c)).multiplyScalar(c)),d=new H().subVectors(n,t).add(new H().subVectors(r,n).divideScalar(l).sub(new H().subVectors(r,t).divideScalar(c+l)).multiplyScalar(c)),f=i*i,p=f*i,m=2*p-3*f+1,h=p-2*f+i,g=-2*p+3*f,_=p-f;return a.set(m*t.x+h*u.x+g*n.x+_*d.x,m*t.y+h*u.y+g*n.y+_*d.y,m*t.z+h*u.z+g*n.z+_*d.z)}var $f=new class{constructor(e=80){J(this,`samples`,void 0),J(this,`lengths`,void 0),J(this,`count`,void 0),J(this,`totalLength`,void 0);let t=Zf(),n=[],r=new H;for(let i=0;i<t.length-1;i++){let a=t[Math.max(0,i-1)],o=t[i],s=t[i+1],c=t[Math.min(t.length-1,i+2)],l=i===0?new H().copy(o).multiplyScalar(2).sub(s):a,u=i===t.length-2?new H().copy(s).multiplyScalar(2).sub(o):c,d=Math.max(6,Math.round(e*Math.min(1,o.distanceTo(s)/600)));for(let e=0;e<d;e++)n.push(Qf(l,o,s,u,e/d,r).clone())}n.push(t[t.length-1].clone()),this.count=n.length,this.samples=new Float32Array(this.count*3),this.lengths=new Float32Array(this.count);let i=0;for(let e=0;e<this.count;e++)e>0&&(i+=n[e].distanceTo(n[e-1])),this.lengths[e]=i,n[e].toArray(this.samples,e*3);this.totalLength=i}pointAt(e,t){let n=ou(e)*this.totalLength,r=this.lengths,i=0,a=this.count-1;for(;a-i>1;){let e=i+a>>1;r[e]<n?i=e:a=e}let o=r[a]-r[i],s=o>0?(n-r[i])/o:0,c=this.samples;return t.set(c[i*3]+(c[a*3]-c[i*3])*s,c[i*3+1]+(c[a*3+1]-c[i*3+1])*s,c[i*3+2]+(c[a*3+2]-c[i*3+2])*s)}uAt(e){return this.lengths[e]/this.totalLength}},ep=class{constructor(){J(this,`pose`,{position:new H,yaw:0,height:0,visible:0,upright:1}),J(this,`ahead`,new H),J(this,`behind`,new H)}update(e){let t=this.pose;$f.pointAt(e.lightPath,t.position);let n=Math.max(0,e.ascend);n>0&&(t.position.y+=n**1.6*Yf),$f.pointAt(Math.min(1,e.lightPath+.01),this.ahead),$f.pointAt(Math.max(0,e.lightPath-.01),this.behind);let r=this.ahead.x-this.behind.x,i=this.ahead.z-this.behind.z;return Math.hypot(r,i)<1&&(r=xu.x,i=xu.z),e.trailAnchor>.5&&(r=-r,i=-i),t.yaw=Math.atan2(r,i),t.height=t.position.y-Q(t.position.x,t.position.z),t.upright=1-Y(3,30,t.height),t.visible=ou(e.light)*(1-Y(.62,.95,n)),t}};function tp(e,t=new Set){let n=new Set;e.traverse(e=>{let r=e;r.geometry&&!n.has(r.geometry)&&!t.has(r.geometry)&&(n.add(r.geometry),r.geometry.dispose());let i=r.material;if(i)for(let e of Array.isArray(i)?i:[i])np(e,n,t);e instanceof bi&&e.dispose()}),e.removeFromParent()}function np(e,t=new Set,n=new Set){if(t.has(e)||n.has(e))return;t.add(e);for(let r of Object.values(e))r instanceof en&&!t.has(r)&&!n.has(r)&&(t.add(r),r.dispose());let r=e.uniforms;if(r)for(let e of Object.values(r)){let r=e.value;r instanceof en&&!t.has(r)&&!n.has(r)&&(t.add(r),r.dispose())}e.dispose()}var rp=`
float njHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float njNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = njHash(i);
  float b = njHash(i + vec2(1.0, 0.0));
  float c = njHash(i + vec2(0.0, 1.0));
  float d = njHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float njFbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * njNoise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return s / 0.875;
}
`;function ip(e){switch(e){case`terrain`:return`
  {
    vec3 wp = vNjWorld;
    float slope = 1.0 - clamp(vNjNormal.y, 0.0, 1.0);
    float camDist = length(cameraPosition - wp);
    float near = 1.0 - smoothstep(60.0, 420.0, camDist);
    float speck = njFbm(wp.xz * 1.7);
    float grain = njNoise(wp.xz * 9.0);
    float rockMask = smoothstep(0.28, 0.6, slope);
    float strata = njNoise(vec2(wp.y * 0.55, (wp.x + wp.z) * 0.02));
    float broad = njFbm(wp.xz * 0.012);
    float tone = mix(0.9 + 0.2 * broad, 1.0, 0.0);
    tone *= mix(1.0, 0.82 + 0.3 * speck + 0.08 * grain, near);
    tone *= mix(1.0, 0.78 + 0.34 * strata, rockMask * (0.4 + 0.6 * near));
    diffuseColor.rgb *= tone;
  }`;case`stone`:return`
  {
    vec3 wp = vNjWorld;
    vec3 n = abs(vNjNormal);
    float course = 1.15;
    float row = floor(wp.y / course);
    float along = (n.x > n.z ? wp.z : wp.x) + row * 1.7;
    float blockLen = 2.6 + 1.4 * njHash(vec2(row, 3.1));
    float bx = fract(along / blockLen);
    float by = fract(wp.y / course);
    float joint = smoothstep(0.0, 0.035, bx) * smoothstep(1.0, 0.965, bx) * smoothstep(0.0, 0.06, by) * smoothstep(1.0, 0.94, by);
    float isTop = step(0.75, n.y);
    joint = mix(joint, 1.0, isTop);
    float blockTone = 0.86 + 0.22 * njHash(vec2(floor(along / blockLen), row));
    float pit = 0.9 + 0.12 * njFbm(wp.xz * 2.1 + wp.y * 1.3);
    diffuseColor.rgb *= mix(0.62, 1.0, joint) * mix(blockTone, 1.0, isTop * 0.6) * pit;
  }`;case`plaster`:return`
  {
    vec3 wp = vNjWorld;
    float p = njFbm(vec2(wp.x + wp.z, wp.y) * 1.3) * 0.6 + njFbm(wp.xz * 0.9 + wp.y) * 0.4;
    float streak = njNoise(vec2((wp.x + wp.z) * 0.8, wp.y * 0.12));
    diffuseColor.rgb *= 0.84 + 0.22 * p - 0.06 * streak * (1.0 - abs(vNjNormal.y));
  }`;case`cloth`:return`
  {
    vec3 wp = vNjWorld;
    vec3 n = abs(vNjNormal);
    float coord = n.x > n.z ? wp.z : wp.x;
    float folds = 0.5 + 0.5 * sin(coord * 3.1 + 1.7 * njNoise(vec2(coord * 0.6, wp.y * 0.15)));
    float weave = njNoise(vec2(coord * 40.0, wp.y * 40.0));
    float isTop = step(0.75, n.y);
    diffuseColor.rgb *= mix(0.68 + 0.5 * folds + 0.06 * weave, 1.0, isTop);
  }`;default:return``}}function ap(e,t){let n=t.uniforms,r=t.glow??1;return e.onBeforeCompile=e=>{e.uniforms.uLightPos=n.uLightPos,e.uniforms.uLightGlow=n.uLightGlow,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vNjWorld;
varying vec3 vNjNormal;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
  {
    vec4 njW = vec4(transformed, 1.0);
    vec3 njN = objectNormal;
    #ifdef USE_INSTANCING
      njW = instanceMatrix * njW;
      njN = mat3(instanceMatrix) * njN;
    #endif
    vNjWorld = (modelMatrix * njW).xyz;
    vNjNormal = normalize(mat3(modelMatrix) * njN);
  }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vNjWorld;
varying vec3 vNjNormal;
uniform vec3 uLightPos;
uniform float uLightGlow;
${rp}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${ip(t.style)}`).replace(`#include <opaque_fragment>`,`{
    vec3 toL = uLightPos - vNjWorld;
    float d2 = dot(toL, toL);
    float facing = clamp(dot(normalize(vNjNormal), toL * inversesqrt(max(d2, 1e-4))) * 0.75 + 0.25, 0.0, 1.0);
    float g = uLightGlow * ${r.toFixed(3)} * facing * 2.6 / (1.0 + d2 * 0.06);
    outgoingLight += diffuseColor.rgb * vec3(1.0, 0.88, 0.66) * g;
  }
  #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`nj-${t.style}-${r.toFixed(3)}`,e}function op(e,t){return ap(new _a(e),t)}var sp=new Tf(911),cp={sanctuary:new G(11771005),valleySand:new G(10191974),granite:new G(3879983),graniteLight:new G(5523776),desertSand:new G(11046764),gravel:new G(8022099),rock:new G(4931640),lava:new G(2762276),limestone:new G(10327429),soil:new G(7756106),olive:new G(5921606),platform:new G(10919566)},lp=new G;function up(e,t,n,r,i){let a=1-r,o=sp.fbm(e/180,t/180,2),s=Cu(e,t),c=wu(e,t),l=Y(.12,.35,a);i.copy(cp.desertSand).lerp(cp.gravel,ou(.5+.6*o));let u=Y(6e3,6600,s)*(1-Y(9e3,9600,s))*(1-Y(1100,2200,c));i.lerp(cp.lava,u*.85),i.lerp(cp.rock,l);let d=Y(9600,10600,s);d>0&&(lp.copy(cp.limestone).lerp(cp.soil,ou(.35+.5*o)),i.lerp(lp,d));let f=Math.hypot(e,t);if(f<1700){let e=1-Y(1e3,1700,f);lp.copy(cp.valleySand).lerp(cp.granite,Y(.08,.26,a)*.85+Y(12,60,n)*.3),lp.lerp(cp.graniteLight,ou(.5*o)*Y(.1,.3,a)),f<66&&lp.lerp(cp.sanctuary,1-Y(40,66,f)),i.lerp(lp,e)}let p=Math.hypot(e-Pu.x,t-Pu.z);if(p<2200){let r=1-Y(1400,2200,p),[s,c]=Fu(e,t);lp.copy(cp.limestone).lerp(cp.soil,ou(.3+.55*o+Y(.08,.2,a)*.2));let l=Y(380,560,s)*(1-Y(1250,1500,s));lp.lerp(cp.olive,l*.6),Math.abs(s)<151&&Math.abs(c)<239&&n>439&&lp.copy(cp.platform).multiplyScalar(.92+.12*o),i.lerp(lp,r)}let m=Math.hypot(e-Hu.x,t-Hu.z);return m<260&&i.lerp(cp.rock,(1-Y(120,260,m))*.7),i.multiplyScalar(.92+.16*sp.noise(e/37,t/37))}function dp(e,t,n,r){let i=e+1,a=t+1,o=i*a,s=r>0?2*(i+a):0,c=new Float32Array((o+s)*3),l=new Float32Array((o+s)*3),u=new Float32Array((o+s)*3);for(let e=0;e<a;e++)for(let t=0;t<i;t++)n(t,e,c,(e*i+t)*3);let d=(e,t,n)=>c[(t*i+e)*3+n],f=new G;for(let n=0;n<a;n++)for(let r=0;r<i;r++){let a=Math.max(0,r-1),o=Math.min(e,r+1),s=Math.max(0,n-1),p=Math.min(t,n+1),m=d(o,n,0)-d(a,n,0),h=d(o,n,1)-d(a,n,1),g=d(o,n,2)-d(a,n,2),_=d(r,p,0)-d(r,s,0),v=d(r,p,1)-d(r,s,1),y=d(r,p,2)-d(r,s,2),b=v*g-y*h,x=y*m-_*g,S=_*h-v*m;x<0&&(b=-b,x=-x,S=-S);let C=Math.hypot(b,x,S)||1,w=(n*i+r)*3;l[w]=b/C,l[w+1]=x/C,l[w+2]=S/C,up(c[w],c[w+2],c[w+1],l[w+1],f),u[w]=f.r,u[w+1]=f.g,u[w+2]=f.b}let p=[],m=(e,t)=>t*i+e;for(let n=0;n<t;n++)for(let t=0;t<e;t++){let e=m(t,n),r=m(t+1,n),i=m(t,n+1),a=m(t+1,n+1);t+n&1?p.push(e,i,r,r,i,a):p.push(e,i,a,e,a,r)}if(r>0){let n=o,s=e=>{let t=n;for(let t of e)c[n*3]=c[t*3],c[n*3+1]=c[t*3+1]-r,c[n*3+2]=c[t*3+2],l.copyWithin(n*3,t*3,t*3+3),u.copyWithin(n*3,t*3,t*3+3),n++;for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1],a=t+n,o=t+n+1;p.push(r,a,i,i,a,o,r,i,a,i,o,a)}},d=[],f=[],h=[],g=[];for(let e=0;e<i;e++)d.push(m(e,0)),f.push(m(e,t));for(let t=0;t<a;t++)h.push(m(0,t)),g.push(m(e,t));s(d),s(f),s(h),s(g)}let h=new Rr;return h.setAttribute(`position`,new Cr(c,3)),h.setAttribute(`normal`,new Cr(l,3)),h.setAttribute(`color`,new Cr(u,3)),h.setIndex(p),h.computeBoundingSphere(),h.computeBoundingBox(),h}function fp(e,t){let n=Math.ceil(e.half*2/t),r=e.half*2/n,i=e.x-e.half,a=e.z-e.half;return dp(n,n,(e,t,n,o)=>{let s=i+e*r,c=a+t*r;n[o]=s,n[o+1]=Q(s,c),n[o+2]=c},14)}function pp(e,t,n,r){let i=Math.abs(e);return Math.sign(e)*(t*i+n*i**+r)}function mp(e){let t=e,n=Math.round(e*.55);return dp(n,t,(e,r,i,a)=>{let o=e/n*2-1,s=1-r/t*2,c=pp(o,4800,15200,4),l=6e3+pp(s,9085,10915,5),u=xu.x*l+Su.x*c,d=xu.z*l+Su.z*c,f=Q(u,d);Gu(u,d,2)&&(f-=30),i[a]=u,i[a+1]=f,i[a+2]=d},0)}var hp=class{constructor(e){J(this,`object`,new Fn),J(this,`patches`,[]),J(this,`corridor`,void 0),this.object.name=`terrain`;let t=op({vertexColors:!0},{style:`terrain`,uniforms:e.uniforms});for(let n of Wu){let r=new ci(fp(n,n===Wu[2]?e.quality.patchCell*1.4:e.quality.patchCell),t);r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.name=`terrain-patch`,this.patches.push(r),this.object.add(r)}let n=op({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:4},{style:`terrain`,uniforms:e.uniforms});this.corridor=new ci(mp(e.quality.corridorSegments),n),this.corridor.matrixAutoUpdate=!1,this.corridor.name=`terrain-corridor`,this.object.add(this.corridor)}update(e){}dispose(){tp(this.object)}},gp=class{constructor(){J(this,`pos`,[]),J(this,`nor`,[]),J(this,`col`,[])}get vertexCount(){return this.pos.length/3}tri(e,t,n,r,i,a,o,s,c,l){let u=r-e,d=i-t,f=a-n,p=o-e,m=s-t,h=c-n,g=d*h-f*m,_=f*p-u*h,v=u*m-d*p,y=Math.hypot(g,_,v)||1;g/=y,_/=y,v/=y,this.pos.push(e,t,n,r,i,a,o,s,c);for(let e=0;e<3;e++)this.nor.push(g,_,v),this.col.push(l.r,l.g,l.b)}quad(e,t,n,r,i){this.tri(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2],i),this.tri(e[0],e[1],e[2],n[0],n[1],n[2],r[0],r[1],r[2],i)}box(e,t,n,r,i,a,o,s,c={}){let l=Math.cos(o),u=Math.sin(o),d=(n,r,i)=>[e+n*l+r*u,i,t-n*u+r*l],f=[[-i,-a],[i,-a],[i,a],[-i,a]],p=c.sideShade??1,m=p===1?s:s.clone().multiplyScalar(p);for(let e=0;e<4;e++){let[t,i]=f[e],[a,o]=f[(e+1)%4];this.quad(d(t,i,n),d(t,i,r),d(a,o,r),d(a,o,n),m)}c.top!==!1&&this.quad(d(-i,-a,r),d(-i,a,r),d(i,a,r),d(i,-a,r),s),c.bottom&&this.quad(d(-i,-a,n),d(i,-a,n),d(i,a,n),d(-i,a,n),s)}cylinder(e,t,n,r,i,a,o,s,c=!0){for(let l=0;l<o;l++){let u=l/o*Math.PI*2,d=(l+1)/o*Math.PI*2,f=Math.cos(u),p=Math.sin(u),m=Math.cos(d),h=Math.sin(d);this.quad([e+f*i,n,t+p*i],[e+f*a,r,t+p*a],[e+m*a,r,t+h*a],[e+m*i,n,t+h*i],s),c&&a>0&&this.tri(e,r,t,e+m*a,r,t+h*a,e+f*a,r,t+p*a,s)}}dome(e,t,n,r,i,a,o,s){for(let c=0;c<o;c++){let l=c/o*Math.PI*.5,u=(c+1)/o*Math.PI*.5,d=Math.cos(l)*r,f=Math.cos(u)*r,p=n+Math.sin(l)*i,m=n+Math.sin(u)*i;for(let n=0;n<a;n++){let r=n/a*Math.PI*2,i=(n+1)/a*Math.PI*2,l=Math.cos(r),u=Math.sin(r),h=Math.cos(i),g=Math.sin(i);c===o-1?this.tri(e+l*d,p,t+u*d,e,m,t,e+h*d,p,t+g*d,s):this.quad([e+l*d,p,t+u*d],[e+l*f,m,t+u*f],[e+h*f,m,t+g*f],[e+h*d,p,t+g*d],s)}}}gable(e,t,n,r,i,a,o,s){let c=Math.cos(o),l=Math.sin(o),u=(n,r,i)=>[e+n*c+r*l,i,t-n*l+r*c],d=n+a;this.quad(u(-r,i,n),u(r,i,n),u(r,0,d),u(-r,0,d),s),this.quad(u(r,-i,n),u(-r,-i,n),u(-r,0,d),u(r,0,d),s);let f=s.clone().multiplyScalar(.92),p=u(-r,-i,n),m=u(-r,i,n),h=u(-r,0,d);this.tri(p[0],p[1],p[2],m[0],m[1],m[2],h[0],h[1],h[2],f);let g=u(r,i,n),_=u(r,-i,n),v=u(r,0,d);this.tri(g[0],g[1],g[2],_[0],_[1],_[2],v[0],v[1],v[2],f)}build(){let e=new Rr;return e.setAttribute(`position`,new Cr(new Float32Array(this.pos),3)),e.setAttribute(`normal`,new Cr(new Float32Array(this.nor),3)),e.setAttribute(`color`,new Cr(new Float32Array(this.col),3)),e.computeBoundingSphere(),e.computeBoundingBox(),e}};function _p(e){return new G(e)}function vp(e,t,n=.08){return e.clone().multiplyScalar(1-n+2*n*t)}var yp=`
attribute float aPhase;
uniform float uTime;
varying vec2 vUv;
varying float vFlicker;
varying float vFade;
void main() {
  vec3 center = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float scale = length(instanceMatrix[0].xyz);
  vec4 mv = viewMatrix * vec4(center, 1.0);
  float dist = max(-mv.z, 0.1);
  float minSize = dist * 0.0042;
  float size = max(scale * 2.6, minSize);
  // Keep total brightness similar when the sprite is enlarged for distance.
  vFade = clamp((scale * 2.6) / size, 0.18, 1.0);
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  vFlicker = 0.86 + 0.08 * sin(uTime * 7.3 + aPhase * 11.0) + 0.06 * sin(uTime * 13.1 + aPhase * 5.0);
}
`,bp=`
uniform float uLamps;
varying vec2 vUv;
varying float vFlicker;
varying float vFade;
void main() {
  float r = length(vUv) * 2.0;
  float core = exp(-r * r * 22.0);
  float halo = exp(-r * 4.2) * 0.3;
  float a = (core * 1.6 + halo) * uLamps * vFlicker * vFade;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vec3(1.0, 0.62, 0.3) * a * 2.2, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,xp=class{constructor(e,t){J(this,`mesh`,void 0),J(this,`material`,void 0),J(this,`geometry`,void 0),this.geometry=new aa(1,1),this.material=new ha({vertexShader:yp,fragmentShader:bp,uniforms:{uTime:t.uTime,uLamps:t.uLamps},transparent:!0,depthWrite:!1,blending:2,toneMapped:!1});let n=Math.max(1,e.length);this.mesh=new bi(this.geometry,this.material,n);let r=new Float32Array(n),i=new sn;e.forEach((e,t)=>{i.makeScale(e.size,e.size,e.size).setPosition(e.x,e.y,e.z),this.mesh.setMatrixAt(t,i),r[t]=t*.618%1}),this.mesh.count=e.length,this.geometry.setAttribute(`aPhase`,new fi(r,1)),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.mesh.name=`lamps`}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose(),this.mesh.removeFromParent()}};function Sp(e=1){let t=du(1607),n=[],r=[],i=12.5;for(let a=-340;a<=340;a+=i)for(let o=-340;o<=340;o+=i){let i=o+(t()-.5)*7,s=a+(t()-.5)*7,c=t(),l=3+t()*3.4,u=3+t()*3.4,d=(t()-.5)*.3,f=Math.hypot(i,s);if(f<53||f>335||c>(.94-.55*Y(140,335,f))*(.55+.45*e))continue;let p=Math.atan2(i,-s),m=!1;for(let e of Mu){let t=p-e;Math.cos(t)>0&&Math.abs(f*Math.sin(t))<5.5+Math.max(l,u)*.7&&(m=!0)}if(m||Uf(i,s,4)>.42||Q(i,s)>42)continue;let h=Math.max(l,u)*1.05;r.some(([e,t,n])=>Math.hypot(e-i,t-s)<n+h+.6)||(r.push([i,s,h]),n.push({x:i,z:s,halfX:l,halfZ:u,yaw:Math.atan2(i,s)+d}))}return n}function Cp(e=14){let t=[],n=ku.innerRadius+ku.thickness/2;for(let r=0;r<e;r++){let i=ku.from+(ku.to-ku.from)*r/e,a=ku.from+(ku.to-ku.from)*(r+1)/e,o=(i+a)/2,[s,c]=Du(ku.center[0]+Math.cos(o)*n,ku.center[1]-Math.sin(o)*n),l=n*Math.sin((a-i)/2)+.05,[u,d]=Du(-Math.sin(o),-Math.cos(o));t.push({x:s,z:c,half:l,yaw:Math.atan2(-d,u)})}return t}var wp=class{constructor(e){J(this,`object`,new Fn),J(this,`interactables`,[]),J(this,`obstacles`,[]),J(this,`shadowCasters`,[]),J(this,`proxyMat`,new Xr({visible:!1})),J(this,`lamps`,void 0),this.object.name=`makkah`;let t=e.uniforms,n=du(77),r=new gp;r.box(0,0,-.3,Eu.height,Eu.halfX,Eu.halfZ,Eu.yaw,_p(3420474),{sideShade:1});let i=new ci(r.build(),op({vertexColors:!0,emissive:723728},{style:`cloth`,uniforms:t,glow:.55}));i.castShadow=!0,i.receiveShadow=!0,i.name=`kaaba`,this.object.add(i),this.shadowCasters.push(i);let a=new gp;{let[e,t]=Du(Eu.halfX+.09,Eu.halfZ-3.6);a.box(e,t,2.1,5.2,.1,1,Eu.yaw,_p(3811868));let[n,r]=Du(Eu.halfX+.14,Eu.halfZ-3.6);a.box(n,r,2,2.12,.16,1.15,Eu.yaw,_p(4864554))}a.box(0,0,-.3,.22,Eu.halfX+.35,Eu.halfZ+.35,Eu.yaw,_p(9406330));let o=new ci(a.build(),op({vertexColors:!0},{style:`plain`,uniforms:t,glow:.6}));o.receiveShadow=!0,this.object.add(o);let s=new gp,c=_p(13616562);for(let e of Cp())s.box(e.x,e.z,-.2,ku.height,e.half,ku.thickness/2,e.yaw,vp(c,n(),.05),{sideShade:.95});let l=Q(ju.x,ju.z);s.cylinder(ju.x,ju.z,l-.2,l+.85,ju.radius,ju.radius*.96,16,_p(12037530),!1),s.cylinder(ju.x,ju.z,l-.2,l+.86,ju.radius-.35,ju.radius-.35,16,_p(7300955),!1);{let e=ju.radius*.96,t=ju.radius-.35,n=l+.86,r=_p(12892838);for(let i=0;i<16;i++){let a=i/16*Math.PI*2,o=(i+1)/16*Math.PI*2;s.quad([ju.x+Math.cos(a)*t,n,ju.z+Math.sin(a)*t],[ju.x+Math.cos(o)*t,n,ju.z+Math.sin(o)*t],[ju.x+Math.cos(o)*e,n,ju.z+Math.sin(o)*e],[ju.x+Math.cos(a)*e,n,ju.z+Math.sin(a)*e],r)}s.cylinder(ju.x,ju.z,l-1.5,l+.3,t,t,16,_p(724240),!0)}let u=_p(4930089);s.box(ju.x-1.25,ju.z,l,l+2.6,.09,.09,0,u),s.box(ju.x+1.25,ju.z,l,l+2.6,.09,.09,0,u),s.box(ju.x,ju.z,l+2.5,l+2.68,1.42,.08,0,u);let d=new ci(s.build(),op({vertexColors:!0},{style:`plaster`,uniforms:t}));d.castShadow=!0,d.receiveShadow=!0,this.object.add(d),this.shadowCasters.push(d);let f=new gp,p=[],m=[_p(11047279),_p(9865848),_p(11969155),_p(9206630),_p(10523775)],h=_p(2300692),g=Sp(e.quality.density);for(let e of g){let t=[[-e.halfX,-e.halfZ],[e.halfX,-e.halfZ],[e.halfX,e.halfZ],[-e.halfX,e.halfZ]].map(([t,n])=>{let r=Math.cos(e.yaw),i=Math.sin(e.yaw);return Q(e.x+t*r+n*i,e.z-t*i+n*r)}),r=Math.min(...t)-.6,i=Math.hypot(e.x,e.z),a=n()<.42-.25*Y(80,300,i)?2:1,o=Math.max(...t)+a*3.2+.2*n(),s=vp(m[Math.floor(n()*m.length)],n(),.07);f.box(e.x,e.z,r,o,e.halfX,e.halfZ,e.yaw,s,{sideShade:.94});let c=s.clone().multiplyScalar(.93),l=Math.cos(e.yaw),u=Math.sin(e.yaw),d=(t,n)=>[e.x+t*l+n*u,e.z-t*u+n*l],g=.22,_=o+.55;{let[t,n]=d(0,-e.halfZ+g);f.box(t,n,o,_,e.halfX,g,e.yaw,c,{top:!0});let[r,i]=d(0,e.halfZ-g);f.box(r,i,o,_,e.halfX,g,e.yaw,c,{top:!0});let[a,s]=d(-e.halfX+g,0);f.box(a,s,o,_,g,e.halfZ-2*g,e.yaw,c,{top:!0});let[l,u]=d(e.halfX-g,0);f.box(l,u,o,_,g,e.halfZ-2*g,e.yaw,c,{top:!0})}let v=(n()-.5)*(e.halfX*2-2.2),y=Q(...d(v,-e.halfZ-.4));{let[t,r]=d(v,-e.halfZ-.04);if(f.box(t,r,y,y+2.05,.55,.04,e.yaw,h,{top:!1}),n()<.16){let[t,n]=d(v,-e.halfZ-.25);p.push({x:t,y:y+1.1,z:n,size:.55})}}let b=1+Math.floor(n()*2);for(let t=0;t<b;t++){let t=(n()-.5)*(e.halfX*2-1.6),r=o-1.3-(a>1?n()*2.8:0),[i,s]=d(t,-e.halfZ-.04);if(f.box(i,s,r,r+.6,.28,.04,e.yaw,h,{top:!1}),n()<.2){let[n,i]=d(t,-e.halfZ-.18);p.push({x:n,y:r+.3,z:i,size:.32})}}if(n()<.18){let[t,r]=d((n()-.5)*e.halfX,(n()-.5)*e.halfZ);f.box(t,r,o,o+2.4,Math.min(1.6,e.halfX*.45),Math.min(1.6,e.halfZ*.45),e.yaw,s)}this.obstacles.push({kind:`box`,x:e.x,z:e.z,halfX:e.halfX,halfZ:e.halfZ,yaw:e.yaw})}let _=new ci(f.build(),op({vertexColors:!0},{style:`plaster`,uniforms:t}));_.castShadow=!0,_.receiveShadow=!0,_.name=`makkah-houses`,this.object.add(_),this.shadowCasters.push(_),this.lamps=new xp(p,t),this.object.add(this.lamps.mesh),this.obstacles.push({kind:`box`,x:0,z:0,halfX:Eu.halfX+.25,halfZ:Eu.halfZ+.25,yaw:Eu.yaw}),this.obstacles.push({kind:`circle`,x:ju.x,z:ju.z,r:ju.radius+.3});for(let e of Cp())this.obstacles.push({kind:`box`,x:e.x,z:e.z,halfX:e.half,halfZ:ku.thickness/2+.05,yaw:e.yaw});let v=(e,t,n,r,i=0)=>{let a=new ci(e,this.proxyMat);return a.position.set(t,n,r),a.rotation.y=i,a.updateMatrixWorld(),this.object.add(a),a},y=v(new Yi(Eu.halfX*2+.6,Eu.height+.6,Eu.halfZ*2+.6),0,Eu.height/2,0,Eu.yaw),[b,x]=Du(ku.center[0],ku.center[1]-3.2),S=v(new Xi(6.2,6.2,1.6,16),b,.8,x),C=v(new Xi(2.2,2.2,3.2,12),ju.x,l+1.4,ju.z),w=v(new Xi(46,46,.4,32),0,.05,0),T=()=>!0;this.interactables.push({id:`kaaba`,targets:[y],maxDistance:260,isAvailable:T,anchor:e=>(e.set(0,Eu.height+2.2,0),!0)},{id:`hijr`,targets:[S],maxDistance:120,isAvailable:T,anchor:e=>{let[t,n]=Du(ku.center[0],ku.center[1]-ku.innerRadius-.6);return e.set(t,ku.height+1.4,n),!0}},{id:`zamzam`,targets:[C],maxDistance:120,isAvailable:T,anchor:e=>(e.set(ju.x,l+3.6,ju.z),!0)},{id:`sanctuary`,targets:[w],maxDistance:200,isAvailable:T,anchor:e=>(e.set(-24,2.4,26),!0)},{id:`makkah`,targets:[_],maxDistance:900,isAvailable:T,anchor:e=>(e.set(84,Q(84,-96)+11,-96),!0)})}update(e){}dispose(){this.lamps.dispose(),this.proxyMat.dispose(),tp(this.object)}},Tp=new Tf(4242),Ep=[[X.halfU+4,-X.halfV-4],[X.halfU+6,-520],[-470,-600],[-870,-470],[-930,0],[-860,330],[-600,540],[-200,600],[120,560],[215,330],[X.halfU+4,X.halfV+4]],Dp=[{u:-585,v:-175,halfL:34,halfW:15,rotunda:!0},{u:-430,v:335,halfL:30,halfW:14,rotunda:!1},{u:-230,v:-470,halfL:24,halfW:11,rotunda:!1}];function Op(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function kp(e,t){return Op(e,t,Ep)}function Ap(e=1){let t=du(3307),n=[],r=15.5,i=Math.cos(X.yaw),a=Math.sin(X.yaw);for(let o=-620;o<=620;o+=r)for(let s=-950;s<=240;s+=r){let r=s+(t()-.5)*6,c=o+(t()-.5)*6,l=t(),u=3.4+t()*3.2,d=3.4+t()*3.2,f=(t()-.5)*.12;if(!kp(r,c)||Lu(r,c)<X.wall+14||Math.abs(r+560)<9||Math.abs(c+150)<8||r<-X.halfU+2&&r>-X.halfU-Ru.length-40&&Math.abs(c-Ru.v)<16||Math.abs(c-Ru.v)<7&&r<-X.halfU||Dp.some(e=>Math.abs(r-e.u)<e.halfL+22&&Math.abs(c-e.v)<e.halfW+22))continue;let p=Math.hypot(r,c);if(l>(.62-.3*Y(400,900,p))*(.5+.5*e))continue;let m=Pu.x+r*i+c*a,h=Pu.z-r*a+c*i;Uf(m,h,4)>.4||n.push({x:m,z:h,halfX:u,halfZ:d,yaw:X.yaw+f+(t()<.5?0:Math.PI/2),near:p<420})}return n}var jp=class{constructor(e){J(this,`object`,new Fn),J(this,`interactables`,[]),J(this,`obstacles`,[]),J(this,`shadowCasters`,[]),J(this,`proxyMat`,new Xr({visible:!1})),J(this,`lamps`,void 0),J(this,`later`,new Fn),J(this,`laterLineMat`,void 0),J(this,`laterFaceMat`,void 0),J(this,`laterFade`,0),this.object.name=`jerusalem`;let t=e.uniforms,n=du(919),r=X,i=(e,t)=>Iu(e,t),a=new gp,o=_p(12168856),s=(e,t,n,r)=>{let a=1/0;for(let o=0;o<=24;o++){let s=o/24,[c,l]=i(e+(n-e)*s,t+(r-t)*s);a=Math.min(a,Q(c,l))}return a},c=(e,t,c,l,u,d)=>{let[f,p]=i((e+t)/2,(c+l)/2),m=Math.abs(t-e)/2,h=Math.abs(l-c)/2,g=d??Math.min(s(e,c,t,l),s(e,l,t,c))-4;a.box(f,p,g,u,m,h,r.yaw,vp(o,n(),.03),{sideShade:.97})},l=r.halfU,u=r.halfV,d=r.wall,f=Ru.v-Ru.halfWidth,p=Ru.v+Ru.halfWidth;c(-l-d,-l,-u-d,f,r.y+.02),c(-l-d,-l,p,u+d,r.y+.02),c(l,l+d,-u-d,u+d,r.y+.02),c(-l,l,-u-d,-u,r.y+.02),c(-l,l,u,u+d,r.y+.02);let m=.9,h=r.y+r.parapet;c(-l-d,-l-d+m,-u-d,f,h,r.y),c(-l-d,-l-d+m,p,u+d,h,r.y),c(l+d-m,l+d,-u-d,u+d,h,r.y),c(-l-d,l+d,-u-d,-u-d+m,h,r.y),c(-l-d,l+d,u+d-m,u+d,h,r.y);{let[e,t]=i(-l-d/2,f-1.2),[n,o]=i(-l-d/2,p+1.2);a.box(e,t,r.y-2,r.y+6.5,d/2+.3,1.2,r.yaw,_p(11576719)),a.box(n,o,r.y-2,r.y+6.5,d/2+.3,1.2,r.yaw,_p(11576719));let[s,c]=i(-l-d/2,Ru.v);a.box(s,c,r.y+5.4,r.y+6.8,d/2+.3,Ru.halfWidth+2.4,r.yaw,_p(11116168))}for(let e of[-1,1]){let t=Ru.v+e*(Ru.halfWidth+.5);for(let e=0;e<8;e++){let s=-l-d-Ru.length+e*Ru.length/8,[c,u]=i((s+(s+Ru.length/8))/2,t),f=Q(c,u);a.box(c,u,f-3,f+1.1,Ru.length/8/2+.05,.45,r.yaw,vp(o,n(),.04))}}let g=new ci(a.build(),op({vertexColors:!0},{style:`stone`,uniforms:t}));g.castShadow=!0,g.receiveShadow=!0,g.name=`platform-walls`,this.object.add(g),this.shadowCasters.push(g),this.object.add(this.buildRock(t));let _=new gp,v=_p(10984582);for(let t=0;t<70*e.quality.density;t++){let e=(n()*2-1)*(l-12),t=(n()*2-1)*(u-12);if(Math.hypot(e-zu.u,t-zu.v)<30||Math.hypot(e-4,t-150)<26||Math.abs(t-Ru.v)<12&&e<-l+40)continue;let[a,o]=i(e,t),s=n();if(s<.55){let e=3+Math.floor(n()*5);for(let t=0;t<e;t++){let e=(n()-.5)*6,t=(n()-.5)*6,i=.5+n()*.9;_.box(a+e,o+t,r.y-.2,r.y+i*(.6+n()*.6),i,i*(.6+n()*.5),n()*3,vp(v,n(),.1))}this.obstacles.push({kind:`circle`,x:a,z:o,r:3.2})}else if(s<.8){let e=n()*Math.PI,t=1.4+n()*1.6,i=.45+n()*.25,s=Math.cos(e),c=Math.sin(e);for(let e=0;e<8;e++){let l=e/8*Math.PI*2,u=(e+1)/8*Math.PI*2,d=(e,t)=>[a+s*t+-c*Math.cos(e)*i,r.y+i+Math.sin(e)*i-.05,o+c*t+s*Math.cos(e)*i];_.quad(d(l,-t/2),d(l,t/2),d(u,t/2),d(u,-t/2),vp(_p(12432286),n(),.05))}this.obstacles.push({kind:`circle`,x:a,z:o,r:t/2+.4})}else{let e=3+n()*7,t=.8+n()*2.2;_.box(a,o,r.y-.3,r.y+t,e/2,.55,r.yaw+(n()<.5?0:Math.PI/2),vp(v,n(),.06)),this.obstacles.push({kind:`box`,x:a,z:o,halfX:e/2+.3,halfZ:.9,yaw:r.yaw})}}let y=new ci(_.build(),op({vertexColors:!0},{style:`stone`,uniforms:t}));y.castShadow=!0,y.receiveShadow=!0,this.object.add(y),this.shadowCasters.push(y);let b=new gp,x=[],S=[_p(12103321),_p(11116426),_p(12761250),_p(10326653)],C=_p(2235414),w=_p(8016448);for(let t of Ap(e.quality.density)){let e=Math.cos(t.yaw),r=Math.sin(t.yaw),i=(n,i)=>[t.x+n*e+i*r,t.z-n*r+i*e],a=[i(-t.halfX,-t.halfZ),i(t.halfX,-t.halfZ),i(t.halfX,t.halfZ),i(-t.halfX,t.halfZ)].map(([e,t])=>Q(e,t)),o=Math.min(...a)-.6,s=1+Math.floor(n()*(t.near?2.6:2.2)),c=Math.max(...a)+s*3.3,l=vp(S[Math.floor(n()*S.length)],n(),.06);b.box(t.x,t.z,o,c,t.halfX,t.halfZ,t.yaw,l,{sideShade:.94});let u=n();if(u<.18)b.dome(t.x,t.z,c,Math.min(t.halfX,t.halfZ)*.8,Math.min(t.halfX,t.halfZ)*.55,8,3,l.clone().multiplyScalar(.96));else if(t.near&&u<.5){let e=l.clone().multiplyScalar(.93),[n,r]=i(0,-t.halfZ+.2);b.box(n,r,c,c+.5,t.halfX,.2,t.yaw,e);let[a,o]=i(0,t.halfZ-.2);b.box(a,o,c,c+.5,t.halfX,.2,t.yaw,e)}if(t.near||n()<.4){let e=(n()-.5)*(t.halfX*2-2),[r,a]=i(e,-t.halfZ-.04),o=Q(r,a);b.box(r,a,o,o+2.1,.55,.04,t.yaw,C,{top:!1});let s=c-1.4,[l,u]=i(-e*.6,-t.halfZ-.04);if(b.box(l,u,s,s+.6,.3,.04,t.yaw,C,{top:!1}),n()<.14){let[n,r]=i(-e*.6,-t.halfZ-.2);x.push({x:n,y:s+.3,z:r,size:.34})}}t.near&&this.obstacles.push({kind:`box`,x:t.x,z:t.z,halfX:t.halfX,halfZ:t.halfZ,yaw:t.yaw})}for(let e of Dp){let[t,n]=i(e.u,e.v),a=Q(t,n),o=r.yaw,s=_p(12892837);b.box(t,n,a-2,a+15,e.halfL,e.halfW,o,s,{sideShade:.95}),b.gable(t,n,a+15,e.halfL,e.halfW+.6,6,o,w);let[c,l]=i(e.u+e.halfL,e.v);if(b.cylinder(c,l,a-2,a+11,e.halfW*.7,e.halfW*.7,10,s,!1),b.dome(c,l,a+11,e.halfW*.7,e.halfW*.5,10,3,w),e.rotunda){let[t,n]=i(e.u-e.halfL-18,e.v),r=Q(t,n);b.cylinder(t,n,r-2,r+17,17,17,16,s,!1),b.cylinder(t,n,r+17,r+19,17.4,15,16,w,!1),b.dome(t,n,r+19,15,9,16,4,w)}let u=i(e.u-e.halfL+2,e.v-e.halfW-.3);x.push({x:u[0],y:a+3,z:u[1],size:.5}),this.obstacles.push({kind:`box`,x:t,z:n,halfX:e.halfL+1,halfZ:e.halfW+1,yaw:o})}for(let e=0;e<Ep.length-1;e++){let[t,n]=Ep[e],[a,o]=Ep[e+1],s=Math.hypot(a-t,o-n),c=Math.max(1,Math.round(s/40));for(let e=0;e<c;e++){let l=e/c,u=(e+1)/c,[d,f]=i(t+(a-t)*(l+u)/2,n+(o-n)*(l+u)/2),p=Q(d,f),m=r.yaw+Math.atan2(-(o-n),a-t);if(b.box(d,f,p-4,p+9,s/c/2+.6,1.5,m,_p(11445133),{sideShade:.95}),this.obstacles.push({kind:`box`,x:d,z:f,halfX:s/c/2+.6,halfZ:2,yaw:m}),e%2==0){let[e,r]=i(t+(a-t)*l,n+(o-n)*l),s=Q(e,r);b.box(e,r,s-4,s+13,4.2,4.2,m,_p(10918789)),this.obstacles.push({kind:`box`,x:e,z:r,halfX:4.4,halfZ:4.4,yaw:m})}}}let T=new ci(b.build(),op({vertexColors:!0},{style:`plaster`,uniforms:t}));T.castShadow=!0,T.receiveShadow=!0,T.name=`jerusalem-city`,this.object.add(T),this.shadowCasters.push(T),this.lamps=new xp(x,t),this.object.add(this.lamps.mesh);let E=new gp,D=_p(16777215);{let[e,t]=i(zu.u,zu.v),n=26.9;E.cylinder(e,t,r.y,r.y+11,n,n,8,D,!0),E.cylinder(e,t,r.y+11,r.y+20,11.6,11.6,16,D,!1),E.dome(e,t,r.y+20,11.6,14,16,5,D)}{let[e,t]=i(0,205);E.box(e,t,r.y,r.y+12,27,31,r.yaw,D);let[n,a]=i(0,224);E.cylinder(n,a,r.y+12,r.y+16,6.5,6.5,12,D,!1),E.dome(n,a,r.y+16,6.5,6,12,3,D)}let ee=E.build();this.laterLineMat=new Ti({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:2,toneMapped:!1}),this.laterFaceMat=new Xr({color:10473727,transparent:!0,opacity:0,depthWrite:!1,side:2,toneMapped:!1});let O=new Li(new ra(ee,25),this.laterLineMat),k=new ci(ee,this.laterFaceMat);k.renderOrder=6,O.renderOrder=7,this.later.add(k,O),this.later.visible=!1,this.object.add(this.later);{let[e,t]=i(zu.u,zu.v);this.obstacles.push({kind:`circle`,x:e,z:t,r:Math.max(zu.rx,zu.rz)+.4})}let A=(e,t,n,r,i=0,a=1,o=1)=>{let s=new ci(e,this.proxyMat);return s.position.set(t,n,r),s.rotation.y=i,s.scale.set(a,1,o),s.updateMatrixWorld(),this.object.add(s),s},te=A(new Yi(l*2+d*2,40,u*2+d*2),Pu.x,r.y-19.9,Pu.z,r.yaw),[j,ne]=i(zu.u,zu.v),M=A(new Xi(1,1,3.2,16),j,r.y+1.2,ne,r.yaw,zu.rx+.6,zu.rz+.6),[re,ie]=i(zu.u,zu.v),ae=A(new Xi(27,27,34,8),re,r.y+17,ie),[oe,se]=i(0,205),ce=A(new Yi(54,16,62),oe,r.y+8,se,r.yaw),le=()=>!0;this.interactables.push({id:`aqsa`,targets:[te],maxDistance:2600,isAvailable:le,anchor:e=>{let[t,n]=i(60,30);return e.set(t,r.y+6,n),!0}},{id:`rock`,targets:[M],maxDistance:220,isAvailable:e=>!e.laterBuildings,anchor:e=>(e.set(j,r.y+4.2,ne),!0)},{id:`later-buildings`,targets:[ae,ce],maxDistance:1600,isAvailable:e=>e.laterBuildings,anchor:e=>(e.set(re,r.y+38,ie),!0)},{id:`jerusalem`,targets:[],maxDistance:2400,isAvailable:le,anchor:e=>{let[t,n]=i(-330,-60);return e.set(t,Q(t,n)+14,n),!0}},{id:`olives`,targets:[],maxDistance:2400,isAvailable:le,anchor:e=>{let[t,n]=i(620,120);return e.set(t,Q(t,n)+9,n),!0}})}buildRock(e){let t=new gp,n=_p(10458240),r=(e,t)=>{let n=t/28*Math.PI*2,r=e/7,i=1+.12*Tp.noise(Math.cos(n)*2,Math.sin(n)*2),a=zu.u+Math.cos(n)*zu.rx*r*i,o=zu.v+Math.sin(n)*zu.rz*r*i,[s,c]=Iu(a,o),l=e===7?X.y-.3:Math.max(X.y+.05,Wf(a,o));return[s,Number.isFinite(l)?l:X.y,c]};for(let e=0;e<7;e++)for(let i=0;i<28;i++){let a=r(e,i),o=r(e,i+1),s=r(e+1,i+1),c=r(e+1,i),l=.88+.2*Tp.noise(e*.7,i*.5);t.quad(a,o,s,c,n.clone().multiplyScalar(l))}let i=new ci(t.build(),op({vertexColors:!0},{style:`terrain`,uniforms:e}));return i.castShadow=!0,i.receiveShadow=!0,i.name=`rock`,i}update(e){let t=e.camera.position,n=1-Y(2500,4e3,Math.hypot(t.x-Pu.x,t.z-Pu.z)),r=e.laterBuildings?n:0;this.laterFade+=(r-this.laterFade)*Math.min(1,e.dt*3||1),e.dt===0&&(this.laterFade=r),this.later.visible=this.laterFade>.01,this.laterLineMat.opacity=.75*this.laterFade,this.laterFaceMat.opacity=.05*this.laterFade}dispose(){this.lamps.dispose(),this.proxyMat.dispose(),this.laterLineMat.dispose(),this.laterFaceMat.dispose(),tp(this.object)}},Mp=new Tf(6061);function Np(e){let t=[],n=[],r=[];for(let{geo:i,color:a}of e){let e=i.index?i.toNonIndexed():i;e.computeVertexNormals();let o=e.getAttribute(`position`),s=e.getAttribute(`normal`);for(let e=0;e<o.count;e++)t.push(o.getX(e),o.getY(e),o.getZ(e)),n.push(s.getX(e),s.getY(e),s.getZ(e)),r.push(a.r,a.g,a.b);e!==i&&e.dispose(),i.dispose()}let i=new Rr;return i.setAttribute(`position`,new Er(t,3)),i.setAttribute(`normal`,new Er(n,3)),i.setAttribute(`color`,new Er(r,3)),i.computeBoundingSphere(),i}function Pp(){let e=new Xi(.16,.3,1.9,6,1);e.translate(0,.95,0),e.rotateZ(.08);let t=[];for(let[e,n,r,i]of[[0,2.6,0,1.55],[.9,2.3,.4,1.15],[-.8,2.4,-.3,1.2],[.1,2.2,-.95,1.05]]){let a=new ia(i,1);a.scale(1,.72,1),a.translate(e,n,r),t.push({geo:a,color:new G(7240284)})}return Np([{geo:e,color:new G(5917242)},...t])}function Fp(){let e=new Xi(.15,.22,1.2,6,1);e.translate(0,.6,0);let t=new Zi(1.15,8.5,8,2);return t.translate(0,5.2,0),Np([{geo:e,color:new G(4865070)},{geo:t,color:new G(3820084)}])}function Ip(){let e=new Xi(.1,.17,1.8,5,1);e.translate(0,.9,0),e.rotateZ(.15);let t=new ia(1.6,1);return t.scale(1.25,.32,1.25),t.translate(.25,2.1,0),Np([{geo:e,color:new G(5193778)},{geo:t,color:new G(6974028)}])}var Lp=class{constructor(e){J(this,`object`,new Fn),J(this,`obstacles`,[]),this.object.name=`vegetation`;let t=op({vertexColors:!0},{style:`plain`,uniforms:e.uniforms,glow:.7}),n=du(5150),r=e.quality.density,i=[],a=Math.round(2600*r);for(let e=0;e<a*10&&i.length<a;e++){let e=-1100+n()*2500,t=-1050+n()*2100,r=n(),[a,o]=Iu(e,t),s=Y(240,420,e)*(1-Y(1250,1400,e)),c=.5+.5*Mp.fbm(e/160,t/160,2),l=s*(.25+.75*Y(.35,.65,c));l=kp(e,t)?.035:Math.max(l,.16*Y(.45,.7,c)),Lu(e,t)<X.wall+6&&(l=0),Math.abs(t-Ru.v)<16&&e<-X.halfU&&e>-X.halfU-Ru.length-30&&(l=0),!(r>l)&&(Uf(a,o,3)>.55||i.push({x:a,z:o,s:.75+n()*.6,yaw:n()*Math.PI*2,tint:n()}))}for(let e=0;e<9;e++){let e=(n()*2-1)*(X.halfU-25),t=(n()*2-1)*(X.halfV-25);if(Math.hypot(e-zu.u,t-zu.v)<32||Math.hypot(e-Bu.u,t-Bu.v)<30)continue;let[r,a]=Iu(e,t);i.push({x:r,z:a,s:.8+n()*.4,yaw:n()*6.28,tint:n()})}let o=[];for(let e=0;e<2e3&&o.length<60*r;e++){let e=-1e3+n()*1500,t=-800+n()*1600;if(kp(e,t)||Lu(e,t)<20)continue;let[r,i]=Iu(e,t);Uf(r,i,3)>.4||o.push({x:r,z:i,s:.8+n()*.5,yaw:n()*6.28,tint:n()})}let s=[];for(let e=0;e<4e3&&s.length<150*r;e++){let e=n()<.45,t=e?0:Hu.x,r=e?0:Hu.z,i=e?120+n()*900:60+n()*1200,a=n()*Math.PI*2,o=t+Math.cos(a)*i,c=r+Math.sin(a)*i;e&&Math.hypot(o,c)<186||Uf(o,c,3)>(e?.5:.3)||e&&n()>.35||s.push({x:o,z:c,s:.7+n()*.6,yaw:n()*6.28,tint:n()})}this.addInstances(Pp(),t,i,.45),this.addInstances(Fp(),t,o,.5),this.addInstances(Ip(),t,s,.35)}addInstances(e,t,n,r){let i=new bi(e,t,Math.max(1,n.length)),a=new Pn,o=new sn,s=new G;n.forEach((e,t)=>{a.position.set(e.x,Q(e.x,e.z)-.15,e.z),a.rotation.set(0,e.yaw,0),a.scale.setScalar(e.s),a.updateMatrix(),o.copy(a.matrix),i.setMatrixAt(t,o),s.setScalar(.82+.3*e.tint),i.setColorAt(t,s),[Nu,Vu,Uu].some(t=>Math.hypot(e.x-t.x,e.z-t.z)<t.radius+5)&&this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:r*e.s+.1})}),i.count=n.length,i.castShadow=!1,i.receiveShadow=!0,i.computeBoundingSphere(),this.object.add(i)}update(e){}dispose(){tp(this.object)}},Rp=`
uniform vec3 uCenter;
uniform float uUpright;
uniform float uMinScreen;
uniform float uScale;
varying vec2 vUv;
varying float vSizeFade;
void main() {
  vec4 mvc = viewMatrix * vec4(uCenter, 1.0);
  float dist = max(-mvc.z, 0.1);
  vec3 upView = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  vec3 up = normalize(mix(vec3(0.0, 1.0, 0.0), upView, uUpright));
  vec3 right = normalize(cross(up, vec3(0.0, 0.0, 1.0)));
  if (length(cross(up, vec3(0.0, 0.0, 1.0))) < 1e-3) right = vec3(1.0, 0.0, 0.0);
  float orb = max(2.6 * uScale, dist * uMinScreen);
  float w = mix(orb, 1.25 * uScale, uUpright);
  float h = mix(orb, 2.5 * uScale, uUpright);
  vSizeFade = clamp((2.6 * uScale) / orb, 0.35, 1.0);
  vec3 p = mvc.xyz + right * position.x * w + up * position.y * h;
  gl_Position = projectionMatrix * vec4(p, 1.0);
  vUv = position.xy * 2.0;
}
`,zp=`
uniform float uUpright;
uniform float uVisible;
uniform float uTime;
varying vec2 vUv;
varying float vSizeFade;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
void main() {
  vec2 p = vUv;
  // Upright: a soft vertical glow that tapers at both ends — no head, no limbs.
  float y = p.y;
  float width = 0.42 * (1.0 - smoothstep(0.15, 1.0, abs(y + 0.05))) + 0.06;
  float shimmer = 0.85 + 0.15 * vnoise(vec2(p.x * 3.0, y * 4.0 - uTime * 0.9));
  float column = exp(-pow(p.x / max(width, 0.02), 2.0)) * (1.0 - smoothstep(0.55, 1.0, abs(y)));
  float core = exp(-pow(p.x / max(width * 0.35, 0.01), 2.0)) * (1.0 - smoothstep(0.3, 0.9, abs(y)));
  float upright = (column * 0.75 + core * 0.9) * shimmer;
  // Travelling: a round point of light.
  float r = length(p);
  float orb = exp(-r * r * 9.0) * 1.4 + exp(-r * 3.2) * 0.35;
  float a = mix(orb, upright, uUpright) * uVisible * mix(vSizeFade, 1.0, uUpright);
  if (a < 0.002) discard;
  vec3 col = mix(vec3(1.0, 0.86, 0.62), vec3(1.0, 0.97, 0.9), clamp(core + orb * 0.5, 0.0, 1.0));
  gl_FragColor = vec4(col * a * 1.7, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Bp=`
uniform vec3 uCenter;
uniform float uSize;
uniform float uMinScreen;
varying vec2 vUv;
varying float vFade;
void main() {
  vec4 mvc = viewMatrix * vec4(uCenter, 1.0);
  float dist = max(-mvc.z, 0.1);
  float size = max(uSize, dist * uMinScreen);
  vFade = clamp(uSize / size, 0.2, 1.0);
  vec3 p = mvc.xyz + vec3(position.xy * size, 0.0);
  gl_Position = projectionMatrix * vec4(p, 1.0);
  vUv = position.xy * 2.0;
}
`,Vp=`
uniform float uIntensity;
varying vec2 vUv;
varying float vFade;
void main() {
  float r = length(vUv);
  float a = exp(-r * r * 4.0) * (1.0 - smoothstep(0.7, 1.0, r)) * uIntensity * vFade;
  if (a < 0.002) discard;
  gl_FragColor = vec4(vec3(1.0, 0.85, 0.6) * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Hp=`
attribute vec3 aTangent;
attribute float aU;
attribute float aSide;
attribute float aLift;
varying float vU;
varying float vSide;
varying float vLift;
void main() {
  vec3 toCam = cameraPosition - position;
  float dist = length(toCam);
  vec3 side = cross(aTangent, toCam / max(dist, 1e-3));
  float sl = length(side);
  side = sl > 1e-4 ? side / sl : vec3(1.0, 0.0, 0.0);
  float w = max(0.7, dist * 0.0017);
  vec3 p = position + side * aSide * w;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  vU = aU;
  vSide = aSide;
  vLift = aLift;
}
`,Up=`
uniform float uHead;
uniform float uAnchor;
uniform float uTrail;
uniform float uTotal;
uniform float uTime;
varying float vU;
varying float vSide;
varying float vLift;
void main() {
  float lo = min(uAnchor, uHead);
  float hi = max(uAnchor, uHead);
  if (vU < lo || vU > hi) discard;
  float behind = abs(uHead - vU) * uTotal;
  float head = exp(-behind / 650.0);
  float body = 0.2 + 0.8 * head;
  float edge = 1.0 - abs(vSide);
  edge = edge * edge * (3.0 - 2.0 * edge);
  // A slow ripple along the trail.
  float ripple = 0.88 + 0.12 * sin(vU * uTotal * 0.02 - uTime * 1.6);
  // Quieter where the path stands close to the ground (no pillar at either end).
  float a = uTrail * body * edge * ripple * (0.2 + 0.8 * vLift);
  if (a < 0.002) discard;
  gl_FragColor = vec4(vec3(1.0, 0.84, 0.56) * a * 0.95, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Wp=`
uniform vec3 uBase;
uniform float uHeight;
varying vec2 vUv;
void main() {
  vec3 world = uBase + vec3(0.0, position.y * uHeight, 0.0);
  vec4 mv = viewMatrix * vec4(world, 1.0);
  float dist = max(-mv.z, 0.1);
  float w = max(0.9, dist * 0.002);
  vec3 upView = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  vec3 right = normalize(cross(upView, vec3(0.0, 0.0, 1.0)));
  mv.xyz += right * position.x * w;
  gl_Position = projectionMatrix * mv;
  vUv = vec2(position.x * 2.0, position.y);
}
`,Gp=`
uniform float uIntensity;
varying vec2 vUv;
void main() {
  float edge = exp(-vUv.x * vUv.x * 6.0);
  float along = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float a = edge * along * uIntensity;
  if (a < 0.002) discard;
  gl_FragColor = vec4(vec3(1.0, 0.9, 0.7) * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Kp=class{constructor(){J(this,`object`,new Fn),J(this,`formMat`,void 0),J(this,`haloMat`,void 0),J(this,`trailMat`,void 0),J(this,`beamMat`,void 0),J(this,`quad`,new aa(1,1)),J(this,`beamGeo`,new aa(1,1)),J(this,`trailGeo`,void 0),J(this,`landing`,new H),this.object.name=`light`;let e={transparent:!0,depthWrite:!1,blending:2};this.formMat=new ha({vertexShader:Rp,fragmentShader:zp,uniforms:{uCenter:{value:new H},uUpright:{value:1},uVisible:{value:0},uMinScreen:{value:.011},uScale:{value:1},uTime:{value:0}},...e}),this.haloMat=new ha({vertexShader:Bp,fragmentShader:Vp,uniforms:{uCenter:{value:new H},uSize:{value:10},uMinScreen:{value:.05},uIntensity:{value:0}},...e});let t=new ci(this.quad,this.formMat),n=new ci(this.quad,this.haloMat);t.frustumCulled=!1,n.frustumCulled=!1,t.renderOrder=12,n.renderOrder=11;let r=$f.count,i=new Float32Array(r*2*3),a=new Float32Array(r*2*3),o=new Float32Array(r*2),s=new Float32Array(r*2),c=new Float32Array(r*2),l=$f.samples;for(let e=0;e<r;e++){let t=Math.max(0,e-1),n=Math.min(r-1,e+1),u=l[n*3]-l[t*3],d=l[n*3+1]-l[t*3+1],f=l[n*3+2]-l[t*3+2],p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let t=0;t<2;t++){let n=e*2+t;i[n*3]=l[e*3],i[n*3+1]=l[e*3+1],i[n*3+2]=l[e*3+2],a[n*3]=u,a[n*3+1]=d,a[n*3+2]=f,o[n]=$f.uAt(e),s[n]=t===0?-1:1,c[n]=Y(8,90,l[e*3+1]-Q(l[e*3],l[e*3+2]))}}let u=[];for(let e=0;e<r-1;e++){let t=e*2;u.push(t,t+1,t+2,t+1,t+3,t+2)}this.trailGeo=new Rr,this.trailGeo.setAttribute(`position`,new Cr(i,3)),this.trailGeo.setAttribute(`aTangent`,new Cr(a,3)),this.trailGeo.setAttribute(`aU`,new Cr(o,1)),this.trailGeo.setAttribute(`aSide`,new Cr(s,1)),this.trailGeo.setAttribute(`aLift`,new Cr(c,1)),this.trailGeo.setIndex(u),this.trailGeo.computeBoundingSphere(),this.trailMat=new ha({vertexShader:Hp,fragmentShader:Up,uniforms:{uHead:{value:0},uAnchor:{value:0},uTrail:{value:0},uTotal:{value:$f.totalLength},uTime:{value:0}},...e,side:2});let d=new ci(this.trailGeo,this.trailMat);d.frustumCulled=!1,d.renderOrder=10,this.beamGeo.translate(0,.5,0);let[f,p]=Iu(Bu.u,Bu.v);this.landing.set(f,X.y,p),this.beamMat=new ha({vertexShader:Wp,fragmentShader:Gp,uniforms:{uBase:{value:this.landing.clone()},uHeight:{value:1},uIntensity:{value:0}},...e});let m=new ci(this.beamGeo,this.beamMat);m.frustumCulled=!1,m.renderOrder=9,this.object.add(d,m,n,t)}update(e){let t=e.light,n=e.env,r=e.lightFigure,i=r?t.upright:0,a=this.formMat.uniforms;a.uCenter.value.copy(t.position),a.uUpright.value=i,a.uVisible.value=t.visible,a.uTime.value=e.time,a.uScale.value=r?1:.55,a.uMinScreen.value=r?.011:.008,this.formMat.visible=t.visible>.002;let o=this.haloMat.uniforms;o.uCenter.value.copy(t.position),o.uSize.value=6+3*(1-i)+3*n.glow,o.uIntensity.value=t.visible*(.07+.1*n.glow+.2*(1-i)),this.haloMat.visible=t.visible>.002;let s=this.trailMat.uniforms;s.uHead.value=n.lightPath,s.uAnchor.value=+(n.trailAnchor>.5),s.uTrail.value=ou(n.trail),s.uTime.value=e.time,this.trailMat.visible=n.trail>.002&&Math.abs(n.lightPath-s.uAnchor.value)>1e-4;let c=n.ascend,l=this.beamMat.uniforms;l.uHeight.value=Math.max(1,t.position.y-X.y),l.uIntensity.value=n.light*Y(0,.08,c)*(1-Y(.5,.95,c))*.3,this.beamMat.visible=l.uIntensity.value>.002}dispose(){this.quad.dispose(),this.beamGeo.dispose(),this.trailGeo.dispose(),this.formMat.dispose(),this.haloMat.dispose(),this.trailMat.dispose(),this.beamMat.dispose(),this.object.clear()}},qp=16;function Jp(e){return e.kind===`circle`?e.r:Math.hypot(e.halfX,e.halfZ)}function Yp(e,t,n,r){if(e.kind===`circle`){let i=t-e.x,a=n-e.z;return i*i+a*a<(e.r+r)*(e.r+r)}let i=Math.cos(e.yaw),a=Math.sin(e.yaw),o=t-e.x,s=n-e.z,c=o*i-s*a,l=o*a+s*i,u=Math.max(Math.abs(c)-e.halfX,0),d=Math.max(Math.abs(l)-e.halfZ,0);return u*u+d*d<r*r}var Xp=[Nu,Uu,Vu];function Zp(e){let t=new Map;for(let n of e){let e=Jp(n)+1,r=Math.floor((n.x-e)/qp),i=Math.floor((n.x+e)/qp),a=Math.floor((n.z-e)/qp),o=Math.floor((n.z+e)/qp);for(let e=r;e<=i;e++)for(let r=a;r<=o;r++){let i=`${e},${r}`,a=t.get(i);a||t.set(i,a=[]),a.push(n)}}return{groundHeight:(e,t)=>Q(e,t),blocked(e,n,r){let[i,a]=Fu(e,n),o=Lu(i,a);if(o>-r&&o<X.wall+r+.3&&!(i<0&&Math.abs(a-Ru.v)<Ru.halfWidth-r))return!0;if(i<-X.halfU&&i>-X.halfU-X.wall-Ru.length-2){let e=Math.abs(a-Ru.v);if(e>Ru.halfWidth-.1-r&&e<Ru.halfWidth+1.1+r)return!0}let s=Math.floor((e-r)/qp),c=Math.floor((e+r)/qp),l=Math.floor((n-r)/qp),u=Math.floor((n+r)/qp);for(let i=s;i<=c;i++)for(let a=l;a<=u;a++){let o=t.get(`${i},${a}`);if(o){for(let t of o)if(Yp(t,e,n,r))return!0}}return!1},inBounds(e,t){for(let n of Xp)if(Math.hypot(e-n.x,t-n.z)<n.radius)return!0;return!1}}}var Qp=26*iu,$p=22.2,em=6*iu;function tm(e,t,n){let r=-Math.cos(e)*Math.sin(t),i=Math.sin(e)*Math.cos(Qp)-Math.cos(e)*Math.cos(t)*Math.sin(Qp),a=Math.sin(e)*Math.sin(Qp)+Math.cos(e)*Math.cos(t)*Math.cos(Qp);return n.set(r,a,-i).normalize()}function nm(e,t,n){tm(em,(e-$p)*15*iu,t),tm(0,(e-36)*15*iu,n)}function rm(e){return Y(-17,-4,Math.asin(Math.max(-1,Math.min(1,e)))/iu)}var im=`
varying vec3 vDir;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vDir = wp.xyz - cameraPosition;
  gl_Position = projectionMatrix * viewMatrix * wp;
  gl_Position.z = gl_Position.w * 0.99999; // at the far plane
}
`,am=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uMoonDir;
uniform vec3 uSunDir;
uniform float uDawn;
uniform float uMoonUp;
uniform float uMilky;
uniform mat3 uCelestial;
varying vec3 vDir;
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float n3(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
void main() {
  vec3 d = normalize(vDir);
  float up = d.y;
  float h = clamp(up, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(h, 0.45));
  // Below the horizon (rarely seen): a little darker.
  col *= mix(0.55, 1.0, smoothstep(-0.25, 0.0, up));
  // Moon glow.
  float mc = max(dot(d, uMoonDir), 0.0);
  col += vec3(0.32, 0.38, 0.5) * (pow(mc, 900.0) * 0.6 + pow(mc, 60.0) * 0.06 + pow(mc, 8.0) * 0.012) * uMoonUp;
  // Dawn: pale light along the eastern horizon.
  float sc = max(dot(normalize(vec3(d.x, 0.0, d.z) + 1e-4), normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + 1e-4)), 0.0);
  float band = exp(-max(up, 0.0) * 7.0) * (0.35 + 0.65 * pow(sc, 3.0));
  col += uDawn * band * mix(vec3(0.16, 0.18, 0.28), vec3(0.42, 0.3, 0.22), pow(sc, 6.0) * exp(-max(up, 0.0) * 14.0));
  // The Milky Way: a faint, mottled band across the sky.
  vec3 c = uCelestial * d;
  float lat = c.y;
  float milky = exp(-lat * lat * 18.0) * (0.45 + 0.55 * n3(c * 7.0)) * (0.6 + 0.4 * n3(c * 19.0));
  milky *= smoothstep(-0.02, 0.25, up);
  col += vec3(0.05, 0.055, 0.075) * milky * uMilky;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,om=`
attribute float aMag;
attribute vec3 aColor;
uniform float uPixel;
uniform float uVisibility;
uniform float uTime;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 dir = normalize(wp.xyz - cameraPosition);
  // Compressed magnitude scale: faint stars stay visible, bright ones do not bloom.
  float I = 1.5 * pow(10.0, -0.22 * aMag);
  float twinkle = 0.85 + 0.15 * sin(uTime * (2.0 + fract(aMag * 13.7) * 3.0) + position.x * 0.01);
  float extinction = smoothstep(-0.02, 0.22, dir.y);
  vAlpha = clamp(I, 0.0, 1.8) * uVisibility * twinkle * extinction;
  vColor = aColor;
  gl_PointSize = clamp(1.3 + 2.0 * sqrt(I), 1.2, 4.6) * uPixel;
  gl_Position = projectionMatrix * viewMatrix * wp;
  gl_Position.z = gl_Position.w * 0.99999;
}
`,sm=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r = dot(p, p);
  float a = exp(-r * 3.2) * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,cm=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 2.0;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(modelMatrix[0].xyz);
  mv.xy += position.xy * s;
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.99998;
}
`,lm=`
uniform vec3 uLightView;
uniform float uAlpha;
varying vec2 vUv;
float hh(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5); }
float nn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
void main() {
  float r = length(vUv);
  // Disc occupies r < 0.5 of the quad; the rest is a soft halo.
  float halo = exp(-max(r - 0.45, 0.0) * 9.0) * 0.18;
  vec3 col = vec3(0.0);
  float a = halo;
  if (r < 0.5) {
    vec2 q = vUv / 0.5;
    vec3 n = vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))));
    float lit = smoothstep(-0.05, 0.12, dot(n, normalize(uLightView)));
    float maria = 0.72 + 0.28 * smoothstep(0.35, 0.75, nn(q * 3.0 + 4.0) * 0.7 + nn(q * 7.0) * 0.3);
    col = vec3(1.0, 0.97, 0.9) * lit * maria * 1.6 + vec3(0.02, 0.025, 0.04);
    a = 1.0;
  }
  gl_FragColor = vec4(col * a * uAlpha + vec3(0.55, 0.62, 0.8) * halo * uAlpha, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,um=class{constructor(e){J(this,`object`,new Fn),J(this,`moonLight`,void 0),J(this,`hemi`,void 0),J(this,`exposure`,1.6),J(this,`moonUp`,0),J(this,`scene`,void 0),J(this,`fog`,void 0),J(this,`skyMat`,void 0),J(this,`skyGeo`,void 0),J(this,`sky`,void 0),J(this,`celestial`,new Fn),J(this,`starMat`,void 0),J(this,`starGeo`,void 0),J(this,`moonMat`,void 0),J(this,`moonGeo`,new aa(1,1)),J(this,`moon`,void 0),J(this,`moonDir`,new H),J(this,`sunDir`,new H),J(this,`tmp`,new H),J(this,`celMat`,new U),J(this,`target`,new Pn),J(this,`U`,void 0),J(this,`shadows`,void 0),J(this,`radius`,void 0),J(this,`scratch`,new G),J(this,`tilt`,new U().set(1,0,0,0,Math.cos(62*iu),-Math.sin(62*iu),0,Math.sin(62*iu),Math.cos(62*iu))),this.object.name=`atmosphere`,this.scene=e.scene,this.U=e.uniforms,this.shadows=e.quality.shadows,this.radius=e.quality.drawDistance*.9,this.fog=new Un(659230,8e-5),this.scene.fog=this.fog,this.scene.background=new G(131850),this.skyGeo=new oa(1,48,24),this.skyMat=new ha({vertexShader:im,fragmentShader:am,uniforms:{uZenith:{value:new G},uHorizon:{value:new G},uMoonDir:{value:new H(0,1,0)},uSunDir:{value:new H(1,-.5,0)},uDawn:{value:0},uMoonUp:{value:1},uMilky:{value:1},uCelestial:{value:new U}},side:1,depthWrite:!1,fog:!1}),this.sky=new ci(this.skyGeo,this.skyMat),this.sky.scale.setScalar(this.radius),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.object.add(this.sky);let t=e.quality.starCount,n=du(2026),r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t*3),o=this.radius*.96,s=new G,c=10**3.6-1;for(let e=0;e<t;e++){let t=n()*2-1,l=n()*Math.PI*2,u=Math.sqrt(1-t*t);r[e*3]=Math.cos(l)*u*o,r[e*3+1]=t*o,r[e*3+2]=Math.sin(l)*u*o,i[e]=-1.2+Math.log10(1+n()*c)/.5;let d=n();d<.18?s.setRGB(.72,.8,1):d<.75?s.setRGB(1,1,1):d<.92?s.setRGB(1,.92,.78):s.setRGB(1,.78,.6),a[e*3]=s.r,a[e*3+1]=s.g,a[e*3+2]=s.b}this.starGeo=new Rr,this.starGeo.setAttribute(`position`,new Cr(r,3)),this.starGeo.setAttribute(`aMag`,new Cr(i,1)),this.starGeo.setAttribute(`aColor`,new Cr(a,3)),this.starMat=new ha({vertexShader:om,fragmentShader:sm,uniforms:{uPixel:{value:1},uVisibility:{value:1},uTime:this.U.uTime},transparent:!0,depthWrite:!1,blending:2,fog:!1});let l=new Ui(this.starGeo,this.starMat);if(l.frustumCulled=!1,l.renderOrder=-9,this.celestial.add(l),this.object.add(this.celestial),this.moonMat=new ha({vertexShader:cm,fragmentShader:lm,uniforms:{uLightView:{value:new H(1,0,0)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:2,fog:!1}),this.moon=new ci(this.moonGeo,this.moonMat),this.moon.frustumCulled=!1,this.moon.renderOrder=-8,this.object.add(this.moon),this.moonLight=new to(11189247,1),this.moonLight.target=this.target,this.moonLight.castShadow=this.shadows,this.shadows){let t=this.moonLight.shadow;t.mapSize.set(e.quality.shadowMapSize,e.quality.shadowMapSize),t.camera.left=-170,t.camera.right=170,t.camera.top=170,t.camera.bottom=-170,t.camera.near=10,t.camera.far=1600,t.bias=-6e-4,t.normalBias=.6}this.hemi=new Ba(4874137,1380879,.2),this.object.add(this.moonLight,this.target,this.hemi)}update(e){let t=e.env,n=e.camera,r=this.U;nm(t.hour,this.moonDir,this.sunDir),r.uMoonDir.value.copy(this.moonDir),r.uSunDir.value.copy(this.sunDir);let i=rm(this.sunDir.y);r.uDawn.value=i,r.uNight.value=1-i*.7;let a=this.moonDir.y;this.moonUp=Y(-.05,.25,a);let o=ou(t.moonlight)*this.moonUp,s=r.uSkyZenith.value,c=r.uSkyHorizon.value;s.setRGB(.0035,.005,.014).lerp(this.tmpColor(.012,.02,.05),o*.8),c.setRGB(.012,.016,.03).lerp(this.tmpColor(.03,.042,.075),o*.85),s.lerp(this.tmpColor(.05,.085,.19),i*.75),c.lerp(this.tmpColor(.16,.17,.24),i*.8),this.skyMat.uniforms.uZenith.value.copy(s),this.skyMat.uniforms.uHorizon.value.copy(c),this.skyMat.uniforms.uMoonDir.value.copy(this.moonDir),this.skyMat.uniforms.uSunDir.value.copy(this.sunDir),this.skyMat.uniforms.uDawn.value=i,this.skyMat.uniforms.uMoonUp.value=this.moonUp*ou(t.moonlight),this.celestial.position.copy(n.position),this.celestial.rotation.set(-(Math.PI/2-Qp),-t.hour*15*iu,0,`XYZ`),this.celestial.updateMatrixWorld(),this.celMat.setFromMatrix4(this.celestial.matrixWorld).invert(),this.skyMat.uniforms.uCelestial.value.copy(this.celMat).premultiply(this.tilt);let l=(.65+.55*ou(t.stars))*(1-.45*o)*(1-i*.95);this.starMat.uniforms.uVisibility.value=l,this.starMat.uniforms.uPixel.value=Math.min(2,window.devicePixelRatio||1),this.skyMat.uniforms.uMilky.value=(.6+.9*ou(t.stars))*(1-.6*o)*(1-i),this.sky.position.copy(n.position);let u=this.radius*.9;this.moon.position.copy(n.position).addScaledVector(this.moonDir,u),this.moon.scale.setScalar(u*.019*2),this.moon.updateMatrixWorld();let d=n.matrixWorldInverse,f=this.tmp.copy(this.sunDir).transformDirection(d);this.moonMat.uniforms.uLightView.value.copy(f),this.moonMat.uniforms.uAlpha.value=Y(-.03,.02,a)*(1-i*.6);let p=Q(n.position.x,n.position.z);this.target.position.set(n.position.x,p,n.position.z),this.target.updateMatrixWorld();let m=a>.02?this.moonDir:this.tmp.set(.2,1,.3).normalize();this.moonLight.position.copy(this.target.position).addScaledVector(m,700),this.moonLight.color.setRGB(.6,.7,1).lerp(this.tmpColor(.85,.8,.85),i),this.moonLight.intensity=.66*o+.3*i,this.hemi.intensity=.25+.85*i+.08*o,this.hemi.color.setRGB(.32,.4,.66).lerp(this.tmpColor(.55,.6,.78),i);let h=r.uFogColor.value;h.copy(c).multiplyScalar(1.1),this.fog.color.copy(h);let g=Math.max(0,n.position.y-p);this.fog.density=(13e-5+1e-4*ou(t.haze))*(1-.55*Y(100,1100,g)),this.exposure=1.3+.2*(1-o)-.2*i}tmpColor(e,t,n){return this.scratch.setRGB(e,t,n)}dispose(){this.scene.fog=null,this.skyGeo.dispose(),this.skyMat.dispose(),this.starGeo.dispose(),this.starMat.dispose(),this.moonGeo.dispose(),this.moonMat.dispose(),this.moonLight.dispose(),this.hemi.dispose(),this.object.clear()}};function dm(e,t){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(1,n,e.sampleRate),i=r.getChannelData(0),a=0;for(let e=0;e<n;e++)a=(a+.02*(Math.random()*2-1))/1.02,i[e]=a*3.2;return r}function fm(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**n}return i}var pm=class{constructor(){J(this,`state`,`locked`),J(this,`ctx`,null),J(this,`master`,null),J(this,`bus`,null),J(this,`reverb`,null),J(this,`brown`,null),J(this,`enabled`,!0),J(this,`volume`,.5),J(this,`suspendedByApp`,!1),J(this,`cricketTimer`,1.5),J(this,`owlTimer`,12),J(this,`gustTimer`,9),J(this,`birdTimer`,3),J(this,`prevVisible`,0),J(this,`prevPath`,0),J(this,`prevAscend`,0),J(this,`swellCooldown`,0)}async unlock(){try{if(!this.ctx){let e=window,t=e.AudioContext??e.webkitAudioContext;if(!t)return this.state=`unavailable`,!1;this.ctx=new t({latencyHint:`playback`}),this.build(),this.ctx.onstatechange=()=>this.syncState()}return this.ctx.state!==`running`&&!this.suspendedByApp&&await this.ctx.resume(),this.syncState(),this.ctx.state===`running`}catch{return this.syncState(),!1}}syncState(){let e=this.ctx;e&&(this.state=e.state===`running`?`running`:this.suspendedByApp?`suspended`:`locked`)}setEnabled(e){this.enabled=e,this.applyMaster()}setVolume(e){this.volume=ou(e),this.applyMaster()}applyMaster(){if(this.ctx&&this.master)try{this.master.gain.setTargetAtTime(this.enabled?this.volume:0,this.ctx.currentTime,.2)}catch{}}suspend(){this.suspendedByApp=!0;try{this.ctx?.suspend()}catch{}this.syncState()}resume(){this.suspendedByApp=!1;try{this.ctx&&this.ctx.state!==`running`&&this.ctx.resume()}catch{}this.syncState()}build(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0;let t=e.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=3,this.bus=e.createGain(),this.bus.gain.value=.9,this.bus.connect(t),t.connect(this.master),this.master.connect(e.destination);let n=e.createConvolver();n.buffer=fm(e,3.2,2.6),this.reverb=e.createGain(),this.reverb.gain.value=.35,this.reverb.connect(n),n.connect(this.bus),this.brown=dm(e,4),this.applyMaster()}update(e,t){if(!this.ctx||this.state!==`running`||!this.enabled){this.prevVisible=e.light.visible,this.prevPath=e.env.lightPath,this.prevAscend=e.env.ascend;return}let n=e.dt,r=e.camera.position,i=Q(r.x,r.z),a=1-Y(40,160,r.y-i),o=1-Y(1500,3500,Math.hypot(r.x-Pu.x,r.z-Pu.z)),s=1-Y(1200,3e3,Math.hypot(r.x,r.z)),c=1-Y(600,1500,Math.hypot(r.x-Hu.x,r.z-Hu.z)),l=1-t,u=a*l*(.25+.5*o+.2*s+.15*c);this.cricketTimer-=n*u,this.cricketTimer<=0&&(this.cricketTimer=1.2+Math.random()*3.5,this.trill(.012+.012*Math.random())),this.owlTimer-=n*o*l,this.owlTimer<=0&&(this.owlTimer=24+Math.random()*30,this.owl(.03*(.6+.4*a))),this.gustTimer-=n,this.gustTimer<=0&&(this.gustTimer=16+Math.random()*18,this.gust(.018+.012*(1-a))),this.birdTimer-=n*Y(.25,.7,t)*a,this.birdTimer<=0&&(this.birdTimer=2.5+Math.random()*5,this.chirp(.016)),this.swellCooldown=Math.max(0,this.swellCooldown-n);let d=e.light,f=1-Y(300,4e3,d.position.distanceTo(r)),p=this.prevVisible<.5&&d.visible>=.5,m=this.prevPath<5e-4&&e.env.lightPath>=5e-4&&e.env.trailAnchor<.5,h=this.prevPath<.999&&e.env.lightPath>=.999&&e.env.trailAnchor<.5,g=this.prevAscend<.02&&e.env.ascend>=.02;this.swellCooldown<=0&&f>.05&&(p?this.swell(110,110,7,.05*f):m||g?this.swell(98,147,8,.05*f):h&&this.swell(147,110,8,.045*f),(p||m||g||h)&&(this.swellCooldown=4)),this.prevVisible=d.visible,this.prevPath=e.env.lightPath,this.prevAscend=e.env.ascend}trill(e){let t=this.ctx;if(!t||!this.bus)return;let n=t.currentTime,r=4100+Math.random()*900,i=4+Math.floor(Math.random()*6),a=t.createOscillator();a.type=`sine`,a.frequency.value=r;let o=t.createGain();o.gain.value=0;for(let t=0;t<i;t++){let r=n+t*.055;o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(e,r+.012),o.gain.linearRampToValueAtTime(0,r+.04)}let s=t.createStereoPanner();s.pan.value=Math.random()*1.6-.8,a.connect(o),o.connect(s),s.connect(this.bus),a.start(n),a.stop(n+i*.055+.1)}owl(e){let t=this.ctx;if(!t||!this.bus||!this.reverb)return;let n=t.currentTime,r=t.createStereoPanner();r.pan.value=Math.random()*1.4-.7,r.connect(this.bus),r.connect(this.reverb);for(let[i,a,o]of[[0,395,.32],[.55,380,.6]]){let s=t.createOscillator();s.type=`sine`,s.frequency.setValueAtTime(a,n+i),s.frequency.exponentialRampToValueAtTime(a*.93,n+i+o);let c=t.createGain();c.gain.setValueAtTime(1e-4,n+i),c.gain.linearRampToValueAtTime(e,n+i+.07),c.gain.exponentialRampToValueAtTime(1e-4,n+i+o),s.connect(c),c.connect(r),s.start(n+i),s.stop(n+i+o+.05)}}gust(e){let t=this.ctx;if(!t||!this.bus||!this.brown)return;let n=t.currentTime,r=3.5+Math.random()*3,i=t.createBufferSource();i.buffer=this.brown,i.loop=!0;let a=t.createBiquadFilter();a.type=`bandpass`,a.frequency.setValueAtTime(260+Math.random()*120,n),a.frequency.linearRampToValueAtTime(420+Math.random()*160,n+r*.5),a.frequency.linearRampToValueAtTime(240,n+r),a.Q.value=.7;let o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(e,n+r*.45),o.gain.linearRampToValueAtTime(1e-4,n+r),i.connect(a),a.connect(o),o.connect(this.bus),i.start(n,Math.random()*3),i.stop(n+r+.1)}chirp(e){let t=this.ctx;if(!t||!this.bus)return;let n=t.currentTime,r=1+Math.floor(Math.random()*3),i=t.createStereoPanner();i.pan.value=Math.random()*1.6-.8,i.connect(this.bus);for(let a=0;a<r;a++){let r=n+a*(.12+Math.random()*.08),o=t.createOscillator();o.type=`sine`;let s=2600+Math.random()*1600;o.frequency.setValueAtTime(s,r),o.frequency.exponentialRampToValueAtTime(s*(1.2+Math.random()*.4),r+.07);let c=t.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.linearRampToValueAtTime(e,r+.015),c.gain.exponentialRampToValueAtTime(1e-4,r+.09),o.connect(c),c.connect(i),o.start(r),o.stop(r+.12)}}swell(e,t,n,r){let i=this.ctx;if(!i||!this.bus||!this.reverb)return;let a=i.currentTime,o=i.createGain();o.gain.setValueAtTime(1e-4,a),o.gain.linearRampToValueAtTime(r,a+n*.4),o.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(this.bus),o.connect(this.reverb);for(let[r,s]of[[1,1],[2,.25]]){let c=i.createOscillator();c.type=`sine`,c.frequency.setValueAtTime(e*r,a),c.frequency.exponentialRampToValueAtTime(t*r,a+n);let l=i.createGain();l.gain.value=s,c.connect(l),l.connect(o),c.start(a),c.stop(a+n+.1)}}dispose(){try{this.ctx?.close()}catch{}this.ctx=null,this.state=`unavailable`}},mm=1.7,hm=.35,gm=4.2,_m=8.5,vm=.6,ym=.25,bm=280,xm=10,Sm={KeyW:[0,1],ArrowUp:[0,1],KeyS:[0,-1],ArrowDown:[0,-1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};function Cm(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e.isContentEditable}var wm=class{constructor(e){J(this,`enabled`,!1),J(this,`eye`,new H),J(this,`onTap`,null),J(this,`onInspect`,null),J(this,`onLockChange`,null),J(this,`onBlocked`,null),J(this,`camera`,void 0),J(this,`canvas`,void 0),J(this,`walk`,void 0),J(this,`getSettings`,void 0),J(this,`listeners`,new nu),J(this,`x`,0),J(this,`z`,0),J(this,`feet`,0),J(this,`feetSmooth`,0),J(this,`yaw`,0),J(this,`pitch`,0),J(this,`vx`,0),J(this,`vz`,0),J(this,`bobPhase`,0),J(this,`blockedTimer`,0),J(this,`keys`,new Set),J(this,`run`,!1),J(this,`joyX`,0),J(this,`joyY`,0),J(this,`joyPointer`,-1),J(this,`lookPointers`,new Map),J(this,`joystick`,void 0),J(this,`knob`,void 0),J(this,`locked`,!1),J(this,`euler`,new _n(0,0,0,`YXZ`)),this.camera=e.camera,this.canvas=e.canvas,this.walk=e.walk,this.getSettings=e.getSettings,this.joystick=document.createElement(`div`),this.joystick.className=`nj-joystick`,this.joystick.setAttribute(`aria-hidden`,`true`),this.knob=document.createElement(`div`),this.knob.className=`nj-joystick-knob`,this.joystick.appendChild(this.knob),e.touchRoot.appendChild(this.joystick);let t=this.listeners;t.add(window,`keydown`,e=>this.onKey(e,!0)),t.add(window,`keyup`,e=>this.onKey(e,!1)),t.add(window,`blur`,()=>this.clearInput()),t.add(document,`pointerlockchange`,()=>this.onPointerLockChange()),t.add(document,`pointerlockerror`,()=>this.onPointerLockChange()),t.add(document,`mousemove`,e=>this.onMouseMove(e)),t.add(this.canvas,`pointerdown`,e=>this.onPointerDown(e)),t.add(window,`pointermove`,e=>this.onPointerMove(e)),t.add(window,`pointerup`,e=>this.onPointerUp(e)),t.add(window,`pointercancel`,e=>this.onPointerUp(e,!0)),t.add(this.canvas,`contextmenu`,e=>e.preventDefault()),t.add(this.canvas,`gesturestart`,e=>e.preventDefault()),t.add(this.joystick,`pointerdown`,e=>this.onJoyDown(e)),t.add(this.joystick,`pointermove`,e=>this.onJoyMove(e)),t.add(this.joystick,`pointerup`,e=>this.onJoyUp(e)),t.add(this.joystick,`pointercancel`,e=>this.onJoyUp(e))}get lockSupported(){try{return`pointerLockElement`in document&&typeof this.canvas.requestPointerLock==`function`&&window.matchMedia(`(pointer: fine)`).matches}catch{return!1}}get isLocked(){return this.locked}requestLock(){if(this.lockSupported&&!this.locked)try{let e=this.canvas.requestPointerLock();e&&typeof e.catch==`function`&&e.catch(()=>this.onPointerLockChange())}catch{}}exitLock(){if(this.locked)try{document.exitPointerLock()}catch{}}spawn(e){this.vx=this.vz=0,this.pitch=e.pitch??0;let t=e.x,n=e.z;if(this.walk.blocked(t,n,hm))search:for(let e=1;e<=30;e+=1)for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=t+Math.cos(i)*e,o=n+Math.sin(i)*e;if(!this.walk.blocked(a,o,hm)){t=a,n=o;break search}}this.x=t,this.z=n,this.feet=this.feetSmooth=this.walk.groundHeight(t,n),this.yaw=uu(e.yaw),this.applyCamera(0,!1)}placeAt(e,t,n){let r=this.walk.groundHeight(e.x,e.z);return!this.walk.inBounds(e.x,e.z)||Math.abs(e.y-mm-r)>5||this.walk.blocked(e.x,e.z,hm)?!1:(this.x=e.x,this.z=e.z,this.feet=this.feetSmooth=r,this.yaw=uu(t),this.pitch=au(n,-1.2,1.2),this.vx=this.vz=0,this.applyCamera(0,!1),!0)}setTouchControlsVisible(e){this.joystick.classList.toggle(`is-visible`,e),e||this.resetJoystick()}update(e){let t=e.dt,n=0,r=0;if(this.enabled){for(let e of this.keys){let t=Sm[e];t&&(n+=t[0],r+=t[1])}n+=this.joyX,r+=this.joyY}let i=Math.hypot(n,r);i>1&&(n/=i,r/=i);let a=Math.hypot(this.joyX,this.joyY),o=this.run||a>.9,s=o?_m:gm,c=-Math.sin(this.yaw),l=-Math.cos(this.yaw),u=Math.cos(this.yaw),d=-Math.sin(this.yaw);this.vx=lu(this.vx,(c*r+u*n)*s,10,t),this.vz=lu(this.vz,(l*r+d*n)*s,10,t);let f=this.vx*t,p=this.vz*t,m=Math.hypot(f,p);if(m>1e-5){let e=Math.ceil(m/ym);f/=e,p/=e;for(let t=0;t<e;t++)this.move(f,p)}this.feet=this.walk.groundHeight(this.x,this.z),this.blockedTimer=Math.max(0,this.blockedTimer-t);let h=Math.hypot(this.vx,this.vz)>.5;h&&(this.bobPhase+=t*(o?11:8)),this.applyCamera(t,h&&!e.reducedMotion)}move(e,t){this.tryMove(this.x+e,this.z+t)||Math.abs(e)>1e-6&&this.tryMove(this.x+e,this.z)||Math.abs(t)>1e-6&&this.tryMove(this.x,this.z+t)}tryMove(e,t){let n=this.walk;if(!n.inBounds(e,t))return this.blocked(`edge`),!1;if(n.blocked(e,t,hm))return!1;let r=n.groundHeight(e,t),i=Math.hypot(e-this.x,t-this.z);return r-this.feet>Math.max(vm,i*1.05)?!1:(this.x=e,this.z=t,this.feet=r,!0)}blocked(e){this.blockedTimer>0||(this.blockedTimer=.5,this.onBlocked?.(e))}applyCamera(e,t){this.feetSmooth=e>0?lu(this.feetSmooth,this.feet,14,e):this.feet,Math.abs(this.feetSmooth-this.feet)>2&&(this.feetSmooth=this.feet);let n=t?Math.sin(this.bobPhase)*.035:0;this.eye.set(this.x,this.feetSmooth+mm+n,this.z),this.camera.position.copy(this.eye),this.euler.set(this.pitch,this.yaw,0,`YXZ`),this.camera.quaternion.setFromEuler(this.euler),Math.abs(this.camera.fov-70)>.05&&(this.camera.fov=e>0?lu(this.camera.fov,70,3,e):70,this.camera.updateProjectionMatrix())}look(e,t,n){let r=this.getSettings(),i=n*r.lookSensitivity;this.yaw=uu(this.yaw-e*i),this.pitch=au(this.pitch-t*i*(r.invertY?-1:1),-1.45,1.45)}onKey(e,t){if(!Cm(e.target)){if((e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(this.run=t),Sm[e.code]){if(t){if(!this.enabled)return;this.keys.add(e.code),e.code.startsWith(`Arrow`)&&e.preventDefault()}else this.keys.delete(e.code)}else t&&e.code===`KeyE`&&this.enabled&&!e.repeat&&this.onInspect?.()}}clearInput(){this.keys.clear(),this.run=!1,this.resetJoystick(),this.lookPointers.clear()}onPointerLockChange(){let e=document.pointerLockElement===this.canvas;e!==this.locked&&(this.locked=e,e||this.clearInput(),this.onLockChange?.(e))}onMouseMove(e){this.locked&&this.enabled&&(Math.abs(e.movementX)>300||Math.abs(e.movementY)>300||this.look(e.movementX,e.movementY,.0022))}onPointerDown(e){if(e.button===0||e.pointerType!==`mouse`){if(this.locked)this.enabled&&this.onInspect?.();else{this.lookPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,t:performance.now(),type:e.pointerType});try{this.canvas.setPointerCapture(e.pointerId)}catch{}}}}onPointerMove(e){let t=this.lookPointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,this.enabled&&(t.type===`mouse`&&this.lockSupported||this.look(n,r,t.type===`touch`?.0055:.0035))}onPointerUp(e,t=!1){let n=this.lookPointers.get(e.pointerId);if(!n)return;this.lookPointers.delete(e.pointerId);try{this.canvas.releasePointerCapture(e.pointerId)}catch{}if(t)return;let r=Math.hypot(e.clientX-n.startX,e.clientY-n.startY),i=performance.now()-n.t<bm;if(r>xm)return;if(n.type===`mouse`&&this.enabled&&this.lockSupported){this.requestLock();return}if(!i&&n.type!==`mouse`)return;let a=this.canvas.getBoundingClientRect(),o=(e.clientX-a.left)/a.width*2-1,s=-((e.clientY-a.top)/a.height)*2+1;this.onTap?.(o,s)}onJoyDown(e){if(this.joyPointer===-1){this.joyPointer=e.pointerId,this.joystick.classList.add(`is-active`);try{this.joystick.setPointerCapture(e.pointerId)}catch{}this.onJoyMove(e),e.preventDefault()}}onJoyMove(e){if(e.pointerId!==this.joyPointer)return;let t=this.joystick.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=t.width*.38,a=e.clientX-n,o=e.clientY-r,s=Math.hypot(a,o);s>i&&(a=a/s*i,o=o/s*i),this.knob.style.transform=`translate(${a.toFixed(1)}px, ${o.toFixed(1)}px)`;let c=a/i,l=-o/i,u=Math.hypot(c,l),d=u<.12?0:(u-.12)/.88/(u||1);this.joyX=c*d,this.joyY=l*d}onJoyUp(e){e.pointerId===this.joyPointer&&this.resetJoystick()}resetJoystick(){this.joyPointer=-1,this.joyX=0,this.joyY=0,this.knob.style.transform=``,this.joystick.classList.remove(`is-active`)}dispose(){this.exitLock(),this.listeners.removeAll(),this.joystick.remove()}};function Tm(e,t){let n=Math.hypot(e,t);if(n<46)return`sanctuary`;if(n<1500)return`makkah`;if(Math.hypot(e-Pu.x,t-Pu.z)<2200){let[n,r]=Fu(e,t);return Lu(n,r)<7?`aqsa`:n>300?`olives`:`jerusalem`}return Math.hypot(e-Hu.x,t-Hu.z),`desert`}var Em=24,Dm=`
attribute float aAlpha;
attribute float aScale;
uniform float uTime;
uniform float uPulse;
varying vec2 vUv;
varying float vAlpha;
void main() {
  vec3 center = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vec4 mv = viewMatrix * vec4(center, 1.0);
  float dist = max(-mv.z, 0.1);
  float pulse = 1.0 + uPulse * 0.08 * sin(uTime * 2.2 + center.x * 0.1);
  float size = dist * 0.03 * aScale * pulse;
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  vAlpha = aAlpha;
}
`,Om=`
varying vec2 vUv;
varying float vAlpha;
void main() {
  float r = length(vUv) * 2.0;
  float ring = smoothstep(0.52, 0.58, r) * (1.0 - smoothstep(0.66, 0.72, r));
  float outline = smoothstep(0.46, 0.52, r) * (1.0 - smoothstep(0.72, 0.8, r));
  float dot2 = 1.0 - smoothstep(0.12, 0.17, r);
  float glow = exp(-r * 4.0) * 0.22;
  vec3 warm = vec3(1.0, 0.9, 0.66);
  float a = max(max(ring, dot2), glow);
  vec3 col = mix(vec3(0.02, 0.03, 0.06), warm, clamp((ring + dot2 + glow) / max(a, 1e-3), 0.0, 1.0));
  float alpha = max(a, outline * 0.45) * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col, alpha);
}
`,km=class{constructor(e){J(this,`object`,new Fn),J(this,`camera`,void 0),J(this,`items`,[]),J(this,`raycaster`,new bo),J(this,`ndc`,new V),J(this,`hits`,[]),J(this,`markers`,void 0),J(this,`markerMat`,void 0),J(this,`markerGeo`,void 0),J(this,`alpha`,void 0),J(this,`scale`,void 0),J(this,`anchor`,new H),J(this,`m4`,new sn),J(this,`fades`,new Float32Array(64)),J(this,`result`,{id:`kaaba`,distance:0}),J(this,`hitPoint`,new H),this.object.name=`interactions`,this.camera=e.camera,this.markerGeo=new aa(1,1),this.alpha=new fi(new Float32Array(Em),1),this.scale=new fi(new Float32Array(Em).fill(1),1),this.alpha.setUsage($e),this.scale.setUsage($e),this.markerGeo.setAttribute(`aAlpha`,this.alpha),this.markerGeo.setAttribute(`aScale`,this.scale),this.markerMat=new ha({vertexShader:Dm,fragmentShader:Om,uniforms:{uTime:{value:0},uPulse:{value:1}},transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:1}),this.markers=new bi(this.markerGeo,this.markerMat,Em),this.markers.instanceMatrix.setUsage($e),this.markers.frustumCulled=!1,this.markers.renderOrder=20,this.markers.count=0,this.object.add(this.markers)}register(e){this.items.push(...e)}focusCenter(e){return this.cast(0,0,e,!1)}pickAt(e,t,n){return this.cast(e,t,n,!0)?.id??null}cast(e,t,n,r){this.ndc.set(e,t),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera);let i=this.raycaster.ray,a=null,o=1/0;for(let e of this.items){if(!e.targets.length||!e.isAvailable(n))continue;this.raycaster.far=e.maxDistance,this.hits.length=0,this.raycaster.intersectObjects(e.targets,!1,this.hits);let t=this.hits[0];t&&t.distance<o&&(o=t.distance,a=e.id)}this.raycaster.far=1/0;let s=a?o:6e3,c=this.groundHit(s);if(a&&c<o-1&&(a=null,o=1/0),!a&&c<s)(r||c<140)&&(this.hitPoint.copy(i.origin).addScaledVector(i.direction,c),a=Tm(this.hitPoint.x,this.hitPoint.z),o=c);else if(!a&&i.direction.y>.12){let e=this.camera.position;a=Math.hypot(e.x-Pu.x,e.z-Pu.z)<3e3&&n.env.ascend>.04&&n.env.ascend<.999?`ascension`:`night-sky`,o=0}return a?(this.result.id=a,this.result.distance=o,this.result):null}groundHit(e){let t=this.raycaster.ray.origin,n=this.raycaster.ray.direction,r=.5,i=0;for(;r<e;){let e=t.x+n.x*r;if(t.y+n.y*r<Q(e,t.z+n.z*r)){let e=i,a=r;for(let r=0;r<6;r++){let r=(e+a)/2;t.y+n.y*r<Q(t.x+n.x*r,t.z+n.z*r)?a=r:e=r}return a}i=r,r+=Math.min(25,.6+r*.025)}return e}update(e,t,n){this.markerMat.uniforms.uTime.value=e.time,this.markerMat.uniforms.uPulse.value=+!e.reducedMotion;let r=e.camera.position,i=0;for(let a=0;a<this.items.length&&i<Em;a++){let o=this.items[a],s=0,c=!1;if(t&&o.anchor&&o.isAvailable(e)&&o.anchor(this.anchor,e)){let e=this.anchor.distanceTo(r),t=Math.min(1,Math.max(0,(e-4)/6)),a=1-Math.min(1,Math.max(0,(e-o.maxDistance*.75)/(o.maxDistance*.25))),l=n.includes(o.id);s=t*a*(l?.95:.5),c=s>0,this.scale.setX(i,l?1.15:.85)}let l=this.fades[a]+(s-this.fades[a])*Math.min(1,e.dt*4);this.fades[a]=e.dt>0?l:s,!(!c||this.fades[a]<.01)&&(this.m4.makeTranslation(this.anchor.x,this.anchor.y,this.anchor.z),this.markers.setMatrixAt(i,this.m4),this.alpha.setX(i,this.fades[a]),i++)}this.markers.count=i,this.markers.instanceMatrix.needsUpdate=!0,this.alpha.needsUpdate=!0,this.scale.needsUpdate=!0}dispose(){this.markerGeo.dispose(),this.markerMat.dispose(),this.object.clear()}},Am=e=>Md(`17:1`,Vd[e].from,Vd[e].to),jm={kaaba:{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[],sources:[`history-haram`]},{key:`start`,kind:`hadith`,refs:[],sources:[`bukhari-3887`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},hijr:{refs:[`17:1`],sections:[{key:`report`,kind:`hadith`,refs:[],sources:[`bukhari-3887`,`bukhari-349`]},{key:`history`,kind:`history`,refs:[],sources:[`history-haram`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},zamzam:{refs:[`17:1`],sections:[{key:`report`,kind:`hadith`,refs:[],sources:[`bukhari-349`]},{key:`history`,kind:`history`,refs:[],sources:[`history-haram`]}]},sanctuary:{refs:[`17:1`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Am(2)},{key:`history`,kind:`history`,refs:[],sources:[`history-haram`]},{key:`commentary`,kind:`commentary`,refs:[`17:1`],sources:[`tabari`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},makkah:{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[],sources:[`history-haram`]},{key:`date`,kind:`commentary`,refs:[],sources:[`ibn-ishaq`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},"night-sky":{refs:[`17:1`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Am(1)},{key:`summary`,kind:`summary`,refs:[`17:1`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},light:{refs:[`17:1`],sections:[{key:`symbol`,kind:`reconstruction`,refs:[]},{key:`verse`,kind:`summary`,refs:[`17:1`]},{key:`choice`,kind:`reconstruction`,refs:[]}]},journey:{refs:[`17:1`,`17:60`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Md(`17:1`,0,5)},{key:`awake`,kind:`hadith`,refs:[`17:60`],sources:[`bukhari-3888`]},{key:`views`,kind:`commentary`,refs:[],sources:[`ibn-ishaq`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},desert:{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[]},{key:`caravan`,kind:`commentary`,refs:[],sources:[`ibn-ishaq`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},aqsa:{refs:[`17:1`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Am(3)},{key:`identity`,kind:`commentary`,refs:[`17:1`],sources:[`tabari`,`ibn-kathir`]},{key:`history`,kind:`history`,refs:[],sources:[`history-jerusalem`]},{key:`prayer`,kind:`hadith`,refs:[],sources:[`muslim-162a`,`muslim-172`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},rock:{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[],sources:[`history-jerusalem`]},{key:`tradition`,kind:`history`,refs:[],sources:[`history-jerusalem`,`bukhari-3887`,`muslim-162a`]}]},jerusalem:{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[],sources:[`history-jerusalem`]},{key:`described`,kind:`hadith`,refs:[],sources:[`bukhari-3886`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},olives:{refs:[`17:1`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Am(4)},{key:`tabari`,kind:`commentary`,refs:[`17:1`],sources:[`tabari`]},{key:`ibnKathir`,kind:`commentary`,refs:[`17:1`],sources:[`ibn-kathir`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},"later-buildings":{refs:[`17:1`],sections:[{key:`history`,kind:`history`,refs:[],sources:[`history-jerusalem`]},{key:`shown`,kind:`reconstruction`,refs:[]}]},ascension:{refs:[`17:1`,`53:13`,`53:14`,`53:15`,`53:16`,`53:17`,`53:18`],sections:[{key:`verse`,kind:`quran`,refs:[`17:1`],ar:Am(5)},{key:`miraj`,kind:`hadith`,refs:[],sources:[`bukhari-3887`,`muslim-162a`,`bukhari-349`]},{key:`najm`,kind:`quran`,refs:[`53:18`],ar:Md(`53:18`,0,6)},{key:`connection`,kind:`commentary`,refs:[`53:13`,`53:14`,`53:15`,`53:16`,`53:17`,`53:18`],sources:[`muslim-173`,`muslim-177a`]},{key:`shown`,kind:`reconstruction`,refs:[]}]}};function $(e,t={},n=[]){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.id&&(r.id=t.id),t.role&&r.setAttribute(`role`,t.role),t.type&&r.setAttribute(`type`,t.type),t.title&&(r.title=t.title),t.lang&&(r.lang=t.lang),t.dir&&(r.dir=t.dir),t.href&&r.setAttribute(`href`,t.href),t.target&&r.setAttribute(`target`,t.target),t.rel&&r.setAttribute(`rel`,t.rel),t.hidden&&(r.hidden=!0),t.disabled&&r.setAttribute(`disabled`,``),t.tabindex!==void 0&&(r.tabIndex=t.tabindex),t.aria)for(let[e,n]of Object.entries(t.aria))r.setAttribute(`aria-${e}`,n);if(t.data)for(let[e,n]of Object.entries(t.data))r.dataset[e]=n;if(t.on)for(let[e,n]of Object.entries(t.on))r.addEventListener(e,n);return Mm(r,n),r}function Mm(e,t){for(let n of t)n!=null&&n!==!1&&e.appendChild(typeof n==`string`?document.createTextNode(n):n)}function Nm(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Pm(e,t){e.textContent!==t&&(e.textContent=t)}var Fm=`http://www.w3.org/2000/svg`,Im={book:[`M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5C4.7 20 4 19.3 4 18.5z`,`M20 5.5C20 4.7 19.3 4 18.5 4H13v16h5.5c.8 0 1.5-.7 1.5-1.5z`],list:[`M9 6h11`,`M9 12h11`,`M9 18h11`,`M4.5 6h.01`,`M4.5 12h.01`,`M4.5 18h.01`],help:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z`,`M9.6 9.2a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.6`,`M12 17h.01`],gear:[`M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z`,`M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.5-2-3.4-2.3.9a7.6 7.6 0 0 0-2.6-1.5L14.1 2h-4.2l-.4 2.5A7.6 7.6 0 0 0 6.9 6l-2.3-.9-2 3.4 2 1.5a7.6 7.6 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4.2l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.3.9 2-3.4z`],pause:[`M8 5v14`,`M16 5v14`],play:[`M7 4.5v15l12-7.5z`],prev:[`M15 6l-6 6 6 6`],next:[`M9 6l6 6-6 6`],replay:[`M4 12a8 8 0 1 0 2.4-5.7`,`M4 4v4h4`],close:[`M6 6l12 12`,`M18 6L6 18`],walk:[`M13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z`,`M9.5 21l2-6 2.5 2.5V21`,`M8 10l3-3 3 2 2.5 3`,`M11 7l-1 5 2.5 2`],eye:[`M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z`,`M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z`],home:[`M3 11l9-7 9 7`,`M5 10v10h14V10`],film:[`M4 5h16v14H4z`,`M4 9h16`,`M4 15h16`,`M8 5v4`,`M16 5v4`,`M8 15v4`,`M16 15v4`],info:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z`,`M12 11v6`,`M12 7.5h.01`],sound:[`M4 9.5h3.5L12 5.5v13l-4.5-4H4z`,`M15.5 9a4 4 0 0 1 0 6`,`M18 6.5a7.5 7.5 0 0 1 0 11`],mute:[`M4 9.5h3.5L12 5.5v13l-4.5-4H4z`,`M16 9.5l5 5`,`M21 9.5l-5 5`],forward:[`M5 12h13`,`M13 6l6 6-6 6`],link:[`M14 5h5v5`,`M19 5l-8 8`,`M17 14v5H5V7h5`]};function Lm(e,t=22){let n=document.createElementNS(Fm,`svg`);n.setAttribute(`viewBox`,`0 0 24 24`),n.setAttribute(`width`,String(t)),n.setAttribute(`height`,String(t)),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.8`),n.setAttribute(`stroke-linecap`,`round`),n.setAttribute(`stroke-linejoin`,`round`),n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`focusable`,`false`);for(let t of Im[e]??[]){let r=document.createElementNS(Fm,`path`);r.setAttribute(`d`,t),e===`play`&&r.setAttribute(`fill`,`currentColor`),n.appendChild(r)}return n}function Rm(e){return String(e).replace(/[0-9]/g,e=>`٠١٢٣٤٥٦٧٨٩`[Number(e)])}function zm(e){return Array.from(e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)).filter(e=>!e.hidden&&e.offsetParent!==null)}var Bm=[`quran`,`summary`,`hadith`,`commentary`,`history`,`reconstruction`],Vm=class{constructor(e,t,n,r){J(this,`root`,void 0),J(this,`layer`,void 0),J(this,`handlers`,void 0),J(this,`settings`,void 0),J(this,`opts`,void 0),J(this,`mode`,`loading`),J(this,`chapterIndex`,0),J(this,`playing`,!1),J(this,`ended`,!1),J(this,`stack`,[]),J(this,`panelWasOpen`,!1),J(this,`toastTimer`,0),J(this,`lastCaption`,null),J(this,`screen`,void 0),J(this,`loadingBar`,null),J(this,`loadingMsg`,null),J(this,`hud`,void 0),J(this,`chapterNum`,void 0),J(this,`chapterTitle`,void 0),J(this,`phraseAr`,void 0),J(this,`phraseEn`,void 0),J(this,`soundBtn`,void 0),J(this,`caption`,void 0),J(this,`captionBadge`,void 0),J(this,`captionAr`,void 0),J(this,`captionText`,void 0),J(this,`captionRefs`,void 0),J(this,`crosshair`,void 0),J(this,`prompt`,void 0),J(this,`promptText`,void 0),J(this,`inspectBtn`,void 0),J(this,`transport`,void 0),J(this,`playBtn`,void 0),J(this,`playLabel`,void 0),J(this,`progressFill`,void 0),J(this,`progress`,void 0),J(this,`freeBar`,void 0),J(this,`lookHint`,void 0),J(this,`journey`,void 0),J(this,`journeyFill`,void 0),J(this,`journeyNodes`,[]),J(this,`journeyLabel`,void 0),J(this,`toastEl`,void 0),J(this,`dialogs`,void 0),J(this,`onKeyDown`,e=>this.handleKey(e)),this.root=e,this.handlers=t,this.settings=n,this.opts=r;let i=Z().ui;this.layer=$(`div`,{class:`nj-ui`}),this.root.appendChild(this.layer),this.root.classList.toggle(`nj-touch`,r.touch),this.chapterNum=$(`span`,{class:`nj-chapter-num`}),this.chapterTitle=$(`span`,{class:`nj-chapter-title`}),this.phraseAr=$(`span`,{class:`nj-phrase-ar`,lang:`ar`,dir:`rtl`}),this.phraseEn=$(`span`,{class:`nj-phrase-en`});let a=$(`div`,{class:`nj-chapter-card`},[$(`button`,{class:`nj-chapter-head`,type:`button`,aria:{label:i.hud.chapters},on:{click:()=>this.openChapters()}},[this.chapterNum,this.chapterTitle]),$(`button`,{class:`nj-phrase`,type:`button`,title:i.hud.readVerse,on:{click:()=>this.openVerse(`phrases`)}},[$(`span`,{class:`nj-phrase-label`},[i.hud.phraseLabel]),this.phraseAr,this.phraseEn])]);this.soundBtn=this.iconButton(`sound`,i.hud.mute,()=>this.handlers.toggleSound());let o=$(`div`,{class:`nj-hud-actions`},[this.iconButton(`book`,i.hud.verse,()=>this.openVerse(`verse`)),this.iconButton(`list`,i.hud.chapters,()=>this.openChapters()),this.iconButton(`info`,i.hud.sources,()=>this.openSources()),this.soundBtn,this.iconButton(`gear`,i.hud.settings,()=>this.openSettings()),this.iconButton(`pause`,i.hud.pause,()=>this.userPause())]);this.captionBadge=$(`span`,{class:`nj-badge`}),this.captionAr=$(`span`,{class:`nj-caption-ar`,lang:`ar`,dir:`rtl`}),this.captionText=$(`span`,{class:`nj-caption-text`}),this.captionRefs=$(`span`,{class:`nj-caption-refs`}),this.caption=$(`button`,{class:`nj-caption`,type:`button`,aria:{live:`polite`},title:i.hud.captionHint,on:{click:()=>this.openCitation()}},[this.captionBadge,this.captionAr,this.captionText,this.captionRefs]),this.caption.hidden=!0,this.crosshair=$(`div`,{class:`nj-crosshair`,aria:{hidden:`true`}}),this.promptText=$(`span`,{class:`nj-prompt-text`}),this.prompt=$(`div`,{class:`nj-prompt`,aria:{live:`polite`}},[$(`kbd`,{},[i.hud.inspectKey]),this.promptText]),this.prompt.hidden=!0,this.inspectBtn=$(`button`,{class:`nj-inspect-btn`,type:`button`,on:{click:()=>this.handlers.inspect()}}),this.inspectBtn.hidden=!0,this.playLabel=$(`span`,{class:`nj-play-label`}),this.playBtn=$(`button`,{class:`nj-tbtn nj-tbtn-play`,type:`button`,on:{click:()=>this.handlers.togglePlay()}},[Lm(`pause`),this.playLabel]),this.progressFill=$(`div`,{class:`nj-progress-fill`}),this.progress=$(`div`,{class:`nj-progress`,role:`progressbar`,aria:{label:i.transport.progress,valuemin:`0`,valuemax:`100`,valuenow:`0`}},[this.progressFill]),this.transport=$(`div`,{class:`nj-transport`,role:`toolbar`,aria:{label:i.hud.narration}},[this.progress,$(`div`,{class:`nj-transport-row`},[this.iconButton(`prev`,i.transport.prev,()=>this.handlers.prev(),`nj-tbtn nj-tbtn-dir`),this.playBtn,this.iconButton(`replay`,i.transport.replay,()=>this.handlers.replay(),`nj-tbtn`),this.iconButton(`next`,i.transport.next,()=>this.handlers.next(),`nj-tbtn nj-tbtn-dir`),$(`span`,{class:`nj-transport-spacer`}),$(`button`,{class:`nj-btn nj-btn-ghost nj-explore-btn`,type:`button`,title:i.transport.exploreHint,on:{click:()=>this.handlers.exploreHere()}},[Lm(`walk`,18),$(`span`,{},[i.transport.explore])])])]),this.freeBar=$(`div`,{class:`nj-freebar`},[$(`button`,{class:`nj-btn nj-btn-ghost`,type:`button`,on:{click:()=>this.handlers.watchGuided()}},[Lm(`film`,18),$(`span`,{},[i.hud.watchChapter])])]),this.journeyFill=$(`div`,{class:`nj-journey-fill`}),this.journeyLabel=$(`span`,{class:`nj-journey-current`});let s=$(`div`,{class:`nj-journey-track`},[$(`div`,{class:`nj-journey-line`},[this.journeyFill])]);yf.forEach((e,t)=>{let n=Z().content.chapters[e.id],r=$(`button`,{class:`nj-journey-node nj-place-${e.place}`,type:`button`,title:`${fd(t+1)}. ${n.title}`,aria:{label:hd(i.hud.journeyGo,{n:t+1,title:n.title})},on:{click:()=>this.handlers.selectChapter(t)}},[$(`span`,{class:`nj-journey-dot`}),$(`span`,{class:`nj-journey-short`},[n.short])]);this.journeyNodes.push(r),s.appendChild(r)}),this.journey=$(`nav`,{class:`nj-journey`,aria:{label:i.hud.journeyBar}},[$(`div`,{class:`nj-journey-ends`},[$(`span`,{class:`nj-journey-end`},[i.hud.journeyFrom]),this.journeyLabel,$(`span`,{class:`nj-journey-end`},[i.hud.journeyTo])]),s]),this.lookHint=$(`button`,{class:`nj-look-hint`,type:`button`,on:{click:()=>this.handlers.requestLook()}},[$(`span`,{class:`nj-look-title`},[Lm(`eye`,22),i.hud.lookTitle]),$(`span`,{class:`nj-look-body`},[i.hud.lookBody])]),this.lookHint.hidden=!0,this.hud=$(`div`,{class:`nj-hud`},[$(`div`,{class:`nj-hud-top`},[a,o]),this.crosshair,this.lookHint,$(`div`,{class:`nj-hud-bottom`},[this.prompt,this.inspectBtn,this.caption,this.transport,this.freeBar,this.journey])]),this.toastEl=$(`div`,{class:`nj-toast`,role:`status`,aria:{live:`polite`}}),this.dialogs=$(`div`,{class:`nj-dialogs`}),this.screen=$(`div`,{class:`nj-screen`}),Mm(this.layer,[this.hud,this.toastEl,this.screen,this.dialogs]),window.addEventListener(`keydown`,this.onKeyDown),this.applySettingsToRoot(),this.setMode(`loading`)}setLoading(e,t){let n=Z().ui;this.loadingBar||(Nm(this.screen),this.loadingBar=$(`div`,{class:`nj-loading-fill`}),this.loadingMsg=$(`p`,{class:`nj-loading-msg`,aria:{live:`polite`}}),this.screen.appendChild($(`div`,{class:`nj-loading`},[Z().lang===`ar`?null:$(`p`,{class:`nj-title-ar`,lang:`ar`,dir:`rtl`},[n.app.titleAr]),$(`h1`,{class:`nj-title`},[n.app.title]),$(`p`,{class:`nj-loading-label`},[n.app.loading.title]),$(`div`,{class:`nj-loading-bar`,role:`progressbar`,aria:{label:n.app.loading.title,valuemin:`0`,valuemax:`100`}},[this.loadingBar]),this.loadingMsg])));let r=Math.round(Math.max(0,Math.min(1,e))*100);this.loadingBar.style.width=`${r}%`,this.loadingBar.parentElement?.setAttribute(`aria-valuenow`,String(r)),this.loadingMsg&&Pm(this.loadingMsg,t)}showIntro(){let e=Z().ui,t=Z().content;this.loadingBar=null,Nm(this.screen);let n=$(`ul`,{class:`nj-legend`});for(let e of Bm)n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));let r=$(`button`,{class:`nj-btn nj-btn-primary nj-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`guided`)}},[$(`span`,{class:`nj-btn-label`},[e.intro.begin]),$(`span`,{class:`nj-btn-hint`},[e.intro.beginHint])]),i=$(`div`,{class:`nj-intro`,role:`region`,aria:{label:e.app.title}},[this.languagePicker(),$(`p`,{class:`nj-kicker`},[e.intro.kicker]),$(`h1`,{class:`nj-title`},Z().lang===`ar`?[e.app.title]:[e.app.title,` `,$(`span`,{class:`nj-title-ar-inline`,lang:`ar`,dir:`rtl`},[e.app.titleAr])]),$(`p`,{class:`nj-lead`},[e.intro.lead]),this.verseCard(e.intro.verseTitle),$(`div`,{class:`nj-intro-actions`},[r,$(`button`,{class:`nj-btn nj-btn-secondary nj-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`free`)}},[$(`span`,{class:`nj-btn-label`},[e.intro.explore]),$(`span`,{class:`nj-btn-hint`},[e.intro.exploreHint])])]),$(`div`,{class:`nj-intro-links`},[this.textButton(e.intro.verse,()=>this.openVerse(`verse`)),this.textButton(e.intro.chapters,()=>this.openChapters()),this.textButton(e.intro.sources,()=>this.openSources()),this.textButton(e.intro.settings,()=>this.openSettings()),this.textButton(e.intro.controls,()=>this.openHelp()),this.textButton(e.intro.about,()=>this.openAbout())]),$(`p`,{class:`nj-note`},[e.intro.depiction]),$(`p`,{class:`nj-note`},[e.intro.distinction]),$(`details`,{class:`nj-intro-details`},[$(`summary`,{},[e.intro.legendTitle]),n]),$(`p`,{class:`nj-note nj-note-dim`},[e.intro.soundNote]),$(`a`,{class:`nj-exit-link`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Lm(`home`,16),e.intro.exit])]);this.screen.appendChild(i),this.setMode(`intro`),requestAnimationFrame(()=>r.focus({preventScroll:!0}))}showFallback(e,t){let n=Z().ui,r=Z().content;this.closePanels(),this.loadingBar=null,Nm(this.screen);let i=e===`no-webgl`?n.fallback.noWebglTitle:e===`context-lost`?n.fallback.lostTitle:n.fallback.errorTitle,a=e===`no-webgl`?n.fallback.noWebgl:e===`context-lost`?n.fallback.lost:n.fallback.error,o=$(`div`,{class:`nj-story`});yf.forEach((e,t)=>{let n=r.chapters[e.id],i=$(`section`,{class:`nj-story-chapter`},[$(`h3`,{},[`${fd(t+1)}. ${n.title}`]),$(`p`,{class:`nj-chapter-sub`},[n.subtitle])]);for(let t of e.cues)i.appendChild(this.sourceBlock(t.kind,n.cues[t.key]??``,t.refs,t.sources??[],t.ar));o.appendChild(i)});let s=$(`div`,{class:`nj-intro-actions`});e!==`no-webgl`&&s.appendChild($(`button`,{class:`nj-btn nj-btn-primary`,type:`button`,on:{click:()=>window.location.reload()}},[n.fallback.reload])),s.appendChild($(`a`,{class:`nj-btn nj-btn-secondary`,href:this.opts.mainSiteUrl},[n.intro.exit])),this.screen.appendChild($(`div`,{class:`nj-fallback`,role:`region`,aria:{label:i}},[$(`h1`,{class:`nj-title`},[i]),$(`p`,{class:`nj-lead`},[a]),t?$(`p`,{class:`nj-note nj-note-dim`},[t]):null,s,this.verseCard(n.intro.verseTitle),$(`h2`,{},[n.fallback.storyTitle]),o])),this.setMode(`fallback`)}showCompletion(){let e=Z().ui;Nm(this.screen);let t=$(`button`,{class:`nj-btn nj-btn-primary`,type:`button`,on:{click:()=>this.handlers.exploreHere()}},[Lm(`walk`,18),$(`span`,{},[e.complete.explore])]);this.screen.appendChild($(`div`,{class:`nj-complete`,role:`region`,aria:{label:e.complete.title}},[$(`h1`,{class:`nj-title`},[e.complete.title]),$(`p`,{class:`nj-lead`},[e.complete.body]),this.verseCard(Z().ui.intro.verseTitle),$(`div`,{class:`nj-intro-actions`},[t,$(`button`,{class:`nj-btn nj-btn-secondary`,type:`button`,on:{click:()=>this.handlers.restartExperience()}},[e.complete.restart])]),$(`div`,{class:`nj-intro-links`},[this.textButton(e.complete.verse,()=>this.openVerse(`phrases`)),this.textButton(e.complete.sources,()=>this.openSources()),this.textButton(Z().ui.intro.about,()=>this.openAbout()),$(`a`,{class:`nj-text-btn`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Z().ui.intro.exit])])])),requestAnimationFrame(()=>t.focus({preventScroll:!0}))}setMode(e){this.mode=e,this.root.dataset.mode=e,(e===`guided`||e===`free`)&&Nm(this.screen),e!==`guided`&&this.setCaption(null),e!==`free`&&this.setFocus(null)}setChapter(e){this.chapterIndex=e;let t=yf[e],n=Z().content.chapters[t.id];Pm(this.chapterNum,hd(Z().ui.hud.chapterOf,{n:e+1,total:yf.length})),Pm(this.chapterTitle,n.title),Pm(this.phraseAr,t.phraseAr);let r=this.phraseText(bf.indexOf(e));Pm(this.phraseEn,r?md(r):``),this.phraseEn.hidden=!r,this.journeyNodes.forEach((t,n)=>{t.classList.toggle(`is-current`,n===e),t.classList.toggle(`is-done`,n<e),n===e?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`)}),Pm(this.journeyLabel,`${fd(e+1)}. ${n.title}`),this.setJourneyProgress(0)}setJourneyProgress(e){let t=yf.length,n=(this.chapterIndex+Math.max(0,Math.min(1,e)))/t*100;this.journeyFill.style.width=`${n.toFixed(1)}%`}setGuidedState(e,t,n){let r=Z().ui.transport;if(e!==this.playing||n!==this.ended){this.playing=e,this.ended=n,Nm(this.playBtn);let t;if(n){let e=this.chapterIndex>=yf.length-1;t=e?r.finish:hd(r.continueTo,{n:this.chapterIndex+2}),this.playBtn.append(Lm(`forward`),this.playLabel),Pm(this.playLabel,e?r.finish:r.continue)}else t=e?r.pause:r.play,this.playBtn.append(Lm(e?`pause`:`play`),this.playLabel),Pm(this.playLabel,``);this.playBtn.classList.toggle(`is-continue`,n),this.playBtn.setAttribute(`aria-label`,t),this.playBtn.title=t}let i=Math.round(Math.max(0,Math.min(1,t))*1e3)/10;this.progressFill.style.width=`${i}%`,this.progress.setAttribute(`aria-valuenow`,String(Math.round(i))),this.progress.setAttribute(`aria-valuetext`,`${fd(Math.round(i))}%`),this.setJourneyProgress(t)}setFreeProgress(e){this.setJourneyProgress(e)}setCaption(e){if(this.lastCaption=e,!e||!e.text){this.caption.hidden=!0;return}this.captionBadge.className=`nj-badge nj-badge-${e.kind}`,Pm(this.captionBadge,Z().content.sourceKinds[e.kind].label);let t=e.kind===`quran`,n=!!(t&&e.ar&&this.settings.arabicCaptions);Pm(this.captionAr,n?e.ar:``),this.captionAr.hidden=!n;let r=n&&Z().lang===`ar`;Pm(this.captionText,r?``:t?md(e.text):e.text),this.captionText.hidden=r,this.captionText.classList.toggle(`is-quote`,t),Pm(this.captionRefs,this.citeLine(e.refs,e.sources)),this.caption.hidden=!1,this.caption.classList.remove(`is-new`),this.caption.offsetWidth,this.caption.classList.add(`is-new`)}setFocus(e){if(!(e&&this.mode===`free`)){this.prompt.hidden=!0,this.inspectBtn.hidden=!0,this.crosshair.classList.remove(`is-active`);return}let t=Z().content.objects[e].name;this.crosshair.classList.add(`is-active`),this.opts.touch?(Pm(this.inspectBtn,hd(Z().ui.hud.inspectWhat,{name:t})),this.inspectBtn.hidden=!1,this.prompt.hidden=!0):(Pm(this.promptText,hd(Z().ui.hud.inspectWhat,{name:t})),this.prompt.hidden=!1,this.inspectBtn.hidden=!0)}setLookHint(e){this.lookHint.hidden=!e}setSound(e){let t=Z().ui.hud;Nm(this.soundBtn),this.soundBtn.appendChild(Lm(e?`sound`:`mute`));let n=e?t.mute:t.unmute;this.soundBtn.setAttribute(`aria-label`,n),this.soundBtn.title=n,this.soundBtn.setAttribute(`aria-pressed`,String(!e))}setPaused(e){e&&!this.hasDialog(`pause`)?this.pushDialog(`pause`,this.buildPause(),!1):!e&&this.hasDialog(`pause`)&&this.removeDialog(`pause`,!1)}openInfo(e){let t=jm[e],n=Z().content.objects[e],r=Z().ui.panels,i=$(`div`,{class:`nj-info`});for(let e of t.sections)i.appendChild(this.sectionBlock(e,n.sections[e.key]??``));let a=$(`div`,{class:`nj-dialog-actions`},[$(`button`,{class:`nj-btn nj-btn-primary`,type:`button`,on:{click:()=>this.openVerse(t.refs.some(e=>!e.startsWith(`17:1`))?`related`:`verse`)}},[Lm(`book`,18),$(`span`,{},[r.infoReadVerse])])]);this.pushDialog(`info`,this.dialog(n.name,[i,a],`nj-dialog-info`))}openVerse(e=`verse`){let t=Z().ui.panels,n=$(`div`,{class:`nj-verse-body`}),r=[[$(`button`,{class:`nj-tab`,type:`button`,role:`tab`},[t.tabVerse]),`verse`],[$(`button`,{class:`nj-tab`,type:`button`,role:`tab`},[t.tabPhrases]),`phrases`],[$(`button`,{class:`nj-tab`,type:`button`,role:`tab`},[t.tabRelated]),`related`]],i=e=>{Nm(n);for(let[t,n]of r)t.setAttribute(`aria-selected`,String(n===e));if(e===`verse`)n.append($(`p`,{class:`nj-basmala`,lang:`ar`,dir:`rtl`},[_d]),$(`p`,{class:`nj-note nj-note-dim nj-center`},[t.basmalaNote]),this.verseArticle(Cd,!0),$(`p`,{},[$(`a`,{class:`nj-ext-link`,href:`https://quran.com/17/1`,target:`_blank`,rel:`noopener noreferrer`},[Lm(`link`,16),t.listen])]),$(`p`,{class:`nj-note nj-note-dim`},[t.listenNote]));else if(e===`phrases`){n.appendChild($(`p`,{class:`nj-note`},[t.phrasesIntro]));let e=$(`ol`,{class:`nj-phrases`});Vd.forEach((n,r)=>{let i=bf[r],a=i===this.chapterIndex&&(this.mode===`guided`||this.mode===`free`),o=this.phraseText(r);e.appendChild($(`li`,{class:`nj-phrase-row${a?` is-current`:``}`},[$(`p`,{class:`nj-arabic nj-phrase-row-ar`,lang:`ar`,dir:`rtl`},[Md(Cd,n.from,n.to)]),o?$(`p`,{class:`nj-phrase-row-en`},[md(o)]):null,$(`button`,{class:`nj-text-btn`,type:`button`,on:{click:()=>{this.closePanels(),this.handlers.selectChapter(i)}}},[hd(t.phraseChapter,{n:i+1}),` — `,Z().content.chapters[yf[i].id].title])]))}),n.appendChild(e)}else{n.appendChild($(`p`,{class:`nj-note`},[t.relatedIntro]));for(let e of wd){let r=Z().digits===`arab`?null:$(`span`,{lang:`ar`,dir:`rtl`,class:`nj-surah-ar`},[Sd[e.surah]?.nameAr??``]);n.appendChild($(`h3`,{class:`nj-verse-range`},[Ld(e),` `,r])),n.appendChild($(`p`,{class:`nj-note`},[e.surah===17?t.related1760:t.related5313]));let i=Nd(e);i.forEach((e,t)=>n.appendChild(this.verseArticle(e,!1,zd(i,t))))}}n.appendChild($(`div`,{class:`nj-sources-foot`},[$(`p`,{},[t.arabicSource,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[t.tanzilLink])]),$(`p`,{},[t.translationSource])]))};for(let[e,t]of r)e.addEventListener(`click`,()=>i(t));let a=$(`div`,{class:`nj-tabs`,role:`tablist`},r.map(([e])=>e));this.pushDialog(`verse`,this.dialog(t.versesTitle,[a,n],`nj-dialog-verse`)),i(e)}openCitation(){let e=this.lastCaption;if(!e)return;let t=Z().ui.panels,n=$(`div`,{class:`nj-info`},[this.sourceBlock(e.kind,e.text,e.refs,e.sources,e.ar)]);e.sources.length&&n.appendChild(this.sourceList(e.sources));let r=$(`div`,{class:`nj-dialog-actions`},[$(`button`,{class:`nj-btn nj-btn-primary`,type:`button`,on:{click:()=>this.openVerse(e.refs.some(e=>e!==`17:1`)?`related`:`verse`)}},[Lm(`book`,18),$(`span`,{},[t.infoReadVerse])])]);this.pushDialog(`cite`,this.dialog(Z().content.sourceKinds[e.kind].label,[n,r],`nj-dialog-info`))}openSources(){let e=Z().ui.panels,t=Z().content,n=$(`ul`,{class:`nj-legend`});for(let e of Bm)n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));let r=(e,t)=>{let n=Object.keys(nd).filter(e=>nd[e].type===t);return $(`section`,{},[$(`h3`,{},[e]),this.sourceList(n)])};this.pushDialog(`sources`,this.dialog(e.sourcesTitle,[$(`p`,{class:`nj-note`},[e.sourcesIntro]),n,$(`section`,{},[$(`h3`,{},[e.sourcesQuran]),$(`p`,{},[e.arabicSource,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[e.tanzilLink])]),$(`p`,{},[e.translationSource])]),r(e.sourcesHadith,`hadith`),r(e.sourcesTafsir,`tafsir`),r(e.sourcesSira,`sira`),r(e.sourcesHistory,`history`),$(`p`,{class:`nj-note nj-note-dim`},[e.sourcesNote])],`nj-dialog-sources`))}openChapters(){let e=Z().ui.panels,t=Z().content,n=$(`ol`,{class:`nj-chapters`});yf.forEach((r,i)=>{let a=t.chapters[r.id],o=i===this.chapterIndex&&(this.mode===`guided`||this.mode===`free`),s=this.phraseText(bf.indexOf(i)),c=$(`button`,{class:`nj-chapter-item${o?` is-current`:``}`,type:`button`,aria:o?{current:`step`,label:hd(e.chapterGo,{n:i+1})}:{label:hd(e.chapterGo,{n:i+1})},on:{click:()=>{this.closePanels(),this.handlers.selectChapter(i)}}},[$(`span`,{class:`nj-chapter-n`},[fd(i+1)]),$(`span`,{class:`nj-chapter-text`},[$(`span`,{class:`nj-chapter-title`},[a.title]),$(`span`,{class:`nj-chapter-ar`,lang:`ar`,dir:`rtl`},[r.phraseAr]),$(`span`,{class:`nj-chapter-sub`},[s?`${md(s)} — ${Id(Cd)}`:`${a.subtitle} — ${Id(Cd)}`])]),o?$(`span`,{class:`nj-chapter-current`},[e.chapterCurrent]):null]);n.appendChild($(`li`,{},[c]))}),this.pushDialog(`chapters`,this.dialog(e.chaptersTitle,[n],`nj-dialog-chapters`))}openHelp(){let e=Z().ui.help,t=e=>$(`table`,{class:`nj-keys`},[$(`tbody`,{},e.map(([e,t])=>$(`tr`,{},[$(`th`,{},[$(`kbd`,{},[e])]),$(`td`,{},[t])])))]),n=$(`section`,{},[$(`h3`,{},[e.desktop]),t(e.rows)]),r=$(`section`,{},[$(`h3`,{},[e.touch]),t(e.touchRows)]),i=this.opts.touch?[r,n]:[n,r];this.pushDialog(`help`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.guidedTitle]),$(`p`,{},[e.guided])]),$(`section`,{},[$(`h3`,{},[e.exploreTitle]),$(`p`,{},[e.explore])]),...i,$(`p`,{class:`nj-note`},[e.tip])],`nj-dialog-help`))}openSettings(){let e=Z().ui.settings,t=this.settings,n=(e,t)=>{this.settings={...this.settings,[e]:t},this.applySettingsToRoot(),this.handlers.settingsChanged(this.settings,[e])},r=(e,r,i,a,o)=>{let s=`nj-set-${String(e)}`,c=$(`select`,{id:s,on:{change:()=>n(e,a(c.value))}});for(let[n,r]of i){let i=$(`option`,{},[r]);i.value=n,String(t[e])===n&&(i.selected=!0),c.appendChild(i)}let l=$(`label`,{class:`nj-field`},[$(`span`,{class:`nj-field-label`},[r]),c,o?$(`span`,{class:`nj-field-note`},[o]):null]);return l.htmlFor=s,l},i=(e,r)=>{let i=$(`input`,{type:`checkbox`,on:{change:()=>n(e,i.checked)}});return i.checked=t[e],$(`label`,{class:`nj-field nj-field-check`},[i,$(`span`,{},[r])])},a=(e,r,i,a,o)=>{let s=$(`input`,{type:`range`,on:{input:()=>n(e,Number(s.value))}});return s.min=String(i),s.max=String(a),s.step=String(o),s.value=String(t[e]),$(`label`,{class:`nj-field`},[$(`span`,{class:`nj-field-label`},[r]),s])};this.pushDialog(`settings`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.language]),this.languagePicker(),$(`p`,{class:`nj-field-note`},[e.languageNote])]),$(`section`,{},[$(`h3`,{},[e.reading]),i(`arabicCaptions`,e.arabicCaptions),r(`pace`,e.pace,[[`1`,e.paceNormal],[`0.75`,e.paceSlow]],e=>Number(e)),r(`continueMode`,e.continueMode,[[`wait`,e.continueWait],[`auto`,e.continueAuto]],e=>e),r(`textScale`,e.textSize,[[`1`,e.textNormal],[`1.15`,e.textLarge],[`1.3`,e.textLarger]],e=>Number(e))]),$(`section`,{},[$(`h3`,{},[e.sound]),i(`soundEnabled`,e.soundOn),a(`volume`,e.volume,0,1,.05)]),$(`section`,{},[$(`h3`,{},[e.view]),r(`lightStyle`,e.lightStyle,[[`figure`,e.lightFigure],[`point`,e.lightPoint]],e=>e),i(`laterBuildings`,e.laterBuildings),i(`hotspots`,e.markers)]),$(`section`,{},[$(`h3`,{},[e.comfort]),r(`reducedMotion`,e.motion,[[`system`,e.motionSystem],[`on`,e.motionOn],[`off`,e.motionOff]],e=>e,e.motionNote),a(`lookSensitivity`,e.sensitivity,.4,2,.1),i(`invertY`,e.invertY)]),$(`section`,{},[$(`h3`,{},[e.graphics]),r(`quality`,e.quality,[[`auto`,e.qualityAuto],[`low`,e.qualityLow],[`medium`,e.qualityMedium],[`high`,e.qualityHigh]],e=>e,e.qualityNote)])],`nj-dialog-settings`))}openAbout(){let e=Z().ui.about,t=Z().content,n=$(`ul`,{class:`nj-legend`});for(let e of Bm)n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));this.pushDialog(`about`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.purposeTitle]),$(`p`,{},[e.purpose])]),$(`section`,{},[$(`h3`,{},[e.labelsTitle]),n]),$(`section`,{},[$(`h3`,{},[e.depictionTitle]),$(`p`,{},[e.depiction])]),$(`section`,{},[$(`h3`,{},[e.placesTitle]),$(`p`,{},[e.places])]),$(`section`,{},[$(`h3`,{},[e.textsTitle]),$(`p`,{},[e.arabic,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[`tanzil.net`])]),$(`p`,{},[e.translation]),$(`p`,{},[e.hadith]),$(`p`,{class:`nj-note-dim`},[e.tanzilNotice]),$(`pre`,{class:`nj-notice`,lang:`en`,dir:`ltr`},[gd])]),$(`section`,{},[$(`h3`,{},[e.audioTitle]),$(`p`,{},[e.audio])]),$(`section`,{},[$(`h3`,{},[e.assetsTitle]),$(`p`,{},[e.assets])]),$(`section`,{},[$(`h3`,{},[e.limitsTitle]),$(`p`,{},[e.limits])])],`nj-dialog-about`))}closePanels(){for(;this.stack.length;){let e=this.stack[this.stack.length-1];this.removeDialog(e.kind,e.kind===`pause`)}}get panelOpen(){return this.stack.some(e=>e.kind!==`pause`)}toast(e){Pm(this.toastEl,e),this.toastEl.classList.add(`is-visible`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`is-visible`),3400)}setSettings(e){this.settings=e,this.applySettingsToRoot()}dispose(){window.removeEventListener(`keydown`,this.onKeyDown),window.clearTimeout(this.toastTimer),this.layer.remove()}verseCard(e){return $(`figure`,{class:`nj-verse-card`},[$(`figcaption`,{class:`nj-verse-card-title`},[this.badge(`quran`),` `,e]),$(`p`,{class:`nj-arabic`,lang:`ar`,dir:`rtl`},[Ad(Cd),` `,$(`span`,{class:`nj-ayah-mark`},[`﴿${Rm(1)}﴾`])]),Dd().kind===`tafsir`?this.translationBlock(Cd,`nj-verse-en`,!1):$(`blockquote`,{class:`nj-verse-en`},[md(jd(Cd))]),$(`p`,{class:`nj-verse-cite`},[hd(Z().ui.intro.verseCite,{ref:Id(Cd)})])])}verseArticle(e,t,n=!1){let{ayah:r}=kd(e),i=$(`p`,{class:`nj-arabic`,lang:`ar`,dir:`rtl`});if(t&&e===`17:1`){let t=Ad(e).split(` `),n=0;Vd.forEach((e,r)=>{e.from>n&&i.append(t.slice(n,e.from).join(` `),` `);let a=bf[r]===this.chapterIndex&&(this.mode===`guided`||this.mode===`free`);i.append($(`span`,{class:`nj-ar-phrase${a?` is-current`:``}`},[t.slice(e.from,e.to).join(` `)]),` `),n=e.to}),n<t.length&&i.append(t.slice(n).join(` `),` `)}else i.append(Ad(e),` `);return i.appendChild($(`span`,{class:`nj-ayah-mark`},[`﴿${Rm(r)}﴾`])),$(`article`,{class:`nj-verse`,aria:{label:Id(e)}},[i,n?null:this.translationBlock(e)])}translationBlock(e,t=`nj-translation`,n=!0){let r=Dd(),i=r.lang===`ar`||r.lang===`ckb`?`rtl`:`ltr`,a=r.kind===`tafsir`?$(`span`,{class:`nj-tafsir-label`},[Z().ui.panels.tafsirLabel]):null;return $(`p`,{class:`${t}${a?` nj-tafsir`:``}`,lang:r.lang,dir:i},[n?$(`span`,{class:`nj-verse-num`},[Rd(e)]):null,n?` `:null,a,a?` `:null,jd(e)])}phraseText(e){return e<0||Z().lang===`ar`?``:Z().content.phrases[e]??``}languagePicker(){let e=Z().lang;return $(`div`,{class:`nj-lang`,role:`group`,aria:{label:Z().ui.settings.language}},id.map(t=>$(`button`,{class:`nj-btn nj-btn-ghost nj-lang-btn${t.code===e?` is-active`:``}`,type:`button`,lang:t.code,dir:t.code===`en`?`ltr`:`rtl`,aria:{pressed:String(t.code===e)},on:{click:()=>t.code===e?void 0:ld(t.code)}},[t.name])))}sourceList(e){let t=Z().ui.panels;return $(`ul`,{class:`nj-source-list`},e.map(e=>{let n=nd[e],r=Z().content.sources[e];return $(`li`,{},[$(`p`,{class:`nj-source-cite`},[r.cite]),$(`p`,{class:`nj-source-detail`},[r.detail]),n.url?$(`a`,{class:`nj-ext-link`,href:n.url,target:`_blank`,rel:`noopener noreferrer`},[Lm(`link`,14),`${t.open}: ${n.url.replace(`https://`,``)}`]):null])}))}userPause(){(this.mode===`guided`||this.mode===`free`)&&(this.hasDialog(`pause`)||(this.pushDialog(`pause`,this.buildPause(),!1),this.handlers.pauseChanged(!0)))}buildPause(){let e=Z().ui.panels,t=$(`button`,{class:`nj-btn nj-btn-primary`,type:`button`,on:{click:()=>this.removeDialog(`pause`,!0)}},[Lm(`play`,18),$(`span`,{},[e.resume])]),n=(e,t)=>$(`button`,{class:`nj-btn nj-btn-secondary`,type:`button`,on:{click:t}},[e]);return this.dialog(e.pauseTitle,[$(`div`,{class:`nj-menu`},[t,n(Z().ui.hud.verse,()=>this.openVerse(`verse`)),n(e.restartChapter,()=>{this.closePanels(),this.handlers.restartChapter()}),n(e.restartAll,()=>{this.closePanels(),this.handlers.restartExperience()}),n(Z().ui.hud.chapters,()=>this.openChapters()),n(Z().ui.hud.sources,()=>this.openSources()),n(Z().ui.hud.settings,()=>this.openSettings()),n(Z().ui.help.title,()=>this.openHelp()),n(Z().ui.about.title,()=>this.openAbout()),n(e.mainMenu,()=>{this.closePanels(),this.handlers.toIntro()}),$(`a`,{class:`nj-btn nj-btn-ghost`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Lm(`home`,18),$(`span`,{},[e.exitSite])])])],`nj-dialog-pause`,!0,()=>this.removeDialog(`pause`,!0))}exitClick(e){e.preventDefault(),this.handlers.exitToSite()}dialog(e,t,n,r=!0,i){let a=Z().ui.panels,o=`nj-dlg-${Math.random().toString(36).slice(2,9)}`,s=$(`button`,{class:`nj-icon-btn nj-dialog-close`,type:`button`,aria:{label:a.close},title:a.close},[Lm(`close`)]),c=()=>{i?i():this.popDialog()};s.addEventListener(`click`,c);let l=$(`div`,{class:`nj-dialog-body`});Mm(l,t);let u=$(`div`,{class:`nj-dialog ${n}`,role:`dialog`,aria:{modal:`true`,labelledby:o}},[$(`header`,{class:`nj-dialog-head`},[$(`h2`,{id:o},[e]),r?s:null]),l]),d=$(`div`,{class:`nj-backdrop`},[u]);return d.addEventListener(`pointerdown`,e=>{e.target===d&&c()}),u.addEventListener(`keydown`,e=>this.trapFocus(e,u)),d}pushDialog(e,t,n=!0){this.hasDialog(e)&&e!==`pause`&&this.removeDialog(e,!1);let r={kind:e,el:t,returnFocus:document.activeElement};for(let e of this.stack)e.el.classList.add(`is-behind`);this.stack.push(r),this.dialogs.appendChild(t);let i=zm(t).find(e=>!e.classList.contains(`nj-dialog-close`))??zm(t)[0];requestAnimationFrame(()=>(i??t).focus({preventScroll:!0})),n&&this.notifyPanels()}popDialog(){let e=this.stack[this.stack.length-1];e&&this.removeDialog(e.kind,!0)}hasDialog(e){return this.stack.some(t=>t.kind===e)}removeDialog(e,t){let n=this.stack.map(e=>e.kind).lastIndexOf(e);if(n<0)return;let[r]=this.stack.splice(n,1);r.el.remove();let i=this.stack[this.stack.length-1];i&&i.el.classList.remove(`is-behind`);let a=r.returnFocus;a&&document.contains(a)&&typeof a.focus==`function`&&a.focus({preventScroll:!0}),e===`pause`&&t&&this.handlers.pauseChanged(!1),this.notifyPanels()}notifyPanels(){let e=this.panelOpen;e!==this.panelWasOpen&&(this.panelWasOpen=e,this.handlers.panelChanged(e)),this.root.classList.toggle(`nj-has-dialog`,this.stack.length>0)}trapFocus(e,t){if(e.key!==`Tab`)return;let n=zm(t);if(!n.length)return;let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}handleKey(e){if(e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target,n=!!t&&(t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`);if(e.key===`Escape`){this.stack.length?(e.preventDefault(),this.popDialog()):(this.mode===`guided`||this.mode===`free`)&&(e.preventDefault(),this.userPause());return}if(n||e.repeat)return;let r=this.mode===`guided`||this.mode===`free`,i=this.stack.length>0;if(/^Digit[1-7]$/.test(e.code)&&r&&!i)this.handlers.selectChapter(Number(e.code.slice(5))-1);else switch(e.code){case`KeyP`:r&&!i&&this.userPause();break;case`KeyH`:!this.hasDialog(`help`)&&this.mode!==`loading`&&this.openHelp();break;case`KeyV`:!i&&this.mode!==`loading`&&this.openVerse(`verse`);break;case`KeyC`:!i&&this.mode!==`loading`&&this.mode!==`fallback`&&this.openChapters();break;case`KeyM`:this.mode!==`loading`&&this.mode!==`fallback`&&this.handlers.toggleSound();break;case`Space`:this.mode===`guided`&&!i&&t?.tagName!==`BUTTON`&&(e.preventDefault(),this.handlers.togglePlay());break;case`KeyN`:r&&!i&&this.handlers.next();break;case`KeyB`:r&&!i&&this.handlers.prev()}}citeLine(e,t){let n=[];e.length&&n.push(e.length===1?Id(e[0]):Bd(e));for(let e of t)n.push(Z().content.sources[e].cite);return n.join(pd())}badge(e){return $(`span`,{class:`nj-badge nj-badge-${e}`},[Z().content.sourceKinds[e].label])}sourceBlock(e,t,n,r,i){let a=e===`quran`,o=this.citeLine(n,r),s=a&&!!i&&Z().lang===`ar`;return $(`div`,{class:`nj-source nj-source-${e}`},[this.badge(e),a&&i?$(`p`,{class:`nj-source-ar`,lang:`ar`,dir:`rtl`},[i]):null,s?null:$(a?`blockquote`:`p`,{class:`nj-source-text`},[a?md(t):t]),o?$(`p`,{class:`nj-source-ref`},[`— ${o}`]):null])}sectionBlock(e,t){return this.sourceBlock(e.kind,t,e.refs,e.sources??[],e.ar)}iconButton(e,t,n,r=`nj-icon-btn`){return $(`button`,{class:r,type:`button`,title:t,aria:{label:t},on:{click:n}},[Lm(e)])}textButton(e,t){return $(`button`,{class:`nj-text-btn`,type:`button`,on:{click:t}},[e])}applySettingsToRoot(){this.root.style.setProperty(`--nj-text-scale`,String(this.settings.textScale)),this.root.classList.toggle(`nj-reduce-motion`,tu(this.settings))}},Hm=()=>new Promise(e=>{let t=!1,n=()=>{t||(t=!0,e())};requestAnimationFrame(n),setTimeout(n,60)}),Um=class{constructor(e,t){J(this,`root`,void 0),J(this,`opts`,void 0),J(this,`listeners`,new nu),J(this,`listenersCleanup`,[]),J(this,`settings`,Ql()),J(this,`touch`,ql()),J(this,`ui`,void 0),J(this,`renderer`,null),J(this,`scene`,new Wn),J(this,`camera`,new Qa(55,1,.3,4e4)),J(this,`uniforms`,Hl()),J(this,`quality`,Kl.medium),J(this,`dynRes`,null),J(this,`m`,null),J(this,`timeline`,new xf(yf)),J(this,`director`,new qf(this.camera)),J(this,`lightSolver`,new ep),J(this,`player`,null),J(this,`interactions`,null),J(this,`audio`,new pm),J(this,`resizeObserver`,null),J(this,`canvasHost`,void 0),J(this,`touchRoot`,void 0),J(this,`fadeEl`,void 0),J(this,`proxyMat`,new Xr({visible:!1})),J(this,`proxyGeo`,new oa(1,10,8)),J(this,`lightProxy`,null),J(this,`mode`,`loading`),J(this,`paused`,!1),J(this,`running`,!1),J(this,`disposed`,!1),J(this,`reducedMotion`,!1),J(this,`time`,0),J(this,`lastNow`,0),J(this,`holdAfterEnd`,0),J(this,`resumeAfterPanel`,!1),J(this,`panelOpen`,!1),J(this,`transitioning`,!1),J(this,`focusId`,null),J(this,`focusTimer`,0),J(this,`uiTimer`,0),J(this,`lastCueKey`,``),J(this,`lastToast`,0),J(this,`waitingAtEnd`,!1),J(this,`debugView`,null),J(this,`env`,pu()),J(this,`ctx`,void 0),J(this,`tmpV`,new H),this.root=e,this.opts=t,ud(cd()),this.reducedMotion=tu(this.settings),this.timeline.pace=this.settings.pace,this.canvasHost=document.createElement(`div`),this.canvasHost.className=`nj-canvas-host`,this.touchRoot=document.createElement(`div`),this.touchRoot.className=`nj-touch-root`,this.fadeEl=document.createElement(`div`),this.fadeEl.className=`nj-fade`,this.fadeEl.setAttribute(`aria-hidden`,`true`),this.root.append(this.canvasHost,this.touchRoot,this.fadeEl),this.ui=new Vm(this.root,this.createHandlers(),this.settings,{mainSiteUrl:t.mainSiteUrl,touch:this.touch}),this.ui.setSound(this.settings.soundEnabled),this.ctx={dt:0,time:0,env:this.env,light:this.lightSolver.pose,camera:this.camera,quality:this.quality,reducedMotion:this.reducedMotion,lightFigure:this.settings.lightStyle===`figure`,laterBuildings:this.settings.laterBuildings}}async boot(){let e=Z().ui.app.loading;this.ui.setMode(`loading`),this.ui.setLoading(0,e.renderer);let t=Wm();if(!t.ok)this.ui.showFallback(`no-webgl`);else{try{await this.build(t.gl)}catch(e){console.error(`[night-journey] Failed to start`,e),this.ui.showFallback(`error`,e instanceof Error?e.message:String(e)),this.dispose();return}this.disposed||(this.attachGlobalListeners(),this.ui.setLoading(1,e.ready),this.enterIntro(),this.startLoop())}}async build(e){let t=Z().ui.app.loading,n=async(e,t)=>{this.ui.setLoading(e,t),await Hm()},r=this.settings.quality===`auto`?Jl(e):this.settings.quality;Gm(e),this.quality=Kl[r],this.ctx.quality=this.quality;let i=new Vl({antialias:this.quality.antialias,powerPreference:`high-performance`,alpha:!1,stencil:!1});this.renderer=i,i.outputColorSpace=qe,i.toneMapping=4,i.toneMappingExposure=1.6,i.shadowMap.enabled=this.quality.shadows,i.shadowMap.type=1,i.domElement.className=`nj-canvas`,i.domElement.setAttribute(`aria-label`,Z().ui.app.title),this.canvasHost.appendChild(i.domElement),this.dynRes=new Yl(i,this.quality),this.camera.far=this.quality.drawDistance,this.resize();let a=this.quality,o=this.uniforms;await n(.06,t.terrain);let s=new hp({quality:a,uniforms:o});this.scene.add(s.object),await n(.3,t.makkah);let c=new wp({quality:a,uniforms:o});this.scene.add(c.object),await n(.45,t.jerusalem);let l=new jp({quality:a,uniforms:o});this.scene.add(l.object),await n(.62,t.vegetation);let u=new Lp({quality:a,uniforms:o});this.scene.add(u.object),await n(.72,t.light);let d=new Kp;this.scene.add(d.object),await n(.78,t.sky);let f=new um({scene:this.scene,quality:a,uniforms:o});this.scene.add(f.object),this.m={terrain:s,makkah:c,jerusalem:l,vegetation:u,light:d,atmosphere:f},await n(.84,t.audio);let p=Zp([...c.obstacles,...l.obstacles,...u.obstacles]),m=new wm({camera:this.camera,canvas:i.domElement,touchRoot:this.touchRoot,walk:p,getSettings:()=>this.settings});this.player=m,m.onTap=(e,t)=>this.onTap(e,t),m.onInspect=()=>this.inspectFocused(),m.onLockChange=()=>this.refreshLookHint(),m.onBlocked=()=>this.toast(Z().ui.app.toasts.edge);let h=new km({camera:this.camera});h.register([...c.interactables,...l.interactables,...this.extraInteractables()]),this.interactions=h,this.scene.add(h.object),await n(.9,t.shaders),this.timeline.goTo(0,`snap`),this.snapWorld(),this.placeAttractCamera(0),this.updateModules(0);try{await i.compileAsync(this.scene,this.camera)}catch{}}extraInteractables(){this.lightProxy=new ci(this.proxyGeo,this.proxyMat),this.scene.add(this.lightProxy);let e=[],t=new H;for(let n=0;n<14;n++){let r=new ci(this.proxyGeo,this.proxyMat);$f.pointAt(.06+.88*n/13,t),r.position.copy(t),r.scale.setScalar(110),r.updateMatrixWorld(),this.scene.add(r),e.push(r)}return[{id:`light`,targets:[this.lightProxy],maxDistance:2e4,isAvailable:e=>e.light.visible>.3,anchor:(e,t)=>t.light.upright<.5?!1:(e.copy(t.light.position).y+=2.6,!0)},{id:`journey`,targets:e,maxDistance:5e3,isAvailable:e=>e.env.trail>.15}]}startLoop(){!this.renderer||this.running||this.disposed||(this.running=!0,this.lastNow=performance.now(),this.renderer.setAnimationLoop(e=>this.frame(e)))}stopLoop(){this.running=!1,this.renderer?.setAnimationLoop(null)}frame(e){let t=this.renderer,n=this.m;if(!t||!n)return;let r=e-this.lastNow;this.lastNow=e;let i=Math.min(Math.max(r/1e3,0),.1);this.time+=i,this.timeline.update(i),this.handleChapterEnd(i),mu(this.env,this.timeline.env);let a=this.lightSolver.update(this.env);this.mode===`free`&&this.player?this.player.update(this.fillCtx(i)):this.debugView?(this.camera.position.fromArray(this.debugView.pos),this.camera.lookAt(this.debugView.look[0],this.debugView.look[1],this.debugView.look[2])):this.mode===`intro`?this.placeAttractCamera(this.time):this.director.update(this.timeline.progress,a,this.time,i,this.reducedMotion),this.updateNearPlane();let o=this.uniforms;o.uTime.value=this.time;let s=o.uDawn.value;o.uLamps.value=this.env.lamps*(1-.85*s),o.uLightPos.value.copy(a.position);let c=this.settings.lightStyle===`figure`;o.uLightGlow.value=a.visible*a.upright*(.35+.65*this.env.glow)*(c?1:.6),this.lightProxy&&(this.lightProxy.position.copy(a.position),this.lightProxy.scale.setScalar(Math.max(2.4,a.position.distanceTo(this.camera.position)*.02)),this.lightProxy.updateMatrixWorld()),this.updateModules(i),this.audio.update(this.ctx,rm(o.uSunDir.value.y)),this.updateInteractionUI(i),t.toneMappingExposure=n.atmosphere.exposure,t.render(this.scene,this.camera),this.dynRes?.update(r)}updateNearPlane(){let e=this.camera,t=au((e.position.y-Q(e.position.x,e.position.z))*.012,.25,4);Math.abs(t-e.near)>.02&&(e.near=t,e.updateProjectionMatrix())}fillCtx(e){let t=this.ctx;return t.dt=e,t.time=this.time,t.reducedMotion=this.reducedMotion,t.quality=this.quality,t.lightFigure=this.settings.lightStyle===`figure`,t.laterBuildings=this.settings.laterBuildings,t}updateModules(e){let t=this.m;if(!t)return;let n=this.fillCtx(e);t.atmosphere.update(n),t.terrain.update(n),t.makkah.update(n),t.jerusalem.update(n),t.vegetation.update(n),t.light.update(n)}handleChapterEnd(e){let t=this.timeline;this.mode!==`guided`||!t.ended||this.transitioning?this.holdAfterEnd=0:(t.playing||!this.waitingAtEnd)&&t.playing&&(this.holdAfterEnd+=e,!(this.holdAfterEnd<1.2)&&(this.holdAfterEnd=0,this.settings.continueMode===`auto`?t.isLast?this.complete():this.goToChapter(t.index+1):(t.playing=!1,this.waitingAtEnd=!0,this.ui.setGuidedState(!1,1,!0),this.toast(Z().ui.app.toasts.chapterEnded))))}updateInteractionUI(e){let t=this.interactions;if(!t)return;let n=this.settings.hotspots&&(this.mode===`free`||this.mode===`guided`&&!this.timeline.playing);if(t.update(this.ctx,n,this.timeline.chapter.focus),this.focusTimer-=e,this.focusTimer<=0){this.focusTimer=.15;let e=null;this.mode===`free`&&!this.panelOpen&&!this.paused&&(e=t.focusCenter(this.ctx)?.id??null),e!==this.focusId&&(this.focusId=e,this.ui.setFocus(e))}let r=this.mode===`guided`?this.timeline.activeCue:null,i=r?`${this.timeline.index}:${r.key}:${this.settings.arabicCaptions}`:``;i!==this.lastCueKey&&(this.lastCueKey=i,this.ui.setCaption(r?this.captionFor(r):null)),this.uiTimer-=e,this.uiTimer<=0&&(this.uiTimer=.25,this.mode===`guided`?this.ui.setGuidedState(this.timeline.playing,this.timeline.progress,this.waitingAtEnd):this.mode===`free`&&this.ui.setFreeProgress(this.timeline.progress))}captionFor(e){let t=Z().content.chapters[this.timeline.chapter.id];return{kind:e.kind,text:t.cues[e.key]??``,refs:e.refs,sources:e.sources??[],ar:e.ar}}enterIntro(){this.mode=`intro`,this.timeline.mode=`guided`,this.timeline.playing=!1,this.waitingAtEnd=!1,this.timeline.goTo(0,`snap`),this.timeline.time=this.timeline.chapter.duration,this.timeline.update(0),this.snapWorld(),this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`intro`),this.ui.setChapter(0),this.ui.showIntro(),this.refreshLookHint()}start(e){this.unlockAudio(),e===`guided`?this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.snapWorld(),this.setGuided(0,!0)}):this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.snapWorld(),this.enterFree(!0)}),this.settings.seenHelp||(this.settings.seenHelp=!0,$l(this.settings),e===`free`&&this.ui.openHelp())}snapWorld(){mu(this.env,this.timeline.env),this.director.snapLight(this.lightSolver.update(this.env))}setGuided(e,t=!1){this.mode=`guided`,this.timeline.mode=`guided`,this.waitingAtEnd=!1,this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.timeline.goTo(e,t?`snap`:`smooth`,0),this.timeline.playing=!0,this.director.setKeys(this.timeline.chapter.camera),this.director.blendFromCurrent(t?0:this.reducedMotion?1.2:2.5),this.ui.setMode(`guided`),this.ui.setChapter(this.timeline.index),this.ui.setGuidedState(!0,0,!1),this.refreshLookHint()}enterFree(e){let t=this.player;if(!t)return;this.mode=`free`,this.timeline.mode=`free`,this.timeline.playing=!0,this.waitingAtEnd=!1,this.ui.setCaption(null),this.lastCueKey=``;let n=!1;if(!e){let e=this.camera.getWorldDirection(this.tmpV);n=t.placeAt(this.camera.position,Math.atan2(-e.x,-e.z),0)}n||t.spawn(this.timeline.chapter.spawn),t.enabled=!this.panelOpen,t.setTouchControlsVisible(this.touch),this.ui.setMode(`free`),this.ui.setChapter(this.timeline.index),this.refreshLookHint()}goToChapter(e){let t=this.timeline;if(e<0||e>=t.count)return;let n=yf[e],r=e===t.index+1&&!n.cut;this.waitingAtEnd=!1,this.mode===`guided`?r&&!this.transitioning?(t.goTo(e,`smooth`),t.playing=!0,this.director.setKeys(n.camera),this.director.blendFromCurrent(this.reducedMotion?1:2),this.ui.setChapter(e),this.ui.setGuidedState(!0,0,!1)):this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.snapWorld(),this.director.setKeys(n.camera),this.director.blendFromCurrent(0),this.ui.setChapter(e),this.ui.setGuidedState(!0,0,!1)},n.cut&&e===t.index+1?900:void 0):this.mode===`free`?this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.snapWorld(),this.player?.spawn(t.chapter.spawn),this.ui.setChapter(e)}):(this.mode===`complete`||this.mode===`intro`)&&(this.mode===`intro`&&this.unlockAudio(),this.fadeTransition(()=>{t.goTo(e,`snap`),this.snapWorld(),this.setGuided(e,!0)}))}complete(){this.mode=`complete`,this.timeline.playing=!1,this.waitingAtEnd=!1,this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`complete`),this.ui.showCompletion()}fadeTransition(e,t){if(this.transitioning)return;this.transitioning=!0;let n=this.reducedMotion?150:t??500;this.fadeEl.style.transitionDuration=`${n}ms`,this.fadeEl.classList.add(`is-on`),window.setTimeout(()=>{this.disposed||(e(),requestAnimationFrame(()=>{this.fadeEl.classList.remove(`is-on`),window.setTimeout(()=>{this.transitioning=!1},n)}))},n)}pauseExperience(e){this.paused||(this.paused=!0,this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.stopLoop(),this.audio.suspend(),e&&this.ui.setPaused(!0),this.refreshLookHint())}resumeExperience(){this.paused&&(this.paused=!1,this.player&&(this.player.enabled=this.mode===`free`&&!this.panelOpen),this.audio.resume(),this.startLoop(),this.refreshLookHint())}onPanelChanged(e){this.panelOpen=e,e?(this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.mode===`guided`&&this.timeline.playing&&(this.timeline.playing=!1,this.resumeAfterPanel=!0)):(this.player&&(this.player.enabled=this.mode===`free`&&!this.paused),this.resumeAfterPanel&&this.mode===`guided`&&!this.waitingAtEnd&&(this.timeline.playing=!0),this.resumeAfterPanel=!1),this.refreshLookHint()}refreshLookHint(){let e=this.player,t=!!e&&this.mode===`free`&&!this.touch&&e.lockSupported&&!e.isLocked&&!this.paused&&!this.panelOpen;this.ui.setLookHint(t)}onTap(e,t){if(this.panelOpen||this.paused||!this.interactions||this.mode!==`guided`&&this.mode!==`free`)return;let n=this.interactions.pickAt(e,t,this.ctx);n&&this.ui.openInfo(n)}inspectFocused(){if(this.panelOpen||this.paused||!this.interactions)return;let e=this.interactions.focusCenter(this.ctx);e&&(this.player?.exitLock(),this.ui.openInfo(e.id))}toast(e,t=!1){let n=performance.now();!t&&n-this.lastToast<2500||(this.lastToast=n,this.ui.toast(e))}async unlockAudio(){if(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),this.settings.soundEnabled&&!await this.audio.unlock()&&this.settings.soundEnabled&&this.audio.state===`locked`){let e=()=>{this.audio.unlock()};this.listeners.add(window,`pointerdown`,e,{once:!0}),this.listeners.add(window,`keydown`,e,{once:!0})}}toggleSound(){this.settings.soundEnabled=!this.settings.soundEnabled,this.ui.setSettings(this.settings),this.applySettings([`soundEnabled`]);let e=Z().ui.app.toasts;this.toast(this.settings.soundEnabled?e.soundOn:e.soundOff,!0)}applySettings(e){if($l(this.settings),(e.includes(`soundEnabled`)||e.includes(`volume`))&&(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),this.settings.soundEnabled&&this.audio.unlock(),this.ui.setSound(this.settings.soundEnabled)),e.includes(`reducedMotion`)&&(this.reducedMotion=tu(this.settings)),e.includes(`pace`)&&(this.timeline.pace=this.settings.pace),e.includes(`arabicCaptions`)&&(this.lastCueKey=``),e.includes(`quality`)){let e=this.settings.quality===`auto`?Jl(null):this.settings.quality;this.applyQuality(Kl[e])}}applyQuality(e){let t=this.renderer,n=this.m;if(!t||!n||e===this.quality)return;let r=e.patchCell!==this.quality.patchCell||e.corridorSegments!==this.quality.corridorSegments||e.density!==this.quality.density,i=e.shadows!==this.quality.shadows;this.quality=e,this.ctx.quality=e,this.dynRes?.setProfile(e),t.shadowMap.enabled=e.shadows,i&&(n.atmosphere.moonLight.castShadow=e.shadows,this.scene.traverse(e=>{if(e instanceof ci){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}})),r&&this.toast(Z().ui.app.toasts.qualityReload,!0)}createHandlers(){return{start:e=>this.start(e),pauseChanged:e=>e?this.pauseExperience(!1):this.resumeExperience(),restartChapter:()=>{this.resumeExperience(),this.mode===`guided`||this.mode===`complete`?this.replayChapter():this.mode===`free`&&this.goToChapter(this.timeline.index)},restartExperience:()=>{this.resumeExperience(),this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.snapWorld(),this.mode===`free`?(this.player?.spawn(this.timeline.chapter.spawn),this.ui.setChapter(0)):this.setGuided(0,!0)})},toIntro:()=>{this.resumeExperience(),this.fadeTransition(()=>this.enterIntro())},selectChapter:e=>{this.resumeExperience(),this.goToChapter(e)},togglePlay:()=>{this.mode===`guided`&&(this.waitingAtEnd||this.timeline.ended?this.timeline.isLast?this.complete():this.goToChapter(this.timeline.index+1):(this.timeline.playing=!this.timeline.playing,this.ui.setGuidedState(this.timeline.playing,this.timeline.progress,!1)))},next:()=>{this.mode===`guided`&&this.timeline.isLast?this.complete():this.goToChapter(this.timeline.index+1)},prev:()=>this.goToChapter(this.timeline.index-1),replay:()=>this.replayChapter(),exploreHere:()=>{this.resumeExperience(),this.enterFree(!1);let e=this.player;e&&e.enabled&&e.lockSupported&&!this.touch&&e.requestLock()},watchGuided:()=>{this.resumeExperience(),this.replayChapter()},exitToSite:()=>this.exitToSite(),settingsChanged:(e,t)=>{Object.assign(this.settings,e),this.applySettings(t)},panelChanged:e=>this.onPanelChanged(e),inspect:()=>{this.focusId&&this.ui.openInfo(this.focusId)},requestLook:()=>{this.mode===`free`&&this.player&&!this.panelOpen&&(this.player.enabled=!0,this.player.requestLock())},toggleSound:()=>this.toggleSound()}}replayChapter(){this.fadeTransition(()=>{let e=this.timeline.index;this.timeline.goTo(e,`snap`),this.snapWorld(),this.setGuided(e,!0)})}exitToSite(){let e=this.opts.mainSiteUrl;this.dispose(),window.location.assign(e)}placeAttractCamera(e){let t=2.2+e*(this.reducedMotion?.003:.01),n=Math.cos(t)*190,r=Math.sin(t)*190,i=Math.max(Q(n,r)+26,58);this.camera.position.set(n,i,r),this.camera.up.set(0,1,0),this.camera.lookAt(0,22,0),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix())}attachGlobalListeners(){this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.listeners.add(window,`orientationchange`,()=>window.setTimeout(()=>this.resize(),250)),this.listeners.add(document,`visibilitychange`,()=>{document.hidden?this.mode===`guided`||this.mode===`free`?this.pauseExperience(!0):(this.stopLoop(),this.audio.suspend()):this.paused||(this.audio.resume(),this.startLoop())}),this.listeners.add(window,`pagehide`,()=>this.audio.suspend());let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`);if(e){let t=()=>{this.reducedMotion=tu(this.settings)};e.addEventListener(`change`,t),this.listenersCleanup.push(()=>e.removeEventListener(`change`,t))}let t=this.renderer?.domElement;t&&this.listeners.add(t,`webglcontextlost`,e=>{e.preventDefault(),this.stopLoop(),this.audio.suspend(),this.ui.showFallback(`context-lost`)})}resize(){let e=this.renderer;if(!e)return;let t=Math.max(1,this.root.clientWidth),n=Math.max(1,this.root.clientHeight);e.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}dispose(){if(this.disposed)return;this.disposed=!0,this.stopLoop(),this.listeners.removeAll();for(let e of this.listenersCleanup.splice(0))e();this.resizeObserver?.disconnect(),this.player?.dispose(),this.interactions?.dispose(),this.audio.dispose();let e=this.m;if(e)for(let t of[e.terrain,e.makkah,e.jerusalem,e.vegetation,e.light,e.atmosphere])try{t.dispose()}catch(e){console.warn(`[night-journey] dispose failed`,e)}this.proxyGeo.dispose(),this.proxyMat.dispose(),this.scene.clear(),this.renderer?.dispose(),this.renderer?.domElement.remove(),this.renderer=null,this.ui.dispose()}debug(){let e=this;return{timeline:this.timeline,camera:this.camera,scene:this.scene,env:this.env,light:this.lightSolver.pose,path:$f,ground:Q,get renderer(){return e.renderer},get modules(){return e.m},get player(){return e.player},get interactions(){return e.interactions},get audio(){return e.audio},mode:()=>this.mode,goTo:e=>this.goToChapter(e),start:e=>this.start(e),setMode:e=>this.ui.setMode(e),view:(e,t)=>{this.debugView=e&&t?{pos:e,look:t}:null},info:e=>this.ui.openInfo(e),step:(e=1,t=16.7)=>{for(let n=0;n<e;n++)this.frame(this.lastNow+t)},freeze:(e,t,n=90)=>{this.ui.closePanels(),this.paused=!1,this.mode=`guided`,this.timeline.mode=`guided`,this.waitingAtEnd=!1,this.player&&(this.player.enabled=!1,this.player.setTouchControlsVisible(!1)),this.debugView=null,this.ui.setMode(`guided`),this.ui.setChapter(e),this.timeline.goTo(e,`snap`,Math.max(0,t*yf[e].duration-n/60)),this.timeline.playing=!0,this.snapWorld(),this.director.setKeys(yf[e].camera),this.director.blendFromCurrent(0);let r=this.timeline.pace;this.timeline.pace=1;for(let e=0;e<n;e++)this.frame(this.lastNow+16.7);return this.timeline.pace=r,this.timeline.playing=!1,{chapter:e,time:this.timeline.time,camera:this.camera.position.toArray().map(e=>+e.toFixed(1))}},stats:()=>{let t=e.renderer;return t?{calls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures}:null},format:hd}}};function Wm(){try{let e=document.createElement(`canvas`).getContext(`webgl2`,{failIfMajorPerformanceCaveat:!1});return{ok:!!e,gl:e}}catch{return{ok:!1,gl:null}}}function Gm(e){try{e?.getExtension(`WEBGL_lose_context`)?.loseContext()}catch{}}var Km=`/`,qm=document.getElementById(`app`);if(qm){let e=new Um(qm,{mainSiteUrl:Km});e.boot(),new URLSearchParams(window.location.search).has(`debug`)&&(window.__nightJourney=e.debug()),window.addEventListener(`pagehide`,t=>{t.persisted||e.dispose()})}