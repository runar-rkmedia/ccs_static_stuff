webpackJsonp([0],{18:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=a(60),r=a(61),o=a(62),s=a(63),d=a(64),l=n({booking:i.default,slot_calendar:o.default,slot_calendar_internal:r.default,list_group_checked:s.default},d.default);t.default=l},19:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(20),a(54);var n=a(18);window.carcare_func=n.default,a(65),XMLHttpRequest.prototype.open=function(e){return function(t,a,n,i,r){n||console.warn("xhr call: "+a+" isAsync: "+n),e.apply(this,arguments)}}(XMLHttpRequest.prototype.open)},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(55),a(56),a(57),a(58),a(59)},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},59:function(e,t){},60:function(e,t,a){"use strict";function n(e,t){for(var a=new Date(e.getTime()),n=new Date(t.getTime());a<=n;){if(0===a.getDay()||6===a.getDay())return!0;a=a.addDays(1)}return!1}function i(){$("#order_booking_form").ready(function(){$("#id_time_pickup").attr("placeholder","Nå / Ved bestilling");var e=$("#id_time_pickup").parent().parent();$("#id_has_self_transport").is(":checked")&&e.hide(),$("#id_has_self_transport").on("change",function(){$(this).is(":checked")?e.slideUp():e.slideDown()}),$("#id_has_self_transport").change(function(){$("#id_time_pickup").val("")});var t=$("#id_why_urgent").parent().parent(),a=$("#id_time_delivery").parent().parent();$("#id_is_urgent").is(":checked")||(t.hide(),a.hide()),$("#id_is_urgent").on("change",function(){$(this).is(":checked")?(t.slideDown(),a.slideDown()):(t.slideUp(),a.slideUp())});var n=$("#id_why_faulty").parent().parent();$("#id_is_faulty").is(":checked")||n.hide(),$("#id_is_faulty").on("change",function(){$(this).is(":checked")?n.slideDown():n.slideUp()});var i={},s={};$("#id_time_delivery").val()||(s.minDate=new Date,s.defaultDate=o(new Date,7)),$("#id_time_delivery").val()||(i.minDate=new Date,i.defaultDate=o(new Date,7)),r.default.datetime("#id_time_pickup",s),r.default.datetime("#id_time_delivery",i)})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(8),o=function(e,t){return e.setDate(e.getDate()+t),e};window.weekendBetween=n,t.default=i},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},new Vue({el:"#slot-calendar-internal",template:"#slot-calendar-internal-template",data:{loading:!1,startDate:new Date,dealers:[],dealerId:null,orders:[]},created:function(){this.loadData()},methods:{close:function(){location.hash="",$("#orderData").empty(),$("#orderData").hide()},loadData:function(){this.loading=!0;var e=this;$.getJSON("/panel/dealers/json/",function(t){e.dealers=t,e.loading=!1}),this.loadCalendar()},loadCalendar:function(){this.loading=!0;var e=new Date(this.startDate.setHours(12)).toISOString().split("T")[0],t=this,a="?date="+e;this.dealerId&&(a=a+"&dealer="+this.dealerId),$.getJSON("/panel/orders/overview/slot-calendar-data/"+a,function(e){t.startDate=new Date(e.start_date),t.orders=e.orders,t.loading=!1})},dayDate:function(e){return this.startDate.addDays(e).getDate()+"."},previousWeek:function(){this.startDate=this.startDate.addDays(-6),this.loadData()},nextWeek:function(){this.startDate=this.startDate.addDays(8),this.loadData()}},watch:{dealerId:function(){this.loadCalendar()}},computed:{ordersByDate:function(){var e={};return this.orders.forEach(function(t){var a=t.time_delivery.split(" ")[0];e[a]||(e[a]=[]),t.time_delivery=new Date(t.time_delivery),e[a].push(t)}),e},hours:function(){for(var e=[],t=this,a=8;a<=16;a++)!function(a){for(var n=[],i=1;i<=7;i++){var r=t.startDate.addDays(i),o=r.toISOString().split("T")[0],s=t.ordersByDate[o];s?n.push(s.filter(function(e){return e.time_delivery.getHours()===a})):n.push([])}e.push(n)}(a);return e}}})}},62:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},new Vue({el:"#slot-calendar",template:"#slot-calendar-template",data:{loading:!1,startDate:new Date,orders:[],moveOrder:null,moveTimes:[],moveExisting:null,moveTime:null,moveComment:null,moveStatus:null},created:function(){this.loadData()},methods:{loadData:function(){this.loading=!0;var e=this.startDate.toISOString().split("T")[0],t=this;$.getJSON("/ext/slot-calendar/?date="+e,function(e){t.startDate=new Date(e.start_date),t.orders=e.orders,t.loading=!1})},dayDate:function(e){return this.startDate.addDays(e).getDate()+"."},previousWeek:function(){this.startDate=this.startDate.addDays(-6),this.loadData()},nextWeek:function(){this.startDate=this.startDate.addDays(8),this.loadData()},move:function(e){if(!e.is_movable)return void alert("Kan ikke be om flytting av ordre bestilt av andre.");if("Levert"===e.status)return void alert("Kan ikke be om flytting av leverte ordre.");this.loading=!0,this.moveStatus=null,this.moveTimes=[],this.moveExisting=null,this.moveTime=null,this.moveComment=null,this.moveOrder=e;var t=this;$.getJSON("/ext/move-slots/"+e.id+"/",function(e){t.moveTimes=e.times,t.moveExisting=e.requested_move,t.loading=!1},function(){t.loading=!1})},saveMove:function(){if(this.moveOrder&&this.moveTime){this.loading=!0;var e=this;$.ajax("/ext/move-slot/"+this.moveOrder.id+"/",{data:JSON.stringify({time:this.moveTime,comment:this.moveComment}),contentType:"application/json",type:"POST"}).done(function(t){e.moveStatus=t.message,e.moveOrder=null,e.loading=!1}).fail(function(t){e.moveStatus=t,e.loading=!1})}}},computed:{ordersByDate:function(){var e={};return this.orders.forEach(function(t){var a=t.time_delivery.split(" ")[0];e[a]||(e[a]=[]),t.time_delivery=new Date(t.time_delivery),e[a].push(t)}),e},hours:function(){for(var e=[],t=this,a=8;a<=16;a++)!function(a){for(var n=[],i=1;i<=7;i++){var r=t.startDate.addDays(i),o=r.toISOString().split("T")[0],s=t.ordersByDate[o];s?n.push(s.filter(function(e){return e.time_delivery.getHours()===a})):n.push([])}e.push(n)}(a);return e}}})}},63:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){$(".list-group.checked-list-box .list-group-item").each(function(){function t(){var e=n.is(":checked");a.data("state",e?"on":"off"),a.find(".state-icon").removeClass().addClass("state-icon "+o[a.data("state")].icon),e?a.addClass(r+i+" active"):a.removeClass(r+i+" active")}var a=$(this),n=a.find("input"),i=a.data("color")?a.data("color"):"primary",r="button"===a.data("style")?"btn-":"list-group-item-",o={on:{icon:"glyphicon glyphicon-check"},off:{icon:"glyphicon glyphicon-unchecked"}};a.css("cursor","pointer"),a.on("click",function(){n.prop("checked",!n.is(":checked")),n.triggerHandler("change"),t()}),n.on("change",function(){t(),e&&e()}),function(){!0===a.data("checked")&&n.prop("checked",!n.is(":checked")),t(),0===a.find(".state-icon").length&&a.prepend('<span class="state-icon '+o[a.data("state")].icon+'"></span>')}()})}},64:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},i=function(e){if("OK"===e.status){var t=e.results[0].geometry.location,a=t.lat,n=t.lng;if($("#id_map_lat").val(a),$("#id_map_lon").val(n),company_marker&&google_map){var i=new google.maps.LatLng(a,n);company_marker.setPosition(i),google_map.setCenter(i)}}},r={address:function(e){if(e){var t=e.street_name,a=e.post_code,n=e.post_area;return $("#id_address").val(t),$("#id_zip_code").val(a),$("#id_city").val(n),$(".length#id_map_lat").length&&s(),t}},company:function(e){if(e){var t=e.forretningsadresse||e.postadresse,a=t.adresse,n=t.postnummer,i=t.poststed;$("#id_address").val(a),$("#id_zip_code").val(n),$("#id_city").val(i),$("#id_org_number").val(e.organisasjonsnummer),$("#id_map_lat").length&&s()}return e.navn_title_case}},o=function(e,t,a){void 0===a&&(a={});var i={source:function(e,t){$.getJSON("/panel/json/customer/",$.extend(a,{query:e}),function(e){for(var a=[],i=0;i<e.length;i++){var r=e[i],o="cst"+r.id;a.push(o),n[o]=r}t(a)})},matcher:function(e){return!!this.query},displayText:function(e){var t=n[e];if(t){var a=t.cars;if(a){var i=a.join(", ");return"<span>"+t.name+"<br><small>"+i+"</small></span>"}return"<span>"+t.name+"</span>"}},minLength:1,updater:c(t)};e.typeahead($.extend(l,i))},s=_.debounce(function(){h($("#id_address").val(),$("#id_zip_code").val(),i)},500),d=function(e,t,a){void 0===t&&(t=r.address),void 0===a&&(a={}),$("#id_map_lat").length&&(s(),e.on("change paste keyup",s));var i={source:function(e,t){u(1,e,t)},minLength:1,updater:c(t),displayText:function(e){var t=n[e];if(t){var a=[t.post_code,t.post_area];return t.place&&t.place.toUpperCase()!==t.post_area&&a.push(t.place),"<span>"+t.street_name+"<br><small>"+a.join(", ")+"</small></span>"}return e}};e.typeahead($.extend(l,i))},l={minLength:2,items:25,delay:300,fitToElement:!1,highlighter:function(e){return e}},u=function(e,t,a){t=t.replace(/\s\d+\w?$/,"").trim(),$.getJSON("/api/address/",{street_name:t}).done(function(e){var t=[];if(e){for(var i=0;i<e.data.length;i++){var r=e.data[i],o="adr"+r.id;r.post_area=r.post_area.toUpperCase(),t.push(o),n[o]=r}a(t)}})},c=function(e){return function(t){return e(n[t],t)}},f=["Båt","og","Bil"],p=f.map(function(e){return e.toUpperCase()}),m=function(e,t){return t||(t=0),e.split(" ").map(function(e){var a=e.toUpperCase(),n=p.indexOf(a);return-1!==n?f[n]:a.length>t?a[0]+a.substr(1).toLowerCase():e}).join(" ")},h=function(e,t,a){$.getJSON("https://maps.googleapis.com/maps/api/geocode/json",{address:[e,t,"Norway"].join(", "),key:"AIzaSyAHO78I5BkyTl_JkE5G3OhtrYI3zxBhCbM"},a)},v=function(e,t){$.getJSON("https://data.brreg.no/enhetsregisteret/enhet.json?$filter=startswith(navn,'"+encodeURIComponent(e)+"')&size=10",function(e){var a=[];if(e.data){for(var i=0;i<e.data.length;i++){var r=e.data[i];r.navn_title_case=m(r.navn,3);var o=(r.forretningsadresse||r.postadresse,"org"+r.organisasjonsnummer);a.push(o),n[o]=r}t(a)}})},g=function(e,t,a){void 0===t&&(t=r.company);var i={source:function(e,t){a&&!a()||v(e,t)},updater:c(t),displayText:function(e){var t=n[e];if(t){var a=t.forretningsadresse||t.postadresse;return"<span>"+t.navn_title_case+"<br><small>"+[a.adresse,a.poststed].join(", ")+"</small></span>"}return e}};e.attr("autocomplete","off"),e.typeahead($.extend(l,i))};t.default={searchMap:n,toTitleCase:m,org_typeahead_source:v,addresses_typeahead_source:u,_updater:c,bind_customer_search:o,bind_address_search:d,bind_company_search:g,_typeahead_options:l}},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(18),i=a(8);$(function(){$("body").on("click","a.confirm",function(e){if($(this).hasClass("disabled"))return!1;var t=$(e.target).data("message"),a='<div class="confirm-box"><p>'+t+'</p><a href="#" class="btn btn-sm btn-default box-cancel">Avbryt</a><a href="#" class="btn btn-sm btn-danger box-ok">OK</a></div>';$("body").append(a),e.preventDefault(),$(document).width()>2200&&$(".confirm-box").css({left:"25%"}),$(".box-cancel").on("click",function(){$(this).parent().remove()});var n=this;return $(".box-ok").on("click",function(){$(this).parent().remove(),window.location.assign($(n).attr("href"))}),!1}),$("body").on("click",".btn-print",function(e){window.print()}),n.default.bind_customer_search($(".quick_search"),function(e){e.url&&window.location.assign(e.url)},{cars:!0});var e=function(){i.default.date("input.datepicker-widget"),i.default.time("input.datepicker-widget-time,input.timeinput"),i.default.range("input.datepicker-widget-range",{defaultDate:[$("#date-from").val(),$("#date-to").val()]},["#date-from","#date-to"])};e(),$("body").on("click",".modal-link",function(){if($(this).hasClass("disabled"))return!1;var t=$(".modal"),a=$(this).data("url");t.html("Laster..."),t.modal("show"),t.load(a,function(){e(),t.find(".form-async").ajaxForm({delegation:!0,target:".modal",success:function(){$.get(location.href,function(e){$(t.find(".form-async .alert.alert-success")[0]).length&&t.modal("hide"),$("#main").replaceWith($(e).filter("#main"))})}})})})})},8:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=a(12),r=a(53);t.datepicker_default_options={locale:r.Norwegian,weekNumbers:!0,dateFormat:"Y-m-d",altInput:!0,altFormat:"j. F Y",minDate:new Date(1900,1,1),time_24hr:!0},t.datepicker=function(e,a){return void 0===a&&(a={}),i.default(e,n({},t.datepicker_default_options,a))},t.default={flatpickr:i.default,date:t.datepicker,range:function(e,a,r){void 0===a&&(a={});var o=a.dateFormat||"Y-m-d";return t.datepicker(e,n({onChange:function(e,t,a){if(r&&e.length){var n=i.default.formatDate(e[0],o);$(r[0]).val(n),$(r[1]).val(2===e.length?i.default.formatDate(e[1],o):n)}},altFormat:"d/m-y",mode:"range",dateFormat:o},a))},time:function(e,a){return void 0===a&&(a={}),t.datepicker(e,n({enableTime:!0,altInput:!1,dateFormat:"H:i",defaultHour:12,allowInput:!0,noCalendar:!0},a))},datetime:function(e,a){return void 0===a&&(a={}),t.datepicker(e,n({enableTime:!0,altFormat:"d. F Y, k\\l. H:i",dateFormat:"Y-m-d H:i:S",defaultHour:12,parseDate:function(e){return i.default.parseDate(e,"d.m.Y H:i")}},a))}}}},[19]);