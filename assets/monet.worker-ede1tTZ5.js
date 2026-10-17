(function(){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function e(e){return e<0?-1:e===0?0:1}function t(e,t,n){return(1-n)*e+n*t}function n(e,t,n){return n<e?e:n>t?t:n}function r(e,t,n){return n<e?e:n>t?t:n}function i(e){return e%=360,e<0&&(e+=360),e}function a(e){return e%=360,e<0&&(e+=360),e}function o(e,t){return a(t-e)<=180?1:-1}function s(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function c(e,t){return[e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2]]}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let l=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],u=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],d=[95.047,100,108.883];function f(e,t,n){return(255<<24|(e&255)<<16|(t&255)<<8|n&255)>>>0}function p(e){return f(D(e[0]),D(e[1]),D(e[2]))}function m(e){return e>>24&255}function h(e){return e>>16&255}function g(e){return e>>8&255}function _(e){return e&255}function v(e,t,n){let r=u,i=r[0][0]*e+r[0][1]*t+r[0][2]*n,a=r[1][0]*e+r[1][1]*t+r[1][2]*n,o=r[2][0]*e+r[2][1]*t+r[2][2]*n;return f(D(i),D(a),D(o))}function y(e){return c([E(h(e)),E(g(e)),E(_(e))],l)}function b(e,t,n){let r=d,i=(e+16)/116,a=t/500+i,o=i-n/200,s=k(a),c=k(i),l=k(o);return v(s*r[0],c*r[1],l*r[2])}function x(e){let t=E(h(e)),n=E(g(e)),r=E(_(e)),i=l,a=i[0][0]*t+i[0][1]*n+i[0][2]*r,o=i[1][0]*t+i[1][1]*n+i[1][2]*r,s=i[2][0]*t+i[2][1]*n+i[2][2]*r,c=d,u=a/c[0],f=o/c[1],p=s/c[2],m=O(u),v=O(f),y=O(p);return[116*v-16,500*(m-v),200*(v-y)]}function S(e){let t=D(w(e));return f(t,t,t)}function C(e){let t=y(e)[1];return 116*O(t/100)-16}function w(e){return 100*k((e+16)/116)}function T(e){return O(e/100)*116-16}function E(e){let t=e/255;return t<=.040449936?t/12.92*100:((t+.055)/1.055)**2.4*100}function D(e){let t=e/100,r=0;return r=t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,n(0,255,Math.round(r*255))}function ee(){return d}function O(e){return e>.008856451679035631?e**(1/3):(903.2962962962963*e+16)/116}function k(e){let t=e*e*e;return t>.008856451679035631?t:(116*e-16)/903.2962962962963}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A=class e{static make(n=ee(),r=200/Math.PI*w(50)/100,i=50,a=2,o=!1){let s=n,c=s[0]*.401288+s[1]*.650173+s[2]*-.051461,l=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,u=s[0]*-.002079+s[1]*.048952+s[2]*.953127,d=.8+a/10,f=d>=.9?t(.59,.69,(d-.9)*10):t(.525,.59,(d-.8)*10),p=o?1:d*(1-1/3.6*Math.exp((-r-42)/92));p=p>1?1:p<0?0:p;let m=d,h=[100/c*p+1-p,100/l*p+1-p,100/u*p+1-p],g=1/(5*r+1),_=g*g*g*g,v=1-_,y=_*r+.1*v*v*Math.cbrt(5*r),b=w(i)/n[1],x=1.48+Math.sqrt(b),S=.725/b**.2,C=S,T=[(y*h[0]*c/100)**.42,(y*h[1]*l/100)**.42,(y*h[2]*u/100)**.42],E=[400*T[0]/(T[0]+27.13),400*T[1]/(T[1]+27.13),400*T[2]/(T[2]+27.13)],D=(2*E[0]+E[1]+.05*E[2])*S;return new e(b,D,S,C,f,m,h,y,y**.25,x)}constructor(e,t,n,r,i,a,o,s,c,l){this.n=e,this.aw=t,this.nbb=n,this.ncb=r,this.c=i,this.nc=a,this.rgbD=o,this.fl=s,this.fLRoot=c,this.z=l}};A.DEFAULT=A.make();
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j=class t{constructor(e,t,n,r,i,a,o,s,c){this.hue=e,this.chroma=t,this.j=n,this.q=r,this.m=i,this.s=a,this.jstar=o,this.astar=s,this.bstar=c}distance(e){let t=this.jstar-e.jstar,n=this.astar-e.astar,r=this.bstar-e.bstar;return 1.41*Math.sqrt(t*t+n*n+r*r)**.63}static fromInt(e){return t.fromIntInViewingConditions(e,A.DEFAULT)}static fromIntInViewingConditions(n,r){let i=(n&16711680)>>16,o=(n&65280)>>8,s=n&255,c=E(i),l=E(o),u=E(s),d=.41233895*c+.35762064*l+.18051042*u,f=.2126*c+.7152*l+.0722*u,p=.01932141*c+.11916382*l+.95034478*u,m=.401288*d+.650173*f-.051461*p,h=-.250268*d+1.204414*f+.045854*p,g=-.002079*d+.048952*f+.953127*p,_=r.rgbD[0]*m,v=r.rgbD[1]*h,y=r.rgbD[2]*g,b=(r.fl*Math.abs(_)/100)**.42,x=(r.fl*Math.abs(v)/100)**.42,S=(r.fl*Math.abs(y)/100)**.42,C=e(_)*400*b/(b+27.13),w=e(v)*400*x/(x+27.13),T=e(y)*400*S/(S+27.13),D=(11*C+-12*w+T)/11,ee=(C+w-2*T)/9,O=(20*C+20*w+21*T)/20,k=(40*C+20*w+T)/20,A=a(Math.atan2(ee,D)*180/Math.PI),j=A*Math.PI/180,M=100*(k*r.nbb/r.aw)**+(r.c*r.z),N=4/r.c*Math.sqrt(M/100)*(r.aw+4)*r.fLRoot,te=A<20.14?A+360:A,P=(5e4/13*(.25*(Math.cos(te*Math.PI/180+2)+3.8))*r.nc*r.ncb*Math.sqrt(D*D+ee*ee)/(O+.305))**.9*(1.64-.29**r.n)**.73,ne=P*Math.sqrt(M/100),re=ne*r.fLRoot,F=50*Math.sqrt(P*r.c/(r.aw+4)),I=(1+100*.007)*M/(1+.007*M),ie=1/.0228*Math.log(1+.0228*re),ae=ie*Math.cos(j),oe=ie*Math.sin(j);return new t(A,ne,M,N,re,F,I,ae,oe)}static fromJch(e,n,r){return t.fromJchInViewingConditions(e,n,r,A.DEFAULT)}static fromJchInViewingConditions(e,n,r,i){let a=4/i.c*Math.sqrt(e/100)*(i.aw+4)*i.fLRoot,o=n*i.fLRoot,s=n/Math.sqrt(e/100),c=50*Math.sqrt(s*i.c/(i.aw+4)),l=r*Math.PI/180,u=(1+100*.007)*e/(1+.007*e),d=1/.0228*Math.log(1+.0228*o),f=d*Math.cos(l),p=d*Math.sin(l);return new t(r,n,e,a,o,c,u,f,p)}static fromUcs(e,n,r){return t.fromUcsInViewingConditions(e,n,r,A.DEFAULT)}static fromUcsInViewingConditions(e,n,r,i){let a=n,o=r,s=Math.sqrt(a*a+o*o),c=(Math.exp(s*.0228)-1)/.0228/i.fLRoot,l=180/Math.PI*Math.atan2(o,a);l<0&&(l+=360);let u=e/(1-(e-100)*.007);return t.fromJchInViewingConditions(u,c,l,i)}toInt(){return this.viewed(A.DEFAULT)}viewed(t){let n=((this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100))/(1.64-.29**t.n)**.73)**(1/.9),r=this.hue*Math.PI/180,i=.25*(Math.cos(r+2)+3.8),a=t.aw*(this.j/100)**(1/t.c/t.z),o=5e4/13*i*t.nc*t.ncb,s=a/t.nbb,c=Math.sin(r),l=Math.cos(r),u=23*(s+.305)*n/(23*o+11*n*l+108*n*c),d=u*l,f=u*c,p=(460*s+451*d+288*f)/1403,m=(460*s-891*d-261*f)/1403,h=(460*s-220*d-6300*f)/1403,g=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),_=e(p)*(100/t.fl)*g**(1/.42),y=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),b=e(m)*(100/t.fl)*y**(1/.42),x=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),S=e(h)*(100/t.fl)*x**(1/.42),C=_/t.rgbD[0],w=b/t.rgbD[1],T=S/t.rgbD[2];return v(1.86206786*C-1.01125463*w+.14918677*T,.38752654*C+.62144744*w-.00897398*T,-.0158415*C-.03412294*w+1.04996444*T)}static fromXyzInViewingConditions(n,r,i,a){let o=.401288*n+.650173*r-.051461*i,s=-.250268*n+1.204414*r+.045854*i,c=-.002079*n+.048952*r+.953127*i,l=a.rgbD[0]*o,u=a.rgbD[1]*s,d=a.rgbD[2]*c,f=(a.fl*Math.abs(l)/100)**.42,p=(a.fl*Math.abs(u)/100)**.42,m=(a.fl*Math.abs(d)/100)**.42,h=e(l)*400*f/(f+27.13),g=e(u)*400*p/(p+27.13),_=e(d)*400*m/(m+27.13),v=(11*h+-12*g+_)/11,y=(h+g-2*_)/9,b=(20*h+20*g+21*_)/20,x=(40*h+20*g+_)/20,S=Math.atan2(y,v)*180/Math.PI,C=S<0?S+360:S>=360?S-360:S,w=C*Math.PI/180,T=100*(x*a.nbb/a.aw)**+(a.c*a.z),E=4/a.c*Math.sqrt(T/100)*(a.aw+4)*a.fLRoot,D=C<20.14?C+360:C,ee=(5e4/13*(1/4*(Math.cos(D*Math.PI/180+2)+3.8))*a.nc*a.ncb*Math.sqrt(v*v+y*y)/(b+.305))**.9*(1.64-.29**a.n)**.73,O=ee*Math.sqrt(T/100),k=O*a.fLRoot,A=50*Math.sqrt(ee*a.c/(a.aw+4)),j=(1+100*.007)*T/(1+.007*T),M=Math.log(1+.0228*k)/.0228,N=M*Math.cos(w),te=M*Math.sin(w);return new t(C,O,T,E,k,A,j,N,te)}xyzInViewingConditions(t){let n=((this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100))/(1.64-.29**t.n)**.73)**(1/.9),r=this.hue*Math.PI/180,i=.25*(Math.cos(r+2)+3.8),a=t.aw*(this.j/100)**(1/t.c/t.z),o=5e4/13*i*t.nc*t.ncb,s=a/t.nbb,c=Math.sin(r),l=Math.cos(r),u=23*(s+.305)*n/(23*o+11*n*l+108*n*c),d=u*l,f=u*c,p=(460*s+451*d+288*f)/1403,m=(460*s-891*d-261*f)/1403,h=(460*s-220*d-6300*f)/1403,g=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),_=e(p)*(100/t.fl)*g**(1/.42),v=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),y=e(m)*(100/t.fl)*v**(1/.42),b=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),x=e(h)*(100/t.fl)*b**(1/.42),S=_/t.rgbD[0],C=y/t.rgbD[1],w=x/t.rgbD[2];return[1.86206786*S-1.01125463*C+.14918677*w,.38752654*S+.62144744*C-.00897398*w,-.0158415*S-.03412294*C+1.04996444*w]}},M=class t{static sanitizeRadians(e){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){let t=e/100,n=0;return n=t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,n*255}static chromaticAdaptation(t){let n=Math.abs(t)**.42;return e(t)*400*n/(n+27.13)}static hueOf(e){let n=c(e,t.SCALED_DISCOUNT_FROM_LINRGB),r=t.chromaticAdaptation(n[0]),i=t.chromaticAdaptation(n[1]),a=t.chromaticAdaptation(n[2]),o=(11*r+-12*i+a)/11,s=(r+i-2*a)/9;return Math.atan2(s,o)}static areInCyclicOrder(e,n,r){return t.sanitizeRadians(n-e)<t.sanitizeRadians(r-e)}static intercept(e,t,n){return(t-e)/(n-e)}static lerpPoint(e,t,n){return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}static setCoordinate(e,n,r,i){let a=t.intercept(e[i],n,r[i]);return t.lerpPoint(e,a,r)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,n){let r=t.Y_FROM_LINRGB[0],i=t.Y_FROM_LINRGB[1],a=t.Y_FROM_LINRGB[2],o=n%4<=1?0:100,s=n%2==0?0:100;if(n<4){let n=o,c=s,l=(e-n*i-c*a)/r;return t.isBounded(l)?[l,n,c]:[-1,-1,-1]}if(n<8){let n=o,c=s,l=(e-c*r-n*a)/i;return t.isBounded(l)?[c,l,n]:[-1,-1,-1]}{let n=o,c=s,l=(e-n*r-c*i)/a;return t.isBounded(l)?[n,c,l]:[-1,-1,-1]}}static bisectToSegment(e,n){let r=[-1,-1,-1],i=r,a=0,o=0,s=!1,c=!0;for(let l=0;l<12;l++){let u=t.nthVertex(e,l);if(u[0]<0)continue;let d=t.hueOf(u);s?(c||t.areInCyclicOrder(a,d,o))&&(c=!1,t.areInCyclicOrder(a,n,d)?(i=u,o=d):(r=u,a=d)):(r=u,i=u,a=d,o=d,s=!0)}return[r,i]}static midpoint(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,n){let r=t.bisectToSegment(e,n),i=r[0],a=t.hueOf(i),o=r[1];for(let e=0;e<3;e++)if(i[e]!==o[e]){let r=-1,s=255;i[e]<o[e]?(r=t.criticalPlaneBelow(t.trueDelinearized(i[e])),s=t.criticalPlaneAbove(t.trueDelinearized(o[e]))):(r=t.criticalPlaneAbove(t.trueDelinearized(i[e])),s=t.criticalPlaneBelow(t.trueDelinearized(o[e])));for(let c=0;c<8&&!(Math.abs(s-r)<=1);c++){let c=Math.floor((r+s)/2),l=t.CRITICAL_PLANES[c],u=t.setCoordinate(i,l,o,e),d=t.hueOf(u);t.areInCyclicOrder(a,n,d)?(o=u,s=c):(i=u,a=d,r=c)}}return t.midpoint(i,o)}static inverseChromaticAdaptation(t){let n=Math.abs(t),r=Math.max(0,27.13*n/(400-n));return e(t)*r**(1/.42)}static findResultByJ(e,n,r){let i=Math.sqrt(r)*11,a=A.DEFAULT,o=1/(1.64-.29**a.n)**.73,s=.25*(Math.cos(e+2)+3.8)*(5e4/13)*a.nc*a.ncb,l=Math.sin(e),u=Math.cos(e);for(let e=0;e<5;e++){let d=i/100,f=((n===0||i===0?0:n/Math.sqrt(d))*o)**(1/.9),m=a.aw*d**(1/a.c/a.z)/a.nbb,h=23*(m+.305)*f/(23*s+11*f*u+108*f*l),g=h*u,_=h*l,v=(460*m+451*g+288*_)/1403,y=(460*m-891*g-261*_)/1403,b=(460*m-220*g-6300*_)/1403,x=c([t.inverseChromaticAdaptation(v),t.inverseChromaticAdaptation(y),t.inverseChromaticAdaptation(b)],t.LINRGB_FROM_SCALED_DISCOUNT);if(x[0]<0||x[1]<0||x[2]<0)return 0;let S=t.Y_FROM_LINRGB[0],C=t.Y_FROM_LINRGB[1],w=t.Y_FROM_LINRGB[2],T=S*x[0]+C*x[1]+w*x[2];if(T<=0)return 0;if(e===4||Math.abs(T-r)<.002)return x[0]>100.01||x[1]>100.01||x[2]>100.01?0:p(x);i-=(T-r)*i/(2*T)}return 0}static solveToInt(e,n,r){if(n<1e-4||r<1e-4||r>99.9999)return S(r);e=a(e);let i=e/180*Math.PI,o=w(r),s=t.findResultByJ(i,n,o);return s===0?p(t.bisectToLimit(o,i)):s}static solveToCam(e,n,r){return j.fromInt(t.solveToInt(e,n,r))}};M.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],M.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],M.Y_FROM_LINRGB=[.2126,.7152,.0722],M.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N=class e{static from(t,n,r){return new e(M.solveToInt(t,n,r))}static fromInt(t){return new e(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(M.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(M.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(M.solveToInt(this.internalHue,this.internalChroma,e))}setValue(e,t){this[e]=t}toString(){return`HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`}static isBlue(e){return e>=250&&e<270}static isYellow(e){return e>=105&&e<125}static isCyan(e){return e>=170&&e<207}constructor(e){this.argb=e;let t=j.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=C(e),this.argb=e}setInternalState(e){let t=j.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=C(e),this.argb=e}inViewingConditions(t){let n=j.fromInt(this.toInt()).xyzInViewingConditions(t),r=j.fromXyzInViewingConditions(n[0],n[1],n[2],A.make());return e.from(r.hue,r.chroma,T(n[1]))}},te=class e{static harmonize(e,t){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let n=N.fromInt(e),r=N.fromInt(t),i=s(n.hue,r.hue),c=Math.min(i*.5,15),l=a(n.hue+c*o(n.hue,r.hue));return N.from(l,n.chroma,n.tone).toInt()}static hctHue(t,n,r){let i=e.cam16Ucs(t,n,r),a=j.fromInt(i),o=j.fromInt(t);return N.from(a.hue,o.chroma,C(t)).toInt()}static cam16Ucs(e,t,n){let r=j.fromInt(e),i=j.fromInt(t),a=r.jstar,o=r.astar,s=r.bstar,c=i.jstar,l=i.astar,u=i.bstar,d=a+(c-a)*n,f=o+(l-o)*n,p=s+(u-s)*n;return j.fromUcs(d,f,p).toInt()}},P=class e{static ratioOfTones(t,n){
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
return t=r(0,100,t),n=r(0,100,n),e.ratioOfYs(w(t),w(n))}static ratioOfYs(e,t){let n=e>t?e:t,r=n===t?e:t;return(n+5)/(r+5)}static lighter(t,n){if(t<0||t>100)return-1;let r=w(t),i=n*(r+5)-5,a=e.ratioOfYs(i,r),o=Math.abs(a-n);if(a<n&&o>.04)return-1;let s=T(i)+.4;return s<0||s>100?-1:s}static darker(t,n){if(t<0||t>100)return-1;let r=w(t),i=(r+5)/n-5,a=e.ratioOfYs(r,i),o=Math.abs(a-n);if(a<n&&o>.04)return-1;let s=T(i)-.4;return s<0||s>100?-1:s}static lighterUnsafe(t,n){let r=e.lighter(t,n);return r<0?100:r}static darkerUnsafe(t,n){let r=e.darker(t,n);return r<0?0:r}},ne=class e{static isDisliked(e){
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let t=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,n=Math.round(e.chroma)>16,r=Math.round(e.tone)<65;return t&&n&&r}static fixIfDisliked(t){return e.isDisliked(t)?N.from(t.hue,t.chroma,70):t}};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function re(e,t,n){if(e.name!==n.name)throw Error(`Attempting to extend color ${e.name} with color ${n.name} of different name for spec version ${t}.`);if(e.isBackground!==n.isBackground)throw Error(`Attempting to extend color ${e.name} as a ${e.isBackground?`background`:`foreground`} with color ${n.name} as a ${n.isBackground?`background`:`foreground`} for spec version ${t}.`)}function F(e,t,n){return re(e,t,n),I.fromPalette({name:e.name,palette:r=>r.specVersion===t?n.palette(r):e.palette(r),tone:r=>r.specVersion===t?n.tone(r):e.tone(r),isBackground:e.isBackground,chromaMultiplier:r=>{let i=r.specVersion===t?n.chromaMultiplier:e.chromaMultiplier;return i===void 0?1:i(r)},background:r=>{let i=r.specVersion===t?n.background:e.background;return i===void 0?void 0:i(r)},secondBackground:r=>{let i=r.specVersion===t?n.secondBackground:e.secondBackground;return i===void 0?void 0:i(r)},contrastCurve:r=>{let i=r.specVersion===t?n.contrastCurve:e.contrastCurve;return i===void 0?void 0:i(r)},toneDeltaPair:r=>{let i=r.specVersion===t?n.toneDeltaPair:e.toneDeltaPair;return i===void 0?void 0:i(r)}})}var I=class e{static fromPalette(t){return new e(t.name??``,t.palette,t.tone??e.getInitialToneFromBackground(t.background),t.isBackground??!1,t.chromaMultiplier,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}static getInitialToneFromBackground(e){return e===void 0?e=>50:t=>e(t)?e(t).getTone(t):50}constructor(e,t,n,r,i,a,o,s,c){if(this.name=e,this.palette=t,this.tone=n,this.isBackground=r,this.chromaMultiplier=i,this.background=a,this.secondBackground=o,this.contrastCurve=s,this.toneDeltaPair=c,this.hctCache=/* @__PURE__ */ new Map,!a&&o)throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!a&&s)throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(a&&!s)throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}clone(){return e.fromPalette({name:this.name,palette:this.palette,tone:this.tone,isBackground:this.isBackground,chromaMultiplier:this.chromaMultiplier,background:this.background,secondBackground:this.secondBackground,contrastCurve:this.contrastCurve,toneDeltaPair:this.toneDeltaPair})}clearCache(){this.hctCache.clear()}getArgb(e){return this.getHct(e).toInt()}getHct(e){let t=this.hctCache.get(e);if(t!=null)return t;let n=ce(e.specVersion).getHct(e,this);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,n),n}getTone(e){return ce(e.specVersion).getTone(e,this)}static foregroundTone(t,n){let r=P.lighterUnsafe(t,n),i=P.darkerUnsafe(t,n),a=P.ratioOfTones(r,t),o=P.ratioOfTones(i,t);if(e.tonePrefersLightForeground(t)){let e=Math.abs(a-o)<.1&&a<n&&o<n;return a>=n||a>=o||e?r:i}return o>=n||o>=a?i:r}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(t){return e.tonePrefersLightForeground(t)&&!e.toneAllowsLightForeground(t)?49:t}},ie=class{getHct(e,t){let n=t.getTone(e);return t.palette(e).getHct(n)}getTone(e,t){let n=e.contrastLevel<0,i=t.toneDeltaPair?t.toneDeltaPair(e):void 0;if(i){let a=i.roleA,o=i.roleB,s=i.delta,c=i.polarity,l=i.stayTogether,u=c===`nearer`||c===`lighter`&&!e.isDark||c===`darker`&&e.isDark,d=u?a:o,f=u?o:a,p=t.name===d.name,m=e.isDark?1:-1,h=d.tone(e),g=f.tone(e);if(t.background&&d.contrastCurve&&f.contrastCurve){let r=t.background(e),i=d.contrastCurve(e),a=f.contrastCurve(e);if(r&&i&&a){let t=r.getTone(e),o=i.get(e.contrastLevel),s=a.get(e.contrastLevel);P.ratioOfTones(t,h)<o&&(h=I.foregroundTone(t,o)),P.ratioOfTones(t,g)<s&&(g=I.foregroundTone(t,s)),n&&(h=I.foregroundTone(t,o),g=I.foregroundTone(t,s))}}return(g-h)*m<s&&(g=r(0,100,h+s*m),(g-h)*m>=s||(h=r(0,100,g-s*m))),50<=h&&h<60?m>0?(h=60,g=Math.max(g,h+s*m)):(h=49,g=Math.min(g,h+s*m)):50<=g&&g<60&&(l?m>0?(h=60,g=Math.max(g,h+s*m)):(h=49,g=Math.min(g,h+s*m)):g=m>0?60:49),p?h:g}{let r=t.tone(e);if(t.background==null||t.background(e)===void 0||t.contrastCurve==null||t.contrastCurve(e)===void 0)return r;let i=t.background(e).getTone(e),a=t.contrastCurve(e).get(e.contrastLevel);if(P.ratioOfTones(i,r)>=a||(r=I.foregroundTone(i,a)),n&&(r=I.foregroundTone(i,a)),t.isBackground&&50<=r&&r<60&&(r=P.ratioOfTones(49,i)>=a?49:60),t.secondBackground==null||t.secondBackground(e)===void 0)return r;let[o,s]=[t.background,t.secondBackground],[c,l]=[o(e).getTone(e),s(e).getTone(e)],[u,d]=[Math.max(c,l),Math.min(c,l)];if(P.ratioOfTones(u,r)>=a&&P.ratioOfTones(d,r)>=a)return r;let f=P.lighter(u,a),p=P.darker(d,a),m=[];return f!==-1&&m.push(f),p!==-1&&m.push(p),I.tonePrefersLightForeground(c)||I.tonePrefersLightForeground(l)?f<0?100:f:m.length===1?m[0]:p<0?0:p}}},ae=class{getHct(e,t){let n=t.palette(e),r=t.getTone(e),i=n.hue,a=n.chroma*(t.chromaMultiplier?t.chromaMultiplier(e):1);return N.from(i,a,r)}getTone(e,t){let n=t.toneDeltaPair?t.toneDeltaPair(e):void 0;if(n){let i=n.roleA,a=n.roleB,o=n.polarity,s=n.constraint,c=o===`darker`||o===`relative_lighter`&&e.isDark||o===`relative_darker`&&!e.isDark?-n.delta:n.delta,l=t.name===i.name,u=l?i:a,d=l?a:i,f=u.tone(e),p=d.getTone(e),m=c*(l?1:-1);if(s===`exact`?f=r(0,100,p+m):s===`nearer`?f=m>0?r(0,100,r(p,p+m,f)):r(0,100,r(p+m,p,f)):s===`farther`&&(f=m>0?r(p+m,100,f):r(0,p+m,f)),t.background&&t.contrastCurve){let n=t.background(e),r=t.contrastCurve(e);if(n&&r){let t=n.getTone(e),i=r.get(e.contrastLevel);f=P.ratioOfTones(t,f)>=i&&e.contrastLevel>=0?f:I.foregroundTone(t,i)}}return t.isBackground&&!t.name.endsWith(`_fixed_dim`)&&(f=f>=57?r(65,100,f):r(0,49,f)),f}{let n=t.tone(e);if(t.background==null||t.background(e)===void 0||t.contrastCurve==null||t.contrastCurve(e)===void 0)return n;let i=t.background(e).getTone(e),a=t.contrastCurve(e).get(e.contrastLevel);if(n=P.ratioOfTones(i,n)>=a&&e.contrastLevel>=0?n:I.foregroundTone(i,a),t.isBackground&&!t.name.endsWith(`_fixed_dim`)&&(n=n>=57?r(65,100,n):r(0,49,n)),t.secondBackground==null||t.secondBackground(e)===void 0)return n;let[o,s]=[t.background,t.secondBackground],[c,l]=[o(e).getTone(e),s(e).getTone(e)],[u,d]=[Math.max(c,l),Math.min(c,l)];if(P.ratioOfTones(u,n)>=a&&P.ratioOfTones(d,n)>=a)return n;let f=P.lighter(u,a),p=P.darker(d,a),m=[];return f!==-1&&m.push(f),p!==-1&&m.push(p),I.tonePrefersLightForeground(c)||I.tonePrefersLightForeground(l)?f<0?100:f:m.length===1?m[0]:p<0?0:p}}};let oe=new ie,se=new ae;function ce(e){return e===`2025`?se:oe}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var L=class e{static fromInt(t){let n=N.fromInt(t);return e.fromHct(n)}static fromHct(t){return new e(t.hue,t.chroma,t)}static fromHueAndChroma(t,n){let r=new le(t,n).create();return new e(t,n,r)}constructor(e,t,n){this.hue=e,this.chroma=t,this.keyColor=n,this.cache=/* @__PURE__ */ new Map}tone(e){let t=this.cache.get(e);return t===void 0&&(t=e==99&&N.isYellow(this.hue)?this.averageArgb(this.tone(98),this.tone(100)):N.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,t)),t}getHct(e){return N.fromInt(this.tone(e))}averageArgb(e,t){let n=e>>>16&255,r=e>>>8&255,i=e&255,a=t>>>16&255,o=t>>>8&255,s=t&255,c=Math.round((n+a)/2),l=Math.round((r+o)/2),u=Math.round((i+s)/2);return(255<<24|(c&255)<<16|(l&255)<<8|u&255)>>>0}},le=class{constructor(e,t){this.hue=e,this.requestedChroma=t,this.chromaCache=/* @__PURE__ */ new Map,this.maxChromaValue=200}create(){let e=0,t=100;for(;e<t;){let n=Math.floor((e+t)/2),r=this.maxChroma(n)<this.maxChroma(n+1);if(this.maxChroma(n)>=this.requestedChroma-.01){if(Math.abs(e-50)<Math.abs(t-50))t=n;else{if(e===n)return N.from(this.hue,this.requestedChroma,e);e=n}}else r?e=n+1:t=n}return N.from(this.hue,this.requestedChroma,e)}maxChroma(e){if(this.chromaCache.has(e))return this.chromaCache.get(e);let t=N.from(this.hue,this.maxChromaValue,e).chroma;return this.chromaCache.set(e,t),t}},ue=class e{constructor(e){
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
this.input=e,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=/* @__PURE__ */ new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;let e=this.hctsByHue.concat([this.input]),t=this.tempsByHct;return e.sort((e,n)=>t.get(e)-t.get(n)),this.hctsByTempCache=e,e}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(e=5,t=12){let n=Math.round(this.input.hue),r=this.hctsByHue[n],a=this.relativeTemperature(r),o=[r],s=0;for(let e=0;e<360;e++){let t=i(n+e),r=this.hctsByHue[t],o=this.relativeTemperature(r),c=Math.abs(o-a);a=o,s+=c}let c=1,l=s/t,u=0;for(a=this.relativeTemperature(r);o.length<t;){let e=i(n+c),r=this.hctsByHue[e],s=this.relativeTemperature(r),d=Math.abs(s-a);u+=d;let f=o.length*l,p=u>=f,m=1;for(;p&&o.length<t;){o.push(r);let e=(o.length+m)*l;p=u>=e,m++}if(a=s,c++,c>360){for(;o.length<t;)o.push(r);break}}let d=[this.input],f=Math.floor((e-1)/2);for(let e=1;e<f+1;e++){let t=0-e;for(;t<0;)t=o.length+t;t>=o.length&&(t%=o.length),d.splice(0,0,o[t])}let p=e-f-1;for(let e=1;e<p+1;e++){let t=e;for(;t<0;)t=o.length+t;t>=o.length&&(t%=o.length),d.push(o[t])}return d}get complement(){if(this.complementCache!=null)return this.complementCache;let t=this.coldest.hue,n=this.tempsByHct.get(this.coldest),r=this.warmest.hue,i=this.tempsByHct.get(this.warmest)-n,o=e.isBetween(this.input.hue,t,r),s=o?r:t,c=o?t:r,l=1e3,u=this.hctsByHue[Math.round(this.input.hue)],d=1-this.inputRelativeTemperature;for(let t=0;t<=360;t+=1){let r=a(s+1*t);if(!e.isBetween(r,s,c))continue;let o=this.hctsByHue[Math.round(r)],f=(this.tempsByHct.get(o)-n)/i,p=Math.abs(d-f);p<l&&(l=p,u=o)}return this.complementCache=u,this.complementCache}relativeTemperature(e){let t=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),n=this.tempsByHct.get(e)-this.tempsByHct.get(this.coldest);return t===0?.5:n/t}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0||(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input)),this.inputRelativeTemperatureCache}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;let t=this.hctsByHue.concat([this.input]),n=/* @__PURE__ */ new Map;for(let r of t)n.set(r,e.rawTemperature(r));return this.tempsByHctCache=n,n}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;let e=[];for(let t=0;t<=360;t+=1){let n=N.from(t,this.input.chroma,this.input.tone);e.push(n)}return this.hctsByHueCache=e,this.hctsByHueCache}static isBetween(e,t,n){return t<n?t<=e&&e<=n:t<=e||e<=n}static rawTemperature(e){let t=x(e.toInt()),n=a(Math.atan2(t[2],t[1])*180/Math.PI);return-.5+.02*Math.sqrt(t[1]*t[1]+t[2]*t[2])**1.07*Math.cos(a(n-50)*Math.PI/180)}},R=class{constructor(e,t,n,r){
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
this.low=e,this.normal=t,this.medium=n,this.high=r}get(e){return e<=-1?this.low:e<0?t(this.low,this.normal,(e- -1)/1):e<.5?t(this.normal,this.medium,(e-0)/.5):e<1?t(this.medium,this.high,(e-.5)/.5):this.high}},z=class{constructor(e,t,n,r,i,a){
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
this.roleA=e,this.roleB=t,this.delta=n,this.polarity=r,this.stayTogether=i,this.constraint=a,this.constraint=a??`exact`}},B
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
;(function(e){e[e.MONOCHROME=0]=`MONOCHROME`,e[e.NEUTRAL=1]=`NEUTRAL`,e[e.TONAL_SPOT=2]=`TONAL_SPOT`,e[e.VIBRANT=3]=`VIBRANT`,e[e.EXPRESSIVE=4]=`EXPRESSIVE`,e[e.FIDELITY=5]=`FIDELITY`,e[e.CONTENT=6]=`CONTENT`,e[e.RAINBOW=7]=`RAINBOW`,e[e.FRUIT_SALAD=8]=`FRUIT_SALAD`})(B||={});
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function V(e){return e.variant===B.FIDELITY||e.variant===B.CONTENT}function H(e){return e.variant===B.MONOCHROME}function de(e,t,n,r){let i=n,a=N.from(e,t,n);if(a.chroma<t){let n=a.chroma;for(;a.chroma<t;){i+=r?-1:1;let o=N.from(e,t,i);if(n>o.chroma||Math.abs(o.chroma-t)<.4)break;Math.abs(o.chroma-t)<Math.abs(a.chroma-t)&&(a=o),n=Math.max(n,o.chroma)}}return i}var fe=class{primaryPaletteKeyColor(){return I.fromPalette({name:`primary_palette_key_color`,palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone})}secondaryPaletteKeyColor(){return I.fromPalette({name:`secondary_palette_key_color`,palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone})}tertiaryPaletteKeyColor(){return I.fromPalette({name:`tertiary_palette_key_color`,palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone})}neutralPaletteKeyColor(){return I.fromPalette({name:`neutral_palette_key_color`,palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone})}neutralVariantPaletteKeyColor(){return I.fromPalette({name:`neutral_variant_palette_key_color`,palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone})}errorPaletteKeyColor(){return I.fromPalette({name:`error_palette_key_color`,palette:e=>e.errorPalette,tone:e=>e.errorPalette.keyColor.tone})}background(){return I.fromPalette({name:`background`,palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}onBackground(){return I.fromPalette({name:`on_background`,palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.background(),contrastCurve:e=>new R(3,3,4.5,7)})}surface(){return I.fromPalette({name:`surface`,palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}surfaceDim(){return I.fromPalette({name:`surface_dim`,palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new R(87,87,80,75).get(e.contrastLevel),isBackground:!0})}surfaceBright(){return I.fromPalette({name:`surface_bright`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(24,24,29,34).get(e.contrastLevel):98,isBackground:!0})}surfaceContainerLowest(){return I.fromPalette({name:`surface_container_lowest`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(4,4,2,0).get(e.contrastLevel):100,isBackground:!0})}surfaceContainerLow(){return I.fromPalette({name:`surface_container_low`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(10,10,11,12).get(e.contrastLevel):new R(96,96,96,95).get(e.contrastLevel),isBackground:!0})}surfaceContainer(){return I.fromPalette({name:`surface_container`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(12,12,16,20).get(e.contrastLevel):new R(94,94,92,90).get(e.contrastLevel),isBackground:!0})}surfaceContainerHigh(){return I.fromPalette({name:`surface_container_high`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(17,17,21,25).get(e.contrastLevel):new R(92,92,88,85).get(e.contrastLevel),isBackground:!0})}surfaceContainerHighest(){return I.fromPalette({name:`surface_container_highest`,palette:e=>e.neutralPalette,tone:e=>e.isDark?new R(22,22,26,30).get(e.contrastLevel):new R(90,90,84,80).get(e.contrastLevel),isBackground:!0})}onSurface(){return I.fromPalette({name:`on_surface`,palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.highestSurface(e),contrastCurve:e=>new R(4.5,7,11,21)})}surfaceVariant(){return I.fromPalette({name:`surface_variant`,palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0})}onSurfaceVariant(){return I.fromPalette({name:`on_surface_variant`,palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>this.highestSurface(e),contrastCurve:e=>new R(3,4.5,7,11)})}inverseSurface(){return I.fromPalette({name:`inverse_surface`,palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20,isBackground:!0})}inverseOnSurface(){return I.fromPalette({name:`inverse_on_surface`,palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>this.inverseSurface(),contrastCurve:e=>new R(4.5,7,11,21)})}outline(){return I.fromPalette({name:`outline`,palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1.5,3,4.5,7)})}outlineVariant(){return I.fromPalette({name:`outline_variant`,palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5)})}shadow(){return I.fromPalette({name:`shadow`,palette:e=>e.neutralPalette,tone:e=>0})}scrim(){return I.fromPalette({name:`scrim`,palette:e=>e.neutralPalette,tone:e=>0})}surfaceTint(){return I.fromPalette({name:`surface_tint`,palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0})}primary(){return I.fromPalette({name:`primary`,palette:e=>e.primaryPalette,tone:e=>H(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(3,4.5,7,7),toneDeltaPair:e=>new z(this.primaryContainer(),this.primary(),10,`nearer`,!1)})}primaryDim(){}onPrimary(){return I.fromPalette({name:`on_primary`,palette:e=>e.primaryPalette,tone:e=>H(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.primary(),contrastCurve:e=>new R(4.5,7,11,21)})}primaryContainer(){return I.fromPalette({name:`primary_container`,palette:e=>e.primaryPalette,tone:e=>V(e)?e.sourceColorHct.tone:H(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.primaryContainer(),this.primary(),10,`nearer`,!1)})}onPrimaryContainer(){return I.fromPalette({name:`on_primary_container`,palette:e=>e.primaryPalette,tone:e=>V(e)?I.foregroundTone(this.primaryContainer().tone(e),4.5):H(e)?e.isDark?0:100:e.isDark?90:30,background:e=>this.primaryContainer(),contrastCurve:e=>new R(3,4.5,7,11)})}inversePrimary(){return I.fromPalette({name:`inverse_primary`,palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>this.inverseSurface(),contrastCurve:e=>new R(3,4.5,7,7)})}secondary(){return I.fromPalette({name:`secondary`,palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(3,4.5,7,7),toneDeltaPair:e=>new z(this.secondaryContainer(),this.secondary(),10,`nearer`,!1)})}secondaryDim(){}onSecondary(){return I.fromPalette({name:`on_secondary`,palette:e=>e.secondaryPalette,tone:e=>H(e)?e.isDark?10:100:e.isDark?20:100,background:e=>this.secondary(),contrastCurve:e=>new R(4.5,7,11,21)})}secondaryContainer(){return I.fromPalette({name:`secondary_container`,palette:e=>e.secondaryPalette,tone:e=>{let t=e.isDark?30:90;return H(e)?e.isDark?30:85:V(e)?de(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.secondaryContainer(),this.secondary(),10,`nearer`,!1)})}onSecondaryContainer(){return I.fromPalette({name:`on_secondary_container`,palette:e=>e.secondaryPalette,tone:e=>H(e)?e.isDark?90:10:V(e)?I.foregroundTone(this.secondaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.secondaryContainer(),contrastCurve:e=>new R(3,4.5,7,11)})}tertiary(){return I.fromPalette({name:`tertiary`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(3,4.5,7,7),toneDeltaPair:e=>new z(this.tertiaryContainer(),this.tertiary(),10,`nearer`,!1)})}tertiaryDim(){}onTertiary(){return I.fromPalette({name:`on_tertiary`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.tertiary(),contrastCurve:e=>new R(4.5,7,11,21)})}tertiaryContainer(){return I.fromPalette({name:`tertiary_container`,palette:e=>e.tertiaryPalette,tone:e=>{if(H(e))return e.isDark?60:49;if(!V(e))return e.isDark?30:90;let t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return ne.fixIfDisliked(t).tone},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.tertiaryContainer(),this.tertiary(),10,`nearer`,!1)})}onTertiaryContainer(){return I.fromPalette({name:`on_tertiary_container`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?e.isDark?0:100:V(e)?I.foregroundTone(this.tertiaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.tertiaryContainer(),contrastCurve:e=>new R(3,4.5,7,11)})}error(){return I.fromPalette({name:`error`,palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(3,4.5,7,7),toneDeltaPair:e=>new z(this.errorContainer(),this.error(),10,`nearer`,!1)})}errorDim(){}onError(){return I.fromPalette({name:`on_error`,palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>this.error(),contrastCurve:e=>new R(4.5,7,11,21)})}errorContainer(){return I.fromPalette({name:`error_container`,palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.errorContainer(),this.error(),10,`nearer`,!1)})}onErrorContainer(){return I.fromPalette({name:`on_error_container`,palette:e=>e.errorPalette,tone:e=>H(e)?e.isDark?90:10:e.isDark?90:30,background:e=>this.errorContainer(),contrastCurve:e=>new R(3,4.5,7,11)})}primaryFixed(){return I.fromPalette({name:`primary_fixed`,palette:e=>e.primaryPalette,tone:e=>H(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.primaryFixed(),this.primaryFixedDim(),10,`lighter`,!0)})}primaryFixedDim(){return I.fromPalette({name:`primary_fixed_dim`,palette:e=>e.primaryPalette,tone:e=>H(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.primaryFixed(),this.primaryFixedDim(),10,`lighter`,!0)})}onPrimaryFixed(){return I.fromPalette({name:`on_primary_fixed`,palette:e=>e.primaryPalette,tone:e=>H(e)?100:10,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new R(4.5,7,11,21)})}onPrimaryFixedVariant(){return I.fromPalette({name:`on_primary_fixed_variant`,palette:e=>e.primaryPalette,tone:e=>H(e)?90:30,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new R(3,4.5,7,11)})}secondaryFixed(){return I.fromPalette({name:`secondary_fixed`,palette:e=>e.secondaryPalette,tone:e=>H(e)?80:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.secondaryFixed(),this.secondaryFixedDim(),10,`lighter`,!0)})}secondaryFixedDim(){return I.fromPalette({name:`secondary_fixed_dim`,palette:e=>e.secondaryPalette,tone:e=>H(e)?70:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.secondaryFixed(),this.secondaryFixedDim(),10,`lighter`,!0)})}onSecondaryFixed(){return I.fromPalette({name:`on_secondary_fixed`,palette:e=>e.secondaryPalette,tone:e=>10,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new R(4.5,7,11,21)})}onSecondaryFixedVariant(){return I.fromPalette({name:`on_secondary_fixed_variant`,palette:e=>e.secondaryPalette,tone:e=>H(e)?25:30,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new R(3,4.5,7,11)})}tertiaryFixed(){return I.fromPalette({name:`tertiary_fixed`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.tertiaryFixed(),this.tertiaryFixedDim(),10,`lighter`,!0)})}tertiaryFixedDim(){return I.fromPalette({name:`tertiary_fixed_dim`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new R(1,1,3,4.5),toneDeltaPair:e=>new z(this.tertiaryFixed(),this.tertiaryFixedDim(),10,`lighter`,!0)})}onTertiaryFixed(){return I.fromPalette({name:`on_tertiary_fixed`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?100:10,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new R(4.5,7,11,21)})}onTertiaryFixedVariant(){return I.fromPalette({name:`on_tertiary_fixed_variant`,palette:e=>e.tertiaryPalette,tone:e=>H(e)?90:30,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new R(3,4.5,7,11)})}highestSurface(e){return e.isDark?this.surfaceBright():this.surfaceDim()}};
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function U(e,t=0,n=100,i=1){return r(t,n,pe(e.hue,e.chroma*i,100,!0))}function W(e,t=0,n=100){return r(t,n,pe(e.hue,e.chroma,0,!1))}function pe(e,t,n,r){let i=n,a=N.from(e,t,i);for(;a.chroma<t&&!(n<0||n>100);){n+=r?-1:1;let o=N.from(e,t,n);a.chroma<o.chroma&&(a=o,i=n)}return i}function G(e){return e===1.5?new R(1.5,1.5,3,5.5):e===3?new R(3,3,4.5,7):e===4.5?new R(4.5,4.5,7,11):e===6?new R(6,6,7,11):e===7?new R(7,7,11,21):e===9?new R(9,9,11,21):e===11?new R(11,11,21,21):e===21?new R(21,21,21,21):new R(e,e,7,21)}var me=class extends fe{surface(){let e=I.fromPalette({name:`surface`,palette:e=>e.neutralPalette,tone:e=>(super.surface().tone(e),e.platform===`phone`?e.isDark?4:N.isYellow(e.neutralPalette.hue)?99:e.variant===B.VIBRANT?97:98:0),isBackground:!0});return F(super.surface(),`2025`,e)}surfaceDim(){let e=I.fromPalette({name:`surface_dim`,palette:e=>e.neutralPalette,tone:e=>e.isDark?4:N.isYellow(e.neutralPalette.hue)?90:e.variant===B.VIBRANT?85:87,isBackground:!0,chromaMultiplier:e=>{if(!e.isDark){if(e.variant===B.NEUTRAL)return 2.5;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===B.VIBRANT)return 1.36}return 1}});return F(super.surfaceDim(),`2025`,e)}surfaceBright(){let e=I.fromPalette({name:`surface_bright`,palette:e=>e.neutralPalette,tone:e=>e.isDark?18:N.isYellow(e.neutralPalette.hue)?99:e.variant===B.VIBRANT?97:98,isBackground:!0,chromaMultiplier:e=>{if(e.isDark){if(e.variant===B.NEUTRAL)return 2.5;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===B.VIBRANT)return 1.36}return 1}});return F(super.surfaceBright(),`2025`,e)}surfaceContainerLowest(){let e=I.fromPalette({name:`surface_container_lowest`,palette:e=>e.neutralPalette,tone:e=>e.isDark?0:100,isBackground:!0});return F(super.surfaceContainerLowest(),`2025`,e)}surfaceContainerLow(){let e=I.fromPalette({name:`surface_container_low`,palette:e=>e.neutralPalette,tone:e=>e.platform===`phone`?e.isDark?6:N.isYellow(e.neutralPalette.hue)?98:e.variant===B.VIBRANT?95:96:15,isBackground:!0,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 1.3;if(e.variant===B.TONAL_SPOT)return 1.25;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?1.3:1.15;if(e.variant===B.VIBRANT)return 1.08}return 1}});return F(super.surfaceContainerLow(),`2025`,e)}surfaceContainer(){let e=I.fromPalette({name:`surface_container`,palette:e=>e.neutralPalette,tone:e=>e.platform===`phone`?e.isDark?9:N.isYellow(e.neutralPalette.hue)?96:e.variant===B.VIBRANT?92:94:20,isBackground:!0,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 1.6;if(e.variant===B.TONAL_SPOT)return 1.4;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?1.6:1.3;if(e.variant===B.VIBRANT)return 1.15}return 1}});return F(super.surfaceContainer(),`2025`,e)}surfaceContainerHigh(){let e=I.fromPalette({name:`surface_container_high`,palette:e=>e.neutralPalette,tone:e=>e.platform===`phone`?e.isDark?12:N.isYellow(e.neutralPalette.hue)?94:e.variant===B.VIBRANT?90:92:25,isBackground:!0,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 1.9;if(e.variant===B.TONAL_SPOT)return 1.5;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?1.95:1.45;if(e.variant===B.VIBRANT)return 1.22}return 1}});return F(super.surfaceContainerHigh(),`2025`,e)}surfaceContainerHighest(){let e=I.fromPalette({name:`surface_container_highest`,palette:e=>e.neutralPalette,tone:e=>e.isDark?15:N.isYellow(e.neutralPalette.hue)?92:e.variant===B.VIBRANT?88:90,isBackground:!0,chromaMultiplier:e=>e.variant===B.NEUTRAL?2.2:e.variant===B.TONAL_SPOT?1.7:e.variant===B.EXPRESSIVE?N.isYellow(e.neutralPalette.hue)?2.3:1.6:e.variant===B.VIBRANT?1.29:1});return F(super.surfaceContainerHighest(),`2025`,e)}onSurface(){let e=I.fromPalette({name:`on_surface`,palette:e=>e.neutralPalette,tone:e=>e.variant===B.VIBRANT?U(e.neutralPalette,0,100,1.1):I.getInitialToneFromBackground(e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh())(e),chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 2.2;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.isDark&&e.platform===`phone`?G(11):G(9)});return F(super.onSurface(),`2025`,e)}onSurfaceVariant(){let e=I.fromPalette({name:`on_surface_variant`,palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 2.2;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?e.isDark?G(6):G(4.5):G(7)});return F(super.onSurfaceVariant(),`2025`,e)}outline(){let e=I.fromPalette({name:`outline`,palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 2.2;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(3):G(4.5)});return F(super.outline(),`2025`,e)}outlineVariant(){let e=I.fromPalette({name:`outline_variant`,palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform===`phone`){if(e.variant===B.NEUTRAL)return 2.2;if(e.variant===B.TONAL_SPOT)return 1.7;if(e.variant===B.EXPRESSIVE)return N.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(1.5):G(3)});return F(super.outlineVariant(),`2025`,e)}inverseSurface(){let e=I.fromPalette({name:`inverse_surface`,palette:e=>e.neutralPalette,tone:e=>e.isDark?98:4,isBackground:!0});return F(super.inverseSurface(),`2025`,e)}inverseOnSurface(){let e=I.fromPalette({name:`inverse_on_surface`,palette:e=>e.neutralPalette,background:e=>this.inverseSurface(),contrastCurve:e=>G(7)});return F(super.inverseOnSurface(),`2025`,e)}primary(){let e=I.fromPalette({name:`primary`,palette:e=>e.primaryPalette,tone:e=>e.variant===B.NEUTRAL?e.platform===`phone`?e.isDark?80:40:90:e.variant===B.TONAL_SPOT?e.platform===`phone`?e.isDark?80:U(e.primaryPalette):U(e.primaryPalette,0,90):e.variant===B.EXPRESSIVE?e.platform===`phone`?U(e.primaryPalette,0,N.isYellow(e.primaryPalette.hue)?25:N.isCyan(e.primaryPalette.hue)?88:98):U(e.primaryPalette):e.platform===`phone`?U(e.primaryPalette,0,N.isCyan(e.primaryPalette.hue)?88:98):U(e.primaryPalette),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(4.5):G(7),toneDeltaPair:e=>e.platform===`phone`?new z(this.primaryContainer(),this.primary(),5,`relative_lighter`,!0,`farther`):void 0});return F(super.primary(),`2025`,e)}primaryDim(){return I.fromPalette({name:`primary_dim`,palette:e=>e.primaryPalette,tone:e=>e.variant===B.NEUTRAL?85:e.variant===B.TONAL_SPOT?U(e.primaryPalette,0,90):U(e.primaryPalette),isBackground:!0,background:e=>this.surfaceContainerHigh(),contrastCurve:e=>G(4.5),toneDeltaPair:e=>new z(this.primaryDim(),this.primary(),5,`darker`,!0,`farther`)})}onPrimary(){let e=I.fromPalette({name:`on_primary`,palette:e=>e.primaryPalette,background:e=>e.platform===`phone`?this.primary():this.primaryDim(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onPrimary(),`2025`,e)}primaryContainer(){let e=I.fromPalette({name:`primary_container`,palette:e=>e.primaryPalette,tone:e=>e.platform===`watch`?30:e.variant===B.NEUTRAL?e.isDark?30:90:e.variant===B.TONAL_SPOT?e.isDark?W(e.primaryPalette,35,93):U(e.primaryPalette,0,90):e.variant===B.EXPRESSIVE?e.isDark?U(e.primaryPalette,30,93):U(e.primaryPalette,78,N.isCyan(e.primaryPalette.hue)?88:90):e.isDark?W(e.primaryPalette,66,93):U(e.primaryPalette,66,N.isCyan(e.primaryPalette.hue)?88:93),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform===`phone`?void 0:new z(this.primaryContainer(),this.primaryDim(),10,`darker`,!0,`farther`),contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.primaryContainer(),`2025`,e)}onPrimaryContainer(){let e=I.fromPalette({name:`on_primary_container`,palette:e=>e.primaryPalette,background:e=>this.primaryContainer(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onPrimaryContainer(),`2025`,e)}primaryFixed(){let e=I.fromPalette({name:`primary_fixed`,palette:e=>e.primaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.primaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.primaryFixed(),`2025`,e)}primaryFixedDim(){let e=I.fromPalette({name:`primary_fixed_dim`,palette:e=>e.primaryPalette,tone:e=>this.primaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new z(this.primaryFixedDim(),this.primaryFixed(),5,`darker`,!0,`exact`)});return F(super.primaryFixedDim(),`2025`,e)}onPrimaryFixed(){let e=I.fromPalette({name:`on_primary_fixed`,palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>G(7)});return F(super.onPrimaryFixed(),`2025`,e)}onPrimaryFixedVariant(){let e=I.fromPalette({name:`on_primary_fixed_variant`,palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>G(4.5)});return F(super.onPrimaryFixedVariant(),`2025`,e)}inversePrimary(){let e=I.fromPalette({name:`inverse_primary`,palette:e=>e.primaryPalette,tone:e=>U(e.primaryPalette),background:e=>this.inverseSurface(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.inversePrimary(),`2025`,e)}secondary(){let e=I.fromPalette({name:`secondary`,palette:e=>e.secondaryPalette,tone:e=>e.platform===`watch`?e.variant===B.NEUTRAL?90:U(e.secondaryPalette,0,90):e.variant===B.NEUTRAL?e.isDark?W(e.secondaryPalette,0,98):U(e.secondaryPalette):e.variant===B.VIBRANT?U(e.secondaryPalette,0,e.isDark?90:98):e.isDark?80:U(e.secondaryPalette),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(4.5):G(7),toneDeltaPair:e=>e.platform===`phone`?new z(this.secondaryContainer(),this.secondary(),5,`relative_lighter`,!0,`farther`):void 0});return F(super.secondary(),`2025`,e)}secondaryDim(){return I.fromPalette({name:`secondary_dim`,palette:e=>e.secondaryPalette,tone:e=>e.variant===B.NEUTRAL?85:U(e.secondaryPalette,0,90),isBackground:!0,background:e=>this.surfaceContainerHigh(),contrastCurve:e=>G(4.5),toneDeltaPair:e=>new z(this.secondaryDim(),this.secondary(),5,`darker`,!0,`farther`)})}onSecondary(){let e=I.fromPalette({name:`on_secondary`,palette:e=>e.secondaryPalette,background:e=>e.platform===`phone`?this.secondary():this.secondaryDim(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onSecondary(),`2025`,e)}secondaryContainer(){let e=I.fromPalette({name:`secondary_container`,palette:e=>e.secondaryPalette,tone:e=>e.platform===`watch`?30:e.variant===B.VIBRANT?e.isDark?W(e.secondaryPalette,30,40):U(e.secondaryPalette,84,90):e.variant===B.EXPRESSIVE?e.isDark?15:U(e.secondaryPalette,90,95):e.isDark?25:90,isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform===`watch`?new z(this.secondaryContainer(),this.secondaryDim(),10,`darker`,!0,`farther`):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.secondaryContainer(),`2025`,e)}onSecondaryContainer(){let e=I.fromPalette({name:`on_secondary_container`,palette:e=>e.secondaryPalette,background:e=>this.secondaryContainer(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onSecondaryContainer(),`2025`,e)}secondaryFixed(){let e=I.fromPalette({name:`secondary_fixed`,palette:e=>e.secondaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.secondaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.secondaryFixed(),`2025`,e)}secondaryFixedDim(){let e=I.fromPalette({name:`secondary_fixed_dim`,palette:e=>e.secondaryPalette,tone:e=>this.secondaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new z(this.secondaryFixedDim(),this.secondaryFixed(),5,`darker`,!0,`exact`)});return F(super.secondaryFixedDim(),`2025`,e)}onSecondaryFixed(){let e=I.fromPalette({name:`on_secondary_fixed`,palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>G(7)});return F(super.onSecondaryFixed(),`2025`,e)}onSecondaryFixedVariant(){let e=I.fromPalette({name:`on_secondary_fixed_variant`,palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>G(4.5)});return F(super.onSecondaryFixedVariant(),`2025`,e)}tertiary(){let e=I.fromPalette({name:`tertiary`,palette:e=>e.tertiaryPalette,tone:e=>e.platform===`watch`?e.variant===B.TONAL_SPOT?U(e.tertiaryPalette,0,90):U(e.tertiaryPalette):e.variant===B.EXPRESSIVE||e.variant===B.VIBRANT?U(e.tertiaryPalette,0,N.isCyan(e.tertiaryPalette.hue)?88:e.isDark?98:100):e.isDark?U(e.tertiaryPalette,0,98):U(e.tertiaryPalette),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(4.5):G(7),toneDeltaPair:e=>e.platform===`phone`?new z(this.tertiaryContainer(),this.tertiary(),5,`relative_lighter`,!0,`farther`):void 0});return F(super.tertiary(),`2025`,e)}tertiaryDim(){return I.fromPalette({name:`tertiary_dim`,palette:e=>e.tertiaryPalette,tone:e=>e.variant===B.TONAL_SPOT?U(e.tertiaryPalette,0,90):U(e.tertiaryPalette),isBackground:!0,background:e=>this.surfaceContainerHigh(),contrastCurve:e=>G(4.5),toneDeltaPair:e=>new z(this.tertiaryDim(),this.tertiary(),5,`darker`,!0,`farther`)})}onTertiary(){let e=I.fromPalette({name:`on_tertiary`,palette:e=>e.tertiaryPalette,background:e=>e.platform===`phone`?this.tertiary():this.tertiaryDim(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onTertiary(),`2025`,e)}tertiaryContainer(){let e=I.fromPalette({name:`tertiary_container`,palette:e=>e.tertiaryPalette,tone:e=>e.platform===`watch`?e.variant===B.TONAL_SPOT?U(e.tertiaryPalette,0,90):U(e.tertiaryPalette):e.variant===B.NEUTRAL?e.isDark?U(e.tertiaryPalette,0,93):U(e.tertiaryPalette,0,96):e.variant===B.TONAL_SPOT?U(e.tertiaryPalette,0,e.isDark?93:100):e.variant===B.EXPRESSIVE?U(e.tertiaryPalette,75,N.isCyan(e.tertiaryPalette.hue)?88:e.isDark?93:100):e.isDark?U(e.tertiaryPalette,0,93):U(e.tertiaryPalette,72,100),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform===`watch`?new z(this.tertiaryContainer(),this.tertiaryDim(),10,`darker`,!0,`farther`):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.tertiaryContainer(),`2025`,e)}onTertiaryContainer(){let e=I.fromPalette({name:`on_tertiary_container`,palette:e=>e.tertiaryPalette,background:e=>this.tertiaryContainer(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onTertiaryContainer(),`2025`,e)}tertiaryFixed(){let e=I.fromPalette({name:`tertiary_fixed`,palette:e=>e.tertiaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.tertiaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.tertiaryFixed(),`2025`,e)}tertiaryFixedDim(){let e=I.fromPalette({name:`tertiary_fixed_dim`,palette:e=>e.tertiaryPalette,tone:e=>this.tertiaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new z(this.tertiaryFixedDim(),this.tertiaryFixed(),5,`darker`,!0,`exact`)});return F(super.tertiaryFixedDim(),`2025`,e)}onTertiaryFixed(){let e=I.fromPalette({name:`on_tertiary_fixed`,palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>G(7)});return F(super.onTertiaryFixed(),`2025`,e)}onTertiaryFixedVariant(){let e=I.fromPalette({name:`on_tertiary_fixed_variant`,palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>G(4.5)});return F(super.onTertiaryFixedVariant(),`2025`,e)}error(){let e=I.fromPalette({name:`error`,palette:e=>e.errorPalette,tone:e=>e.platform===`phone`?e.isDark?W(e.errorPalette,0,98):U(e.errorPalette):W(e.errorPalette),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform===`phone`?G(4.5):G(7),toneDeltaPair:e=>e.platform===`phone`?new z(this.errorContainer(),this.error(),5,`relative_lighter`,!0,`farther`):void 0});return F(super.error(),`2025`,e)}errorDim(){return I.fromPalette({name:`error_dim`,palette:e=>e.errorPalette,tone:e=>W(e.errorPalette),isBackground:!0,background:e=>this.surfaceContainerHigh(),contrastCurve:e=>G(4.5),toneDeltaPair:e=>new z(this.errorDim(),this.error(),5,`darker`,!0,`farther`)})}onError(){let e=I.fromPalette({name:`on_error`,palette:e=>e.errorPalette,background:e=>e.platform===`phone`?this.error():this.errorDim(),contrastCurve:e=>e.platform===`phone`?G(6):G(7)});return F(super.onError(),`2025`,e)}errorContainer(){let e=I.fromPalette({name:`error_container`,palette:e=>e.errorPalette,tone:e=>e.platform===`watch`?30:e.isDark?W(e.errorPalette,30,93):U(e.errorPalette,0,90),isBackground:!0,background:e=>e.platform===`phone`?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform===`watch`?new z(this.errorContainer(),this.errorDim(),10,`darker`,!0,`farther`):void 0,contrastCurve:e=>e.platform===`phone`&&e.contrastLevel>0?G(1.5):void 0});return F(super.errorContainer(),`2025`,e)}onErrorContainer(){let e=I.fromPalette({name:`on_error_container`,palette:e=>e.errorPalette,background:e=>this.errorContainer(),contrastCurve:e=>e.platform===`phone`?G(4.5):G(7)});return F(super.onErrorContainer(),`2025`,e)}surfaceVariant(){let e=Object.assign(this.surfaceContainerHighest().clone(),{name:`surface_variant`});return F(super.surfaceVariant(),`2025`,e)}surfaceTint(){let e=Object.assign(this.primary().clone(),{name:`surface_tint`});return F(super.surfaceTint(),`2025`,e)}background(){let e=Object.assign(this.surface().clone(),{name:`background`});return F(super.background(),`2025`,e)}onBackground(){let e=Object.assign(this.onSurface().clone(),{name:`on_background`,tone:e=>e.platform===`watch`?100:this.onSurface().getTone(e)});return F(super.onBackground(),`2025`,e)}},K=class e{constructor(){
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
this.allColors=[this.background(),this.onBackground(),this.surface(),this.surfaceDim(),this.surfaceBright(),this.surfaceContainerLowest(),this.surfaceContainerLow(),this.surfaceContainer(),this.surfaceContainerHigh(),this.surfaceContainerHighest(),this.onSurface(),this.onSurfaceVariant(),this.outline(),this.outlineVariant(),this.inverseSurface(),this.inverseOnSurface(),this.primary(),this.primaryDim(),this.onPrimary(),this.primaryContainer(),this.onPrimaryContainer(),this.primaryFixed(),this.primaryFixedDim(),this.onPrimaryFixed(),this.onPrimaryFixedVariant(),this.inversePrimary(),this.secondary(),this.secondaryDim(),this.onSecondary(),this.secondaryContainer(),this.onSecondaryContainer(),this.secondaryFixed(),this.secondaryFixedDim(),this.onSecondaryFixed(),this.onSecondaryFixedVariant(),this.tertiary(),this.tertiaryDim(),this.onTertiary(),this.tertiaryContainer(),this.onTertiaryContainer(),this.tertiaryFixed(),this.tertiaryFixedDim(),this.onTertiaryFixed(),this.onTertiaryFixedVariant(),this.error(),this.errorDim(),this.onError(),this.errorContainer(),this.onErrorContainer()].filter(e=>e!==void 0)}highestSurface(t){return e.colorSpec.highestSurface(t)}primaryPaletteKeyColor(){return e.colorSpec.primaryPaletteKeyColor()}secondaryPaletteKeyColor(){return e.colorSpec.secondaryPaletteKeyColor()}tertiaryPaletteKeyColor(){return e.colorSpec.tertiaryPaletteKeyColor()}neutralPaletteKeyColor(){return e.colorSpec.neutralPaletteKeyColor()}neutralVariantPaletteKeyColor(){return e.colorSpec.neutralVariantPaletteKeyColor()}errorPaletteKeyColor(){return e.colorSpec.errorPaletteKeyColor()}background(){return e.colorSpec.background()}onBackground(){return e.colorSpec.onBackground()}surface(){return e.colorSpec.surface()}surfaceDim(){return e.colorSpec.surfaceDim()}surfaceBright(){return e.colorSpec.surfaceBright()}surfaceContainerLowest(){return e.colorSpec.surfaceContainerLowest()}surfaceContainerLow(){return e.colorSpec.surfaceContainerLow()}surfaceContainer(){return e.colorSpec.surfaceContainer()}surfaceContainerHigh(){return e.colorSpec.surfaceContainerHigh()}surfaceContainerHighest(){return e.colorSpec.surfaceContainerHighest()}onSurface(){return e.colorSpec.onSurface()}surfaceVariant(){return e.colorSpec.surfaceVariant()}onSurfaceVariant(){return e.colorSpec.onSurfaceVariant()}outline(){return e.colorSpec.outline()}outlineVariant(){return e.colorSpec.outlineVariant()}inverseSurface(){return e.colorSpec.inverseSurface()}inverseOnSurface(){return e.colorSpec.inverseOnSurface()}shadow(){return e.colorSpec.shadow()}scrim(){return e.colorSpec.scrim()}surfaceTint(){return e.colorSpec.surfaceTint()}primary(){return e.colorSpec.primary()}primaryDim(){return e.colorSpec.primaryDim()}onPrimary(){return e.colorSpec.onPrimary()}primaryContainer(){return e.colorSpec.primaryContainer()}onPrimaryContainer(){return e.colorSpec.onPrimaryContainer()}inversePrimary(){return e.colorSpec.inversePrimary()}primaryFixed(){return e.colorSpec.primaryFixed()}primaryFixedDim(){return e.colorSpec.primaryFixedDim()}onPrimaryFixed(){return e.colorSpec.onPrimaryFixed()}onPrimaryFixedVariant(){return e.colorSpec.onPrimaryFixedVariant()}secondary(){return e.colorSpec.secondary()}secondaryDim(){return e.colorSpec.secondaryDim()}onSecondary(){return e.colorSpec.onSecondary()}secondaryContainer(){return e.colorSpec.secondaryContainer()}onSecondaryContainer(){return e.colorSpec.onSecondaryContainer()}secondaryFixed(){return e.colorSpec.secondaryFixed()}secondaryFixedDim(){return e.colorSpec.secondaryFixedDim()}onSecondaryFixed(){return e.colorSpec.onSecondaryFixed()}onSecondaryFixedVariant(){return e.colorSpec.onSecondaryFixedVariant()}tertiary(){return e.colorSpec.tertiary()}tertiaryDim(){return e.colorSpec.tertiaryDim()}onTertiary(){return e.colorSpec.onTertiary()}tertiaryContainer(){return e.colorSpec.tertiaryContainer()}onTertiaryContainer(){return e.colorSpec.onTertiaryContainer()}tertiaryFixed(){return e.colorSpec.tertiaryFixed()}tertiaryFixedDim(){return e.colorSpec.tertiaryFixedDim()}onTertiaryFixed(){return e.colorSpec.onTertiaryFixed()}onTertiaryFixedVariant(){return e.colorSpec.onTertiaryFixedVariant()}error(){return e.colorSpec.error()}errorDim(){return e.colorSpec.errorDim()}onError(){return e.colorSpec.onError()}errorContainer(){return e.colorSpec.errorContainer()}onErrorContainer(){return e.colorSpec.onErrorContainer()}static highestSurface(t){return e.colorSpec.highestSurface(t)}};K.contentAccentToneDelta=15,K.colorSpec=new me,K.primaryPaletteKeyColor=K.colorSpec.primaryPaletteKeyColor(),K.secondaryPaletteKeyColor=K.colorSpec.secondaryPaletteKeyColor(),K.tertiaryPaletteKeyColor=K.colorSpec.tertiaryPaletteKeyColor(),K.neutralPaletteKeyColor=K.colorSpec.neutralPaletteKeyColor(),K.neutralVariantPaletteKeyColor=K.colorSpec.neutralVariantPaletteKeyColor(),K.background=K.colorSpec.background(),K.onBackground=K.colorSpec.onBackground(),K.surface=K.colorSpec.surface(),K.surfaceDim=K.colorSpec.surfaceDim(),K.surfaceBright=K.colorSpec.surfaceBright(),K.surfaceContainerLowest=K.colorSpec.surfaceContainerLowest(),K.surfaceContainerLow=K.colorSpec.surfaceContainerLow(),K.surfaceContainer=K.colorSpec.surfaceContainer(),K.surfaceContainerHigh=K.colorSpec.surfaceContainerHigh(),K.surfaceContainerHighest=K.colorSpec.surfaceContainerHighest(),K.onSurface=K.colorSpec.onSurface(),K.surfaceVariant=K.colorSpec.surfaceVariant(),K.onSurfaceVariant=K.colorSpec.onSurfaceVariant(),K.inverseSurface=K.colorSpec.inverseSurface(),K.inverseOnSurface=K.colorSpec.inverseOnSurface(),K.outline=K.colorSpec.outline(),K.outlineVariant=K.colorSpec.outlineVariant(),K.shadow=K.colorSpec.shadow(),K.scrim=K.colorSpec.scrim(),K.surfaceTint=K.colorSpec.surfaceTint(),K.primary=K.colorSpec.primary(),K.onPrimary=K.colorSpec.onPrimary(),K.primaryContainer=K.colorSpec.primaryContainer(),K.onPrimaryContainer=K.colorSpec.onPrimaryContainer(),K.inversePrimary=K.colorSpec.inversePrimary(),K.secondary=K.colorSpec.secondary(),K.onSecondary=K.colorSpec.onSecondary(),K.secondaryContainer=K.colorSpec.secondaryContainer(),K.onSecondaryContainer=K.colorSpec.onSecondaryContainer(),K.tertiary=K.colorSpec.tertiary(),K.onTertiary=K.colorSpec.onTertiary(),K.tertiaryContainer=K.colorSpec.tertiaryContainer(),K.onTertiaryContainer=K.colorSpec.onTertiaryContainer(),K.error=K.colorSpec.error(),K.onError=K.colorSpec.onError(),K.errorContainer=K.colorSpec.errorContainer(),K.onErrorContainer=K.colorSpec.onErrorContainer(),K.primaryFixed=K.colorSpec.primaryFixed(),K.primaryFixedDim=K.colorSpec.primaryFixedDim(),K.onPrimaryFixed=K.colorSpec.onPrimaryFixed(),K.onPrimaryFixedVariant=K.colorSpec.onPrimaryFixedVariant(),K.secondaryFixed=K.colorSpec.secondaryFixed(),K.secondaryFixedDim=K.colorSpec.secondaryFixedDim(),K.onSecondaryFixed=K.colorSpec.onSecondaryFixed(),K.onSecondaryFixedVariant=K.colorSpec.onSecondaryFixedVariant(),K.tertiaryFixed=K.colorSpec.tertiaryFixed(),K.tertiaryFixedDim=K.colorSpec.tertiaryFixedDim(),K.onTertiaryFixed=K.colorSpec.onTertiaryFixed(),K.onTertiaryFixedVariant=K.colorSpec.onTertiaryFixedVariant();
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var q=class e{static maybeFallbackSpecVersion(e,t){switch(t){case B.EXPRESSIVE:case B.VIBRANT:case B.TONAL_SPOT:case B.NEUTRAL:return e;default:return`2021`}}constructor(t){this.sourceColorArgb=t.sourceColorHct.toInt(),this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.platform=t.platform??`phone`,this.specVersion=e.maybeFallbackSpecVersion(t.specVersion??`2021`,this.variant),this.sourceColorHct=t.sourceColorHct,this.primaryPalette=t.primaryPalette??ye(this.specVersion).getPrimaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.secondaryPalette=t.secondaryPalette??ye(this.specVersion).getSecondaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.tertiaryPalette=t.tertiaryPalette??ye(this.specVersion).getTertiaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.neutralPalette=t.neutralPalette??ye(this.specVersion).getNeutralPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.neutralVariantPalette=t.neutralVariantPalette??ye(this.specVersion).getNeutralVariantPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.errorPalette=t.errorPalette??ye(this.specVersion).getErrorPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel)??L.fromHueAndChroma(25,84),this.colors=new K}toString(){return`Scheme: variant=${B[this.variant]}, mode=${this.isDark?`dark`:`light`}, platform=${this.platform}, contrastLevel=${this.contrastLevel.toFixed(1)}, seed=${this.sourceColorHct.toString()}, specVersion=${this.specVersion}`}static getPiecewiseHue(e,t,n){let r=Math.min(t.length-1,n.length),i=e.hue;for(let e=0;e<r;e++)if(i>=t[e]&&i<t[e+1])return a(n[e]);return i}static getRotatedHue(t,n,r){let i=e.getPiecewiseHue(t,n,r);return Math.min(n.length-1,r.length)<=0&&(i=0),a(t.hue+i)}getArgb(e){return e.getArgb(this)}getHct(e){return e.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(this.colors.primaryPaletteKeyColor())}get secondaryPaletteKeyColor(){return this.getArgb(this.colors.secondaryPaletteKeyColor())}get tertiaryPaletteKeyColor(){return this.getArgb(this.colors.tertiaryPaletteKeyColor())}get neutralPaletteKeyColor(){return this.getArgb(this.colors.neutralPaletteKeyColor())}get neutralVariantPaletteKeyColor(){return this.getArgb(this.colors.neutralVariantPaletteKeyColor())}get errorPaletteKeyColor(){return this.getArgb(this.colors.errorPaletteKeyColor())}get background(){return this.getArgb(this.colors.background())}get onBackground(){return this.getArgb(this.colors.onBackground())}get surface(){return this.getArgb(this.colors.surface())}get surfaceDim(){return this.getArgb(this.colors.surfaceDim())}get surfaceBright(){return this.getArgb(this.colors.surfaceBright())}get surfaceContainerLowest(){return this.getArgb(this.colors.surfaceContainerLowest())}get surfaceContainerLow(){return this.getArgb(this.colors.surfaceContainerLow())}get surfaceContainer(){return this.getArgb(this.colors.surfaceContainer())}get surfaceContainerHigh(){return this.getArgb(this.colors.surfaceContainerHigh())}get surfaceContainerHighest(){return this.getArgb(this.colors.surfaceContainerHighest())}get onSurface(){return this.getArgb(this.colors.onSurface())}get surfaceVariant(){return this.getArgb(this.colors.surfaceVariant())}get onSurfaceVariant(){return this.getArgb(this.colors.onSurfaceVariant())}get inverseSurface(){return this.getArgb(this.colors.inverseSurface())}get inverseOnSurface(){return this.getArgb(this.colors.inverseOnSurface())}get outline(){return this.getArgb(this.colors.outline())}get outlineVariant(){return this.getArgb(this.colors.outlineVariant())}get shadow(){return this.getArgb(this.colors.shadow())}get scrim(){return this.getArgb(this.colors.scrim())}get surfaceTint(){return this.getArgb(this.colors.surfaceTint())}get primary(){return this.getArgb(this.colors.primary())}get primaryDim(){let e=this.colors.primaryDim();if(e===void 0)throw Error("`primaryDim` color is undefined prior to 2025 spec.");return this.getArgb(e)}get onPrimary(){return this.getArgb(this.colors.onPrimary())}get primaryContainer(){return this.getArgb(this.colors.primaryContainer())}get onPrimaryContainer(){return this.getArgb(this.colors.onPrimaryContainer())}get primaryFixed(){return this.getArgb(this.colors.primaryFixed())}get primaryFixedDim(){return this.getArgb(this.colors.primaryFixedDim())}get onPrimaryFixed(){return this.getArgb(this.colors.onPrimaryFixed())}get onPrimaryFixedVariant(){return this.getArgb(this.colors.onPrimaryFixedVariant())}get inversePrimary(){return this.getArgb(this.colors.inversePrimary())}get secondary(){return this.getArgb(this.colors.secondary())}get secondaryDim(){let e=this.colors.secondaryDim();if(e===void 0)throw Error("`secondaryDim` color is undefined prior to 2025 spec.");return this.getArgb(e)}get onSecondary(){return this.getArgb(this.colors.onSecondary())}get secondaryContainer(){return this.getArgb(this.colors.secondaryContainer())}get onSecondaryContainer(){return this.getArgb(this.colors.onSecondaryContainer())}get secondaryFixed(){return this.getArgb(this.colors.secondaryFixed())}get secondaryFixedDim(){return this.getArgb(this.colors.secondaryFixedDim())}get onSecondaryFixed(){return this.getArgb(this.colors.onSecondaryFixed())}get onSecondaryFixedVariant(){return this.getArgb(this.colors.onSecondaryFixedVariant())}get tertiary(){return this.getArgb(this.colors.tertiary())}get tertiaryDim(){let e=this.colors.tertiaryDim();if(e===void 0)throw Error("`tertiaryDim` color is undefined prior to 2025 spec.");return this.getArgb(e)}get onTertiary(){return this.getArgb(this.colors.onTertiary())}get tertiaryContainer(){return this.getArgb(this.colors.tertiaryContainer())}get onTertiaryContainer(){return this.getArgb(this.colors.onTertiaryContainer())}get tertiaryFixed(){return this.getArgb(this.colors.tertiaryFixed())}get tertiaryFixedDim(){return this.getArgb(this.colors.tertiaryFixedDim())}get onTertiaryFixed(){return this.getArgb(this.colors.onTertiaryFixed())}get onTertiaryFixedVariant(){return this.getArgb(this.colors.onTertiaryFixedVariant())}get error(){return this.getArgb(this.colors.error())}get errorDim(){let e=this.colors.errorDim();if(e===void 0)throw Error("`errorDim` color is undefined prior to 2025 spec.");return this.getArgb(e)}get onError(){return this.getArgb(this.colors.onError())}get errorContainer(){return this.getArgb(this.colors.errorContainer())}get onErrorContainer(){return this.getArgb(this.colors.onErrorContainer())}};q.DEFAULT_SPEC_VERSION=`2021`,q.DEFAULT_PLATFORM=`phone`;var he=class{getPrimaryPalette(e,t,n,r,i){switch(e){case B.CONTENT:case B.FIDELITY:return L.fromHueAndChroma(t.hue,t.chroma);case B.FRUIT_SALAD:return L.fromHueAndChroma(a(t.hue-50),48);case B.MONOCHROME:return L.fromHueAndChroma(t.hue,0);case B.NEUTRAL:return L.fromHueAndChroma(t.hue,12);case B.RAINBOW:return L.fromHueAndChroma(t.hue,48);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,36);case B.EXPRESSIVE:return L.fromHueAndChroma(a(t.hue+240),40);case B.VIBRANT:return L.fromHueAndChroma(t.hue,200);default:throw Error(`Unsupported variant: ${e}`)}}getSecondaryPalette(e,t,n,r,i){switch(e){case B.CONTENT:case B.FIDELITY:return L.fromHueAndChroma(t.hue,Math.max(t.chroma-32,t.chroma*.5));case B.FRUIT_SALAD:return L.fromHueAndChroma(a(t.hue-50),36);case B.MONOCHROME:return L.fromHueAndChroma(t.hue,0);case B.NEUTRAL:return L.fromHueAndChroma(t.hue,8);case B.RAINBOW:return L.fromHueAndChroma(t.hue,16);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,16);case B.EXPRESSIVE:return L.fromHueAndChroma(q.getRotatedHue(t,[0,21,51,121,151,191,271,321,360],[45,95,45,20,45,90,45,45,45]),24);case B.VIBRANT:return L.fromHueAndChroma(q.getRotatedHue(t,[0,41,61,101,131,181,251,301,360],[18,15,10,12,15,18,15,12,12]),24);default:throw Error(`Unsupported variant: ${e}`)}}getTertiaryPalette(e,t,n,r,i){switch(e){case B.CONTENT:return L.fromHct(ne.fixIfDisliked(new ue(t).analogous(3,6)[2]));case B.FIDELITY:return L.fromHct(ne.fixIfDisliked(new ue(t).complement));case B.FRUIT_SALAD:return L.fromHueAndChroma(t.hue,36);case B.MONOCHROME:return L.fromHueAndChroma(t.hue,0);case B.NEUTRAL:return L.fromHueAndChroma(t.hue,16);case B.RAINBOW:case B.TONAL_SPOT:return L.fromHueAndChroma(a(t.hue+60),24);case B.EXPRESSIVE:return L.fromHueAndChroma(q.getRotatedHue(t,[0,21,51,121,151,191,271,321,360],[120,120,20,45,20,15,20,120,120]),32);case B.VIBRANT:return L.fromHueAndChroma(q.getRotatedHue(t,[0,41,61,101,131,181,251,301,360],[35,30,20,25,30,35,30,25,25]),32);default:throw Error(`Unsupported variant: ${e}`)}}getNeutralPalette(e,t,n,r,i){switch(e){case B.CONTENT:case B.FIDELITY:return L.fromHueAndChroma(t.hue,t.chroma/8);case B.FRUIT_SALAD:return L.fromHueAndChroma(t.hue,10);case B.MONOCHROME:return L.fromHueAndChroma(t.hue,0);case B.NEUTRAL:return L.fromHueAndChroma(t.hue,2);case B.RAINBOW:return L.fromHueAndChroma(t.hue,0);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,6);case B.EXPRESSIVE:return L.fromHueAndChroma(a(t.hue+15),8);case B.VIBRANT:return L.fromHueAndChroma(t.hue,10);default:throw Error(`Unsupported variant: ${e}`)}}getNeutralVariantPalette(e,t,n,r,i){switch(e){case B.CONTENT:return L.fromHueAndChroma(t.hue,t.chroma/8+4);case B.FIDELITY:return L.fromHueAndChroma(t.hue,t.chroma/8+4);case B.FRUIT_SALAD:return L.fromHueAndChroma(t.hue,16);case B.MONOCHROME:return L.fromHueAndChroma(t.hue,0);case B.NEUTRAL:return L.fromHueAndChroma(t.hue,2);case B.RAINBOW:return L.fromHueAndChroma(t.hue,0);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,8);case B.EXPRESSIVE:return L.fromHueAndChroma(a(t.hue+15),12);case B.VIBRANT:return L.fromHueAndChroma(t.hue,12);default:throw Error(`Unsupported variant: ${e}`)}}getErrorPalette(e,t,n,r,i){}},ge=class e extends he{getPrimaryPalette(e,t,n,r,i){switch(e){case B.NEUTRAL:return L.fromHueAndChroma(t.hue,r===`phone`?N.isBlue(t.hue)?12:8:N.isBlue(t.hue)?16:12);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,r===`phone`&&n?26:32);case B.EXPRESSIVE:return L.fromHueAndChroma(t.hue,r===`phone`?n?36:48:40);case B.VIBRANT:return L.fromHueAndChroma(t.hue,r===`phone`?74:56);default:return super.getPrimaryPalette(e,t,n,r,i)}}getSecondaryPalette(e,t,n,r,i){switch(e){case B.NEUTRAL:return L.fromHueAndChroma(t.hue,r===`phone`?N.isBlue(t.hue)?6:4:N.isBlue(t.hue)?10:6);case B.TONAL_SPOT:return L.fromHueAndChroma(t.hue,16);case B.EXPRESSIVE:return L.fromHueAndChroma(q.getRotatedHue(t,[0,105,140,204,253,278,300,333,360],[-160,155,-100,96,-96,-156,-165,-160]),r===`phone`&&n?16:24);case B.VIBRANT:return L.fromHueAndChroma(q.getRotatedHue(t,[0,38,105,140,333,360],[-14,10,-14,10,-14]),r===`phone`?56:36);default:return super.getSecondaryPalette(e,t,n,r,i)}}getTertiaryPalette(e,t,n,r,i){switch(e){case B.NEUTRAL:return L.fromHueAndChroma(q.getRotatedHue(t,[0,38,105,161,204,278,333,360],[-32,26,10,-39,24,-15,-32]),r===`phone`?20:36);case B.TONAL_SPOT:return L.fromHueAndChroma(q.getRotatedHue(t,[0,20,71,161,333,360],[-40,48,-32,40,-32]),r===`phone`?28:32);case B.EXPRESSIVE:return L.fromHueAndChroma(q.getRotatedHue(t,[0,105,140,204,253,278,300,333,360],[-165,160,-105,101,-101,-160,-170,-165]),48);case B.VIBRANT:return L.fromHueAndChroma(q.getRotatedHue(t,[0,38,71,105,140,161,253,333,360],[-72,35,24,-24,62,50,62,-72]),56);default:return super.getTertiaryPalette(e,t,n,r,i)}}static getExpressiveNeutralHue(e){return q.getRotatedHue(e,[0,71,124,253,278,300,360],[10,0,10,0,10,0])}static getExpressiveNeutralChroma(t,n,r){let i=e.getExpressiveNeutralHue(t);return r===`phone`?n?N.isYellow(i)?6:14:18:12}static getVibrantNeutralHue(e){return q.getRotatedHue(e,[0,38,105,140,333,360],[-14,10,-14,10,-14])}static getVibrantNeutralChroma(t,n){let r=e.getVibrantNeutralHue(t);return n===`phone`||N.isBlue(r)?28:20}getNeutralPalette(t,n,r,i,a){switch(t){case B.NEUTRAL:return L.fromHueAndChroma(n.hue,i===`phone`?1.4:6);case B.TONAL_SPOT:return L.fromHueAndChroma(n.hue,i===`phone`?5:10);case B.EXPRESSIVE:return L.fromHueAndChroma(e.getExpressiveNeutralHue(n),e.getExpressiveNeutralChroma(n,r,i));case B.VIBRANT:return L.fromHueAndChroma(e.getVibrantNeutralHue(n),e.getVibrantNeutralChroma(n,i));default:return super.getNeutralPalette(t,n,r,i,a)}}getNeutralVariantPalette(t,n,r,i,a){switch(t){case B.NEUTRAL:return L.fromHueAndChroma(n.hue,(i===`phone`?1.4:6)*2.2);case B.TONAL_SPOT:return L.fromHueAndChroma(n.hue,(i===`phone`?5:10)*1.7);case B.EXPRESSIVE:let o=e.getExpressiveNeutralHue(n),s=e.getExpressiveNeutralChroma(n,r,i);return L.fromHueAndChroma(o,s*(o>=105&&o<125?1.6:2.3));case B.VIBRANT:let c=e.getVibrantNeutralHue(n),l=e.getVibrantNeutralChroma(n,i);return L.fromHueAndChroma(c,l*1.29);default:return super.getNeutralVariantPalette(t,n,r,i,a)}}getErrorPalette(e,t,n,r,i){let a=q.getPiecewiseHue(t,[0,3,13,23,33,43,153,273,360],[12,22,32,12,22,32,22,12]);switch(e){case B.NEUTRAL:return L.fromHueAndChroma(a,r===`phone`?50:40);case B.TONAL_SPOT:return L.fromHueAndChroma(a,r===`phone`?60:48);case B.EXPRESSIVE:return L.fromHueAndChroma(a,r===`phone`?64:48);case B.VIBRANT:return L.fromHueAndChroma(a,r===`phone`?80:60);default:return super.getErrorPalette(e,t,n,r,i)}}};let _e=new he,ve=new ge;function ye(e){return e===`2025`?ve:_e}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var be=class e{static of(t){return new e(t,!1)}static contentOf(t){return new e(t,!0)}static fromColors(t){return e.createPaletteFromColors(!1,t)}static contentFromColors(t){return e.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,n){let r=new e(n.primary,t);return n.secondary&&(r.a2=new e(n.secondary,t).a1),n.tertiary&&(r.a3=new e(n.tertiary,t).a1),n.error&&(r.error=new e(n.error,t).a1),n.neutral&&(r.n1=new e(n.neutral,t).n1),n.neutralVariant&&(r.n2=new e(n.neutralVariant,t).n2),r}constructor(e,t){let n=N.fromInt(e),r=n.hue,i=n.chroma;t?(this.a1=L.fromHueAndChroma(r,i),this.a2=L.fromHueAndChroma(r,i/3),this.a3=L.fromHueAndChroma(r+60,i/2),this.n1=L.fromHueAndChroma(r,Math.min(i/12,4)),this.n2=L.fromHueAndChroma(r,Math.min(i/6,8))):(this.a1=L.fromHueAndChroma(r,Math.max(48,i)),this.a2=L.fromHueAndChroma(r,16),this.a3=L.fromHueAndChroma(r+60,24),this.n1=L.fromHueAndChroma(r,4),this.n2=L.fromHueAndChroma(r,8)),this.error=L.fromHueAndChroma(25,84)}},xe=class{fromInt(e){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
return x(e)}toInt(e){return b(e[0],e[1],e[2])}distance(e,t){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}},Se=class{static quantize(e,t,n){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let r=/* @__PURE__ */ new Map,i=[],a=[],o=new xe,s=0;for(let t=0;t<e.length;t++){let n=e[t],c=r.get(n);c===void 0?(s++,i.push(o.fromInt(n)),a.push(n),r.set(n,1)):r.set(n,c+1)}let c=[];for(let e=0;e<s;e++){let t=a[e],n=r.get(t);n!==void 0&&(c[e]=n)}let l=Math.min(n,s);t.length>0&&(l=Math.min(l,t.length));let u=[];for(let e=0;e<t.length;e++)u.push(o.fromInt(t[e]));let d=l-u.length;if(t.length===0&&d>0)for(let e=0;e<d;e++){let e=Math.random()*100,t=Math.random()*201+-100,n=Math.random()*201+-100;u.push([e,t,n])}let f=[];for(let e=0;e<s;e++)f.push(Math.floor(Math.random()*l));let p=[];for(let e=0;e<l;e++){p.push([]);for(let t=0;t<l;t++)p[e].push(0)}let m=[];for(let e=0;e<l;e++){m.push([]);for(let t=0;t<l;t++)m[e].push(new Ce)}let h=[];for(let e=0;e<l;e++)h.push(0);for(let e=0;e<10;e++){for(let e=0;e<l;e++){for(let t=e+1;t<l;t++){let n=o.distance(u[e],u[t]);m[t][e].distance=n,m[t][e].index=e,m[e][t].distance=n,m[e][t].index=t}m[e].sort();for(let t=0;t<l;t++)p[e][t]=m[e][t].index}let t=0;for(let e=0;e<s;e++){let n=i[e],r=f[e],a=u[r],s=o.distance(n,a),c=s,d=-1;for(let e=0;e<l;e++){if(m[r][e].distance>=4*s)continue;let t=o.distance(n,u[e]);t<c&&(c=t,d=e)}d!==-1&&Math.abs(Math.sqrt(c)-Math.sqrt(s))>3&&(t++,f[e]=d)}if(t===0&&e!==0)break;let n=Array(l).fill(0),r=Array(l).fill(0),a=Array(l).fill(0);for(let e=0;e<l;e++)h[e]=0;for(let e=0;e<s;e++){let t=f[e],o=i[e],s=c[e];h[t]+=s,n[t]+=o[0]*s,r[t]+=o[1]*s,a[t]+=o[2]*s}for(let e=0;e<l;e++){let t=h[e];if(t===0){u[e]=[0,0,0];continue}let i=n[e]/t,o=r[e]/t,s=a[e]/t;u[e]=[i,o,s]}}let g=/* @__PURE__ */ new Map;for(let e=0;e<l;e++){let t=h[e];if(t===0)continue;let n=o.toInt(u[e]);g.has(n)||g.set(n,t)}return g}},Ce=class{constructor(){this.distance=-1,this.index=-1}},we=class{static quantize(e){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let t=/* @__PURE__ */ new Map;for(let n=0;n<e.length;n++){let r=e[n];m(r)<255||t.set(r,(t.get(r)??0)+1)}return t}};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Te=35937,J={RED:`red`,GREEN:`green`,BLUE:`blue`};var Ee=class{constructor(e=[],t=[],n=[],r=[],i=[],a=[]){this.weights=e,this.momentsR=t,this.momentsG=n,this.momentsB=r,this.moments=i,this.cubes=a}quantize(e,t){this.constructHistogram(e),this.computeMoments();let n=this.createBoxes(t);return this.createResult(n.resultCount)}constructHistogram(e){this.weights=Array.from({length:Te}).fill(0),this.momentsR=Array.from({length:Te}).fill(0),this.momentsG=Array.from({length:Te}).fill(0),this.momentsB=Array.from({length:Te}).fill(0),this.moments=Array.from({length:Te}).fill(0);let t=we.quantize(e);for(let[e,n]of t.entries()){let t=h(e),r=g(e),i=_(e),a=(t>>3)+1,o=(r>>3)+1,s=(i>>3)+1,c=this.getIndex(a,o,s);this.weights[c]=(this.weights[c]??0)+n,this.momentsR[c]+=n*t,this.momentsG[c]+=n*r,this.momentsB[c]+=n*i,this.moments[c]+=n*(t*t+r*r+i*i)}}computeMoments(){for(let e=1;e<33;e++){let t=Array.from({length:33}).fill(0),n=Array.from({length:33}).fill(0),r=Array.from({length:33}).fill(0),i=Array.from({length:33}).fill(0),a=Array.from({length:33}).fill(0);for(let o=1;o<33;o++){let s=0,c=0,l=0,u=0,d=0;for(let f=1;f<33;f++){let p=this.getIndex(e,o,f);s+=this.weights[p],c+=this.momentsR[p],l+=this.momentsG[p],u+=this.momentsB[p],d+=this.moments[p],t[f]+=s,n[f]+=c,r[f]+=l,i[f]+=u,a[f]+=d;let m=this.getIndex(e-1,o,f);this.weights[p]=this.weights[m]+t[f],this.momentsR[p]=this.momentsR[m]+n[f],this.momentsG[p]=this.momentsG[m]+r[f],this.momentsB[p]=this.momentsB[m]+i[f],this.moments[p]=this.moments[m]+a[f]}}}}createBoxes(e){this.cubes=Array.from({length:e}).fill(0).map(()=>new De);let t=Array.from({length:e}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=32,this.cubes[0].g1=32,this.cubes[0].b1=32;let n=e,r=0;for(let i=1;i<e;i++){this.cut(this.cubes[r],this.cubes[i])?(t[r]=this.cubes[r].vol>1?this.variance(this.cubes[r]):0,t[i]=this.cubes[i].vol>1?this.variance(this.cubes[i]):0):(t[r]=0,i--),r=0;let e=t[0];for(let n=1;n<=i;n++)t[n]>e&&(e=t[n],r=n);if(e<=0){n=i+1;break}}return new Oe(e,n)}createResult(e){let t=[];for(let n=0;n<e;++n){let e=this.cubes[n],r=this.volume(e,this.weights);if(r>0){let n=Math.round(this.volume(e,this.momentsR)/r),i=Math.round(this.volume(e,this.momentsG)/r),a=Math.round(this.volume(e,this.momentsB)/r),o=255<<24|(n&255)<<16|(i&255)<<8|a&255;t.push(o)}}return t}variance(e){let t=this.volume(e,this.momentsR),n=this.volume(e,this.momentsG),r=this.volume(e,this.momentsB);return this.moments[this.getIndex(e.r1,e.g1,e.b1)]-this.moments[this.getIndex(e.r1,e.g1,e.b0)]-this.moments[this.getIndex(e.r1,e.g0,e.b1)]+this.moments[this.getIndex(e.r1,e.g0,e.b0)]-this.moments[this.getIndex(e.r0,e.g1,e.b1)]+this.moments[this.getIndex(e.r0,e.g1,e.b0)]+this.moments[this.getIndex(e.r0,e.g0,e.b1)]-this.moments[this.getIndex(e.r0,e.g0,e.b0)]-(t*t+n*n+r*r)/this.volume(e,this.weights)}cut(e,t){let n=this.volume(e,this.momentsR),r=this.volume(e,this.momentsG),i=this.volume(e,this.momentsB),a=this.volume(e,this.weights),o=this.maximize(e,J.RED,e.r0+1,e.r1,n,r,i,a),s=this.maximize(e,J.GREEN,e.g0+1,e.g1,n,r,i,a),c=this.maximize(e,J.BLUE,e.b0+1,e.b1,n,r,i,a),l,u=o.maximum,d=s.maximum,f=c.maximum;if(u>=d&&u>=f){if(o.cutLocation<0)return!1;l=J.RED}else l=d>=u&&d>=f?J.GREEN:J.BLUE;switch(t.r1=e.r1,t.g1=e.g1,t.b1=e.b1,l){case J.RED:e.r1=o.cutLocation,t.r0=e.r1,t.g0=e.g0,t.b0=e.b0;break;case J.GREEN:e.g1=s.cutLocation,t.r0=e.r0,t.g0=e.g1,t.b0=e.b0;break;case J.BLUE:e.b1=c.cutLocation,t.r0=e.r0,t.g0=e.g0,t.b0=e.b1;break;default:throw Error(`unexpected direction `+l)}return e.vol=(e.r1-e.r0)*(e.g1-e.g0)*(e.b1-e.b0),t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),!0}maximize(e,t,n,r,i,a,o,s){let c=this.bottom(e,t,this.momentsR),l=this.bottom(e,t,this.momentsG),u=this.bottom(e,t,this.momentsB),d=this.bottom(e,t,this.weights),f=0,p=-1,m=0,h=0,g=0,_=0;for(let v=n;v<r;v++){if(m=c+this.top(e,t,v,this.momentsR),h=l+this.top(e,t,v,this.momentsG),g=u+this.top(e,t,v,this.momentsB),_=d+this.top(e,t,v,this.weights),_===0)continue;let n=(m*m+h*h+g*g)*1,r=_*1,y=n/r;m=i-m,h=a-h,g=o-g,_=s-_,_!==0&&(n=(m*m+h*h+g*g)*1,r=_*1,y+=n/r,y>f&&(f=y,p=v))}return new ke(p,f)}volume(e,t){return t[this.getIndex(e.r1,e.g1,e.b1)]-t[this.getIndex(e.r1,e.g1,e.b0)]-t[this.getIndex(e.r1,e.g0,e.b1)]+t[this.getIndex(e.r1,e.g0,e.b0)]-t[this.getIndex(e.r0,e.g1,e.b1)]+t[this.getIndex(e.r0,e.g1,e.b0)]+t[this.getIndex(e.r0,e.g0,e.b1)]-t[this.getIndex(e.r0,e.g0,e.b0)]}bottom(e,t,n){switch(t){case J.RED:return-n[this.getIndex(e.r0,e.g1,e.b1)]+n[this.getIndex(e.r0,e.g1,e.b0)]+n[this.getIndex(e.r0,e.g0,e.b1)]-n[this.getIndex(e.r0,e.g0,e.b0)];case J.GREEN:return-n[this.getIndex(e.r1,e.g0,e.b1)]+n[this.getIndex(e.r1,e.g0,e.b0)]+n[this.getIndex(e.r0,e.g0,e.b1)]-n[this.getIndex(e.r0,e.g0,e.b0)];case J.BLUE:return-n[this.getIndex(e.r1,e.g1,e.b0)]+n[this.getIndex(e.r1,e.g0,e.b0)]+n[this.getIndex(e.r0,e.g1,e.b0)]-n[this.getIndex(e.r0,e.g0,e.b0)];default:throw Error(`unexpected direction $direction`)}}top(e,t,n,r){switch(t){case J.RED:return r[this.getIndex(n,e.g1,e.b1)]-r[this.getIndex(n,e.g1,e.b0)]-r[this.getIndex(n,e.g0,e.b1)]+r[this.getIndex(n,e.g0,e.b0)];case J.GREEN:return r[this.getIndex(e.r1,n,e.b1)]-r[this.getIndex(e.r1,n,e.b0)]-r[this.getIndex(e.r0,n,e.b1)]+r[this.getIndex(e.r0,n,e.b0)];case J.BLUE:return r[this.getIndex(e.r1,e.g1,n)]-r[this.getIndex(e.r1,e.g0,n)]-r[this.getIndex(e.r0,e.g1,n)]+r[this.getIndex(e.r0,e.g0,n)];default:throw Error(`unexpected direction $direction`)}}getIndex(e,t,n){return(e<<10)+(e<<6)+e+(t<<5)+t+n}},De=class{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0){this.r0=e,this.r1=t,this.g0=n,this.g1=r,this.b0=i,this.b1=a,this.vol=o}},Oe=class{constructor(e,t){this.requestedCount=e,this.resultCount=t}},ke=class{constructor(e,t){this.cutLocation=e,this.maximum=t}},Ae=class{static quantize(e,t){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let n=new Ee().quantize(e,t);return Se.quantize(e,n,t)}},je=class e{get primary(){
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return e.lightFromCorePalette(be.of(t))}static dark(t){return e.darkFromCorePalette(be.of(t))}static lightContent(t){return e.lightFromCorePalette(be.contentOf(t))}static darkContent(t){return e.darkFromCorePalette(be.contentOf(t))}static lightFromCorePalette(t){return new e({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new e({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Me={desired:4,fallbackColorARGB:4282549748,filter:!0};function Ne(e,t){return e.score>t.score?-1:+(e.score<t.score)}var Y=class e{constructor(){}static score(t,n){let{desired:r,fallbackColorARGB:a,filter:o}={...Me,...n},c=[],l=Array(360).fill(0),u=0;for(let[e,n]of t.entries()){let t=N.fromInt(e);c.push(t);let r=Math.floor(t.hue);l[r]+=n,u+=n}let d=Array(360).fill(0);for(let e=0;e<360;e++){let t=l[e]/u;for(let n=e-14;n<e+16;n++){let e=i(n);d[e]+=t}}let f=[];for(let t of c){let n=d[i(Math.round(t.hue))];if(o&&(t.chroma<e.CUTOFF_CHROMA||n<=e.CUTOFF_EXCITED_PROPORTION))continue;let r=n*100*e.WEIGHT_PROPORTION,a=t.chroma<e.TARGET_CHROMA?e.WEIGHT_CHROMA_BELOW:e.WEIGHT_CHROMA_ABOVE,s=r+(t.chroma-e.TARGET_CHROMA)*a;f.push({hct:t,score:s})}f.sort(Ne);let p=[];for(let e=90;e>=15;e--){p.length=0;for(let{hct:t}of f)if(p.find(n=>s(t.hue,n.hue)<e)||p.push(t),p.length>=r)break;if(p.length>=r)break}let m=[];p.length===0&&m.push(a);for(let e of p)m.push(e.toInt());return m}};Y.TARGET_CHROMA=48,Y.WEIGHT_PROPORTION=.7,Y.WEIGHT_CHROMA_ABOVE=.3,Y.WEIGHT_CHROMA_BELOW=.1,Y.CUTOFF_CHROMA=5,Y.CUTOFF_EXCITED_PROPORTION=.01;
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function X(e){let t=h(e),n=g(e),r=_(e),i=[t.toString(16),n.toString(16),r.toString(16)];for(let[e,t]of i.entries())t.length===1&&(i[e]=`0`+t);return`#`+i.join(``)}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Pe(e){let t=[];for(let n=0;n<e.length;n+=4){let r=e[n],i=e[n+1],a=e[n+2];if(e[n+3]<255)continue;let o=f(r,i,a);t.push(o)}let n=Ae.quantize(t,128);return Y.score(n)[0]}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Fe(e,t=[]){let n=be.of(e);return{source:e,schemes:{light:je.light(e),dark:je.dark(e)},palettes:{primary:n.a1,secondary:n.a2,tertiary:n.a3,neutral:n.n1,neutralVariant:n.n2,error:n.error},customColors:t.map(t=>Ie(e,t))}}function Ie(e,t){let n=t.value,r=n,i=e;t.blend&&(n=te.harmonize(r,i));let a=be.of(n).a1;return{color:t,value:n,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Z(e,t,n=50){let r=Math.min(Math.max(n,0),100)/100,i=r*2-1,a=(e.a>1?e.a/255:e.a)-(t.a>1?t.a/255:t.a),o;o=i*a===-1?i:(i+a)/(1+i*a);let s=(o+1)/2,c=1-s;return{r:e.r*s+t.r*c,g:e.g*s+t.g*c,b:e.b*s+t.b*c,a:e.a*r+t.a*(1-r)}}function Le(e){let t=e.slice(1),n=t.length;if(n===6||n===8)return e;if(n===3){let e=t[0],n=t[1],r=t[2];return`#${e}${e}${n}${n}${r}${r}`}if(n===4){let e=t[0],n=t[1],r=t[2],i=t[3];return`#${e}${e}${n}${n}${r}${r}${i}${i}`}return e}function Re(e){let t=Le(e).slice(1),n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16),a=255;return t.length===8&&(a=Number.parseInt(t.slice(6,8),16)),{r:n,g:r,b:i,a}}function ze(e){return Math.round(e).toString(16).padStart(2,`0`)}function Q({r:e,g:t,b:n,a:r}){let i=`#${ze(e)}${ze(t)}${ze(n)}`;return r===255?i:`${i}${ze(r)}`}let $={r:255,g:255,b:255,a:255},Be={r:0,g:0,b:0,a:255},Ve=Re(`#1f1f1f`);function He(e){return{r:h(e),g:g(e),b:_(e),a:m(e)}}let Ue=/* @__PURE__ */ new WeakMap;function We(e){return Ue.has(e)||Ue.set(e,Ge(e)),Ue.get(e)}function Ge(e){return{light:{3:Q(Z(e,$,70)),5:Q(Z(e,$,50)),7:Q(Z(e,$,30)),8:Q(Z(e,$,20)),9:Q(Z(e,$,10)),dark2:Q(Z(e,Be,70))},dark:{3:Q(Z(e,Ve,70)),5:Q(Z(e,Ve,50)),7:Q(Z(e,Ve,30)),8:Q(Z(e,Ve,20)),9:Q(Z(e,Ve,10)),dark2:Q(Z(e,$,70))}}}function Ke(e,t){let n=t===`light`?$:Ve,r=X(e.primary),i=X(e.tertiary),a=X(e.error),o=X(e.secondary),s=He(e.primary),c=He(e.tertiary),l=He(e.error),u=He(e.secondary),d=We(s)[t],f=We(c)[t],p=We(l)[t],m=We(u)[t];return{"--el-color-primary":r,"--el-color-primary-light-3":d[3],"--el-color-primary-light-5":d[5],"--el-color-primary-light-7":d[7],"--el-color-primary-light-8":d[8],"--el-color-primary-light-9":d[9],"--el-color-primary-dark-2":d.dark2,"--el-color-success":i,"--el-color-success-light-3":f[3],"--el-color-success-light-5":f[5],"--el-color-success-light-7":f[7],"--el-color-success-light-8":f[8],"--el-color-success-light-9":f[9],"--el-color-success-dark-2":f.dark2,"--el-color-warning":t===`light`?`#835500`:`#ffb955`,"--el-color-warning-light-3":t===`light`?`#a8884d`:`#bc8b45`,"--el-color-warning-light-5":t===`light`?`#c1aa80`:`#8f6c3a`,"--el-color-warning-light-7":t===`light`?`#daccb3`:`#624d2f`,"--el-color-warning-light-8":t===`light`?`#e6ddcc`:`#4c3e2a`,"--el-color-warning-light-9":t===`light`?`#f3eee6`:`#352e24`,"--el-color-warning-dark-2":t===`light`?`#5c3b00`:`#ffce88`,"--el-color-danger":a,"--el-color-danger-light-3":p[3],"--el-color-danger-light-5":p[5],"--el-color-danger-light-7":p[7],"--el-color-danger-light-8":p[8],"--el-color-danger-light-9":p[9],"--el-color-danger-dark-2":p.dark2,"--el-color-error":a,"--el-color-error-light-3":p[3],"--el-color-error-light-5":p[5],"--el-color-error-light-7":p[7],"--el-color-error-light-8":p[8],"--el-color-error-light-9":p[9],"--el-color-error-dark-2":p.dark2,"--el-color-info":o,"--el-color-info-light-3":m[3],"--el-color-info-light-5":m[5],"--el-color-info-light-7":m[7],"--el-color-info-light-8":m[8],"--el-color-info-light-9":m[9],"--el-color-info-dark-2":m.dark2,"--el-bg-color":X(e.surface),"--el-bg-color-page":X(e.background),"--el-bg-color-overlay":X(e.surface),"--el-text-color-primary":X(e.onSurface),"--el-text-color-regular":X(e.onSurfaceVariant),"--el-text-color-secondary":Q(Z(He(e.onSurfaceVariant),n,60))}}self.onmessage=e=>{let{id:t,imageBitmap:n,width:r,height:i}=e.data;try{let e=new OffscreenCanvas(r,i).getContext(`2d`);if(!e)throw Error(`Could not get OffscreenCanvas context`);e.drawImage(n,0,0);let a=e.getImageData(0,0,r,i).data,o=Fe(Pe(a)),s=Ke(o.schemes.light,`light`),c=Ke(o.schemes.dark,`dark`);self.postMessage({id:t,cssLight:s,cssDark:c})}catch(e){self.postMessage({id:t,error:String(e)})}finally{n.close()}}})();