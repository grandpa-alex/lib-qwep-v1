import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{w as s,V as b,x as B,a as u,W as m,y as x}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const h={title:"Components/radio/BaseRadioGroup",component:s,tags:["autodocs"],argTypes:{activeValue:{control:"text",description:"Value of the selected radio button"},labelColor:{control:"color"},colorVariant:{control:"select",options:Object.values(b)},sizeVariant:{control:"select",options:Object.values(B)}}},V=e=>a.jsx(u,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:a.jsx(s,{...e,children:[1,2,3,4].map(o=>a.jsx(m,{positionLabel:e.positionLabel,id:`${o}`,label:`BaseRadioItem ${o}`,children:a.jsx(x,{id:`${o}`,colorVariant:e.colorVariant,sizeVariant:e.sizeVariant,value:`${o}`})},o))})}),r={render:V,args:{positionLabel:"right",colorVariant:"default",sizeVariant:"M",label:"Default",activeValue:"1"}},t=()=>a.jsx(u,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:a.jsx(s,{children:[1,2,3,4].map(e=>a.jsx(m,{label:`BaseRadioItem ${e}`,positionLabel:"right",children:a.jsx(x,{value:`${e}`})},e))})});t.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseRadioGroup"};var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  args: {
    positionLabel: 'right',
    colorVariant: 'default',
    sizeVariant: 'M',
    label: 'Default',
    activeValue: '1'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <BaseBox boxDisplay={'flex'} style={{
    justifyContent: 'center',
    margin: '50px auto'
  }}>
            <BaseRadioGroup>
                {[1, 2, 3, 4].map(num => <WrapperInput key={num} label={\`BaseRadioItem \${num}\`} positionLabel={'right'}>
                        <BaseRadioItem value={\`\${num}\`} />
                    </WrapperInput>)}
            </BaseRadioGroup>
        </BaseBox>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["Main","ExampleBaseRadioGroup"];export{t as ExampleBaseRadioGroup,r as Main,g as __namedExportsOrder,h as default};
