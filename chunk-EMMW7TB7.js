import{g as B,k as H}from"./chunk-5FWV3NKJ.js";import{a as Y,b as Z}from"./chunk-3O6PEPNN.js";import{a as j,b as W,c as de,d as ee}from"./chunk-DWE5Z22W.js";import{C as $,E as V,G as X,I as z,J as K,K as G,L as q,M as J,ba as Q,i as L,j as U}from"./chunk-VZLKN7TC.js";import{$b as D,Ab as e,Bb as i,Bc as N,Cb as d,Cc as R,Eb as k,Fc as F,Gb as b,Hb as y,Kb as h,Tb as n,Ub as c,Va as u,Vb as P,Wb as w,Ya as r,ac as f,bb as x,bc as g,e as le,f as s,ib as M,ja as S,ka as E,kb as A,ob as p,vb as l,xa as C,xb as O,yb as I}from"./chunk-OFOKXW5K.js";s();s();var _=class a{constructor(o){this.el=o;this.element=o.nativeElement}textArray=[];typingSpeed=100;backspaceSpeed=50;pauseBetweenCycles=2e3;element;textIndex=0;charIndex=0;isDeleting=!1;ngOnInit(){if(!Array.isArray(this.textArray)||this.textArray.length===0){console.error("appTypewriter: textArray must be an array of strings.");return}this.startTyping()}startTyping(){let o=this.textArray[this.textIndex];this.isDeleting?this.charIndex--:this.charIndex++,this.element.innerHTML=`<span>${o.substring(0,this.charIndex)}</span><span class="cursor">|</span>`;let t=this.isDeleting?this.backspaceSpeed:this.typingSpeed;!this.isDeleting&&this.charIndex===o.length?(t=Math.random()*2e3+1e3,this.isDeleting=!0):this.isDeleting&&this.charIndex===0&&(this.isDeleting=!1,this.textIndex=(this.textIndex+1)%this.textArray.length,t=Math.random()*2e3+1e3),setTimeout(()=>this.startTyping(),t)}static \u0275fac=function(t){return new(t||a)(x(C))};static \u0275dir=A({type:a,selectors:[["","appTypewriter",""]],inputs:{textArray:"textArray",typingSpeed:"typingSpeed",backspaceSpeed:"backspaceSpeed",pauseBetweenCycles:"pauseBetweenCycles"}})};var re=le(de());s();var te=[{institution:"Marwadi University, Rajkot, India",title:"Bachelor of Technology (Information Technology)",timeline:["2020","2024"],score:"CGPA 8.82 / 10"}];s();var ie=[{title:"FinTech Engineer Intern",company:"Intellect Design Arena",location:"Chennai, India",remote:!1,timeline:["06/2023","04/2024"],description:["WD1","WD2","WD3","WD4"]}];s();var ne=[{issuer:"Oracle Academy",certs:[{title:"Database Programming with SQL",timeline:"10/2021",url:"/certs/db_prog_sql.pdf"}]},{issuer:"CISCO NetAcad",certs:[{title:"Introduction to Packet Tracer",timeline:"10/2021",url:"/certs/intro_to_pt.pdf"},{title:"CCNAv7: Introduction to Networks",timeline:"03/2022",url:"/certs/intro_to_networks.pdf"},{title:"Networking Essentials",timeline:"03/2022",url:"/certs/networking_essentials.pdf"},{title:"Introduction to Cybersecurity",timeline:"03/2023",url:"/certs/intro_to_cs.pdf"},{title:"Cybersecurity Essentials",timeline:"04/2023",url:"/certs/cs_essentials.pdf"}]},{issuer:"Coursera",certs:[{title:"Linux Server Management and Security",timeline:"01/2022",url:"/certs/linux_server_management.pdf"},{title:"Hands-on Introduction to Linux Commands and Shell Scripting",timeline:"07/2022",url:"/certs/intro_to_linux.pdf"},{title:"Linu x Basics: The Command Line Interface - 6",timeline:"08/2022",url:"/certs/linux_basics.pdf"}]}];var se=(a,o,t,m)=>[a,o,t,m];function ce(a,o){if(a&1&&(e(0,"li",40),f(1,"translate"),e(2,"a",41),d(3,"i"),i()()),a&2){let t=o.$implicit;l("matTooltip",g(1,7,"NAT.SOCIAL."+t.title)),r(2),h("href",t.url,u),l("title",t.title)("download",t.downloadable?t.filename:null),r(),O(t.icon)}}function pe(a,o){if(a&1&&(e(0,"span",49),n(1),i()),a&2){let t=y().$implicit;r(),c(t.score)}}function fe(a,o){if(a&1&&(e(0,"mat-card",42)(1,"mat-card-header",43)(2,"mat-card-title",2),n(3),i(),e(4,"mat-card-subtitle",44),d(5,"i",45),e(6,"span"),n(7),i(),p(8,pe,2,1,"span",46),i()(),e(9,"mat-card-content")(10,"div",47),d(11,"i",48),n(12),i()()()),a&2){let t=o.$implicit;r(3),c(t.title),r(4),w("",t.timeline[0]," - ",t.timeline[1],""),r(),l("ngIf",t.score),r(4),P(" ",t.institution,"")}}function ge(a,o){if(a&1&&(e(0,"li",55),n(1),f(2,"translate"),i()),a&2){let t=o.$implicit;r(),c(g(2,1,"NAT.EXTRA.WORK."+t))}}function ue(a,o){if(a&1){let t=k();e(0,"mat-card",50)(1,"mat-card-header",43)(2,"mat-card-title",51),n(3),i(),e(4,"mat-card-subtitle",44),d(5,"i",45),e(6,"span"),n(7),i(),e(8,"span",49),n(9),f(10,"translate"),i()()(),e(11,"mat-card-content")(12,"div",47),d(13,"i",48),n(14),i(),e(15,"button",52),b("click",function(){let T=S(t).index,oe=y();return E(oe.toggleWorkDetails(T))}),d(16,"i",53),i(),e(17,"ul"),p(18,ge,3,3,"li",54),i()()()}if(a&2){let t=o.$implicit;r(3),c(t.title),r(4),w("",t.timeline[0]," - ",t.timeline[1],""),r(2),c(g(10,10,"NAT.EXTRA.WORK."+(t.remote?"RM":"OS"))),r(5),w(" ",t.company,", ",t.location,""),r(3),I("wdd overflow-x-hidden overflow-y-auto text-center text-md-start ",t.showDetails?"active":"",""),r(),l("ngForOf",t.description)}}function xe(a,o){if(a&1&&(e(0,"li",58)(1,"a",59),n(2),i(),e(3,"span",49),n(4),i()()),a&2){let t=o.$implicit;r(),h("href",t.url,u),r(),c(t.title),r(2),c(t.timeline)}}function he(a,o){if(a&1&&(e(0,"mat-card",50)(1,"mat-card-header",43)(2,"mat-card-title",51),n(3),i()(),e(4,"mat-card-content")(5,"ul",56),p(6,xe,5,3,"li",57),i()()()),a&2){let t=o.$implicit;r(3),c(t.issuer),r(3),l("ngForOf",t.certs)}}var ae=class a{constructor(o){this.dia=o}name="Gbiang Benedict Mashingil";socials=W;education=te;certs=ne;work=ie;RESUME_URL=j;ngAfterViewInit(){re.default.init()}getInTouch(){this.dia.getInTouch()}toggleWorkDetails(o){this.work[o].showDetails=!(this.work[o].showDetails??!1)}static \u0275fac=function(t){return new(t||a)(x(ee))};static \u0275cmp=M({type:a,selectors:[["app-home"]],decls:83,vars:23,consts:[[1,"jumbotron","p-2","pb-5","d-flex","flex-column","align-items-center","position-relative","justify-content-center"],[1,"d-inline-block"],[1,"text-center","text-md-start"],["translate","",1,"display-4"],[1,"display-1","fw-normal","col-pri","d-block"],[1,"bg-pri","surf","rounded","p-2","m-2","d-inline-block","fw-normal"],["appTypewriter","",3,"textArray","typingSpeed","backspaceSpeed","pauseBetweenCycles"],[1,"list-inline","position-absolute","lx","m-0","mt-3","overflow-hidden","p-0","me-md-2","d-flex","flex-row","align-items-center","justify-content-center","justify-content-md-start"],[3,"matTooltip",4,"ngFor","ngForOf"],[1,"p-2","overflow-hidden","my-5"],[1,"w-100","about","mx-auto","p-2","overflow-hidden"],[1,"container-fluid","m-0","p-0"],[1,"row","p-0","m-0"],[1,"col-md-5","p-0","m-0","overflow-hidden"],[1,"col-md-7","p-0","m-0","overflow-hidden"],["data-aos","fade-right","data-aos-delay","0","id","abt","translate","",1,"w-100","display-4","text-center","text-md-start"],["data-aos","fade-left","data-aos-delay","600",1,"col-md-5","pe-md-4","pt-md-2","overflow-hidden","p-0","m-0","imgbg"],["src","/img/ben2.webp","alt","",1,"w-100","overflow-hidden","rounded"],[1,"w-100","my-2"],["mat-fab","","extended","","download","",1,"w-100","rounded","shadowx","mb-2",3,"href"],["translate","",1,"lead","fw-normal"],["mat-fab","","extended","","routerLink","/skills",1,"w-100","rounded","shadowx","mb-2"],["mat-fab","","extended","","routerLink","/projects",1,"w-100","rounded","shadowx","mb-2"],["mat-fab","","extended","",1,"w-100","rounded","shadowx",3,"click"],["data-aos","fade-down","data-aos-delay","300","id","abttxt",1,"col-md-7","p-0","m-0"],["translate","",1,"lead","text-center","text-md-start"],[1,"more","w-100","mx-auto","p-2","overflow-hidden"],[1,"container-fluid","m-0","p-0","overflow-hidden"],[1,"row","m-0","p-0","overflow-hidden","pb-3"],[1,"col-md-4","p-0","m-0","overflow-hidden"],[1,"col-md-8","p-0","m-0","overflow-hidden"],["data-aos","fade-left","data-aos-delay","300","data-aos-anchor","#edu",1,"col-md-4","row","m-0","p-0","pe-4","overflow-hidden"],["translate","",1,"fs-2","text-center","mb-2","text-md-end","fw-light","m-0","p-0","opacity-50","d-iline-block"],["id","edu","data-aos","fade-up",1,"col-md-8","row","m-0","p-0","overflow-hidden"],["appearance","outlined","class","mb-2 cardius border-0",4,"ngFor","ngForOf"],["data-aos","fade-left","data-aos-delay","300","data-aos-anchor","#work",1,"col-md-4","row","m-0","p-0","pe-4","overflow-hidden"],["id","work","data-aos","fade-up",1,"col-md-8","row","m-0","p-0","overflow-hidden"],["appearance","outlined","class","mb-2 cardius position-relative border-0",4,"ngFor","ngForOf"],["data-aos","fade-left","data-aos-delay","300","data-aos-anchor","#cert",1,"col-md-4","row","m-0","p-0","pe-4","overflow-hidden"],["id","cert","data-aos","fade-up",1,"col-md-8","row","m-0","p-0","overflow-hidden"],[3,"matTooltip"],["target","_blank","rel","nofollow noreferrer noopener",1,"text-decoration-none","text-secondary","soc","h3","mx-4","mx-md-2","me-md-5",3,"href","title","download"],["appearance","outlined",1,"mb-2","cardius","border-0"],[1,"d-flex","flex-column","align-items-center","align-items-md-start","justify-content-center"],[1,"d-flex","flex-row","align-items-center","my-2","justify-content-center","justify-content-md-start"],[1,"bi","bi-calendar-fill","me-2","opacity-75"],["class","badge bg-pri col-surf p-2 rounded ms-2",4,"ngIf"],[1,"col-pri","text-center","text-md-start","lead"],[1,"bi","bi-building-fill","me-2"],[1,"badge","bg-pri","col-surf","p-2","rounded","ms-2"],["appearance","outlined",1,"mb-2","cardius","position-relative","border-0"],[1,"text-center","w-100"],[1,"position-absolute","wd","border-0","bg-transparent","p-2","fs-5","opacity-75",3,"click"],[1,"bi","bi-three-dots"],["class","lead",4,"ngFor","ngForOf"],[1,"lead"],[1,"list-inline"],["class","w-100 overflow-hidden d-flex py-2 flex-row align-items-center justify-content-between",4,"ngFor","ngForOf"],[1,"w-100","overflow-hidden","d-flex","py-2","flex-row","align-items-center","justify-content-between"],["target","_blank",1,"lead","text-decoration-none","col-pri",3,"href"]],template:function(t,m){t&1&&(e(0,"main")(1,"section",0)(2,"div",1)(3,"h1",2)(4,"span",3),n(5,"NAT.INTRO.PRE"),i(),e(6,"span",4),n(7),i(),e(8,"span",3),n(9,"NAT.INTRO.POST"),e(10,"span",5),d(11,"span",6),f(12,"translate"),f(13,"translate"),f(14,"translate"),f(15,"translate"),i()()(),e(16,"ul",7),p(17,ce,4,9,"li",8),i()()(),e(18,"section",9)(19,"div",10)(20,"div",11)(21,"div",12),d(22,"div",13),e(23,"div",14)(24,"h2",15),n(25,"NAT.ABOUT.HEAD"),i()()(),e(26,"div",12)(27,"div",16),d(28,"img",17),e(29,"div",18)(30,"a",19)(31,"mat-icon"),n(32,"description"),i(),e(33,"span",20),n(34,"NAT.SOCIAL.RM"),i()(),e(35,"a",21)(36,"mat-icon"),n(37,"construction"),i(),e(38,"span",20),n(39,"NAT.NAV.SKILLS"),i()(),e(40,"a",22)(41,"mat-icon"),n(42,"apps"),i(),e(43,"span",20),n(44,"NAT.NAV.PROJECTS"),i()(),e(45,"button",23),b("click",function(){return m.getInTouch()}),e(46,"mat-icon"),n(47,"tty"),i(),e(48,"span",20),n(49,"NAT.ABOUT.GIT"),i()()()(),e(50,"div",24)(51,"p",25),n(52,"NAT.ABOUT.P1"),i(),e(53,"p",25),n(54,"NAT.ABOUT.P2"),i(),e(55,"p",25),n(56,"NAT.ABOUT.P3"),i()()()()()(),e(57,"section",9)(58,"div",26)(59,"div",27)(60,"div",28),d(61,"div",29),e(62,"div",30)(63,"h2",15),n(64,"NAT.EXTRA.HEAD"),i()()(),e(65,"section",28)(66,"div",31)(67,"h3",32),n(68," NAT.EXTRA.EDU.HEAD"),i()(),e(69,"div",33),p(70,fe,13,5,"mat-card",34),i()(),e(71,"section",28)(72,"div",35)(73,"h3",32),n(74," NAT.EXTRA.WORK.HEAD"),i()(),e(75,"div",36),p(76,ue,19,12,"mat-card",37),i()(),e(77,"section",28)(78,"div",38)(79,"h3",32),n(80," NAT.EXTRA.CERT.HEAD"),i()(),e(81,"div",39),p(82,he,7,2,"mat-card",37),i()()()()()()),t&2&&(r(7),c(m.name),r(4),l("textArray",D(18,se,g(12,10,"NAT.TITLE.SE"),g(13,12,"NAT.TITLE.BD"),g(14,14,"NAT.TITLE.ATD"),g(15,16,"NAT.TITLE.AE")))("typingSpeed",50)("backspaceSpeed",20)("pauseBetweenCycles",1e3),r(6),l("ngForOf",m.socials),r(13),h("href",m.RESUME_URL,u),r(40),l("ngForOf",m.education),r(6),l("ngForOf",m.work),r(6),l("ngForOf",m.certs))},dependencies:[Q,$,L,z,G,J,q,K,X,V,U,_,F,N,R,Z,Y,H,B],styles:[".jumbotron[_ngcontent-%COMP%]{min-height:calc(100vh - 60px)}.xx[_ngcontent-%COMP%]{height:300px}.surf[_ngcontent-%COMP%]{color:var(--mat-sys-surface)}.soc[_ngcontent-%COMP%]{transition:all .1s linear}.soc[_ngcontent-%COMP%]:hover{color:var(--mat-sys-primary)!important}.lx[_ngcontent-%COMP%]{bottom:1rem;right:1rem;z-index:1}.about[_ngcontent-%COMP%], .more[_ngcontent-%COMP%]{max-width:900px}.col-surf[_ngcontent-%COMP%]{color:var(--mat-sys-surface)}.imgbg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{mask-image:linear-gradient(to bottom,#000 80%,#0000);-webkit-mask-image:linear-gradient(to bottom,rgb(0,0,0) 80%,rgba(0,0,0,0));object-fit:contain;max-height:300px;background:transparent;transition:all .1s linear}.cardius[_ngcontent-%COMP%]{background:#ffffff1a!important;box-shadow:1px 2px 3px #73737333 inset,-2px -2px 2px #8883 inset;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.darkMode[_nghost-%COMP%]   .imgbg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   .imgbg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:#f0f0f0;mask-image:none;-webkit-mask-image:none}.darkMode[_nghost-%COMP%]   .cardius[_ngcontent-%COMP%], .darkMode   [_nghost-%COMP%]   .cardius[_ngcontent-%COMP%]{background:#50505033!important;box-shadow:1px 2px 3px #00000059 inset,-2px -2px 2px #4d4d4d33 inset,2px 2px 2px #0000001a!important}.wd[_ngcontent-%COMP%]{top:0;right:10px;outline:none}.wdd[_ngcontent-%COMP%]{max-height:0px;transition:all .2s linear;padding-top:0rem}.wdd.active[_ngcontent-%COMP%]{max-height:100vh;padding-top:.5rem}.wdd[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}@media only screen and (max-width: 767px){.lx[_ngcontent-%COMP%]{right:1rem;left:1rem;margin:auto}.wdd[_ngcontent-%COMP%]{list-style:none;padding-top:0rem}.wdd.active[_ngcontent-%COMP%]{padding-top:1rem}.wdd[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:1rem}}"]})};export{ae as HomeComponent};
