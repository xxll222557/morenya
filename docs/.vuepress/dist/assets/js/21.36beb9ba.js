(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{207:function(e,t,a){},211:function(e,t,a){"use strict";a(207)},214:function(e,t,a){"use strict";a.r(t);var s={name:"Pagination",props:{value:{type:Number,default:1,validator:e=>e>0},total:{type:Number,required:!0,validator:e=>e>0},eachSide:{type:Number,default:1,validator:e=>e>=0}},computed:{firstPage:()=>1,lastPage(){return this.total},onFirstPage(){return this.currentPage===this.firstPage},onLastPage(){return this.currentPage===this.lastPage},currentPage(){return this.value},paginators(){const e=[];if(this.lastPage<2*this.eachSide+4)for(let t=this.firstPage;t<this.lastPage+1;++t)e.push({value:t,enable:!0});else if(this.currentPage-this.firstPage<this.eachSide+2){for(let t=this.firstPage;t<Math.max(2*this.eachSide+1,this.currentPage+this.eachSide+1);++t)e.push({value:t,enable:!0});e.push({value:"...",enable:!1}),e.push({value:this.lastPage,enable:!0})}else if(this.lastPage-this.currentPage<this.eachSide+2){e.push({value:this.firstPage,enable:!0}),e.push({value:"...",enable:!1});for(let t=Math.min(this.lastPage-2*this.eachSide+1,this.currentPage-this.eachSide);t<this.lastPage+1;++t)e.push({value:t,enable:!0})}else{e.push({value:this.firstPage,enable:!0}),e.push({value:"...",enable:!1});for(let t=this.currentPage-this.eachSide;t<this.currentPage+this.eachSide+1;++t)e.push({value:t,enable:!0});e.push({value:"...",enable:!1}),e.push({value:this.lastPage,enable:!0})}return e}},methods:{nextPage(){this.setPage(this.currentPage+1)},prevPage(){this.setPage(this.currentPage-1)},setPage(e){e<=this.lastPage&&e>=this.firstPage&&(this.$emit("input",e),this.$nextTick(()=>{this.$vuepress.zooming.updateDelay()}))}}},i=(a(211),a(0)),l=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("ul",{staticClass:"pagination"},[t("li",{staticClass:"page-item",class:{disabled:e.onFirstPage},on:{click:function(t){return t.preventDefault(),e.prevPage.apply(null,arguments)}}},[t("span",[e._v("«")])]),e._v(" "),e._l(e.paginators,(function(a){return t("li",{key:a.value,staticClass:"page-item",class:{active:a.value===e.currentPage,disabled:!a.enable},on:{click:function(t){return t.preventDefault(),e.setPage(a.value)}}},[t("span",[e._v(e._s(a.value))])])})),e._v(" "),t("li",{staticClass:"page-item",class:{disabled:e.onLastPage},on:{click:function(t){return t.preventDefault(),e.nextPage.apply(null,arguments)}}},[t("span",[e._v("»")])])],2)}),[],!1,null,"cc108b10",null);t.default=l.exports}}]);