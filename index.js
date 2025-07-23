import{a as M,S as P,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const B="50678696-ed6f097088bf5690dd98584b9",I="https://pixabay.com/api/";function f(t,o=1){const i={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return M.get(I,{params:i}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e),new Error("Failed to fetch images from Pixabay.")})}const y=document.querySelector(".gallery"),p=document.querySelector(".buttonLoadMore");function h(t){function o({webformatURL:e,largeImageURL:r,tags:a,likes:w,views:S,comments:q,downloads:E}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${e}" alt="${a}"
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
              <p>${q}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${E}</p>
                </div>
          </div>
        </div>
        </li>`}const l=t.map(o).join("");y.insertAdjacentHTML("beforeend",l),new P(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function $(){y.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("visuallyhidden")}function L(){document.querySelector(".loader").classList.add("visuallyhidden")}function u(){p.classList.remove("visuallyhidden")}function s(){p.classList.add("visuallyhidden")}function H(){const t=document.querySelector(".gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}let m=1,c=0;s();const g=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]'),x=document.querySelector(".buttonLoadMore");let d=v.value.trim();g.addEventListener("submit",R);async function R(t){if(t.preventDefault(),d=v.value.trim(),d===""){g.reset(),n.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}$(),b();try{m=1,c=0;let o=await f(d,m);c=o.total,c>=15&&u(),c===0?(s(),n.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0})):(h(o.hits),o.hits.length===15?u():s())}catch(o){n.error({title:"Error",message:o.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L(),g.reset()}}x.addEventListener("click",A);async function A(){m+=1,s(),b();try{const t=await f(d,m);h(t.hits),H(),t.hits.length===15?u():(s(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(255, 106, 0, 0.95)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}))}catch(t){n.error({title:"Error",message:t.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{L(),x.blur()}}
//# sourceMappingURL=index.js.map
