webpackJsonp([6],{"./app/containers/QuotaPage/constants.js":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return u}),a.d(e,"c",function(){return s}),a.d(e,"g",function(){return o}),a.d(e,"h",function(){return n}),a.d(e,"i",function(){return c}),a.d(e,"j",function(){return i}),a.d(e,"k",function(){return l}),a.d(e,"d",function(){return d}),a.d(e,"e",function(){return p}),a.d(e,"f",function(){return g});var r="Quota/UPDATE_QUOTA_FORM",u="Quota/ADD_QUOTA_RESULTS",s="Quota/RESET_QUOTA_STATUS",o="Quota/GET_QUOTA",n="Quota/SELECT_FILTER",c="Quota/ADD_PARCEL",i="Quota/DELETE_PARCEL",l="Quota/UPDATE_PARCEL_DETAIL",d="Quota/SET_QUERY_STATUS_WAITING",p="Quota/INCREMENT_QUERY_STATUS_SUCCESS",g="Quota/INCREMENT_QUERY_STATUS_FAILURE"},"./app/containers/QuotaPage/reducer.js":function(t,e,a){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];switch(e.type){case s.a:var r=t.get("quotaForm");return t.set("quotaForm",r.set(e.payload.key,e.payload.value));case s.b:return t.set("quotaResults",t.get("quotaResults").concat(a.i(u.List)(e.payload)));case s.c:return t.set("quotaResults",a.i(u.fromJS)([])).set("queryStatus",a.i(u.fromJS)({started:!1,waiting:0,success:0,failure:0}));case s.h:var n=e.payload.key,c=t.get("filters").get(n).filterNot(function(t){return t===e.payload.value}).concat(e.payload.selected?[e.payload.value]:[]);return t.set("filters",t.get("filters").set(n,c));case s.i:var i=t.get("quotaForm"),l=i.get("parcels"),d=l.slice(0,e.payload.index).push(a.i(u.fromJS)({parcelWeight:e.payload.weight,parcelLength:e.payload.length,parcelWidth:e.payload.width,parcelHeight:e.payload.height})).concat(l.slice(e.payload.index));return t.set("quotaForm",i.set("parcels",d));case s.j:var p=t.get("quotaForm"),g=p.get("parcels"),y=g.slice(0,e.payload).concat(g.slice(e.payload+1));return t.set("quotaForm",p.set("parcels",y));case s.k:var f=t.get("quotaForm").get("parcels").update(e.payload.index,function(t){return t.set(e.payload.key,e.payload.value)});return t.set("quotaForm",t.get("quotaForm").set("parcels",f));case s.d:return t.set("queryStatus",t.get("queryStatus").set("waiting",e.payload).set("started",!0));case s.e:var S=t.get("queryStatus").get("success"),q=t.get("queryStatus").get("waiting");return t.set("queryStatus",t.get("queryStatus").set("success",S+1).set("waiting",q-1));case s.f:var E=t.get("queryStatus").get("failure"),T=t.get("queryStatus").get("waiting");return t.set("queryStatus",t.get("queryStatus").set("failure",E+1).set("waiting",T-1));default:return t}}Object.defineProperty(e,"__esModule",{value:!0});var u=a("./node_modules/immutable/dist/immutable.js"),s=(a.n(u),a("./app/containers/QuotaPage/constants.js")),o=a.i(u.fromJS)({username:"",quotaForm:{fromCountry:"GBR",fromPostcode:"",toCountry:"CHN",toPostcode:"",parcels:[{parcelWeight:7,parcelLength:44,parcelWidth:32,parcelHeight:26}]},quotaResults:[],queryStatus:{started:!1,waiting:0,success:0,failure:0},filters:{deliveryTime:[],carrier:[]}});e.default=r}});