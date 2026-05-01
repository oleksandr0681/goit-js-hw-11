import{a as n,S as c,i as l}from"./assets/vendor-Cu43xbyG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(t){const o={params:{key:"55507124-55cf7e8db58c14a0702f34115",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return new Promise((i,a)=>{n.get("https://pixabay.com/api",o).then(e=>{i(e.data)}).catch(e=>{a(e)})})}function p(t){const o=document.querySelector(".gallery"),i=t.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
          <img 
          class="gallery-image" 
          src="${e.webformatURL}" 
          alt="${e.tags}" 
          />
      </a>
      <ul class="item-indicators">
        <li>
            <h2>Likes</h2>
            <p>${e.likes}</p>
        </li>
        <li>
            <h2>Views</h2>
            <p>${e.views}</p>
        </li>
        <li>
            <h2>Comments</h2>
            <p>${e.comments}</p>
        </li>
        <li>
            <h2>Downloads</h2>
            <p>${e.downloads}</p>
        </li>
      </ul>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",i),new c(".gallery-item a",{captionsData:"alt",captionPosition:"bottom"}).refresh()}function d(){const t=document.querySelector(".gallery");t.innerHTML=""}function m(){document.querySelector(".loader-wrapper").classList.add("loader-wrapper-show")}function f(){document.querySelector(".loader-wrapper").classList.remove("loader-wrapper-show")}const h=document.querySelector(".form");document.querySelector(".gallery");h.addEventListener("submit",y);function y(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();o!==""?(m(),d(),u(o).then(i=>{i.hits.length!==0?p(i.hits):l.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topLeft",timeout:8e3})}).catch(i=>{l.error({message:i.message,position:"topLeft",timeout:8e3})}).finally(()=>{f()})):l.show({title:"Warning",message:"The form field must be filled in.",backgroundColor:"pink",position:"topLeft",timeout:8e3})}
//# sourceMappingURL=index.js.map
