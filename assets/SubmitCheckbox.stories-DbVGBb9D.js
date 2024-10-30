import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{m as s,a as r,g as d}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const h={title:"Components/checkbox/SubmitCheckbox",component:s,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},p=x=>e.jsx(r,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(s,{...x})}),o={render:p,args:{isLoading:!1}},a=()=>e.jsxs(r,{mr:"mt-3",children:[e.jsx(d,{as:"h4",mr:"mb-3",children:"Loading"}),e.jsxs(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(s,{isLoading:!1,colorVariant:"default"}),e.jsx(s,{isLoading:!0,colorVariant:"info"})]})]});a.__docgenInfo={description:"",methods:[],displayName:"ExampleSubmitCheckbox"};var t,i,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template,
  args: {
    isLoading: false
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitCheckbox isLoading={false} colorVariant={'default'} />
            <SubmitCheckbox isLoading={true} colorVariant={'info'} />
        </BaseBox>
    </BaseBox>`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const B=["Main","ExampleSubmitCheckbox"];export{a as ExampleSubmitCheckbox,o as Main,B as __namedExportsOrder,h as default};
