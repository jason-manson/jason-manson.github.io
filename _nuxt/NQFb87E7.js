import{s as v}from"./DwGgh1ta.js";import{s as y}from"./cw1-IybD.js";import{r,o as b,H as x,t as R,x as t,z as o,I as c,A as S,v as g}from"./jykpb-BB.js";import{_ as k}from"./DN4w8PnB.js";import{S as _}from"./D02pscyA.js";import"./BQ_-CV98.js";import"./CK5sq8FH.js";const C={class:"summary-page p-4"},V={class:"flex justify-between mt-8"},q={class:"flex flex-col items-center p-4"},h={__name:"summary",setup(w){const l=x(),i=r(!1),m=r({}),p=r({}),u=r([]);b(()=>{const a=sessionStorage.getItem("selectedEmployee");if(a)m.value=JSON.parse(a);else{l.push("/multi-party/employee-search");return}const e=sessionStorage.getItem("dietaryRequirements");e&&(p.value=JSON.parse(e));const s=sessionStorage.getItem("partyRsvps");s&&(u.value=JSON.parse(s))});function d(){i.value=!0}return(a,e)=>{const s=y,f=v;return g(),R("div",C,[e[6]||(e[6]=t("h1",{class:"text-2xl font-bold mb-6"},"RSVP Summary",-1)),o(_,{steps:["Access Code","Find Employee","Details","Party List","Summary"],currentStep:5}),o(k,{employee:m.value,dietaryRequirements:p.value,multiRsvp:u.value},null,8,["employee","dietaryRequirements","multiRsvp"]),t("div",V,[o(s,{label:"Back to Events",icon:"pi pi-arrow-left",onClick:e[0]||(e[0]=n=>c(l).push("/multi-party/party-list")),class:"p-button-secondary"}),o(s,{label:"Confirm RSVPs",icon:"pi pi-check",onClick:d})]),o(f,{visible:i.value,"onUpdate:visible":e[2]||(e[2]=n=>i.value=n),header:"Success!",modal:!0,closable:!1,style:{width:"30rem"}},{default:S(()=>[t("div",q,[e[3]||(e[3]=t("i",{class:"pi pi-check-circle text-6xl text-green-500 mb-4"},null,-1)),e[4]||(e[4]=t("h2",{class:"text-xl font-bold mb-2"},"Thank You!",-1)),e[5]||(e[5]=t("p",{class:"text-center mb-4"},"Your RSVP has been successfully submitted.",-1)),o(s,{label:"Return to Home",onClick:e[1]||(e[1]=n=>c(l).push("/")),class:"w-full"})])]),_:1},8,["visible"])])}}};export{h as default};
