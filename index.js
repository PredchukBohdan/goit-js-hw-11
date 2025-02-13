import{a as c,S as u,i as p}from"./assets/vendor-D0cagnvz.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function d(r){return c.get("https://pixabay.com/api/",{params:{key:"48820344-d1ffc058fda0b82549bb04a16",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const g=new u(".images-gallery .gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,className:"gallery-popup"});function f(){return p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"white",iconColor:"white",iconUrl:"../img/Group.svg",progressBar:!0,timeout:1e4,animateInside:!1,messageSize:"16",transitionIn:"fadeIn"})}function m(r,a){const n=r.map(t=>`<li class="gallery-item">
                 <a href="${t.largeImageURL}" class="gallery-link">
                    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" width="500"/>
                 </a>
                 <ul class="gallery-info">
                    <li class="gallery-likes">
                        <span class="title">Likes</span>
                        <span class="content">${t.likes}</span>
                    </li>
                    <li class="gallery-views">
                        <span class="title">Views</span>
                        <span class="content">${t.views}</span>
                    </li>
                    <li class="gallery-comments">
                        <span class="title">Comments</span>
                        <span class="content">${t.comments}</span>
                    </li>
                    <li class="gallery-downloads">
                        <span class="title">Downloads</span>
                        <span class="content">${t.downloads}</span>
                    </li>
                 </ul>
              </li>`);a.insertAdjacentHTML("afterbegin",n.join("")),g.refresh()}function l(r){r.classList.toggle("show")}window.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".search-form"),a=document.querySelector(".images-gallery"),n=document.querySelector(".loader");function t(e){e.preventDefault();const s=r.elements.search.value;s&&(l(n),a.innerHTML="",d(s.trim()).then(o=>{const i=o.data.hits;i.length?(m(i,a),l(n)):(a.innerHTML="",l(n),f())}).catch(o=>{console.log(o),l(n)}).finally(()=>{r.reset()}))}r.addEventListener("submit",t)});
//# sourceMappingURL=index.js.map
