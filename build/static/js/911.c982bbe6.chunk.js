"use strict";(self.webpackChunkexploding_kittens=self.webpackChunkexploding_kittens||[]).push([[911],{2911:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(4942),c=n(2982),i=n(1413),a=n(885),d=n(2791),l=n(3014),o=n(3108),u=n(1900),s=n(2959),f=n(68),p=n(1110),m=n(184),v=function(e){var t=e.isOpen,n=e.handleClose,v=e.id,h=e.uuid,k=e.playerCards,x=e.selectedCards,Z=e.selectedPlayerUid,_=(0,d.useState)(null),y=(0,a.Z)(_,2),C=y[0],b=y[1],j=(0,d.useMemo)((function(){return k[Z]&&(0,s.Nu)(k[Z])}),[Z,k]);return t?(0,m.jsx)(f.Z,{wrapperId:"react-portal-card-selection-modal",children:(0,m.jsx)("div",{className:"card-selection-modal",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsx)("div",{className:"content_block",children:j.map((function(e){return(0,m.jsx)("div",{className:C===e?"selected":"",children:(0,m.jsx)("img",{src:u.yw,alt:"",width:200,height:300,onClick:function(){return function(e){b(e)}(e)}})},e)}))}),(0,m.jsx)("div",{className:"btn_block",children:(0,m.jsx)(p.Z,{text:C?"Go":"Exit",onClick:function(){if(C&&Z){var e,t=k[Z].filter((function(e){return e!==C})),a=k[h].filter((function(e){return!x.includes(e)}));(0,l.r7)((0,l.JU)(o.db,"game_rooms_kitten",v),{player_cards:(0,i.Z)((0,i.Z)({},k),{},(e={},(0,r.Z)(e,Z,t),(0,r.Z)(e,h,[].concat((0,c.Z)(a),[C])),e)),out_card_deck:l.vr.apply(void 0,(0,c.Z)(x)),game_moves:(0,l.vr)({uid:h,cardType:"combo_2",selectedCard:C,selectedPlayerUid:Z})})}n()}})})]})})}):null}},68:function(e,t,n){var r=n(885),c=n(2791),i=n(4164);t.Z=function(e){var t=e.children,n=e.wrapperId,a=void 0===n?"react-portal-wrapper":n,d=(0,c.useState)(null),l=(0,r.Z)(d,2),o=l[0],u=l[1];if((0,c.useLayoutEffect)((function(){var e=document.getElementById(a),t=!1;return e||(t=!0,e=function(e){var t=document.createElement("div");return t.setAttribute("id",e),document.body.appendChild(t),t}(a)),u(e),function(){t&&e.parentNode&&e.parentNode.removeChild(e)}}),[a]),null!==o)return(0,i.createPortal)(t,o)}}}]);
//# sourceMappingURL=911.c982bbe6.chunk.js.map