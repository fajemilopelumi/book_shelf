(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(20),s=n.n(r),c=n(10),o=n(5),i=n(19),l=n(36),u=n.n(l),d=n(37),j=n(4),h=n(2),p=n(6),b=n(7),O=n(9),m=n(8),v=n(22),x=n(11),f=n.n(x);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=f.a.get("/api/books?limit=".concat(e,"&skip=").concat(t,"&order=").concat(n)).then((function(e){return a?[].concat(Object(v.a)(a),Object(v.a)(e.data)):e.data}));return{type:"GET_BOOKS",payload:r}}function g(e){return{type:"ADD_BOOK",payload:f.a.post("/api/book",e).then((function(e){return e.data}))}}function k(e){return{type:"UPDATE_BOOK",payload:f.a.post("/api/book_update",e).then((function(e){return e.data}))}}function _(e){return{type:"DELETE_BOOK",payload:f.a.delete("/api/delete_book?id=".concat(e)).then((function(e){return e.data}))}}function w(e){var t=e.email,n=e.password;return{type:"USER_LOGIN",payload:f.a.post("/api/login",{email:t,password:n}).then((function(e){return e.data}))}}function E(e,t){var n=f.a.post("/api/register",e);return function(e){n.then((function(n){var a=n.data,r=a.success?[].concat(Object(v.a)(t),[a.user]):t,s={success:a.success,users:r};e({type:"USER_REGISTER",payload:s})}))}}var N=n(0);function I(e){return Object(N.jsxs)(c.b,{to:"/books/".concat(e._id),className:"book_item",children:[Object(N.jsx)("div",{className:"book_header",children:Object(N.jsx)("h2",{children:e.name})}),Object(N.jsxs)("div",{className:"book_items",children:[Object(N.jsx)("div",{className:"book_author",children:e.author}),Object(N.jsxs)("div",{className:"book_bubble",children:[Object(N.jsx)("strong",{children:"Price"})," $ ",e.price]}),Object(N.jsxs)("div",{className:"book_bubble",children:[Object(N.jsx)("strong",{children:"Pages"})," ",e.pages]}),Object(N.jsxs)("div",{className:"book_bubble",children:[Object(N.jsx)("strong",{children:"Rating"})," ",e.rating]})]})]})}var S=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).renderItems=function(e){return e.list?e.list.map((function(e){return Object(a.createElement)(I,Object(h.a)(Object(h.a)({},e),{},{key:e._id}))})):null},e.loadmore=function(){var t=e.props.books.list.length;e.props.dispatch(y(3,t,"desc",e.props.books.list))},e}return Object(b.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch(y(3,0,"desc"))}},{key:"render",value:function(){return Object(N.jsxs)("div",{children:[this.renderItems(this.props.books),Object(N.jsx)("div",{className:"loadmore",onClick:this.loadmore,children:"Load More"})]})}}]),n}(a.Component),C=Object(o.b)((function(e){return{books:e.books}}))(S);function R(){return Object(N.jsx)("div",{children:Object(N.jsx)(C,{})})}var A=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderBook=function(e){return e.book?Object(N.jsxs)("div",{className:"br_container",children:[Object(N.jsxs)("div",{className:"br_header",children:[Object(N.jsx)("h2",{children:e.book.name}),Object(N.jsx)("h5",{children:e.book.author}),Object(N.jsxs)("div",{className:"br_reviewer",children:[Object(N.jsx)("span",{children:"Review by:"}),e.reviewer.name,e.book.lastname]})]}),Object(N.jsx)("div",{className:"br_review",children:e.book.review}),Object(N.jsxs)("div",{className:"br_box",children:[Object(N.jsxs)("div",{className:"left",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Pages"})," ",e.book.pages]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Price"})," ",e.book.price]})]}),Object(N.jsxs)("div",{className:"right",children:[Object(N.jsx)("span",{children:"Rating"}),Object(N.jsx)("div",{children:e.book.rating})]})]})]}):null},e}return Object(b.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch(function(e){var t=f.a.get("/api/getBook?id=".concat(e));return function(e){t.then((function(t){var n=t.data;f.a.get("/api/getReviewer?id=".concat(n.ownerId)).then((function(t){var a=t.data;e({type:"GET_BOOK_W_REVIEWER",payload:{book:n,reviewer:a}})}))}))}}(this.props.match.params.id))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_W_REVIEWER",payload:{book:{},reviewer:{}}})}},{key:"render",value:function(){var e=this.props.books;return Object(N.jsx)("div",{children:this.renderBook(e)})}}]),n}(a.Component),P=Object(o.b)((function(e){return{books:e.books}}))(A),B=n(41),T=n(38),U=n.n(T),W=n(39),D=n.n(W);var L=Object(o.b)((function(e){return{user:e.user}}))((function(e){var t=e.user,n=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"file-text-o",text:"My profile",link:"/user",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add Admins",link:"/user/register",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Login",link:"/login",restricted:!1,exclude:!0},{type:"navItem",icon:"file-text-o",text:"My reviews",link:"/user/user-reviews",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add reviews",link:"/user/add",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Logout",link:"/user/logout",restricted:!0}],a=function(e,t){return Object(N.jsx)("div",{className:e.type,children:Object(N.jsxs)(c.b,{to:e.link,children:[Object(N.jsx)(D.a,{name:e.icon}),e.text]})},t)};return Object(N.jsx)("div",{children:t.login?n.map((function(e,n){return t.login.isAuth?e.exclude?null:a(e,n):e.restricted?null:a(e,n)})):null})}));function K(e){return Object(N.jsx)(U.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxwidth:"220px"},children:Object(N.jsx)(L,{})})}var G=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showNav:!1},e.onHideNav=function(){e.setState({showNav:!1})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("header",{children:[Object(N.jsx)("div",{className:"open_nav",children:Object(N.jsx)(B.a,{onClick:function(){return e.setState({showNav:!0})},style:{color:"#ffffff",padding:"10px",cursor:"pointer"}})}),Object(N.jsx)(K,{showNav:this.state.showNav,onHideNav:function(){return e.onHideNav()}}),Object(N.jsx)(c.b,{to:"/",className:"logo",children:"The Book Shelf"})]})}}]),n}(a.Component);function M(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)(G,{}),Object(N.jsx)("div",{children:e.children})]})}var F=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:"",success:!1},e.handleInputEmail=function(t){e.setState({email:t.target.value})},e.handleInputPassword=function(t){e.setState({password:t.target.value})},e.submitForm=function(t){t.preventDefault(),e.props.dispatch(w(e.state))},e}return Object(b.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return Object(N.jsx)("div",{className:"rl_container",children:Object(N.jsxs)("form",{onSubmit:this.submitForm,children:[Object(N.jsx)("h2",{children:"Log in here"}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"email",placeholder:"Enter your mail",value:this.state.email,onChange:this.handleInputEmail})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.handleInputPassword})}),Object(N.jsx)("button",{type:"submit",children:"Log in"}),Object(N.jsx)("div",{className:"error",children:e.login?Object(N.jsx)("div",{children:e.login.message}):null})]})})}}]),n}(a.Component),H=Object(o.b)((function(e){return console.log(e),{user:e.user}}))(F);function V(e){var t=e.user.login;return Object(N.jsxs)("div",{className:"user_container",children:[Object(N.jsx)("div",{className:"avatar",children:Object(N.jsx)("img",{alt:"avatar",src:"/images/avatar.png"})}),Object(N.jsxs)("div",{className:"nfo",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Name:"}),t.name]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Lastname:"}),t.lastname]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Email:"}),t.email]})]})]})}var Y=function(e,t){var n=function(n){Object(O.a)(r,n);var a=Object(m.a)(r);function r(){var e;Object(p.a)(this,r);for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={loading:!0},e}return Object(b.a)(r,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"USER_AUTH",payload:f.a.get("/api/auth").then((function(e){return e.data}))})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/user"):t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?Object(N.jsx)("div",{className:"loader",children:"loading.."}):Object(N.jsx)(e,Object(h.a)(Object(h.a)({},this.props),{},{user:this.props.user}))}}]),r}(a.Component);return Object(o.b)((function(e){return{user:e.user}}))(n)},J=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={formdata:{name:"",author:"",review:"",pages:"",rating:"",price:""}},e.handleInput=function(t,n){var a=Object(h.a)({},e.state.formdata);a[n]=t.target.value,e.setState({formdata:a})},e.showNewBook=function(e){return e.post?Object(N.jsxs)("div",{className:"conf_link",children:["cool !! ",Object(N.jsx)(c.b,{to:"/books/".concat(e.bookId),children:"Click the link to see the post"})]}):null},e.submitForm=function(t){t.preventDefault(),e.props.dispatch(g(Object(h.a)(Object(h.a)({},e.state.formdata),{},{ownerId:e.props.user.login.id})))},e}return Object(b.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_NEWBOOK",payload:{}})}},{key:"render",value:function(){var e=this;return Object(N.jsx)("div",{className:"rl_container article",children:Object(N.jsxs)("form",{onSubmit:this.submitForm,children:[Object(N.jsx)("h2",{children:"Add a review"}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter name",value:this.state.formdata.name,onChange:function(t){return e.handleInput(t,"name")}})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter Author",value:this.state.formdata.author,onChange:function(t){return e.handleInput(t,"author")}})}),Object(N.jsx)("textarea",{value:this.state.formdata.review,onChange:function(t){return e.handleInput(t,"review")}}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"number",placeholder:"Enter pages",value:this.state.formdata.pages,onChange:function(t){return e.handleInput(t,"pages")}})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsxs)("select",{value:this.state.formdata.rating,onChange:function(t){return e.handleInput(t,"rating")},children:[Object(N.jsx)("option",{val:"1",children:"0"}),Object(N.jsx)("option",{val:"2",children:"1"}),Object(N.jsx)("option",{val:"3",children:"2"}),Object(N.jsx)("option",{val:"4",children:"3"}),Object(N.jsx)("option",{val:"5",children:"4"}),Object(N.jsx)("option",{val:"5",children:"5"})]})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"number",placeholder:"Enter Price",value:this.state.formdata.price,onChange:function(t){return e.handleInput(t,"price")}})}),Object(N.jsx)("button",{type:"submit",children:"Add Review"}),this.props.books.newbook?this.showNewBook(this.props.books.newbook):null]})})}}]),n}(a.Component),$=Object(o.b)((function(e){return{books:e.books}}))(J),q=n(40),z=n.n(q),Q=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).showUserPosts=function(e){return e.userPosts?e.userPosts.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(c.b,{to:"/user/edit-post/".concat(e._id),children:e.name})}),Object(N.jsx)("td",{children:e.author}),Object(N.jsx)("td",{children:z()(e.createAt).format("MM/DD/YY")})]},e._id)})):null},e}return Object(b.a)(n,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.user.login.id,{type:"GET_USER_POSTS",payload:f.a.get("/api/user_posts?user=".concat(e)).then((function(e){return e.data}))}))}},{key:"render",value:function(){var e=this.props.user;return console.log(e),Object(N.jsxs)("div",{className:"user_posts",children:[Object(N.jsx)("h4",{children:"Your reviews"}),Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Author"}),Object(N.jsx)("th",{children:"Date"})]})}),Object(N.jsx)("tbody",{children:this.showUserPosts(e)})]})]})}}]),n}(a.Component),X=Object(o.b)((function(e){return{user:e.user}}))(Q),Z=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={formdata:{_id:e.props.match.params.id,name:"",author:"",review:"",pages:"",rating:"",price:""}},e.handleInput=function(t,n){var a=Object(h.a)({},e.state.formdata);a[n]=t.target.value,e.setState({formdata:a})},e.submitForm=function(t){t.preventDefault(),e.props.dispatch(k(e.state.formdata))},e.deletePost=function(){e.props.dispatch(_(e.props.match.params.id))},e.redirectUser=function(){setTimeout((function(){e.props.history.push("/user/user-reviews")}),1e3)},e}return Object(b.a)(n,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.id,{type:"GET_BOOK",payload:f.a.get("/api/getBook?id=".concat(e)).then((function(e){return e.data}))}))}},{key:"componentWillReceiveProps",value:function(e){console.log(e);var t=e.books.book;this.setState({formdata:{_id:t._id,name:t.name,author:t.author,review:t.review,pages:t.pages,reating:t.rating,price:t.price}})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK",payload:{book:null,update:!1,postDeleted:!1}})}},{key:"render",value:function(){var e=this,t=this.props.books;return Object(N.jsxs)("div",{className:"rl_container article",children:[t.update?Object(N.jsxs)("div",{className:"edit_confirm",children:["post updated, ",Object(N.jsx)(c.b,{to:"/books/".concat(t.book._id),children:"Click here to see your post"})]}):null,t.postDeleted?Object(N.jsxs)("div",{className:"red_tag",children:["Post Deleted",this.redirectUser]}):null,Object(N.jsxs)("form",{onSubmit:this.submitForm,children:[Object(N.jsx)("h2",{children:"Edit review"}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter name",value:this.state.formdata.name,onChange:function(t){return e.handleInput(t,"name")}})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter Author",value:this.state.formdata.author,onChange:function(t){return e.handleInput(t,"author")}})}),Object(N.jsx)("textarea",{value:this.state.formdata.review,onChange:function(t){return e.handleInput(t,"review")}}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"number",placeholder:"Enter pages",value:this.state.formdata.pages,onChange:function(t){return e.handleInput(t,"pages")}})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsxs)("select",{value:this.state.formdata.rating,onChange:function(t){return e.handleInput(t,"rating")},children:[Object(N.jsx)("option",{val:"1",children:"1"}),Object(N.jsx)("option",{val:"2",children:"2"}),Object(N.jsx)("option",{val:"3",children:"3"}),Object(N.jsx)("option",{val:"4",children:"4"}),Object(N.jsx)("option",{val:"5",children:"5"})]})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"number",placeholder:"Enter Number",value:this.state.formdata.price,onChange:function(t){return e.handleInput(t,"price")}})}),Object(N.jsx)("button",{type:"submit",children:"Edit Review"}),Object(N.jsx)("div",{type:"submit",className:"delete_post",children:Object(N.jsx)("div",{className:"button",onClick:this.deletePost,children:"Delete Review"})})]})]})}}]),n}(a.PureComponent),ee=Object(o.b)((function(e){return{books:e.books}}))(Z),te=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",lastname:"",email:"",password:"",error:""},e.handleInputEmail=function(t){e.setState({email:t.target.value})},e.handleInputPassword=function(t){e.setState({password:t.target.value})},e.handleInputName=function(t){e.setState({name:t.target.value})},e.handleInputLastname=function(t){e.setState({lastname:t.target.value})},e.submitForm=function(t){t.preventDefault(),e.setState({error:""}),e.props.dispatch(E({email:e.state.email,password:e.state.password,name:e.state.name,lastname:e.state.lastname},e.props.user.users))},e.showUsers=function(e){return e.users?e.users.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{children:e.lastname}),Object(N.jsx)("td",{children:e.email})]},e._id)})):null},e}return Object(b.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"GET_USER",payload:f.a.get("/api/users").then((function(e){return e.data}))})}},{key:"componentWillReceiveProps",value:function(e){!1===e.user.register?this.setState({error:"Error, try again"}):this.setState({name:"",lastname:"",email:"",password:""})}},{key:"render",value:function(){var e=this.props.user;return Object(N.jsxs)("div",{className:"rl_container",children:[Object(N.jsxs)("form",{onSubmit:this.submitForm,children:[Object(N.jsx)("h2",{children:"Add user"}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter name",value:this.state.name,onChange:this.handleInputName})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"text",placeholder:"Enter lastname",value:this.state.lastname,onChange:this.handleInputLastname})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.handleInputEmail})}),Object(N.jsx)("div",{className:"form_element",children:Object(N.jsx)("input",{type:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputPassword})}),Object(N.jsx)("button",{type:"submit",children:"Add user"}),Object(N.jsx)("div",{className:"error",children:this.state.error})]}),Object(N.jsxs)("div",{className:"current_users",children:[Object(N.jsx)("h4",{children:"Current users:"}),Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Lastname"}),Object(N.jsx)("th",{children:"Email"})]})}),Object(N.jsx)("tbody",{children:this.showUsers(e)})]})]})]})}}]),n}(a.PureComponent),ne=Object(o.b)((function(e){return{user:e.user}}))(te);function ae(e){console.log(e);f.a.get("/api/logout").then((function(t){setTimeout((function(){e.history.push("/")}),2e3)}));return Object(N.jsx)("div",{className:"logout_container",children:Object(N.jsx)("h2",{children:"Sorry to see you go"})})}function re(){return Object(N.jsx)(M,{children:Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:"/",exact:!0,component:Y(R,null)}),Object(N.jsx)(j.a,{path:"/login",exact:!0,component:Y(H,!1)}),Object(N.jsx)(j.a,{path:"/user",exact:!0,component:Y(V,!0)}),Object(N.jsx)(j.a,{path:"/user/logout",exact:!0,component:Y(ae,!0)}),Object(N.jsx)(j.a,{path:"/user/user-reviews",exact:!0,component:Y(X)}),Object(N.jsx)(j.a,{path:"/user/add",exact:!0,component:Y($,!0)}),Object(N.jsx)(j.a,{path:"/user/register",exact:!0,component:Y(ne,!0)}),Object(N.jsx)(j.a,{path:"/user/edit-post/:id",exact:!0,component:Y(ee,null)}),Object(N.jsx)(j.a,{path:"/books/:id",exact:!0,component:Y(P,null)})]})})}var se=Object(i.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return Object(h.a)(Object(h.a)({},e),{},{list:t.payload});case"GET_BOOK":return Object(h.a)(Object(h.a)({},e),{},{book:t.payload});case"GET_BOOK_W_REVIEWER":case"CLEAR_BOOK_W_REVIEWER":return Object(h.a)(Object(h.a)({},e),{},{book:t.payload.book,reviewer:t.payload.reviewer});case"ADD_BOOK":case"CLEAR_NEWBOOK":return Object(h.a)(Object(h.a)({},e),{},{newbook:t.payload});case"UPDATE_BOOK":return Object(h.a)(Object(h.a)({},e),{},{update:t.payload.success,book:t.payload.doc});case"DELETE_BOOK":return Object(h.a)(Object(h.a)({},e),{},{postDeleted:t.payload});case"CLEAR_BOOK":return Object(h.a)(Object(h.a)({},e),{},{update:t.payload.update,book:t.payload.book,postDeleted:t.payload.postDeleted});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":return Object(h.a)(Object(h.a)({},e),{},{login:t.payload});case"GET_USER_POSTS":return Object(h.a)(Object(h.a)({},e),{},{userPosts:t.payload});case"GET_USER":return Object(h.a)(Object(h.a)({},e),{},{users:t.payload});case"USER_REGISTER":return Object(h.a)(Object(h.a)({},e),{},{register:t.payload.success,users:t.payload.users});default:return e}}}),ce=Object(i.a)(u.a,d.a)(i.c);s.a.render(Object(N.jsx)(o.a,{store:ce(se),children:Object(N.jsx)(c.a,{children:Object(N.jsx)(re,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ce00daee.chunk.js.map