import{E as S,F as We,H as k,J as Ke,K as Ze,L as Xe,M as Ye,N as qe,T as Y,a as W,b as je,c as Re,d as Ne,e as Ae,f as De,g as K,h as Fe,i as Le,j as He,k as Z,l as ze,m as Be,n as $e,o as Ve,p as Ge,q as x,r as X,t as Ue}from"./chunk-SHGKMPU6.js";import{d as Te,l as Ee,m as G,o as U}from"./chunk-HUM7GLDX.js";import{$a as l,Ab as ce,Ca as xe,Cb as f,Db as z,Fa as be,Gb as le,Ob as m,Pb as B,Qb as ke,Ta as Oe,Tb as $,Ub as V,Va as ye,Wa as h,X as ue,Yb as Ie,Z as v,Za as we,_a as L,aa as ve,ab as Se,ca as M,da as y,ea as Ce,f as r,gb as g,ib as H,ja as ae,ka as se,lb as A,m as O,oa as _e,ra as Me,sb as w,t as fe,ua as Pe,vb as P,xa as F,xb as s,yb as c,zb as C}from"./chunk-JPB2BJBV.js";r();r();r();var Je=(()=>{class o{http;prefix;suffix;constructor(e,n="/assets/i18n/",i=".json"){this.http=e,this.prefix=n,this.suffix=i}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}static \u0275fac=function(n){return new(n||o)(M(W),M(String),M(String))};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})();r();var Qe=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-UNPVGMOI.js").then(o=>o.HomeComponent)},{path:"skills",pathMatch:"full",loadComponent:()=>import("./chunk-5CKF7X7I.js").then(o=>o.SkillsComponent)},{path:"projects",pathMatch:"full",loadComponent:()=>import("./chunk-Z6PLOSQQ.js").then(o=>o.ProjectsComponent)}];r();var ct="@",lt=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=y(_e);loadingSchedulerFn=y(dt,{optional:!0});_engine;constructor(e,n,i,a,p){this.doc=e,this.delegate=n,this.zone=i,this.animationType=a,this.moduleImpl=p}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-UG4OVDQV.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new ue(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let p=new a(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new de(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let _=p.createRenderer(e,n);a.use(_),this.scheduler??=this.injector.get(Me,null,{optional:!0}),this.scheduler?.notify(10)}).catch(p=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Se()};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),de=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,i){this.delegate.insertBefore(t,e,n,i)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,i){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(t,e,n,i)),this.delegate.listen(t,e,n,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(ct)}},dt=new ve("");function et(o="animations"){return be("NgAsyncAnimations"),Ce([{provide:we,useFactory:(t,e,n)=>new lt(t,e,n,o),deps:[Te,Ne,Pe]},{provide:xe,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}r();var tt=(o,t)=>{let e=parseInt("5000");o.body instanceof FormData&&(e=18e5);let n=o.clone({setHeaders:{timeout:`${e}`}});return t(n).pipe(fe(e))};var pt=o=>new Je(o,"./i18n/",".json"),nt={providers:[Ie({eventCoalescing:!0}),Be(Qe,$e()),et(),Ue({defaultLanguage:"en",loader:{provide:Ge,useFactory:pt,deps:[W]}}),je(Re([tt]))]};r();r();var pe=["en"];r();r();r();r();r();var I=class{static storageKey=/^[a-zA-Z\s0-9\-_]+$/;static general=/^.+$/;static generalEmpty=/[.\n\t\s]*/;static token=/^[A-Z0-9\s_\-]{1,100}$/;static flt=/^([\d]{1,})(\.([\d]{1,}))?$/;static integer=/^[\d]+$/};var b=class o{constructor(){}isStorage(){if(typeof localStorage<"u")try{return localStorage.setItem("feature_test","yes"),localStorage.getItem("feature_test")=="yes"?(localStorage.removeItem("feature_test"),!0):!1}catch{return!1}else return!1}get(t){if(I.storageKey.test(t)&&this.isStorage()){let e=localStorage.getItem(t);if(e)return e}return!1}set(t,e){return I.storageKey.test(t)&&this.isStorage()?(localStorage.setItem(t,e),localStorage.getItem(t)==e):!1}delete(t){I.storageKey.test(t)&&localStorage.removeItem(t)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};var T=class o{constructor(t){this.store=t}key="theme";dark=new O(!1);darkEvent=this.dark.asObservable();loadSet(){this.store.get(this.key)==="dark"?this.dark.next(!0):this.dark.next(!1),this.dark.value?document.body.classList.add("darkMode"):document.body.classList.remove("darkMode")}setTheme(){let t=this.dark.value?"light":"dark";this.store.set(this.key,t),this.loadSet()}static \u0275fac=function(e){return new(e||o)(M(b))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};function mt(o,t){o&1&&(s(0,"mat-icon",2),m(1,"dark_mode"),c())}function ht(o,t){o&1&&(s(0,"mat-icon",2),m(1,"light_mode"),c())}var q=class o{constructor(t){this.theme=t;this.sub=t.darkEvent.subscribe(e=>{this.dark=e})}dark=!1;sub;ngOnDestroy(){this.sub.unsubscribe()}setTheme(){this.theme.setTheme()}static \u0275fac=function(e){return new(e||o)(l(T))};static \u0275cmp=g({type:o,selectors:[["app-theme-switch"]],standalone:!1,decls:3,vars:2,consts:[["mat-mini-fab","",1,"shadowx","rounded-circle",3,"click"],["class","mx-2",4,"ngIf"],[1,"mx-2"]],template:function(e,n){e&1&&(s(0,"button",0),f("click",function(){return n.setTheme()}),A(1,mt,2,0,"mat-icon",1)(2,ht,2,0,"mat-icon",1),c()),e&2&&(h(),w("ngIf",n.dark),h(),w("ngIf",!n.dark))},dependencies:[G,S,k],encapsulation:2})};r();r();r();var D=class{static succ=(t="")=>({succ:!0,message:t});static err=(t="")=>({succ:!1,message:t})};var j=class o{constructor(t,e){this.trans=t;this.store=e}shown=new O(!1);shownEvent=this.shown.asObservable();toggleShown(){this.shown.next(!this.shown.value)}setLocale(t){this.trans.use(t),this.store.set("locale",t)}con(t,e,n={}){let i=this.trans.get(t,n).subscribe(a=>{a==t?e(D.err(a)):e(D.succ(a));try{i.unsubscribe()}catch{}})}conv(t,e,n={}){let i=[],a=t.filter(_=>!0),p=_=>{if(a.length==0)_();else{let N=a.shift();this.con(N,st=>{i.push(st.message),p(_)},n)}};p(()=>{e(i)})}static \u0275fac=function(e){return new(e||o)(M(x),M(b))};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};var J=class o{locale=y(x);loc=y(j);l=this.locale.currentLang;lang=this.locale.onLangChange.subscribe(t=>{this.l=t.lang});ngOnDestroy(){this.lang.unsubscribe()}openLangs(){this.loc.toggleShown()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=g({type:o,selectors:[["app-locale-switch"]],standalone:!1,decls:4,vars:3,consts:[["mat-mini-fab","",1,"shadowx","rounded-circle","m-0","fs-6","fw-light",3,"click"],[1,"m-0","p-0"]],template:function(e,n){e&1&&(s(0,"button",0),f("click",function(){return n.openLangs()}),s(1,"span",1),m(2),$(3,"uppercase"),c()()),e&2&&(h(2),B(V(3,1,n.l)))},dependencies:[k,U],encapsulation:2})};var Q=class o{constructor(t){this.router=t}logo="/logo.png";brand="GBM";subs={};activeRoute="";menu=!1;hactive=!1;onWindowScroll(){let t=document.documentElement.scrollTop||document.body.scrollTop;this.hactive=t>80}toggleMenu(){this.menu=!this.menu}ngOnInit(){this.subs.router=this.router.events.subscribe(t=>{t instanceof K&&(this.activeRoute=t.url)})}ngOnDestroy(){Object.keys(this.subs).forEach(t=>{this.subs[t].unsubscribe()})}static \u0275fac=function(e){return new(e||o)(l(Z))};static \u0275cmp=g({type:o,selectors:[["app-header"]],hostBindings:function(e,n){e&1&&f("scroll",function(){return n.onWindowScroll()},!1,ye)},decls:36,vars:18,consts:[[1,"header-top"],[1,"header-top-left"],["href","/"],[3,"src","alt"],[1,"header-top-right"],["mat-mini-fab","",1,"shadowx","bg-transparent",3,"click"],[1,"nav-container"],[3,"click"],["routerLink","/",1,"cp"],[1,"lh1","nav-item-ico"],["translate","",1,"nav-item-txt"],["routerLink","/skills",1,"cp"],["routerLink","/projects",1,"cp"],[1,"ux-btn"],[1,"overlay",3,"click"],[1,"body"]],template:function(e,n){e&1&&(s(0,"header")(1,"div",0)(2,"div",1)(3,"a",2),C(4,"img",3),c()(),s(5,"div",4)(6,"button",5),f("click",function(){return n.toggleMenu()}),s(7,"mat-icon"),m(8),c()()()(),s(9,"div")(10,"div",6)(11,"nav")(12,"ul")(13,"li",7),f("click",function(){return n.toggleMenu()}),s(14,"a",8)(15,"mat-icon",9),m(16,"home"),c(),s(17,"span",10),m(18,"NAT.NAV.HOME"),c()()(),s(19,"li",7),f("click",function(){return n.toggleMenu()}),s(20,"a",11)(21,"mat-icon",9),m(22,"construction"),c(),s(23,"span",10),m(24,"NAT.NAV.SKILLS"),c()()(),s(25,"li",7),f("click",function(){return n.toggleMenu()}),s(26,"a",12)(27,"mat-icon",9),m(28,"apps"),c(),s(29,"span",10),m(30,"NAT.NAV.PROJECTS"),c()()()()(),s(31,"div",13),C(32,"app-locale-switch")(33,"app-theme-switch"),c()(),s(34,"div",14),f("click",function(){return n.toggleMenu()}),c()()(),C(35,"div",15)),e&2&&(P("w-100 ",n.hactive?"active":"",""),h(4),le("src",n.logo,Oe),le("alt",n.brand),h(4),B(n.menu?"close":"menu"),h(),P("header-bottom ",n.menu?"active":"",""),h(4),P("nav-item ",n.activeRoute=="/"?"active":"",""),h(6),P("nav-item ",n.activeRoute=="/skills"?"active":"",""),h(6),P("nav-item ",n.activeRoute=="/projects"?"active":"",""))},dependencies:[Y,q,S,X,J,k,Ve,ze],styles:["@media only screen and (max-width: 767px){header[_ngcontent-%COMP%]{width:100%;position:fixed;top:0;left:0;height:60px;padding:0 10px;z-index:10;transition:all .2s ease-out}header.active[_ngcontent-%COMP%]{background:#ffffff1a;box-shadow:2px 2px 2px #73737333,1px 2px 3px #73737333 inset,-2px -2px 2px #8883 inset;border-radius:10px;top:10px;right:10px;left:10px;width:calc(100% - 20px)!important}header.active[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(13px);backdrop-filter:blur(13px)}.darkMode[_nghost-%COMP%]   header.active[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   header.active[_ngcontent-%COMP%]{background:#8e8e8e1a;box-shadow:2px 2px 2px #0003,1px 2px 3px #00000059 inset,-2px -2px 2px #4d4d4d33 inset}.darkMode[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#0003}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-item-ico[_ngcontent-%COMP%]{display:none}.body[_ngcontent-%COMP%]{height:60px;width:100%}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;display:flex;flex-direction:row;align-items:center;justify-content:space-between}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]{height:100%;width:60px;overflow:hidden}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;flex-direction:row;justify-content:flex-start;overflow:hidden}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-right[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:100%;width:calc(100% - 60px);overflow:hidden}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]{position:fixed;z-index:11;top:0;left:100%;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;background:#0000;display:flex;flex-direction:row;transition:all .2s ease-out}header[_ngcontent-%COMP%]   .header-bottom.active[_ngcontent-%COMP%]{background:#00000080;left:0%}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]{height:100%;width:calc(100% - 100px);background:var(--mat-sys-surface);display:flex;flex-direction:column-reverse;align-items:flex-start;justify-content:flex-end;padding:10px}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   .ux-btn[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;overflow:hidden}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;list-style-type:none;width:100%;margin:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;height:100%;padding:10px 0}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:row;justify-content:flex-start;padding:15px 10px;text-decoration:none;font-size:.99rem;font-weight:400;color:var(--mat-sys-primary)}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#80808026;border-radius:10px}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-item-ico[_ngcontent-%COMP%]{margin-right:10px}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   .ux-btn[_ngcontent-%COMP%]   app-locale-switch[_ngcontent-%COMP%]{margin-right:10px}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{height:100%;width:100px}}@media only screen and (min-width: 768px){.body[_ngcontent-%COMP%]{height:60px;width:100%}header[_ngcontent-%COMP%]{width:100%;overflow:hidden;height:60px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 10px;position:fixed;top:0;z-index:10;left:0}header.active[_ngcontent-%COMP%]{background:#ffffff1a;border-radius:10px;top:10px;right:10px;left:10px;width:calc(100% - 20px)!important;box-shadow:2px 2px 2px #73737333,1px 2px 3px #73737333 inset,-2px -2px 2px #8883 inset;-webkit-backdrop-filter:blur(13px);backdrop-filter:blur(13px)}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{height:100%;width:60px}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]{height:100%;width:100%;overflow:hidden}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;flex-direction:row;justify-content:start;overflow:hidden}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:45px}header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-right[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]{height:100%;overflow:hidden;width:calc(100% - 60px)}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{height:100%;width:calc(100% - 90px)}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;list-style-type:none;width:100%;margin:0;padding:0;display:flex;flex-direction:row;align-items:center;justify-content:center;height:100%}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;padding:10px;height:100%}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;flex-direction:row;justify-content:center;padding:0 20px;text-decoration:none;font-size:.99rem;font-weight:350;color:var(--mat-sys-primary)}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400;background:#ffffff59;border-radius:20px}.darkMode[_nghost-%COMP%]   header.active[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   header.active[_ngcontent-%COMP%]{background:#8e8e8e1a;box-shadow:2px 2px 2px #0003,1px 2px 3px #00000059 inset,-2px -2px 2px #4d4d4d33 inset}.darkMode[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#0003}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-item-ico[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   .ux-btn[_ngcontent-%COMP%]{width:90px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%}}"]})};r();var ee=class o{constructor(t,e){this.el=t;this.renderer=e}ngOnInit(){this.el.nativeElement.style.position="fixed",this.el.nativeElement.style.top="0",this.el.nativeElement.style.left="0",this.el.nativeElement.style.width="100vw",this.el.nativeElement.style.height="100vh",this.el.nativeElement.style.zIndex="-1",this.el.nativeElement.style.overflow="hidden";for(let t=0;t<80;t++){let e=this.renderer.createElement("span"),n=Math.random()*3+1,i=Math.random()*6+3,a=Math.random()*2+1;this.renderer.setStyle(e,"position","absolute"),this.renderer.setStyle(e,"width",`${n}px`),this.renderer.setStyle(e,"height",`${n}px`),this.renderer.setStyle(e,"background","white"),this.renderer.setStyle(e,"borderRadius","50%"),this.renderer.setStyle(e,"opacity",`${Math.random()*.5+.5}`),this.renderer.setStyle(e,"boxShadow",`0 0 ${n*2}px rgba(255, 255, 255, 0.8)`),this.renderer.setStyle(e,"top",`${Math.random()*100}vh`),this.renderer.setStyle(e,"left",`${Math.random()*100}vw`),this.renderer.setStyle(e,"animation",`float ${i}s infinite ease-in-out, twinkle ${a}s infinite alternate ease-in-out`),this.el.nativeElement.appendChild(e)}}static \u0275fac=function(e){return new(e||o)(l(F),l(L))};static \u0275dir=H({type:o,selectors:[["","appFloatingParticles",""]]})};r();var te=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=g({type:o,selectors:[["app-aurora-background"]],decls:1,vars:0,consts:[[1,"aurora-bg"]],template:function(e,n){e&1&&C(0,"div",0)},styles:['@keyframes _ngcontent-%COMP%_aurora{0%{background-position:0% 50%;opacity:.5}50%{background-position:100% 50%;opacity:.7}to{background-position:0% 50%;opacity:.5}}.aurora-bg[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;background:linear-gradient(-45deg,#0078d499,#1976d299,#21252999,#0d0d0d99);background-size:300% 300%;animation:_ngcontent-%COMP%_aurora 20s ease infinite;mix-blend-mode:lighten;filter:blur(15px);transition:opacity .5s ease-in-out}.aurora-bg[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:inherit;opacity:.7;filter:blur(25px);mix-blend-mode:soft-light;pointer-events:none}']})};r();var ne=class o{constructor(t,e){this.el=t;this.renderer=e}canvas;ctx=null;nodes=[];connections=[];ngOnInit(){this.createCanvas(),this.ctx&&(this.generateNodes(),this.animateNetwork())}createCanvas(){this.canvas=this.renderer.createElement("canvas"),this.renderer.setStyle(this.canvas,"position","fixed"),this.renderer.setStyle(this.canvas,"top","0"),this.renderer.setStyle(this.canvas,"left","0"),this.renderer.setStyle(this.canvas,"width","100%"),this.renderer.setStyle(this.canvas,"height","100%"),this.renderer.setStyle(this.canvas,"zIndex","-1"),this.el.nativeElement.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx&&(this.resizeCanvas(),window.addEventListener("resize",()=>this.resizeCanvas()))}resizeCanvas(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx&&this.generateNodes()}generateNodes(){let t=Math.min(50,window.innerWidth*window.innerHeight/25e3);this.nodes=[],this.connections=[];for(let n=0;n<t;n++)this.nodes.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,radius:Math.random()*3+1,dx:(Math.random()-.5)*.3,dy:(Math.random()-.5)*.3});let e=1.5;for(let n=0;n<this.nodes.length;n++)for(let i=n+1;i<this.nodes.length&&!(this.connections.length>=t*e);i++)Math.random()<.4||this.connections.push({from:n,to:i})}animateNetwork(){if(!this.ctx||!this.canvas)return;let t=window.matchMedia?.("(prefers-color-scheme: dark)").matches,e=t?"rgba(50, 100, 255, 0.25)":"rgba(30, 30, 30, 0.15)",n=t?["rgba(0, 120, 212, 0.7)","rgba(25, 118, 210, 0.7)"]:["rgba(0, 120, 212, 0.5)","rgba(44, 97, 112, 0.8)"],i=()=>{this.ctx&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.strokeStyle=e,this.ctx.lineWidth=.6,this.connections.forEach(({from:a,to:p})=>{let _=this.nodes[a],N=this.nodes[p];_&&N&&(this.ctx?.beginPath(),this.ctx?.moveTo(_.x,_.y),this.ctx?.lineTo(N.x,N.y),this.ctx?.stroke())}),this.nodes.forEach(a=>{if(!this.ctx)return;let p=n[Math.floor(Math.random()*n.length)];this.ctx.fillStyle=p,this.ctx.beginPath(),this.ctx.arc(a.x,a.y,a.radius,0,Math.PI*2),this.ctx.fill(),Math.random()<.015&&(this.ctx.fillStyle=t?"rgba(0, 200, 255, 0.8)":"rgba(0, 150, 255, 0.8)",this.ctx.beginPath(),this.ctx.arc(a.x,a.y,a.radius*1.5,0,Math.PI*2),this.ctx.fill()),a.x+=a.dx,a.y+=a.dy,(a.x<0||a.x>this.canvas.width)&&(a.dx*=-1),(a.y<0||a.y>this.canvas.height)&&(a.dy*=-1)}),requestAnimationFrame(i))};i()}static \u0275fac=function(e){return new(e||o)(l(F),l(L))};static \u0275dir=H({type:o,selectors:[["","appNeuralNetwork",""]]})};r();var R=class o{vis=new O(!0);switch=this.vis.asObservable();constructor(){}show(){this.vis.next(!0)}hide(){this.vis.next(!1)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})};r();function Ct(o,t){if(o&1){let e=ce();s(0,"button",10),f("click",function(){let i=ae(e).$implicit,a=z(2);return se(a.setLocale(i))}),m(1),$(2,"uppercase"),c()}if(o&2){let e=t.$implicit;h(),ke(" ",V(2,1,e)," ")}}function _t(o,t){if(o&1){let e=ce();s(0,"div",1)(1,"div",2)(2,"div",3)(3,"mat-card",4)(4,"mat-card-header",5)(5,"mat-card-title")(6,"span",6),m(7,"CHANGE_PREF_LANGUAGE"),c()(),s(8,"button",7),f("click",function(){ae(e);let i=z();return se(i.close())}),s(9,"mat-icon",8),m(10,"close"),c()()(),s(11,"mat-card-content"),A(12,Ct,3,3,"button",9),c()()()()()}if(o&2){let e=z();h(12),w("ngForOf",e.locales)}}var oe=class o{constructor(t,e){this.locale=t;this.loc=e;this.locales=t.getLangs(),this.shownSub=e.shownEvent.subscribe(n=>{this.shown=n})}shown=!1;shownSub=null;locales=[];lang="";setLocale(t){this.loc.setLocale(t),this.loc.toggleShown()}close(){this.loc.toggleShown()}static \u0275fac=function(e){return new(e||o)(l(x),l(j))};static \u0275cmp=g({type:o,selectors:[["app-locale-picker"]],standalone:!1,decls:1,vars:1,consts:[["class","cont overflow-hidden w-100 h-100 position-fixed",4,"ngIf"],[1,"cont","overflow-hidden","w-100","h-100","position-fixed"],[1,"w-100","backdrop","h-100","overflow-hidden","d-flex","flex-row","align-items-center","justify-content-center"],[1,"surround","w-100","my-5","p-2"],[1,"p-2","card","shadow"],[1,"mb-3","d-flex","flex-row","align-items-center","justify-content-between"],["translate",""],["mat-icon-button","",3,"click"],[1,"mat-18"],["class","me-2 mb-2","mat-flat-button","",3,"click",4,"ngFor","ngForOf"],["mat-flat-button","",1,"me-2","mb-2",3,"click"]],template:function(e,n){e&1&&A(0,_t,13,1,"div",0),e&2&&w("ngIf",n.shown)},dependencies:[Ee,G,Ze,Ye,qe,Xe,S,X,We,Ke,U],styles:[".cont[_ngcontent-%COMP%]{top:0;z-index:1000;left:0}.backdrop[_ngcontent-%COMP%]{background:#00000080}.card[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface);color:var(--mat-sys-on-surface)}.surround[_ngcontent-%COMP%]{max-width:700px}"]})};r();var ie=class o{constructor(t){this.prel=t;this.sub=t.switch.subscribe(e=>{this.show=e})}show=!0;sub;ngOnDestroy(){try{this.sub.unsubscribe()}catch{}}static \u0275fac=function(e){return new(e||o)(l(R))};static \u0275cmp=g({type:o,selectors:[["app-preloader"]],standalone:!1,decls:4,vars:3,consts:[["id","my-preloader"],[1,"bgxx"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"div"),C(2,"span",1)(3,"p",1),c()()),e&2&&P("c1-bgx ",n.show?"":"hidden","")},styles:["@keyframes _ngcontent-%COMP%_spin{0%{left:0;width:30px}50%{left:calc(100% - 30px);width:60%}to{left:100%;width:30px}}*[_ngcontent-%COMP%]{box-sizing:border-box}#my-preloader[_ngcontent-%COMP%]{width:100%;height:100%;top:0;left:0;overflow:hidden;position:fixed;z-index:9999;background:#0000004d;display:block;padding:0;margin:0pxs}#my-preloader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:6px;position:relative}#my-preloader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #my-preloader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;width:30px;height:100%;position:absolute;top:0;left:0;margin:0;padding:0;opacity:1;border-radius:0 3px 3px 0;-moz-border-radius:0px 3px 3px 0px;-webkit-border-radius:0px 3px 3px 0px;-o-border-radius:0px 3px 3px 0px}#my-preloader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 2s infinite ease-in-out;z-index:1}#my-preloader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{z-index:2;animation:_ngcontent-%COMP%_spin 1s infinite ease-in-out;animation-delay:1s}#my-preloader.hidden[_ngcontent-%COMP%]{display:none}.bgxx[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary)}"]})};var re=class o{constructor(t,e,n,i,a){this.translate=t;this.theme=e;this.store=n;this.prel=i;this.router=a;e.loadSet(),this.translate.addLangs(pe);let p=n.get("locale");p&&t.getLangs().indexOf(p)!==-1?this.translate.use(p):this.translate.use(pe[0])}subs={};ngOnInit(){this.prel.hide(),this.subs.router=this.router.events.subscribe(t=>{t instanceof De?this.prel.show():t instanceof K?this.prel.hide():t instanceof Fe?this.prel.hide():t instanceof Le&&this.prel.hide()})}ngOnDestroy(){Object.keys(this.subs).forEach(t=>{this.subs[t].unsubscribe()})}static \u0275fac=function(e){return new(e||o)(l(x),l(T),l(b),l(R),l(Z))};static \u0275cmp=g({type:o,selectors:[["app-root"]],decls:7,vars:0,consts:[["appFloatingParticles","",1,"position-fixed","backdrop","backdr","h-100","w-100","opa"],["appNeuralNetwork","",1,"position-fixed","h-100","w-100","zn111"],[1,"opp","zn111"]],template:function(e,n){e&1&&C(0,"app-header")(1,"router-outlet")(2,"app-locale-picker")(3,"app-preloader")(4,"div",0)(5,"div",1)(6,"app-aurora-background",2)},dependencies:[He,Y,oe,ie,Q,ee,te,ne],styles:[".backdrop[_ngcontent-%COMP%]{z-index:-1;top:0;left:0}.opp[_ngcontent-%COMP%]{opacity:.4}.opa[_ngcontent-%COMP%]{opacity:.3}.zn111[_ngcontent-%COMP%]{z-index:-1!important}"]})};Ae(re,nt).catch(o=>console.error(o));
