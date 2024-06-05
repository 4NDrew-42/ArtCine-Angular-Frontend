import {
  $ as Jr,
  $a as Ot,
  $b as Mc,
  A as Yr,
  Aa as mt,
  Ab as C,
  B as at,
  Ba as rn,
  Bb as ut,
  C as Ce,
  Ca as yi,
  Cb as Me,
  D as qr,
  Da as xi,
  Db as zt,
  E as Zr,
  Ea as dc,
  Eb as Bt,
  Ec as Lc,
  F as dt,
  Fa as uc,
  Fb as Ut,
  Fc as ln,
  G as ic,
  Ga as mc,
  Gb as _t,
  Gc as wo,
  H as Xr,
  Ha as hc,
  Hb as J,
  I as se,
  Ia as fc,
  Ib as uo,
  J as De,
  Ja as pc,
  Jb as mo,
  K as Kr,
  Ka as gc,
  Kb as xc,
  L as nc,
  La as kt,
  Lb as ho,
  Lc as jc,
  M as oc,
  Ma as ao,
  Mb as wc,
  Mc as Co,
  N as rc,
  Na as an,
  Nb as fo,
  O as Qr,
  Oa as x,
  Ob as po,
  Oc as Vc,
  P as no,
  Pa as u,
  Pb as oa,
  Q as ce,
  Qa as Ke,
  Qb as go,
  R as It,
  Ra as de,
  Rb as ra,
  S as bt,
  Sa as so,
  Sb as aa,
  T as et,
  Ta as sn,
  Tb as ti,
  Tc as zc,
  U as Y,
  Ua as wi,
  Ub as bo,
  V as Ee,
  Va as co,
  Vb as Cc,
  W as vi,
  Wa as lo,
  Wb as wt,
  X as v,
  Xa as w,
  Xb as Dc,
  Y as I,
  Ya as bc,
  Yb as Ec,
  Z as ac,
  Za as Qe,
  Zb as Ct,
  _,
  _a as nt,
  _b as Ic,
  a as g,
  aa as m,
  ab as vc,
  ac as ei,
  b as X,
  ba as b,
  bb as ea,
  bc as Sc,
  c as Br,
  ca as oo,
  cb as cn,
  cc as Ac,
  d as Kt,
  da as ta,
  db as B,
  dc as E,
  e as tc,
  ea as nn,
  eb as it,
  ec as Rc,
  f as we,
  fa as N,
  fb as ot,
  fc as sa,
  g as Ur,
  ga as O,
  gb as G,
  gc as kc,
  h as Hr,
  ha as M,
  hb as ue,
  hc as Oc,
  i as k,
  ia as R,
  ib as ht,
  ic as he,
  j as Et,
  ja as _i,
  jb as h,
  jc as vo,
  k as ee,
  ka as sc,
  kb as p,
  kc as _o,
  l as gt,
  la as Ze,
  lb as P,
  lc as Ci,
  m as D,
  ma as ie,
  mb as me,
  mc as Tc,
  n as ae,
  na as Rt,
  nb as Je,
  nc as Di,
  o as $r,
  oa as Lt,
  ob as _c,
  oc as Se,
  p as ec,
  pa as jt,
  pb as V,
  pc as Fc,
  q as S,
  qa as Ie,
  qb as yc,
  qc as Pc,
  r as gi,
  ra as ro,
  rb as tt,
  rc as yo,
  s as At,
  sa as st,
  sb as vt,
  sc as Nc,
  t as Wr,
  ta as Xe,
  tb as U,
  tc as xo,
  u as eo,
  ua as T,
  ub as ia,
  uc as ii,
  v as qe,
  va as ct,
  vb as Vt,
  vc as fe,
  w as io,
  wa as cc,
  wb as yt,
  wc as Tt,
  x as Gr,
  xa as on,
  xb as K,
  xc as Ae,
  y as bi,
  ya as lc,
  yb as Q,
  yc as pe,
  z as rt,
  za as le,
  zb as na,
} from "./chunk-EWYAAMIM.js";
var un = class {},
  Eo = class {},
  ft = class i {
    constructor(t) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        t
          ? typeof t == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  t
                    .split(
                      `
`
                    )
                    .forEach((r) => {
                      let e = r.indexOf(":");
                      if (e > 0) {
                        let n = r.slice(0, e),
                          o = n.toLowerCase(),
                          a = r.slice(e + 1).trim();
                        this.maybeSetNormalizedName(n, o),
                          this.headers.has(o)
                            ? this.headers.get(o).push(a)
                            : this.headers.set(o, [a]);
                      }
                    });
              })
            : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((r, e) => {
                this.setHeaderEntries(e, r);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(t).forEach(([r, e]) => {
                    this.setHeaderEntries(r, e);
                  });
              })
          : (this.headers = new Map());
    }
    has(t) {
      return this.init(), this.headers.has(t.toLowerCase());
    }
    get(t) {
      this.init();
      let r = this.headers.get(t.toLowerCase());
      return r && r.length > 0 ? r[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(t) {
      return this.init(), this.headers.get(t.toLowerCase()) || null;
    }
    append(t, r) {
      return this.clone({ name: t, value: r, op: "a" });
    }
    set(t, r) {
      return this.clone({ name: t, value: r, op: "s" });
    }
    delete(t, r) {
      return this.clone({ name: t, value: r, op: "d" });
    }
    maybeSetNormalizedName(t, r) {
      this.normalizedNames.has(r) || this.normalizedNames.set(r, t);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof i
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
          (this.lazyUpdate = null)));
    }
    copyFrom(t) {
      t.init(),
        Array.from(t.headers.keys()).forEach((r) => {
          this.headers.set(r, t.headers.get(r)),
            this.normalizedNames.set(r, t.normalizedNames.get(r));
        });
    }
    clone(t) {
      let r = new i();
      return (
        (r.lazyInit =
          this.lazyInit && this.lazyInit instanceof i ? this.lazyInit : this),
        (r.lazyUpdate = (this.lazyUpdate || []).concat([t])),
        r
      );
    }
    applyUpdate(t) {
      let r = t.name.toLowerCase();
      switch (t.op) {
        case "a":
        case "s":
          let e = t.value;
          if ((typeof e == "string" && (e = [e]), e.length === 0)) return;
          this.maybeSetNormalizedName(t.name, r);
          let n = (t.op === "a" ? this.headers.get(r) : void 0) || [];
          n.push(...e), this.headers.set(r, n);
          break;
        case "d":
          let o = t.value;
          if (!o) this.headers.delete(r), this.normalizedNames.delete(r);
          else {
            let a = this.headers.get(r);
            if (!a) return;
            (a = a.filter((s) => o.indexOf(s) === -1)),
              a.length === 0
                ? (this.headers.delete(r), this.normalizedNames.delete(r))
                : this.headers.set(r, a);
          }
          break;
      }
    }
    setHeaderEntries(t, r) {
      let e = (Array.isArray(r) ? r : [r]).map((o) => o.toString()),
        n = t.toLowerCase();
      this.headers.set(n, e), this.maybeSetNormalizedName(t, n);
    }
    forEach(t) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((r) =>
          t(this.normalizedNames.get(r), this.headers.get(r))
        );
    }
  };
var la = class {
  encodeKey(t) {
    return Bc(t);
  }
  encodeValue(t) {
    return Bc(t);
  }
  decodeKey(t) {
    return decodeURIComponent(t);
  }
  decodeValue(t) {
    return decodeURIComponent(t);
  }
};
function am(i, t) {
  let r = new Map();
  return (
    i.length > 0 &&
      i
        .replace(/^\?/, "")
        .split("&")
        .forEach((n) => {
          let o = n.indexOf("="),
            [a, s] =
              o == -1
                ? [t.decodeKey(n), ""]
                : [t.decodeKey(n.slice(0, o)), t.decodeValue(n.slice(o + 1))],
            c = r.get(a) || [];
          c.push(s), r.set(a, c);
        }),
    r
  );
}
var sm = /%(\d[a-f0-9])/gi,
  cm = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Bc(i) {
  return encodeURIComponent(i).replace(sm, (t, r) => cm[r] ?? t);
}
function Do(i) {
  return `${i}`;
}
var Re = class i {
  constructor(t = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = t.encoder || new la()),
      t.fromString)
    ) {
      if (t.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = am(t.fromString, this.encoder);
    } else
      t.fromObject
        ? ((this.map = new Map()),
          Object.keys(t.fromObject).forEach((r) => {
            let e = t.fromObject[r],
              n = Array.isArray(e) ? e.map(Do) : [Do(e)];
            this.map.set(r, n);
          }))
        : (this.map = null);
  }
  has(t) {
    return this.init(), this.map.has(t);
  }
  get(t) {
    this.init();
    let r = this.map.get(t);
    return r ? r[0] : null;
  }
  getAll(t) {
    return this.init(), this.map.get(t) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(t, r) {
    return this.clone({ param: t, value: r, op: "a" });
  }
  appendAll(t) {
    let r = [];
    return (
      Object.keys(t).forEach((e) => {
        let n = t[e];
        Array.isArray(n)
          ? n.forEach((o) => {
              r.push({ param: e, value: o, op: "a" });
            })
          : r.push({ param: e, value: n, op: "a" });
      }),
      this.clone(r)
    );
  }
  set(t, r) {
    return this.clone({ param: t, value: r, op: "s" });
  }
  delete(t, r) {
    return this.clone({ param: t, value: r, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((t) => {
          let r = this.encoder.encodeKey(t);
          return this.map
            .get(t)
            .map((e) => r + "=" + this.encoder.encodeValue(e))
            .join("&");
        })
        .filter((t) => t !== "")
        .join("&")
    );
  }
  clone(t) {
    let r = new i({ encoder: this.encoder });
    return (
      (r.cloneFrom = this.cloneFrom || this),
      (r.updates = (this.updates || []).concat(t)),
      r
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach((t) => {
          switch (t.op) {
            case "a":
            case "s":
              let r = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
              r.push(Do(t.value)), this.map.set(t.param, r);
              break;
            case "d":
              if (t.value !== void 0) {
                let e = this.map.get(t.param) || [],
                  n = e.indexOf(Do(t.value));
                n !== -1 && e.splice(n, 1),
                  e.length > 0
                    ? this.map.set(t.param, e)
                    : this.map.delete(t.param);
              } else {
                this.map.delete(t.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var da = class {
  constructor() {
    this.map = new Map();
  }
  set(t, r) {
    return this.map.set(t, r), this;
  }
  get(t) {
    return (
      this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t)
    );
  }
  delete(t) {
    return this.map.delete(t), this;
  }
  has(t) {
    return this.map.has(t);
  }
  keys() {
    return this.map.keys();
  }
};
function lm(i) {
  switch (i) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Uc(i) {
  return typeof ArrayBuffer < "u" && i instanceof ArrayBuffer;
}
function Hc(i) {
  return typeof Blob < "u" && i instanceof Blob;
}
function $c(i) {
  return typeof FormData < "u" && i instanceof FormData;
}
function dm(i) {
  return typeof URLSearchParams < "u" && i instanceof URLSearchParams;
}
var dn = class i {
    constructor(t, r, e, n) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = t.toUpperCase());
      let o;
      if (
        (lm(this.method) || n
          ? ((this.body = e !== void 0 ? e : null), (o = n))
          : (o = e),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new ft()),
        (this.context ??= new da()),
        !this.params)
      )
        (this.params = new Re()), (this.urlWithParams = r);
      else {
        let a = this.params.toString();
        if (a.length === 0) this.urlWithParams = r;
        else {
          let s = r.indexOf("?"),
            c = s === -1 ? "?" : s < r.length - 1 ? "&" : "";
          this.urlWithParams = r + c + a;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
          Uc(this.body) ||
          Hc(this.body) ||
          $c(this.body) ||
          dm(this.body)
        ? this.body
        : this.body instanceof Re
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || $c(this.body)
        ? null
        : Hc(this.body)
        ? this.body.type || null
        : Uc(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof Re
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(t = {}) {
      let r = t.method || this.method,
        e = t.url || this.url,
        n = t.responseType || this.responseType,
        o = t.transferCache ?? this.transferCache,
        a = t.body !== void 0 ? t.body : this.body,
        s = t.withCredentials ?? this.withCredentials,
        c = t.reportProgress ?? this.reportProgress,
        l = t.headers || this.headers,
        d = t.params || this.params,
        f = t.context ?? this.context;
      return (
        t.setHeaders !== void 0 &&
          (l = Object.keys(t.setHeaders).reduce(
            (y, A) => y.set(A, t.setHeaders[A]),
            l
          )),
        t.setParams &&
          (d = Object.keys(t.setParams).reduce(
            (y, A) => y.set(A, t.setParams[A]),
            d
          )),
        new i(r, e, a, {
          params: d,
          headers: l,
          context: f,
          reportProgress: c,
          responseType: n,
          withCredentials: s,
          transferCache: o,
        })
      );
    }
  },
  Ei = (function (i) {
    return (
      (i[(i.Sent = 0)] = "Sent"),
      (i[(i.UploadProgress = 1)] = "UploadProgress"),
      (i[(i.ResponseHeader = 2)] = "ResponseHeader"),
      (i[(i.DownloadProgress = 3)] = "DownloadProgress"),
      (i[(i.Response = 4)] = "Response"),
      (i[(i.User = 5)] = "User"),
      i
    );
  })(Ei || {}),
  mn = class {
    constructor(t, r = So.Ok, e = "OK") {
      (this.headers = t.headers || new ft()),
        (this.status = t.status !== void 0 ? t.status : r),
        (this.statusText = t.statusText || e),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  ua = class i extends mn {
    constructor(t = {}) {
      super(t), (this.type = Ei.ResponseHeader);
    }
    clone(t = {}) {
      return new i({
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  Io = class i extends mn {
    constructor(t = {}) {
      super(t),
        (this.type = Ei.Response),
        (this.body = t.body !== void 0 ? t.body : null);
    }
    clone(t = {}) {
      return new i({
        body: t.body !== void 0 ? t.body : this.body,
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  Mo = class extends mn {
    constructor(t) {
      super(t, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              t.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              t.url || "(unknown url)"
            }: ${t.status} ${t.statusText}`),
        (this.error = t.error || null);
    }
  },
  So = (function (i) {
    return (
      (i[(i.Continue = 100)] = "Continue"),
      (i[(i.SwitchingProtocols = 101)] = "SwitchingProtocols"),
      (i[(i.Processing = 102)] = "Processing"),
      (i[(i.EarlyHints = 103)] = "EarlyHints"),
      (i[(i.Ok = 200)] = "Ok"),
      (i[(i.Created = 201)] = "Created"),
      (i[(i.Accepted = 202)] = "Accepted"),
      (i[(i.NonAuthoritativeInformation = 203)] =
        "NonAuthoritativeInformation"),
      (i[(i.NoContent = 204)] = "NoContent"),
      (i[(i.ResetContent = 205)] = "ResetContent"),
      (i[(i.PartialContent = 206)] = "PartialContent"),
      (i[(i.MultiStatus = 207)] = "MultiStatus"),
      (i[(i.AlreadyReported = 208)] = "AlreadyReported"),
      (i[(i.ImUsed = 226)] = "ImUsed"),
      (i[(i.MultipleChoices = 300)] = "MultipleChoices"),
      (i[(i.MovedPermanently = 301)] = "MovedPermanently"),
      (i[(i.Found = 302)] = "Found"),
      (i[(i.SeeOther = 303)] = "SeeOther"),
      (i[(i.NotModified = 304)] = "NotModified"),
      (i[(i.UseProxy = 305)] = "UseProxy"),
      (i[(i.Unused = 306)] = "Unused"),
      (i[(i.TemporaryRedirect = 307)] = "TemporaryRedirect"),
      (i[(i.PermanentRedirect = 308)] = "PermanentRedirect"),
      (i[(i.BadRequest = 400)] = "BadRequest"),
      (i[(i.Unauthorized = 401)] = "Unauthorized"),
      (i[(i.PaymentRequired = 402)] = "PaymentRequired"),
      (i[(i.Forbidden = 403)] = "Forbidden"),
      (i[(i.NotFound = 404)] = "NotFound"),
      (i[(i.MethodNotAllowed = 405)] = "MethodNotAllowed"),
      (i[(i.NotAcceptable = 406)] = "NotAcceptable"),
      (i[(i.ProxyAuthenticationRequired = 407)] =
        "ProxyAuthenticationRequired"),
      (i[(i.RequestTimeout = 408)] = "RequestTimeout"),
      (i[(i.Conflict = 409)] = "Conflict"),
      (i[(i.Gone = 410)] = "Gone"),
      (i[(i.LengthRequired = 411)] = "LengthRequired"),
      (i[(i.PreconditionFailed = 412)] = "PreconditionFailed"),
      (i[(i.PayloadTooLarge = 413)] = "PayloadTooLarge"),
      (i[(i.UriTooLong = 414)] = "UriTooLong"),
      (i[(i.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
      (i[(i.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
      (i[(i.ExpectationFailed = 417)] = "ExpectationFailed"),
      (i[(i.ImATeapot = 418)] = "ImATeapot"),
      (i[(i.MisdirectedRequest = 421)] = "MisdirectedRequest"),
      (i[(i.UnprocessableEntity = 422)] = "UnprocessableEntity"),
      (i[(i.Locked = 423)] = "Locked"),
      (i[(i.FailedDependency = 424)] = "FailedDependency"),
      (i[(i.TooEarly = 425)] = "TooEarly"),
      (i[(i.UpgradeRequired = 426)] = "UpgradeRequired"),
      (i[(i.PreconditionRequired = 428)] = "PreconditionRequired"),
      (i[(i.TooManyRequests = 429)] = "TooManyRequests"),
      (i[(i.RequestHeaderFieldsTooLarge = 431)] =
        "RequestHeaderFieldsTooLarge"),
      (i[(i.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
      (i[(i.InternalServerError = 500)] = "InternalServerError"),
      (i[(i.NotImplemented = 501)] = "NotImplemented"),
      (i[(i.BadGateway = 502)] = "BadGateway"),
      (i[(i.ServiceUnavailable = 503)] = "ServiceUnavailable"),
      (i[(i.GatewayTimeout = 504)] = "GatewayTimeout"),
      (i[(i.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
      (i[(i.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
      (i[(i.InsufficientStorage = 507)] = "InsufficientStorage"),
      (i[(i.LoopDetected = 508)] = "LoopDetected"),
      (i[(i.NotExtended = 510)] = "NotExtended"),
      (i[(i.NetworkAuthenticationRequired = 511)] =
        "NetworkAuthenticationRequired"),
      i
    );
  })(So || {});
function ca(i, t) {
  return {
    body: t,
    headers: i.headers,
    context: i.context,
    observe: i.observe,
    params: i.params,
    reportProgress: i.reportProgress,
    responseType: i.responseType,
    withCredentials: i.withCredentials,
    transferCache: i.transferCache,
  };
}
var hn = (() => {
  let t = class t {
    constructor(e) {
      this.handler = e;
    }
    request(e, n, o = {}) {
      let a;
      if (e instanceof dn) a = e;
      else {
        let l;
        o.headers instanceof ft ? (l = o.headers) : (l = new ft(o.headers));
        let d;
        o.params &&
          (o.params instanceof Re
            ? (d = o.params)
            : (d = new Re({ fromObject: o.params }))),
          (a = new dn(e, n, o.body !== void 0 ? o.body : null, {
            headers: l,
            context: o.context,
            params: d,
            reportProgress: o.reportProgress,
            responseType: o.responseType || "json",
            withCredentials: o.withCredentials,
            transferCache: o.transferCache,
          }));
      }
      let s = D(a).pipe(Ce((l) => this.handler.handle(l)));
      if (e instanceof dn || o.observe === "events") return s;
      let c = s.pipe(rt((l) => l instanceof Io));
      switch (o.observe || "body") {
        case "body":
          switch (a.responseType) {
            case "arraybuffer":
              return c.pipe(
                S((l) => {
                  if (l.body !== null && !(l.body instanceof ArrayBuffer))
                    throw new Error("Response is not an ArrayBuffer.");
                  return l.body;
                })
              );
            case "blob":
              return c.pipe(
                S((l) => {
                  if (l.body !== null && !(l.body instanceof Blob))
                    throw new Error("Response is not a Blob.");
                  return l.body;
                })
              );
            case "text":
              return c.pipe(
                S((l) => {
                  if (l.body !== null && typeof l.body != "string")
                    throw new Error("Response is not a string.");
                  return l.body;
                })
              );
            case "json":
            default:
              return c.pipe(S((l) => l.body));
          }
        case "response":
          return c;
        default:
          throw new Error(`Unreachable: unhandled observe type ${o.observe}}`);
      }
    }
    delete(e, n = {}) {
      return this.request("DELETE", e, n);
    }
    get(e, n = {}) {
      return this.request("GET", e, n);
    }
    head(e, n = {}) {
      return this.request("HEAD", e, n);
    }
    jsonp(e, n) {
      return this.request("JSONP", e, {
        params: new Re().append(n, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(e, n = {}) {
      return this.request("OPTIONS", e, n);
    }
    patch(e, n, o = {}) {
      return this.request("PATCH", e, ca(o, n));
    }
    post(e, n, o = {}) {
      return this.request("POST", e, ca(o, n));
    }
    put(e, n, o = {}) {
      return this.request("PUT", e, ca(o, n));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(un));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
function qc(i, t) {
  return t(i);
}
function um(i, t) {
  return (r, e) => t.intercept(r, { handle: (n) => i(n, e) });
}
function mm(i, t, r) {
  return (e, n) => ie(r, () => t(e, (o) => i(o, n)));
}
var hm = new _(""),
  ma = new _(""),
  fm = new _(""),
  pm = new _("");
function gm() {
  let i = null;
  return (t, r) => {
    i === null && (i = (b(hm, { optional: !0 }) ?? []).reduceRight(um, qc));
    let e = b(cn),
      n = e.add();
    return i(t, r).pipe(se(() => e.remove(n)));
  };
}
var Wc = (() => {
  let t = class t extends un {
    constructor(e, n) {
      super(),
        (this.backend = e),
        (this.injector = n),
        (this.chain = null),
        (this.pendingTasks = b(cn));
      let o = b(pm, { optional: !0 });
      this.backend = o ?? e;
    }
    handle(e) {
      if (this.chain === null) {
        let o = Array.from(
          new Set([...this.injector.get(ma), ...this.injector.get(fm, [])])
        );
        this.chain = o.reduceRight((a, s) => mm(a, s, this.injector), qc);
      }
      let n = this.pendingTasks.add();
      return this.chain(e, (o) => this.backend.handle(o)).pipe(
        se(() => this.pendingTasks.remove(n))
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(Eo), m(Ze));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
var bm = /^\)\]\}',?\n/;
function vm(i) {
  return "responseURL" in i && i.responseURL
    ? i.responseURL
    : /^X-Request-URL:/m.test(i.getAllResponseHeaders())
    ? i.getResponseHeader("X-Request-URL")
    : null;
}
var Gc = (() => {
    let t = class t {
      constructor(e) {
        this.xhrFactory = e;
      }
      handle(e) {
        if (e.method === "JSONP") throw new Y(-2800, !1);
        let n = this.xhrFactory;
        return (n.ɵloadImpl ? gt(n.ɵloadImpl()) : D(null)).pipe(
          It(
            () =>
              new we((a) => {
                let s = n.build();
                if (
                  (s.open(e.method, e.urlWithParams),
                  e.withCredentials && (s.withCredentials = !0),
                  e.headers.forEach((j, W) =>
                    s.setRequestHeader(j, W.join(","))
                  ),
                  e.headers.has("Accept") ||
                    s.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !e.headers.has("Content-Type"))
                ) {
                  let j = e.detectContentTypeHeader();
                  j !== null && s.setRequestHeader("Content-Type", j);
                }
                if (e.responseType) {
                  let j = e.responseType.toLowerCase();
                  s.responseType = j !== "json" ? j : "text";
                }
                let c = e.serializeBody(),
                  l = null,
                  d = () => {
                    if (l !== null) return l;
                    let j = s.statusText || "OK",
                      W = new ft(s.getAllResponseHeaders()),
                      Xt = vm(s) || e.url;
                    return (
                      (l = new ua({
                        headers: W,
                        status: s.status,
                        statusText: j,
                        url: Xt,
                      })),
                      l
                    );
                  },
                  f = () => {
                    let {
                        headers: j,
                        status: W,
                        statusText: Xt,
                        url: Js,
                      } = d(),
                      Dt = null;
                    W !== So.NoContent &&
                      (Dt =
                        typeof s.response > "u" ? s.responseText : s.response),
                      W === 0 && (W = Dt ? So.Ok : 0);
                    let zr = W >= 200 && W < 300;
                    if (e.responseType === "json" && typeof Dt == "string") {
                      let em = Dt;
                      Dt = Dt.replace(bm, "");
                      try {
                        Dt = Dt !== "" ? JSON.parse(Dt) : null;
                      } catch (im) {
                        (Dt = em),
                          zr && ((zr = !1), (Dt = { error: im, text: Dt }));
                      }
                    }
                    zr
                      ? (a.next(
                          new Io({
                            body: Dt,
                            headers: j,
                            status: W,
                            statusText: Xt,
                            url: Js || void 0,
                          })
                        ),
                        a.complete())
                      : a.error(
                          new Mo({
                            error: Dt,
                            headers: j,
                            status: W,
                            statusText: Xt,
                            url: Js || void 0,
                          })
                        );
                  },
                  y = (j) => {
                    let { url: W } = d(),
                      Xt = new Mo({
                        error: j,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: W || void 0,
                      });
                    a.error(Xt);
                  },
                  A = !1,
                  H = (j) => {
                    A || (a.next(d()), (A = !0));
                    let W = { type: Ei.DownloadProgress, loaded: j.loaded };
                    j.lengthComputable && (W.total = j.total),
                      e.responseType === "text" &&
                        s.responseText &&
                        (W.partialText = s.responseText),
                      a.next(W);
                  },
                  $ = (j) => {
                    let W = { type: Ei.UploadProgress, loaded: j.loaded };
                    j.lengthComputable && (W.total = j.total), a.next(W);
                  };
                return (
                  s.addEventListener("load", f),
                  s.addEventListener("error", y),
                  s.addEventListener("timeout", y),
                  s.addEventListener("abort", y),
                  e.reportProgress &&
                    (s.addEventListener("progress", H),
                    c !== null &&
                      s.upload &&
                      s.upload.addEventListener("progress", $)),
                  s.send(c),
                  a.next({ type: Ei.Sent }),
                  () => {
                    s.removeEventListener("error", y),
                      s.removeEventListener("abort", y),
                      s.removeEventListener("load", f),
                      s.removeEventListener("timeout", y),
                      e.reportProgress &&
                        (s.removeEventListener("progress", H),
                        c !== null &&
                          s.upload &&
                          s.upload.removeEventListener("progress", $)),
                      s.readyState !== s.DONE && s.abort();
                  }
                );
              })
          )
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(xo));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  Zc = new _(""),
  _m = "XSRF-TOKEN",
  ym = new _("", { providedIn: "root", factory: () => _m }),
  xm = "X-XSRF-TOKEN",
  wm = new _("", { providedIn: "root", factory: () => xm }),
  Ao = class {},
  Cm = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this.doc = e),
          (this.platform = n),
          (this.cookieName = o),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let e = this.doc.cookie || "";
        return (
          e !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = vo(e, this.cookieName)),
            (this.lastCookieString = e)),
          this.lastToken
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E), m(le), m(ym));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function Dm(i, t) {
  let r = i.url.toLowerCase();
  if (
    !b(Zc) ||
    i.method === "GET" ||
    i.method === "HEAD" ||
    r.startsWith("http://") ||
    r.startsWith("https://")
  )
    return t(i);
  let e = b(Ao).getToken(),
    n = b(wm);
  return (
    e != null &&
      !i.headers.has(n) &&
      (i = i.clone({ headers: i.headers.set(n, e) })),
    t(i)
  );
}
var Xc = (function (i) {
  return (
    (i[(i.Interceptors = 0)] = "Interceptors"),
    (i[(i.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (i[(i.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (i[(i.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (i[(i.JsonpSupport = 4)] = "JsonpSupport"),
    (i[(i.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (i[(i.Fetch = 6)] = "Fetch"),
    i
  );
})(Xc || {});
function Em(i, t) {
  return { ɵkind: i, ɵproviders: t };
}
function Im(...i) {
  let t = [
    hn,
    Gc,
    Wc,
    { provide: un, useExisting: Wc },
    { provide: Eo, useExisting: Gc },
    { provide: ma, useValue: Dm, multi: !0 },
    { provide: Zc, useValue: !0 },
    { provide: Ao, useClass: Cm },
  ];
  for (let r of i) t.push(...r.ɵproviders);
  return _i(t);
}
var Yc = new _("");
function Mm() {
  return Em(Xc.LegacyInterceptors, [
    { provide: Yc, useFactory: gm },
    { provide: ma, useExisting: Yc, multi: !0 },
  ]);
}
var Kc = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [Im(Mm())] }));
  let i = t;
  return i;
})();
var pa = class extends Ac {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  ga = class i extends pa {
    static makeCurrent() {
      Sc(new i());
    }
    onAndCancel(t, r, e) {
      return (
        t.addEventListener(r, e),
        () => {
          t.removeEventListener(r, e);
        }
      );
    }
    dispatchEvent(t, r) {
      t.dispatchEvent(r);
    }
    remove(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    createElement(t, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, r) {
      return r === "window"
        ? window
        : r === "document"
        ? t
        : r === "body"
        ? t.body
        : null;
    }
    getBaseHref(t) {
      let r = Am();
      return r == null ? null : Rm(r);
    }
    resetBaseElement() {
      fn = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return vo(document.cookie, t);
    }
  },
  fn = null;
function Am() {
  return (
    (fn = fn || document.querySelector("base")),
    fn ? fn.getAttribute("href") : null
  );
}
function Rm(i) {
  return new URL(i, document.baseURI).pathname;
}
var ba = class {
    addToWindow(t) {
      (Ee.getAngularTestability = (e, n = !0) => {
        let o = t.findTestabilityInTree(e, n);
        if (o == null) throw new Y(5103, !1);
        return o;
      }),
        (Ee.getAllAngularTestabilities = () => t.getAllTestabilities()),
        (Ee.getAllAngularRootElements = () => t.getAllRootElements());
      let r = (e) => {
        let n = Ee.getAllAngularTestabilities(),
          o = n.length,
          a = function () {
            o--, o == 0 && e();
          };
        n.forEach((s) => {
          s.whenStable(a);
        });
      };
      Ee.frameworkStabilizers || (Ee.frameworkStabilizers = []),
        Ee.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(t, r, e) {
      if (r == null) return null;
      let n = t.getTestability(r);
      return (
        n ??
        (e
          ? ei().isShadowRoot(r)
            ? this.findTestabilityInTree(t, r.host, !0)
            : this.findTestabilityInTree(t, r.parentElement, !0)
          : null)
      );
    }
  },
  km = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  va = new _(""),
  el = (() => {
    let t = class t {
      constructor(e, n) {
        (this._zone = n),
          (this._eventNameToPlugin = new Map()),
          e.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, n, o) {
        return this._findPluginFor(n).addEventListener(e, n, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let n = this._eventNameToPlugin.get(e);
        if (n) return n;
        if (((n = this._plugins.find((a) => a.supports(e))), !n))
          throw new Y(5101, !1);
        return this._eventNameToPlugin.set(e, n), n;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(va), m(w));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  Ro = class {
    constructor(t) {
      this._doc = t;
    }
  },
  ha = "ng-app-id",
  il = (() => {
    let t = class t {
      constructor(e, n, o, a = {}) {
        (this.doc = e),
          (this.appId = n),
          (this.nonce = o),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = yo(a)),
          this.resetHostNodes();
      }
      addStyles(e) {
        for (let n of e)
          this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
      }
      removeStyles(e) {
        for (let n of e)
          this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
      }
      ngOnDestroy() {
        let e = this.styleNodesInDOM;
        e && (e.forEach((n) => n.remove()), e.clear());
        for (let n of this.getAllStyles()) this.onStyleRemoved(n);
        this.resetHostNodes();
      }
      addHost(e) {
        this.hostNodes.add(e);
        for (let n of this.getAllStyles()) this.addStyleToHost(e, n);
      }
      removeHost(e) {
        this.hostNodes.delete(e);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(e) {
        for (let n of this.hostNodes) this.addStyleToHost(n, e);
      }
      onStyleRemoved(e) {
        let n = this.styleRef;
        n.get(e)?.elements?.forEach((o) => o.remove()), n.delete(e);
      }
      collectServerRenderedStyles() {
        let e = this.doc.head?.querySelectorAll(`style[${ha}="${this.appId}"]`);
        if (e?.length) {
          let n = new Map();
          return (
            e.forEach((o) => {
              o.textContent != null && n.set(o.textContent, o);
            }),
            n
          );
        }
        return null;
      }
      changeUsageCount(e, n) {
        let o = this.styleRef;
        if (o.has(e)) {
          let a = o.get(e);
          return (a.usage += n), a.usage;
        }
        return o.set(e, { usage: n, elements: [] }), n;
      }
      getStyleElement(e, n) {
        let o = this.styleNodesInDOM,
          a = o?.get(n);
        if (a?.parentNode === e) return o.delete(n), a.removeAttribute(ha), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = n),
            this.platformIsServer && s.setAttribute(ha, this.appId),
            e.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(e, n) {
        let o = this.getStyleElement(e, n),
          a = this.styleRef,
          s = a.get(n)?.elements;
        s ? s.push(o) : a.set(n, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let e = this.hostNodes;
        e.clear(), e.add(this.doc.head);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E), m(on), m(rn, 8), m(le));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  fa = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  xa = /%COMP%/g,
  nl = "%COMP%",
  Om = `_nghost-${nl}`,
  Tm = `_ngcontent-${nl}`,
  Fm = !0,
  Pm = new _("", { providedIn: "root", factory: () => Fm });
function Nm(i) {
  return Tm.replace(xa, i);
}
function Lm(i) {
  return Om.replace(xa, i);
}
function ol(i, t) {
  return t.map((r) => r.replace(xa, i));
}
var Mi = (() => {
    let t = class t {
      constructor(e, n, o, a, s, c, l, d = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = n),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = s),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = yo(c)),
          (this.defaultRenderer = new pn(e, s, l, this.platformIsServer));
      }
      createRenderer(e, n) {
        if (!e || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === nn.ShadowDom &&
          (n = X(g({}, n), { encapsulation: nn.Emulated }));
        let o = this.getOrCreateRenderer(e, n);
        return (
          o instanceof ko
            ? o.applyToHost(e)
            : o instanceof gn && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(e, n) {
        let o = this.rendererByCompId,
          a = o.get(n.id);
        if (!a) {
          let s = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            d = this.sharedStylesHost,
            f = this.removeStylesOnCompDestroy,
            y = this.platformIsServer;
          switch (n.encapsulation) {
            case nn.Emulated:
              a = new ko(l, d, n, this.appId, f, s, c, y);
              break;
            case nn.ShadowDom:
              return new _a(l, d, e, n, s, c, this.nonce, y);
            default:
              a = new gn(l, d, n, f, s, c, y);
              break;
          }
          o.set(n.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(el), m(il), m(on), m(Pm), m(E), m(le), m(w), m(rn));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  pn = class {
    constructor(t, r, e, n) {
      (this.eventManager = t),
        (this.doc = r),
        (this.ngZone = e),
        (this.platformIsServer = n),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, r) {
      return r
        ? this.doc.createElementNS(fa[r] || r, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, r) {
      (Jc(t) ? t.content : t).appendChild(r);
    }
    insertBefore(t, r, e) {
      t && (Jc(t) ? t.content : t).insertBefore(r, e);
    }
    removeChild(t, r) {
      t && t.removeChild(r);
    }
    selectRootElement(t, r) {
      let e = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!e) throw new Y(-5104, !1);
      return r || (e.textContent = ""), e;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, r, e, n) {
      if (n) {
        r = n + ":" + r;
        let o = fa[n];
        o ? t.setAttributeNS(o, r, e) : t.setAttribute(r, e);
      } else t.setAttribute(r, e);
    }
    removeAttribute(t, r, e) {
      if (e) {
        let n = fa[e];
        n ? t.removeAttributeNS(n, r) : t.removeAttribute(`${e}:${r}`);
      } else t.removeAttribute(r);
    }
    addClass(t, r) {
      t.classList.add(r);
    }
    removeClass(t, r) {
      t.classList.remove(r);
    }
    setStyle(t, r, e, n) {
      n & (an.DashCase | an.Important)
        ? t.style.setProperty(r, e, n & an.Important ? "important" : "")
        : (t.style[r] = e);
    }
    removeStyle(t, r, e) {
      e & an.DashCase ? t.style.removeProperty(r) : (t.style[r] = "");
    }
    setProperty(t, r, e) {
      t != null && (t[r] = e);
    }
    setValue(t, r) {
      t.nodeValue = r;
    }
    listen(t, r, e) {
      if (
        typeof t == "string" &&
        ((t = ei().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${r}`);
      return this.eventManager.addEventListener(
        t,
        r,
        this.decoratePreventDefault(e)
      );
    }
    decoratePreventDefault(t) {
      return (r) => {
        if (r === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(r)) : t(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function Jc(i) {
  return i.tagName === "TEMPLATE" && i.content !== void 0;
}
var _a = class extends pn {
    constructor(t, r, e, n, o, a, s, c) {
      super(t, o, a, c),
        (this.sharedStylesHost = r),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = ol(n.id, n.styles);
      for (let d of l) {
        let f = document.createElement("style");
        s && f.setAttribute("nonce", s),
          (f.textContent = d),
          this.shadowRoot.appendChild(f);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, r) {
      return super.appendChild(this.nodeOrShadowRoot(t), r);
    }
    insertBefore(t, r, e) {
      return super.insertBefore(this.nodeOrShadowRoot(t), r, e);
    }
    removeChild(t, r) {
      return super.removeChild(this.nodeOrShadowRoot(t), r);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  gn = class extends pn {
    constructor(t, r, e, n, o, a, s, c) {
      super(t, o, a, s),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = n),
        (this.styles = c ? ol(c, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ko = class extends gn {
    constructor(t, r, e, n, o, a, s, c) {
      let l = n + "-" + e.id;
      super(t, r, e, o, a, s, c, l),
        (this.contentAttr = Nm(l)),
        (this.hostAttr = Lm(l));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, r) {
      let e = super.createElement(t, r);
      return super.setAttribute(e, this.contentAttr, ""), e;
    }
  },
  jm = (() => {
    let t = class t extends Ro {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, n, o) {
        return (
          e.addEventListener(n, o, !1), () => this.removeEventListener(e, n, o)
        );
      }
      removeEventListener(e, n, o) {
        return e.removeEventListener(n, o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  tl = ["alt", "control", "meta", "shift"],
  Vm = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  zm = {
    alt: (i) => i.altKey,
    control: (i) => i.ctrlKey,
    meta: (i) => i.metaKey,
    shift: (i) => i.shiftKey,
  },
  Bm = (() => {
    let t = class t extends Ro {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, n, o) {
        let a = t.parseEventName(n),
          s = t.eventCallback(a.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => ei().onAndCancel(e, a.domEventName, s));
      }
      static parseEventName(e) {
        let n = e.toLowerCase().split("."),
          o = n.shift();
        if (n.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let a = t._normalizeKey(n.pop()),
          s = "",
          c = n.indexOf("code");
        if (
          (c > -1 && (n.splice(c, 1), (s = "code.")),
          tl.forEach((d) => {
            let f = n.indexOf(d);
            f > -1 && (n.splice(f, 1), (s += d + "."));
          }),
          (s += a),
          n.length != 0 || a.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = o), (l.fullKey = s), l;
      }
      static matchEventFullKeyCode(e, n) {
        let o = Vm[e.key] || e.key,
          a = "";
        return (
          n.indexOf("code.") > -1 && ((o = e.code), (a = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              tl.forEach((s) => {
                if (s !== o) {
                  let c = zm[s];
                  c(e) && (a += s + ".");
                }
              }),
              (a += o),
              a === n)
        );
      }
      static eventCallback(e, n, o) {
        return (a) => {
          t.matchEventFullKeyCode(a, e) && o.runGuarded(() => n(a));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function Um() {
  ga.makeCurrent();
}
function Hm() {
  return new Xe();
}
function $m() {
  return cc(document), document;
}
var Wm = [
    { provide: le, useValue: Fc },
    { provide: lc, useValue: Um, multi: !0 },
    { provide: E, useFactory: $m, deps: [] },
  ],
  rl = Cc(Dc, "browser", Wm),
  Gm = new _(""),
  Ym = [
    { provide: fo, useClass: ba, deps: [] },
    { provide: wc, useClass: po, deps: [w, oa, fo] },
    { provide: po, useClass: po, deps: [w, oa, fo] },
  ],
  qm = [
    { provide: sc, useValue: "root" },
    { provide: Xe, useFactory: Hm, deps: [] },
    { provide: va, useClass: jm, multi: !0, deps: [E, w, le] },
    { provide: va, useClass: Bm, multi: !0, deps: [E] },
    Mi,
    il,
    el,
    { provide: wi, useExisting: Mi },
    { provide: xo, useClass: km, deps: [] },
    [],
  ],
  Oo = (() => {
    let t = class t {
      constructor(e) {}
      static withServerTransition(e) {
        return { ngModule: t, providers: [{ provide: on, useValue: e.appId }] };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Gm, 12));
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ providers: [...qm, ...Ym], imports: [Se, Ec] }));
    let i = t;
    return i;
  })();
var al = (() => {
  let t = class t {
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(E));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var wa = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({
        token: t,
        factory: function (n) {
          let o = null;
          return n ? (o = new (n || t)()) : (o = m(Zm)), o;
        },
        providedIn: "root",
      }));
    let i = t;
    return i;
  })(),
  Zm = (() => {
    let t = class t extends wa {
      constructor(e) {
        super(), (this._doc = e);
      }
      sanitize(e, n) {
        if (n == null) return null;
        switch (e) {
          case kt.NONE:
            return n;
          case kt.HTML:
            return xi(n, "HTML") ? yi(n) : gc(this._doc, String(n)).toString();
          case kt.STYLE:
            return xi(n, "Style") ? yi(n) : n;
          case kt.SCRIPT:
            if (xi(n, "Script")) return yi(n);
            throw new Y(5200, !1);
          case kt.URL:
            return xi(n, "URL") ? yi(n) : pc(String(n));
          case kt.RESOURCE_URL:
            if (xi(n, "ResourceURL")) return yi(n);
            throw new Y(5201, !1);
          default:
            throw new Y(5202, !1);
        }
      }
      bypassSecurityTrustHtml(e) {
        return dc(e);
      }
      bypassSecurityTrustStyle(e) {
        return uc(e);
      }
      bypassSecurityTrustScript(e) {
        return mc(e);
      }
      bypassSecurityTrustUrl(e) {
        return hc(e);
      }
      bypassSecurityTrustResourceUrl(e) {
        return fc(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var F = "primary",
  kn = Symbol("RouteTitle"),
  Sa = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Oi(i) {
  return new Sa(i);
}
function Xm(i, t, r) {
  let e = r.path.split("/");
  if (
    e.length > i.length ||
    (r.pathMatch === "full" && (t.hasChildren() || e.length < i.length))
  )
    return null;
  let n = {};
  for (let o = 0; o < e.length; o++) {
    let a = e[o],
      s = i[o];
    if (a.startsWith(":")) n[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: i.slice(0, e.length), posParams: n };
}
function Km(i, t) {
  if (i.length !== t.length) return !1;
  for (let r = 0; r < i.length; ++r) if (!ne(i[r], t[r])) return !1;
  return !0;
}
function ne(i, t) {
  let r = i ? Aa(i) : void 0,
    e = t ? Aa(t) : void 0;
  if (!r || !e || r.length != e.length) return !1;
  let n;
  for (let o = 0; o < r.length; o++)
    if (((n = r[o]), !pl(i[n], t[n]))) return !1;
  return !0;
}
function Aa(i) {
  return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)];
}
function pl(i, t) {
  if (Array.isArray(i) && Array.isArray(t)) {
    if (i.length !== t.length) return !1;
    let r = [...i].sort(),
      e = [...t].sort();
    return r.every((n, o) => e[o] === n);
  } else return i === t;
}
function gl(i) {
  return i.length > 0 ? i[i.length - 1] : null;
}
function Fe(i) {
  return $r(i) ? i : go(i) ? gt(Promise.resolve(i)) : D(i);
}
var Qm = { exact: vl, subset: _l },
  bl = { exact: Jm, subset: th, ignored: () => !0 };
function sl(i, t, r) {
  return (
    Qm[r.paths](i.root, t.root, r.matrixParams) &&
    bl[r.queryParams](i.queryParams, t.queryParams) &&
    !(r.fragment === "exact" && i.fragment !== t.fragment)
  );
}
function Jm(i, t) {
  return ne(i, t);
}
function vl(i, t, r) {
  if (
    !oi(i.segments, t.segments) ||
    !Po(i.segments, t.segments, r) ||
    i.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let e in t.children)
    if (!i.children[e] || !vl(i.children[e], t.children[e], r)) return !1;
  return !0;
}
function th(i, t) {
  return (
    Object.keys(t).length <= Object.keys(i).length &&
    Object.keys(t).every((r) => pl(i[r], t[r]))
  );
}
function _l(i, t, r) {
  return yl(i, t, t.segments, r);
}
function yl(i, t, r, e) {
  if (i.segments.length > r.length) {
    let n = i.segments.slice(0, r.length);
    return !(!oi(n, r) || t.hasChildren() || !Po(n, r, e));
  } else if (i.segments.length === r.length) {
    if (!oi(i.segments, r) || !Po(i.segments, r, e)) return !1;
    for (let n in t.children)
      if (!i.children[n] || !_l(i.children[n], t.children[n], e)) return !1;
    return !0;
  } else {
    let n = r.slice(0, i.segments.length),
      o = r.slice(i.segments.length);
    return !oi(i.segments, n) || !Po(i.segments, n, e) || !i.children[F]
      ? !1
      : yl(i.children[F], t, o, e);
  }
}
function Po(i, t, r) {
  return t.every((e, n) => bl[r](i[n].parameters, e.parameters));
}
var ke = class {
    constructor(t = new q([], {}), r = {}, e = null) {
      (this.root = t), (this.queryParams = r), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Oi(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return nh.serialize(this);
    }
  },
  q = class {
    constructor(t, r) {
      (this.segments = t),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((e) => (e.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return No(this);
    }
  },
  ni = class {
    constructor(t, r) {
      (this.path = t), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= Oi(this.parameters)), this._parameterMap;
    }
    toString() {
      return wl(this);
    }
  };
function eh(i, t) {
  return oi(i, t) && i.every((r, e) => ne(r.parameters, t[e].parameters));
}
function oi(i, t) {
  return i.length !== t.length ? !1 : i.every((r, e) => r.path === t[e].path);
}
function ih(i, t) {
  let r = [];
  return (
    Object.entries(i.children).forEach(([e, n]) => {
      e === F && (r = r.concat(t(n, e)));
    }),
    Object.entries(i.children).forEach(([e, n]) => {
      e !== F && (r = r.concat(t(n, e)));
    }),
    r
  );
}
var On = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => new Cn(), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Cn = class {
    parse(t) {
      let r = new ka(t);
      return new ke(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment()
      );
    }
    serialize(t) {
      let r = `/${bn(t.root, !0)}`,
        e = ah(t.queryParams),
        n = typeof t.fragment == "string" ? `#${oh(t.fragment)}` : "";
      return `${r}${e}${n}`;
    }
  },
  nh = new Cn();
function No(i) {
  return i.segments.map((t) => wl(t)).join("/");
}
function bn(i, t) {
  if (!i.hasChildren()) return No(i);
  if (t) {
    let r = i.children[F] ? bn(i.children[F], !1) : "",
      e = [];
    return (
      Object.entries(i.children).forEach(([n, o]) => {
        n !== F && e.push(`${n}:${bn(o, !1)}`);
      }),
      e.length > 0 ? `${r}(${e.join("//")})` : r
    );
  } else {
    let r = ih(i, (e, n) =>
      n === F ? [bn(i.children[F], !1)] : [`${n}:${bn(e, !1)}`]
    );
    return Object.keys(i.children).length === 1 && i.children[F] != null
      ? `${No(i)}/${r[0]}`
      : `${No(i)}/(${r.join("//")})`;
  }
}
function xl(i) {
  return encodeURIComponent(i)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function To(i) {
  return xl(i).replace(/%3B/gi, ";");
}
function oh(i) {
  return encodeURI(i);
}
function Ra(i) {
  return xl(i)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Lo(i) {
  return decodeURIComponent(i);
}
function cl(i) {
  return Lo(i.replace(/\+/g, "%20"));
}
function wl(i) {
  return `${Ra(i.path)}${rh(i.parameters)}`;
}
function rh(i) {
  return Object.entries(i)
    .map(([t, r]) => `;${Ra(t)}=${Ra(r)}`)
    .join("");
}
function ah(i) {
  let t = Object.entries(i)
    .map(([r, e]) =>
      Array.isArray(e)
        ? e.map((n) => `${To(r)}=${To(n)}`).join("&")
        : `${To(r)}=${To(e)}`
    )
    .filter((r) => r);
  return t.length ? `?${t.join("&")}` : "";
}
var sh = /^[^\/()?;#]+/;
function Da(i) {
  let t = i.match(sh);
  return t ? t[0] : "";
}
var ch = /^[^\/()?;=#]+/;
function lh(i) {
  let t = i.match(ch);
  return t ? t[0] : "";
}
var dh = /^[^=?&#]+/;
function uh(i) {
  let t = i.match(dh);
  return t ? t[0] : "";
}
var mh = /^[^&#]+/;
function hh(i) {
  let t = i.match(mh);
  return t ? t[0] : "";
}
var ka = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new q([], {})
        : new q([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let e = {};
    return (
      this.peekStartsWith("(") && (e = this.parseParens(!1)),
      (t.length > 0 || Object.keys(r).length > 0) && (e[F] = new q(t, r)),
      e
    );
  }
  parseSegment() {
    let t = Da(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new Y(4009, !1);
    return this.capture(t), new ni(Lo(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let r = lh(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let n = Da(this.remaining);
      n && ((e = n), this.capture(e));
    }
    t[Lo(r)] = Lo(e);
  }
  parseQueryParam(t) {
    let r = uh(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let a = hh(this.remaining);
      a && ((e = a), this.capture(e));
    }
    let n = cl(r),
      o = cl(e);
    if (t.hasOwnProperty(n)) {
      let a = t[n];
      Array.isArray(a) || ((a = [a]), (t[n] = a)), a.push(o);
    } else t[n] = o;
  }
  parseParens(t) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let e = Da(this.remaining),
        n = this.remaining[e.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new Y(4010, !1);
      let o;
      e.indexOf(":") > -1
        ? ((o = e.slice(0, e.indexOf(":"))), this.capture(o), this.capture(":"))
        : t && (o = F);
      let a = this.parseChildren();
      (r[o] = Object.keys(a).length === 1 ? a[F] : new q([], a)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new Y(4011, !1);
  }
};
function Cl(i) {
  return i.segments.length > 0 ? new q([], { [F]: i }) : i;
}
function Dl(i) {
  let t = {};
  for (let [e, n] of Object.entries(i.children)) {
    let o = Dl(n);
    if (e === F && o.segments.length === 0 && o.hasChildren())
      for (let [a, s] of Object.entries(o.children)) t[a] = s;
    else (o.segments.length > 0 || o.hasChildren()) && (t[e] = o);
  }
  let r = new q(i.segments, t);
  return fh(r);
}
function fh(i) {
  if (i.numberOfChildren === 1 && i.children[F]) {
    let t = i.children[F];
    return new q(i.segments.concat(t.segments), t.children);
  }
  return i;
}
function Ti(i) {
  return i instanceof ke;
}
function ph(i, t, r = null, e = null) {
  let n = El(i);
  return Il(n, t, r, e);
}
function El(i) {
  let t;
  function r(o) {
    let a = {};
    for (let c of o.children) {
      let l = r(c);
      a[c.outlet] = l;
    }
    let s = new q(o.url, a);
    return o === i && (t = s), s;
  }
  let e = r(i.root),
    n = Cl(e);
  return t ?? n;
}
function Il(i, t, r, e) {
  let n = i;
  for (; n.parent; ) n = n.parent;
  if (t.length === 0) return Ea(n, n, n, r, e);
  let o = gh(t);
  if (o.toRoot()) return Ea(n, n, new q([], {}), r, e);
  let a = bh(o, n, i),
    s = a.processChildren
      ? yn(a.segmentGroup, a.index, o.commands)
      : Sl(a.segmentGroup, a.index, o.commands);
  return Ea(n, a.segmentGroup, s, r, e);
}
function jo(i) {
  return typeof i == "object" && i != null && !i.outlets && !i.segmentPath;
}
function Dn(i) {
  return typeof i == "object" && i != null && i.outlets;
}
function Ea(i, t, r, e, n) {
  let o = {};
  e &&
    Object.entries(e).forEach(([c, l]) => {
      o[c] = Array.isArray(l) ? l.map((d) => `${d}`) : `${l}`;
    });
  let a;
  i === t ? (a = r) : (a = Ml(i, t, r));
  let s = Cl(Dl(a));
  return new ke(s, o, n);
}
function Ml(i, t, r) {
  let e = {};
  return (
    Object.entries(i.children).forEach(([n, o]) => {
      o === t ? (e[n] = r) : (e[n] = Ml(o, t, r));
    }),
    new q(i.segments, e)
  );
}
var Vo = class {
  constructor(t, r, e) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = r),
      (this.commands = e),
      t && e.length > 0 && jo(e[0]))
    )
      throw new Y(4003, !1);
    let n = e.find(Dn);
    if (n && n !== gl(e)) throw new Y(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function gh(i) {
  if (typeof i[0] == "string" && i.length === 1 && i[0] === "/")
    return new Vo(!0, 0, i);
  let t = 0,
    r = !1,
    e = i.reduce((n, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let s = {};
          return (
            Object.entries(o.outlets).forEach(([c, l]) => {
              s[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...n, { outlets: s }]
          );
        }
        if (o.segmentPath) return [...n, o.segmentPath];
      }
      return typeof o != "string"
        ? [...n, o]
        : a === 0
        ? (o.split("/").forEach((s, c) => {
            (c == 0 && s === ".") ||
              (c == 0 && s === ""
                ? (r = !0)
                : s === ".."
                ? t++
                : s != "" && n.push(s));
          }),
          n)
        : [...n, o];
    }, []);
  return new Vo(r, t, e);
}
var Ri = class {
  constructor(t, r, e) {
    (this.segmentGroup = t), (this.processChildren = r), (this.index = e);
  }
};
function bh(i, t, r) {
  if (i.isAbsolute) return new Ri(t, !0, 0);
  if (!r) return new Ri(t, !1, NaN);
  if (r.parent === null) return new Ri(r, !0, 0);
  let e = jo(i.commands[0]) ? 0 : 1,
    n = r.segments.length - 1 + e;
  return vh(r, n, i.numberOfDoubleDots);
}
function vh(i, t, r) {
  let e = i,
    n = t,
    o = r;
  for (; o > n; ) {
    if (((o -= n), (e = e.parent), !e)) throw new Y(4005, !1);
    n = e.segments.length;
  }
  return new Ri(e, !1, n - o);
}
function _h(i) {
  return Dn(i[0]) ? i[0].outlets : { [F]: i };
}
function Sl(i, t, r) {
  if (((i ??= new q([], {})), i.segments.length === 0 && i.hasChildren()))
    return yn(i, t, r);
  let e = yh(i, t, r),
    n = r.slice(e.commandIndex);
  if (e.match && e.pathIndex < i.segments.length) {
    let o = new q(i.segments.slice(0, e.pathIndex), {});
    return (
      (o.children[F] = new q(i.segments.slice(e.pathIndex), i.children)),
      yn(o, 0, n)
    );
  } else
    return e.match && n.length === 0
      ? new q(i.segments, {})
      : e.match && !i.hasChildren()
      ? Oa(i, t, r)
      : e.match
      ? yn(i, 0, n)
      : Oa(i, t, r);
}
function yn(i, t, r) {
  if (r.length === 0) return new q(i.segments, {});
  {
    let e = _h(r),
      n = {};
    if (
      Object.keys(e).some((o) => o !== F) &&
      i.children[F] &&
      i.numberOfChildren === 1 &&
      i.children[F].segments.length === 0
    ) {
      let o = yn(i.children[F], t, r);
      return new q(i.segments, o.children);
    }
    return (
      Object.entries(e).forEach(([o, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (n[o] = Sl(i.children[o], t, a));
      }),
      Object.entries(i.children).forEach(([o, a]) => {
        e[o] === void 0 && (n[o] = a);
      }),
      new q(i.segments, n)
    );
  }
}
function yh(i, t, r) {
  let e = 0,
    n = t,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; n < i.segments.length; ) {
    if (e >= r.length) return o;
    let a = i.segments[n],
      s = r[e];
    if (Dn(s)) break;
    let c = `${s}`,
      l = e < r.length - 1 ? r[e + 1] : null;
    if (n > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!dl(c, l, a)) return o;
      e += 2;
    } else {
      if (!dl(c, {}, a)) return o;
      e++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: e };
}
function Oa(i, t, r) {
  let e = i.segments.slice(0, t),
    n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (Dn(o)) {
      let c = xh(o.outlets);
      return new q(e, c);
    }
    if (n === 0 && jo(r[0])) {
      let c = i.segments[t];
      e.push(new ni(c.path, ll(r[0]))), n++;
      continue;
    }
    let a = Dn(o) ? o.outlets[F] : `${o}`,
      s = n < r.length - 1 ? r[n + 1] : null;
    a && s && jo(s)
      ? (e.push(new ni(a, ll(s))), (n += 2))
      : (e.push(new ni(a, {})), n++);
  }
  return new q(e, {});
}
function xh(i) {
  let t = {};
  return (
    Object.entries(i).forEach(([r, e]) => {
      typeof e == "string" && (e = [e]),
        e !== null && (t[r] = Oa(new q([], {}), 0, e));
    }),
    t
  );
}
function ll(i) {
  let t = {};
  return Object.entries(i).forEach(([r, e]) => (t[r] = `${e}`)), t;
}
function dl(i, t, r) {
  return i == r.path && ne(t, r.parameters);
}
var xn = "imperative",
  pt = (function (i) {
    return (
      (i[(i.NavigationStart = 0)] = "NavigationStart"),
      (i[(i.NavigationEnd = 1)] = "NavigationEnd"),
      (i[(i.NavigationCancel = 2)] = "NavigationCancel"),
      (i[(i.NavigationError = 3)] = "NavigationError"),
      (i[(i.RoutesRecognized = 4)] = "RoutesRecognized"),
      (i[(i.ResolveStart = 5)] = "ResolveStart"),
      (i[(i.ResolveEnd = 6)] = "ResolveEnd"),
      (i[(i.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (i[(i.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (i[(i.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (i[(i.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (i[(i.ChildActivationStart = 11)] = "ChildActivationStart"),
      (i[(i.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (i[(i.ActivationStart = 13)] = "ActivationStart"),
      (i[(i.ActivationEnd = 14)] = "ActivationEnd"),
      (i[(i.Scroll = 15)] = "Scroll"),
      (i[(i.NavigationSkipped = 16)] = "NavigationSkipped"),
      i
    );
  })(pt || {}),
  Ht = class {
    constructor(t, r) {
      (this.id = t), (this.url = r);
    }
  },
  Fi = class extends Ht {
    constructor(t, r, e = "imperative", n = null) {
      super(t, r),
        (this.type = pt.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  ge = class extends Ht {
    constructor(t, r, e) {
      super(t, r), (this.urlAfterRedirects = e), (this.type = pt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Pt = (function (i) {
    return (
      (i[(i.Redirect = 0)] = "Redirect"),
      (i[(i.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (i[(i.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (i[(i.GuardRejected = 3)] = "GuardRejected"),
      i
    );
  })(Pt || {}),
  zo = (function (i) {
    return (
      (i[(i.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (i[(i.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      i
    );
  })(zo || {}),
  Oe = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = pt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Te = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = pt.NavigationSkipped);
    }
  },
  En = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.error = e),
        (this.target = n),
        (this.type = pt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Bo = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = pt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ta = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = pt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Fa = class extends Ht {
    constructor(t, r, e, n, o) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.shouldActivate = o),
        (this.type = pt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Pa = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = pt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Na = class extends Ht {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = pt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  La = class {
    constructor(t) {
      (this.route = t), (this.type = pt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  ja = class {
    constructor(t) {
      (this.route = t), (this.type = pt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Va = class {
    constructor(t) {
      (this.snapshot = t), (this.type = pt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  za = class {
    constructor(t) {
      (this.snapshot = t), (this.type = pt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Ba = class {
    constructor(t) {
      (this.snapshot = t), (this.type = pt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Ua = class {
    constructor(t) {
      (this.snapshot = t), (this.type = pt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Uo = class {
    constructor(t, r, e) {
      (this.routerEvent = t),
        (this.position = r),
        (this.anchor = e),
        (this.type = pt.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  In = class {},
  Mn = class {
    constructor(t) {
      this.url = t;
    }
  };
var Ha = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new Tn()),
        (this.attachRef = null);
    }
  },
  Tn = (() => {
    let t = class t {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(e, n) {
        let o = this.getOrCreateContext(e);
        (o.outlet = n), this.contexts.set(e, o);
      }
      onChildOutletDestroyed(e) {
        let n = this.getContext(e);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let n = this.getContext(e);
        return n || ((n = new Ha()), this.contexts.set(e, n)), n;
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Ho = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let r = this.pathFromRoot(t);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(t) {
      let r = $a(t, this._root);
      return r ? r.children.map((e) => e.value) : [];
    }
    firstChild(t) {
      let r = $a(t, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(t) {
      let r = Wa(t, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((n) => n.value).filter((n) => n !== t);
    }
    pathFromRoot(t) {
      return Wa(t, this._root).map((r) => r.value);
    }
  };
function $a(i, t) {
  if (i === t.value) return t;
  for (let r of t.children) {
    let e = $a(i, r);
    if (e) return e;
  }
  return null;
}
function Wa(i, t) {
  if (i === t.value) return [t];
  for (let r of t.children) {
    let e = Wa(i, r);
    if (e.length) return e.unshift(t), e;
  }
  return [];
}
var Ft = class {
  constructor(t, r) {
    (this.value = t), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Ai(i) {
  let t = {};
  return i && i.children.forEach((r) => (t[r.value.outlet] = r)), t;
}
var $o = class extends Ho {
  constructor(t, r) {
    super(t), (this.snapshot = r), es(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Al(i) {
  let t = wh(i),
    r = new Et([new ni("", {})]),
    e = new Et({}),
    n = new Et({}),
    o = new Et({}),
    a = new Et(""),
    s = new Pi(r, e, o, a, n, F, i, t.root);
  return (s.snapshot = t.root), new $o(new Ft(s, []), t);
}
function wh(i) {
  let t = {},
    r = {},
    e = {},
    n = "",
    o = new Sn([], t, e, n, r, F, i, null, {});
  return new Wo("", new Ft(o, []));
}
var Pi = class {
  constructor(t, r, e, n, o, a, s, c) {
    (this.urlSubject = t),
      (this.paramsSubject = r),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = n),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(S((l) => l[kn])) ?? D(void 0)),
      (this.url = t),
      (this.params = r),
      (this.queryParams = e),
      (this.fragment = n),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(S((t) => Oi(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(S((t) => Oi(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function ts(i, t, r = "emptyOnly") {
  let e,
    { routeConfig: n } = i;
  return (
    t !== null &&
    (r === "always" ||
      n?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (e = {
          params: g(g({}, t.params), i.params),
          data: g(g({}, t.data), i.data),
          resolve: g(g(g(g({}, i.data), t.data), n?.data), i._resolvedData),
        })
      : (e = {
          params: g({}, i.params),
          data: g({}, i.data),
          resolve: g(g({}, i.data), i._resolvedData ?? {}),
        }),
    n && kl(n) && (e.resolve[kn] = n.title),
    e
  );
}
var Sn = class {
    get title() {
      return this.data?.[kn];
    }
    constructor(t, r, e, n, o, a, s, c, l) {
      (this.url = t),
        (this.params = r),
        (this.queryParams = e),
        (this.fragment = n),
        (this.data = o),
        (this.outlet = a),
        (this.component = s),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Oi(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Oi(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((e) => e.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${r}')`;
    }
  },
  Wo = class extends Ho {
    constructor(t, r) {
      super(r), (this.url = t), es(this, r);
    }
    toString() {
      return Rl(this._root);
    }
  };
function es(i, t) {
  (t.value._routerState = i), t.children.forEach((r) => es(i, r));
}
function Rl(i) {
  let t = i.children.length > 0 ? ` { ${i.children.map(Rl).join(", ")} } ` : "";
  return `${i.value}${t}`;
}
function Ia(i) {
  if (i.snapshot) {
    let t = i.snapshot,
      r = i._futureSnapshot;
    (i.snapshot = r),
      ne(t.queryParams, r.queryParams) ||
        i.queryParamsSubject.next(r.queryParams),
      t.fragment !== r.fragment && i.fragmentSubject.next(r.fragment),
      ne(t.params, r.params) || i.paramsSubject.next(r.params),
      Km(t.url, r.url) || i.urlSubject.next(r.url),
      ne(t.data, r.data) || i.dataSubject.next(r.data);
  } else
    (i.snapshot = i._futureSnapshot),
      i.dataSubject.next(i._futureSnapshot.data);
}
function Ga(i, t) {
  let r = ne(i.params, t.params) && eh(i.url, t.url),
    e = !i.parent != !t.parent;
  return r && !e && (!i.parent || Ga(i.parent, t.parent));
}
function kl(i) {
  return typeof i.title == "string" || i.title === null;
}
var is = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = F),
          (this.activateEvents = new ct()),
          (this.deactivateEvents = new ct()),
          (this.attachEvents = new ct()),
          (this.detachEvents = new ct()),
          (this.parentContexts = b(Tn)),
          (this.location = b(Qe)),
          (this.changeDetector = b(wt)),
          (this.environmentInjector = b(Ze)),
          (this.inputBinder = b(Xo, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: n, previousValue: o } = e.name;
          if (n) return;
          this.isTrackedInParentContexts(o) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new Y(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new Y(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new Y(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, n) {
        (this.activated = e),
          (this._activatedRoute = n),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, n) {
        if (this.isActivated) throw new Y(4013, !1);
        this._activatedRoute = e;
        let o = this.location,
          s = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          l = new Ya(e, c, o.injector);
        (this.activated = o.createComponent(s, {
          index: o.length,
          injector: l,
          environmentInjector: n ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Rt],
      }));
    let i = t;
    return i;
  })(),
  Ya = class i {
    __ngOutletInjector(t) {
      return new i(this.route, this.childContexts, t);
    }
    constructor(t, r, e) {
      (this.route = t), (this.childContexts = r), (this.parent = e);
    }
    get(t, r) {
      return t === Pi
        ? this.route
        : t === Tn
        ? this.childContexts
        : this.parent.get(t, r);
    }
  },
  Xo = new _(""),
  ul = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: n } = e,
          o = gi([n.queryParams, n.params, n.data])
            .pipe(
              It(
                ([a, s, c], l) => (
                  (c = g(g(g({}, a), s), c)),
                  l === 0 ? D(c) : Promise.resolve(c)
                )
              )
            )
            .subscribe((a) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = Mc(n.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: c } of s.inputs)
                e.activatedComponentRef.setInput(c, a[c]);
            });
        this.outletDataSubscriptions.set(e, o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function Ch(i, t, r) {
  let e = An(i, t._root, r ? r._root : void 0);
  return new $o(e, t);
}
function An(i, t, r) {
  if (r && i.shouldReuseRoute(t.value, r.value.snapshot)) {
    let e = r.value;
    e._futureSnapshot = t.value;
    let n = Dh(i, t, r);
    return new Ft(e, n);
  } else {
    if (i.shouldAttach(t.value)) {
      let o = i.retrieve(t.value);
      if (o !== null) {
        let a = o.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((s) => An(i, s))),
          a
        );
      }
    }
    let e = Eh(t.value),
      n = t.children.map((o) => An(i, o));
    return new Ft(e, n);
  }
}
function Dh(i, t, r) {
  return t.children.map((e) => {
    for (let n of r.children)
      if (i.shouldReuseRoute(e.value, n.value.snapshot)) return An(i, e, n);
    return An(i, e);
  });
}
function Eh(i) {
  return new Pi(
    new Et(i.url),
    new Et(i.params),
    new Et(i.queryParams),
    new Et(i.fragment),
    new Et(i.data),
    i.outlet,
    i.component,
    i
  );
}
var Ol = "ngNavigationCancelingError";
function Tl(i, t) {
  let { redirectTo: r, navigationBehaviorOptions: e } = Ti(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    n = Fl(!1, Pt.Redirect);
  return (n.url = r), (n.navigationBehaviorOptions = e), n;
}
function Fl(i, t) {
  let r = new Error(`NavigationCancelingError: ${i || ""}`);
  return (r[Ol] = !0), (r.cancellationCode = t), r;
}
function Ih(i) {
  return Pl(i) && Ti(i.url);
}
function Pl(i) {
  return !!i && i[Ol];
}
var Mh = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [J],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && P(0, "router-outlet");
      },
      dependencies: [is],
      encapsulation: 2,
    }));
  let i = t;
  return i;
})();
function Sh(i, t) {
  return (
    i.providers &&
      !i._injector &&
      (i._injector = ea(i.providers, t, `Route: ${i.path}`)),
    i._injector ?? t
  );
}
function ns(i) {
  let t = i.children && i.children.map(ns),
    r = t ? X(g({}, i), { children: t }) : g({}, i);
  return (
    !r.component &&
      !r.loadComponent &&
      (t || r.loadChildren) &&
      r.outlet &&
      r.outlet !== F &&
      (r.component = Mh),
    r
  );
}
function oe(i) {
  return i.outlet || F;
}
function Ah(i, t) {
  let r = i.filter((e) => oe(e) === t);
  return r.push(...i.filter((e) => oe(e) !== t)), r;
}
function Fn(i) {
  if (!i) return null;
  if (i.routeConfig?._injector) return i.routeConfig._injector;
  for (let t = i.parent; t; t = t.parent) {
    let r = t.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var Rh = (i, t, r, e) =>
    S(
      (n) => (
        new qa(t, n.targetRouterState, n.currentRouterState, r, e).activate(i),
        n
      )
    ),
  qa = class {
    constructor(t, r, e, n, o) {
      (this.routeReuseStrategy = t),
        (this.futureState = r),
        (this.currState = e),
        (this.forwardEvent = n),
        (this.inputBindingEnabled = o);
    }
    activate(t) {
      let r = this.futureState._root,
        e = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, e, t),
        Ia(this.futureState.root),
        this.activateChildRoutes(r, e, t);
    }
    deactivateChildRoutes(t, r, e) {
      let n = Ai(r);
      t.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, n[a], e), delete n[a];
      }),
        Object.values(n).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, e);
        });
    }
    deactivateRoutes(t, r, e) {
      let n = t.value,
        o = r ? r.value : null;
      if (n === o)
        if (n.component) {
          let a = e.getContext(n.outlet);
          a && this.deactivateChildRoutes(t, r, a.children);
        } else this.deactivateChildRoutes(t, r, e);
      else o && this.deactivateRouteAndItsChildren(r, e);
    }
    deactivateRouteAndItsChildren(t, r) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, r)
        : this.deactivateRouteAndOutlet(t, r);
    }
    detachAndStoreRouteSubtree(t, r) {
      let e = r.getContext(t.value.outlet),
        n = e && t.value.component ? e.children : r,
        o = Ai(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, n);
      if (e && e.outlet) {
        let a = e.outlet.detach(),
          s = e.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: a,
          route: t,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(t, r) {
      let e = r.getContext(t.value.outlet),
        n = e && t.value.component ? e.children : r,
        o = Ai(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, n);
      e &&
        (e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated()),
        (e.attachRef = null),
        (e.route = null));
    }
    activateChildRoutes(t, r, e) {
      let n = Ai(r);
      t.children.forEach((o) => {
        this.activateRoutes(o, n[o.value.outlet], e),
          this.forwardEvent(new Ua(o.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new za(t.value.snapshot));
    }
    activateRoutes(t, r, e) {
      let n = t.value,
        o = r ? r.value : null;
      if ((Ia(n), n === o))
        if (n.component) {
          let a = e.getOrCreateContext(n.outlet);
          this.activateChildRoutes(t, r, a.children);
        } else this.activateChildRoutes(t, r, e);
      else if (n.component) {
        let a = e.getOrCreateContext(n.outlet);
        if (this.routeReuseStrategy.shouldAttach(n.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(n.snapshot);
          this.routeReuseStrategy.store(n.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            (a.attachRef = s.componentRef),
            (a.route = s.route.value),
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            Ia(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else {
          let s = Fn(n.snapshot);
          (a.attachRef = null),
            (a.route = n),
            (a.injector = s),
            a.outlet && a.outlet.activateWith(n, a.injector),
            this.activateChildRoutes(t, null, a.children);
        }
      } else this.activateChildRoutes(t, null, e);
    }
  },
  Go = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  ki = class {
    constructor(t, r) {
      (this.component = t), (this.route = r);
    }
  };
function kh(i, t, r) {
  let e = i._root,
    n = t ? t._root : null;
  return vn(e, n, r, [e.value]);
}
function Oh(i) {
  let t = i.routeConfig ? i.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: i, guards: t };
}
function Li(i, t) {
  let r = Symbol(),
    e = t.get(i, r);
  return e === r ? (typeof i == "function" && !ac(i) ? i : t.get(i)) : e;
}
function vn(
  i,
  t,
  r,
  e,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = Ai(t);
  return (
    i.children.forEach((a) => {
      Th(a, o[a.value.outlet], r, e.concat([a.value]), n),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, s]) => wn(s, r.getContext(a), n)),
    n
  );
}
function Th(
  i,
  t,
  r,
  e,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = i.value,
    a = t ? t.value : null,
    s = r ? r.getContext(i.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let c = Fh(a, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? n.canActivateChecks.push(new Go(e))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? vn(i, t, s ? s.children : null, e, n) : vn(i, t, r, e, n),
      c &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        n.canDeactivateChecks.push(new ki(s.outlet.component, a));
  } else
    a && wn(t, s, n),
      n.canActivateChecks.push(new Go(e)),
      o.component
        ? vn(i, null, s ? s.children : null, e, n)
        : vn(i, null, r, e, n);
  return n;
}
function Fh(i, t, r) {
  if (typeof r == "function") return r(i, t);
  switch (r) {
    case "pathParamsChange":
      return !oi(i.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !oi(i.url, t.url) || !ne(i.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Ga(i, t) || !ne(i.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !Ga(i, t);
  }
}
function wn(i, t, r) {
  let e = Ai(i),
    n = i.value;
  Object.entries(e).forEach(([o, a]) => {
    n.component
      ? t
        ? wn(a, t.children.getContext(o), r)
        : wn(a, null, r)
      : wn(a, t, r);
  }),
    n.component
      ? t && t.outlet && t.outlet.isActivated
        ? r.canDeactivateChecks.push(new ki(t.outlet.component, n))
        : r.canDeactivateChecks.push(new ki(null, n))
      : r.canDeactivateChecks.push(new ki(null, n));
}
function Pn(i) {
  return typeof i == "function";
}
function Ph(i) {
  return typeof i == "boolean";
}
function Nh(i) {
  return i && Pn(i.canLoad);
}
function Lh(i) {
  return i && Pn(i.canActivate);
}
function jh(i) {
  return i && Pn(i.canActivateChild);
}
function Vh(i) {
  return i && Pn(i.canDeactivate);
}
function zh(i) {
  return i && Pn(i.canMatch);
}
function Nl(i) {
  return i instanceof ec || i?.name === "EmptyError";
}
var Fo = Symbol("INITIAL_VALUE");
function Ni() {
  return It((i) =>
    gi(i.map((t) => t.pipe(dt(1), ce(Fo)))).pipe(
      S((t) => {
        for (let r of t)
          if (r !== !0) {
            if (r === Fo) return Fo;
            if (r === !1 || r instanceof ke) return r;
          }
        return !0;
      }),
      rt((t) => t !== Fo),
      dt(1)
    )
  );
}
function Bh(i, t) {
  return At((r) => {
    let {
      targetSnapshot: e,
      currentSnapshot: n,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = r;
    return a.length === 0 && o.length === 0
      ? D(X(g({}, r), { guardsResult: !0 }))
      : Uh(a, e, n, i).pipe(
          At((s) => (s && Ph(s) ? Hh(e, o, i, t) : D(s))),
          S((s) => X(g({}, r), { guardsResult: s }))
        );
  });
}
function Uh(i, t, r, e) {
  return gt(i).pipe(
    At((n) => qh(n.component, n.route, r, t, e)),
    De((n) => n !== !0, !0)
  );
}
function Hh(i, t, r, e) {
  return gt(t).pipe(
    Ce((n) =>
      eo(
        Wh(n.route.parent, e),
        $h(n.route, e),
        Yh(i, n.path, r),
        Gh(i, n.route, r)
      )
    ),
    De((n) => n !== !0, !0)
  );
}
function $h(i, t) {
  return i !== null && t && t(new Ba(i)), D(!0);
}
function Wh(i, t) {
  return i !== null && t && t(new Va(i)), D(!0);
}
function Gh(i, t, r) {
  let e = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!e || e.length === 0) return D(!0);
  let n = e.map((o) =>
    qe(() => {
      let a = Fn(t) ?? r,
        s = Li(o, a),
        c = Lh(s) ? s.canActivate(t, i) : ie(a, () => s(t, i));
      return Fe(c).pipe(De());
    })
  );
  return D(n).pipe(Ni());
}
function Yh(i, t, r) {
  let e = t[t.length - 1],
    o = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => Oh(a))
      .filter((a) => a !== null)
      .map((a) =>
        qe(() => {
          let s = a.guards.map((c) => {
            let l = Fn(a.node) ?? r,
              d = Li(c, l),
              f = jh(d) ? d.canActivateChild(e, i) : ie(l, () => d(e, i));
            return Fe(f).pipe(De());
          });
          return D(s).pipe(Ni());
        })
      );
  return D(o).pipe(Ni());
}
function qh(i, t, r, e, n) {
  let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return D(!0);
  let a = o.map((s) => {
    let c = Fn(t) ?? n,
      l = Li(s, c),
      d = Vh(l) ? l.canDeactivate(i, t, r, e) : ie(c, () => l(i, t, r, e));
    return Fe(d).pipe(De());
  });
  return D(a).pipe(Ni());
}
function Zh(i, t, r, e) {
  let n = t.canLoad;
  if (n === void 0 || n.length === 0) return D(!0);
  let o = n.map((a) => {
    let s = Li(a, i),
      c = Nh(s) ? s.canLoad(t, r) : ie(i, () => s(t, r));
    return Fe(c);
  });
  return D(o).pipe(Ni(), Ll(e));
}
function Ll(i) {
  return tc(
    et((t) => {
      if (Ti(t)) throw Tl(i, t);
    }),
    S((t) => t === !0)
  );
}
function Xh(i, t, r, e) {
  let n = t.canMatch;
  if (!n || n.length === 0) return D(!0);
  let o = n.map((a) => {
    let s = Li(a, i),
      c = zh(s) ? s.canMatch(t, r) : ie(i, () => s(t, r));
    return Fe(c);
  });
  return D(o).pipe(Ni(), Ll(e));
}
var Rn = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  Yo = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function Si(i) {
  return ae(new Rn(i));
}
function Kh(i) {
  return ae(new Y(4e3, !1));
}
function Qh(i) {
  return ae(Fl(!1, Pt.GuardRejected));
}
var Za = class {
    constructor(t, r) {
      (this.urlSerializer = t), (this.urlTree = r);
    }
    lineralizeSegments(t, r) {
      let e = [],
        n = r.root;
      for (;;) {
        if (((e = e.concat(n.segments)), n.numberOfChildren === 0)) return D(e);
        if (n.numberOfChildren > 1 || !n.children[F]) return Kh(t.redirectTo);
        n = n.children[F];
      }
    }
    applyRedirectCommands(t, r, e) {
      let n = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        t,
        e
      );
      if (r.startsWith("/")) throw new Yo(n);
      return n;
    }
    applyRedirectCreateUrlTree(t, r, e, n) {
      let o = this.createSegmentGroup(t, r.root, e, n);
      return new ke(
        o,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment
      );
    }
    createQueryParams(t, r) {
      let e = {};
      return (
        Object.entries(t).forEach(([n, o]) => {
          if (typeof o == "string" && o.startsWith(":")) {
            let s = o.substring(1);
            e[n] = r[s];
          } else e[n] = o;
        }),
        e
      );
    }
    createSegmentGroup(t, r, e, n) {
      let o = this.createSegments(t, r.segments, e, n),
        a = {};
      return (
        Object.entries(r.children).forEach(([s, c]) => {
          a[s] = this.createSegmentGroup(t, c, e, n);
        }),
        new q(o, a)
      );
    }
    createSegments(t, r, e, n) {
      return r.map((o) =>
        o.path.startsWith(":")
          ? this.findPosParam(t, o, n)
          : this.findOrReturn(o, e)
      );
    }
    findPosParam(t, r, e) {
      let n = e[r.path.substring(1)];
      if (!n) throw new Y(4001, !1);
      return n;
    }
    findOrReturn(t, r) {
      let e = 0;
      for (let n of r) {
        if (n.path === t.path) return r.splice(e), n;
        e++;
      }
      return t;
    }
  },
  Xa = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Jh(i, t, r, e, n) {
  let o = os(i, t, r);
  return o.matched
    ? ((e = Sh(t, e)),
      Xh(e, t, r, n).pipe(S((a) => (a === !0 ? o : g({}, Xa)))))
    : D(o);
}
function os(i, t, r) {
  if (t.path === "**") return tf(r);
  if (t.path === "")
    return t.pathMatch === "full" && (i.hasChildren() || r.length > 0)
      ? g({}, Xa)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (t.matcher || Xm)(r, i, t);
  if (!n) return g({}, Xa);
  let o = {};
  Object.entries(n.posParams ?? {}).forEach(([s, c]) => {
    o[s] = c.path;
  });
  let a =
    n.consumed.length > 0
      ? g(g({}, o), n.consumed[n.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: n.consumed,
    remainingSegments: r.slice(n.consumed.length),
    parameters: a,
    positionalParamSegments: n.posParams ?? {},
  };
}
function tf(i) {
  return {
    matched: !0,
    parameters: i.length > 0 ? gl(i).parameters : {},
    consumedSegments: i,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ml(i, t, r, e) {
  return r.length > 0 && of(i, r, e)
    ? {
        segmentGroup: new q(t, nf(e, new q(r, i.children))),
        slicedSegments: [],
      }
    : r.length === 0 && rf(i, r, e)
    ? {
        segmentGroup: new q(i.segments, ef(i, r, e, i.children)),
        slicedSegments: r,
      }
    : { segmentGroup: new q(i.segments, i.children), slicedSegments: r };
}
function ef(i, t, r, e) {
  let n = {};
  for (let o of r)
    if (Ko(i, t, o) && !e[oe(o)]) {
      let a = new q([], {});
      n[oe(o)] = a;
    }
  return g(g({}, e), n);
}
function nf(i, t) {
  let r = {};
  r[F] = t;
  for (let e of i)
    if (e.path === "" && oe(e) !== F) {
      let n = new q([], {});
      r[oe(e)] = n;
    }
  return r;
}
function of(i, t, r) {
  return r.some((e) => Ko(i, t, e) && oe(e) !== F);
}
function rf(i, t, r) {
  return r.some((e) => Ko(i, t, e));
}
function Ko(i, t, r) {
  return (i.hasChildren() || t.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function af(i, t, r, e) {
  return oe(i) !== e && (e === F || !Ko(t, r, i)) ? !1 : os(t, i, r).matched;
}
function sf(i, t, r) {
  return t.length === 0 && !i.children[r];
}
var Ka = class {};
function cf(i, t, r, e, n, o, a = "emptyOnly") {
  return new Qa(i, t, r, e, n, a, o).recognize();
}
var lf = 31,
  Qa = class {
    constructor(t, r, e, n, o, a, s) {
      (this.injector = t),
        (this.configLoader = r),
        (this.rootComponentType = e),
        (this.config = n),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new Za(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new Y(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = ml(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        S((r) => {
          let e = new Sn(
              [],
              Object.freeze({}),
              Object.freeze(g({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              F,
              this.rootComponentType,
              null,
              {}
            ),
            n = new Ft(e, r),
            o = new Wo("", n),
            a = ph(e, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(a)),
            this.inheritParamsAndData(o._root, null),
            { state: o, tree: a }
          );
        })
      );
    }
    match(t) {
      return this.processSegmentGroup(this.injector, this.config, t, F).pipe(
        at((e) => {
          if (e instanceof Yo)
            return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
          throw e instanceof Rn ? this.noMatchError(e) : e;
        })
      );
    }
    inheritParamsAndData(t, r) {
      let e = t.value,
        n = ts(e, r, this.paramsInheritanceStrategy);
      (e.params = Object.freeze(n.params)),
        (e.data = Object.freeze(n.data)),
        t.children.forEach((o) => this.inheritParamsAndData(o, e));
    }
    processSegmentGroup(t, r, e, n) {
      return e.segments.length === 0 && e.hasChildren()
        ? this.processChildren(t, r, e)
        : this.processSegment(t, r, e, e.segments, n, !0).pipe(
            S((o) => (o instanceof Ft ? [o] : []))
          );
    }
    processChildren(t, r, e) {
      let n = [];
      for (let o of Object.keys(e.children))
        o === "primary" ? n.unshift(o) : n.push(o);
      return gt(n).pipe(
        Ce((o) => {
          let a = e.children[o],
            s = Ah(r, o);
          return this.processSegmentGroup(t, s, a, o);
        }),
        oc((o, a) => (o.push(...a), o)),
        Zr(null),
        nc(),
        At((o) => {
          if (o === null) return Si(e);
          let a = jl(o);
          return df(a), D(a);
        })
      );
    }
    processSegment(t, r, e, n, o, a) {
      return gt(r).pipe(
        Ce((s) =>
          this.processSegmentAgainstRoute(
            s._injector ?? t,
            r,
            s,
            e,
            n,
            o,
            a
          ).pipe(
            at((c) => {
              if (c instanceof Rn) return D(null);
              throw c;
            })
          )
        ),
        De((s) => !!s),
        at((s) => {
          if (Nl(s)) return sf(e, n, o) ? D(new Ka()) : Si(e);
          throw s;
        })
      );
    }
    processSegmentAgainstRoute(t, r, e, n, o, a, s) {
      return af(e, n, o, a)
        ? e.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, n, e, o, a)
          : this.allowRedirects && s
          ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, e, o, a)
          : Si(n)
        : Si(n);
    }
    expandSegmentAgainstRouteUsingRedirect(t, r, e, n, o, a) {
      let {
        matched: s,
        consumedSegments: c,
        positionalParamSegments: l,
        remainingSegments: d,
      } = os(r, n, o);
      if (!s) return Si(r);
      n.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > lf && (this.allowRedirects = !1));
      let f = this.applyRedirects.applyRedirectCommands(c, n.redirectTo, l);
      return this.applyRedirects
        .lineralizeSegments(n, f)
        .pipe(At((y) => this.processSegment(t, e, r, y.concat(d), a, !1)));
    }
    matchSegmentAgainstRoute(t, r, e, n, o) {
      let a = Jh(r, e, n, t, this.urlSerializer);
      return (
        e.path === "**" && (r.children = {}),
        a.pipe(
          It((s) =>
            s.matched
              ? ((t = e._injector ?? t),
                this.getChildConfig(t, e, n).pipe(
                  It(({ routes: c }) => {
                    let l = e._loadedInjector ?? t,
                      {
                        consumedSegments: d,
                        remainingSegments: f,
                        parameters: y,
                      } = s,
                      A = new Sn(
                        d,
                        y,
                        Object.freeze(g({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        mf(e),
                        oe(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        hf(e)
                      ),
                      { segmentGroup: H, slicedSegments: $ } = ml(r, d, f, c);
                    if ($.length === 0 && H.hasChildren())
                      return this.processChildren(l, c, H).pipe(
                        S((W) => (W === null ? null : new Ft(A, W)))
                      );
                    if (c.length === 0 && $.length === 0)
                      return D(new Ft(A, []));
                    let j = oe(e) === o;
                    return this.processSegment(l, c, H, $, j ? F : o, !0).pipe(
                      S((W) => new Ft(A, W instanceof Ft ? [W] : []))
                    );
                  })
                ))
              : Si(r)
          )
        )
      );
    }
    getChildConfig(t, r, e) {
      return r.children
        ? D({ routes: r.children, injector: t })
        : r.loadChildren
        ? r._loadedRoutes !== void 0
          ? D({ routes: r._loadedRoutes, injector: r._loadedInjector })
          : Zh(t, r, e, this.urlSerializer).pipe(
              At((n) =>
                n
                  ? this.configLoader.loadChildren(t, r).pipe(
                      et((o) => {
                        (r._loadedRoutes = o.routes),
                          (r._loadedInjector = o.injector);
                      })
                    )
                  : Qh(r)
              )
            )
        : D({ routes: [], injector: t });
    }
  };
function df(i) {
  i.sort((t, r) =>
    t.value.outlet === F
      ? -1
      : r.value.outlet === F
      ? 1
      : t.value.outlet.localeCompare(r.value.outlet)
  );
}
function uf(i) {
  let t = i.value.routeConfig;
  return t && t.path === "";
}
function jl(i) {
  let t = [],
    r = new Set();
  for (let e of i) {
    if (!uf(e)) {
      t.push(e);
      continue;
    }
    let n = t.find((o) => e.value.routeConfig === o.value.routeConfig);
    n !== void 0 ? (n.children.push(...e.children), r.add(n)) : t.push(e);
  }
  for (let e of r) {
    let n = jl(e.children);
    t.push(new Ft(e.value, n));
  }
  return t.filter((e) => !r.has(e));
}
function mf(i) {
  return i.data || {};
}
function hf(i) {
  return i.resolve || {};
}
function ff(i, t, r, e, n, o) {
  return At((a) =>
    cf(i, t, r, e, a.extractedUrl, n, o).pipe(
      S(({ state: s, tree: c }) =>
        X(g({}, a), { targetSnapshot: s, urlAfterRedirects: c })
      )
    )
  );
}
function pf(i, t) {
  return At((r) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: n },
    } = r;
    if (!n.length) return D(r);
    let o = new Set(n.map((c) => c.route)),
      a = new Set();
    for (let c of o) if (!a.has(c)) for (let l of Vl(c)) a.add(l);
    let s = 0;
    return gt(a).pipe(
      Ce((c) =>
        o.has(c)
          ? gf(c, e, i, t)
          : ((c.data = ts(c, c.parent, i).resolve), D(void 0))
      ),
      et(() => s++),
      Kr(1),
      At((c) => (s === a.size ? D(r) : ee))
    );
  });
}
function Vl(i) {
  let t = i.children.map((r) => Vl(r)).flat();
  return [i, ...t];
}
function gf(i, t, r, e) {
  let n = i.routeConfig,
    o = i._resolve;
  return (
    n?.title !== void 0 && !kl(n) && (o[kn] = n.title),
    bf(o, i, t, e).pipe(
      S(
        (a) => (
          (i._resolvedData = a), (i.data = ts(i, i.parent, r).resolve), null
        )
      )
    )
  );
}
function bf(i, t, r, e) {
  let n = Aa(i);
  if (n.length === 0) return D({});
  let o = {};
  return gt(n).pipe(
    At((a) =>
      vf(i[a], t, r, e).pipe(
        De(),
        et((s) => {
          o[a] = s;
        })
      )
    ),
    Kr(1),
    ic(o),
    at((a) => (Nl(a) ? ee : ae(a)))
  );
}
function vf(i, t, r, e) {
  let n = Fn(t) ?? e,
    o = Li(i, n),
    a = o.resolve ? o.resolve(t, r) : ie(n, () => o(t, r));
  return Fe(a);
}
function Ma(i) {
  return It((t) => {
    let r = i(t);
    return r ? gt(r).pipe(S(() => t)) : D(t);
  });
}
var zl = (() => {
    let t = class t {
      buildTitle(e) {
        let n,
          o = e.root;
        for (; o !== void 0; )
          (n = this.getResolvedTitleForRoute(o) ?? n),
            (o = o.children.find((a) => a.outlet === F));
        return n;
      }
      getResolvedTitleForRoute(e) {
        return e.data[kn];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => b(_f), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  _f = (() => {
    let t = class t extends zl {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(al));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Nn = new _("", { providedIn: "root", factory: () => ({}) }),
  qo = new _(""),
  rs = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = b(bo));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return D(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = Fe(e.loadComponent()).pipe(
            S(Bl),
            et((a) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = a);
            }),
            se(() => {
              this.componentLoaders.delete(e);
            })
          ),
          o = new Hr(n, () => new k()).pipe(Ur());
        return this.componentLoaders.set(e, o), o;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return D({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let a = yf(n, this.compiler, e, this.onLoadEndListener).pipe(
            se(() => {
              this.childrenLoaders.delete(n);
            })
          ),
          s = new Hr(a, () => new k()).pipe(Ur());
        return this.childrenLoaders.set(n, s), s;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function yf(i, t, r, e) {
  return Fe(i.loadChildren()).pipe(
    S(Bl),
    At((n) =>
      n instanceof vc || Array.isArray(n) ? D(n) : gt(t.compileModuleAsync(n))
    ),
    S((n) => {
      e && e(i);
      let o,
        a,
        s = !1;
      return (
        Array.isArray(n)
          ? ((a = n), (s = !0))
          : ((o = n.create(r).injector),
            (a = o.get(qo, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(ns), injector: o }
      );
    })
  );
}
function xf(i) {
  return i && typeof i == "object" && "default" in i;
}
function Bl(i) {
  return xf(i) ? i.default : i;
}
var as = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => b(wf), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  wf = (() => {
    let t = class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, n) {
        return e;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Ul = new _(""),
  Hl = new _("");
function Cf(i, t, r) {
  let e = i.get(Hl),
    n = i.get(E);
  return i.get(w).runOutsideAngular(() => {
    if (!n.startViewTransition || e.skipNextTransition)
      return (e.skipNextTransition = !1), Promise.resolve();
    let o,
      a = new Promise((l) => {
        o = l;
      }),
      s = n.startViewTransition(() => (o(), Df(i))),
      { onViewTransitionCreated: c } = e;
    return c && ie(i, () => c({ transition: s, from: t, to: r })), a;
  });
}
function Df(i) {
  return new Promise((t) => {
    bc(t, { injector: i });
  });
}
var ss = (() => {
  let t = class t {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new k()),
        (this.transitionAbortSubject = new k()),
        (this.configLoader = b(rs)),
        (this.environmentInjector = b(Ze)),
        (this.urlSerializer = b(On)),
        (this.rootContexts = b(Tn)),
        (this.location = b(he)),
        (this.inputBindingEnabled = b(Xo, { optional: !0 }) !== null),
        (this.titleStrategy = b(zl)),
        (this.options = b(Nn, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = b(as)),
        (this.createViewTransition = b(Ul, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => D(void 0)),
        (this.rootComponentType = null);
      let e = (o) => this.events.next(new La(o)),
        n = (o) => this.events.next(new ja(o));
      (this.configLoader.onLoadEndListener = n),
        (this.configLoader.onLoadStartListener = e);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(e) {
      let n = ++this.navigationId;
      this.transitions?.next(X(g(g({}, this.transitions.value), e), { id: n }));
    }
    setupNavigations(e, n, o) {
      return (
        (this.transitions = new Et({
          id: 0,
          currentUrlTree: n,
          currentRawUrl: n,
          extractedUrl: this.urlHandlingStrategy.extract(n),
          urlAfterRedirects: this.urlHandlingStrategy.extract(n),
          rawUrl: n,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: xn,
          restoredState: null,
          currentSnapshot: o.snapshot,
          targetSnapshot: null,
          currentRouterState: o,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          rt((a) => a.id !== 0),
          S((a) =>
            X(g({}, a), {
              extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
            })
          ),
          It((a) => {
            let s = !1,
              c = !1;
            return D(a).pipe(
              It((l) => {
                if (this.navigationId > a.id)
                  return (
                    this.cancelNavigationTransition(
                      a,
                      "",
                      Pt.SupersededByNewNavigation
                    ),
                    ee
                  );
                (this.currentTransition = a),
                  (this.currentNavigation = {
                    id: l.id,
                    initialUrl: l.rawUrl,
                    extractedUrl: l.extractedUrl,
                    trigger: l.source,
                    extras: l.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? X(g({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let d =
                    !e.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  f = l.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                if (!d && f !== "reload") {
                  let y = "";
                  return (
                    this.events.next(
                      new Te(
                        l.id,
                        this.urlSerializer.serialize(l.rawUrl),
                        y,
                        zo.IgnoredSameUrlNavigation
                      )
                    ),
                    l.resolve(null),
                    ee
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                  return D(l).pipe(
                    It((y) => {
                      let A = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new Fi(
                            y.id,
                            this.urlSerializer.serialize(y.extractedUrl),
                            y.source,
                            y.restoredState
                          )
                        ),
                        A !== this.transitions?.getValue()
                          ? ee
                          : Promise.resolve(y)
                      );
                    }),
                    ff(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      e.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy
                    ),
                    et((y) => {
                      (a.targetSnapshot = y.targetSnapshot),
                        (a.urlAfterRedirects = y.urlAfterRedirects),
                        (this.currentNavigation = X(
                          g({}, this.currentNavigation),
                          { finalUrl: y.urlAfterRedirects }
                        ));
                      let A = new Bo(
                        y.id,
                        this.urlSerializer.serialize(y.extractedUrl),
                        this.urlSerializer.serialize(y.urlAfterRedirects),
                        y.targetSnapshot
                      );
                      this.events.next(A);
                    })
                  );
                if (
                  d &&
                  this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                ) {
                  let {
                      id: y,
                      extractedUrl: A,
                      source: H,
                      restoredState: $,
                      extras: j,
                    } = l,
                    W = new Fi(y, this.urlSerializer.serialize(A), H, $);
                  this.events.next(W);
                  let Xt = Al(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = a =
                      X(g({}, l), {
                        targetSnapshot: Xt,
                        urlAfterRedirects: A,
                        extras: X(g({}, j), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = A),
                    D(a)
                  );
                } else {
                  let y = "";
                  return (
                    this.events.next(
                      new Te(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        y,
                        zo.IgnoredByUrlHandlingStrategy
                      )
                    ),
                    l.resolve(null),
                    ee
                  );
                }
              }),
              et((l) => {
                let d = new Ta(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot
                );
                this.events.next(d);
              }),
              S(
                (l) => (
                  (this.currentTransition = a =
                    X(g({}, l), {
                      guards: kh(
                        l.targetSnapshot,
                        l.currentSnapshot,
                        this.rootContexts
                      ),
                    })),
                  a
                )
              ),
              Bh(this.environmentInjector, (l) => this.events.next(l)),
              et((l) => {
                if (((a.guardsResult = l.guardsResult), Ti(l.guardsResult)))
                  throw Tl(this.urlSerializer, l.guardsResult);
                let d = new Fa(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot,
                  !!l.guardsResult
                );
                this.events.next(d);
              }),
              rt((l) =>
                l.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(l, "", Pt.GuardRejected),
                    !1)
              ),
              Ma((l) => {
                if (l.guards.canActivateChecks.length)
                  return D(l).pipe(
                    et((d) => {
                      let f = new Pa(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot
                      );
                      this.events.next(f);
                    }),
                    It((d) => {
                      let f = !1;
                      return D(d).pipe(
                        pf(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector
                        ),
                        et({
                          next: () => (f = !0),
                          complete: () => {
                            f ||
                              this.cancelNavigationTransition(
                                d,
                                "",
                                Pt.NoDataFromResolver
                              );
                          },
                        })
                      );
                    }),
                    et((d) => {
                      let f = new Na(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot
                      );
                      this.events.next(f);
                    })
                  );
              }),
              Ma((l) => {
                let d = (f) => {
                  let y = [];
                  f.routeConfig?.loadComponent &&
                    !f.routeConfig._loadedComponent &&
                    y.push(
                      this.configLoader.loadComponent(f.routeConfig).pipe(
                        et((A) => {
                          f.component = A;
                        }),
                        S(() => {})
                      )
                    );
                  for (let A of f.children) y.push(...d(A));
                  return y;
                };
                return gi(d(l.targetSnapshot.root)).pipe(Zr(null), dt(1));
              }),
              Ma(() => this.afterPreactivation()),
              It(() => {
                let { currentSnapshot: l, targetSnapshot: d } = a,
                  f = this.createViewTransition?.(
                    this.environmentInjector,
                    l.root,
                    d.root
                  );
                return f ? gt(f).pipe(S(() => a)) : D(a);
              }),
              S((l) => {
                let d = Ch(
                  e.routeReuseStrategy,
                  l.targetSnapshot,
                  l.currentRouterState
                );
                return (
                  (this.currentTransition = a =
                    X(g({}, l), { targetRouterState: d })),
                  (this.currentNavigation.targetRouterState = d),
                  a
                );
              }),
              et(() => {
                this.events.next(new In());
              }),
              Rh(
                this.rootContexts,
                e.routeReuseStrategy,
                (l) => this.events.next(l),
                this.inputBindingEnabled
              ),
              dt(1),
              et({
                next: (l) => {
                  (s = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new ge(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects)
                      )
                    ),
                    this.titleStrategy?.updateTitle(
                      l.targetRouterState.snapshot
                    ),
                    l.resolve(!0);
                },
                complete: () => {
                  s = !0;
                },
              }),
              bt(
                this.transitionAbortSubject.pipe(
                  et((l) => {
                    throw l;
                  })
                )
              ),
              se(() => {
                !s &&
                  !c &&
                  this.cancelNavigationTransition(
                    a,
                    "",
                    Pt.SupersededByNewNavigation
                  ),
                  this.currentTransition?.id === a.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              at((l) => {
                if (((c = !0), Pl(l)))
                  this.events.next(
                    new Oe(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      l.message,
                      l.cancellationCode
                    )
                  ),
                    Ih(l) ? this.events.next(new Mn(l.url)) : a.resolve(!1);
                else {
                  this.events.next(
                    new En(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      l,
                      a.targetSnapshot ?? void 0
                    )
                  );
                  try {
                    a.resolve(e.errorHandler(l));
                  } catch (d) {
                    this.options.resolveNavigationPromiseOnError
                      ? a.resolve(!1)
                      : a.reject(d);
                  }
                }
                return ee;
              })
            );
          })
        )
      );
    }
    cancelNavigationTransition(e, n, o) {
      let a = new Oe(e.id, this.urlSerializer.serialize(e.extractedUrl), n, o);
      this.events.next(a), e.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function Ef(i) {
  return i !== xn;
}
var If = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => b(Mf), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Ja = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, r) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, r) {
      return t.routeConfig === r.routeConfig;
    }
  },
  Mf = (() => {
    let t = class t extends Ja {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = Ie(t)))(o || t);
      };
    })()),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  $l = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => b(Sf), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Sf = (() => {
    let t = class t extends $l {
      constructor() {
        super(...arguments),
          (this.location = b(he)),
          (this.urlSerializer = b(On)),
          (this.options = b(Nn, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = b(as)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new ke()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Al(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((n) => {
          n.type === "popstate" && e(n.url, n.state);
        });
      }
      handleRouterEvent(e, n) {
        if (e instanceof Fi) this.stateMemento = this.createStateMemento();
        else if (e instanceof Te) this.rawUrlTree = n.initialUrl;
        else if (e instanceof Bo) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let o = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(o, n);
          }
        } else
          e instanceof In
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (n.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, n)))
            : e instanceof Oe &&
              (e.code === Pt.GuardRejected || e.code === Pt.NoDataFromResolver)
            ? this.restoreHistory(n)
            : e instanceof En
            ? this.restoreHistory(n, !0)
            : e instanceof ge &&
              ((this.lastSuccessfulId = e.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, n) {
        let o = this.urlSerializer.serialize(e);
        if (this.location.isCurrentPathEqualTo(o) || n.extras.replaceUrl) {
          let a = this.browserPageId,
            s = g(g({}, n.extras.state), this.generateNgRouterState(n.id, a));
          this.location.replaceState(o, "", s);
        } else {
          let a = g(
            g({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1)
          );
          this.location.go(o, "", a);
        }
      }
      restoreHistory(e, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let o = this.browserPageId,
            a = this.currentPageId - o;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === e.finalUrl &&
              a === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(e, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: n }
          : { navigationId: e };
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = Ie(t)))(o || t);
      };
    })()),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  _n = (function (i) {
    return (
      (i[(i.COMPLETE = 0)] = "COMPLETE"),
      (i[(i.FAILED = 1)] = "FAILED"),
      (i[(i.REDIRECTING = 2)] = "REDIRECTING"),
      i
    );
  })(_n || {});
function Wl(i, t) {
  i.events
    .pipe(
      rt(
        (r) =>
          r instanceof ge ||
          r instanceof Oe ||
          r instanceof En ||
          r instanceof Te
      ),
      S((r) =>
        r instanceof ge || r instanceof Te
          ? _n.COMPLETE
          : (
              r instanceof Oe
                ? r.code === Pt.Redirect ||
                  r.code === Pt.SupersededByNewNavigation
                : !1
            )
          ? _n.REDIRECTING
          : _n.FAILED
      ),
      rt((r) => r !== _n.REDIRECTING),
      dt(1)
    )
    .subscribe(() => {
      t();
    });
}
function Af(i) {
  throw i;
}
var Rf = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  kf = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Nt = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = b(ho)),
          (this.stateManager = b($l)),
          (this.options = b(Nn, { optional: !0 }) || {}),
          (this.pendingTasks = b(cn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = b(ss)),
          (this.urlSerializer = b(On)),
          (this.location = b(he)),
          (this.urlHandlingStrategy = b(as)),
          (this._events = new k()),
          (this.errorHandler = this.options.errorHandler || Af),
          (this.navigated = !1),
          (this.routeReuseStrategy = b(If)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = b(qo, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!b(Xo, { optional: !0 })),
          (this.eventsSubscription = new Kt()),
          (this.isNgZoneEnabled = b(w) instanceof w && w.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((n) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (o !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, a),
                n instanceof Oe &&
                  n.code !== Pt.Redirect &&
                  n.code !== Pt.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof ge) this.navigated = !0;
              else if (n instanceof Mn) {
                let s = this.urlHandlingStrategy.merge(n.url, o.currentRawUrl),
                  c = {
                    info: o.extras.info,
                    skipLocationChange: o.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || Ef(o.source),
                  };
                this.scheduleNavigation(s, xn, null, c, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            Tf(n) && this._events.next(n);
          } catch (o) {
            this.navigationTransitions.transitionAbortSubject.next(o);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              xn,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", n);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(e, n, o) {
        let a = { replaceUrl: !0 },
          s = o?.navigationId ? o : null;
        if (o) {
          let l = g({}, o);
          delete l.navigationId,
            delete l.ɵrouterPageId,
            Object.keys(l).length !== 0 && (a.state = l);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, n, s, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(ns)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, n = {}) {
        let {
            relativeTo: o,
            queryParams: a,
            fragment: s,
            queryParamsHandling: c,
            preserveFragment: l,
          } = n,
          d = l ? this.currentUrlTree.fragment : s,
          f = null;
        switch (c) {
          case "merge":
            f = g(g({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            f = this.currentUrlTree.queryParams;
            break;
          default:
            f = a || null;
        }
        f !== null && (f = this.removeEmptyProps(f));
        let y;
        try {
          let A = o ? o.snapshot : this.routerState.snapshot.root;
          y = El(A);
        } catch {
          (typeof e[0] != "string" || !e[0].startsWith("/")) && (e = []),
            (y = this.currentUrlTree.root);
        }
        return Il(y, e, f, d ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let o = Ti(e) ? e : this.parseUrl(e),
          a = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(a, xn, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return Of(e), this.navigateByUrl(this.createUrlTree(e, n), n);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, n) {
        let o;
        if (
          (n === !0 ? (o = g({}, Rf)) : n === !1 ? (o = g({}, kf)) : (o = n),
          Ti(e))
        )
          return sl(this.currentUrlTree, e, o);
        let a = this.parseUrl(e);
        return sl(this.currentUrlTree, a, o);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (n, [o, a]) => (a != null && (n[o] = a), n),
          {}
        );
      }
      scheduleNavigation(e, n, o, a, s) {
        if (this.disposed) return Promise.resolve(!1);
        let c, l, d;
        s
          ? ((c = s.resolve), (l = s.reject), (d = s.promise))
          : (d = new Promise((y, A) => {
              (c = y), (l = A);
            }));
        let f = this.pendingTasks.add();
        return (
          Wl(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(f));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: a,
            resolve: c,
            reject: l,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((y) => Promise.reject(y))
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Of(i) {
  for (let t = 0; t < i.length; t++) if (i[t] == null) throw new Y(4008, !1);
}
function Tf(i) {
  return !(i instanceof In) && !(i instanceof Mn);
}
var Zo = class {};
var Ff = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this.router = e),
          (this.injector = o),
          (this.preloadingStrategy = a),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            rt((e) => e instanceof ge),
            Ce(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, n) {
        let o = [];
        for (let a of n) {
          a.providers &&
            !a._injector &&
            (a._injector = ea(a.providers, e, `Route: ${a.path}`));
          let s = a._injector ?? e,
            c = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            o.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              o.push(this.processRoutes(c, a.children ?? a._loadedRoutes));
        }
        return gt(o).pipe(Wr());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let o;
          n.loadChildren && n.canLoad === void 0
            ? (o = this.loader.loadChildren(e, n))
            : (o = D(null));
          let a = o.pipe(
            At((s) =>
              s === null
                ? D(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes))
            )
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return gt([a, s]).pipe(Wr());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Nt), m(bo), m(Ze), m(Zo), m(rs));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Gl = new _(""),
  Pf = (() => {
    let t = class t {
      constructor(e, n, o, a, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = n),
          (this.viewportScroller = o),
          (this.zone = a),
          (this.options = s),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof Fi
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof ge
            ? ((this.lastId = e.id),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.urlAfterRedirects).fragment
              ))
            : e instanceof Te &&
              e.code === zo.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof Uo &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(e.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Uo(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  n
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (n) {
      Ke();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function Nf(i) {
  return i.routerState.root;
}
function Ln(i, t) {
  return { ɵkind: i, ɵproviders: t };
}
function Lf() {
  let i = b(st);
  return (t) => {
    let r = i.get(ti);
    if (t !== r.components[0]) return;
    let e = i.get(Nt),
      n = i.get(Yl);
    i.get(cs) === 1 && e.initialNavigation(),
      i.get(ql, null, Jr.Optional)?.setUpPreloading(),
      i.get(Gl, null, Jr.Optional)?.init(),
      e.resetRootComponentType(r.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var Yl = new _("", { factory: () => new k() }),
  cs = new _("", { providedIn: "root", factory: () => 1 });
function jf() {
  return Ln(2, [
    { provide: cs, useValue: 0 },
    {
      provide: ra,
      multi: !0,
      deps: [st],
      useFactory: (t) => {
        let r = t.get(Rc, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((e) => {
                let n = t.get(Nt),
                  o = t.get(Yl);
                Wl(n, () => {
                  e(!0);
                }),
                  (t.get(ss).afterPreactivation = () => (
                    e(!0), o.closed ? D(void 0) : o
                  )),
                  n.initialNavigation();
              })
          );
      },
    },
  ]);
}
function Vf() {
  return Ln(3, [
    {
      provide: ra,
      multi: !0,
      useFactory: () => {
        let t = b(Nt);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: cs, useValue: 2 },
  ]);
}
var ql = new _("");
function zf(i) {
  return Ln(0, [
    { provide: ql, useExisting: Ff },
    { provide: Zo, useExisting: i },
  ]);
}
function Bf() {
  return Ln(8, [ul, { provide: Xo, useExisting: ul }]);
}
function Uf(i) {
  let t = [
    { provide: Ul, useValue: Cf },
    {
      provide: Hl,
      useValue: g({ skipNextTransition: !!i?.skipInitialTransition }, i),
    },
  ];
  return Ln(9, t);
}
var hl = new _("ROUTER_FORROOT_GUARD"),
  Hf = [
    he,
    { provide: On, useClass: Cn },
    Nt,
    Tn,
    { provide: Pi, useFactory: Nf, deps: [Nt] },
    rs,
    [],
  ],
  jn = (() => {
    let t = class t {
      constructor(e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            Hf,
            [],
            { provide: qo, multi: !0, useValue: e },
            { provide: hl, useFactory: Yf, deps: [[Nt, new oo(), new ta()]] },
            { provide: Nn, useValue: n || {} },
            n?.useHash ? Wf() : Gf(),
            $f(),
            n?.preloadingStrategy ? zf(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? qf(n) : [],
            n?.bindToComponentInputs ? Bf().ɵproviders : [],
            n?.enableViewTransitions ? Uf().ɵproviders : [],
            Zf(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: qo, multi: !0, useValue: e }],
        };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(hl, 8));
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({}));
    let i = t;
    return i;
  })();
function $f() {
  return {
    provide: Gl,
    useFactory: () => {
      let i = b(Nc),
        t = b(w),
        r = b(Nn),
        e = b(ss),
        n = b(On);
      return (
        r.scrollOffset && i.setOffset(r.scrollOffset), new Pf(n, e, i, t, r)
      );
    },
  };
}
function Wf() {
  return { provide: sa, useClass: Oc };
}
function Gf() {
  return { provide: sa, useClass: kc };
}
function Yf(i) {
  return "guarded";
}
function qf(i) {
  return [
    i.initialNavigation === "disabled" ? Vf().ɵproviders : [],
    i.initialNavigation === "enabledBlocking" ? jf().ɵproviders : [],
  ];
}
var fl = new _("");
function Zf() {
  return [
    { provide: fl, useFactory: Lf },
    { provide: aa, multi: !0, useExisting: fl },
  ];
}
var Xf = [],
  Zl = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [jn.forRoot(Xf), jn] }));
    let i = t;
    return i;
  })();
var Xl = (() => {
  let t = class t {
    constructor() {
      this.title = "MyFlix-Angular-Client";
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && P(0, "router-outlet");
      },
      dependencies: [is],
    }));
  let i = t;
  return i;
})();
function ri(i) {
  return i != null && `${i}` != "false";
}
function ji(i, t = 0) {
  return Kf(i) ? Number(i) : t;
}
function Kf(i) {
  return !isNaN(parseFloat(i)) && !isNaN(Number(i));
}
function Vi(i) {
  return Array.isArray(i) ? i : [i];
}
function lt(i) {
  return i == null ? "" : typeof i == "string" ? i : `${i}px`;
}
function $t(i) {
  return i instanceof T ? i.nativeElement : i;
}
var ds;
try {
  ds = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  ds = !1;
}
var z = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? Pc(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || ds) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(le));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var zi,
  Kl = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function us() {
  if (zi) return zi;
  if (typeof document != "object" || !document) return (zi = new Set(Kl)), zi;
  let i = document.createElement("input");
  return (
    (zi = new Set(Kl.filter((t) => (i.setAttribute("type", t), i.type === t)))),
    zi
  );
}
var Vn;
function Qf() {
  if (Vn == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Vn = !0) })
      );
    } finally {
      Vn = Vn || !1;
    }
  return Vn;
}
function Pe(i) {
  return Qf() ? i : !!i.capture;
}
var ai;
function Ql() {
  if (ai == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ai = !1), ai;
    if ("scrollBehavior" in document.documentElement.style) ai = !0;
    else {
      let i = Element.prototype.scrollTo;
      i ? (ai = !/\{\s*\[native code\]\s*\}/.test(i.toString())) : (ai = !1);
    }
  }
  return ai;
}
var ls;
function Jf() {
  if (ls == null) {
    let i = typeof document < "u" ? document.head : null;
    ls = !!(i && (i.createShadowRoot || i.attachShadow));
  }
  return ls;
}
function Jl(i) {
  if (Jf()) {
    let t = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function zn() {
  let i = typeof document < "u" && document ? document.activeElement : null;
  for (; i && i.shadowRoot; ) {
    let t = i.shadowRoot.activeElement;
    if (t === i) break;
    i = t;
  }
  return i;
}
function Qt(i) {
  return i.composedPath ? i.composedPath()[0] : i.target;
}
function Bn() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
var td = Pe({ passive: !0 }),
  ed = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._ngZone = n),
          (this._monitoredElements = new Map());
      }
      monitor(e) {
        if (!this._platform.isBrowser) return ee;
        let n = $t(e),
          o = this._monitoredElements.get(n);
        if (o) return o.subject;
        let a = new k(),
          s = "cdk-text-field-autofilled",
          c = (l) => {
            l.animationName === "cdk-text-field-autofill-start" &&
            !n.classList.contains(s)
              ? (n.classList.add(s),
                this._ngZone.run(() =>
                  a.next({ target: l.target, isAutofilled: !0 })
                ))
              : l.animationName === "cdk-text-field-autofill-end" &&
                n.classList.contains(s) &&
                (n.classList.remove(s),
                this._ngZone.run(() =>
                  a.next({ target: l.target, isAutofilled: !1 })
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("animationstart", c, td),
              n.classList.add("cdk-text-field-autofill-monitored");
          }),
          this._monitoredElements.set(n, {
            subject: a,
            unlisten: () => {
              n.removeEventListener("animationstart", c, td);
            },
          }),
          a
        );
      }
      stopMonitoring(e) {
        let n = $t(e),
          o = this._monitoredElements.get(n);
        o &&
          (o.unlisten(),
          o.subject.complete(),
          n.classList.remove("cdk-text-field-autofill-monitored"),
          n.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(n));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((e, n) => this.stopMonitoring(n));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(z), m(w));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var id = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({}));
  let i = t;
  return i;
})();
var dd = (() => {
    let t = class t {
      constructor(e, n) {
        (this._renderer = e),
          (this._elementRef = n),
          (this.onChange = (o) => {}),
          (this.onTouched = () => {});
      }
      setProperty(e, n) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, n);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(co), u(T));
    }),
      (t.ɵdir = R({ type: t }));
    let i = t;
    return i;
  })(),
  ep = (() => {
    let t = class t extends dd {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = Ie(t)))(o || t);
      };
    })()),
      (t.ɵdir = R({ type: t, features: [nt] }));
    let i = t;
    return i;
  })(),
  ud = new _("");
var ip = { provide: ud, useExisting: vi(() => je), multi: !0 };
function np() {
  let i = ei() ? ei().getUserAgent() : "";
  return /android (\d+)/.test(i.toLowerCase());
}
var op = new _(""),
  je = (() => {
    let t = class t extends dd {
      constructor(e, n, o) {
        super(e, n),
          (this._compositionMode = o),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !np());
      }
      writeValue(e) {
        let n = e ?? "";
        this.setProperty("value", n);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(co), u(T), u(op, 8));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            V("input", function (s) {
              return o._handleInput(s.target.value);
            })("blur", function () {
              return o.onTouched();
            })("compositionstart", function () {
              return o._compositionStart();
            })("compositionend", function (s) {
              return o._compositionEnd(s.target.value);
            });
        },
        features: [_t([ip]), nt],
      }));
    let i = t;
    return i;
  })();
function Ne(i) {
  return (
    i == null || ((typeof i == "string" || Array.isArray(i)) && i.length === 0)
  );
}
function md(i) {
  return i != null && typeof i.length == "number";
}
var dr = new _(""),
  hs = new _(""),
  rp =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  tr = class {
    static min(t) {
      return ap(t);
    }
    static max(t) {
      return sp(t);
    }
    static required(t) {
      return hd(t);
    }
    static requiredTrue(t) {
      return cp(t);
    }
    static email(t) {
      return lp(t);
    }
    static minLength(t) {
      return dp(t);
    }
    static maxLength(t) {
      return up(t);
    }
    static pattern(t) {
      return mp(t);
    }
    static nullValidator(t) {
      return er(t);
    }
    static compose(t) {
      return _d(t);
    }
    static composeAsync(t) {
      return yd(t);
    }
  };
function ap(i) {
  return (t) => {
    if (Ne(t.value) || Ne(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r < i ? { min: { min: i, actual: t.value } } : null;
  };
}
function sp(i) {
  return (t) => {
    if (Ne(t.value) || Ne(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r > i ? { max: { max: i, actual: t.value } } : null;
  };
}
function hd(i) {
  return Ne(i.value) ? { required: !0 } : null;
}
function cp(i) {
  return i.value === !0 ? null : { required: !0 };
}
function lp(i) {
  return Ne(i.value) || rp.test(i.value) ? null : { email: !0 };
}
function dp(i) {
  return (t) =>
    Ne(t.value) || !md(t.value)
      ? null
      : t.value.length < i
      ? { minlength: { requiredLength: i, actualLength: t.value.length } }
      : null;
}
function up(i) {
  return (t) =>
    md(t.value) && t.value.length > i
      ? { maxlength: { requiredLength: i, actualLength: t.value.length } }
      : null;
}
function mp(i) {
  if (!i) return er;
  let t, r;
  return (
    typeof i == "string"
      ? ((r = ""),
        i.charAt(0) !== "^" && (r += "^"),
        (r += i),
        i.charAt(i.length - 1) !== "$" && (r += "$"),
        (t = new RegExp(r)))
      : ((r = i.toString()), (t = i)),
    (e) => {
      if (Ne(e.value)) return null;
      let n = e.value;
      return t.test(n)
        ? null
        : { pattern: { requiredPattern: r, actualValue: n } };
    }
  );
}
function er(i) {
  return null;
}
function fd(i) {
  return i != null;
}
function pd(i) {
  return go(i) ? gt(i) : i;
}
function gd(i) {
  let t = {};
  return (
    i.forEach((r) => {
      t = r != null ? g(g({}, t), r) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function bd(i, t) {
  return t.map((r) => r(i));
}
function hp(i) {
  return !i.validate;
}
function vd(i) {
  return i.map((t) => (hp(t) ? t : (r) => t.validate(r)));
}
function _d(i) {
  if (!i) return null;
  let t = i.filter(fd);
  return t.length == 0
    ? null
    : function (r) {
        return gd(bd(r, t));
      };
}
function fs(i) {
  return i != null ? _d(vd(i)) : null;
}
function yd(i) {
  if (!i) return null;
  let t = i.filter(fd);
  return t.length == 0
    ? null
    : function (r) {
        let e = bd(r, t).map(pd);
        return io(e).pipe(S(gd));
      };
}
function ps(i) {
  return i != null ? yd(vd(i)) : null;
}
function nd(i, t) {
  return i === null ? [t] : Array.isArray(i) ? [...i, t] : [i, t];
}
function xd(i) {
  return i._rawValidators;
}
function wd(i) {
  return i._rawAsyncValidators;
}
function ms(i) {
  return i ? (Array.isArray(i) ? i : [i]) : [];
}
function ir(i, t) {
  return Array.isArray(i) ? i.includes(t) : i === t;
}
function od(i, t) {
  let r = ms(t);
  return (
    ms(i).forEach((n) => {
      ir(r, n) || r.push(n);
    }),
    r
  );
}
function rd(i, t) {
  return ms(t).filter((r) => !ir(i, r));
}
var nr = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = fs(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = ps(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, r) {
      return this.control ? this.control.hasError(t, r) : !1;
    }
    getError(t, r) {
      return this.control ? this.control.getError(t, r) : null;
    }
  },
  Le = class extends nr {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  si = class extends nr {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  or = class {
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  },
  fp = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  z_ = X(g({}, fp), { "[class.ng-submitted]": "isSubmitted" }),
  Ui = (() => {
    let t = class t extends or {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(si, 2));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, o) {
          n & 2 &&
            G("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid
            )("ng-pending", o.isPending);
        },
        features: [nt],
      }));
    let i = t;
    return i;
  })(),
  Hi = (() => {
    let t = class t extends or {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(Le, 10));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (n, o) {
          n & 2 &&
            G("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid
            )("ng-pending", o.isPending)("ng-submitted", o.isSubmitted);
        },
        features: [nt],
      }));
    let i = t;
    return i;
  })();
var Un = "VALID",
  Jo = "INVALID",
  Bi = "PENDING",
  Hn = "DISABLED";
function Cd(i) {
  return (ur(i) ? i.validators : i) || null;
}
function pp(i) {
  return Array.isArray(i) ? fs(i) : i || null;
}
function Dd(i, t) {
  return (ur(t) ? t.asyncValidators : i) || null;
}
function gp(i) {
  return Array.isArray(i) ? ps(i) : i || null;
}
function ur(i) {
  return i != null && !Array.isArray(i) && typeof i == "object";
}
function bp(i, t, r) {
  let e = i.controls;
  if (!(t ? Object.keys(e) : e).length) throw new Y(1e3, "");
  if (!e[r]) throw new Y(1001, "");
}
function vp(i, t, r) {
  i._forEachChild((e, n) => {
    if (r[n] === void 0) throw new Y(1002, "");
  });
}
var rr = class {
    constructor(t, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = !1),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this.pristine = !0),
        (this.touched = !1),
        (this._onDisabledChange = []),
        this._assignValidators(t),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get valid() {
      return this.status === Un;
    }
    get invalid() {
      return this.status === Jo;
    }
    get pending() {
      return this.status == Bi;
    }
    get disabled() {
      return this.status === Hn;
    }
    get enabled() {
      return this.status !== Hn;
    }
    get dirty() {
      return !this.pristine;
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(od(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(od(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(rd(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(rd(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return ir(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return ir(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      (this.touched = !0),
        this._parent && !t.onlySelf && this._parent.markAsTouched(t);
    }
    markAllAsTouched() {
      this.markAsTouched({ onlySelf: !0 }),
        this._forEachChild((t) => t.markAllAsTouched());
    }
    markAsUntouched(t = {}) {
      (this.touched = !1),
        (this._pendingTouched = !1),
        this._forEachChild((r) => {
          r.markAsUntouched({ onlySelf: !0 });
        }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t);
    }
    markAsDirty(t = {}) {
      (this.pristine = !1),
        this._parent && !t.onlySelf && this._parent.markAsDirty(t);
    }
    markAsPristine(t = {}) {
      (this.pristine = !0),
        (this._pendingDirty = !1),
        this._forEachChild((r) => {
          r.markAsPristine({ onlySelf: !0 });
        }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t);
    }
    markAsPending(t = {}) {
      (this.status = Bi),
        t.emitEvent !== !1 && this.statusChanges.emit(this.status),
        this._parent && !t.onlySelf && this._parent.markAsPending(t);
    }
    disable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Hn),
        (this.errors = null),
        this._forEachChild((e) => {
          e.disable(X(g({}, t), { onlySelf: !0 }));
        }),
        this._updateValue(),
        t.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._updateAncestors(X(g({}, t), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((e) => e(!0));
    }
    enable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Un),
        this._forEachChild((e) => {
          e.enable(X(g({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(X(g({}, t), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((e) => e(!1));
    }
    _updateAncestors(t) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine(),
        this._parent._updateTouched());
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      this._setInitialStatus(),
        this._updateValue(),
        this.enabled &&
          (this._cancelExistingSubscription(),
          (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Un || this.status === Bi) &&
            this._runAsyncValidator(t.emitEvent)),
        t.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Hn : Un;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t) {
      if (this.asyncValidator) {
        (this.status = Bi), (this._hasOwnPendingAsyncValidator = !0);
        let r = pd(this.asyncValidator(this));
        this._asyncValidationSubscription = r.subscribe((e) => {
          (this._hasOwnPendingAsyncValidator = !1),
            this.setErrors(e, { emitEvent: t });
        });
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription &&
        (this._asyncValidationSubscription.unsubscribe(),
        (this._hasOwnPendingAsyncValidator = !1));
    }
    setErrors(t, r = {}) {
      (this.errors = t), this._updateControlsErrors(r.emitEvent !== !1);
    }
    get(t) {
      let r = t;
      return r == null ||
        (Array.isArray(r) || (r = r.split(".")), r.length === 0)
        ? null
        : r.reduce((e, n) => e && e._find(n), this);
    }
    getError(t, r) {
      let e = r ? this.get(r) : this;
      return e && e.errors ? e.errors[t] : null;
    }
    hasError(t, r) {
      return !!this.getError(t, r);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        this._parent && this._parent._updateControlsErrors(t);
    }
    _initObservables() {
      (this.valueChanges = new ct()), (this.statusChanges = new ct());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? Hn
        : this.errors
        ? Jo
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Bi)
        ? Bi
        : this._anyControlsHaveStatus(Jo)
        ? Jo
        : Un;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((r) => r.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t = {}) {
      (this.pristine = !this._anyControlsDirty()),
        this._parent && !t.onlySelf && this._parent._updatePristine(t);
    }
    _updateTouched(t = {}) {
      (this.touched = this._anyControlsTouched()),
        this._parent && !t.onlySelf && this._parent._updateTouched(t);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      ur(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let r = this._parent && this._parent.dirty;
      return !t && !!r && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = pp(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = gp(this._rawAsyncValidators));
    }
  },
  ar = class extends rr {
    constructor(t, r, e) {
      super(Cd(r), Dd(e, r)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(t, r) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(t, r, e = {}) {
      this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, r = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, r, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        r && this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, r = {}) {
      vp(this, !0, t),
        Object.keys(t).forEach((e) => {
          bp(this, !0, e),
            this.controls[e].setValue(t[e], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(t, r = {}) {
      t != null &&
        (Object.keys(t).forEach((e) => {
          let n = this.controls[e];
          n && n.patchValue(t[e], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(t = {}, r = {}) {
      this._forEachChild((e, n) => {
        e.reset(t ? t[n] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r),
        this._updateTouched(r),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, r, e) => ((t[e] = r.getRawValue()), t)
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (r, e) =>
        e._syncPendingControls() ? !0 : r
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((r) => {
        let e = this.controls[r];
        e && t(e, r);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [r, e] of Object.entries(this.controls))
        if (this.contains(r) && t(e)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (r, e, n) => ((e.enabled || this.disabled) && (r[n] = e.value), r)
      );
    }
    _reduceChildren(t, r) {
      let e = t;
      return (
        this._forEachChild((n, o) => {
          e = r(e, n, o);
        }),
        e
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var mr = new _("CallSetDisabledState", {
    providedIn: "root",
    factory: () => gs,
  }),
  gs = "always";
function _p(i, t) {
  return [...t.path, i];
}
function sr(i, t, r = gs) {
  bs(i, t),
    t.valueAccessor.writeValue(i.value),
    (i.disabled || r === "always") &&
      t.valueAccessor.setDisabledState?.(i.disabled),
    xp(i, t),
    Cp(i, t),
    wp(i, t),
    yp(i, t);
}
function ad(i, t, r = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    lr(i, t),
    i &&
      (t._invokeOnDestroyCallbacks(), i._registerOnCollectionChange(() => {}));
}
function cr(i, t) {
  i.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(t);
  });
}
function yp(i, t) {
  if (t.valueAccessor.setDisabledState) {
    let r = (e) => {
      t.valueAccessor.setDisabledState(e);
    };
    i.registerOnDisabledChange(r),
      t._registerOnDestroy(() => {
        i._unregisterOnDisabledChange(r);
      });
  }
}
function bs(i, t) {
  let r = xd(i);
  t.validator !== null
    ? i.setValidators(nd(r, t.validator))
    : typeof r == "function" && i.setValidators([r]);
  let e = wd(i);
  t.asyncValidator !== null
    ? i.setAsyncValidators(nd(e, t.asyncValidator))
    : typeof e == "function" && i.setAsyncValidators([e]);
  let n = () => i.updateValueAndValidity();
  cr(t._rawValidators, n), cr(t._rawAsyncValidators, n);
}
function lr(i, t) {
  let r = !1;
  if (i !== null) {
    if (t.validator !== null) {
      let n = xd(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.validator);
        o.length !== n.length && ((r = !0), i.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let n = wd(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.asyncValidator);
        o.length !== n.length && ((r = !0), i.setAsyncValidators(o));
      }
    }
  }
  let e = () => {};
  return cr(t._rawValidators, e), cr(t._rawAsyncValidators, e), r;
}
function xp(i, t) {
  t.valueAccessor.registerOnChange((r) => {
    (i._pendingValue = r),
      (i._pendingChange = !0),
      (i._pendingDirty = !0),
      i.updateOn === "change" && Ed(i, t);
  });
}
function wp(i, t) {
  t.valueAccessor.registerOnTouched(() => {
    (i._pendingTouched = !0),
      i.updateOn === "blur" && i._pendingChange && Ed(i, t),
      i.updateOn !== "submit" && i.markAsTouched();
  });
}
function Ed(i, t) {
  i._pendingDirty && i.markAsDirty(),
    i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(i._pendingValue),
    (i._pendingChange = !1);
}
function Cp(i, t) {
  let r = (e, n) => {
    t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
  };
  i.registerOnChange(r),
    t._registerOnDestroy(() => {
      i._unregisterOnChange(r);
    });
}
function Id(i, t) {
  i == null, bs(i, t);
}
function Dp(i, t) {
  return lr(i, t);
}
function Ep(i, t) {
  if (!i.hasOwnProperty("model")) return !1;
  let r = i.model;
  return r.isFirstChange() ? !0 : !Object.is(t, r.currentValue);
}
function Ip(i) {
  return Object.getPrototypeOf(i.constructor) === ep;
}
function Md(i, t) {
  i._syncPendingControls(),
    t.forEach((r) => {
      let e = r.control;
      e.updateOn === "submit" &&
        e._pendingChange &&
        (r.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function Mp(i, t) {
  if (!t) return null;
  Array.isArray(t);
  let r, e, n;
  return (
    t.forEach((o) => {
      o.constructor === je ? (r = o) : Ip(o) ? (e = o) : (n = o);
    }),
    n || e || r || null
  );
}
function Sp(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
var Ap = { provide: Le, useExisting: vi(() => be) },
  $n = Promise.resolve(),
  be = (() => {
    let t = class t extends Le {
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this.submitted = !1),
          (this._directives = new Set()),
          (this.ngSubmit = new ct()),
          (this.form = new ar({}, fs(e), ps(n)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        $n.then(() => {
          let n = this._findContainer(e.path);
          (e.control = n.registerControl(e.name, e.control)),
            sr(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        $n.then(() => {
          let n = this._findContainer(e.path);
          n && n.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        $n.then(() => {
          let n = this._findContainer(e.path),
            o = new ar({});
          Id(o, e),
            n.registerControl(e.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        $n.then(() => {
          let n = this._findContainer(e.path);
          n && n.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, n) {
        $n.then(() => {
          this.form.get(e.path).setValue(n);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          (this.submitted = !0),
          Md(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), (this.submitted = !1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(dr, 10), u(hs, 10), u(mr, 8));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            V("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [N.None, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [_t([Ap]), nt],
      }));
    let i = t;
    return i;
  })();
function sd(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
function cd(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    Object.keys(i).length === 2 &&
    "value" in i &&
    "disabled" in i
  );
}
var Sd = class extends rr {
  constructor(t = null, r, e) {
    super(Cd(r), Dd(e, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(t),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      ur(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (cd(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, r = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((e) =>
          e(this.value, r.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(t, r = {}) {
    this.setValue(t, r);
  }
  reset(t = this.defaultValue, r = {}) {
    this._applyFormState(t),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    sd(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    sd(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    cd(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var Rp = (i) => i instanceof Sd;
var kp = { provide: si, useExisting: vi(() => ci) },
  ld = Promise.resolve(),
  ci = (() => {
    let t = class t extends si {
      constructor(e, n, o, a, s, c) {
        super(),
          (this._changeDetectorRef = s),
          (this.callSetDisabledState = c),
          (this.control = new Sd()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new ct()),
          (this._parent = e),
          this._setValidators(n),
          this._setAsyncValidators(o),
          (this.valueAccessor = Mp(this, a));
      }
      ngOnChanges(e) {
        if ((this._checkForErrors(), !this._registered || "name" in e)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let n = e.name.previousValue;
            this.formDirective.removeControl({
              name: n,
              path: this._getPath(n),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in e && this._updateDisabled(e),
          Ep(e, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        sr(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(e) {
        ld.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let n = e.isDisabled.currentValue,
          o = n !== 0 && Ct(n);
        ld.then(() => {
          o && !this.control.disabled
            ? this.control.disable()
            : !o && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? _p(e, this._parent) : [e];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(Le, 9),
        u(dr, 10),
        u(hs, 10),
        u(ud, 10),
        u(wt, 8),
        u(mr, 8)
      );
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
        ],
        inputs: {
          name: "name",
          isDisabled: [N.None, "disabled", "isDisabled"],
          model: [N.None, "ngModel", "model"],
          options: [N.None, "ngModelOptions", "options"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngModel"],
        features: [_t([kp]), nt, Rt],
      }));
    let i = t;
    return i;
  })(),
  $i = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""],
      }));
    let i = t;
    return i;
  })();
var Op = { provide: Le, useExisting: vi(() => vs) },
  vs = (() => {
    let t = class t extends Le {
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this.submitted = !1),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new ct()),
          this._setValidators(e),
          this._setAsyncValidators(n);
      }
      ngOnChanges(e) {
        this._checkFormPresent(),
          e.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (lr(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let n = this.form.get(e.path);
        return (
          sr(n, e, this.callSetDisabledState),
          n.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          n
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        ad(e.control || null, e, !1), Sp(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, n) {
        this.form.get(e.path).setValue(n);
      }
      onSubmit(e) {
        return (
          (this.submitted = !0),
          Md(this.form, this.directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), (this.submitted = !1);
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let n = e.control,
            o = this.form.get(e.path);
          n !== o &&
            (ad(n || null, e),
            Rp(o) && (sr(o, e, this.callSetDisabledState), (e.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let n = this.form.get(e.path);
        Id(n, e), n.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let n = this.form.get(e.path);
          n && Dp(n, e) && n.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        bs(this.form, this), this._oldForm && lr(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(dr, 10), u(hs, 10), u(mr, 8));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (n, o) {
          n & 1 &&
            V("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { form: [N.None, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [_t([Op]), nt, Rt],
      }));
    let i = t;
    return i;
  })();
var Tp = (() => {
  let t = class t {
    constructor() {
      this._validator = er;
    }
    ngOnChanges(e) {
      if (this.inputName in e) {
        let n = this.normalizeInput(e[this.inputName].currentValue);
        (this._enabled = this.enabled(n)),
          (this._validator = this._enabled ? this.createValidator(n) : er),
          this._onChange && this._onChange();
      }
    }
    validate(e) {
      return this._validator(e);
    }
    registerOnValidatorChange(e) {
      this._onChange = e;
    }
    enabled(e) {
      return e != null;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = R({ type: t, features: [Rt] }));
  let i = t;
  return i;
})();
var Fp = { provide: dr, useExisting: vi(() => Wn), multi: !0 };
var Wn = (() => {
  let t = class t extends Tp {
    constructor() {
      super(...arguments),
        (this.inputName = "required"),
        (this.normalizeInput = Ct),
        (this.createValidator = (e) => hd);
    }
    enabled(e) {
      return e;
    }
  };
  (t.ɵfac = (() => {
    let e;
    return function (o) {
      return (e || (e = Ie(t)))(o || t);
    };
  })()),
    (t.ɵdir = R({
      type: t,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
      ],
      hostVars: 1,
      hostBindings: function (n, o) {
        n & 2 && it("required", o._enabled ? "" : null);
      },
      inputs: { required: "required" },
      features: [_t([Fp]), nt],
    }));
  let i = t;
  return i;
})();
var Pp = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({}));
  let i = t;
  return i;
})();
var Ad = (() => {
  let t = class t {
    static withConfig(e) {
      return {
        ngModule: t,
        providers: [{ provide: mr, useValue: e.callSetDisabledState ?? gs }],
      };
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ imports: [Pp] }));
  let i = t;
  return i;
})();
function fr(i, ...t) {
  return t.length
    ? t.some((r) => i[r])
    : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
}
var Np = (() => {
  let t = class t {
    create(e) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(e);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var pr = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [Np] }));
  let i = t;
  return i;
})();
var Rd = new Set(),
  li,
  Lp = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : Vp);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && jp(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(z), m(rn, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function jp(i, t) {
  if (!Rd.has(i))
    try {
      li ||
        ((li = document.createElement("style")),
        t && li.setAttribute("nonce", t),
        li.setAttribute("type", "text/css"),
        document.head.appendChild(li)),
        li.sheet &&
          (li.sheet.insertRule(`@media ${i} {body{ }}`, 0), Rd.add(i));
    } catch (r) {
      console.error(r);
    }
}
function Vp(i) {
  return {
    matches: i === "all" || i === "",
    media: i,
    addListener: () => {},
    removeListener: () => {},
  };
}
var gr = (() => {
  let t = class t {
    constructor(e, n) {
      (this._mediaMatcher = e),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new k());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return kd(Vi(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = kd(Vi(e)).map((s) => this._registerQuery(s).observable),
        a = gi(o);
      return (
        (a = eo(a.pipe(dt(1)), a.pipe(no(1), qr(0)))),
        a.pipe(
          S((s) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: l, query: d }) => {
                (c.matches = c.matches || l), (c.breakpoints[d] = l);
              }),
              c
            );
          })
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let n = this._mediaMatcher.matchMedia(e),
        a = {
          observable: new we((s) => {
            let c = (l) => this._zone.run(() => s.next(l));
            return (
              n.addListener(c),
              () => {
                n.removeListener(c);
              }
            );
          }).pipe(
            ce(n),
            S(({ matches: s }) => ({ query: e, matches: s })),
            bt(this._destroySubject)
          ),
          mql: n,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(Lp), m(w));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function kd(i) {
  return i
    .map((t) => t.split(","))
    .reduce((t, r) => t.concat(r))
    .map((t) => t.trim());
}
var Od = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset:
    "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape:
    "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)",
};
var Gn = (() => {
  let t = class t {
    constructor(e) {
      this._platform = e;
    }
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return Hp(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let n = Up(Kp(e));
      if (n && (Td(n) === -1 || !this.isVisible(n))) return !1;
      let o = e.nodeName.toLowerCase(),
        a = Td(e);
      return e.hasAttribute("contenteditable")
        ? a !== -1
        : o === "iframe" ||
          o === "object" ||
          (this._platform.WEBKIT && this._platform.IOS && !Zp(e))
        ? !1
        : o === "audio"
        ? e.hasAttribute("controls")
          ? a !== -1
          : !1
        : o === "video"
        ? a === -1
          ? !1
          : a !== null
          ? !0
          : this._platform.FIREFOX || e.hasAttribute("controls")
        : e.tabIndex >= 0;
    }
    isFocusable(e, n) {
      return (
        Xp(e) &&
        !this.isDisabled(e) &&
        (n?.ignoreVisibility || this.isVisible(e))
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(z));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function Up(i) {
  try {
    return i.frameElement;
  } catch {
    return null;
  }
}
function Hp(i) {
  return !!(
    i.offsetWidth ||
    i.offsetHeight ||
    (typeof i.getClientRects == "function" && i.getClientRects().length)
  );
}
function $p(i) {
  let t = i.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function Wp(i) {
  return Yp(i) && i.type == "hidden";
}
function Gp(i) {
  return qp(i) && i.hasAttribute("href");
}
function Yp(i) {
  return i.nodeName.toLowerCase() == "input";
}
function qp(i) {
  return i.nodeName.toLowerCase() == "a";
}
function Nd(i) {
  if (!i.hasAttribute("tabindex") || i.tabIndex === void 0) return !1;
  let t = i.getAttribute("tabindex");
  return !!(t && !isNaN(parseInt(t, 10)));
}
function Td(i) {
  if (!Nd(i)) return null;
  let t = parseInt(i.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function Zp(i) {
  let t = i.nodeName.toLowerCase(),
    r = t === "input" && i.type;
  return r === "text" || r === "password" || t === "select" || t === "textarea";
}
function Xp(i) {
  return Wp(i)
    ? !1
    : $p(i) || Gp(i) || i.hasAttribute("contenteditable") || Nd(i);
}
function Kp(i) {
  return (i.ownerDocument && i.ownerDocument.defaultView) || window;
}
var ys = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(t) {
      (this._enabled = t),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(t, this._startAnchor),
          this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    constructor(t, r, e, n, o = !1) {
      (this._element = t),
        (this._checker = r),
        (this._ngZone = e),
        (this._document = n),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        o || this.attachAnchors();
    }
    destroy() {
      let t = this._startAnchor,
        r = this._endAnchor;
      t &&
        (t.removeEventListener("focus", this.startAnchorListener), t.remove()),
        r &&
          (r.removeEventListener("focus", this.endAnchorListener), r.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusInitialElement(t)));
      });
    }
    focusFirstTabbableElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusFirstTabbableElement(t)));
      });
    }
    focusLastTabbableElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusLastTabbableElement(t)));
      });
    }
    _getRegionBoundary(t) {
      let r = this._element.querySelectorAll(
        `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`
      );
      return t == "start"
        ? r.length
          ? r[0]
          : this._getFirstTabbableElement(this._element)
        : r.length
        ? r[r.length - 1]
        : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(t) {
      let r = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]"
      );
      if (r) {
        if (!this._checker.isFocusable(r)) {
          let e = this._getFirstTabbableElement(r);
          return e?.focus(t), !!e;
        }
        return r.focus(t), !0;
      }
      return this.focusFirstTabbableElement(t);
    }
    focusFirstTabbableElement(t) {
      let r = this._getRegionBoundary("start");
      return r && r.focus(t), !!r;
    }
    focusLastTabbableElement(t) {
      let r = this._getRegionBoundary("end");
      return r && r.focus(t), !!r;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let r = t.children;
      for (let e = 0; e < r.length; e++) {
        let n =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(r[e])
            : null;
        if (n) return n;
      }
      return null;
    }
    _getLastTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let r = t.children;
      for (let e = r.length - 1; e >= 0; e--) {
        let n =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(r[e])
            : null;
        if (n) return n;
      }
      return null;
    }
    _createAnchor() {
      let t = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, t),
        t.classList.add("cdk-visually-hidden"),
        t.classList.add("cdk-focus-trap-anchor"),
        t.setAttribute("aria-hidden", "true"),
        t
      );
    }
    _toggleAnchorTabIndex(t, r) {
      t ? r.setAttribute("tabindex", "0") : r.removeAttribute("tabindex");
    }
    toggleAnchors(t) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    _executeOnStable(t) {
      this._ngZone.isStable
        ? t()
        : this._ngZone.onStable.pipe(dt(1)).subscribe(t);
    }
  },
  _r = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._checker = e), (this._ngZone = n), (this._document = o);
      }
      create(e, n = !1) {
        return new ys(e, this._checker, this._ngZone, this._document, n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Gn), m(w), m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function xs(i) {
  return i.buttons === 0 || i.detail === 0;
}
function ws(i) {
  let t =
    (i.touches && i.touches[0]) || (i.changedTouches && i.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var Qp = new _("cdk-input-modality-detector-options"),
  Jp = { ignoreKeys: [18, 17, 224, 91, 16] },
  Ld = 650,
  Wi = Pe({ passive: !0, capture: !0 }),
  tg = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, n, o, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new Et(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((c) => c === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Qt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < Ld ||
              (this._modality.next(xs(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Qt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (ws(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Qt(s));
          }),
          (this._options = g(g({}, Jp), a)),
          (this.modalityDetected = this._modality.pipe(no(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Xr())),
          e.isBrowser &&
            n.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, Wi),
                o.addEventListener("mousedown", this._onMousedown, Wi),
                o.addEventListener("touchstart", this._onTouchstart, Wi);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, Wi),
            document.removeEventListener("mousedown", this._onMousedown, Wi),
            document.removeEventListener("touchstart", this._onTouchstart, Wi));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(z), m(w), m(E), m(Qp, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  eg = new _("liveAnnouncerElement", { providedIn: "root", factory: ig });
function ig() {
  return null;
}
var ng = new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),
  og = 0,
  jd = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this._ngZone = n),
          (this._defaultOptions = a),
          (this._document = o),
          (this._liveElement = e || this._createLiveElement());
      }
      announce(e, ...n) {
        let o = this._defaultOptions,
          a,
          s;
        return (
          n.length === 1 && typeof n[0] == "number" ? (s = n[0]) : ([a, s] = n),
          this.clear(),
          clearTimeout(this._previousTimeout),
          a || (a = o && o.politeness ? o.politeness : "polite"),
          s == null && o && (s = o.duration),
          this._liveElement.setAttribute("aria-live", a),
          this._liveElement.id &&
            this._exposeAnnouncerToModals(this._liveElement.id),
          this._ngZone.runOutsideAngular(
            () => (
              this._currentPromise ||
                (this._currentPromise = new Promise(
                  (c) => (this._currentResolve = c)
                )),
              clearTimeout(this._previousTimeout),
              (this._previousTimeout = setTimeout(() => {
                (this._liveElement.textContent = e),
                  typeof s == "number" &&
                    (this._previousTimeout = setTimeout(() => this.clear(), s)),
                  this._currentResolve?.(),
                  (this._currentPromise = this._currentResolve = void 0);
              }, 100)),
              this._currentPromise
            )
          )
        );
      }
      clear() {
        this._liveElement && (this._liveElement.textContent = "");
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout),
          this._liveElement?.remove(),
          (this._liveElement = null),
          this._currentResolve?.(),
          (this._currentPromise = this._currentResolve = void 0);
      }
      _createLiveElement() {
        let e = "cdk-live-announcer-element",
          n = this._document.getElementsByClassName(e),
          o = this._document.createElement("div");
        for (let a = 0; a < n.length; a++) n[a].remove();
        return (
          o.classList.add(e),
          o.classList.add("cdk-visually-hidden"),
          o.setAttribute("aria-atomic", "true"),
          o.setAttribute("aria-live", "polite"),
          (o.id = `cdk-live-announcer-${og++}`),
          this._document.body.appendChild(o),
          o
        );
      }
      _exposeAnnouncerToModals(e) {
        let n = this._document.querySelectorAll(
          'body > .cdk-overlay-container [aria-modal="true"]'
        );
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            s = a.getAttribute("aria-owns");
          s
            ? s.indexOf(e) === -1 && a.setAttribute("aria-owns", s + " " + e)
            : a.setAttribute("aria-owns", e);
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(eg, 8), m(w), m(E), m(ng, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var vr = (function (i) {
    return (
      (i[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
      (i[(i.EVENTUAL = 1)] = "EVENTUAL"),
      i
    );
  })(vr || {}),
  rg = new _("cdk-focus-monitor-default-options"),
  br = Pe({ passive: !0, capture: !0 }),
  Gi = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this._ngZone = e),
          (this._platform = n),
          (this._inputModalityDetector = o),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1)
              ));
          }),
          (this._stopInputModalityDetector = new k()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = Qt(c);
            for (let d = l; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || vr.IMMEDIATE);
      }
      monitor(e, n = !1) {
        let o = $t(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return D();
        let a = Jl(o) || this._getDocument(),
          s = this._elementInfo.get(o);
        if (s) return n && (s.checkChildren = !0), s.subject;
        let c = { checkChildren: n, subject: new k(), rootNode: a };
        return (
          this._elementInfo.set(o, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(e) {
        let n = $t(e),
          o = this._elementInfo.get(n);
        o &&
          (o.subject.complete(),
          this._setClasses(n),
          this._elementInfo.delete(n),
          this._removeGlobalListeners(o));
      }
      focusVia(e, n, o) {
        let a = $t(e),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([c, l]) =>
              this._originChanged(c, n, l)
            )
          : (this._setOrigin(n), typeof a.focus == "function" && a.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, n) => this.stopMonitoring(n));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : e && this._isLastInteractionFromInputLabel(e)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === vr.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, n) {
        e.classList.toggle("cdk-focused", !!n),
          e.classList.toggle("cdk-touch-focused", n === "touch"),
          e.classList.toggle("cdk-keyboard-focused", n === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", n === "mouse"),
          e.classList.toggle("cdk-program-focused", n === "program");
      }
      _setOrigin(e, n = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && n),
            this._detectionMode === vr.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? Ld : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, n) {
        let o = this._elementInfo.get(n),
          a = Qt(e);
        !o ||
          (!o.checkChildren && n !== a) ||
          this._originChanged(n, this._getFocusOrigin(a), o);
      }
      _onBlur(e, n) {
        let o = this._elementInfo.get(n);
        !o ||
          (o.checkChildren &&
            e.relatedTarget instanceof Node &&
            n.contains(e.relatedTarget)) ||
          (this._setClasses(n), this._emitOrigin(o, null));
      }
      _emitOrigin(e, n) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(n));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let n = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(n) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("focus", this._rootNodeFocusAndBlurListener, br),
              n.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                br
              );
          }),
          this._rootNodeFocusListenerCount.set(n, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(bt(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let n = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(n)) {
          let o = this._rootNodeFocusListenerCount.get(n);
          o > 1
            ? this._rootNodeFocusListenerCount.set(n, o - 1)
            : (n.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                br
              ),
              n.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                br
              ),
              this._rootNodeFocusListenerCount.delete(n));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, n, o) {
        this._setClasses(e, n),
          this._emitOrigin(o, n),
          (this._lastFocusOrigin = n);
      }
      _getClosestElementsInfo(e) {
        let n = [];
        return (
          this._elementInfo.forEach((o, a) => {
            (a === e || (o.checkChildren && a.contains(e))) && n.push([a, o]);
          }),
          n
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: n, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !n ||
          n === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let a = e.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(n)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(w), m(z), m(tg), m(E, 8), m(rg, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var di = (function (i) {
    return (
      (i[(i.NONE = 0)] = "NONE"),
      (i[(i.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (i[(i.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      i
    );
  })(di || {}),
  Fd = "cdk-high-contrast-black-on-white",
  Pd = "cdk-high-contrast-white-on-black",
  _s = "cdk-high-contrast-active",
  Cs = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._document = n),
          (this._breakpointSubscription = b(gr)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return di.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let n = this._document.defaultView || window,
          o = n && n.getComputedStyle ? n.getComputedStyle(e) : null,
          a = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return di.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return di.BLACK_ON_WHITE;
        }
        return di.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(_s, Fd, Pd), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === di.BLACK_ON_WHITE
            ? e.add(_s, Fd)
            : n === di.WHITE_ON_BLACK && e.add(_s, Pd);
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(z), m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Vd = (() => {
    let t = class t {
      constructor(e) {
        e._applyBodyHighContrastModeCssClasses();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Cs));
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [pr] }));
    let i = t;
    return i;
  })();
var ag = new _("cdk-dir-doc", { providedIn: "root", factory: sg });
function sg() {
  return b(E);
}
var cg =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function lg(i) {
  let t = i?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? cg.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
    ? "rtl"
    : "ltr";
}
var ui = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new ct()), e)) {
        let n = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = lg(n || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(ag, 8));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Ve = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({}));
  let i = t;
  return i;
})();
function dg() {
  return !0;
}
var ug = new _("mat-sanity-checks", { providedIn: "root", factory: dg }),
  Z = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._sanityChecks = n),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return Bn()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Cs), m(ug, 8), m(E));
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Ve, Ve] }));
    let i = t;
    return i;
  })();
var wr = class {
  constructor(t, r, e, n, o) {
    (this._defaultMatcher = t),
      (this.ngControl = r),
      (this._parentFormGroup = e),
      (this._parentForm = n),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let t = this.errorState,
      r = this._parentFormGroup || this._parentForm,
      e = this.matcher || this._defaultMatcher,
      n = this.ngControl ? this.ngControl.control : null,
      o = e?.isErrorState(n, r) ?? !1;
    o !== t && ((this.errorState = o), this._stateChanges.next());
  }
};
var Zd = (() => {
  let t = class t {
    isErrorState(e, n) {
      return !!(e && e.invalid && (e.touched || (n && n.submitted)));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Wt = (function (i) {
    return (
      (i[(i.FADING_IN = 0)] = "FADING_IN"),
      (i[(i.VISIBLE = 1)] = "VISIBLE"),
      (i[(i.FADING_OUT = 2)] = "FADING_OUT"),
      (i[(i.HIDDEN = 3)] = "HIDDEN"),
      i
    );
  })(Wt || {}),
  Is = class {
    constructor(t, r, e, n = !1) {
      (this._renderer = t),
        (this.element = r),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = Wt.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Bd = Pe({ passive: !0, capture: !0 }),
  Ms = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let r = Qt(t);
          r &&
            this._events.get(t.type)?.forEach((e, n) => {
              (n === r || n.contains(r)) && e.forEach((o) => o.handleEvent(t));
            });
        });
    }
    addHandler(t, r, e, n) {
      let o = this._events.get(r);
      if (o) {
        let a = o.get(e);
        a ? a.add(n) : o.set(e, new Set([n]));
      } else
        this._events.set(r, new Map([[e, new Set([n])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, Bd);
          });
    }
    removeHandler(t, r, e) {
      let n = this._events.get(t);
      if (!n) return;
      let o = n.get(r);
      o &&
        (o.delete(e),
        o.size === 0 && n.delete(r),
        n.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, Bd)));
    }
  },
  Ud = { enterDuration: 225, exitDuration: 150 },
  mg = 800,
  Hd = Pe({ passive: !0, capture: !0 }),
  $d = ["mousedown", "touchstart"],
  Wd = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Yn = class Yn {
    constructor(t, r, e, n) {
      (this._target = t),
        (this._ngZone = r),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = $t(e));
    }
    fadeInRipple(t, r, e = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = g(g({}, Ud), e.animation);
      e.centered && ((t = n.left + n.width / 2), (r = n.top + n.height / 2));
      let a = e.radius || hg(t, r, n),
        s = t - n.left,
        c = r - n.top,
        l = o.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${s - a}px`),
        (d.style.top = `${c - a}px`),
        (d.style.height = `${a * 2}px`),
        (d.style.width = `${a * 2}px`),
        e.color != null && (d.style.backgroundColor = e.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let f = window.getComputedStyle(d),
        y = f.transitionProperty,
        A = f.transitionDuration,
        H =
          y === "none" ||
          A === "0s" ||
          A === "0s, 0s" ||
          (n.width === 0 && n.height === 0),
        $ = new Is(this, d, e, H);
      (d.style.transform = "scale3d(1, 1, 1)"),
        ($.state = Wt.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = $);
      let j = null;
      return (
        !H &&
          (l || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let W = () => this._finishRippleTransition($),
              Xt = () => this._destroyRipple($);
            d.addEventListener("transitionend", W),
              d.addEventListener("transitioncancel", Xt),
              (j = { onTransitionEnd: W, onTransitionCancel: Xt });
          }),
        this._activeRipples.set($, j),
        (H || !l) && this._finishRippleTransition($),
        $
      );
    }
    fadeOutRipple(t) {
      if (t.state === Wt.FADING_OUT || t.state === Wt.HIDDEN) return;
      let r = t.element,
        e = g(g({}, Ud), t.config.animation);
      (r.style.transitionDuration = `${e.exitDuration}ms`),
        (r.style.opacity = "0"),
        (t.state = Wt.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let r = $t(t);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        $d.forEach((e) => {
          Yn._eventManager.addHandler(this._ngZone, e, r, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
        ? this._onTouchStart(t)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            Wd.forEach((r) => {
              this._triggerElement.addEventListener(r, this, Hd);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === Wt.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === Wt.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let r = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = Wt.VISIBLE), !e && (!r || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let r = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = Wt.HIDDEN),
        r !== null &&
          (t.element.removeEventListener("transitionend", r.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            r.onTransitionCancel
          )),
        t.element.remove();
    }
    _onMousedown(t) {
      let r = xs(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + mg;
      !this._target.rippleDisabled &&
        !r &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !ws(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let r = t.changedTouches;
        if (r)
          for (let e = 0; e < r.length; e++)
            this.fadeInRipple(
              r[e].clientX,
              r[e].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let r =
            t.state === Wt.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === Wt.FADING_IN);
          !t.config.persistent && r && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        ($d.forEach((r) => Yn._eventManager.removeHandler(r, t, this)),
        this._pointerUpEventsRegistered &&
          Wd.forEach((r) => t.removeEventListener(r, this, Hd)));
    }
  };
Yn._eventManager = new Ms();
var Ss = Yn;
function hg(i, t, r) {
  let e = Math.max(Math.abs(i - r.left), Math.abs(i - r.right)),
    n = Math.max(Math.abs(t - r.top), Math.abs(t - r.bottom));
  return Math.sqrt(e * e + n * n);
}
var Xd = new _("mat-ripple-global-options"),
  Kd = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          (this._disabled = e),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        (this._trigger = e), this._setupTriggerEventsIfEnabled();
      }
      constructor(e, n, o, a, s) {
        (this._elementRef = e),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new Ss(this, n, e, o));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: g(
            g(
              g({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {}
            ),
            this.animation
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, n = 0, o) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              n,
              g(g({}, this.rippleConfig), o)
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              g(g({}, this.rippleConfig), e)
            );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(w), u(z), u(Xd, 8), u(mt, 8));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && G("mat-ripple-unbounded", o.unbounded);
        },
        inputs: {
          color: [N.None, "matRippleColor", "color"],
          unbounded: [N.None, "matRippleUnbounded", "unbounded"],
          centered: [N.None, "matRippleCentered", "centered"],
          radius: [N.None, "matRippleRadius", "radius"],
          animation: [N.None, "matRippleAnimation", "animation"],
          disabled: [N.None, "matRippleDisabled", "disabled"],
          trigger: [N.None, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Cr = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Z, Z] }));
    let i = t;
    return i;
  })();
var Gd = { capture: !0 },
  Yd = ["focus", "click", "mouseenter", "touchstart"],
  Ds = "mat-ripple-loader-uninitialized",
  Es = "mat-ripple-loader-class-name",
  qd = "mat-ripple-loader-centered",
  xr = "mat-ripple-loader-disabled",
  Qd = (() => {
    let t = class t {
      constructor() {
        (this._document = b(E, { optional: !0 })),
          (this._animationMode = b(mt, { optional: !0 })),
          (this._globalRippleOptions = b(Xd, { optional: !0 })),
          (this._platform = b(z)),
          (this._ngZone = b(w)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            if (!(e.target instanceof HTMLElement)) return;
            let o = e.target.closest(`[${Ds}]`);
            o && this._createRipple(o);
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of Yd)
              this._document?.addEventListener(e, this._onInteraction, Gd);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let n of e) this.destroyRipple(n);
        for (let n of Yd)
          this._document?.removeEventListener(n, this._onInteraction, Gd);
      }
      configureRipple(e, n) {
        e.setAttribute(Ds, ""),
          (n.className || !e.hasAttribute(Es)) &&
            e.setAttribute(Es, n.className || ""),
          n.centered && e.setAttribute(qd, ""),
          n.disabled && e.setAttribute(xr, "");
      }
      getRipple(e) {
        return this._hosts.get(e) || this._createRipple(e);
      }
      setDisabled(e, n) {
        let o = this._hosts.get(e);
        if (o) {
          o.disabled = n;
          return;
        }
        n ? e.setAttribute(xr, "") : e.removeAttribute(xr);
      }
      _createRipple(e) {
        if (!this._document) return;
        let n = this._hosts.get(e);
        if (n) return n;
        e.querySelector(".mat-ripple")?.remove();
        let o = this._document.createElement("span");
        o.classList.add("mat-ripple", e.getAttribute(Es)), e.append(o);
        let a = new Kd(
          new T(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(qd)),
          (a.disabled = e.hasAttribute(xr)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, n) {
        e.removeAttribute(Ds), this._hosts.set(e, n);
      }
      destroyRipple(e) {
        let n = this._hosts.get(e);
        n && (n.ngOnDestroy(), this._hosts.delete(e));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var As = class {
    constructor(t) {
      (this._box = t),
        (this._destroyed = new k()),
        (this._resizeSubject = new k()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((r) =>
            this._resizeSubject.next(r)
          ));
    }
    observe(t) {
      return (
        this._elementObservables.has(t) ||
          this._elementObservables.set(
            t,
            new we((r) => {
              let e = this._resizeSubject.subscribe(r);
              return (
                this._resizeObserver?.observe(t, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(t),
                    e.unsubscribe(),
                    this._elementObservables.delete(t);
                }
              );
            }).pipe(
              rt((r) => r.some((e) => e.target === t)),
              Qr({ bufferSize: 1, refCount: !0 }),
              bt(this._destroyed)
            )
          ),
        this._elementObservables.get(t)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  Jd = (() => {
    let t = class t {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = b(w)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(e, n) {
        let o = n?.box || "content-box";
        return (
          this._observers.has(o) || this._observers.set(o, new As(o)),
          this._observers.get(o).observe(e)
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var pg = ["notch"],
  gg = ["matFormFieldNotchedOutline", ""],
  bg = ["*"],
  vg = ["textField"],
  _g = ["iconPrefixContainer"],
  yg = ["textPrefixContainer"],
  xg = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  wg = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function Cg(i, t) {
  i & 1 && P(0, "span", 17);
}
function Dg(i, t) {
  if (
    (i & 1 && (h(0, "label", 16), U(1, 1), B(2, Cg, 1, 0, "span", 17), p()),
    i & 2)
  ) {
    let r = tt(2);
    ot("floating", r._shouldLabelFloat())("monitorResize", r._hasOutline())(
      "id",
      r._labelId
    ),
      it("for", r._control.disableAutomaticLabeling ? null : r._control.id),
      x(2),
      ht(2, !r.hideRequiredMarker && r._control.required ? 2 : -1);
  }
}
function Eg(i, t) {
  if ((i & 1 && B(0, Dg, 3, 5, "label", 16), i & 2)) {
    let r = tt();
    ht(0, r._hasFloatingLabel() ? 0 : -1);
  }
}
function Ig(i, t) {
  i & 1 && P(0, "div", 5);
}
function Mg(i, t) {}
function Sg(i, t) {
  if ((i & 1 && B(0, Mg, 0, 0, "ng-template", 11), i & 2)) {
    tt(2);
    let r = na(1);
    ot("ngTemplateOutlet", r);
  }
}
function Ag(i, t) {
  if ((i & 1 && (h(0, "div", 7), B(1, Sg, 1, 1, null, 11), p()), i & 2)) {
    let r = tt();
    ot("matFormFieldNotchedOutlineOpen", r._shouldLabelFloat()),
      x(),
      ht(1, r._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function Rg(i, t) {
  i & 1 && (h(0, "div", 8, 2), U(2, 2), p());
}
function kg(i, t) {
  i & 1 && (h(0, "div", 9, 3), U(2, 3), p());
}
function Og(i, t) {}
function Tg(i, t) {
  if ((i & 1 && B(0, Og, 0, 0, "ng-template", 11), i & 2)) {
    tt();
    let r = na(1);
    ot("ngTemplateOutlet", r);
  }
}
function Fg(i, t) {
  i & 1 && (h(0, "div", 12), U(1, 4), p());
}
function Pg(i, t) {
  i & 1 && (h(0, "div", 13), U(1, 5), p());
}
function Ng(i, t) {
  i & 1 && P(0, "div", 14);
}
function Lg(i, t) {
  if ((i & 1 && (h(0, "div", 18), U(1, 6), p()), i & 2)) {
    let r = tt();
    ot("@transitionMessages", r._subscriptAnimationState);
  }
}
function jg(i, t) {
  if ((i & 1 && (h(0, "mat-hint", 20), C(1), p()), i & 2)) {
    let r = tt(2);
    ot("id", r._hintLabelId), x(), ut(r.hintLabel);
  }
}
function Vg(i, t) {
  if (
    (i & 1 &&
      (h(0, "div", 19),
      B(1, jg, 2, 2, "mat-hint", 20),
      U(2, 7),
      P(3, "div", 21),
      U(4, 8),
      p()),
    i & 2)
  ) {
    let r = tt();
    ot("@transitionMessages", r._subscriptAnimationState),
      x(),
      ht(1, r.hintLabel ? 1 : -1);
  }
}
var Er = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = R({ type: t, selectors: [["mat-label"]], standalone: !0 }));
  let i = t;
  return i;
})();
var zg = new _("MatError");
var Bg = 0,
  tu = (() => {
    let t = class t {
      constructor() {
        (this.align = "start"), (this.id = `mat-mdc-hint-${Bg++}`);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["mat-hint"]],
        hostAttrs: [
          1,
          "mat-mdc-form-field-hint",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            (Je("id", o.id),
            it("align", null),
            G("mat-mdc-form-field-hint-end", o.align === "end"));
        },
        inputs: { align: "align", id: "id" },
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Ug = new _("MatPrefix");
var Hg = new _("MatSuffix");
var cu = new _("FloatingLabelParent"),
  eu = (() => {
    let t = class t {
      get floating() {
        return this._floating;
      }
      set floating(e) {
        (this._floating = e), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(e) {
        (this._monitorResize = e),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(e) {
        (this._elementRef = e),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = b(Jd)),
          (this._ngZone = b(w)),
          (this._parent = b(cu)),
          (this._resizeSubscription = new Kt());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return $g(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["label", "matFormFieldFloatingLabel", ""]],
        hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && G("mdc-floating-label--float-above", o.floating);
        },
        inputs: { floating: "floating", monitorResize: "monitorResize" },
        standalone: !0,
      }));
    let i = t;
    return i;
  })();
function $g(i) {
  let t = i;
  if (t.offsetParent !== null) return t.scrollWidth;
  let r = t.cloneNode(!0);
  r.style.setProperty("position", "absolute"),
    r.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(r);
  let e = r.scrollWidth;
  return r.remove(), e;
}
var iu = "mdc-line-ripple--active",
  Dr = "mdc-line-ripple--deactivating",
  nu = (() => {
    let t = class t {
      constructor(e, n) {
        (this._elementRef = e),
          (this._handleTransitionEnd = (o) => {
            let a = this._elementRef.nativeElement.classList,
              s = a.contains(Dr);
            o.propertyName === "opacity" && s && a.remove(iu, Dr);
          }),
          n.runOutsideAngular(() => {
            e.nativeElement.addEventListener(
              "transitionend",
              this._handleTransitionEnd
            );
          });
      }
      activate() {
        let e = this._elementRef.nativeElement.classList;
        e.remove(Dr), e.add(iu);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(Dr);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          "transitionend",
          this._handleTransitionEnd
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(w));
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["div", "matFormFieldLineRipple", ""]],
        hostAttrs: [1, "mdc-line-ripple"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  ou = (() => {
    let t = class t {
      constructor(e, n) {
        (this._elementRef = e), (this._ngZone = n), (this.open = !1);
      }
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label"
        );
        e
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded"
            ),
            typeof requestAnimationFrame == "function" &&
              ((e.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (e.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label"
            );
      }
      _setNotchWidth(e) {
        !this.open || !e
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(w));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["div", "matFormFieldNotchedOutline", ""]],
        viewQuery: function (n, o) {
          if ((n & 1 && yt(pg, 5), n & 2)) {
            let a;
            K((a = Q())) && (o._notch = a.first);
          }
        },
        hostAttrs: [1, "mdc-notched-outline"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && G("mdc-notched-outline--notched", o.open);
        },
        inputs: { open: [N.None, "matFormFieldNotchedOutlineOpen", "open"] },
        standalone: !0,
        features: [J],
        attrs: gg,
        ngContentSelectors: bg,
        decls: 5,
        vars: 0,
        consts: [
          ["notch", ""],
          [1, "mdc-notched-outline__leading"],
          [1, "mdc-notched-outline__notch"],
          [1, "mdc-notched-outline__trailing"],
        ],
        template: function (n, o) {
          n & 1 &&
            (vt(),
            P(0, "div", 1),
            h(1, "div", 2, 0),
            U(3),
            p(),
            P(4, "div", 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Wg = {
    transitionMessages: ii("transitionMessages", [
      Ae("enter", Tt({ opacity: 1, transform: "translateY(0%)" })),
      pe("void => enter", [
        Tt({ opacity: 0, transform: "translateY(-5px)" }),
        fe("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  Rs = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({ type: t }));
    let i = t;
    return i;
  })();
var ks = new _("MatFormField"),
  Gg = new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  ru = 0,
  au = "fill",
  Yg = "auto",
  su = "fixed",
  qg = "translateY(-50%)",
  Yi = (() => {
    let t = class t {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(e) {
        this._hideRequiredMarker = ri(e);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || Yg;
      }
      set floatLabel(e) {
        e !== this._floatLabel &&
          ((this._floatLabel = e), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(e) {
        let n = this._appearance,
          o = e || this._defaults?.appearance || au;
        (this._appearance = o),
          this._appearance === "outline" &&
            this._appearance !== n &&
            (this._needsOutlineLabelOffsetUpdateOnStable = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || su;
      }
      set subscriptSizing(e) {
        this._subscriptSizing = e || this._defaults?.subscriptSizing || su;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(e) {
        (this._hintLabel = e), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(e) {
        this._explicitFormFieldControl = e;
      }
      constructor(e, n, o, a, s, c, l, d) {
        (this._elementRef = e),
          (this._changeDetectorRef = n),
          (this._ngZone = o),
          (this._dir = a),
          (this._platform = s),
          (this._defaults = c),
          (this._animationMode = l),
          (this._hideRequiredMarker = !1),
          (this.color = "primary"),
          (this._appearance = au),
          (this._subscriptSizing = null),
          (this._hintLabel = ""),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${ru++}`),
          (this._hintLabelId = `mat-mdc-hint-${ru++}`),
          (this._subscriptAnimationState = ""),
          (this._destroyed = new k()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdateOnStable = !1),
          c &&
            (c.appearance && (this.appearance = c.appearance),
            (this._hideRequiredMarker = !!c?.hideRequiredMarker),
            c.color && (this.color = c.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = "enter"),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl();
      }
      ngOnDestroy() {
        this._destroyed.next(), this._destroyed.complete();
      }
      getLabelId() {
        return this._hasFloatingLabel() ? this._labelId : null;
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl() {
        let e = this._control;
        e.controlType &&
          this._elementRef.nativeElement.classList.add(
            `mat-mdc-form-field-type-${e.controlType}`
          ),
          e.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          }),
          e.ngControl &&
            e.ngControl.valueChanges &&
            e.ngControl.valueChanges
              .pipe(bt(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck());
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((e) => !e._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((e) => e._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (e) => !e._isText
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((e) => e._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          bi(
            this._prefixChildren.changes,
            this._suffixChildren.changes
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdateOnStable = !0)
        ),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(bt(this._destroyed)).subscribe(() => {
              this._needsOutlineLabelOffsetUpdateOnStable &&
                ((this._needsOutlineLabelOffsetUpdateOnStable = !1),
                this._updateOutlineLabelOffset());
            });
          }),
          this._dir.change
            .pipe(bt(this._destroyed))
            .subscribe(
              () => (this._needsOutlineLabelOffsetUpdateOnStable = !0)
            );
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _hasFloatingLabel() {
        return !!this._labelChildNonStatic || !!this._labelChildStatic;
      }
      _shouldLabelFloat() {
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
      }
      _shouldForward(e) {
        let n = this._control ? this._control.ngControl : null;
        return n && n[e];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth()
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let e = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              e.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let n = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "start")
                : null,
              o = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "end")
                : null;
            n ? e.push(n.id) : this._hintLabel && e.push(this._hintLabelId),
              o && e.push(o.id);
          } else
            this._errorChildren &&
              e.push(...this._errorChildren.map((n) => n.id));
          this._control.setDescribedByIds(e);
        }
      }
      _updateOutlineLabelOffset() {
        if (
          !this._platform.isBrowser ||
          !this._hasOutline() ||
          !this._floatingLabel
        )
          return;
        let e = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          e.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdateOnStable = !0;
          return;
        }
        let n = this._iconPrefixContainer?.nativeElement,
          o = this._textPrefixContainer?.nativeElement,
          a = n?.getBoundingClientRect().width ?? 0,
          s = o?.getBoundingClientRect().width ?? 0,
          c = this._dir.value === "rtl" ? "-1" : "1",
          l = `${a + s}px`,
          f = `calc(${c} * (${l} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${qg} translateX(${f})
    )`;
      }
      _isAttachedToDom() {
        let e = this._elementRef.nativeElement;
        if (e.getRootNode) {
          let n = e.getRootNode();
          return n && n !== e;
        }
        return document.documentElement.contains(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(T),
        u(wt),
        u(w),
        u(ui),
        u(z),
        u(Gg, 8),
        u(mt, 8),
        u(E)
      );
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-form-field"]],
        contentQueries: function (n, o, a) {
          if (
            (n & 1 &&
              (Vt(a, Er, 5),
              Vt(a, Er, 7),
              Vt(a, Rs, 5),
              Vt(a, Ug, 5),
              Vt(a, Hg, 5),
              Vt(a, zg, 5),
              Vt(a, tu, 5)),
            n & 2)
          ) {
            let s;
            K((s = Q())) && (o._labelChildNonStatic = s.first),
              K((s = Q())) && (o._labelChildStatic = s.first),
              K((s = Q())) && (o._formFieldControl = s.first),
              K((s = Q())) && (o._prefixChildren = s),
              K((s = Q())) && (o._suffixChildren = s),
              K((s = Q())) && (o._errorChildren = s),
              K((s = Q())) && (o._hintChildren = s);
          }
        },
        viewQuery: function (n, o) {
          if (
            (n & 1 &&
              (yt(vg, 5),
              yt(_g, 5),
              yt(yg, 5),
              yt(eu, 5),
              yt(ou, 5),
              yt(nu, 5)),
            n & 2)
          ) {
            let a;
            K((a = Q())) && (o._textField = a.first),
              K((a = Q())) && (o._iconPrefixContainer = a.first),
              K((a = Q())) && (o._textPrefixContainer = a.first),
              K((a = Q())) && (o._floatingLabel = a.first),
              K((a = Q())) && (o._notchedOutline = a.first),
              K((a = Q())) && (o._lineRipple = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-form-field"],
        hostVars: 42,
        hostBindings: function (n, o) {
          n & 2 &&
            G("mat-mdc-form-field-label-always-float", o._shouldAlwaysFloat())(
              "mat-mdc-form-field-has-icon-prefix",
              o._hasIconPrefix
            )("mat-mdc-form-field-has-icon-suffix", o._hasIconSuffix)(
              "mat-form-field-invalid",
              o._control.errorState
            )("mat-form-field-disabled", o._control.disabled)(
              "mat-form-field-autofilled",
              o._control.autofilled
            )(
              "mat-form-field-no-animations",
              o._animationMode === "NoopAnimations"
            )("mat-form-field-appearance-fill", o.appearance == "fill")(
              "mat-form-field-appearance-outline",
              o.appearance == "outline"
            )(
              "mat-form-field-hide-placeholder",
              o._hasFloatingLabel() && !o._shouldLabelFloat()
            )("mat-focused", o._control.focused)(
              "mat-primary",
              o.color !== "accent" && o.color !== "warn"
            )("mat-accent", o.color === "accent")(
              "mat-warn",
              o.color === "warn"
            )("ng-untouched", o._shouldForward("untouched"))(
              "ng-touched",
              o._shouldForward("touched")
            )("ng-pristine", o._shouldForward("pristine"))(
              "ng-dirty",
              o._shouldForward("dirty")
            )("ng-valid", o._shouldForward("valid"))(
              "ng-invalid",
              o._shouldForward("invalid")
            )("ng-pending", o._shouldForward("pending"));
        },
        inputs: {
          hideRequiredMarker: "hideRequiredMarker",
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          subscriptSizing: "subscriptSizing",
          hintLabel: "hintLabel",
        },
        exportAs: ["matFormField"],
        standalone: !0,
        features: [
          _t([
            { provide: ks, useExisting: t },
            { provide: cu, useExisting: t },
          ]),
          J,
        ],
        ngContentSelectors: wg,
        decls: 18,
        vars: 21,
        consts: [
          ["labelTemplate", ""],
          ["textField", ""],
          ["iconPrefixContainer", ""],
          ["textPrefixContainer", ""],
          [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
          [1, "mat-mdc-form-field-focus-overlay"],
          [1, "mat-mdc-form-field-flex"],
          [
            "matFormFieldNotchedOutline",
            "",
            3,
            "matFormFieldNotchedOutlineOpen",
          ],
          [1, "mat-mdc-form-field-icon-prefix"],
          [1, "mat-mdc-form-field-text-prefix"],
          [1, "mat-mdc-form-field-infix"],
          [3, "ngTemplateOutlet"],
          [1, "mat-mdc-form-field-text-suffix"],
          [1, "mat-mdc-form-field-icon-suffix"],
          ["matFormFieldLineRipple", ""],
          [
            1,
            "mat-mdc-form-field-subscript-wrapper",
            "mat-mdc-form-field-bottom-align",
          ],
          [
            "matFormFieldFloatingLabel",
            "",
            3,
            "floating",
            "monitorResize",
            "id",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-form-field-required-marker",
            "mdc-floating-label--required",
          ],
          [1, "mat-mdc-form-field-error-wrapper"],
          [1, "mat-mdc-form-field-hint-wrapper"],
          [3, "id"],
          [1, "mat-mdc-form-field-hint-spacer"],
        ],
        template: function (n, o) {
          if (n & 1) {
            let a = me();
            vt(xg),
              B(0, Eg, 1, 1, "ng-template", null, 0, xc),
              h(2, "div", 4, 1),
              V("click", function (c) {
                return Lt(a), jt(o._control.onContainerClick(c));
              }),
              B(4, Ig, 1, 0, "div", 5),
              h(5, "div", 6),
              B(6, Ag, 2, 2, "div", 7)(7, Rg, 3, 0, "div", 8)(
                8,
                kg,
                3,
                0,
                "div",
                9
              ),
              h(9, "div", 10),
              B(10, Tg, 1, 1, null, 11),
              U(11),
              p(),
              B(12, Fg, 2, 0, "div", 12)(13, Pg, 2, 0, "div", 13),
              p(),
              B(14, Ng, 1, 0, "div", 14),
              p(),
              h(15, "div", 15),
              B(16, Lg, 2, 1)(17, Vg, 5, 2),
              p();
          }
          if (n & 2) {
            let a;
            x(2),
              G("mdc-text-field--filled", !o._hasOutline())(
                "mdc-text-field--outlined",
                o._hasOutline()
              )("mdc-text-field--no-label", !o._hasFloatingLabel())(
                "mdc-text-field--disabled",
                o._control.disabled
              )("mdc-text-field--invalid", o._control.errorState),
              x(2),
              ht(4, !o._hasOutline() && !o._control.disabled ? 4 : -1),
              x(2),
              ht(6, o._hasOutline() ? 6 : -1),
              x(),
              ht(7, o._hasIconPrefix ? 7 : -1),
              x(),
              ht(8, o._hasTextPrefix ? 8 : -1),
              x(2),
              ht(10, !o._hasOutline() || o._forceDisplayInfixLabel() ? 10 : -1),
              x(2),
              ht(12, o._hasTextSuffix ? 12 : -1),
              x(),
              ht(13, o._hasIconSuffix ? 13 : -1),
              x(),
              ht(14, o._hasOutline() ? -1 : 14),
              x(),
              G(
                "mat-mdc-form-field-subscript-dynamic-size",
                o.subscriptSizing === "dynamic"
              ),
              x(),
              ht(
                16,
                (a = o._getDisplayedMessages()) === "error"
                  ? 16
                  : a === "hint"
                  ? 17
                  : -1
              );
          }
        },
        dependencies: [eu, ou, Tc, nu, tu],
        styles: [
          '.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        data: { animation: [Wg.transitionMessages] },
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  qn = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Z, Se, pr, Z] }));
    let i = t;
    return i;
  })();
var Zg = new _("MAT_INPUT_VALUE_ACCESSOR"),
  Xg = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  Kg = 0,
  qi = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = ri(e)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(e) {
        this._id = e || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(tr.required) ??
          !1
        );
      }
      set required(e) {
        this._required = ri(e);
      }
      get type() {
        return this._type;
      }
      set type(e) {
        (this._type = e || "text"),
          this._validateType(),
          !this._isTextarea &&
            us().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type);
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(e) {
        e !== this.value &&
          ((this._inputValueAccessor.value = e), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(e) {
        this._readonly = ri(e);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      constructor(e, n, o, a, s, c, l, d, f, y) {
        (this._elementRef = e),
          (this._platform = n),
          (this.ngControl = o),
          (this._autofillMonitor = d),
          (this._formField = y),
          (this._uid = `mat-input-${Kg++}`),
          (this.focused = !1),
          (this.stateChanges = new k()),
          (this.controlType = "mat-input"),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = "text"),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
          ].filter(($) => us().has($))),
          (this._iOSKeyupListener = ($) => {
            let j = $.target;
            !j.value &&
              j.selectionStart === 0 &&
              j.selectionEnd === 0 &&
              (j.setSelectionRange(1, 1), j.setSelectionRange(0, 0));
          });
        let A = this._elementRef.nativeElement,
          H = A.nodeName.toLowerCase();
        (this._inputValueAccessor = l || A),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          n.IOS &&
            f.runOutsideAngular(() => {
              e.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new wr(c, o, s, a, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = H === "select"),
          (this._isTextarea = H === "textarea"),
          (this._isInFormField = !!y),
          this._isNativeSelect &&
            (this.controlType = A.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select");
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((e) => {
              (this.autofilled = e.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              "keyup",
              this._iOSKeyupListener
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(e) {
        e !== this.focused && ((this.focused = e), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let e = this._elementRef.nativeElement.value;
        this._previousNativeValue !== e &&
          ((this._previousNativeValue = e), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let e = this._getPlaceholder();
        if (e !== this._previousPlaceholder) {
          let n = this._elementRef.nativeElement;
          (this._previousPlaceholder = e),
            e
              ? n.setAttribute("placeholder", e)
              : n.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        Xg.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let e = this._elementRef.nativeElement.validity;
        return e && e.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let e = this._elementRef.nativeElement,
            n = e.options[0];
          return (
            this.focused ||
            e.multiple ||
            !this.empty ||
            !!(e.selectedIndex > -1 && n && n.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(e) {
        e.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              e.join(" ")
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let e = this._elementRef.nativeElement;
        return this._isNativeSelect && (e.multiple || e.size > 1);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(T),
        u(z),
        u(si, 10),
        u(be, 8),
        u(vs, 8),
        u(Zd),
        u(Zg, 10),
        u(ed),
        u(w),
        u(ks, 8)
      );
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["input", "matInput", ""],
          ["textarea", "matInput", ""],
          ["select", "matNativeControl", ""],
          ["input", "matNativeControl", ""],
          ["textarea", "matNativeControl", ""],
        ],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 18,
        hostBindings: function (n, o) {
          n & 1 &&
            V("focus", function () {
              return o._focusChanged(!0);
            })("blur", function () {
              return o._focusChanged(!1);
            })("input", function () {
              return o._onInput();
            }),
            n & 2 &&
              (Je("id", o.id)("disabled", o.disabled)("required", o.required),
              it("name", o.name || null)(
                "readonly",
                (o.readonly && !o._isNativeSelect) || null
              )("aria-invalid", o.empty && o.required ? null : o.errorState)(
                "aria-required",
                o.required
              )("id", o.id),
              G("mat-input-server", o._isServer)(
                "mat-mdc-form-field-textarea-control",
                o._isInFormField && o._isTextarea
              )("mat-mdc-form-field-input-control", o._isInFormField)(
                "mdc-text-field__input",
                o._isInFormField
              )("mat-mdc-native-select-inline", o._isInlineSelect()));
        },
        inputs: {
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          name: "name",
          required: "required",
          type: "type",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: [
            N.None,
            "aria-describedby",
            "userAriaDescribedBy",
          ],
          value: "value",
          readonly: "readonly",
        },
        exportAs: ["matInput"],
        standalone: !0,
        features: [_t([{ provide: Rs, useExisting: t }]), Rt],
      }));
    let i = t;
    return i;
  })(),
  lu = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Z, qn, qn, id, Z] }));
    let i = t;
    return i;
  })();
var du = ["mat-button", ""],
  uu = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  mu = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ],
  Qg =
    '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
  hu =
    ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Jg = ["mat-icon-button", ""],
  tb = ["*"];
var eb = new _("MAT_BUTTON_CONFIG");
var ib = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
    {
      attribute: "mat-mini-fab",
      mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Fs = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        (this._disableRipple = e), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._updateRippleDisabled();
      }
      constructor(e, n, o, a) {
        (this._elementRef = e),
          (this._platform = n),
          (this._ngZone = o),
          (this._animationMode = a),
          (this._focusMonitor = b(Gi)),
          (this._rippleLoader = b(Qd)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = b(eb, { optional: !0 }),
          c = e.nativeElement,
          l = c.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          this._rippleLoader?.configureRipple(c, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: d, mdcClasses: f } of ib)
          c.hasAttribute(d) && l.add(...f);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = "program", n) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, n)
          : this._elementRef.nativeElement.focus(n);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
          ? !0
          : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled
        );
      }
    };
    (t.ɵfac = function (n) {
      Ke();
    }),
      (t.ɵdir = R({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [
            N.HasDecoratorInputTransform,
            "disableRipple",
            "disableRipple",
            Ct,
          ],
          disabled: [N.HasDecoratorInputTransform, "disabled", "disabled", Ct],
          ariaDisabled: [
            N.HasDecoratorInputTransform,
            "aria-disabled",
            "ariaDisabled",
            Ct,
          ],
          disabledInteractive: [
            N.HasDecoratorInputTransform,
            "disabledInteractive",
            "disabledInteractive",
            Ct,
          ],
        },
        features: [Ot],
      }));
    let i = t;
    return i;
  })();
var nb = (() => {
    let t = class t extends Fs {
      constructor(e, n, o, a) {
        super(e, n, o, a),
          (this._haltDisabledEvents = (s) => {
            this.disabled && (s.preventDefault(), s.stopImmediatePropagation());
          });
      }
      ngOnInit() {
        this._ngZone.runOutsideAngular(() => {
          this._elementRef.nativeElement.addEventListener(
            "click",
            this._haltDisabledEvents
          );
        });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._elementRef.nativeElement.removeEventListener(
            "click",
            this._haltDisabledEvents
          );
      }
      _getAriaDisabled() {
        return this.ariaDisabled == null ? this.disabled : this.ariaDisabled;
      }
    };
    (t.ɵfac = function (n) {
      Ke();
    }),
      (t.ɵdir = R({
        type: t,
        inputs: {
          tabIndex: [
            N.HasDecoratorInputTransform,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? void 0 : Ic(e)),
          ],
        },
        features: [Ot, nt],
      }));
    let i = t;
    return i;
  })(),
  Mt = (() => {
    let t = class t extends Fs {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(z), u(w), u(mt, 8));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, o) {
          n & 2 &&
            (it("disabled", o._getDisabledAttribute())(
              "aria-disabled",
              o._getAriaDisabled()
            ),
            ue(o.color ? "mat-" + o.color : ""),
            G("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [nt, J],
        attrs: du,
        ngContentSelectors: mu,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (n, o) {
          n & 1 &&
            (vt(uu),
            P(0, "span", 0),
            U(1),
            h(2, "span", 1),
            U(3, 1),
            p(),
            U(4, 2),
            P(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              G("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [
          '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  fu = (() => {
    let t = class t extends nb {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(z), u(w), u(mt, 8));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [
          ["a", "mat-button", ""],
          ["a", "mat-raised-button", ""],
          ["a", "mat-flat-button", ""],
          ["a", "mat-stroked-button", ""],
        ],
        hostVars: 15,
        hostBindings: function (n, o) {
          n & 2 &&
            (it("disabled", o._getDisabledAttribute())(
              "tabindex",
              o.disabled && !o.disabledInteractive ? -1 : o.tabIndex
            )("aria-disabled", o._getDisabledAttribute()),
            ue(o.color ? "mat-" + o.color : ""),
            G("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [nt, J],
        attrs: du,
        ngContentSelectors: mu,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (n, o) {
          n & 1 &&
            (vt(uu),
            P(0, "span", 0),
            U(1),
            h(2, "span", 1),
            U(3, 1),
            p(),
            U(4, 2),
            P(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              G("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [Qg, hu],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Ir = (() => {
  let t = class t extends Fs {
    constructor(e, n, o, a) {
      super(e, n, o, a),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(T), u(z), u(w), u(mt, 8));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["button", "mat-icon-button", ""]],
      hostVars: 14,
      hostBindings: function (n, o) {
        n & 2 &&
          (it("disabled", o._getDisabledAttribute())(
            "aria-disabled",
            o._getAriaDisabled()
          ),
          ue(o.color ? "mat-" + o.color : ""),
          G("mat-mdc-button-disabled", o.disabled)(
            "mat-mdc-button-disabled-interactive",
            o.disabledInteractive
          )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !o.color
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      standalone: !0,
      features: [nt, J],
      attrs: Jg,
      ngContentSelectors: tb,
      decls: 4,
      vars: 0,
      consts: [
        [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (n, o) {
        n & 1 && (vt(), P(0, "span", 0), U(1), P(2, "span", 1)(3, "span", 2));
      },
      styles: [
        '.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
        hu,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Mr = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ imports: [Z, Cr, Z] }));
  let i = t;
  return i;
})();
var ob = ["*"];
var rb = [
    [
      ["", "mat-card-avatar", ""],
      ["", "matCardAvatar", ""],
    ],
    [
      ["mat-card-title"],
      ["mat-card-subtitle"],
      ["", "mat-card-title", ""],
      ["", "mat-card-subtitle", ""],
      ["", "matCardTitle", ""],
      ["", "matCardSubtitle", ""],
    ],
    "*",
  ],
  ab = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  sb = new _("MAT_CARD_CONFIG"),
  St = (() => {
    let t = class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(sb, 8));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            G("mat-mdc-card-outlined", o.appearance === "outlined")(
              "mdc-card--outlined",
              o.appearance === "outlined"
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [J],
        ngContentSelectors: ob,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (vt(), U(0));
        },
        styles: [
          '.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Gt = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["mat-card-title"],
          ["", "mat-card-title", ""],
          ["", "matCardTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-title"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })();
var re = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["mat-card-content"]],
        hostAttrs: [1, "mat-mdc-card-content"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Xi = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [
          ["mat-card-subtitle"],
          ["", "mat-card-subtitle", ""],
          ["", "matCardSubtitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-subtitle"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Ki = (() => {
    let t = class t {
      constructor() {
        this.align = "start";
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && G("mat-mdc-card-actions-align-end", o.align === "end");
        },
        inputs: { align: "align" },
        exportAs: ["matCardActions"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Yt = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-mdc-card-header"],
        standalone: !0,
        features: [J],
        ngContentSelectors: ab,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-mdc-card-header-text"]],
        template: function (n, o) {
          n & 1 && (vt(rb), U(0), h(1, "div", 0), U(2, 1), p(), U(3, 2));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var pu = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ imports: [Z, Se, Z] }));
  let i = t;
  return i;
})();
var cb = 20,
  gu = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._ngZone = e),
          (this._platform = n),
          (this._scrolled = new k()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = o);
      }
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e))
          );
      }
      deregister(e) {
        let n = this.scrollContainers.get(e);
        n && (n.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = cb) {
        return this._platform.isBrowser
          ? new we((n) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                e > 0
                  ? this._scrolled.pipe(Yr(e)).subscribe(n)
                  : this._scrolled.subscribe(n);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : D();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((e, n) => this.deregister(n)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, n) {
        let o = this.getAncestorScrollContainers(e);
        return this.scrolled(n).pipe(rt((a) => !a || o.indexOf(a) > -1));
      }
      getAncestorScrollContainers(e) {
        let n = [];
        return (
          this.scrollContainers.forEach((o, a) => {
            this._scrollableContainsElement(a, e) && n.push(a);
          }),
          n
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(e, n) {
        let o = $t(n),
          a = e.getElementRef().nativeElement;
        do if (o == a) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return Gr(e.document, "scroll").subscribe(() =>
            this._scrolled.next()
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(w), m(z), m(E, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var lb = 20,
  Ps = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._platform = e),
          (this._change = new k()),
          (this._changeListener = (a) => {
            this._change.next(a);
          }),
          (this._document = o),
          n.runOutsideAngular(() => {
            if (e.isBrowser) {
              let a = this._getWindow();
              a.addEventListener("resize", this._changeListener),
                a.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let e = this._getWindow();
          e.removeEventListener("resize", this._changeListener),
            e.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: n, height: o } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + o,
          right: e.left + n,
          height: o,
          width: n,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          n = this._getWindow(),
          o = e.documentElement,
          a = o.getBoundingClientRect(),
          s = -a.top || e.body.scrollTop || n.scrollY || o.scrollTop || 0,
          c = -a.left || e.body.scrollLeft || n.scrollX || o.scrollLeft || 0;
        return { top: s, left: c };
      }
      change(e = lb) {
        return e > 0 ? this._change.pipe(Yr(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(z), m(w), m(E, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Sr = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({}));
    let i = t;
    return i;
  })(),
  Ns = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Ve, Sr, Ve, Sr] }));
    let i = t;
    return i;
  })();
var Zn = class {
    attach(t) {
      return (this._attachedHost = t), t.attach(this);
    }
    detach() {
      let t = this._attachedHost;
      t != null && ((this._attachedHost = null), t.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(t) {
      this._attachedHost = t;
    }
  },
  ve = class extends Zn {
    constructor(t, r, e, n, o) {
      super(),
        (this.component = t),
        (this.viewContainerRef = r),
        (this.injector = e),
        (this.componentFactoryResolver = n),
        (this.projectableNodes = o);
    }
  },
  ze = class extends Zn {
    constructor(t, r, e, n) {
      super(),
        (this.templateRef = t),
        (this.viewContainerRef = r),
        (this.context = e),
        (this.injector = n);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(t, r = this.context) {
      return (this.context = r), super.attach(t);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  Ls = class extends Zn {
    constructor(t) {
      super(), (this.element = t instanceof T ? t.nativeElement : t);
    }
  },
  Be = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(t) {
      if (t instanceof ve)
        return (this._attachedPortal = t), this.attachComponentPortal(t);
      if (t instanceof ze)
        return (this._attachedPortal = t), this.attachTemplatePortal(t);
      if (this.attachDomPortal && t instanceof Ls)
        return (this._attachedPortal = t), this.attachDomPortal(t);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(t) {
      this._disposeFn = t;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Ar = class extends Be {
  constructor(t, r, e, n, o) {
    super(),
      (this.outletElement = t),
      (this._componentFactoryResolver = r),
      (this._appRef = e),
      (this._defaultInjector = n),
      (this.attachDomPortal = (a) => {
        this._document;
        let s = a.element;
        s.parentNode;
        let c = this._document.createComment("dom-portal");
        s.parentNode.insertBefore(c, s),
          this.outletElement.appendChild(s),
          (this._attachedPortal = a),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(s, c);
          });
      }),
      (this._document = o);
  }
  attachComponentPortal(t) {
    let e = (
        t.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(t.component),
      n;
    return (
      t.viewContainerRef
        ? ((n = t.viewContainerRef.createComponent(
            e,
            t.viewContainerRef.length,
            t.injector || t.viewContainerRef.injector,
            t.projectableNodes || void 0
          )),
          this.setDisposeFn(() => n.destroy()))
        : ((n = e.create(t.injector || this._defaultInjector || st.NULL)),
          this._appRef.attachView(n.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(n.hostView),
              n.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(n)),
      (this._attachedPortal = t),
      n
    );
  }
  attachTemplatePortal(t) {
    let r = t.viewContainerRef,
      e = r.createEmbeddedView(t.templateRef, t.context, {
        injector: t.injector,
      });
    return (
      e.rootNodes.forEach((n) => this.outletElement.appendChild(n)),
      e.detectChanges(),
      this.setDisposeFn(() => {
        let n = r.indexOf(e);
        n !== -1 && r.remove(n);
      }),
      (this._attachedPortal = t),
      e
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(t) {
    return t.hostView.rootNodes[0];
  }
};
var Ue = (() => {
  let t = class t extends Be {
    constructor(e, n, o) {
      super(),
        (this._componentFactoryResolver = e),
        (this._viewContainerRef = n),
        (this._isInitialized = !1),
        (this.attached = new ct()),
        (this.attachDomPortal = (a) => {
          this._document;
          let s = a.element;
          s.parentNode;
          let c = this._document.createComment("dom-portal");
          a.setAttachedHost(this),
            s.parentNode.insertBefore(c, s),
            this._getRootNode().appendChild(s),
            (this._attachedPortal = a),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(s, c);
            });
        }),
        (this._document = o);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let n =
          e.viewContainerRef != null
            ? e.viewContainerRef
            : this._viewContainerRef,
        a = (
          e.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(e.component),
        s = n.createComponent(
          a,
          n.length,
          e.injector || n.injector,
          e.projectableNodes || void 0
        );
      return (
        n !== this._viewContainerRef &&
          this._getRootNode().appendChild(s.hostView.rootNodes[0]),
        super.setDisposeFn(() => s.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = s),
        this.attached.emit(s),
        s
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let n = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector }
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = n),
        this.attached.emit(n),
        n
      );
    }
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(sn), u(Qe), u(E));
  }),
    (t.ɵdir = R({
      type: t,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [N.None, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      standalone: !0,
      features: [nt],
    }));
  let i = t;
  return i;
})();
var _e = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({}));
  let i = t;
  return i;
})();
var bu = Ql(),
  js = class {
    constructor(t, r) {
      (this._viewportRuler = t),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = r);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let t = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = t.style.left || ""),
          (this._previousHTMLStyles.top = t.style.top || ""),
          (t.style.left = lt(-this._previousScrollPosition.left)),
          (t.style.top = lt(-this._previousScrollPosition.top)),
          t.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let t = this._document.documentElement,
          r = this._document.body,
          e = t.style,
          n = r.style,
          o = e.scrollBehavior || "",
          a = n.scrollBehavior || "";
        (this._isEnabled = !1),
          (e.left = this._previousHTMLStyles.left),
          (e.top = this._previousHTMLStyles.top),
          t.classList.remove("cdk-global-scrollblock"),
          bu && (e.scrollBehavior = n.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top
          ),
          bu && ((e.scrollBehavior = o), (n.scrollBehavior = a));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock"
        ) ||
        this._isEnabled
      )
        return !1;
      let r = this._document.body,
        e = this._viewportRuler.getViewportSize();
      return r.scrollHeight > e.height || r.scrollWidth > e.width;
    }
  };
var Vs = class {
    constructor(t, r, e, n) {
      (this._scrollDispatcher = t),
        (this._ngZone = r),
        (this._viewportRuler = e),
        (this._config = n),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (this._scrollSubscription) return;
      let t = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          rt(
            (r) =>
              !r ||
              !this._overlayRef.overlayElement.contains(
                r.getElementRef().nativeElement
              )
          )
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = t.subscribe(() => {
            let r = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(r - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = t.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  Rr = class {
    enable() {}
    disable() {}
    attach() {}
  };
function zs(i, t) {
  return t.some((r) => {
    let e = i.bottom < r.top,
      n = i.top > r.bottom,
      o = i.right < r.left,
      a = i.left > r.right;
    return e || n || o || a;
  });
}
function vu(i, t) {
  return t.some((r) => {
    let e = i.top < r.top,
      n = i.bottom > r.bottom,
      o = i.left < r.left,
      a = i.right > r.right;
    return e || n || o || a;
  });
}
var Bs = class {
    constructor(t, r, e, n) {
      (this._scrollDispatcher = t),
        (this._viewportRuler = r),
        (this._ngZone = e),
        (this._config = n),
        (this._scrollSubscription = null);
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (!this._scrollSubscription) {
        let t = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(t)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let r = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: e, height: n } = this._viewportRuler.getViewportSize();
              zs(r, [
                { width: e, height: n, bottom: n, right: e, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  ub = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this._scrollDispatcher = e),
          (this._viewportRuler = n),
          (this._ngZone = o),
          (this.noop = () => new Rr()),
          (this.close = (s) =>
            new Vs(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              s
            )),
          (this.block = () => new js(this._viewportRuler, this._document)),
          (this.reposition = (s) =>
            new Bs(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              s
            )),
          (this._document = a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(gu), m(Ps), m(w), m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  He = class {
    constructor(t) {
      if (
        ((this.scrollStrategy = new Rr()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        t)
      ) {
        let r = Object.keys(t);
        for (let e of r) t[e] !== void 0 && (this[e] = t[e]);
      }
    }
  };
var Us = class {
  constructor(t, r) {
    (this.connectionPair = t), (this.scrollableViewProperties = r);
  }
};
var Cu = (() => {
    let t = class t {
      constructor(e) {
        (this._attachedOverlays = []), (this._document = e);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let n = this._attachedOverlays.indexOf(e);
        n > -1 && this._attachedOverlays.splice(n, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  mb = (() => {
    let t = class t extends Cu {
      constructor(e, n) {
        super(e),
          (this._ngZone = n),
          (this._keydownListener = (o) => {
            let a = this._attachedOverlays;
            for (let s = a.length - 1; s > -1; s--)
              if (a[s]._keydownEvents.observers.length > 0) {
                let c = a[s]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(o)) : c.next(o);
                break;
              }
          });
      }
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  )
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener
          ),
          (this._isAttached = !1));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E), m(w, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  hb = (() => {
    let t = class t extends Cu {
      constructor(e, n, o) {
        super(e),
          (this._platform = n),
          (this._ngZone = o),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (a) => {
            this._pointerDownEventTarget = Qt(a);
          }),
          (this._clickListener = (a) => {
            let s = Qt(a),
              c =
                a.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : s;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let d = l.length - 1; d > -1; d--) {
              let f = l[d];
              if (
                f._outsidePointerEvents.observers.length < 1 ||
                !f.hasAttached()
              )
                continue;
              if (f.overlayElement.contains(s) || f.overlayElement.contains(c))
                break;
              let y = f._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => y.next(a)) : y.next(a);
            }
          });
      }
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let n = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(n))
            : this._addEventListeners(n),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = n.style.cursor),
              (n.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let e = this._document.body;
          e.removeEventListener("pointerdown", this._pointerDownListener, !0),
            e.removeEventListener("click", this._clickListener, !0),
            e.removeEventListener("auxclick", this._clickListener, !0),
            e.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((e.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(e) {
        e.addEventListener("pointerdown", this._pointerDownListener, !0),
          e.addEventListener("click", this._clickListener, !0),
          e.addEventListener("auxclick", this._clickListener, !0),
          e.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E), m(z), m(w, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Qi = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = n), (this._document = e);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || Bn()) {
          let o = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`
          );
          for (let a = 0; a < o.length; a++) o[a].remove();
        }
        let n = this._document.createElement("div");
        n.classList.add(e),
          Bn()
            ? n.setAttribute("platform", "test")
            : this._platform.isBrowser || n.setAttribute("platform", "server"),
          this._document.body.appendChild(n),
          (this._containerElement = n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(E), m(z));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  ye = class {
    constructor(t, r, e, n, o, a, s, c, l, d = !1) {
      (this._portalOutlet = t),
        (this._host = r),
        (this._pane = e),
        (this._config = n),
        (this._ngZone = o),
        (this._keyboardDispatcher = a),
        (this._document = s),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = d),
        (this._backdropElement = null),
        (this._backdropClick = new k()),
        (this._attachments = new k()),
        (this._detachments = new k()),
        (this._locationChanges = Kt.EMPTY),
        (this._backdropClickHandler = (f) => this._backdropClick.next(f)),
        (this._backdropTransitionendHandler = (f) => {
          this._disposeBackdrop(f.target);
        }),
        (this._keydownEvents = new k()),
        (this._outsidePointerEvents = new k()),
        n.scrollStrategy &&
          ((this._scrollStrategy = n.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = n.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(t) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let r = this._portalOutlet.attach(t);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(dt(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose()
          )),
        this._outsideClickDispatcher.add(this),
        typeof r?.onDestroy == "function" &&
          r.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach())
              );
          }),
        r
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let t = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        t
      );
    }
    dispose() {
      let t = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        t && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(t) {
      t !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = t),
        this.hasAttached() && (t.attach(this), this.updatePosition()));
    }
    updateSize(t) {
      (this._config = g(g({}, this._config), t)), this._updateElementSize();
    }
    setDirection(t) {
      (this._config = X(g({}, this._config), { direction: t })),
        this._updateElementDirection();
    }
    addPanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !0);
    }
    removePanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !1);
    }
    getDirection() {
      let t = this._config.direction;
      return t ? (typeof t == "string" ? t : t.value) : "ltr";
    }
    updateScrollStrategy(t) {
      t !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = t),
        this.hasAttached() && (t.attach(this), t.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let t = this._pane.style;
      (t.width = lt(this._config.width)),
        (t.height = lt(this._config.height)),
        (t.minWidth = lt(this._config.minWidth)),
        (t.minHeight = lt(this._config.minHeight)),
        (t.maxWidth = lt(this._config.maxWidth)),
        (t.maxHeight = lt(this._config.maxHeight));
    }
    _togglePointerEvents(t) {
      this._pane.style.pointerEvents = t ? "" : "none";
    }
    _attachBackdrop() {
      let t = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation"
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(t);
              });
            })
          : this._backdropElement.classList.add(t);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let t = this._backdropElement;
      if (t) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(t);
          return;
        }
        t.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            );
          }),
          (t.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(t);
            }, 500)
          ));
      }
    }
    _toggleClasses(t, r, e) {
      let n = Vi(r || []).filter((o) => !!o);
      n.length && (e ? t.classList.add(...n) : t.classList.remove(...n));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let t = this._ngZone.onStable
          .pipe(bt(bi(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              t.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let t = this._scrollStrategy;
      t && (t.disable(), t.detach && t.detach());
    }
    _disposeBackdrop(t) {
      t &&
        (t.removeEventListener("click", this._backdropClickHandler),
        t.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler
        ),
        t.remove(),
        this._backdropElement === t && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  _u = "cdk-overlay-connected-position-bounding-box",
  fb = /([A-Za-z%]+)$/,
  Hs = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(t, r, e, n, o) {
      (this._viewportRuler = r),
        (this._document = e),
        (this._platform = n),
        (this._overlayContainer = o),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new k()),
        (this._resizeSubscription = Kt.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(t);
    }
    attach(t) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        t.hostElement.classList.add(_u),
        (this._overlayRef = t),
        (this._boundingBox = t.hostElement),
        (this._pane = t.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let t = this._originRect,
        r = this._overlayRect,
        e = this._viewportRect,
        n = this._containerRect,
        o = [],
        a;
      for (let s of this._preferredPositions) {
        let c = this._getOriginPoint(t, n, s),
          l = this._getOverlayPoint(c, r, s),
          d = this._getOverlayFit(l, r, e, s);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(s, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, l, e)) {
          o.push({
            position: s,
            origin: c,
            overlayRect: r,
            boundingBoxRect: this._calculateBoundingBoxRect(c, s),
          });
          continue;
        }
        (!a || a.overlayFit.visibleArea < d.visibleArea) &&
          (a = {
            overlayFit: d,
            overlayPoint: l,
            originPoint: c,
            position: s,
            overlayRect: r,
          });
      }
      if (o.length) {
        let s = null,
          c = -1;
        for (let l of o) {
          let d =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          d > c && ((c = d), (s = l));
        }
        (this._isPushed = !1), this._applyPosition(s.position, s.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(a.position, a.originPoint);
        return;
      }
      this._applyPosition(a.position, a.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          hi(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(_u),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let t = this._lastPosition;
      if (t) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let r = this._getOriginPoint(this._originRect, this._containerRect, t);
        this._applyPosition(t, r);
      } else this.apply();
    }
    withScrollableContainers(t) {
      return (this._scrollables = t), this;
    }
    withPositions(t) {
      return (
        (this._preferredPositions = t),
        t.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(t) {
      return (this._viewportMargin = t), this;
    }
    withFlexibleDimensions(t = !0) {
      return (this._hasFlexibleDimensions = t), this;
    }
    withGrowAfterOpen(t = !0) {
      return (this._growAfterOpen = t), this;
    }
    withPush(t = !0) {
      return (this._canPush = t), this;
    }
    withLockedPosition(t = !0) {
      return (this._positionLocked = t), this;
    }
    setOrigin(t) {
      return (this._origin = t), this;
    }
    withDefaultOffsetX(t) {
      return (this._offsetX = t), this;
    }
    withDefaultOffsetY(t) {
      return (this._offsetY = t), this;
    }
    withTransformOriginOn(t) {
      return (this._transformOriginSelector = t), this;
    }
    _getOriginPoint(t, r, e) {
      let n;
      if (e.originX == "center") n = t.left + t.width / 2;
      else {
        let a = this._isRtl() ? t.right : t.left,
          s = this._isRtl() ? t.left : t.right;
        n = e.originX == "start" ? a : s;
      }
      r.left < 0 && (n -= r.left);
      let o;
      return (
        e.originY == "center"
          ? (o = t.top + t.height / 2)
          : (o = e.originY == "top" ? t.top : t.bottom),
        r.top < 0 && (o -= r.top),
        { x: n, y: o }
      );
    }
    _getOverlayPoint(t, r, e) {
      let n;
      e.overlayX == "center"
        ? (n = -r.width / 2)
        : e.overlayX === "start"
        ? (n = this._isRtl() ? -r.width : 0)
        : (n = this._isRtl() ? 0 : -r.width);
      let o;
      return (
        e.overlayY == "center"
          ? (o = -r.height / 2)
          : (o = e.overlayY == "top" ? 0 : -r.height),
        { x: t.x + n, y: t.y + o }
      );
    }
    _getOverlayFit(t, r, e, n) {
      let o = xu(r),
        { x: a, y: s } = t,
        c = this._getOffset(n, "x"),
        l = this._getOffset(n, "y");
      c && (a += c), l && (s += l);
      let d = 0 - a,
        f = a + o.width - e.width,
        y = 0 - s,
        A = s + o.height - e.height,
        H = this._subtractOverflows(o.width, d, f),
        $ = this._subtractOverflows(o.height, y, A),
        j = H * $;
      return {
        visibleArea: j,
        isCompletelyWithinViewport: o.width * o.height === j,
        fitsInViewportVertically: $ === o.height,
        fitsInViewportHorizontally: H == o.width,
      };
    }
    _canFitWithFlexibleDimensions(t, r, e) {
      if (this._hasFlexibleDimensions) {
        let n = e.bottom - r.y,
          o = e.right - r.x,
          a = yu(this._overlayRef.getConfig().minHeight),
          s = yu(this._overlayRef.getConfig().minWidth),
          c = t.fitsInViewportVertically || (a != null && a <= n),
          l = t.fitsInViewportHorizontally || (s != null && s <= o);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(t, r, e) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: t.x + this._previousPushAmount.x,
          y: t.y + this._previousPushAmount.y,
        };
      let n = xu(r),
        o = this._viewportRect,
        a = Math.max(t.x + n.width - o.width, 0),
        s = Math.max(t.y + n.height - o.height, 0),
        c = Math.max(o.top - e.top - t.y, 0),
        l = Math.max(o.left - e.left - t.x, 0),
        d = 0,
        f = 0;
      return (
        n.width <= o.width
          ? (d = l || -a)
          : (d = t.x < this._viewportMargin ? o.left - e.left - t.x : 0),
        n.height <= o.height
          ? (f = c || -s)
          : (f = t.y < this._viewportMargin ? o.top - e.top - t.y : 0),
        (this._previousPushAmount = { x: d, y: f }),
        { x: t.x + d, y: t.y + f }
      );
    }
    _applyPosition(t, r) {
      if (
        (this._setTransformOrigin(t),
        this._setOverlayElementStyles(r, t),
        this._setBoundingBoxStyles(r, t),
        t.panelClass && this._addPanelClasses(t.panelClass),
        this._positionChanges.observers.length)
      ) {
        let e = this._getScrollVisibility();
        if (
          t !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !pb(this._lastScrollVisibility, e)
        ) {
          let n = new Us(t, e);
          this._positionChanges.next(n);
        }
        this._lastScrollVisibility = e;
      }
      (this._lastPosition = t), (this._isInitialRender = !1);
    }
    _setTransformOrigin(t) {
      if (!this._transformOriginSelector) return;
      let r = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        e,
        n = t.overlayY;
      t.overlayX === "center"
        ? (e = "center")
        : this._isRtl()
        ? (e = t.overlayX === "start" ? "right" : "left")
        : (e = t.overlayX === "start" ? "left" : "right");
      for (let o = 0; o < r.length; o++)
        r[o].style.transformOrigin = `${e} ${n}`;
    }
    _calculateBoundingBoxRect(t, r) {
      let e = this._viewportRect,
        n = this._isRtl(),
        o,
        a,
        s;
      if (r.overlayY === "top")
        (a = t.y), (o = e.height - a + this._viewportMargin);
      else if (r.overlayY === "bottom")
        (s = e.height - t.y + this._viewportMargin * 2),
          (o = e.height - s + this._viewportMargin);
      else {
        let A = Math.min(e.bottom - t.y + e.top, t.y),
          H = this._lastBoundingBoxSize.height;
        (o = A * 2),
          (a = t.y - A),
          o > H &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (a = t.y - H / 2);
      }
      let c = (r.overlayX === "start" && !n) || (r.overlayX === "end" && n),
        l = (r.overlayX === "end" && !n) || (r.overlayX === "start" && n),
        d,
        f,
        y;
      if (l)
        (y = e.width - t.x + this._viewportMargin * 2),
          (d = t.x - this._viewportMargin);
      else if (c) (f = t.x), (d = e.right - t.x);
      else {
        let A = Math.min(e.right - t.x + e.left, t.x),
          H = this._lastBoundingBoxSize.width;
        (d = A * 2),
          (f = t.x - A),
          d > H &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (f = t.x - H / 2);
      }
      return { top: a, left: f, bottom: s, right: y, width: d, height: o };
    }
    _setBoundingBoxStyles(t, r) {
      let e = this._calculateBoundingBoxRect(t, r);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((e.height = Math.min(e.height, this._lastBoundingBoxSize.height)),
        (e.width = Math.min(e.width, this._lastBoundingBoxSize.width)));
      let n = {};
      if (this._hasExactPosition())
        (n.top = n.left = "0"),
          (n.bottom = n.right = n.maxHeight = n.maxWidth = ""),
          (n.width = n.height = "100%");
      else {
        let o = this._overlayRef.getConfig().maxHeight,
          a = this._overlayRef.getConfig().maxWidth;
        (n.height = lt(e.height)),
          (n.top = lt(e.top)),
          (n.bottom = lt(e.bottom)),
          (n.width = lt(e.width)),
          (n.left = lt(e.left)),
          (n.right = lt(e.right)),
          r.overlayX === "center"
            ? (n.alignItems = "center")
            : (n.alignItems = r.overlayX === "end" ? "flex-end" : "flex-start"),
          r.overlayY === "center"
            ? (n.justifyContent = "center")
            : (n.justifyContent =
                r.overlayY === "bottom" ? "flex-end" : "flex-start"),
          o && (n.maxHeight = lt(o)),
          a && (n.maxWidth = lt(a));
      }
      (this._lastBoundingBoxSize = e), hi(this._boundingBox.style, n);
    }
    _resetBoundingBoxStyles() {
      hi(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      hi(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(t, r) {
      let e = {},
        n = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        a = this._overlayRef.getConfig();
      if (n) {
        let d = this._viewportRuler.getViewportScrollPosition();
        hi(e, this._getExactOverlayY(r, t, d)),
          hi(e, this._getExactOverlayX(r, t, d));
      } else e.position = "static";
      let s = "",
        c = this._getOffset(r, "x"),
        l = this._getOffset(r, "y");
      c && (s += `translateX(${c}px) `),
        l && (s += `translateY(${l}px)`),
        (e.transform = s.trim()),
        a.maxHeight &&
          (n ? (e.maxHeight = lt(a.maxHeight)) : o && (e.maxHeight = "")),
        a.maxWidth &&
          (n ? (e.maxWidth = lt(a.maxWidth)) : o && (e.maxWidth = "")),
        hi(this._pane.style, e);
    }
    _getExactOverlayY(t, r, e) {
      let n = { top: "", bottom: "" },
        o = this._getOverlayPoint(r, this._overlayRect, t);
      if (
        (this._isPushed &&
          (o = this._pushOverlayOnScreen(o, this._overlayRect, e)),
        t.overlayY === "bottom")
      ) {
        let a = this._document.documentElement.clientHeight;
        n.bottom = `${a - (o.y + this._overlayRect.height)}px`;
      } else n.top = lt(o.y);
      return n;
    }
    _getExactOverlayX(t, r, e) {
      let n = { left: "", right: "" },
        o = this._getOverlayPoint(r, this._overlayRect, t);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, e));
      let a;
      if (
        (this._isRtl()
          ? (a = t.overlayX === "end" ? "left" : "right")
          : (a = t.overlayX === "end" ? "right" : "left"),
        a === "right")
      ) {
        let s = this._document.documentElement.clientWidth;
        n.right = `${s - (o.x + this._overlayRect.width)}px`;
      } else n.left = lt(o.x);
      return n;
    }
    _getScrollVisibility() {
      let t = this._getOriginRect(),
        r = this._pane.getBoundingClientRect(),
        e = this._scrollables.map((n) =>
          n.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: vu(t, e),
        isOriginOutsideView: zs(t, e),
        isOverlayClipped: vu(r, e),
        isOverlayOutsideView: zs(r, e),
      };
    }
    _subtractOverflows(t, ...r) {
      return r.reduce((e, n) => e - Math.max(n, 0), t);
    }
    _getNarrowedViewportRect() {
      let t = this._document.documentElement.clientWidth,
        r = this._document.documentElement.clientHeight,
        e = this._viewportRuler.getViewportScrollPosition();
      return {
        top: e.top + this._viewportMargin,
        left: e.left + this._viewportMargin,
        right: e.left + t - this._viewportMargin,
        bottom: e.top + r - this._viewportMargin,
        width: t - 2 * this._viewportMargin,
        height: r - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(t, r) {
      return r === "x"
        ? t.offsetX == null
          ? this._offsetX
          : t.offsetX
        : t.offsetY == null
        ? this._offsetY
        : t.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(t) {
      this._pane &&
        Vi(t).forEach((r) => {
          r !== "" &&
            this._appliedPanelClasses.indexOf(r) === -1 &&
            (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((t) => {
          this._pane.classList.remove(t);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let t = this._origin;
      if (t instanceof T) return t.nativeElement.getBoundingClientRect();
      if (t instanceof Element) return t.getBoundingClientRect();
      let r = t.width || 0,
        e = t.height || 0;
      return {
        top: t.y,
        bottom: t.y + e,
        left: t.x,
        right: t.x + r,
        height: e,
        width: r,
      };
    }
  };
function hi(i, t) {
  for (let r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
  return i;
}
function yu(i) {
  if (typeof i != "number" && i != null) {
    let [t, r] = i.split(fb);
    return !r || r === "px" ? parseFloat(t) : null;
  }
  return i || null;
}
function xu(i) {
  return {
    top: Math.floor(i.top),
    right: Math.floor(i.right),
    bottom: Math.floor(i.bottom),
    left: Math.floor(i.left),
    width: Math.floor(i.width),
    height: Math.floor(i.height),
  };
}
function pb(i, t) {
  return i === t
    ? !0
    : i.isOriginClipped === t.isOriginClipped &&
        i.isOriginOutsideView === t.isOriginOutsideView &&
        i.isOverlayClipped === t.isOverlayClipped &&
        i.isOverlayOutsideView === t.isOverlayOutsideView;
}
var wu = "cdk-global-overlay-wrapper",
  $s = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(t) {
      let r = t.getConfig();
      (this._overlayRef = t),
        this._width && !r.width && t.updateSize({ width: this._width }),
        this._height && !r.height && t.updateSize({ height: this._height }),
        t.hostElement.classList.add(wu),
        (this._isDisposed = !1);
    }
    top(t = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = t),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(t = "") {
      return (this._xOffset = t), (this._xPosition = "left"), this;
    }
    bottom(t = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = t),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(t = "") {
      return (this._xOffset = t), (this._xPosition = "right"), this;
    }
    start(t = "") {
      return (this._xOffset = t), (this._xPosition = "start"), this;
    }
    end(t = "") {
      return (this._xOffset = t), (this._xPosition = "end"), this;
    }
    width(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: t })
          : (this._width = t),
        this
      );
    }
    height(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: t })
          : (this._height = t),
        this
      );
    }
    centerHorizontally(t = "") {
      return this.left(t), (this._xPosition = "center"), this;
    }
    centerVertically(t = "") {
      return this.top(t), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let t = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement.style,
        e = this._overlayRef.getConfig(),
        { width: n, height: o, maxWidth: a, maxHeight: s } = e,
        c =
          (n === "100%" || n === "100vw") &&
          (!a || a === "100%" || a === "100vw"),
        l =
          (o === "100%" || o === "100vh") &&
          (!s || s === "100%" || s === "100vh"),
        d = this._xPosition,
        f = this._xOffset,
        y = this._overlayRef.getConfig().direction === "rtl",
        A = "",
        H = "",
        $ = "";
      c
        ? ($ = "flex-start")
        : d === "center"
        ? (($ = "center"), y ? (H = f) : (A = f))
        : y
        ? d === "left" || d === "end"
          ? (($ = "flex-end"), (A = f))
          : (d === "right" || d === "start") && (($ = "flex-start"), (H = f))
        : d === "left" || d === "start"
        ? (($ = "flex-start"), (A = f))
        : (d === "right" || d === "end") && (($ = "flex-end"), (H = f)),
        (t.position = this._cssPosition),
        (t.marginLeft = c ? "0" : A),
        (t.marginTop = l ? "0" : this._topOffset),
        (t.marginBottom = this._bottomOffset),
        (t.marginRight = c ? "0" : H),
        (r.justifyContent = $),
        (r.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let t = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement,
        e = r.style;
      r.classList.remove(wu),
        (e.justifyContent =
          e.alignItems =
          t.marginTop =
          t.marginBottom =
          t.marginLeft =
          t.marginRight =
          t.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  gb = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this._viewportRuler = e),
          (this._document = n),
          (this._platform = o),
          (this._overlayContainer = a);
      }
      global() {
        return new $s();
      }
      flexibleConnectedTo(e) {
        return new Hs(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(Ps), m(E), m(z), m(Qi));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  bb = 0,
  xt = (() => {
    let t = class t {
      constructor(e, n, o, a, s, c, l, d, f, y, A, H) {
        (this.scrollStrategies = e),
          (this._overlayContainer = n),
          (this._componentFactoryResolver = o),
          (this._positionBuilder = a),
          (this._keyboardDispatcher = s),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = d),
          (this._directionality = f),
          (this._location = y),
          (this._outsideClickDispatcher = A),
          (this._animationsModuleType = H);
      }
      create(e) {
        let n = this._createHostElement(),
          o = this._createPaneElement(n),
          a = this._createPortalOutlet(o),
          s = new He(e);
        return (
          (s.direction = s.direction || this._directionality.value),
          new ye(
            a,
            n,
            o,
            s,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations"
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let n = this._document.createElement("div");
        return (
          (n.id = `cdk-overlay-${bb++}`),
          n.classList.add("cdk-overlay-pane"),
          e.appendChild(n),
          n
        );
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return (
          this._appRef || (this._appRef = this._injector.get(ti)),
          new Ar(
            e,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document
          )
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        m(ub),
        m(Qi),
        m(sn),
        m(gb),
        m(mb),
        m(st),
        m(w),
        m(E),
        m(ui),
        m(he),
        m(hb),
        m(mt, 8)
      );
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var vb = new _("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let i = b(xt);
    return () => i.scrollStrategies.reposition();
  },
});
function _b(i) {
  return () => i.scrollStrategies.reposition();
}
var yb = { provide: vb, deps: [xt], useFactory: _b },
  $e = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ providers: [xt, yb], imports: [Ve, _e, Ns, Ns] }));
    let i = t;
    return i;
  })();
function xb(i, t) {}
var fi = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var qs = (() => {
    let t = class t extends Be {
      constructor(e, n, o, a, s, c, l, d) {
        super(),
          (this._elementRef = e),
          (this._focusTrapFactory = n),
          (this._config = a),
          (this._interactivityChecker = s),
          (this._ngZone = c),
          (this._overlayRef = l),
          (this._focusMonitor = d),
          (this._platform = b(z)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = b(wt)),
          (this.attachDomPortal = (f) => {
            this._portalOutlet.hasAttached();
            let y = this._portalOutlet.attachDomPortal(f);
            return this._contentAttached(), y;
          }),
          (this._document = o),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(e) {
        let n = this._ariaLabelledByQueue.indexOf(e);
        n > -1 &&
          (this._ariaLabelledByQueue.splice(n, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._restoreFocus();
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached();
        let n = this._portalOutlet.attachComponentPortal(e);
        return this._contentAttached(), n;
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached();
        let n = this._portalOutlet.attachTemplatePortal(e);
        return this._contentAttached(), n;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(e, n) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
              e.removeEventListener("blur", o),
                e.removeEventListener("mousedown", o),
                e.removeAttribute("tabindex");
            };
            e.addEventListener("blur", o), e.addEventListener("mousedown", o);
          })),
          e.focus(n);
      }
      _focusByCssSelector(e, n) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, n);
      }
      _trapFocus() {
        let e = this._elementRef.nativeElement;
        switch (this._config.autoFocus) {
          case !1:
          case "dialog":
            this._containsFocus() || e.focus();
            break;
          case !0:
          case "first-tabbable":
            this._focusTrap?.focusInitialElementWhenReady().then((n) => {
              n || this._focusDialogContainer();
            });
            break;
          case "first-heading":
            this._focusByCssSelector(
              'h1, h2, h3, h4, h5, h6, [role="heading"]'
            );
            break;
          default:
            this._focusByCssSelector(this._config.autoFocus);
            break;
        }
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          n = null;
        if (
          (typeof e == "string"
            ? (n = this._document.querySelector(e))
            : typeof e == "boolean"
            ? (n = e ? this._elementFocusedBeforeDialogWasOpened : null)
            : e && (n = e),
          this._config.restoreFocus && n && typeof n.focus == "function")
        ) {
          let o = zn(),
            a = this._elementRef.nativeElement;
          (!o || o === this._document.body || o === a || a.contains(o)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(n, this._closeInteractionType),
                (this._closeInteractionType = null))
              : n.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          n = zn();
        return e === n || e.contains(n);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = zn()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(T),
        u(_r),
        u(E, 8),
        u(fi),
        u(Gn),
        u(w),
        u(ye),
        u(Gi)
      );
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function (n, o) {
          if ((n & 1 && yt(Ue, 7), n & 2)) {
            let a;
            K((a = Q())) && (o._portalOutlet = a.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function (n, o) {
          n & 2 &&
            it("id", o._config.id || null)("role", o._config.role)(
              "aria-modal",
              o._config.ariaModal
            )(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0]
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null
            );
        },
        standalone: !0,
        features: [nt, J],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function (n, o) {
          n & 1 && B(0, xb, 0, 0, "ng-template", 0);
        },
        dependencies: [Ue],
        styles: [
          ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
        ],
        encapsulation: 2,
      }));
    let i = t;
    return i;
  })(),
  Xn = class {
    constructor(t, r) {
      (this.overlayRef = t),
        (this.config = r),
        (this.closed = new k()),
        (this.disableClose = r.disableClose),
        (this.backdropClick = t.backdropClick()),
        (this.keydownEvents = t.keydownEvents()),
        (this.outsidePointerEvents = t.outsidePointerEvents()),
        (this.id = r.id),
        this.keydownEvents.subscribe((e) => {
          e.keyCode === 27 &&
            !this.disableClose &&
            !fr(e) &&
            (e.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = t.detachments().subscribe(() => {
          r.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(t, r) {
      if (this.containerInstance) {
        let e = this.closed;
        (this.containerInstance._closeInteractionType =
          r?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          e.next(t),
          e.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(t = "", r = "") {
      return this.overlayRef.updateSize({ width: t, height: r }), this;
    }
    addPanelClass(t) {
      return this.overlayRef.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this.overlayRef.removePanelClass(t), this;
    }
  },
  wb = new _("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let i = b(xt);
      return () => i.scrollStrategies.block();
    },
  }),
  Cb = new _("DialogData"),
  Db = new _("DefaultDialogConfig");
var Eb = 0,
  Zs = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(e, n, o, a, s, c) {
        (this._overlay = e),
          (this._injector = n),
          (this._defaultOptions = o),
          (this._parentDialog = a),
          (this._overlayContainer = s),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new k()),
          (this._afterOpenedAtThisLevel = new k()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = qe(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(ce(void 0))
          )),
          (this._scrollStrategy = c);
      }
      open(e, n) {
        let o = this._defaultOptions || new fi();
        (n = g(g({}, o), n)),
          (n.id = n.id || `cdk-dialog-${Eb++}`),
          n.id && this.getDialogById(n.id);
        let a = this._getOverlayConfig(n),
          s = this._overlay.create(a),
          c = new Xn(s, n),
          l = this._attachContainer(s, c, n);
        return (
          (c.containerInstance = l),
          this._attachDialogContent(e, c, l, n),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(c),
          c.closed.subscribe(() => this._removeOpenDialog(c, !0)),
          this.afterOpened.next(c),
          c
        );
      }
      closeAll() {
        Gs(this.openDialogs, (e) => e.close());
      }
      getDialogById(e) {
        return this.openDialogs.find((n) => n.id === e);
      }
      ngOnDestroy() {
        Gs(this._openDialogsAtThisLevel, (e) => {
          e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1);
        }),
          Gs(this._openDialogsAtThisLevel, (e) => e.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(e) {
        let n = new He({
          positionStrategy:
            e.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
          panelClass: e.panelClass,
          hasBackdrop: e.hasBackdrop,
          direction: e.direction,
          minWidth: e.minWidth,
          minHeight: e.minHeight,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          width: e.width,
          height: e.height,
          disposeOnNavigation: e.closeOnNavigation,
        });
        return e.backdropClass && (n.backdropClass = e.backdropClass), n;
      }
      _attachContainer(e, n, o) {
        let a = o.injector || o.viewContainerRef?.injector,
          s = [
            { provide: fi, useValue: o },
            { provide: Xn, useValue: n },
            { provide: ye, useValue: e },
          ],
          c;
        o.container
          ? typeof o.container == "function"
            ? (c = o.container)
            : ((c = o.container.type), s.push(...o.container.providers(o)))
          : (c = qs);
        let l = new ve(
          c,
          o.viewContainerRef,
          st.create({ parent: a || this._injector, providers: s }),
          o.componentFactoryResolver
        );
        return e.attach(l).instance;
      }
      _attachDialogContent(e, n, o, a) {
        if (e instanceof de) {
          let s = this._createInjector(a, n, o, void 0),
            c = { $implicit: a.data, dialogRef: n };
          a.templateContext &&
            (c = g(
              g({}, c),
              typeof a.templateContext == "function"
                ? a.templateContext()
                : a.templateContext
            )),
            o.attachTemplatePortal(new ze(e, null, c, s));
        } else {
          let s = this._createInjector(a, n, o, this._injector),
            c = o.attachComponentPortal(
              new ve(e, a.viewContainerRef, s, a.componentFactoryResolver)
            );
          (n.componentRef = c), (n.componentInstance = c.instance);
        }
      }
      _createInjector(e, n, o, a) {
        let s = e.injector || e.viewContainerRef?.injector,
          c = [
            { provide: Cb, useValue: e.data },
            { provide: Xn, useValue: n },
          ];
        return (
          e.providers &&
            (typeof e.providers == "function"
              ? c.push(...e.providers(n, e, o))
              : c.push(...e.providers)),
          e.direction &&
            (!s || !s.get(ui, null, { optional: !0 })) &&
            c.push({
              provide: ui,
              useValue: { value: e.direction, change: D() },
            }),
          st.create({ parent: s || a, providers: c })
        );
      }
      _removeOpenDialog(e, n) {
        let o = this.openDialogs.indexOf(e);
        o > -1 &&
          (this.openDialogs.splice(o, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((a, s) => {
              a
                ? s.setAttribute("aria-hidden", a)
                : s.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            n && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let e = this._overlayContainer.getContainerElement();
        if (e.parentElement) {
          let n = e.parentElement.children;
          for (let o = n.length - 1; o > -1; o--) {
            let a = n[o];
            a !== e &&
              a.nodeName !== "SCRIPT" &&
              a.nodeName !== "STYLE" &&
              !a.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(a, a.getAttribute("aria-hidden")),
              a.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(xt), m(st), m(Db, 8), m(t, 12), m(Qi), m(wb));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Gs(i, t) {
  let r = i.length;
  for (; r--; ) t(i[r]);
}
var kr = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [Zs], imports: [$e, _e, Vd, _e] }));
  let i = t;
  return i;
})();
function Ib(i, t) {}
var Kn = class {
    constructor() {
      (this.role = "dialog"),
        (this.panelClass = ""),
        (this.hasBackdrop = !0),
        (this.backdropClass = ""),
        (this.disableClose = !1),
        (this.width = ""),
        (this.height = ""),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = "first-tabbable"),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0);
    }
  },
  Xs = "mdc-dialog--open",
  Du = "mdc-dialog--opening",
  Eu = "mdc-dialog--closing",
  Mb = 150,
  Sb = 75,
  Ab = (() => {
    let t = class t extends qs {
      constructor(e, n, o, a, s, c, l, d, f) {
        super(e, n, o, a, s, c, l, f),
          (this._animationMode = d),
          (this._animationStateChanged = new ct()),
          (this._animationsEnabled = this._animationMode !== "NoopAnimations"),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? Mu(this._config.enterAnimationDuration) ?? Mb
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? Mu(this._config.exitAnimationDuration) ?? Sb
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(),
              this._openAnimationDone(this._enterAnimationDuration);
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration,
              });
          });
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Iu,
                `${this._enterAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Du, Xs)
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen
              ))
            : (this._hostElement.classList.add(Xs),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(Xs),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Iu,
                `${this._exitAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Eu)
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(e) {
        (this._actionSectionCount += e), this._changeDetectorRef.markForCheck();
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Du, Eu);
      }
      _waitForAnimationToComplete(e, n) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(n, e));
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(e)
            : e();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: e });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(e) {
        let n = super.attachComponentPortal(e);
        return (
          n.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host"
          ),
          n
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(T),
        u(_r),
        u(E, 8),
        u(Kn),
        u(Gn),
        u(w),
        u(ye),
        u(mt, 8),
        u(Gi)
      );
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-dialog-container"]],
        hostAttrs: [
          "tabindex",
          "-1",
          1,
          "mat-mdc-dialog-container",
          "mdc-dialog",
        ],
        hostVars: 10,
        hostBindings: function (n, o) {
          n & 2 &&
            (Je("id", o._config.id),
            it("aria-modal", o._config.ariaModal)("role", o._config.role)(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0]
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null
            ),
            G("_mat-animation-noopable", !o._animationsEnabled)(
              "mat-mdc-dialog-container-with-actions",
              o._actionSectionCount > 0
            ));
        },
        standalone: !0,
        features: [nt, J],
        decls: 3,
        vars: 0,
        consts: [
          [1, "mdc-dialog__container"],
          [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (n, o) {
          n & 1 &&
            (h(0, "div", 0)(1, "div", 1),
            B(2, Ib, 0, 0, "ng-template", 2),
            p()());
        },
        dependencies: [Ue],
        styles: [
          '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
        ],
        encapsulation: 2,
      }));
    let i = t;
    return i;
  })(),
  Iu = "--mat-dialog-transition-duration";
function Mu(i) {
  return i == null
    ? null
    : typeof i == "number"
    ? i
    : i.endsWith("ms")
    ? ji(i.substring(0, i.length - 2))
    : i.endsWith("s")
    ? ji(i.substring(0, i.length - 1)) * 1e3
    : i === "0"
    ? 0
    : null;
}
var Or = (function (i) {
    return (
      (i[(i.OPEN = 0)] = "OPEN"),
      (i[(i.CLOSING = 1)] = "CLOSING"),
      (i[(i.CLOSED = 2)] = "CLOSED"),
      i
    );
  })(Or || {}),
  qt = class {
    constructor(t, r, e) {
      (this._ref = t),
        (this._containerInstance = e),
        (this._afterOpened = new k()),
        (this._beforeClosed = new k()),
        (this._state = Or.OPEN),
        (this.disableClose = r.disableClose),
        (this.id = t.id),
        t.addPanelClass("mat-mdc-dialog-panel"),
        e._animationStateChanged
          .pipe(
            rt((n) => n.state === "opened"),
            dt(1)
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        e._animationStateChanged
          .pipe(
            rt((n) => n.state === "closed"),
            dt(1)
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        t.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        bi(
          this.backdropClick(),
          this.keydownEvents().pipe(
            rt((n) => n.keyCode === 27 && !this.disableClose && !fr(n))
          )
        ).subscribe((n) => {
          this.disableClose ||
            (n.preventDefault(),
            Su(this, n.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(t) {
      (this._result = t),
        this._containerInstance._animationStateChanged
          .pipe(
            rt((r) => r.state === "closing"),
            dt(1)
          )
          .subscribe((r) => {
            this._beforeClosed.next(t),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                r.totalTime + 100
              ));
          }),
        (this._state = Or.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(t) {
      let r = this._ref.config.positionStrategy;
      return (
        t && (t.left || t.right)
          ? t.left
            ? r.left(t.left)
            : r.right(t.right)
          : r.centerHorizontally(),
        t && (t.top || t.bottom)
          ? t.top
            ? r.top(t.top)
            : r.bottom(t.bottom)
          : r.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(t = "", r = "") {
      return this._ref.updateSize(t, r), this;
    }
    addPanelClass(t) {
      return this._ref.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this._ref.removePanelClass(t), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = Or.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function Su(i, t, r) {
  return (i._closeInteractionType = t), i.close(r);
}
var pi = new _("MatMdcDialogData"),
  Rb = new _("mat-mdc-dialog-default-options"),
  kb = new _("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let i = b(xt);
      return () => i.scrollStrategies.block();
    },
  });
var Ob = 0,
  We = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      constructor(e, n, o, a, s, c, l, d) {
        (this._overlay = e),
          (this._defaultOptions = a),
          (this._scrollStrategy = s),
          (this._parentDialog = c),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new k()),
          (this._afterOpenedAtThisLevel = new k()),
          (this.dialogConfigClass = Kn),
          (this.afterAllClosed = qe(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(ce(void 0))
          )),
          (this._dialog = n.get(Zs)),
          (this._dialogRefConstructor = qt),
          (this._dialogContainerType = Ab),
          (this._dialogDataToken = pi);
      }
      open(e, n) {
        let o;
        (n = g(g({}, this._defaultOptions || new Kn()), n)),
          (n.id = n.id || `mat-mdc-dialog-${Ob++}`),
          (n.scrollStrategy = n.scrollStrategy || this._scrollStrategy());
        let a = this._dialog.open(
          e,
          X(g({}, n), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: n },
                { provide: fi, useValue: n },
              ],
            },
            templateContext: () => ({ dialogRef: o }),
            providers: (s, c, l) => (
              (o = new this._dialogRefConstructor(s, n, l)),
              o.updatePosition(n?.position),
              [
                { provide: this._dialogContainerType, useValue: l },
                { provide: this._dialogDataToken, useValue: c.data },
                { provide: this._dialogRefConstructor, useValue: o },
              ]
            ),
          })
        );
        return (
          (o.componentRef = a.componentRef),
          (o.componentInstance = a.componentInstance),
          this.openDialogs.push(o),
          this.afterOpened.next(o),
          o.afterClosed().subscribe(() => {
            let s = this.openDialogs.indexOf(o);
            s > -1 &&
              (this.openDialogs.splice(s, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          o
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(e) {
        return this.openDialogs.find((n) => n.id === e);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(e) {
        let n = e.length;
        for (; n--; ) e[n].close();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        m(xt),
        m(st),
        m(he, 8),
        m(Rb, 8),
        m(kb),
        m(t, 12),
        m(Qi),
        m(mt, 8)
      );
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Ji = (() => {
  let t = class t {
    constructor(e, n, o) {
      (this.dialogRef = e),
        (this._elementRef = n),
        (this._dialog = o),
        (this.type = "button");
    }
    ngOnInit() {
      this.dialogRef ||
        (this.dialogRef = Tb(this._elementRef, this._dialog.openDialogs));
    }
    ngOnChanges(e) {
      let n = e._matDialogClose || e._matDialogCloseResult;
      n && (this.dialogResult = n.currentValue);
    }
    _onButtonClick(e) {
      Su(
        this.dialogRef,
        e.screenX === 0 && e.screenY === 0 ? "keyboard" : "mouse",
        this.dialogResult
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(qt, 8), u(T), u(We));
  }),
    (t.ɵdir = R({
      type: t,
      selectors: [
        ["", "mat-dialog-close", ""],
        ["", "matDialogClose", ""],
      ],
      hostVars: 2,
      hostBindings: function (n, o) {
        n & 1 &&
          V("click", function (s) {
            return o._onButtonClick(s);
          }),
          n & 2 && it("aria-label", o.ariaLabel || null)("type", o.type);
      },
      inputs: {
        ariaLabel: [N.None, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [N.None, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [N.None, "matDialogClose", "_matDialogClose"],
      },
      exportAs: ["matDialogClose"],
      standalone: !0,
      features: [Rt],
    }));
  let i = t;
  return i;
})();
var Au = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = R({
      type: t,
      selectors: [
        ["", "mat-dialog-content", ""],
        ["mat-dialog-content"],
        ["", "matDialogContent", ""],
      ],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: !0,
    }));
  let i = t;
  return i;
})();
function Tb(i, t) {
  let r = i.nativeElement.parentElement;
  for (; r && !r.classList.contains("mat-mdc-dialog-container"); )
    r = r.parentElement;
  return r ? t.find((e) => e.id === r.id) : null;
}
var Ru = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [We], imports: [kr, $e, _e, Z, Z] }));
  let i = t;
  return i;
})();
function Fb(i, t) {
  if (i & 1) {
    let r = me();
    h(0, "div", 1)(1, "button", 2),
      V("click", function () {
        Lt(r);
        let n = tt();
        return jt(n.action());
      }),
      C(2),
      p()();
  }
  if (i & 2) {
    let r = tt();
    x(2), Me(" ", r.data.action, " ");
  }
}
var Pb = ["label"];
function Nb(i, t) {}
var Lb = Math.pow(2, 31) - 1,
  Qn = class {
    constructor(t, r) {
      (this._overlayRef = r),
        (this._afterDismissed = new k()),
        (this._afterOpened = new k()),
        (this._onAction = new k()),
        (this._dismissedByAction = !1),
        (this.containerInstance = t),
        t._onExit.subscribe(() => this._finishDismiss());
    }
    dismiss() {
      this._afterDismissed.closed || this.containerInstance.exit(),
        clearTimeout(this._durationTimeoutId);
    }
    dismissWithAction() {
      this._onAction.closed ||
        ((this._dismissedByAction = !0),
        this._onAction.next(),
        this._onAction.complete(),
        this.dismiss()),
        clearTimeout(this._durationTimeoutId);
    }
    closeWithAction() {
      this.dismissWithAction();
    }
    _dismissAfter(t) {
      this._durationTimeoutId = setTimeout(
        () => this.dismiss(),
        Math.min(t, Lb)
      );
    }
    _open() {
      this._afterOpened.closed ||
        (this._afterOpened.next(), this._afterOpened.complete());
    }
    _finishDismiss() {
      this._overlayRef.dispose(),
        this._onAction.closed || this._onAction.complete(),
        this._afterDismissed.next({
          dismissedByAction: this._dismissedByAction,
        }),
        this._afterDismissed.complete(),
        (this._dismissedByAction = !1);
    }
    afterDismissed() {
      return this._afterDismissed;
    }
    afterOpened() {
      return this.containerInstance._onEnter;
    }
    onAction() {
      return this._onAction;
    }
  },
  ku = new _("MatSnackBarData"),
  tn = class {
    constructor() {
      (this.politeness = "assertive"),
        (this.announcementMessage = ""),
        (this.duration = 0),
        (this.data = null),
        (this.horizontalPosition = "center"),
        (this.verticalPosition = "bottom");
    }
  },
  jb = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Vb = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  zb = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Ou = (() => {
    let t = class t {
      constructor(e, n) {
        (this.snackBarRef = e), (this.data = n);
      }
      action() {
        this.snackBarRef.dismissWithAction();
      }
      get hasAction() {
        return !!this.data.action;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(Qn), u(ku));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        standalone: !0,
        features: [J],
        decls: 3,
        vars: 2,
        consts: [
          ["matSnackBarLabel", ""],
          ["matSnackBarActions", ""],
          ["mat-button", "", "matSnackBarAction", "", 3, "click"],
        ],
        template: function (n, o) {
          n & 1 && (h(0, "div", 0), C(1), p(), B(2, Fb, 3, 1, "div", 1)),
            n & 2 &&
              (x(),
              Me(
                " ",
                o.data.message,
                `
`
              ),
              x(),
              ht(2, o.hasAction ? 2 : -1));
        },
        dependencies: [Mt, jb, Vb, zb],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Bb = {
    snackBarState: ii("state", [
      Ae("void, hidden", Tt({ transform: "scale(0.8)", opacity: 0 })),
      Ae("visible", Tt({ transform: "scale(1)", opacity: 1 })),
      pe("* => visible", fe("150ms cubic-bezier(0, 0, 0.2, 1)")),
      pe(
        "* => void, * => hidden",
        fe("75ms cubic-bezier(0.4, 0.0, 1, 1)", Tt({ opacity: 0 }))
      ),
    ]),
  },
  Ub = 0,
  Hb = (() => {
    let t = class t extends Be {
      constructor(e, n, o, a, s) {
        super(),
          (this._ngZone = e),
          (this._elementRef = n),
          (this._changeDetectorRef = o),
          (this._platform = a),
          (this.snackBarConfig = s),
          (this._document = b(E)),
          (this._trackedModals = new Set()),
          (this._announceDelay = 150),
          (this._destroyed = !1),
          (this._onAnnounce = new k()),
          (this._onExit = new k()),
          (this._onEnter = new k()),
          (this._animationState = "void"),
          (this._liveElementId = `mat-snack-bar-container-live-${Ub++}`),
          (this.attachDomPortal = (c) => {
            this._assertNotAttached();
            let l = this._portalOutlet.attachDomPortal(c);
            return this._afterPortalAttached(), l;
          }),
          s.politeness === "assertive" && !s.announcementMessage
            ? (this._live = "assertive")
            : s.politeness === "off"
            ? (this._live = "off")
            : (this._live = "polite"),
          this._platform.FIREFOX &&
            (this._live === "polite" && (this._role = "status"),
            this._live === "assertive" && (this._role = "alert"));
      }
      attachComponentPortal(e) {
        this._assertNotAttached();
        let n = this._portalOutlet.attachComponentPortal(e);
        return this._afterPortalAttached(), n;
      }
      attachTemplatePortal(e) {
        this._assertNotAttached();
        let n = this._portalOutlet.attachTemplatePortal(e);
        return this._afterPortalAttached(), n;
      }
      onAnimationEnd(e) {
        let { fromState: n, toState: o } = e;
        if (
          (((o === "void" && n !== "void") || o === "hidden") &&
            this._completeExit(),
          o === "visible")
        ) {
          let a = this._onEnter;
          this._ngZone.run(() => {
            a.next(), a.complete();
          });
        }
      }
      enter() {
        this._destroyed ||
          ((this._animationState = "visible"),
          this._changeDetectorRef.markForCheck(),
          this._changeDetectorRef.detectChanges(),
          this._screenReaderAnnounce());
      }
      exit() {
        return (
          this._ngZone.run(() => {
            (this._animationState = "hidden"),
              this._changeDetectorRef.markForCheck(),
              this._elementRef.nativeElement.setAttribute("mat-exit", ""),
              clearTimeout(this._announceTimeoutId);
          }),
          this._onExit
        );
      }
      ngOnDestroy() {
        (this._destroyed = !0), this._clearFromModals(), this._completeExit();
      }
      _completeExit() {
        queueMicrotask(() => {
          this._onExit.next(), this._onExit.complete();
        });
      }
      _afterPortalAttached() {
        let e = this._elementRef.nativeElement,
          n = this.snackBarConfig.panelClass;
        n &&
          (Array.isArray(n)
            ? n.forEach((s) => e.classList.add(s))
            : e.classList.add(n)),
          this._exposeToModals();
        let o = this._label.nativeElement,
          a = "mdc-snackbar__label";
        o.classList.toggle(a, !o.querySelector(`.${a}`));
      }
      _exposeToModals() {
        let e = this._liveElementId,
          n = this._document.querySelectorAll(
            'body > .cdk-overlay-container [aria-modal="true"]'
          );
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            s = a.getAttribute("aria-owns");
          this._trackedModals.add(a),
            s
              ? s.indexOf(e) === -1 && a.setAttribute("aria-owns", s + " " + e)
              : a.setAttribute("aria-owns", e);
        }
      }
      _clearFromModals() {
        this._trackedModals.forEach((e) => {
          let n = e.getAttribute("aria-owns");
          if (n) {
            let o = n.replace(this._liveElementId, "").trim();
            o.length > 0
              ? e.setAttribute("aria-owns", o)
              : e.removeAttribute("aria-owns");
          }
        }),
          this._trackedModals.clear();
      }
      _assertNotAttached() {
        this._portalOutlet.hasAttached();
      }
      _screenReaderAnnounce() {
        this._announceTimeoutId ||
          this._ngZone.runOutsideAngular(() => {
            this._announceTimeoutId = setTimeout(() => {
              let e =
                  this._elementRef.nativeElement.querySelector("[aria-hidden]"),
                n = this._elementRef.nativeElement.querySelector("[aria-live]");
              if (e && n) {
                let o = null;
                this._platform.isBrowser &&
                  document.activeElement instanceof HTMLElement &&
                  e.contains(document.activeElement) &&
                  (o = document.activeElement),
                  e.removeAttribute("aria-hidden"),
                  n.appendChild(e),
                  o?.focus(),
                  this._onAnnounce.next(),
                  this._onAnnounce.complete();
              }
            }, this._announceDelay);
          });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(w), u(T), u(wt), u(z), u(tn));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function (n, o) {
          if ((n & 1 && (yt(Ue, 7), yt(Pb, 7)), n & 2)) {
            let a;
            K((a = Q())) && (o._portalOutlet = a.first),
              K((a = Q())) && (o._label = a.first);
          }
        },
        hostAttrs: [
          1,
          "mdc-snackbar",
          "mat-mdc-snack-bar-container",
          "mdc-snackbar--open",
        ],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 1 &&
            yc("@state.done", function (s) {
              return o.onAnimationEnd(s);
            }),
            n & 2 && _c("@state", o._animationState);
        },
        standalone: !0,
        features: [nt, J],
        decls: 6,
        vars: 3,
        consts: [
          ["label", ""],
          [1, "mdc-snackbar__surface"],
          [1, "mat-mdc-snack-bar-label"],
          ["aria-hidden", "true"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (n, o) {
          n & 1 &&
            (h(0, "div", 1)(1, "div", 2, 0)(3, "div", 3),
            B(4, Nb, 0, 0, "ng-template", 4),
            p(),
            P(5, "div"),
            p()()),
            n & 2 &&
              (x(5),
              it("aria-live", o._live)("role", o._role)(
                "id",
                o._liveElementId
              ));
        },
        dependencies: [Ue],
        styles: [
          '.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}',
        ],
        encapsulation: 2,
        data: { animation: [Bb.snackBarState] },
      }));
    let i = t;
    return i;
  })();
function $b() {
  return new tn();
}
var Wb = new _("mat-snack-bar-default-options", {
    providedIn: "root",
    factory: $b,
  }),
  te = (() => {
    let t = class t {
      get _openedSnackBarRef() {
        let e = this._parentSnackBar;
        return e ? e._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(e) {
        this._parentSnackBar
          ? (this._parentSnackBar._openedSnackBarRef = e)
          : (this._snackBarRefAtThisLevel = e);
      }
      constructor(e, n, o, a, s, c) {
        (this._overlay = e),
          (this._live = n),
          (this._injector = o),
          (this._breakpointObserver = a),
          (this._parentSnackBar = s),
          (this._defaultConfig = c),
          (this._snackBarRefAtThisLevel = null),
          (this.simpleSnackBarComponent = Ou),
          (this.snackBarContainerComponent = Hb),
          (this.handsetCssClass = "mat-mdc-snack-bar-handset");
      }
      openFromComponent(e, n) {
        return this._attach(e, n);
      }
      openFromTemplate(e, n) {
        return this._attach(e, n);
      }
      open(e, n = "", o) {
        let a = g(g({}, this._defaultConfig), o);
        return (
          (a.data = { message: e, action: n }),
          a.announcementMessage === e && (a.announcementMessage = void 0),
          this.openFromComponent(this.simpleSnackBarComponent, a)
        );
      }
      dismiss() {
        this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
      }
      ngOnDestroy() {
        this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
      }
      _attachSnackBarContainer(e, n) {
        let o = n && n.viewContainerRef && n.viewContainerRef.injector,
          a = st.create({
            parent: o || this._injector,
            providers: [{ provide: tn, useValue: n }],
          }),
          s = new ve(this.snackBarContainerComponent, n.viewContainerRef, a),
          c = e.attach(s);
        return (c.instance.snackBarConfig = n), c.instance;
      }
      _attach(e, n) {
        let o = g(g(g({}, new tn()), this._defaultConfig), n),
          a = this._createOverlay(o),
          s = this._attachSnackBarContainer(a, o),
          c = new Qn(s, a);
        if (e instanceof de) {
          let l = new ze(e, null, { $implicit: o.data, snackBarRef: c });
          c.instance = s.attachTemplatePortal(l);
        } else {
          let l = this._createInjector(o, c),
            d = new ve(e, void 0, l),
            f = s.attachComponentPortal(d);
          c.instance = f.instance;
        }
        return (
          this._breakpointObserver
            .observe(Od.HandsetPortrait)
            .pipe(bt(a.detachments()))
            .subscribe((l) => {
              a.overlayElement.classList.toggle(
                this.handsetCssClass,
                l.matches
              );
            }),
          o.announcementMessage &&
            s._onAnnounce.subscribe(() => {
              this._live.announce(o.announcementMessage, o.politeness);
            }),
          this._animateSnackBar(c, o),
          (this._openedSnackBarRef = c),
          this._openedSnackBarRef
        );
      }
      _animateSnackBar(e, n) {
        e.afterDismissed().subscribe(() => {
          this._openedSnackBarRef == e && (this._openedSnackBarRef = null),
            n.announcementMessage && this._live.clear();
        }),
          this._openedSnackBarRef
            ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
                e.containerInstance.enter();
              }),
              this._openedSnackBarRef.dismiss())
            : e.containerInstance.enter(),
          n.duration &&
            n.duration > 0 &&
            e.afterOpened().subscribe(() => e._dismissAfter(n.duration));
      }
      _createOverlay(e) {
        let n = new He();
        n.direction = e.direction;
        let o = this._overlay.position().global(),
          a = e.direction === "rtl",
          s =
            e.horizontalPosition === "left" ||
            (e.horizontalPosition === "start" && !a) ||
            (e.horizontalPosition === "end" && a),
          c = !s && e.horizontalPosition !== "center";
        return (
          s ? o.left("0") : c ? o.right("0") : o.centerHorizontally(),
          e.verticalPosition === "top" ? o.top("0") : o.bottom("0"),
          (n.positionStrategy = o),
          this._overlay.create(n)
        );
      }
      _createInjector(e, n) {
        let o = e && e.viewContainerRef && e.viewContainerRef.injector;
        return st.create({
          parent: o || this._injector,
          providers: [
            { provide: Qn, useValue: n },
            { provide: ku, useValue: e.data },
          ],
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(xt), m(jd), m(st), m(gr), m(t, 12), m(Wb));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Tu = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [te], imports: [$e, _e, Mr, Z, Ou, Z] }));
  let i = t;
  return i;
})();
var Gb = ["*"],
  Tr;
function Yb() {
  if (Tr === void 0 && ((Tr = null), typeof window < "u")) {
    let i = window;
    i.trustedTypes !== void 0 &&
      (Tr = i.trustedTypes.createPolicy("angular#components", {
        createHTML: (t) => t,
      }));
  }
  return Tr;
}
function to(i) {
  return Yb()?.createHTML(i) || i;
}
function Fu(i) {
  return Error(`Unable to find icon with the name "${i}"`);
}
function qb() {
  return Error(
    "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports."
  );
}
function Pu(i) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`
  );
}
function Nu(i) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`
  );
}
var xe = class {
    constructor(t, r, e) {
      (this.url = t), (this.svgText = r), (this.options = e);
    }
  },
  Zb = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this._httpClient = e),
          (this._sanitizer = n),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = o);
      }
      addSvgIcon(e, n, o) {
        return this.addSvgIconInNamespace("", e, n, o);
      }
      addSvgIconLiteral(e, n, o) {
        return this.addSvgIconLiteralInNamespace("", e, n, o);
      }
      addSvgIconInNamespace(e, n, o, a) {
        return this._addSvgIconConfig(e, n, new xe(o, null, a));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, n, o, a) {
        let s = this._sanitizer.sanitize(kt.HTML, o);
        if (!s) throw Nu(o);
        let c = to(s);
        return this._addSvgIconConfig(e, n, new xe("", c, a));
      }
      addSvgIconSet(e, n) {
        return this.addSvgIconSetInNamespace("", e, n);
      }
      addSvgIconSetLiteral(e, n) {
        return this.addSvgIconSetLiteralInNamespace("", e, n);
      }
      addSvgIconSetInNamespace(e, n, o) {
        return this._addSvgIconSetConfig(e, new xe(n, null, o));
      }
      addSvgIconSetLiteralInNamespace(e, n, o) {
        let a = this._sanitizer.sanitize(kt.HTML, n);
        if (!a) throw Nu(n);
        let s = to(a);
        return this._addSvgIconSetConfig(e, new xe("", s, o));
      }
      registerFontClassAlias(e, n = e) {
        return this._fontCssClassesByAlias.set(e, n), this;
      }
      classNameForFontAlias(e) {
        return this._fontCssClassesByAlias.get(e) || e;
      }
      setDefaultFontSetClass(...e) {
        return (this._defaultFontSetClass = e), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(e) {
        let n = this._sanitizer.sanitize(kt.RESOURCE_URL, e);
        if (!n) throw Pu(e);
        let o = this._cachedIconsByUrl.get(n);
        return o
          ? D(Fr(o))
          : this._loadSvgIconFromConfig(new xe(e, null)).pipe(
              et((a) => this._cachedIconsByUrl.set(n, a)),
              S((a) => Fr(a))
            );
      }
      getNamedSvgIcon(e, n = "") {
        let o = Lu(n, e),
          a = this._svgIconConfigs.get(o);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(n, e)), a))
          return this._svgIconConfigs.set(o, a), this._getSvgFromConfig(a);
        let s = this._iconSetConfigs.get(n);
        return s ? this._getSvgFromIconSetConfigs(e, s) : ae(Fu(o));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? D(Fr(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(S((n) => Fr(n)));
      }
      _getSvgFromIconSetConfigs(e, n) {
        let o = this._extractIconWithNameFromAnySet(e, n);
        if (o) return D(o);
        let a = n
          .filter((s) => !s.svgText)
          .map((s) =>
            this._loadSvgIconSetFromConfig(s).pipe(
              at((c) => {
                let d = `Loading icon set URL: ${this._sanitizer.sanitize(
                  kt.RESOURCE_URL,
                  s.url
                )} failed: ${c.message}`;
                return this._errorHandler.handleError(new Error(d)), D(null);
              })
            )
          );
        return io(a).pipe(
          S(() => {
            let s = this._extractIconWithNameFromAnySet(e, n);
            if (!s) throw Fu(e);
            return s;
          })
        );
      }
      _extractIconWithNameFromAnySet(e, n) {
        for (let o = n.length - 1; o >= 0; o--) {
          let a = n[o];
          if (a.svgText && a.svgText.toString().indexOf(e) > -1) {
            let s = this._svgElementFromConfig(a),
              c = this._extractSvgIconFromSet(s, e, a.options);
            if (c) return c;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(e) {
        return this._fetchIcon(e).pipe(
          et((n) => (e.svgText = n)),
          S(() => this._svgElementFromConfig(e))
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? D(null)
          : this._fetchIcon(e).pipe(et((n) => (e.svgText = n)));
      }
      _extractSvgIconFromSet(e, n, o) {
        let a = e.querySelector(`[id="${n}"]`);
        if (!a) return null;
        let s = a.cloneNode(!0);
        if ((s.removeAttribute("id"), s.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(s, o);
        if (s.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(s), o);
        let c = this._svgElementFromString(to("<svg></svg>"));
        return c.appendChild(s), this._setSvgAttributes(c, o);
      }
      _svgElementFromString(e) {
        let n = this._document.createElement("DIV");
        n.innerHTML = e;
        let o = n.querySelector("svg");
        if (!o) throw Error("<svg> tag not found");
        return o;
      }
      _toSvgElement(e) {
        let n = this._svgElementFromString(to("<svg></svg>")),
          o = e.attributes;
        for (let a = 0; a < o.length; a++) {
          let { name: s, value: c } = o[a];
          s !== "id" && n.setAttribute(s, c);
        }
        for (let a = 0; a < e.childNodes.length; a++)
          e.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            n.appendChild(e.childNodes[a].cloneNode(!0));
        return n;
      }
      _setSvgAttributes(e, n) {
        return (
          e.setAttribute("fit", ""),
          e.setAttribute("height", "100%"),
          e.setAttribute("width", "100%"),
          e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          e.setAttribute("focusable", "false"),
          n && n.viewBox && e.setAttribute("viewBox", n.viewBox),
          e
        );
      }
      _fetchIcon(e) {
        let { url: n, options: o } = e,
          a = o?.withCredentials ?? !1;
        if (!this._httpClient) throw qb();
        if (n == null) throw Error(`Cannot fetch icon from URL "${n}".`);
        let s = this._sanitizer.sanitize(kt.RESOURCE_URL, n);
        if (!s) throw Pu(n);
        let c = this._inProgressUrlFetches.get(s);
        if (c) return c;
        let l = this._httpClient
          .get(s, { responseType: "text", withCredentials: a })
          .pipe(
            S((d) => to(d)),
            se(() => this._inProgressUrlFetches.delete(s)),
            rc()
          );
        return this._inProgressUrlFetches.set(s, l), l;
      }
      _addSvgIconConfig(e, n, o) {
        return this._svgIconConfigs.set(Lu(e, n), o), this;
      }
      _addSvgIconSetConfig(e, n) {
        let o = this._iconSetConfigs.get(e);
        return o ? o.push(n) : this._iconSetConfigs.set(e, [n]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let n = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(n, e.options), (e.svgElement = n);
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, n) {
        for (let o = 0; o < this._resolvers.length; o++) {
          let a = this._resolvers[o](n, e);
          if (a)
            return Xb(a) ? new xe(a.url, null, a.options) : new xe(a, null);
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(hn, 8), m(wa), m(E, 8), m(Xe));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Fr(i) {
  return i.cloneNode(!0);
}
function Lu(i, t) {
  return i + ":" + t;
}
function Xb(i) {
  return !!(i.url && i.options);
}
var Kb = new _("MAT_ICON_DEFAULT_OPTIONS"),
  Qb = new _("mat-icon-location", { providedIn: "root", factory: Jb });
function Jb() {
  let i = b(E),
    t = i ? i.location : null;
  return { getPathname: () => (t ? t.pathname + t.search : "") };
}
var ju = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  tv = ju.map((i) => `[${i}]`).join(", "),
  ev = /^url\(['"]?#(.*?)['"]?\)$/,
  en = (() => {
    let t = class t {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(e) {
        this._color = e;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(e) {
        e !== this._svgIcon &&
          (e
            ? this._updateSvgIcon(e)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = e));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(e) {
        let n = this._cleanupFontValue(e);
        n !== this._fontSet &&
          ((this._fontSet = n), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let n = this._cleanupFontValue(e);
        n !== this._fontIcon &&
          ((this._fontIcon = n), this._updateFontIconClasses());
      }
      constructor(e, n, o, a, s, c) {
        (this._elementRef = e),
          (this._iconRegistry = n),
          (this._location = a),
          (this._errorHandler = s),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = Kt.EMPTY),
          c &&
            (c.color && (this.color = this._defaultColor = c.color),
            c.fontSet && (this.fontSet = c.fontSet)),
          o || e.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(e) {
        if (!e) return ["", ""];
        let n = e.split(":");
        switch (n.length) {
          case 1:
            return ["", n[0]];
          case 2:
            return n;
          default:
            throw Error(`Invalid icon name: "${e}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let e = this._elementsWithExternalReferences;
        if (e && e.size) {
          let n = this._location.getPathname();
          n !== this._previousPath &&
            ((this._previousPath = n), this._prependPathToReferences(n));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(e) {
        this._clearSvgElement();
        let n = this._location.getPathname();
        (this._previousPath = n),
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(n),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement,
          n = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          n--;

        ) {
          let o = e.childNodes[n];
          (o.nodeType !== 1 || o.nodeName.toLowerCase() === "svg") &&
            o.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          n = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((o) => o.length > 0);
        this._previousFontSetClass.forEach((o) => e.classList.remove(o)),
          n.forEach((o) => e.classList.add(o)),
          (this._previousFontSetClass = n),
          this.fontIcon !== this._previousFontIconClass &&
            !n.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(e) {
        return typeof e == "string" ? e.trim().split(" ")[0] : e;
      }
      _prependPathToReferences(e) {
        let n = this._elementsWithExternalReferences;
        n &&
          n.forEach((o, a) => {
            o.forEach((s) => {
              a.setAttribute(s.name, `url('${e}#${s.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(e) {
        let n = e.querySelectorAll(tv),
          o = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < n.length; a++)
          ju.forEach((s) => {
            let c = n[a],
              l = c.getAttribute(s),
              d = l ? l.match(ev) : null;
            if (d) {
              let f = o.get(c);
              f || ((f = []), o.set(c, f)), f.push({ name: s, value: d[1] });
            }
          });
      }
      _updateSvgIcon(e) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          e)
        ) {
          let [n, o] = this._splitIconName(e);
          n && (this._svgNamespace = n),
            o && (this._svgName = o),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(o, n)
              .pipe(dt(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let s = `Error retrieving icon ${n}:${o}! ${a.message}`;
                  this._errorHandler.handleError(new Error(s));
                }
              ));
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        u(T),
        u(Zb),
        ro("aria-hidden"),
        u(Qb),
        u(Xe),
        u(Kb, 8)
      );
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 10,
        hostBindings: function (n, o) {
          n & 2 &&
            (it("data-mat-icon-type", o._usingFontIcon() ? "font" : "svg")(
              "data-mat-icon-name",
              o._svgName || o.fontIcon
            )("data-mat-icon-namespace", o._svgNamespace || o.fontSet)(
              "fontIcon",
              o._usingFontIcon() ? o.fontIcon : null
            ),
            ue(o.color ? "mat-" + o.color : ""),
            G("mat-icon-inline", o.inline)(
              "mat-icon-no-color",
              o.color !== "primary" &&
                o.color !== "accent" &&
                o.color !== "warn"
            ));
        },
        inputs: {
          color: "color",
          inline: [N.HasDecoratorInputTransform, "inline", "inline", Ct],
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
        },
        exportAs: ["matIcon"],
        standalone: !0,
        features: [Ot, J],
        ngContentSelectors: Gb,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (vt(), U(0));
        },
        styles: [
          "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Vu = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ imports: [Z, Z] }));
    let i = t;
    return i;
  })();
var iv = (() => {
  let t = class t extends Co {
    constructor(e, n, o) {
      super(e, n, o, b(so, { optional: !0 }));
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(m(E), m(ln), m(wo));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
function nv() {
  return new jc();
}
function ov(i, t, r) {
  return new zc(i, t, r);
}
var Bu = [
    { provide: wo, useFactory: nv },
    { provide: Co, useClass: iv },
    { provide: wi, useFactory: ov, deps: [Mi, Co, w] },
  ],
  zu = [
    { provide: ln, useFactory: () => new Vc() },
    { provide: mt, useValue: "BrowserAnimations" },
    ...Bu,
  ],
  rv = [
    { provide: ln, useClass: Lc },
    { provide: mt, useValue: "NoopAnimations" },
    ...Bu,
  ],
  Uu = (() => {
    let t = class t {
      static withConfig(e) {
        return { ngModule: t, providers: e.disableAnimations ? rv : zu };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t })),
      (t.ɵinj = I({ providers: zu, imports: [Oo] }));
    let i = t;
    return i;
  })();
var av = "@",
  sv = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this.doc = e),
          (this.delegate = n),
          (this.zone = o),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = b(so, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        return (this.moduleImpl ?? import("../chunk-7GY6RWGZ.js"))
          .catch((n) => {
            throw new Y(5300, !1);
          })
          .then(({ ɵcreateEngine: n, ɵAnimationRendererFactory: o }) => {
            this._engine = n(this.animationType, this.doc, this.scheduler);
            let a = new o(this.delegate, this._engine, this.zone);
            return (this.delegate = a), a;
          });
      }
      createRenderer(e, n) {
        let o = this.delegate.createRenderer(e, n);
        if (o.ɵtype === 0) return o;
        typeof o.throwOnSyntheticProps == "boolean" &&
          (o.throwOnSyntheticProps = !1);
        let a = new Qs(o);
        return (
          n?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let c = s.createRenderer(e, n);
              a.use(c);
            })
            .catch((s) => {
              a.use(o);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (t.ɵfac = function (n) {
      Ke();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  Qs = class {
    constructor(t) {
      (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
    }
    use(t) {
      if (((this.delegate = t), this.replay !== null)) {
        for (let r of this.replay) r(t);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(t, r) {
      return this.delegate.createElement(t, r);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(t, r) {
      this.delegate.appendChild(t, r);
    }
    insertBefore(t, r, e, n) {
      this.delegate.insertBefore(t, r, e, n);
    }
    removeChild(t, r, e) {
      this.delegate.removeChild(t, r, e);
    }
    selectRootElement(t, r) {
      return this.delegate.selectRootElement(t, r);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, r, e, n) {
      this.delegate.setAttribute(t, r, e, n);
    }
    removeAttribute(t, r, e) {
      this.delegate.removeAttribute(t, r, e);
    }
    addClass(t, r) {
      this.delegate.addClass(t, r);
    }
    removeClass(t, r) {
      this.delegate.removeClass(t, r);
    }
    setStyle(t, r, e, n) {
      this.delegate.setStyle(t, r, e, n);
    }
    removeStyle(t, r, e) {
      this.delegate.removeStyle(t, r, e);
    }
    setProperty(t, r, e) {
      this.shouldReplay(r) && this.replay.push((n) => n.setProperty(t, r, e)),
        this.delegate.setProperty(t, r, e);
    }
    setValue(t, r) {
      this.delegate.setValue(t, r);
    }
    listen(t, r, e) {
      return (
        this.shouldReplay(r) && this.replay.push((n) => n.listen(t, r, e)),
        this.delegate.listen(t, r, e)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(av);
    }
  };
function Hu(i = "animations") {
  return (
    lo("NgAsyncAnimations"),
    _i([
      {
        provide: wi,
        useFactory: (t, r, e) => new sv(t, r, e, i),
        deps: [E, Mi, w],
      },
      {
        provide: mt,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var cv = ["*", [["mat-toolbar-row"]]],
  lv = ["*", "mat-toolbar-row"],
  dv = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = R({
        type: t,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  $u = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._elementRef = e), (this._platform = n), (this._document = o);
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          (this._checkToolbarMixedModes(),
          this._toolbarRows.changes.subscribe(() =>
            this._checkToolbarMixedModes()
          ));
      }
      _checkToolbarMixedModes() {
        this._toolbarRows.length;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(T), u(z), u(E));
    }),
      (t.ɵcmp = O({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && Vt(a, dv, 5), n & 2)) {
            let s;
            K((s = Q())) && (o._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (n, o) {
          n & 2 &&
            (ue(o.color ? "mat-" + o.color : ""),
            G("mat-toolbar-multiple-rows", o._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              o._toolbarRows.length === 0
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [J],
        ngContentSelectors: lv,
        decls: 2,
        vars: 0,
        template: function (n, o) {
          n & 1 && (vt(cv), U(0), U(1, 1));
        },
        styles: [
          ".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Wu = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ imports: [Z, Z] }));
  let i = t;
  return i;
})();
var Gu = {
    transformMenu: ii("transformMenu", [
      Ae("void", Tt({ opacity: 0, transform: "scale(0.8)" })),
      pe(
        "void => enter",
        fe(
          "120ms cubic-bezier(0, 0, 0.2, 1)",
          Tt({ opacity: 1, transform: "scale(1)" })
        )
      ),
      pe("* => void", fe("100ms 25ms linear", Tt({ opacity: 0 }))),
    ]),
    fadeInItems: ii("fadeInItems", [
      Ae("showing", Tt({ opacity: 1 })),
      pe("void => *", [
        Tt({ opacity: 0 }),
        fe("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  $C = Gu.fadeInItems,
  WC = Gu.transformMenu;
var mv = new _("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let i = b(xt);
    return () => i.scrollStrategies.reposition();
  },
});
function hv(i) {
  return () => i.scrollStrategies.reposition();
}
var fv = { provide: mv, deps: [xt], useFactory: hv };
var Yu = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = M({ type: t })),
    (t.ɵinj = I({ providers: [fv], imports: [Se, Cr, Z, $e, Sr, Z] }));
  let i = t;
  return i;
})();
var Pr = (() => {
  let t = class t {
    constructor(e, n) {
      (this.dialogRef = e), (this.data = n);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(qt), u(pi));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-genre-info"]],
      decls: 10,
      vars: 2,
      consts: [
        [1, "genre-card-header"],
        [1, "genre-card-title"],
        [1, "fill-remaining-space"],
        [
          "aria-label",
          "Close the genre details button",
          "mat-dialog-close",
          "",
          1,
          "dir-close-button",
        ],
        [1, "genre-card-content"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "mat-card")(1, "mat-card-header", 0)(2, "mat-card-title", 1),
          C(3),
          p(),
          P(4, "span", 2),
          h(5, "button", 3),
          C(6, " \u2718 "),
          p()(),
          h(7, "mat-card-content", 4)(8, "p"),
          C(9),
          p()()()),
          n & 2 && (x(3), ut(o.data.genre), x(6), ut(o.data.description));
      },
      dependencies: [Ji, St, re, Yt, Gt],
      styles: [
        ".genre-card-header[_ngcontent-%COMP%]{position:relative;background-color:#fff;color:#000;padding:10px;justify-content:center;align-items:center}.genre-card-title[_ngcontent-%COMP%]{font-size:20px;color:#000;font-weight:500;margin-bottom:10px;text-align:center}.genre-card-content[_ngcontent-%COMP%]{padding:20px;font-size:18px;color:#000;background-color:#fff;margin-top:1px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.dir-close-button[_ngcontent-%COMP%]{height:25px;width:25px;font-weight:700;background-color:#fff;border-radius:1px;border:2px solid black;padding-bottom:5px;cursor:pointer}",
      ],
    }));
  let i = t;
  return i;
})();
var Nr = (() => {
  let t = class t {
    constructor(e) {
      this.data = e;
    }
    ngOnInit() {}
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(pi));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-director-info"]],
      features: [_t([Di])],
      decls: 13,
      vars: 6,
      consts: [
        [1, "director-card-header"],
        [1, "director-card-title"],
        [1, "fill-remaining-space"],
        [
          "aria-label",
          "Close the director details button",
          "mat-dialog-close",
          "",
          1,
          "dir-close-button",
        ],
        [1, "director-card-content"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "mat-card")(1, "mat-card-header", 0)(2, "mat-card-title", 1),
          C(3),
          p(),
          P(4, "span", 2),
          h(5, "button", 3),
          C(6, " \u2718 "),
          p()(),
          h(7, "mat-card-content", 4)(8, "p"),
          C(9),
          uo(10, "date"),
          p(),
          h(11, "p"),
          C(12),
          p()()()),
          n & 2 &&
            (x(3),
            Me(" ", o.data.director, ""),
            x(6),
            Me("Birthday: ", mo(10, 3, o.data.birthdate, "MMMM d, y"), ""),
            x(3),
            Me("Bio: ", o.data.bio, ""));
      },
      dependencies: [Ji, St, re, Yt, Gt, Di],
      styles: [
        ".director-card-header[_ngcontent-%COMP%]{position:relative;background-color:#fff;padding:10px;justify-content:center;align-items:center}.director-card-title[_ngcontent-%COMP%]{font-size:20px;color:#000;font-weight:500;margin-bottom:10px;text-align:center}.director-card-content[_ngcontent-%COMP%]{padding:20px;font-size:18px;color:#000;background-color:#fff;margin-top:1px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.dir-close-button[_ngcontent-%COMP%]{height:25px;width:25px;font-weight:700;background-color:#fff;border-radius:1px;padding-bottom:5px;cursor:pointer}",
      ],
    }));
  let i = t;
  return i;
})();
function pv(i, t) {
  if (
    (i & 1 &&
      (h(0, "mat-card-header", 2)(1, "mat-card-title", 3),
      C(2),
      p(),
      P(3, "span", 4),
      h(4, "button", 5),
      C(5, " \u2718 "),
      p()()),
    i & 2)
  ) {
    let r = tt();
    x(2), ut(r.data.title);
  }
}
var Lr = (() => {
  let t = class t {
    constructor(e, n) {
      (this.dialogRef = e), (this.data = n);
    }
    ngOnInit() {}
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(qt), u(pi));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-movie-synopsis"]],
      decls: 5,
      vars: 2,
      consts: [
        ["class", "synopsis-card-header", 4, "ngIf"],
        [1, "synopsis-card-content"],
        [1, "synopsis-card-header"],
        [1, "synopsis-card-title"],
        [1, "fill-remaining-space"],
        [
          "aria-label",
          "Close the Synopsis details button",
          "mat-dialog-close",
          "",
          1,
          "dir-close-button",
        ],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "mat-card"),
          B(1, pv, 6, 1, "mat-card-header", 0),
          h(2, "mat-card-content", 1)(3, "p"),
          C(4),
          p()()()),
          n & 2 &&
            (x(),
            ot("ngIf", o.data == null ? null : o.data.title),
            x(3),
            ut(o.data.description));
      },
      dependencies: [Ci, Ji, St, re, Yt, Gt],
      styles: [
        ".synopsis-card-header[_ngcontent-%COMP%]{position:relative;background-color:#fff;padding:20px;justify-content:center;align-items:center}.synopsis-card-title[_ngcontent-%COMP%]{font-size:26px;color:#000;font-weight:500;margin-bottom:10px;text-align:center}.synopsis-card-content[_ngcontent-%COMP%]{padding:20px;font-size:18px;color:#000;background-color:#fff;margin-top:-20px;justify-content:center}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.dir-close-button[_ngcontent-%COMP%]{height:25px;width:25px;font-weight:700;background-color:#000;border-radius:1px;color:#fff;padding-bottom:5px;cursor:pointer}",
      ],
    }));
  let i = t;
  return i;
})();
var Zt = "https://art-cine-be3340ead7b8.herokuapp.com/",
  Ye = (() => {
    let t = class t {
      constructor(e) {
        this.http = e;
      }
      userRegistration(e) {
        return (
          console.log(e),
          this.http.post(Zt + "users", e).pipe(at(this.handleError))
        );
      }
      userLogin(e) {
        return (
          console.log(e),
          this.http.post(Zt + "login", e).pipe(at(this.handleError))
        );
      }
      getAllMovies() {
        let e = localStorage.getItem("token");
        return this.http
          .get(Zt + "movies", {
            headers: new ft({ Authorization: "Bearer " + e }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      extractResponseData(e) {
        return e || {};
      }
      getOneMovies(e) {
        let n = localStorage.getItem("token");
        return this.http
          .get(Zt + "movies" + e, {
            headers: new ft({ Authorization: "Bearer " + n }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      getDirector(e) {
        let n = localStorage.getItem("token");
        return this.http
          .get(Zt + "movies/directors/:Name", {
            headers: new ft({ Authorization: "Bearer " + n }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      getGenre(e) {
        let n = localStorage.getItem("token");
        return this.http
          .get(Zt + "movies/genre/:Name", {
            headers: new ft({ Authorization: "Bearer " + n }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      getUser() {
        let e = JSON.parse(localStorage.getItem("user") || "{}"),
          n = localStorage.getItem("token"),
          o = Zt + "users/" + e.username,
          a = new ft({ Authorization: "Bearer " + n });
        return this.http.get(o, { headers: a }).pipe(
          et((s) => {}),
          S(this.extractResponseData),
          at((s) => (console.error("API Error:", s), this.handleError(s)))
        );
      }
      getFavouriteMovies(e) {
        let n = localStorage.getItem("token");
        return this.http
          .get(Zt + "users/" + e, {
            headers: new ft({ Authorization: "Bearer " + n }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      addFavouriteMovies(e, n) {
        let o = localStorage.getItem("token");
        return this.http
          .post(Zt + "users/" + e + "/movies/" + n, null, {
            headers: new ft({ Authorization: "Bearer " + o }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      updateUser(e) {
        let n = localStorage.getItem("token");
        return this.http
          .put(Zt + "users/" + e.username, e, {
            headers: new ft({ Authorization: "Bearer " + n }),
          })
          .pipe(S(this.extractResponseData), at(this.handleError));
      }
      deleteUser() {
        let e = JSON.parse(localStorage.getItem("user") || "{}"),
          n = localStorage.getItem("token"),
          o = new ft({ Authorization: `Bearer ${n}` });
        return this.http
          .delete(Zt + "users/" + e.email, { headers: o, responseType: "text" })
          .pipe(dt(1), at(this.handleError));
      }
      deleteFavoriteMovie(e, n) {
        let o = localStorage.getItem("token");
        return (
          console.log("Deleting movie with ID:", n),
          this.http
            .delete(Zt + "users/" + e + "/movies/" + n, {
              headers: new ft({ Authorization: "Bearer " + o }),
            })
            .pipe(S(this.extractResponseData), at(this.handleError))
        );
      }
      handleError(e) {
        e.error instanceof ErrorEvent
          ? console.error("Some error occurred:", e.error.message)
          : console.error(
              `Error Status code ${e.status}, Error body is: ${e.error}`
            );
        let n = new Error("Something went wrong, please try again later.");
        ae(() => n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(m(hn));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Vr = (() => {
  let t = class t {
    constructor(e, n) {
      (this.snackBar = e), (this.router = n), (this.username = "");
    }
    ngOnInit() {
      this.username = JSON.parse(localStorage.getItem("user")).username;
    }
    openMovies() {
      this.router.navigate(["movies"]);
    }
    openProfile() {
      this.router.navigate(["profile"]);
    }
    logoutUser() {
      localStorage.setItem("token", ""),
        localStorage.setItem("user", ""),
        this.snackBar.open("You have been logged out", "OK", { duration: 2e3 }),
        this.router.navigate(["welcome"]);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(te), u(Nt));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-navbar"]],
      decls: 14,
      vars: 1,
      consts: [
        [1, "navbar"],
        ["role", "navigation", "color", "black", 1, "navbar"],
        ["mat-button", "", 3, "click"],
        [
          "src",
          "/assets/ArtCine.png",
          "alt",
          "ArtCine Logo",
          "height",
          "auto",
          3,
          "click",
        ],
        [1, "profile-logout-buttons"],
        [1, "example-spacer"],
        ["mat-button", "", 1, "nav-buttons", 3, "click"],
        ["mat-button", "", 1, "nav-buttons", "logout", 3, "click"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2),
          V("click", function () {
            return o.openMovies();
          }),
          h(3, "img", 3),
          V("click", function () {
            return o.openMovies();
          }),
          p()(),
          h(4, "div", 4),
          P(5, "span", 5),
          h(6, "a", 6),
          V("click", function () {
            return o.openProfile();
          }),
          C(7),
          h(8, "mat-icon"),
          C(9, "account_circle"),
          p()(),
          h(10, "a", 7),
          V("click", function () {
            return o.logoutUser();
          }),
          C(11, "Logout"),
          h(12, "mat-icon"),
          C(13, "logout"),
          p()()()()()),
          n & 2 && (x(7), ut(o.username));
      },
      dependencies: [fu, Mt, en, $u],
      styles: [
        ".navbar[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 20px;background-color:#fff;color:#fff;position:relative}.navbar[_ngcontent-%COMP%]   .profile-logout-buttons[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar[_ngcontent-%COMP%]   .example-spacer[_ngcontent-%COMP%]{flex:1}.navbar[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]{color:#000;text-transform:uppercase;margin-left:10px;border:1px solid #000000}.navbar[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]:last-child{margin-left:20px}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:75px;margin-right:15px;margin-top:15px}@media screen and (max-width: 768px){.mat-toolbar[_ngcontent-%COMP%]{flex-direction:row;position:absolute}.example-spacer[_ngcontent-%COMP%]{margin-top:15px}.nav-buttons[_ngcontent-%COMP%]{margin-top:5px;width:5px;height:25px;font-size:12px;padding:10px 15px}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;margin-right:5px;margin-top:15px}}",
      ],
    }));
  let i = t;
  return i;
})();
function gv(i, t) {
  i & 1 && (h(0, "div", 17)(1, "p"), C(2, "No favorite movies found!"), p()());
}
function bv(i, t) {
  i & 1 && (h(0, "mat-icon", 27), C(1, "favorite"), p());
}
function vv(i, t) {
  i & 1 && (h(0, "mat-icon", 28), C(1, "favorite_border"), p());
}
function _v(i, t) {
  if (i & 1) {
    let r = me();
    h(0, "mat-card", 19),
      P(1, "img", 20),
      h(2, "div", 21)(3, "mat-card-header")(4, "mat-card-title"),
      C(5),
      p(),
      h(6, "mat-card-subtitle"),
      C(7),
      p(),
      P(8, "div", 22)(9, "div", 22),
      h(10, "mat-card-subtitle"),
      C(11),
      p(),
      P(12, "div", 22)(13, "div", 22),
      h(14, "mat-card-subtitle"),
      C(15),
      p()(),
      h(16, "mat-card-actions", 23),
      P(17, "br"),
      h(18, "button", 24),
      V("click", function () {
        let n = Lt(r).$implicit,
          o = tt();
        return jt(o.toggleFav(n));
      }),
      B(19, bv, 2, 0, "mat-icon", 25)(20, vv, 2, 0, "mat-icon", 26),
      p()()()();
  }
  if (i & 2) {
    let r = t.$implicit,
      e = tt();
    x(),
      ia("src", r.imageurl, ao),
      ia("alt", r.title),
      x(4),
      ut(r.title),
      x(2),
      ut(r.director.name),
      x(4),
      ut(r.genre.names.join(", ")),
      x(4),
      ut(r.description),
      x(4),
      ot("ngIf", e.isFav(r)),
      x(),
      ot("ngIf", !e.isFav(r));
  }
}
var Zu = (() => {
  let t = class t {
    constructor(e, n, o, a) {
      (this.fetchApiData = e),
        (this.snackBar = n),
        (this.dialog = o),
        (this.router = a),
        (this.user = {}),
        (this.userData = {}),
        (this.formUserData = {}),
        (this.favoriteMoviesIDs = []),
        (this.favoriteMovies = []),
        (this.movies = []);
    }
    ngOnInit() {
      this.getProfile(), this.getMovies();
    }
    getProfile() {
      this.fetchApiData.getUser().subscribe((e) => {
        if (
          (console.log("result:", e.favoriteMovies),
          (this.user = e),
          (this.userData.username = this.user.username),
          (this.userData.email = this.user.email),
          this.user.Birthday)
        ) {
          let n = new Date(this.user.Birthday);
          isNaN(n.getTime()) ||
            (this.userData.birthday = n.toISOString().split("T")[0]);
        }
        (this.formUserData = g({}, this.userData)),
          (this.favoriteMoviesIDs = this.user.favoriteMovies),
          this.fetchApiData.getAllMovies().subscribe((n) => {
            this.favoriteMovies = n.filter((o) =>
              this.favoriteMoviesIDs.includes(o._id)
            );
          });
      });
    }
    getMovies() {
      this.fetchApiData
        .getAllMovies()
        .subscribe((e) => (Array.isArray(e) && (this.movies = e), this.movies));
    }
    getFavMovies() {
      this.fetchApiData.getUser().subscribe((e) => {
        (this.favoriteMoviesIDs = e.favoriteMovies),
          (this.favoriteMovies = this.movies.filter((n) =>
            this.favoriteMoviesIDs.includes(n._id)
          ));
      });
    }
    isFav(e) {
      return this.favoriteMoviesIDs.includes(e._id);
    }
    toggleFav(e) {
      this.isFav(e) ? this.deleteFavMovies(e) : this.addFavMovies(e);
    }
    addFavMovies(e) {
      let n = JSON.parse(localStorage.getItem("user") || "{}");
      n &&
        this.fetchApiData
          .addFavouriteMovies(n.username, e._id)
          .subscribe((o) => {
            localStorage.setItem("user", JSON.stringify(o)),
              this.getFavMovies(),
              this.snackBar.open(
                `${e.title} has been added to your favorites`,
                "OK",
                { duration: 1e3 }
              );
          });
    }
    deleteFavMovies(e) {
      let n = localStorage.getItem("user");
      if (n) {
        let o = JSON.parse(n);
        (this.userData.UserId = o._id),
          this.fetchApiData
            .deleteFavoriteMovie(o.username, e._id)
            .subscribe((a) => {
              localStorage.setItem("user", JSON.stringify(a)),
                (this.favoriteMoviesIDs = this.favoriteMoviesIDs.filter(
                  (s) => s !== e._id
                )),
                this.getFavMovies(),
                this.snackBar.open(
                  `${e.title} has been removed from your favorites`,
                  "OK",
                  { duration: 1e3 }
                );
            });
      }
    }
    updateUser() {
      this.fetchApiData.updateUser(this.formUserData).subscribe(
        (e) => {
          console.log("User update success:", e),
            localStorage.setItem("user", JSON.stringify(e)),
            this.snackBar.open("User updated successfully!", "OK", {
              duration: 2e3,
            }),
            this.getProfile();
        },
        (e) => {
          console.log("Error updating user:", e),
            this.snackBar.open("Failed to update user", "OK", {
              duration: 2e3,
            });
        }
      );
    }
    deleteUser() {
      return Br(this, null, function* () {
        console.log("deleteUser function called:", this.userData.email),
          confirm("Do you want to delete your account permanently?") &&
            this.fetchApiData.deleteUser().subscribe(() => {
              this.snackBar.open("Account deleted successfully!", "OK", {
                duration: 3e3,
              }),
                localStorage.clear(),
                this.router.navigate(["welcome"]);
            });
      });
    }
    openGenreDialog(e, n) {
      this.dialog.open(Pr, {
        data: { genre: e, description: n },
        width: "500px",
      });
    }
    openDirectorDialog(e, n, o) {
      this.dialog.open(Nr, {
        data: { director: e, bio: n, birthdate: o },
        width: "500px",
      });
    }
    openSynopsisDialog(e, n) {
      this.dialog.open(Lr, {
        data: { title: e, description: n },
        width: "500px",
      });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Ye), u(te), u(We), u(Nt));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-user-profile"]],
      decls: 45,
      vars: 11,
      consts: [
        [1, "main"],
        [1, "user-profile-container"],
        [1, "user-profile"],
        [1, "user-container"],
        [1, "user-info-display"],
        [1, "update-user-info"],
        [1, "example-form", 3, "ngSubmit"],
        [1, "example-full-width"],
        [
          "shouldLabelFloat",
          "true",
          "matInput",
          "",
          "type",
          "text",
          "name",
          "username",
          "placeholder",
          "Name",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "type",
          "date",
          "name",
          "birthday",
          "placeholder",
          "Birthday",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "type",
          "email",
          "name",
          "email",
          "placeholder",
          "Email",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [1, "button-container"],
        ["mat-raised-button", "", "type", "submit", "color", "primary"],
        ["mat-raised-button", "", "color", "warn", 3, "click"],
        [1, "favorite-movies-section"],
        [1, "favorite-movies-container"],
        ["class", "movie-cards", 4, "ngIf"],
        [1, "movie-cards"],
        ["class", "card", 4, "ngFor", "ngForOf"],
        [1, "card"],
        [3, "src", "alt"],
        [1, "cardContent"],
        [1, "space"],
        [1, "actions"],
        [
          "mat-icon-button",
          "",
          "color",
          "danger",
          2,
          "width",
          "auto",
          3,
          "click",
        ],
        ["style", "transform: scale(3)", "color", "danger", 4, "ngIf"],
        ["style", "transform: scale(1.5)", "color", "primary", 4, "ngIf"],
        ["color", "danger", 2, "transform", "scale(3)"],
        ["color", "primary", 2, "transform", "scale(1.5)"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "div", 0),
          P(1, "app-navbar"),
          h(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2"),
          C(6, "User Info"),
          p(),
          h(7, "div", 4)(8, "h2"),
          C(9),
          p()(),
          h(10, "div", 4)(11, "span"),
          C(12),
          uo(13, "date"),
          p()(),
          h(14, "div", 4)(15, "h2"),
          C(16),
          p()(),
          h(17, "div", 5)(18, "h2"),
          C(19, "Update User Info"),
          p(),
          h(20, "form", 6),
          V("ngSubmit", function () {
            return o.updateUser();
          }),
          h(21, "mat-form-field", 7)(22, "mat-label"),
          C(23, "Name"),
          p(),
          h(24, "input", 8),
          Ut("ngModelChange", function (s) {
            return (
              Bt(o.formUserData.username, s) || (o.formUserData.username = s), s
            );
          }),
          p()(),
          h(25, "mat-form-field", 7)(26, "mat-label"),
          C(27, "Birthday"),
          p(),
          h(28, "input", 9),
          Ut("ngModelChange", function (s) {
            return (
              Bt(o.formUserData.birthday, s) || (o.formUserData.birthday = s), s
            );
          }),
          p()(),
          h(29, "mat-form-field", 7)(30, "mat-label"),
          C(31, "Email"),
          p(),
          h(32, "input", 10),
          Ut("ngModelChange", function (s) {
            return Bt(o.formUserData.email, s) || (o.formUserData.email = s), s;
          }),
          p()(),
          h(33, "div", 11)(34, "button", 12),
          C(35, " Update "),
          p(),
          h(36, "button", 13),
          V("click", function () {
            return o.deleteUser();
          }),
          C(37, " Delete User "),
          p()()()()()(),
          h(38, "div", 14)(39, "div", 15)(40, "h2"),
          C(41, "Favorite Movies"),
          p(),
          B(42, gv, 3, 0, "div", 16),
          h(43, "div", 17),
          B(44, _v, 21, 8, "mat-card", 18),
          p()()()()()),
          n & 2 &&
            (x(9),
            ut(o.userData.username),
            x(3),
            ut(mo(13, 8, o.userData.birthday, "longDate")),
            x(4),
            ut(o.userData.email),
            x(8),
            zt("ngModel", o.formUserData.username),
            x(4),
            zt("ngModel", o.formUserData.birthday),
            x(4),
            zt("ngModel", o.formUserData.email),
            x(10),
            ot("ngIf", o.favoriteMovies.length === 0),
            x(2),
            ot("ngForOf", o.favoriteMovies));
      },
      dependencies: [
        _o,
        Ci,
        $i,
        je,
        Ui,
        Hi,
        ci,
        be,
        qi,
        Yi,
        Er,
        Mt,
        Ir,
        St,
        Ki,
        Yt,
        Xi,
        Gt,
        en,
        Vr,
        Di,
      ],
      styles: [
        ".main[_ngcontent-%COMP%]{background-color:#87cefa}.navbar[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 20px #0000004d}.user-profile-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0 10%}.user-profile[_ngcontent-%COMP%]{color:#000;font-size:medium;max-width:300px}h1[_ngcontent-%COMP%]{font-size:35px;font-weight:500;margin-left:550px;margin-bottom:50px}.user-info-display[_ngcontent-%COMP%]{border-bottom:1px solid rgba(73,72,72,.25);padding:.9em 0;margin:.9em 0}.user-info-display[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;color:silver}.user-info-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;left:10%;font-size:14px;color:silver}.user-container[_ngcontent-%COMP%]{color:#fcfcfc;padding:15px;display:flex;flex-direction:column;justify-content:space-between;background-color:#00000080;margin-bottom:20px;margin-top:20px;box-shadow:0 4px 8px #000c;border-radius:10px;max-width:600px}.user-info[_ngcontent-%COMP%], .update-user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;background-color:#00000080;width:100%;padding:15px;border-radius:10px}.update-user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px}.example-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.update-user[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;margin:5px;padding:10px;width:70%}.button-container[_ngcontent-%COMP%]{display:flex;gap:10px}button[_ngcontent-%COMP%]{width:50%}.update-button[_ngcontent-%COMP%]{background-color:#5f0f4000;color:#fff}.spacer[_ngcontent-%COMP%]{height:150px}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}.content[_ngcontent-%COMP%]{scroll-behavior:smooth;margin-top:20px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:50px;font-size:35px;font-weight:500}.favorite-movies-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(100% - 320px);margin-left:10px}.favorite-movies-container[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;width:100%;min-height:100vh;align-items:center;margin:10px;padding:15px;border-radius:10px;box-shadow:0 4px 8px #000c}.favorite-movies-container[_ngcontent-%COMP%]   .movie-cards[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px}.movie-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;color:#fff;overflow:hidden;border-radius:5px}img[_ngcontent-%COMP%]{width:100%;height:100%;border:6px solid white;transition:all .5s}img[_ngcontent-%COMP%]:hover{transform:translate(10px) translateY(-10px) scale(1.1)}.card[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;background:#0009;padding:45% 4% 0;opacity:0;transition:all .2s}.movie-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .cardContent[_ngcontent-%COMP%]{opacity:1}mat-card-header[_ngcontent-%COMP%]{position:absolute;align-items:center;top:0;margin-top:10px}mat-card-title[_ngcontent-%COMP%]{font-size:1.8em;font-weight:500;margin-bottom:10px;align-items:center}mat-card-subtitle[_ngcontent-%COMP%]{color:#fff;font-size:1.4em;font-weight:300;margin-bottom:10px}.actions[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;align-items:left;font-size:1.2em;opacity:0;width:100%;height:80%;transition:1s ease out}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60%}mat-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;cursor:pointer;transition:all .5s}mat-icon[_ngcontent-%COMP%]:hover{transform:scale(1.5)}.actions[_ngcontent-%COMP%]:hover{opacity:1}@media screen and (max-width: 768px){.user-profile-container[_ngcontent-%COMP%]{flex-direction:column}.user-container[_ngcontent-%COMP%]{margin:20px 5%}h1[_ngcontent-%COMP%]{margin-left:5%}.update-user[_ngcontent-%COMP%]{width:90%}button[_ngcontent-%COMP%]{width:70%;font-size:12px}.favorite-movies-section[_ngcontent-%COMP%]{width:100%;margin-left:0}}",
      ],
    }));
  let i = t;
  return i;
})();
var Xu = (() => {
  let t = class t {
    constructor(e, n, o) {
      (this.fetchApiData = e),
        (this.dialogRef = n),
        (this.snackBar = o),
        (this.userData = {
          username: "",
          password: "",
          email: "",
          birthday: "",
        });
    }
    ngOnInit() {}
    registerUser() {
      this.fetchApiData.userRegistration(this.userData).subscribe(
        (e) => {
          this.dialogRef.close(),
            console.log(e),
            this.snackBar.open("user registered successfully!", "OK", {
              duration: 2e3,
            });
        },
        (e) => {
          console.log(e), this.snackBar.open(e, "OK", { duration: 2e3 });
        }
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Ye), u(qt), u(te));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-user-registration-form"]],
      inputs: { userData: "userData" },
      decls: 20,
      vars: 4,
      consts: [
        [1, "container"],
        [1, "signup-main"],
        [1, "signup-header"],
        [1, "signup-title"],
        [1, "signup-card-subtitle"],
        [1, "signup-form-start"],
        [1, "signup-form"],
        [1, "username-field"],
        [
          "matInput",
          "",
          "placeholder",
          "username",
          "type",
          "text",
          "autocomplete",
          "username",
          "name",
          "username",
          "required",
          "",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "type",
          "password",
          "placeholder",
          "Password",
          "name",
          "Password",
          "autocomplete",
          "current-password",
          1,
          "password-field",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "type",
          "email",
          "placeholder",
          "Email",
          "name",
          "Email",
          "required",
          "",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "type",
          "date",
          "placeholder",
          "Birthday",
          "name",
          "Birthday",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [1, "signup-button"],
        ["mat-raised-button", "", "color", "primary", 3, "click"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header", 2)(
            3,
            "mat-card-title",
            3
          ),
          C(4, "Sign Up!"),
          p(),
          h(5, "mat-card-subtitle", 4),
          C(6, "Please create your profile below"),
          p()(),
          h(7, "mat-card-content", 5)(8, "form", 6)(9, "mat-form-field", 7)(
            10,
            "input",
            8
          ),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.username, s) || (o.userData.username = s), s;
          }),
          p()(),
          h(11, "mat-form-field")(12, "input", 9),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.password, s) || (o.userData.password = s), s;
          }),
          p()(),
          h(13, "mat-form-field")(14, "input", 10),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.email, s) || (o.userData.email = s), s;
          }),
          p()(),
          h(15, "mat-form-field")(16, "input", 11),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.birthday, s) || (o.userData.birthday = s), s;
          }),
          p()()()(),
          h(17, "mat-card-actions", 12)(18, "button", 13),
          V("click", function () {
            return o.registerUser();
          }),
          C(19, " Sign Up "),
          p()()()()),
          n & 2 &&
            (x(10),
            zt("ngModel", o.userData.username),
            x(2),
            zt("ngModel", o.userData.password),
            x(2),
            zt("ngModel", o.userData.email),
            x(2),
            zt("ngModel", o.userData.birthday));
      },
      dependencies: [
        $i,
        je,
        Ui,
        Hi,
        Wn,
        ci,
        be,
        qi,
        Yi,
        Mt,
        St,
        Ki,
        re,
        Yt,
        Xi,
        Gt,
      ],
      styles: [
        ".signup-main[_ngcontent-%COMP%]{background-color:gray;border-radius:10px;box-shadow:0 4px 8px #00000080;max-width:500px;margin:10px;justify-content:center}.signup-title[_ngcontent-%COMP%]{font-size:24px;color:#fff}.signup-card-subtitle[_ngcontent-%COMP%]{color:#ccc}.signup-form-start[_ngcontent-%COMP%]{margin-top:20px}.signup-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-form-field.mat-password-field[_ngcontent-%COMP%]{color:#fff}.signup-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;width:100%}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#6495ed;width:150px;height:40px;font-size:18px}@media screen and (max-width: 600px){.signup-main[_ngcontent-%COMP%]{padding:20px;max-width:90%}}",
      ],
    }));
  let i = t;
  return i;
})();
var Ku = (() => {
  let t = class t {
    constructor(e, n, o, a) {
      (this.fetchApiData = e),
        (this.dialogRef = n),
        (this.snackBar = o),
        (this.router = a),
        (this.userData = { username: "", password: "" });
    }
    ngOnInit() {}
    loginUser() {
      this.fetchApiData.userLogin(this.userData).subscribe(
        (e) => {
          localStorage.setItem("user", JSON.stringify(e.user)),
            localStorage.setItem("token", e.token),
            this.dialogRef.close(),
            this.snackBar.open("User login successful", "OK", {
              duration: 2e3,
            }),
            this.router.navigate(["movies"]);
        },
        (e) => {
          this.snackBar.open("User login failed", "OK", { duration: 2e3 });
        }
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Ye), u(qt), u(te), u(Nt));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-user-login-form"]],
      inputs: { userData: "userData" },
      decls: 15,
      vars: 2,
      consts: [
        [1, "container"],
        [1, "card-header"],
        [1, "login-card-subtitle"],
        [1, "form-inputs"],
        [
          "matInput",
          "",
          "placeholder",
          "username",
          "type",
          "text",
          "name",
          "username",
          "autocomplete",
          "username",
          "required",
          "",
          3,
          "ngModelChange",
          "ngModel",
        ],
        [
          "matInput",
          "",
          "placeholder",
          "Password",
          "type",
          "password",
          "name",
          "Password",
          "autocomplete",
          "current-password",
          "required",
          "",
          3,
          "ngModelChange",
          "ngModel",
        ],
        ["mat-raised-button", "", 1, "button-profile", 3, "click"],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title"),
          C(3, "Login"),
          p(),
          h(4, "mat-card-subtitle", 2),
          C(5, "Please Sign in below"),
          p()(),
          h(6, "mat-card-content")(7, "form")(8, "mat-form-field", 3)(
            9,
            "input",
            4
          ),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.username, s) || (o.userData.username = s), s;
          }),
          p()(),
          h(10, "mat-form-field", 3)(11, "input", 5),
          Ut("ngModelChange", function (s) {
            return Bt(o.userData.password, s) || (o.userData.password = s), s;
          }),
          p()()()(),
          h(12, "mat-card-actions")(13, "button", 6),
          V("click", function () {
            return o.loginUser();
          }),
          C(14, " Login "),
          p()()()),
          n & 2 &&
            (x(9),
            zt("ngModel", o.userData.username),
            x(2),
            zt("ngModel", o.userData.password));
      },
      dependencies: [
        $i,
        je,
        Ui,
        Hi,
        Wn,
        ci,
        be,
        qi,
        Yi,
        Mt,
        St,
        Ki,
        re,
        Yt,
        Xi,
        Gt,
      ],
      styles: [
        ".container[_ngcontent-%COMP%]{background-color:gray;border-radius:10px;box-shadow:0 4px 8px #0000004d;margin:10px;border:1px solid rgb(96,95,95);padding:20px}mat-card-header[_ngcontent-%COMP%]{background-color:transparent;color:#fff;text-align:center}mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:700}mat-card-subtitle[_ngcontent-%COMP%]{color:#fff;font-weight:200;margin:10px;text-align:center}mat-card-content[_ngcontent-%COMP%]{padding:20px 10;justify-content:center}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#6495ed}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#6495ed}@media screen and (max-width: 600px){.container[_ngcontent-%COMP%]{padding:10px}mat-card-title[_ngcontent-%COMP%]{font-size:24px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:16px}}",
      ],
    }));
  let i = t;
  return i;
})();
function yv(i, t) {
  i & 1 && (h(0, "mat-icon", 9), C(1, " favorite "), p());
}
function xv(i, t) {
  i & 1 && (h(0, "mat-icon", 9), C(1, " favorite_border "), p());
}
function wv(i, t) {
  if (i & 1) {
    let r = me();
    h(0, "mat-card")(1, "mat-dialog-content")(2, "div", 2)(3, "div", 3),
      C(4),
      p(),
      P(5, "img", 4),
      h(6, "div", 5)(7, "button", 6),
      V("click", function () {
        let n = Lt(r).$implicit,
          o = tt();
        return jt(o.openGenreDialog(n.genre.names, n.description));
      }),
      C(8, " Genre "),
      p(),
      h(9, "button", 6),
      V("click", function () {
        let n = Lt(r).$implicit,
          o = tt();
        return jt(
          o.openDirectorDialog(n.director.name, n.bio, n.director.birthyear)
        );
      }),
      C(10, " Director "),
      p(),
      h(11, "button", 6),
      V("click", function () {
        let n = Lt(r).$implicit,
          o = tt();
        return jt(o.openSynopsisDialog(n.title, n.description));
      }),
      C(12, " Synopsis "),
      p(),
      h(13, "button", 7),
      V("click", function () {
        let n = Lt(r).$implicit,
          o = tt();
        return jt(o.toggleFav(n));
      }),
      B(14, yv, 2, 0, "mat-icon", 8)(15, xv, 2, 0, "mat-icon", 8),
      p()()()()();
  }
  if (i & 2) {
    let r = t.$implicit,
      e = tt();
    x(4),
      ut(r.title),
      x(),
      ot("src", r.imageurl, ao),
      x(9),
      ot("ngIf", e.isFav(r)),
      x(),
      ot("ngIf", !e.isFav(r));
  }
}
var Qu = (() => {
  let t = class t {
    constructor(e, n, o) {
      (this.fetchApiData = e),
        (this.dialog = n),
        (this.snackBar = o),
        (this.movies = []),
        (this.genre = ""),
        (this.director = ""),
        (this.user = {}),
        (this.userData = { UserId: "", favoritemovie: [] }),
        (this.favoritemovie = []);
    }
    ngOnInit() {
      this.getMovies();
    }
    getMovies() {
      this.fetchApiData.getAllMovies().subscribe((e) => {
        (this.movies = e), console.log("movies from API", this.movies);
      });
    }
    openGenreDialog(e, n) {
      this.dialog.open(Pr, {
        data: { genre: e, description: n },
        width: "500px",
      });
    }
    openDirectorDialog(e, n, o) {
      this.dialog.open(Nr, {
        data: { director: e, bio: n, birthdate: o },
        width: "500px",
      });
    }
    openSynopsisDialog(e, n) {
      this.dialog.open(Lr, {
        data: { title: e, description: n },
        width: "500px",
      });
    }
    getFavorites() {
      this.fetchApiData.getAllMovies().subscribe((e) => {
        Array.isArray(e) &&
          ((this.movies = e),
          this.movies.forEach((n) => {
            this.favoritemovie.push(n._id);
          }));
      });
    }
    isFav(e) {
      return this.favoritemovie.includes(e._id);
    }
    toggleFav(e) {
      console.log("toggleFav called with movie:", e);
      let n = this.isFav(e);
      console.log("isFavorite:", n),
        n ? this.deleteFavMovies(e) : this.addFavMovies(e);
    }
    addFavMovies(e) {
      let n = localStorage.getItem("user");
      if (n) {
        let o = JSON.parse(n);
        console.log("user:", o),
          (this.userData.UserId = o._id),
          console.log("userData:", this.userData),
          this.fetchApiData
            .addFavouriteMovies(o.username, e._id)
            .subscribe((a) => {
              console.log("server response:", a),
                localStorage.setItem("user", JSON.stringify(a)),
                this.favoritemovie.push(e._id),
                this.snackBar.open(
                  `${e.title} has been added to your favorites`,
                  "OK",
                  { duration: 3e3 }
                );
            });
      }
    }
    deleteFavMovies(e) {
      let n = localStorage.getItem("user");
      if (n) {
        let o = JSON.parse(n);
        this.fetchApiData
          .deleteFavoriteMovie(o.username, e._id)
          .subscribe((a) => {
            localStorage.setItem("user", JSON.stringify(a)),
              (this.favoritemovie = this.favoritemovie.filter(
                (s) => s !== e._id
              )),
              this.snackBar.open(
                `${e.title} has been removed from your favorites`,
                "OK",
                { duration: 3e3 }
              );
          });
      }
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Ye), u(We), u(te));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-movie-card"]],
      decls: 3,
      vars: 1,
      consts: [
        [1, "movies-grid"],
        [4, "ngFor", "ngForOf"],
        [1, "movie-card"],
        [1, "mat-title"],
        ["alt", "Movie Poster", "width", "200", "height", "300", 3, "src"],
        [1, "button-container"],
        ["mat-raised-button", "", 1, "custom-button", 3, "click"],
        ["mat-icon-button", "", 3, "click"],
        ["style", "transform: scale(1.5)", 4, "ngIf"],
        [2, "transform", "scale(1.5)"],
      ],
      template: function (n, o) {
        n & 1 &&
          (P(0, "app-navbar"),
          h(1, "div", 0),
          B(2, wv, 16, 4, "mat-card", 1),
          p()),
          n & 2 && (x(2), ot("ngForOf", o.movies));
      },
      dependencies: [_o, Ci, Au, Mt, Ir, St, en, Vr],
      styles: [
        ".movies-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;padding:20px;background-color:#87cefa}.movies-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{background-color:#708090;padding:20px;border-radius:10px;color:#fff;transition:background-color .3s ease}.movies-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover{background-color:#00000080}mat-card[_ngcontent-%COMP%]{padding:10px;box-shadow:0 4px 8px #0000004d;align-items:center;margin-bottom:8px}.mat-title[_ngcontent-%COMP%]{font-size:1.25em;font-weight:700;margin-bottom:10px;height:36px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:10px}.button-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{position:absolute;top:10px;right:10px;margin-top:15px}.button-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;position:absolute}mat-card-title[_ngcontent-%COMP%]{font-size:15px;font-weight:200px;margin-bottom:10px}mat-card-subtitle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;object-fit:cover;border-radius:10px;justify-content:center;align-items:center}.custom-button[_ngcontent-%COMP%]{background-color:#6495ed;color:#fff;font-weight:150px;font-size:12px}.mat-icon[_ngcontent-%COMP%]{transform:scale(1.5)}@media screen and (max-width: 768px){.movies-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}mat-dialog-content[_ngcontent-%COMP%]{max-width:200px}}",
      ],
    }));
  let i = t;
  return i;
})();
var Ju = (() => {
  let t = class t {
    constructor(e) {
      this.dialog = e;
    }
    ngOnInit() {}
    openUserRegistrationDialog() {
      this.dialog.open(Xu, { width: "500px" });
    }
    openUserLoginDialog() {
      this.dialog.open(Ku, { width: "280px" });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(We));
  }),
    (t.ɵcmp = O({
      type: t,
      selectors: [["app-welcome-page"]],
      decls: 8,
      vars: 0,
      consts: [
        [1, "main-page"],
        [1, "container"],
        [
          "mat-raised-button",
          "",
          "color",
          "primary",
          2,
          "margin-right",
          "10px",
          3,
          "click",
        ],
      ],
      template: function (n, o) {
        n & 1 &&
          (h(0, "div", 0)(1, "div", 1)(2, "h1"),
          C(3, "ArtCine"),
          p(),
          h(4, "button", 2),
          V("click", function () {
            return o.openUserLoginDialog();
          }),
          C(5, " Login "),
          p(),
          h(6, "button", 2),
          V("click", function () {
            return o.openUserRegistrationDialog();
          }),
          C(7, " Register "),
          p()()());
      },
      dependencies: [Mt],
      styles: [
        ".main-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#87cefa}.container[_ngcontent-%COMP%]{background-color:#fff;padding:40px;border-radius:10px;box-shadow:0 0 20px #0000004d;text-align:center;width:80%;max-width:500px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;margin-bottom:20px;color:#fff}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px;width:200px;height:60px;background-color:#6495ed;color:#fff;font-size:24px;font-weight:500}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-right:10px}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:140px}}",
      ],
    }));
  let i = t;
  return i;
})();
var Cv = [
    { path: "welcome", component: Ju },
    { path: "movies", component: Qu },
    { path: "profile", component: Zu },
    { path: "", redirectTo: "welcome", pathMatch: "full" },
  ],
  tm = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = M({ type: t, bootstrap: [Xl] })),
      (t.ɵinj = I({
        providers: [Hu()],
        imports: [
          Zl,
          Oo,
          Kc,
          Ad,
          Ru,
          lu,
          Mr,
          pu,
          qn,
          Tu,
          Uu,
          jn.forRoot(Cv),
          Vu,
          Wu,
          kr,
          Yu,
        ],
      }));
    let i = t;
    return i;
  })();
rl()
  .bootstrapModule(tm)
  .catch((i) => console.error(i));
