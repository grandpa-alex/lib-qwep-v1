import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{o as s,r as i,a as r,g as n,E as h,s as f}from"./BaseTabWrapper-CU_7wYvq.js";import{r as g}from"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const T={title:"Components/input/SimpleTextField",component:s,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},B=o=>e.jsx(r,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(s,{...o})}),t={render:B,args:{placeholder:"Simple text field",icon:e.jsx(i,{})}},a=()=>{const[o,u]=g.useState(!1);return e.jsxs(r,{mr:"mt-3",children:[e.jsx(n,{as:"h4",mr:"mb-3",children:"Position icon"}),e.jsxs(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(s,{icon:e.jsx(i,{}),colorVariant:"default",placeholder:"Default"}),e.jsx(s,{colorVariant:"success",icon:e.jsx(i,{}),iconPosition:"right",placeholder:"Right"})]}),e.jsx(n,{as:"h4",mr:"my-3",children:"Icon button"}),e.jsx(r,{boxDisplay:"flex",boxGapVariant:"g-1",children:e.jsx(s,{colorVariant:"default",defaultValue:"Password",iconPosition:"right",type:o?"text":"password",iconOnClick:()=>u(!o),icon:o?e.jsx(h,{}):e.jsx(f,{}),placeholder:"Password"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"ExampleSimpleTextField"};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'Simple text field',
    icon: <Icon.Search />
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,d,m;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Position icon
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimpleTextField icon={<Icon.Search />} colorVariant={'default'} placeholder={'Default'} />
                <SimpleTextField colorVariant={'success'} icon={<Icon.Search />} iconPosition={'right'} placeholder={'Right'} />
            </BaseBox>
            <BaseTitle as={'h4'} mr={'my-3'}>
                Icon button
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimpleTextField colorVariant={'default'} defaultValue={'Password'} iconPosition={'right'} type={open ? 'text' : 'password'} iconOnClick={() => setOpen(!open)} icon={open ? <Icon.Eye /> : <Icon.EyeClose />} placeholder={'Password'} />
            </BaseBox>
        </BaseBox>;
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const V=["Main","ExampleSimpleTextField"];export{a as ExampleSimpleTextField,t as Main,V as __namedExportsOrder,T as default};
