webpackJsonp([0],{133:function(e,t,a){"use strict";function n(e,t){for(var a=new Date(e.getTime()),n=new Date(t.getTime());a<=n;){if(0===a.getDay()||6===a.getDay())return!0;a=a.addDays(1)}return!1}function r(){$("#order_booking_form").ready(function(){$("#id_time_pickup").attr("placeholder","Nå / Ved bestilling");var e=$("#id_time_pickup").parent().parent();$("#id_has_self_transport").is(":checked")&&e.hide(),$("#id_has_self_transport").on("change",function(){$(this).is(":checked")?e.slideUp():e.slideDown()}),$("#id_has_self_transport").change(function(){$("#id_time_pickup").val("")});var t=$("#id_why_urgent").parent().parent(),a=$("#id_time_delivery").parent().parent();$("#id_is_urgent").is(":checked")||(t.hide(),a.hide()),$("#id_is_urgent").on("change",function(){$(this).is(":checked")?(t.slideDown(),a.slideDown()):(t.slideUp(),a.slideUp())});var n=$("#id_why_faulty").parent().parent();$("#id_is_faulty").is(":checked")||n.hide(),$("#id_is_faulty").on("change",function(){$(this).is(":checked")?n.slideDown():n.slideUp()});var r={},o={};$("#id_time_delivery").val()||(o.minDate=new Date,o.defaultDate=s(new Date,7)),$("#id_time_delivery").val()||(r.minDate=new Date,r.defaultDate=s(new Date,7)),i.default.datetime("#id_time_pickup",o),i.default.datetime("#id_time_delivery",r)})}Object.defineProperty(t,"__esModule",{value:!0});var i=a(8),s=function(e,t){return e.setDate(e.getDate()+t),e};window.weekendBetween=n,t.default=r},134:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};t.default=function(e,t){var a=t.start,r=t.done,i=t.fail,s=t.whileWriting;s&&s(),e.on("change paste keyup",function(){s&&s();var t=String(e.val());if(/^[a-zA-Z]{2}\d{5}$/.test(t)){if(t in n){var o=n[t],l=o.data,d=o.error;return l?r(l):i(d)}a&&a(),$.getJSON("/api/car_info",{reg:t}).done(function(e){var a=e.message;return n[t]={data:a,status:"success"},r(a)}).fail(function(e){return e.responseJSON&&(n[t]={error:e,status:"fail"}),i(e)})}})}},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){$(".list-group.checked-list-box .list-group-item").each(function(){function t(){var e=n.is(":checked");a.data("state",e?"on":"off"),a.find(".state-icon").removeClass().addClass("state-icon "+s[a.data("state")].icon),e?a.addClass(i+r+" active"):a.removeClass(i+r+" active")}var a=$(this),n=a.find("input"),r=a.data("color")?a.data("color"):"primary",i="button"===a.data("style")?"btn-":"list-group-item-",s={off:{icon:"far fa-square fa-fw"},on:{icon:"far fa-check-square fa-fw"}};a.css("cursor","pointer"),a.on("click",function(){n.prop("checked",!n.is(":checked")),n.triggerHandler("change"),t()}),n.on("change",function(){t(),e&&e()}),function(){!0===a.data("checked")&&n.prop("checked",!n.is(":checked")),t(),0===a.find(".state-icon").length&&a.prepend('<span class="state-icon '+s[a.data("state")].icon+'"></span>')}()})}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},new Vue({data:{loading:!1,moveComment:null,moveExisting:null,moveOrder:null,moveStatus:null,moveTime:null,moveTimes:[],orders:[],startDate:new Date},el:"#slot-calendar",template:"#slot-calendar-template",created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0;var t=this.startDate.toISOString().split("T")[0];$.getJSON("/ext/slot-calendar/?date="+t,function(t){e.startDate=new Date(t.start_date),e.orders=t.orders,e.loading=!1})},dayDate:function(e){return this.startDate.addDays(e).getDate()+"."},previousWeek:function(){this.startDate=this.startDate.addDays(-6)(this).loadData()},nextWeek:function(){this.startDate=this.startDate.addDays(8)(this).loadData()},move:function(e){var t=this;return e.is_movable?"Levert"===e.status?void alert("Kan ikke be om flytting av leverte ordre."):(this.loading=!0,this.moveStatus=null,this.moveTimes=[],this.moveExisting=null,this.moveTime=null,this.moveComment=null,this.moveOrder=e,void $.getJSON("/ext/move-slots/"+e.id+"/",function(e){t.moveTimes=e.times,t.moveExisting=e.requested_move,t.loading=!1},function(){t.loading=!1})):void alert("Kan ikke be om flytting av ordre bestilt av andre.")},saveMove:function(){var e=this;this.moveOrder&&this.moveTime&&(this.loading=!0,$.ajax("/ext/move-slot/"+this.moveOrder.id+"/",{contentType:"application/json",data:JSON.stringify({comment:this.moveComment,time:this.moveTime}),type:"POST"}).done(function(t){e.moveStatus=t.message,e.moveOrder=null,e.loading=!1}).fail(function(t){e.moveStatus=t,e.loading=!1}))}},computed:{ordersByDate:function(){var e={};return this.orders.forEach(function(t){var a=t.time_delivery.split(" ")[0];e[a]||(e[a]=[]),t.time_delivery=new Date(t.time_delivery),e[a].push(t)}),e},hours:function(){for(var e=[],t=this,a=8;a<=16;a++)!function(a){for(var n=[],r=1;r<=7;r++){var i=t.startDate.addDays(r),s=i.toISOString().split("T")[0],o=t.ordersByDate[s];o?n.push(o.filter(function(e){return e.time_delivery.getHours()===a})):n.push([])}e.push(n)}(a);return e}}})}},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},new Vue({data:{dealerId:null,dealers:[],loading:!1,orders:[],startDate:new Date},el:"#slot-calendar-internal",template:"#slot-calendar-internal-template",created:function(){this.loadData()},methods:{close:function(){location.hash="",$("#orderData").empty(),$("#orderData").hide()},loadData:function(){var e=this;this.loading=!0,$.getJSON("/panel/dealers/json/",function(t){e.dealers=t,e.loading=!1}),this.loadCalendar()},loadCalendar:function(){var e=this;this.loading=!0;var t=new Date(this.startDate.setHours(12)).toISOString().split("T")[0],a="?date="+t;this.dealerId&&(a=a+"&dealer="+this.dealerId),$.getJSON("/panel/orders/overview/slot-calendar-data/"+a,function(t){e.startDate=new Date(t.start_date),e.orders=t.orders,e.loading=!1})},dayDate:function(e){return this.startDate.addDays(e).getDate()+"."},previousWeek:function(){this.startDate=this.startDate.addDays(-6)(this).loadData()},nextWeek:function(){this.startDate=this.startDate.addDays(8)(this).loadData()}},watch:{dealerId:function(){this.loadCalendar()}},computed:{ordersByDate:function(){var e={};return this.orders.forEach(function(t){var a=t.time_delivery.split(" ")[0];e[a]||(e[a]=[]),t.time_delivery=new Date(t.time_delivery),e[a].push(t)}),e},hours:function(){for(var e=[],t=this,a=8;a<=16;a++)!function(a){for(var n=[],r=1;r<=7;r++){var i=t.startDate.addDays(r),s=i.toISOString().split("T")[0],o=t.ordersByDate[s];o?n.push(o.filter(function(e){return e.time_delivery.getHours()===a})):n.push([])}e.push(n)}(a);return e}}})}},138:function(e,t,a){"use strict";var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],a=0;return t?t.call(e):{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(21),i={},s=function(e){var t=e.status,a=e.results;if("OK"===t){var n=a[0].geometry.location,r=n.lat,i=n.lng;if($("#id_map_lat").val(r),$("#id_map_lon").val(i),company_marker&&google_map){var s=new google.maps.LatLng(r,i);company_marker.setPosition(s),google_map.setCenter(s)}}},o={address:function(e){if(e){var t=e.street_name,a=e.post_code,n=e.post_area;return $("#id_address").val(t),$("#id_zip_code").val(a),$("#id_city").val(n),$(".length#id_map_lat").length&&d(),t}},company:function(e){if(e){var t=e.forretningsadresse||e.postadresse,a=t.adresse,n=t.postnummer,r=t.poststed;$("#id_address").val(a),$("#id_zip_code").val(n),$("#id_city").val(r),$("#id_org_number").val(e.organisasjonsnummer),$("#id_map_lat").length&&d()}return e.navn_title_case}},l=function(e,t,a){void 0===a&&(a={});var r={source:function(e,t){$.getJSON("/panel/json/customer/",$.extend(a,{query:e}),function(e){var a=[];try{for(var r=n(e),s=r.next();!s.done;s=r.next()){var o=s.value,l="cst"+o.id;a.push(l),i[l]=o}}catch(e){d={error:e}}finally{try{s&&!s.done&&(u=r.return)&&u.call(r)}finally{if(d)throw d.error}}t(a);var d,u})},matcher:function(e){return!!e},displayText:function(e){var t=i[e];if(t){var a=t.cars;if(a){var n=a.join(", ");return"<span>"+t.name+"<br><small>"+n+"</small></span>"}return"<span>"+t.name+"</span>"}},minLength:1,updater:m(t)};e.typeahead($.extend(c,r))},d=_.debounce(function(){v($("#id_address").val(),$("#id_zip_code").val(),s)},500),u=function(e,t){void 0===t&&(t=o.address),$("#id_map_lat").length&&(d(),e.on("change paste keyup",d));var a={source:function(e,t){p(e,t)},minLength:1,updater:m(t),displayText:function(e){var t=i[e];if(t){var a=[t.post_code,t.post_area];return t.place&&t.place.toUpperCase()!==t.post_area&&a.push(t.place),"<span>"+t.street_name+"<br><small>"+a.join(", ")+"</small></span>"}return e}};e.typeahead($.extend(c,a))},c={delay:300,fitToElement:!1,highlighter:function(e){return e},items:25,minLength:2},f="",p=function(e,t){return/\s?\d{1,4}[a-zA-Z]?\s*$/.test(e)?t([]):(e=e.replace(/\s\d+\w?$/,"").trim())===f?t([]):(f=e,void $.getJSON("/api/address/",{street_name:e}).done(function(e){var a=[];if(e){try{for(var r=n(e.data),s=r.next();!s.done;s=r.next()){var o=s.value,l="adr"+o.id;o.post_area=o.post_area.toUpperCase(),a.push(l),i[l]=o}}catch(e){d={error:e}}finally{try{s&&!s.done&&(u=r.return)&&u.call(r)}finally{if(d)throw d.error}}t(a);var d,u}}))},m=function(e){return function(t){return e(i[t],t)}},v=function(e,t,a){$.getJSON("https://maps.googleapis.com/maps/api/geocode/json",{address:[e,t,"Norway"].join(", "),key:"AIzaSyAHO78I5BkyTl_JkE5G3OhtrYI3zxBhCbM"},a)},h=function(e,t){$.getJSON("https://data.brreg.no/enhetsregisteret/enhet.json?$filter=startswith(navn,'"+encodeURIComponent(e)+"')&size=10",function(e){var a=[];if(e.data){try{for(var s=n(e.data),o=s.next();!o.done;o=s.next()){var l=o.value;l.navn_title_case=r.toTitleCase(l.navn,3);var d="org"+l.organisasjonsnummer;a.push(d),i[d]=l}}catch(e){u={error:e}}finally{try{o&&!o.done&&(c=s.return)&&c.call(s)}finally{if(u)throw u.error}}t(a);var u,c}})},g=function(e,t,a){void 0===t&&(t=o.company);var n={source:function(e,t){a&&!a()||h(e,t)},updater:m(t),displayText:function(e){var t=i[e];if(t){var a=t.forretningsadresse||t.postadresse,n=a.adresse,r=a.poststed;return"        <span>"+t.navn_title_case+"          <br>          <small>"+[n,r].join(", ")+"</small>        </span>"}return e}};e.attr("autocomplete","off"),e.typeahead($.extend(c,n))};t.default={_updater:m,addressesTypeaheadSource:p,bindAddressSearch:u,bindCompanySearch:g,bindCustomerSearch:l,orgTypeaheadSource:h,searchMap:i,toTitleCase:r.toTitleCase,typeaheadOptions:c}},139:function(e,t,a){"use strict";var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],a=0;return t?t.call(e):{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(20),i=a(9),s=a(8),o=a(21),l=a(140);$(function(){i.getLocalBusy(window.userInfo);var e=$("#sidebar-links");e.length&&l.default(e,window.userInfo);var t=$("#wrapper");$(".sidebar-toggle").click(function(e){e.preventDefault(),e.stopPropagation(),$("#sidebar-wrapper").position().left?(t.removeClass("sidebar-hidden"),t.addClass("toggled")):t.addClass("sidebar-hidden")}),$(".page-content-wrapper").click(function(){t.removeClass("toggled")}),$("body").on("click","a.confirm",function(e){if($(this).hasClass("disabled"))return!1;var t=$(e.target).data("message"),a='    <div class="confirm-box">\n      <p>'+t+'</p>\n      <a href="#" class="btn btn-sm btn-default box-cancel">\n        Avbryt\n        </a>\n      <a href="#" class="btn btn-sm btn-danger box-ok">OK</a>\n      </div>';$("body").append(a),e.preventDefault(),$(document).width()>2200&&$(".confirm-box").css({left:"25%"}),$(".box-cancel").on("click",function(){$(this).parent().remove()});var n=this;return $(".box-ok").on("click",function(){$(this).parent().remove(),window.location.assign(String($(n).attr("href")))}),!1}),$("body").on("click",".btn-print",function(){window.print()}),r.default.bindCustomerSearch($(".quick_search"),function(e){e.url&&window.location.assign(e.url)},{cars:!0});var a=function(e){try{for(var t=n(e),a=t.next();!a.done;a=t.next()){var r=a.value,i=$(r);if(i.length)return i}}catch(e){s={error:e}}finally{try{a&&!a.done&&(o=t.return)&&o.call(t)}finally{if(s)throw s.error}}return;var s,o};$(".modal").on("show.bs.modal",function(){$("body").addClass("body-fixed")}),$(".modal").on("hide.bs.modal",function(){$("body").removeClass("body-fixed")});var d=function(){var e=$("#reg-container"),t=$("#reg-header"),n=$("#reg-body"),i=a(["#id_reg_number","#id_car_reg_number"]),l=a(["#id_chassis_number","#id_car_chassis_number"]),d=a(["#id_color","#id_car_color"]);s.default.date("input.datepicker-widget"),i&&r.default.bind_car_info(i,{done:function(a){var r=a.color,i=a.brand,s=a.chassis,u=a.url;e.attr("class","bs-callout bs-callout-success"),t.html("Fant informasjon om bilen."),n.html('\n              <p>Informasjonen er fylt ut nedenfor.</p>\n              <p>Du kan finne mer informasjon om bilen <a target="veivesen" href="'+u+'">hos Veivesenet.</a></p>'),s&&l&&l.val(s),i&&$("#id_car_type").val(o.toTitleCase(i.join(""))),r&&d&&d.val(r)},fail:function(a){e.attr("class","bs-callout bs-callout-warning"),t.html('<i class=" text-danger fas fa-exclamation-circle"></i>\n                        Fant ingen informasjon på denne bilen.'),n.html(a.responseJSON?a.responseJSON.error:"Ukjent feil. Kan det være internetten?")},start:function(){e.attr("class","bs-callout bs-callout-info"),t.html('<i class="text-info fas fa-spinner fa-spin"></i>\n            <p>Henter informasjon om bil…</p>')},whileWriting:function(){e.hasClass("while-writing")||(e.attr("class","bs-callout bs-callout-info while-writing"),t.html('<i class="text-info fas fa-info-circle"></i>\n                Henting av bil-info'),n.html("                Skriv inn et gyldig registreringsnummer,                 så hentes det automatisk inn informasjon om bilen.                 Eks: PP12345"))}}),s.default.time("input.datepicker-widget-time,input.timeinput"),s.default.range("input.datepicker-widget-range",{defaultDate:[$("#date-from").val(),$("#date-to").val()]},["#date-from","#date-to"])};d(),$("body").on("click",".modal-link",function(){if($(this).hasClass("disabled"))return!1;var e=$(".modal"),t=$(this).data("url");return e.html("Laster..."),e.modal("show"),e.load(t,function(){d(),e.find(".form-async").ajaxForm({delegation:!0,target:".modal",success:function(){$.get(location.href,function(t){$(e.find(".form-async .alert.alert-success")[0]).length&&e.modal("hide"),$("#main").replaceWith($(t).filter("#main"))})}})}),!0})})},140:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var r=a(141),i=a(142),s=function(e,t){return Object.keys(r.sidebarItems).map(function(e){return r.sidebarItems[e]}).filter(function(a){var n=a.tags,r=a.requires;return n.indexOf(e)>=0&&(!r||r(t))}).map(function(e){var a=e.icon,n=e.title,r=e.url,i=e.modalLink,s=r instanceof Function?r(t):r;return"<li>\n                  "+(i?'<a href="#" class="modal-link" data-url="'+s+'">':'<a href="'+s+'">')+'\n                    <i class="'+a+'"></i>\n                    '+n+"\n                  </a>\n                </li>"}).join("")},o=function(e,t){if(e.length){var a=r.activeTags.map(function(e){return r.availableTags[e]}).filter(function(e){return!e.requires||e.requires(t)}).map(function(e){var a=s(e.id,t);if(a)return i.linkTemplate(n({links:a},e))});if(!a)return;var o='<ul class="sidebar-nav visible-block">'+a.join("")+"<ul>";e.html(o)}};t.default=o},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n;!function(e){e[e.Registration=0]="Registration",e[e.Admin=1]="Admin",e[e.System=2]="System"}(n=t.Tags||(t.Tags={}));var r;!function(e){e[e.OverviewDaily=0]="OverviewDaily",e[e.OverviewWeekly=1]="OverviewWeekly",e[e.OverviewOrders=2]="OverviewOrders",e[e.Customers=3]="Customers",e[e.Dealers=4]="Dealers",e[e.CustomerCategories=5]="CustomerCategories",e[e.MembershipPlans=6]="MembershipPlans",e[e.SearchOrders=7]="SearchOrders",e[e.Products=8]="Products",e[e.Letters=9]="Letters",e[e.Employees=10]="Employees",e[e.Holidays=11]="Holidays",e[e.DealsActive=12]="DealsActive",e[e.SMSTemplates=13]="SMSTemplates",e[e.Statistics=14]="Statistics",e[e.Users=15]="Users",e[e.Monitor=16]="Monitor",e[e.Touch=17]="Touch",e[e.Password=18]="Password"}(r=t.Links||(t.Links={})),t.sidebarItems=(i={},i[r.OverviewDaily]={icon:"fas fa-calendar",id:r.OverviewDaily,tags:[n.Registration],title:"Ukeoversikt",url:"/panel/overview/weekly/"},i[r.OverviewWeekly]={icon:"fas fa-calendar-alt",id:r.OverviewWeekly,tags:[n.Registration],title:"Dagsoversikt",url:"/panel/overview/daily/"},i[r.OverviewOrders]={icon:"fas fa-table",id:r.OverviewOrders,requires:function(e){return e.company.has_logistics_module},tags:[n.Registration],title:"Ordrebehandling",url:"/panel/orders/overview/"},i[r.Customers]={icon:"fas fa-users",id:r.Customers,tags:[n.Registration],title:"Kunder",url:"/panel/customers/"},i[r.Dealers]={icon:"fas fa-industry",id:r.Dealers,requires:function(e){return e.company.has_logistics_module},tags:[n.Registration],title:"Forhandlere",url:"/panel/dealers/"},i[r.CustomerCategories]={icon:"fas fa-user-circle",id:r.CustomerCategories,tags:[n.Admin],title:"Kundegrupper",url:"/panel/customers/categories/"},i[r.MembershipPlans]={icon:"fas fa-star-exclamation",id:r.MembershipPlans,requires:function(e){return e.company.has_customer_club},tags:[n.Admin],title:"Kundeklubb",url:"/panel/customers/categories/"},i[r.SearchOrders]={icon:"fas fa-search",id:r.SearchOrders,requires:function(e){return e.company.has_logistics_module},tags:[n.Admin],title:"Ordresøk",url:"/panel/orders/"},i[r.Products]={icon:"fas fa-cubes",id:r.Products,tags:[n.Admin],title:"Produkter",url:"/panel/products/"},i[r.Letters]={icon:"fas fa-envelope",id:r.Letters,tags:[n.Admin],title:"Brev",url:"/panel/letters/"},i[r.Employees]={icon:"far fa-users",id:r.Employees,tags:[n.Admin],title:"Ansatte",url:"/panel/employees/"},i[r.Holidays]={icon:"fas fa-tree",id:r.Holidays,tags:[n.Admin],title:"Feriedager",url:"/panel/holidays/"},i[r.DealsActive]={icon:"fas fa-comments",id:r.DealsActive,tags:[n.Admin],title:"SMS-tilbud",url:"/panel/deals/active/"},i[r.SMSTemplates]={icon:"fas fa-comment-alt",id:r.SMSTemplates,requires:function(e){return e.company.has_sms_templates},tags:[n.Admin],title:"Meldingsmaler",url:"/panel/templates/"},i[r.Statistics]={icon:"fas fa-chart-line",id:r.Statistics,tags:[n.Admin],title:"Statistikk",url:"/panel/statistics/"},i[r.Users]={icon:"fas fa-user",id:r.Users,requires:function(e){return e.is_admin},tags:[n.System],title:"Brukere",url:"/panel/users/"},i[r.Monitor]={icon:"fas fa-tachometer-alt",id:r.Monitor,requires:function(e){return e.is_admin},tags:[n.System],title:"Monitor",url:"/panel/overview/monitor/"},i[r.Touch]={icon:"fas fa-wrench",id:r.Touch,requires:function(e){return e.is_admin},tags:[n.System],title:"Touchpanel",url:function(e){return"/touch/login/"+e.company.url_name+"/"}},i[r.Password]={icon:"fas fa-lock",id:r.Password,modalLink:!0,tags:[n.System],title:"Passord",url:"/panel/user/password/"},i),t.availableTags=(s={},s[n.Registration]={expanded:!0,icon:"fas fa-edit",id:n.Registration,title:"Registrering"},s[n.Admin]={expanded:!0,icon:"fas fa-user-plus",id:n.Admin,requires:function(e){return e.is_admin},title:"Administrasjon"},s[n.System]={expanded:!0,icon:"fas fa-cog",id:n.System,title:"System"},s),t.activeTags=[n.Registration,n.Admin,n.System];var i,s},142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linkTemplate=function(e){return'<li>\n  <h5>\n    <i class="'+e.icon+'" > </i>\n    '+e.title+"\n  </h5>\n  <ul>"+e.links+"</ul>\n</li>"},t.sidebarTemplate=function(e){return'<ul class="sidebar-nav visible-block">'+e+"<ul>"}},20:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var r=a(133),i=a(9),s=a(134),o=a(135),l=a(136),d=a(137),u=a(138),c=n({bind_car_info:s.default,booking:r.default,busy_calendar:i.default,list_group_checked:o.default,slot_calendar:l.default,slot_calendar_internal:d.default},u.default);t.default=c,Date.prototype.getWeekNumber=function(){this.setHours(0,0,0,0),this.setDate(this.getDate()+3-(this.getDay()+6)%7);var e=new Date(this.getFullYear(),0,4);return 1+Math.round(((this.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)}},21:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["Båt","og","Bil","4WD"],r=n.map(function(e){return e.toUpperCase()});t.toTitleCase=function(e,t){return void 0===t&&(t=0),e.split(" ").map(function(e){var a=e.toUpperCase(),i=r.indexOf(a);return-1!==i?n[i]:a.length>t?a[0]+a.substr(1).toLowerCase():e}).join(" ")}},22:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(23);a(24),a(32);var r=a(20);window.carCareFunc=r.default,a(139),n.load({google:{families:["Mukta Mahee:400,300,600:latin,latin-ext"]}}),XMLHttpRequest.prototype.open=function(e){return function(t,a,n,r,i){n||console.warn("xhr call: "+a+" isAsync: "+n),e.apply(this,arguments)}}(XMLHttpRequest.prototype.open)},24:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(25),a(27),a(28),a(29),a(30),a(31)},25:function(e,t){},27:function(e,t){},28:function(e,t){},29:function(e,t){},30:function(e,t){},31:function(e,t){},8:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,i=a.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}return s};Object.defineProperty(t,"__esModule",{value:!0});var i=a(15),s=a(63),o=a(64),l=a(65),d=a(9),u=l.inputtypes.date;t.datepickerDefaultOptions={altFormat:"j. F Y",altInput:!0,dateFormat:"Y-m-d",locale:o.Norwegian,minDate:new Date(1900,1,1),time_24hr:!0,weekNumbers:!0},t.datepicker=function(e,a){return void 0===a&&(a={}),i.default(e,n({},t.datepickerDefaultOptions,a))},t.default={addBusy:function(e){d.default(window.userInfo).then(function(t){t&&(e.config.onDayCreate.push(function(e,a,n,i){var s=i.dateObj,o=r([s.getFullYear(),s.getMonth()+1,s.getDate()],3),l=o[0],d=o[1],u=o[2];t[l]&&t[l][d]&&t[l][d][u]&&(i.innerHTML+="<span class='event'></span>")}),e.redraw())})},date:function(e,a){void 0===a&&(a={});var n=$(e);if(n.prop("type","date"),!(n.is("input")&&$(window).width()<500&&u))return t.datepicker(e,a)},datetime:function(e,a){return void 0===a&&(a={}),t.datepicker(e,n({altFormat:"d. F Y, k\\l. H:i",dateFormat:"Y-m-d H:i:S",defaultHour:12,enableTime:!0,parseDate:function(e){return i.default.parseDate(e,"d.m.Y H:i")||new Date}},a))},flatpickr:i.default,range:function(e,a,r){void 0===a&&(a={});var s=a.dateFormat||"Y-m-d";return t.datepicker(e,n({altFormat:"d/m-y",dateFormat:s,mode:"range",onChange:function(e,t,a){if(r&&e.length){var n=i.default.formatDate(e[0],s);$(r[0]).val(n),$(r[1]).val(2===e.length?i.default.formatDate(e[1],s):n)}}},a))},time:function(e,a){return void 0===a&&(a={}),t.datepicker(e,n({allowInput:!0,altInput:!1,dateFormat:"H:i",defaultHour:12,enableTime:!0,noCalendar:!0},a))},week:function(e,a){return void 0===a&&(a={}),t.datepicker(e,n({plugins:[new s({})]},a))}}},9:function(e,t,a){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});t.getLocalBusy=function(e){var t=localStorage.getItem("busy"),a=t&&JSON.parse(t);return r(e,a)};var r=function(e,t){return t&&e.company.id===t.company_id?t:(localStorage.removeItem("busy"),null)};t.default=function(e){return new Promise(function(a,r){var i,s=t.getLocalBusy(e),o=e.company;if(s){var l=s.date_updated;l&&(i=l)}$.getJSON("/api/"+o.id+"/appointments/busy/",{key:o.api_key,updatedAt:i}).done(function(r){var i=r.message,s=n({},t.getLocalBusy(e),i);return window.localStorage.setItem("busy",JSON.stringify(s)),a(s)})})}}},[22]);