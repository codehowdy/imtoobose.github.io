"use strict";for(var handleNavClick=function(e){for(var a=0;a<navs.length;a++)navs[a].classList.remove("activenav");e.target.classList.add("activenav");var s=+e.target.id.slice(-1);for(a=0;a<views.length;a++)views[a].classList.remove("activeview");views[s-1].classList.add("activeview")},views=document.getElementsByClassName("view"),navs=document.getElementsByClassName("navelem"),i=0;i<navs.length;i++)navs[i].addEventListener("click",handleNavClick);