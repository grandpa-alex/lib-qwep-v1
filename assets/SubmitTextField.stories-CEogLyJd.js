import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{t,r,a as s,g as p}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const S={title:"Components/input/SubmitTextField",component:t,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},u=x=>e.jsx(s,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(t,{...x})}),o={render:u,args:{placeholder:"Submit text field",icon:e.jsx(r,{}),isLoading:!1}},a=()=>e.jsxs(s,{mr:"mt-3",children:[e.jsx(p,{as:"h4",mr:"mb-3",children:"Loading"}),e.jsxs(s,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(t,{isLoading:!1,icon:e.jsx(r,{}),colorVariant:"default",placeholder:"Default"}),e.jsx(t,{isLoading:!0,icon:e.jsx(r,{}),placeholder:"Loading"})]})]});a.__docgenInfo={description:"",methods:[],displayName:"ExampleSubmitTextField"};var i,n,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'Submit text field',
    icon: <Icon.Search />,
    isLoading: false
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Loading
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SubmitTextField isLoading={false} icon={<Icon.Search />} colorVariant={'default'} placeholder={'Default'} />
                <SubmitTextField isLoading={true} icon={<Icon.Search />} placeholder={'Loading'} />
            </BaseBox>
        </BaseBox>;
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Main","ExampleSubmitTextField"];export{a as ExampleSubmitTextField,o as Main,j as __namedExportsOrder,S as default};
