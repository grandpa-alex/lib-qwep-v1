import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{H as a,a as l,g as o,l as t}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const j={title:"Components/slider/BaseSlider",component:a,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},p=m=>e.jsx(l,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:e.jsx(a,{...m})}),r={render:p,args:{defaultValue:[50],max:100,step:1}},s=()=>e.jsxs(l,{mr:"mt-3",children:[e.jsx(o,{as:"h4",mr:"mb-3",children:"Color"}),e.jsxs(l,{boxDisplay:"flex",boxGapVariant:"g-1",children:[e.jsx(a,{colorVariant:"default",defaultValue:[50],max:100,step:1}),e.jsx(a,{colorVariant:"info",defaultValue:[50],max:100,step:1}),e.jsx(a,{colorVariant:"success",defaultValue:[50],max:100,step:1}),e.jsx(a,{colorVariant:"warning",defaultValue:[50],max:100,step:1}),e.jsx(a,{colorVariant:"error",defaultValue:[50],max:100,step:1})]}),e.jsx(o,{as:"h4",mr:"my-3",children:"State"}),e.jsxs(l,{boxDisplay:"flex",style:{alignItems:"center"},boxGapVariant:"g-3",children:[e.jsx(a,{colorVariant:"default",blocked:!0,defaultValue:[50],max:100,step:1})," ",e.jsx(t,{children:"blocked"}),e.jsx(a,{colorVariant:"info",disabled:!0,defaultValue:[50],max:100,step:1})," ",e.jsx(t,{children:"disabled"}),e.jsx(a,{defaultValue:[50],max:100,step:1,colorVariant:"success",sizeVariant:"M"})," ",e.jsx(t,{children:"sizeVariant M"}),e.jsx(a,{orientation:"vertical",defaultValue:[50],max:100,step:1,colorVariant:"success",sizeVariant:"M"})," ",e.jsx(t,{children:"orientation vertical"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseSlider"};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    defaultValue: [50],
    max: 100,
    step: 1
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseSlider colorVariant={'default'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'info'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'success'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'warning'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'error'} defaultValue={[50]} max={100} step={1} />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{
    alignItems: 'center'
  }} boxGapVariant={'g-3'}>
            <BaseSlider colorVariant={'default'} blocked defaultValue={[50]} max={100} step={1} />{' '}
            <BaseText>blocked</BaseText>
            <BaseSlider colorVariant={'info'} disabled defaultValue={[50]} max={100} step={1} />{' '}
            <BaseText>disabled</BaseText>
            <BaseSlider defaultValue={[50]} max={100} step={1} colorVariant={'success'} sizeVariant={'M'} />{' '}
            <BaseText>sizeVariant M</BaseText>
            <BaseSlider orientation={'vertical'} defaultValue={[50]} max={100} step={1} colorVariant={'success'} sizeVariant={'M'} />{' '}
            <BaseText>orientation vertical</BaseText>
        </BaseBox>
    </BaseBox>`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const g=["Main","ExampleBaseSlider"];export{s as ExampleBaseSlider,r as Main,g as __namedExportsOrder,j as default};
