define(["can/util/library","can/observe","can/util/object"],function(t){var e=function(t){var e={};for(var n in t)("object"!=typeof t[n]||null===t[n]||t[n]instanceof Date)&&(e[n]=t[n]);return e};return t.extend(t.Observe.prototype,{backup:function(){return this._backupStore=this._attrs(),this},isDirty:function(e){return this._backupStore&&!t.Object.same(this._attrs(),this._backupStore,void 0,void 0,void 0,!!e)},restore:function(t){var n=t?this._backupStore:e(this._backupStore);return this.isDirty(t)&&this._attrs(n),this}}),t.Observe});