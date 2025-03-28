!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
    "use strict";
    const t = "transitionend", e = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        }, i = t => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null
        }, n = t => {
            const i = e(t);
            return i ? document.querySelector(i) : null
        }, r = e => {
            e.dispatchEvent(new Event(t))
        }, s = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        o = t => s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        a = t => {
            if (!s(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
        }, d = () => {
        }, u = t => {
            t.offsetHeight
        }, p = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, h = [],
        f = () => "rtl" === document.documentElement.dir, m = t => {
            var e;
            e = () => {
                const e = p();
                if (e) {
                    const i = t.NAME, n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (h.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of h) t()
            })), h.push(e)) : e()
        }, g = t => {
            "function" == typeof t && t()
        }, v = (e, i, n = !0) => {
            if (!n) return void g(e);
            const s = (t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
                const n = Number.parseFloat(e), r = Number.parseFloat(i);
                return n || r ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(i) + 5;
            let o = !1;
            const a = ({target: n}) => {
                n === i && (o = !0, i.removeEventListener(t, a), g(e))
            };
            i.addEventListener(t, a), setTimeout((() => {
                o || r(i)
            }), s)
        }, y = (t, e, i, n) => {
            const r = t.length;
            let s = t.indexOf(e);
            return -1 === s ? !i && n ? t[r - 1] : t[0] : (s += i ? 1 : -1, n && (s = (s + r) % r), t[Math.max(0, Math.min(s, r - 1))])
        }, b = /[^.]*(?=\..*)\.|.*/, w = /\..*/, _ = /::\d+$/, x = {};
    let E = 1;
    const T = {mouseenter: "mouseover", mouseleave: "mouseout"},
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function S(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }

    function M(t) {
        const e = S(t);
        return t.uidEvent = e, x[e] = x[e] || {}, x[e]
    }

    function P(t, e, i = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }

    function O(t, e, i) {
        const n = "string" == typeof e, r = n ? i : e || i;
        let s = I(t);
        return C.has(s) || (s = t), [n, r, s]
    }

    function D(t, e, i, n, r) {
        if ("string" != typeof e || !t) return;
        let [s, o, a] = O(e, i, n);
        if (e in T) {
            const t = t => function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            o = t(o)
        }
        const l = M(t), c = l[a] || (l[a] = {}), d = P(c, o, s ? i : null);
        if (d) return void (d.oneOff = d.oneOff && r);
        const u = S(o, e.replace(b, "")), p = s ? function (t, e, i) {
            return function n(r) {
                const s = t.querySelectorAll(e);
                for (let {target: o} = r; o && o !== this; o = o.parentNode) for (const a of s) if (a === o) return L(r, {delegateTarget: o}), n.oneOff && z.off(t, r.type, e, i), i.apply(o, [r])
            }
        }(t, i, o) : function (t, e) {
            return function i(n) {
                return L(n, {delegateTarget: t}), i.oneOff && z.off(t, n.type, e), e.apply(t, [n])
            }
        }(t, o);
        p.delegationSelector = s ? i : null, p.callable = o, p.oneOff = r, p.uidEvent = u, c[u] = p, t.addEventListener(a, p, s)
    }

    function k(t, e, i, n, r) {
        const s = P(e[i], n, r);
        s && (t.removeEventListener(i, s, Boolean(r)), delete e[i][s.uidEvent])
    }

    function A(t, e, i, n) {
        const r = e[i] || {};
        for (const s of Object.keys(r)) if (s.includes(n)) {
            const n = r[s];
            k(t, e, i, n.callable, n.delegationSelector)
        }
    }

    function I(t) {
        return t = t.replace(w, ""), T[t] || t
    }

    const z = {
        on(t, e, i, n) {
            D(t, e, i, n, !1)
        }, one(t, e, i, n) {
            D(t, e, i, n, !0)
        }, off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [r, s, o] = O(e, i, n), a = o !== e, l = M(t), c = l[o] || {}, d = e.startsWith(".");
            if (void 0 === s) {
                if (d) for (const i of Object.keys(l)) A(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const n = i.replace(_, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        k(t, l, o, e.callable, e.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                k(t, l, o, s, r ? i : null)
            }
        }, trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = p();
            let r = null, s = !0, o = !0, a = !1;
            e !== I(e) && n && (r = n.Event(e, i), n(t).trigger(r), s = !r.isPropagationStopped(), o = !r.isImmediatePropagationStopped(), a = r.isDefaultPrevented());
            let l = new Event(e, {bubbles: s, cancelable: !0});
            return l = L(l, i), a && l.preventDefault(), o && t.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
        }
    };

    function L(t, e) {
        for (const [i, n] of Object.entries(e || {})) try {
            t[i] = n
        } catch (e) {
            Object.defineProperty(t, i, {configurable: !0, get: () => n})
        }
        return t
    }

    const $ = new Map, j = {
        set(t, e, i) {
            $.has(t) || $.set(t, new Map);
            const n = $.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        }, get: (t, e) => $.has(t) && $.get(t).get(e) || null, remove(t, e) {
            if (!$.has(t)) return;
            const i = $.get(t);
            i.delete(e), 0 === i.size && $.delete(t)
        }
    };

    function N(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function F(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }

    const R = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${F(e)}`, i)
        }, removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${F(e)}`)
        }, getDataAttributes(t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = N(t.dataset[n])
            }
            return e
        }, getDataAttribute: (t, e) => N(t.getAttribute(`data-bs-${F(e)}`))
    };

    class B {
        static get Default() {
            return {}
        }

        static get DefaultType() {
            return {}
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t
        }

        _mergeConfigObj(t, e) {
            const i = s(e) ? R.getDataAttribute(e, "config") : {};
            return {...this.constructor.Default, ..."object" == typeof i ? i : {}, ...s(e) ? R.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {}}
        }

        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const n of Object.keys(e)) {
                const r = e[n], o = t[n],
                    a = s(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)
            }
            var i
        }
    }

    class H extends B {
        constructor(t, e) {
            super(), (t = o(t)) && (this._element = t, this._config = this._getConfig(e), j.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            j.remove(this._element, this.constructor.DATA_KEY), z.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }

        _queueCallback(t, e, i = !0) {
            v(t, e, i)
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        static getInstance(t) {
            return j.get(o(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.2.3"
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }

        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }

    const W = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`, r = t.NAME;
        z.on(document, i, `[data-bs-dismiss="${r}"]`, (function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const s = n(this) || this.closest(`.${r}`);
            t.getOrCreateInstance(s)[e]()
        }))
    };

    class Y extends H {
        static get NAME() {
            return "alert"
        }

        close() {
            if (z.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }

        _destroyElement() {
            this._element.remove(), z.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Y.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    W(Y, "close"), m(Y);
    const q = '[data-bs-toggle="button"]';

    class X extends H {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = X.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    z.on(document, "click.bs.button.data-api", q, (t => {
        t.preventDefault();
        const e = t.target.closest(q);
        X.getOrCreateInstance(e).toggle()
    })), m(X);
    const V = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n;) i.push(n), n = n.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                return this.find(e, t).filter((t => !l(t) && a(t)))
            }
        }, G = {endCallback: null, leftCallback: null, rightCallback: null},
        U = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

    class Z extends B {
        constructor(t, e) {
            super(), this._element = t, t && Z.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }

        static get Default() {
            return G
        }

        static get DefaultType() {
            return U
        }

        static get NAME() {
            return "swipe"
        }

        dispose() {
            z.off(this._element, ".bs.swipe")
        }

        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }

        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }

        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }

        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }

        _initEvents() {
            this._supportPointerEvents ? (z.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), z.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (z.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), z.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), z.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }

        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }

        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }

    const K = "next", Q = "prev", J = "left", tt = "right", et = "slid.bs.carousel", it = "carousel", nt = "active",
        rt = {ArrowLeft: tt, ArrowRight: J},
        st = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, ot = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };

    class at extends H {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle()
        }

        static get Default() {
            return st
        }

        static get DefaultType() {
            return ot
        }

        static get NAME() {
            return "carousel"
        }

        next() {
            this._slide(K)
        }

        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }

        prev() {
            this._slide(Q)
        }

        pause() {
            this._isSliding && r(this._element), this._clearInterval()
        }

        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }

        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? z.one(this._element, et, (() => this.cycle())) : this.cycle())
        }

        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void z.one(this._element, et, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? K : Q;
            this._slide(n, e[t])
        }

        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }

        _addEventListeners() {
            this._config.keyboard && z.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (z.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), z.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && Z.isSupported() && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            for (const t of V.find(".carousel-item img", this._element)) z.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(J)),
                rightCallback: () => this._slide(this._directionToOrder(tt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new Z(this._element, t)
        }

        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = rt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }

        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }

        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = V.findOne(".active", this._indicatorsElement);
            e.classList.remove(nt), e.removeAttribute("aria-current");
            const i = V.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(nt), i.setAttribute("aria-current", "true"))
        }

        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }

        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === K, r = e || y(this._getItems(), i, n, this._config.wrap);
            if (r === i) return;
            const s = this._getItemIndex(r), o = e => z.trigger(this._element, e, {
                relatedTarget: r,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: s
            });
            if (o("slide.bs.carousel").defaultPrevented) return;
            if (!i || !r) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(s), this._activeElement = r;
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(c), u(r), i.classList.add(l), r.classList.add(l), this._queueCallback((() => {
                r.classList.remove(l, c), r.classList.add(nt), i.classList.remove(nt, c, l), this._isSliding = !1, o(et)
            }), i, this._isAnimated()), a && this.cycle()
        }

        _isAnimated() {
            return this._element.classList.contains("slide")
        }

        _getActive() {
            return V.findOne(".active.carousel-item", this._element)
        }

        _getItems() {
            return V.find(".carousel-item", this._element)
        }

        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }

        _directionToOrder(t) {
            return f() ? t === J ? Q : K : t === J ? K : Q
        }

        _orderToDirection(t) {
            return f() ? t === Q ? J : tt : t === Q ? tt : J
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = at.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }

    z.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function (t) {
        const e = n(this);
        if (!e || !e.classList.contains(it)) return;
        t.preventDefault();
        const i = at.getOrCreateInstance(e), r = this.getAttribute("data-bs-slide-to");
        return r ? (i.to(r), void i._maybeEnableCycle()) : "next" === R.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), z.on(window, "load.bs.carousel.data-api", (() => {
        const t = V.find('[data-bs-ride="carousel"]');
        for (const e of t) at.getOrCreateInstance(e)
    })), m(at);
    const lt = "show", ct = "collapse", dt = "collapsing", ut = '[data-bs-toggle="collapse"]',
        pt = {parent: null, toggle: !0}, ht = {parent: "(null|element)", toggle: "boolean"};

    class ft extends H {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const n = V.find(ut);
            for (const t of n) {
                const e = i(t), n = V.find(e).filter((t => t === this._element));
                null !== e && n.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return pt
        }

        static get DefaultType() {
            return ht
        }

        static get NAME() {
            return "collapse"
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => ft.getOrCreateInstance(t, {toggle: !1})))), t.length && t[0]._isTransitioning) return;
            if (z.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(dt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(dt), this._element.classList.add(ct, lt), this._element.style[e] = "", z.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (z.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(dt), this._element.classList.remove(ct, lt);
            for (const t of this._triggerArray) {
                const e = n(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(dt), this._element.classList.add(ct), z.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }

        _isShown(t = this._element) {
            return t.classList.contains(lt)
        }

        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = o(t.parent), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(ut);
            for (const e of t) {
                const t = n(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }

        _getFirstLevelChildren(t) {
            const e = V.find(":scope .collapse .collapse", this._config.parent);
            return V.find(t, this._config.parent).filter((t => !e.includes(t)))
        }

        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }

        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function () {
                const i = ft.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }

    z.on(document, "click.bs.collapse.data-api", ut, (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this), n = V.find(e);
        for (const t of n) ft.getOrCreateInstance(t, {toggle: !1}).toggle()
    })), m(ft);
    var mt = "top", gt = "bottom", vt = "right", yt = "left", bt = "auto", wt = [mt, gt, vt, yt], _t = "start",
        xt = "end", Et = "clippingParents", Tt = "viewport", Ct = "popper", St = "reference",
        Mt = wt.reduce((function (t, e) {
            return t.concat([e + "-" + _t, e + "-" + xt])
        }), []), Pt = [].concat(wt, [bt]).reduce((function (t, e) {
            return t.concat([e, e + "-" + _t, e + "-" + xt])
        }), []), Ot = "beforeRead", Dt = "read", kt = "afterRead", At = "beforeMain", It = "main", zt = "afterMain",
        Lt = "beforeWrite", $t = "write", jt = "afterWrite", Nt = [Ot, Dt, kt, At, It, zt, Lt, $t, jt];

    function Ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Rt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function Bt(t) {
        return t instanceof Rt(t).Element || t instanceof Element
    }

    function Ht(t) {
        return t instanceof Rt(t).HTMLElement || t instanceof HTMLElement
    }

    function Wt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Rt(t).ShadowRoot || t instanceof ShadowRoot)
    }

    const Yt = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, r = e.elements[t];
                Ht(r) && Ft(r) && (Object.assign(r.style, i), Object.keys(n).forEach((function (t) {
                    var e = n[t];
                    !1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, i = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var n = e.elements[t], r = e.attributes[t] || {},
                        s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    Ht(n) && Ft(n) && (Object.assign(n.style, s), Object.keys(r).forEach((function (t) {
                        n.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };

    function qt(t) {
        return t.split("-")[0]
    }

    var Xt = Math.max, Vt = Math.min, Gt = Math.round;

    function Ut() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map((function (t) {
            return t.brand + "/" + t.version
        })).join(" ") : navigator.userAgent
    }

    function Zt() {
        return !/^((?!chrome|android).)*safari/i.test(Ut())
    }

    function Kt(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), r = 1, s = 1;
        e && Ht(t) && (r = t.offsetWidth > 0 && Gt(n.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && Gt(n.height) / t.offsetHeight || 1);
        var o = (Bt(t) ? Rt(t) : window).visualViewport, a = !Zt() && i, l = (n.left + (a && o ? o.offsetLeft : 0)) / r,
            c = (n.top + (a && o ? o.offsetTop : 0)) / s, d = n.width / r, u = n.height / s;
        return {width: d, height: u, top: c, right: l + d, bottom: c + u, left: l, x: l, y: c}
    }

    function Qt(t) {
        var e = Kt(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Jt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && Wt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function te(t) {
        return Rt(t).getComputedStyle(t)
    }

    function ee(t) {
        return ["table", "td", "th"].indexOf(Ft(t)) >= 0
    }

    function ie(t) {
        return ((Bt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ne(t) {
        return "html" === Ft(t) ? t : t.assignedSlot || t.parentNode || (Wt(t) ? t.host : null) || ie(t)
    }

    function re(t) {
        return Ht(t) && "fixed" !== te(t).position ? t.offsetParent : null
    }

    function se(t) {
        for (var e = Rt(t), i = re(t); i && ee(i) && "static" === te(i).position;) i = re(i);
        return i && ("html" === Ft(i) || "body" === Ft(i) && "static" === te(i).position) ? e : i || function (t) {
            var e = /firefox/i.test(Ut());
            if (/Trident/i.test(Ut()) && Ht(t) && "fixed" === te(t).position) return null;
            var i = ne(t);
            for (Wt(i) && (i = i.host); Ht(i) && ["html", "body"].indexOf(Ft(i)) < 0;) {
                var n = te(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function oe(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function ae(t, e, i) {
        return Xt(t, Vt(e, i))
    }

    function le(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function ce(t, e) {
        return e.reduce((function (e, i) {
            return e[i] = t, e
        }), {})
    }

    const de = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, i = t.state, n = t.name, r = t.options, s = i.elements.arrow, o = i.modifiersData.popperOffsets,
                a = qt(i.placement), l = oe(a), c = [yt, vt].indexOf(a) >= 0 ? "height" : "width";
            if (s && o) {
                var d = function (t, e) {
                        return le("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : ce(t, wt))
                    }(r.padding, i), u = Qt(s), p = "y" === l ? mt : yt, h = "y" === l ? gt : vt,
                    f = i.rects.reference[c] + i.rects.reference[l] - o[l] - i.rects.popper[c],
                    m = o[l] - i.rects.reference[l], g = se(s),
                    v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, y = f / 2 - m / 2, b = d[p],
                    w = v - u[c] - d[h], _ = v / 2 - u[c] / 2 + y, x = ae(b, _, w), E = l;
                i.modifiersData[n] = ((e = {})[E] = x, e.centerOffset = x - _, e)
            }
        }, effect: function (t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Jt(e.elements.popper, n) && (e.elements.arrow = n)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function ue(t) {
        return t.split("-")[1]
    }

    var pe = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function he(t) {
        var e, i = t.popper, n = t.popperRect, r = t.placement, s = t.variation, o = t.offsets, a = t.position,
            l = t.gpuAcceleration, c = t.adaptive, d = t.roundOffsets, u = t.isFixed, p = o.x, h = void 0 === p ? 0 : p,
            f = o.y, m = void 0 === f ? 0 : f, g = "function" == typeof d ? d({x: h, y: m}) : {x: h, y: m};
        h = g.x, m = g.y;
        var v = o.hasOwnProperty("x"), y = o.hasOwnProperty("y"), b = yt, w = mt, _ = window;
        if (c) {
            var x = se(i), E = "clientHeight", T = "clientWidth";
            x === Rt(i) && "static" !== te(x = ie(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (r === mt || (r === yt || r === vt) && s === xt) && (w = gt, m -= (u && x === _ && _.visualViewport ? _.visualViewport.height : x[E]) - n.height, m *= l ? 1 : -1), r !== yt && (r !== mt && r !== gt || s !== xt) || (b = vt, h -= (u && x === _ && _.visualViewport ? _.visualViewport.width : x[T]) - n.width, h *= l ? 1 : -1)
        }
        var C, S = Object.assign({position: a}, c && pe), M = !0 === d ? function (t) {
            var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
            return {x: Gt(e * n) / n || 0, y: Gt(i * n) / n || 0}
        }({x: h, y: m}) : {x: h, y: m};
        return h = M.x, m = M.y, l ? Object.assign({}, S, ((C = {})[w] = y ? "0" : "", C[b] = v ? "0" : "", C.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", C)) : Object.assign({}, S, ((e = {})[w] = y ? m + "px" : "", e[b] = v ? h + "px" : "", e.transform = "", e))
    }

    const fe = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, r = void 0 === n || n, s = i.adaptive,
                o = void 0 === s || s, a = i.roundOffsets, l = void 0 === a || a, c = {
                    placement: qt(e.placement),
                    variation: ue(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: r,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, he(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: o,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, he(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    };
    var me = {passive: !0};
    const ge = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, i = t.instance, n = t.options, r = n.scroll, s = void 0 === r || r, o = n.resize,
                a = void 0 === o || o, l = Rt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return s && c.forEach((function (t) {
                t.addEventListener("scroll", i.update, me)
            })), a && l.addEventListener("resize", i.update, me), function () {
                s && c.forEach((function (t) {
                    t.removeEventListener("scroll", i.update, me)
                })), a && l.removeEventListener("resize", i.update, me)
            }
        }, data: {}
    };
    var ve = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function ye(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return ve[t]
        }))
    }

    var be = {start: "end", end: "start"};

    function we(t) {
        return t.replace(/start|end/g, (function (t) {
            return be[t]
        }))
    }

    function _e(t) {
        var e = Rt(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function xe(t) {
        return Kt(ie(t)).left + _e(t).scrollLeft
    }

    function Ee(t) {
        var e = te(t), i = e.overflow, n = e.overflowX, r = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + r + n)
    }

    function Te(t) {
        return ["html", "body", "#document"].indexOf(Ft(t)) >= 0 ? t.ownerDocument.body : Ht(t) && Ee(t) ? t : Te(ne(t))
    }

    function Ce(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Te(t), r = n === (null == (i = t.ownerDocument) ? void 0 : i.body), s = Rt(n),
            o = r ? [s].concat(s.visualViewport || [], Ee(n) ? n : []) : n, a = e.concat(o);
        return r ? a : a.concat(Ce(ne(o)))
    }

    function Se(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function Me(t, e, i) {
        return e === Tt ? Se(function (t, e) {
            var i = Rt(t), n = ie(t), r = i.visualViewport, s = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
            if (r) {
                s = r.width, o = r.height;
                var c = Zt();
                (c || !c && "fixed" === e) && (a = r.offsetLeft, l = r.offsetTop)
            }
            return {width: s, height: o, x: a + xe(t), y: l}
        }(t, i)) : Bt(e) ? function (t, e) {
            var i = Kt(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
        }(e, i) : Se(function (t) {
            var e, i = ie(t), n = _e(t), r = null == (e = t.ownerDocument) ? void 0 : e.body,
                s = Xt(i.scrollWidth, i.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                o = Xt(i.scrollHeight, i.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                a = -n.scrollLeft + xe(t), l = -n.scrollTop;
            return "rtl" === te(r || i).direction && (a += Xt(i.clientWidth, r ? r.clientWidth : 0) - s), {
                width: s,
                height: o,
                x: a,
                y: l
            }
        }(ie(t)))
    }

    function Pe(t) {
        var e, i = t.reference, n = t.element, r = t.placement, s = r ? qt(r) : null, o = r ? ue(r) : null,
            a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (s) {
            case mt:
                e = {x: a, y: i.y - n.height};
                break;
            case gt:
                e = {x: a, y: i.y + i.height};
                break;
            case vt:
                e = {x: i.x + i.width, y: l};
                break;
            case yt:
                e = {x: i.x - n.width, y: l};
                break;
            default:
                e = {x: i.x, y: i.y}
        }
        var c = s ? oe(s) : null;
        if (null != c) {
            var d = "y" === c ? "height" : "width";
            switch (o) {
                case _t:
                    e[c] = e[c] - (i[d] / 2 - n[d] / 2);
                    break;
                case xt:
                    e[c] = e[c] + (i[d] / 2 - n[d] / 2)
            }
        }
        return e
    }

    function Oe(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, r = void 0 === n ? t.placement : n, s = i.strategy,
            o = void 0 === s ? t.strategy : s, a = i.boundary, l = void 0 === a ? Et : a, c = i.rootBoundary,
            d = void 0 === c ? Tt : c, u = i.elementContext, p = void 0 === u ? Ct : u, h = i.altBoundary,
            f = void 0 !== h && h, m = i.padding, g = void 0 === m ? 0 : m,
            v = le("number" != typeof g ? g : ce(g, wt)), y = p === Ct ? St : Ct, b = t.rects.popper,
            w = t.elements[f ? y : p], _ = function (t, e, i, n) {
                var r = "clippingParents" === e ? function (t) {
                    var e = Ce(ne(t)), i = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && Ht(t) ? se(t) : t;
                    return Bt(i) ? e.filter((function (t) {
                        return Bt(t) && Jt(t, i) && "body" !== Ft(t)
                    })) : []
                }(t) : [].concat(e), s = [].concat(r, [i]), o = s[0], a = s.reduce((function (e, i) {
                    var r = Me(t, i, n);
                    return e.top = Xt(r.top, e.top), e.right = Vt(r.right, e.right), e.bottom = Vt(r.bottom, e.bottom), e.left = Xt(r.left, e.left), e
                }), Me(t, o, n));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }(Bt(w) ? w : w.contextElement || ie(t.elements.popper), l, d, o), x = Kt(t.elements.reference),
            E = Pe({reference: x, element: b, strategy: "absolute", placement: r}), T = Se(Object.assign({}, b, E)),
            C = p === Ct ? T : x, S = {
                top: _.top - C.top + v.top,
                bottom: C.bottom - _.bottom + v.bottom,
                left: _.left - C.left + v.left,
                right: C.right - _.right + v.right
            }, M = t.modifiersData.offset;
        if (p === Ct && M) {
            var P = M[r];
            Object.keys(S).forEach((function (t) {
                var e = [vt, gt].indexOf(t) >= 0 ? 1 : -1, i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                S[t] += P[i] * e
            }))
        }
        return S
    }

    const De = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var r = i.mainAxis, s = void 0 === r || r, o = i.altAxis, a = void 0 === o || o, l = i.fallbackPlacements, c = i.padding, d = i.boundary, u = i.rootBoundary, p = i.altBoundary, h = i.flipVariations, f = void 0 === h || h, m = i.allowedAutoPlacements, g = e.options.placement, v = qt(g), y = l || (v !== g && f ? function (t) {
                    if (qt(t) === bt) return [];
                    var e = ye(t);
                    return [we(t), e, we(e)]
                }(g) : [ye(g)]), b = [g].concat(y).reduce((function (t, i) {
                    return t.concat(qt(i) === bt ? function (t, e) {
                        void 0 === e && (e = {});
                        var i = e, n = i.placement, r = i.boundary, s = i.rootBoundary, o = i.padding,
                            a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? Pt : l, d = ue(n),
                            u = d ? a ? Mt : Mt.filter((function (t) {
                                return ue(t) === d
                            })) : wt, p = u.filter((function (t) {
                                return c.indexOf(t) >= 0
                            }));
                        0 === p.length && (p = u);
                        var h = p.reduce((function (e, i) {
                            return e[i] = Oe(t, {placement: i, boundary: r, rootBoundary: s, padding: o})[qt(i)], e
                        }), {});
                        return Object.keys(h).sort((function (t, e) {
                            return h[t] - h[e]
                        }))
                    }(e, {
                        placement: i,
                        boundary: d,
                        rootBoundary: u,
                        padding: c,
                        flipVariations: f,
                        allowedAutoPlacements: m
                    }) : i)
                }), []), w = e.rects.reference, _ = e.rects.popper, x = new Map, E = !0, T = b[0], C = 0; C < b.length; C++) {
                    var S = b[C], M = qt(S), P = ue(S) === _t, O = [mt, gt].indexOf(M) >= 0, D = O ? "width" : "height",
                        k = Oe(e, {placement: S, boundary: d, rootBoundary: u, altBoundary: p, padding: c}),
                        A = O ? P ? vt : yt : P ? gt : mt;
                    w[D] > _[D] && (A = ye(A));
                    var I = ye(A), z = [];
                    if (s && z.push(k[M] <= 0), a && z.push(k[A] <= 0, k[I] <= 0), z.every((function (t) {
                        return t
                    }))) {
                        T = S, E = !1;
                        break
                    }
                    x.set(S, z)
                }
                if (E) for (var L = function (t) {
                    var e = b.find((function (e) {
                        var i = x.get(e);
                        if (i) return i.slice(0, t).every((function (t) {
                            return t
                        }))
                    }));
                    if (e) return T = e, "break"
                }, $ = f ? 3 : 1; $ > 0 && "break" !== L($); $--) ;
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function ke(t, e, i) {
        return void 0 === i && (i = {x: 0, y: 0}), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function Ae(t) {
        return [mt, vt, gt, yt].some((function (e) {
            return t[e] >= 0
        }))
    }

    const Ie = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, i = t.name, n = e.rects.reference, r = e.rects.popper, s = e.modifiersData.preventOverflow,
                o = Oe(e, {elementContext: "reference"}), a = Oe(e, {altBoundary: !0}), l = ke(o, n), c = ke(a, r, s),
                d = Ae(l), u = Ae(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: u
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": u
            })
        }
    }, ze = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, i = t.options, n = t.name, r = i.offset, s = void 0 === r ? [0, 0] : r,
                o = Pt.reduce((function (t, i) {
                    return t[i] = function (t, e, i) {
                        var n = qt(t), r = [yt, mt].indexOf(n) >= 0 ? -1 : 1,
                            s = "function" == typeof i ? i(Object.assign({}, e, {placement: t})) : i, o = s[0],
                            a = s[1];
                        return o = o || 0, a = (a || 0) * r, [yt, vt].indexOf(n) >= 0 ? {x: a, y: o} : {x: o, y: a}
                    }(i, e.rects, s), t
                }), {}), a = o[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = o
        }
    }, Le = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = Pe({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    }, $e = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name, r = i.mainAxis, s = void 0 === r || r, o = i.altAxis,
                a = void 0 !== o && o, l = i.boundary, c = i.rootBoundary, d = i.altBoundary, u = i.padding,
                p = i.tether, h = void 0 === p || p, f = i.tetherOffset, m = void 0 === f ? 0 : f,
                g = Oe(e, {boundary: l, rootBoundary: c, padding: u, altBoundary: d}), v = qt(e.placement),
                y = ue(e.placement), b = !y, w = oe(v), _ = "x" === w ? "y" : "x", x = e.modifiersData.popperOffsets,
                E = e.rects.reference, T = e.rects.popper,
                C = "function" == typeof m ? m(Object.assign({}, e.rects, {placement: e.placement})) : m,
                S = "number" == typeof C ? {mainAxis: C, altAxis: C} : Object.assign({mainAxis: 0, altAxis: 0}, C),
                M = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, P = {x: 0, y: 0};
            if (x) {
                if (s) {
                    var O, D = "y" === w ? mt : yt, k = "y" === w ? gt : vt, A = "y" === w ? "height" : "width",
                        I = x[w], z = I + g[D], L = I - g[k], $ = h ? -T[A] / 2 : 0, j = y === _t ? E[A] : T[A],
                        N = y === _t ? -T[A] : -E[A], F = e.elements.arrow, R = h && F ? Qt(F) : {width: 0, height: 0},
                        B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, H = B[D], W = B[k], Y = ae(0, E[A], R[A]),
                        q = b ? E[A] / 2 - $ - Y - H - S.mainAxis : j - Y - H - S.mainAxis,
                        X = b ? -E[A] / 2 + $ + Y + W + S.mainAxis : N + Y + W + S.mainAxis,
                        V = e.elements.arrow && se(e.elements.arrow),
                        G = V ? "y" === w ? V.clientTop || 0 : V.clientLeft || 0 : 0,
                        U = null != (O = null == M ? void 0 : M[w]) ? O : 0, Z = I + X - U,
                        K = ae(h ? Vt(z, I + q - U - G) : z, I, h ? Xt(L, Z) : L);
                    x[w] = K, P[w] = K - I
                }
                if (a) {
                    var Q, J = "x" === w ? mt : yt, tt = "x" === w ? gt : vt, et = x[_],
                        it = "y" === _ ? "height" : "width", nt = et + g[J], rt = et - g[tt],
                        st = -1 !== [mt, yt].indexOf(v), ot = null != (Q = null == M ? void 0 : M[_]) ? Q : 0,
                        at = st ? nt : et - E[it] - T[it] - ot + S.altAxis,
                        lt = st ? et + E[it] + T[it] - ot - S.altAxis : rt, ct = h && st ? function (t, e, i) {
                            var n = ae(t, e, i);
                            return n > i ? i : n
                        }(at, et, lt) : ae(h ? at : nt, et, h ? lt : rt);
                    x[_] = ct, P[_] = ct - et
                }
                e.modifiersData[n] = P
            }
        }, requiresIfExists: ["offset"]
    };

    function je(t, e, i) {
        void 0 === i && (i = !1);
        var n, r, s = Ht(e), o = Ht(e) && function (t) {
            var e = t.getBoundingClientRect(), i = Gt(e.width) / t.offsetWidth || 1,
                n = Gt(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e), a = ie(e), l = Kt(t, o, i), c = {scrollLeft: 0, scrollTop: 0}, d = {x: 0, y: 0};
        return (s || !s && !i) && (("body" !== Ft(e) || Ee(a)) && (c = (n = e) !== Rt(n) && Ht(n) ? {
            scrollLeft: (r = n).scrollLeft,
            scrollTop: r.scrollTop
        } : _e(n)), Ht(e) ? ((d = Kt(e, !0)).x += e.clientLeft, d.y += e.clientTop) : a && (d.x = xe(a))), {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height
        }
    }

    function Ne(t) {
        var e = new Map, i = new Set, n = [];

        function r(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function (t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && r(n)
                }
            })), n.push(t)
        }

        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            i.has(t.name) || r(t)
        })), n
    }

    var Fe = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function Be(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, r = e.defaultOptions, s = void 0 === r ? Fe : r;
        return function (t, e, i) {
            void 0 === i && (i = s);
            var r, o, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Fe, s),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, l = [], c = !1, d = {
                state: a, setOptions: function (i) {
                    var r = "function" == typeof i ? i(a.options) : i;
                    u(), a.options = Object.assign({}, s, a.options, r), a.scrollParents = {
                        reference: Bt(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [],
                        popper: Ce(e)
                    };
                    var o, c, p = function (t) {
                        var e = Ne(t);
                        return Nt.reduce((function (t, i) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === i
                            })))
                        }), [])
                    }((o = [].concat(n, a.options.modifiers), c = o.reduce((function (t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t
                    }), {}), Object.keys(c).map((function (t) {
                        return c[t]
                    }))));
                    return a.orderedModifiers = p.filter((function (t) {
                        return t.enabled
                    })), a.orderedModifiers.forEach((function (t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, r = t.effect;
                        if ("function" == typeof r) {
                            var s = r({state: a, name: e, instance: d, options: n});
                            l.push(s || function () {
                            })
                        }
                    })), d.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (Re(e, i)) {
                            a.rects = {
                                reference: je(e, se(i), "fixed" === a.options.strategy),
                                popper: Qt(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                                var r = a.orderedModifiers[n], s = r.fn, o = r.options, l = void 0 === o ? {} : o,
                                    u = r.name;
                                "function" == typeof s && (a = s({state: a, options: l, name: u, instance: d}) || a)
                            } else a.reset = !1, n = -1
                        }
                    }
                }, update: (r = function () {
                    return new Promise((function (t) {
                        d.forceUpdate(), t(a)
                    }))
                }, function () {
                    return o || (o = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            o = void 0, t(r())
                        }))
                    }))), o
                }), destroy: function () {
                    u(), c = !0
                }
            };
            if (!Re(t, e)) return d;

            function u() {
                l.forEach((function (t) {
                    return t()
                })), l = []
            }

            return d.setOptions(i).then((function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), d
        }
    }

    var He = Be(), We = Be({defaultModifiers: [ge, Le, fe, Yt]}),
        Ye = Be({defaultModifiers: [ge, Le, fe, Yt, ze, De, $e, de, Ie]});
    const qe = Object.freeze(Object.defineProperty({
            __proto__: null,
            popperGenerator: Be,
            detectOverflow: Oe,
            createPopperBase: He,
            createPopper: Ye,
            createPopperLite: We,
            top: mt,
            bottom: gt,
            right: vt,
            left: yt,
            auto: bt,
            basePlacements: wt,
            start: _t,
            end: xt,
            clippingParents: Et,
            viewport: Tt,
            popper: Ct,
            reference: St,
            variationPlacements: Mt,
            placements: Pt,
            beforeRead: Ot,
            read: Dt,
            afterRead: kt,
            beforeMain: At,
            main: It,
            afterMain: zt,
            beforeWrite: Lt,
            write: $t,
            afterWrite: jt,
            modifierPhases: Nt,
            applyStyles: Yt,
            arrow: de,
            computeStyles: fe,
            eventListeners: ge,
            flip: De,
            hide: Ie,
            offset: ze,
            popperOffsets: Le,
            preventOverflow: $e
        }, Symbol.toStringTag, {value: "Module"})), Xe = "dropdown", Ve = "ArrowUp", Ge = "ArrowDown",
        Ue = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Ke = "show",
        Qe = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Je = `${Qe}.show`, ti = ".dropdown-menu",
        ei = f() ? "top-end" : "top-start", ii = f() ? "top-start" : "top-end",
        ni = f() ? "bottom-end" : "bottom-start", ri = f() ? "bottom-start" : "bottom-end",
        si = f() ? "left-start" : "right-start", oi = f() ? "right-start" : "left-start", ai = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        }, li = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };

    class ci extends H {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = V.next(this._element, ti)[0] || V.prev(this._element, ti)[0] || V.findOne(ti, this._parent), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return ai
        }

        static get DefaultType() {
            return li
        }

        static get NAME() {
            return Xe
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {relatedTarget: this._element};
            if (!z.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) z.on(t, "mouseover", d);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ke), this._element.classList.add(Ke), z.trigger(this._element, "shown.bs.dropdown", t)
            }
        }

        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {relatedTarget: this._element};
            this._completeHide(t)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            if (!z.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) z.off(t, "mouseover", d);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ke), this._element.classList.remove(Ke), this._element.setAttribute("aria-expanded", "false"), R.removeDataAttribute(this._menu, "popper"), z.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }

        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !s(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Xe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }

        _createPopper() {
            if (void 0 === qe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : s(this._config.reference) ? t = o(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Ye(t, this._menu, e)
        }

        _isShown() {
            return this._menu.classList.contains(Ke)
        }

        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return si;
            if (t.classList.contains("dropstart")) return oi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ii : ei : e ? ri : ni
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (R.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _selectMenuItem({key: t, target: e}) {
            const i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && y(i, e, t === Ge, !i.includes(e)).focus()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = ci.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }

        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = V.find(Je);
            for (const i of e) {
                const e = ci.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), r = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !r || "outside" === e._config.autoClose && r) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const s = {relatedTarget: e._element};
                "click" === t.type && (s.clickEvent = t), e._completeHide(s)
            }
        }

        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [Ve, Ge].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const r = this.matches(Qe) ? this : V.prev(this, Qe)[0] || V.next(this, Qe)[0] || V.findOne(Qe, t.delegateTarget.parentNode),
                s = ci.getOrCreateInstance(r);
            if (n) return t.stopPropagation(), s.show(), void s._selectMenuItem(t);
            s._isShown() && (t.stopPropagation(), s.hide(), r.focus())
        }
    }

    z.on(document, Ze, Qe, ci.dataApiKeydownHandler), z.on(document, Ze, ti, ci.dataApiKeydownHandler), z.on(document, Ue, ci.clearMenus), z.on(document, "keyup.bs.dropdown.data-api", ci.clearMenus), z.on(document, Ue, Qe, (function (t) {
        t.preventDefault(), ci.getOrCreateInstance(this).toggle()
    })), m(ci);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top", pi = "padding-right",
        hi = "margin-right";

    class fi {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, pi, (e => e + t)), this._setElementAttributes(di, pi, (e => e + t)), this._setElementAttributes(ui, hi, (e => e - t))
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, pi), this._resetElementAttributes(di, pi), this._resetElementAttributes(ui, hi)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const r = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(r))}px`)
            }))
        }

        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && R.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = R.getDataAttribute(t, e);
                null !== i ? (R.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }

        _applyManipulationCallback(t, e) {
            if (s(t)) e(t); else for (const i of V.find(t, this._element)) e(i)
        }
    }

    const mi = "show", gi = "mousedown.bs.backdrop",
        vi = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"},
        yi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };

    class bi extends B {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        static get Default() {
            return vi
        }

        static get DefaultType() {
            return yi
        }

        static get NAME() {
            return "backdrop"
        }

        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && u(e), e.classList.add(mi), this._emulateAnimation((() => {
                g(t)
            }))
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(mi), this._emulateAnimation((() => {
                this.dispose(), g(t)
            }))) : g(t)
        }

        dispose() {
            this._isAppended && (z.off(this._element, gi), this._element.remove(), this._isAppended = !1)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _configAfterMerge(t) {
            return t.rootElement = o(t.rootElement), t
        }

        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), z.on(t, gi, (() => {
                g(this._config.clickCallback)
            })), this._isAppended = !0
        }

        _emulateAnimation(t) {
            v(t, this._getElement(), this._config.isAnimated)
        }
    }

    const wi = ".bs.focustrap", _i = "backward", xi = {autofocus: !0, trapElement: null},
        Ei = {autofocus: "boolean", trapElement: "element"};

    class Ti extends B {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        static get Default() {
            return xi
        }

        static get DefaultType() {
            return Ei
        }

        static get NAME() {
            return "focustrap"
        }

        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), z.off(document, wi), z.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), z.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, z.off(document, wi))
        }

        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = V.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === _i ? i[i.length - 1].focus() : i[0].focus()
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? _i : "forward")
        }
    }

    const Ci = "hidden.bs.modal", Si = "show.bs.modal", Mi = "modal-open", Pi = "show", Oi = "modal-static",
        Di = {backdrop: !0, focus: !0, keyboard: !0},
        ki = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

    class Ai extends H {
        constructor(t, e) {
            super(t, e), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new fi, this._addEventListeners()
        }

        static get Default() {
            return Di
        }

        static get DefaultType() {
            return ki
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || z.trigger(this._element, Si, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Mi), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }

        hide() {
            this._isShown && !this._isTransitioning && (z.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Pi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }

        dispose() {
            for (const t of [window, this._dialog]) z.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new bi({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new Ti({trapElement: this._element})
        }

        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = V.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), u(this._element), this._element.classList.add(Pi), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, z.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
            }), this._dialog, this._isAnimated())
        }

        _addEventListeners() {
            z.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            })), z.on(window, "resize.bs.modal", (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), z.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                z.one(this._element, "click.dismiss.bs.modal", (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Mi), this._resetAdjustments(), this._scrollBar.reset(), z.trigger(this._element, Ci)
            }))
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (z.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Oi) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Oi), this._queueCallback((() => {
                this._element.classList.remove(Oi), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }

        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = f() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = f() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(t, e) {
            return this.each((function () {
                const i = Ai.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }

    z.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), z.one(e, Si, (t => {
            t.defaultPrevented || z.one(e, Ci, (() => {
                a(this) && this.focus()
            }))
        }));
        const i = V.findOne(".modal.show");
        i && Ai.getInstance(i).hide(), Ai.getOrCreateInstance(e).toggle(this)
    })), W(Ai), m(Ai);
    const Ii = "show", zi = "showing", Li = "hiding", $i = ".offcanvas.show", ji = "hidePrevented.bs.offcanvas",
        Ni = "hidden.bs.offcanvas", Fi = {backdrop: !0, keyboard: !0, scroll: !1},
        Ri = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

    class Bi extends H {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get Default() {
            return Fi
        }

        static get DefaultType() {
            return Ri
        }

        static get NAME() {
            return "offcanvas"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || z.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(zi), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Ii), this._element.classList.remove(zi), z.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
            }), this._element, !0))
        }

        hide() {
            this._isShown && (z.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Li), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(Ii, Li), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new fi).reset(), z.trigger(this._element, Ni)
            }), this._element, !0)))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : z.trigger(this._element, ji)
                } : null
            })
        }

        _initializeFocusTrap() {
            return new Ti({trapElement: this._element})
        }

        _addEventListeners() {
            z.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : z.trigger(this._element, ji))
            }))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Bi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    z.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) {
        const e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        z.one(e, Ni, (() => {
            a(this) && this.focus()
        }));
        const i = V.findOne($i);
        i && i !== e && Bi.getInstance(i).hide(), Bi.getOrCreateInstance(e).toggle(this)
    })), z.on(window, "load.bs.offcanvas.data-api", (() => {
        for (const t of V.find($i)) Bi.getOrCreateInstance(t).show()
    })), z.on(window, "resize.bs.offcanvas", (() => {
        for (const t of V.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && Bi.getOrCreateInstance(t).hide()
    })), W(Bi), m(Bi);
    const Hi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Wi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Yi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        qi = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Hi.has(i) || Boolean(Wi.test(t.nodeValue) || Yi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        }, Xi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, Vi = {
            allowList: Xi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        }, Gi = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        }, Ui = {entry: "(string|element|function|null)", selector: "(string|element)"};

    class Zi extends B {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }

        static get Default() {
            return Vi
        }

        static get DefaultType() {
            return Gi
        }

        static get NAME() {
            return "TemplateFactory"
        }

        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }

        hasContent() {
            return this.getContent().length > 0
        }

        changeContent(t) {
            return this._checkContent(t), this._config.content = {...this._config.content, ...t}, this
        }

        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }

        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }

        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({selector: e, entry: i}, Ui)
        }

        _setContent(t, e, i) {
            const n = V.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? s(e) ? this._putElementInTemplate(o(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }

        _maybeSanitize(t) {
            return this._config.sanitize ? function (t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    r = [].concat(...n.body.querySelectorAll("*"));
                for (const t of r) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes), r = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n) qi(e, r) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }

        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }

    const Ki = new Set(["sanitize", "allowList", "sanitizeFn"]), Qi = "fade", Ji = "show", tn = ".modal",
        en = "hide.bs.modal", nn = "hover", rn = "focus",
        sn = {AUTO: "auto", TOP: "top", RIGHT: f() ? "left" : "right", BOTTOM: "bottom", LEFT: f() ? "right" : "left"},
        on = {
            allowList: Xi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        }, an = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };

    class ln extends H {
        constructor(t, e) {
            if (void 0 === qe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }

        static get Default() {
            return on
        }

        static get DefaultType() {
            return an
        }

        static get NAME() {
            return "tooltip"
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }

        dispose() {
            clearTimeout(this._timeout), z.off(this._element.closest(tn), en, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = z.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: n} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), z.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Ji), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) z.on(t, "mouseover", d);
            this._queueCallback((() => {
                z.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }

        hide() {
            if (this._isShown() && !z.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(Ji), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) z.off(t, "mouseover", d);
                this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), z.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
        }

        update() {
            this._popper && this._popper.update()
        }

        _isWithContent() {
            return Boolean(this._getTitle())
        }

        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }

        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Qi, Ji), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Qi), e
        }

        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }

        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Zi({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }

        _getContentForTemplate() {
            return {".tooltip-inner": this._getTitle()}
        }

        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }

        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Qi)
        }

        _isShown() {
            return this.tip && this.tip.classList.contains(Ji)
        }

        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = sn[e.toUpperCase()];
            return Ye(this._element, t, this._getPopperConfig(i))
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }

        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig}
        }

        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t) if ("click" === e) z.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                this._initializeOnDelegatedTarget(t).toggle()
            })); else if ("manual" !== e) {
                const t = e === nn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === nn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                z.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? rn : nn] = !0, e._enter()
                })), z.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? rn : nn] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, z.on(this._element.closest(tn), en, this._hideModalHandler)
        }

        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }

        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }

        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }

        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }

        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }

        _getConfig(t) {
            const e = R.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Ki.has(t) && delete e[t];
            return t = {...e, ..."object" == typeof t && t ? t : {}}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : o(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1, t.trigger = "manual", t
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = ln.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    m(ln);
    const cn = {
        ...ln.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, dn = {...ln.DefaultType, content: "(null|string|element|function)"};

    class un extends ln {
        static get Default() {
            return cn
        }

        static get DefaultType() {
            return dn
        }

        static get NAME() {
            return "popover"
        }

        _isWithContent() {
            return this._getTitle() || this._getContent()
        }

        _getContentForTemplate() {
            return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    m(un);
    const pn = "click.bs.scrollspy", hn = "active", fn = "[href]",
        mn = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1]}, gn = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };

    class vn extends H {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }

        static get Default() {
            return mn
        }

        static get DefaultType() {
            return gn
        }

        static get NAME() {
            return "scrollspy"
        }

        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }

        dispose() {
            this._observer.disconnect(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.target = o(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
        }

        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (z.off(this._config.target, pn), z.on(this._config.target, pn, fn, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({top: n, behavior: "smooth"});
                    i.scrollTop = n
                }
            })))
        }

        _getNewObserver() {
            const t = {root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin};
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }

        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`), i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                }, n = (this._rootElement || document.documentElement).scrollTop,
                r = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const s of t) {
                if (!s.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(s));
                    continue
                }
                const t = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (r && t) {
                    if (i(s), !n) return
                } else r || t || i(s)
            }
        }

        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = V.find(fn, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = V.findOne(e.hash, this._element);
                a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
            }
        }

        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(hn), this._activateParents(t), z.trigger(this._element, "activate.bs.scrollspy", {relatedTarget: t}))
        }

        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) V.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(hn); else for (const e of V.parents(t, ".nav, .list-group")) for (const t of V.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(hn)
        }

        _clearActiveClass(t) {
            t.classList.remove(hn);
            const e = V.find("[href].active", t);
            for (const t of e) t.classList.remove(hn)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = vn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    z.on(window, "load.bs.scrollspy.data-api", (() => {
        for (const t of V.find('[data-bs-spy="scroll"]')) vn.getOrCreateInstance(t)
    })), m(vn);
    const yn = "ArrowLeft", bn = "ArrowRight", wn = "ArrowUp", _n = "ArrowDown", xn = "active", En = "fade",
        Tn = "show", Cn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Sn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;

    class Mn extends H {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), z.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }

        static get NAME() {
            return "tab"
        }

        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? z.trigger(e, "hide.bs.tab", {relatedTarget: t}) : null;
            z.trigger(t, "show.bs.tab", {relatedTarget: e}).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }

        _activate(t, e) {
            t && (t.classList.add(xn), this._activate(n(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), z.trigger(t, "shown.bs.tab", {relatedTarget: e})) : t.classList.add(Tn)
            }), t, t.classList.contains(En)))
        }

        _deactivate(t, e) {
            t && (t.classList.remove(xn), t.blur(), this._deactivate(n(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), z.trigger(t, "hidden.bs.tab", {relatedTarget: e})) : t.classList.remove(Tn)
            }), t, t.classList.contains(En)))
        }

        _keydown(t) {
            if (![yn, bn, wn, _n].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [bn, _n].includes(t.key), i = y(this._getChildren().filter((t => !l(t))), t.target, e, !0);
            i && (i.focus({preventScroll: !0}), Mn.getOrCreateInstance(i).show())
        }

        _getChildren() {
            return V.find(Sn, this._parent)
        }

        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }

        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }

        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }

        _setInitialAttributesOnTargetPanel(t) {
            const e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }

        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const r = V.findOne(t, i);
                r && r.classList.toggle(n, e)
            };
            n(".dropdown-toggle", xn), n(".dropdown-menu", Tn), i.setAttribute("aria-expanded", e)
        }

        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }

        _elemIsActive(t) {
            return t.classList.contains(xn)
        }

        _getInnerElement(t) {
            return t.matches(Sn) ? t : V.findOne(Sn, t)
        }

        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Mn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    z.on(document, "click.bs.tab", Cn, (function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Mn.getOrCreateInstance(this).show()
    })), z.on(window, "load.bs.tab", (() => {
        for (const t of V.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Mn.getOrCreateInstance(t)
    })), m(Mn);
    const Pn = "hide", On = "show", Dn = "showing", kn = {animation: "boolean", autohide: "boolean", delay: "number"},
        An = {animation: !0, autohide: !0, delay: 5e3};

    class In extends H {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get Default() {
            return An
        }

        static get DefaultType() {
            return kn
        }

        static get NAME() {
            return "toast"
        }

        show() {
            z.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Pn), u(this._element), this._element.classList.add(On, Dn), this._queueCallback((() => {
                this._element.classList.remove(Dn), z.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }

        hide() {
            this.isShown() && (z.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Dn), this._queueCallback((() => {
                this._element.classList.add(Pn), this._element.classList.remove(Dn, On), z.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }

        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(On), super.dispose()
        }

        isShown() {
            return this._element.classList.contains(On)
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }

        _setListeners() {
            z.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), z.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), z.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), z.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = In.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    return W(In), m(In), {
        Alert: Y,
        Button: X,
        Carousel: at,
        Collapse: ft,
        Dropdown: ci,
        Modal: Ai,
        Offcanvas: Bi,
        Popover: un,
        ScrollSpy: vn,
        Tab: Mn,
        Toast: In,
        Tooltip: ln
    }
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Swiper = e()
}(this, (function () {
    "use strict";

    function t(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function e(i, n) {
        void 0 === i && (i = {}), void 0 === n && (n = {}), Object.keys(n).forEach((r => {
            void 0 === i[r] ? i[r] = n[r] : t(n[r]) && t(i[r]) && Object.keys(n[r]).length > 0 && e(i[r], n[r])
        }))
    }

    const i = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function n() {
        const t = "undefined" != typeof document ? document : {};
        return e(t, i), t
    }

    const r = {
        document: i,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
            "undefined" != typeof setTimeout && clearTimeout(t)
        }
    };

    function s() {
        const t = "undefined" != typeof window ? window : {};
        return e(t, r), t
    }

    class o extends Array {
        constructor(t) {
            "number" == typeof t ? super(t) : (super(...t || []), function (t) {
                const e = t.__proto__;
                Object.defineProperty(t, "__proto__", {
                    get: () => e, set(t) {
                        e.__proto__ = t
                    }
                })
            }(this))
        }
    }

    function a(t) {
        void 0 === t && (t = []);
        const e = [];
        return t.forEach((t => {
            Array.isArray(t) ? e.push(...a(t)) : e.push(t)
        })), e
    }

    function l(t, e) {
        return Array.prototype.filter.call(t, e)
    }

    function c(t, e) {
        const i = s(), r = n();
        let a = [];
        if (!e && t instanceof o) return t;
        if (!t) return new o(a);
        if ("string" == typeof t) {
            const i = t.trim();
            if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                let t = "div";
                0 === i.indexOf("<li") && (t = "ul"), 0 === i.indexOf("<tr") && (t = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (t = "tr"), 0 === i.indexOf("<tbody") && (t = "table"), 0 === i.indexOf("<option") && (t = "select");
                const e = r.createElement(t);
                e.innerHTML = i;
                for (let t = 0; t < e.childNodes.length; t += 1) a.push(e.childNodes[t])
            } else a = function (t, e) {
                if ("string" != typeof t) return [t];
                const i = [], n = e.querySelectorAll(t);
                for (let t = 0; t < n.length; t += 1) i.push(n[t]);
                return i
            }(t.trim(), e || r)
        } else if (t.nodeType || t === i || t === r) a.push(t); else if (Array.isArray(t)) {
            if (t instanceof o) return t;
            a = t
        }
        return new o(function (t) {
            const e = [];
            for (let i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
            return e
        }(a))
    }

    c.fn = o.prototype;
    const d = {
        addClass: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            const n = a(e.map((t => t.split(" "))));
            return this.forEach((t => {
                t.classList.add(...n)
            })), this
        }, removeClass: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            const n = a(e.map((t => t.split(" "))));
            return this.forEach((t => {
                t.classList.remove(...n)
            })), this
        }, hasClass: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            const n = a(e.map((t => t.split(" "))));
            return l(this, (t => n.filter((e => t.classList.contains(e))).length > 0)).length > 0
        }, toggleClass: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            const n = a(e.map((t => t.split(" "))));
            this.forEach((t => {
                n.forEach((e => {
                    t.classList.toggle(e)
                }))
            }))
        }, attr: function (t, e) {
            if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(t, e); else for (const e in t) this[i][e] = t[e], this[i].setAttribute(e, t[e]);
            return this
        }, removeAttr: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
            return this
        }, transform: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
            return this
        }, transition: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
            return this
        }, on: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            let [n, r, s, o] = e;

            function a(t) {
                const e = t.target;
                if (!e) return;
                const i = t.target.dom7EventData || [];
                if (i.indexOf(t) < 0 && i.unshift(t), c(e).is(r)) s.apply(e, i); else {
                    const t = c(e).parents();
                    for (let e = 0; e < t.length; e += 1) c(t[e]).is(r) && s.apply(t[e], i)
                }
            }

            function l(t) {
                const e = t && t.target && t.target.dom7EventData || [];
                e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e)
            }

            "function" == typeof e[1] && ([n, s, o] = e, r = void 0), o || (o = !1);
            const d = n.split(" ");
            let u;
            for (let t = 0; t < this.length; t += 1) {
                const e = this[t];
                if (r) for (u = 0; u < d.length; u += 1) {
                    const t = d[u];
                    e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                        listener: s,
                        proxyListener: a
                    }), e.addEventListener(t, a, o)
                } else for (u = 0; u < d.length; u += 1) {
                    const t = d[u];
                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                        listener: s,
                        proxyListener: l
                    }), e.addEventListener(t, l, o)
                }
            }
            return this
        }, off: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            let [n, r, s, o] = e;
            "function" == typeof e[1] && ([n, s, o] = e, r = void 0), o || (o = !1);
            const a = n.split(" ");
            for (let t = 0; t < a.length; t += 1) {
                const e = a[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    let n;
                    if (!r && i.dom7Listeners ? n = i.dom7Listeners[e] : r && i.dom7LiveListeners && (n = i.dom7LiveListeners[e]), n && n.length) for (let t = n.length - 1; t >= 0; t -= 1) {
                        const r = n[t];
                        s && r.listener === s || s && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === s ? (i.removeEventListener(e, r.proxyListener, o), n.splice(t, 1)) : s || (i.removeEventListener(e, r.proxyListener, o), n.splice(t, 1))
                    }
                }
            }
            return this
        }, trigger: function () {
            const t = s();
            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            const r = i[0].split(" "), o = i[1];
            for (let e = 0; e < r.length; e += 1) {
                const n = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    if (t.CustomEvent) {
                        const e = new t.CustomEvent(n, {detail: o, bubbles: !0, cancelable: !0});
                        r.dom7EventData = i.filter(((t, e) => e > 0)), r.dispatchEvent(e), r.dom7EventData = [], delete r.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (t) {
            const e = this;
            return t && e.on("transitionend", (function i(n) {
                n.target === this && (t.call(this, n), e.off("transitionend", i))
            })), this
        }, outerWidth: function (t) {
            if (this.length > 0) {
                if (t) {
                    const t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (t) {
            if (this.length > 0) {
                if (t) {
                    const t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const t = s();
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const t = s(), e = n(), i = this[0], r = i.getBoundingClientRect(), o = e.body,
                    a = i.clientTop || o.clientTop || 0, l = i.clientLeft || o.clientLeft || 0,
                    c = i === t ? t.scrollY : i.scrollTop, d = i === t ? t.scrollX : i.scrollLeft;
                return {top: r.top + c - a, left: r.left + d - l}
            }
            return null
        }, css: function (t, e) {
            const i = s();
            let n;
            if (1 === arguments.length) {
                if ("string" != typeof t) {
                    for (n = 0; n < this.length; n += 1) for (const e in t) this[n].style[e] = t[e];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(t)
            }
            if (2 === arguments.length && "string" == typeof t) {
                for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
                return this
            }
            return this
        }, each: function (t) {
            return t ? (this.forEach(((e, i) => {
                t.apply(e, [e, i])
            })), this) : this
        }, html: function (t) {
            if (void 0 === t) return this[0] ? this[0].innerHTML : null;
            for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
            return this
        }, text: function (t) {
            if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
            for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
            return this
        }, is: function (t) {
            const e = s(), i = n(), r = this[0];
            let a, l;
            if (!r || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (r.matches) return r.matches(t);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                if (r.msMatchesSelector) return r.msMatchesSelector(t);
                for (a = c(t), l = 0; l < a.length; l += 1) if (a[l] === r) return !0;
                return !1
            }
            if (t === i) return r === i;
            if (t === e) return r === e;
            if (t.nodeType || t instanceof o) {
                for (a = t.nodeType ? [t] : t, l = 0; l < a.length; l += 1) if (a[l] === r) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let t, e = this[0];
            if (e) {
                for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                return t
            }
        }, eq: function (t) {
            if (void 0 === t) return this;
            const e = this.length;
            if (t > e - 1) return c([]);
            if (t < 0) {
                const i = e + t;
                return c(i < 0 ? [] : [this[i]])
            }
            return c([this[t]])
        }, append: function () {
            let t;
            const e = n();
            for (let i = 0; i < arguments.length; i += 1) {
                t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (let i = 0; i < this.length; i += 1) if ("string" == typeof t) {
                    const n = e.createElement("div");
                    for (n.innerHTML = t; n.firstChild;) this[i].appendChild(n.firstChild)
                } else if (t instanceof o) for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e]); else this[i].appendChild(t)
            }
            return this
        }, prepend: function (t) {
            const e = n();
            let i, r;
            for (i = 0; i < this.length; i += 1) if ("string" == typeof t) {
                const n = e.createElement("div");
                for (n.innerHTML = t, r = n.childNodes.length - 1; r >= 0; r -= 1) this[i].insertBefore(n.childNodes[r], this[i].childNodes[0])
            } else if (t instanceof o) for (r = 0; r < t.length; r += 1) this[i].insertBefore(t[r], this[i].childNodes[0]); else this[i].insertBefore(t, this[i].childNodes[0]);
            return this
        }, next: function (t) {
            return this.length > 0 ? t ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(t) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
        }, nextAll: function (t) {
            const e = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.nextElementSibling;) {
                const n = i.nextElementSibling;
                t ? c(n).is(t) && e.push(n) : e.push(n), i = n
            }
            return c(e)
        }, prev: function (t) {
            if (this.length > 0) {
                const e = this[0];
                return t ? e.previousElementSibling && c(e.previousElementSibling).is(t) ? c([e.previousElementSibling]) : c([]) : e.previousElementSibling ? c([e.previousElementSibling]) : c([])
            }
            return c([])
        }, prevAll: function (t) {
            const e = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.previousElementSibling;) {
                const n = i.previousElementSibling;
                t ? c(n).is(t) && e.push(n) : e.push(n), i = n
            }
            return c(e)
        }, parent: function (t) {
            const e = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? c(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
            return c(e)
        }, parents: function (t) {
            const e = [];
            for (let i = 0; i < this.length; i += 1) {
                let n = this[i].parentNode;
                for (; n;) t ? c(n).is(t) && e.push(n) : e.push(n), n = n.parentNode
            }
            return c(e)
        }, closest: function (t) {
            let e = this;
            return void 0 === t ? c([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
        }, find: function (t) {
            const e = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].querySelectorAll(t);
                for (let t = 0; t < n.length; t += 1) e.push(n[t])
            }
            return c(e)
        }, children: function (t) {
            const e = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].children;
                for (let i = 0; i < n.length; i += 1) t && !c(n[i]).is(t) || e.push(n[i])
            }
            return c(e)
        }, filter: function (t) {
            return c(l(this, t))
        }, remove: function () {
            for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
            return this
        }
    };

    function u(t, e) {
        return void 0 === e && (e = 0), setTimeout(t, e)
    }

    function p() {
        return Date.now()
    }

    function h(t, e) {
        void 0 === e && (e = "x");
        const i = s();
        let n, r, o;
        const a = function (t) {
            const e = s();
            let i;
            return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
        }(t);
        return i.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((t => t.replace(",", "."))).join(", ")), o = new i.WebKitCSSMatrix("none" === r ? "" : r)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === e && (r = i.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === e && (r = i.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
    }

    function f(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }

    function m(t) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? t instanceof HTMLElement : t && (1 === t.nodeType || 11 === t.nodeType)
    }

    function g() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
            const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != n && !m(n)) {
                const i = Object.keys(Object(n)).filter((t => e.indexOf(t) < 0));
                for (let e = 0, r = i.length; e < r; e += 1) {
                    const r = i[e], s = Object.getOwnPropertyDescriptor(n, r);
                    void 0 !== s && s.enumerable && (f(t[r]) && f(n[r]) ? n[r].__swiper__ ? t[r] = n[r] : g(t[r], n[r]) : !f(t[r]) && f(n[r]) ? (t[r] = {}, n[r].__swiper__ ? t[r] = n[r] : g(t[r], n[r])) : t[r] = n[r])
                }
            }
        }
        return t
    }

    function v(t, e, i) {
        t.style.setProperty(e, i)
    }

    function y(t) {
        let {swiper: e, targetPosition: i, side: n} = t;
        const r = s(), o = -e.translate;
        let a, l = null;
        const c = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
        const d = i > o ? "next" : "prev", u = (t, e) => "next" === d && t >= e || "prev" === d && t <= e, p = () => {
            a = (new Date).getTime(), null === l && (l = a);
            const t = Math.max(Math.min((a - l) / c, 1), 0), s = .5 - Math.cos(t * Math.PI) / 2;
            let d = o + s * (i - o);
            if (u(d, i) && (d = i), e.wrapperEl.scrollTo({[n]: d}), u(d, i)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[n]: d})
            })), void r.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = r.requestAnimationFrame(p)
        };
        p()
    }

    let b, w, _;

    function x() {
        return b || (b = function () {
            const t = s(), e = n();
            return {
                smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
                touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                passiveListener: function () {
                    let e = !1;
                    try {
                        const i = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, i)
                    } catch (t) {
                    }
                    return e
                }(),
                gestures: "ongesturestart" in t
            }
        }()), b
    }

    function E(t) {
        return void 0 === t && (t = {}), w || (w = function (t) {
            let {userAgent: e} = void 0 === t ? {} : t;
            const i = x(), n = s(), r = n.navigator.platform, o = e || n.navigator.userAgent,
                a = {ios: !1, android: !1}, l = n.screen.width, c = n.screen.height,
                d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = o.match(/(iPad).*OS\s([\d_]+)/);
            const p = o.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r;
            let m = "MacIntel" === r;
            return !u && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = o.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), d && !f && (a.os = "android", a.android = !0), (u || h || p) && (a.os = "ios", a.ios = !0), a
        }(t)), w
    }

    function T() {
        return _ || (_ = function () {
            const t = s();
            return {
                isSafari: function () {
                    const e = t.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), _
    }

    Object.keys(d).forEach((t => {
        Object.defineProperty(c.fn, t, {value: d[t], writable: !0})
    }));
    var C = {
        on(t, e, i) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const r = i ? "unshift" : "push";
            return t.split(" ").forEach((t => {
                n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][r](e)
            })), n
        }, once(t, e, i) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;

            function r() {
                n.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
                for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                e.apply(n, s)
            }

            return r.__emitterProxy = e, n.on(t, r, i)
        }, onAny(t, e) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const n = e ? "unshift" : "push";
            return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i
        }, offAny(t) {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsAnyListeners) return e;
            const i = e.eventsAnyListeners.indexOf(t);
            return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
        }, off(t, e) {
            const i = this;
            return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (t.split(" ").forEach((t => {
                void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach(((n, r) => {
                    (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[t].splice(r, 1)
                }))
            })), i) : i
        }, emit() {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let e, i, n;
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
            return "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], i = s.slice(1, s.length), n = t) : (e = s[0].events, i = s[0].data, n = s[0].context || t), i.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(n, [e, ...i])
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
                    t.apply(n, i)
                }))
            })), t
        }
    }, S = {
        updateSize: function () {
            const t = this;
            let e, i;
            const n = t.$el;
            e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : n[0].clientWidth, i = void 0 !== t.params.height && null !== t.params.height ? t.params.height : n[0].clientHeight, 0 === e && t.isHorizontal() || 0 === i && t.isVertical() || (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), i = i - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
                width: e,
                height: i,
                size: t.isHorizontal() ? e : i
            }))
        }, updateSlides: function () {
            const t = this;

            function e(e) {
                return t.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[e]
            }

            function i(t, i) {
                return parseFloat(t.getPropertyValue(e(i)) || 0)
            }

            const n = t.params, {$wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a} = t,
                l = t.virtual && n.virtual.enabled, c = l ? t.virtual.slides.length : t.slides.length,
                d = r.children(`.${t.params.slideClass}`), u = l ? t.virtual.slides.length : d.length;
            let p = [];
            const h = [], f = [];
            let m = n.slidesOffsetBefore;
            "function" == typeof m && (m = n.slidesOffsetBefore.call(t));
            let g = n.slidesOffsetAfter;
            "function" == typeof g && (g = n.slidesOffsetAfter.call(t));
            const y = t.snapGrid.length, b = t.slidesGrid.length;
            let w = n.spaceBetween, _ = -m, x = 0, E = 0;
            if (void 0 === s) return;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), t.virtualSize = -w, o ? d.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : d.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), n.centeredSlides && n.cssMode && (v(t.wrapperEl, "--swiper-centered-offset-before", ""), v(t.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = n.grid && n.grid.rows > 1 && t.grid;
            let C;
            T && t.grid.initSlides(u);
            const S = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((t => void 0 !== n.breakpoints[t].slidesPerView)).length > 0;
            for (let r = 0; r < u; r += 1) {
                C = 0;
                const o = d.eq(r);
                if (T && t.grid.updateSlide(r, o, u, e), "none" !== o.css("display")) {
                    if ("auto" === n.slidesPerView) {
                        S && (d[r].style[e("width")] = "");
                        const s = getComputedStyle(o[0]), a = o[0].style.transform, l = o[0].style.webkitTransform;
                        if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), n.roundLengths) C = t.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0); else {
                            const t = i(s, "width"), e = i(s, "padding-left"), n = i(s, "padding-right"),
                                r = i(s, "margin-left"), a = i(s, "margin-right"), l = s.getPropertyValue("box-sizing");
                            if (l && "border-box" === l) C = t + r + a; else {
                                const {clientWidth: i, offsetWidth: s} = o[0];
                                C = t + e + n + r + a + (s - i)
                            }
                        }
                        a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), n.roundLengths && (C = Math.floor(C))
                    } else C = (s - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (C = Math.floor(C)), d[r] && (d[r].style[e("width")] = `${C}px`);
                    d[r] && (d[r].swiperSlideSize = C), f.push(C), n.centeredSlides ? (_ = _ + C / 2 + x / 2 + w, 0 === x && 0 !== r && (_ = _ - s / 2 - w), 0 === r && (_ = _ - s / 2 - w), Math.abs(_) < .001 && (_ = 0), n.roundLengths && (_ = Math.floor(_)), E % n.slidesPerGroup == 0 && p.push(_), h.push(_)) : (n.roundLengths && (_ = Math.floor(_)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && p.push(_), h.push(_), _ = _ + C + w), t.virtualSize += C + w, x = C, E += 1
                }
            }
            if (t.virtualSize = Math.max(t.virtualSize, s) + g, o && a && ("slide" === n.effect || "coverflow" === n.effect) && r.css({width: `${t.virtualSize + n.spaceBetween}px`}), n.setWrapperSize && r.css({[e("width")]: `${t.virtualSize + n.spaceBetween}px`}), T && t.grid.updateWrapperSize(C, p, e), !n.centeredSlides) {
                const e = [];
                for (let i = 0; i < p.length; i += 1) {
                    let r = p[i];
                    n.roundLengths && (r = Math.floor(r)), p[i] <= t.virtualSize - s && e.push(r)
                }
                p = e, Math.floor(t.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - s)
            }
            if (0 === p.length && (p = [0]), 0 !== n.spaceBetween) {
                const i = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
                d.filter(((t, e) => !n.cssMode || e !== d.length - 1)).css({[i]: `${w}px`})
            }
            if (n.centeredSlides && n.centeredSlidesBounds) {
                let t = 0;
                f.forEach((e => {
                    t += e + (n.spaceBetween ? n.spaceBetween : 0)
                })), t -= n.spaceBetween;
                const e = t - s;
                p = p.map((t => t < 0 ? -m : t > e ? e + g : t))
            }
            if (n.centerInsufficientSlides) {
                let t = 0;
                if (f.forEach((e => {
                    t += e + (n.spaceBetween ? n.spaceBetween : 0)
                })), t -= n.spaceBetween, t < s) {
                    const e = (s - t) / 2;
                    p.forEach(((t, i) => {
                        p[i] = t - e
                    })), h.forEach(((t, i) => {
                        h[i] = t + e
                    }))
                }
            }
            if (Object.assign(t, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f
            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                v(t.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), v(t.wrapperEl, "--swiper-centered-offset-after", t.size / 2 - f[f.length - 1] / 2 + "px");
                const e = -t.snapGrid[0], i = -t.slidesGrid[0];
                t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + i))
            }
            if (u !== c && t.emit("slidesLengthChange"), p.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== b && t.emit("slidesGridLengthChange"), n.watchSlidesProgress && t.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                const e = `${n.containerModifierClass}backface-hidden`, i = t.$el.hasClass(e);
                u <= n.maxBackfaceHiddenSlides ? i || t.$el.addClass(e) : i && t.$el.removeClass(e)
            }
        }, updateAutoHeight: function (t) {
            const e = this, i = [], n = e.virtual && e.params.virtual.enabled;
            let r, s = 0;
            "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
            const o = t => n ? e.slides.filter((e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t))[0] : e.slides.eq(t)[0];
            if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1) if (e.params.centeredSlides) (e.visibleSlides || c([])).each((t => {
                i.push(t)
            })); else for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const t = e.activeIndex + r;
                if (t > e.slides.length && !n) break;
                i.push(o(t))
            } else i.push(o(e.activeIndex));
            for (r = 0; r < i.length; r += 1) if (void 0 !== i[r]) {
                const t = i[r].offsetHeight;
                s = t > s ? t : s
            }
            (s || 0 === s) && e.$wrapperEl.css("height", `${s}px`)
        }, updateSlidesOffset: function () {
            const t = this, e = t.slides;
            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop
        }, updateSlidesProgress: function (t) {
            void 0 === t && (t = this && this.translate || 0);
            const e = this, i = e.params, {slides: n, rtlTranslate: r, snapGrid: s} = e;
            if (0 === n.length) return;
            void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
            let o = -t;
            r && (o = t), n.removeClass(i.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
            for (let t = 0; t < n.length; t += 1) {
                const a = n[t];
                let l = a.swiperSlideOffset;
                i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
                const c = (o + (i.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + i.spaceBetween),
                    d = (o - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + i.spaceBetween),
                    u = -(o - l), p = u + e.slidesSizesGrid[t];
                (u >= 0 && u < e.size - 1 || p > 1 && p <= e.size || u <= 0 && p >= e.size) && (e.visibleSlides.push(a), e.visibleSlidesIndexes.push(t), n.eq(t).addClass(i.slideVisibleClass)), a.progress = r ? -c : c, a.originalProgress = r ? -d : d
            }
            e.visibleSlides = c(e.visibleSlides)
        }, updateProgress: function (t) {
            const e = this;
            if (void 0 === t) {
                const i = e.rtlTranslate ? -1 : 1;
                t = e && e.translate && e.translate * i || 0
            }
            const i = e.params, n = e.maxTranslate() - e.minTranslate();
            let {progress: r, isBeginning: s, isEnd: o} = e;
            const a = s, l = o;
            0 === n ? (r = 0, s = !0, o = !0) : (r = (t - e.minTranslate()) / n, s = r <= 0, o = r >= 1), Object.assign(e, {
                progress: r,
                isBeginning: s,
                isEnd: o
            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), s && !a && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (a && !s || l && !o) && e.emit("fromEdge"), e.emit("progress", r)
        }, updateSlidesClasses: function () {
            const t = this, {slides: e, params: i, $wrapperEl: n, activeIndex: r, realIndex: s} = t,
                o = t.virtual && i.virtual.enabled;
            let a;
            e.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), a = o ? t.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : e.eq(r), a.addClass(i.slideActiveClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass));
            let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = e.eq(0), l.addClass(i.slideNextClass));
            let c = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === c.length && (c = e.eq(-1), c.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
        }, updateActiveIndex: function (t) {
            const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
                slidesGrid: n,
                snapGrid: r,
                params: s,
                activeIndex: o,
                realIndex: a,
                snapIndex: l
            } = e;
            let c, d = t;
            if (void 0 === d) {
                for (let t = 0; t < n.length; t += 1) void 0 !== n[t + 1] ? i >= n[t] && i < n[t + 1] - (n[t + 1] - n[t]) / 2 ? d = t : i >= n[t] && i < n[t + 1] && (d = t + 1) : i >= n[t] && (d = t);
                s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            if (r.indexOf(i) >= 0) c = r.indexOf(i); else {
                const t = Math.min(s.slidesPerGroupSkip, d);
                c = t + Math.floor((d - t) / s.slidesPerGroup)
            }
            if (c >= r.length && (c = r.length - 1), d === o) return void (c !== l && (e.snapIndex = c, e.emit("snapIndexChange")));
            const u = parseInt(e.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            Object.assign(e, {
                snapIndex: c,
                realIndex: u,
                previousIndex: o,
                activeIndex: d
            }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), a !== u && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
        }, updateClickedSlide: function (t) {
            const e = this, i = e.params, n = c(t).closest(`.${i.slideClass}`)[0];
            let r, s = !1;
            if (n) for (let t = 0; t < e.slides.length; t += 1) if (e.slides[t] === n) {
                s = !0, r = t;
                break
            }
            if (!n || !s) return e.clickedSlide = void 0, void (e.clickedIndex = void 0);
            e.clickedSlide = n, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(c(n).attr("data-swiper-slide-index"), 10) : e.clickedIndex = r, i.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
        }
    }, M = {
        getTranslate: function (t) {
            void 0 === t && (t = this.isHorizontal() ? "x" : "y");
            const {params: e, rtlTranslate: i, translate: n, $wrapperEl: r} = this;
            if (e.virtualTranslate) return i ? -n : n;
            if (e.cssMode) return n;
            let s = h(r[0], t);
            return i && (s = -s), s || 0
        }, setTranslate: function (t, e) {
            const i = this, {rtlTranslate: n, params: r, $wrapperEl: s, wrapperEl: o, progress: a} = i;
            let l, c = 0, d = 0;
            i.isHorizontal() ? c = n ? -t : t : d = t, r.roundLengths && (c = Math.floor(c), d = Math.floor(d)), r.cssMode ? o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -c : -d : r.virtualTranslate || s.transform(`translate3d(${c}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? c : d;
            const u = i.maxTranslate() - i.minTranslate();
            l = 0 === u ? 0 : (t - i.minTranslate()) / u, l !== a && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (t, e, i, n, r) {
            void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
            const s = this, {params: o, wrapperEl: a} = s;
            if (s.animating && o.preventInteractionOnTransition) return !1;
            const l = s.minTranslate(), c = s.maxTranslate();
            let d;
            if (d = n && t > l ? l : n && t < c ? c : t, s.updateProgress(d), o.cssMode) {
                const t = s.isHorizontal();
                if (0 === e) a[t ? "scrollLeft" : "scrollTop"] = -d; else {
                    if (!s.support.smoothScroll) return y({
                        swiper: s,
                        targetPosition: -d,
                        side: t ? "left" : "top"
                    }), !0;
                    a.scrollTo({[t ? "left" : "top"]: -d, behavior: "smooth"})
                }
                return !0
            }
            return 0 === e ? (s.setTransition(0), s.setTranslate(d), i && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(d), i && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (t) {
                s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, i && s.emit("transitionEnd"))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(t) {
        let {swiper: e, runCallbacks: i, direction: n, step: r} = t;
        const {activeIndex: s, previousIndex: o} = e;
        let a = n;
        if (a || (a = s > o ? "next" : s < o ? "prev" : "reset"), e.emit(`transition${r}`), i && s !== o) {
            if ("reset" === a) return void e.emit(`slideResetTransition${r}`);
            e.emit(`slideChangeTransition${r}`), "next" === a ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
        }
    }

    var O = {
        slideTo: function (t, e, i, n, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), "number" != typeof t && "string" != typeof t) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
            if ("string" == typeof t) {
                const e = parseInt(t, 10);
                if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                t = e
            }
            const s = this;
            let o = t;
            o < 0 && (o = 0);
            const {
                params: a,
                snapGrid: l,
                slidesGrid: c,
                previousIndex: d,
                activeIndex: u,
                rtlTranslate: p,
                wrapperEl: h,
                enabled: f
            } = s;
            if (s.animating && a.preventInteractionOnTransition || !f && !n && !r) return !1;
            const m = Math.min(s.params.slidesPerGroupSkip, o);
            let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const v = -l[g];
            if (a.normalizeSlideIndex) for (let t = 0; t < c.length; t += 1) {
                const e = -Math.floor(100 * v), i = Math.floor(100 * c[t]), n = Math.floor(100 * c[t + 1]);
                void 0 !== c[t + 1] ? e >= i && e < n - (n - i) / 2 ? o = t : e >= i && e < n && (o = t + 1) : e >= i && (o = t)
            }
            if (s.initialized && o !== u) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== o) return !1
            }
            let b;
            if (o !== (d || 0) && i && s.emit("beforeSlideChangeStart"), s.updateProgress(v), b = o > u ? "next" : o < u ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(v), "reset" !== b && (s.transitionStart(i, b), s.transitionEnd(i, b)), !1;
            if (a.cssMode) {
                const t = s.isHorizontal(), i = p ? v : -v;
                if (0 === e) {
                    const e = s.virtual && s.params.virtual.enabled;
                    e && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), h[t ? "scrollLeft" : "scrollTop"] = i, e && requestAnimationFrame((() => {
                        s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!s.support.smoothScroll) return y({swiper: s, targetPosition: i, side: t ? "left" : "top"}), !0;
                    h.scrollTo({[t ? "left" : "top"]: i, behavior: "smooth"})
                }
                return !0
            }
            return s.setTransition(e), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, b), 0 === e ? s.transitionEnd(i, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
                s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, b))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (t, e, i, n) {
            if (void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), "string" == typeof t) {
                const e = parseInt(t, 10);
                if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                t = e
            }
            const r = this;
            let s = t;
            return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, i, n)
        }, slideNext: function (t, e, i) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const n = this, {animating: r, enabled: s, params: o} = n;
            if (!s) return n;
            let a = o.slidesPerGroup;
            "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
            if (o.loop) {
                if (r && o.loopPreventsSlide) return !1;
                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
            }
            return o.rewind && n.isEnd ? n.slideTo(0, t, e, i) : n.slideTo(n.activeIndex + l, t, e, i)
        }, slidePrev: function (t, e, i) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const n = this, {params: r, animating: s, snapGrid: o, slidesGrid: a, rtlTranslate: l, enabled: c} = n;
            if (!c) return n;
            if (r.loop) {
                if (s && r.loopPreventsSlide) return !1;
                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
            }

            function d(t) {
                return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
            }

            const u = d(l ? n.translate : -n.translate), p = o.map((t => d(t)));
            let h = o[p.indexOf(u) - 1];
            if (void 0 === h && r.cssMode) {
                let t;
                o.forEach(((e, i) => {
                    u >= e && (t = i)
                })), void 0 !== t && (h = o[t > 0 ? t - 1 : t])
            }
            let f = 0;
            if (void 0 !== h && (f = a.indexOf(h), f < 0 && (f = n.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (f = f - n.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), r.rewind && n.isBeginning) {
                const r = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                return n.slideTo(r, t, e, i)
            }
            return n.slideTo(f, t, e, i)
        }, slideReset: function (t, e, i) {
            return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
        }, slideToClosest: function (t, e, i, n) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
            const r = this;
            let s = r.activeIndex;
            const o = Math.min(r.params.slidesPerGroupSkip, s), a = o + Math.floor((s - o) / r.params.slidesPerGroup),
                l = r.rtlTranslate ? r.translate : -r.translate;
            if (l >= r.snapGrid[a]) {
                const t = r.snapGrid[a];
                l - t > (r.snapGrid[a + 1] - t) * n && (s += r.params.slidesPerGroup)
            } else {
                const t = r.snapGrid[a - 1];
                l - t <= (r.snapGrid[a] - t) * n && (s -= r.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, t, e, i)
        }, slideToClickedSlide: function () {
            const t = this, {params: e, $wrapperEl: i} = t,
                n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
            let r, s = t.clickedIndex;
            if (e.loop) {
                if (t.animating) return;
                r = parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), s = i.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), u((() => {
                    t.slideTo(s)
                }))) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(), s = i.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), u((() => {
                    t.slideTo(s)
                }))) : t.slideTo(s)
            } else t.slideTo(s)
        }
    }, D = {
        loopCreate: function () {
            const t = this, e = n(), {params: i, $wrapperEl: r} = t,
                s = r.children().length > 0 ? c(r.children()[0].parentNode) : r;
            s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
            let o = s.children(`.${i.slideClass}`);
            if (i.loopFillGroupWithBlank) {
                const t = i.slidesPerGroup - o.length % i.slidesPerGroup;
                if (t !== i.slidesPerGroup) {
                    for (let n = 0; n < t; n += 1) {
                        const t = c(e.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                        s.append(t)
                    }
                    o = s.children(`.${i.slideClass}`)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = o.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > o.length && t.params.loopedSlidesLimit && (t.loopedSlides = o.length);
            const a = [], l = [];
            o.each(((t, e) => {
                c(t).attr("data-swiper-slide-index", e)
            }));
            for (let e = 0; e < t.loopedSlides; e += 1) {
                const t = e - Math.floor(e / o.length) * o.length;
                l.push(o.eq(t)[0]), a.unshift(o.eq(o.length - t - 1)[0])
            }
            for (let t = 0; t < l.length; t += 1) s.append(c(l[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let t = a.length - 1; t >= 0; t -= 1) s.prepend(c(a[t].cloneNode(!0)).addClass(i.slideDuplicateClass))
        }, loopFix: function () {
            const t = this;
            t.emit("beforeLoopFix");
            const {
                activeIndex: e,
                slides: i,
                loopedSlides: n,
                allowSlidePrev: r,
                allowSlideNext: s,
                snapGrid: o,
                rtlTranslate: a
            } = t;
            let l;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            const c = -o[e] - t.getTranslate();
            e < n ? (l = i.length - 3 * n + e, l += n, t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((a ? -t.translate : t.translate) - c)) : e >= i.length - n && (l = -i.length + e + n, l += n, t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((a ? -t.translate : t.translate) - c)), t.allowSlidePrev = r, t.allowSlideNext = s, t.emit("loopFix")
        }, loopDestroy: function () {
            const {$wrapperEl: t, params: e, slides: i} = this;
            t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };

    function k(t) {
        const e = this, i = n(), r = s(), o = e.touchEventsData, {params: a, touches: l, enabled: d} = e;
        if (!d) return;
        if (e.animating && a.preventInteractionOnTransition) return;
        !e.animating && a.cssMode && a.loop && e.loopFix();
        let u = t;
        u.originalEvent && (u = u.originalEvent);
        let h = c(u.target);
        if ("wrapper" === a.touchEventsTarget && !h.closest(e.wrapperEl).length) return;
        if (o.isTouchEvent = "touchstart" === u.type, !o.isTouchEvent && "which" in u && 3 === u.which) return;
        if (!o.isTouchEvent && "button" in u && u.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const f = !!a.noSwipingClass && "" !== a.noSwipingClass, m = t.composedPath ? t.composedPath() : t.path;
        f && u.target && u.target.shadowRoot && m && (h = c(m[0]));
        const g = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
            v = !(!u.target || !u.target.shadowRoot);
        if (a.noSwiping && (v ? function (t, e) {
            return void 0 === e && (e = this), function e(i) {
                if (!i || i === n() || i === s()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const r = i.closest(t);
                return r || i.getRootNode ? r || e(i.getRootNode().host) : null
            }(e)
        }(g, h[0]) : h.closest(g)[0])) return void (e.allowClick = !0);
        if (a.swipeHandler && !h.closest(a.swipeHandler)[0]) return;
        l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
        const y = l.currentX, b = l.currentY, w = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            _ = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (w && (y <= _ || y >= r.innerWidth - _)) {
            if ("prevent" !== w) return;
            t.preventDefault()
        }
        if (Object.assign(o, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), l.startX = y, l.startY = b, o.touchStartTime = p(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, a.threshold > 0 && (o.allowThresholdMove = !1), "touchstart" !== u.type) {
            let t = !0;
            h.is(o.focusableElements) && (t = !1, "SELECT" === h[0].nodeName && (o.isTouched = !1)), i.activeElement && c(i.activeElement).is(o.focusableElements) && i.activeElement !== h[0] && i.activeElement.blur();
            const n = t && e.allowTouchMove && a.touchStartPreventDefault;
            !a.touchStartForcePreventDefault && !n || h[0].isContentEditable || u.preventDefault()
        }
        e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !a.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", u)
    }

    function A(t) {
        const e = n(), i = this, r = i.touchEventsData, {params: s, touches: o, rtlTranslate: a, enabled: l} = i;
        if (!l) return;
        let d = t;
        if (d.originalEvent && (d = d.originalEvent), !r.isTouched) return void (r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", d));
        if (r.isTouchEvent && "touchmove" !== d.type) return;
        const u = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
            h = "touchmove" === d.type ? u.pageX : d.pageX, f = "touchmove" === d.type ? u.pageY : d.pageY;
        if (d.preventedByNestedSwiper) return o.startX = h, void (o.startY = f);
        if (!i.allowTouchMove) return c(d.target).is(r.focusableElements) || (i.allowClick = !1), void (r.isTouched && (Object.assign(o, {
            startX: h,
            startY: f,
            currentX: h,
            currentY: f
        }), r.touchStartTime = p()));
        if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (i.isVertical()) {
            if (f < o.startY && i.translate <= i.maxTranslate() || f > o.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
        } else if (h < o.startX && i.translate <= i.maxTranslate() || h > o.startX && i.translate >= i.minTranslate()) return;
        if (r.isTouchEvent && e.activeElement && d.target === e.activeElement && c(d.target).is(r.focusableElements)) return r.isMoved = !0, void (i.allowClick = !1);
        if (r.allowTouchCallbacks && i.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        o.currentX = h, o.currentY = f;
        const m = o.currentX - o.startX, g = o.currentY - o.startY;
        if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold) return;
        if (void 0 === r.isScrolling) {
            let t;
            i.isHorizontal() && o.currentY === o.startY || i.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : m * m + g * g >= 25 && (t = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, r.isScrolling = i.isHorizontal() ? t > s.touchAngle : 90 - t > s.touchAngle)
        }
        if (r.isScrolling && i.emit("touchMoveOpposite", d), void 0 === r.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling) return void (r.isTouched = !1);
        if (!r.startMoving) return;
        i.allowClick = !1, !s.cssMode && d.cancelable && d.preventDefault(), s.touchMoveStopPropagation && !s.nested && d.stopPropagation(), r.isMoved || (s.loop && !s.cssMode && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", d)), i.emit("sliderMove", d), r.isMoved = !0;
        let v = i.isHorizontal() ? m : g;
        o.diff = v, v *= s.touchRatio, a && (v = -v), i.swipeDirection = v > 0 ? "prev" : "next", r.currentTranslate = v + r.startTranslate;
        let y = !0, b = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (b = 0), v > 0 && r.currentTranslate > i.minTranslate() ? (y = !1, s.resistance && (r.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + v) ** b)) : v < 0 && r.currentTranslate < i.maxTranslate() && (y = !1, s.resistance && (r.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - v) ** b)), y && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), i.allowSlidePrev || i.allowSlideNext || (r.currentTranslate = r.startTranslate), s.threshold > 0) {
            if (!(Math.abs(v) > s.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
            if (!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void (o.diff = i.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && i.freeMode || s.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && s.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
    }

    function I(t) {
        const e = this, i = e.touchEventsData, {params: n, touches: r, rtlTranslate: s, slidesGrid: o, enabled: a} = e;
        if (!a) return;
        let l = t;
        if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const c = p(), d = c - i.touchStartTime;
        if (e.allowClick) {
            const t = l.path || l.composedPath && l.composedPath();
            e.updateClickedSlide(t && t[0] || l.target), e.emit("tap click", l), d < 300 && c - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", l)
        }
        if (i.lastClickTime = p(), u((() => {
            e.destroyed || (e.allowClick = !0)
        })), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        let h;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? s ? e.translate : -e.translate : -i.currentTranslate, n.cssMode) return;
        if (e.params.freeMode && n.freeMode.enabled) return void e.freeMode.onTouchEnd({currentPos: h});
        let f = 0, m = e.slidesSizesGrid[0];
        for (let t = 0; t < o.length; t += t < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
            const e = t < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            void 0 !== o[t + e] ? h >= o[t] && h < o[t + e] && (f = t, m = o[t + e] - o[t]) : h >= o[t] && (f = t, m = o[o.length - 1] - o[o.length - 2])
        }
        let g = null, v = null;
        n.rewind && (e.isBeginning ? v = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
        const y = (h - o[f]) / m, b = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (d > n.longSwipesMs) {
            if (!n.longSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && (y >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? g : f + b) : e.slideTo(f)), "prev" === e.swipeDirection && (y > 1 - n.longSwipesRatio ? e.slideTo(f + b) : null !== v && y < 0 && Math.abs(y) > n.longSwipesRatio ? e.slideTo(v) : e.slideTo(f))
        } else {
            if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
            !e.navigation || l.target !== e.navigation.nextEl && l.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== g ? g : f + b), "prev" === e.swipeDirection && e.slideTo(null !== v ? v : f)) : l.target === e.navigation.nextEl ? e.slideTo(f + b) : e.slideTo(f)
        }
    }

    function z() {
        const t = this, {params: e, el: i} = t;
        if (i && 0 === i.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {allowSlideNext: n, allowSlidePrev: r, snapGrid: s} = t;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = r, t.allowSlideNext = n, t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow()
    }

    function L(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
    }

    function $() {
        const t = this, {wrapperEl: e, rtlTranslate: i, enabled: n} = t;
        if (!n) return;
        let r;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const s = t.maxTranslate() - t.minTranslate();
        r = 0 === s ? 0 : (t.translate - t.minTranslate()) / s, r !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
    }

    let j = !1;

    function N() {
    }

    const F = (t, e) => {
        const i = n(), {params: r, touchEvents: s, el: o, wrapperEl: a, device: l, support: c} = t, d = !!r.nested,
            u = "on" === e ? "addEventListener" : "removeEventListener", p = e;
        if (c.touch) {
            const e = !("touchstart" !== s.start || !c.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            o[u](s.start, t.onTouchStart, e), o[u](s.move, t.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: d
            } : d), o[u](s.end, t.onTouchEnd, e), s.cancel && o[u](s.cancel, t.onTouchEnd, e)
        } else o[u](s.start, t.onTouchStart, !1), i[u](s.move, t.onTouchMove, d), i[u](s.end, t.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) && o[u]("click", t.onClick, !0), r.cssMode && a[u]("scroll", t.onScroll), r.updateOnWindowResize ? t[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : t[p]("observerUpdate", z, !0)
    };
    var R = {
        attachEvents: function () {
            const t = this, e = n(), {params: i, support: r} = t;
            t.onTouchStart = k.bind(t), t.onTouchMove = A.bind(t), t.onTouchEnd = I.bind(t), i.cssMode && (t.onScroll = $.bind(t)), t.onClick = L.bind(t), r.touch && !j && (e.addEventListener("touchstart", N), j = !0), F(t, "on")
        }, detachEvents: function () {
            F(this, "off")
        }
    };
    const B = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var H = {
        addClasses: function () {
            const t = this, {classNames: e, params: i, rtl: n, $el: r, device: s, support: o} = t, a = function (t, e) {
                const i = [];
                return t.forEach((t => {
                    "object" == typeof t ? Object.keys(t).forEach((n => {
                        t[n] && i.push(e + n)
                    })) : "string" == typeof t && i.push(e + t)
                })), i
            }(["initialized", i.direction, {"pointer-events": !o.touch}, {"free-mode": t.params.freeMode && i.freeMode.enabled}, {autoheight: i.autoHeight}, {rtl: n}, {grid: i.grid && i.grid.rows > 1}, {"grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": i.cssMode}, {centered: i.cssMode && i.centeredSlides}, {"watch-progress": i.watchSlidesProgress}], i.containerModifierClass);
            e.push(...a), r.addClass([...e].join(" ")), t.emitContainerClasses()
        }, removeClasses: function () {
            const {$el: t, classNames: e} = this;
            t.removeClass(e.join(" ")), this.emitContainerClasses()
        }
    }, W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function Y(t, e) {
        return function (i) {
            void 0 === i && (i = {});
            const n = Object.keys(i)[0], r = i[n];
            "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === t[n] && (t[n] = {auto: !0}), n in t && "enabled" in r ? (!0 === t[n] && (t[n] = {enabled: !0}), "object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = {enabled: !1}), g(e, i)) : g(e, i)) : g(e, i)
        }
    }

    const q = {
        eventsEmitter: C, update: S, translate: M, transition: {
            setTransition: function (t, e) {
                const i = this;
                i.params.cssMode || i.$wrapperEl.transition(t), i.emit("setTransition", t, e)
            }, transitionStart: function (t, e) {
                void 0 === t && (t = !0);
                const i = this, {params: n} = i;
                n.cssMode || (n.autoHeight && i.updateAutoHeight(), P({
                    swiper: i,
                    runCallbacks: t,
                    direction: e,
                    step: "Start"
                }))
            }, transitionEnd: function (t, e) {
                void 0 === t && (t = !0);
                const i = this, {params: n} = i;
                i.animating = !1, n.cssMode || (i.setTransition(0), P({
                    swiper: i,
                    runCallbacks: t,
                    direction: e,
                    step: "End"
                }))
            }
        }, slide: O, loop: D, grabCursor: {
            setGrabCursor: function (t) {
                const e = this;
                if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
                const i = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
                i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                const t = this;
                t.support.touch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: R, breakpoints: {
            setBreakpoint: function () {
                const t = this, {activeIndex: e, initialized: i, loopedSlides: n = 0, params: r, $el: s} = t,
                    o = r.breakpoints;
                if (!o || o && 0 === Object.keys(o).length) return;
                const a = t.getBreakpoint(o, t.params.breakpointsBase, t.el);
                if (!a || t.currentBreakpoint === a) return;
                const l = (a in o ? o[a] : void 0) || t.originalParams, c = B(t, r), d = B(t, l), u = r.enabled;
                c && !d ? (s.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), t.emitContainerClasses()) : !c && d && (s.addClass(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && s.addClass(`${r.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((e => {
                    const i = r[e] && r[e].enabled, n = l[e] && l[e].enabled;
                    i && !n && t[e].disable(), !i && n && t[e].enable()
                }));
                const p = l.direction && l.direction !== r.direction,
                    h = r.loop && (l.slidesPerView !== r.slidesPerView || p);
                p && i && t.changeDirection(), g(t.params, l);
                const f = t.params.enabled;
                Object.assign(t, {
                    allowTouchMove: t.params.allowTouchMove,
                    allowSlideNext: t.params.allowSlideNext,
                    allowSlidePrev: t.params.allowSlidePrev
                }), u && !f ? t.disable() : !u && f && t.enable(), t.currentBreakpoint = a, t.emit("_beforeBreakpoint", l), h && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - n + t.loopedSlides, 0, !1)), t.emit("breakpoint", l)
            }, getBreakpoint: function (t, e, i) {
                if (void 0 === e && (e = "window"), !t || "container" === e && !i) return;
                let n = !1;
                const r = s(), o = "window" === e ? r.innerHeight : i.clientHeight, a = Object.keys(t).map((t => {
                    if ("string" == typeof t && 0 === t.indexOf("@")) {
                        const e = parseFloat(t.substr(1));
                        return {value: o * e, point: t}
                    }
                    return {value: t, point: t}
                }));
                a.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
                for (let t = 0; t < a.length; t += 1) {
                    const {point: s, value: o} = a[t];
                    "window" === e ? r.matchMedia(`(min-width: ${o}px)`).matches && (n = s) : o <= i.clientWidth && (n = s)
                }
                return n || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const t = this, {isLocked: e, params: i} = t, {slidesOffsetBefore: n} = i;
                if (n) {
                    const e = t.slides.length - 1, i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                    t.isLocked = t.size > i
                } else t.isLocked = 1 === t.snapGrid.length;
                !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
        }, classes: H, images: {
            loadImage: function (t, e, i, n, r, o) {
                const a = s();
                let l;

                function d() {
                    o && o()
                }

                c(t).parent("picture")[0] || t.complete && r ? d() : e ? (l = new a.Image, l.onload = d, l.onerror = d, n && (l.sizes = n), i && (l.srcset = i), e && (l.src = e)) : d()
            }, preloadImages: function () {
                const t = this;

                function e() {
                    null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                }

                t.imagesToLoad = t.$el.find("img");
                for (let i = 0; i < t.imagesToLoad.length; i += 1) {
                    const n = t.imagesToLoad[i];
                    t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                }
            }
        }
    }, X = {};

    class V {
        constructor() {
            let t, e;
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
            if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? e = n[0] : [t, e] = n, e || (e = {}), e = g({}, e), t && !e.el && (e.el = t), e.el && c(e.el).length > 1) {
                const t = [];
                return c(e.el).each((i => {
                    const n = g({}, e, {el: i});
                    t.push(new V(n))
                })), t
            }
            const s = this;
            s.__swiper__ = !0, s.support = x(), s.device = E({userAgent: e.userAgent}), s.browser = T(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], e.modules && Array.isArray(e.modules) && s.modules.push(...e.modules);
            const o = {};
            s.modules.forEach((t => {
                t({
                    swiper: s,
                    extendParams: Y(e, o),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            }));
            const a = g({}, W, o);
            return s.params = g({}, a, X, e), s.originalParams = g({}, s.params), s.passedParams = g({}, e), s.params && s.params.on && Object.keys(s.params.on).forEach((t => {
                s.on(t, s.params.on[t])
            })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = c, Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function () {
                    const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        e = ["pointerdown", "pointermove", "pointerup"];
                    return s.touchEventsTouch = {
                        start: t[0],
                        move: t[1],
                        end: t[2],
                        cancel: t[3]
                    }, s.touchEventsDesktop = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: p(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.emit("_swiper"), s.params.init && s.init(), s
        }

        enable() {
            const t = this;
            t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }

        disable() {
            const t = this;
            t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }

        setProgress(t, e) {
            const i = this;
            t = Math.min(Math.max(t, 0), 1);
            const n = i.minTranslate(), r = (i.maxTranslate() - n) * t + n;
            i.translateTo(r, void 0 === e ? 0 : e), i.updateActiveIndex(), i.updateSlidesClasses()
        }

        emitContainerClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
            t.emit("_containerClasses", e.join(" "))
        }

        getSlideClasses(t) {
            const e = this;
            return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = [];
            t.slides.each((i => {
                const n = t.getSlideClasses(i);
                e.push({slideEl: i, classNames: n}), t.emit("_slideClass", i, n)
            })), t.emit("_slideClasses", e)
        }

        slidesPerViewDynamic(t, e) {
            void 0 === t && (t = "current"), void 0 === e && (e = !1);
            const {params: i, slides: n, slidesGrid: r, slidesSizesGrid: s, size: o, activeIndex: a} = this;
            let l = 1;
            if (i.centeredSlides) {
                let t, e = n[a].swiperSlideSize;
                for (let i = a + 1; i < n.length; i += 1) n[i] && !t && (e += n[i].swiperSlideSize, l += 1, e > o && (t = !0));
                for (let i = a - 1; i >= 0; i -= 1) n[i] && !t && (e += n[i].swiperSlideSize, l += 1, e > o && (t = !0))
            } else if ("current" === t) for (let t = a + 1; t < n.length; t += 1) (e ? r[t] + s[t] - r[a] < o : r[t] - r[a] < o) && (l += 1); else for (let t = a - 1; t >= 0; t -= 1) r[a] - r[t] < o && (l += 1);
            return l
        }

        update() {
            const t = this;
            if (!t || t.destroyed) return;
            const {snapGrid: e, params: i} = t;

            function n() {
                const e = t.rtlTranslate ? -1 * t.translate : t.translate,
                    i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            let r;
            i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (r = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), r || n()), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }

        changeDirection(t, e) {
            void 0 === e && (e = !0);
            const i = this, n = i.params.direction;
            return t || (t = "horizontal" === n ? "vertical" : "horizontal"), t === n || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.each((e => {
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            })), i.emit("changeDirection"), e && i.update()), i
        }

        changeLanguageDirection(t) {
            const e = this;
            e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.$el.addClass(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.$el.removeClass(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
        }

        mount(t) {
            const e = this;
            if (e.mounted) return !0;
            const i = c(t || e.params.el);
            if (!(t = i[0])) return !1;
            t.swiper = e;
            const r = () => `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let s = (() => {
                if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                    const e = c(t.shadowRoot.querySelector(r()));
                    return e.children = t => i.children(t), e
                }
                return i.children ? i.children(r()) : c(i).children(r())
            })();
            if (0 === s.length && e.params.createElements) {
                const t = n().createElement("div");
                s = c(t), t.className = e.params.wrapperClass, i.append(t), i.children(`.${e.params.slideClass}`).each((t => {
                    s.append(t)
                }))
            }
            return Object.assign(e, {
                $el: i,
                el: t,
                $wrapperEl: s,
                wrapperEl: s[0],
                mounted: !0,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === s.css("display")
            }), !0
        }

        init(t) {
            const e = this;
            return e.initialized || !1 === e.mount(t) || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.attachEvents(), e.initialized = !0, e.emit("init"), e.emit("afterInit")), e
        }

        destroy(t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = !0);
            const i = this, {params: n, $el: r, $wrapperEl: s, slides: o} = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((t => {
                i.off(t)
            })), !1 !== t && (i.$el[0].swiper = null, function (t) {
                const e = t;
                Object.keys(e).forEach((t => {
                    try {
                        e[t] = null
                    } catch (t) {
                    }
                    try {
                        delete e[t]
                    } catch (t) {
                    }
                }))
            }(i)), i.destroyed = !0), null
        }

        static extendDefaults(t) {
            g(X, t)
        }

        static get extendedDefaults() {
            return X
        }

        static get defaults() {
            return W
        }

        static installModule(t) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const e = V.prototype.__modules__;
            "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }

        static use(t) {
            return Array.isArray(t) ? (t.forEach((t => V.installModule(t))), V) : (V.installModule(t), V)
        }
    }

    function G(t, e, i, r) {
        const s = n();
        return t.params.createElements && Object.keys(r).forEach((n => {
            if (!i[n] && !0 === i.auto) {
                let o = t.$el.children(`.${r[n]}`)[0];
                o || (o = s.createElement("div"), o.className = r[n], t.$el.append(o)), i[n] = o, e[n] = o
            }
        })), i
    }

    function U(t) {
        return void 0 === t && (t = ""), `.${t.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function Z(t) {
        const e = this, {$wrapperEl: i, params: n} = e;
        if (n.loop && e.loopDestroy(), "object" == typeof t && "length" in t) for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]); else i.append(t);
        n.loop && e.loopCreate(), n.observer || e.update()
    }

    function K(t) {
        const e = this, {params: i, $wrapperEl: n, activeIndex: r} = e;
        i.loop && e.loopDestroy();
        let s = r + 1;
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && n.prepend(t[e]);
            s = r + t.length
        } else n.prepend(t);
        i.loop && e.loopCreate(), i.observer || e.update(), e.slideTo(s, 0, !1)
    }

    function Q(t, e) {
        const i = this, {$wrapperEl: n, params: r, activeIndex: s} = i;
        let o = s;
        r.loop && (o -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(`.${r.slideClass}`));
        const a = i.slides.length;
        if (t <= 0) return void i.prependSlide(e);
        if (t >= a) return void i.appendSlide(e);
        let l = o > t ? o + 1 : o;
        const c = [];
        for (let e = a - 1; e >= t; e -= 1) {
            const t = i.slides.eq(e);
            t.remove(), c.unshift(t)
        }
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]);
            l = o > t ? o + e.length : o
        } else n.append(e);
        for (let t = 0; t < c.length; t += 1) n.append(c[t]);
        r.loop && i.loopCreate(), r.observer || i.update(), r.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
    }

    function J(t) {
        const e = this, {params: i, $wrapperEl: n, activeIndex: r} = e;
        let s = r;
        i.loop && (s -= e.loopedSlides, e.loopDestroy(), e.slides = n.children(`.${i.slideClass}`));
        let o, a = s;
        if ("object" == typeof t && "length" in t) {
            for (let i = 0; i < t.length; i += 1) o = t[i], e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1);
            a = Math.max(a, 0)
        } else o = t, e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1), a = Math.max(a, 0);
        i.loop && e.loopCreate(), i.observer || e.update(), i.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1)
    }

    function tt() {
        const t = this, e = [];
        for (let i = 0; i < t.slides.length; i += 1) e.push(i);
        t.removeSlide(e)
    }

    function et(t) {
        const {
            effect: e,
            swiper: i,
            on: n,
            setTranslate: r,
            setTransition: s,
            overwriteParams: o,
            perspective: a,
            recreateShadows: l,
            getEffectParams: c
        } = t;
        let d;
        n("beforeInit", (() => {
            if (i.params.effect !== e) return;
            i.classNames.push(`${i.params.containerModifierClass}${e}`), a && a() && i.classNames.push(`${i.params.containerModifierClass}3d`);
            const t = o ? o() : {};
            Object.assign(i.params, t), Object.assign(i.originalParams, t)
        })), n("setTranslate", (() => {
            i.params.effect === e && r()
        })), n("setTransition", ((t, n) => {
            i.params.effect === e && s(n)
        })), n("transitionEnd", (() => {
            if (i.params.effect === e && l) {
                if (!c || !c().slideShadows) return;
                i.slides.each((t => {
                    i.$(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), l()
            }
        })), n("virtualUpdate", (() => {
            i.params.effect === e && (i.slides.length || (d = !0), requestAnimationFrame((() => {
                d && i.slides && i.slides.length && (r(), d = !1)
            })))
        }))
    }

    function it(t, e) {
        return t.transformEl ? e.find(t.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : e
    }

    function nt(t) {
        let {swiper: e, duration: i, transformEl: n, allSlides: r} = t;
        const {slides: s, activeIndex: o, $wrapperEl: a} = e;
        if (e.params.virtualTranslate && 0 !== i) {
            let t, i = !1;
            t = r ? n ? s.find(n) : s : n ? s.eq(o).find(n) : s.eq(o), t.transitionEnd((() => {
                if (i) return;
                if (!e || e.destroyed) return;
                i = !0, e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
            }))
        }
    }

    function rt(t, e, i) {
        const n = "swiper-slide-shadow" + (i ? `-${i}` : ""), r = t.transformEl ? e.find(t.transformEl) : e;
        let s = r.children(`.${n}`);
        return s.length || (s = c(`<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`), r.append(s)), s
    }

    Object.keys(q).forEach((t => {
        Object.keys(q[t]).forEach((e => {
            V.prototype[e] = q[t][e]
        }))
    })), V.use([function (t) {
        let {swiper: e, on: i, emit: n} = t;
        const r = s();
        let o = null, a = null;
        const l = () => {
            e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
        }, c = () => {
            e && !e.destroyed && e.initialized && n("orientationchange")
        };
        i("init", (() => {
            e.params.resizeObserver && void 0 !== r.ResizeObserver ? e && !e.destroyed && e.initialized && (o = new ResizeObserver((t => {
                a = r.requestAnimationFrame((() => {
                    const {width: i, height: n} = e;
                    let r = i, s = n;
                    t.forEach((t => {
                        let {contentBoxSize: i, contentRect: n, target: o} = t;
                        o && o !== e.el || (r = n ? n.width : (i[0] || i).inlineSize, s = n ? n.height : (i[0] || i).blockSize)
                    })), r === i && s === n || l()
                }))
            })), o.observe(e.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", c))
        })), i("destroy", (() => {
            a && r.cancelAnimationFrame(a), o && o.unobserve && e.el && (o.unobserve(e.el), o = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", c)
        }))
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;
        const o = [], a = s(), l = function (t, e) {
            void 0 === e && (e = {});
            const i = new (a.MutationObserver || a.WebkitMutationObserver)((t => {
                if (1 === t.length) return void r("observerUpdate", t[0]);
                const e = function () {
                    r("observerUpdate", t[0])
                };
                a.requestAnimationFrame ? a.requestAnimationFrame(e) : a.setTimeout(e, 0)
            }));
            i.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData
            }), o.push(i)
        };
        i({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) l(t[e])
                }
                l(e.$el[0], {childList: e.params.observeSlideChildren}), l(e.$wrapperEl[0], {attributes: !1})
            }
        })), n("destroy", (() => {
            o.forEach((t => {
                t.disconnect()
            })), o.splice(0, o.length)
        }))
    }]);
    const st = [function (t) {
        let e, {swiper: i, extendParams: n, on: r, emit: s} = t;

        function o(t, e) {
            const n = i.params.virtual;
            if (n.cache && i.virtual.cache[e]) return i.virtual.cache[e];
            const r = n.renderSlide ? c(n.renderSlide.call(i, t, e)) : c(`<div class="${i.params.slideClass}" data-swiper-slide-index="${e}">${t}</div>`);
            return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", e), n.cache && (i.virtual.cache[e] = r), r
        }

        function a(t) {
            const {slidesPerView: e, slidesPerGroup: n, centeredSlides: r} = i.params, {
                addSlidesBefore: a,
                addSlidesAfter: l
            } = i.params.virtual, {from: c, to: d, slides: u, slidesGrid: p, offset: h} = i.virtual;
            i.params.cssMode || i.updateActiveIndex();
            const f = i.activeIndex || 0;
            let m, g, v;
            m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (g = Math.floor(e / 2) + n + l, v = Math.floor(e / 2) + n + a) : (g = e + (n - 1) + l, v = n + a);
            const y = Math.max((f || 0) - v, 0), b = Math.min((f || 0) + g, u.length - 1),
                w = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);

            function _() {
                i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load(), s("virtualUpdate")
            }

            if (Object.assign(i.virtual, {
                from: y,
                to: b,
                offset: w,
                slidesGrid: i.slidesGrid
            }), c === y && d === b && !t) return i.slidesGrid !== p && w !== h && i.slides.css(m, `${w}px`), i.updateProgress(), void s("virtualUpdate");
            if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                offset: w,
                from: y,
                to: b,
                slides: function () {
                    const t = [];
                    for (let e = y; e <= b; e += 1) t.push(u[e]);
                    return t
                }()
            }), void (i.params.virtual.renderExternalUpdate ? _() : s("virtualUpdate"));
            const x = [], E = [];
            if (t) i.$wrapperEl.find(`.${i.params.slideClass}`).remove(); else for (let t = c; t <= d; t += 1) (t < y || t > b) && i.$wrapperEl.find(`.${i.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < u.length; e += 1) e >= y && e <= b && (void 0 === d || t ? E.push(e) : (e > d && E.push(e), e < c && x.push(e)));
            E.forEach((t => {
                i.$wrapperEl.append(o(u[t], t))
            })), x.sort(((t, e) => e - t)).forEach((t => {
                i.$wrapperEl.prepend(o(u[t], t))
            })), i.$wrapperEl.children(".swiper-slide").css(m, `${w}px`), _()
        }

        n({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, r("beforeInit", (() => {
            i.params.virtual.enabled && (i.virtual.slides = i.params.virtual.slides, i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, i.params.initialSlide || a())
        })), r("setTranslate", (() => {
            i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(e), e = setTimeout((() => {
                a()
            }), 100)) : a())
        })), r("init update resize", (() => {
            i.params.virtual.enabled && i.params.cssMode && v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
        })), Object.assign(i.virtual, {
            appendSlide: function (t) {
                if ("object" == typeof t && "length" in t) for (let e = 0; e < t.length; e += 1) t[e] && i.virtual.slides.push(t[e]); else i.virtual.slides.push(t);
                a(!0)
            }, prependSlide: function (t) {
                const e = i.activeIndex;
                let n = e + 1, r = 1;
                if (Array.isArray(t)) {
                    for (let e = 0; e < t.length; e += 1) t[e] && i.virtual.slides.unshift(t[e]);
                    n = e + t.length, r = t.length
                } else i.virtual.slides.unshift(t);
                if (i.params.virtual.cache) {
                    const t = i.virtual.cache, e = {};
                    Object.keys(t).forEach((i => {
                        const n = t[i], s = n.attr("data-swiper-slide-index");
                        s && n.attr("data-swiper-slide-index", parseInt(s, 10) + r), e[parseInt(i, 10) + r] = n
                    })), i.virtual.cache = e
                }
                a(!0), i.slideTo(n, 0)
            }, removeSlide: function (t) {
                if (null == t) return;
                let e = i.activeIndex;
                if (Array.isArray(t)) for (let n = t.length - 1; n >= 0; n -= 1) i.virtual.slides.splice(t[n], 1), i.params.virtual.cache && delete i.virtual.cache[t[n]], t[n] < e && (e -= 1), e = Math.max(e, 0); else i.virtual.slides.splice(t, 1), i.params.virtual.cache && delete i.virtual.cache[t], t < e && (e -= 1), e = Math.max(e, 0);
                a(!0), i.slideTo(e, 0)
            }, removeAllSlides: function () {
                i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), a(!0), i.slideTo(0, 0)
            }, update: a
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: r, emit: o} = t;
        const a = n(), l = s();

        function d(t) {
            if (!e.enabled) return;
            const {rtlTranslate: i} = e;
            let n = t;
            n.originalEvent && (n = n.originalEvent);
            const r = n.keyCode || n.charCode, s = e.params.keyboard.pageUpDown, c = s && 33 === r, d = s && 34 === r,
                u = 37 === r, p = 39 === r, h = 38 === r, f = 40 === r;
            if (!e.allowSlideNext && (e.isHorizontal() && p || e.isVertical() && f || d)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && u || e.isVertical() && h || c)) return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (c || d || u || p || h || f)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                    const n = e.$el, r = n[0].clientWidth, s = n[0].clientHeight, o = l.innerWidth, a = l.innerHeight,
                        c = e.$el.offset();
                    i && (c.left -= e.$el[0].scrollLeft);
                    const d = [[c.left, c.top], [c.left + r, c.top], [c.left, c.top + s], [c.left + r, c.top + s]];
                    for (let e = 0; e < d.length; e += 1) {
                        const i = d[e];
                        if (i[0] >= 0 && i[0] <= o && i[1] >= 0 && i[1] <= a) {
                            if (0 === i[0] && 0 === i[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((c || d || u || p) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((d || p) && !i || (c || u) && i) && e.slideNext(), ((c || u) && !i || (d || p) && i) && e.slidePrev()) : ((c || d || h || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (d || f) && e.slideNext(), (c || h) && e.slidePrev()), o("keyPress", r)
            }
        }

        function u() {
            e.keyboard.enabled || (c(a).on("keydown", d), e.keyboard.enabled = !0)
        }

        function p() {
            e.keyboard.enabled && (c(a).off("keydown", d), e.keyboard.enabled = !1)
        }

        e.keyboard = {enabled: !1}, i({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), r("init", (() => {
            e.params.keyboard.enabled && u()
        })), r("destroy", (() => {
            e.keyboard.enabled && p()
        })), Object.assign(e.keyboard, {enable: u, disable: p})
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;
        const o = s();
        let a;
        i({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {enabled: !1};
        let l, d = p();
        const h = [];

        function f() {
            e.enabled && (e.mouseEntered = !0)
        }

        function m() {
            e.enabled && (e.mouseEntered = !1)
        }

        function g(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && p() - d < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && p() - d < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), r("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), r("scroll", t.raw)), d = (new o.Date).getTime(), 1))
        }

        function v(t) {
            let i = t, n = !0;
            if (!e.enabled) return;
            const s = e.params.mousewheel;
            e.params.cssMode && i.preventDefault();
            let o = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (o = c(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(i.target) && !s.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            let d = 0;
            const f = e.rtlTranslate ? -1 : 1, m = function (t) {
                let e = 0, i = 0, n = 0, r = 0;
                return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, r = 10 * i, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = r, r = 0), (n || r) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !e && (e = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                    spinX: e,
                    spinY: i,
                    pixelX: n,
                    pixelY: r
                }
            }(i);
            if (s.forceToAxis) if (e.isHorizontal()) {
                if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                d = -m.pixelX * f
            } else {
                if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                d = -m.pixelY
            } else d = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * f : -m.pixelY;
            if (0 === d) return !0;
            s.invert && (d = -d);
            let v = e.getTranslate() + d * s.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), n = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), n && e.params.nested && i.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {time: p(), delta: Math.abs(d), direction: Math.sign(d)},
                    n = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                if (!n) {
                    l = void 0, e.params.loop && e.loopFix();
                    let o = e.getTranslate() + d * s.sensitivity;
                    const c = e.isBeginning, p = e.isEnd;
                    if (o >= e.minTranslate() && (o = e.minTranslate()), o <= e.maxTranslate() && (o = e.maxTranslate()), e.setTransition(0), e.setTranslate(o), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!c && e.isBeginning || !p && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(a), a = void 0, h.length >= 15 && h.shift();
                        const i = h.length ? h[h.length - 1] : void 0, n = h[0];
                        if (h.push(t), i && (t.delta > i.delta || t.direction !== i.direction)) h.splice(0); else if (h.length >= 15 && t.time - n.time < 500 && n.delta - t.delta >= 1 && t.delta <= 6) {
                            const i = d > 0 ? .8 : .2;
                            l = t, h.splice(0), a = u((() => {
                                e.slideToClosest(e.params.speed, !0, void 0, i)
                            }), 0)
                        }
                        a || (a = u((() => {
                            l = t, h.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (n || r("scroll", i), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), o === e.minTranslate() || o === e.maxTranslate()) return !0
                }
            } else {
                const i = {time: p(), delta: Math.abs(d), direction: Math.sign(d), raw: t};
                h.length >= 2 && h.shift();
                const n = h.length ? h[h.length - 1] : void 0;
                if (h.push(i), n ? (i.direction !== n.direction || i.delta > n.delta || i.time > n.time + 150) && g(i) : g(i), function (t) {
                    const i = e.params.mousewheel;
                    if (t.direction < 0) {
                        if (e.isEnd && !e.params.loop && i.releaseOnEdges) return !0
                    } else if (e.isBeginning && !e.params.loop && i.releaseOnEdges) return !0;
                    return !1
                }(i)) return !0
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        }

        function y(t) {
            let i = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (i = c(e.params.mousewheel.eventsTarget)), i[t]("mouseenter", f), i[t]("mouseleave", m), i[t]("wheel", v)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", v), !0) : !e.mousewheel.enabled && (y("on"), e.mousewheel.enabled = !0, !0)
        }

        function w() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, v), !0) : !!e.mousewheel.enabled && (y("off"), e.mousewheel.enabled = !1, !0)
        }

        n("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && w(), e.params.mousewheel.enabled && b()
        })), n("destroy", (() => {
            e.params.cssMode && b(), e.mousewheel.enabled && w()
        })), Object.assign(e.mousewheel, {enable: b, disable: w})
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;

        function s(t) {
            let i;
            return t && (i = c(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
        }

        function o(t, i) {
            const n = e.params.navigation;
            t && t.length > 0 && (t[i ? "addClass" : "removeClass"](n.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](n.lockClass))
        }

        function a() {
            if (e.params.loop) return;
            const {$nextEl: t, $prevEl: i} = e.navigation;
            o(i, e.isBeginning && !e.params.rewind), o(t, e.isEnd && !e.params.rewind)
        }

        function l(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), r("navigationPrev"))
        }

        function d(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), r("navigationNext"))
        }

        function u() {
            const t = e.params.navigation;
            if (e.params.navigation = G(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
            const i = s(t.nextEl), n = s(t.prevEl);
            i && i.length > 0 && i.on("click", d), n && n.length > 0 && n.on("click", l), Object.assign(e.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: n,
                prevEl: n && n[0]
            }), e.enabled || (i && i.addClass(t.lockClass), n && n.addClass(t.lockClass))
        }

        function p() {
            const {$nextEl: t, $prevEl: i} = e.navigation;
            t && t.length && (t.off("click", d), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(e.params.navigation.disabledClass))
        }

        i({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, n("init", (() => {
            !1 === e.params.navigation.enabled ? h() : (u(), a())
        })), n("toEdge fromEdge lock unlock", (() => {
            a()
        })), n("destroy", (() => {
            p()
        })), n("enable disable", (() => {
            const {$nextEl: t, $prevEl: i} = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), n("click", ((t, i) => {
            const {$nextEl: n, $prevEl: s} = e.navigation, o = i.target;
            if (e.params.navigation.hideOnClick && !c(o).is(s) && !c(o).is(n)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                let t;
                n ? t = n.hasClass(e.params.navigation.hiddenClass) : s && (t = s.hasClass(e.params.navigation.hiddenClass)), r(!0 === t ? "navigationShow" : "navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), p()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.$el.removeClass(e.params.navigation.navigationDisabledClass), u(), a()
            }, disable: h, update: a, init: u, destroy: p
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;
        const s = "swiper-pagination";
        let o;
        i({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: t => t,
                formatFractionTotal: t => t,
                bulletClass: `${s}-bullet`,
                bulletActiveClass: `${s}-bullet-active`,
                modifierClass: `${s}-`,
                currentClass: `${s}-current`,
                totalClass: `${s}-total`,
                hiddenClass: `${s}-hidden`,
                progressbarFillClass: `${s}-progressbar-fill`,
                progressbarOppositeClass: `${s}-progressbar-opposite`,
                clickableClass: `${s}-clickable`,
                lockClass: `${s}-lock`,
                horizontalClass: `${s}-horizontal`,
                verticalClass: `${s}-vertical`,
                paginationDisabledClass: `${s}-disabled`
            }
        }), e.pagination = {el: null, $el: null, bullets: []};
        let a = 0;

        function l() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function d(t, i) {
            const {bulletActiveClass: n} = e.params.pagination;
            t[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`)
        }

        function u() {
            const t = e.rtl, i = e.params.pagination;
            if (l()) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                s = e.pagination.$el;
            let u;
            const p = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (u = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), u > n - 1 - 2 * e.loopedSlides && (u -= n - 2 * e.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== e.params.paginationType && (u = p + u)) : u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const n = e.pagination.bullets;
                let r, l, p;
                if (i.dynamicBullets && (o = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", o * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (a += u - (e.previousIndex - e.loopedSlides || 0), a > i.dynamicMainBullets - 1 ? a = i.dynamicMainBullets - 1 : a < 0 && (a = 0)), r = Math.max(u - a, 0), l = r + (Math.min(n.length, i.dynamicMainBullets) - 1), p = (l + r) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t => `${i.bulletActiveClass}${t}`)).join(" ")), s.length > 1) n.each((t => {
                    const e = c(t), n = e.index();
                    n === u && e.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= r && n <= l && e.addClass(`${i.bulletActiveClass}-main`), n === r && d(e, "prev"), n === l && d(e, "next"))
                })); else {
                    const t = n.eq(u), s = t.index();
                    if (t.addClass(i.bulletActiveClass), i.dynamicBullets) {
                        const t = n.eq(r), o = n.eq(l);
                        for (let t = r; t <= l; t += 1) n.eq(t).addClass(`${i.bulletActiveClass}-main`);
                        if (e.params.loop) if (s >= n.length) {
                            for (let t = i.dynamicMainBullets; t >= 0; t -= 1) n.eq(n.length - t).addClass(`${i.bulletActiveClass}-main`);
                            n.eq(n.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                        } else d(t, "prev"), d(o, "next"); else d(t, "prev"), d(o, "next")
                    }
                }
                if (i.dynamicBullets) {
                    const r = Math.min(n.length, i.dynamicMainBullets + 4), s = (o * r - o) / 2 - p * o,
                        a = t ? "right" : "left";
                    n.css(e.isHorizontal() ? a : "top", `${s}px`)
                }
            }
            if ("fraction" === i.type && (s.find(U(i.currentClass)).text(i.formatFractionCurrent(u + 1)), s.find(U(i.totalClass)).text(i.formatFractionTotal(p))), "progressbar" === i.type) {
                let t;
                t = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const n = (u + 1) / p;
                let r = 1, o = 1;
                "horizontal" === t ? r = n : o = n, s.find(U(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${o})`).transition(e.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, u + 1, p)), r("paginationRender", s[0])) : r("paginationUpdate", s[0]), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
        }

        function p() {
            const t = e.params.pagination;
            if (l()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                n = e.pagination.$el;
            let s = "";
            if ("bullets" === t.type) {
                let r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && r > i && (r = i);
                for (let i = 0; i < r; i += 1) t.renderBullet ? s += t.renderBullet.call(e, i, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                n.html(s), e.pagination.bullets = n.find(U(t.bulletClass))
            }
            "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, n.html(s)), "custom" !== t.type && r("paginationRender", e.pagination.$el[0])
        }

        function h() {
            e.params.pagination = G(e, e.originalParams.pagination, e.params.pagination, {el: "swiper-pagination"});
            const t = e.params.pagination;
            if (!t.el) return;
            let i = c(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el), i.length > 1 && (i = i.filter((t => c(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", U(t.bulletClass), (function (t) {
                t.preventDefault();
                let i = c(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i)
            })), Object.assign(e.pagination, {$el: i, el: i[0]}), e.enabled || i.addClass(t.lockClass))
        }

        function f() {
            const t = e.params.pagination;
            if (l()) return;
            const i = e.pagination.$el;
            i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", U(t.bulletClass))
        }

        n("init", (() => {
            !1 === e.params.pagination.enabled ? m() : (h(), p(), u())
        })), n("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && u()
        })), n("snapIndexChange", (() => {
            e.params.loop || u()
        })), n("slidesLengthChange", (() => {
            e.params.loop && (p(), u())
        })), n("snapGridLengthChange", (() => {
            e.params.loop || (p(), u())
        })), n("destroy", (() => {
            f()
        })), n("enable disable", (() => {
            const {$el: t} = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), n("lock unlock", (() => {
            u()
        })), n("click", ((t, i) => {
            const n = i.target, {$el: s} = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && s && s.length > 0 && !c(n).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
                const t = s.hasClass(e.params.pagination.hiddenClass);
                r(!0 === t ? "paginationShow" : "paginationHide"), s.toggleClass(e.params.pagination.hiddenClass)
            }
        }));
        const m = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), f()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), h(), p(), u()
            }, disable: m, render: p, update: u, init: h, destroy: f
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: r, emit: s} = t;
        const o = n();
        let a, l, d, p, h = !1, f = null, m = null;

        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t, rtlTranslate: i, progress: n} = e, {$dragEl: r, $el: s} = t, o = e.params.scrollbar;
            let a = l, c = (d - l) * n;
            i ? (c = -c, c > 0 ? (a = l - c, c = 0) : -c + l > d && (a = d + c)) : c < 0 ? (a = l + c, c = 0) : c + l > d && (a = d - c), e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`), r[0].style.width = `${a}px`) : (r.transform(`translate3d(0px, ${c}px, 0)`), r[0].style.height = `${a}px`), o.hide && (clearTimeout(f), s[0].style.opacity = 1, f = setTimeout((() => {
                s[0].style.opacity = 0, s.transition(400)
            }), 1e3))
        }

        function v() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t} = e, {$dragEl: i, $el: n} = t;
            i[0].style.width = "", i[0].style.height = "", d = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, p = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? d * p : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = `${l}px` : i[0].style.height = `${l}px`, n[0].style.display = p >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }

        function y(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }

        function b(t) {
            const {scrollbar: i, rtlTranslate: n} = e, {$el: r} = i;
            let s;
            s = (y(t) - r.offset()[e.isHorizontal() ? "left" : "top"] - (null !== a ? a : l / 2)) / (d - l), s = Math.max(Math.min(s, 1), 0), n && (s = 1 - s);
            const o = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * s;
            e.updateProgress(o), e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function w(t) {
            const i = e.params.scrollbar, {scrollbar: n, $wrapperEl: r} = e, {$el: o, $dragEl: l} = n;
            h = !0, a = t.target === l[0] || t.target === l ? y(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), l.transition(100), b(t), clearTimeout(m), o.transition(0), i.hide && o.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), s("scrollbarDragStart", t)
        }

        function _(t) {
            const {scrollbar: i, $wrapperEl: n} = e, {$el: r, $dragEl: o} = i;
            h && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, b(t), n.transition(0), r.transition(0), o.transition(0), s("scrollbarDragMove", t))
        }

        function x(t) {
            const i = e.params.scrollbar, {scrollbar: n, $wrapperEl: r} = e, {$el: o} = n;
            h && (h = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), i.hide && (clearTimeout(m), m = u((() => {
                o.css("opacity", 0), o.transition(400)
            }), 1e3)), s("scrollbarDragEnd", t), i.snapOnRelease && e.slideToClosest())
        }

        function E(t) {
            const {scrollbar: i, touchEventsTouch: n, touchEventsDesktop: r, params: s, support: a} = e, l = i.$el;
            if (!l) return;
            const c = l[0], d = !(!a.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                u = !(!a.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
            if (!c) return;
            const p = "on" === t ? "addEventListener" : "removeEventListener";
            a.touch ? (c[p](n.start, w, d), c[p](n.move, _, d), c[p](n.end, x, u)) : (c[p](r.start, w, d), o[p](r.move, _, d), o[p](r.end, x, u))
        }

        function T() {
            const {scrollbar: t, $el: i} = e;
            e.params.scrollbar = G(e, e.originalParams.scrollbar, e.params.scrollbar, {el: "swiper-scrollbar"});
            const n = e.params.scrollbar;
            if (!n.el) return;
            let r = c(n.el);
            e.params.uniqueNavElements && "string" == typeof n.el && r.length > 1 && 1 === i.find(n.el).length && (r = i.find(n.el)), r.addClass(e.isHorizontal() ? n.horizontalClass : n.verticalClass);
            let s = r.find(`.${e.params.scrollbar.dragClass}`);
            0 === s.length && (s = c(`<div class="${e.params.scrollbar.dragClass}"></div>`), r.append(s)), Object.assign(t, {
                $el: r,
                el: r[0],
                $dragEl: s,
                dragEl: s[0]
            }), n.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"), r && r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }

        function C() {
            const t = e.params.scrollbar, i = e.scrollbar.$el;
            i && i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && E("off")
        }

        i({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), e.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, r("init", (() => {
            !1 === e.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), r("update resize observerUpdate lock unlock", (() => {
            v()
        })), r("setTranslate", (() => {
            g()
        })), r("setTransition", ((t, i) => {
            !function (t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(i)
        })), r("enable disable", (() => {
            const {$el: t} = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        })), r("destroy", (() => {
            C()
        }));
        const S = () => {
            e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), C()
        };
        Object.assign(e.scrollbar, {
            enable: () => {
                e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: C
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({parallax: {enabled: !1}});
        const r = (t, i) => {
            const {rtl: n} = e, r = c(t), s = n ? -1 : 1, o = r.attr("data-swiper-parallax") || "0";
            let a = r.attr("data-swiper-parallax-x"), l = r.attr("data-swiper-parallax-y");
            const d = r.attr("data-swiper-parallax-scale"), u = r.attr("data-swiper-parallax-opacity");
            if (a || l ? (a = a || "0", l = l || "0") : e.isHorizontal() ? (a = o, l = "0") : (l = o, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i * s + "%" : a * i * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", null != u) {
                const t = u - (u - 1) * (1 - Math.abs(i));
                r[0].style.opacity = t
            }
            if (null == d) r.transform(`translate3d(${a}, ${l}, 0px)`); else {
                const t = d - (d - 1) * (1 - Math.abs(i));
                r.transform(`translate3d(${a}, ${l}, 0px) scale(${t})`)
            }
        }, s = () => {
            const {$el: t, slides: i, progress: n, snapGrid: s} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                r(t, n)
            })), i.each(((t, i) => {
                let o = t.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (o += Math.ceil(i / 2) - n * (s.length - 1)), o = Math.min(Math.max(o, -1), 1), c(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    r(t, o)
                }))
            }))
        };
        n("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), n("init", (() => {
            e.params.parallax.enabled && s()
        })), n("setTranslate", (() => {
            e.params.parallax.enabled && s()
        })), n("setTransition", ((t, i) => {
            e.params.parallax.enabled && function (t) {
                void 0 === t && (t = e.params.speed);
                const {$el: i} = e;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const i = c(e);
                    let n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (n = 0), i.transition(n)
                }))
            }(i)
        }))
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;
        const o = s();
        i({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {enabled: !1};
        let a, l, d, u = 1, p = !1;
        const f = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v = 1;

        function y(t) {
            if (t.targetTouches.length < 2) return 1;
            const e = t.targetTouches[0].pageX, i = t.targetTouches[0].pageY, n = t.targetTouches[1].pageX,
                r = t.targetTouches[1].pageY;
            return Math.sqrt((n - e) ** 2 + (r - i) ** 2)
        }

        function b(t) {
            const i = e.support, n = e.params.zoom;
            if (l = !1, d = !1, !i.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                l = !0, f.scaleStart = y(t)
            }
            f.$slideEl && f.$slideEl.length || (f.$slideEl = c(t.target).closest(`.${e.params.slideClass}`), 0 === f.$slideEl.length && (f.$slideEl = e.slides.eq(e.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`), f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== f.$imageWrapEl.length) ? (f.$imageEl && f.$imageEl.transition(0), p = !0) : f.$imageEl = void 0
        }

        function w(t) {
            const i = e.support, n = e.params.zoom, r = e.zoom;
            if (!i.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                d = !0, f.scaleMove = y(t)
            }
            f.$imageEl && 0 !== f.$imageEl.length ? (i.gestures ? r.scale = t.scale * u : r.scale = f.scaleMove / f.scaleStart * u, r.scale > f.maxRatio && (r.scale = f.maxRatio - 1 + (r.scale - f.maxRatio + 1) ** .5), r.scale < n.minRatio && (r.scale = n.minRatio + 1 - (n.minRatio - r.scale + 1) ** .5), f.$imageEl.transform(`translate3d(0,0,0) scale(${r.scale})`)) : "gesturechange" === t.type && b(t)
        }

        function _(t) {
            const i = e.device, n = e.support, r = e.params.zoom, s = e.zoom;
            if (!n.gestures) {
                if (!l || !d) return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !i.android) return;
                l = !1, d = !1
            }
            f.$imageEl && 0 !== f.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, f.maxRatio), r.minRatio), f.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`), u = s.scale, p = !1, 1 === s.scale && (f.$slideEl = void 0))
        }

        function x(t) {
            const i = e.zoom;
            if (!f.$imageEl || 0 === f.$imageEl.length) return;
            if (e.allowClick = !1, !m.isTouched || !f.$slideEl) return;
            m.isMoved || (m.width = f.$imageEl[0].offsetWidth, m.height = f.$imageEl[0].offsetHeight, m.startX = h(f.$imageWrapEl[0], "x") || 0, m.startY = h(f.$imageWrapEl[0], "y") || 0, f.slideWidth = f.$slideEl[0].offsetWidth, f.slideHeight = f.$slideEl[0].offsetHeight, f.$imageWrapEl.transition(0));
            const n = m.width * i.scale, r = m.height * i.scale;
            if (!(n < f.slideWidth && r < f.slideHeight)) {
                if (m.minX = Math.min(f.slideWidth / 2 - n / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - r / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p) {
                    if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1)
                }
                t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (m.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (m.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = m.touchesCurrent.x, g.prevPositionY = m.touchesCurrent.y, g.prevTime = Date.now(), f.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }

        function E() {
            const t = e.zoom;
            f.$slideEl && e.previousIndex !== e.activeIndex && (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"), f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, u = 1, f.$slideEl = void 0, f.$imageEl = void 0, f.$imageWrapEl = void 0)
        }

        function T(t) {
            const i = e.zoom, n = e.params.zoom;
            if (f.$slideEl || (t && t.target && (f.$slideEl = c(t.target).closest(`.${e.params.slideClass}`)), f.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? f.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : f.$slideEl = e.slides.eq(e.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`)), !f.$imageEl || 0 === f.$imageEl.length || !f.$imageWrapEl || 0 === f.$imageWrapEl.length) return;
            let r, s, a, l, d, p, h, g, v, y, b, w, _, x, E, T, C, S;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), f.$slideEl.addClass(`${n.zoomedSlideClass}`), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, s = m.touchesStart.y), i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, u = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, t ? (C = f.$slideEl[0].offsetWidth, S = f.$slideEl[0].offsetHeight, a = f.$slideEl.offset().left + o.scrollX, l = f.$slideEl.offset().top + o.scrollY, d = a + C / 2 - r, p = l + S / 2 - s, v = f.$imageEl[0].offsetWidth, y = f.$imageEl[0].offsetHeight, b = v * i.scale, w = y * i.scale, _ = Math.min(C / 2 - b / 2, 0), x = Math.min(S / 2 - w / 2, 0), E = -_, T = -x, h = d * i.scale, g = p * i.scale, h < _ && (h = _), h > E && (h = E), g < x && (g = x), g > T && (g = T)) : (h = 0, g = 0), f.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        }

        function C() {
            const t = e.zoom, i = e.params.zoom;
            f.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? f.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : f.$slideEl = e.slides.eq(e.activeIndex), f.$imageEl = f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`)), f.$imageEl && 0 !== f.$imageEl.length && f.$imageWrapEl && 0 !== f.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, u = 1, f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), f.$slideEl.removeClass(`${i.zoomedSlideClass}`), f.$slideEl = void 0)
        }

        function S(t) {
            const i = e.zoom;
            i.scale && 1 !== i.scale ? C() : T(t)
        }

        function M() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !t.passiveListener || {passive: !1, capture: !0}
            }
        }

        function P() {
            return `.${e.params.slideClass}`
        }

        function O(t) {
            const {passiveListener: i} = M(), n = P();
            e.$wrapperEl[t]("gesturestart", n, b, i), e.$wrapperEl[t]("gesturechange", n, w, i), e.$wrapperEl[t]("gestureend", n, _, i)
        }

        function D() {
            a || (a = !0, O("on"))
        }

        function k() {
            a && (a = !1, O("off"))
        }

        function A() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const i = e.support, {passiveListener: n, activeListenerWithCapture: r} = M(), s = P();
            i.gestures ? (e.$wrapperEl.on(e.touchEvents.start, D, n), e.$wrapperEl.on(e.touchEvents.end, k, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, s, b, n), e.$wrapperEl.on(e.touchEvents.move, s, w, r), e.$wrapperEl.on(e.touchEvents.end, s, _, n), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, s, _, n)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, r)
        }

        function I() {
            const t = e.zoom;
            if (!t.enabled) return;
            const i = e.support;
            t.enabled = !1;
            const {passiveListener: n, activeListenerWithCapture: r} = M(), s = P();
            i.gestures ? (e.$wrapperEl.off(e.touchEvents.start, D, n), e.$wrapperEl.off(e.touchEvents.end, k, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, s, b, n), e.$wrapperEl.off(e.touchEvents.move, s, w, r), e.$wrapperEl.off(e.touchEvents.end, s, _, n), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, s, _, n)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, r)
        }

        Object.defineProperty(e.zoom, "scale", {
            get: () => v, set(t) {
                if (v !== t) {
                    const e = f.$imageEl ? f.$imageEl[0] : void 0, i = f.$slideEl ? f.$slideEl[0] : void 0;
                    r("zoomChange", t, e, i)
                }
                v = t
            }
        }), n("init", (() => {
            e.params.zoom.enabled && A()
        })), n("destroy", (() => {
            I()
        })), n("touchStart", ((t, i) => {
            e.zoom.enabled && function (t) {
                const i = e.device;
                f.$imageEl && 0 !== f.$imageEl.length && (m.isTouched || (i.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(i)
        })), n("touchEnd", ((t, i) => {
            e.zoom.enabled && function () {
                const t = e.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
                m.isTouched = !1, m.isMoved = !1;
                let i = 300, n = 300;
                const r = g.x * i, s = m.currentX + r, o = g.y * n, a = m.currentY + o;
                0 !== g.x && (i = Math.abs((s - m.currentX) / g.x)), 0 !== g.y && (n = Math.abs((a - m.currentY) / g.y));
                const l = Math.max(i, n);
                m.currentX = s, m.currentY = a;
                const c = m.width * t.scale, d = m.height * t.scale;
                m.minX = Math.min(f.slideWidth / 2 - c / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - d / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), f.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        })), n("doubleTap", ((t, i) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && S(i)
        })), n("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        })), n("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        })), Object.assign(e.zoom, {enable: A, disable: I, in: T, out: C, toggle: S})
    }, function (t) {
        let {swiper: e, extendParams: i, on: n, emit: r} = t;
        i({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let o = !1, a = !1;

        function l(t, i) {
            void 0 === i && (i = !0);
            const n = e.params.lazy;
            if (void 0 === t) return;
            if (0 === e.slides.length) return;
            const s = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                o = s.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
            !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || o.push(s[0]), 0 !== o.length && o.each((t => {
                const o = c(t);
                o.addClass(n.loadingClass);
                const a = o.attr("data-background"), d = o.attr("data-src"), u = o.attr("data-srcset"),
                    p = o.attr("data-sizes"), h = o.parent("picture");
                e.loadImage(o[0], d || a, u, p, !1, (() => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (a ? (o.css("background-image", `url("${a}")`), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), h.length && h.children("source").each((t => {
                            const e = c(t);
                            e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")), e.removeAttr("data-srcset"))
                        })), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), s.find(`.${n.preloaderClass}`).remove(), e.params.loop && i) {
                            const t = s.attr("data-swiper-slide-index");
                            s.hasClass(e.params.slideDuplicateClass) ? l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1) : l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                        }
                        r("lazyImageReady", s[0], o[0]), e.params.autoHeight && e.updateAutoHeight()
                    }
                })), r("lazyImageLoad", s[0], o[0])
            }))
        }

        function d() {
            const {$wrapperEl: t, params: i, slides: n, activeIndex: r} = e, s = e.virtual && i.virtual.enabled,
                o = i.lazy;
            let d = i.slidesPerView;

            function u(e) {
                if (s) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (n[e]) return !0;
                return !1
            }

            function p(t) {
                return s ? c(t).attr("data-swiper-slide-index") : c(t).index()
            }

            if ("auto" === d && (d = 0), a || (a = !0), e.params.watchSlidesProgress) t.children(`.${i.slideVisibleClass}`).each((t => {
                l(s ? c(t).attr("data-swiper-slide-index") : c(t).index())
            })); else if (d > 1) for (let t = r; t < r + d; t += 1) u(t) && l(t); else l(r);
            if (o.loadPrevNext) if (d > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                const t = o.loadPrevNextAmount, e = Math.ceil(d), i = Math.min(r + e + Math.max(t, e), n.length),
                    s = Math.max(r - Math.max(e, t), 0);
                for (let t = r + e; t < i; t += 1) u(t) && l(t);
                for (let t = s; t < r; t += 1) u(t) && l(t)
            } else {
                const e = t.children(`.${i.slideNextClass}`);
                e.length > 0 && l(p(e));
                const n = t.children(`.${i.slidePrevClass}`);
                n.length > 0 && l(p(n))
            }
        }

        function u() {
            const t = s();
            if (!e || e.destroyed) return;
            const i = e.params.lazy.scrollingElement ? c(e.params.lazy.scrollingElement) : c(t), n = i[0] === t,
                r = n ? t.innerWidth : i[0].offsetWidth, a = n ? t.innerHeight : i[0].offsetHeight,
                l = e.$el.offset(), {rtlTranslate: p} = e;
            let h = !1;
            p && (l.left -= e.$el[0].scrollLeft);
            const f = [[l.left, l.top], [l.left + e.width, l.top], [l.left, l.top + e.height], [l.left + e.width, l.top + e.height]];
            for (let t = 0; t < f.length; t += 1) {
                const e = f[t];
                if (e[0] >= 0 && e[0] <= r && e[1] >= 0 && e[1] <= a) {
                    if (0 === e[0] && 0 === e[1]) continue;
                    h = !0
                }
            }
            const m = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (d(), i.off("scroll", u, m)) : o || (o = !0, i.on("scroll", u, m))
        }

        n("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })), n("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : d())
        })), n("scroll", (() => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && d()
        })), n("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : d())
        })), n("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !a) && (e.params.lazy.checkInView ? u() : d())
        })), n("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? u() : d())
        })), n("slideChange", (() => {
            const {lazy: t, cssMode: i, watchSlidesProgress: n, touchReleaseOnEdges: r, resistanceRatio: s} = e.params;
            t.enabled && (i || n && (r || 0 === s)) && d()
        })), n("destroy", (() => {
            e.$el && e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)
        })), Object.assign(e.lazy, {load: d, loadInSlide: l})
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;

        function r(t, e) {
            const i = function () {
                let t, e, i;
                return (n, r) => {
                    for (e = -1, t = n.length; t - e > 1;) i = t + e >> 1, n[i] <= r ? e = i : t = i;
                    return t
                }
            }();
            let n, r;
            return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
                return t ? (r = i(this.x, t), n = r - 1, (t - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
            }, this
        }

        function s() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }

        i({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {control: void 0}, n("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })), n("update", (() => {
            s()
        })), n("resize", (() => {
            s()
        })), n("observerUpdate", (() => {
            s()
        })), n("setTranslate", ((t, i, n) => {
            e.controller.control && e.controller.setTranslate(i, n)
        })), n("setTransition", ((t, i, n) => {
            e.controller.control && e.controller.setTransition(i, n)
        })), Object.assign(e.controller, {
            setTranslate: function (t, i) {
                const n = e.controller.control;
                let s, o;
                const a = e.constructor;

                function l(t) {
                    const i = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (function (t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new r(e.slidesGrid, t.slidesGrid) : new r(e.snapGrid, t.snapGrid))
                    }(t), o = -e.controller.spline.interpolate(-i)), o && "container" !== e.params.controller.by || (s = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), o = (i - e.minTranslate()) * s + t.minTranslate()), e.params.controller.inverse && (o = t.maxTranslate() - o), t.updateProgress(o), t.setTranslate(o, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                if (Array.isArray(n)) for (let t = 0; t < n.length; t += 1) n[t] !== i && n[t] instanceof a && l(n[t]); else n instanceof a && i !== n && l(n)
            }, setTransition: function (t, i) {
                const n = e.constructor, r = e.controller.control;
                let s;

                function o(i) {
                    i.setTransition(t, e), 0 !== t && (i.transitionStart(), i.params.autoHeight && u((() => {
                        i.updateAutoHeight()
                    })), i.$wrapperEl.transitionEnd((() => {
                        r && (i.params.loop && "slide" === e.params.controller.by && i.loopFix(), i.transitionEnd())
                    })))
                }

                if (Array.isArray(r)) for (s = 0; s < r.length; s += 1) r[s] !== i && r[s] instanceof n && o(r[s]); else r instanceof n && i !== r && o(r)
            }
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), e.a11y = {clicked: !1};
        let r = null;

        function s(t) {
            const e = r;
            0 !== e.length && (e.html(""), e.html(t))
        }

        function o(t) {
            t.attr("tabIndex", "0")
        }

        function a(t) {
            t.attr("tabIndex", "-1")
        }

        function l(t, e) {
            t.attr("role", e)
        }

        function d(t, e) {
            t.attr("aria-roledescription", e)
        }

        function u(t, e) {
            t.attr("aria-label", e)
        }

        function p(t) {
            t.attr("aria-disabled", !0)
        }

        function h(t) {
            t.attr("aria-disabled", !1)
        }

        function f(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const i = e.params.a11y, n = c(t.target);
            e.navigation && e.navigation.$nextEl && n.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? s(i.lastSlideMessage) : s(i.nextSlideMessage)), e.navigation && e.navigation.$prevEl && n.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? s(i.firstSlideMessage) : s(i.prevSlideMessage)), e.pagination && n.is(U(e.params.pagination.bulletClass)) && n[0].click()
        }

        function m() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }

        function g() {
            return m() && e.params.pagination.clickable
        }

        const v = (t, e, i) => {
            o(t), "BUTTON" !== t[0].tagName && (l(t, "button"), t.on("keydown", f)), u(t, i), function (t, e) {
                t.attr("aria-controls", e)
            }(t, e)
        }, y = () => {
            e.a11y.clicked = !0
        }, b = () => {
            requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    e.destroyed || (e.a11y.clicked = !1)
                }))
            }))
        }, w = t => {
            if (e.a11y.clicked) return;
            const i = t.target.closest(`.${e.params.slideClass}`);
            if (!i || !e.slides.includes(i)) return;
            const n = e.slides.indexOf(i) === e.activeIndex,
                r = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(i);
            n || r || t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(i), 0))
        }, _ = () => {
            const t = e.params.a11y;
            t.itemRoleDescriptionMessage && d(c(e.slides), t.itemRoleDescriptionMessage), t.slideRole && l(c(e.slides), t.slideRole);
            const i = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
            t.slideLabelMessage && e.slides.each(((n, r) => {
                const s = c(n), o = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : r;
                u(s, t.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, i))
            }))
        };
        n("beforeInit", (() => {
            r = c(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), n("afterInit", (() => {
            e.params.a11y.enabled && (() => {
                const t = e.params.a11y;
                e.$el.append(r);
                const i = e.$el;
                t.containerRoleDescriptionMessage && d(i, t.containerRoleDescriptionMessage), t.containerMessage && u(i, t.containerMessage);
                const n = e.$wrapperEl,
                    s = t.id || n.attr("id") || `swiper-wrapper-${o = 16, void 0 === o && (o = 16), "x".repeat(o).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
                var o;
                const a = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                var l;
                let c, p;
                l = s, n.attr("id", l), function (t, e) {
                    t.attr("aria-live", e)
                }(n, a), _(), e.navigation && e.navigation.$nextEl && (c = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (p = e.navigation.$prevEl), c && c.length && v(c, s, t.nextSlideMessage), p && p.length && v(p, s, t.prevSlideMessage), g() && e.pagination.$el.on("keydown", U(e.params.pagination.bulletClass), f), e.$el.on("focus", w, !0), e.$el.on("pointerdown", y, !0), e.$el.on("pointerup", b, !0)
            })()
        })), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            e.params.a11y.enabled && _()
        })), n("fromEdge toEdge afterInit lock unlock", (() => {
            e.params.a11y.enabled && function () {
                if (e.params.loop || e.params.rewind || !e.navigation) return;
                const {$nextEl: t, $prevEl: i} = e.navigation;
                i && i.length > 0 && (e.isBeginning ? (p(i), a(i)) : (h(i), o(i))), t && t.length > 0 && (e.isEnd ? (p(t), a(t)) : (h(t), o(t)))
            }()
        })), n("paginationUpdate", (() => {
            e.params.a11y.enabled && function () {
                const t = e.params.a11y;
                m() && e.pagination.bullets.each((i => {
                    const n = c(i);
                    e.params.pagination.clickable && (o(n), e.params.pagination.renderBullet || (l(n, "button"), u(n, t.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))), n.is(`.${e.params.pagination.bulletActiveClass}`) ? n.attr("aria-current", "true") : n.removeAttr("aria-current")
                }))
            }()
        })), n("destroy", (() => {
            e.params.a11y.enabled && function () {
                let t, i;
                r && r.length > 0 && r.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", f), i && i.off("keydown", f), g() && e.pagination.$el.off("keydown", U(e.params.pagination.bulletClass), f), e.$el.off("focus", w, !0), e.$el.off("pointerdown", y, !0), e.$el.off("pointerup", b, !0)
            }()
        }))
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let r = !1, o = {};
        const a = t => t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = t => {
                const e = s();
                let i;
                i = t ? new URL(t) : e.location;
                const n = i.pathname.slice(1).split("/").filter((t => "" !== t)), r = n.length;
                return {key: n[r - 2], value: n[r - 1]}
            }, c = (t, i) => {
                const n = s();
                if (!r || !e.params.history.enabled) return;
                let o;
                o = e.params.url ? new URL(e.params.url) : n.location;
                const l = e.slides.eq(i);
                let c = a(l.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let i = e.params.history.root;
                    "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), c = `${i}/${t}/${c}`
                } else o.pathname.includes(t) || (c = `${t}/${c}`);
                e.params.history.keepQuery && (c += o.search);
                const d = n.history.state;
                d && d.value === c || (e.params.history.replaceState ? n.history.replaceState({value: c}, null, c) : n.history.pushState({value: c}, null, c))
            }, d = (t, i, n) => {
                if (i) for (let r = 0, s = e.slides.length; r < s; r += 1) {
                    const s = e.slides.eq(r);
                    if (a(s.attr("data-history")) === i && !s.hasClass(e.params.slideDuplicateClass)) {
                        const i = s.index();
                        e.slideTo(i, t, n)
                    }
                } else e.slideTo(0, t, n)
            }, u = () => {
                o = l(e.params.url), d(e.params.speed, o.value, !1)
            };
        n("init", (() => {
            e.params.history.enabled && (() => {
                const t = s();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                    r = !0, o = l(e.params.url), (o.key || o.value) && (d(0, o.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", u))
                }
            })()
        })), n("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = s();
                e.params.history.replaceState || t.removeEventListener("popstate", u)
            })()
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            r && c(e.params.history.key, e.activeIndex)
        })), n("slideChange", (() => {
            r && e.params.cssMode && c(e.params.history.key, e.activeIndex)
        }))
    }, function (t) {
        let {swiper: e, extendParams: i, emit: r, on: o} = t, a = !1;
        const l = n(), d = s();
        i({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const u = () => {
            r("hashChange");
            const t = l.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === i) return;
                e.slideTo(i)
            }
        }, p = () => {
            if (a && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), r("hashSet"); else {
                const t = e.slides.eq(e.activeIndex), i = t.attr("data-hash") || t.attr("data-history");
                l.location.hash = i || "", r("hashSet")
            }
        };
        o("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                a = !0;
                const t = l.location.hash.replace("#", "");
                if (t) {
                    const i = 0;
                    for (let n = 0, r = e.slides.length; n < r; n += 1) {
                        const r = e.slides.eq(n);
                        if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                            const t = r.index();
                            e.slideTo(t, i, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && c(d).on("hashchange", u)
            })()
        })), o("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && c(d).off("hashchange", u)
        })), o("transitionEnd _freeModeNoMomentumRelease", (() => {
            a && p()
        })), o("slideChange", (() => {
            a && e.params.cssMode && p()
        }))
    }, function (t) {
        let e, {swiper: i, extendParams: r, on: s, emit: o} = t;

        function a() {
            if (!i.size) return i.autoplay.running = !1, void (i.autoplay.paused = !1);
            const t = i.slides.eq(i.activeIndex);
            let n = i.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(e), e = u((() => {
                let t;
                i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), t = i.slidePrev(i.params.speed, !0, !0), o("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? c() : (t = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), o("autoplay")) : (t = i.slidePrev(i.params.speed, !0, !0), o("autoplay")) : i.params.loop ? (i.loopFix(), t = i.slideNext(i.params.speed, !0, !0), o("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? c() : (t = i.slideTo(0, i.params.speed, !0, !0), o("autoplay")) : (t = i.slideNext(i.params.speed, !0, !0), o("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === t) && a()
            }), n)
        }

        function l() {
            return void 0 === e && !i.autoplay.running && (i.autoplay.running = !0, o("autoplayStart"), a(), !0)
        }

        function c() {
            return !!i.autoplay.running && void 0 !== e && (e && (clearTimeout(e), e = void 0), i.autoplay.running = !1, o("autoplayStop"), !0)
        }

        function d(t) {
            i.autoplay.running && (i.autoplay.paused || (e && clearTimeout(e), i.autoplay.paused = !0, 0 !== t && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                i.$wrapperEl[0].addEventListener(t, h)
            })) : (i.autoplay.paused = !1, a())))
        }

        function p() {
            const t = n();
            "hidden" === t.visibilityState && i.autoplay.running && d(), "visible" === t.visibilityState && i.autoplay.paused && (a(), i.autoplay.paused = !1)
        }

        function h(t) {
            i && !i.destroyed && i.$wrapperEl && t.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                i.$wrapperEl[0].removeEventListener(t, h)
            })), i.autoplay.paused = !1, i.autoplay.running ? a() : c())
        }

        function f() {
            i.params.autoplay.disableOnInteraction ? c() : (o("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                i.$wrapperEl[0].removeEventListener(t, h)
            }))
        }

        function m() {
            i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, o("autoplayResume"), a())
        }

        i.autoplay = {running: !1, paused: !1}, r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), s("init", (() => {
            i.params.autoplay.enabled && (l(), n().addEventListener("visibilitychange", p), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)))
        })), s("beforeTransitionStart", ((t, e, n) => {
            i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : c())
        })), s("sliderFirstMove", (() => {
            i.autoplay.running && (i.params.autoplay.disableOnInteraction ? c() : d())
        })), s("touchEnd", (() => {
            i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && a()
        })), s("destroy", (() => {
            i.$el.off("mouseenter", f), i.$el.off("mouseleave", m), i.autoplay.running && c(), n().removeEventListener("visibilitychange", p)
        })), Object.assign(i.autoplay, {pause: d, run: a, start: l, stop: c})
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1, s = !1;

        function o() {
            const t = e.thumbs.swiper;
            if (!t || t.destroyed) return;
            const i = t.clickedIndex, n = t.clickedSlide;
            if (n && c(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let r;
            if (r = t.params.loop ? parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),
                    n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
                r = void 0 === i ? n : void 0 === n ? i : n - t < t - i ? n : i
            }
            e.slideTo(r)
        }

        function a() {
            const {thumbs: t} = e.params;
            if (r) return !1;
            r = !0;
            const i = e.constructor;
            if (t.swiper instanceof i) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (f(t.swiper)) {
                const n = Object.assign({}, t.swiper);
                Object.assign(n, {watchSlidesProgress: !0, slideToClickedSlide: !1}), e.thumbs.swiper = new i(n), s = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", o), !0
        }

        function l(t) {
            const i = e.thumbs.swiper;
            if (!i || i.destroyed) return;
            const n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            let r = 1;
            const s = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (r = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.removeClass(s), i.params.loop || i.params.virtual && i.params.virtual.enabled) for (let t = 0; t < r; t += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(s); else for (let t = 0; t < r; t += 1) i.slides.eq(e.realIndex + t).addClass(s);
            const o = e.params.thumbs.autoScrollOffset, a = o && !i.params.loop;
            if (e.realIndex !== i.realIndex || a) {
                let r, s, l = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(l).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, l = i.activeIndex);
                    const t = i.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        n = i.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    r = void 0 === t ? n : void 0 === n ? t : n - l == l - t ? i.params.slidesPerGroup > 1 ? n : l : n - l < l - t ? n : t, s = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else r = e.realIndex, s = r > e.previousIndex ? "next" : "prev";
                a && (r += "next" === s ? o : -1 * o), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = r > l ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : r > l && i.params.slidesPerGroup, i.slideTo(r, t ? 0 : void 0))
            }
        }

        e.thumbs = {swiper: null}, n("beforeInit", (() => {
            const {thumbs: t} = e.params;
            t && t.swiper && (a(), l(!0))
        })), n("slideChange update resize observerUpdate", (() => {
            l()
        })), n("setTransition", ((t, i) => {
            const n = e.thumbs.swiper;
            n && !n.destroyed && n.setTransition(i)
        })), n("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && !t.destroyed && s && t.destroy()
        })), Object.assign(e.thumbs, {init: a, update: l})
    }, function (t) {
        let {swiper: e, extendParams: i, emit: n, once: r} = t;
        i({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchStart: function () {
                    const t = e.getTranslate();
                    e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({currentPos: e.rtl ? e.translate : -e.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: t, touches: i} = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: i[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({position: i[e.isHorizontal() ? "currentX" : "currentY"], time: p()})
                }, onTouchEnd: function (t) {
                    let {currentPos: i} = t;
                    const {params: s, $wrapperEl: o, rtlTranslate: a, snapGrid: l, touchEventsData: c} = e,
                        d = p() - c.touchStartTime;
                    if (i < -e.minTranslate()) e.slideTo(e.activeIndex); else if (i > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1); else {
                        if (s.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const t = c.velocities.pop(), i = c.velocities.pop(), n = t.position - i.position,
                                    r = t.time - i.time;
                                e.velocity = n / r, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (r > 150 || p() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= s.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let t = 1e3 * s.freeMode.momentumRatio;
                            const i = e.velocity * t;
                            let d = e.translate + i;
                            a && (d = -d);
                            let u, h = !1;
                            const f = 20 * Math.abs(e.velocity) * s.freeMode.momentumBounceRatio;
                            let m;
                            if (d < e.maxTranslate()) s.freeMode.momentumBounce ? (d + e.maxTranslate() < -f && (d = e.maxTranslate() - f), u = e.maxTranslate(), h = !0, c.allowMomentumBounce = !0) : d = e.maxTranslate(), s.loop && s.centeredSlides && (m = !0); else if (d > e.minTranslate()) s.freeMode.momentumBounce ? (d - e.minTranslate() > f && (d = e.minTranslate() + f), u = e.minTranslate(), h = !0, c.allowMomentumBounce = !0) : d = e.minTranslate(), s.loop && s.centeredSlides && (m = !0); else if (s.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < l.length; e += 1) if (l[e] > -d) {
                                    t = e;
                                    break
                                }
                                d = Math.abs(l[t] - d) < Math.abs(l[t - 1] - d) || "next" === e.swipeDirection ? l[t] : l[t - 1], d = -d
                            }
                            if (m && r("transitionEnd", (() => {
                                e.loopFix()
                            })), 0 !== e.velocity) {
                                if (t = a ? Math.abs((-d - e.translate) / e.velocity) : Math.abs((d - e.translate) / e.velocity), s.freeMode.sticky) {
                                    const i = Math.abs((a ? -d : d) - e.translate),
                                        n = e.slidesSizesGrid[e.activeIndex];
                                    t = i < n ? s.speed : i < 2 * n ? 1.5 * s.speed : 2.5 * s.speed
                                }
                            } else if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode.momentumBounce && h ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd((() => {
                                e && !e.destroyed && c.allowMomentumBounce && (n("momentumBounce"), e.setTransition(s.speed), setTimeout((() => {
                                    e.setTranslate(u), o.transitionEnd((() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (n("_freeModeNoMomentumRelease"), e.updateProgress(d), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd((() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(d), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode && n("_freeModeNoMomentumRelease")
                        }
                        (!s.freeMode.momentum || d >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (t) {
        let e, i, n, {swiper: r, extendParams: s} = t;
        s({grid: {rows: 1, fill: "column"}}), r.grid = {
            initSlides: t => {
                const {slidesPerView: s} = r.params, {rows: o, fill: a} = r.params.grid;
                i = e / o, n = Math.floor(t / o), e = Math.floor(t / o) === t / o ? t : Math.ceil(t / o) * o, "auto" !== s && "row" === a && (e = Math.max(e, s * o))
            }, updateSlide: (t, s, o, a) => {
                const {slidesPerGroup: l, spaceBetween: c} = r.params, {rows: d, fill: u} = r.params.grid;
                let p, h, f;
                if ("row" === u && l > 1) {
                    const i = Math.floor(t / (l * d)), n = t - d * l * i,
                        r = 0 === i ? l : Math.min(Math.ceil((o - i * d * l) / d), l);
                    f = Math.floor(n / r), h = n - f * r + i * l, p = h + f * e / d, s.css({
                        "-webkit-order": p,
                        order: p
                    })
                } else "column" === u ? (h = Math.floor(t / d), f = t - h * d, (h > n || h === n && f === d - 1) && (f += 1, f >= d && (f = 0, h += 1))) : (f = Math.floor(t / i), h = t - f * i);
                s.css(a("margin-top"), 0 !== f ? c && `${c}px` : "")
            }, updateWrapperSize: (t, i, n) => {
                const {spaceBetween: s, centeredSlides: o, roundLengths: a} = r.params, {rows: l} = r.params.grid;
                if (r.virtualSize = (t + s) * e, r.virtualSize = Math.ceil(r.virtualSize / l) - s, r.$wrapperEl.css({[n("width")]: `${r.virtualSize + s}px`}), o) {
                    i.splice(0, i.length);
                    const t = [];
                    for (let e = 0; e < i.length; e += 1) {
                        let n = i[e];
                        a && (n = Math.floor(n)), i[e] < r.virtualSize + i[0] && t.push(n)
                    }
                    i.push(...t)
                }
            }
        }
    }, function (t) {
        let {swiper: e} = t;
        Object.assign(e, {
            appendSlide: Z.bind(e),
            prependSlide: K.bind(e),
            addSlide: Q.bind(e),
            removeSlide: J.bind(e),
            removeAllSlides: tt.bind(e)
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({fadeEffect: {crossFade: !1, transformEl: null}}), et({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t} = e, i = e.params.fadeEffect;
                for (let n = 0; n < t.length; n += 1) {
                    const t = e.slides.eq(n);
                    let r = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (r -= e.translate);
                    let s = 0;
                    e.isHorizontal() || (s = r, r = 0);
                    const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    it(i, t).css({opacity: o}).transform(`translate3d(${r}px, ${s}px, 0px)`)
                }
            },
            setTransition: t => {
                const {transformEl: i} = e.params.fadeEffect;
                (i ? e.slides.find(i) : e.slides).transition(t), nt({
                    swiper: e,
                    duration: t,
                    transformEl: i,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const r = (t, e, i) => {
            let n = i ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                r = i ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === n.length && (n = c(`<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`), t.append(n)), 0 === r.length && (r = c(`<div class="swiper-slide-shadow-${i ? "right" : "bottom"}"></div>`), t.append(r)), n.length && (n[0].style.opacity = Math.max(-e, 0)), r.length && (r[0].style.opacity = Math.max(e, 0))
        };
        et({
            effect: "cube",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {$el: t, $wrapperEl: i, slides: n, width: s, height: o, rtlTranslate: a, size: l, browser: d} = e,
                    u = e.params.cubeEffect, p = e.isHorizontal(), h = e.virtual && e.params.virtual.enabled;
                let f, m = 0;
                u.shadow && (p ? (f = i.find(".swiper-cube-shadow"), 0 === f.length && (f = c('<div class="swiper-cube-shadow"></div>'), i.append(f)), f.css({height: `${s}px`})) : (f = t.find(".swiper-cube-shadow"), 0 === f.length && (f = c('<div class="swiper-cube-shadow"></div>'), t.append(f))));
                for (let t = 0; t < n.length; t += 1) {
                    const e = n.eq(t);
                    let i = t;
                    h && (i = parseInt(e.attr("data-swiper-slide-index"), 10));
                    let s = 90 * i, o = Math.floor(s / 360);
                    a && (s = -s, o = Math.floor(-s / 360));
                    const c = Math.max(Math.min(e[0].progress, 1), -1);
                    let d = 0, f = 0, g = 0;
                    i % 4 == 0 ? (d = 4 * -o * l, g = 0) : (i - 1) % 4 == 0 ? (d = 0, g = 4 * -o * l) : (i - 2) % 4 == 0 ? (d = l + 4 * o * l, g = l) : (i - 3) % 4 == 0 && (d = -l, g = 3 * l + 4 * l * o), a && (d = -d), p || (f = d, d = 0);
                    const v = `rotateX(${p ? 0 : -s}deg) rotateY(${p ? s : 0}deg) translate3d(${d}px, ${f}px, ${g}px)`;
                    c <= 1 && c > -1 && (m = 90 * i + 90 * c, a && (m = 90 * -i - 90 * c)), e.transform(v), u.slideShadows && r(e, c, p)
                }
                if (i.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }), u.shadow) if (p) f.transform(`translate3d(0px, ${s / 2 + u.shadowOffset}px, ${-s / 2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`); else {
                    const t = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                        e = 1.5 - (Math.sin(2 * t * Math.PI / 360) / 2 + Math.cos(2 * t * Math.PI / 360) / 2),
                        i = u.shadowScale, n = u.shadowScale / e, r = u.shadowOffset;
                    f.transform(`scale3d(${i}, 1, ${n}) translate3d(0px, ${o / 2 + r}px, ${-o / 2 / n}px) rotateX(-90deg)`)
                }
                const g = d.isSafari || d.isWebView ? -l / 2 : 0;
                i.transform(`translate3d(0px,0,${g}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`), i[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: t => {
                const {$el: i, slides: n} = e;
                n.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && i.find(".swiper-cube-shadow").transition(t)
            },
            recreateShadows: () => {
                const t = e.isHorizontal();
                e.slides.each((e => {
                    const i = Math.max(Math.min(e.progress, 1), -1);
                    r(c(e), i, t)
                }))
            },
            getEffectParams: () => e.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const r = (t, i, n) => {
            let r = e.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                s = e.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === r.length && (r = rt(n, t, e.isHorizontal() ? "left" : "top")), 0 === s.length && (s = rt(n, t, e.isHorizontal() ? "right" : "bottom")), r.length && (r[0].style.opacity = Math.max(-i, 0)), s.length && (s[0].style.opacity = Math.max(i, 0))
        };
        et({
            effect: "flip",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, rtlTranslate: i} = e, n = e.params.flipEffect;
                for (let s = 0; s < t.length; s += 1) {
                    const o = t.eq(s);
                    let a = o[0].progress;
                    e.params.flipEffect.limitRotation && (a = Math.max(Math.min(o[0].progress, 1), -1));
                    const l = o[0].swiperSlideOffset;
                    let c = -180 * a, d = 0, u = e.params.cssMode ? -l - e.translate : -l, p = 0;
                    e.isHorizontal() ? i && (c = -c) : (p = u, u = 0, d = -c, c = 0), o[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, n.slideShadows && r(o, a, n);
                    const h = `translate3d(${u}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                    it(n, o).transform(h)
                }
            },
            setTransition: t => {
                const {transformEl: i} = e.params.flipEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), nt({
                    swiper: e,
                    duration: t,
                    transformEl: i
                })
            },
            recreateShadows: () => {
                const t = e.params.flipEffect;
                e.slides.each((i => {
                    const n = c(i);
                    let s = n[0].progress;
                    e.params.flipEffect.limitRotation && (s = Math.max(Math.min(i.progress, 1), -1)), r(n, s, t)
                }))
            },
            getEffectParams: () => e.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), et({
            effect: "coverflow", swiper: e, on: n, setTranslate: () => {
                const {width: t, height: i, slides: n, slidesSizesGrid: r} = e, s = e.params.coverflowEffect,
                    o = e.isHorizontal(), a = e.translate, l = o ? t / 2 - a : i / 2 - a, c = o ? s.rotate : -s.rotate,
                    d = s.depth;
                for (let t = 0, e = n.length; t < e; t += 1) {
                    const e = n.eq(t), i = r[t], a = (l - e[0].swiperSlideOffset - i / 2) / i,
                        u = "function" == typeof s.modifier ? s.modifier(a) : a * s.modifier;
                    let p = o ? c * u : 0, h = o ? 0 : c * u, f = -d * Math.abs(u), m = s.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(s.stretch) / 100 * i);
                    let g = o ? 0 : m * u, v = o ? m * u : 0, y = 1 - (1 - s.scale) * Math.abs(u);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0), Math.abs(y) < .001 && (y = 0);
                    const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${h}deg) rotateY(${p}deg) scale(${y})`;
                    if (it(s, e).transform(b), e[0].style.zIndex = 1 - Math.abs(Math.round(u)), s.slideShadows) {
                        let t = o ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                            i = o ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = rt(s, e, o ? "left" : "top")), 0 === i.length && (i = rt(s, e, o ? "right" : "bottom")), t.length && (t[0].style.opacity = u > 0 ? u : 0), i.length && (i[0].style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }, setTransition: t => {
                const {transformEl: i} = e.params.coverflowEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const r = t => "string" == typeof t ? t : `${t}px`;
        et({
            effect: "creative",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, $wrapperEl: i, slidesSizesGrid: n} = e,
                    s = e.params.creativeEffect, {progressMultiplier: o} = s, a = e.params.centeredSlides;
                if (a) {
                    const t = n[0] / 2 - e.params.slidesOffsetBefore || 0;
                    i.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let i = 0; i < t.length; i += 1) {
                    const n = t.eq(i), l = n[0].progress,
                        c = Math.min(Math.max(n[0].progress, -s.limitProgress), s.limitProgress);
                    let d = c;
                    a || (d = Math.min(Math.max(n[0].originalProgress, -s.limitProgress), s.limitProgress));
                    const u = n[0].swiperSlideOffset, p = [e.params.cssMode ? -u - e.translate : -u, 0, 0],
                        h = [0, 0, 0];
                    let f = !1;
                    e.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let m = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    c < 0 ? (m = s.next, f = !0) : c > 0 && (m = s.prev, f = !0), p.forEach(((t, e) => {
                        p[e] = `calc(${t}px + (${r(m.translate[e])} * ${Math.abs(c * o)}))`
                    })), h.forEach(((t, e) => {
                        h[e] = m.rotate[e] * Math.abs(c * o)
                    })), n[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
                    const g = p.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        y = d < 0 ? `scale(${1 + (1 - m.scale) * d * o})` : `scale(${1 - (1 - m.scale) * d * o})`,
                        b = d < 0 ? 1 + (1 - m.opacity) * d * o : 1 - (1 - m.opacity) * d * o,
                        w = `translate3d(${g}) ${v} ${y}`;
                    if (f && m.shadow || !f) {
                        let t = n.children(".swiper-slide-shadow");
                        if (0 === t.length && m.shadow && (t = rt(s, n)), t.length) {
                            const e = s.shadowPerProgress ? c * (1 / s.limitProgress) : c;
                            t[0].style.opacity = Math.min(Math.max(Math.abs(e), 0), 1)
                        }
                    }
                    const _ = it(s, n);
                    _.transform(w).css({opacity: b}), m.origin && _.css("transform-origin", m.origin)
                }
            },
            setTransition: t => {
                const {transformEl: i} = e.params.creativeEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), nt({
                    swiper: e,
                    duration: t,
                    transformEl: i,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode})
        })
    }, function (t) {
        let {swiper: e, extendParams: i, on: n} = t;
        i({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), et({
            effect: "cards",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, activeIndex: i} = e, n = e.params.cardsEffect, {
                    startTranslate: r,
                    isTouched: s
                } = e.touchEventsData, o = e.translate;
                for (let a = 0; a < t.length; a += 1) {
                    const l = t.eq(a), c = l[0].progress, d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                    let p = e.params.cssMode ? -u - e.translate : -u, h = 0;
                    const f = -100 * Math.abs(d);
                    let m = 1, g = -n.perSlideRotate * d, v = n.perSlideOffset - .75 * Math.abs(d);
                    const y = e.virtual && e.params.virtual.enabled ? e.virtual.from + a : a,
                        b = (y === i || y === i - 1) && d > 0 && d < 1 && (s || e.params.cssMode) && o < r,
                        w = (y === i || y === i + 1) && d < 0 && d > -1 && (s || e.params.cssMode) && o > r;
                    if (b || w) {
                        const t = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        g += -28 * d * t, m += -.5 * t, v += 96 * t, h = -25 * t * Math.abs(d) + "%"
                    }
                    if (p = d < 0 ? `calc(${p}px + (${v * Math.abs(d)}%))` : d > 0 ? `calc(${p}px + (-${v * Math.abs(d)}%))` : `${p}px`, !e.isHorizontal()) {
                        const t = h;
                        h = p, p = t
                    }
                    const _ = d < 0 ? "" + (1 + (1 - m) * d) : "" + (1 - (1 - m) * d),
                        x = `\n        translate3d(${p}, ${h}, ${f}px)\n        rotateZ(${n.rotate ? g : 0}deg)\n        scale(${_})\n      `;
                    if (n.slideShadows) {
                        let t = l.find(".swiper-slide-shadow");
                        0 === t.length && (t = rt(n, l)), t.length && (t[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + t.length, it(n, l).transform(x)
                }
            },
            setTransition: t => {
                const {transformEl: i} = e.params.cardsEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), nt({
                    swiper: e,
                    duration: t,
                    transformEl: i
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode})
        })
    }];
    return V.use(st), V
})), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function () {
    function t() {
    }

    let e = t.prototype;
    return e.on = function (t, e) {
        if (!t || !e) return this;
        let i = this._events = this._events || {}, n = i[t] = i[t] || [];
        return n.includes(e) || n.push(e), this
    }, e.once = function (t, e) {
        if (!t || !e) return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0, this
    }, e.off = function (t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        let n = i.indexOf(e);
        return -1 != n && i.splice(n, 1), this
    }, e.emitEvent = function (t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        i = i.slice(0), e = e || [];
        let n = this._onceEvents && this._onceEvents[t];
        for (let r of i) n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);
        return this
    }, e.allOff = function () {
        return delete this._events, delete this._onceEvents, this
    }, t
})), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function (t, e) {
    let i = t.jQuery, n = t.console;

    function r(t, e, s) {
        if (!(this instanceof r)) return new r(t, e, s);
        let o = t;
        var a;
        "string" == typeof t && (o = document.querySelectorAll(t)), o ? (this.elements = (a = o, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? [...a] : [a]), this.options = {}, "function" == typeof e ? s = e : Object.assign(this.options, e), s && this.on("always", s), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${o || t}`)
    }

    r.prototype = Object.create(e.prototype), r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    const s = [1, 9, 11];
    r.prototype.addElementImages = function (t) {
        "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        let {nodeType: e} = t;
        if (!e || !s.includes(e)) return;
        let i = t.querySelectorAll("img");
        for (let t of i) this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e) this.addElementBackgroundImages(t)
        }
    };
    const o = /url\((['"])?(.*?)\1\)/gi;

    function a(t) {
        this.img = t
    }

    function l(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    return r.prototype.addElementBackgroundImages = function (t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = o.exec(e.backgroundImage);
        for (; null !== i;) {
            let n = i && i[2];
            n && this.addBackground(n, t), i = o.exec(e.backgroundImage)
        }
    }, r.prototype.addImage = function (t) {
        let e = new a(t);
        this.images.push(e)
    }, r.prototype.addBackground = function (t, e) {
        let i = new l(t, e);
        this.images.push(i)
    }, r.prototype.check = function () {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        let t = (t, e, i) => {
            setTimeout((() => {
                this.progress(t, e, i)
            }))
        };
        this.images.forEach((function (e) {
            e.once("progress", t), e.check()
        }))
    }, r.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${i}`, t, e)
    }, r.prototype.complete = function () {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, a.prototype = Object.create(e.prototype), a.prototype.check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, a.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, a.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        let {parentNode: i} = this.img, n = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, n, e])
    }, a.prototype.handleEvent = function (t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }, a.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, a.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, a.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, l.prototype = Object.create(a.prototype), l.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, l.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, l.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, r.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && (i = e, i.fn.imagesLoaded = function (t, e) {
            return new r(this, t, e).jqDeferred.promise(i(this))
        })
    }, r.makeJQueryPlugin(), r
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Headroom = e()
}(this, (function () {
    "use strict";

    function t() {
        return "undefined" != typeof window
    }

    function e(t, e, i) {
        var n, r = function () {
            var t = !1;
            try {
                var e = {
                    get passive() {
                        t = !0
                    }
                };
                window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
            } catch (e) {
                t = !1
            }
            return t
        }(), s = !1, o = function (t) {
            return function (t) {
                return t && t.document && function (t) {
                    return 9 === t.nodeType
                }(t.document)
            }(t) ? function (t) {
                var e = t.document, i = e.body, n = e.documentElement;
                return {
                    scrollHeight: function () {
                        return Math.max(i.scrollHeight, n.scrollHeight, i.offsetHeight, n.offsetHeight, i.clientHeight, n.clientHeight)
                    }, height: function () {
                        return t.innerHeight || n.clientHeight || i.clientHeight
                    }, scrollY: function () {
                        return void 0 !== t.pageYOffset ? t.pageYOffset : (n || i.parentNode || i).scrollTop
                    }
                }
            }(t) : function (t) {
                return {
                    scrollHeight: function () {
                        return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
                    }, height: function () {
                        return Math.max(t.offsetHeight, t.clientHeight)
                    }, scrollY: function () {
                        return t.scrollTop
                    }
                }
            }(t)
        }(t), a = o.scrollY(), l = {};

        function c() {
            var t = Math.round(o.scrollY()), n = o.height(), r = o.scrollHeight();
            l.scrollY = t, l.lastScrollY = a, l.direction = a < t ? "down" : "up", l.distance = Math.abs(t - a), l.isOutOfBounds = t < 0 || r < t + n, l.top = t <= e.offset, l.bottom = r <= t + n, l.toleranceExceeded = l.distance > e.tolerance[l.direction], i(l), a = t, s = !1
        }

        function d() {
            s || (s = !0, n = requestAnimationFrame(c))
        }

        var u = !!r && {passive: !0, capture: !1};
        return t.addEventListener("scroll", d, u), c(), {
            destroy: function () {
                cancelAnimationFrame(n), t.removeEventListener("scroll", d, u)
            }
        }
    }

    function i(t, e) {
        e = e || {}, Object.assign(this, i.options, e), this.classes = Object.assign({}, i.options.classes, e.classes), this.elem = t, this.tolerance = function (t) {
            return t === Object(t) ? t : {down: t, up: t}
        }(this.tolerance), this.initialised = !1, this.frozen = !1
    }

    return i.prototype = {
        constructor: i, init: function () {
            return i.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout((function (t) {
                t.scrollTracker = e(t.scroller, {offset: t.offset, tolerance: t.tolerance}, t.update.bind(t))
            }), 100, this)), this
        }, destroy: function () {
            this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy()
        }, unpin: function () {
            !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this))
        }, pin: function () {
            this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this))
        }, freeze: function () {
            this.frozen = !0, this.addClass("frozen")
        }, unfreeze: function () {
            this.frozen = !1, this.removeClass("frozen")
        }, top: function () {
            this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this))
        }, notTop: function () {
            this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this))
        }, bottom: function () {
            this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this))
        }, notBottom: function () {
            this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this))
        }, shouldUnpin: function (t) {
            return "down" === t.direction && !t.top && t.toleranceExceeded
        }, shouldPin: function (t) {
            return "up" === t.direction && t.toleranceExceeded || t.top
        }, addClass: function (t) {
            this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "))
        }, removeClass: function (t) {
            this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "))
        }, hasClass: function (t) {
            return this.classes[t].split(" ").every((function (t) {
                return this.classList.contains(t)
            }), this.elem)
        }, update: function (t) {
            t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin())
        }
    }, i.options = {
        tolerance: {up: 0, down: 0},
        offset: 0,
        scroller: t() ? window : null,
        classes: {
            frozen: "headroom--frozen",
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    }, i.cutsTheMustard = !!(t() && function () {
    }.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), i
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t) {
        return "string" == typeof t
    }

    function r(t) {
        return "function" == typeof t
    }

    function s(t) {
        return "number" == typeof t
    }

    function o(t) {
        return void 0 === t
    }

    function a(t) {
        return "object" == typeof t
    }

    function l(t) {
        return !1 !== t
    }

    function c() {
        return "undefined" != typeof window
    }

    function d(t) {
        return r(t) || n(t)
    }

    function u(t) {
        return (yt = pe(t, ne)) && di
    }

    function p(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function h(t, e) {
        return !e && console.warn(t)
    }

    function f(t, e) {
        return t && (ne[t] = e) && yt && (yt[t] = e) || ne
    }

    function m() {
        return 0
    }

    function g(t) {
        var e, i, n = t[0];
        if (a(n) || r(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = de.length; i-- && !de[i].targetTest(n);) ;
            e = de[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new ze(t[i], e))) || t.splice(i, 1);
        return t
    }

    function v(t) {
        return t._gsap || g(ve(t))[0]._gsap
    }

    function y(t, e, i) {
        return (i = t[e]) && r(i) ? t[e]() : o(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function b(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function _(t, e) {
        for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;) ;
        return n < i
    }

    function x(t, e, i) {
        var n, r = s(t[1]), o = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[o];
        if (r && (a.duration = t[1]), a.parent = i, e) {
            for (n = a; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = l(i.vars.inherit) && i.parent;
            a.immediateRender = l(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
        }
        return a
    }

    function E() {
        var t, e, i = se.length, n = se.slice(0);
        for (oe = {}, t = se.length = 0; t < i; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function T(t, e, i, n) {
        se.length && E(), t.render(e, i, n), se.length && E()
    }

    function C(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ie).length < 2 ? e : n(t) ? t.trim() : t
    }

    function S(t) {
        return t
    }

    function M(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function P(t, e) {
        for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
    }

    function O(t, e) {
        for (var i in e) t[i] = a(e[i]) ? O(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }

    function D(t, e) {
        var i, n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n
    }

    function k(t) {
        var e = t.parent || ft, i = t.keyframes ? P : M;
        if (l(t.inherit)) for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function A(t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = e._prev, s = e._next;
        r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
    }

    function I(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function z(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    }

    function L(t) {
        return t._repeat ? he(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function $(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function j(t) {
        return t._end = w(t._start + (t._tDur / Math.abs(t._ts || t._rts || Ht) || 0))
    }

    function N(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = w(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), j(t), i._dirty || z(i, t)), t
    }

    function F(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = $(t.rawTime(), e), (!e._dur || me(0, e.totalDuration(), i) - e._tTime > Ht) && e.render(i, !0)), z(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -Ht
        }
    }

    function R(t, e, i, n) {
        return e.parent && I(e), e._start = w(i + e._delay), e._end = w(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function (t, e, i, n, r) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var s, o = t[n];
            if (r) for (s = e[r]; o && o[r] > s;) o = o._prev;
            o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || F(t, e), t
    }

    function B(t, e) {
        return (ne.ScrollTrigger || p("scrollTrigger", e)) && ne.ScrollTrigger.create(e, t)
    }

    function H(t, e, i, n) {
        return Be(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Te.frame ? (se.push(t), t._lazy = [e, n], 1) : void 0 : 1
    }

    function W(t, e, i, n) {
        var r = t._repeat, s = w(e) || 0, o = t._tTime / t._tDur;
        return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : w(s * (r + 1) + t._rDelay * r) : s, o && !n ? N(t, t._tTime = t._tDur * o) : t.parent && j(t), i || z(t.parent, t), t
    }

    function Y(t) {
        return t instanceof je ? z(t) : W(t, t._dur)
    }

    function q(t, e) {
        var i, r, s = t.labels, o = t._recent || fe, a = t.duration() >= Bt ? o.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in s) ? "<" === (i = e.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(0 <= o._repeat)) + (parseFloat(e.substr(1)) || 0) : (i = e.indexOf("=")) < 0 ? (e in s || (s[e] = a), s[e]) : (r = +(e.charAt(i - 1) + e.substr(i + 1)), 1 < i ? q(t, e.substr(0, i - 1)) + r : a + r) : null == e ? a : +e
    }

    function X(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function V(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }

    function G(t, e) {
        return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== mt
    }

    function U(t) {
        return t.sort((function () {
            return .5 - Math.random()
        }))
    }

    function Z(t) {
        if (r(t)) return t;
        var e = a(t) ? t : {each: t}, i = De(e.ease), s = e.from || 0, o = parseFloat(e.base) || 0, l = {},
            c = 0 < s && s < 1, d = isNaN(s) || c, u = e.axis, p = s, h = s;
        return n(s) ? p = h = {
            center: .5,
            edges: .5,
            end: 1
        }[s] || 0 : !c && d && (p = s[0], h = s[1]), function (t, n, r) {
            var a, c, f, m, g, v, y, b, _, x = (r || e).length, E = l[x];
            if (!E) {
                if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, Bt])[1])) {
                    for (y = -Bt; y < (y = r[_++].getBoundingClientRect().left) && _ < x;) ;
                    _--
                }
                for (E = l[x] = [], a = d ? Math.min(_, x) * p - .5 : s % _, c = d ? x * h / _ - .5 : s / _ | 0, b = Bt, v = y = 0; v < x; v++) f = v % _ - a, m = c - (v / _ | 0), E[v] = g = u ? Math.abs("y" === u ? m : f) : Xt(f * f + m * m), y < g && (y = g), g < b && (b = g);
                "random" === s && U(E), E.max = y - b, E.min = b, E.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < _ ? x - 1 : u ? "y" === u ? x / _ : _ : Math.max(_, x / _)) || 0) * ("edges" === s ? -1 : 1), E.b = x < 0 ? o - x : o, E.u = V(e.amount || e.each) || 0, i = i && x < 0 ? Oe(i) : i
            }
            return x = (E[t] - E.min) / E.max || 0, w(E.b + (i ? i(x) : x) * E.v) + E.u
        }
    }

    function K(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
            return Math.floor(Math.round(parseFloat(i) / t) * t * e) / e + (s(i) ? 0 : V(i))
        }
    }

    function Q(t, e) {
        var i, n, o = Zt(t);
        return !o && a(t) && (i = o = t.radius || Bt, t.values ? (t = ve(t.values), (n = !s(t[0])) && (i *= i)) : t = K(t.increment)), X(e, o ? r(t) ? function (e) {
            return n = t(e), Math.abs(n - e) <= i ? n : e
        } : function (e) {
            for (var r, o, a = parseFloat(n ? e.x : e), l = parseFloat(n ? e.y : 0), c = Bt, d = 0, u = t.length; u--;) (r = n ? (r = t[u].x - a) * r + (o = t[u].y - l) * o : Math.abs(t[u] - a)) < c && (c = r, d = u);
            return d = !i || c <= i ? t[d] : e, n || d === e || s(e) ? d : d + V(e)
        } : K(t))
    }

    function J(t, e, i, n) {
        return X(Zt(t) ? !e : !0 === i ? !!(i = 0) : !n, (function () {
            return Zt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n
        }))
    }

    function tt(t, e, i) {
        return X(i, (function (i) {
            return t[~~e(i)]
        }))
    }

    function et(t) {
        for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? ie : Kt), o += t.substr(s, e - s) + J(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
        return o + t.substr(s, t.length - s)
    }

    function it(t, e, i) {
        var n, r, s, o = t.labels, a = Bt;
        for (n in o) (r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
        return s
    }

    function nt(t) {
        return I(t), t.progress() < 1 && be(t, "onInterrupt"), t
    }

    function rt(t, e, i) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * we + .5 | 0
    }

    function st(t, e, i) {
        var n, r, o, a, l, c, d, u, p, h, f = t ? s(t) ? [t >> 16, t >> 8 & we, t & we] : 0 : _e.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]) f = _e[t]; else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o), f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & we, t & we]; else if ("hsl" === t.substr(0, 3)) if (f = h = t.match(Kt), e) {
                if (~t.indexOf("=")) return f = t.match(Qt), i && f.length < 4 && (f[3] = 1), f
            } else a = +f[0] % 360 / 360, l = f[1] / 100, n = 2 * (c = f[2] / 100) - (r = c <= .5 ? c * (l + 1) : c + l - c * l), 3 < f.length && (f[3] *= 1), f[0] = rt(a + 1 / 3, n, r), f[1] = rt(a, n, r), f[2] = rt(a - 1 / 3, n, r); else f = t.match(Kt) || _e.transparent;
            f = f.map(Number)
        }
        return e && !h && (n = f[0] / we, r = f[1] / we, o = f[2] / we, c = ((d = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2, d === u ? a = l = 0 : (p = d - u, l = .5 < c ? p / (2 - d - u) : p / (d + u), a = d === n ? (r - o) / p + (r < o ? 6 : 0) : d === r ? (o - n) / p + 2 : (n - r) / p + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * l + .5), f[2] = ~~(100 * c + .5)), i && f.length < 4 && (f[3] = 1), f
    }

    function ot(t) {
        var e = [], i = [], n = -1;
        return t.split(xe).forEach((function (t) {
            var r = t.match(Jt) || [];
            e.push.apply(e, r), i.push(n += r.length + 1)
        })), e.c = i, e
    }

    function at(t, e, i) {
        var n, r, s, o, a = "", l = (t + a).match(xe), c = e ? "hsla(" : "rgba(", d = 0;
        if (!l) return t;
        if (l = l.map((function (t) {
            return (t = st(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        })), i && (s = ot(t), (n = i.c).join(a) !== s.c.join(a))) for (o = (r = t.replace(xe, "1").split(Jt)).length - 1; d < o; d++) a += r[d] + (~n.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
        if (!r) for (o = (r = t.split(xe)).length - 1; d < o; d++) a += r[d] + l[d];
        return a + r[o]
    }

    function lt(t) {
        var e, i = t.join(" ");
        if (xe.lastIndex = 0, xe.test(i)) return e = Ee.test(i), t[1] = at(t[1], e), t[0] = at(t[0], e, ot(t[1])), !0
    }

    function ct(t, e) {
        for (var i, n = t._first; n;) n instanceof je ? ct(n, e) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === e || (n.timeline ? ct(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next
    }

    function dt(t, e, i, n) {
        void 0 === i && (i = function (t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var r, s = {easeIn: e, easeOut: i, easeInOut: n};
        return b(t, (function (t) {
            for (var e in Se[t] = ne[t] = s, Se[r = t.toLowerCase()] = i, s) Se[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Se[t + "." + e] = s[e]
        })), s
    }

    function ut(t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function pt(t, e, i) {
        function n(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Gt((t - o) * s) + 1
        }

        var r = 1 <= e ? e : 1, s = (i || (t ? .3 : .45)) / (e < 1 ? e : 1), o = s / Wt * (Math.asin(1 / r) || 0),
            a = "out" === t ? n : "in" === t ? function (t) {
                return 1 - n(1 - t)
            } : ut(n);
        return s = Wt / s, a.config = function (e, i) {
            return pt(t, e, i)
        }, a
    }

    function ht(t, e) {
        function i(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }

        void 0 === e && (e = 1.70158);
        var n = "out" === t ? i : "in" === t ? function (t) {
            return 1 - i(1 - t)
        } : ut(i);
        return n.config = function (e) {
            return ht(t, e)
        }, n
    }

    var ft, mt, gt, vt, yt, bt, wt, _t, xt, Et, Tt, Ct, St, Mt, Pt, Ot, Dt, kt, At, It, zt, Lt, $t, jt, Nt,
        Ft = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        Rt = {duration: .5, overwrite: !1, delay: 0}, Bt = 1e8, Ht = 1 / Bt, Wt = 2 * Math.PI, Yt = Wt / 4, qt = 0,
        Xt = Math.sqrt, Vt = Math.cos, Gt = Math.sin,
        Ut = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, Zt = Array.isArray, Kt = /(?:-?\.?\d|\.)+/gi, Qt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Jt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, te = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, ee = /[+-]=-?[\.\d]+/,
        ie = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ne = {}, re = {}, se = [], oe = {}, ae = {}, le = {}, ce = 30, de = [],
        ue = "", pe = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, he = function (t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        }, fe = {_start: 0, endTime: m}, me = function (t, e, i) {
            return i < t ? t : e < i ? e : i
        }, ge = [].slice, ve = function (t, e) {
            return !n(t) || e || !gt && Ce() ? Zt(t) ? function (t, e, i) {
                return void 0 === i && (i = []), t.forEach((function (t) {
                    return n(t) && !e || G(t, 1) ? i.push.apply(i, ve(t)) : i.push(t)
                })) || i
            }(t, e) : G(t) ? ge.call(t, 0) : t ? [t] : [] : ge.call(vt.querySelectorAll(t), 0)
        }, ye = function (t, e, i, n, r) {
            var s = e - t, o = n - i;
            return X(r, (function (e) {
                return i + ((e - t) / s * o || 0)
            }))
        }, be = function (t, e, i) {
            var n, r, s = t.vars, o = s[e];
            if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && se.length && E(), n ? o.apply(r, n) : o.call(r)
        }, we = 255, _e = {
            aqua: [0, we, we],
            lime: [0, we, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, we],
            navy: [0, 0, 128],
            white: [we, we, we],
            olive: [128, 128, 0],
            yellow: [we, we, 0],
            orange: [we, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [we, 0, 0],
            pink: [we, 192, 203],
            cyan: [0, we, we],
            transparent: [we, we, we, 0]
        }, xe = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in _e) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(), Ee = /hsl[a]?\(/, Te = (Ot = Date.now, Dt = 500, kt = 33, At = Ot(), It = At, Lt = zt = 1e3 / 240, St = {
            time: 0,
            frame: 0,
            tick: function () {
                ke(!0)
            },
            deltaRatio: function (t) {
                return Mt / (1e3 / (t || 60))
            },
            wake: function () {
                bt && (!gt && c() && (mt = gt = window, vt = mt.document || {}, ne.gsap = di, (mt.gsapVersions || (mt.gsapVersions = [])).push(di.version), u(yt || mt.GreenSockGlobals || !mt.gsap && mt || {}), Ct = mt.requestAnimationFrame), Et && St.sleep(), Tt = Ct || function (t) {
                    return setTimeout(t, Lt - 1e3 * St.time + 1 | 0)
                }, xt = 1, ke(2))
            },
            sleep: function () {
                (Ct ? mt.cancelAnimationFrame : clearTimeout)(Et), xt = 0, Tt = m
            },
            lagSmoothing: function (t, e) {
                Dt = t || 1e8, kt = Math.min(e, Dt, 0)
            },
            fps: function (t) {
                zt = 1e3 / (t || 240), Lt = 1e3 * St.time + zt
            },
            add: function (t) {
                $t.indexOf(t) < 0 && $t.push(t), Ce()
            },
            remove: function (t) {
                var e;
                ~(e = $t.indexOf(t)) && $t.splice(e, 1) && e <= Pt && Pt--
            },
            _listeners: $t = []
        }), Ce = function () {
            return !xt && Te.wake()
        }, Se = {}, Me = /^[\d.\-M][\d.\-,\s]/, Pe = /["']/g, Oe = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        }, De = function (t, e) {
            return t && (r(t) ? t : Se[t] || function (t) {
                var e = (t + "").split("("), i = Se[e[0]];
                return i && 1 < e.length && i.config ? i.config.apply(null, ~t.indexOf("{") ? [function (t) {
                    for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Pe, "").trim() : +n, o = i.substr(e + 1).trim();
                    return r
                }(e[1])] : function (t) {
                    var e = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", e);
                    return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i)
                }(t).split(",").map(C)) : Se._CE && Me.test(t) ? Se._CE("", t) : i
            }(t)) || e
        };

    function ke(t) {
        var e, i, n, r, s = Ot() - It, o = !0 === t;
        if (Dt < s && (At += s - kt), (0 < (e = (n = (It += s) - At) - Lt) || o) && (r = ++St.frame, Mt = n - 1e3 * St.time, St.time = n /= 1e3, Lt += e + (zt <= e ? 4 : zt - e), i = 1), o || (Et = Tt(ke)), i) for (Pt = 0; Pt < $t.length; Pt++) $t[Pt](n, Mt, r, t)
    }

    function Ae(t) {
        return t < Nt ? jt * t * t : t < .7272727272727273 ? jt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? jt * (t -= 2.25 / 2.75) * t + .9375 : jt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }

    b("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var i = e < 5 ? e + 1 : e;
        dt(t + ",Power" + (i - 1), e ? function (t) {
            return Math.pow(t, i)
        } : function (t) {
            return t
        }, (function (t) {
            return 1 - Math.pow(1 - t, i)
        }), (function (t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }))
    })), Se.Linear.easeNone = Se.none = Se.Linear.easeIn, dt("Elastic", pt("in"), pt("out"), pt()), jt = 7.5625, Nt = 1 / 2.75, dt("Bounce", (function (t) {
        return 1 - Ae(1 - t)
    }), Ae), dt("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), dt("Circ", (function (t) {
        return -(Xt(1 - t * t) - 1)
    })), dt("Sine", (function (t) {
        return 1 === t ? 1 : 1 - Vt(t * Yt)
    })), dt("Back", ht("in"), ht("out"), ht()), Se.SteppedEase = Se.steps = ne.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t, n = t + (e ? 0 : 1), r = e ? 1 : 0;
            return function (t) {
                return ((n * me(0, .99999999, t) | 0) + r) * i
            }
        }
    }, Rt.ease = Se["quad.out"], b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return ue += t + "," + t + "Params,"
    }));
    var Ie, ze = function (t, e) {
        this.id = qt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : y, this.set = e ? e.getSetter : Ke
    }, Le = ((Ie = $e.prototype).delay = function (t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, Ie.duration = function (t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, Ie.totalDuration = function (t) {
        return arguments.length ? (this._dirty = 0, W(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, Ie.totalTime = function (t, e) {
        if (Ce(), !arguments.length) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
            for (N(this, t); i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && R(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Ht || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), T(this, t, e)), this
    }, Ie.time = function (t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + L(this)) % this._dur || (t ? this._dur : 0), e) : this._time
    }, Ie.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, Ie.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + L(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, Ie.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? he(this._tTime, i) + 1 : 1
    }, Ie.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Ht ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? $(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || t === -Ht ? 0 : this._rts, function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        }(this.totalTime(me(-this._delay, this._tDur, e), !0))
    }, Ie.paused = function (t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Ht) && Math.abs(this._zTime) !== Ht))), this) : this._ps
    }, Ie.startTime = function (t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || R(e, this, t - this._delay), this
        }
        return this._start
    }, Ie.endTime = function (t) {
        return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
    }, Ie.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $(e.rawTime(t), this) : this._tTime : this._tTime
    }, Ie.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
        return i
    }, Ie.repeat = function (t) {
        return arguments.length ? (this._repeat = t, Y(this)) : this._repeat
    }, Ie.repeatDelay = function (t) {
        return arguments.length ? (this._rDelay = t, Y(this)) : this._rDelay
    }, Ie.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, Ie.seek = function (t, e) {
        return this.totalTime(q(this, t), l(e))
    }, Ie.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, l(e))
    }, Ie.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, Ie.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, Ie.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
    }, Ie.resume = function () {
        return this.paused(!1)
    }, Ie.reversed = function (t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Ht : 0)), this) : this._rts < 0
    }, Ie.invalidate = function () {
        return this._initted = 0, this._zTime = -Ht, this
    }, Ie.isActive = function () {
        var t, e = this.parent || this._dp, i = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - Ht))
    }, Ie.eventCallback = function (t, e, i) {
        var n = this.vars;
        return 1 < arguments.length ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
    }, Ie.then = function (t) {
        var e = this;
        return new Promise((function (i) {
            function n() {
                var t = e.then;
                e.then = null, r(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), i(s), e.then = t
            }

            var s = r(t) ? t : S;
            e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? n() : e._prom = n
        }))
    }, Ie.kill = function () {
        nt(this)
    }, $e);

    function $e(t, e) {
        var i = t.parent || ft;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, W(this, +t.duration, 1, 1), this.data = t.data, xt || Te.wake(), i && R(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }

    M(Le.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Ht,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var je = function (t) {
        function o(e, n) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e, n) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = l(e.sortChildren), r.parent && F(r.parent, i(r)), e.scrollTrigger && B(i(r), e.scrollTrigger), r
        }

        e(o, t);
        var a = o.prototype;
        return a.to = function (t, e, i, n) {
            return new qe(t, x(arguments, 0, this), q(this, s(e) ? n : i)), this
        }, a.from = function (t, e, i, n) {
            return new qe(t, x(arguments, 1, this), q(this, s(e) ? n : i)), this
        }, a.fromTo = function (t, e, i, n, r) {
            return new qe(t, x(arguments, 2, this), q(this, s(e) ? r : n)), this
        }, a.set = function (t, e, i) {
            return e.duration = 0, e.parent = this, k(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new qe(t, e, q(this, i), 1), this
        }, a.call = function (t, e, i) {
            return R(this, qe.delayedCall(0, t, e), q(this, i))
        }, a.staggerTo = function (t, e, i, n, r, s, o) {
            return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new qe(t, i, q(this, r)), this
        }, a.staggerFrom = function (t, e, i, n, r, s, o) {
            return i.runBackwards = 1, k(i).immediateRender = l(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
        }, a.staggerFromTo = function (t, e, i, n, r, s, o, a) {
            return n.startAt = i, k(n).immediateRender = l(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
        }, a.render = function (t, e, i) {
            var n, r, s, o, a, l, c, d, u, p, h, f, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur, y = this !== ft && g - Ht < t && 0 <= t ? g : t < Ht ? 0 : t,
                b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || i || b) {
                if (m !== this._time && v && (y += this._time - m, t += this._time - m), n = y, u = this._start, l = !(d = this._ts), b && (v || (m = this._zTime), !t && e || (this._zTime = t)), this._repeat && (h = this._yoyo, n = w(y % (a = v + this._rDelay)), y === g ? (o = this._repeat, n = v) : ((o = ~~(y / a)) && o === y / a && (n = v, o--), v < n && (n = v)), p = he(this._tTime, a), !m && this._tTime && p !== o && (p = o), h && 1 & o && (n = v - n, f = 1), o !== p && !this._lock)) {
                    var _ = h && 1 & p, x = _ === (h && 1 & o);
                    if (o < p && (_ = !_), m = _ ? 0 : v, this._lock = 1, this.render(m || (f ? 0 : w(o * a)), e, !v)._lock = 0, !e && this.parent && be(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m !== this._time || l != !this._ts) return this;
                    if (v = this._dur, g = this._tDur, x && (this._lock = 2, m = _ ? v : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    ct(this, f)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, i) {
                    var n;
                    if (e < i) for (n = t._first; n && n._start <= i;) {
                        if (!n._dur && "isPause" === n.data && n._start > e) return n;
                        n = n._next
                    } else for (n = t._last; n && n._start >= i;) {
                        if (!n._dur && "isPause" === n.data && n._start < e) return n;
                        n = n._prev
                    }
                }(this, w(m), w(n))) && (y -= n - (n = c._start)), this._tTime = y, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), m || !n || e || be(this, "onStart"), m <= n && 0 <= t) for (r = this._first; r;) {
                    if (s = r._next, (r._act || n >= r._start) && r._ts && c !== r) {
                        if (r.parent !== this) return this.render(t, e, i);
                        if (r.render(0 < r._ts ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                            c = 0, s && (y += this._zTime = -Ht);
                            break
                        }
                    }
                    r = s
                } else {
                    r = this._last;
                    for (var E = t < 0 ? t : n; r;) {
                        if (s = r._prev, (r._act || E <= r._end) && r._ts && c !== r) {
                            if (r.parent !== this) return this.render(t, e, i);
                            if (r.render(0 < r._ts ? (E - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (E - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                                c = 0, s && (y += this._zTime = E ? -Ht : Ht);
                                break
                            }
                        }
                        r = s
                    }
                }
                if (c && !e && (this.pause(), c.render(m <= n ? 0 : -Ht)._zTime = m <= n ? 1 : -1, this._ts)) return this._start = u, j(this), this.render(t, e, i);
                this._onUpdate && !e && be(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (u !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || (!t && v || !(y === g && 0 < this._ts || !y && this._ts < 0) || I(this, 1), e || t < 0 && !m || !y && !m || (be(this, y === g ? "onComplete" : "onReverseComplete", !0), !this._prom || y < g && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, a.add = function (t, e) {
            var i = this;
            if (s(e) || (e = q(this, e)), !(t instanceof Le)) {
                if (Zt(t)) return t.forEach((function (t) {
                    return i.add(t, e)
                })), this;
                if (n(t)) return this.addLabel(t, e);
                if (!r(t)) return this;
                t = qe.delayedCall(0, t)
            }
            return this !== t ? R(this, t, e) : this
        }, a.getChildren = function (t, e, i, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -Bt);
            for (var r = [], s = this._first; s;) s._start >= n && (s instanceof qe ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
            return r
        }, a.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;) if (e[i].vars.id === t) return e[i]
        }, a.remove = function (t) {
            return n(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (A(this, t), t === this._recent && (this._recent = this._last), z(this))
        }, a.totalTime = function (e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = w(Te.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, a.addLabel = function (t, e) {
            return this.labels[t] = q(this, e), this
        }, a.removeLabel = function (t) {
            return delete this.labels[t], this
        }, a.addPause = function (t, e, i) {
            var n = qe.delayedCall(0, e || m, i);
            return n.data = "isPause", this._hasPause = 1, R(this, n, q(this, t))
        }, a.removePause = function (t) {
            var e = this._first;
            for (t = q(this, t); e;) e._start === t && "isPause" === e.data && I(e), e = e._next
        }, a.killTweensOf = function (t, e, i) {
            for (var n = this.getTweensOf(t, i), r = n.length; r--;) Fe !== n[r] && n[r].kill(t, e);
            return this
        }, a.getTweensOf = function (t, e) {
            for (var i, n = [], r = ve(t), o = this._first, a = s(e); o;) o instanceof qe ? _(o._targets, r) && (a ? (!Fe || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (i = o.getTweensOf(r, e)).length && n.push.apply(n, i), o = o._next;
            return n
        }, a.tweenTo = function (t, e) {
            e = e || {};
            var i = this, n = q(i, t), r = e.startAt, s = e.onStart, o = e.onStartParams, a = qe.to(i, M(e, {
                ease: "none",
                lazy: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (r && "time" in r ? r.time : i._time)) / i.timeScale()) || Ht,
                onStart: function () {
                    i.pause();
                    var t = e.duration || Math.abs((n - i._time) / i.timeScale());
                    a._dur !== t && W(a, t, 0, 1).render(a._time, !0, !0), s && s.apply(a, o || [])
                }
            }));
            return a
        }, a.tweenFromTo = function (t, e, i) {
            return this.tweenTo(e, M({startAt: {time: q(this, t)}}, i))
        }, a.recent = function () {
            return this._recent
        }, a.nextLabel = function (t) {
            return void 0 === t && (t = this._time), it(this, q(this, t))
        }, a.previousLabel = function (t) {
            return void 0 === t && (t = this._time), it(this, q(this, t), 1)
        }, a.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Ht)
        }, a.shiftChildren = function (t, e, i) {
            void 0 === i && (i = 0);
            for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return z(this)
        }, a.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, a.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), z(this)
        }, a.totalDuration = function (t) {
            var e, i, n, r = 0, s = this, o = s._last, a = Bt;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), a < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, R(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
                W(s, s === ft && s._time > r ? s._time : r, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, o.updateRoot = function (t) {
            if (ft._ts && (T(ft, $(t, ft)), wt = Te.frame), Te.frame >= ce) {
                ce += Ft.autoSleep || 120;
                var e = ft._first;
                if ((!e || !e._ts) && Ft.autoSleep && Te._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Te.sleep()
                }
            }
        }, o
    }(Le);

    function Ne(t, e, i, s, o, l) {
        var c, d, u, p;
        if (ae[t] && !1 !== (c = new ae[t]).init(o, c.rawVars ? e[t] : function (t, e, i, s, o) {
            if (r(t) && (t = He(t, o, e, i, s)), !a(t) || t.style && t.nodeType || Zt(t) || Ut(t)) return n(t) ? He(t, o, e, i, s) : t;
            var l, c = {};
            for (l in t) c[l] = He(t[l], o, e, i, s);
            return c
        }(e[t], s, o, l, i), i, s, l) && (i._pt = d = new si(i._pt, o, t, 0, 1, c.render, c, 0, c.priority), i !== _t)) for (u = i._ptLookup[i._targets.indexOf(o)], p = c._props.length; p--;) u[c._props[p]] = d;
        return c
    }

    M(je.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var Fe, Re = function (t, e, i, s, o, a, l, c, d) {
            r(s) && (s = s(o || 0, t, a));
            var u, h = t[e],
                f = "get" !== i ? i : r(h) ? d ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](d) : t[e]() : h,
                m = r(h) ? d ? Ze : Ue : Ge;
            if (n(s) && (~s.indexOf("random(") && (s = et(s)), "=" === s.charAt(1) && (s = parseFloat(f) + parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) + (V(f) || 0))), f !== s) return isNaN(f * s) ? (h || e in t || p(e, s), function (t, e, i, n, r, s, o) {
                var a, l, c, d, u, p, h, f, m = new si(this._pt, t, e, 0, 1, ti, null, r), g = 0, v = 0;
                for (m.b = i, m.e = n, i += "", (h = ~(n += "").indexOf("random(")) && (n = et(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(te) || []; a = te.exec(n);) d = a[0], u = n.substring(g, a.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), d !== l[v++] && (p = parseFloat(l[v - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: u || 1 === v ? u : ",",
                    s: p,
                    c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - p,
                    m: c && c < 4 ? Math.round : 0
                }, g = te.lastIndex);
                return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (ee.test(n) || h) && (m.e = 0), this._pt = m
            }.call(this, t, e, f, s, m, c || Ft.stringFilter, d)) : (u = new si(this._pt, t, e, +f || 0, s - (f || 0), "boolean" == typeof h ? Je : Qe, 0, m), d && (u.fp = d), l && u.modifier(l, this, t), this._pt = u)
        }, Be = function t(e, i) {
            var n, r, s, o, a, c, d, u, p, h, f, m, y, b = e.vars, w = b.ease, _ = b.startAt, x = b.immediateRender,
                T = b.lazy, C = b.onUpdate, S = b.onUpdateParams, P = b.callbackScope, O = b.runBackwards, k = b.yoyoEase,
                A = b.keyframes, z = b.autoRevert, L = e._dur, $ = e._startAt, j = e._targets, N = e.parent,
                F = N && "nested" === N.data ? N.parent._targets : j, R = "auto" === e._overwrite, B = e.timeline;
            if (!B || A && w || (w = "none"), e._ease = De(w, Rt.ease), e._yEase = k ? Oe(De(!0 === k ? w : k, Rt.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), !B) {
                if (m = (u = j[0] ? v(j[0]).harness : 0) && b[u.prop], n = D(b, re), $ && $.render(-1, !0).kill(), _) {
                    if (I(e._startAt = qe.set(j, M({
                        data: "isStart",
                        overwrite: !1,
                        parent: N,
                        immediateRender: !0,
                        lazy: l(T),
                        startAt: null,
                        delay: 0,
                        onUpdate: C,
                        onUpdateParams: S,
                        callbackScope: P,
                        stagger: 0
                    }, _))), x) if (0 < i) z || (e._startAt = 0); else if (L && !(i < 0 && $)) return void (i && (e._zTime = i))
                } else if (O && L) if ($) z || (e._startAt = 0); else if (i && (x = !1), s = M({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: x && l(T),
                    immediateRender: x,
                    stagger: 0,
                    parent: N
                }, n), m && (s[u.prop] = m), I(e._startAt = qe.set(j, s)), x) {
                    if (!i) return
                } else t(e._startAt, Ht);
                for (e._pt = 0, T = L && l(T) || T && !L, r = 0; r < j.length; r++) {
                    if (d = (a = j[r])._gsap || g(j)[r]._gsap, e._ptLookup[r] = h = {}, oe[d.id] && se.length && E(), f = F === j ? r : F.indexOf(a), u && !1 !== (p = new u).init(a, m || n, e, f, F) && (e._pt = o = new si(e._pt, a, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function (t) {
                        h[t] = o
                    })), p.priority && (c = 1)), !u || m) for (s in n) ae[s] && (p = Ne(s, n, e, f, a, F)) ? p.priority && (c = 1) : h[s] = o = Re.call(e, a, s, "get", n[s], f, F, 0, b.stringFilter);
                    e._op && e._op[r] && e.kill(a, e._op[r]), R && e._pt && (Fe = e, ft.killTweensOf(a, h, e.globalTime(0)), y = !e.parent, Fe = 0), e._pt && T && (oe[d.id] = 1)
                }
                c && ri(e), e._onInit && e._onInit(e)
            }
            e._from = !B && !!b.runBackwards, e._onUpdate = C, e._initted = (!e._op || e._pt) && !y
        }, He = function (t, e, i, s, o) {
            return r(t) ? t.call(e, i, s, o) : n(t) && ~t.indexOf("random(") ? et(t) : t
        }, We = ue + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ye = (We + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), qe = function (t) {
            function r(e, n, r, o) {
                var c;
                "number" == typeof n && (r.duration = n, n = r, r = null);
                var u, p, f, v, y, b, _, x, E = (c = t.call(this, o ? n : k(n), r) || this).vars, T = E.duration,
                    C = E.delay, S = E.immediateRender, P = E.stagger, O = E.overwrite, D = E.keyframes, A = E.defaults,
                    I = E.scrollTrigger, z = E.yoyoEase, L = c.parent,
                    $ = (Zt(e) || Ut(e) ? s(e[0]) : "length" in n) ? [e] : ve(e);
                if (c._targets = $.length ? g($) : h("GSAP target " + e + " not found. https://greensock.com", !Ft.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = O, D || P || d(T) || d(C)) {
                    if (n = c.vars, (u = c.timeline = new je({
                        data: "nested",
                        defaults: A || {}
                    })).kill(), u.parent = i(c), D) M(u.vars.defaults, {ease: "none"}), D.forEach((function (t) {
                        return u.to($, t, ">")
                    })); else {
                        if (v = $.length, _ = P ? Z(P) : m, a(P)) for (y in P) ~We.indexOf(y) && ((x = x || {})[y] = P[y]);
                        for (p = 0; p < v; p++) {
                            for (y in f = {}, n) Ye.indexOf(y) < 0 && (f[y] = n[y]);
                            f.stagger = 0, z && (f.yoyoEase = z), x && pe(f, x), b = $[p], f.duration = +He(T, i(c), p, b, $), f.delay = (+He(C, i(c), p, b, $) || 0) - c._delay, !P && 1 === v && f.delay && (c._delay = C = f.delay, c._start += C, f.delay = 0), u.to(b, f, _(p, b, $))
                        }
                        u.duration() ? T = C = 0 : c.timeline = 0
                    }
                    T || c.duration(T = u.duration())
                } else c.timeline = 0;
                return !0 === O && (Fe = i(c), ft.killTweensOf($), Fe = 0), L && F(L, i(c)), (S || !T && !D && c._start === w(L._time) && l(S) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(i(c)) && "nested" !== L.data) && (c._tTime = -Ht, c.render(Math.max(0, -C))), I && B(i(c), I), c
            }

            e(r, t);
            var o = r.prototype;
            return o.render = function (t, e, i) {
                var n, r, s, o, a, l, c, d, u, p = this._time, h = this._tDur, f = this._dur,
                    m = h - Ht < t && 0 <= t ? h : t < Ht ? 0 : t;
                if (f) {
                    if (m !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = m, d = this.timeline, this._repeat) {
                            if (n = w(m % (o = f + this._rDelay)), m === h ? (s = this._repeat, n = f) : ((s = ~~(m / o)) && s === m / o && (n = f, s--), f < n && (n = f)), (l = this._yoyo && 1 & s) && (u = this._yEase, n = f - n), a = he(this._tTime, o), n === p && !i && this._initted) return this;
                            s !== a && (d && this._yEase && ct(d, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(w(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (H(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
                            if (f !== this._dur) return this.render(t, e, i)
                        }
                        for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (u || this._ease)(n / f), this._from && (this.ratio = c = 1 - c), !n || p || e || be(this, "onStart"), r = this._pt; r;) r.r(c, r.d), r = r._next;
                        d && d.render(t < 0 ? t : !n && l ? -Ht : d._dur * c, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), be(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && be(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && f || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || I(this, 1), e || t < 0 && !p || !m && !p || (be(this, m === h ? "onComplete" : "onReverseComplete", !0), !this._prom || m < h && 0 < this.timeScale() || this._prom()))
                    }
                } else !function (t, e, i, n) {
                    var r, s, o = t.ratio,
                        a = e < 0 || !e && o && !t._start && t._zTime > Ht && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        l = t._rDelay, c = 0;
                    if (l && t._repeat && (c = me(0, t._tDur, e), he(c, l) !== (s = he(t._tTime, l)) && (o = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== o || n || t._zTime === Ht || !e && t._zTime) {
                        if (!t._initted && H(t, e, n, i)) return;
                        for (s = t._zTime, t._zTime = e || (i ? Ht : 0), i = i || e && !s, t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = c, i || be(t, "onStart"), r = t._pt; r;) r.r(a, r.d), r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && be(t, "onUpdate"), c && t._repeat && !i && t.parent && be(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && I(t, 1), i || (be(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, o.targets = function () {
                return this._targets
            }, o.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, o.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return nt(this);
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || nt(this), this.parent && i !== this.timeline.totalDuration() && W(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var r, s, o, a, l, c, d, u = this._targets, p = t ? ve(t) : u, h = this._ptLookup, f = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                    for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];) ;
                    return i < 0
                }(u, p)) return "all" === e && (this._pt = 0), nt(this);
                for (r = this._op = this._op || [], "all" !== e && (n(e) && (l = {}, b(e, (function (t) {
                    return l[t] = 1
                })), e = l), e = function (t, e) {
                    var i, n, r, s, o = t[0] ? v(t[0]).harness : 0, a = o && o.aliases;
                    if (!a) return e;
                    for (n in i = pe({}, e), a) if (n in i) for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
                    return i
                }(u, e)), d = u.length; d--;) if (~p.indexOf(u[d])) for (l in s = h[d], "all" === e ? (r[d] = e, a = s, o = {}) : (o = r[d] = r[d] || {}, a = e), a) (c = s && s[l]) && ("kill" in c.d && !0 !== c.d.kill(l) || A(this, c, "_pt"), delete s[l]), "all" !== o && (o[l] = 1);
                return this._initted && !this._pt && f && nt(this), this
            }, r.to = function (t, e, i) {
                return new r(t, e, i)
            }, r.from = function (t, e) {
                return new r(t, x(arguments, 1))
            }, r.delayedCall = function (t, e, i, n) {
                return new r(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, r.fromTo = function (t, e, i) {
                return new r(t, x(arguments, 2))
            }, r.set = function (t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e)
            }, r.killTweensOf = function (t, e, i) {
                return ft.killTweensOf(t, e, i)
            }, r
        }(Le);

    function Xe(t, e, i) {
        return t.setAttribute(e, i)
    }

    function Ve(t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
    }

    M(qe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), b("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        qe[t] = function () {
            var e = new je, i = ge.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    }));
    var Ge = function (t, e, i) {
        return t[e] = i
    }, Ue = function (t, e, i) {
        return t[e](i)
    }, Ze = function (t, e, i, n) {
        return t[e](n.fp, i)
    }, Ke = function (t, e) {
        return r(t[e]) ? Ue : o(t[e]) && t.setAttribute ? Xe : Ge
    }, Qe = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }, Je = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }, ti = function (t, e) {
        var i = e._pt, n = "";
        if (!t && e.b) n = e.b; else if (1 === t && e.e) n = e.e; else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }, ei = function (t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    }, ii = function (t, e, i, n) {
        for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
    }, ni = function (t) {
        for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? A(this, n, "_pt") : n.dep || (e = 1), n = i;
        return !e
    }, ri = function (t) {
        for (var e, i, n, r, s = t._pt; s;) {
            for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
            (s._prev = i ? i._prev : r) ? s._prev._next = s : n = s, (s._next = i) ? i._prev = s : r = s, s = e
        }
        t._pt = n
    }, si = (oi.prototype.modifier = function (t, e, i) {
        this.mSet = this.mSet || this.set, this.set = Ve, this.m = t, this.mt = i, this.tween = e
    }, oi);

    function oi(t, e, i, n, r, s, o, a, l) {
        this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || Qe, this.d = o || this, this.set = a || Ge, this.pr = l || 0, (this._next = t) && (t._prev = this)
    }

    b(ue + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return re[t] = 1
    })), ne.TweenMax = ne.TweenLite = qe, ne.TimelineLite = ne.TimelineMax = je, ft = new je({
        sortChildren: !1,
        defaults: Rt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Ft.stringFilter = lt;
    var ai = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach((function (t) {
                return function (t) {
                    var e = (t = !t.name && t.default || t).name, i = r(t), n = e && !i && t.init ? function () {
                            this._props = []
                        } : t, s = {init: m, render: ei, add: Re, kill: ni, modifier: ii, rawVars: 0},
                        o = {targetTest: 0, get: 0, getSetter: Ke, aliases: {}, register: 0};
                    if (Ce(), t !== n) {
                        if (ae[e]) return;
                        M(n, M(D(t, s), o)), pe(n.prototype, pe(s, D(t, o))), ae[n.prop = e] = n, t.targetTest && (de.push(n), re[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    f(e, n), t.register && t.register(di, n, si)
                }(t)
            }))
        },
        timeline: function (t) {
            return new je(t)
        },
        getTweensOf: function (t, e) {
            return ft.getTweensOf(t, e)
        },
        getProperty: function (t, e, i, r) {
            n(t) && (t = ve(t)[0]);
            var s = v(t || {}).get, o = i ? S : C;
            return "native" === i && (i = ""), t ? e ? o((ae[e] && ae[e].get || s)(t, e, i, r)) : function (e, i, n) {
                return o((ae[e] && ae[e].get || s)(t, e, i, n))
            } : t
        },
        quickSetter: function (t, e, i) {
            if (1 < (t = ve(t)).length) {
                var n = t.map((function (t) {
                    return di.quickSetter(t, e, i)
                })), r = n.length;
                return function (t) {
                    for (var e = r; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var s = ae[e], o = v(t), a = o.harness && (o.harness.aliases || {})[e] || e, l = s ? function (e) {
                var n = new s;
                _t._pt = 0, n.init(t, i ? e + i : e, _t, 0, [t]), n.render(1, n), _t._pt && ei(1, _t)
            } : o.set(t, a);
            return s ? l : function (e) {
                return l(t, a, i ? e + i : e, o, 1)
            }
        },
        isTweening: function (t) {
            return 0 < ft.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = De(t.ease, Rt.ease)), O(Rt, t || {})
        },
        config: function (t) {
            return O(Ft, t || {})
        },
        registerEffect: function (t) {
            var e = t.name, i = t.effect, n = t.plugins, r = t.defaults, s = t.extendTimeline;
            (n || "").split(",").forEach((function (t) {
                return t && !ae[t] && !ne[t] && h(e + " effect requires " + t + " plugin.")
            })), le[e] = function (t, e, n) {
                return i(ve(t), M(e || {}, r), n)
            }, s && (je.prototype[e] = function (t, i, n) {
                return this.add(le[e](t, a(i) ? i : (n = i) && {}, this), n)
            })
        },
        registerEase: function (t, e) {
            Se[t] = De(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? De(t, e) : Se
        },
        getById: function (t) {
            return ft.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i, n, r = new je(t);
            for (r.smoothChildTiming = l(t.smoothChildTiming), ft.remove(r), r._dp = 0, r._time = r._tTime = ft._time, i = ft._first; i;) n = i._next, !e && !i._dur && i instanceof qe && i.vars.onComplete === i._targets[0] || R(r, i, i._start - i._delay), i = n;
            return R(ft, r, 0), r
        },
        utils: {
            wrap: function t(e, i, n) {
                var r = i - e;
                return Zt(e) ? tt(e, t(0, e.length), i) : X(n, (function (t) {
                    return (r + (t - e) % r) % r + e
                }))
            }, wrapYoyo: function t(e, i, n) {
                var r = i - e, s = 2 * r;
                return Zt(e) ? tt(e, t(0, e.length - 1), i) : X(n, (function (t) {
                    return e + (r < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                }))
            }, distribute: Z, random: J, snap: Q, normalize: function (t, e, i) {
                return ye(t, e, 0, 1, i)
            }, getUnit: V, clamp: function (t, e, i) {
                return X(i, (function (i) {
                    return me(t, e, i)
                }))
            }, splitColor: st, toArray: ve, mapRange: ye, pipe: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            }, unitize: function (t, e) {
                return function (i) {
                    return t(parseFloat(i)) + (e || V(i))
                }
            }, interpolate: function t(e, i, r, s) {
                var o = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!o) {
                    var a, l, c, d, u, p = n(e), h = {};
                    if (!0 === r && (s = 1) && (r = null), p) e = {p: e}, i = {p: i}; else if (Zt(e) && !Zt(i)) {
                        for (c = [], d = e.length, u = d - 2, l = 1; l < d; l++) c.push(t(e[l - 1], e[l]));
                        d--, o = function (t) {
                            t *= d;
                            var e = Math.min(u, ~~t);
                            return c[e](t - e)
                        }, r = i
                    } else s || (e = pe(Zt(e) ? [] : {}, e));
                    if (!c) {
                        for (a in i) Re.call(h, e, a, "get", i[a]);
                        o = function (t) {
                            return ei(t, h) || (p ? e.p : e)
                        }
                    }
                }
                return X(r, o)
            }, shuffle: U
        },
        install: u,
        effects: le,
        ticker: Te,
        updateRoot: je.updateRoot,
        plugins: ae,
        globalTimeline: ft,
        core: {PropTween: si, globals: f, Tween: qe, Timeline: je, Animation: Le, getCache: v, _removeLinkedListItem: A}
    };

    function li(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    }

    function ci(t, e) {
        return {
            name: t, rawVars: 1, init: function (t, i, r) {
                r._onInit = function (t) {
                    var r, s;
                    if (n(i) && (r = {}, b(i, (function (t) {
                        return r[t] = 1
                    })), i = r), e) {
                        for (s in r = {}, i) r[s] = e(i[s]);
                        i = r
                    }
                    !function (t, e) {
                        var i, n, r, s = t._targets;
                        for (i in e) for (n = s.length; n--;) (r = (r = t._ptLookup[n][i]) && r.d) && (r._pt && (r = li(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                    }(t, i)
                }
            }
        }
    }

    b("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return ai[t] = qe[t]
    })), Te.add(je.updateRoot), _t = ai.to({}, {duration: 0});
    var di = ai.registerPlugin({
        name: "attr", init: function (t, e, i, n, r) {
            var s, o;
            for (s in e) (o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
        }
    }, {
        name: "endArray", init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
        }
    }, ci("roundProps", K), ci("modifiers"), ci("snap", Q)) || ai;

    function ui(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function pi(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function hi(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function fi(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    }

    function mi(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function gi(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function vi(t, e, i) {
        return t.style[e] = i
    }

    function yi(t, e, i) {
        return t.style.setProperty(e, i)
    }

    function bi(t, e, i) {
        return t._gsap[e] = i
    }

    function wi(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }

    function _i(t, e, i, n, r) {
        var s = t._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(r, s)
    }

    function xi(t, e, i, n, r) {
        var s = t._gsap;
        s[e] = i, s.renderTransform(r, s)
    }

    function Ei(t, e) {
        var i = qi.createElementNS ? qi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : qi.createElement(t);
        return i.style ? i : qi.createElement(t)
    }

    function Ti(t, e, i) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(_n, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && Ti(t, Pn(e) || e, 1) || ""
    }

    function Ci() {
        "undefined" != typeof window && window.document && (Yi = window, qi = Yi.document, Xi = qi.documentElement, Gi = Ei("div") || {style: {}}, Ui = Ei("div"), Cn = Pn(Cn), Sn = Cn + "Origin", Gi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ki = !!Pn("perspective"), Vi = 1)
    }

    function Si(t) {
        var e,
            i = Ei("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode, r = this.nextSibling, s = this.style.cssText;
        if (Xi.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Si
        } catch (t) {
        } else this._gsapBBox && (e = this._gsapBBox());
        return n && (r ? n.insertBefore(this, r) : n.appendChild(this)), Xi.removeChild(i), this.style.cssText = s, e
    }

    function Mi(t, e) {
        for (var i = e.length; i--;) if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    }

    function Pi(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (i) {
            e = Si.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Si || (e = Si.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Mi(t, ["x", "cx", "x1"]) || 0,
            y: +Mi(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Oi(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Pi(t))
    }

    function Di(t, e) {
        if (e) {
            var i = t.style;
            e in vn && e !== Sn && (e = Cn), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(_n, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }

    function ki(t, e, i, n, r, s) {
        var o = new si(t._pt, e, i, 0, 1, s ? gi : mi);
        return (t._pt = o).b = n, o.e = r, t._props.push(i), o
    }

    function Ai(t, e, i, n) {
        var r, s, o, a, l = parseFloat(i) || 0, c = (i + "").trim().substr((l + "").length) || "px", d = Gi.style,
            u = xn.test(e), p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === n, m = "%" === n;
        return n === c || !l || On[n] || On[c] ? l : ("px" === c || f || (l = Ai(t, e, i, "px")), a = t.getCTM && Oi(t), m && (vn[e] || ~e.indexOf("adius")) ? w(l / (a ? t.getBBox()[u ? "width" : "height"] : t[h]) * 100) : (d[u ? "width" : "height"] = 100 + (f ? c : n), s = ~e.indexOf("adius") || "em" === n && t.appendChild && !p ? t : t.parentNode, a && (s = (t.ownerSVGElement || {}).parentNode), s && s !== qi && s.appendChild || (s = qi.body), (o = s._gsap) && m && o.width && u && o.time === Te.time ? w(l / o.width * 100) : (!m && "%" !== c || (d.position = Ti(t, "position")), s === t && (d.position = "static"), s.appendChild(Gi), r = Gi[h], s.removeChild(Gi), d.position = "absolute", u && m && ((o = v(s)).time = Te.time, o.width = s[h]), w(f ? r * l / 100 : r && l ? 100 / r * l : 0))))
    }

    function Ii(t, e, i, n) {
        var r;
        return Vi || Ci(), e in Tn && "transform" !== e && ~(e = Tn[e]).indexOf(",") && (e = e.split(",")[0]), vn[e] && "transform" !== e ? (r = zn(t, n), r = "transformOrigin" !== e ? r[e] : Ln(Ti(t, Sn)) + " " + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !n && !~(r + "").indexOf("calc(") || (r = kn[e] && kn[e](t, e, i) || Ti(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").indexOf(" ") ? Ai(t, e, r, i) + i : r
    }

    function zi(t, e, i, n) {
        if (!i || "none" === i) {
            var r = Pn(e, t, 1), s = r && Ti(t, r, 1);
            s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = Ti(t, "borderTopColor"))
        }
        var o, a, l, c, d, u, p, h, f, m, g, v, y = new si(this._pt, t.style, e, 0, 1, ti), b = 0, w = 0;
        if (y.b = i, y.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = Ti(t, e) || n, t.style[e] = i), lt(o = [i, n]), n = o[1], l = (i = o[0]).match(Jt) || [], (n.match(Jt) || []).length) {
            for (; a = Jt.exec(n);) p = a[0], f = n.substring(b, a.index), d ? d = (d + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (d = 1), p !== (u = l[w++] || "") && (c = parseFloat(u) || 0, g = u.substr((c + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), h = parseFloat(p), m = p.substr((h + "").length), b = Jt.lastIndex - m.length, m || (m = m || Ft.units[e] || g, b === n.length && (n += m, y.e += m)), g !== m && (c = Ai(t, e, u, m) || 0), y._pt = {
                _next: y._pt,
                p: f || 1 === w ? f : ",",
                s: c,
                c: v ? v * h : h - c,
                m: d && d < 4 ? Math.round : 0
            });
            y.c = b < n.length ? n.substring(b, n.length) : ""
        } else y.r = "display" === e && "none" === n ? gi : mi;
        return ee.test(n) && (y.e = 0), this._pt = y
    }

    function Li(t) {
        var e = t.split(" "), i = e[0], n = e[1] || "50%";
        return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (t = i, i = n, n = t), e[0] = Dn[i] || i, e[1] = Dn[n] || n, e.join(" ")
    }

    function $i(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, r, s = e.t, o = s.style, a = e.u, l = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1; else for (r = (a = a.split(",")).length; -1 < --r;) i = a[r], vn[i] && (n = 1, i = "transformOrigin" === i ? Sn : Cn), Di(s, i);
            n && (Di(s, Cn), l && (l.svg && s.removeAttribute("transform"), zn(s, 1), l.uncache = 1))
        }
    }

    function ji(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Ni(t) {
        var e = Ti(t, Cn);
        return ji(e) ? An : e.substr(7).match(Qt).map(w)
    }

    function Fi(t, e) {
        var i, n, r, s, o = t._gsap || v(t), a = t.style, l = Ni(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? An : l : (l !== An || t.offsetParent || t === Xi || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, Xi.appendChild(t)), l = Ni(t), r ? a.display = r : Di(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Xi.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }

    function Ri(t, e, i, n, r, s) {
        var o, a, l, c = t._gsap, d = r || Fi(t, !0), u = c.xOrigin || 0, p = c.yOrigin || 0, h = c.xOffset || 0,
            f = c.yOffset || 0, m = d[0], g = d[1], v = d[2], y = d[3], b = d[4], w = d[5], _ = e.split(" "),
            x = parseFloat(_[0]) || 0, E = parseFloat(_[1]) || 0;
        i ? d !== An && (a = m * y - g * v) && (l = x * (-g / a) + E * (m / a) - (m * w - g * b) / a, x = x * (y / a) + E * (-v / a) + (v * w - y * b) / a, E = l) : (x = (o = Pi(t)).x + (~_[0].indexOf("%") ? x / 100 * o.width : x), E = o.y + (~(_[1] || _[0]).indexOf("%") ? E / 100 * o.height : E)), n || !1 !== n && c.smooth ? (b = x - u, w = E - p, c.xOffset = h + (b * m + w * v) - b, c.yOffset = f + (b * g + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = E, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[Sn] = "0px 0px", s && (ki(s, c, "xOrigin", u, x), ki(s, c, "yOrigin", p, E), ki(s, c, "xOffset", h, c.xOffset), ki(s, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + E)
    }

    function Bi(t, e, i) {
        var n = V(e);
        return w(parseFloat(e) + parseFloat(Ai(t, "x", i + "px", n))) + n
    }

    function Hi(t, e, i, r, s, o) {
        var a, l, c = 360, d = n(s), u = parseFloat(s) * (d && ~s.indexOf("rad") ? yn : 1), p = o ? u * o : u - r,
            h = r + p + "deg";
        return d && ("short" === (a = s.split("_")[1]) && (p %= c) != p % 180 && (p += p < 0 ? c : -c), "cw" === a && p < 0 ? p = (p + 36e9) % c - ~~(p / c) * c : "ccw" === a && 0 < p && (p = (p - 36e9) % c - ~~(p / c) * c)), t._pt = l = new si(t._pt, e, i, r, p, pi), l.e = h, l.u = "deg", t._props.push(i), l
    }

    function Wi(t, e, i) {
        var n, r, s, o, a, l, c, d = Ui.style, u = i._gsap;
        for (r in d.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", d[Cn] = e, qi.body.appendChild(Ui), n = zn(Ui, 1), vn) (s = u[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = V(s) !== (c = V(o)) ? Ai(i, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new si(t._pt, u, r, a, l - a, ui), t._pt.u = c || 0, t._props.push(r));
        qi.body.removeChild(Ui)
    }

    qe.version = je.version = di.version = "3.5.1", bt = 1, c() && Ce();
    var Yi, qi, Xi, Vi, Gi, Ui, Zi, Ki, Qi = Se.Power0, Ji = Se.Power1, tn = Se.Power2, en = Se.Power3, nn = Se.Power4,
        rn = Se.Linear, sn = Se.Quad, on = Se.Cubic, an = Se.Quart, ln = Se.Quint, cn = Se.Strong, dn = Se.Elastic,
        un = Se.Back, pn = Se.SteppedEase, hn = Se.Bounce, fn = Se.Sine, mn = Se.Expo, gn = Se.Circ, vn = {},
        yn = 180 / Math.PI, bn = Math.PI / 180, wn = Math.atan2, _n = /([A-Z])/g,
        xn = /(?:left|right|width|margin|padding|x)/i, En = /[\s,\(]\S/,
        Tn = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, Cn = "transform",
        Sn = Cn + "Origin", Mn = "O,Moz,ms,Ms,Webkit".split(","), Pn = function (t, e, i) {
            var n = (e || Gi).style, r = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Mn[r] + t in n);) ;
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? Mn[r] : "") + t
        }, On = {deg: 1, rad: 1, turn: 1}, Dn = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"},
        kn = {
            clearProps: function (t, e, i, n, r) {
                if ("isFromStart" !== r.data) {
                    var s = t._pt = new si(t._pt, e, i, 0, 0, $i);
                    return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
                }
            }
        }, An = [1, 0, 0, 1, 0, 0], In = {}, zn = function (t, e) {
            var i = t._gsap || new ze(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n, r, s, o, a, l, c, d, u, p, h, f, m, g, v, y, b, _, x, E, T, C, S, M, P, O, D, k, A, I, z, L, $ = t.style,
                j = i.scaleX < 0, N = "deg", F = Ti(t, Sn) || "0";
            return n = r = s = l = c = d = u = p = h = 0, o = a = 1, i.svg = !(!t.getCTM || !Oi(t)), g = Fi(t, i.svg), i.svg && (M = !i.uncache && t.getAttribute("data-svg-origin"), Ri(t, M || F, !!M || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== An && (_ = g[0], x = g[1], E = g[2], T = g[3], n = C = g[4], r = S = g[5], 6 === g.length ? (o = Math.sqrt(_ * _ + x * x), a = Math.sqrt(T * T + E * E), l = _ || x ? wn(x, _) * yn : 0, (u = E || T ? wn(E, T) * yn + l : 0) && (a *= Math.cos(u * bn)), i.svg && (n -= f - (f * _ + m * E), r -= m - (f * x + m * T))) : (L = g[6], I = g[7], D = g[8], k = g[9], A = g[10], z = g[11], n = g[12], r = g[13], s = g[14], c = (v = wn(L, A)) * yn, v && (M = C * (y = Math.cos(-v)) + D * (b = Math.sin(-v)), P = S * y + k * b, O = L * y + A * b, D = C * -b + D * y, k = S * -b + k * y, A = L * -b + A * y, z = I * -b + z * y, C = M, S = P, L = O), d = (v = wn(-E, A)) * yn, v && (y = Math.cos(-v), z = T * (b = Math.sin(-v)) + z * y, _ = M = _ * y - D * b, x = P = x * y - k * b, E = O = E * y - A * b), l = (v = wn(x, _)) * yn, v && (M = _ * (y = Math.cos(v)) + x * (b = Math.sin(v)), P = C * y + S * b, x = x * y - _ * b, S = S * y - C * b, _ = M, C = P), c && 359.9 < Math.abs(c) + Math.abs(l) && (c = l = 0, d = 180 - d), o = w(Math.sqrt(_ * _ + x * x + E * E)), a = w(Math.sqrt(S * S + L * L)), v = wn(C, S), u = 2e-4 < Math.abs(v) ? v * yn : 0, h = z ? 1 / (z < 0 ? -z : z) : 0), i.svg && (M = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !ji(Ti(t, Cn)), M && t.setAttribute("transform", M))), 90 < Math.abs(u) && Math.abs(u) < 270 && (j ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.y = ((i.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", i.z = s + "px", i.scaleX = w(o), i.scaleY = w(a), i.rotation = w(l) + N, i.rotationX = w(c) + N, i.rotationY = w(d) + N, i.skewX = u + N, i.skewY = p + N, i.transformPerspective = h + "px", (i.zOrigin = parseFloat(F.split(" ")[2]) || 0) && ($[Sn] = Ln(F)), i.xOffset = i.yOffset = 0, i.force3D = Ft.force3D, i.renderTransform = i.svg ? Bn : Ki ? Rn : $n, i.uncache = 0, i
        }, Ln = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, $n = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rn(t, e)
        }, jn = "0deg", Nn = "0px", Fn = ") ", Rn = function (t, e) {
            var i = e || this, n = i.xPercent, r = i.yPercent, s = i.x, o = i.y, a = i.z, l = i.rotation, c = i.rotationY,
                d = i.rotationX, u = i.skewX, p = i.skewY, h = i.scaleX, f = i.scaleY, m = i.transformPerspective,
                g = i.force3D, v = i.target, y = i.zOrigin, b = "", w = "auto" === g && t && 1 !== t || !0 === g;
            if (y && (d !== jn || c !== jn)) {
                var _, x = parseFloat(c) * bn, E = Math.sin(x), T = Math.cos(x);
                x = parseFloat(d) * bn, s = Bi(v, s, E * (_ = Math.cos(x)) * -y), o = Bi(v, o, -Math.sin(x) * -y), a = Bi(v, a, T * _ * -y + y)
            }
            m !== Nn && (b += "perspective(" + m + Fn), (n || r) && (b += "translate(" + n + "%, " + r + "%) "), !w && s === Nn && o === Nn && a === Nn || (b += a !== Nn || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Fn), l !== jn && (b += "rotate(" + l + Fn), c !== jn && (b += "rotateY(" + c + Fn), d !== jn && (b += "rotateX(" + d + Fn), u === jn && p === jn || (b += "skew(" + u + ", " + p + Fn), 1 === h && 1 === f || (b += "scale(" + h + ", " + f + Fn), v.style[Cn] = b || "translate(0, 0)"
        }, Bn = function (t, e) {
            var i, n, r, s, o, a = e || this, l = a.xPercent, c = a.yPercent, d = a.x, u = a.y, p = a.rotation, h = a.skewX,
                f = a.skewY, m = a.scaleX, g = a.scaleY, v = a.target, y = a.xOrigin, b = a.yOrigin, _ = a.xOffset,
                x = a.yOffset, E = a.forceCSS, T = parseFloat(d), C = parseFloat(u);
            p = parseFloat(p), h = parseFloat(h), (f = parseFloat(f)) && (h += f = parseFloat(f), p += f), p || h ? (p *= bn, h *= bn, i = Math.cos(p) * m, n = Math.sin(p) * m, r = Math.sin(p - h) * -g, s = Math.cos(p - h) * g, h && (f *= bn, o = Math.tan(h - f), r *= o = Math.sqrt(1 + o * o), s *= o, f && (o = Math.tan(f), i *= o = Math.sqrt(1 + o * o), n *= o)), i = w(i), n = w(n), r = w(r), s = w(s)) : (i = m, s = g, n = r = 0), (T && !~(d + "").indexOf("px") || C && !~(u + "").indexOf("px")) && (T = Ai(v, "x", d, "px"), C = Ai(v, "y", u, "px")), (y || b || _ || x) && (T = w(T + y - (y * i + b * r) + _), C = w(C + b - (y * n + b * s) + x)), (l || c) && (T = w(T + l / 100 * (o = v.getBBox()).width), C = w(C + c / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + C + ")", v.setAttribute("transform", o), E && (v.style[Cn] = o)
        };
    b("padding,margin,Width,Radius", (function (t, e) {
        var i = "Right", n = "Bottom", r = "Left",
            s = (e < 3 ? ["Top", i, n, r] : ["Top" + r, "Top" + i, n + i, n + r]).map((function (i) {
                return e < 2 ? t + i : "border" + i + t
            }));
        kn[1 < e ? "border" + t : t] = function (t, e, i, n, r) {
            var o, a;
            if (arguments.length < 4) return o = s.map((function (e) {
                return Ii(t, e, i)
            })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "), a = {}, s.forEach((function (t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            })), t.init(e, a, r)
        }
    }));
    var Hn, Wn, Yn = {
        name: "css", register: Ci, targetTest: function (t) {
            return t.style && t.nodeType
        }, init: function (t, e, i, n, r) {
            var s, o, a, l, c, d, u, h, f, m, g, v, y, b, w, _ = this._props, x = t.style;
            for (u in Vi || Ci(), e) if ("autoRound" !== u && (o = e[u], !ae[u] || !Ne(u, e, i, n, t, r))) if (c = typeof o, d = kn[u], "function" === c && (c = typeof (o = o.call(i, n, t, r))), "string" === c && ~o.indexOf("random(") && (o = et(o)), d) d(this, t, u, o, i) && (w = 1); else if ("--" === u.substr(0, 2)) this.add(x, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", o + "", n, r, 0, 0, u); else if ("undefined" !== c) {
                if (s = Ii(t, u), l = parseFloat(s), (m = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), u in Tn && ("autoAlpha" === u && (1 === l && "hidden" === Ii(t, "visibility") && a && (l = 0), ki(this, x, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = Tn[u]).indexOf(",") && (u = u.split(",")[0])), g = u in vn) if (v || ((y = t._gsap).renderTransform || zn(t), b = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new si(this._pt, x, Cn, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === u) this._pt = new si(this._pt, y, "scaleY", y.scaleY, m ? m * a : a - y.scaleY), _.push("scaleY", u), u += "X"; else {
                    if ("transformOrigin" === u) {
                        o = Li(o), y.svg ? Ri(t, o, 0, b, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== y.zOrigin && ki(this, y, "zOrigin", y.zOrigin, f), ki(this, x, u, Ln(s), Ln(o)));
                        continue
                    }
                    if ("svgOrigin" === u) {
                        Ri(t, o, 1, b, 0, this);
                        continue
                    }
                    if (u in In) {
                        Hi(this, y, u, l, o, m);
                        continue
                    }
                    if ("smoothOrigin" === u) {
                        ki(this, y, "smooth", y.smooth, o);
                        continue
                    }
                    if ("force3D" === u) {
                        y[u] = o;
                        continue
                    }
                    if ("transform" === u) {
                        Wi(this, o, t);
                        continue
                    }
                } else u in x || (u = Pn(u) || u);
                if (g || (a || 0 === a) && (l || 0 === l) && !En.test(o) && u in x) a = a || 0, (h = (s + "").substr((l + "").length)) !== (f = V(o) || (u in Ft.units ? Ft.units[u] : h)) && (l = Ai(t, u, s, f)), this._pt = new si(this._pt, g ? y : x, u, l, m ? m * a : a - l, "px" !== f || !1 === e.autoRound || g ? ui : fi), this._pt.u = f || 0, h !== f && (this._pt.b = s, this._pt.r = hi); else if (u in x) zi.call(this, t, u, s, o); else {
                    if (!(u in t)) {
                        p(u, o);
                        continue
                    }
                    this.add(t, u, t[u], o, n, r)
                }
                _.push(u)
            }
            w && ri(this)
        }, get: Ii, aliases: Tn, getSetter: function (t, e, i) {
            var n = Tn[e];
            return n && n.indexOf(",") < 0 && (e = n), e in vn && e !== Sn && (t._gsap.x || Ii(t, "x")) ? i && Zi === i ? "scale" === e ? wi : bi : (Zi = i || {}) && ("scale" === e ? _i : xi) : t.style && !o(t.style[e]) ? vi : ~e.indexOf("-") ? yi : Ke(t, e)
        }, core: {_removeProperty: Di, _getMatrix: Fi}
    };
    di.utils.checkPrefix = Pn, Wn = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Hn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        vn[t] = 1
    })), b(Hn, (function (t) {
        Ft.units[t] = "deg", In[t] = 1
    })), Tn[Wn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Hn, b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        Tn[e[1]] = Wn[e[0]]
    })), b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
        Ft.units[t] = "px"
    })), di.registerPlugin(Yn);
    var qn = di.registerPlugin(Yn) || di, Xn = qn.core.Tween;
    t.Back = un, t.Bounce = hn, t.CSSPlugin = Yn, t.Circ = gn, t.Cubic = on, t.Elastic = dn, t.Expo = mn, t.Linear = rn, t.Power0 = Qi, t.Power1 = Ji, t.Power2 = tn, t.Power3 = en, t.Power4 = nn, t.Quad = sn, t.Quart = an, t.Quint = ln, t.Sine = fn, t.SteppedEase = pn, t.Strong = cn, t.TimelineLite = je, t.TimelineMax = je, t.TweenLite = qe, t.TweenMax = Xn, t.default = qn, t.gsap = qn, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {value: !0}) : delete t.default
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t) {
        return t
    }

    function i() {
        return "undefined" != typeof window
    }

    function n() {
        return z || i() && (z = window.gsap) && z.registerPlugin && z
    }

    function r(t) {
        return !!~R.indexOf(t)
    }

    function s(t, e) {
        return ~ot.indexOf(t) && ot[ot.indexOf(t) + 1][e]
    }

    function o(t, e) {
        var i = e.s, n = e.sc, o = at.indexOf(t), a = n === Dt.sc ? 1 : 2;
        return ~o || (o = at.push(t) - 1), at[o + a] || (at[o + a] = s(t, i) || (r(t) ? n : function (e) {
            return arguments.length ? t[i] = e : t[i]
        }))
    }

    function a(t) {
        return s(t, "getBoundingClientRect") || (r(t) ? function () {
            return Jt.width = $.innerWidth, Jt.height = $.innerHeight, Jt
        } : function () {
            return kt(t)
        })
    }

    function l(t, e) {
        var i = e.s, n = e.d2, o = e.d, l = e.a;
        return (i = "scroll" + n) && (l = s(t, i)) ? l() - a(t)()[o] : r(t) ? Math.max(N[i], F[i]) - ($["inner" + n] || N["client" + n] || F["client" + n]) : t[i] - t["offset" + n]
    }

    function c(t, e) {
        for (var i = 0; i < tt.length; i += 3) e && !~e.indexOf(tt[i + 1]) || t(tt[i], tt[i + 1], tt[i + 2])
    }

    function d(t) {
        return "string" == typeof t
    }

    function u(t) {
        return "function" == typeof t
    }

    function p(t) {
        return "number" == typeof t
    }

    function h(t) {
        return "object" == typeof t
    }

    function f(t) {
        return u(t) && t()
    }

    function m(t, e) {
        return function () {
            var i = f(t), n = f(e);
            return function () {
                f(i), f(n)
            }
        }
    }

    function g(t) {
        return $.getComputedStyle(t)
    }

    function v(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function y(t, e) {
        var i = e.d2;
        return t["offset" + i] || t["client" + i] || 0
    }

    function b(t, e, i, n) {
        return i.split(",").forEach((function (i) {
            return t(e, i, n)
        }))
    }

    function w(t, e, i) {
        return t.addEventListener(e, i, {passive: !0})
    }

    function _(t, e, i) {
        return t.removeEventListener(e, i)
    }

    function x(t, e) {
        if (d(t)) {
            var i = t.indexOf("="), n = ~i ? (t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
            n && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in zt ? zt[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }

    function E(t, e, i, n, o, a, l) {
        var c = o.startColor, d = o.endColor, u = o.fontSize, p = o.indent, h = o.fontWeight,
            f = j.createElement("div"), m = r(i) || "fixed" === s(i, "pinType"), g = -1 !== t.indexOf("scroller"),
            v = m ? F : i, y = -1 !== t.indexOf("start"), b = y ? c : d,
            w = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return w += "position:" + (g && m ? "fixed;" : "absolute;"), !g && m || (w += (n === Dt ? gt : vt) + ":" + (a + parseFloat(p)) + "px;"), l && (w += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), f._isStart = y, f.setAttribute("class", "gsap-marker-" + t), f.style.cssText = w, f.innerText = e || 0 === e ? t + "-" + e : t, v.insertBefore(f, v.children[0]), f._offset = f["offset" + n.op.d2], Lt(f, 0, n, y), f
    }

    function T() {
        return W = W || H(Gt)
    }

    function C() {
        W || (W = H(Gt), dt || Bt("scrollStart"), dt = lt())
    }

    function S() {
        return !G && B.restart(!0)
    }

    function M(t) {
        var e, i = z.ticker.frame, n = [], r = 0;
        if (rt !== i || st) {
            for (Yt(); r < Rt.length; r += 4) (e = $.matchMedia(Rt[r]).matches) !== Rt[r + 3] && ((Rt[r + 3] = e) ? n.push(r) : Yt(1, Rt[r]) || u(Rt[r + 2]) && Rt[r + 2]());
            for (Wt(), r = 0; r < n.length; r++) e = n[r], nt = Rt[e], Rt[e + 2] = Rt[e + 1](t);
            qt(nt = 0, 1), rt = i, Bt("matchMedia")
        }
    }

    function P() {
        return _(ee, "scrollEnd", P) || qt(!0)
    }

    function O(t, e, i, n) {
        if (t.parentNode !== e) {
            for (var r, s = Ut.length, o = e.style, a = t.style; s--;) o[r = Ut[s]] = i[r];
            o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a[vt] = a[gt] = "auto", o.overflow = "visible", o.boxSizing = "border-box", o[yt] = y(t, Ot) + Pt, o[bt] = y(t, Dt) + Pt, o[Tt] = a[Ct] = a.top = a[mt] = "0", Qt(n), a[yt] = a.maxWidth = i[yt], a[bt] = a.maxHeight = i[bt], a[Tt] = i[Tt], t.parentNode.insertBefore(e, t), e.appendChild(t)
        }
    }

    function D(t) {
        for (var e = Zt.length, i = t.style, n = [], r = 0; r < e; r++) n.push(Zt[r], i[Zt[r]]);
        return n.t = t, n
    }

    function k(t, e, i, n, r, s, o, a, l, c, h, f) {
        if (u(t) && (t = t(a)), d(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? x("0" + t.substr(3), i) : 0)), p(t)) o && Lt(o, i, n, !0); else {
            u(e) && (e = e(a));
            var m, v, y, b = Y(e)[0] || F, w = kt(b) || {}, _ = t.split(" ");
            w && (w.left || w.top) || "none" !== g(b).display || (y = b.style.display, b.style.display = "block", w = kt(b), y ? b.style.display = y : b.style.removeProperty("display")), m = x(_[0], w[n.d]), v = x(_[1] || "0", i), t = w[n.p] - l[n.p] - c + m + r - v, o && Lt(o, v, n, i - v < 20 || o._isStart && 20 < v), i -= i - v
        }
        if (s) {
            var E = t + i, T = s._isStart;
            f = "scroll" + n.d2, Lt(s, E, n, T && 20 < E || !T && (h ? Math.max(F[f], N[f]) : s.parentNode[f]) <= E + 1), h && (l = kt(o), h && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Pt))
        }
        return Math.round(t)
    }

    function A(t, e, i, n) {
        if (t.parentNode !== e) {
            var r, s, o = t.style;
            if (e === F) {
                for (r in t._stOrig = o.cssText, s = g(t)) +r || te.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                o.top = i, o.left = n
            } else o.cssText = t._stOrig;
            z.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    }

    function I(t, e) {
        var i, n, r = o(t, e), s = "_scroll" + e.p2;
        return t[s] = r, function e(o, a, l, c, d) {
            var u = e.tween, p = a.onComplete;
            return u && u.kill(), i = Math.round(l), a[s] = o, (a.modifiers = {})[s] = function (t) {
                return (t = Math.round(r())) !== i && t !== n ? (u.kill(), e.tween = 0) : t = l + c * u.ratio + d * u.ratio * u.ratio, n = i, i = Math.round(t)
            }, a.onComplete = function () {
                e.tween = 0, p && p.call(u)
            }, u = e.tween = z.to(t, a)
        }
    }

    var z, L, $, j, N, F, R, B, H, W, Y, q, X, V, G, U, Z, K, Q, J, tt, et, it, nt, rt, st = 1, ot = [], at = [],
        lt = Date.now, ct = lt(), dt = 0, ut = 1, pt = Math.abs, ht = "scrollLeft", ft = "scrollTop", mt = "left",
        gt = "right", vt = "bottom", yt = "width", bt = "height", wt = "Right", _t = "Left", xt = "Top", Et = "Bottom",
        Tt = "padding", Ct = "margin", St = "Width", Mt = "Height", Pt = "px", Ot = {
            s: ht, p: mt, p2: _t, os: gt, os2: wt, d: yt, d2: St, a: "x", sc: function (t) {
                return arguments.length ? $.scrollTo(t, Dt.sc()) : $.pageXOffset || j[ht] || N[ht] || F[ht] || 0
            }
        }, Dt = {
            s: ft, p: "top", p2: xt, os: vt, os2: Et, d: bt, d2: Mt, a: "y", op: Ot, sc: function (t) {
                return arguments.length ? $.scrollTo(Ot.sc(), t) : $.pageYOffset || j[ft] || N[ft] || F[ft] || 0
            }
        }, kt = function (t, e) {
            var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== g(t)[Z] && z.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), n = t.getBoundingClientRect();
            return i && i.progress(0).kill(), n
        }, At = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
        It = {toggleActions: "play", anticipatePin: 0}, zt = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
        Lt = function (t, e, i, n) {
            var r = {display: "block"}, s = i[n ? "os2" : "p2"], o = i[n ? "p2" : "os2"];
            t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? 1 : 0, r["border" + s + St] = 1, r["border" + o + St] = 0, r[i.p] = e, z.set(t, r)
        }, $t = [], jt = {}, Nt = {}, Ft = [], Rt = [], Bt = function (t) {
            return Nt[t] && Nt[t].map((function (t) {
                return t()
            })) || Ft
        }, Ht = [], Wt = function (t) {
            for (var e = 0; e < Ht.length; e += 4) t && Ht[e + 3] !== t || (Ht[e].style.cssText = Ht[e + 1], Ht[e + 2].uncache = 1)
        }, Yt = function (t, e) {
            var i;
            for (K = 0; K < $t.length; K++) i = $t[K], e && i.media !== e || (t ? i.kill(1) : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
            Wt(e), e || Bt("revert")
        }, qt = function (t, e) {
            if (!dt || t) {
                var i = Bt("refreshInit");
                for (et && ee.sort(), e || Yt(), K = 0; K < $t.length; K++) $t[K].refresh();
                for (i.forEach((function (t) {
                    return t && t.render && t.render(-1)
                })), K = $t.length; K--;) $t[K].scroll.rec = 0;
                B.pause(), Bt("refresh")
            } else w(ee, "scrollEnd", P)
        }, Xt = 0, Vt = 1, Gt = function () {
            var t = $t.length, e = lt(), i = 50 <= e - ct, n = t && $t[0].scroll();
            if (Vt = n < Xt ? -1 : 1, Xt = n, i && (dt && !U && 200 < e - dt && (dt = 0, Bt("scrollEnd")), X = ct, ct = e), Vt < 0) {
                for (K = t; K--;) $t[K] && $t[K].update(0, i);
                Vt = 1
            } else for (K = 0; K < t; K++) $t[K] && $t[K].update(0, i);
            W = 0
        }, Ut = [mt, "top", vt, gt, Ct + Et, Ct + wt, Ct + xt, Ct + _t, "display", "flexShrink", "float"],
        Zt = Ut.concat([yt, bt, "boxSizing", "max" + St, "max" + Mt, "position", Ct, Tt, Tt + xt, Tt + wt, Tt + Et, Tt + _t]),
        Kt = /([A-Z])/g, Qt = function (t) {
            if (t) for (var e, i, n = t.t.style, r = t.length, s = 0; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(Kt, "-$1").toLowerCase())
        }, Jt = {left: 0, top: 0}, te = /(?:webkit|moz|length|cssText)/i;
    Ot.op = Dt;
    var ee = (ie.prototype.init = function (t, i) {
        if (this.progress = 0, this.vars && this.kill(1), ut) {
            var n, c, f, m, b, T, M, L, R, B, H, W, V, Z, Q, J, tt, rt, at, ct, ht, ft, mt, gt, vt, Mt, zt, Lt, Nt, Ft,
                Rt, Bt, Ht, Wt, Yt, qt, Xt,
                Gt = (t = v(d(t) || p(t) || t.nodeType ? {trigger: t} : t, It)).horizontal ? Ot : Dt, Ut = t.onUpdate,
                Zt = t.toggleClass, Kt = t.id, te = t.onToggle, ee = t.onRefresh, ne = t.scrub, re = t.trigger,
                se = t.pin, oe = t.pinSpacing, ae = t.invalidateOnRefresh, le = t.anticipatePin, ce = t.onScrubComplete,
                de = t.onSnapComplete, ue = t.once, pe = t.snap, he = t.pinReparent, fe = !ne && 0 !== ne,
                me = Y(t.scroller || $)[0], ge = z.core.getCache(me), ve = r(me),
                ye = "pinType" in t ? "fixed" === t.pinType : ve || "fixed" === s(me, "pinType"),
                be = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], we = fe && t.toggleActions.split(" "),
                _e = "markers" in t ? t.markers : It.markers,
                xe = ve ? 0 : parseFloat(g(me)["border" + Gt.p2 + St]) || 0, Ee = this,
                Te = t.onRefreshInit && function () {
                    return t.onRefreshInit(Ee)
                }, Ce = function (t, e, i) {
                    var n = i.d, r = i.d2, o = i.a;
                    return (o = s(t, "getBoundingClientRect")) ? function () {
                        return o()[n]
                    } : function () {
                        return (e ? $["inner" + r] : t["client" + r]) || 0
                    }
                }(me, ve, Gt), Se = function (t, e) {
                    return !e || ~ot.indexOf(t) ? a(t) : function () {
                        return Jt
                    }
                }(me, ve);
            Ee.media = nt, le *= 45, $t.push(Ee), Ee.scroller = me, Ee.scroll = o(me, Gt), b = Ee.scroll(), Ee.vars = t, i = i || t.animation, "refreshPriority" in t && (et = 1), ge.tweenScroll = ge.tweenScroll || {
                top: I(me, Dt),
                left: I(me, Ot)
            }, Ee.tweenTo = n = ge.tweenScroll[Gt.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== t.immediateRender && i.render(0, !0, !0), Ee.animation = i.pause(), i.scrollTrigger = Ee, (Bt = p(ne) && ne) && (Rt = z.to(i, {
                ease: "power3",
                duration: Bt,
                onComplete: function () {
                    return ce && ce(Ee)
                }
            })), Nt = 0, Kt = Kt || i.vars.id), pe && (h(pe) || (pe = {snapTo: pe}), z.set(ve ? [F, N] : me, {scrollBehavior: "auto"}), f = u(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? function (t) {
                return function (e) {
                    var i, n = [], r = t.labels, s = t.duration();
                    for (i in r) n.push(r[i] / s);
                    return z.utils.snap(n, e)
                }
            }(i) : z.utils.snap(pe.snapTo), Ht = h(Ht = pe.duration || {
                min: .1,
                max: 2
            }) ? q(Ht.min, Ht.max) : q(Ht, Ht), Wt = z.delayedCall(pe.delay || Bt / 2 || .1, (function () {
                if (Math.abs(Ee.getVelocity()) < 10 && !U) {
                    var t = i && !fe ? i.totalProgress() : Ee.progress, e = (t - Ft) / (lt() - X) * 1e3 || 0,
                        r = pt(e / 2) * e / .185, s = t + r, o = q(0, 1, f(s, Ee)), a = Ee.scroll(),
                        l = Math.round(M + o * Z), c = n.tween;
                    if (a <= L && M <= a && l !== a) {
                        if (c && !c._initted && c.data <= Math.abs(l - a)) return;
                        n(l, {
                            duration: Ht(pt(.185 * Math.max(pt(s - t), pt(o - t)) / e / .05 || 0)),
                            ease: pe.ease || "power3",
                            data: Math.abs(l - a),
                            onComplete: function () {
                                Nt = Ft = i && !fe ? i.totalProgress() : Ee.progress, de && de(Ee)
                            }
                        }, a, r * Z, l - a - r * Z)
                    }
                } else Ee.isActive && Wt.restart(!0)
            })).pause()), Kt && (jt[Kt] = Ee), re = Ee.trigger = Y(re || se)[0], se = !0 === se ? re : Y(se)[0], d(Zt) && (Zt = {
                targets: re,
                className: Zt
            }), se && (!1 === oe || oe === Ct || (oe = !(!oe && "flex" === g(se.parentNode).display) && Tt), Ee.pin = se, !1 !== t.force3D && z.set(se, {force3D: !0}), (c = z.core.getCache(se)).spacer ? Q = c.pinState : (c.spacer = rt = j.createElement("div"), rt.setAttribute("class", "pin-spacer" + (Kt ? " pin-spacer-" + Kt : "")), c.pinState = Q = D(se)), Ee.spacer = rt = c.spacer, Lt = g(se), gt = Lt[oe + Gt.os2], ct = z.getProperty(se), ht = z.quickSetter(se, Gt.a, Pt), O(se, rt, Lt), tt = D(se)), _e && (V = h(_e) ? v(_e, At) : At, H = E("scroller-start", Kt, me, Gt, V, 0), W = E("scroller-end", Kt, me, Gt, V, 0, H), at = H["offset" + Gt.op.d2], R = E("start", Kt, me, Gt, V, at), B = E("end", Kt, me, Gt, V, at), ye || (function (t) {
                t.style.position = "absolute" === g(t).position ? "absolute" : "relative"
            }(me), z.set([H, W], {force3D: !0}), Mt = z.quickSetter(H, Gt.a, Pt), zt = z.quickSetter(W, Gt.a, Pt))), Ee.revert = function (t) {
                var e = !1 !== t || !Ee.enabled, n = G;
                e !== m && (e && (qt = Math.max(Ee.scroll(), Ee.scroll.rec || 0), Yt = Ee.progress, Xt = i && i.progress()), R && [R, B, H, W].forEach((function (t) {
                    return t.style.display = e ? "none" : "block"
                })), e && (G = 1), Ee.update(e), G = n, se && (e ? function (t, e, i) {
                    if (Qt(i), t.parentNode === e) {
                        var n = e.parentNode;
                        n && (n.insertBefore(t, e), n.removeChild(e))
                    }
                }(se, rt, Q) : he && Ee.isActive || O(se, rt, g(se), vt)), m = e)
            }, Ee.refresh = function (e) {
                if (!G && Ee.enabled) if (se && e && dt) w(ie, "scrollEnd", P); else {
                    G = 1, Rt && Rt.kill(), ae && i && i.progress(0).invalidate(), m || Ee.revert();
                    for (var n, r, s, a, c, p, h, f, v = Ce(), _ = Se(), E = l(me, Gt), C = 0, S = 0, A = t.end, I = t.endTrigger || re, $ = t.start || (0 === t.start ? 0 : se || !re ? "0 0" : "0 100%"), j = re && Math.max(0, $t.indexOf(Ee)) || 0, N = j; N--;) !(h = $t[N].pin) || h !== re && h !== se || $t[N].revert();
                    for (M = k($, re, v, Gt, Ee.scroll(), R, H, Ee, _, xe, ye, E) || (se ? -.001 : 0), u(A) && (A = A(Ee)), d(A) && !A.indexOf("+=") && (~A.indexOf(" ") ? A = (d($) ? $.split(" ")[0] : "") + A : (C = x(A.substr(2), v), A = d($) ? $ : M + C, I = re)), L = Math.max(M, k(A || (I ? "100% 0" : E), I, v, Gt, Ee.scroll() + C, B, W, Ee, _, xe, ye, E)) || -.001, Z = L - M || (M -= .01) && .001, C = 0, N = j; N--;) (h = (p = $t[N]).pin) && p.start - p._pinPush < M && (n = p.end - p.start, h === re && (C += n), h === se && (S += n));
                    if (M += C, L += C, Ee._pinPush = S, R && C && ((n = {})[Gt.a] = "+=" + C, z.set([R, B], n)), se) n = g(se), a = Gt === Dt, s = Ee.scroll(), ft = parseFloat(ct(Gt.a)) + S, !E && 1 < L && ((ve ? F : me).style["overflow-" + Gt.a] = "scroll"), O(se, rt, n), tt = D(se), r = kt(se, !0), f = ye && o(me, a ? Ot : Dt)(), oe && ((vt = [oe + Gt.os2, Z + S + Pt]).t = rt, (N = oe === Tt ? y(se, Gt) + Z + S : 0) && vt.push(Gt.d, N + Pt), Qt(vt), ye && Ee.scroll(qt)), ye && ((c = {
                        top: r.top + (a ? s - M : f) + Pt,
                        left: r.left + (a ? f : s - M) + Pt,
                        boxSizing: "border-box",
                        position: "fixed"
                    })[yt] = c.maxWidth = Math.ceil(r.width) + Pt, c[bt] = c.maxHeight = Math.ceil(r.height) + Pt, c[Ct] = c[Ct + xt] = c[Ct + wt] = c[Ct + Et] = c[Ct + _t] = "0", c[Tt] = n[Tt], c[Tt + xt] = n[Tt + xt], c[Tt + wt] = n[Tt + wt], c[Tt + Et] = n[Tt + Et], c[Tt + _t] = n[Tt + _t], J = function (t, e, i) {
                        for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
                        return r.t = t.t, r
                    }(Q, c, he)), i ? (i.progress(1, !0), mt = ct(Gt.a) - ft + Z + S, Z !== mt && J.splice(J.length - 2, 2), i.progress(0, !0)) : mt = Z; else if (re && Ee.scroll()) for (r = re.parentNode; r && r !== F;) r._pinOffset && (M -= r._pinOffset, L -= r._pinOffset), r = r.parentNode;
                    for (N = 0; N < j; N++) !(p = $t[N].pin) || p !== re && p !== se || $t[N].revert(!1);
                    Ee.start = M, Ee.end = L, (b = T = Ee.scroll()) < qt && Ee.scroll(qt), Ee.revert(!1), G = 0, Xt && fe && i.progress(Xt, !0), Yt !== Ee.progress && (Rt && i.totalProgress(Yt, !0), Ee.progress = Yt, Ee.update()), se && oe && (rt._pinOffset = Math.round(Ee.progress * mt)), ee && ee(Ee)
                }
            }, Ee.getVelocity = function () {
                return (Ee.scroll() - T) / (lt() - X) * 1e3 || 0
            }, Ee.update = function (t, e) {
                var r, s, o, a, c, d = Ee.scroll(), u = t ? 0 : (d - M) / Z, p = u < 0 ? 0 : 1 < u ? 1 : u || 0,
                    h = Ee.progress;
                if (e && (T = b, b = d, pe && (Ft = Nt, Nt = i && !fe ? i.totalProgress() : p)), le && !p && se && !G && !st && dt && M < d + (d - T) / (lt() - X) * le && (p = 1e-4), p !== h && Ee.enabled) {
                    if (a = (c = (r = Ee.isActive = !!p && p < 1) != (!!h && h < 1)) || !!p != !!h, Ee.direction = h < p ? 1 : -1, Ee.progress = p, fe || (!Rt || G || st ? i && i.totalProgress(p, !!G) : (Rt.vars.totalProgress = p, Rt.invalidate().restart())), se) if (t && oe && (rt.style[oe + Gt.os2] = gt), ye) {
                        if (a) {
                            if (o = !t && h < p && d < L + 1 && d + 1 >= l(me, Gt), he) if (t || !r && !o) A(se, rt); else {
                                var f = kt(se, !0), m = d - M;
                                A(se, F, f.top + (Gt === Dt ? m : 0) + Pt, f.left + (Gt === Dt ? 0 : m) + Pt)
                            }
                            Qt(r || o ? J : tt), mt !== Z && p < 1 && r || ht(ft + (1 !== p || o ? 0 : mt))
                        }
                    } else ht(ft + mt * p);
                    !pe || n.tween || G || st || Wt.restart(!0), Zt && (c || ue && p && (p < 1 || !it)) && Y(Zt.targets).forEach((function (t) {
                        return t.classList[r || ue ? "add" : "remove"](Zt.className)
                    })), !Ut || fe || t || Ut(Ee), a && !G ? (s = p && !h ? 0 : 1 === p ? 1 : 1 === h ? 2 : 3, fe && (o = !c && "none" !== we[s + 1] && we[s + 1] || we[s], i && ("complete" === o || "reset" === o || o in i) && ("complete" === o ? i.pause().totalProgress(1) : "reset" === o ? i.restart(!0).pause() : i[o]()), Ut && Ut(Ee)), !c && it || (te && c && te(Ee), be[s] && be[s](Ee), ue && (1 === p ? Ee.kill(!1, 1) : be[s] = 0), c || be[s = 1 === p ? 1 : 3] && be[s](Ee))) : fe && Ut && !G && Ut(Ee)
                }
                zt && (Mt(d + (H._isFlipped ? 1 : 0)), zt(d))
            }, Ee.enable = function () {
                Ee.enabled || (Ee.enabled = !0, w(me, "resize", S), w(me, "scroll", C), Te && w(ie, "refreshInit", Te), i && i.add ? z.delayedCall(.01, (function () {
                    return M || L || Ee.refresh()
                })) && (Z = .01) && (M = L = 0) : Ee.refresh())
            }, Ee.disable = function (t, e) {
                if (Ee.enabled && (!1 !== t && Ee.revert(), Ee.enabled = Ee.isActive = !1, e || Rt && Rt.pause(), qt = 0, c && (c.uncache = 1), Te && _(ie, "refreshInit", Te), Wt && (Wt.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !ve)) {
                    for (var i = $t.length; i--;) if ($t[i].scroller === me && $t[i] !== Ee) return;
                    _(me, "resize", S), _(me, "scroll", C)
                }
            }, Ee.kill = function (t, e) {
                Ee.disable(t, e), Kt && delete jt[Kt];
                var n = $t.indexOf(Ee);
                $t.splice(n, 1), n === K && 0 < Vt && K--, i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), R && [R, B, H, W].forEach((function (t) {
                    return t.parentNode.removeChild(t)
                })), c && (c.uncache = 1)
            }, Ee.enable()
        } else this.update = this.refresh = this.kill = e
    }, ie.register = function (t) {
        if (!L && (z = t || n(), i() && window.document && ($ = window, j = document, N = j.documentElement, F = j.body), z && (Y = z.utils.toArray, q = z.utils.clamp, z.core.globals("ScrollTrigger", ie), F))) {
            H = $.requestAnimationFrame || function (t) {
                return setTimeout(t, 16)
            }, w($, "mousewheel", C), R = [$, j, N, F], w(j, "scroll", C);
            var r, s = F.style, o = s.borderTop;
            s.borderTop = "1px solid #000", r = kt(F), Dt.m = Math.round(r.top + Dt.sc()) || 0, Ot.m = Math.round(r.left + Ot.sc()) || 0, o ? s.borderTop = o : s.removeProperty("border-top"), V = setInterval(T, 200), z.delayedCall(.5, (function () {
                return st = 0
            })), w(j, "touchcancel", e), w(F, "touchstart", e), b(w, j, "pointerdown,touchstart,mousedown", (function () {
                return U = 1
            })), b(w, j, "pointerup,touchend,mouseup", (function () {
                return U = 0
            })), Z = z.utils.checkPrefix("transform"), Zt.push(Z), L = lt(), B = z.delayedCall(.2, qt).pause(), tt = [j, "visibilitychange", function () {
                var t = $.innerWidth, e = $.innerHeight;
                j.hidden ? (Q = t, J = e) : Q === t && J === e || S()
            }, j, "DOMContentLoaded", qt, $, "load", function () {
                return dt || qt()
            }, $, "resize", S], c(w)
        }
        return L
    }, ie.defaults = function (t) {
        for (var e in t) It[e] = t[e]
    }, ie.kill = function () {
        ut = 0, $t.slice(0).forEach((function (t) {
            return t.kill(1)
        }))
    }, ie.config = function (t) {
        "limitCallbacks" in t && (it = !!t.limitCallbacks);
        var e = t.syncInterval;
        e && clearInterval(V) || (V = e) && setInterval(T, e), "autoRefreshEvents" in t && (c(_) || c(w, t.autoRefreshEvents || "none"))
    }, ie.scrollerProxy = function (t, e) {
        var i = Y(t)[0];
        r(i) ? ot.unshift($, e, F, e, N, e) : ot.unshift(i, e)
    }, ie.matchMedia = function (t) {
        var e, i, n, r, s;
        for (i in t) n = Rt.indexOf(i), r = t[i], "all" === (nt = i) ? r() : (e = $.matchMedia(i)) && (e.matches && (s = r()), ~n ? (Rt[n + 1] = m(Rt[n + 1], r), Rt[n + 2] = m(Rt[n + 2], s)) : (n = Rt.length, Rt.push(i, r, s), e.addListener ? e.addListener(M) : e.addEventListener("change", M)), Rt[n + 3] = e.matches), nt = 0;
        return Rt
    }, ie.clearMatchMedia = function (t) {
        t || (Rt.length = 0), 0 <= (t = Rt.indexOf(t)) && Rt.splice(t, 4)
    }, ie);

    function ie(t, e) {
        L || ie.register(z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
    }

    ee.version = "3.5.1", ee.saveStyles = function (t) {
        return t ? Y(t).forEach((function (t) {
            var e = Ht.indexOf(t);
            0 <= e && Ht.splice(e, 4), Ht.push(t, t.style.cssText, z.core.getCache(t), nt)
        })) : Ht
    }, ee.revert = function (t, e) {
        return Yt(!t, e)
    }, ee.create = function (t, e) {
        return new ee(t, e)
    }, ee.refresh = function (t) {
        return t ? S() : qt(!0)
    }, ee.update = Gt, ee.maxScroll = function (t, e) {
        return l(t, e ? Ot : Dt)
    }, ee.getScrollFunc = function (t, e) {
        return o(Y(t)[0], e ? Ot : Dt)
    }, ee.getById = function (t) {
        return jt[t]
    }, ee.getAll = function () {
        return $t.slice(0)
    }, ee.isScrolling = function () {
        return !!dt
    }, ee.addEventListener = function (t, e) {
        var i = Nt[t] || (Nt[t] = []);
        ~i.indexOf(e) || i.push(e)
    }, ee.removeEventListener = function (t, e) {
        var i = Nt[t], n = i && i.indexOf(e);
        0 <= n && i.splice(n, 1)
    }, ee.batch = function (t, e) {
        function i(t, e) {
            var i = [], n = [], r = z.delayedCall(o, (function () {
                e(i, n), i = [], n = []
            })).pause();
            return function (t) {
                i.length || r.restart(!0), i.push(t.trigger), n.push(t), a <= i.length && r.progress(1)
            }
        }

        var n, r = [], s = {}, o = e.interval || .016, a = e.batchMax || 1e9;
        for (n in e) s[n] = "on" === n.substr(0, 2) && u(e[n]) && "onRefreshInit" !== n ? i(0, e[n]) : e[n];
        return u(a) && (a = a(), w(ee, "refresh", (function () {
            return a = e.batchMax()
        }))), Y(t).forEach((function (t) {
            var e = {};
            for (n in s) e[n] = s[n];
            e.trigger = t, r.push(ee.create(e))
        })), r
    }, ee.sort = function (t) {
        return $t.sort(t || function (t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, n() && z.registerPlugin(ee), t.ScrollTrigger = ee, t.default = ee, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {value: !0}) : delete t.default
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).PhotoSwipe = e()
}(this, (function () {
    "use strict";

    function t(t, e, i) {
        const n = document.createElement(e || "div");
        return t && (n.className = t), i && i.appendChild(n), n
    }

    function e(t, e) {
        return t.x = e.x, t.y = e.y, void 0 !== e.id && (t.id = e.id), t
    }

    function i(t) {
        t.x = Math.round(t.x), t.y = Math.round(t.y)
    }

    function n(t, e) {
        const i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
        return Math.sqrt(i * i + n * n)
    }

    function r(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function s(t, e, i) {
        return Math.min(Math.max(t, e), i)
    }

    function o(t, e, i) {
        let n = "translate3d(" + t + "px," + (e || 0) + "px,0)";
        return void 0 !== i && (n += " scale3d(" + i + "," + i + ",1)"), n
    }

    function a(t, e, i, n) {
        t.style.transform = o(e, i, n)
    }

    function l(t, e, i, n) {
        t.style.transition = e ? e + " " + i + "ms " + (n || "cubic-bezier(.4,0,.22,1)") : "none"
    }

    function c(t, e, i) {
        t.style.width = "number" == typeof e ? e + "px" : e, t.style.height = "number" == typeof i ? i + "px" : i
    }

    const d = "loading", u = "loaded", p = "error";

    function h() {
        return !(!navigator.vendor || !navigator.vendor.match(/apple/i))
    }

    let f = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: () => {
                f = !0
            }
        }))
    } catch (t) {
    }

    class m {
        constructor() {
            this.t = []
        }

        add(t, e, i, n) {
            this.i(t, e, i, n)
        }

        remove(t, e, i, n) {
            this.i(t, e, i, n, !0)
        }

        removeAll() {
            this.t.forEach((t => {
                this.i(t.target, t.type, t.listener, t.passive, !0, !0)
            })), this.t = []
        }

        i(t, e, i, n, r, s) {
            if (!t) return;
            const o = r ? "removeEventListener" : "addEventListener";
            e.split(" ").forEach((e => {
                if (e) {
                    s || (r ? this.t = this.t.filter((n => n.type !== e || n.listener !== i || n.target !== t)) : this.t.push({
                        target: t,
                        type: e,
                        listener: i,
                        passive: n
                    }));
                    const a = !!f && {passive: n || !1};
                    t[o](e, i, a)
                }
            }))
        }
    }

    function g(t, e) {
        if (t.getViewportSizeFn) {
            const i = t.getViewportSizeFn(t, e);
            if (i) return i
        }
        return {x: document.documentElement.clientWidth, y: window.innerHeight}
    }

    function v(t, e, i, n, r) {
        let s;
        if (e.paddingFn) s = e.paddingFn(i, n, r)[t]; else if (e.padding) s = e.padding[t]; else {
            const i = "padding" + t[0].toUpperCase() + t.slice(1);
            e[i] && (s = e[i])
        }
        return s || 0
    }

    function y(t, e, i, n) {
        return {
            x: e.x - v("left", t, e, i, n) - v("right", t, e, i, n),
            y: e.y - v("top", t, e, i, n) - v("bottom", t, e, i, n)
        }
    }

    class b {
        constructor(t) {
            this.slide = t, this.currZoomLevel = 1, this.center = {}, this.max = {}, this.min = {}, this.reset()
        }

        update(t) {
            this.currZoomLevel = t, this.slide.width ? (this.o("x"), this.o("y"), this.slide.pswp.dispatch("calcBounds", {slide: this.slide})) : this.reset()
        }

        o(t) {
            const {pswp: e} = this.slide, i = this.slide["x" === t ? "width" : "height"] * this.currZoomLevel,
                n = v("x" === t ? "left" : "top", e.options, e.viewportSize, this.slide.data, this.slide.index),
                r = this.slide.panAreaSize[t];
            this.center[t] = Math.round((r - i) / 2) + n, this.max[t] = i > r ? Math.round(r - i) + n : this.center[t], this.min[t] = i > r ? n : this.center[t]
        }

        reset() {
            this.center.x = 0, this.center.y = 0, this.max.x = 0, this.max.y = 0, this.min.x = 0, this.min.y = 0
        }

        correctPan(t, e) {
            return s(e, this.max[t], this.min[t])
        }
    }

    class w {
        constructor(t, e, i, n) {
            this.pswp = n, this.options = t, this.itemData = e, this.index = i
        }

        update(t, e, i) {
            this.elementSize = {x: t, y: e}, this.panAreaSize = i;
            const n = this.panAreaSize.x / this.elementSize.x, r = this.panAreaSize.y / this.elementSize.y;
            this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this.l(), this.secondary = this.p(), this.max = Math.max(this.initial, this.secondary, this.u()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
                zoomLevels: this,
                slideData: this.itemData
            })
        }

        m(t) {
            const e = t + "ZoomLevel", i = this.options[e];
            if (i) return "function" == typeof i ? i(this) : "fill" === i ? this.fill : "fit" === i ? this.fit : Number(i)
        }

        p() {
            let t = this.m("secondary");
            return t || (t = Math.min(1, 3 * this.fit), t * this.elementSize.x > 4e3 && (t = 4e3 / this.elementSize.x), t)
        }

        l() {
            return this.m("initial") || this.fit
        }

        u() {
            return this.m("max") || Math.max(1, 4 * this.fit)
        }
    }

    class _ {
        constructor(e, i, n) {
            this.data = e, this.index = i, this.pswp = n, this.isActive = i === n.currIndex, this.currentResolution = 0, this.panAreaSize = {}, this.isFirstSlide = this.isActive && !n.opener.isOpen, this.zoomLevels = new w(n.options, e, i, n), this.pswp.dispatch("gettingData", {
                slide: this,
                data: this.data,
                index: i
            }), this.pan = {
                x: 0,
                y: 0
            }, this.content = this.pswp.contentLoader.getContentBySlide(this), this.container = t("pswp__zoom-wrap"), this.currZoomLevel = 1, this.width = this.content.width, this.height = this.content.height, this.bounds = new b(this), this.prevDisplayedWidth = -1, this.prevDisplayedHeight = -1, this.pswp.dispatch("slideInit", {slide: this})
        }

        setIsActive(t) {
            t && !this.isActive ? this.activate() : !t && this.isActive && this.deactivate()
        }

        append(t) {
            this.holderElement = t, this.container.style.transformOrigin = "0 0", this.data && (this.calculateSize(), this.load(), this.updateContentSize(), this.appendHeavy(), this.holderElement.appendChild(this.container), this.zoomAndPanToInitial(), this.pswp.dispatch("firstZoomPan", {slide: this}), this.applyCurrentZoomPan(), this.pswp.dispatch("afterSetContent", {slide: this}), this.isActive && this.activate())
        }

        load() {
            this.content.load(), this.pswp.dispatch("slideLoad", {slide: this})
        }

        appendHeavy() {
            const {pswp: t} = this;
            !this.heavyAppended && t.opener.isOpen && !t.mainScroll.isShifted() && (this.isActive, 1) && (this.pswp.dispatch("appendHeavy", {slide: this}).defaultPrevented || (this.heavyAppended = !0, this.content.append(), this.pswp.dispatch("appendHeavyContent", {slide: this})))
        }

        activate() {
            this.isActive = !0, this.appendHeavy(), this.content.activate(), this.pswp.dispatch("slideActivate", {slide: this})
        }

        deactivate() {
            this.isActive = !1, this.content.deactivate(), this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize(), this.pswp.dispatch("slideDeactivate", {slide: this})
        }

        destroy() {
            this.content.hasSlide = !1, this.content.remove(), this.container.remove(), this.pswp.dispatch("slideDestroy", {slide: this})
        }

        resize() {
            this.currZoomLevel !== this.zoomLevels.initial && this.isActive ? (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y)) : (this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize())
        }

        updateContentSize(t) {
            const e = this.currentResolution || this.zoomLevels.initial;
            if (!e) return;
            const i = Math.round(this.width * e) || this.pswp.viewportSize.x,
                n = Math.round(this.height * e) || this.pswp.viewportSize.y;
            (this.sizeChanged(i, n) || t) && this.content.setDisplayedSize(i, n)
        }

        sizeChanged(t, e) {
            return (t !== this.prevDisplayedWidth || e !== this.prevDisplayedHeight) && (this.prevDisplayedWidth = t, this.prevDisplayedHeight = e, !0)
        }

        getPlaceholderElement() {
            if (this.content.placeholder) return this.content.placeholder.element
        }

        zoomTo(t, e, n, r) {
            const {pswp: o} = this;
            if (!this.isZoomable() || o.mainScroll.isShifted()) return;
            o.dispatch("beforeZoomTo", {
                destZoomLevel: t,
                centerPoint: e,
                transitionDuration: n
            }), o.animations.stopAllPan();
            const a = this.currZoomLevel;
            r || (t = s(t, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, a), this.pan.y = this.calculateZoomToPanOffset("y", e, a), i(this.pan);
            const l = () => {
                this.g(t), this.applyCurrentZoomPan()
            };
            n ? o.animations.startTransition({
                isPan: !0,
                name: "zoomTo",
                target: this.container,
                transform: this.getCurrentTransform(),
                onComplete: l,
                duration: n,
                easing: o.options.easing
            }) : l()
        }

        toggleZoom(t) {
            this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, t, this.pswp.options.zoomAnimationDuration)
        }

        setZoomLevel(t) {
            this.currZoomLevel = t, this.bounds.update(this.currZoomLevel)
        }

        calculateZoomToPanOffset(t, e, i) {
            if (0 == this.bounds.max[t] - this.bounds.min[t]) return this.bounds.center[t];
            e || (e = this.pswp.getViewportCenterPoint());
            const n = this.currZoomLevel / i;
            return this.bounds.correctPan(t, (this.pan[t] - e[t]) * n + e[t])
        }

        panTo(t, e) {
            this.pan.x = this.bounds.correctPan("x", t), this.pan.y = this.bounds.correctPan("y", e), this.applyCurrentZoomPan()
        }

        isPannable() {
            return this.width && this.currZoomLevel > this.zoomLevels.fit
        }

        isZoomable() {
            return this.width && this.content.isZoomable()
        }

        applyCurrentZoomPan() {
            this._(this.pan.x, this.pan.y, this.currZoomLevel), this === this.pswp.currSlide && this.pswp.dispatch("zoomPanUpdate", {slide: this})
        }

        zoomAndPanToInitial() {
            this.currZoomLevel = this.zoomLevels.initial, this.bounds.update(this.currZoomLevel), e(this.pan, this.bounds.center), this.pswp.dispatch("initialZoomPan", {slide: this})
        }

        _(t, e, i) {
            i /= this.currentResolution || this.zoomLevels.initial, a(this.container, t, e, i)
        }

        calculateSize() {
            const {pswp: t} = this;
            e(this.panAreaSize, y(t.options, t.viewportSize, this.data, this.index)), this.zoomLevels.update(this.width, this.height, this.panAreaSize), t.dispatch("calcSlideSize", {slide: this})
        }

        getCurrentTransform() {
            const t = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
            return o(this.pan.x, this.pan.y, t)
        }

        g(t) {
            t !== this.currentResolution && (this.currentResolution = t, this.updateContentSize(), this.pswp.dispatch("resolutionChanged"))
        }
    }

    class x {
        constructor(t) {
            this.gestures = t, this.pswp = t.pswp, this.startPan = {}
        }

        start() {
            e(this.startPan, this.pswp.currSlide.pan), this.pswp.animations.stopAll()
        }

        change() {
            const {p1: t, prevP1: e, dragAxis: n, pswp: r} = this.gestures, {currSlide: s} = r;
            if ("y" === n && r.options.closeOnVerticalDrag && s.currZoomLevel <= s.zoomLevels.fit && !this.gestures.isMultitouch) {
                const i = s.pan.y + (t.y - e.y);
                if (!r.dispatch("verticalDrag", {panY: i}).defaultPrevented) {
                    this.v("y", i, .6);
                    const t = 1 - Math.abs(this.S(s.pan.y));
                    r.applyBgOpacity(t), s.applyCurrentZoomPan()
                }
            } else this.M("x") || (this.M("y"), i(s.pan), s.applyCurrentZoomPan())
        }

        end() {
            const {pswp: t, velocity: e} = this.gestures, {mainScroll: i} = t;
            let n = 0;
            if (t.animations.stopAll(), i.isShifted()) {
                const r = (i.x - i.getCurrSlideX()) / t.viewportSize.x;
                e.x < -.5 && r < 0 || e.x < .1 && r < -.5 ? (n = 1, e.x = Math.min(e.x, 0)) : (e.x > .5 && r > 0 || e.x > -.1 && r > .5) && (n = -1, e.x = Math.max(e.x, 0)), i.moveIndexBy(n, !0, e.x)
            }
            t.currSlide.currZoomLevel > t.currSlide.zoomLevels.max || this.gestures.isMultitouch ? this.gestures.zoomLevels.correctZoomPan(!0) : (this.P("x"), this.P("y"))
        }

        P(t) {
            const {pswp: e} = this, {currSlide: i} = e, {velocity: n} = this.gestures, {pan: r, bounds: o} = i,
                a = r[t], l = e.bgOpacity < 1 && "y" === t, c = a + function (t, e) {
                    return .995 * t / (1 - .995)
                }(n[t]);
            if (l) {
                const t = this.S(a), i = this.S(c);
                if (t < 0 && i < -.4 || t > 0 && i > .4) return void e.close()
            }
            const d = o.correctPan(t, c);
            if (a === d) return;
            const u = d === c ? 1 : .82, p = e.bgOpacity, h = d - a;
            e.animations.startSpring({
                name: "panGesture" + t,
                isPan: !0,
                start: a,
                end: d,
                velocity: n[t],
                dampingRatio: u,
                onUpdate: n => {
                    if (l && e.bgOpacity < 1) {
                        const t = 1 - (d - n) / h;
                        e.applyBgOpacity(s(p + (1 - p) * t, 0, 1))
                    }
                    r[t] = Math.floor(n), i.applyCurrentZoomPan()
                }
            })
        }

        M(t) {
            const {p1: e, pswp: i, dragAxis: n, prevP1: r, isMultitouch: s} = this.gestures, {
                currSlide: o,
                mainScroll: a
            } = i, l = e[t] - r[t], c = a.x + l;
            if (!l) return;
            if ("x" === t && !o.isPannable() && !s) return a.moveTo(c, !0), !0;
            const {bounds: d} = o, u = o.pan[t] + l;
            if (i.options.allowPanToNext && "x" === n && "x" === t && !s) {
                const e = a.getCurrSlideX(), i = a.x - e, n = l > 0, r = !n;
                if (u > d.min[t] && n) {
                    if (d.min[t] <= this.startPan[t]) return a.moveTo(c, !0), !0;
                    this.v(t, u)
                } else if (u < d.max[t] && r) {
                    if (this.startPan[t] <= d.max[t]) return a.moveTo(c, !0), !0;
                    this.v(t, u)
                } else if (0 !== i) {
                    if (i > 0) return a.moveTo(Math.max(c, e), !0), !0;
                    if (i < 0) return a.moveTo(Math.min(c, e), !0), !0
                } else this.v(t, u)
            } else "y" === t && (a.isShifted() || d.min.y === d.max.y) || this.v(t, u)
        }

        S(t) {
            return (t - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3)
        }

        v(t, e, i) {
            const {pan: n, bounds: r} = this.pswp.currSlide;
            if (r.correctPan(t, e) !== e || i) {
                const r = Math.round(e - n[t]);
                n[t] += r * (i || .35)
            } else n[t] = e
        }
    }

    function E(t, e, i) {
        return t.x = (e.x + i.x) / 2, t.y = (e.y + i.y) / 2, t
    }

    class T {
        constructor(t) {
            this.gestures = t, this.pswp = this.gestures.pswp, this.C = {}, this.T = {}, this.D = {}
        }

        start() {
            this.I = this.pswp.currSlide.currZoomLevel, e(this.C, this.pswp.currSlide.pan), this.pswp.animations.stopAllPan(), this.A = !1
        }

        change() {
            const {p1: t, startP1: e, p2: i, startP2: r, pswp: s} = this.gestures, {currSlide: o} = s,
                a = o.zoomLevels.min, l = o.zoomLevels.max;
            if (!o.isZoomable() || s.mainScroll.isShifted()) return;
            E(this.T, e, r), E(this.D, t, i);
            let c = 1 / n(e, r) * n(t, i) * this.I;
            if (c > o.zoomLevels.initial + o.zoomLevels.initial / 15 && (this.A = !0), c < a) if (s.options.pinchToClose && !this.A && this.I <= o.zoomLevels.initial) {
                const t = 1 - (a - c) / (a / 1.2);
                s.dispatch("pinchClose", {bgOpacity: t}).defaultPrevented || s.applyBgOpacity(t)
            } else c = a - .15 * (a - c); else c > l && (c = l + .05 * (c - l));
            o.pan.x = this.L("x", c), o.pan.y = this.L("y", c), o.setZoomLevel(c), o.applyCurrentZoomPan()
        }

        end() {
            const {pswp: t} = this, {currSlide: e} = t;
            e.currZoomLevel < e.zoomLevels.initial && !this.A && t.options.pinchToClose ? t.close() : this.correctZoomPan()
        }

        L(t, e) {
            const i = e / this.I;
            return this.D[t] - (this.T[t] - this.C[t]) * i
        }

        correctZoomPan(t) {
            const {pswp: i} = this, {currSlide: n} = i;
            if (!n.isZoomable()) return;
            void 0 === this.D.x && (t = !0);
            const o = n.currZoomLevel;
            let a, l = !0;
            o < n.zoomLevels.initial ? a = n.zoomLevels.initial : o > n.zoomLevels.max ? a = n.zoomLevels.max : (l = !1, a = o);
            const c = i.bgOpacity, d = i.bgOpacity < 1, u = e({}, n.pan);
            let p = e({}, u);
            t && (this.D.x = 0, this.D.y = 0, this.T.x = 0, this.T.y = 0, this.I = o, e(this.C, u)), l && (p = {
                x: this.L("x", a),
                y: this.L("y", a)
            }), n.setZoomLevel(a), p = {
                x: n.bounds.correctPan("x", p.x),
                y: n.bounds.correctPan("y", p.y)
            }, n.setZoomLevel(o);
            let h = !0;
            if (r(p, u) && (h = !1), !h && !l && !d) return n.g(a), void n.applyCurrentZoomPan();
            i.animations.stopAllPan(), i.animations.startSpring({
                isPan: !0,
                start: 0,
                end: 1e3,
                velocity: 0,
                dampingRatio: 1,
                naturalFrequency: 40,
                onUpdate: t => {
                    if (t /= 1e3, h || l) {
                        if (h && (n.pan.x = u.x + (p.x - u.x) * t, n.pan.y = u.y + (p.y - u.y) * t), l) {
                            const e = o + (a - o) * t;
                            n.setZoomLevel(e)
                        }
                        n.applyCurrentZoomPan()
                    }
                    d && i.bgOpacity < 1 && i.applyBgOpacity(s(c + (1 - c) * t, 0, 1))
                },
                onComplete: () => {
                    n.g(a), n.applyCurrentZoomPan()
                }
            })
        }
    }

    function C(t) {
        return !!t.target.closest(".pswp__container")
    }

    class S {
        constructor(t) {
            this.gestures = t
        }

        click(t, e) {
            const i = e.target.classList, n = i.contains("pswp__img"),
                r = i.contains("pswp__item") || i.contains("pswp__zoom-wrap");
            n ? this.k("imageClick", t, e) : r && this.k("bgClick", t, e)
        }

        tap(t, e) {
            C(e) && this.k("tap", t, e)
        }

        doubleTap(t, e) {
            C(e) && this.k("doubleTap", t, e)
        }

        k(t, e, i) {
            const {pswp: n} = this.gestures, {currSlide: r} = n, s = t + "Action", o = n.options[s];
            if (!n.dispatch(s, {point: e, originalEvent: i}).defaultPrevented) if ("function" != typeof o) switch (o) {
                case"close":
                case"next":
                    n[o]();
                    break;
                case"zoom":
                    r.toggleZoom(e);
                    break;
                case"zoom-or-close":
                    r.isZoomable() && r.zoomLevels.secondary !== r.zoomLevels.initial ? r.toggleZoom(e) : n.options.clickToCloseNonZoomable && n.close();
                    break;
                case"toggle-controls":
                    this.gestures.pswp.element.classList.toggle("pswp--ui-visible")
            } else o.call(n, e, i)
        }
    }

    class M {
        constructor(t) {
            this.pswp = t, this.dragAxis = void 0, this.p1 = {}, this.p2 = {}, this.prevP1 = {}, this.prevP2 = {}, this.startP1 = {}, this.startP2 = {}, this.velocity = {}, this.Z = {}, this.F = {}, this.O = 0, this.B = [], this.R = "ontouchstart" in window, this.N = !!window.PointerEvent, this.supportsTouch = this.R || this.N && navigator.maxTouchPoints > 1, this.supportsTouch || (t.options.allowPanToNext = !1), this.drag = new x(this), this.zoomLevels = new T(this), this.tapHandler = new S(this), t.on("bindEvents", (() => {
                t.events.add(t.scrollWrap, "click", (t => this.V(t))), this.N ? this.G("pointer", "down", "up", "cancel") : this.R ? (this.G("touch", "start", "end", "cancel"), t.scrollWrap.ontouchmove = () => {
                }, t.scrollWrap.ontouchend = () => {
                }) : this.G("mouse", "down", "up")
            }))
        }

        G(t, e, i, n) {
            const {pswp: r} = this, {events: s} = r, o = n ? t + n : "";
            s.add(r.scrollWrap, t + e, this.onPointerDown.bind(this)), s.add(window, t + "move", this.onPointerMove.bind(this)), s.add(window, t + i, this.onPointerUp.bind(this)), o && s.add(r.scrollWrap, o, this.onPointerUp.bind(this))
        }

        onPointerDown(t) {
            let i;
            if ("mousedown" !== t.type && "mouse" !== t.pointerType || (i = !0), i && t.button > 0) return;
            const {pswp: n} = this;
            n.opener.isOpen ? n.dispatch("pointerDown", {originalEvent: t}).defaultPrevented || (i && (n.mouseDetected(), this.U(t)), n.animations.stopAll(), this.q(t, "down"), this.pointerDown = !0, 1 === this.O && (this.dragAxis = null, e(this.startP1, this.p1)), this.O > 1 ? (this.H(), this.isMultitouch = !0) : this.isMultitouch = !1) : t.preventDefault()
        }

        onPointerMove(t) {
            t.preventDefault(), this.O && (this.q(t, "move"), this.pswp.dispatch("pointerMove", {originalEvent: t}).defaultPrevented || (1 !== this.O || this.isDragging ? this.O > 1 && !this.isZooming && (this.K(), this.isZooming = !0, this.W(), this.zoomLevels.start(), this.j(), this.X()) : (this.dragAxis || this.Y(), this.dragAxis && !this.isDragging && (this.isZooming && (this.isZooming = !1, this.zoomLevels.end()), this.isDragging = !0, this.H(), this.W(), this.$ = Date.now(), this.J = !1, e(this.F, this.p1), this.velocity.x = 0, this.velocity.y = 0, this.drag.start(), this.j(), this.X()))))
        }

        K() {
            this.isDragging && (this.isDragging = !1, this.J || this.tt(!0), this.drag.end(), this.dragAxis = null)
        }

        onPointerUp(t) {
            this.O && (this.q(t, "up"), this.pswp.dispatch("pointerUp", {originalEvent: t}).defaultPrevented || (0 === this.O && (this.pointerDown = !1, this.j(), this.isDragging ? this.K() : this.isZooming || this.isMultitouch || this.it(t)), this.O < 2 && this.isZooming && (this.isZooming = !1, this.zoomLevels.end(), 1 === this.O && (this.dragAxis = null, this.W()))))
        }

        X() {
            (this.isDragging || this.isZooming) && (this.tt(), this.isDragging ? r(this.p1, this.prevP1) || this.drag.change() : r(this.p1, this.prevP1) && r(this.p2, this.prevP2) || this.zoomLevels.change(), this.st(), this.raf = requestAnimationFrame(this.X.bind(this)))
        }

        tt(t) {
            const i = Date.now(), n = i - this.$;
            n < 50 && !t || (this.velocity.x = this.ht("x", n), this.velocity.y = this.ht("y", n), this.$ = i, e(this.F, this.p1), this.J = !0)
        }

        it(t) {
            const {mainScroll: i} = this.pswp;
            if (i.isShifted()) return void i.moveIndexBy(0, !0);
            if (t.type.indexOf("cancel") > 0) return;
            if ("mouseup" === t.type || "mouse" === t.pointerType) return void this.tapHandler.click(this.startP1, t);
            const r = this.pswp.options.doubleTapAction ? 300 : 0;
            this.et ? (this.H(), n(this.Z, this.startP1) < 25 && this.tapHandler.doubleTap(this.startP1, t)) : (e(this.Z, this.startP1), this.et = setTimeout((() => {
                this.tapHandler.tap(this.startP1, t), this.H()
            }), r))
        }

        H() {
            this.et && (clearTimeout(this.et), this.et = null)
        }

        ht(t, e) {
            const i = this.p1[t] - this.F[t];
            return Math.abs(i) > 1 && e > 5 ? i / e : 0
        }

        j() {
            this.raf && (cancelAnimationFrame(this.raf), this.raf = null)
        }

        U(t) {
            return t.preventDefault(), !0
        }

        q(t, i) {
            if (this.N) {
                const n = t, r = this.B.findIndex((t => t.id === n.pointerId));
                "up" === i && r > -1 ? this.B.splice(r, 1) : "down" === i && -1 === r ? this.B.push(this.nt(n, {})) : r > -1 && this.nt(n, this.B[r]), this.O = this.B.length, this.O > 0 && e(this.p1, this.B[0]), this.O > 1 && e(this.p2, this.B[1])
            } else {
                const e = t;
                this.O = 0, e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (this.nt(e.touches[0], this.p1), this.O++, e.touches.length > 1 && (this.nt(e.touches[1], this.p2), this.O++)) : (this.nt(t, this.p1), "up" === i ? this.O = 0 : this.O++)
            }
        }

        st() {
            e(this.prevP1, this.p1), e(this.prevP2, this.p2)
        }

        W() {
            e(this.startP1, this.p1), e(this.startP2, this.p2), this.st()
        }

        Y() {
            if (this.pswp.mainScroll.isShifted()) this.dragAxis = "x"; else {
                const t = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
                if (0 !== t) {
                    const e = t > 0 ? "x" : "y";
                    Math.abs(this.p1[e] - this.startP1[e]) >= 10 && (this.dragAxis = e)
                }
            }
        }

        nt(t, e) {
            return e.x = t.pageX - this.pswp.offset.x, e.y = t.pageY - this.pswp.offset.y, "pointerId" in t ? e.id = t.pointerId : void 0 !== t.identifier && (e.id = t.identifier), e
        }

        V(t) {
            this.pswp.mainScroll.isShifted() && (t.preventDefault(), t.stopPropagation())
        }
    }

    class P {
        constructor(t) {
            this.pswp = t, this.x = 0, this.slideWidth = void 0, this.itemHolders = void 0, this.resetPosition()
        }

        resize(t) {
            const {pswp: e} = this, i = Math.round(e.viewportSize.x + e.viewportSize.x * e.options.spacing),
                n = i !== this.slideWidth;
            n && (this.slideWidth = i, this.moveTo(this.getCurrSlideX())), this.itemHolders.forEach(((e, i) => {
                n && a(e.el, (i + this.ot) * this.slideWidth), t && e.slide && e.slide.resize()
            }))
        }

        resetPosition() {
            this.rt = 0, this.ct = 0, this.slideWidth = 0, this.ot = -1
        }

        appendHolders() {
            this.itemHolders = [];
            for (let e = 0; e < 3; e++) {
                const i = t("pswp__item", !1, this.pswp.container);
                i.setAttribute("role", "group"), i.setAttribute("aria-roledescription", "slide"), i.setAttribute("aria-hidden", "true"), i.style.display = 1 === e ? "block" : "none", this.itemHolders.push({el: i})
            }
        }

        canBeSwiped() {
            return this.pswp.getNumItems() > 1
        }

        moveIndexBy(t, e, i) {
            const {pswp: n} = this;
            let r = n.potentialIndex + t;
            const s = n.getNumItems();
            if (n.canLoop()) {
                r = n.getLoopedIndex(r);
                const e = (t + s) % s;
                t = e <= s / 2 ? e : e - s
            } else r < 0 ? r = 0 : r >= s && (r = s - 1), t = r - n.potentialIndex;
            n.potentialIndex = r, this.rt -= t, n.animations.stopMainScroll();
            const o = this.getCurrSlideX();
            if (e) {
                n.animations.startSpring({
                    isMainScroll: !0,
                    start: this.x,
                    end: o,
                    velocity: i || 0,
                    naturalFrequency: 30,
                    dampingRatio: 1,
                    onUpdate: t => {
                        this.moveTo(t)
                    },
                    onComplete: () => {
                        this.updateCurrItem(), n.appendHeavy()
                    }
                });
                let t = n.potentialIndex - n.currIndex;
                if (n.canLoop()) {
                    const e = (t + s) % s;
                    t = e <= s / 2 ? e : e - s
                }
                Math.abs(t) > 1 && this.updateCurrItem()
            } else this.moveTo(o), this.updateCurrItem();
            if (t) return !0
        }

        getCurrSlideX() {
            return this.slideWidth * this.rt
        }

        isShifted() {
            return this.x !== this.getCurrSlideX()
        }

        updateCurrItem() {
            const {pswp: t} = this, e = this.ct - this.rt;
            if (!e) return;
            this.ct = this.rt, t.currIndex = t.potentialIndex;
            let i, n = Math.abs(e);
            n >= 3 && (this.ot += e + (e > 0 ? -3 : 3), n = 3);
            for (let r = 0; r < n; r++) e > 0 ? (i = this.itemHolders.shift(), this.itemHolders[2] = i, this.ot++, a(i.el, (this.ot + 2) * this.slideWidth), t.setContent(i, t.currIndex - n + r + 2)) : (i = this.itemHolders.pop(), this.itemHolders.unshift(i), this.ot--, a(i.el, this.ot * this.slideWidth), t.setContent(i, t.currIndex + n - r - 2));
            Math.abs(this.ot) > 50 && !this.isShifted() && (this.resetPosition(), this.resize()), t.animations.stopAllPan(), this.itemHolders.forEach(((t, e) => {
                t.slide && t.slide.setIsActive(1 === e)
            })), t.currSlide = this.itemHolders[1].slide, t.contentLoader.updateLazy(e), t.currSlide && t.currSlide.applyCurrentZoomPan(), t.dispatch("change")
        }

        moveTo(t, e) {
            let i, n;
            !this.pswp.canLoop() && e && (i = (this.slideWidth * this.rt - t) / this.slideWidth, i += this.pswp.currIndex, n = Math.round(t - this.x), (i < 0 && n > 0 || i >= this.pswp.getNumItems() - 1 && n < 0) && (t = this.x + .35 * n)), this.x = t, a(this.pswp.container, t), this.pswp.dispatch("moveMainScroll", {
                x: t,
                dragging: e
            })
        }
    }

    class O {
        constructor(t) {
            this.pswp = t, t.on("bindEvents", (() => {
                t.options.initialPointerPos || this.lt(), t.events.add(document, "focusin", this.ut.bind(this)), t.events.add(document, "keydown", this.dt.bind(this))
            }));
            const e = document.activeElement;
            t.on("destroy", (() => {
                t.options.returnFocus && e && this.ft && e.focus()
            }))
        }

        lt() {
            this.ft || (this.pswp.element.focus(), this.ft = !0)
        }

        dt(t) {
            const {pswp: e} = this;
            if (e.dispatch("keydown", {originalEvent: t}).defaultPrevented) return;
            if (function (t) {
                if (2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey) return !0
            }(t)) return;
            let i, n, r;
            switch (t.keyCode) {
                case 27:
                    e.options.escKey && (i = "close");
                    break;
                case 90:
                    i = "toggleZoom";
                    break;
                case 37:
                    n = "x";
                    break;
                case 38:
                    n = "y";
                    break;
                case 39:
                    n = "x", r = !0;
                    break;
                case 40:
                    r = !0, n = "y";
                    break;
                case 9:
                    this.lt()
            }
            if (n) {
                t.preventDefault();
                const {currSlide: s} = e;
                e.options.arrowKeys && "x" === n && e.getNumItems() > 1 ? i = r ? "next" : "prev" : s && s.currZoomLevel > s.zoomLevels.fit && (s.pan[n] += r ? -80 : 80, s.panTo(s.pan.x, s.pan.y))
            }
            i && (t.preventDefault(), e[i]())
        }

        ut(t) {
            const {template: e} = this.pswp;
            document === t.target || e === t.target || e.contains(t.target) || e.focus()
        }
    }

    class D {
        constructor(t) {
            this.props = t;
            const {target: e, onComplete: i, transform: n, onFinish: r} = t;
            let {duration: s, easing: o} = t;
            this.onFinish = r;
            const a = n ? "transform" : "opacity", c = t[a];
            this.wt = e, this.gt = i, s = s || 333, o = o || "cubic-bezier(.4,0,.22,1)", this._t = this._t.bind(this), this.vt = setTimeout((() => {
                l(e, a, s, o), this.vt = setTimeout((() => {
                    e.addEventListener("transitionend", this._t, !1), e.addEventListener("transitioncancel", this._t, !1), this.vt = setTimeout((() => {
                        this.yt()
                    }), s + 500), e.style[a] = c
                }), 30)
            }), 0)
        }

        _t(t) {
            t.target === this.wt && this.yt()
        }

        yt() {
            this.bt || (this.bt = !0, this.onFinish(), this.gt && this.gt())
        }

        destroy() {
            this.vt && clearTimeout(this.vt), l(this.wt), this.wt.removeEventListener("transitionend", this._t, !1), this.wt.removeEventListener("transitioncancel", this._t, !1), this.bt || this.yt()
        }
    }

    class k {
        constructor(t, e, i) {
            this.velocity = 1e3 * t, this.St = e || .75, this.xt = i || 12, this.St < 1 && (this.Mt = this.xt * Math.sqrt(1 - this.St * this.St))
        }

        easeFrame(t, e) {
            let i, n = 0;
            e /= 1e3;
            const r = Math.E ** (-this.St * this.xt * e);
            if (1 === this.St) i = this.velocity + this.xt * t, n = (t + i * e) * r, this.velocity = n * -this.xt + i * r; else if (this.St < 1) {
                i = 1 / this.Mt * (this.St * this.xt * t + this.velocity);
                const s = Math.cos(this.Mt * e), o = Math.sin(this.Mt * e);
                n = r * (t * s + i * o), this.velocity = n * -this.xt * this.St + r * (-this.Mt * t * o + this.Mt * i * s)
            }
            return n
        }
    }

    class A {
        constructor(t) {
            this.props = t;
            const {
                start: e,
                end: i,
                velocity: n,
                onUpdate: r,
                onComplete: s,
                onFinish: o,
                dampingRatio: a,
                naturalFrequency: l
            } = t;
            this.onFinish = o;
            const c = new k(n, a, l);
            let d = Date.now(), u = e - i;
            const p = () => {
                this.zt && (u = c.easeFrame(u, Date.now() - d), Math.abs(u) < 1 && Math.abs(c.velocity) < 50 ? (r(i), s && s(), this.onFinish()) : (d = Date.now(), r(u + i), this.zt = requestAnimationFrame(p)))
            };
            this.zt = requestAnimationFrame(p)
        }

        destroy() {
            this.zt >= 0 && cancelAnimationFrame(this.zt), this.zt = null
        }
    }

    class I {
        constructor() {
            this.activeAnimations = []
        }

        startSpring(t) {
            this.Pt(t, !0)
        }

        startTransition(t) {
            this.Pt(t)
        }

        Pt(t, e) {
            let i;
            return i = e ? new A(t) : new D(t), this.activeAnimations.push(i), i.onFinish = () => this.stop(i), i
        }

        stop(t) {
            t.destroy();
            const e = this.activeAnimations.indexOf(t);
            e > -1 && this.activeAnimations.splice(e, 1)
        }

        stopAll() {
            this.activeAnimations.forEach((t => {
                t.destroy()
            })), this.activeAnimations = []
        }

        stopAllPan() {
            this.activeAnimations = this.activeAnimations.filter((t => !t.props.isPan || (t.destroy(), !1)))
        }

        stopMainScroll() {
            this.activeAnimations = this.activeAnimations.filter((t => !t.props.isMainScroll || (t.destroy(), !1)))
        }

        isPanRunning() {
            return this.activeAnimations.some((t => t.props.isPan))
        }
    }

    class z {
        constructor(t) {
            this.pswp = t, t.events.add(t.element, "wheel", this.Ct.bind(this))
        }

        Ct(t) {
            t.preventDefault();
            const {currSlide: e} = this.pswp;
            let {deltaX: i, deltaY: n} = t;
            if (e && !this.pswp.dispatch("wheel", {originalEvent: t}).defaultPrevented) if (t.ctrlKey || this.pswp.options.wheelToZoom) {
                if (e.isZoomable()) {
                    let i = -n;
                    1 === t.deltaMode ? i *= .05 : i *= t.deltaMode ? 1 : .002, i = 2 ** i;
                    const r = e.currZoomLevel * i;
                    e.zoomTo(r, {x: t.clientX, y: t.clientY})
                }
            } else e.isPannable() && (1 === t.deltaMode && (i *= 18, n *= 18), e.panTo(e.pan.x - i, e.pan.y - n))
        }
    }

    class L {
        constructor(e, i) {
            const n = i.name || i.className;
            let r = i.html;
            if (!1 === e.options[n]) return;
            "string" == typeof e.options[n + "SVG"] && (r = e.options[n + "SVG"]), e.dispatch("uiElementCreate", {data: i});
            let s, o = "";
            i.isButton ? (o += "pswp__button ", o += i.className || `pswp__button--${i.name}`) : o += i.className || `pswp__${i.name}`;
            let a = i.isButton ? i.tagName || "button" : i.tagName || "div";
            if (a = a.toLowerCase(), s = t(o, a), i.isButton) {
                s = t(o, a), "button" === a && (s.type = "button");
                let {title: r} = i;
                const {ariaLabel: l} = i;
                "string" == typeof e.options[n + "Title"] && (r = e.options[n + "Title"]), r && (s.title = r), (l || r) && s.setAttribute("aria-label", l || r)
            }
            s.innerHTML = function (t) {
                if ("string" == typeof t) return t;
                if (!t || !t.isCustomSVG) return "";
                const e = t;
                let i = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
                return i = i.split("%d").join(e.size || 32), e.outlineID && (i += '<use class="pswp__icn-shadow" xlink:href="#' + e.outlineID + '"/>'), i += e.inner, i += "</svg>", i
            }(r), i.onInit && i.onInit(s, e), i.onClick && (s.onclick = t => {
                "string" == typeof i.onClick ? e[i.onClick]() : i.onClick(t, s, e)
            });
            const l = i.appendTo || "bar";
            let c;
            "bar" === l ? (e.topBar || (e.topBar = t("pswp__top-bar pswp__hide-on-close", "div", e.scrollWrap)), c = e.topBar) : (s.classList.add("pswp__hide-on-close"), c = "wrapper" === l ? e.scrollWrap : e.element), c.appendChild(e.applyFilters("uiElement", s, i))
        }
    }

    function $(t, e, i) {
        t.classList.add("pswp__button--arrow"), t.setAttribute("aria-controls", "pswp__items"), e.on("change", (() => {
            e.options.loop || (t.disabled = i ? !(e.currIndex < e.getNumItems() - 1) : !(e.currIndex > 0))
        }))
    }

    const j = {
        name: "arrowPrev",
        className: "pswp__button--arrow--prev",
        title: "Previous",
        order: 10,
        isButton: !0,
        appendTo: "wrapper",
        html: {
            isCustomSVG: !0,
            size: 60,
            inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
            outlineID: "pswp__icn-arrow"
        },
        onClick: "prev",
        onInit: $
    }, N = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: !0,
        appendTo: "wrapper",
        html: {isCustomSVG: !0, size: 60, inner: '<use xlink:href="#pswp__icn-arrow"/>', outlineID: "pswp__icn-arrow"},
        onClick: "next",
        onInit: (t, e) => {
            $(t, e, !0)
        }
    }, F = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: !0,
        html: {
            isCustomSVG: !0,
            inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
            outlineID: "pswp__icn-close"
        },
        onClick: "close"
    }, R = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: !0,
        html: {
            isCustomSVG: !0,
            inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
            outlineID: "pswp__icn-zoom"
        },
        onClick: "toggleZoom"
    }, B = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
            isCustomSVG: !0,
            inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
            outlineID: "pswp__icn-loading"
        },
        onInit: (t, e) => {
            let i, n;
            const r = e => {
                var n;
                i !== e && (i = e, "active", n = e, t.classList[n ? "add" : "remove"]("pswp__preloader--active"))
            }, s = () => {
                if (!e.currSlide.content.isLoading()) return r(!1), void (n && (clearTimeout(n), n = null));
                n || (n = setTimeout((() => {
                    r(e.currSlide.content.isLoading()), n = null
                }), e.options.preloaderDelay))
            };
            e.on("change", s), e.on("loadComplete", (t => {
                e.currSlide === t.slide && s()
            })), e.ui.updatePreloaderVisibility = s
        }
    }, H = {
        name: "counter", order: 5, onInit: (t, e) => {
            e.on("change", (() => {
                t.innerText = e.currIndex + 1 + e.options.indexIndicatorSep + e.getNumItems()
            }))
        }
    };

    function W(t, e) {
        t.classList[e ? "add" : "remove"]("pswp--zoomed-in")
    }

    class Y {
        constructor(t) {
            this.pswp = t, this.updatePreloaderVisibility = void 0, this.Tt = void 0
        }

        init() {
            const {pswp: t} = this;
            this.isRegistered = !1, this.uiElementsData = [F, j, N, R, B, H], t.dispatch("uiRegister"), this.uiElementsData.sort(((t, e) => (t.order || 0) - (e.order || 0))), this.items = [], this.isRegistered = !0, this.uiElementsData.forEach((t => {
                this.registerElement(t)
            })), t.on("change", (() => {
                t.element.classList[1 === t.getNumItems() ? "add" : "remove"]("pswp--one-slide")
            })), t.on("zoomPanUpdate", (() => this.Dt()))
        }

        registerElement(t) {
            this.isRegistered ? this.items.push(new L(this.pswp, t)) : this.uiElementsData.push(t)
        }

        Dt() {
            const {template: t, currSlide: e, options: i} = this.pswp;
            let {currZoomLevel: n} = e;
            if (this.pswp.opener.isClosing) return;
            if (this.pswp.opener.isOpen || (n = e.zoomLevels.initial), n === this.Tt) return;
            this.Tt = n;
            const r = e.zoomLevels.initial - e.zoomLevels.secondary;
            if (Math.abs(r) < .01 || !e.isZoomable()) return W(t, !1), void t.classList.remove("pswp--zoom-allowed");
            t.classList.add("pswp--zoom-allowed"), W(t, (n === e.zoomLevels.initial ? e.zoomLevels.secondary : e.zoomLevels.initial) <= n), "zoom" !== i.imageClickAction && "zoom-or-close" !== i.imageClickAction || t.classList.add("pswp--click-to-zoom")
        }
    }

    class q {
        constructor(t, e) {
            this.type = t, e && Object.assign(this, e)
        }

        preventDefault() {
            this.defaultPrevented = !0
        }
    }

    class X {
        constructor(e, i) {
            this.element = t("pswp__img pswp__img--placeholder", e ? "img" : "", i), e && (this.element.decoding = "async", this.element.alt = "", this.element.src = e, this.element.setAttribute("role", "presentation")), this.element.setAttribute("aria-hidden", "true")
        }

        setDisplayedSize(t, e) {
            this.element && ("IMG" === this.element.tagName ? (c(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = o(0, 0, t / 250)) : c(this.element, t, e))
        }

        destroy() {
            this.element.parentNode && this.element.remove(), this.element = null
        }
    }

    class V {
        constructor(t, e, i) {
            this.instance = e, this.data = t, this.index = i, this.element = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.state = "idle", this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {content: this})
        }

        removePlaceholder() {
            this.placeholder && !this.keepPlaceholder() && setTimeout((() => {
                this.placeholder && (this.placeholder.destroy(), this.placeholder = null)
            }), 1e3)
        }

        load(e, i) {
            if (this.slide && this.usePlaceholder()) if (this.placeholder) {
                const t = this.placeholder.element;
                t && !t.parentElement && this.slide.container.prepend(t)
            } else {
                const t = this.instance.applyFilters("placeholderSrc", !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc, this);
                this.placeholder = new X(t, this.slide.container)
            }
            this.element && !i || this.instance.dispatch("contentLoad", {
                content: this,
                isLazy: e
            }).defaultPrevented || (this.isImageContent() ? (this.element = t("pswp__img", "img"), this.displayedImageWidth && this.loadImage(e)) : (this.element = t("pswp__content"), this.element.innerHTML = this.data.html || ""), i && this.slide && this.slide.updateContentSize(!0))
        }

        loadImage(t) {
            const e = this.element;
            this.instance.dispatch("contentLoadImage", {
                content: this,
                isLazy: t
            }).defaultPrevented || (this.updateSrcsetSizes(), this.data.srcset && (e.srcset = this.data.srcset), e.src = this.data.src, e.alt = this.data.alt || "", this.state = d, e.complete ? this.onLoaded() : (e.onload = () => {
                this.onLoaded()
            }, e.onerror = () => {
                this.onError()
            }))
        }

        setSlide(t) {
            this.slide = t, this.hasSlide = !0, this.instance = t.pswp
        }

        onLoaded() {
            this.state = u, this.slide && (this.instance.dispatch("loadComplete", {
                slide: this.slide,
                content: this
            }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), this.state !== u && this.state !== p || this.removePlaceholder())
        }

        onError() {
            this.state = p, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
                slide: this.slide,
                isError: !0,
                content: this
            }), this.instance.dispatch("loadError", {slide: this.slide, content: this}))
        }

        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === d, this)
        }

        isError() {
            return this.state === p
        }

        isImageContent() {
            return "image" === this.type
        }

        setDisplayedSize(t, e) {
            if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, e), !this.instance.dispatch("contentResize", {
                content: this,
                width: t,
                height: e
            }).defaultPrevented && (c(this.element, t, e), this.isImageContent() && !this.isError()))) {
                const i = !this.displayedImageWidth && t;
                this.displayedImageWidth = t, this.displayedImageHeight = e, i ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
                    slide: this.slide,
                    width: t,
                    height: e,
                    content: this
                })
            }
        }

        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== p, this)
        }

        updateSrcsetSizes() {
            if (this.data.srcset) {
                const t = this.element,
                    e = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
                (!t.dataset.largestUsedSize || e > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = e + "px", t.dataset.largestUsedSize = String(e))
            }
        }

        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this)
        }

        lazyLoad() {
            this.instance.dispatch("contentLazyLoad", {content: this}).defaultPrevented || this.load(!0)
        }

        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this)
        }

        destroy() {
            this.hasSlide = !1, this.slide = null, this.instance.dispatch("contentDestroy", {content: this}).defaultPrevented || (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = null), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = null))
        }

        displayError() {
            if (this.slide) {
                let e = t("pswp__error-msg");
                e.innerText = this.instance.options.errorMsg, e = this.instance.applyFilters("contentErrorElement", e, this), this.element = t("pswp__content pswp__error-msg-container"), this.element.appendChild(e), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder()
            }
        }

        append() {
            if (this.isAttached) return;
            if (this.isAttached = !0, this.state === p) return void this.displayError();
            if (this.instance.dispatch("contentAppend", {content: this}).defaultPrevented) return;
            const t = "decode" in this.element;
            this.isImageContent() ? t && this.slide && (!this.slide.isActive || h()) ? (this.isDecoding = !0, this.element.decode().catch((() => {
            })).finally((() => {
                this.isDecoding = !1, this.appendImage()
            }))) : this.appendImage() : this.element && !this.element.parentNode && this.slide.container.appendChild(this.element)
        }

        activate() {
            this.instance.dispatch("contentActivate", {content: this}).defaultPrevented || this.slide && (this.isImageContent() && this.isDecoding && !h() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"))
        }

        deactivate() {
            this.instance.dispatch("contentDeactivate", {content: this}), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true")
        }

        remove() {
            this.isAttached = !1, this.instance.dispatch("contentRemove", {content: this}).defaultPrevented || (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove())
        }

        appendImage() {
            this.isAttached && (this.instance.dispatch("contentAppendImage", {content: this}).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), this.state !== u && this.state !== p || this.removePlaceholder()))
        }
    }

    function G(t, e, i) {
        const n = e.createContentFromData(t, i);
        if (!n || !n.lazyLoad) return;
        const {options: r} = e, s = y(r, e.viewportSize || g(r, e), t, i), o = new w(r, t, -1);
        return o.update(n.width, n.height, s), n.lazyLoad(), n.setDisplayedSize(Math.ceil(n.width * o.initial), Math.ceil(n.height * o.initial)), n
    }

    class U {
        constructor(t) {
            this.pswp = t, this.limit = Math.max(t.options.preload[0] + t.options.preload[1] + 1, 5), this.It = []
        }

        updateLazy(t) {
            const {pswp: e} = this;
            if (e.dispatch("lazyLoad").defaultPrevented) return;
            const {preload: i} = e.options, n = void 0 === t || t >= 0;
            let r;
            for (r = 0; r <= i[1]; r++) this.loadSlideByIndex(e.currIndex + (n ? r : -r));
            for (r = 1; r <= i[0]; r++) this.loadSlideByIndex(e.currIndex + (n ? -r : r))
        }

        loadSlideByIndex(t) {
            t = this.pswp.getLoopedIndex(t);
            let e = this.getContentByIndex(t);
            e || (e = function (t, e) {
                const i = e.getItemData(t);
                if (!e.dispatch("lazyLoadSlide", {index: t, itemData: i}).defaultPrevented) return G(i, e, t)
            }(t, this.pswp), e && this.addToCache(e))
        }

        getContentBySlide(t) {
            let e = this.getContentByIndex(t.index);
            return e || (e = this.pswp.createContentFromData(t.data, t.index), e && this.addToCache(e)), e && e.setSlide(t), e
        }

        addToCache(t) {
            if (this.removeByIndex(t.index), this.It.push(t), this.It.length > this.limit) {
                const t = this.It.findIndex((t => !t.isAttached && !t.hasSlide));
                -1 !== t && this.It.splice(t, 1)[0].destroy()
            }
        }

        removeByIndex(t) {
            const e = this.It.findIndex((e => e.index === t));
            -1 !== e && this.It.splice(e, 1)
        }

        getContentByIndex(t) {
            return this.It.find((e => e.index === t))
        }

        destroy() {
            this.It.forEach((t => t.destroy())), this.It = null
        }
    }

    const Z = .003;

    class K {
        constructor(t) {
            this.pswp = t, this.isClosed = !0, this.At = this.At.bind(this), this.Et = void 0, t.on("firstZoomPan", this.At)
        }

        open() {
            this.At(), this.Pt()
        }

        close() {
            if (this.isClosed || this.isClosing || this.isOpening) return !1;
            const t = this.pswp.currSlide;
            return this.isOpen = !1, this.isOpening = !1, this.isClosing = !0, this.Lt = this.pswp.options.hideAnimationDuration, t && t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate && (this.Lt = 0), this.kt(), setTimeout((() => {
                this.Pt()
            }), this.Zt ? 30 : 0), !0
        }

        At() {
            if (this.pswp.off("firstZoomPan", this.At), !this.isOpening) {
                const t = this.pswp.currSlide;
                this.isOpening = !0, this.isClosing = !1, this.Lt = this.pswp.options.showAnimationDuration, t && t.zoomLevels.initial * t.width >= this.pswp.options.maxWidthToAnimate && (this.Lt = 0), this.kt()
            }
        }

        kt() {
            const {pswp: t} = this, e = this.pswp.currSlide, {options: i} = t;
            if ("fade" === i.showHideAnimationType ? (i.showHideOpacity = !0, this.Et = !1) : "none" === i.showHideAnimationType ? (i.showHideOpacity = !1, this.Lt = 0, this.Et = !1) : this.isOpening && t.Ft ? this.Et = t.Ft : this.Et = this.pswp.getThumbBounds(), this.Ot = e.getPlaceholderElement(), t.animations.stopAll(), this.Bt = this.Lt > 50, this.Rt = Boolean(this.Et) && e.content && e.content.usePlaceholder() && (!this.isClosing || !t.mainScroll.isShifted()), this.Rt ? this.Nt = i.showHideOpacity : (this.Nt = !0, this.isOpening && (e.zoomAndPanToInitial(), e.applyCurrentZoomPan())), this.Vt = !this.Nt && this.pswp.options.bgOpacity > Z, this.Gt = this.Nt ? t.element : t.bg, !this.Bt) return this.Lt = 0, this.Rt = !1, this.Vt = !1, this.Nt = !0, void (this.isOpening && (t.element.style.opacity = String(Z), t.applyBgOpacity(1)));
            this.Rt && this.Et && this.Et.innerRect ? (this.Zt = !0, this.Ut = this.pswp.container, this.qt = this.pswp.currSlide.holderElement, t.container.style.overflow = "hidden", t.container.style.width = t.viewportSize.x + "px") : this.Zt = !1, this.isOpening ? (this.Nt ? (t.element.style.opacity = String(Z), t.applyBgOpacity(1)) : (this.Vt && (t.bg.style.opacity = String(Z)), t.element.style.opacity = "1"), this.Rt && (this.Ht(), this.Ot && (this.Ot.style.willChange = "transform", this.Ot.style.opacity = String(Z)))) : this.isClosing && (t.mainScroll.itemHolders[0].el.style.display = "none", t.mainScroll.itemHolders[2].el.style.display = "none", this.Zt && 0 !== t.mainScroll.x && (t.mainScroll.resetPosition(), t.mainScroll.resize()))
        }

        Pt() {
            this.isOpening && this.Bt && this.Ot && "IMG" === this.Ot.tagName ? new Promise((t => {
                let e = !1, i = !0;
                var n;
                (n = this.Ot, "decode" in n ? n.decode().catch((() => {
                })) : n.complete ? Promise.resolve(n) : new Promise(((t, e) => {
                    n.onload = () => t(n), n.onerror = e
                }))).finally((() => {
                    e = !0, i || t()
                })), setTimeout((() => {
                    i = !1, e && t()
                }), 50), setTimeout(t, 250)
            })).finally((() => this.Kt())) : this.Kt()
        }

        Kt() {
            this.pswp.element.style.setProperty("--pswp-transition-duration", this.Lt + "ms"), this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart"), this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out")), this.pswp.element.classList[this.isOpening ? "add" : "remove"]("pswp--ui-visible"), this.isOpening ? (this.Ot && (this.Ot.style.opacity = "1"), this.Wt()) : this.isClosing && this.jt(), this.Bt || this.Xt()
        }

        Xt() {
            const {pswp: t} = this;
            this.isOpen = this.isOpening, this.isClosed = this.isClosing, this.isOpening = !1, this.isClosing = !1, t.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"), t.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")), this.isClosed ? t.destroy() : this.isOpen && (this.Rt && (t.container.style.overflow = "visible", t.container.style.width = "100%"), t.currSlide.applyCurrentZoomPan())
        }

        Wt() {
            const {pswp: t} = this;
            this.Rt && (this.Zt && (this.Yt(this.Ut, "transform", "translate3d(0,0,0)"), this.Yt(this.qt, "transform", "none")), t.currSlide.zoomAndPanToInitial(), this.Yt(t.currSlide.container, "transform", t.currSlide.getCurrentTransform())), this.Vt && this.Yt(t.bg, "opacity", String(t.options.bgOpacity)), this.Nt && this.Yt(t.element, "opacity", "1")
        }

        jt() {
            const {pswp: t} = this;
            this.Rt && this.Ht(!0), this.Vt && t.bgOpacity > .01 && this.Yt(t.bg, "opacity", "0"), this.Nt && this.Yt(t.element, "opacity", "0")
        }

        Ht(t) {
            if (!this.Et) return;
            const {pswp: i} = this, {innerRect: n} = this.Et, {currSlide: r, viewportSize: s} = i;
            if (this.Zt) {
                const e = -s.x + (this.Et.x - n.x) + n.w, i = -s.y + (this.Et.y - n.y) + n.h, r = s.x - n.w,
                    l = s.y - n.h;
                t ? (this.Yt(this.Ut, "transform", o(e, i)), this.Yt(this.qt, "transform", o(r, l))) : (a(this.Ut, e, i), a(this.qt, r, l))
            }
            e(r.pan, n || this.Et), r.currZoomLevel = this.Et.w / r.width, t ? this.Yt(r.container, "transform", r.getCurrentTransform()) : r.applyCurrentZoomPan()
        }

        Yt(t, e, i) {
            if (!this.Lt) return void (t.style[e] = i);
            const {animations: n} = this.pswp, r = {
                duration: this.Lt, easing: this.pswp.options.easing, onComplete: () => {
                    n.activeAnimations.length || this.Xt()
                }, target: t
            };
            r[e] = i, n.startTransition(r)
        }
    }

    const Q = {
        allowPanToNext: !0,
        spacing: .1,
        loop: !0,
        pinchToClose: !0,
        closeOnVerticalDrag: !0,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        zoomAnimationDuration: 333,
        escKey: !0,
        arrowKeys: !0,
        returnFocus: !0,
        maxWidthToAnimate: 4e3,
        clickToCloseNonZoomable: !0,
        imageClickAction: "zoom-or-close",
        bgClickAction: "close",
        tapAction: "toggle-controls",
        doubleTapAction: "zoom",
        indexIndicatorSep: " / ",
        preloaderDelay: 2e3,
        bgOpacity: .8,
        index: 0,
        errorMsg: "The image cannot be loaded",
        preload: [1, 2],
        easing: "cubic-bezier(.4,0,.22,1)"
    };
    return class extends class extends class {
        constructor() {
            this.$t = {}, this.Jt = {}, this.pswp = void 0, this.options = void 0
        }

        addFilter(t, e, i = 100) {
            this.Jt[t] || (this.Jt[t] = []), this.Jt[t].push({
                fn: e,
                priority: i
            }), this.Jt[t].sort(((t, e) => t.priority - e.priority)), this.pswp && this.pswp.addFilter(t, e, i)
        }

        removeFilter(t, e) {
            this.Jt[t] && (this.Jt[t] = this.Jt[t].filter((t => t.fn !== e))), this.pswp && this.pswp.removeFilter(t, e)
        }

        applyFilters(t, ...e) {
            return this.Jt[t] && this.Jt[t].forEach((t => {
                e[0] = t.fn.apply(this, e)
            })), e[0]
        }

        on(t, e) {
            this.$t[t] || (this.$t[t] = []), this.$t[t].push(e), this.pswp && this.pswp.on(t, e)
        }

        off(t, e) {
            this.$t[t] && (this.$t[t] = this.$t[t].filter((t => e !== t))), this.pswp && this.pswp.off(t, e)
        }

        dispatch(t, e) {
            if (this.pswp) return this.pswp.dispatch(t, e);
            const i = new q(t, e);
            return this.$t ? (this.$t[t] && this.$t[t].forEach((t => {
                t.call(this, i)
            })), i) : i
        }
    } {
        getNumItems() {
            let t;
            const {dataSource: e} = this.options;
            e ? "length" in e ? t = e.length : "gallery" in e && (e.items || (e.items = this.Qt(e.gallery)), e.items && (t = e.items.length)) : t = 0;
            const i = this.dispatch("numItems", {dataSource: e, numItems: t});
            return this.applyFilters("numItems", i.numItems, e)
        }

        createContentFromData(t, e) {
            return new V(t, this, e)
        }

        getItemData(t) {
            const {dataSource: e} = this.options;
            let i;
            Array.isArray(e) ? i = e[t] : e && e.gallery && (e.items || (e.items = this.Qt(e.gallery)), i = e.items[t]);
            let n = i;
            n instanceof Element && (n = this.ti(n));
            const r = this.dispatch("itemData", {itemData: n || {}, index: t});
            return this.applyFilters("itemData", r.itemData, t)
        }

        Qt(t) {
            return this.options.children || this.options.childSelector ? function (t, e, i = document) {
                let n = [];
                if (t instanceof Element) n = [t]; else if (t instanceof NodeList || Array.isArray(t)) n = Array.from(t); else {
                    const r = "string" == typeof t ? t : e;
                    r && (n = Array.from(i.querySelectorAll(r)))
                }
                return n
            }(this.options.children, this.options.childSelector, t) || [] : [t]
        }

        ti(t) {
            const e = {element: t}, i = "A" === t.tagName ? t : t.querySelector("a");
            if (i) {
                e.src = i.dataset.pswpSrc || i.href, i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset), e.width = parseInt(i.dataset.pswpWidth, 10), e.height = parseInt(i.dataset.pswpHeight, 10), e.w = e.width, e.h = e.height, i.dataset.pswpType && (e.type = i.dataset.pswpType);
                const n = t.querySelector("img");
                n && (e.msrc = n.currentSrc || n.src, e.alt = n.getAttribute("alt")), (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0)
            }
            return this.applyFilters("domItemData", e, t, i)
        }

        lazyLoadData(t, e) {
            return G(t, this, e)
        }
    } {
        constructor(t) {
            super(), this.ii(t), this.offset = {}, this.si = {}, this.viewportSize = {}, this.bgOpacity = 1, this.topBar = void 0, this.events = new m, this.animations = new I, this.mainScroll = new P(this), this.gestures = new M(this), this.opener = new K(this), this.keyboard = new O(this), this.contentLoader = new U(this)
        }

        init() {
            if (this.isOpen || this.isDestroying) return;
            this.isOpen = !0, this.dispatch("init"), this.dispatch("beforeOpen"), this.hi();
            let t = "pswp--open";
            return this.gestures.supportsTouch && (t += " pswp--touch"), this.options.mainClass && (t += " " + this.options.mainClass), this.element.className += " " + t, this.currIndex = this.options.index || 0, this.potentialIndex = this.currIndex, this.dispatch("firstUpdate"), this.scrollWheel = new z(this), (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) && (this.currIndex = 0), this.gestures.supportsTouch || this.mouseDetected(), this.updateSize(), this.offset.y = window.pageYOffset, this.ei = this.getItemData(this.currIndex), this.dispatch("gettingData", {
                index: this.currIndex,
                data: this.ei,
                slide: void 0
            }), this.Ft = this.getThumbBounds(), this.dispatch("initialLayout"), this.on("openingAnimationEnd", (() => {
                this.mainScroll.itemHolders[0].el.style.display = "block", this.mainScroll.itemHolders[2].el.style.display = "block", this.setContent(this.mainScroll.itemHolders[0], this.currIndex - 1), this.setContent(this.mainScroll.itemHolders[2], this.currIndex + 1), this.appendHeavy(), this.contentLoader.updateLazy(), this.events.add(window, "resize", this.ni.bind(this)), this.events.add(window, "scroll", this.oi.bind(this)), this.dispatch("bindEvents")
            })), this.setContent(this.mainScroll.itemHolders[1], this.currIndex), this.dispatch("change"), this.opener.open(), this.dispatch("afterInit"), !0
        }

        getLoopedIndex(t) {
            const e = this.getNumItems();
            return this.options.loop && (t > e - 1 && (t -= e), t < 0 && (t += e)), s(t, 0, e - 1)
        }

        appendHeavy() {
            this.mainScroll.itemHolders.forEach((t => {
                t.slide && t.slide.appendHeavy()
            }))
        }

        goTo(t) {
            this.mainScroll.moveIndexBy(this.getLoopedIndex(t) - this.potentialIndex)
        }

        next() {
            this.goTo(this.potentialIndex + 1)
        }

        prev() {
            this.goTo(this.potentialIndex - 1)
        }

        zoomTo(...t) {
            this.currSlide.zoomTo(...t)
        }

        toggleZoom() {
            this.currSlide.toggleZoom()
        }

        close() {
            this.opener.isOpen && !this.isDestroying && (this.isDestroying = !0, this.dispatch("close"), this.events.removeAll(), this.opener.close())
        }

        destroy() {
            if (!this.isDestroying) return this.options.showHideAnimationType = "none", void this.close();
            this.dispatch("destroy"), this.listeners = null, this.scrollWrap.ontouchmove = null, this.scrollWrap.ontouchend = null, this.element.remove(), this.mainScroll.itemHolders.forEach((t => {
                t.slide && t.slide.destroy()
            })), this.contentLoader.destroy(), this.events.removeAll()
        }

        refreshSlideContent(t) {
            this.contentLoader.removeByIndex(t), this.mainScroll.itemHolders.forEach(((e, i) => {
                let n = this.currSlide.index - 1 + i;
                this.canLoop() && (n = this.getLoopedIndex(n)), n === t && (this.setContent(e, t, !0), 1 === i && (this.currSlide = e.slide, e.slide.setIsActive(!0)))
            })), this.dispatch("change")
        }

        setContent(t, e, i) {
            if (this.canLoop() && (e = this.getLoopedIndex(e)), t.slide) {
                if (t.slide.index === e && !i) return;
                t.slide.destroy(), t.slide = null
            }
            if (!this.canLoop() && (e < 0 || e >= this.getNumItems())) return;
            const n = this.getItemData(e);
            t.slide = new _(n, e, this), e === this.currIndex && (this.currSlide = t.slide), t.slide.append(t.el)
        }

        getViewportCenterPoint() {
            return {x: this.viewportSize.x / 2, y: this.viewportSize.y / 2}
        }

        updateSize(t) {
            if (this.isDestroying) return;
            const i = g(this.options, this);
            !t && r(i, this.si) || (e(this.si, i), this.dispatch("beforeResize"), e(this.viewportSize, this.si), this.oi(), this.dispatch("viewportSize"), this.mainScroll.resize(this.opener.isOpen), !this.hasMouse && window.matchMedia("(any-hover: hover)").matches && this.mouseDetected(), this.dispatch("resize"))
        }

        applyBgOpacity(t) {
            this.bgOpacity = Math.max(t, 0), this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity)
        }

        mouseDetected() {
            this.hasMouse || (this.hasMouse = !0, this.element.classList.add("pswp--has_mouse"))
        }

        ni() {
            this.updateSize(), /iPhone|iPad|iPod/i.test(window.navigator.userAgent) && setTimeout((() => {
                this.updateSize()
            }), 500)
        }

        oi() {
            this.setScrollOffset(0, window.pageYOffset)
        }

        setScrollOffset(t, e) {
            this.offset.x = t, this.offset.y = e, this.dispatch("updateScrollOffset")
        }

        hi() {
            this.element = t("pswp"), this.element.setAttribute("tabindex", "-1"), this.element.setAttribute("role", "dialog"), this.template = this.element, this.bg = t("pswp__bg", !1, this.element), this.scrollWrap = t("pswp__scroll-wrap", "section", this.element), this.container = t("pswp__container", !1, this.scrollWrap), this.scrollWrap.setAttribute("aria-roledescription", "carousel"), this.container.setAttribute("aria-live", "off"), this.container.setAttribute("id", "pswp__items"), this.mainScroll.appendHolders(), this.ui = new Y(this), this.ui.init(), (this.options.appendToEl || document.body).appendChild(this.element)
        }

        getThumbBounds() {
            return function (t, e, i) {
                const n = i.dispatch("thumbBounds", {index: t, itemData: e, instance: i});
                if (n.thumbBounds) return n.thumbBounds;
                const {element: r} = e;
                let s, o;
                if (r && !1 !== i.options.thumbSelector) {
                    const t = i.options.thumbSelector || "img";
                    o = r.matches(t) ? r : r.querySelector(t)
                }
                return o = i.applyFilters("thumbEl", o, e, t), o && (s = e.thumbCropped ? function (t, e, i) {
                    const n = t.getBoundingClientRect(), r = n.width / e, s = n.height / i, o = r > s ? r : s,
                        a = (n.width - e * o) / 2, l = (n.height - i * o) / 2,
                        c = {x: n.left + a, y: n.top + l, w: e * o};
                    return c.innerRect = {w: n.width, h: n.height, x: a, y: l}, c
                }(o, e.width || e.w, e.height || e.h) : function (t) {
                    const e = t.getBoundingClientRect();
                    return {x: e.left, y: e.top, w: e.width}
                }(o)), i.applyFilters("thumbBounds", s, e, t)
            }(this.currIndex, this.currSlide ? this.currSlide.data : this.ei, this)
        }

        canLoop() {
            return this.options.loop && this.getNumItems() > 2
        }

        ii(t) {
            window.matchMedia("(prefers-reduced-motion), (update: slow)").matches && (t.showHideAnimationType = "none", t.zoomAnimationDuration = 0), this.options = {...Q, ...t}
        }
    }
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).PhotoSwipeLightbox = e()
}(this, (function () {
    "use strict";

    function t(t, e, i) {
        const n = document.createElement(e || "div");
        return t && (n.className = t), i && i.appendChild(n), n
    }

    function e(t, e, i) {
        t.style.width = "number" == typeof e ? e + "px" : e, t.style.height = "number" == typeof i ? i + "px" : i
    }

    const i = "loading", n = "loaded", r = "error";

    function s(t, e, i = document) {
        let n = [];
        if (t instanceof Element) n = [t]; else if (t instanceof NodeList || Array.isArray(t)) n = Array.from(t); else {
            const r = "string" == typeof t ? t : e;
            r && (n = Array.from(i.querySelectorAll(r)))
        }
        return n
    }

    function o() {
        return !(!navigator.vendor || !navigator.vendor.match(/apple/i))
    }

    class a {
        constructor(t, e) {
            this.type = t, e && Object.assign(this, e)
        }

        preventDefault() {
            this.defaultPrevented = !0
        }
    }

    class l {
        constructor(e, i) {
            this.element = t("pswp__img pswp__img--placeholder", e ? "img" : "", i), e && (this.element.decoding = "async", this.element.alt = "", this.element.src = e, this.element.setAttribute("role", "presentation")), this.element.setAttribute("aria-hidden", "true")
        }

        setDisplayedSize(t, i) {
            this.element && ("IMG" === this.element.tagName ? (e(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = function (t, e, i) {
                let n = "translate3d(0px,0px,0)";
                return void 0 !== i && (n += " scale3d(" + i + "," + i + ",1)"), n
            }(0, 0, t / 250)) : e(this.element, t, i))
        }

        destroy() {
            this.element.parentNode && this.element.remove(), this.element = null
        }
    }

    class c {
        constructor(t, e, i) {
            this.instance = e, this.data = t, this.index = i, this.element = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.state = "idle", this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {content: this})
        }

        removePlaceholder() {
            this.placeholder && !this.keepPlaceholder() && setTimeout((() => {
                this.placeholder && (this.placeholder.destroy(), this.placeholder = null)
            }), 1e3)
        }

        load(e, i) {
            if (this.slide && this.usePlaceholder()) if (this.placeholder) {
                const t = this.placeholder.element;
                t && !t.parentElement && this.slide.container.prepend(t)
            } else {
                const t = this.instance.applyFilters("placeholderSrc", !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc, this);
                this.placeholder = new l(t, this.slide.container)
            }
            this.element && !i || this.instance.dispatch("contentLoad", {
                content: this,
                isLazy: e
            }).defaultPrevented || (this.isImageContent() ? (this.element = t("pswp__img", "img"), this.displayedImageWidth && this.loadImage(e)) : (this.element = t("pswp__content"), this.element.innerHTML = this.data.html || ""), i && this.slide && this.slide.updateContentSize(!0))
        }

        loadImage(t) {
            const e = this.element;
            this.instance.dispatch("contentLoadImage", {
                content: this,
                isLazy: t
            }).defaultPrevented || (this.updateSrcsetSizes(), this.data.srcset && (e.srcset = this.data.srcset), e.src = this.data.src, e.alt = this.data.alt || "", this.state = i, e.complete ? this.onLoaded() : (e.onload = () => {
                this.onLoaded()
            }, e.onerror = () => {
                this.onError()
            }))
        }

        setSlide(t) {
            this.slide = t, this.hasSlide = !0, this.instance = t.pswp
        }

        onLoaded() {
            this.state = n, this.slide && (this.instance.dispatch("loadComplete", {
                slide: this.slide,
                content: this
            }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), this.state !== n && this.state !== r || this.removePlaceholder())
        }

        onError() {
            this.state = r, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
                slide: this.slide,
                isError: !0,
                content: this
            }), this.instance.dispatch("loadError", {slide: this.slide, content: this}))
        }

        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === i, this)
        }

        isError() {
            return this.state === r
        }

        isImageContent() {
            return "image" === this.type
        }

        setDisplayedSize(t, i) {
            if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, i), !this.instance.dispatch("contentResize", {
                content: this,
                width: t,
                height: i
            }).defaultPrevented && (e(this.element, t, i), this.isImageContent() && !this.isError()))) {
                const e = !this.displayedImageWidth && t;
                this.displayedImageWidth = t, this.displayedImageHeight = i, e ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
                    slide: this.slide,
                    width: t,
                    height: i,
                    content: this
                })
            }
        }

        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== r, this)
        }

        updateSrcsetSizes() {
            if (this.data.srcset) {
                const t = this.element,
                    e = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
                (!t.dataset.largestUsedSize || e > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = e + "px", t.dataset.largestUsedSize = String(e))
            }
        }

        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this)
        }

        lazyLoad() {
            this.instance.dispatch("contentLazyLoad", {content: this}).defaultPrevented || this.load(!0)
        }

        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this)
        }

        destroy() {
            this.hasSlide = !1, this.slide = null, this.instance.dispatch("contentDestroy", {content: this}).defaultPrevented || (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = null), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = null))
        }

        displayError() {
            if (this.slide) {
                let e = t("pswp__error-msg");
                e.innerText = this.instance.options.errorMsg, e = this.instance.applyFilters("contentErrorElement", e, this), this.element = t("pswp__content pswp__error-msg-container"), this.element.appendChild(e), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder()
            }
        }

        append() {
            if (this.isAttached) return;
            if (this.isAttached = !0, this.state === r) return void this.displayError();
            if (this.instance.dispatch("contentAppend", {content: this}).defaultPrevented) return;
            const t = "decode" in this.element;
            this.isImageContent() ? t && this.slide && (!this.slide.isActive || o()) ? (this.isDecoding = !0, this.element.decode().catch((() => {
            })).finally((() => {
                this.isDecoding = !1, this.appendImage()
            }))) : this.appendImage() : this.element && !this.element.parentNode && this.slide.container.appendChild(this.element)
        }

        activate() {
            this.instance.dispatch("contentActivate", {content: this}).defaultPrevented || this.slide && (this.isImageContent() && this.isDecoding && !o() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"))
        }

        deactivate() {
            this.instance.dispatch("contentDeactivate", {content: this}), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true")
        }

        remove() {
            this.isAttached = !1, this.instance.dispatch("contentRemove", {content: this}).defaultPrevented || (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove())
        }

        appendImage() {
            this.isAttached && (this.instance.dispatch("contentAppendImage", {content: this}).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), this.state !== n && this.state !== r || this.removePlaceholder()))
        }
    }

    function d(t, e, i, n, r) {
        let s;
        if (e.paddingFn) s = e.paddingFn(i, n, r)[t]; else if (e.padding) s = e.padding[t]; else {
            const i = "padding" + t[0].toUpperCase() + t.slice(1);
            e[i] && (s = e[i])
        }
        return s || 0
    }

    class u {
        constructor(t, e, i, n) {
            this.pswp = n, this.options = t, this.itemData = e, this.index = i
        }

        update(t, e, i) {
            this.elementSize = {x: t, y: e}, this.panAreaSize = i;
            const n = this.panAreaSize.x / this.elementSize.x, r = this.panAreaSize.y / this.elementSize.y;
            this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this.t(), this.secondary = this.i(), this.max = Math.max(this.initial, this.secondary, this.o()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
                zoomLevels: this,
                slideData: this.itemData
            })
        }

        l(t) {
            const e = t + "ZoomLevel", i = this.options[e];
            if (i) return "function" == typeof i ? i(this) : "fill" === i ? this.fill : "fit" === i ? this.fit : Number(i)
        }

        i() {
            let t = this.l("secondary");
            return t || (t = Math.min(1, 3 * this.fit), t * this.elementSize.x > 4e3 && (t = 4e3 / this.elementSize.x), t)
        }

        t() {
            return this.l("initial") || this.fit
        }

        o() {
            return this.l("max") || Math.max(1, 4 * this.fit)
        }
    }

    function p(t, e, i) {
        const n = e.createContentFromData(t, i);
        if (!n || !n.lazyLoad) return;
        const {options: r} = e, s = e.viewportSize || function (t, e) {
            if (t.getViewportSizeFn) {
                const i = t.getViewportSizeFn(t, e);
                if (i) return i
            }
            return {x: document.documentElement.clientWidth, y: window.innerHeight}
        }(r, e), o = function (t, e, i, n) {
            return {
                x: e.x - d("left", t, e, i, n) - d("right", t, e, i, n),
                y: e.y - d("top", t, e, i, n) - d("bottom", t, e, i, n)
            }
        }(r, s, t, i), a = new u(r, t, -1);
        return a.update(n.width, n.height, o), n.lazyLoad(), n.setDisplayedSize(Math.ceil(n.width * a.initial), Math.ceil(n.height * a.initial)), n
    }

    return class extends class extends class {
        constructor() {
            this.u = {}, this.p = {}, this.pswp = void 0, this.options = void 0
        }

        addFilter(t, e, i = 100) {
            this.p[t] || (this.p[t] = []), this.p[t].push({
                fn: e,
                priority: i
            }), this.p[t].sort(((t, e) => t.priority - e.priority)), this.pswp && this.pswp.addFilter(t, e, i)
        }

        removeFilter(t, e) {
            this.p[t] && (this.p[t] = this.p[t].filter((t => t.fn !== e))), this.pswp && this.pswp.removeFilter(t, e)
        }

        applyFilters(t, ...e) {
            return this.p[t] && this.p[t].forEach((t => {
                e[0] = t.fn.apply(this, e)
            })), e[0]
        }

        on(t, e) {
            this.u[t] || (this.u[t] = []), this.u[t].push(e), this.pswp && this.pswp.on(t, e)
        }

        off(t, e) {
            this.u[t] && (this.u[t] = this.u[t].filter((t => e !== t))), this.pswp && this.pswp.off(t, e)
        }

        dispatch(t, e) {
            if (this.pswp) return this.pswp.dispatch(t, e);
            const i = new a(t, e);
            return this.u ? (this.u[t] && this.u[t].forEach((t => {
                t.call(this, i)
            })), i) : i
        }
    } {
        getNumItems() {
            let t;
            const {dataSource: e} = this.options;
            e ? "length" in e ? t = e.length : "gallery" in e && (e.items || (e.items = this.m(e.gallery)), e.items && (t = e.items.length)) : t = 0;
            const i = this.dispatch("numItems", {dataSource: e, numItems: t});
            return this.applyFilters("numItems", i.numItems, e)
        }

        createContentFromData(t, e) {
            return new c(t, this, e)
        }

        getItemData(t) {
            const {dataSource: e} = this.options;
            let i;
            Array.isArray(e) ? i = e[t] : e && e.gallery && (e.items || (e.items = this.m(e.gallery)), i = e.items[t]);
            let n = i;
            n instanceof Element && (n = this.g(n));
            const r = this.dispatch("itemData", {itemData: n || {}, index: t});
            return this.applyFilters("itemData", r.itemData, t)
        }

        m(t) {
            return this.options.children || this.options.childSelector ? s(this.options.children, this.options.childSelector, t) || [] : [t]
        }

        g(t) {
            const e = {element: t}, i = "A" === t.tagName ? t : t.querySelector("a");
            if (i) {
                e.src = i.dataset.pswpSrc || i.href, i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset), e.width = parseInt(i.dataset.pswpWidth, 10), e.height = parseInt(i.dataset.pswpHeight, 10), e.w = e.width, e.h = e.height, i.dataset.pswpType && (e.type = i.dataset.pswpType);
                const n = t.querySelector("img");
                n && (e.msrc = n.currentSrc || n.src, e.alt = n.getAttribute("alt")), (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0)
            }
            return this.applyFilters("domItemData", e, t, i)
        }

        lazyLoadData(t, e) {
            return p(t, this, e)
        }
    } {
        constructor(t) {
            super(), this.options = t || {}, this.v = 0
        }

        init() {
            this.onThumbnailsClick = this.onThumbnailsClick.bind(this), s(this.options.gallery, this.options.gallerySelector).forEach((t => {
                t.addEventListener("click", this.onThumbnailsClick, !1)
            }))
        }

        onThumbnailsClick(t) {
            if (function (t) {
                if (2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey) return !0
            }(t) || window.pswp || !1 === window.navigator.onLine) return;
            let e = {x: t.clientX, y: t.clientY};
            e.x || e.y || (e = null);
            let i = this.getClickedIndex(t);
            i = this.applyFilters("clickedIndex", i, t, this);
            const n = {gallery: t.currentTarget};
            i >= 0 && (t.preventDefault(), this.loadAndOpen(i, n, e))
        }

        getClickedIndex(t) {
            if (this.options.getClickedIndexFn) return this.options.getClickedIndexFn.call(this, t);
            const e = t.target,
                i = s(this.options.children, this.options.childSelector, t.currentTarget).findIndex((t => t === e || t.contains(e)));
            return -1 !== i ? i : this.options.children || this.options.childSelector ? -1 : 0
        }

        loadAndOpen(t, e, i) {
            return !window.pswp && (this.options.index = t, this.options.initialPointerPos = i, this.shouldOpen = !0, this.preload(t, e), !0)
        }

        preload(t, e) {
            const {options: i} = this;
            e && (i.dataSource = e);
            const n = [], r = typeof i.pswpModule;
            if ("function" == typeof (s = i.pswpModule) && s.prototype && s.prototype.goTo) n.push(Promise.resolve(i.pswpModule)); else {
                if ("string" === r) throw new Error("pswpModule as string is no longer supported");
                if ("function" !== r) throw new Error("pswpModule is not valid");
                n.push(i.pswpModule())
            }
            var s;
            "function" == typeof i.openPromise && n.push(i.openPromise()), !1 !== i.preloadFirstSlide && t >= 0 && (this._ = function (t, e) {
                const i = e.getItemData(t);
                if (!e.dispatch("lazyLoadSlide", {index: t, itemData: i}).defaultPrevented) return p(i, e, t)
            }(t, this));
            const o = ++this.v;
            Promise.all(n).then((t => {
                if (this.shouldOpen) {
                    const e = t[0];
                    this.I(e, o)
                }
            }))
        }

        I(t, e) {
            if (e !== this.v && this.shouldOpen) return;
            if (this.shouldOpen = !1, window.pswp) return;
            const i = "object" == typeof t ? new t.default(this.options) : new t(this.options);
            this.pswp = i, window.pswp = i, Object.keys(this.u).forEach((t => {
                this.u[t].forEach((e => {
                    i.on(t, e)
                }))
            })), Object.keys(this.p).forEach((t => {
                this.p[t].forEach((e => {
                    i.addFilter(t, e.fn, e.priority)
                }))
            })), this._ && (i.contentLoader.addToCache(this._), this._ = null), i.on("destroy", (() => {
                this.pswp = null, window.pswp = null
            })), i.init()
        }

        destroy() {
            this.pswp && this.pswp.destroy(), this.shouldOpen = !1, this.u = null, s(this.options.gallery, this.options.gallerySelector).forEach((t => {
                t.removeEventListener("click", this.onThumbnailsClick, !1)
            }))
        }
    }
})), function (t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).interact = t()
}((function () {
    var t = {};
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = function (t) {
        return !(!t || !t.Window) && t instanceof t.Window
    };
    var e = {};
    Object.defineProperty(e, "__esModule", {value: !0}), e.getWindow = function (e) {
        return (0, t.default)(e) ? e : (e.ownerDocument || e).defaultView || n.window
    }, e.init = r, e.window = e.realWindow = void 0;
    var i = void 0;
    e.realWindow = i;
    var n = void 0;

    function r(t) {
        e.realWindow = i = t;
        var r = t.document.createTextNode("");
        r.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(r) === r && (t = t.wrap(t)), e.window = n = t
    }

    e.window = n, "undefined" != typeof window && window && r(window);
    var s = {};

    function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
    }

    Object.defineProperty(s, "__esModule", {value: !0}), s.default = void 0;
    var a = function (t) {
        return !!t && "object" === o(t)
    }, l = function (t) {
        return "function" == typeof t
    }, c = {
        window: function (i) {
            return i === e.window || (0, t.default)(i)
        }, docFrag: function (t) {
            return a(t) && 11 === t.nodeType
        }, object: a, func: l, number: function (t) {
            return "number" == typeof t
        }, bool: function (t) {
            return "boolean" == typeof t
        }, string: function (t) {
            return "string" == typeof t
        }, element: function (t) {
            if (!t || "object" !== o(t)) return !1;
            var i = e.getWindow(t) || e.window;
            return /object|function/.test("undefined" == typeof Element ? "undefined" : o(Element)) ? t instanceof Element || t instanceof i.Element : 1 === t.nodeType && "string" == typeof t.nodeName
        }, plainObject: function (t) {
            return a(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString())
        }, array: function (t) {
            return a(t) && void 0 !== t.length && l(t.splice)
        }
    };
    s.default = c;
    var d = {};

    function u(t) {
        var e = t.interaction;
        if ("drag" === e.prepared.name) {
            var i = e.prepared.axis;
            "x" === i ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : "y" === i && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0)
        }
    }

    function p(t) {
        var e = t.iEvent, i = t.interaction;
        if ("drag" === i.prepared.name) {
            var n = i.prepared.axis;
            if ("x" === n || "y" === n) {
                var r = "x" === n ? "y" : "x";
                e.page[r] = i.coords.start.page[r], e.client[r] = i.coords.start.client[r], e.delta[r] = 0
            }
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0}), d.default = void 0;
    var h = {
        id: "actions/drag",
        install: function (t) {
            var e = t.actions, i = t.Interactable, n = t.defaults;
            i.prototype.draggable = h.draggable, e.map.drag = h, e.methodDict.drag = "draggable", n.actions.drag = h.defaults
        },
        listeners: {
            "interactions:before-action-move": u,
            "interactions:action-resume": u,
            "interactions:action-move": p,
            "auto-start:check": function (t) {
                var e = t.interaction, i = t.interactable, n = t.buttons, r = i.options.drag;
                if (r && r.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (n & i.options.drag.mouseButtons))) return t.action = {
                    name: "drag",
                    axis: "start" === r.lockAxis ? r.startAxis : r.lockAxis
                }, !1
            }
        },
        draggable: function (t) {
            return s.default.object(t) ? (this.options.drag.enabled = !1 !== t.enabled, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : s.default.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag
        },
        beforeMove: u,
        move: p,
        defaults: {startAxis: "xy", lockAxis: "xy"},
        getCursor: function () {
            return "move"
        }
    }, f = h;
    d.default = f;
    var m = {};
    Object.defineProperty(m, "__esModule", {value: !0}), m.default = void 0;
    var g = {
        init: function (t) {
            var e = t;
            g.document = e.document, g.DocumentFragment = e.DocumentFragment || v, g.SVGElement = e.SVGElement || v, g.SVGSVGElement = e.SVGSVGElement || v, g.SVGElementInstance = e.SVGElementInstance || v, g.Element = e.Element || v, g.HTMLElement = e.HTMLElement || g.Element, g.Event = e.Event, g.Touch = e.Touch || v, g.PointerEvent = e.PointerEvent || e.MSPointerEvent
        },
        document: null,
        DocumentFragment: null,
        SVGElement: null,
        SVGSVGElement: null,
        SVGElementInstance: null,
        Element: null,
        HTMLElement: null,
        Event: null,
        Touch: null,
        PointerEvent: null
    };

    function v() {
    }

    var y = g;
    m.default = y;
    var b = {};
    Object.defineProperty(b, "__esModule", {value: !0}), b.default = void 0;
    var w = {
        init: function (t) {
            var e = m.default.Element, i = t.navigator || {};
            w.supportsTouch = "ontouchstart" in t || s.default.func(t.DocumentTouch) && m.default.document instanceof t.DocumentTouch, w.supportsPointerEvent = !1 !== i.pointerEnabled && !!m.default.PointerEvent, w.isIOS = /iP(hone|od|ad)/.test(i.platform), w.isIOS7 = /iP(hone|od|ad)/.test(i.platform) && /OS 7[^\d]/.test(i.appVersion), w.isIe9 = /MSIE 9/.test(i.userAgent), w.isOperaMobile = "Opera" === i.appName && w.supportsTouch && /Presto/.test(i.userAgent), w.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", w.pEventTypes = w.supportsPointerEvent ? m.default.PointerEvent === t.MSPointerEvent ? {
                up: "MSPointerUp",
                down: "MSPointerDown",
                over: "mouseover",
                out: "mouseout",
                move: "MSPointerMove",
                cancel: "MSPointerCancel"
            } : {
                up: "pointerup",
                down: "pointerdown",
                over: "pointerover",
                out: "pointerout",
                move: "pointermove",
                cancel: "pointercancel"
            } : null, w.wheelEvent = m.default.document && "onmousewheel" in m.default.document ? "mousewheel" : "wheel"
        },
        supportsTouch: null,
        supportsPointerEvent: null,
        isIOS7: null,
        isIOS: null,
        isIe9: null,
        isOperaMobile: null,
        prefixedMatchesSelector: null,
        pEventTypes: null,
        wheelEvent: null
    }, _ = w;
    b.default = _;
    var x = {};

    function E(t) {
        var e = t.parentNode;
        if (s.default.docFrag(e)) {
            for (; (e = e.host) && s.default.docFrag(e);) ;
            return e
        }
        return e
    }

    function T(t, i) {
        return e.window !== e.realWindow && (i = i.replace(/\/deep\//g, " ")), t[b.default.prefixedMatchesSelector](i)
    }

    Object.defineProperty(x, "__esModule", {value: !0}), x.closest = function (t, e) {
        for (; s.default.element(t);) {
            if (T(t, e)) return t;
            t = E(t)
        }
        return null
    }, x.getActualElement = function (t) {
        return t.correspondingUseElement || t
    }, x.getElementClientRect = P, x.getElementRect = function (t) {
        var i = P(t);
        if (!b.default.isIOS7 && i) {
            var n = M(e.getWindow(t));
            i.left += n.x, i.right += n.x, i.top += n.y, i.bottom += n.y
        }
        return i
    }, x.getPath = function (t) {
        for (var e = []; t;) e.push(t), t = E(t);
        return e
    }, x.getScrollXY = M, x.indexOfDeepestElement = function (t) {
        for (var i, n = [], r = 0; r < t.length; r++) {
            var s = t[r], o = t[i];
            if (s && r !== i) if (o) {
                var a = C(s), l = C(o);
                if (a !== s.ownerDocument) if (l !== s.ownerDocument) if (a !== l) {
                    n = n.length ? n : S(o);
                    var c = void 0;
                    if (o instanceof m.default.HTMLElement && s instanceof m.default.SVGElement && !(s instanceof m.default.SVGSVGElement)) {
                        if (s === l) continue;
                        c = s.ownerSVGElement
                    } else c = s;
                    for (var d = S(c, o.ownerDocument), u = 0; d[u] && d[u] === n[u];) u++;
                    var p = [d[u - 1], d[u], n[u]];
                    if (p[0]) for (var h = p[0].lastChild; h;) {
                        if (h === p[1]) {
                            i = r, n = d;
                            break
                        }
                        if (h === p[2]) break;
                        h = h.previousSibling
                    }
                } else f = s, g = o, (parseInt(e.getWindow(f).getComputedStyle(f).zIndex, 10) || 0) >= (parseInt(e.getWindow(g).getComputedStyle(g).zIndex, 10) || 0) && (i = r); else i = r
            } else i = r
        }
        var f, g;
        return i
    }, x.matchesSelector = T, x.matchesUpTo = function (t, e, i) {
        for (; s.default.element(t);) {
            if (T(t, e)) return !0;
            if ((t = E(t)) === i) return T(t, e)
        }
        return !1
    }, x.nodeContains = function (t, e) {
        if (t.contains) return t.contains(e);
        for (; e;) {
            if (e === t) return !0;
            e = e.parentNode
        }
        return !1
    }, x.parentNode = E, x.trySelector = function (t) {
        return !!s.default.string(t) && (m.default.document.querySelector(t), !0)
    };
    var C = function (t) {
        return t.parentNode || t.host
    };

    function S(t, e) {
        for (var i, n = [], r = t; (i = C(r)) && r !== e && i !== r.ownerDocument;) n.unshift(r), r = i;
        return n
    }

    function M(t) {
        return {
            x: (t = t || e.window).scrollX || t.document.documentElement.scrollLeft,
            y: t.scrollY || t.document.documentElement.scrollTop
        }
    }

    function P(t) {
        var e = t instanceof m.default.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && {
            left: e.left,
            right: e.right,
            top: e.top,
            bottom: e.bottom,
            width: e.width || e.right - e.left,
            height: e.height || e.bottom - e.top
        }
    }

    var O = {};
    Object.defineProperty(O, "__esModule", {value: !0}), O.default = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    };
    var D = {};

    function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function A(t, e, i) {
        return "parent" === t ? (0, x.parentNode)(i) : "self" === t ? e.getRect(i) : (0, x.closest)(i, t)
    }

    Object.defineProperty(D, "__esModule", {value: !0}), D.addEdges = function (t, e, i) {
        t.left && (e.left += i.x), t.right && (e.right += i.x), t.top && (e.top += i.y), t.bottom && (e.bottom += i.y), e.width = e.right - e.left, e.height = e.bottom - e.top
    }, D.getStringOptionResult = A, D.rectToXY = function (t) {
        return t && {x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top}
    }, D.resolveRectLike = function (t, e, i, n) {
        var r, o = t;
        return s.default.string(o) ? o = A(o, e, i) : s.default.func(o) && (o = o.apply(void 0, function (t) {
            if (Array.isArray(t)) return k(t)
        }(r = n) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(r) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return k(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? k(t, e) : void 0
            }
        }(r) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())), s.default.element(o) && (o = (0, x.getElementRect)(o)), o
    }, D.tlbrToXywh = function (t) {
        return !t || "x" in t && "y" in t || ((t = (0, O.default)({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t
    }, D.xywhToTlbr = function (t) {
        return !t || "left" in t && "top" in t || ((t = (0, O.default)({}, t)).left = t.x || 0, t.top = t.y || 0, t.right = t.right || t.left + t.width, t.bottom = t.bottom || t.top + t.height), t
    };
    var I = {};
    Object.defineProperty(I, "__esModule", {value: !0}), I.default = function (t, e, i) {
        var n = t.options[i], r = n && n.origin || t.options.origin, s = (0, D.resolveRectLike)(r, t, e, [t && e]);
        return (0, D.rectToXY)(s) || {x: 0, y: 0}
    };
    var z = {};

    function L(t) {
        return t.trim().split(/ +/)
    }

    Object.defineProperty(z, "__esModule", {value: !0}), z.default = function t(e, i, n) {
        if (n = n || {}, s.default.string(e) && -1 !== e.search(" ") && (e = L(e)), s.default.array(e)) return e.reduce((function (e, r) {
            return (0, O.default)(e, t(r, i, n))
        }), n);
        if (s.default.object(e) && (i = e, e = ""), s.default.func(i)) n[e] = n[e] || [], n[e].push(i); else if (s.default.array(i)) for (var r = 0; r < i.length; r++) {
            var o;
            o = i[r], t(e, o, n)
        } else if (s.default.object(i)) for (var a in i) {
            var l = L(a).map((function (t) {
                return "".concat(e).concat(t)
            }));
            t(l, i[a], n)
        }
        return n
    };
    var $ = {};
    Object.defineProperty($, "__esModule", {value: !0}), $.default = void 0, $.default = function (t, e) {
        return Math.sqrt(t * t + e * e)
    };
    var j = {};
    Object.defineProperty(j, "__esModule", {value: !0}), j.default = function (t, e) {
        t.__set || (t.__set = {});
        var i = function (i) {
            "function" != typeof t[i] && "__set" !== i && Object.defineProperty(t, i, {
                get: function () {
                    return i in t.__set ? t.__set[i] : t.__set[i] = e[i]
                }, set: function (e) {
                    t.__set[i] = e
                }, configurable: !0
            })
        };
        for (var n in e) i(n);
        return t
    };
    var N = {};

    function F(t) {
        return t instanceof m.default.Event || t instanceof m.default.Touch
    }

    function R(t, e, i) {
        return t = t || "page", (i = i || {}).x = e[t + "X"], i.y = e[t + "Y"], i
    }

    function B(t, e) {
        return e = e || {
            x: 0,
            y: 0
        }, b.default.isOperaMobile && F(t) ? (R("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : R("page", t, e), e
    }

    function H(t, e) {
        return e = e || {}, b.default.isOperaMobile && F(t) ? R("screen", t, e) : R("client", t, e), e
    }

    function W(t) {
        var e = [];
        return s.default.array(t) ? (e[0] = t[0], e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e
    }

    function Y(t) {
        for (var e = {pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0}, i = 0; i < t.length; i++) {
            var n = t[i];
            for (var r in e) e[r] += n[r]
        }
        for (var s in e) e[s] /= t.length;
        return e
    }

    Object.defineProperty(N, "__esModule", {value: !0}), N.coordsToEvent = function (t) {
        return {
            coords: t, get page() {
                return this.coords.page
            }, get client() {
                return this.coords.client
            }, get timeStamp() {
                return this.coords.timeStamp
            }, get pageX() {
                return this.coords.page.x
            }, get pageY() {
                return this.coords.page.y
            }, get clientX() {
                return this.coords.client.x
            }, get clientY() {
                return this.coords.client.y
            }, get pointerId() {
                return this.coords.pointerId
            }, get target() {
                return this.coords.target
            }, get type() {
                return this.coords.type
            }, get pointerType() {
                return this.coords.pointerType
            }, get buttons() {
                return this.coords.buttons
            }, preventDefault: function () {
            }
        }
    }, N.copyCoords = function (t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp
    }, N.getClientXY = H, N.getEventTargets = function (t) {
        var e = s.default.func(t.composedPath) ? t.composedPath() : t.path;
        return [x.getActualElement(e ? e[0] : t.target), x.getActualElement(t.currentTarget)]
    }, N.getPageXY = B, N.getPointerId = function (t) {
        return s.default.number(t.pointerId) ? t.pointerId : t.identifier
    }, N.getPointerType = function (t) {
        return s.default.string(t.pointerType) ? t.pointerType : s.default.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof m.default.Touch ? "touch" : "mouse"
    }, N.getTouchPair = W, N.getXY = R, N.isNativePointer = F, N.newCoords = function () {
        return {page: {x: 0, y: 0}, client: {x: 0, y: 0}, timeStamp: 0}
    }, N.pointerAverage = Y, Object.defineProperty(N, "pointerExtend", {
        enumerable: !0, get: function () {
            return j.default
        }
    }), N.setCoordDeltas = function (t, e, i) {
        t.page.x = i.page.x - e.page.x, t.page.y = i.page.y - e.page.y, t.client.x = i.client.x - e.client.x, t.client.y = i.client.y - e.client.y, t.timeStamp = i.timeStamp - e.timeStamp
    }, N.setCoordVelocity = function (t, e) {
        var i = Math.max(e.timeStamp / 1e3, .001);
        t.page.x = e.page.x / i, t.page.y = e.page.y / i, t.client.x = e.client.x / i, t.client.y = e.client.y / i, t.timeStamp = i
    }, N.setCoords = function (t, e, i) {
        var n = e.length > 1 ? Y(e) : e[0];
        B(n, t.page), H(n, t.client), t.timeStamp = i
    }, N.setZeroCoords = function (t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0
    }, N.touchAngle = function (t, e) {
        var i = e + "X", n = e + "Y", r = W(t), s = r[1][i] - r[0][i], o = r[1][n] - r[0][n];
        return 180 * Math.atan2(o, s) / Math.PI
    }, N.touchBBox = function (t) {
        if (!t.length) return null;
        var e = W(t), i = Math.min(e[0].pageX, e[1].pageX), n = Math.min(e[0].pageY, e[1].pageY),
            r = Math.max(e[0].pageX, e[1].pageX), s = Math.max(e[0].pageY, e[1].pageY);
        return {x: i, y: n, left: i, top: n, right: r, bottom: s, width: r - i, height: s - n}
    }, N.touchDistance = function (t, e) {
        var i = e + "X", n = e + "Y", r = W(t), s = r[0][i] - r[1][i], o = r[0][n] - r[1][n];
        return (0, $.default)(s, o)
    };
    var q = {};

    function X(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(q, "__esModule", {value: !0}), q.BaseEvent = void 0;
    var V = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), X(this, "immediatePropagationStopped", !1), X(this, "propagationStopped", !1), this._interaction = e
        }

        var e, i;
        return e = t, (i = [{
            key: "preventDefault", value: function () {
            }
        }, {
            key: "stopPropagation", value: function () {
                this.propagationStopped = !0
            }
        }, {
            key: "stopImmediatePropagation", value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    q.BaseEvent = V, Object.defineProperty(V.prototype, "interaction", {
        get: function () {
            return this._interaction._proxy
        }, set: function () {
        }
    });
    var G = {};
    Object.defineProperty(G, "__esModule", {value: !0}), G.remove = G.merge = G.from = G.findIndex = G.find = G.contains = void 0, G.contains = function (t, e) {
        return -1 !== t.indexOf(e)
    }, G.remove = function (t, e) {
        return t.splice(t.indexOf(e), 1)
    };
    var U = function (t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            t.push(n)
        }
        return t
    };
    G.merge = U, G.from = function (t) {
        return U([], t)
    };
    var Z = function (t, e) {
        for (var i = 0; i < t.length; i++) if (e(t[i], i, t)) return i;
        return -1
    };
    G.findIndex = Z, G.find = function (t, e) {
        return t[Z(t, e)]
    };
    var K = {};

    function Q(t) {
        return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Q(t)
    }

    function J(t, e) {
        return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, J(t, e)
    }

    function tt(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function et(t) {
        return et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, et(t)
    }

    function it(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(K, "__esModule", {value: !0}), K.DropEvent = void 0;
    var nt = function (t) {
        !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && J(t, e)
        }(o, t);
        var e, i, n, r, s = (n = o, r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }(), function () {
            var t, e = et(n);
            if (r) {
                var i = et(this).constructor;
                t = Reflect.construct(e, arguments, i)
            } else t = e.apply(this, arguments);
            return function (t, e) {
                if (e && ("object" === Q(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return tt(t)
            }(this, t)
        });

        function o(t, e, i) {
            var n;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, o), it(tt(n = s.call(this, e._interaction)), "dropzone", void 0), it(tt(n), "dragEvent", void 0), it(tt(n), "relatedTarget", void 0), it(tt(n), "draggable", void 0), it(tt(n), "propagationStopped", !1), it(tt(n), "immediatePropagationStopped", !1);
            var r = "dragleave" === i ? t.prev : t.cur, a = r.element, l = r.dropzone;
            return n.type = i, n.target = a, n.currentTarget = a, n.dropzone = l, n.dragEvent = e, n.relatedTarget = e.target, n.draggable = e.interactable, n.timeStamp = e.timeStamp, n
        }

        return e = o, (i = [{
            key: "reject", value: function () {
                var t = this, e = this._interaction.dropState;
                if ("dropactivate" === this.type || this.dropzone && e.cur.dropzone === this.dropzone && e.cur.element === this.target) if (e.prev.dropzone = this.dropzone, e.prev.element = this.target, e.rejected = !0, e.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                    var i = e.activeDrops, n = G.findIndex(i, (function (e) {
                        var i = e.dropzone, n = e.element;
                        return i === t.dropzone && n === t.target
                    }));
                    e.activeDrops.splice(n, 1);
                    var r = new o(e, this.dragEvent, "dropdeactivate");
                    r.dropzone = this.dropzone, r.target = this.target, this.dropzone.fire(r)
                } else this.dropzone.fire(new o(e, this.dragEvent, "dragleave"))
            }
        }, {
            key: "preventDefault", value: function () {
            }
        }, {
            key: "stopPropagation", value: function () {
                this.propagationStopped = !0
            }
        }, {
            key: "stopImmediatePropagation", value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), o
    }(q.BaseEvent);
    K.DropEvent = nt;
    var rt = {};

    function st(t, e) {
        for (var i = 0; i < t.slice().length; i++) {
            var n = t.slice()[i], r = n.dropzone, s = n.element;
            e.dropzone = r, e.target = s, r.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1
        }
    }

    function ot(t, e) {
        for (var i = function (t, e) {
            for (var i = t.interactables, n = [], r = 0; r < i.list.length; r++) {
                var o = i.list[r];
                if (o.options.drop.enabled) {
                    var a = o.options.drop.accept;
                    if (!(s.default.element(a) && a !== e || s.default.string(a) && !x.matchesSelector(e, a) || s.default.func(a) && !a({
                        dropzone: o,
                        draggableElement: e
                    }))) for (var l = s.default.string(o.target) ? o._context.querySelectorAll(o.target) : s.default.array(o.target) ? o.target : [o.target], c = 0; c < l.length; c++) {
                        var d = l[c];
                        d !== e && n.push({dropzone: o, element: d, rect: o.getRect(d)})
                    }
                }
            }
            return n
        }(t, e), n = 0; n < i.length; n++) {
            var r = i[n];
            r.rect = r.dropzone.getRect(r.element)
        }
        return i
    }

    function at(t, e, i) {
        for (var n = t.dropState, r = t.interactable, s = t.element, o = [], a = 0; a < n.activeDrops.length; a++) {
            var l = n.activeDrops[a], c = l.dropzone, d = l.element, u = l.rect;
            o.push(c.dropCheck(e, i, r, s, d, u) ? d : null)
        }
        var p = x.indexOfDeepestElement(o);
        return n.activeDrops[p] || null
    }

    function lt(t, e, i) {
        var n = t.dropState, r = {enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null};
        return "dragstart" === i.type && (r.activate = new K.DropEvent(n, i, "dropactivate"), r.activate.target = null, r.activate.dropzone = null), "dragend" === i.type && (r.deactivate = new K.DropEvent(n, i, "dropdeactivate"), r.deactivate.target = null, r.deactivate.dropzone = null), n.rejected || (n.cur.element !== n.prev.element && (n.prev.dropzone && (r.leave = new K.DropEvent(n, i, "dragleave"), i.dragLeave = r.leave.target = n.prev.element, i.prevDropzone = r.leave.dropzone = n.prev.dropzone), n.cur.dropzone && (r.enter = new K.DropEvent(n, i, "dragenter"), i.dragEnter = n.cur.element, i.dropzone = n.cur.dropzone)), "dragend" === i.type && n.cur.dropzone && (r.drop = new K.DropEvent(n, i, "drop"), i.dropzone = n.cur.dropzone, i.relatedTarget = n.cur.element), "dragmove" === i.type && n.cur.dropzone && (r.move = new K.DropEvent(n, i, "dropmove"), r.move.dragmove = i, i.dropzone = n.cur.dropzone)), r
    }

    function ct(t, e) {
        var i = t.dropState, n = i.activeDrops, r = i.cur, s = i.prev;
        e.leave && s.dropzone.fire(e.leave), e.enter && r.dropzone.fire(e.enter), e.move && r.dropzone.fire(e.move), e.drop && r.dropzone.fire(e.drop), e.deactivate && st(n, e.deactivate), i.prev.dropzone = r.dropzone, i.prev.element = r.element
    }

    function dt(t, e) {
        var i = t.interaction, n = t.iEvent, r = t.event;
        if ("dragmove" === n.type || "dragend" === n.type) {
            var s = i.dropState;
            e.dynamicDrop && (s.activeDrops = ot(e, i.element));
            var o = n, a = at(i, o, r);
            s.rejected = s.rejected && !!a && a.dropzone === s.cur.dropzone && a.element === s.cur.element, s.cur.dropzone = a && a.dropzone, s.cur.element = a && a.element, s.events = lt(i, 0, o)
        }
    }

    Object.defineProperty(rt, "__esModule", {value: !0}), rt.default = void 0;
    var ut = {
        id: "actions/drop",
        install: function (t) {
            var e = t.actions, i = t.interactStatic, n = t.Interactable, r = t.defaults;
            t.usePlugin(d.default), n.prototype.dropzone = function (t) {
                return function (t, e) {
                    if (s.default.object(e)) {
                        if (t.options.drop.enabled = !1 !== e.enabled, e.listeners) {
                            var i = (0, z.default)(e.listeners), n = Object.keys(i).reduce((function (t, e) {
                                return t[/^(enter|leave)/.test(e) ? "drag".concat(e) : /^(activate|deactivate|move)/.test(e) ? "drop".concat(e) : e] = i[e], t
                            }), {});
                            t.off(t.options.drop.listeners), t.on(n), t.options.drop.listeners = n
                        }
                        return s.default.func(e.ondrop) && t.on("drop", e.ondrop), s.default.func(e.ondropactivate) && t.on("dropactivate", e.ondropactivate), s.default.func(e.ondropdeactivate) && t.on("dropdeactivate", e.ondropdeactivate), s.default.func(e.ondragenter) && t.on("dragenter", e.ondragenter), s.default.func(e.ondragleave) && t.on("dragleave", e.ondragleave), s.default.func(e.ondropmove) && t.on("dropmove", e.ondropmove), /^(pointer|center)$/.test(e.overlap) ? t.options.drop.overlap = e.overlap : s.default.number(e.overlap) && (t.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), "accept" in e && (t.options.drop.accept = e.accept), "checker" in e && (t.options.drop.checker = e.checker), t
                    }
                    return s.default.bool(e) ? (t.options.drop.enabled = e, t) : t.options.drop
                }(this, t)
            }, n.prototype.dropCheck = function (t, e, i, n, r, o) {
                return function (t, e, i, n, r, o, a) {
                    var l = !1;
                    if (!(a = a || t.getRect(o))) return !!t.options.drop.checker && t.options.drop.checker(e, i, l, t, o, n, r);
                    var c = t.options.drop.overlap;
                    if ("pointer" === c) {
                        var d = (0, I.default)(n, r, "drag"), u = N.getPageXY(e);
                        u.x += d.x, u.y += d.y;
                        var p = u.x > a.left && u.x < a.right, h = u.y > a.top && u.y < a.bottom;
                        l = p && h
                    }
                    var f = n.getRect(r);
                    if (f && "center" === c) {
                        var m = f.left + f.width / 2, g = f.top + f.height / 2;
                        l = m >= a.left && m <= a.right && g >= a.top && g <= a.bottom
                    }
                    return f && s.default.number(c) && (l = Math.max(0, Math.min(a.right, f.right) - Math.max(a.left, f.left)) * Math.max(0, Math.min(a.bottom, f.bottom) - Math.max(a.top, f.top)) / (f.width * f.height) >= c), t.options.drop.checker && (l = t.options.drop.checker(e, i, l, t, o, n, r)), l
                }(this, t, e, i, n, r, o)
            }, i.dynamicDrop = function (e) {
                return s.default.bool(e) ? (t.dynamicDrop = e, i) : t.dynamicDrop
            }, (0, O.default)(e.phaselessTypes, {
                dragenter: !0,
                dragleave: !0,
                dropactivate: !0,
                dropdeactivate: !0,
                dropmove: !0,
                drop: !0
            }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, r.actions.drop = ut.defaults
        },
        listeners: {
            "interactions:before-action-start": function (t) {
                var e = t.interaction;
                "drag" === e.prepared.name && (e.dropState = {
                    cur: {dropzone: null, element: null},
                    prev: {dropzone: null, element: null},
                    rejected: null,
                    events: null,
                    activeDrops: []
                })
            }, "interactions:after-action-start": function (t, e) {
                var i = t.interaction, n = (t.event, t.iEvent);
                if ("drag" === i.prepared.name) {
                    var r = i.dropState;
                    r.activeDrops = null, r.events = null, r.activeDrops = ot(e, i.element), r.events = lt(i, 0, n), r.events.activate && (st(r.activeDrops, r.events.activate), e.fire("actions/drop:start", {
                        interaction: i,
                        dragEvent: n
                    }))
                }
            }, "interactions:action-move": dt, "interactions:after-action-move": function (t, e) {
                var i = t.interaction, n = t.iEvent;
                "drag" === i.prepared.name && (ct(i, i.dropState.events), e.fire("actions/drop:move", {
                    interaction: i,
                    dragEvent: n
                }), i.dropState.events = {})
            }, "interactions:action-end": function (t, e) {
                if ("drag" === t.interaction.prepared.name) {
                    var i = t.interaction, n = t.iEvent;
                    dt(t, e), ct(i, i.dropState.events), e.fire("actions/drop:end", {interaction: i, dragEvent: n})
                }
            }, "interactions:stop": function (t) {
                var e = t.interaction;
                if ("drag" === e.prepared.name) {
                    var i = e.dropState;
                    i && (i.activeDrops = null, i.events = null, i.cur.dropzone = null, i.cur.element = null, i.prev.dropzone = null, i.prev.element = null, i.rejected = !1)
                }
            }
        },
        getActiveDrops: ot,
        getDrop: at,
        getDropEvents: lt,
        fireDropEvents: ct,
        defaults: {enabled: !1, accept: null, overlap: "pointer"}
    }, pt = ut;
    rt.default = pt;
    var ht = {};

    function ft(t) {
        var e = t.interaction, i = t.iEvent, n = t.phase;
        if ("gesture" === e.prepared.name) {
            var r = e.pointers.map((function (t) {
                return t.pointer
            })), o = "start" === n, a = "end" === n, l = e.interactable.options.deltaSource;
            if (i.touches = [r[0], r[1]], o) i.distance = N.touchDistance(r, l), i.box = N.touchBBox(r), i.scale = 1, i.ds = 0, i.angle = N.touchAngle(r, l), i.da = 0, e.gesture.startDistance = i.distance, e.gesture.startAngle = i.angle; else if (a) {
                var c = e.prevEvent;
                i.distance = c.distance, i.box = c.box, i.scale = c.scale, i.ds = 0, i.angle = c.angle, i.da = 0
            } else i.distance = N.touchDistance(r, l), i.box = N.touchBBox(r), i.scale = i.distance / e.gesture.startDistance, i.angle = N.touchAngle(r, l), i.ds = i.scale - e.gesture.scale, i.da = i.angle - e.gesture.angle;
            e.gesture.distance = i.distance, e.gesture.angle = i.angle, s.default.number(i.scale) && i.scale !== 1 / 0 && !isNaN(i.scale) && (e.gesture.scale = i.scale)
        }
    }

    Object.defineProperty(ht, "__esModule", {value: !0}), ht.default = void 0;
    var mt = {
        id: "actions/gesture",
        before: ["actions/drag", "actions/resize"],
        install: function (t) {
            var e = t.actions, i = t.Interactable, n = t.defaults;
            i.prototype.gesturable = function (t) {
                return s.default.object(t) ? (this.options.gesture.enabled = !1 !== t.enabled, this.setPerAction("gesture", t), this.setOnEvents("gesture", t), this) : s.default.bool(t) ? (this.options.gesture.enabled = t, this) : this.options.gesture
            }, e.map.gesture = mt, e.methodDict.gesture = "gesturable", n.actions.gesture = mt.defaults
        },
        listeners: {
            "interactions:action-start": ft,
            "interactions:action-move": ft,
            "interactions:action-end": ft,
            "interactions:new": function (t) {
                t.interaction.gesture = {angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0}
            },
            "auto-start:check": function (t) {
                if (!(t.interaction.pointers.length < 2)) {
                    var e = t.interactable.options.gesture;
                    if (e && e.enabled) return t.action = {name: "gesture"}, !1
                }
            }
        },
        defaults: {},
        getCursor: function () {
            return ""
        }
    }, gt = mt;
    ht.default = gt;
    var vt = {};

    function yt(t, e, i, n, r, o, a) {
        if (!e) return !1;
        if (!0 === e) {
            var l = s.default.number(o.width) ? o.width : o.right - o.left,
                c = s.default.number(o.height) ? o.height : o.bottom - o.top;
            if (a = Math.min(a, Math.abs(("left" === t || "right" === t ? l : c) / 2)), l < 0 && ("left" === t ? t = "right" : "right" === t && (t = "left")), c < 0 && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")), "left" === t) {
                var d = l >= 0 ? o.left : o.right;
                return i.x < d + a
            }
            if ("top" === t) {
                var u = c >= 0 ? o.top : o.bottom;
                return i.y < u + a
            }
            if ("right" === t) return i.x > (l >= 0 ? o.right : o.left) - a;
            if ("bottom" === t) return i.y > (c >= 0 ? o.bottom : o.top) - a
        }
        return !!s.default.element(n) && (s.default.element(e) ? e === n : x.matchesUpTo(n, e, r))
    }

    function bt(t) {
        var e = t.iEvent, i = t.interaction;
        if ("resize" === i.prepared.name && i.resizeAxes) {
            var n = e;
            i.interactable.options.resize.square ? ("y" === i.resizeAxes ? n.delta.x = n.delta.y : n.delta.y = n.delta.x, n.axes = "xy") : (n.axes = i.resizeAxes, "x" === i.resizeAxes ? n.delta.y = 0 : "y" === i.resizeAxes && (n.delta.x = 0))
        }
    }

    Object.defineProperty(vt, "__esModule", {value: !0}), vt.default = void 0;
    var wt = {
        id: "actions/resize",
        before: ["actions/drag"],
        install: function (t) {
            var e = t.actions, i = t.browser, n = t.Interactable, r = t.defaults;
            wt.cursors = function (t) {
                return t.isIe9 ? {
                    x: "e-resize",
                    y: "s-resize",
                    xy: "se-resize",
                    top: "n-resize",
                    left: "w-resize",
                    bottom: "s-resize",
                    right: "e-resize",
                    topleft: "se-resize",
                    bottomright: "se-resize",
                    topright: "ne-resize",
                    bottomleft: "ne-resize"
                } : {
                    x: "ew-resize",
                    y: "ns-resize",
                    xy: "nwse-resize",
                    top: "ns-resize",
                    left: "ew-resize",
                    bottom: "ns-resize",
                    right: "ew-resize",
                    topleft: "nwse-resize",
                    bottomright: "nwse-resize",
                    topright: "nesw-resize",
                    bottomleft: "nesw-resize"
                }
            }(i), wt.defaultMargin = i.supportsTouch || i.supportsPointerEvent ? 20 : 10, n.prototype.resizable = function (e) {
                return function (t, e, i) {
                    return s.default.object(e) ? (t.options.resize.enabled = !1 !== e.enabled, t.setPerAction("resize", e), t.setOnEvents("resize", e), s.default.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t.options.resize.axis = e.axis : null === e.axis && (t.options.resize.axis = i.defaults.actions.resize.axis), s.default.bool(e.preserveAspectRatio) ? t.options.resize.preserveAspectRatio = e.preserveAspectRatio : s.default.bool(e.square) && (t.options.resize.square = e.square), t) : s.default.bool(e) ? (t.options.resize.enabled = e, t) : t.options.resize
                }(this, e, t)
            }, e.map.resize = wt, e.methodDict.resize = "resizable", r.actions.resize = wt.defaults
        },
        listeners: {
            "interactions:new": function (t) {
                t.interaction.resizeAxes = "xy"
            }, "interactions:action-start": function (t) {
                !function (t) {
                    var e = t.iEvent, i = t.interaction;
                    if ("resize" === i.prepared.name && i.prepared.edges) {
                        var n = e, r = i.rect;
                        i._rects = {
                            start: (0, O.default)({}, r),
                            corrected: (0, O.default)({}, r),
                            previous: (0, O.default)({}, r),
                            delta: {left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0}
                        }, n.edges = i.prepared.edges, n.rect = i._rects.corrected, n.deltaRect = i._rects.delta
                    }
                }(t), bt(t)
            }, "interactions:action-move": function (t) {
                !function (t) {
                    var e = t.iEvent, i = t.interaction;
                    if ("resize" === i.prepared.name && i.prepared.edges) {
                        var n = e, r = i.interactable.options.resize.invert, s = "reposition" === r || "negate" === r,
                            o = i.rect, a = i._rects, l = a.start, c = a.corrected, d = a.delta, u = a.previous;
                        if ((0, O.default)(u, c), s) {
                            if ((0, O.default)(c, o), "reposition" === r) {
                                if (c.top > c.bottom) {
                                    var p = c.top;
                                    c.top = c.bottom, c.bottom = p
                                }
                                if (c.left > c.right) {
                                    var h = c.left;
                                    c.left = c.right, c.right = h
                                }
                            }
                        } else c.top = Math.min(o.top, l.bottom), c.bottom = Math.max(o.bottom, l.top), c.left = Math.min(o.left, l.right), c.right = Math.max(o.right, l.left);
                        for (var f in c.width = c.right - c.left, c.height = c.bottom - c.top, c) d[f] = c[f] - u[f];
                        n.edges = i.prepared.edges, n.rect = c, n.deltaRect = d
                    }
                }(t), bt(t)
            }, "interactions:action-end": function (t) {
                var e = t.iEvent, i = t.interaction;
                if ("resize" === i.prepared.name && i.prepared.edges) {
                    var n = e;
                    n.edges = i.prepared.edges, n.rect = i._rects.corrected, n.deltaRect = i._rects.delta
                }
            }, "auto-start:check": function (t) {
                var e = t.interaction, i = t.interactable, n = t.element, r = t.rect, o = t.buttons;
                if (r) {
                    var a = (0, O.default)({}, e.coords.cur.page), l = i.options.resize;
                    if (l && l.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (o & l.mouseButtons))) {
                        if (s.default.object(l.edges)) {
                            var c = {left: !1, right: !1, top: !1, bottom: !1};
                            for (var d in c) c[d] = yt(d, l.edges[d], a, e._latestPointer.eventTarget, n, r, l.margin || wt.defaultMargin);
                            c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t.action = {
                                name: "resize",
                                edges: c
                            })
                        } else {
                            var u = "y" !== l.axis && a.x > r.right - wt.defaultMargin,
                                p = "x" !== l.axis && a.y > r.bottom - wt.defaultMargin;
                            (u || p) && (t.action = {name: "resize", axes: (u ? "x" : "") + (p ? "y" : "")})
                        }
                        return !t.action && void 0
                    }
                }
            }
        },
        defaults: {square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none"},
        cursors: null,
        getCursor: function (t) {
            var e = t.edges, i = t.axis, n = t.name, r = wt.cursors, s = null;
            if (i) s = r[n + i]; else if (e) {
                for (var o = "", a = ["top", "bottom", "left", "right"], l = 0; l < a.length; l++) {
                    var c = a[l];
                    e[c] && (o += c)
                }
                s = r[o]
            }
            return s
        },
        defaultMargin: null
    }, _t = wt;
    vt.default = _t;
    var xt = {};
    Object.defineProperty(xt, "__esModule", {value: !0}), xt.default = void 0;
    var Et = {
        id: "actions", install: function (t) {
            t.usePlugin(ht.default), t.usePlugin(vt.default), t.usePlugin(d.default), t.usePlugin(rt.default)
        }
    };
    xt.default = Et;
    var Tt = {};
    Object.defineProperty(Tt, "__esModule", {value: !0}), Tt.default = void 0;
    var Ct, St, Mt = 0, Pt = {
        request: function (t) {
            return Ct(t)
        }, cancel: function (t) {
            return St(t)
        }, init: function (t) {
            if (Ct = t.requestAnimationFrame, St = t.cancelAnimationFrame, !Ct) for (var e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length; i++) {
                var n = e[i];
                Ct = t["".concat(n, "RequestAnimationFrame")], St = t["".concat(n, "CancelAnimationFrame")] || t["".concat(n, "CancelRequestAnimationFrame")]
            }
            Ct = Ct && Ct.bind(t), St = St && St.bind(t), Ct || (Ct = function (e) {
                var i = Date.now(), n = Math.max(0, 16 - (i - Mt)), r = t.setTimeout((function () {
                    e(i + n)
                }), n);
                return Mt = i + n, r
            }, St = function (t) {
                return clearTimeout(t)
            })
        }
    };
    Tt.default = Pt;
    var Ot = {};
    Object.defineProperty(Ot, "__esModule", {value: !0}), Ot.default = void 0, Ot.getContainer = kt, Ot.getScroll = At, Ot.getScrollSize = function (t) {
        return s.default.window(t) && (t = window.document.body), {x: t.scrollWidth, y: t.scrollHeight}
    }, Ot.getScrollSizeDelta = function (t, e) {
        var i = t.interaction, n = t.element, r = i && i.interactable.options[i.prepared.name].autoScroll;
        if (!r || !r.enabled) return e(), {x: 0, y: 0};
        var s = kt(r.container, i.interactable, n), o = At(s);
        e();
        var a = At(s);
        return {x: a.x - o.x, y: a.y - o.y}
    };
    var Dt = {
        defaults: {enabled: !1, margin: 60, container: null, speed: 300},
        now: Date.now,
        interaction: null,
        i: 0,
        x: 0,
        y: 0,
        isScrolling: !1,
        prevTime: 0,
        margin: 0,
        speed: 0,
        start: function (t) {
            Dt.isScrolling = !0, Tt.default.cancel(Dt.i), t.autoScroll = Dt, Dt.interaction = t, Dt.prevTime = Dt.now(), Dt.i = Tt.default.request(Dt.scroll)
        },
        stop: function () {
            Dt.isScrolling = !1, Dt.interaction && (Dt.interaction.autoScroll = null), Tt.default.cancel(Dt.i)
        },
        scroll: function () {
            var t = Dt.interaction, e = t.interactable, i = t.element, n = t.prepared.name, r = e.options[n].autoScroll,
                o = kt(r.container, e, i), a = Dt.now(), l = (a - Dt.prevTime) / 1e3, c = r.speed * l;
            if (c >= 1) {
                var d = {x: Dt.x * c, y: Dt.y * c};
                if (d.x || d.y) {
                    var u = At(o);
                    s.default.window(o) ? o.scrollBy(d.x, d.y) : o && (o.scrollLeft += d.x, o.scrollTop += d.y);
                    var p = At(o), h = {x: p.x - u.x, y: p.y - u.y};
                    (h.x || h.y) && e.fire({
                        type: "autoscroll",
                        target: i,
                        interactable: e,
                        delta: h,
                        interaction: t,
                        container: o
                    })
                }
                Dt.prevTime = a
            }
            Dt.isScrolling && (Tt.default.cancel(Dt.i), Dt.i = Tt.default.request(Dt.scroll))
        },
        check: function (t, e) {
            var i;
            return null == (i = t.options[e].autoScroll) ? void 0 : i.enabled
        },
        onInteractionMove: function (t) {
            var e = t.interaction, i = t.pointer;
            if (e.interacting() && Dt.check(e.interactable, e.prepared.name)) if (e.simulation) Dt.x = Dt.y = 0; else {
                var n, r, o, a, l = e.interactable, c = e.element, d = e.prepared.name, u = l.options[d].autoScroll,
                    p = kt(u.container, l, c);
                if (s.default.window(p)) a = i.clientX < Dt.margin, n = i.clientY < Dt.margin, r = i.clientX > p.innerWidth - Dt.margin, o = i.clientY > p.innerHeight - Dt.margin; else {
                    var h = x.getElementClientRect(p);
                    a = i.clientX < h.left + Dt.margin, n = i.clientY < h.top + Dt.margin, r = i.clientX > h.right - Dt.margin, o = i.clientY > h.bottom - Dt.margin
                }
                Dt.x = r ? 1 : a ? -1 : 0, Dt.y = o ? 1 : n ? -1 : 0, Dt.isScrolling || (Dt.margin = u.margin, Dt.speed = u.speed, Dt.start(e))
            }
        }
    };

    function kt(t, i, n) {
        return (s.default.string(t) ? (0, D.getStringOptionResult)(t, i, n) : t) || (0, e.getWindow)(n)
    }

    function At(t) {
        return s.default.window(t) && (t = window.document.body), {x: t.scrollLeft, y: t.scrollTop}
    }

    var It = {
        id: "auto-scroll", install: function (t) {
            var e = t.defaults, i = t.actions;
            t.autoScroll = Dt, Dt.now = function () {
                return t.now()
            }, i.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = Dt.defaults
        }, listeners: {
            "interactions:new": function (t) {
                t.interaction.autoScroll = null
            }, "interactions:destroy": function (t) {
                t.interaction.autoScroll = null, Dt.stop(), Dt.interaction && (Dt.interaction = null)
            }, "interactions:stop": Dt.stop, "interactions:action-move": function (t) {
                return Dt.onInteractionMove(t)
            }
        }
    }, zt = It;
    Ot.default = zt;
    var Lt = {};
    Object.defineProperty(Lt, "__esModule", {value: !0}), Lt.copyAction = function (t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t
    }, Lt.sign = void 0, Lt.warnOnce = function (t, i) {
        var n = !1;
        return function () {
            return n || (e.window.console.warn(i), n = !0), t.apply(this, arguments)
        }
    }, Lt.sign = function (t) {
        return t >= 0 ? 1 : -1
    };
    var $t = {};

    function jt(t) {
        return s.default.bool(t) ? (this.options.styleCursor = t, this) : null === t ? (delete this.options.styleCursor, this) : this.options.styleCursor
    }

    function Nt(t) {
        return s.default.func(t) ? (this.options.actionChecker = t, this) : null === t ? (delete this.options.actionChecker, this) : this.options.actionChecker
    }

    Object.defineProperty($t, "__esModule", {value: !0}), $t.default = void 0;
    var Ft = {
        id: "auto-start/interactableMethods", install: function (t) {
            var e = t.Interactable;
            e.prototype.getAction = function (e, i, n, r) {
                var s = function (t, e, i, n, r) {
                    var s = t.getRect(n), o = {
                        action: null,
                        interactable: t,
                        interaction: i,
                        element: n,
                        rect: s,
                        buttons: e.buttons || {0: 1, 1: 4, 3: 8, 4: 16}[e.button]
                    };
                    return r.fire("auto-start:check", o), o.action
                }(this, i, n, r, t);
                return this.options.actionChecker ? this.options.actionChecker(e, i, s, this, r, n) : s
            }, e.prototype.ignoreFrom = (0, Lt.warnOnce)((function (t) {
                return this._backCompatOption("ignoreFrom", t)
            }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = (0, Lt.warnOnce)((function (t) {
                return this._backCompatOption("allowFrom", t)
            }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = Nt, e.prototype.styleCursor = jt
        }
    };
    $t.default = Ft;
    var Rt = {};

    function Bt(t, e, i, n, r) {
        return e.testIgnoreAllow(e.options[t.name], i, n) && e.options[t.name].enabled && qt(e, i, t, r) ? t : null
    }

    function Ht(t, e, i, n, r, s, o) {
        for (var a = 0, l = n.length; a < l; a++) {
            var c = n[a], d = r[a], u = c.getAction(e, i, t, d);
            if (u) {
                var p = Bt(u, c, d, s, o);
                if (p) return {action: p, interactable: c, element: d}
            }
        }
        return {action: null, interactable: null, element: null}
    }

    function Wt(t, e, i, n, r) {
        var o = [], a = [], l = n;

        function c(t) {
            o.push(t), a.push(l)
        }

        for (; s.default.element(l);) {
            o = [], a = [], r.interactables.forEachMatch(l, c);
            var d = Ht(t, e, i, o, a, n, r);
            if (d.action && !d.interactable.options[d.action.name].manualStart) return d;
            l = x.parentNode(l)
        }
        return {action: null, interactable: null, element: null}
    }

    function Yt(t, e, i) {
        var n = e.action, r = e.interactable, s = e.element;
        n = n || {name: null}, t.interactable = r, t.element = s, (0, Lt.copyAction)(t.prepared, n), t.rect = r && n.name ? r.getRect(s) : null, Gt(t, i), i.fire("autoStart:prepared", {interaction: t})
    }

    function qt(t, e, i, n) {
        var r = t.options, s = r[i.name].max, o = r[i.name].maxPerElement, a = n.autoStart.maxInteractions, l = 0,
            c = 0, d = 0;
        if (!(s && o && a)) return !1;
        for (var u = 0; u < n.interactions.list.length; u++) {
            var p = n.interactions.list[u], h = p.prepared.name;
            if (p.interacting()) {
                if (++l >= a) return !1;
                if (p.interactable === t) {
                    if ((c += h === i.name ? 1 : 0) >= s) return !1;
                    if (p.element === e && (d++, h === i.name && d >= o)) return !1
                }
            }
        }
        return a > 0
    }

    function Xt(t, e) {
        return s.default.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions
    }

    function Vt(t, e, i) {
        var n = i.autoStart.cursorElement;
        n && n !== t && (n.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, i.autoStart.cursorElement = e ? t : null
    }

    function Gt(t, e) {
        var i = t.interactable, n = t.element, r = t.prepared;
        if ("mouse" === t.pointerType && i && i.options.styleCursor) {
            var o = "";
            if (r.name) {
                var a = i.options[r.name].cursorChecker;
                o = s.default.func(a) ? a(r, i, n, t._interacting) : e.actions.map[r.name].getCursor(r)
            }
            Vt(t.element, o || "", e)
        } else e.autoStart.cursorElement && Vt(e.autoStart.cursorElement, "", e)
    }

    Object.defineProperty(Rt, "__esModule", {value: !0}), Rt.default = void 0;
    var Ut = {
        id: "auto-start/base", before: ["actions"], install: function (t) {
            var e = t.interactStatic, i = t.defaults;
            t.usePlugin($t.default), i.base.actionChecker = null, i.base.styleCursor = !0, (0, O.default)(i.perAction, {
                manualStart: !1,
                max: 1 / 0,
                maxPerElement: 1,
                allowFrom: null,
                ignoreFrom: null,
                mouseButtons: 1
            }), e.maxInteractions = function (e) {
                return Xt(e, t)
            }, t.autoStart = {maxInteractions: 1 / 0, withinInteractionLimit: qt, cursorElement: null}
        }, listeners: {
            "interactions:down": function (t, e) {
                var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget;
                i.interacting() || Yt(i, Wt(i, n, r, s, e), e)
            }, "interactions:move": function (t, e) {
                !function (t, e) {
                    var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget;
                    "mouse" !== i.pointerType || i.pointerIsDown || i.interacting() || Yt(i, Wt(i, n, r, s, e), e)
                }(t, e), function (t, e) {
                    var i = t.interaction;
                    if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
                        e.fire("autoStart:before-start", t);
                        var n = i.interactable, r = i.prepared.name;
                        r && n && (n.options[r].manualStart || !qt(n, i.element, i.prepared, e) ? i.stop() : (i.start(i.prepared, n, i.element), Gt(i, e)))
                    }
                }(t, e)
            }, "interactions:stop": function (t, e) {
                var i = t.interaction, n = i.interactable;
                n && n.options.styleCursor && Vt(i.element, "", e)
            }
        }, maxInteractions: Xt, withinInteractionLimit: qt, validateAction: Bt
    }, Zt = Ut;
    Rt.default = Zt;
    var Kt = {};
    Object.defineProperty(Kt, "__esModule", {value: !0}), Kt.default = void 0;
    var Qt = {
        id: "auto-start/dragAxis", listeners: {
            "autoStart:before-start": function (t, e) {
                var i = t.interaction, n = t.eventTarget, r = t.dx, o = t.dy;
                if ("drag" === i.prepared.name) {
                    var a = Math.abs(r), l = Math.abs(o), c = i.interactable.options.drag, d = c.startAxis,
                        u = a > l ? "x" : a < l ? "y" : "xy";
                    if (i.prepared.axis = "start" === c.lockAxis ? u[0] : c.lockAxis, "xy" !== u && "xy" !== d && d !== u) {
                        i.prepared.name = null;
                        for (var p = n, h = function (t) {
                            if (t !== i.interactable) {
                                var r = i.interactable.options.drag;
                                if (!r.manualStart && t.testIgnoreAllow(r, p, n)) {
                                    var s = t.getAction(i.downPointer, i.downEvent, i, p);
                                    if (s && "drag" === s.name && function (t, e) {
                                        if (!e) return !1;
                                        var i = e.options.drag.startAxis;
                                        return "xy" === t || "xy" === i || i === t
                                    }(u, t) && Rt.default.validateAction(s, t, p, n, e)) return t
                                }
                            }
                        }; s.default.element(p);) {
                            var f = e.interactables.forEachMatch(p, h);
                            if (f) {
                                i.prepared.name = "drag", i.interactable = f, i.element = p;
                                break
                            }
                            p = (0, x.parentNode)(p)
                        }
                    }
                }
            }
        }
    };
    Kt.default = Qt;
    var Jt = {};

    function te(t) {
        var e = t.prepared && t.prepared.name;
        if (!e) return null;
        var i = t.interactable.options;
        return i[e].hold || i[e].delay
    }

    Object.defineProperty(Jt, "__esModule", {value: !0}), Jt.default = void 0;
    var ee = {
        id: "auto-start/hold", install: function (t) {
            var e = t.defaults;
            t.usePlugin(Rt.default), e.perAction.hold = 0, e.perAction.delay = 0
        }, listeners: {
            "interactions:new": function (t) {
                t.interaction.autoStartHoldTimer = null
            }, "autoStart:prepared": function (t) {
                var e = t.interaction, i = te(e);
                i > 0 && (e.autoStartHoldTimer = setTimeout((function () {
                    e.start(e.prepared, e.interactable, e.element)
                }), i))
            }, "interactions:move": function (t) {
                var e = t.interaction, i = t.duplicate;
                e.autoStartHoldTimer && e.pointerWasMoved && !i && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null)
            }, "autoStart:before-start": function (t) {
                var e = t.interaction;
                te(e) > 0 && (e.prepared.name = null)
            }
        }, getHoldDuration: te
    }, ie = ee;
    Jt.default = ie;
    var ne = {};
    Object.defineProperty(ne, "__esModule", {value: !0}), ne.default = void 0;
    var re = {
        id: "auto-start", install: function (t) {
            t.usePlugin(Rt.default), t.usePlugin(Jt.default), t.usePlugin(Kt.default)
        }
    };
    ne.default = re;
    var se = {};

    function oe(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : s.default.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
    }

    function ae(t) {
        var e = t.interaction, i = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(i)
    }

    function le(t) {
        var i = t.Interactable;
        i.prototype.preventDefault = oe, i.prototype.checkAndPreventDefault = function (i) {
            return function (t, i, n) {
                var r = t.options.preventDefault;
                if ("never" !== r) if ("always" !== r) {
                    if (i.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
                        var o = (0, e.getWindow)(n.target).document, a = i.getDocOptions(o);
                        if (!a || !a.events || !1 !== a.events.passive) return
                    }
                    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || s.default.element(n.target) && (0, x.matchesSelector)(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault()
                } else n.preventDefault()
            }(this, t, i)
        }, t.interactions.docEvents.push({
            type: "dragstart", listener: function (e) {
                for (var i = 0; i < t.interactions.list.length; i++) {
                    var n = t.interactions.list[i];
                    if (n.element && (n.element === e.target || (0, x.nodeContains)(n.element, e.target))) return void n.interactable.checkAndPreventDefault(e)
                }
            }
        })
    }

    Object.defineProperty(se, "__esModule", {value: !0}), se.default = void 0, se.install = le;
    var ce = {
        id: "core/interactablePreventDefault",
        install: le,
        listeners: ["down", "move", "up", "cancel"].reduce((function (t, e) {
            return t["interactions:".concat(e)] = ae, t
        }), {})
    };
    se.default = ce;
    var de = {};
    Object.defineProperty(de, "__esModule", {value: !0}), de.default = void 0, de.default = {};
    var ue, pe = {};
    Object.defineProperty(pe, "__esModule", {value: !0}), pe.default = void 0, function (t) {
        t.touchAction = "touchAction", t.boxSizing = "boxSizing", t.noListeners = "noListeners"
    }(ue || (ue = {})), ue.touchAction, ue.boxSizing, ue.noListeners;
    pe.default = {
        id: "dev-tools", install: function () {
        }
    };
    var he = {};
    Object.defineProperty(he, "__esModule", {value: !0}), he.default = function t(e) {
        var i = {};
        for (var n in e) {
            var r = e[n];
            s.default.plainObject(r) ? i[n] = t(r) : s.default.array(r) ? i[n] = G.from(r) : i[n] = r
        }
        return i
    };
    var fe = {};

    function me(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
                var n, r, s = [], o = !0, a = !1;
                try {
                    for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, r = t
                } finally {
                    try {
                        o || null == i.return || i.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return ge(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ge(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ge(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function ve(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(fe, "__esModule", {value: !0}), fe.default = void 0, fe.getRectOffset = we;
    var ye = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), ve(this, "states", []), ve(this, "startOffset", {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }), ve(this, "startDelta", void 0), ve(this, "result", void 0), ve(this, "endResult", void 0), ve(this, "edges", void 0), ve(this, "interaction", void 0), this.interaction = e, this.result = be()
        }

        var e, i;
        return e = t, (i = [{
            key: "start", value: function (t, e) {
                var i = t.phase, n = this.interaction, r = function (t) {
                    var e = t.interactable.options[t.prepared.name], i = e.modifiers;
                    return i && i.length ? i : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function (t) {
                        var i = e[t];
                        return i && i.enabled && {options: i, methods: i._methods}
                    })).filter((function (t) {
                        return !!t
                    }))
                }(n);
                this.prepareStates(r), this.edges = (0, O.default)({}, n.edges), this.startOffset = we(n.rect, e), this.startDelta = {
                    x: 0,
                    y: 0
                };
                var s = this.fillArg({phase: i, pageCoords: e, preEnd: !1});
                return this.result = be(), this.startAll(s), this.result = this.setAll(s)
            }
        }, {
            key: "fillArg", value: function (t) {
                var e = this.interaction;
                return t.interaction = e, t.interactable = e.interactable, t.element = e.element, t.rect = t.rect || e.rect, t.edges = this.edges, t.startOffset = this.startOffset, t
            }
        }, {
            key: "startAll", value: function (t) {
                for (var e = 0; e < this.states.length; e++) {
                    var i = this.states[e];
                    i.methods.start && (t.state = i, i.methods.start(t))
                }
            }
        }, {
            key: "setAll", value: function (t) {
                var e = t.phase, i = t.preEnd, n = t.skipModifiers, r = t.rect;
                t.coords = (0, O.default)({}, t.pageCoords), t.rect = (0, O.default)({}, r);
                for (var s = n ? this.states.slice(n) : this.states, o = be(t.coords, t.rect), a = 0; a < s.length; a++) {
                    var l, c = s[a], d = c.options, u = (0, O.default)({}, t.coords), p = null;
                    null != (l = c.methods) && l.set && this.shouldDo(d, i, e) && (t.state = c, p = c.methods.set(t), D.addEdges(this.interaction.edges, t.rect, {
                        x: t.coords.x - u.x,
                        y: t.coords.y - u.y
                    })), o.eventProps.push(p)
                }
                o.delta.x = t.coords.x - t.pageCoords.x, o.delta.y = t.coords.y - t.pageCoords.y, o.rectDelta.left = t.rect.left - r.left, o.rectDelta.right = t.rect.right - r.right, o.rectDelta.top = t.rect.top - r.top, o.rectDelta.bottom = t.rect.bottom - r.bottom;
                var h = this.result.coords, f = this.result.rect;
                if (h && f) {
                    var m = o.rect.left !== f.left || o.rect.right !== f.right || o.rect.top !== f.top || o.rect.bottom !== f.bottom;
                    o.changed = m || h.x !== o.coords.x || h.y !== o.coords.y
                }
                return o
            }
        }, {
            key: "applyToInteraction", value: function (t) {
                var e = this.interaction, i = t.phase, n = e.coords.cur, r = e.coords.start, s = this.result,
                    o = this.startDelta, a = s.delta;
                "start" === i && (0, O.default)(this.startDelta, s.delta);
                for (var l = 0; l < 2; l++) {
                    var c = me([[r, o], [n, a]][l], 2), d = c[0], u = c[1];
                    d.page.x += u.x, d.page.y += u.y, d.client.x += u.x, d.client.y += u.y
                }
                var p = this.result.rectDelta, h = t.rect || e.rect;
                h.left += p.left, h.right += p.right, h.top += p.top, h.bottom += p.bottom, h.width = h.right - h.left, h.height = h.bottom - h.top
            }
        }, {
            key: "setAndApply", value: function (t) {
                var e = this.interaction, i = t.phase, n = t.preEnd, r = t.skipModifiers, s = this.setAll(this.fillArg({
                    preEnd: n,
                    phase: i,
                    pageCoords: t.modifiedCoords || e.coords.cur.page
                }));
                if (this.result = s, !s.changed && (!r || r < this.states.length) && e.interacting()) return !1;
                if (t.modifiedCoords) {
                    var o = e.coords.cur.page, a = {x: t.modifiedCoords.x - o.x, y: t.modifiedCoords.y - o.y};
                    s.coords.x += a.x, s.coords.y += a.y, s.delta.x += a.x, s.delta.y += a.y
                }
                this.applyToInteraction(t)
            }
        }, {
            key: "beforeEnd", value: function (t) {
                var e = t.interaction, i = t.event, n = this.states;
                if (n && n.length) {
                    for (var r = !1, s = 0; s < n.length; s++) {
                        var o = n[s];
                        t.state = o;
                        var a = o.options, l = o.methods, c = l.beforeEnd && l.beforeEnd(t);
                        if (c) return this.endResult = c, !1;
                        r = r || !r && this.shouldDo(a, !0, t.phase, !0)
                    }
                    r && e.move({event: i, preEnd: !0})
                }
            }
        }, {
            key: "stop", value: function (t) {
                var e = t.interaction;
                if (this.states && this.states.length) {
                    var i = (0, O.default)({
                        states: this.states,
                        interactable: e.interactable,
                        element: e.element,
                        rect: null
                    }, t);
                    this.fillArg(i);
                    for (var n = 0; n < this.states.length; n++) {
                        var r = this.states[n];
                        i.state = r, r.methods.stop && r.methods.stop(i)
                    }
                    this.states = null, this.endResult = null
                }
            }
        }, {
            key: "prepareStates", value: function (t) {
                this.states = [];
                for (var e = 0; e < t.length; e++) {
                    var i = t[e], n = i.options, r = i.methods, s = i.name;
                    this.states.push({options: n, methods: r, index: e, name: s})
                }
                return this.states
            }
        }, {
            key: "restoreInteractionCoords", value: function (t) {
                var e = t.interaction, i = e.coords, n = e.rect, r = e.modification;
                if (r.result) {
                    for (var s = r.startDelta, o = r.result, a = o.delta, l = o.rectDelta, c = [[i.start, s], [i.cur, a]], d = 0; d < c.length; d++) {
                        var u = me(c[d], 2), p = u[0], h = u[1];
                        p.page.x -= h.x, p.page.y -= h.y, p.client.x -= h.x, p.client.y -= h.y
                    }
                    n.left -= l.left, n.right -= l.right, n.top -= l.top, n.bottom -= l.bottom
                }
            }
        }, {
            key: "shouldDo", value: function (t, e, i, n) {
                return !(!t || !1 === t.enabled || n && !t.endOnly || t.endOnly && !e || "start" === i && !t.setStart)
            }
        }, {
            key: "copyFrom", value: function (t) {
                this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.edges = t.edges, this.states = t.states.map((function (t) {
                    return (0, he.default)(t)
                })), this.result = be((0, O.default)({}, t.result.coords), (0, O.default)({}, t.result.rect))
            }
        }, {
            key: "destroy", value: function () {
                for (var t in this) this[t] = null
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function be(t, e) {
        return {
            rect: e,
            coords: t,
            delta: {x: 0, y: 0},
            rectDelta: {left: 0, right: 0, top: 0, bottom: 0},
            eventProps: [],
            changed: !0
        }
    }

    function we(t, e) {
        return t ? {left: e.x - t.left, top: e.y - t.top, right: t.right - e.x, bottom: t.bottom - e.y} : {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }

    fe.default = ye;
    var _e = {};

    function xe(t) {
        var e = t.iEvent, i = t.interaction.modification.result;
        i && (e.modifiers = i.eventProps)
    }

    Object.defineProperty(_e, "__esModule", {value: !0}), _e.addEventModifiers = xe, _e.default = void 0, _e.makeModifier = function (t, e) {
        var i = t.defaults, n = {start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop}, r = function (t) {
            var r = t || {};
            for (var s in r.enabled = !1 !== r.enabled, i) s in r || (r[s] = i[s]);
            var o = {
                options: r, methods: n, name: e, enable: function () {
                    return r.enabled = !0, o
                }, disable: function () {
                    return r.enabled = !1, o
                }
            };
            return o
        };
        return e && "string" == typeof e && (r._defaults = i, r._methods = n), r
    };
    var Ee = {
        id: "modifiers/base", before: ["actions"], install: function (t) {
            t.defaults.perAction.modifiers = []
        }, listeners: {
            "interactions:new": function (t) {
                var e = t.interaction;
                e.modification = new fe.default(e)
            },
            "interactions:before-action-start": function (t) {
                var e = t.interaction.modification;
                e.start(t, t.interaction.coords.start.page), t.interaction.edges = e.edges, e.applyToInteraction(t)
            },
            "interactions:before-action-move": function (t) {
                return t.interaction.modification.setAndApply(t)
            },
            "interactions:before-action-end": function (t) {
                return t.interaction.modification.beforeEnd(t)
            },
            "interactions:action-start": xe,
            "interactions:action-move": xe,
            "interactions:action-end": xe,
            "interactions:after-action-start": function (t) {
                return t.interaction.modification.restoreInteractionCoords(t)
            },
            "interactions:after-action-move": function (t) {
                return t.interaction.modification.restoreInteractionCoords(t)
            },
            "interactions:stop": function (t) {
                return t.interaction.modification.stop(t)
            }
        }
    }, Te = Ee;
    _e.default = Te;
    var Ce = {};
    Object.defineProperty(Ce, "__esModule", {value: !0}), Ce.defaults = void 0, Ce.defaults = {
        base: {
            preventDefault: "auto",
            deltaSource: "page"
        }, perAction: {enabled: !1, origin: {x: 0, y: 0}}, actions: {}
    };
    var Se = {};

    function Me(t) {
        return Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Me(t)
    }

    function Pe(t, e) {
        return Pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, Pe(t, e)
    }

    function Oe(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function De(t) {
        return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, De(t)
    }

    function ke(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(Se, "__esModule", {value: !0}), Se.InteractEvent = void 0;
    var Ae = function (t) {
        !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && Pe(t, e)
        }(o, t);
        var e, i, n, r, s = (n = o, r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }(), function () {
            var t, e = De(n);
            if (r) {
                var i = De(this).constructor;
                t = Reflect.construct(e, arguments, i)
            } else t = e.apply(this, arguments);
            return function (t, e) {
                if (e && ("object" === Me(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Oe(t)
            }(this, t)
        });

        function o(t, e, i, n, r, a, l) {
            var c;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, o), ke(Oe(c = s.call(this, t)), "relatedTarget", null), ke(Oe(c), "screenX", void 0), ke(Oe(c), "screenY", void 0), ke(Oe(c), "button", void 0), ke(Oe(c), "buttons", void 0), ke(Oe(c), "ctrlKey", void 0), ke(Oe(c), "shiftKey", void 0), ke(Oe(c), "altKey", void 0), ke(Oe(c), "metaKey", void 0), ke(Oe(c), "page", void 0), ke(Oe(c), "client", void 0), ke(Oe(c), "delta", void 0), ke(Oe(c), "rect", void 0), ke(Oe(c), "x0", void 0), ke(Oe(c), "y0", void 0), ke(Oe(c), "t0", void 0), ke(Oe(c), "dt", void 0), ke(Oe(c), "duration", void 0), ke(Oe(c), "clientX0", void 0), ke(Oe(c), "clientY0", void 0), ke(Oe(c), "velocity", void 0), ke(Oe(c), "speed", void 0), ke(Oe(c), "swipe", void 0), ke(Oe(c), "axes", void 0), ke(Oe(c), "preEnd", void 0), r = r || t.element;
            var d = t.interactable, u = (d && d.options || Ce.defaults).deltaSource, p = (0, I.default)(d, r, i),
                h = "start" === n, f = "end" === n, m = h ? Oe(c) : t.prevEvent, g = h ? t.coords.start : f ? {
                    page: m.page,
                    client: m.client,
                    timeStamp: t.coords.cur.timeStamp
                } : t.coords.cur;
            return c.page = (0, O.default)({}, g.page), c.client = (0, O.default)({}, g.client), c.rect = (0, O.default)({}, t.rect), c.timeStamp = g.timeStamp, f || (c.page.x -= p.x, c.page.y -= p.y, c.client.x -= p.x, c.client.y -= p.y), c.ctrlKey = e.ctrlKey, c.altKey = e.altKey, c.shiftKey = e.shiftKey, c.metaKey = e.metaKey, c.button = e.button, c.buttons = e.buttons, c.target = r, c.currentTarget = r, c.preEnd = a, c.type = l || i + (n || ""), c.interactable = d, c.t0 = h ? t.pointers[t.pointers.length - 1].downTime : m.t0, c.x0 = t.coords.start.page.x - p.x, c.y0 = t.coords.start.page.y - p.y, c.clientX0 = t.coords.start.client.x - p.x, c.clientY0 = t.coords.start.client.y - p.y, c.delta = h || f ? {
                x: 0,
                y: 0
            } : {
                x: c[u].x - m[u].x,
                y: c[u].y - m[u].y
            }, c.dt = t.coords.delta.timeStamp, c.duration = c.timeStamp - c.t0, c.velocity = (0, O.default)({}, t.coords.velocity[u]), c.speed = (0, $.default)(c.velocity.x, c.velocity.y), c.swipe = f || "inertiastart" === n ? c.getSwipe() : null, c
        }

        return e = o, (i = [{
            key: "getSwipe", value: function () {
                var t = this._interaction;
                if (t.prevEvent.speed < 600 || this.timeStamp - t.prevEvent.timeStamp > 150) return null;
                var e = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
                e < 0 && (e += 360);
                var i = 112.5 <= e && e < 247.5, n = 202.5 <= e && e < 337.5;
                return {
                    up: n,
                    down: !n && 22.5 <= e && e < 157.5,
                    left: i,
                    right: !i && (292.5 <= e || e < 67.5),
                    angle: e,
                    speed: t.prevEvent.speed,
                    velocity: {x: t.prevEvent.velocityX, y: t.prevEvent.velocityY}
                }
            }
        }, {
            key: "preventDefault", value: function () {
            }
        }, {
            key: "stopImmediatePropagation", value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
            }
        }, {
            key: "stopPropagation", value: function () {
                this.propagationStopped = !0
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), o
    }(q.BaseEvent);
    Se.InteractEvent = Ae, Object.defineProperties(Ae.prototype, {
        pageX: {
            get: function () {
                return this.page.x
            }, set: function (t) {
                this.page.x = t
            }
        }, pageY: {
            get: function () {
                return this.page.y
            }, set: function (t) {
                this.page.y = t
            }
        }, clientX: {
            get: function () {
                return this.client.x
            }, set: function (t) {
                this.client.x = t
            }
        }, clientY: {
            get: function () {
                return this.client.y
            }, set: function (t) {
                this.client.y = t
            }
        }, dx: {
            get: function () {
                return this.delta.x
            }, set: function (t) {
                this.delta.x = t
            }
        }, dy: {
            get: function () {
                return this.delta.y
            }, set: function (t) {
                this.delta.y = t
            }
        }, velocityX: {
            get: function () {
                return this.velocity.x
            }, set: function (t) {
                this.velocity.x = t
            }
        }, velocityY: {
            get: function () {
                return this.velocity.y
            }, set: function (t) {
                this.velocity.y = t
            }
        }
    });
    var Ie = {};

    function ze(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Le(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(Ie, "__esModule", {value: !0}), Ie.PointerInfo = void 0;
    var $e = function (t, e, i) {
        return e && ze(t.prototype, e), i && ze(t, i), Object.defineProperty(t, "prototype", {writable: !1}), t
    }((function t(e, i, n, r, s) {
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), Le(this, "id", void 0), Le(this, "pointer", void 0), Le(this, "event", void 0), Le(this, "downTime", void 0), Le(this, "downTarget", void 0), this.id = e, this.pointer = i, this.event = n, this.downTime = r, this.downTarget = s
    }));
    Ie.PointerInfo = $e;
    var je, Ne, Fe = {};

    function Re(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(Fe, "__esModule", {value: !0}), Fe.Interaction = void 0, Object.defineProperty(Fe, "PointerInfo", {
        enumerable: !0,
        get: function () {
            return Ie.PointerInfo
        }
    }), Fe.default = Fe._ProxyValues = Fe._ProxyMethods = void 0, Fe._ProxyValues = je, function (t) {
        t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = ""
    }(je || (Fe._ProxyValues = je = {})), Fe._ProxyMethods = Ne, function (t) {
        t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = ""
    }(Ne || (Fe._ProxyMethods = Ne = {}));
    var Be = 0, He = function () {
        function t(e) {
            var i = this, n = e.pointerType, r = e.scopeFire;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Re(this, "interactable", null), Re(this, "element", null), Re(this, "rect", null), Re(this, "_rects", void 0), Re(this, "edges", null), Re(this, "_scopeFire", void 0), Re(this, "prepared", {
                name: null,
                axis: null,
                edges: null
            }), Re(this, "pointerType", void 0), Re(this, "pointers", []), Re(this, "downEvent", null), Re(this, "downPointer", {}), Re(this, "_latestPointer", {
                pointer: null,
                event: null,
                eventTarget: null
            }), Re(this, "prevEvent", null), Re(this, "pointerIsDown", !1), Re(this, "pointerWasMoved", !1), Re(this, "_interacting", !1), Re(this, "_ending", !1), Re(this, "_stopped", !0), Re(this, "_proxy", null), Re(this, "simulation", null), Re(this, "doMove", (0, Lt.warnOnce)((function (t) {
                this.move(t)
            }), "The interaction.doMove() method has been renamed to interaction.move()")), Re(this, "coords", {
                start: N.newCoords(),
                prev: N.newCoords(),
                cur: N.newCoords(),
                delta: N.newCoords(),
                velocity: N.newCoords()
            }), Re(this, "_id", Be++), this._scopeFire = r, this.pointerType = n;
            var s = this;
            this._proxy = {};
            var o = function (t) {
                Object.defineProperty(i._proxy, t, {
                    get: function () {
                        return s[t]
                    }
                })
            };
            for (var a in je) o(a);
            var l = function (t) {
                Object.defineProperty(i._proxy, t, {
                    value: function () {
                        return s[t].apply(s, arguments)
                    }
                })
            };
            for (var c in Ne) l(c);
            this._scopeFire("interactions:new", {interaction: this})
        }

        var e, i;
        return e = t, i = [{
            key: "pointerMoveTolerance", get: function () {
                return 1
            }
        }, {
            key: "pointerDown", value: function (t, e, i) {
                var n = this.updatePointer(t, e, i, !0), r = this.pointers[n];
                this._scopeFire("interactions:down", {
                    pointer: t,
                    event: e,
                    eventTarget: i,
                    pointerIndex: n,
                    pointerInfo: r,
                    type: "down",
                    interaction: this
                })
            }
        }, {
            key: "start", value: function (t, e, i) {
                return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t.name ? 2 : 1) || !e.options[t.name].enabled) && ((0, Lt.copyAction)(this.prepared, t), this.interactable = e, this.element = i, this.rect = e.getRect(i), this.edges = this.prepared.edges ? (0, O.default)({}, this.prepared.edges) : {
                    left: !0,
                    right: !0,
                    top: !0,
                    bottom: !0
                }, this._stopped = !1, this._interacting = this._doPhase({
                    interaction: this,
                    event: this.downEvent,
                    phase: "start"
                }) && !this._stopped, this._interacting)
            }
        }, {
            key: "pointerMove", value: function (t, e, i) {
                this.simulation || this.modification && this.modification.endResult || this.updatePointer(t, e, i, !1);
                var n, r,
                    s = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                this.pointerIsDown && !this.pointerWasMoved && (n = this.coords.cur.client.x - this.coords.start.client.x, r = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, $.default)(n, r) > this.pointerMoveTolerance);
                var o = this.getPointerIndex(t), a = {
                    pointer: t,
                    pointerIndex: o,
                    pointerInfo: this.pointers[o],
                    event: e,
                    type: "move",
                    eventTarget: i,
                    dx: n,
                    dy: r,
                    duplicate: s,
                    interaction: this
                };
                s || N.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", a), s || this.simulation || (this.interacting() && (a.type = null, this.move(a)), this.pointerWasMoved && N.copyCoords(this.coords.prev, this.coords.cur))
            }
        }, {
            key: "move", value: function (t) {
                t && t.event || N.setZeroCoords(this.coords.delta), (t = (0, O.default)({
                    pointer: this._latestPointer.pointer,
                    event: this._latestPointer.event,
                    eventTarget: this._latestPointer.eventTarget,
                    interaction: this
                }, t || {})).phase = "move", this._doPhase(t)
            }
        }, {
            key: "pointerUp", value: function (t, e, i, n) {
                var r = this.getPointerIndex(t);
                -1 === r && (r = this.updatePointer(t, e, i, !1));
                var s = /cancel$/i.test(e.type) ? "cancel" : "up";
                this._scopeFire("interactions:".concat(s), {
                    pointer: t,
                    pointerIndex: r,
                    pointerInfo: this.pointers[r],
                    event: e,
                    eventTarget: i,
                    type: s,
                    curEventTarget: n,
                    interaction: this
                }), this.simulation || this.end(e), this.removePointer(t, e)
            }
        }, {
            key: "documentBlur", value: function (t) {
                this.end(t), this._scopeFire("interactions:blur", {event: t, type: "blur", interaction: this})
            }
        }, {
            key: "end", value: function (t) {
                var e;
                this._ending = !0, t = t || this._latestPointer.event, this.interacting() && (e = this._doPhase({
                    event: t,
                    interaction: this,
                    phase: "end"
                })), this._ending = !1, !0 === e && this.stop()
            }
        }, {
            key: "currentAction", value: function () {
                return this._interacting ? this.prepared.name : null
            }
        }, {
            key: "interacting", value: function () {
                return this._interacting
            }
        }, {
            key: "stop", value: function () {
                this._scopeFire("interactions:stop", {interaction: this}), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null
            }
        }, {
            key: "getPointerIndex", value: function (t) {
                var e = N.getPointerId(t);
                return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : G.findIndex(this.pointers, (function (t) {
                    return t.id === e
                }))
            }
        }, {
            key: "getPointerInfo", value: function (t) {
                return this.pointers[this.getPointerIndex(t)]
            }
        }, {
            key: "updatePointer", value: function (t, e, i, n) {
                var r = N.getPointerId(t), s = this.getPointerIndex(t), o = this.pointers[s];
                return n = !1 !== n && (n || /(down|start)$/i.test(e.type)), o ? o.pointer = t : (o = new Ie.PointerInfo(r, t, e, null, null), s = this.pointers.length, this.pointers.push(o)), N.setCoords(this.coords.cur, this.pointers.map((function (t) {
                    return t.pointer
                })), this._now()), N.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), n && (this.pointerIsDown = !0, o.downTime = this.coords.cur.timeStamp, o.downTarget = i, N.pointerExtend(this.downPointer, t), this.interacting() || (N.copyCoords(this.coords.start, this.coords.cur), N.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t, e, i), this._scopeFire("interactions:update-pointer", {
                    pointer: t,
                    event: e,
                    eventTarget: i,
                    down: n,
                    pointerInfo: o,
                    pointerIndex: s,
                    interaction: this
                }), s
            }
        }, {
            key: "removePointer", value: function (t, e) {
                var i = this.getPointerIndex(t);
                if (-1 !== i) {
                    var n = this.pointers[i];
                    this._scopeFire("interactions:remove-pointer", {
                        pointer: t,
                        event: e,
                        eventTarget: null,
                        pointerIndex: i,
                        pointerInfo: n,
                        interaction: this
                    }), this.pointers.splice(i, 1), this.pointerIsDown = !1
                }
            }
        }, {
            key: "_updateLatestPointer", value: function (t, e, i) {
                this._latestPointer.pointer = t, this._latestPointer.event = e, this._latestPointer.eventTarget = i
            }
        }, {
            key: "destroy", value: function () {
                this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null
            }
        }, {
            key: "_createPreparedEvent", value: function (t, e, i, n) {
                return new Se.InteractEvent(this, t, this.prepared.name, e, this.element, i, n)
            }
        }, {
            key: "_fireEvent", value: function (t) {
                var e;
                null == (e = this.interactable) || e.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t)
            }
        }, {
            key: "_doPhase", value: function (t) {
                var e = t.event, i = t.phase, n = t.preEnd, r = t.type, s = this.rect;
                if (s && "move" === i && (D.addEdges(this.edges, s, this.coords.delta[this.interactable.options.deltaSource]), s.width = s.right - s.left, s.height = s.bottom - s.top), !1 === this._scopeFire("interactions:before-action-".concat(i), t)) return !1;
                var o = t.iEvent = this._createPreparedEvent(e, i, n, r);
                return this._scopeFire("interactions:action-".concat(i), t), "start" === i && (this.prevEvent = o), this._fireEvent(o), this._scopeFire("interactions:after-action-".concat(i), t), !0
            }
        }, {
            key: "_now", value: function () {
                return Date.now()
            }
        }], i && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    Fe.Interaction = He;
    var We = He;
    Fe.default = We;
    var Ye = {};

    function qe(t) {
        t.pointerIsDown && (Ue(t.coords.cur, t.offset.total), t.offset.pending.x = 0, t.offset.pending.y = 0)
    }

    function Xe(t) {
        Ve(t.interaction)
    }

    function Ve(t) {
        if (!function (t) {
            return !(!t.offset.pending.x && !t.offset.pending.y)
        }(t)) return !1;
        var e = t.offset.pending;
        return Ue(t.coords.cur, e), Ue(t.coords.delta, e), D.addEdges(t.edges, t.rect, e), e.x = 0, e.y = 0, !0
    }

    function Ge(t) {
        var e = t.x, i = t.y;
        this.offset.pending.x += e, this.offset.pending.y += i, this.offset.total.x += e, this.offset.total.y += i
    }

    function Ue(t, e) {
        var i = t.page, n = t.client, r = e.x, s = e.y;
        i.x += r, i.y += s, n.x += r, n.y += s
    }

    Object.defineProperty(Ye, "__esModule", {value: !0}), Ye.addTotal = qe, Ye.applyPending = Ve, Ye.default = void 0, Fe._ProxyMethods.offsetBy = "";
    var Ze = {
        id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function (t) {
            t.Interaction.prototype.offsetBy = Ge
        }, listeners: {
            "interactions:new": function (t) {
                t.interaction.offset = {total: {x: 0, y: 0}, pending: {x: 0, y: 0}}
            },
            "interactions:update-pointer": function (t) {
                return qe(t.interaction)
            },
            "interactions:before-action-start": Xe,
            "interactions:before-action-move": Xe,
            "interactions:before-action-end": function (t) {
                var e = t.interaction;
                if (Ve(e)) return e.move({offset: !0}), e.end(), !1
            },
            "interactions:stop": function (t) {
                var e = t.interaction;
                e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0
            }
        }
    }, Ke = Ze;
    Ye.default = Ke;
    var Qe = {};

    function Je(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(Qe, "__esModule", {value: !0}), Qe.default = Qe.InertiaState = void 0;
    var ti = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Je(this, "active", !1), Je(this, "isModified", !1), Je(this, "smoothEnd", !1), Je(this, "allowResume", !1), Je(this, "modification", void 0), Je(this, "modifierCount", 0), Je(this, "modifierArg", void 0), Je(this, "startCoords", void 0), Je(this, "t0", 0), Je(this, "v0", 0), Je(this, "te", 0), Je(this, "targetOffset", void 0), Je(this, "modifiedOffset", void 0), Je(this, "currentOffset", void 0), Je(this, "lambda_v0", 0), Je(this, "one_ve_v0", 0), Je(this, "timeout", void 0), Je(this, "interaction", void 0), this.interaction = e
        }

        var e, i;
        return e = t, (i = [{
            key: "start", value: function (t) {
                var e = this.interaction, i = ei(e);
                if (!i || !i.enabled) return !1;
                var n = e.coords.velocity.client, r = (0, $.default)(n.x, n.y),
                    s = this.modification || (this.modification = new fe.default(e));
                if (s.copyFrom(e.modification), this.t0 = e._now(), this.allowResume = i.allowResume, this.v0 = r, this.currentOffset = {
                    x: 0,
                    y: 0
                }, this.startCoords = e.coords.cur.page, this.modifierArg = s.fillArg({
                    pageCoords: this.startCoords,
                    preEnd: !0,
                    phase: "inertiastart"
                }), this.t0 - e.coords.cur.timeStamp < 50 && r > i.minSpeed && r > i.endSpeed) this.startInertia(); else {
                    if (s.result = s.setAll(this.modifierArg), !s.result.changed) return !1;
                    this.startSmoothEnd()
                }
                return e.modification.result.rect = null, e.offsetBy(this.targetOffset), e._doPhase({
                    interaction: e,
                    event: t,
                    phase: "inertiastart"
                }), e.offsetBy({
                    x: -this.targetOffset.x,
                    y: -this.targetOffset.y
                }), e.modification.result.rect = null, this.active = !0, e.simulation = this, !0
            }
        }, {
            key: "startInertia", value: function () {
                var t = this, e = this.interaction.coords.velocity.client, i = ei(this.interaction), n = i.resistance,
                    r = -Math.log(i.endSpeed / this.v0) / n;
                this.targetOffset = {
                    x: (e.x - r) / n,
                    y: (e.y - r) / n
                }, this.te = r, this.lambda_v0 = n / this.v0, this.one_ve_v0 = 1 - i.endSpeed / this.v0;
                var s = this.modification, o = this.modifierArg;
                o.pageCoords = {
                    x: this.startCoords.x + this.targetOffset.x,
                    y: this.startCoords.y + this.targetOffset.y
                }, s.result = s.setAll(o), s.result.changed && (this.isModified = !0, this.modifiedOffset = {
                    x: this.targetOffset.x + s.result.delta.x,
                    y: this.targetOffset.y + s.result.delta.y
                }), this.onNextFrame((function () {
                    return t.inertiaTick()
                }))
            }
        }, {
            key: "startSmoothEnd", value: function () {
                var t = this;
                this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
                    x: this.modification.result.delta.x,
                    y: this.modification.result.delta.y
                }, this.onNextFrame((function () {
                    return t.smoothEndTick()
                }))
            }
        }, {
            key: "onNextFrame", value: function (t) {
                var e = this;
                this.timeout = Tt.default.request((function () {
                    e.active && t()
                }))
            }
        }, {
            key: "inertiaTick", value: function () {
                var t, e, i, n, r, s = this, o = this.interaction, a = ei(o).resistance, l = (o._now() - this.t0) / 1e3;
                if (l < this.te) {
                    var c, d = 1 - (Math.exp(-a * l) - this.lambda_v0) / this.one_ve_v0;
                    this.isModified ? (t = this.targetOffset.x, e = this.targetOffset.y, i = this.modifiedOffset.x, n = this.modifiedOffset.y, c = {
                        x: ni(r = d, 0, t, i),
                        y: ni(r, 0, e, n)
                    }) : c = {x: this.targetOffset.x * d, y: this.targetOffset.y * d};
                    var u = {x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y};
                    this.currentOffset.x += u.x, this.currentOffset.y += u.y, o.offsetBy(u), o.move(), this.onNextFrame((function () {
                        return s.inertiaTick()
                    }))
                } else o.offsetBy({
                    x: this.modifiedOffset.x - this.currentOffset.x,
                    y: this.modifiedOffset.y - this.currentOffset.y
                }), this.end()
            }
        }, {
            key: "smoothEndTick", value: function () {
                var t = this, e = this.interaction, i = e._now() - this.t0, n = ei(e).smoothEndDuration;
                if (i < n) {
                    var r = {x: ri(i, 0, this.targetOffset.x, n), y: ri(i, 0, this.targetOffset.y, n)},
                        s = {x: r.x - this.currentOffset.x, y: r.y - this.currentOffset.y};
                    this.currentOffset.x += s.x, this.currentOffset.y += s.y, e.offsetBy(s), e.move({skipModifiers: this.modifierCount}), this.onNextFrame((function () {
                        return t.smoothEndTick()
                    }))
                } else e.offsetBy({
                    x: this.targetOffset.x - this.currentOffset.x,
                    y: this.targetOffset.y - this.currentOffset.y
                }), this.end()
            }
        }, {
            key: "resume", value: function (t) {
                var e = t.pointer, i = t.event, n = t.eventTarget, r = this.interaction;
                r.offsetBy({
                    x: -this.currentOffset.x,
                    y: -this.currentOffset.y
                }), r.updatePointer(e, i, n, !0), r._doPhase({
                    interaction: r,
                    event: i,
                    phase: "resume"
                }), (0, N.copyCoords)(r.coords.prev, r.coords.cur), this.stop()
            }
        }, {
            key: "end", value: function () {
                this.interaction.move(), this.interaction.end(), this.stop()
            }
        }, {
            key: "stop", value: function () {
                this.active = this.smoothEnd = !1, this.interaction.simulation = null, Tt.default.cancel(this.timeout)
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function ei(t) {
        var e = t.interactable, i = t.prepared;
        return e && e.options && i.name && e.options[i.name].inertia
    }

    Qe.InertiaState = ti;
    var ii = {
        id: "inertia", before: ["modifiers", "actions"], install: function (t) {
            var e = t.defaults;
            t.usePlugin(Ye.default), t.usePlugin(_e.default), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = {
                enabled: !1,
                resistance: 10,
                minSpeed: 100,
                endSpeed: 10,
                allowResume: !0,
                smoothEndDuration: 300
            }
        }, listeners: {
            "interactions:new": function (t) {
                var e = t.interaction;
                e.inertia = new ti(e)
            },
            "interactions:before-action-end": function (t) {
                var e = t.interaction, i = t.event;
                return (!e._interacting || e.simulation || !e.inertia.start(i)) && null
            },
            "interactions:down": function (t) {
                var e = t.interaction, i = t.eventTarget, n = e.inertia;
                if (n.active) for (var r = i; s.default.element(r);) {
                    if (r === e.element) {
                        n.resume(t);
                        break
                    }
                    r = x.parentNode(r)
                }
            },
            "interactions:stop": function (t) {
                var e = t.interaction.inertia;
                e.active && e.stop()
            },
            "interactions:before-action-resume": function (t) {
                var e = t.interaction.modification;
                e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t)
            },
            "interactions:before-action-inertiastart": function (t) {
                return t.interaction.modification.setAndApply(t)
            },
            "interactions:action-resume": _e.addEventModifiers,
            "interactions:action-inertiastart": _e.addEventModifiers,
            "interactions:after-action-inertiastart": function (t) {
                return t.interaction.modification.restoreInteractionCoords(t)
            },
            "interactions:after-action-resume": function (t) {
                return t.interaction.modification.restoreInteractionCoords(t)
            }
        }
    };

    function ni(t, e, i, n) {
        var r = 1 - t;
        return r * r * e + 2 * r * t * i + t * t * n
    }

    function ri(t, e, i, n) {
        return -i * (t /= n) * (t - 2) + e
    }

    var si = ii;
    Qe.default = si;
    var oi = {};

    function ai(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function li(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            if (t.immediatePropagationStopped) break;
            n(t)
        }
    }

    Object.defineProperty(oi, "__esModule", {value: !0}), oi.Eventable = void 0;
    var ci = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), ai(this, "options", void 0), ai(this, "types", {}), ai(this, "propagationStopped", !1), ai(this, "immediatePropagationStopped", !1), ai(this, "global", void 0), this.options = (0, O.default)({}, e || {})
        }

        var e, i;
        return e = t, (i = [{
            key: "fire", value: function (t) {
                var e, i = this.global;
                (e = this.types[t.type]) && li(t, e), !t.propagationStopped && i && (e = i[t.type]) && li(t, e)
            }
        }, {
            key: "on", value: function (t, e) {
                var i = (0, z.default)(t, e);
                for (t in i) this.types[t] = G.merge(this.types[t] || [], i[t])
            }
        }, {
            key: "off", value: function (t, e) {
                var i = (0, z.default)(t, e);
                for (t in i) {
                    var n = this.types[t];
                    if (n && n.length) for (var r = 0; r < i[t].length; r++) {
                        var s = i[t][r], o = n.indexOf(s);
                        -1 !== o && n.splice(o, 1)
                    }
                }
            }
        }, {
            key: "getRect", value: function (t) {
                return null
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    oi.Eventable = ci;
    var di = {};
    Object.defineProperty(di, "__esModule", {value: !0}), di.default = function (t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var i in e.map) if (0 === t.indexOf(i) && t.substr(i.length) in e.phases) return !0;
        return !1
    };
    var ui = {};
    Object.defineProperty(ui, "__esModule", {value: !0}), ui.createInteractStatic = function (t) {
        var e = function e(i, n) {
            var r = t.interactables.get(i, n);
            return r || ((r = t.interactables.new(i, n)).events.global = e.globalEvents), r
        };
        return e.getPointerAverage = N.pointerAverage, e.getTouchBBox = N.touchBBox, e.getTouchDistance = N.touchDistance, e.getTouchAngle = N.touchAngle, e.getElementRect = x.getElementRect, e.getElementClientRect = x.getElementClientRect, e.matchesSelector = x.matchesSelector, e.closest = x.closest, e.globalEvents = {}, e.version = "1.10.17", e.scope = t, e.use = function (t, e) {
            return this.scope.usePlugin(t, e), this
        }, e.isSet = function (t, e) {
            return !!this.scope.interactables.get(t, e && e.context)
        }, e.on = (0, Lt.warnOnce)((function (t, e, i) {
            if (s.default.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s.default.array(t)) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    this.on(r, e, i)
                }
                return this
            }
            if (s.default.object(t)) {
                for (var o in t) this.on(o, t[o], e);
                return this
            }
            return (0, di.default)(t, this.scope.actions) ? this.globalEvents[t] ? this.globalEvents[t].push(e) : this.globalEvents[t] = [e] : this.scope.events.add(this.scope.document, t, e, {options: i}), this
        }), "The interact.on() method is being deprecated"), e.off = (0, Lt.warnOnce)((function (t, e, i) {
            if (s.default.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s.default.array(t)) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    this.off(r, e, i)
                }
                return this
            }
            if (s.default.object(t)) {
                for (var o in t) this.off(o, t[o], e);
                return this
            }
            var a;
            return (0, di.default)(t, this.scope.actions) ? t in this.globalEvents && -1 !== (a = this.globalEvents[t].indexOf(e)) && this.globalEvents[t].splice(a, 1) : this.scope.events.remove(this.scope.document, t, e, i), this
        }), "The interact.off() method is being deprecated"), e.debug = function () {
            return this.scope
        }, e.supportsTouch = function () {
            return b.default.supportsTouch
        }, e.supportsPointerEvent = function () {
            return b.default.supportsPointerEvent
        }, e.stop = function () {
            for (var t = 0; t < this.scope.interactions.list.length; t++) this.scope.interactions.list[t].stop();
            return this
        }, e.pointerMoveTolerance = function (t) {
            return s.default.number(t) ? (this.scope.interactions.pointerMoveTolerance = t, this) : this.scope.interactions.pointerMoveTolerance
        }, e.addDocument = function (t, e) {
            this.scope.addDocument(t, e)
        }, e.removeDocument = function (t) {
            this.scope.removeDocument(t)
        }, e
    };
    var pi = {};

    function hi(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(pi, "__esModule", {value: !0}), pi.Interactable = void 0;
    var fi = function () {
        function t(i, n, r, s) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), hi(this, "options", void 0), hi(this, "_actions", void 0), hi(this, "target", void 0), hi(this, "events", new oi.Eventable), hi(this, "_context", void 0), hi(this, "_win", void 0), hi(this, "_doc", void 0), hi(this, "_scopeEvents", void 0), hi(this, "_rectChecker", void 0), this._actions = n.actions, this.target = i, this._context = n.context || r, this._win = (0, e.getWindow)((0, x.trySelector)(i) ? this._context : i), this._doc = this._win.document, this._scopeEvents = s, this.set(n)
        }

        var i, n;
        return i = t, (n = [{
            key: "_defaults", get: function () {
                return {base: {}, perAction: {}, actions: {}}
            }
        }, {
            key: "setOnEvents", value: function (t, e) {
                return s.default.func(e.onstart) && this.on("".concat(t, "start"), e.onstart), s.default.func(e.onmove) && this.on("".concat(t, "move"), e.onmove), s.default.func(e.onend) && this.on("".concat(t, "end"), e.onend), s.default.func(e.oninertiastart) && this.on("".concat(t, "inertiastart"), e.oninertiastart), this
            }
        }, {
            key: "updatePerActionListeners", value: function (t, e, i) {
                (s.default.array(e) || s.default.object(e)) && this.off(t, e), (s.default.array(i) || s.default.object(i)) && this.on(t, i)
            }
        }, {
            key: "setPerAction", value: function (t, e) {
                var i = this._defaults;
                for (var n in e) {
                    var r = n, o = this.options[t], a = e[r];
                    "listeners" === r && this.updatePerActionListeners(t, o.listeners, a), s.default.array(a) ? o[r] = G.from(a) : s.default.plainObject(a) ? (o[r] = (0, O.default)(o[r] || {}, (0, he.default)(a)), s.default.object(i.perAction[r]) && "enabled" in i.perAction[r] && (o[r].enabled = !1 !== a.enabled)) : s.default.bool(a) && s.default.object(i.perAction[r]) ? o[r].enabled = a : o[r] = a
                }
            }
        }, {
            key: "getRect", value: function (t) {
                return t = t || (s.default.element(this.target) ? this.target : null), s.default.string(this.target) && (t = t || this._context.querySelector(this.target)), (0, x.getElementRect)(t)
            }
        }, {
            key: "rectChecker", value: function (t) {
                var e = this;
                return s.default.func(t) ? (this._rectChecker = t, this.getRect = function (t) {
                    var i = (0, O.default)({}, e._rectChecker(t));
                    return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i
                }, this) : null === t ? (delete this.getRect, delete this._rectChecker, this) : this.getRect
            }
        }, {
            key: "_backCompatOption", value: function (t, e) {
                if ((0, x.trySelector)(e) || s.default.object(e)) {
                    for (var i in this.options[t] = e, this._actions.map) this.options[i][t] = e;
                    return this
                }
                return this.options[t]
            }
        }, {
            key: "origin", value: function (t) {
                return this._backCompatOption("origin", t)
            }
        }, {
            key: "deltaSource", value: function (t) {
                return "page" === t || "client" === t ? (this.options.deltaSource = t, this) : this.options.deltaSource
            }
        }, {
            key: "context", value: function () {
                return this._context
            }
        }, {
            key: "inContext", value: function (t) {
                return this._context === t.ownerDocument || (0, x.nodeContains)(this._context, t)
            }
        }, {
            key: "testIgnoreAllow", value: function (t, e, i) {
                return !this.testIgnore(t.ignoreFrom, e, i) && this.testAllow(t.allowFrom, e, i)
            }
        }, {
            key: "testAllow", value: function (t, e, i) {
                return !t || !!s.default.element(i) && (s.default.string(t) ? (0, x.matchesUpTo)(i, t, e) : !!s.default.element(t) && (0, x.nodeContains)(t, i))
            }
        }, {
            key: "testIgnore", value: function (t, e, i) {
                return !(!t || !s.default.element(i)) && (s.default.string(t) ? (0, x.matchesUpTo)(i, t, e) : !!s.default.element(t) && (0, x.nodeContains)(t, i))
            }
        }, {
            key: "fire", value: function (t) {
                return this.events.fire(t), this
            }
        }, {
            key: "_onOff", value: function (t, e, i, n) {
                s.default.object(e) && !s.default.array(e) && (n = i, i = null);
                var r = "on" === t ? "add" : "remove", o = (0, z.default)(e, i);
                for (var a in o) {
                    "wheel" === a && (a = b.default.wheelEvent);
                    for (var l = 0; l < o[a].length; l++) {
                        var c = o[a][l];
                        (0, di.default)(a, this._actions) ? this.events[t](a, c) : s.default.string(this.target) ? this._scopeEvents["".concat(r, "Delegate")](this.target, this._context, a, c, n) : this._scopeEvents[r](this.target, a, c, n)
                    }
                }
                return this
            }
        }, {
            key: "on", value: function (t, e, i) {
                return this._onOff("on", t, e, i)
            }
        }, {
            key: "off", value: function (t, e, i) {
                return this._onOff("off", t, e, i)
            }
        }, {
            key: "set", value: function (t) {
                var e = this._defaults;
                for (var i in s.default.object(t) || (t = {}), this.options = (0, he.default)(e.base), this._actions.methodDict) {
                    var n = i, r = this._actions.methodDict[n];
                    this.options[n] = {}, this.setPerAction(n, (0, O.default)((0, O.default)({}, e.perAction), e.actions[n])), this[r](t[n])
                }
                for (var o in t) s.default.func(this[o]) && this[o](t[o]);
                return this
            }
        }, {
            key: "unset", value: function () {
                if (s.default.string(this.target)) for (var t in this._scopeEvents.delegatedEvents) for (var e = this._scopeEvents.delegatedEvents[t], i = e.length - 1; i >= 0; i--) {
                    var n = e[i], r = n.selector, o = n.context, a = n.listeners;
                    r === this.target && o === this._context && e.splice(i, 1);
                    for (var l = a.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, t, a[l][0], a[l][1])
                } else this._scopeEvents.remove(this.target, "all")
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(i.prototype, n), Object.defineProperty(i, "prototype", {writable: !1}), t
    }();
    pi.Interactable = fi;
    var mi = {};

    function gi(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(mi, "__esModule", {value: !0}), mi.InteractableSet = void 0;
    var vi = function () {
        function t(e) {
            var i = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), gi(this, "list", []), gi(this, "selectorMap", {}), gi(this, "scope", void 0), this.scope = e, e.addListeners({
                "interactable:unset": function (t) {
                    var e = t.interactable, n = e.target, r = e._context,
                        o = s.default.string(n) ? i.selectorMap[n] : n[i.scope.id], a = G.findIndex(o, (function (t) {
                            return t.context === r
                        }));
                    o[a] && (o[a].context = null, o[a].interactable = null), o.splice(a, 1)
                }
            })
        }

        var e, i;
        return e = t, (i = [{
            key: "new", value: function (t, e) {
                e = (0, O.default)(e || {}, {actions: this.scope.actions});
                var i = new this.scope.Interactable(t, e, this.scope.document, this.scope.events),
                    n = {context: i._context, interactable: i};
                return this.scope.addDocument(i._doc), this.list.push(i), s.default.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(n)) : (i.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
                    value: [],
                    configurable: !0
                }), t[this.scope.id].push(n)), this.scope.fire("interactable:new", {
                    target: t,
                    options: e,
                    interactable: i,
                    win: this.scope._win
                }), i
            }
        }, {
            key: "get", value: function (t, e) {
                var i = e && e.context || this.scope.document, n = s.default.string(t),
                    r = n ? this.selectorMap[t] : t[this.scope.id];
                if (!r) return null;
                var o = G.find(r, (function (e) {
                    return e.context === i && (n || e.interactable.inContext(t))
                }));
                return o && o.interactable
            }
        }, {
            key: "forEachMatch", value: function (t, e) {
                for (var i = 0; i < this.list.length; i++) {
                    var n = this.list[i], r = void 0;
                    if ((s.default.string(n.target) ? s.default.element(t) && x.matchesSelector(t, n.target) : t === n.target) && n.inContext(t) && (r = e(n)), void 0 !== r) return r
                }
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();
    mi.InteractableSet = vi;
    var yi = {};

    function bi(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function wi(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
                var n, r, s = [], o = !0, a = !1;
                try {
                    for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, r = t
                } finally {
                    try {
                        o || null == i.return || i.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return _i(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _i(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    Object.defineProperty(yi, "__esModule", {value: !0}), yi.default = void 0;
    var xi = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), bi(this, "currentTarget", void 0), bi(this, "originalEvent", void 0), bi(this, "type", void 0), this.originalEvent = e, (0, j.default)(this, e)
        }

        var e, i;
        return e = t, (i = [{
            key: "preventOriginalDefault", value: function () {
                this.originalEvent.preventDefault()
            }
        }, {
            key: "stopPropagation", value: function () {
                this.originalEvent.stopPropagation()
            }
        }, {
            key: "stopImmediatePropagation", value: function () {
                this.originalEvent.stopImmediatePropagation()
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function Ei(t) {
        if (!s.default.object(t)) return {capture: !!t, passive: !1};
        var e = (0, O.default)({}, t);
        return e.capture = !!t.capture, e.passive = !!t.passive, e
    }

    var Ti = {
        id: "events", install: function (t) {
            var e, i = [], n = {}, r = [], o = {
                add: a,
                remove: l,
                addDelegate: function (t, e, i, s, o) {
                    var l = Ei(o);
                    if (!n[i]) {
                        n[i] = [];
                        for (var u = 0; u < r.length; u++) {
                            var p = r[u];
                            a(p, i, c), a(p, i, d, !0)
                        }
                    }
                    var h = n[i], f = G.find(h, (function (i) {
                        return i.selector === t && i.context === e
                    }));
                    f || (f = {selector: t, context: e, listeners: []}, h.push(f)), f.listeners.push([s, l])
                },
                removeDelegate: function (t, e, i, r, s) {
                    var o, a = Ei(s), u = n[i], p = !1;
                    if (u) for (o = u.length - 1; o >= 0; o--) {
                        var h = u[o];
                        if (h.selector === t && h.context === e) {
                            for (var f = h.listeners, m = f.length - 1; m >= 0; m--) {
                                var g = wi(f[m], 2), v = g[0], y = g[1], b = y.capture, w = y.passive;
                                if (v === r && b === a.capture && w === a.passive) {
                                    f.splice(m, 1), f.length || (u.splice(o, 1), l(e, i, c), l(e, i, d, !0)), p = !0;
                                    break
                                }
                            }
                            if (p) break
                        }
                    }
                },
                delegateListener: c,
                delegateUseCapture: d,
                delegatedEvents: n,
                documents: r,
                targets: i,
                supportsOptions: !1,
                supportsPassive: !1
            };

            function a(t, e, n, r) {
                var s = Ei(r), a = G.find(i, (function (e) {
                    return e.eventTarget === t
                }));
                a || (a = {
                    eventTarget: t,
                    events: {}
                }, i.push(a)), a.events[e] || (a.events[e] = []), t.addEventListener && !G.contains(a.events[e], n) && (t.addEventListener(e, n, o.supportsOptions ? s : s.capture), a.events[e].push(n))
            }

            function l(t, e, n, r) {
                var s = Ei(r), a = G.findIndex(i, (function (e) {
                    return e.eventTarget === t
                })), c = i[a];
                if (c && c.events) if ("all" !== e) {
                    var d = !1, u = c.events[e];
                    if (u) {
                        if ("all" === n) {
                            for (var p = u.length - 1; p >= 0; p--) l(t, e, u[p], s);
                            return
                        }
                        for (var h = 0; h < u.length; h++) if (u[h] === n) {
                            t.removeEventListener(e, n, o.supportsOptions ? s : s.capture), u.splice(h, 1), 0 === u.length && (delete c.events[e], d = !0);
                            break
                        }
                    }
                    d && !Object.keys(c.events).length && i.splice(a, 1)
                } else for (e in c.events) c.events.hasOwnProperty(e) && l(t, e, "all")
            }

            function c(t, e) {
                for (var i = Ei(e), r = new xi(t), o = n[t.type], a = wi(N.getEventTargets(t), 1)[0], l = a; s.default.element(l);) {
                    for (var c = 0; c < o.length; c++) {
                        var d = o[c], u = d.selector, p = d.context;
                        if (x.matchesSelector(l, u) && x.nodeContains(p, a) && x.nodeContains(p, l)) {
                            var h = d.listeners;
                            r.currentTarget = l;
                            for (var f = 0; f < h.length; f++) {
                                var m = wi(h[f], 2), g = m[0], v = m[1], y = v.capture, b = v.passive;
                                y === i.capture && b === i.passive && g(r)
                            }
                        }
                    }
                    l = x.parentNode(l)
                }
            }

            function d(t) {
                return c(t, !0)
            }

            return null == (e = t.document) || e.createElement("div").addEventListener("test", null, {
                get capture() {
                    return o.supportsOptions = !0
                }, get passive() {
                    return o.supportsPassive = !0
                }
            }), t.events = o, o
        }
    };
    yi.default = Ti;
    var Ci = {};
    Object.defineProperty(Ci, "__esModule", {value: !0}), Ci.default = void 0;
    var Si = {
        methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function (t) {
            for (var e = 0; e < Si.methodOrder.length; e++) {
                var i;
                i = Si.methodOrder[e];
                var n = Si[i](t);
                if (n) return n
            }
            return null
        }, simulationResume: function (t) {
            var e = t.pointerType, i = t.eventType, n = t.eventTarget, r = t.scope;
            if (!/down|start/i.test(i)) return null;
            for (var s = 0; s < r.interactions.list.length; s++) {
                var o = r.interactions.list[s], a = n;
                if (o.simulation && o.simulation.allowResume && o.pointerType === e) for (; a;) {
                    if (a === o.element) return o;
                    a = x.parentNode(a)
                }
            }
            return null
        }, mouseOrPen: function (t) {
            var e, i = t.pointerId, n = t.pointerType, r = t.eventType, s = t.scope;
            if ("mouse" !== n && "pen" !== n) return null;
            for (var o = 0; o < s.interactions.list.length; o++) {
                var a = s.interactions.list[o];
                if (a.pointerType === n) {
                    if (a.simulation && !Mi(a, i)) continue;
                    if (a.interacting()) return a;
                    e || (e = a)
                }
            }
            if (e) return e;
            for (var l = 0; l < s.interactions.list.length; l++) {
                var c = s.interactions.list[l];
                if (!(c.pointerType !== n || /down/i.test(r) && c.simulation)) return c
            }
            return null
        }, hasPointer: function (t) {
            for (var e = t.pointerId, i = t.scope, n = 0; n < i.interactions.list.length; n++) {
                var r = i.interactions.list[n];
                if (Mi(r, e)) return r
            }
            return null
        }, idle: function (t) {
            for (var e = t.pointerType, i = t.scope, n = 0; n < i.interactions.list.length; n++) {
                var r = i.interactions.list[n];
                if (1 === r.pointers.length) {
                    var s = r.interactable;
                    if (s && (!s.options.gesture || !s.options.gesture.enabled)) continue
                } else if (r.pointers.length >= 2) continue;
                if (!r.interacting() && e === r.pointerType) return r
            }
            return null
        }
    };

    function Mi(t, e) {
        return t.pointers.some((function (t) {
            return t.id === e
        }))
    }

    var Pi = Si;
    Ci.default = Pi;
    var Oi = {};

    function Di(t) {
        return Di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Di(t)
    }

    function ki(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
                var n, r, s = [], o = !0, a = !1;
                try {
                    for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, r = t
                } finally {
                    try {
                        o || null == i.return || i.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return Ai(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Ai(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ai(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function Ii(t, e) {
        return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, Ii(t, e)
    }

    function zi(t) {
        return zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, zi(t)
    }

    Object.defineProperty(Oi, "__esModule", {value: !0}), Oi.default = void 0;
    var Li = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

    function $i(t, e) {
        return function (i) {
            var n = e.interactions.list, r = N.getPointerType(i), s = ki(N.getEventTargets(i), 2), o = s[0], a = s[1],
                l = [];
            if (/^touch/.test(i.type)) {
                e.prevTouchTime = e.now();
                for (var c = 0; c < i.changedTouches.length; c++) {
                    var d = i.changedTouches[c], u = {
                        pointer: d,
                        pointerId: N.getPointerId(d),
                        pointerType: r,
                        eventType: i.type,
                        eventTarget: o,
                        curEventTarget: a,
                        scope: e
                    }, p = ji(u);
                    l.push([u.pointer, u.eventTarget, u.curEventTarget, p])
                }
            } else {
                var h = !1;
                if (!b.default.supportsPointerEvent && /mouse/.test(i.type)) {
                    for (var f = 0; f < n.length && !h; f++) h = "mouse" !== n[f].pointerType && n[f].pointerIsDown;
                    h = h || e.now() - e.prevTouchTime < 500 || 0 === i.timeStamp
                }
                if (!h) {
                    var m = {
                        pointer: i,
                        pointerId: N.getPointerId(i),
                        pointerType: r,
                        eventType: i.type,
                        curEventTarget: a,
                        eventTarget: o,
                        scope: e
                    }, g = ji(m);
                    l.push([m.pointer, m.eventTarget, m.curEventTarget, g])
                }
            }
            for (var v = 0; v < l.length; v++) {
                var y = ki(l[v], 4), w = y[0], _ = y[1], x = y[2];
                y[3][t](w, i, _, x)
            }
        }
    }

    function ji(t) {
        var e = t.pointerType, i = t.scope, n = {interaction: Ci.default.search(t), searchDetails: t};
        return i.fire("interactions:find", n), n.interaction || i.interactions.new({pointerType: e})
    }

    function Ni(t, e) {
        var i = t.doc, n = t.scope, r = t.options, s = n.interactions.docEvents, o = n.events, a = o[e];
        for (var l in n.browser.isIOS && !r.events && (r.events = {passive: !1}), o.delegatedEvents) a(i, l, o.delegateListener), a(i, l, o.delegateUseCapture, !0);
        for (var c = r && r.events, d = 0; d < s.length; d++) {
            var u = s[d];
            a(i, u.type, u.listener, c)
        }
    }

    var Fi = {
        id: "core/interactions", install: function (t) {
            for (var e = {}, i = 0; i < Li.length; i++) {
                var n = Li[i];
                e[n] = $i(n, t)
            }
            var r, s = b.default.pEventTypes;

            function o() {
                for (var e = 0; e < t.interactions.list.length; e++) {
                    var i = t.interactions.list[e];
                    if (i.pointerIsDown && "touch" === i.pointerType && !i._interacting) for (var n = function () {
                        var e = i.pointers[r];
                        t.documents.some((function (t) {
                            var i = t.doc;
                            return (0, x.nodeContains)(i, e.downTarget)
                        })) || i.removePointer(e.pointer, e.event)
                    }, r = 0; r < i.pointers.length; r++) n()
                }
            }

            (r = m.default.PointerEvent ? [{type: s.down, listener: o}, {
                type: s.down,
                listener: e.pointerDown
            }, {type: s.move, listener: e.pointerMove}, {type: s.up, listener: e.pointerUp}, {
                type: s.cancel,
                listener: e.pointerUp
            }] : [{type: "mousedown", listener: e.pointerDown}, {
                type: "mousemove",
                listener: e.pointerMove
            }, {type: "mouseup", listener: e.pointerUp}, {type: "touchstart", listener: o}, {
                type: "touchstart",
                listener: e.pointerDown
            }, {type: "touchmove", listener: e.pointerMove}, {
                type: "touchend",
                listener: e.pointerUp
            }, {type: "touchcancel", listener: e.pointerUp}]).push({
                type: "blur", listener: function (e) {
                    for (var i = 0; i < t.interactions.list.length; i++) t.interactions.list[i].documentBlur(e)
                }
            }), t.prevTouchTime = 0, t.Interaction = function (e) {
                !function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {writable: !1}), e && Ii(t, e)
                }(a, e);
                var i, n, r, s, o = (r = a, s = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function () {
                    var t, e = zi(r);
                    if (s) {
                        var i = zi(this).constructor;
                        t = Reflect.construct(e, arguments, i)
                    } else t = e.apply(this, arguments);
                    return function (t, e) {
                        if (e && ("object" === Di(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(this, t)
                });

                function a() {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), o.apply(this, arguments)
                }

                return i = a, (n = [{
                    key: "pointerMoveTolerance", get: function () {
                        return t.interactions.pointerMoveTolerance
                    }, set: function (e) {
                        t.interactions.pointerMoveTolerance = e
                    }
                }, {
                    key: "_now", value: function () {
                        return t.now()
                    }
                }]) && function (t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }(i.prototype, n), Object.defineProperty(i, "prototype", {writable: !1}), a
            }(Fe.default), t.interactions = {
                list: [], new: function (e) {
                    e.scopeFire = function (e, i) {
                        return t.fire(e, i)
                    };
                    var i = new t.Interaction(e);
                    return t.interactions.list.push(i), i
                }, listeners: e, docEvents: r, pointerMoveTolerance: 1
            }, t.usePlugin(se.default)
        }, listeners: {
            "scope:add-document": function (t) {
                return Ni(t, "add")
            }, "scope:remove-document": function (t) {
                return Ni(t, "remove")
            }, "interactable:unset": function (t, e) {
                for (var i = t.interactable, n = e.interactions.list.length - 1; n >= 0; n--) {
                    var r = e.interactions.list[n];
                    r.interactable === i && (r.stop(), e.fire("interactions:destroy", {interaction: r}), r.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(n, 1))
                }
            }
        }, onDocSignal: Ni, doOnInteractions: $i, methodNames: Li
    }, Ri = Fi;
    Oi.default = Ri;
    var Bi = {};

    function Hi(t) {
        return Hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Hi(t)
    }

    function Wi() {
        return Wi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, i) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = qi(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(arguments.length < 3 ? t : i) : r.value
            }
        }, Wi.apply(this, arguments)
    }

    function Yi(t, e) {
        return Yi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, Yi(t, e)
    }

    function qi(t) {
        return qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, qi(t)
    }

    function Xi(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Vi(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function Gi(t, e, i) {
        return e && Vi(t.prototype, e), i && Vi(t, i), Object.defineProperty(t, "prototype", {writable: !1}), t
    }

    function Ui(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(Bi, "__esModule", {value: !0}), Bi.Scope = void 0, Bi.initScope = Ki;
    var Zi = function () {
        function t() {
            var e = this;
            Xi(this, t), Ui(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Ui(this, "isInitialized", !1), Ui(this, "listenerMaps", []), Ui(this, "browser", b.default), Ui(this, "defaults", (0, he.default)(Ce.defaults)), Ui(this, "Eventable", oi.Eventable), Ui(this, "actions", {
                map: {},
                phases: {start: !0, move: !0, end: !0},
                methodDict: {},
                phaselessTypes: {}
            }), Ui(this, "interactStatic", (0, ui.createInteractStatic)(this)), Ui(this, "InteractEvent", Se.InteractEvent), Ui(this, "Interactable", void 0), Ui(this, "interactables", new mi.InteractableSet(this)), Ui(this, "_win", void 0), Ui(this, "document", void 0), Ui(this, "window", void 0), Ui(this, "documents", []), Ui(this, "_plugins", {
                list: [],
                map: {}
            }), Ui(this, "onWindowUnload", (function (t) {
                return e.removeDocument(t.target)
            }));
            var i = this;
            this.Interactable = function (t) {
                !function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {writable: !1}), e && Yi(t, e)
                }(s, t);
                var e, n, r = (e = s, n = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function () {
                    var t, i = qi(e);
                    if (n) {
                        var r = qi(this).constructor;
                        t = Reflect.construct(i, arguments, r)
                    } else t = i.apply(this, arguments);
                    return function (t, e) {
                        if (e && ("object" === Hi(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(this, t)
                });

                function s() {
                    return Xi(this, s), r.apply(this, arguments)
                }

                return Gi(s, [{
                    key: "_defaults", get: function () {
                        return i.defaults
                    }
                }, {
                    key: "set", value: function (t) {
                        return Wi(qi(s.prototype), "set", this).call(this, t), i.fire("interactable:set", {
                            options: t,
                            interactable: this
                        }), this
                    }
                }, {
                    key: "unset", value: function () {
                        Wi(qi(s.prototype), "unset", this).call(this);
                        var t = i.interactables.list.indexOf(this);
                        t < 0 || (Wi(qi(s.prototype), "unset", this).call(this), i.interactables.list.splice(t, 1), i.fire("interactable:unset", {interactable: this}))
                    }
                }]), s
            }(pi.Interactable)
        }

        return Gi(t, [{
            key: "addListeners", value: function (t, e) {
                this.listenerMaps.push({id: e, map: t})
            }
        }, {
            key: "fire", value: function (t, e) {
                for (var i = 0; i < this.listenerMaps.length; i++) {
                    var n = this.listenerMaps[i].map[t];
                    if (n && !1 === n(e, this, t)) return !1
                }
            }
        }, {
            key: "init", value: function (t) {
                return this.isInitialized ? this : Ki(this, t)
            }
        }, {
            key: "pluginIsInstalled", value: function (t) {
                return this._plugins.map[t.id] || -1 !== this._plugins.list.indexOf(t)
            }
        }, {
            key: "usePlugin", value: function (t, e) {
                if (!this.isInitialized) return this;
                if (this.pluginIsInstalled(t)) return this;
                if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, e), t.listeners && t.before) {
                    for (var i = 0, n = this.listenerMaps.length, r = t.before.reduce((function (t, e) {
                        return t[e] = !0, t[Qi(e)] = !0, t
                    }), {}); i < n; i++) {
                        var s = this.listenerMaps[i].id;
                        if (r[s] || r[Qi(s)]) break
                    }
                    this.listenerMaps.splice(i, 0, {id: t.id, map: t.listeners})
                } else t.listeners && this.listenerMaps.push({id: t.id, map: t.listeners});
                return this
            }
        }, {
            key: "addDocument", value: function (t, i) {
                if (-1 !== this.getDocIndex(t)) return !1;
                var n = e.getWindow(t);
                i = i ? (0, O.default)({}, i) : {}, this.documents.push({
                    doc: t,
                    options: i
                }), this.events.documents.push(t), t !== this.document && this.events.add(n, "unload", this.onWindowUnload), this.fire("scope:add-document", {
                    doc: t,
                    window: n,
                    scope: this,
                    options: i
                })
            }
        }, {
            key: "removeDocument", value: function (t) {
                var i = this.getDocIndex(t), n = e.getWindow(t), r = this.documents[i].options;
                this.events.remove(n, "unload", this.onWindowUnload), this.documents.splice(i, 1), this.events.documents.splice(i, 1), this.fire("scope:remove-document", {
                    doc: t,
                    window: n,
                    scope: this,
                    options: r
                })
            }
        }, {
            key: "getDocIndex", value: function (t) {
                for (var e = 0; e < this.documents.length; e++) if (this.documents[e].doc === t) return e;
                return -1
            }
        }, {
            key: "getDocOptions", value: function (t) {
                var e = this.getDocIndex(t);
                return -1 === e ? null : this.documents[e].options
            }
        }, {
            key: "now", value: function () {
                return (this.window.Date || Date).now()
            }
        }]), t
    }();

    function Ki(t, i) {
        return t.isInitialized = !0, s.default.window(i) && e.init(i), m.default.init(i), b.default.init(i), Tt.default.init(i), t.window = i, t.document = i.document, t.usePlugin(Oi.default), t.usePlugin(yi.default), t
    }

    function Qi(t) {
        return t && t.replace(/\/.*$/, "")
    }

    Bi.Scope = Zi;
    var Ji = {};
    Object.defineProperty(Ji, "__esModule", {value: !0}), Ji.default = void 0;
    var tn = new Bi.Scope, en = tn.interactStatic;
    Ji.default = en;
    var nn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0;
    tn.init(nn);
    var rn = {};
    Object.defineProperty(rn, "__esModule", {value: !0}), rn.default = void 0, rn.default = function () {
    };
    var sn = {};
    Object.defineProperty(sn, "__esModule", {value: !0}), sn.default = void 0, sn.default = function () {
    };
    var on = {};

    function an(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
                var n, r, s = [], o = !0, a = !1;
                try {
                    for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, r = t
                } finally {
                    try {
                        o || null == i.return || i.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return ln(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ln(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ln(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    Object.defineProperty(on, "__esModule", {value: !0}), on.default = void 0, on.default = function (t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function (e) {
            var i = an(e, 2), n = i[0], r = i[1];
            return n in t || r in t
        })), i = function (i, n) {
            for (var r = t.range, s = t.limits, o = void 0 === s ? {
                left: -1 / 0,
                right: 1 / 0,
                top: -1 / 0,
                bottom: 1 / 0
            } : s, a = t.offset, l = void 0 === a ? {x: 0, y: 0} : a, c = {
                range: r,
                grid: t,
                x: null,
                y: null
            }, d = 0; d < e.length; d++) {
                var u = an(e[d], 2), p = u[0], h = u[1], f = Math.round((i - l.x) / t[p]),
                    m = Math.round((n - l.y) / t[h]);
                c[p] = Math.max(o.left, Math.min(o.right, f * t[p] + l.x)), c[h] = Math.max(o.top, Math.min(o.bottom, m * t[h] + l.y))
            }
            return c
        };
        return i.grid = t, i.coordFields = e, i
    };
    var cn = {};
    Object.defineProperty(cn, "__esModule", {value: !0}), Object.defineProperty(cn, "edgeTarget", {
        enumerable: !0,
        get: function () {
            return rn.default
        }
    }), Object.defineProperty(cn, "elements", {
        enumerable: !0, get: function () {
            return sn.default
        }
    }), Object.defineProperty(cn, "grid", {
        enumerable: !0, get: function () {
            return on.default
        }
    });
    var dn = {};
    Object.defineProperty(dn, "__esModule", {value: !0}), dn.default = void 0;
    var un = {
        id: "snappers", install: function (t) {
            var e = t.interactStatic;
            e.snappers = (0, O.default)(e.snappers || {}, cn), e.createSnapGrid = e.snappers.grid
        }
    }, pn = un;
    dn.default = pn;
    var hn = {};

    function fn(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function mn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? fn(Object(i), !0).forEach((function (e) {
                gn(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : fn(Object(i)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }

    function gn(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    Object.defineProperty(hn, "__esModule", {value: !0}), hn.default = hn.aspectRatio = void 0;
    var vn = {
        start: function (t) {
            var e = t.state, i = t.rect, n = t.edges, r = t.pageCoords, s = e.options.ratio, o = e.options,
                a = o.equalDelta, l = o.modifiers;
            "preserve" === s && (s = i.width / i.height), e.startCoords = (0, O.default)({}, r), e.startRect = (0, O.default)({}, i), e.ratio = s, e.equalDelta = a;
            var c = e.linkedEdges = {
                top: n.top || n.left && !n.bottom,
                left: n.left || n.top && !n.right,
                bottom: n.bottom || n.right && !n.top,
                right: n.right || n.bottom && !n.left
            };
            if (e.xIsPrimaryAxis = !(!n.left && !n.right), e.equalDelta) {
                var d = (c.left ? 1 : -1) * (c.top ? 1 : -1);
                e.edgeSign = {x: d, y: d}
            } else e.edgeSign = {x: c.left ? -1 : 1, y: c.top ? -1 : 1};
            if ((0, O.default)(t.edges, c), l && l.length) {
                var u = new fe.default(t.interaction);
                u.copyFrom(t.interaction.modification), u.prepareStates(l), e.subModification = u, u.startAll(mn({}, t))
            }
        }, set: function (t) {
            var e = t.state, i = t.rect, n = t.coords, r = (0, O.default)({}, n), s = e.equalDelta ? yn : bn;
            if (s(e, e.xIsPrimaryAxis, n, i), !e.subModification) return null;
            var o = (0, O.default)({}, i);
            (0, D.addEdges)(e.linkedEdges, o, {x: n.x - r.x, y: n.y - r.y});
            var a = e.subModification.setAll(mn(mn({}, t), {}, {
                rect: o,
                edges: e.linkedEdges,
                pageCoords: n,
                prevCoords: n,
                prevRect: o
            })), l = a.delta;
            return a.changed && (s(e, Math.abs(l.x) > Math.abs(l.y), a.coords, a.rect), (0, O.default)(n, a.coords)), a.eventProps
        }, defaults: {ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1}
    };

    function yn(t, e, i) {
        var n = t.startCoords, r = t.edgeSign;
        e ? i.y = n.y + (i.x - n.x) * r.y : i.x = n.x + (i.y - n.y) * r.x
    }

    function bn(t, e, i, n) {
        var r = t.startRect, s = t.startCoords, o = t.ratio, a = t.edgeSign;
        if (e) {
            var l = n.width / o;
            i.y = s.y + (l - r.height) * a.y
        } else {
            var c = n.height * o;
            i.x = s.x + (c - r.width) * a.x
        }
    }

    hn.aspectRatio = vn;
    var wn = (0, _e.makeModifier)(vn, "aspectRatio");
    hn.default = wn;
    var _n = {};
    Object.defineProperty(_n, "__esModule", {value: !0}), _n.default = void 0;
    var xn = function () {
    };
    xn._defaults = {};
    var En = xn;
    _n.default = En;
    var Tn = {};
    Object.defineProperty(Tn, "__esModule", {value: !0}), Object.defineProperty(Tn, "default", {
        enumerable: !0,
        get: function () {
            return _n.default
        }
    });
    var Cn = {};

    function Sn(t, e, i) {
        return s.default.func(t) ? D.resolveRectLike(t, e.interactable, e.element, [i.x, i.y, e]) : D.resolveRectLike(t, e.interactable, e.element)
    }

    Object.defineProperty(Cn, "__esModule", {value: !0}), Cn.default = void 0, Cn.getRestrictionRect = Sn, Cn.restrict = void 0;
    var Mn = {
        start: function (t) {
            var e = t.rect, i = t.startOffset, n = t.state, r = t.interaction, s = t.pageCoords, o = n.options,
                a = o.elementRect, l = (0, O.default)({left: 0, top: 0, right: 0, bottom: 0}, o.offset || {});
            if (e && a) {
                var c = Sn(o.restriction, r, s);
                if (c) {
                    var d = c.right - c.left - e.width, u = c.bottom - c.top - e.height;
                    d < 0 && (l.left += d, l.right += d), u < 0 && (l.top += u, l.bottom += u)
                }
                l.left += i.left - e.width * a.left, l.top += i.top - e.height * a.top, l.right += i.right - e.width * (1 - a.right), l.bottom += i.bottom - e.height * (1 - a.bottom)
            }
            n.offset = l
        }, set: function (t) {
            var e = t.coords, i = t.interaction, n = t.state, r = n.options, s = n.offset, o = Sn(r.restriction, i, e);
            if (o) {
                var a = D.xywhToTlbr(o);
                e.x = Math.max(Math.min(a.right - s.right, e.x), a.left + s.left), e.y = Math.max(Math.min(a.bottom - s.bottom, e.y), a.top + s.top)
            }
        }, defaults: {restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1}
    };
    Cn.restrict = Mn;
    var Pn = (0, _e.makeModifier)(Mn, "restrict");
    Cn.default = Pn;
    var On = {};
    Object.defineProperty(On, "__esModule", {value: !0}), On.restrictEdges = On.default = void 0;
    var Dn = {top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0},
        kn = {top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0};

    function An(t, e) {
        for (var i = ["top", "left", "bottom", "right"], n = 0; n < i.length; n++) {
            var r = i[n];
            r in t || (t[r] = e[r])
        }
        return t
    }

    var In = {
        noInner: Dn, noOuter: kn, start: function (t) {
            var e, i = t.interaction, n = t.startOffset, r = t.state, s = r.options;
            if (s) {
                var o = (0, Cn.getRestrictionRect)(s.offset, i, i.coords.start.page);
                e = D.rectToXY(o)
            }
            e = e || {x: 0, y: 0}, r.offset = {
                top: e.y + n.top,
                left: e.x + n.left,
                bottom: e.y - n.bottom,
                right: e.x - n.right
            }
        }, set: function (t) {
            var e = t.coords, i = t.edges, n = t.interaction, r = t.state, s = r.offset, o = r.options;
            if (i) {
                var a = (0, O.default)({}, e), l = (0, Cn.getRestrictionRect)(o.inner, n, a) || {},
                    c = (0, Cn.getRestrictionRect)(o.outer, n, a) || {};
                An(l, Dn), An(c, kn), i.top ? e.y = Math.min(Math.max(c.top + s.top, a.y), l.top + s.top) : i.bottom && (e.y = Math.max(Math.min(c.bottom + s.bottom, a.y), l.bottom + s.bottom)), i.left ? e.x = Math.min(Math.max(c.left + s.left, a.x), l.left + s.left) : i.right && (e.x = Math.max(Math.min(c.right + s.right, a.x), l.right + s.right))
            }
        }, defaults: {inner: null, outer: null, offset: null, endOnly: !1, enabled: !1}
    };
    On.restrictEdges = In;
    var zn = (0, _e.makeModifier)(In, "restrictEdges");
    On.default = zn;
    var Ln = {};
    Object.defineProperty(Ln, "__esModule", {value: !0}), Ln.restrictRect = Ln.default = void 0;
    var $n = (0, O.default)({
        get elementRect() {
            return {top: 0, left: 0, bottom: 1, right: 1}
        }, set elementRect(t) {
        }
    }, Cn.restrict.defaults), jn = {start: Cn.restrict.start, set: Cn.restrict.set, defaults: $n};
    Ln.restrictRect = jn;
    var Nn = (0, _e.makeModifier)(jn, "restrictRect");
    Ln.default = Nn;
    var Fn = {};
    Object.defineProperty(Fn, "__esModule", {value: !0}), Fn.restrictSize = Fn.default = void 0;
    var Rn = {width: -1 / 0, height: -1 / 0}, Bn = {width: 1 / 0, height: 1 / 0}, Hn = {
        start: function (t) {
            return On.restrictEdges.start(t)
        }, set: function (t) {
            var e = t.interaction, i = t.state, n = t.rect, r = t.edges, s = i.options;
            if (r) {
                var o = D.tlbrToXywh((0, Cn.getRestrictionRect)(s.min, e, t.coords)) || Rn,
                    a = D.tlbrToXywh((0, Cn.getRestrictionRect)(s.max, e, t.coords)) || Bn;
                i.options = {
                    endOnly: s.endOnly,
                    inner: (0, O.default)({}, On.restrictEdges.noInner),
                    outer: (0, O.default)({}, On.restrictEdges.noOuter)
                }, r.top ? (i.options.inner.top = n.bottom - o.height, i.options.outer.top = n.bottom - a.height) : r.bottom && (i.options.inner.bottom = n.top + o.height, i.options.outer.bottom = n.top + a.height), r.left ? (i.options.inner.left = n.right - o.width, i.options.outer.left = n.right - a.width) : r.right && (i.options.inner.right = n.left + o.width, i.options.outer.right = n.left + a.width), On.restrictEdges.set(t), i.options = s
            }
        }, defaults: {min: null, max: null, endOnly: !1, enabled: !1}
    };
    Fn.restrictSize = Hn;
    var Wn = (0, _e.makeModifier)(Hn, "restrictSize");
    Fn.default = Wn;
    var Yn = {};
    Object.defineProperty(Yn, "__esModule", {value: !0}), Object.defineProperty(Yn, "default", {
        enumerable: !0,
        get: function () {
            return _n.default
        }
    });
    var qn = {};
    Object.defineProperty(qn, "__esModule", {value: !0}), qn.snap = qn.default = void 0;
    var Xn = {
        start: function (t) {
            var e, i = t.interaction, n = t.interactable, r = t.element, s = t.rect, o = t.state, a = t.startOffset,
                l = o.options, c = l.offsetWithOrigin ? function (t) {
                    var e = t.interaction.element;
                    return (0, D.rectToXY)((0, D.resolveRectLike)(t.state.options.origin, null, null, [e])) || (0, I.default)(t.interactable, e, t.interaction.prepared.name)
                }(t) : {x: 0, y: 0};
            if ("startCoords" === l.offset) e = {x: i.coords.start.page.x, y: i.coords.start.page.y}; else {
                var d = (0, D.resolveRectLike)(l.offset, n, r, [i]);
                (e = (0, D.rectToXY)(d) || {x: 0, y: 0}).x += c.x, e.y += c.y
            }
            var u = l.relativePoints;
            o.offsets = s && u && u.length ? u.map((function (t, i) {
                return {index: i, relativePoint: t, x: a.left - s.width * t.x + e.x, y: a.top - s.height * t.y + e.y}
            })) : [{index: 0, relativePoint: null, x: e.x, y: e.y}]
        },
        set: function (t) {
            var e = t.interaction, i = t.coords, n = t.state, r = n.options, o = n.offsets,
                a = (0, I.default)(e.interactable, e.element, e.prepared.name), l = (0, O.default)({}, i), c = [];
            r.offsetWithOrigin || (l.x -= a.x, l.y -= a.y);
            for (var d = 0; d < o.length; d++) for (var u = o[d], p = l.x - u.x, h = l.y - u.y, f = 0, m = r.targets.length; f < m; f++) {
                var g, v = r.targets[f];
                (g = s.default.func(v) ? v(p, h, e._proxy, u, f) : v) && c.push({
                    x: (s.default.number(g.x) ? g.x : p) + u.x,
                    y: (s.default.number(g.y) ? g.y : h) + u.y,
                    range: s.default.number(g.range) ? g.range : r.range,
                    source: v,
                    index: f,
                    offset: u
                })
            }
            for (var y = {
                target: null,
                inRange: !1,
                distance: 0,
                range: 0,
                delta: {x: 0, y: 0}
            }, b = 0; b < c.length; b++) {
                var w = c[b], _ = w.range, x = w.x - l.x, E = w.y - l.y, T = (0, $.default)(x, E), C = T <= _;
                _ === 1 / 0 && y.inRange && y.range !== 1 / 0 && (C = !1), y.target && !(C ? y.inRange && _ !== 1 / 0 ? T / _ < y.distance / y.range : _ === 1 / 0 && y.range !== 1 / 0 || T < y.distance : !y.inRange && T < y.distance) || (y.target = w, y.distance = T, y.range = _, y.inRange = C, y.delta.x = x, y.delta.y = E)
            }
            return y.inRange && (i.x = y.target.x, i.y = y.target.y), n.closest = y, y
        },
        defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            offsetWithOrigin: !0,
            origin: null,
            relativePoints: null,
            endOnly: !1,
            enabled: !1
        }
    };
    qn.snap = Xn;
    var Vn = (0, _e.makeModifier)(Xn, "snap");
    qn.default = Vn;
    var Gn = {};

    function Un(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    Object.defineProperty(Gn, "__esModule", {value: !0}), Gn.snapSize = Gn.default = void 0;
    var Zn = {
        start: function (t) {
            var e = t.state, i = t.edges, n = e.options;
            if (!i) return null;
            t.state = {
                options: {
                    targets: null,
                    relativePoints: [{x: i.left ? 0 : 1, y: i.top ? 0 : 1}],
                    offset: n.offset || "self",
                    origin: {x: 0, y: 0},
                    range: n.range
                }
            }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], qn.snap.start(t), e.offsets = t.state.offsets, t.state = e
        }, set: function (t) {
            var e, i = t.interaction, n = t.state, r = t.coords, o = n.options, a = n.offsets,
                l = {x: r.x - a[0].x, y: r.y - a[0].y};
            n.options = (0, O.default)({}, o), n.options.targets = [];
            for (var c = 0; c < (o.targets || []).length; c++) {
                var d = (o.targets || [])[c], u = void 0;
                if (u = s.default.func(d) ? d(l.x, l.y, i) : d) {
                    for (var p = 0; p < n.targetFields.length; p++) {
                        var h = (2, function (t) {
                            if (Array.isArray(t)) return t
                        }(e = n.targetFields[p]) || function (t, e) {
                            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != i) {
                                var n, r, s = [], o = !0, a = !1;
                                try {
                                    for (i = i.call(t); !(o = (n = i.next()).done) && (s.push(n.value), 2 !== s.length); o = !0) ;
                                } catch (t) {
                                    a = !0, r = t
                                } finally {
                                    try {
                                        o || null == i.return || i.return()
                                    } finally {
                                        if (a) throw r
                                    }
                                }
                                return s
                            }
                        }(e) || function (t, e) {
                            if (t) {
                                if ("string" == typeof t) return Un(t, 2);
                                var i = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Un(t, 2) : void 0
                            }
                        }(e) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()), f = h[0], m = h[1];
                        if (f in u || m in u) {
                            u.x = u[f], u.y = u[m];
                            break
                        }
                    }
                    n.options.targets.push(u)
                }
            }
            var g = qn.snap.set(t);
            return n.options = o, g
        }, defaults: {range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1}
    };
    Gn.snapSize = Zn;
    var Kn = (0, _e.makeModifier)(Zn, "snapSize");
    Gn.default = Kn;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", {value: !0}), Qn.snapEdges = Qn.default = void 0;
    var Jn = {
        start: function (t) {
            var e = t.edges;
            return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], Gn.snapSize.start(t)) : null
        },
        set: Gn.snapSize.set,
        defaults: (0, O.default)((0, he.default)(Gn.snapSize.defaults), {
            targets: null,
            range: null,
            offset: {x: 0, y: 0}
        })
    };
    Qn.snapEdges = Jn;
    var tr = (0, _e.makeModifier)(Jn, "snapEdges");
    Qn.default = tr;
    var er = {};
    Object.defineProperty(er, "__esModule", {value: !0}), Object.defineProperty(er, "default", {
        enumerable: !0,
        get: function () {
            return _n.default
        }
    });
    var ir = {};
    Object.defineProperty(ir, "__esModule", {value: !0}), Object.defineProperty(ir, "default", {
        enumerable: !0,
        get: function () {
            return _n.default
        }
    });
    var nr = {};
    Object.defineProperty(nr, "__esModule", {value: !0}), nr.default = void 0;
    var rr = {
        aspectRatio: hn.default,
        restrictEdges: On.default,
        restrict: Cn.default,
        restrictRect: Ln.default,
        restrictSize: Fn.default,
        snapEdges: Qn.default,
        snap: qn.default,
        snapSize: Gn.default,
        spring: er.default,
        avoid: Tn.default,
        transform: ir.default,
        rubberband: Yn.default
    };
    nr.default = rr;
    var sr = {};
    Object.defineProperty(sr, "__esModule", {value: !0}), sr.default = void 0;
    var or = {
        id: "modifiers", install: function (t) {
            var e = t.interactStatic;
            for (var i in t.usePlugin(_e.default), t.usePlugin(dn.default), e.modifiers = nr.default, nr.default) {
                var n = nr.default[i], r = n._defaults, s = n._methods;
                r._methods = s, t.defaults.perAction[i] = r
            }
        }
    }, ar = or;
    sr.default = ar;
    var lr = {};

    function cr(t) {
        return cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, cr(t)
    }

    function dr(t, e) {
        return dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, dr(t, e)
    }

    function ur(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function pr(t) {
        return pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, pr(t)
    }

    Object.defineProperty(lr, "__esModule", {value: !0}), lr.default = lr.PointerEvent = void 0;
    var hr = function (t) {
        !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), e && dr(t, e)
        }(o, t);
        var e, i, n, r, s = (n = o, r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }(), function () {
            var t, e = pr(n);
            if (r) {
                var i = pr(this).constructor;
                t = Reflect.construct(e, arguments, i)
            } else t = e.apply(this, arguments);
            return function (t, e) {
                if (e && ("object" === cr(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return ur(t)
            }(this, t)
        });

        function o(t, e, i, n, r, a) {
            var l;
            if (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, o), l = s.call(this, r), N.pointerExtend(ur(l), i), i !== e && N.pointerExtend(ur(l), e), l.timeStamp = a, l.originalEvent = i, l.type = t, l.pointerId = N.getPointerId(e), l.pointerType = N.getPointerType(e), l.target = n, l.currentTarget = null, "tap" === t) {
                var c = r.getPointerIndex(e);
                l.dt = l.timeStamp - r.pointers[c].downTime;
                var d = l.timeStamp - r.tapTime;
                l.double = !!r.prevTap && "doubletap" !== r.prevTap.type && r.prevTap.target === l.target && d < 500
            } else "doubletap" === t && (l.dt = e.timeStamp - r.tapTime, l.double = !0);
            return l
        }

        return e = o, (i = [{
            key: "_subtractOrigin", value: function (t) {
                var e = t.x, i = t.y;
                return this.pageX -= e, this.pageY -= i, this.clientX -= e, this.clientY -= i, this
            }
        }, {
            key: "_addOrigin", value: function (t) {
                var e = t.x, i = t.y;
                return this.pageX += e, this.pageY += i, this.clientX += e, this.clientY += i, this
            }
        }, {
            key: "preventDefault", value: function () {
                this.originalEvent.preventDefault()
            }
        }]) && function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }(e.prototype, i), Object.defineProperty(e, "prototype", {writable: !1}), o
    }(q.BaseEvent);
    lr.PointerEvent = lr.default = hr;
    var fr = {};
    Object.defineProperty(fr, "__esModule", {value: !0}), fr.default = void 0;
    var mr = {
        id: "pointer-events/base",
        before: ["inertia", "modifiers", "auto-start", "actions"],
        install: function (t) {
            t.pointerEvents = mr, t.defaults.actions.pointerEvents = mr.defaults, (0, O.default)(t.actions.phaselessTypes, mr.types)
        },
        listeners: {
            "interactions:new": function (t) {
                var e = t.interaction;
                e.prevTap = null, e.tapTime = 0
            }, "interactions:update-pointer": function (t) {
                var e = t.down, i = t.pointerInfo;
                !e && i.hold || (i.hold = {duration: 1 / 0, timeout: null})
            }, "interactions:move": function (t, e) {
                var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget;
                t.duplicate || i.pointerIsDown && !i.pointerWasMoved || (i.pointerIsDown && yr(t), gr({
                    interaction: i,
                    pointer: n,
                    event: r,
                    eventTarget: s,
                    type: "move"
                }, e))
            }, "interactions:down": function (t, e) {
                !function (t, e) {
                    for (var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget, o = t.pointerIndex, a = i.pointers[o].hold, l = x.getPath(s), c = {
                        interaction: i,
                        pointer: n,
                        event: r,
                        eventTarget: s,
                        type: "hold",
                        targets: [],
                        path: l,
                        node: null
                    }, d = 0; d < l.length; d++) {
                        var u = l[d];
                        c.node = u, e.fire("pointerEvents:collect-targets", c)
                    }
                    if (c.targets.length) {
                        for (var p = 1 / 0, h = 0; h < c.targets.length; h++) {
                            var f = c.targets[h].eventable.options.holdDuration;
                            f < p && (p = f)
                        }
                        a.duration = p, a.timeout = setTimeout((function () {
                            gr({interaction: i, eventTarget: s, pointer: n, event: r, type: "hold"}, e)
                        }), p)
                    }
                }(t, e), gr(t, e)
            }, "interactions:up": function (t, e) {
                yr(t), gr(t, e), function (t, e) {
                    var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget;
                    i.pointerWasMoved || gr({interaction: i, eventTarget: s, pointer: n, event: r, type: "tap"}, e)
                }(t, e)
            }, "interactions:cancel": function (t, e) {
                yr(t), gr(t, e)
            }
        },
        PointerEvent: lr.PointerEvent,
        fire: gr,
        collectEventTargets: vr,
        defaults: {holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: {x: 0, y: 0}},
        types: {down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0}
    };

    function gr(t, e) {
        var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget, o = t.type, a = t.targets,
            l = void 0 === a ? vr(t, e) : a, c = new lr.PointerEvent(o, n, r, s, i, e.now());
        e.fire("pointerEvents:new", {pointerEvent: c});
        for (var d = {
            interaction: i,
            pointer: n,
            event: r,
            eventTarget: s,
            targets: l,
            type: o,
            pointerEvent: c
        }, u = 0; u < l.length; u++) {
            var p = l[u];
            for (var h in p.props || {}) c[h] = p.props[h];
            var f = (0, I.default)(p.eventable, p.node);
            if (c._subtractOrigin(f), c.eventable = p.eventable, c.currentTarget = p.node, p.eventable.fire(c), c._addOrigin(f), c.immediatePropagationStopped || c.propagationStopped && u + 1 < l.length && l[u + 1].node !== c.currentTarget) break
        }
        if (e.fire("pointerEvents:fired", d), "tap" === o) {
            var m = c.double ? gr({interaction: i, pointer: n, event: r, eventTarget: s, type: "doubletap"}, e) : c;
            i.prevTap = m, i.tapTime = m.timeStamp
        }
        return c
    }

    function vr(t, e) {
        var i = t.interaction, n = t.pointer, r = t.event, s = t.eventTarget, o = t.type, a = i.getPointerIndex(n),
            l = i.pointers[a];
        if ("tap" === o && (i.pointerWasMoved || !l || l.downTarget !== s)) return [];
        for (var c = x.getPath(s), d = {
            interaction: i,
            pointer: n,
            event: r,
            eventTarget: s,
            type: o,
            path: c,
            targets: [],
            node: null
        }, u = 0; u < c.length; u++) {
            var p = c[u];
            d.node = p, e.fire("pointerEvents:collect-targets", d)
        }
        return "hold" === o && (d.targets = d.targets.filter((function (t) {
            var e;
            return t.eventable.options.holdDuration === (null == (e = i.pointers[a]) ? void 0 : e.hold.duration)
        }))), d.targets
    }

    function yr(t) {
        var e = t.interaction, i = t.pointerIndex, n = e.pointers[i].hold;
        n && n.timeout && (clearTimeout(n.timeout), n.timeout = null)
    }

    var br = mr;
    fr.default = br;
    var wr = {};

    function _r(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null)
    }

    Object.defineProperty(wr, "__esModule", {value: !0}), wr.default = void 0;
    var xr = {
        id: "pointer-events/holdRepeat", install: function (t) {
            t.usePlugin(fr.default);
            var e = t.pointerEvents;
            e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0
        }, listeners: ["move", "up", "cancel", "endall"].reduce((function (t, e) {
            return t["pointerEvents:".concat(e)] = _r, t
        }), {
            "pointerEvents:new": function (t) {
                var e = t.pointerEvent;
                "hold" === e.type && (e.count = (e.count || 0) + 1)
            }, "pointerEvents:fired": function (t, e) {
                var i = t.interaction, n = t.pointerEvent, r = t.eventTarget, s = t.targets;
                if ("hold" === n.type && s.length) {
                    var o = s[0].eventable.options.holdRepeatInterval;
                    o <= 0 || (i.holdIntervalHandle = setTimeout((function () {
                        e.pointerEvents.fire({interaction: i, eventTarget: r, type: "hold", pointer: n, event: n}, e)
                    }), o))
                }
            }
        })
    }, Er = xr;
    wr.default = Er;
    var Tr = {};

    function Cr(t) {
        return (0, O.default)(this.events.options, t), this
    }

    Object.defineProperty(Tr, "__esModule", {value: !0}), Tr.default = void 0;
    var Sr = {
        id: "pointer-events/interactableTargets", install: function (t) {
            var e = t.Interactable;
            e.prototype.pointerEvents = Cr;
            var i = e.prototype._backCompatOption;
            e.prototype._backCompatOption = function (t, e) {
                var n = i.call(this, t, e);
                return n === this && (this.events.options[t] = e), n
            }
        }, listeners: {
            "pointerEvents:collect-targets": function (t, e) {
                var i = t.targets, n = t.node, r = t.type, s = t.eventTarget;
                e.interactables.forEachMatch(n, (function (t) {
                    var e = t.events, o = e.options;
                    e.types[r] && e.types[r].length && t.testIgnoreAllow(o, n, s) && i.push({
                        node: n,
                        eventable: e,
                        props: {interactable: t}
                    })
                }))
            }, "interactable:new": function (t) {
                var e = t.interactable;
                e.events.getRect = function (t) {
                    return e.getRect(t)
                }
            }, "interactable:set": function (t, e) {
                var i = t.interactable, n = t.options;
                (0, O.default)(i.events.options, e.pointerEvents.defaults), (0, O.default)(i.events.options, n.pointerEvents || {})
            }
        }
    }, Mr = Sr;
    Tr.default = Mr;
    var Pr = {};
    Object.defineProperty(Pr, "__esModule", {value: !0}), Pr.default = void 0;
    var Or = {
        id: "pointer-events", install: function (t) {
            t.usePlugin(fr), t.usePlugin(wr.default), t.usePlugin(Tr.default)
        }
    }, Dr = Or;
    Pr.default = Dr;
    var kr = {};

    function Ar(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function (e) {
            return function (t, e, i) {
                for (var n = s.default.string(t.target) ? G.from(t._context.querySelectorAll(t.target)) : [t.target], r = i.window.Promise, o = r ? [] : null, a = function () {
                    var s = n[l], a = t.getRect(s);
                    if (!a) return "break";
                    var c = G.find(i.interactions.list, (function (i) {
                        return i.interacting() && i.interactable === t && i.element === s && i.prepared.name === e.name
                    })), d = void 0;
                    if (c) c.move(), o && (d = c._reflowPromise || new r((function (t) {
                        c._reflowResolve = t
                    }))); else {
                        var u = (0, D.tlbrToXywh)(a),
                            p = {page: {x: u.x, y: u.y}, client: {x: u.x, y: u.y}, timeStamp: i.now()},
                            h = N.coordsToEvent(p);
                        d = function (t, e, i, n, r) {
                            var s = t.interactions.new({pointerType: "reflow"}),
                                o = {interaction: s, event: r, pointer: r, eventTarget: i, phase: "reflow"};
                            s.interactable = e, s.element = i, s.prevEvent = r, s.updatePointer(r, r, i, !0), N.setZeroCoords(s.coords.delta), (0, Lt.copyAction)(s.prepared, n), s._doPhase(o);
                            var a = t.window.Promise, l = a ? new a((function (t) {
                                s._reflowResolve = t
                            })) : void 0;
                            return s._reflowPromise = l, s.start(n, e, i), s._interacting ? (s.move(o), s.end(r)) : (s.stop(), s._reflowResolve()), s.removePointer(r, r), l
                        }(i, t, s, e, h)
                    }
                    o && o.push(d)
                }, l = 0; l < n.length && "break" !== a(); l++) ;
                return o && r.all(o).then((function () {
                    return t
                }))
            }(this, e, t)
        }
    }

    Object.defineProperty(kr, "__esModule", {value: !0}), kr.default = void 0, kr.install = Ar;
    var Ir = {
        id: "reflow", install: Ar, listeners: {
            "interactions:stop": function (t, e) {
                var i = t.interaction;
                "reflow" === i.pointerType && (i._reflowResolve && i._reflowResolve(), G.remove(e.interactions.list, i))
            }
        }
    }, zr = Ir;
    kr.default = zr;
    var Lr = {exports: {}};

    function $r(t) {
        return $r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, $r(t)
    }

    Object.defineProperty(Lr.exports, "__esModule", {value: !0}), Lr.exports.default = void 0, Ji.default.use(se.default), Ji.default.use(Ye.default), Ji.default.use(Pr.default), Ji.default.use(Qe.default), Ji.default.use(sr.default), Ji.default.use(ne.default), Ji.default.use(xt.default), Ji.default.use(Ot.default), Ji.default.use(kr.default);
    var jr = Ji.default;
    if (Lr.exports.default = jr, "object" === $r(Lr) && Lr) try {
        Lr.exports = Ji.default
    } catch (t) {
    }
    Ji.default.default = Ji.default, xt.default, Ot.default, ne.default, se.default, pe.default, Qe.default, Ji.default, sr.default, Ye.default, Pr.default, kr.default, Lr = Lr.exports;
    var Nr = {exports: {}};

    function Fr(t) {
        return Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Fr(t)
    }

    Object.defineProperty(Nr.exports, "__esModule", {value: !0}), Nr.exports.default = void 0;
    var Rr = Lr.default;
    if (Nr.exports.default = Rr, "object" === Fr(Nr) && Nr) try {
        Nr.exports = Lr.default
    } catch (t) {
    }
    return Lr.default.default = Lr.default, Nr.exports
})), function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function (i) {
        return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function (t, e) {
    "use strict";

    function i(i, s, a) {
        (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            return "string" == typeof t ? function (t, e, n) {
                var r, s = "$()." + i + '("' + e + '")';
                return t.each((function (t, l) {
                    var c = a.data(l, i);
                    if (c) {
                        var d = c[e];
                        if (d && "_" != e.charAt(0)) {
                            var u = d.apply(c, n);
                            r = void 0 === r ? u : r
                        } else o(s + " is not a valid method")
                    } else o(i + " not initialized. Cannot call methods, i.e. " + s)
                })), void 0 !== r ? r : t
            }(this, t, r.call(arguments, 1)) : (function (t, e) {
                t.each((function (t, n) {
                    var r = a.data(n, i);
                    r ? (r.option(e), r._init()) : (r = new s(n, e), a.data(n, i, r))
                }))
            }(this, t), this)
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var r = Array.prototype.slice, s = t.console, o = void 0 === s ? function () {
    } : function (t) {
        s.error(t)
    };
    return n(e || t.jQuery), i
})), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                var s = i[r];
                n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
})), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function e(t) {
        var e = getComputedStyle(t);
        return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
            var s = document.body || document.documentElement;
            s.appendChild(i);
            var o = e(i);
            r = 200 == Math.round(t(o.width)), n.isBoxSizeOuter = r, s.removeChild(i)
        }
    }

    function n(n) {
        if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
            var s = e(n);
            if ("none" == s.display) return function () {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; a > e; e++) t[o[e]] = 0;
                return t
            }();
            var l = {};
            l.width = n.offsetWidth, l.height = n.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == s.boxSizing, d = 0; a > d; d++) {
                var u = o[d], p = s[u], h = parseFloat(p);
                l[u] = isNaN(h) ? 0 : h
            }
            var f = l.paddingLeft + l.paddingRight, m = l.paddingTop + l.paddingBottom,
                g = l.marginLeft + l.marginRight, v = l.marginTop + l.marginBottom,
                y = l.borderLeftWidth + l.borderRightWidth, b = l.borderTopWidth + l.borderBottomWidth, w = c && r,
                _ = t(s.width);
            !1 !== _ && (l.width = _ + (w ? 0 : f + y));
            var x = t(s.height);
            return !1 !== x && (l.height = x + (w ? 0 : m + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + v, l
        }
    }

    var r, s = "undefined" == typeof console ? function () {
        } : function (t) {
            console.error(t)
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = o.length, l = !1;
    return n
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
})), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function (i) {
        return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function (t, e) {
    var i = {
        extend: function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }
    }, n = Array.prototype.slice;
    i.makeArray = function (t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var r = [];
        return t.forEach((function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void r.push(t);
                e(t, n) && r.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) r.push(i[s])
            }
        })), r
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e], r = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[r];
            clearTimeout(t);
            var e = arguments, s = this;
            this[r] = setTimeout((function () {
                n.apply(s, e), delete s[r]
            }), i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, (function (t, e, i) {
            return e + "-" + i
        })).toLowerCase()
    };
    var r = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady((function () {
            var s = i.toDashed(n), o = "data-" + s, a = document.querySelectorAll("[" + o + "]"),
                l = document.querySelectorAll(".js-" + s), c = i.makeArray(a).concat(i.makeArray(l)),
                d = o + "-options", u = t.jQuery;
            c.forEach((function (t) {
                var i, s = t.getAttribute(o) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (e) {
                    return void (r && r.error("Error parsing " + o + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                u && u.data(t, n, a)
            }))
        }))
    }, i
})), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, (function (t, e) {
    "use strict";

    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var n = document.documentElement.style, r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
        o = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], a = {
            transform: s,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        }, l = i.prototype = Object.create(t.prototype);
    l.constructor = i, l._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.getSize = function () {
        this.size = e(this.element)
    }, l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    }, l.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], r = t[i ? "top" : "bottom"],
            s = parseFloat(n), o = parseFloat(r), a = this.layout.size;
        -1 != n.indexOf("%") && (s = s / 100 * a.width), -1 != r.indexOf("%") && (o = o / 100 * a.height), s = isNaN(s) ? 0 : s, o = isNaN(o) ? 0 : o, s -= e ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = o
    }, l.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"), r = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right",
            o = i ? "right" : "left", a = this.position.x + t[r];
        e[s] = this.getXValue(a), e[o] = "";
        var l = n ? "paddingTop" : "paddingBottom", c = n ? "top" : "bottom", d = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, r = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !r || this.isTransitioning) {
            var s = t - i, o = e - n, a = {};
            a.transform = this.getTranslate(s, o), this.transition({
                to: a,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, l._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var c = "opacity," + function (t) {
        return t.replace(/([A-Z])/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }(s);
    l.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(o, this, !1)
        }
    }, l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, l.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var d = {"-webkit-transform": "transform"};
    l.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                for (var e in t) return !1;
                return !0
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var u = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return l.removeTransitionStyles = function () {
        this.css(u)
    }, l.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, l.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, l.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, l.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, l.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, l.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, i
})), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function (i, n, r, s) {
        return e(t, i, n, r, s)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function (t, e, i, n, r) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var r = ++d;
            this.element.outlayerGUID = r, u[r] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function o(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    var a = t.console, l = t.jQuery, c = function () {
    }, d = 0, u = {};
    s.namespace = "outlayer", s.Item = r, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var p = s.prototype;
    n.extend(p, e.prototype), p.option = function (t) {
        n.extend(this.options, t)
    }, p._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, p.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) {
            var s = new i(e[r], this);
            n.push(s)
        }
        return n
    }, p._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function () {
        return this.items.map((function (t) {
            return t.element
        }))
    }, p.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function () {
        this.getSize()
    }, p.getSize = function () {
        this.size = i(this.element)
    }, p._getMeasurement = function (t, e) {
        var n, r = this.options[t];
        r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r), this[t] = n ? i(n)[e] : r) : this[t] = 0
    }, p.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function (t) {
        return t.filter((function (t) {
            return !t.isIgnored
        }))
    }, p._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach((function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }), this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, p._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach((function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }), this)
    }, p.updateStagger = function () {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = function (t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
            return i.length ? (i = parseFloat(i)) * (h[n] || 1) : 0
        }(t), this.stagger)
    }, p._positionItem = function (t, e, i, n, r) {
        n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function () {
        this.resizeContainer()
    }, p.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, p._getContainerSize = c, p._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function (t, e) {
        function i() {
            r.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++o == s && i()
        }

        var r = this, s = e.length;
        if (e && s) {
            var o = 0;
            e.forEach((function (e) {
                e.once(t, n)
            }))
        } else i()
    }, p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) {
            var r = l.Event(e);
            r.type = t, this.$element.trigger(r, i)
        } else this.$element.trigger(t, i)
    }, p.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function (t) {
        (t = this._find(t)) && t.forEach((function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }), this)
    }, p._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, p._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = c, p._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, r = i(t);
        return {
            left: e.left - n.left - r.marginLeft,
            top: e.top - n.top - r.marginTop,
            right: n.right - e.right - r.marginRight,
            bottom: n.bottom - e.bottom - r.marginBottom
        }
    }, p.handleEvent = n.handleEvent, p.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function () {
        this.resize()
    }, n.debounceMethod(s, "onresize", 100), p.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function (t, i) {
                t.stagger(i * e), t.reveal()
            }))
        }
    }, p.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function (t, i) {
                t.stagger(i * e), t.hide()
            }))
        }
    }, p.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach((function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }), this), e
    }, p.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }), this)
    }, p.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
            t.destroy()
        })), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
    }, s.create = function (t, e) {
        var i = o(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = o(r), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    };
    var h = {ms: 1, s: 1e3};
    return s.Item = r, s
})), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, (function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, r = this.containerWidth + this.gutter, s = r / n, o = n - r % n;
        s = Math[o && 1 > o ? "round" : "floor"](s), this.cols = Math.max(s, 1)
    }, n.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), r = {
            x: this.columnWidth * n.col,
            y: n.y
        }, s = n.y + t.size.outerHeight, o = i + n.col, a = n.col; o > a; a++) this.colYs[a] = s;
        return r
    }, n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, n._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), r = this._getOption("originLeft") ? n.left : n.right,
            s = r + i.outerWidth, o = Math.floor(r / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = o; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}));
let extend = function (t) {
    t = t || {};
    for (let e = 1; e < arguments.length; e++) if (arguments[e]) for (let i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
    return t
};

function ready(t) {
    "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
}

function popupBlog(t) {
    var e = $("#modal-popup-slide");
    if (0 == e.length) {
        $("body").append('<div class="modal fade modal-highlight" id="modal-popup-slide" tabindex="-1" aria-hidden="true">\n        <div class="modal-dialog modal-dialog-centered modal-xl">\n          <div class="modal-content">\n            <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">\n              <span>x</span>\n            </button>\n            <div class="main-content">\n\n            </div>\n          </div>\n        </div>\n      </div>'), e = $("#modal-popup-slide")
    }
    e.modal("show"), e.find(".main-content").html("Loading"), $.ajax({
        url: t, dataType: "html", success: function (t) {
            e.find(".main-content").html(t);
            var i = document.querySelector("#gallery-slider-main"), n = JSON.parse(i.getAttribute("data-options"));
            new Swiper(i, n)
        }
    }).fail((function (t) {
        console.error("Error:", t)
    }))
}

ready((() => {
    const t = document.getElementById("hero-btn-play");
    if (t) {
        const e = document.getElementById("hero-video");
        let i = !1;
        t.addEventListener("click", (n => {
            n.preventDefault(), console.log(!i), i ? e.paused ? (e.play(), t.classList.add("paused")) : (e.pause(), t.classList.remove("paused")) : (i = !0, e.src = e.dataset.srcFull, e.poster = e.dataset.posterFull, t.classList.add("paused"))
        }))
    }
    document.querySelectorAll('.nav-style-1 .nav-link[data-bs-toggle="tab"]').forEach((t => {
        t.addEventListener("shown.bs.tab", (t => {
            t.target.closest(".dropdown").querySelector(".dropdown-toggle").textContent = t.target.textContent
        }))
    }))
})), ready((() => {
    "use strict";
    if (window.innerWidth < 992) {
        const t = document.getElementById("navbar-collapse"), e = document.getElementById("navbar-toggle");
        let i;
        t.querySelectorAll(".dropdown-toggle").forEach((t => {
            t.addEventListener("click", (e => {
                e.preventDefault();
                const i = t.nextElementSibling;
                if (i.classList.contains("show")) i.style.height = "auto", i.style.height = i.clientHeight + "px", setTimeout((() => {
                    i.style.height = "0"
                }), 0), setTimeout((() => {
                    i.classList.remove("show")
                }), 300); else {
                    i.classList.add("show"), i.style.height = "auto";
                    const t = i.clientHeight + "px";
                    i.style.height = "0", setTimeout((() => {
                        i.style.height = t
                    }), 0), setTimeout((() => {
                        i.style.height = ""
                    }), 300)
                }
            }))
        })), e.addEventListener("click", (e => {
            e.preventDefault(), t.classList.toggle("show"), t.classList.contains("show") ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "auto"
        })), document.getElementById("navbar-close").addEventListener("click", (() => {
            i()
        })), i = function () {
            const t = document.createEvent("HTMLEvents");
            t.initEvent("click", !0, !1), e.dispatchEvent(t)
        }
    }
})), ready((() => {
    "use strict";
    const t = document.getElementById("map"), e = document.querySelectorAll(".map-item");
    Array.prototype.forEach.call(e, (e => {
        e.addEventListener("show.bs.dropdown", (() => {
            setTimeout((() => {
                t.classList.add("active")
            }), 50)
        })), e.addEventListener("hide.bs.dropdown", (() => {
            t.classList.remove("active")
        })), e.querySelector(".card-close").addEventListener("click", (i => {
            i.preventDefault(), t.classList.remove("active"), bootstrap.Dropdown.getInstance(e.querySelector(".map-node")).hide()
        }))
    }))
})), ready((() => {
    "use strict";
    const t = document.querySelector(".compare");
    if (t) {
        const e = t.querySelector(".compare-front");
        let i;
        interact(e).resizable({
            edges: {
                right: window.innerWidth >= 992 && ".compare-control",
                bottom: window.innerWidth < 992 && ".compare-control"
            }, listeners: {
                move: function (e) {
                    let {x: n, y: r} = e.target.dataset;
                    n = (parseFloat(n) || 0) + e.deltaRect.left, r = (parseFloat(r) || 0) + e.deltaRect.top, Object.assign(e.target.style, {
                        width: `${e.rect.width}px`,
                        height: `${e.rect.height}px`,
                        transform: `translate(${n}px, ${r}px)`
                    }), Object.assign(e.target.dataset, {
                        x: n,
                        y: r
                    }), i = window.innerWidth >= 992 ? Math.round(100 * e.rect.width / t.offsetWidth) : Math.round(100 * e.rect.height / t.offsetHeight), i < 50 ? t.classList.add("active") : t.classList.remove("active")
                }
            }
        })
    }
})), ready((() => {
    "use strict";
    const t = document.querySelector(".header-headroom");
    if (t) {
        let e = extend({}, {tolerance: 5, offset: 100}, JSON.parse(t.getAttribute("data-options")));
        new Headroom(t, e).init()
    }
})), ready((() => {
    "use strict";
    const t = document.querySelectorAll('[data-plugin="swiper"]');
    Array.prototype.forEach.call(t, (t => {
        let e = {
            navigation: {
                nextEl: t.querySelector(".swiper-button-next"),
                prevEl: t.querySelector(".swiper-button-prev")
            }, pagination: {el: t.querySelector(".swiper-pagination"), clickable: !0}
        }, i = extend({}, e, JSON.parse(t.getAttribute("data-options")));
        new Swiper(t, i)
    }))
})), ready((() => {
    "use strict";
    const t = document.getElementById("modal-video"), e = document.getElementById("video");
    t && (t.addEventListener("shown.bs.modal", (function (t) {
        e.setAttribute("src", t.relatedTarget.dataset.src + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
    })), t.addEventListener("hidden.bs.modal", (function () {
        e.setAttribute("src", "")
    })))
})), ready((() => {
    "use strict";
    const t = document.querySelectorAll('[data-plugin="photoswipe"]');
    Array.prototype.forEach.call(t, (t => {
        let e = {
            closeSVG: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pswp__icn"><path d="M18 6 6 18M6 6l12 12"/></svg>',
            zoomSVG: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pswp__icn"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',
            arrowPrevSVG: '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9L1 9M1 9L9.33333 0.999999M1 9L9.33333 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            arrowNextSVG: '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L21 9M21 9L12.6667 17M21 9L12.6667 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            gallery: t,
            children: "a",
            showHideAnimationType: "fade",
            zoomAnimationDuration: !1,
            pswpModule: PhotoSwipe,
            thumbs: !1
        }, i = extend({}, e, JSON.parse(t.getAttribute("data-options")));
        const n = new PhotoSwipeLightbox(i);
        setTimeout((() => {
            const e = t.querySelector(".swiper:not(.swiper-thumbs)");
            if (e) {
                const t = e.swiper;
                n.on("close", (() => {
                    t.slideTo(n.pswp.currIndex, 0)
                }))
            }
        }), 100), i.thumbs && n.on("uiRegister", (function () {
            n.pswp.ui.registerElement({
                name: "bulletsIndicator",
                className: "pswp__bullets-indicator",
                appendTo: "wrapper",
                onInit: (e, i) => {
                    const r = [];
                    let s, o = -1;
                    const a = t.querySelectorAll(n.options.children);
                    for (let t = 0; t < i.getNumItems(); t++) s = document.createElement("div"), s.className = "pswp__bullet", s.style.backgroundImage = `url('${a[t].href}')`, s.onclick = t => {
                        i.goTo(r.indexOf(t.target))
                    }, e.appendChild(s), r.push(s);
                    i.on("change", (() => {
                        o >= 0 && r[o].classList.remove("pswp__bullet--active"), r[i.currIndex].classList.add("pswp__bullet--active"), o = i.currIndex
                    }))
                }
            })
        })), n.on("uiRegister", (function () {
            n.pswp.ui.registerElement({
                name: "custom-caption",
                order: 9,
                isButton: !1,
                appendTo: "root",
                html: "Caption text",
                onInit: t => {
                    n.pswp.on("change", (() => {
                        const e = n.pswp.currSlide.data.element;
                        let i = "";
                        if (e) {
                            const t = e.querySelector(".hidden-caption-content");
                            i = t ? t.innerHTML : e.querySelector("img").getAttribute("alt")
                        }
                        t.innerHTML = `<div class="pswp__custom-caption-inner">${i}</div>` || ""
                    }))
                }
            })
        })), n.init()
    }))
})), ready((() => {
    "use strict";
    const t = document.querySelectorAll('[data-plugin="masonry"]');
    Array.prototype.forEach.call(t, (t => {
        let e = extend({}, {
            itemSelector: ".masonry-item",
            hiddenStyle: {opacity: 0},
            visibleStyle: {opacity: 1},
            percentPosition: !0
        }, JSON.parse(t.getAttribute("data-options")));
        imagesLoaded(t, (() => {
            new Masonry(t, e);
            $(document).on("masonry-reload", (function () {
                new Masonry(t, e)
            }))
        }))
    }))
})), ready((() => {
    "use strict";
    const t = document.querySelectorAll('[data-plugin="flatpickr"]');
    Array.prototype.forEach.call(t, (t => {
        let e = extend({}, {dateFormat: "d-m-Y", wrap: !0, locale: "vn"}, JSON.parse(t.getAttribute("data-options")));
        flatpickr(t, e)
    }))
})), ready((() => {
    "use strict";
    if (document.querySelector(".page-home") && window.innerWidth >= 992) {
        gsap.registerPlugin(ScrollTrigger);
        const t = document.getElementById("loader-text"), e = e => {
            t.textContent = `${Math.round(100 * e.progressedCount / e.images.length)}%`
        }, i = () => {
            setTimeout((() => {
                document.body.style.overflow = "auto", document.scrollingElement.scrollTo(0, 0), gsap.to("#loader", {autoAlpha: 0})
            }), 300);
            const t = gsap.timeline();
            t.from("#section-hero .section-title", {
                autoAlpha: 0,
                y: "-2rem"
            }, "-=0.2"), t.from("#section-hero .section-lead", {
                autoAlpha: 0,
                y: "-2rem"
            }, "-=0.2"), t.from("#section-hero .play-circle", {
                autoAlpha: 0,
                y: "-1.2rem"
            }, "-=0.2"), t.from(".header-cta", {
                autoAlpha: 0,
                y: "-2rem"
            }, "-=0.2"), t.from(".btn-watch-sticky", {autoAlpha: 0, y: "2rem"}, "<"), t.delay(.6)
        };
        imagesLoaded("body", {background: ".section"}).on("progress", e).on("always", i), ScrollTrigger.defaults({
            start: "top 80%",
            end: "80% bottom",
            scrub: 1
        });
        const n = "-=0.2", r = "4rem";
        gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-1"}
        }).from("#section-1 .section-title", {y: r}).from("#section-1 .section-lead", {y: r}, n), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-2"}
        }).from("#section-2 .blockquote", {y: r}).from("#section-2 .section-title", {y: r}, n).from("#section-2 .section-img-1", {xPercent: -100}, "<").from("#section-2 .section-img-1 img", {xPercent: 100}, "<").from("#section-2 .paragraph", {y: r}, "-=.4").from("#section-2 .btn-cta", {y: r}, n).from("#section-2 .section-img-3", {xPercent: -100}, "<").from("#section-2 .section-img-3 img", {xPercent: 100}, "<").from("#section-2 .section-img-2", {xPercent: -100}, "<").from("#section-2 .section-img-2 img", {xPercent: 100}, "<"), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-3"}
        }).from("#section-3 .blockquote ", {y: r}).from("#section-3 .section-title", {y: r}, "-=0.3").from("#section-3 .paragraph", {y: r}, n).from("#section-3 .btn-cta", {y: r}, n).from("#section-3 .swiper-container", {y: r}, n).from("#section-3 .swiper-button-next", {x: -50}).from("#section-3 .swiper-button-prev", {x: 50}, "<"), setTimeout((() => {
            gsap.set("#section-3 .section-top", {backgroundPosition: "50% 0%"}), gsap.to("#section-3 .section-top", {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {trigger: "#section-3 .section-top", start: "top bottom", end: "bottom top", scrub: !0}
            })
        }), 300), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-4"}
        }).from("#section-4 .blockquote", {y: r}).from("#section-4 .cuisine-1", {y: r}, n).from("#section-4 .section-title", {y: r}, n).from("#section-4 .paragraph", {y: r}, n).from("#section-4 .cuisine-2", {y: r}, "<").from("#section-4 .section-btn-more", {y: r}, n), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-5"}
        }).from("#section-5 .blockquote", {y: r}).from("#section-5 .section-img-1", {xPercent: -100}, n).from("#section-5 .section-img-1 img", {xPercent: 100}, "<").from("#section-5 .section-title", {y: r}, n).from("#section-5 .paragraph", {y: r}, n).from("#section-5 .btn-cta", {y: r}, n).from("#section-5 .section-img-2", {y: r}, n), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-6"}
        }).from("#section-6 .blockquote", {y: r}).from("#section-6 .section-title", {y: r}).from("#section-6 .paragraph", {y: r}, n).from("#section-6 .btn-cta", {y: r}, n), setTimeout((() => {
            gsap.set("#section-6 .section-nested", {backgroundPosition: "50% 0%"}), gsap.to("#section-6 .section-nested", {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#section-6 .section-nested",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                }
            })
        }), 300), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-7"}
        }).from("#section-7 .section-title", {y: r}).from("#section-7 .section-lead", {y: r}, n).from("#section-7 .thumbnail", {
            y: 100,
            stagger: .1
        }, n), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-8"}
        }).from("#section-8 .section-btn", {y: r}, 1.4), gsap.timeline({
            defaults: {autoAlpha: 0},
            scrollTrigger: {trigger: "#section-9"}
        }).from("#section-9 .thumbnail", {
            y: r,
            stagger: .1
        }).from("#section-9 .section-title", {y: r}, n).from("#section-9 .paragraph", {y: r}, n).from("#section-9 .btn-cta", {y: r}, n).from("#section-9 .section-btn-vr", {y: r}, n)
    }
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).flatpickr = e()
}(this, (function () {
    "use strict";
    var t = function () {
        return (t = Object.assign || function (t) {
            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    };

    function e() {
        for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
        var n = Array(t), r = 0;
        for (e = 0; e < i; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, r++) n[r] = s[o];
        return n
    }

    var i = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        n = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function (t) {
                return "undefined" != typeof console && console.warn(t)
            },
            getWeek: function (t) {
                var e = new Date(t.getTime());
                e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 3 - (e.getDay() + 6) % 7);
                var i = new Date(e.getFullYear(), 0, 4);
                return 1 + Math.round(((e.getTime() - i.getTime()) / 864e5 - 3 + (i.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        }, r = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (t) {
                var e = t % 100;
                if (e > 3 && e < 21) return "th";
                switch (e % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        }, s = function (t, e) {
            return void 0 === e && (e = 2), ("000" + t).slice(-1 * e)
        }, o = function (t) {
            return !0 === t ? 1 : 0
        };

    function a(t, e) {
        var i;
        return function () {
            var n = this, r = arguments;
            clearTimeout(i), i = setTimeout((function () {
                return t.apply(n, r)
            }), e)
        }
    }

    var l = function (t) {
        return t instanceof Array ? t : [t]
    };

    function c(t, e, i) {
        if (!0 === i) return t.classList.add(e);
        t.classList.remove(e)
    }

    function d(t, e, i) {
        var n = window.document.createElement(t);
        return e = e || "", i = i || "", n.className = e, void 0 !== i && (n.textContent = i), n
    }

    function u(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function p(t, e) {
        return e(t) ? t : t.parentNode ? p(t.parentNode, e) : void 0
    }

    function h(t, e) {
        var i = d("div", "numInputWrapper"), n = d("input", "numInput " + t), r = d("span", "arrowUp"),
            s = d("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? n.type = "number" : (n.type = "text", n.pattern = "\\d*"), void 0 !== e) for (var o in e) n.setAttribute(o, e[o]);
        return i.appendChild(n), i.appendChild(r), i.appendChild(s), i
    }

    function f(t) {
        try {
            return "function" == typeof t.composedPath ? t.composedPath()[0] : t.target
        } catch (e) {
            return t.target
        }
    }

    var m = function () {
    }, g = function (t, e, i) {
        return i.months[e ? "shorthand" : "longhand"][t]
    }, v = {
        D: m, F: function (t, e, i) {
            t.setMonth(i.months.longhand.indexOf(e))
        }, G: function (t, e) {
            t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(e))
        }, H: function (t, e) {
            t.setHours(parseFloat(e))
        }, J: function (t, e) {
            t.setDate(parseFloat(e))
        }, K: function (t, e, i) {
            t.setHours(t.getHours() % 12 + 12 * o(new RegExp(i.amPM[1], "i").test(e)))
        }, M: function (t, e, i) {
            t.setMonth(i.months.shorthand.indexOf(e))
        }, S: function (t, e) {
            t.setSeconds(parseFloat(e))
        }, U: function (t, e) {
            return new Date(1e3 * parseFloat(e))
        }, W: function (t, e, i) {
            var n = parseInt(e), r = new Date(t.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
            return r.setDate(r.getDate() - r.getDay() + i.firstDayOfWeek), r
        }, Y: function (t, e) {
            t.setFullYear(parseFloat(e))
        }, Z: function (t, e) {
            return new Date(e)
        }, d: function (t, e) {
            t.setDate(parseFloat(e))
        }, h: function (t, e) {
            t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(e))
        }, i: function (t, e) {
            t.setMinutes(parseFloat(e))
        }, j: function (t, e) {
            t.setDate(parseFloat(e))
        }, l: m, m: function (t, e) {
            t.setMonth(parseFloat(e) - 1)
        }, n: function (t, e) {
            t.setMonth(parseFloat(e) - 1)
        }, s: function (t, e) {
            t.setSeconds(parseFloat(e))
        }, u: function (t, e) {
            return new Date(parseFloat(e))
        }, w: m, y: function (t, e) {
            t.setFullYear(2e3 + parseFloat(e))
        }
    }, y = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    }, b = {
        Z: function (t) {
            return t.toISOString()
        }, D: function (t, e, i) {
            return e.weekdays.shorthand[b.w(t, e, i)]
        }, F: function (t, e, i) {
            return g(b.n(t, e, i) - 1, !1, e)
        }, G: function (t, e, i) {
            return s(b.h(t, e, i))
        }, H: function (t) {
            return s(t.getHours())
        }, J: function (t, e) {
            return void 0 !== e.ordinal ? t.getDate() + e.ordinal(t.getDate()) : t.getDate()
        }, K: function (t, e) {
            return e.amPM[o(t.getHours() > 11)]
        }, M: function (t, e) {
            return g(t.getMonth(), !0, e)
        }, S: function (t) {
            return s(t.getSeconds())
        }, U: function (t) {
            return t.getTime() / 1e3
        }, W: function (t, e, i) {
            return i.getWeek(t)
        }, Y: function (t) {
            return s(t.getFullYear(), 4)
        }, d: function (t) {
            return s(t.getDate())
        }, h: function (t) {
            return t.getHours() % 12 ? t.getHours() % 12 : 12
        }, i: function (t) {
            return s(t.getMinutes())
        }, j: function (t) {
            return t.getDate()
        }, l: function (t, e) {
            return e.weekdays.longhand[t.getDay()]
        }, m: function (t) {
            return s(t.getMonth() + 1)
        }, n: function (t) {
            return t.getMonth() + 1
        }, s: function (t) {
            return t.getSeconds()
        }, u: function (t) {
            return t.getTime()
        }, w: function (t) {
            return t.getDay()
        }, y: function (t) {
            return String(t.getFullYear()).substring(2)
        }
    }, w = function (t) {
        var e = t.config, i = void 0 === e ? n : e, s = t.l10n, o = void 0 === s ? r : s, a = t.isMobile,
            l = void 0 !== a && a;
        return function (t, e, n) {
            var r = n || o;
            return void 0 === i.formatDate || l ? e.split("").map((function (e, n, s) {
                return b[e] && "\\" !== s[n - 1] ? b[e](t, r, i) : "\\" !== e ? e : ""
            })).join("") : i.formatDate(t, e, r)
        }
    }, _ = function (t) {
        var e = t.config, i = void 0 === e ? n : e, s = t.l10n, o = void 0 === s ? r : s;
        return function (t, e, r, s) {
            if (0 === t || t) {
                var a, l = s || o, c = t;
                if (t instanceof Date) a = new Date(t.getTime()); else if ("string" != typeof t && void 0 !== t.toFixed) a = new Date(t); else if ("string" == typeof t) {
                    var d = e || (i || n).dateFormat, u = String(t).trim();
                    if ("today" === u) a = new Date, r = !0; else if (i && i.parseDate) a = i.parseDate(t, d); else if (/Z$/.test(u) || /GMT$/.test(u)) a = new Date(t); else {
                        for (var p = void 0, h = [], f = 0, m = 0, g = ""; f < d.length; f++) {
                            var b = d[f], w = "\\" === b, _ = "\\" === d[f - 1] || w;
                            if (y[b] && !_) {
                                g += y[b];
                                var x = new RegExp(g).exec(t);
                                x && (p = !0) && h["Y" !== b ? "push" : "unshift"]({fn: v[b], val: x[++m]})
                            } else w || (g += ".")
                        }
                        a = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), h.forEach((function (t) {
                            var e = t.fn, i = t.val;
                            return a = e(a, i, l) || a
                        })), a = p ? a : void 0
                    }
                }
                if (a instanceof Date && !isNaN(a.getTime())) return !0 === r && a.setHours(0, 0, 0, 0), a;
                i.errorHandler(new Error("Invalid date provided: " + c))
            }
        }
    };

    function x(t, e, i) {
        return void 0 === i && (i = !0), !1 !== i ? new Date(t.getTime()).setHours(0, 0, 0, 0) - new Date(e.getTime()).setHours(0, 0, 0, 0) : t.getTime() - e.getTime()
    }

    var E = function (t, e, i) {
        return 3600 * t + 60 * e + i
    }, T = 864e5;

    function C(t) {
        var e = t.defaultHour, i = t.defaultMinute, n = t.defaultSeconds;
        if (void 0 !== t.minDate) {
            var r = t.minDate.getHours(), s = t.minDate.getMinutes(), o = t.minDate.getSeconds();
            e < r && (e = r), e === r && i < s && (i = s), e === r && i === s && n < o && (n = t.minDate.getSeconds())
        }
        if (void 0 !== t.maxDate) {
            var a = t.maxDate.getHours(), l = t.maxDate.getMinutes();
            (e = Math.min(e, a)) === a && (i = Math.min(l, i)), e === a && i === l && (n = t.maxDate.getSeconds())
        }
        return {hours: e, minutes: i, seconds: n}
    }

    function S(m, v) {
        var b = {config: t(t({}, n), P.defaultConfig), l10n: r};

        function S() {
            var t;
            return (null === (t = b.calendarContainer) || void 0 === t ? void 0 : t.getRootNode()).activeElement || document.activeElement
        }

        function M(t) {
            return t.bind(b)
        }

        function O() {
            var t = b.config;
            !1 === t.weekNumbers && 1 === t.showMonths || !0 !== t.noCalendar && window.requestAnimationFrame((function () {
                if (void 0 !== b.calendarContainer && (b.calendarContainer.style.visibility = "hidden", b.calendarContainer.style.display = "block"), void 0 !== b.daysContainer) {
                    var e = (b.days.offsetWidth + 1) * t.showMonths;
                    b.daysContainer.style.width = e + "px", b.calendarContainer.style.width = e + (void 0 !== b.weekWrapper ? b.weekWrapper.offsetWidth : 0) + "px", b.calendarContainer.style.removeProperty("visibility"), b.calendarContainer.style.removeProperty("display")
                }
            }))
        }

        function D(t) {
            if (0 === b.selectedDates.length) {
                var e = void 0 === b.config.minDate || x(new Date, b.config.minDate) >= 0 ? new Date : new Date(b.config.minDate.getTime()),
                    i = C(b.config);
                e.setHours(i.hours, i.minutes, i.seconds, e.getMilliseconds()), b.selectedDates = [e], b.latestSelectedDateObj = e
            }
            void 0 !== t && "blur" !== t.type && function (t) {
                t.preventDefault();
                var e = "keydown" === t.type, i = f(t), n = i;
                void 0 !== b.amPM && i === b.amPM && (b.amPM.textContent = b.l10n.amPM[o(b.amPM.textContent === b.l10n.amPM[0])]);
                var r = parseFloat(n.getAttribute("min")), a = parseFloat(n.getAttribute("max")),
                    l = parseFloat(n.getAttribute("step")), c = parseInt(n.value, 10),
                    d = c + l * (t.delta || (e ? 38 === t.which ? 1 : -1 : 0));
                if (void 0 !== n.value && 2 === n.value.length) {
                    var u = n === b.hourElement, p = n === b.minuteElement;
                    d < r ? (d = a + d + o(!u) + (o(u) && o(!b.amPM)), p && F(void 0, -1, b.hourElement)) : d > a && (d = n === b.hourElement ? d - a - o(!b.amPM) : r, p && F(void 0, 1, b.hourElement)), b.amPM && u && (1 === l ? d + c === 23 : Math.abs(d - c) > l) && (b.amPM.textContent = b.l10n.amPM[o(b.amPM.textContent === b.l10n.amPM[0])]), n.value = s(d)
                }
            }(t);
            var n = b._input.value;
            k(), Et(), b._input.value !== n && b._debouncedChange()
        }

        function k() {
            if (void 0 !== b.hourElement && void 0 !== b.minuteElement) {
                var t, e, i = (parseInt(b.hourElement.value.slice(-2), 10) || 0) % 24,
                    n = (parseInt(b.minuteElement.value, 10) || 0) % 60,
                    r = void 0 !== b.secondElement ? (parseInt(b.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== b.amPM && (t = i, e = b.amPM.textContent, i = t % 12 + 12 * o(e === b.l10n.amPM[1]));
                var s = void 0 !== b.config.minTime || b.config.minDate && b.minDateHasTime && b.latestSelectedDateObj && 0 === x(b.latestSelectedDateObj, b.config.minDate, !0),
                    a = void 0 !== b.config.maxTime || b.config.maxDate && b.maxDateHasTime && b.latestSelectedDateObj && 0 === x(b.latestSelectedDateObj, b.config.maxDate, !0);
                if (void 0 !== b.config.maxTime && void 0 !== b.config.minTime && b.config.minTime > b.config.maxTime) {
                    var l = E(b.config.minTime.getHours(), b.config.minTime.getMinutes(), b.config.minTime.getSeconds()),
                        c = E(b.config.maxTime.getHours(), b.config.maxTime.getMinutes(), b.config.maxTime.getSeconds()),
                        d = E(i, n, r);
                    if (d > c && d < l) {
                        var u = function (t) {
                            var e = Math.floor(t / 3600), i = (t - 3600 * e) / 60;
                            return [e, i, t - 3600 * e - 60 * i]
                        }(l);
                        i = u[0], n = u[1], r = u[2]
                    }
                } else {
                    if (a) {
                        var p = void 0 !== b.config.maxTime ? b.config.maxTime : b.config.maxDate;
                        (i = Math.min(i, p.getHours())) === p.getHours() && (n = Math.min(n, p.getMinutes())), n === p.getMinutes() && (r = Math.min(r, p.getSeconds()))
                    }
                    if (s) {
                        var h = void 0 !== b.config.minTime ? b.config.minTime : b.config.minDate;
                        (i = Math.max(i, h.getHours())) === h.getHours() && n < h.getMinutes() && (n = h.getMinutes()), n === h.getMinutes() && (r = Math.max(r, h.getSeconds()))
                    }
                }
                I(i, n, r)
            }
        }

        function A(t) {
            var e = t || b.latestSelectedDateObj;
            e && e instanceof Date && I(e.getHours(), e.getMinutes(), e.getSeconds())
        }

        function I(t, e, i) {
            void 0 !== b.latestSelectedDateObj && b.latestSelectedDateObj.setHours(t % 24, e, i || 0, 0), b.hourElement && b.minuteElement && !b.isMobile && (b.hourElement.value = s(b.config.time_24hr ? t : (12 + t) % 12 + 12 * o(t % 12 == 0)), b.minuteElement.value = s(e), void 0 !== b.amPM && (b.amPM.textContent = b.l10n.amPM[o(t >= 12)]), void 0 !== b.secondElement && (b.secondElement.value = s(i)))
        }

        function z(t) {
            var e = f(t), i = parseInt(e.value) + (t.delta || 0);
            (i / 1e3 > 1 || "Enter" === t.key && !/[^\d]/.test(i.toString())) && tt(i)
        }

        function L(t, e, i, n) {
            return e instanceof Array ? e.forEach((function (e) {
                return L(t, e, i, n)
            })) : t instanceof Array ? t.forEach((function (t) {
                return L(t, e, i, n)
            })) : (t.addEventListener(e, i, n), void b._handlers.push({
                remove: function () {
                    return t.removeEventListener(e, i, n)
                }
            }))
        }

        function $() {
            yt("onChange")
        }

        function j(t, e) {
            var i = void 0 !== t ? b.parseDate(t) : b.latestSelectedDateObj || (b.config.minDate && b.config.minDate > b.now ? b.config.minDate : b.config.maxDate && b.config.maxDate < b.now ? b.config.maxDate : b.now),
                n = b.currentYear, r = b.currentMonth;
            try {
                void 0 !== i && (b.currentYear = i.getFullYear(), b.currentMonth = i.getMonth())
            } catch (t) {
                t.message = "Invalid date supplied: " + i, b.config.errorHandler(t)
            }
            e && b.currentYear !== n && (yt("onYearChange"), X()), !e || b.currentYear === n && b.currentMonth === r || yt("onMonthChange"), b.redraw()
        }

        function N(t) {
            var e = f(t);
            ~e.className.indexOf("arrow") && F(t, e.classList.contains("arrowUp") ? 1 : -1)
        }

        function F(t, e, i) {
            var n = t && f(t), r = i || n && n.parentNode && n.parentNode.firstChild, s = bt("increment");
            s.delta = e, r && r.dispatchEvent(s)
        }

        function R(t, e, i, n) {
            var r = et(e, !0), s = d("span", t, e.getDate().toString());
            return s.dateObj = e, s.$i = n, s.setAttribute("aria-label", b.formatDate(e, b.config.ariaDateFormat)), -1 === t.indexOf("hidden") && 0 === x(e, b.now) && (b.todayDateElem = s, s.classList.add("today"), s.setAttribute("aria-current", "date")), r ? (s.tabIndex = -1, wt(e) && (s.classList.add("selected"), b.selectedDateElem = s, "range" === b.config.mode && (c(s, "startRange", b.selectedDates[0] && 0 === x(e, b.selectedDates[0], !0)), c(s, "endRange", b.selectedDates[1] && 0 === x(e, b.selectedDates[1], !0)), "nextMonthDay" === t && s.classList.add("inRange")))) : s.classList.add("flatpickr-disabled"), "range" === b.config.mode && function (t) {
                return !("range" !== b.config.mode || b.selectedDates.length < 2) && x(t, b.selectedDates[0]) >= 0 && x(t, b.selectedDates[1]) <= 0
            }(e) && !wt(e) && s.classList.add("inRange"), b.weekNumbers && 1 === b.config.showMonths && "prevMonthDay" !== t && n % 7 == 6 && b.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + b.config.getWeek(e) + "</span>"), yt("onDayCreate", s), s
        }

        function B(t) {
            t.focus(), "range" === b.config.mode && st(t)
        }

        function H(t) {
            for (var e = t > 0 ? 0 : b.config.showMonths - 1, i = t > 0 ? b.config.showMonths : -1, n = e; n != i; n += t) for (var r = b.daysContainer.children[n], s = t > 0 ? 0 : r.children.length - 1, o = t > 0 ? r.children.length : -1, a = s; a != o; a += t) {
                var l = r.children[a];
                if (-1 === l.className.indexOf("hidden") && et(l.dateObj)) return l
            }
        }

        function W(t, e) {
            var i = S(), n = it(i || document.body),
                r = void 0 !== t ? t : n ? i : void 0 !== b.selectedDateElem && it(b.selectedDateElem) ? b.selectedDateElem : void 0 !== b.todayDateElem && it(b.todayDateElem) ? b.todayDateElem : H(e > 0 ? 1 : -1);
            void 0 === r ? b._input.focus() : n ? function (t, e) {
                for (var i = -1 === t.className.indexOf("Month") ? t.dateObj.getMonth() : b.currentMonth, n = e > 0 ? b.config.showMonths : -1, r = e > 0 ? 1 : -1, s = i - b.currentMonth; s != n; s += r) for (var o = b.daysContainer.children[s], a = i - b.currentMonth === s ? t.$i + e : e < 0 ? o.children.length - 1 : 0, l = o.children.length, c = a; c >= 0 && c < l && c != (e > 0 ? l : -1); c += r) {
                    var d = o.children[c];
                    if (-1 === d.className.indexOf("hidden") && et(d.dateObj) && Math.abs(t.$i - c) >= Math.abs(e)) return B(d)
                }
                b.changeMonth(r), W(H(r), 0)
            }(r, e) : B(r)
        }

        function Y(t, e) {
            for (var i = (new Date(t, e, 1).getDay() - b.l10n.firstDayOfWeek + 7) % 7, n = b.utils.getDaysInMonth((e - 1 + 12) % 12, t), r = b.utils.getDaysInMonth(e, t), s = window.document.createDocumentFragment(), o = b.config.showMonths > 1, a = o ? "prevMonthDay hidden" : "prevMonthDay", l = o ? "nextMonthDay hidden" : "nextMonthDay", c = n + 1 - i, u = 0; c <= n; c++, u++) s.appendChild(R("flatpickr-day " + a, new Date(t, e - 1, c), 0, u));
            for (c = 1; c <= r; c++, u++) s.appendChild(R("flatpickr-day", new Date(t, e, c), 0, u));
            for (var p = r + 1; p <= 42 - i && (1 === b.config.showMonths || u % 7 != 0); p++, u++) s.appendChild(R("flatpickr-day " + l, new Date(t, e + 1, p % r), 0, u));
            var h = d("div", "dayContainer");
            return h.appendChild(s), h
        }

        function q() {
            if (void 0 !== b.daysContainer) {
                u(b.daysContainer), b.weekNumbers && u(b.weekNumbers);
                for (var t = document.createDocumentFragment(), e = 0; e < b.config.showMonths; e++) {
                    var i = new Date(b.currentYear, b.currentMonth, 1);
                    i.setMonth(b.currentMonth + e), t.appendChild(Y(i.getFullYear(), i.getMonth()))
                }
                b.daysContainer.appendChild(t), b.days = b.daysContainer.firstChild, "range" === b.config.mode && 1 === b.selectedDates.length && st()
            }
        }

        function X() {
            if (!(b.config.showMonths > 1 || "dropdown" !== b.config.monthSelectorType)) {
                var t = function (t) {
                    return !(void 0 !== b.config.minDate && b.currentYear === b.config.minDate.getFullYear() && t < b.config.minDate.getMonth() || void 0 !== b.config.maxDate && b.currentYear === b.config.maxDate.getFullYear() && t > b.config.maxDate.getMonth())
                };
                b.monthsDropdownContainer.tabIndex = -1, b.monthsDropdownContainer.innerHTML = "";
                for (var e = 0; e < 12; e++) if (t(e)) {
                    var i = d("option", "flatpickr-monthDropdown-month");
                    i.value = new Date(b.currentYear, e).getMonth().toString(), i.textContent = g(e, b.config.shorthandCurrentMonth, b.l10n), i.tabIndex = -1, b.currentMonth === e && (i.selected = !0), b.monthsDropdownContainer.appendChild(i)
                }
            }
        }

        function V() {
            var t, e = d("div", "flatpickr-month"), i = window.document.createDocumentFragment();
            b.config.showMonths > 1 || "static" === b.config.monthSelectorType ? t = d("span", "cur-month") : (b.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), b.monthsDropdownContainer.setAttribute("aria-label", b.l10n.monthAriaLabel), L(b.monthsDropdownContainer, "change", (function (t) {
                var e = f(t), i = parseInt(e.value, 10);
                b.changeMonth(i - b.currentMonth), yt("onMonthChange")
            })), X(), t = b.monthsDropdownContainer);
            var n = h("cur-year", {tabindex: "-1"}), r = n.getElementsByTagName("input")[0];
            r.setAttribute("aria-label", b.l10n.yearAriaLabel), b.config.minDate && r.setAttribute("min", b.config.minDate.getFullYear().toString()), b.config.maxDate && (r.setAttribute("max", b.config.maxDate.getFullYear().toString()), r.disabled = !!b.config.minDate && b.config.minDate.getFullYear() === b.config.maxDate.getFullYear());
            var s = d("div", "flatpickr-current-month");
            return s.appendChild(t), s.appendChild(n), i.appendChild(s), e.appendChild(i), {
                container: e,
                yearElement: r,
                monthElement: t
            }
        }

        function G() {
            u(b.monthNav), b.monthNav.appendChild(b.prevMonthNav), b.config.showMonths && (b.yearElements = [], b.monthElements = []);
            for (var t = b.config.showMonths; t--;) {
                var e = V();
                b.yearElements.push(e.yearElement), b.monthElements.push(e.monthElement), b.monthNav.appendChild(e.container)
            }
            b.monthNav.appendChild(b.nextMonthNav)
        }

        function U() {
            b.weekdayContainer ? u(b.weekdayContainer) : b.weekdayContainer = d("div", "flatpickr-weekdays");
            for (var t = b.config.showMonths; t--;) {
                var e = d("div", "flatpickr-weekdaycontainer");
                b.weekdayContainer.appendChild(e)
            }
            return Z(), b.weekdayContainer
        }

        function Z() {
            if (b.weekdayContainer) {
                var t = b.l10n.firstDayOfWeek, i = e(b.l10n.weekdays.shorthand);
                t > 0 && t < i.length && (i = e(i.splice(t, i.length), i.splice(0, t)));
                for (var n = b.config.showMonths; n--;) b.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + i.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
            }
        }

        function K(t, e) {
            void 0 === e && (e = !0);
            var i = e ? t : t - b.currentMonth;
            i < 0 && !0 === b._hidePrevMonthArrow || i > 0 && !0 === b._hideNextMonthArrow || (b.currentMonth += i, (b.currentMonth < 0 || b.currentMonth > 11) && (b.currentYear += b.currentMonth > 11 ? 1 : -1, b.currentMonth = (b.currentMonth + 12) % 12, yt("onYearChange"), X()), q(), yt("onMonthChange"), _t())
        }

        function Q(t) {
            return b.calendarContainer.contains(t)
        }

        function J(t) {
            if (b.isOpen && !b.config.inline) {
                var e = f(t), i = Q(e),
                    n = !(e === b.input || e === b.altInput || b.element.contains(e) || t.path && t.path.indexOf && (~t.path.indexOf(b.input) || ~t.path.indexOf(b.altInput)) || i || Q(t.relatedTarget)),
                    r = !b.config.ignoredFocusElements.some((function (t) {
                        return t.contains(e)
                    }));
                n && r && (b.config.allowInput && b.setDate(b._input.value, !1, b.config.altInput ? b.config.altFormat : b.config.dateFormat), void 0 !== b.timeContainer && void 0 !== b.minuteElement && void 0 !== b.hourElement && "" !== b.input.value && void 0 !== b.input.value && D(), b.close(), b.config && "range" === b.config.mode && 1 === b.selectedDates.length && b.clear(!1))
            }
        }

        function tt(t) {
            if (!(!t || b.config.minDate && t < b.config.minDate.getFullYear() || b.config.maxDate && t > b.config.maxDate.getFullYear())) {
                var e = t, i = b.currentYear !== e;
                b.currentYear = e || b.currentYear, b.config.maxDate && b.currentYear === b.config.maxDate.getFullYear() ? b.currentMonth = Math.min(b.config.maxDate.getMonth(), b.currentMonth) : b.config.minDate && b.currentYear === b.config.minDate.getFullYear() && (b.currentMonth = Math.max(b.config.minDate.getMonth(), b.currentMonth)), i && (b.redraw(), yt("onYearChange"), X())
            }
        }

        function et(t, e) {
            var i;
            void 0 === e && (e = !0);
            var n = b.parseDate(t, void 0, e);
            if (b.config.minDate && n && x(n, b.config.minDate, void 0 !== e ? e : !b.minDateHasTime) < 0 || b.config.maxDate && n && x(n, b.config.maxDate, void 0 !== e ? e : !b.maxDateHasTime) > 0) return !1;
            if (!b.config.enable && 0 === b.config.disable.length) return !0;
            if (void 0 === n) return !1;
            for (var r = !!b.config.enable, s = null !== (i = b.config.enable) && void 0 !== i ? i : b.config.disable, o = 0, a = void 0; o < s.length; o++) {
                if ("function" == typeof (a = s[o]) && a(n)) return r;
                if (a instanceof Date && void 0 !== n && a.getTime() === n.getTime()) return r;
                if ("string" == typeof a) {
                    var l = b.parseDate(a, void 0, !0);
                    return l && l.getTime() === n.getTime() ? r : !r
                }
                if ("object" == typeof a && void 0 !== n && a.from && a.to && n.getTime() >= a.from.getTime() && n.getTime() <= a.to.getTime()) return r
            }
            return !r
        }

        function it(t) {
            return void 0 !== b.daysContainer && -1 === t.className.indexOf("hidden") && -1 === t.className.indexOf("flatpickr-disabled") && b.daysContainer.contains(t)
        }

        function nt(t) {
            var e = t.target === b._input, i = b._input.value.trimEnd() !== xt();
            !e || !i || t.relatedTarget && Q(t.relatedTarget) || b.setDate(b._input.value, !0, t.target === b.altInput ? b.config.altFormat : b.config.dateFormat)
        }

        function rt(t) {
            var e = f(t), i = b.config.wrap ? m.contains(e) : e === b._input, n = b.config.allowInput,
                r = b.isOpen && (!n || !i), s = b.config.inline && i && !n;
            if (13 === t.keyCode && i) {
                if (n) return b.setDate(b._input.value, !0, e === b.altInput ? b.config.altFormat : b.config.dateFormat), b.close(), e.blur();
                b.open()
            } else if (Q(e) || r || s) {
                var o = !!b.timeContainer && b.timeContainer.contains(e);
                switch (t.keyCode) {
                    case 13:
                        o ? (t.preventDefault(), D(), pt()) : ht(t);
                        break;
                    case 27:
                        t.preventDefault(), pt();
                        break;
                    case 8:
                    case 46:
                        i && !b.config.allowInput && (t.preventDefault(), b.clear());
                        break;
                    case 37:
                    case 39:
                        if (o || i) b.hourElement && b.hourElement.focus(); else {
                            t.preventDefault();
                            var a = S();
                            if (void 0 !== b.daysContainer && (!1 === n || a && it(a))) {
                                var l = 39 === t.keyCode ? 1 : -1;
                                t.ctrlKey ? (t.stopPropagation(), K(l), W(H(1), 0)) : W(void 0, l)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        t.preventDefault();
                        var c = 40 === t.keyCode ? 1 : -1;
                        b.daysContainer && void 0 !== e.$i || e === b.input || e === b.altInput ? t.ctrlKey ? (t.stopPropagation(), tt(b.currentYear - c), W(H(1), 0)) : o || W(void 0, 7 * c) : e === b.currentYearElement ? tt(b.currentYear - c) : b.config.enableTime && (!o && b.hourElement && b.hourElement.focus(), D(t), b._debouncedChange());
                        break;
                    case 9:
                        if (o) {
                            var d = [b.hourElement, b.minuteElement, b.secondElement, b.amPM].concat(b.pluginElements).filter((function (t) {
                                return t
                            })), u = d.indexOf(e);
                            if (-1 !== u) {
                                var p = d[u + (t.shiftKey ? -1 : 1)];
                                t.preventDefault(), (p || b._input).focus()
                            }
                        } else !b.config.noCalendar && b.daysContainer && b.daysContainer.contains(e) && t.shiftKey && (t.preventDefault(), b._input.focus())
                }
            }
            if (void 0 !== b.amPM && e === b.amPM) switch (t.key) {
                case b.l10n.amPM[0].charAt(0):
                case b.l10n.amPM[0].charAt(0).toLowerCase():
                    b.amPM.textContent = b.l10n.amPM[0], k(), Et();
                    break;
                case b.l10n.amPM[1].charAt(0):
                case b.l10n.amPM[1].charAt(0).toLowerCase():
                    b.amPM.textContent = b.l10n.amPM[1], k(), Et()
            }
            (i || Q(e)) && yt("onKeyDown", t)
        }

        function st(t, e) {
            if (void 0 === e && (e = "flatpickr-day"), 1 === b.selectedDates.length && (!t || t.classList.contains(e) && !t.classList.contains("flatpickr-disabled"))) {
                for (var i = t ? t.dateObj.getTime() : b.days.firstElementChild.dateObj.getTime(), n = b.parseDate(b.selectedDates[0], void 0, !0).getTime(), r = Math.min(i, b.selectedDates[0].getTime()), s = Math.max(i, b.selectedDates[0].getTime()), o = !1, a = 0, l = 0, c = r; c < s; c += T) et(new Date(c), !0) || (o = o || c > r && c < s, c < n && (!a || c > a) ? a = c : c > n && (!l || c < l) && (l = c));
                Array.from(b.rContainer.querySelectorAll("*:nth-child(-n+" + b.config.showMonths + ") > ." + e)).forEach((function (e) {
                    var r, s, c, d = e.dateObj.getTime(), u = a > 0 && d < a || l > 0 && d > l;
                    if (u) return e.classList.add("notAllowed"), void ["inRange", "startRange", "endRange"].forEach((function (t) {
                        e.classList.remove(t)
                    }));
                    o && !u || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function (t) {
                        e.classList.remove(t)
                    })), void 0 !== t && (t.classList.add(i <= b.selectedDates[0].getTime() ? "startRange" : "endRange"), n < i && d === n ? e.classList.add("startRange") : n > i && d === n && e.classList.add("endRange"), d >= a && (0 === l || d <= l) && (s = n, c = i, (r = d) > Math.min(s, c) && r < Math.max(s, c)) && e.classList.add("inRange")))
                }))
            }
        }

        function ot() {
            !b.isOpen || b.config.static || b.config.inline || dt()
        }

        function at(t) {
            return function (e) {
                var i = b.config["_" + t + "Date"] = b.parseDate(e, b.config.dateFormat),
                    n = b.config["_" + ("min" === t ? "max" : "min") + "Date"];
                void 0 !== i && (b["min" === t ? "minDateHasTime" : "maxDateHasTime"] = i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0), b.selectedDates && (b.selectedDates = b.selectedDates.filter((function (t) {
                    return et(t)
                })), b.selectedDates.length || "min" !== t || A(i), Et()), b.daysContainer && (ut(), void 0 !== i ? b.currentYearElement[t] = i.getFullYear().toString() : b.currentYearElement.removeAttribute(t), b.currentYearElement.disabled = !!n && void 0 !== i && n.getFullYear() === i.getFullYear())
            }
        }

        function lt() {
            return b.config.wrap ? m.querySelector("[data-input]") : m
        }

        function ct() {
            "object" != typeof b.config.locale && void 0 === P.l10ns[b.config.locale] && b.config.errorHandler(new Error("flatpickr: invalid locale " + b.config.locale)), b.l10n = t(t({}, P.l10ns.default), "object" == typeof b.config.locale ? b.config.locale : "default" !== b.config.locale ? P.l10ns[b.config.locale] : void 0), y.D = "(" + b.l10n.weekdays.shorthand.join("|") + ")", y.l = "(" + b.l10n.weekdays.longhand.join("|") + ")", y.M = "(" + b.l10n.months.shorthand.join("|") + ")", y.F = "(" + b.l10n.months.longhand.join("|") + ")", y.K = "(" + b.l10n.amPM[0] + "|" + b.l10n.amPM[1] + "|" + b.l10n.amPM[0].toLowerCase() + "|" + b.l10n.amPM[1].toLowerCase() + ")", void 0 === t(t({}, v), JSON.parse(JSON.stringify(m.dataset || {}))).time_24hr && void 0 === P.defaultConfig.time_24hr && (b.config.time_24hr = b.l10n.time_24hr), b.formatDate = w(b), b.parseDate = _({
                config: b.config,
                l10n: b.l10n
            })
        }

        function dt(t) {
            if ("function" != typeof b.config.position) {
                if (void 0 !== b.calendarContainer) {
                    yt("onPreCalendarPosition");
                    var e = t || b._positionElement,
                        i = Array.prototype.reduce.call(b.calendarContainer.children, (function (t, e) {
                            return t + e.offsetHeight
                        }), 0), n = b.calendarContainer.offsetWidth, r = b.config.position.split(" "), s = r[0],
                        o = r.length > 1 ? r[1] : null, a = e.getBoundingClientRect(),
                        l = window.innerHeight - a.bottom, d = "above" === s || "below" !== s && l < i && a.top > i,
                        u = window.pageYOffset + a.top + (d ? -i - 2 : e.offsetHeight + 2);
                    if (c(b.calendarContainer, "arrowTop", !d), c(b.calendarContainer, "arrowBottom", d), !b.config.inline) {
                        var p = window.pageXOffset + a.left, h = !1, f = !1;
                        "center" === o ? (p -= (n - a.width) / 2, h = !0) : "right" === o && (p -= n - a.width, f = !0), c(b.calendarContainer, "arrowLeft", !h && !f), c(b.calendarContainer, "arrowCenter", h), c(b.calendarContainer, "arrowRight", f);
                        var m = window.document.body.offsetWidth - (window.pageXOffset + a.right),
                            g = p + n > window.document.body.offsetWidth, v = m + n > window.document.body.offsetWidth;
                        if (c(b.calendarContainer, "rightMost", g), !b.config.static) if (b.calendarContainer.style.top = u + "px", g) if (v) {
                            var y = function () {
                                for (var t = null, e = 0; e < document.styleSheets.length; e++) {
                                    var i = document.styleSheets[e];
                                    if (i.cssRules) {
                                        try {
                                            i.cssRules
                                        } catch (t) {
                                            continue
                                        }
                                        t = i;
                                        break
                                    }
                                }
                                return null != t ? t : (n = document.createElement("style"), document.head.appendChild(n), n.sheet);
                                var n
                            }();
                            if (void 0 === y) return;
                            var w = window.document.body.offsetWidth, _ = Math.max(0, w / 2 - n / 2),
                                x = y.cssRules.length, E = "{left:" + a.left + "px;right:auto;}";
                            c(b.calendarContainer, "rightMost", !1), c(b.calendarContainer, "centerMost", !0), y.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + E, x), b.calendarContainer.style.left = _ + "px", b.calendarContainer.style.right = "auto"
                        } else b.calendarContainer.style.left = "auto", b.calendarContainer.style.right = m + "px"; else b.calendarContainer.style.left = p + "px", b.calendarContainer.style.right = "auto"
                    }
                }
            } else b.config.position(b, t)
        }

        function ut() {
            b.config.noCalendar || b.isMobile || (X(), _t(), q())
        }

        function pt() {
            b._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(b.close, 0) : b.close()
        }

        function ht(t) {
            t.preventDefault(), t.stopPropagation();
            var e = p(f(t), (function (t) {
                return t.classList && t.classList.contains("flatpickr-day") && !t.classList.contains("flatpickr-disabled") && !t.classList.contains("notAllowed")
            }));
            if (void 0 !== e) {
                var i = e, n = b.latestSelectedDateObj = new Date(i.dateObj.getTime()),
                    r = (n.getMonth() < b.currentMonth || n.getMonth() > b.currentMonth + b.config.showMonths - 1) && "range" !== b.config.mode;
                if (b.selectedDateElem = i, "single" === b.config.mode) b.selectedDates = [n]; else if ("multiple" === b.config.mode) {
                    var s = wt(n);
                    s ? b.selectedDates.splice(parseInt(s), 1) : b.selectedDates.push(n)
                } else "range" === b.config.mode && (2 === b.selectedDates.length && b.clear(!1, !1), b.latestSelectedDateObj = n, b.selectedDates.push(n), 0 !== x(n, b.selectedDates[0], !0) && b.selectedDates.sort((function (t, e) {
                    return t.getTime() - e.getTime()
                })));
                if (k(), r) {
                    var o = b.currentYear !== n.getFullYear();
                    b.currentYear = n.getFullYear(), b.currentMonth = n.getMonth(), o && (yt("onYearChange"), X()), yt("onMonthChange")
                }
                if (_t(), q(), Et(), r || "range" === b.config.mode || 1 !== b.config.showMonths ? void 0 !== b.selectedDateElem && void 0 === b.hourElement && b.selectedDateElem && b.selectedDateElem.focus() : B(i), void 0 !== b.hourElement && void 0 !== b.hourElement && b.hourElement.focus(), b.config.closeOnSelect) {
                    var a = "single" === b.config.mode && !b.config.enableTime,
                        l = "range" === b.config.mode && 2 === b.selectedDates.length && !b.config.enableTime;
                    (a || l) && pt()
                }
                $()
            }
        }

        b.parseDate = _({
            config: b.config,
            l10n: b.l10n
        }), b._handlers = [], b.pluginElements = [], b.loadedPlugins = [], b._bind = L, b._setHoursFromDate = A, b._positionCalendar = dt, b.changeMonth = K, b.changeYear = tt, b.clear = function (t, e) {
            if (void 0 === t && (t = !0), void 0 === e && (e = !0), b.input.value = "", void 0 !== b.altInput && (b.altInput.value = ""), void 0 !== b.mobileInput && (b.mobileInput.value = ""), b.selectedDates = [], b.latestSelectedDateObj = void 0, !0 === e && (b.currentYear = b._initialDate.getFullYear(), b.currentMonth = b._initialDate.getMonth()), !0 === b.config.enableTime) {
                var i = C(b.config);
                I(i.hours, i.minutes, i.seconds)
            }
            b.redraw(), t && yt("onChange")
        }, b.close = function () {
            b.isOpen = !1, b.isMobile || (void 0 !== b.calendarContainer && b.calendarContainer.classList.remove("open"), void 0 !== b._input && b._input.classList.remove("active")), yt("onClose")
        }, b.onMouseOver = st, b._createElement = d, b.createDay = R, b.destroy = function () {
            void 0 !== b.config && yt("onDestroy");
            for (var t = b._handlers.length; t--;) b._handlers[t].remove();
            if (b._handlers = [], b.mobileInput) b.mobileInput.parentNode && b.mobileInput.parentNode.removeChild(b.mobileInput), b.mobileInput = void 0; else if (b.calendarContainer && b.calendarContainer.parentNode) if (b.config.static && b.calendarContainer.parentNode) {
                var e = b.calendarContainer.parentNode;
                if (e.lastChild && e.removeChild(e.lastChild), e.parentNode) {
                    for (; e.firstChild;) e.parentNode.insertBefore(e.firstChild, e);
                    e.parentNode.removeChild(e)
                }
            } else b.calendarContainer.parentNode.removeChild(b.calendarContainer);
            b.altInput && (b.input.type = "text", b.altInput.parentNode && b.altInput.parentNode.removeChild(b.altInput), delete b.altInput), b.input && (b.input.type = b.input._type, b.input.classList.remove("flatpickr-input"), b.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function (t) {
                try {
                    delete b[t]
                } catch (t) {
                }
            }))
        }, b.isEnabled = et, b.jumpToDate = j, b.updateValue = Et, b.open = function (t, e) {
            if (void 0 === e && (e = b._positionElement), !0 === b.isMobile) {
                if (t) {
                    t.preventDefault();
                    var i = f(t);
                    i && i.blur()
                }
                return void 0 !== b.mobileInput && (b.mobileInput.focus(), b.mobileInput.click()), void yt("onOpen")
            }
            if (!b._input.disabled && !b.config.inline) {
                var n = b.isOpen;
                b.isOpen = !0, n || (b.calendarContainer.classList.add("open"), b._input.classList.add("active"), yt("onOpen"), dt(e)), !0 === b.config.enableTime && !0 === b.config.noCalendar && (!1 !== b.config.allowInput || void 0 !== t && b.timeContainer.contains(t.relatedTarget) || setTimeout((function () {
                    return b.hourElement.select()
                }), 50))
            }
        }, b.redraw = ut, b.set = function (t, e) {
            if (null !== t && "object" == typeof t) for (var n in Object.assign(b.config, t), t) void 0 !== ft[n] && ft[n].forEach((function (t) {
                return t()
            })); else b.config[t] = e, void 0 !== ft[t] ? ft[t].forEach((function (t) {
                return t()
            })) : i.indexOf(t) > -1 && (b.config[t] = l(e));
            b.redraw(), Et(!0)
        }, b.setDate = function (t, e, i) {
            if (void 0 === e && (e = !1), void 0 === i && (i = b.config.dateFormat), 0 !== t && !t || t instanceof Array && 0 === t.length) return b.clear(e);
            mt(t, i), b.latestSelectedDateObj = b.selectedDates[b.selectedDates.length - 1], b.redraw(), j(void 0, e), A(), 0 === b.selectedDates.length && b.clear(!1), Et(e), e && yt("onChange")
        }, b.toggle = function (t) {
            if (!0 === b.isOpen) return b.close();
            b.open(t)
        };
        var ft = {
            locale: [ct, Z],
            showMonths: [G, O, U],
            minDate: [j],
            maxDate: [j],
            positionElement: [vt],
            clickOpens: [function () {
                !0 === b.config.clickOpens ? (L(b._input, "focus", b.open), L(b._input, "click", b.open)) : (b._input.removeEventListener("focus", b.open), b._input.removeEventListener("click", b.open))
            }]
        };

        function mt(t, e) {
            var i = [];
            if (t instanceof Array) i = t.map((function (t) {
                return b.parseDate(t, e)
            })); else if (t instanceof Date || "number" == typeof t) i = [b.parseDate(t, e)]; else if ("string" == typeof t) switch (b.config.mode) {
                case"single":
                case"time":
                    i = [b.parseDate(t, e)];
                    break;
                case"multiple":
                    i = t.split(b.config.conjunction).map((function (t) {
                        return b.parseDate(t, e)
                    }));
                    break;
                case"range":
                    i = t.split(b.l10n.rangeSeparator).map((function (t) {
                        return b.parseDate(t, e)
                    }))
            } else b.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(t)));
            b.selectedDates = b.config.allowInvalidPreload ? i : i.filter((function (t) {
                return t instanceof Date && et(t, !1)
            })), "range" === b.config.mode && b.selectedDates.sort((function (t, e) {
                return t.getTime() - e.getTime()
            }))
        }

        function gt(t) {
            return t.slice().map((function (t) {
                return "string" == typeof t || "number" == typeof t || t instanceof Date ? b.parseDate(t, void 0, !0) : t && "object" == typeof t && t.from && t.to ? {
                    from: b.parseDate(t.from, void 0),
                    to: b.parseDate(t.to, void 0)
                } : t
            })).filter((function (t) {
                return t
            }))
        }

        function vt() {
            b._positionElement = b.config.positionElement || b._input
        }

        function yt(t, e) {
            if (void 0 !== b.config) {
                var i = b.config[t];
                if (void 0 !== i && i.length > 0) for (var n = 0; i[n] && n < i.length; n++) i[n](b.selectedDates, b.input.value, b, e);
                "onChange" === t && (b.input.dispatchEvent(bt("change")), b.input.dispatchEvent(bt("input")))
            }
        }

        function bt(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e
        }

        function wt(t) {
            for (var e = 0; e < b.selectedDates.length; e++) {
                var i = b.selectedDates[e];
                if (i instanceof Date && 0 === x(i, t)) return "" + e
            }
            return !1
        }

        function _t() {
            b.config.noCalendar || b.isMobile || !b.monthNav || (b.yearElements.forEach((function (t, e) {
                var i = new Date(b.currentYear, b.currentMonth, 1);
                i.setMonth(b.currentMonth + e), b.config.showMonths > 1 || "static" === b.config.monthSelectorType ? b.monthElements[e].textContent = g(i.getMonth(), b.config.shorthandCurrentMonth, b.l10n) + " " : b.monthsDropdownContainer.value = i.getMonth().toString(), t.value = i.getFullYear().toString()
            })), b._hidePrevMonthArrow = void 0 !== b.config.minDate && (b.currentYear === b.config.minDate.getFullYear() ? b.currentMonth <= b.config.minDate.getMonth() : b.currentYear < b.config.minDate.getFullYear()), b._hideNextMonthArrow = void 0 !== b.config.maxDate && (b.currentYear === b.config.maxDate.getFullYear() ? b.currentMonth + 1 > b.config.maxDate.getMonth() : b.currentYear > b.config.maxDate.getFullYear()))
        }

        function xt(t) {
            var e = t || (b.config.altInput ? b.config.altFormat : b.config.dateFormat);
            return b.selectedDates.map((function (t) {
                return b.formatDate(t, e)
            })).filter((function (t, e, i) {
                return "range" !== b.config.mode || b.config.enableTime || i.indexOf(t) === e
            })).join("range" !== b.config.mode ? b.config.conjunction : b.l10n.rangeSeparator)
        }

        function Et(t) {
            void 0 === t && (t = !0), void 0 !== b.mobileInput && b.mobileFormatStr && (b.mobileInput.value = void 0 !== b.latestSelectedDateObj ? b.formatDate(b.latestSelectedDateObj, b.mobileFormatStr) : ""), b.input.value = xt(b.config.dateFormat), void 0 !== b.altInput && (b.altInput.value = xt(b.config.altFormat)), !1 !== t && yt("onValueUpdate")
        }

        function Tt(t) {
            var e = f(t), i = b.prevMonthNav.contains(e), n = b.nextMonthNav.contains(e);
            i || n ? K(i ? -1 : 1) : b.yearElements.indexOf(e) >= 0 ? e.select() : e.classList.contains("arrowUp") ? b.changeYear(b.currentYear + 1) : e.classList.contains("arrowDown") && b.changeYear(b.currentYear - 1)
        }

        return function () {
            b.element = b.input = m, b.isOpen = !1, function () {
                var e = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                    r = t(t({}, JSON.parse(JSON.stringify(m.dataset || {}))), v), s = {};
                b.config.parseDate = r.parseDate, b.config.formatDate = r.formatDate, Object.defineProperty(b.config, "enable", {
                    get: function () {
                        return b.config._enable
                    }, set: function (t) {
                        b.config._enable = gt(t)
                    }
                }), Object.defineProperty(b.config, "disable", {
                    get: function () {
                        return b.config._disable
                    }, set: function (t) {
                        b.config._disable = gt(t)
                    }
                });
                var o = "time" === r.mode;
                if (!r.dateFormat && (r.enableTime || o)) {
                    var a = P.defaultConfig.dateFormat || n.dateFormat;
                    s.dateFormat = r.noCalendar || o ? "H:i" + (r.enableSeconds ? ":S" : "") : a + " H:i" + (r.enableSeconds ? ":S" : "")
                }
                if (r.altInput && (r.enableTime || o) && !r.altFormat) {
                    var c = P.defaultConfig.altFormat || n.altFormat;
                    s.altFormat = r.noCalendar || o ? "h:i" + (r.enableSeconds ? ":S K" : " K") : c + " h:i" + (r.enableSeconds ? ":S" : "") + " K"
                }
                Object.defineProperty(b.config, "minDate", {
                    get: function () {
                        return b.config._minDate
                    }, set: at("min")
                }), Object.defineProperty(b.config, "maxDate", {
                    get: function () {
                        return b.config._maxDate
                    }, set: at("max")
                });
                var d = function (t) {
                    return function (e) {
                        b.config["min" === t ? "_minTime" : "_maxTime"] = b.parseDate(e, "H:i:S")
                    }
                };
                Object.defineProperty(b.config, "minTime", {
                    get: function () {
                        return b.config._minTime
                    }, set: d("min")
                }), Object.defineProperty(b.config, "maxTime", {
                    get: function () {
                        return b.config._maxTime
                    }, set: d("max")
                }), "time" === r.mode && (b.config.noCalendar = !0, b.config.enableTime = !0), Object.assign(b.config, s, r);
                for (var u = 0; u < e.length; u++) b.config[e[u]] = !0 === b.config[e[u]] || "true" === b.config[e[u]];
                for (i.filter((function (t) {
                    return void 0 !== b.config[t]
                })).forEach((function (t) {
                    b.config[t] = l(b.config[t] || []).map(M)
                })), b.isMobile = !b.config.disableMobile && !b.config.inline && "single" === b.config.mode && !b.config.disable.length && !b.config.enable && !b.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), u = 0; u < b.config.plugins.length; u++) {
                    var p = b.config.plugins[u](b) || {};
                    for (var h in p) i.indexOf(h) > -1 ? b.config[h] = l(p[h]).map(M).concat(b.config[h]) : void 0 === r[h] && (b.config[h] = p[h])
                }
                r.altInputClass || (b.config.altInputClass = lt().className + " " + b.config.altInputClass), yt("onParseConfig")
            }(), ct(), b.input = lt(), b.input ? (b.input._type = b.input.type, b.input.type = "text", b.input.classList.add("flatpickr-input"), b._input = b.input, b.config.altInput && (b.altInput = d(b.input.nodeName, b.config.altInputClass), b._input = b.altInput, b.altInput.placeholder = b.input.placeholder, b.altInput.disabled = b.input.disabled, b.altInput.required = b.input.required, b.altInput.tabIndex = b.input.tabIndex, b.altInput.type = "text", b.input.setAttribute("type", "hidden"), !b.config.static && b.input.parentNode && b.input.parentNode.insertBefore(b.altInput, b.input.nextSibling)), b.config.allowInput || b._input.setAttribute("readonly", "readonly"), vt()) : b.config.errorHandler(new Error("Invalid input element specified")), function () {
                b.selectedDates = [], b.now = b.parseDate(b.config.now) || new Date;
                var t = b.config.defaultDate || ("INPUT" !== b.input.nodeName && "TEXTAREA" !== b.input.nodeName || !b.input.placeholder || b.input.value !== b.input.placeholder ? b.input.value : null);
                t && mt(t, b.config.dateFormat), b._initialDate = b.selectedDates.length > 0 ? b.selectedDates[0] : b.config.minDate && b.config.minDate.getTime() > b.now.getTime() ? b.config.minDate : b.config.maxDate && b.config.maxDate.getTime() < b.now.getTime() ? b.config.maxDate : b.now, b.currentYear = b._initialDate.getFullYear(), b.currentMonth = b._initialDate.getMonth(), b.selectedDates.length > 0 && (b.latestSelectedDateObj = b.selectedDates[0]), void 0 !== b.config.minTime && (b.config.minTime = b.parseDate(b.config.minTime, "H:i")), void 0 !== b.config.maxTime && (b.config.maxTime = b.parseDate(b.config.maxTime, "H:i")), b.minDateHasTime = !!b.config.minDate && (b.config.minDate.getHours() > 0 || b.config.minDate.getMinutes() > 0 || b.config.minDate.getSeconds() > 0), b.maxDateHasTime = !!b.config.maxDate && (b.config.maxDate.getHours() > 0 || b.config.maxDate.getMinutes() > 0 || b.config.maxDate.getSeconds() > 0)
            }(), b.utils = {
                getDaysInMonth: function (t, e) {
                    return void 0 === t && (t = b.currentMonth), void 0 === e && (e = b.currentYear), 1 === t && (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) ? 29 : b.l10n.daysInMonth[t]
                }
            }, b.isMobile || function () {
                var t = window.document.createDocumentFragment();
                if (b.calendarContainer = d("div", "flatpickr-calendar"), b.calendarContainer.tabIndex = -1, !b.config.noCalendar) {
                    if (t.appendChild((b.monthNav = d("div", "flatpickr-months"), b.yearElements = [], b.monthElements = [], b.prevMonthNav = d("span", "flatpickr-prev-month"), b.prevMonthNav.innerHTML = b.config.prevArrow, b.nextMonthNav = d("span", "flatpickr-next-month"), b.nextMonthNav.innerHTML = b.config.nextArrow, G(), Object.defineProperty(b, "_hidePrevMonthArrow", {
                        get: function () {
                            return b.__hidePrevMonthArrow
                        }, set: function (t) {
                            b.__hidePrevMonthArrow !== t && (c(b.prevMonthNav, "flatpickr-disabled", t), b.__hidePrevMonthArrow = t)
                        }
                    }), Object.defineProperty(b, "_hideNextMonthArrow", {
                        get: function () {
                            return b.__hideNextMonthArrow
                        }, set: function (t) {
                            b.__hideNextMonthArrow !== t && (c(b.nextMonthNav, "flatpickr-disabled", t), b.__hideNextMonthArrow = t)
                        }
                    }), b.currentYearElement = b.yearElements[0], _t(), b.monthNav)), b.innerContainer = d("div", "flatpickr-innerContainer"), b.config.weekNumbers) {
                        var e = function () {
                            b.calendarContainer.classList.add("hasWeeks");
                            var t = d("div", "flatpickr-weekwrapper");
                            t.appendChild(d("span", "flatpickr-weekday", b.l10n.weekAbbreviation));
                            var e = d("div", "flatpickr-weeks");
                            return t.appendChild(e), {weekWrapper: t, weekNumbers: e}
                        }(), i = e.weekWrapper, n = e.weekNumbers;
                        b.innerContainer.appendChild(i), b.weekNumbers = n, b.weekWrapper = i
                    }
                    b.rContainer = d("div", "flatpickr-rContainer"), b.rContainer.appendChild(U()), b.daysContainer || (b.daysContainer = d("div", "flatpickr-days"), b.daysContainer.tabIndex = -1), q(), b.rContainer.appendChild(b.daysContainer), b.innerContainer.appendChild(b.rContainer), t.appendChild(b.innerContainer)
                }
                b.config.enableTime && t.appendChild(function () {
                    b.calendarContainer.classList.add("hasTime"), b.config.noCalendar && b.calendarContainer.classList.add("noCalendar");
                    var t = C(b.config);
                    b.timeContainer = d("div", "flatpickr-time"), b.timeContainer.tabIndex = -1;
                    var e = d("span", "flatpickr-time-separator", ":"),
                        i = h("flatpickr-hour", {"aria-label": b.l10n.hourAriaLabel});
                    b.hourElement = i.getElementsByTagName("input")[0];
                    var n = h("flatpickr-minute", {"aria-label": b.l10n.minuteAriaLabel});
                    if (b.minuteElement = n.getElementsByTagName("input")[0], b.hourElement.tabIndex = b.minuteElement.tabIndex = -1, b.hourElement.value = s(b.latestSelectedDateObj ? b.latestSelectedDateObj.getHours() : b.config.time_24hr ? t.hours : function (t) {
                        switch (t % 24) {
                            case 0:
                            case 12:
                                return 12;
                            default:
                                return t % 12
                        }
                    }(t.hours)), b.minuteElement.value = s(b.latestSelectedDateObj ? b.latestSelectedDateObj.getMinutes() : t.minutes), b.hourElement.setAttribute("step", b.config.hourIncrement.toString()), b.minuteElement.setAttribute("step", b.config.minuteIncrement.toString()), b.hourElement.setAttribute("min", b.config.time_24hr ? "0" : "1"), b.hourElement.setAttribute("max", b.config.time_24hr ? "23" : "12"), b.hourElement.setAttribute("maxlength", "2"), b.minuteElement.setAttribute("min", "0"), b.minuteElement.setAttribute("max", "59"), b.minuteElement.setAttribute("maxlength", "2"), b.timeContainer.appendChild(i), b.timeContainer.appendChild(e), b.timeContainer.appendChild(n), b.config.time_24hr && b.timeContainer.classList.add("time24hr"), b.config.enableSeconds) {
                        b.timeContainer.classList.add("hasSeconds");
                        var r = h("flatpickr-second");
                        b.secondElement = r.getElementsByTagName("input")[0], b.secondElement.value = s(b.latestSelectedDateObj ? b.latestSelectedDateObj.getSeconds() : t.seconds), b.secondElement.setAttribute("step", b.minuteElement.getAttribute("step")), b.secondElement.setAttribute("min", "0"), b.secondElement.setAttribute("max", "59"), b.secondElement.setAttribute("maxlength", "2"), b.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), b.timeContainer.appendChild(r)
                    }
                    return b.config.time_24hr || (b.amPM = d("span", "flatpickr-am-pm", b.l10n.amPM[o((b.latestSelectedDateObj ? b.hourElement.value : b.config.defaultHour) > 11)]), b.amPM.title = b.l10n.toggleTitle, b.amPM.tabIndex = -1, b.timeContainer.appendChild(b.amPM)), b.timeContainer
                }()), c(b.calendarContainer, "rangeMode", "range" === b.config.mode), c(b.calendarContainer, "animate", !0 === b.config.animate), c(b.calendarContainer, "multiMonth", b.config.showMonths > 1), b.calendarContainer.appendChild(t);
                var r = void 0 !== b.config.appendTo && void 0 !== b.config.appendTo.nodeType;
                if ((b.config.inline || b.config.static) && (b.calendarContainer.classList.add(b.config.inline ? "inline" : "static"), b.config.inline && (!r && b.element.parentNode ? b.element.parentNode.insertBefore(b.calendarContainer, b._input.nextSibling) : void 0 !== b.config.appendTo && b.config.appendTo.appendChild(b.calendarContainer)), b.config.static)) {
                    var a = d("div", "flatpickr-wrapper");
                    b.element.parentNode && b.element.parentNode.insertBefore(a, b.element), a.appendChild(b.element), b.altInput && a.appendChild(b.altInput), a.appendChild(b.calendarContainer)
                }
                b.config.static || b.config.inline || (void 0 !== b.config.appendTo ? b.config.appendTo : window.document.body).appendChild(b.calendarContainer)
            }(), function () {
                if (b.config.wrap && ["open", "close", "toggle", "clear"].forEach((function (t) {
                    Array.prototype.forEach.call(b.element.querySelectorAll("[data-" + t + "]"), (function (e) {
                        return L(e, "click", b[t])
                    }))
                })), b.isMobile) !function () {
                    var t = b.config.enableTime ? b.config.noCalendar ? "time" : "datetime-local" : "date";
                    b.mobileInput = d("input", b.input.className + " flatpickr-mobile"), b.mobileInput.tabIndex = 1, b.mobileInput.type = t, b.mobileInput.disabled = b.input.disabled, b.mobileInput.required = b.input.required, b.mobileInput.placeholder = b.input.placeholder, b.mobileFormatStr = "datetime-local" === t ? "Y-m-d\\TH:i:S" : "date" === t ? "Y-m-d" : "H:i:S", b.selectedDates.length > 0 && (b.mobileInput.defaultValue = b.mobileInput.value = b.formatDate(b.selectedDates[0], b.mobileFormatStr)), b.config.minDate && (b.mobileInput.min = b.formatDate(b.config.minDate, "Y-m-d")), b.config.maxDate && (b.mobileInput.max = b.formatDate(b.config.maxDate, "Y-m-d")), b.input.getAttribute("step") && (b.mobileInput.step = String(b.input.getAttribute("step"))), b.input.type = "hidden", void 0 !== b.altInput && (b.altInput.type = "hidden");
                    try {
                        b.input.parentNode && b.input.parentNode.insertBefore(b.mobileInput, b.input.nextSibling)
                    } catch (t) {
                    }
                    L(b.mobileInput, "change", (function (t) {
                        b.setDate(f(t).value, !1, b.mobileFormatStr), yt("onChange"), yt("onClose")
                    }))
                }(); else {
                    var t = a(ot, 50);
                    if (b._debouncedChange = a($, 300), b.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && L(b.daysContainer, "mouseover", (function (t) {
                        "range" === b.config.mode && st(f(t))
                    })), L(b._input, "keydown", rt), void 0 !== b.calendarContainer && L(b.calendarContainer, "keydown", rt), b.config.inline || b.config.static || L(window, "resize", t), void 0 !== window.ontouchstart ? L(window.document, "touchstart", J) : L(window.document, "mousedown", J), L(window.document, "focus", J, {capture: !0}), !0 === b.config.clickOpens && (L(b._input, "focus", b.open), L(b._input, "click", b.open)), void 0 !== b.daysContainer && (L(b.monthNav, "click", Tt), L(b.monthNav, ["keyup", "increment"], z), L(b.daysContainer, "click", ht)), void 0 !== b.timeContainer && void 0 !== b.minuteElement && void 0 !== b.hourElement) {
                        L(b.timeContainer, ["increment"], D), L(b.timeContainer, "blur", D, {capture: !0}), L(b.timeContainer, "click", N), L([b.hourElement, b.minuteElement], ["focus", "click"], (function (t) {
                            return f(t).select()
                        })), void 0 !== b.secondElement && L(b.secondElement, "focus", (function () {
                            return b.secondElement && b.secondElement.select()
                        })), void 0 !== b.amPM && L(b.amPM, "click", (function (t) {
                            D(t)
                        }))
                    }
                    b.config.allowInput && L(b._input, "blur", nt)
                }
            }(), (b.selectedDates.length || b.config.noCalendar) && (b.config.enableTime && A(b.config.noCalendar ? b.latestSelectedDateObj : void 0), Et(!1)), O();
            var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !b.isMobile && e && dt(), yt("onReady")
        }(), b
    }

    function M(t, e) {
        for (var i = Array.prototype.slice.call(t).filter((function (t) {
            return t instanceof HTMLElement
        })), n = [], r = 0; r < i.length; r++) {
            var s = i[r];
            try {
                if (null !== s.getAttribute("data-fp-omit")) continue;
                void 0 !== s._flatpickr && (s._flatpickr.destroy(), s._flatpickr = void 0), s._flatpickr = S(s, e || {}), n.push(s._flatpickr)
            } catch (t) {
                console.error(t)
            }
        }
        return 1 === n.length ? n[0] : n
    }

    "function" != typeof Object.assign && (Object.assign = function (t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (!t) throw TypeError("Cannot convert undefined or null to object");
        for (var n = function (e) {
            e && Object.keys(e).forEach((function (i) {
                return t[i] = e[i]
            }))
        }, r = 0, s = e; r < s.length; r++) {
            n(s[r])
        }
        return t
    }), "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (t) {
        return M(this, t)
    }, HTMLElement.prototype.flatpickr = function (t) {
        return M([this], t)
    });
    var P = function (t, e) {
        return "string" == typeof t ? M(window.document.querySelectorAll(t), e) : t instanceof Node ? M([t], e) : M(t, e)
    };
    return P.defaultConfig = {}, P.l10ns = {en: t({}, r), default: t({}, r)}, P.localize = function (e) {
        P.l10ns.default = t(t({}, P.l10ns.default), e)
    }, P.setDefaults = function (e) {
        P.defaultConfig = t(t({}, P.defaultConfig), e)
    }, P.parseDate = _({}), P.formatDate = w({}), P.compareDates = x, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function (t) {
        return M(this, t)
    }), Date.prototype.fp_incr = function (t) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof t ? parseInt(t, 10) : t))
    }, "undefined" != typeof window && (window.flatpickr = P), P
})), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).vn = {})
}(this, (function (t) {
    "use strict";
    var e = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}}, i = {
        weekdays: {
            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            longhand: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
        },
        months: {
            shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            longhand: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " đến "
    };
    e.l10ns.vn = i;
    var n = e.l10ns;
    t.Vietnamese = i, t.default = n, Object.defineProperty(t, "__esModule", {value: !0})
})), $(document).ready((function () {
    $(".common_contact_form").submit((function (t) {
        t.preventDefault();
        var e = $(this), i = e.find("button");
        console.log(i), i.prop("disabled", !0);
        var n = e.attr("action"), r = e.attr("method"), s = e.attr("redirect_uri");
        grecaptcha.ready((function () {
            grecaptcha.execute(RECAPTCHV3_SITE_KEY, {action: "submit"}).then((function (t) {
                $.ajax({
                    type: r, url: n, dataType: "json", data: e.serialize(), beforeSend: function (e) {
                        e.setRequestHeader("captcha", t)
                    }, success: function (t) {
                        if (i.prop("disabled", !1), "error" == t.status) return alert(t.message), !0;
                        window.location.href = s
                    }, error: function (t, e, n) {
                        i.prop("disabled", !1), console.log("Lỗi:", e, n), alert("An error occurred while connecting to the server !!")
                    }
                })
            }))
        }))
    }))
}));
