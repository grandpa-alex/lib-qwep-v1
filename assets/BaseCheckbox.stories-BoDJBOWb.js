import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{k as a,a as r,g as c,l as t}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const k={title:"Components/checkbox/BaseCheckbox",component:a,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},b=B=>e.jsx(r,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(a,{...B})}),o={render:b,args:{}},s=()=>e.jsxs(r,{mr:"mt-3",children:[e.jsx(c,{as:"h4",mr:"mb-3",children:"Color"}),e.jsxs(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default"}),e.jsx(a,{colorVariant:"info"}),e.jsx(a,{colorVariant:"success"}),e.jsx(a,{colorVariant:"warning",defaultChecked:!0}),e.jsx(a,{colorVariant:"error",defaultChecked:!0})]}),e.jsx(c,{as:"h4",mr:"my-3",children:"State"}),e.jsxs(r,{boxDisplay:"flex",style:{alignItems:"center"},boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",blocked:!0})," ",e.jsx(t,{children:"blocked"}),e.jsx(a,{colorVariant:"info",disabled:!0,defaultChecked:!0})," ",e.jsx(t,{children:"disabled"}),e.jsx(a,{colorVariant:"success",sizeVariant:"M"})," ",e.jsx(t,{children:"sizeVariant M"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseCheckbox"};var l,i,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var x,d,m;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseCheckbox colorVariant={'default'} />
            <BaseCheckbox colorVariant={'info'} />
            <BaseCheckbox colorVariant={'success'} />
            <BaseCheckbox colorVariant={'warning'} defaultChecked />
            <BaseCheckbox colorVariant={'error'} defaultChecked />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{
    alignItems: 'center'
  }} boxGapVariant={'g-1'}>
            <BaseCheckbox colorVariant={'default'} blocked /> <BaseText>blocked</BaseText>
            <BaseCheckbox colorVariant={'info'} disabled defaultChecked /> <BaseText>disabled</BaseText>
            <BaseCheckbox colorVariant={'success'} sizeVariant={'M'} /> <BaseText>sizeVariant M</BaseText>
        </BaseBox>
    </BaseBox>`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const V=["Main","ExampleBaseCheckbox"];export{s as ExampleBaseCheckbox,o as Main,V as __namedExportsOrder,k as default};
