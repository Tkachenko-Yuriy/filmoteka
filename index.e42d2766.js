!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var o,a;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.e42d2766.js","9RXJu":"plug_img.1b18cf51.jpg","fiAik":"close_x.576fb31f.svg"}'));var r={jsForm:document.querySelector(".js-form"),search_message:document.querySelector(".js-form__search_message"),jsGallery:document.querySelector(".js-gallery"),jsGalleryList:document.querySelector(".js-gallery-list"),trendingTarget:document.querySelector(".js-trending-target"),searchTarget:document.querySelector(".js-search-target"),jsModal:document.querySelector(".js-modal"),backdrop:document.querySelector(".js-backdrop"),closeModalBtn:document.querySelector(".close_btn"),myLib:document.querySelector(".js-my_lib"),headerWatchedBtn:document.querySelector(".header__watched_btn"),headerQueueBtn:document.querySelector(".header__queue_btn"),jsLoader:document.querySelector(".js-loader"),anchor:document.querySelector(".js-anchor")},c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBmNjJhMzE2MTgzM2IyOWYzNTM0ZWYxZDE4ZDVhNiIsInN1YiI6IjY1NjliMzRmNjM1MzZhMDBjNDJhOTRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6n_PVw8L5YbP5E4yWe4QgSA4ZnMDGxzBFCiqZdJHBc"}};function s(e){return fetch("".concat("https://api.themoviedb.org","/3/movie/popular?&append_to_response=configuration&language=uk-UK&page=").concat(e),c).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var l={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBmNjJhMzE2MTgzM2IyOWYzNTM0ZWYxZDE4ZDVhNiIsInN1YiI6IjY1NjliMzRmNjM1MzZhMDBjNDJhOTRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6n_PVw8L5YbP5E4yWe4QgSA4ZnMDGxzBFCiqZdJHBc"}};function d(e,t){return fetch("".concat("https://api.themoviedb.org","/3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=").concat(t),l).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBmNjJhMzE2MTgzM2IyOWYzNTM0ZWYxZDE4ZDVhNiIsInN1YiI6IjY1NjliMzRmNjM1MzZhMDBjNDJhOTRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6n_PVw8L5YbP5E4yWe4QgSA4ZnMDGxzBFCiqZdJHBc"}};function m(e){return fetch("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"?&append_to_response=videos&language=uk-UK"),u).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var f,_=[{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Детектив"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"Телефільм"},{id:53,name:"Трилер"},{id:10752,name:"Військовий"},{id:37,name:"Вестерн"}];function h(e){var n=e.map((function(e){var n=e.genre_ids,o=e.id,a=e.poster_path,i=e.title,r=e.release_date,c=null!==a?"https://image.tmdb.org/t/p/w500/".concat(a):t(f),s=_.filter((function(e){return n.includes(e.id)})).map((function(e){return e.name})).slice(0,3).join(",");return'<li id="'.concat(o,'" class="gallery__film_item">\n          <a href="" class="gallery__film_link">\n            <div class="thumb">\n            <img class="gallery__film_poster" loading="lazy" src="').concat(c,'"\n            "alt="').concat(i,'"   />\n            </div>\n            <div class="description">\n              <h3 class="description-title link">').concat(i,'</h3>\n              <p class="description-text">').concat(r,'</p>\n              <p class="description-text">').concat(s,"</p>\n            </div>\n          </a>\n        </li>")})).join("");r.jsGalleryList.insertAdjacentHTML("beforeend",n)}f=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("9RXJu");var g;function v(e){var n=e.genres.map((function(e){return e.name})).slice(0,2).join(","),o=e.videos.results,a="",i="";o.length>=1?i="".concat(o[0].key):(i="",a="is_hidden");var c=e.id,s=e.poster_path,l=e.title,d=e.vote_average,u=e.vote_count,m=e.popularity,_=(e.original_title,e.overview),h=o.length>=1?"href=https://www.youtube.com/watch?v=".concat(i):"",v=null!==s?"https://image.tmdb.org/t/p/w500/".concat(s):t(f),p='<div class="modal__body"> \n                    <div class="modal__film_poster ">\n                      <a class="modal__film_poster_link" '.concat(h,' target="_blank">\n                        <img class="modal__film_img img" src="').concat(v,'" alt="').concat(l,'" width="280" height="398">\n                        <span class="watch-icon ').concat(a,'"></span>\n                      </a>\n                    </div>\n                    <div id="').concat(c,'" class="modal__film_description">\n                      <h2 class="modal__film_title">').concat(l,'</h2>\n                      <div class="modal__film_configuration">\n                      <ul class="modal__film_configuration_list list">\n                        <li class="modal__film_configuration_item">Рейтинг</li>\n                        <li class="modal__film_configuration_item">Популярність</li>\n                        <li class="modal__film_configuration_item">Назва</li>\n                        <li class="modal__film_configuration_item">Жанр</li>\n                      </ul>\n                      <ul class="modal__film_configuration_list_value list">\n                        <li class="modal__film_configuration_item"><span class="configuration__vote_averagee_value">').concat(d,'</span>&#x02F;<span class="configuration__vote_count_value">').concat(u,'</span></li>\n                        <li class="modal__film_configuration_item">').concat(m,'</li>\n                        <li class="modal__film_configuration_item">').concat(l,'</li>\n                        <li class="modal__film_configuration_item">').concat(n,'</li>\n                      </ul>\n                    </div>\n                      <h3 class="modal__film_second_title">Опис</h3>\n                      <p class="modal__film_overview">').concat(_,'</p>\n                      <ul class="modal__btn list">\n                        <li><button type="button" class="modal__addToWatched_btn button active_btn"  data-action="addToWatched">\n                          додати в переглянуті\n                        </button></li>\n                        <li><button type="button" class="modal__addToQueue_btn button" data-action="addToQueue">\n                          додати в чергу\n                        </button></li>\n                      </ul>\n                    </div>\n                        <button type="button" class="close_btn" data-action="close-modal">\n                          <img class="close-icon" src=').concat(t(g),' alt="">\n                        </button>\n                        <span class="js-loader"></span>\n                  </div>');r.jsModal.insertAdjacentHTML("afterbegin",p)}function p(e){var n=e.map((function(e){var n=e.genres,o=e.id,a=e.poster_path,i=e.title,r=e.release_date,c=n.map((function(e){return e.name})).slice(0,3).join(","),s=null!==a?"https://image.tmdb.org/t/p/w500/".concat(a):t(f);return'<li id="'.concat(o,'" class="gallery__film_item">\n                  <a href="" class="gallery__film_link">\n                    <div class="thumb">\n                      <img class="gallery__film_poster" loading="lazy" src="').concat(s,'" alt=""   />\n                    </div>\n                    <div class="description">\n                      <h3 class="description-title link">').concat(i,'</h3>\n                      <p class="description-text">').concat(r,'</p>\n                      <p class="description-text">').concat(c,"</p>\n                    </div>\n                  </a>\n                </li>")})).join("");r.jsGalleryList.insertAdjacentHTML("beforeend",n)}g=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("fiAik");var b={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}},y="addToWatched",j="addToQueue",L=[],M=[];function I(e){var t=e.target,n=document.querySelector('button[data-action="addToWatched"]'),o=document.querySelector('button[data-action="addToQueue"]');if(t.classList.contains("modal__addToWatched_btn"))n.setAttribute("disabled","true"),m(e.target.closest(".modal__film_description").id).then((function(e){L.push(e),b.save(y,L)})).catch((function(e){return console.error(e)}));else if(t.classList.contains("modal__addToQueue_btn")){o.setAttribute("disabled","true"),m(e.target.closest(".modal__film_description").id).then((function(e){M.push(e),b.save(j,M)})).catch((function(e){return console.error(e)}))}else if(t.classList.contains("modal__remove_btn")){var a=e.target.closest(".modal__film_description").id;if(r.headerWatchedBtn.hasAttribute("disabled")){var i=b.load(y).filter((function(e){return e.id!==Number(a)}));b.save(y,i),T(),p(b.load(y))}if(r.headerQueueBtn.hasAttribute("disabled")){var c=b.load(j).filter((function(e){return e.id!==Number(a)}));b.save(j,c),T(),p(b.load(j))}}}function T(){document.body.classList.remove("show-modal"),document.body.classList.remove("no-scroll"),r.jsGalleryList.innerHTML=""}var E={addLoader:function(){r.jsLoader.classList.add("loader")},removeLoader:function(){setTimeout((function(){r.jsLoader.classList.remove("loader")}),500)}};r.anchor.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(r.anchor.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));var J=1,w="",N={root:null,rootMargin:"900px",threshold:1};r.jsForm.addEventListener("submit",(function(e){if(e.preventDefault(),z.unobserve(r.trendingTarget),J=1,""===(w=e.target.elements.name.value.trim()))return r.search_message.classList.remove("is_hidden"),void setTimeout((function(){r.search_message.classList.add("is_hidden")}),3e3);r.jsGalleryList.innerHTML="",d(w,J).then((function(e){if(0===e.results.length)return r.search_message.classList.remove("is_hidden"),void setTimeout((function(){r.jsForm.reset(),r.search_message.classList.add("is_hidden")}),2e3);E.addLoader(),h(e.results),S.observe(r.searchTarget)})).catch((function(e){return console.error(e)})).finally((function(){return E.removeLoader()}))}));var z=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&!W&&(W=!0,s(J+=1).then((function(e){E.addLoader(),h(e.results),e.total_pages===J&&t.unobserve(r.trendingTarget)})).catch((function(e){return console.log(e)})).finally((function(){E.removeLoader(),W=!1})))}))}),N),S=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&!k&&(k=!0,d(w,J+=1).then((function(e){E.addLoader(),h(e.results),e.total_pages===J&&t.unobserve(r.searchTarget)})).catch((function(e){return console.log(e)})).finally((function(){E.removeLoader(),k=!1})))}))}),N),W=!1,k=!1;function q(e){document.removeEventListener("keydown",x),r.jsModal.removeEventListener("click",I),document.body.classList.remove("show-modal"),document.body.classList.remove("no-scroll")}function x(e){"Escape"===e.code&&q()}s(J).then((function(e){E.addLoader(),h(e.results),z.observe(r.trendingTarget)})).catch((function(e){return console.error(e)})).finally((function(){E.removeLoader()})),r.jsGalleryList.addEventListener("click",(function(e){e.preventDefault(),r.jsModal.innerHTML="",m(e.target.closest(".gallery__film_item").id).then((function(e){E.addLoader(),document.body.classList.add("show-modal"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",x),r.jsModal.addEventListener("click",I),r.jsModal.addEventListener("click",(function(e){e.target.closest(".close_btn")&&q()})),v(e)})).catch((function(e){return console.error(e)})).finally((function(){return E.removeLoader()}))})),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&q()}))}();
//# sourceMappingURL=index.e42d2766.js.map
