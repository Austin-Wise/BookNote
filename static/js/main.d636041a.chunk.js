(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),r=a(61),c=a(63),i=a(62),s=a(6),u=a(7),m=a(9),d=a(8),h=a(10),v=a(22),f=a.n(v),p=a(23),b=a.n(p),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={term:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:""},o.a.createElement("input",{id:"searchbar",value:this.state.term,onChange:function(t){return e.onInputChange(t.target.value)},placeholder:"Search"}))}},{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onSearchTermChange(e)}}]),t}(o.a.Component),k=(a(50),function(e){var t=e.book,a=e.onBookSelect,n=(!!t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.thumbnail,t.volumeInfo.description);return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-head"},o.a.createElement("h3",null,t.volumeInfo.title.replace(/^(.{39}[^\s]*).*/,"$1")),o.a.createElement("h4",null,t.volumeInfo.authors?t.volumeInfo.authors:"[No Author Data Available]")),o.a.createElement("div",{className:"card-content"},o.a.createElement("p",null,n?n.replace(/^(.{200}[^\s]*).*/,"$1"):"[No Description Data Available]"),o.a.createElement("button",{onClick:function(){return a(t)}},"More Info")))}),g=(a(51),function(e){var t=e.book,a=e.onBookSelect;return t?o.a.createElement("div",{className:"detail-view"},o.a.createElement("div",{className:"detail-head"},o.a.createElement("h3",null,t.volumeInfo.title.replace(/^(.{39}[^\s]*).*/,"$1")),o.a.createElement("div",null,o.a.createElement("p",{className:"isbn"},"ISBN: ",t.volumeInfo.industryIdentifiers[0].identifier))),o.a.createElement("div",{className:"detail-d"},o.a.createElement("div",{className:"detail-body"},o.a.createElement("h4",{className:"detail-author"},t.volumeInfo.authors?t.volumeInfo.authors:"[No Author Data]"),o.a.createElement("p",{className:"detail-category"},t.volumeInfo.categories?t.volumeInfo.categories:"[No Category Data]"),o.a.createElement("p",{className:"detail-pages"},t.volumeInfo.pageCount?t.volumeInfo.pageCount+" Pages":"[No Page Count Data]"),o.a.createElement("p",{className:"detail-publisher"},t.volumeInfo.publisher&&t.volumeInfo.publishedDate?"Publisher: "+t.volumeInfo.publisher+", "+t.volumeInfo.publishedDate:"[No Publisher Data]"),o.a.createElement("p",{className:"detail-description"},t.volumeInfo.description?t.volumeInfo.description:"[No Description Data]")),o.a.createElement("div",{className:"detail-options"},t.volumeInfo.previewLink?o.a.createElement("a",{className:"button-google",href:t.volumeInfo.previewLink,target:"_blank"},"View in Books"):"",o.a.createElement("button",{className:"button-exit",onClick:function(){return a(null)}},"Done")))):o.a.createElement("div",{id:"no_book"})}),N=(a(52),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={books:e.books,selectedBook:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.books.map(function(t){return o.a.createElement(k,{onBookSelect:function(t){return e.setState({selectedBook:t})},key:t.etag,book:t})});return o.a.createElement("div",{className:"article-container"},o.a.createElement(g,{onBookSelect:function(t){return e.setState({selectedBook:t})},book:this.state.selectedBook}),t)}}]),t}(o.a.Component)),I=(a(53),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={book:[],isLoaded:!0,term:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"search",value:function(e){var t=this;this.setState({isLoaded:!1}),b.a.get("https://www.googleapis.com/books/v1/volumes?&maxResults=8&q="+e+"&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA").then(function(e){var a=e.data.items&&e.data.items.length?e.data.items:[];console.log(a),t.setState({book:a}),t.setState({isLoaded:!0})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=f.a.debounce(function(t){e.search(t)},1e3);return this.state.isLoaded?o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(E,{onSearchTermChange:t}),o.a.createElement("h1",{id:"logo"},"BookNote")),o.a.createElement("div",{className:"container"},o.a.createElement(N,{books:this.state.book}))):o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(E,{onSearchTermChange:t}),o.a.createElement("h1",{id:"logo"},"BookNote")),o.a.createElement("div",{className:"appLoading"},o.a.createElement("h2",null,"Loading...")))}}]),t}(o.a.Component)),j=function(){return o.a.createElement("p",null,"Page Not Found")},S=function(){return o.a.createElement(r.a,null,o.a.createElement(c.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:I}),o.a.createElement(i.a,{component:j})))};Object(l.render)(o.a.createElement(S,null),document.querySelector("#main"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d636041a.chunk.js.map