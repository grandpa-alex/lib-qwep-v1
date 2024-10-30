import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{q as a,a as s,g as l}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const f={title:"Components/input/BaseTextarea",component:a,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},m=u=>e.jsx(s,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(a,{...u})}),o={render:m,args:{placeholder:"Base textarea"}},r=()=>e.jsxs(s,{mr:"mt-3",children:[e.jsx(l,{as:"h4",mr:"mb-3",children:"Color"}),e.jsxs(s,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",placeholder:"Default"}),e.jsx(a,{colorVariant:"info",placeholder:"Info"}),e.jsx(a,{colorVariant:"success",placeholder:"Success"}),e.jsx(a,{colorVariant:"warning",placeholder:"Warning"}),e.jsx(a,{colorVariant:"error",placeholder:"Error"})]}),e.jsx(l,{as:"h4",mr:"my-3",children:"State"}),e.jsxs(s,{boxDisplay:"flex",style:{alignItems:"start"},boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",blocked:!0,placeholder:"Blocked"}),e.jsx(a,{colorVariant:"info",disabled:!0,placeholder:"Disabled"}),e.jsx(a,{colorVariant:"success",sizeVariant:"M",defaultValue:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias aliquam. Consequuntur aperiam dolores repellendus repudiandae aliquam possimus tempora quidem beatae, quam ullam consectetur odio quis, quasi veritatis dolorem hic!",placeholder:"SizeVariant M"}),e.jsx(a,{colorVariant:"success",rows:5,placeholder:"5 rows"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseTextarea"};var t,i,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'Base textarea'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseTextarea colorVariant={'default'} placeholder={'Default'} />
            <BaseTextarea colorVariant={'info'} placeholder={'Info'} />
            <BaseTextarea colorVariant={'success'} placeholder={'Success'} />
            <BaseTextarea colorVariant={'warning'} placeholder={'Warning'} />
            <BaseTextarea colorVariant={'error'} placeholder={'Error'} />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{
    alignItems: 'start'
  }} boxGapVariant={'g-1'}>
            <BaseTextarea colorVariant={'default'} blocked placeholder={'Blocked'} />
            <BaseTextarea colorVariant={'info'} disabled placeholder={'Disabled'} />
            <BaseTextarea colorVariant={'success'} sizeVariant={'M'} defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias aliquam. Consequuntur aperiam dolores repellendus repudiandae aliquam possimus tempora quidem beatae, quam ullam consectetur odio quis, quasi veritatis dolorem hic!'} placeholder={'SizeVariant M'} />
            <BaseTextarea colorVariant={'success'} rows={5} placeholder={'5 rows'} />
        </BaseBox>
    </BaseBox>`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["Main","ExampleBaseTextarea"];export{r as ExampleBaseTextarea,o as Main,b as __namedExportsOrder,f as default};
