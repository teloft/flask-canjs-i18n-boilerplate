define(["can/util/library","can/observe/attributes"],function(t){t.classize=function(e,n){for(var r=e.split(t.undHash),i=0;i<r.length;i++)r[i]=t.capitalize(r[i]);return r.join(n||"")};var e=t.classize,n=t.Observe.prototype,r=n.__set;return n.__set=function(n,i,o,s,a){var u=e(n),l="set"+u,c=function(e){var r=a&&a.call(f,e);return r!==!1&&t.trigger(f,"error",[n,e],!0),!1},f=this;if(!this[l]||void 0!==(i=this[l](i,function(t){r.call(f,n,t,o,s,c)},c)))return r.call(f,n,i,o,s,c),this},t.Observe});