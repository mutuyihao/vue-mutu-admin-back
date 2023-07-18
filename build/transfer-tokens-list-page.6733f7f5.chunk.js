"use strict";(self.webpackChunkvue_admin_back=self.webpackChunkvue_admin_back||[]).push([[9600],{56856:(H,C,n)=>{n.d(C,{Z:()=>v});var e=n(67294),a=n(49656),A=n(45697),t=n.n(A),s=n(28702),d=n(95489),b=n(41363),D=n(97132);const k=({tokenName:o,onClickDelete:c,tokenType:E})=>{const{formatMessage:l}=(0,D.useIntl)(),{trackUsage:f}=(0,d.useTracking)(),[u,T]=(0,e.useState)(!1),h=()=>{T(!1),f("willDeleteToken",{tokenType:E}),c()};return e.createElement(s.Box,{paddingLeft:1,onClick:p=>p.stopPropagation()},e.createElement(s.IconButton,{onClick:()=>{T(!0)},label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${o}`}),name:"delete",noBorder:!0,icon:e.createElement(b.Trash,null)}),e.createElement(d.ConfirmDialog,{onToggleDialog:()=>T(!1),onConfirm:h,isOpen:u}))};k.propTypes={tokenName:t().string.isRequired,onClickDelete:t().func.isRequired,tokenType:t().string.isRequired};const L=k;var Z=n(27821);const w={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},U=(0,Z.default)(d.Link)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,g=({tokenName:o,tokenId:c,buttonType:E,children:l})=>{const{formatMessage:f}=(0,D.useIntl)(),{location:{pathname:u}}=(0,a.useHistory)();return e.createElement(U,{to:`${u}/${c}`,title:f(w[E],{target:o})},l)};g.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired,buttonType:t().string,children:t().node.isRequired},g.defaultProps={buttonType:"edit"};const I=g,S=({tokenName:o,tokenId:c})=>e.createElement(I,{tokenName:o,tokenId:c},e.createElement(b.Pencil,null));S.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const Q=S,M=({tokenName:o,tokenId:c})=>e.createElement(I,{tokenName:o,tokenId:c,buttonType:"read"},e.createElement(b.Eye,null));M.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const V=M,m=({permissions:o,headers:c,contentType:E,isLoading:l,tokens:f,onConfirmDelete:u,tokenType:T})=>{const{canDelete:h,canUpdate:p,canRead:N}=o,P=h||p||N,[{query:y}]=(0,d.useQueryParams)(),[,R]=y?y.sort.split(":"):"ASC",{push:F,location:{pathname:B}}=(0,a.useHistory)(),{trackUsage:O}=(0,d.useTracking)(),$=f.sort((r,x)=>{const i=r.name.localeCompare(x.name);return R==="DESC"?-i:i});return e.createElement(d.DynamicTable,{headers:c,contentType:E,rows:f,withBulkActions:P,isLoading:l,onConfirmDelete:u},e.createElement(s.Tbody,null,$.map(r=>e.createElement(s.Tr,{key:r.id,...(0,d.onRowClick)({fn(){O("willEditTokenFromList",{tokenType:T}),F(`${B}/${r.id}`)},condition:p})},e.createElement(s.Td,null,e.createElement(s.Typography,{textColor:"neutral800",fontWeight:"bold"},r.name)),e.createElement(s.Td,{maxWidth:(0,d.pxToRem)(250)},e.createElement(s.Typography,{textColor:"neutral800",ellipsis:!0},r.description)),e.createElement(s.Td,null,e.createElement(s.Typography,{textColor:"neutral800"},e.createElement(d.RelativeTime,{timestamp:new Date(r.createdAt)}))),e.createElement(s.Td,null,r.lastUsedAt&&e.createElement(s.Typography,{textColor:"neutral800"},e.createElement(d.RelativeTime,{timestamp:new Date(r.lastUsedAt)}))),P&&e.createElement(s.Td,null,e.createElement(s.Flex,{justifyContent:"end"},p&&e.createElement(Q,{tokenName:r.name,tokenId:r.id}),!p&&N&&e.createElement(V,{tokenName:r.name,tokenId:r.id}),h&&e.createElement(L,{tokenName:r.name,onClickDelete:()=>u(r.id),tokenType:T})))))))};m.propTypes={tokens:t().array,permissions:t().shape({canRead:t().bool,canDelete:t().bool,canUpdate:t().bool}).isRequired,headers:t().arrayOf(t().shape({cellFormatter:t().func,key:t().string.isRequired,metadatas:t().shape({label:t().string.isRequired,sortable:t().bool}).isRequired,name:t().string.isRequired})),contentType:t().string.isRequired,isLoading:t().bool,onConfirmDelete:t().func,tokenType:t().string.isRequired},m.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const v=m},47670:(H,C,n)=>{n.d(C,{Z:()=>e,f:()=>a});const e="api-token",a="transfer-token"},70798:(H,C,n)=>{n.r(C),n.d(C,{default:()=>M});var e=n(67294),a=n(95489),A=n(87751),t=n(97132),s=n(23724),d=n(49656),b=n(80129),D=n.n(b),k=n(28702),L=n(41363);const w=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var U=n(56856),g=n(47670);const S=()=>{(0,a.useFocusWhenNavigate)();const V=(0,s.useQueryClient)(),{formatMessage:m}=(0,t.useIntl)(),v=(0,a.useNotification)(),{allowedActions:{canCreate:o,canDelete:c,canUpdate:E,canRead:l}}=(0,a.useRBAC)(A.Z.settings["transfer-tokens"]),{push:f}=(0,d.useHistory)(),{trackUsage:u}=(0,a.useTracking)(),{startSection:T}=(0,a.useGuidedTour)(),h=(0,e.useRef)(T),{get:p,del:N}=(0,a.useFetchClient)();(0,e.useEffect)(()=>{h.current&&h.current("transferTokens")},[]),(0,e.useEffect)(()=>{f({search:D().stringify({sort:"name:ASC"},{encode:!1})})},[f]);const P=w.map(i=>({...i,metadatas:{...i.metadatas,label:m(i.metadatas.label)}})),{data:y,status:R,isFetching:F}=(0,s.useQuery)(["transfer-tokens"],async()=>{u("willAccessTokenList",{tokenType:g.f});const{data:{data:i}}=await p("/admin/transfer/tokens");return u("didAccessTokenList",{number:i.length,tokenType:g.f}),i},{enabled:l,onError(){v({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),B=l&&(R!=="success"&&R!=="error"||R==="success"&&F),O=(0,s.useMutation)(async i=>{await N(`/admin/transfer/tokens/${i}`)},{async onSuccess(){await V.invalidateQueries(["transfer-tokens"])},onError(i){i?.response?.data?.data?v({type:"warning",message:i.response.data.data}):v({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),$=l&&y,r=l&&!y&&!o,x=l&&!y&&o;return e.createElement(k.Main,{"aria-busy":B},e.createElement(a.SettingsPageTitle,{name:"Transfer Tokens"}),e.createElement(k.HeaderLayout,{title:m({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:m({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:o?e.createElement(a.LinkButton,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(L.Plus,null),size:"S",onClick:()=>u("willAddTokenFromList",{tokenType:g.f}),to:"/settings/transfer-tokens/create"},m({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(k.ContentLayout,null,!l&&e.createElement(a.NoPermissions,null),$&&e.createElement(U.Z,{permissions:{canRead:l,canDelete:c,canUpdate:E},headers:P,contentType:"trasfer-tokens",rows:y,isLoading:B,onConfirmDelete:i=>O.mutateAsync(i),tokens:y,tokenType:g.f}),x&&e.createElement(a.NoContent,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(k.Button,{variant:"secondary",startIcon:e.createElement(L.Plus,null)},m({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),r&&e.createElement(a.NoContent,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},M=()=>e.createElement(a.CheckPagePermissions,{permissions:A.Z.settings["transfer-tokens"].main},e.createElement(S,null))}}]);
