import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{u as r,f as B,a as o,g as t}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const P={title:"Components/popup/BasePopup",component:r,tags:["autodocs"],argTypes:{trigger:{description:"The element that triggers the popup"}}},x=c=>e.jsx(o,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(r,{...c,children:"content"})}),a={render:x,args:{trigger:e.jsx(B,{children:"PopUp"})}},s=()=>e.jsxs(o,{mr:"mt-3",children:[e.jsx(t,{as:"h4",mr:"mb-3",children:"Examples of Popups"}),e.jsx(o,{boxDisplay:"flex",boxGapVariant:"g-1",children:e.jsxs(r,{trigger:e.jsx(B,{children:"Info Popup"}),children:[e.jsx(t,{children:"BasePopup"}),"This is an informational."]})})]});s.__docgenInfo={description:"",methods:[],displayName:"ExampleBasePopup"};var p,n,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    trigger: <BaseButton>PopUp</BaseButton>
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Examples of Popups
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <BasePopup trigger={<BaseButton>Info Popup</BaseButton>}>
                    <BaseTitle>BasePopup</BaseTitle>
                    This is an informational.
                </BasePopup>
            </BaseBox>
        </BaseBox>;
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const j=["Main","ExampleBasePopup"];export{s as ExampleBasePopup,a as Main,j as __namedExportsOrder,P as default};
