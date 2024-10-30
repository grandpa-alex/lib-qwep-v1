import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{f as e,a as t,g as n}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const f={title:"Components/Button/BaseButton",component:e,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},u=x=>a.jsx(t,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:a.jsx(e,{...x})}),o={render:u,args:{children:"Base Button"}},s=()=>a.jsxs(t,{mr:"mt-3",children:[a.jsx(n,{as:"h4",mr:"mb-3",children:"Color"}),a.jsxs(t,{boxDisplay:"flex",boxGapVariant:"g-1",children:[a.jsx(e,{colorVariant:"default",children:"Default"}),a.jsx(e,{colorVariant:"info",children:"Info"}),a.jsx(e,{colorVariant:"success",children:"Success"}),a.jsx(e,{colorVariant:"warning",children:"Warning"}),a.jsx(e,{colorVariant:"error",children:"Error"})]}),a.jsx(n,{as:"h4",mr:"my-3",children:"Variant"}),a.jsxs(t,{boxDisplay:"flex",boxGapVariant:"g-1",children:[a.jsx(e,{variant:"contained",children:"Contained"}),a.jsx(e,{variant:"outlined",children:"Outlined"}),a.jsx(e,{variant:"text",children:"Text"})]}),a.jsx(n,{as:"h4",mr:"my-3",children:"State"}),a.jsxs(t,{boxDisplay:"flex",boxGapVariant:"g-1",children:[a.jsx(e,{disabled:!0,children:"Disabled"}),a.jsx(e,{blocked:!0,children:"Blocked"}),a.jsx(e,{sizeVariant:"M",children:"sizeVariant M"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseButton"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'Base Button'
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var B,c,d;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton colorVariant={'default'}>Default</BaseButton>
            <BaseButton colorVariant={'info'}>Info</BaseButton>
            <BaseButton colorVariant={'success'}>Success</BaseButton>
            <BaseButton colorVariant={'warning'}>Warning</BaseButton>
            <BaseButton colorVariant={'error'}>Error</BaseButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            Variant
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton variant={'contained'}>Contained</BaseButton>
            <BaseButton variant={'outlined'}>Outlined</BaseButton>
            <BaseButton variant={'text'}>Text</BaseButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton disabled>Disabled</BaseButton>
            <BaseButton blocked>Blocked</BaseButton>
            <BaseButton sizeVariant={'M'}>sizeVariant M</BaseButton>
        </BaseBox>
    </BaseBox>`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Main","ExampleBaseButton"];export{s as ExampleBaseButton,o as Main,j as __namedExportsOrder,f as default};
