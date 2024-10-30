import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{n as i,a as g,h as t,o as l}from"./BaseTabWrapper-CU_7wYvq.js";import{r as u}from"./index-uubelm5h.js";import"./index-CfOt2XX2.js";const j={title:"Components/dialog/BaseDialog",component:i,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"State that open dialog"},defaultOpen:{control:"boolean",description:"Value that open dialog as default"},onOpenChange:{description:"Setter state that make dialog close"}}},b=r=>{const[o,s]=u.useState(!1);return e.jsxs(g,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:[e.jsx(t,{mr:"m-3",onClick:()=>s(!o),children:"Default Dialog"}),e.jsxs(i,{...r,open:o,onOpenChange:s,children:[e.jsx(l,{placeholder:"Placeholder 1"}),e.jsx(l,{placeholder:"Placeholder 2"}),e.jsx(t,{colorVariant:"error",onClick:()=>s(!1),children:"Close"})]})]})},n={render:b,args:{boxGapVariant:"g-1",boxPaddingVariant:"p-5",boxWidthVariant:"w-5",boxRadiusVariant:"br-3",boxShadowVariant:"shd-3",boxShadowColor:"#ff00007d",boxBorderColor:"#000000",bg:"#9ef1b7",overlayBlur:"5px",overlayColor:"#e4eb8c"}},a=()=>{const[r,o]=u.useState(!1);return e.jsxs(g,{boxDisplay:"flex",style:{justifyContent:"center",margin:"50px auto"},children:[e.jsx(t,{mr:"m-3",onClick:()=>o(!r),children:"Default Dialog"}),e.jsxs(i,{open:r,onOpenChange:o,boxGapVariant:"g-2",children:[e.jsx(l,{placeholder:"Placeholder 1"}),e.jsx(l,{placeholder:"Placeholder 2"}),e.jsx(t,{colorVariant:"error",onClick:()=>o(!1),children:"Close"})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"ExampleBaseDialog"};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    boxGapVariant: 'g-1',
    boxPaddingVariant: 'p-5',
    boxWidthVariant: 'w-5',
    boxRadiusVariant: 'br-3',
    boxShadowVariant: 'shd-3',
    boxShadowColor: '#ff00007d',
    boxBorderColor: '#000000',
    bg: '#9ef1b7',
    overlayBlur: '5px',
    overlayColor: '#e4eb8c'
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,m,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [open2, setOpen2] = useState(false);
  return <BaseBox boxDisplay="flex" style={{
    justifyContent: 'center',
    margin: '50px auto'
  }}>
            <SimpleButton mr={'m-3'} onClick={() => setOpen2(!open2)}>
                Default Dialog
            </SimpleButton>
            <BaseDialog open={open2} onOpenChange={setOpen2} boxGapVariant={'g-2'}>
                <SimpleTextField placeholder={'Placeholder 1'} />
                <SimpleTextField placeholder={'Placeholder 2'} />
                <SimpleButton colorVariant={'error'} onClick={() => setOpen2(false)}>
                    Close
                </SimpleButton>
            </BaseDialog>
        </BaseBox>;
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const D=["Main","ExampleBaseDialog"];export{a as ExampleBaseDialog,n as Main,D as __namedExportsOrder,j as default};
