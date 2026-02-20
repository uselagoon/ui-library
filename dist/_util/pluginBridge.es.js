class r {
  listeners = /* @__PURE__ */ new Map();
  getRegisteredEvents() {
    return Array.from(this.listeners.keys());
  }
  subscribe(s, e) {
    return this.listeners.has(s) || this.listeners.set(s, /* @__PURE__ */ new Set()), this.listeners.get(s).add(e), () => this.unsubscribe(s, e);
  }
  unsubscribe(s, e) {
    this.listeners.get(s)?.delete(e);
  }
  publish(s, e) {
    const i = this.listeners.get(s);
    i && i.forEach((t) => t(e));
  }
}
const n = new r();
typeof window < "u" && (window.__pluginBridge = n);
export {
  n as default
};
