(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,re=1027,ie=1028,ae=1029,oe=1030,se=1031,ce=1033,le=33776,ue=33777,de=33778,M=33779,fe=35840,pe=35841,me=35842,he=35843,ge=36196,_e=37492,ve=37496,ye=37488,be=37489,xe=37490,Se=37491,Ce=37808,we=37809,Te=37810,Ee=37811,De=37812,Oe=37813,ke=37814,Ae=37815,je=37816,Me=37817,Ne=37818,Pe=37819,Fe=37820,N=37821,Ie=36492,Le=36494,Re=36495,P=36283,ze=36284,F=36285,Be=36286,Ve=2300,He=2301,Ue=2302,We=2303,Ge=2400,Ke=2401,qe=2402,Je=3200,Ye=`srgb`,Xe=`srgb-linear`,Ze=`linear`,Qe=`srgb`,$e=7680,et=35044,tt=35048,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ut(...e){let t=e.join(` `);t in st||(st[t]=!0,I(...e))}function dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ft={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},pt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},mt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ht=1234567,gt=Math.PI/180,_t=180/Math.PI;function vt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[e&255]+mt[e>>8&255]+mt[e>>16&255]+mt[e>>24&255]+`-`+mt[t&255]+mt[t>>8&255]+`-`+mt[t>>16&15|64]+mt[t>>24&255]+`-`+mt[n&63|128]+mt[n>>8&255]+`-`+mt[n>>16&255]+mt[n>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function yt(e,t,n){return Math.max(t,Math.min(n,e))}function bt(e,t){return(e%t+t)%t}function xt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function St(e,t,n){return e===t?0:(n-e)/(t-e)}function Ct(e,t,n){return(1-n)*e+n*t}function wt(e,t,n,r){return Ct(e,t,1-Math.exp(-n*r))}function Tt(e,t=1){return t-Math.abs(bt(e,t*2)-t)}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ot(e,t){return e+Math.floor(Math.random()*(t-e+1))}function kt(e,t){return e+Math.random()*(t-e)}function At(e){return e*(.5-Math.random())}function jt(e){e!==void 0&&(ht=e);let t=ht+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mt(e){return e*gt}function Nt(e){return e*_t}function Pt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ft(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function It(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Lt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Bt={DEG2RAD:gt,RAD2DEG:_t,generateUUID:vt,clamp:yt,euclideanModulo:bt,mapLinear:xt,inverseLerp:St,lerp:Ct,damp:wt,pingpong:Tt,smoothstep:Et,smootherstep:Dt,randInt:Ot,randFloat:kt,randFloatSpread:At,seededRandom:jt,degToRad:Mt,radToDeg:Nt,isPowerOfTwo:Pt,ceilPowerOfTwo:Ft,floorPowerOfTwo:It,setQuaternionFromProperEuler:Lt,normalize:zt,denormalize:Rt};o=Symbol.iterator;var R=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=R,e.prototype.isVector2=!0;var Vt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var z=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ut.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ut.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ht.copy(this).projectOnVector(e),this.sub(Ht)}reflect(e){return this.sub(Ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=z,t.prototype.isVector3=!0;var Ht=new z,Ut=new Vt,Wt=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ut(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Gt.makeScale(e,t)),this}rotate(e){return ut(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Gt.makeRotation(-e)),this}translate(e,t){return ut(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Gt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=Wt,n.prototype.isMatrix3=!0;var Gt=new Wt,Kt=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qt=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jt(){let e={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Xt(e.r),e.g=Xt(e.g),e.b=Xt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Zt(e.r),e.g=Zt(e.g),e.b=Zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ut(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ut(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xe]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Kt,fromXYZ:qt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Kt,fromXYZ:qt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),e}var Yt=Jt();function Xt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Qt,$t=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qt===void 0&&(Qt=at(`canvas`)),Qt.width=e.width,Qt.height=e.height;let t=Qt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Qt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Xt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Xt(t[e]/255)*255):t[e]=Xt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},en=0,tn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:en++}),this.uuid=vt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(nn(r[t].image)):e.push(nn(r[t]))}else e=nn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function nn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?$t.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var rn=0,an=new z,on=class e extends pt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=vt(),this.name=``,this.source=new tn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(an).x}get height(){return this.source.getSize(an).y}get depth(){return this.source.getSize(an).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null,on.DEFAULT_MAPPING=300,on.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var sn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=sn,r.prototype.isVector4=!0;var cn=class extends pt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];let r=new on({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new tn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ln=class extends cn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},un=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},dn=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},fn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/pn.setFromMatrixColumn(e,0).length(),i=1/pn.setFromMatrixColumn(e,1).length(),a=1/pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hn,e,gn)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_n.crossVectors(n,yn),_n.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_n.crossVectors(n,yn)),_n.normalize(),vn.crossVectors(yn,_n),r[0]=_n.x,r[4]=vn.x,r[8]=yn.x,r[1]=_n.y,r[5]=vn.y,r[9]=yn.y,r[2]=_n.z,r[6]=vn.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*ee+s*te+c*ie,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*ee+d*te+f*ie,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*ee+h*te+g*ie,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*ee+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=pn.set(r[0],r[1],r[2]).length(),o=pn.set(r[4],r[5],r[6]).length(),s=pn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),mn.copy(this);let c=1/a,l=1/o,u=1/s;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=l,mn.elements[5]*=l,mn.elements[6]*=l,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=fn,i.prototype.isMatrix4=!0;var pn=new z,mn=new fn,hn=new z(0,0,0),gn=new z(1,1,1),_n=new z,vn=new z,yn=new z,bn=new fn,xn=new Vt,Sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-yt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xn.setFromEuler(this),this.setFromQuaternion(xn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER=`XYZ`;var Cn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},wn=0,Tn=new z,En=new Vt,Dn=new fn,On=new z,kn=new z,An=new z,jn=new Vt,Mn=new z(1,0,0),Nn=new z(0,1,0),Pn=new z(0,0,1),Fn={type:`added`},In={type:`removed`},Ln={type:`childadded`,child:null},Rn={type:`childremoved`,child:null},zn=class e extends pt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wn++}),this.uuid=vt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Sn,r=new Vt,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fn},normalMatrix:{value:new Wt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.multiply(En),this}rotateOnWorldAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.premultiply(En),this}rotateX(e){return this.rotateOnAxis(Mn,e)}rotateY(e){return this.rotateOnAxis(Nn,e)}rotateZ(e){return this.rotateOnAxis(Pn,e)}translateOnAxis(e,t){return Tn.copy(e).applyQuaternion(this.quaternion),this.position.add(Tn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mn,e)}translateY(e){return this.translateOnAxis(Nn,e)}translateZ(e){return this.translateOnAxis(Pn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?On.copy(e):On.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(kn,On,this.up):Dn.lookAt(On,kn,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),En.setFromRotationMatrix(Dn),this.quaternion.premultiply(En.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,e,An),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,jn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};zn.DEFAULT_UP=new z(0,1,0),zn.DEFAULT_MATRIX_AUTO_UPDATE=!0,zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends zn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Vn={type:`move`},Hn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Gn={h:0,s:0,l:0};function Kn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=bt(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Kn(i,r,e+1/3),this.g=Kn(i,r,e),this.b=Kn(i,r,e-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ye){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){let n=Un[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}copyLinearToSRGB(e){return this.r=Zt(e.r),this.g=Zt(e.g),this.b=Zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return Yt.workingToColorSpace(qn.copy(this),e),Math.round(yt(qn.r*255,0,255))*65536+Math.round(yt(qn.g*255,0,255))*256+Math.round(yt(qn.b*255,0,255))}getHexString(e=Ye){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(qn.copy(this),t);let n=qn.r,r=qn.g,i=qn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ye){Yt.workingToColorSpace(qn.copy(this),e);let t=qn.r,n=qn.g,r=qn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Gn);let n=Ct(Wn.h,Gn.h,t),r=Ct(Wn.s,Gn.s,t),i=Ct(Wn.l,Gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new B;B.NAMES=Un;var Jn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new B(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Yn=class extends zn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new z,Zn=new z,Qn=new z,$n=new z,er=new z,tr=new z,nr=new z,rr=new z,ir=new z,ar=new z,or=new sn,sr=new sn,cr=new sn,lr=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Xn.subVectors(r,t),Zn.subVectors(n,t),Qn.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Zn),s=Xn.dot(Qn),c=Zn.dot(Zn),l=Zn.dot(Qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)!==null&&$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,$n)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,$n.x),s.addScaledVector(a,$n.y),s.addScaledVector(o,$n.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return or.setScalar(0),sr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(or,i.x),a.addScaledVector(sr,i.y),a.addScaledVector(cr,i.z),a}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Zn.subVectors(e,t),Xn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Xn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;er.subVectors(r,n),tr.subVectors(i,n),rr.subVectors(e,n);let s=er.dot(rr),c=tr.dot(rr);if(s<=0&&c<=0)return t.copy(n);ir.subVectors(e,r);let l=er.dot(ir),u=tr.dot(ir);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(er,a);ar.subVectors(e,i);let f=er.dot(ar),p=tr.dot(ar);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(tr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return nr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(nr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ur=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,fr):fr.fromBufferAttribute(r,t),fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),xr.subVectors(this.max,br),mr.subVectors(e.a,br),hr.subVectors(e.b,br),gr.subVectors(e.c,br),_r.subVectors(hr,mr),vr.subVectors(gr,hr),yr.subVectors(mr,gr);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-yr.z,yr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,yr.z,0,-yr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-yr.y,yr.x,0];return!wr(t,mr,hr,gr,xr)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,mr,hr,gr,xr))?!1:(Sr.crossVectors(_r,vr),t=[Sr.x,Sr.y,Sr.z],wr(t,mr,hr,gr,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dr=[new z,new z,new z,new z,new z,new z,new z,new z],fr=new z,pr=new ur,mr=new z,hr=new z,gr=new z,_r=new z,vr=new z,yr=new z,br=new z,xr=new z,Sr=new z,Cr=new z;function wr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Cr.fromArray(e,a);let o=i.x*Math.abs(Cr.x)+i.y*Math.abs(Cr.y)+i.z*Math.abs(Cr.z),s=t.dot(Cr),c=n.dot(Cr),l=r.dot(Cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Tr=Er();function Er(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Dr(e){Math.abs(e)>65504&&I(`DataUtils.toHalfFloat(): Value out of range.`),e=yt(e,-65504,65504),Tr.floatView[0]=e;let t=Tr.uint32View[0],n=t>>23&511;return Tr.baseTable[n]+((t&8388607)>>Tr.shiftTable[n])}function Or(e){let t=e>>10;return Tr.uint32View[0]=Tr.mantissaTable[Tr.offsetTable[t]+(e&1023)]+Tr.exponentTable[t],Tr.floatView[0]}var kr=class{static toHalfFloat(e){return Dr(e)}static fromHalfFloat(e){return Or(e)}},Ar=new z,jr=new R,Mr=0,Nr=class extends pt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=et,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class extends Nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fr=class extends Nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ir=class extends Nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lr=new ur,Rr=new z,zr=new z,Br=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(zr)),this.expandByPoint(Rr.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vr=0,Hr=new fn,Ur=new zn,Wr=new z,Gr=new ur,Kr=new ur,qr=new z,Jr=class e extends pt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=vt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rt(e)?Fr:Pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Wt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,n){return Hr.makeTranslation(e,t,n),this.applyMatrix4(Hr),this}scale(e,t,n){return Hr.makeScale(e,t,n),this.applyMatrix4(Hr),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(qr),qr.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(qr)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(Gr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Kr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(Gr.min,Kr.min),Gr.expandByPoint(qr),qr.addVectors(Gr.max,Kr.max),Gr.expandByPoint(qr)):(Gr.expandByPoint(Kr.min),Gr.expandByPoint(Kr.max))}Gr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)qr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(qr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)qr.fromBufferAttribute(a,t),o&&(Wr.fromBufferAttribute(e,t),qr.add(Wr)),r=Math.max(r,n.distanceToSquared(qr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let c=new z,l=new z,u=new z,d=new R,f=new R,p=new R,m=new z,h=new z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new z,y=new z,b=new z,x=new z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qr.fromBufferAttribute(e,t),qr.normalize(),e.setXYZ(t,qr.x,qr.y,qr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Nr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yr=new z,Xr=new z,Zr=new Wt,Qr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yr.subVectors(n,t).cross(Xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zr.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$r=0,ei=class extends pt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=vt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$e,this.stencilZFail=$e,this.stencilZPass=$e,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Qr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ti=new z,ni=new z,ri=new z,ii=new z,ai=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=ee-ne*k,ce=O-re*k,le=A-ne*j,ue=te-re*j,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=ie*(de*D+M*k+fe*j);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new fn,ci=new ai,li=new Br,ui=new z,di=new z,fi=new z,pi=new z,mi=new z,hi=new z,gi=new z,_i=new z,vi=class extends zn{constructor(e=new Jr,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),!(li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2))&&(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=yi(e,t,n,r,di,fi,pi,gi);if(u){let e=new z;lr.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=lr.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=lr.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=lr.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};lr.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var xi=class extends on{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Si=class extends Nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ci=new fn,wi=new fn,Ti=[],Ei=new ur,Di=new fn,Oi=new vi,ki=new Br,Ai=class extends vi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ei.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ei)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),ki.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),e.ray.intersectsSphere(ki)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ci),wi.multiplyMatrices(n,Ci),Oi.matrixWorld=wi,Oi.raycast(e,Ti);for(let e=0,n=Ti.length;e<n;e++){let n=Ti[e];n.instanceId=i,n.object=this,t.push(n)}Ti.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(r*this.count),r,this.count,ie,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new Br,Mi=new R(.5,.5),Ni=new z,Pi=class{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,i=new Qr,a=new Qr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ii=new fn,Li=new ai,Ri=new Br,zi=new z,Bi=class extends zn{constructor(e=new Jr,t=new Fi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ri.copy(n.boundingSphere),Ri.applyMatrix4(r),Ri.radius+=i,e.ray.intersectsSphere(Ri)===!1)return;Ii.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Ii);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);zi.fromBufferAttribute(l,n),Vi(zi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)zi.fromBufferAttribute(l,a),Vi(zi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Vi(e,t,n,r,i,a,o){let s=Li.distanceSqToPoint(e);if(s<n){let n=new z;Li.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hi=class extends on{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends on{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wi=class extends Ui{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gi=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class e extends Jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qi=class e extends Jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ir(u,3)),this.setAttribute(`normal`,new Ir(d,3)),this.setAttribute(`uv`,new Ir(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ji=class e extends qi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ir(i,3)),this.setAttribute(`normal`,new Ir(i.slice(),3)),this.setAttribute(`uv`,new Ir(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Xi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new fn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(yt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(yt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Zi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Qi=new z,$i=new z,ea=new Zi,ta=new Zi,na=new Zi,ra=class extends Xi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:($i.subVectors(r[0],r[1]).add(r[0]),c=$i);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Qi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Qi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ea.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ta.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),na.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ea.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ta.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),na.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ea.calc(s),ta.calc(s),na.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},ia=class e extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},aa=class e extends Jr{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=yt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new z,d=new R,f=new z,p=new z,m=new z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Ir(a,3)),this.setAttribute(`uv`,new Ir(o,2)),this.setAttribute(`normal`,new Ir(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},oa=class e extends Jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},sa=class e extends Jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ca=class e extends Jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function la(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(da(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(da(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ua(e){let t={};for(let n=0;n<e.length;n++){let r=la(e[n]);for(let e in r)t[e]=r[e]}return t}function da(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function pa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var ma={clone:la,merge:ua},ha=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ga=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_a=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ha,this.fragmentShader=ga,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=fa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new sn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new fn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},va=class extends _a{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ya=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ba=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Je,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ca(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var wa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ta=class extends wa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ge,endingEnd:Ge}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ke:i=e,o=2*t-n;break;case qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ke:a=e,s=2*n-t;break;case qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ea=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Da=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oa=class extends wa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ja(n,t,g,y,r);i[p]=ka(x,o,_,b,m)}return i}};function ka(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Aa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ja(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ka(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Aa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ma=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ca(e.settings)&&(n.settings={inTangents:Sa(e.settings.inTangents,Array),outTangents:Sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ve:t=this.InterpolantFactoryMethodDiscrete;break;case He:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth;break;case We:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ve;case this.InterpolantFactoryMethodLinear:return He;case this.InterpolantFactoryMethodSmooth:return Ue;case this.InterpolantFactoryMethodBezier:return We}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ca(this.settings)&&(Na(this.settings.inTangents,e),Na(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ca(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Na(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ma.prototype.ValueTypeName=``,Ma.prototype.TimeBufferType=Float32Array,Ma.prototype.ValueBufferType=Float32Array,Ma.prototype.DefaultInterpolation=He;var Pa=class extends Ma{constructor(e,t,n){super(e,t,n)}};Pa.prototype.ValueTypeName=`bool`,Pa.prototype.ValueBufferType=Array,Pa.prototype.DefaultInterpolation=Ve,Pa.prototype.InterpolantFactoryMethodLinear=void 0,Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName=`color`;var Ia=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Ia.prototype.ValueTypeName=`number`;var La=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ra=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName=`quaternion`,Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Ma{constructor(e,t,n){super(e,t,n)}};za.prototype.ValueTypeName=`string`,za.prototype.ValueBufferType=Array,za.prototype.DefaultInterpolation=Ve,za.prototype.InterpolantFactoryMethodLinear=void 0,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName=`vector`;var Va=class extends zn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends Va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ua=new fn,Wa=new z,Ga=new z,Ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),Ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ga),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qa=new z,Ja=new Vt,Ya=new z,Xa=class extends zn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ja,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ja,Ya.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qa,Ja,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ja,Ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Za=new z,Qa=new R,$a=new R,eo=class extends Xa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_t*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _t*2*Math.atan(Math.tan(gt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,$a),t.subVectors($a,Qa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},to=class extends Xa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},no=class extends Ka{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new no}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},io=-90,ao=1,oo=class extends zn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new eo(io,ao,e,t);r.layers=this.layers,this.add(r);let i=new eo(io,ao,e,t);i.layers=this.layers,this.add(i);let a=new eo(io,ao,e,t);a.layers=this.layers,this.add(a);let o=new eo(io,ao,e,t);o.layers=this.layers,this.add(o);let s=new eo(io,ao,e,t);s.layers=this.layers,this.add(s);let c=new eo(io,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},so=class extends eo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},co=`\\[\\]\\.:\\/`,lo=RegExp(`[\\[\\]\\.:\\/]`,`g`),uo=`[^\\[\\]\\.:\\/]`,fo=`[^`+co.replace(`\\.`,``)+`]`,po=`((?:WC+[\\/:])*)`.replace(`WC`,uo),mo=`(WCOD+)?`.replace(`WCOD`,fo),ho=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,uo),go=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,uo),_o=RegExp(`^`+po+mo+ho+go+`$`),vo=[`material`,`materials`,`bones`,`map`],yo=class{constructor(e,t,n){let r=n||bo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(lo,``)}static parseTrackName(e){let t=_o.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);vo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bo.Composite=yo,bo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},bo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},bo.prototype.GetterByBindingType=[bo.prototype._getValue_direct,bo.prototype._getValue_array,bo.prototype._getValue_arrayElement,bo.prototype._getValue_toArray],bo.prototype.SetterByBindingTypeAndVersioning=[[bo.prototype._setValue_direct,bo.prototype._setValue_direct_setNeedsUpdate,bo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bo.prototype._setValue_array,bo.prototype._setValue_array_setNeedsUpdate,bo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bo.prototype._setValue_arrayElement,bo.prototype._setValue_arrayElement_setNeedsUpdate,bo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bo.prototype._setValue_fromArray,bo.prototype._setValue_fromArray_setNeedsUpdate,bo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xo=new fn,So=class{constructor(e,t,n=0,r=1/0){this.ray=new ai(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xo),this}intersectObject(e,t=!0,n=[]){return wo(e,this,n,t),n.sort(Co),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)wo(e[r],this,n,t);return n.sort(Co),n}};function Co(e,t){return e.distance-t.distance}function wo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)wo(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function To(e,t,n,r){let i=Eo(r);switch(n){case A:return e*t;case ie:return e*t/i.components*i.byteLength;case ae:return e*t/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case se:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case ce:return e*t*4/i.components*i.byteLength;case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:case he:return Math.max(e,16)*Math.max(t,8)/4;case fe:case me:return Math.max(e,8)*Math.max(t,8)/2;case ge:case _e:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case N:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ie:case Le:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*16;case P:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case F:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Eo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Do(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Oo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ko={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},V={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Ao={basic:{uniforms:ua([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.fog]),vertexShader:ko.meshbasic_vert,fragmentShader:ko.meshbasic_frag},lambert:{uniforms:ua([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:ko.meshlambert_vert,fragmentShader:ko.meshlambert_frag},phong:{uniforms:ua([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ko.meshphong_vert,fragmentShader:ko.meshphong_frag},standard:{uniforms:ua([V.common,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ko.meshphysical_vert,fragmentShader:ko.meshphysical_frag},toon:{uniforms:ua([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new B(0)}}]),vertexShader:ko.meshtoon_vert,fragmentShader:ko.meshtoon_frag},matcap:{uniforms:ua([V.common,V.bumpmap,V.normalmap,V.displacementmap,V.fog,{matcap:{value:null}}]),vertexShader:ko.meshmatcap_vert,fragmentShader:ko.meshmatcap_frag},points:{uniforms:ua([V.points,V.fog]),vertexShader:ko.points_vert,fragmentShader:ko.points_frag},dashed:{uniforms:ua([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ko.linedashed_vert,fragmentShader:ko.linedashed_frag},depth:{uniforms:ua([V.common,V.displacementmap]),vertexShader:ko.depth_vert,fragmentShader:ko.depth_frag},normal:{uniforms:ua([V.common,V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:ko.meshnormal_vert,fragmentShader:ko.meshnormal_frag},sprite:{uniforms:ua([V.sprite,V.fog]),vertexShader:ko.sprite_vert,fragmentShader:ko.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ko.background_vert,fragmentShader:ko.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:ko.backgroundCube_vert,fragmentShader:ko.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ko.cube_vert,fragmentShader:ko.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ko.equirect_vert,fragmentShader:ko.equirect_frag},distance:{uniforms:ua([V.common,V.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ko.distance_vert,fragmentShader:ko.distance_frag},shadow:{uniforms:ua([V.lights,V.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:ko.shadow_vert,fragmentShader:ko.shadow_frag}};Ao.physical={uniforms:ua([Ao.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:ko.meshphysical_vert,fragmentShader:ko.meshphysical_frag};var jo={r:0,b:0,g:0},Mo=new fn,No=new Wt;No.set(-1,0,0,0,1,0,0,0,1);function Po(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new vi(new Ki(1,1,1),new _a({name:`BackgroundCubeMaterial`,uniforms:la(Ao.backgroundCube.uniforms),vertexShader:Ao.backgroundCube.vertexShader,fragmentShader:Ao.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(No),l.material.toneMapped=Yt.getTransfer(i.colorSpace)!==Qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vi(new oa(2,2),new _a({name:`BackgroundMaterial`,uniforms:la(Ao.background.uniforms),vertexShader:Ao.background.vertexShader,fragmentShader:Ao.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(i.colorSpace)!==Qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(jo,pa(e)),n.buffers.color.setClear(jo.r,jo.g,jo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Fo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Io(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Lo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ro(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qr,s=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var zo=4,Bo=6,Vo=20,Ho=256,Uo=new to,Wo=new B,Go=null,Ko=0,qo=0,Jo=!1,Yo=new z,Xo=new z,Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Yo}=i;Go=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Ko,qo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Xe,depthBuffer:!1},r=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qo(r)),this._blurMaterial=ns(r,e,t),this._ggxMaterial=ts(r,e,t)}return r}_compileMaterial(e){let t=new vi(new Jr,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,r,i){let a=new eo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Wo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Ki,new oi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Wo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;es(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=is()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;es(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-zo?n-d+zo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,es(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Uo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,es(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Uo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];es(t,3*l*(r>this._lodMax-zo?r-this._lodMax+zo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Uo)}};function Qo(e){let t=[],n=[],r=e,i=e-zo+1+Bo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Xo.set(1,r,n):e===1?Xo.set(-n,1,-r):e===2?Xo.set(-n,r,1):e===3?Xo.set(-1,r,-n):e===4?Xo.set(-n,-1,r):Xo.set(n,r,-1),Xo.toArray(l,(e*6+t)*3)}}let u=new Jr;u.setAttribute(`position`,new Nr(c,3)),u.setAttribute(`outputDirection`,new Nr(l,3)),n.push(new vi(u,null)),r>zo&&r--}return{lodMeshes:n,sizeLods:t}}function $o(e,t,n){let r=new ln(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function es(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ts(e,t,n){return new _a({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ns(e,t,n){return new _a({name:`SphericalGaussianBlur`,defines:{SAMPLES:Vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function rs(){return new _a({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function is(){return new _a({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var os=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),i=new _a({name:`CubemapFromEquirect`,uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new oo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ss(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new os(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Zo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Zo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function cs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ut(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ls(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Fr:Pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function us(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ds(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function fs(e,t,n){let r=new WeakMap,i=new sn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new un(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new R(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ps(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ms={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function hs(e,t,n,r,i,a){let o=new ln(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Jr;l.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2));let u=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vi(l,u),f=new to(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new ln(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new ln(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Yt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ms[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var gs=new on,_s=new Ui(1,1),vs=new un,ys=new dn,bs=new Hi,xs=[],Ss=[],Cs=new Float32Array(16),ws=new Float32Array(9),Ts=new Float32Array(4);function Es(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=xs[i];if(a===void 0&&(a=new Float32Array(i),xs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ds(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Os(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ks(e,t){let n=Ss[t];n===void 0&&(n=new Int32Array(t),Ss[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2fv(this.addr,t),Os(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ds(n,t))return;e.uniform3fv(this.addr,t),Os(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4fv(this.addr,t),Os(n,t)}}function Ps(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;Ts.set(r),e.uniformMatrix2fv(this.addr,!1,Ts),Os(n,r)}}function Fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;ws.set(r),e.uniformMatrix3fv(this.addr,!1,ws),Os(n,r)}}function Is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;Cs.set(r),e.uniformMatrix4fv(this.addr,!1,Cs),Os(n,r)}}function Ls(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2iv(this.addr,t),Os(n,t)}}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ds(n,t))return;e.uniform3iv(this.addr,t),Os(n,t)}}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4iv(this.addr,t),Os(n,t)}}function Vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2uiv(this.addr,t),Os(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ds(n,t))return;e.uniform3uiv(this.addr,t),Os(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4uiv(this.addr,t),Os(n,t)}}function Gs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(_s.compareFunction=n.isReversedDepthBuffer()?518:515,a=_s):a=gs,n.setTexture2D(t||a,i)}function Ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ys,i)}function qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||bs,i)}function Js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||vs,i)}function Ys(e){switch(e){case 5126:return As;case 35664:return js;case 35665:return Ms;case 35666:return Ns;case 35674:return Ps;case 35675:return Fs;case 35676:return Is;case 5124:case 35670:return Ls;case 35667:case 35671:return Rs;case 35668:case 35672:return zs;case 35669:case 35673:return Bs;case 5125:return Vs;case 36294:return Hs;case 36295:return Us;case 36296:return Ws;case 35678:case 36198:case 36298:case 36306:case 35682:return Gs;case 35679:case 36299:case 36307:return Ks;case 35680:case 36300:case 36308:case 36293:return qs;case 36289:case 36303:case 36311:case 36292:return Js}}function Xs(e,t){e.uniform1fv(this.addr,t)}function Zs(e,t){let n=Es(t,this.size,2);e.uniform2fv(this.addr,n)}function Qs(e,t){let n=Es(t,this.size,3);e.uniform3fv(this.addr,n)}function $s(e,t){let n=Es(t,this.size,4);e.uniform4fv(this.addr,n)}function ec(e,t){let n=Es(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function tc(e,t){let n=Es(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function nc(e,t){let n=Es(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function rc(e,t){e.uniform1iv(this.addr,t)}function ic(e,t){e.uniform2iv(this.addr,t)}function ac(e,t){e.uniform3iv(this.addr,t)}function oc(e,t){e.uniform4iv(this.addr,t)}function sc(e,t){e.uniform1uiv(this.addr,t)}function cc(e,t){e.uniform2uiv(this.addr,t)}function lc(e,t){e.uniform3uiv(this.addr,t)}function uc(e,t){e.uniform4uiv(this.addr,t)}function dc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?_s:gs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function fc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ys,a[e])}function pc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||bs,a[e])}function mc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||vs,a[e])}function hc(e){switch(e){case 5126:return Xs;case 35664:return Zs;case 35665:return Qs;case 35666:return $s;case 35674:return ec;case 35675:return tc;case 35676:return nc;case 5124:case 35670:return rc;case 35667:case 35671:return ic;case 35668:case 35672:return ac;case 35669:case 35673:return oc;case 5125:return sc;case 36294:return cc;case 36295:return lc;case 36296:return uc;case 35678:case 36198:case 36298:case 36306:case 35682:return dc;case 35679:case 36299:case 36307:return fc;case 35680:case 36300:case 36308:case 36293:return pc;case 36289:case 36303:case 36311:case 36292:return mc}}var gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ys(t.type)}},_c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hc(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function bc(e,t){e.seq.push(t),e.map[t.id]=t}function xc(e,t,n){let r=e.name,i=r.length;for(yc.lastIndex=0;;){let a=yc.exec(r),o=yc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){bc(n,l===void 0?new gc(s,e,t):new _c(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new vc(s),bc(n,e)),n=e}}}var Sc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);xc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Cc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var wc=37297,Tc=0;function Ec(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Dc=new Wt;function Oc(e){Yt._getMatrix(Dc,Yt.workingColorSpace,e);let t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(e)){case Ze:return[t,`LinearTransferOETF`];case Qe:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function kc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ec(e.getShaderSource(t),r)}return i}function Ac(e,t){let n=Oc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var jc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Mc(e,t){let n=jc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Nc=new z;function Pc(){return Yt.getLuminanceCoefficients(Nc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Nc.x.toFixed(4)}, ${Nc.y.toFixed(4)}, ${Nc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Fc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Rc).join(`
`)}function Ic(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Lc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Rc(e){return e!==``}function zc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(e){return e.replace(Vc,Wc)}var Uc=new Map;function Wc(e,t){let n=ko[t];if(n===void 0){let e=Uc.get(t);if(e!==void 0)n=ko[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Hc(n)}var Gc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(e){return e.replace(Gc,qc)}function qc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Jc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Yc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Xc(e){return Yc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Zc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Qc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Zc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var $c={302:`ENVMAP_MODE_REFRACTION`};function el(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:$c[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var tl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function nl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:tl[e.combine]||`ENVMAP_BLENDING_NONE`}function rl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function il(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xc(n),l=Qc(n),u=el(n),d=nl(n),f=rl(n),p=Fc(n),m=Ic(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rc).join(`
`),_.length>0&&(_+=`
`)):(g=[Jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Rc).join(`
`),_=[Jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ko.tonemapping_pars_fragment,n.toneMapping===0?``:Mc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ko.colorspace_pars_fragment,Ac(`linearToOutputTexel`,n.outputColorSpace),Pc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Rc).join(`
`)),o=Hc(o),o=zc(o,n),o=Bc(o,n),s=Hc(s),s=zc(s,n),s=Bc(s,n),o=Kc(o),s=Kc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Cc(i,i.VERTEX_SHADER,y),S=Cc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=kc(i,x,`vertex`),n=kc(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Sc(i,h),T=Lc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,wc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var al=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sl(e),t.set(e,n)),n}},sl=class{constructor(e){this.id=al++,this.code=e,this.usedTimes=0}};function cl(e){return e===1030||e===37490||e===36285}function ll(e,t,n,r,i,a){let o=new Cn,s=new ol,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Ao[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&cl(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Yt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ao[t];n=ma.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new il(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ul(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||dl),r.length>1&&r.sort(t||fl),i.length>1&&i.sort(t||fl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ml(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pl,e.set(t,[i])):n>=r.length?(i=new pl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new B};break;case`SpotLight`:n={position:new z,direction:new z,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function gl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _l=0;function vl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yl(e){let t=new hl,n=gl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new fn,o=new fn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(vl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=V.LTC_FLOAT_1,r.rectAreaLTC2=V.LTC_FLOAT_2):(r.rectAreaLTC1=V.LTC_HALF_1,r.rectAreaLTC2=V.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=_l++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function bl(e){let t=new yl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function xl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bl(e),t.set(n,[a])):r>=i.length?(a=new bl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cl=`uniform sampler2D shadow_pass;
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
}`,wl=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Tl=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],El=new fn,Dl=new z,Ol=new z;function kl(e,t,n){let r=new Pi,i=new R,a=new R,o=new sn,s=new ba,c=new xa,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new _a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:Sl,fragmentShader:Cl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Jr;g.setAttribute(`position`,new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vi(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ln(i.x,i.y,{format:oe,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ui(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new os(i.x),d.map.depthTexture=new Wi(i.x,C)):(d.map=new ln(i.x,i.y),d.map.depthTexture=new Ui(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Dl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Dl),Ol.copy(e.position),Ol.add(wl[t]),e.up.copy(Tl[t]),e.lookAt(Ol),e.updateMatrixWorld(),n.makeTranslation(-Dl.x,-Dl.y,-Dl.z),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(El,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new ln(i.x,i.y,{format:oe,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Al(e,t){function n(){let t=!1,n=new sn,r=null,i=new sn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ft[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new sn().fromArray(oe),le=new sn().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==O&&(j&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function jl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):at(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ze:Yt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ae(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ie(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ie(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ae(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Se(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function pe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Ce(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},ge={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=de(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ye(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Yt.getPrimaries(Yt.workingColorSpace),r=o.colorSpace===``?null:Yt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Ie(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ve(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===re,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&xe(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=To(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=To(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Le(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,o,s){if(o.image.length!==6)return;let c=ye(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Yt.getPrimaries(Yt.workingColorSpace),r=o.colorSpace===``?null:Yt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ie(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);ve(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Le(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=Pe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ee(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(i.__webglFramebuffer[0],t,0):Ee(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Te(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,i){let a=r.get(t);n!==void 0&&we(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&De(t)}function ke(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Fe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)we(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ve(c,a),we(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ve(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else we(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(l),Me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ml(e,t){function n(n,r=``){let i,a=Yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Nl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pl=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _a({vertexShader:Nl,fragmentShader:Pl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends pt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Fl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new R,T=null,E=null,D=new eo;D.viewport=new sn;let O=new eo;O.viewport=new sn;let k=[D,O],A=new so,te=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Hn,x[e]=t),t.getHandSpace()};function ae(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,ie=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?re:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ln(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new Ui(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ln(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ce=new z,le=new z;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_t*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new eo,o.layers.enable(n),o.viewport=new sn,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Gi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let me=new Do;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Ll=new fn,Rl=new Wt;Rl.set(-1,0,0,0,1,0,0,0,1);function zl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,pa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ll.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Rl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Vl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hl=null;function Ul(){return Hl===null&&(Hl=new xi(Vl,16,16,oe,T),Hl.name=`DFG_LUT`,Hl.minFilter=h,Hl.magFilter=h,Hl.wrapS=u,Hl.wrapT=u,Hl.generateMipmaps=!1,Hl.needsUpdate=!0),Hl}var Wl=class{constructor(e={}){let{canvas:t=ot(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ce,se,ae]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new z,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,re=null,ie=null,oe=null,le=null;this._outputColorSpace=Ye;let ue=0,de=0,M=null,fe=-1,pe=null,me=new sn,he=new sn,ge=null,_e=new B(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new sn(0,0,ye,be),Te=new sn(0,0,ye,be),Ee=!1,De=new Pi,Oe=!1,ke=!1,Ae=new fn,je=new z,Me=new sn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,$e,et,tt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),L(`WebGLRenderer: `+e.message),e}function st(){Le=new cs(N),Le.init(),rt=new Ml(N,Le),Re=new Lo(N,Le,e,rt),P=new Al(N,Le),Re.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),ie=N.createFramebuffer(),oe=N.createFramebuffer(),le=N.createFramebuffer(),ze=new ds(N),F=new ul,Be=new jl(N,Le,P,F,Re,rt,ze),Ve=new ss(j),He=new Oo(N),it=new Fo(N,He),Ue=new ls(N,He,ze,it),We=new ps(N,Ue,He,it,ze),$e=new fs(N,Re,Be),Xe=new Ro(F),Ge=new ll(j,Ve,Le,Re,it,Xe),Ke=new zl(j,F),qe=new ml,Je=new xl(Le),Qe=new Po(j,Ve,P,We,p,s),Ze=new kl(j,We,Re),at=new Bl(N,ze,Re,P),et=new Io(N,Le,ze),tt=new us(N,Le,ze),ze.programs=Ge.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=qe,j.shadowMap=Ze,j.state=P,j.info=ze}m!==1009&&(te=new hs(m,t.width,t.height,o,r,i));let lt=new Il(j,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){lt.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,N.clearBufferuiv(N.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,N.clearBufferiv(N.COLOR,0,b))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),Qe.dispose(),qe.dispose(),Je.dispose(),F.dispose(),Ve.dispose(),We.dispose(),it.dispose(),at.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,bt),lt.removeEventListener(`sessionend`,xt),St.stop()};function ut(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),ne=!0}function ft(){ct(`WebGLRenderer: Context Restored.`),ne=!1;let e=ze.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;st(),ze.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function pt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),F.remove(e)}function gt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=He.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Oe===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),O=Je.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),re!==null&&re.updateLights(O.state.lightsArray),ke=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,ke),Oe===!0&&Xe.setGlobalState(this.clippingPlanes,t),re!==null&&Ze.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),O=A.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new Do;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,lt.setAnimationLoop(e),e===null?St.stop():St.start()},lt.addEventListener(`sessionstart`,bt),lt.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=te!==null&&(M===null||n)&&te.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),O=Je.get(e,A.length),O.init(t),O.state.textureUnits=Be.getTextureUnits(),A.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,nt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,ke),w=qe.get(e,k.length),w.init(),k.push(w),lt.enabled===!0&&lt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,j.sortObjects)}Ct(e,t,0,j.sortObjects),w.finish(),re!==null&&re.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(Se,Ce),Pe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Pe&&Qe.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Xe.beginShadows();let i=O.state.shadowsArray;if(Ze.render(i,e,t),Oe===!0&&Xe.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(w,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&Qe.render(e),wt(w,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),it.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(O=A[A.length-1],Be.setTextureUnits(O.state.textureUnits),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,re!==null&&re.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=We.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Me.z,s,t)}}else a.visible&&w.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new ln(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&Qe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,r),Et(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ge.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,j),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),At(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Sc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=O.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=jt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ul()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Nt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,xe,be,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Sc.upload(N,kt(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Sc.upload(N,kt(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=ie),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Ft(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,oe),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}};function Gl(){return{uTime:{value:0},uSunDir:{value:new z(.4,.6,.5).normalize()},uSunColor:{value:new B(1,.95,.85)},uSkyZenith:{value:new B(.25,.45,.75)},uSkyHorizon:{value:new B(.75,.8,.85)},uFogColor:{value:new B(.75,.8,.85)},uStorm:{value:0},uRain:{value:0},uWaves:{value:0},uWaterLevel:{value:1},uLightning:{value:0},uWind:{value:new R(.2,.1)},uWetness:{value:0},uArkPos:{value:new z},uArkYaw:{value:0},uArkFloat:{value:0},uArkHull:{value:0},uMudLine:{value:0}}}function Kl(e){"@babel/helpers - typeof";return Kl=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Kl(e)}function ql(e,t){if(Kl(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Kl(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Jl(e){var t=ql(e,`string`);return Kl(t)==`symbol`?t:t+``}function H(e,t,n){return(t=Jl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Yl={low:{level:`low`,minPixelRatio:.6,maxPixelRatio:1,antialias:!1,shadows:!1,shadowMapSize:512,terrainSegments:160,waterSegments:96,rainCount:1600,vegetationDensity:.45,cloudOctaves:3,drawDistance:3200},medium:{level:`medium`,minPixelRatio:.75,maxPixelRatio:1.5,antialias:!0,shadows:!0,shadowMapSize:1024,terrainSegments:224,waterSegments:160,rainCount:4e3,vegetationDensity:.75,cloudOctaves:4,drawDistance:5e3},high:{level:`high`,minPixelRatio:1,maxPixelRatio:2,antialias:!0,shadows:!0,shadowMapSize:2048,terrainSegments:300,waterSegments:220,rainCount:8e3,vegetationDensity:1,cloudOctaves:5,drawDistance:6500}};function Xl(){try{return window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>1}catch{return!1}}function Zl(e){let t=navigator,n=t.hardwareConcurrency||4,r=t.deviceMemory??4,i=Xl(),a=Math.min(window.screen.width,window.screen.height)<600,o=``;try{if(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);o=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER)||``).toLowerCase()}}catch{o=``}return/(swiftshader|llvmpipe|software|mali-4|mali-t|adreno \(tm\) [3-5]\d\d|powervr|intel\(r\) hd graphics [2-5]\d{2,3})/.test(o)||r<=2||n<=2||i&&a?`low`:i?`medium`:n>=8&&r>=8?`high`:`medium`}var Ql=class{constructor(e,t){H(this,`renderer`,void 0),H(this,`profile`,void 0),H(this,`avg`,16.7),H(this,`timer`,0),H(this,`current`,void 0),this.renderer=e,this.profile=t,this.current=Math.min(window.devicePixelRatio||1,t.maxPixelRatio),this.renderer.setPixelRatio(this.current)}get pixelRatio(){return this.current}setProfile(e){this.profile=e,this.current=Math.min(window.devicePixelRatio||1,e.maxPixelRatio),this.renderer.setPixelRatio(this.current),this.timer=0}update(e){if(e<=0||e>250||(this.avg+=(e-this.avg)*.05,this.timer+=e,this.timer<1500))return;this.timer=0;let t=Math.min(window.devicePixelRatio||1,this.profile.maxPixelRatio),n=this.current;this.avg>24?n=Math.max(this.profile.minPixelRatio,this.current-.1):this.avg<14&&this.current<t&&(n=Math.min(t,this.current+.05)),Math.abs(n-this.current)>.001&&(this.current=n,this.renderer.setPixelRatio(n))}},$l=[1,1.5,2],eu={quality:`auto`,soundEnabled:!0,volume:.8,reducedMotion:`system`,lookSensitivity:1,invertY:!1,hotspots:!0,textScale:1,seenHelp:!1,playbackSpeed:1},tu=`noahs-flood.settings.v1`;function nu(){let e={...eu};try{let t=window.localStorage.getItem(tu);if(!t)return e;let n=JSON.parse(t);(n.quality===`auto`||n.quality===`low`||n.quality===`medium`||n.quality===`high`)&&(e.quality=n.quality),typeof n.soundEnabled==`boolean`&&(e.soundEnabled=n.soundEnabled),typeof n.volume==`number`&&isFinite(n.volume)&&(e.volume=Math.min(1,Math.max(0,n.volume))),(n.reducedMotion===`system`||n.reducedMotion===`on`||n.reducedMotion===`off`)&&(e.reducedMotion=n.reducedMotion),typeof n.lookSensitivity==`number`&&isFinite(n.lookSensitivity)&&(e.lookSensitivity=Math.min(2,Math.max(.4,n.lookSensitivity))),typeof n.invertY==`boolean`&&(e.invertY=n.invertY),typeof n.hotspots==`boolean`&&(e.hotspots=n.hotspots),typeof n.textScale==`number`&&isFinite(n.textScale)&&(e.textScale=Math.min(1.4,Math.max(1,n.textScale))),typeof n.seenHelp==`boolean`&&(e.seenHelp=n.seenHelp),typeof n.playbackSpeed==`number`&&$l.includes(n.playbackSpeed)&&(e.playbackSpeed=n.playbackSpeed)}catch{}return e}function ru(e){try{window.localStorage.setItem(tu,JSON.stringify(e))}catch{}}function iu(){try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function au(e){return e.reducedMotion===`on`||e.reducedMotion!==`off`&&iu()}var ou=class{constructor(){H(this,`removers`,[])}add(e,t,n,r){e.addEventListener(t,n,r),this.removers.push(()=>e.removeEventListener(t,n,r))}removeAll(){for(;this.removers.length;)this.removers.pop()()}},su=Math.PI*2,cu=Math.PI/180;function lu(e,t,n){return e<t?t:e>n?n:e}function uu(e){return e<0?0:e>1?1:e}function du(e,t,n){return e+(t-e)*n}function U(e,t,n){let r=uu((n-e)/(t-e));return r*r*(3-2*r)}function fu(e){return-(Math.cos(Math.PI*uu(e))-1)/2}function pu(e,t,n,r){return du(e,t,1-Math.exp(-n*r))}function mu(e){return e=(e+Math.PI)%su,e<0&&(e+=su),e-Math.PI}function hu(e,t,n,r){return e+mu(t-e)*(1-Math.exp(-n*r))}function gu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function _u(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?uu(((e-n)*o+(t-r)*s)/c):0,u=e-(n+o*l),d=t-(r+s*l);return Math.sqrt(u*u+d*d)}var vu={storm:.05,rain:0,waterLevel:1,waves:.04,lightning:0,springs:0,arkBuild:0,arkPath:0,work:0,crowd:1,boarding:0,disembark:0,son:0,bigWave:0,sunElevation:38,sunAzimuth:235,haze:.1};function W(e,t,n,r,i=[]){return{at:e,dur:t,kind:n,key:r,refs:i}}var yu=Math.PI,bu=Math.PI/2,xu=[{id:`message`,duration:62,env:[{t:0,...vu},{t:1,sunElevation:34}],camera:[{t:0,pos:[-140,95,270],look:[60,10,20]},{t:.3,pos:[-50,42,170],look:[60,8,40]},{t:.65,pos:[18,10,88],look:[60,8,40]},{t:1,pos:[34,8.4,66],look:[62,8,30]}],cues:[W(2,8,`reconstruction`,`m1`),W(11,8,`quran`,`m2`,[`71:1`]),W(20,8,`quran`,`m3`,[`11:26`]),W(29,7,`quran`,`m4`,[`71:3`]),W(37,6,`quran`,`m5`,[`71:5`]),W(44,8,`quran`,`m6`,[`71:9`]),W(53,8,`quran`,`m7`,[`29:14`])],refs:[`71:1`,`71:2`,`71:3`,`11:25`,`11:26`,`23:23`,`29:14`],reading:[{surah:71,from:1,to:12},{surah:11,from:25,to:26},{surah:23,from:23,to:23},{surah:29,from:14,to:14}],spawn:{space:`world`,x:15,z:70,yaw:-.98},focus:[`settlement`,`plaza`,`people`,`mount-judi`]},{id:`rejection`,duration:58,env:[{t:0,...vu,sunElevation:34},{t:.5,crowd:.8},{t:1,crowd:.35,sunElevation:29,storm:.08}],camera:[{t:0,pos:[34,8.4,66],look:[62,8,30]},{t:.45,pos:[86,9.5,72],look:[55,7.5,28]},{t:.75,pos:[78,10,12],look:[60,7.5,26]},{t:1,pos:[95,15,20],look:[-150,16,-10]}],cues:[W(2,8,`quran`,`r1`,[`11:27`]),W(11,9,`quran`,`r2`,[`71:7`]),W(21,7,`quran`,`r3`,[`23:25`]),W(29,8,`quran`,`r4`,[`71:23`]),W(38,8,`reconstruction`,`r5`),W(47,9,`quran`,`r6`,[`11:36`])],refs:[`11:27`,`23:24`,`23:25`,`54:9`,`71:7`,`71:23`,`11:36`],reading:[{surah:11,from:27,to:36},{surah:23,from:24,to:26},{surah:54,from:9,to:9},{surah:71,from:21,to:24}],spawn:{space:`world`,x:40,z:62,yaw:-.59},focus:[`people`,`idols`,`plaza`]},{id:`construction`,duration:78,env:[{t:0,...vu,sunElevation:29,storm:.08,crowd:.35},{t:.08,arkBuild:.04,work:1},{t:.5,crowd:.45},{t:1,arkBuild:.92,work:1,crowd:.4,sunElevation:22,sunAzimuth:248,storm:.12}],camera:[{t:0,pos:[95,15,20],look:[-150,16,-10]},{t:.22,pos:[-62,30,42],look:[-150,12,-10]},{t:.55,pos:[-112,15,44],look:[-150,13,-10]},{t:.8,pos:[-205,21,32],look:[-150,12,-10]},{t:1,pos:[-212,30,-62],look:[-150,12,-10]}],cues:[W(2,7,`quran`,`b1`,[`11:37`]),W(10,7,`quran`,`b2`,[`54:13`]),W(18,10,`interpretation`,`b3`,[`54:13`]),W(29,8,`quran`,`b4`,[`11:38`]),W(38,8,`quran`,`b5`,[`11:39`]),W(47,11,`reconstruction`,`b6`),{at:59,dur:10,kind:`bible`,key:`b7`,refs:[],bible:[`Genesis 6:15`]},W(70,7,`summary`,`b8`,[`23:27`])],refs:[`11:37`,`11:38`,`11:39`,`23:27`,`54:13`],reading:[{surah:11,from:37,to:39},{surah:23,from:27,to:27},{surah:54,from:13,to:13}],spawn:{space:`world`,x:-112,z:28,yaw:.79},focus:[`ark`,`timber`,`planks-nails`]},{id:`onset`,duration:72,env:[{t:0,...vu,sunElevation:22,sunAzimuth:248,storm:.12,crowd:.4,arkBuild:.92,work:1},{t:.12,arkBuild:1,work:0},{t:.25,storm:.45,haze:.3,crowd:.25},{t:.45,storm:.7,rain:.5,springs:.6,waterLevel:2.5,lightning:.2,waves:.08},{t:.75,storm:.8,rain:.8,springs:1,waterLevel:5,crowd:0,lightning:.5,waves:.15},{t:1,storm:.8,rain:.75,springs:1,waterLevel:7,lightning:.5,waves:.2,haze:.4}],camera:[{t:0,pos:[-212,30,-62],look:[-150,12,-10]},{t:.25,pos:[-100,20,40],look:[40,30,40]},{t:.5,pos:[-18,12,58],look:[20,7,70]},{t:.75,pos:[2,15,20],look:[60,7,40]},{t:1,pos:[-90,20,-3],look:[-136,15,-9]}],cues:[W(2,7,`quran`,`o1`,[`54:10`]),W(10,7,`quran`,`o2`,[`23:26`]),W(19,7,`quran`,`o3`,[`54:11`]),W(27,9,`quran`,`o4`,[`54:12`]),W(37,8,`quran`,`o5`,[`11:40`]),W(46,11,`interpretation`,`o6`,[`11:40`,`23:27`]),W(58,10,`reconstruction`,`o7`)],refs:[`54:10`,`54:11`,`54:12`,`11:40`,`23:26`,`23:27`],reading:[{surah:54,from:10,to:12},{surah:11,from:40,to:40},{surah:23,from:26,to:27},{surah:71,from:26,to:28}],spawn:{space:`world`,x:-118,z:12,yaw:-1.73},focus:[`springs`,`rain`,`floodwaters`,`ark`]},{id:`boarding`,duration:76,env:[{t:0,...vu,sunElevation:22,sunAzimuth:248,crowd:0,arkBuild:1,storm:.8,rain:.75,springs:1,waterLevel:7,lightning:.5,waves:.2,haze:.4},{t:.05,boarding:0},{t:.93,boarding:1,waterLevel:9.5,rain:.9,storm:.88,springs:.8,waves:.25,haze:.45},{t:1,boarding:1,waterLevel:10}],camera:[{t:0,pos:[-46,9,78],look:[-14,1.5,52],space:`ark`},{t:.3,pos:[-27,2.3,47],look:[-13.6,1.3,33],space:`ark`},{t:.55,pos:[-31,5.5,22],look:[-13.6,2.6,13],space:`ark`},{t:.8,pos:[-25,7.6,5.5],look:[-12,5.8,0],space:`ark`},{t:1,pos:[-14.6,6.6,1.2],look:[-6,6.3,0],space:`ark`}],cues:[W(2,12,`quran`,`e1`,[`11:40`]),W(15,6,`quran`,`e2`,[`11:40`]),W(23,9,`quran`,`e3`,[`11:41`]),W(34,10,`interpretation`,`e4`,[`11:40`]),W(46,10,`quran`,`e5`,[`23:28`]),W(58,9,`reconstruction`,`e6`)],refs:[`11:40`,`11:41`,`23:27`,`23:28`,`23:29`],reading:[{surah:11,from:40,to:41},{surah:23,from:27,to:29}],spawn:{space:`world`,x:-111,z:-11,yaw:1.65},focus:[`boarding`,`ark`,`ark-hold`]},{id:`rising`,duration:78,env:[{t:0,...vu,sunElevation:22,sunAzimuth:248,crowd:0,arkBuild:1,boarding:1,storm:.88,rain:.9,springs:.8,waterLevel:10,lightning:.5,waves:.25,haze:.45},{t:.25,waterLevel:18,arkPath:0,waves:.4,lightning:.6,storm:.95,rain:1},{t:1,waterLevel:38,arkPath:.42,waves:.75,storm:1,lightning:.7,springs:.6,haze:.5,rain:1}],camera:[{t:0,pos:[-14.6,6.6,1.2],look:[-6,6.3,0],space:`ark`},{t:.07,pos:[-6.5,6.6,.3],look:[8.8,5.6,-1.8],space:`ark`},{t:.16,pos:[.5,6.6,-6.4],look:[8.8,5.3,-6.4],space:`ark`},{t:.25,pos:[.8,6.6,-14],look:[8.8,5.6,-15.5],space:`ark`},{t:.33,pos:[-.8,6.6,-9],look:[-8.8,5.2,-11],space:`ark`},{t:.41,pos:[-.6,6.6,9.5],look:[-8.8,5.2,11.9],space:`ark`},{t:.48,pos:[0,6.6,15],look:[0,8.5,30],space:`ark`},{t:.55,pos:[0,9.2,29],look:[0,11.5,42],space:`ark`},{t:.62,pos:[0,10.8,43],look:[0,14.5,55],space:`ark`},{t:.7,pos:[0,15.6,57],look:[0,15,70],space:`ark`},{t:.83,pos:[-10.2,15.4,42],look:[-42,8,64],space:`ark`},{t:1,pos:[-10.2,15.4,16],look:[-60,12,12],space:`ark`}],cues:[W(3,7,`quran`,`g1`,[`11:42`]),W(11,9,`reconstruction`,`g6`),W(22,8,`quran`,`g2`,[`54:14`]),W(32,7,`quran`,`g3`,[`29:14`]),W(41,11,`interpretation`,`g4`),W(55,10,`reconstruction`,`g5`)],refs:[`11:42`,`54:14`,`29:14`,`71:25`],reading:[{surah:11,from:42,to:42},{surah:54,from:14,to:14},{surah:29,from:14,to:15},{surah:71,from:25,to:25}],spawn:{space:`ark`,x:-5,z:24,yaw:yu},focus:[`floodwaters`,`ark`,`ark-hold`]},{id:`son`,duration:72,env:[{t:0,...vu,sunElevation:22,sunAzimuth:248,crowd:0,arkBuild:1,boarding:1,storm:1,rain:1,springs:.6,waterLevel:38,arkPath:.42,waves:.75,lightning:.7,haze:.5},{t:.08,son:1,rain:.85,haze:.4},{t:.45,son:1,bigWave:0,waterLevel:40,arkPath:.43},{t:.53,son:1},{t:.63,son:0,waterLevel:41.5},{t:.8,bigWave:1,waterLevel:56,waves:.85,rain:1,haze:.5},{t:1,waterLevel:60,arkPath:.44,waves:.8}],camera:[{t:0,pos:[-10.2,15.4,16],look:[168,47,-172],space:`ark`,lookSpace:`world`,fov:50},{t:.18,pos:[-10.2,15.5,13],look:[168,46.5,-172],space:`ark`,lookSpace:`world`,fov:26},{t:.4,pos:[-10.2,15.5,10],look:[166,46,-173],space:`ark`,lookSpace:`world`,fov:30},{t:.62,pos:[-10.2,15.5,8],look:[140,44,-180],space:`ark`,lookSpace:`world`,fov:48},{t:1,pos:[-10.2,15.4,6],look:[130,40,-182],space:`ark`,lookSpace:`world`,fov:55}],cues:[W(3,12,`quran`,`s1`,[`11:42`]),W(17,8,`quran`,`s2`,[`11:43`]),W(26,10,`quran`,`s3`,[`11:43`]),W(38,9,`quran`,`s4`,[`11:43`]),W(50,10,`reconstruction`,`s5`),W(62,9,`summary`,`s6`,[`11:45`,`11:46`,`11:47`])],refs:[`11:42`,`11:43`,`11:45`,`11:46`,`11:47`],reading:[{surah:11,from:42,to:47}],spawn:{space:`ark`,x:-9.8,z:16,yaw:bu},focus:[`son-hill`,`floodwaters`]},{id:`end`,duration:76,env:[{t:0,...vu,sunElevation:22,sunAzimuth:248,crowd:0,arkBuild:1,boarding:1,storm:1,rain:1,springs:.6,waterLevel:60,arkPath:.44,waves:.8,lightning:.7,bigWave:1,haze:.5},{t:.3,waterLevel:140,arkPath:.62,springs:0,sunAzimuth:160},{t:.42,rain:1,storm:1,lightning:.6},{t:.55,lightning:0},{t:.62,rain:.2},{t:.78,rain:0,storm:.35,haze:.35},{t:.9,arkPath:1},{t:1,waterLevel:104,arkPath:1,waves:.15,storm:.15,sunElevation:16,sunAzimuth:118,haze:.3}],camera:[{t:0,pos:[-10.2,15.4,6],look:[130,40,-182],space:`ark`,lookSpace:`world`},{t:.25,pos:[-85,42,-95],look:[0,8,0],space:`ark`},{t:.55,pos:[0,17,62],look:[0,15,170],space:`ark`},{t:.8,pos:[80,46,95],look:[0,8,0],space:`ark`},{t:1,pos:[40,126,-380],look:[110,103,-478]}],cues:[W(3,10,`reconstruction`,`n1`),W(16,10,`summary`,`n2`,[`11:44`]),W(30,9,`quran`,`n3`,[`11:44`]),W(41,8,`quran`,`n4`,[`11:44`]),W(52,9,`reconstruction`,`n5`),W(64,10,`reconstruction`,`n6`)],refs:[`11:44`],reading:[{surah:11,from:44,to:44},{surah:71,from:25,to:28}],spawn:{space:`ark`,x:0,z:32,yaw:yu},focus:[`rain`,`floodwaters`,`mount-judi`]},{id:`judi`,duration:84,env:[{t:0,...vu,crowd:0,arkBuild:1,boarding:1,bigWave:1,waterLevel:104,arkPath:1,waves:.15,storm:.15,sunElevation:16,sunAzimuth:118,haze:.3},{t:.22,waterLevel:97,waves:.06},{t:.36,disembark:0},{t:.6,waterLevel:50},{t:.96,disembark:1},{t:1,waterLevel:2.5,waves:.03,storm:.05,sunElevation:30,sunAzimuth:132,haze:.15}],camera:[{t:0,pos:[40,126,-380],look:[110,103,-478]},{t:.25,pos:[20,112,-420],look:[110,100,-478]},{t:.45,pos:[100,114,-426],look:[128,102,-462]},{t:.68,pos:[146,110,-424],look:[162,101,-458]},{t:.88,pos:[160,150,-360],look:[132.8,112.5,-294.8]},{t:1,pos:[150,162,-330],look:[127.8,123.9,-263.3]}],cues:[W(3,8,`quran`,`j1`,[`11:44`]),W(12,11,`interpretation`,`j2`,[`11:44`]),W(27,11,`quran`,`j3`,[`11:48`]),W(40,8,`quran`,`j4`,[`23:29`]),W(50,7,`quran`,`j5`,[`29:15`]),W(59,8,`quran`,`j6`,[`54:15`]),W(69,10,`reconstruction`,`j7`)],refs:[`11:44`,`11:48`,`23:29`,`29:15`,`54:15`],reading:[{surah:11,from:44,to:44},{surah:11,from:48,to:49},{surah:23,from:29,to:30},{surah:29,from:15,to:15},{surah:54,from:15,to:15}],spawn:{space:`ark`,x:-9.8,z:-2,yaw:bu},focus:[`mount-judi`,`ark`,`boarding`]}];xu.length;var Su={sourceKinds:{quran:{label:`Quran`,description:`A verbatim excerpt from the Pickthall translation of the cited verse.`},summary:{label:`Quranic summary`,description:`A plain summary of what the cited verses state.`},interpretation:{label:`Interpretation`,description:`An interpretation or inference by scholars; not stated explicitly in the Quran.`},bible:{label:`Bible (Genesis)`,description:`A verbatim excerpt from Genesis 6:14–16 (King James Version). Not part of the Quran: used only for the ark’s proportions and features, which the Quran does not describe.`},reconstruction:{label:`Reconstruction`,description:`An artistic choice made for this simulation, not a historical record.`}},chapters:{message:{title:`Noah's Message`,subtitle:`Calling his people to worship God alone`,cues:{m1:`This riverside town is an artistic reconstruction. The Quran does not describe where Noah’s people lived or what their homes looked like.`,m2:`Lo! We sent Noah unto his people (saying): Warn thy people ere the painful doom come unto them.`,m3:`That ye serve none, save Allah. Lo! I fear for you the retribution of a painful Day.`,m4:`Serve Allah and keep your duty unto Him and obey me`,m5:`My Lord! Lo! I have called unto my people night and day`,m6:`And lo! I have made public proclamation unto them, and I have appealed to them in private.`,m7:`he continued with them for a thousand years save fifty years`}},rejection:{title:`The Rejection`,subtitle:`His people turn away`,cues:{r1:`We see thee but a mortal like us, and we see not that any follow thee save the most abject among us, without reflection.`,r2:`they thrust their fingers in their ears and cover themselves with their garments and persist (in their refusal) and magnify themselves in pride.`,r3:`He is only a man in whom is a madness, so watch him for a while.`,r4:`Forsake not your gods. Forsake not Wadd, nor Suwa', nor Yaghuth and Ya'uq and Nasr.`,r5:`The standing stones in the square are plain placeholders. The Quran names these idols but does not describe their form, so none is depicted.`,r6:`No-one of thy folk will believe save him who hath believed already.`}},construction:{title:`Building the Ark`,subtitle:`Built under divine instruction`,cues:{b1:`Build the ship under Our eyes and by Our inspiration`,b2:`And We carried him upon a thing of planks and nails`,b3:`The Arabic word rendered “nails” (dusur) is understood by many commentators as nails; others understood it as the cords that bound the planks, or as the ship’s ribs.`,b4:`every time that chieftains of his people passed him, they made mock of him.`,b5:`And ye shall know to whom a punishment that will confound him cometh, and upon whom a lasting doom will fall.`,b6:`The Quran does not give the ark’s size or design. The form shown here follows the description in Genesis — the only ancient text that gives one. This is a choice made for the simulation, not a Quranic statement.`,b7:`The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.`,b8:`God told Noah that when His command came, he was to bring into the ship pairs of every kind and his household — except the one against whom the word had already gone forth.`}},onset:{title:`The Flood Begins`,subtitle:`Water from the sky and from the earth`,cues:{o1:`So he cried unto his Lord, saying: I am vanquished, so give help.`,o2:`My Lord! Help me because they deny me.`,o3:`Then opened We the gates of heaven with pouring water`,o4:`And caused the earth to gush forth springs, so that the waters met for a predestined purpose.`,o5:`when Our commandment came to pass and the oven gushed forth water`,o6:`Commentators differ on what “the oven” (al-tannūr) refers to; views include a literal oven, the face of the earth, the place where the water first burst out, and the break of dawn. Here it is shown as water bursting from the ground.`,o7:`The darkening storm, the springs and the speed at which the water rises are artistic depictions; the Quran does not describe them in this detail.`}},boarding:{title:`Boarding the Ark`,subtitle:`In the name of God be its course and its mooring`,cues:{e1:`Load therein two of every kind, a pair (the male and female), and thy household, save him against whom the word hath gone forth already, and those who believe.`,e2:`And but a few were they who believed with him.`,e3:`Embark therein! In the name of Allah be its course and its mooring. Lo! my Lord is Forgiving, Merciful.`,e4:`The Quran does not list the animals or say how many people boarded; scholars have discussed what “two of every kind” includes. The few pairs shown are symbolic.`,e5:`And when thou art on board the ship, thou and whoso is with thee, then say: Praise be to Allah Who hath saved us from the wrongdoing folk!`,e6:`Out of respect, Prophet Noah is not depicted. People appear only as faceless silhouettes. The Quran does not list the animals; the ten kinds shown, two of each, are symbolic.`}},rising:{title:`The Rising Waters`,subtitle:`Amid waves like mountains`,cues:{g1:`And it sailed with them amid waves like mountains`,g6:`The Quran does not describe life inside the ark. Here each pair has a room of its own on the middle storey, lit by lamps — an artistic depiction.`,g2:`That ran (upon the waters) in Our sight, as a reward for him who was rejected.`,g3:`and the flood engulfed them, for they were wrong-doers.`,g4:`Scholars have differed over whether the flood covered the whole earth or the land of Noah’s people. The simulation shows a single landscape and does not decide the question.`,g5:`The Quran describes waves “like mountains” but gives no measurements. The depth of the water and the height of the waves here are artistic.`}},son:{title:`Noah and His Son`,subtitle:`The wave came in between them`,cues:{s1:`and Noah cried unto his son - and he was standing aloof - O my son! Come ride with us, and be not with the disbelievers.`,s2:`He said: I shall betake me to some mountain that will save me from the water.`,s3:`(Noah) said: This day there is none that saveth from the commandment of Allah save him on whom He hath had mercy.`,s4:`And the wave came in between them, so he was among the drowned.`,s5:`The son is shown only as a distant silhouette. The hill, the distance and the wave are an artistic staging, not a record of how the moment looked.`,s6:`Afterwards Noah called upon his Lord concerning his son, and was answered. The verses that follow (11:45–47) can be read in the verse reader.`}},end:{title:`The End of the Flood`,subtitle:`The sky clears and the waters subside`,cues:{n1:`In this reconstruction the waters keep rising until only the highest peaks remain. The Quran does not say how high the flood rose.`,n2:`The Quran describes the end of the flood in a single verse, as a command addressed to the earth and to the sky.`,n3:`And it was said: O earth! Swallow thy water and, O sky! be cleared of clouds!`,n4:`And the water was made to subside. And the commandment was fulfilled.`,n5:`How quickly the rain stops and the water recedes here is an artistic choice; the Quran gives no timescale.`,n6:`In the simulation, the ark now drifts toward the mountain on which the Quran says it came to rest.`}},judi:{title:`Resting on al-Judi`,subtitle:`The ark comes to rest`,cues:{j1:`And it (the ship) came to rest upon (the mount) Al-Judi`,j2:`The Quran names al-Judi but does not describe it. Its location is debated; a common traditional identification is a mountain in the Jazira region of today’s south-eastern Turkey. The mountain shown here is invented.`,j3:`O Noah! Go thou down (from the mountain) with peace from Us and blessings upon thee and some nations (that will spring) from those with thee.`,j4:`My Lord! Cause me to land at a blessed landing-place, for Thou art Best of all who bring to land.`,j5:`And We rescued him and those with him in the ship, and made of it a portent for the peoples.`,j6:`And verily We left it as a token; but is there any that remembereth?`,j7:`How those in the ark came down from it is not described; the procession shown is an artistic depiction. This is the end of the guided journey — explore freely, or read the complete passages in the verse reader.`}}},objects:{settlement:{name:`The settlement`,sections:{a:`The Quran says Noah was sent to his own people to warn them and to call them to serve God alone.`,b:`This town, and the ruins left after the flood, are an artistic reconstruction. The Quran does not describe where Noah’s people lived, what their buildings looked like, or how many they were.`}},plaza:{name:`The gathering place`,sections:{a:`In Surah Nuh, Noah tells his Lord that he called his people night and day, aloud, in public and in private, urging them to seek their Lord’s pardon.`,b:`And lo! I have made public proclamation unto them, and I have appealed to them in private.`,c:`An open square is a plausible setting for a public call, but the Quran does not mention one.`}},idols:{name:`Standing stones (the idols)`,sections:{a:`Forsake not your gods. Forsake not Wadd, nor Suwa', nor Yaghuth and Ya'uq and Nasr.`,b:`A report attributed to Ibn ‘Abbas in Sahih al-Bukhari (no. 4920) says these were the names of righteous men among Noah’s people, whose images were later set up and, generations afterwards, worshipped.`,c:`These plain stones are placeholders. The Quran names the idols but does not describe their form, so no idol is depicted.`}},people:{name:`The people of Noah`,sections:{a:`We see thee but a mortal like us`,b:`they thrust their fingers in their ears and cover themselves with their garments`,c:`People appear only as distant, faceless silhouettes. Their clothing and appearance are not known and are not depicted.`}},ark:{name:`The ark`,sections:{a:`Build the ship under Our eyes and by Our inspiration`,b:`And We carried him upon a thing of planks and nails`,c:`and made of it a portent for the peoples.`,d:`The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.`,e:`and shalt pitch it within and without with pitch.`,f:`A window shalt thou make to the ark, and in a cubit shalt thou finish it above; and the door of the ark shalt thou set in the side thereof`,g:`Taking a cubit as about 46 cm (18 inches), Genesis’ figures give roughly 137 × 23 × 14 metres; longer cubits give a somewhat larger ark. Some classical Muslim commentators relayed figures for the ark from earlier scriptures and early reports (isrāʼīliyyāt), with differing numbers; the Quran itself gives none.`,h:`The box-like form (the Hebrew word for the ark, tevah, means a box or chest), the flat roof walkway, the ramp and the scaffolding are artistic choices. The window is shown as a one-cubit gap running beneath the roof — one common reading of Genesis 6:16.`}},timber:{name:`Timber`,sections:{a:`Make the ship under Our eyes and Our inspiration.`,b:`Make thee an ark of gopher wood`,c:`No one knows which tree “gopher wood” was: the Hebrew word occurs only in this verse. Cypress is a frequent suggestion. The Quran does not name the wood.`,d:`These logs, sawhorses and tools are an artistic reconstruction of ancient boat-building.`}},"planks-nails":{name:`Planks and nails`,sections:{a:`And We carried him upon a thing of planks and nails`,b:`The Arabic word dusur is understood by many commentators as nails; others understood it as the cords that bound the planks together, or as the ship’s ribs.`,c:`The shape and material of the planks and fastenings shown here are artistic choices.`}},"ark-hold":{name:`Inside the ark`,sections:{a:`Load therein two of every kind, a pair (the male and female), and thy household`,b:`In the name of Allah be its course and its mooring.`,c:`rooms shalt thou make in the ark`,d:`with lower, second, and third stories shalt thou make it.`,e:`Neither the Quran nor Genesis gives a layout. These ramps, rooms, posts and lamps — and the kinds of animals shown — are imagined.`}},springs:{name:`Water from the ground`,sections:{a:`And caused the earth to gush forth springs, so that the waters met for a predestined purpose.`,b:`the oven gushed forth water`,c:`Commentators differ on what “the oven” (al-tannūr) refers to; views include a literal oven, the face of the earth, the place where the water first burst out, and the break of dawn.`}},rain:{name:`Rain from the sky`,sections:{a:`Then opened We the gates of heaven with pouring water`,b:`Earlier, Noah had told his people that if they sought their Lord’s pardon, He would send them plentiful rain (71:10–11). Many readers note the contrast with the rain of the flood.`,c:`The strength of the storm, the lightning and their duration are artistic depictions.`}},floodwaters:{name:`The floodwaters`,sections:{a:`And caused the earth to gush forth springs, so that the waters met for a predestined purpose.`,b:`And it sailed with them amid waves like mountains`,c:`Scholars have differed over whether the flood covered the whole earth or the land of Noah’s people; the Quran’s wording has been read both ways.`,d:`The depth of the water and the size of the waves in the simulation are artistic, not measurements.`}},boarding:{name:`Those who boarded`,sections:{a:`And but a few were they who believed with him.`,b:`The Quran does not list the animals or give a number of people. Scholars have discussed what “two of every kind” includes.`,c:`People are shown only as faceless silhouettes, and the ten pairs of animals are symbolic. Prophet Noah is not depicted.`}},"son-hill":{name:`The hill`,sections:{a:`He said: I shall betake me to some mountain that will save me from the water.`,b:`And the wave came in between them, so he was among the drowned.`,c:`The hill, its distance from the ark and the son’s silhouette are an artistic staging. The Quran does not name or describe the place.`}},"mount-judi":{name:`Mount al-Judi`,sections:{a:`And it (the ship) came to rest upon (the mount) Al-Judi`,b:`The location of al-Judi is debated. A common traditional identification is a mountain in the Jazira region of today’s south-eastern Turkey; other locations have also been proposed.`,c:`This mountain is invented for the simulation and placed close by so that it can be seen. It does not reproduce any real mountain.`}}}},Cu={app:{title:`The Flood of Noah`,docTitle:`The Flood of Noah — An Interactive Quranic Journey`,tagline:`An interactive 3D journey through the Quranic account`,loading:{title:`Preparing the simulation`,renderer:`Starting the renderer`,terrain:`Shaping the land`,vegetation:`Planting trees and scattering rocks`,settlement:`Building the settlement`,ark:`Laying the keel of the ark`,figures:`Placing figures`,water:`Filling the river`,atmosphere:`Painting the sky`,audio:`Preparing sound`,shaders:`Compiling shaders`,ready:`Ready`},toasts:{tooDeep:`The water is too deep to go further.`,rescued:`The waters are rising — you have been brought aboard the ark.`,edge:`You have reached the edge of the simulated area.`,qualityReload:`Terrain and vegetation detail change after reloading the page.`,audioBlocked:`Sound is blocked by the browser. Tap anywhere to enable it.`,contextRestored:`Graphics were restored.`}},intro:{kicker:`An interactive Quranic simulation`,lead:`Walk through an artistic reconstruction of the story of Prophet Noah, peace be upon him, as told in the Quran: his call to his people, the building of the ark, the flood, his son on the hill, and the ark coming to rest on al-Judi.`,legendTitle:`How to read what you see`,depiction:`Out of respect, Prophet Noah is not depicted. Other people appear only as distant, faceless silhouettes.`,arkNote:`The Quran gives no measurements for the ark. Its proportions here follow Genesis 6:14–16, labelled “Bible (Genesis)”.`,begin:`Begin guided journey`,beginHint:`About 10 minutes, with narration and verses`,explore:`Explore freely`,exploreHint:`Walk around and inspect places and objects`,chapters:`Chapters`,settings:`Settings`,controls:`Controls`,about:`About & sources`,exit:`Return to the main website`,soundNote:`This experience has ambient sound. You can turn it off in Settings.`},hud:{chapterOf:`Chapter {n} of {total}`,references:`References`,readVerses:`Read the verses`,verses:`Verses`,chapters:`Chapters`,help:`Help`,settings:`Settings`,pause:`Pause menu`,inspectKey:`E`,inspect:`Inspect`,inspectWhat:`Inspect: {name}`,lookTitle:`Click to look around`,lookBody:`Move with W A S D or the arrow keys · Shift to run · E to inspect · Esc to release the mouse`,watchChapter:`Watch this chapter`,narration:`Narration`,captionHint:`Tap the caption to read the verses`},transport:{prev:`Previous chapter`,next:`Next chapter`,play:`Play`,pause:`Pause`,replay:`Replay chapter`,explore:`Explore here`,exploreHint:`Leave the guided journey and walk around`,progress:`Chapter progress`,speed:`Playback speed`},panels:{close:`Close`,back:`Back`,infoReadVerses:`Read the verses`,versesTitle:`The verses`,versesThisChapter:`This chapter`,versesAll:`Full passages`,versesArabicSource:`Arabic: Tanzil Quran Text (Uthmani script), tanzil.net — Creative Commons Attribution 3.0, reproduced verbatim.`,versesTranslationSource:`English: Mohammed Marmaduke Pickthall, The Meaning of the Glorious Koran (1930) — public domain.`,versesNote:`Pickthall’s English is archaic and is shown exactly as published. A translation conveys the meaning; only the Arabic is the Quran.`,tanzilLink:`Visit tanzil.net`,tafsirLabel:``,chaptersTitle:`Chapters`,chapterCurrent:`Current chapter`,chapterGo:`Go to chapter {n}`,pauseTitle:`Paused`,resume:`Resume`,restartChapter:`Restart this chapter`,restartAll:`Restart from the beginning`,mainMenu:`Main menu`,exitSite:`Return to the main website`},settings:{title:`Settings`,graphics:`Graphics`,quality:`Graphics quality`,qualityAuto:`Automatic`,qualityLow:`Low (best for older phones)`,qualityMedium:`Medium`,qualityHigh:`High`,qualityNote:`Resolution adapts automatically to keep motion smooth.`,sound:`Sound`,soundOn:`Sound on`,volume:`Volume`,comfort:`Comfort & accessibility`,motion:`Reduce motion`,motionSystem:`Follow system setting`,motionOn:`On`,motionOff:`Off`,motionNote:`Calmer camera, softer and rarer lightning, no interface animations.`,sensitivity:`Look sensitivity`,invertY:`Invert vertical look`,markers:`Show markers on inspectable places`,textSize:`Text size`,textNormal:`Normal`,textLarge:`Large`,textLarger:`Larger`,language:`Language`,languageNote:`Changing the language reloads the page and starts the experience again.`},help:{title:`Controls`,desktop:`Keyboard and mouse`,touch:`Touch screen`,guidedTitle:`Guided journey`,guided:`The camera moves by itself while the narration plays. Use the bar at the bottom to pause, replay, skip or leave the guided journey. Click or tap highlighted places to learn more — the journey pauses while you read.`,rows:[[`W A S D / arrow keys`,`Move`],[`Shift`,`Run`],[`Mouse`,`Look around (click the view first)`],[`E or click`,`Inspect what is in the centre`],[`Esc`,`Release the mouse / close a panel / pause`],[`Space`,`Play or pause the guided journey`],[`N / B`,`Next / previous chapter (guided)`],[`V`,`Read the verses for this chapter`],[`C`,`Chapters`],[`H`,`This help`],[`P`,`Pause menu`]],touchRows:[[`Left joystick`,`Move (push fully to run)`],[`Drag elsewhere`,`Look around`],[`Tap a place or marker`,`Inspect it`],[`Inspect button`,`Inspect what is in the centre`]],tip:`Glowing rings mark places you can inspect. You can turn them off in Settings.`},about:{title:`About & sources`,purposeTitle:`Purpose`,purpose:`An educational, respectful visualisation of the account of the flood in the Quran (Hud 11:25–49, Al-Mu’minun 23:23–30, Al-Qamar 54:9–15, Nuh 71:1–28, Al-‘Ankabut 29:14–15). It is not a historical or archaeological reconstruction.`,labelsTitle:`The labels`,depictionTitle:`Depiction`,depiction:`Prophet Noah is never depicted — no figure, face or voice; his words appear only as verbatim quotations of the translation, with references. Other people are distant, faceless silhouettes, and no suffering is shown. Nothing from other flood narratives is added except the ark’s design from Genesis 6:14–16, always labelled as such.`,textsTitle:`Texts`,arabic:`Arabic text: Tanzil Quran Text (Uthmani), tanzil.net, CC BY 3.0. Retrieved via api.alquran.cloud and cross-checked verse by verse against the King Fahd Complex text (api.quran.com).`,translation:`English translation: M. M. Pickthall, The Meaning of the Glorious Koran (1930), public domain; cross-checked against a second copy.`,bible:`Genesis 6:14–16: King James Version (1611), public domain; used only for the ark’s proportions and features, which the Quran does not describe.`,tanzilNotice:`Tanzil copyright notice (reproduced as required):`,assetsTitle:`Assets`,assets:`All 3D models, textures and sounds are generated by code in your browser. The Arabic font is Amiri Quran (SIL Open Font License 1.1), bundled with the site. No data is collected; settings are stored only in your browser.`,limitsTitle:`Limitations`,limits:`Distances, sizes, weather, timing and the appearance of places and people are artistic choices. The water and waves are a real-time approximation, not a physical simulation.`},complete:{title:`The journey is complete`,body:`You have followed the account of Noah and the flood as told in the Quran.`,explore:`Explore freely`,restart:`Watch again from the beginning`,passages:`Read all the passages`},fallback:{noWebglTitle:`3D graphics are not available`,noWebgl:`This simulation needs WebGL 2, which this browser or device does not provide (or it is turned off). You can still read the story and the verses below.`,lostTitle:`The graphics stopped`,lost:`The browser stopped the 3D graphics, often because the device ran low on memory. Reload to continue, or read the story below.`,errorTitle:`Something went wrong`,error:`The simulation could not start. You can reload, or read the story and the verses below.`,reload:`Reload`,storyTitle:`The story, chapter by chapter`,readVerses:`Read the verses`},kinds:{refPrefix:``,bibleSuffix:`(KJV)`,bibleBook:`Genesis`}},wu={sourceKinds:{quran:{label:`قورئان`,description:`وەرگرتنێکی دەقاودەق لە وەرگێڕانی هێڤی بۆ ئەو ئایەتەی ئاماژەی پێ کراوە.`},summary:{label:`پوختەی قورئانی`,description:`پوختەیەکی سادەی ئەوەی ئایەتە ئاماژەپێکراوەکان دەیڵێن.`},interpretation:{label:`ڕاڤە`,description:`ڕاڤە یان دەرهێنانێکی زانایان؛ لە قورئاندا بە ئاشکرا نەگوتراوە.`},bible:{label:`کتێبی پیرۆز (پەیدابوون)`,description:`ناوەڕۆکی پەیدابوون ٦:١٤–١٦ (وەشانی پاشا جەیمز) بە واتا، نەک بە دەقاودەقی. بەشێک نییە لە قورئان: تەنیا بۆ ڕێژە و تایبەتمەندییەکانی پاپۆڕەکە بەکار هاتووە، کە قورئان وەسفیان ناکات.`},reconstruction:{label:`بونیادنانەوە`,description:`هەڵبژاردنێکی هونەری کە بۆ ئەم سیمولەیشنە کراوە، نەک تۆمارێکی مێژوویی.`}},chapters:{message:{title:`پەیامەکەی نوح`,subtitle:`بانگکردنی قەومەکەی بۆ بەندایەتیی تەنیا خودا`,cues:{m1:`ئەم باژێڕەی کەناری ڕووبار بونیادنانەوەیەکی هونەرییە. قورئان باسی ئەوە ناکات کە قەومی نوح لە کوێ دەژیان یان ماڵەکانیان چۆن بوون.`,m2:`بەڕاستی نوحمان بەرەو قەومەکەی نارد: ”قەومەکەت وریا بکەرەوە پێش ئەوەی ئەشکەنجەیەکی پڕژانیان بۆ بێت.“`,m3:`بەندایەتی تەنیا بۆ خودا بکەن. بەڕاستی دەترسم ئەشکەنجەی ڕۆژێکی پڕژان بۆ سەرتان دابێت.`,m4:`بەندایەتی بۆ خودا بکەن و تەقوای بکەن و خۆویستانە بەگوێم بکەن`,m5:`پەروەردگارم! بەڕاستی شەو و ڕۆژ بانگی قەومەکەمم کرد`,m6:`دواتر بۆیانم دەرخست و بەنهێنکردنێکی تەواوەتی بۆیانم نهێن کرد`,m7:`هەزار ساڵ لەنێویاندا مایەوە — بەدەر لە پەنجا ساڵ —`}},rejection:{title:`ڕەتکردنەوە`,subtitle:`قەومەکەی پشتی تێ دەکەن`,cues:{r1:`ئێمە دەبینین تۆ تەنیا بەشەرێکی وەک خۆمانیت و نابینین کە کەس تا سەر شوێنت کەوتبێت، ئەوانە نەبن کە ڕەشوڕووتترینی ئێمەن — کەمئەقڵن —.`,r2:`پەنجەکانیان دەخستە گوێیانەوە و پۆشاکەکانیان بەسەر خۆیاندا دەدا و سوور بوون و بەخۆبەگەورەزانینێکی زۆر خۆیان زۆر بەگەورە زانی.`,r3:`بەڕاستی ئەو هیچ نییە، هەر پیاوێکە کە شێتییەکی پێوەیە، دەی تا ماوەیەک چاوەڕێی بکەن.`,r4:`واز لە پەرستراوەکانتان مەهێنن! واز لە وەد و سواع و یەغوس و یەعوق و نەسر مەهێنن!`,r5:`بەردە ڕاگیراوەکانی گۆڕەپانەکە تەنیا جێگرەوەی سادەن. قورئان ناوی ئەم بتانە دەبات بەڵام شێوەیان وەسف ناکات، بۆیە هیچیان وێنا ناکرێن.`,r6:`هەرگیز کەس لە قەومەکەت ئیمان ناهێنێت، ئەوانە نەبن کە ئیمانیان هێناوە`}},construction:{title:`چێکردنی پاپۆڕەکە`,subtitle:`بە ڕێنموونیی خودایی چێ کرا`,cues:{b1:`پاپۆڕەکە بەچاودێری ئێمە و سرووشی ئێمەوە چێ بکە`,b2:`ئەویشمان بەسەر خاوەن چەندان تەختە و بزمارەوە هەڵگرت`,b3:`ئەو وشە عەرەبییەی کە بە «بزمار» وەرگێڕدراوە (”دُسُر“)، زۆرێک لە ڕاڤەکاران بە بزمار لێی تێگەیشتوون؛ هەندێکی تر بە ئەو گوریسانە لێی تێگەیشتوون کە تەختەکانیان پێکەوە دەبەست، یان بە پەراسووەکانی پاپۆڕەکە.`,b4:`هەر کاتێک کۆمەڵێک چاوپڕکەر لە قەومەکەی بەلایدا تێبپەڕینایە، سووکایەتییان پێی دەکرد.`,b5:`جا لە داهاتوودا دەزانن کە کێ ئەشکەنجەیەکی وەهای بۆ دێت کە سەرشۆڕی دەکات و ئەشکەنجەیەکی نەبڕاوەی بەسەریدا دادێت.`,b6:`قورئان قەبارە و دیزاینی پاپۆڕەکە نادات. ئەو شێوەیەی لێرەدا پیشان دەدرێت شوێن وەسفەکەی پەیدابوون دەکەوێت — تاکە دەقی کۆن کە وەسفێکی وەهای تێدایە. ئەمە هەڵبژاردنێکە بۆ سیمولەیشنەکە، نەک گوتەیەکی قورئانی.`,b7:`لە پەیدابووندا هاتووە کە درێژیی پاپۆڕەکە ٣٠٠ گەز، پانییەکەی ٥٠ گەز و بەرزییەکەی ٣٠ گەز بێت.`,b8:`خودا بە نوحی ڕاگەیاند کە کاتێک فەرمانەکەی هات، لە هەموو جۆرێک جووتێک و کەسوکاری بخاتە نێو پاپۆڕەکەوە — جگە لەو کەسەی کە پێشتر گوتەکە بەسەریدا دەرچووە.`}},onset:{title:`دەستپێکی تۆفانەکە`,subtitle:`ئاو لە ئاسمانەوە و لە زەوییەوە`,cues:{o1:`دەستبەجێ بانگی پەروەردگاری کرد: ”من شکستم خواردووە، دەسا سەربخە.“`,o2:`پەروەردگارم! بەهۆی ئەوەوە سەرمبخە کە منیان بەدرۆزن زانیوە.`,o3:`سەرئەنجام دەرکەکانی ئاسمانمان بەئاوێکی لێزمەوە کردەوە.`,o4:`چەندان کانیاومان لە زەویدا هەڵقوڵاند؛ ئیدی ئاو(ـەکان) بەپێی فەرمانێک بە یەکتر گەیشتن کە ئەندازەی بۆ کرابوو.`,o5:`کاتێک فەرمانمان هات و تەنوور هەڵکوڵا`,o6:`ڕاڤەکاران لەسەر ئەوەی «تەنوور» ئاماژە بە چییە ڕایان جیاوازە؛ لە بۆچوونەکان: تەنووری ڕاستەقینە، ڕووی زەوی، ئەو شوێنەی ئاو یەکەمجار لێیەوە هەڵقوڵا، و سپێدەی بەرەبەیان. لێرەدا وەک ئاوێک پیشان دەدرێت کە لە زەوییەوە هەڵدەقوڵێت.`,o7:`زریانە تاریکبووەکە، کانیاوەکان و خێرایی بەرزبوونەوەی ئاو وێناکردنی هونەرین؛ قورئان بەم وردەکارییە وەسفیان ناکات.`}},boarding:{title:`سواربوونی پاپۆڕەکە`,subtitle:`بەناوی خوداوە، لە ڕۆیشتن و لەنگەرگرتنیدا`,cues:{e1:`هەموو دوو جووتێکی تێدا هەڵگرە، کەسوکاریشت — ئەو کەسە نەبێت کە پێشتر گوتەکە بەسەریدا چەسپاوە —، هەر کەسێکیش کە ئیمانی هێنابێت.`,e2:`هەرچەندە لەگەڵیدا ئیمانیان نەهێنا، تۆزێک نەبێت.`,e3:`سواری بن، بەناوی خوداوە، لە کات و شوێنی ڕۆیشتنی، لە کات و شوێنی لەنگەرگرتنیشی. بەڕاستی پەروەردگارم زاتێکی زۆر گوناهپۆش و زۆر میهربەخشە.`,e4:`قورئان ئاژەڵەکان ناژمێرێت و نالێت چەند کەس سوار بوون؛ زانایان لەبارەی ئەوەوە گفتوگۆیان کردووە کە «هەموو دوو جووتێک» چی دەگرێتەوە. ئەو چەند جووتەی پیشان دەدرێن هێمایین.`,e5:`ئینجا کاتێک خۆت و هەرکێ لەگەڵتدایە لەسەر پاپۆڕەکە هاوسەنگ بوویت، ئەوا بڵێ: ”ستایش بۆ خودا، ئەو زاتەی کە ئێمەی لەدەست قەومی زاڵمان ڕزگار کردووە.“`,e6:`لەبەر ڕێز، هەواڵدەر نوح وێنا ناکرێت. خەڵک تەنیا وەک سێبەری بێ ڕوخسار دەردەکەون. قورئان ئاژەڵەکان ناژمێرێت؛ ئەو دە جۆرەی پیشان دەدرێن، لە هەر جۆرێک دوو دانە، هێمایین.`}},rising:{title:`بەرزبوونەوەی ئاوەکان`,subtitle:`بەنێو شەپۆلی وەک شاخدا`,cues:{g1:`هەروەها بەنێو شەپۆلێکی وەهادا دەیبردن کە وەک شاخەکان بوو`,g6:`قورئان ژیانی نێو پاپۆڕەکە وەسف ناکات. لێرەدا هەر جووتێک لە نهۆمی ناوەڕاستدا ژوورێکی تایبەتی خۆی هەیە، بە چرا ڕووناک کراوەتەوە — وێناکردنێکی هونەرییە.`,g2:`کە بەچاودێریی ئێمەوە دەڕۆیشت؛ پاداشتێکی تایبەت بوو بۆ ئەو کەسەی کە ژێرەو کرا.`,g3:`سەرئەنجام تۆفانەکە گرتنی لە کاتێکدا کە زاڵم بوون.`,g4:`زانایان لەسەر ئەوە ڕایان جیاوازە کە ئایا تۆفانەکە هەموو زەویی داپۆشی یان خاکی قەومی نوح. سیمولەیشنەکە یەک دیمەنی سروشتی پیشان دەدات و ئەم پرسە یەکلایی ناکاتەوە.`,g5:`قورئان شەپۆلەکان بە «وەک شاخەکان» وەسف دەکات (هود: ٤٢) بەڵام هیچ پێوانەیەک نادات. قووڵیی ئاو و بەرزیی شەپۆلەکان لێرەدا هونەرین.`}},son:{title:`نوح و کوڕەکەی`,subtitle:`شەپۆل بە نێوانیاندا دای`,cues:{s1:`نوح هاواری بۆ کوڕەکەی کرد — لە کاتێکدا کە لە کەنارێکدا بوو —: ”ئەی کوڕی خۆشەویستم! لەگەڵمان سوار بە و لەگەڵ ڕاستیپۆشان مەبە.“`,s2:`گوتی: ”لای شاخێک پەنا دەگرم کە لەدەست ئاوەکە دەمپارێزێت!“`,s3:`گوتی: ”ئەمڕۆ هیچ ڕێبەندێک لەبەردەم فەرمانی خودادا نییە، مەگەر کەسێک کە بەر میهری خۆی خستبێت.“`,s4:`شەپۆل بە نێوانیاندا دای، ئیدی لە نوقمکراوان بوو.`,s5:`کوڕەکە تەنیا وەک سێبەرێکی دوور پیشان دەدرێت. گردەکە، دوورییەکە و شەپۆلەکە نمایشێکی هونەرین، نەک تۆمارێک لەوەی ئەو ساتە چۆن بووە.`,s6:`دواتر نوح لەبارەی کوڕەکەیەوە هاواری بۆ پەروەردگاری کرد و وەڵام درایەوە. ئەو ئایەتانەی دوای ئەوە دێن (هود: ٤٥–٤٧) لە خوێنەری ئایەتەکاندا دەخوێنرێنەوە.`}},end:{title:`کۆتایی تۆفانەکە`,subtitle:`ئاسمان ساماڵ دەبێت و ئاوەکان ڕۆدەنیشن`,cues:{n1:`لەم بونیادنانەوەیەدا ئاوەکان بەرز دەبنەوە تا تەنیا بەرزترین لووتکەکان دەمێننەوە. قورئان نالێت تۆفانەکە تا چەند بەرز بووەوە.`,n2:`قورئان کۆتایی تۆفانەکە لە یەک ئایەتدا وەسف دەکات، وەک فەرمانێک کە ڕوو لە زەوی و ئاسمان کراوە.`,n3:`گوترا: ”ئەی زەوی! ئاوەکەت قووت بدە و ئەی ئاسمان بەسی بکە.“`,n4:`ئاو ڕۆنیشت و کارەکە کۆتایی هات`,n5:`ئەوەی باران چەند خێرا دەوەستێت و ئاو چەند خێرا دەکشێتەوە لێرەدا هەڵبژاردنێکی هونەرییە؛ قورئان هیچ ماوەیەکی کات نادات.`,n6:`لە سیمولەیشنەکەدا، پاپۆڕەکە ئێستا بەرەو ئەو شاخە دەڕوات کە قورئان دەڵێت لەسەری لەنگەری گرت.`}},judi:{title:`لەنگەرگرتن لەسەر جودی`,subtitle:`پاپۆڕەکە لەنگەر دەگرێت`,cues:{j1:`بەسەر جودییەوە لەنگەری گرت`,j2:`قورئان ناوی جودی دەبات بەڵام وەسفی ناکات. شوێنەکەی جێی مشتومڕە؛ ناساندنێکی نەریتیی باو ئەوەیە کە شاخێکە لە ناوچەی جەزیرە لە باشووری ڕۆژهەڵاتی تورکیای ئەمڕۆ. ئەو شاخەی لێرەدا پیشان دەدرێت داهێنراوە.`,j3:`ئەی نوح! بەسەلامێکی تایبەت و بەرەکەتگەلێکی تایبەت بەسەر خۆت و بەسەر ئەو ئوممەتانەی کە لەگەڵتن لێی بەر بەوە`,j4:`پەروەردگارم! لە دابەزگەیەکی بەرەکەتبەخش دامبەزێنە و تۆ باشترینی دابەزێنەرانیت.`,j5:`سەرئەنجام خۆی و هاودەمانی کەشتییەکەمان ڕزگار کرد و بە نیشانەیەکی تایبەتمان بۆ جیهانیان گێڕا.`,j6:`وەک نیشانەیەکی تایبەت هێشتمانەوە؛ جا ئایا هیچ پەندوەرگرێک هەیە؟`,j7:`نەگوتراوە ئەوانەی لە پاپۆڕەکەدا بوون چۆن لێی دابەزین؛ ئەو ڕیزەی پیشان دەدرێت وێناکردنێکی هونەرییە. ئەمە کۆتایی گەشتی ڕێنمایی‌کراوە — بە ئازادی بگەڕێ، یان دەقە تەواوەکان لە خوێنەری ئایەتەکاندا بخوێنەرەوە.`}}},objects:{settlement:{name:`نیشتەجێگەکە`,sections:{a:`قورئان دەڵێت نوح بۆ قەومی خۆی نێردرا تاکو وریایان بکاتەوە و بانگیان بکات بۆ بەندایەتیی تەنیا خودا.`,b:`ئەم باژێڕە، و ئەو کاولانەی دوای تۆفانەکە دەمێننەوە، بونیادنانەوەیەکی هونەرین. قورئان باسی ئەوە ناکات کە قەومی نوح لە کوێ دەژیان، بیناکانیان چۆن بوون، یان چەند کەس بوون.`}},plaza:{name:`شوێنی کۆبوونەوە`,sections:{a:`لە سورەتی نوحدا، نوح بە پەروەردگاری دەڵێت کە شەو و ڕۆژ، بەدەنگی بەرز، بەئاشکرا و بەنهێنی بانگی قەومەکەی کردووە، و هانی داون داوای چاوپۆشی لە پەروەردگاریان بکەن.`,b:`دواتر بۆیانم دەرخست و بەنهێنکردنێکی تەواوەتی بۆیانم نهێن کرد`,c:`گۆڕەپانێکی کراوە شوێنێکی گونجاوە بۆ بانگەوازێکی ئاشکرا، بەڵام قورئان باسی ناکات.`}},idols:{name:`بەردە ڕاگیراوەکان (بتەکان)`,sections:{a:`واز لە پەرستراوەکانتان مەهێنن! واز لە وەد و سواع و یەغوس و یەعوق و نەسر مەهێنن!`,b:`گێڕانەوەیەک کە دەدرێتە پاڵ ئیبن عەبباس لە صەحیحی بوخاری (ژمارە ٤٩٢٠) دەڵێت ئەمانە ناوی پیاوانی چاک بوون لەنێو قەومی نوحدا، کە دواتر پەیکەریان بۆ دانران و، چەند نەوەیەک دواتر، پەرستران.`,c:`ئەم بەردە سادانە تەنیا جێگرەوەن. قورئان ناوی بتەکان دەبات بەڵام شێوەیان وەسف ناکات، بۆیە هیچ بتێک وێنا ناکرێت.`}},people:{name:`قەومی نوح`,sections:{a:`ئێمە دەبینین تۆ تەنیا بەشەرێکی وەک خۆمانیت`,b:`پەنجەکانیان دەخستە گوێیانەوە و پۆشاکەکانیان بەسەر خۆیاندا دەدا`,c:`خەڵک تەنیا وەک سێبەری دوور و بێ ڕوخسار دەردەکەون. جل و شێوەیان نەزانراوە و وێنا ناکرێن.`}},ark:{name:`پاپۆڕەکە`,sections:{a:`پاپۆڕەکە بەچاودێری ئێمە و سرووشی ئێمەوە چێ بکە`,b:`ئەویشمان بەسەر خاوەن چەندان تەختە و بزمارەوە هەڵگرت`,c:`بە نیشانەیەکی تایبەتمان بۆ جیهانیان گێڕا.`,d:`پەیدابوون دەڵێت درێژیی پاپۆڕەکە ٣٠٠ گەز، پانییەکەی ٥٠ گەز و بەرزییەکەی ٣٠ گەز بێت.`,e:`هەروەها دەڵێت پاپۆڕەکە لە ناوەوە و دەرەوە بە قیر سواخ بدرێت.`,f:`باسی پەنجەرەیەک دەکات کە یەک گەز لە ژێر سەرەوەی پاپۆڕەکە تەواو دەکرێت، و دەرگایەک کە لە تەنیشتی پاپۆڕەکەدا دادەنرێت.`,g:`ئەگەر هەر گەزێک نزیکەی ٤٦ سانتیمەتر (١٨ ئینج) دابنرێت، ژمارەکانی پەیدابوون نزیکەی ١٣٧ × ٢٣ × ١٤ مەتر دەدەن؛ گەزی درێژتر پاپۆڕێکی تۆزێک گەورەتر دەدات. هەندێک لە ڕاڤەکارانی کلاسیکیی موسڵمان ژمارەی جیاوازیان بۆ پاپۆڕەکە لە کتێبە ئاسمانییەکانی پێشوو و گێڕانەوە سەرەتاییەکانەوە (ئیسرائیلیات) گواستووەتەوە؛ قورئان خۆی هیچ ژمارەیەک نادات.`,h:`شێوە سندووقئاساکە (وشە عیبرییەکەی پاپۆڕەکە، ”تێڤا“، بە واتای سندووق یان قوتوو دێت)، ڕێڕەوی سەربانە تەختەکە، ڕێگا لێژەکە و داربەستەکان هەڵبژاردنی هونەرین. پەنجەرەکە وەک کەلێنێکی یەک گەزی پیشان دەدرێت کە بە ژێر سەربانەکەدا درێژ دەبێتەوە — یەکێک لە خوێندنەوە باوەکانی پەیدابوون ٦:١٦.`}},timber:{name:`دار`,sections:{a:`پاپۆڕەکە بەچاودێری و سرووشی خۆمانەوە چێ بکە`,b:`پەیدابوون فەرمان دەکات پاپۆڕەکە لە ”داری گۆفەر“ دروست بکرێت.`,c:`کەس نازانێت ”داری گۆفەر“ چ دارێک بووە: وشە عیبرییەکە تەنیا لەم شوێنەدا هاتووە. دار سەرو پێشنیارێکی باوە. قورئان ناوی دارەکە نابات.`,d:`ئەم دارانە، پایەکانی داربڕین و ئامرازەکان بونیادنانەوەیەکی هونەریی پاپۆڕسازیی کۆنن.`}},"planks-nails":{name:`تەختە و بزمار`,sections:{a:`ئەویشمان بەسەر خاوەن چەندان تەختە و بزمارەوە هەڵگرت`,b:`زۆرێک لە ڕاڤەکاران وشە عەرەبییەکەی ”دُسُر“ بە بزمار لێک دەدەنەوە؛ هەندێکی تر بە ئەو گوریسانە لێکیان داوەتەوە کە تەختەکانیان پێکەوە دەبەست، یان بە پەراسووەکانی پاپۆڕەکە.`,c:`شێوە و کەرەستەی تەختە و بەستەرەکان کە لێرەدا پیشان دەدرێن هەڵبژاردنی هونەرین.`}},"ark-hold":{name:`نێو پاپۆڕەکە`,sections:{a:`هەموو دوو جووتێکی تێدا هەڵگرە، کەسوکاریشت`,b:`بەناوی خوداوە، لە کات و شوێنی ڕۆیشتنی، لە کات و شوێنی لەنگەرگرتنیشی.`,c:`پەیدابوون دەڵێت پاپۆڕەکە ژووری تێدا دروست بکرێت.`,d:`هەروەها دەڵێت سێ نهۆمی هەبێت: خوارەوە، دووەم و سێیەم.`,e:`نە قورئان و نە پەیدابوون نەخشەی ناوەوە نادەن. ئەم ڕێگا لێژانە، ژوورەکان، کۆڵەکەکان و چراکان — و ئەو جۆرە ئاژەڵانەی پیشان دەدرێن — خەیاڵکراون.`}},springs:{name:`ئاو لە زەوییەوە`,sections:{a:`چەندان کانیاومان لە زەویدا هەڵقوڵاند؛ ئیدی ئاو(ـەکان) بەپێی فەرمانێک بە یەکتر گەیشتن کە ئەندازەی بۆ کرابوو.`,b:`تەنوور هەڵکوڵا`,c:`ڕاڤەکاران لەسەر ئەوەی «تەنوور» ئاماژە بە چییە ڕایان جیاوازە؛ لە بۆچوونەکان: تەنووری ڕاستەقینە، ڕووی زەوی، ئەو شوێنەی ئاو یەکەمجار لێیەوە هەڵقوڵا، و سپێدەی بەرەبەیان.`}},rain:{name:`باران لە ئاسمانەوە`,sections:{a:`سەرئەنجام دەرکەکانی ئاسمانمان بەئاوێکی لێزمەوە کردەوە.`,b:`پێشتر نوح بە قەومەکەی گوتبوو ئەگەر داوای چاوپۆشی لە پەروەردگاریان بکەن، بارانی بەلێزمەیان بۆ دەنێرێت (نوح: ١٠–١١). زۆرێک لە خوێنەران سەرنجی جیاوازیی نێوان ئەو بارانە و بارانی تۆفانەکە دەدەن.`,c:`هێزی زریانەکە، بروسکەکان و ماوەکەیان وێناکردنی هونەرین.`}},floodwaters:{name:`ئاوی تۆفانەکە`,sections:{a:`چەندان کانیاومان لە زەویدا هەڵقوڵاند؛ ئیدی ئاو(ـەکان) بەپێی فەرمانێک بە یەکتر گەیشتن کە ئەندازەی بۆ کرابوو.`,b:`هەروەها بەنێو شەپۆلێکی وەهادا دەیبردن کە وەک شاخەکان بوو`,c:`زانایان لەسەر ئەوە ڕایان جیاوازە کە ئایا تۆفانەکە هەموو زەویی داپۆشی یان خاکی قەومی نوح؛ دەربڕینی قورئان بە هەردوو شێوە خوێندراوەتەوە.`,d:`قووڵیی ئاو و قەبارەی شەپۆلەکان لە سیمولەیشنەکەدا هونەرین، نەک پێوانە.`}},boarding:{name:`ئەوانەی سوار بوون`,sections:{a:`هەرچەندە لەگەڵیدا ئیمانیان نەهێنا، تۆزێک نەبێت.`,b:`قورئان ئاژەڵەکان ناژمێرێت و ژمارەی خەڵک نادات. زانایان لەبارەی ئەوەوە گفتوگۆیان کردووە کە «هەموو دوو جووتێک» چی دەگرێتەوە.`,c:`خەڵک تەنیا وەک سێبەری بێ ڕوخسار پیشان دەدرێن، و دە جووتە ئاژەڵەکە هێمایین. هەواڵدەر نوح وێنا ناکرێت.`}},"son-hill":{name:`گردەکە`,sections:{a:`گوتی: ”لای شاخێک پەنا دەگرم کە لەدەست ئاوەکە دەمپارێزێت!“`,b:`شەپۆل بە نێوانیاندا دای، ئیدی لە نوقمکراوان بوو.`,c:`گردەکە، دووریی لە پاپۆڕەکەوە و سێبەری کوڕەکە نمایشێکی هونەرین. قورئان ناوی شوێنەکە نابات و وەسفی ناکات.`}},"mount-judi":{name:`شاخی جودی`,sections:{a:`بەسەر جودییەوە لەنگەری گرت`,b:`شوێنی جودی جێی مشتومڕە. ناساندنێکی نەریتیی باو ئەوەیە کە شاخێکە لە ناوچەی جەزیرە لە باشووری ڕۆژهەڵاتی تورکیای ئەمڕۆ؛ شوێنی تریش پێشنیار کراون.`,c:`ئەم شاخە بۆ سیمولەیشنەکە داهێنراوە و لە نزیکەوە دانراوە تاکو ببینرێت. لاسایی هیچ شاخێکی ڕاستەقینە ناکاتەوە.`}}}},Tu={app:{title:`تۆفانەکەی نوح`,docTitle:`تۆفانەکەی نوح — گەشتێکی قورئانیی کارلێککار`,tagline:`گەشتێکی سێڕەهەندیی کارلێککار بەنێو گێڕانەوەی قورئاندا`,loading:{title:`ئامادەکردنی سیمولەیشنەکە`,renderer:`دەستپێکردنی وێنەکێش`,terrain:`شێوەدانی زەوی`,vegetation:`چاندنی دار و بڵاوکردنەوەی بەرد`,settlement:`بنیاتنانی نیشتەجێگەکە`,ark:`دانانی بناغەی پاپۆڕەکە`,figures:`دانانی کەسەکان`,water:`پڕکردنی ڕووبارەکە`,atmosphere:`ڕەنگکردنی ئاسمان`,audio:`ئامادەکردنی دەنگ`,shaders:`ئامادەکردنی شەیدەرەکان`,ready:`ئامادەیە`},toasts:{tooDeep:`ئاوەکە زۆر قووڵە و ناتوانیت لەوە زیاتر بچیت.`,rescued:`ئاوەکان بەرز دەبنەوە — هێنرایتە سەر پاپۆڕەکە.`,edge:`گەیشتیتە سنووری ناوچەی سیمولەیشنەکە.`,qualityReload:`وردەکاریی زەوی و ڕووەک دوای دووبارە بارکردنەوەی پەڕەکە دەگۆڕێت.`,audioBlocked:`وێبگەڕەکە دەنگی ڕاگرتووە. بۆ چالاککردنی لە هەر شوێنێک دەست بدە.`,contextRestored:`وێنەکان گەڕێنرانەوە.`}},intro:{kicker:`سیمولەیشنێکی قورئانیی کارلێککار`,lead:`بەنێو بونیادنانەوەیەکی هونەریی بەسەرهاتی هەواڵدەر نوحدا بگەڕێ، وەک لە قورئاندا گێڕدراوەتەوە: بانگەوازەکەی بۆ قەومەکەی، چێکردنی پاپۆڕەکە، تۆفانەکە، کوڕەکەی لەسەر گردەکە، و لەنگەرگرتنی پاپۆڕەکە لەسەر جودی.`,legendTitle:`چۆن ئەوەی دەیبینیت بخوێنیتەوە`,depiction:`لەبەر ڕێز، هەواڵدەر نوح وێنا ناکرێت. خەڵکی تر تەنیا وەک سێبەری دوور و بێ ڕوخسار دەردەکەون.`,arkNote:`قورئان هیچ پێوانەیەک بۆ پاپۆڕەکە نادات. ڕێژەکانی لێرەدا شوێن پەیدابوون ٦:١٤–١٦ دەکەون، بە نیشانەی ”کتێبی پیرۆز (پەیدابوون)“.`,begin:`دەستپێکردنی گەشتی ڕێنمایی‌کراو`,beginHint:`نزیکەی ١٠ خولەک، بە گێڕانەوە و ئایەتەوە`,explore:`گەڕانی ئازاد`,exploreHint:`بە دەوروبەردا بگەڕێ و شوێن و شتەکان بپشکنە`,chapters:`بەشەکان`,settings:`ڕێکخستنەکان`,controls:`کۆنترۆڵەکان`,about:`دەربارە و سەرچاوەکان`,exit:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`,soundNote:`ئەم ئەزموونە دەنگی دەوروبەری تێدایە. دەتوانیت لە ڕێکخستنەکاندا بیکوژێنیتەوە.`},hud:{chapterOf:`بەشی {n} لە {total}`,references:`سەرچاوەکان`,readVerses:`خوێندنەوەی ئایەتەکان`,verses:`ئایەتەکان`,chapters:`بەشەکان`,help:`یارمەتی`,settings:`ڕێکخستنەکان`,pause:`لیستی وەستان`,inspectKey:`E`,inspect:`پشکنین`,inspectWhat:`پشکنین: {name}`,lookTitle:`کرتە بکە بۆ سەیرکردنی دەوروبەر`,lookBody:`بە W A S D یان کلیلە تیرەکان بجووڵێ • Shift بۆ ڕاکردن • E بۆ پشکنین • Esc بۆ ئازادکردنی ماوس`,watchChapter:`سەیرکردنی ئەم بەشە`,narration:`گێڕانەوە`,captionHint:`بۆ خوێندنەوەی ئایەتەکان دەست لە نووسینەکە بدە`},transport:{prev:`بەشی پێشوو`,next:`بەشی دواتر`,play:`لێدان`,pause:`وەستان`,replay:`دووبارەکردنەوەی بەشەکە`,explore:`لێرە بگەڕێ`,exploreHint:`گەشتی ڕێنمایی‌کراو جێبهێڵە و بە دەوروبەردا بگەڕێ`,progress:`ڕەوتی بەشەکە`,speed:`خێرایی لێدان`},panels:{close:`داخستن`,back:`گەڕانەوە`,infoReadVerses:`خوێندنەوەی ئایەتەکان`,versesTitle:`ئایەتەکان`,versesThisChapter:`ئەم بەشە`,versesAll:`دەقە تەواوەکان`,versesArabicSource:`عەرەبی: دەقی قورئانی تەنزیل (ڕێنووسی عوسمانی)، tanzil.net — CC BY 3.0، وەک خۆی گواستراوەتەوە.`,versesTranslationSource:`کوردی: وەرگێڕانی هێڤی، لە ئەلەند کاوە عەلی ئەحمەدەوە (Aland Kawa Ali Ahmad) — بە ڕەزامەندیی وەرگێڕ بەکار هاتووە.`,versesNote:`وەرگێڕان واتاکە دەگەیەنێت؛ تەنیا دەقە عەرەبییەکە قورئانە.`,tanzilLink:`سەردانی tanzil.net بکە`,tafsirLabel:`ڕاڤە:`,chaptersTitle:`بەشەکان`,chapterCurrent:`بەشی ئێستا`,chapterGo:`چوون بۆ بەشی {n}`,pauseTitle:`وەستێنراوە`,resume:`بەردەوامبوون`,restartChapter:`ئەم بەشە لە سەرەتاوە`,restartAll:`لە سەرەتاوە دەست پێ بکەرەوە`,mainMenu:`لیستی سەرەکی`,exitSite:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`},settings:{title:`ڕێکخستنەکان`,graphics:`وێنە`,quality:`کوالیتیی وێنە`,qualityAuto:`خۆکار`,qualityLow:`نزم (باشترین بۆ مۆبایلی کۆن)`,qualityMedium:`مامناوەند`,qualityHigh:`بەرز`,qualityNote:`ڕوونی بەشێوەی خۆکار دەگۆڕێت تاکو جووڵە ڕەوان بمێنێتەوە.`,sound:`دەنگ`,soundOn:`دەنگ داگیرساو`,volume:`بەرزیی دەنگ`,comfort:`ئاسوودەیی و دەستڕاگەیشتن`,motion:`کەمکردنەوەی جووڵە`,motionSystem:`شوێن ڕێکخستنی سیستەم بکەوە`,motionOn:`داگیرساو`,motionOff:`کوژاوە`,motionNote:`کامێرای هێمنتر، بروسکەی نەرمتر و کەمتر، بێ جووڵەی ڕووکار.`,sensitivity:`هەستیاریی سەیرکردن`,invertY:`پێچەوانەکردنەوەی سەیرکردنی ستوونی`,markers:`پیشاندانی نیشانە لەسەر شوێنە پشکنراوەکان`,textSize:`قەبارەی نووسین`,textNormal:`ئاسایی`,textLarge:`گەورە`,textLarger:`گەورەتر`,language:`زمان`,languageNote:`گۆڕینی زمان پەڕەکە دووبارە بار دەکاتەوە و ئەزموونەکە لە سەرەتاوە دەست پێ دەکاتەوە.`},help:{title:`کۆنترۆڵەکان`,desktop:`تەختەکلیل و ماوس`,touch:`شاشەی دەستلێدان`,guidedTitle:`گەشتی ڕێنمایی‌کراو`,guided:`کامێراکە خۆی دەجووڵێت لە کاتێکدا گێڕانەوەکە بەڕێوە دەچێت. شریتەکەی خوارەوە بەکار بهێنە بۆ وەستان، دووبارەکردنەوە، تێپەڕاندن یان جێهێشتنی گەشتی ڕێنمایی‌کراو. کرتە بکە یان دەست بدە لە شوێنە ڕووناککراوەکان بۆ زانیاریی زیاتر — گەشتەکە دەوەستێت تا دەخوێنیتەوە.`,rows:[[`W A S D / کلیلە تیرەکان`,`جووڵان`],[`Shift`,`ڕاکردن`],[`ماوس`,`سەیرکردنی دەوروبەر (سەرەتا کرتە لە دیمەنەکە بکە)`],[`E یان کرتە`,`پشکنینی ئەوەی لە ناوەڕاستدایە`],[`Esc`,`ئازادکردنی ماوس / داخستنی پەنجەرە / وەستان`],[`Space`,`لێدان یان وەستانی گەشتی ڕێنمایی‌کراو`],[`N / B`,`بەشی دواتر / پێشوو (ڕێنمایی‌کراو)`],[`V`,`خوێندنەوەی ئایەتەکانی ئەم بەشە`],[`C`,`بەشەکان`],[`H`,`ئەم یارمەتییە`],[`P`,`لیستی وەستان`]],touchRows:[[`دەستەی چەپ`,`جووڵان (بۆ ڕاکردن تا کۆتایی پاڵی پێوە بنێ)`],[`ڕاکێشان لە شوێنێکی تر`,`سەیرکردنی دەوروبەر`],[`دەستدان لە شوێنێک یان نیشانەیەک`,`پشکنینی`],[`دوگمەی پشکنین`,`پشکنینی ئەوەی لە ناوەڕاستدایە`]],tip:`ئەڵقە درەوشاوەکان شوێنی پشکنراو نیشان دەدەن. دەتوانیت لە ڕێکخستنەکاندا بیانکوژێنیتەوە.`},about:{title:`دەربارە و سەرچاوەکان`,purposeTitle:`مەبەست`,purpose:`وێناکردنێکی فێرکاری و بەڕێزی گێڕانەوەی تۆفانەکە لە قورئاندا (هود: ٢٥–٤٩؛ المؤمنون: ٢٣–٣٠؛ القمر: ٩–١٥؛ نوح: ١–٢٨؛ العنكبوت: ١٤–١٥). بونیادنانەوەیەکی مێژوویی یان شوێنەواریی نییە.`,labelsTitle:`نیشانەکان`,depictionTitle:`وێناکردن`,depiction:`هەواڵدەر نوح هەرگیز وێنا ناکرێت — نە پەیکەر، نە ڕوخسار، نە دەنگ؛ گوتەکانی تەنیا وەک وەرگرتنی دەقاودەقی وەرگێڕانەکە، لەگەڵ سەرچاوە، دەردەکەون. خەڵکی تر سێبەری دوور و بێ ڕوخسارن، و هیچ ئازارێک پیشان نادرێت. لە گێڕانەوەکانی تری تۆفان هیچ شتێک زیاد نەکراوە، جگە لە دیزاینی پاپۆڕەکە لە پەیدابوون ٦:١٤–١٦، کە هەمیشە بەو شێوەیە نیشانە کراوە.`,textsTitle:`دەقەکان`,arabic:`دەقی عەرەبی: دەقی قورئانی تەنزیل (عوسمانی)، tanzil.net، CC BY 3.0. لە api.alquran.cloud وەرگیراوە و ئایەت بە ئایەت لەگەڵ دەقی کۆمەڵگەی پاشا فەهد (api.quran.com) بەراورد کراوە.`,translation:`وەرگێڕانی کوردی: وەرگێڕانی هێڤی، لە ئەلەند کاوە عەلی ئەحمەدەوە (Aland Kawa Ali Ahmad). هەموو مافێک پارێزراوە؛ لەم ئەزموونەدا بە ڕەزامەندیی وەرگێڕ بەکار هاتووە. ئەوەی بە ”قورئان“ نیشانە کراوە، وەرگرتنی دەقاودەقی ئەم وەرگێڕانەیە. (وەشانی ئینگلیزی وەرگێڕانی م. م. پیکتاڵ (١٩٣٠) بەکار دەهێنێت.)`,bible:`پەیدابوون ٦:١٤–١٦: لە وەشانی پاشا جەیمز (١٦١١)، کە موڵکی گشتییە؛ تەنیا بۆ ڕێژە و تایبەتمەندییەکانی پاپۆڕەکە بەکار هاتووە، کە قورئان وەسفیان ناکات. لە وەشانی کوردیدا ناوەڕۆکەکەی بە کورتی دەگوترێتەوە، نەک وەک وەرگرتنی دەقاودەق.`,tanzilNotice:`ئاگاداریی مافی لەبەرگرتنەوەی تەنزیل (وەک پێویستە دووبارە کراوەتەوە):`,assetsTitle:`کەرەستەکان`,assets:`هەموو مۆدێلە سێڕەهەندییەکان، ڕووکارەکان و دەنگەکان بە کۆد لە وێبگەڕەکەتدا دروست دەکرێن. فۆنتی عەرەبی Amiri Quran ـە و فۆنتی کوردی و عەرەبیی ڕووکارەکە Vazirmatn ـە (هەردووکیان SIL Open Font License 1.1)، لەگەڵ ماڵپەڕەکەدا هاتوون. هیچ زانیارییەک کۆ ناکرێتەوە؛ ڕێکخستنەکان تەنیا لە وێبگەڕەکەتدا هەڵدەگیرێن.`,limitsTitle:`سنوورەکان`,limits:`دووری، قەبارە، کەشوهەوا، کات و شێوەی شوێنەکان و خەڵک هەڵبژاردنی هونەرین. ئاو و شەپۆلەکان نزیککردنەوەیەکی کاتی ڕاستەقینەن، نەک سیمولەیشنێکی فیزیکی.`},complete:{title:`گەشتەکە تەواو بوو`,body:`شوێن بەسەرهاتی نوح و تۆفانەکە کەوتیت وەک لە قورئاندا گێڕدراوەتەوە.`,explore:`گەڕانی ئازاد`,restart:`دووبارە سەیرکردنەوە لە سەرەتاوە`,passages:`خوێندنەوەی هەموو دەقەکان`},fallback:{noWebglTitle:`وێنەی سێڕەهەندی بەردەست نییە`,noWebgl:`ئەم سیمولەیشنە پێویستی بە WebGL 2 هەیە، کە ئەم وێبگەڕە یان ئامێرە دابینی ناکات (یان کوژاوەتەوە). هێشتا دەتوانیت بەسەرهاتەکە و ئایەتەکان لە خوارەوە بخوێنیتەوە.`,lostTitle:`وێنەکان وەستان`,lost:`وێبگەڕەکە وێنە سێڕەهەندییەکانی ڕاگرت، زۆرجار لەبەر ئەوەی بیرگەی ئامێرەکە کەم بووەتەوە. بۆ بەردەوامبوون دووبارە باری بکەرەوە، یان بەسەرهاتەکە لە خوارەوە بخوێنەرەوە.`,errorTitle:`هەڵەیەک ڕووی دا`,error:`سیمولەیشنەکە نەیتوانی دەست پێ بکات. دەتوانیت دووبارە باری بکەیتەوە، یان بەسەرهاتەکە و ئایەتەکان لە خوارەوە بخوێنیتەوە.`,reload:`دووبارە بارکردنەوە`,storyTitle:`بەسەرهاتەکە، بەش بە بەش`,readVerses:`خوێندنەوەی ئایەتەکان`},kinds:{refPrefix:``,bibleSuffix:`(بە واتا)`,bibleBook:`پەیدابوون`}},Eu={sourceKinds:{quran:{label:`القرآن`,description:`مقطع من نص الآية المشار إليها.`},summary:{label:`خلاصة قرآنية`,description:`خلاصة مبسّطة لما تنص عليه الآيات المشار إليها.`},interpretation:{label:`تفسير`,description:`تفسير أو استنباط من أهل العلم، لم يُصرَّح به في القرآن.`},bible:{label:`الكتاب المقدس (سفر التكوين)`,description:`مضمون من سفر التكوين ٦:١٤–١٦ (ترجمة الملك جيمس) يُذكر بالمعنى لا بالنص. وليس من القرآن: يُستعمل فقط لنِسَب السفينة وخصائصها التي لم يصفها القرآن.`},reconstruction:{label:`إعادة بناء فنية`,description:`اختيار فني في هذه المحاكاة، وليس سجلًّا تاريخيًّا.`}},chapters:{message:{title:`رسالة نوح`,subtitle:`دعوة قومه إلى عبادة الله وحده`,cues:{m1:`هذه البلدة على ضفة النهر إعادة بناء فنية. ولا يصف القرآن أين سكن قوم نوح عليه السلام ولا هيئة بيوتهم.`,m2:`إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ أَنْ أَنْذِرْ قَوْمَكَ مِنْ قَبْلِ أَنْ يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ`,m3:`أَنْ لَا تَعْبُدُوا إِلَّا اللَّهَ ۖ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ أَلِيمٍ`,m4:`أَنِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ وَأَطِيعُونِ`,m5:`رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا`,m6:`ثُمَّ إِنِّي أَعْلَنْتُ لَهُمْ وَأَسْرَرْتُ لَهُمْ إِسْرَارًا`,m7:`فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا`}},rejection:{title:`التكذيب`,subtitle:`قومه يُعرضون`,cues:{r1:`مَا نَرَاكَ إِلَّا بَشَرًا مِثْلَنَا وَمَا نَرَاكَ اتَّبَعَكَ إِلَّا الَّذِينَ هُمْ أَرَاذِلُنَا بَادِيَ الرَّأْيِ`,r2:`جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا`,r3:`إِنْ هُوَ إِلَّا رَجُلٌ بِهِ جِنَّةٌ فَتَرَبَّصُوا بِهِ حَتَّىٰ حِينٍ`,r4:`لَا تَذَرُنَّ آلِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّا وَلَا سُوَاعًا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًا`,r5:`الحجارة القائمة في الساحة مجرّد عناصر بديلة بسيطة. فالقرآن يذكر أسماء هذه الأصنام ولا يصف هيئتها، فلم يُصوَّر أيٌّ منها.`,r6:`لَنْ يُؤْمِنَ مِنْ قَوْمِكَ إِلَّا مَنْ قَدْ آمَنَ`}},construction:{title:`صنع السفينة`,subtitle:`صُنعت بتوجيه إلهي`,cues:{b1:`وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا`,b2:`وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ`,b3:`فسّر كثير من المفسرين كلمة ﴿وَدُسُرٍ﴾ بالمسامير؛ وفسّرها آخرون بالحبال التي تُشدّ بها الألواح، أو بأضلاع السفينة.`,b4:`وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌ مِنْ قَوْمِهِ سَخِرُوا مِنْهُ`,b5:`فَسَوْفَ تَعْلَمُونَ مَنْ يَأْتِيهِ عَذَابٌ يُخْزِيهِ وَيَحِلُّ عَلَيْهِ عَذَابٌ مُقِيمٌ`,b6:`لا يذكر القرآن حجم السفينة ولا تصميمها. والهيئة المعروضة هنا تتبع الوصف الوارد في سفر التكوين — وهو النص القديم الوحيد الذي يقدّم وصفًا لها. وهذا اختيار في المحاكاة، لا قول قرآني.`,b7:`يذكر سفر التكوين أن يكون طول السفينة ٣٠٠ ذراع، وعرضها ٥٠ ذراعًا، وارتفاعها ٣٠ ذراعًا.`,b8:`أوحى الله إلى نوح عليه السلام أنه إذا جاء أمره فليُدخل في السفينة من كل نوع زوجين وأهله — إلا من سبق عليه القول.`}},onset:{title:`بدء الطوفان`,subtitle:`ماء من السماء ومن الأرض`,cues:{o1:`فَدَعَا رَبَّهُ أَنِّي مَغْلُوبٌ فَانْتَصِرْ`,o2:`رَبِّ انْصُرْنِي بِمَا كَذَّبُونِ`,o3:`فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُنْهَمِرٍ`,o4:`وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ`,o5:`حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ`,o6:`اختلف المفسرون في المراد بـ﴿التَّنُّورُ﴾؛ فمن الأقوال: التنور المعروف، ووجه الأرض، والموضع الذي تفجّر منه الماء أولًا، وطلوع الفجر. ويُعرض هنا ماءً يتفجّر من الأرض.`,o7:`العاصفة المظلمة والينابيع وسرعة ارتفاع الماء تصوير فني؛ فالقرآن لا يصفها بهذا التفصيل.`}},boarding:{title:`ركوب السفينة`,subtitle:`باسم الله تجري وترسو`,cues:{e1:`احْمِلْ فِيهَا مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَنْ سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ`,e2:`وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ`,e3:`ارْكَبُوا فِيهَا بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا ۚ إِنَّ رَبِّي لَغَفُورٌ رَحِيمٌ`,e4:`لا يعدّد القرآن الحيوانات ولا يذكر عدد من ركبوا؛ وقد تكلّم العلماء فيما يشمله قوله ﴿مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ﴾. والأزواج القليلة المعروضة رمزية.`,e5:`فَإِذَا اسْتَوَيْتَ أَنْتَ وَمَنْ مَعَكَ عَلَى الْفُلْكِ فَقُلِ الْحَمْدُ لِلَّهِ الَّذِي نَجَّانَا مِنَ الْقَوْمِ الظَّالِمِينَ`,e6:`احترامًا لنبي الله نوح عليه السلام لا يُصوَّر. ولا يظهر الناس إلا هيئاتٍ بلا ملامح. ولا يعدّد القرآن الحيوانات؛ والأنواع العشرة المعروضة، من كل نوع اثنان، رمزية.`}},rising:{title:`ارتفاع الماء`,subtitle:`في موج كالجبال`,cues:{g1:`وَهِيَ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ`,g6:`لا يصف القرآن الحياة داخل السفينة. وهنا لكل زوج حجرة خاصة في الطابق الأوسط، تضيئها المصابيح — وهذا تصوير فني.`,g2:`تَجْرِي بِأَعْيُنِنَا جَزَاءً لِمَنْ كَانَ كُفِرَ`,g3:`فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ`,g4:`اختلف العلماء: هل عمّ الطوفان الأرض كلها أم أرض قوم نوح عليه السلام وحدها؟ وتعرض المحاكاة مشهدًا طبيعيًّا واحدًا ولا تحسم المسألة.`,g5:`يصف القرآن الموج بأنه ﴿كَالْجِبَالِ﴾ (هود: ٤٢) ولا يذكر مقاييس. وعمق الماء وارتفاع الموج هنا من الاختيار الفني.`}},son:{title:`نوح وابنه`,subtitle:`الموج يحول بينهما`,cues:{s1:`وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَبْ مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ`,s2:`قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ`,s3:`قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَنْ رَحِمَ`,s4:`وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ`,s5:`لا يظهر الابن إلا هيئةً بعيدة. والتل والمسافة والموجة إخراج فني، لا سجلّ لما كان عليه ذلك المشهد.`,s6:`ثم نادى نوح عليه السلام ربه في شأن ابنه، فأُجيب. ويمكن قراءة الآيات التالية (هود: ٤٥–٤٧) في قارئ الآيات.`}},end:{title:`نهاية الطوفان`,subtitle:`تنقشع السماء ويغيض الماء`,cues:{n1:`في هذه الإعادة الفنية يواصل الماء ارتفاعه حتى لا يبقى إلا أعلى القمم. ولا يذكر القرآن إلى أي ارتفاع بلغ الطوفان.`,n2:`يصف القرآن نهاية الطوفان في آية واحدة، بأمرٍ موجَّه إلى الأرض والسماء.`,n3:`وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي`,n4:`وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ`,n5:`سرعة توقّف المطر وانحسار الماء هنا اختيار فني؛ فالقرآن لا يحدّد مدة.`,n6:`في المحاكاة، تتجه السفينة الآن نحو الجبل الذي يذكر القرآن أنها استوت عليه.`}},judi:{title:`الاستواء على الجودي`,subtitle:`السفينة تستقر`,cues:{j1:`وَاسْتَوَتْ عَلَى الْجُودِيِّ`,j2:`يذكر القرآن الجودي ولا يصفه. وموضعه محلّ خلاف؛ ومن التحديدات التقليدية الشائعة أنه جبل في منطقة الجزيرة جنوب شرق تركيا اليوم. والجبل المعروض هنا متخيَّل.`,j3:`يَا نُوحُ اهْبِطْ بِسَلَامٍ مِنَّا وَبَرَكَاتٍ عَلَيْكَ وَعَلَىٰ أُمَمٍ مِمَّنْ مَعَكَ`,j4:`رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ`,j5:`فَأَنْجَيْنَاهُ وَأَصْحَابَ السَّفِينَةِ وَجَعَلْنَاهَا آيَةً لِلْعَالَمِينَ`,j6:`وَلَقَدْ تَرَكْنَاهَا آيَةً فَهَلْ مِنْ مُدَّكِرٍ`,j7:`لم يُذكر كيف نزل من كانوا في السفينة منها؛ والموكب المعروض تصوير فني. وهنا تنتهي الرحلة الموجَّهة — تجوّل بحرية، أو اقرأ المقاطع كاملة في قارئ الآيات.`}}},objects:{settlement:{name:`البلدة`,sections:{a:`يذكر القرآن أن نوحًا عليه السلام أُرسل إلى قومه لينذرهم ويدعوهم إلى عبادة الله وحده.`,b:`هذه البلدة، والأطلال الباقية بعد الطوفان، إعادة بناء فنية. ولا يصف القرآن أين سكن قوم نوح، ولا هيئة مبانيهم، ولا عددهم.`}},plaza:{name:`مكان الاجتماع`,sections:{a:`في سورة نوح يخبر نوح عليه السلام ربه أنه دعا قومه ليلًا ونهارًا، جهارًا، في العلن وفي السر، يحثّهم على أن يستغفروا ربهم.`,b:`ثُمَّ إِنِّي أَعْلَنْتُ لَهُمْ وَأَسْرَرْتُ لَهُمْ إِسْرَارًا`,c:`الساحة المفتوحة مكان مناسب لدعوة علنية، لكن القرآن لا يذكرها.`}},idols:{name:`الحجارة القائمة (الأصنام)`,sections:{a:`لَا تَذَرُنَّ آلِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّا وَلَا سُوَاعًا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًا`,b:`يذكر أثرٌ منسوب إلى ابن عباس في صحيح البخاري (٤٩٢٠) أن هذه أسماء رجال صالحين من قوم نوح عليه السلام، نُصبت لهم تماثيل فيما بعد، ثم عُبدت بعد أجيال.`,c:`هذه الحجارة البسيطة عناصر بديلة. فالقرآن يذكر أسماء الأصنام ولا يصف هيئتها، فلم يُصوَّر أي صنم.`}},people:{name:`قوم نوح`,sections:{a:`مَا نَرَاكَ إِلَّا بَشَرًا مِثْلَنَا`,b:`جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ`,c:`لا يظهر الناس إلا هيئاتٍ بعيدة بلا ملامح. ولباسهم وهيئتهم غير معروفين ولا يُصوَّران.`}},ark:{name:`السفينة`,sections:{a:`وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا`,b:`وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ`,c:`وَجَعَلْنَاهَا آيَةً لِلْعَالَمِينَ`,d:`يذكر سفر التكوين أن يكون طول السفينة ٣٠٠ ذراع، وعرضها ٥٠ ذراعًا، وارتفاعها ٣٠ ذراعًا.`,e:`وفيه أن تُطلى السفينة بالقار من داخلها ومن خارجها.`,f:`ويذكر نافذةً تُكمَّل على ذراع من أعلى السفينة، وبابًا يُجعل في جانبها.`,g:`إذا عُدّ الذراع نحو ٤٦ سم (١٨ بوصة)، كانت أرقام سفر التكوين قرابة ١٣٧ × ٢٣ × ١٤ مترًا؛ والذراع الأطول يعطي سفينة أكبر قليلًا. وقد نقل بعض المفسرين المسلمين المتقدمين أرقامًا للسفينة عن الكتب السابقة وأخبار متقدمة (الإسرائيليات)، بأعداد مختلفة؛ أما القرآن نفسه فلا يذكر شيئًا منها.`,h:`الهيئة الشبيهة بالصندوق (فالكلمة العبرية للسفينة «تيفاه» تعني صندوقًا أو تابوتًا)، وممشى السطح المستوي، والمنحدر، والسقالات اختيارات فنية. وتُعرض النافذة فتحةً بارتفاع ذراع تمتد تحت السقف — وهي إحدى القراءات الشائعة لسفر التكوين ٦:١٦.`}},timber:{name:`الخشب`,sections:{a:`أَنِ اصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا`,b:`يأمر سفر التكوين بأن تُصنع السفينة من «خشب جُفر».`,c:`لا يُعرف أي شجر هو «خشب جُفر»: فالكلمة العبرية لا ترد إلا في هذا الموضع. ومن الاقتراحات الشائعة السَّرْو. ولا يسمّي القرآن نوع الخشب.`,d:`هذه الجذوع وحوامل النشر والأدوات إعادة بناء فنية لصناعة السفن قديمًا.`}},"planks-nails":{name:`الألواح والدسر`,sections:{a:`وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ`,b:`فسّر كثير من المفسرين كلمة «دُسُر» بالمسامير؛ وفسّرها آخرون بالحبال التي تُشدّ بها الألواح، أو بأضلاع السفينة.`,c:`شكل الألواح وأدوات الربط ومادتها المعروضة هنا اختيارات فنية.`}},"ark-hold":{name:`داخل السفينة`,sections:{a:`احْمِلْ فِيهَا مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ`,b:`بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا`,c:`يذكر سفر التكوين أن تُجعل في السفينة حجرات.`,d:`وأن تُجعل ثلاث طبقات: سفلى ووسطى وعليا.`,e:`لا يذكر القرآن ولا سفر التكوين تخطيطًا داخليًّا. فهذه المنحدرات والحجرات والأعمدة والمصابيح — وأنواع الحيوانات المعروضة — متخيَّلة.`}},springs:{name:`الماء من الأرض`,sections:{a:`وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ`,b:`وَفَارَ التَّنُّورُ`,c:`اختلف المفسرون في المراد بـ﴿التَّنُّورُ﴾؛ فمن الأقوال: التنور المعروف، ووجه الأرض، والموضع الذي تفجّر منه الماء أولًا، وطلوع الفجر.`}},rain:{name:`المطر من السماء`,sections:{a:`فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُنْهَمِرٍ`,b:`كان نوح عليه السلام قد أخبر قومه من قبل أنهم إن استغفروا ربهم أرسل السماء عليهم بمطر غزير (نوح: ١٠–١١). ويلحظ كثير من القرّاء المقابلة بين ذلك المطر ومطر الطوفان.`,c:`شدة العاصفة والبرق ومدّتهما تصوير فني.`}},floodwaters:{name:`مياه الطوفان`,sections:{a:`وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ`,b:`وَهِيَ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ`,c:`اختلف العلماء: هل عمّ الطوفان الأرض كلها أم أرض قوم نوح عليه السلام؟ وقد فُهم لفظ القرآن على الوجهين.`,d:`عمق الماء وحجم الأمواج في المحاكاة من الاختيار الفني، لا مقاييس.`}},boarding:{name:`من ركبوا السفينة`,sections:{a:`وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ`,b:`لا يعدّد القرآن الحيوانات ولا يذكر عدد الناس. وقد تكلّم العلماء فيما يشمله قوله ﴿مِنْ كُلٍّ زَوْجَيْنِ اثْنَيْنِ﴾.`,c:`لا يظهر الناس إلا هيئاتٍ بلا ملامح، والأزواج العشرة من الحيوانات رمزية. ونبي الله نوح عليه السلام لا يُصوَّر.`}},"son-hill":{name:`التل`,sections:{a:`قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ`,b:`وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ`,c:`التل وبُعده عن السفينة وهيئة الابن إخراج فني. ولا يسمّي القرآن المكان ولا يصفه.`}},"mount-judi":{name:`جبل الجودي`,sections:{a:`وَاسْتَوَتْ عَلَى الْجُودِيِّ`,b:`موضع الجودي محلّ خلاف. ومن التحديدات التقليدية الشائعة أنه جبل في منطقة الجزيرة جنوب شرق تركيا اليوم؛ واقتُرحت مواضع أخرى أيضًا.`,c:`هذا الجبل متخيَّل للمحاكاة، ووُضع قريبًا ليُرى. ولا يحاكي أي جبل حقيقي.`}}}},Du={app:{title:`طوفان نوح`,docTitle:`طوفان نوح — رحلة قرآنية تفاعلية`,tagline:`رحلة تفاعلية ثلاثية الأبعاد في القصة كما وردت في القرآن`,loading:{title:`جارٍ تجهيز المحاكاة`,renderer:`تشغيل محرّك العرض`,terrain:`تشكيل الأرض`,vegetation:`غرس الأشجار ونثر الصخور`,settlement:`بناء البلدة`,ark:`وضع قاعدة السفينة`,figures:`وضع الأشخاص`,water:`ملء النهر`,atmosphere:`تلوين السماء`,audio:`تجهيز الصوت`,shaders:`تجهيز المظلِّلات`,ready:`جاهز`},toasts:{tooDeep:`الماء عميق جدًّا، ولا يمكنك التقدّم أكثر.`,rescued:`الماء يرتفع — نُقلت إلى ظهر السفينة.`,edge:`بلغت حدود المنطقة المعروضة في المحاكاة.`,qualityReload:`تتغيّر تفاصيل الأرض والنبات بعد إعادة تحميل الصفحة.`,audioBlocked:`المتصفح يمنع الصوت. المس أي مكان لتفعيله.`,contextRestored:`استُعيدت الرسوم.`}},intro:{kicker:`محاكاة قرآنية تفاعلية`,lead:`تجوّل في إعادة بناء فنية لقصة نبي الله نوح عليه السلام كما رواها القرآن: دعوته لقومه، وصنع السفينة، والطوفان، وابنه على التل، واستواء السفينة على الجودي.`,legendTitle:`كيف تقرأ ما تراه`,depiction:`احترامًا لنبي الله نوح عليه السلام لا يُصوَّر. ويظهر سائر الناس هيئاتٍ بعيدة بلا ملامح.`,arkNote:`لا يذكر القرآن مقاييس للسفينة. ونِسَبها هنا مأخوذة من سفر التكوين ٦:١٤–١٦، وهي موسومة بـ«الكتاب المقدس (سفر التكوين)».`,begin:`ابدأ الرحلة الموجَّهة`,beginHint:`نحو ١٠ دقائق، مع سرد وآيات`,explore:`تجوّل بحرية`,exploreHint:`تنقّل وتفحّص الأماكن والأشياء`,chapters:`الفصول`,settings:`الإعدادات`,controls:`التحكم`,about:`عن المحاكاة والمصادر`,exit:`العودة إلى الموقع الرئيسي`,soundNote:`في هذه التجربة أصوات محيطة، ويمكنك إيقافها من الإعدادات.`},hud:{chapterOf:`الفصل {n} من {total}`,references:`المراجع`,readVerses:`اقرأ الآيات`,verses:`الآيات`,chapters:`الفصول`,help:`مساعدة`,settings:`الإعدادات`,pause:`قائمة الإيقاف`,inspectKey:`E`,inspect:`تفحّص`,inspectWhat:`تفحّص: {name}`,lookTitle:`انقر للنظر حولك`,lookBody:`تحرّك بـ W A S D أو بمفاتيح الأسهم • Shift للركض • E للتفحّص • Esc لتحرير الفأرة`,watchChapter:`شاهد هذا الفصل`,narration:`السرد`,captionHint:`المس النص لقراءة الآيات`},transport:{prev:`الفصل السابق`,next:`الفصل التالي`,play:`تشغيل`,pause:`إيقاف مؤقت`,replay:`إعادة الفصل`,explore:`تجوّل هنا`,exploreHint:`اترك الرحلة الموجَّهة وتجوّل بنفسك`,progress:`تقدّم الفصل`,speed:`سرعة التشغيل`},panels:{close:`إغلاق`,back:`رجوع`,infoReadVerses:`اقرأ الآيات`,versesTitle:`الآيات`,versesThisChapter:`هذا الفصل`,versesAll:`المقاطع كاملة`,versesArabicSource:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني)، tanzil.net — CC BY 3.0، منقول كما هو.`,versesTranslationSource:`التفسير: التفسير الميسر، مجمع الملك فهد لطباعة المصحف الشريف، عن مشروع تنزيل (ar.muyassar).`,versesNote:`التفسير الميسر بيانٌ لمعنى الآيات وليس ترجمة، والقرآن هو النص العربي وحده.`,tanzilLink:`زُر tanzil.net`,tafsirLabel:`التفسير الميسر:`,chaptersTitle:`الفصول`,chapterCurrent:`الفصل الحالي`,chapterGo:`انتقل إلى الفصل {n}`,pauseTitle:`متوقف مؤقتًا`,resume:`متابعة`,restartChapter:`أعد هذا الفصل من بدايته`,restartAll:`ابدأ من جديد`,mainMenu:`القائمة الرئيسية`,exitSite:`العودة إلى الموقع الرئيسي`},settings:{title:`الإعدادات`,graphics:`الرسوم`,quality:`جودة الرسوم`,qualityAuto:`تلقائي`,qualityLow:`منخفضة (الأفضل للهواتف القديمة)`,qualityMedium:`متوسطة`,qualityHigh:`عالية`,qualityNote:`تتكيّف الدقة تلقائيًّا لتبقى الحركة سلسة.`,sound:`الصوت`,soundOn:`تشغيل الصوت`,volume:`مستوى الصوت`,comfort:`الراحة وسهولة الاستخدام`,motion:`تقليل الحركة`,motionSystem:`اتّباع إعداد النظام`,motionOn:`مفعّل`,motionOff:`معطّل`,motionNote:`كاميرا أهدأ، وبرق ألطف وأقل، ومن غير حركات في الواجهة.`,sensitivity:`حساسية النظر`,invertY:`عكس النظر العمودي`,markers:`إظهار العلامات على الأماكن القابلة للتفحّص`,textSize:`حجم النص`,textNormal:`عادي`,textLarge:`كبير`,textLarger:`أكبر`,language:`اللغة`,languageNote:`تغيير اللغة يعيد تحميل الصفحة ويبدأ التجربة من جديد.`},help:{title:`التحكم`,desktop:`لوحة المفاتيح والفأرة`,touch:`الشاشة اللمسية`,guidedTitle:`الرحلة الموجَّهة`,guided:`تتحرك الكاميرا وحدها في أثناء السرد. استعمل الشريط في الأسفل للإيقاف المؤقت أو الإعادة أو التخطي أو ترك الرحلة الموجَّهة. انقر أو المس الأماكن المميَّزة لتعرف المزيد — وتتوقف الرحلة ريثما تقرأ.`,rows:[[`W A S D / مفاتيح الأسهم`,`الحركة`],[`Shift`,`الركض`],[`الفأرة`,`النظر حولك (انقر على المشهد أولًا)`],[`E أو النقر`,`تفحّص ما في الوسط`],[`Esc`,`تحرير الفأرة / إغلاق اللوحة / الإيقاف المؤقت`],[`Space`,`تشغيل الرحلة الموجَّهة أو إيقافها`],[`N / B`,`الفصل التالي / السابق (في الرحلة الموجَّهة)`],[`V`,`قراءة آيات هذا الفصل`],[`C`,`الفصول`],[`H`,`هذه المساعدة`],[`P`,`قائمة الإيقاف`]],touchRows:[[`عصا التحكم اليسرى`,`الحركة (ادفعها إلى آخرها للركض)`],[`السحب في مكان آخر`,`النظر حولك`],[`لمس مكان أو علامة`,`تفحّصه`],[`زر التفحّص`,`تفحّص ما في الوسط`]],tip:`الحلقات المضيئة تدل على الأماكن القابلة للتفحّص، ويمكنك إخفاؤها من الإعدادات.`},about:{title:`عن المحاكاة والمصادر`,purposeTitle:`الغاية`,purpose:`تصوير تعليمي يراعي الأدب لقصة الطوفان في القرآن (هود: ٢٥–٤٩؛ المؤمنون: ٢٣–٣٠؛ القمر: ٩–١٥؛ نوح: ١–٢٨؛ العنكبوت: ١٤–١٥). وليس إعادة بناء تاريخية أو أثرية.`,labelsTitle:`الوسوم`,depictionTitle:`التصوير`,depiction:`لا يُصوَّر نبي الله نوح عليه السلام أبدًا — لا هيئة ولا وجه ولا صوت؛ ولا تظهر أقواله إلا نصوصًا من القرآن مع الإحالة إلى مواضعها. ويظهر سائر الناس هيئاتٍ بعيدة بلا ملامح، ولا يُعرض أي مشهد معاناة. ولم يُضَف شيء من روايات الطوفان الأخرى سوى تصميم السفينة من سفر التكوين ٦:١٤–١٦، وهو موسوم بذلك دائمًا.`,textsTitle:`النصوص`,arabic:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني)، tanzil.net، CC BY 3.0. جُلب عبر api.alquran.cloud وقوبل آيةً آيةً بنص مجمع الملك فهد (api.quran.com).`,translation:`التفسير: التفسير الميسر، من إعداد نخبة من العلماء ونشر مجمع الملك فهد لطباعة المصحف الشريف، عن مشروع تنزيل (ar.muyassar)، ويُعرض موسومًا بـ«التفسير الميسر» لأنه تفسير لا ترجمة. وما وُسم بـ«القرآن» في السرد فهو مقطع من نص الآية نفسها. (وتستعمل النسخة الإنجليزية ترجمة م. م. بكثال (١٩٣٠).)`,bible:`سفر التكوين ٦:١٤–١٦: من ترجمة الملك جيمس (١٦١١)، وهي ملك عام؛ ولا يُستعمل إلا لنِسَب السفينة وخصائصها التي لم يصفها القرآن. وفي النسخة العربية يُذكر مضمونه بالمعنى لا بنصّه.`,tanzilNotice:`إشعار حقوق مشروع تنزيل (منقول كما يشترط الترخيص):`,assetsTitle:`المكوّنات`,assets:`جميع النماذج الثلاثية الأبعاد والخامات والأصوات تُولَّد بالبرمجة داخل متصفحك. خط القرآن هو Amiri Quran، وخط الواجهة العربية والكردية هو Vazirmatn (وكلاهما بترخيص SIL Open Font License 1.1)، وهما مضمَّنان في الموقع. لا تُجمع أي بيانات، وتُحفظ الإعدادات في متصفحك فقط.`,limitsTitle:`حدود المحاكاة`,limits:`المسافات والأحجام والطقس والتوقيت وهيئة الأماكن والناس اختيارات فنية. والماء والأمواج تقريب يُحسب في الوقت الحقيقي، لا محاكاة فيزيائية.`},complete:{title:`اكتملت الرحلة`,body:`تتبّعت قصة نوح عليه السلام والطوفان كما رواها القرآن.`,explore:`تجوّل بحرية`,restart:`شاهد من البداية مرة أخرى`,passages:`اقرأ المقاطع كلها`},fallback:{noWebglTitle:`الرسوم الثلاثية الأبعاد غير متاحة`,noWebgl:`تحتاج هذه المحاكاة إلى WebGL 2، وهو غير متوفر في هذا المتصفح أو الجهاز (أو أنه معطّل). ويمكنك مع ذلك قراءة القصة والآيات أدناه.`,lostTitle:`توقفت الرسوم`,lost:`أوقف المتصفح الرسوم الثلاثية الأبعاد، وكثيرًا ما يحدث ذلك لنفاد ذاكرة الجهاز. أعد التحميل للمتابعة، أو اقرأ القصة أدناه.`,errorTitle:`حدث خطأ`,error:`تعذّر تشغيل المحاكاة. يمكنك إعادة التحميل، أو قراءة القصة والآيات أدناه.`,reload:`إعادة التحميل`,storyTitle:`القصة فصلًا فصلًا`,readVerses:`اقرأ الآيات`},kinds:{refPrefix:``,bibleSuffix:`(بالمعنى)`,bibleBook:`التكوين`}},Ou=[{code:`en`,name:`English`},{code:`ckb`,name:`کوردی`},{code:`ar`,name:`العربية`}],ku={en:{lang:`en`,dir:`ltr`,digits:`latn`,ui:Cu,content:Su},ckb:{lang:`ckb`,dir:`rtl`,digits:`arab`,ui:Tu,content:wu},ar:{lang:`ar`,dir:`rtl`,digits:`arab`,ui:Du,content:Eu}},Au=ku.en;function G(){return Au}function ju(e){Au=ku[e]??ku.en,typeof document<`u`&&(document.documentElement.lang=Au.lang,document.documentElement.dir=Au.dir,document.title=Au.ui.app.docTitle)}var Mu=`quran-3d:language`;function Nu(e){if(!e)return null;let t=e.trim().toLowerCase();return t===`en`||t.startsWith(`en-`)?`en`:t===`ckb`||t.startsWith(`ckb-`)||t===`ku-arab`||t===`ku-iq`||t===`ku-ir`||t===`sorani`?`ckb`:t===`ar`||t.startsWith(`ar-`)?`ar`:null}function Pu(){try{let e=Nu(new URLSearchParams(window.location.search).get(`lang`));if(e)return e}catch{}try{let e=Nu(window.localStorage.getItem(Mu));if(e)return e}catch{}try{for(let e of navigator.languages??[navigator.language]){let t=Nu(e);if(t)return t}}catch{}return`en`}function Fu(e){try{window.localStorage.setItem(Mu,e)}catch{}let t=new URL(window.location.href);t.searchParams.set(`lang`,e),window.location.replace(t.toString())}var Iu=`٠١٢٣٤٥٦٧٨٩`;function Lu(e){let t=String(e);return Au.digits===`latn`?t:t.replace(/[0-9]/g,e=>Iu[Number(e)]).replace(/%/g,`٪`)}function Ru(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?Lu(t[n]):e)}var zu=[`storm`,`rain`,`waterLevel`,`waves`,`lightning`,`springs`,`arkBuild`,`arkPath`,`work`,`crowd`,`boarding`,`disembark`,`son`,`bigWave`,`sunElevation`,`sunAzimuth`,`haze`];function Bu(){return{storm:0,rain:0,waterLevel:1,waves:0,lightning:0,springs:0,arkBuild:0,arkPath:0,work:0,crowd:0,boarding:0,disembark:0,son:0,bigWave:0,sunElevation:35,sunAzimuth:235,haze:0}}function Vu(e,t){for(let n of zu)e[n]=t[n];return e}function Hu(e,t,n,r){for(let i of zu)e[i]=t[i]+(n[i]-t[i])*r;return e}var Uu=class{constructor(e){H(this,`tracks`,[]);let t=[...e].sort((e,t)=>e.t-t.t);for(let e of zu){let n=[],r=[];for(let i of t){let t=i[e];typeof t==`number`&&(n.push(i.t),r.push(t))}if(n.length===0)throw Error(`EnvTimeline: key "${e}" has no keyframe (t=0 must be complete)`);this.tracks.push({key:e,t:Float64Array.from(n),v:Float64Array.from(r),m:Wu(n,r)})}}evaluate(e,t){let n=uu(e);for(let e of this.tracks)t[e.key]=Gu(e,n);return t}};function Wu(e,t){let n=e.length,r=new Float64Array(n);if(n<2)return r;let i=[];for(let r=0;r<n-1;r++){let n=e[r+1]-e[r];i.push(n>0?(t[r+1]-t[r])/n:0)}r[0]=0,r[n-1]=0;for(let e=1;e<n-1;e++)i[e-1]*i[e]<=0?r[e]=0:r[e]=2*i[e-1]*i[e]/(i[e-1]+i[e]);return r}function Gu(e,t){let{t:n,v:r,m:i}=e,a=n.length;if(a===1||t<=n[0])return r[0];if(t>=n[a-1])return r[a-1];let o=0;for(;o<a-2&&t>n[o+1];)o++;let s=n[o+1]-n[o];if(s<=0)return r[o+1];let c=(t-n[o])/s,l=c*c,u=l*c,d=2*u-3*l+1,f=u-2*l+c,p=-2*u+3*l,m=u-l;return d*r[o]+f*s*i[o]+p*r[o+1]+m*s*i[o+1]}var Ku=class{constructor(e){H(this,`chapters`,void 0),H(this,`index`,0),H(this,`time`,0),H(this,`playing`,!1),H(this,`mode`,`guided`),H(this,`env`,Bu()),H(this,`evaluators`,void 0),H(this,`target`,Bu()),H(this,`blendFrom`,Bu()),H(this,`blendElapsed`,0),H(this,`blendDuration`,0),H(this,`activeCueIndex`,-1),this.chapters=e,this.evaluators=e.map(e=>new Uu(e.env)),this.evaluate()}get chapter(){return this.chapters[this.index]}get count(){return this.chapters.length}get progress(){return uu(this.time/this.chapter.duration)}get ended(){return this.time>=this.chapter.duration}get isLast(){return this.index===this.chapters.length-1}get activeCue(){return this.activeCueIndex>=0?this.chapter.cues[this.activeCueIndex]:null}goTo(e,t,n=0,r=3.5){this.index=Math.max(0,Math.min(this.chapters.length-1,e)),this.time=Math.max(0,n),t===`smooth`?(Vu(this.blendFrom,this.env),this.blendElapsed=0,this.blendDuration=r):this.blendDuration=0,this.evaluate()}update(e){this.playing&&(this.time=Math.min(this.time+e,this.chapter.duration)),this.blendDuration>0&&(this.blendElapsed+=e,this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)),this.evaluate()}evaluate(){if(this.evaluators[this.index].evaluate(this.progress,this.target),this.blendDuration>0){let e=fu(this.blendElapsed/this.blendDuration);Hu(this.env,this.blendFrom,this.target,e)}else Vu(this.env,this.target);if(this.activeCueIndex=-1,this.mode===`guided`){let e=this.chapter.cues;for(let t=0;t<e.length;t++){let n=e[t];if(this.time>=n.at&&this.time<n.at+n.dur){this.activeCueIndex=t;break}}}}},qu=.5*(Math.sqrt(3)-1),Ju=(3-Math.sqrt(3))/6,Yu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Xu=new class{constructor(e=1){H(this,`perm`,new Uint8Array(512));let t=gu(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}for(let e=0;e<512;e++)this.perm[e]=n[e&255]}noise(e,t){let n=this.perm,r=(e+t)*qu,i=Math.floor(e+r),a=Math.floor(t+r),o=(i+a)*Ju,s=e-(i-o),c=t-(a-o),l=+(s>c),u=s>c?0:1,d=s-l+Ju,f=c-u+Ju,p=s-1+2*Ju,m=c-1+2*Ju,h=i&255,g=a&255,_=0,v=0,y=0,b=.5-s*s-c*c;if(b>0){let e=Yu[n[h+n[g]]&7];b*=b,_=b*b*(e[0]*s+e[1]*c)}let x=.5-d*d-f*f;if(x>0){let e=Yu[n[h+l+n[g+u]]&7];x*=x,v=x*x*(e[0]*d+e[1]*f)}let S=.5-p*p-m*m;if(S>0){let e=Yu[n[h+1+n[g+1]]&7];S*=S,y=S*S*(e[0]*p+e[1]*m)}return 70*(_+v+y)}fbm(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.noise(e*o,t*o),c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=4,r=2,i=.5){let a=.5,o=1,s=0,c=0;for(let l=0;l<n;l++){let n=1-Math.abs(this.noise(e*o,t*o));s+=a*n*n,c+=a,a*=i,o*=r}return s/c}}(1949);function Zu(e,t,n,r,i,a){let o=Math.hypot(e,t);return{dirX:e/o,dirZ:t/o,wavelength:n,amplitude:r,steepness:i,phase:a}}var Qu=[Zu(.8,-.6,150,2.4,.35,0),Zu(.95,.3,96,1.5,.4,1.3),Zu(.4,-.92,61,.9,.45,2.1),Zu(-.3,-.95,35,.45,.5,.7),Zu(.99,-.1,21,.24,.5,4),Zu(-.7,.7,13,.11,.5,2.6)],$u=Qu.length,ed=Qu.map(e=>2*Math.PI/e.wavelength),td=ed.map(e=>Math.sqrt(9.81*e));function nd(e,t,n,r){if(r<=0)return 0;let i=0;for(let r=0;r<$u;r++){let a=Qu[r],o=ed[r]*(a.dirX*e+a.dirZ*t)-td[r]*n+a.phase;i+=a.amplitude*Math.sin(o)}return i*r}function rd(){let e=[],t=[];for(let n=0;n<$u;n++){let r=Qu[n];e.push(r.dirX,r.dirZ,ed[n],td[n]),t.push(r.amplitude,r.steepness,r.phase,0)}return{a:e,b:t}}var id={terrainRadius:800,farRadius:4500,waterRadius:6e3,playRadius:660,riverLevel:1,maxFloodLevel:140},K={center:[60,40],radius:120,groundY:7,plaza:{center:[60,40],radius:22},idols:{center:[60,26],radius:7}},ad={points:[[-820,230],[-520,210],[-320,170],[-160,150],[-20,175],[120,160],[260,190],[420,250],[620,260],[820,300]],halfWidth:16,bedY:-2.5,bankY:3},od=.4572,sd=300*od,cd=50*od,ld=30*od,q={length:sd,beam:cd,height:ld,deckY:ld,roofY:ld,draft:6,wall:.45,innerHalfX:cd/2-.45,innerHalfZ:sd/2-.45,floors:[.6,4.8,9],wallTop:12.8988,windowTop:13.356,door:{z0:-4,z1:4,sill:4.8,height:3.6},ramp:{xInner:-22.86/2-.4,xOuter:-22.86/2-3.9,zLow:24,zHigh:4},landing:{x0:-22.86/2-3.9,x1:-11.23,z0:-4,z1:4},rampLow:{x0:-1.6,x1:1.6,zTop:-20,zBottom:-38},rampMid:{x0:-1.6,x1:1.6,zBottom:20,zTop:38},hatch:{x0:-1.3,x1:1.3,zBottom:46,zTop:54},rooms:{depth:4.2,pitch:5*od*2}},J={center:[-150,-10],groundY:11,yaw:Math.atan2(.75,-.66),terraceHalfLength:92,terraceHalfWidth:40},ud={center:[170,-170],peakY:48,radius:85,standPoint:[168,-172]},dd={peak:[110,-690],peakY:250,radius:420,ledge:{center:[110,-478],y:100,yaw:Math.PI/2,halfLength:96,halfWidth:36}},fd=[[-150,-10],[-120,-36],[-60,-90],[10,-160],[40,-215],[30,-300],[-30,-400],[0,-470],[60,-478],[110,-478]],pd=[[20,70],[105,15],[-40,25],[70,110],[-80,70],[140,85]],md=[[15,70],[40,62]],hd=[-60,10],gd={origin:[100,-195],direction:[.948,.318],travel:190,crestLength:320,height:22},_d=Xu,vd=Math.cos(J.yaw),yd=Math.sin(J.yaw);function bd(e,t){let n=ad.points,r=1/0;for(let i=0;i<n.length-1;i++){let a=_u(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]);a<r&&(r=a)}return r}function xd(e,t,n,r,i){let a=Math.max(Math.abs(e)-n,0),o=Math.max(Math.abs(t)-r,0);return 1-U(0,i,Math.sqrt(a*a+o*o))}function Sd(e,t){let n=Math.sqrt(e*e+t*t),r=6+_d.fbm(e*.0045,t*.0045,4)*5+_d.fbm(e*.02,t*.02,2)*.8,i=U(.55,.9,-t/Math.max(n,1))*(1-U(560,760,n)),a=U(380,760,n)*(1-i*.85),o=30+95*_d.ridged(e*.003+7.1,t*.003-3.3,4);r+=a*o;let s=U(900,1600,n)*(1-U(3200,4400,n));r+=s*(25+120*_d.ridged(e*.0011+2,t*.0011+5,4)),r-=U(3600,4500,n)*60;{let n=e-ud.center[0],i=t-ud.center[1],a=Math.sqrt(n*n+i*i)/ud.radius,o=Math.exp(-a*a*2.2);r+=o*(ud.peakY-8)+o*_d.fbm(e*.05,t*.05,2)*2.5}{let n=e-dd.peak[0],i=t-dd.peak[1],a=uu(1-Math.sqrt(n*n+i*i)/dd.radius),o=_d.ridged(e*.008+1.7,t*.008-2.9,4);r+=dd.peakY*a**1.3*(.9+.2*o)}return r}function Cd(e,t){let n=Sd(e,t);{let r=bd(e,t),i=1-U(ad.halfWidth*.55,ad.halfWidth*2.2,r);if(i>0){let e=ad.bedY+U(0,ad.halfWidth,r)*(ad.bankY-ad.bedY)*.6;n+=(Math.min(n,e)-n)*i}}{let r=e-K.center[0],i=t-K.center[1],a=Math.sqrt(r*r+i*i),o=1-U(K.radius*.6,K.radius*1.35,a),s=K.groundY+_d.fbm(e*.012,t*.012,2)*.9;n+=(s-n)*o*.92}{let r=e-J.center[0],i=t-J.center[1],a=xd(r*vd-i*yd,r*yd+i*vd,J.terraceHalfWidth,J.terraceHalfLength,40);n+=(J.groundY-n)*a}{let r=dd.ledge,i=Math.cos(r.yaw),a=Math.sin(r.yaw),o=e-r.center[0],s=t-r.center[1],c=xd(o*i-s*a,o*a+s*i,r.halfWidth,r.halfLength,26);n+=(r.y-n)*c}return n}function wd(e,t,n,r=1){let i=Cd(e-r,t),a=Cd(e+r,t),o=Cd(e,t-r),s=Cd(e,t+r),c=i-a,l=2*r,u=o-s,d=Math.sqrt(c*c+l*l+u*u)||1;c/=d,l/=d,u/=d,n.x=c,n.y=l,n.z=u}var Td=55;function Ed(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}var Dd=class{constructor(e){H(this,`camera`,void 0),H(this,`onArk`,!1),H(this,`keys`,[]),H(this,`pts`,[]),H(this,`looks`,[]),H(this,`tmpPos`,new z),H(this,`tmpLook`,new z),H(this,`tmpLocal`,new z),H(this,`blendPos`,new z),H(this,`blendQuat`,new Vt),H(this,`targetQuat`,new Vt),H(this,`blendFov`,Td),H(this,`blendElapsed`,0),H(this,`blendDuration`,0),this.camera=e}setChapter(e){for(this.keys=[...e.camera].sort((e,t)=>e.t-t.t);this.pts.length<this.keys.length;)this.pts.push(new z),this.looks.push(new z)}blendFromCurrent(e){this.blendPos.copy(this.camera.position),this.blendQuat.copy(this.camera.quaternion),this.blendFov=this.camera.fov,this.blendElapsed=0,this.blendDuration=e}update(e,t,n,r,i,a){let o=this.keys;if(o.length===0)return;let s=o.length;for(let e=0;e<s;e++){let n=o[e],r=this.pts[e].set(n.pos[0],n.pos[1],n.pos[2]);n.space===`ark`&&r.applyMatrix4(t.matrix);let i=this.looks[e].set(n.look[0],n.look[1],n.look[2]);(n.lookSpace??n.space)===`ark`&&i.applyMatrix4(t.matrix),i.sub(r).normalize()}let c=du(uu(e),fu(e),.5),l=0;for(;l<s-2&&c>o[l+1].t;)l++;let u=0,d=o[0].fov??Td;if(s===1||c<=o[0].t)this.tmpPos.copy(this.pts[0]),this.tmpLook.copy(this.looks[0]),l=0;else if(c>=o[s-1].t)this.tmpPos.copy(this.pts[s-1]),this.tmpLook.copy(this.looks[s-1]),d=o[s-1].fov??Td,l=s-1;else{let e=o[l+1].t-o[l].t;u=e>0?(c-o[l].t)/e:1;let t=Math.max(0,l-1),n=l,r=l+1,i=Math.min(s-1,l+2),a=this.pts,f=this.looks;this.tmpPos.set(Ed(a[t].x,a[n].x,a[r].x,a[i].x,u),Ed(a[t].y,a[n].y,a[r].y,a[i].y,u),Ed(a[t].z,a[n].z,a[r].z,a[i].z,u)),this.tmpLook.set(Ed(f[t].x,f[n].x,f[r].x,f[i].x,u),Ed(f[t].y,f[n].y,f[r].y,f[i].y,u),Ed(f[t].z,f[n].z,f[r].z,f[i].z,u)),d=du(o[n].fov??Td,o[r].fov??Td,fu(u))}let f=u<.5?o[Math.min(l,s-1)]:o[Math.min(l+1,s-1)];if(this.onArk=f.space===`ark`,this.tmpLook.normalize().multiplyScalar(20).add(this.tmpPos),!a){let e=.12+n.storm*.18;this.tmpPos.x+=Xu.noise(r*.13,3.1)*e,this.tmpPos.y+=Xu.noise(r*.11,7.7)*e*.6,this.tmpLook.x+=Xu.noise(r*.07,1.3)*e*1.2,this.tmpLook.y+=Xu.noise(r*.09,5.9)*e*.6}this.keepClear(this.tmpPos,t,n,r);let p=this.camera;if(p.position.copy(this.tmpPos),p.up.set(0,1,0),p.lookAt(this.tmpLook),this.blendDuration>0){this.blendElapsed+=i;let e=fu(this.blendElapsed/this.blendDuration);this.targetQuat.copy(p.quaternion),p.position.lerpVectors(this.blendPos,this.tmpPos,e),p.quaternion.slerpQuaternions(this.blendQuat,this.targetQuat,e),d=du(this.blendFov,d,e),this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)}Math.abs(p.fov-d)>.01&&(p.fov=Bt.clamp(d,25,80),p.updateProjectionMatrix())}keepClear(e,t,n,r){let i=this.tmpLocal.copy(e).applyMatrix4(t.inverse);if(n.arkBuild>.9&&i.y>0&&Math.abs(i.x)<q.beam/2+.5&&Math.abs(i.z)<q.length/2)return;let a=Cd(e.x,e.z)+1.4,o=n.waterLevel+nd(e.x,e.z,r,n.waves)+1.2,s=Math.max(a,o);e.y<s&&(e.y=s)}},Od=7,kd=q.length*.42,Ad=class{constructor(){H(this,`pose`,{position:new z,yaw:0,pitch:0,roll:0,grounded:!0,floating:!1,rampEnabled:!1,matrix:new fn,inverse:new fn,velocity:new z}),H(this,`curve`,void 0),H(this,`tmpP`,new z),H(this,`tmpT`,new z),H(this,`prevPos`,new z),H(this,`euler`,new Sn(0,0,0,`YXZ`)),H(this,`quat`,new Vt),H(this,`scale`,new z(1,1,1)),H(this,`initialised`,!1),this.curve=new ra(fd.map(([e,t])=>new z(e,0,t)),!1,`centripetal`)}pathPoint(e,t){let n=uu(e);this.curve.getPointAt(n,t);let r=Math.max(0,n-.002),i=Math.min(1,n+.002);this.curve.getPointAt(i,this.tmpT);let a=this.tmpT.x,o=this.tmpT.z;return this.curve.getPointAt(r,this.tmpT),Math.atan2(a-this.tmpT.x,o-this.tmpT.z)}snap(e,t){return this.initialised=!1,this.update(e,t,0,!1)}update(e,t,n,r){let i=this.pose,a=this.pathPoint(e.arkPath,this.tmpP),o=this.tmpP.x,s=this.tmpP.z,c=Math.sin(a),l=Math.cos(a),u=-1/0;for(let e=0;e<Od;e++){let t=e/6*2-1,n=Cd(o+c*t*kd,s+l*t*kd);n>u&&(u=n)}let d=e.waves,f=Math.cos(a),p=-Math.sin(a),m=q.length*.4,h=q.beam*.45,g=nd(o+c*m,s+l*m,t,d),_=nd(o-c*m,s-l*m,t,d),v=nd(o+f*h,s+p*h,t,d),y=nd(o-f*h,s-p*h,t,d),b=nd(o,s,t,d),x=(g+_+v+y+b*2)/6,S=e.waterLevel-q.draft+x,C=Math.max(u,S),w=u>=S-.05,T=r?.35:1,E=w?0:Math.atan2(g-_,m*2)*.8*T,D=w?0:Math.atan2(v-y,h*2)*.35*T,ee=w?0:Math.sin(t*.045)*.05*(.3+e.storm);return!this.initialised||n<=0?(i.yaw=a+ee,i.pitch=E,i.roll=D,this.prevPos.set(o,C,s),i.velocity.set(0,0,0),this.initialised=!0):(i.yaw=hu(i.yaw,a+ee,1.2,n),i.pitch=pu(i.pitch,E,1.6,n),i.roll=pu(i.roll,D,1.6,n),this.prevPos.copy(i.position)),i.position.set(o,C,s),n>0&&i.velocity.subVectors(i.position,this.prevPos).divideScalar(n),i.grounded=w,i.floating=!w,i.rampEnabled=w&&e.arkBuild>=.99,this.euler.set(-i.pitch,i.yaw,i.roll,`YXZ`),this.quat.setFromEuler(this.euler),i.matrix.compose(i.position,this.quat,this.scale),i.inverse.copy(i.matrix).invert(),i}};function jd(e=256,t=900){let n=new Uint16Array(e*e),r=1/0,i=-1/0;for(let a=0;a<e;a++){let o=(a+.5)/e*2*t-t;for(let s=0;s<e;s++){let c=Cd((s+.5)/e*2*t-t,o);c<r&&(r=c),c>i&&(i=c),n[a*e+s]=kr.toHalfFloat(c)}}let a=new xi(n,e,e,ie,T);return a.flipY=!1,a.magFilter=h,a.minFilter=h,a.wrapS=u,a.wrapT=u,a.generateMipmaps=!1,a.needsUpdate=!0,{texture:a,extent:t,size:e,minY:r,maxY:i}}var Md=e=>new B().setHex(e),Nd={grass:Md(7043650),lush:Md(5007408),dry:Md(10849376),steppe:Md(9405526),mud:Md(6969924),sand:Md(10324839),earth:Md(10125146),rock:Md(8090214),darkRock:Md(5787977)},Pd=Math.cos(J.yaw),Fd=Math.sin(J.yaw);function Id(e,t){let n=ad.points,r=1/0;for(let i=0;i<n.length-1;i++){let a=_u(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]);a<r&&(r=a)}return r}var Ld=new B;function Rd(e,t,n,r,i){let a=Xu.fbm(e*.006+11,t*.006-4,3),o=Xu.noise(e*.045,t*.045),s=Math.hypot(e,t),c=uu(.35+a*.55+(n-12)/90+U(500,1600,s)*.35);if(i.copy(Nd.grass).lerp(Nd.steppe,U(.25,.6,c)).lerp(Nd.dry,U(.6,.95,c)),s<900){let n=Id(e,t);i.lerp(Nd.lush,(1-U(ad.halfWidth*1.4,ad.halfWidth*5,n))*.75),i.lerp(Nd.mud,1-U(ad.halfWidth*.6,ad.halfWidth*1.5,n))}n<2.5&&i.lerp(Nd.sand,U(2.5,.5,n)*.7);let l=Math.hypot(e-K.center[0],t-K.center[1]),u=1-U(K.radius*.45,K.radius*1.05,l+o*18);if(i.lerp(Nd.earth,u*.85),l<K.radius*1.2&&l>K.plaza.radius-2){let n=Math.atan2(t-K.center[1],e-K.center[0]),r=Math.PI/4,a=n/r-Math.round(n/r),s=1-U(2.2,4.2,Math.abs(a)*r*l+o*1.2),c=1-U(2,3.8,Math.abs(l-70)+o*1.2);i.lerp(Nd.sand,Math.max(s,c)*.55*(1-U(K.radius,K.radius*1.2,l)))}l<K.plaza.radius&&i.lerp(Nd.sand,.35*(1-U(K.plaza.radius-6,K.plaza.radius,l)));{let n=e-J.center[0],r=t-J.center[1],a=n*Pd-r*Fd,s=n*Fd+r*Pd,c=(1-U(J.terraceHalfWidth-6,J.terraceHalfWidth+10,Math.abs(a)+o*6))*(1-U(J.terraceHalfLength-8,J.terraceHalfLength+10,Math.abs(s)+o*6));i.lerp(Ld.copy(Nd.earth).lerp(Nd.sand,.35),c*.9)}let d=U(.22,.42,1-r+o*.06);d=Math.max(d,U(150,230,n+a*30)*.85);let f=Math.hypot(e-dd.ledge.center[0],t-dd.ledge.center[1]);d=Math.max(d,(1-U(60,110,f))*.55),i.lerp(Ld.copy(Nd.rock).lerp(Nd.darkRock,uu(.5+o)),d);let p=.92+o*.08;return i.r*=p,i.g*=p,i.b*=p,i}var zd=class{constructor(e){H(this,`object`,new Bn),H(this,`material`,void 0),H(this,`geometries`,[]),this.object.name=`terrain`;let t=e.uniforms;this.material=new ya({vertexColors:!0,roughness:.93,metalness:0}),this.material.onBeforeCompile=e=>{e.uniforms.uWetness=t.uWetness,e.uniforms.uMudLine=t.uMudLine,e.uniforms.uWaterLevel=t.uWaterLevel,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vTerrainPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vTerrainPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uWetness;
uniform float uMudLine;
uniform float uWaterLevel;
varying vec3 vTerrainPos;
float tHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float tNoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);
  return mix(mix(tHash(i), tHash(i + vec2(1.0, 0.0)), w.x), mix(tHash(i + vec2(0.0, 1.0)), tHash(i + vec2(1.0, 1.0)), w.x), w.y);
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
float tDetail = tNoise(vTerrainPos.xz * 0.35) * 0.6 + tNoise(vTerrainPos.xz * 1.7) * 0.4;
diffuseColor.rgb *= 0.86 + tDetail * 0.24;
diffuseColor.rgb *= mix(1.0, 0.6, uWetness);
// Ground the receding flood has just uncovered: dark, silty mud.
float mud = smoothstep(uMudLine + 2.0, uMudLine - 6.0, vTerrainPos.y) * step(0.5, uMudLine);
mud *= 1.0 - smoothstep(0.0, 0.8, uWaterLevel - vTerrainPos.y);
diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.62, 0.55, 0.46) + vec3(0.03, 0.025, 0.015), mud * 0.8);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.42, max(uWetness, step(0.5, uMudLine) * step(vTerrainPos.y, uMudLine) * 0.7));`)};let n=new vi(this.buildDisc(e.quality.terrainSegments),this.material);n.name=`terrain-disc`,n.receiveShadow=!0;let r=new vi(this.buildFarRing(),this.material);r.name=`terrain-far`,this.object.add(n,r),this.object.matrixAutoUpdate=!1,n.matrixAutoUpdate=!1,r.matrixAutoUpdate=!1}buildDisc(e){let t=id.terrainRadius,n=Math.max(32,Math.round(e)),r=2*t/n,i=n+1,a=i+2,o=new Float32Array(a*a);for(let e=0;e<a;e++){let n=-t+(e-1)*r;for(let i=0;i<a;i++){let s=-t+(i-1)*r;o[e*a+i]=Cd(s,n)}}let s=new Float32Array(i*i*3),c=new Float32Array(i*i*3),l=new Float32Array(i*i*3),u=new B;for(let e=0;e<i;e++)for(let n=0;n<i;n++){let d=-t+n*r,f=-t+e*r,p=(e+1)*a+(n+1),m=o[p],h=(e*i+n)*3;s[h]=d,s[h+1]=m,s[h+2]=f;let g=o[p-1]-o[p+1],_=2*r,v=o[p-a]-o[p+a],y=Math.hypot(g,_,v)||1;g/=y,_/=y,v/=y,c[h]=g,c[h+1]=_,c[h+2]=v,Rd(d,f,m,_,u),l[h]=u.r,l[h+1]=u.g,l[h+2]=u.b}let d=[],f=t+r*.75;for(let e=0;e<n;e++)for(let a=0;a<n;a++){let n=-t+(a+.5)*r,o=-t+(e+.5)*r;if(n*n+o*o>f*f)continue;let s=e*i+a,c=s+1,l=s+i,u=l+1;d.push(s,l,c,c,l,u)}let p=new Jr;return p.setAttribute(`position`,new Nr(s,3)),p.setAttribute(`normal`,new Nr(c,3)),p.setAttribute(`color`,new Nr(l,3)),p.setIndex(i*i>65535?new Nr(new Uint32Array(d),1):new Nr(new Uint16Array(d),1)),p.computeBoundingSphere(),this.geometries.push(p),p}buildFarRing(){let e=id.terrainRadius-20,t=id.farRadius,n=[];for(let r=0;r<=30;r++){let i=r/30;n.push(e+(t-e)*i**1.6)}let r=4991,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new B,s=0;for(let e=0;e<=30;e++)for(let t=0;t<=160;t++){let r=t/160*Math.PI*2,c=Math.cos(r)*n[e],l=Math.sin(r)*n[e],u=Cd(c,l)-.3-(e===0?.5:0);i[s]=c,i[s+1]=u,i[s+2]=l;let d=Cd(c+8,l)-Cd(c-8,l),f=Cd(c,l+8)-Cd(c,l-8);Rd(c,l,u,16/Math.hypot(d,16,f),o),a[s]=o.r,a[s+1]=o.g,a[s+2]=o.b,s+=3}let c=[];for(let e=0;e<30;e++)for(let t=0;t<160;t++){let n=e*161+t,r=n+1,i=n+160+1,a=i+1;c.push(n,r,i,r,a,i)}let l=new Jr;return l.setAttribute(`position`,new Nr(i,3)),l.setAttribute(`color`,new Nr(a,3)),l.setIndex(new Nr(new Uint32Array(c),1)),l.computeVertexNormals(),l.computeBoundingSphere(),this.geometries.push(l),l}update(e){}dispose(){for(let e of this.geometries)e.dispose();this.geometries.length=0,this.material.dispose()}};function Bd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Vd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Vd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Vd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Nr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Hd(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var Ud=400,Wd=Math.cos(J.yaw),Gd=Math.sin(J.yaw),Kd=e=>new B().setHex(e);function qd(e,t){let n=ad.points,r=1/0;for(let i=0;i<n.length-1;i++){let a=_u(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]);a<r&&(r=a)}return r}function Jd(e,t){let n=e.getAttribute(`position`),r=new Float32Array(n.count*3),i=new B;for(let e=0;e<n.count;e++)t(n.getX(e),n.getY(e),n.getZ(e),i),r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b;return e.setAttribute(`color`,new Ir(r,3)),e}function Yd(e,t,n){let r=gu(n),i=e.getAttribute(`position`),a=new Map;for(let e=0;e<i.count;e++){let n=`${i.getX(e).toFixed(3)},${i.getY(e).toFixed(3)},${i.getZ(e).toFixed(3)}`,o=a.get(n);o||(o=[(r()-.5)*t,(r()-.5)*t,(r()-.5)*t],a.set(n,o)),i.setXYZ(e,i.getX(e)+o[0],i.getY(e)+o[1],i.getZ(e)+o[2])}return e.computeVertexNormals(),e}function Xd(e,t,n,r){let i=new ia(e,t);i.deleteAttribute(`uv`),i.deleteAttribute(`normal`);let a=Hd(i);i.dispose();let o=a.getAttribute(`position`),s=new z;for(let t=0;t<o.count;t++){s.fromBufferAttribute(o,t);let i=Xu.noise(s.x*1.3+r,s.z*1.3+s.y*.9-r);s.multiplyScalar(1+i*n/e),o.setXYZ(t,s.x,s.y,s.z)}return a.computeVertexNormals(),a.setAttribute(`uv`,new Ir(new Float32Array(o.count*2),2)),a}function Zd(){let e=[],t=new qi(.18,.32,9,7,8,!0);t.translate(0,9/2,0);let n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=n.getY(e);n.setX(e,n.getX(e)+(t/9)**2*1.1)}t.computeVertexNormals();let r=Kd(7232068),i=Kd(5193779);Jd(t,(e,t,n,a)=>a.copy(r).lerp(i,(Math.sin(t*9)*.5+.5)*.6)),e.push(t.toNonIndexed());let a=Kd(5599279),o=Kd(9083466);for(let t=0;t<11;t++){let n=4.2+t%3*.5,r=new oa(.9,n,1,5);r.translate(0,n/2,0);let i=r.getAttribute(`position`);for(let e=0;e<i.count;e++){let t=i.getY(e)/n;i.setX(e,i.getX(e)*(1-t*.85)),i.setZ(e,-(t**1.6)*n*.55)}r.rotateX(-Math.PI/2+.55+t%2*.25),r.rotateY(t/11*Math.PI*2+t%3*.2),r.translate(1.1,8.9,0),r.computeVertexNormals(),Jd(r,(e,t,r,i)=>{let s=Math.hypot(e-1.1,t-9,r)/n;i.copy(a).lerp(o,Math.min(1,s))}),e.push(r.toNonIndexed())}let s=Bd(e);return e.forEach(e=>e.dispose()),s}function Qd(){let e=[],t=new qi(.22,.42,4.2,6,3,!0);t.translate(0,2.1,0);let n=Kd(6114107);Jd(t,(e,t,r,i)=>i.copy(n)),e.push(t.toNonIndexed());let r=Kd(4940339),i=Kd(7307071);[[0,5.6,0,2.6],[1.5,4.9,.6,1.9],[-1.3,5,-.7,2],[.3,6.6,-.4,1.7]].forEach(([t,n,a,o],s)=>{let c=Xd(o,2,o*.3,17+s);c.scale(1,.78,1),c.translate(t,n,a),Jd(c,(e,t,n,a)=>a.copy(r).lerp(i,Math.min(1,Math.max(0,(t-3.8)/3.5)))),e.push(c.toNonIndexed())});let a=Bd(e);return e.forEach(e=>e.dispose()),a}function $d(){let e=[],t=Kd(5596730),n=Kd(8027208);for(let r=0;r<3;r++){let i=Xd(.7-r*.12,1,.3,41+r);i.scale(1.2,.8,1.1),i.translate((r-1)*.55,.45+r*.08,r%2*.4-.2),Jd(i,(e,r,i,a)=>a.copy(t).lerp(n,Math.min(1,r/1.2))),e.push(i.toNonIndexed())}let r=Bd(e);return e.forEach(e=>e.dispose()),r}function ef(){let e=[],t=Kd(4150567),n=Kd(9411152);for(let r=0;r<6;r++){let i=.55+r%3*.18,a=new oa(.12,i,1,3);a.translate(0,i/2,0);let o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let t=o.getY(e)/i;o.setX(e,o.getX(e)*(1-t*.9)),o.setZ(e,t*t*.3)}a.rotateY(r/6*Math.PI*2+r*.4),a.translate(Math.cos(r*2.1)*.12,0,Math.sin(r*2.1)*.12),a.computeVertexNormals(),Jd(a,(e,r,i,a)=>a.copy(t).lerp(n,Math.min(1,r/.9))),e.push(a.toNonIndexed())}let r=Bd(e);return e.forEach(e=>e.dispose()),r}function tf(){let e=new ia(1,1),t=e.getAttribute(`position`),n=new z;for(let e=0;e<t.count;e++){n.fromBufferAttribute(t,e);let r=Xu.noise(n.x*1.7+3,n.z*1.7+n.y*1.3)*.25;n.multiplyScalar(1+r),n.y*=.62,t.setXYZ(e,n.x,n.y,n.z)}Yd(e,.12,77);let r=Kd(8616556),i=Kd(6116941);return Jd(e,(e,t,n,a)=>a.copy(r).lerp(i,Math.min(1,Math.max(0,.5-t*.6+Xu.noise(e*3,n*3)*.3)))),e}var nf=class{constructor(e){H(this,`object`,new Bn),H(this,`obstacles`,[]),H(this,`geometries`,[]),H(this,`materials`,[]),this.object.name=`vegetation`;let t=e.quality,n=e.uniforms,r=t.vegetationDensity,i=gu(20231),a={palm:Math.round(260*r),tree:Math.round(280*r),shrub:Math.round(900*r),tuft:Math.round(2e3*r),rock:Math.round(520*r)},o={palm:[],tree:[],shrub:[],tuft:[],rock:[]},s={x:0,y:1,z:0},c=(e,t)=>{if(Math.hypot(e,t)>790||Math.hypot(e-K.center[0],t-K.center[1])<K.radius+8||qd(e,t)<ad.halfWidth*1.15)return!0;let n=e-J.center[0],r=t-J.center[1],i=n*Wd-r*Gd,a=n*Gd+r*Wd;if(Math.abs(i)<J.terraceHalfWidth+12&&Math.abs(a)<J.terraceHalfLength+12||_u(e,t,hd[0],hd[1],J.center[0],J.center[1])<14)return!0;let o=dd.ledge;return Math.abs(e-o.center[0])<o.halfLength+14&&Math.abs(t-o.center[1])<o.halfWidth+14||Math.hypot(e-ud.standPoint[0],t-ud.standPoint[1])<22},l=(e,t,n)=>{if(c(t,n))return!1;let r=Cd(t,n);if(wd(t,n,s,2),s.y<(e===`rock`?.55:.78)||r>(e===`rock`?260:170)||r<1.6&&e!==`rock`)return!1;let a=qd(t,n),l=Math.exp(-Math.max(0,a-20)/120)+.15,u=Xu.fbm(t*.008+50,n*.008-20,2)*.5+.5,d;if(d=e===`palm`?l*1.4*(r<40?1:.15):e===`tree`?(.25+u)*(r<120?.8:.3):e===`shrub`?.35+u*.8:e===`tuft`?l*1.2+u*.3:.25+(1-s.y)*2.5+(r>60?.5:0),i()>d)return!1;let[f,p]={palm:[.8,1.25],tree:[.75,1.3],shrub:[.7,1.6],tuft:[.7,1.4],rock:[.4,2.6]}[e],m=f+i()**(e===`rock`?2.2:1)*(p-f);return o[e].push({x:t,y:r,z:n,scale:m,rotY:i()*Math.PI*2,tilt:(i()-.5)*(e===`rock`?.5:.08)}),!0};for(let e of[`palm`,`tree`,`shrub`,`tuft`,`rock`]){let t=a[e],n=0;for(;o[e].length<t&&n<t*30;){n++;let t,r;if((e===`palm`||e===`tuft`)&&i()<.6){let e=ad.points,n=Math.floor(i()*(e.length-1)),a=i(),o=i()<.5?-1:1,s=ad.halfWidth*1.3+i()**1.5*90,c=e[n][0]+(e[n+1][0]-e[n][0])*a,l=e[n][1]+(e[n+1][1]-e[n][1])*a,u=e[n+1][0]-e[n][0],d=e[n+1][1]-e[n][1],f=Math.hypot(u,d)||1;t=c+-d/f*s*o+(i()-.5)*20,r=l+u/f*s*o+(i()-.5)*20}else if(e===`palm`&&i()<.5){let e=i()*Math.PI*2,n=80+i()*90;t=K.center[0]+Math.cos(e)*n,r=K.center[1]+Math.sin(e)*n}else{let e=i()*Math.PI*2,n=Math.sqrt(i())*780;t=Math.cos(e)*n,r=Math.sin(e)*n}l(e,t,r)}}for(let e of o.palm)this.obstacles.push({kind:`circle`,space:`world`,x:e.x,z:e.z,r:.45*e.scale,yMin:e.y-1,yMax:e.y+9});for(let e of o.tree)this.obstacles.push({kind:`circle`,space:`world`,x:e.x,z:e.z,r:.55*e.scale,yMin:e.y-1,yMax:e.y+6});for(let e of o.rock)e.scale>1.1&&this.obstacles.push({kind:`circle`,space:`world`,x:e.x,z:e.z,r:.85*e.scale,yMin:e.y-1,yMax:e.y+e.scale});let u=(e,t)=>r=>{r.uniforms.uTime=n.uTime,r.uniforms.uWind=n.uWind,r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform vec2 uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
  vec3 vegOrigin = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
#else
  vec3 vegOrigin = vec3(0.0);
#endif
  float vegH = clamp(position.y / ${t.toFixed(2)}, 0.0, 1.5);
  float vegPhase = vegOrigin.x * 0.13 + vegOrigin.z * 0.17;
  float vegW = length(uWind);
  float vegGust = sin(uTime * (1.1 + vegW * 1.6) + vegPhase) * 0.6 + sin(uTime * 2.7 + vegPhase * 1.7) * 0.25;
  vec2 vegDir = vegW > 0.001 ? uWind / vegW : vec2(1.0, 0.0);
  float vegAmt = vegH * vegH * ${e.toFixed(3)} * (0.15 + vegW * 1.4) * (0.6 + vegGust);
  transformed.x += vegDir.x * vegAmt;
  transformed.z += vegDir.y * vegAmt;`)},d=e=>{let t=new ya({vertexColors:!0,roughness:e.rough??.85,metalness:0});return e.side&&(t.side=2),e.swayStrength&&(t.onBeforeCompile=u(e.swayStrength,e.swayHeight??5)),this.materials.push(t),t},f=[{kind:`palm`,geo:Zd(),mat:d({side:!0,swayStrength:1.1,swayHeight:9}),cast:t.shadows},{kind:`tree`,geo:Qd(),mat:d({swayStrength:.5,swayHeight:7}),cast:t.shadows},{kind:`shrub`,geo:$d(),mat:d({swayStrength:.25,swayHeight:1.4}),cast:!1},{kind:`tuft`,geo:ef(),mat:d({side:!0,swayStrength:.3,swayHeight:.8}),cast:!1},{kind:`rock`,geo:tf(),mat:d({rough:.95}),cast:t.shadows&&t.level===`high`}],p=new fn,m=new Vt,h=new Sn,g=new z,_=new z,v=new B;for(let e of f){this.geometries.push(e.geo);let t=new Map;for(let n of o[e.kind]){let e=`${Math.floor(n.x/Ud)},${Math.floor(n.z/Ud)}`,r=t.get(e);r||t.set(e,r=[]),r.push(n)}for(let n of t.values()){let t=new Ai(e.geo,e.mat,n.length);n.forEach((n,r)=>{h.set(n.tilt,n.rotY,n.tilt*.5),m.setFromEuler(h),g.set(n.x,n.y-(e.kind===`rock`?.25*n.scale:.15),n.z),_.setScalar(n.scale),p.compose(g,m,_),t.setMatrixAt(r,p);let i=Xu.noise(n.x*.05,n.z*.05)*.5+.5;v.setRGB(.82+i*.3,.84+i*.24,.8+(1-i)*.2),t.setColorAt(r,v)}),t.instanceColor&&(t.instanceColor.needsUpdate=!0),t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),t.castShadow=e.cast,t.receiveShadow=e.kind!==`tuft`,t.name=`veg-${e.kind}`,this.object.add(t)}}}update(e){}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();this.geometries.length=0,this.materials.length=0,this.object.clear()}};function Y(e,t,n=[]){return{kind:e,key:t,refs:n}}function rf(e,t){return{kind:`bible`,key:e,refs:[],bible:[t]}}var af={settlement:{id:`settlement`,sections:[Y(`summary`,`a`,[`11:25`,`23:23`,`71:1`]),Y(`reconstruction`,`b`)],refs:[`11:25`,`23:23`,`71:1`]},plaza:{id:`plaza`,sections:[Y(`summary`,`a`,[`71:5`,`71:8`,`71:9`,`71:10`]),Y(`quran`,`b`,[`71:9`]),Y(`reconstruction`,`c`)],refs:[`71:5`,`71:6`,`71:7`,`71:8`,`71:9`,`71:10`]},idols:{id:`idols`,sections:[Y(`quran`,`a`,[`71:23`]),Y(`interpretation`,`b`,[`71:23`]),Y(`reconstruction`,`c`)],refs:[`71:21`,`71:22`,`71:23`,`71:24`]},people:{id:`people`,sections:[Y(`quran`,`a`,[`11:27`]),Y(`quran`,`b`,[`71:7`]),Y(`reconstruction`,`c`)],refs:[`11:27`,`23:24`,`23:25`,`71:7`]},ark:{id:`ark`,sections:[Y(`quran`,`a`,[`11:37`]),Y(`quran`,`b`,[`54:13`]),Y(`quran`,`c`,[`29:15`]),rf(`d`,`Genesis 6:15`),rf(`e`,`Genesis 6:14`),rf(`f`,`Genesis 6:16`),Y(`interpretation`,`g`),Y(`reconstruction`,`h`)],refs:[`11:37`,`11:38`,`23:27`,`54:13`,`29:15`]},timber:{id:`timber`,sections:[Y(`quran`,`a`,[`23:27`]),rf(`b`,`Genesis 6:14`),Y(`interpretation`,`c`),Y(`reconstruction`,`d`)],refs:[`23:27`,`11:37`]},"planks-nails":{id:`planks-nails`,sections:[Y(`quran`,`a`,[`54:13`]),Y(`interpretation`,`b`,[`54:13`]),Y(`reconstruction`,`c`)],refs:[`54:13`]},"ark-hold":{id:`ark-hold`,sections:[Y(`quran`,`a`,[`11:40`]),Y(`quran`,`b`,[`11:41`]),rf(`c`,`Genesis 6:14`),rf(`d`,`Genesis 6:16`),Y(`reconstruction`,`e`)],refs:[`11:40`,`11:41`,`23:27`,`23:28`]},springs:{id:`springs`,sections:[Y(`quran`,`a`,[`54:12`]),Y(`quran`,`b`,[`11:40`]),Y(`interpretation`,`c`,[`11:40`,`23:27`])],refs:[`54:12`,`11:40`,`23:27`]},rain:{id:`rain`,sections:[Y(`quran`,`a`,[`54:11`]),Y(`interpretation`,`b`,[`71:10`,`71:11`]),Y(`reconstruction`,`c`)],refs:[`54:11`,`71:10`,`71:11`]},floodwaters:{id:`floodwaters`,sections:[Y(`quran`,`a`,[`54:12`]),Y(`quran`,`b`,[`11:42`]),Y(`interpretation`,`c`),Y(`reconstruction`,`d`)],refs:[`54:11`,`54:12`,`11:42`,`29:14`]},boarding:{id:`boarding`,sections:[Y(`quran`,`a`,[`11:40`]),Y(`interpretation`,`b`,[`11:40`]),Y(`reconstruction`,`c`)],refs:[`11:40`,`23:27`,`23:28`]},"son-hill":{id:`son-hill`,sections:[Y(`quran`,`a`,[`11:43`]),Y(`quran`,`b`,[`11:43`]),Y(`reconstruction`,`c`)],refs:[`11:42`,`11:43`]},"mount-judi":{id:`mount-judi`,sections:[Y(`quran`,`a`,[`11:44`]),Y(`interpretation`,`b`,[`11:44`]),Y(`reconstruction`,`c`)],refs:[`11:44`,`11:48`,`23:29`]}},of={settlement:e=>e.waterLevel<14,plaza:e=>e.waterLevel<6.5&&e.arkPath<.95,idols:e=>e.waterLevel<6.5&&e.arkPath<.95,people:e=>e.crowd>.25,ark:e=>e.arkBuild>.04,timber:e=>e.arkBuild>.02&&e.waterLevel<11,"planks-nails":e=>e.arkBuild>.02&&e.waterLevel<11,"ark-hold":e=>e.arkBuild>.95,springs:e=>e.springs>.2,rain:e=>e.rain>.25,floodwaters:e=>e.waterLevel>2.2,boarding:e=>e.arkBuild>.99&&e.springs>.4&&e.boarding<.98||e.disembark>.02&&e.arkPath>.95,"son-hill":e=>e.son>.2||e.waterLevel>20&&e.waterLevel<44,"mount-judi":()=>!0},sf=[11901554,11111781,12757121,10454882,12099708].map(e=>new B().setHex(e)),cf=new B().setHex(13482132);function lf(e,t){let n=ad.points,r=1/0;for(let i=0;i<n.length-1;i++){let a=_u(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]);a<r&&(r=a)}return r}function uf(e,t,n,r,i,a,o,s){let c=new Ki(e,t,n);c.rotateY(o),c.translate(r,i+t/2,a);let l=c.getAttribute(`position`).count,u=new Float32Array(l*3);for(let e=0;e<l;e++)u[e*3]=s.r,u[e*3+1]=s.g,u[e*3+2]=s.b;return c.setAttribute(`color`,new Ir(u,3)),c}function df(e,t,n){let r=Math.cos(n),i=Math.sin(n);return[e*r+t*i,-e*i+t*r]}var ff=class{constructor(e){H(this,`object`,new Bn),H(this,`obstacles`,[]),H(this,`interactables`,[]),H(this,`geometries`,[]),H(this,`materials`,[]),H(this,`intact`,[]),H(this,`ruins`,null),H(this,`postFlood`,!1),this.object.name=`settlement`;let t=e.quality,n=e.uniforms,r=gu(3301),[i,a]=K.center,o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=new B().setHex(7032888),m=new B().setHex(9071432),h=new B().setHex(1840914),g=(e,t,n)=>{for(let r of d)if(Math.hypot(r.x-e,r.z-t)<r.r+n)return!1;return!0},_=(e,t,n,r,i)=>{let a=1/0,o=-1/0;for(let[s,c]of[[-n,-r],[n,-r],[n,r],[-n,r],[0,0]]){let[n,r]=df(s,c,i),l=Cd(e+n,t+r);a=Math.min(a,l),o=Math.max(o,l)}return{lo:a,hi:o}},v=(e,t,n,i,a,l,u)=>{let d=sf[Math.floor(r()*sf.length)].clone().multiplyScalar(.92+r()*.14),g=_(e,t,i/2,a/2,n);f.push({x:e,z:t,yaw:n,w:i,d:a,lo:g.lo});let v=g.lo-1.2,y=g.hi+l;o.push(uf(i,y-v,a,e,v,t,n,d));let b=.25;for(let[r,s,c,l]of[[0,-a/2+b/2,i,b],[0,a/2-b/2,i,b],[-i/2+b/2,0,b,a],[i/2-b/2,0,b,a]]){let[i,a]=df(r,s,n);o.push(uf(c,.45,l,e+i,y,t+a,n,d.clone().multiplyScalar(.95)))}for(let r=0;r<Math.floor(i/1.2);r++){let[o,c]=df(-i/2+.6+r*1.2,a/2+.25,n);s.push(uf(.16,.16,.6,e+o,y-.45,t+c,n,p))}{let[o,l]=df((r()-.5)*(i-2.2),a/2+.02,n),u=Cd(e+o,t+l);c.push(uf(1,2,.08,e+o,u,t+l,n,h)),s.push(uf(1.3,.18,.12,e+o,u+2,t+l,n,m))}for(let o=0;o<2;o++){let[s,u]=df((o===0?-1:1)*(i/2+.02),(r()-.5)*(a-2),n);c.push(uf(.08,.55,.7,e+s,g.hi+l*.55,t+u,n,h))}if(this.obstacles.push({kind:`box`,space:`world`,x:e,z:t,halfX:i/2+.2,halfZ:a/2+.2,yaw:n,yMin:v,yMax:y+1}),u===2){let r=i*.6,s=a*.6,[u,f]=df(-i*.15,-a*.15,n);o.push(uf(r,2.8,s,e+u,y,t+f,n,d.clone().lerp(cf,.25)));let[p,m]=df(-i*.15,-a*.15+s/2+.02,n);c.push(uf(.9,1.8,.08,e+p,y,t+m,n,h));for(let r=0;r<8;r++){let[s,c]=df(i/2+.5,-a/2+.6+r*.45,n);o.push(uf(.9,(r+1)*(l/8),.45,e+s,g.lo-.5,t+c,n,d))}}if(r()<.35){let[r,o]=df(0,a/2+1.1,n),c=uf(i*.7,.08,2.2,e+r,g.hi+2.4,t+o,n,m.clone().multiplyScalar(1.15));s.push(c);for(let r of[-1,1]){let[o,c]=df(r*i*.33,a/2+2,n);s.push(uf(.12,2.4,.12,e+o,Cd(e+o,t+c)-.2,t+c,n,p))}}},y=(e,t,n,i)=>{let a=sf[Math.floor(r()*sf.length)].clone().multiplyScalar(.95),s=.45,c=i/2;for(let[r,l,u,d,f]of[[0,-c,i,s,!1],[0,c,i,s,!0],[-c,0,s,i,!1],[c,0,s,i,!1]]){let i=f?[[-c,-1.5],[1.5,c]]:[[-c,c]];for(let[c,f]of i){let i=f-c,p=(c+f)/2,m=u>d,[h,g]=df(m?p:r,m?l:p,n),_=Cd(e+h,t+g);o.push(uf(m?i:s,3.3,m?s:i,e+h,_-1,t+g,n,a)),this.obstacles.push({kind:`box`,space:`world`,x:e+h,z:t+g,halfX:(m?i:s)/2+.15,halfZ:(m?s:i)/2+.15,yaw:n,yMin:_-1,yMax:_+2.3})}}let[l,u]=df(0,-c+3.2,n);v(e+l,t+u,n,i-2.2,5.2,3.3,1)},b=t.level===`low`?34:50,x=0;d.push({x:K.plaza.center[0],z:K.plaza.center[1],r:K.plaza.radius+2}),d.push({x:K.idols.center[0],z:K.idols.center[1],r:K.idols.radius+2.5});for(let[e,t]of md)d.push({x:e,z:t,r:9});for(let e=0;e<1600&&x<b;e++){let e=r()*Math.PI*2,t=K.plaza.radius+6+r()**1.25*(K.radius-K.plaza.radius-14),n=e/(Math.PI/4)-Math.round(e/(Math.PI/4));if(Math.PI/4*Math.abs(n)*t<9||Math.abs(t-70)<8)continue;let o=i+Math.cos(e)*t,s=a+Math.sin(e)*t,c=Math.atan2(i-o,a-s)+(r()-.5)*.35;if(lf(o,s)<ad.halfWidth*2+12)continue;if(r()<.14){let e=12+r()*4,t=e*.72+1.2;if(!g(o,s,t))continue;d.push({x:o,z:s,r:t}),y(o,s,c,e),x++;continue}let l=1+Math.floor(r()*3),u=[];for(let e=0;e<l;e++)u.push(4.8+r()*3.2);let f=u.reduce((e,t)=>e+t,0),p=5.2+r()*3,m=Math.hypot(f,p)/2+1.3;if(!g(o,s,m))continue;d.push({x:o,z:s,r:m});let h=-f/2;for(let e=0;e<l;e++){let t=u[e],[n,i]=df(h+t/2,(r()-.5)*.8,c);v(o+n,s+i,c,t,p,2.8+r()*1.1,r()<.2?2:1),h+=t}x++}let[S,C]=K.plaza.center,w=Cd(S,C);{let e=new qi(1.6,1.75,1,16,1,!0);e.translate(S,w+.3,C+6),u.push(pf(e,new B().setHex(9273970)));let t=new qi(1.75,1.75,.15,16);t.translate(S,w+.85,C+6),u.push(pf(t,new B().setHex(10195071)));let n=new qi(1.45,1.45,.05,16);n.translate(S,w+.55,C+6),c.push(pf(n,h));for(let e of[-1,1])s.push(uf(.18,2.6,.18,S+e*1.5,w,C+6,0,p));s.push(uf(3.4,.16,.16,S,w+2.5,C+6,0,p)),this.obstacles.push({kind:`circle`,space:`world`,x:S,z:C+6,r:2,yMin:w-1,yMax:w+3})}let T=[8215100,7301714,9072207,6116679].map(e=>new B().setHex(e));for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.4,n=S+Math.cos(t)*17,r=C+Math.sin(t)*17,i=Math.atan2(S-n,C-r),a=Cd(n,r);for(let[e,t]of[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]]){let[o,c]=df(e,t,i);s.push(uf(.1,2.3,.1,n+o,a-.2,r+c,i,p))}let o=new oa(3.2,2.5,1,1);o.rotateX(-Math.PI/2+.18),o.rotateY(i),o.translate(n,a+2.2,r),l.push(pf(o,T[e%T.length])),s.push(uf(2.6,.9,1.4,n,a-.1,r,i,m)),this.obstacles.push({kind:`box`,space:`world`,x:n,z:r,halfX:1.6,halfZ:1.2,yaw:i,yMin:a-1,yMax:a+2.4})}{let e=[];for(let t=0;t<=10;t++){let n=t/10;e.push(new R(.05+Math.sin(n*Math.PI)*.32+(n>.8?.06:0),n*.85))}let t=new aa(e,10),n=new B().setHex(10251078);for(let e=0;e<26;e++){let e=r()*Math.PI*2,i=9+r()*12,a=S+Math.cos(e)*i,o=C+Math.sin(e)*i,s=t.clone(),c=.8+r()*.6;s.scale(c,c,c),s.translate(a,Cd(a,o)-.05,o),u.push(pf(s,n.clone().multiplyScalar(.85+r()*.3)))}t.dispose()}let E=[];{let[e,t]=K.idols.center,n=new B().setHex(8682093);for(let i=0;i<5;i++){let a=Math.PI*(.15+i/4*.7),o=e+Math.cos(a)*K.idols.radius,s=t-Math.sin(a)*K.idols.radius*.6,c=2.3+r()*1,l=new ia(1,2);l.deleteAttribute(`normal`),l.deleteAttribute(`uv`);let u=Hd(l);l.dispose();let d=u.getAttribute(`position`),f=new z;for(let e=0;e<d.count;e++){f.fromBufferAttribute(d,e);let t=Xu.noise(f.x*2+i*3,f.y*2+f.z*2)*.12;f.set(f.x*(.42+t),(f.y*.5+.5)*c,f.z*(.28+t*.6)),d.setXYZ(e,f.x,f.y,f.z)}u.computeVertexNormals(),u.setAttribute(`uv`,new Ir(new Float32Array(d.count*2),2)),u.rotateY(a+(r()-.5)*.4),u.rotateZ((r()-.5)*.08);let p=Cd(o,s);u.translate(o,p-.3,s),E.push(pf(u.toNonIndexed(),n.clone().multiplyScalar(.85+r()*.25))),u.dispose(),this.obstacles.push({kind:`circle`,space:`world`,x:o,z:s,r:.7,yMin:p-1,yMax:p+c})}}{let e=new B().setHex(7232068),t=new B().setHex(6257206),n=0;for(let o=0;o<300&&n<14;o++){let o=r()*Math.PI*2,c=24+r()*90,u=i+Math.cos(o)*c,f=a+Math.sin(o)*c;if(!g(u,f,1.5))continue;d.push({x:u,z:f,r:1.5});let p=Cd(u,f),m=new qi(.17,.28,8,6,1,!0);m.translate(u,p+4,f),s.push(pf(m,e));for(let e=0;e<9;e++){let n=new oa(.8,3.8,1,3);n.translate(0,1.9,0);let r=n.getAttribute(`position`);for(let e=0;e<r.count;e++){let t=r.getY(e)/3.8;r.setX(e,r.getX(e)*(1-t*.85)),r.setZ(e,-t*t*1.9)}n.rotateX(-Math.PI/2+.6),n.rotateY(e/9*Math.PI*2),n.translate(u,p+7.9,f),n.computeVertexNormals(),l.push(pf(n,t))}this.obstacles.push({kind:`circle`,space:`world`,x:u,z:f,r:.4,yMin:p-1,yMax:p+8}),n++}}let D=e=>t=>{t.uniforms.uWetness=n.uWetness,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vSetPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vSetPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uWetness;
varying vec3 vSetPos;
float sHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float sNoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(sHash(i), sHash(i + vec3(1,0,0)), f.x), mix(sHash(i + vec3(0,1,0)), sHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(sHash(i + vec3(0,0,1)), sHash(i + vec3(1,0,1)), f.x), mix(sHash(i + vec3(0,1,1)), sHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
float sd = sNoise(vSetPos * 1.3) * 0.55 + sNoise(vSetPos * 5.0) * 0.45;
diffuseColor.rgb *= 1.0 - ${e.toFixed(2)} + sd * ${(e*2).toFixed(2)};
diffuseColor.rgb *= mix(1.0, 0.68, uWetness);`)},ee=new ya({vertexColors:!0,roughness:.95});ee.onBeforeCompile=D(.12);let O=new ya({vertexColors:!0,roughness:.85});O.onBeforeCompile=D(.08);let k=new ya({vertexColors:!0,roughness:1}),A=new ya({vertexColors:!0,roughness:.9,side:2}),te=new ya({vertexColors:!0,roughness:.92});te.onBeforeCompile=D(.15),this.materials.push(ee,O,k,A,te);let j=(e,n,r,i)=>{if(e.length===0)return null;let a=Bd(e.map(e=>e.index?e.toNonIndexed():e));for(let t of e)t.dispose();if(!a)return null;a.computeBoundingSphere(),this.geometries.push(a);let o=new vi(a,n);return o.name=i,o.castShadow=r&&t.shadows,o.receiveShadow=!0,this.object.add(o),o},ne=j(o,ee,!0,`houses`),re=[ne,j(s,O,!0,`settlement-wood`),j(c,k,!1,`openings`),j(l,A,!0,`awnings`),j(u,te,!0,`well-and-jars`)],ie=j(E,te,!0,`standing-stones`);re.push(ie);for(let e of re)e&&this.intact.push(e);{let e=[],t=new B().setHex(7692875);for(let n of f){let i=t.clone().multiplyScalar(.85+r()*.3),a=[[0,-n.d/2,n.w,.45],[0,n.d/2,n.w,.45],[-n.w/2,0,.45,n.d],[n.w/2,0,.45,n.d]];for(let[t,o,s,c]of a){let a=s>c,l=a?s:c,u=-l/2;for(;u<l/2;){let d=Math.min(l/2-u,.8+r()*2.2);if(r()<.7){let l=u+d/2,[f,p]=df(a?l:t,a?o:l,n.yaw),m=.35+r()*1.3;e.push(uf(a?d:s,m+1,a?c:d,n.x+f,n.lo-1,n.z+p,n.yaw,i))}u+=d}}let o=uf(n.w*.55,.5+r()*.4,n.d*.5,n.x,n.lo-.2,n.z,n.yaw+.3,i.clone().multiplyScalar(.9));e.push(o)}this.ruins=j(e,ee,!0,`ruins`),this.ruins&&(this.ruins.visible=!1)}let ae=new oi;this.materials.push(ae);let oe=new qi(K.plaza.radius,K.plaza.radius,2,20);oe.translate(S,w,C),this.geometries.push(oe);let se=new vi(oe,ae);se.visible=!1,this.object.add(se);let[ce,le]=K.idols.center,ue=Cd(ce,le);ne&&this.interactables.push({id:`settlement`,targets:[ne],maxDistance:450,isAvailable:of.settlement,anchor(e,t){let n=i+38,r=a+30;return e.set(n,Math.max(Cd(n,r),t.waterLevel)+11,r),!0}}),this.interactables.push({id:`plaza`,targets:[se],maxDistance:150,isAvailable:of.plaza,anchor(e){return e.set(S-8,w+5,C+8),!0}}),ie&&this.interactables.push({id:`idols`,targets:[ie],maxDistance:150,isAvailable:of.idols,anchor(e){return e.set(ce,ue+5.5,le-2),!0}})}update(e){let t=e.env.arkPath>.95;if(t!==this.postFlood){this.postFlood=t;for(let e of this.intact)e.visible=!t;this.ruins&&(this.ruins.visible=t)}}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();this.geometries.length=0,this.materials.length=0,this.object.clear()}};function pf(e,t){let n=e.getAttribute(`position`).count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=t.r,r[e*3+1]=t.g,r[e*3+2]=t.b;return e.setAttribute(`color`,new Ir(r,3)),e}var mf=e=>new B().setHex(e),hf=new z(0,1,0);function gf(e,t,n=0,r=0,i=0){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let a=e.index?e.toNonIndexed():e;a!==e&&e.dispose();let o=a.getAttribute(`position`).count,s=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o*2);for(let e=0;e<o;e++)s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b,c[e]=n,l[e*2]=r,l[e*2+1]=i;return a.setAttribute(`color`,new Nr(s,3)),a.setAttribute(`aLeg`,new Nr(c,1)),a.setAttribute(`aHip`,new Nr(l,2)),a}var _f=class{constructor(){H(this,`parts`,[])}ellipsoid(e,t,n,r,i,a,o,s=14){let c=new sa(1,s,Math.max(6,Math.round(s*.7)));return c.scale(e,t,n),c.translate(r,i,a),this.parts.push(gf(c,o)),this}segment(e,t,n,r,i,a=0,o=0,s=0){let c=new z(...e),l=new z(...t),u=l.clone().sub(c),d=new qi(r,n,u.length(),8,1,!1);return d.applyQuaternion(new Vt().setFromUnitVectors(hf,u.normalize())),d.translate((c.x+l.x)/2,(c.y+l.y)/2,(c.z+l.z)/2),this.parts.push(gf(d,i,a,o,s)),this}cone(e,t,n,r){let i=new z(...e),a=new z(...t),o=a.clone().sub(i),s=new Ji(n,o.length(),7);return s.applyQuaternion(new Vt().setFromUnitVectors(hf,o.normalize())),s.translate((i.x+a.x)/2,(i.y+a.y)/2,(i.z+a.z)/2),this.parts.push(gf(s,r)),this}legs(e,t,n,r,i,a,o,s){let c=[[1,-e,n],[2,e,n],[3,-e,r],[4,e,r]];for(let[e,n,r]of c)this.segment([n,.08,r],[n,t+.08,r],a,i,o,e,t,r),this.segment([n,0,r+.02],[n,.1,r+.02],a*1.15,a*1.05,s,e,t,r);return this}build(){let e=Bd(this.parts);for(let e of this.parts)e.dispose();if(!e)throw Error(`animal geometry merge failed`);return e.computeBoundingSphere(),e}},vf=mf(2761759),yf=[{name:`camel`,stride:2.6,length:2.6,build(){let e=mf(12886384),t=mf(11109975);return new _f().ellipsoid(.42,.44,.95,0,1.68,0,e).ellipsoid(.32,.42,.46,0,2.08,-.05,e).legs(.25,1.55,.6,-.6,.12,.06,t,vf).segment([0,1.8,.82],[0,2.4,1.38],.17,.11,e).ellipsoid(.12,.14,.28,0,2.44,1.6,e).segment([0,1.78,-.92],[0,1.25,-1.02],.05,.03,t).build()}},{name:`cattle`,stride:2,length:2.4,build(){let e=mf(8276784),t=mf(14274488);return new _f().ellipsoid(.48,.5,.95,0,1.18,0,e).legs(.28,1,.62,-.62,.13,.09,e,vf).segment([0,1.3,.8],[0,1.36,1.15],.25,.2,e).ellipsoid(.17,.21,.3,0,1.3,1.36,e).cone([.12,1.47,1.3],[.38,1.66,1.24],.045,t).cone([-.12,1.47,1.3],[-.38,1.66,1.24],.045,t).segment([0,1.42,-.92],[0,.72,-1.02],.04,.03,e).build()}},{name:`horse`,stride:2.4,length:2.3,build(){let e=mf(7227440),t=mf(3089437);return new _f().ellipsoid(.36,.42,.86,0,1.33,0,e).legs(.2,1.18,.58,-.58,.09,.055,e,vf).segment([0,1.46,.66],[0,1.98,1.04],.17,.11,e).ellipsoid(.1,.13,.32,0,1.97,1.3,e).ellipsoid(.04,.24,.3,0,1.86,.83,t).segment([0,1.48,-.86],[0,.82,-1.06],.07,.03,t).build()}},{name:`donkey`,stride:1.6,length:1.7,build(){let e=mf(9143161),t=mf(13617339);return new _f().ellipsoid(.28,.33,.62,0,.98,0,e).legs(.16,.84,.42,-.42,.075,.05,e,vf).segment([0,1.07,.48],[0,1.42,.74],.13,.09,e).ellipsoid(.09,.12,.26,0,1.43,.94,e).ellipsoid(.07,.07,.07,0,1.36,1.15,t).segment([.05,1.52,.88],[.09,1.82,.84],.035,.02,e).segment([-.05,1.52,.88],[-.09,1.82,.84],.035,.02,e).segment([0,1.08,-.62],[0,.62,-.72],.03,.02,e).build()}},{name:`sheep`,stride:1,length:1.1,build(){let e=mf(14735817),t=mf(3814188);return new _f().ellipsoid(.31,.33,.5,0,.7,0,e,12).legs(.15,.5,.3,-.3,.05,.04,t,vf).ellipsoid(.1,.12,.18,0,.84,.56,t).ellipsoid(.12,.03,.05,0,.9,.5,t).build()}},{name:`goat`,stride:1.1,length:1.1,build(){let e=mf(6047286),t=mf(3878437);return new _f().ellipsoid(.23,.28,.46,0,.74,0,e).legs(.13,.58,.3,-.3,.055,.04,e,vf).segment([0,.82,.36],[0,1.02,.5],.09,.07,e).ellipsoid(.08,.1,.18,0,1.05,.62,e).cone([.04,1.14,.58],[.08,1.34,.42],.03,t).cone([-.04,1.14,.58],[-.08,1.34,.42],.03,t).cone([0,.96,.72],[0,.84,.74],.03,t).build()}},{name:`gazelle`,stride:1.6,length:1.2,build(){let e=mf(12290902),t=mf(15260870),n=mf(2892830);return new _f().ellipsoid(.18,.24,.46,0,.9,0,e).ellipsoid(.15,.1,.36,0,.78,0,t).legs(.11,.8,.3,-.3,.045,.03,e,vf).segment([0,.98,.36],[0,1.32,.55],.07,.05,e).ellipsoid(.07,.09,.18,0,1.35,.68,e).cone([.03,1.43,.62],[.05,1.78,.5],.022,n).cone([-.03,1.43,.62],[-.05,1.78,.5],.022,n).build()}},{name:`lion`,stride:1.6,length:2,build(){let e=mf(12094290),t=mf(8806447);return new _f().ellipsoid(.3,.34,.78,0,.9,0,e).legs(.2,.72,.5,-.5,.1,.08,e,mf(9398846)).ellipsoid(.3,.32,.22,0,1.05,.72,t).ellipsoid(.2,.2,.25,0,1.06,.86,e).ellipsoid(.08,.08,.1,0,.98,1.08,e).segment([0,.98,-.78],[0,.52,-1.16],.035,.025,e).ellipsoid(.05,.07,.05,0,.5,-1.18,t).build()}},{name:`bear`,stride:1.5,length:1.9,build(){let e=mf(4928807);return new _f().ellipsoid(.45,.48,.82,0,.92,0,e).legs(.26,.66,.5,-.5,.15,.13,e,mf(3023129)).ellipsoid(.21,.21,.26,0,1.05,.88,e).ellipsoid(.09,.08,.13,0,.99,1.12,mf(7033408)).ellipsoid(.06,.06,.04,.14,1.24,.84,e).ellipsoid(.06,.06,.04,-.14,1.24,.84,e).build()}},{name:`elephant`,stride:2.6,length:3.6,build(){let e=mf(8354677),t=mf(15327692);return new _f().ellipsoid(.85,.95,1.45,0,2.2,0,e,16).legs(.5,1.5,.85,-.85,.29,.26,e,mf(6117973)).ellipsoid(.55,.6,.55,0,2.6,1.45,e).ellipsoid(.07,.56,.46,.6,2.6,1.25,e).ellipsoid(.07,.56,.46,-.6,2.6,1.25,e).segment([0,2.4,1.85],[0,1.45,2.08],.17,.11,e).segment([0,1.45,2.08],[0,.55,2],.11,.07,e).cone([.2,2.1,1.85],[.24,1.8,2.3],.06,t).cone([-.2,2.1,1.85],[-.24,1.8,2.3],.06,t).segment([0,2.3,-1.42],[0,1.4,-1.55],.05,.03,e).build()}}],bf=`
  if (aLeg > 0.5) {
    // Diagonal pairs move together: front-left with back-right, front-right with back-left.
    float legPhase = (aLeg < 1.5 || aLeg > 3.5) ? 0.0 : 3.14159265;
    float swing = sin(aGait.x + legPhase) * aGait.y * 0.5;
    float dy = transformed.y - aHip.x;
    float dz = transformed.z - aHip.y;
    transformed.y = aHip.x + dy * cos(swing) - dz * sin(swing);
    transformed.z = aHip.y + dy * sin(swing) + dz * cos(swing);
  } else {
    transformed.y += abs(sin(aGait.x)) * aGait.y * 0.035;
  }
`,xf=class{constructor(e){H(this,`pts`,void 0),H(this,`cum`,[0]),this.pts=e;for(let t=1;t<e.length;t++){let[n,r,i]=e[t-1],[a,o,s]=e[t];this.cum.push(this.cum[t-1]+Math.hypot(a-n,o-r,s-i))}}get length(){return this.cum[this.cum.length-1]}at(e,t){let n=this.pts,r=this.cum,i=1;for(;i<n.length-1&&e>r[i];)i++;let a=uu((e-r[i-1])/Math.max(1e-4,r[i]-r[i-1])),o=n[i-1],s=n[i];return t.set(o[0]+(s[0]-o[0])*a,o[1]+(s[1]-o[1])*a,o[2]+(s[2]-o[2])*a),{yaw:Math.atan2(s[0]-o[0],s[2]-o[2]),ground:o[1]===0&&s[1]===0}}},Sf=(q.ramp.xInner+q.ramp.xOuter)/2,Cf=q.door.sill,wf=[-q.innerHalfX+2.6,Cf,0],Tf=[-q.beam/2+.2,Cf,0],Ef=[(q.landing.x0+q.landing.x1)/2,Cf,0],Df=[Sf,Cf,q.ramp.zHigh],Of=[Sf,0,q.ramp.zLow],kf=new xf([[Sf,0,J.terraceHalfLength],Of,Df,Ef,Tf,wf]),Af=5,jf=4;function Mf(){let e=[];for(let[t,n]of[[0,0],[.34,0],[.33,.25],[.29,.7],[.25,1.1],[.24,1.32],[.2,1.42],[0,1.46]])e.push(new R(t,n));let t=new aa(e,10);t.deleteAttribute(`uv`);let n=new ia(.13,1);n.deleteAttribute(`uv`),n.scale(1,1.15,1),n.translate(0,1.58,.01);let r=new qi(.12,.2,.42,9,1,!0);r.deleteAttribute(`uv`),r.translate(0,1.47,-.02);let i=Bd([t.toNonIndexed(),n,r.toNonIndexed()]);return t.dispose(),n.dispose(),r.dispose(),i.computeVertexNormals(),i}function Nf(){let e=new Ki(.14,.12,.45);e.deleteAttribute(`uv`);let t=new Ki(1.1,.02,.26);t.deleteAttribute(`uv`);let n=Bd([e.toNonIndexed(),t.toNonIndexed()]);return e.dispose(),t.dispose(),n.computeVertexNormals(),n}var Pf=class{constructor(e){H(this,`object`,new Bn),H(this,`interactables`,[]),H(this,`roomObstacles`,[]),H(this,`geometries`,[]),H(this,`materials`,[]),H(this,`people`,void 0),H(this,`personFade`,void 0),H(this,`animals`,[]),H(this,`animalFade`,[]),H(this,`animalGait`,[]),H(this,`birds`,void 0),H(this,`birdFade`,void 0),H(this,`town`,[]),H(this,`townPlaza`,[]),H(this,`townAway`,[]),H(this,`townThreshold`,[]),H(this,`mockers`,[]),H(this,`mockPath`,[]),H(this,`groups`,[]),H(this,`believerBase`,void 0),H(this,`son`,void 0),H(this,`m4`,new fn),H(this,`m4b`,new fn),H(this,`q`,new Vt),H(this,`e`,new Sn),H(this,`v`,new z),H(this,`s`,new z),H(this,`local`,new z),H(this,`up`,new z(0,1,0)),H(this,`boardAnchor`,new z),H(this,`anchorValid`,!1),this.object.name=`figures`;let t=e.uniforms,n=gu(911),r=e.quality.level===`low`,i=e.quality.shadows,a=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFade;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vFade < 0.999) {
  float dth = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
  if (dth > vFade) discard;
}`)},o=new ya({color:16777215,roughness:1});o.onBeforeCompile=e=>{e.uniforms.uTime=t.uTime,e.uniforms.uWind=t.uWind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
varying float vFade;
uniform float uTime;
uniform vec2 uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFade = aFade;
float figH = clamp(position.y / 1.5, 0.0, 1.0);
transformed.x += uWind.x * figH * figH * 0.12 * sin(uTime * 3.1 + position.y * 4.0);
transformed.z += uWind.y * figH * figH * 0.12 * sin(uTime * 2.7 + position.y * 3.0);`),a(e)};let s=new ya({vertexColors:!0,roughness:.92});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
attribute float aLeg;
attribute vec2 aHip;
attribute vec2 aGait;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvFade = aFade;\n${bf}`),a(e)};let c=new ya({color:3091239,roughness:1});c.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFade = aFade;`),a(e)},this.materials.push(o,s,c);let l=r?26:40,u=[3,3,2],d=u.reduce((e,t)=>e+t,0),f=l+6+d+1,p=Mf();this.geometries.push(p),this.people=new Ai(p,o,f),this.personFade=new Si(new Float32Array(f),1),p.setAttribute(`aFade`,this.personFade),this.people.castShadow=i,this.people.frustumCulled=!1;let m=[3880240,4866102,3093046,5326394,4012595,4602415].map(e=>new B().setHex(e));for(let e=0;e<f;e++)this.people.setColorAt(e,m[e%m.length].clone().multiplyScalar(.8+n()*.35));this.people.instanceColor&&(this.people.instanceColor.needsUpdate=!0),this.object.add(this.people);let h=(e,t)=>({x:e,z:t,yaw:0,phase:n()*10,scale:.92+n()*.16,fade:0}),[g,_]=K.plaza.center;for(let e=0;e<l;e++){let e=n()*Math.PI*2,t=6+n()*13,r=[g+Math.cos(e)*t,_+Math.sin(e)*t],i=e+(n()-.5)*.8,a=30+n()*60,o=[g+Math.cos(i)*a,_+Math.sin(i)*a];this.townPlaza.push(r),this.townAway.push(o),this.townThreshold.push(n()),this.town.push(h(r[0],r[1]))}let v=Math.cos(J.yaw),y=Math.sin(J.yaw),b=(e,t)=>[J.center[0]+e*v+t*y,J.center[1]-e*y+t*v];this.mockPath.push(b(34,60),b(30,20),b(36,-30),b(44,-70),b(60,-20),b(55,40));for(let e=0;e<6;e++){let t=h(this.mockPath[0][0],this.mockPath[0][1]);t.phase=e/6*6,this.mockers.push(t)}this.believerBase=l+6,this.son=h(ud.standPoint[0],ud.standPoint[1]);for(let e of yf){let t=e.build();this.geometries.push(t);let n=new Ai(t,s,2),r=new Si(new Float32Array(2),1),a=new Si(new Float32Array(4),2);t.setAttribute(`aFade`,r),t.setAttribute(`aGait`,a),n.frustumCulled=!1,n.castShadow=i,n.receiveShadow=!0,n.setColorAt(0,new B(1,1,1)),n.setColorAt(1,new B(.88,.86,.84)),n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.name=`animal-${e.name}`,this.animals.push(n),this.animalFade.push(r),this.animalGait.push(a),this.object.add(n)}let x=[],S=q.rooms.pitch;for(let e=-q.innerHalfZ+S/2;e<q.innerHalfZ-S/2;e+=S)for(let t of[1,-1])t<0&&Math.abs(e)<7||x.push({x:t*(q.innerHalfX-2.2),z:e,side:t});x.sort((e,t)=>Math.abs(e.z)-Math.abs(t.z)||t.side-e.side);let C=yf.length,w=C+u.length,T=[];for(let e=0;e<w;e++){let t=e%3,r=Math.floor(e/3);T.push([-17-t*5.5-n()*2,0,38+r*10+n()*4])}let E=[wf,Tf,Ef,Df,Of,[Sf,0,q.ramp.zLow+14]];yf.forEach((e,t)=>{let n=e.length>3?1.25:e.length>2?.95:.75,r=u.length+(C-1-t);this.groups.push({members:[0,1].map(r=>({mesh:t,index:r,lateral:r===0?-n:n,stride:e.stride,phase:r*.7,gait:0,fade:0})),boardOrder:t,outOrder:r,room:x[t]??null,dest:T[r],outRoute:new xf([...E,T[r]]),obstacle:null});let i=this.groups[this.groups.length-1];i.room&&(i.obstacle={kind:`circle`,space:`ark`,x:i.room.x,z:i.room.z,r:1.7,yMin:-1e6,yMax:-1e6},this.roomObstacles.push(i.obstacle))});let D=this.believerBase;u.forEach((e,t)=>{let r=[];for(let t=0;t<e;t++)r.push({mesh:`person`,index:D++,lateral:(t-(e-1)/2)*.8,stride:1.4,phase:n()*6,gait:0,fade:0});this.groups.push({members:r,boardOrder:C+t,outOrder:t,room:null,dest:T[t],outRoute:new xf([...E,T[t]]),obstacle:null})});let ee=Nf();this.geometries.push(ee),this.birds=new Ai(ee,c,6),this.birdFade=new Si(new Float32Array(6),1),ee.setAttribute(`aFade`,this.birdFade),this.birds.frustumCulled=!1,this.object.add(this.birds);let O=Cd(g,_);this.interactables.push({id:`people`,targets:[this.people],maxDistance:160,isAvailable:of.people,anchor(e,t){return e.set(g+10,O+4.5,_-10),t.crowd>.5}},{id:`boarding`,targets:[this.people,...this.animals],maxDistance:160,isAvailable:of.boarding,anchor:e=>(e.copy(this.boardAnchor),this.anchorValid)})}setPerson(e,t,n,r,i,a,o,s){this.q.setFromAxisAngle(this.up,i),this.v.set(t,n+s,r),this.s.set(a,o>0?a:1e-4,a),this.m4.compose(this.v,this.q,this.s),this.people.setMatrixAt(e,this.m4),this.personFade.setX(e,o)}placeMember(e,t,n,r,i,a,o,s,c){this.v.set(n,r,i).applyMatrix4(t.matrix),o&&(this.v.y=Cd(this.v.x,this.v.z));let l=t.yaw+a;if(e.mesh===`person`){this.setPerson(e.index,this.v.x,this.v.y,this.v.z,l,1,s,c);return}let u=this.animals[e.mesh];this.e.set(0,l,0),this.q.setFromEuler(this.e),this.s.setScalar(s>0?1:1e-4),this.m4.compose(this.v,this.q,this.s),u.setMatrixAt(e.index,this.m4),this.animalFade[e.mesh].setX(e.index,s),this.animalGait[e.mesh].setXY(e.index,e.phase,e.gait)}hideMember(e){this.m4b.makeScale(1e-4,1e-4,1e-4),e.mesh===`person`?(this.people.setMatrixAt(e.index,this.m4b),this.personFade.setX(e.index,0)):(this.animals[e.mesh].setMatrixAt(e.index,this.m4b),this.animalFade[e.mesh].setX(e.index,0)),e.fade=0}updateProcession(e){let t=e.env,n=e.ark,r=e.dt,i=this.groups.length,a=kf.length,o=(i-1)*Af+uu(t.boarding)*a,s=t.arkBuild>.99&&t.boarding<1&&t.disembark<=0,c=t.boarding>0?1:U(.4,.7,t.springs),l=0;for(let e of this.groups)l=Math.max(l,e.outRoute.length);let u=uu(t.disembark)*(l+(i-1)*jf),d=t.arkPath>.95&&n.grounded;this.anchorValid=!1;for(let i of this.groups){let l=o-i.boardOrder*Af,f=d?u-i.outOrder*jf:0;if(i.obstacle){let e=f<=0&&(l>=a||t.boarding>=1&&t.arkBuild>.99);i.obstacle.yMin=e?Cf-.3:-1e6,i.obstacle.yMax=e?Cf+2.5:-1e6}for(let o of i.members){let u;if(f>0){let e=i.outRoute,t=Math.min(f,e.length),a=e.at(t,this.local);u=f<e.length;let s=u?a.yaw:a.yaw+Math.sin(o.phase*.07+o.lateral)*.6,c=this.local.x+Math.cos(a.yaw)*o.lateral,l=this.local.z-Math.sin(a.yaw)*o.lateral;u&&(o.phase=t/o.stride*Math.PI*2),o.gait=pu(o.gait,+!!u,6,r>0?r:1),this.placeMember(o,n,c,this.local.y,l,s,a.ground,1,o.mesh===`person`&&u?Math.abs(Math.sin(o.phase))*.05:0),!this.anchorValid&&u&&(this.boardAnchor.copy(this.v).y+=5,this.anchorValid=!0)}else if(l>=a||t.boarding>=1&&t.arkBuild>.99){if(i.room&&o.mesh!==`person`){let t=-i.room.side*Math.PI*.5+Math.sin(e.time*.3+o.lateral*3)*.12;o.gait=0,this.placeMember(o,n,i.room.x,Cf,i.room.z+o.lateral*1.1,t,!1,1,0)}else this.hideMember(o)}else if(s||t.boarding>0){let e=Math.max(0,l),i=kf.at(e,this.local);u=t.boarding>5e-4&&e>0;let s=this.local.x+Math.cos(i.yaw)*o.lateral,d=this.local.z-Math.sin(i.yaw)*o.lateral;o.phase=e/o.stride*Math.PI*2,o.gait=pu(o.gait,+!!u,6,r>0?r:1);let f=c*(1-U(a-2.5,a,e));this.placeMember(o,n,s,this.local.y,d,i.yaw,i.ground,f,o.mesh===`person`&&u?Math.abs(Math.sin(o.phase))*.05:0),!this.anchorValid&&e<a-3&&(this.boardAnchor.copy(this.v).y+=5,this.anchorValid=!0)}else this.hideMember(o)}}for(let e=0;e<this.animals.length;e++)this.animals[e].instanceMatrix.needsUpdate=!0,this.animalFade[e].needsUpdate=!0,this.animalGait[e].needsUpdate=!0;let f=t.boarding,p=d?t.disembark:0;for(let t=0;t<6;t++){let r=Math.floor(t/2),i=p>0,a=uu(i?(p-.05-r*.1)/.3:(f-.15-r*.12)/.25),o=(i?a>0&&a<1:f>0&&a>0&&a<1)?i?1-U(.75,1,a):1-U(.85,1,a):0,s=-q.beam/2-.3,c=q.wallTop+.25,l=12+r*9,u=s-120-r*25,d=c+30+r*6,m=l+60-r*40,h=i?a:1-a,g=s+(u-s)*h+t%2*1.4,_=c+(d-c)*h+Math.sin(h*8+t)*2*h,v=l+(m-l)*h;this.v.set(g,_,v).applyMatrix4(n.matrix);let y=n.yaw+Math.atan2(i?u-s:s-u,i?m-l:l-m);this.q.setFromAxisAngle(this.up,y);let b=.4+Math.abs(Math.sin(e.time*9+t))*.6;this.s.set(o>0?b:1e-4,o>0?1:1e-4,1),this.m4.compose(this.v,this.q,this.s),this.birds.setMatrixAt(t,this.m4),this.birdFade.setX(t,o)}this.birds.instanceMatrix.needsUpdate=!0,this.birdFade.needsUpdate=!0}update(e){let t=e.env,n=e.dt,r=e.time,i=0,[a,o]=K.plaza.center,s=U(1,.4,t.crowd);for(let e=0;e<this.town.length;e++){let c=this.town[e],l=this.townThreshold[e],u=s>l*.9,d=u?this.townAway[e]:this.townPlaza[e],f=d[0]-c.x,p=d[1]-c.z,m=Math.hypot(f,p),h=!1;if(m>.3&&n>0){let e=Math.min(m,1.3*n);c.x+=f/m*e,c.z+=p/m*e,c.yaw=Math.atan2(f,p),h=!0}else n===0&&(c.x=d[0],c.z=d[1]);!h&&!u&&(c.yaw=Math.atan2(a-c.x,o-c.z)+Math.sin(r*.3+c.phase)*.6);let g=t.crowd>l*.35+.02;c.fade=uu(c.fade+(g?1:-1)*n*.8),n===0&&(c.fade=+!!g);let _=h?Math.abs(Math.sin(r*6+c.phase))*.05:0;this.setPerson(i++,c.x,Cd(c.x,c.z),c.z,c.yaw,c.scale,c.fade,_)}let c=t.work>.5&&t.crowd>.2,l=this.mockPath.length;for(let e=0;e<this.mockers.length;e++){let t=this.mockers[e],a=(r*.035+t.phase/6)%1*l,o=Math.floor(a)%l,s=(o+1)%l,u=a-Math.floor(a),d=u<.25,f=d?0:(u-.25)/.75;t.x=this.mockPath[o][0]+(this.mockPath[s][0]-this.mockPath[o][0])*f,t.z=this.mockPath[o][1]+(this.mockPath[s][1]-this.mockPath[o][1])*f,t.yaw=d?Math.atan2(J.center[0]-t.x,J.center[1]-t.z):Math.atan2(this.mockPath[s][0]-this.mockPath[o][0],this.mockPath[s][1]-this.mockPath[o][1]),t.fade=uu(t.fade+(c?1:-1)*n*.6),n===0&&(t.fade=+!!c);let p=d?0:Math.abs(Math.sin(r*6+t.phase))*.05;this.setPerson(i++,t.x,Cd(t.x,t.z),t.z,t.yaw,t.scale,t.fade,p)}this.updateProcession(e);{let n=this.son,r=Cd(n.x,n.z),i=Math.atan2(e.ark.position.x-n.x,e.ark.position.z-n.z)+.4,a=t.son*(1-U(r-.5,r+.4,t.waterLevel));this.setPerson(this.people.count-1,n.x,r,n.z,i,1,a,0)}this.people.instanceMatrix.needsUpdate=!0,this.personFade.needsUpdate=!0}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();this.geometries.length=0,this.materials.length=0,this.object.clear()}},Ff=4,If=2.4;function X(e,t,n,r,i,a,o=!0){let s=Math.abs(r-e),c=Math.abs(i-t),l=Math.abs(a-n),u=new Ki(s,c,l),d=u.getAttribute(`uv`),f=[[l,c],[l,c],o?[l,s]:[s,l],o?[l,s]:[s,l],[s,c],[s,c]];for(let e=0;e<6;e++){let[t,n]=f[e];for(let r=0;r<4;r++){let i=e*4+r,a=e===2||e===3?o:!1,s=d.getX(i),c=d.getY(i),l=a?c:s,u=a?s:c;d.setXY(i,l*t/Ff,u*n/If)}}return u.translate((e+r)/2,(t+i)/2,(n+a)/2),u}function Lf(e){let t=Bd(e);for(let t of e)t.dispose();if(!t)throw Error(`mergeSlabs: incompatible geometries`);return t.computeBoundingSphere(),t}function Rf(e,t){if(!t)return[e];let n=[];return t.x0>e.x0&&n.push({x0:e.x0,x1:t.x0,z0:e.z0,z1:e.z1}),t.x1<e.x1&&n.push({x0:t.x1,x1:e.x1,z0:e.z0,z1:e.z1}),t.z0>e.z0&&n.push({x0:t.x0,x1:t.x1,z0:e.z0,z1:t.z0}),t.z1<e.z1&&n.push({x0:t.x0,x1:t.x1,z0:t.z1,z1:e.z1}),n}function zf(e,t,n,r,i,a,o=.3){i<n&&([n,i]=[i,n],[r,a]=[a,r]);let s=Math.hypot(i-n,a-r),c=X(e,-o,0,t,0,s);c.translate(0,0,-s/2);let l=Math.atan2(a-r,i-n);return c.rotateX(-l),c.translate(0,(r+a)/2,(n+i)/2),c}function Bf(e=256,t=7,n=[150,112,74]){let r=new Uint8Array(e*e*4),i=gu(t),a=e/8,o=[],s=[];for(let e=0;e<8;e++)o.push(.8+i()*.32),s.push(i());for(let t=0;t<e;t++){let i=Math.floor(t/a),c=t%a/a,l=o[i];for(let o=0;o<e;o++){let u=o/e,d=l*(.92+(Xu.noise(u*3+i*7.1,c*.6+i)*.5+Math.sin(u*60+Xu.noise(u*6,t*.05)*4+c*3)*.12)*.14),f=Math.min(c,1-c)*a;f<1.2&&(d*=.45+f*.3);let p=Math.abs(u-s[i])*e;p<1&&(d*=.5),Math.abs(p-3)<1.2&&(Math.abs(c-.3)<.06||Math.abs(c-.7)<.06)&&(d*=.3);let m=(t*e+o)*4;r[m]=Math.min(255,n[0]*d),r[m+1]=Math.min(255,n[1]*d),r[m+2]=Math.min(255,n[2]*d),r[m+3]=255}}let c=new xi(r,e,e,j,v);return c.colorSpace=Ye,c.wrapS=l,c.wrapT=l,c.magFilter=h,c.minFilter=_,c.generateMipmaps=!0,c.anisotropy=4,c.needsUpdate=!0,c}var Vf=Math.cos(J.yaw),Hf=Math.sin(J.yaw);function Uf(e,t,n,r,i,a=0){return{kind:`box`,space:`world`,x:J.center[0]+e*Vf+t*Hf,z:J.center[1]-e*Hf+t*Vf,halfX:n,halfZ:r,yaw:J.yaw+a,yMin:J.groundY-1,yMax:J.groundY+i}}function Wf(e,t,n,r){let i=[],a=.36;[4,3,2,1].forEach((o,s)=>{for(let c=0;c<o;c++){let l=new qi(a*(.9+r()*.2),a,n*(.92+r()*.08),8,1);l.rotateX(Math.PI/2);let u=(c-(o-1)/2)*a*2.05;l.translate(e+u,a+s*a*1.75,t+(r()-.5)*.6),i.push(l)}});let o=Bd(i);return i.forEach(e=>e.dispose()),o}function Gf(e,t,n,r){let i=[];for(let a=0;a<7;a++){let o=.2+a*.14;i.push(X(e-1.3,o-.06,t-n*.35-.1,e+1.3,o,t-n*.35+.1,!1)),i.push(X(e-1.3,o-.06,t+n*.35-.1,e+1.3,o,t+n*.35+.1,!1));for(let a=0;a<5;a++){let s=e-1+a*.5+(r()-.5)*.04;i.push(X(s-.22,o,t-n/2+r()*.3,s+.22,o+.07,t+n/2-r()*.3))}}let a=Bd(i);return i.forEach(e=>e.dispose()),a}function Kf(e,t,n,r,i){let a=new Bn;a.name=`ark-site-props`,a.position.set(J.center[0],J.groundY,J.center[1]),a.rotation.y=J.yaw;let o=gu(611),s=[],c=[],l=new oi,u=new Ki(1,1,1),d=[],f=[],p=(e,t,n,r,i,o,s)=>{let c=new vi(u,l);c.visible=!1,c.position.set(t,n,r),c.scale.set(i,o,s),a.add(c),e.push(c)},m=[[22,-32,12],[26,20,11],[4,-84,13],[-20,-58,10]],h=m.map(([e,t,n])=>Wf(e,t,n,o)),g=Bd(h);h.forEach(e=>e.dispose()),s.push(g);let _=new vi(g,t);_.castShadow=i!==`low`,_.receiveShadow=!0,a.add(_);for(let[e,t,n]of m)c.push(Uf(e,t,1.6,n/2,2.4)),p(d,e,1.3,t,3.4,2.8,n);let v=[[17,44,9],[-19,-40,8],[30,-6,7]],y=v.map(([e,t,n])=>Gf(e,t,n,o));for(let[e,t,n]of v)c.push(Uf(e,t,1.4,n/2,1.3)),p(f,e,.7,t,2.8,1.4,n);y.push(X(13.4,.85,5.4,16.6,1,6.6,!1));for(let[e,t]of[[-1.4,-.45],[1.4,-.45],[-1.4,.45],[1.4,.45]])y.push(X(15+e-.08,0,6+t-.08,15+e+.08,.85,6+t+.08));y.push(X(14.7,1,5.9,15.25,1.18,6.12)),c.push(Uf(15,6,1.7,.7,1.1));let b=.5;y.push(X(12.4,0,.04999999999999999,13.6,.08,.95)),y.push(X(12.4,0,.04999999999999999,13.6,.7,.10999999999999999)),y.push(X(12.4,0,.89,13.6,.7,.95)),y.push(X(12.4,0,.04999999999999999,12.46,.7,.95)),y.push(X(13.54,0,.04999999999999999,13.6,.7,.95)),c.push(Uf(13,b,.7,.5,.8)),p(f,13,.5,b,1.6,1.2,1.2);for(let e of[-1.8,1.8]){let t=-6+e;y.push(X(25.6,.9,t-.08,27.4,1.02,t+.08,!1)),y.push(X(25.7,0,t-.06,25.85,.95,t+.06)),y.push(X(27.15,0,t-.06,27.3,.95,t+.06))}c.push(Uf(26.5,-6,1.2,3,1.4));let x=Bd(y);y.forEach(e=>e.dispose()),s.push(x);let S=new vi(x,e);S.castShadow=i!==`low`,S.receiveShadow=!0,a.add(S);let C=new qi(.33,.36,7,8);C.rotateX(Math.PI/2),C.translate(26.5,1.35,-6),s.push(C),a.add(new vi(C,t));let w=new qi(.012,.008,.16,4);s.push(w);let T=new Ai(w,n,90),E=new fn,D=new zn;for(let e=0;e<90;e++)D.position.set(13+(o()-.5)*1,.55+o()*.12,b+(o()-.5)*.75),D.rotation.set((o()-.5)*2.5,o()*6,(o()-.5)*2.5),D.updateMatrix(),T.setMatrixAt(e,D.matrix);T.instanceMatrix.needsUpdate=!0,a.add(T);let ee=X(12.48,.08,.13,13.52,.55,.87);s.push(ee),a.add(new vi(ee,n));let O=new ca(.55,.11,6,18);O.rotateX(Math.PI/2),s.push(O);for(let[e,t]of[[13,24],[-16,-26],[18,-14]])for(let n=0;n<3;n++){let i=new vi(O,r);i.position.set(e,.1+n*.18,t),i.scale.setScalar(1-n*.12),a.add(i)}let k=new Ki(.22,.03,.12);s.push(k);let A=i===`low`?250:700,te=new Ai(k,e,A),j=new B;for(let e=0;e<A;e++){let t=(o()<.5?-1:1)*(12+o()**1.5*14),n=(o()-.5)*150;D.position.set(t,.02,n),D.rotation.set(0,o()*6.28,0),D.scale.setScalar(.7+o()),D.updateMatrix(),E.copy(D.matrix),te.setMatrixAt(e,E),j.setRGB(1.1+o()*.3,1.05+o()*.25,.95+o()*.2),te.setColorAt(e,j)}return te.instanceMatrix.needsUpdate=!0,te.instanceColor&&(te.instanceColor.needsUpdate=!0),a.add(te),{group:a,obstacles:c,timberTargets:d,plankTargets:f,chips:te,dispose(){for(let e of s)e.dispose();u.dispose(),l.dispose(),a.clear()}}}function qf(){return new ya({color:new B().setHex(5981750),roughness:.95})}var Z=q.beam/2,Q=q.length/2,Jf=q.innerHalfX,Yf=q.innerHalfZ,[Xf,Zf,Qf]=q.floors,$f=2.6;function ep(e){return[[e.x0,e.z0],[e.x0,e.z1],[e.x1,e.z1],[e.x1,e.z0]]}function tp(e,t,n,r){return{id:e,space:`ark`,polygon:ep(t),heightAt:()=>n,enabled:!1,interior:r}}function np(e,t,n,r,i,a,o,s){return{id:e,space:`ark`,polygon:ep({x0:t,x1:n,z0:Math.min(r,a),z1:Math.max(r,a)}),heightAt:(e,t)=>i+(o-i)*(t-r)/(a-r),enabled:!1,interior:s}}var rp=class{constructor(e){H(this,`object`,new Bn),H(this,`vessel`,new Bn),H(this,`site`,new Bn),H(this,`surfaces`,[]),H(this,`obstacles`,[]),H(this,`exterior`,[]),H(this,`siteObstacles`,[]),H(this,`interactables`,[]),H(this,`geometries`,[]),H(this,`materials`,[]),H(this,`buildY`,{value:0}),H(this,`pitch`,{value:0}),H(this,`hullMat`,void 0),H(this,`trimMat`,void 0),H(this,`trimPitch`,{value:0}),H(this,`timberMat`,void 0),H(this,`lampMat`,void 0),H(this,`frames`,void 0),H(this,`frameTotal`,void 0),H(this,`keel`,void 0),H(this,`shell`,void 0),H(this,`trim`,void 0),H(this,`floors`,[]),H(this,`interiorParts`,[]),H(this,`roof`,void 0),H(this,`scaffold`,void 0),H(this,`rampGroup`,void 0),H(this,`doorPivot`,void 0),H(this,`siteBuild`,void 0),H(this,`doorOpen`,1),H(this,`viewerInside`,!1),H(this,`interiorGlow`,0),H(this,`rampSurfaces`,[]),H(this,`textures`,void 0),H(this,`doorSurface`,void 0),this.object.name=`ark-root`,this.vessel.name=`ark`,this.vessel.matrixAutoUpdate=!1,this.site.name=`ark-site`,this.object.add(this.vessel,this.site);let t=e.quality,n=e.uniforms,r=t.shadows,i=Bf(256,11,[146,108,70]),a=Bf(256,23,[168,130,88]),o=(e,t)=>{let r=new ya({map:e,roughness:.82,metalness:0});return r.onBeforeCompile=e=>{e.uniforms.uBuildY=this.buildY,e.uniforms.uPitch=t,e.uniforms.uWetness=n.uWetness,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vArkY;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
  vArkY = (instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vArkY = transformed.y;
#endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uBuildY;
uniform float uPitch;
uniform float uWetness;
varying float vArkY;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vArkY > uBuildY) discard;`).replace(`#include <color_fragment>`,`#include <color_fragment>
// "Pitch it within and without with pitch" (Genesis 6:14): a dark, slightly glossy coat
// through which the plank pattern still shows faintly.
vec3 pitchCol = vec3(0.075, 0.056, 0.04) + diffuseColor.rgb * 0.3;
diffuseColor.rgb = mix(diffuseColor.rgb, pitchCol, uPitch);
diffuseColor.rgb *= mix(1.0, 0.75, uWetness * (1.0 - uPitch * 0.5));`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.38, max(uPitch * 0.85, uWetness * 0.6));`)},r};this.hullMat=o(i,this.pitch),this.trimMat=o(a,this.trimPitch),this.timberMat=new ya({map:a,roughness:.86,metalness:0}),this.timberMat.onBeforeCompile=e=>{e.uniforms.uWetness=n.uWetness,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uWetness;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.7, uWetness);`)},this.lampMat=new ya({color:3811864,emissive:new B(1,.62,.28),emissiveIntensity:.4});let s=qf(),c=new ya({color:2894376,roughness:.5,metalness:.6}),l=new ya({color:9074002,roughness:1}),u=new oi,d=new oi({side:2});this.materials.push(this.hullMat,this.trimMat,this.timberMat,this.lampMat,s,c,l,u,d),this.textures=[i,a];let f=(e,t,n,i=!0,a=!0)=>{this.geometries.push(e);let o=new vi(e,t);return o.castShadow=i&&r,o.receiveShadow=a,n.add(o),o};{let e=[];for(let t of[-Z+1,-Z/2,0,Z/2,Z-1])e.push(X(t-.3,0,-Q,t+.3,.45,Q));this.keel=f(Lf(e),this.timberMat,this.vessel)}{let e=5*od,t=[];for(let n=-Q+1;n<=Q-1;n+=e)t.push([-Jf+.15,n],[Jf-.15,n]);for(let n=-Z+2;n<=Z-2;n+=e)t.push([n,-Yf+.15],[n,Yf-.15]);t.sort((e,t)=>t[1]-e[1]);let n=new Ki(.3,q.wallTop,.3);n.translate(0,q.wallTop/2,0),this.geometries.push(n),this.frames=new Ai(n,this.timberMat,t.length);let i=new zn;t.forEach(([e,t],n)=>{i.position.set(e,0,t),i.updateMatrix(),this.frames.setMatrixAt(n,i.matrix)}),this.frames.instanceMatrix.needsUpdate=!0,this.frames.castShadow=r,this.frames.receiveShadow=!0,this.frameTotal=t.length,this.frames.count=0,this.vessel.add(this.frames)}{let e=q.wall,t=q.wallTop,n=q.door,r=[];r.push(X(-Z,0,-Q,Z,.45,Q)),r.push(X(Z-e,0,-Q,Z,t,Q)),r.push(X(-Z,0,-Q,-Z+e,t,n.z0)),r.push(X(-Z,0,n.z1,-Z+e,t,Q)),r.push(X(-Z,0,n.z0,-Z+e,n.sill,n.z1)),r.push(X(-Z,n.sill+n.height,n.z0,-Z+e,t,n.z1)),r.push(X(-Z,0,-Q,Z,t,-Q+e,!1)),r.push(X(-Z,0,Q-e,Z,t,Q,!1)),this.shell=f(Lf(r),this.hullMat,this.vessel),r.length=0;for(let e of[Zf-.35,Qf-.1,t-.35])r.push(X(Z,e,-Q-.25,Z+.25,e+.35,Q+.25)),r.push(X(-Z-.25,e,-Q-.25,-Z,e+.35,n.z0)),r.push(X(-Z-.25,e,n.z1,-Z,e+.35,Q+.25)),r.push(X(-Z-.25,e,Q,Z+.25,e+.35,Q+.25,!1)),r.push(X(-Z-.25,e,-Q-.25,Z+.25,e+.35,-Q,!1));for(let e=-Q+2.3;e<Q-1;e+=10*od)r.push(X(Z,.45,e-.15,Z+.12,t,e+.15)),(e<n.z0-.5||e>n.z1+.5)&&r.push(X(-Z-.12,.45,e-.15,-Z,t,e+.15));r.push(X(-Z-.3,n.sill-.2,n.z0-.35,-Z+e,n.sill+n.height+.3,n.z0)),r.push(X(-Z-.3,n.sill-.2,n.z1,-Z+e,n.sill+n.height+.3,n.z1+.35)),r.push(X(-Z-.3,n.sill+n.height,n.z0,-Z+e,n.sill+n.height+.3,n.z1,!1)),this.trim=f(Lf(r),this.trimMat,this.vessel)}let p={x0:-Jf,x1:Jf,z0:-Yf,z1:Yf},m={x0:q.rampLow.x0,x1:q.rampLow.x1,z0:q.rampLow.zBottom,z1:q.rampLow.zTop},h={x0:q.rampMid.x0,x1:q.rampMid.x1,z0:q.rampMid.zBottom,z1:q.rampMid.zTop};[{y:Xf,rects:[p]},{y:Zf,rects:Rf(p,m)},{y:Qf,rects:Rf(p,h)}].forEach(({y:e,rects:t})=>{let n=Lf(t.map(t=>X(t.x0,e-.35,t.z0,t.x1,e,t.z1))),r=f(n,this.timberMat,this.vessel,!0,!0);r.visible=!1,this.floors.push(r)});{let e=q.rooms.pitch,t=q.rooms.depth,n=[];[Xf,Zf,Qf].forEach((r,i)=>{let a=new Bn;a.name=`storey-${i}`;let o=[];for(let n=-Yf+e;n<Yf-.5;n+=e)for(let a of[-1,1]){if(i===1&&a<0&&n>q.door.z0-3&&n<q.door.z1+3)continue;let s=a<0?-Jf:Jf-t,c=a<0?-Jf+t:Jf;o.push(X(s,r,n-.08,c,r+$f,n+.08,!1)),this.obstacles.push({kind:`box`,space:`ark`,x:(s+c)/2,z:n,halfX:(c-s)/2,halfZ:.2,yaw:0,yMin:r-.2,yMax:r+$f});let l=a<0?-Jf+.5:Jf-.5;o.push(X(l-.35,r,n+.8,l+.35,r+.55,n+e-.8))}let s=i<2?q.floors[i+1]-.35:q.wallTop;for(let e=-Yf+6;e<Yf-3;e+=20*od)for(let t of[-4.6,4.6])o.push(X(t-.22,r,e-.22,t+.22,s,e+.22)),this.obstacles.push({kind:`circle`,space:`ark`,x:t,z:e,r:.42,yMin:r-.2,yMax:s}),Math.round((e+Yf)/9.144)%2==0&&n.push([t+(t<0?.32:-.32),r+2.3,e]);f(Lf(o),this.timberMat,a,!1,!0),a.visible=!1,this.vessel.add(a),this.interiorParts.push(a)});let r=[],i=q.rampLow,a=q.rampMid,o=q.hatch;r.push(zf(i.x0,i.x1,i.zTop,Zf,i.zBottom,Xf)),r.push(zf(a.x0,a.x1,a.zBottom,Zf,a.zTop,Qf)),r.push(zf(o.x0,o.x1,o.zBottom,Qf,o.zTop,q.roofY,.25));for(let e=0;e<14;e++){let t=e/14,n=o.zBottom+(o.zTop-o.zBottom)*t,i=Qf+(q.roofY-Qf)*t;r.push(X(o.x0,i,n,o.x1,i+(q.roofY-Qf)/14,n+(o.zTop-o.zBottom)/14,!1))}let s=[[i.x0,i.x1,i.zTop,Zf,i.zBottom,Xf],[a.x0,a.x1,a.zBottom,Zf,a.zTop,Qf]];for(let[e,t,n,i,a,o]of s)for(let s of[e-.08,t+.08])r.push(zf(s-.05,s+.05,n,i+1,a,o+1,.1));let c=f(Lf(r),this.timberMat,this.interiorParts[1],!1,!0);c.name=`interior-ramps`;let l=new Ki(.28,.4,.28);this.geometries.push(l);let u=new Ai(l,this.lampMat,n.length),d=new zn;n.forEach(([e,t,n],r)=>{d.position.set(e,t,n),d.updateMatrix(),u.setMatrixAt(r,d.matrix)}),u.instanceMatrix.needsUpdate=!0,this.interiorParts[0].add(u)}{this.roof=new Bn,this.roof.name=`roof`;let e=[],t=q.windowTop,n=q.roofY,r=q.hatch,i={x0:-Z-.4,x1:Z+.4,z0:-Q-.4,z1:Q+.4},a={x0:r.x0,x1:r.x1,z0:r.zBottom,z1:r.zTop};for(let r of Rf(i,a))e.push(X(r.x0,t,r.z0,r.x1,n,r.z1));let o=.12,s=.75;e.push(X(-Z+.1,n,-Q+.1,-Z+.1+o,n+s,Q-.1)),e.push(X(Z-.1-o,n,-Q+.1,Z-.1,n+s,Q-.1)),e.push(X(-Z+.1,n,-Q+.1,Z-.1,n+s,-Q+.1+o,!1)),e.push(X(-Z+.1,n,Q-.1-o,Z-.1,n+s,Q-.1,!1)),e.push(X(r.x0-.15,n,r.zBottom-.15,r.x1+.15,n+.35,r.zBottom,!1)),e.push(X(r.x0-.15,n,r.zBottom,r.x0,n+.35,r.zTop)),e.push(X(r.x1,n,r.zBottom,r.x1+.15,n+.35,r.zTop)),f(Lf(e),this.timberMat,this.roof);let c=new Ki(.28,q.windowTop-q.wallTop,.28);c.translate(0,(q.windowTop+q.wallTop)/2,0),this.geometries.push(c);let l=[];for(let e=-Q+.3;e<=Q-.3;e+=5*od)l.push([-Z+.22,e],[Z-.22,e]);for(let e=-Z+2.5;e<=Z-2.5;e+=5*od)l.push([e,-Q+.22],[e,Q-.22]);let u=new Ai(c,this.trimMat,l.length),d=new zn;l.forEach(([e,t],n)=>{d.position.set(e,0,t),d.updateMatrix(),u.setMatrixAt(n,d.matrix)}),u.instanceMatrix.needsUpdate=!0,this.roof.add(u),this.roof.visible=!1,this.vessel.add(this.roof)}{let e=q.door;this.doorPivot=new Bn,this.doorPivot.position.set(-Z-.15,e.sill,e.z0),f(X(-.15,0,0,.15,e.height,e.z1-e.z0),this.hullMat,this.doorPivot),this.vessel.add(this.doorPivot)}{this.rampGroup=new Bn;let e=q.ramp,t=q.landing,n=[];n.push(zf(e.xOuter,e.xInner,e.zLow,0,e.zHigh,q.door.sill,.35)),n.push(X(t.x0,q.door.sill-.35,t.z0,t.x1,q.door.sill,t.z1));for(let t=1;t<18;t++){let r=t/18,i=e.zLow+(e.zHigh-e.zLow)*r,a=q.door.sill*r;n.push(X(e.xOuter,a,i-.06,e.xInner,a+.07,i+.06,!1))}for(let t=1;t<=4;t++){let r=t/4,i=e.zLow+(e.zHigh-e.zLow)*r,a=q.door.sill*r-.35;for(let t of[e.xOuter+.2,e.xInner-.2])n.push(X(t-.15,0,i-.15,t+.15,Math.max(.1,a),i+.15))}for(let e of[t.x0+.2,t.x1-.2])for(let r of[t.z0+.2,t.z1-.2])n.push(X(e-.15,0,r-.15,e+.15,q.door.sill-.35,r+.15));n.push(zf(e.xOuter-.1,e.xOuter,e.zLow,1,e.zHigh,q.door.sill+1,.1)),f(Lf(n),this.timberMat,this.rampGroup),this.rampGroup.visible=!1,this.vessel.add(this.rampGroup)}{let e=[],t=1.8,n=[3.5,7.5,11.5];for(let r of[-1,1]){let i=r*(Z+t);for(let n=-Q;n<=Q;n+=10*od)e.push(X(i-.12,0,n-.12,i+.12,14.5,n+.12)),e.push(X(i-r*t-.1,0,n-.1,i-r*t+.1,.01,n+.1));for(let t of n)e.push(X(i-.1,t,-Q,i+.1,t+.18,Q)),e.push(X(Math.min(i,r*Z),t-.06,-Q,Math.max(i,r*Z),t,Q))}for(let r of[-1,1]){let i=r*(Q+t);for(let t=-Z;t<=Z;t+=10*od)e.push(X(t-.12,0,i-.12,t+.12,14.5,i+.12));for(let r of n)e.push(X(-Z-t,r,i-.1,Z+t,r+.18,i+.1,!1))}for(let[n,r]of[[-Z-t-.6,-30],[Z+t+.6,25],[Z+t+.6,-50]]){e.push(X(n-.05,0,r-.4,n+.05,12,r-.3)),e.push(X(n-.05,0,r+.3,n+.05,12,r+.4));for(let t=.4;t<12;t+=.4)e.push(X(n-.04,t,r-.3,n+.04,t+.06,r+.3))}this.scaffold=f(Lf(e),this.timberMat,this.vessel,!0,!1),this.scaffold.visible=!1}this.siteBuild=Kf(this.timberMat,s,c,l,t.level),this.site.add(this.siteBuild.group),this.site.visible=!1,this.siteObstacles.push(...this.siteBuild.obstacles);{let e=this.surfaces,t={x0:-Z+.3,x1:Z-.3,z0:-Q+.3,z1:Q-.3},n=q.hatch;Rf(t,{x0:n.x0,x1:n.x1,z0:n.zBottom,z1:n.zTop}).forEach((t,n)=>e.push(tp(`roof-${n}`,t,q.roofY,!1))),e.push(np(`stair-roof`,n.x0,n.x1,n.zBottom,Qf,n.zTop,q.roofY,!0)),Rf(p,h).forEach((t,n)=>e.push(tp(`third-${n}`,t,Qf,!0))),e.push(np(`ramp-mid`,q.rampMid.x0,q.rampMid.x1,q.rampMid.zBottom,Zf,q.rampMid.zTop,Qf,!0)),Rf(p,m).forEach((t,n)=>e.push(tp(`second-${n}`,t,Zf,!0))),e.push(np(`ramp-low`,q.rampLow.x0,q.rampLow.x1,q.rampLow.zTop,Zf,q.rampLow.zBottom,Xf,!0)),e.push(tp(`lower`,p,Xf,!0)),this.doorSurface=tp(`doorway`,{x0:-Z-.2,x1:-Jf+.3,z0:q.door.z0+.4,z1:q.door.z1-.4},Zf,!1);let r=q.landing,i=tp(`landing`,{x0:r.x0,x1:r.x1,z0:r.z0,z1:r.z1},q.door.sill,!1),a=q.ramp,o=np(`ramp`,a.xOuter,a.xInner,a.zLow,0,a.zHigh,q.door.sill,!1);this.rampSurfaces.push(this.doorSurface,i,o),e.push(this.doorSurface,i,o),this.exterior.push({kind:`box`,space:`ark`,x:0,z:0,halfX:Z+.3,halfZ:Q+.3,yaw:0,yMin:-3,yMax:q.roofY+1})}{let e=new Ki(q.beam,q.height,q.length);e.translate(0,q.height/2,0);let t=new Ki(Jf*2-.2,q.wallTop-Xf,Yf*2-.2);t.translate(0,(q.wallTop+Xf)/2,0),this.geometries.push(e,t);let n=new vi(e,u);n.visible=!1;let r=new vi(t,d);r.visible=!1,this.vessel.add(n,r);let i=this.vessel,a=new z;this.interactables.push({id:`ark`,targets:[n],maxDistance:900,isAvailable:e=>of.ark(e)&&!this.viewerInside,anchor(e,t){let n=t.arkBuild>.93?q.roofY+7:q.wallTop*uu(t.arkBuild/.8)+7;return e.copy(a.set(0,n,0)).applyMatrix4(i.matrix),!0}},{id:`ark-hold`,targets:[r],maxDistance:80,isAvailable:e=>of[`ark-hold`](e)&&this.viewerInside,anchor(e){return e.copy(a.set(0,Zf+2.4,0)).applyMatrix4(i.matrix),!0}},{id:`timber`,targets:this.siteBuild.timberTargets,maxDistance:90,isAvailable:of.timber,anchor:e=>(e.set(22,4.5,-32),this.siteBuild.group.localToWorld(e),!0)},{id:`planks-nails`,targets:this.siteBuild.plankTargets,maxDistance:90,isAvailable:of[`planks-nails`],anchor:e=>(e.set(14,3,3),this.siteBuild.group.localToWorld(e),!0)})}}update(e){let t=e.env,n=t.arkBuild;this.vessel.matrix.copy(e.ark.matrix),this.vessel.matrixWorldNeedsUpdate=!0,this.vessel.visible=n>.015,this.keel.visible=n>.015,this.frames.count=Math.round(this.frameTotal*uu((n-.05)/.3)),this.buildY.value=n>=.999?1e4:-.01+(q.wallTop+.01)*U(.35,.8,n),this.shell.visible=n>.35,this.trim.visible=n>.35,this.pitch.value=U(.8,.9,n),this.trimPitch.value=this.pitch.value*.55,this.floors[0].visible=n>.42,this.floors[1].visible=n>.55,this.floors[2].visible=n>.7,this.interiorParts[0].visible=n>.6,this.interiorParts[1].visible=n>.68,this.interiorParts[2].visible=n>.78,this.roof.visible=n>.93,this.scaffold.visible=n>.05&&n<.97,this.site.visible=n>.015,this.siteBuild.chips.visible=t.work>.05||n<.97;let r=e.ark.rampEnabled;this.doorOpen=pu(this.doorOpen,+!!r,1.5,e.dt>0?e.dt:1),this.doorPivot.rotation.y=-this.doorOpen*1.6,this.doorPivot.visible=n>.93,this.rampGroup.visible=r;let i=this.exterior[0];if(i){let e=n>.3;i.yMin=e?-3:-1e6,i.yMax=e?q.roofY+1:-1e6}let a=n>.97;for(let e of this.surfaces)e.enabled=a;for(let e of this.rampSurfaces)e.enabled=a&&r;this.viewerInside=e.viewer.inHold,this.interiorGlow=pu(this.interiorGlow,+!!this.viewerInside,3,e.dt),this.lampMat.emissiveIntensity=.6+this.interiorGlow*2.4,this.timberMat.emissive.setRGB(.09,.055,.025).multiplyScalar(this.interiorGlow*.3)}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();for(let e of this.textures)e.dispose();this.siteBuild.dispose(),this.geometries.length=0,this.materials.length=0,this.object.clear()}},ip=class{constructor(){H(this,`object`,new Bn),H(this,`interactables`,void 0),H(this,`material`,new oi),H(this,`geometries`,[]),this.object.name=`landmarks`;let e=new Ji(dd.radius*.62,dd.peakY+40,12,1,!0);this.geometries.push(e);let t=new vi(e,this.material);t.visible=!1,t.position.set(dd.peak[0],(dd.peakY+40)/2-10,dd.peak[1]);let n=new Ji(ud.radius*.8,ud.peakY,10,1,!0);this.geometries.push(n);let r=new vi(n,this.material);r.visible=!1,r.position.set(ud.center[0],ud.peakY/2,ud.center[1]),this.object.add(t,r),this.interactables=[{id:`mount-judi`,targets:[t],maxDistance:3e3,isAvailable:of[`mount-judi`],anchor(e,t){return t.arkPath>.95?e.set(dd.ledge.center[0],dd.ledge.y+26,dd.ledge.center[1]-30):e.set(dd.peak[0],Cd(dd.peak[0],dd.peak[1])+18,dd.peak[1]),!0}},{id:`son-hill`,targets:[r],maxDistance:1200,isAvailable:of[`son-hill`],anchor(e,t){let n=Cd(ud.standPoint[0],ud.standPoint[1]);return e.set(ud.standPoint[0],Math.max(n,t.waterLevel)+6,ud.standPoint[1]),!0}}]}dispose(){for(let e of this.geometries)e.dispose();this.material.dispose()}},ap=e=>new B().setHex(e),op={clearZenith:ap(4157358),clearHorizon:ap(12372950),duskZenith:ap(3952509),duskHorizon:ap(14918766),stormZenith:ap(2567475),stormHorizon:ap(5923691),sunNoon:ap(16774114),sunLow:ap(16756848),hemiGroundClear:ap(7035456),hemiGroundStorm:ap(3815475)},sp=`
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,cp=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uStorm;
uniform float uTime;
uniform float uLightning;
uniform vec3 uFlashDir;
uniform vec2 uWind;
uniform float uHaze;
varying vec3 vDir;

float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0; float a = 0.5;
  for (int i = 0; i < CLOUD_OCTAVES; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return s;
}

void main() {
  vec3 dir = normalize(vDir);
  float up = clamp(dir.y, -1.0, 1.0);

  // Gradient.
  float g = pow(clamp(up, 0.0, 1.0), 0.45);
  vec3 col = mix(uSkyHorizon, uSkyZenith, g);
  col = mix(col, uSkyHorizon * 0.75, smoothstep(0.0, -0.25, up));

  // Sun disc and glow.
  float sd = max(dot(dir, uSunDir), 0.0);
  float sunVis = 1.0 - smoothstep(0.25, 0.8, uStorm);
  col += uSunColor * (pow(sd, 12.0) * 0.18 + pow(sd, 220.0) * 0.6) * sunVis;
  col += uSunColor * smoothstep(0.99955, 0.99975, sd) * 6.0 * sunVis;

  // Clouds on a virtual plane.
  if (up > 0.0) {
    vec2 p = dir.xz / (up + 0.08) * 0.9;
    vec2 drift = uWind * uTime * 0.012 + vec2(uTime * 0.004, 0.0);
    float churn = uStorm * 0.35 * sin(uTime * 0.05);
    vec2 q = p + drift + vec2(fbm(p * 0.7 + uTime * 0.01) * (0.4 + churn), 0.0);
    float n = fbm(q * 1.15);
    float coverage = mix(0.42, 0.98, uStorm);
    float dens = smoothstep(1.0 - coverage, 1.0 - coverage + mix(0.28, 0.4, uStorm), n);
    float thick = smoothstep(0.3, 0.9, n);
    // Lighting of the clouds: bright toward the sun, grey bases.
    vec3 lit = mix(vec3(0.92, 0.93, 0.95), uSunColor * 1.1, 0.35) * (0.75 + 0.35 * pow(sd, 3.0));
    vec3 base = mix(vec3(0.55, 0.58, 0.62), vec3(0.13, 0.15, 0.17), uStorm);
    vec3 cloud = mix(lit, base, clamp(thick * 0.85 + uStorm * 0.75, 0.0, 1.0));
    // Lightning lights the cloud deck around the flash direction.
    float fl = uLightning * (0.35 + 0.65 * pow(max(dot(dir, uFlashDir), 0.0), 4.0));
    cloud += vec3(0.75, 0.8, 1.0) * fl * (0.4 + thick);
    float horizonFade = smoothstep(0.0, 0.18, up);
    col = mix(col, cloud, dens * horizonFade);
  }

  // Haze toward the horizon.
  col = mix(col, uSkyHorizon, uHaze * (1.0 - smoothstep(0.0, 0.35, abs(up))));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,lp=`
attribute vec3 aOffset;
attribute vec2 aCorner;
uniform float uTime;
uniform vec2 uWind;
uniform float uBox;
uniform float uFall;
uniform float uLen;
varying float vAlpha;
varying float vBelow;
uniform float uWaterLevel;
#include <fog_pars_vertex>
void main() {
  vec3 vel = vec3(uWind.x * 9.0, -uFall, uWind.y * 9.0);
  vec3 p = aOffset * uBox + vel * uTime * (0.85 + fract(aOffset.x * 91.7) * 0.3);
  // Wrap into a box centred on the camera (stationary in the world).
  vec3 rel = mod(p - cameraPosition + uBox * 0.5, uBox) - uBox * 0.5;
  vec3 center = cameraPosition + rel;
  vec3 dir = normalize(vel);
  vec3 toCam = normalize(cameraPosition - center);
  vec3 side = normalize(cross(dir, toCam));
  vec3 pos = center + dir * aCorner.y * uLen + side * aCorner.x * 0.016 * (1.0 + length(rel) * 0.03);
  vBelow = pos.y - uWaterLevel;
  float d = length(rel);
  vAlpha = smoothstep(uBox * 0.5, uBox * 0.3, d) * smoothstep(0.6, 2.5, d) * (1.0 - abs(aCorner.y) * 0.9);
  vec4 mvPosition = viewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,up=`
uniform float uOpacity;
uniform float uLightning;
uniform vec3 uRainColor;
varying float vAlpha;
varying float vBelow;
#include <fog_pars_fragment>
void main() {
  if (vBelow < 0.0) discard;
  gl_FragColor = vec4(uRainColor + uLightning * 0.6, vAlpha * uOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,dp=28,fp=class{constructor(e){if(H(this,`object`,new Bn),H(this,`sun`,new ro(16777215,3)),H(this,`exposure`,1),H(this,`onLightning`,null),H(this,`scene`,void 0),H(this,`u`,void 0),H(this,`quality`,void 0),H(this,`hemi`,new Ha(16777215,4473924,1)),H(this,`fog`,new Jn(12372950,4e-4)),H(this,`sky`,void 0),H(this,`skyMat`,void 0),H(this,`rain`,void 0),H(this,`rainGeo`,void 0),H(this,`rainMat`,void 0),H(this,`bolt`,void 0),H(this,`boltGeo`,void 0),H(this,`boltMat`,void 0),H(this,`sunDir`,new z),H(this,`flashDir`,new z(0,1,0)),H(this,`tmpColor`,new B),H(this,`tmpColor2`,new B),H(this,`rand`,gu(777)),H(this,`nextFlash`,6),H(this,`sinceFlash`,99),H(this,`flashPeak`,0),H(this,`flash`,0),H(this,`boltLife`,0),H(this,`wetness`,0),H(this,`maxRain`,void 0),H(this,`tmpBoltDir`,new z),this.scene=e.scene,this.u=e.uniforms,this.quality=e.quality,this.object.name=`atmosphere`,this.sun.castShadow=e.quality.shadows,e.quality.shadows){let t=this.sun.shadow;t.mapSize.set(e.quality.shadowMapSize,e.quality.shadowMapSize),t.camera.left=-120,t.camera.right=120,t.camera.top=120,t.camera.bottom=-120,t.camera.near=10,t.camera.far=900,t.bias=-4e-4,t.normalBias=.5,t.camera.updateProjectionMatrix()}this.object.add(this.sun,this.sun.target,this.hemi),this.skyMat=new _a({vertexShader:sp,fragmentShader:cp,defines:{CLOUD_OCTAVES:e.quality.cloudOctaves},uniforms:{uSunDir:this.u.uSunDir,uSunColor:this.u.uSunColor,uSkyZenith:this.u.uSkyZenith,uSkyHorizon:this.u.uSkyHorizon,uStorm:this.u.uStorm,uTime:this.u.uTime,uLightning:this.u.uLightning,uWind:this.u.uWind,uFlashDir:{value:this.flashDir},uHaze:{value:0}},side:1,depthWrite:!1,depthTest:!0}),this.sky=new vi(new sa(1,48,24),this.skyMat),this.sky.name=`sky`,this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.object.add(this.sky),this.maxRain=e.quality.rainCount,this.rainGeo=this.buildRainGeometry(this.maxRain),this.rainMat=new _a({vertexShader:lp,fragmentShader:up,uniforms:ma.merge([V.fog,{uBox:{value:60},uFall:{value:16},uLen:{value:.7},uOpacity:{value:.35},uRainColor:{value:new B(.72,.75,.8)}}]),transparent:!0,depthWrite:!1,fog:!0,side:2}),this.rainMat.uniforms.uTime=this.u.uTime,this.rainMat.uniforms.uWind=this.u.uWind,this.rainMat.uniforms.uLightning=this.u.uLightning,this.rainMat.uniforms.uWaterLevel=this.u.uWaterLevel,this.rain=new vi(this.rainGeo,this.rainMat),this.rain.name=`rain`,this.rain.frustumCulled=!1,this.rain.renderOrder=5,this.rain.visible=!1,this.object.add(this.rain),this.boltGeo=new Jr,this.boltGeo.setAttribute(`position`,new Nr(new Float32Array(174),3));let t=[];for(let e=0;e<dp;e++){let n=e*2;t.push(n,n+1,n+2,n+1,n+3,n+2)}this.boltGeo.setIndex(t),this.boltMat=new oi({color:new B(.85,.9,1),transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2,fog:!1}),this.bolt=new vi(this.boltGeo,this.boltMat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.object.add(this.bolt),this.scene.fog=this.fog,this.scene.background=null}buildRainGeometry(e){let t=new Jr,n=new Float32Array(e*4*3),r=new Float32Array(e*4*2),i=new Uint32Array(e*6),a=gu(99);for(let t=0;t<e;t++){let e=a(),o=a(),s=a();for(let i=0;i<4;i++){let a=t*4+i;n[a*3]=e,n[a*3+1]=o,n[a*3+2]=s,r[a*2]=i%2==0?-1:1,r[a*2+1]=i<2?-1:1}let c=t*4;i.set([c,c+1,c+2,c+1,c+3,c+2],t*6)}return t.setAttribute(`position`,new Nr(new Float32Array(e*4*3),3)),t.setAttribute(`aOffset`,new Nr(n,3)),t.setAttribute(`aCorner`,new Nr(r,2)),t.setIndex(new Nr(i,1)),t.setDrawRange(0,0),t}update(e){let t=e.env,n=this.u,r=e.dt,i=uu(t.storm),a=t.sunElevation*cu,o=t.sunAzimuth*cu;this.sunDir.set(Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)).normalize(),n.uSunDir.value.copy(this.sunDir);let s=1-U(4,32,t.sunElevation),c=this.tmpColor.copy(op.sunNoon).lerp(op.sunLow,s),l=du(1,.07,U(.15,.85,i));n.uSunColor.value.copy(c).multiplyScalar(du(1,.35,i));let u=n.uSkyZenith.value.copy(op.clearZenith).lerp(op.duskZenith,s*.7).lerp(op.stormZenith,U(.1,.9,i)),d=n.uSkyHorizon.value.copy(op.clearHorizon).lerp(op.duskHorizon,s*.75).lerp(op.stormHorizon,U(.1,.9,i));d.lerp(this.tmpColor2.setRGB(.55,.57,.6),t.haze*.25),n.uStorm.value=i,n.uRain.value=t.rain,this.skyMat.uniforms.uHaze.value=t.haze;let f=.6+Math.sin(e.time*.021)*.45,p=.12+i*.88;n.uWind.value.set(Math.cos(f)*p,Math.sin(f)*p);let m=uu(t.rain*1.4);this.wetness=pu(this.wetness,m,m>this.wetness?.5:.04,r),n.uWetness.value=this.wetness,this.updateLightning(e),n.uLightning.value=this.flash,this.sun.color.copy(c),this.sun.intensity=3.1*l*U(-2,6,t.sunElevation),this.sun.castShadow&&(this.sun.shadow.intensity=1-U(.35,.8,i)),this.hemi.color.copy(u).lerp(d,du(.4,.85,i)),this.hemi.groundColor.copy(op.hemiGroundClear).lerp(op.hemiGroundStorm,i),this.hemi.intensity=du(1.2,3,i)+this.flash*3;let h=e.camera.position,g=240/(this.quality.shadowMapSize||1024),_=Math.round(h.x/g)*g,v=Math.round(h.z/g)*g;this.sun.target.position.set(_,h.y-10,v),this.sun.position.set(_+this.sunDir.x*450,h.y-10+Math.max(this.sunDir.y,.12)*450,v+this.sunDir.z*450),this.sun.target.updateMatrixWorld();let y=32e-5+i*.0021+t.rain*8e-4+t.haze*.0012;this.fog.density=y,this.fog.color.copy(d).multiplyScalar(du(.95,.8,i)),this.fog.color.lerp(this.tmpColor2.setRGB(.6,.66,.75),this.flash*.25),n.uFogColor.value.copy(this.fog.color),this.exposure=du(1,1.25,i);let b=e.camera.far*.92;this.sky.position.copy(h),this.sky.scale.setScalar(b);let x=t.rain>.01&&!e.viewer.sheltered;if(this.rain.visible=x,x){let e=Math.floor(this.maxRain*uu(t.rain));this.rainGeo.setDrawRange(0,e*6);let n=this.rainMat.uniforms;n.uOpacity.value=du(.3,.62,t.rain),n.uFall.value=du(11,19,i),n.uLen.value=du(.45,.95,t.rain)}}updateLightning(e){let t=e.dt,n=uu(e.env.lightning);if(this.sinceFlash+=t,n>.02){if(this.nextFlash-=t,this.nextFlash<=0&&this.sinceFlash>1.2){this.triggerFlash(e);let t=du(14,3.2,n)*(e.reducedMotion?2.5:1);this.nextFlash=t*(.4+this.rand()*1.2)}}else this.nextFlash=Math.max(this.nextFlash,2);let r=this.sinceFlash,i=0;r<.6&&(i=Math.exp(-r*16),r>.13&&(i+=.55*Math.exp(-(r-.13)*11))),this.flash=Math.min(1,i*this.flashPeak),this.boltLife>0&&(this.boltLife-=t,this.boltMat.opacity=uu(this.boltLife/.22)*(e.reducedMotion?.35:.85),this.boltLife<=0&&(this.bolt.visible=!1))}triggerFlash(e){let t=this.rand;this.sinceFlash=0;let n=.25+t()*.75;this.flashPeak=(e.reducedMotion?.3:.75)*(1.15-n*.6);let r=t()*Math.PI*2;if(this.flashDir.set(Math.cos(r),.35+t()*.4,Math.sin(r)).normalize(),this.onLightning?.({intensity:this.flashPeak,distance:n}),n>.45&&t()<.7){let r=e.camera.position,i=e.camera.getWorldDirection(this.tmpBoltDir),a=Math.atan2(i.x,i.z)+(t()-.5)*1.6,o=600+n*1e3,s=r.x+Math.sin(a)*o,c=r.z+Math.cos(a)*o;this.buildBolt(s,e.env.waterLevel,c,380+t()*200,Math.atan2(r.x-s,r.z-c)),this.boltLife=.22,this.bolt.visible=!0}}buildBolt(e,t,n,r,i){let a=this.boltGeo.getAttribute(`position`),o=this.rand,s=Math.cos(i),c=-Math.sin(i),l=0,u=0,d=t+r;for(let t=0;t<=dp;t++){let f=t/dp,p=d-f*r;l+=(o()-.5)*26,u+=(o()-.5)*10;let m=2.2*(1-f*.6),h=e+l*s+u*Math.sin(i),g=n+l*c+u*Math.cos(i);a.setXYZ(t*2,h-s*m,p,g-c*m),a.setXYZ(t*2+1,h+s*m,p,g+c*m)}a.needsUpdate=!0}setQuality(e){if(this.quality=e,this.maxRain=Math.min(e.rainCount,this.rainGeo.getAttribute(`aOffset`).count/4),this.skyMat.defines.CLOUD_OCTAVES!==e.cloudOctaves&&(this.skyMat.defines.CLOUD_OCTAVES=e.cloudOctaves,this.skyMat.needsUpdate=!0),this.sun.castShadow&&e.shadows){let t=e.shadowMapSize;this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}}dispose(){this.sky.geometry.dispose(),this.skyMat.dispose(),this.rainGeo.dispose(),this.rainMat.dispose(),this.boltGeo.dispose(),this.boltMat.dispose(),this.sun.shadow.map?.dispose(),this.sun.dispose(),this.hemi.dispose(),this.scene.fog===this.fog&&(this.scene.fog=null),this.object.clear()}},pp=`
#define WAVE_COUNT ${$u}
uniform float uTime;
uniform float uWaterLevel;
uniform float uWaves;
uniform vec4 uWaveA[WAVE_COUNT]; // dirX, dirZ, k, omega
uniform vec4 uWaveB[WAVE_COUNT]; // amplitude, steepness, phase, 0
uniform vec3 uArkPos;
uniform float uArkYaw;
uniform float uArkFloat;
uniform float uArkHull;
uniform vec2 uArkHalf; // half beam, half length

vec2 arkLocal(vec2 xz) {
  vec2 d = xz - uArkPos.xz;
  float c = cos(uArkYaw);
  float s = sin(uArkYaw);
  return vec2(d.x * c - d.y * s, d.x * s + d.y * c);
}
`,mp=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uStorm;
uniform float uRain;
uniform float uLightning;

float wHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), u.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), u.x), u.y);
}

/**
 * Gradient of the swell + fine ripples at xz (analytic). Each component fades out
 * once its wavelength approaches the pixel footprint, which prevents aliasing
 * stripes at grazing angles.
 */
vec2 waterGradient(vec2 xz, float dist) {
  float foot = max(length(fwidth(xz)), 1e-4);
  vec2 g = vec2(0.0);
  for (int i = 0; i < WAVE_COUNT; i++) {
    vec4 a = uWaveA[i];
    vec4 b = uWaveB[i];
    float lambda = 6.2831853 / a.z;
    float fade = 1.0 - smoothstep(lambda * 0.12, lambda * 0.45, foot);
    float theta = a.z * dot(a.xy, xz) - a.w * uTime + b.z;
    g += b.x * uWaves * fade * a.z * a.xy * cos(theta);
  }
  // Capillary ripples: two octaves of scrolling gradient noise (irregular, no banding).
  float rip = 0.05 + uStorm * 0.09 + uRain * 0.05;
  float e = 0.12;
  vec2 q1 = xz * 0.85 + vec2(uTime * 0.31, uTime * 0.17);
  vec2 q2 = xz * 2.4 + vec2(-uTime * 0.45, uTime * 0.38);
  float a0 = wNoise(q1);
  float b0 = wNoise(q2);
  vec2 ga = vec2(wNoise(q1 + vec2(e, 0.0)) - a0, wNoise(q1 + vec2(0.0, e)) - a0) / e * 0.85;
  vec2 gb = vec2(wNoise(q2 + vec2(e, 0.0)) - b0, wNoise(q2 + vec2(0.0, e)) - b0) / e * 2.4;
  float fa = 1.0 - smoothstep(0.15, 0.6, foot * 0.85);
  float fb = 1.0 - smoothstep(0.06, 0.25, foot * 2.4 / 6.283 * 3.0);
  g += rip * (ga * fa + gb * fb * 0.35);
  // Broad, slow undulation so calm water is never mirror-flat.
  float slow = 0.012 + uStorm * 0.02;
  g += slow * vec2(cos(xz.x * 0.21 + uTime * 0.7 + sin(xz.y * 0.13)), sin(xz.y * 0.17 - uTime * 0.6 + cos(xz.x * 0.11)));
  // Rain pitting.
  if (uRain > 0.01) {
    float fr = 1.0 - smoothstep(0.03, 0.12, foot);
    vec2 q = xz * 6.0 + uTime * 3.0;
    float n0 = wNoise(q);
    g += vec2(n0 - wNoise(q + vec2(0.37, 0.0)), n0 - wNoise(q + vec2(0.0, 0.37))) * uRain * 1.4 * fr;
  }
  return g;
}

vec3 skyColor(vec3 dir) {
  float up = clamp(dir.y, 0.0, 1.0);
  return mix(uSkyHorizon, uSkyZenith, pow(up, 0.5));
}

/**
 * depth: metres of water above the ground (<= 0 when unknown/very deep far away)
 * crest: 0..1 relative height on the swell
 */
vec3 shadeWater(vec3 worldPos, vec3 N, float depth, float crest, float dist) {
  vec3 V = normalize(cameraPosition - worldPos);
  float NdV = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);

  vec3 R = reflect(-V, N);
  R.y = abs(R.y);
  vec3 refl = skyColor(R) * 0.72 * (1.0 + uLightning * 1.5);

  vec3 deepClear = vec3(0.028, 0.07, 0.065);
  vec3 deepStorm = vec3(0.022, 0.034, 0.036);
  vec3 muddy = vec3(0.13, 0.105, 0.065);
  vec3 deepCol = mix(deepClear, deepStorm, uStorm);
  float shallow = depth > 0.0 ? 1.0 - smoothstep(0.3, 7.0, depth) : 0.0;
  // Floodwater is laden with mud; the calm river is clearer.
  vec3 body = mix(deepCol, muddy, shallow * 0.85);
  body = mix(body, muddy * 0.7, smoothstep(0.2, 0.8, uStorm) * 0.45);
  // Light scattering through crests toward the sun.
  float sss = pow(max(dot(V, -vec3(uSunDir.x, 0.0, uSunDir.z)), 0.0), 3.0) * max(crest, 0.0);
  body += vec3(0.05, 0.11, 0.09) * sss * (1.0 - uStorm * 0.7);
  // Diffuse sky light on the body.
  body *= 0.55 + 0.6 * max(dot(N, vec3(0.0, 1.0, 0.0)), 0.0);
  body *= mix(1.0, 0.75, uStorm);

  vec3 col = mix(body, refl, fresnel);

  // Sun glitter.
  vec3 H = normalize(V + uSunDir);
  float spec = pow(max(dot(N, H), 0.0), 220.0) * 2.2 + pow(max(dot(N, H), 0.0), 40.0) * 0.12;
  col += uSunColor * spec * (1.0 - smoothstep(0.3, 0.9, uStorm)) * step(0.0, uSunDir.y);

  // Foam: on crests (storm) and along the shore.
  float foamNoise = wNoise(worldPos.xz * 0.35 + uTime * 0.2) * 0.6 + wNoise(worldPos.xz * 1.3 - uTime * 0.3) * 0.4;
  float crestFoam = smoothstep(0.55, 0.95, crest + foamNoise * 0.35) * smoothstep(0.15, 0.6, uWaves);
  float shoreFoam = depth > 0.0 ? (1.0 - smoothstep(0.05, 0.9, depth)) * smoothstep(0.35, 0.75, foamNoise + 0.2) : 0.0;
  float foam = clamp(max(crestFoam, shoreFoam * 0.8) * (1.0 - smoothstep(300.0, 900.0, dist)), 0.0, 1.0);
  vec3 foamCol = mix(vec3(0.85, 0.86, 0.84), vec3(0.55, 0.56, 0.56), uStorm) * (0.9 + uLightning);
  col = mix(col, foamCol, foam * 0.85);
  return col;
}
`,hp=`
${pp}
varying vec3 vWorld;
varying vec2 vBase;
varying float vCrest;
varying float vDist;
#include <fog_pars_vertex>

void main() {
  vec4 base = modelMatrix * vec4(position, 1.0);
  vec3 wp = vec3(base.x, uWaterLevel, base.z);
  float dist = length(position.xz);
  float fadeAll = 1.0 - smoothstep(380.0, 1100.0, dist);
  vec3 disp = vec3(0.0);
  for (int i = 0; i < WAVE_COUNT; i++) {
    vec4 a = uWaveA[i];
    vec4 b = uWaveB[i];
    float lambda = 6.2831853 / a.z;
    float w = (1.0 - smoothstep(lambda * 4.0, lambda * 14.0, dist)) * fadeAll;
    float theta = a.z * dot(a.xy, wp.xz) - a.w * uTime + b.z;
    float amp = b.x * uWaves * w;
    disp.y += amp * sin(theta);
    disp.xz += b.y * amp * a.xy * cos(theta);
  }
  // Calm the swell around a floating hull so it never washes through the deck.
  vec2 local = arkLocal(wp.xz);
  vec2 outside = max(abs(local) - uArkHalf, 0.0);
  float calm = uArkFloat * (1.0 - smoothstep(0.0, 28.0, length(outside)));
  disp = mix(disp, vec3(0.0, uArkPos.y - uWaterLevel, 0.0), calm * 0.95);

  vBase = wp.xz;
  wp += disp;
  vWorld = wp;
  vCrest = disp.y / max(0.35, 5.0 * uWaves);
  vDist = dist;
  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,gp=`
${pp}
${mp}
uniform sampler2D uHeightTex;
uniform float uHeightExtent;
varying vec3 vWorld;
varying vec2 vBase;
varying float vCrest;
varying float vDist;
#include <fog_pars_fragment>

void main() {
  if (uArkHull > 0.5) {
    vec2 l = abs(arkLocal(vWorld.xz));
    if (l.x < uArkHalf.x - 0.15 && l.y < uArkHalf.y - 0.15) discard;
  }
  vec2 g = waterGradient(vBase, vDist);
  vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
  vec2 huv = vBase / (2.0 * uHeightExtent) + 0.5;
  float ground = texture2D(uHeightTex, huv).r;
  bool inside = all(greaterThan(huv, vec2(0.0))) && all(lessThan(huv, vec2(1.0)));
  float depth = inside ? uWaterLevel - ground : -1.0;
  vec3 col = shadeWater(vWorld, N, depth, vCrest, vDist);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;function _p(e,t,n,r){let i=e/r,a=1e-4,o=1;for(let e=0;e<60;e++){let e=(a+o)/2;(Math.exp(e*t)-1)/(Math.exp(e)-1)>i?o=e:a=e}let s=(a+o)/2,c=r/(Math.exp(s)-1),l=1+t*n,u=new Float32Array(l*3),d=3;for(let e=1;e<=t;e++){let t=c*(Math.exp(s*e)-1);for(let e=0;e<n;e++){let r=e/n*Math.PI*2;u[d++]=Math.cos(r)*t,u[d++]=0,u[d++]=Math.sin(r)*t}}let f=[];for(let e=0;e<n;e++){let t=1+e,r=1+(e+1)%n;f.push(0,r,t)}for(let e=1;e<t;e++){let t=1+(e-1)*n,r=t+n;for(let e=0;e<n;e++){let i=(e+1)%n,a=t+e,o=t+i,s=r+e,c=r+i;f.push(a,o,s,o,c,s)}}let p=new Jr;return p.setAttribute(`position`,new Nr(u,3)),p.setIndex(l>65535?new Nr(new Uint32Array(f),1):new Nr(new Uint16Array(f),1)),p.computeBoundingSphere(),p}function vp(e){let{a:t,b:n}=rd(),r=[],i=[];for(let e=0;e<$u;e++)r.push(new sn(t[e*4],t[e*4+1],t[e*4+2],t[e*4+3])),i.push(new sn(n[e*4],n[e*4+1],n[e*4+2],n[e*4+3]));let a=ma.merge([V.fog]);return Object.assign(a,{uWaveA:{value:r},uWaveB:{value:i},uTime:e.uTime,uWaterLevel:e.uWaterLevel,uWaves:e.uWaves,uArkPos:e.uArkPos,uArkYaw:e.uArkYaw,uArkFloat:e.uArkFloat,uArkHull:e.uArkHull,uArkHalf:{value:new R(q.beam/2,q.length/2)},uSunDir:e.uSunDir,uSunColor:e.uSunColor,uSkyZenith:e.uSkyZenith,uSkyHorizon:e.uSkyHorizon,uStorm:e.uStorm,uRain:e.uRain,uLightning:e.uLightning}),a}var yp=class{constructor(e){H(this,`object`,new Bn),H(this,`mesh`,void 0),H(this,`material`,void 0),H(this,`geometry`,void 0),H(this,`segments`,void 0),this.object.name=`water`;let t=vp(e.uniforms);t.uHeightTex={value:e.heightTexture.texture},t.uHeightExtent={value:e.heightTexture.extent},this.material=new _a({vertexShader:hp,fragmentShader:gp,uniforms:t,fog:!0}),this.segments=e.quality.waterSegments,this.geometry=this.build(e.quality),this.mesh=new vi(this.geometry,this.material),this.mesh.name=`water-surface`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.object.add(this.mesh)}build(e){let t=Math.max(64,e.waterSegments),n=Math.round(t*.62),r=e.level===`high`?.35:e.level===`medium`?.5:.8;return _p(id.waterRadius,n,t,r)}update(e){this.mesh.position.set(e.camera.position.x,0,e.camera.position.z)}setQuality(e){if(e.waterSegments===this.segments)return;this.segments=e.waterSegments;let t=this.geometry;this.geometry=this.build(e),this.mesh.geometry=this.geometry,t.dispose()}dispose(){this.geometry.dispose(),this.material.dispose(),this.object.clear()}},bp=[[-3.2,0],[-2.4,.08],[-1.6,.26],[-.95,.55],[-.45,.84],[-.12,.98],[.12,1],[.34,.95],[.5,.84],[.54,.72],[.42,.6],[.26,.5],[.22,.36],[.3,.2],[.48,.07],[.75,0]],xp=`
${pp}
attribute vec2 aProfile; // x: forward (H units), y: height 0..1
attribute float aAlong;  // -1..1 along the crest
attribute float aFace;   // 0 back .. 1 front/lip
uniform vec2 uOrigin;
uniform vec2 uDir;
uniform float uTravel;
uniform float uHeight;
uniform float uCrestHalf;
varying vec3 vWorld;
varying float vFoam;
varying vec3 vNormalW;
#include <fog_pars_vertex>
void main() {
  vec2 side = vec2(-uDir.y, uDir.x);
  float env = pow(cos(aAlong * 1.5707963), 1.6);
  float wob = sin(aAlong * 9.0 + uTime * 0.8) * 0.06 + sin(aAlong * 23.0 - uTime * 1.3) * 0.03;
  float h = uHeight * env * (1.0 + wob);
  float fwd = aProfile.x * max(h, 0.001) + sin(aAlong * 5.0 + uTime * 0.6) * 2.0;
  vec2 xz = uOrigin + uDir * (uTravel + fwd) + side * aAlong * uCrestHalf;
  vec3 wp = vec3(xz.x, uWaterLevel + aProfile.y * h - 0.6, xz.y);
  // Churning surface.
  wp.y += sin(xz.x * 0.21 + uTime * 2.3) * 0.35 * aProfile.y + sin(xz.y * 0.17 - uTime * 1.9) * 0.3 * aProfile.y;
  vWorld = wp;
  vFoam = aFace;
  vNormalW = normalize(vec3(uDir.x * (0.5 - aFace), 1.0, uDir.y * (0.5 - aFace)));
  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Sp=`
${pp}
${mp}
varying vec3 vWorld;
varying float vFoam;
varying vec3 vNormalW;
#include <fog_pars_fragment>
void main() {
  float dist = length(cameraPosition - vWorld);
  vec2 g = waterGradient(vWorld.xz, dist) * 0.6;
  vec3 N = normalize(vNormalW + vec3(-g.x, 0.0, -g.y));
  if (!gl_FrontFacing) N = -N;
  vec3 col = shadeWater(vWorld, N, 20.0, 0.0, dist);
  float streak = wNoise(vec2(vWorld.x * 0.4 + vWorld.z * 0.4, vWorld.y * 0.9 - uTime * 2.5));
  float foam = smoothstep(0.45, 0.9, vFoam + streak * 0.3);
  col = mix(col, mix(vec3(0.82, 0.84, 0.82), vec3(0.6, 0.62, 0.62), uStorm) * (0.9 + uLightning), foam * 0.85);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,Cp=`
uniform float uTime;
uniform float uWaterLevel;
uniform vec2 uOrigin;
uniform vec2 uDir;
uniform float uTravel;
uniform float uHeight;
uniform float uCrestHalf;
uniform float uPixel;
attribute vec3 aSeed;
varying float vAlpha;
#include <fog_pars_vertex>
void main() {
  vec2 side = vec2(-uDir.y, uDir.x);
  float life = 2.2;
  float t = mod(uTime + aSeed.z * life, life) / life;
  float along = aSeed.x * 2.0 - 1.0;
  float env = pow(cos(along * 1.5707963), 1.6);
  float h = uHeight * env;
  vec2 xz = uOrigin + uDir * (uTravel + 0.3 * h + t * (6.0 + aSeed.y * 10.0)) + side * along * uCrestHalf;
  float y = uWaterLevel + h * 0.95 + t * (8.0 + aSeed.y * 6.0) - t * t * 14.0;
  vec4 mvPosition = viewMatrix * vec4(xz.x, y, xz.y, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = uPixel * (3.0 + aSeed.y * 5.0) / max(1.0, -mvPosition.z) * 10.0;
  vAlpha = (1.0 - t) * smoothstep(0.0, 0.15, t) * smoothstep(3.0, 9.0, h);
  #include <fog_vertex>
}
`,wp=`
varying float vAlpha;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  gl_FragColor = vec4(vec3(0.75, 0.78, 0.8), vAlpha * (1.0 - d * 2.0) * 0.55);
  #include <fog_fragment>
}
`,Tp=class{constructor(e){H(this,`object`,new Bn),H(this,`mesh`,void 0),H(this,`material`,void 0),H(this,`geometry`,void 0),H(this,`spray`,void 0),H(this,`sprayGeo`,void 0),H(this,`sprayMat`,void 0),this.object.name=`big-wave`;let t=e.quality.level===`low`?48:96;this.geometry=this.buildGeometry(t);let n=vp(e.uniforms);Object.assign(n,{uOrigin:{value:[gd.origin[0],gd.origin[1]]},uDir:{value:[gd.direction[0],gd.direction[1]]},uTravel:{value:0},uHeight:{value:0},uCrestHalf:{value:gd.crestLength/2}}),this.material=new _a({vertexShader:xp,fragmentShader:Sp,uniforms:n,fog:!0,side:2}),this.mesh=new vi(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.name=`big-wave-sheet`;let r=e.quality.level===`low`?500:1400;this.sprayGeo=new Jr;let i=new Float32Array(r*3),a=gu(4242);for(let e=0;e<i.length;e++)i[e]=a();this.sprayGeo.setAttribute(`position`,new Nr(new Float32Array(r*3),3)),this.sprayGeo.setAttribute(`aSeed`,new Nr(i,3));let o=ma.merge([V.fog,{uPixel:{value:1}}]);Object.assign(o,{uTime:e.uniforms.uTime,uWaterLevel:e.uniforms.uWaterLevel,uOrigin:n.uOrigin,uDir:n.uDir,uTravel:n.uTravel,uHeight:n.uHeight,uCrestHalf:n.uCrestHalf}),this.sprayMat=new _a({vertexShader:Cp,fragmentShader:wp,uniforms:o,transparent:!0,depthWrite:!1,blending:2,fog:!0}),this.spray=new Bi(this.sprayGeo,this.sprayMat),this.spray.frustumCulled=!1,this.object.add(this.mesh,this.spray),this.object.visible=!1}buildGeometry(e){let t=bp.length,n=(e+1)*t,r=new Float32Array(n*2),i=new Float32Array(n),a=new Float32Array(n),o=0;for(let n=0;n<=e;n++){let s=n/e*2-1;for(let e=0;e<t;e++)r[o*2]=bp[e][0],r[o*2+1]=bp[e][1],i[o]=s,a[o]=e/(t-1),o++}let s=[];for(let n=0;n<e;n++)for(let e=0;e<t-1;e++){let r=n*t+e,i=r+1,a=r+t,o=a+1;s.push(r,a,i,i,a,o)}let c=new Jr;return c.setAttribute(`position`,new Nr(new Float32Array(n*3),3)),c.setAttribute(`aProfile`,new Nr(r,2)),c.setAttribute(`aAlong`,new Nr(i,1)),c.setAttribute(`aFace`,new Nr(a,1)),c.setIndex(s),c}update(e){let t=e.env.bigWave,n=t>.001&&t<.999;if(this.object.visible=n,!n)return;let r=U(0,.3,t),i=U(.3,.8,t),a=1-U(.8,1,t),o=this.material.uniforms;o.uHeight.value=gd.height*r*a,o.uTravel.value=i*gd.travel,this.sprayMat.uniforms.uPixel.value=e.camera.zoom*(e.quality.maxPixelRatio||1)}dispose(){this.geometry.dispose(),this.material.dispose(),this.sprayGeo.dispose(),this.sprayMat.dispose(),this.object.clear()}},Ep=`
uniform float uTime;
varying vec2 vUv;
varying float vY;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vec3 p = position;
  float t = uv.y;
  // Churning wobble that grows toward the top of the gush.
  float a = uv.x * 6.2831853;
  float w = sin(a * 3.0 + uTime * 9.0 + t * 7.0) * 0.12 + sin(a * 5.0 - uTime * 6.0) * 0.06;
  p.xz *= 1.0 + w * t;
  p.y += sin(a * 2.0 + uTime * 5.0) * 0.12 * t;
  vY = t;
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Dp=`
uniform float uTime;
uniform float uIntensity;
uniform vec3 uSunColor;
uniform float uLightning;
varying vec2 vUv;
varying float vY;
#include <fog_pars_fragment>
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y); }
void main() {
  // Streaks of water rushing upward, breaking into foam near the top.
  float streak = vn(vec2(vUv.x * 28.0, vUv.y * 2.5 - uTime * 7.0)) * 0.65 + vn(vec2(vUv.x * 60.0, vUv.y * 6.0 - uTime * 11.0)) * 0.35;
  float foam = smoothstep(0.45, 1.0, vY) * vn(vec2(vUv.x * 14.0, uTime * 3.0));
  float a = smoothstep(0.35, 0.8, streak + foam * 0.5);
  a *= smoothstep(0.0, 0.08, vY) * (1.0 - smoothstep(0.75, 1.0, vY));
  vec3 water = vec3(0.46, 0.44, 0.38);
  vec3 white = vec3(0.86, 0.87, 0.85);
  vec3 col = mix(water, white, clamp(streak * 0.8 + foam, 0.0, 1.0)) * (0.55 + 0.45 * uSunColor) * (1.0 + uLightning);
  gl_FragColor = vec4(col, a * 0.8 * uIntensity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,Op=`
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;
#include <fog_pars_fragment>
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y); }
void main() {
  vec2 c = vUv - 0.5;
  float r = length(c) * 2.0;
  float ang = atan(c.y, c.x);
  float n = vn(vec2(ang * 3.0, r * 6.0 - uTime * 2.5)) * 0.6 + vn(vec2(ang * 7.0, r * 12.0 - uTime * 4.0)) * 0.4;
  float a = (1.0 - smoothstep(0.35, 1.0, r)) * smoothstep(0.3, 0.75, n + (1.0 - r) * 0.3);
  gl_FragColor = vec4(vec3(0.8, 0.8, 0.77), a * 0.55 * uIntensity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,kp=`
varying vec2 vUv;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Ap=`
uniform float uTime;
uniform float uIntensity;
uniform float uHeight;
attribute vec3 aSeed;
varying float vAlpha;
#include <fog_pars_vertex>
void main() {
  float life = 1.4;
  float t = mod(uTime * (0.8 + aSeed.z * 0.4) + aSeed.z * life, life) / life;
  float ang = aSeed.x * 6.2831853;
  float speed = 1.5 + aSeed.y * 3.5;
  vec3 p = vec3(cos(ang) * speed * t, uHeight * (0.6 + aSeed.y * 0.6) * (4.0 * t * (1.0 - t)) , sin(ang) * speed * t);
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = (2.0 + aSeed.y * 3.0) * 30.0 / max(1.0, -mvPosition.z);
  vAlpha = uIntensity * (1.0 - t);
  #include <fog_vertex>
}
`,jp=`
varying float vAlpha;
#include <fog_pars_fragment>
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  gl_FragColor = vec4(0.8, 0.82, 0.8, vAlpha * 0.7);
  #include <fog_fragment>
}
`,Mp=class{constructor(e){H(this,`object`,new Bn),H(this,`interactables`,[]),H(this,`springs`,[]),H(this,`colGeo`,void 0),H(this,`dropGeo`,void 0),H(this,`ringGeo`,void 0),H(this,`ringMat`,void 0),H(this,`proxyGeo`,void 0),H(this,`proxyMat`,new oi),H(this,`camPos`,new z),this.object.name=`springs`;let t=e.uniforms,n=[];for(let e=0;e<=10;e++){let t=e/10;n.push(new R(.28+.25*t+.75*t**3,t))}this.colGeo=new aa(n,18),this.ringGeo=new oa(7,7,1,1),this.ringGeo.rotateX(-Math.PI/2),this.ringMat=new _a({vertexShader:kp,fragmentShader:Op,uniforms:ma.merge([V.fog,{uIntensity:{value:0}}]),transparent:!0,depthWrite:!1,fog:!0}),this.ringMat.uniforms.uTime=t.uTime,this.proxyGeo=new qi(3.5,3.5,8,8,1,!0),this.proxyGeo.translate(0,3,0);let r=e.quality.level===`low`?60:160;this.dropGeo=new Jr;let i=new Float32Array(r*3),a=gu(555);for(let e=0;e<i.length;e++)i[e]=a();this.dropGeo.setAttribute(`position`,new Nr(new Float32Array(r*3),3)),this.dropGeo.setAttribute(`aSeed`,new Nr(i,3)),this.dropGeo.boundingSphere=null;let o=[];for(let[e,n]of pd){let r=Cd(e,n),i=new Bn;i.position.set(e,r,n);let a=new _a({vertexShader:Ep,fragmentShader:Dp,uniforms:ma.merge([V.fog,{uIntensity:{value:0}}]),transparent:!0,depthWrite:!1,side:2,fog:!0});a.uniforms.uTime=t.uTime,a.uniforms.uSunColor=t.uSunColor,a.uniforms.uLightning=t.uLightning;let s=new vi(this.colGeo,a),c=new _a({vertexShader:Ap,fragmentShader:jp,uniforms:ma.merge([V.fog,{uIntensity:{value:0},uHeight:{value:3}}]),transparent:!0,depthWrite:!1,blending:2,fog:!0});c.uniforms.uTime=t.uTime;let l=new Bi(this.dropGeo,c);l.frustumCulled=!1;let u=new vi(this.ringGeo,this.ringMat);u.position.y=.08;let d=new vi(this.proxyGeo,this.proxyMat);d.visible=!1,d.position.set(e,r,n),o.push(d),i.add(s,l,u),i.visible=!1,this.object.add(i,d),this.springs.push({x:e,z:n,ground:r,group:i,column:s,colMat:a,drops:l,dropMat:c,ring:u})}let s=this.camPos,c=this.springs;this.interactables.push({id:`springs`,targets:o,maxDistance:220,isAvailable:of.springs,anchor(e,t){let n=null,r=1/0;for(let e of c){let t=Math.hypot(e.x-s.x,e.z-s.z);t<r&&(r=t,n=e)}return n?(e.set(n.x,Math.max(n.ground,t.waterLevel)+4+3*t.springs,n.z),!0):!1}})}update(e){this.camPos.copy(e.camera.position);let t=e.env.springs,n=e.env.waterLevel,r=!1;for(let i of this.springs){let a=n-i.ground,o=t*(1-Math.min(1,Math.max(0,a-.5)/4)),s=o>.01;if(i.group.visible=s,!s)continue;r=!0;let c=Math.max(i.ground,n)-i.ground,l=(1.2+4.2*o)*(.9+Math.sin(e.time*3.1+i.x)*.1);i.column.position.y=c-.2,i.column.scale.set(.8+o*.7,l,.8+o*.7),i.colMat.uniforms.uIntensity.value=Math.min(1,o*1.3),i.drops.position.y=c,i.dropMat.uniforms.uIntensity.value=o,i.dropMat.uniforms.uHeight.value=l,i.ring.position.y=c+.06,i.ring.scale.setScalar(.5+o*.8)}this.ringMat.uniforms.uIntensity.value=r?Math.min(1,t*1.2):0}dispose(){for(let e of this.springs)e.colMat.dispose(),e.dropMat.dispose();this.colGeo.dispose(),this.dropGeo.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.proxyGeo.dispose(),this.proxyMat.dispose(),this.object.clear()}};function Np(e,t){let n=ad.points,r=1/0;for(let i=0;i<n.length-1;i++){let a=_u(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]);a<r&&(r=a)}return r}var Pp=class{constructor(){H(this,`state`,`locked`),H(this,`ctx`,null),H(this,`master`,null),H(this,`bus`,null),H(this,`noise`,null),H(this,`wind`,null),H(this,`rain`,null),H(this,`surf`,null),H(this,`river`,null),H(this,`murmur`,null),H(this,`roar`,null),H(this,`enabled`,!0),H(this,`volume`,.8),H(this,`suspendedByApp`,!1),H(this,`updateTimer`,0),H(this,`nextBird`,0),H(this,`nextKnock`,0),H(this,`nextCreak`,0),H(this,`gust`,0),H(this,`gustTarget`,0),H(this,`rand`,gu(4711))}async unlock(){try{if(!this.ctx){let e=window,t=e.AudioContext??e.webkitAudioContext;if(!t)return this.state=`unavailable`,!1;this.ctx=new t({latencyHint:`playback`}),this.build(),this.ctx.onstatechange=()=>this.syncState()}return this.ctx.state!==`running`&&!this.suspendedByApp&&await this.ctx.resume(),this.syncState(),this.ctx.state===`running`}catch{return this.syncState(),!1}}syncState(){let e=this.ctx;e&&(this.state=e.state===`running`?`running`:this.suspendedByApp?`suspended`:`locked`)}setEnabled(e){this.enabled=e,this.applyMaster()}setVolume(e){this.volume=uu(e),this.applyMaster()}applyMaster(){if(this.ctx&&this.master)try{this.master.gain.setTargetAtTime(this.enabled?this.volume:0,this.ctx.currentTime,.15)}catch{}}build(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0;let t=e.createDynamicsCompressor();t.threshold.value=-16,t.knee.value=12,t.ratio.value=4,t.attack.value=.01,t.release.value=.4,this.bus=e.createGain(),this.bus.gain.value=.9,this.bus.connect(t),t.connect(this.master),this.master.connect(e.destination);let n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.wind=this.layer(`bandpass`,500,.6,`lowpass`,1400),this.rain=this.layer(`highpass`,900,.5,`lowpass`,7e3),this.surf=this.layer(`lowpass`,420,.7),this.river=this.layer(`bandpass`,1500,.4,`highpass`,400),this.murmur=this.layer(`bandpass`,520,1.4,`lowpass`,1200),this.roar=this.layer(`lowpass`,180,.9),this.applyMaster()}layer(e,t,n,r,i){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noise,o.loop=!0;let s=a.createBiquadFilter();s.type=e,s.frequency.value=t,s.Q.value=n;let c=a.createGain();c.gain.value=0,o.connect(s);let l=s,u;return r&&(u=a.createBiquadFilter(),u.type=r,u.frequency.value=i??1e3,s.connect(u),l=u),l.connect(c),c.connect(this.bus),o.start(0,this.rand()*1.9),{src:o,filter:s,filter2:u,gain:c}}set(e,t,n=.35){try{e.setTargetAtTime(t,this.ctx.currentTime,n)}catch{}}update(e){let t=this.ctx;if(!t||t.state!==`running`||!this.enabled||(this.updateTimer-=e.dt,this.updateTimer>0))return;this.updateTimer=.1;let n=e.env,r=e.camera.position,i=e.viewer.inHold,a=n.storm,o=t.currentTime;this.rand()<.08&&(this.gustTarget=this.rand()),this.gust+=(this.gustTarget-this.gust)*.1;let s=(.035+a*.3)*(.65+this.gust*.6)*(i?.35:1);this.set(this.wind.gain.gain,s,.6),this.set(this.wind.filter.frequency,380+a*500+this.gust*300,.6);let c=n.rain*(i?.28:.42);this.set(this.rain.gain.gain,c,.5),this.rain.filter2&&this.set(this.rain.filter2.frequency,i?900:7e3,.4);let l=1-U(4,60,r.y-n.waterLevel),u=.5+.5*Math.sin(e.time*.66),d=(.04+n.waves*.32)*l*(.6+u*.4)*(n.waterLevel>2?1:.2)*(i?.5:1);this.set(this.surf.gain.gain,d,.5),this.set(this.surf.filter.frequency,260+n.waves*420+u*120,.5);let f=(1-U(15,140,Np(r.x,r.z)))*(1-U(2,4,n.waterLevel))*.07*(1-a*.6);this.set(this.river.gain.gain,f,.6);let p=Math.hypot(r.x-K.center[0],r.z-K.center[1]),m=n.crowd*(1-U(25,160,p))*.05*(1-a*.5);this.set(this.murmur.gain.gain,m,.8),this.set(this.murmur.filter.frequency,420+Math.sin(e.time*2.3)*90+Math.sin(e.time*3.7)*60,.08);let h=U(.08,.35,n.bigWave)*(1-U(.75,.98,n.bigWave))*.55;this.set(this.roar.gain.gain,h,.4);let g=(1-U(.2,.5,a))*U(-2,10,n.sunElevation)*!i;g>.05&&o>this.nextBird&&(this.bird(g),this.nextBird=o+.6+this.rand()*(4.5/g));let _=Math.hypot(r.x-J.center[0],r.z-J.center[1]),v=n.work*(1-U(60,320,_));v>.03&&o>this.nextKnock&&(this.knock(v),this.nextKnock=o+.28+this.rand()*1.1),e.viewer.onArk&&e.ark.floating&&o>this.nextCreak&&(this.creak(.3+n.waves*.7,i),this.nextCreak=o+2.5+this.rand()*(7-n.waves*4))}lightning(e){let t=this.ctx;if(t&&t.state===`running`&&this.enabled&&this.noise)try{let n=.25+e.distance*5.5,r=t.currentTime+n,i=2.5+e.distance*2.5,a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.setValueAtTime(e.distance<.4?900:320,r),o.frequency.exponentialRampToValueAtTime(90,r+i);let s=t.createGain(),c=Math.min(.9,e.intensity*(1.15-e.distance*.6));s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(c,r+(e.distance<.4?.04:.35));for(let e=1;e<5;e++)s.gain.linearRampToValueAtTime(c*(.45+this.rand()*.4)*(1-e/6),r+i*e/5);s.gain.linearRampToValueAtTime(0,r+i),a.connect(o),o.connect(s),s.connect(this.bus),a.start(r,this.rand()),a.stop(r+i+.1),a.onended=()=>{a.disconnect(),o.disconnect(),s.disconnect()}}catch{}}bird(e){let t=this.ctx;try{let n=t.currentTime+.02,r=2+Math.floor(this.rand()*4),i=2200+this.rand()*1800,a=t.createOscillator();a.type=`sine`;let o=t.createGain();o.gain.setValueAtTime(0,n);let s=n;for(let t=0;t<r;t++){let t=.06+this.rand()*.09,n=i*(.85+this.rand()*.3);a.frequency.setValueAtTime(n,s),a.frequency.exponentialRampToValueAtTime(n*(this.rand()<.5?1.35:.75),s+t),o.gain.linearRampToValueAtTime(.03*e,s+.01),o.gain.linearRampToValueAtTime(0,s+t),s+=t+.03+this.rand()*.05}let c=o,l=t.createStereoPanner?.();l&&(l.pan.value=this.rand()*1.6-.8,o.connect(l),c=l),a.connect(o),c.connect(this.bus),a.start(n),a.stop(s+.05),a.onended=()=>{a.disconnect(),o.disconnect(),l?.disconnect()}}catch{}}knock(e){let t=this.ctx;try{let n=t.currentTime+.01,r=t.createOscillator();r.type=`triangle`,r.frequency.setValueAtTime(170+this.rand()*90,n),r.frequency.exponentialRampToValueAtTime(90,n+.12);let i=t.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.16*e,n+.005),i.gain.exponentialRampToValueAtTime(1e-4,n+.18);let a=t.createBufferSource();a.buffer=this.noise;let o=t.createBiquadFilter();o.type=`bandpass`,o.frequency.value=1100+this.rand()*500,o.Q.value=2;let s=t.createGain();s.gain.setValueAtTime(.09*e,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.05),r.connect(i),a.connect(o),o.connect(s),i.connect(this.bus),s.connect(this.bus),r.start(n),r.stop(n+.2),a.start(n,this.rand()),a.stop(n+.06),r.onended=()=>{r.disconnect(),i.disconnect(),a.disconnect(),o.disconnect(),s.disconnect()}}catch{}}creak(e,t){let n=this.ctx;try{let r=n.currentTime+.02,i=.5+this.rand()*.7,a=n.createOscillator();a.type=`sawtooth`;let o=70+this.rand()*60;a.frequency.setValueAtTime(o,r),a.frequency.linearRampToValueAtTime(o*(.75+this.rand()*.2),r+i);let s=n.createBiquadFilter();s.type=`bandpass`,s.frequency.value=700+this.rand()*500,s.Q.value=6;let c=n.createGain(),l=.05*e*(t?1.4:.8);c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(l,r+i*.3),c.gain.linearRampToValueAtTime(0,r+i),a.connect(s),s.connect(c),c.connect(this.bus),a.start(r),a.stop(r+i+.05),a.onended=()=>{a.disconnect(),s.disconnect(),c.disconnect()}}catch{}}suspend(){this.suspendedByApp=!0,this.ctx&&this.ctx.state===`running`&&this.ctx.suspend().then(()=>this.syncState(),()=>void 0)}resume(){this.suspendedByApp=!1,this.ctx&&this.ctx.state!==`running`&&this.ctx.resume().then(()=>this.syncState(),()=>this.syncState())}dispose(){let e=this.ctx;if(this.ctx=null,e)try{for(let e of[this.wind,this.rain,this.surf,this.river,this.murmur,this.roar])e&&(e.src.stop(),e.src.disconnect());e.close()}catch{}}},Fp=1.7,Ip=.35,Lp=4.5,Rp=9,zp=.65,Bp=1.25,Vp=.25,Hp=1.1,Up=280,Wp=10,Gp={KeyW:[0,1],ArrowUp:[0,1],KeyS:[0,-1],ArrowDown:[0,-1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};function Kp(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e.isContentEditable}function qp(e,t,n){let r=0;for(let i=0;i<e.length;i++){let[a,o]=e[i],[s,c]=e[(i+1)%e.length],l=(s-a)*(n-o)-(c-o)*(t-a);if(Math.abs(l)<1e-9)continue;let u=l>0?1:-1;if(r===0)r=u;else if(u!==r)return!1}return!0}var Jp=class{constructor(e){H(this,`enabled`,!1),H(this,`viewer`,{onArk:!1,inHold:!1,sheltered:!1}),H(this,`eye`,new z),H(this,`onTap`,null),H(this,`onInspect`,null),H(this,`onLockChange`,null),H(this,`onBlocked`,null),H(this,`camera`,void 0),H(this,`canvas`,void 0),H(this,`walk`,void 0),H(this,`getSettings`,void 0),H(this,`listeners`,new ou),H(this,`space`,`world`),H(this,`x`,0),H(this,`z`,0),H(this,`feet`,0),H(this,`feetSmooth`,0),H(this,`yaw`,0),H(this,`pitch`,0),H(this,`surface`,null),H(this,`lastArkYaw`,0),H(this,`vx`,0),H(this,`vz`,0),H(this,`bobPhase`,0),H(this,`blockedTimer`,0),H(this,`spawned`,!1),H(this,`keys`,new Set),H(this,`run`,!1),H(this,`joyX`,0),H(this,`joyY`,0),H(this,`joyPointer`,-1),H(this,`lookPointers`,new Map),H(this,`joystick`,void 0),H(this,`knob`,void 0),H(this,`locked`,!1),H(this,`euler`,new Sn(0,0,0,`YXZ`)),H(this,`tmp`,new z),H(this,`tmp2`,new z),H(this,`pushResult`,[0,0]),this.camera=e.camera,this.canvas=e.canvas,this.walk=e.walk,this.getSettings=e.getSettings,this.joystick=document.createElement(`div`),this.joystick.className=`nf-joystick`,this.joystick.setAttribute(`aria-hidden`,`true`),this.knob=document.createElement(`div`),this.knob.className=`nf-joystick-knob`,this.joystick.appendChild(this.knob),e.touchRoot.appendChild(this.joystick);let t=this.listeners;t.add(window,`keydown`,e=>this.onKey(e,!0)),t.add(window,`keyup`,e=>this.onKey(e,!1)),t.add(window,`blur`,()=>this.clearInput()),t.add(document,`pointerlockchange`,()=>this.onPointerLockChange()),t.add(document,`pointerlockerror`,()=>this.onPointerLockChange()),t.add(document,`mousemove`,e=>this.onMouseMove(e)),t.add(this.canvas,`pointerdown`,e=>this.onPointerDown(e)),t.add(window,`pointermove`,e=>this.onPointerMove(e)),t.add(window,`pointerup`,e=>this.onPointerUp(e)),t.add(window,`pointercancel`,e=>this.onPointerUp(e,!0)),t.add(this.canvas,`contextmenu`,e=>e.preventDefault()),t.add(this.canvas,`gesturestart`,e=>e.preventDefault()),t.add(this.joystick,`pointerdown`,e=>this.onJoyDown(e)),t.add(this.joystick,`pointermove`,e=>this.onJoyMove(e)),t.add(this.joystick,`pointerup`,e=>this.onJoyUp(e)),t.add(this.joystick,`pointercancel`,e=>this.onJoyUp(e))}get lockSupported(){try{return`pointerLockElement`in document&&typeof this.canvas.requestPointerLock==`function`&&window.matchMedia(`(pointer: fine)`).matches}catch{return!1}}get isLocked(){return this.locked}requestLock(){if(this.lockSupported&&!this.locked)try{let e=this.canvas.requestPointerLock();e&&typeof e.catch==`function`&&e.catch(()=>this.onPointerLockChange())}catch{}}exitLock(){if(this.locked)try{document.exitPointerLock()}catch{}}spawn(e){let t=this.walk.ark();if(this.vx=this.vz=0,this.pitch=e.pitch??0,e.space===`ark`){let n=this.findSurface(e.x,e.z,1/0,!0);if(n){this.space=`ark`,this.x=e.x,this.z=e.z,this.surface=n,this.feet=this.feetSmooth=n.heightAt(e.x,e.z),this.yaw=mu(e.yaw+t.yaw),this.lastArkYaw=t.yaw,this.spawned=!0,this.applyCamera(0,!1);return}this.tmp.set(e.x,0,e.z).applyMatrix4(t.matrix),this.placeWorld(this.tmp.x,this.tmp.z,e.yaw+t.yaw)}else this.placeWorld(e.x,e.z,e.yaw)}placeWorld(e,t,n){if(this.blockedByObstacles(e,t,this.walk.groundHeight(e,t),`world`))search:for(let n=1.5;n<=30;n+=1.5)for(let r=0;r<12;r++){let i=r/12*Math.PI*2,a=e+Math.cos(i)*n,o=t+Math.sin(i)*n;if(!this.blockedByObstacles(a,o,this.walk.groundHeight(a,o),`world`)){e=a,t=o;break search}}this.space=`world`,this.surface=null,this.x=e,this.z=t,this.feet=this.feetSmooth=this.walk.groundHeight(e,t),this.yaw=mu(n),this.spawned=!0,this.applyCamera(0,!1)}placeAt(e,t,n){let r=this.walk.ark(),i=this.tmp.copy(e).applyMatrix4(r.inverse),a=this.findSurface(i.x,i.z,i.y-Fp,!1);if(a&&Math.abs(a.heightAt(i.x,i.z)-(i.y-Fp))<3)return this.space=`ark`,this.x=i.x,this.z=i.z,this.surface=a,this.feet=this.feetSmooth=a.heightAt(i.x,i.z),this.yaw=mu(t),this.pitch=lu(n,-1.2,1.2),this.lastArkYaw=r.yaw,this.spawned=!0,this.applyCamera(0,!1),!0;let o=this.walk.groundHeight(e.x,e.z),s=this.walk.waterLevel()-o>Hp,c=Math.hypot(e.x,e.z)<this.walk.boundsRadius;return!s&&c&&Math.abs(e.y-Fp-o)<6&&!this.blockedByObstacles(e.x,e.z,o,`world`)?(this.placeWorld(e.x,e.z,t),this.pitch=lu(n,-1.2,1.2),!0):!1}isSubmerged(){return!this.spawned||this.space!==`world`?!1:this.walk.waterLevel()-this.walk.groundHeight(this.x,this.z)>1.2}setTouchControlsVisible(e){this.joystick.classList.toggle(`is-visible`,e),e||this.resetJoystick()}update(e){let t=e.dt,n=this.walk.ark();if(this.space===`ark`){let e=mu(n.yaw-this.lastArkYaw);this.yaw=mu(this.yaw+e),(!this.surface||!this.surface.enabled)&&this.relocateOnArk()}this.lastArkYaw=n.yaw;let r=0,i=0;if(this.enabled){for(let e of this.keys){let t=Gp[e];t&&(r+=t[0],i+=t[1])}r+=this.joyX,i+=this.joyY}let a=Math.hypot(r,i);a>1&&(r/=a,i/=a);let o=Math.hypot(this.joyX,this.joyY),s=this.run||o>.9,c=s?Rp:Lp,l=-Math.sin(this.yaw),u=-Math.cos(this.yaw),d=Math.cos(this.yaw),f=-Math.sin(this.yaw),p=(l*i+d*r)*c,m=(u*i+f*r)*c;this.vx=pu(this.vx,p,10,t),this.vz=pu(this.vz,m,10,t);let h=this.vx*t,g=this.vz*t,_=Math.hypot(h,g);if(_>1e-5){let e=Math.ceil(_/Vp);h/=e,g/=e;for(let t=0;t<e;t++)this.moveWorldDelta(h,g)}else this.space===`world`&&(this.feet=this.walk.groundHeight(this.x,this.z));this.blockedTimer=Math.max(0,this.blockedTimer-t);let v=Math.hypot(this.vx,this.vz)>.5;v&&(this.bobPhase+=t*(s?11:8)),this.applyCamera(t,v&&!e.reducedMotion)}moveWorldDelta(e,t){let n=this.walk.ark();if(this.space===`ark`){let r=Math.cos(n.yaw),i=Math.sin(n.yaw),a=e*r-t*i,o=e*i+t*r;this.moveOnArk(a,o)}else this.moveOnGround(e,t)}moveOnGround(e,t){let n=this.walk,r=this.x+e,i=this.z+t,a=Math.hypot(r,i);if(a>n.boundsRadius){let e=n.boundsRadius/a;r*=e,i*=e,this.blocked(`edge`)}let o=this.pushOut(r,i,this.feet,n.worldObstacles);r=o[0],i=o[1];let s=n.ark();if(this.tmp.set(r,this.feet+.5,i).applyMatrix4(s.inverse),n.arkExterior.length){let e=this.pushOut(this.tmp.x,this.tmp.z,this.tmp.y,n.arkExterior);(e[0]!==this.tmp.x||e[1]!==this.tmp.z)&&(this.tmp2.set(e[0],this.tmp.y,e[1]).applyMatrix4(s.matrix),r=this.tmp2.x,i=this.tmp2.z)}this.tmp.set(r,this.feet,i).applyMatrix4(s.inverse);let c=this.findSurface(this.tmp.x,this.tmp.z,this.tmp.y,!1);if(c){this.space=`ark`,this.surface=c,this.x=this.tmp.x,this.z=this.tmp.z,this.feet=c.heightAt(this.x,this.z),this.feetSmooth=this.feet,this.lastArkYaw=s.yaw;return}let l=n.groundHeight(r,i),u=Math.hypot(r-this.x,i-this.z);if(u>1e-4&&l-this.feet>Math.max(.12,u*1.05))return;let d=n.waterLevel(),f=d-l,p=d-this.feet;f>Hp&&f>p-.01?this.blocked(`deep-water`):(this.x=r,this.z=i,this.feet=l)}moveOnArk(e,t){let n=this.walk,r=this.x+e,i=this.z+t,a=this.pushOut(r,i,this.feet,n.arkObstacles);r=a[0],i=a[1];let o=this.findSurface(r,i,this.feet,!1);if(o){this.surface=o,this.x=r,this.z=i,this.feet=o.heightAt(r,i);return}let s=n.ark();this.tmp.set(r,this.feet,i).applyMatrix4(s.matrix);let c=n.groundHeight(this.tmp.x,this.tmp.z);Math.abs(c-this.tmp.y)<.8&&n.waterLevel()-c<Hp&&(this.space=`world`,this.surface=null,this.x=this.tmp.x,this.z=this.tmp.z,this.feet=c,this.feetSmooth=c)}findSurface(e,t,n,r){let i=null,a=-1/0;for(let o of this.walk.arkSurfaces){if(!o.enabled||!qp(o.polygon,e,t))continue;let s=o.heightAt(e,t);!r&&(s>n+zp||s<n-Bp)||s>a&&(a=s,i=o)}return i}relocateOnArk(){let e=null,t=0,n=0,r=1/0;for(let i of this.walk.arkSurfaces){if(!i.enabled||i.interior)continue;let a=1/0,o=-1/0,s=1/0,c=-1/0;for(let[e,t]of i.polygon)a=Math.min(a,e),o=Math.max(o,e),s=Math.min(s,t),c=Math.max(c,t);let l=lu(this.x,a+.5,o-.5),u=lu(this.z,s+.5,c-.5),d=Math.hypot(l-this.x,u-this.z)+Math.abs(i.heightAt(l,u)-this.feet)*.5;d<r&&(r=d,e=i,t=l,n=u)}e?(this.surface=e,this.x=t,this.z=n,this.feet=e.heightAt(t,n)):(this.tmp.set(this.x,this.feet,this.z).applyMatrix4(this.walk.ark().matrix),this.placeWorld(this.tmp.x,this.tmp.z,this.yaw))}blockedByObstacles(e,t,n,r){let i=r===`world`?this.walk.worldObstacles:this.walk.arkObstacles,a=this.pushOut(e,t,n,i);return a[0]!==e||a[1]!==t}pushOut(e,t,n,r){for(let i=0;i<2;i++)for(let i of r)if(!(n+1.6<i.yMin||n>i.yMax)){if(i.kind===`circle`){let n=e-i.x,r=t-i.z,a=i.r+Ip,o=n*n+r*r;if(o<a*a){let s=Math.sqrt(o)||1e-4;e=i.x+n/s*a,t=i.z+r/s*a}}else{let n=e-i.x,r=t-i.z,a=i.halfX+i.halfZ+Ip;if(Math.abs(n)>a||Math.abs(r)>a)continue;let o=Math.cos(i.yaw),s=Math.sin(i.yaw),c=n*o-r*s,l=n*s+r*o,u=i.halfX+Ip,d=i.halfZ+Ip;if(Math.abs(c)<u&&Math.abs(l)<d){let n=u-Math.abs(c),r=d-Math.abs(l),a=c,f=l;n<r?a=Math.sign(c||1)*u:f=Math.sign(l||1)*d,e=i.x+a*o+f*s,t=i.z-a*s+f*o}}}return this.pushResult[0]=e,this.pushResult[1]=t,this.pushResult}blocked(e){this.blockedTimer>0||(this.blockedTimer=.5,this.onBlocked?.(e))}applyCamera(e,t){this.feetSmooth=e>0?pu(this.feetSmooth,this.feet,16,e):this.feet,Math.abs(this.feetSmooth-this.feet)>2&&(this.feetSmooth=this.feet);let n=t?Math.sin(this.bobPhase)*.035:0;if(this.space===`ark`){let e=this.walk.ark();this.eye.set(this.x,this.feetSmooth,this.z).applyMatrix4(e.matrix),this.eye.y+=Fp+n,this.viewer.onArk=!0,this.viewer.inHold=!!this.surface?.interior}else this.eye.set(this.x,this.feetSmooth+Fp+n,this.z),this.viewer.onArk=!1,this.viewer.inHold=!1;this.viewer.sheltered=this.viewer.inHold;let r=this.walk.waterLevel()+.25;this.space===`world`&&this.eye.y<r&&(this.eye.y=r),this.camera.position.copy(this.eye),this.euler.set(this.pitch,this.yaw,0,`YXZ`),this.camera.quaternion.setFromEuler(this.euler),Math.abs(this.camera.fov-70)>.05&&(this.camera.fov=e>0?pu(this.camera.fov,70,3,e):70,this.camera.updateProjectionMatrix())}look(e,t,n){let r=this.getSettings(),i=n*r.lookSensitivity;this.yaw=mu(this.yaw-e*i),this.pitch=lu(this.pitch-t*i*(r.invertY?-1:1),-1.45,1.45)}onKey(e,t){if(!Kp(e.target)){if((e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(this.run=t),Gp[e.code]){if(t){if(!this.enabled)return;this.keys.add(e.code),e.code.startsWith(`Arrow`)&&e.preventDefault()}else this.keys.delete(e.code)}else t&&e.code===`KeyE`&&this.enabled&&!e.repeat&&this.onInspect?.()}}clearInput(){this.keys.clear(),this.run=!1,this.resetJoystick(),this.lookPointers.clear()}onPointerLockChange(){let e=document.pointerLockElement===this.canvas;e!==this.locked&&(this.locked=e,e||this.clearInput(),this.onLockChange?.(e))}onMouseMove(e){this.locked&&this.enabled&&(Math.abs(e.movementX)>300||Math.abs(e.movementY)>300||this.look(e.movementX,e.movementY,.0022))}onPointerDown(e){if(e.button===0||e.pointerType!==`mouse`){if(this.locked)this.enabled&&this.onInspect?.();else{this.lookPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,t:performance.now(),type:e.pointerType});try{this.canvas.setPointerCapture(e.pointerId)}catch{}}}}onPointerMove(e){let t=this.lookPointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,this.enabled&&(t.type===`mouse`&&this.lockSupported||this.look(n,r,t.type===`touch`?.0055:.0035))}onPointerUp(e,t=!1){let n=this.lookPointers.get(e.pointerId);if(!n)return;this.lookPointers.delete(e.pointerId);try{this.canvas.releasePointerCapture(e.pointerId)}catch{}if(t)return;let r=Math.hypot(e.clientX-n.startX,e.clientY-n.startY),i=performance.now()-n.t<Up;if(r>Wp)return;if(n.type===`mouse`&&this.enabled&&this.lockSupported){this.requestLock();return}if(!i&&n.type!==`mouse`)return;let a=this.canvas.getBoundingClientRect(),o=(e.clientX-a.left)/a.width*2-1,s=-((e.clientY-a.top)/a.height)*2+1;this.onTap?.(o,s)}onJoyDown(e){if(this.joyPointer===-1){this.joyPointer=e.pointerId,this.joystick.classList.add(`is-active`);try{this.joystick.setPointerCapture(e.pointerId)}catch{}this.onJoyMove(e),e.preventDefault()}}onJoyMove(e){if(e.pointerId!==this.joyPointer)return;let t=this.joystick.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=t.width*.38,a=e.clientX-n,o=e.clientY-r,s=Math.hypot(a,o);s>i&&(a=a/s*i,o=o/s*i),this.knob.style.transform=`translate(${a.toFixed(1)}px, ${o.toFixed(1)}px)`;let c=a/i,l=-o/i,u=Math.hypot(c,l),d=u<.12?0:(u-.12)/.88/(u||1);this.joyX=c*d,this.joyY=l*d}onJoyUp(e){e.pointerId===this.joyPointer&&this.resetJoystick()}resetJoystick(){this.joyPointer=-1,this.joyX=0,this.joyY=0,this.knob.style.transform=``,this.joystick.classList.remove(`is-active`)}dispose(){this.exitLock(),this.listeners.removeAll(),this.joystick.remove()}},Yp=24,Xp=`
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
  float pulse = 1.0 + uPulse * 0.08 * sin(uTime * 2.4 + center.x * 0.1);
  float size = dist * 0.032 * aScale * pulse;
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  vAlpha = aAlpha;
}
`,Zp=`
varying vec2 vUv;
varying float vAlpha;
void main() {
  float r = length(vUv) * 2.0;
  float ring = smoothstep(0.52, 0.58, r) * (1.0 - smoothstep(0.66, 0.72, r));
  float outline = smoothstep(0.46, 0.52, r) * (1.0 - smoothstep(0.72, 0.8, r));
  float diamond = 1.0 - smoothstep(0.17, 0.21, abs(vUv.x * 2.0) + abs(vUv.y * 2.0));
  float glow = exp(-r * 4.0) * 0.25;
  vec3 warm = vec3(1.0, 0.87, 0.58);
  float a = max(max(ring, diamond), glow);
  vec3 col = mix(vec3(0.05, 0.04, 0.03), warm, clamp((ring + diamond + glow) / max(a, 1e-3), 0.0, 1.0));
  float alpha = max(a, outline * 0.45) * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col, alpha);
}
`,Qp=class{constructor(e){H(this,`object`,new Bn),H(this,`camera`,void 0),H(this,`items`,[]),H(this,`raycaster`,new So),H(this,`ndc`,new R),H(this,`hits`,[]),H(this,`markers`,void 0),H(this,`markerMat`,void 0),H(this,`markerGeo`,void 0),H(this,`alpha`,void 0),H(this,`scale`,void 0),H(this,`anchor`,new z),H(this,`m4`,new fn),H(this,`fades`,new Float32Array(Yp)),H(this,`result`,{id:`ark`,distance:0}),this.object.name=`interactions`,this.camera=e.camera,this.markerGeo=new oa(1,1),this.alpha=new Si(new Float32Array(Yp),1),this.scale=new Si(new Float32Array(Yp).fill(1),1),this.alpha.setUsage(tt),this.scale.setUsage(tt),this.markerGeo.setAttribute(`aAlpha`,this.alpha),this.markerGeo.setAttribute(`aScale`,this.scale),this.markerMat=new _a({vertexShader:Xp,fragmentShader:Zp,uniforms:{uTime:{value:0},uPulse:{value:1}},transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:1}),this.markers=new Ai(this.markerGeo,this.markerMat,Yp),this.markers.instanceMatrix.setUsage(tt),this.markers.frustumCulled=!1,this.markers.renderOrder=20,this.markers.count=0,this.object.add(this.markers)}register(e){this.items.push(...e)}focusCenter(e){return this.cast(0,0,e)}pickAt(e,t,n){return this.cast(e,t,n)?.id??null}cast(e,t,n){this.ndc.set(e,t),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera);let r=this.raycaster.ray,i=null,a=1/0;for(let e of this.items){if(!e.isAvailable(n))continue;this.raycaster.far=e.maxDistance,this.hits.length=0,this.raycaster.intersectObjects(e.targets,!1,this.hits);let t=this.hits[0];t&&t.distance<a&&(a=t.distance,i=e.id)}if(this.raycaster.far=1/0,of.floodwaters(n)&&r.direction.y<-.01){let e=(n.waterLevel-r.origin.y)/r.direction.y;e>0&&e<600&&e<a&&(a=e,i=`floodwaters`)}let o=i?a:1500,s=this.terrainHit(o);return i&&s<a-1&&(i=null,a=1/0),!i&&r.direction.y>.15&&s>=o&&of.rain(n)&&(i=`rain`,a=0),i?(this.result.id=i,this.result.distance=a,this.result):null}terrainHit(e){let t=this.raycaster.ray.origin,n=this.raycaster.ray.direction,r=.5;for(;r<e;){let e=t.x+n.x*r;if(t.y+n.y*r<Cd(e,t.z+n.z*r))return r;r+=Math.min(8,.6+r*.03)}return e}update(e,t,n){this.markerMat.uniforms.uTime.value=e.time,this.markerMat.uniforms.uPulse.value=+!e.reducedMotion;let r=e.camera.position,i=0;for(let a=0;a<this.items.length&&i<Yp;a++){let o=this.items[a],s=0,c=!1;if(t&&o.anchor&&o.isAvailable(e.env)&&o.anchor(this.anchor,e.env)){let e=this.anchor.distanceTo(r),t=Math.min(1,Math.max(0,(e-3)/4)),a=1-Math.min(1,Math.max(0,(e-o.maxDistance*.75)/(o.maxDistance*.25))),l=n.includes(o.id);s=t*a*(l?.95:.5),c=!0,this.scale.setX(i,l?1.15:.85)}let l=this.fades[a]+(s-this.fades[a])*Math.min(1,e.dt*4);this.fades[a]=e.dt>0?l:s,!(!c||this.fades[a]<.01)&&(this.m4.makeTranslation(this.anchor.x,this.anchor.y,this.anchor.z),this.markers.setMatrixAt(i,this.m4),this.alpha.setX(i,this.fades[a]),i++)}this.markers.count=i,this.markers.instanceMatrix.needsUpdate=!0,this.alpha.needsUpdate=!0,this.scale.needsUpdate=!0}dispose(){this.markerGeo.dispose(),this.markerMat.dispose(),this.object.clear()}},$p=`Tanzil Quran Text
Copyright (C) 2007-2021 Tanzil Project
License: Creative Commons Attribution 3.0

This copy of the Quran text is carefully produced, highly
verified and continuously monitored by a group of specialists
in Tanzil Project.

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

Please check updates at: http://tanzil.net/updates/`,em={"11:25":`وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦٓ إِنِّى لَكُمْ نَذِيرٌۭ مُّبِينٌ`,"11:26":`أَن لَّا تَعْبُدُوٓا۟ إِلَّا ٱللَّهَ ۖ إِنِّىٓ أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ أَلِيمٍۢ`,"11:27":`فَقَالَ ٱلْمَلَأُ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦ مَا نَرَىٰكَ إِلَّا بَشَرًۭا مِّثْلَنَا وَمَا نَرَىٰكَ ٱتَّبَعَكَ إِلَّا ٱلَّذِينَ هُمْ أَرَاذِلُنَا بَادِىَ ٱلرَّأْىِ وَمَا نَرَىٰ لَكُمْ عَلَيْنَا مِن فَضْلٍۭ بَلْ نَظُنُّكُمْ كَٰذِبِينَ`,"11:28":`قَالَ يَٰقَوْمِ أَرَءَيْتُمْ إِن كُنتُ عَلَىٰ بَيِّنَةٍۢ مِّن رَّبِّى وَءَاتَىٰنِى رَحْمَةًۭ مِّنْ عِندِهِۦ فَعُمِّيَتْ عَلَيْكُمْ أَنُلْزِمُكُمُوهَا وَأَنتُمْ لَهَا كَٰرِهُونَ`,"11:29":`وَيَٰقَوْمِ لَآ أَسْـَٔلُكُمْ عَلَيْهِ مَالًا ۖ إِنْ أَجْرِىَ إِلَّا عَلَى ٱللَّهِ ۚ وَمَآ أَنَا۠ بِطَارِدِ ٱلَّذِينَ ءَامَنُوٓا۟ ۚ إِنَّهُم مُّلَٰقُوا۟ رَبِّهِمْ وَلَٰكِنِّىٓ أَرَىٰكُمْ قَوْمًۭا تَجْهَلُونَ`,"11:30":`وَيَٰقَوْمِ مَن يَنصُرُنِى مِنَ ٱللَّهِ إِن طَرَدتُّهُمْ ۚ أَفَلَا تَذَكَّرُونَ`,"11:31":`وَلَآ أَقُولُ لَكُمْ عِندِى خَزَآئِنُ ٱللَّهِ وَلَآ أَعْلَمُ ٱلْغَيْبَ وَلَآ أَقُولُ إِنِّى مَلَكٌۭ وَلَآ أَقُولُ لِلَّذِينَ تَزْدَرِىٓ أَعْيُنُكُمْ لَن يُؤْتِيَهُمُ ٱللَّهُ خَيْرًا ۖ ٱللَّهُ أَعْلَمُ بِمَا فِىٓ أَنفُسِهِمْ ۖ إِنِّىٓ إِذًۭا لَّمِنَ ٱلظَّٰلِمِينَ`,"11:32":`قَالُوا۟ يَٰنُوحُ قَدْ جَٰدَلْتَنَا فَأَكْثَرْتَ جِدَٰلَنَا فَأْتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ`,"11:33":`قَالَ إِنَّمَا يَأْتِيكُم بِهِ ٱللَّهُ إِن شَآءَ وَمَآ أَنتُم بِمُعْجِزِينَ`,"11:34":`وَلَا يَنفَعُكُمْ نُصْحِىٓ إِنْ أَرَدتُّ أَنْ أَنصَحَ لَكُمْ إِن كَانَ ٱللَّهُ يُرِيدُ أَن يُغْوِيَكُمْ ۚ هُوَ رَبُّكُمْ وَإِلَيْهِ تُرْجَعُونَ`,"11:35":`أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۖ قُلْ إِنِ ٱفْتَرَيْتُهُۥ فَعَلَىَّ إِجْرَامِى وَأَنَا۠ بَرِىٓءٌۭ مِّمَّا تُجْرِمُونَ`,"11:36":`وَأُوحِىَ إِلَىٰ نُوحٍ أَنَّهُۥ لَن يُؤْمِنَ مِن قَوْمِكَ إِلَّا مَن قَدْ ءَامَنَ فَلَا تَبْتَئِسْ بِمَا كَانُوا۟ يَفْعَلُونَ`,"11:37":`وَٱصْنَعِ ٱلْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَٰطِبْنِى فِى ٱلَّذِينَ ظَلَمُوٓا۟ ۚ إِنَّهُم مُّغْرَقُونَ`,"11:38":`وَيَصْنَعُ ٱلْفُلْكَ وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌۭ مِّن قَوْمِهِۦ سَخِرُوا۟ مِنْهُ ۚ قَالَ إِن تَسْخَرُوا۟ مِنَّا فَإِنَّا نَسْخَرُ مِنكُمْ كَمَا تَسْخَرُونَ`,"11:39":`فَسَوْفَ تَعْلَمُونَ مَن يَأْتِيهِ عَذَابٌۭ يُخْزِيهِ وَيَحِلُّ عَلَيْهِ عَذَابٌۭ مُّقِيمٌ`,"11:40":`حَتَّىٰٓ إِذَا جَآءَ أَمْرُنَا وَفَارَ ٱلتَّنُّورُ قُلْنَا ٱحْمِلْ فِيهَا مِن كُلٍّۢ زَوْجَيْنِ ٱثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ ٱلْقَوْلُ وَمَنْ ءَامَنَ ۚ وَمَآ ءَامَنَ مَعَهُۥٓ إِلَّا قَلِيلٌۭ`,"11:41":`۞ وَقَالَ ٱرْكَبُوا۟ فِيهَا بِسْمِ ٱللَّهِ مَجْر۪ىٰهَا وَمُرْسَىٰهَآ ۚ إِنَّ رَبِّى لَغَفُورٌۭ رَّحِيمٌۭ`,"11:42":`وَهِىَ تَجْرِى بِهِمْ فِى مَوْجٍۢ كَٱلْجِبَالِ وَنَادَىٰ نُوحٌ ٱبْنَهُۥ وَكَانَ فِى مَعْزِلٍۢ يَٰبُنَىَّ ٱرْكَب مَّعَنَا وَلَا تَكُن مَّعَ ٱلْكَٰفِرِينَ`,"11:43":`قَالَ سَـَٔاوِىٓ إِلَىٰ جَبَلٍۢ يَعْصِمُنِى مِنَ ٱلْمَآءِ ۚ قَالَ لَا عَاصِمَ ٱلْيَوْمَ مِنْ أَمْرِ ٱللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا ٱلْمَوْجُ فَكَانَ مِنَ ٱلْمُغْرَقِينَ`,"11:44":`وَقِيلَ يَٰٓأَرْضُ ٱبْلَعِى مَآءَكِ وَيَٰسَمَآءُ أَقْلِعِى وَغِيضَ ٱلْمَآءُ وَقُضِىَ ٱلْأَمْرُ وَٱسْتَوَتْ عَلَى ٱلْجُودِىِّ ۖ وَقِيلَ بُعْدًۭا لِّلْقَوْمِ ٱلظَّٰلِمِينَ`,"11:45":`وَنَادَىٰ نُوحٌۭ رَّبَّهُۥ فَقَالَ رَبِّ إِنَّ ٱبْنِى مِنْ أَهْلِى وَإِنَّ وَعْدَكَ ٱلْحَقُّ وَأَنتَ أَحْكَمُ ٱلْحَٰكِمِينَ`,"11:46":`قَالَ يَٰنُوحُ إِنَّهُۥ لَيْسَ مِنْ أَهْلِكَ ۖ إِنَّهُۥ عَمَلٌ غَيْرُ صَٰلِحٍۢ ۖ فَلَا تَسْـَٔلْنِ مَا لَيْسَ لَكَ بِهِۦ عِلْمٌ ۖ إِنِّىٓ أَعِظُكَ أَن تَكُونَ مِنَ ٱلْجَٰهِلِينَ`,"11:47":`قَالَ رَبِّ إِنِّىٓ أَعُوذُ بِكَ أَنْ أَسْـَٔلَكَ مَا لَيْسَ لِى بِهِۦ عِلْمٌۭ ۖ وَإِلَّا تَغْفِرْ لِى وَتَرْحَمْنِىٓ أَكُن مِّنَ ٱلْخَٰسِرِينَ`,"11:48":`قِيلَ يَٰنُوحُ ٱهْبِطْ بِسَلَٰمٍۢ مِّنَّا وَبَرَكَٰتٍ عَلَيْكَ وَعَلَىٰٓ أُمَمٍۢ مِّمَّن مَّعَكَ ۚ وَأُمَمٌۭ سَنُمَتِّعُهُمْ ثُمَّ يَمَسُّهُم مِّنَّا عَذَابٌ أَلِيمٌۭ`,"11:49":`تِلْكَ مِنْ أَنۢبَآءِ ٱلْغَيْبِ نُوحِيهَآ إِلَيْكَ ۖ مَا كُنتَ تَعْلَمُهَآ أَنتَ وَلَا قَوْمُكَ مِن قَبْلِ هَٰذَا ۖ فَٱصْبِرْ ۖ إِنَّ ٱلْعَٰقِبَةَ لِلْمُتَّقِينَ`,"23:23":`وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦ فَقَالَ يَٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُۥٓ ۖ أَفَلَا تَتَّقُونَ`,"23:24":`فَقَالَ ٱلْمَلَؤُا۟ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦ مَا هَٰذَآ إِلَّا بَشَرٌۭ مِّثْلُكُمْ يُرِيدُ أَن يَتَفَضَّلَ عَلَيْكُمْ وَلَوْ شَآءَ ٱللَّهُ لَأَنزَلَ مَلَٰٓئِكَةًۭ مَّا سَمِعْنَا بِهَٰذَا فِىٓ ءَابَآئِنَا ٱلْأَوَّلِينَ`,"23:25":`إِنْ هُوَ إِلَّا رَجُلٌۢ بِهِۦ جِنَّةٌۭ فَتَرَبَّصُوا۟ بِهِۦ حَتَّىٰ حِينٍۢ`,"23:26":`قَالَ رَبِّ ٱنصُرْنِى بِمَا كَذَّبُونِ`,"23:27":`فَأَوْحَيْنَآ إِلَيْهِ أَنِ ٱصْنَعِ ٱلْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا فَإِذَا جَآءَ أَمْرُنَا وَفَارَ ٱلتَّنُّورُ ۙ فَٱسْلُكْ فِيهَا مِن كُلٍّۢ زَوْجَيْنِ ٱثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ ٱلْقَوْلُ مِنْهُمْ ۖ وَلَا تُخَٰطِبْنِى فِى ٱلَّذِينَ ظَلَمُوٓا۟ ۖ إِنَّهُم مُّغْرَقُونَ`,"23:28":`فَإِذَا ٱسْتَوَيْتَ أَنتَ وَمَن مَّعَكَ عَلَى ٱلْفُلْكِ فَقُلِ ٱلْحَمْدُ لِلَّهِ ٱلَّذِى نَجَّىٰنَا مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ`,"23:29":`وَقُل رَّبِّ أَنزِلْنِى مُنزَلًۭا مُّبَارَكًۭا وَأَنتَ خَيْرُ ٱلْمُنزِلِينَ`,"23:30":`إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ وَإِن كُنَّا لَمُبْتَلِينَ`,"29:14":`وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًۭا فَأَخَذَهُمُ ٱلطُّوفَانُ وَهُمْ ظَٰلِمُونَ`,"29:15":`فَأَنجَيْنَٰهُ وَأَصْحَٰبَ ٱلسَّفِينَةِ وَجَعَلْنَٰهَآ ءَايَةًۭ لِّلْعَٰلَمِينَ`,"54:9":`۞ كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍۢ فَكَذَّبُوا۟ عَبْدَنَا وَقَالُوا۟ مَجْنُونٌۭ وَٱزْدُجِرَ`,"54:10":`فَدَعَا رَبَّهُۥٓ أَنِّى مَغْلُوبٌۭ فَٱنتَصِرْ`,"54:11":`فَفَتَحْنَآ أَبْوَٰبَ ٱلسَّمَآءِ بِمَآءٍۢ مُّنْهَمِرٍۢ`,"54:12":`وَفَجَّرْنَا ٱلْأَرْضَ عُيُونًۭا فَٱلْتَقَى ٱلْمَآءُ عَلَىٰٓ أَمْرٍۢ قَدْ قُدِرَ`,"54:13":`وَحَمَلْنَٰهُ عَلَىٰ ذَاتِ أَلْوَٰحٍۢ وَدُسُرٍۢ`,"54:14":`تَجْرِى بِأَعْيُنِنَا جَزَآءًۭ لِّمَن كَانَ كُفِرَ`,"54:15":`وَلَقَد تَّرَكْنَٰهَآ ءَايَةًۭ فَهَلْ مِن مُّدَّكِرٍۢ`,"71:1":`إِنَّآ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦٓ أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌۭ`,"71:2":`قَالَ يَٰقَوْمِ إِنِّى لَكُمْ نَذِيرٌۭ مُّبِينٌ`,"71:3":`أَنِ ٱعْبُدُوا۟ ٱللَّهَ وَٱتَّقُوهُ وَأَطِيعُونِ`,"71:4":`يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ وَيُؤَخِّرْكُمْ إِلَىٰٓ أَجَلٍۢ مُّسَمًّى ۚ إِنَّ أَجَلَ ٱللَّهِ إِذَا جَآءَ لَا يُؤَخَّرُ ۖ لَوْ كُنتُمْ تَعْلَمُونَ`,"71:5":`قَالَ رَبِّ إِنِّى دَعَوْتُ قَوْمِى لَيْلًۭا وَنَهَارًۭا`,"71:6":`فَلَمْ يَزِدْهُمْ دُعَآءِىٓ إِلَّا فِرَارًۭا`,"71:7":`وَإِنِّى كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوٓا۟ أَصَٰبِعَهُمْ فِىٓ ءَاذَانِهِمْ وَٱسْتَغْشَوْا۟ ثِيَابَهُمْ وَأَصَرُّوا۟ وَٱسْتَكْبَرُوا۟ ٱسْتِكْبَارًۭا`,"71:8":`ثُمَّ إِنِّى دَعَوْتُهُمْ جِهَارًۭا`,"71:9":`ثُمَّ إِنِّىٓ أَعْلَنتُ لَهُمْ وَأَسْرَرْتُ لَهُمْ إِسْرَارًۭا`,"71:10":`فَقُلْتُ ٱسْتَغْفِرُوا۟ رَبَّكُمْ إِنَّهُۥ كَانَ غَفَّارًۭا`,"71:11":`يُرْسِلِ ٱلسَّمَآءَ عَلَيْكُم مِّدْرَارًۭا`,"71:12":`وَيُمْدِدْكُم بِأَمْوَٰلٍۢ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّٰتٍۢ وَيَجْعَل لَّكُمْ أَنْهَٰرًۭا`,"71:13":`مَّا لَكُمْ لَا تَرْجُونَ لِلَّهِ وَقَارًۭا`,"71:14":`وَقَدْ خَلَقَكُمْ أَطْوَارًا`,"71:15":`أَلَمْ تَرَوْا۟ كَيْفَ خَلَقَ ٱللَّهُ سَبْعَ سَمَٰوَٰتٍۢ طِبَاقًۭا`,"71:16":`وَجَعَلَ ٱلْقَمَرَ فِيهِنَّ نُورًۭا وَجَعَلَ ٱلشَّمْسَ سِرَاجًۭا`,"71:17":`وَٱللَّهُ أَنۢبَتَكُم مِّنَ ٱلْأَرْضِ نَبَاتًۭا`,"71:18":`ثُمَّ يُعِيدُكُمْ فِيهَا وَيُخْرِجُكُمْ إِخْرَاجًۭا`,"71:19":`وَٱللَّهُ جَعَلَ لَكُمُ ٱلْأَرْضَ بِسَاطًۭا`,"71:20":`لِّتَسْلُكُوا۟ مِنْهَا سُبُلًۭا فِجَاجًۭا`,"71:21":`قَالَ نُوحٌۭ رَّبِّ إِنَّهُمْ عَصَوْنِى وَٱتَّبَعُوا۟ مَن لَّمْ يَزِدْهُ مَالُهُۥ وَوَلَدُهُۥٓ إِلَّا خَسَارًۭا`,"71:22":`وَمَكَرُوا۟ مَكْرًۭا كُبَّارًۭا`,"71:23":`وَقَالُوا۟ لَا تَذَرُنَّ ءَالِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّۭا وَلَا سُوَاعًۭا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًۭا`,"71:24":`وَقَدْ أَضَلُّوا۟ كَثِيرًۭا ۖ وَلَا تَزِدِ ٱلظَّٰلِمِينَ إِلَّا ضَلَٰلًۭا`,"71:25":`مِّمَّا خَطِيٓـَٰٔتِهِمْ أُغْرِقُوا۟ فَأُدْخِلُوا۟ نَارًۭا فَلَمْ يَجِدُوا۟ لَهُم مِّن دُونِ ٱللَّهِ أَنصَارًۭا`,"71:26":`وَقَالَ نُوحٌۭ رَّبِّ لَا تَذَرْ عَلَى ٱلْأَرْضِ مِنَ ٱلْكَٰفِرِينَ دَيَّارًا`,"71:27":`إِنَّكَ إِن تَذَرْهُمْ يُضِلُّوا۟ عِبَادَكَ وَلَا يَلِدُوٓا۟ إِلَّا فَاجِرًۭا كَفَّارًۭا`,"71:28":`رَّبِّ ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِمَن دَخَلَ بَيْتِىَ مُؤْمِنًۭا وَلِلْمُؤْمِنِينَ وَٱلْمُؤْمِنَٰتِ وَلَا تَزِدِ ٱلظَّٰلِمِينَ إِلَّا تَبَارًۢا`},tm={id:`en-pickthall`,lang:`en`,name:`The Meaning of the Glorious Koran`,translator:`Mohammed Marmaduke Pickthall`,year:1930,license:`Public domain`,sourceUrl:`https://tanzil.net/trans/en.pickthall`,verses:{"11:25":`And We sent Noah unto his folk (and he said): Lo! I am a plain warner unto you.`,"11:26":`That ye serve none, save Allah. Lo! I fear for you the retribution of a painful Day.`,"11:27":`The chieftains of his folk, who disbelieved, said: We see thee but a mortal like us, and we see not that any follow thee save the most abject among us, without reflection. We behold in you no merit above us - nay, we deem you liars.`,"11:28":`He said: O my people! Bethink you, if I rely on a clear proof from my Lord and there hath come unto me a mercy from His presence, and it hath been made obscure to you, can we compel you to accept it when ye are averse thereto?`,"11:29":`And O my people! I ask of you no wealth therefor. My reward is the concern only of Allah, and I am not going to thrust away those who believe - Lo! they have to meet their Lord! - but I see you a folk that are ignorant.`,"11:30":`And, O my people! who would deliver me from Allah if I thrust them away? Will ye not then reflect?`,"11:31":`I say not unto you: "I have the treasures of Allah" nor "I have knowledge of the Unseen," nor say I: "Lo! I am an angel!" Nor say I unto those whom your eyes scorn that Allah will not give them good - Allah knoweth best what is in their hearts - Lo! then indeed I should be of the wrong-doers.`,"11:32":`They said: O Noah! Thou hast disputed with us and multiplied disputation with us; now bring upon us that wherewith thou threatenest us, if thou art of the truthful.`,"11:33":`He said: Only Allah will bring it upon you if He will, and ye can by no means escape.`,"11:34":`My counsel will not profit you if I were minded to advise you, if Allah's will is to keep you astray. He is your Lord and unto Him ye will be brought back.`,"11:35":`Or say they (again): He hath invented it? Say: If I have invented it, upon me be my crimes, but I am innocent of (all) that ye commit.`,"11:36":`And it was inspired in Noah, (saying): No-one of thy folk will believe save him who hath believed already. Be not distressed because of what they do.`,"11:37":`Build the ship under Our eyes and by Our inspiration, and speak not unto Me on behalf of those who do wrong. Lo! they will be drowned.`,"11:38":`And he was building the ship, and every time that chieftains of his people passed him, they made mock of him. He said: Though ye make mock of Us, yet We mock at you even as ye mock;`,"11:39":`And ye shall know to whom a punishment that will confound him cometh, and upon whom a lasting doom will fall.`,"11:40":`(Thus it was) till, when Our commandment came to pass and the oven gushed forth water, We said: Load therein two of every kind, a pair (the male and female), and thy household, save him against whom the word hath gone forth already, and those who believe. And but a few were they who believed with him.`,"11:41":`And he said: Embark therein! In the name of Allah be its course and its mooring. Lo! my Lord is Forgiving, Merciful.`,"11:42":`And it sailed with them amid waves like mountains, and Noah cried unto his son - and he was standing aloof - O my son! Come ride with us, and be not with the disbelievers.`,"11:43":`He said: I shall betake me to some mountain that will save me from the water. (Noah) said: This day there is none that saveth from the commandment of Allah save him on whom He hath had mercy. And the wave came in between them, so he was among the drowned.`,"11:44":`And it was said: O earth! Swallow thy water and, O sky! be cleared of clouds! And the water was made to subside. And the commandment was fulfilled. And it (the ship) came to rest upon (the mount) Al-Judi and it was said: A far removal for wrongdoing folk!`,"11:45":`And Noah cried unto his Lord and said: My Lord! Lo! my son is of my household! Surely Thy promise is the truth and Thou are the Most Just of Judges.`,"11:46":`He said: O Noah! Lo! he is not of thy household; lo! he is of evil conduct, so ask not of Me that whereof thou hast no knowledge. I admonish thee lest thou be among the ignorant.`,"11:47":`He said: My Lord! Lo! in Thee do I seek refuge (from the sin) that I should ask of Thee that whereof I have no knowledge. Unless Thou forgive me and have mercy on me I shall be among the lost.`,"11:48":`It was said (unto him): O Noah! Go thou down (from the mountain) with peace from Us and blessings upon thee and some nations (that will spring) from those with thee. (There will be other) nations unto whom We shall give enjoyment a long while and then a painful doom from Us will overtake them.`,"11:49":`This is of the tidings of the Unseen which We inspire in thee (Muhammad). Thou thyself knewest it not, nor did thy folk (know it) before this. Then have patience. Lo! the sequel is for those who ward off (evil).`,"23:23":`And We verily sent Noah unto his folk, and he said: O my people! Serve Allah. Ye have no other Allah save Him. Will ye not ward off (evil)?`,"23:24":`But the chieftains of his folk, who disbelieved, said: This is only a mortal like you who would make himself superior to you. Had Allah willed, He surely could have sent down angels. We heard not of this in the case of our fathers of old.`,"23:25":`He is only a man in whom is a madness, so watch him for a while.`,"23:26":`He said: My Lord! Help me because they deny me.`,"23:27":`Then We inspired in him, saying: Make the ship under Our eyes and Our inspiration. Then, when Our command cometh and the oven gusheth water, introduce therein of every (kind) two spouses, and thy household save him thereof against whom the Word hath already gone forth. And plead not with Me on behalf of those who have done wrong. Lo! they will be drowned.`,"23:28":`And when thou art on board the ship, thou and whoso is with thee, then say: Praise be to Allah Who hath saved us from the wrongdoing folk!`,"23:29":`And say: My Lord! Cause me to land at a blessed landing-place, for Thou art Best of all who bring to land.`,"23:30":`Lo! herein verily are portents, for lo! We are ever putting (mankind) to the test.`,"29:14":`And verily we sent Noah (as Our messenger) unto his folk, and he continued with them for a thousand years save fifty years; and the flood engulfed them, for they were wrong-doers.`,"29:15":`And We rescued him and those with him in the ship, and made of it a portent for the peoples.`,"54:9":`The folk of Noah denied before them, yea, they denied Our slave and said: A madman; and he was repulsed.`,"54:10":`So he cried unto his Lord, saying: I am vanquished, so give help.`,"54:11":`Then opened We the gates of heaven with pouring water`,"54:12":`And caused the earth to gush forth springs, so that the waters met for a predestined purpose.`,"54:13":`And We carried him upon a thing of planks and nails,`,"54:14":`That ran (upon the waters) in Our sight, as a reward for him who was rejected.`,"54:15":`And verily We left it as a token; but is there any that remembereth?`,"71:1":`Lo! We sent Noah unto his people (saying): Warn thy people ere the painful doom come unto them.`,"71:2":`He said: O my people! Lo! I am a plain warner unto you`,"71:3":`(Bidding you): Serve Allah and keep your duty unto Him and obey me,`,"71:4":`That He may forgive you somewhat of your sins and respite you to an appointed term. Lo! the term of Allah, when it cometh, cannot be delayed, if ye but knew.`,"71:5":`He said: My Lord! Lo! I have called unto my people night and day`,"71:6":`But all my calling doth but add to their repugnance;`,"71:7":`And lo! whenever I call unto them that Thou mayst pardon them they thrust their fingers in their ears and cover themselves with their garments and persist (in their refusal) and magnify themselves in pride.`,"71:8":`And lo! I have called unto them aloud,`,"71:9":`And lo! I have made public proclamation unto them, and I have appealed to them in private.`,"71:10":`And I have said: Seek pardon of your Lord. Lo! He was ever Forgiving.`,"71:11":`He will let loose the sky for you in plenteous rain,`,"71:12":`And will help you with wealth and sons, and will assign unto you Gardens and will assign unto you rivers.`,"71:13":`What aileth you that ye hope not toward Allah for dignity`,"71:14":`When He created you by (divers) stages?`,"71:15":`See ye not how Allah hath created seven heavens in harmony,`,"71:16":`And hath made the moon a light therein, and made the sun a lamp?`,"71:17":`And Allah hath caused you to grow as a growth from the earth,`,"71:18":`And afterward He maketh you return thereto, and He will bring you forth again, a (new) forthbringing.`,"71:19":`And Allah hath made the earth a wide expanse for you`,"71:20":`That ye may thread the valley-ways thereof.`,"71:21":`Noah said: My Lord! Lo! they have disobeyed me and followed one whose wealth and children increase him in naught save ruin;`,"71:22":`And they have plotted a mighty plot,`,"71:23":`And they have said: Forsake not your gods. Forsake not Wadd, nor Suwa', nor Yaghuth and Ya'uq and Nasr.`,"71:24":`And they have led many astray, and Thou increasest the wrong-doers in naught save error.`,"71:25":`Because of their sins they were drowned, then made to enter a Fire. And they found they had no helpers in place of Allah.`,"71:26":`And Noah said: My Lord! Leave not one of the disbelievers in the land.`,"71:27":`If Thou shouldst leave them, they will mislead Thy slaves and will beget none save lewd ingrates.`,"71:28":`My Lord! Forgive me and my parents and him who entereth my house believing, and believing men and believing women, and increase not the wrong-doers in aught save ruin.`}},nm={meta:{id:`ckb.hevi`,language:`ckb`,kind:`translation`,title:`وەرگێڕانی هێڤی`,translator:`ئەلەند کاوە عەلی ئەحمەد`,translatorLatin:`Aland Kawa Ali Ahmad`,firstPublished:2024,source:`Hevi database (E_Hevi.db), table Ayats, column hevi`,sourceUrl:``,license:`© Aland Kawa Ali Ahmad. All rights reserved; used in this experience with the translator’s permission.`,retrieved:`2026-10-09`,notice:`Hevi translation of the meanings of the Quran into Central Kurdish (Sorani). Do not copy without the translator’s permission.`},verses:JSON.parse(`{"11:25":"بەڕاستی نوحمان بەرەو قەومەکەی خۆی نارد: «بەڕاستی من بۆ ئێوە وریاکەرەوەیەکی ئاشکرام،","11:26":"بەندایەتی تەنیا بۆ خودا بکەن. بەڕاستی دەترسم ئەشکەنجەی ڕۆژێکی پڕژان بۆ سەرتان دابێت.»","11:27":"جا ئەو چاوپڕکەرانەی کە لە قەومەکەی ڕاستییان پۆشی، گوتیان: «ئێمە دەبینین تۆ تەنیا بەشەرێکی وەک خۆمانیت و نابینین کە کەس تا سەر شوێنت کەوتبێت، ئەوانە نەبن کە ڕەشوڕووتترینی ئێمەن — کەمئەقڵن —. نایشبینین ئێوە هیچتان لە ئێمە زیاتر بێت! بەڵکو بۆچوونمان وەهایە کە ئێوە درۆزنن.»","11:28":"گوتی: «ئەی قەومەکەم! ئایا ڕوانیوتانە کە ئەگەر من لەسەر بەڵگەیەکی ئاشکرای پەروەردگارم بم و میهرێکی تایبەتی پێم دابێت لەلایەن خۆیەوە لە کاتێکدا ئێوە لێتان کوێر کراوە؟ ئایا بەزۆر پێیەوە پابەندتان بکەین لە کاتێکدا ئێوە پێتان ناخۆشە؟»","11:29":"«ئەی قەومەکەم! داوای هیچ پارەیەکیشتان لەسەر ئەوە لێ ناکەم. ڕێزانەم تەنیا لەسەر خودایە. دەرکەری ئەوانەیش نیم کە ئیمانیان هێناوە، ئەوانە بەڕاستی ڕووبەڕووی پەروەردگاریان دەبنەوە، بەڵام دەبینم ئێوە قەومێکن کە بەبەردەوامی نەزانی دەنوێنن!»","11:30":"«ئەی قەومەکەم! کێ لەبەرانبەر خودا سەرکەوتووم دەکات ئەگەر ئەوانم دەرکرد؟ دەی بۆچی بەبیرتاندا نایەتەوە؟","11:31":"پێتان ناڵێم کە گەنجینەکانی خودا لەلای منە، پەنهانیش نازانم، ناڵێم فریشتەیەکیشم، بەوانەیش ناڵێم — کە لەبەرچاوتان سووکن — کە خودا هیچ چاکەیەکیان ناداتێ. خودا خۆی بەوە زاناترە کە لە ناخیانە، ئەگینا بەدڵنیاییەوە لە زاڵمان دەبم.»","11:32":"گوتیان: «ئەی نوح! بەڕاستی دەمەقاڵێت لەگەڵمان کرد، زۆریش دەمەقاڵێت لەگەڵمان کرد! فەرموو ئەوەمان بۆ بهێنە کە بەڵێنمان دەدەیتێ ئەگەر بەڕاستی لە ڕاستگۆیانیت.»","11:33":"گوتی: «بێگومان هەر خودا بۆتان دەهێنێت ئەگەر ویستبێتی و ئێوە دەستەوسانکەر نابن.","11:34":"دڵسۆزییم سوودتان پێ ناگەیەنێت ئەگەر گەرەکم بووبێت دڵسۆزیی بەرانبەرتان بنوێنم ئەگەر خودا ویستبێتی کە ئێوە تووشی جیاڕێی بکات. ئەو پەروەردگارتانە و هەر بەرەو خۆی دەگێڕدرێنەوە.»","11:35":"یان دەڵێن: «خۆی هەڵیبەستووە!» بڵێ: «ئەگەر هەڵمبەستبێت، ئەوا چاکەبڕیی خۆم لەسەر خۆمە، لە هەر چاکەبڕییەکیش بێتاوانم کە ئێوە دەیکەن.»","11:36":"سرووش بۆ نوح نێردرا: «هەرگیز کەس لە قەومەکەت ئیمان ناهێنێت، ئەوانە نەبن کە ئیمانیان هێناوە، بۆیە بەهۆی ئەوەوە تەمابڕاو مەبە کە ئەنجامیان دەدا.","11:37":"پاپۆڕەکە بەچاودێری ئێمە و سرووشی ئێمەوە چێ بکە و لەبارەی ئەوانەوە مەمدوێنە کە زوڵمیان کردووە؛ بەدڵنیاییەوە ئەوانە نوقمکراو دەبن.»","11:38":"خەریکی چێکردنی پاپۆڕەکە بوو، هەر کاتێک کۆمەڵێک چاوپڕکەر لە قەومەکەی بەلایدا تێبپەڕینایە، سووکایەتییان پێی دەکرد. گوتی: «ئەگەر سووکایەتیمان پێ‌ بکەن، ئەوا بەدڵنیاییەوە ئێمە سووکایەتیتان پێ دەکەین وەک سووکایەتی دەکەن.","11:39":"جا لە داهاتوودا دەزانن کە کێ ئەشکەنجەیەکی  وەهای بۆ دێت کە سەرشۆڕی دەکات و ئەشکەنجەیەکی نەبڕاوەی بەسەریدا دادێت.»","11:40":"تا کاتێک فەرمانمان هات و تەنوور هەڵکوڵا، گوتمان: «هەموو دوو جووتێکی تێدا هەڵگرە، کەسوکاریشت — ئەو کەسە نەبێت کە پێشتر گوتەکە بەسەریدا چەسپاوە —، هەر کەسێکیش کە ئیمانی هێنابێت.» هەرچەندە لەگەڵیدا ئیمانیان نەهێنا، تۆزێک نەبێت.","11:41":"گوتی: «سواری بن، بەناوی خوداوە، لە کات و شوێنی ڕۆیشتنی، لە کات و شوێنی لەنگەرگرتنیشی. بەڕاستی پەروەردگارم زاتێکی زۆر گوناهپۆش و زۆر میهربەخشە.»","11:42":"هەروەها بەنێو شەپۆلێکی وەهادا دەیبردن کە وەک شاخەکان بوو. نوح هاواری بۆ کوڕەکەی کرد — لە کاتێکدا کە لە کەنارێکدا بوو —: «ئەی کوڕی خۆشەویستم! لەگەڵمان سوار بە و لەگەڵ ڕاستیپۆشان مەبە.»","11:43":"گوتی: «لای شاخێک پەنا دەگرم کە لەدەست ئاوەکە دەمپارێزێت!» گوتی: «ئەمڕۆ هیچ ڕێبەندێک لەبەردەم فەرمانی خودادا نییە، مەگەر کەسێک کە بەر میهری خۆی خستبێت.» شەپۆل بە نێوانیاندا دای، ئیدی لە نوقمکراوان بوو.","11:44":"گوترا: «ئەی زەوی! ئاوەکەت قووت بدە و ئەی ئاسمان بەسی بکە.» ئاو ڕۆنیشت و کارەکە کۆتایی هات و بەسەر جودییەوە لەنگەری گرت و گوترا: «دووریی بۆ قەومی زاڵمان.»","11:45":"نوح هاواری بۆ پەروەردگاری کرد و گوتی: «پەروەردگارم! بەڕاستی کوڕەکەم لە کەسوکارمە و بەڕاستی بەڵێنت ڕاستە؛ تۆ دادوەرترینی دادوەرانیت.»","11:46":"فەرمووی: «ئەی نوح! بەڕاستی ئەو لە کەسوکارت نییە. بەڕاستی ئەو کارێکی ناچاک بوو. کەوایە داوای ئەوەم لێ مەکە کە هیچی لێ نازانیت، ئامۆژگاریت دەکەم کە لە نەزانەکان نەبیت.»","11:47":"گوتی: «پەروەردگارم! بەڕاستی پەنات پێ دەگرم کە داوای ئەوە بکەم کە هیچی لێ نازانم. ئەگەریش چاوپۆشیم لێ نەکەیت و بەر میهری خۆتم نەخەیت، لە دۆڕاوان دەبم.»","11:48":"گوترا: «ئەی نوح! بەسەلامێکی تایبەت و بەرەکەتگەلێکی تایبەت بەسەر خۆت و بەسەر ئەو ئوممەتانەی کە لەگەڵتن لێی بەر بەوە؛ ئوممەتانێکیش بەم زووانە خۆشییان دەدەینێ، دواتر لە ئێمەوە ئەشکەنجەیەکی پڕژانیان توخن دەکەوێت.»","11:49":"ئەوانە لە گەرمەهەواڵەکانی پەنهانن کە بەرەو تۆی سرووش دەکەین. نە خۆت دەتزانی و نە قەومەکەت لەپێش ئەمە، کەوایە خۆت ڕابگرە؛ بەدڵنیاییەوە لوتکەی سەرکەوتن بۆ خۆپارێزانە.","23:23":"بەڕاستی نوحمان بەرەو قەومەکەی نارد و گوتی: «ئەی قەومەکەم! بەندایەتی بۆ خودا بکەن، هیچ پەرستراوێکتان نییە بەدەر لەو؛ کەوایە بۆچی خۆتان ناپارێزن؟»","23:24":"ئەو چاوپڕکەرانەی کە ڕاستییان پۆشی لە قەومەکەی دەستبەجێ گوتیان: «ئەمە هیچ نییە، هەر بەشەرێکی وەک خۆتانە؛ گەرەکیەتی فەزڵی خۆی بەسەرتانەوە بدات؛ ئەگەر خودا بیویستایە فریشتەکانی دادەبەزاند. ئێمە ئەمەمان لە باوانی پێشینمانەوە نەبیستووە!","23:25":"بەڕاستی ئەو هیچ نییە، هەر پیاوێکە کە شێتییەکی پێوەیە‬، دەی تا ماوەیەک چاوەڕێی بکەن.»","23:26":"گوتی: «پەروەردگارم! بەهۆی ئەوەوە سەرمبخە کە منیان بەدرۆزن زانیوە.»","23:27":"دەستبەجێ سرووشمان بەرەو خۆی نارد: «پاپۆڕەکە بەچاودێری و سرووشی خۆمانەوە چێ بکە؛ جا کاتێک فەرمانمان هات و تەنوور هەڵکوڵا، دەستبەجێ لە هەموو جووتێکی وەنێو بخە، کەسوکاریشت، بەدەر لە هەر کەسێکیان کە گوتەکە پێشتر بەسەریاندا دەرچووە؛ لەبارەی ئەوانەیشەوە کە زوڵمیان کردووە مەمدوێنە، بەدڵنیاییەوە ئەوانە نوقمکراو دەبن.","23:28":"ئینجا کاتێک خۆت و هەرکێ لەگەڵتدایە لەسەر پاپۆڕەکە هاوسەنگ بوویت، ئەوا بڵێ: ”ستایش بۆ خودا، ئەو زاتەی کە ئێمەی لەدەست قەومی زاڵمان ڕزگار کردووە.“","23:29":"هەروەها بڵێ: ”پەروەردگارم! لە دابەزگەیەکی بەرەکەتبەخش دامبەزێنە و تۆ باشترینی دابەزێنەرانیت.“»","23:30":"بەڕاستی لەوەدا نیشانەگەلێکی تایبەت هەیە؛ بەدڵنیاییەوە هەردەم هەڵسەنگێنەر بووین.","29:14":"بەڕاستی نوحمان بەرەو قەومەکەی نارد و هەزار ساڵ لەنێویاندا مایەوە — بەدەر لە پەنجا ساڵ —؛ سەرئەنجام تۆفانەکە گرتنی لە کاتێکدا کە زاڵم بوون.","29:15":"سەرئەنجام خۆی و هاودەمانی کەشتییەکەمان ڕزگار کرد و بە نیشانەیەکی تایبەتمان بۆ جیهانیان گێڕا.","54:9":"پێش خۆیان قەومەکەی نوح ڕاستییان بەدرۆ زانی بۆیە بەندەی ئێمەیان بەدرۆزن زانی و گوتیان: «شێتە!» هەروەها تێیانخوڕی!","54:10":"دەستبەجێ بانگی پەروەردگاری کرد: «من شکستم خواردووە، دەسا سەربخە.»","54:11":"سەرئەنجام دەرکەکانی ئاسمانمان بەئاوێکی لێزمەوە کردەوە.","54:12":"چەندان کانیاومان لە زەویدا هەڵقوڵاند؛ ئیدی ئاو(ـەکان) بەپێی فەرمانێک بە یەکتر گەیشتن کە ئەندازەی بۆ کرابوو.","54:13":"ئەویشمان بەسەر خاوەن چەندان تەختە و بزمارەوە هەڵگرت","54:14":"کە بەچاودێریی ئێمەوە دەڕۆیشت؛ پاداشتێکی تایبەت بوو بۆ ئەو کەسەی کە ژێرەو کرا.","54:15":"وەک نیشانەیەکی تایبەت هێشتمانەوە؛ جا ئایا هیچ پەندوەرگرێک هەیە؟","71:1":"بەڕاستی نوحمان بەرەو قەومەکەی نارد: «قەومەکەت وریا بکەرەوە پێش ئەوەی ئەشکەنجەیەکی پڕژانیان بۆ بێت.»","71:2":"گوتی: «ئەی قەومەکەم! بەڕاستی من بۆ ئێوە وریاکەرەوەیەکی ئاشکرام؛","71:3":"(ڕایدەگەیەنم) کە بەندایەتی بۆ خودا بکەن و تەقوای بکەن و خۆویستانە بەگوێم بکەن.","71:4":"چاوپۆشی لە کلکەتاوانتان دەکات و بەرەو ئاکامێکی ناوبراو دواتاندەخات. بەدڵنیایییەوە ئاکامی خودا دەمێک هاتبێت، دواناخرێت، ئەگەر زانیبێتتان.»","71:5":"گوتی: «پەروەردگارم! بەڕاستی شەو و ڕۆژ بانگی قەومەکەمم کرد،","71:6":"بەڵام بانگکردنەکەم هەر هەڵهاتنێکی بۆیان زیاد کرد.","71:7":"هەر کاتێکیش کە بانگیانم کردبێت تاکو چاوپۆشییان لێ بکەیت، پەنجەکانیان دەخستە گوێیانەوە و پۆشاکەکانیان بەسەر خۆیاندا دەدا و سوور بوون و بەخۆبەگەورەزانینێکی زۆر خۆیان زۆر بەگەورە زانی.","71:8":"دواتر بەئاشکرا بانگیانم کرد،","71:9":"دواتر بۆیانم دەرخست و بەنهێنکردنێکی تەواوەتی بۆیانم نهێن کرد،","71:10":"ئیدی گوتم: ”داوای چاوپۆشی لە پەروەردگارتان بکەن؛ بەدڵنیاییەوە ئەو زاتە هەردەم زاتێکی زۆر گوناهپۆش بووە،","71:11":"ئاسمان بەلێزمەوە بۆ سەرتان دەنێرێت،","71:12":"بە پارەگەلێک و کوڕگەلێک بەفراوانی کۆمەکیتان دەکات، باخانێکی چڕوپڕیشتان بۆ دەسازێنێت، ڕووبارگەلی هەمەجۆریشتان بۆ دەسازێنێت.","71:13":"چیتانە؟ بۆچی ویقاڕی خودا لەبەرچاو ناگرن؟","71:14":"لە کاتێکدا ئێوەی لە چەند قۆناغێکدا دروست کردووە.","71:15":"ئایا ناڕوانن کە چۆن خودا حەوت چین ئاسمانی دروست کردووە؟","71:16":"ئاسمانگیشی تێیاندا بە ڕووناکییەکی تایبەت گێڕاوە، خۆریشی بە چرایەکی تایبەت گێڕاوە.","71:17":"خودا ئێوەی لە زەوییەوە بە ڕوواندنێکی تایبەت ڕوواندووە،","71:18":"دواتر تێیدا دەتانگێڕێتەوە و بەدەرکردنێکی تەواوەتی دەرتاندەهێنێتەوە.","71:19":"خودا زەوی بۆ ئێوە بە ڕایەخێکی تایبەت گێڕاوە،","71:20":"تاکو ئێوە بە چەندان پانەڕێیدا ڕێ دەر بکەن.“»","71:21":"نوح گوتی: «پەروەردگارم! بەڕاستی ئەوانە سەرپێچییان کردم و تا سەر شوێن کەسێک کەوتن کە پارەی و ڕۆڵەی هیچیان بۆی زیاد نەکردن بەدەر لە دۆڕانێکی تەواوەتی!","71:22":"نەخشەیەکی گەورەیشیان نەخشاند،","71:23":"گوتیشیان: ”واز لە پەرستراوەکانتان مەهێنن! واز لە وەد و سواع و یەغوس و یەعوق و نەسر مەهێنن!“","71:24":"بەڕاستی زۆرێکیان گومڕا کرد؛ هیچ بۆ زاڵمان زیاد مەکە بەدەر لە گومڕایییەکی تەواوەتی.»","71:25":"بەهۆی خەتاکانیانەوە نوقم کران و وەژوو ئاگرێک خران؛ ئیدی هیچ سەرخەرانێکی خوارووی خودایان بۆ خۆیان لێ هەڵنەکەوت.","71:26":"نوح گوتی: «پەروەردگارم! هیچ خانوویەکی ڕاستیپۆشان لە زەویدا مەهێڵەوە.","71:27":"بەڕاستی ئەگەر بیانهێڵیتەوە، بەندەکانت گومڕا دەکەن؛ هیچیش ناخەنەوە بەدەر لە خراپەخوازێک و ڕاستیپۆشێک.","71:28":"پەروەردگارم! چاوپۆشی لە خۆم و دووەلێبووم و هەرکێ بکە کە ئاساییشبەخشانە بۆ شەوگەکەم هاتبێت؛ لە ئاساییشبەخشانی نێر و مێیش؛ هیچیش بۆ زاڵمان زیاد مەکە، بەدەر لە پارچەپارچەبوونێکێکی تەواوەتی.»"}`)},rm={meta:{id:`ar.muyassar`,language:`ar`,kind:`tafsir`,title:`التفسير الميسر`,translator:`مجمع الملك فهد لطباعة المصحف الشريف`,translatorLatin:`King Fahd Glorious Quran Printing Complex`,firstPublished:2009,source:`Tanzil Project translation file ar.muyassar`,sourceUrl:`https://tanzil.net/trans/`,license:`Published by the King Fahd Glorious Quran Printing Complex; distributed by the Tanzil Project for non-commercial use with attribution.`,retrieved:`2026-10-09`,notice:`# --------------------------------------------------------------------
#
#  Quran Translation
#  Name: تفسير المیسر
#  Translator: King Fahad Quran Complex
#  Language: Arabic
#  ID: ar.muyassar
#  Last Update: January 7, 2011
#  Source: Tanzil.net
#
# --------------------------------------------------------------------`},verses:JSON.parse(`{"11:25":"ولقد أرسلنا نوحًا إلى قومه فقال لهم: إني نذير لكم من عذاب الله، مبيِّن لكم ما أُرسلت به إليكم من أمر الله ونهيه.","11:26":"آمركم ألا تعبدوا إلا الله، إني أخاف عليكم -إن لم تفردوا الله وحده بالعبادة- عذاب يوم موجع.","11:27":"فقال رؤساء الكفر من قومه: إنك لست بمَلَك ولكنك بشر، فكيف أُوحي إليك مِن دوننا؟ وما نراك اتبعك إلا الذين هم أسافلنا وإنما اتبعوك من غير تفكر ولا رويَّة، وما نرى لكم علينا من فضل في رزق ولا مال لـمَّا دخلتم في دينكم هذا، بل نعتقد أنكم كاذبون فيما تدَّعون.","11:28":"قال نوح: يا قومي أرأيتم إن كنتُ على حجة ظاهرة من ربي فيما جئتكم به تبيِّن لكم أنني على الحق من عنده، وآتاني رحمة من عنده، وهي النبوة والرسالة فأخفاها عليكم بسبب جهلكم وغروركم، فهل يصح أن نُلْزمكم إياها بالإكراه وأنتم جاحدون بها؟ لا نفعل ذلك، ولكن نَكِل أمركم إلى الله حتى يقضي في أمركم ما يشاء.","11:29":"قال نوح عليه السلام لقومه: يا قوم لا أسألكم على دعوتكم لتوحيد الله وإخلاص العبادة له مالاً تؤدونه إليَّ بعد إيمانكم، ولكن ثواب نصحي لكم على الله وحده، وليس من شأني أن أطرد المؤمنين، فإنهم ملاقو ربهم يوم القيامة، ولكني أراكم قومًا تجهلون؛ إذ تأمرونني بطرد أولياء الله وإبعادهم عني.","11:30":"ويا قوم مَن يمنعني من الله إن عاقبني على طردي المؤمنين؟ أفلا تتدبرون الأمور فتعلموا ما هو الأنفع لكم والأصلح؟","11:31":"ولا أقول لكم: إني أملك التصرف في خزائن الله، ولا أعلم الغيب، ولست بمَلَك من الملائكة، ولا أقول لهؤلاء الذين تحتقرون من ضعفاء المؤمنين: لن يؤتيكم الله ثوابًا على أعمالكم، فالله وحده أعلم بما في صدورهم وقلوبهم، ولئن فعلتُ ذلك إني إذًا لمن الظالمين لأنفسهم ولغيرهم.","11:32":"قالوا: يا نوح قد حاججتنا فأكثرت جدالنا، فأتنا بما تعدنا من العذاب إن كنت من الصادقين في دعواك.","11:33":"قال نوح لقومه: إن الله وحده هو الذي يأتيكم بالعذاب إذا شاء، ولستم بفائتيه إذا أراد أن يعذبكم؛ لأنه سبحانه لا يعجزه شيء في الأرض ولا في السماء.","11:34":"ولا ينفعكم نصحي واجتهادي في دعوتكم للإيمان، إن كان الله يريد أن يضلَّكم ويهلككم، هو سبحانه مالككم، وإليه تُرجَعون في الآخرة للحساب والجزاء.","11:35":"بل أيقول هؤلاء المشركون من قوم نوح: افترى نوح هذا القول؟ قل لهم: إن كنتُ قد افتريتُ ذلك على الله فعليَّ وحدي إثم ذلك، وإذا كنتُ صادقًا فأنتم المجرمون الآثمون، وأنا بريء مِن كفركم وتكذيبكم وإجرامكم.","11:36":"وأوحى الله سبحانه وتعالى إلى نوح -عليه السلام- لـمَّا حق على قومه العذاب، أنه لن يؤمن بالله إلا مَن قد آمن مِن قبل، فلا تحزن يا نوح على ما كانوا يفعلون.","11:37":"واصنع السفينة بمرأى منَّا وبأمرنا لك ومعونتنا، وأنت في حفظنا وكلاءتنا، ولا تطلب مني إمهال هؤلاء الذين ظلموا أنفسهم من قومك بكفرهم، فإنهم مغرقون بالطوفان. وفي الآية إثبات صفة العين لله تعالى على ما يليق به سبحانه.","11:38":"ويصنع نوح السفينة، وكلَّما مر عليه جماعة من كبراء قومه سخروا منه، قال لهم نوح: إن تسخروا منا اليوم لجهلكم بصدق وعد الله، فإنا نسخر منكم غدًا عند الغرق كما تسخرون منا.","11:39":"فسوف تعلمون إذا جاء أمر الله بذلك: من الذي يأتيه في الدنيا عذاب الله الذي يُهينه، وينزل به في الآخرة عذاب دائم لا انقطاع له؟","11:40":"حتى إذا جاء أمرنا بإهلاكهم كما وَعدْنا نوحًا بذلك، ونبع الماء بقوة من التنور -وهو المكان الذي يخبز فيه- علامة على مجيء العذاب، قلنا لنوح: احمل في السفينة من كل نوع من أنواع الحيوانات ذكرًا وأنثى، واحمل فيها أهل بيتك، إلا مَن سبق عليهم القول ممن لم يؤمن بالله كابنه وامرأته، واحمل فيها من آمن معك من قومك، وما آمن معه إلا قليل مع طول المدة والمقام فيهم.","11:41":"وقال نوح لمن آمن معه: اركبوا في السفينة، باسم الله يكون جريها على وجه الماء، وباسم الله يكون منتهى سيرها ورُسوُّها. إن ربي لَغفور ذنوب من تاب وأناب إليه من عباده، رحيم بهم أن يعذبهم بعد التوبة.","11:42":"وهي تجري بهم في موج يعلو ويرتفع حتى يصير كالجبال في علوها، ونادى نوح ابنه -وكان في مكانٍ عَزَل فيه نفسه عن المؤمنين- فقال له: يا بني اركب معنا في السفينة، ولا تكن مع الكافرين بالله فتغرق.","11:43":"قال ابن نوح: سألجأ إلى جبل أتحصَّن به من الماء، فيمنعني من الغرق، فأجابه نوح: لا مانع اليوم من أمر الله وقضائه الذي قد نزل بالخلق من الغرق والهلاك إلا مَن رحمه الله تعالى، فآمِنْ واركب في السفينة معنا، وحال الموج المرتفع بين نوح وابنه، فكان من المغرقين الهالكين.","11:44":"وقال الله للأرض -بعد هلاك قوم نوح -: يا أرض اشربي ماءك، ويا سماء أمسكي عن المطر، ونقص الماء ونضب، وقُضي أمر الله بهلاك قوم نوح، ورست السفينة على جبل الجوديِّ، وقيل: هلاكًا وبعدًا للقوم الظالمين الذين تجاوزوا حدود الله، ولم يؤمنوا به.","11:45":"ونادى نوح ربه فقال: رب إنك وعَدْتني أن تنجيني وأهلي من الغرق والهلاك، وإن ابني هذا من أهلي، وإن وعدك الحق الذي لا خُلْف فيه، وأنت أحكم الحاكمين وأعدلهم.","11:46":"قال الله: يا نوح إن ابنك الذي هلك ليس من أهلك الذين وعدتك أن أنجيهم؛ وذلك بسبب كفره، وعمله عملا غير صالح، وإني أنهاك أن تسألني أمرًا لا علم لك به، إني أعظك لئلا تكون من الجاهلين في مسألتك إياي عن ذلك.","11:47":"قال نوح: يا رب إني أعتصم وأستجير بك أن أسألك ما ليس لي به علم، وإن لم تغفر لي ذنبي، وترحمني برحمتك، أكن من الذين غَبَنوا أنفسهم حظوظها وهلكوا.","11:48":"قال الله: يا نوح اهبط من السفينة إلى الأرض بأمن وسلامة منَّا وبركات عليك وعلى أمم ممن معك. وهناك أمم وجماعات من أهل الشقاء سنمتعهم في الحياة الدنيا، إلى أن يبلغوا آجالهم، ثم ينالهم منا العذاب الموجع يوم القيامة.","11:49":"تلك القصة التي قصصناها عليك -أيها الرسول- عن نوح وقومه هي من أخبار الغيب السالفة، نوحيها إليك، ما كنت تعلمها أنت ولا قومك مِن قبل هذا البيان، فاصبر على تكذيب قومك وإيذائهم لك، كما صبر الأنبياء من قبل، إن العاقبة الطيبة في الدنيا والآخرة للمتقين الذين يخشون الله.","23:23":"ولقد أرسلنا نوحًا إلى قومه، بدعوة التوحيد فقال لهم: اعبدوا الله وحده، ليس لكم من إله يستحق العبادة غيره جل وعلا، فأخلصوا له العبادة، أفلا تخشون عذابه؟","23:24":"فكذَّبه أشراف قومه، وقالوا لعامتهم: إنه إنسان مثلكم لا يتميَّز عنكم بشيء، ولا يريد بقوله إلا رئاسة وفضلا عليكم، ولو شاء الله أن يرسل إلينا رسولا لأرسله من الملائكة، ما سمعنا بمثل هذا فيمَن سبقنا من آباء وأجداد. وما نوح إلا رجل به مَسٌّ من الجنون، فانتظروا حتى يُفيق، فيترك دعوته، أو يموت، فتستريحوا منه.","23:25":"فكذَّبه أشراف قومه، وقالوا لعامتهم: إنه إنسان مثلكم لا يتميَّز عنكم بشيء، ولا يريد بقوله إلا رئاسة وفضلا عليكم، ولو شاء الله أن يرسل إلينا رسولا لأرسله من الملائكة، ما سمعنا بمثل هذا فيمَن سبقنا من آباء وأجداد. وما نوح إلا رجل به مَسٌّ من الجنون، فانتظروا حتى يُفيق، فيترك دعوته، أو يموت، فتستريحوا منه.","23:26":"قال نوح: رب انصرني على قومي؛ بسبب تكذيبهم إياي فيما بلَّغتهم من رسالتك.","23:27":"فأوحينا إليه أن اصنع السفينة بمرأى منا وبأمرنا لك ومعونتنا، وأنت في حفظنا وكلاءتنا، فإذا جاء أمرنا بعذاب قومك بالغرق، وبدأ الطوفان، فنبع الماء بقوة من التنور -وهو المكان الذي يخبز فيه- علامة على مجيء العذاب، فأدخِلْ في السفينة من كل الأحياء ذكرًا وأنثى؛ ليبقى النسل، وأدخل أهلك إلا مَنِ استحق العذاب لكفره كزوجتك وابنك، ولا تسألني نجاة قومك الظالمين، فإنهم مغرقون لا محالة. وفي هذه الآية إثبات صفة العين لله سبحانه بما يليق به تعالى دون تشبيه ولا تكييف.","23:28":"فإذا علوت السفينة مستقرًا عليها أنت ومن معك آمنين من الغرق، فقل: الحمد لله الذي نجَّانا من القوم الكافرين.","23:29":"وقل: رب يسِّر لي النزول المبارك الآمن، وأنت خير المنزلين. وفي هذا تعليم من الله عز وجل لعباده إذا نزلوا أن يقولوا هذا.","23:30":"إن في إنجاء المؤمنين وإهلاك الكافرين لَدلالات واضحات على صدق رسل الله فيما جاؤوا به من الله، وإن كنا لمختبرين الأمم بإرسال الرسل إليهم قبل وقوع العقوبة بهم.","29:14":"ولقد أرسلنا نوحًا إلى قومه فمكث فيهم ألف سنة إلا خمسين عامًا، يدعوهم إلى التوحيد وينهاهم عن الشرك، فلم يستجيبوا له، فأهلكهم الله بالطوفان، وهم ظالمون لأنفسهم بكفرهم وطغيانهم.","29:15":"فأنجينا نوحًا ومَن تبعه ممن كان معه في السفينة، وجعلنا ذلك عبرة وعظة للعالمين.","54:9":"كذَّبت قبل قومك -أيها الرسول- قوم نوح فكذَّبوا عبدنا نوحًا، وقالوا: هو مجنون، وانتهروه متوعدين إياه بأنواع الأذى، إن لم ينته عن دعوته.","54:10":"فدعا نوح ربه أنِّي ضعيف عن مقاومة هؤلاء، فانتصر لي بعقاب من عندك على كفرهم بك.","54:11":"فأجبنا دعاءه، ففتحنا أبواب السماء بماء كثير متدفق، وشققنا الأرض عيونًا متفجرة بالماء، فالتقى ماء السماء وماء الأرض على إهلاكهم الذي قدَّره الله لهم؛ جزاء شركهم.","54:12":"فأجبنا دعاءه، ففتحنا أبواب السماء بماء كثير متدفق، وشققنا الأرض عيونًا متفجرة بالماء، فالتقى ماء السماء وماء الأرض على إهلاكهم الذي قدَّره الله لهم؛ جزاء شركهم.","54:13":"وحملنا نوحًا ومَن معه على سفينة ذات ألواح ومسامير شُدَّت بها، تجري بمرأى منا وحفظ، وأغرقنا المكذبين؛ جزاء لهم على كفرهم وانتصارًا لنوح عليه السلام. وفي هذا دليل على إثبات صفة العينين لله سبحانه وتعالى، كما يليق به.","54:14":"وحملنا نوحًا ومَن معه على سفينة ذات ألواح ومسامير شُدَّت بها، تجري بمرأى منا وحفظ، وأغرقنا المكذبين؛ جزاء لهم على كفرهم وانتصارًا لنوح عليه السلام. وفي هذا دليل على إثبات صفة العينين لله سبحانه وتعالى، كما يليق به.","54:15":"ولقد أبقينا قصة نوح مع قومه عبرة ودليلا على قدرتنا لمن بعد نوح؛ ليعتبروا ويتعظوا بما حلَّ بهذه الأمة التي كفرت بربها، فهل من متعظ يتعظ؟ فكيف كان عذابي ونذري لمن كفر بي وكذب رسلي، ولم يتعظ بما جاءت به؟ إنه كان عظيمًا مؤلمًا.","71:1":"إنا بعثنا نوحا إلى قومه، وقلنا له: حذِّر قومك من قبل أن يأتيهم عذاب موجع. قال نوح: يا قومي إني نذير لكم بيِّن الإنذار من عذاب الله إن عصيتموه، وإني رسول الله إليكم فاعبدوه وحده، وخافوا عقابه، وأطيعوني فيما آمركم به، وأنهاكم عنه، فإن أطعتموني واستجبتم لي يصفح الله عن ذنوبكم ويغفر لكم، ويُمدد في أعماركم إلى وقت مقدر في علم الله تعالى، إن الموت إذا جاء لا يؤخر أبدًا، لو كنتم تعلمون ذلك لسارعتم إلى الإيمان والطاعة.","71:2":"إنا بعثنا نوحا إلى قومه، وقلنا له: حذِّر قومك من قبل أن يأتيهم عذاب موجع. قال نوح: يا قومي إني نذير لكم بيِّن الإنذار من عذاب الله إن عصيتموه، وإني رسول الله إليكم فاعبدوه وحده، وخافوا عقابه، وأطيعوني فيما آمركم به، وأنهاكم عنه، فإن أطعتموني واستجبتم لي يصفح الله عن ذنوبكم ويغفر لكم، ويُمدد في أعماركم إلى وقت مقدر في علم الله تعالى، إن الموت إذا جاء لا يؤخر أبدًا، لو كنتم تعلمون ذلك لسارعتم إلى الإيمان والطاعة.","71:3":"إنا بعثنا نوحا إلى قومه، وقلنا له: حذِّر قومك من قبل أن يأتيهم عذاب موجع. قال نوح: يا قومي إني نذير لكم بيِّن الإنذار من عذاب الله إن عصيتموه، وإني رسول الله إليكم فاعبدوه وحده، وخافوا عقابه، وأطيعوني فيما آمركم به، وأنهاكم عنه، فإن أطعتموني واستجبتم لي يصفح الله عن ذنوبكم ويغفر لكم، ويُمدد في أعماركم إلى وقت مقدر في علم الله تعالى، إن الموت إذا جاء لا يؤخر أبدًا، لو كنتم تعلمون ذلك لسارعتم إلى الإيمان والطاعة.","71:4":"إنا بعثنا نوحا إلى قومه، وقلنا له: حذِّر قومك من قبل أن يأتيهم عذاب موجع. قال نوح: يا قومي إني نذير لكم بيِّن الإنذار من عذاب الله إن عصيتموه، وإني رسول الله إليكم فاعبدوه وحده، وخافوا عقابه، وأطيعوني فيما آمركم به، وأنهاكم عنه، فإن أطعتموني واستجبتم لي يصفح الله عن ذنوبكم ويغفر لكم، ويُمدد في أعماركم إلى وقت مقدر في علم الله تعالى، إن الموت إذا جاء لا يؤخر أبدًا، لو كنتم تعلمون ذلك لسارعتم إلى الإيمان والطاعة.","71:5":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:6":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:7":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:8":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:9":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:10":"قال نوح: رب إني دعوت قومي إلى الإيمان بك وطاعتك في الليل والنهار، فلم يزدهم دعائي لهم إلى الإيمان إلا هربًا وإعراضًا عنه، وإني كلما دعوتهم إلى الإيمان بك؛ ليكون سببًا في غفرانك ذنوبهم، وضعوا أصابعهم في آذانهم؛ كي لا يسمعوا دعوة الحق، وتغطَّوا بثيابهم؛ كي لا يروني، وأقاموا على كفرهم، واستكبروا عن قَبول الإيمان استكبارًا شديدًا، ثم إني دعوتهم إلى الإيمان ظاهرًا علنًا في غير خفاء، ثم إني أعلنت لهم الدعوة بصوت مرتفع في حال، وأسررت بها بصوت خفيٍّ في حال أخرى، فقلت لقومي: سلوا ربكم غفران ذنوبكم، وتوبوا إليه من كفركم، إنه تعالى كان غفارًا لمن تاب من عباده ورجع إليه.","71:11":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:12":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:13":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:14":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:15":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:16":"إن تتوبوا وتستغفروا يُنْزِلِ الله عليكم المطر غزيرًا متتابعًا، ويكثرْ أموالكم وأولادكم، ويجعلْ لكم حدائق تَنْعَمون بثمارها وجمالها، ويجعل لكم الأنهار التي تسقون منها زرعكم ومواشيكم. مالكم -أيها القوم- لا تخافون عظمة الله وسلطانه، وقد خلقكم في أطوار متدرجة: نطفة ثم علقة ثم مضغة ثم عظامًا ولحمًا؟ ألم تنظروا كيف خلق الله سبع سموات متطابقة بعضها فوق بعض، وجعل القمر في هذه السموات نورًا، وجعل الشمس مصباحًا مضيئًا يستضيء به أهل الأرض؟","71:17":"والله أنشأ أصلكم من الأرض إنشاء، ثم يعيدكم في الأرض بعد الموت، ويخرجكم يوم البعث إخراجًا محققًا. والله جعل لكم الأرض ممهدة كالبساط؛ لتسلكوا فيها طرقًا واسعة.","71:18":"والله أنشأ أصلكم من الأرض إنشاء، ثم يعيدكم في الأرض بعد الموت، ويخرجكم يوم البعث إخراجًا محققًا. والله جعل لكم الأرض ممهدة كالبساط؛ لتسلكوا فيها طرقًا واسعة.","71:19":"والله أنشأ أصلكم من الأرض إنشاء، ثم يعيدكم في الأرض بعد الموت، ويخرجكم يوم البعث إخراجًا محققًا. والله جعل لكم الأرض ممهدة كالبساط؛ لتسلكوا فيها طرقًا واسعة.","71:20":"والله أنشأ أصلكم من الأرض إنشاء، ثم يعيدكم في الأرض بعد الموت، ويخرجكم يوم البعث إخراجًا محققًا. والله جعل لكم الأرض ممهدة كالبساط؛ لتسلكوا فيها طرقًا واسعة.","71:21":"قال نوح: ربِّ إن قومي بالغوا في عصياني وتكذيبي، واتبع الضعفاء منهم الرؤساء الضالين الذين لم تزدهم أموالهم وأولادهم إلا ضلالا في الدنيا وعقابًا في الآخرة، ومكر رؤساء الضلال بتابعيهم من الضعفاء مكرًا عظيمًا، وقالوا لهم: لا تتركوا عبادة آلهتكم إلى عبادة الله وحده، التي يدعو إليها نوح، ولا تتركوا وَدًّا ولا سُواعًا ولا يغوث ويعوق ونَسْرا - وهذه أسماء أصنامهم التي كانوا يعبدونها من دون الله، وكانت أسماء رجال صالحين، لما ماتوا أوحى الشيطان إلى قومهم أن يقيموا لهم التماثيل والصور؛ لينشطوا- بزعمهم- على الطاعة إذا رأوها، فلما ذهب هؤلاء القوم وطال الأمد، وخَلَفهم غيرهم، وسوس لهم الشيطان بأن أسلافهم كانوا يعبدون التماثيل والصور، ويتوسلون بها، وهذه هي الحكمة من تحريم التماثيل، وتحريم بناء القباب على القبور؛ لأنها تصير مع تطاول الزمن معبودة للجهال. وقد أضلَّ هؤلاء المتبوعون كثيرًا من الناس بما زيَّنوا لهم من طرق الغَواية والضلال. ثم قال نوح -عليه السلام-: ولا تزد- يا ربنا- هؤلاء الظالمين لأنفسهم بالكفر والعناد إلا بُعْدا عن الحق. فبسبب ذنوبهم وإصرارهم على الكفر والطغيان أُغرقوا بالطوفان، وأُدخلوا عقب الإغراق نارًا عظيمة اللهب والإحراق، فلم يجدوا من دون الله مَن ينصرهم، أو يدفع عنهم عذاب الله.","71:22":"قال نوح: ربِّ إن قومي بالغوا في عصياني وتكذيبي، واتبع الضعفاء منهم الرؤساء الضالين الذين لم تزدهم أموالهم وأولادهم إلا ضلالا في الدنيا وعقابًا في الآخرة، ومكر رؤساء الضلال بتابعيهم من الضعفاء مكرًا عظيمًا، وقالوا لهم: لا تتركوا عبادة آلهتكم إلى عبادة الله وحده، التي يدعو إليها نوح، ولا تتركوا وَدًّا ولا سُواعًا ولا يغوث ويعوق ونَسْرا - وهذه أسماء أصنامهم التي كانوا يعبدونها من دون الله، وكانت أسماء رجال صالحين، لما ماتوا أوحى الشيطان إلى قومهم أن يقيموا لهم التماثيل والصور؛ لينشطوا- بزعمهم- على الطاعة إذا رأوها، فلما ذهب هؤلاء القوم وطال الأمد، وخَلَفهم غيرهم، وسوس لهم الشيطان بأن أسلافهم كانوا يعبدون التماثيل والصور، ويتوسلون بها، وهذه هي الحكمة من تحريم التماثيل، وتحريم بناء القباب على القبور؛ لأنها تصير مع تطاول الزمن معبودة للجهال. وقد أضلَّ هؤلاء المتبوعون كثيرًا من الناس بما زيَّنوا لهم من طرق الغَواية والضلال. ثم قال نوح -عليه السلام-: ولا تزد- يا ربنا- هؤلاء الظالمين لأنفسهم بالكفر والعناد إلا بُعْدا عن الحق. فبسبب ذنوبهم وإصرارهم على الكفر والطغيان أُغرقوا بالطوفان، وأُدخلوا عقب الإغراق نارًا عظيمة اللهب والإحراق، فلم يجدوا من دون الله مَن ينصرهم، أو يدفع عنهم عذاب الله.","71:23":"قال نوح: ربِّ إن قومي بالغوا في عصياني وتكذيبي، واتبع الضعفاء منهم الرؤساء الضالين الذين لم تزدهم أموالهم وأولادهم إلا ضلالا في الدنيا وعقابًا في الآخرة، ومكر رؤساء الضلال بتابعيهم من الضعفاء مكرًا عظيمًا، وقالوا لهم: لا تتركوا عبادة آلهتكم إلى عبادة الله وحده، التي يدعو إليها نوح، ولا تتركوا وَدًّا ولا سُواعًا ولا يغوث ويعوق ونَسْرا - وهذه أسماء أصنامهم التي كانوا يعبدونها من دون الله، وكانت أسماء رجال صالحين، لما ماتوا أوحى الشيطان إلى قومهم أن يقيموا لهم التماثيل والصور؛ لينشطوا- بزعمهم- على الطاعة إذا رأوها، فلما ذهب هؤلاء القوم وطال الأمد، وخَلَفهم غيرهم، وسوس لهم الشيطان بأن أسلافهم كانوا يعبدون التماثيل والصور، ويتوسلون بها، وهذه هي الحكمة من تحريم التماثيل، وتحريم بناء القباب على القبور؛ لأنها تصير مع تطاول الزمن معبودة للجهال. وقد أضلَّ هؤلاء المتبوعون كثيرًا من الناس بما زيَّنوا لهم من طرق الغَواية والضلال. ثم قال نوح -عليه السلام-: ولا تزد- يا ربنا- هؤلاء الظالمين لأنفسهم بالكفر والعناد إلا بُعْدا عن الحق. فبسبب ذنوبهم وإصرارهم على الكفر والطغيان أُغرقوا بالطوفان، وأُدخلوا عقب الإغراق نارًا عظيمة اللهب والإحراق، فلم يجدوا من دون الله مَن ينصرهم، أو يدفع عنهم عذاب الله.","71:24":"قال نوح: ربِّ إن قومي بالغوا في عصياني وتكذيبي، واتبع الضعفاء منهم الرؤساء الضالين الذين لم تزدهم أموالهم وأولادهم إلا ضلالا في الدنيا وعقابًا في الآخرة، ومكر رؤساء الضلال بتابعيهم من الضعفاء مكرًا عظيمًا، وقالوا لهم: لا تتركوا عبادة آلهتكم إلى عبادة الله وحده، التي يدعو إليها نوح، ولا تتركوا وَدًّا ولا سُواعًا ولا يغوث ويعوق ونَسْرا - وهذه أسماء أصنامهم التي كانوا يعبدونها من دون الله، وكانت أسماء رجال صالحين، لما ماتوا أوحى الشيطان إلى قومهم أن يقيموا لهم التماثيل والصور؛ لينشطوا- بزعمهم- على الطاعة إذا رأوها، فلما ذهب هؤلاء القوم وطال الأمد، وخَلَفهم غيرهم، وسوس لهم الشيطان بأن أسلافهم كانوا يعبدون التماثيل والصور، ويتوسلون بها، وهذه هي الحكمة من تحريم التماثيل، وتحريم بناء القباب على القبور؛ لأنها تصير مع تطاول الزمن معبودة للجهال. وقد أضلَّ هؤلاء المتبوعون كثيرًا من الناس بما زيَّنوا لهم من طرق الغَواية والضلال. ثم قال نوح -عليه السلام-: ولا تزد- يا ربنا- هؤلاء الظالمين لأنفسهم بالكفر والعناد إلا بُعْدا عن الحق. فبسبب ذنوبهم وإصرارهم على الكفر والطغيان أُغرقوا بالطوفان، وأُدخلوا عقب الإغراق نارًا عظيمة اللهب والإحراق، فلم يجدوا من دون الله مَن ينصرهم، أو يدفع عنهم عذاب الله.","71:25":"قال نوح: ربِّ إن قومي بالغوا في عصياني وتكذيبي، واتبع الضعفاء منهم الرؤساء الضالين الذين لم تزدهم أموالهم وأولادهم إلا ضلالا في الدنيا وعقابًا في الآخرة، ومكر رؤساء الضلال بتابعيهم من الضعفاء مكرًا عظيمًا، وقالوا لهم: لا تتركوا عبادة آلهتكم إلى عبادة الله وحده، التي يدعو إليها نوح، ولا تتركوا وَدًّا ولا سُواعًا ولا يغوث ويعوق ونَسْرا - وهذه أسماء أصنامهم التي كانوا يعبدونها من دون الله، وكانت أسماء رجال صالحين، لما ماتوا أوحى الشيطان إلى قومهم أن يقيموا لهم التماثيل والصور؛ لينشطوا- بزعمهم- على الطاعة إذا رأوها، فلما ذهب هؤلاء القوم وطال الأمد، وخَلَفهم غيرهم، وسوس لهم الشيطان بأن أسلافهم كانوا يعبدون التماثيل والصور، ويتوسلون بها، وهذه هي الحكمة من تحريم التماثيل، وتحريم بناء القباب على القبور؛ لأنها تصير مع تطاول الزمن معبودة للجهال. وقد أضلَّ هؤلاء المتبوعون كثيرًا من الناس بما زيَّنوا لهم من طرق الغَواية والضلال. ثم قال نوح -عليه السلام-: ولا تزد- يا ربنا- هؤلاء الظالمين لأنفسهم بالكفر والعناد إلا بُعْدا عن الحق. فبسبب ذنوبهم وإصرارهم على الكفر والطغيان أُغرقوا بالطوفان، وأُدخلوا عقب الإغراق نارًا عظيمة اللهب والإحراق، فلم يجدوا من دون الله مَن ينصرهم، أو يدفع عنهم عذاب الله.","71:26":"وقال نوح -عليه السلام- بعد يأسه من قومه: ربِّ لا تترك من الكافرين بك أحدًا حيًّا على الأرض يدور ويتحرك. إنك إن تتركهم دون إهلاك يُضلوا عبادك الذين قد آمنوا بك عن طريق الحق، ولا يأت من أصلابهم وأرحامهم إلا مائل عن الحق شديد الكفر بك والعصيان لك. ربِّ اغفر لي ولوالديَّ ولمن دخل بيتي مؤمنًا، وللمؤمنين والمؤمنات بك، ولا تزد الكافرين إلا هلاكًا وخسرانًا في الدنيا والآخرة.","71:27":"وقال نوح -عليه السلام- بعد يأسه من قومه: ربِّ لا تترك من الكافرين بك أحدًا حيًّا على الأرض يدور ويتحرك. إنك إن تتركهم دون إهلاك يُضلوا عبادك الذين قد آمنوا بك عن طريق الحق، ولا يأت من أصلابهم وأرحامهم إلا مائل عن الحق شديد الكفر بك والعصيان لك. ربِّ اغفر لي ولوالديَّ ولمن دخل بيتي مؤمنًا، وللمؤمنين والمؤمنات بك، ولا تزد الكافرين إلا هلاكًا وخسرانًا في الدنيا والآخرة.","71:28":"وقال نوح -عليه السلام- بعد يأسه من قومه: ربِّ لا تترك من الكافرين بك أحدًا حيًّا على الأرض يدور ويتحرك. إنك إن تتركهم دون إهلاك يُضلوا عبادك الذين قد آمنوا بك عن طريق الحق، ولا يأت من أصلابهم وأرحامهم إلا مائل عن الحق شديد الكفر بك والعصيان لك. ربِّ اغفر لي ولوالديَّ ولمن دخل بيتي مؤمنًا، وللمؤمنين والمؤمنات بك، ولا تزد الكافرين إلا هلاكًا وخسرانًا في الدنيا والآخرة."}`)},im={11:{number:11,name:`Hud`,nameAr:`هود`},23:{number:23,name:`Al-Mu'minun`,nameAr:`المؤمنون`},29:{number:29,name:`Al-'Ankabut`,nameAr:`العنكبوت`},54:{number:54,name:`Al-Qamar`,nameAr:`القمر`},71:{number:71,name:`Nuh`,nameAr:`نوح`}},am=[{surah:11,from:25,to:49},{surah:23,from:23,to:30},{surah:54,from:9,to:15},{surah:71,from:1,to:28},{surah:29,from:14,to:15}];function om(e){let t=e.meta;return{id:t.id,lang:t.language,name:t.title,translator:t.translator,year:t.firstPublished,license:t.license,sourceUrl:t.sourceUrl,kind:t.kind===`tafsir`?`tafsir`:`translation`,verses:e.verses}}var sm={en:tm,ckb:om(nm),ar:om(rm)};function cm(e=G().lang){return sm[e]??tm}function lm(e,t){return`${e}:${t}`}function um(e){let[t,n]=e.split(`:`);return{surah:Number(t),ayah:Number(n)}}function dm(e){return em[e]??``}function fm(e,t=G().lang){return cm(t).verses[e]??``}function pm(e){let t=[];for(let n=e.from;n<=e.to;n++)t.push(lm(e.surah,n));return t}function mm(){return G().digits===`arab`}function hm(e,t,n){return`${im[e]?.nameAr??Lu(e)}: ${Lu(t)}${n===t?``:`–${Lu(n)}`}`}function gm(e){let{surah:t,ayah:n}=um(e);if(mm())return hm(t,n,n);let r=im[t];return`${r?r.name+` `:``}${t}:${n}`}function _m(e){if(mm())return hm(e.surah,e.from,e.to);let t=im[e.surah],n=e.from===e.to?`${e.from}`:`${e.from}–${e.to}`;return`${t?t.name+` `:``}${e.surah}:${n}`}function vm(e){return mm()?Lu(um(e).ayah):e}function ym(e,t,n=G().lang){let r=e[t+1];if(r===void 0)return!1;let i=fm(e[t],n);return i!==``&&i===fm(r,n)}function bm(e){let t=[],n=0;for(;n<e.length;){let{surah:r,ayah:i}=um(e[n]),a=i,o=n+1;for(;o<e.length;){let t=um(e[o]);if(t.surah!==r||t.ayah!==a+1)break;a=t.ayah,o++}mm()?(n>0?um(e[n-1]).surah:-1)===r&&t.length?t[t.length-1]+=`، ${Lu(i)}${a===i?``:`–${Lu(a)}`}`:t.push(hm(r,i,a)):t.push(a===i?`${r}:${i}`:`${r}:${i}–${a}`),n=o}return t.join(mm()?`؛ `:`; `)}function xm(e){let t=[];for(let n of e){let{surah:e,ayah:r}=um(n),i=t[t.length-1];i&&i.surah===e&&i.to===r-1?i.to=r:t.push({surah:e,from:r,to:r})}return t}function $(e,t={},n=[]){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.id&&(r.id=t.id),t.role&&r.setAttribute(`role`,t.role),t.type&&r.setAttribute(`type`,t.type),t.title&&(r.title=t.title),t.lang&&(r.lang=t.lang),t.dir&&(r.dir=t.dir),t.href&&r.setAttribute(`href`,t.href),t.target&&r.setAttribute(`target`,t.target),t.rel&&r.setAttribute(`rel`,t.rel),t.hidden&&(r.hidden=!0),t.disabled&&r.setAttribute(`disabled`,``),t.tabindex!==void 0&&(r.tabIndex=t.tabindex),t.aria)for(let[e,n]of Object.entries(t.aria))r.setAttribute(`aria-${e}`,n);if(t.data)for(let[e,n]of Object.entries(t.data))r.dataset[e]=n;if(t.on)for(let[e,n]of Object.entries(t.on))r.addEventListener(e,n);return Sm(r,n),r}function Sm(e,t){for(let n of t)n!=null&&n!==!1&&e.appendChild(typeof n==`string`?document.createTextNode(n):n)}function Cm(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function wm(e,t){e.textContent!==t&&(e.textContent=t)}var Tm=`http://www.w3.org/2000/svg`,Em={book:[`M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5C4.7 20 4 19.3 4 18.5z`,`M20 5.5C20 4.7 19.3 4 18.5 4H13v16h5.5c.8 0 1.5-.7 1.5-1.5z`],list:[`M9 6h11`,`M9 12h11`,`M9 18h11`,`M4.5 6h.01`,`M4.5 12h.01`,`M4.5 18h.01`],help:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z`,`M9.6 9.2a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.6`,`M12 17h.01`],gear:[`M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z`,`M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.5-2-3.4-2.3.9a7.6 7.6 0 0 0-2.6-1.5L14.1 2h-4.2l-.4 2.5A7.6 7.6 0 0 0 6.9 6l-2.3-.9-2 3.4 2 1.5a7.6 7.6 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4.2l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.3.9 2-3.4z`],pause:[`M8 5v14`,`M16 5v14`],play:[`M7 4.5v15l12-7.5z`],prev:[`M15 6l-6 6 6 6`],next:[`M9 6l6 6-6 6`],replay:[`M4 12a8 8 0 1 0 2.4-5.7`,`M4 4v4h4`],close:[`M6 6l12 12`,`M18 6L6 18`],walk:[`M13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z`,`M9.5 21l2-6 2.5 2.5V21`,`M8 10l3-3 3 2 2.5 3`,`M11 7l-1 5 2.5 2`],eye:[`M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z`,`M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z`],home:[`M3 11l9-7 9 7`,`M5 10v10h14V10`],film:[`M4 5h16v14H4z`,`M4 9h16`,`M4 15h16`,`M8 5v4`,`M16 5v4`,`M8 15v4`,`M16 15v4`]};function Dm(e,t=22){let n=document.createElementNS(Tm,`svg`);n.setAttribute(`viewBox`,`0 0 24 24`),n.setAttribute(`width`,String(t)),n.setAttribute(`height`,String(t)),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.8`),n.setAttribute(`stroke-linecap`,`round`),n.setAttribute(`stroke-linejoin`,`round`),n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`focusable`,`false`);for(let t of Em[e]??[]){let r=document.createElementNS(Tm,`path`);r.setAttribute(`d`,t),e===`play`&&r.setAttribute(`fill`,`currentColor`),n.appendChild(r)}return n}function Om(e){return String(e).replace(/[0-9]/g,e=>`٠١٢٣٤٥٦٧٨٩`[Number(e)])}function km(e){return Array.from(e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)).filter(e=>!e.hidden&&e.offsetParent!==null)}var Am=class{constructor(e,t,n,r){H(this,`root`,void 0),H(this,`layer`,void 0),H(this,`handlers`,void 0),H(this,`settings`,void 0),H(this,`opts`,void 0),H(this,`mode`,`loading`),H(this,`chapterIndex`,0),H(this,`playing`,!1),H(this,`stack`,[]),H(this,`panelWasOpen`,!1),H(this,`toastTimer`,0),H(this,`lastCaption`,null),H(this,`screen`,void 0),H(this,`loadingBar`,null),H(this,`loadingMsg`,null),H(this,`hud`,void 0),H(this,`chapterNum`,void 0),H(this,`chapterTitle`,void 0),H(this,`chapterSub`,void 0),H(this,`chapterRefs`,void 0),H(this,`caption`,void 0),H(this,`captionBadge`,void 0),H(this,`captionText`,void 0),H(this,`captionRefs`,void 0),H(this,`crosshair`,void 0),H(this,`prompt`,void 0),H(this,`promptText`,void 0),H(this,`inspectBtn`,void 0),H(this,`transport`,void 0),H(this,`playBtn`,void 0),H(this,`speedBtn`,void 0),H(this,`progressFill`,void 0),H(this,`progress`,void 0),H(this,`freeBar`,void 0),H(this,`lookHint`,void 0),H(this,`toastEl`,void 0),H(this,`dialogs`,void 0),H(this,`onKeyDown`,e=>this.handleKey(e)),this.root=e,this.handlers=t,this.settings=n,this.opts=r;let i=G().ui;this.layer=$(`div`,{class:`nf-ui`}),this.root.appendChild(this.layer),this.root.classList.toggle(`nf-touch`,r.touch),this.chapterNum=$(`span`,{class:`nf-chapter-num`}),this.chapterTitle=$(`span`,{class:`nf-chapter-title`}),this.chapterSub=$(`span`,{class:`nf-chapter-sub`}),this.chapterRefs=$(`button`,{class:`nf-chapter-refs`,type:`button`,on:{click:()=>this.openChapterVerses()}});let a=$(`div`,{class:`nf-chapter-card`},[$(`button`,{class:`nf-chapter-head`,type:`button`,aria:{label:i.hud.chapters},on:{click:()=>this.openChapters()}},[this.chapterNum,this.chapterTitle,this.chapterSub]),this.chapterRefs]),o=$(`div`,{class:`nf-hud-actions`},[this.iconButton(`book`,i.hud.verses,()=>this.openChapterVerses()),this.iconButton(`list`,i.hud.chapters,()=>this.openChapters()),this.iconButton(`help`,i.hud.help,()=>this.openHelp()),this.iconButton(`gear`,i.hud.settings,()=>this.openSettings()),this.iconButton(`pause`,i.hud.pause,()=>this.userPause())]);this.captionBadge=$(`span`,{class:`nf-badge`}),this.captionText=$(`span`,{class:`nf-caption-text`}),this.captionRefs=$(`span`,{class:`nf-caption-refs`}),this.caption=$(`button`,{class:`nf-caption`,type:`button`,aria:{live:`polite`},title:i.hud.captionHint,on:{click:()=>this.openCaptionVerses()}},[this.captionBadge,this.captionText,this.captionRefs]),this.caption.hidden=!0,this.crosshair=$(`div`,{class:`nf-crosshair`,aria:{hidden:`true`}}),this.promptText=$(`span`,{class:`nf-prompt-text`}),this.prompt=$(`div`,{class:`nf-prompt`,aria:{live:`polite`}},[$(`kbd`,{},[i.hud.inspectKey]),this.promptText]),this.prompt.hidden=!0,this.inspectBtn=$(`button`,{class:`nf-inspect-btn`,type:`button`,on:{click:()=>this.handlers.inspect()}}),this.inspectBtn.hidden=!0,this.playBtn=this.iconButton(`pause`,i.transport.pause,()=>this.handlers.togglePlay(),`nf-tbtn nf-tbtn-play`),this.speedBtn=$(`button`,{class:`nf-tbtn nf-tbtn-speed`,type:`button`,on:{click:()=>this.cycleSpeed()}}),this.progressFill=$(`div`,{class:`nf-progress-fill`}),this.progress=$(`div`,{class:`nf-progress`,role:`progressbar`,aria:{label:i.transport.progress,valuemin:`0`,valuemax:`100`,valuenow:`0`}},[this.progressFill]),this.transport=$(`div`,{class:`nf-transport`,role:`toolbar`,aria:{label:i.hud.narration}},[this.progress,$(`div`,{class:`nf-transport-row`},[this.iconButton(`prev`,i.transport.prev,()=>this.handlers.prev(),`nf-tbtn nf-flip-rtl`),this.playBtn,this.iconButton(`replay`,i.transport.replay,()=>this.handlers.replay(),`nf-tbtn`),this.iconButton(`next`,i.transport.next,()=>this.handlers.next(),`nf-tbtn nf-flip-rtl`),this.speedBtn,$(`span`,{class:`nf-transport-spacer`}),$(`button`,{class:`nf-btn nf-btn-ghost nf-explore-btn`,type:`button`,title:i.transport.exploreHint,on:{click:()=>this.handlers.exploreHere()}},[Dm(`walk`,18),$(`span`,{},[i.transport.explore])])])]),this.freeBar=$(`div`,{class:`nf-freebar`},[$(`button`,{class:`nf-btn nf-btn-ghost`,type:`button`,on:{click:()=>this.handlers.watchGuided()}},[Dm(`film`,18),$(`span`,{},[i.hud.watchChapter])])]),this.lookHint=$(`button`,{class:`nf-look-hint`,type:`button`,on:{click:()=>this.handlers.requestLook()}},[$(`span`,{class:`nf-look-title`},[Dm(`eye`,22),i.hud.lookTitle]),$(`span`,{class:`nf-look-body`},[i.hud.lookBody])]),this.lookHint.hidden=!0,this.hud=$(`div`,{class:`nf-hud`},[$(`div`,{class:`nf-hud-top`},[a,o]),this.crosshair,this.lookHint,$(`div`,{class:`nf-hud-bottom`},[this.prompt,this.inspectBtn,this.caption,this.transport,this.freeBar])]),this.toastEl=$(`div`,{class:`nf-toast`,role:`status`,aria:{live:`polite`}}),this.dialogs=$(`div`,{class:`nf-dialogs`}),this.screen=$(`div`,{class:`nf-screen`}),Sm(this.layer,[this.hud,this.toastEl,this.screen,this.dialogs]),window.addEventListener(`keydown`,this.onKeyDown),this.applySettingsToRoot(),this.updateSpeedButton(),this.setMode(`loading`)}setLoading(e,t){let n=G().ui;this.loadingBar||(Cm(this.screen),this.loadingBar=$(`div`,{class:`nf-loading-fill`}),this.loadingMsg=$(`p`,{class:`nf-loading-msg`,aria:{live:`polite`}}),this.screen.appendChild($(`div`,{class:`nf-loading`},[$(`h1`,{class:`nf-title`},[n.app.title]),$(`p`,{class:`nf-loading-label`},[n.app.loading.title]),$(`div`,{class:`nf-loading-bar`,role:`progressbar`,aria:{label:n.app.loading.title,valuemin:`0`,valuemax:`100`}},[this.loadingBar]),this.loadingMsg])));let r=Math.round(Math.max(0,Math.min(1,e))*100);this.loadingBar.style.width=`${r}%`,this.loadingBar.parentElement?.setAttribute(`aria-valuenow`,String(r)),this.loadingMsg&&wm(this.loadingMsg,t)}showIntro(){let e=G().ui,t=G().content;this.loadingBar=null,Cm(this.screen);let n=$(`ul`,{class:`nf-legend`});for(let e of[`quran`,`summary`,`interpretation`,`bible`,`reconstruction`])n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));let r=$(`button`,{class:`nf-btn nf-btn-primary nf-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`guided`)}},[$(`span`,{class:`nf-btn-label`},[e.intro.begin]),$(`span`,{class:`nf-btn-hint`},[e.intro.beginHint])]),i=$(`div`,{class:`nf-intro`,role:`region`,aria:{label:e.app.title}},[this.languagePicker(),$(`p`,{class:`nf-kicker`},[e.intro.kicker]),$(`h1`,{class:`nf-title`},[e.app.title]),$(`p`,{class:`nf-lead`},[e.intro.lead]),$(`div`,{class:`nf-intro-actions`},[r,$(`button`,{class:`nf-btn nf-btn-secondary nf-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`free`)}},[$(`span`,{class:`nf-btn-label`},[e.intro.explore]),$(`span`,{class:`nf-btn-hint`},[e.intro.exploreHint])])]),$(`div`,{class:`nf-intro-links`},[this.textButton(e.intro.chapters,()=>this.openChapters()),this.textButton(e.intro.settings,()=>this.openSettings()),this.textButton(e.intro.controls,()=>this.openHelp()),this.textButton(e.intro.about,()=>this.openAbout())]),$(`details`,{class:`nf-intro-details`},[$(`summary`,{},[e.intro.legendTitle]),n,$(`p`,{class:`nf-note`},[e.intro.arkNote])]),$(`p`,{class:`nf-note`},[e.intro.depiction]),$(`p`,{class:`nf-note nf-note-dim`},[e.intro.soundNote]),$(`a`,{class:`nf-exit-link`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Dm(`home`,16),e.intro.exit])]);this.screen.appendChild(i),this.setMode(`intro`),requestAnimationFrame(()=>r.focus({preventScroll:!0}))}showFallback(e,t){let n=G().ui,r=G().content;this.closePanels(),this.loadingBar=null,Cm(this.screen);let i=e===`no-webgl`?n.fallback.noWebglTitle:e===`context-lost`?n.fallback.lostTitle:n.fallback.errorTitle,a=e===`no-webgl`?n.fallback.noWebgl:e===`context-lost`?n.fallback.lost:n.fallback.error,o=$(`div`,{class:`nf-story`});xu.forEach((e,t)=>{let i=r.chapters[e.id],a=$(`section`,{class:`nf-story-chapter`},[$(`h3`,{},[`${Lu(t+1)}. ${i.title}`]),$(`p`,{class:`nf-chapter-sub`},[i.subtitle])]);for(let t of e.cues)a.appendChild(this.sourceBlock(t.kind,i.cues[t.key]??``,t.refs,t.bible));a.appendChild(this.textButton(n.fallback.readVerses,()=>this.openVerses(e.reading))),o.appendChild(a)});let s=$(`div`,{class:`nf-intro-actions`});e!==`no-webgl`&&s.appendChild($(`button`,{class:`nf-btn nf-btn-primary`,type:`button`,on:{click:()=>window.location.reload()}},[n.fallback.reload])),s.appendChild($(`a`,{class:`nf-btn nf-btn-secondary`,href:this.opts.mainSiteUrl},[n.intro.exit])),this.screen.appendChild($(`div`,{class:`nf-fallback`,role:`region`,aria:{label:i}},[$(`h1`,{class:`nf-title`},[i]),$(`p`,{class:`nf-lead`},[a]),t?$(`p`,{class:`nf-note nf-note-dim`},[t]):null,s,$(`h2`,{},[n.fallback.storyTitle]),o])),this.setMode(`fallback`)}showCompletion(){let e=G().ui;Cm(this.screen);let t=$(`button`,{class:`nf-btn nf-btn-primary`,type:`button`,on:{click:()=>this.handlers.exploreHere()}},[Dm(`walk`,18),$(`span`,{},[e.complete.explore])]);this.screen.appendChild($(`div`,{class:`nf-complete`,role:`region`,aria:{label:e.complete.title}},[$(`h1`,{class:`nf-title`},[e.complete.title]),$(`p`,{class:`nf-lead`},[e.complete.body]),this.sourceBlock(`quran`,G().content.chapters.judi.cues.j6,[`54:15`]),$(`div`,{class:`nf-intro-actions`},[t,$(`button`,{class:`nf-btn nf-btn-secondary`,type:`button`,on:{click:()=>this.handlers.restartExperience()}},[e.complete.restart])]),$(`div`,{class:`nf-intro-links`},[this.textButton(e.complete.passages,()=>this.openVerses(am)),this.textButton(e.intro.about,()=>this.openAbout()),$(`a`,{class:`nf-text-btn`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[e.intro.exit])])])),requestAnimationFrame(()=>t.focus({preventScroll:!0}))}setMode(e){this.mode=e,this.root.dataset.mode=e,(e===`guided`||e===`free`)&&Cm(this.screen),e!==`guided`&&this.setCaption(null),e!==`free`&&this.setFocus(null)}setChapter(e){this.chapterIndex=e;let t=xu[e],n=G().content.chapters[t.id];wm(this.chapterNum,Ru(G().ui.hud.chapterOf,{n:e+1,total:xu.length})),wm(this.chapterTitle,n.title),wm(this.chapterSub,n.subtitle),wm(this.chapterRefs,bm(t.refs)),this.chapterRefs.setAttribute(`aria-label`,`${G().ui.hud.readVerses}: ${bm(t.refs)}`)}setGuidedState(e,t){let n=G().ui.transport;if(e!==this.playing){this.playing=e,Cm(this.playBtn),this.playBtn.appendChild(Dm(e?`pause`:`play`));let t=e?n.pause:n.play;this.playBtn.setAttribute(`aria-label`,t),this.playBtn.title=t}let r=Math.round(Math.max(0,Math.min(1,t))*1e3)/10;this.progressFill.style.width=`${r}%`,this.progress.setAttribute(`aria-valuenow`,String(Math.round(r)))}setCaption(e){if(this.lastCaption=e,!e||!e.text){this.caption.hidden=!0;return}Cm(this.captionBadge),this.captionBadge.className=`nf-badge nf-badge-${e.kind}`,wm(this.captionBadge,G().content.sourceKinds[e.kind].label);let t=this.isQuoted(e.kind);wm(this.captionText,this.quote(e.kind,e.text)),this.captionText.classList.toggle(`is-quote`,t),wm(this.captionRefs,this.refLabel(e.refs,e.bible)),this.caption.classList.toggle(`has-refs`,e.refs.length>0),this.caption.hidden=!1,this.caption.classList.remove(`is-new`),this.caption.offsetWidth,this.caption.classList.add(`is-new`)}setFocus(e){if(!(e&&this.mode===`free`)){this.prompt.hidden=!0,this.inspectBtn.hidden=!0,this.crosshair.classList.remove(`is-active`);return}let t=G().content.objects[e].name;this.crosshair.classList.add(`is-active`),this.opts.touch?(wm(this.inspectBtn,Ru(G().ui.hud.inspectWhat,{name:t})),this.inspectBtn.hidden=!1,this.prompt.hidden=!0):(wm(this.promptText,Ru(G().ui.hud.inspectWhat,{name:t})),this.prompt.hidden=!1,this.inspectBtn.hidden=!0)}setLookHint(e){this.lookHint.hidden=!e}setPaused(e){e&&!this.hasDialog(`pause`)?this.pushDialog(`pause`,this.buildPause(),!1):!e&&this.hasDialog(`pause`)&&this.removeDialog(`pause`,!1)}openInfo(e){let t=af[e],n=G().content.objects[e],r=G().ui.panels,i=$(`div`,{class:`nf-info`});for(let e of t.sections)i.appendChild(this.sectionBlock(e,n.sections[e.key]??``));let a=$(`div`,{class:`nf-dialog-actions`},[$(`button`,{class:`nf-btn nf-btn-primary`,type:`button`,on:{click:()=>this.openVerses(xm(t.refs),t.refs)}},[Dm(`book`,18),$(`span`,{},[r.infoReadVerses])])]);this.pushDialog(`info`,this.dialog(n.name,[i,a],`nf-dialog-info`))}openVerses(e,t){let n=G().ui.panels,r=e.length?e:xu[this.chapterIndex].reading,i=$(`div`,{class:`nf-verses`}),a=$(`button`,{class:`nf-tab`,type:`button`,role:`tab`},[n.versesThisChapter]),o=$(`button`,{class:`nf-tab`,type:`button`,role:`tab`},[n.versesAll]),s=(e,t)=>{Cm(i);let n=null;for(let r of e){let e=G().dir===`rtl`;i.appendChild($(`h3`,{class:`nf-verse-range`},[_m(r),e?null:` `,e?null:$(`span`,{lang:`ar`,dir:`rtl`,class:`nf-surah-ar`},[im[r.surah]?.nameAr??``])]));let a=pm(r);a.forEach((e,r)=>{let{ayah:o}=um(e),s=!!t&&t.includes(e),c=$(`article`,{class:`nf-verse${s?` is-highlight`:``}`,aria:{label:gm(e)}},[$(`p`,{class:`nf-arabic`,lang:`ar`,dir:`rtl`},[dm(e),` `,$(`span`,{class:`nf-ayah-mark`},[`﴿${Om(o)}﴾`])]),ym(a,r)?null:this.translationBlock(e)]);s&&!n&&(n=c),i.appendChild(c)})}a.setAttribute(`aria-selected`,String(e===r)),o.setAttribute(`aria-selected`,String(e===am)),i.scrollTop=0,n&&requestAnimationFrame(()=>n.scrollIntoView({block:`center`}))};a.addEventListener(`click`,()=>s(r,t)),o.addEventListener(`click`,()=>s(am,t));let c=$(`div`,{class:`nf-tabs`,role:`tablist`},[a,o]),l=$(`div`,{class:`nf-sources`},[$(`p`,{},[n.versesArabicSource,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[n.tanzilLink])]),$(`p`,{},[n.versesTranslationSource]),$(`p`,{class:`nf-note-dim`},[n.versesNote])]);this.pushDialog(`verses`,this.dialog(n.versesTitle,[c,i,l],`nf-dialog-verses`)),s(r,t)}openChapters(){let e=G().ui.panels,t=G().content,n=$(`ol`,{class:`nf-chapters`});xu.forEach((r,i)=>{let a=t.chapters[r.id],o=i===this.chapterIndex&&(this.mode===`guided`||this.mode===`free`),s=$(`button`,{class:`nf-chapter-item${o?` is-current`:``}`,type:`button`,aria:o?{current:`step`,label:Ru(e.chapterGo,{n:i+1})}:{label:Ru(e.chapterGo,{n:i+1})},on:{click:()=>{this.closePanels(),this.handlers.selectChapter(i)}}},[$(`span`,{class:`nf-chapter-n`},[Lu(i+1)]),$(`span`,{class:`nf-chapter-text`},[$(`span`,{class:`nf-chapter-title`},[a.title]),$(`span`,{class:`nf-chapter-sub`},[a.subtitle]),$(`span`,{class:`nf-chapter-refs-small`},[bm(r.refs)])]),o?$(`span`,{class:`nf-chapter-current`},[e.chapterCurrent]):null]);n.appendChild($(`li`,{},[s]))}),this.pushDialog(`chapters`,this.dialog(e.chaptersTitle,[n],`nf-dialog-chapters`))}openHelp(){let e=G().ui.help,t=e=>$(`table`,{class:`nf-keys`},[$(`tbody`,{},e.map(([e,t])=>$(`tr`,{},[$(`th`,{aria:{label:e}},[$(`kbd`,{},[e])]),$(`td`,{},[t])])))]),n=$(`section`,{},[$(`h3`,{},[e.desktop]),t(e.rows)]),r=$(`section`,{},[$(`h3`,{},[e.touch]),t(e.touchRows)]),i=this.opts.touch?[r,n]:[n,r];this.pushDialog(`help`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.guidedTitle]),$(`p`,{},[e.guided])]),...i,$(`p`,{class:`nf-note`},[e.tip])],`nf-dialog-help`))}openSettings(){let e=G().ui.settings,t=this.settings,n=(e,t)=>{this.settings={...this.settings,[e]:t},this.applySettingsToRoot(),this.handlers.settingsChanged(this.settings,[e])},r=(e,r,i,a,o)=>{let s=`nf-set-${String(e)}`,c=$(`select`,{id:s,on:{change:()=>n(e,a(c.value))}});for(let[n,r]of i){let i=$(`option`,{},[r]);i.value=n,String(t[e])===n&&(i.selected=!0),c.appendChild(i)}let l=$(`label`,{class:`nf-field`},[$(`span`,{class:`nf-field-label`},[r]),c,o?$(`span`,{class:`nf-field-note`},[o]):null]);return l.htmlFor=s,l},i=(e,r)=>{let i=$(`input`,{type:`checkbox`,on:{change:()=>n(e,i.checked)}});return i.checked=t[e],$(`label`,{class:`nf-field nf-field-check`},[i,$(`span`,{},[r])])},a=(e,r,i,a,o)=>{let s=$(`input`,{type:`range`,on:{input:()=>n(e,Number(s.value))}});return s.min=String(i),s.max=String(a),s.step=String(o),s.value=String(t[e]),$(`label`,{class:`nf-field`},[$(`span`,{class:`nf-field-label`},[r]),s])};this.pushDialog(`settings`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.language]),this.languagePicker(),$(`p`,{class:`nf-field-note`},[e.languageNote])]),$(`section`,{},[$(`h3`,{},[e.graphics]),r(`quality`,e.quality,[[`auto`,e.qualityAuto],[`low`,e.qualityLow],[`medium`,e.qualityMedium],[`high`,e.qualityHigh]],e=>e,e.qualityNote)]),$(`section`,{},[$(`h3`,{},[e.sound]),i(`soundEnabled`,e.soundOn),a(`volume`,e.volume,0,1,.05)]),$(`section`,{},[$(`h3`,{},[e.comfort]),r(`reducedMotion`,e.motion,[[`system`,e.motionSystem],[`on`,e.motionOn],[`off`,e.motionOff]],e=>e,e.motionNote),a(`lookSensitivity`,e.sensitivity,.4,2,.1),i(`invertY`,e.invertY),i(`hotspots`,e.markers),r(`textScale`,e.textSize,[[`1`,e.textNormal],[`1.15`,e.textLarge],[`1.3`,e.textLarger]],e=>Number(e))])],`nf-dialog-settings`))}openAbout(){let e=G().ui.about,t=G().content,n=$(`ul`,{class:`nf-legend`});for(let e of[`quran`,`summary`,`interpretation`,`bible`,`reconstruction`])n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));this.pushDialog(`about`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.purposeTitle]),$(`p`,{},[e.purpose])]),$(`section`,{},[$(`h3`,{},[e.labelsTitle]),n]),$(`section`,{},[$(`h3`,{},[e.depictionTitle]),$(`p`,{},[e.depiction])]),$(`section`,{},[$(`h3`,{},[e.textsTitle]),$(`p`,{},[e.arabic,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[`tanzil.net`])]),$(`p`,{},[e.translation]),$(`p`,{},[e.bible]),$(`p`,{class:`nf-note-dim`},[e.tanzilNotice]),$(`pre`,{class:`nf-notice`},[$p])]),$(`section`,{},[$(`h3`,{},[e.assetsTitle]),$(`p`,{},[e.assets])]),$(`section`,{},[$(`h3`,{},[e.limitsTitle]),$(`p`,{},[e.limits])])],`nf-dialog-about`))}closePanels(){for(;this.stack.length;){let e=this.stack[this.stack.length-1];this.removeDialog(e.kind,e.kind===`pause`)}}get panelOpen(){return this.stack.some(e=>e.kind!==`pause`)}toast(e){wm(this.toastEl,e),this.toastEl.classList.add(`is-visible`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`is-visible`),3400)}setSettings(e){this.settings=e,this.applySettingsToRoot()}dispose(){window.removeEventListener(`keydown`,this.onKeyDown),window.clearTimeout(this.toastTimer),this.layer.remove()}userPause(){(this.mode===`guided`||this.mode===`free`)&&(this.hasDialog(`pause`)||(this.pushDialog(`pause`,this.buildPause(),!1),this.handlers.pauseChanged(!0)))}buildPause(){let e=G().ui.panels,t=$(`button`,{class:`nf-btn nf-btn-primary`,type:`button`,on:{click:()=>this.removeDialog(`pause`,!0)}},[Dm(`play`,18),$(`span`,{},[e.resume])]),n=(e,t)=>$(`button`,{class:`nf-btn nf-btn-secondary`,type:`button`,on:{click:t}},[e]);return this.dialog(e.pauseTitle,[$(`div`,{class:`nf-menu`},[t,n(e.restartChapter,()=>{this.closePanels(),this.handlers.restartChapter()}),n(e.restartAll,()=>{this.closePanels(),this.handlers.restartExperience()}),n(G().ui.hud.chapters,()=>this.openChapters()),n(G().ui.hud.settings,()=>this.openSettings()),n(G().ui.help.title,()=>this.openHelp()),n(G().ui.about.title,()=>this.openAbout()),n(e.mainMenu,()=>{this.closePanels(),this.handlers.toIntro()}),$(`a`,{class:`nf-btn nf-btn-ghost`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Dm(`home`,18),$(`span`,{},[e.exitSite])])])],`nf-dialog-pause`,!0,()=>this.removeDialog(`pause`,!0))}exitClick(e){e.preventDefault(),this.handlers.exitToSite()}dialog(e,t,n,r=!0,i){let a=G().ui.panels,o=`nf-dlg-${Math.random().toString(36).slice(2,9)}`,s=$(`button`,{class:`nf-icon-btn nf-dialog-close`,type:`button`,aria:{label:a.close},title:a.close},[Dm(`close`)]),c=()=>{i?i():this.popDialog()};s.addEventListener(`click`,c);let l=$(`div`,{class:`nf-dialog-body`});Sm(l,t);let u=$(`div`,{class:`nf-dialog ${n}`,role:`dialog`,aria:{modal:`true`,labelledby:o}},[$(`header`,{class:`nf-dialog-head`},[$(`h2`,{id:o},[e]),r?s:null]),l]),d=$(`div`,{class:`nf-backdrop`},[u]);return d.addEventListener(`pointerdown`,e=>{e.target===d&&c()}),u.addEventListener(`keydown`,e=>this.trapFocus(e,u)),d}pushDialog(e,t,n=!0){this.hasDialog(e)&&e!==`pause`&&this.removeDialog(e,!1);let r={kind:e,el:t,returnFocus:document.activeElement};for(let e of this.stack)e.el.classList.add(`is-behind`);this.stack.push(r),this.dialogs.appendChild(t);let i=km(t).find(e=>!e.classList.contains(`nf-dialog-close`))??km(t)[0];requestAnimationFrame(()=>(i??t).focus({preventScroll:!0})),n&&this.notifyPanels()}popDialog(){let e=this.stack[this.stack.length-1];e&&this.removeDialog(e.kind,!0)}hasDialog(e){return this.stack.some(t=>t.kind===e)}removeDialog(e,t){let n=this.stack.map(e=>e.kind).lastIndexOf(e);if(n<0)return;let[r]=this.stack.splice(n,1);r.el.remove();let i=this.stack[this.stack.length-1];i&&i.el.classList.remove(`is-behind`);let a=r.returnFocus;a&&document.contains(a)&&typeof a.focus==`function`&&a.focus({preventScroll:!0}),e===`pause`&&t&&this.handlers.pauseChanged(!1),this.notifyPanels()}notifyPanels(){let e=this.panelOpen;e!==this.panelWasOpen&&(this.panelWasOpen=e,this.handlers.panelChanged(e)),this.root.classList.toggle(`nf-has-dialog`,this.stack.length>0)}trapFocus(e,t){if(e.key!==`Tab`)return;let n=km(t);if(!n.length)return;let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}handleKey(e){if(e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target,n=!!t&&(t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`);if(e.key===`Escape`){this.stack.length?(e.preventDefault(),this.popDialog()):(this.mode===`guided`||this.mode===`free`)&&(e.preventDefault(),this.userPause());return}if(n||e.repeat)return;let r=this.mode===`guided`||this.mode===`free`,i=this.stack.length>0;switch(e.code){case`KeyP`:r&&!i&&this.userPause();break;case`KeyH`:this.hasDialog(`help`)||this.openHelp();break;case`KeyV`:!i&&this.mode!==`loading`&&this.openChapterVerses();break;case`KeyC`:!i&&this.mode!==`loading`&&this.mode!==`fallback`&&this.openChapters();break;case`Space`:this.mode===`guided`&&!i&&t?.tagName!==`BUTTON`&&(e.preventDefault(),this.handlers.togglePlay());break;case`KeyN`:this.mode===`guided`&&!i&&this.handlers.next();break;case`KeyB`:this.mode===`guided`&&!i&&this.handlers.prev()}}openChapterVerses(){let e=xu[this.chapterIndex];this.openVerses(e.reading,e.refs)}openCaptionVerses(){let e=this.lastCaption;!e||e.refs.length===0?this.openChapterVerses():this.openVerses(xm(e.refs),e.refs)}refLabel(e,t){if(t&&t.length){let e=G().ui.kinds;return G().digits===`latn`?`${t.join(`; `)} ${e.bibleSuffix}`:`${t.map(t=>`${e.bibleBook} ${Lu(t.replace(/^Genesis\s+/,``))}`).join(`؛ `)} ${e.bibleSuffix}`}return e.length?e.length===1?gm(e[0]):bm(e):``}badge(e){return $(`span`,{class:`nf-badge nf-badge-${e}`},[G().content.sourceKinds[e].label])}isQuoted(e){return e===`quran`||e===`bible`&&G().lang===`en`}quote(e,t){if(!this.isQuoted(e))return t;let n=G().lang;return n===`ckb`?`«${t}»`:n===`ar`?`﴿${t}﴾`:`“${t}”`}translationBlock(e){let t=cm(),n=t.lang,r=n===`ar`||n===`ckb`?`rtl`:`ltr`;return $(`p`,{class:`nf-translation${t.kind===`tafsir`?` nf-tafsir`:``}`,lang:n,dir:r},[$(`span`,{class:`nf-verse-num`},[vm(e)]),` `,t.kind===`tafsir`?$(`span`,{class:`nf-tafsir-label`},[G().ui.panels.tafsirLabel]):null,t.kind===`tafsir`?` `:null,fm(e)])}languagePicker(){let e=G().lang;return $(`div`,{class:`nf-lang`,role:`group`,aria:{label:G().ui.settings.language}},Ou.map(t=>$(`button`,{class:`nf-btn nf-btn-secondary nf-lang-btn${t.code===e?` is-active`:``}`,type:`button`,lang:t.code,dir:t.code===`en`?`ltr`:`rtl`,aria:{pressed:t.code===e?`true`:`false`},on:{click:()=>t.code===e?void 0:Fu(t.code)}},[t.name])))}sourceBlock(e,t,n,r){let i=this.isQuoted(e);return $(`div`,{class:`nf-source nf-source-${e}`},[this.badge(e),$(i?`blockquote`:`p`,{class:`nf-source-text`},[this.quote(e,t)]),n.length||r&&r.length?$(`p`,{class:`nf-source-ref`},[`— ${this.refLabel(n,r)}`]):null])}sectionBlock(e,t){return this.sourceBlock(e.kind,t,e.refs,e.bible)}iconButton(e,t,n,r=`nf-icon-btn`){return $(`button`,{class:r,type:`button`,title:t,aria:{label:t},on:{click:n}},[Dm(e)])}textButton(e,t){return $(`button`,{class:`nf-text-btn`,type:`button`,on:{click:t}},[e])}cycleSpeed(){let e=$l.indexOf(this.settings.playbackSpeed);this.settings={...this.settings,playbackSpeed:$l[(e+1)%$l.length]},this.handlers.settingsChanged(this.settings,[`playbackSpeed`]),this.updateSpeedButton()}updateSpeedButton(){let e=this.settings.playbackSpeed,t=Lu(e),n=`${t===String(e)?t:t.replace(`.`,`٫`)}×`,r=`${G().ui.transport.speed}: ${n}`;wm(this.speedBtn,n),this.speedBtn.setAttribute(`aria-label`,r),this.speedBtn.title=r,this.speedBtn.classList.toggle(`is-fast`,e!==1)}applySettingsToRoot(){this.root.style.setProperty(`--nf-text-scale`,String(this.settings.textScale)),this.root.classList.toggle(`nf-reduce-motion`,au(this.settings))}},jm=()=>new Promise(e=>{let t=!1,n=()=>{t||(t=!0,e())};requestAnimationFrame(n),setTimeout(n,60)}),Mm=class{constructor(e,t){H(this,`root`,void 0),H(this,`opts`,void 0),H(this,`listeners`,new ou),H(this,`listenersCleanup`,[]),H(this,`settings`,nu()),H(this,`touch`,Xl()),H(this,`ui`,void 0),H(this,`renderer`,null),H(this,`scene`,new Yn),H(this,`camera`,new eo(55,1,.3,5e3)),H(this,`uniforms`,Gl()),H(this,`quality`,Yl.medium),H(this,`dynRes`,null),H(this,`heightTex`,null),H(this,`m`,null),H(this,`timeline`,new Ku(xu)),H(this,`director`,new Dd(this.camera)),H(this,`arkSolver`,new Ad),H(this,`player`,null),H(this,`interactions`,null),H(this,`audio`,new Pp),H(this,`resizeObserver`,null),H(this,`canvasHost`,void 0),H(this,`touchRoot`,void 0),H(this,`fadeEl`,void 0),H(this,`mode`,`loading`),H(this,`paused`,!1),H(this,`running`,!1),H(this,`disposed`,!1),H(this,`reducedMotion`,!1),H(this,`time`,0),H(this,`lastNow`,0),H(this,`holdAfterEnd`,0),H(this,`resumeAfterPanel`,!1),H(this,`panelOpen`,!1),H(this,`transitioning`,!1),H(this,`focusId`,null),H(this,`focusTimer`,0),H(this,`uiTimer`,0),H(this,`lastCueKey`,``),H(this,`lastToast`,0),H(this,`arkFloat`,0),H(this,`interiorDim`,0),H(this,`debugView`,null),H(this,`viewer`,{onArk:!1,inHold:!1,sheltered:!1}),H(this,`ctx`,void 0),H(this,`tmpV`,new z),this.root=e,this.opts=t,ju(Pu()),this.reducedMotion=au(this.settings),this.canvasHost=document.createElement(`div`),this.canvasHost.className=`nf-canvas-host`,this.touchRoot=document.createElement(`div`),this.touchRoot.className=`nf-touch-root`,this.fadeEl=document.createElement(`div`),this.fadeEl.className=`nf-fade`,this.fadeEl.setAttribute(`aria-hidden`,`true`),this.root.append(this.canvasHost,this.touchRoot,this.fadeEl),this.ui=new Am(this.root,this.createHandlers(),this.settings,{mainSiteUrl:t.mainSiteUrl,touch:this.touch}),this.ctx={dt:0,time:0,env:this.timeline.env,ark:this.arkSolver.pose,camera:this.camera,quality:this.quality,reducedMotion:this.reducedMotion,viewer:this.viewer}}async boot(){let e=G().ui.app.loading;this.ui.setMode(`loading`),this.ui.setLoading(0,e.renderer);let t=Nm();if(!t.ok)this.ui.showFallback(`no-webgl`);else{try{await this.build(t.gl)}catch(e){console.error(`[noahs-flood] Failed to start`,e),this.ui.showFallback(`error`,e instanceof Error?e.message:String(e)),this.dispose();return}this.disposed||(this.attachGlobalListeners(),this.ui.setLoading(1,e.ready),this.enterIntro(),this.startLoop())}}async build(e){let t=G().ui.app.loading,n=async(e,t)=>{this.ui.setLoading(e,t),await jm()},r=this.settings.quality===`auto`?Zl(e):this.settings.quality;Pm(e),this.quality=Yl[r],this.ctx.quality=this.quality;let i=new Wl({antialias:this.quality.antialias,powerPreference:`high-performance`,alpha:!1,stencil:!1});this.renderer=i,i.outputColorSpace=Ye,i.toneMapping=4,i.toneMappingExposure=1,i.shadowMap.enabled=this.quality.shadows,i.shadowMap.type=1,i.domElement.className=`nf-canvas`,i.domElement.setAttribute(`aria-label`,G().ui.app.title),this.canvasHost.appendChild(i.domElement),this.dynRes=new Ql(i,this.quality),this.camera.far=this.quality.drawDistance,this.resize(),await n(.08,t.terrain),this.heightTex=jd();let a=this.quality,o=this.uniforms,s=new zd({quality:a,uniforms:o});this.scene.add(s.object),await n(.22,t.vegetation);let c=new nf({quality:a,uniforms:o});this.scene.add(c.object),await n(.34,t.settlement);let l=new ff({quality:a,uniforms:o});this.scene.add(l.object),await n(.46,t.ark);let u=new rp({quality:a,uniforms:o});this.scene.add(u.object),await n(.56,t.figures);let d=new Pf({quality:a,uniforms:o}),f=new ip;this.scene.add(d.object,f.object),await n(.64,t.water);let p=new yp({quality:a,uniforms:o,heightTexture:this.heightTex}),m=new Tp({quality:a,uniforms:o}),h=new Mp({quality:a,uniforms:o});this.scene.add(p.object,m.object,h.object),await n(.74,t.atmosphere);let g=new fp({scene:this.scene,quality:a,uniforms:o});this.scene.add(g.object),g.onLightning=e=>this.audio.lightning(e),this.m={terrain:s,vegetation:c,settlement:l,figures:d,ark:u,landmarks:f,atmosphere:g,water:p,bigWave:m,springs:h},await n(.82,t.audio);let _={groundHeight:Cd,waterLevel:()=>this.timeline.env.waterLevel,arkSurfaces:u.surfaces,arkObstacles:[...u.obstacles,...d.roomObstacles],arkExterior:u.exterior,worldObstacles:[...l.obstacles,...c.obstacles,...u.siteObstacles],ark:()=>this.arkSolver.pose,boundsRadius:id.playRadius},v=new Jp({camera:this.camera,canvas:i.domElement,touchRoot:this.touchRoot,walk:_,getSettings:()=>this.settings});this.player=v,v.onTap=(e,t)=>this.onTap(e,t),v.onInspect=()=>this.inspectFocused(),v.onLockChange=()=>this.refreshLookHint(),v.onBlocked=e=>this.onBlocked(e);let y=new Qp({camera:this.camera});y.register([...l.interactables,...d.interactables,...u.interactables,...h.interactables,...f.interactables]),this.interactions=y,this.scene.add(y.object),await n(.9,t.shaders),this.timeline.goTo(0,`snap`),this.arkSolver.snap(this.timeline.env,0),this.placeAttractCamera(0),this.updateModules(0);try{await i.compileAsync(this.scene,this.camera)}catch{}}startLoop(){!this.renderer||this.running||this.disposed||(this.running=!0,this.lastNow=performance.now(),this.renderer.setAnimationLoop(e=>this.frame(e)))}stopLoop(){this.running=!1,this.renderer?.setAnimationLoop(null)}frame(e){let t=this.renderer,n=this.m;if(!t||!n)return;let r=e-this.lastNow;this.lastNow=e;let i=this.mode===`guided`&&this.timeline.playing?this.settings.playbackSpeed:1,a=Math.min(Math.max(r/1e3,0)*i,.1);this.time+=a,this.timeline.update(a),this.handleChapterEnd(a);let o=this.timeline.env,s=this.arkSolver.update(o,this.time,a,this.reducedMotion);if(this.mode===`free`&&this.player)this.player.update(this.fillCtx(a)),this.viewer.onArk=this.player.viewer.onArk,this.viewer.inHold=this.player.viewer.inHold,this.viewer.sheltered=this.player.viewer.sheltered,!this.transitioning&&this.player.isSubmerged()&&this.rescueToArk();else if(this.debugView)this.camera.position.fromArray(this.debugView.pos),this.camera.lookAt(this.debugView.look[0],this.debugView.look[1],this.debugView.look[2]),this.viewer.onArk=this.viewer.inHold=this.viewer.sheltered=!1;else if(this.mode===`intro`)this.placeAttractCamera(this.time),this.viewer.onArk=this.viewer.inHold=this.viewer.sheltered=!1;else{this.director.update(this.timeline.progress,s,o,this.time,a,this.reducedMotion);let e=this.tmpV.copy(this.camera.position).applyMatrix4(s.inverse),t=o.arkBuild>.97&&Math.abs(e.x)<q.innerHalfX&&Math.abs(e.z)<q.innerHalfZ&&e.y>.3&&e.y<q.wallTop+.3;this.viewer.onArk=this.director.onArk||t,this.viewer.inHold=t,this.viewer.sheltered=t}let c=this.uniforms;c.uTime.value=this.time,c.uWaterLevel.value=o.waterLevel,c.uWaves.value=o.waves,c.uArkPos.value.set(s.position.x,s.position.y+q.draft,s.position.z),c.uArkYaw.value=s.yaw,this.arkFloat=pu(this.arkFloat,+!!s.floating,2,a),c.uArkFloat.value=this.arkFloat,c.uArkHull.value=+(o.arkBuild>.45),c.uMudLine.value=o.arkPath>.95?id.maxFloodLevel:0,this.updateModules(a),this.audio.update(this.ctx),this.updateInteractionUI(a),this.interiorDim=pu(this.interiorDim,+!!this.viewer.inHold,2.5,a),t.toneMappingExposure=n.atmosphere.exposure*(1-this.interiorDim*.5),t.render(this.scene,this.camera),this.dynRes?.update(r)}fillCtx(e){let t=this.ctx;return t.dt=e,t.time=this.time,t.reducedMotion=this.reducedMotion,t.quality=this.quality,t}updateModules(e){let t=this.m;if(!t)return;let n=this.fillCtx(e);t.atmosphere.update(n),t.terrain.update(n),t.vegetation.update(n),t.settlement.update(n),t.ark.update(n),t.figures.update(n),t.water.update(n),t.bigWave.update(n),t.springs.update(n)}handleChapterEnd(e){let t=this.timeline;this.mode!==`guided`||!t.playing||!t.ended||this.transitioning?this.holdAfterEnd=0:(this.holdAfterEnd+=e,!(this.holdAfterEnd<1.5)&&(this.holdAfterEnd=0,t.isLast?this.complete():this.goToChapter(t.index+1)))}updateInteractionUI(e){let t=this.interactions;if(!t)return;let n=this.timeline.env,r=this.settings.hotspots&&(this.mode===`free`||this.mode===`guided`&&!this.timeline.playing);if(t.update(this.ctx,r,this.timeline.chapter.focus),this.focusTimer-=e,this.focusTimer<=0){this.focusTimer=.12;let e=null;this.mode===`free`&&!this.panelOpen&&!this.paused&&(e=t.focusCenter(n)?.id??null),e!==this.focusId&&(this.focusId=e,this.ui.setFocus(e))}this.uiTimer-=e;let i=this.mode===`guided`?this.timeline.activeCue:null,a=i?`${this.timeline.index}:${i.key}`:``;a!==this.lastCueKey&&(this.lastCueKey=a,this.ui.setCaption(i?this.captionFor(i):null)),this.uiTimer<=0&&(this.uiTimer=.25,this.mode===`guided`&&this.ui.setGuidedState(this.timeline.playing,this.timeline.progress))}captionFor(e){let t=G().content.chapters[this.timeline.chapter.id];return{kind:e.kind,text:t.cues[e.key]??``,refs:e.refs,bible:e.bible}}enterIntro(){this.mode=`intro`,this.timeline.mode=`guided`,this.timeline.playing=!1,this.timeline.goTo(0,`snap`),this.arkSolver.snap(this.timeline.env,this.time),this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`intro`),this.ui.setChapter(0),this.ui.showIntro(),this.refreshLookHint()}start(e){this.unlockAudio(),e===`guided`?this.setGuided(0):this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.arkSolver.snap(this.timeline.env,this.time),this.enterFree(!0)}),this.settings.seenHelp||(this.settings.seenHelp=!0,ru(this.settings),e===`free`&&this.ui.openHelp())}setGuided(e){this.mode=`guided`,this.timeline.mode=`guided`,this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.timeline.goTo(e,`smooth`,0),this.timeline.playing=!0,this.director.setChapter(this.timeline.chapter),this.director.blendFromCurrent(this.reducedMotion?1.2:2.5),this.ui.setMode(`guided`),this.ui.setChapter(this.timeline.index),this.refreshLookHint()}enterFree(e){let t=this.player;if(!t)return;this.mode=`free`,this.timeline.mode=`free`,this.timeline.playing=!0,this.ui.setCaption(null),this.lastCueKey=``;let n=!1;if(!e){let e=Math.atan2(-this.camDir().x,-this.camDir().z);n=t.placeAt(this.camera.position,e,0)}n||t.spawn(this.timeline.chapter.spawn),t.enabled=!this.panelOpen,t.setTouchControlsVisible(this.touch),this.ui.setMode(`free`),this.ui.setChapter(this.timeline.index),this.refreshLookHint()}camDir(){return this.camera.getWorldDirection(this.tmpV)}goToChapter(e){let t=this.timeline;if(e<0||e>=t.count)return;let n=e===t.index+1;this.mode===`guided`?n?(t.goTo(e,`smooth`),t.playing=!0,this.director.setChapter(t.chapter),this.director.blendFromCurrent(this.reducedMotion?1:2),this.ui.setChapter(e)):this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.arkSolver.snap(t.env,this.time),this.director.setChapter(t.chapter),this.ui.setChapter(e)}):this.mode===`free`?this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.arkSolver.snap(t.env,this.time),this.player?.spawn(t.chapter.spawn),this.ui.setChapter(e)}):this.mode===`complete`&&this.setGuided(e)}complete(){this.mode=`complete`,this.timeline.playing=!1,this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`complete`),this.ui.showCompletion()}rescueToArk(){this.fadeTransition(()=>{let e=xu.find(e=>e.id===`rising`).spawn;this.player?.spawn(e),this.toast(G().ui.app.toasts.rescued,!0)})}fadeTransition(e){if(this.transitioning)return;this.transitioning=!0;let t=this.reducedMotion?150:450;this.fadeEl.style.transitionDuration=`${t}ms`,this.fadeEl.classList.add(`is-on`),window.setTimeout(()=>{this.disposed||(e(),requestAnimationFrame(()=>{this.fadeEl.classList.remove(`is-on`),window.setTimeout(()=>{this.transitioning=!1},t)}))},t)}pauseExperience(e){this.paused||(this.paused=!0,this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.stopLoop(),this.audio.suspend(),e&&this.ui.setPaused(!0),this.refreshLookHint())}resumeExperience(){this.paused&&(this.paused=!1,this.player&&(this.player.enabled=this.mode===`free`&&!this.panelOpen),this.audio.resume(),this.startLoop(),this.refreshLookHint())}onPanelChanged(e){this.panelOpen=e,e?(this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.mode===`guided`&&this.timeline.playing&&(this.timeline.playing=!1,this.resumeAfterPanel=!0)):(this.player&&(this.player.enabled=this.mode===`free`&&!this.paused),this.resumeAfterPanel&&this.mode===`guided`&&(this.timeline.playing=!0),this.resumeAfterPanel=!1),this.refreshLookHint()}refreshLookHint(){let e=this.player,t=!!e&&this.mode===`free`&&!this.touch&&e.lockSupported&&!e.isLocked&&!this.paused&&!this.panelOpen;this.ui.setLookHint(t)}onTap(e,t){if(this.panelOpen||this.paused||!this.interactions||this.mode!==`guided`&&this.mode!==`free`)return;let n=this.interactions.pickAt(e,t,this.timeline.env);n&&this.ui.openInfo(n)}inspectFocused(){if(this.panelOpen||this.paused||!this.interactions)return;let e=this.interactions.focusCenter(this.timeline.env);e&&(this.player?.exitLock(),this.ui.openInfo(e.id))}onBlocked(e){let t=G().ui.app.toasts;this.toast(e===`deep-water`?t.tooDeep:t.edge)}toast(e,t=!1){let n=performance.now();!t&&n-this.lastToast<2500||(this.lastToast=n,this.ui.toast(e))}async unlockAudio(){if(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),!await this.audio.unlock()&&this.settings.soundEnabled&&this.audio.state===`locked`){let e=()=>{this.audio.unlock()};this.listeners.add(window,`pointerdown`,e,{once:!0}),this.listeners.add(window,`keydown`,e,{once:!0})}}applySettings(e){if(ru(this.settings),(e.includes(`soundEnabled`)||e.includes(`volume`))&&(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),this.settings.soundEnabled&&this.audio.unlock()),e.includes(`reducedMotion`)&&(this.reducedMotion=au(this.settings)),e.includes(`quality`)){let e=this.settings.quality===`auto`?Zl(null):this.settings.quality;this.applyQuality(Yl[e])}}applyQuality(e){let t=this.renderer,n=this.m;if(!t||!n||e===this.quality)return;let r=e.terrainSegments!==this.quality.terrainSegments||e.vegetationDensity!==this.quality.vegetationDensity,i=e.shadows!==this.quality.shadows;this.quality=e,this.ctx.quality=e,this.dynRes?.setProfile(e),this.camera.far=e.drawDistance,this.camera.updateProjectionMatrix(),t.shadowMap.enabled=e.shadows,i&&this.scene.traverse(e=>{if(e instanceof vi){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}}),n.atmosphere.setQuality?.(e),n.water.setQuality?.(e),r&&this.toast(G().ui.app.toasts.qualityReload,!0)}createHandlers(){return{start:e=>this.start(e),pauseChanged:e=>e?this.pauseExperience(!1):this.resumeExperience(),restartChapter:()=>{this.resumeExperience(),this.mode===`guided`||this.mode===`complete`?this.setGuidedReplay():this.mode===`free`&&this.goToChapterForce(this.timeline.index)},restartExperience:()=>{this.resumeExperience(),this.mode===`free`?this.goToChapterForce(0):this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.arkSolver.snap(this.timeline.env,this.time),this.setGuided(0)})},toIntro:()=>{this.resumeExperience(),this.fadeTransition(()=>this.enterIntro())},selectChapter:e=>{this.resumeExperience(),this.mode===`intro`?(this.fadeTransition(()=>{this.timeline.goTo(e,`snap`),this.arkSolver.snap(this.timeline.env,this.time),this.setGuided(e)}),this.unlockAudio()):this.goToChapter(e)},togglePlay:()=>{this.mode===`guided`&&(this.timeline.ended&&this.timeline.isLast||(this.timeline.playing=!this.timeline.playing,this.ui.setGuidedState(this.timeline.playing,this.timeline.progress)))},next:()=>{this.timeline.isLast?this.complete():this.goToChapter(this.timeline.index+1)},prev:()=>this.goToChapter(this.timeline.index-1),replay:()=>this.setGuidedReplay(),exploreHere:()=>{this.resumeExperience(),this.enterFree(!1);let e=this.player;e&&e.enabled&&e.lockSupported&&!this.touch&&e.requestLock()},watchGuided:()=>{this.resumeExperience(),this.setGuided(this.timeline.index)},exitToSite:()=>this.exitToSite(),settingsChanged:(e,t)=>{Object.assign(this.settings,e),this.applySettings(t)},panelChanged:e=>this.onPanelChanged(e),inspect:()=>{this.focusId&&this.ui.openInfo(this.focusId)},requestLook:()=>{this.mode===`free`&&this.player&&!this.panelOpen&&(this.player.enabled=!0,this.player.requestLock())}}}setGuidedReplay(){this.fadeTransition(()=>{let e=this.timeline.index;this.timeline.goTo(e,`snap`),this.arkSolver.snap(this.timeline.env,this.time),this.setGuided(e)})}goToChapterForce(e){let t=this.timeline;this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.arkSolver.snap(t.env,this.time),this.player?.spawn(t.chapter.spawn),this.ui.setChapter(e)})}exitToSite(){let e=this.opts.mainSiteUrl;this.dispose(),window.location.assign(e)}placeAttractCamera(e){let t=2.3+e*(this.reducedMotion?.004:.012),n=K.center[0]-60,r=K.center[1]-80,i=n+Math.cos(t)*330,a=r+Math.sin(t)*330,o=Math.max(Cd(i,a)+40,85);this.camera.position.set(i,o,a),this.camera.up.set(0,1,0),this.camera.lookAt(n,30,r-60),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix())}attachGlobalListeners(){this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.listeners.add(window,`orientationchange`,()=>window.setTimeout(()=>this.resize(),250)),this.listeners.add(document,`visibilitychange`,()=>{document.hidden?this.mode===`guided`||this.mode===`free`?this.pauseExperience(!0):(this.stopLoop(),this.audio.suspend()):this.paused||(this.audio.resume(),this.startLoop())}),this.listeners.add(window,`pagehide`,()=>this.audio.suspend());let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`);if(e){let t=()=>{this.reducedMotion=au(this.settings)};e.addEventListener(`change`,t),this.listenersCleanup.push(()=>e.removeEventListener(`change`,t))}let t=this.renderer?.domElement;t&&this.listeners.add(t,`webglcontextlost`,e=>{e.preventDefault(),this.stopLoop(),this.audio.suspend(),this.ui.showFallback(`context-lost`)})}resize(){let e=this.renderer;if(!e)return;let t=Math.max(1,this.root.clientWidth),n=Math.max(1,this.root.clientHeight);e.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}dispose(){if(this.disposed)return;this.disposed=!0,this.stopLoop(),this.listeners.removeAll();for(let e of this.listenersCleanup.splice(0))e();this.resizeObserver?.disconnect(),this.player?.dispose(),this.interactions?.dispose(),this.audio.dispose();let e=this.m;if(e){for(let t of[e.terrain,e.vegetation,e.settlement,e.figures,e.ark,e.atmosphere,e.water,e.bigWave,e.springs])try{t.dispose()}catch(e){console.warn(`[noahs-flood] dispose failed`,e)}e.landmarks.dispose()}this.heightTex?.texture.dispose(),this.scene.clear(),this.renderer?.dispose(),this.renderer?.domElement.remove(),this.renderer=null,this.ui.dispose()}debug(){let e=this;return{timeline:this.timeline,ark:this.arkSolver.pose,camera:this.camera,scene:this.scene,get renderer(){return e.renderer},get modules(){return e.m},get player(){return e.player},get interactions(){return e.interactions},get audio(){return e.audio},mode:()=>this.mode,goTo:e=>this.goToChapter(e),start:e=>this.start(e),setTime:e=>{this.timeline.time=e},setMode:e=>this.ui.setMode(e),view:(e,t)=>{this.debugView=e&&t?{pos:e,look:t}:null},info:e=>this.ui.openInfo(e),step:(e=1,t=16.7)=>{for(let n=0;n<e;n++)this.frame(this.lastNow+t)},chapterAt:(e,t)=>{this.timeline.goTo(e,`snap`,t*xu[e].duration),this.timeline.playing=!1,this.arkSolver.snap(this.timeline.env,this.time)}}}};function Nm(){try{let e=document.createElement(`canvas`).getContext(`webgl2`,{failIfMajorPerformanceCaveat:!1});return{ok:!!e,gl:e}}catch{return{ok:!1,gl:null}}}function Pm(e){try{e?.getExtension(`WEBGL_lose_context`)?.loseContext()}catch{}}var Fm=`/`,Im=document.getElementById(`app`);if(Im){let e=new Mm(Im,{mainSiteUrl:Fm});e.boot(),new URLSearchParams(window.location.search).has(`debug`)&&(window.__noah=e.debug()),window.addEventListener(`pagehide`,t=>{t.persisted||e.dispose()})}