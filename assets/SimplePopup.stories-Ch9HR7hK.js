import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{v as s,A as x,f as u,a as o,g as a,l as B}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const j={title:"Components/popup/SimplePopup",component:s,tags:["autodocs"],argTypes:{icon:{description:"The icon of the popup"},title:{description:"The title of the popup"},trigger:{description:"The element that triggers the popup"}}},g=d=>e.jsx(o,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(s,{...d,children:"content"})}),t={render:g,args:{icon:e.jsx(x,{}),title:"Popup Title",trigger:e.jsx(u,{children:"SimplePopUp"})}},p=()=>e.jsxs(o,{mr:"mt-3",children:[e.jsx(a,{as:"h4",mr:"mb-3",children:"Examples of Popups"}),e.jsx(o,{boxDisplay:"flex",boxGapVariant:"g-1",children:e.jsxs(s,{icon:e.jsx(x,{}),title:"Popup Title",trigger:e.jsx(u,{children:"SimplePopUp"}),children:[e.jsx(a,{children:"SimplePopUp"}),e.jsx(B,{children:"This is an informational."})]})})]});p.__docgenInfo={description:"",methods:[],displayName:"ExampleSimplePopup"};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    icon: <Icon.Award />,
    title: \`Popup Title\`,
    trigger: <BaseButton>SimplePopUp</BaseButton>
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,m,c;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Examples of Popups
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimplePopup icon={<Icon.Award />} title={'Popup Title'} trigger={<BaseButton>SimplePopUp</BaseButton>}>
                    <BaseTitle>SimplePopUp</BaseTitle>
                    <BaseText>This is an informational.</BaseText>
                </SimplePopup>
            </BaseBox>
        </BaseBox>;
}`,...(c=(m=p.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const S=["Main","ExampleSimplePopup"];export{p as ExampleSimplePopup,t as Main,S as __namedExportsOrder,j as default};
