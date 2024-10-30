import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{K as r,L as e,a as l,M as t}from"./BaseTabWrapper-CU_7wYvq.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const v={title:"Components/tab/BaseTabWrapper",component:r,tags:["autodocs"]},p=u=>a.jsx(l,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:a.jsxs(l,{style:{paddingBottom:"300px"},children:[a.jsx("h2",{children:"BASE TAB"}),a.jsxs(r,{...u,children:[a.jsx(t,{value:"t-1",children:"BaseTabContent_1"}),a.jsx(t,{value:"t-2",children:"BaseTabContent_2"}),a.jsx(t,{value:"t-3",children:"BaseTabContent_3"})]})]})}),s={render:p,args:{defaultValue:"t-3",tabs:[a.jsx(e,{value:"t-1",children:"BaseTab_1"},1),a.jsx(e,{value:"t-2",children:"BaseTab_2"},2),a.jsx(e,{value:"t-3",children:"BaseTab_3"},3)]}},n=()=>a.jsxs(l,{style:{paddingBottom:"300px"},children:[a.jsx("h2",{children:"BASE TAB vertical"}),a.jsxs(r,{defaultValue:"t-3",tabs:[a.jsx(e,{value:"t-1",children:"BaseTab_1"},1),a.jsx(e,{value:"t-2",children:"BaseTab_2"},2),a.jsx(e,{value:"t-3",disabled:!0,children:"BaseTab_3"},3)],children:[a.jsx(t,{value:"t-1",children:"BaseTabContent_1"}),a.jsx(t,{value:"t-2",children:"BaseTabContent_2"}),a.jsx(t,{value:"t-3",children:"BaseTabContent_3"})]}),a.jsx("h2",{style:{marginTop:"50px"},children:"BASE TAB horizontal"}),a.jsxs(r,{defaultValue:"t-4",orientation:"horizontal",tabs:[a.jsx(e,{value:"t-1",children:"BaseTab_1"},1),a.jsx(e,{value:"t-2",children:"BaseTab_2"},2),a.jsx(e,{value:"t-3",children:"BaseTab_3"},3),a.jsx(e,{value:"t-4",disabled:!0,children:"BaseTab_4"},4)],children:[a.jsx(t,{value:"t-1",children:"BaseTabContent_1"}),a.jsx(t,{value:"t-2",children:"BaseTabContent_2"}),a.jsx(t,{value:"t-3",children:"BaseTabContent_3"}),a.jsx(t,{value:"t-4",children:"BaseTabContent_4"})]})]});n.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseTabWrapper"};var B,o,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    defaultValue: 't-3',
    tabs: [<BaseTab key={1} value={'t-1'}>
                BaseTab_1
            </BaseTab>, <BaseTab key={2} value={'t-2'}>
                BaseTab_2
            </BaseTab>, <BaseTab key={3} value={'t-3'}>
                BaseTab_3
            </BaseTab>]
  }
}`,...(b=(o=s.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};var T,i,d;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <BaseBox style={{
    paddingBottom: '300px'
  }}>
            <h2>BASE TAB vertical</h2>

            <BaseTabWrapper defaultValue={'t-3'}
    // orientation={'horizontal'}
    tabs={[<BaseTab key={1} value={'t-1'}>
                        BaseTab_1
                    </BaseTab>, <BaseTab key={2} value={'t-2'}>
                        BaseTab_2
                    </BaseTab>, <BaseTab key={3} value={'t-3'} disabled>
                        BaseTab_3
                    </BaseTab>]}>
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
            </BaseTabWrapper>

            <h2 style={{
      marginTop: '50px'
    }}>BASE TAB horizontal</h2>
            <BaseTabWrapper defaultValue={'t-4'} orientation={'horizontal'} tabs={[<BaseTab key={1} value={'t-1'}>
                        BaseTab_1
                    </BaseTab>, <BaseTab key={2} value={'t-2'}>
                        BaseTab_2
                    </BaseTab>, <BaseTab key={3} value={'t-3'}>
                        BaseTab_3
                    </BaseTab>, <BaseTab key={4} value={'t-4'} disabled>
                        BaseTab_4
                    </BaseTab>]}>
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
                <BaseTabContent value={'t-4'}>BaseTabContent_4</BaseTabContent>
            </BaseTabWrapper>
        </BaseBox>;
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const C=["Main","ExampleBaseTabWrapper"];export{n as ExampleBaseTabWrapper,s as Main,C as __namedExportsOrder,v as default};
