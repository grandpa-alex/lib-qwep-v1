import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{J as s,a as t,g as p}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const h={title:"Components/switch/SubmitSwitch",component:s,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},x=d=>a.jsx(t,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:a.jsx(s,{...d})}),o={render:x,args:{isLoading:!1}},e=()=>a.jsxs(t,{mr:"mt-3",children:[a.jsx(p,{as:"h4",mr:"mb-3",children:"Loading"}),a.jsxs(t,{boxDisplay:"flex",boxGapVariant:"g-1",children:[a.jsx(s,{isLoading:!1,colorVariant:"default"}),a.jsx(s,{isLoading:!0,colorVariant:"info"})]})]});e.__docgenInfo={description:"",methods:[],displayName:"ExampleSubmitSwitch"};var r,i,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    isLoading: false
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitSwitch isLoading={false} colorVariant={'default'} />
            <SubmitSwitch isLoading={true} colorVariant={'info'} />
        </BaseBox>
    </BaseBox>`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Main","ExampleSubmitSwitch"];export{e as ExampleSubmitSwitch,o as Main,S as __namedExportsOrder,h as default};
