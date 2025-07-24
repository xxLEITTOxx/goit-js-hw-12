import{a as E,S as M,i as c}from"./assets/vendor-DRgUjrIE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const B="50678696-ed6f097088bf5690dd98584b9",I="https://pixabay.com/api/";function g(t,o=1){const a={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return E.get(I,{params:a}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e),new Error("Failed to fetch images from Pixabay.")})}const f=document.querySelector(".gallery"),y=document.querySelector(".buttonLoadMore");function p(t){function o({webformatURL:e,largeImageURL:r,tags:n,likes:w,views:S,comments:P,downloads:q}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${e}" alt="${n}"
          /></a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${w}</p>
              </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${S}</p>
                </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${P}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${q}</p>
                </div>
          </div>
        </div>
        </li>`}const d=t.map(o).join("");f.insertAdjacentHTML("beforeend",d),new M(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function $(){f.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("visuallyhidden")}function b(){document.querySelector(".loader").classList.add("visuallyhidden")}function L(){y.classList.remove("visuallyhidden")}function l(){y.classList.add("visuallyhidden")}let i=1;const v=15;let s=0;l();const u=document.querySelector(".form"),H=document.querySelector('input[name="search-text"]'),x=document.querySelector(".buttonLoadMore");let m;u.reset();u.addEventListener("submit",R);async function R(t){if(t.preventDefault(),m=H.value.trim(),m===""){u.reset(),c.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}$(),h();try{i=1,s=0;let o=await g(m,i);s=o.total,s===0?(l(),c.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0})):(p(o.hits),i*v<s?L():l()),u.reset()}catch(o){c.error({title:"Error",message:o.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{b()}}x.addEventListener("click",A);async function A(){i+=1,l(),h();try{const t=await g(m,i);p(t.hits),i*v<=s?L():(l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(255, 106, 0, 0.95)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}))}catch(t){c.error({title:"Error",message:t.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{b(),x.blur(),C()}}function C(){const t=document.querySelector(".gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
