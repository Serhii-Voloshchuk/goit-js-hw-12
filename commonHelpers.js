import{S as g,i as n}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="45071357-999033ebbf151b40dc2c05ece",S="https://pixabay.com/api/";async function h(s,r=1){try{return(await axios.get(S,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:12}})).data}catch{throw new Error("Error fetching images")}}function y(s){const r=document.querySelector(".gallery"),a=s.map(({webformatURL:e,largeImageURL:t,tags:i,likes:b,views:L,comments:E,downloads:v})=>`
            <a href="${t}" class="gallery__link">
                <div class="photo-card">
                    <img src="${e}" alt="${i}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b> ${b}
                        </p>
                        <p class="info-item">
                            <b>Views</b> ${L}
                        </p>
                        <p class="info-item">
                            <b>Comments</b> ${E}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b> ${v}
                        </p>
                    </div>
                </div>
            </a>
        `).join("");r.insertAdjacentHTML("beforeend",a),new g(".gallery a").refresh()}function q(){const s=document.querySelector(".gallery");s.innerHTML=""}const p=document.querySelector("#search-form"),P=p.querySelector('input[name="searchQuery"]');document.querySelector(".gallery");const d=document.querySelector(".load-more"),f=document.getElementById("loader");let o=1,c="",l=0,m;p.addEventListener("submit",async s=>{if(s.preventDefault(),c=P.value.trim(),!c){n.error({title:"Error",message:"Please enter a search query!"});return}q(),o=1,l=0,d.classList.add("hidden"),f.classList.remove("hidden");try{const r=await h(c,o);if(f.classList.add("hidden"),r.hits.length===0){n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}l=r.totalHits,y(r.hits),m=new g(".gallery a"),m.refresh(),l>o*15&&d.classList.remove("hidden")}catch(r){f.classList.add("hidden"),n.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",r)}});d.addEventListener("click",async()=>{o+=1;try{const s=await h(c,o);y(s.hits),m.refresh(),l<=o*15&&(d.classList.add("hidden"),n.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}))}catch(s){n.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching more images:",s)}});
//# sourceMappingURL=commonHelpers.js.map
