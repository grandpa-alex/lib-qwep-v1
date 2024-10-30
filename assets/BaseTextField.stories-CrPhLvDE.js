import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{p as a,a as l,g as s}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const V={title:"Components/input/BaseTextField",component:a,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},m=p=>e.jsx(l,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(a,{...p})}),o={render:m,args:{placeholder:"Base text field"}},r=()=>e.jsxs(l,{mr:"mt-3",children:[e.jsx(s,{as:"h4",mr:"mb-3",children:"Color"}),e.jsxs(l,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",placeholder:"Default"}),e.jsx(a,{colorVariant:"info",placeholder:"Info"}),e.jsx(a,{colorVariant:"success",placeholder:"Success"}),e.jsx(a,{colorVariant:"warning",placeholder:"Warning"}),e.jsx(a,{colorVariant:"error",placeholder:"Error"})]}),e.jsx(s,{as:"h4",mr:"mb-3",children:"State"}),e.jsxs(l,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",blocked:!0,placeholder:"Blocked"}),e.jsx(a,{colorVariant:"info",disabled:!0,placeholder:"Disabled"}),e.jsx(a,{colorVariant:"success",sizeVariant:"M",placeholder:"SizeVariant M"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseTextField"};var t,i,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'Base text field'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,d,x;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseTextField colorVariant={'default'} placeholder={'Default'} />
            <BaseTextField colorVariant={'info'} placeholder={'Info'} />
            <BaseTextField colorVariant={'success'} placeholder={'Success'} />
            <BaseTextField colorVariant={'warning'} placeholder={'Warning'} />
            <BaseTextField colorVariant={'error'} placeholder={'Error'} />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseTextField colorVariant={'default'} blocked placeholder={'Blocked'} />
            <BaseTextField colorVariant={'info'} disabled placeholder={'Disabled'} />
            <BaseTextField colorVariant={'success'} sizeVariant={'M'} placeholder={'SizeVariant M'} />
        </BaseBox>
    </BaseBox>`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const b=["Main","ExampleBaseTextField"];export{r as ExampleBaseTextField,o as Main,b as __namedExportsOrder,V as default};
