(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,M=1022,N=1023,ee=1026,P=1027,te=1028,ne=1029,re=1030,ie=1031,ae=1033,oe=33776,se=33777,ce=33778,F=33779,le=35840,ue=35841,de=35842,fe=35843,pe=36196,me=37492,he=37496,ge=37488,_e=37489,ve=37490,ye=37491,be=37808,xe=37809,Se=37810,Ce=37811,we=37812,Te=37813,Ee=37814,De=37815,Oe=37816,ke=37817,Ae=37818,je=37819,Me=37820,I=37821,Ne=36492,Pe=36494,Fe=36495,L=36283,Ie=36284,R=36285,Le=36286,Re=2300,ze=2301,Be=2302,Ve=2303,He=2400,Ue=2401,We=2402,Ge=3200,Ke=`srgb`,qe=`srgb-linear`,Je=`linear`,Ye=`srgb`,Xe=7680,Ze=35044,Qe=35048,$e=2e3;function et(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function rt(){let e=nt(`canvas`);return e.style.display=`block`,e}var it={};function at(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ot(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=ot(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=ot(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function st(...e){let t=e.join(` `);t in it||(it[t]=!0,z(...e))}function ct(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var lt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ut=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},dt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ft=1234567,pt=Math.PI/180,mt=180/Math.PI;function ht(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dt[e&255]+dt[e>>8&255]+dt[e>>16&255]+dt[e>>24&255]+`-`+dt[t&255]+dt[t>>8&255]+`-`+dt[t>>16&15|64]+dt[t>>24&255]+`-`+dt[n&63|128]+dt[n>>8&255]+`-`+dt[n>>16&255]+dt[n>>24&255]+dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toLowerCase()}function gt(e,t,n){return Math.max(t,Math.min(n,e))}function _t(e,t){return(e%t+t)%t}function vt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function yt(e,t,n){return e===t?0:(n-e)/(t-e)}function bt(e,t,n){return(1-n)*e+n*t}function xt(e,t,n,r){return bt(e,t,1-Math.exp(-n*r))}function St(e,t=1){return t-Math.abs(_t(e,t*2)-t)}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Et(e,t){return e+Math.random()*(t-e)}function Dt(e){return e*(.5-Math.random())}function Ot(e){e!==void 0&&(ft=e);let t=ft+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kt(e){return e*pt}function At(e){return e*mt}function jt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Lt={DEG2RAD:pt,RAD2DEG:mt,generateUUID:ht,clamp:gt,euclideanModulo:_t,mapLinear:vt,inverseLerp:yt,lerp:bt,damp:xt,pingpong:St,smoothstep:Ct,smootherstep:wt,randInt:Tt,randFloat:Et,randFloatSpread:Dt,seededRandom:Ot,degToRad:kt,radToDeg:At,isPowerOfTwo:jt,ceilPowerOfTwo:Mt,floorPowerOfTwo:Nt,setQuaternionFromProperEuler:Pt,normalize:It,denormalize:Ft};o=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=V,e.prototype.isVector2=!0;var Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=H,t.prototype.isVector3=!0;var zt=new H,Bt=new Rt,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return st(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return st(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return st(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=U,n.prototype.isMatrix3=!0;var Vt=new U,Ht=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Je:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return st(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return st(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[qe]:{primaries:t,whitePoint:r,transfer:Je,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),e}var Gt=Wt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=nt(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=nt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=ht(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new H,tn=class e extends ut{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=N,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=ht(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var nn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=nn,r.prototype.isVector4=!0;var rn=class extends ut{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=new tn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},cn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ln.setFromMatrixColumn(e,0).length(),i=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dn,e,fn)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pn.crossVectors(n,hn),pn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pn.crossVectors(n,hn)),pn.normalize(),mn.crossVectors(hn,pn),r[0]=pn.x,r[4]=mn.x,r[8]=hn.x,r[1]=pn.y,r[5]=mn.y,r[9]=hn.y,r[2]=pn.z,r[6]=mn.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ln.set(r[0],r[1],r[2]).length(),o=ln.set(r[4],r[5],r[6]).length(),s=ln.set(r[8],r[9],r[10]).length();i<0&&(a=-a),un.copy(this);let c=1/a,l=1/o,u=1/s;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=$e,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=$e,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=cn,i.prototype.isMatrix4=!0;var ln=new H,un=new cn,dn=new H(0,0,0),fn=new H(1,1,1),pn=new H,mn=new H,hn=new H,gn=new cn,_n=new Rt,vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _n.setFromEuler(this),this.setFromQuaternion(_n,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER=`XYZ`;var yn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bn=0,xn=new H,Sn=new Rt,Cn=new cn,wn=new H,Tn=new H,En=new H,Dn=new Rt,On=new H(1,0,0),kn=new H(0,1,0),An=new H(0,0,1),jn={type:`added`},Mn={type:`removed`},Nn={type:`childadded`,child:null},Pn={type:`childremoved`,child:null},Fn=class e extends ut{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=ht(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new vn,r=new Rt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new U}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(On,e)}rotateY(e){return this.rotateOnAxis(kn,e)}rotateZ(e){return this.rotateOnAxis(An,e)}translateOnAxis(e,t){return xn.copy(e).applyQuaternion(this.quaternion),this.position.add(xn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(On,e)}translateY(e){return this.translateOnAxis(kn,e)}translateZ(e){return this.translateOnAxis(An,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wn.copy(e):wn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tn,wn,this.up):Cn.lookAt(wn,Tn,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Cn),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,En),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Fn.DEFAULT_UP=new H(0,1,0),Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ln={type:`move`},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=_t(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hn(i,r,e+1/3),this.g=Hn(i,r,e),this.b=Hn(i,r,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ke){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=zn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return Gt.workingToColorSpace(Un.copy(this),e),Math.round(gt(Un.r*255,0,255))*65536+Math.round(gt(Un.g*255,0,255))*256+Math.round(gt(Un.b*255,0,255))}getHexString(e=Ke){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Un.copy(this),t);let n=Un.r,r=Un.g,i=Un.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Ke){Gt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,r=Un.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vn);let n=bt(Bn.h,Vn.h,t),r=bt(Bn.s,Vn.s,t),i=bt(Bn.l,Vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new W;W.NAMES=zn;var Wn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Gn=class extends Fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new H,tr=new H,nr=new nn,rr=new nn,ir=new nn,ar=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kn.subVectors(r,t),qn.subVectors(n,t),Jn.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(qn),s=Kn.dot(Jn),c=qn.dot(qn),l=qn.dot(Jn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yn.x),s.addScaledVector(a,Yn.y),s.addScaledVector(o,Yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return nr.setScalar(0),rr.setScalar(0),ir.setScalar(0),nr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ir,i.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),qn.subVectors(e,t),Kn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Kn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xn.subVectors(r,n),Zn.subVectors(i,n),$n.subVectors(e,n);let s=Xn.dot($n),c=Zn.dot($n);if(s<=0&&c<=0)return t.copy(n);er.subVectors(e,r);let l=Xn.dot(er),u=Zn.dot(er);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xn,a);tr.subVectors(e,i);let f=Xn.dot(tr),p=Zn.dot(tr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},or=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,cr):cr.fromBufferAttribute(r,t),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_r.subVectors(this.max,gr),ur.subVectors(e.a,gr),dr.subVectors(e.b,gr),fr.subVectors(e.c,gr),pr.subVectors(dr,ur),mr.subVectors(fr,dr),hr.subVectors(ur,fr);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-hr.z,hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,hr.z,0,-hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-hr.y,hr.x,0];return!br(t,ur,dr,fr,_r)||(t=[1,0,0,0,1,0,0,0,1],!br(t,ur,dr,fr,_r))?!1:(vr.crossVectors(pr,mr),t=[vr.x,vr.y,vr.z],br(t,ur,dr,fr,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new H,new H,new H,new H,new H,new H,new H,new H],cr=new H,lr=new or,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H,yr=new H;function br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yr.fromArray(e,a);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),s=t.dot(yr),c=n.dot(yr),l=r.dot(yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xr=new H,Sr=new V,Cr=0,wr=class extends ut{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ze,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Er=class extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dr=class extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new or,kr=new H,Ar=new H,jr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new cn,Pr=new Fn,Fr=new H,Ir=new or,Lr=new or,Rr=new H,zr=class e extends ut{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=ht(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(et(e)?Er:Tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new wr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=new H,Vr=new H,Hr=new U,Ur=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Br.subVectors(n,t).cross(Vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Br),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hr.getNormalMatrix(e),r=this.coplanarPoint(Br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wr=0,Gr=class extends ut{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=ht(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xe,this.stencilZFail=Xe,this.stencilZPass=Xe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ur().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Kr=new H,qr=new H,Jr=new H,Yr=new H,Xr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kr.copy(this.origin).addScaledVector(this.direction,t),Kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(qr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Yr.dot(this.direction),s=-Yr.dot(Jr),c=Yr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qr).addScaledVector(Jr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Kr.subVectors(e.center,this.origin);let n=Kr.dot(this.direction),r=Kr.dot(Kr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,te=1/w,ne=T-ee*D,re=E-P*D,ie=O-ee*A,ae=k-P*A,oe=j-ee*N,se=M-P*N,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=te*(ce*D+F*A+le*N);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zr=class extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qr=new cn,$r=new Xr,ei=new jr,ti=new H,ni=new H,ri=new H,ii=new H,ai=new H,oi=new H,si=new H,ci=new H,li=class extends Fn{constructor(e=new zr,t=new Zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){oi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ai.fromBufferAttribute(s,e),a?oi.addScaledVector(ai,r):oi.addScaledVector(ai.sub(t),r))}t.add(oi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(i),$r.copy(e.ray).recast(e.near),!(ei.containsPoint($r.origin)===!1&&($r.intersectSphere(ei,ti)===null||$r.origin.distanceToSquared(ti)>(e.far-e.near)**2))&&(Qr.copy(i).invert(),$r.copy(e.ray).applyMatrix4(Qr),(n.boundingBox===null||$r.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=di(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=di(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=di(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=di(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ui(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ci.copy(s),ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ci);return l<n.near||l>n.far?null:{distance:l,point:ci.clone(),object:e}}function di(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ni),e.getVertexPosition(c,ri),e.getVertexPosition(l,ii);let u=ui(e,t,n,r,ni,ri,ii,si);if(u){let e=new H;ar.getBarycoord(si,ni,ri,ii,e),i&&(u.uv=ar.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=ar.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=ar.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};ar.getNormal(ni,ri,ii,t.normal),u.face=t,u.barycoord=e}return u}var fi=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class extends wr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mi=new cn,hi=new cn,gi=[],_i=new or,vi=new cn,yi=new li,bi=new jr,xi=class extends li{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),_i.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(_i)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),bi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(bi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(n),e.ray.intersectsSphere(bi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,mi),hi.multiplyMatrices(n,mi),yi.matrixWorld=hi,yi.raycast(e,gi);for(let e=0,n=gi.length;e<n;e++){let n=gi[e];n.instanceId=i,n.object=this,t.push(n)}gi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(r*this.count),r,this.count,te,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Si=new jr,Ci=new V(.5,.5),wi=new H,Ti=class{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,i=new Ur,a=new Ur){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$e,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476+Ci.distanceTo(e.center),Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(wi.x=r.normal.x>0?e.max.x:e.min.x,wi.y=r.normal.y>0?e.max.y:e.min.y,wi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ei=class extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Di=new H,Oi=new H,ki=new cn,Ai=new Xr,ji=new jr,Mi=new H,Ni=new H,Pi=class extends Fn{constructor(e=new zr,t=new Ei){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Di.fromBufferAttribute(t,e-1),Oi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Di.distanceTo(Oi);e.setAttribute(`lineDistance`,new Dr(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),ji.radius+=i,e.ray.intersectsSphere(ji)===!1)return;ki.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(ki);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Fi(this,e,Ai,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Fi(this,e,Ai,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Fi(this,e,Ai,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Fi(this,e,Ai,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Di.fromBufferAttribute(s,i),Oi.fromBufferAttribute(s,a),n.distanceSqToSegment(Di,Oi,Mi,Ni)>r)return;Mi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Mi);if(!(c<t.near||c>t.far))return{distance:c,point:Ni.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ii=new H,Li=new H,Ri=class extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ii.fromBufferAttribute(t,e),Li.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ii.distanceTo(Li);e.setAttribute(`lineDistance`,new Dr(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},zi=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends tn{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ee,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vi=class extends Bi{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ee){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hi=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wi=class e extends zr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Dr(u,3)),this.setAttribute(`normal`,new Dr(d,3)),this.setAttribute(`uv`,new Dr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class e extends Wi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class e extends zr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Dr(i,3)),this.setAttribute(`normal`,new Dr(i.slice(),3)),this.setAttribute(`uv`,new Dr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},qi=class e extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ji=class e extends zr{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=gt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Dr(a,3)),this.setAttribute(`uv`,new Dr(o,2)),this.setAttribute(`normal`,new Dr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Yi=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Xi=class e extends zr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if($i(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if($i(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Qi(e){let t={};for(let n=0;n<e.length;n++){let r=Zi(e[n]);for(let e in r)t[e]=r[e]}return t}function $i(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ea(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ta(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var na={clone:Zi,merge:Qi},ra=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ia=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,aa=class extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ra,this.fragmentShader=ia,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=ea(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oa=class extends aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},sa=class extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ca=class extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ge,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ua(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function da(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var fa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},pa=class extends fa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:He,endingEnd:He}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ue:i=e,o=2*t-n;break;case We:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ue:a=e,s=2*n-t;break;case We:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ma=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ha=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ga=class extends fa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ya(n,t,g,y,r);i[p]=_a(x,o,_,b,m)}return i}};function _a(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function va(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ya(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=_a(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=va(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ba=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),da(e.settings)&&(n.settings={inTangents:ua(e.settings.inTangents,Array),outTangents:ua(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Re:t=this.InterpolantFactoryMethodDiscrete;break;case ze:t=this.InterpolantFactoryMethodLinear;break;case Be:t=this.InterpolantFactoryMethodSmooth;break;case Ve:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Re;case this.InterpolantFactoryMethodLinear:return ze;case this.InterpolantFactoryMethodSmooth:return Be;case this.InterpolantFactoryMethodBezier:return Ve}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;da(this.settings)&&(xa(this.settings.inTangents,e),xa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&tt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Be,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,da(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function xa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ba.prototype.ValueTypeName=``,ba.prototype.TimeBufferType=Float32Array,ba.prototype.ValueBufferType=Float32Array,ba.prototype.DefaultInterpolation=ze;var Sa=class extends ba{constructor(e,t,n){super(e,t,n)}};Sa.prototype.ValueTypeName=`bool`,Sa.prototype.ValueBufferType=Array,Sa.prototype.DefaultInterpolation=Re,Sa.prototype.InterpolantFactoryMethodLinear=void 0,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};Ca.prototype.ValueTypeName=`color`;var wa=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`number`;var Ta=class extends fa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ea=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName=`quaternion`,Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends ba{constructor(e,t,n){super(e,t,n)}};Da.prototype.ValueTypeName=`string`,Da.prototype.ValueBufferType=Array,Da.prototype.DefaultInterpolation=Re,Da.prototype.InterpolantFactoryMethodLinear=void 0,Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends ba{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName=`vector`;var ka=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Aa=class extends ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ja=new cn,Ma=new H,Na=new H,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ma.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ma),Na.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Na),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fa=new H,Ia=new Rt,La=new H,Ra=class extends Fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Ia,La),La.x===1&&La.y===1&&La.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ia,La.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fa,Ia,La),La.x===1&&La.y===1&&La.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ia,La.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},za=new H,Ba=new V,Va=new V,Ha=class extends Ra{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mt*2*Math.atan(Math.tan(pt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,t){return this.getViewBounds(e,Ba,Va),t.subVectors(Va,Ba)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ua=class extends Ra{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wa=class extends Pa{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ga=class extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Wa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ka=class extends zr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},qa=-90,Ja=1,Ya=class extends Fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ha(qa,Ja,e,t);r.layers=this.layers,this.add(r);let i=new Ha(qa,Ja,e,t);i.layers=this.layers,this.add(i);let a=new Ha(qa,Ja,e,t);a.layers=this.layers,this.add(a);let o=new Ha(qa,Ja,e,t);o.layers=this.layers,this.add(o);let s=new Ha(qa,Ja,e,t);s.layers=this.layers,this.add(s);let c=new Ha(qa,Ja,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xa=class extends Ha{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Za=`\\[\\]\\.:\\/`,Qa=RegExp(`[\\[\\]\\.:\\/]`,`g`),$a=`[^\\[\\]\\.:\\/]`,eo=`[^`+Za.replace(`\\.`,``)+`]`,to=`((?:WC+[\\/:])*)`.replace(`WC`,$a),no=`(WCOD+)?`.replace(`WCOD`,eo),ro=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,$a),io=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,$a),ao=RegExp(`^`+to+no+ro+io+`$`),oo=[`material`,`materials`,`bones`,`map`],so=class{constructor(e,t,n){let r=n||co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Qa,``)}static parseTrackName(e){let t=ao.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);oo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};co.Composite=so,co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},co.prototype.GetterByBindingType=[co.prototype._getValue_direct,co.prototype._getValue_array,co.prototype._getValue_arrayElement,co.prototype._getValue_toArray],co.prototype.SetterByBindingTypeAndVersioning=[[co.prototype._setValue_direct,co.prototype._setValue_direct_setNeedsUpdate,co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[co.prototype._setValue_array,co.prototype._setValue_array_setNeedsUpdate,co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[co.prototype._setValue_arrayElement,co.prototype._setValue_arrayElement_setNeedsUpdate,co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[co.prototype._setValue_fromArray,co.prototype._setValue_fromArray_setNeedsUpdate,co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lo=new cn,uo=class{constructor(e,t,n=0,r=1/0){this.ray=new Xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return lo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lo),this}intersectObject(e,t=!0,n=[]){return po(e,this,n,t),n.sort(fo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)po(e[r],this,n,t);return n.sort(fo),n}};function fo(e,t){return e.distance-t.distance}function po(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)po(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function mo(e,t,n,r){let i=ho(r);switch(n){case j:return e*t;case te:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case ae:return e*t*4/i.components*i.byteLength;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:case fe:return Math.max(e,16)*Math.max(t,8)/4;case le:case de:return Math.max(e,8)*Math.max(t,8)/2;case pe:case me:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case he:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case I:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ne:case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case L:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*8;case R:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ho(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function go(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _o(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},vo={basic:{uniforms:Qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:Qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:Qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:Qi([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:Qi([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:Qi([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:Qi([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:Qi([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:Qi([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:Qi([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:Qi([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:Qi([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:Qi([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};vo.physical={uniforms:Qi([vo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var yo={r:0,b:0,g:0},bo=new cn,xo=new U;xo.set(-1,0,0,0,1,0,0,0,1);function So(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new li(new Ui(1,1,1),new aa({name:`BackgroundCubeMaterial`,uniforms:Zi(vo.backgroundCube.uniforms),vertexShader:vo.backgroundCube.vertexShader,fragmentShader:vo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xo),l.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Ye,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new li(new Yi(2,2),new aa({name:`BackgroundMaterial`,uniforms:Zi(vo.background.uniforms),vertexShader:vo.background.vertexShader,fragmentShader:vo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Ye,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(yo,ta(e)),n.buffers.color.setClear(yo.r,yo.g,yo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Co(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function To(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Eo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ur,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Do=4,Oo=6,ko=20,Ao=256,jo=new Ua,Mo=new W,No=null,Po=0,Fo=0,Io=!1,Lo=new H,Ro=new H,zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Lo}=i;No=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Po,Fo),this._renderer.xr.enabled=Io,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:N,colorSpace:qe,depthBuffer:!1},r=Vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bo(r)),this._blurMaterial=Wo(r,e,t),this._ggxMaterial=Uo(r,e,t)}return r}_compileMaterial(e){let t=new li(new zr,e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,r,i){let a=new Ha(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Mo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new Ui,new Zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Mo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ho(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ho(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Do?n-d+Do:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ho(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,jo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ho(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,jo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ho(t,3*l*(r>this._lodMax-Do?r-this._lodMax+Do:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,jo)}};function Bo(e){let t=[],n=[],r=e,i=e-Do+1+Oo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ro.set(1,r,n):e===1?Ro.set(-n,1,-r):e===2?Ro.set(-n,r,1):e===3?Ro.set(-1,r,-n):e===4?Ro.set(-n,-1,r):Ro.set(n,r,-1),Ro.toArray(l,(e*6+t)*3)}}let u=new zr;u.setAttribute(`position`,new wr(c,3)),u.setAttribute(`outputDirection`,new wr(l,3)),n.push(new li(u,null)),r>Do&&r--}return{lodMeshes:n,sizeLods:t}}function Vo(e,t,n){let r=new an(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ho(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Uo(e,t,n){return new aa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ao,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wo(e,t,n){return new aa({name:`SphericalGaussianBlur`,defines:{SAMPLES:ko,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return new aa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(){return new aa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jo=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),i=new aa({name:`CubemapFromEquirect`,uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new li(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new Ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Yo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Jo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new zo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new zo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Xo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&st(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Zo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Er:Tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $o(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function es(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ts(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ns={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function rs(e,t,n,r,i,a){let o=new an(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new zr;l.setAttribute(`position`,new Dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Dr([0,2,0,0,2,0],2));let u=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new li(l,u),f=new Ua(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new an(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new an(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Gt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ns[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var is=new tn,as=new Bi(1,1),os=new on,ss=new sn,cs=new zi,ls=[],us=[],ds=new Float32Array(16),fs=new Float32Array(9),ps=new Float32Array(4);function ms(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ls[i];if(a===void 0&&(a=new Float32Array(i),ls[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _s(e,t){let n=us[t];n===void 0&&(n=new Int32Array(t),us[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2fv(this.addr,t),gs(n,t)}}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hs(n,t))return;e.uniform3fv(this.addr,t),gs(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4fv(this.addr,t),gs(n,t)}}function Ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;ps.set(r),e.uniformMatrix2fv(this.addr,!1,ps),gs(n,r)}}function Cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;fs.set(r),e.uniformMatrix3fv(this.addr,!1,fs),gs(n,r)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gs(n,t)}else{if(hs(n,r))return;ds.set(r),e.uniformMatrix4fv(this.addr,!1,ds),gs(n,r)}}function Ts(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2iv(this.addr,t),gs(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hs(n,t))return;e.uniform3iv(this.addr,t),gs(n,t)}}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4iv(this.addr,t),gs(n,t)}}function ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hs(n,t))return;e.uniform2uiv(this.addr,t),gs(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hs(n,t))return;e.uniform3uiv(this.addr,t),gs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hs(n,t))return;e.uniform4uiv(this.addr,t),gs(n,t)}}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(as.compareFunction=n.isReversedDepthBuffer()?518:515,a=as):a=is,n.setTexture2D(t||a,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ss,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||cs,i)}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||os,i)}function Ls(e){switch(e){case 5126:return vs;case 35664:return ys;case 35665:return bs;case 35666:return xs;case 35674:return Ss;case 35675:return Cs;case 35676:return ws;case 5124:case 35670:return Ts;case 35667:case 35671:return Es;case 35668:case 35672:return Ds;case 35669:case 35673:return Os;case 5125:return ks;case 36294:return As;case 36295:return js;case 36296:return Ms;case 35678:case 36198:case 36298:case 36306:case 35682:return Ns;case 35679:case 36299:case 36307:return Ps;case 35680:case 36300:case 36308:case 36293:return Fs;case 36289:case 36303:case 36311:case 36292:return Is}}function Rs(e,t){e.uniform1fv(this.addr,t)}function zs(e,t){let n=ms(t,this.size,2);e.uniform2fv(this.addr,n)}function Bs(e,t){let n=ms(t,this.size,3);e.uniform3fv(this.addr,n)}function Vs(e,t){let n=ms(t,this.size,4);e.uniform4fv(this.addr,n)}function Hs(e,t){let n=ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Us(e,t){let n=ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ws(e,t){let n=ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gs(e,t){e.uniform1iv(this.addr,t)}function Ks(e,t){e.uniform2iv(this.addr,t)}function qs(e,t){e.uniform3iv(this.addr,t)}function Js(e,t){e.uniform4iv(this.addr,t)}function Ys(e,t){e.uniform1uiv(this.addr,t)}function Xs(e,t){e.uniform2uiv(this.addr,t)}function Zs(e,t){e.uniform3uiv(this.addr,t)}function Qs(e,t){e.uniform4uiv(this.addr,t)}function $s(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?as:is;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ss,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||cs,a[e])}function nc(e,t,n){let r=this.cache,i=t.length,a=_s(n,i);hs(r,a)||(e.uniform1iv(this.addr,a),gs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||os,a[e])}function rc(e){switch(e){case 5126:return Rs;case 35664:return zs;case 35665:return Bs;case 35666:return Vs;case 35674:return Hs;case 35675:return Us;case 35676:return Ws;case 5124:case 35670:return Gs;case 35667:case 35671:return Ks;case 35668:case 35672:return qs;case 35669:case 35673:return Js;case 5125:return Ys;case 36294:return Xs;case 36295:return Zs;case 36296:return Qs;case 35678:case 36198:case 36298:case 36306:case 35682:return $s;case 35679:case 36299:case 36307:return ec;case 35680:case 36300:case 36308:case 36293:return tc;case 36289:case 36303:case 36311:case 36292:return nc}}var ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ls(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rc(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function cc(e,t){e.seq.push(t),e.map[t.id]=t}function lc(e,t,n){let r=e.name,i=r.length;for(sc.lastIndex=0;;){let a=sc.exec(r),o=sc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){cc(n,l===void 0?new ic(s,e,t):new ac(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oc(s),cc(n,e)),n=e}}}var uc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);lc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function dc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fc=37297,pc=0;function mc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var hc=new U;function gc(e){Gt._getMatrix(hc,Gt.workingColorSpace,e);let t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(e)){case Je:return[t,`LinearTransferOETF`];case Ye:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function _c(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mc(e.getShaderSource(t),r)}return i}function vc(e,t){let n=gc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var yc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function bc(e,t){let n=yc[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var xc=new H;function Sc(){return Gt.getLuminanceCoefficients(xc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${xc.x.toFixed(4)}, ${xc.y.toFixed(4)}, ${xc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Cc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ec).join(`
`)}function wc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Tc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ec(e){return e!==``}function Dc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(e){return e.replace(kc,Mc)}var jc=new Map;function Mc(e,t){let n=G[t];if(n===void 0){let e=jc.get(t);if(e!==void 0)n=G[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ac(n)}var Nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(e){return e.replace(Nc,Fc)}function Fc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ic(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Lc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Rc(e){return Lc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var zc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Bc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:zc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Vc={302:`ENVMAP_MODE_REFRACTION`};function Hc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Vc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Uc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Wc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Uc[e.combine]||`ENVMAP_BLENDING_NONE`}function Gc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Kc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Rc(n),l=Bc(n),u=Hc(n),d=Wc(n),f=Gc(n),p=Cc(n),m=wc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ec).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ec).join(`
`),_.length>0&&(_+=`
`)):(g=[Ic(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ec).join(`
`),_=[Ic(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:bc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,vc(`linearToOutputTexel`,n.outputColorSpace),Sc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ec).join(`
`)),o=Ac(o),o=Dc(o,n),o=Oc(o,n),s=Ac(s),s=Dc(s,n),s=Oc(s,n),o=Pc(o),s=Pc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=dc(i,i.VERTEX_SHADER,y),S=dc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=_c(i,x,`vertex`),n=_c(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new uc(i,h),T=Tc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var qc=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yc(e),t.set(e,n)),n}},Yc=class{constructor(e){this.id=qc++,this.code=e,this.usedTimes=0}};function Xc(e){return e===1030||e===37490||e===36285}function Zc(e,t,n,r,i,a){let o=new yn,s=new Jc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=vo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,P=!!i.map,te=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Xc(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=vo[t];n=na.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Kc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Qc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function $c(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function el(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function tl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||$c),r.length>1&&r.sort(t||el),i.length>1&&i.sort(t||el)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function nl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new tl,e.set(t,[i])):n>=r.length?(i=new tl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function rl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function il(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var al=0;function ol(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function sl(e){let t=new rl,n=il(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new cn,o=new cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ol);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=al++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function cl(e){let t=new sl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ll(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new cl(e),t.set(n,[a])):r>=i.length?(a=new cl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ul=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dl=`uniform sampler2D shadow_pass;
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
}`,fl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],pl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ml=new cn,hl=new H,gl=new H;function _l(e,t,n){let r=new Ti,i=new V,a=new V,o=new nn,s=new ca,c=new la,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:ul,fragmentShader:dl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new zr;g.setAttribute(`position`,new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new li(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:re,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Bi(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ee,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Jo(i.x),d.map.depthTexture=new Vi(i.x,C)):(d.map=new an(i.x,i.y),d.map.depthTexture=new Bi(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ee,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),hl.setFromMatrixPosition(l.matrixWorld),e.position.copy(hl),gl.copy(e.position),gl.add(fl[t]),e.up.copy(pl[t]),e.lookAt(gl),e.updateMatrixWorld(),n.makeTranslation(-hl.x,-hl.y,-hl.z),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ml,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new an(i.x,i.y,{format:re,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vl(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=lt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new nn().fromArray(re),oe=new nn().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(N&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function Ce(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Re}}function yl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):nt(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Je:Gt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ee(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ne(t)}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&te(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function te(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ne(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(t,i){let a=r.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},pe={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ce(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Ne(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===P,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ve(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=mo(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=mo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Pe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Pe(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ne(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);he(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Pe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,je(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else F(i.depthTexture,0);let u=l.__webglTexture,d=je(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(i.__webglFramebuffer[0],t,0):Ce(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,i){let a=r.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&we(t)}function Ee(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Me(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)xe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),he(c,a),xe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else xe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Oe=[],ke=[];function Ae(t){if(t.samples>0){if(Me(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Oe.length=0,ke.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Oe.push(l),ke.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(i.maxSamples,e.samples)}function Me(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bl(e,t){function n(n,r=``){let i,a=Gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var xl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sl=`
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

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new aa({vertexShader:xl,fragmentShader:Sl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends ut{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Cl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new V,T=null,E=null,D=new Ha;D.viewport=new nn;let k=new Ha;k.viewport=new nn;let A=[D,k],j=new Xa,M=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?P:ee,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new an(d.textureWidth,d.textureHeight,{format:N,type:v,depthTexture:new Bi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:N,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ae=new H,oe=new H;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(M!==j.near||te!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,te=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ce(j,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(j,D,k):j.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),F(e,j,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new Ha,o.layers.enable(n),o.viewport=new nn,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Hi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new go;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Tl=new cn,El=new U;El.set(-1,0,0,0,1,0,0,0,1);function Dl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ta(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Tl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(El),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ol(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var kl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Al=null;function jl(){return Al===null&&(Al=new fi(kl,16,16,re,T),Al.name=`DFG_LUT`,Al.minFilter=h,Al.magFilter=h,Al.wrapS=u,Al.wrapT=u,Al.generateMipmaps=!1,Al.needsUpdate=!0),Al}var Ml=class{constructor(e={}){let{canvas:t=rt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ae,ie,ne]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new H,w=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,ee=!1,P=null,te=null,re=null,oe=null;this._outputColorSpace=Ke;let se=0,ce=0,F=null,le=-1,ue=null,de=new nn,fe=new nn,pe=null,me=new W(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new nn(0,0,ge,_e),Se=new nn(0,0,ge,_e),Ce=!1,we=new Ti,Te=!1,Ee=!1,De=new cn,Oe=new H,ke=new nn,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,Le,Re,ze,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Xe,Ze,Qe,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),B(`WebGLRenderer: `+e.message),e}function it(){Pe=new Xo(I),Pe.init(),et=new bl(I,Pe),Fe=new To(I,Pe,e,et),L=new vl(I,Pe),Fe.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),te=I.createFramebuffer(),re=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new $o(I),R=new Qc,Le=new yl(I,Pe,L,R,Fe,et,Ie),Re=new Yo(N),ze=new _o(I),tt=new Co(I,ze),Be=new Zo(I,ze,Ie,tt),Ve=new ts(I,Be,ze,tt,Ie),Xe=new es(I,Fe,Le),qe=new Eo(R),He=new Zc(N,Re,Pe,Fe,tt,qe),Ue=new Dl(N,R),We=new nl,Ge=new ll(Pe),Ye=new So(N,Re,L,Ve,p,s),Je=new _l(N,Ve,Fe),nt=new Ol(I,Ie,Fe,L),Ze=new wo(I,Pe,Ie),Qe=new Qo(I,Pe,Ie),Ie.programs=He.programs,N.capabilities=Fe,N.extensions=Pe,N.properties=R,N.renderLists=We,N.shadowMap=Je,N.state=L,N.info=Ie}m!==1009&&(M=new rs(m,t.width,t.height,o,r,i));let ot=new wl(N,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){ot.isPresenting?z(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=h.has(t)}if(e){let e=F.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,I.clearBufferiv(I.COLOR,0,b))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Ye.dispose(),We.dispose(),Ge.dispose(),R.dispose(),Re.dispose(),Ve.dispose(),tt.dispose(),nt.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,_t),ot.removeEventListener(`sessionend`,vt),yt.stop()};function st(e){e.preventDefault(),at(`WebGLRenderer: Context Lost.`),ee=!0}function lt(){at(`WebGLRenderer: Context Restored.`),ee=!1;let e=Ie.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;it(),Ie.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function ut(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),R.remove(e)}function pt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=ze.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Te===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),k=Ge.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),P!==null&&P.updateLights(k.state.lightsArray),Ee=this.localClippingEnabled,Te=qe.init(this.clippingPlanes,Ee),Te===!0&&qe.setGlobalState(this.clippingPlanes,t),P!==null&&Je.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),k=j.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new go;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,ot.setAnimationLoop(e),e===null?yt.stop():yt.start()},ot.addEventListener(`sessionstart`,_t),ot.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;P!==null&&P.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=M!==null&&(F===null||n)&&M.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),k=Ge.get(e,j.length),k.init(t),k.state.textureUnits=Le.getTextureUnits(),j.push(k),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,$e,t.reversedDepth),Ee=this.localClippingEnabled,Te=qe.init(this.clippingPlanes,Ee),w=We.get(e,A.length),w.init(),A.push(w),ot.enabled===!0&&ot.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,N.sortObjects)}bt(e,t,0,N.sortObjects),w.finish(),P!==null&&P.updateLights(k.state.lightsArray),N.sortObjects===!0&&w.sort(ye,be),je=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,je&&Ye.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Je.render(i,e,t),Te===!0&&qe.endShadows(),(r&&M.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}je&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(w,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),je&&Ye.render(e),xt(w,e,t)}F!==null&&ce===0&&(Le.updateMultisampleRenderTarget(F),Le.updateRenderTargetMipmap(F)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),tt.resetDefaultState(),le=-1,ue=null,j.pop(),j.length>0?(k=j[j.length-1],Le.setTextureUnits(k.state.textureUnits),Te===!0&&qe.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,P!==null&&P.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ve.update(e),a=e.material;a.visible&&w.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,ke.z,s,t)}}else a.visible&&w.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Te===!0&&qe.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),je&&Ye.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Te===!0&&qe.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(me,he),d!==void 0&&(r.viewport=d),N.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=He.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=uc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=k.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Ot(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,Le),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,Le),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,Le));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=jl()),C){if(T.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&Ue.refreshFogUniforms(E,a),Ue.refreshMaterialUniforms(E,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}uc.upload(I,Et(v),E,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(uc.upload(I,Et(v),E,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=te),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Mt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ct(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,re),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}};function Nl(){return{uTime:{value:0},uSunDir:{value:new H(.4,.6,.5).normalize()},uSunColor:{value:new W(1,.95,.85)},uSkyZenith:{value:new W(.25,.45,.75)},uSkyHorizon:{value:new W(.75,.8,.85)},uFogColor:{value:new W(.75,.8,.85)},uDaylight:{value:1},uNight:{value:0},uWind:{value:new V(.2,.1)},uWet:{value:0},uDust:{value:0}}}function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Pl(e)}function Fl(e,t){if(Pl(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Pl(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Il(e){var t=Fl(e,`string`);return Pl(t)==`symbol`?t:t+``}function q(e,t,n){return(t=Il(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ll={low:{level:`low`,minPixelRatio:.6,maxPixelRatio:1,antialias:!1,shadows:!1,shadowMapSize:512,terrainSegments:220,vegetationDensity:.45,crowdDensity:.55,dustCount:160,rainCount:900,detailOctaves:2,drawDistance:5e3},medium:{level:`medium`,minPixelRatio:.75,maxPixelRatio:1.5,antialias:!0,shadows:!0,shadowMapSize:1024,terrainSegments:300,vegetationDensity:.75,crowdDensity:.8,dustCount:320,rainCount:2e3,detailOctaves:3,drawDistance:7e3},high:{level:`high`,minPixelRatio:1,maxPixelRatio:2,antialias:!0,shadows:!0,shadowMapSize:2048,terrainSegments:380,vegetationDensity:1,crowdDensity:1,dustCount:520,rainCount:3600,detailOctaves:4,drawDistance:9e3}};function Rl(){try{return window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>1}catch{return!1}}function zl(e){let t=navigator,n=t.hardwareConcurrency||4,r=t.deviceMemory??4,i=Rl(),a=Math.min(window.screen.width,window.screen.height)<600,o=``;try{if(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);o=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER)||``).toLowerCase()}}catch{o=``}return/(swiftshader|llvmpipe|software|mali-4|mali-t|adreno \(tm\) [3-5]\d\d|powervr|intel\(r\) hd graphics [2-5]\d{2,3})/.test(o)||r<=2||n<=2||i&&a?`low`:i?`medium`:n>=8&&r>=8?`high`:`medium`}var Bl=class{constructor(e,t){q(this,`renderer`,void 0),q(this,`profile`,void 0),q(this,`avg`,16.7),q(this,`timer`,0),q(this,`current`,void 0),this.renderer=e,this.profile=t,this.current=Math.min(window.devicePixelRatio||1,t.maxPixelRatio),this.renderer.setPixelRatio(this.current)}get pixelRatio(){return this.current}setProfile(e){this.profile=e,this.current=Math.min(window.devicePixelRatio||1,e.maxPixelRatio),this.renderer.setPixelRatio(this.current),this.timer=0}update(e){if(e<=0||e>250||(this.avg+=(e-this.avg)*.05,this.timer+=e,this.timer<1500))return;this.timer=0;let t=Math.min(window.devicePixelRatio||1,this.profile.maxPixelRatio),n=this.current;this.avg>24?n=Math.max(this.profile.minPixelRatio,this.current-.1):this.avg<14&&this.current<t&&(n=Math.min(t,this.current+.05)),Math.abs(n-this.current)>.001&&(this.current=n,this.renderer.setPixelRatio(n))}},Vl=[1,1.5,2],Hl={quality:`auto`,soundEnabled:!0,volume:.5,reducedMotion:`system`,lookSensitivity:1,invertY:!1,hotspots:!0,textScale:1,sensitive:`ask`,seenHelp:!1,playbackSpeed:1},Ul=`battle-of-badr.settings.v1`;function Wl(){let e={...Hl};try{let t=window.localStorage.getItem(Ul);if(!t)return e;let n=JSON.parse(t);(n.quality===`auto`||n.quality===`low`||n.quality===`medium`||n.quality===`high`)&&(e.quality=n.quality),typeof n.soundEnabled==`boolean`&&(e.soundEnabled=n.soundEnabled),typeof n.volume==`number`&&isFinite(n.volume)&&(e.volume=Math.min(1,Math.max(0,n.volume))),(n.reducedMotion===`system`||n.reducedMotion===`on`||n.reducedMotion===`off`)&&(e.reducedMotion=n.reducedMotion),typeof n.lookSensitivity==`number`&&isFinite(n.lookSensitivity)&&(e.lookSensitivity=Math.min(2,Math.max(.4,n.lookSensitivity))),typeof n.invertY==`boolean`&&(e.invertY=n.invertY),typeof n.hotspots==`boolean`&&(e.hotspots=n.hotspots),typeof n.textScale==`number`&&isFinite(n.textScale)&&(e.textScale=Math.min(1.4,Math.max(1,n.textScale))),(n.sensitive===`ask`||n.sensitive===`distant`||n.sensitive===`hidden`)&&(e.sensitive=n.sensitive),typeof n.seenHelp==`boolean`&&(e.seenHelp=n.seenHelp),typeof n.playbackSpeed==`number`&&Vl.includes(n.playbackSpeed)&&(e.playbackSpeed=n.playbackSpeed)}catch{}return e}function Gl(e){try{window.localStorage.setItem(Ul,JSON.stringify(e))}catch{}}function Kl(){try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function ql(e){return e.reducedMotion===`on`||e.reducedMotion!==`off`&&Kl()}var Jl=class{constructor(){q(this,`removers`,[])}add(e,t,n,r){e.addEventListener(t,n,r),this.removers.push(()=>e.removeEventListener(t,n,r))}removeAll(){for(;this.removers.length;)this.removers.pop()()}},Yl=Math.PI*2,Xl=Math.PI/180;function Zl(e,t,n){return e<t?t:e>n?n:e}function Ql(e){return e<0?0:e>1?1:e}function $l(e,t,n){return e+(t-e)*n}function J(e,t,n){let r=Ql((n-e)/(t-e));return r*r*(3-2*r)}function eu(e){return-(Math.cos(Math.PI*Ql(e))-1)/2}function tu(e,t,n,r){return $l(e,t,1-Math.exp(-n*r))}function nu(e){return e=(e+Math.PI)%Yl,e<0&&(e+=Yl),e-Math.PI}function ru(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function iu(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?Ql(((e-n)*o+(t-r)*s)/c):0,u=e-(n+o*l),d=t-(r+s*l);return Math.sqrt(u*u+d*d)}var au=[`sunElevation`,`sunAzimuth`,`haze`,`cloud`,`rain`,`wet`,`caravan`,`caravanPath`,`march`,`camp`,`qMarch`,`qCamp`,`fires`,`rest`,`ranks`,`advance`,`clash`,`rout`,`gather`,`light`,`support`,`dust`];function ou(){return{sunElevation:35,sunAzimuth:220,haze:.15,cloud:0,rain:0,wet:0,caravan:0,caravanPath:0,march:0,camp:0,qMarch:0,qCamp:0,fires:0,rest:0,ranks:0,advance:0,clash:0,rout:0,gather:0,light:0,support:0,dust:0}}function su(e,t){for(let n of au)e[n]=t[n];return e}function cu(e,t,n,r){for(let i of au)e[i]=t[i]+(n[i]-t[i])*r;return e}var lu=class{constructor(e){q(this,`tracks`,[]);let t=[...e].sort((e,t)=>e.t-t.t);for(let e of au){let n=[],r=[];for(let i of t){let t=i[e];typeof t==`number`&&(n.push(i.t),r.push(t))}if(n.length===0)throw Error(`EnvTimeline: key "${e}" has no keyframe (t=0 must be complete)`);this.tracks.push({key:e,t:Float64Array.from(n),v:Float64Array.from(r),m:uu(n,r)})}}evaluate(e,t){let n=Ql(e);for(let e of this.tracks)t[e.key]=du(e,n);return t}};function uu(e,t){let n=e.length,r=new Float64Array(n);if(n<2)return r;let i=[];for(let r=0;r<n-1;r++){let n=e[r+1]-e[r];i.push(n>0?(t[r+1]-t[r])/n:0)}r[0]=0,r[n-1]=0;for(let e=1;e<n-1;e++)i[e-1]*i[e]<=0?r[e]=0:r[e]=2*i[e-1]*i[e]/(i[e-1]+i[e]);return r}function du(e,t){let{t:n,v:r,m:i}=e,a=n.length;if(a===1||t<=n[0])return r[0];if(t>=n[a-1])return r[a-1];let o=0;for(;o<a-2&&t>n[o+1];)o++;let s=n[o+1]-n[o];if(s<=0)return r[o+1];let c=(t-n[o])/s,l=c*c,u=l*c,d=2*u-3*l+1,f=u-2*l+c,p=-2*u+3*l,m=u-l;return d*r[o]+f*s*i[o]+p*r[o+1]+m*s*i[o+1]}var fu={sunElevation:42,sunAzimuth:200,haze:.16,cloud:0,rain:0,wet:0,caravan:1,caravanPath:2300,march:0,camp:0,qMarch:0,qCamp:0,fires:0,rest:0,ranks:0,advance:0,clash:0,rout:0,gather:0,light:0,support:0,dust:0};function Y(e,t,n,r,i=[],a){return a?{at:e,dur:t,kind:n,key:r,refs:i,sources:a}:{at:e,dur:t,kind:n,key:r,refs:i}}var pu={...fu,sunElevation:34,sunAzimuth:226,caravanPath:2420},mu={...pu,march:.42,qMarch:.3,caravanPath:2540,sunElevation:21,sunAzimuth:246,light:1},hu={...mu,march:1,camp:1,qMarch:1,qCamp:1,caravan:0,caravanPath:2600,fires:1,light:0,haze:.2,sunElevation:-7,sunAzimuth:283},gu={...hu,cloud:.5,rain:0,wet:1,rest:1,fires:.8,haze:.3,sunElevation:-11,sunAzimuth:420},_u={...gu,rest:0,ranks:1,fires:0,light:1,support:1,cloud:.15,wet:.6,haze:.22,sunElevation:18,sunAzimuth:458},vu={..._u,advance:1,clash:0,rout:.75,support:.25,dust:.4,wet:.3,cloud:.05,sunElevation:40,sunAzimuth:500},yu={...vu,rout:1,gather:1,support:0,light:0,dust:.05,wet:0,haze:.16,sunElevation:30,sunAzimuth:590},bu=[{id:`circumstances`,stage:`circumstances`,duration:74,env:[{t:0,...fu},{t:1,sunElevation:34,sunAzimuth:226,caravanPath:2420}],camera:[{t:0,pos:[560,300,650],look:[-150,0,-150]},{t:.25,pos:[-300,160,120],look:[-1300,-10,-700]},{t:.5,pos:[-1462,-3,-812],look:[-1388,-7,-905],fov:40},{t:.74,pos:[-1330,28,-700],look:[-1400,-10,-920],fov:46},{t:1,pos:[-620,70,-200],look:[0,0,-250]}],cues:[Y(2,9,`reconstruction`,`c1`),Y(12,10,`history`,`c2`,[],[`ibn-ishaq`]),Y(23,10,`quran`,`c3`,[`8:30`]),Y(34,7,`quran`,`c4`,[`22:40`]),Y(42,8,`quran`,`c5`,[`22:39`]),Y(51,8,`interpretation`,`c6`,[`22:39`],[`tabari`,`ibn-kathir`]),Y(60,12,`history`,`c7`,[],[`bukhari-3951`,`ibn-ishaq`])],refs:[`8:30`,`22:39`,`22:40`,`8:7`],reading:[{surah:22,from:39,to:40},{surah:8,from:30,to:30},{surah:8,from:5,to:8}],spawn:{x:-200,z:-160,yaw:1.35},focus:[`valley`,`caravan`,`wells`,`road-medina`,`road-mecca`]},{id:`departure`,stage:`movement`,duration:92,env:[{t:0,...pu},{t:.04,march:0,light:0,qMarch:0},{t:.12,light:1},{t:.5,qMarch:0},{t:1,march:.42,qMarch:.3,caravanPath:2540,sunElevation:21,sunAzimuth:246,light:1}],camera:[{t:0,pos:[-620,70,-200],look:[0,0,-250]},{t:.16,pos:[80,150,-240],look:[260,0,-600]},{t:.36,pos:[330,28,-470],look:[210,6,-555]},{t:.58,pos:[150,7.5,-452],look:[232,5,-548],fov:48},{t:.8,pos:[60,14,-330],look:[130,3,-470]},{t:1,pos:[-60,40,-260],look:[60,2,-420]}],cues:[Y(2,8,`quran`,`d1`,[`8:5`]),Y(11,7,`quran`,`d2`,[`8:6`]),Y(19,9,`symbolic`,`d3`),Y(29,12,`history`,`d4`,[],[`bukhari-3957`,`muslim-1763`,`ibn-ishaq`]),Y(42,9,`quran`,`d5`,[`8:7`]),Y(52,8,`interpretation`,`d6`,[`8:7`],[`tabari`,`ibn-kathir`]),Y(61,9,`history`,`d7`,[],[`ibn-ishaq`]),Y(71,10,`history`,`d8`,[],[`bukhari-3952`]),Y(82,9,`reconstruction`,`d9`)],refs:[`8:5`,`8:6`,`8:7`,`8:8`],reading:[{surah:8,from:5,to:8}],spawn:{x:120,z:-440,yaw:-.9},focus:[`believers`,`road-medina`,`caravan`]},{id:`approach`,stage:`approach`,duration:88,env:[{t:0,...mu},{t:.2,caravan:1},{t:.35,light:1},{t:.45,camp:0},{t:.5,caravan:0,caravanPath:2600},{t:.6,march:1,qCamp:0},{t:.68,light:0},{t:.78,qMarch:1},{t:.75,camp:1,fires:0},{t:.85,qCamp:1},{t:1,fires:1,haze:.2,sunElevation:-7,sunAzimuth:283}],camera:[{t:0,pos:[-60,40,-260],look:[60,2,-420]},{t:.22,pos:[-10,24,-248],look:[-30,2,-312]},{t:.45,pos:[305,26,300],look:[190,6,420]},{t:.7,pos:[90,28,172],look:[150,4,320]},{t:1,pos:[60,70,-40],look:[-40,0,-300]}],cues:[Y(2,8,`quran`,`a1`,[`8:42`]),Y(11,10,`history`,`a2`,[],[`ibn-ishaq`]),Y(22,10,`history`,`a3`,[],[`muslim-1763`,`ibn-ishaq`]),Y(33,9,`quran`,`a4`,[`8:47`]),Y(43,11,`quran`,`a5`,[`8:42`]),Y(55,9,`history`,`a6`,[],[`bukhari-3951`]),Y(65,11,`history`,`a7`,[],[`ibn-ishaq`]),Y(77,8,`reconstruction`,`a8`)],refs:[`8:42`,`8:47`,`8:48`,`8:7`],reading:[{surah:8,from:42,to:42},{surah:8,from:47,to:48}],spawn:{x:0,z:-196,yaw:Math.PI},focus:[`quraysh`,`believers`,`far-camp`,`near-camp`,`dune`,`wells`,`road-mecca`]},{id:`night`,stage:`approach`,duration:64,env:[{t:0,...hu},{t:.2,rain:0},{t:.25,cloud:.9},{t:.3,rest:1},{t:.4,rain:1},{t:.5,sunElevation:-32},{t:.6,wet:1},{t:.7,rain:.6},{t:.9,rain:0},{t:1,cloud:.5,fires:.8,haze:.3,sunElevation:-11,sunAzimuth:420}],camera:[{t:0,pos:[60,70,-40],look:[-40,0,-300]},{t:.3,pos:[12,5,-262],look:[-40,1,-306]},{t:.62,pos:[-10,10,-150],look:[130,10,300]},{t:1,pos:[-80,9,-236],look:[-20,2,-120]}],cues:[Y(2,8,`quran`,`n1`,[`8:11`]),Y(11,8,`quran`,`n2`,[`8:11`]),Y(20,11,`interpretation`,`n3`,[`8:11`],[`tabari`,`ibn-ishaq`]),Y(32,10,`quran`,`n4`,[`8:43`]),Y(43,6,`quran`,`n5`,[`8:43`]),Y(50,8,`reconstruction`,`n6`)],refs:[`8:11`,`8:43`,`8:44`],reading:[{surah:8,from:11,to:11},{surah:8,from:43,to:44}],spawn:{x:-20,z:-282,yaw:Math.PI},focus:[`rain`,`near-camp`,`far-camp`,`wells`]},{id:`supplication`,stage:`battle`,duration:90,env:[{t:0,...gu},{t:.02,ranks:0},{t:.12,light:0},{t:.15,rest:0},{t:.3,light:1},{t:.4,fires:0},{t:.5,support:0},{t:.62,ranks:1},{t:.75,support:1},{t:1,cloud:.15,wet:.6,haze:.22,sunElevation:18,sunAzimuth:458}],camera:[{t:0,pos:[-80,9,-236],look:[-20,2,-120]},{t:.25,pos:[-86,9.8,-251],look:[-95,8.6,-262],fov:50},{t:.5,pos:[-40,60,-230],look:[20,0,0]},{t:.75,pos:[-112,7,-112],look:[20,18,-124]},{t:1,pos:[-140,34,-190],look:[10,6,-60]}],cues:[Y(2,9,`history`,`s1`,[],[`ibn-ishaq`]),Y(12,9,`history`,`s2`,[],[`bukhari-2915`]),Y(22,10,`history`,`s3`,[],[`muslim-1763`]),Y(33,9,`symbolic`,`s4`),Y(43,8,`quran`,`s5`,[`8:9`]),Y(52,6,`history`,`s6`,[`8:9`],[`muslim-1763`]),Y(59,11,`symbolic`,`s7`,[`8:9`,`8:12`]),Y(71,9,`quran`,`s8`,[`3:124`]),Y(81,8,`quran`,`s9`,[`8:10`])],refs:[`8:9`,`8:10`,`3:124`],reading:[{surah:8,from:9,to:10},{surah:3,from:123,to:124}],spawn:{x:-92,z:-250,yaw:Math.PI},focus:[`shelter`,`support`,`believers`,`quraysh`,`equipment`]},{id:`encounter`,stage:`battle`,duration:92,sensitive:!0,env:[{t:0,..._u},{t:.1,advance:0},{t:.3,clash:0},{t:.35,advance:1},{t:.45,clash:1},{t:.5,dust:.6},{t:.58,clash:1},{t:.6,rout:0,support:1},{t:.78,clash:.25},{t:1,clash:0,rout:.75,support:.25,dust:.4,wet:.3,cloud:.05,sunElevation:40,sunAzimuth:500}],camera:[{t:0,pos:[-140,34,-190],look:[10,6,-60]},{t:.25,pos:[-360,85,-110],look:[10,0,-70]},{t:.55,pos:[-330,110,20],look:[30,0,-50]},{t:.8,pos:[-120,30,-240],look:[180,10,180]},{t:1,pos:[-100,60,-300],look:[150,0,170]}],cameraGentle:[{t:0,pos:[-140,34,-190],look:[10,6,-60]},{t:.2,pos:[-74,7,-296],look:[-92,3,-264]},{t:.5,pos:[-60,5,-332],look:[-160,60,-640]},{t:.8,pos:[-20,6,-320],look:[-40,40,-600]},{t:1,pos:[-100,60,-300],look:[150,0,170]}],cues:[Y(2,9,`reconstruction`,`e1`),Y(12,9,`quran`,`e2`,[`8:12`]),Y(22,7,`quran`,`e3`,[`8:45`]),Y(30,9,`quran`,`e4`,[`3:125`]),Y(40,10,`interpretation`,`e5`,[`3:124`,`3:125`,`3:123`,`8:9`],[`tabari`]),Y(51,8,`quran`,`e6`,[`8:17`]),Y(60,9,`interpretation`,`e7`,[`8:17`],[`tabari`,`ibn-kathir`]),Y(70,9,`quran`,`e8`,[`3:126`]),Y(80,9,`history`,`e9`,[`54:45`],[`bukhari-2915`])],refs:[`8:12`,`8:15`,`8:16`,`8:17`,`3:125`,`3:126`,`8:45`,`54:45`],reading:[{surah:8,from:12,to:17},{surah:3,from:125,to:126},{surah:8,from:45,to:46},{surah:54,from:45,to:45}],spawn:{x:-108,z:-238,yaw:-2.5},focus:[`field`,`support`,`shelter`,`believers`,`quraysh`]},{id:`outcome`,stage:`outcome`,duration:76,env:[{t:0,...vu},{t:.15,gather:0},{t:.3,rout:1,support:0},{t:.4,light:0},{t:.6,gather:1},{t:.8,dust:.05},{t:1,wet:0,haze:.16,sunElevation:30,sunAzimuth:590}],camera:[{t:0,pos:[-100,60,-300],look:[150,0,170]},{t:.35,pos:[-42,11,-252],look:[-5,3,-168]},{t:.7,pos:[-30,18,-20],look:[80,2,-90]},{t:1,pos:[140,40,-330],look:[-20,0,-230]}],cues:[Y(2,7,`quran`,`o1`,[`3:127`]),Y(10,8,`quran`,`o2`,[`3:123`]),Y(19,10,`history`,`o3`,[],[`muslim-1763`,`bukhari-3986`,`ibn-ishaq`]),Y(30,9,`quran`,`o4`,[`8:19`]),Y(40,6,`quran`,`o5`,[`8:41`]),Y(47,8,`interpretation`,`o6`,[`8:41`],[`tabari`,`ibn-kathir`]),Y(56,8,`history`,`o7`,[],[`muslim-1763`]),Y(65,8,`reconstruction`,`o8`)],refs:[`3:127`,`3:123`,`8:13`,`8:14`,`8:18`,`8:19`,`8:41`],reading:[{surah:3,from:123,to:127},{surah:8,from:13,to:14},{surah:8,from:18,to:19},{surah:8,from:41,to:41}],spawn:{x:22,z:-186,yaw:Math.PI*.85},focus:[`wells`,`field`,`far-camp`,`believers`]},{id:`reflection`,stage:`outcome`,duration:68,env:[{t:0,...yu},{t:.6,sunElevation:4},{t:1,dust:0,haze:.22,sunElevation:-9,sunAzimuth:632}],camera:[{t:0,pos:[140,40,-330],look:[-20,0,-230]},{t:.4,pos:[-220,90,-420],look:[0,0,-100]},{t:.75,pos:[250,170,120],look:[-700,0,-60]},{t:1,pos:[450,280,420],look:[-300,0,-250]}],cues:[Y(2,12,`quran`,`r1`,[`8:26`]),Y(15,6,`quran`,`r2`,[`8:46`]),Y(22,8,`quran`,`r3`,[`3:13`]),Y(31,6,`interpretation`,`r4`,[`3:13`],[`tabari`,`ibn-kathir`]),Y(38,7,`quran`,`r5`,[`3:13`]),Y(46,10,`summary`,`r6`,[`8:10`,`8:17`,`3:126`,`8:45`,`8:46`,`3:123`,`8:26`]),Y(57,6,`quran`,`r7`,[`8:10`])],refs:[`8:26`,`8:45`,`8:46`,`3:13`,`3:123`,`3:126`],reading:[{surah:8,from:26,to:26},{surah:8,from:45,to:46},{surah:3,from:13,to:13},{surah:3,from:123,to:127}],spawn:{x:-200,z:-160,yaw:1.8},focus:[`valley`,`wells`,`field`,`shelter`]}],xu=bu.findIndex(e=>e.sensitive),Su=[`circumstances`,`movement`,`approach`,`battle`,`outcome`],Cu=`يدل الضوء الهادئ على حضور النبي محمد ﷺ أسلوبًا فنيًا. ولا يُصوَّر — لا هيئة ولا وجه ولا صوت — وليس الضوء ادعاءً بأن نورًا كان يصدر عنه.`,wu=`الضوء الشاحب النازل من الأعلى والذرّات المتساقطة ببطء رمزٌ لمدد من الغيب. ولا يُصوَّر الملائكة: فالقرآن لا يصف كيف ظهروا، ولا ينبغي أن يُفهم شيء مما يُعرض هنا على أنه صورة لهم.`,Tu=`يروي ابن إسحاق أن المؤمنين نزلوا عند أقرب ماء إلى العدو بمشورة الحُباب بن المنذر، وبنوا هناك حوضًا للماء. ويَعُدّ علماء الحديث إسناد هذه الرواية ضعيفًا.`,Eu={sourceKinds:{quran:{label:`قرآن`,description:`نصّ من الآية المشار إليها كما هو في المصحف.`},summary:{label:`خلاصة قرآنية`,description:`خلاصة واضحة لما تذكره الآيات المشار إليها.`},history:{label:`رواية تاريخية`,description:`ما يرويه كتاب حديث أو سيرة مبكرة مسمّى. ولم يرد في القرآن؛ وقد تختلف الروايات.`},interpretation:{label:`تفسير`,description:`رأي لمفسرين مسمَّين. ولم يرد في القرآن نفسه.`},reconstruction:{label:`إعادة بناء`,description:`اختيار فني صُنع لهذه المحاكاة، وليس سجلًا تاريخيًا.`},symbolic:{label:`رمزي`,description:`رمز لما لا يُصوَّر: النبي ﷺ، أو عالم الغيب. وليس تصويرًا ولا ادعاءً عن هيئته.`}},stages:{circumstances:`الظروف`,movement:`الخروج`,approach:`اقتراب الجمعين`,battle:`المعركة والمدد الإلهي`,outcome:`العاقبة والتأمل`},stagesShort:{circumstances:`السياق`,movement:`الخروج`,approach:`الاقتراب`,battle:`المعركة`,outcome:`العاقبة`},chapters:{circumstances:{title:`قبل بدر`,subtitle:`أُخرجوا من ديارهم`,short:`قبل بدر`,cues:{c1:`هذا الوادي وتلاله وآباره ومعسكراته إعادة بناء فنية مستوحاة من أوصاف بدر. وليس خريطة للموضع الحقيقي، ومسافاته مختصرة.`,c2:`تروي كتب السيرة المبكرة، كسيرة ابن إسحاق، أن النبي محمدًا ﷺ وكثيرًا من المؤمنين هاجروا سنة ٦٢٢ م من مكة إلى المدينة بعد سنين من الاضطهاد، تاركين ديارهم وأموالهم.`,c3:`وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ`,c4:`الَّذِينَ أُخْرِجُوا مِنْ دِيَارِهِمْ بِغَيْرِ حَقٍّ إِلَّا أَنْ يَقُولُوا رَبُّنَا اللَّهُ`,c5:`أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا ۚ وَإِنَّ اللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ`,c6:`يذكر مفسرون كالطبري وابن كثير أن (الحج: ٣٩) أول آية أذنت للمؤمنين في القتال، ونزلت بعد الهجرة إلى المدينة.`,c7:`في رمضان من السنة الثانية للهجرة (مارس ٦٢٤ م) كانت قافلة تجارية كبيرة لأهل مكة يقودها أبو سفيان عائدة من الشام على الطريق المارّ ببدر. فخرج النبي ﷺ من المدينة يريدها (صحيح البخاري ٣٩٥١؛ ابن إسحاق).`}},departure:{title:`الخروج`,subtitle:`كما أخرجك ربك من بيتك`,short:`الخروج`,cues:{d1:`كَمَا أَخْرَجَكَ رَبُّكَ مِنْ بَيْتِكَ بِالْحَقِّ وَإِنَّ فَرِيقًا مِنَ الْمُؤْمِنِينَ لَكَارِهُونَ`,d2:`يُجَادِلُونَكَ فِي الْحَقِّ بَعْدَمَا تَبَيَّنَ كَأَنَّمَا يُسَاقُونَ إِلَى الْمَوْتِ وَهُمْ يَنْظُرُونَ`,d3:`لا يُصوَّر النبي محمد ﷺ. ويدل على حضوره بين المسافرين ضوء هادئ — وهو أسلوب فني فحسب، لا ادعاء بأن نورًا كان يصدر عنه.`,d4:`يروي صحيح البخاري (٣٩٥٧) أن الذين خرجوا إلى بدر كانوا بضعة عشر وثلاثمائة؛ ويذكر صحيح مسلم (١٧٦٣) أنهم ثلاثمائة وتسعة عشر. ويروي ابن إسحاق أنه كان معهم نحو سبعين بعيرًا يتعاقبون ركوبها، وخيل قليلة جدًا.`,d5:`وَإِذْ يَعِدُكُمُ اللَّهُ إِحْدَى الطَّائِفَتَيْنِ أَنَّهَا لَكُمْ وَتَوَدُّونَ أَنَّ غَيْرَ ذَاتِ الشَّوْكَةِ تَكُونُ لَكُمْ`,d6:`يرى مفسرون كالطبري وابن كثير أن الطائفتين في (الأنفال: ٧) هما القافلة، وكانت قليلة الحراسة، والجيش المسلح الذي أخرجته قريش لحمايتها.`,d7:`يروي ابن إسحاق أن أبا سفيان لما علم بالخروج بعث رسولًا إلى مكة يستنجد، وسلك بالقافلة طريق الساحل، بينما خرجت قريش في جمع كبير.`,d8:`يروي صحيح البخاري (٣٩٥٢) أن المقداد بن الأسود قال للنبي ﷺ إنهم لن يقولوا كما قال قوم موسى عليه السلام لنبيهم أن يذهب هو وربه فيقاتلا، بل سيقاتلون معه من كل جانب.`,d9:`الركب ولباسه وإبله وطريقه في هذا الممر إعادة بناء فنية. ويُعرض عدد من الأشخاص أقل مما تذكره الروايات، مع الحفاظ على النسبة بين القوتين.`}},approach:{title:`اقتراب الجمعين`,subtitle:`العدوة الدنيا والعدوة القصوى`,short:`الاقتراب`,cues:{a1:`إِذْ أَنْتُمْ بِالْعُدْوَةِ الدُّنْيَا وَهُمْ بِالْعُدْوَةِ الْقُصْوَىٰ وَالرَّكْبُ أَسْفَلَ مِنْكُمْ`,a2:`يسمّي ابن إسحاق الجانبين: نزل المؤمنون بالجانب الأدنى من الوادي، «العدوة الدنيا»، مما يلي المدينة؛ ونزلت قريش بالجانب الأبعد، «العدوة القصوى»، خلف كثيب العَقَنْقَل.`,a3:`يذكر صحيح مسلم (١٧٦٣) أن جيش مكة كان ألفًا. ويقول ابن إسحاق إنهم جاؤوا بخيل وإبل كثيرة — وإن القافلة كانت في أثناء ذلك قد نجت على طريق الساحل.`,a4:`وَلَا تَكُونُوا كَالَّذِينَ خَرَجُوا مِنْ دِيَارِهِمْ بَطَرًا وَرِئَاءَ النَّاسِ وَيَصُدُّونَ عَنْ سَبِيلِ اللَّهِ ۚ وَاللَّهُ بِمَا يَعْمَلُونَ مُحِيطٌ`,a5:`وَلَوْ تَوَاعَدْتُمْ لَاخْتَلَفْتُمْ فِي الْمِيعَادِ وَلَٰكِنْ لِيَقْضِيَ اللَّهُ أَمْرًا كَانَ مَفْعُولًا`,a6:`يروي صحيح البخاري (٣٩٥١) أن النبي ﷺ خرج يريد عير قريش، حتى جمع الله بين المؤمنين وعدوهم على غير ميعاد.`,a7:Tu,a8:`المعسكران والآبار والكثيب والطرق موضوعة بحرية في إعادة البناء هذه؛ ومواضعها ومسافاتها الحقيقية مختلفة.`}},night:{title:`المطر والنعاس`,subtitle:`ماء من السماء`,short:`الليل`,cues:{n1:`إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِنْهُ وَيُنَزِّلُ عَلَيْكُمْ مِنَ السَّمَاءِ مَاءً`,n2:`لِيُطَهِّرَكُمْ بِهِ وَيُذْهِبَ عَنْكُمْ رِجْزَ الشَّيْطَانِ وَلِيَرْبِطَ عَلَىٰ قُلُوبِكُمْ وَيُثَبِّتَ بِهِ الْأَقْدَامَ`,n3:`تذكر روايات أوردها الطبري، ورواية ابن إسحاق، أن المطر لبّد الرمل اللين تحت أقدام المؤمنين بينما أعاق قريشًا في جانبهم. والقرآن نفسه يذكر أنه ثبّت أقدام المؤمنين.`,n4:`إِذْ يُرِيكَهُمُ اللَّهُ فِي مَنَامِكَ قَلِيلًا ۖ وَلَوْ أَرَاكَهُمْ كَثِيرًا لَفَشِلْتُمْ وَلَتَنَازَعْتُمْ فِي الْأَمْرِ`,n5:`وَلَٰكِنَّ اللَّهَ سَلَّمَ ۗ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ`,n6:`الليل والمطر والمعسكر النائم ونيران المعسكر البعيد تصوير فني؛ والقرآن لا يصف المشهد.`}},supplication:{title:`الصفوف والاستغاثة`,subtitle:`إذ تستغيثون ربكم`,short:`الاستغاثة`,cues:{s1:`في صباح يوم المعركة — يوم الجمعة السابع عشر من رمضان في السنة الثانية للهجرة، كما يذكر ابن إسحاق — اصطفّ الجمعان متقابلين.`,s2:`يروي صحيح البخاري (٢٩١٥) أن النبي ﷺ كان يدعو في قبّة يوم بدر، يسأل الله أن يُنجز له عهده ووعده.`,s3:`ويضيف صحيح مسلم (١٧٦٣) أنه استقبل القبلة ومدّ يديه يدعو حتى سقط رداؤه عن منكبيه، فردّه أبو بكر وطمأنه بأن الله سيُنجز له ما وعده.`,s4:Cu,s5:`إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ`,s6:`يربط صحيح مسلم (١٧٦٣) هذه الآية باستغاثة النبي ﷺ يوم بدر.`,s7:wu,s8:`إِذْ تَقُولُ لِلْمُؤْمِنِينَ أَلَنْ يَكْفِيَكُمْ أَنْ يُمِدَّكُمْ رَبُّكُمْ بِثَلَاثَةِ آلَافٍ مِنَ الْمَلَائِكَةِ مُنْزَلِينَ`,s9:`وَمَا جَعَلَهُ اللَّهُ إِلَّا بُشْرَىٰ وَلِتَطْمَئِنَّ بِهِ قُلُوبُكُمْ ۚ وَمَا النَّصْرُ إِلَّا مِنْ عِنْدِ اللَّهِ`}},encounter:{title:`اللقاء`,subtitle:`أني معكم`,short:`اللقاء`,cues:{e1:`لا يُعرض اللقاء إلا من بعيد، صفوفًا تتحرك وغبارًا يتصاعد. فلا ضربات ولا جراح ولا قتلى تُعرض، ولا شيء هنا قابل للعب.`,e2:`إِذْ يُوحِي رَبُّكَ إِلَى الْمَلَائِكَةِ أَنِّي مَعَكُمْ فَثَبِّتُوا الَّذِينَ آمَنُوا ۚ سَأُلْقِي فِي قُلُوبِ الَّذِينَ كَفَرُوا الرُّعْبَ`,e3:`يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا وَاذْكُرُوا اللَّهَ كَثِيرًا لَعَلَّكُمْ تُفْلِحُونَ`,e4:`بَلَىٰ ۚ إِنْ تَصْبِرُوا وَتَتَّقُوا وَيَأْتُوكُمْ مِنْ فَوْرِهِمْ هَٰذَا يُمْدِدْكُمْ رَبُّكُمْ بِخَمْسَةِ آلَافٍ مِنَ الْمَلَائِكَةِ مُسَوِّمِينَ`,e5:`يناقش المفسرون، ومنهم الطبري، هل الوعد بثلاثة آلاف وخمسة آلاف من الملائكة (آل عمران: ١٢٤–١٢٥) كان في بدر أم في غزوة أحد اللاحقة. وقبلهما تذكر (آل عمران: ١٢٣) بدرًا؛ وتذكر (الأنفال: ٩) ألفًا.`,e6:`فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ`,e7:`يورد الطبري وابن كثير روايات أن النبي ﷺ رمى قبضة من التراب أو الحصى نحو صفوف المشركين يوم بدر، ويربطان هذه الكلمات بذلك.`,e8:`وَمَا جَعَلَهُ اللَّهُ إِلَّا بُشْرَىٰ لَكُمْ وَلِتَطْمَئِنَّ قُلُوبُكُمْ بِهِ ۗ وَمَا النَّصْرُ إِلَّا مِنْ عِنْدِ اللَّهِ الْعَزِيزِ الْحَكِيمِ`,e9:`يروي صحيح البخاري (٢٩١٥) أن النبي ﷺ خرج من القبّة وهو يتلو ﴿سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ﴾ (القمر: ٤٥).`}},outcome:{title:`العاقبة`,subtitle:`فينقلبوا خائبين`,short:`العاقبة`,cues:{o1:`لِيَقْطَعَ طَرَفًا مِنَ الَّذِينَ كَفَرُوا أَوْ يَكْبِتَهُمْ فَيَنْقَلِبُوا خَائِبِينَ`,o2:`وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ ۖ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ`,o3:`يروي صحيح مسلم (١٧٦٣) وصحيح البخاري (٣٩٨٦) أن سبعين من جيش مكة قُتلوا وأُسر سبعون. ويذكر ابن إسحاق أربعة عشر من المؤمنين قُتلوا.`,o4:`إِنْ تَسْتَفْتِحُوا فَقَدْ جَاءَكُمُ الْفَتْحُ ۖ وَإِنْ تَنْتَهُوا فَهُوَ خَيْرٌ لَكُمْ`,o5:`يَوْمَ الْفُرْقَانِ يَوْمَ الْتَقَى الْجَمْعَانِ`,o6:`يفسّر مفسرون كالطبري وابن كثير «يوم الفرقان» بأنه يوم بدر، الذي فرّق الله فيه بين الحق والباطل.`,o7:`يروي صحيح مسلم (١٧٦٣) أن النبي ﷺ استشار أصحابه في الأسرى وقبل منهم الفداء.`,o8:`لا تُعرض جثث ولا جراح ولا أسرى. والميدان الهادئ والتجمّع عند الآبار تصوير فني.`}},reflection:{title:`الإيمان والثبات والشكر`,subtitle:`لعلكم تشكرون`,short:`التأمل`,cues:{r1:`وَاذْكُرُوا إِذْ أَنْتُمْ قَلِيلٌ مُسْتَضْعَفُونَ فِي الْأَرْضِ تَخَافُونَ أَنْ يَتَخَطَّفَكُمُ النَّاسُ فَآوَاكُمْ وَأَيَّدَكُمْ بِنَصْرِهِ وَرَزَقَكُمْ مِنَ الطَّيِّبَاتِ لَعَلَّكُمْ تَشْكُرُونَ`,r2:`وَاصْبِرُوا ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ`,r3:`قَدْ كَانَ لَكُمْ آيَةٌ فِي فِئَتَيْنِ الْتَقَتَا ۖ فِئَةٌ تُقَاتِلُ فِي سَبِيلِ اللَّهِ وَأُخْرَىٰ كَافِرَةٌ`,r4:`يذكر مفسرون كالطبري وابن كثير أن كثيرين فهموا الفئتين في (آل عمران: ١٣) على أنهما الجيشان في بدر.`,r5:`وَاللَّهُ يُؤَيِّدُ بِنَصْرِهِ مَنْ يَشَاءُ ۗ إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ`,r6:`تنسب آيات بدر النصر إلى الله وحده (الأنفال: ١٠؛ الأنفال: ١٧؛ آل عمران: ١٢٦)، وتدعو إلى الثبات وذكر الله (الأنفال: ٤٥–٤٦)، وتطلب الشكر (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,r7:`إِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ`}}},objects:{valley:{name:`وادي بدر`,sections:{a:`إِذْ أَنْتُمْ بِالْعُدْوَةِ الدُّنْيَا وَهُمْ بِالْعُدْوَةِ الْقُصْوَىٰ وَالرَّكْبُ أَسْفَلَ مِنْكُمْ`,b:`يصف ابن إسحاق بدرًا بأنها ماء ذو آبار على طريق القوافل، ويسمّي جانبي الوادي «العدوة الدنيا» (الجانب الأقرب) و«العدوة القصوى» (الجانب الأبعد).`,c:`تقع بدر على نحو ١٣٠ كم جنوب غرب المدينة، غير بعيدة عن ساحل البحر الأحمر؛ وفيها اليوم بلدة بالاسم نفسه. والمدينة إلى الشمال الشرقي ومكة إلى الجنوب الجنوبي الشرقي، كما في هذا الوادي.`,d:`شكل الوادي وتلاله وكثيبه وآباره متخيَّلة ومسافاته مختصرة. وليس خريطة لميدان المعركة، والمواضع المعروضة ليست ادعاءات عن أماكن وقوع الأحداث.`}},caravan:{name:`القافلة`,sections:{a:`وَإِذْ يَعِدُكُمُ اللَّهُ إِحْدَى الطَّائِفَتَيْنِ أَنَّهَا لَكُمْ وَتَوَدُّونَ أَنَّ غَيْرَ ذَاتِ الشَّوْكَةِ تَكُونُ لَكُمْ`,b:`وَالرَّكْبُ أَسْفَلَ مِنْكُمْ`,c:`يروي صحيح البخاري (٣٩٥١) أن النبي ﷺ خرج يريد عير قريش. ويروي ابن إسحاق أن أبا سفيان كان يقودها عائدًا من الشام، وأنها نجت بالعدول نحو الساحل.`,d:`يرى مفسرون كالطبري وابن كثير أن الطائفة غير ذات الشوكة في (الأنفال: ٧) هي هذه القافلة.`,e:`عدد الإبل وأحمالها والحداة وطريق الساحل المعروض هنا اختيارات فنية.`}},believers:{name:`المؤمنون`,sections:{a:`وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ`,b:`وَاذْكُرُوا إِذْ أَنْتُمْ قَلِيلٌ مُسْتَضْعَفُونَ فِي الْأَرْضِ`,c:`تذكر الروايات أنهم ثلاثمائة ونيف: بضعة عشر وثلاثمائة (صحيح البخاري ٣٩٥٧) أو ثلاثمائة وتسعة عشر (صحيح مسلم ١٧٦٣). ويروي ابن إسحاق أنه كان معهم نحو سبعين بعيرًا يتعاقبون ركوبها، وخيل قليلة جدًا.`,d:`يُرسم من الأشخاص أقل من هذه الأعداد، مع الحفاظ تقريبًا على النسبة بين القوتين. ولا يظهر الناس إلا ظلالًا بلا وجوه؛ ولا يُعيَّن أحد ولا يُعرض أحد وهو يتكلم.`}},quraysh:{name:`جيش قريش`,sections:{a:`وَلَا تَكُونُوا كَالَّذِينَ خَرَجُوا مِنْ دِيَارِهِمْ بَطَرًا وَرِئَاءَ النَّاسِ وَيَصُدُّونَ عَنْ سَبِيلِ اللَّهِ`,b:`وَإِذْ زَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ وَقَالَ لَا غَالِبَ لَكُمُ الْيَوْمَ مِنَ النَّاسِ وَإِنِّي جَارٌ لَكُمْ`,c:`وَلَنْ تُغْنِيَ عَنْكُمْ فِئَتُكُمْ شَيْئًا وَلَوْ كَثُرَتْ وَأَنَّ اللَّهَ مَعَ الْمُؤْمِنِينَ`,d:`يذكر صحيح مسلم (١٧٦٣) أن عددهم كان ألفًا. ويذكر ابن إسحاق أنهم ما بين تسعمائة وألف، وأنهم جاؤوا بخيل وإبل كثيرة.`,e:`لباسهم وخيلهم وراياتهم والأعداد الظاهرة على الشاشة اختيارات فنية؛ والرايات بلا شعارات. ويُعرض انسحابهم أشخاصًا يغيبون عن النظر وراء الكثيب.`}},wells:{name:`آبار بدر`,sections:{a:Tu,b:`وَيُنَزِّلُ عَلَيْكُمْ مِنَ السَّمَاءِ مَاءً لِيُطَهِّرَكُمْ بِهِ`,c:`عدد الآبار وجدرانها الحجرية والإطار الخشبي ببكرته والحوض كلها متخيَّلة.`}},shelter:{name:`العريش`,sections:{a:`يروي صحيح البخاري (٢٩١٥) أن النبي ﷺ كان في قبّة يوم بدر حين دعا يسأل الله أن يُنجز له عهده ووعده.`,b:`يروي ابن إسحاق أنه بُني للنبي ﷺ، بإشارة من سعد بن معاذ، عريشٌ مشرف على الميدان.`,c:`يصف صحيح مسلم (١٧٦٣) دعاءه الطويل مستقبلًا القبلة، وبعده أنزل الله (الأنفال: ٩).`,d:`إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ`,e:Cu,f:`أعمدة العريش من جذوع النخل، وسقفه من السعف، وموضعه على هذه الرابية إعادة بناء فنية.`}},"near-camp":{name:`معسكر المؤمنين`,sections:{a:`إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِنْهُ`,b:`تصف رواية ابن إسحاق قوة صغيرة خفيفة العتاد قليلة الرواحل.`,c:`الخيام القليلة المنخفضة والإبل الباركة والفرش اختيارات فنية.`}},"far-camp":{name:`معسكر قريش`,sections:{a:`وَهُمْ بِالْعُدْوَةِ الْقُصْوَىٰ`,b:`يضع ابن إسحاق معسكر أهل مكة بـ«العدوة القصوى»، الجانب الأبعد من الوادي، خلف كثيب العَقَنْقَل.`,c:`حجم المعسكر وخيامه ونيرانه ودوابه المربوطة اختيارات فنية. وبعد المعركة يبقى قائمًا خاليًا.`}},dune:{name:`الكثيب`,sections:{a:`يذكر ابن إسحاق العَقَنْقَل، وهو كثيب رمل نزلت قريش خلفه في الجانب الأبعد من الوادي.`,b:`حجم الكثيب وشكله هنا متخيَّلان.`}},rain:{name:`المطر`,sections:{a:`إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِنْهُ وَيُنَزِّلُ عَلَيْكُمْ مِنَ السَّمَاءِ مَاءً لِيُطَهِّرَكُمْ بِهِ وَيُذْهِبَ عَنْكُمْ رِجْزَ الشَّيْطَانِ وَلِيَرْبِطَ عَلَىٰ قُلُوبِكُمْ وَيُثَبِّتَ بِهِ الْأَقْدَامَ`,b:`تذكر روايات أوردها الطبري، ورواية ابن إسحاق، أن المطر لبّد الرمل اللين تحت أقدام المؤمنين بينما أعاق قريشًا في جانبهم.`,c:`السحب والمطر الليلي والأرض المبتلة تصوير فني للآية.`}},support:{name:`المدد الموعود`,sections:{a:`إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ`,b:`إِذْ يُوحِي رَبُّكَ إِلَى الْمَلَائِكَةِ أَنِّي مَعَكُمْ فَثَبِّتُوا الَّذِينَ آمَنُوا`,c:`أَلَنْ يَكْفِيَكُمْ أَنْ يُمِدَّكُمْ رَبُّكُمْ بِثَلَاثَةِ آلَافٍ مِنَ الْمَلَائِكَةِ مُنْزَلِينَ`,d:`وَمَا جَعَلَهُ اللَّهُ إِلَّا بُشْرَىٰ وَلِتَطْمَئِنَّ بِهِ قُلُوبُكُمْ ۚ وَمَا النَّصْرُ إِلَّا مِنْ عِنْدِ اللَّهِ`,e:`يفسّر الطبري ﴿مُرْدِفِينَ﴾ (الأنفال: ٩) بأنهم يتبع بعضهم بعضًا، ويورد أقوالًا مختلفة في أن الوعد في (آل عمران: ١٢٤–١٢٥) كان في بدر أم في أحد.`,f:wu,g:`وقت ظهور الضوء ومكانه ولونه وشكله اختيارات فنية.`}},field:{name:`الميدان`,sections:{a:`يَوْمَ الْفُرْقَانِ يَوْمَ الْتَقَى الْجَمْعَانِ`,b:`فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ`,c:`يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا زَحْفًا فَلَا تُوَلُّوهُمُ الْأَدْبَارَ`,d:`يؤرّخ ابن إسحاق المعركة بيوم الجمعة السابع عشر من رمضان في السنة الثانية للهجرة (مارس ٦٢٤ م)؛ وتذكر بعض الروايات أيامًا أخرى من ذلك الشهر.`,e:`لا يصف القرآن مواضع الصفوف ولا مجرى القتال. والمعروض إعادة بناء متحفّظة بعيدة: لا يُعرض سلاح مستعمَل، ولا يُعرض أحد يسقط.`}},equipment:{name:`اللباس والعتاد`,sections:{a:`اللباس والعتاد مستوحيان من التاريخ، لا موثّقان بالتفصيل: أثواب ملفوفة وعمائم، ورماح مرفوعة، وتروس مستديرة من الجلد أو الخشب، وخُوَذ حديدية بسيطة لبعض جيش مكة. وهذه التفاصيل غير مؤكدة.`,b:`تقابل رواية ابن إسحاق بين قلة رواحل المؤمنين وخيل قريش وإبلها.`,c:`لا يُعرض أي سلاح مستعمَلًا أبدًا، ولا شيء في هذه المحاكاة يمكن لعبه قتالًا.`}},"road-medina":{name:`طريق المدينة`,sections:{a:`كَمَا أَخْرَجَكَ رَبُّكَ مِنْ بَيْتِكَ بِالْحَقِّ`,b:`تقع المدينة على نحو ١٣٠ كم إلى الشمال الشرقي. والطريق والممر هنا إعادة بناء فنية.`}},"road-mecca":{name:`طريق مكة`,sections:{a:`وَلَا تَكُونُوا كَالَّذِينَ خَرَجُوا مِنْ دِيَارِهِمْ بَطَرًا`,b:`تقع مكة على نحو ٣٠٠ كم إلى الجنوب الجنوبي الشرقي بالطرق القديمة. والطريق والممر هنا إعادة بناء فنية.`}}},reflection:{help:`النصر من الله: تقول الآيات إن النصر لا يكون إلا من عند الله (الأنفال: ١٠؛ آل عمران: ١٢٦)، وإن الله هو الذي رمى (الأنفال: ١٧).`,few:`قلة وضعف: كان المؤمنون قليلين ﴿أَذِلَّةٌ﴾ في أعين الناس، ومع ذلك نُصروا (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,reassure:`الطمأنينة: أُنزل النعاس والمطر ليطمئن قلوبهم ويثبّت أقدامهم (الأنفال: ١١)، وجُعل المدد الموعود بشرى لتطمئن القلوب (الأنفال: ١٠؛ آل عمران: ١٢٦).`,steadfast:`الثبات: يُؤمر المؤمنون إذا لقوا جيشًا أن يثبتوا، وأن يذكروا الله كثيرًا، وألا يتنازعوا؛ والله مع الصابرين (الأنفال: ٤٥–٤٦؛ آل عمران: ١٢٥).`,pride:`الكِبر: الذين خرجوا بطرًا ورئاء الناس يُضرب بهم المثل تحذيرًا، والشيطان الذي زيّن لهم أعمالهم تخلّى عنهم (الأنفال: ٤٧–٤٨).`,gratitude:`الشكر: يُذكَّر المؤمنون كيف كانوا قليلين خائفين، فآواهم الله وأيّدهم، لعلهم يشكرون (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,furqan:`يفسّر مفسرون كالطبري وابن كثير ﴿يَوْمَ الْفُرْقَانِ﴾ (الأنفال: ٤١) بأنه يوم بدر، حين فُرّق بين الحق والباطل.`},sources:{"bukhari-2915":{title:`صحيح البخاري، رقم ٢٩١٥ (وانظر ٤٨٧٥)، من رواية ابن عباس`,short:`صحيح البخاري ٢٩١٥`,note:`دعاء النبي ﷺ في قبّة يوم بدر، وتلاوته (القمر: ٤٥) حين خرج.`},"bukhari-3951":{title:`صحيح البخاري، رقم ٣٩٥١، من رواية كعب بن مالك`,short:`صحيح البخاري ٣٩٥١`,note:`خرج النبي ﷺ يريد عير قريش، حتى جمع الله بينهم وبين عدوهم على غير ميعاد.`},"bukhari-3952":{title:`صحيح البخاري، رقم ٣٩٥٢، من رواية ابن مسعود`,short:`صحيح البخاري ٣٩٥٢`,note:`كلمات المقداد بن الأسود في نصرة النبي ﷺ قبل المعركة.`},"bukhari-3957":{title:`صحيح البخاري، الأرقام ٣٩٥٧–٣٩٥٩، من رواية البراء بن عازب`,short:`صحيح البخاري ٣٩٥٧`,note:`كان أهل بدر بضعة عشر وثلاثمائة.`},"bukhari-3986":{title:`صحيح البخاري، رقم ٣٩٨٦ (وانظر ٣٠٣٩)، من رواية البراء بن عازب`,short:`صحيح البخاري ٣٩٨٦`,note:`قُتل سبعون من جيش مكة وأُسر سبعون يوم بدر.`},"muslim-1763":{title:`صحيح مسلم، رقم ١٧٦٣ (كتاب الجهاد والسير)، من رواية عمر بن الخطاب`,short:`صحيح مسلم ١٧٦٣`,note:`ألف في مقابل ثلاثمائة وتسعة عشر؛ والاستغاثة مستقبلًا القبلة؛ ونزول (الأنفال: ٩)؛ وسبعون قتيلًا وسبعون أسيرًا؛ والمشاورة في الأسرى.`},"ibn-ishaq":{title:`ابن إسحاق، «سيرة رسول الله»، برواية ابن هشام (السيرة النبوية)؛ وترجمها إلى الإنجليزية ألفريد غيوم بعنوان «حياة محمد» (مطبعة جامعة أكسفورد، ١٩٥٥)`,short:`ابن إسحاق`,note:`أقدم سيرة وصلت إلينا: القافلة، والمسير، وجانبا الوادي والعَقَنْقَل، والآبار، والعريش، والتاريخ، والمطر، وأعداد الإبل والخيل، وأسماء من قُتل. وأسانيد رواياتها متفاوتة القوة.`},tabari:{title:`الطبري، «جامع البيان عن تأويل آي القرآن» (تفسير الطبري)`,short:`الطبري`,note:`روايات وأقوال في (الحج: ٣٩؛ الأنفال: ٧؛ الأنفال: ٩؛ الأنفال: ١١؛ الأنفال: ١٧؛ الأنفال: ٤١؛ آل عمران: ١٣؛ آل عمران: ١٢٤–١٢٥).`},"ibn-kathir":{title:`ابن كثير، «تفسير القرآن العظيم»`,short:`ابن كثير`,note:`روايات وأقوال في (الحج: ٣٩؛ الأنفال: ٧؛ الأنفال: ١٧؛ الأنفال: ٤١؛ آل عمران: ١٣).`}}},Du={app:{title:`غزوة بدر`,documentTitle:`غزوة بدر — تجربة قرآنية ثلاثية الأبعاد`,tagline:`تجربة تعليمية قرآنية وتاريخية ثلاثية الأبعاد`,loading:{title:`تجهيز التجربة`,renderer:`تشغيل محرك العرض`,terrain:`تشكيل الوادي`,camps:`نصب المعسكرين`,vegetation:`وضع أشجار السَّمُر والحجارة`,armies:`وضع الأشخاص`,caravan:`تحميل القافلة`,atmosphere:`تلوين السماء`,audio:`تجهيز الصوت`,shaders:`تجهيز المظلِّلات`,ready:`جاهز`},toasts:{edge:`لقد بلغت حافة الوادي المعاد بناؤه.`,qualityReload:`تتغير تفاصيل الأرض والنبات بعد إعادة تحميل الصفحة.`,audioBlocked:`المتصفح يمنع الصوت. انقر في أي مكان لتفعيله.`,sensitiveHidden:`تبقى الكاميرا على المعسكر، ويستمر السرد.`}},intro:{kicker:`تجربة تعليمية تفاعلية قرآنية وتاريخية`,lead:`تجوّل في إعادة بناء فنية لوادي بدر، وتابع خبر الغزوة كما يرويه القرآن — خروج المؤمنين من المدينة، واقتراب الجمعين، والمطر والنعاس، والاستغاثة والمدد الموعود، ثم العاقبة — مع روايات تاريخية مصنَّفة بوضوح ومفصولة عن النص القرآني.`,legendTitle:`كيف تقرأ ما تراه`,depiction:`احترامًا للنبي محمد ﷺ، لا يُصوَّر. ويدل على حضوره ضوء هادئ بلا هيئة — وهو أسلوب فني، لا ادعاء بأن نورًا كان يصدر عنه. ولا يظهر غيره من الناس إلا ظلالًا بلا وجوه.`,unseenNote:`الملائكة المذكورون في الآيات من عالم الغيب ولا يُصوَّرون. وحيث يُشار إلى المدد الموعود في (الأنفال: ٩) يُستعمل ضوء شاحب رمزًا مصنَّفًا بوضوح.`,sensitiveNote:`هذه تجربة تعليمية، لا لعبة قتال. ولا يُعرض اللقاء (الفصل ٦) إلا من بعيد، صفوفًا وغبارًا، بلا جراح؛ ويمكنك أن تختار إبقاء الكاميرا على المعسكر بدلًا من ذلك.`,begin:`ابدأ الرحلة الموجَّهة`,beginHint:`نحو ١١ دقيقة، مع الآيات والنصوص`,explore:`تجوّل بحرية`,exploreHint:`امشِ في الوادي وافتح نقاط المعلومات فيه`,chapters:`الخط الزمني`,settings:`الإعدادات`,controls:`التحكم`,about:`عن التجربة والمصادر`,exit:`العودة إلى الموقع الرئيسي`,soundNote:`في هذه التجربة أصوات محيطة هادئة، ويمكنك إيقافها من الإعدادات.`},hud:{chapterOf:`الفصل {n} من {total}`,references:`المراجع`,readVerses:`اقرأ الآيات`,verses:`الآيات`,chapters:`الخط الزمني`,help:`المساعدة`,settings:`الإعدادات`,pause:`قائمة الإيقاف`,reflection:`تأمّل`,inspectKey:`E`,inspect:`تفحّص`,inspectWhat:`تفحّص: {name}`,lookTitle:`انقر لتنظر حولك`,lookBody:`تحرّك بـ W A S D أو بالأسهم • Shift للجري • E للتفحّص • Esc لتحرير الفأرة`,watchChapter:`شاهد هذا الفصل`,narration:`السرد`,captionHint:`انقر على النص لقراءة الآيات والمصادر`,timeline:`الخط الزمني للأحداث`,timelineGo:`الفصل {n}: {title}`,chipLight:`ضوء رمزي: النبي ﷺ لا يُصوَّر`,chipSupport:`رمز للمدد الموعود (الأنفال: ٩) — الملائكة لا يُصوَّرون`,chipRain:`مطر في الليل (الأنفال: ١١)`,chipDistant:`يُعرض من بعيد — لا تُصوَّر أي جراح`,sourcesLabel:`المصادر`},transport:{prev:`الفصل السابق`,next:`الفصل التالي`,play:`تشغيل`,pause:`إيقاف مؤقت`,replay:`إعادة الفصل`,skip:`انتقل إلى الفصل التالي`,explore:`تجوّل من هنا`,exploreHint:`اترك الرحلة الموجَّهة وامشِ في المكان`,progress:`تقدّم الفصل`,speed:`سرعة التشغيل`},sensitive:{title:`قبل هذا الفصل`,body:`يعرض هذا الفصل اللقاء في بدر. ولا يُعرض إلا من بعيد، صفوفًا تتحرك وغبارًا: فلا ضربات ولا جراح ولا قتلى تُعرض، ولا شيء فيه قابل للعب. ويمكنك أيضًا إبقاء الكاميرا على المعسكر والسماء بينما تُعرض الآيات.`,watch:`شاهد من بعيد`,hidden:`السرد فقط (تبقى الكاميرا على المعسكر)`,skip:`انتقل إلى الفصل التالي`,remember:`تذكّر اختياري (يمكن تغييره من الإعدادات)`},panels:{close:`إغلاق`,back:`رجوع`,infoReadVerses:`اقرأ الآيات`,versesTitle:`الآيات`,versesThisChapter:`هذا الفصل`,versesAll:`المواضع الرئيسة`,versesSupporting:`آيات مساندة`,versesArabicSource:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني، الإصدار ١٫١)، tanzil.net — رخصة المشاع الإبداعي، النسبة ٣٫٠ (CC BY 3.0)، منقول كما هو دون تغيير.`,versesTranslationSource:`التفسير: التفسير الميسر، مجمع الملك فهد لطباعة المصحف الشريف، عن مشروع تنزيل (tanzil.net). وهو شرح لمعاني الآيات، وليس ترجمة.`,tafsirLabel:`التفسير الميسر:`,versesNote:`التفسير الميسر يشرح معاني الآيات، والقرآن هو النص العربي وحده. وإذا شرح عدة آيات معًا عُرض الشرح مرة واحدة بعد آخر آية من المجموعة. وما يذكره التفسير من تفاصيل لا تنص عليها الآيات — كتعيين المخاطَبين أو وصف ما فعله الملائكة — هو من أقوال المفسرين، لا من نص القرآن.`,tanzilLink:`زيارة tanzil.net`,quranCom:`افتح {ref} في موقع quran.com (ترجمات أخرى وتلاوة)`,chaptersTitle:`الخط الزمني`,chaptersIntro:`الأحداث في خمس مراحل. اختر فصلًا لتعود إليه.`,chapterCurrent:`الفصل الحالي`,chapterGo:`انتقل إلى الفصل {n}`,pauseTitle:`متوقف مؤقتًا`,resume:`متابعة`,restartChapter:`أعد هذا الفصل`,restartAll:`ابدأ من جديد`,mainMenu:`القائمة الرئيسة`,exitSite:`العودة إلى الموقع الرئيسي`,reflectionTitle:`تأمّل`,reflectionIntro:`ما تؤكد عليه آيات بدر، ملخَّصًا من الآيات المشار إليها. وهذه الخلاصات ليست ترجمة ولا تفسيرًا.`,sourceOpen:`اقرأ {name} (يُفتح في لسان جديد)`},settings:{title:`الإعدادات`,language:`اللغة`,languageNote:`تغيير اللغة يعيد تحميل الصفحة.`,graphics:`الرسوميات`,quality:`جودة الرسوميات`,qualityAuto:`تلقائي`,qualityLow:`منخفضة (الأفضل للهواتف القديمة)`,qualityMedium:`متوسطة`,qualityHigh:`عالية`,qualityNote:`تتكيّف الدقة تلقائيًا لتبقى الحركة سلسة.`,sound:`الصوت`,soundOn:`تشغيل الصوت`,volume:`مستوى الصوت`,comfort:`الراحة وإمكانية الوصول`,motion:`تقليل الحركة`,motionSystem:`اتّباع إعداد النظام`,motionOn:`مفعّل`,motionOff:`معطّل`,motionNote:`كاميرا أهدأ، وأضواء أثبت، وبلا حركات في الواجهة.`,sensitive:`اللقاء (الفصل ٦)`,sensitiveAsk:`اسأل قبل الفصل`,sensitiveDistant:`اعرضه من بعيد`,sensitiveHidden:`السرد فقط (تبقى الكاميرا على المعسكر)`,sensitivity:`حساسية النظر`,invertY:`عكس النظر العمودي`,markers:`إظهار العلامات على نقاط المعلومات`,textSize:`حجم النص`,textNormal:`عادي`,textLarge:`كبير`,textLarger:`أكبر`},help:{title:`التحكم`,desktop:`لوحة المفاتيح والفأرة`,touch:`شاشة اللمس`,guidedTitle:`الرحلة الموجَّهة`,guided:`تتحرك الكاميرا من تلقاء نفسها أثناء عرض النصوص. استخدم الشريط في الأسفل للإيقاف المؤقت أو الإعادة أو التخطي أو مغادرة الرحلة الموجَّهة، والخط الزمني للعودة إلى أي فصل. انقر على الأماكن المميَّزة أو المسها لتعرف المزيد — وتتوقف الرحلة أثناء القراءة.`,rows:[[`W A S D / الأسهم`,`الحركة`],[`Shift`,`الجري`],[`الفأرة`,`النظر حولك (انقر على المشهد أولًا)`],[`E أو النقر`,`تفحّص ما في المنتصف`],[`Esc`,`تحرير الفأرة / إغلاق اللوحة / الإيقاف المؤقت`],[`Space`,`تشغيل الرحلة الموجَّهة أو إيقافها`],[`N / B`,`الفصل التالي / السابق (في الرحلة الموجَّهة)`],[`١ – ٨`,`الانتقال إلى فصل`],[`V`,`قراءة آيات هذا الفصل`],[`T`,`الخط الزمني`],[`H`,`هذه المساعدة`],[`P`,`قائمة الإيقاف`]],touchRows:[[`عصا التحكم اليسرى`,`الحركة (ادفعها إلى آخرها للجري)`],[`السحب في مكان آخر`,`النظر حولك`],[`لمس مكان أو علامة`,`تفحّصه`],[`زر التفحّص`,`تفحّص ما في المنتصف`]],tip:`الحلقات المضيئة تحدد نقاط المعلومات: الآبار، والعريش، والمعسكرين، والكثيب، والميدان، والطريقين، والجمعين. وأثناء المطر، أو حين يظهر الضوء الرمزي للمدد الموعود، يمكنك أيضًا تفحّص السماء. ويمكنك إخفاء الحلقات من الإعدادات.`},about:{title:`عن التجربة والمصادر`,purposeTitle:`الغاية`,purpose:`عرض تعليمي يراعي الاحترام لغزوة بدر (رمضان سنة ٢ هـ / مارس ٦٢٤ م) كما يعرضها القرآن — ولا سيما (آل عمران: ١٢٣–١٢٧) و(الأنفال: ٥–١٩)، مع آيات مساندة من (آل عمران: ١٣؛ الأنفال: ٢٦؛ الأنفال: ٣٠؛ الأنفال: ٤١–٤٨؛ الحج: ٣٩–٤٠؛ القمر: ٤٥) — إلى جانب روايات تاريخية مصنَّفة بوضوح. وهي تجربة تعليمية، لا محاكاة قتالية.`,labelsTitle:`التصنيفات`,depictionTitle:`التصوير`,depiction:`لا يُصوَّر النبي محمد ﷺ أبدًا: يدل على حضوره ضوء هادئ بلا أي هيئة أو ملامح بشرية، أسلوبًا فنيًا (وليس ادعاءً بأن نورًا كان يصدر عنه). ولا يُصوَّر أي نبي. وسائر الناس ظلال بلا وجوه، ولا يُعيَّن أحد منهم. والملائكة المذكورون في الآيات لا يُصوَّرون؛ ويُستعمل ضوء شاحب من الأعلى، مع تصنيف واضح، رمزًا للمدد الموعود. ولا يُعرض اللقاء إلا من بعيد، بلا جراح ولا جثث ولا أسرى.`,historyTitle:`القرآن والتاريخ`,history:`القرآن هو المصدر الأول ويُنقل بنصه. أما التفاصيل التي لا يذكرها — الأعداد والأسماء والتواريخ والأماكن، وأثر المطر في الأرض، والعريش، والآبار — فمأخوذة من كتب الحديث والسير المبكرة، وتحمل تصنيف «رواية تاريخية» وتذكر مصدرها. وقد تختلف الروايات أحيانًا، وحيث تختلف يُذكر الاختلاف. ولا يُقدَّم شيء متخيَّل على أنه من القرآن.`,sourcesTitle:`المصادر التاريخية والتفسيرية`,locationTitle:`الموقع`,location:`تقع بدر على نحو ١٣٠ كم جنوب غرب المدينة، قرب ساحل البحر الأحمر. والوادي في هذه المحاكاة إعادة بناء فنية مستوحاة من أوصاف الموضع: شكله ومسافاته وآباره وكثيبه ومواضع المعسكرين متخيَّلة أو مختصرة، وليست ادعاءات عن ميدان المعركة الحقيقي.`,textsTitle:`النصوص`,arabic:`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني، الإصدار ١٫١)، tanzil.net، رخصة CC BY 3.0، منقول كما هو، ومقابَل آيةً آيةً بنسخة ثانية (api.alquran.cloud) وبنص مجمع الملك فهد (api.quran.com).`,translation:`التفسير: التفسير الميسر (مجمع الملك فهد لطباعة المصحف الشريف)، من ملفات مشروع تنزيل، يُعرض بعنوان «التفسير الميسر» لأنه شرح لا ترجمة.`,tanzilNotice:`إشعار حقوق مشروع تنزيل (منقول كما هو مطلوب):`,assetsTitle:`المحتوى الفني`,assets:`جميع النماذج ثلاثية الأبعاد والخامات والأصوات تُولَّد بالبرمجة في متصفحك؛ ولا تُستعمل نماذج أو صور أو تسجيلات خارجية. وخط القرآن هو Amiri Quran (SIL Open Font License 1.1)، وخط الواجهة العربية والكردية هو Vazirmatn (SIL Open Font License 1.1)، وكلاهما مرفق بالموقع. ولا تُجمع أي بيانات؛ وتُحفظ الإعدادات في متصفحك فقط.`,limitsTitle:`الحدود`,limits:`المسافات والتوقيت وأعداد الأشخاص واللباس والعتاد والخيام والطقس وهيئة الأماكن اختيارات فنية. والتفاصيل التاريخية غير المؤكدة مصنَّفة على أنها كذلك. والتسلسل إعادة بناء سينمائية هادئة، لا إعادة بناء للخطط الحربية.`},complete:{title:`اكتملت الرحلة`,body:`لقد تتبّعت خبر بدر كما يرويه القرآن، مع الروايات التاريخية المحيطة به.`,explore:`تجوّل بحرية`,restart:`شاهد من جديد من البداية`,passages:`اقرأ المواضع الرئيسة`,reflection:`تأمّل`},fallback:{noWebglTitle:`الرسوميات ثلاثية الأبعاد غير متاحة`,noWebgl:`تحتاج هذه التجربة إلى WebGL 2، وهو غير متوفر في هذا المتصفح أو الجهاز (أو معطّل). ويمكنك مع ذلك قراءة الأحداث والآيات أدناه.`,lostTitle:`توقفت الرسوميات`,lost:`أوقف المتصفح الرسوميات ثلاثية الأبعاد، وكثيرًا ما يكون ذلك لنفاد ذاكرة الجهاز. أعد التحميل للمتابعة، أو اقرأ الأحداث أدناه.`,errorTitle:`حدث خطأ`,error:`تعذّر تشغيل التجربة. يمكنك إعادة التحميل، أو قراءة الأحداث والآيات أدناه.`,reload:`إعادة التحميل`,storyTitle:`الأحداث فصلًا فصلًا`,readVerses:`اقرأ الآيات`}},Ou=`ڕووناکییە نەرمەکە وەک نەریتێکی هونەری ئامادەبوونی پەیامبەر موحەممەد (د.خ) دیاری دەکات. ئەو وێنا ناکرێت — نە پەیکەر، نە ڕوخسار، نە دەنگ — و ڕووناکییەکە بانگەشەی ئەوە نییە کە ڕووناکیی لێ دەردەچوو.`,ku=`ڕووناکییە کاڵەکەی سەرەوە و ئەو گەردیلانەی بەهێواشی دادەبارن هێمای کۆمەکێکن لە پەنهانەوە. فریشتەکان وێنا ناکرێن: قورئان وەسفی ئەوە ناکات کە چۆن دەرکەوتن، و هیچ شتێک لەوەی لێرەدا پیشان دەدرێت نابێت وەک وێنەی ئەوان وەربگیرێت.`,Au=`ئیبن ئیسحاق دەگێڕێتەوە کە ئاساییشبەخشان بە ئامۆژگاریی حوبابی کوڕی مونزیر لە نزیکترین بیر لە دوژمنەوە لایاندا، و حەوزێکیان لەوێ بۆ ئاو دروست کرد. زانایانی فەرموودە زنجیرەی گێڕانەوەی ئەم هەواڵە بە لاواز دادەنێن.`,ju={sourceKinds:{quran:{label:`قورئان`,description:`بڕگەیەکی وشە بە وشە لە وەرگێڕانی هێڤیی ئەو ئایەتەی ئاماژەی پێ کراوە.`},summary:{label:`پوختەی قورئانی`,description:`پوختەیەکی سادەی ئەوەی ئایەتە ئاماژەپێکراوەکان دەیڵێن.`},history:{label:`گێڕانەوەی مێژوویی`,description:`ئەوەی کۆکراوەیەکی ناودیاری فەرموودە یان سیرەیەکی کۆن دەیگێڕێتەوە. لە قورئاندا نەهاتووە؛ گێڕانەوەکان دەکرێت جیاواز بن.`},interpretation:{label:`ڕاڤە`,description:`بۆچوونی ڕاڤەکارانی ناودیاری قورئان. خودی قورئان نایڵێت.`},reconstruction:{label:`بونیادنانەوە`,description:`هەڵبژاردنێکی هونەرییە بۆ ئەم سیمولەیشنە، نەک تۆمارێکی مێژوویی.`},symbolic:{label:`هێمایی`,description:`هێمایەک بۆ شتێک کە وێنا ناکرێت: پەیامبەر (د.خ)، یان پەنهان. وێناکردن نییە و بانگەشەیش نییە دەربارەی ئەوەی چۆن بووە.`}},stages:{circumstances:`بارودۆخەکە`,movement:`دەرچوون`,approach:`نزیکبوونەوەی هێزەکان`,battle:`جەنگەکە و کۆمەکی خودایی`,outcome:`ئەنجام و تێڕامان`},stagesShort:{circumstances:`پاشخان`,movement:`دەرچوون`,approach:`نزیکبوونەوە`,battle:`جەنگ`,outcome:`ئەنجام`},chapters:{circumstances:{title:`پێش بەدر`,subtitle:`دەرکراو لە خانووەکانی خۆیان`,short:`پێش بەدر`,cues:{c1:`ئەم دۆڵە، گردەکانی، بیرەکانی و ئۆردوگاکانی بونیادنانەوەیەکی هونەرین کە لە وەسفەکانی بەدر ئیلهامیان وەرگرتووە. نەخشەی شوێنە ڕاستەقینەکە نییە، و دوورییەکانی کورت کراونەتەوە.`,c2:`سیرە کۆنەکان، وەک سیرەی ئیبن ئیسحاق، دەگێڕنەوە کە لە ساڵی ٦٢٢ی زایینیدا پەیامبەر موحەممەد (د.خ) و زۆرێک لە ئاساییشبەخشان دوای چەندین ساڵ چەوساندنەوە لە مەککەوە بۆ مەدینە کۆچیان کرد، و خانوو و ماڵوموڵکیان بەجێ هێشت.`,c3:`دەمێکیش ئەوانەی کە ڕاستییان پۆشیوە نەخشەیان لەدژت دەگێڕا تا بتچەسپێنن یان بتکوژن یان وەدەرتبنێن. نەخشە دەکێشن، خودایش نەخشە دەکێشێت. خودا باشترینی نەخشەکێشانە.`,c4:`ئەوانەی کە بەبێ هیچ ڕەواییەک لە خانووەکانی خۆیانەوە تەنیا لەبەر ئەوە دەرکران کە دەیانگوت: ”خودا پەروەردگارمانە“`,c5:`ئیزن(ی جەنگ) دراوە بەوانەی کە شۆڕش دەکەن بەهۆی ئەوەوە کە زوڵمیان لێ کراوە و بەدڵنیاییەوە خودا لەسەر سەرخستنیان زاتێکی فرەتوانە.`,c6:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر دەگێڕنەوە کە (الحج: ٣٩) یەکەم ئایەت بوو کە ڕێی بە ئاساییشبەخشان دا بجەنگن، و دوای کۆچکردن بۆ مەدینە دابەزی.`,c7:`لە ڕەمەزانی ساڵی دووەمی دوای کۆچدا (مارسی ٦٢٤ی زایینی)، کاروانێکی بازرگانیی گەورەی مەککە بە سەرکردایەتیی ئەبوو سوفیان لە شامەوە بە ڕێگای تەنیشت بەدردا دەگەڕایەوە. پەیامبەر (د.خ) لە مەدینەوە دەرچوو بۆ ئەوەی ڕێی پێ بگرێت (صەحیحی بوخاری ٣٩٥١؛ ئیبن ئیسحاق).`}},departure:{title:`دەرچوون`,subtitle:`وەک پەروەردگارت لە شەوگەکەت هێنایتیە دەر`,short:`دەرچوون`,cues:{d1:`وەک پەروەردگارت ڕاستانە لە شەوگەکەت هێنایتیە دەر؛ بەڕاستی کۆمجیایەک لە ئاساییشبەخشان ڕقن بوون.`,d2:`لەبارەی ڕاستییەوە دەمەقاڵێت لەگەڵدا دەکەن دوای ئەوە کە ئاشکرا بووە؛ (هێندە پێیان ناخۆشە) وەک وەهابێت کە بەرەو مردن ڕاپێچ بکرێن لە کاتێکدا خۆیان سەرنج بدەن.`,d3:`پەیامبەر موحەممەد (د.خ) وێنا ناکرێت. ڕووناکییەکی نەرم لەنێو ڕێبوارەکاندا ئامادەبوونی دیاری دەکات — تەنیا نەریتێکی هونەرییە، نەک ئەو بانگەشەیەی کە ڕووناکیی لێ دەردەچوو.`,d4:`صەحیحی بوخاری (٣٩٥٧) دەگێڕێتەوە کە ئەوانەی بۆ بەدر دەرچوون کەمێک زیاتر لە سێسەد و دە کەس بوون؛ صەحیحی موسلیم (١٧٦٣) ژمارەی سێسەد و نۆزدە دەدات. ئیبن ئیسحاق دەگێڕێتەوە کە نزیکەی حەفتا وشتریان هەبوو، بە نۆرە سواریان دەبوون، و ئەسپیان زۆر کەم بوو.`,d5:`دەمێکیش خودا بەڵێنی بە ئێوە دا کە یەکێک لەو دوو تایفەیە بۆ ئێوە بێت لە کاتێکدا خۆتان فرەخواز بوون کە بێدڕکەکە بۆ خۆتان بێت.`,d6:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر ئەو دوو تایفەیەی (الأنفال: ٧) بە کاروانەکە دادەنێن، کە پاسەوانیی کەمی لەگەڵ بوو، و بەو هێزە چەکدارەی قوڕەیش ناردی بۆ پاراستنی.`,d7:`ئیبن ئیسحاق دەگێڕێتەوە کە ئەبوو سوفیان کاتێک هەواڵی دەرچوونەکەی زانی، نێردراوێکی بۆ مەککە نارد بۆ داوای کۆمەک، و کاروانەکەی بە درێژاییی کەنار لادا، لە کاتێکدا قوڕەیش بە هێزێکی زۆرەوە دەرچوون.`,d8:`صەحیحی بوخاری (٣٩٥٢) دەگێڕێتەوە کە میقدادی کوڕی ئەسوەد بە پەیامبەری (د.خ) گوت ئەوان وەک قەومی مووسا نالێن کە خۆی و پەروەردگاری بڕۆن و بجەنگن، بەڵکو لە هەموو لایەکەوە لەگەڵی دەوەستن.`,d9:`ستوونەکە، جلوبەرگەکەی، وشترەکانی و ڕێگاکەی بەم دەربەندەدا بونیادنانەوەیەکی هونەرین. کەسەکان لەوەی گێڕانەوەکان دەیدەن کەمتر پیشان دەدرێن؛ ڕێژەی نێوان هەردوو هێزەکە پارێزراوە.`}},approach:{title:`نزیکبوونەوەی دوو کۆمەڵەکە`,subtitle:`لاشیوەکەی ئەمسەر و لاشیوەکەی ئەوسەر`,short:`نزیکبوونەوە`,cues:{a1:`دەمێک ئێوە لە لاشیوەکەی ئەمسەرەوە بوون، ئەوانیش لە لاشیوەکەی ئەوسەرەوە بوون؛ کاروانسوارەکەیش لەخوارووتانەوە بوو.`,a2:`ئیبن ئیسحاق ناوی هەردوو لایەنەکە دەبات: ئاساییشبەخشان لە لای نزیکی دۆڵەکە، ”العدوة الدنيا“، بەرەو مەدینە لایاندا؛ قوڕەیشیش لە لای دووری، ”العدوة القصوى“، لە پشت گردە لمینەکەی عەقەنقەلەوە.`,a3:`صەحیحی موسلیم (١٧٦٣) ژمارەی سوپای مەککە بە هەزار دەدات. ئیبن ئیسحاق دەڵێت ئەسپ و وشتری زۆریان لەگەڵ خۆیان هێنا — و کاروانەکە لەو ماوەیەدا بە درێژاییی کەنار دەرباز ببوو.`,a4:`وەک ئەوانەیش مەبن کە لە خانووەکانی خۆیانەوە بەلەخۆباییبوون و ڕوبازی بۆ خەڵک دەر چوون و ئەوانی دیکەیان لە ڕێی خودا لادەدا. خودا بە هەرچییەک کە ئەوانە دەیکەن زاتێکی دەوردەرە.`,a5:`ئەگەر بەڵێنتان بۆ کات و شوێنەکە بە یەکتر بدایە، لەبارەی کات و شوێنە بەڵێندراوەکەوە لەگەڵ یەکتردا ناکۆک دەبوون، بەڵام تا خودا کارێکی ئەنجامدراو جێبەجێ بکات`,a6:`صەحیحی بوخاری (٣٩٥١) تۆمار دەکات کە پەیامبەر (د.خ) بۆ کاروانی قوڕەیش دەرچووبوو، تا ئەوەی خودا ئاساییشبەخشان و دوژمنەکەیانی بێ هیچ ژوانێک بە یەکتر گەیاند.`,a7:Au,a8:`ئۆردوگاکان، بیرەکان، گردە لمینەکە و ڕێگاکان لەم بونیادنانەوەیەدا بە ئازادی دانراون؛ شوێن و دووریی ڕاستەقینەیان جیاوازە.`}},night:{title:`باران و پشوو`,subtitle:`ئاو لە ئاسمانەوە`,short:`شەوەکە`,cues:{n1:`دەمێک سووکەخەوەکە بۆ هێمنییەک ئێوەی دەپۆشی و لە ئاسمانەوە ئاوێکی تایبەتی بۆ سەرتان دادەبەزاند`,n2:`تا بەهۆیەوە پاکتان بکاتەوە و ورتەورتی شەیتانتان لێ‌ لا بدات و دڵتان ببەستێت و پێیەکانی پێ بچەسپێنێت.`,n3:`ئەو گێڕانەوانەی تەبەری هێناونی، و گێڕانەوەکەی ئیبن ئیسحاق، دەڵێن باران لمە نەرمەکەی لەژێر پێی ئاساییشبەخشاندا ڕەق کرد لە کاتێکدا قوڕەیشی لە لای خۆیانەوە ڕاگرت. خودی قورئان دەڵێت کە پێی ئاساییشبەخشانی چەسپاند.`,n4:`دەمێک لە خەونەکەتدا خودا ئەوانی بە تۆزەژمارەیەک پێشانی تۆ دا. ئەگەر ئەوانی بە ژمارەیەکی زۆر پێشانی ئێوە بدایە، شکستتان دەهێنا و لەبارەی کاروبارەکەوە کێشمەکێشتان لەگەڵ یەکتردا دەبوو،`,n5:`بەڵام خودا سەلامەتیی فەراهەم هێنا. بەڕاستی ئەو فرەزانە بە هەرچییەک کە لەنێو سینەکانە.`,n6:`شەوەکە، بارانەکە، ئۆردوگا نوستووەکە و ئاگرەکانی ئۆردوگا دوورەکە وێناکردنێکی هونەرین؛ قورئان وەسفی دیمەنەکە ناکات.`}},supplication:{title:`ڕیزەکان و پاڕانەوە`,subtitle:`کاتێک داوای کۆمەکتان لە پەروەردگارتان دەکرد`,short:`پاڕانەوە`,cues:{s1:`بەیانیی ڕۆژی جەنگەکە — هەینی، حەڤدەی ڕەمەزانی ساڵی دووەمی دوای کۆچ، بەپێی ئیبن ئیسحاق — هەردوو هێزەکە ڕووبەڕووی یەکتر ڕیز بوون.`,s2:`صەحیحی بوخاری (٢٩١٥) تۆمار دەکات کە پەیامبەر (د.خ) لە ڕۆژی بەدردا لەنێو چادرێکدا دوعای کرد و داوای لە خودا کرد پەیمان و بەڵێنەکەی خۆی بەجێ بهێنێت.`,s3:`صەحیحی موسلیم (١٧٦٣) زیاد دەکات کە ڕووی لە قیبلە کرد و دەستەکانی بۆ پاڕانەوە بەرز کردەوە تا عەباکەی لەسەر شانی کەوت، و ئەبووبەکر گەڕاندیەوە سەر شانی و دڵنیای کردەوە کە خودا بەڵێنەکەی بەجێ دەهێنێت.`,s4:Ou,s5:`دەمێک داوای کۆمەکیتان لە پەروەردگارتان دەکرد و بەچاکی وەڵامتانی دایەوە: ”بەڕاستی دەستڕۆیشتووکاری ئێوەم بە هەزار فریشتەی یەک لەدوای یەک.“`,s6:`صەحیحی موسلیم (١٧٦٣) ئەم ئایەتە بە پاڕانەوەکەی پەیامبەرەوە (د.خ) لە بەدردا دەبەستێتەوە.`,s7:ku,s8:`دەمێک بە ئاساییشبەخشانت دەگوت: ”مەگەر بەس نییە کە پەروەردگارتان بەفراوانی بەسێ هەزار فریشتەی دابەزێنراوەوە کۆمەکییتان دەکات؟“`,s9:`خودا ئەوەی تەنیا بە مژدەیەکی ڕوخۆشکەر سازاند تا دڵتانی پێ ئارام بکاتەوە. سەرخستن تەنیا لەلایەن خوداوەیە.`}},encounter:{title:`ڕووبەڕووبوونەوەکە`,subtitle:`بەڕاستی لەگەڵتانم`,short:`ڕووبەڕووبوونەوە`,cues:{e1:`ڕووبەڕووبوونەوەکە تەنیا لە دوورەوە پیشان دەدرێت، وەک ڕیزی جووڵاو و تەپوتۆزی بەرزبووەوە. هیچ زەبرێک، هیچ برینێک و هیچ کوژراوێک پیشان نادرێت، و هیچ شتێک لێرەدا یاری پێ ناکرێت.`,e2:`دەمێک پەروەردگارت سرووشی بۆ فریشتەکان نارد: ”بەڕاستی لەگەڵتانم، دەی ئەوانە بچەسپێنن کە ئیمانیان هێناوە. بەزوویی تۆقین وەنێو دڵی ئەوانە دەخەم کە ڕاستییان پۆشیوە.“`,e3:`ئەی ئەوانەی کە ئیمانتان هێناوە! کاتێک بەرەنگاری تاقمێک دەبنەوە، بچەسپن و یادی خودا زۆر بکەن بەشکو ڕێی کامەرانی بگرن.`,e4:`بێگومان! ئەگەر خۆتان ڕابگرن و خۆتان بپارێزن و لەم کاتەدا بۆتان بێن، پەروەردگارتان بەفراوانی کۆمەکیتان دەکات بەپێنج هەزار فریشتەی نیشانەدارکراوەوە.`,e5:`ڕاڤەکاران، لەوانە تەبەری، باس لەوە دەکەن کە ئایا بەڵێنی سێ هەزار و پێنج هەزار فریشتە (آل عمران: ١٢٤–١٢٥) پەیوەندییان بە بەدرەوە هەیە یان بە جەنگی دواتری ئوحودەوە. پێش ئەوان، (آل عمران: ١٢٣) ناوی بەدر دەبات؛ (الأنفال: ٩) باسی هەزار دەکات.`,e6:`بۆیە ئێوە ئەوانتان نەکوشت، بەڵکو خودا ئەوانی کوشت. نەیشتهاویشت دەمێک هاویشتت، بەڵکو خودا هاویشتی.`,e7:`تەبەری و ئیبن کەسیر گێڕانەوەگەلێک دەهێنن کە پەیامبەر (د.خ) لە بەدردا مستێک خۆڵ یان چەو بەرەو ڕیزەکانی مەککە هاویشت، و ئەم وشانە بەوەوە دەبەستنەوە.`,e8:`خودا ئەوەی بۆ ئێوە تەنیا کردە مژدانە و تا دڵتانی پێ ئارام بێت. سەرخستن تەنیا لە خودای پڕشکۆ و خیرەدمەندەوەیە.`,e9:`صەحیحی بوخاری (٢٩١٥) دەگێڕێتەوە کە پەیامبەر (د.خ) لە چادرەکە هاتە دەرەوە و ئەو ئایەتەی دەخوێندەوە کە هێڤی بەم شێوەیە وەری دەگێڕێت: «بەدڵنیاییەوە کۆمەڵەکە دەبەزێنرێت و پشتهەڵدەکەن» (القمر: ٤٥).`}},outcome:{title:`ئەنجامەکە`,subtitle:`بەداواپووچییەوە دەگەڕێنەوە`,short:`ئەنجام`,cues:{o1:`تاکو لایەک لەوانە بنەبڕ بکات کە ڕاستییان پۆشیوە یان بەتوندی بەرپەچیان بداتەوە تا بەداواپووچییەوە (بەرەو ئەو شوێنە) هەڵگەڕێنەوە (کە لێوەی هاتوون).`,o2:`بەدڵنیاییشەوە خودا ئێوەی لە بەدردا سەرخست لە کاتێکدا ئێوە سەرکز بوون. دەی تەقوای خودا بکەن، بەشکو سپاسی بکەن.`,o3:`صەحیحی موسلیم (١٧٦٣) و صەحیحی بوخاری (٣٩٨٦) دەگێڕنەوە کە حەفتا کەس لە هێزی مەککە کوژران و حەفتا کەس بە دیل گیران. ئیبن ئیسحاق ناوی چواردە کەس لە ئاساییشبەخشان دەهێنێت کە کوژران.`,o4:`ئەگەر داوای دەرووکردنەوە بکەن، ئەوا بەڕاستی دەرووکردنەوەتان بۆ هات. ئەگەریش دەست هەڵبگرن، ئەوا بۆ خۆتان باشترە.`,o5:`لە ڕۆژی فورقاندا بۆ سەر بەندەکەمان دامانبەزاندووە، ئەو ڕۆژەی کە دوو کۆمەڵەکە بەرەنگاری یەکتر بوونەوە.`,o6:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر ڕۆژی فورقان (يوم الفرقان) بە ڕۆژی بەدر لێک دەدەنەوە، کە تیایدا خودا ڕاستیی لە پووچەڵ جیا کردەوە.`,o7:`صەحیحی موسلیم (١٧٦٣) تۆمار دەکات کە پەیامبەر (د.خ) لەبارەی دیلەکانەوە ڕاوێژی بە هاوەڵانی کرد و سەرانەی ئازادکردنی لێیان وەرگرت.`,o8:`هیچ تەرمێک، هیچ برینێک و هیچ دیلێک پیشان نادرێت. مەیدانە بێدەنگەکە و کۆبوونەوەکەی لای بیرەکان وێناکردنێکی هونەرین.`}},reflection:{title:`ئیمان، خۆڕاگری، سپاس`,subtitle:`بەشکو سپاسی بکەن`,short:`تێڕامان`,cues:{r1:`لەیادیشتان بێت دەمێک ئێوە لەو زەوییەدا تۆزێک بوون، لاوازکراو بوون، دەترسان خەڵک بتانڕفێنێت، بۆیە پەناتانی دا و بەسەرخستنی خۆیەوە ئێوەی دەستڕۆیشتوو کرد و لە پاکوباشەکان ڕۆژیی پێتان دا بەشکو سپاسی بکەن.`,r2:`خۆتان ڕابگرن؛ بەڕاستی خودا لەگەڵ خۆڕاگرانە.`,r3:`بەڕاستی بۆ ئێوە نیشانەیەکی تایبەت هەبوو بۆتان لەو دوو تاقمەی کە بە یەکتر گەیشتن: تاقمێک لە ڕێی خودا قیتالی دەکرد و ئەوی دیکە ڕاستیپۆشێکی وەها بوو کە ئەوانیان دووهێندەی خۆیان دەبینی؛`,r4:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر دەگێڕنەوە کە زۆرێک ئەو دوو تاقمەی (آل عمران: ١٣) بە هەردوو سوپاکەی بەدر تێگەیشتوون.`,r5:`خودا هەرکێی بوێت بەسەرخستنی خۆیەوە دەستبەرزی دەکات. بەڕاستی لەوەدا پەندێکی تایبەت هەیە بۆ ڕاستیبینەکان.`,r6:`ئایەتەکانی بەدر سەرکەوتن تەنیا بۆ خودا دەگەڕێننەوە (الأنفال: ١٠؛ الأنفال: ١٧؛ آل عمران: ١٢٦)، بانگەواز بۆ خۆڕاگری و یادی خودا دەکەن (الأنفال: ٤٥–٤٦)، و داوای سپاس دەکەن (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,r7:`بەڕاستی خودا زاتێکی پڕشکۆ و خیرەدمەندە.`}}},objects:{valley:{name:`دۆڵی بەدر`,sections:{a:`دەمێک ئێوە لە لاشیوەکەی ئەمسەرەوە بوون، ئەوانیش لە لاشیوەکەی ئەوسەرەوە بوون؛ کاروانسوارەکەیش لەخوارووتانەوە بوو.`,b:`ئیبن ئیسحاق بەدر وەک ئاوگەیەک وەسف دەکات کە بیری هەبوو لەسەر ڕێگای کاروانەکان، و ناوی هەردوو لای دۆڵەکە دەبات: ”العدوة الدنيا“ (لای نزیک) و ”العدوة القصوى“ (لای دوور).`,c:`بەدر نزیکەی ١٣٠ کیلۆمەتر لە باشووری ڕۆژئاوای مەدینەیە، نەک زۆر دوور لە کەناری دەریای سوور؛ ئەمڕۆ شارۆچکەیەک بە هەمان ناو لەوێیە. مەدینە لە باکووری ڕۆژهەڵات و مەککە لە باشووری باشووری ڕۆژهەڵاتە، وەک لەم دۆڵەدا.`,d:`شێوەی دۆڵەکە، گردەکان، گردە لمینەکە و بیرەکان داهێنراون و دوورییەکانی کورت کراونەتەوە. نەخشەی مەیدانی جەنگەکە نییە، و ئەو شوێنانەی پیشان دەدرێن بانگەشە نین دەربارەی ئەوەی ڕووداوەکان لە کوێ ڕوویان دا.`}},caravan:{name:`کاروانەکە`,sections:{a:`دەمێکیش خودا بەڵێنی بە ئێوە دا کە یەکێک لەو دوو تایفەیە بۆ ئێوە بێت لە کاتێکدا خۆتان فرەخواز بوون کە بێدڕکەکە بۆ خۆتان بێت.`,b:`کاروانسوارەکەیش لەخوارووتانەوە بوو.`,c:`صەحیحی بوخاری (٣٩٥١) تۆمار دەکات کە پەیامبەر (د.خ) بۆ کاروانی قوڕەیش دەرچوو. ئیبن ئیسحاق دەگێڕێتەوە کە ئەبوو سوفیان سەرکردایەتیی دەکرد، لە شامەوە دەگەڕایەوە، و بە لادانی بەرەو کەنار دەرباز بوو.`,d:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر تایفە بێچەکەکەی (الأنفال: ٧) بەم کاروانە دادەنێن.`,e:`ژمارەی وشترەکان، بارەکانیان، وشترەوانەکان و ڕێگای کەنار کە لێرەدا پیشان دەدرێن هەڵبژاردنی هونەرین.`}},believers:{name:`ئاساییشبەخشان`,sections:{a:`بەدڵنیاییشەوە خودا ئێوەی لە بەدردا سەرخست لە کاتێکدا ئێوە سەرکز بوون.`,b:`لەیادیشتان بێت دەمێک ئێوە لەو زەوییەدا تۆزێک بوون، لاوازکراو بوون،`,c:`گێڕانەوەکان ژمارەیەکی کەمێک زیاتر لە سێسەد دەدەن: زیاتر لە سێسەد و دە (صەحیحی بوخاری ٣٩٥٧) یان سێسەد و نۆزدە (صەحیحی موسلیم ١٧٦٣). ئیبن ئیسحاق دەگێڕێتەوە کە نزیکەی حەفتا وشتریان هەبوو، بە نۆرە سواریان دەبوون، و ئەسپیان زۆر کەم بوو.`,d:`کەسەکان لەم ژمارانە کەمتر کێشراون، و ڕێژەی نێوان هەردوو هێزەکە بە نزیکی پارێزراوە. خەڵک تەنیا وەک سێبەری بێڕوخسار دەردەکەون؛ هیچ کەسێک دیاری ناکرێت و هیچ کەسێک لە کاتی قسەکردندا پیشان نادرێت.`}},quraysh:{name:`سوپای قوڕەیش`,sections:{a:`وەک ئەوانەیش مەبن کە لە خانووەکانی خۆیانەوە بەلەخۆباییبوون و ڕوبازی بۆ خەڵک دەر چوون و ئەوانی دیکەیان لە ڕێی خودا لادەدا.`,b:`دەمێکیش شەیتان کردەوەکانیانی بۆ ڕازاندنەوە و گوتی: ”هیچ کەس ئەمڕۆ بەسەرتانەوە زاڵ نابێت و بەدڵنیاییەوە من دراوسێیەکی تایبەتم بۆ ئێوە.“`,c:`تاقمەکەیشتان هێندەی شتێک بێنیازتان ناکات، هەرچەند زۆریش بن. بەدڵنیاییەوە خودا لەگەڵ ئاساییشبەخشانە.`,d:`صەحیحی موسلیم (١٧٦٣) ژمارەیان بە هەزار دەدات. ئیبن ئیسحاق ژمارەیەک لە نێوان نۆسەد و هەزاردا دەدات، و دەڵێت ئەسپ و وشتری زۆریان لەگەڵ خۆیان هێنا.`,e:`جلوبەرگیان، ئەسپەکانیان، ئاڵاکانیان و ئەو ژمارانەی لەسەر شاشە دەبینرێن هەڵبژاردنی هونەرین؛ ئاڵاکان هیچ دروشمێکیان لەسەر نییە. کشانەوەیان وەک ئەو کەسانە پیشان دەدرێت کە بەسەر گردە لمینەکەدا لە بەرچاو ون دەبن.`}},wells:{name:`بیرەکانی بەدر`,sections:{a:Au,b:`لە ئاسمانەوە ئاوێکی تایبەتی بۆ سەرتان دادەبەزاند تا بەهۆیەوە پاکتان بکاتەوە`,c:`ژمارەی بیرەکان، دیوارە بەردینەکانیان، چوارچێوە دارینەکە و قرقرەکەی، و حەوزەکە داهێنراون.`}},shelter:{name:`سێبەرگەکە`,sections:{a:`صەحیحی بوخاری (٢٩١٥) تۆمار دەکات کە پەیامبەر (د.خ) لە ڕۆژی بەدردا لەنێو چادرێکدا بوو کاتێک دوعای کرد و داوای لە خودا کرد پەیمان و بەڵێنەکەی خۆی بەجێ بهێنێت.`,b:`ئیبن ئیسحاق دەگێڕێتەوە کە بە پێشنیاری سەعدی کوڕی موعاز سێبەرگەیەک (”عەریش“) بۆ پەیامبەر (د.خ) دروست کرا کە بەسەر مەیدانەکەدا دەیڕوانی.`,c:`صەحیحی موسلیم (١٧٦٣) وەسفی پاڕانەوە درێژەکەی دەکات بە ڕووکردنە قیبلە، کە لە دوایدا خودا (الأنفال: ٩)ی دابەزاند.`,d:`دەمێک داوای کۆمەکیتان لە پەروەردگارتان دەکرد و بەچاکی وەڵامتانی دایەوە: ”بەڕاستی دەستڕۆیشتووکاری ئێوەم بە هەزار فریشتەی یەک لەدوای یەک.“`,e:Ou,f:`کۆڵەکە دارخورماکانی سێبەرگەکە، سەربانە پەڵکەخورماکەی و شوێنەکەی لەسەر ئەم بەرزاییە بونیادنانەوەیەکی هونەرین.`}},"near-camp":{name:`ئۆردوگای ئاساییشبەخشان`,sections:{a:`دەمێک سووکەخەوەکە بۆ هێمنییەک ئێوەی دەپۆشی`,b:`گێڕانەوەکەی ئیبن ئیسحاق وەسفی هێزێکی بچووک و کەمچەک دەکات کە سواری کەمی هەبوو.`,c:`چەند چادرێکی نزمی کەم، وشترە خەوێنراوەکان و ڕاخەرەکان هەڵبژاردنی هونەرین.`}},"far-camp":{name:`ئۆردوگای قوڕەیش`,sections:{a:`ئەوانیش لە لاشیوەکەی ئەوسەرەوە بوون؛`,b:`ئیبن ئیسحاق ئۆردوگای مەککە لە ”العدوة القصوى“ دادەنێت، لای دووری دۆڵەکە، لە پشت گردە لمینەکەی عەقەنقەلەوە.`,c:`قەبارەی ئۆردوگاکە، چادرەکانی، ئاگرەکانی و ئاژەڵە بەستراوەکانی هەڵبژاردنی هونەرین. دوای جەنگەکە بە بەتاڵی بە پێوە دەمێنێتەوە.`}},dune:{name:`گردە لمینەکە`,sections:{a:`ئیبن ئیسحاق باسی عەقەنقەل دەکات، گردێکی لمین کە قوڕەیش لە پشتییەوە لە لای دووری دۆڵەکە لایاندا.`,b:`قەبارە و شێوەی گردە لمینەکە لێرەدا داهێنراوە.`}},rain:{name:`بارانەکە`,sections:{a:`دەمێک سووکەخەوەکە بۆ هێمنییەک ئێوەی دەپۆشی و لە ئاسمانەوە ئاوێکی تایبەتی بۆ سەرتان دادەبەزاند تا بەهۆیەوە پاکتان بکاتەوە و ورتەورتی شەیتانتان لێ‌ لا بدات و دڵتان ببەستێت و پێیەکانی پێ بچەسپێنێت.`,b:`ئەو گێڕانەوانەی تەبەری هێناونی، و گێڕانەوەکەی ئیبن ئیسحاق، دەڵێن باران لمە نەرمەکەی لەژێر پێی ئاساییشبەخشاندا ڕەق کرد لە کاتێکدا قوڕەیشی لە لای خۆیانەوە ڕاگرت.`,c:`هەورەکان، بارانی شەو و زەوییە تەڕەکە وێناکردنێکی هونەریی ئایەتەکەن.`}},support:{name:`کۆمەکە بەڵێنپێدراوەکە`,sections:{a:`دەمێک داوای کۆمەکیتان لە پەروەردگارتان دەکرد و بەچاکی وەڵامتانی دایەوە: ”بەڕاستی دەستڕۆیشتووکاری ئێوەم بە هەزار فریشتەی یەک لەدوای یەک.“`,b:`دەمێک پەروەردگارت سرووشی بۆ فریشتەکان نارد: ”بەڕاستی لەگەڵتانم، دەی ئەوانە بچەسپێنن کە ئیمانیان هێناوە.“`,c:`مەگەر بەس نییە کە پەروەردگارتان بەفراوانی بەسێ هەزار فریشتەی دابەزێنراوەوە کۆمەکییتان دەکات؟`,d:`خودا ئەوەی تەنیا بە مژدەیەکی ڕوخۆشکەر سازاند تا دڵتانی پێ ئارام بکاتەوە. سەرخستن تەنیا لەلایەن خوداوەیە.`,e:`تەبەری وشەی ”مُردِفين“ (الأنفال: ٩)، کە هێڤی بە «یەک لەدوای یەک» وەری دەگێڕێت، بەوە لێک دەداتەوە کە بە دوای یەکتردا بە زنجیرە دێن، و بۆچوونە جیاوازەکان تۆمار دەکات لەبارەی ئەوەی ئایا بەڵێنەکانی (آل عمران: ١٢٤–١٢٥) پەیوەندییان بە بەدرەوە هەیە یان بە ئوحودەوە.`,f:ku,g:`ئەوەی ڕووناکییەکە کەی و لە کوێ دەردەکەوێت، ڕەنگەکەی و شێوەکەی هەڵبژاردنی هونەرین.`}},field:{name:`مەیدانەکە`,sections:{a:`لە ڕۆژی فورقاندا بۆ سەر بەندەکەمان دامانبەزاندووە، ئەو ڕۆژەی کە دوو کۆمەڵەکە بەرەنگاری یەکتر بوونەوە.`,b:`بۆیە ئێوە ئەوانتان نەکوشت، بەڵکو خودا ئەوانی کوشت.`,c:`ئەی ئەوانەی کە ئیمانتان هێناوە! کاتێک بەخشانەوە بەرەنگاری ئەوانە دەبنەوە کە ڕاستییان پۆشیوە، پشتیان تێ‌ مەکەن.`,d:`ئیبن ئیسحاق مێژووی جەنگەکە بە هەینی، حەڤدەی ڕەمەزانی ساڵی دووەمی دوای کۆچ (مارسی ٦٢٤ی زایینی) دادەنێت؛ هەندێک گێڕانەوە ڕۆژی دیکەی هەمان مانگ دەدەن.`,e:`قورئان وەسفی شوێنی ڕیزەکان یان ڕەوتی جەنگەکە ناکات. ئەوەی پیشان دەدرێت بونیادنانەوەیەکی خۆگرتوو و دوورە: هیچ چەکێک لە کاتی بەکارهێناندا پیشان نادرێت و هیچ کەسێک لە کاتی کەوتندا پیشان نادرێت.`}},equipment:{name:`جلوبەرگ و کەلوپەل`,sections:{a:`جلوبەرگ و کەلوپەل لە مێژووەوە ئیلهامیان وەرگرتووە، نەک بە وردی بەڵگەدار کرابن: جلی پێچراو و سەرپێچ، ڕمی ڕاست ڕاگیراو، قەڵغانی خڕی پێست یان دار، و کڵاوی ئاسنی سادە بۆ هەندێک لە هێزی مەککە. ئەم وردەکارییانە نادڵنیان.`,b:`گێڕانەوەکەی ئیبن ئیسحاق سواریی کەمی ئاساییشبەخشان لەگەڵ ئەسپ و وشترەکانی قوڕەیش بەراورد دەکات.`,c:`هیچ چەکێک هەرگیز لە کاتی بەکارهێناندا پیشان نادرێت، و هیچ شتێک لەم سیمولەیشنەدا وەک جەنگ یاری پێ ناکرێت.`}},"road-medina":{name:`ڕێگای مەدینە`,sections:{a:`وەک پەروەردگارت ڕاستانە لە شەوگەکەت هێنایتیە دەر؛`,b:`مەدینە نزیکەی ١٣٠ کیلۆمەتر لە باکووری ڕۆژهەڵاتەوەیە. ڕێگاکە و دەربەندەکەی ئێرە بونیادنانەوەیەکی هونەرین.`}},"road-mecca":{name:`ڕێگای مەککە`,sections:{a:`وەک ئەوانەیش مەبن کە لە خانووەکانی خۆیانەوە بەلەخۆباییبوون`,b:`مەککە بە ڕێگا کۆنەکان نزیکەی ٣٠٠ کیلۆمەتر لە باشووری باشووری ڕۆژهەڵاتەوەیە. ڕێگاکە و دەربەندەکەی ئێرە بونیادنانەوەیەکی هونەرین.`}}},reflection:{help:`کۆمەک لە خوداوەیە: ئایەتەکان دەڵێن سەرکەوتن تەنیا لە خوداوەیە (الأنفال: ١٠؛ آل عمران: ١٢٦) و ئەوە خودا بوو کە هاویشتی (الأنفال: ١٧).`,few:`کەم و لاواز: ئاساییشبەخشان کەم بوون و لە چاوی جیهاندا «سەرکز» بوون، کەچی سەرکەوتنیان پێ درا (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,reassure:`دڵنیایی: سووکەخەو و باران نێردران بۆ ئارامکردنەوەی دڵەکانیان و چەسپاندنی پێیەکانیان (الأنفال: ١١)، و کۆمەکە بەڵێنپێدراوەکە وەک مژدە درا تا دڵەکان ئارام ببن (الأنفال: ١٠؛ آل عمران: ١٢٦).`,steadfast:`خۆڕاگری: کاتێک بەرەنگاری سوپایەک دەبنەوە، بە ئاساییشبەخشان دەگوترێت بچەسپن، یادی خودا زۆر بکەن و لەگەڵ یەکتردا کێشمەکێش نەکەن؛ خودا لەگەڵ خۆڕاگرانە (الأنفال: ٤٥–٤٦؛ آل عمران: ١٢٥).`,pride:`لەخۆبایی: ئەوانەی بە لەخۆباییبوون و بۆ خۆنیشاندان بە خەڵک دەرچوون وەک ئاگادارکردنەوەیەک دەخرێنە ڕوو، و شەیتان، کە کردەوەکانیانی بۆ ڕازاندنەوە، بەجێی هێشتن (الأنفال: ٤٧–٤٨).`,gratitude:`سپاس: ئاساییشبەخشان وەبیر دەهێنرێنەوە کە چۆن کەم و ترساو بوون، و پەنا و کۆمەکیان پێ درا، بەشکو سپاس بکەن (آل عمران: ١٢٣؛ الأنفال: ٢٦).`,furqan:`ڕاڤەکارانی وەک تەبەری و ئیبن کەسیر «ڕۆژی فورقان» (الأنفال: ٤١) بە ڕۆژی بەدر لێک دەدەنەوە، کاتێک ڕاستی لە پووچەڵ جیا کرایەوە.`},sources:{"bukhari-2915":{title:`صەحیحی بوخاری، ژمارە ٢٩١٥ (هەروەها ٤٨٧٥)، گێڕانەوەی ئیبن عەبباس`,short:`صەحیحی بوخاری ٢٩١٥`,note:`دوعای پەیامبەر (د.خ) لەنێو چادرێکدا لە ڕۆژی بەدردا، و خوێندنەوەی (القمر: ٤٥) کاتێک هاتە دەرەوە.`},"bukhari-3951":{title:`صەحیحی بوخاری، ژمارە ٣٩٥١، گێڕانەوەی کەعبی کوڕی مالیک`,short:`صەحیحی بوخاری ٣٩٥١`,note:`پەیامبەر (د.خ) بۆ کاروانی قوڕەیش دەرچوو، تا ئەوەی خودا ئەوان و دوژمنەکەیانی بێ ژوان بە یەکتر گەیاند.`},"bukhari-3952":{title:`صەحیحی بوخاری، ژمارە ٣٩٥٢، گێڕانەوەی ئیبن مەسعوود`,short:`صەحیحی بوخاری ٣٩٥٢`,note:`قسەکانی پشتگیریی میقدادی کوڕی ئەسوەد پێش جەنگەکە.`},"bukhari-3957":{title:`صەحیحی بوخاری، ژمارە ٣٩٥٧–٣٩٥٩، گێڕانەوەی بەڕائی کوڕی عازیب`,short:`صەحیحی بوخاری ٣٩٥٧`,note:`ئەوانەی لە بەدردا بوون زیاتر لە سێسەد و دە کەس بوون.`},"bukhari-3986":{title:`صەحیحی بوخاری، ژمارە ٣٩٨٦ (هەروەها ٣٠٣٩)، گێڕانەوەی بەڕائی کوڕی عازیب`,short:`صەحیحی بوخاری ٣٩٨٦`,note:`حەفتا کەس لە هێزی مەککە لە بەدردا کوژران و حەفتا کەس بە دیل گیران.`},"muslim-1763":{title:`صەحیحی موسلیم، ژمارە ١٧٦٣ (کتێبی جیهاد و غەزاکان)، گێڕانەوەی عومەری کوڕی خەتتاب`,short:`صەحیحی موسلیم ١٧٦٣`,note:`هەزار بەرامبەر سێسەد و نۆزدە؛ پاڕانەوە بە ڕووکردنە قیبلە؛ دابەزینی (الأنفال: ٩)؛ حەفتا کوژراو و حەفتا دیل؛ ڕاوێژکردن لەبارەی دیلەکانەوە.`},"ibn-ishaq":{title:`ئیبن ئیسحاق، ”سيرة رسول الله“، بە داڕشتنەوەی ئیبن هیشام؛ وەرگێڕانی ئینگلیزیی ئەلفرێد گیۆم، ”ژیانی موحەممەد“ (چاپخانەی زانکۆی ئۆکسفۆرد، ١٩٥٥)`,short:`ئیبن ئیسحاق`,note:`کۆنترین سیرەی ماوە: کاروانەکە، ڕۆیشتنەکە، هەردوو لای دۆڵەکە و عەقەنقەل، بیرەکان، سێبەرگەکە، مێژووەکە، بارانەکە، ژمارەی وشتر و ئەسپەکان، ناوی کوژراوەکان. گێڕانەوەکانی زنجیرەی بەهێزیی جیاوازیان هەیە.`},tabari:{title:`تەبەری، ”جامع البيان عن تأويل آي القرآن“ (تەفسیری تەبەری)`,short:`تەبەری`,note:`گێڕانەوە و بۆچوونەکان لەبارەی (الحج: ٣٩؛ الأنفال: ٧؛ الأنفال: ٩؛ الأنفال: ١١؛ الأنفال: ١٧؛ الأنفال: ٤١؛ آل عمران: ١٣؛ آل عمران: ١٢٤–١٢٥).`},"ibn-kathir":{title:`ئیبن کەسیر، ”تفسير القرآن العظيم“`,short:`ئیبن کەسیر`,note:`گێڕانەوە و بۆچوونەکان لەبارەی (الحج: ٣٩؛ الأنفال: ٧؛ الأنفال: ١٧؛ الأنفال: ٤١؛ آل عمران: ١٣).`}}},Mu={app:{title:`جەنگی بەدر`,documentTitle:`جەنگی بەدر — ئەزموونێکی سێڕەهەندیی قورئانی`,tagline:`ئەزموونێکی فێرکاریی سێڕەهەندیی قورئانی و مێژوویی`,loading:{title:`ئامادەکردنی ئەزموونەکە`,renderer:`دەستپێکردنی وێنەکێش`,terrain:`شێوەدانی دۆڵەکە`,camps:`هەڵدانی ئۆردوگاکان`,vegetation:`دانانی دارە ئەقاقیا و بەردەکان`,armies:`دانانی کەسەکان`,caravan:`بارکردنی کاروانەکە`,atmosphere:`ڕەنگکردنی ئاسمان`,audio:`ئامادەکردنی دەنگ`,shaders:`ئامادەکردنی شەیدەرەکان`,ready:`ئامادەیە`},toasts:{edge:`گەیشتوویتە لێواری دۆڵە بونیادنراوەکە.`,qualityReload:`وردەکاریی زەوی و ڕووەکەکان دوای نوێکردنەوەی پەڕەکە دەگۆڕێن.`,audioBlocked:`دەنگ لەلایەن وێبگەڕەکەوە ڕێگری لێ کراوە. بۆ هەڵکردنی، لە هەر شوێنێک بدە.`,sensitiveHidden:`کامێراکە لەسەر ئۆردوگاکە دەمێنێتەوە؛ گێڕانەوەکە بەردەوام دەبێت.`}},intro:{kicker:`ئەزموونێکی فێرکاریی کارلێکەری قورئانی و مێژوویی`,lead:`بە نێو بونیادنانەوەیەکی هونەریی دۆڵی بەدردا بگەڕێ و شوێن گێڕانەوەی جەنگەکە بکەوە وەک قورئان دەیگێڕێتەوە — دەرچوونی ئاساییشبەخشان لە مەدینەوە، نزیکبوونەوەی هەردوو هێزەکە، باران و پشوودان، پاڕانەوە و ئەو کۆمەکەی بەڵێنی پێ درا، و ئەنجامەکە — لەگەڵ گێڕانەوە مێژووییەکان کە بە ڕوونی ناونیشانیان لەسەرە و لە دەقی قورئان جیا کراونەتەوە.`,legendTitle:`ئەوەی دەیبینیت چۆن بخوێنیتەوە`,depiction:`لە ڕووی ڕێزەوە، پەیامبەر موحەممەد (د.خ) وێنا ناکرێت. ڕووناکییەکی نەرم و بێشێوە ئامادەبوونی دیاری دەکات — نەریتێکی هونەرییە، نەک ئەو بانگەشەیەی کە ئەو ڕووناکیی لێ دەردەچوو. کەسانی دیکە تەنیا وەک سێبەری بێڕوخسار دەردەکەون.`,unseenNote:`ئەو فریشتانەی لە ئایەتەکاندا باسیان کراوە سەر بە پەنهانن و وێنا ناکرێن. لەو شوێنانەی کە ئاماژە بەو کۆمەکە دەکرێت کە لە (الأنفال: ٩) بەڵێنی پێ دراوە، ڕووناکییەکی کاڵ وەک هێمایەکی ناونیشاندار بەکار دێت.`,sensitiveNote:`ئەمە ئەزموونێکی فێرکارییە، نەک یارییەکی جەنگ. ڕووبەڕووبوونەوەکە (بەشی ٦) تەنیا لە دوورەوە پیشان دەدرێت، وەک ڕیز و تەپوتۆز، بێ هیچ برینێک؛ دەتوانیت هەڵبژێریت کە کامێراکە لەسەر ئۆردوگاکە بمێنێتەوە.`,begin:`دەستپێکردنی گەشتی ڕێنموونیکراو`,beginHint:`نزیکەی ١١ خولەک، لەگەڵ ئایەت و ژێرنووس`,explore:`گەڕانی ئازاد`,exploreHint:`بە دۆڵەکەدا بگەڕێ و شوێنە زانیارییەکانی بکەرەوە`,chapters:`هێڵی کات`,settings:`ڕێکخستنەکان`,controls:`کۆنترۆڵەکان`,about:`دەربارە و سەرچاوەکان`,exit:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`,soundNote:`ئەم ئەزموونە دەنگی دەوروبەری ئارامی تێدایە. دەتوانیت لە ڕێکخستنەکاندا بیکوژێنیتەوە.`},hud:{chapterOf:`بەشی {n} لە {total}`,references:`سەرچاوەکان`,readVerses:`خوێندنەوەی ئایەتەکان`,verses:`ئایەتەکان`,chapters:`هێڵی کات`,help:`یارمەتی`,settings:`ڕێکخستنەکان`,pause:`لیستی وەستان`,reflection:`تێڕامان`,inspectKey:`E`,inspect:`سەیرکردن`,inspectWhat:`سەیرکردن: {name}`,lookTitle:`بۆ سەیرکردنی دەوروبەر کرتە بکە`,lookBody:`بە W A S D یان تیرەکان بجووڵێ • Shift بۆ ڕاکردن • E بۆ سەیرکردن • Esc بۆ ئازادکردنی ماوس`,watchChapter:`سەیرکردنی ئەم بەشە`,narration:`گێڕانەوە`,captionHint:`بۆ خوێندنەوەی ئایەتەکان و سەرچاوەکان لە ژێرنووسەکە بدە`,timeline:`هێڵی کاتی گێڕانەوەکە`,timelineGo:`بەشی {n}: {title}`,chipLight:`ڕووناکیی هێمایی: پەیامبەر (د.خ) وێنا ناکرێت`,chipSupport:`هێمای ئەو کۆمەکەی بەڵێنی پێ درا (الأنفال: ٩) — فریشتەکان وێنا ناکرێن`,chipRain:`باران لە شەودا (الأنفال: ١١)`,chipDistant:`لە دوورەوە پیشان دەدرێت — هیچ برینێک وێنا ناکرێت`,sourcesLabel:`سەرچاوەکان`},transport:{prev:`بەشی پێشوو`,next:`بەشی دواتر`,play:`لێدان`,pause:`وەستاندن`,replay:`دووبارەکردنەوەی بەش`,skip:`بازدان بۆ بەشی دواتر`,explore:`لێرەوە بگەڕێ`,exploreHint:`گەشتی ڕێنموونیکراو جێبهێڵە و پیاسە بکە`,progress:`پێشکەوتنی بەش`,speed:`خێرایی لێدان`},sensitive:{title:`پێش ئەم بەشە`,body:`ئەم بەشە ڕووبەڕووبوونەوەکەی بەدر پیشان دەدات. تەنیا لە دوورەوە پیشان دەدرێت، وەک ڕیزی جووڵاو و تەپوتۆز: هیچ زەبرێک، هیچ برینێک و هیچ کوژراوێک پیشان نادرێت، و هیچ شتێک یاری پێ ناکرێت. هەروەها دەتوانیت کامێراکە لەسەر ئۆردوگاکە و ئاسمان بهێڵیتەوە لە کاتێکدا ئایەتەکان دەخرێنە ڕوو.`,watch:`سەیرکردن لە دوورەوە`,hidden:`تەنیا گێڕانەوە (کامێراکە لەسەر ئۆردوگاکە دەمێنێتەوە)`,skip:`بازدان بۆ بەشی دواتر`,remember:`هەڵبژاردنەکەم لەبیر بێت (لە ڕێکخستنەکاندا دەگۆڕدرێت)`},panels:{close:`داخستن`,back:`گەڕانەوە`,infoReadVerses:`خوێندنەوەی ئایەتەکان`,versesTitle:`ئایەتەکان`,versesThisChapter:`ئەم بەشە`,versesAll:`بڕگە سەرەکییەکان`,versesSupporting:`ئایەتە پشتگیرەکان`,versesArabicSource:`عەرەبی: دەقی قورئانی تەنزیل (ڕێنووسی عوسمانی، وەشانی ١.١)، tanzil.net — Creative Commons Attribution 3.0، وەک خۆی بەبێ گۆڕانکاری.`,versesTranslationSource:`کوردی: وەرگێڕانی هێڤی، وەرگێڕ: ئەلەند کاوە عەلی ئەحمەد — هەموو مافەکان پارێزراون؛ بە ڕێپێدانی وەرگێڕ بەکار هاتووە.`,tafsirLabel:`التفسير الميسر:`,versesNote:`وەرگێڕانی هێڤی وەک خۆی پیشان دەدرێت، لەگەڵ ئەو زیادکراوانەی کە وەرگێڕ لەنێو کەوانەدا داینابن. وەرگێڕان واتا دەگەیەنێت؛ تەنیا دەقە عەرەبییەکە قورئانە.`,tanzilLink:`سەردانی tanzil.net بکە`,quranCom:`کردنەوەی {ref} لە quran.com (وەرگێڕانی دیکە و خوێندنەوەی دەنگی)`,chaptersTitle:`هێڵی کات`,chaptersIntro:`گێڕانەوەکە لە پێنج قۆناغدا. بەشێک هەڵبژێرە بۆ ئەوەی دووبارە سەیری بکەیتەوە.`,chapterCurrent:`بەشی ئێستا`,chapterGo:`چوون بۆ بەشی {n}`,pauseTitle:`وەستێنراوە`,resume:`بەردەوامبوون`,restartChapter:`دەستپێکردنەوەی ئەم بەشە`,restartAll:`دەستپێکردنەوە لە سەرەتاوە`,mainMenu:`لیستی سەرەکی`,exitSite:`گەڕانەوە بۆ ماڵپەڕە سەرەکییەکە`,reflectionTitle:`تێڕامان`,reflectionIntro:`ئەوەی ئایەتەکانی بەدر جەختی لەسەر دەکەنەوە، بە پوختی لە ئایەتە ئاماژەپێکراوەکانەوە. ئەم پوختانە وەرگێڕان نین.`,sourceOpen:`خوێندنەوەی {name} (لە تابێکی نوێدا دەکرێتەوە)`},settings:{title:`ڕێکخستنەکان`,language:`زمان`,languageNote:`گۆڕینی زمان پەڕەکە نوێ دەکاتەوە.`,graphics:`گرافیک`,quality:`کوالیتیی گرافیک`,qualityAuto:`خۆکار`,qualityLow:`نزم (باشترین بۆ مۆبایلە کۆنەکان)`,qualityMedium:`مامناوەند`,qualityHigh:`بەرز`,qualityNote:`ڕوونی وێنە خۆکارانە دەگونجێنرێت بۆ ئەوەی جووڵە نەرم بمێنێتەوە.`,sound:`دەنگ`,soundOn:`دەنگ هەڵکراوە`,volume:`بەرزیی دەنگ`,comfort:`ئاسوودەیی و دەستڕاگەیشتن`,motion:`کەمکردنەوەی جووڵە`,motionSystem:`پەیڕەوی ڕێکخستنی سیستەم`,motionOn:`هەڵکراو`,motionOff:`کوژاوە`,motionNote:`کامێرای ئارامتر، ڕووناکیی جێگیرتر، بێ جووڵەی ڕووکار.`,sensitive:`ڕووبەڕووبوونەوەکە (بەشی ٦)`,sensitiveAsk:`پێش بەشەکە بپرسە`,sensitiveDistant:`لە دوورەوە پیشانی بدە`,sensitiveHidden:`تەنیا گێڕانەوە (کامێراکە لەسەر ئۆردوگاکە دەمێنێتەوە)`,sensitivity:`هەستیاریی سەیرکردن`,invertY:`پێچەوانەکردنەوەی سەیرکردنی ستوونی`,markers:`پیشاندانی نیشانە لەسەر شوێنە زانیارییەکان`,textSize:`قەبارەی نووسین`,textNormal:`ئاسایی`,textLarge:`گەورە`,textLarger:`گەورەتر`},help:{title:`کۆنترۆڵەکان`,desktop:`تەختەکلیل و ماوس`,touch:`شاشەی دەستلێدان`,guidedTitle:`گەشتی ڕێنموونیکراو`,guided:`کامێراکە خۆی دەجووڵێت لە کاتێکدا ژێرنووسەکان دەڕۆن. بە شریتەکەی خوارەوە دەتوانیت ڕابگریت، دووبارەی بکەیتەوە، بازبدەیت یان گەشتی ڕێنموونیکراو جێبهێڵیت، و بە هێڵی کات دەتوانیت بگەڕێیتەوە بۆ هەر بەشێک. بۆ زانیاریی زیاتر کرتە لە شوێنە دیارکراوەکان بکە یان لێیان بدە — لە کاتی خوێندنەوەدا گەشتەکە ڕادەگیرێت.`,rows:[[`W A S D / تیرەکان`,`جووڵە`],[`Shift`,`ڕاکردن`],[`ماوس`,`سەیرکردنی دەوروبەر (سەرەتا کرتە لە دیمەنەکە بکە)`],[`E یان کرتە`,`سەیرکردنی ئەوەی لە ناوەڕاستدایە`],[`Esc`,`ئازادکردنی ماوس / داخستنی پانێڵ / وەستان`],[`Space`,`لێدان یان وەستاندنی گەشتی ڕێنموونیکراو`],[`N / B`,`بەشی دواتر / پێشوو (ڕێنموونیکراو)`],[`١ – ٨`,`چوون بۆ بەشێک`],[`V`,`خوێندنەوەی ئایەتەکانی ئەم بەشە`],[`T`,`هێڵی کات`],[`H`,`ئەم یارمەتییە`],[`P`,`لیستی وەستان`]],touchRows:[[`دەستەی چەپ`,`جووڵە (بە تەواوی پاڵی بنێ بۆ ڕاکردن)`],[`ڕاکێشان لە شوێنێکی دیکە`,`سەیرکردنی دەوروبەر`],[`لێدان لە شوێنێک یان نیشانەیەک`,`سەیرکردنی`],[`دوگمەی سەیرکردن`,`سەیرکردنی ئەوەی لە ناوەڕاستدایە`]],tip:`ئەڵقە درەوشاوەکان شوێنە زانیارییەکان دیاری دەکەن: بیرەکان، سێبەرگەکە، ئۆردوگاکان، گردە لمینەکە، مەیدانەکە، ڕێگاکان و هەردوو هێزەکە. لە کاتی باراندا، یان کاتێک ڕووناکیی هێمایی کۆمەکە بەڵێنپێدراوەکە پیشان دەدرێت، دەتوانیت سەیری ئاسمانیش بکەیت. دەتوانیت لە ڕێکخستنەکاندا ئەڵقەکان بکوژێنیتەوە.`},about:{title:`دەربارە و سەرچاوەکان`,purposeTitle:`مەبەست`,purpose:`وێناکردنێکی فێرکاری و بەڕێزی جەنگی بەدر (ڕەمەزانی ساڵی ٢ی کۆچی / مارسی ٦٢٤ی زایینی) وەک قورئان دەیخاتە ڕوو — بە تایبەتی (آل عمران: ١٢٣–١٢٧) و (الأنفال: ٥–١٩)، لەگەڵ ئایەتی پشتگیر لە (آل عمران: ١٣؛ الأنفال: ٢٦؛ الأنفال: ٣٠؛ الأنفال: ٤١–٤٨؛ الحج: ٣٩–٤٠؛ القمر: ٤٥) — لەگەڵ گێڕانەوە مێژووییەکان کە بە ڕوونی ناونیشانیان لەسەرە. ئەزموونێکی فێرکارییە، نەک سیمولەیتەرێکی جەنگ.`,labelsTitle:`ناونیشانەکان`,depictionTitle:`وێناکردن`,depiction:`پەیامبەر موحەممەد (د.خ) هەرگیز وێنا ناکرێت: ڕووناکییەکی نەرم بێ هیچ شێوە و ڕوخسارێکی مرۆیی ئامادەبوونی دیاری دەکات، وەک نەریتێکی هونەری (بانگەشەی ئەوە نییە کە ڕووناکیی لێ دەردەچوو). هیچ هەواڵدەرێک وێنا ناکرێت. کەسانی دیکە سێبەری بێڕوخسارن، و هیچ کەسێک دیاری ناکرێت. ئەو فریشتانەی لە ئایەتەکاندا باسیان کراوە وێنا ناکرێن؛ ڕووناکییەکی کاڵ لە سەرەوە، لەگەڵ ناونیشانێک، وەک هێمای کۆمەکە بەڵێنپێدراوەکە بەکار دێت. ڕووبەڕووبوونەوەکە تەنیا لە دوورەوە پیشان دەدرێت، بێ برین، بێ تەرم و بێ دیل.`,historyTitle:`قورئان و مێژوو`,history:`قورئان سەرچاوەی سەرەکییە و وشە بە وشە دەهێنرێتەوە. ئەو وردەکارییانەی قورئان نایاندات — ژمارەکان، ناوەکان، مێژووەکان، شوێنەکان، کاریگەریی باران لەسەر زەوی، سێبەرگەکە، بیرەکان — لە کۆکراوەکانی فەرموودە و سیرە کۆنەکانەوە هاتوون، ناونیشانی ”گێڕانەوەی مێژوویی“یان لەسەرە و سەرچاوەکەیان ناو دەبەن. گێڕانەوەکان هەندێک جار جیاوازن؛ لە کوێ جیاواز بن، جیاوازییەکە دەگوترێت. هیچ شتێکی داهێنراو وەک قورئانی نەخراوەتە ڕوو.`,sourcesTitle:`سەرچاوە مێژوویی و ڕاڤەییەکان`,locationTitle:`شوێن`,location:`بەدر نزیکەی ١٣٠ کیلۆمەتر لە باشووری ڕۆژئاوای مەدینەیە، نزیک کەناری دەریای سوور. دۆڵەکەی ئەم سیمولەیشنە بونیادنانەوەیەکی هونەرییە کە لە وەسفەکانی شوێنەکە ئیلهامی وەرگرتووە: شێوەکەی، دوورییەکانی، بیرەکانی، گردە لمینەکەی و شوێنی ئۆردوگاکان داهێنراون یان کورت کراونەتەوە و بانگەشە نین دەربارەی مەیدانی ڕاستەقینەی جەنگەکە.`,textsTitle:`دەقەکان`,arabic:`دەقی عەرەبی: دەقی قورئانی تەنزیل (عوسمانی، وەشانی ١.١)، tanzil.net، CC BY 3.0، وەک خۆی گوازراوەتەوە و ئایەت بە ئایەت لەگەڵ کۆپییەکی دووەم (api.alquran.cloud) و دەقی کۆمەڵگەی پاشا فەهد (api.quran.com) بەراورد کراوە.`,translation:`وەرگێڕانی کوردی: وەرگێڕانی هێڤی (وەرگێڕانی واتاکانی قورئان بۆ کوردیی ناوەندی)، وەرگێڕ: ئەلەند کاوە عەلی ئەحمەد؛ بە ڕێپێدانی وەرگێڕ بەکار هاتووە.`,tanzilNotice:`ئاگاداریی مافی بڵاوکردنەوەی تەنزیل (وەک پێویستە دووبارە کراوەتەوە):`,assetsTitle:`کەرەستەکان`,assets:`هەموو مۆدێلە سێڕەهەندییەکان، ڕووپۆشەکان و دەنگەکان بە کۆد لە وێبگەڕەکەتدا دروست دەکرێن؛ هیچ مۆدێل، وێنە یان تۆمارێکی دەرەکی بەکار نایەت. فۆنتی عەرەبی Amiri Quran ـە (SIL Open Font License 1.1) و فۆنتی کوردی و عەرەبیی ڕووکار Vazirmatn ـە (SIL Open Font License 1.1)، هەردووکیان لەگەڵ ماڵپەڕەکەدا هاتوون. هیچ زانیارییەک کۆ ناکرێتەوە؛ ڕێکخستنەکان تەنیا لە وێبگەڕەکەتدا هەڵدەگیرێن.`,limitsTitle:`سنوورەکان`,limits:`دوورییەکان، کاتەکان، ژمارەی کەسەکان، جلوبەرگ، کەلوپەل، چادرەکان، کەشوهەوا و شێوەی شوێنەکان هەڵبژاردنی هونەرین. وردەکارییە مێژووییە نادڵنیاکان بەو شێوەیە ناونیشانیان لەسەرە. زنجیرەکە بونیادنانەوەیەکی سینەماییی نەرمە، نەک بونیادنانەوەی تاکتیکەکانی جەنگ.`},complete:{title:`گەشتەکە تەواو بوو`,body:`شوێن گێڕانەوەی بەدر کەوتیت وەک قورئان دەیگێڕێتەوە، لەگەڵ ئەو گێڕانەوە مێژووییانەی دەوریان داوە.`,explore:`گەڕانی ئازاد`,restart:`دووبارە سەیرکردن لە سەرەتاوە`,passages:`خوێندنەوەی بڕگە سەرەکییەکان`,reflection:`تێڕامان`},fallback:{noWebglTitle:`گرافیکی سێڕەهەندی بەردەست نییە`,noWebgl:`ئەم ئەزموونە پێویستی بە WebGL 2 هەیە، کە ئەم وێبگەڕە یان ئامێرە دابینی ناکات (یان کوژاوەتەوە). هێشتا دەتوانیت گێڕانەوەکە و ئایەتەکان لە خوارەوە بخوێنیتەوە.`,lostTitle:`گرافیکەکە وەستا`,lost:`وێبگەڕەکە گرافیکە سێڕەهەندییەکەی وەستاند، زۆرجار لەبەر ئەوەی بیرگەی ئامێرەکە کەم بووەتەوە. بۆ بەردەوامبوون پەڕەکە نوێ بکەرەوە، یان گێڕانەوەکە لە خوارەوە بخوێنەوە.`,errorTitle:`هەڵەیەک ڕوویدا`,error:`ئەزموونەکە نەیتوانی دەست پێ بکات. دەتوانیت پەڕەکە نوێ بکەیتەوە، یان گێڕانەوەکە و ئایەتەکان لە خوارەوە بخوێنیتەوە.`,reload:`نوێکردنەوە`,storyTitle:`گێڕانەوەکە، بەش بە بەش`,readVerses:`خوێندنەوەی ئایەتەکان`}},Nu=`The soft light marks the Prophet Muhammad’s presence as an artistic convention. He is not depicted — no figure, face or voice — and the light is not a claim that he gave off light.`,Pu=`The pale light from above and the slowly falling motes are a symbol of help from the unseen. The angels are not depicted: the Quran does not describe how they appeared, and nothing shown here should be taken as an image of them.`,Fu=`Ibn Ishaq reports that the believers camped at the well nearest the enemy on the advice of al-Ḥubāb ibn al-Mundhir, and built a basin there for water. Hadith scholars regard the chain of transmission of this report as weak.`,Iu={en:{lang:`en`,dir:`ltr`,digits:`latn`,quote:[`“`,`”`],ui:{app:{title:`The Battle of Badr`,documentTitle:`The Battle of Badr — A Quranic 3D Experience`,tagline:`A Quranic and historical 3D learning experience`,loading:{title:`Preparing the experience`,renderer:`Starting the renderer`,terrain:`Shaping the valley`,camps:`Pitching the camps`,vegetation:`Placing acacias and stones`,armies:`Placing the figures`,caravan:`Loading the caravan`,atmosphere:`Painting the sky`,audio:`Preparing sound`,shaders:`Compiling shaders`,ready:`Ready`},toasts:{edge:`You have reached the edge of the reconstructed valley.`,qualityReload:`Terrain and plant detail change after reloading the page.`,audioBlocked:`Sound is blocked by the browser. Tap anywhere to enable it.`,sensitiveHidden:`The camera stays on the camp; the narration continues.`}},intro:{kicker:`An interactive Quranic and historical learning experience`,lead:`Explore an artistic reconstruction of the valley of Badr and follow the account of the battle as the Quran gives it — the believers going out from Medina, the two forces drawing near, the rain and the rest, the supplication and the promised help, the outcome — with historical reports clearly labelled and kept apart from the Quranic text.`,legendTitle:`How to read what you see`,depiction:`Out of respect, the Prophet Muhammad is not depicted. A soft, featureless light marks his presence — an artistic convention, not a claim that he gave off light. Other people appear only as faceless silhouettes.`,unseenNote:`The angels mentioned in the verses belong to the unseen and are not depicted. Where the help promised in 8:9 is evoked, a pale light is used as a labelled symbol.`,sensitiveNote:`This is a learning experience, not a combat game. The encounter (chapter 6) is shown only at a distance, as ranks and dust, with no injuries; you can choose to keep the camera on the camp instead.`,begin:`Begin the guided journey`,beginHint:`About 11 minutes, with verses and captions`,explore:`Explore freely`,exploreHint:`Walk the valley and open its information points`,chapters:`Timeline`,settings:`Settings`,controls:`Controls`,about:`About & sources`,exit:`Return to the main website`,soundNote:`This experience has quiet ambient sound. You can turn it off in Settings.`},hud:{chapterOf:`Chapter {n} of {total}`,references:`References`,readVerses:`Read the verses`,verses:`Verses`,chapters:`Timeline`,help:`Help`,settings:`Settings`,pause:`Pause menu`,reflection:`Reflection`,inspectKey:`E`,inspect:`Inspect`,inspectWhat:`Inspect: {name}`,lookTitle:`Click to look around`,lookBody:`Move with W A S D or the arrow keys · Shift to run · E to inspect · Esc to release the mouse`,watchChapter:`Watch this chapter`,narration:`Narration`,captionHint:`Tap the caption to read the verses and sources`,timeline:`Timeline of the account`,timelineGo:`Chapter {n}: {title}`,chipLight:`Symbolic light: the Prophet is not depicted`,chipSupport:`Symbol of the promised help (8:9) — angels are not depicted`,chipRain:`Rain in the night (8:11)`,chipDistant:`Shown at a distance — no injuries are depicted`,sourcesLabel:`Sources`},transport:{prev:`Previous chapter`,next:`Next chapter`,play:`Play`,pause:`Pause`,replay:`Replay chapter`,skip:`Skip to the next chapter`,explore:`Explore here`,exploreHint:`Leave the guided journey and walk around`,progress:`Chapter progress`,speed:`Playback speed`},sensitive:{title:`Before this chapter`,body:`This chapter presents the encounter at Badr. It is shown only from a distance, as moving ranks and dust: no blows, injuries or fallen are shown, and nothing can be played. You may also keep the camera on the camp and the sky while the verses are given.`,watch:`Watch from a distance`,hidden:`Narration only (camera stays on the camp)`,skip:`Skip to the next chapter`,remember:`Remember my choice (can be changed in Settings)`},panels:{close:`Close`,back:`Back`,infoReadVerses:`Read the verses`,versesTitle:`The verses`,versesThisChapter:`This chapter`,versesAll:`Main passages`,versesSupporting:`Supporting verses`,versesArabicSource:`Arabic: Tanzil Quran Text (Uthmani script, v1.1), tanzil.net — Creative Commons Attribution 3.0, reproduced verbatim.`,versesTranslationSource:`English: Mohammed Marmaduke Pickthall, The Meaning of the Glorious Koran (1930) — public domain.`,tafsirLabel:`Al-Tafsir al-Muyassar:`,versesNote:`Pickthall’s English is archaic and is shown exactly as published, including his bracketed additions. A translation conveys the meaning; only the Arabic is the Quran.`,tanzilLink:`Visit tanzil.net`,quranCom:`Open {ref} on quran.com (other translations, recitation)`,chaptersTitle:`Timeline`,chaptersIntro:`The account in five stages. Choose a chapter to revisit it.`,chapterCurrent:`Current chapter`,chapterGo:`Go to chapter {n}`,pauseTitle:`Paused`,resume:`Resume`,restartChapter:`Restart this chapter`,restartAll:`Restart from the beginning`,mainMenu:`Main menu`,exitSite:`Return to the main website`,reflectionTitle:`Reflection`,reflectionIntro:`What the verses on Badr emphasise, summarised from the cited verses. These summaries are not a translation.`,sourceOpen:`Read {name} (opens a new tab)`},settings:{title:`Settings`,language:`Language`,languageNote:`Changing the language reloads the page.`,graphics:`Graphics`,quality:`Graphics quality`,qualityAuto:`Automatic`,qualityLow:`Low (best for older phones)`,qualityMedium:`Medium`,qualityHigh:`High`,qualityNote:`Resolution adapts automatically to keep motion smooth.`,sound:`Sound`,soundOn:`Sound on`,volume:`Volume`,comfort:`Comfort & accessibility`,motion:`Reduce motion`,motionSystem:`Follow system setting`,motionOn:`On`,motionOff:`Off`,motionNote:`Calmer camera, steadier lights, no interface animations.`,sensitive:`The encounter (chapter 6)`,sensitiveAsk:`Ask before the chapter`,sensitiveDistant:`Show from a distance`,sensitiveHidden:`Narration only (camera stays on the camp)`,sensitivity:`Look sensitivity`,invertY:`Invert vertical look`,markers:`Show markers on information points`,textSize:`Text size`,textNormal:`Normal`,textLarge:`Large`,textLarger:`Larger`},help:{title:`Controls`,desktop:`Keyboard and mouse`,touch:`Touch screen`,guidedTitle:`Guided journey`,guided:`The camera moves by itself while the captions play. Use the bar at the bottom to pause, replay, skip or leave the guided journey, and the timeline to revisit any chapter. Click or tap highlighted places to learn more — the journey pauses while you read.`,rows:[[`W A S D / arrow keys`,`Move`],[`Shift`,`Run`],[`Mouse`,`Look around (click the view first)`],[`E or click`,`Inspect what is in the centre`],[`Esc`,`Release the mouse / close a panel / pause`],[`Space`,`Play or pause the guided journey`],[`N / B`,`Next / previous chapter (guided)`],[`1 – 8`,`Jump to a chapter`],[`V`,`Read the verses for this chapter`],[`T`,`Timeline`],[`H`,`This help`],[`P`,`Pause menu`]],touchRows:[[`Left joystick`,`Move (push fully to run)`],[`Drag elsewhere`,`Look around`],[`Tap a place or marker`,`Inspect it`],[`Inspect button`,`Inspect what is in the centre`]],tip:`Glowing rings mark information points: the wells, the shelter, the camps, the dune, the field, the roads and the two forces. While it rains, or while the symbolic light of the promised help is shown, you can also inspect the sky. You can turn the rings off in Settings.`},about:{title:`About & sources`,purposeTitle:`Purpose`,purpose:`An educational, respectful visualisation of the Battle of Badr (Ramadan, 2 AH / March 624 CE) as the Quran presents it — primarily Al ʿImran 3:123–127 and Al-Anfal 8:5–19, with supporting verses 3:13, 8:26, 8:30, 8:41–48, 22:39–40 and 54:45 — together with clearly labelled historical reports. It is a learning experience, not a combat simulator.`,labelsTitle:`The labels`,depictionTitle:`Depiction`,depiction:`The Prophet Muhammad is never depicted: a soft light without any human form or features marks his presence, as an artistic convention (it is not a claim that he gave off light). No prophet is portrayed. Other people are faceless silhouettes, and no individual is identified. The angels mentioned in the verses are not depicted; a pale light from above is used, with a label, as a symbol of the promised help. The encounter is shown only from afar, without injuries, bodies or captives.`,historyTitle:`Quran and history`,history:`The Quran is the primary source and is quoted verbatim. Details it does not give — numbers, names, dates, places, the rain’s effect on the ground, the shelter, the wells — come from the hadith collections and the early biographies, are labelled “Historical report”, and name their source. Reports sometimes differ; where they do, the difference is stated. Nothing invented is presented as Quranic.`,sourcesTitle:`Historical and exegetical sources`,locationTitle:`Location`,location:`Badr lies about 130 km south-west of Medina, near the Red Sea coast. The valley in this simulation is an artistic reconstruction inspired by descriptions of the site: its shape, distances, wells, dune and camp positions are invented or compressed and are not claims about the real battlefield.`,textsTitle:`Texts`,arabic:`Arabic text: Tanzil Quran Text (Uthmani, v1.1), tanzil.net, CC BY 3.0, copied verbatim and cross-checked verse by verse against a second copy (api.alquran.cloud) and the King Fahd Complex text (api.quran.com).`,translation:`English translation: M. M. Pickthall, The Meaning of the Glorious Koran (1930), public domain; three digital copies compared.`,tanzilNotice:`Tanzil copyright notice (reproduced as required):`,assetsTitle:`Assets`,assets:`All 3D models, textures and sounds are generated by code in your browser; no external models, images or recordings are used. The Arabic font is Amiri Quran (SIL Open Font License 1.1), bundled with the site. No data is collected; settings are stored only in your browser.`,limitsTitle:`Limitations`,limits:`Distances, timings, numbers of figures, clothing, equipment, tents, weather and the appearance of places are artistic choices. Uncertain historical details are labelled as such. The sequence is a gentle, cinematic reconstruction, not a reconstruction of tactics.`},complete:{title:`The journey is complete`,body:`You have followed the account of Badr as the Quran gives it, with the historical reports that surround it.`,explore:`Explore freely`,restart:`Watch again from the beginning`,passages:`Read the main passages`,reflection:`Reflection`},fallback:{noWebglTitle:`3D graphics are not available`,noWebgl:`This experience needs WebGL 2, which this browser or device does not provide (or it is turned off). You can still read the account and the verses below.`,lostTitle:`The graphics stopped`,lost:`The browser stopped the 3D graphics, often because the device ran low on memory. Reload to continue, or read the account below.`,errorTitle:`Something went wrong`,error:`The experience could not start. You can reload, or read the account and the verses below.`,reload:`Reload`,storyTitle:`The account, chapter by chapter`,readVerses:`Read the verses`}},content:{sourceKinds:{quran:{label:`Quran`,description:`A verbatim excerpt from the Pickthall translation of the cited verse.`},summary:{label:`Quranic summary`,description:`A plain summary of what the cited verses state.`},history:{label:`Historical report`,description:`What a named hadith collection or early biography reports. Not stated in the Quran; reports can differ.`},interpretation:{label:`Interpretation`,description:`A view of named Quran commentators. Not stated in the Quran itself.`},reconstruction:{label:`Reconstruction`,description:`An artistic choice made for this simulation, not a historical record.`},symbolic:{label:`Symbolic`,description:`A symbol for something that is not depicted: the Prophet, or the unseen. Not a depiction and not a claim about how it looked.`}},stages:{circumstances:`Circumstances`,movement:`Setting out`,approach:`The forces approach`,battle:`The battle and divine support`,outcome:`Outcome and reflection`},stagesShort:{circumstances:`Context`,movement:`Setting out`,approach:`Approach`,battle:`Battle`,outcome:`Outcome`},chapters:{circumstances:{title:`Before Badr`,subtitle:`Driven from their homes`,short:`Before Badr`,cues:{c1:`This valley, its hills, wells and camps are an artistic reconstruction inspired by descriptions of Badr. It is not a map of the real site, and its distances are shortened.`,c2:`Early biographies such as Ibn Ishaq’s relate that in 622 CE the Prophet Muhammad and many believers emigrated from Mecca to Medina after years of persecution, leaving homes and property behind.`,c3:`And when those who disbelieve plot against thee (O Muhammad) to wound thee fatally, or to kill thee or to drive thee forth; they plot, but Allah (also) plotteth; and Allah is the best of plotters.`,c4:`Those who have been driven from their homes unjustly only because they said: Our Lord is Allah`,c5:`Sanction is given unto those who fight because they have been wronged; and Allah is indeed Able to give them victory;`,c6:`Commentators such as al-Ṭabarī and Ibn Kathīr report that 22:39 was the first verse permitting the believers to fight, revealed after the emigration to Medina.`,c7:`In Ramadan of the second year after the emigration (March 624 CE), a large Meccan trade caravan led by Abu Sufyan was returning from Syria along the route past Badr. The Prophet set out from Medina to meet it (Sahih al-Bukhari 3951; Ibn Ishaq).`}},departure:{title:`Setting Out`,subtitle:`Even as thy Lord caused thee to go forth`,short:`Setting out`,cues:{d1:`Even as thy Lord caused thee (Muhammad) to go forth from thy home with the Truth, and lo! a party of the believers were averse (to it).`,d2:`Disputing with thee of the Truth after it had been made manifest, as if they were being driven to death visible.`,d3:`The Prophet Muhammad is not depicted. A soft light among the travellers marks his presence — an artistic convention only, not a claim that he gave off light.`,d4:`Sahih al-Bukhari (3957) reports that those who went out to Badr were a little over three hundred and ten; Sahih Muslim (1763) gives three hundred and nineteen. Ibn Ishaq relates that they had about seventy camels, ridden in turns, and very few horses.`,d5:`And when Allah promised you one of the two bands (of the enemy) that it should be yours, and ye longed that other than the armed one might be yours.`,d6:`Commentators such as al-Ṭabarī and Ibn Kathīr identify the two bands of 8:7 as the caravan, lightly guarded, and the armed force that Quraysh sent out to protect it.`,d7:`Ibn Ishaq relates that Abu Sufyan, learning of the expedition, sent a messenger to Mecca for help and led the caravan away along the coast, while Quraysh marched out in force.`,d8:`Sahih al-Bukhari (3952) relates that al-Miqdād ibn al-Aswad told the Prophet they would not say, as the people of Moses had said, “Go you and your Lord and fight”, but would stand with him on every side.`,d9:`The column, its dress, its camels and its route through this pass are an artistic reconstruction. Fewer figures are shown than the reports give; the proportion between the two forces is kept.`}},approach:{title:`Two Hosts Draw Near`,subtitle:`The near bank and the yonder bank`,short:`Approach`,cues:{a1:`When ye were on the near bank (of the valley) and they were on the yonder bank, and the caravan was below you (on the coast plain).`,a2:`Ibn Ishaq names the two sides: the believers halted on the near side of the valley, al-ʿUdwa al-Dunyā, toward Medina; Quraysh on the far side, al-ʿUdwa al-Quṣwā, behind the sand hill of al-ʿAqanqal.`,a3:`Sahih Muslim (1763) gives the Meccan army as a thousand. Ibn Ishaq says it brought many horses and camels — and that the caravan had meanwhile escaped along the coast.`,a4:`Be not as those who came forth from their dwellings boastfully and to be seen of men, and debar (men) from the way of Allah, while Allah is surrounding all they do.`,a5:`And had ye trysted to meet one another ye surely would have failed to keep the tryst, but (it happened, as it did, without the forethought of either of you) that Allah might conclude a thing that must be done;`,a6:`Sahih al-Bukhari (3951) records that the Prophet had gone out for the caravan of Quraysh, until God brought the believers and their enemy together without any appointment.`,a7:Fu,a8:`The camps, the wells, the dune and the routes are placed freely in this reconstruction; their real positions and distances differ.`}},night:{title:`Rain and Rest`,subtitle:`Water from the sky`,short:`The night`,cues:{n1:`When He made the slumber fall upon you as a reassurance from him and sent down water from the sky upon you,`,n2:`that thereby He might purify you, and remove from you the fear of Satan, and make strong your hearts and firm (your) feet thereby.`,n3:`Reports related by al-Ṭabarī, and Ibn Ishaq’s account, say that the rain made the soft sand firm under the believers while it hindered Quraysh on their side. The Quran itself says that it made the believers’ feet firm.`,n4:`When Allah showed them unto thee (O Muhammad) in thy dream as few in number, and if He had shown them to thee as many, ye (Muslims) would have faltered and would have quarrelled over the affair.`,n5:`But Allah saved (you). Lo! He knoweth what is in the breasts (of men).`,n6:`The night, the rain, the sleeping camp and the fires of the far camp are an artistic depiction; the Quran does not describe the scene.`}},supplication:{title:`Ranks and Supplication`,subtitle:`When ye sought help of your Lord`,short:`Supplication`,cues:{s1:`On the morning of the battle — Friday, the seventeenth of Ramadan in the second year after the emigration, according to Ibn Ishaq — the two forces drew up facing one another.`,s2:`Sahih al-Bukhari (2915) records that the Prophet prayed in a tent on the day of Badr: “O Allah! I ask You the fulfillment of Your covenant and promise.”`,s3:`Sahih Muslim (1763) adds that he faced the qibla and raised his hands in supplication until his cloak slipped from his shoulders, and that Abu Bakr put it back and assured him God would fulfil His promise.`,s4:Nu,s5:`When ye sought help of your Lord and He answered you (saying): I will help you with a thousand of the angels, rank on rank.`,s6:`Sahih Muslim (1763) connects this verse with the Prophet’s supplication at Badr.`,s7:Pu,s8:`When thou didst say unto the believers: Is it not sufficient for you that your Lord should support you with three thousand angels sent down (to your help)?`,s9:`Allah appointed it only as good tidings, and that your hearts thereby might be at rest. Victory cometh only by the help of Allah.`}},encounter:{title:`The Encounter`,subtitle:`I am with you`,short:`Encounter`,cues:{e1:`The encounter is shown only from a distance, as moving ranks and rising dust. No blows, no injuries and no fallen are shown, and nothing here is playable.`,e2:`When thy Lord inspired the angels, (saying): I am with you. So make those who believe stand firm. I will throw fear into the hearts of those who disbelieve.`,e3:`O ye who believe! When ye meet an army, hold firm and think of Allah much, that ye may be successful.`,e4:`Nay, but if ye persevere, and keep from evil, and (the enemy) attack you suddenly, your Lord will help you with five thousand angels sweeping on.`,e5:`Commentators, among them al-Ṭabarī, discuss whether the promises of three and five thousand angels (3:124–125) refer to Badr or to the later battle of Uhud. Just before them, 3:123 names Badr; 8:9 speaks of a thousand.`,e6:`Ye (Muslims) slew them not, but Allah slew them. And thou (Muhammad) threwest not when thou didst throw, but Allah threw,`,e7:`Al-Ṭabarī and Ibn Kathīr relate reports that the Prophet threw a handful of dust or pebbles toward the Meccan ranks at Badr, and connect these words with it.`,e8:`Allah ordained this only as a message of good cheer for you, and that thereby your hearts might be at rest - Victory cometh only from Allah, the Mighty, the Wise -`,e9:`Sahih al-Bukhari (2915) relates that the Prophet came out of the tent reciting the verse rendered by Pickthall as “The hosts will all be routed and will turn and flee” (54:45).`}},outcome:{title:`The Outcome`,subtitle:`They retire, frustrated`,short:`Outcome`,cues:{o1:`That He may cut off a part of those who disbelieve, or overwhelm them so that they retire, frustrated.`,o2:`Allah had already given you the victory at Badr, when ye were contemptible. So observe your duty to Allah in order that ye may be thankful.`,o3:`Sahih Muslim (1763) and Sahih al-Bukhari (3986) report that seventy of the Meccan force were killed and seventy taken captive. Ibn Ishaq lists fourteen believers who were killed.`,o4:`(O Qureysh!) If ye sought a judgment, now hath the judgment come unto you. And if ye cease (from persecuting the believers) it will be better for you,`,o5:`the Day of Discrimination, the day when the two armies met.`,o6:`Commentators such as al-Ṭabarī and Ibn Kathīr explain the Day of Discrimination (yawm al-furqān) as the day of Badr, on which God distinguished truth from falsehood.`,o7:`Sahih Muslim (1763) records that the Prophet consulted his companions about the captives and accepted ransom for them.`,o8:`No bodies, wounds or captives are shown. The quiet field and the gathering at the wells are an artistic depiction.`}},reflection:{title:`Faith, Steadfastness, Gratitude`,subtitle:`That haply ye might be thankful`,short:`Reflection`,cues:{r1:`And remember, when ye were few and reckoned feeble in the land, and were in fear lest men should extirpate you, how He gave you refuge, and strengthened you with His help, and made provision of good things for you, that haply ye might be thankful.`,r2:`but be steadfast! Lo! Allah is with the steadfast.`,r3:`There was a token for you in two hosts which met: one army fighting in the way of Allah, and another disbelieving,`,r4:`Commentators such as al-Ṭabarī and Ibn Kathīr report that many understood the two hosts of 3:13 as the two armies at Badr.`,r5:`Thus Allah strengtheneth with His succour whom He will. Lo! herein verily is a lesson for those who have eyes.`,r6:`The verses on Badr give the victory to God alone (8:10, 8:17, 3:126), call for steadfastness and the remembrance of God (8:45–46), and ask for gratitude (3:123, 8:26).`,r7:`Lo! Allah is Mighty, Wise.`}}},objects:{valley:{name:`The valley of Badr`,sections:{a:`When ye were on the near bank (of the valley) and they were on the yonder bank, and the caravan was below you (on the coast plain).`,b:`Ibn Ishaq describes Badr as a watering place with wells on the caravan route, and names the two sides of the valley al-ʿUdwa al-Dunyā (the near side) and al-ʿUdwa al-Quṣwā (the far side).`,c:`Badr lies about 130 km south-west of Medina, not far from the Red Sea coast; a town of the same name stands there today. Medina is to the north-east and Mecca to the south-south-east, as in this valley.`,d:`The valley’s shape, hills, dune and wells are invented and its distances compressed. It is not a map of the battlefield, and the positions shown are not claims about where things happened.`}},caravan:{name:`The caravan`,sections:{a:`And when Allah promised you one of the two bands (of the enemy) that it should be yours, and ye longed that other than the armed one might be yours.`,b:`and the caravan was below you (on the coast plain).`,c:`Sahih al-Bukhari (3951) records that the Prophet went out for the caravan of Quraysh. Ibn Ishaq relates that it was led by Abu Sufyan, returning from Syria, and that it escaped by turning toward the coast.`,d:`Commentators such as al-Ṭabarī and Ibn Kathīr identify the unarmed band of 8:7 with this caravan.`,e:`The number of camels, their loads, the drivers and the coastal route shown here are artistic choices.`}},believers:{name:`The believers`,sections:{a:`Allah had already given you the victory at Badr, when ye were contemptible.`,b:`And remember, when ye were few and reckoned feeble in the land,`,c:`Reports give a little over three hundred: “over three hundred and ten” (Sahih al-Bukhari 3957) or three hundred and nineteen (Sahih Muslim 1763). Ibn Ishaq relates that they had about seventy camels, ridden in turns, and very few horses.`,d:`Fewer figures are drawn than these numbers, keeping roughly the proportion between the two forces. People appear only as faceless silhouettes; no individual is identified or shown speaking.`}},quraysh:{name:`The army of Quraysh`,sections:{a:`Be not as those who came forth from their dwellings boastfully and to be seen of men, and debar (men) from the way of Allah,`,b:`And when Satan made their deeds seem fair to them and said: No-one of mankind can conquer you this day, for I am your protector.`,c:`And your host will avail you naught, however numerous it be, and (know) that Allah is with the believers (in His Guidance).`,d:`Sahih Muslim (1763) gives their number as a thousand. Ibn Ishaq gives between nine hundred and a thousand, and says that they brought many horses and camels.`,e:`Their clothing, horses, banners and the numbers on screen are artistic choices; the banners carry no emblems. Their withdrawal is shown as figures passing out of sight over the dune.`}},wells:{name:`The wells of Badr`,sections:{a:Fu,b:`and sent down water from the sky upon you, that thereby He might purify you,`,c:`The number of wells, their stone linings, the timber frame with its pulley and the basin are invented.`}},shelter:{name:`The shelter`,sections:{a:`Sahih al-Bukhari (2915) records that the Prophet was in a tent on the day of Badr when he prayed: “O Allah! I ask You the fulfillment of Your covenant and promise.”`,b:`Ibn Ishaq relates that, at the suggestion of Saʿd ibn Muʿādh, a shelter (ʿarīsh) was built for the Prophet overlooking the field.`,c:`Sahih Muslim (1763) describes his long supplication facing the qibla, after which God revealed 8:9.`,d:`When ye sought help of your Lord and He answered you (saying): I will help you with a thousand of the angels, rank on rank.`,e:Nu,f:`The shelter’s palm-trunk posts, its roof of fronds and its place on this rise are an artistic reconstruction.`}},"near-camp":{name:`The believers’ camp`,sections:{a:`When He made the slumber fall upon you as a reassurance from him`,b:`Ibn Ishaq’s account describes a small, lightly equipped force with few mounts.`,c:`The few low tents, the couched camels and the bedding are artistic choices.`}},"far-camp":{name:`The camp of Quraysh`,sections:{a:`and they were on the yonder bank,`,b:`Ibn Ishaq places the Meccan camp at al-ʿUdwa al-Quṣwā, the far side of the valley, behind the sand hill of al-ʿAqanqal.`,c:`The size of the camp, its tents, fires and tethered animals are artistic choices. After the battle it is left standing, empty.`}},dune:{name:`The sand hill`,sections:{a:`Ibn Ishaq mentions al-ʿAqanqal, a sand hill behind which Quraysh halted on the far side of the valley.`,b:`The size and shape of the dune here are invented.`}},rain:{name:`The rain`,sections:{a:`When He made the slumber fall upon you as a reassurance from him and sent down water from the sky upon you, that thereby He might purify you, and remove from you the fear of Satan, and make strong your hearts and firm (your) feet thereby.`,b:`Reports related by al-Ṭabarī, and Ibn Ishaq’s account, say that the rain made the soft sand firm under the believers while it hindered Quraysh on their side.`,c:`The clouds, the night-time rain and the wet ground are an artistic depiction of the verse.`}},support:{name:`The promised help`,sections:{a:`When ye sought help of your Lord and He answered you (saying): I will help you with a thousand of the angels, rank on rank.`,b:`When thy Lord inspired the angels, (saying): I am with you. So make those who believe stand firm.`,c:`Is it not sufficient for you that your Lord should support you with three thousand angels sent down (to your help)?`,d:`Allah appointed it only as good tidings, and that your hearts thereby might be at rest. Victory cometh only by the help of Allah.`,e:`Al-Ṭabarī explains murdifīn (“rank on rank”, 8:9) as following one another in succession, and records differing views on whether the promises of 3:124–125 refer to Badr or to Uhud.`,f:Pu,g:`When and where the light appears, its colour and its shape are artistic choices.`}},field:{name:`The field`,sections:{a:`the Day of Discrimination, the day when the two armies met.`,b:`Ye (Muslims) slew them not, but Allah slew them.`,c:`O ye who believe! When ye meet those who disbelieve in battle, turn not your backs to them.`,d:`Ibn Ishaq dates the battle to Friday, the seventeenth of Ramadan in the second year after the emigration (March 624 CE); some reports give other days of that month.`,e:`The Quran does not describe the positions of the lines or the course of the fighting. What is shown is a restrained, distant reconstruction: no weapon is shown in use and no one is shown falling.`}},equipment:{name:`Clothing and equipment`,sections:{a:`Clothing and equipment are historically inspired, not documented in detail: wrapped garments and head cloths, spears held upright, round shields of hide or wood, and plain iron caps for some of the Meccan force. These details are uncertain.`,b:`Ibn Ishaq’s account contrasts the believers’ few mounts with the horses and camels of Quraysh.`,c:`No weapon is ever shown in use, and nothing in this simulation can be played as combat.`}},"road-medina":{name:`The road from Medina`,sections:{a:`Even as thy Lord caused thee (Muhammad) to go forth from thy home with the Truth,`,b:`Medina lies about 130 km to the north-east. The road and the pass here are an artistic reconstruction.`}},"road-mecca":{name:`The road from Mecca`,sections:{a:`Be not as those who came forth from their dwellings boastfully`,b:`Mecca lies roughly 300 km to the south-south-east by the old routes. The road and the pass here are an artistic reconstruction.`}}},reflection:{help:`Help is from God: the verses say that victory comes only from God (8:10, 3:126) and that it was God who threw (8:17).`,few:`Few and weak: the believers were few and “contemptible” in the eyes of the world, yet were given victory (3:123, 8:26).`,reassure:`Reassurance: slumber and rain were sent to calm their hearts and steady their feet (8:11), and the promised help was given as good tidings so that hearts might be at rest (8:10, 3:126).`,steadfast:`Steadfastness: when meeting an army, the believers are told to hold firm, to remember God much and not to dispute among themselves; God is with the steadfast (8:45–46, 3:125).`,pride:`Pride: those who came out boastfully, to be seen of men, are held up as a warning, and Satan, who made their deeds seem fair, deserted them (8:47–48).`,gratitude:`Gratitude: the believers are reminded how they were few and afraid, and given refuge and help, so that they might be thankful (3:123, 8:26).`,furqan:`Commentators such as al-Ṭabarī and Ibn Kathīr explain the “Day of Discrimination” (8:41) as the day of Badr, when truth was distinguished from falsehood.`},sources:{"bukhari-2915":{title:`Sahih al-Bukhari, no. 2915 (also 4875), narrated by Ibn ʿAbbās`,short:`Sahih al-Bukhari 2915`,note:`The Prophet’s prayer in a tent on the day of Badr, and his reciting 54:45 as he came out.`},"bukhari-3951":{title:`Sahih al-Bukhari, no. 3951, narrated by Kaʿb ibn Mālik`,short:`Sahih al-Bukhari 3951`,note:`The Prophet went out for the caravan of Quraysh, until God brought them and their enemy together without an appointment.`},"bukhari-3952":{title:`Sahih al-Bukhari, no. 3952, narrated by Ibn Masʿūd`,short:`Sahih al-Bukhari 3952`,note:`Al-Miqdād ibn al-Aswad’s words of support before the battle.`},"bukhari-3957":{title:`Sahih al-Bukhari, nos. 3957–3959, narrated by al-Barāʾ ibn ʿĀzib`,short:`Sahih al-Bukhari 3957`,note:`Those at Badr were “over three hundred and ten”.`},"bukhari-3986":{title:`Sahih al-Bukhari, no. 3986 (also 3039), narrated by al-Barāʾ ibn ʿĀzib`,short:`Sahih al-Bukhari 3986`,note:`Seventy of the Meccan force killed and seventy captured at Badr.`},"muslim-1763":{title:`Sahih Muslim, no. 1763 (Book of Jihad and Expeditions), narrated by ʿUmar ibn al-Khaṭṭāb`,short:`Sahih Muslim 1763`,note:`A thousand against three hundred and nineteen; the supplication facing the qibla; the revelation of 8:9; seventy killed and seventy captured; the consultation about the captives.`},"ibn-ishaq":{title:`Ibn Isḥāq, Sīrat Rasūl Allāh, in the recension of Ibn Hishām; English translation by A. Guillaume, The Life of Muhammad (Oxford University Press, 1955)`,short:`Ibn Ishaq`,note:`The earliest surviving biography: the caravan, the march, the two sides of the valley and al-ʿAqanqal, the wells, the shelter, the date, the rain, the numbers of camels and horses, the names of those killed. Its reports have chains of differing strength.`},tabari:{title:`al-Ṭabarī, Jāmiʿ al-Bayān ʿan Taʾwīl Āy al-Qurʾān (Tafsīr al-Ṭabarī)`,short:`al-Ṭabarī`,note:`Reports and views on 22:39, 8:7, 8:9, 8:11, 8:17, 8:41, 3:13 and 3:124–125.`},"ibn-kathir":{title:`Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm`,short:`Ibn Kathīr`,note:`Reports and views on 22:39, 8:7, 8:17, 8:41 and 3:13.`}}}},ckb:{lang:`ckb`,dir:`rtl`,digits:`arab`,quote:[`«`,`»`],ui:Mu,content:ju},ar:{lang:`ar`,dir:`rtl`,digits:`arab`,quote:[`﴿`,`﴾`],ui:Du,content:Eu}},Lu=[{code:`en`,name:`English`},{code:`ckb`,name:`کوردی`},{code:`ar`,name:`العربية`}],Ru=`quran-3d:language`,zu=Iu.en;function X(){return zu}function Bu(e){if(!e)return null;let t=e.trim().toLowerCase();return t===`en`||t.startsWith(`en-`)?`en`:t===`ckb`||t.startsWith(`ckb-`)||t===`ku-arab`||t===`ku-iq`||t===`ku-ir`||t===`sorani`?`ckb`:t===`ar`||t.startsWith(`ar-`)?`ar`:null}function Vu(){try{let e=Bu(new URLSearchParams(window.location.search).get(`lang`));if(e)return e}catch{}try{let e=Bu(window.localStorage.getItem(Ru));if(e)return e}catch{}try{for(let e of navigator.languages??[navigator.language]){let t=Bu(e);if(t)return t}}catch{}return`en`}function Hu(e){try{window.localStorage.setItem(Ru,e)}catch{}let t=new URL(window.location.href);t.searchParams.set(`lang`,e),window.location.replace(t.toString())}function Uu(e){zu=Iu[e]??Iu.en,typeof document<`u`&&(document.documentElement.lang=zu.lang,document.documentElement.dir=zu.dir,document.title=zu.ui.app.documentTitle)}var Wu=`٠١٢٣٤٥٦٧٨٩`;function Gu(e){let t=String(e);return zu.digits===`latn`?t:t.replace(/[0-9]/g,e=>Wu[Number(e)])}function Ku(){return zu.dir===`rtl`?` • `:` · `}function qu(e){return e.join(zu.dir===`rtl`?`، `:`, `)}function Ju(e){return`${zu.quote[0]}${e}${zu.quote[1]}`}function Yu(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?Gu(t[n]):e)}var Xu=class{constructor(e){q(this,`chapters`,void 0),q(this,`index`,0),q(this,`time`,0),q(this,`playing`,!1),q(this,`mode`,`guided`),q(this,`env`,ou()),q(this,`evaluators`,void 0),q(this,`target`,ou()),q(this,`blendFrom`,ou()),q(this,`blendElapsed`,0),q(this,`blendDuration`,0),q(this,`activeCueIndex`,-1),this.chapters=e,this.evaluators=e.map(e=>new lu(e.env)),this.evaluate()}get chapter(){return this.chapters[this.index]}get count(){return this.chapters.length}get progress(){return Ql(this.time/this.chapter.duration)}get ended(){return this.time>=this.chapter.duration}get isLast(){return this.index===this.chapters.length-1}get activeCue(){return this.activeCueIndex>=0?this.chapter.cues[this.activeCueIndex]:null}goTo(e,t,n=0,r=3.5){this.index=Math.max(0,Math.min(this.chapters.length-1,e)),this.time=Math.max(0,n),t===`smooth`?(su(this.blendFrom,this.env),this.blendElapsed=0,this.blendDuration=r):this.blendDuration=0,this.evaluate()}update(e){this.playing&&(this.time=Math.min(this.time+e,this.chapter.duration)),this.blendDuration>0&&(this.blendElapsed+=e,this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)),this.evaluate()}evaluate(){if(this.evaluators[this.index].evaluate(this.progress,this.target),this.blendDuration>0){let e=eu(this.blendElapsed/this.blendDuration);cu(this.env,this.blendFrom,this.target,e)}else su(this.env,this.target);if(this.activeCueIndex=-1,this.mode===`guided`){let e=this.chapter.cues;for(let t=0;t<e.length;t++){let n=e[t];if(this.time>=n.at&&this.time<n.at+n.dur){this.activeCueIndex=t;break}}}}},Zu=.5*(Math.sqrt(3)-1),Qu=(3-Math.sqrt(3))/6,$u=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],ed=new class{constructor(e=1){q(this,`perm`,new Uint8Array(512));let t=ru(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}for(let e=0;e<512;e++)this.perm[e]=n[e&255]}noise(e,t){let n=this.perm,r=(e+t)*Zu,i=Math.floor(e+r),a=Math.floor(t+r),o=(i+a)*Qu,s=e-(i-o),c=t-(a-o),l=+(s>c),u=s>c?0:1,d=s-l+Qu,f=c-u+Qu,p=s-1+2*Qu,m=c-1+2*Qu,h=i&255,g=a&255,_=0,v=0,y=0,b=.5-s*s-c*c;if(b>0){let e=$u[n[h+n[g]]&7];b*=b,_=b*b*(e[0]*s+e[1]*c)}let x=.5-d*d-f*f;if(x>0){let e=$u[n[h+l+n[g+u]]&7];x*=x,v=x*x*(e[0]*d+e[1]*f)}let S=.5-p*p-m*m;if(S>0){let e=$u[n[h+1+n[g+1]]&7];S*=S,y=S*S*(e[0]*p+e[1]*m)}return 70*(_+v+y)}fbm(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.noise(e*o,t*o),c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=4,r=2,i=.5){let a=.5,o=1,s=0,c=0;for(let l=0;l<n;l++){let n=1-Math.abs(this.noise(e*o,t*o));s+=a*n*n,c+=a,a*=i,o*=r}return s/c}}(5711),td=class{constructor(e,t=24){q(this,`points`,void 0),q(this,`xs`,void 0),q(this,`zs`,void 0),q(this,`cum`,void 0),q(this,`marks`,[]),q(this,`tmp`,[0,0]),this.points=e;let n=e.length;if(n<2)throw Error(`PathXZ needs at least two points`);let r=[],i=[],a=[];for(let o=0;o<n-1;o++){let s=e[Math.max(0,o-1)],c=e[o],l=e[o+1],u=e[Math.min(n-1,o+2)];a.push(r.length);for(let e=0;e<t;e++){let[n,a]=nd(s,c,l,u,e/t);r.push(n),i.push(a)}}a.push(r.length),r.push(e[n-1][0]),i.push(e[n-1][1]),this.xs=Float64Array.from(r),this.zs=Float64Array.from(i),this.cum=new Float64Array(r.length);for(let e=1;e<r.length;e++)this.cum[e]=this.cum[e-1]+Math.hypot(r[e]-r[e-1],i[e]-i[e-1]);for(let e of a)this.marks.push(this.cum[e])}get length(){return this.cum[this.cum.length-1]}at(e,t){let n=this.cum,r=n.length,i=Zl(e,0,n[r-1]),a=0,o=r-1;for(;o-a>1;){let e=a+o>>1;n[e]<=i?a=e:o=e}let s=n[o]-n[a],c=s>1e-9?(i-n[a])/s:0;t[0]=this.xs[a]+(this.xs[o]-this.xs[a])*c,t[1]=this.zs[a]+(this.zs[o]-this.zs[a])*c;let l=Math.max(0,i-1),u=Math.min(n[r-1],i+.05);u-l<.5&&(l=0,u=Math.min(n[r-1],.6)),this.rawAt(l);let d=this.tmp[0],f=this.tmp[1];return this.rawAt(u),Math.atan2(this.tmp[0]-d,this.tmp[1]-f)}rawAt(e){let t=this.cum,n=0,r=t.length-1;for(;r-n>1;){let i=n+r>>1;t[i]<=e?n=i:r=i}let i=t[r]-t[n],a=i>1e-9?(e-t[n])/i:0;this.tmp[0]=this.xs[n]+(this.xs[r]-this.xs[n])*a,this.tmp[1]=this.zs[n]+(this.zs[r]-this.zs[n])*a}};function nd(e,t,n,r,i){let a=(e,t)=>Math.max(1e-4,Math.hypot(t[0]-e[0],t[1]-e[1])**.5),o=0+a(e,t),s=o+a(t,n),c=s+a(n,r),l=o+(s-o)*i,u=[0,0];for(let i=0;i<2;i++){let a=(o-l)/(o-0)*e[i]+(l-0)/(o-0)*t[i],d=(s-l)/(s-o)*t[i]+(l-o)/(s-o)*n[i],f=(c-l)/(c-s)*n[i]+(l-s)/(c-s)*r[i],p=(s-l)/(s-0)*a+(l-0)/(s-0)*d,m=(c-l)/(c-o)*d+(l-o)/(c-o)*f;u[i]=(s-l)/(s-o)*p+(l-o)/(s-o)*m}return u}var rd={terrainRadius:780,midRadius:2600,farRadius:7e3,playRadius:640,seed:624},id={radius:600,wobble:70},ad={north:{angle:Math.atan2(-.87,.5),width:.22},south:{angle:Math.atan2(.97,.26),width:.22},west:{angle:Math.PI,width:.42}},od={center:[-95,-262],radius:38,height:5},sd={center:[-95,-262],halfX:2.6,halfZ:2.2,height:2.6,yaw:0},cd={a:[-90,214],b:[330,192],halfWidth:42,height:14},ld=[[700,-10],[420,40],[220,18],[60,48],[-120,22],[-320,60],[-560,34],[-900,70],[-1300,60]],ud=[{x:-12,z:-205,main:!0},{x:128,z:-58,main:!1},{x:-138,z:-16,main:!1},{x:182,z:96,main:!1}],dd={center:[10,-212],halfX:4.2,halfZ:2.6,yaw:.15},fd={center:[-30,-305],radius:62},pd={center:[130,300],radius:110};function md(){let e=[],t=[],n=[[-76,-312,.2],[-54,-336,-.1],[-24,-343,.05],[8,-333,-.25],[32,-312,.3],[-98,-288,.4],[44,-286,-.4],[-6,-281,.1]],r=[3879467,4865844,7167048,4142638];n.forEach(([t,n,i],a)=>e.push({x:t,z:n,yaw:i,halfX:2.1,halfZ:1.6,height:1.9,side:0,color:r[a%r.length]})),t.push({x:-32,z:-308,side:0},{x:18,z:-300,side:0});let i=[8010538,5916214,9202238,4078150,7024431,10124117,4930092],a=0;for(let t=0;t<3;t++){let n=[7,9,10][t],r=[36,64,92][t];for(let o=0;o<n;o++){let s=o/n*Math.PI*2+t*.37,c=pd.center[0]+Math.cos(s)*r*1.25,l=pd.center[1]+Math.sin(s)*r*.7,u=t===0&&o%2==0;e.push({x:c,z:l,yaw:-s+Math.PI/2,halfX:u?3.6:2.7,halfZ:u?2.8:2,height:u?2.9:2.3,side:1,color:i[a++%i.length]})}}for(let e=0;e<7;e++){let n=e/7*Math.PI*2+.2;t.push({x:pd.center[0]+Math.cos(n)*58,z:pd.center[1]+Math.sin(n)*34,side:1})}return{tents:e,fires:t}}var hd=md(),gd=hd.tents,_d=hd.fires,vd={near:{center:[0,-122],rows:3,spacing:1.55,rowGap:1.9,advanceTo:-82},far:{center:[24,38],rows:6,spacing:1.45,rowGap:1.6,advanceTo:-62}},yd={center:[10,-72],halfX:70,halfZ:24},bd=new td([[860,-1500],[610,-1060],[410,-730],[240,-560],[96,-440],[-14,-352]]),xd=new td([[470,1700],[380,1180],[300,830],[250,610],[210,450],[172,352]]),Sd={believers:{gap:2,approach:230,tail:40,perSlot:2},quraysh:{gap:1.6,approach:190,tail:40,perSlot:3}};function Cd(e,t,n,r,i){let a=e.length-t;return a+(e.length+n+r-a)*Math.min(1,Math.max(0,i))}var wd=new td([[20,-60],[90,70],[200,180],[262,300],[330,520],[420,800],[520,1150]]),Td=new td([[-1250,-3200],[-1320,-1900],[-1390,-900],[-1450,-150],[-1560,700],[-1800,1600],[-2150,2700],[-2500,3600]]),Ed={plainStart:880,plainEnd:1220,dropStart:760,dropEnd:2300,depth:26,seaX:-5200};function Dd(e,t){let n=e-t;return Math.abs(Math.atan2(Math.sin(n),Math.cos(n)))}var Od=[ad.north,ad.south,ad.west];function kd(e){let t=0;for(let n of Od){let r=Dd(e,n.angle),i=1-J(n.width*.4,n.width,r);i>t&&(t=i)}return t}function Ad(e){return id.radius+id.wobble*ed.noise(Math.cos(e)*1.4+4.1,Math.sin(e)*1.4-2.3)}function jd(e,t){let[n,r]=cd.a,[i,a]=cd.b,o=i-n,s=a-r,c=o*o+s*s,l=Ql(((e-n)*o+(t-r)*s)/c),u=n+o*l,d=r+s*l;return{d:Math.hypot(e-u,t-d),u:l}}function Md(e,t){let{d:n,u:r}=jd(e,t),i=J(0,.22,r)*J(1,.75,r),a=t-(cd.a[1]+(cd.b[1]-cd.a[1])*r)>0?1.45:1,o=cd.halfWidth/a;return Math.exp(-((n/o)**2)*2.2)*i}function Nd(e,t){let n=1/0;for(let r=0;r<ld.length-1;r++){let[i,a]=ld[r],[o,s]=ld[r+1],c=o-i,l=s-a,u=c*c+l*l,d=Ql(((e-i)*c+(t-a)*l)/u),f=Math.hypot(e-(i+c*d),t-(a+l*d));f<n&&(n=f)}return n}function Pd(e,t){let n=Math.hypot(e,t),r=Ad(Math.atan2(t,e));return J(r-30,r+260,n)}function Z(e,t){let n=Math.hypot(e,t),r=Math.atan2(t,e),i=.8*ed.fbm(e*.0045+3,t*.0045-7,3),a=1-J(700,1100,n);i+=a*(7*J(-110,-640,t)+6*J(170,640,t));let o=Math.hypot(e-od.center[0],t-od.center[1]);if(o<od.radius&&(i+=od.height*(1-J(9,od.radius,o))),t>120&&t<380){let n=Md(e,t);n>.001&&(i+=cd.height*n*(1+.12*ed.noise(e*.02,t*.02)))}if(t>-60&&t<160){let n=Nd(e,t);n<16&&(i-=.9*(1-J(3,15,n)))}let s=J(Ed.plainStart,Ed.plainEnd,-e),c=Ad(r),l=J(c-30,c+280,n);if(l>0){let a=kd(r),o=ed.ridged(e*.0028+1.7,t*.0028-.6,3),c=.5+.5*ed.fbm(e*.0012-4,t*.0012+2,3),u=.5+.5*ed.fbm(e*.0055+2,t*.0055-9,3),d=ed.ridged(e*.011-3,t*.011+8,2),f=(45+150*c)*(.42+.4*Math.sqrt(o)+.3*u)+4*d,p=1-.55*J(1400,2400,n);i+=l*f*(1-.94*a)*p*(1-s)}let u=J(1700,3800,n)*(1-s);u>0&&(i+=u*(220+420*(.5+.5*ed.fbm(e*7e-4+9,t*7e-4-5,3))));let d=J(Ed.dropStart,Ed.dropEnd,-e);return d>0&&(i-=d*Ed.depth),i}var Fd=55;function Id(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}var Ld=class{constructor(e){q(this,`camera`,void 0),q(this,`keys`,[]),q(this,`pts`,[]),q(this,`looks`,[]),q(this,`tmpPos`,new H),q(this,`tmpLook`,new H),q(this,`blendPos`,new H),q(this,`blendQuat`,new Rt),q(this,`targetQuat`,new Rt),q(this,`blendFov`,Fd),q(this,`blendElapsed`,0),q(this,`blendDuration`,0),this.camera=e}setKeys(e){for(this.keys=[...e].sort((e,t)=>e.t-t.t);this.pts.length<this.keys.length;)this.pts.push(new H),this.looks.push(new H)}blendFromCurrent(e){this.blendPos.copy(this.camera.position),this.blendQuat.copy(this.camera.quaternion),this.blendFov=this.camera.fov,this.blendElapsed=0,this.blendDuration=e}update(e,t,n,r){let i=this.keys;if(i.length===0)return;let a=i.length;for(let e=0;e<a;e++){let t=i[e],n=this.pts[e].set(t.pos[0],t.pos[1],t.pos[2]);this.looks[e].set(t.look[0],t.look[1],t.look[2]).sub(n).normalize()}let o=$l(Ql(e),eu(e),.5),s=0;for(;s<a-2&&o>i[s+1].t;)s++;let c=i[0].fov??Fd;if(a===1||o<=i[0].t)this.tmpPos.copy(this.pts[0]),this.tmpLook.copy(this.looks[0]);else if(o>=i[a-1].t)this.tmpPos.copy(this.pts[a-1]),this.tmpLook.copy(this.looks[a-1]),c=i[a-1].fov??Fd;else{let e=i[s+1].t-i[s].t,t=e>0?(o-i[s].t)/e:1,n=Math.max(0,s-1),r=s,l=s+1,u=Math.min(a-1,s+2),d=this.pts,f=this.looks;this.tmpPos.set(Id(d[n].x,d[r].x,d[l].x,d[u].x,t),Id(d[n].y,d[r].y,d[l].y,d[u].y,t),Id(d[n].z,d[r].z,d[l].z,d[u].z,t)),this.tmpLook.set(Id(f[n].x,f[r].x,f[l].x,f[u].x,t),Id(f[n].y,f[r].y,f[l].y,f[u].y,t),Id(f[n].z,f[r].z,f[l].z,f[u].z,t)),c=$l(i[r].fov??Fd,i[l].fov??Fd,eu(t))}if(this.tmpLook.normalize().multiplyScalar(20).add(this.tmpPos),!r){let e=.1;this.tmpPos.x+=ed.noise(t*.13,3.1)*e,this.tmpPos.y+=ed.noise(t*.11,7.7)*e*.6,this.tmpLook.x+=ed.noise(t*.07,1.3)*e*1.2,this.tmpLook.y+=ed.noise(t*.09,5.9)*e*.6}this.keepClear(this.tmpPos);let l=this.camera;if(l.position.copy(this.tmpPos),l.up.set(0,1,0),l.lookAt(this.tmpLook),this.blendDuration>0){this.blendElapsed+=n;let e=eu(this.blendElapsed/this.blendDuration);this.targetQuat.copy(l.quaternion),l.position.lerpVectors(this.blendPos,this.tmpPos,e),l.quaternion.slerpQuaternions(this.blendQuat,this.targetQuat,e),c=$l(this.blendFov,c,e),this.blendElapsed>=this.blendDuration&&(this.blendDuration=0)}Math.abs(l.fov-c)>.01&&(l.fov=Lt.clamp(c,25,80),l.updateProjectionMatrix())}keepClear(e){let t=Z(e.x,e.z)+1.3;e.y<t&&(e.y=t)}},Rd=`
float th_hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
float th_vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = th_hash13(i);
  float b = th_hash13(i + vec3(1.0, 0.0, 0.0));
  float c = th_hash13(i + vec3(0.0, 1.0, 0.0));
  float d = th_hash13(i + vec3(1.0, 1.0, 0.0));
  float e = th_hash13(i + vec3(0.0, 0.0, 1.0));
  float g = th_hash13(i + vec3(1.0, 0.0, 1.0));
  float k = th_hash13(i + vec3(0.0, 1.0, 1.0));
  float l = th_hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(mix(mix(a, b, f.x), mix(c, d, f.x), f.y), mix(mix(e, g, f.x), mix(k, l, f.x), f.y), f.z);
}
float th_fbm(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < DETAIL_OCTAVES; i++) {
    s += a * th_vnoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.3);
    a *= 0.5;
  }
  return s;
}
vec3 th_srgb(vec3 c) { return pow(c, vec3(2.2)); }
`,zd=`
vec3 th_perturbNormal(vec3 surfPos, vec3 surfNorm, vec2 dHdxy, float faceDir) {
  vec3 vSigmaX = normalize(dFdx(surfPos));
  vec3 vSigmaY = normalize(dFdy(surfPos));
  vec3 R1 = cross(vSigmaY, surfNorm);
  vec3 R2 = cross(surfNorm, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDir;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surfNorm - vGrad);
}
`,Bd=`
vec3 th_rock(vec3 wp, vec3 wn, out float h) {
  float big = th_vnoise(wp * 0.011 + vec3(3.1, 0.0, 7.7));
  float mid = th_fbm(wp * 0.09);
  float fine = th_vnoise(wp * 0.9) * 0.6 + th_vnoise(wp * 2.7) * 0.4;
  float joints = th_vnoise(vec3(wp.x * 0.06 + wp.y * 0.05, wp.y * 0.18, wp.z * 0.06 - wp.y * 0.03));
  vec3 dark = th_srgb(vec3(0.33, 0.27, 0.23));
  vec3 brown = th_srgb(vec3(0.52, 0.41, 0.32));
  vec3 grey = th_srgb(vec3(0.47, 0.45, 0.43));
  vec3 crust = th_srgb(vec3(0.68, 0.56, 0.43));
  vec3 sandTop = th_srgb(vec3(0.80, 0.68, 0.52));
  vec3 c = mix(brown, dark, smoothstep(0.35, 0.8, big));
  c = mix(c, grey, smoothstep(0.55, 0.9, th_vnoise(wp * 0.03 + 11.0)) * 0.5);
  c = mix(c, crust, smoothstep(0.62, 0.9, mid) * 0.5);
  float vertical = 1.0 - abs(wn.y);
  c = mix(c, dark * 0.8, smoothstep(0.6, 0.85, joints) * vertical * 0.45);
  c = mix(c, sandTop, smoothstep(0.72, 0.93, wn.y) * 0.85);
  c *= 0.82 + 0.26 * mid + 0.1 * fine;
  h = mid * 0.9 + fine * 0.35 - smoothstep(0.62, 0.8, joints) * 0.5;
  return c;
}
`,Vd=`
varying float vRock;
float th_sandK(vec3 wp, vec3 wn, out float h) {
  float n = th_vnoise(wp * 0.13);
  float grain = th_vnoise(wp * 3.7);
  vec2 q = wp.xz;
  float ph = dot(q, vec2(0.86, 0.5)) * 3.1 + th_vnoise(vec3(q * 0.3, 1.7)) * 6.0;
  float near = 1.0 - smoothstep(25.0, 70.0, length(wp - cameraPosition));
  float flatness = smoothstep(0.86, 0.97, wn.y) * (1.0 - vRock);
  h = sin(ph) * 0.3 * flatness * near + grain * 0.12 * near + n * 0.35;
  return 0.9 + 0.14 * n + 0.07 * grain;
}
`,Hd=`
vec3 th_build(vec3 wp, vec3 wn, out float h) {
  float n = th_fbm(wp * 0.55);
  float fine = th_vnoise(wp * 3.1);
  float along = abs(wn.x) > abs(wn.z) ? wp.z : wp.x;
  float row = floor(wp.y * 2.2);
  float course = fract(wp.y * 2.2);
  float joint = fract(along * 1.1 + row * 0.5);
  float mortar = max(1.0 - smoothstep(0.0, 0.07, course), 1.0 - smoothstep(0.0, 0.05, min(joint, 1.0 - joint)));
  mortar *= (1.0 - abs(wn.y)) * 0.8;
  h = n * 0.5 + fine * 0.15 - mortar * 0.35;
  return vec3(0.9 + 0.16 * n + 0.05 * fine - mortar * 0.18);
}
`;function Ud(e,t){let n=t.uniforms;e.customProgramCacheKey=()=>`${t.key}:${t.detailOctaves}`,e.onBeforeCompile=e=>{e.uniforms.uTime=n.uTime,e.uniforms.uDust=n.uDust,e.uniforms.uWet=n.uWet,e.defines={...e.defines??{},DETAIL_OCTAVES:t.detailOctaves},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vThWorld;
varying vec3 vThNormal;
uniform float uTime;
${t.vertexHeader??``}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${t.vertexBody??``}`).replace(`#include <project_vertex>`,`#include <project_vertex>
{
  vec4 thW = vec4(transformed, 1.0);
  vec3 thN = objectNormal;
  #ifdef USE_INSTANCING
  thW = instanceMatrix * thW;
  thN = mat3(instanceMatrix) * thN;
  #endif
  thW = modelMatrix * thW;
  vThWorld = thW.xyz;
  vThNormal = normalize(mat3(modelMatrix) * thN);
}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vThWorld;
varying vec3 vThNormal;
uniform float uDust;
uniform float uWet;
uniform float uTime;
${Rd}
${zd}
${t.functions}`).replace(`#include <color_fragment>`,`#include <color_fragment>
float thBump = 0.0;
vec3 thAlbedo = vec3(1.0);
{
  vec3 thWN = normalize(vThNormal);
  ${t.albedo}
  float thDustUp = smoothstep(0.15, 0.85, thWN.y);
  thAlbedo = mix(thAlbedo, th_srgb(vec3(0.80, 0.71, 0.58)) / max(diffuseColor.rgb, vec3(0.05)), uDust * ${(t.dustAmount??.5).toFixed(3)} * thDustUp);
  thAlbedo *= 1.0 - uWet * ${(t.wetAmount??.3).toFixed(3)} * (0.4 + 0.6 * thDustUp);
}
diffuseColor.rgb *= thAlbedo;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  vec2 thdH = vec2(dFdx(thBump), dFdy(thBump)) * ${t.bumpScale.toFixed(3)};
  normal = th_perturbNormal(-vViewPosition, normal, thdH, faceDirection);
}`)}}var Wd=e=>new W().setHex(e),Gd={sandLight:Wd(14467995),sandMid:Wd(13215355),gravel:Wd(10454377),washBed:Wd(10849650),road:Wd(13941911),dune:Wd(15125923),trampled:Wd(11901560),rock:Wd(9139297),plain:Wd(13217156)},Kd=new W;function qd(e,t){let n=[],r=[0,0];for(let i=0;i<=e.length;i+=t)e.at(i,r),n.push([r[0],r[1]]);return n}var Jd=[qd(bd,12),qd(xd,12)];function Yd(e,t){let n=1/0;for(let r of Jd)for(let i=0;i<r.length-1;i++){let[a,o]=r[i],[s,c]=r[i+1];if(Math.abs(e-a)>60&&Math.abs(e-s)>60)continue;let l=iu(e,t,a,o,s,c);l<n&&(n=l)}return n}function Xd(e,t,n,r){let i=ed.fbm(e*.008+11,t*.008-4,3),a=ed.noise(e*.06,t*.06);r.copy(Gd.sandMid).lerp(Gd.sandLight,Ql(.5+i*.9));let o=J(.12,.45,ed.fbm(e*.0045-3,t*.0045+9,2));r.lerp(Gd.gravel,o*.5);let s=Nd(e,t);r.lerp(Gd.washBed,(1-J(3,14,s+a*3))*.28),r.lerp(Gd.dune,J(.08,.5,Md(e,t))*.85);let c=Yd(e,t);r.lerp(Gd.road,(1-J(1.6,4.5,c+a*1.2))*.55);let l=Math.hypot(e-fd.center[0],t-fd.center[1]);r.lerp(Gd.trampled,(1-J(fd.radius*.5,fd.radius*1.1,l+a*8))*.35);let u=Math.hypot((e-pd.center[0])*.75,t-pd.center[1]);r.lerp(Gd.trampled,(1-J(pd.radius*.45,pd.radius*.95,u+a*8))*.35);for(let n of ud){let i=Math.hypot(e-n.x,t-n.z);r.lerp(Gd.trampled,(1-J(3,n.main?16:9,i+a*1.5))*.45)}let d=Ql(Pd(e,t)*(.35+J(.95,.72,n)*.9));r.lerp(Gd.rock,d*.7),r.lerp(Gd.plain,J(Ed.plainStart,Ed.plainEnd+300,-e)*.5);let f=.94+a*.06;return r.r*=f,r.g*=f,r.b*=f,d}var Zd=class{constructor(e){q(this,`object`,new In),q(this,`material`,void 0),q(this,`seaMat`,void 0),q(this,`geometries`,[]),this.object.name=`terrain`;let t=e.quality;this.material=new sa({vertexColors:!0,roughness:.95,metalness:0}),Ud(this.material,{uniforms:e.uniforms,key:`bd-ground`,functions:Vd+Bd,albedo:`float hh;
  float k = th_sandK(vThWorld, thWN, hh);
  float rh;
  vec3 rc = th_rock(vThWorld, thWN, rh);
  float rk = smoothstep(0.15, 0.75, vRock);
  thAlbedo = mix(vec3(k), rc / max(diffuseColor.rgb, vec3(0.05)), rk);
  thBump = mix(hh, rh * 1.6, rk);`,bumpScale:.7,detailOctaves:t.detailOctaves,vertexHeader:`attribute float aRock;
varying float vRock;`,vertexBody:`vRock = aRock;`,dustAmount:.2,wetAmount:.32});let n=this.buildDisc(t.terrainSegments),r=this.buildRing(rd.terrainRadius-25,rd.midRadius,t.level===`low`?240:t.level===`medium`?360:480,t.level===`low`?48:t.level===`medium`?70:90,.6),i=this.buildRing(rd.midRadius-40,rd.farRadius,t.level===`low`?96:140,t.level===`low`?14:20,1.2);for(let e of[n,r,i]){this.geometries.push(e);let r=new li(e,this.material);r.receiveShadow=t.shadows&&e===n,this.object.add(r)}this.seaMat=new Zr({color:new W().setHex(8230822),fog:!0});let a=new Yi(9e3,16e3);a.rotateX(-Math.PI/2),a.translate(Ed.seaX-4500,-Ed.depth-.5,0),this.geometries.push(a),this.object.add(new li(a,this.seaMat))}buildDisc(e){let t=rd.terrainRadius,n=e+1,r=2*t/e,i=new Float32Array(n*n*3),a=new Float32Array(n*n*3),o=new Float32Array(n*n*3),s=new Float32Array(n*n),c=new Uint8Array(n*n),l=new Float32Array(n*n);for(let e=0;e<n;e++)for(let i=0;i<n;i++){let a=-t+i*r,o=-t+e*r;Math.hypot(a,o)>t+r*3||(l[e*n+i]=Z(a,o),Math.hypot(a,o)<=t+r*1.5&&(c[e*n+i]=1))}let u=(e,t,r)=>e<0||t<0||e>=n||t>=n?r:l[t*n+e];for(let e=0;e<n;e++)for(let d=0;d<n;d++){let f=e*n+d;if(!c[f])continue;let p=-t+d*r,m=-t+e*r,h=l[f],g=u(d-1,e,h)-u(d+1,e,h),_=u(d,e-1,h)-u(d,e+1,h),v=2*r,y=Math.hypot(g,v,_);i[f*3]=p,i[f*3+1]=h,i[f*3+2]=m,a[f*3]=g/y,a[f*3+1]=v/y,a[f*3+2]=_/y,s[f]=Xd(p,m,v/y,Kd),o[f*3]=Kd.r,o[f*3+1]=Kd.g,o[f*3+2]=Kd.b}let d=[];for(let e=0;e<n-1;e++)for(let t=0;t<n-1;t++){let r=e*n+t,i=r+1,a=r+n,o=a+1;c[r]&&c[i]&&c[a]&&c[o]&&d.push(r,a,i,i,a,o)}let f=new zr;return f.setAttribute(`position`,new wr(i,3)),f.setAttribute(`normal`,new wr(a,3)),f.setAttribute(`color`,new wr(o,3)),f.setAttribute(`aRock`,new wr(s,1)),f.setIndex(d),f.computeBoundingSphere(),f}buildRing(e,t,n,r,i){let a=n,o=[],s=[],c=[],l=[],u=n=>e+(t-e)*(Math.max(0,Math.min(r+1,n))/r)**+(1+i),d=new Float32Array((r+3)*a);for(let t=-1;t<=r+1;t++){let n=t<0?e-(u(1)-e):u(t);for(let e=0;e<a;e++){let r=e/a*Math.PI*2;d[(t+1)*a+e]=Z(Math.cos(r)*n,Math.sin(r)*n)}}let f=new H,p=new H,m=new H,h=(t,n,r)=>{let i=(t+a)%a,o=n<0?e-(u(1)-e):u(n),s=i/a*Math.PI*2;return r.set(Math.cos(s)*o,d[(n+1)*a+i],Math.sin(s)*o)},g=new H,_=new H;for(let e=0;e<=r;e++)for(let t=0;t<a;t++){h(t,e,f),p.subVectors(h(t+1,e,g),h(t-1,e,_)),m.subVectors(h(t,e+1,g),h(t,e-1,_));let n=g.crossVectors(m,p).normalize();n.y<0&&n.negate(),o.push(f.x,f.y-(e===0?1.2:0),f.z),s.push(n.x,n.y,n.z),l.push(Xd(f.x,f.z,n.y,Kd)),c.push(Kd.r,Kd.g,Kd.b)}let v=[];for(let e=0;e<r;e++)for(let t=0;t<a;t++){let n=e*a+t,r=e*a+(t+1)%a,i=(e+1)*a+t,o=(e+1)*a+(t+1)%a;v.push(n,r,i,r,o,i)}let y=new zr;return y.setAttribute(`position`,new wr(new Float32Array(o),3)),y.setAttribute(`normal`,new wr(new Float32Array(s),3)),y.setAttribute(`color`,new wr(new Float32Array(c),3)),y.setAttribute(`aRock`,new wr(new Float32Array(l),1)),y.setIndex(v),y.computeBoundingSphere(),y}update(e){}dispose(){for(let e of this.geometries)e.dispose();this.material.dispose(),this.seaMat.dispose(),this.object.clear()}};function Qd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new zr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=$d(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=$d(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function $d(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new wr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function ef(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var tf=new cn,nf=new Rt,rf=new vn,af=new H,of=new H,sf=class{constructor(){q(this,`parts`,[])}get count(){return this.parts.length}box(e,t,n,r,i,a,o,s,c=0,l=0){let u=new Ui(r,i,a);return this.place(u,e,t,n,o,c,l,s),this}cylinder(e,t,n,r,i,a,o,s,c=0,l=0,u=0){let d=new Wi(r,i,a,o,1,!1);return this.place(d,e,t,n,c,l,u,s),this}lathe(e,t,n,r,i,a){let o=new Ji(r.map(([e,t])=>new V(e,t)),i);return this.place(o,e,t,n,0,0,0,a),this}quad(e,t,n,r,i,a,o){let s=new Yi(r,i);return this.place(s,e,t,n,a,0,0,o),this}add(e,t){return this.colorize(e,t),this}addColored(e){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let t=e.index?e.toNonIndexed():e;return t!==e&&e.dispose(),this.parts.push(t),this}place(e,t,n,r,i,a,o,s){rf.set(a,i,o,`YXZ`),nf.setFromEuler(rf),tf.compose(of.set(t,n,r),nf,af.set(1,1,1)),e.applyMatrix4(tf),this.colorize(e,s)}colorize(e,t){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let n=typeof t==`number`?new W().setHex(t):t,r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;e.setAttribute(`color`,new wr(i,3));let a=e.index?e.toNonIndexed():e;a!==e&&e.dispose(),this.parts.push(a)}build(){if(!this.parts.length)return null;let e=Qd(this.parts);for(let e of this.parts)e.dispose();return this.parts.length=0,e?(e.computeBoundingSphere(),e):null}};function cf(e,t=1){let n=new W().setHex(e);return n.r*=t,n.g*=t,n.b*=t,n}var lf={valley:[-210,-170],roadMedina:[268,-548],roadMecca:[276,612]};function uf(e){let t=new sf,n=Z(e.x,e.z),r=Math.cos(e.yaw),i=Math.sin(e.yaw),a=(t,a,o)=>[e.x+t*r+o*i,n+a,e.z-t*i+o*r],o=e.halfX,s=e.halfZ,c=e.height,l=c*.42,u=cf(e.color),d=cf(e.color,.55),f=[],p=[],m=(e,t,n,r)=>{f.push(...e,...t,...n);for(let e=0;e<3;e++)p.push(r.r,r.g,r.b)},h=(e,t,n,r,i)=>{m(e,t,n,i),m(e,n,r,i)},g=a(-o,c,0),_=a(o,c,0),v=a(-o*1.05,l,s),y=a(o*1.05,l,s),b=a(-o*1.05,l*.55,-s),x=a(o*1.05,l*.55,-s);h(g,_,y,v,u),h(g,v,y,_,d),h(_,g,b,x,u),h(_,x,b,g,d);let S=a(-o*1.05,0,-s*1.02),C=a(o*1.05,0,-s*1.02);h(b,x,C,S,u),h(b,S,C,x,d);for(let e of[-1,1]){let t=a(e*o,c,0),n=a(e*o*1.05,0,s*.85),r=a(e*o*1.05,0,-s*1.02);m(t,n,r,u),m(t,r,n,d)}let w=new zr;w.setAttribute(`position`,new wr(new Float32Array(f),3)),w.setAttribute(`color`,new wr(new Float32Array(p),3)),w.computeVertexNormals(),t.addColored(w);let T=cf(6112818);for(let e of[-.6,.6]){let[r,,i]=a(e*o,0,s);t.cylinder(r,n+l/2,i,.04,.05,l,5,T)}let[E,,D]=a(0,0,0);t.cylinder(E,n+c/2,D,.045,.055,c,5,T);let[O,,k]=a(-o*.4,0,-s*.6);t.box(O,n+.18,k,.9,.35,.5,e.yaw,cf(9073494));let A=ru(Math.round(e.x*13+e.z*7)),j=e.side===0?2:3;for(let n=0;n<j;n++){let r=A()*Math.PI*2,i=Math.max(o,s)+1.4+A()*1.5,a=e.x+Math.cos(r)*i,c=e.z+Math.sin(r)*i;t.box(a,Z(a,c)+.2,c,.8,.4,.55,A()*3,cf([8019778,7031346,10125664][n%3]))}let M=t.build(),N=M.getAttribute(`position`).count,ee=new Float32Array(N).fill(n);return M.setAttribute(`aBase`,new wr(ee,1)),M}var df=class{constructor(e){q(this,`object`,new In),q(this,`obstacles`,[]),q(this,`interactables`,[]),q(this,`geometries`,[]),q(this,`materials`,[]),q(this,`nearTentMat`,void 0),q(this,`farTentMat`,void 0),q(this,`pitchNear`,{value:0}),q(this,`pitchFar`,{value:0}),q(this,`shelter`,void 0),q(this,`shelterShown`,1),this.object.name=`camps`;let t=e.quality,n=ru(1702),r=(t,n)=>{let r=new sa({vertexColors:!0,roughness:.95,side:2});return r.customProgramCacheKey=()=>n,r.onBeforeCompile=n=>{n.uniforms.uPitch=t,n.uniforms.uWet=e.uniforms.uWet,n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aBase;
uniform float uPitch;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed.y = aBase + (transformed.y - aBase) * max(uPitch, 0.001);`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uWet;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= 1.0 - uWet * 0.25;`)},this.materials.push(r),r};this.nearTentMat=r(this.pitchNear,`bd-tent-near`),this.farTentMat=r(this.pitchFar,`bd-tent-far`);for(let e of[0,1]){let n=ff(gd.filter(t=>t.side===e).map(e=>uf(e)));this.geometries.push(n);let r=new li(n,e===0?this.nearTentMat:this.farTentMat);r.castShadow=t.shadows,r.receiveShadow=t.shadows,this.object.add(r)}for(let e of gd)this.obstacles.push({kind:`box`,x:e.x,z:e.z,halfX:e.halfX*1.05,halfZ:e.halfZ,yaw:e.yaw});let i=new sf,a=new sf,o=new sf;for(let e of ud){let t=Z(e.x,e.z),r=e.main?1.25:1,s=[[r-.32,0],[r,0],[r+.05,.35],[r-.02,.72],[r-.3,.75],[r-.32,.4],[r-.34,-.6]];if(i.lathe(e.x,t-.05,e.z,s,14,cf(10127988,.95+n()*.1)),o.cylinder(e.x,t-.45,e.z,r-.33,r-.33,.02,12,cf(3951178)),this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:r+.1}),e.main){let n=cf(5980975);a.cylinder(e.x-1.35,t+1.25,e.z,.07,.09,2.5,6,n),a.cylinder(e.x+1.35,t+1.25,e.z,.07,.09,2.5,6,n),a.cylinder(e.x,t+2.45,e.z,.06,.06,2.9,6,n,0,0,Math.PI/2),a.cylinder(e.x,t+2.3,e.z,.18,.18,.08,10,cf(7230522),0,0,Math.PI/2),a.cylinder(e.x+.15,t+1.3,e.z,.004,.004,1.9,3,cf(9402972)),a.cylinder(e.x+.15,t+.25,e.z,.16,.12,.28,8,cf(4862756))}}{let[e,t]=dd.center,n=Z(e,t),r=Math.cos(dd.yaw),a=Math.sin(dd.yaw),s=cf(10193778),c=dd.halfX,l=dd.halfZ,u=[[0,l,c*2+.5,.5],[0,-l,c*2+.5,.5],[c,0,.5,l*2],[-c,0,.5,l*2]];for(let[o,c,l,d]of u)i.box(e+o*r+c*a,n+.25,t-o*a+c*r,l,.55,d,dd.yaw,s);o.box(e,n+.3,t,c*2-.4,.04,l*2-.4,dd.yaw,cf(8032916)),this.obstacles.push({kind:`box`,x:e,z:t,halfX:c+.3,halfZ:l+.3,yaw:dd.yaw})}for(let e of _d){let t=Z(e.x,e.z);for(let r=0;r<9;r++){let a=r/9*Math.PI*2;i.box(e.x+Math.cos(a)*.7,t+.1,e.z+Math.sin(a)*.7,.28,.22,.24,a,cf(7300184,.8+n()*.3))}a.cylinder(e.x,t+.1,e.z,.06,.07,.9,5,cf(3023900),.4,Math.PI/2,0),a.cylinder(e.x,t+.13,e.z,.06,.07,.9,5,cf(3023900),2,Math.PI/2,0),this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:.9})}for(let[e,t]of Object.values(lf)){let r=Z(e,t),a=0;for(let o=0;o<7;o++){let s=.75-o*.08;i.box(e+(n()-.5)*.15,r+a+s*.3,t+(n()-.5)*.15,s,s*.6,s*.9,n()*3,cf(9206888,.85+n()*.25)),a+=s*.55}this.obstacles.push({kind:`circle`,x:e,z:t,r:.6})}let s=new sa({vertexColors:!0,roughness:.92});Ud(s,{uniforms:e.uniforms,key:`bd-stone`,functions:Hd,albedo:`float hh;
  thAlbedo = th_build(vThWorld, thWN, hh);
  thBump = hh;`,bumpScale:.6,detailOctaves:t.detailOctaves,dustAmount:.3,wetAmount:.35});let c=new sa({vertexColors:!0,roughness:.85}),l=new sa({vertexColors:!0,roughness:.12,metalness:0});this.materials.push(s,c,l);for(let[e,n]of[[i,s],[a,c],[o,l]]){let r=e.build();if(!r)continue;this.geometries.push(r);let i=new li(r,n);i.castShadow=t.shadows&&n!==l,i.receiveShadow=t.shadows,this.object.add(i)}this.shelter=new In;{let e=new sf,[r,i]=sd.center,a=Z(r,i),o=cf(6968128),s=sd.height;for(let t of[-1,1])for(let n of[-1,1]){let c=r+t*sd.halfX,l=i+n*sd.halfZ;e.cylinder(c,a+s/2,l,.11,.14,s+.1,7,o),this.obstacles.push({kind:`circle`,x:c,z:l,r:.2})}e.box(r,a+s,i-sd.halfZ,sd.halfX*2+.4,.14,.14,0,o),e.box(r,a+s,i+sd.halfZ,sd.halfX*2+.4,.14,.14,0,o);let l=[9206348,10259032,8022594,11048031];for(let t=0;t<16;t++){let o=-sd.halfX-.3+t/15*(sd.halfX*2+.6);e.box(r+o,a+s+.12+t%2*.04,i,.42,.05,sd.halfZ*2+1+n()*.4,.04*(n()-.5),cf(l[t%4],.9+n()*.2),.03*(n()-.5),.05*(n()-.5))}e.box(r,a+.03,i,sd.halfX*1.4,.04,sd.halfZ*1.3,0,cf(10848866));let u=e.build();this.geometries.push(u);let d=new li(u,c);d.castShadow=t.shadows,d.receiveShadow=t.shadows,this.shelter.add(d)}this.object.add(this.shelter);let u=new Zr({visible:!1});this.materials.push(u);let d=(e,t,n,r,i=0)=>{this.geometries.push(e);let a=new li(e,u);return a.position.set(t,n,r),a.rotation.y=i,a.updateMatrixWorld(),this.object.add(a),a},f=ud.map(e=>d(new Wi(e.main?1.6:1.3,e.main?1.6:1.3,e.main?3:1.2,8),e.x,Z(e.x,e.z)+(e.main?1.4:.5),e.z));f.push(d(new Ui(dd.halfX*2+.6,.8,dd.halfZ*2+.6),dd.center[0],Z(dd.center[0],dd.center[1])+.3,dd.center[1],dd.yaw));let p=ud[0];this.interactables.push({id:`wells`,targets:f,maxDistance:140,isAvailable:()=>!0,anchor:(e,t)=>t.ranks>.4&&t.gather<.5?!1:(e.set(p.x,Z(p.x,p.z)+4.2,p.z),!0)});let[m,h]=sd.center,g=Z(m,h);this.interactables.push({id:`shelter`,targets:[d(new Ui(sd.halfX*2+.6,sd.height+.5,sd.halfZ*2+.6),m,g+sd.height/2,h)],maxDistance:160,isAvailable:e=>e.camp>.5,anchor:(e,t)=>t.camp<.6?!1:(e.set(m,g+sd.height+2.2,h),!0)});let _=e=>gd.filter(t=>t.side===e).map(e=>d(new Ui(e.halfX*2,e.height,e.halfZ*2),e.x,Z(e.x,e.z)+e.height/2,e.z,e.yaw));this.interactables.push({id:`near-camp`,targets:_(0),maxDistance:200,isAvailable:e=>e.camp>.5,anchor:(e,t)=>t.camp<.6||t.ranks>.3&&t.gather<.5?!1:(e.set(fd.center[0],Z(fd.center[0],fd.center[1])+5,fd.center[1]-20),!0)}),this.interactables.push({id:`far-camp`,targets:_(1),maxDistance:320,isAvailable:e=>e.qCamp>.5,anchor:(e,t)=>t.qCamp<.6?!1:(e.set(pd.center[0],Z(pd.center[0],pd.center[1])+7,pd.center[1]),!0)});{let[e,t]=cd.a,[n,r]=cd.b,i=Math.hypot(n-e,r-t),a=-Math.atan2(r-t,n-e),o=(e+n)/2,s=(t+r)/2,c=d(new Ui(i*.8,cd.height,cd.halfWidth*1.2),o,Z(o,s)-cd.height*.4,s,a);this.interactables.push({id:`dune`,targets:[c],maxDistance:600,isAvailable:()=>!0,anchor:(e,t)=>t.ranks>.3&&t.rout<.9?!1:(e.set(o-60,Z(o-60,s+4)+7,s+4),!0)})}{let[e,t]=yd.center,n=d(new Ui(yd.halfX*2,2.2,yd.halfZ*2),e,Z(e,t)+.6,t);this.interactables.push({id:`field`,targets:[n],maxDistance:500,isAvailable:()=>!0,anchor:(n,r)=>r.clash>.05&&r.rout<.9?!1:(n.set(e,Z(e,t)+6,t),!0)})}let v=(e,[t,n])=>{let r=Z(t,n);this.interactables.push({id:e,targets:[d(new Wi(1.2,1.4,3.2,6),t,r+1.4,n)],maxDistance:160,isAvailable:()=>!0,anchor:e=>(e.set(t,r+4.4,n),!0)})};v(`valley`,lf.valley),v(`road-medina`,lf.roadMedina),v(`road-mecca`,lf.roadMecca)}update(e){let t=e.env;this.pitchNear.value=J(0,1,t.camp),this.pitchFar.value=J(0,1,t.qCamp);let n=+(t.camp>.4);n!==this.shelterShown&&(this.shelterShown=n,this.shelter.visible=n===1)}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();this.object.clear()}};function ff(e){let t=0;for(let n of e)t+=n.getAttribute(`position`).count;let n=[`position`,`normal`,`color`,`aBase`],r=new zr;for(let i of n){let n=e[0].getAttribute(i).itemSize,a=new Float32Array(t*n),o=0;for(let t of e){let e=t.getAttribute(i).array;a.set(e,o),o+=e.length}r.setAttribute(i,new wr(a,n))}for(let t of e)t.dispose();return r.computeBoundingSphere(),r}var pf=`
#ifdef USE_INSTANCING
vec2 thBase = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
#else
vec2 thBase = vec2(0.0);
#endif
float thH = max(transformed.y, 0.0);
float thK = thH * thH * SWAY_STIFF;
float thPh = uTime * 1.3 + thBase.x * 0.07 + thBase.y * 0.05;
transformed.x += thK * (0.6 * uWind.x + 0.25 * sin(thPh) * length(uWind));
transformed.z += thK * (0.6 * uWind.y + 0.25 * cos(thPh * 0.8) * length(uWind));
`;function mf(e,t,n,r,i,a,o){let s=[],c=[],l=new H(Math.sin(r),0,Math.cos(r)),u=new H(Math.cos(r),0,-Math.sin(r)),d=[];for(let e=0;e<=7;e++){let r=e/7,o=i-n*r*r;d.push(new H(0,a,0).addScaledVector(l,Math.cos(o)*t*r).add(new H(0,Math.sin(o)*t*r,0)))}for(let e=0;e<7;e++){let t=e/7,n=(e+1)/7,r=.55*Math.sin(Math.PI*Math.min(1,t*1.1+.08)),i=.55*Math.sin(Math.PI*Math.min(1,n*1.1+.08)),a=d[e],l=d[e+1];for(let e of[-1,1]){let t=a.clone().addScaledVector(u,e*r).add(new H(0,r*.25,0)),n=l.clone().addScaledVector(u,e*i).add(new H(0,i*.25,0));s.push(a.x,a.y,a.z,t.x,t.y,t.z,l.x,l.y,l.z),s.push(l.x,l.y,l.z,t.x,t.y,t.z,n.x,n.y,n.z);for(let e=0;e<6;e++)c.push(o.r,o.g,o.b)}}let f=new zr;f.setAttribute(`position`,new wr(new Float32Array(s),3)),f.computeVertexNormals(),e.add(f,o)}function hf(e){let t=ru(e),n=new sf,r=0,i=.03+t()*.04;for(let e=0;e<10;e++){let a=(e+.5)*(8/10),o=.23-e/10*.06;r+=8/10*i*(e/10),n.cylinder(r,a,0,o*.96,o,.8200000000000001,7,cf(e%2?7232068:6114105,.95+t()*.1))}let a=[6124854,7045952,5466928];for(let e=0;e<15;e++){let r=e/15*Math.PI*2+t()*.3,i=.45+t()*.55;mf(n,3.4+t()*.8,1.4+t()*.6,r,i,8.1,cf(a[e%3],.9+t()*.2))}for(let e=0;e<4;e++)mf(n,2.6,.6,t()*6.28,-1-t()*.3,7.8,cf(9071941,.9+t()*.2));return n.cylinder(r,8.05,0,.25,.2,.5,7,7035450),n.build()}function gf(e){let t=ru(e),n=new sf,r=5193004;n.cylinder(0,.9,0,.14,.2,1.8,6,r);for(let e=0;e<3;e++){let i=e/3*Math.PI*2+t();n.cylinder(Math.cos(i)*.55,2.3,Math.sin(i)*.55,.06,.11,1.5,5,r,i,0,.55)}for(let e=0;e<9;e++){let r=t()*6.28,i=Math.sqrt(t())*2,a=new qi(1,1),o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let n=.8+t()*.4;o.setXYZ(e,o.getX(e)*n,o.getY(e)*n,o.getZ(e)*n)}a.computeVertexNormals(),a.scale(1+t()*.6,.38+t()*.2,.9+t()*.6),a.translate(Math.cos(r)*i,2.85+t()*.55-i*.08,Math.sin(r)*i),n.add(a,cf([6055988,6779707,5463854][e%3],.85+t()*.3))}return n.build()}function _f(e){let t=ru(e),n=new sf;for(let e=0;e<7;e++){let r=new qi(.22+t()*.16,0),i=r.getAttribute(`position`);for(let e=0;e<i.count;e++){let n=.75+t()*.5;i.setXYZ(e,i.getX(e)*n,i.getY(e)*n*.7,i.getZ(e)*n)}r.computeVertexNormals();let a=e/7*Math.PI*2+t(),o=.15+t()*.35;r.translate(Math.cos(a)*o,.18+t()*.28,Math.sin(a)*o),n.add(r,cf([9210974,8027472,10130024,8685391][e%4],.9+t()*.3))}for(let e=0;e<5;e++){let e=t()*6.28;n.cylinder(Math.cos(e)*.25,.3,Math.sin(e)*.25,.006,.014,.6,3,6114876,e,.5+t()*.4,.2)}return n.build()}function vf(e,t){let n=[],r=[0,0];for(let i=0;i<=e.length;i+=t)e.at(i,r),n.push([r[0],r[1]]);return n}var yf=[vf(bd,8),vf(xd,8),vf(wd,10)],bf=class{constructor(e){q(this,`object`,new In),q(this,`obstacles`,[]),q(this,`plantMat`,void 0),q(this,`stiffMat`,void 0),q(this,`rockMat`,void 0),q(this,`geometries`,[]),q(this,`meshes`,[]),this.object.name=`vegetation`;let t=e.quality,n=e.uniforms,r=e=>{let t=new sa({vertexColors:!0,roughness:.85,metalness:0,side:2});Ud(t,{uniforms:n,key:`bd-plant-${e}`,functions:``,albedo:`thAlbedo = vec3(0.9 + 0.18 * th_vnoise(vThWorld * 1.7));`,bumpScale:0,detailOctaves:1,vertexHeader:`uniform vec2 uWind;\n#define SWAY_STIFF ${e.toFixed(4)}`,vertexBody:pf,dustAmount:.55,wetAmount:.15});let r=t.onBeforeCompile;return t.onBeforeCompile=(e,i)=>{e.uniforms.uWind=n.uWind,r.call(t,e,i)},t};this.plantMat=r(.0035),this.stiffMat=r(.012),this.rockMat=new sa({vertexColors:!0,roughness:.93,metalness:0}),Ud(this.rockMat,{uniforms:n,key:`bd-rock`,functions:Bd,albedo:`float hh; thAlbedo = th_rock(vThWorld, thWN, hh); thBump = hh;`,bumpScale:.9,detailOctaves:t.detailOctaves,dustAmount:.35,wetAmount:.4});let i=ru(rd.seed+7),a=t.vegetationDensity,o=new H(0,1,0),s=(e,t=1)=>(n,r)=>r.compose(new H(n.x,Z(n.x,n.z)+e,n.z),new Rt().setFromAxisAngle(o,n.yaw),new H(n.s,n.s*t,n.s)),c=[];for(let e of ud){let t=e.main?3:2;for(let n=0;n<t;n++){let t=i()*Math.PI*2,n=7+i()*9,r=e.x+Math.cos(t)*n,a=e.z+Math.sin(t)*n;this.clear(r,a,2)&&c.push({x:r,z:a,s:.75+i()*.4,yaw:i()*6.28})}}let l=[hf(1),hf(2)];this.geometries.push(...l),l.forEach((e,n)=>this.addInstances(e,this.plantMat,c.filter((e,t)=>t%2===n),s(-.1),t.shadows));for(let e of c)this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:.3*e.s+.05});let u=[],d=Math.round(90*a)+10;for(let e=0;e<5e3&&u.length<d;e++){let e=i()*6.28,t=40+Math.sqrt(i())*760,n=Math.cos(e)*t,r=Math.sin(e)*t;Pd(n,r)>.35||this.clear(n,r,6)&&(u.some(e=>(e.x-n)**2+(e.z-r)**2<400)||u.push({x:n,z:r,s:.75+i()*.55,yaw:i()*6.28}))}let f=[gf(11),gf(12)];this.geometries.push(...f),f.forEach((e,n)=>this.addInstances(e,this.stiffMat,u.filter((e,t)=>t%2===n),s(-.05),t.shadows));for(let e of u)this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:.25*e.s});let p=[];for(let e=0;e<9e3&&p.length<Math.round(700*a)+40;e++){let e=i()*6.28,t=20+Math.sqrt(i())*820,n=Math.cos(e)*t,r=Math.sin(e)*t;Pd(n,r)>.6||Md(n,r)>.3||this.clear(n,r,1.4)&&p.push({x:n,z:r,s:.55+i()*.8,yaw:i()*6.28})}let m=[],h=[],g=vf(Td,20),_=(e,t,n)=>g.some(([r,i])=>Math.abs(r-e)<n&&Math.abs(i-t)<n&&Math.hypot(r-e,i-t)<n);for(let e=0;e<6e3&&m.length<Math.round(420*a)+40;e++){let e=-1050-i()*750,t=-1700+i()*2500;_(e,t,5)||(i()<.07?h:m).push({x:e,z:t,s:.6+i()*.9,yaw:i()*6.28})}let v=_f(21);this.geometries.push(v),this.addInstances(v,this.stiffMat,[...p,...m],s(-.1,.9),t.shadows),this.addInstances(f[0],this.stiffMat,h,s(-.05),!1);let y=[],b=Math.round(420*a)+40;for(let e=0;e<12e3&&y.length<b;e++){let e=i()*6.28,t=300+i()*600,n=Math.cos(e)*t,r=Math.sin(e)*t,a=Pd(n,r);a<.02&&i()>.12||a>.75||this.clear(n,r,2.5)&&y.push({x:n,z:r,s:.3+i()*i()*(1+a*3),yaw:i()*6.28})}let x=new qi(1,1);x.deleteAttribute(`uv`);{let e=x.getAttribute(`position`);for(let t=0;t<e.count;t++){let n=.8+.35*ed.noise(e.getX(t)*1.7+3,e.getZ(t)*1.7+e.getY(t));e.setXYZ(t,e.getX(t)*n,e.getY(t)*n*.7,e.getZ(t)*n)}x.computeVertexNormals(),x.setAttribute(`color`,new wr(new Float32Array(e.count*3).fill(.93),3))}this.geometries.push(x),this.addInstances(x,this.rockMat,y,(e,t)=>t.compose(new H(e.x,Z(e.x,e.z)+e.s*.15,e.z),new Rt().setFromAxisAngle(new H(.3,1,.2).normalize(),e.yaw),new H(e.s,e.s,e.s)),t.shadows);for(let e of y)e.s>.6&&this.obstacles.push({kind:`circle`,x:e.x,z:e.z,r:e.s*.85})}clear(e,t,n){if(Math.hypot(e,t)>rd.terrainRadius+40||Math.abs(e-yd.center[0])<110+n&&t>vd.near.center[1]-14-n&&t<vd.far.center[1]+16+n||Math.hypot(e-fd.center[0],t-fd.center[1])<fd.radius+30+n||Math.hypot((e-pd.center[0])*.8,t-pd.center[1])<pd.radius+20+n||Math.hypot(e-sd.center[0],t-sd.center[1])<26+n||Math.hypot(e-dd.center[0],t-dd.center[1])<8+n)return!1;for(let r of ud)if(Math.hypot(e-r.x,t-r.z)<5+n)return!1;for(let r of gd)if(Math.hypot(e-r.x,t-r.z)<6+n)return!1;for(let r of _d)if(Math.hypot(e-r.x,t-r.z)<4+n)return!1;for(let[r,i]of Object.values(lf))if(Math.hypot(e-r,t-i)<4+n)return!1;if(Md(e,t)>.5)return!1;for(let r of yf)for(let i=0;i<r.length-1;i++){let[a,o]=r[i],[s,c]=r[i+1];if(!(Math.abs(e-a)>40&&Math.abs(e-s)>40)&&iu(e,t,a,o,s,c)<6+n)return!1}return!(Math.abs(e-vd.near.center[0])<80&&t<vd.near.center[1]&&t>fd.center[1]||Math.abs(e-vd.far.center[0])<120&&t>vd.far.center[1]&&t<pd.center[1])}addInstances(e,t,n,r,i){if(!n.length)return;let a=new xi(e,t,n.length),o=new cn;n.forEach((e,t)=>{r(e,o),a.setMatrixAt(t,o)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),a.castShadow=i,a.receiveShadow=!0,this.meshes.push(a),this.object.add(a)}update(e){}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.meshes)e.dispose();this.plantMat.dispose(),this.stiffMat.dispose(),this.rockMat.dispose(),this.object.clear()}};function xf(e){let t=e.map(e=>{e.getAttribute(`uv`)&&e.deleteAttribute(`uv`),e.getAttribute(`normal`)&&e.deleteAttribute(`normal`);let t=e.index?e.toNonIndexed():e;return t!==e&&e.dispose(),t}),n=Qd(t);for(let e of t)e.dispose();let r=ef(n,1e-4);return n.dispose(),r.computeVertexNormals(),r}var Sf=(e,t)=>new Ji(e.map(([e,t])=>new V(e,t)),t);function Cf(){let e=Sf([[0,0],[.3,0],[.29,.12],[.25,.45],[.21,.86],[.195,.98],[.21,1.02],[.215,1.18],[.225,1.3],[.2,1.38],[.12,1.44],[.06,1.47],[0,1.48]],16);e.scale(1,1,.72);let t=new qi(.11,2);t.scale(.95,1.12,1),t.translate(0,1.6,.015);let n=Sf([[0,1.77],[.1,1.74],[.135,1.66],[.15,1.52],[.22,1.36],[.25,1.22],[0,1.22]],14);n.scale(1,1,.8),n.translate(0,0,-.03);let r=[e,t,n];for(let e of[-1,1]){let t=new Wi(.055,.085,.62,8,1,!1);t.rotateZ(e*.12),t.rotateX(-.12),t.translate(e*.25,1.02,.03),r.push(t)}return xf(r)}function wf(){let e=Sf([[0,-.05],[.24,-.05],[.22,.2],[.2,.42],[.215,.62],[.2,.7],[.12,.76],[0,.78]],14);e.scale(1,1,.75);let t=new qi(.11,2);t.scale(.95,1.12,1),t.translate(0,.9,.015);let n=Sf([[0,1.07],[.1,1.04],[.135,.96],[.15,.82],[.22,.66],[.24,.54],[0,.54]],12);n.scale(1,1,.8);let r=[e,t,n];for(let e of[-1,1]){let t=new Wi(.08,.1,.5,8,1,!1);t.rotateX(Math.PI/2-.5),t.rotateZ(e*.35),t.translate(e*.24,-.08,.12);let n=new Wi(.05,.075,.5,8,1,!1);n.rotateZ(e*.12),n.translate(e*.34,-.42,.24);let i=new Wi(.05,.075,.5,8,1,!1);i.rotateX(-.7),i.translate(e*.22,.38,.15),r.push(t,n,i)}return xf(r)}function Tf(){let e=new Wi(.016,.02,2.45,5,1,!1);e.translate(0,1.225,0);let t=new Wi(0,.032,.22,5,1,!1);return t.translate(0,2.56,0),xf([e,t])}function Ef(){let e=new Wi(.3,.3,.045,18,1,!1);e.rotateX(Math.PI/2);let t=new Xi(.06,8,6);return t.scale(1,1,.5),t.translate(0,0,.03),xf([e,t])}function Df(){let e=Sf([[0,.19],[.06,.18],[.11,.13],[.135,.05],[.14,0],[0,0]],12);return e.translate(0,1.66,.01),xf([e])}function Of(){let e=new Wi(.022,.026,3.4,5,1,!1);e.translate(0,1.7,0);let t=new Xi(.045,6,4);return t.translate(0,3.42,0),xf([e,t])}function kf(){let e=new Yi(.9,.65,6,3);return e.translate(.47,3,0),e.deleteAttribute(`uv`),e}var Af=e=>new W().setHex(e),jf=new H(0,1,0);function Mf(e,t,n=0,r=0,i=0){e.getAttribute(`uv`)&&e.deleteAttribute(`uv`);let a=e.index?e.toNonIndexed():e;a!==e&&e.dispose();let o=a.getAttribute(`position`).count,s=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o*2);for(let e=0;e<o;e++)s[e*3]=t.r,s[e*3+1]=t.g,s[e*3+2]=t.b,c[e]=n,l[e*2]=r,l[e*2+1]=i;return a.setAttribute(`color`,new wr(s,3)),a.setAttribute(`aLeg`,new wr(c,1)),a.setAttribute(`aHip`,new wr(l,2)),a}var Nf=class{constructor(){q(this,`parts`,[])}ellipsoid(e,t,n,r,i,a,o,s=14){let c=new Xi(1,s,Math.max(6,Math.round(s*.7)));return c.scale(e,t,n),c.translate(r,i,a),this.parts.push(Mf(c,o)),this}segment(e,t,n,r,i,a=0,o=0,s=0){let c=new H(...e),l=new H(...t),u=l.clone().sub(c),d=new Wi(r,n,u.length(),8,1,!1);return d.applyQuaternion(new Rt().setFromUnitVectors(jf,u.normalize())),d.translate((c.x+l.x)/2,(c.y+l.y)/2,(c.z+l.z)/2),this.parts.push(Mf(d,i,a,o,s)),this}cone(e,t,n,r){let i=new H(...e),a=new H(...t),o=a.clone().sub(i),s=new Gi(n,o.length(),7);return s.applyQuaternion(new Rt().setFromUnitVectors(jf,o.normalize())),s.translate((i.x+a.x)/2,(i.y+a.y)/2,(i.z+a.z)/2),this.parts.push(Mf(s,r)),this}legs(e,t,n,r,i,a,o,s){let c=[[1,-e,n],[2,e,n],[3,-e,r],[4,e,r]];for(let[e,n,r]of c)this.segment([n,.08,r],[n,t+.08,r],a,i,o,e,t,r),this.segment([n,0,r+.02],[n,.1,r+.02],a*1.15,a*1.05,s,e,t,r);return this}build(){let e=Qd(this.parts);for(let e of this.parts)e.dispose();if(!e)throw Error(`animal geometry merge failed`);return e.computeBoundingSphere(),e}},Pf=Af(2761759);function Ff(e){let t=Af(16777215),n=Af(9404528),r=new Nf().ellipsoid(.38,.43,.95,0,1.55,0,t,16).ellipsoid(.27,.44,.42,0,1.96,-.04,t,14).legs(.2,1.32,.55,-.6,.09,.05,t,n).segment([0,1.66,.74],[0,1.42,1.22],.21,.16,t).segment([0,1.42,1.22],[0,1.66,1.42],.16,.14,t).segment([0,1.66,1.42],[0,2.08,1.55],.14,.12,t).ellipsoid(.12,.14,.33,0,2.1,1.74,t,12).ellipsoid(.09,.09,.12,0,2.03,2,t,8).segment([.06,2.2,1.62],[.08,2.29,1.58],.025,.012,t).segment([-.06,2.2,1.62],[-.08,2.29,1.58],.025,.012,t).segment([0,1.62,-.9],[0,1.05,-1],.035,.02,t);if(e){let e=Af(12032630),t=Af(8210994);r.ellipsoid(.24,.3,.5,.46,1.56,.05,e,10).ellipsoid(.24,.3,.5,-.46,1.56,.05,e,10).ellipsoid(.36,.1,.4,0,2.2,-.06,t,10)}return r.build()}function If(){let e=Af(16777215),t=Af(2827296);return new Nf().ellipsoid(.31,.37,.82,0,1.25,0,e,14).legs(.16,1.02,.52,-.52,.075,.045,e,Pf).segment([0,1.36,.66],[0,1.82,1],.17,.1,e).ellipsoid(.1,.12,.29,0,1.82,1.2,e,10).segment([0,1.62,.78],[0,1.98,.98],.05,.035,t).segment([.05,1.96,1.06],[.06,2.1,1.04],.025,.01,e).segment([-.05,1.96,1.06],[-.06,2.1,1.04],.025,.01,e).segment([0,1.4,-.78],[0,.82,-.98],.07,.04,t).ellipsoid(.3,.06,.32,0,1.6,.05,Af(7028010),10).build()}var Lf={camel:{name:`camel`,stride:2.2,length:2.4,build:()=>Ff(!1)},loadedCamel:{name:`loaded-camel`,stride:2.2,length:2.4,build:()=>Ff(!0)},horse:{name:`horse`,stride:2,length:2,build:If}},Rf=`
  if (aLeg > 0.5) {
    // Diagonal pairs move together: front-left with back-right, front-right with back-left.
    float legPhase = (aLeg < 1.5 || aLeg > 3.5) ? 0.0 : 3.14159265;
    #ifdef PACING
    // Camels pace: the two legs on the same side move together.
    legPhase = (aLeg < 1.5 || (aLeg > 2.5 && aLeg < 3.5)) ? 0.0 : 3.14159265;
    #endif
    float swing = sin(aGait.x + legPhase) * aGait.y * 0.5;
    float dy = transformed.y - aHip.x;
    float dz = transformed.z - aHip.y;
    transformed.y = aHip.x + dy * cos(swing) - dz * sin(swing);
    transformed.z = aHip.y + dy * sin(swing) + dz * cos(swing);
  } else {
    transformed.y += abs(sin(aGait.x)) * aGait.y * 0.035;
  }
`,zf={believers:120,quraysh:360},Bf=300,Vf=520,Hf=[14274491,13023133,10916471,9204824,14932679,7297862,12562063,9863786],Uf=[8076331,5982007,9268031,4209479,7090224,10189910,5000006,3156777,7232065,5788752],Wf=new cn,Gf=new cn,Kf=new Rt,qf=new Rt,Jf=new H,Yf=new H,Xf=new H(0,1,0),Zf=new H(1,0,0),Qf=new H(0,0,1),$f=new cn().makeScale(0,0,0);function ep(e,t,n){for(let r of gd)if(Math.abs(e-r.x)<r.halfX+n&&Math.abs(t-r.z)<r.halfZ+n+1)return!0;return!1}function tp(e,t){let n=t-e;return Math.atan2(Math.sin(n),Math.cos(n))}var np=class{constructor(e){q(this,`object`,new In),q(this,`interactables`,void 0),q(this,`counts`,void 0),q(this,`figs`,[]),q(this,`mounts`,[]),q(this,`nB`,void 0),q(this,`geometries`,[]),q(this,`materials`,[]),q(this,`body`,void 0),q(this,`fadeAttr`,void 0),q(this,`spears`,void 0),q(this,`shields`,void 0),q(this,`helmets`,void 0),q(this,`poles`,void 0),q(this,`cloths`,void 0),q(this,`riders`,void 0),q(this,`riderFade`,void 0),q(this,`camels`,void 0),q(this,`horses`,void 0),q(this,`camelFade`,void 0),q(this,`camelGait`,void 0),q(this,`horseFade`,void 0),q(this,`horseGait`,void 0),q(this,`proxyB`,void 0),q(this,`proxyQ`,void 0),q(this,`bannerHolders`,[]),q(this,`centroidB`,new H),q(this,`centroidQ`,new H),q(this,`visibleB`,0),q(this,`visibleQ`,0),q(this,`lastTime`,0),q(this,`forceSnap`,!0),q(this,`slotGap`,void 0),q(this,`colLen`,void 0),q(this,`xz`,[0,0]),q(this,`tgt`,[0,0]),q(this,`look`,[0,0]),q(this,`pose`,{lie:0,sit:0}),this.object.name=`armies`;let t=e.quality,n=ru(624),r=Math.max(48,Math.round(zf.believers*t.crowdDensity)),i=r*3;this.nB=r;let a=Math.max(12,Math.round(30*t.crowdDensity)),o=Math.max(12,Math.round(30*t.crowdDensity)),s=Math.max(8,Math.round(16*t.crowdDensity));this.counts={believers:r,quraysh:i,horses:a+2,camels:o+s};let c=vd.near,l=vd.far,u=Math.ceil(r/c.rows),d=Math.ceil(i/l.rows),f=ud.find(e=>e.main);for(let e=0;e<=1;e+=1){let t=e===0?r:i;for(let r=0;r<t;r++){let t=e===0?u:d,i=e===0?c:l,a=Math.floor(r/t),o=r%t,s=(n()-.5)*.35,p=(n()-.5)*.35,m=i.center[0]+(o-(t-1)/2)*i.spacing+s,h=i.center[1]+(e===0?-a:a)*i.rowGap+p,g,_=0;do if(e===0){let e=n()*Math.PI*2,t=6+Math.sqrt(n())*fd.radius*.85;g=[fd.center[0]+Math.cos(e)*t,fd.center[1]+Math.sin(e)*t*.75]}else{let e=n()*Math.PI*2,t=8+Math.sqrt(n())*pd.radius;g=[pd.center[0]+Math.cos(e)*t*1.2,pd.center[1]+Math.sin(e)*t*.65]}while(ep(g[0],g[1],1.2)&&++_<12);let v=g,y=e===0&&r%13==0?0:1,b=n()*Math.PI*2;if(e===1&&r%4==0){let e=_d.filter(e=>e.side===1),t=e[r/4%e.length|0],i=(r/4/e.length|0)*.75+n()*.3,a=2.6+n()*1.6;v=[t.x+Math.cos(i)*a,t.z+Math.sin(i)*a],y=2,b=Math.atan2(t.x-v[0],t.z-v[1])}let x;if(e===0&&r%3!=0){let e=-Math.PI*.95+n()*Math.PI*1.9,t=6+n()*26;x=[f.x+Math.cos(e)*t*1.3,f.z+4+Math.sin(e)*t*.8],Math.abs(x[0]-dd.center[0])<dd.halfX+1&&Math.abs(x[1]-dd.center[1])<dd.halfZ+1&&(x[1]+=6)}else x=g;let S=e===1&&n()<.3;this.figs.push({side:e,k:r,slot:Math.floor(e===0?r/2:r/3),lateral:e===0?r%2==0?-.7:.7:(r%3-1)*1.2,rx:m,rz:h,row:a,camp:g,campYaw:n()*Math.PI*2,night:v,nightPose:y,nightYaw:b,gather:x,flee:.75+n()*.5,scale:.93+n()*.12,phase:n()*100,spear:n()<(e===0?.45:.6),shield:n()<(e===0?.35:.55),helmet:S,banner:-1,x:g[0],z:g[1],y:0,yaw:0,walk:0,step:n()*6,fade:0,lie:0,sit:0})}}[Math.floor(u/2),r+Math.floor(d*.2),r+Math.floor(d*.5),r+Math.floor(d*.8)].forEach((e,t)=>{let n=this.figs[e];n.banner=t,n.spear=!1,n.shield=!1,this.bannerHolders.push(e)});let p=Math.ceil(zf.believers/Sd.believers.perSlot),m=Math.ceil(zf.quraysh/Sd.quraysh.perSlot);this.colLen=[p*Sd.believers.gap,m*Sd.quraysh.gap],this.slotGap=[Sd.believers.gap*(p/Math.ceil(r/Sd.believers.perSlot)),Sd.quraysh.gap*(m/Math.ceil(i/Sd.quraysh.perSlot))];let h=u*c.spacing,g=d*l.spacing;for(let e=0;e<2;e++)this.mounts.push(this.mount(0,`horse`,e,3+e,2.2,[fd.center[0]+40+e*4,fd.center[1]+26],[c.center[0]+(e===0?-1:1)*(h/2+5),c.center[1]-1.5],!0,n));for(let e=0;e<s;e++)this.mounts.push(this.mount(0,`camel`,e,6+e*Math.floor(r/2/s),e%2?2.4:-2.4,[fd.center[0]-64+e%4*4.5,fd.center[1]-6+Math.floor(e/4)*5],null,!1,n));for(let e=0;e<a;e++){let t=e%2==0?-1:1,r=Math.floor(e/2),i=[l.center[0]+t*(g/2+4+r%4*2.8),l.center[1]+Math.floor(r/4)*3.2],a=[pd.center[0]+120+e%6*2.2,pd.center[1]-30+Math.floor(e/6)*4.5];this.mounts.push(this.mount(1,`horse`,e,Math.floor(e/3),(e%3-1)*1.6,a,i,!0,n))}for(let e=0;e<o;e++){let t=[pd.center[0]-140+e%6*4.8,pd.center[1]-20+Math.floor(e/6)*5.2],r=Math.max(1,Math.floor((Math.ceil(i/3)-12)/o));this.mounts.push(this.mount(1,`camel`,e,12+e*r,e%2?3.4:-3.4,t,null,!1,n))}let _=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFade = aFade;`)},v=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFade;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
float bdD = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
if (bdD > vFade) discard;`)},y=e=>{let t=new sa({roughness:.93,metalness:0});return t.customProgramCacheKey=()=>e,t.onBeforeCompile=e=>{_(e),v(e)},this.materials.push(t),t},b=y(`bd-person`),x=new sa({roughness:.75,metalness:.1});this.materials.push(x);let S=new sa({color:new W().setHex(6183766),roughness:.5,metalness:.55});this.materials.push(S);let C=new sa({roughness:.9,side:2});C.customProgramCacheKey=()=>`bd-banner`,C.onBeforeCompile=t=>{t.uniforms.uTime=e.uniforms.uTime,t.uniforms.uWind=e.uniforms.uWind,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform vec2 uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float bdK = clamp((transformed.x - 0.02) / 0.9, 0.0, 1.0);
float bdW = 0.35 + length(uWind) * 1.2;
transformed.z += sin(transformed.x * 7.0 - uTime * 4.0 + transformed.y * 2.0) * 0.07 * bdK * bdW;
transformed.y -= bdK * bdK * 0.12 * (1.0 - min(1.0, length(uWind)));`)},this.materials.push(C);let w=(e,t)=>{let n=new sa({vertexColors:!0,roughness:.9,metalness:0});return n.customProgramCacheKey=()=>e,n.onBeforeCompile=e=>{t&&(e.defines={...e.defines??{},PACING:1}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
attribute float aLeg;
attribute vec2 aHip;
attribute vec2 aGait;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvFade = aFade;\n${Rf}`),v(e)},this.materials.push(n),n},T=r+i,E=(e,n,r,i)=>{this.geometries.push(e);let a=new xi(e,n,r);a.instanceMatrix.setUsage(Qe),a.frustumCulled=!1,a.castShadow=i&&t.shadows,a.receiveShadow=i&&t.shadows;for(let e=0;e<r;e++)a.setMatrixAt(e,$f);return this.object.add(a),a},D=Cf();this.fadeAttr=new pi(new Float32Array(T),1),this.fadeAttr.setUsage(Qe),D.setAttribute(`aFade`,this.fadeAttr),this.body=E(D,b,T,!0);let O=new W;this.figs.forEach((e,t)=>{let n=e.side===0?Hf:Uf;this.body.setColorAt(t,O.setHex(n[(t*7+e.k)%n.length]).multiplyScalar(.88+t*37%10/45))}),this.spears=E(Tf(),x,T,!1);for(let e=0;e<T;e++)this.spears.setColorAt(e,O.setHex(7230520).multiplyScalar(.9+e%5*.05));this.shields=E(Ef(),x,T,!1);for(let e=0;e<T;e++)this.shields.setColorAt(e,O.setHex([8084026,9399365,6243890,10125409][e%4]));this.helmets=E(Df(),S,T,!1),this.poles=E(Of(),x,4,!1);for(let e=0;e<4;e++)this.poles.setColorAt(e,O.setHex(5915696));this.cloths=E(kf(),C,4,!1),[15327952,9056036,3814736,10189372].forEach((e,t)=>this.cloths.setColorAt(t,O.setHex(e)));let k=this.mounts.filter(e=>e.rider).length,A=wf();this.riderFade=new pi(new Float32Array(k),1),this.riderFade.setUsage(Qe),A.setAttribute(`aFade`,this.riderFade),this.riders=E(A,y(`bd-rider`),k,!0);let j=0;for(let e of this.mounts)e.rider&&this.riders.setColorAt(j++,O.setHex((e.side===0?Hf:Uf)[e.j*3%8]));let M=this.mounts.filter(e=>e.kind===`camel`),N=this.mounts.filter(e=>e.kind===`horse`),ee=Lf.camel.build();this.camelFade=new pi(new Float32Array(M.length),1),this.camelGait=new pi(new Float32Array(M.length*2),2),this.camelFade.setUsage(Qe),this.camelGait.setUsage(Qe),ee.setAttribute(`aFade`,this.camelFade),ee.setAttribute(`aGait`,this.camelGait),this.camels=E(ee,w(`bd-camel`,!0),M.length,!0),M.forEach((e,t)=>this.camels.setColorAt(t,O.setHex([13215615,12096619,14072980,11109472,9399887][(e.j+e.side*2)%5])));let P=Lf.horse.build();this.horseFade=new pi(new Float32Array(N.length),1),this.horseGait=new pi(new Float32Array(N.length*2),2),this.horseFade.setUsage(Qe),this.horseGait.setUsage(Qe),P.setAttribute(`aFade`,this.horseFade),P.setAttribute(`aGait`,this.horseGait),this.horses=E(P,w(`bd-horse`,!1),N.length,!0),N.forEach((e,t)=>this.horses.setColorAt(t,O.setHex([5913128,3811874,9071178,7031347,12101004,2761760][(e.j+e.side)%6])));let te=new Zr({visible:!1});this.materials.push(te);let ne=new Ui(.8,1.9,.8);ne.translate(0,.95,0),this.proxyB=E(ne,te,r,!1),this.proxyQ=new xi(ne,te,i+N.length),this.proxyQ.instanceMatrix.setUsage(Qe),this.proxyQ.frustumCulled=!1;for(let e=0;e<i+N.length;e++)this.proxyQ.setMatrixAt(e,$f);this.object.add(this.proxyQ),this.interactables=[{id:`believers`,targets:[this.proxyB],maxDistance:260,isAvailable:()=>this.visibleB>4,anchor:e=>this.visibleB<8?!1:(e.copy(this.centroidB),e.y+=4.5,!0)},{id:`quraysh`,targets:[this.proxyQ],maxDistance:320,isAvailable:()=>this.visibleQ>4,anchor:e=>this.visibleQ<8?!1:(e.copy(this.centroidQ),e.y+=5,!0)},{id:`equipment`,targets:[this.poles],maxDistance:120,isAvailable:e=>e.ranks>.5&&e.clash<.2&&e.rout<.05,anchor:(e,t)=>{if(t.ranks<.6||t.advance>.2)return!1;let n=this.figs[this.bannerHolders[0]];return e.set(n.x+6,n.y+4.2,n.z),!0}}]}mount(e,t,n,r,i,a,o,s,c){return{side:e,kind:t,j:n,slot:r,lateral:i,camp:a,campYaw:c()*Math.PI*2,rank:o,rider:s,flee:1.3+c()*.4,phase:c()*100,x:a[0],z:a[1],yaw:0,walk:0,fade:0,couch:0,riding:0}}snap(){this.forceSnap=!0}get believersCentre(){return this.centroidB}column(e,t,n,r,i,a){let o=t===0?bd:xd,s=t===0?Sd.believers:Sd.quraysh,c=o.length,l=t===0?e.march:e.qMarch;if(l<=0)return o.at(0,a),0;let u=Cd(o,s.approach,this.colLen[t],s.tail,l)-n*this.slotGap[t],d=J(0,.012,l);if(u<=0)return o.at(0,a),0;if(u<=c){let e=o.at(u,a);return a[0]+=Math.cos(e)*r,a[1]-=Math.sin(e)*r,d*J(0,30,u)}o.at(c,a);let f=J(0,1,(u-c)/40);return a[0]=$l(a[0],i[0],f),a[1]=$l(a[1],i[1],f),1}figTarget(e,t,n,r){let i=this.tgt,a=this.look,o=J(0,1,t.ranks),s;if(r.lie=0,r.sit=0,e.side===0){s=this.column(t,0,e.slot,e.lateral,e.camp,i),a[0]=i[0]+Math.sin(e.campYaw)*4,a[1]=i[1]+Math.cos(e.campYaw)*4;let c=J(0,1,t.rest)*(1-o);if(c>.001&&(i[0]=$l(i[0],e.night[0],c),i[1]=$l(i[1],e.night[1],c),e.nightPose===1&&(r.lie=c)),o>.001){let r=vd.near,c=e.rz+(r.advanceTo-r.center[1])*J(0,1,t.advance);c+=t.clash*(e.row===0?7:e.row===1?4:1.5)+J(0,1,t.rout)*14;let l=e.rx,u=t.clash*(e.row===0?1.6:.8);u>.01&&(l+=ed.noise(n*.45+e.phase,e.k*.37)*u,c+=ed.noise(e.k*.29,n*.5+e.phase)*u),i[0]=$l(i[0],l,o),i[1]=$l(i[1],c,o),a[0]=$l(a[0],l,o),a[1]=$l(a[1],c+10,o),s=Math.max(s,o)}let l=J(0,1,t.gather);if(l>.001){i[0]=$l(i[0],e.gather[0],l),i[1]=$l(i[1],e.gather[1],l);let t=ud[0];a[0]=$l(a[0],t.x,l),a[1]=$l(a[1],t.z,l)}return s}s=this.column(t,1,e.slot,e.lateral,e.camp,i),a[0]=i[0]+Math.sin(e.campYaw)*4,a[1]=i[1]+Math.cos(e.campYaw)*4;let c=J(0,1,t.fires)*J(4,-4,t.sunElevation)*(1-o)*J(.9,1,t.qCamp);if(c>.001&&(i[0]=$l(i[0],e.night[0],c),i[1]=$l(i[1],e.night[1],c),e.nightPose===2?(r.sit=c,a[0]=$l(a[0],i[0]+Math.sin(e.nightYaw)*3,c),a[1]=$l(a[1],i[1]+Math.cos(e.nightYaw)*3,c)):r.lie=c),o>.001){let r=vd.far,c=e.rz+(r.advanceTo-r.center[1])*J(0,1,t.advance);c-=t.clash*(e.row===0?7:e.row===1?4.5:2);let l=e.rx,u=t.clash*(e.row<2?1.7:.9);u>.01&&(l+=ed.noise(n*.45+e.phase,e.k*.31)*u,c+=ed.noise(e.k*.23,n*.5+e.phase)*u),i[0]=$l(i[0],l,o),i[1]=$l(i[1],c,o),a[0]=$l(a[0],l,o),a[1]=$l(a[1],c-10,o),s=Math.max(s,o)}if(t.rout>.001){let n=t.rout*Vf*e.flee-(e.row*3+e.k%7*2);if(n>0){wd.at(n,this.xz);let e=wd.points[0][0],t=wd.points[0][1],r=1+Math.min(n/200,1.5),o=J(0,25,n),c=i[0]+(this.xz[0]-e)+(i[0]-vd.far.center[0])*(r-1)*.35,l=i[1]+(this.xz[1]-t);i[0]=$l(i[0],c,o),i[1]=$l(i[1],l,o),a[0]=i[0],a[1]=i[1]+10,s*=1-J(Bf,360,n)}}return s}update(e){let t=e.env,n=e.dt,r=e.time,i=this.forceSnap||n<=0||Math.abs(r-this.lastTime)>1;this.forceSnap=!1,this.lastTime=r;let a=0,o=0,s=0,c=0,l=0,u=0,d=1-J(.95,1,t.gather),f=J(0,1,t.advance)*(1-J(0,.4,t.rout));for(let e=0;e<this.figs.length;e++){let p=this.figs[e],m=this.figTarget(p,t,r,this.pose);this.moveTo(p,this.tgt[0],this.tgt[1],this.look[0],this.look[1],n,i,9);let h=i?1:Math.min(1,n*2);p.fade+=(m-p.fade)*h,p.lie+=(this.pose.lie-p.lie)*(i?1:Math.min(1,n*1.2)),p.sit+=(this.pose.sit-p.sit)*(i?1:Math.min(1,n*1.2)),p.step+=n*(5+4*Math.min(1,p.walk))*Math.min(1,p.walk*1.6);let g=Z(p.x,p.z);p.y=g;let _=p.lie>.5,v=_?0:Math.abs(Math.sin(p.step))*.05*Math.min(1,p.walk);Kf.setFromAxisAngle(Xf,p.yaw),_&&Kf.multiply(qf.setFromAxisAngle(Qf,Math.PI/2));let y=p.scale*(1-.38*p.sit);Wf.compose(Jf.set(p.x,g+v+(_?.15:0),p.z),Kf,Yf.set(_?p.scale*.55:p.scale,y,p.scale));let b=p.fade>.01;this.body.setMatrixAt(e,b?Wf:$f),this.fadeAttr.setX(e,p.fade);let x=b&&!_&&p.sit<.5&&d>.5&&p.fade>.4;if(p.spear&&x?(Gf.compose(Jf.set(.31,.1,.12),qf.setFromAxisAngle(Zf,.08+f*.35),Yf.set(1,1,1)),this.spears.setMatrixAt(e,Gf.premultiply(Wf))):this.spears.setMatrixAt(e,$f),p.shield&&x?(Gf.compose(Jf.set(-.3,1.02,.2),qf.setFromAxisAngle(Xf,-.45),Yf.set(1,1,1)),this.shields.setMatrixAt(e,Gf.premultiply(Wf))):this.shields.setMatrixAt(e,$f),this.helmets.setMatrixAt(e,p.helmet&&b&&!_?Wf:$f),p.banner>=0){let e=p.banner;x&&(t.ranks>.3||(p.side===0?t.march<.999:t.qMarch<.999))?(Gf.compose(Jf.set(.3,0,.1),qf.identity(),Yf.set(1,1,1)),Gf.premultiply(Wf),this.poles.setMatrixAt(e,Gf),this.cloths.setMatrixAt(e,Gf)):(this.poles.setMatrixAt(e,$f),this.cloths.setMatrixAt(e,$f))}let S=b&&p.fade>.3?Wf:$f;p.side===0?(this.proxyB.setMatrixAt(p.k,S),p.fade>.5&&(a+=p.x,o+=p.z,s++)):(this.proxyQ.setMatrixAt(p.k,S),p.fade>.5&&(c+=p.x,l+=p.z,u++))}let p=0,m=0,h=0,g=J(0,1,t.ranks);for(let e of this.mounts){let a=this.tgt,o=this.column(t,e.side,e.slot,e.lateral,e.camp,a),s=a[0]+Math.sin(e.campYaw)*4,c=a[1]+Math.cos(e.campYaw)*4,l=(e.side===0?t.march:t.qMarch)>.999||o>=1,u=e.kind===`camel`?J(.9,1,e.side===0?t.camp:t.qCamp)*+!!l:0,d=e.rider&&e.side===1?.6:0;if(e.kind===`horse`&&e.rank&&g>.001){let n=e.side===0?vd.near:vd.far,i=e.rank[1]+(n.advanceTo-n.center[1])*J(0,1,t.advance)*(e.side===0?.6:1);i+=(e.side===0?1:-1)*t.clash*3;let l=e.rank[0];t.clash>.01&&(l+=ed.noise(r*.4+e.phase,3.3)*t.clash*2.5,i+=ed.noise(5.1,r*.45+e.phase)*t.clash*2.5),a[0]=$l(a[0],l,g),a[1]=$l(a[1],i,g),s=$l(s,l,g),c=$l(c,i+(e.side===0?10:-10),g),o=Math.max(o,g),d=Math.max(d,g)}if(e.side===1&&e.kind===`horse`&&t.rout>.001){let n=t.rout*Vf*e.flee;wd.at(n,this.xz);let r=J(0,25,n);a[0]=$l(a[0],a[0]+this.xz[0]-wd.points[0][0],r),a[1]=$l(a[1],a[1]+this.xz[1]-wd.points[0][1],r),c=a[1]+10,s=a[0],o*=1-J(Bf,360,n)}if(e.side===0&&e.kind===`horse`){let n=J(0,1,t.gather);a[0]=$l(a[0],e.camp[0],n),a[1]=$l(a[1],e.camp[1],n),d*=1-n}this.moveMount(e,a[0],a[1],s,c,n,i),e.fade+=(o-e.fade)*(i?1:Math.min(1,n*2)),e.couch+=(u-e.couch)*(i?1:Math.min(1,n*.8)),e.riding+=(d-e.riding)*(i?1:Math.min(1,n*1.5));let f=Z(e.x,e.z)-e.couch*1.2;Kf.setFromAxisAngle(Xf,e.yaw),Wf.compose(Jf.set(e.x,f,e.z),Kf,Yf.set(1,1,1));let _=e.fade>.01,v=Math.min(1,e.walk/(e.kind===`horse`?3:2))*.8,y=e.kind===`horse`?Lf.horse.stride:Lf.camel.stride;e.phase+=n*e.walk*Math.PI*2/y,e.kind===`camel`?(this.camels.setMatrixAt(p,_?Wf:$f),this.camelFade.setX(p,e.fade),this.camelGait.setXY(p,e.phase,v),p++):(this.horses.setMatrixAt(m,_?Wf:$f),this.horseFade.setX(m,e.fade),this.horseGait.setXY(m,e.phase,v),e.side===1&&this.proxyQ.setMatrixAt(this.figs.length-this.nB+m-2,_&&e.fade>.3?Wf:$f),m++),e.rider&&(_&&e.riding>.5?(Gf.compose(Jf.set(0,1.58+Math.abs(Math.sin(e.phase))*.05*v,-.05),qf.identity(),Yf.set(1,1,1)),this.riders.setMatrixAt(h,Gf.premultiply(Wf))):this.riders.setMatrixAt(h,$f),this.riderFade.setX(h,e.fade),h++)}for(let e of[this.body,this.spears,this.shields,this.helmets,this.poles,this.cloths,this.riders,this.camels,this.horses,this.proxyB,this.proxyQ])e.instanceMatrix.needsUpdate=!0;this.proxyB.computeBoundingSphere(),this.proxyQ.computeBoundingSphere(),this.poles.computeBoundingSphere();for(let e of[this.fadeAttr,this.riderFade,this.camelFade,this.camelGait,this.horseFade,this.horseGait])e.needsUpdate=!0;this.visibleB=s,this.visibleQ=u,s&&this.centroidB.set(a/s,Z(a/s,o/s),o/s),u&&this.centroidQ.set(c/u,Z(c/u,l/u),l/u)}moveTo(e,t,n,r,i,a,o,s){let c=t-e.x,l=n-e.z,u=Math.hypot(c,l);if(o||u>40||e.fade<.02)e.x=t,e.z=n,e.walk=0;else{let t=s*a,n=u>t?t/u:1;e.x+=c*n,e.z+=l*n;let r=a>0?u*n/a:0;e.walk+=(r-e.walk)*Math.min(1,a*4)}let d=e.walk>.6&&u>.15?Math.atan2(c,l):Math.atan2(r-e.x,i-e.z),f=tp(e.yaw,d);e.yaw+=o?f:f*Math.min(1,a*3)}moveMount(e,t,n,r,i,a,o){let s=t-e.x,c=n-e.z,l=Math.hypot(s,c);if(o||l>40||e.fade<.02)e.x=t,e.z=n,e.walk=0;else{let t=14*a,n=l>t?t/l:1;e.x+=s*n,e.z+=c*n;let r=a>0?l*n/a:0;e.walk+=(r-e.walk)*Math.min(1,a*4)}let u=e.walk>.6&&l>.15?Math.atan2(s,c):Math.atan2(r-e.x,i-e.z),d=tp(e.yaw,u);e.yaw+=o?d:d*Math.min(1,a*2)}columnLight(e,t){let n=this.column(e,0,4,0,[fd.center[0],fd.center[1]],this.tgt);return t.set(this.tgt[0],Z(this.tgt[0],this.tgt[1]),this.tgt[1]),n>.01}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();for(let e of[this.body,this.spears,this.shields,this.helmets,this.poles,this.cloths,this.riders,this.camels,this.horses,this.proxyB,this.proxyQ])e.dispose();this.object.clear()}},rp=4.4,ip=new cn,ap=new Rt,op=new H,sp=new H(1,1,1),cp=new H(0,1,0),lp=new cn().makeScale(0,0,0),up=class{constructor(e){q(this,`object`,new In),q(this,`interactables`,void 0),q(this,`camels`,void 0),q(this,`people`,void 0),q(this,`proxy`,void 0),q(this,`camelFade`,void 0),q(this,`camelGait`,void 0),q(this,`peopleFade`,void 0),q(this,`geometries`,[]),q(this,`materials`,[]),q(this,`n`,void 0),q(this,`nPeople`,void 0),q(this,`xz`,[0,0]),q(this,`centre`,new H),q(this,`visible`,0),q(this,`lastPath`,0),this.object.name=`caravan`;let t=e.quality;this.n=t.level===`low`?28:t.level===`medium`?40:52,this.nPeople=Math.ceil(this.n/4);let n=ru(31),r=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFade;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453) > vFade) discard;`)},i=new sa({vertexColors:!0,roughness:.9});i.customProgramCacheKey=()=>`bd-caravan-camel`,i.onBeforeCompile=e=>{e.defines={...e.defines??{},PACING:1},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
attribute float aLeg;
attribute vec2 aHip;
attribute vec2 aGait;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvFade = aFade;\n${Rf}`),r(e)};let a=new sa({roughness:.93});a.customProgramCacheKey=()=>`bd-caravan-person`,a.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFade;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFade = aFade;`),r(e)};let o=new Zr({visible:!1});this.materials.push(i,a,o);let s=Lf.loadedCamel.build();this.camelFade=new pi(new Float32Array(this.n),1),this.camelGait=new pi(new Float32Array(this.n*2),2),this.camelFade.setUsage(Qe),this.camelGait.setUsage(Qe),s.setAttribute(`aFade`,this.camelFade),s.setAttribute(`aGait`,this.camelGait),this.camels=new xi(s,i,this.n);let c=new W;for(let e=0;e<this.n;e++)this.camels.setColorAt(e,c.setHex([13215615,12096619,14072980,11109472][Math.floor(n()*4)]));let l=Cf();this.peopleFade=new pi(new Float32Array(this.nPeople),1),this.peopleFade.setUsage(Qe),l.setAttribute(`aFade`,this.peopleFade),this.people=new xi(l,a,this.nPeople);for(let e=0;e<this.nPeople;e++)this.people.setColorAt(e,c.setHex([7031350,9073494,4865072,10521194][e%4]));let u=new Ui(1.2,2.4,2.6);u.translate(0,1.2,0),this.proxy=new xi(u,o,this.n),this.geometries.push(s,l,u);for(let e of[this.camels,this.people,this.proxy])e.instanceMatrix.setUsage(Qe),e.frustumCulled=!1,e.castShadow=t.shadows&&e!==this.proxy,this.object.add(e);this.interactables=[{id:`caravan`,targets:[this.proxy],maxDistance:2600,isAvailable:e=>e.caravan>.2,anchor:(e,t)=>t.caravan<.3||this.visible<3?!1:(e.copy(this.centre),e.y+=9,!0)}]}update(e){let t=e.env,n=t.caravanPath,r=e.dt>0?Math.min(3,Math.abs(n-this.lastPath)/e.dt):0;this.lastPath=n;let i=Td.length,a=0,o=0,s=0,c=t.caravan;for(let e=0;e<this.n;e++){let t=n-e*rp,l=c*+(t>0&&t<i);if(l<.01){this.camels.setMatrixAt(e,lp),this.proxy.setMatrixAt(e,lp),this.camelFade.setX(e,0);continue}let u=Td.at(t,this.xz),d=this.xz[0],f=this.xz[1];if(ap.setFromAxisAngle(cp,u),ip.compose(op.set(d,Z(d,f),f),ap,sp),this.camels.setMatrixAt(e,ip),this.proxy.setMatrixAt(e,ip),this.camelFade.setX(e,l),this.camelGait.setXY(e,t/Lf.loadedCamel.stride*Math.PI*2,Math.min(1,r)*.7),a+=d,o+=f,s++,e%4==0){let n=e/4,i=1.6,a=d+Math.cos(u)*i,o=f-Math.sin(u)*i,s=Math.abs(Math.sin(t*1.6))*.05*Math.min(1,r);ip.compose(op.set(a,Z(a,o)+s,o),ap,sp),this.people.setMatrixAt(n,ip),this.peopleFade.setX(n,l)}}for(let e=0;e<this.nPeople;e++){let t=n-e*4*rp;c>.01&&t>0&&t<i||(this.people.setMatrixAt(e,lp),this.peopleFade.setX(e,0))}this.visible=s,s&&this.centre.set(a/s,Z(a/s,o/s),o/s);for(let e of[this.camels,this.people,this.proxy])e.instanceMatrix.needsUpdate=!0;this.proxy.computeBoundingSphere(),this.camelFade.needsUpdate=!0,this.camelGait.needsUpdate=!0,this.peopleFade.needsUpdate=!0}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();for(let e of[this.camels,this.people,this.proxy])e.dispose();this.object.clear()}},dp=`
attribute vec3 aPos;
attribute vec2 aSize;
attribute vec4 aColor;
attribute float aShape;
varying vec2 vUv;
varying vec4 vColor;
varying float vShape;
uniform float uTime;
void main() {
  vec4 mv = viewMatrix * vec4(aPos, 1.0);
  vec2 q = position.xy;
  if (aShape > 1.5) {
    // Tall soft light: keep it upright on screen (cylindrical billboard).
    vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 right = normalize(vec3(camRight.x, 0.0, camRight.z) + 1e-5);
    vec3 world = aPos + right * q.x * aSize.x + vec3(0.0, q.y * aSize.y, 0.0);
    mv = viewMatrix * vec4(world, 1.0);
  } else {
    mv.xy += q * aSize;
  }
  gl_Position = projectionMatrix * mv;
  vUv = q;
  vColor = aColor;
  vShape = aShape;
}
`,fp=`
varying vec2 vUv;
varying vec4 vColor;
varying float vShape;
uniform float uTime;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  vec2 p = vUv * 2.0;
  float a;
  if (vShape < 0.5) {
    // Round soft glow / dust puff.
    float r = length(p);
    a = exp(-r * r * 3.2);
  } else if (vShape < 1.5) {
    // Flame: teardrop, flickering.
    float y = p.y * 0.5 + 0.5;
    float w = mix(0.75, 0.05, y) * (0.85 + 0.15 * sin(uTime * 13.0 + y * 9.0));
    float x = p.x + 0.12 * sin(uTime * 9.0 + y * 7.0) * y;
    a = (1.0 - smoothstep(w * 0.5, w, abs(x))) * smoothstep(0.0, 0.15, y) * (1.0 - smoothstep(0.55, 1.0, y));
  } else if (vShape < 2.5) {
    // Tall soft light: a vertical glow, brightest low in its middle, without any form.
    float x = p.x;
    float y = p.y * 0.5 + 0.5;
    a = exp(-x * x * 5.0) * smoothstep(0.0, 0.25, y) * (1.0 - smoothstep(0.45, 1.0, y));
  } else {
    // Dust with ragged edges.
    float r = length(p);
    float n = vn(vUv * 3.0 + vColor.rg * 17.0 + uTime * 0.05);
    a = (1.0 - smoothstep(0.35, 1.0, r + (n - 0.5) * 0.5)) * 0.85;
  }
  a *= vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}
`,pp=`
attribute vec3 aPos;
attribute vec3 aParams; // width, height, phase
varying vec2 vUv;
varying float vPhase;
void main() {
  vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 right = normalize(vec3(camRight.x, 0.0, camRight.z) + 1e-5);
  vec3 world = aPos + right * position.x * aParams.x + vec3(0.0, (position.y + 0.5) * aParams.y, 0.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  vUv = vec2(position.x * 2.0, position.y + 0.5);
  vPhase = aParams.z;
}
`,mp=`
varying vec2 vUv;
varying float vPhase;
uniform float uTime;
uniform float uAlpha;
uniform vec3 uColor;
void main() {
  float x = vUv.x;
  float y = vUv.y;
  float a = exp(-x * x * 3.0) * smoothstep(0.0, 0.18, y) * (1.0 - smoothstep(0.55, 1.0, y));
  a *= 0.75 + 0.25 * sin(uTime * 0.6 + vPhase + y * 4.0);
  a *= uAlpha;
  a = min(a, 0.22);
  if (a < 0.002) discard;
  gl_FragColor = vec4(uColor, a);
}
`,hp=`
attribute vec3 aSeed;
attribute float aEnd;
uniform float uTime;
uniform vec2 uWind;
varying float vEnd;
const float W = 46.0;
const float H = 26.0;
void main() {
  vec3 c = cameraPosition;
  float x = c.x + mod(aSeed.x * W - c.x, W) - W * 0.5;
  float z = c.z + mod(aSeed.y * W - c.z, W) - W * 0.5;
  float y = c.y + mod(aSeed.z * H - uTime * 9.0 - c.y, H) - H * 0.5;
  float len = 0.55;
  vec3 p = vec3(x + aEnd * uWind.x * 0.25, y + aEnd * len, z + aEnd * uWind.y * 0.25);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  vEnd = aEnd;
}
`,gp=`
uniform float uRain;
uniform vec3 uColor;
varying float vEnd;
void main() {
  gl_FragColor = vec4(uColor, uRain * (0.15 + 0.35 * vEnd));
}
`,_p=new W(.78,.66,.5),vp=class{constructor(e){q(this,`object`,new In),q(this,`materials`,[]),q(this,`geometries`,[]),q(this,`dust`,void 0),q(this,`glows`,void 0),q(this,`dustSeeds`,void 0),q(this,`moteSeeds`,void 0),q(this,`shaftMat`,void 0),q(this,`shafts`,void 0),q(this,`shaftPos`,void 0),q(this,`rainMat`,void 0),q(this,`rain`,void 0),q(this,`u`,void 0),q(this,`columnLight`,void 0),q(this,`dustColor`,new W),q(this,`lightPos`,new H),q(this,`tmp`,new H),q(this,`xz`,[0,0]),q(this,`nDust`,void 0),q(this,`nMotes`,void 0),q(this,`lightLevel`,0),q(this,`supportLevel`,0),q(this,`tmpColor`,new W),q(this,`tmpColor2`,new W),this.object.name=`effects`,this.u=e.uniforms,this.columnLight=e.columnLight;let t=e.quality,n=ru(88);this.nDust=t.dustCount,this.dust=this.spriteSet(this.nDust,!1),this.dustSeeds=new Float32Array(this.nDust*4);for(let e=0;e<this.dustSeeds.length;e++)this.dustSeeds[e]=n();for(let e=0;e<this.nDust;e++)this.dust.shape.setX(e,3);this.nMotes=t.level===`low`?60:140;let r=_d.length*2+3+this.nMotes;this.glows=this.spriteSet(r,!0),this.moteSeeds=new Float32Array(this.nMotes*3);for(let e=0;e<this.moteSeeds.length;e++)this.moteSeeds[e]=n();let i=new Ka,a=new Yi(1,1);i.index=a.index,i.setAttribute(`position`,a.getAttribute(`position`)),this.shaftPos=new pi(new Float32Array(21),3),this.shaftPos.setUsage(Qe);let o=new pi(new Float32Array(21),3);for(let e=0;e<7;e++)o.setXYZ(e,14+n()*8,80+n()*30,n()*6.28);i.setAttribute(`aPos`,this.shaftPos),i.setAttribute(`aParams`,o),i.instanceCount=7,this.geometries.push(i,a),this.shaftMat=new aa({vertexShader:pp,fragmentShader:mp,uniforms:{uTime:this.u.uTime,uAlpha:{value:0},uColor:{value:new W(1,.93,.78)}},transparent:!0,depthWrite:!1,blending:1,fog:!1}),this.materials.push(this.shaftMat),this.shafts=new li(i,this.shaftMat),this.shafts.frustumCulled=!1,this.shafts.renderOrder=6,this.shafts.visible=!1,this.object.add(this.shafts);let s=t.rainCount,c=new zr,l=new Float32Array(s*2*3),u=new Float32Array(s*2);for(let e=0;e<s;e++){let t=n(),r=n(),i=n();l.set([t,r,i,t,r,i],e*6),u[e*2]=0,u[e*2+1]=1}c.setAttribute(`position`,new wr(new Float32Array(s*2*3),3)),c.setAttribute(`aSeed`,new wr(l,3)),c.setAttribute(`aEnd`,new wr(u,1)),this.geometries.push(c),this.rainMat=new aa({vertexShader:hp,fragmentShader:gp,uniforms:{uTime:this.u.uTime,uWind:this.u.uWind,uRain:{value:0},uColor:{value:new W(.72,.76,.8)}},transparent:!0,depthWrite:!1}),this.materials.push(this.rainMat),this.rain=new Ri(c,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,this.object.add(this.rain)}spriteSet(e,t){let n=new Yi(1,1),r=new Ka;r.index=n.index,r.setAttribute(`position`,n.getAttribute(`position`));let i=new pi(new Float32Array(e*3),3),a=new pi(new Float32Array(e*2),2),o=new pi(new Float32Array(e*4),4),s=new pi(new Float32Array(e),1);for(let e of[i,a,o,s])e.setUsage(Qe);r.setAttribute(`aPos`,i),r.setAttribute(`aSize`,a),r.setAttribute(`aColor`,o),r.setAttribute(`aShape`,s),r.instanceCount=e;let c=new aa({vertexShader:dp,fragmentShader:fp,uniforms:{uTime:this.u.uTime},transparent:!0,depthWrite:!1,blending:t?2:1});this.geometries.push(r,n),this.materials.push(c);let l=new li(r,c);return l.frustumCulled=!1,l.renderOrder=t?5:4,this.object.add(l),{mesh:l,pos:i,size:a,color:o,shape:s,count:e}}update(e){let t=e.env,n=e.time,r=this.u,i=r.uNight.value,a=r.uDaylight.value;this.dustColor.copy(_p).multiply(this.tmpColor.copy(r.uSunColor.value).multiplyScalar(.55).add(this.tmpColor2.copy(r.uSkyHorizon.value).multiplyScalar(.65)));let o=1-.7*t.wet,s=Ql(t.clash*.95+t.advance*.25*(1-t.rout)+t.dust*.4)*o,c=Ql(t.rout*4)*(1-J(.75,1,t.rout))*o,l=J(.01,.06,t.march)*(1-J(.93,1,t.march))*.45*o,u=J(.01,.06,t.qMarch)*(1-J(.93,1,t.qMarch))*.7*o,d=this.nDust,f=Math.floor(d*.55),p=Math.floor(d*.15),m=Math.floor(d*.15),h=this.dustSeeds,g=this.dust,_=wd.length;for(let e=0;e<d;e++){let i=h[e*4],a=h[e*4+1],o=h[e*4+2],d=(n*(.05+h[e*4+3]*.06)+i)%1,v,y,b,x,S,C,w;if(e<f)v=yd.center[0],y=yd.center[1]+(1-t.advance)*20,b=yd.halfX*(.8+t.clash*.4),x=yd.halfZ*(1+t.clash),S=s,C=4+12*t.clash,w=7+o*9;else if(e<f+p){let e=Math.min(_,t.rout*420+40)-o*120;wd.at(Math.max(0,e),this.xz),v=this.xz[0],y=this.xz[1],b=40,x=30,S=c,C=8,w=6+o*8}else if(e<f+p+m){let e=bd.length,n=Sd.believers,r=Cd(bd,n.approach,60*n.gap,n.tail,t.march)-10-o*110;bd.at(Math.max(0,Math.min(e,r)),this.xz),v=this.xz[0],y=this.xz[1],b=6,x=6,S=r>0&&r<e+20?l:0,C=3,w=3+o*4}else{let e=xd.length,n=Sd.quraysh,r=Cd(xd,n.approach,120*n.gap,n.tail,t.qMarch)-10-o*180;xd.at(Math.max(0,Math.min(e,r)),this.xz),v=this.xz[0],y=this.xz[1],b=9,x=9,S=r>0&&r<e+20?u:0,C=4,w=4+o*5}let T=S*Math.sin(Math.PI*d);if(T<.004){g.color.setW(e,0),g.size.setXY(e,0,0);continue}let E=r.uWind.value.x*d*14,D=r.uWind.value.y*d*14,O=v+(a-.5)*2*b+E,k=y+(o-.5)*2*x+D,A=Z(O,k)+.8+d*C*.6+w*.25,j=w*(.55+d*.8);g.pos.setXYZ(e,O,A,k),g.size.setXY(e,j,j),g.color.setXYZW(e,this.dustColor.r,this.dustColor.g,this.dustColor.b,T*.42)}g.pos.needsUpdate=!0,g.size.needsUpdate=!0,g.color.needsUpdate=!0,g.shape.needsUpdate=!0;let v=this.glows,y=0,b=J(0,1,t.fires)*(1-.5*t.rain)*(.35+.65*i);for(let e of _d){let r=b*(e.side===0?+(t.camp>.6)*(1-t.ranks)*(1-t.rest*.5):+(t.qCamp>.6)),a=Z(e.x,e.z),o=.85+.15*Math.sin(n*7+e.x)*Math.sin(n*5.3+e.z);v.pos.setXYZ(y,e.x,a+.55,e.z),v.size.setXY(y,.7,1.3),v.color.setXYZW(y,1,.55,.2,r*o*1.4),v.shape.setX(y,1),y++,v.pos.setXYZ(y,e.x,a+.6,e.z),v.size.setXY(y,5,5),v.color.setXYZW(y,1,.5,.2,r*o*.28*i),v.shape.setX(y,0),y++}{let e=J(0,1,t.fires)*+(t.qCamp>.6)*i*(1-.35*t.rain);v.pos.setXYZ(y,pd.center[0],Z(pd.center[0],pd.center[1])+14,pd.center[1]),v.size.setXY(y,170,60),v.color.setXYZW(y,1,.48,.2,e*.3),v.shape.setX(y,0),y++}let x=Ql(t.light),S,C,w;t.march<.995&&this.columnLight(t,this.tmp)?(S=this.tmp.x,C=this.tmp.y,w=this.tmp.z):(S=sd.center[0],w=sd.center[1]+.4,C=Z(S,w)),this.lightPos.set(S,C,w);let T=e.reducedMotion?1:.9+.1*Math.sin(n*.9);this.lightLevel=x;let E=x*T*(.55+.45*(1-a*.6));v.pos.setXYZ(y,S,C+1.15,w),v.size.setXY(y,.95,2.6),v.color.setXYZW(y,1,.95,.82,E*1.1),v.shape.setX(y,2),y++,v.pos.setXYZ(y,S,C+.9,w),v.size.setXY(y,5.5,5.5),v.color.setXYZW(y,1,.92,.75,E*.28),v.shape.setX(y,0),y++;let D=Ql(t.support);this.supportLevel=D;let O=vd.near,k=O.center[1]+(O.advanceTo-O.center[1])*J(0,1,t.advance)-2,A=Z(O.center[0],k);if(this.shafts.visible=D>.005,this.shafts.visible){for(let e=0;e<7;e++){let t=O.center[0]+(e-3)*15+Math.sin(e*2.3)*4;this.shaftPos.setXYZ(e,t,A-4,k-6+Math.cos(e*1.7)*14)}this.shaftPos.needsUpdate=!0,this.shaftMat.uniforms.uAlpha.value=D*(.16+.06*a)}let j=this.moteSeeds;for(let t=0;t<this.nMotes;t++){let r=j[t*3],i=j[t*3+1],a=j[t*3+2],o=e.reducedMotion?.4:1.6,s=A+60-(n*o*(.6+a)+r*60)%60,c=O.center[0]+(i-.5)*100+Math.sin(n*.3+r*20)*1.5,l=k+(a-.5)*14,u=J(A+1,A+8,s)*(1-J(A+40,A+60,s));v.pos.setXYZ(y,c,s,l),v.size.setXY(y,.35,.35),v.color.setXYZW(y,1,.94,.8,D*u*.8),v.shape.setX(y,0),y++}v.pos.needsUpdate=!0,v.size.needsUpdate=!0,v.color.needsUpdate=!0,v.shape.needsUpdate=!0;let M=Ql(t.rain);this.rain.visible=M>.01,this.rainMat.uniforms.uRain.value=M*(.5+.5*a+.25*i)}get light(){return this.lightPos}dispose(){for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose();this.object.clear()}},yp=20,bp=class{constructor(e){q(this,`cells`,new Map);for(let t of e){let e=(t.kind===`circle`?t.r:Math.hypot(t.halfX,t.halfZ))+1,n=Math.floor((t.x-e)/yp),r=Math.floor((t.x+e)/yp),i=Math.floor((t.z-e)/yp),a=Math.floor((t.z+e)/yp);for(let e=n;e<=r;e++)for(let n=i;n<=a;n++){let r=this.key(e,n),i=this.cells.get(r);i||this.cells.set(r,i=[]),i.push(t)}}}key(e,t){return(e+1e3)*4e3+(t+1e3)}hits(e,t,n){let r=this.cells.get(this.key(Math.floor(e/yp),Math.floor(t/yp)));if(!r)return!1;for(let i of r)if(i.kind===`circle`){let r=i.r+n;if((e-i.x)**2+(t-i.z)**2<r*r)return!0}else{let r=e-i.x,a=t-i.z,o=Math.cos(i.yaw),s=Math.sin(i.yaw),c=r*o-a*s,l=r*s+a*o;if(Math.abs(c)<i.halfX+n&&Math.abs(l)<i.halfZ+n)return!0}return!1}};function xp(e){let t=new bp(e),[n,r]=sd.center;return{groundHeight(e,t){return Z(e,t)},blocked(e,n,r){return t.hits(e,n,r)},sheltered(e,t){return Math.abs(e-n)<sd.halfX&&Math.abs(t-r)<sd.halfZ},boundsRadius:rd.playRadius}}var Sp=e=>new W().setHex(e),Cp={clearZenith:Sp(4881336),clearHorizon:Sp(13489880),duskZenith:Sp(3820152),duskHorizon:Sp(15312746),nightZenith:Sp(395797),nightHorizon:Sp(1581103),cloudZenith:Sp(5857386),cloudHorizon:Sp(9277068),cloudNightZenith:Sp(658448),cloudNightHorizon:Sp(1382171),sunNoon:Sp(16773596),sunLow:Sp(16756074),moon:Sp(9676488),groundBounce:Sp(9399370)},wp=new H(Math.sin(150*Xl)*Math.cos(50*Xl),Math.sin(50*Xl),-Math.cos(150*Xl)*Math.cos(50*Xl)).normalize(),Tp=`
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,Ep=`
uniform vec3 uSunDir;
uniform vec3 uRealSun;
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uMoonDir;
uniform float uNight;
uniform float uCloud;
uniform float uHaze;
uniform float uTime;
uniform vec2 uWind;
varying vec3 vDir;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
void main() {
  vec3 dir = normalize(vDir);
  float up = clamp(dir.y, -1.0, 1.0);
  float g = pow(clamp(up, 0.0, 1.0), 0.5);
  vec3 col = mix(uSkyHorizon, uSkyZenith, g);
  col = mix(col, uSkyHorizon * 0.7, smoothstep(0.0, -0.3, up));

  // Sun disc and glow (hidden by the clouds).
  float sd = max(dot(dir, uRealSun), 0.0);
  float sunVis = (1.0 - uNight) * (1.0 - 0.95 * uCloud);
  col += uSunColor * (pow(sd, 10.0) * 0.22 + pow(sd, 300.0) * 0.8) * sunVis;
  col += uSunColor * smoothstep(0.99955, 0.99975, sd) * 8.0 * sunVis;

  // Stars and the moon at night.
  if (uNight > 0.01 && up > 0.0) {
    vec2 sp = dir.xz / (up + 0.25) * 140.0;
    vec2 cell = floor(sp);
    float star = step(0.9965, h21(cell)) * smoothstep(0.35, 0.0, length(fract(sp) - 0.5));
    float tw = 0.7 + 0.3 * sin(uTime * 2.0 + h21(cell + 3.1) * 30.0);
    col += vec3(0.85, 0.9, 1.0) * star * tw * uNight * (1.0 - uCloud) * smoothstep(0.0, 0.25, up) * 1.4;
    float md = dot(dir, uMoonDir);
    col += vec3(0.85, 0.88, 0.95) * smoothstep(0.99935, 0.9996, md) * uNight * (1.0 - 0.97 * uCloud) * 1.6;
    col += vec3(0.25, 0.3, 0.42) * pow(max(md, 0.0), 40.0) * uNight * 0.3;
  }

  // Sparse high cloud; a low, moving overcast with the rain.
  if (up > 0.0) {
    vec2 p = dir.xz / (up + 0.1);
    vec2 drift = uWind * uTime * 0.01 + vec2(uTime * 0.002, 0.0);
    float n = fbm(p * 0.9 + drift);
    float wisps = smoothstep(0.62, 0.85, n) * (1.0 - uCloud);
    vec3 lit = mix(vec3(1.0), uSunColor, 0.4) * (0.7 + 0.5 * pow(sd, 4.0)) * (1.0 - uNight * 0.9);
    col = mix(col, lit, wisps * 0.35 * smoothstep(0.0, 0.2, up));
    float m = fbm(p * 0.35 + drift * 3.0 + uTime * 0.006);
    float cover = smoothstep(0.75 - uCloud * 0.6, 0.95 - uCloud * 0.45, m) * uCloud;
    vec3 base = uSkyHorizon * mix(0.62, 0.95, smoothstep(0.4, 0.9, fbm(p * 1.3 - drift)));
    col = mix(col, base, cover * smoothstep(0.0, 0.18, up));
  }

  col = mix(col, uSkyHorizon, uHaze * (1.0 - smoothstep(0.0, 0.3, abs(up))));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Dp=class{constructor(e){if(q(this,`object`,new In),q(this,`sun`,new Ga(16777215,3)),q(this,`exposure`,1),q(this,`scene`,void 0),q(this,`u`,void 0),q(this,`hemi`,new Aa(16777215,9399370,1)),q(this,`fog`,new Wn(13489880,5e-4)),q(this,`sky`,void 0),q(this,`skyMat`,void 0),q(this,`realSun`,new H),q(this,`lightDir`,new H),q(this,`tmpColor`,new W),q(this,`tmpColor2`,new W),q(this,`tmpColor3`,new W),q(this,`tmpColor4`,new W),q(this,`sunCol`,new W),q(this,`moonCol`,new W),q(this,`fogCol`,new W),q(this,`shadowExtent`,110),this.scene=e.scene,this.u=e.uniforms,this.object.name=`atmosphere`,this.sun.castShadow=e.quality.shadows,e.quality.shadows){let t=this.sun.shadow;t.mapSize.set(e.quality.shadowMapSize,e.quality.shadowMapSize),this.shadowExtent=e.quality.shadowMapSize>=2048?120:95,t.camera.left=-this.shadowExtent,t.camera.right=this.shadowExtent,t.camera.top=this.shadowExtent,t.camera.bottom=-this.shadowExtent,t.camera.near=10,t.camera.far=900,t.bias=-4e-4,t.normalBias=.6,t.camera.updateProjectionMatrix()}this.object.add(this.sun,this.sun.target,this.hemi),this.skyMat=new aa({vertexShader:Tp,fragmentShader:Ep,uniforms:{uSunDir:this.u.uSunDir,uSunColor:this.u.uSunColor,uSkyZenith:this.u.uSkyZenith,uSkyHorizon:this.u.uSkyHorizon,uTime:this.u.uTime,uWind:this.u.uWind,uRealSun:{value:this.realSun},uMoonDir:{value:wp},uNight:{value:0},uCloud:{value:0},uHaze:{value:0}},side:1,depthWrite:!1}),this.sky=new li(new Xi(8e3,32,16),this.skyMat),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.object.add(this.sky),this.scene.fog=this.fog}update(e){let t=e.env,n=this.u,r=t.sunElevation,i=t.sunAzimuth*Xl,a=Math.cos(r*Xl);this.realSun.set(Math.sin(i)*a,Math.sin(r*Xl),-Math.cos(i)*a).normalize();let o=J(-6,12,r),s=1-J(-9,-2,r),c=J(25,2,r)*J(-8,2,r),l=Ql(t.cloud),u=this.tmpColor3.copy(Cp.cloudZenith).lerp(Cp.cloudNightZenith,s),d=this.tmpColor4.copy(Cp.cloudHorizon).lerp(Cp.cloudNightHorizon,s),f=this.tmpColor.copy(Cp.clearZenith).lerp(Cp.duskZenith,c).lerp(Cp.nightZenith,s).lerp(u,l*.85),p=this.tmpColor2.copy(Cp.clearHorizon).lerp(Cp.duskHorizon,c*(1-l*.7)).lerp(Cp.nightHorizon,s).lerp(d,l*.8);n.uSkyZenith.value.copy(f),n.uSkyHorizon.value.copy(p),this.skyMat.uniforms.uNight.value=s,this.skyMat.uniforms.uCloud.value=l,this.skyMat.uniforms.uHaze.value=Ql(t.haze+t.dust*.8+t.rain*.4);let m=J(-3,8,r);this.lightDir.copy(wp).lerp(this.realSun,m).normalize(),this.lightDir.y<.05&&(this.lightDir.y=.05),this.lightDir.normalize(),n.uSunDir.value.copy(this.lightDir);let h=this.sunCol.copy(Cp.sunNoon).lerp(Cp.sunLow,J(30,3,r));h.multiplyScalar(m*(1-.75*l)),h.add(this.moonCol.copy(Cp.moon).multiplyScalar((1-m)*.32*(1-.8*l))),n.uSunColor.value.copy(h),this.sun.color.copy(h),this.sun.intensity=3.1,this.hemi.color.copy(p).lerp(f,.4),this.hemi.groundColor.copy(Cp.groundBounce).multiplyScalar(.4+.6*o),this.hemi.intensity=(.15+.88*o)*(1-.25*l)+l*o*.25;let g=Ql(o*(1-.45*l));n.uDaylight.value=g,n.uNight.value=s;let _=e.camera.position,v=this.shadowExtent*2/Math.max(256,this.sun.shadow.mapSize.x),y=Math.round(_.x/v)*v,b=Math.round(_.z/v)*v;this.sun.target.position.set(y,_.y-5,b),this.sun.position.set(y,_.y-5,b).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld();let x=this.fogCol.copy(p).multiplyScalar(.85+.15*o);n.uFogColor.value.copy(x),this.fog.color.copy(x);let S=16e-5+t.haze*6e-4+t.dust*9e-4+t.rain*.0022+l*3e-4;this.fog.density=tu(this.fog.density,S,3,e.dt>0?e.dt:1);let C=e.time,w=(.22+.12*Math.sin(C*.13))*(1+1.2*l);n.uWind.value.set(Math.cos(.5)*w,Math.sin(.5)*w),this.exposure=1+s*1.15+l*.2,this.sky.position.copy(_)}windStrength(){return this.u.uWind.value.length()}setQuality(e){}dispose(){this.sky.geometry.dispose(),this.skyMat.dispose(),this.sun.dispose(),this.hemi.dispose(),this.scene.fog===this.fog&&(this.scene.fog=null),this.object.clear()}};function Op(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e),a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;for(let e=0;e<r;e++){let r=Math.random()*2-1;n===`white`?t[e]=r*.5:n===`brown`?(f=(f+.02*r)/1.02,t[e]=f*3.2):(a=.99886*a+r*.0555179,o=.99332*o+r*.0750759,s=.969*s+r*.153852,c=.8665*c+r*.3104856,l=.55*l+r*.5329522,u=-.7616*u-r*.016898,t[e]=(a+o+s+c+l+u+d+r*.5362)*.11,d=r*.115926)}let p=Math.min(2048,Math.floor(r/8));for(let e=0;e<p;e++){let n=e/p;t[r-p+e]=t[r-p+e]*(1-n)+t[e]*n}}return i}function kp(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**n}return i}var Ap=class{constructor(){q(this,`state`,`locked`),q(this,`ctx`,null),q(this,`master`,null),q(this,`bus`,null),q(this,`reverbSend`,null),q(this,`noise`,null),q(this,`layers`,{}),q(this,`sources`,[]),q(this,`oscillators`,[]),q(this,`cricketGain`,null),q(this,`drone`,null),q(this,`enabled`,!0),q(this,`volume`,.8),q(this,`suspendedByApp`,!1),q(this,`lastRain`,0),q(this,`gustTimer`,5),q(this,`gustEnd`,0),q(this,`shuffleTimer`,0),q(this,`birdTimer`,2),q(this,`cricketTimer`,0),q(this,`dropTimer`,0),q(this,`crackleTimer`,0),q(this,`thudTimer`,0),q(this,`grumbleTimer`,8),q(this,`snortTimer`,12),q(this,`xz`,[0,0])}async unlock(){try{if(!this.ctx){let e=window,t=e.AudioContext??e.webkitAudioContext;if(!t)return this.state=`unavailable`,!1;this.ctx=new t({latencyHint:`playback`}),this.build(),this.ctx.onstatechange=()=>this.syncState()}return this.ctx.state!==`running`&&!this.suspendedByApp&&await this.ctx.resume(),this.syncState(),this.ctx.state===`running`}catch{return this.syncState(),!1}}syncState(){let e=this.ctx;e&&(this.state=e.state===`running`?`running`:this.suspendedByApp?`suspended`:`locked`)}setEnabled(e){this.enabled=e,this.applyMaster()}setVolume(e){this.volume=Ql(e),this.applyMaster()}applyMaster(){if(this.ctx&&this.master)try{this.master.gain.setTargetAtTime(this.enabled?this.volume:0,this.ctx.currentTime,.15)}catch{}}suspend(){this.suspendedByApp=!0;try{this.ctx?.suspend()}catch{}this.syncState()}resume(){this.suspendedByApp=!1;try{this.ctx&&this.ctx.state!==`running`&&this.ctx.resume()}catch{}this.syncState()}build(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0;let t=e.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=4,this.bus=e.createGain(),this.bus.gain.value=.9,this.bus.connect(t),t.connect(this.master),this.master.connect(e.destination);try{let t=e.createConvolver();t.buffer=kp(e,3.6,2.4),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.4,this.reverbSend.connect(t),t.connect(this.bus)}catch{this.reverbSend=null}this.noise={white:Op(e,4,`white`),pink:Op(e,4,`pink`),brown:Op(e,5,`brown`)},this.layer(`wind`,`pink`,`bandpass`,900,1.4);let n=e.createOscillator();n.type=`sine`,n.frequency.value=4300;let r=e.createGain();r.gain.value=0;let i=e.createOscillator();i.frequency.value=26;let a=e.createGain();a.gain.value=.5,i.connect(a),a.connect(r.gain),this.cricketGain=e.createGain(),this.cricketGain.gain.value=0,n.connect(r),r.connect(this.cricketGain),this.cricketGain.connect(this.bus),n.start(),i.start(),this.oscillators.push(n,i),this.drone=e.createGain(),this.drone.gain.value=0;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=160;for(let t of[43,43.7,58.5]){let n=e.createOscillator();n.type=`sine`,n.frequency.value=t,n.connect(o),n.start(),this.oscillators.push(n)}o.connect(this.drone),this.drone.connect(this.bus),this.applyMaster()}layer(e,t,n,r,i){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noise[t],o.loop=!0;let s=a.createBiquadFilter();s.type=n,s.frequency.value=r,s.Q.value=i;let c=a.createGain();c.gain.value=0,o.connect(s),s.connect(c),c.connect(this.bus),o.start(0,Math.random()*3),this.sources.push(o),this.layers[e]={gain:c,filter:s,level:0}}update(e,t){let n=this.ctx,r=e.env,i=r.rain>=.3&&this.lastRain<.3&&r.rain<.6;if(this.lastRain=r.rain,!n||n.state!==`running`||!this.enabled||!this.bus)return;i&&this.thunder();let a=this.bus,o=n.currentTime,s=e.dt,c=e.camera.position,l=e.viewer.sheltered,u=J(-4,10,r.sunElevation),d=1-J(-8,-1,r.sunElevation),f=Ql(r.clash+r.advance*.4*(1-r.rout))*(1-r.gather),p=this.layers.wind;if(this.gustTimer-=s,this.gustTimer<=0&&o>this.gustEnd){let e=Ql(t*1.5),n=1.5+Math.random()*2.5,r=(.012+.028*e)*(l?.4:1),i=p.gain.gain;i.cancelScheduledValues(o),i.setValueAtTime(i.value,o),i.linearRampToValueAtTime(r,o+2.5),i.setValueAtTime(r,o+2.5+n),i.linearRampToValueAtTime(0,o+6.5+n);let a=p.filter.frequency;a.cancelScheduledValues(o),a.setValueAtTime(700+Math.random()*300,o),a.linearRampToValueAtTime(1100+Math.random()*500,o+2.5+n*.5),a.linearRampToValueAtTime(750,o+6.5+n),this.gustEnd=o+6.5+n,this.gustTimer=6.5+n+(12+Math.random()*18)*(1-.6*e)}if(r.rain>.03){this.dropTimer-=s;let e=6+70*r.rain,t=0;for(;this.dropTimer<=0&&t++<12;){this.dropTimer+=(.5+Math.random())/e;let t=r.rain*(.5+Math.random()*.5)*(l?.6:1),n=l?900+Math.random()*500:2200+Math.random()*2600;this.envNoise(`white`,`bandpass`,n,5,.012*t,.001,.025+Math.random()*.03,a,Math.random()*.02),Math.random()<.08&&this.tone(1400+Math.random()*900,700,.004*t,.002,.06,a,`sine`)}}let m=Math.max(this.columnNear(c.x,c.z,0,r.march),this.columnNear(c.x,c.z,1,r.qMarch));if(m>.03){this.shuffleTimer-=s;let e=0;for(;this.shuffleTimer<=0&&e++<8;)this.shuffleTimer+=1/(4+16*m),this.envNoise(`pink`,`bandpass`,500+Math.random()*900,1.1,(.008+Math.random()*.014)*m,.004,.05+Math.random()*.06,a,Math.random()*.05)}let h=Math.hypot(c.x-fd.center[0],c.z-fd.center[1]),g=Math.hypot(c.x-pd.center[0],c.z-pd.center[1]),_=Math.max(r.camp*(1-J(40,160,h)),r.qCamp*(1-r.rout)*(1-J(60,220,g)));_>.05&&f<.2&&(this.grumbleTimer-=s,this.grumbleTimer<=0&&(this.grumbleTimer=10+Math.random()*14,this.grumble(_*.8)),this.snortTimer-=s,this.snortTimer<=0&&g<200&&r.qCamp>.5&&(this.snortTimer=14+Math.random()*20,this.snort(_)));let v=0;if(r.fires>.2){for(let e of _d){let t=Math.hypot(c.x-e.x,c.z-e.z);v=Math.max(v,1-J(3,30,t))}v*=r.fires*(1-r.rain*.6)}if(v>.03&&(this.crackleTimer-=s,this.crackleTimer<=0)){this.crackleTimer=.15+Math.random()*.9;let e=1+Math.floor(Math.random()*3);for(let t=0;t<e;t++)this.envNoise(`white`,`highpass`,2500+Math.random()*2e3,.7,.025*v,.001,.02+Math.random()*.03,a,t*.05)}if(this.cricketTimer-=s,d>.2&&r.rain<.1&&f<.1&&this.cricketTimer<=0&&this.cricketGain){this.cricketTimer=1.4+Math.random()*4;let e=.004*d*(l?.5:1),t=.25+Math.random()*.35,n=this.cricketGain.gain;n.cancelScheduledValues(o),n.setValueAtTime(0,o),n.linearRampToValueAtTime(e,o+.03),n.setValueAtTime(e,o+t),n.linearRampToValueAtTime(0,o+t+.05)}u>.6&&r.rain<.05&&f<.1&&r.dust<.3&&(this.birdTimer-=s,this.birdTimer<=0&&(this.birdTimer=4+Math.random()*9,this.chirp()));let y=1-J(120,700,Math.hypot(c.x-yd.center[0],c.z-yd.center[1]))*.7;if(this.drone)try{this.drone.gain.setTargetAtTime(f*.07*y,o,1.2)}catch{}let b=Math.max(r.clash,J(.02,.1,r.rout)*(1-J(.5,.9,r.rout))*.6)*(1-r.gather);if(b>.05&&(this.thudTimer-=s,this.thudTimer<=0)){this.thudTimer=.12+Math.random()*(.6-.4*b);let e=b*y;this.envNoise(`brown`,`lowpass`,140+Math.random()*90,.7,.06*e,.006,.18+Math.random()*.2,a,Math.random()*.1)}}columnNear(e,t,n,r){if(r<=.005||r>=.995)return 0;let i=n===0?bd:xd,a=n===0?Sd.believers:Sd.quraysh,o=(n===0?60:120)*a.gap,s=Math.min(i.length,Cd(i,a.approach,o,a.tail,r)-o*.3);return i.at(Math.max(0,s),this.xz),1-J(15,120,Math.hypot(e-this.xz[0],t-this.xz[1]))}thunder(){this.bus&&(this.tone(52,30,.08,.6,4.5,this.bus),this.envNoise(`brown`,`lowpass`,120,.7,.12,.9,4,this.reverbSend??this.bus,.2))}snort(e){let t=e*(.6+Math.random()*.4);this.envNoise(`pink`,`bandpass`,700,2.2,.03*t,.01,.25,this.bus),this.envNoise(`pink`,`bandpass`,520,2,.02*t,.01,.2,this.bus,.28)}chirp(){let e=2+Math.floor(Math.random()*3),t=2600+Math.random()*1600;for(let n=0;n<e;n++)this.tone(t,t*(1.25+Math.random()*.3),.012,.01,.09,this.bus,`sine`,n*.14)}grumble(e){let t=this.ctx,n=t.currentTime,r=t.createOscillator();r.type=`sawtooth`,r.frequency.setValueAtTime(92,n),r.frequency.linearRampToValueAtTime(76,n+.9);let i=t.createBiquadFilter();i.type=`bandpass`,i.frequency.value=420,i.Q.value=3;let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.03*e,n+.15),a.gain.linearRampToValueAtTime(.018*e,n+.7),a.gain.exponentialRampToValueAtTime(1e-4,n+1.1),r.connect(i),i.connect(a),a.connect(this.bus),r.start(n),r.stop(n+1.2)}envNoise(e,t,n,r,i,a,o,s,c=0){let l=this.ctx;if(!l||!this.noise)return;let u=l.currentTime+c,d=l.createBufferSource();d.buffer=this.noise[e];let f=l.createBiquadFilter();f.type=t,f.frequency.value=n,f.Q.value=r;let p=l.createGain();p.gain.setValueAtTime(1e-4,u),p.gain.linearRampToValueAtTime(i,u+a),p.gain.exponentialRampToValueAtTime(1e-4,u+a+o),d.connect(f),f.connect(p),p.connect(s),d.start(u,Math.random()*2),d.stop(u+a+o+.1)}tone(e,t,n,r,i,a,o=`sine`,s=0){let c=this.ctx;if(!c)return;let l=c.currentTime+s,u=c.createOscillator();u.type=o,u.frequency.setValueAtTime(e,l),u.frequency.exponentialRampToValueAtTime(Math.max(1,t),l+r+i);let d=c.createGain();d.gain.setValueAtTime(1e-4,l),d.gain.linearRampToValueAtTime(n,l+r),d.gain.exponentialRampToValueAtTime(1e-4,l+r+i),u.connect(d),d.connect(a),u.start(l),u.stop(l+r+i+.1)}dispose(){try{for(let e of this.sources)e.stop();for(let e of this.oscillators)e.stop();this.ctx?.close()}catch{}this.ctx=null,this.state=`unavailable`}},jp=1.7,Mp=.35,Np=4.2,Pp=8.5,Fp=.6,Ip=.25,Lp=280,Rp=10,zp={KeyW:[0,1],ArrowUp:[0,1],KeyS:[0,-1],ArrowDown:[0,-1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};function Bp(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e.isContentEditable}var Vp=class{constructor(e){q(this,`enabled`,!1),q(this,`viewer`,{sheltered:!1}),q(this,`eye`,new H),q(this,`onTap`,null),q(this,`onInspect`,null),q(this,`onLockChange`,null),q(this,`onBlocked`,null),q(this,`camera`,void 0),q(this,`canvas`,void 0),q(this,`walk`,void 0),q(this,`getSettings`,void 0),q(this,`listeners`,new Jl),q(this,`x`,0),q(this,`z`,0),q(this,`feet`,0),q(this,`feetSmooth`,0),q(this,`yaw`,0),q(this,`pitch`,0),q(this,`vx`,0),q(this,`vz`,0),q(this,`bobPhase`,0),q(this,`blockedTimer`,0),q(this,`keys`,new Set),q(this,`run`,!1),q(this,`joyX`,0),q(this,`joyY`,0),q(this,`joyPointer`,-1),q(this,`lookPointers`,new Map),q(this,`joystick`,void 0),q(this,`knob`,void 0),q(this,`locked`,!1),q(this,`euler`,new vn(0,0,0,`YXZ`)),this.camera=e.camera,this.canvas=e.canvas,this.walk=e.walk,this.getSettings=e.getSettings,this.joystick=document.createElement(`div`),this.joystick.className=`bd-joystick`,this.joystick.setAttribute(`aria-hidden`,`true`),this.knob=document.createElement(`div`),this.knob.className=`bd-joystick-knob`,this.joystick.appendChild(this.knob),e.touchRoot.appendChild(this.joystick);let t=this.listeners;t.add(window,`keydown`,e=>this.onKey(e,!0)),t.add(window,`keyup`,e=>this.onKey(e,!1)),t.add(window,`blur`,()=>this.clearInput()),t.add(document,`pointerlockchange`,()=>this.onPointerLockChange()),t.add(document,`pointerlockerror`,()=>this.onPointerLockChange()),t.add(document,`mousemove`,e=>this.onMouseMove(e)),t.add(this.canvas,`pointerdown`,e=>this.onPointerDown(e)),t.add(window,`pointermove`,e=>this.onPointerMove(e)),t.add(window,`pointerup`,e=>this.onPointerUp(e)),t.add(window,`pointercancel`,e=>this.onPointerUp(e,!0)),t.add(this.canvas,`contextmenu`,e=>e.preventDefault()),t.add(this.canvas,`gesturestart`,e=>e.preventDefault()),t.add(this.joystick,`pointerdown`,e=>this.onJoyDown(e)),t.add(this.joystick,`pointermove`,e=>this.onJoyMove(e)),t.add(this.joystick,`pointerup`,e=>this.onJoyUp(e)),t.add(this.joystick,`pointercancel`,e=>this.onJoyUp(e))}get lockSupported(){try{return`pointerLockElement`in document&&typeof this.canvas.requestPointerLock==`function`&&window.matchMedia(`(pointer: fine)`).matches}catch{return!1}}get isLocked(){return this.locked}requestLock(){if(this.lockSupported&&!this.locked)try{let e=this.canvas.requestPointerLock();e&&typeof e.catch==`function`&&e.catch(()=>this.onPointerLockChange())}catch{}}exitLock(){if(this.locked)try{document.exitPointerLock()}catch{}}spawn(e){this.vx=this.vz=0,this.pitch=e.pitch??0;let t=e.x,n=e.z;if(this.walk.blocked(t,n,Mp))search:for(let e=1;e<=30;e+=1)for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=t+Math.cos(i)*e,o=n+Math.sin(i)*e;if(!this.walk.blocked(a,o,Mp)){t=a,n=o;break search}}this.x=t,this.z=n,this.feet=this.feetSmooth=this.walk.groundHeight(t,n),this.yaw=nu(e.yaw),this.applyCamera(0,!1)}placeAt(e,t,n){let r=this.walk.groundHeight(e.x,e.z);return!(Math.hypot(e.x,e.z)<this.walk.boundsRadius)||Math.abs(e.y-jp-r)>5||this.walk.blocked(e.x,e.z,Mp)?!1:(this.x=e.x,this.z=e.z,this.feet=this.feetSmooth=r,this.yaw=nu(t),this.pitch=Zl(n,-1.2,1.2),this.vx=this.vz=0,this.applyCamera(0,!1),!0)}setTouchControlsVisible(e){this.joystick.classList.toggle(`is-visible`,e),e||this.resetJoystick()}update(e){let t=e.dt,n=0,r=0;if(this.enabled){for(let e of this.keys){let t=zp[e];t&&(n+=t[0],r+=t[1])}n+=this.joyX,r+=this.joyY}let i=Math.hypot(n,r);i>1&&(n/=i,r/=i);let a=Math.hypot(this.joyX,this.joyY),o=this.run||a>.9,s=o?Pp:Np,c=-Math.sin(this.yaw),l=-Math.cos(this.yaw),u=Math.cos(this.yaw),d=-Math.sin(this.yaw);this.vx=tu(this.vx,(c*r+u*n)*s,10,t),this.vz=tu(this.vz,(l*r+d*n)*s,10,t);let f=this.vx*t,p=this.vz*t,m=Math.hypot(f,p);if(m>1e-5){let e=Math.ceil(m/Ip);f/=e,p/=e;for(let t=0;t<e;t++)this.move(f,p)}this.feet=this.walk.groundHeight(this.x,this.z),this.blockedTimer=Math.max(0,this.blockedTimer-t);let h=Math.hypot(this.vx,this.vz)>.5;h&&(this.bobPhase+=t*(o?11:8)),this.viewer.sheltered=this.walk.sheltered(this.x,this.z),this.applyCamera(t,h&&!e.reducedMotion)}move(e,t){this.tryMove(this.x+e,this.z+t)||Math.abs(e)>1e-6&&this.tryMove(this.x+e,this.z)||Math.abs(t)>1e-6&&this.tryMove(this.x,this.z+t)}tryMove(e,t){let n=this.walk;if(Math.hypot(e,t)>n.boundsRadius)return this.blocked(`edge`),!1;if(n.blocked(e,t,Mp))return!1;let r=n.groundHeight(e,t),i=Math.hypot(e-this.x,t-this.z);return r-this.feet>Math.max(Fp,i*1.05)?!1:(this.x=e,this.z=t,this.feet=r,!0)}blocked(e){this.blockedTimer>0||(this.blockedTimer=.5,this.onBlocked?.(e))}applyCamera(e,t){this.feetSmooth=e>0?tu(this.feetSmooth,this.feet,14,e):this.feet,Math.abs(this.feetSmooth-this.feet)>2&&(this.feetSmooth=this.feet);let n=t?Math.sin(this.bobPhase)*.035:0;this.eye.set(this.x,this.feetSmooth+jp+n,this.z),this.camera.position.copy(this.eye),this.euler.set(this.pitch,this.yaw,0,`YXZ`),this.camera.quaternion.setFromEuler(this.euler),Math.abs(this.camera.fov-70)>.05&&(this.camera.fov=e>0?tu(this.camera.fov,70,3,e):70,this.camera.updateProjectionMatrix())}look(e,t,n){let r=this.getSettings(),i=n*r.lookSensitivity;this.yaw=nu(this.yaw-e*i),this.pitch=Zl(this.pitch-t*i*(r.invertY?-1:1),-1.45,1.45)}onKey(e,t){if(!Bp(e.target)){if((e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(this.run=t),zp[e.code]){if(t){if(!this.enabled)return;this.keys.add(e.code),e.code.startsWith(`Arrow`)&&e.preventDefault()}else this.keys.delete(e.code)}else t&&e.code===`KeyE`&&this.enabled&&!e.repeat&&this.onInspect?.()}}clearInput(){this.keys.clear(),this.run=!1,this.resetJoystick(),this.lookPointers.clear()}onPointerLockChange(){let e=document.pointerLockElement===this.canvas;e!==this.locked&&(this.locked=e,e||this.clearInput(),this.onLockChange?.(e))}onMouseMove(e){this.locked&&this.enabled&&(Math.abs(e.movementX)>300||Math.abs(e.movementY)>300||this.look(e.movementX,e.movementY,.0022))}onPointerDown(e){if(e.button===0||e.pointerType!==`mouse`){if(this.locked)this.enabled&&this.onInspect?.();else{this.lookPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,t:performance.now(),type:e.pointerType});try{this.canvas.setPointerCapture(e.pointerId)}catch{}}}}onPointerMove(e){let t=this.lookPointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,this.enabled&&(t.type===`mouse`&&this.lockSupported||this.look(n,r,t.type===`touch`?.0055:.0035))}onPointerUp(e,t=!1){let n=this.lookPointers.get(e.pointerId);if(!n)return;this.lookPointers.delete(e.pointerId);try{this.canvas.releasePointerCapture(e.pointerId)}catch{}if(t)return;let r=Math.hypot(e.clientX-n.startX,e.clientY-n.startY),i=performance.now()-n.t<Lp;if(r>Rp)return;if(n.type===`mouse`&&this.enabled&&this.lockSupported){this.requestLock();return}if(!i&&n.type!==`mouse`)return;let a=this.canvas.getBoundingClientRect(),o=(e.clientX-a.left)/a.width*2-1,s=-((e.clientY-a.top)/a.height)*2+1;this.onTap?.(o,s)}onJoyDown(e){if(this.joyPointer===-1){this.joyPointer=e.pointerId,this.joystick.classList.add(`is-active`);try{this.joystick.setPointerCapture(e.pointerId)}catch{}this.onJoyMove(e),e.preventDefault()}}onJoyMove(e){if(e.pointerId!==this.joyPointer)return;let t=this.joystick.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=t.width*.38,a=e.clientX-n,o=e.clientY-r,s=Math.hypot(a,o);s>i&&(a=a/s*i,o=o/s*i),this.knob.style.transform=`translate(${a.toFixed(1)}px, ${o.toFixed(1)}px)`;let c=a/i,l=-o/i,u=Math.hypot(c,l),d=u<.12?0:(u-.12)/.88/(u||1);this.joyX=c*d,this.joyY=l*d}onJoyUp(e){e.pointerId===this.joyPointer&&this.resetJoystick()}resetJoystick(){this.joyPointer=-1,this.joyX=0,this.joyY=0,this.knob.style.transform=``,this.joystick.classList.remove(`is-active`)}dispose(){this.exitLock(),this.listeners.removeAll(),this.joystick.remove()}};function Q(e,t,n=[],r){return r?{kind:e,key:t,refs:n,sources:r}:{kind:e,key:t,refs:n}}var Hp={valley:{id:`valley`,sections:[Q(`quran`,`a`,[`8:42`]),Q(`history`,`b`,[],[`ibn-ishaq`]),Q(`reconstruction`,`c`),Q(`reconstruction`,`d`)],refs:[`8:42`,`8:41`]},caravan:{id:`caravan`,sections:[Q(`quran`,`a`,[`8:7`]),Q(`quran`,`b`,[`8:42`]),Q(`history`,`c`,[],[`bukhari-3951`,`ibn-ishaq`]),Q(`interpretation`,`d`,[`8:7`],[`tabari`,`ibn-kathir`]),Q(`reconstruction`,`e`)],refs:[`8:7`,`8:42`]},believers:{id:`believers`,sections:[Q(`quran`,`a`,[`3:123`]),Q(`quran`,`b`,[`8:26`]),Q(`history`,`c`,[],[`bukhari-3957`,`muslim-1763`,`ibn-ishaq`]),Q(`reconstruction`,`d`)],refs:[`3:123`,`8:5`,`8:26`]},quraysh:{id:`quraysh`,sections:[Q(`quran`,`a`,[`8:47`]),Q(`quran`,`b`,[`8:48`]),Q(`quran`,`c`,[`8:19`]),Q(`history`,`d`,[],[`muslim-1763`,`ibn-ishaq`]),Q(`reconstruction`,`e`)],refs:[`8:47`,`8:48`,`8:19`]},wells:{id:`wells`,sections:[Q(`history`,`a`,[],[`ibn-ishaq`]),Q(`quran`,`b`,[`8:11`]),Q(`reconstruction`,`c`)],refs:[`8:11`]},shelter:{id:`shelter`,sections:[Q(`history`,`a`,[],[`bukhari-2915`]),Q(`history`,`b`,[],[`ibn-ishaq`]),Q(`history`,`c`,[`8:9`],[`muslim-1763`]),Q(`quran`,`d`,[`8:9`]),Q(`symbolic`,`e`),Q(`reconstruction`,`f`)],refs:[`8:9`,`8:10`]},"near-camp":{id:`near-camp`,sections:[Q(`quran`,`a`,[`8:11`]),Q(`history`,`b`,[],[`ibn-ishaq`]),Q(`reconstruction`,`c`)],refs:[`8:11`,`8:42`]},"far-camp":{id:`far-camp`,sections:[Q(`quran`,`a`,[`8:42`]),Q(`history`,`b`,[],[`ibn-ishaq`]),Q(`reconstruction`,`c`)],refs:[`8:42`,`8:47`]},dune:{id:`dune`,sections:[Q(`history`,`a`,[],[`ibn-ishaq`]),Q(`reconstruction`,`b`)],refs:[`8:42`]},rain:{id:`rain`,sections:[Q(`quran`,`a`,[`8:11`]),Q(`interpretation`,`b`,[`8:11`],[`tabari`,`ibn-ishaq`]),Q(`reconstruction`,`c`)],refs:[`8:11`]},support:{id:`support`,sections:[Q(`quran`,`a`,[`8:9`]),Q(`quran`,`b`,[`8:12`]),Q(`quran`,`c`,[`3:124`]),Q(`quran`,`d`,[`8:10`]),Q(`interpretation`,`e`,[`8:9`,`3:124`,`3:125`],[`tabari`]),Q(`symbolic`,`f`),Q(`reconstruction`,`g`)],refs:[`8:9`,`8:10`,`8:12`,`3:124`,`3:125`,`3:126`]},field:{id:`field`,sections:[Q(`quran`,`a`,[`8:41`]),Q(`quran`,`b`,[`8:17`]),Q(`quran`,`c`,[`8:15`]),Q(`history`,`d`,[],[`ibn-ishaq`]),Q(`reconstruction`,`e`)],refs:[`8:15`,`8:16`,`8:17`,`8:41`,`54:45`]},equipment:{id:`equipment`,sections:[Q(`reconstruction`,`a`),Q(`history`,`b`,[],[`ibn-ishaq`]),Q(`reconstruction`,`c`)],refs:[]},"road-medina":{id:`road-medina`,sections:[Q(`quran`,`a`,[`8:5`]),Q(`reconstruction`,`b`)],refs:[`8:5`,`8:6`]},"road-mecca":{id:`road-mecca`,sections:[Q(`quran`,`a`,[`8:47`]),Q(`reconstruction`,`b`)],refs:[`8:47`]}},Up={rain:e=>e.rain>.15||e.cloud>.6,support:e=>e.support>.2},Wp=[Q(`summary`,`help`,[`8:10`,`3:126`,`8:17`]),Q(`summary`,`few`,[`3:123`,`8:26`]),Q(`summary`,`reassure`,[`8:11`,`8:10`,`3:126`]),Q(`summary`,`steadfast`,[`8:45`,`8:46`,`3:125`]),Q(`summary`,`pride`,[`8:47`,`8:48`]),Q(`summary`,`gratitude`,[`3:123`,`8:26`]),Q(`interpretation`,`furqan`,[`8:41`],[`tabari`,`ibn-kathir`])],Gp=32,Kp=`
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
`,qp=`
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
`,Jp=class{constructor(e){q(this,`object`,new In),q(this,`camera`,void 0),q(this,`items`,[]),q(this,`raycaster`,new uo),q(this,`ndc`,new V),q(this,`hits`,[]),q(this,`markers`,void 0),q(this,`markerMat`,void 0),q(this,`markerGeo`,void 0),q(this,`alpha`,void 0),q(this,`scale`,void 0),q(this,`anchor`,new H),q(this,`m4`,new cn),q(this,`fades`,new Float32Array(128)),q(this,`result`,{id:`valley`,distance:0}),this.object.name=`interactions`,this.camera=e.camera,this.markerGeo=new Yi(1,1),this.alpha=new pi(new Float32Array(Gp),1),this.scale=new pi(new Float32Array(Gp).fill(1),1),this.alpha.setUsage(Qe),this.scale.setUsage(Qe),this.markerGeo.setAttribute(`aAlpha`,this.alpha),this.markerGeo.setAttribute(`aScale`,this.scale),this.markerMat=new aa({vertexShader:Kp,fragmentShader:qp,uniforms:{uTime:{value:0},uPulse:{value:1}},transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:1}),this.markers=new xi(this.markerGeo,this.markerMat,Gp),this.markers.instanceMatrix.setUsage(Qe),this.markers.frustumCulled=!1,this.markers.renderOrder=20,this.markers.count=0,this.object.add(this.markers)}register(e){this.items.push(...e)}focusCenter(e){return this.cast(0,0,e)}pickAt(e,t,n){return this.cast(e,t,n)?.id??null}cast(e,t,n){this.ndc.set(e,t),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera);let r=this.raycaster.ray,i=null,a=1/0;for(let e of this.items){if(!e.isAvailable(n))continue;this.raycaster.far=e.maxDistance,this.hits.length=0,this.raycaster.intersectObjects(e.targets,!1,this.hits);let t=this.hits[0];t&&t.distance<a&&(a=t.distance,i=e.id)}this.raycaster.far=1/0;let o=i?a:2500,s=this.terrainHit(o);return i&&s<a-1&&(i=null,a=1/0),!i&&r.direction.y>.12&&s>=o&&(Up.support(n)?i=`support`:Up.rain(n)&&(i=`rain`),a=0),i?(this.result.id=i,this.result.distance=a,this.result):null}terrainHit(e){let t=this.raycaster.ray.origin,n=this.raycaster.ray.direction,r=.5;for(;r<e;){let e=t.x+n.x*r;if(t.y+n.y*r<Z(e,t.z+n.z*r))return r;r+=Math.min(8,.6+r*.03)}return e}update(e,t,n){this.markerMat.uniforms.uTime.value=e.time,this.markerMat.uniforms.uPulse.value=+!e.reducedMotion;let r=e.camera.position,i=0;for(let a=0;a<this.items.length&&i<Gp;a++){let o=this.items[a],s=0,c=!1;if(t&&o.anchor&&o.isAvailable(e.env)&&o.anchor(this.anchor,e.env)){let e=this.anchor.distanceTo(r),t=Math.min(1,Math.max(0,(e-3)/4)),a=1-Math.min(1,Math.max(0,(e-o.maxDistance*.75)/(o.maxDistance*.25))),l=n.includes(o.id);s=t*a*(l?.95:.5),c=!0,this.scale.setX(i,l?1.15:.85)}let l=this.fades[a]+(s-this.fades[a])*Math.min(1,e.dt*4);this.fades[a]=e.dt>0?l:s,!(!c||this.fades[a]<.01)&&(this.m4.makeTranslation(this.anchor.x,this.anchor.y,this.anchor.z),this.markers.setMatrixAt(i,this.m4),this.alpha.setX(i,this.fades[a]),i++)}this.markers.count=i,this.markers.instanceMatrix.needsUpdate=!0,this.alpha.needsUpdate=!0,this.scale.needsUpdate=!0}dispose(){this.markerGeo.dispose(),this.markerMat.dispose(),this.object.clear()}},Yp={"bukhari-2915":{id:`bukhari-2915`,kind:`hadith`,url:`https://sunnah.com/bukhari:2915`},"bukhari-3951":{id:`bukhari-3951`,kind:`hadith`,url:`https://sunnah.com/bukhari:3951`},"bukhari-3952":{id:`bukhari-3952`,kind:`hadith`,url:`https://sunnah.com/bukhari:3952`},"bukhari-3957":{id:`bukhari-3957`,kind:`hadith`,url:`https://sunnah.com/bukhari:3957`},"bukhari-3986":{id:`bukhari-3986`,kind:`hadith`,url:`https://sunnah.com/bukhari:3986`},"muslim-1763":{id:`muslim-1763`,kind:`hadith`,url:`https://sunnah.com/muslim:1763a`},"ibn-ishaq":{id:`ibn-ishaq`,kind:`sira`},tabari:{id:`tabari`,kind:`tafsir`},"ibn-kathir":{id:`ibn-kathir`,kind:`tafsir`}},Xp=[`bukhari-2915`,`bukhari-3951`,`bukhari-3952`,`bukhari-3957`,`bukhari-3986`,`muslim-1763`,`ibn-ishaq`,`tabari`,`ibn-kathir`],Zp=`Tanzil Quran Text (Uthmani, Version 1.1)
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
 Please check updates at: http://tanzil.net/updates/`,Qp={"3:123":`وَلَقَدْ نَصَرَكُمُ ٱللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ ۖ فَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تَشْكُرُونَ`,"3:124":`إِذْ تَقُولُ لِلْمُؤْمِنِينَ أَلَن يَكْفِيَكُمْ أَن يُمِدَّكُمْ رَبُّكُم بِثَلَٰثَةِ ءَالَٰفٍ مِّنَ ٱلْمَلَٰٓئِكَةِ مُنزَلِينَ`,"3:125":`بَلَىٰٓ ۚ إِن تَصْبِرُوا۟ وَتَتَّقُوا۟ وَيَأْتُوكُم مِّن فَوْرِهِمْ هَٰذَا يُمْدِدْكُمْ رَبُّكُم بِخَمْسَةِ ءَالَٰفٍ مِّنَ ٱلْمَلَٰٓئِكَةِ مُسَوِّمِينَ`,"3:126":`وَمَا جَعَلَهُ ٱللَّهُ إِلَّا بُشْرَىٰ لَكُمْ وَلِتَطْمَئِنَّ قُلُوبُكُم بِهِۦ ۗ وَمَا ٱلنَّصْرُ إِلَّا مِنْ عِندِ ٱللَّهِ ٱلْعَزِيزِ ٱلْحَكِيمِ`,"3:127":`لِيَقْطَعَ طَرَفًا مِّنَ ٱلَّذِينَ كَفَرُوٓا۟ أَوْ يَكْبِتَهُمْ فَيَنقَلِبُوا۟ خَآئِبِينَ`,"8:5":`كَمَآ أَخْرَجَكَ رَبُّكَ مِنۢ بَيْتِكَ بِٱلْحَقِّ وَإِنَّ فَرِيقًا مِّنَ ٱلْمُؤْمِنِينَ لَكَٰرِهُونَ`,"8:6":`يُجَٰدِلُونَكَ فِى ٱلْحَقِّ بَعْدَ مَا تَبَيَّنَ كَأَنَّمَا يُسَاقُونَ إِلَى ٱلْمَوْتِ وَهُمْ يَنظُرُونَ`,"8:7":`وَإِذْ يَعِدُكُمُ ٱللَّهُ إِحْدَى ٱلطَّآئِفَتَيْنِ أَنَّهَا لَكُمْ وَتَوَدُّونَ أَنَّ غَيْرَ ذَاتِ ٱلشَّوْكَةِ تَكُونُ لَكُمْ وَيُرِيدُ ٱللَّهُ أَن يُحِقَّ ٱلْحَقَّ بِكَلِمَٰتِهِۦ وَيَقْطَعَ دَابِرَ ٱلْكَٰفِرِينَ`,"8:8":`لِيُحِقَّ ٱلْحَقَّ وَيُبْطِلَ ٱلْبَٰطِلَ وَلَوْ كَرِهَ ٱلْمُجْرِمُونَ`,"8:9":`إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَٱسْتَجَابَ لَكُمْ أَنِّى مُمِدُّكُم بِأَلْفٍ مِّنَ ٱلْمَلَٰٓئِكَةِ مُرْدِفِينَ`,"8:10":`وَمَا جَعَلَهُ ٱللَّهُ إِلَّا بُشْرَىٰ وَلِتَطْمَئِنَّ بِهِۦ قُلُوبُكُمْ ۚ وَمَا ٱلنَّصْرُ إِلَّا مِنْ عِندِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ`,"8:11":`إِذْ يُغَشِّيكُمُ ٱلنُّعَاسَ أَمَنَةً مِّنْهُ وَيُنَزِّلُ عَلَيْكُم مِّنَ ٱلسَّمَآءِ مَآءً لِّيُطَهِّرَكُم بِهِۦ وَيُذْهِبَ عَنكُمْ رِجْزَ ٱلشَّيْطَٰنِ وَلِيَرْبِطَ عَلَىٰ قُلُوبِكُمْ وَيُثَبِّتَ بِهِ ٱلْأَقْدَامَ`,"8:12":`إِذْ يُوحِى رَبُّكَ إِلَى ٱلْمَلَٰٓئِكَةِ أَنِّى مَعَكُمْ فَثَبِّتُوا۟ ٱلَّذِينَ ءَامَنُوا۟ ۚ سَأُلْقِى فِى قُلُوبِ ٱلَّذِينَ كَفَرُوا۟ ٱلرُّعْبَ فَٱضْرِبُوا۟ فَوْقَ ٱلْأَعْنَاقِ وَٱضْرِبُوا۟ مِنْهُمْ كُلَّ بَنَانٍ`,"8:13":`ذَٰلِكَ بِأَنَّهُمْ شَآقُّوا۟ ٱللَّهَ وَرَسُولَهُۥ ۚ وَمَن يُشَاقِقِ ٱللَّهَ وَرَسُولَهُۥ فَإِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ`,"8:14":`ذَٰلِكُمْ فَذُوقُوهُ وَأَنَّ لِلْكَٰفِرِينَ عَذَابَ ٱلنَّارِ`,"8:15":`يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا لَقِيتُمُ ٱلَّذِينَ كَفَرُوا۟ زَحْفًا فَلَا تُوَلُّوهُمُ ٱلْأَدْبَارَ`,"8:16":`وَمَن يُوَلِّهِمْ يَوْمَئِذٍ دُبُرَهُۥٓ إِلَّا مُتَحَرِّفًا لِّقِتَالٍ أَوْ مُتَحَيِّزًا إِلَىٰ فِئَةٍ فَقَدْ بَآءَ بِغَضَبٍ مِّنَ ٱللَّهِ وَمَأْوَىٰهُ جَهَنَّمُ ۖ وَبِئْسَ ٱلْمَصِيرُ`,"8:17":`فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ ٱللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ ٱللَّهَ رَمَىٰ ۚ وَلِيُبْلِىَ ٱلْمُؤْمِنِينَ مِنْهُ بَلَآءً حَسَنًا ۚ إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌ`,"8:18":`ذَٰلِكُمْ وَأَنَّ ٱللَّهَ مُوهِنُ كَيْدِ ٱلْكَٰفِرِينَ`,"8:19":`إِن تَسْتَفْتِحُوا۟ فَقَدْ جَآءَكُمُ ٱلْفَتْحُ ۖ وَإِن تَنتَهُوا۟ فَهُوَ خَيْرٌ لَّكُمْ ۖ وَإِن تَعُودُوا۟ نَعُدْ وَلَن تُغْنِىَ عَنكُمْ فِئَتُكُمْ شَيْـًٔا وَلَوْ كَثُرَتْ وَأَنَّ ٱللَّهَ مَعَ ٱلْمُؤْمِنِينَ`,"3:13":`قَدْ كَانَ لَكُمْ ءَايَةٌ فِى فِئَتَيْنِ ٱلْتَقَتَا ۖ فِئَةٌ تُقَٰتِلُ فِى سَبِيلِ ٱللَّهِ وَأُخْرَىٰ كَافِرَةٌ يَرَوْنَهُم مِّثْلَيْهِمْ رَأْىَ ٱلْعَيْنِ ۚ وَٱللَّهُ يُؤَيِّدُ بِنَصْرِهِۦ مَن يَشَآءُ ۗ إِنَّ فِى ذَٰلِكَ لَعِبْرَةً لِّأُو۟لِى ٱلْأَبْصَٰرِ`,"8:26":`وَٱذْكُرُوٓا۟ إِذْ أَنتُمْ قَلِيلٌ مُّسْتَضْعَفُونَ فِى ٱلْأَرْضِ تَخَافُونَ أَن يَتَخَطَّفَكُمُ ٱلنَّاسُ فَـَٔاوَىٰكُمْ وَأَيَّدَكُم بِنَصْرِهِۦ وَرَزَقَكُم مِّنَ ٱلطَّيِّبَٰتِ لَعَلَّكُمْ تَشْكُرُونَ`,"8:30":`وَإِذْ يَمْكُرُ بِكَ ٱلَّذِينَ كَفَرُوا۟ لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ ٱللَّهُ ۖ وَٱللَّهُ خَيْرُ ٱلْمَٰكِرِينَ`,"8:41":`۞ وَٱعْلَمُوٓا۟ أَنَّمَا غَنِمْتُم مِّن شَىْءٍ فَأَنَّ لِلَّهِ خُمُسَهُۥ وَلِلرَّسُولِ وَلِذِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينِ وَٱبْنِ ٱلسَّبِيلِ إِن كُنتُمْ ءَامَنتُم بِٱللَّهِ وَمَآ أَنزَلْنَا عَلَىٰ عَبْدِنَا يَوْمَ ٱلْفُرْقَانِ يَوْمَ ٱلْتَقَى ٱلْجَمْعَانِ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ`,"8:42":`إِذْ أَنتُم بِٱلْعُدْوَةِ ٱلدُّنْيَا وَهُم بِٱلْعُدْوَةِ ٱلْقُصْوَىٰ وَٱلرَّكْبُ أَسْفَلَ مِنكُمْ ۚ وَلَوْ تَوَاعَدتُّمْ لَٱخْتَلَفْتُمْ فِى ٱلْمِيعَٰدِ ۙ وَلَٰكِن لِّيَقْضِىَ ٱللَّهُ أَمْرًا كَانَ مَفْعُولًا لِّيَهْلِكَ مَنْ هَلَكَ عَنۢ بَيِّنَةٍ وَيَحْيَىٰ مَنْ حَىَّ عَنۢ بَيِّنَةٍ ۗ وَإِنَّ ٱللَّهَ لَسَمِيعٌ عَلِيمٌ`,"8:43":`إِذْ يُرِيكَهُمُ ٱللَّهُ فِى مَنَامِكَ قَلِيلًا ۖ وَلَوْ أَرَىٰكَهُمْ كَثِيرًا لَّفَشِلْتُمْ وَلَتَنَٰزَعْتُمْ فِى ٱلْأَمْرِ وَلَٰكِنَّ ٱللَّهَ سَلَّمَ ۗ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ`,"8:44":`وَإِذْ يُرِيكُمُوهُمْ إِذِ ٱلْتَقَيْتُمْ فِىٓ أَعْيُنِكُمْ قَلِيلًا وَيُقَلِّلُكُمْ فِىٓ أَعْيُنِهِمْ لِيَقْضِىَ ٱللَّهُ أَمْرًا كَانَ مَفْعُولًا ۗ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ`,"8:45":`يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا لَقِيتُمْ فِئَةً فَٱثْبُتُوا۟ وَٱذْكُرُوا۟ ٱللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ`,"8:46":`وَأَطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَنَٰزَعُوا۟ فَتَفْشَلُوا۟ وَتَذْهَبَ رِيحُكُمْ ۖ وَٱصْبِرُوٓا۟ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ`,"8:47":`وَلَا تَكُونُوا۟ كَٱلَّذِينَ خَرَجُوا۟ مِن دِيَٰرِهِم بَطَرًا وَرِئَآءَ ٱلنَّاسِ وَيَصُدُّونَ عَن سَبِيلِ ٱللَّهِ ۚ وَٱللَّهُ بِمَا يَعْمَلُونَ مُحِيطٌ`,"8:48":`وَإِذْ زَيَّنَ لَهُمُ ٱلشَّيْطَٰنُ أَعْمَٰلَهُمْ وَقَالَ لَا غَالِبَ لَكُمُ ٱلْيَوْمَ مِنَ ٱلنَّاسِ وَإِنِّى جَارٌ لَّكُمْ ۖ فَلَمَّا تَرَآءَتِ ٱلْفِئَتَانِ نَكَصَ عَلَىٰ عَقِبَيْهِ وَقَالَ إِنِّى بَرِىٓءٌ مِّنكُمْ إِنِّىٓ أَرَىٰ مَا لَا تَرَوْنَ إِنِّىٓ أَخَافُ ٱللَّهَ ۚ وَٱللَّهُ شَدِيدُ ٱلْعِقَابِ`,"22:39":`أُذِنَ لِلَّذِينَ يُقَٰتَلُونَ بِأَنَّهُمْ ظُلِمُوا۟ ۚ وَإِنَّ ٱللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ`,"22:40":`ٱلَّذِينَ أُخْرِجُوا۟ مِن دِيَٰرِهِم بِغَيْرِ حَقٍّ إِلَّآ أَن يَقُولُوا۟ رَبُّنَا ٱللَّهُ ۗ وَلَوْلَا دَفْعُ ٱللَّهِ ٱلنَّاسَ بَعْضَهُم بِبَعْضٍ لَّهُدِّمَتْ صَوَٰمِعُ وَبِيَعٌ وَصَلَوَٰتٌ وَمَسَٰجِدُ يُذْكَرُ فِيهَا ٱسْمُ ٱللَّهِ كَثِيرًا ۗ وَلَيَنصُرَنَّ ٱللَّهُ مَن يَنصُرُهُۥٓ ۗ إِنَّ ٱللَّهَ لَقَوِىٌّ عَزِيزٌ`,"54:45":`سَيُهْزَمُ ٱلْجَمْعُ وَيُوَلُّونَ ٱلدُّبُرَ`},$p={meta:{id:`ckb.hevi`,language:`ckb`,kind:`translation`,title:`وەرگێڕانی هێڤی`,translator:`ئەلەند کاوە عەلی ئەحمەد`,translatorLatin:`Aland Kawa Ali Ahmad`,firstPublished:2024,source:`Hevi database (E_Hevi.db), table Ayats, column hevi`,sourceUrl:``,license:`© Aland Kawa Ali Ahmad. All rights reserved; used in this experience with the translator’s permission.`,retrieved:`2026-10-10`,notice:`Hevi translation of the meanings of the Quran into Central Kurdish (Sorani). Do not copy without the translator’s permission.`},verses:JSON.parse(`{"3:13":"بەڕاستی بۆ ئێوە نیشانەیەکی تایبەت هەبوو بۆتان لەو دوو تاقمەی کە بە یەکتر گەیشتن: تاقمێک لە ڕێی خودا قیتالی دەکرد و ئەوی دیکە ڕاستیپۆشێکی وەها بوو کە ئەوانیان دووهێندەی خۆیان دەبینی؛ خودا هەرکێی بوێت بەسەرخستنی خۆیەوە دەستبەرزی دەکات. بەڕاستی لەوەدا پەندێکی تایبەت هەیە بۆ ڕاستیبینەکان.","3:123":"بەدڵنیاییشەوە خودا ئێوەی لە بەدردا سەرخست لە کاتێکدا ئێوە سەرکز بوون. دەی تەقوای خودا بکەن، بەشکو سپاسی بکەن.","3:124":"دەمێک بە ئاساییشبەخشانت دەگوت: «مەگەر بەس نییە کە پەروەردگارتان بەفراوانی بەسێ هەزار فریشتەی دابەزێنراوەوە کۆمەکییتان دەکات؟»","3:125":"بێگومان! ئەگەر خۆتان ڕابگرن و خۆتان بپارێزن و لەم کاتەدا بۆتان بێن، پەروەردگارتان بەفراوانی کۆمەکیتان دەکات بەپێنج هەزار فریشتەی نیشانەدارکراوەوە.","3:126":"خودا ئەوەی بۆ ئێوە تەنیا کردە مژدانە و تا دڵتانی پێ ئارام بێت. سەرخستن تەنیا لە خودای پڕشکۆ و خیرەدمەندەوەیە.","3:127":"تاکو لایەک لەوانە بنەبڕ بکات کە ڕاستییان پۆشیوە یان بەتوندی بەرپەچیان بداتەوە تا بەداواپووچییەوە (بەرەو ئەو شوێنە) هەڵگەڕێنەوە (کە لێوەی هاتوون).","8:5":"وەک پەروەردگارت ڕاستانە لە شەوگەکەت هێنایتیە دەر؛ بەڕاستی کۆمجیایەک لە ئاساییشبەخشان ڕقن بوون.","8:6":"لەبارەی ڕاستییەوە دەمەقاڵێت لەگەڵدا دەکەن دوای ئەوە کە ئاشکرا بووە؛ (هێندە پێیان ناخۆشە) وەک وەهابێت کە بەرەو مردن ڕاپێچ بکرێن لە کاتێکدا خۆیان سەرنج بدەن.","8:7":"دەمێکیش خودا بەڵێنی بە ئێوە دا کە یەکێک لەو دوو تایفەیە بۆ ئێوە بێت لە کاتێکدا خۆتان فرەخواز بوون کە بێدڕکەکە بۆ خۆتان بێت. خودا گەرەکیەتی کە ڕاستی بە وشەکانی خۆی بچەسپێنێت و ڕاستیپۆشان دوابڕاو بکات،","8:8":"تا ڕاستی بچەسپێنێت و پووچەڵی هەڵبوەشێنێتەوە، ئەگەرچی چاکەبڕان پێیان ناخۆش بێت.","8:9":"دەمێک داوای کۆمەکیتان لە پەروەردگارتان دەکرد و بەچاکی وەڵامتانی دایەوە: «بەڕاستی دەستڕۆیشتووکاری ئێوەم بە هەزار فریشتەی یەک لەدوای یەک.»","8:10":"خودا ئەوەی تەنیا بە مژدەیەکی ڕوخۆشکەر سازاند تا دڵتانی پێ ئارام بکاتەوە. سەرخستن تەنیا لەلایەن خوداوەیە. بەڕاستی خودا زاتێکی پڕشکۆ و خیرەدمەندە.","8:11":"دەمێک سووکەخەوەکە بۆ هێمنییەک ئێوەی دەپۆشی و لە ئاسمانەوە ئاوێکی تایبەتی بۆ سەرتان دادەبەزاند تا بەهۆیەوە پاکتان بکاتەوە و ورتەورتی شەیتانتان لێ‌ لا بدات و دڵتان ببەستێت و پێیەکانی پێ بچەسپێنێت.","8:12":"دەمێک پەروەردگارت سرووشی بۆ فریشتەکان نارد: «بەڕاستی لەگەڵتانم، دەی ئەوانە بچەسپێنن کە ئیمانیان هێناوە. بەزوویی تۆقین وەنێو دڵی ئەوانە دەخەم کە ڕاستییان پۆشیوە. دەی لە لاسەرووی ملەکان بدەن و لە سەری هەموو پەنجەیەکیان بدەن.»","8:13":"ئەوە بەهۆی ئەوەوەیە کە بەربەرەکانێی خودا و پەیامبەرەکەیان کرد. هەرکێ بەربەرەکانێی خودا و پەیامبەرەکەی بکات، ئەوا بەڕاستی خودا سزای توندوتیژە.","8:14":"«دەی ئەوە بچێژن!» بەدڵنیاییەوە بۆ ڕاستیپۆشان ئەشکەنجەی ئاگر هەیە.","8:15":"ئەی ئەوانەی کە ئیمانتان هێناوە! کاتێک بەخشانەوە بەرەنگاری ئەوانە دەبنەوە کە ڕاستییان پۆشیوە، پشتیان تێ‌ مەکەن.","8:16":"هەرکێ لەو ڕۆژەدا پشتیان تێ‌ بکات — مەگەر بۆ خۆلادان بۆ (بەرژەوەندی) هەر قیتالێک یان بە تاقمێکەوە پەیوەست بێت – خۆی شایەنی تووڕەییەکی خودا کردووە، پەناگەیشی جەهەننەمە کە دزێوترین دواجێگەیە.","8:17":"بۆیە ئێوە ئەوانتان نەکوشت، بەڵکو خودا ئەوانی کوشت. نەیشتهاویشت دەمێک هاویشتت، بەڵکو خودا هاویشتی. تا ئاساییشبەخشان هەڵسەنگێنێت لەلایەن خۆیەوە بەهەڵسەنگاندێکی چاکوجوان. بەڕاستی خودا زاتێکی فرەبیس و فرەزانە.","8:18":"ئەوە بۆ ئێوە بوو. بەدڵنیاییەوە خودا سووککەری نەخشەی ڕاستیپۆشانە.","8:19":"ئەگەر داوای دەرووکردنەوە بکەن، ئەوا بەڕاستی دەرووکردنەوەتان بۆ هات. ئەگەریش دەست هەڵبگرن، ئەوا بۆ خۆتان باشترە. ئەگەریش بگەڕێنەوە، دەگەڕێینەوە، تاقمەکەیشتان هێندەی شتێک بێنیازتان ناکات، هەرچەند زۆریش بن. بەدڵنیاییەوە خودا لەگەڵ ئاساییشبەخشانە.","8:26":"لەیادیشتان بێت دەمێک ئێوە لەو زەوییەدا تۆزێک بوون، لاوازکراو بوون، دەترسان خەڵک بتانڕفێنێت، بۆیە پەناتانی دا و بەسەرخستنی خۆیەوە ئێوەی دەستڕۆیشتوو کرد و لە پاکوباشەکان ڕۆژیی پێتان دا بەشکو سپاسی بکەن.","8:30":"دەمێکیش ئەوانەی کە ڕاستییان پۆشیوە نەخشەیان لەدژت دەگێڕا تا بتچەسپێنن یان بتکوژن یان وەدەرتبنێن. نەخشە دەکێشن، خودایش نەخشە دەکێشێت. خودا باشترینی نەخشەکێشانە.","8:41":"بزانن کە هەر غەنیمەیەکتان دەسکەوتبێت، ئەوا پێنجیەکی بۆ خودا و بۆ پەیامبەر و بۆ نزیکان و هەتیوان و بێلانەکان و ڕایارە ئەگەر ئیمانتان بە خودا و بەوە هێناوە کە لە ڕۆژی فورقاندا بۆ سەر بەندەکەمان دامانبەزاندووە، ئەو ڕۆژەی کە دوو کۆمەڵەکە بەرەنگاری یەکتر بوونەوە. خودا بەسەر هەموو شتێکەوە زاتێکی فرەتوانە.","8:42":"دەمێک ئێوە لە لاشیوەکەی ئەمسەرەوە بوون، ئەوانیش لە لاشیوەکەی ئەوسەرەوە بوون؛ کاروانسوارەکەیش لەخوارووتانەوە بوو. ئەگەر بەڵێنتان بۆ کات و شوێنەکە بە یەکتر بدایە، لەبارەی کات و شوێنە بەڵێندراوەکەوە لەگەڵ یەکتردا ناکۆک دەبوون، بەڵام تا خودا کارێکی ئەنجامدراو جێبەجێ بکات: تا هەرکێ لەنێو ببات کە بەپێی بەڵگەیەکی ئاشکرا تیاچووە و هەرکێ بەبەردەوامی بژیەنێت کە بەپێی بەڵگەیەکی ئاشکرا زیندووە. بەڕاستی خودا زاتێکی فرەبیس و فرەزانە.","8:43":"دەمێک لە خەونەکەتدا خودا ئەوانی بە تۆزەژمارەیەک پێشانی تۆ دا. ئەگەر ئەوانی بە ژمارەیەکی زۆر پێشانی ئێوە بدایە، شکستتان دەهێنا و لەبارەی کاروبارەکەوە کێشمەکێشتان لەگەڵ یەکتردا دەبوو، بەڵام خودا سەلامەتیی فەراهەم هێنا. بەڕاستی ئەو فرەزانە بە هەرچییەک کە لەنێو سینەکانە.","8:44":"دەمێکیش بەرەنگاری یەکتر بوونەوە، ئەوانی بە تۆزەژمارەیەک خستە بەرچاوتان، ئێوەیشی بە تۆزەژمارەیەک خستە بەرچاویان تا خودا کارێکی ئەنجامدراو بەجێبهێنێت. کارەکان بەرەو خودا دەبرێنەوە.","8:45":"ئەی ئەوانەی کە ئیمانتان هێناوە! کاتێک بەرەنگاری تاقمێک دەبنەوە، بچەسپن و یادی خودا زۆر بکەن بەشکو ڕێی کامەرانی بگرن.","8:46":"بەگوێی خودا و پەیامبەرەکەی بکەن و لەگەڵ یەکتردا کێشمەکێش مەکەن، ئەگینا شکست دەهێنن و هێزتان دەڕوات. خۆتان ڕابگرن؛ بەڕاستی خودا لەگەڵ خۆڕاگرانە.","8:47":"وەک ئەوانەیش مەبن کە لە خانووەکانی خۆیانەوە بەلەخۆباییبوون و ڕوبازی بۆ خەڵک دەر چوون و ئەوانی دیکەیان لە ڕێی خودا لادەدا. خودا بە هەرچییەک کە ئەوانە دەیکەن زاتێکی دەوردەرە.","8:48":"دەمێکیش شەیتان کردەوەکانیانی بۆ ڕازاندنەوە و گوتی: «هیچ کەس ئەمڕۆ بەسەرتانەوە زاڵ نابێت و بەدڵنیاییەوە من دراوسێیەکی تایبەتم بۆ ئێوە.» کەچی کە دوو تاقمەکە یەکتریان بینی، لەسەر پاژنەی خۆی پاشەوپاش هاتە دواوە و گوتی: «بەدڵنیاییەوە من لێتان بێتاوانم؛ بەڕاستی من ئەوە دەبینم کە ئێوە نایبینن، بەڕاستی من لە خودا دەترسم و خودا سزای توندوتیژە.»","22:39":"ئیزن(ی جەنگ) دراوە بەوانەی کە شۆڕش دەکەن بەهۆی ئەوەوە کە زوڵمیان لێ کراوە و بەدڵنیاییەوە خودا لەسەر سەرخستنیان زاتێکی فرەتوانە.","22:40":"ئەوانەی کە بەبێ هیچ ڕەواییەک لە خانووەکانی خۆیانەوە تەنیا لەبەر ئەوە دەرکران کە دەیانگوت: «خودا پەروەردگارمانە.» ئەگەر خودا پاڵی بە هەندێک خەڵکەوە نەنایە لەڕێی هەندێکی دیکەیانەوە، ئەوا سەوامیع و بیەع و سەڵوتاکان و سوجدەگاکان خاپوور دەبوون کە زۆر یادی خودای تێدا دەکرێت. بێگومان خودا کەسێک سەردەخات کە سەریدەخات. بەدڵنیاییەوە خودا زاتێکی بەهێز و پڕشکۆیە.","54:45":"بەدڵنیاییەوە کۆمەڵەکە دەبەزێنرێت و پشتهەڵدەکەن."}`)},em={meta:{id:`ar.muyassar`,language:`ar`,kind:`tafsir`,title:`التفسير الميسر`,translator:`مجمع الملك فهد لطباعة المصحف الشريف`,translatorLatin:`King Fahd Glorious Quran Printing Complex`,firstPublished:2009,source:`Tanzil Project translation file ar.muyassar`,sourceUrl:`https://tanzil.net/trans/`,license:`Published by the King Fahd Glorious Quran Printing Complex; distributed by the Tanzil Project for non-commercial use with attribution.`,retrieved:`2026-10-10`,notice:`# --------------------------------------------------------------------
#
#  Quran Translation
#  Name: تفسير المیسر
#  Translator: King Fahad Quran Complex
#  Language: Arabic
#  ID: ar.muyassar
#  Last Update: January 7, 2011
#  Source: Tanzil.net
#
# --------------------------------------------------------------------`},verses:JSON.parse(`{"3:13":"قد كان لكم -أيها اليهود المتكبرون المعاندون- دلالة عظيمة في جماعتين تقابلتا في معركة \\"بَدْر\\": جماعة تقاتل من أجل دين الله، وهم محمد صلى الله عليه وسلم وأصحابه، وجماعة أخرى كافرة بالله، تقاتل من أجل الباطل، ترى المؤمنين في العدد مثليهم رأي العين، وقد جعل الله ذلك سببًا لنصر المسلمين عليهم. والله يؤيِّد بنصره من يشاء من عباده. إن في هذا الذي حدث لَعِظة عظيمة لأصحاب البصائر الذين يهتدون إلى حكم الله وأفعاله.","3:123":"ولقد نصركم الله -أيها المؤمنون- بـ \\"بدر\\" على أعدائكم المشركين مع قلة عَدَدكم وعُدَدكم، فخافوا الله بفعل أوامره واجتناب نواهيه؛ لعلكم تشكرون له نعمه.","3:124":"اذكر -أيها الرسول- ما كان من أمر أصحابك في \\"بدر\\" حين شقَّ عليهم أن يأتي مَدَد للمشركين، فأوحينا إليك أن تقول لهم: ألن تكفيكم معونة ربكم بأن يمدكم بثلاثة آلاف من الملائكة مُنْزَلين من السماء إلى أرض المعركة، يثبتونكم، ويقاتلون معكم؟","3:125":"بلى يكفيكم هذا المَدَد. وبشارة أخرى لكم: إن تصبروا على لقاء العدو وتتقوا الله بفِعْل ما أمركم به واجتناب ما نهاكم عنه، ويأت كفار \\"مكة\\" على الفور مسرعين لقتالكم، يظنون أنهم يستأصلونكم، فإن الله يمدكم بخمسة آلاف من الملائكة مسوِّمين أي: قد أعلموا أنفسهم وخيولهم بعلامات واضحات.","3:126":"وما جعل الله هذا الإمداد بالملائكة إلا بشرى لكم يبشركم بها ولتطمئن قلوبكم، وتطيب بوعد الله لكم. وما النصر إلا من عند الله العزيز الذي لا يغالَب، الحكيم في تدبيره وفعله.","3:127":"وكان نصر الله لكم بـ \\"بدْر\\" ليهلك فريقًا من الكفار بالقتل، ومن نجا منهم من القتل رجع حزينًا قد ضاقت عليه نفسه، يَظْهر عليه الخزي والعار.","8:5":"كما أنكم لما اختلفتم في المغانم فانتزعها الله منكم، وجعلها إلى قَسْمه وقَسْم رسوله صلى الله عليه وسلم، كذلك أمرك ربك -أيها النبي- بالخروج من \\"المدينة\\" للقاء عِيْر قريش، وذلك بالوحي الذي أتاك به جبريل مع كراهة فريق من المؤمنين للخروج.","8:6":"يجادلك -أيها النبي- فريق من المؤمنين في القتال مِن بعد ما تبيَّن لهم أن ذلك واقع، كأنهم يساقون إلى الموت، وهم ينظرون إليه عِيانًا.","8:7":"واذكروا -أيها المجادلون- وَعْدَ الله لكم بالظَّفْر بإحدى الطائفتين: العير وما تحمله مِن أرزاق، أو النفير، وهو قتال الأعداء والانتصار عليهم، وأنتم تحبون الظَّفْر بالعير دون القتال، ويريد الله أن يحق الإسلام، ويُعْليه بأمره إياكم بقتال الكفار، ويستأصل الكافرين بالهلاك.","8:8":"ليعزَّ الله الإسلام وأهله، ويذهب الشرك وأهله، ولو كره المشركون ذلك.","8:9":"اذكروا نعمة الله عليكم يوم \\"بدر\\" إذ تطلبون النصر على عدوكم، فاستجاب الله لدعائكم قائلا إني ممدُّكم بألف من الملائكة من السماء، يتبع بعضهم بعضًا.","8:10":"وما جعل الله ذلك الإمداد إلا بشارة لكم بالنصر، ولتسكن به قلوبكم، وتوقنوا بنصر الله لكم، وما النصر إلا من عند الله، لا بشدة بأسكم وقواكم. إن الله عزيز في ملكه، حكيم في تدبيره وشرعه.","8:11":"إذ يُلْقي الله عليكم النعاس أمانًا منه لكم من خوف عدوكم أن يغلبكم، وينزل عليكم من السحاب ماء طهورًا، ليطهركم به من الأحداث الظاهرة، ويزيل عنكم في الباطن وساوس الشيطان وخواطره، وليشدَّ على قلوبكم بالصبر عند القتال، ويثبت به أقدام المؤمنين بتلبيد الأرض الرملية بالمطر حتى لا تنزلق فيها الأقدام.","8:12":"إذ يوحي ربك -أيها النبي- إلى الملائكة الذين أمدَّ الله بهم المسلمين في غزوة \\"بدر\\" أني معكم أُعينكم وأنصركم، فقوُّوا عزائم الذين آمنوا، سألقي في قلوب الذين كفروا الخوف الشديد والذلة والصَّغَار، فاضربوا -أيها المؤمنون- رؤوس الكفار، واضربوا منهم كل طرف ومِفْصل.","8:13":"ذلك الذي حدث للكفار من ضَرْب رؤوسهم وأعناقهم وأطرافهم؛ بسبب مخالفتهم لأمر الله ورسوله، ومَن يخالف أمر الله ورسوله، فإن الله شديد العقاب له في الدنيا والآخرة.","8:14":"ذلكم العذاب الذي عجَّلته لكم -أيها الكافرون المخالفون لأوامر الله ورسوله في الدنيا- فذوقوه في الحياة الدنيا، ولكم في الآخرة عذاب النار.","8:15":"يا أيها الذين صَدَّقوا الله ورسوله وعملوا بشرعه، إذا قابلتم الذين كفروا في القتال متقاربين منكم فلا تُوَلُّوهم ظهوركم، فتنهزموا عنهم، ولكن اثبتوا لهم، فإن الله معكم وناصركم عليهم.","8:16":"ومن يُوَلِّهم منكم ظهره وقت الزحف إلا منعطفًا لمكيدة الكفار أو منحازًا إلى جماعة المسلمين حاضري الحرب حيث كانوا، فقد استحق الغضب من الله، ومقامه جهنم، وبئس المصير والمنقلب.","8:17":"فلم تقتلوا -أيها المؤمنون- المشركين يوم \\"بدر\\"، ولكن الله قتلهم، حيث أعانكم على ذلك، وما رميت حين رميت -أيها النبي- ولكن الله رمى، حيث أوصل الرمية التي رميتها إلى وجوه المشركين؛ وليختبر المؤمنين بالله ورسوله ويوصلهم بالجهاد إلى أعلى الدرجات، ويعرِّفهم نعمته عليهم، فيشكروا له سبحانه على ذلك. إن الله سميع لدعائكم وأقوالكم ما أسررتم به وما أعلنتم، عليم بما فيه صلاح عباده.","8:18":"هذا الفعل مِن قتل المشركين ورميهم حين انهزموا، والبلاء الحسن بنصر المؤمنين على أعدائهم، هو من الله للمؤمنين، وأن الله -فيما يُسْتقبل- مُضعِف ومُبطِل مكر الكافرين حتى يَذِلُّوا وينقادوا للحق أو يهلكوا.","8:19":"إن تطلبوا -أيها الكفار- من الله أن يوقع بأسه وعذابه على المعتدين الظالمين فقد أجاب الله طلبكم، حين أوقع بكم مِن عقابه ما كان نكالا لكم وعبرة للمتقين، فإن تنتهوا -أيها الكفار- عن الكفر بالله ورسوله وقتال نبيه محمد صلى الله عليه وسلم، فهو خير لكم في دنياكم وأخراكم، وإن تعودوا إلى الحرب وقتال محمد صلى الله عليه وسلم وقتال أتباعه المؤمنين نَعُدْ بهزيمتكم كما هُزمتم يوم \\"بدر\\"، ولن تغني عنكم جماعتكم شيئًا، كما لم تغن عنكم يوم \\"بدر\\" مع كثرة عددكم وعتادكم وقلة عدد المؤمنين وعدتهم، وأن الله مع المؤمنين بتأييده ونصره.","8:26":"واذكروا أيها المؤمنون نِعَم الله عليكم إذ أنتم بـ\\"مكة\\" قليلو العدد مقهورون، تخافون أن يأخذكم الكفار بسرعة، فجعل لكم مأوى تأوون إليه وهو \\"المدينة\\"، وقوَّاكم بنصره عليهم يوم \\"بدر\\"، وأطعمكم من الطيبات -التي من جملتها الغنائم-؛ لكي تشكروا له على ما رزقكم وأنعم به عليكم.","8:30":"واذكر -أيها الرسول- حين يكيد لك مشركو قومك بـ\\"مكَّة\\"؛ ليحبسوك أو يقتلوك أو ينفوك من بلدك. ويكيدون لك، وردَّ الله مكرهم عليهم جزاء لهم، ويمكر الله، والله خير الماكرين.","8:41":"واعلموا -أيها المؤمنون- أن ما ظَفِرتم به مِن عدوكم بالجهاد في سبيل الله فأربعة أخماسه للمقاتلين الذين حضروا المعركة، والخمس الباقي يجزَّأُ خمسة أقسام: الأول لله وللرسول، فيجعل في مصالح المسلمين العامة، والثاني لذوي قرابة رسول الله صلى الله عليه وسلم، وهم بنو هاشم وبنو المطلب، جُعِل لهم الخمس مكان الصدقة فإنها لا تحلُّ لهم، والثالث لليتامى، والرابع للمساكين، والخامس للمسافر الذي انقطعت به النفقة، إن كنتم مقرِّين بتوحيد الله مطيعين له، مؤمنين بما أنزل على عبده محمد صلى الله عليه وسلم من الآيات والمدد والنصر يوم فَرَق بين الحق والباطل بـ\\"بدر\\"، يوم التقى جَمْعُ المؤمنين وجَمْعُ المشركين. والله على كل شيء قدير لا يعجزه شيء.","8:42":"واذكروا حينما كنتم على جانب الوادي الأقرب إلى \\"المدينة\\"، وعدوكم نازل بجانب الوادي الأقصى، وعِير التجارة في مكان أسفل منكم إلى ساحل \\"البحر الأحمر\\"، ولو حاولتم أن تضعوا موعدًا لهذا اللقاء لاختلفتم، ولكنَّ الله جمعكم على غير ميعاد؛ ليقضي أمرًا كان مفعولا بنصر أوليائه، وخِذْلان أعدائه بالقتل والأسر؛ وذلك ليهلك من هلك منهم عن حجة لله ثبتت له فعاينها وقطعت عذره، وليحيا مَن حيَّ عن حجة لله قد ثبتت وظهرت له. وإن الله لسميع لأقوال الفريقين، لا يخفى عليه شيء، عليم بنيَّاتهم.","8:43":"واذكر -أيها النبي- حينما أراك الله قلة عدد عدوك في منامك، فأخبرت المؤمنين بذلك، فقوِيت قلوبهم، واجترؤوا على حربهم، ولو أراك ربك كثرة عددهم لتردد أصحابك في ملاقاتهم، وجَبُنتم واختلفتم في أمر القتال، ولكن الله سلَّم من الفشل، ونجَّى من عاقبة ذلك. إنه عليم بخفايا القلوب وطبائع النفوس.","8:44":"واذكر أيضًا حينما برز الأعداء إلى أرض المعركة فرأيتموهم قليلا فاجترأتم عليهم، وقلَّلكم في أعينهم، ليتركوا الاستعداد لحربكم؛ ليقضي الله أمرًا كان مفعولا فيتحقق وَعْدُ الله لكم بالنصر والغلبة، فكانت كلمة الله هي العليا وكلمة الذين كفروا السفلى. وإلى الله مصير الأمور كلها، فيجازي كلا بما يستحق.","8:45":"يا أيها الذين صدَّقوا الله ورسوله وعملوا بشرعه، إذا لقيتم جماعة من أهل الكفر قد استعدوا لقتالكم، فاثبتوا ولا تنهزموا عنهم، واذكروا الله كثيرًا داعين مبتهلين لإنزال النصر عليكم والظَّفَر بعدوكم؛ لكي تفوزوا.","8:46":"والتزموا طاعة الله وطاعة رسوله في كل أحوالكم، ولا تختلفوا فتتفرق كلمتكم وتختلف قلوبكم، فتضعفوا وتذهب قوتكم ونصركم، واصبروا عند لقاه العدو. إن الله مع الصابرين بالعون والنصر والتأييد، ولن يخذلهم.","8:47":"ولا تكونوا مثل المشركين الذين خرجوا من بلدهم كبرًا ورياءً؛ ليمنعوا الناس عن الدخول في دين الله. والله بما يعملون محيط لا يغيب عنه شيء.","8:48":"واذكروا حين حسَّن الشيطان للمشركين ما جاؤوا له وما همُّوا به، وقال لهم: لن يغلبكم أحد اليوم، فإني ناصركم، فلما تقابل الفريقان: المشركون ومعهم الشيطان، والمسلمون ومعهم الملائكة، رجع الشيطان مُدْبرًا، وقال للمشركين: إني بريء منكم، إني أرى ما لا ترون من الملائكة الذين جاؤوا مددًا للمسلمين، إني أخاف الله، فخذلهم وتبرأ منهم. والله شديد العقاب لمن عصاه ولم يتب توبة نصوحًا.","22:39":"(كان المسلمون في أول أمرهم ممنوعين من قتال الكفار، مأمورين بالصبر على أذاهم، فلما بلغ أذى المشركين مداه وخرج النبي صلى الله عليه وسلم من \\"مكة\\" مهاجرًا إلى \\"المدينة\\"، وأصبح للإسلام قوة) أَذِنَ الله للمسلمين في القتال؛ بسبب ما وقع عليهم من الظلم والعدوان، وإن الله تعالى قادر على نصرهم وإذلال عدوِّهم.","22:40":"الذين أُلجئوا إلى الخروج من ديارهم، لا لشيء فعلوه إلا لأنهم أسلموا وقالوا: ربنا الله وحده. ولولا ما شرعه الله من دَفْع الظلم والباطل بالقتال لَهُزِم الحقُّ في كل أمة ولخربت الأرض، وهُدِّمت فيها أماكن العبادة من صوامع الرهبان، وكنائس النصارى، ومعابد اليهود، ومساجد المسلمين التي يصلُّون فيها، ويذكرون اسم الله فيها كثيرًا. ومن اجتهد في نصرة دين الله، فإن الله ناصره على عدوه. إن الله لَقوي لا يغالَب، عزيز لا يرام، قد قهر الخلائق وأخذ بنواصيهم.","54:45":"سيهزم جمع كفار \\"مكة\\" أمام المؤمنين، ويولُّون الأدبار، وقد حدث هذا يوم \\"بدر\\"."}`)},tm={id:`en-pickthall`,lang:`en`,name:`The Meaning of the Glorious Koran`,translator:`Mohammed Marmaduke Pickthall`,year:1930,license:`Public domain`,sourceUrl:`https://tanzil.net/trans/en.pickthall`,verses:{"3:123":`Allah had already given you the victory at Badr, when ye were contemptible. So observe your duty to Allah in order that ye may be thankful.`,"3:124":`When thou didst say unto the believers: Is it not sufficient for you that your Lord should support you with three thousand angels sent down (to your help)?`,"3:125":`Nay, but if ye persevere, and keep from evil, and (the enemy) attack you suddenly, your Lord will help you with five thousand angels sweeping on.`,"3:126":`Allah ordained this only as a message of good cheer for you, and that thereby your hearts might be at rest - Victory cometh only from Allah, the Mighty, the Wise -`,"3:127":`That He may cut off a part of those who disbelieve, or overwhelm them so that they retire, frustrated.`,"8:5":`Even as thy Lord caused thee (Muhammad) to go forth from thy home with the Truth, and lo! a party of the believers were averse (to it).`,"8:6":`Disputing with thee of the Truth after it had been made manifest, as if they were being driven to death visible.`,"8:7":`And when Allah promised you one of the two bands (of the enemy) that it should be yours, and ye longed that other than the armed one might be yours. And Allah willed that He should cause the Truth to triumph by His words, and cut the root of the disbelievers;`,"8:8":`That He might cause the Truth to triumph and bring vanity to naught, however much the guilty might oppose;`,"8:9":`When ye sought help of your Lord and He answered you (saying): I will help you with a thousand of the angels, rank on rank.`,"8:10":`Allah appointed it only as good tidings, and that your hearts thereby might be at rest. Victory cometh only by the help of Allah. Lo! Allah is Mighty, Wise.`,"8:11":`When He made the slumber fall upon you as a reassurance from him and sent down water from the sky upon you, that thereby He might purify you, and remove from you the fear of Satan, and make strong your hearts and firm (your) feet thereby.`,"8:12":`When thy Lord inspired the angels, (saying): I am with you. So make those who believe stand firm. I will throw fear into the hearts of those who disbelieve. Then smite the necks and smite of them each finger.`,"8:13":`That is because they opposed Allah and His messenger. Whoso opposeth Allah and His messenger, (for him) lo! Allah is severe in punishment.`,"8:14":`That (is the award), so taste it, and (know) that for disbelievers is the torment of the Fire.`,"8:15":`O ye who believe! When ye meet those who disbelieve in battle, turn not your backs to them.`,"8:16":`Whoso on that day turneth his back to them, unless manoeuvring for battle or intent to join a company, he truly hath incurred wrath from Allah, and his habitation will be hell, a hapless journey's end.`,"8:17":`Ye (Muslims) slew them not, but Allah slew them. And thou (Muhammad) threwest not when thou didst throw, but Allah threw, that He might test the believers by a fair test from Him. Lo! Allah is Hearer, Knower.`,"8:18":`That (is the case); and (know) that Allah (it is) Who maketh weak the plan of disbelievers.`,"8:19":`(O Qureysh!) If ye sought a judgment, now hath the judgment come unto you. And if ye cease (from persecuting the believers) it will be better for you, but if ye return (to the attack) We also shall return. And your host will avail you naught, however numerous it be, and (know) that Allah is with the believers (in His Guidance).`,"3:13":`There was a token for you in two hosts which met: one army fighting in the way of Allah, and another disbelieving, whom they saw as twice their number, clearly, with their very eyes. Thus Allah strengtheneth with His succour whom He will. Lo! herein verily is a lesson for those who have eyes.`,"8:26":`And remember, when ye were few and reckoned feeble in the land, and were in fear lest men should extirpate you, how He gave you refuge, and strengthened you with His help, and made provision of good things for you, that haply ye might be thankful.`,"8:30":`And when those who disbelieve plot against thee (O Muhammad) to wound thee fatally, or to kill thee or to drive thee forth; they plot, but Allah (also) plotteth; and Allah is the best of plotters.`,"8:41":`And know that whatever ye take as spoils of war, lo! a fifth thereof is for Allah, and for the messenger and for the kinsman (who hath need) and orphans and the needy and the wayfarer, if ye believe in Allah and that which We revealed unto Our slave on the Day of Discrimination, the day when the two armies met. And Allah is Able to do all things.`,"8:42":`When ye were on the near bank (of the valley) and they were on the yonder bank, and the caravan was below you (on the coast plain). And had ye trysted to meet one another ye surely would have failed to keep the tryst, but (it happened, as it did, without the forethought of either of you) that Allah might conclude a thing that must be done; that he who perished (on that day) might perish by a clear proof (of His Sovereignty) and he who survived might survive by a clear proof (of His Sovereignty). Lo! Allah in truth is Hearer, Knower.`,"8:43":`When Allah showed them unto thee (O Muhammad) in thy dream as few in number, and if He had shown them to thee as many, ye (Muslims) would have faltered and would have quarrelled over the affair. But Allah saved (you). Lo! He knoweth what is in the breasts (of men).`,"8:44":`And when He made you (Muslims), when ye met (them), see them with your eyes as few, and lessened you in their eyes, (it was) that Allah might conclude a thing that must be done. Unto Allah all things are brought back.`,"8:45":`O ye who believe! When ye meet an army, hold firm and think of Allah much, that ye may be successful.`,"8:46":`And obey Allah and His messenger, and dispute not one with another lest ye falter and your strength depart from you; but be steadfast! Lo! Allah is with the steadfast.`,"8:47":`Be not as those who came forth from their dwellings boastfully and to be seen of men, and debar (men) from the way of Allah, while Allah is surrounding all they do.`,"8:48":`And when Satan made their deeds seem fair to them and said: No-one of mankind can conquer you this day, for I am your protector. But when the armies came in sight of one another, he took flight, saying: Lo! I am guiltless of you. Lo! I see that which ye see not. Lo! I fear Allah. And Allah is severe in punishment.`,"22:39":`Sanction is given unto those who fight because they have been wronged; and Allah is indeed Able to give them victory;`,"22:40":`Those who have been driven from their homes unjustly only because they said: Our Lord is Allah - For had it not been for Allah's repelling some men by means of others, cloisters and churches and oratories and mosques, wherein the name of Allah is oft mentioned, would assuredly have been pulled down. Verily Allah helpeth one who helpeth Him. Lo! Allah is Strong, Almighty -`,"54:45":`The hosts will all be routed and will turn and flee.`}},nm={3:{number:3,name:`Al 'Imran`,nameAr:`آل عمران`},8:{number:8,name:`Al-Anfal`,nameAr:`الأنفال`},22:{number:22,name:`Al-Hajj`,nameAr:`الحج`},54:{number:54,name:`Al-Qamar`,nameAr:`القمر`}},rm=[{surah:3,from:123,to:127},{surah:8,from:5,to:19}],im=[{surah:22,from:39,to:40},{surah:8,from:26,to:26},{surah:8,from:30,to:30},{surah:8,from:41,to:48},{surah:3,from:13,to:13},{surah:54,from:45,to:45}];function am(e){let t=e.meta;return{id:t.id,lang:t.language,name:t.title,translator:t.translator,year:t.firstPublished,license:t.license,sourceUrl:t.sourceUrl,kind:t.kind===`tafsir`?`tafsir`:`translation`,verses:e.verses}}var om={en:tm,ckb:am($p),ar:am(em)};function sm(e=X().lang){return om[e]??tm}function cm(e,t){return`${e}:${t}`}function lm(e){let[t,n]=e.split(`:`);return{surah:Number(t),ayah:Number(n)}}function um(e){return Qp[e]??``}function dm(e,t=X().lang){return sm(t).verses[e]??``}function fm(e){let t=[];for(let n=e.from;n<=e.to;n++)t.push(cm(e.surah,n));return t}function pm(){return X().digits===`arab`}function mm(e){return nm[e]?.nameAr??Gu(e)}function hm(e){let{surah:t,ayah:n}=lm(e);if(pm())return`${mm(t)}: ${Gu(n)}`;let r=nm[t];return`${r?r.name+` `:``}${t}:${n}`}function gm(e){if(pm())return`${mm(e.surah)}: ${Gu(e.from)}${e.from===e.to?``:`–${Gu(e.to)}`}`;let t=nm[e.surah],n=e.from===e.to?`${e.from}`:`${e.from}–${e.to}`;return`${t?t.name+` `:``}${e.surah}:${n}`}function _m(e){return pm()?Gu(lm(e).ayah):e}function vm(e,t,n=X().lang){let r=e[t+1];if(r===void 0)return!1;let i=dm(e[t],n),a=dm(r,n);return a!==``&&i===a}function ym(e){let t=[],n=0;for(;n<e.length;){let{surah:r,ayah:i}=lm(e[n]),a=i,o=n+1;for(;o<e.length;){let t=lm(e[o]);if(t.surah!==r||t.ayah!==a+1)break;a=t.ayah,o++}pm()?t.push(gm({surah:r,from:i,to:a})):t.push(a===i?`${r}:${i}`:`${r}:${i}–${a}`),n=o}return t.join(pm()?`؛ `:`; `)}function bm(e){let t=[...new Set(e)].sort((e,t)=>{let n=lm(e),r=lm(t);return n.surah-r.surah||n.ayah-r.ayah}),n=[];for(let e of t){let{surah:t,ayah:r}=lm(e),i=n[n.length-1];i&&i.surah===t&&i.to===r-1?i.to=r:n.push({surah:t,from:r,to:r})}return n}function xm(e){let{surah:t,ayah:n}=lm(e);return`https://quran.com/${t}/${n}`}function $(e,t={},n=[]){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.id&&(r.id=t.id),t.role&&r.setAttribute(`role`,t.role),t.type&&r.setAttribute(`type`,t.type),t.title&&(r.title=t.title),t.lang&&(r.lang=t.lang),t.dir&&(r.dir=t.dir),t.href&&r.setAttribute(`href`,t.href),t.target&&r.setAttribute(`target`,t.target),t.rel&&r.setAttribute(`rel`,t.rel),t.hidden&&(r.hidden=!0),t.disabled&&r.setAttribute(`disabled`,``),t.tabindex!==void 0&&(r.tabIndex=t.tabindex),t.aria)for(let[e,n]of Object.entries(t.aria))r.setAttribute(`aria-${e}`,n);if(t.data)for(let[e,n]of Object.entries(t.data))r.dataset[e]=n;if(t.on)for(let[e,n]of Object.entries(t.on))r.addEventListener(e,n);return Sm(r,n),r}function Sm(e,t){for(let n of t)n!=null&&n!==!1&&e.appendChild(typeof n==`string`?document.createTextNode(n):n)}function Cm(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function wm(e,t){e.textContent!==t&&(e.textContent=t)}var Tm=`http://www.w3.org/2000/svg`,Em={book:[`M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5C4.7 20 4 19.3 4 18.5z`,`M20 5.5C20 4.7 19.3 4 18.5 4H13v16h5.5c.8 0 1.5-.7 1.5-1.5z`],list:[`M9 6h11`,`M9 12h11`,`M9 18h11`,`M4.5 6h.01`,`M4.5 12h.01`,`M4.5 18h.01`],help:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z`,`M9.6 9.2a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.6`,`M12 17h.01`],gear:[`M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z`,`M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.5-2-3.4-2.3.9a7.6 7.6 0 0 0-2.6-1.5L14.1 2h-4.2l-.4 2.5A7.6 7.6 0 0 0 6.9 6l-2.3-.9-2 3.4 2 1.5a7.6 7.6 0 0 0 0 3l-2 1.5 2 3.4 2.3-.9a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4.2l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.3.9 2-3.4z`],pause:[`M8 5v14`,`M16 5v14`],play:[`M7 4.5v15l12-7.5z`],prev:[`M15 6l-6 6 6 6`],next:[`M9 6l6 6-6 6`],replay:[`M4 12a8 8 0 1 0 2.4-5.7`,`M4 4v4h4`],close:[`M6 6l12 12`,`M18 6L6 18`],walk:[`M13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z`,`M9.5 21l2-6 2.5 2.5V21`,`M8 10l3-3 3 2 2.5 3`,`M11 7l-1 5 2.5 2`],eye:[`M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z`,`M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z`],home:[`M3 11l9-7 9 7`,`M5 10v10h14V10`],film:[`M4 5h16v14H4z`,`M4 9h16`,`M4 15h16`,`M8 5v4`,`M16 5v4`,`M8 15v4`,`M16 15v4`],heart:[`M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z`]};function Dm(e,t=22){let n=document.createElementNS(Tm,`svg`);n.setAttribute(`viewBox`,`0 0 24 24`),n.setAttribute(`width`,String(t)),n.setAttribute(`height`,String(t)),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.8`),n.setAttribute(`stroke-linecap`,`round`),n.setAttribute(`stroke-linejoin`,`round`),n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`focusable`,`false`);for(let t of Em[e]??[]){let r=document.createElementNS(Tm,`path`);r.setAttribute(`d`,t),e===`play`&&r.setAttribute(`fill`,`currentColor`),n.appendChild(r)}return n}function Om(e){return String(e).replace(/[0-9]/g,e=>`٠١٢٣٤٥٦٧٨٩`[Number(e)])}function km(e){return Array.from(e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)).filter(e=>!e.hidden&&e.offsetParent!==null)}var Am=[`quran`,`summary`,`history`,`interpretation`,`reconstruction`,`symbolic`],jm=class{constructor(e,t,n,r){q(this,`root`,void 0),q(this,`layer`,void 0),q(this,`handlers`,void 0),q(this,`settings`,void 0),q(this,`opts`,void 0),q(this,`mode`,`loading`),q(this,`chapterIndex`,0),q(this,`playing`,!1),q(this,`stack`,[]),q(this,`panelWasOpen`,!1),q(this,`toastTimer`,0),q(this,`lastCaption`,null),q(this,`screen`,void 0),q(this,`loadingBar`,null),q(this,`loadingMsg`,null),q(this,`hud`,void 0),q(this,`chapterNum`,void 0),q(this,`chapterTitle`,void 0),q(this,`chapterSub`,void 0),q(this,`chapterRefs`,void 0),q(this,`caption`,void 0),q(this,`captionBadge`,void 0),q(this,`captionText`,void 0),q(this,`captionRefs`,void 0),q(this,`crosshair`,void 0),q(this,`prompt`,void 0),q(this,`promptText`,void 0),q(this,`inspectBtn`,void 0),q(this,`transport`,void 0),q(this,`playBtn`,void 0),q(this,`speedBtn`,void 0),q(this,`progressFill`,void 0),q(this,`progress`,void 0),q(this,`timeline`,void 0),q(this,`timelineItems`,[]),q(this,`timelineFill`,[]),q(this,`timelineGroups`,[]),q(this,`freeBar`,void 0),q(this,`lookHint`,void 0),q(this,`dayChip`,void 0),q(this,`toastEl`,void 0),q(this,`dialogs`,void 0),q(this,`onKeyDown`,e=>this.handleKey(e)),this.root=e,this.handlers=t,this.settings=n,this.opts=r;let i=X().ui;this.layer=$(`div`,{class:`bd-ui`}),this.root.appendChild(this.layer),this.root.classList.toggle(`bd-touch`,r.touch),this.chapterNum=$(`span`,{class:`bd-chapter-num`}),this.chapterTitle=$(`span`,{class:`bd-chapter-title`}),this.chapterSub=$(`span`,{class:`bd-chapter-sub`}),this.chapterRefs=$(`button`,{class:`bd-chapter-refs`,type:`button`,on:{click:()=>this.openChapterVerses()}});let a=$(`div`,{class:`bd-chapter-card`},[$(`button`,{class:`bd-chapter-head`,type:`button`,aria:{label:i.hud.chapters},on:{click:()=>this.openChapters()}},[this.chapterNum,this.chapterTitle,this.chapterSub]),this.chapterRefs]),o=$(`div`,{class:`bd-hud-actions`},[this.iconButton(`book`,i.hud.verses,()=>this.openChapterVerses()),this.iconButton(`list`,i.hud.chapters,()=>this.openChapters()),this.iconButton(`heart`,i.hud.reflection,()=>this.openReflection()),this.iconButton(`help`,i.hud.help,()=>this.openHelp()),this.iconButton(`gear`,i.hud.settings,()=>this.openSettings()),this.iconButton(`pause`,i.hud.pause,()=>this.userPause())]);this.captionBadge=$(`span`,{class:`bd-badge`}),this.captionText=$(`span`,{class:`bd-caption-text`}),this.captionRefs=$(`span`,{class:`bd-caption-refs`}),this.caption=$(`button`,{class:`bd-caption`,type:`button`,aria:{live:`polite`},title:i.hud.captionHint,on:{click:()=>this.openCaptionVerses()}},[this.captionBadge,this.captionText,this.captionRefs]),this.caption.hidden=!0,this.crosshair=$(`div`,{class:`bd-crosshair`,aria:{hidden:`true`}}),this.promptText=$(`span`,{class:`bd-prompt-text`}),this.prompt=$(`div`,{class:`bd-prompt`,aria:{live:`polite`}},[$(`kbd`,{},[i.hud.inspectKey]),this.promptText]),this.prompt.hidden=!0,this.inspectBtn=$(`button`,{class:`bd-inspect-btn`,type:`button`,on:{click:()=>this.handlers.inspect()}}),this.inspectBtn.hidden=!0,this.playBtn=this.iconButton(`pause`,i.transport.pause,()=>this.handlers.togglePlay(),`bd-tbtn bd-tbtn-play`),this.speedBtn=$(`button`,{class:`bd-tbtn bd-tbtn-speed`,type:`button`,on:{click:()=>this.cycleSpeed()}}),this.progressFill=$(`div`,{class:`bd-progress-fill`}),this.progress=$(`div`,{class:`bd-progress`,role:`progressbar`,aria:{label:i.transport.progress,valuemin:`0`,valuemax:`100`,valuenow:`0`}},[this.progressFill]),this.transport=$(`div`,{class:`bd-transport`,role:`toolbar`,aria:{label:i.hud.narration}},[this.progress,$(`div`,{class:`bd-transport-row`},[this.iconButton(`prev`,i.transport.prev,()=>this.handlers.prev(),`bd-tbtn bd-tbtn-dir`),this.playBtn,this.iconButton(`replay`,i.transport.replay,()=>this.handlers.replay(),`bd-tbtn`),this.iconButton(`next`,i.transport.next,()=>this.handlers.next(),`bd-tbtn bd-tbtn-dir`),this.speedBtn,$(`span`,{class:`bd-transport-spacer`}),$(`button`,{class:`bd-btn bd-btn-ghost bd-explore-btn`,type:`button`,title:i.transport.exploreHint,on:{click:()=>this.handlers.exploreHere()}},[Dm(`walk`,18),$(`span`,{},[i.transport.explore])])])]),this.timeline=$(`nav`,{class:`bd-timeline`,aria:{label:i.hud.timeline}});let s=X().content;for(let e of Su){let t=$(`div`,{class:`bd-tl-stage`,title:s.stages[e]},[$(`span`,{class:`bd-tl-stage-label`,aria:{hidden:`true`}},[s.stagesShort[e]])]),n=$(`div`,{class:`bd-tl-row`});bu.forEach((t,r)=>{if(t.stage!==e)return;let a=$(`div`,{class:`bd-tl-fill`}),o=Yu(i.hud.timelineGo,{n:r+1,title:s.chapters[t.id].title}),c=$(`button`,{class:`bd-tl-item`,type:`button`,title:o,aria:{label:o},on:{click:()=>this.handlers.selectChapter(r)}},[a,$(`span`,{class:`bd-tl-n`},[Gu(r+1)]),$(`span`,{class:`bd-tl-title`},[s.chapters[t.id].short])]);this.timelineItems[r]=c,this.timelineFill[r]=a,n.appendChild(c)}),t.appendChild(n);let r=bu.map((t,n)=>t.stage===e?n:-1).filter(e=>e>=0);this.timelineGroups.push({el:t,chapters:r}),t.style.flex=`${r.length} 1 0`,this.timeline.appendChild(t)}this.freeBar=$(`div`,{class:`bd-freebar`},[$(`button`,{class:`bd-btn bd-btn-ghost`,type:`button`,on:{click:()=>this.handlers.watchGuided()}},[Dm(`film`,18),$(`span`,{},[i.hud.watchChapter])])]),this.lookHint=$(`button`,{class:`bd-look-hint`,type:`button`,on:{click:()=>this.handlers.requestLook()}},[$(`span`,{class:`bd-look-title`},[Dm(`eye`,22),i.hud.lookTitle]),$(`span`,{class:`bd-look-body`},[i.hud.lookBody])]),this.lookHint.hidden=!0,this.dayChip=$(`div`,{class:`bd-daychip`,role:`status`,aria:{live:`polite`}}),this.dayChip.hidden=!0,this.hud=$(`div`,{class:`bd-hud`},[$(`div`,{class:`bd-hud-top`},[$(`div`,{class:`bd-hud-left`},[a,this.dayChip]),o]),this.crosshair,this.lookHint,$(`div`,{class:`bd-hud-bottom`},[this.prompt,this.inspectBtn,this.caption,this.transport,this.timeline,this.freeBar])]),this.toastEl=$(`div`,{class:`bd-toast`,role:`status`,aria:{live:`polite`}}),this.dialogs=$(`div`,{class:`bd-dialogs`}),this.screen=$(`div`,{class:`bd-screen`}),Sm(this.layer,[this.hud,this.toastEl,this.screen,this.dialogs]),window.addEventListener(`keydown`,this.onKeyDown),this.applySettingsToRoot(),this.updateSpeedButton(),this.setMode(`loading`)}setLoading(e,t){let n=X().ui;this.loadingBar||(Cm(this.screen),this.loadingBar=$(`div`,{class:`bd-loading-fill`}),this.loadingMsg=$(`p`,{class:`bd-loading-msg`,aria:{live:`polite`}}),this.screen.appendChild($(`div`,{class:`bd-loading`},[$(`h1`,{class:`bd-title`},[n.app.title]),$(`p`,{class:`bd-loading-label`},[n.app.loading.title]),$(`div`,{class:`bd-loading-bar`,role:`progressbar`,aria:{label:n.app.loading.title,valuemin:`0`,valuemax:`100`}},[this.loadingBar]),this.loadingMsg])));let r=Math.round(Math.max(0,Math.min(1,e))*100);this.loadingBar.style.width=`${r}%`,this.loadingBar.parentElement?.setAttribute(`aria-valuenow`,String(r)),this.loadingBar.parentElement?.setAttribute(`aria-valuetext`,`${Gu(r)}%`),this.loadingMsg&&wm(this.loadingMsg,t)}showIntro(){let e=X().ui,t=X().content;this.loadingBar=null,Cm(this.screen);let n=$(`ul`,{class:`bd-legend`});for(let e of Am)n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));let r=$(`button`,{class:`bd-btn bd-btn-primary bd-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`guided`)}},[$(`span`,{class:`bd-btn-label`},[e.intro.begin]),$(`span`,{class:`bd-btn-hint`},[e.intro.beginHint])]),i=$(`div`,{class:`bd-intro`,role:`region`,aria:{label:e.app.title}},[this.languagePicker(),$(`p`,{class:`bd-kicker`},[e.intro.kicker]),$(`h1`,{class:`bd-title`},[e.app.title]),$(`p`,{class:`bd-lead`},[e.intro.lead]),$(`div`,{class:`bd-intro-actions`},[r,$(`button`,{class:`bd-btn bd-btn-secondary bd-btn-big`,type:`button`,on:{click:()=>this.handlers.start(`free`)}},[$(`span`,{class:`bd-btn-label`},[e.intro.explore]),$(`span`,{class:`bd-btn-hint`},[e.intro.exploreHint])])]),$(`div`,{class:`bd-intro-links`},[this.textButton(e.intro.chapters,()=>this.openChapters()),this.textButton(e.intro.settings,()=>this.openSettings()),this.textButton(e.intro.controls,()=>this.openHelp()),this.textButton(e.intro.about,()=>this.openAbout())]),$(`details`,{class:`bd-intro-details`},[$(`summary`,{},[e.intro.legendTitle]),n,$(`p`,{class:`bd-note`},[e.intro.unseenNote])]),$(`p`,{class:`bd-note`},[e.intro.depiction]),$(`p`,{class:`bd-note`},[e.intro.sensitiveNote]),$(`p`,{class:`bd-note bd-note-dim`},[e.intro.soundNote]),$(`a`,{class:`bd-exit-link`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Dm(`home`,16),e.intro.exit])]);this.screen.appendChild(i),this.setMode(`intro`),requestAnimationFrame(()=>r.focus({preventScroll:!0}))}showFallback(e,t){let n=X().ui,r=X().content;this.closePanels(),this.loadingBar=null,Cm(this.screen);let i=e===`no-webgl`?n.fallback.noWebglTitle:e===`context-lost`?n.fallback.lostTitle:n.fallback.errorTitle,a=e===`no-webgl`?n.fallback.noWebgl:e===`context-lost`?n.fallback.lost:n.fallback.error,o=$(`div`,{class:`bd-story`});bu.forEach((e,t)=>{let i=r.chapters[e.id],a=$(`section`,{class:`bd-story-chapter`},[$(`h3`,{},[`${Gu(t+1)}. ${i.title}`]),$(`p`,{class:`bd-chapter-sub`},[i.subtitle])]);for(let t of e.cues)a.appendChild(this.sourceBlock(t.kind,i.cues[t.key]??``,t.refs,t.sources));a.appendChild(this.textButton(n.fallback.readVerses,()=>this.openVerses(e.reading))),o.appendChild(a)});let s=$(`div`,{class:`bd-intro-actions`});e!==`no-webgl`&&s.appendChild($(`button`,{class:`bd-btn bd-btn-primary`,type:`button`,on:{click:()=>window.location.reload()}},[n.fallback.reload])),s.appendChild($(`a`,{class:`bd-btn bd-btn-secondary`,href:this.opts.mainSiteUrl},[n.intro.exit])),this.screen.appendChild($(`div`,{class:`bd-fallback`,role:`region`,aria:{label:i}},[$(`h1`,{class:`bd-title`},[i]),$(`p`,{class:`bd-lead`},[a]),t?$(`p`,{class:`bd-note bd-note-dim`},[t]):null,s,$(`h2`,{},[n.fallback.storyTitle]),o])),this.setMode(`fallback`)}showCompletion(){let e=X().ui;Cm(this.screen);let t=$(`button`,{class:`bd-btn bd-btn-primary`,type:`button`,on:{click:()=>this.handlers.exploreHere()}},[Dm(`walk`,18),$(`span`,{},[e.complete.explore])]);this.screen.appendChild($(`div`,{class:`bd-complete`,role:`region`,aria:{label:e.complete.title}},[$(`h1`,{class:`bd-title`},[e.complete.title]),$(`p`,{class:`bd-lead`},[e.complete.body]),this.sourceBlock(`quran`,X().content.chapters.reflection.cues.r1,[`8:26`]),$(`div`,{class:`bd-intro-actions`},[t,$(`button`,{class:`bd-btn bd-btn-secondary`,type:`button`,on:{click:()=>this.handlers.restartExperience()}},[e.complete.restart])]),$(`div`,{class:`bd-intro-links`},[this.textButton(e.complete.passages,()=>this.openVerses(rm)),this.textButton(e.complete.reflection,()=>this.openReflection()),this.textButton(e.intro.about,()=>this.openAbout()),$(`a`,{class:`bd-text-btn`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[e.intro.exit])])])),requestAnimationFrame(()=>t.focus({preventScroll:!0}))}setMode(e){this.mode=e,this.root.dataset.mode=e,(e===`guided`||e===`free`)&&Cm(this.screen),e!==`guided`&&this.setCaption(null),e!==`free`&&this.setFocus(null)}setChapter(e){this.chapterIndex=e;let t=bu[e],n=X().content.chapters[t.id];wm(this.chapterNum,Yu(X().ui.hud.chapterOf,{n:e+1,total:bu.length})),wm(this.chapterTitle,n.title),wm(this.chapterSub,n.subtitle),wm(this.chapterRefs,ym(t.refs)),this.chapterRefs.setAttribute(`aria-label`,`${X().ui.hud.readVerses}: ${ym(t.refs)}`),this.timelineItems.forEach((t,n)=>{t.classList.toggle(`is-current`,n===e),t.classList.toggle(`is-done`,n<e),n===e?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`),this.timelineFill[n].style.width=n<e?`100%`:`0%`});for(let t of this.timelineGroups)t.el.style.flex=`${t.chapters.length+(t.chapters.includes(e)?2:0)} 1 0`}setGuidedState(e,t){let n=X().ui.transport;if(e!==this.playing){this.playing=e,Cm(this.playBtn),this.playBtn.appendChild(Dm(e?`pause`:`play`));let t=e?n.pause:n.play;this.playBtn.setAttribute(`aria-label`,t),this.playBtn.title=t}let r=Math.round(Math.max(0,Math.min(1,t))*1e3)/10;this.progressFill.style.width=`${r}%`,this.progress.setAttribute(`aria-valuenow`,String(Math.round(r))),this.progress.setAttribute(`aria-valuetext`,`${Gu(Math.round(r))}%`);let i=this.timelineFill[this.chapterIndex];i&&(i.style.width=`${r}%`)}setCaption(e){if(this.lastCaption=e,!e||!e.text){this.caption.hidden=!0;return}Cm(this.captionBadge),this.captionBadge.className=`bd-badge bd-badge-${e.kind}`,wm(this.captionBadge,X().content.sourceKinds[e.kind].label);let t=e.kind===`quran`;wm(this.captionText,t?Ju(e.text):e.text),this.captionText.classList.toggle(`is-quote`,t);let n=[this.refLabel(e.refs),this.sourceLabel(e.sources)].filter(Boolean);wm(this.captionRefs,n.join(Ku())),this.caption.classList.toggle(`has-refs`,n.length>0),this.caption.hidden=!1,this.caption.classList.remove(`is-new`),this.caption.offsetWidth,this.caption.classList.add(`is-new`)}setFocus(e){if(!(e&&this.mode===`free`)){this.prompt.hidden=!0,this.inspectBtn.hidden=!0,this.crosshair.classList.remove(`is-active`);return}let t=X().content.objects[e].name;this.crosshair.classList.add(`is-active`),this.opts.touch?(wm(this.inspectBtn,Yu(X().ui.hud.inspectWhat,{name:t})),this.inspectBtn.hidden=!1,this.prompt.hidden=!0):(wm(this.promptText,Yu(X().ui.hud.inspectWhat,{name:t})),this.prompt.hidden=!1,this.inspectBtn.hidden=!0)}setLookHint(e){this.lookHint.hidden=!e}setDayChip(e){e?(wm(this.dayChip,e),this.dayChip.hidden=!1):this.dayChip.hidden=!0}setPaused(e){e&&!this.hasDialog(`pause`)?this.pushDialog(`pause`,this.buildPause(),!1):!e&&this.hasDialog(`pause`)&&this.removeDialog(`pause`,!1)}openInfo(e){let t=Hp[e],n=X().content.objects[e],r=X().ui.panels,i=$(`div`,{class:`bd-info`});for(let e of t.sections)i.appendChild(this.sectionBlock(e,n.sections[e.key]??``));let a=$(`div`,{class:`bd-dialog-actions`},[$(`button`,{class:`bd-btn bd-btn-primary`,type:`button`,on:{click:()=>this.openVerses(bm(t.refs),t.refs)}},[Dm(`book`,18),$(`span`,{},[r.infoReadVerses])])]);this.pushDialog(`info`,this.dialog(n.name,[i,a],`bd-dialog-info`))}openVerses(e,t){let n=X().ui.panels,r=e.length?e:bu[this.chapterIndex].reading,i=$(`div`,{class:`bd-verses`}),a=$(`button`,{class:`bd-tab`,type:`button`,role:`tab`},[n.versesThisChapter]),o=$(`button`,{class:`bd-tab`,type:`button`,role:`tab`},[n.versesAll]),s=$(`button`,{class:`bd-tab`,type:`button`,role:`tab`},[n.versesSupporting]),c=(e,t)=>{Cm(i);let c=null;for(let r of e){let e=X().digits===`arab`?null:$(`span`,{lang:`ar`,dir:`rtl`,class:`bd-surah-ar`},[nm[r.surah]?.nameAr??``]);i.appendChild($(`h3`,{class:`bd-verse-range`},[gm(r),e?` `:null,e]));let a=fm(r);a.forEach((e,r)=>{let{ayah:o}=lm(e),s=!!t&&t.includes(e),l=$(`article`,{class:`bd-verse${s?` is-highlight`:``}`,aria:{label:hm(e)}},[$(`p`,{class:`bd-arabic`,lang:`ar`,dir:`rtl`},[um(e),` `,$(`span`,{class:`bd-ayah-mark`},[`﴿${Om(o)}﴾`])]),vm(a,r)?null:this.translationBlock(e),$(`a`,{class:`bd-qc-link`,href:xm(e),target:`_blank`,rel:`noopener noreferrer`,dir:`ltr`,title:Yu(n.quranCom,{ref:hm(e)})},[`quran.com/${e.replace(`:`,`/`)} ↗`])]);s&&!c&&(c=l),i.appendChild(l)})}a.setAttribute(`aria-selected`,String(e===r)),o.setAttribute(`aria-selected`,String(e===rm)),s.setAttribute(`aria-selected`,String(e===im)),i.scrollTop=0,c&&requestAnimationFrame(()=>c.scrollIntoView({block:`center`}))};a.addEventListener(`click`,()=>c(r,t)),o.addEventListener(`click`,()=>c(rm,t)),s.addEventListener(`click`,()=>c(im,t));let l=$(`div`,{class:`bd-tabs`,role:`tablist`},[a,o,s]),u=$(`div`,{class:`bd-sources`},[$(`p`,{},[n.versesArabicSource,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[n.tanzilLink])]),$(`p`,{},[n.versesTranslationSource]),$(`p`,{class:`bd-note-dim`},[n.versesNote])]);this.pushDialog(`verses`,this.dialog(n.versesTitle,[l,i,u],`bd-dialog-verses`)),c(r,t)}openChapters(){let e=X().ui.panels,t=X().content,n=$(`ol`,{class:`bd-chapters`}),r=``;bu.forEach((i,a)=>{i.stage!==r&&(r=i.stage,n.appendChild($(`li`,{class:`bd-stage-head`,aria:{hidden:`true`}},[t.stages[i.stage]])));let o=t.chapters[i.id],s=a===this.chapterIndex&&(this.mode===`guided`||this.mode===`free`),c=$(`button`,{class:`bd-chapter-item${s?` is-current`:``}`,type:`button`,aria:s?{current:`step`,label:Yu(e.chapterGo,{n:a+1})}:{label:Yu(e.chapterGo,{n:a+1})},on:{click:()=>{this.closePanels(),this.handlers.selectChapter(a)}}},[$(`span`,{class:`bd-chapter-n`},[Gu(a+1)]),$(`span`,{class:`bd-chapter-text`},[$(`span`,{class:`bd-chapter-title`},[o.title]),$(`span`,{class:`bd-chapter-sub`},[o.subtitle]),$(`span`,{class:`bd-chapter-refs-small`},[ym(i.refs)])]),s?$(`span`,{class:`bd-chapter-current`},[e.chapterCurrent]):null]);n.appendChild($(`li`,{},[c]))}),this.pushDialog(`chapters`,this.dialog(e.chaptersTitle,[$(`p`,{class:`bd-note`},[e.chaptersIntro]),n],`bd-dialog-chapters`))}openHelp(){let e=X().ui.help,t=e=>$(`table`,{class:`bd-keys`},[$(`tbody`,{},e.map(([e,t])=>$(`tr`,{},[$(`th`,{aria:{label:e}},[$(`kbd`,{},[e])]),$(`td`,{},[t])])))]),n=$(`section`,{},[$(`h3`,{},[e.desktop]),t(e.rows)]),r=$(`section`,{},[$(`h3`,{},[e.touch]),t(e.touchRows)]),i=this.opts.touch?[r,n]:[n,r];this.pushDialog(`help`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.guidedTitle]),$(`p`,{},[e.guided])]),...i,$(`p`,{class:`bd-note`},[e.tip])],`bd-dialog-help`))}openSettings(){let e=X().ui.settings,t=this.settings,n=(e,t)=>{this.settings={...this.settings,[e]:t},this.applySettingsToRoot(),this.handlers.settingsChanged(this.settings,[e])},r=(e,r,i,a,o)=>{let s=`bd-set-${String(e)}`,c=$(`select`,{id:s,on:{change:()=>n(e,a(c.value))}});for(let[n,r]of i){let i=$(`option`,{},[r]);i.value=n,String(t[e])===n&&(i.selected=!0),c.appendChild(i)}let l=$(`label`,{class:`bd-field`},[$(`span`,{class:`bd-field-label`},[r]),c,o?$(`span`,{class:`bd-field-note`},[o]):null]);return l.htmlFor=s,l},i=(e,r)=>{let i=$(`input`,{type:`checkbox`,on:{change:()=>n(e,i.checked)}});return i.checked=t[e],$(`label`,{class:`bd-field bd-field-check`},[i,$(`span`,{},[r])])},a=(e,r,i,a,o)=>{let s=$(`input`,{type:`range`,on:{input:()=>n(e,Number(s.value))}});return s.min=String(i),s.max=String(a),s.step=String(o),s.value=String(t[e]),$(`label`,{class:`bd-field`},[$(`span`,{class:`bd-field-label`},[r]),s])};this.pushDialog(`settings`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.language]),this.languagePicker(),$(`p`,{class:`bd-field-note`},[e.languageNote])]),$(`section`,{},[$(`h3`,{},[e.graphics]),r(`quality`,e.quality,[[`auto`,e.qualityAuto],[`low`,e.qualityLow],[`medium`,e.qualityMedium],[`high`,e.qualityHigh]],e=>e,e.qualityNote)]),$(`section`,{},[$(`h3`,{},[e.sound]),i(`soundEnabled`,e.soundOn),a(`volume`,e.volume,0,1,.05)]),$(`section`,{},[$(`h3`,{},[e.comfort]),r(`reducedMotion`,e.motion,[[`system`,e.motionSystem],[`on`,e.motionOn],[`off`,e.motionOff]],e=>e,e.motionNote),a(`lookSensitivity`,e.sensitivity,.4,2,.1),i(`invertY`,e.invertY),i(`hotspots`,e.markers),r(`sensitive`,e.sensitive,[[`ask`,e.sensitiveAsk],[`distant`,e.sensitiveDistant],[`hidden`,e.sensitiveHidden]],e=>e),r(`textScale`,e.textSize,[[`1`,e.textNormal],[`1.15`,e.textLarge],[`1.3`,e.textLarger]],e=>Number(e))])],`bd-dialog-settings`))}openAbout(){let e=X().ui.about,t=X().content,n=$(`ul`,{class:`bd-legend`});for(let e of Am)n.appendChild($(`li`,{},[this.badge(e),$(`span`,{},[t.sourceKinds[e].description])]));this.pushDialog(`about`,this.dialog(e.title,[$(`section`,{},[$(`h3`,{},[e.purposeTitle]),$(`p`,{},[e.purpose])]),$(`section`,{},[$(`h3`,{},[e.labelsTitle]),n]),$(`section`,{},[$(`h3`,{},[e.depictionTitle]),$(`p`,{},[e.depiction])]),$(`section`,{},[$(`h3`,{},[e.historyTitle]),$(`p`,{},[e.history])]),$(`section`,{},[$(`h3`,{},[e.sourcesTitle]),this.sourceList()]),$(`section`,{},[$(`h3`,{},[e.locationTitle]),$(`p`,{},[e.location])]),$(`section`,{},[$(`h3`,{},[e.textsTitle]),$(`p`,{},[e.arabic,` `,$(`a`,{href:`https://tanzil.net`,target:`_blank`,rel:`noopener noreferrer`},[`tanzil.net`])]),$(`p`,{},[e.translation]),$(`p`,{class:`bd-note-dim`},[e.tanzilNotice]),$(`pre`,{class:`bd-notice`},[Zp])]),$(`section`,{},[$(`h3`,{},[e.assetsTitle]),$(`p`,{},[e.assets])]),$(`section`,{},[$(`h3`,{},[e.limitsTitle]),$(`p`,{},[e.limits])])],`bd-dialog-about`))}sourceList(){let e=$(`ul`,{class:`bd-biblio`});for(let t of Xp){let n=X().content.sources[t],r=Yp[t];e.appendChild($(`li`,{},[r.url?$(`a`,{href:r.url,target:`_blank`,rel:`noopener noreferrer`},[n.title]):$(`span`,{class:`bd-biblio-title`},[n.title]),$(`span`,{class:`bd-biblio-note`},[n.note])]))}return e}openSensitiveNotice(){let e=X().ui.sensitive,t=$(`input`,{type:`checkbox`}),n=!1,r=e=>{n||(n=!0,this.removeDialog(`sensitive`,!1),this.handlers.sensitiveChoice(e,t.checked))},i=(e,t,n)=>$(`button`,{class:`bd-btn ${t}`,type:`button`,on:{click:n}},[e]);this.pushDialog(`sensitive`,this.dialog(e.title,[$(`p`,{},[e.body]),$(`div`,{class:`bd-menu`},[i(e.watch,`bd-btn-primary`,()=>r(`distant`)),i(e.hidden,`bd-btn-secondary`,()=>r(`hidden`)),i(e.skip,`bd-btn-secondary`,()=>r(`skip`))]),$(`label`,{class:`bd-field bd-field-check`},[t,$(`span`,{},[e.remember])])],`bd-dialog-sensitive`,!0,()=>r(`hidden`)))}openReflection(){let e=X().ui.panels,t=X().content,n=$(`div`,{class:`bd-info`},[$(`p`,{class:`bd-note`},[e.reflectionIntro])]),r=[];for(let e of Wp)n.appendChild(this.sourceBlock(e.kind,t.reflection[e.key]??``,e.refs,e.sources)),r.push(...e.refs);let i=$(`div`,{class:`bd-dialog-actions`},[$(`button`,{class:`bd-btn bd-btn-primary`,type:`button`,on:{click:()=>this.openVerses(bm(r),r)}},[Dm(`book`,18),$(`span`,{},[e.infoReadVerses])])]);this.pushDialog(`reflection`,this.dialog(e.reflectionTitle,[n,i],`bd-dialog-info`))}closePanels(){for(;this.stack.length;){let e=this.stack[this.stack.length-1];this.removeDialog(e.kind,e.kind===`pause`)}}get panelOpen(){return this.stack.some(e=>e.kind!==`pause`)}toast(e){wm(this.toastEl,e),this.toastEl.classList.add(`is-visible`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`is-visible`),3400)}setSettings(e){this.settings=e,this.applySettingsToRoot()}dispose(){window.removeEventListener(`keydown`,this.onKeyDown),window.clearTimeout(this.toastTimer),this.layer.remove()}userPause(){(this.mode===`guided`||this.mode===`free`)&&(this.hasDialog(`pause`)||(this.pushDialog(`pause`,this.buildPause(),!1),this.handlers.pauseChanged(!0)))}buildPause(){let e=X().ui.panels,t=$(`button`,{class:`bd-btn bd-btn-primary`,type:`button`,on:{click:()=>this.removeDialog(`pause`,!0)}},[Dm(`play`,18),$(`span`,{},[e.resume])]),n=(e,t)=>$(`button`,{class:`bd-btn bd-btn-secondary`,type:`button`,on:{click:t}},[e]);return this.dialog(e.pauseTitle,[$(`div`,{class:`bd-menu`},[t,n(e.restartChapter,()=>{this.closePanels(),this.handlers.restartChapter()}),n(e.restartAll,()=>{this.closePanels(),this.handlers.restartExperience()}),n(X().ui.hud.chapters,()=>this.openChapters()),n(X().ui.hud.settings,()=>this.openSettings()),n(X().ui.help.title,()=>this.openHelp()),n(X().ui.about.title,()=>this.openAbout()),n(X().ui.panels.reflectionTitle,()=>this.openReflection()),n(e.mainMenu,()=>{this.closePanels(),this.handlers.toIntro()}),$(`a`,{class:`bd-btn bd-btn-ghost`,href:this.opts.mainSiteUrl,on:{click:e=>this.exitClick(e)}},[Dm(`home`,18),$(`span`,{},[e.exitSite])])])],`bd-dialog-pause`,!0,()=>this.removeDialog(`pause`,!0))}exitClick(e){e.preventDefault(),this.handlers.exitToSite()}dialog(e,t,n,r=!0,i){let a=X().ui.panels,o=`bd-dlg-${Math.random().toString(36).slice(2,9)}`,s=$(`button`,{class:`bd-icon-btn bd-dialog-close`,type:`button`,aria:{label:a.close},title:a.close},[Dm(`close`)]),c=()=>{i?i():this.popDialog()};s.addEventListener(`click`,c);let l=$(`div`,{class:`bd-dialog-body`});Sm(l,t);let u=$(`div`,{class:`bd-dialog ${n}`,role:`dialog`,aria:{modal:`true`,labelledby:o}},[$(`header`,{class:`bd-dialog-head`},[$(`h2`,{id:o},[e]),r?s:null]),l]),d=$(`div`,{class:`bd-backdrop`},[u]);return d.addEventListener(`pointerdown`,e=>{e.target===d&&c()}),u.addEventListener(`keydown`,e=>this.trapFocus(e,u)),d}pushDialog(e,t,n=!0){this.hasDialog(e)&&e!==`pause`&&this.removeDialog(e,!1);let r={kind:e,el:t,returnFocus:document.activeElement};for(let e of this.stack)e.el.classList.add(`is-behind`);this.stack.push(r),this.dialogs.appendChild(t);let i=km(t).find(e=>!e.classList.contains(`bd-dialog-close`))??km(t)[0];requestAnimationFrame(()=>(i??t).focus({preventScroll:!0})),n&&this.notifyPanels()}popDialog(){let e=this.stack[this.stack.length-1];e&&this.removeDialog(e.kind,!0)}hasDialog(e){return this.stack.some(t=>t.kind===e)}removeDialog(e,t){let n=this.stack.map(e=>e.kind).lastIndexOf(e);if(n<0)return;let[r]=this.stack.splice(n,1);r.el.remove();let i=this.stack[this.stack.length-1];i&&i.el.classList.remove(`is-behind`);let a=r.returnFocus;a&&document.contains(a)&&typeof a.focus==`function`&&a.focus({preventScroll:!0}),e===`pause`&&t&&this.handlers.pauseChanged(!1),this.notifyPanels()}notifyPanels(){let e=this.panelOpen;e!==this.panelWasOpen&&(this.panelWasOpen=e,this.handlers.panelChanged(e)),this.root.classList.toggle(`bd-has-dialog`,this.stack.length>0)}trapFocus(e,t){if(e.key!==`Tab`)return;let n=km(t);if(!n.length)return;let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}handleKey(e){if(e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target,n=!!t&&(t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`);if(e.key===`Escape`){this.stack.length?(e.preventDefault(),this.popDialog()):(this.mode===`guided`||this.mode===`free`)&&(e.preventDefault(),this.userPause());return}if(n||e.repeat)return;let r=this.mode===`guided`||this.mode===`free`,i=this.stack.length>0;switch(e.code){case`KeyP`:r&&!i&&this.userPause();break;case`KeyH`:this.hasDialog(`help`)||this.openHelp();break;case`KeyV`:!i&&this.mode!==`loading`&&this.openChapterVerses();break;case`KeyC`:case`KeyT`:!i&&this.mode!==`loading`&&this.mode!==`fallback`&&this.openChapters();break;case`Digit1`:case`Digit2`:case`Digit3`:case`Digit4`:case`Digit5`:case`Digit6`:case`Digit7`:case`Digit8`:{let t=Number(e.code.slice(5))-1;!i&&t<bu.length&&(this.mode===`guided`||this.mode===`free`||this.mode===`complete`||this.mode===`intro`)&&this.handlers.selectChapter(t);break}case`Space`:this.mode===`guided`&&!i&&t?.tagName!==`BUTTON`&&(e.preventDefault(),this.handlers.togglePlay());break;case`KeyN`:this.mode===`guided`&&!i&&this.handlers.next();break;case`KeyB`:this.mode===`guided`&&!i&&this.handlers.prev()}}openChapterVerses(){let e=bu[this.chapterIndex];this.openVerses(e.reading,e.refs)}openCaptionVerses(){let e=this.lastCaption;!e||e.refs.length===0?this.openChapterVerses():this.openVerses(bm(e.refs),e.refs)}refLabel(e){return e.length?e.length===1?hm(e[0]):ym(e):``}badge(e){return $(`span`,{class:`bd-badge bd-badge-${e}`},[X().content.sourceKinds[e].label])}sourceBlock(e,t,n,r){let i=e===`quran`,a=n.length?$(`p`,{class:`bd-source-ref`},[`— `,$(`button`,{class:`bd-ref-link`,type:`button`,on:{click:()=>this.openVerses(bm(n),n)}},[this.refLabel(n)])]):null;return $(`div`,{class:`bd-source bd-source-${e}`},[this.badge(e),$(i?`blockquote`:`p`,{class:`bd-source-text`},[i?Ju(t):t]),a,r&&r.length?this.sourceLinks(r):null])}sectionBlock(e,t){return this.sourceBlock(e.kind,t,e.refs,e.sources)}sourceLabel(e){return!e||!e.length?``:qu(e.map(e=>X().content.sources[e].short))}sourceLinks(e){let t=X().ui,n=$(`p`,{class:`bd-source-cite`},[`${t.hud.sourcesLabel}: `]);return e.forEach((e,r)=>{let i=Yp[e],a=X().content.sources[e].short;r>0&&n.appendChild(document.createTextNode(X().dir===`rtl`?`، `:`, `)),i.url?n.appendChild($(`a`,{href:i.url,target:`_blank`,rel:`noopener noreferrer`,title:Yu(t.panels.sourceOpen,{name:a})},[a])):n.appendChild(document.createTextNode(a))}),n}translationBlock(e){let t=sm(),n=t.lang===`ar`||t.lang===`ckb`?`rtl`:`ltr`,r=t.kind===`tafsir`?$(`span`,{class:`bd-tafsir-label`},[X().ui.panels.tafsirLabel]):null;return $(`p`,{class:`bd-translation${r?` bd-tafsir`:``}`,lang:t.lang,dir:n},[$(`span`,{class:`bd-verse-num`},[_m(e)]),` `,r,r?` `:null,dm(e)])}languagePicker(){let e=X().lang;return $(`div`,{class:`bd-lang`,role:`group`,aria:{label:X().ui.settings.language}},Lu.map(t=>$(`button`,{class:`bd-btn bd-btn-ghost bd-lang-btn${t.code===e?` is-active`:``}`,type:`button`,lang:t.code,dir:t.code===`en`?`ltr`:`rtl`,aria:{pressed:t.code===e?`true`:`false`},on:{click:()=>t.code===e?void 0:Hu(t.code)}},[t.name])))}iconButton(e,t,n,r=`bd-icon-btn`){return $(`button`,{class:r,type:`button`,title:t,aria:{label:t},on:{click:n}},[Dm(e)])}textButton(e,t){return $(`button`,{class:`bd-text-btn`,type:`button`,on:{click:t}},[e])}cycleSpeed(){let e=Vl.indexOf(this.settings.playbackSpeed);this.settings={...this.settings,playbackSpeed:Vl[(e+1)%Vl.length]},this.handlers.settingsChanged(this.settings,[`playbackSpeed`]),this.updateSpeedButton()}updateSpeedButton(){let e=this.settings.playbackSpeed,t=Gu(e),n=`${t===String(e)?t:t.replace(`.`,`٫`)}×`,r=`${X().ui.transport.speed}: ${n}`;wm(this.speedBtn,n),this.speedBtn.setAttribute(`aria-label`,r),this.speedBtn.title=r,this.speedBtn.classList.toggle(`is-fast`,e!==1)}applySettingsToRoot(){this.root.style.setProperty(`--bd-text-scale`,String(this.settings.textScale)),this.root.classList.toggle(`bd-reduce-motion`,ql(this.settings))}},Mm=()=>new Promise(e=>{let t=!1,n=()=>{t||(t=!0,e())};requestAnimationFrame(n),setTimeout(n,60)}),Nm=class{constructor(e,t){q(this,`root`,void 0),q(this,`opts`,void 0),q(this,`listeners`,new Jl),q(this,`listenersCleanup`,[]),q(this,`settings`,Wl()),q(this,`touch`,Rl()),q(this,`ui`,void 0),q(this,`renderer`,null),q(this,`scene`,new Gn),q(this,`camera`,new Ha(55,1,.3,7e3)),q(this,`uniforms`,Nl()),q(this,`quality`,Ll.medium),q(this,`dynRes`,null),q(this,`m`,null),q(this,`timeline`,new Xu(bu)),q(this,`director`,new Ld(this.camera)),q(this,`player`,null),q(this,`interactions`,null),q(this,`audio`,new Ap),q(this,`resizeObserver`,null),q(this,`canvasHost`,void 0),q(this,`touchRoot`,void 0),q(this,`fadeEl`,void 0),q(this,`mode`,`loading`),q(this,`paused`,!1),q(this,`running`,!1),q(this,`disposed`,!1),q(this,`reducedMotion`,!1),q(this,`time`,0),q(this,`lastNow`,0),q(this,`holdAfterEnd`,0),q(this,`resumeAfterPanel`,!1),q(this,`panelOpen`,!1),q(this,`transitioning`,!1),q(this,`focusId`,null),q(this,`focusTimer`,0),q(this,`uiTimer`,0),q(this,`lastCueKey`,``),q(this,`lastChip`,``),q(this,`lastToast`,0),q(this,`viewing`,null),q(this,`awaitingNotice`,!1),q(this,`debugView`,null),q(this,`env`,ou()),q(this,`viewer`,{sheltered:!1}),q(this,`ctx`,void 0),q(this,`tmpV`,new H),this.root=e,this.opts=t,Uu(Vu()),this.reducedMotion=ql(this.settings),this.canvasHost=document.createElement(`div`),this.canvasHost.className=`bd-canvas-host`,this.touchRoot=document.createElement(`div`),this.touchRoot.className=`bd-touch-root`,this.fadeEl=document.createElement(`div`),this.fadeEl.className=`bd-fade`,this.fadeEl.setAttribute(`aria-hidden`,`true`),this.root.append(this.canvasHost,this.touchRoot,this.fadeEl),this.ui=new jm(this.root,this.createHandlers(),this.settings,{mainSiteUrl:t.mainSiteUrl,touch:this.touch}),this.ctx={dt:0,time:0,env:this.env,camera:this.camera,quality:this.quality,reducedMotion:this.reducedMotion,viewer:this.viewer}}async boot(){let e=X().ui.app.loading;this.ui.setMode(`loading`),this.ui.setLoading(0,e.renderer);let t=Pm();if(!t.ok)this.ui.showFallback(`no-webgl`);else{try{await this.build(t.gl)}catch(e){console.error(`[badr] Failed to start`,e),this.ui.showFallback(`error`,e instanceof Error?e.message:String(e)),this.dispose();return}this.disposed||(this.attachGlobalListeners(),this.ui.setLoading(1,e.ready),this.enterIntro(),this.startLoop())}}async build(e){let t=X().ui.app.loading,n=async(e,t)=>{this.ui.setLoading(e,t),await Mm()},r=this.settings.quality===`auto`?zl(e):this.settings.quality;Fm(e),this.quality=Ll[r],this.ctx.quality=this.quality;let i=new Ml({antialias:this.quality.antialias,powerPreference:`high-performance`,alpha:!1,stencil:!1});this.renderer=i,i.outputColorSpace=Ke,i.toneMapping=4,i.toneMappingExposure=1,i.shadowMap.enabled=this.quality.shadows,i.shadowMap.type=1,i.domElement.className=`bd-canvas`,i.domElement.setAttribute(`aria-label`,X().ui.app.title),this.canvasHost.appendChild(i.domElement),this.dynRes=new Bl(i,this.quality),this.camera.far=this.quality.drawDistance,this.resize();let a=this.quality,o=this.uniforms;await n(.06,t.terrain);let s=new Zd({quality:a,uniforms:o});this.scene.add(s.object),await n(.3,t.camps);let c=new df({quality:a,uniforms:o});this.scene.add(c.object),await n(.42,t.vegetation);let l=new bf({quality:a,uniforms:o});this.scene.add(l.object),await n(.56,t.armies);let u=new np({quality:a,uniforms:o});this.scene.add(u.object),await n(.66,t.caravan);let d=new up({quality:a}),f=new vp({quality:a,uniforms:o,columnLight:(e,t)=>u.columnLight(e,t)});this.scene.add(d.object,f.object),await n(.76,t.atmosphere);let p=new Dp({scene:this.scene,quality:a,uniforms:o});this.scene.add(p.object),this.m={terrain:s,camps:c,vegetation:l,armies:u,caravan:d,effects:f,atmosphere:p},await n(.84,t.audio);let m=xp([...c.obstacles,...l.obstacles]),h=new Vp({camera:this.camera,canvas:i.domElement,touchRoot:this.touchRoot,walk:m,getSettings:()=>this.settings});this.player=h,h.onTap=(e,t)=>this.onTap(e,t),h.onInspect=()=>this.inspectFocused(),h.onLockChange=()=>this.refreshLookHint(),h.onBlocked=e=>this.onBlocked(e);let g=new Jp({camera:this.camera});g.register([...c.interactables,...u.interactables,...d.interactables]),this.interactions=g,this.scene.add(g.object),await n(.9,t.shaders),this.timeline.goTo(0,`snap`),this.syncEnv(),this.placeAttractCamera(0),this.updateModules(0);try{await i.compileAsync(this.scene,this.camera)}catch{}}startLoop(){!this.renderer||this.running||this.disposed||(this.running=!0,this.lastNow=performance.now(),this.renderer.setAnimationLoop(e=>this.frame(e)))}stopLoop(){this.running=!1,this.renderer?.setAnimationLoop(null)}frame(e){let t=this.renderer,n=this.m;if(!t||!n)return;let r=e-this.lastNow;this.lastNow=e;let i=this.mode===`guided`&&this.timeline.playing?this.settings.playbackSpeed:1,a=Math.min(Math.max(r/1e3,0)*i,.1);this.time+=a,this.timeline.update(a),this.handleChapterEnd(a),this.syncEnv();let o=this.env;this.mode===`free`&&this.player?(this.player.update(this.fillCtx(a)),this.viewer.sheltered=this.player.viewer.sheltered):this.debugView?(this.camera.position.fromArray(this.debugView.pos),this.camera.lookAt(this.debugView.look[0],this.debugView.look[1],this.debugView.look[2]),this.viewer.sheltered=!1):this.mode===`intro`?(this.placeAttractCamera(this.time),this.viewer.sheltered=!1):(this.director.update(this.timeline.progress,this.time,a,this.reducedMotion),this.viewer.sheltered=!1);let s=this.uniforms;s.uTime.value=this.time,s.uWet.value=Ql(o.wet),s.uDust.value=Ql(o.dust*.8+o.clash*.3),this.updateModules(a),this.audio.update(this.ctx,n.atmosphere.windStrength()),this.updateInteractionUI(a),t.toneMappingExposure=n.atmosphere.exposure,t.render(this.scene,this.camera),this.dynRes?.update(r)}syncEnv(){su(this.env,this.timeline.env)}fillCtx(e){let t=this.ctx;return t.dt=e,t.time=this.time,t.reducedMotion=this.reducedMotion,t.quality=this.quality,t}updateModules(e){let t=this.m;if(!t)return;let n=this.fillCtx(e);t.atmosphere.update(n),t.terrain.update(n),t.camps.update(n),t.vegetation.update(n),t.armies.update(n),t.caravan.update(n),t.effects.update(n)}handleChapterEnd(e){let t=this.timeline;this.mode!==`guided`||!t.playing||!t.ended||this.transitioning?this.holdAfterEnd=0:(this.holdAfterEnd+=e,!(this.holdAfterEnd<1.5)&&(this.holdAfterEnd=0,t.isLast?this.complete():this.goToChapter(t.index+1)))}updateInteractionUI(e){let t=this.interactions;if(!t)return;let n=this.env,r=this.settings.hotspots&&(this.mode===`free`||this.mode===`guided`&&!this.timeline.playing);if(t.update(this.ctx,r,this.timeline.chapter.focus),this.focusTimer-=e,this.focusTimer<=0){this.focusTimer=.12;let e=null;this.mode===`free`&&!this.panelOpen&&!this.paused&&(e=t.focusCenter(n)?.id??null),e!==this.focusId&&(this.focusId=e,this.ui.setFocus(e))}let i=this.mode===`guided`&&!this.awaitingNotice?this.timeline.activeCue:null,a=i?`${this.timeline.index}:${i.key}`:``;if(a!==this.lastCueKey&&(this.lastCueKey=a,this.ui.setCaption(i?this.captionFor(i):null)),this.uiTimer-=e,this.uiTimer<=0){this.uiTimer=.25,this.mode===`guided`&&this.ui.setGuidedState(this.timeline.playing,this.timeline.progress);let e=this.mode===`guided`||this.mode===`free`?this.statusChip(n):``;e!==this.lastChip&&(this.lastChip=e,this.ui.setDayChip(e||null))}}statusChip(e){let t=X().ui.hud;return e.support>.2?t.chipSupport:e.light>.3?t.chipLight:e.rain>.2?t.chipRain:e.clash>.05||e.advance>.05&&e.rout<.95&&this.timeline.index===xu?t.chipDistant:``}captionFor(e){let t=X().content.chapters[this.timeline.chapter.id];return{kind:e.kind,text:t.cues[e.key]??``,refs:e.refs,sources:e.sources}}enterIntro(){this.mode=`intro`,this.timeline.mode=`guided`,this.timeline.playing=!1,this.timeline.goTo(0,`snap`),this.snapWorld(),this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`intro`),this.ui.setChapter(0),this.ui.showIntro(),this.refreshLookHint()}start(e){this.unlockAudio(),e===`guided`?this.setGuided(0):this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.snapWorld(),this.enterFree(!0)}),this.settings.seenHelp||(this.settings.seenHelp=!0,Gl(this.settings),e===`free`&&this.ui.openHelp())}snapWorld(){this.syncEnv(),this.m?.armies.snap()}applyChapterCamera(){let e=this.timeline.chapter,t=e.cameraGentle&&this.viewing===`hidden`;this.director.setKeys(t?e.cameraGentle:e.camera)}setGuided(e){this.mode=`guided`,this.timeline.mode=`guided`,this.player&&(this.player.enabled=!1,this.player.exitLock(),this.player.setTouchControlsVisible(!1)),this.timeline.goTo(e,`smooth`,0),this.timeline.playing=!0,this.prepareChapter(),this.director.blendFromCurrent(this.reducedMotion?1.2:2.5),this.ui.setMode(`guided`),this.ui.setChapter(this.timeline.index),this.refreshLookHint()}prepareChapter(){if(this.timeline.chapter.sensitive&&this.mode===`guided`){let e=this.settings.sensitive;e===`distant`||e===`hidden`?this.viewing=e:this.viewing||(this.awaitingNotice=!0,this.timeline.playing=!1,this.ui.openSensitiveNotice()),this.viewing===`hidden`&&this.toast(X().ui.app.toasts.sensitiveHidden,!0)}this.applyChapterCamera()}onSensitiveChoice(e,t){this.awaitingNotice=!1,e===`skip`?(this.viewing=`hidden`,t&&(this.settings.sensitive=`hidden`,Gl(this.settings),this.ui.setSettings(this.settings)),this.goToChapter(this.timeline.index+1)):(this.viewing=e,t&&(this.settings.sensitive=e,Gl(this.settings),this.ui.setSettings(this.settings)),this.applyChapterCamera(),this.mode===`guided`&&(this.timeline.playing=!0),this.resumeAfterPanel=!1,e===`hidden`&&this.toast(X().ui.app.toasts.sensitiveHidden,!0))}enterFree(e){let t=this.player;if(!t)return;this.mode=`free`,this.timeline.mode=`free`,this.timeline.playing=!0,this.awaitingNotice=!1,this.ui.setCaption(null),this.lastCueKey=``;let n=!1;if(!e){let e=this.camera.getWorldDirection(this.tmpV);n=t.placeAt(this.camera.position,Math.atan2(-e.x,-e.z),0)}n||t.spawn(this.timeline.chapter.spawn),t.enabled=!this.panelOpen,t.setTouchControlsVisible(this.touch),this.ui.setMode(`free`),this.ui.setChapter(this.timeline.index),this.refreshLookHint()}goToChapter(e){let t=this.timeline;if(e<0||e>=t.count)return;let n=e===t.index+1;this.mode===`guided`?n?(t.goTo(e,`smooth`),t.playing=!0,this.prepareChapter(),this.director.blendFromCurrent(this.reducedMotion?1:2),this.ui.setChapter(e)):this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.snapWorld(),this.prepareChapter(),this.ui.setChapter(e)}):this.mode===`free`?this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.snapWorld(),this.player?.spawn(t.chapter.spawn),this.ui.setChapter(e)}):(this.mode===`complete`||this.mode===`intro`)&&this.fadeTransition(()=>{t.goTo(e,`snap`),this.snapWorld(),this.setGuided(e)})}complete(){this.mode=`complete`,this.timeline.playing=!1,this.ui.setCaption(null),this.lastCueKey=``,this.ui.setMode(`complete`),this.ui.showCompletion()}fadeTransition(e){if(this.transitioning)return;this.transitioning=!0;let t=this.reducedMotion?150:450;this.fadeEl.style.transitionDuration=`${t}ms`,this.fadeEl.classList.add(`is-on`),window.setTimeout(()=>{this.disposed||(e(),requestAnimationFrame(()=>{this.fadeEl.classList.remove(`is-on`),window.setTimeout(()=>{this.transitioning=!1},t)}))},t)}pauseExperience(e){this.paused||(this.paused=!0,this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.stopLoop(),this.audio.suspend(),e&&this.ui.setPaused(!0),this.refreshLookHint())}resumeExperience(){this.paused&&(this.paused=!1,this.player&&(this.player.enabled=this.mode===`free`&&!this.panelOpen),this.audio.resume(),this.startLoop(),this.refreshLookHint())}onPanelChanged(e){this.panelOpen=e,e?(this.player?.exitLock(),this.player&&(this.player.enabled=!1),this.mode===`guided`&&this.timeline.playing&&(this.timeline.playing=!1,this.resumeAfterPanel=!0)):(this.player&&(this.player.enabled=this.mode===`free`&&!this.paused),this.resumeAfterPanel&&this.mode===`guided`&&!this.awaitingNotice&&(this.timeline.playing=!0),this.resumeAfterPanel=!1),this.refreshLookHint()}refreshLookHint(){let e=this.player,t=!!e&&this.mode===`free`&&!this.touch&&e.lockSupported&&!e.isLocked&&!this.paused&&!this.panelOpen;this.ui.setLookHint(t)}onTap(e,t){if(this.panelOpen||this.paused||!this.interactions||this.mode!==`guided`&&this.mode!==`free`)return;let n=this.interactions.pickAt(e,t,this.env);n&&this.ui.openInfo(n)}inspectFocused(){if(this.panelOpen||this.paused||!this.interactions)return;let e=this.interactions.focusCenter(this.env);e&&(this.player?.exitLock(),this.ui.openInfo(e.id))}onBlocked(e){this.toast(X().ui.app.toasts.edge)}toast(e,t=!1){let n=performance.now();!t&&n-this.lastToast<2500||(this.lastToast=n,this.ui.toast(e))}async unlockAudio(){if(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),!await this.audio.unlock()&&this.settings.soundEnabled&&this.audio.state===`locked`){let e=()=>{this.audio.unlock()};this.listeners.add(window,`pointerdown`,e,{once:!0}),this.listeners.add(window,`keydown`,e,{once:!0})}}applySettings(e){if(Gl(this.settings),(e.includes(`soundEnabled`)||e.includes(`volume`))&&(this.audio.setVolume(this.settings.volume),this.audio.setEnabled(this.settings.soundEnabled),this.settings.soundEnabled&&this.audio.unlock()),e.includes(`reducedMotion`)&&(this.reducedMotion=ql(this.settings)),e.includes(`sensitive`)){let e=this.settings.sensitive;this.viewing=e===`ask`?this.viewing:e,this.timeline.chapter.sensitive&&this.mode===`guided`&&this.applyChapterCamera()}if(e.includes(`quality`)){let e=this.settings.quality===`auto`?zl(null):this.settings.quality;this.applyQuality(Ll[e])}}applyQuality(e){let t=this.renderer,n=this.m;if(!t||!n||e===this.quality)return;let r=e.terrainSegments!==this.quality.terrainSegments||e.crowdDensity!==this.quality.crowdDensity,i=e.shadows!==this.quality.shadows;this.quality=e,this.ctx.quality=e,this.dynRes?.setProfile(e),this.camera.far=e.drawDistance,this.camera.updateProjectionMatrix(),t.shadowMap.enabled=e.shadows,i&&this.scene.traverse(e=>{if(e instanceof li){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}}),r&&this.toast(X().ui.app.toasts.qualityReload,!0)}createHandlers(){return{start:e=>this.start(e),pauseChanged:e=>e?this.pauseExperience(!1):this.resumeExperience(),restartChapter:()=>{this.resumeExperience(),this.mode===`guided`||this.mode===`complete`?this.setGuidedReplay():this.mode===`free`&&this.goToChapterForce(this.timeline.index)},restartExperience:()=>{this.resumeExperience(),this.mode===`free`?this.goToChapterForce(0):this.fadeTransition(()=>{this.timeline.goTo(0,`snap`),this.snapWorld(),this.setGuided(0)})},toIntro:()=>{this.resumeExperience(),this.fadeTransition(()=>this.enterIntro())},selectChapter:e=>{this.resumeExperience(),this.mode===`intro`&&this.unlockAudio(),this.goToChapter(e)},togglePlay:()=>{this.mode!==`guided`||this.awaitingNotice||this.timeline.ended&&this.timeline.isLast||(this.timeline.playing=!this.timeline.playing,this.ui.setGuidedState(this.timeline.playing,this.timeline.progress))},next:()=>{this.timeline.isLast?this.complete():this.goToChapter(this.timeline.index+1)},prev:()=>this.goToChapter(this.timeline.index-1),replay:()=>this.setGuidedReplay(),exploreHere:()=>{this.resumeExperience(),this.enterFree(!1);let e=this.player;e&&e.enabled&&e.lockSupported&&!this.touch&&e.requestLock()},watchGuided:()=>{this.resumeExperience(),this.fadeTransition(()=>{let e=this.timeline.index;this.timeline.goTo(e,`snap`),this.snapWorld(),this.setGuided(e)})},exitToSite:()=>this.exitToSite(),settingsChanged:(e,t)=>{Object.assign(this.settings,e),this.applySettings(t)},panelChanged:e=>this.onPanelChanged(e),inspect:()=>{this.focusId&&this.ui.openInfo(this.focusId)},requestLook:()=>{this.mode===`free`&&this.player&&!this.panelOpen&&(this.player.enabled=!0,this.player.requestLock())},sensitiveChoice:(e,t)=>this.onSensitiveChoice(e,t)}}setGuidedReplay(){this.fadeTransition(()=>{let e=this.timeline.index;this.timeline.goTo(e,`snap`),this.snapWorld(),this.setGuided(e)})}goToChapterForce(e){let t=this.timeline;this.fadeTransition(()=>{t.goTo(e,`snap`),t.playing=!0,this.snapWorld(),this.player?.spawn(t.chapter.spawn),this.ui.setChapter(e)})}exitToSite(){let e=this.opts.mainSiteUrl;this.dispose(),window.location.assign(e)}placeAttractCamera(e){let t=2.2+e*(this.reducedMotion?.004:.012),n=0+Math.cos(t)*520,r=-40+Math.sin(t)*520,i=Math.max(Z(n,r)+60,140);this.camera.position.set(n,i,r),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,-40),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix())}attachGlobalListeners(){this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.listeners.add(window,`orientationchange`,()=>window.setTimeout(()=>this.resize(),250)),this.listeners.add(document,`visibilitychange`,()=>{document.hidden?this.mode===`guided`||this.mode===`free`?this.pauseExperience(!0):(this.stopLoop(),this.audio.suspend()):this.paused||(this.audio.resume(),this.startLoop())}),this.listeners.add(window,`pagehide`,()=>this.audio.suspend());let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`);if(e){let t=()=>{this.reducedMotion=ql(this.settings)};e.addEventListener(`change`,t),this.listenersCleanup.push(()=>e.removeEventListener(`change`,t))}let t=this.renderer?.domElement;t&&this.listeners.add(t,`webglcontextlost`,e=>{e.preventDefault(),this.stopLoop(),this.audio.suspend(),this.ui.showFallback(`context-lost`)})}resize(){let e=this.renderer;if(!e)return;let t=Math.max(1,this.root.clientWidth),n=Math.max(1,this.root.clientHeight);e.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}dispose(){if(this.disposed)return;this.disposed=!0,this.stopLoop(),this.listeners.removeAll();for(let e of this.listenersCleanup.splice(0))e();this.resizeObserver?.disconnect(),this.player?.dispose(),this.interactions?.dispose(),this.audio.dispose();let e=this.m;if(e)for(let t of[e.terrain,e.camps,e.vegetation,e.armies,e.caravan,e.effects,e.atmosphere])try{t.dispose()}catch(e){console.warn(`[badr] dispose failed`,e)}this.scene.clear(),this.renderer?.dispose(),this.renderer?.domElement.remove(),this.renderer=null,this.ui.dispose()}closeForDebug(){this.awaitingNotice=!1,this.ui.closePanels(),this.paused=!1}debug(){let e=this;return{timeline:this.timeline,camera:this.camera,scene:this.scene,env:this.env,get renderer(){return e.renderer},get modules(){return e.m},get player(){return e.player},get interactions(){return e.interactions},get audio(){return e.audio},mode:()=>this.mode,goTo:e=>this.goToChapter(e),start:e=>this.start(e),setTime:e=>{this.timeline.time=e},setMode:e=>this.ui.setMode(e),view:(e,t)=>{this.debugView=e&&t?{pos:e,look:t}:null},info:e=>this.ui.openInfo(e),step:(e=1,t=16.7)=>{for(let n=0;n<e;n++)this.frame(this.lastNow+t)},chapterAt:(e,t)=>{this.timeline.goTo(e,`snap`,t*bu[e].duration),this.timeline.playing=!1,this.snapWorld(),this.director.setKeys(bu[e].camera)},freeze:(e,t,n=90)=>{this.closeForDebug(),this.mode=`guided`,this.timeline.mode=`guided`,this.player&&(this.player.enabled=!1,this.player.setTouchControlsVisible(!1)),this.debugView=null,this.ui.setMode(`guided`),this.ui.setChapter(e),this.timeline.goTo(e,`snap`,Math.max(0,t*bu[e].duration-n/60)),this.timeline.playing=!0,this.snapWorld(),this.director.setKeys(bu[e].cameraGentle&&this.viewing===`hidden`?bu[e].cameraGentle:bu[e].camera),this.director.blendFromCurrent(0);for(let e=0;e<n;e++)this.frame(this.lastNow+16.7);return this.timeline.playing=!1,{chapter:e,time:this.timeline.time,camera:this.camera.position.toArray().map(e=>+e.toFixed(2))}},stats:()=>{let t=e.renderer;return t?{calls:t.info.render.calls,triangles:t.info.render.triangles,geometries:t.info.memory.geometries,textures:t.info.memory.textures}:null}}}};function Pm(){try{let e=document.createElement(`canvas`).getContext(`webgl2`,{failIfMajorPerformanceCaveat:!1});return{ok:!!e,gl:e}}catch{return{ok:!1,gl:null}}}function Fm(e){try{e?.getExtension(`WEBGL_lose_context`)?.loseContext()}catch{}}var Im=`/`,Lm=document.getElementById(`app`);if(Lm){let e=new Nm(Lm,{mainSiteUrl:Im});e.boot(),new URLSearchParams(window.location.search).has(`debug`)&&(window.__badr=e.debug()),window.addEventListener(`pagehide`,t=>{t.persisted||e.dispose()})}