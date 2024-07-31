import{a as b,S as v,i as c}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r){try{return(await b.get("https://pixabay.com/api/",r)).data}catch(t){throw t}}function g(r){const t=document.querySelector(".gallery"),s=r.map(e=>`<li class="item-ul">
  <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
  <div class="about-img-div">
    <p class="description-img">Likes</p>
    <p class="description-img">Views</p>
    <p class="description-img">Comments</p>
    <p class="description-img">Downloads</p>
    <span class="description-value">${e.likes}</span>
    <span class="description-value">${e.views}</span>
    <span class="description-value">${e.comments}</span>
    <span class="description-value">${e.downloads}</span>
  </div>
</li>`).join("");t.insertAdjacentHTML("beforeend",s),new v(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const y=document.querySelector(".form"),n=document.querySelector(".loader"),w=document.querySelector(".gallery"),a=document.querySelector(".load-more-button"),f="45071357-999033ebbf151b40dc2c05ece";let p=1,l="",u=0,h=0;y.addEventListener("submit",L);a.addEventListener("click",q);async function L(r){if(r.preventDefault(),l=y.elements[0].value.trim(),p=1,w.innerHTML="",l===""||l.length<2){c.error({title:"",message:"The input field is empty or has less than two characters!"}),a.style.display="none";return}n.style.display="block";const t={params:{key:f,q:l,image_type:"photo",orientation:"horizontal",page:p,per_page:15}};try{const s=await m(t);n.style.display="none",s.hits.length===0?(c.error({title:"",message:"No pictures found! Try again!"}),a.style.display="none"):(g(s.hits),a.style.display="block",u=s.totalHits,h=u/15)}catch(s){n.style.display="none",c.error({title:"",message:`Error fetching images: ${s.message||s}`})}finally{u<15&&(a.style.display="none"),y.reset()}}async function q(){n.style.display="block",p+=1;const r={params:{key:f,q:l,image_type:"photo",orientation:"horizontal",page:p,per_page:15}};try{const t=await m(r);n.style.display="none",g(t.hits);const i=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"})}catch(t){n.style.display="none",c.error({title:"",message:`Error fetching images: ${t.message||t}`})}finally{p>=h&&(a.style.display="none",c.info({title:"",message:"We're sorry, but you've reached the end of search results."}))}}
//# sourceMappingURL=commonHelpers.js.map
