webpackJsonp([0],[,function(t,e,a){a(29);var s=a(0)(a(15),a(52),"data-v-a9d33e9c",null);t.exports=s.exports},,function(t,e,a){"use strict";var s=a(2),i=a(53),n=a(40),r=a.n(n),o=a(38),c=a.n(o),l=a(36),v=a.n(l),d=a(34),u=a.n(d),p=a(37),_=a.n(p),m=a(35),g=a.n(m),h=a(39),f=a.n(h),C=a(31),w=a.n(C),b=a(32),y=a.n(b);s.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/project/waterfront-botanical-gardens",name:"Projects: Waterfront Botanical Gardens",component:_.a},{path:"/project/garage-bar",name:"Projects: Garage Bar",component:g.a},{path:"/project/21c",name:"Projects: 21c",component:u.a},{path:"/project/psa",name:"Projects: PSA",component:v.a},{path:"/projects",name:"Projects",component:c.a},{path:"/services",name:"Services",component:f.a},{path:"/company",name:"Company",component:w.a},{path:"/contact",name:"contact",component:y.a}]})},function(t,e,a){a(18);var s=a(0)(a(5),a(41),null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(33),i=a.n(s),n=a(1),r=a.n(n);e.default={name:"app",components:{Navbar:i.a,Sitefooter:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"company",components:{},data:function(){return{page_title:"Company",feature_image_filename:"/static/company-large.jpg"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact",data:function(){return{msg:"contact"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(30),i=a.n(s);e.default={name:"navbar",data:function(){return{active:!1,flyout:!1,scrolled:!1,links:[{title:"Home",url:"/",active:!1},{title:"Projects",url:"/projects",active:!1},{title:"Services",url:"/services",active:!1},{title:"Company",url:"/company",active:!1},{title:"Contact",url:"/contact",active:!1}],animQueue:"custom"}},methods:{endNav:function(t){this.active=!1;for(var e=0;e<this.links.length;e++)this.links[e].active=!1},mouseover:function(t){for(var e=0;e<this.links.length;e++)this.links[e].title==t.target.innerHTML&&(this.links[e].active=!0)},enter:function(t,e){var a=this.$el.querySelector(".active")||this.$el.querySelector(".navbar li:first-child");if(a){var s=a.offsetLeft+16;i()(t,{left:s+"px"},{queue:this.animQueue,complete:e}),i.a.Utilities.dequeue(t,this.animQueue)}},toggleFlyout:function(t){this.flyout=!this.flyout},closeFlyout:function(t){console.log("hello"),this.flyout=!1},handleScroll:function(){this.scrolled=window.scrollY>50}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a.n(s);e.default={name:"Project21c",components:{Sitefooter:i.a},data:function(){return{page_title:"Projects: 21c"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a.n(s);e.default={name:"ProjectGarage",components:{Sitefooter:i.a},data:function(){return{page_title:"Projects: Garage Bar"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ProjectPSA",components:{},data:function(){return{page_title:"Projects"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a.n(s);e.default={name:"ProjectWBG",components:{Sitefooter:i.a},data:function(){return{page_title:"Projects: Waterfront Botanical Gardens"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"projects",components:{},data:function(){return{page_title:"Projects",projects:[{verb:"Re-inventing",title:"PSA Airlines",url:"/project/psa",feature_image_filename:"/static/project-psa-feature.jpg",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},{verb:"Growing to scale",title:"21c Museum Hotels",url:"/project/21c",feature_image_filename:"/static/project-21c-feature.jpg",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},{verb:"Introducing",title:"Waterfront Botanical Gardens",url:"/project/waterfront-botanical-gardens",feature_image_filename:"/static/project-wbg-feature.jpg",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},{verb:"Envisioning",title:"Garage Bar",url:"/project/garage-bar",feature_image_filename:"/static/project-garage-feature.jpg",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},{verb:"Visualizing data with",title:"The Hub",url:"/projects/psa-airlines",feature_image_filename:"/static/fpo_large.png",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},{verb:"Envisioning",title:"Garage Bar",url:"/projects/psa-airlines",feature_image_filename:"/static/fpo_large.png",excerpt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"services",components:{},data:function(){return{page_title:"Services",feature_image_filename:""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sitefooter",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",components:{},data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),i=a(4),n=a.n(i),r=a(3);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(21);var s=a(0)(a(6),a(44),null,null);t.exports=s.exports},function(t,e,a){a(25);var s=a(0)(a(7),a(48),null,null);t.exports=s.exports},function(t,e,a){a(23);var s=a(0)(a(8),a(46),null,null);t.exports=s.exports},function(t,e,a){a(26);var s=a(0)(a(9),a(49),"data-v-4d1414db",null);t.exports=s.exports},function(t,e,a){a(20);var s=a(0)(a(10),a(43),"data-v-10401fc0",null);t.exports=s.exports},function(t,e,a){a(28);var s=a(0)(a(11),a(51),"data-v-8f96a716",null);t.exports=s.exports},function(t,e,a){a(19);var s=a(0)(a(12),a(42),"data-v-0dd275b3",null);t.exports=s.exports},function(t,e,a){a(27);var s=a(0)(a(13),a(50),"data-v-4dfa078a",null);t.exports=s.exports},function(t,e,a){a(22);var s=a(0)(a(14),a(45),null,null);t.exports=s.exports},function(t,e,a){a(24);var s=a(0)(a(16),a(47),"data-v-3b6f7d62",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:this.$route.name,attrs:{id:"app"}},[a("navbar"),t._v(" "),a("div",{staticClass:"page-content"},[a("transition",{attrs:{name:"custom"}},[a("router-view")],1)],1),t._v(" "),a("sitefooter")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects detail"},[a("header",{staticClass:"wrapper"},[a("h1",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),t._m(0),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/project-wbg-feature.jpg"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/fpo_large.png"}}),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("sitefooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h2",{staticClass:"project_title"},[a("span",[t._v("Introducing")]),t._v(" Waterfront Botanical Gardens")]),t._v(" "),a("p",{staticClass:"intro"},[t._v("Create and introduce new brand that reflects community, motivates donors, and can grow as location is built out. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper text-center"},[a("h3",[t._v("Communicating a Vision with a Brand")]),t._v(" "),a("p",[t._v("Talk about how WBG doesn’t exist yet, so creating a shared vision and brand to rally behind is critical to motivating donors and inspiring the community. Architects led the charge, we played off their vision to arrive at the mark, which represents both local plant goldenrod and an aerial view of the future gardens themselves. Got input from community on naming, validating assumptions and testing feasability through surveys, competitive research… ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-wbg-brand-2.jpg"}})]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-wbg-brand-1.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Providing tools for growth")]),t._v(" "),a("p",[t._v("How we provided digital tools to support business processes - donations collection, memberships, rsvps, etc.  isicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Knowing fundraising goals change, and need to accomodate different phases of development.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/fpo_large.png"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h3",[t._v("Services")]),t._v(" "),a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Brand Strategy")]),t._v(" "),a("li",[t._v("Naming, Logo and Identity System Design")])])]),t._v(" "),a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Print Collateral Design")]),t._v(" "),a("li",[t._v("Website Design & Development")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper project-navigation"},[a("a",{staticClass:"btn prev-btn",attrs:{href:""}},[a("span",[t._v("Previous")])]),t._v(" "),a("a",{staticClass:"btn next-btn",attrs:{href:""}},[a("span",[t._v("Next")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects detail"},[a("header",{staticClass:"wrapper"},[a("h1",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),t._m(0),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/project-garage-feature.jpg"}}),t._v(" "),t._m(1),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/fpo_large.png"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("sitefooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h2",{staticClass:"project_title"},[a("span",[t._v("Sharing a Vision")]),t._v(" Garage Bar")]),t._v(" "),a("p",{staticClass:"intro"},[t._v("Working from vision of chef and owners  – how to bring a large team (inc. interior arch., architects, owners, designers, photographers, etc) together to create a cohesive brand..")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Envisioning a brand with an inspired team")]),t._v(" "),a("p",[t._v("Talk about brand id workshop process, PBR, discussions… how we got opionated people to rally around an identity and build it collaboratively from there. Lorme ipsum dolor sit amet consecteur ipsum dolor.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-garage-sign.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Local Flavor")]),t._v(" "),a("p",[t._v("Talk about bringing history, local influence to identity design. How we did research to understand audience(s) and created a design to resonate with them. ")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-garage-coaster.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("An analog brand in a digital world")]),t._v(" "),a("p",[t._v("Talk about how digital drives revenue for restaurants now, and how we made the digital artifacts express the brand and appeal to diners. ")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/fpo_large.png"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h3",[t._v("Services")]),t._v(" "),a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Brand Strategy")]),t._v(" "),a("li",[t._v("Logo and Identity System Design")]),t._v(" "),a("li",[t._v("Advertising")])])]),t._v(" "),a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Print Collateral Design")]),t._v(" "),a("li",[t._v("Signage")]),t._v(" "),a("li",[t._v("Website Design & Development")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper project-navigation"},[a("a",{staticClass:"btn prev-btn",attrs:{href:""}},[a("span",[t._v("Previous")])]),t._v(" "),a("a",{staticClass:"btn next-btn",attrs:{href:""}},[a("span",[t._v("Next")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company"},[a("header",{staticClass:"wrapper"},[a("h2",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),a("img",{staticClass:"feature",attrs:{src:t.feature_image_filename}}),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"wrapper"},[a("header",{staticClass:"fadein"},[a("h2",{staticClass:"intro"},[t._v("We’re a team of designers and developers who help clients use design and technology to meet business challenges.")])]),t._v(" "),a("section",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("We speak digital... and analog.")]),t._v(" "),a("p",[t._v("Our team understands that successful brands communicate consistently across all channels – from print to digital to environmental experiences. As a cross-disciplinary team, we help bridge the gap between channels to deliver a cohesive, compelling experience for your customers. ")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/company-small-1.jpg"}})])]),t._v(" "),a("section",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Creative collaboration is key.")]),t._v(" "),a("p",[t._v("Our creatives work closely with clients to create design-driven solutions that address branding, marketing and operational needs. There are no account managers or sales reps here – just an agile team of designers and developers who are dedicated to your project.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/company-small-1.jpg"}})])]),t._v(" "),a("section",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Experience counts.")]),t._v(" "),a("p",[t._v("Relay may be the new kid on the block, but the team behind Relay has been in the industry for a good while. With over 20 years of experience, our team understands that although design trends come and go, the principles of good design are timeless. We try to reflect those principles in every project.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/company-small-1.jpg"}})])]),t._v(" "),a("h2",[t._v("The Team")]),t._v(" "),a("section",{staticClass:"row flex-grid"},[a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-brian.jpg"}}),t._v(" "),a("h4",[t._v("Brian Johnson")]),t._v(" "),a("p",[t._v("Designer / Operations")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.instagram.com/pokehill/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/brianatmindsalt/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_linkedin.svg",alt:"LinkedIn"}})])])])]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-drew.jpg"}}),t._v(" "),a("h4",[t._v("Drew McChesney")]),t._v(" "),a("p",[t._v("Strategy / Operations")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.instagram.com/dlmcchesney/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/mcchesney",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_twitter.svg",alt:"Twitter"}})])])])]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-mike.jpg"}}),t._v(" "),a("h4",[t._v("Mike Casto")]),t._v(" "),a("p",[t._v("Designer")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/mike-casto-7661817/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_linkedin.svg",alt:"LinkedIn"}})])])])]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-ashley.jpg"}}),t._v(" "),a("h4",[t._v("Ashley Revlett")]),t._v(" "),a("p",[t._v("Designer / Developer")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.instagram.com/backlashblues/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/ashley-revlett-40a96917/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_linkedin.svg",alt:"LinkedIn"}})])])])]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-lauren.jpg"}}),t._v(" "),a("h4",[t._v("Lauren Graehler")]),t._v(" "),a("p",[t._v("Designer")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.instagram.com/lagraeh/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])])])]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/company-headshot-aaron.jpg"}}),t._v(" "),a("h4",[t._v("Aaron Fautz")]),t._v(" "),a("p",[t._v("Developer")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"https://www.instagram.com/corpsegrindersneck/",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"services"},[a("header",{staticClass:"wrapper"},[a("h2",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"wrapper"},[a("header",[a("h1",[t._v("Relay designs and builds the brands, digital interactions, and physical spaces that shape how people experience your company. ")]),t._v(" "),a("h2",[t._v("We are focused on the total experience people have with your company, from when they first search for your product, to when they rave about it to their friends.")])]),t._v(" "),a("section",{staticClass:"service"},[a("header",[t._v("Experience Design")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!")]),t._v(" "),a("ul",[a("li",[t._v("Consulting")]),t._v(" "),a("li",[t._v("Customer Research")])])]),t._v(" "),a("section",{staticClass:"service"},[a("header",[t._v("Brand Development")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!")]),t._v(" "),a("ul",[a("li",[t._v("Naming")]),t._v(" "),a("li",[t._v("Brand Strategy")]),t._v(" "),a("li",[t._v("Identity")])])]),t._v(" "),a("section",{staticClass:"service"},[a("header",[t._v("Product, Service, and Space Design")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!")]),t._v(" "),a("ul",[a("li",[t._v("Interaction Design")]),t._v(" "),a("li",[t._v("Mobile & Web Application Development")]),t._v(" "),a("li",[t._v("Packaging")]),t._v(" "),a("li",[t._v("Art Direction")]),t._v(" "),a("li",[t._v("UI/UX Design")]),t._v(" "),a("li",[t._v("Physical Environments and Exhibitions")])])]),t._v(" "),a("section",{staticClass:"work-with-us"},[a("p",[t._v("We work with forward-thinking companies of all sizes, in all stages.")]),t._v(" "),a("p",[t._v("We partner with entrepreneurs to launch new companies, acting as the design and technology team, to help design and build initial offerings and support operations until an internal team is ready.")]),t._v(" "),a("p",[t._v("We work with growing brands, addressing challenges of scale as the number of customers, employees, and vendors increase dramatically. How do you maintain a consistent brand? How do you visualize the ever-growing stream of data? How do you communicate with a decentralized team? We work with you to identify the biggest pain points and help design tools and systems to manage growth.  ")]),t._v(" "),a("p",[t._v("We work with established brands to address new opportunities with a fresh perspective. Test new ideas rapidly, be a bridge between departmental silos, connect with customers in new markets or verticals - our team can help spur innovation and growth within your organization.")])]),t._v(" "),a("section",{staticClass:"client-list"},[t._v("\n      [client list]\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-header",on:{mouseover:function(e){t.active=!0},mouseout:t.endNav}},[t._m(0),t._v(" "),a("div",{staticClass:"navbar",class:{flyout:t.flyout,scrolled:t.scrolled}},[a("button",{staticClass:"toggle tcon tcon-plus tcon-plus--minus",class:{"tcon-transform":t.flyout},attrs:{type:"button","aria-label":"add item"},on:{click:t.toggleFlyout}},[a("span",{staticClass:"tcon-visuallyhidden"},[t._v("add item")])]),t._v(" "),a("ul",{ref:"navlist",attrs:{id:"navlist"}},t._l(t.links,function(e){return a("li",{class:{active:e.active},on:{mouseover:t.mouseover}},[a("router-link",{attrs:{to:{path:e.url}},nativeOn:{click:function(e){t.flyout=!1}}},[t._v(t._s(e.title))])],1)})),t._v(" "),a("transition",{on:{enter:t.enter}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],ref:"bar",attrs:{id:"bar"}})])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{staticClass:"logo",attrs:{src:"/static/logo.svg",alt:"Relay Design Co."}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("article",{staticClass:"home"},[a("header",{staticClass:"fadein"},[a("h2",[t._v("Design better experiences")])]),t._v(" "),a("section",{staticClass:"fadein"},[a("p",[t._v("We help companies use design and technology to grow and innovate through "),a("a",{attrs:{href:"#"}},[t._v("branding")]),t._v(", "),a("a",{attrs:{href:"#"}},[t._v("marketing")]),t._v(" and "),a("a",{attrs:{href:"#"}},[t._v("digital applications")]),t._v(".")])]),t._v(" "),a("section",{staticClass:"fadein",attrs:{id:"home-projects"}},[a("p",[t._v("See past "),a("a",{attrs:{href:"#"}},[t._v("projects")]),t._v("."),a("br"),t._v("\n        Meet the "),a("a",{attrs:{href:"#"}},[t._v("team")]),t._v("."),a("br"),t._v("\n        Take a "),a("a",{attrs:{href:"#"}},[t._v("break")]),t._v(".")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("header",{staticClass:"wrapper"},[t._v("\n          contact! "+t._s(t.msg)+"\n      ")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"wrapper"},[a("header",{staticClass:"fadein"},[a("h2",[t._v("Generic headline")])]),t._v(" "),a("section",{staticClass:"fadein"},[a("p",[t._v("Page content")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects detail"},[a("header",{staticClass:"wrapper"},[a("h1",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),t._m(0),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/project-21c-feature.jpg"}}),t._v(" "),t._m(1),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/project-21c-collateral.jpg"}}),t._v(" "),t._m(2),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/fpo_large.png"}}),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("sitefooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h2",{staticClass:"project_title"},[a("span",[t._v("Growing to scale")]),t._v(" 21c Museum Hotels")]),t._v(" "),a("p",{staticClass:"intro"},[t._v("Long term partner. Challenge is to help an existing brand grow to scale while preserving brand integrity and adapting to new markets, new tech, changes in hosplitality trends.  We helped them by serving as partners to their creative team, providing design and tech services and brand consulting.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Adapting to rapid growth")]),t._v(" "),a("p",[t._v("Talk about how 21c grew from 1 to X locations in XX years, and we’ve been with them for X. Talk about need to adapt quickly when going into new markets, and the need to respond to changes in the industry, new marketing channels. How we provided team with design tools like templates, standards, etc to use themselves.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-21c-ad.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Driving revenue through digital")]),t._v(" "),a("p",[t._v("Talk about success of marketing site, how many bookings are direct, important for revenue. How we did user testing and rely on analytics to ensure usability. Scale of multi-site installation and size of team involved, the CMS requirements for that… ")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/fpo_large.png"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper text-center"},[a("h3",[t._v("A family of distinctive brands")]),t._v(" "),a("p",{staticClass:"intro"},[t._v("Talk about how each location has at least one restaurant, so they all need id’s. Try to represent local flavors in cuisine and design. Always paying reference to history of buildings, city, etc.")]),t._v(" "),a("div",{staticClass:"flex-grid"},[a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-graydudley.jpg"}})]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-hive.jpg"}})]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-lockbox.jpg"}})]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-maryeddys.jpg"}})]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-metropole.jpg"}})]),t._v(" "),a("div",{staticClass:"column-third"},[a("img",{attrs:{src:"/static/project-21c-proof.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h3",[t._v("Services")]),t._v(" "),a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Brand Strategy")]),t._v(" "),a("li",[t._v("Logo and Identity System Design")]),t._v(" "),a("li",[t._v("Print Collateral Design")]),t._v(" "),a("li",[t._v("Advertising")])])]),t._v(" "),a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Website Design & Development")]),t._v(" "),a("li",[t._v("Intranet Design & Development")]),t._v(" "),a("li",[t._v("Photography Art Direction")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper project-navigation"},[a("a",{staticClass:"btn prev-btn",attrs:{href:""}},[a("span",[t._v("Previous")])]),t._v(" "),a("a",{staticClass:"btn next-btn",attrs:{href:""}},[a("span",[t._v("Next")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("header",{staticClass:"wrapper"},[a("h2",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),a("article",{staticClass:"wrapper"},t._l(t.projects,function(e){return a("section",[a("router-link",{attrs:{to:{path:e.url}}},[a("h3",{staticClass:"project_title"},[a("span",[t._v(t._s(e.verb))]),t._v(" "+t._s(e.title))]),t._v(" "),a("div",{staticClass:"project_preview"},[a("div",{staticClass:"preview_text"},[a("p",[t._v("\n                  "+t._s(e.excerpt)),a("br"),t._v(" "),a("span",{staticClass:"btn"},[t._v("View Case Study")])])]),t._v(" "),a("img",{staticClass:"feature",attrs:{src:e.feature_image_filename}})])])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects detail"},[a("header",{staticClass:"wrapper"},[a("h1",{staticClass:"page_title"},[t._v(t._s(t.page_title))])]),t._v(" "),t._m(0),t._v(" "),a("img",{staticClass:"feature",attrs:{src:"/static/project-psa-feature.jpg"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h2",{staticClass:"project_title"},[a("span",[t._v("Re-inventing")]),t._v(" PSA Airlines")]),t._v(" "),a("p",{staticClass:"intro"},[t._v("PSA Airlines is a regional airline with a storied history. After its parent company merged with American Airlines in 2013, PSA was in need of an updated brand that better reflected its evolving identity. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper text-center"},[a("h3",[t._v("Joining the new American Airlines")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu")]),t._v(" "),a("img",{attrs:{src:"/static/fpo_large.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("Preserving brand equity while modernizing")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-psa-ad.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("h3",[t._v("A modern website with integrated marketing tools")]),t._v(" "),a("p",[t._v("Integrated with CRM, CMS, SEO PPC… lead generation… lorem ipsum dolor sit amet, consectetur adipisicing elit, sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.")])]),t._v(" "),a("div",{staticClass:"column-half"},[a("img",{attrs:{src:"/static/project-psa-digital-small.jpg"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper"},[a("h3",[t._v("Services")]),t._v(" "),a("div",{staticClass:"slat"},[a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Brand Strategy")]),t._v(" "),a("li",[t._v("Logo and Identity System Design")]),t._v(" "),a("li",[t._v("Print Collateral Design")]),t._v(" "),a("li",[t._v("Advertising")])])]),t._v(" "),a("div",{staticClass:"column-half"},[a("ul",{staticClass:"dash-list"},[a("li",[t._v("Website Design & Development")]),t._v(" "),a("li",[t._v("Intranet Design & Development")]),t._v(" "),a("li",[t._v("Photography Art Direction")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wrapper project-navigation"},[a("a",{staticClass:"btn prev-btn",attrs:{href:""}},[a("span",[t._v("Previous")])]),t._v(" "),a("a",{staticClass:"btn next-btn",attrs:{href:""}},[a("span",[t._v("Next")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"wrapper"},[a("h3",[t._v("Say hello.")]),t._v(" "),a("p",[t._v("hello@relaydesign.co"),a("br"),t._v("\n        502.337.7309\n    ")]),t._v(" "),a("ul",{staticClass:"inline-list icon-list"},[a("li",[a("a",{attrs:{href:"",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_facebook.svg",alt:"Facebook"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_twitter.svg",alt:"Twitter"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"",target:"_blank"}},[a("img",{staticClass:"icon",attrs:{src:"/static/icon_instagram.svg",alt:"Instagram"}})])])]),t._v(" "),a("p",{staticClass:"copyright"},[t._v("©2017 Relay, LLC. Louisville, KY. ")])])])}]}}],[17]);
//# sourceMappingURL=app.e28db2f3d535fa75fd12.js.map