(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{252:function(t,s,e){"use strict";e.r(s);var i={name:"AboutLayout",computed:{vssue(){return!1!==this.$themeConfig.comments&&!1!==this.$frontmatter.vssue&&(this.vssueTitle||this.vssueId)},vssueTitle(){return this.$frontmatter["vssue-title"]||this.$frontmatter.title||void 0},vssueId(){return this.$frontmatter["vssue-id"]||void 0}}},u=e(0),n=Object(u.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"custom-layout"},[t("div",{staticClass:"main-div"},[t("Content",{staticClass:"content"})],1),this._v(" "),this.vssue?t("div",{staticClass:"main-div",attrs:{id:"post-comments"}},[t("Vssue",{attrs:{title:this.vssueTitle,"issue-id":this.vssueId}})],1):this._e()])}),[],!1,null,null,null);s.default=n.exports}}]);