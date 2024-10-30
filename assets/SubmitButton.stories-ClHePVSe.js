import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{j as e,i as n,a as r,g as p}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const h={title:"Components/button/SubmitButton",component:e,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},x=d=>t.jsx(r,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:t.jsx(e,{...d})}),o={render:x,args:{children:"Submit Button",icon:t.jsx(n,{}),isLoading:!1}},a=()=>t.jsxs(r,{mr:"mt-3",children:[t.jsx(p,{as:"h4",mr:"mb-3",children:"Loading"}),t.jsxs(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:[t.jsx(e,{isLoading:!1,icon:t.jsx(n,{}),colorVariant:"default",children:"Default"}),t.jsx(e,{isLoading:!0,icon:t.jsx(n,{}),colorVariant:"default",children:"Loading"})]})]});a.__docgenInfo={description:"",methods:[],displayName:"ExampleSubmitButton"};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'Submit Button',
    icon: <Icon.BarChart />,
    isLoading: false
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitButton isLoading={false} icon={<Icon.BarChart />} colorVariant={'default'}>
                Default
            </SubmitButton>
            <SubmitButton isLoading={true} icon={<Icon.BarChart />} colorVariant={'default'}>
                Loading
            </SubmitButton>
        </BaseBox>
    </BaseBox>`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Main","ExampleSubmitButton"];export{a as ExampleSubmitButton,o as Main,j as __namedExportsOrder,h as default};
