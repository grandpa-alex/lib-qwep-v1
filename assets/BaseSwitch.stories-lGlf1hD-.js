import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{I as a,a as r,g as i,l as o}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const b={title:"Components/switch/BaseSwitch",component:a,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},p=B=>e.jsx(r,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(a,{...B})}),t={render:p,args:{}},s=()=>e.jsxs(r,{mr:"mt-3",children:[e.jsx(i,{as:"h4",mr:"mb-3",children:"Color"}),e.jsxs(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default"}),e.jsx(a,{colorVariant:"info"}),e.jsx(a,{colorVariant:"success"}),e.jsx(a,{colorVariant:"warning",defaultChecked:!0}),e.jsx(a,{colorVariant:"error",defaultChecked:!0})]}),e.jsx(i,{as:"h4",mr:"my-3",children:"State"}),e.jsxs(r,{boxDisplay:"flex",style:{alignItems:"center"},boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",blocked:!0})," ",e.jsx(o,{children:"blocked"}),e.jsx(a,{colorVariant:"info",disabled:!0,defaultChecked:!0})," ",e.jsx(o,{children:"disabled"}),e.jsx(a,{colorVariant:"success",sizeVariant:"M"})," ",e.jsx(o,{children:"sizeVariant M"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseSwitch"};var c,l,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,x,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseSwitch colorVariant={'default'} />
            <BaseSwitch colorVariant={'info'} />
            <BaseSwitch colorVariant={'success'} />
            <BaseSwitch colorVariant={'warning'} defaultChecked />
            <BaseSwitch colorVariant={'error'} defaultChecked />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{
    alignItems: 'center'
  }} boxGapVariant={'g-1'}>
            <BaseSwitch colorVariant={'default'} blocked /> <BaseText>blocked</BaseText>
            <BaseSwitch colorVariant={'info'} disabled defaultChecked /> <BaseText>disabled</BaseText>
            <BaseSwitch colorVariant={'success'} sizeVariant={'M'} /> <BaseText>sizeVariant M</BaseText>
        </BaseBox>
    </BaseBox>`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const j=["Main","ExampleBaseSwitch"];export{s as ExampleBaseSwitch,t as Main,j as __namedExportsOrder,b as default};
