import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{h as t,i,a as n,g as r}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const j={title:"Components/button/SimpleButton",component:t,tags:["autodocs"],argTypes:{color:{control:"color"},disabled:{control:"boolean",description:"Disables the button, making it uninteractive",defaultValue:!1}}},h=B=>o.jsx(n,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:o.jsx(t,{...B})}),a={render:h,args:{children:"Simple Button",icon:o.jsx(i,{})}},e=()=>o.jsxs(n,{mr:"mt-3",children:[o.jsx(r,{as:"h4",mr:"mb-3",children:"Position"}),o.jsxs(n,{boxDisplay:"flex",boxGapVariant:"g-1",children:[o.jsx(t,{icon:o.jsx(i,{}),colorVariant:"default",children:"Default"}),o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},colorVariant:"info",children:"Position center"}),o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},position:"left",colorVariant:"success",children:"Position left"}),o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},position:"right",colorVariant:"warning",children:"Position right"})]}),o.jsx(r,{as:"h4",mr:"my-3",children:"Position icon"}),o.jsxs(n,{boxDisplay:"flex",boxGapVariant:"g-1",children:[o.jsx(t,{icon:o.jsx(i,{}),colorVariant:"default",children:"Default"}),o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},iconPosition:"right",colorVariant:"info",children:"Position right"}),o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},iconPosition:"left",colorVariant:"info",children:"Position left"})]}),o.jsx(r,{as:"h4",mr:"my-3",children:"Long title"}),o.jsx(n,{boxDisplay:"flex",boxGapVariant:"g-1",children:o.jsx(t,{icon:o.jsx(i,{}),style:{width:"200px"},colorVariant:"default",children:"Long long long long long long long"})})]});e.__docgenInfo={description:"",methods:[],displayName:"ExampleSimpleButton"};var s,l,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'Simple Button',
    icon: <Icon.BarChart />
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,x,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Position
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SimpleButton icon={<Icon.BarChart />} colorVariant={'default'}>
                Default
            </SimpleButton>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} colorVariant={'info'}>
                Position center
            </SimpleButton>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} position={'left'} colorVariant={'success'}>
                Position left
            </SimpleButton>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} position={'right'} colorVariant={'warning'}>
                Position right
            </SimpleButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            Position icon
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SimpleButton icon={<Icon.BarChart />} colorVariant={'default'}>
                Default
            </SimpleButton>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} iconPosition={'right'} colorVariant={'info'}>
                Position right
            </SimpleButton>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} iconPosition={'left'} colorVariant={'info'}>
                Position left
            </SimpleButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            Long title
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SimpleButton icon={<Icon.BarChart />} style={{
      width: '200px'
    }} colorVariant={'default'}>
                Long long long long long long long
            </SimpleButton>
        </BaseBox>
    </BaseBox>`,...(m=(x=e.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const y=["Main","ExampleSimpleButton"];export{e as ExampleSimpleButton,a as Main,y as __namedExportsOrder,j as default};
