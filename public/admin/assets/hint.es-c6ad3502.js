import{C as r}from"./codemirror.es-52e8b92d.js";import"./show-hint.es-b981493e.js";import{P as c,g}from"./index-20d617a5.js";import"./codemirror.es2-5884f31a.js";r.registerHelper("hint","graphql",(i,a)=>{const{schema:s,externalFragments:p}=a;if(!s)return;const n=i.getCursor(),t=i.getTokenAt(n),l=t.type!==null&&/"|\w/.test(t.string[0])?t.start:t.end,m=new c(n.line,l),e={list:g(s,i.getValue(),m,t,p).map(o=>({text:o.label,type:o.type,description:o.documentation,isDeprecated:o.isDeprecated,deprecationReason:o.deprecationReason})),from:{line:n.line,ch:l},to:{line:n.line,ch:t.end}};return e!=null&&e.list&&e.list.length>0&&(e.from=r.Pos(e.from.line,e.from.ch),e.to=r.Pos(e.to.line,e.to.ch),r.signal(i,"hasCompletion",i,e,t)),e});