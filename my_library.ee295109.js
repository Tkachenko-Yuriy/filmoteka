function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",(function(t,o){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var r={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"7jF87":"my_library.ee295109.js","9mItj":"plug_img.1b18cf51.jpg","eVStz":"close_x.576fb31f.svg"}'));const i={jsForm:document.querySelector(".js-form"),search_message:document.querySelector(".js-form__search_message"),jsGallery:document.querySelector(".js-gallery"),jsGalleryList:document.querySelector(".js-gallery-list"),trendingTarget:document.querySelector(".js-trending-target"),searchTarget:document.querySelector(".js-search-target"),jsModal:document.querySelector(".js-modal"),backdrop:document.querySelector(".js-backdrop"),closeModalBtn:document.querySelector(".close_btn"),myLib:document.querySelector(".js-my_lib"),headerWatchedBtn:document.querySelector(".header__watched_btn"),headerQueueBtn:document.querySelector(".header__queue_btn"),jsLoader:document.querySelector(".js-loader"),anchor:document.querySelector(".js-anchor")};var s;function l(e){const o=e.map((({genres:e,id:o,poster_path:n,title:a,release_date:r})=>{let i=e.map((e=>e.name)).slice(0,3).join(",");return`<li id="${o}" class="gallery__film_item">\n                  <a href="" class="gallery__film_link">\n                    <div class="thumb">\n                      <img class="gallery__film_poster" loading="lazy" src="${null!==n?`https://image.tmdb.org/t/p/w500/${n}`:t(s)}" alt=""   />\n                    </div>\n                    <div class="description">\n                      <h3 class="description-title link">${a}</h3>\n                      <p class="description-text">${r}</p>\n                      <p class="description-text">${i}</p>\n                    </div>\n                  </a>\n                </li>`})).join("");i.jsGalleryList.insertAdjacentHTML("beforeend",o)}s=new URL(r("kyEFX").resolve("9mItj"),import.meta.url).toString();const d={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBmNjJhMzE2MTgzM2IyOWYzNTM0ZWYxZDE4ZDVhNiIsInN1YiI6IjY1NjliMzRmNjM1MzZhMDBjNDJhOTRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6n_PVw8L5YbP5E4yWe4QgSA4ZnMDGxzBFCiqZdJHBc"}};function c(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?&append_to_response=videos&language=uk-UK`,d).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}var u;function m(e){const o=e.genres.map((e=>e.name)).slice(0,3).join(","),n=e.videos.results;let a="",r="";n.length>=1?r=`${n[0].key}`:(r="",a="is_hidden");const{id:l,poster_path:d,title:c,vote_average:m,vote_count:_,popularity:f,original_title:h,overview:g}=e,v=`<div class="modal__body"> \n                    <div class="modal__film_poster ">\n                      <a class="modal__film_poster_link" ${n.length>=1?`href=https://www.youtube.com/watch?v=${r}`:""} target="_blank">\n                        <img class="modal__film_img img" src="${null!==d?`https://image.tmdb.org/t/p/w500/${d}`:t(s)}" alt="" width="280" height="398">\n                        <span class="watch-icon ${a}"></span>\n                      </a>\n                    </div>\n                    <div id="${l}" class="modal__film_description">\n                      <h2 class="modal__film_title">${c}</h2>\n                      <div class="modal__film_configuration">\n                      <ul class="modal__film_configuration_list list">\n                        <li class="modal__film_configuration_item">Рейтинг</li>\n                        <li class="modal__film_configuration_item">Популярність</li>\n                        <li class="modal__film_configuration_item">Назва</li>\n                        <li class="modal__film_configuration_item">Жанр</li>\n                      </ul>\n                      <ul class="modal__film_configuration_list_value list">\n                        <li class="modal__film_configuration_item"><span class="configuration__vote_averagee_value">${m}</span>&#x02F;<span class="configuration__vote_count_value">${_}</span></li>\n                        <li class="modal__film_configuration_item">${f}</li>\n                        <li class="modal__film_configuration_item">${h}</li>\n                        <li class="modal__film_configuration_item">${o}</li>\n                      </ul>\n                      </div>\n                      <h3 class="modal__film_second_title">Опис</h3>\n                      <p class="modal__film_overview">${g}</p>\n                      <button type="button" class="modal__remove_btn button"  data-action="removeLs">\n                          Видалити з черги\n                      </button>\n                  </div>\n                      <button type="button" class="close_btn" data-action="close-modal">\n                        <img class="close-icon" src=${t(u)} alt="">\n                      </button>\n                </div>`;i.jsModal.insertAdjacentHTML("afterbegin",v)}u=new URL(r("kyEFX").resolve("eVStz"),import.meta.url).toString();var _={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};let f=[],h=[];function g(e){const t=e.target,o=document.querySelector('button[data-action="addToWatched"]'),n=document.querySelector('button[data-action="addToQueue"]');if(t.classList.contains("modal__addToWatched_btn")){o.setAttribute("disabled","true");c(e.target.closest(".modal__film_description").id).then((e=>{f.push(e),_.save("addToWatched",f)})).catch((e=>console.error(e)))}else if(t.classList.contains("modal__addToQueue_btn")){n.setAttribute("disabled","true");c(e.target.closest(".modal__film_description").id).then((e=>{h.push(e),_.save("addToQueue",h)})).catch((e=>console.error(e)))}else if(t.classList.contains("modal__remove_btn")){const t=e.target.closest(".modal__film_description").id;if(i.headerWatchedBtn.hasAttribute("disabled")){const e=_.load("addToWatched").filter((e=>e.id!==Number(t)));_.save("addToWatched",e),v();l(_.load("addToWatched"))}if(i.headerQueueBtn.hasAttribute("disabled")){const e=_.load("addToQueue").filter((e=>e.id!==Number(t)));_.save("addToQueue",e),v();l(_.load("addToQueue"))}}}function v(){document.body.classList.remove("show-modal"),document.body.classList.remove("no-scroll"),i.jsGalleryList.innerHTML=""}var b={addLoader:function(){i.jsLoader.classList.add("loader")},removeLoader:function(){setTimeout((()=>{i.jsLoader.classList.remove("loader")}),500)}};i.anchor.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(i.anchor.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));function p(){i.headerWatchedBtn.setAttribute("disabled","true"),i.headerQueueBtn.removeAttribute("disabled"),i.headerWatchedBtn.classList.add("active_btn"),i.headerQueueBtn.classList.remove("active_btn"),i.jsGalleryList.innerHTML="";const e=_.load("addToWatched");e&&l(e)}function y(){document.removeEventListener("keydown",j),document.body.classList.remove("show-modal"),document.body.classList.remove("no-scroll")}function L(e){e.currentTarget===e.target&&y()}function j(e){"Escape"===e.code&&y()}i.headerWatchedBtn.addEventListener("click",p),i.headerQueueBtn.addEventListener("click",(function(){i.headerQueueBtn.setAttribute("disabled","true"),i.headerWatchedBtn.removeAttribute("disabled"),i.headerWatchedBtn.classList.remove("active_btn"),i.headerQueueBtn.classList.add("active_btn"),i.jsGalleryList.innerHTML="";const e=_.load("addToQueue");if(!e)return;l(e)})),i.myLib.classList.contains("current_page")&&p(),i.jsGalleryList.addEventListener("click",(function(e){e.preventDefault(),i.jsModal.innerHTML="";c(e.target.closest(".gallery__film_item").id).then((e=>{b.addLoader(),document.body.classList.add("show-modal"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",j),i.backdrop.addEventListener("click",L),i.jsModal.addEventListener("click",g),i.jsModal.addEventListener("click",(e=>{e.target.closest(".close_btn")&&y()})),m(e)})).catch((e=>console.error(e))).finally((()=>b.removeLoader()))}));
//# sourceMappingURL=my_library.ee295109.js.map