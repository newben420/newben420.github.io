import{i as T,j as I,t as A}from"./chunk-GHQQGGDG.js";import"./chunk-2J2PEGY2.js";import{Lb as p,Mb as u,Pb as g,Qb as r,Rb as a,Ta as l,Ya as h,db as y,fb as x,pb as f,ua as d,ub as n,vb as s,wb as m}from"./chunk-5S3NMYGX.js";var o=class i{constructor(t){this.el=t;this.element=t.nativeElement}textArray=[];typingSpeed=100;backspaceSpeed=50;pauseBetweenCycles=2e3;element;textIndex=0;charIndex=0;isDeleting=!1;ngOnInit(){if(!Array.isArray(this.textArray)||this.textArray.length===0){console.error("appTypewriter: textArray must be an array of strings.");return}this.startTyping()}startTyping(){let t=this.textArray[this.textIndex];this.isDeleting?this.charIndex--:this.charIndex++,this.element.innerHTML=`<span>${t.substring(0,this.charIndex)}</span><span class="cursor">|</span>`;let e=this.isDeleting?this.backspaceSpeed:this.typingSpeed;!this.isDeleting&&this.charIndex===t.length?(e=Math.random()*2e3+1e3,this.isDeleting=!0):this.isDeleting&&this.charIndex===0&&(this.isDeleting=!1,this.textIndex=(this.textIndex+1)%this.textArray.length,e=Math.random()*2e3+1e3),setTimeout(()=>this.startTyping(),e)}static \u0275fac=function(e){return new(e||i)(h(d))};static \u0275dir=x({type:i,selectors:[["","appTypewriter",""]],inputs:{textArray:"textArray",typingSpeed:"typingSpeed",backspaceSpeed:"backspaceSpeed",pauseBetweenCycles:"pauseBetweenCycles"}})};var D=(i,t,e,c)=>[i,t,e,c],v=class i{name="Gbiang Benedict Mashingil";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-home"]],decls:15,vars:18,consts:[[1,"jumbotron","p-2","d-flex","flex-column","align-items-center","justify-content-center"],[1,"d-inline-block","text-center","text-md-start"],["translate","",1,"display-4"],[1,"display-1","fw-normal","col-pri","d-block"],[1,"bg-pri","surf","rounded","p-2","m-2","d-inline-block","fw-normal"],["appTypewriter","",3,"textArray","typingSpeed","backspaceSpeed","pauseBetweenCycles"],[1,"xx"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"h1",1)(2,"span",2),p(3,"NAT.INTRO.PRE"),s(),n(4,"span",3),p(5),s(),n(6,"span",2),p(7,"NAT.INTRO.POST"),n(8,"span",4),m(9,"span",5),r(10,"translate"),r(11,"translate"),r(12,"translate"),r(13,"translate"),s()()()(),m(14,"div",6)),e&2&&(l(5),u(c.name),l(4),f("textArray",g(13,D,a(10,5,"NAT.TITLE.SE"),a(11,7,"NAT.TITLE.BD"),a(12,9,"NAT.TITLE.ATD"),a(13,11,"NAT.TITLE.AE")))("typingSpeed",50)("backspaceSpeed",20)("pauseBetweenCycles",1e3))},dependencies:[A,T,I,o],styles:[".jumbotron[_ngcontent-%COMP%]{min-height:calc(100vh - 60px)}.xx[_ngcontent-%COMP%]{height:3000px}.surf[_ngcontent-%COMP%]{color:var(--mat-sys-surface)}"]})};export{v as HomeComponent};
