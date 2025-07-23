import{a as E,S as M,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="50678696-ed6f097088bf5690dd98584b9",$="https://pixabay.com/api/";function f(t,o=1){const i={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return E.get($,{params:i}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e),new Error("Failed to fetch images from Pixabay.")})}const g=document.querySelector(".gallery"),y=document.querySelector(".buttonLoadMore");function p(t){function o({webformatURL:e,largeImageURL:r,tags:a,likes:x,views:S,comments:w,downloads:q}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${e}" alt="${a}"
          /></a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${x}</p>
              </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${S}</p>
                </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${w}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${q}</p>
                </div>
          </div>
        </div>
        </li>`}const s=t.map(o).join("");g.insertAdjacentHTML("beforeend",s),new M(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function I(){g.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("visuallyhidden")}function L(){document.querySelector(".loader").classList.add("visuallyhidden")}function b(){y.classList.remove("visuallyhidden")}function d(){y.classList.add("visuallyhidden")}let m=1,c=0;d();const u=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]'),A=document.querySelector(".buttonLoadMore");let l=v.value.trim();u.addEventListener("submit",B);async function B(t){if(t.preventDefault(),l=v.value.trim(),l===""){u.reset(),n.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}I(),h();try{m=1,c=0;let o=await f(l,m);c=o.total,c>=15&&b(),c===0?(d(),n.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0})):p(o.hits)}catch(o){n.error({title:"Error",message:o.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L(),u.reset()}}A.addEventListener("click",H);async function H(){m+=1,d(),h();try{const t=await f(l,m);p(t.hits),t.hits.length===15?b():(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(76, 175, 80, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}))}catch(t){n.error({title:"Error",message:t.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{L()}}
//# sourceMappingURL=index.js.map
