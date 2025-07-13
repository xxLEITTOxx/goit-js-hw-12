import{a as y,S as g,i as s}from"./assets/vendor-DRgUjrIE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="50678696-ed6f097088bf5690dd98584b9",h="https://pixabay.com/api/";function b(i){const o={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(h,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Failed to fetch images from Pixabay.")})}const l=document.querySelector(".gallery");function L(i){function o({webformatURL:e,largeImageURL:t,tags:a,likes:m,views:d,comments:u,downloads:f}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${e}" alt="${a}"
          /></a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${m}</p>
              </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${d}</p>
                </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${u}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${f}</p>
                </div>
          </div>
        </div>
        </li>`}const r=i.map(o).join("");l.insertAdjacentHTML("beforeend",r),new g(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function v(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("visuallyhidden")}function x(){document.querySelector(".loader").classList.add("visuallyhidden")}console.log("mygallery",l);const c=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');c.addEventListener("submit",P);async function P(i){i.preventDefault();const o=w.value.trim();if(o===""){c.reset(),s.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}v(),S();try{const r=await b(o);r.hits.length===0?s.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0}):L(r.hits)}catch(r){s.error({title:"Error",message:r.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{x(),c.reset()}}
//# sourceMappingURL=index.js.map
