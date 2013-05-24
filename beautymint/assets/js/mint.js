var stores = {
	"1" : {
		"name" : "JewelMint",
		"url" : "JewelMint.com",
		"overwrite_query_params" : false,
		"root_category_id" : "46",
		"bitly" : {
			"login" : "beachmint",
			"key" : "R_d587ae8f0dc3289c58d1777c97a17c20"
		},
		"cloudsponge" : "QXM44QMJXETBAMPW2CSY"
	},
	"2" : {
		"name" : "StyleMint",
		"url" : "StyleMint.com",
		"overwrite_query_params" : false,
		"root_category_id" : false,
		"bitly" : {
			"login" : "stylemint2",
			"key" : "R_49043318f2176f71aabb29e6aa6f9433"
		},
		"cloudsponge" : "S6Y34P42AMF66JDKVRYM"
	},
	"3" : {
		"name" : "BeautyMint",
		"url" : "BeautyMint.com",
		"cloudsponge" : "C8TKZHGW5WRWH7SAV3UT"
	},
	"4" : {
		"name" : "ShoeMint",
		"url" : "ShoeMint.com",
		"cloudsponge" : "WUWL7QP32NGNX6RX22FL"
	}
};
(function (N, d, p, K, k, H) {
	var b = this;
	var n = Math.floor(Math.random() * 10000);
	var q = Function.prototype;
	var Q = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
	var R = /[\-\w]+\/\.\.\//;
	var F = /([^:])\/\//g;
	var I = "";
	var o = {};
	var M = N.easyXDM;
	var U = "easyXDM_";
	var E;
	var y = false;
	var i;
	var h;
	function C(X, Z) {
		var Y = typeof X[Z];
		return Y == "function" || (!!(Y == "object" && X[Z])) || Y == "unknown"
	}
	function u(X, Y) {
		return !!(typeof(X[Y]) == "object" && X[Y])
	}
	function r(X) {
		return Object.prototype.toString.call(X) === "[object Array]"
	}
	function c() {
		try {
			var X = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			i = Array.prototype.slice.call(X.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1);
			h = parseInt(i[0], 10) > 9 && parseInt(i[1], 10) > 0;
			X = null;
			return true
		} catch (Y) {
			return false
		}
	}
	var v,
	x;
	if (C(N, "addEventListener")) {
		v = function (Z, X, Y) {
			Z.addEventListener(X, Y, false)
		};
		x = function (Z, X, Y) {
			Z.removeEventListener(X, Y, false)
		}
	} else {
		if (C(N, "attachEvent")) {
			v = function (X, Z, Y) {
				X.attachEvent("on" + Z, Y)
			};
			x = function (X, Z, Y) {
				X.detachEvent("on" + Z, Y)
			}
		} else {
			throw new Error("Browser not supported")
		}
	}
	var W = false,
	J = [],
	L;
	if ("readyState" in d) {
		L = d.readyState;
		W = L == "complete" || (~navigator.userAgent.indexOf("AppleWebKit/") && (L == "loaded" || L == "interactive"))
	} else {
		W = !!d.body
	}
	function s() {
		if (W) {
			return
		}
		W = true;
		for (var X = 0; X < J.length; X++) {
			J[X]()
		}
		J.length = 0
	}
	if (!W) {
		if (C(N, "addEventListener")) {
			v(d, "DOMContentLoaded", s)
		} else {
			v(d, "readystatechange", function () {
				if (d.readyState == "complete") {
					s()
				}
			});
			if (d.documentElement.doScroll && N === top) {
				var g = function () {
					if (W) {
						return
					}
					try {
						d.documentElement.doScroll("left")
					} catch (X) {
						K(g, 1);
						return
					}
					s()
				};
				g()
			}
		}
		v(N, "load", s)
	}
	function G(Y, X) {
		if (W) {
			Y.call(X);
			return
		}
		J.push(function () {
			Y.call(X)
		})
	}
	function m() {
		var Z = parent;
		if (I !== "") {
			for (var X = 0, Y = I.split("."); X < Y.length; X++) {
				Z = Z[Y[X]]
			}
		}
		return Z.easyXDM
	}
	function e(X) {
		N.easyXDM = M;
		I = X;
		if (I) {
			U = "easyXDM_" + I.replace(".", "_") + "_"
		}
		return o
	}
	function z(X) {
		return X.match(Q)[3]
	}
	function f(X) {
		return X.match(Q)[4] || ""
	}
	function j(Z) {
		var X = Z.toLowerCase().match(Q);
		var aa = X[2],
		ab = X[3],
		Y = X[4] || "";
		if ((aa == "http:" && Y == ":80") || (aa == "https:" && Y == ":443")) {
			Y = ""
		}
		return aa + "//" + ab + Y
	}
	function B(X) {
		X = X.replace(F, "$1/");
		if (!X.match(/^(http||https):\/\//)) {
			var Y = (X.substring(0, 1) === "/") ? "" : p.pathname;
			if (Y.substring(Y.length - 1) !== "/") {
				Y = Y.substring(0, Y.lastIndexOf("/") + 1)
			}
			X = p.protocol + "//" + p.host + Y + X
		}
		while (R.test(X)) {
			X = X.replace(R, "")
		}
		return X
	}
	function P(X, aa) {
		var ac = "",
		Z = X.indexOf("#");
		if (Z !== -1) {
			ac = X.substring(Z);
			X = X.substring(0, Z)
		}
		var ab = [];
		for (var Y in aa) {
			if (aa.hasOwnProperty(Y)) {
				ab.push(Y + "=" + H(aa[Y]))
			}
		}
		return X + (y ? "#" : (X.indexOf("?") == -1 ? "?" : "&")) + ab.join("&") + ac
	}
	var S = (function (X) {
		X = X.substring(1).split("&");
		var Z = {},
		aa,
		Y = X.length;
		while (Y--) {
			aa = X[Y].split("=");
			Z[aa[0]] = k(aa[1])
		}
		return Z
	}
		(/xdm_e=/.test(p.search) ? p.search : p.hash));
	function t(X) {
		return typeof X === "undefined"
	}
	var O = function () {
		var Y = {};
		var Z = {
			a : [1, 2, 3]
		},
		X = '{"a":[1,2,3]}';
		if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(Z).replace((/\s/g), "") === X) {
			return JSON
		}
		if (Object.toJSON) {
			if (Object.toJSON(Z).replace((/\s/g), "") === X) {
				Y.stringify = Object.toJSON
			}
		}
		if (typeof String.prototype.evalJSON === "function") {
			Z = X.evalJSON();
			if (Z.a && Z.a.length === 3 && Z.a[2] === 3) {
				Y.parse = function (aa) {
					return aa.evalJSON()
				}
			}
		}
		if (Y.stringify && Y.parse) {
			O = function () {
				return Y
			};
			return Y
		}
		return null
	};
	function T(X, Y, Z) {
		var ab;
		for (var aa in Y) {
			if (Y.hasOwnProperty(aa)) {
				if (aa in X) {
					ab = Y[aa];
					if (typeof ab === "object") {
						T(X[aa], ab, Z)
					} else {
						if (!Z) {
							X[aa] = Y[aa]
						}
					}
				} else {
					X[aa] = Y[aa]
				}
			}
		}
		return X
	}
	function a() {
		var Y = d.body.appendChild(d.createElement("form")),
		X = Y.appendChild(d.createElement("input"));
		X.name = U + "TEST" + n;
		E = X !== Y.elements[X.name];
		d.body.removeChild(Y)
	}
	function A(X) {
		if (t(E)) {
			a()
		}
		var Z;
		if (E) {
			Z = d.createElement('<iframe name="' + X.props.name + '"/>')
		} else {
			Z = d.createElement("IFRAME");
			Z.name = X.props.name
		}
		Z.id = Z.name = X.props.name;
		delete X.props.name;
		if (X.onLoad) {
			v(Z, "load", X.onLoad)
		}
		if (typeof X.container == "string") {
			X.container = d.getElementById(X.container)
		}
		if (!X.container) {
			T(Z.style, {
				position : "absolute",
				top : "-2000px"
			});
			X.container = d.body
		}
		var Y = X.props.src;
		delete X.props.src;
		T(Z, X.props);
		Z.border = Z.frameBorder = 0;
		Z.allowTransparency = true;
		X.container.appendChild(Z);
		Z.src = Y;
		X.props.src = Y;
		return Z
	}
	function V(aa, Z) {
		if (typeof aa == "string") {
			aa = [aa]
		}
		var Y,
		X = aa.length;
		while (X--) {
			Y = aa[X];
			Y = new RegExp(Y.substr(0, 1) == "^" ? Y : ("^" + Y.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"));
			if (Y.test(Z)) {
				return true
			}
		}
		return false
	}
	function l(Z) {
		var ae = Z.protocol,
		Y;
		Z.isHost = Z.isHost || t(S.xdm_p);
		y = Z.hash || false;
		if (!Z.props) {
			Z.props = {}
			
		}
		if (!Z.isHost) {
			Z.channel = S.xdm_c.replace(/["'<>\\]/g, "");
			Z.secret = S.xdm_s;
			Z.remote = S.xdm_e.replace(/["'<>\\]/g, "");
			ae = S.xdm_p;
			if (Z.acl && !V(Z.acl, Z.remote)) {
				throw new Error("Access denied for " + Z.remote)
			}
		} else {
			Z.remote = B(Z.remote);
			Z.channel = Z.channel || "default" + n++;
			Z.secret = Math.random().toString(16).substring(2);
			if (t(ae)) {
				if (j(p.href) == j(Z.remote)) {
					ae = "4"
				} else {
					if (C(N, "postMessage") || C(d, "postMessage")) {
						ae = "1"
					} else {
						if (Z.swf && C(N, "ActiveXObject") && c()) {
							ae = "6"
						} else {
							if (navigator.product === "Gecko" && "frameElement" in N && navigator.userAgent.indexOf("WebKit") == -1) {
								ae = "5"
							} else {
								if (Z.remoteHelper) {
									Z.remoteHelper = B(Z.remoteHelper);
									ae = "2"
								} else {
									ae = "0"
								}
							}
						}
					}
				}
			}
		}
		Z.protocol = ae;
		switch (ae) {
		case "0":
			T(Z, {
				interval : 100,
				delay : 2000,
				useResize : true,
				useParent : false,
				usePolling : false
			}, true);
			if (Z.isHost) {
				if (!Z.local) {
					var ac = p.protocol + "//" + p.host,
					X = d.body.getElementsByTagName("img"),
					ad;
					var aa = X.length;
					while (aa--) {
						ad = X[aa];
						if (ad.src.substring(0, ac.length) === ac) {
							Z.local = ad.src;
							break
						}
					}
					if (!Z.local) {
						Z.local = N
					}
				}
				var ab = {
					xdm_c : Z.channel,
					xdm_p : 0
				};
				if (Z.local === N) {
					Z.usePolling = true;
					Z.useParent = true;
					Z.local = p.protocol + "//" + p.host + p.pathname + p.search;
					ab.xdm_e = Z.local;
					ab.xdm_pa = 1
				} else {
					ab.xdm_e = B(Z.local)
				}
				if (Z.container) {
					Z.useResize = false;
					ab.xdm_po = 1
				}
				Z.remote = P(Z.remote, ab)
			} else {
				T(Z, {
					channel : S.xdm_c,
					remote : S.xdm_e,
					useParent : !t(S.xdm_pa),
					usePolling : !t(S.xdm_po),
					useResize : Z.useParent ? false : Z.useResize
				})
			}
			Y = [new o.stack.HashTransport(Z), new o.stack.ReliableBehavior({}), new o.stack.QueueBehavior({
					encode : true,
					maxLength : 4000 - Z.remote.length
				}), new o.stack.VerifyBehavior({
					initiate : Z.isHost
				})];
			break;
		case "1":
			Y = [new o.stack.PostMessageTransport(Z)];
			break;
		case "2":
			Y = [new o.stack.NameTransport(Z), new o.stack.QueueBehavior(), new o.stack.VerifyBehavior({
					initiate : Z.isHost
				})];
			break;
		case "3":
			Y = [new o.stack.NixTransport(Z)];
			break;
		case "4":
			Y = [new o.stack.SameOriginTransport(Z)];
			break;
		case "5":
			Y = [new o.stack.FrameElementTransport(Z)];
			break;
		case "6":
			if (!i) {
				c()
			}
			Y = [new o.stack.FlashTransport(Z)];
			break
		}
		Y.push(new o.stack.QueueBehavior({
				lazy : Z.lazy,
				remove : true
			}));
		return Y
	}
	function D(aa) {
		var ab,
		Z = {
			incoming : function (ad, ac) {
				this.up.incoming(ad, ac)
			},
			outgoing : function (ac, ad) {
				this.down.outgoing(ac, ad)
			},
			callback : function (ac) {
				this.up.callback(ac)
			},
			init : function () {
				this.down.init()
			},
			destroy : function () {
				this.down.destroy()
			}
		};
		for (var Y = 0, X = aa.length; Y < X; Y++) {
			ab = aa[Y];
			T(ab, Z, true);
			if (Y !== 0) {
				ab.down = aa[Y - 1]
			}
			if (Y !== X - 1) {
				ab.up = aa[Y + 1]
			}
		}
		return ab
	}
	function w(X) {
		X.up.down = X.down;
		X.down.up = X.up;
		X.up = X.down = null
	}
	T(o, {
		version : "2.4.15.2",
		query : S,
		stack : {},
		apply : T,
		getJSONObject : O,
		whenReady : G,
		noConflict : e
	});
	o.DomHelper = {
		on : v,
		un : x,
		requiresJSON : function (X) {
			if (!u(N, "JSON")) {
				d.write('<script type="text/javascript" src="' + X + '"><\/script>')
			}
		}
	};
	(function () {
		var X = {};
		o.Fn = {
			set : function (Y, Z) {
				X[Y] = Z
			},
			get : function (Z, Y) {
				var aa = X[Z];
				if (Y) {
					delete X[Z]
				}
				return aa
			}
		}
	}
		());
	o.Socket = function (Y) {
		var X = D(l(Y).concat([{
							incoming : function (ab, aa) {
								Y.onMessage(ab, aa)
							},
							callback : function (aa) {
								if (Y.onReady) {
									Y.onReady(aa)
								}
							}
						}
					])),
		Z = j(Y.remote);
		this.origin = j(Y.remote);
		this.destroy = function () {
			X.destroy()
		};
		this.postMessage = function (aa) {
			X.outgoing(aa, Z)
		};
		X.init()
	};
	o.Rpc = function (Z, Y) {
		if (Y.local) {
			for (var ab in Y.local) {
				if (Y.local.hasOwnProperty(ab)) {
					var aa = Y.local[ab];
					if (typeof aa === "function") {
						Y.local[ab] = {
							method : aa
						}
					}
				}
			}
		}
		var X = D(l(Z).concat([new o.stack.RpcBehavior(this, Y), {
							callback : function (ac) {
								if (Z.onReady) {
									Z.onReady(ac)
								}
							}
						}
					]));
		this.origin = j(Z.remote);
		this.destroy = function () {
			X.destroy()
		};
		X.init()
	};
	o.stack.SameOriginTransport = function (Y) {
		var Z,
		ab,
		aa,
		X;
		return (Z = {
				outgoing : function (ad, ae, ac) {
					aa(ad);
					if (ac) {
						ac()
					}
				},
				destroy : function () {
					if (ab) {
						ab.parentNode.removeChild(ab);
						ab = null
					}
				},
				onDOMReady : function () {
					X = j(Y.remote);
					if (Y.isHost) {
						T(Y.props, {
							src : P(Y.remote, {
								xdm_e : p.protocol + "//" + p.host + p.pathname,
								xdm_c : Y.channel,
								xdm_p : 4
							}),
							name : U + Y.channel + "_provider"
						});
						ab = A(Y);
						o.Fn.set(Y.channel, function (ac) {
							aa = ac;
							K(function () {
								Z.up.callback(true)
							}, 0);
							return function (ad) {
								Z.up.incoming(ad, X)
							}
						})
					} else {
						aa = m().Fn.get(Y.channel, true)(function (ac) {
								Z.up.incoming(ac, X)
							});
						K(function () {
							Z.up.callback(true)
						}, 0)
					}
				},
				init : function () {
					G(Z.onDOMReady, Z)
				}
			})
	};
	o.stack.FlashTransport = function (aa) {
		var ac,
		X,
		ab,
		ad,
		Y,
		ae;
		function af(ah, ag) {
			K(function () {
				ac.up.incoming(ah, ad)
			}, 0)
		}
		function Z(ah) {
			var ag = aa.swf + "?host=" + aa.isHost;
			var aj = "easyXDM_swf_" + Math.floor(Math.random() * 10000);
			o.Fn.set("flash_loaded" + ah.replace(/[\-.]/g, "_"), function () {
				o.stack.FlashTransport[ah].swf = Y = ae.firstChild;
				var ak = o.stack.FlashTransport[ah].queue;
				for (var al = 0; al < ak.length; al++) {
					ak[al]()
				}
				ak.length = 0
			});
			if (aa.swfContainer) {
				ae = (typeof aa.swfContainer == "string") ? d.getElementById(aa.swfContainer) : aa.swfContainer
			} else {
				ae = d.createElement("div");
				T(ae.style, h && aa.swfNoThrottle ? {
					height : "20px",
					width : "20px",
					position : "fixed",
					right : 0,
					top : 0
				}
					 : {
					height : "1px",
					width : "1px",
					position : "absolute",
					overflow : "hidden",
					right : 0,
					top : 0
				});
				d.body.appendChild(ae)
			}
			var ai = "callback=flash_loaded" + ah.replace(/[\-.]/g, "_") + "&proto=" + b.location.protocol + "&domain=" + z(b.location.href) + "&port=" + f(b.location.href) + "&ns=" + I;
			ae.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + aj + "' data='" + ag + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + ag + "'></param><param name='flashvars' value='" + ai + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + ai + "' allowScriptAccess='always' wmode='transparent' src='" + ag + "' height='1' width='1'></embed></object>"
		}
		return (ac = {
				outgoing : function (ah, ai, ag) {
					Y.postMessage(aa.channel, ah.toString());
					if (ag) {
						ag()
					}
				},
				destroy : function () {
					try {
						Y.destroyChannel(aa.channel)
					} catch (ag) {}
					
					Y = null;
					if (X) {
						X.parentNode.removeChild(X);
						X = null
					}
				},
				onDOMReady : function () {
					ad = aa.remote;
					o.Fn.set("flash_" + aa.channel + "_init", function () {
						K(function () {
							ac.up.callback(true)
						})
					});
					o.Fn.set("flash_" + aa.channel + "_onMessage", af);
					aa.swf = B(aa.swf);
					var ah = z(aa.swf);
					var ag = function () {
						o.stack.FlashTransport[ah].init = true;
						Y = o.stack.FlashTransport[ah].swf;
						Y.createChannel(aa.channel, aa.secret, j(aa.remote), aa.isHost);
						if (aa.isHost) {
							if (h && aa.swfNoThrottle) {
								T(aa.props, {
									position : "fixed",
									right : 0,
									top : 0,
									height : "20px",
									width : "20px"
								})
							}
							T(aa.props, {
								src : P(aa.remote, {
									xdm_e : j(p.href),
									xdm_c : aa.channel,
									xdm_p : 6,
									xdm_s : aa.secret
								}),
								name : U + aa.channel + "_provider"
							});
							X = A(aa)
						}
					};
					if (o.stack.FlashTransport[ah] && o.stack.FlashTransport[ah].init) {
						ag()
					} else {
						if (!o.stack.FlashTransport[ah]) {
							o.stack.FlashTransport[ah] = {
								queue : [ag]
							};
							Z(ah)
						} else {
							o.stack.FlashTransport[ah].queue.push(ag)
						}
					}
				},
				init : function () {
					G(ac.onDOMReady, ac)
				}
			})
	};
	o.stack.PostMessageTransport = function (aa) {
		var ac,
		ad,
		Y,
		Z;
		function X(ae) {
			if (ae.origin) {
				return j(ae.origin)
			}
			if (ae.uri) {
				return j(ae.uri)
			}
			if (ae.domain) {
				return p.protocol + "//" + ae.domain
			}
			throw "Unable to retrieve the origin of the event"
		}
		function ab(af) {
			var ae = X(af);
			if (ae == Z && af.data.substring(0, aa.channel.length + 1) == aa.channel + " ") {
				ac.up.incoming(af.data.substring(aa.channel.length + 1), ae)
			}
		}
		return (ac = {
				outgoing : function (af, ag, ae) {
					Y.postMessage(aa.channel + " " + af, ag || Z);
					if (ae) {
						ae()
					}
				},
				destroy : function () {
					x(N, "message", ab);
					if (ad) {
						Y = null;
						ad.parentNode.removeChild(ad);
						ad = null
					}
				},
				onDOMReady : function () {
					Z = j(aa.remote);
					if (aa.isHost) {
						var ae = function (af) {
							if (af.data == aa.channel + "-ready") {
								Y = ("postMessage" in ad.contentWindow) ? ad.contentWindow : ad.contentWindow.document;
								x(N, "message", ae);
								v(N, "message", ab);
								K(function () {
									ac.up.callback(true)
								}, 0)
							}
						};
						v(N, "message", ae);
						T(aa.props, {
							src : P(aa.remote, {
								xdm_e : j(p.href),
								xdm_c : aa.channel,
								xdm_p : 1
							}),
							name : U + aa.channel + "_provider"
						});
						ad = A(aa)
					} else {
						v(N, "message", ab);
						Y = ("postMessage" in N.parent) ? N.parent : N.parent.document;
						Y.postMessage(aa.channel + "-ready", Z);
						K(function () {
							ac.up.callback(true)
						}, 0)
					}
				},
				init : function () {
					G(ac.onDOMReady, ac)
				}
			})
	};
	o.stack.FrameElementTransport = function (Y) {
		var Z,
		ab,
		aa,
		X;
		return (Z = {
				outgoing : function (ad, ae, ac) {
					aa.call(this, ad);
					if (ac) {
						ac()
					}
				},
				destroy : function () {
					if (ab) {
						ab.parentNode.removeChild(ab);
						ab = null
					}
				},
				onDOMReady : function () {
					X = j(Y.remote);
					if (Y.isHost) {
						T(Y.props, {
							src : P(Y.remote, {
								xdm_e : j(p.href),
								xdm_c : Y.channel,
								xdm_p : 5
							}),
							name : U + Y.channel + "_provider"
						});
						ab = A(Y);
						ab.fn = function (ac) {
							delete ab.fn;
							aa = ac;
							K(function () {
								Z.up.callback(true)
							}, 0);
							return function (ad) {
								Z.up.incoming(ad, X)
							}
						}
					} else {
						if (d.referrer && j(d.referrer) != S.xdm_e) {
							N.top.location = S.xdm_e
						}
						aa = N.frameElement.fn(function (ac) {
								Z.up.incoming(ac, X)
							});
						Z.up.callback(true)
					}
				},
				init : function () {
					G(Z.onDOMReady, Z)
				}
			})
	};
	o.stack.NameTransport = function (ab) {
		var ac;
		var ae,
		ai,
		aa,
		ag,
		ah,
		Y,
		X;
		function af(al) {
			var ak = ab.remoteHelper + (ae ? "#_3" : "#_2") + ab.channel;
			ai.contentWindow.sendMessage(al, ak)
		}
		function ad() {
			if (ae) {
				if (++ag === 2 || !ae) {
					ac.up.callback(true)
				}
			} else {
				af("ready");
				ac.up.callback(true)
			}
		}
		function aj(ak) {
			ac.up.incoming(ak, Y)
		}
		function Z() {
			if (ah) {
				K(function () {
					ah(true)
				}, 0)
			}
		}
		return (ac = {
				outgoing : function (al, am, ak) {
					ah = ak;
					af(al)
				},
				destroy : function () {
					ai.parentNode.removeChild(ai);
					ai = null;
					if (ae) {
						aa.parentNode.removeChild(aa);
						aa = null
					}
				},
				onDOMReady : function () {
					ae = ab.isHost;
					ag = 0;
					Y = j(ab.remote);
					ab.local = B(ab.local);
					if (ae) {
						o.Fn.set(ab.channel, function (al) {
							if (ae && al === "ready") {
								o.Fn.set(ab.channel, aj);
								ad()
							}
						});
						X = P(ab.remote, {
								xdm_e : ab.local,
								xdm_c : ab.channel,
								xdm_p : 2
							});
						T(ab.props, {
							src : X + "#" + ab.channel,
							name : U + ab.channel + "_provider"
						});
						aa = A(ab)
					} else {
						ab.remoteHelper = ab.remote;
						o.Fn.set(ab.channel, aj)
					}
					var ak = function () {
						var al = ai || this;
						x(al, "load", ak);
						o.Fn.set(ab.channel + "_load", Z);
						(function am() {
							if (typeof al.contentWindow.sendMessage == "function") {
								ad()
							} else {
								K(am, 50)
							}
						}
							())
					};
					ai = A({
							props : {
								src : ab.local + "#_4" + ab.channel
							},
							onLoad : ak
						})
				},
				init : function () {
					G(ac.onDOMReady, ac)
				}
			})
	};
	o.stack.HashTransport = function (Z) {
		var ac;
		var ah = this,
		af,
		aa,
		X,
		ad,
		am,
		ab,
		al;
		var ag,
		Y;
		function ak(ao) {
			if (!al) {
				return
			}
			var an = Z.remote + "#" + (am++) + "_" + ao;
			((af || !ag) ? al.contentWindow : al).location = an
		}
		function ae(an) {
			ad = an;
			ac.up.incoming(ad.substring(ad.indexOf("_") + 1), Y)
		}
		function aj() {
			if (!ab) {
				return
			}
			var an = ab.location.href,
			ap = "",
			ao = an.indexOf("#");
			if (ao != -1) {
				ap = an.substring(ao)
			}
			if (ap && ap != ad) {
				ae(ap)
			}
		}
		function ai() {
			aa = setInterval(aj, X)
		}
		return (ac = {
				outgoing : function (an, ao) {
					ak(an)
				},
				destroy : function () {
					N.clearInterval(aa);
					if (af || !ag) {
						al.parentNode.removeChild(al)
					}
					al = null
				},
				onDOMReady : function () {
					af = Z.isHost;
					X = Z.interval;
					ad = "#" + Z.channel;
					am = 0;
					ag = Z.useParent;
					Y = j(Z.remote);
					if (af) {
						Z.props = {
							src : Z.remote,
							name : U + Z.channel + "_provider"
						};
						if (ag) {
							Z.onLoad = function () {
								ab = N;
								ai();
								ac.up.callback(true)
							}
						} else {
							var ap = 0,
							an = Z.delay / 50;
							(function ao() {
								if (++ap > an) {
									throw new Error("Unable to reference listenerwindow")
								}
								try {
									ab = al.contentWindow.frames[U + Z.channel + "_consumer"]
								} catch (aq) {}
								
								if (ab) {
									ai();
									ac.up.callback(true)
								} else {
									K(ao, 50)
								}
							}
								())
						}
						al = A(Z)
					} else {
						ab = N;
						ai();
						if (ag) {
							al = parent;
							ac.up.callback(true)
						} else {
							T(Z, {
								props : {
									src : Z.remote + "#" + Z.channel + new Date(),
									name : U + Z.channel + "_consumer"
								},
								onLoad : function () {
									ac.up.callback(true)
								}
							});
							al = A(Z)
						}
					}
				},
				init : function () {
					G(ac.onDOMReady, ac)
				}
			})
	};
	o.stack.ReliableBehavior = function (Y) {
		var aa,
		ac;
		var ab = 0,
		X = 0,
		Z = "";
		return (aa = {
				incoming : function (af, ad) {
					var ae = af.indexOf("_"),
					ag = af.substring(0, ae).split(",");
					af = af.substring(ae + 1);
					if (ag[0] == ab) {
						Z = "";
						if (ac) {
							ac(true)
						}
					}
					if (af.length > 0) {
						aa.down.outgoing(ag[1] + "," + ab + "_" + Z, ad);
						if (X != ag[1]) {
							X = ag[1];
							aa.up.incoming(af, ad)
						}
					}
				},
				outgoing : function (af, ad, ae) {
					Z = af;
					ac = ae;
					aa.down.outgoing(X + "," + (++ab) + "_" + af, ad)
				}
			})
	};
	o.stack.QueueBehavior = function (Z) {
		var ac,
		ad = [],
		ag = true,
		aa = "",
		af,
		X = 0,
		Y = false,
		ab = false;
		function ae() {
			if (Z.remove && ad.length === 0) {
				w(ac);
				return
			}
			if (ag || ad.length === 0 || af) {
				return
			}
			ag = true;
			var ah = ad.shift();
			ac.down.outgoing(ah.data, ah.origin, function (ai) {
				ag = false;
				if (ah.callback) {
					K(function () {
						ah.callback(ai)
					}, 0)
				}
				ae()
			})
		}
		return (ac = {
				init : function () {
					if (t(Z)) {
						Z = {}
						
					}
					if (Z.maxLength) {
						X = Z.maxLength;
						ab = true
					}
					if (Z.lazy) {
						Y = true
					} else {
						ac.down.init()
					}
				},
				callback : function (ai) {
					ag = false;
					var ah = ac.up;
					ae();
					ah.callback(ai)
				},
				incoming : function (ak, ai) {
					if (ab) {
						var aj = ak.indexOf("_"),
						ah = parseInt(ak.substring(0, aj), 10);
						aa += ak.substring(aj + 1);
						if (ah === 0) {
							if (Z.encode) {
								aa = k(aa)
							}
							ac.up.incoming(aa, ai);
							aa = ""
						}
					} else {
						ac.up.incoming(ak, ai)
					}
				},
				outgoing : function (al, ai, ak) {
					if (Z.encode) {
						al = H(al)
					}
					var ah = [],
					aj;
					if (ab) {
						while (al.length !== 0) {
							aj = al.substring(0, X);
							al = al.substring(aj.length);
							ah.push(aj)
						}
						while ((aj = ah.shift())) {
							ad.push({
								data : ah.length + "_" + aj,
								origin : ai,
								callback : ah.length === 0 ? ak : null
							})
						}
					} else {
						ad.push({
							data : al,
							origin : ai,
							callback : ak
						})
					}
					if (Y) {
						ac.down.init()
					} else {
						ae()
					}
				},
				destroy : function () {
					af = true;
					ac.down.destroy()
				}
			})
	};
	o.stack.VerifyBehavior = function (ab) {
		var ac,
		aa,
		Y,
		Z = false;
		function X() {
			aa = Math.random().toString(16).substring(2);
			ac.down.outgoing(aa)
		}
		return (ac = {
				incoming : function (af, ad) {
					var ae = af.indexOf("_");
					if (ae === -1) {
						if (af === aa) {
							ac.up.callback(true)
						} else {
							if (!Y) {
								Y = af;
								if (!ab.initiate) {
									X()
								}
								ac.down.outgoing(af)
							}
						}
					} else {
						if (af.substring(0, ae) === Y) {
							ac.up.incoming(af.substring(ae + 1), ad)
						}
					}
				},
				outgoing : function (af, ad, ae) {
					ac.down.outgoing(aa + "_" + af, ad, ae)
				},
				callback : function (ad) {
					if (ab.initiate) {
						X()
					}
				}
			})
	};
	o.stack.RpcBehavior = function (ad, Y) {
		var aa,
		af = Y.serializer || O();
		var ae = 0,
		ac = {};
		function X(ag) {
			ag.jsonrpc = "2.0";
			aa.down.outgoing(af.stringify(ag))
		}
		function ab(ag, ai) {
			var ah = Array.prototype.slice;
			return function () {
				var aj = arguments.length,
				al,
				ak = {
					method : ai
				};
				if (aj > 0 && typeof arguments[aj - 1] === "function") {
					if (aj > 1 && typeof arguments[aj - 2] === "function") {
						al = {
							success : arguments[aj - 2],
							error : arguments[aj - 1]
						};
						ak.params = ah.call(arguments, 0, aj - 2)
					} else {
						al = {
							success : arguments[aj - 1]
						};
						ak.params = ah.call(arguments, 0, aj - 1)
					}
					ac["" + (++ae)] = al;
					ak.id = ae
				} else {
					ak.params = ah.call(arguments, 0)
				}
				if (ag.namedParams && ak.params.length === 1) {
					ak.params = ak.params[0]
				}
				X(ak)
			}
		}
		function Z(an, am, ai, al) {
			if (!ai) {
				if (am) {
					X({
						id : am,
						error : {
							code : -32601,
							message : "Procedure not found."
						}
					})
				}
				return
			}
			var ak,
			ah;
			if (am) {
				ak = function (ao) {
					ak = q;
					X({
						id : am,
						result : ao
					})
				};
				ah = function (ao, ap) {
					ah = q;
					var aq = {
						id : am,
						error : {
							code : -32099,
							message : ao
						}
					};
					if (ap) {
						aq.error.data = ap
					}
					X(aq)
				}
			} else {
				ak = ah = q
			}
			if (!r(al)) {
				al = [al]
			}
			try {
				var ag = ai.method.apply(ai.scope, al.concat([ak, ah]));
				if (!t(ag)) {
					ak(ag)
				}
			} catch (aj) {
				ah(aj.message)
			}
		}
		return (aa = {
				incoming : function (ah, ag) {
					var ai = af.parse(ah);
					if (ai.method) {
						if (Y.handle) {
							Y.handle(ai, X)
						} else {
							Z(ai.method, ai.id, Y.local[ai.method], ai.params)
						}
					} else {
						var aj = ac[ai.id];
						if (ai.error) {
							if (aj.error) {
								aj.error(ai.error)
							}
						} else {
							if (aj.success) {
								aj.success(ai.result)
							}
						}
						delete ac[ai.id]
					}
				},
				init : function () {
					if (Y.remote) {
						for (var ag in Y.remote) {
							if (Y.remote.hasOwnProperty(ag)) {
								ad[ag] = ab(Y.remote[ag], ag)
							}
						}
					}
					aa.down.init()
				},
				destroy : function () {
					for (var ag in Y.remote) {
						if (Y.remote.hasOwnProperty(ag) && ad.hasOwnProperty(ag)) {
							delete ad[ag]
						}
					}
					aa.down.destroy()
				}
			})
	};
	b.easyXDM = o
})(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);

/*
http://www.JSON.org/json2.js
2010-03-20

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

JSON.stringify(value, replacer, space)
value       any JavaScript value, usually an object or array.

replacer    an optional parameter that determines how object
values are stringified for objects. It can be a
function or an array of strings.

space       an optional parameter that specifies the indentation
of nested structures. If it is omitted, the text will
be packed without extra whitespace. If it is a number,
it will specify the number of spaces to indent at each
level. If it is a string (such as '\t' or '&nbsp;'),
it contains the characters used to indent at each level.

This method produces a JSON text from a JavaScript value.

When an object value is found, if the object contains a toJSON
method, its toJSON method will be called and the result will be
stringified. A toJSON method does not serialize: it returns the
value represented by the name/value pair that should be serialized,
or undefined if nothing should be serialized. The toJSON method
will be passed the key associated with the value, and this will be
bound to the value

For example, this would serialize Dates as ISO strings.

Date.prototype.toJSON = function (key) {
function f(n) {
// Format integers to have at least two digits.
return n < 10 ? '0' + n : n;
}

return this.getUTCFullYear()   + '-' +
f(this.getUTCMonth() + 1) + '-' +
f(this.getUTCDate())      + 'T' +
f(this.getUTCHours())     + ':' +
f(this.getUTCMinutes())   + ':' +
f(this.getUTCSeconds())   + 'Z';
};

You can provide an optional replacer method. It will be passed the
key and value of each member, with this bound to the containing
object. The value that is returned from your method will be
serialized. If your method returns undefined, then the member will
be excluded from the serialization.

If the replacer parameter is an array of strings, then it will be
used to select the members to be serialized. It filters the results
such that only members with keys listed in the replacer array are
stringified.

Values that do not have JSON representations, such as undefined or
functions, will not be serialized. Such values in objects will be
dropped; in arrays they will be replaced with null. You can use
a replacer function to replace those with JSON values.
JSON.stringify(undefined) returns undefined.

The optional space parameter produces a stringification of the
value that is filled with line breaks and indentation to make it
easier to read.

If the space parameter is a non-empty string, then that string will
be used for indentation. If the space parameter is a number, then
the indentation will be that many spaces.

Example:

text = JSON.stringify(['e', {pluribus: 'unum'}]);
// text is '["e",{"pluribus":"unum"}]'


text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
// text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

text = JSON.stringify([new Date()], function (key, value) {
return this[key] instanceof Date ?
'Date(' + this[key] + ')' : value;
});
// text is '["Date(---current time---)"]'


JSON.parse(text, reviver)
This method parses a JSON text to produce an object or array.
It can throw a SyntaxError exception.

The optional reviver parameter is a function that can filter and
transform the results. It receives each of the keys and values,
and its return value is used instead of the original value.
If it returns what it received, then the structure is not modified.
If it returns undefined then the member is deleted.

Example:

// Parse the text. Values that look like ISO date strings will
// be converted to Date objects.

myData = JSON.parse(text, function (key, value) {
var a;
if (typeof value === 'string') {
a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
if (a) {
return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
+a[5], +a[6]));
}
}
return value;
});

myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
var d;
if (typeof value === 'string' &&
value.slice(0, 5) === 'Date(' &&
value.slice(-1) === ')') {
d = new Date(value.slice(5, -1));
if (d) {
return d;
}
}
return value;
});


This is a reference implementation. You are free to copy, modify, or
redistribute.
 */

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
 */

// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
	this.JSON = {};
}

(function () {
	
	function f(n) {
		// Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}
	
	if (typeof Date.prototype.toJSON !== 'function') {
		
		Date.prototype.toJSON = function (key) {
			
			return isFinite(this.valueOf()) ?
			this.getUTCFullYear() + '-' +
			f(this.getUTCMonth() + 1) + '-' +
			f(this.getUTCDate()) + 'T' +
			f(this.getUTCHours()) + ':' +
			f(this.getUTCMinutes()) + ':' +
			f(this.getUTCSeconds()) + 'Z' : null;
		};
		
		String.prototype.toJSON =
			Number.prototype.toJSON =
			Boolean.prototype.toJSON = function (key) {
			return this.valueOf();
		};
	}
	
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	gap,
	indent,
	meta = { // table of character substitutions
		'\b' : '\\b',
		'\t' : '\\t',
		'\n' : '\\n',
		'\f' : '\\f',
		'\r' : '\\r',
		'"' : '\\"',
		'\\' : '\\\\'
	},
	rep;
	
	function quote(string) {
		
		// If the string contains no control characters, no quote characters, and no
		// backslash characters, then we can safely slap some quotes around it.
		// Otherwise we must also replace the offending characters with safe escape
		// sequences.
		
		escapable.lastIndex = 0;
		return escapable.test(string) ?
		'"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c :
			'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' :
		'"' + string + '"';
	}
	
	function str(key, holder) {
		
		// Produce a string from holder[key].
		
		var i, // The loop counter.
		k, // The member key.
		v, // The member value.
		length,
		mind = gap,
		partial,
		value = holder[key];
		
		// If the value has a toJSON method, call it to obtain a replacement value.
		
		if (value && typeof value === 'object' &&
			typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		
		// If we were called with a replacer function, then call the replacer to
		// obtain a replacement value.
		
		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}
		
		// What happens next depends on the value's type.
		
		switch (typeof value) {
		case 'string':
			return quote(value);
			
		case 'number':
			
			// JSON numbers must be finite. Encode non-finite numbers as null.
			
			return isFinite(value) ? String(value) : 'null';
			
		case 'boolean':
		case 'null':
			
			// If the value is a boolean or null, convert it to a string. Note:
			// typeof null does not produce 'null'. The case is included here in
			// the remote chance that this gets fixed someday.
			
			return String(value);
			
			// If the type is 'object', we might be dealing with an object or an array or
			// null.
			
		case 'object':
			
			// Due to a specification blunder in ECMAScript, typeof null is 'object',
			// so watch out for that case.
			
			if (!value) {
				return 'null';
			}
			
			// Make an array to hold the partial results of stringifying this object value.
			
			gap += indent;
			partial = [];
			
			// Is the value an array?
			
			if (Object.prototype.toString.apply(value) === '[object Array]') {
				
				// The value is an array. Stringify every element. Use null as a placeholder
				// for non-JSON values.
				
				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}
				
				// Join all of the elements together, separated with commas, and wrap them in
				// brackets.
				
				v = partial.length === 0 ? '[]' :
					gap ? '[\n' + gap +
					partial.join(',\n' + gap) + '\n' +
					mind + ']' :
					'[' + partial.join(',') + ']';
				gap = mind;
				return v;
			}
			
			// If the replacer is an array, use it to select the members to be stringified.
			
			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					k = rep[i];
					if (typeof k === 'string') {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {
				
				// Otherwise, iterate through all of the keys in the object.
				
				for (k in value) {
					if (Object.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}
			
			// Join all of the member texts together, separated with commas,
			// and wrap them in braces.
			
			v = partial.length === 0 ? '{}' :
				gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
				mind + '}' : '{' + partial.join(',') + '}';
			gap = mind;
			return v;
		}
	}
	
	// If the JSON object does not yet have a stringify method, give it one.
	
	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function (value, replacer, space) {
			
			// The stringify method takes a value and an optional replacer, and an optional
			// space parameter, and returns a JSON text. The replacer can be a function
			// that can replace values, or an array of strings that will select the keys.
			// A default replacer method can be provided. Use of the space parameter can
			// produce text that is more easily readable.
			
			var i;
			gap = '';
			indent = '';
			
			// If the space parameter is a number, make an indent string containing that
			// many spaces.
			
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
				
				// If the space parameter is a string, it will be used as the indent string.
				
			} else if (typeof space === 'string') {
				indent = space;
			}
			
			// If there is a replacer, it must be a function or an array.
			// Otherwise, throw an error.
			
			rep = replacer;
			if (replacer && typeof replacer !== 'function' &&
				(typeof replacer !== 'object' ||
					typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			
			// Make a fake root object containing our value under the key of ''.
			// Return the result of stringifying the value.
			
			return str('', {
				'' : value
			});
		};
	}
	
	// If the JSON object does not yet have a parse method, give it one.
	
	if (typeof JSON.parse !== 'function') {
		JSON.parse = function (text, reviver) {
			
			// The parse method takes a text and an optional reviver function, and returns
			// a JavaScript value if the text is a valid JSON text.
			
			var j;
			
			function walk(holder, key) {
				
				// The walk method is used to recursively walk the resulting structure so
				// that modifications can be made.
				
				var k,
				v,
				value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}
			
			// Parsing happens in four stages. In the first stage, we replace certain
			// Unicode characters with escape sequences. JavaScript handles many characters
			// incorrectly, either silently deleting them, or treating them as line endings.
			
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
						return '\\u' +
						('0000' + a.charCodeAt(0).toString(16)).slice(-4);
					});
			}
			
			// In the second stage, we run the text against regular expressions that look
			// for non-JSON patterns. We are especially concerned with '()' and 'new'
			// because they can cause invocation, and '=' because it can cause mutation.
			// But just to be safe, we want to reject all unexpected forms.
			
			// We split the second stage into 4 regexp operations in order to work around
			// crippling inefficiencies in IE's and Safari's regexp engines. First we
			// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
			// replace all simple value tokens with ']' characters. Third, we delete all
			// open brackets that follow a colon or comma or that begin the text. Finally,
			// we look to see that the remaining characters are only whitespace or ']' or
			// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
			
			if (/^[\],:{}\s]*$/.
				test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
					replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
					replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				
				// In the third stage we use the eval function to compile the text into a
				// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
				// in JavaScript: it can begin a block or an object literal. We wrap the text
				// in parens to eliminate the ambiguity.
				
				j = eval('(' + text + ')');
				
				// In the optional fourth stage, we recursively walk the new structure, passing
				// each name/value pair to a reviver function for possible transformation.
				
				return typeof reviver === 'function' ?
				walk({
					'' : j
				}, '') : j;
			}
			
			// If the text is not JSON parseable, then a SyntaxError is thrown.
			
			throw new SyntaxError('JSON.parse');
		};
	}
}
	());

/*
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function (a, b) {
	function ci(a) {
		return d.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	function cf(a) {
		if (!b_[a]) {
			var b = d("<" + a + ">").appendTo("body"),
			c = b.css("display");
			b.remove();
			if (c === "none" || c === "")
				c = "block";
			b_[a] = c
		}
		return b_[a]
	}
	function ce(a, b) {
		var c = {};
		d.each(cd.concat.apply([], cd.slice(0, b)), function () {
			c[this] = a
		});
		return c
	}
	function b$() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
		
	}
	function bZ() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
		
	}
	function bY() {
		d(a).unload(function () {
			for (var a in bW)
				bW[a](0, 1)
		})
	}
	function bS(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var e = a.dataTypes,
		f = {},
		g,
		h,
		i = e.length,
		j,
		k = e[0],
		l,
		m,
		n,
		o,
		p;
		for (g = 1; g < i; g++) {
			if (g === 1)
				for (h in a.converters)
					typeof h === "string" && (f[h.toLowerCase()] = a.converters[h]);
			l = k,
			k = e[g];
			if (k === "*")
				k = l;
			else if (l !== "*" && l !== k) {
				m = l + " " + k,
				n = f[m] || f["* " + k];
				if (!n) {
					p = b;
					for (o in f) {
						j = o.split(" ");
						if (j[0] === l || j[0] === "*") {
							p = f[j[1] + " " + k];
							if (p) {
								o = f[o],
								o === !0 ? n = p : p === !0 && (n = o);
								break
							}
						}
					}
				}
				!n && !p && d.error("No conversion from " + m.replace(" ", " to ")),
				n !== !0 && (c = n ? n(c) : p(o(c)))
			}
		}
		return c
	}
	function bR(a, c, d) {
		var e = a.contents,
		f = a.dataTypes,
		g = a.responseFields,
		h,
		i,
		j,
		k;
		for (i in g)
			i in d && (c[g[i]] = d[i]);
		while (f[0] === "*")
			f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if (h)
			for (i in e)
				if (e[i] && e[i].test(h)) {
					f.unshift(i);
					break
				}
		if (f[0]in d)
			j = f[0];
		else {
			for (i in d) {
				if (!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if (j) {
			j !== f[0] && f.unshift(j);
			return d[j]
		}
	}
	function bQ(a, b, c, e) {
		if (d.isArray(b) && b.length)
			d.each(b, function (b, f) {
				c || bs.test(a) ? e(a, f) : bQ(a + "[" + (typeof f === "object" || d.isArray(f) ? b : "") + "]", f, c, e)
			});
		else if (c || b == null || typeof b !== "object")
			e(a, b);
		else if (d.isArray(b) || d.isEmptyObject(b))
			e(a, "");
		else
			for (var f in b)
				bQ(a + "[" + f + "]", b[f], c, e)
	}
	function bP(a, c, d, e, f, g) {
		f = f || c.dataTypes[0],
		g = g || {},
		g[f] = !0;
		var h = a[f],
		i = 0,
		j = h ? h.length : 0,
		k = a === bJ,
		l;
		for (; i < j && (k || !l); i++)
			l = h[i](c, d, e), typeof l === "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bP(a, c, d, e, l, g)));
		(k || !l) && !g["*"] && (l = bP(a, c, d, e, "*", g));
		return l
	}
	function bO(a) {
		return function (b, c) {
			typeof b !== "string" && (c = b, b = "*");
			if (d.isFunction(c)) {
				var e = b.toLowerCase().split(bD),
				f = 0,
				g = e.length,
				h,
				i,
				j;
				for (; f < g; f++)
					h = e[f], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
			}
		}
	}
	function bq(a, b, c) {
		var e = b === "width" ? bk : bl,
		f = b === "width" ? a.offsetWidth : a.offsetHeight;
		if (c === "border")
			return f;
		d.each(e, function () {
			c || (f -= parseFloat(d.css(a, "padding" + this)) || 0),
			c === "margin" ? f += parseFloat(d.css(a, "margin" + this)) || 0 : f -= parseFloat(d.css(a, "border" + this + "Width")) || 0
		});
		return f
	}
	function bc(a, b) {
		b.src ? d.ajax({
			url : b.src,
			async : !1,
			dataType : "script"
		}) : d.globalEval(b.text || b.textContent || b.innerHTML || ""),
		b.parentNode && b.parentNode.removeChild(b)
	}
	function bb(a) {
		return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
	}
	function ba(a, b) {
		if (b.nodeType === 1) {
			var c = b.nodeName.toLowerCase();
			b.clearAttributes(),
			b.mergeAttributes(a);
			if (c === "object")
				b.outerHTML = a.outerHTML;
			else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
				if (c === "option")
					b.selected = a.defaultSelected;
				else if (c === "input" || c === "textarea")
					b.defaultValue = a.defaultValue
			} else
				a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
			b.removeAttribute(d.expando)
		}
	}
	function _(a, b) {
		if (b.nodeType === 1 && d.hasData(a)) {
			var c = d.expando,
			e = d.data(a),
			f = d.data(b, e);
			if (e = e[c]) {
				var g = e.events;
				f = f[c] = d.extend({}, e);
				if (g) {
					delete f.handle,
					f.events = {};
					for (var h in g)
						for (var i = 0, j = g[h].length; i < j; i++)
							d.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
				}
			}
		}
	}
	function $(a, b) {
		return d.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function Q(a, b, c) {
		if (d.isFunction(b))
			return d.grep(a, function (a, d) {
				var e = !!b.call(a, d, a);
				return e === c
			});
		if (b.nodeType)
			return d.grep(a, function (a, d) {
				return a === b === c
			});
		if (typeof b === "string") {
			var e = d.grep(a, function (a) {
					return a.nodeType === 1
				});
			if (L.test(b))
				return d.filter(b, e, !c);
			b = d.filter(b, e)
		}
		return d.grep(a, function (a, e) {
			return d.inArray(a, b) >= 0 === c
		})
	}
	function P(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function H(a, b) {
		return (a && a !== "*" ? a + "." : "") + b.replace(t, "`").replace(u, "&")
	}
	function G(a) {
		var b,
		c,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o,
		p = [],
		q = [],
		s = d._data(this, "events");
		if (a.liveFired !== this && s && s.live && !a.target.disabled && (!a.button || a.type !== "click")) {
			a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
			a.liveFired = this;
			var t = s.live.slice(0);
			for (i = 0; i < t.length; i++)
				g = t[i], g.origType.replace(r, "") === a.type ? q.push(g.selector) : t.splice(i--, 1);
			f = d(a.target).closest(q, a.currentTarget);
			for (j = 0, k = f.length; j < k; j++) {
				m = f[j];
				for (i = 0; i < t.length; i++) {
					g = t[i];
					if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
						h = m.elem,
						e = null;
						if (g.preType === "mouseenter" || g.preType === "mouseleave")
							a.type = g.preType, e = d(a.relatedTarget).closest(g.selector)[0];
						(!e || e !== h) && p.push({
							elem : h,
							handleObj : g,
							level : m.level
						})
					}
				}
			}
			for (j = 0, k = p.length; j < k; j++) {
				f = p[j];
				if (c && f.level > c)
					break;
				a.currentTarget = f.elem,
				a.data = f.handleObj.data,
				a.handleObj = f.handleObj,
				o = f.handleObj.origHandler.apply(f.elem, arguments);
				if (o === !1 || a.isPropagationStopped()) {
					c = f.level,
					o === !1 && (b = !1);
					if (a.isImmediatePropagationStopped())
						break
				}
			}
			return b
		}
	}
	function E(a, c, e) {
		var f = d.extend({}, e[0]);
		f.type = a,
		f.originalEvent = {},
		f.liveFired = b,
		d.event.handle.call(c, f),
		f.isDefaultPrevented() && e[0].preventDefault()
	}
	function y() {
		return !0
	}
	function x() {
		return !1
	}
	function i(a) {
		for (var b in a)
			if (b !== "toJSON")
				return !1;
		return !0
	}
	function h(a, c, e) {
		if (e === b && a.nodeType === 1) {
			e = a.getAttribute("data-" + c);
			if (typeof e === "string") {
				try {
					e = e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : d.isNaN(e) ? g.test(e) ? d.parseJSON(e) : e : parseFloat(e)
				} catch (f) {}
				
				d.data(a, c, e)
			} else
				e = b
		}
		return e
	}
	var c = a.document,
	d = function () {
		function G() {
			if (!d.isReady) {
				try {
					c.documentElement.doScroll("left")
				} catch (a) {
					setTimeout(G, 1);
					return
				}
				d.ready()
			}
		}
		var d = function (a, b) {
			return new d.fn.init(a, b, g)
		},
		e = a.jQuery,
		f = a.$,
		g,
		h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
		i = /\S/,
		j = /^\s+/,
		k = /\s+$/,
		l = /\d/,
		m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		n = /^[\],:{}\s]*$/,
		o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		q = /(?:^|:|,)(?:\s*\[)+/g,
		r = /(webkit)[ \/]([\w.]+)/,
		s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		t = /(msie) ([\w.]+)/,
		u = /(mozilla)(?:.*? rv:([\w.]+))?/,
		v = navigator.userAgent,
		w,
		x,
		y,
		z = Object.prototype.toString,
		A = Object.prototype.hasOwnProperty,
		B = Array.prototype.push,
		C = Array.prototype.slice,
		D = String.prototype.trim,
		E = Array.prototype.indexOf,
		F = {};
		d.fn = d.prototype = {
			constructor : d,
			init : function (a, e, f) {
				var g,
				i,
				j,
				k;
				if (!a)
					return this;
				if (a.nodeType) {
					this.context = this[0] = a,
					this.length = 1;
					return this
				}
				if (a === "body" && !e && c.body) {
					this.context = c,
					this[0] = c.body,
					this.selector = "body",
					this.length = 1;
					return this
				}
				if (typeof a === "string") {
					g = h.exec(a);
					if (!g || !g[1] && e)
						return !e || e.jquery ? (e || f).find(a) : this.constructor(e).find(a);
					if (g[1]) {
						e = e instanceof d ? e[0] : e,
						k = e ? e.ownerDocument || e : c,
						j = m.exec(a),
						j ? d.isPlainObject(e) ? (a = [c.createElement(j[1])], d.fn.attr.call(a, e, !0)) : a = [k.createElement(j[1])] : (j = d.buildFragment([g[1]], [k]), a = (j.cacheable ? d.clone(j.fragment) : j.fragment).childNodes);
						return d.merge(this, a)
					}
					i = c.getElementById(g[2]);
					if (i && i.parentNode) {
						if (i.id !== g[2])
							return f.find(a);
						this.length = 1,
						this[0] = i
					}
					this.context = c,
					this.selector = a;
					return this
				}
				if (d.isFunction(a))
					return f.ready(a);
				a.selector !== b && (this.selector = a.selector, this.context = a.context);
				return d.makeArray(a, this)
			},
			selector : "",
			jquery : "1.5.2",
			length : 0,
			size : function () {
				return this.length
			},
			toArray : function () {
				return C.call(this, 0)
			},
			get : function (a) {
				return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
			},
			pushStack : function (a, b, c) {
				var e = this.constructor();
				d.isArray(a) ? B.apply(e, a) : d.merge(e, a),
				e.prevObject = this,
				e.context = this.context,
				b === "find" ? e.selector = this.selector + (this.selector ? " " : "") + c : b && (e.selector = this.selector + "." + b + "(" + c + ")");
				return e
			},
			each : function (a, b) {
				return d.each(this, a, b)
			},
			ready : function (a) {
				d.bindReady(),
				x.done(a);
				return this
			},
			eq : function (a) {
				return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
			},
			first : function () {
				return this.eq(0)
			},
			last : function () {
				return this.eq(-1)
			},
			slice : function () {
				return this.pushStack(C.apply(this, arguments), "slice", C.call(arguments).join(","))
			},
			map : function (a) {
				return this.pushStack(d.map(this, function (b, c) {
						return a.call(b, c, b)
					}))
			},
			end : function () {
				return this.prevObject || this.constructor(null)
			},
			push : B,
			sort : [].sort,
			splice : [].splice
		},
		d.fn.init.prototype = d.fn,
		d.extend = d.fn.extend = function () {
			var a,
			c,
			e,
			f,
			g,
			h,
			i = arguments[0] || {},
			j = 1,
			k = arguments.length,
			l = !1;
			typeof i === "boolean" && (l = i, i = arguments[1] || {}, j = 2),
			typeof i !== "object" && !d.isFunction(i) && (i = {}),
			k === j && (i = this, --j);
			for (; j < k; j++)
				if ((a = arguments[j]) != null)
					for (c in a) {
						e = i[c],
						f = a[c];
						if (i === f)
							continue;
						l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e : []) : h = e && d.isPlainObject(e) ? e : {}, i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
					}
			return i
		},
		d.extend({
			noConflict : function (b) {
				a.$ = f,
				b && (a.jQuery = e);
				return d
			},
			isReady : !1,
			readyWait : 1,
			ready : function (a) {
				a === !0 && d.readyWait--;
				if (!d.readyWait || a !== !0 && !d.isReady) {
					if (!c.body)
						return setTimeout(d.ready, 1);
					d.isReady = !0;
					if (a !== !0 && --d.readyWait > 0)
						return;
					x.resolveWith(c, [d]),
					d.fn.trigger && d(c).trigger("ready").unbind("ready")
				}
			},
			bindReady : function () {
				if (!x) {
					x = d._Deferred();
					if (c.readyState === "complete")
						return setTimeout(d.ready, 1);
					if (c.addEventListener)
						c.addEventListener("DOMContentLoaded", y, !1), a.addEventListener("load", d.ready, !1);
					else if (c.attachEvent) {
						c.attachEvent("onreadystatechange", y),
						a.attachEvent("onload", d.ready);
						var b = !1;
						try {
							b = a.frameElement == null
						} catch (e) {}
						
						c.documentElement.doScroll && b && G()
					}
				}
			},
			isFunction : function (a) {
				return d.type(a) === "function"
			},
			isArray : Array.isArray || function (a) {
				return d.type(a) === "array"
			},
			isWindow : function (a) {
				return a && typeof a === "object" && "setInterval" in a
			},
			isNaN : function (a) {
				return a == null || !l.test(a) || isNaN(a)
			},
			type : function (a) {
				return a == null ? String(a) : F[z.call(a)] || "object"
			},
			isPlainObject : function (a) {
				if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a))
					return !1;
				if (a.constructor && !A.call(a, "constructor") && !A.call(a.constructor.prototype, "isPrototypeOf"))
					return !1;
				var c;
				for (c in a) {}
				
				return c === b || A.call(a, c)
			},
			isEmptyObject : function (a) {
				for (var b in a)
					return !1;
				return !0
			},
			error : function (a) {
				throw a
			},
			parseJSON : function (b) {
				if (typeof b !== "string" || !b)
					return null;
				b = d.trim(b);
				if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
					return a.JSON && a.JSON.parse ? a.JSON.parse(b) : (new Function("return " + b))();
				d.error("Invalid JSON: " + b)
			},
			parseXML : function (b, c, e) {
				a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)),
				e = c.documentElement,
				(!e || !e.nodeName || e.nodeName === "parsererror") && d.error("Invalid XML: " + b);
				return c
			},
			noop : function () {},
			globalEval : function (a) {
				if (a && i.test(a)) {
					var b = c.head || c.getElementsByTagName("head")[0] || c.documentElement,
					e = c.createElement("script");
					d.support.scriptEval() ? e.appendChild(c.createTextNode(a)) : e.text = a,
					b.insertBefore(e, b.firstChild),
					b.removeChild(e)
				}
			},
			nodeName : function (a, b) {
				return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
			},
			each : function (a, c, e) {
				var f,
				g = 0,
				h = a.length,
				i = h === b || d.isFunction(a);
				if (e) {
					if (i) {
						for (f in a)
							if (c.apply(a[f], e) === !1)
								break
					} else
						for (; g < h; )
							if (c.apply(a[g++], e) === !1)
								break
				} else if (i) {
					for (f in a)
						if (c.call(a[f], f, a[f]) === !1)
							break
				} else
					for (var j = a[0]; g < h && c.call(j, g, j) !== !1; j = a[++g]) {}
					
				return a
			},
			trim : D ? function (a) {
				return a == null ? "" : D.call(a)
			}
			 : function (a) {
				return a == null ? "" : (a + "").replace(j, "").replace(k, "")
			},
			makeArray : function (a, b) {
				var c = b || [];
				if (a != null) {
					var e = d.type(a);
					a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? B.call(c, a) : d.merge(c, a)
				}
				return c
			},
			inArray : function (a, b) {
				if (b.indexOf)
					return b.indexOf(a);
				for (var c = 0, d = b.length; c < d; c++)
					if (b[c] === a)
						return c;
				return -1
			},
			merge : function (a, c) {
				var d = a.length,
				e = 0;
				if (typeof c.length === "number")
					for (var f = c.length; e < f; e++)
						a[d++] = c[e];
				else
					while (c[e] !== b)
						a[d++] = c[e++];
				a.length = d;
				return a
			},
			grep : function (a, b, c) {
				var d = [],
				e;
				c = !!c;
				for (var f = 0, g = a.length; f < g; f++)
					e = !!b(a[f], f), c !== e && d.push(a[f]);
				return d
			},
			map : function (a, b, c) {
				var d = [],
				e;
				for (var f = 0, g = a.length; f < g; f++)
					e = b(a[f], f, c), e != null && (d[d.length] = e);
				return d.concat.apply([], d)
			},
			guid : 1,
			proxy : function (a, c, e) {
				arguments.length === 2 && (typeof c === "string" ? (e = a, a = e[c], c = b) : c && !d.isFunction(c) && (e = c, c = b)),
				!c && a && (c = function () {
					return a.apply(e || this, arguments)
				}),
				a && (c.guid = a.guid = a.guid || c.guid || d.guid++);
				return c
			},
			access : function (a, c, e, f, g, h) {
				var i = a.length;
				if (typeof c === "object") {
					for (var j in c)
						d.access(a, j, c[j], f, g, e);
					return a
				}
				if (e !== b) {
					f = !h && f && d.isFunction(e);
					for (var k = 0; k < i; k++)
						g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
					return a
				}
				return i ? g(a[0], c) : b
			},
			now : function () {
				return (new Date).getTime()
			},
			uaMatch : function (a) {
				a = a.toLowerCase();
				var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
				return {
					browser : b[1] || "",
					version : b[2] || "0"
				}
			},
			sub : function () {
				function a(b, c) {
					return new a.fn.init(b, c)
				}
				d.extend(!0, a, this),
				a.superclass = this,
				a.fn = a.prototype = this(),
				a.fn.constructor = a,
				a.subclass = this.subclass,
				a.fn.init = function b(b, c) {
					c && c instanceof d && !(c instanceof a) && (c = a(c));
					return d.fn.init.call(this, b, c, e)
				},
				a.fn.init.prototype = a.fn;
				var e = a(c);
				return a
			},
			browser : {}
			
		}),
		d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
			F["[object " + b + "]"] = b.toLowerCase()
		}),
		w = d.uaMatch(v),
		w.browser && (d.browser[w.browser] = !0, d.browser.version = w.version),
		d.browser.webkit && (d.browser.safari = !0),
		E && (d.inArray = function (a, b) {
			return E.call(b, a)
		}),
		i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/),
		g = d(c),
		c.addEventListener ? y = function () {
			c.removeEventListener("DOMContentLoaded", y, !1),
			d.ready()
		}
		 : c.attachEvent && (y = function () {
			c.readyState === "complete" && (c.detachEvent("onreadystatechange", y), d.ready())
		});
		return d
	}
	(),
	e = "then done fail isResolved isRejected promise".split(" "),
	f = [].slice;
	d.extend({
		_Deferred : function () {
			var a = [],
			b,
			c,
			e,
			f = {
				done : function () {
					if (!e) {
						var c = arguments,
						g,
						h,
						i,
						j,
						k;
						b && (k = b, b = 0);
						for (g = 0, h = c.length; g < h; g++)
							i = c[g], j = d.type(i), j === "array" ? f.done.apply(f, i) : j === "function" && a.push(i);
						k && f.resolveWith(k[0], k[1])
					}
					return this
				},
				resolveWith : function (d, f) {
					if (!e && !b && !c) {
						f = f || [],
						c = 1;
						try {
							while (a[0])
								a.shift().apply(d, f)
						}
						finally {
							b = [d, f],
							c = 0
						}
					}
					return this
				},
				resolve : function () {
					f.resolveWith(this, arguments);
					return this
				},
				isResolved : function () {
					return c || b
				},
				cancel : function () {
					e = 1,
					a = [];
					return this
				}
			};
			return f
		},
		Deferred : function (a) {
			var b = d._Deferred(),
			c = d._Deferred(),
			f;
			d.extend(b, {
				then : function (a, c) {
					b.done(a).fail(c);
					return this
				},
				fail : c.done,
				rejectWith : c.resolveWith,
				reject : c.resolve,
				isRejected : c.isResolved,
				promise : function (a) {
					if (a == null) {
						if (f)
							return f;
						f = a = {}
						
					}
					var c = e.length;
					while (c--)
						a[e[c]] = b[e[c]];
					return a
				}
			}),
			b.done(c.cancel).fail(b.cancel),
			delete b.cancel,
			a && a.call(b, b);
			return b
		},
		when : function (a) {
			function i(a) {
				return function (c) {
					b[a] = arguments.length > 1 ? f.call(arguments, 0) : c,
					--g || h.resolveWith(h, f.call(b, 0))
				}
			}
			var b = arguments,
			c = 0,
			e = b.length,
			g = e,
			h = e <= 1 && a && d.isFunction(a.promise) ? a : d.Deferred();
			if (e > 1) {
				for (; c < e; c++)
					b[c] && d.isFunction(b[c].promise) ? b[c].promise().then(i(c), h.reject) : --g;
				g || h.resolveWith(h, b)
			} else
				h !== a && h.resolveWith(h, e ? [a] : []);
			return h.promise()
		}
	}),
	function () {
		d.support = {};
		var b = c.createElement("div");
		b.style.display = "none",
		b.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var e = b.getElementsByTagName("*"),
		f = b.getElementsByTagName("a")[0],
		g = c.createElement("select"),
		h = g.appendChild(c.createElement("option")),
		i = b.getElementsByTagName("input")[0];
		if (e && e.length && f) {
			d.support = {
				leadingWhitespace : b.firstChild.nodeType === 3,
				tbody : !b.getElementsByTagName("tbody").length,
				htmlSerialize : !!b.getElementsByTagName("link").length,
				style : /red/.test(f.getAttribute("style")),
				hrefNormalized : f.getAttribute("href") === "/a",
				opacity : /^0.55$/.test(f.style.opacity),
				cssFloat : !!f.style.cssFloat,
				checkOn : i.value === "on",
				optSelected : h.selected,
				deleteExpando : !0,
				optDisabled : !1,
				checkClone : !1,
				noCloneEvent : !0,
				noCloneChecked : !0,
				boxModel : null,
				inlineBlockNeedsLayout : !1,
				shrinkWrapBlocks : !1,
				reliableHiddenOffsets : !0,
				reliableMarginRight : !0
			},
			i.checked = !0,
			d.support.noCloneChecked = i.cloneNode(!0).checked,
			g.disabled = !0,
			d.support.optDisabled = !h.disabled;
			var j = null;
			d.support.scriptEval = function () {
				if (j === null) {
					var b = c.documentElement,
					e = c.createElement("script"),
					f = "script" + d.now();
					try {
						e.appendChild(c.createTextNode("window." + f + "=1;"))
					} catch (g) {}
					
					b.insertBefore(e, b.firstChild),
					a[f] ? (j = !0, delete a[f]) : j = !1,
					b.removeChild(e)
				}
				return j
			};
			try {
				delete b.test
			} catch (k) {
				d.support.deleteExpando = !1
			}
			!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function l() {
					d.support.noCloneEvent = !1,
					b.detachEvent("onclick", l)
				}), b.cloneNode(!0).fireEvent("onclick")),
			b = c.createElement("div"),
			b.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			var m = c.createDocumentFragment();
			m.appendChild(b.firstChild),
			d.support.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked,
			d(function () {
				var a = c.createElement("div"),
				b = c.getElementsByTagName("body")[0];
				if (b) {
					a.style.width = a.style.paddingLeft = "1px",
					b.appendChild(a),
					d.boxModel = d.support.boxModel = a.offsetWidth === 2,
					"zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, d.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", d.support.shrinkWrapBlocks = a.offsetWidth !== 2),
					a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
					var e = a.getElementsByTagName("td");
					d.support.reliableHiddenOffsets = e[0].offsetHeight === 0,
					e[0].style.display = "",
					e[1].style.display = "none",
					d.support.reliableHiddenOffsets = d.support.reliableHiddenOffsets && e[0].offsetHeight === 0,
					a.innerHTML = "",
					c.defaultView && c.defaultView.getComputedStyle && (a.style.width = "1px", a.style.marginRight = "0", d.support.reliableMarginRight = (parseInt(c.defaultView.getComputedStyle(a, null).marginRight, 10) || 0) === 0),
					b.removeChild(a).style.display = "none",
					a = e = null
				}
			});
			var n = function (a) {
				var b = c.createElement("div");
				a = "on" + a;
				if (!b.attachEvent)
					return !0;
				var d = a in b;
				d || (b.setAttribute(a, "return;"), d = typeof b[a] === "function");
				return d
			};
			d.support.submitBubbles = n("submit"),
			d.support.changeBubbles = n("change"),
			b = e = f = null
		}
	}
	();
	var g = /^(?:\{.*\}|\[.*\])$/;
	d.extend({
		cache : {},
		uuid : 0,
		expando : "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData : {
			embed : !0,
			object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet : !0
		},
		hasData : function (a) {
			a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
			return !!a && !i(a)
		},
		data : function (a, c, e, f) {
			if (d.acceptData(a)) {
				var g = d.expando,
				h = typeof c === "string",
				i,
				j = a.nodeType,
				k = j ? d.cache : a,
				l = j ? a[d.expando] : a[d.expando] && d.expando;
				if ((!l || f && l && !k[l][g]) && h && e === b)
					return;
				l || (j ? a[d.expando] = l = ++d.uuid : l = d.expando),
				k[l] || (k[l] = {}, j || (k[l].toJSON = d.noop));
				if (typeof c === "object" || typeof c === "function")
					f ? k[l][g] = d.extend(k[l][g], c) : k[l] = d.extend(k[l], c);
				i = k[l],
				f && (i[g] || (i[g] = {}), i = i[g]),
				e !== b && (i[c] = e);
				if (c === "events" && !i[c])
					return i[g] && i[g].events;
				return h ? i[c] : i
			}
		},
		removeData : function (b, c, e) {
			if (d.acceptData(b)) {
				var f = d.expando,
				g = b.nodeType,
				h = g ? d.cache : b,
				j = g ? b[d.expando] : d.expando;
				if (!h[j])
					return;
				if (c) {
					var k = e ? h[j][f] : h[j];
					if (k) {
						delete k[c];
						if (!i(k))
							return
					}
				}
				if (e) {
					delete h[j][f];
					if (!i(h[j]))
						return
				}
				var l = h[j][f];
				d.support.deleteExpando || h != a ? delete h[j] : h[j] = null,
				l ? (h[j] = {}, g || (h[j].toJSON = d.noop), h[j][f] = l) : g && (d.support.deleteExpando ? delete b[d.expando] : b.removeAttribute ? b.removeAttribute(d.expando) : b[d.expando] = null)
			}
		},
		_data : function (a, b, c) {
			return d.data(a, b, c, !0)
		},
		acceptData : function (a) {
			if (a.nodeName) {
				var b = d.noData[a.nodeName.toLowerCase()];
				if (b)
					return b !== !0 && a.getAttribute("classid") === b
			}
			return !0
		}
	}),
	d.fn.extend({
		data : function (a, c) {
			var e = null;
			if (typeof a === "undefined") {
				if (this.length) {
					e = d.data(this[0]);
					if (this[0].nodeType === 1) {
						var f = this[0].attributes,
						g;
						for (var i = 0, j = f.length; i < j; i++)
							g = f[i].name, g.indexOf("data-") === 0 && (g = g.substr(5), h(this[0], g, e[g]))
					}
				}
				return e
			}
			if (typeof a === "object")
				return this.each(function () {
					d.data(this, a)
				});
			var k = a.split(".");
			k[1] = k[1] ? "." + k[1] : "";
			if (c === b) {
				e = this.triggerHandler("getData" + k[1] + "!", [k[0]]),
				e === b && this.length && (e = d.data(this[0], a), e = h(this[0], a, e));
				return e === b && k[1] ? this.data(k[0]) : e
			}
			return this.each(function () {
				var b = d(this),
				e = [k[0], c];
				b.triggerHandler("setData" + k[1] + "!", e),
				d.data(this, a, c),
				b.triggerHandler("changeData" + k[1] + "!", e)
			})
		},
		removeData : function (a) {
			return this.each(function () {
				d.removeData(this, a)
			})
		}
	}),
	d.extend({
		queue : function (a, b, c) {
			if (a) {
				b = (b || "fx") + "queue";
				var e = d._data(a, b);
				if (!c)
					return e || [];
				!e || d.isArray(c) ? e = d._data(a, b, d.makeArray(c)) : e.push(c);
				return e
			}
		},
		dequeue : function (a, b) {
			b = b || "fx";
			var c = d.queue(a, b),
			e = c.shift();
			e === "inprogress" && (e = c.shift()),
			e && (b === "fx" && c.unshift("inprogress"), e.call(a, function () {
					d.dequeue(a, b)
				})),
			c.length || d.removeData(a, b + "queue", !0)
		}
	}),
	d.fn.extend({
		queue : function (a, c) {
			typeof a !== "string" && (c = a, a = "fx");
			if (c === b)
				return d.queue(this[0], a);
			return this.each(function (b) {
				var e = d.queue(this, a, c);
				a === "fx" && e[0] !== "inprogress" && d.dequeue(this, a)
			})
		},
		dequeue : function (a) {
			return this.each(function () {
				d.dequeue(this, a)
			})
		},
		delay : function (a, b) {
			a = d.fx ? d.fx.speeds[a] || a : a,
			b = b || "fx";
			return this.queue(b, function () {
				var c = this;
				setTimeout(function () {
					d.dequeue(c, b)
				}, a)
			})
		},
		clearQueue : function (a) {
			return this.queue(a || "fx", [])
		}
	});
	var j = /[\n\t\r]/g,
	k = /\s+/,
	l = /\r/g,
	m = /^(?:href|src|style)$/,
	n = /^(?:button|input)$/i,
	o = /^(?:button|input|object|select|textarea)$/i,
	p = /^a(?:rea)?$/i,
	q = /^(?:radio|checkbox)$/i;
	d.props = {
		"for" : "htmlFor",
		"class" : "className",
		readonly : "readOnly",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		rowspan : "rowSpan",
		colspan : "colSpan",
		tabindex : "tabIndex",
		usemap : "useMap",
		frameborder : "frameBorder"
	},
	d.fn.extend({
		attr : function (a, b) {
			return d.access(this, a, b, !0, d.attr)
		},
		removeAttr : function (a, b) {
			return this.each(function () {
				d.attr(this, a, ""),
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass : function (a) {
			if (d.isFunction(a))
				return this.each(function (b) {
					var c = d(this);
					c.addClass(a.call(this, b, c.attr("class")))
				});
			if (a && typeof a === "string") {
				var b = (a || "").split(k);
				for (var c = 0, e = this.length; c < e; c++) {
					var f = this[c];
					if (f.nodeType === 1)
						if (f.className) {
							var g = " " + f.className + " ",
							h = f.className;
							for (var i = 0, j = b.length; i < j; i++)
								g.indexOf(" " + b[i] + " ") < 0 && (h += " " + b[i]);
							f.className = d.trim(h)
						} else
							f.className = a
				}
			}
			return this
		},
		removeClass : function (a) {
			if (d.isFunction(a))
				return this.each(function (b) {
					var c = d(this);
					c.removeClass(a.call(this, b, c.attr("class")))
				});
			if (a && typeof a === "string" || a === b) {
				var c = (a || "").split(k);
				for (var e = 0, f = this.length; e < f; e++) {
					var g = this[e];
					if (g.nodeType === 1 && g.className)
						if (a) {
							var h = (" " + g.className + " ").replace(j, " ");
							for (var i = 0, l = c.length; i < l; i++)
								h = h.replace(" " + c[i] + " ", " ");
							g.className = d.trim(h)
						} else
							g.className = ""
				}
			}
			return this
		},
		toggleClass : function (a, b) {
			var c = typeof a,
			e = typeof b === "boolean";
			if (d.isFunction(a))
				return this.each(function (c) {
					var e = d(this);
					e.toggleClass(a.call(this, c, e.attr("class"), b), b)
				});
			return this.each(function () {
				if (c === "string") {
					var f,
					g = 0,
					h = d(this),
					i = b,
					j = a.split(k);
					while (f = j[g++])
						i = e ? i : !h.hasClass(f), h[i ? "addClass" : "removeClass"](f)
				} else if (c === "undefined" || c === "boolean")
					this.className && d._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : d._data(this, "__className__") || ""
			})
		},
		hasClass : function (a) {
			var b = " " + a + " ";
			for (var c = 0, d = this.length; c < d; c++)
				if ((" " + this[c].className + " ").replace(j, " ").indexOf(b) > -1)
					return !0;
			return !1
		},
		val : function (a) {
			if (!arguments.length) {
				var c = this[0];
				if (c) {
					if (d.nodeName(c, "option")) {
						var e = c.attributes.value;
						return !e || e.specified ? c.value : c.text
					}
					if (d.nodeName(c, "select")) {
						var f = c.selectedIndex,
						g = [],
						h = c.options,
						i = c.type === "select-one";
						if (f < 0)
							return null;
						for (var j = i ? f : 0, k = i ? f + 1 : h.length; j < k; j++) {
							var m = h[j];
							if (m.selected && (d.support.optDisabled ? !m.disabled : m.getAttribute("disabled") === null) && (!m.parentNode.disabled || !d.nodeName(m.parentNode, "optgroup"))) {
								a = d(m).val();
								if (i)
									return a;
								g.push(a)
							}
						}
						if (i && !g.length && h.length)
							return d(h[f]).val();
						return g
					}
					if (q.test(c.type) && !d.support.checkOn)
						return c.getAttribute("value") === null ? "on" : c.value;
					return (c.value || "").replace(l, "")
				}
				return b
			}
			var n = d.isFunction(a);
			return this.each(function (b) {
				var c = d(this),
				e = a;
				if (this.nodeType === 1) {
					n && (e = a.call(this, b, c.val())),
					e == null ? e = "" : typeof e === "number" ? e += "" : d.isArray(e) && (e = d.map(e, function (a) {
									return a == null ? "" : a + ""
								}));
					if (d.isArray(e) && q.test(this.type))
						this.checked = d.inArray(c.val(), e) >= 0;
					else if (d.nodeName(this, "select")) {
						var f = d.makeArray(e);
						d("option", this).each(function () {
							this.selected = d.inArray(d(this).val(), f) >= 0
						}),
						f.length || (this.selectedIndex = -1)
					} else
						this.value = e
				}
			})
		}
	}),
	d.extend({
		attrFn : {
			val : !0,
			css : !0,
			html : !0,
			text : !0,
			data : !0,
			width : !0,
			height : !0,
			offset : !0
		},
		attr : function (a, c, e, f) {
			if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2)
				return b;
			if (f && c in d.attrFn)
				return d(a)[c](e);
			var g = a.nodeType !== 1 || !d.isXMLDoc(a),
			h = e !== b;
			c = g && d.props[c] || c;
			if (a.nodeType === 1) {
				var i = m.test(c);
				if (c === "selected" && !d.support.optSelected) {
					var j = a.parentNode;
					j && (j.selectedIndex, j.parentNode && j.parentNode.selectedIndex)
				}
				if ((c in a || a[c] !== b) && g && !i) {
					h && (c === "type" && n.test(a.nodeName) && a.parentNode && d.error("type property can't be changed"), e === null ? a.nodeType === 1 && a.removeAttribute(c) : a[c] = e);
					if (d.nodeName(a, "form") && a.getAttributeNode(c))
						return a.getAttributeNode(c).nodeValue;
					if (c === "tabIndex") {
						var k = a.getAttributeNode("tabIndex");
						return k && k.specified ? k.value : o.test(a.nodeName) || p.test(a.nodeName) && a.href ? 0 : b
					}
					return a[c]
				}
				if (!d.support.style && g && c === "style") {
					h && (a.style.cssText = "" + e);
					return a.style.cssText
				}
				h && a.setAttribute(c, "" + e);
				if (!a.attributes[c] && (a.hasAttribute && !a.hasAttribute(c)))
					return b;
				var l = !d.support.hrefNormalized && g && i ? a.getAttribute(c, 2) : a.getAttribute(c);
				return l === null ? b : l
			}
			h && (a[c] = e);
			return a[c]
		}
	});
	var r = /\.(.*)$/,
	s = /^(?:textarea|input|select)$/i,
	t = /\./g,
	u = / /g,
	v = /[^\w\s.|`]/g,
	w = function (a) {
		return a.replace(v, "\\$&")
	};
	d.event = {
		add : function (c, e, f, g) {
			if (c.nodeType !== 3 && c.nodeType !== 8) {
				try {
					d.isWindow(c) && (c !== a && !c.frameElement) && (c = a)
				} catch (h) {}
				
				if (f === !1)
					f = x;
				else if (!f)
					return;
				var i,
				j;
				f.handler && (i = f, f = i.handler),
				f.guid || (f.guid = d.guid++);
				var k = d._data(c);
				if (!k)
					return;
				var l = k.events,
				m = k.handle;
				l || (k.events = l = {}),
				m || (k.handle = m = function (a) {
					return typeof d !== "undefined" && d.event.triggered !== a.type ? d.event.handle.apply(m.elem, arguments) : b
				}),
				m.elem = c,
				e = e.split(" ");
				var n,
				o = 0,
				p;
				while (n = e[o++]) {
					j = i ? d.extend({}, i) : {
						handler : f,
						data : g
					},
					n.indexOf(".") > -1 ? (p = n.split("."), n = p.shift(), j.namespace = p.slice(0).sort().join(".")) : (p = [], j.namespace = ""),
					j.type = n,
					j.guid || (j.guid = f.guid);
					var q = l[n],
					r = d.event.special[n] || {};
					if (!q) {
						q = l[n] = [];
						if (!r.setup || r.setup.call(c, g, p, m) === !1)
							c.addEventListener ? c.addEventListener(n, m, !1) : c.attachEvent && c.attachEvent("on" + n, m)
					}
					r.add && (r.add.call(c, j), j.handler.guid || (j.handler.guid = f.guid)),
					q.push(j),
					d.event.global[n] = !0
				}
				c = null
			}
		},
		global : {},
		remove : function (a, c, e, f) {
			if (a.nodeType !== 3 && a.nodeType !== 8) {
				e === !1 && (e = x);
				var g,
				h,
				i,
				j,
				k = 0,
				l,
				m,
				n,
				o,
				p,
				q,
				r,
				s = d.hasData(a) && d._data(a),
				t = s && s.events;
				if (!s || !t)
					return;
				c && c.type && (e = c.handler, c = c.type);
				if (!c || typeof c === "string" && c.charAt(0) === ".") {
					c = c || "";
					for (h in t)
						d.event.remove(a, h + c);
					return
				}
				c = c.split(" ");
				while (h = c[k++]) {
					r = h,
					q = null,
					l = h.indexOf(".") < 0,
					m = [],
					l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + d.map(m.slice(0).sort(), w).join("\\.(?:.*\\.)?") + "(\\.|$)")),
					p = t[h];
					if (!p)
						continue;
					if (!e) {
						for (j = 0; j < p.length; j++) {
							q = p[j];
							if (l || n.test(q.namespace))
								d.event.remove(a, r, q.handler, j), p.splice(j--, 1)
						}
						continue
					}
					o = d.event.special[h] || {};
					for (j = f || 0; j < p.length; j++) {
						q = p[j];
						if (e.guid === q.guid) {
							if (l || n.test(q.namespace))
								f == null && p.splice(j--, 1), o.remove && o.remove.call(a, q);
							if (f != null)
								break
						}
					}
					if (p.length === 0 || f != null && p.length === 1)
						(!o.teardown || o.teardown.call(a, m) === !1) && d.removeEvent(a, h, s.handle), g = null, delete t[h]
				}
				if (d.isEmptyObject(t)) {
					var u = s.handle;
					u && (u.elem = null),
					delete s.events,
					delete s.handle,
					d.isEmptyObject(s) && d.removeData(a, b, !0)
				}
			}
		},
		trigger : function (a, c, e) {
			var f = a.type || a,
			g = arguments[3];
			if (!g) {
				a = typeof a === "object" ? a[d.expando] ? a : d.extend(d.Event(f), a) : d.Event(f),
				f.indexOf("!") >= 0 && (a.type = f = f.slice(0, -1), a.exclusive = !0),
				e || (a.stopPropagation(), d.event.global[f] && d.each(d.cache, function () {
						var b = d.expando,
						e = this[b];
						e && e.events && e.events[f] && d.event.trigger(a, c, e.handle.elem)
					}));
				if (!e || e.nodeType === 3 || e.nodeType === 8)
					return b;
				a.result = b,
				a.target = e,
				c = d.makeArray(c),
				c.unshift(a)
			}
			a.currentTarget = e;
			var h = d._data(e, "handle");
			h && h.apply(e, c);
			var i = e.parentNode || e.ownerDocument;
			try {
				e && e.nodeName && d.noData[e.nodeName.toLowerCase()] || e["on" + f] && e["on" + f].apply(e, c) === !1 && (a.result = !1, a.preventDefault())
			} catch (j) {}
			
			if (!a.isPropagationStopped() && i)
				d.event.trigger(a, c, i, !0);
			else if (!a.isDefaultPrevented()) {
				var k,
				l = a.target,
				m = f.replace(r, ""),
				n = d.nodeName(l, "a") && m === "click",
				o = d.event.special[m] || {};
				if ((!o._default || o._default.call(e, a) === !1) && !n && !(l && l.nodeName && d.noData[l.nodeName.toLowerCase()])) {
					try {
						l[m] && (k = l["on" + m], k && (l["on" + m] = null), d.event.triggered = a.type, l[m]())
					} catch (p) {}
					
					k && (l["on" + m] = k),
					d.event.triggered = b
				}
			}
		},
		handle : function (c) {
			var e,
			f,
			g,
			h,
			i,
			j = [],
			k = d.makeArray(arguments);
			c = k[0] = d.event.fix(c || a.event),
			c.currentTarget = this,
			e = c.type.indexOf(".") < 0 && !c.exclusive,
			e || (g = c.type.split("."), c.type = g.shift(), j = g.slice(0).sort(), h = new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)")),
			c.namespace = c.namespace || j.join("."),
			i = d._data(this, "events"),
			f = (i || {})[c.type];
			if (i && f) {
				f = f.slice(0);
				for (var l = 0, m = f.length; l < m; l++) {
					var n = f[l];
					if (e || h.test(n.namespace)) {
						c.handler = n.handler,
						c.data = n.data,
						c.handleObj = n;
						var o = n.handler.apply(this, k);
						o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()));
						if (c.isImmediatePropagationStopped())
							break
					}
				}
			}
			return c.result
		},
		props : "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix : function (a) {
			if (a[d.expando])
				return a;
			var e = a;
			a = d.Event(e);
			for (var f = this.props.length, g; f; )
				g = this.props[--f], a[g] = e[g];
			a.target || (a.target = a.srcElement || c),
			a.target.nodeType === 3 && (a.target = a.target.parentNode),
			!a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
			if (a.pageX == null && a.clientX != null) {
				var h = c.documentElement,
				i = c.body;
				a.pageX = a.clientX + (h && h.scrollLeft || i && i.scrollLeft || 0) - (h && h.clientLeft || i && i.clientLeft || 0),
				a.pageY = a.clientY + (h && h.scrollTop || i && i.scrollTop || 0) - (h && h.clientTop || i && i.clientTop || 0)
			}
			a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode),
			!a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey),
			!a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
			return a
		},
		guid : 1e8,
		proxy : d.proxy,
		special : {
			ready : {
				setup : d.bindReady,
				teardown : d.noop
			},
			live : {
				add : function (a) {
					d.event.add(this, H(a.origType, a.selector), d.extend({}, a, {
							handler : G,
							guid : a.handler.guid
						}))
				},
				remove : function (a) {
					d.event.remove(this, H(a.origType, a.selector), a)
				}
			},
			beforeunload : {
				setup : function (a, b, c) {
					d.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown : function (a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		}
	},
	d.removeEvent = c.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}
	 : function (a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	},
	d.Event = function (a) {
		if (!this.preventDefault)
			return new d.Event(a);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? y : x) : this.type = a,
		this.timeStamp = d.now(),
		this[d.expando] = !0
	},
	d.Event.prototype = {
		preventDefault : function () {
			this.isDefaultPrevented = y;
			var a = this.originalEvent;
			a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation : function () {
			this.isPropagationStopped = y;
			var a = this.originalEvent;
			a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = y,
			this.stopPropagation()
		},
		isDefaultPrevented : x,
		isPropagationStopped : x,
		isImmediatePropagationStopped : x
	};
	var z = function (a) {
		var b = a.relatedTarget;
		try {
			if (b && b !== c && !b.parentNode)
				return;
			while (b && b !== this)
				b = b.parentNode;
			b !== this && (a.type = a.data, d.event.handle.apply(this, arguments))
		} catch (e) {}
		
	},
	A = function (a) {
		a.type = a.data,
		d.event.handle.apply(this, arguments)
	};
	d.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (a, b) {
		d.event.special[a] = {
			setup : function (c) {
				d.event.add(this, b, c && c.selector ? A : z, a)
			},
			teardown : function (a) {
				d.event.remove(this, b, a && a.selector ? A : z)
			}
		}
	}),
	d.support.submitBubbles || (d.event.special.submit = {
			setup : function (a, b) {
				if (this.nodeName && this.nodeName.toLowerCase() !== "form")
					d.event.add(this, "click.specialSubmit", function (a) {
						var b = a.target,
						c = b.type;
						(c === "submit" || c === "image") && d(b).closest("form").length && E("submit", this, arguments)
					}), d.event.add(this, "keypress.specialSubmit", function (a) {
						var b = a.target,
						c = b.type;
						(c === "text" || c === "password") && d(b).closest("form").length && a.keyCode === 13 && E("submit", this, arguments)
					});
				else
					return !1
			},
			teardown : function (a) {
				d.event.remove(this, ".specialSubmit")
			}
		});
	if (!d.support.changeBubbles) {
		var B,
		C = function (a) {
			var b = a.type,
			c = a.value;
			b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? d.map(a.options, function (a) {
					return a.selected
				}).join("-") : "" : a.nodeName.toLowerCase() === "select" && (c = a.selectedIndex);
			return c
		},
		D = function D(a) {
			var c = a.target,
			e,
			f;
			if (s.test(c.nodeName) && !c.readOnly) {
				e = d._data(c, "_change_data"),
				f = C(c),
				(a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", f);
				if (e === b || f === e)
					return;
				if (e != null || f)
					a.type = "change", a.liveFired = b, d.event.trigger(a, arguments[1], c)
			}
		};
		d.event.special.change = {
			filters : {
				focusout : D,
				beforedeactivate : D,
				click : function (a) {
					var b = a.target,
					c = b.type;
					(c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") && D.call(this, a)
				},
				keydown : function (a) {
					var b = a.target,
					c = b.type;
					(a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && D.call(this, a)
				},
				beforeactivate : function (a) {
					var b = a.target;
					d._data(b, "_change_data", C(b))
				}
			},
			setup : function (a, b) {
				if (this.type === "file")
					return !1;
				for (var c in B)
					d.event.add(this, c + ".specialChange", B[c]);
				return s.test(this.nodeName)
			},
			teardown : function (a) {
				d.event.remove(this, ".specialChange");
				return s.test(this.nodeName)
			}
		},
		B = d.event.special.change.filters,
		B.focus = B.beforeactivate
	}
	c.addEventListener && d.each({
		focus : "focusin",
		blur : "focusout"
	}, function (a, b) {
		function f(a) {
			var c = d.event.fix(a);
			c.type = b,
			c.originalEvent = {},
			d.event.trigger(c, null, c.target),
			c.isDefaultPrevented() && a.preventDefault()
		}
		var e = 0;
		d.event.special[b] = {
			setup : function () {
				e++ === 0 && c.addEventListener(a, f, !0)
			},
			teardown : function () {
				--e === 0 && c.removeEventListener(a, f, !0)
			}
		}
	}),
	d.each(["bind", "one"], function (a, c) {
		d.fn[c] = function (a, e, f) {
			if (typeof a === "object") {
				for (var g in a)
					this[c](g, e, a[g], f);
				return this
			}
			if (d.isFunction(e) || e === !1)
				f = e, e = b;
			var h = c === "one" ? d.proxy(f, function (a) {
					d(this).unbind(a, h);
					return f.apply(this, arguments)
				}) : f;
			if (a === "unload" && c !== "one")
				this.one(a, e, f);
			else
				for (var i = 0, j = this.length; i < j; i++)
					d.event.add(this[i], a, h, e);
			return this
		}
	}),
	d.fn.extend({
		unbind : function (a, b) {
			if (typeof a !== "object" || a.preventDefault)
				for (var e = 0, f = this.length; e < f; e++)
					d.event.remove(this[e], a, b);
			else
				for (var c in a)
					this.unbind(c, a[c]);
			return this
		},
		delegate : function (a, b, c, d) {
			return this.live(b, c, d, a)
		},
		undelegate : function (a, b, c) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
		},
		trigger : function (a, b) {
			return this.each(function () {
				d.event.trigger(a, b, this)
			})
		},
		triggerHandler : function (a, b) {
			if (this[0]) {
				var c = d.Event(a);
				c.preventDefault(),
				c.stopPropagation(),
				d.event.trigger(c, b, this[0]);
				return c.result
			}
		},
		toggle : function (a) {
			var b = arguments,
			c = 1;
			while (c < b.length)
				d.proxy(a, b[c++]);
			return this.click(d.proxy(a, function (e) {
					var f = (d._data(this, "lastToggle" + a.guid) || 0) % c;
					d._data(this, "lastToggle" + a.guid, f + 1),
					e.preventDefault();
					return b[f].apply(this, arguments) || !1
				}))
		},
		hover : function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var F = {
		focus : "focusin",
		blur : "focusout",
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	};
	d.each(["live", "die"], function (a, c) {
		d.fn[c] = function (a, e, f, g) {
			var h,
			i = 0,
			j,
			k,
			l,
			m = g || this.selector,
			n = g ? this : d(this.context);
			if (typeof a === "object" && !a.preventDefault) {
				for (var o in a)
					n[c](o, e, a[o], m);
				return this
			}
			d.isFunction(e) && (f = e, e = b),
			a = (a || "").split(" ");
			while ((h = a[i++]) != null) {
				j = r.exec(h),
				k = "",
				j && (k = j[0], h = h.replace(r, ""));
				if (h === "hover") {
					a.push("mouseenter" + k, "mouseleave" + k);
					continue
				}
				l = h,
				h === "focus" || h === "blur" ? (a.push(F[h] + k), h = h + k) : h = (F[h] || h) + k;
				if (c === "live")
					for (var p = 0, q = n.length; p < q; p++)
						d.event.add(n[p], "live." + H(h, m), {
							data : e,
							selector : m,
							handler : f,
							origType : h,
							origHandler : f,
							preType : l
						});
				else
					n.unbind("live." + H(h, m), f)
			}
			return this
		}
	}),
	d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
		d.fn[b] = function (a, c) {
			c == null && (c = a, a = null);
			return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
		},
		d.attrFn && (d.attrFn[b] = !0)
	}),
	function () {
		function u(a, b, c, d, e, f) {
			for (var g = 0, h = d.length; g < h; g++) {
				var i = d[g];
				if (i) {
					var j = !1;
					i = i[a];
					while (i) {
						if (i.sizcache === c) {
							j = d[i.sizset];
							break
						}
						if (i.nodeType === 1) {
							f || (i.sizcache = c, i.sizset = g);
							if (typeof b !== "string") {
								if (i === b) {
									j = !0;
									break
								}
							} else if (k.filter(b, [i]).length > 0) {
								j = i;
								break
							}
						}
						i = i[a]
					}
					d[g] = j
				}
			}
		}
		function t(a, b, c, d, e, f) {
			for (var g = 0, h = d.length; g < h; g++) {
				var i = d[g];
				if (i) {
					var j = !1;
					i = i[a];
					while (i) {
						if (i.sizcache === c) {
							j = d[i.sizset];
							break
						}
						i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
						if (i.nodeName.toLowerCase() === b) {
							j = i;
							break
						}
						i = i[a]
					}
					d[g] = j
				}
			}
		}
		var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		e = 0,
		f = Object.prototype.toString,
		g = !1,
		h = !0,
		i = /\\/g,
		j = /\W/;
		[0, 0].sort(function () {
			h = !1;
			return 0
		});
		var k = function (b, d, e, g) {
			e = e || [],
			d = d || c;
			var h = d;
			if (d.nodeType !== 1 && d.nodeType !== 9)
				return [];
			if (!b || typeof b !== "string")
				return e;
			var i,
			j,
			n,
			o,
			q,
			r,
			s,
			t,
			u = !0,
			w = k.isXML(d),
			x = [],
			y = b;
			do {
				a.exec(""),
				i = a.exec(y);
				if (i) {
					y = i[3],
					x.push(i[1]);
					if (i[2]) {
						o = i[3];
						break
					}
				}
			} while (i);
			if (x.length > 1 && m.exec(b))
				if (x.length === 2 && l.relative[x[0]])
					j = v(x[0] + x[1], d);
				else {
					j = l.relative[x[0]] ? [d] : k(x.shift(), d);
					while (x.length)
						b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
				}
			else {
				!g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
				if (d) {
					q = g ? {
						expr : x.pop(),
						set : p(g)
					}
					 : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w),
					j = q.expr ? k.filter(q.expr, q.set) : q.set,
					x.length > 0 ? n = p(j) : u = !1;
					while (x.length)
						r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](n, s, w)
				} else
					n = x = []
			}
			n || (n = j),
			n || k.error(r || b);
			if (f.call(n) === "[object Array]")
				if (u)
					if (d && d.nodeType === 1)
						for (t = 0; n[t] != null; t++)
							n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && e.push(j[t]);
					else
						for (t = 0; n[t] != null; t++)
							n[t] && n[t].nodeType === 1 && e.push(j[t]);
				else
					e.push.apply(e, n);
			else
				p(n, e);
			o && (k(o, h, e, g), k.uniqueSort(e));
			return e
		};
		k.uniqueSort = function (a) {
			if (r) {
				g = h,
				a.sort(r);
				if (g)
					for (var b = 1; b < a.length; b++)
						a[b] === a[b - 1] && a.splice(b--, 1)
			}
			return a
		},
		k.matches = function (a, b) {
			return k(a, null, null, b)
		},
		k.matchesSelector = function (a, b) {
			return k(b, null, null, [a]).length > 0
		},
		k.find = function (a, b, c) {
			var d;
			if (!a)
				return [];
			for (var e = 0, f = l.order.length; e < f; e++) {
				var g,
				h = l.order[e];
				if (g = l.leftMatch[h].exec(a)) {
					var j = g[1];
					g.splice(1, 1);
					if (j.substr(j.length - 1) !== "\\") {
						g[1] = (g[1] || "").replace(i, ""),
						d = l.find[h](g, b, c);
						if (d != null) {
							a = a.replace(l.match[h], "");
							break
						}
					}
				}
			}
			d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
			return {
				set : d,
				expr : a
			}
		},
		k.filter = function (a, c, d, e) {
			var f,
			g,
			h = a,
			i = [],
			j = c,
			m = c && c[0] && k.isXML(c[0]);
			while (a && c.length) {
				for (var n in l.filter)
					if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
						var o,
						p,
						q = l.filter[n],
						r = f[1];
						g = !1,
						f.splice(1, 1);
						if (r.substr(r.length - 1) === "\\")
							continue;
						j === i && (i = []);
						if (l.preFilter[n]) {
							f = l.preFilter[n](f, j, d, i, e, m);
							if (f) {
								if (f === !0)
									continue
							} else
								g = o = !0
						}
						if (f)
							for (var s = 0; (p = j[s]) != null; s++)
								if (p) {
									o = q(p, f, s, j);
									var t = e^!!o;
									d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
								}
						if (o !== b) {
							d || (j = i),
							a = a.replace(l.match[n], "");
							if (!g)
								return [];
							break
						}
					}
				if (a === h)
					if (g == null)
						k.error(a);
					else
						break;
				h = a
			}
			return j
		},
		k.error = function (a) {
			throw "Syntax error, unrecognized expression: " + a
		};
		var l = k.selectors = {
			order : ["ID", "NAME", "TAG"],
			match : {
				ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
				TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD : /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch : {},
			attrMap : {
				"class" : "className",
				"for" : "htmlFor"
			},
			attrHandle : {
				href : function (a) {
					return a.getAttribute("href")
				},
				type : function (a) {
					return a.getAttribute("type")
				}
			},
			relative : {
				"+" : function (a, b) {
					var c = typeof b === "string",
					d = c && !j.test(b),
					e = c && !d;
					d && (b = b.toLowerCase());
					for (var f = 0, g = a.length, h; f < g; f++)
						if (h = a[f]) {
							while ((h = h.previousSibling) && h.nodeType !== 1) {}
							
							a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
						}
					e && k.filter(b, a, !0)
				},
				">" : function (a, b) {
					var c,
					d = typeof b === "string",
					e = 0,
					f = a.length;
					if (d && !j.test(b)) {
						b = b.toLowerCase();
						for (; e < f; e++) {
							c = a[e];
							if (c) {
								var g = c.parentNode;
								a[e] = g.nodeName.toLowerCase() === b ? g : !1
							}
						}
					} else {
						for (; e < f; e++)
							c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
						d && k.filter(b, a, !0)
					}
				},
				"" : function (a, b, c) {
					var d,
					f = e++,
					g = u;
					typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
					g("parentNode", b, f, a, d, c)
				},
				"~" : function (a, b, c) {
					var d,
					f = e++,
					g = u;
					typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
					g("previousSibling", b, f, a, d, c)
				}
			},
			find : {
				ID : function (a, b, c) {
					if (typeof b.getElementById !== "undefined" && !c) {
						var d = b.getElementById(a[1]);
						return d && d.parentNode ? [d] : []
					}
				},
				NAME : function (a, b) {
					if (typeof b.getElementsByName !== "undefined") {
						var c = [],
						d = b.getElementsByName(a[1]);
						for (var e = 0, f = d.length; e < f; e++)
							d[e].getAttribute("name") === a[1] && c.push(d[e]);
						return c.length === 0 ? null : c
					}
				},
				TAG : function (a, b) {
					if (typeof b.getElementsByTagName !== "undefined")
						return b.getElementsByTagName(a[1])
				}
			},
			preFilter : {
				CLASS : function (a, b, c, d, e, f) {
					a = " " + a[1].replace(i, "") + " ";
					if (f)
						return a;
					for (var g = 0, h; (h = b[g]) != null; g++)
						h && (e^(h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
					return !1
				},
				ID : function (a) {
					return a[1].replace(i, "")
				},
				TAG : function (a, b) {
					return a[1].replace(i, "").toLowerCase()
				},
				CHILD : function (a) {
					if (a[1] === "nth") {
						a[2] || k.error(a[0]),
						a[2] = a[2].replace(/^\+|\s*/g, "");
						var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = b[1] + (b[2] || 1) - 0,
						a[3] = b[3] - 0
					} else
						a[2] && k.error(a[0]);
					a[0] = e++;
					return a
				},
				ATTR : function (a, b, c, d, e, f) {
					var g = a[1] = a[1].replace(i, "");
					!f && l.attrMap[g] && (a[1] = l.attrMap[g]),
					a[4] = (a[4] || a[5] || "").replace(i, ""),
					a[2] === "~=" && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO : function (b, c, d, e, f) {
					if (b[1] === "not")
						if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
							b[3] = k(b[3], null, null, c);
						else {
							var g = k.filter(b[3], c, d, !0^f);
							d || e.push.apply(e, g);
							return !1
						}
					else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0]))
						return !0;
					return b
				},
				POS : function (a) {
					a.unshift(!0);
					return a
				}
			},
			filters : {
				enabled : function (a) {
					return a.disabled === !1 && a.type !== "hidden"
				},
				disabled : function (a) {
					return a.disabled === !0
				},
				checked : function (a) {
					return a.checked === !0
				},
				selected : function (a) {
					a.parentNode && a.parentNode.selectedIndex;
					return a.selected === !0
				},
				parent : function (a) {
					return !!a.firstChild
				},
				empty : function (a) {
					return !a.firstChild
				},
				has : function (a, b, c) {
					return !!k(c[3], a).length
				},
				header : function (a) {
					return /h\d/i.test(a.nodeName)
				},
				text : function (a) {
					var b = a.getAttribute("type"),
					c = a.type;
					return "text" === c && (b === c || b === null)
				},
				radio : function (a) {
					return "radio" === a.type
				},
				checkbox : function (a) {
					return "checkbox" === a.type
				},
				file : function (a) {
					return "file" === a.type
				},
				password : function (a) {
					return "password" === a.type
				},
				submit : function (a) {
					return "submit" === a.type
				},
				image : function (a) {
					return "image" === a.type
				},
				reset : function (a) {
					return "reset" === a.type
				},
				button : function (a) {
					return "button" === a.type || a.nodeName.toLowerCase() === "button"
				},
				input : function (a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				}
			},
			setFilters : {
				first : function (a, b) {
					return b === 0
				},
				last : function (a, b, c, d) {
					return b === d.length - 1
				},
				even : function (a, b) {
					return b % 2 === 0
				},
				odd : function (a, b) {
					return b % 2 === 1
				},
				lt : function (a, b, c) {
					return b < c[3] - 0
				},
				gt : function (a, b, c) {
					return b > c[3] - 0
				},
				nth : function (a, b, c) {
					return c[3] - 0 === b
				},
				eq : function (a, b, c) {
					return c[3] - 0 === b
				}
			},
			filter : {
				PSEUDO : function (a, b, c, d) {
					var e = b[1],
					f = l.filters[e];
					if (f)
						return f(a, c, b, d);
					if (e === "contains")
						return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
					if (e === "not") {
						var g = b[3];
						for (var h = 0, i = g.length; h < i; h++)
							if (g[h] === a)
								return !1;
						return !0
					}
					k.error(e)
				},
				CHILD : function (a, b) {
					var c = b[1],
					d = a;
					switch (c) {
					case "only":
					case "first":
						while (d = d.previousSibling)
							if (d.nodeType === 1)
								return !1;
						if (c === "first")
							return !0;
						d = a;
					case "last":
						while (d = d.nextSibling)
							if (d.nodeType === 1)
								return !1;
						return !0;
					case "nth":
						var e = b[2],
						f = b[3];
						if (e === 1 && f === 0)
							return !0;
						var g = b[0],
						h = a.parentNode;
						if (h && (h.sizcache !== g || !a.nodeIndex)) {
							var i = 0;
							for (d = h.firstChild; d; d = d.nextSibling)
								d.nodeType === 1 && (d.nodeIndex = ++i);
							h.sizcache = g
						}
						var j = a.nodeIndex - f;
						return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
					}
				},
				ID : function (a, b) {
					return a.nodeType === 1 && a.getAttribute("id") === b
				},
				TAG : function (a, b) {
					return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
				},
				CLASS : function (a, b) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
				},
				ATTR : function (a, b) {
					var c = b[1],
					d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
					e = d + "",
					f = b[2],
					g = b[4];
					return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
				},
				POS : function (a, b, c, d) {
					var e = b[2],
					f = l.setFilters[e];
					if (f)
						return f(a, c, b, d)
				}
			}
		},
		m = l.match.POS,
		n = function (a, b) {
			return "\\" + (b - 0 + 1)
		};
		for (var o in l.match)
			l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
		var p = function (a, b) {
			a = Array.prototype.slice.call(a, 0);
			if (b) {
				b.push.apply(b, a);
				return b
			}
			return a
		};
		try {
			Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
		} catch (q) {
			p = function (a, b) {
				var c = 0,
				d = b || [];
				if (f.call(a) === "[object Array]")
					Array.prototype.push.apply(d, a);
				else if (typeof a.length === "number")
					for (var e = a.length; c < e; c++)
						d.push(a[c]);
				else
					for (; a[c]; c++)
						d.push(a[c]);
				return d
			}
		}
		var r,
		s;
		c.documentElement.compareDocumentPosition ? r = function (a, b) {
			if (a === b) {
				g = !0;
				return 0
			}
			if (!a.compareDocumentPosition || !b.compareDocumentPosition)
				return a.compareDocumentPosition ? -1 : 1;
			return a.compareDocumentPosition(b) & 4 ? -1 : 1
		}
		 : (r = function (a, b) {
			var c,
			d,
			e = [],
			f = [],
			h = a.parentNode,
			i = b.parentNode,
			j = h;
			if (a === b) {
				g = !0;
				return 0
			}
			if (h === i)
				return s(a, b);
			if (!h)
				return -1;
			if (!i)
				return 1;
			while (j)
				e.unshift(j), j = j.parentNode;
			j = i;
			while (j)
				f.unshift(j), j = j.parentNode;
			c = e.length,
			d = f.length;
			for (var k = 0; k < c && k < d; k++)
				if (e[k] !== f[k])
					return s(e[k], f[k]);
			return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
		}, s = function (a, b, c) {
			if (a === b)
				return c;
			var d = a.nextSibling;
			while (d) {
				if (d === b)
					return -1;
				d = d.nextSibling
			}
			return 1
		}),
		k.getText = function (a) {
			var b = "",
			c;
			for (var d = 0; a[d]; d++)
				c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
			return b
		},
		function () {
			var a = c.createElement("div"),
			d = "script" + (new Date).getTime(),
			e = c.documentElement;
			a.innerHTML = "<a name='" + d + "'/>",
			e.insertBefore(a, e.firstChild),
			c.getElementById(d) && (l.find.ID = function (a, c, d) {
				if (typeof c.getElementById !== "undefined" && !d) {
					var e = c.getElementById(a[1]);
					return e ? e.id === a[1] || typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
				}
			}, l.filter.ID = function (a, b) {
				var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}),
			e.removeChild(a),
			e = a = null
		}
		(),
		function () {
			var a = c.createElement("div");
			a.appendChild(c.createComment("")),
			a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
				var c = b.getElementsByTagName(a[1]);
				if (a[1] === "*") {
					var d = [];
					for (var e = 0; c[e]; e++)
						c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			}),
			a.innerHTML = "<a href='#'></a>",
			a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
				return a.getAttribute("href", 2)
			}),
			a = null
		}
		(),
		c.querySelectorAll && function () {
			var a = k,
			b = c.createElement("div"),
			d = "__sizzle__";
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
				k = function (b, e, f, g) {
					e = e || c;
					if (!g && !k.isXML(e)) {
						var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (h && (e.nodeType === 1 || e.nodeType === 9)) {
							if (h[1])
								return p(e.getElementsByTagName(b), f);
							if (h[2] && l.find.CLASS && e.getElementsByClassName)
								return p(e.getElementsByClassName(h[2]), f)
						}
						if (e.nodeType === 9) {
							if (b === "body" && e.body)
								return p([e.body], f);
							if (h && h[3]) {
								var i = e.getElementById(h[3]);
								if (!i || !i.parentNode)
									return p([], f);
								if (i.id === h[3])
									return p([i], f)
							}
							try {
								return p(e.querySelectorAll(b), f)
							} catch (j) {}
							
						} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
							var m = e,
							n = e.getAttribute("id"),
							o = n || d,
							q = e.parentNode,
							r = /^\s*[+~]/.test(b);
							n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o),
							r && q && (e = e.parentNode);
							try {
								if (!r || q)
									return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
							} catch (s) {}
							
							finally {
								n || m.removeAttribute("id")
							}
						}
					}
					return a(b, e, f, g)
				};
				for (var e in a)
					k[e] = a[e];
				b = null
			}
		}
		(),
		function () {
			var a = c.documentElement,
			b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b) {
				var d = !b.call(c.createElement("div"), "div"),
				e = !1;
				try {
					b.call(c.documentElement, "[test!='']:sizzle")
				} catch (f) {
					e = !0
				}
				k.matchesSelector = function (a, c) {
					c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!k.isXML(a))
						try {
							if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
								var f = b.call(a, c);
								if (f || !d || a.document && a.document.nodeType !== 11)
									return f
							}
						} catch (g) {}
						
					return k(c, null, null, [a]).length > 0
				}
			}
		}
		(),
		function () {
			var a = c.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length === 1)
					return;
				l.order.splice(1, 0, "CLASS"),
				l.find.CLASS = function (a, b, c) {
					if (typeof b.getElementsByClassName !== "undefined" && !c)
						return b.getElementsByClassName(a[1])
				},
				a = null
			}
		}
		(),
		c.documentElement.contains ? k.contains = function (a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		}
		 : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		}
		 : k.contains = function () {
			return !1
		},
		k.isXML = function (a) {
			var b = (a ? a.ownerDocument || a : 0).documentElement;
			return b ? b.nodeName !== "HTML" : !1
		};
		var v = function (a, b) {
			var c,
			d = [],
			e = "",
			f = b.nodeType ? [b] : b;
			while (c = l.match.PSEUDO.exec(a))
				e += c[0], a = a.replace(l.match.PSEUDO, "");
			a = l.relative[a] ? a + "*" : a;
			for (var g = 0, h = f.length; g < h; g++)
				k(a, f[g], d);
			return k.filter(e, d)
		};
		d.find = k,
		d.expr = k.selectors,
		d.expr[":"] = d.expr.filters,
		d.unique = k.uniqueSort,
		d.text = k.getText,
		d.isXMLDoc = k.isXML,
		d.contains = k.contains
	}
	();
	var I = /Until$/,
	J = /^(?:parents|prevUntil|prevAll)/,
	K = /,/,
	L = /^.[^:#\[\.,]*$/,
	M = Array.prototype.slice,
	N = d.expr.match.POS,
	O = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	d.fn.extend({
		find : function (a) {
			var b = this.pushStack("", "find", a),
			c = 0;
			for (var e = 0, f = this.length; e < f; e++) {
				c = b.length,
				d.find(a, this[e], b);
				if (e > 0)
					for (var g = c; g < b.length; g++)
						for (var h = 0; h < c; h++)
							if (b[h] === b[g]) {
								b.splice(g--, 1);
								break
							}
			}
			return b
		},
		has : function (a) {
			var b = d(a);
			return this.filter(function () {
				for (var a = 0, c = b.length; a < c; a++)
					if (d.contains(this, b[a]))
						return !0
			})
		},
		not : function (a) {
			return this.pushStack(Q(this, a, !1), "not", a)
		},
		filter : function (a) {
			return this.pushStack(Q(this, a, !0), "filter", a)
		},
		is : function (a) {
			return !!a && d.filter(a, this).length > 0
		},
		closest : function (a, b) {
			var c = [],
			e,
			f,
			g = this[0];
			if (d.isArray(a)) {
				var h,
				i,
				j = {},
				k = 1;
				if (g && a.length) {
					for (e = 0, f = a.length; e < f; e++)
						i = a[e], j[i] || (j[i] = d.expr.match.POS.test(i) ? d(i, b || this.context) : i);
					while (g && g.ownerDocument && g !== b) {
						for (i in j)
							h = j[i], (h.jquery ? h.index(g) > -1 : d(g).is(h)) && c.push({
								selector : i,
								elem : g,
								level : k
							});
						g = g.parentNode,
						k++
					}
				}
				return c
			}
			var l = N.test(a) ? d(a, b || this.context) : null;
			for (e = 0, f = this.length; e < f; e++) {
				g = this[e];
				while (g) {
					if (l ? l.index(g) > -1 : d.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if (!g || !g.ownerDocument || g === b)
						break
				}
			}
			c = c.length > 1 ? d.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index : function (a) {
			if (!a || typeof a === "string")
				return d.inArray(this[0], a ? d(a) : this.parent().children());
			return d.inArray(a.jquery ? a[0] : a, this)
		},
		add : function (a, b) {
			var c = typeof a === "string" ? d(a, b) : d.makeArray(a),
			e = d.merge(this.get(), c);
			return this.pushStack(P(c[0]) || P(e[0]) ? e : d.unique(e))
		},
		andSelf : function () {
			return this.add(this.prevObject)
		}
	}),
	d.each({
		parent : function (a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents : function (a) {
			return d.dir(a, "parentNode")
		},
		parentsUntil : function (a, b, c) {
			return d.dir(a, "parentNode", c)
		},
		next : function (a) {
			return d.nth(a, 2, "nextSibling")
		},
		prev : function (a) {
			return d.nth(a, 2, "previousSibling")
		},
		nextAll : function (a) {
			return d.dir(a, "nextSibling")
		},
		prevAll : function (a) {
			return d.dir(a, "previousSibling")
		},
		nextUntil : function (a, b, c) {
			return d.dir(a, "nextSibling", c)
		},
		prevUntil : function (a, b, c) {
			return d.dir(a, "previousSibling", c)
		},
		siblings : function (a) {
			return d.sibling(a.parentNode.firstChild, a)
		},
		children : function (a) {
			return d.sibling(a.firstChild)
		},
		contents : function (a) {
			return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
		}
	}, function (a, b) {
		d.fn[a] = function (c, e) {
			var f = d.map(this, b, c),
			g = M.call(arguments);
			I.test(a) || (e = c),
			e && typeof e === "string" && (f = d.filter(e, f)),
			f = this.length > 1 && !O[a] ? d.unique(f) : f,
			(this.length > 1 || K.test(e)) && J.test(a) && (f = f.reverse());
			return this.pushStack(f, a, g.join(","))
		}
	}),
	d.extend({
		filter : function (a, b, c) {
			c && (a = ":not(" + a + ")");
			return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
		},
		dir : function (a, c, e) {
			var f = [],
			g = a[c];
			while (g && g.nodeType !== 9 && (e === b || g.nodeType !== 1 || !d(g).is(e)))
				g.nodeType === 1 && f.push(g), g = g[c];
			return f
		},
		nth : function (a, b, c, d) {
			b = b || 1;
			var e = 0;
			for (; a; a = a[c])
				if (a.nodeType === 1 && ++e === b)
					break;
			return a
		},
		sibling : function (a, b) {
			var c = [];
			for (; a; a = a.nextSibling)
				a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var R = / jQuery\d+="(?:\d+|null)"/g,
	S = /^\s+/,
	T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	U = /<([\w:]+)/,
	V = /<tbody/i,
	W = /<|&#?\w+;/,
	X = /<(?:script|object|embed|option|style)/i,
	Y = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Z = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		legend : [1, "<fieldset>", "</fieldset>"],
		thead : [1, "<table>", "</table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area : [1, "<map>", "</map>"],
		_default : [0, "", ""]
	};
	Z.optgroup = Z.option,
	Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead,
	Z.th = Z.td,
	d.support.htmlSerialize || (Z._default = [1, "div<div>", "</div>"]),
	d.fn.extend({
		text : function (a) {
			if (d.isFunction(a))
				return this.each(function (b) {
					var c = d(this);
					c.text(a.call(this, b, c.text()))
				});
			if (typeof a !== "object" && a !== b)
				return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
			return d.text(this)
		},
		wrapAll : function (a) {
			if (d.isFunction(a))
				return this.each(function (b) {
					d(this).wrapAll(a.call(this, b))
				});
			if (this[0]) {
				var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]),
				b.map(function () {
					var a = this;
					while (a.firstChild && a.firstChild.nodeType === 1)
						a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner : function (a) {
			if (d.isFunction(a))
				return this.each(function (b) {
					d(this).wrapInner(a.call(this, b))
				});
			return this.each(function () {
				var b = d(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap : function (a) {
			return this.each(function () {
				d(this).wrapAll(a)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
			}).end()
		},
		append : function () {
			return this.domManip(arguments, !0, function (a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend : function () {
			return this.domManip(arguments, !0, function (a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this)
				});
			if (arguments.length) {
				var a = d(arguments[0]);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, d(arguments[0]).toArray());
				return a
			}
		},
		remove : function (a, b) {
			for (var c = 0, e; (e = this[c]) != null; c++)
				if (!a || d.filter(a, [e]).length)
					!b && e.nodeType === 1 && (d.cleanData(e.getElementsByTagName("*")), d.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
			return this
		},
		empty : function () {
			for (var a = 0, b; (b = this[a]) != null; a++) {
				b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*"));
				while (b.firstChild)
					b.removeChild(b.firstChild)
			}
			return this
		},
		clone : function (a, b) {
			a = a == null ? !1 : a,
			b = b == null ? a : b;
			return this.map(function () {
				return d.clone(this, a, b)
			})
		},
		html : function (a) {
			if (a === b)
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(R, "") : null;
			if (typeof a !== "string" || X.test(a) || !d.support.leadingWhitespace && S.test(a) || Z[(U.exec(a) || ["", ""])[1].toLowerCase()])
				d.isFunction(a) ? this.each(function (b) {
					var c = d(this);
					c.html(a.call(this, b, c.html()))
				}) : this.empty().append(a);
			else {
				a = a.replace(T, "<$1></$2>");
				try {
					for (var c = 0, e = this.length; c < e; c++)
						this[c].nodeType === 1 && (d.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
				} catch (f) {
					this.empty().append(a)
				}
			}
			return this
		},
		replaceWith : function (a) {
			if (this[0] && this[0].parentNode) {
				if (d.isFunction(a))
					return this.each(function (b) {
						var c = d(this),
						e = c.html();
						c.replaceWith(a.call(this, b, e))
					});
				typeof a !== "string" && (a = d(a).detach());
				return this.each(function () {
					var b = this.nextSibling,
					c = this.parentNode;
					d(this).remove(),
					b ? d(b).before(a) : d(c).append(a)
				})
			}
			return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach : function (a) {
			return this.remove(a, !0)
		},
		domManip : function (a, c, e) {
			var f,
			g,
			h,
			i,
			j = a[0],
			k = [];
			if (!d.support.checkClone && arguments.length === 3 && typeof j === "string" && Y.test(j))
				return this.each(function () {
					d(this).domManip(a, c, e, !0)
				});
			if (d.isFunction(j))
				return this.each(function (f) {
					var g = d(this);
					a[0] = j.call(this, f, c ? g.html() : b),
					g.domManip(a, c, e)
				});
			if (this[0]) {
				i = j && j.parentNode,
				d.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? f = {
					fragment : i
				}
				 : f = d.buildFragment(a, this, k),
				h = f.fragment,
				h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
				if (g) {
					c = c && d.nodeName(g, "tr");
					for (var l = 0, m = this.length, n = m - 1; l < m; l++)
						e.call(c ? $(this[l], g) : this[l], f.cacheable || m > 1 && l < n ? d.clone(h, !0, !0) : h)
				}
				k.length && d.each(k, bc)
			}
			return this
		}
	}),
	d.buildFragment = function (a, b, e) {
		var f,
		g,
		h,
		i = b && b[0] ? b[0].ownerDocument || b[0] : c;
		a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !X.test(a[0]) && (d.support.checkClone || !Y.test(a[0])) && (g = !0, h = d.fragments[a[0]], h && (h !== 1 && (f = h))),
		f || (f = i.createDocumentFragment(), d.clean(a, i, f, e)),
		g && (d.fragments[a[0]] = h ? f : 1);
		return {
			fragment : f,
			cacheable : g
		}
	},
	d.fragments = {},
	d.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (a, b) {
		d.fn[a] = function (c) {
			var e = [],
			f = d(c),
			g = this.length === 1 && this[0].parentNode;
			if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) {
				f[b](this[0]);
				return this
			}
			for (var h = 0, i = f.length; h < i; h++) {
				var j = (h > 0 ? this.clone(!0) : this).get();
				d(f[h])[b](j),
				e = e.concat(j)
			}
			return this.pushStack(e, a, f.selector)
		}
	}),
	d.extend({
		clone : function (a, b, c) {
			var e = a.cloneNode(!0),
			f,
			g,
			h;
			if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
				ba(a, e),
				f = bb(a),
				g = bb(e);
				for (h = 0; f[h]; ++h)
					ba(f[h], g[h])
			}
			if (b) {
				_(a, e);
				if (c) {
					f = bb(a),
					g = bb(e);
					for (h = 0; f[h]; ++h)
						_(f[h], g[h])
				}
			}
			return e
		},
		clean : function (a, b, e, f) {
			b = b || c,
			typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
			var g = [];
			for (var h = 0, i; (i = a[h]) != null; h++) {
				typeof i === "number" && (i += "");
				if (!i)
					continue;
				if (typeof i !== "string" || W.test(i)) {
					if (typeof i === "string") {
						i = i.replace(T, "<$1></$2>");
						var j = (U.exec(i) || ["", ""])[1].toLowerCase(),
						k = Z[j] || Z._default,
						l = k[0],
						m = b.createElement("div");
						m.innerHTML = k[1] + i + k[2];
						while (l--)
							m = m.lastChild;
						if (!d.support.tbody) {
							var n = V.test(i),
							o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>" && !n ? m.childNodes : [];
							for (var p = o.length - 1; p >= 0; --p)
								d.nodeName(o[p], "tbody") && !o[p].childNodes.length && o[p].parentNode.removeChild(o[p])
						}
						!d.support.leadingWhitespace && S.test(i) && m.insertBefore(b.createTextNode(S.exec(i)[0]), m.firstChild),
						i = m.childNodes
					}
				} else
					i = b.createTextNode(i);
				i.nodeType ? g.push(i) : g = d.merge(g, i)
			}
			if (e)
				for (h = 0; g[h]; h++)
					!f || !d.nodeName(g[h], "script") || g[h].type && g[h].type.toLowerCase() !== "text/javascript" ? (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(d.makeArray(g[h].getElementsByTagName("script")))), e.appendChild(g[h])) : f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]);
			return g
		},
		cleanData : function (a) {
			var b,
			c,
			e = d.cache,
			f = d.expando,
			g = d.event.special,
			h = d.support.deleteExpando;
			for (var i = 0, j; (j = a[i]) != null; i++) {
				if (j.nodeName && d.noData[j.nodeName.toLowerCase()])
					continue;
				c = j[d.expando];
				if (c) {
					b = e[c] && e[c][f];
					if (b && b.events) {
						for (var k in b.events)
							g[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
						b.handle && (b.handle.elem = null)
					}
					h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando),
					delete e[c]
				}
			}
		}
	});
	var bd = /alpha\([^)]*\)/i,
	be = /opacity=([^)]*)/,
	bf = /-([a-z])/ig,
	bg = /([A-Z]|^ms)/g,
	bh = /^-?\d+(?:px)?$/i,
	bi = /^-?\d/,
	bj = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	bk = ["Left", "Right"],
	bl = ["Top", "Bottom"],
	bm,
	bn,
	bo,
	bp = function (a, b) {
		return b.toUpperCase()
	};
	d.fn.css = function (a, c) {
		if (arguments.length === 2 && c === b)
			return this;
		return d.access(this, a, c, !0, function (a, c, e) {
			return e !== b ? d.style(a, c, e) : d.css(a, c)
		})
	},
	d.extend({
		cssHooks : {
			opacity : {
				get : function (a, b) {
					if (b) {
						var c = bm(a, "opacity", "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber : {
			zIndex : !0,
			fontWeight : !0,
			opacity : !0,
			zoom : !0,
			lineHeight : !0
		},
		cssProps : {
			"float" : d.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style : function (a, c, e, f) {
			if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) {
				var g,
				h = d.camelCase(c),
				i = a.style,
				j = d.cssHooks[h];
				c = d.cssProps[h] || h;
				if (e === b) {
					if (j && "get" in j && (g = j.get(a, !1, f)) !== b)
						return g;
					return i[c]
				}
				if (typeof e === "number" && isNaN(e) || e == null)
					return;
				typeof e === "number" && !d.cssNumber[h] && (e += "px");
				if (!j || !("set" in j) || (e = j.set(a, e)) !== b)
					try {
						i[c] = e
					} catch (k) {}
					
			}
		},
		css : function (a, c, e) {
			var f,
			g = d.camelCase(c),
			h = d.cssHooks[g];
			c = d.cssProps[g] || g;
			if (h && "get" in h && (f = h.get(a, !0, e)) !== b)
				return f;
			if (bm)
				return bm(a, c, g)
		},
		swap : function (a, b, c) {
			var d = {};
			for (var e in b)
				d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for (e in b)
				a.style[e] = d[e]
		},
		camelCase : function (a) {
			return a.replace(bf, bp)
		}
	}),
	d.curCSS = d.css,
	d.each(["height", "width"], function (a, b) {
		d.cssHooks[b] = {
			get : function (a, c, e) {
				var f;
				if (c) {
					a.offsetWidth !== 0 ? f = bq(a, b, e) : d.swap(a, bj, function () {
							f = bq(a, b, e)
						});
					if (f <= 0) {
						f = bm(a, b, b),
						f === "0px" && bo && (f = bo(a, b, b));
						if (f != null)
							return f === "" || f === "auto" ? "0px" : f
					}
					if (f < 0 || f == null) {
						f = a.style[b];
						return f === "" || f === "auto" ? "0px" : f
					}
					return typeof f === "string" ? f : f + "px"
				}
			},
			set : function (a, b) {
				if (!bh.test(b))
					return b;
				b = parseFloat(b);
				if (b >= 0)
					return b + "px"
			}
		}
	}),
	d.support.opacity || (d.cssHooks.opacity = {
			get : function (a, b) {
				return be.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
			},
			set : function (a, b) {
				var c = a.style;
				c.zoom = 1;
				var e = d.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
				f = c.filter || "";
				c.filter = bd.test(f) ? f.replace(bd, e) : c.filter + " " + e
			}
		}),
	d(function () {
		d.support.reliableMarginRight || (d.cssHooks.marginRight = {
				get : function (a, b) {
					var c;
					d.swap(a, {
						display : "inline-block"
					}, function () {
						b ? c = bm(a, "margin-right", "marginRight") : c = a.style.marginRight
					});
					return c
				}
			})
	}),
	c.defaultView && c.defaultView.getComputedStyle && (bn = function (a, c, e) {
		var f,
		g,
		h;
		e = e.replace(bg, "-$1").toLowerCase();
		if (!(g = a.ownerDocument.defaultView))
			return b;
		if (h = g.getComputedStyle(a, null))
			f = h.getPropertyValue(e), f === "" && !d.contains(a.ownerDocument.documentElement, a) && (f = d.style(a, e));
		return f
	}),
	c.documentElement.currentStyle && (bo = function (a, b) {
		var c,
		d = a.currentStyle && a.currentStyle[b],
		e = a.runtimeStyle && a.runtimeStyle[b],
		f = a.style;
		!bh.test(d) && bi.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
		return d === "" ? "auto" : d
	}),
	bm = bn || bo,
	d.expr && d.expr.filters && (d.expr.filters.hidden = function (a) {
		var b = a.offsetWidth,
		c = a.offsetHeight;
		return b === 0 && c === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
	}, d.expr.filters.visible = function (a) {
		return !d.expr.filters.hidden(a)
	});
	var br = /%20/g,
	bs = /\[\]$/,
	bt = /\r?\n/g,
	bu = /#.*$/,
	bv = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	bw = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	bx = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
	by = /^(?:GET|HEAD)$/,
	bz = /^\/\//,
	bA = /\?/,
	bB = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	bC = /^(?:select|textarea)/i,
	bD = /\s+/,
	bE = /([?&])_=[^&]*/,
	bF = /(^|\-)([a-z])/g,
	bG = function (a, b, c) {
		return b + c.toUpperCase()
	},
	bH = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
	bI = d.fn.load,
	bJ = {},
	bK = {},
	bL,
	bM;
	try {
		bL = c.location.href
	} catch (bN) {
		bL = c.createElement("a"),
		bL.href = "",
		bL = bL.href
	}
	bM = bH.exec(bL.toLowerCase()) || [],
	d.fn.extend({
		load : function (a, c, e) {
			if (typeof a !== "string" && bI)
				return bI.apply(this, arguments);
			if (!this.length)
				return this;
			var f = a.indexOf(" ");
			if (f >= 0) {
				var g = a.slice(f, a.length);
				a = a.slice(0, f)
			}
			var h = "GET";
			c && (d.isFunction(c) ? (e = c, c = b) : typeof c === "object" && (c = d.param(c, d.ajaxSettings.traditional), h = "POST"));
			var i = this;
			d.ajax({
				url : a,
				type : h,
				dataType : "html",
				data : c,
				complete : function (a, b, c) {
					c = a.responseText,
					a.isResolved() && (a.done(function (a) {
							c = a
						}), i.html(g ? d("<div>").append(c.replace(bB, "")).find(g) : c)),
					e && i.each(e, [c, b, a])
				}
			});
			return this
		},
		serialize : function () {
			return d.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				return this.elements ? d.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || bC.test(this.nodeName) || bw.test(this.type))
			}).map(function (a, b) {
				var c = d(this).val();
				return c == null ? null : d.isArray(c) ? d.map(c, function (a, c) {
					return {
						name : b.name,
						value : a.replace(bt, "\r\n")
					}
				}) : {
					name : b.name,
					value : c.replace(bt, "\r\n")
				}
			}).get()
		}
	}),
	d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
		d.fn[b] = function (a) {
			return this.bind(b, a)
		}
	}),
	d.each(["get", "post"], function (a, c) {
		d[c] = function (a, e, f, g) {
			d.isFunction(e) && (g = g || f, f = e, e = b);
			return d.ajax({
				type : c,
				url : a,
				data : e,
				success : f,
				dataType : g
			})
		}
	}),
	d.extend({
		getScript : function (a, c) {
			return d.get(a, b, c, "script")
		},
		getJSON : function (a, b, c) {
			return d.get(a, b, c, "json")
		},
		ajaxSetup : function (a, b) {
			b ? d.extend(!0, a, d.ajaxSettings, b) : (b = a, a = d.extend(!0, d.ajaxSettings, b));
			for (var c in {
				context : 1,
				url : 1
			})
				c in b ? a[c] = b[c] : c in d.ajaxSettings && (a[c] = d.ajaxSettings[c]);
			return a
		},
		ajaxSettings : {
			url : bL,
			isLocal : bx.test(bM[1]),
			global : !0,
			type : "GET",
			contentType : "application/x-www-form-urlencoded",
			processData : !0,
			async : !0,
			accepts : {
				xml : "application/xml, text/xml",
				html : "text/html",
				text : "text/plain",
				json : "application/json, text/javascript",
				"*" : "*/*"
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText"
			},
			converters : {
				"* text" : a.String,
				"text html" : !0,
				"text json" : d.parseJSON,
				"text xml" : d.parseXML
			}
		},
		ajaxPrefilter : bO(bJ),
		ajaxTransport : bO(bK),
		ajax : function (a, c) {
			function v(a, c, l, n) {
				if (r !== 2) {
					r = 2,
					p && clearTimeout(p),
					o = b,
					m = n || "",
					u.readyState = a ? 4 : 0;
					var q,
					t,
					v,
					w = l ? bR(e, u, l) : b,
					x,
					y;
					if (a >= 200 && a < 300 || a === 304) {
						if (e.ifModified) {
							if (x = u.getResponseHeader("Last-Modified"))
								d.lastModified[k] = x;
							if (y = u.getResponseHeader("Etag"))
								d.etag[k] = y
						}
						if (a === 304)
							c = "notmodified", q = !0;
						else
							try {
								t = bS(e, w),
								c = "success",
								q = !0
							} catch (z) {
								c = "parsererror",
								v = z
							}
					} else {
						v = c;
						if (!c || a)
							c = "error", a < 0 && (a = 0)
					}
					u.status = a,
					u.statusText = c,
					q ? h.resolveWith(f, [t, c, u]) : h.rejectWith(f, [u, c, v]),
					u.statusCode(j),
					j = b,
					s && g.trigger("ajax" + (q ? "Success" : "Error"), [u, e, q ? t : v]),
					i.resolveWith(f, [u, c]),
					s && (g.trigger("ajaxComplete", [u, e]), --d.active || d.event.trigger("ajaxStop"))
				}
			}
			typeof a === "object" && (c = a, a = b),
			c = c || {};
			var e = d.ajaxSetup({}, c),
			f = e.context || e,
			g = f !== e && (f.nodeType || f instanceof d) ? d(f) : d.event,
			h = d.Deferred(),
			i = d._Deferred(),
			j = e.statusCode || {},
			k,
			l = {},
			m,
			n,
			o,
			p,
			q,
			r = 0,
			s,
			t,
			u = {
				readyState : 0,
				setRequestHeader : function (a, b) {
					r || (l[a.toLowerCase().replace(bF, bG)] = b);
					return this
				},
				getAllResponseHeaders : function () {
					return r === 2 ? m : null
				},
				getResponseHeader : function (a) {
					var c;
					if (r === 2) {
						if (!n) {
							n = {};
							while (c = bv.exec(m))
								n[c[1].toLowerCase()] = c[2]
						}
						c = n[a.toLowerCase()]
					}
					return c === b ? null : c
				},
				overrideMimeType : function (a) {
					r || (e.mimeType = a);
					return this
				},
				abort : function (a) {
					a = a || "abort",
					o && o.abort(a),
					v(0, a);
					return this
				}
			};
			h.promise(u),
			u.success = u.done,
			u.error = u.fail,
			u.complete = i.done,
			u.statusCode = function (a) {
				if (a) {
					var b;
					if (r < 2)
						for (b in a)
							j[b] = [j[b], a[b]];
					else
						b = a[u.status], u.then(b, b)
				}
				return this
			},
			e.url = ((a || e.url) + "").replace(bu, "").replace(bz, bM[1] + "//"),
			e.dataTypes = d.trim(e.dataType || "*").toLowerCase().split(bD),
			e.crossDomain == null && (q = bH.exec(e.url.toLowerCase()), e.crossDomain = q && (q[1] != bM[1] || q[2] != bM[2] || (q[3] || (q[1] === "http:" ? 80 : 443)) != (bM[3] || (bM[1] === "http:" ? 80 : 443)))),
			e.data && e.processData && typeof e.data !== "string" && (e.data = d.param(e.data, e.traditional)),
			bP(bJ, e, c, u);
			if (r === 2)
				return !1;
			s = e.global,
			e.type = e.type.toUpperCase(),
			e.hasContent = !by.test(e.type),
			s && d.active++ === 0 && d.event.trigger("ajaxStart");
			if (!e.hasContent) {
				e.data && (e.url += (bA.test(e.url) ? "&" : "?") + e.data),
				k = e.url;
				if (e.cache === !1) {
					var w = d.now(),
					x = e.url.replace(bE, "$1_=" + w);
					e.url = x + (x === e.url ? (bA.test(e.url) ? "&" : "?") + "_=" + w : "")
				}
			}
			if (e.data && e.hasContent && e.contentType !== !1 || c.contentType)
				l["Content-Type"] = e.contentType;
			e.ifModified && (k = k || e.url, d.lastModified[k] && (l["If-Modified-Since"] = d.lastModified[k]), d.etag[k] && (l["If-None-Match"] = d.etag[k])),
			l.Accept = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : e.accepts["*"];
			for (t in e.headers)
				u.setRequestHeader(t, e.headers[t]);
			if (e.beforeSend && (e.beforeSend.call(f, u, e) === !1 || r === 2)) {
				u.abort();
				return !1
			}
			for (t in {
				success : 1,
				error : 1,
				complete : 1
			})
				u[t](e[t]);
			o = bP(bK, e, c, u);
			if (o) {
				u.readyState = 1,
				s && g.trigger("ajaxSend", [u, e]),
				e.async && e.timeout > 0 && (p = setTimeout(function () {
							u.abort("timeout")
						}, e.timeout));
				try {
					r = 1,
					o.send(l, v)
				} catch (y) {
					status < 2 ? v(-1, y) : d.error(y)
				}
			} else
				v(-1, "No Transport");
			return u
		},
		param : function (a, c) {
			var e = [],
			f = function (a, b) {
				b = d.isFunction(b) ? b() : b,
				e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
			c === b && (c = d.ajaxSettings.traditional);
			if (d.isArray(a) || a.jquery && !d.isPlainObject(a))
				d.each(a, function () {
					f(this.name, this.value)
				});
			else
				for (var g in a)
					bQ(g, a[g], c, f);
			return e.join("&").replace(br, "+")
		}
	}),
	d.extend({
		active : 0,
		lastModified : {},
		etag : {}
		
	});
	var bT = d.now(),
	bU = /(\=)\?(&|$)|\?\?/i;
	d.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			return d.expando + "_" + bT++
		}
	}),
	d.ajaxPrefilter("json jsonp", function (b, c, e) {
		var f = typeof b.data === "string";
		if (b.dataTypes[0] === "jsonp" || c.jsonpCallback || c.jsonp != null || b.jsonp !== !1 && (bU.test(b.url) || f && bU.test(b.data))) {
			var g,
			h = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
			i = a[h],
			j = b.url,
			k = b.data,
			l = "$1" + h + "$2",
			m = function () {
				a[h] = i,
				g && d.isFunction(i) && a[h](g[0])
			};
			b.jsonp !== !1 && (j = j.replace(bU, l), b.url === j && (f && (k = k.replace(bU, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
			b.url = j,
			b.data = k,
			a[h] = function (a) {
				g = [a]
			},
			e.then(m, m),
			b.converters["script json"] = function () {
				g || d.error(h + " was not called");
				return g[0]
			},
			b.dataTypes[0] = "json";
			return "script"
		}
	}),
	d.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /javascript|ecmascript/
		},
		converters : {
			"text script" : function (a) {
				d.globalEval(a);
				return a
			}
		}
	}),
	d.ajaxPrefilter("script", function (a) {
		a.cache === b && (a.cache = !1),
		a.crossDomain && (a.type = "GET", a.global = !1)
	}),
	d.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var d,
			e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
			return {
				send : function (f, g) {
					d = c.createElement("script"),
					d.async = "async",
					a.scriptCharset && (d.charset = a.scriptCharset),
					d.src = a.url,
					d.onload = d.onreadystatechange = function (a, c) {
						if (!d.readyState || /loaded|complete/.test(d.readyState))
							d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
					},
					e.insertBefore(d, e.firstChild)
				},
				abort : function () {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var bV = d.now(),
	bW,
	bX;
	d.ajaxSettings.xhr = a.ActiveXObject ? function () {
		return !this.isLocal && bZ() || b$()
	}
	 : bZ,
	bX = d.ajaxSettings.xhr(),
	d.support.ajax = !!bX,
	d.support.cors = bX && "withCredentials" in bX,
	bX = b,
	d.support.ajax && d.ajaxTransport(function (a) {
		if (!a.crossDomain || d.support.cors) {
			var c;
			return {
				send : function (e, f) {
					var g = a.xhr(),
					h,
					i;
					a.username ? g.open(a.type, a.url, a.async, a.username, a.password) : g.open(a.type, a.url, a.async);
					if (a.xhrFields)
						for (i in a.xhrFields)
							g[i] = a.xhrFields[i];
					a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType),
					!a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (i in e)
							g.setRequestHeader(i, e[i])
					} catch (j) {}
					
					g.send(a.hasContent && a.data || null),
					c = function (e, i) {
						var j,
						k,
						l,
						m,
						n;
						try {
							if (c && (i || g.readyState === 4)) {
								c = b,
								h && (g.onreadystatechange = d.noop, delete bW[h]);
								if (i)
									g.readyState !== 4 && g.abort();
								else {
									j = g.status,
									l = g.getAllResponseHeaders(),
									m = {},
									n = g.responseXML,
									n && n.documentElement && (m.xml = n),
									m.text = g.responseText;
									try {
										k = g.statusText
									} catch (o) {
										k = ""
									}
									j || !a.isLocal || a.crossDomain ? j === 1223 && (j = 204) : j = m.text ? 200 : 404
								}
							}
						} catch (p) {
							i || f(-1, p)
						}
						m && f(j, k, m, l)
					},
					a.async && g.readyState !== 4 ? (bW || (bW = {}, bY()), h = bV++, g.onreadystatechange = bW[h] = c) : c()
				},
				abort : function () {
					c && c(0, 1)
				}
			}
		}
	});
	var b_ = {},
	ca = /^(?:toggle|show|hide)$/,
	cb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	cc,
	cd = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
	d.fn.extend({
		show : function (a, b, c) {
			var e,
			f;
			if (a || a === 0)
				return this.animate(ce("show", 3), a, b, c);
			for (var g = 0, h = this.length; g < h; g++)
				e = this[g], f = e.style.display, !d._data(e, "olddisplay") && f === "none" && (f = e.style.display = ""), f === "" && d.css(e, "display") === "none" && d._data(e, "olddisplay", cf(e.nodeName));
			for (g = 0; g < h; g++) {
				e = this[g],
				f = e.style.display;
				if (f === "" || f === "none")
					e.style.display = d._data(e, "olddisplay") || ""
			}
			return this
		},
		hide : function (a, b, c) {
			if (a || a === 0)
				return this.animate(ce("hide", 3), a, b, c);
			for (var e = 0, f = this.length; e < f; e++) {
				var g = d.css(this[e], "display");
				g !== "none" && !d._data(this[e], "olddisplay") && d._data(this[e], "olddisplay", g)
			}
			for (e = 0; e < f; e++)
				this[e].style.display = "none";
			return this
		},
		_toggle : d.fn.toggle,
		toggle : function (a, b, c) {
			var e = typeof a === "boolean";
			d.isFunction(a) && d.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function () {
				var b = e ? a : d(this).is(":hidden");
				d(this)[b ? "show" : "hide"]()
			}) : this.animate(ce("toggle", 3), a, b, c);
			return this
		},
		fadeTo : function (a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity : b
			}, a, c, d)
		},
		animate : function (a, b, c, e) {
			var f = d.speed(b, c, e);
			if (d.isEmptyObject(a))
				return this.each(f.complete);
			return this[f.queue === !1 ? "each" : "queue"](function () {
				var b = d.extend({}, f),
				c,
				e = this.nodeType === 1,
				g = e && d(this).is(":hidden"),
				h = this;
				for (c in a) {
					var i = d.camelCase(c);
					c !== i && (a[i] = a[c], delete a[c], c = i);
					if (a[c] === "hide" && g || a[c] === "show" && !g)
						return b.complete.call(this);
					if (e && (c === "height" || c === "width")) {
						b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
						if (d.css(this, "display") === "inline" && d.css(this, "float") === "none")
							if (d.support.inlineBlockNeedsLayout) {
								var j = cf(this.nodeName);
								j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
							} else
								this.style.display = "inline-block"
					}
					d.isArray(a[c]) && ((b.specialEasing = b.specialEasing || {})[c] = a[c][1], a[c] = a[c][0])
				}
				b.overflow != null && (this.style.overflow = "hidden"),
				b.curAnim = d.extend({}, a),
				d.each(a, function (c, e) {
					var f = new d.fx(h, b, c);
					if (ca.test(e))
						f[e === "toggle" ? g ? "show" : "hide" : e](a);
					else {
						var i = cb.exec(e),
						j = f.cur();
						if (i) {
							var k = parseFloat(i[2]),
							l = i[3] || (d.cssNumber[c] ? "" : "px");
							l !== "px" && (d.style(h, c, (k || 1) + l), j = (k || 1) / f.cur() * j, d.style(h, c, j + l)),
							i[1] && (k = (i[1] === "-=" ? -1 : 1) * k + j),
							f.custom(j, k, l)
						} else
							f.custom(j, e, "")
					}
				});
				return !0
			})
		},
		stop : function (a, b) {
			var c = d.timers;
			a && this.queue([]),
			this.each(function () {
				for (var a = c.length - 1; a >= 0; a--)
					c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
			}),
			b || this.dequeue();
			return this
		}
	}),
	d.each({
		slideDown : ce("show", 1),
		slideUp : ce("hide", 1),
		slideToggle : ce("toggle", 1),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (a, b) {
		d.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}),
	d.extend({
		speed : function (a, b, c) {
			var e = a && typeof a === "object" ? d.extend({}, a) : {
				complete : c || !c && b || d.isFunction(a) && a,
				duration : a,
				easing : c && b || b && !d.isFunction(b) && b
			};
			e.duration = d.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default,
			e.old = e.complete,
			e.complete = function () {
				e.queue !== !1 && d(this).dequeue(),
				d.isFunction(e.old) && e.old.call(this)
			};
			return e
		},
		easing : {
			linear : function (a, b, c, d) {
				return c + d * a
			},
			swing : function (a, b, c, d) {
				return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers : [],
		fx : function (a, b, c) {
			this.options = b,
			this.elem = a,
			this.prop = c,
			b.orig || (b.orig = {})
		}
	}),
	d.fx.prototype = {
		update : function () {
			this.options.step && this.options.step.call(this.elem, this.now, this),
			(d.fx.step[this.prop] || d.fx.step._default)(this)
		},
		cur : function () {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
				return this.elem[this.prop];
			var a,
			b = d.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
		},
		custom : function (a, b, c) {
			function g(a) {
				return e.step(a)
			}
			var e = this,
			f = d.fx;
			this.startTime = d.now(),
			this.start = a,
			this.end = b,
			this.unit = c || this.unit || (d.cssNumber[this.prop] ? "" : "px"),
			this.now = this.start,
			this.pos = this.state = 0,
			g.elem = this.elem,
			g() && d.timers.push(g) && !cc && (cc = setInterval(f.tick, f.interval))
		},
		show : function () {
			this.options.orig[this.prop] = d.style(this.elem, this.prop),
			this.options.show = !0,
			this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
			d(this.elem).show()
		},
		hide : function () {
			this.options.orig[this.prop] = d.style(this.elem, this.prop),
			this.options.hide = !0,
			this.custom(this.cur(), 0)
		},
		step : function (a) {
			var b = d.now(),
			c = !0;
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end,
				this.pos = this.state = 1,
				this.update(),
				this.options.curAnim[this.prop] = !0;
				for (var e in this.options.curAnim)
					this.options.curAnim[e] !== !0 && (c = !1);
				if (c) {
					if (this.options.overflow != null && !d.support.shrinkWrapBlocks) {
						var f = this.elem,
						g = this.options;
						d.each(["", "X", "Y"], function (a, b) {
							f.style["overflow" + b] = g.overflow[a]
						})
					}
					this.options.hide && d(this.elem).hide();
					if (this.options.hide || this.options.show)
						for (var h in this.options.curAnim)
							d.style(this.elem, h, this.options.orig[h]);
					this.options.complete.call(this.elem)
				}
				return !1
			}
			var i = b - this.startTime;
			this.state = i / this.options.duration;
			var j = this.options.specialEasing && this.options.specialEasing[this.prop],
			k = this.options.easing || (d.easing.swing ? "swing" : "linear");
			this.pos = d.easing[j || k](this.state, i, 0, 1, this.options.duration),
			this.now = this.start + (this.end - this.start) * this.pos,
			this.update();
			return !0
		}
	},
	d.extend(d.fx, {
		tick : function () {
			var a = d.timers;
			for (var b = 0; b < a.length; b++)
				a[b]() || a.splice(b--, 1);
			a.length || d.fx.stop()
		},
		interval : 13,
		stop : function () {
			clearInterval(cc),
			cc = null
		},
		speeds : {
			slow : 600,
			fast : 200,
			_default : 400
		},
		step : {
			opacity : function (a) {
				d.style(a.elem, "opacity", a.now)
			},
			_default : function (a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
			}
		}
	}),
	d.expr && d.expr.filters && (d.expr.filters.animated = function (a) {
		return d.grep(d.timers, function (b) {
			return a === b.elem
		}).length
	});
	var cg = /^t(?:able|d|h)$/i,
	ch = /^(?:body|html)$/i;
	"getBoundingClientRect" in c.documentElement ? d.fn.offset = function (a) {
		var b = this[0],
		c;
		if (a)
			return this.each(function (b) {
				d.offset.setOffset(this, a, b)
			});
		if (!b || !b.ownerDocument)
			return null;
		if (b === b.ownerDocument.body)
			return d.offset.bodyOffset(b);
		try {
			c = b.getBoundingClientRect()
		} catch (e) {}
		
		var f = b.ownerDocument,
		g = f.documentElement;
		if (!c || !d.contains(g, b))
			return c ? {
				top : c.top,
				left : c.left
			}
		 : {
			top : 0,
			left : 0
		};
		var h = f.body,
		i = ci(f),
		j = g.clientTop || h.clientTop || 0,
		k = g.clientLeft || h.clientLeft || 0,
		l = i.pageYOffset || d.support.boxModel && g.scrollTop || h.scrollTop,
		m = i.pageXOffset || d.support.boxModel && g.scrollLeft || h.scrollLeft,
		n = c.top + l - j,
		o = c.left + m - k;
		return {
			top : n,
			left : o
		}
	}
	 : d.fn.offset = function (a) {
		var b = this[0];
		if (a)
			return this.each(function (b) {
				d.offset.setOffset(this, a, b)
			});
		if (!b || !b.ownerDocument)
			return null;
		if (b === b.ownerDocument.body)
			return d.offset.bodyOffset(b);
		d.offset.initialize();
		var c,
		e = b.offsetParent,
		f = b,
		g = b.ownerDocument,
		h = g.documentElement,
		i = g.body,
		j = g.defaultView,
		k = j ? j.getComputedStyle(b, null) : b.currentStyle,
		l = b.offsetTop,
		m = b.offsetLeft;
		while ((b = b.parentNode) && b !== i && b !== h) {
			if (d.offset.supportsFixedPosition && k.position === "fixed")
				break;
			c = j ? j.getComputedStyle(b, null) : b.currentStyle,
			l -= b.scrollTop,
			m -= b.scrollLeft,
			b === e && (l += b.offsetTop, m += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !cg.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), f = e, e = b.offsetParent),
			d.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0),
			k = c
		}
		if (k.position === "relative" || k.position === "static")
			l += i.offsetTop, m += i.offsetLeft;
		d.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
		return {
			top : l,
			left : m
		}
	},
	d.offset = {
		initialize : function () {
			var a = c.body,
			b = c.createElement("div"),
			e,
			f,
			g,
			h,
			i = parseFloat(d.css(a, "marginTop")) || 0,
			j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			d.extend(b.style, {
				position : "absolute",
				top : 0,
				left : 0,
				margin : 0,
				border : 0,
				width : "1px",
				height : "1px",
				visibility : "hidden"
			}),
			b.innerHTML = j,
			a.insertBefore(b, a.firstChild),
			e = b.firstChild,
			f = e.firstChild,
			h = e.nextSibling.firstChild.firstChild,
			this.doesNotAddBorder = f.offsetTop !== 5,
			this.doesAddBorderForTableAndCells = h.offsetTop === 5,
			f.style.position = "fixed",
			f.style.top = "20px",
			this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15,
			f.style.position = f.style.top = "",
			e.style.overflow = "hidden",
			e.style.position = "relative",
			this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5,
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i,
			a.removeChild(b),
			d.offset.initialize = d.noop
		},
		bodyOffset : function (a) {
			var b = a.offsetTop,
			c = a.offsetLeft;
			d.offset.initialize(),
			d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(a, "marginTop")) || 0, c += parseFloat(d.css(a, "marginLeft")) || 0);
			return {
				top : b,
				left : c
			}
		},
		setOffset : function (a, b, c) {
			var e = d.css(a, "position");
			e === "static" && (a.style.position = "relative");
			var f = d(a),
			g = f.offset(),
			h = d.css(a, "top"),
			i = d.css(a, "left"),
			j = (e === "absolute" || e === "fixed") && d.inArray("auto", [h, i]) > -1,
			k = {},
			l = {},
			m,
			n;
			j && (l = f.position()),
			m = j ? l.top : parseInt(h, 10) || 0,
			n = j ? l.left : parseInt(i, 10) || 0,
			d.isFunction(b) && (b = b.call(a, c, g)),
			b.top != null && (k.top = b.top - g.top + m),
			b.left != null && (k.left = b.left - g.left + n),
			"using" in b ? b.using.call(a, k) : f.css(k)
		}
	},
	d.fn.extend({
		position : function () {
			if (!this[0])
				return null;
			var a = this[0],
			b = this.offsetParent(),
			c = this.offset(),
			e = ch.test(b[0].nodeName) ? {
				top : 0,
				left : 0
			}
			 : b.offset();
			c.top -= parseFloat(d.css(a, "marginTop")) || 0,
			c.left -= parseFloat(d.css(a, "marginLeft")) || 0,
			e.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0,
			e.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0;
			return {
				top : c.top - e.top,
				left : c.left - e.left
			}
		},
		offsetParent : function () {
			return this.map(function () {
				var a = this.offsetParent || c.body;
				while (a && (!ch.test(a.nodeName) && d.css(a, "position") === "static"))
					a = a.offsetParent;
				return a
			})
		}
	}),
	d.each(["Left", "Top"], function (a, c) {
		var e = "scroll" + c;
		d.fn[e] = function (c) {
			var f = this[0],
			g;
			if (!f)
				return null;
			if (c !== b)
				return this.each(function () {
					g = ci(this),
					g ? g.scrollTo(a ? d(g).scrollLeft() : c, a ? c : d(g).scrollTop()) : this[e] = c
				});
			g = ci(f);
			return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : d.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]
		}
	}),
	d.each(["Height", "Width"], function (a, c) {
		var e = c.toLowerCase();
		d.fn["inner" + c] = function () {
			return this[0] ? parseFloat(d.css(this[0], e, "padding")) : null
		},
		d.fn["outer" + c] = function (a) {
			return this[0] ? parseFloat(d.css(this[0], e, a ? "margin" : "border")) : null
		},
		d.fn[e] = function (a) {
			var f = this[0];
			if (!f)
				return a == null ? null : this;
			if (d.isFunction(a))
				return this.each(function (b) {
					var c = d(this);
					c[e](a.call(this, b, c[e]()))
				});
			if (d.isWindow(f)) {
				var g = f.document.documentElement["client" + c];
				return f.document.compatMode === "CSS1Compat" && g || f.document.body["client" + c] || g
			}
			if (f.nodeType === 9)
				return Math.max(f.documentElement["client" + c], f.body["scroll" + c], f.documentElement["scroll" + c], f.body["offset" + c], f.documentElement["offset" + c]);
			if (a === b) {
				var h = d.css(f, e),
				i = parseFloat(h);
				return d.isNaN(i) ? h : i
			}
			return this.css(e, typeof a === "string" ? a : a + "px")
		}
	}),
	a.jQuery = a.$ = d
})(window);

/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (jQuery, undefined) {
	var oldManip = jQuery.fn.domManip,
	tmplItmAtt = "_tmplitem",
	htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
	newTmplItems = {},
	wrappedItems = {},
	appendToTmplItems,
	topTmplItem = {
		key : 0,
		data : {}
		
	},
	itemKey = 0,
	cloneIndex = 0,
	stack = [];
	
	function newTmplItem(options, parentItem, fn, data) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data : data || (data === 0 || data === false) ? data : (parentItem ? parentItem.data : {}),
			_wrap : parentItem ? parentItem._wrap : null,
			tmpl : null,
			parent : parentItem || null,
			nodes : [],
			calls : tiCalls,
			nest : tiNest,
			wrap : tiWrap,
			html : tiHtml,
			update : tiUpdate
		};
		if (options) {
			jQuery.extend(newItem, options, {
				nodes : [],
				parent : parentItem
			});
		}
		if (fn) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl(jQuery, newItem);
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}
	
	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var ret = [],
			insert = jQuery(selector),
			elems,
			i,
			l,
			tmplItems,
			parent = this.length === 1 && this[0].parentNode;
			
			appendToTmplItems = newTmplItems || {};
			if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
				insert[original](this[0]);
				ret = this;
			} else {
				for (i = 0, l = insert.length; i < l; i++) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery(insert[i])[original](elems);
					ret = ret.concat(elems);
				}
				cloneIndex = 0;
				ret = this.pushStack(ret, name, insert.selector);
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete(tmplItems);
			return ret;
		};
	});
	
	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl : function (data, options, parentItem) {
			return jQuery.tmpl(this[0], data, options, parentItem);
		},
		
		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem : function () {
			return jQuery.tmplItem(this[0]);
		},
		
		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template : function (name) {
			return jQuery.template(name, this[0]);
		},
		
		domManip : function (args, table, callback, options) {
			if (args[0] && jQuery.isArray(args[0])) {
				var dmArgs = jQuery.makeArray(arguments),
				elems = args[0],
				elemsLength = elems.length,
				i = 0,
				tmplItem;
				while (i < elemsLength && !(tmplItem = jQuery.data(elems[i++], "tmplItem"))) {}
				if (tmplItem && cloneIndex) {
					dmArgs[2] = function (fragClone) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip(this, fragClone, callback);
					};
				}
				oldManip.apply(this, dmArgs);
			} else {
				oldManip.apply(this, arguments);
			}
			cloneIndex = 0;
			if (!appendToTmplItems) {
				jQuery.tmpl.complete(newTmplItems);
			}
			return this;
		}
	});
	
	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl : function (tmpl, data, options, parentItem) {
			var ret,
			topLevel = !parentItem;
			if (topLevel) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template(null, tmpl);
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if (!tmpl) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if (parentItem.wrapped) {
					updateWrapped(parentItem, parentItem.wrapped);
				}
				// Rebuild, without creating a new template item
				return jQuery(build(parentItem, null, parentItem.tmpl(jQuery, parentItem)));
			}
			if (!tmpl) {
				return []; // Could throw...
			}
			if (typeof data === "function") {
				data = data.call(parentItem || {});
			}
			if (options && options.wrapped) {
				updateWrapped(options, options.wrapped);
			}
			ret = jQuery.isArray(data) ?
				jQuery.map(data, function (dataItem) {
					return dataItem ? newTmplItem(options, parentItem, tmpl, dataItem) : null;
				}) :
				[newTmplItem(options, parentItem, tmpl, data)];
			return topLevel ? jQuery(build(parentItem, null, ret)) : ret;
		},
		
		// Return rendered template item for an element.
		tmplItem : function (elem) {
			var tmplItem;
			if (elem instanceof jQuery) {
				elem = elem[0];
			}
			while (elem && elem.nodeType === 1 && !(tmplItem = jQuery.data(elem, "tmplItem")) && (elem = elem.parentNode)) {}
			return tmplItem || topTmplItem;
		},
		
		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.
		
		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template : function (name, tmpl) {
			if (tmpl) {
				// Compile template and associate with name
				if (typeof tmpl === "string") {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn(tmpl)
				} else if (tmpl instanceof jQuery) {
					tmpl = tmpl[0] || {};
				}
				if (tmpl.nodeType) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data(tmpl, "tmpl") || jQuery.data(tmpl, "tmpl", buildTmplFn(tmpl.innerHTML));
					// Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.
					// This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x.
					// To correct this, include space in tag: foo="${ x }" -> foo="value of x"
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template(null, name) :
				(jQuery.template[name] ||
					// If not in map, and not containing at least on HTML tag, treat as a selector.
					// (If integrated with core, use quickExpr.exec)
					jQuery.template(null, htmlExpr.test(name) ? name : jQuery(name)))) : null;
		},
		
		encode : function (text) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});
	
	jQuery.extend(jQuery.tmpl, {
		tag : {
			"tmpl" : {
				_default : {
					$2 : "null"
				},
				open : "if($notnull_1){__=__.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function).
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap" : {
				_default : {
					$2 : "null"
				},
				open : "$item.calls(__,$1,$2);__=[];",
				close : "call=$item.calls();__=call._.concat($item.wrap(call,__));"
			},
			"each" : {
				_default : {
					$2 : "$index, $value"
				},
				open : "if($notnull_1){$.each($1a,function($2){with(this){",
				close : "}});}"
			},
			"if" : {
				open : "if(($notnull_1) && $1a){",
				close : "}"
			},
			"else" : {
				_default : {
					$1 : "true"
				},
				open : "}else if(($notnull_1) && $1a){"
			},
			"html" : {
				// Unecoded expression evaluation.
				open : "if($notnull_1){__.push($1a);}"
			},
			"=" : {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default : {
					$1 : "$data"
				},
				open : "if($notnull_1){__.push($.encode($1a));}"
			},
			"!" : {
				// Comment tag. Skipped by parser
				open : ""
			}
		},
		
		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete : function (items) {
			newTmplItems = {};
		},
		
		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip : function afterManip(elem, fragClone, callback) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];
			
			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call(elem, fragClone);
			
			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems(content);
			cloneIndex++;
		}
	});
	
	//========================== Private helper functions, used by code above ==========================
	
	function build(tmplItem, nested, content) {
		// Convert hierarchical content into flat string array
		// and finally return array of fragments ready for DOM insertion
		var frag,
		ret = content ? jQuery.map(content, function (item) {
				return (typeof item === "string") ?
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2") : item) :
				// This is a child template item. Build nested template.
				build(item, tmplItem, item._ctnt);
			}) :
			// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
			tmplItem;
		if (nested) {
			return ret;
		}
		
		// top-level template
		ret = ret.join("");
		
		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (all, before, middle, after) {
			frag = jQuery(middle).get();
			
			storeTmplItems(frag);
			if (before) {
				frag = unencode(before).concat(frag);
			}
			if (after) {
				frag = frag.concat(unencode(after));
			}
		});
		return frag ? frag : unencode(ret);
	}
	
	function unencode(text) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement("div");
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}
	
	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn(markup) {
		return new Function("jQuery", "$item",
			// Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
			"var $=jQuery,call,__=[],$data=$item.data;" +
			
			// Introduce the data as local variables using with(){}
			"with($data){__.push('" +
			
			// Convert the template into pure JavaScript
			jQuery.trim(markup)
			.replace(/([\\'])/g, "\\$1")
			.replace(/[\r\t\n]/g, " ")
			.replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
			.replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function (all, slash, type, fnargs, target, parens, args) {
				var tag = jQuery.tmpl.tag[type],
				def,
				expr,
				exprAutoFnDetect;
				if (!tag) {
					throw "Unknown template tag: " + type;
				}
				def = tag._default || [];
				if (parens && !/\w$/.test(target)) {
					target += parens;
					parens = "";
				}
				if (target) {
					target = unescape(target);
					args = args ? ("," + unescape(args) + ")") : (parens ? ")" : "");
					// Support for target being things like a.toLowerCase();
					// In that case don't call with template item as 'this' pointer. Just evaluate...
					expr = parens ? (target.indexOf(".") > -1 ? target + unescape(parens) : ("(" + target + ").call($item" + args)) : target;
					exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
				} else {
					exprAutoFnDetect = expr = def.$1 || "null";
				}
				fnargs = unescape(fnargs);
				return "');" +
				tag[slash ? "close" : "open"]
				.split("$notnull_1").join(target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true")
				.split("$1a").join(exprAutoFnDetect)
				.split("$1").join(expr)
				.split("$2").join(fnargs || def.$2 || "") +
				"__.push('";
			}) +
			"');}return __;");
	}
	function updateWrapped(options, wrapped) {
		// Build the wrapped content.
		options._wrap = build(options, true,
				// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
				jQuery.isArray(wrapped) ? wrapped : [htmlExpr.test(wrapped) ? wrapped : jQuery(wrapped).html()]).join("");
	}
	
	function unescape(args) {
		return args ? args.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null;
	}
	function outerHtml(elem) {
		var div = document.createElement("div");
		div.appendChild(elem.cloneNode(true));
		return div.innerHTML;
	}
	
	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems(content) {
		var keySuffix = "_" + cloneIndex,
		elem,
		elems,
		newClonedItems = {},
		i,
		l,
		m;
		for (i = 0, l = content.length; i < l; i++) {
			if ((elem = content[i]).nodeType !== 1) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for (m = elems.length - 1; m >= 0; m--) {
				processItemKey(elems[m]);
			}
			processItemKey(elem);
		}
		function processItemKey(el) {
			var pntKey,
			pntNode = el,
			pntItem,
			tmplItem,
			key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ((key = el.getAttribute(tmplItmAtt))) {
				while (pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute(tmplItmAtt))) {}
				if (pntKey !== key) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute(tmplItmAtt) || 0)) : 0;
					if (!(tmplItem = newTmplItems[key])) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem(tmplItem, newTmplItems[pntNode] || wrappedItems[pntNode]);
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if (cloneIndex) {
						cloneTmplItem(key);
					}
				}
				el.removeAttribute(tmplItmAtt);
			} else if (cloneIndex && (tmplItem = jQuery.data(el, "tmplItem"))) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem(tmplItem.key);
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data(el.parentNode, "tmplItem");
				pntNode = pntNode ? pntNode.key : 0;
			}
			if (tmplItem) {
				pntItem = tmplItem;
				// Find the template item of the parent element.
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while (pntItem && pntItem.key != pntNode) {
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push(el);
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data(el, "tmplItem", tmplItem);
			}
			function cloneTmplItem(key) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] =
					(newClonedItems[key] || newTmplItem(tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent));
			}
		}
	}
	
	//---- Helper functions for template item ----
	
	function tiCalls(content, tmpl, data, options) {
		if (!content) {
			return stack.pop();
		}
		stack.push({
			_ : content,
			tmpl : tmpl,
			item : this,
			data : data,
			options : options
		});
	}
	
	function tiNest(tmpl, data, options) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl(jQuery.template(null, tmpl), data, options, this);
	}
	
	function tiWrap(call, wrapped) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content,
		return jQuery.tmpl(jQuery.template(call.tmpl), call.data, options, call.item);
	}
	
	function tiHtml(filter, textOnly) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery(jQuery.isArray(wrapped) ? wrapped.join("") : wrapped).filter(filter || "*"),
			function (e) {
			return textOnly ?
			e.innerText || e.textContent :
			e.outerHTML || outerHtml(e);
		});
	}
	
	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl(null, null, null, this).insertBefore(coll[0]);
		jQuery(coll).remove();
	}
})(jQuery);

/**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */

/**
 * Creates a carousel-style navigation widget for images/any-content from a simple HTML markup.
 *
 * The HTML markup that is used to build the carousel can be as simple as...
 *
 *  <div class="carousel">
 *      <ul>
 *          <li><img src="image/1.jpg" alt="1"></li>
 *          <li><img src="image/2.jpg" alt="2"></li>
 *          <li><img src="image/3.jpg" alt="3"></li>
 *      </ul>
 *  </div>
 *
 * As you can see, this snippet is nothing but a simple div containing an unordered list of images.
 * You don't need any special "class" attribute, or a special "css" file for this plugin.
 * I am using a class attribute just for the sake of explanation here.
 *
 * To navigate the elements of the carousel, you need some kind of navigation buttons.
 * For example, you will need a "previous" button to go backward, and a "next" button to go forward.
 * This need not be part of the carousel "div" itself. It can be any element in your page.
 * Lets assume that the following elements in your document can be used as next, and prev buttons...
 *
 * <button class="prev">&lt;&lt;</button>
 * <button class="next">&gt;&gt;</button>
 *
 * Now, all you need to do is call the carousel component on the div element that represents it, and pass in the
 * navigation buttons as options.
 *
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 *
 * That's it, you would have now converted your raw div, into a magnificient carousel.
 *
 * There are quite a few other options that you can use to customize it though.
 * Each will be explained with an example below.
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option btnPrev, btnNext : string - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 * @desc Creates a basic carousel. Clicking "btnPrev" navigates backwards and "btnNext" navigates forward.
 *
 * @option btnGo - array - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      btnGo: [".0", ".1", ".2"]
 * });
 * @desc If you don't want next and previous buttons for navigation, instead you prefer custom navigation based on
 * the item number within the carousel, you can use this option. Just supply an array of selectors for each element
 * in the carousel. The index of the array represents the index of the element. What i mean is, if the
 * first element in the array is ".0", it means that when the element represented by ".0" is clicked, the carousel
 * will slide to the first element and so on and so forth. This feature is very powerful. For example, i made a tabbed
 * interface out of it by making my navigation elements styled like tabs in css. As the carousel is capable of holding
 * any content, not just images, you can have a very simple tabbed navigation in minutes without using any other plugin.
 * The best part is that, the tab will "slide" based on the provided effect. :-)
 *
 * @option mouseWheel : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      mouseWheel: true
 * });
 * @desc The carousel can also be navigated using the mouse wheel interface of a scroll mouse instead of using buttons.
 * To get this feature working, you have to do 2 things. First, you have to include the mouse-wheel plugin from brandon.
 * Second, you will have to set the option "mouseWheel" to true. That's it, now you will be able to navigate your carousel
 * using the mouse wheel. Using buttons and mouseWheel or not mutually exclusive. You can still have buttons for navigation
 * as well. They complement each other. To use both together, just supply the options required for both as shown below.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      mouseWheel: true
 * });
 *
 * @option auto : number - default is null, meaning autoscroll is disabled by default
 * @example
 * $(".carousel").jCarouselLite({
 *      auto: 800,
 *      speed: 500
 * });
 * @desc You can make your carousel auto-navigate itself by specfying a millisecond value in this option.
 * The value you specify is the amount of time between 2 slides. The default is null, and that disables auto scrolling.
 * Specify this value and magically your carousel will start auto scrolling.
 *
 * @option speed : number - 200 is default
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      speed: 800
 * });
 * @desc Specifying a speed will slow-down or speed-up the sliding speed of your carousel. Try it out with
 * different speeds like 800, 600, 1500 etc. Providing 0, will remove the slide effect.
 *
 * @option easing : string - no easing effects by default.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      easing: "bounceout"
 * });
 * @desc You can specify any easing effect. Note: You need easing plugin for that. Once specified,
 * the carousel will slide based on the provided easing effect.
 *
 * @option vertical : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      vertical: true
 * });
 * @desc Determines the direction of the carousel. true, means the carousel will display vertically. The next and
 * prev buttons will slide the items vertically as well. The default is false, which means that the carousel will
 * display horizontally. The next and prev items will slide the items from left-right in this case.
 *
 * @option circular : boolean - default is true
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      circular: false
 * });
 * @desc Setting it to true enables circular navigation. This means, if you click "next" after you reach the last
 * element, you will automatically slide to the first element and vice versa. If you set circular to false, then
 * if you click on the "next" button after you reach the last element, you will stay in the last element itself
 * and similarly for "previous" button and first element.
 *
 * @option visible : number - default is 3
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      visible: 4
 * });
 * @desc This specifies the number of items visible at all times within the carousel. The default is 3.
 * You are even free to experiment with real numbers. Eg: "3.5" will have 3 items fully visible and the
 * last item half visible. This gives you the effect of showing the user that there are more images to the right.
 *
 * @option start : number - default is 0
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      start: 2
 * });
 * @desc You can specify from which item the carousel should start. Remember, the first item in the carousel
 * has a start of 0, and so on.
 *
 * @option scrool : number - default is 1
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      scroll: 2
 * });
 * @desc The number of items that should scroll/slide when you click the next/prev navigation buttons. By
 * default, only one item is scrolled, but you may set it to any number. Eg: setting it to "2" will scroll
 * 2 items when you click the next or previous buttons.
 *
 * @option beforeStart, afterEnd : function - callbacks
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      beforeStart: function(a) {
 *          alert("Before animation starts:" + a);
 *      },
 *      afterEnd: function(a) {
 *          alert("After animation ends:" + a);
 *      }
 * });
 * @desc If you wanted to do some logic in your page before the slide starts and after the slide ends, you can
 * register these 2 callbacks. The functions will be passed an argument that represents an array of elements that
 * are visible at the time of callback.
 *
 *
 * @cat Plugins/Image Gallery
 * @author Ganeshji Marwaha/ganeshread@gmail.com
 */

(function ($) { // Compliant with jquery.noConflict()
	$.fn.jCarouselLite = function (o) {
		o = $.extend({
				btnPrev : null,
				btnNext : null,
				btnGo : null,
				mouseWheel : false,
				auto : null,
				
				speed : 200,
				easing : null,
				
				vertical : false,
				circular : true,
				visible : 3,
				start : 0,
				scroll : 1,
				
				beforeStart : null,
				afterEnd : null
			}, o || {});
		
		return this.each(function () { // Returns the element collection. Chainable.
			
			var running = false,
			animCss = o.vertical ? "top" : "left",
			sizeCss = o.vertical ? "height" : "width";
			var div = $(this),
			ul = $("ul", div),
			tLi = $("li", ul),
			tl = tLi.size(),
			v = o.visible;
			
			if (o.circular) {
				ul.prepend(tLi.slice(tl - v - 1 + 1).clone())
				.append(tLi.slice(0, v).clone());
				o.start += v;
			}
			
			var li = $("li", ul),
			itemLength = li.size(),
			curr = o.start;
			div.css("visibility", "visible");
			
			li.css({
				overflow : "hidden",
				"float" : o.vertical ? "none" : "left"
			});
			ul.css({
				margin : "0",
				padding : "0",
				position : "relative",
				"list-style-type" : "none",
				"z-index" : "1"
			});
			div.css({
				overflow : "hidden",
				position : "relative",
				"z-index" : "2",
				left : "0px"
			});
			
			var liSize = o.vertical ? height(li) : width(li); // Full li size(incl margin)-Used for animation
			var ulSize = liSize * itemLength; // size of full ul(total length, not just for the visible items)
			var divSize = liSize * v; // size of entire div(total length for just the visible items)
			
			li.css({
				width : li.width(),
				height : li.height()
			});
			ul.css(sizeCss, ulSize + "px").css(animCss,  - (curr * liSize));
			
			div.css(sizeCss, divSize + "px"); // Width of the DIV. length of visible images
			
			if (o.btnPrev)
				$(o.btnPrev).click(function () {
					return go(curr - o.scroll);
				});
			
			if (o.btnNext)
				$(o.btnNext).click(function () {
					return go(curr + o.scroll);
				});
			
			if (o.btnGo)
				$.each(o.btnGo, function (i, val) {
					$(val).click(function () {
						return go(o.circular ? o.visible + i : i);
					});
				});
			
			if (o.mouseWheel && div.mousewheel)
				div.mousewheel(function (e, d) {
					return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
				});
			
			if (o.auto)
				setInterval(function () {
					go(curr + o.scroll);
				}, o.auto + o.speed);
			
			function vis() {
				return li.slice(curr).slice(0, v);
			};
			
			function go(to) {
				if (!running) {
					
					if (o.beforeStart)
						o.beforeStart.call(this, vis());
					
					if (o.circular) { // If circular we are in first or last, then goto the other end
						if (to <= o.start - v - 1) { // If first, then goto last
							ul.css(animCss,  - ((itemLength - (v * 2)) * liSize) + "px");
							// If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
							curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
						} else if (to >= itemLength - v + 1) { // If last, then goto first
							ul.css(animCss,  - ((v) * liSize) + "px");
							// If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
							curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
						} else
							curr = to;
					} else { // If non-circular and to points to first or last, we just return.
						if (to < 0 || to > itemLength - v)
							return;
						else
							curr = to;
					} // If neither overrides it, the curr will still be "to" and we can proceed.
					
					running = true;
					
					ul.animate(
						animCss == "left" ? {
						left :  - (curr * liSize)
					}
						 : {
						top :  - (curr * liSize)
					}, o.speed, o.easing,
						function () {
						if (o.afterEnd)
							o.afterEnd.call(this, vis());
						running = false;
					});
					// Disable buttons when the carousel reaches the last/first, and enable when not
					if (!o.circular) {
						$(o.btnPrev + "," + o.btnNext).removeClass("disabled");
						$((curr - o.scroll < 0 && o.btnPrev)
							 ||
							(curr + o.scroll > itemLength - v && o.btnNext)
							 ||
							[]).addClass("disabled");
					}
					
				}
				return false;
			};
		});
	};
	
	function css(el, prop) {
		return parseInt($.css(el[0], prop)) || 0;
	};
	function width(el) {
		return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
	};
	function height(el) {
		return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
	};
	
})(jQuery);

//////////////////////////////////////////////////////////////////////////////////
// Cloud Zoom V1.0.2
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// MIT License
//
// Please retain this copyright header in all versions of the software
//////////////////////////////////////////////////////////////////////////////////
(function ($) {
	
	//$(document).ready(function () {
	//    $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
	//});
	
	function format(str) {
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace('%' + (i - 1), arguments[i]);
		}
		return str;
	}
	
	function CloudZoom(jWin, opts) {
		var sImg = $('img', jWin);
		var img1;
		var img2;
		var zoomDiv = null;
		var $mouseTrap = null;
		var lens = null;
		var $tint = null;
		var softFocus = null;
		var $ie6Fix = null;
		var zoomImage;
		var controlTimer = 0;
		var cw,
		ch;
		var destU = 0;
		var destV = 0;
		var currV = 0;
		var currU = 0;
		var filesLoaded = 0;
		var mx,
		my;
		var ctx = this,
		zw;
		// Display an image loading message. This message gets deleted when the images have loaded and the zoom init function is called.
		// We add a small delay before the message is displayed to avoid the message flicking on then off again virtually immediately if the
		// images load really fast, e.g. from the cache.
		//var   ctx = this;
		setTimeout(function () {
			//                       <img src="/images/loading.gif"/>
			if ($mouseTrap === null) {
				var w = jWin.width();
				jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>', w / 3, (w / 2) - (w / 6))).find(':last').css('opacity', 0.5);
			}
		}, 200);
		
		var ie6FixRemove = function () {
			
			if ($ie6Fix !== null) {
				$ie6Fix.remove();
				$ie6Fix = null;
			}
		};
		
		// Removes cursor, tint layer, blur layer etc.
		this.removeBits = function () {
			//$mouseTrap.unbind();
			if (lens) {
				lens.remove();
				lens = null;
			}
			if ($tint) {
				$tint.remove();
				$tint = null;
			}
			if (softFocus) {
				softFocus.remove();
				softFocus = null;
			}
			ie6FixRemove();
			
			$('.cloud-zoom-loading', jWin.parent()).remove();
		};
		
		this.destroy = function () {
			jWin.data('zoom', null);
			
			if ($mouseTrap) {
				$mouseTrap.unbind();
				$mouseTrap.remove();
				$mouseTrap = null;
			}
			if (zoomDiv) {
				zoomDiv.remove();
				zoomDiv = null;
			}
			//ie6FixRemove();
			this.removeBits();
			// DON'T FORGET TO REMOVE JQUERY 'DATA' VALUES
		};
		
		// This is called when the zoom window has faded out so it can be removed.
		this.fadedOut = function () {
			
			if (zoomDiv) {
				zoomDiv.remove();
				zoomDiv = null;
			}
			this.removeBits();
			//ie6FixRemove();
		};
		
		this.controlLoop = function () {
			if (lens) {
				var x = (mx - sImg.offset().left - (cw * 0.5)) >> 0;
				var y = (my - sImg.offset().top - (ch * 0.5)) >> 0;
				
				if (x < 0) {
					x = 0;
				} else if (x > (sImg.outerWidth() - cw)) {
					x = (sImg.outerWidth() - cw);
				}
				if (y < 0) {
					y = 0;
				} else if (y > (sImg.outerHeight() - ch)) {
					y = (sImg.outerHeight() - ch);
				}
				
				lens.css({
					left : x,
					top : y
				});
				lens.css('background-position', (-x) + 'px ' + (-y) + 'px');
				
				destU = (((x) / sImg.outerWidth()) * zoomImage.width) >> 0;
				destV = (((y) / sImg.outerHeight()) * zoomImage.height) >> 0;
				currU += (destU - currU) / opts.smoothMove;
				currV += (destV - currV) / opts.smoothMove;
				
				zoomDiv.css('background-position', ( - (currU >> 0) + 'px ') + ( - (currV >> 0) + 'px'));
			}
			controlTimer = setTimeout(function () {
					ctx.controlLoop();
				}, 30);
		};
		
		this.init2 = function (img, id) {
			
			filesLoaded++;
			//console.log(img.src + ' ' + id + ' ' + img.width);
			if (id === 1) {
				zoomImage = img;
			}
			//this.images[id] = img;
			if (filesLoaded === 2) {
				this.init();
			}
		};
		
		/* Init function start.  */
		this.init = function () {
			// Remove loading message (if present);
			$('.cloud-zoom-loading', jWin.parent()).remove();
			
			/* Add a box (mouseTrap) over the small image to trap mouse events.
			It has priority over zoom window to avoid issues with inner zoom.
			We need the dummy background image as IE does not trap mouse events on
			transparent parts of a div.
			 */
			$mouseTrap = jWin.parent().append(format("<div class='mousetrap' style='" + ($.browser.msie ? "background-image:url(\".\");" : "") + "z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;\'></div>", sImg.outerWidth(), sImg.outerHeight(), 0, 0)).find(':last');
			
			//////////////////////////////////////////////////////////////////////
			/* Do as little as possible in mousemove event to prevent slowdown. */
			$mouseTrap.bind('mousemove', this, function (event) {
				// Just update the mouse position
				mx = event.pageX;
				my = event.pageY;
			});
			//////////////////////////////////////////////////////////////////////
			$mouseTrap.bind('mouseleave', this, function (event) {
				clearTimeout(controlTimer);
				//event.data.removeBits();
				if (lens) {
					lens.fadeOut(299);
				}
				if ($tint) {
					$tint.fadeOut(299);
				}
				if (softFocus) {
					softFocus.fadeOut(299);
				}
				zoomDiv.fadeOut(300, function () {
					ctx.fadedOut();
				});
				return false;
			});
			//////////////////////////////////////////////////////////////////////
			$mouseTrap.bind('mouseenter', this, function (event) {
				mx = event.pageX;
				my = event.pageY;
				zw = event.data;
				if (zoomDiv) {
					zoomDiv.stop(true, false);
					zoomDiv.remove();
				}
				
				var xPos = opts.adjustX,
				yPos = opts.adjustY;
				
				var siw = sImg.outerWidth();
				var sih = sImg.outerHeight();
				
				var w = opts.zoomWidth;
				var h = opts.zoomHeight;
				if (opts.zoomWidth == 'auto') {
					w = siw;
				}
				if (opts.zoomHeight == 'auto') {
					h = sih;
				}
				//$('#info').text( xPos + ' ' + yPos + ' ' + siw + ' ' + sih );
				var appendTo = jWin.parent(); // attach to the wrapper
				
				w = siw;
				h = sih;
				
				zoomDiv = appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" data-stest="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>', xPos, yPos, w, h, zoomImage.src)).find(':last');
				
				zoomDiv.fadeIn(500);
				if (lens) {
					lens.remove();
					lens = null;
				}
				/* Work out size of cursor */
				cw = (sImg.outerWidth() / zoomImage.width) * zoomDiv.width();
				ch = (sImg.outerHeight() / zoomImage.height) * zoomDiv.height();
				
				// Attach mouse, initially invisible to prevent first frame glitch
				lens = jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>", cw, ch)).find(':last');
				
				$mouseTrap.css('cursor', lens.css('cursor'));
				
				var noTrans = false;
				
				// Init tint layer if needed. (Not relevant if using inside mode)
				if (opts.tint) {
					lens.css('background', 'url("' + sImg.attr('src') + '")');
					$tint = jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />', sImg.outerWidth(), sImg.outerHeight(), opts.tint)).find(':last');
					$tint.css('opacity', opts.tintOpacity);
					noTrans = true;
					$tint.fadeIn(500);
					
				}
				if (opts.softFocus) {
					lens.css('background', 'url("' + sImg.attr('src') + '")');
					softFocus = jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />', sImg.outerWidth() - 2, sImg.outerHeight() - 2, opts.tint)).find(':last');
					softFocus.css('background', 'url("' + sImg.attr('src') + '")');
					softFocus.css('opacity', 0.5);
					noTrans = true;
					softFocus.fadeIn(500);
				}
				
				if (!noTrans) {
					lens.css('opacity', opts.lensOpacity);
				}
				if (opts.position !== 'inside') {
					lens.fadeIn(500);
				}
				
				// Start processing.
				zw.controlLoop();
				
				return; // Don't return false here otherwise opera will not detect change of the mouse pointer type.
			});
		};
		
		img1 = new Image();
		$(img1).load(function () {
			ctx.init2(this, 0);
		});
		img1.src = sImg.attr('src');
		
		img2 = new Image();
		$(img2).load(function () {
			ctx.init2(this, 1);
		});
		img2.src = jWin.attr('href');
	}
	
	$.fn.CloudZoom = function (options) {
		// IE6 background image flicker fix
		try {
			document.execCommand("BackgroundImageCache", false, true);
		} catch (e) {}
		this.each(function () {
			var relOpts,
			opts;
			// Hmm...eval...slap on wrist.
			eval('var   a = {' + $(this).attr('rel') + '}');
			relOpts = a;
			if ($(this).is('.cloud-zoom')) {
				$(this).css({
					'position' : 'relative',
					'display' : 'block'
				});
				$('img', $(this)).css({
					'display' : 'block'
				});
				// Wrap an outer div around the link so we can attach things without them becoming part of the link.
				// But not if wrap already exists.
				if ($(this).parent().attr('id') != 'wrap') {
					$(this).wrap('<div id="wrap" data-stest="zoom-wrap" style="top:0px;z-index:999;position:relative;"></div>');
				}
				opts = $.extend({}, $.fn.CloudZoom.defaults, options);
				opts = $.extend({}, opts, relOpts);
				$(this).data('zoom', new CloudZoom($(this), opts));
				
			} else if ($(this).is('.cloud-zoom-gallery')) {
				opts = $.extend({}, relOpts, options);
				$(this).data('relOpts', opts);
				$(this).bind('click', $(this), function (event) {
					var data = event.data.data('relOpts');
					// Destroy the previous zoom
					$('#' + data.useZoom).data('zoom').destroy();
					// Change the biglink to point to the new big image.
					$('#' + data.useZoom).attr('href', event.data.attr('href'));
					// Change the small image to point to the new small image.
					$('#' + data.useZoom + ' img').attr('src', event.data.data('relOpts').smallImage);
					// Init a new zoom with the new images.
					$('#' + event.data.data('relOpts').useZoom).CloudZoom();
					return false;
				});
			}
		});
		return this;
	};
	
	$.fn.CloudZoom.defaults = {
		zoomWidth : 'auto',
		zoomHeight : 'auto',
		position : 'right',
		tint : false,
		tintOpacity : 0.5,
		lensOpacity : 0.5,
		softFocus : false,
		smoothMove : 3,
		showTitle : true,
		titleOpacity : 0.5,
		adjustX : 0,
		adjustY : 0
	};
	
})(jQuery);

/*
jQuery Fieldtag Plugin
 * Version 1.1
 * URL: http://ajaxcssblog.com/jquery/fieldtag-watermark-inputfields/
 * Description: jQuery Plugin to dynamically tag an inputfield, with a class and/or text
 * Author: Matthias Jäggli
 * Copyright: Copyright (c) 2009 Matthias Jäggli under dual MIT/GPL license.
 */
(function ($) {
	$.fn.fieldtag = function (options) {
		var opt = $.extend({
				markedClass : "tagged",
				standardText : false
			}, options);
		$(this)
		.focus(function () {
			if (!this.changed) {
				this.clear();
			}
		})
		.blur(function () {
			if (!this.changed) {
				this.addTag();
			}
		})
		.keyup(function () {
			this.changed = ($(this).val() ? true : false);
		})
		.each(function () {
			this.title = $(this).attr("title"); //strange IE6 Bug, sometimes
			if ($(this).val() == $(this).attr("title")) {
				this.changed = false;
			}
			this.clear = function () {
				if (!this.changed) {
					$(this)
					.val("")
					.removeClass(opt.markedClass);
				}
			}
			this.addTag = function () {
				$(this)
				.val(opt.standardText === false ? this.title : opt.standardText)
				.addClass(opt.markedClass);
			}
			if (this.form) {
				this.form.tagFieldsToClear = this.form.tagFieldsToClear || [];
				this.form.tagFieldsToClear.push(this);
				
				if (this.form.tagFieldsAreCleared) {
					return true;
				}
				this.form.tagFieldsAreCleared = true;
				
				$(this.form).submit(function () {
					$(this.tagFieldsToClear).each(function () {
						this.clear();
					});
				});
			}
		})
		.keyup()
		.blur();
		return $(this);
	}
})(jQuery);

/*
 * SimpleModal 1.4.1 - jQuery Plugin
 * http://www.ericmmartin.com/projects/simplemodal/
 * Copyright (c) 2010 Eric Martin (http://twitter.com/ericmmartin)
 * Dual licensed under the MIT and GPL licenses
 * Revision: $Id: jquery.simplemodal.js 261 2010-11-05 21:16:20Z emartin24 $
 */

/**
 * SimpleModal is a lightweight jQuery plugin that provides a simple
 * interface to create a modal dialog.
 *
 * The goal of SimpleModal is to provide developers with a cross-browser
 * overlay and container that will be populated with data provided to
 * SimpleModal.
 *
 * There are two ways to call SimpleModal:
 * 1) As a chained function on a jQuery object, like $('#myDiv').modal();.
 * This call would place the DOM object, #myDiv, inside a modal dialog.
 * Chaining requires a jQuery object. An optional options object can be
 * passed as a parameter.
 *
 * @example $('<div>my data</div>').modal({options});
 * @example $('#myDiv').modal({options});
 * @example jQueryObject.modal({options});
 *
 * 2) As a stand-alone function, like $.modal(data). The data parameter
 * is required and an optional options object can be passed as a second
 * parameter. This method provides more flexibility in the types of data
 * that are allowed. The data could be a DOM object, a jQuery object, HTML
 * or a string.
 *
 * @example $.modal('<div>my data</div>', {options});
 * @example $.modal('my data', {options});
 * @example $.modal($('#myDiv'), {options});
 * @example $.modal(jQueryObject, {options});
 * @example $.modal(document.getElementById('myDiv'), {options});
 *
 * A SimpleModal call can contain multiple elements, but only one modal
 * dialog can be created at a time. Which means that all of the matched
 * elements will be displayed within the modal container.
 *
 * SimpleModal internally sets the CSS needed to display the modal dialog
 * properly in all browsers, yet provides the developer with the flexibility
 * to easily control the look and feel. The styling for SimpleModal can be
 * done through external stylesheets, or through SimpleModal, using the
 * overlayCss, containerCss, and dataCss options.
 *
 * SimpleModal has been tested in the following browsers:
 * - IE 6, 7, 8, 9
 * - Firefox 2, 3, 4
 * - Opera 9, 10
 * - Safari 3, 4, 5
 * - Chrome 1, 2, 3, 4, 5, 6
 *
 * @name SimpleModal
 * @type jQuery
 * @requires jQuery v1.2.4
 * @cat Plugins/Windows and Overlays
 * @author Eric Martin (http://ericmmartin.com)
 * @version 1.4.1
 */
;
(function ($) {
	var ie6 = $.browser.msie && parseInt($.browser.version) === 6 && typeof window['XMLHttpRequest'] !== 'object',
	ie7 = $.browser.msie && parseInt($.browser.version) === 7,
	ieQuirks = null,
	w = [];
	
	/*
	 * Create and display a modal dialog.
	 *
	 * @param {string, object} data A string, jQuery object or DOM object
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.modal = function (data, options) {
		return $.modal.impl.init(data, options);
	};
	
	/*
	 * Close the modal dialog.
	 */
	$.modal.close = function () {
		$.modal.impl.close();
	};
	
	/*
	 * Set focus on first or last visible input in the modal dialog. To focus on the last
	 * element, call $.modal.focus('last'). If no input elements are found, focus is placed
	 * on the data wrapper element.
	 */
	$.modal.focus = function (pos) {
		$.modal.impl.focus(pos);
	};
	
	/*
	 * Determine and set the dimensions of the modal dialog container.
	 * setPosition() is called if the autoPosition option is true.
	 */
	$.modal.setContainerDimensions = function () {
		$.modal.impl.setContainerDimensions();
	};
	
	/*
	 * Re-position the modal dialog.
	 */
	$.modal.setPosition = function () {
		$.modal.impl.setPosition();
	};
	
	/*
	 * Update the modal dialog. If new dimensions are passed, they will be used to determine
	 * the dimensions of the container.
	 *
	 * setContainerDimensions() is called, which in turn calls setPosition(), if enabled.
	 * Lastly, focus() is called is the focus option is true.
	 */
	$.modal.update = function (height, width) {
		$.modal.impl.update(height, width);
	};
	
	/*
	 * Chained function to create a modal dialog.
	 *
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.fn.modal = function (options) {
		return $.modal.impl.init(this, options);
	};
	
	/*
	 * SimpleModal default options
	 *
	 * appendTo:		(String:'body') The jQuery selector to append the elements to. For .NET, use 'form'.
	 * focus:			(Boolean:true) Focus in the first visible, enabled element?
	 * opacity:			(Number:50) The opacity value for the overlay div, from 0 - 100
	 * overlayId:		(String:'simplemodal-overlay') The DOM element id for the overlay div
	 * overlayCss:		(Object:{}) The CSS styling for the overlay div
	 * containerId:		(String:'simplemodal-container') The DOM element id for the container div
	 * containerCss:	(Object:{}) The CSS styling for the container div
	 * dataId:			(String:'simplemodal-data') The DOM element id for the data div
	 * dataCss:			(Object:{}) The CSS styling for the data div
	 * minHeight:		(Number:null) The minimum height for the container
	 * minWidth:		(Number:null) The minimum width for the container
	 * maxHeight:		(Number:null) The maximum height for the container. If not specified, the window height is used.
	 * maxWidth:		(Number:null) The maximum width for the container. If not specified, the window width is used.
	 * autoResize:		(Boolean:false) Automatically resize the container if it exceeds the browser window dimensions?
	 * autoPosition:	(Boolean:true) Automatically position the container upon creation and on window resize?
	 * zIndex:			(Number: 1000) Starting z-index value
	 * close:			(Boolean:true) If true, closeHTML, escClose and overClose will be used if set.
	If false, none of them will be used.
	 * closeHTML:		(String:'<a class="modalCloseImg" title="Close"></a>') The HTML for the default close link.
	SimpleModal will automatically add the closeClass to this element.
	 * closeClass:		(String:'simplemodal-close') The CSS class used to bind to the close event
	 * escClose:		(Boolean:true) Allow Esc keypress to close the dialog?
	 * overlayClose:	(Boolean:false) Allow click on overlay to close the dialog?
	 * position:		(Array:null) Position of container [top, left]. Can be number of pixels or percentage
	 * persist:			(Boolean:false) Persist the data across modal calls? Only used for existing
	DOM elements. If true, the data will be maintained across modal calls, if false,
	the data will be reverted to its original state.
	 * modal:			(Boolean:true) User will be unable to interact with the page below the modal or tab away from the dialog.
	If false, the overlay, iframe, and certain events will be disabled allowing the user to interact
	with the page below the dialog.
	 * onOpen:			(Function:null) The callback function used in place of SimpleModal's open
	 * onShow:			(Function:null) The callback function used after the modal dialog has opened
	 * onClose:			(Function:null) The callback function used in place of SimpleModal's close
	 */
	$.modal.defaults = {
		appendTo : 'body',
		focus : true,
		opacity : 50,
		overlayId : 'simplemodal-overlay',
		overlayCss : {},
		containerId : 'simplemodal-container',
		containerCss : {},
		dataId : 'simplemodal-data',
		dataCss : {},
		minHeight : null,
		minWidth : null,
		maxHeight : null,
		maxWidth : null,
		autoResize : false,
		autoPosition : true,
		zIndex : 1000,
		close : true,
		closeHTML : '<a class="modalCloseImg" title="Close"></a>',
		closeClass : 'simplemodal-close',
		escClose : true,
		overlayClose : false,
		position : null,
		persist : false,
		modal : true,
		onOpen : null,
		onShow : null,
		onClose : null
	};
	
	/*
	 * Main modal object
	 * o = options
	 */
	$.modal.impl = {
		/*
		 * Contains the modal dialog elements and is the object passed
		 * back to the callback (onOpen, onShow, onClose) functions
		 */
		d : {},
		/*
		 * Initialize the modal dialog
		 */
		init : function (data, options) {
			var s = this;
			
			// don't allow multiple calls
			if (s.d.data) {
				return false;
			}
			
			// $.boxModel is undefined if checked earlier
			ieQuirks = $.browser.msie && !$.boxModel;
			
			// merge defaults and user options
			s.o = $.extend({}, $.modal.defaults, options);
			
			// keep track of z-index
			s.zIndex = s.o.zIndex;
			
			// set the onClose callback flag
			s.occb = false;
			
			// determine how to handle the data based on its type
			if (typeof data === 'object') {
				// convert DOM object to a jQuery object
				data = data instanceof jQuery ? data : $(data);
				s.d.placeholder = false;
				
				// if the object came from the DOM, keep track of its parent
				if (data.parent().parent().size() > 0) {
					data.before($('<span></span>')
						.attr('id', 'simplemodal-placeholder')
						.css({
							display : 'none'
						}));
					
					s.d.placeholder = true;
					s.display = data.css('display');
					
					// persist changes? if not, make a clone of the element
					if (!s.o.persist) {
						s.d.orig = data.clone(true);
					}
				}
			} else if (typeof data === 'string' || typeof data === 'number') {
				// just insert the data as innerHTML
				data = $('<div></div>').html(data);
			} else {
				// unsupported data type!
				alert('SimpleModal Error: Unsupported data type: ' + typeof data);
				return s;
			}
			
			// create the modal overlay, container and, if necessary, iframe
			s.create(data);
			data = null;
			
			// display the modal dialog
			s.open();
			
			// useful for adding events/manipulating data in the modal dialog
			if ($.isFunction(s.o.onShow)) {
				s.o.onShow.apply(s, [s.d]);
			}
			
			// don't break the chain =)
			return s;
		},
		/*
		 * Create and add the modal overlay and container to the page
		 */
		create : function (data) {
			var s = this;
			
			// get the window properties
			w = s.getDimensions();
			
			// add an iframe to prevent select options from bleeding through
			if (s.o.modal && ie6) {
				s.d.iframe = $('<iframe src="javascript:false;"></iframe>')
					.css($.extend(s.o.iframeCss, {
							display : 'none',
							opacity : 0,
							position : 'fixed',
							height : w[0],
							width : w[1],
							zIndex : s.o.zIndex,
							top : 0,
							left : 0
						}))
					.appendTo(s.o.appendTo);
			}
			
			// create the overlay
			s.d.overlay = $('<div></div>')
				.attr('id', s.o.overlayId)
				.addClass('simplemodal-overlay')
				.css($.extend(s.o.overlayCss, {
						display : 'none',
						opacity : s.o.opacity / 100,
						height : s.o.modal ? w[0] : 0,
						width : s.o.modal ? w[1] : 0,
						position : 'fixed',
						left : 0,
						top : 0,
						zIndex : s.o.zIndex + 1
					}))
				.appendTo(s.o.appendTo);
			
			// create the container
			s.d.container = $('<div></div>')
				.attr('id', s.o.containerId)
				.addClass('simplemodal-container')
				.css($.extend(s.o.containerCss, {
						display : 'none',
						position : 'fixed',
						zIndex : s.o.zIndex + 2
					}))
				.append(s.o.close && s.o.closeHTML
					 ? $(s.o.closeHTML).addClass(s.o.closeClass)
					 : '')
				.appendTo(s.o.appendTo);
			
			s.d.wrap = $('<div></div>')
				.attr('tabIndex', -1)
				.addClass('simplemodal-wrap')
				.css({
					height : '100%',
					outline : 0,
					width : '100%'
				})
				.appendTo(s.d.container);
			
			// add styling and attributes to the data
			// append to body to get correct dimensions, then move to wrap
			s.d.data = data
				.attr('id', data.attr('id') || s.o.dataId)
				.addClass('simplemodal-data')
				.css($.extend(s.o.dataCss, {
						display : 'none'
					}))
				.appendTo('body');
			data = null;
			
			s.setContainerDimensions();
			s.d.data.appendTo(s.d.wrap);
			
			// fix issues with IE
			if (ie6 || ieQuirks) {
				s.fixIE();
			}
		},
		/*
		 * Bind events
		 */
		bindEvents : function () {
			var s = this;
			
			// bind the close event to any element with the closeClass class
			$('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
				e.preventDefault();
				s.close();
			});
			
			// bind the overlay click to the close function, if enabled
			if (s.o.modal && s.o.close && s.o.overlayClose) {
				s.d.overlay.bind('click.simplemodal', function (e) {
					e.preventDefault();
					s.close();
				});
			}
			
			// bind keydown events
			$(document).bind('keydown.simplemodal', function (e) {
				if (s.o.modal && e.keyCode === 9) { // TAB
					s.watchTab(e);
				} else if ((s.o.close && s.o.escClose) && e.keyCode === 27) { // ESC
					e.preventDefault();
					s.close();
				}
			});
			
			// update window size
			$(window).bind('resize.simplemodal', function () {
				// redetermine the window width/height
				w = s.getDimensions();
				
				// reposition the dialog
				s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();
				
				if (ie6 || ieQuirks) {
					s.fixIE();
				} else if (s.o.modal) {
					// update the iframe & overlay
					s.d.iframe && s.d.iframe.css({
						height : w[0],
						width : w[1]
					});
					s.d.overlay.css({
						height : w[0],
						width : w[1]
					});
				}
			});
		},
		/*
		 * Unbind events
		 */
		unbindEvents : function () {
			$('.' + this.o.closeClass).unbind('click.simplemodal');
			$(document).unbind('keydown.simplemodal');
			$(window).unbind('resize.simplemodal');
			this.d.overlay.unbind('click.simplemodal');
		},
		/*
		 * Fix issues in IE6 and IE7 in quirks mode
		 */
		fixIE : function () {
			var s = this,
			p = s.o.position;
			
			// simulate fixed position - adapted from BlockUI
			$.each([s.d.iframe || null, !s.o.modal ? null : s.d.overlay, s.d.container], function (i, el) {
				if (el) {
					var bch = 'document.body.clientHeight',
					bcw = 'document.body.clientWidth',
					bsh = 'document.body.scrollHeight',
					bsl = 'document.body.scrollLeft',
					bst = 'document.body.scrollTop',
					bsw = 'document.body.scrollWidth',
					ch = 'document.documentElement.clientHeight',
					cw = 'document.documentElement.clientWidth',
					sl = 'document.documentElement.scrollLeft',
					st = 'document.documentElement.scrollTop',
					s = el[0].style;
					
					s.position = 'absolute';
					if (i < 2) {
						s.removeExpression('height');
						s.removeExpression('width');
						s.setExpression('height', '' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
						s.setExpression('width', '' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
					} else {
						var te,
						le;
						if (p && p.constructor === Array) {
							var top = p[0]
								 ? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '')
								 : el.css('top').replace(/px/, '');
							te = top.indexOf('%') === -1
								 ? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
								 : parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
							
							if (p[1]) {
								var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
								le = left.indexOf('%') === -1
									 ? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
									 : parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
							}
						} else {
							te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
							le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
						}
						s.removeExpression('top');
						s.removeExpression('left');
						s.setExpression('top', te);
						s.setExpression('left', le);
					}
				}
			});
		},
		/*
		 * Place focus on the first or last visible input
		 */
		focus : function (pos) {
			var s = this,
			p = pos && $.inArray(pos, ['first', 'last']) !== -1 ? pos : 'first';
			
			// focus on dialog or the first visible/enabled input element
			var input = $(':input:enabled:visible:' + p, s.d.wrap);
			setTimeout(function () {
				input.length > 0 ? input.focus() : s.d.wrap.focus();
			}, 10);
		},
		getDimensions : function () {
			var el = $(window);
			
			// fix a jQuery/Opera bug with determining the window height
			var h = $.browser.opera && $.browser.version > '9.5' && $.fn.jquery < '1.3'
				 || $.browser.opera && $.browser.version < '9.5' && $.fn.jquery > '1.2.6'
				 ? el[0].innerHeight : el.height();
			
			return [h, el.width()];
		},
		getVal : function (v, d) {
			return v ? (typeof v === 'number' ? v
				 : v === 'auto' ? 0
				 : v.indexOf('%') > 0 ? ((parseInt(v.replace(/%/, '')) / 100) * (d === 'h' ? w[0] : w[1]))
				 : parseInt(v.replace(/px/, '')))
			 : null;
		},
		/*
		 * Update the container. Set new dimensions, if provided.
		 * Focus, if enabled. Re-bind events.
		 */
		update : function (height, width) {
			var s = this;
			
			// prevent update if dialog does not exist
			if (!s.d.data) {
				return false;
			}
			
			// reset orig values
			s.d.origHeight = s.getVal(height, 'h');
			s.d.origWidth = s.getVal(width, 'w');
			
			// hide data to prevent screen flicker
			s.d.data.hide();
			height && s.d.container.css('height', height);
			width && s.d.container.css('width', width);
			s.setContainerDimensions();
			s.d.data.show();
			s.o.focus && s.focus();
			
			// rebind events
			s.unbindEvents();
			s.bindEvents();
		},
		setContainerDimensions : function () {
			var s = this,
			badIE = ie6 || ie7;
			
			// get the dimensions for the container and data
			var ch = s.d.origHeight ? s.d.origHeight : $.browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'),
			cw = s.d.origWidth ? s.d.origWidth : $.browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'),
			dh = s.d.data.outerHeight(true),
			dw = s.d.data.outerWidth(true);
			
			s.d.origHeight = s.d.origHeight || ch;
			s.d.origWidth = s.d.origWidth || cw;
			
			// mxoh = max option height, mxow = max option width
			var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null,
			mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null,
			mh = mxoh && mxoh < w[0] ? mxoh : w[0],
			mw = mxow && mxow < w[1] ? mxow : w[1];
			
			// moh = min option height
			var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
			if (!ch) {
				if (!dh) {
					ch = moh;
				} else {
					if (dh > mh) {
						ch = mh;
					} else if (s.o.minHeight && moh !== 'auto' && dh < moh) {
						ch = moh;
					} else {
						ch = dh;
					}
				}
			} else {
				ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
			}
			
			// mow = min option width
			var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
			if (!cw) {
				if (!dw) {
					cw = mow;
				} else {
					if (dw > mw) {
						cw = mw;
					} else if (s.o.minWidth && mow !== 'auto' && dw < mow) {
						cw = mow;
					} else {
						cw = dw;
					}
				}
			} else {
				cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
			}
			
			s.d.container.css({
				height : ch,
				width : cw
			});
			s.d.wrap.css({
				overflow : (dh > ch || dw > cw) ? 'auto' : 'visible'
			});
			s.o.autoPosition && s.setPosition();
		},
		setPosition : function () {
			var s = this,
			top,
			left,
			hc = (w[0] / 2) - (s.d.container.outerHeight(true) / 2),
			vc = (w[1] / 2) - (s.d.container.outerWidth(true) / 2);
			
			if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
				top = s.o.position[0] || hc;
				left = s.o.position[1] || vc;
			} else {
				top = hc;
				left = vc;
			}
			s.d.container.css({
				left : left,
				top : top
			});
		},
		watchTab : function (e) {
			var s = this;
			
			if ($(e.target).parents('.simplemodal-container').length > 0) {
				// save the list of inputs
				s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);
				
				// if it's the first or last tabbable element, refocus
				if ((!e.shiftKey && e.target === s.inputs[s.inputs.length - 1]) ||
					(e.shiftKey && e.target === s.inputs[0]) ||
					s.inputs.length === 0) {
					e.preventDefault();
					var pos = e.shiftKey ? 'last' : 'first';
					s.focus(pos);
				}
			} else {
				// might be necessary when custom onShow callback is used
				e.preventDefault();
				s.focus();
			}
		},
		/*
		 * Open the modal dialog elements
		 * - Note: If you use the onOpen callback, you must "show" the
		 *	        overlay and container elements manually
		 *         (the iframe will be handled by SimpleModal)
		 */
		open : function () {
			var s = this;
			// display the iframe
			s.d.iframe && s.d.iframe.show();
			
			if ($.isFunction(s.o.onOpen)) {
				// execute the onOpen callback
				s.o.onOpen.apply(s, [s.d]);
			} else {
				// display the remaining elements
				s.d.overlay.show();
				s.d.container.show();
				s.d.data.show();
			}
			
			s.o.focus && s.focus();
			
			// bind default events
			s.bindEvents();
		},
		/*
		 * Close the modal dialog
		 * - Note: If you use an onClose callback, you must remove the
		 *         overlay, container and iframe elements manually
		 *
		 * @param {boolean} external Indicates whether the call to this
		 *     function was internal or external. If it was external, the
		 *     onClose callback will be ignored
		 */
		close : function () {
			var s = this;
			
			// prevent close when dialog does not exist
			if (!s.d.data) {
				return false;
			}
			
			// remove the default events
			s.unbindEvents();
			
			if ($.isFunction(s.o.onClose) && !s.occb) {
				// set the onClose callback flag
				s.occb = true;
				
				// execute the onClose callback
				s.o.onClose.apply(s, [s.d]);
			} else {
				// if the data came from the DOM, put it back
				if (s.d.placeholder) {
					var ph = $('#simplemodal-placeholder');
					// save changes to the data?
					if (s.o.persist) {
						// insert the (possibly) modified data back into the DOM
						ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
					} else {
						// remove the current and insert the original,
						// unmodified data back into the DOM
						s.d.data.hide().remove();
						ph.replaceWith(s.d.orig);
					}
				} else {
					// otherwise, remove it
					s.d.data.hide().remove();
				}
				
				// remove the remaining elements
				s.d.container.hide().remove();
				s.d.overlay.hide();
				s.d.iframe && s.d.iframe.hide().remove();
				
				s.d.overlay.remove();
				
				// reset the dialog object
				s.d = {};
			}
		}
	};
})(jQuery);

/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.99 (12-MAR-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;
(function ($) {
	
	var ver = '2.99';
	
	// if $.support is not defined (pre jQuery 1.3) add what I need
	if ($.support == undefined) {
		$.support = {
			opacity : !($.browser.msie)
		};
	}
	
	function debug(s) {
		$.fn.cycle.debug && log(s);
	}
	function log() {
		window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
	}
	$.expr[':'].paused = function (el) {
		return el.cyclePause;
	}
	
	// the options arg can be...
	//   a number  - indicates an immediate transition should occur to the given slide index
	//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
	//   an object - properties to control the slideshow
	//
	// the arg2 arg can be...
	//   the name of an fx (only used in conjunction with a numeric value for 'options')
	//   the value true (only used in first arg == 'resume') and indicates
	//	 that the resume should occur immediately (not wait for next timeout)
	
	$.fn.cycle = function (options, arg2) {
		var o = {
			s : this.selector,
			c : this.context
		};
		
		// in 1.3+ we can fix mistakes with the ready state
		if (this.length === 0 && options != 'stop') {
			if (!$.isReady && o.s) {
				log('DOM not ready, queuing slideshow');
				$(function () {
					$(o.s, o.c).cycle(options, arg2);
				});
				return this;
			}
			// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
			return this;
		}
		
		// iterate the matched nodeset
		return this.each(function () {
			var opts = handleArguments(this, options, arg2);
			if (opts === false)
				return;
			
			opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
			
			// stop existing slideshow for this container (if there is one)
			if (this.cycleTimeout)
				clearTimeout(this.cycleTimeout);
			this.cycleTimeout = this.cyclePause = 0;
			
			var $cont = $(this);
			var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
			var els = $slides.get();
			if (els.length < 2) {
				log('terminating; too few slides: ' + els.length);
				return;
			}
			
			var opts2 = buildOptions($cont, $slides, els, opts, o);
			if (opts2 === false)
				return;
			
			var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
			
			// if it's an auto slideshow, kick it off
			if (startTime) {
				startTime += (opts2.delay || 0);
				if (startTime < 10)
					startTime = 10;
				debug('first timeout: ' + startTime);
				this.cycleTimeout = setTimeout(function () {
						go(els, opts2, 0, !opts.backwards)
					}, startTime);
			}
		});
	};
	
	// process the args that were passed to the plugin fn
	function handleArguments(cont, options, arg2) {
		if (cont.cycleStop == undefined)
			cont.cycleStop = 0;
		if (options === undefined || options === null)
			options = {};
		if (options.constructor == String) {
			switch (options) {
			case 'destroy':
			case 'stop':
				var opts = $(cont).data('cycle.opts');
				if (!opts)
					return false;
				cont.cycleStop++; // callbacks look for change
				if (cont.cycleTimeout)
					clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
				$(cont).removeData('cycle.opts');
				if (options == 'destroy')
					destroy(opts);
				return false;
			case 'toggle':
				cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
				checkInstantResume(cont.cyclePause, arg2, cont);
				return false;
			case 'pause':
				cont.cyclePause = 1;
				return false;
			case 'resume':
				cont.cyclePause = 0;
				checkInstantResume(false, arg2, cont);
				return false;
			case 'prev':
			case 'next':
				var opts = $(cont).data('cycle.opts');
				if (!opts) {
					log('options not found, "prev/next" ignored');
					return false;
				}
				$.fn.cycle[options](opts);
				return false;
			default:
				options = {
					fx : options
				};
			};
			return options;
		} else if (options.constructor == Number) {
			// go to the requested slide
			var num = options;
			options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not advance slide');
				return false;
			}
			if (num < 0 || num >= options.elements.length) {
				log('invalid slide index: ' + num);
				return false;
			}
			options.nextSlide = num;
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			if (typeof arg2 == 'string')
				options.oneTimeFx = arg2;
			go(options.elements, options, 1, num >= options.currSlide);
			return false;
		}
		return options;
		
		function checkInstantResume(isPaused, arg2, cont) {
			if (!isPaused && arg2 === true) { // resume now!
				var options = $(cont).data('cycle.opts');
				if (!options) {
					log('options not found, can not resume');
					return false;
				}
				if (cont.cycleTimeout) {
					clearTimeout(cont.cycleTimeout);
					cont.cycleTimeout = 0;
				}
				go(options.elements, options, 1, !options.backwards);
			}
		}
	};
	
	function removeFilter(el, opts) {
		if (!$.support.opacity && opts.cleartype && el.style.filter) {
			try {
				el.style.removeAttribute('filter');
			} catch (smother) {}
			// handle old opera versions
		}
	};
	
	// unbind event handlers
	function destroy(opts) {
		if (opts.next)
			$(opts.next).unbind(opts.prevNextEvent);
		if (opts.prev)
			$(opts.prev).unbind(opts.prevNextEvent);
		
		if (opts.pager || opts.pagerAnchorBuilder)
			$.each(opts.pagerAnchors || [], function () {
				this.unbind().remove();
			});
		opts.pagerAnchors = null;
		if (opts.destroy) // callback
			opts.destroy(opts);
	};
	
	// one-time initialization
	function buildOptions($cont, $slides, els, options, o) {
		// support metadata plugin (v1.0 and v2.0)
		var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
		if (opts.autostop)
			opts.countdown = opts.autostopCount || els.length;
		
		var cont = $cont[0];
		$cont.data('cycle.opts', opts);
		opts.$cont = $cont;
		opts.stopCount = cont.cycleStop;
		opts.elements = els;
		opts.before = opts.before ? [opts.before] : [];
		opts.after = opts.after ? [opts.after] : [];
		
		// push some after callbacks
		if (!$.support.opacity && opts.cleartype)
			opts.after.push(function () {
				removeFilter(this, opts);
			});
		if (opts.continuous)
			opts.after.push(function () {
				go(els, opts, 0, !opts.backwards);
			});
		
		saveOriginalOpts(opts);
		
		// clearType corrections
		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($slides);
		
		// container requires non-static position so that slides can be position within
		if ($cont.css('position') == 'static')
			$cont.css('position', 'relative');
		if (opts.width)
			$cont.width(opts.width);
		if (opts.height && opts.height != 'auto')
			$cont.height(opts.height);
		
		if (opts.startingSlide)
			opts.startingSlide = parseInt(opts.startingSlide);
		else if (opts.backwards)
			opts.startingSlide = els.length - 1;
		
		// if random, mix up the slide array
		if (opts.random) {
			opts.randomMap = [];
			for (var i = 0; i < els.length; i++)
				opts.randomMap.push(i);
			opts.randomMap.sort(function (a, b) {
				return Math.random() - 0.5;
			});
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		} else if (opts.startingSlide >= els.length)
			opts.startingSlide = 0; // catch bogus input
		opts.currSlide = opts.startingSlide || 0;
		var first = opts.startingSlide;
		
		// set position and zIndex on all the slides
		$slides.css({
			position : 'absolute',
			top : 0,
			left : 0
		}).hide().each(function (i) {
			var z;
			if (opts.backwards)
				z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
			else
				z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
			$(this).css('z-index', z)
		});
		
		// make sure first slide is visible
		$(els[first]).css('opacity', 1).show(); // opacity bit needed to handle restart use case
		removeFilter(els[first], opts);
		
		// stretch slides
		if (opts.fit && opts.width)
			$slides.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$slides.height(opts.height);
		
		// stretch container
		var reshape = opts.containerResize && !$cont.innerHeight();
		if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
			var maxw = 0,
			maxh = 0;
			for (var j = 0; j < els.length; j++) {
				var $e = $(els[j]),
				e = $e[0],
				w = $e.outerWidth(),
				h = $e.outerHeight();
				if (!w)
					w = e.offsetWidth || e.width || $e.attr('width');
				if (!h)
					h = e.offsetHeight || e.height || $e.attr('height');
				maxw = w > maxw ? w : maxw;
				maxh = h > maxh ? h : maxh;
			}
			if (maxw > 0 && maxh > 0)
				$cont.css({
					width : maxw + 'px',
					height : maxh + 'px'
				});
		}
		
		if (opts.pause)
			$cont.hover(function () {
				this.cyclePause++;
			}, function () {
				this.cyclePause--;
			});
		
		if (supportMultiTransitions(opts) === false)
			return false;
		
		// apparently a lot of people use image slideshows without height/width attributes on the images.
		// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
		var requeue = false;
		options.requeueAttempts = options.requeueAttempts || 0;
		$slides.each(function () {
			// try to get height/width of each slide
			var $el = $(this);
			this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
			this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);
			
			if ($el.is('img')) {
				// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
				// an image is being downloaded and the markup did not include sizing info (height/width attributes);
				// there seems to be some "default" sizes used in this situation
				var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
				var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
				var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
				var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
				// don't requeue for images that are still loading but have a valid size
				if (loadingIE || loadingFF || loadingOp || loadingOther) {
					if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
						log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
						setTimeout(function () {
							$(o.s, o.c).cycle(options)
						}, opts.requeueTimeout);
						requeue = true;
						return false; // break each loop
					} else {
						log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
					}
				}
			}
			return true;
		});
		
		if (requeue)
			return false;
		
		opts.cssBefore = opts.cssBefore || {};
		opts.cssAfter = opts.cssAfter || {};
		opts.cssFirst = opts.cssFirst || {};
		opts.animIn = opts.animIn || {};
		opts.animOut = opts.animOut || {};
		
		$slides.not(':eq(' + first + ')').css(opts.cssBefore);
		$($slides[first]).css(opts.cssFirst);
		
		if (opts.timeout) {
			opts.timeout = parseInt(opts.timeout);
			// ensure that timeout and speed settings are sane
			if (opts.speed.constructor == String)
				opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
			if (!opts.sync)
				opts.speed = opts.speed / 2;
			
			var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
			while ((opts.timeout - opts.speed) < buffer) // sanitize timeout
				opts.timeout += opts.speed;
		}
		if (opts.easing)
			opts.easeIn = opts.easeOut = opts.easing;
		if (!opts.speedIn)
			opts.speedIn = opts.speed;
		if (!opts.speedOut)
			opts.speedOut = opts.speed;
		
		opts.slideCount = els.length;
		opts.currSlide = opts.lastSlide = first;
		if (opts.random) {
			if (++opts.randomIndex == els.length)
				opts.randomIndex = 0;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else if (opts.backwards)
			opts.nextSlide = opts.startingSlide == 0 ? (els.length - 1) : opts.startingSlide - 1;
		else
			opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
		
		// run transition init fn
		if (!opts.multiFx) {
			var init = $.fn.cycle.transitions[opts.fx];
			if ($.isFunction(init))
				init($cont, $slides, opts);
			else if (opts.fx != 'custom' && !opts.multiFx) {
				log('unknown transition: ' + opts.fx, '; slideshow terminating');
				return false;
			}
		}
		
		// fire artificial events
		var e0 = $slides[first];
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
		
		if (opts.next)
			$(opts.next).bind(opts.prevNextEvent, function () {
				return advance(opts, 1)
			});
		if (opts.prev)
			$(opts.prev).bind(opts.prevNextEvent, function () {
				return advance(opts, 0)
			});
		if (opts.pager || opts.pagerAnchorBuilder)
			buildPager(els, opts);
		
		exposeAddSlide(opts, els);
		
		return opts;
	};
	
	// save off original opts so we can restore after clearing state
	function saveOriginalOpts(opts) {
		opts.original = {
			before : [],
			after : []
		};
		opts.original.cssBefore = $.extend({}, opts.cssBefore);
		opts.original.cssAfter = $.extend({}, opts.cssAfter);
		opts.original.animIn = $.extend({}, opts.animIn);
		opts.original.animOut = $.extend({}, opts.animOut);
		$.each(opts.before, function () {
			opts.original.before.push(this);
		});
		$.each(opts.after, function () {
			opts.original.after.push(this);
		});
	};
	
	function supportMultiTransitions(opts) {
		var i,
		tx,
		txs = $.fn.cycle.transitions;
		// look for multiple effects
		if (opts.fx.indexOf(',') > 0) {
			opts.multiFx = true;
			opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
			// discard any bogus effect names
			for (i = 0; i < opts.fxs.length; i++) {
				var fx = opts.fxs[i];
				tx = txs[fx];
				if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
					log('discarding unknown transition: ', fx);
					opts.fxs.splice(i, 1);
					i--;
				}
			}
			// if we have an empty list then we threw everything away!
			if (!opts.fxs.length) {
				log('No valid transitions named; slideshow terminating.');
				return false;
			}
		} else if (opts.fx == 'all') { // auto-gen the list of transitions
			opts.multiFx = true;
			opts.fxs = [];
			for (p in txs) {
				tx = txs[p];
				if (txs.hasOwnProperty(p) && $.isFunction(tx))
					opts.fxs.push(p);
			}
		}
		if (opts.multiFx && opts.randomizeEffects) {
			// munge the fxs array to make effect selection random
			var r1 = Math.floor(Math.random() * 20) + 30;
			for (i = 0; i < r1; i++) {
				var r2 = Math.floor(Math.random() * opts.fxs.length);
				opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
			}
			debug('randomized fx sequence: ', opts.fxs);
		}
		return true;
	};
	
	// provide a mechanism for adding slides after the slideshow has started
	function exposeAddSlide(opts, els) {
		opts.addSlide = function (newSlide, prepend) {
			var $s = $(newSlide),
			s = $s[0];
			if (!opts.autostopCount)
				opts.countdown++;
			els[prepend ? 'unshift' : 'push'](s);
			if (opts.els)
				opts.els[prepend ? 'unshift' : 'push'](s); // shuffle needs this
			opts.slideCount = els.length;
			
			$s.css('position', 'absolute');
			$s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);
			
			if (prepend) {
				opts.currSlide++;
				opts.nextSlide++;
			}
			
			if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
				clearTypeFix($s);
			
			if (opts.fit && opts.width)
				$s.width(opts.width);
			if (opts.fit && opts.height && opts.height != 'auto')
				$s.height(opts.height);
			s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
			s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
			
			$s.css(opts.cssBefore);
			
			if (opts.pager || opts.pagerAnchorBuilder)
				$.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
			
			if ($.isFunction(opts.onAddSlide))
				opts.onAddSlide($s);
			else
				$s.hide(); // default behavior
		};
	}
	
	// reset internal state; we do this on every pass in order to support multiple effects
	$.fn.cycle.resetState = function (opts, fx) {
		fx = fx || opts.fx;
		opts.before = [];
		opts.after = [];
		opts.cssBefore = $.extend({}, opts.original.cssBefore);
		opts.cssAfter = $.extend({}, opts.original.cssAfter);
		opts.animIn = $.extend({}, opts.original.animIn);
		opts.animOut = $.extend({}, opts.original.animOut);
		opts.fxFn = null;
		$.each(opts.original.before, function () {
			opts.before.push(this);
		});
		$.each(opts.original.after, function () {
			opts.after.push(this);
		});
		
		// re-init
		var init = $.fn.cycle.transitions[fx];
		if ($.isFunction(init))
			init(opts.$cont, $(opts.elements), opts);
	};
	
	// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
	function go(els, opts, manual, fwd) {
		// opts.busy is true if we're in the middle of an animation
		if (manual && opts.busy && opts.manualTrump) {
			// let manual transitions requests trump active ones
			debug('manualTrump in go(), stopping active transition');
			$(els).stop(true, true);
			opts.busy = 0;
		}
		// don't begin another timeout-based transition if there is one active
		if (opts.busy) {
			debug('transition active, ignoring new tx request');
			return;
		}
		
		var p = opts.$cont[0],
		curr = els[opts.currSlide],
		next = els[opts.nextSlide];
		
		// stop cycling if we have an outstanding stop request
		if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
			return;
		
		// check to see if we should stop cycling based on autostop options
		if (!manual && !p.cyclePause && !opts.bounce &&
			((opts.autostop && (--opts.countdown <= 0)) ||
				(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
			if (opts.end)
				opts.end(opts);
			return;
		}
		
		// if slideshow is paused, only transition on a manual trigger
		var changed = false;
		if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
			changed = true;
			var fx = opts.fx;
			// keep trying to get the slide size if we don't have it yet
			curr.cycleH = curr.cycleH || $(curr).height();
			curr.cycleW = curr.cycleW || $(curr).width();
			next.cycleH = next.cycleH || $(next).height();
			next.cycleW = next.cycleW || $(next).width();
			
			// support multiple transition types
			if (opts.multiFx) {
				if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length)
					opts.lastFx = 0;
				fx = opts.fxs[opts.lastFx];
				opts.currFx = fx;
			}
			
			// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
			if (opts.oneTimeFx) {
				fx = opts.oneTimeFx;
				opts.oneTimeFx = null;
			}
			
			$.fn.cycle.resetState(opts, fx);
			
			// run the before callbacks
			if (opts.before.length)
				$.each(opts.before, function (i, o) {
					if (p.cycleStop != opts.stopCount)
						return;
					o.apply(next, [curr, next, opts, fwd]);
				});
			
			// stage the after callacks
			var after = function () {
				opts.busy = 0;
				$.each(opts.after, function (i, o) {
					if (p.cycleStop != opts.stopCount)
						return;
					o.apply(next, [curr, next, opts, fwd]);
				});
			};
			
			debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
			
			// get ready to perform the transition
			opts.busy = 1;
			if (opts.fxFn) // fx function provided?
				opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
			else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
				$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
			else
				$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		}
		
		if (changed || opts.nextSlide == opts.currSlide) {
			// calculate the next slide
			opts.lastSlide = opts.currSlide;
			if (opts.random) {
				opts.currSlide = opts.nextSlide;
				if (++opts.randomIndex == els.length)
					opts.randomIndex = 0;
				opts.nextSlide = opts.randomMap[opts.randomIndex];
				if (opts.nextSlide == opts.currSlide)
					opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
			} else if (opts.backwards) {
				var roll = (opts.nextSlide - 1) < 0;
				if (roll && opts.bounce) {
					opts.backwards = !opts.backwards;
					opts.nextSlide = 1;
					opts.currSlide = 0;
				} else {
					opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
					opts.currSlide = roll ? 0 : opts.nextSlide + 1;
				}
			} else { // sequence
				var roll = (opts.nextSlide + 1) == els.length;
				if (roll && opts.bounce) {
					opts.backwards = !opts.backwards;
					opts.nextSlide = els.length - 2;
					opts.currSlide = els.length - 1;
				} else {
					opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
					opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
				}
			}
		}
		if (changed && opts.pager)
			opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
		
		// stage the next transition
		var ms = 0;
		if (opts.timeout && !opts.continuous)
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function () {
					go(els, opts, 0, !opts.backwards)
				}, ms);
	};
	
	// invoked after transition
	$.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
		$(pager).each(function () {
			$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
		});
	};
	
	// calculate timeout value for current transition
	function getTimeout(curr, next, opts, fwd) {
		if (opts.timeoutFn) {
			// call user provided calc fn
			var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
			while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
				t += opts.speed;
			debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
			if (t !== false)
				return t;
		}
		return opts.timeout;
	};
	
	// expose next/prev function, caller must pass in state
	$.fn.cycle.next = function (opts) {
		advance(opts, 1);
	};
	$.fn.cycle.prev = function (opts) {
		advance(opts, 0);
	};
	
	// advance slide forward or back
	function advance(opts, moveForward) {
		var val = moveForward ? 1 : -1;
		var els = opts.elements;
		var p = opts.$cont[0],
		timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		if (opts.random && val < 0) {
			// move back to the previously display slide
			opts.randomIndex--;
			if (--opts.randomIndex == -2)
				opts.randomIndex = els.length - 2;
			else if (opts.randomIndex == -1)
				opts.randomIndex = els.length - 1;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else if (opts.random) {
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else {
			opts.nextSlide = opts.currSlide + val;
			if (opts.nextSlide < 0) {
				if (opts.nowrap)
					return false;
				opts.nextSlide = els.length - 1;
			} else if (opts.nextSlide >= els.length) {
				if (opts.nowrap)
					return false;
				opts.nextSlide = 0;
			}
		}
		
		var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
		if ($.isFunction(cb))
			cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
		go(els, opts, 1, moveForward);
		return false;
	};
	
	function buildPager(els, opts) {
		var $p = $(opts.pager);
		$.each(els, function (i, o) {
			$.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
		});
		opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
	};
	
	$.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
		var a;
		if ($.isFunction(opts.pagerAnchorBuilder)) {
			a = opts.pagerAnchorBuilder(i, el);
			debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a);
		} else
			a = '<a href="#">' + (i + 1) + '</a>';
		
		if (!a)
			return;
		var $a = $(a);
		// don't reparent if anchor is in the dom
		if ($a.parents('body').length === 0) {
			var arr = [];
			if ($p.length > 1) {
				$p.each(function () {
					var $clone = $a.clone(true);
					$(this).append($clone);
					arr.push($clone[0]);
				});
				$a = $(arr);
			} else {
				$a.appendTo($p);
			}
		}
		
		opts.pagerAnchors = opts.pagerAnchors || [];
		opts.pagerAnchors.push($a);
		$a.bind(opts.pagerEvent, function (e) {
			e.preventDefault();
			opts.nextSlide = i;
			var p = opts.$cont[0],
			timeout = p.cycleTimeout;
			if (timeout) {
				clearTimeout(timeout);
				p.cycleTimeout = 0;
			}
			var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
			if ($.isFunction(cb))
				cb(opts.nextSlide, els[opts.nextSlide]);
			go(els, opts, 1, opts.currSlide < i); // trigger the trans
			//		return false; // <== allow bubble
		});
		
		if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
			$a.bind('click.cycle', function () {
				return false;
			}); // suppress click
		
		if (opts.pauseOnPagerHover)
			$a.hover(function () {
				opts.$cont[0].cyclePause++;
			}, function () {
				opts.$cont[0].cyclePause--;
			});
	};
	
	// helper fn to calculate the number of slides between the current and the next
	$.fn.cycle.hopsFromLast = function (opts, fwd) {
		var hops,
		l = opts.lastSlide,
		c = opts.currSlide;
		if (fwd)
			hops = c > l ? c - l : opts.slideCount - l;
		else
			hops = c < l ? l - c : l + opts.slideCount - c;
		return hops;
	};
	
	// fix clearType problems in ie6 by setting an explicit bg color
	// (otherwise text slides look horrible during a fade transition)
	function clearTypeFix($slides) {
		debug('applying clearType background-color hack');
		function hex(s) {
			s = parseInt(s).toString(16);
			return s.length < 2 ? '0' + s : s;
		};
		function getBg(e) {
			for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
				var v = $.css(e, 'background-color');
				if (v && v.indexOf('rgb') >= 0) {
					var rgb = v.match(/\d+/g);
					return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
				}
				if (v && v != 'transparent')
					return v;
			}
			return '#ffffff';
		};
		$slides.each(function () {
			$(this).css('background-color', getBg(this));
		});
	};
	
	// reset common props before the next transition
	$.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
		$(opts.elements).not(curr).hide();
		if (typeof opts.cssBefore.opacity == 'undefined')
			opts.cssBefore.opacity = 1;
		opts.cssBefore.display = 'block';
		if (opts.slideResize && w !== false && next.cycleW > 0)
			opts.cssBefore.width = next.cycleW;
		if (opts.slideResize && h !== false && next.cycleH > 0)
			opts.cssBefore.height = next.cycleH;
		opts.cssAfter = opts.cssAfter || {};
		opts.cssAfter.display = 'none';
		$(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
		$(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
	};
	
	// the actual fn for effecting a transition
	$.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
		var $l = $(curr),
		$n = $(next);
		var speedIn = opts.speedIn,
		speedOut = opts.speedOut,
		easeIn = opts.easeIn,
		easeOut = opts.easeOut;
		$n.css(opts.cssBefore);
		if (speedOverride) {
			if (typeof speedOverride == 'number')
				speedIn = speedOut = speedOverride;
			else
				speedIn = speedOut = 1;
			easeIn = easeOut = null;
		}
		var fn = function () {
			$n.animate(opts.animIn, speedIn, easeIn, function () {
				cb();
			});
		};
		$l.animate(opts.animOut, speedOut, easeOut, function () {
			$l.css(opts.cssAfter);
			if (!opts.sync)
				fn();
		});
		if (opts.sync)
			fn();
	};
	
	// transition definitions - only fade is defined here, transition pack defines the rest
	$.fn.cycle.transitions = {
		fade : function ($cont, $slides, opts) {
			$slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
			opts.before.push(function (curr, next, opts) {
				$.fn.cycle.commonReset(curr, next, opts);
				opts.cssBefore.opacity = 0;
			});
			opts.animIn = {
				opacity : 1
			};
			opts.animOut = {
				opacity : 0
			};
			opts.cssBefore = {
				top : 0,
				left : 0
			};
		}
	};
	
	$.fn.cycle.ver = function () {
		return ver;
	};
	
	// override these globally if you like (they are all optional)
	$.fn.cycle.defaults = {
		activePagerClass : 'activeSlide', // class name used for the active pager link
		after : null, // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
		allowPagerClickBubble : false, // allows or prevents click event on pager anchors from bubbling
		animIn : null, // properties that define how the slide animates in
		animOut : null, // properties that define how the slide animates out
		autostop : 0, // true to end slideshow after X transitions (where X == slide count)
		autostopCount : 0, // number of transitions (optionally used with autostop to define X)
		backwards : false, // true to start slideshow at last slide and move backwards through the stack
		before : null, // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
		cleartype : !$.support.opacity, // true if clearType corrections should be applied (for IE)
		cleartypeNoBg : false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
		containerResize : 1, // resize container to fit largest slide
		continuous : 0, // true to start next transition immediately after current one completes
		cssAfter : null, // properties that defined the state of the slide after transitioning out
		cssBefore : null, // properties that define the initial state of the slide before transitioning in
		delay : 0, // additional delay (in ms) for first transition (hint: can be negative)
		easeIn : null, // easing for "in" transition
		easeOut : null, // easing for "out" transition
		easing : null, // easing method for both in and out transitions
		end : null, // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
		fastOnEvent : 0, // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
		fit : 0, // force slides to fit container
		fx : 'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
		fxFn : null, // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
		height : 'auto', // container height
		manualTrump : true, // causes manual transition to stop an active transition instead of being ignored
		next : null, // selector for element to use as event trigger for next slide
		nowrap : 0, // true to prevent slideshow from wrapping
		onPagerEvent : null, // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
		onPrevNextEvent : null, // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
		pager : null, // selector for element to use as pager container
		pagerAnchorBuilder : null, // callback fn for building anchor links:  function(index, DOMelement)
		pagerEvent : 'click.cycle', // name of event which drives the pager navigation
		pause : 0, // true to enable "pause on hover"
		pauseOnPagerHover : 0, // true to pause when hovering over pager link
		prev : null, // selector for element to use as event trigger for previous slide
		prevNextEvent : 'click.cycle', // event which drives the manual transition to the previous or next slide
		random : 0, // true for random, false for sequence (not applicable to shuffle fx)
		randomizeEffects : 1, // valid when multiple effects are used; true to make the effect sequence random
		requeueOnImageNotLoaded : true, // requeue the slideshow if any image slides are not yet loaded
		requeueTimeout : 250, // ms delay for requeue
		rev : 0, // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
		shuffle : null, // coords for shuffle animation, ex: { top:15, left: 200 }
		slideExpr : null, // expression for selecting slides (if something other than all children is required)
		slideResize : 1, // force slide width/height to fixed size before every transition
		speed : 1000, // speed of the transition (any valid fx speed value)
		speedIn : null, // speed of the 'in' transition
		speedOut : null, // speed of the 'out' transition
		startingSlide : 0, // zero-based index of the first slide to be displayed
		sync : 1, // true if in/out transitions should occur simultaneously
		timeout : 4000, // milliseconds between slide transitions (0 to disable auto advance)
		timeoutFn : null, // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
		updateActivePagerLink : null // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
	};
	
})(jQuery);

/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
	
	//
	// These functions define slide initialization and properties for the named
	// transitions. To save file size feel free to remove any of these that you
	// don't need.
	//
	$.fn.cycle.transitions.none = function ($cont, $slides, opts) {
		opts.fxFn = function (curr, next, opts, after) {
			$(next).show();
			$(curr).hide();
			after();
		};
	};
	
	// not a cross-fade, fadeout only fades out the top slide
	$.fn.cycle.transitions.fadeout = function ($cont, $slides, opts) {
		$slides.not(':eq(' + opts.currSlide + ')').css({
			display : 'block',
			'opacity' : 1
		});
		opts.before.push(function (curr, next, opts, w, h, rev) {
			$(curr).css('zIndex', opts.slideCount + (!rev === true ? 1 : 0));
			$(next).css('zIndex', opts.slideCount + (!rev === true ? 0 : 1));
		});
		opts.animIn.opacity = 1;
		opts.animOut.opacity = 0;
		opts.cssBefore.opacity = 1;
		opts.cssBefore.display = 'block';
		opts.cssAfter.zIndex = 0;
	};
	
	// scrollUp/Down/Left/Right
	$.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var h = $cont.height();
		opts.cssBefore.top = h;
		opts.cssBefore.left = 0;
		opts.cssFirst.top = 0;
		opts.animIn.top = 0;
		opts.animOut.top = -h;
	};
	$.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var h = $cont.height();
		opts.cssFirst.top = 0;
		opts.cssBefore.top = -h;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.top = h;
	};
	$.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var w = $cont.width();
		opts.cssFirst.left = 0;
		opts.cssBefore.left = w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = 0 - w;
	};
	$.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var w = $cont.width();
		opts.cssFirst.left = 0;
		opts.cssBefore.left = -w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = w;
	};
	$.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden').width();
		opts.before.push(function (curr, next, opts, fwd) {
			if (opts.rev)
				fwd = !fwd;
			$.fn.cycle.commonReset(curr, next, opts);
			opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
			opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
		});
		opts.cssFirst.left = 0;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.top = 0;
	};
	$.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push(function (curr, next, opts, fwd) {
			if (opts.rev)
				fwd = !fwd;
			$.fn.cycle.commonReset(curr, next, opts);
			opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
			opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.left = 0;
	};
	
	// slideX/slideY
	$.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$(opts.elements).not(curr).hide();
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.animIn.width = next.cycleW;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
		opts.animIn.width = 'show';
		opts.animOut.width = 0;
	};
	$.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$(opts.elements).not(curr).hide();
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.animIn.height = next.cycleH;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.height = 0;
		opts.animIn.height = 'show';
		opts.animOut.height = 0;
	};
	
	// shuffle
	$.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
		var i,
		w = $cont.css('overflow', 'visible').width();
		$slides.css({
			left : 0,
			top : 0
		});
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
		});
		// only adjust speed once!
		if (!opts.speedAdjusted) {
			opts.speed = opts.speed / 2; // shuffle has 2 transitions
			opts.speedAdjusted = true;
		}
		opts.random = 0;
		opts.shuffle = opts.shuffle || {
			left : -w,
			top : 15
		};
		opts.els = [];
		for (i = 0; i < $slides.length; i++)
			opts.els.push($slides[i]);
		
		for (i = 0; i < opts.currSlide; i++)
			opts.els.push(opts.els.shift());
		
		// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
		opts.fxFn = function (curr, next, opts, cb, fwd) {
			if (opts.rev)
				fwd = !fwd;
			var $el = fwd ? $(curr) : $(next);
			$(next).css(opts.cssBefore);
			var count = opts.slideCount;
			$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
				var hops = $.fn.cycle.hopsFromLast(opts, fwd);
				for (var k = 0; k < hops; k++)
					fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
				if (fwd) {
					for (var i = 0, len = opts.els.length; i < len; i++)
						$(opts.els[i]).css('z-index', len - i + count);
				} else {
					var z = $(curr).css('z-index');
					$el.css('z-index', parseInt(z) + 1 + count);
				}
				$el.animate({
					left : 0,
					top : 0
				}, opts.speedOut, opts.easeOut, function () {
					$(fwd ? this : curr).hide();
					if (cb)
						cb();
				});
			});
		};
		$.extend(opts.cssBefore, {
			display : 'block',
			opacity : 1,
			top : 0,
			left : 0
		});
	};
	
	// turnUp/Down/Left/Right
	$.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.cssBefore.top = next.cycleH;
			opts.animIn.height = next.cycleH;
			opts.animOut.width = next.cycleW;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.cssBefore.height = 0;
		opts.animIn.top = 0;
		opts.animOut.height = 0;
	};
	$.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.height = 0;
		opts.animOut.height = 0;
	};
	$.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.cssBefore.left = next.cycleW;
			opts.animIn.width = next.cycleW;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
		opts.animIn.left = 0;
		opts.animOut.width = 0;
	};
	$.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.animIn.width = next.cycleW;
			opts.animOut.left = curr.cycleW;
		});
		$.extend(opts.cssBefore, {
			top : 0,
			left : 0,
			width : 0
		});
		opts.animIn.left = 0;
		opts.animOut.width = 0;
	};
	
	// zoom
	$.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, false, true);
			opts.cssBefore.top = next.cycleH / 2;
			opts.cssBefore.left = next.cycleW / 2;
			$.extend(opts.animIn, {
				top : 0,
				left : 0,
				width : next.cycleW,
				height : next.cycleH
			});
			$.extend(opts.animOut, {
				width : 0,
				height : 0,
				top : curr.cycleH / 2,
				left : curr.cycleW / 2
			});
		});
		opts.cssFirst.top = 0;
		opts.cssFirst.left = 0;
		opts.cssBefore.width = 0;
		opts.cssBefore.height = 0;
	};
	
	// fadeZoom
	$.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, false);
			opts.cssBefore.left = next.cycleW / 2;
			opts.cssBefore.top = next.cycleH / 2;
			$.extend(opts.animIn, {
				top : 0,
				left : 0,
				width : next.cycleW,
				height : next.cycleH
			});
		});
		opts.cssBefore.width = 0;
		opts.cssBefore.height = 0;
		opts.animOut.opacity = 0;
	};
	
	// blindX
	$.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
		var w = $cont.css('overflow', 'hidden').width();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.width = next.cycleW;
			opts.animOut.left = curr.cycleW;
		});
		opts.cssBefore.left = w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = w;
	};
	// blindY
	$.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
		var h = $cont.css('overflow', 'hidden').height();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssBefore.top = h;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.top = h;
	};
	// blindZ
	$.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
		var h = $cont.css('overflow', 'hidden').height();
		var w = $cont.width();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssBefore.top = h;
		opts.cssBefore.left = w;
		opts.animIn.top = 0;
		opts.animIn.left = 0;
		opts.animOut.top = h;
		opts.animOut.left = w;
	};
	
	// growX - grow horizontally from centered 0 width
	$.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.cssBefore.left = this.cycleW / 2;
			opts.animIn.left = 0;
			opts.animIn.width = this.cycleW;
			opts.animOut.left = 0;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
	};
	// growY - grow vertically from centered 0 height
	$.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.cssBefore.top = this.cycleH / 2;
			opts.animIn.top = 0;
			opts.animIn.height = this.cycleH;
			opts.animOut.top = 0;
		});
		opts.cssBefore.height = 0;
		opts.cssBefore.left = 0;
	};
	
	// curtainX - squeeze in both edges horizontally
	$.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true, true);
			opts.cssBefore.left = next.cycleW / 2;
			opts.animIn.left = 0;
			opts.animIn.width = this.cycleW;
			opts.animOut.left = curr.cycleW / 2;
			opts.animOut.width = 0;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
	};
	// curtainY - squeeze in both edges vertically
	$.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false, true);
			opts.cssBefore.top = next.cycleH / 2;
			opts.animIn.top = 0;
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH / 2;
			opts.animOut.height = 0;
		});
		opts.cssBefore.height = 0;
		opts.cssBefore.left = 0;
	};
	
	// cover - curr slide covered by next slide
	$.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
		var d = opts.direction || 'left';
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			if (d == 'right')
				opts.cssBefore.left = -w;
			else if (d == 'up')
				opts.cssBefore.top = h;
			else if (d == 'down')
				opts.cssBefore.top = -h;
			else
				opts.cssBefore.left = w;
		});
		opts.animIn.left = 0;
		opts.animIn.top = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.left = 0;
	};
	
	// uncover - curr slide moves off next slide
	$.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
		var d = opts.direction || 'left';
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
			if (d == 'right')
				opts.animOut.left = w;
			else if (d == 'up')
				opts.animOut.top = -h;
			else if (d == 'down')
				opts.animOut.top = h;
			else
				opts.animOut.left = -w;
		});
		opts.animIn.left = 0;
		opts.animIn.top = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.left = 0;
	};
	
	// toss - move top slide and fade away
	$.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
		var w = $cont.css('overflow', 'visible').width();
		var h = $cont.height();
		opts.before.push(function (curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
			// provide default toss settings if animOut not provided
			if (!opts.animOut.left && !opts.animOut.top)
				$.extend(opts.animOut, {
					left : w * 2,
					top : -h / 2,
					opacity : 0
				});
			else
				opts.animOut.opacity = 0;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
	};
	
	// wipe - clip animation
	$.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.cssBefore = opts.cssBefore || {};
		var clip;
		if (opts.clip) {
			if (/l2r/.test(opts.clip))
				clip = 'rect(0px 0px ' + h + 'px 0px)';
			else if (/r2l/.test(opts.clip))
				clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
			else if (/t2b/.test(opts.clip))
				clip = 'rect(0px ' + w + 'px 0px 0px)';
			else if (/b2t/.test(opts.clip))
				clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
			else if (/zoom/.test(opts.clip)) {
				var top = parseInt(h / 2);
				var left = parseInt(w / 2);
				clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
			}
		}
		
		opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';
		
		var d = opts.cssBefore.clip.match(/(\d+)/g);
		var t = parseInt(d[0]),
		r = parseInt(d[1]),
		b = parseInt(d[2]),
		l = parseInt(d[3]);
		
		opts.before.push(function (curr, next, opts) {
			if (curr == next)
				return;
			var $curr = $(curr),
			$next = $(next);
			$.fn.cycle.commonReset(curr, next, opts, true, true, false);
			opts.cssAfter.display = 'block';
			
			var step = 1,
			count = parseInt((opts.speedIn / 13)) - 1;
			(function f() {
				var tt = t ? t - parseInt(step * (t / count)) : 0;
				var ll = l ? l - parseInt(step * (l / count)) : 0;
				var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
				var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
				$next.css({
					clip : 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)'
				});
				(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
			})();
		});
		$.extend(opts.cssBefore, {
			display : 'block',
			opacity : 1,
			top : 0,
			left : 0
		});
		opts.animIn = {
			left : 0
		};
		opts.animOut = {
			left : 0
		};
	};
	
})(jQuery);

/*
 * jQuery expanding textarea
 *
 * https://github.com/ferama/jquery-expanding-textarea
 *
 * Adapted for jQuery from dojo TextArea widget
 *
 * @author Marco Ferragina
 * @version 1.00
 */

(function ($) {
	
	$.fn.expandingTextArea = function () {
		return this.filter('textarea').each(function () {
			var textarea = this;
			var $this = $(this);
			$this.css({
				'overflow-x' : 'auto',
				'overflow-y' : 'hidden',
				'box-sizing' : 'border-box',
				'-moz-box-sizing' : 'border-box',
				'-webkit-box-sizing' : 'border-box',
				'resize' : 'none'
			});
			var _busyResizing = false;
			var _needsHelpShrinking = $.browser.mozilla || $.browser.webkit;
			var _setTimoutHandle;
			
			var gcs;
			
			if ($.browser.webkit) {
				gcs = function (node) {
					var s;
					if (node.nodeType == 1) {
						var dv = node.ownerDocument.defaultView;
						s = dv.getComputedStyle(node, null);
						if (!s && node.style) {
							node.style.display = "";
							s = dv.getComputedStyle(node, null);
						}
					}
					return s || {};
				};
			} else if ($.browser.msie) {
				gcs = function (node) {
					// IE (as of 7) doesn't expose Element like sane browsers
					return node.nodeType == 1 /* ELEMENT_NODE*/
					 ? node.currentStyle : {};
				};
			} else {
				gcs = function (node) {
					return node.nodeType == 1 ?
					node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
				};
			}
			
			var px;
			if (!$.browser.msie) {
				px = function (element, value) {
					return parseFloat(value) || 0;
				};
			} else {
				px = function (element, avalue) {
					if (!avalue) {
						return 0;
					}
					// on IE7, medium is usually 4 pixels
					if (avalue == "medium") {
						return 4;
					}
					// style values can be floats, client code may
					// want to round this value for integer pixels.
					if (avalue.slice && avalue.slice(-2) == 'px') {
						return parseFloat(avalue);
					}
					with (element) {
						var sLeft = style.left;
						var rsLeft = runtimeStyle.left;
						runtimeStyle.left = currentStyle.left;
						try {
							// 'avalue' may be incompatible with style.left, which can cause IE to throw
							// this has been observed for border widths using "thin", "medium", "thick" constants
							// those particular constants could be trapped by a lookup
							// but perhaps there are more
							style.left = avalue;
							avalue = style.pixelLeft;
						} catch (e) {
							avalue = 0;
						}
						style.left = sLeft;
						runtimeStyle.left = rsLeft;
					}
					return avalue;
				};
			}
			
			function _getHeight() {
				var newH = textarea.scrollHeight;
				if ($.browser.msie) {
					newH += textarea.offsetHeight - textarea.clientHeight;
				} else if ($.browser.webkit) {
					newH += getBorderExtents(textarea).h;
				} else if ($.browser.mozilla) {
					newH += textarea.offsetHeight - textarea.clientHeight;
				} else {
					newH += getPadBorderExtents(textarea).h;
				}
				return newH;
			}
			function getPadExtents(n, computedStyle) {
				var
				s = computedStyle || gcs(n),
				l = px(n, s.paddingLeft),
				t = px(n, s.paddingTop);
				return {
					l : l,
					t : t,
					w : l + px(n, s.paddingRight),
					h : t + px(n, s.paddingBottom)
				};
				
			}
			function getBorderExtents(n, computedStyle) {
				var
				ne = "none",
				s = computedStyle || gcs(n),
				bl = (s.borderLeftStyle != ne ? px(n, s.borderLeftWidth) : 0),
				bt = (s.borderTopStyle != ne ? px(n, s.borderTopWidth) : 0);
				return {
					l : bl,
					t : bt,
					w : bl + (s.borderRightStyle != ne ? px(n, s.borderRightWidth) : 0),
					h : bt + (s.borderBottomStyle != ne ? px(n, s.borderBottomWidth) : 0)
				};
			}
			function getPadBorderExtents(n, computedStyle) {
				var
				s = computedStyle || gcs(n),
				p = getPadExtents(n, s),
				b = getBorderExtents(n, s);
				return {
					l : p.l + b.l,
					t : p.t + b.t,
					w : p.w + b.w,
					h : p.h + b.h
				};
			}
			
			function _shrink() {
				_setTimoutHandle = null;
				if (_needsHelpShrinking && !_busyResizing) {
					_busyResizing = true;
					var empty = false;
					if (textarea.value == '') {
						textarea.value = ' '; // prevent collapse all the way back to 0
						empty = true;
					}
					var scrollHeight = textarea.scrollHeight;
					if (!scrollHeight) {
						_estimateHeight();
					} else {
						var oldPadding = $this.css('padding-bottom');
						var newPadding = getPadExtents(textarea);
						newPadding = newPadding.h - newPadding.t;
						$this.css('padding-bottom', newPadding + 1 + "px");
						var newH = _getHeight() - 1 + "px";
						if ($this.css('max-height') != newH) {
							$this.css('padding-bottom', newPadding + scrollHeight + "px");
							textarea.scrollTop = 0;
							$this.css('max-height', _getHeight() - scrollHeight + "px");
						}
						$this.css('padding-bottom', oldPadding);
					}
					if (empty) {
						textarea.value = '';
					}
					_busyResizing = false;
				}
			}
			
			function _estimateHeight() {
				$this.css({
					'max-height' : '',
					'height' : 'auto'
				});
				textarea.rows = (textarea.value.match(/\n/g) || []).length + 1;
			}
			
			function _onInput() {
				if (_busyResizing) {
					return;
				}
				_busyResizing = true;
				if (textarea.scrollHeight && textarea.offsetHeight && textarea.clientHeight) {
					var newH = _getHeight() + "px";
					if ($this.css('height') != newH) {
						$this.css('height', newH);
						$this.css('maxHeight', newH);
					}
					if (_needsHelpShrinking) {
						if (_setTimoutHandle) {
							clearTimeout(_setTimoutHandle);
						}
						_setTimoutHandle = setTimeout(_shrink, 0);
					}
				} else {
					_estimateHeight();
				}
				_busyResizing = false;
			}
			
			_setTimoutHandle = setTimeout(_onInput, 0);
			$this.unbind('.expandingTextarea')
			.bind('keyup.expandingTextarea', _onInput)
			.bind('keydown.expandingTextarea', _onInput)
			.bind('change.expandingTextarea', _onInput)
			.bind('scroll.expandingTextarea', _onInput)
			.bind('resize.expandingTextarea', _onInput)
			.bind('focus.expandingTextarea', _onInput)
			.bind('blur.expandingTextarea', _onInput)
			.bind('cut.expandingTextarea', _onInput)
			.bind('paste.expandingTextarea', _onInput);
		});
	};
	
})(jQuery);

/*!
 * jQuery UI 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function (c, j) {
	function k(a, b) {
		var d = a.nodeName.toLowerCase();
		if ("area" === d) {
			b = a.parentNode;
			d = b.name;
			if (!a.href || !d || b.nodeName.toLowerCase() !== "map")
				return false;
			a = c("img[usemap=#" + d + "]")[0];
			return !!a && l(a)
		}
		return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a)
	}
	function l(a) {
		return !c(a).parents().andSelf().filter(function () {
			return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
		}).length
	}
	c.ui = c.ui || {};
	if (!c.ui.version) {
		c.extend(c.ui, {
			version : "1.8.14",
			keyCode : {
				ALT : 18,
				BACKSPACE : 8,
				CAPS_LOCK : 20,
				COMMA : 188,
				COMMAND : 91,
				COMMAND_LEFT : 91,
				COMMAND_RIGHT : 93,
				CONTROL : 17,
				DELETE : 46,
				DOWN : 40,
				END : 35,
				ENTER : 13,
				ESCAPE : 27,
				HOME : 36,
				INSERT : 45,
				LEFT : 37,
				MENU : 93,
				NUMPAD_ADD : 107,
				NUMPAD_DECIMAL : 110,
				NUMPAD_DIVIDE : 111,
				NUMPAD_ENTER : 108,
				NUMPAD_MULTIPLY : 106,
				NUMPAD_SUBTRACT : 109,
				PAGE_DOWN : 34,
				PAGE_UP : 33,
				PERIOD : 190,
				RIGHT : 39,
				SHIFT : 16,
				SPACE : 32,
				TAB : 9,
				UP : 38,
				WINDOWS : 91
			}
		});
		c.fn.extend({
			_focus : c.fn.focus,
			focus : function (a, b) {
				return typeof a === "number" ? this.each(function () {
					var d = this;
					setTimeout(function () {
						c(d).focus();
						b && b.call(d)
					}, a)
				}) : this._focus.apply(this, arguments)
			},
			scrollParent : function () {
				var a;
				a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
						return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
					}).eq(0) : this.parents().filter(function () {
						return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this,
								"overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
					}).eq(0);
				return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
			},
			zIndex : function (a) {
				if (a !== j)
					return this.css("zIndex", a);
				if (this.length) {
					a = c(this[0]);
					for (var b; a.length && a[0] !== document; ) {
						b = a.css("position");
						if (b === "absolute" || b === "relative" || b === "fixed") {
							b = parseInt(a.css("zIndex"), 10);
							if (!isNaN(b) && b !== 0)
								return b
						}
						a = a.parent()
					}
				}
				return 0
			},
			disableSelection : function () {
				return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection",
					function (a) {
					a.preventDefault()
				})
			},
			enableSelection : function () {
				return this.unbind(".ui-disableSelection")
			}
		});
		c.each(["Width", "Height"], function (a, b) {
			function d(f, g, m, n) {
				c.each(e, function () {
					g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
					if (m)
						g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
					if (n)
						g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
				});
				return g
			}
			var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
			h = b.toLowerCase(),
			i = {
				innerWidth : c.fn.innerWidth,
				innerHeight : c.fn.innerHeight,
				outerWidth : c.fn.outerWidth,
				outerHeight : c.fn.outerHeight
			};
			c.fn["inner" + b] = function (f) {
				if (f === j)
					return i["inner" + b].call(this);
				return this.each(function () {
					c(this).css(h, d(this, f) + "px")
				})
			};
			c.fn["outer" + b] = function (f, g) {
				if (typeof f !== "number")
					return i["outer" + b].call(this, f);
				return this.each(function () {
					c(this).css(h, d(this, f, true, g) + "px")
				})
			}
		});
		c.extend(c.expr[":"], {
			data : function (a, b, d) {
				return !!c.data(a, d[3])
			},
			focusable : function (a) {
				return k(a, !isNaN(c.attr(a, "tabindex")))
			},
			tabbable : function (a) {
				var b = c.attr(a, "tabindex"),
				d = isNaN(b);
				return (d || b >= 0) && k(a, !d)
			}
		});
		c(function () {
			var a = document.body,
			b = a.appendChild(b = document.createElement("div"));
			c.extend(b.style, {
				minHeight : "100px",
				height : "auto",
				padding : 0,
				borderWidth : 0
			});
			c.support.minHeight = b.offsetHeight === 100;
			c.support.selectstart = "onselectstart" in b;
			a.removeChild(b).style.display = "none"
		});
		c.extend(c.ui, {
			plugin : {
				add : function (a, b, d) {
					a = c.ui[a].prototype;
					for (var e in d) {
						a.plugins[e] = a.plugins[e] || [];
						a.plugins[e].push([b, d[e]])
					}
				},
				call : function (a, b, d) {
					if ((b = a.plugins[b]) && a.element[0].parentNode)
						for (var e =
								0; e < b.length; e++)
							a.options[b[e][0]] && b[e][1].apply(a.element, d)
				}
			},
			contains : function (a, b) {
				return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
			},
			hasScroll : function (a, b) {
				if (c(a).css("overflow") === "hidden")
					return false;
				b = b && b === "left" ? "scrollLeft" : "scrollTop";
				var d = false;
				if (a[b] > 0)
					return true;
				a[b] = 1;
				d = a[b] > 0;
				a[b] = 0;
				return d
			},
			isOverAxis : function (a, b, d) {
				return a > b && a < b + d
			},
			isOver : function (a, b, d, e, h, i) {
				return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
			}
		})
	}
})(jQuery); ;
/*
 * jQuery UI Datepicker 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function (d, C) {
	function M() {
		this.debug = false;
		this._curInst = null;
		this._keyEvent = false;
		this._disabledInputs = [];
		this._inDialog = this._datepickerShowing = false;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass =
			"ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText : "Done",
			prevText : "Prev",
			nextText : "Next",
			currentText : "Today",
			monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin : ["Su",
				"Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader : "Wk",
			dateFormat : "mm/dd/yy",
			firstDay : 0,
			isRTL : false,
			showMonthAfterYear : false,
			yearSuffix : ""
		};
		this._defaults = {
			showOn : "focus",
			showAnim : "fadeIn",
			showOptions : {},
			defaultDate : null,
			appendText : "",
			buttonText : "...",
			buttonImage : "",
			buttonImageOnly : false,
			hideIfNoPrevNext : false,
			navigationAsDateFormat : false,
			gotoCurrent : false,
			changeMonth : false,
			changeYear : false,
			yearRange : "c-10:c+10",
			showOtherMonths : false,
			selectOtherMonths : false,
			showWeek : false,
			calculateWeek : this.iso8601Week,
			shortYearCutoff : "+10",
			minDate : null,
			maxDate : null,
			duration : "fast",
			beforeShowDay : null,
			beforeShow : null,
			onSelect : null,
			onChangeMonthYear : null,
			onClose : null,
			numberOfMonths : 1,
			showCurrentAtPos : 0,
			stepMonths : 1,
			stepBigMonths : 12,
			altField : "",
			altFormat : "",
			constrainInput : true,
			showButtonPanel : false,
			autoSize : false
		};
		d.extend(this._defaults, this.regional[""]);
		this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
	}
	function N(a) {
		return a.bind("mouseout", function (b) {
			b =
				d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
			b.length && b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
		}).bind("mouseover", function (b) {
			b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
			if (!(d.datepicker._isDisabledDatepicker(J.inline ? a.parent()[0] : J.input[0]) || !b.length)) {
				b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				b.addClass("ui-state-hover");
				b.hasClass("ui-datepicker-prev") && b.addClass("ui-datepicker-prev-hover");
				b.hasClass("ui-datepicker-next") && b.addClass("ui-datepicker-next-hover")
			}
		})
	}
	function H(a, b) {
		d.extend(a, b);
		for (var c in b)
			if (b[c] == null || b[c] == C)
				a[c] = b[c];
		return a
	}
	d.extend(d.ui, {
		datepicker : {
			version : "1.8.14"
		}
	});
	var A = (new Date).getTime(),
	J;
	d.extend(M.prototype, {
		markerClassName : "hasDatepicker",
		maxRows : 4,
		log : function () {
			this.debug && console.log.apply("", arguments)
		},
		_widgetDatepicker : function () {
			return this.dpDiv
		},
		setDefaults : function (a) {
			H(this._defaults,
				a || {});
			return this
		},
		_attachDatepicker : function (a, b) {
			var c = null;
			for (var e in this._defaults) {
				var f = a.getAttribute("date:" + e);
				if (f) {
					c = c || {};
					try {
						c[e] = eval(f)
					} catch (h) {
						c[e] = f
					}
				}
			}
			e = a.nodeName.toLowerCase();
			f = e == "div" || e == "span";
			if (!a.id) {
				this.uuid += 1;
				a.id = "dp" + this.uuid
			}
			var i = this._newInst(d(a), f);
			i.settings = d.extend({}, b || {}, c || {});
			if (e == "input")
				this._connectDatepicker(a, i);
			else
				f && this._inlineDatepicker(a, i)
		},
		_newInst : function (a, b) {
			return {
				id : a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
				input : a,
				selectedDay : 0,
				selectedMonth : 0,
				selectedYear : 0,
				drawMonth : 0,
				drawYear : 0,
				inline : b,
				dpDiv : !b ? this.dpDiv : N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
			}
		},
		_connectDatepicker : function (a, b) {
			var c = d(a);
			b.append = d([]);
			b.trigger = d([]);
			if (!c.hasClass(this.markerClassName)) {
				this._attachments(c, b);
				c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, f, h) {
					b.settings[f] =
						h
				}).bind("getData.datepicker", function (e, f) {
					return this._get(b, f)
				});
				this._autoSize(b);
				d.data(a, "datepicker", b)
			}
		},
		_attachments : function (a, b) {
			var c = this._get(b, "appendText"),
			e = this._get(b, "isRTL");
			b.append && b.append.remove();
			if (c) {
				b.append = d('<span class="' + this._appendClass + '">' + c + "</span>");
				a[e ? "before" : "after"](b.append)
			}
			a.unbind("focus", this._showDatepicker);
			b.trigger && b.trigger.remove();
			c = this._get(b, "showOn");
			if (c == "focus" || c == "both")
				a.focus(this._showDatepicker);
			if (c == "button" || c == "both") {
				c =
					this._get(b, "buttonText");
				var f = this._get(b, "buttonImage");
				b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
							src : f,
							alt : c,
							title : c
						}) : d('<button type="button"></button>').addClass(this._triggerClass).html(f == "" ? c : d("<img/>").attr({
								src : f,
								alt : c,
								title : c
							})));
				a[e ? "before" : "after"](b.trigger);
				b.trigger.click(function () {
					d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]);
					return false
				})
			}
		},
		_autoSize : function (a) {
			if (this._get(a,
					"autoSize") && !a.inline) {
				var b = new Date(2009, 11, 20),
				c = this._get(a, "dateFormat");
				if (c.match(/[DM]/)) {
					var e = function (f) {
						for (var h = 0, i = 0, g = 0; g < f.length; g++)
							if (f[g].length > h) {
								h = f[g].length;
								i = g
							}
						return i
					};
					b.setMonth(e(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
					b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
				}
				a.input.attr("size", this._formatDate(a, b).length)
			}
		},
		_inlineDatepicker : function (a, b) {
			var c = d(a);
			if (!c.hasClass(this.markerClassName)) {
				c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",
					function (e, f, h) {
					b.settings[f] = h
				}).bind("getData.datepicker", function (e, f) {
					return this._get(b, f)
				});
				d.data(a, "datepicker", b);
				this._setDate(b, this._getDefaultDate(b), true);
				this._updateDatepicker(b);
				this._updateAlternate(b);
				b.dpDiv.show()
			}
		},
		_dialogDatepicker : function (a, b, c, e, f) {
			a = this._dialogInst;
			if (!a) {
				this.uuid += 1;
				this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
				this._dialogInput.keydown(this._doKeyDown);
				d("body").append(this._dialogInput);
				a = this._dialogInst = this._newInst(this._dialogInput, false);
				a.settings = {};
				d.data(this._dialogInput[0], "datepicker", a)
			}
			H(a.settings, e || {});
			b = b && b.constructor == Date ? this._formatDate(a, b) : b;
			this._dialogInput.val(b);
			this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
			if (!this._pos)
				this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)];
			this._dialogInput.css("left",
				this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
			a.settings.onSelect = c;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			d.blockUI && d.blockUI(this.dpDiv);
			d.data(this._dialogInput[0], "datepicker", a);
			return this
		},
		_destroyDatepicker : function (a) {
			var b = d(a),
			c = d.data(a, "datepicker");
			if (b.hasClass(this.markerClassName)) {
				var e = a.nodeName.toLowerCase();
				d.removeData(a, "datepicker");
				if (e == "input") {
					c.append.remove();
					c.trigger.remove();
					b.removeClass(this.markerClassName).unbind("focus",
						this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
				} else if (e == "div" || e == "span")
					b.removeClass(this.markerClassName).empty()
			}
		},
		_enableDatepicker : function (a) {
			var b = d(a),
			c = d.data(a, "datepicker");
			if (b.hasClass(this.markerClassName)) {
				var e = a.nodeName.toLowerCase();
				if (e == "input") {
					a.disabled = false;
					c.trigger.filter("button").each(function () {
						this.disabled = false
					}).end().filter("img").css({
						opacity : "1.0",
						cursor : ""
					})
				} else if (e == "div" || e == "span") {
					b =
						b.children("." + this._inlineClass);
					b.children().removeClass("ui-state-disabled");
					b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
				}
				this._disabledInputs = d.map(this._disabledInputs, function (f) {
						return f == a ? null : f
					})
			}
		},
		_disableDatepicker : function (a) {
			var b = d(a),
			c = d.data(a, "datepicker");
			if (b.hasClass(this.markerClassName)) {
				var e = a.nodeName.toLowerCase();
				if (e == "input") {
					a.disabled = true;
					c.trigger.filter("button").each(function () {
						this.disabled = true
					}).end().filter("img").css({
						opacity : "0.5",
						cursor : "default"
					})
				} else if (e == "div" || e == "span") {
					b = b.children("." + this._inlineClass);
					b.children().addClass("ui-state-disabled");
					b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
				}
				this._disabledInputs = d.map(this._disabledInputs, function (f) {
						return f == a ? null : f
					});
				this._disabledInputs[this._disabledInputs.length] = a
			}
		},
		_isDisabledDatepicker : function (a) {
			if (!a)
				return false;
			for (var b = 0; b < this._disabledInputs.length; b++)
				if (this._disabledInputs[b] == a)
					return true;
			return false
		},
		_getInst : function (a) {
			try {
				return d.data(a, "datepicker")
			} catch (b) {
				throw "Missing instance data for this datepicker";
			}
		},
		_optionDatepicker : function (a, b, c) {
			var e = this._getInst(a);
			if (arguments.length == 2 && typeof b == "string")
				return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({}, e.settings) : this._get(e, b) : null;
			var f = b || {};
			if (typeof b == "string") {
				f = {};
				f[b] = c
			}
			if (e) {
				this._curInst == e && this._hideDatepicker();
				var h = this._getDateDatepicker(a, true),
				i = this._getMinMaxDate(e, "min"),
				g = this._getMinMaxDate(e,
						"max");
				H(e.settings, f);
				if (i !== null && f.dateFormat !== C && f.minDate === C)
					e.settings.minDate = this._formatDate(e, i);
				if (g !== null && f.dateFormat !== C && f.maxDate === C)
					e.settings.maxDate = this._formatDate(e, g);
				this._attachments(d(a), e);
				this._autoSize(e);
				this._setDate(e, h);
				this._updateAlternate(e);
				this._updateDatepicker(e)
			}
		},
		_changeDatepicker : function (a, b, c) {
			this._optionDatepicker(a, b, c)
		},
		_refreshDatepicker : function (a) {
			(a = this._getInst(a)) && this._updateDatepicker(a)
		},
		_setDateDatepicker : function (a, b) {
			if (a = this._getInst(a)) {
				this._setDate(a,
					b);
				this._updateDatepicker(a);
				this._updateAlternate(a)
			}
		},
		_getDateDatepicker : function (a, b) {
			(a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b);
			return a ? this._getDate(a) : null
		},
		_doKeyDown : function (a) {
			var b = d.datepicker._getInst(a.target),
			c = true,
			e = b.dpDiv.is(".ui-datepicker-rtl");
			b._keyEvent = true;
			if (d.datepicker._datepickerShowing)
				switch (a.keyCode) {
				case 9:
					d.datepicker._hideDatepicker();
					c = false;
					break;
				case 13:
					c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv);
					c[0] ? d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]) : d.datepicker._hideDatepicker();
					return false;
				case 27:
					d.datepicker._hideDatepicker();
					break;
				case 33:
					d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
					break;
				case 34:
					d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
					break;
				case 35:
					if (a.ctrlKey || a.metaKey)
						d.datepicker._clearDate(a.target);
					c = a.ctrlKey || a.metaKey;
					break;
				case 36:
					if (a.ctrlKey || a.metaKey)
						d.datepicker._gotoToday(a.target);
					c = a.ctrlKey || a.metaKey;
					break;
				case 37:
					if (a.ctrlKey || a.metaKey)
						d.datepicker._adjustDate(a.target, e ? +1 : -1, "D");
					c = a.ctrlKey || a.metaKey;
					if (a.originalEvent.altKey)
						d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
					break;
				case 38:
					if (a.ctrlKey || a.metaKey)
						d.datepicker._adjustDate(a.target, -7, "D");
					c = a.ctrlKey || a.metaKey;
					break;
				case 39:
					if (a.ctrlKey ||
						a.metaKey)
						d.datepicker._adjustDate(a.target, e ? -1 : +1, "D");
					c = a.ctrlKey || a.metaKey;
					if (a.originalEvent.altKey)
						d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
					break;
				case 40:
					if (a.ctrlKey || a.metaKey)
						d.datepicker._adjustDate(a.target, +7, "D");
					c = a.ctrlKey || a.metaKey;
					break;
				default:
					c = false
				}
			else if (a.keyCode == 36 && a.ctrlKey)
				d.datepicker._showDatepicker(this);
			else
				c = false;
			if (c) {
				a.preventDefault();
				a.stopPropagation()
			}
		},
		_doKeyPress : function (a) {
			var b =
				d.datepicker._getInst(a.target);
			if (d.datepicker._get(b, "constrainInput")) {
				b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat"));
				var c = String.fromCharCode(a.charCode == C ? a.keyCode : a.charCode);
				return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1
			}
		},
		_doKeyUp : function (a) {
			a = d.datepicker._getInst(a.target);
			if (a.input.val() != a.lastVal)
				try {
					if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) {
						d.datepicker._setDateFromField(a);
						d.datepicker._updateAlternate(a);
						d.datepicker._updateDatepicker(a)
					}
				} catch (b) {
					d.datepicker.log(b)
				}
			return true
		},
		_showDatepicker : function (a) {
			a = a.target || a;
			if (a.nodeName.toLowerCase() != "input")
				a = d("input", a.parentNode)[0];
			if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
				var b = d.datepicker._getInst(a);
				if (d.datepicker._curInst && d.datepicker._curInst != b) {
					d.datepicker._datepickerShowing && d.datepicker._triggerOnClose(d.datepicker._curInst);
					d.datepicker._curInst.dpDiv.stop(true, true)
				}
				var c =
					d.datepicker._get(b, "beforeShow");
				H(b.settings, c ? c.apply(a, [a, b]) : {});
				b.lastVal = null;
				d.datepicker._lastInput = a;
				d.datepicker._setDateFromField(b);
				if (d.datepicker._inDialog)
					a.value = "";
				if (!d.datepicker._pos) {
					d.datepicker._pos = d.datepicker._findPos(a);
					d.datepicker._pos[1] += a.offsetHeight
				}
				var e = false;
				d(a).parents().each(function () {
					e |= d(this).css("position") == "fixed";
					return !e
				});
				if (e && d.browser.opera) {
					d.datepicker._pos[0] -= document.documentElement.scrollLeft;
					d.datepicker._pos[1] -= document.documentElement.scrollTop
				}
				c = {
					left : d.datepicker._pos[0],
					top : d.datepicker._pos[1]
				};
				d.datepicker._pos = null;
				b.dpDiv.empty();
				b.dpDiv.css({
					position : "absolute",
					display : "block",
					top : "-1000px"
				});
				d.datepicker._updateDatepicker(b);
				c = d.datepicker._checkOffset(b, c, e);
				b.dpDiv.css({
					position : d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute",
					display : "none",
					left : c.left + "px",
					top : c.top + "px"
				});
				if (!b.inline) {
					c = d.datepicker._get(b, "showAnim");
					var f = d.datepicker._get(b, "duration"),
					h = function () {
						var i = b.dpDiv.find("iframe.ui-datepicker-cover");
						if (i.length) {
							var g = d.datepicker._getBorders(b.dpDiv);
							i.css({
								left : -g[0],
								top : -g[1],
								width : b.dpDiv.outerWidth(),
								height : b.dpDiv.outerHeight()
							})
						}
					};
					b.dpDiv.zIndex(d(a).zIndex() + 1);
					d.datepicker._datepickerShowing = true;
					d.effects && d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h);
					if (!c || !f)
						h();
					b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus();
					d.datepicker._curInst = b
				}
			}
		},
		_updateDatepicker : function (a) {
			this.maxRows = 4;
			var b = d.datepicker._getBorders(a.dpDiv);
			J = a;
			a.dpDiv.empty().append(this._generateHTML(a));
			var c = a.dpDiv.find("iframe.ui-datepicker-cover");
			c.length && c.css({
				left : -b[0],
				top : -b[1],
				width : a.dpDiv.outerWidth(),
				height : a.dpDiv.outerHeight()
			});
			a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			b = this._getNumberOfMonths(a);
			c = b[1];
			a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			c > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + c).css("width", 17 * c + "em");
			a.dpDiv[(b[0] != 1 || b[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
			if (a.yearshtml) {
				var e = a.yearshtml;
				setTimeout(function () {
					e === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
					e = a.yearshtml = null
				}, 0)
			}
		},
		_getBorders : function (a) {
			var b = function (c) {
				return {
					thin : 1,
					medium : 2,
					thick : 3
				}
				[c] ||
				c
			};
			return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
		},
		_checkOffset : function (a, b, c) {
			var e = a.dpDiv.outerWidth(),
			f = a.dpDiv.outerHeight(),
			h = a.input ? a.input.outerWidth() : 0,
			i = a.input ? a.input.outerHeight() : 0,
			g = document.documentElement.clientWidth + d(document).scrollLeft(),
			j = document.documentElement.clientHeight + d(document).scrollTop();
			b.left -= this._get(a, "isRTL") ? e - h : 0;
			b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0;
			b.top -= c && b.top == a.input.offset().top +
			i ? d(document).scrollTop() : 0;
			b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e - g) : 0);
			b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0);
			return b
		},
		_findPos : function (a) {
			for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1 || d.expr.filters.hidden(a)); )
				a = a[b ? "previousSibling" : "nextSibling"];
			a = d(a).offset();
			return [a.left, a.top]
		},
		_triggerOnClose : function (a) {
			var b = this._get(a, "onClose");
			if (b)
				b.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a])
		},
		_hideDatepicker : function (a) {
			var b =
				this._curInst;
			if (!(!b || a && b != d.data(a, "datepicker")))
				if (this._datepickerShowing) {
					a = this._get(b, "showAnim");
					var c = this._get(b, "duration"),
					e = function () {
						d.datepicker._tidyDialog(b);
						this._curInst = null
					};
					d.effects && d.effects[a] ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e);
					a || e();
					d.datepicker._triggerOnClose(b);
					this._datepickerShowing = false;
					this._lastInput = null;
					if (this._inDialog) {
						this._dialogInput.css({
							position : "absolute",
							left : "0",
							top : "-100px"
						});
						if (d.blockUI) {
							d.unblockUI();
							d("body").append(this.dpDiv)
						}
					}
					this._inDialog = false
				}
		},
		_tidyDialog : function (a) {
			a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick : function (a) {
			if (d.datepicker._curInst) {
				a = d(a.target);
				a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog &&
					d.blockUI) && d.datepicker._hideDatepicker()
			}
		},
		_adjustDate : function (a, b, c) {
			a = d(a);
			var e = this._getInst(a[0]);
			if (!this._isDisabledDatepicker(a[0])) {
				this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c);
				this._updateDatepicker(e)
			}
		},
		_gotoToday : function (a) {
			a = d(a);
			var b = this._getInst(a[0]);
			if (this._get(b, "gotoCurrent") && b.currentDay) {
				b.selectedDay = b.currentDay;
				b.drawMonth = b.selectedMonth = b.currentMonth;
				b.drawYear = b.selectedYear = b.currentYear
			} else {
				var c = new Date;
				b.selectedDay = c.getDate();
				b.drawMonth =
					b.selectedMonth = c.getMonth();
				b.drawYear = b.selectedYear = c.getFullYear()
			}
			this._notifyChange(b);
			this._adjustDate(a)
		},
		_selectMonthYear : function (a, b, c) {
			a = d(a);
			var e = this._getInst(a[0]);
			e._selectingMonthYear = false;
			e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10);
			this._notifyChange(e);
			this._adjustDate(a)
		},
		_clickMonthYear : function (a) {
			var b = this._getInst(d(a)[0]);
			b.input && b._selectingMonthYear && setTimeout(function () {
				b.input.focus()
			}, 0);
			b._selectingMonthYear =
				!b._selectingMonthYear
		},
		_selectDay : function (a, b, c, e) {
			var f = d(a);
			if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
				f = this._getInst(f[0]);
				f.selectedDay = f.currentDay = d("a", e).html();
				f.selectedMonth = f.currentMonth = b;
				f.selectedYear = f.currentYear = c;
				this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
			}
		},
		_clearDate : function (a) {
			a = d(a);
			this._getInst(a[0]);
			this._selectDate(a, "")
		},
		_selectDate : function (a, b) {
			a = this._getInst(d(a)[0]);
			b = b != null ? b : this._formatDate(a);
			a.input && a.input.val(b);
			this._updateAlternate(a);
			var c = this._get(a, "onSelect");
			if (c)
				c.apply(a.input ? a.input[0] : null, [b, a]);
			else
				a.input && a.input.trigger("change");
			if (a.inline)
				this._updateDatepicker(a);
			else {
				this._hideDatepicker();
				this._lastInput = a.input[0];
				typeof a.input[0] != "object" && a.input.focus();
				this._lastInput = null
			}
		},
		_updateAlternate : function (a) {
			var b = this._get(a, "altField");
			if (b) {
				var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
				e = this._getDate(a),
				f = this.formatDate(c, e, this._getFormatConfig(a));
				d(b).each(function () {
					d(this).val(f)
				})
			}
		},
		noWeekends : function (a) {
			a = a.getDay();
			return [a > 0 && a < 6, ""]
		},
		iso8601Week : function (a) {
			a = new Date(a.getTime());
			a.setDate(a.getDate() + 4 - (a.getDay() || 7));
			var b = a.getTime();
			a.setMonth(0);
			a.setDate(1);
			return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
		},
		parseDate : function (a, b, c) {
			if (a == null || b == null)
				throw "Invalid arguments";
			b = typeof b == "object" ? b.toString() : b + "";
			if (b == "")
				return null;
			var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			e = typeof e != "string" ? e : (new Date).getFullYear() %
				100 + parseInt(e, 10);
			for (var f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, j = c = -1, l = -1, u = -1, k = false, o = function (p) {
				(p = B + 1 < a.length && a.charAt(B + 1) == p) && B++;
				return p
			}, m = function (p) {
				var D = o(p);
				p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && D ? 4 : p == "o" ? 3 : 2) + "}");
				p = b.substring(q).match(p);
				if (!p)
					throw "Missing number at position " + q;
				q +=
				p[0].length;
				return parseInt(p[0], 10)
			}, n = function (p, D, K) {
				p = d.map(o(p) ? K : D, function (w, x) {
						return [[x, w]]
					}).sort(function (w, x) {
						return  - (w[1].length - x[1].length)
					});
				var E = -1;
				d.each(p, function (w, x) {
					w = x[1];
					if (b.substr(q, w.length).toLowerCase() == w.toLowerCase()) {
						E = x[0];
						q += w.length;
						return false
					}
				});
				if (E != -1)
					return E + 1;
				else
					throw "Unknown name at position " + q;
			}, s = function () {
				if (b.charAt(q) != a.charAt(B))
					throw "Unexpected literal at position " + q;
				q++
			}, q = 0, B = 0; B < a.length; B++)
				if (k)
					if (a.charAt(B) == "'" && !o("'"))
						k = false;
					else
						s();
				else
					switch (a.charAt(B)) {
					case "d":
						l = m("d");
						break;
					case "D":
						n("D", f, h);
						break;
					case "o":
						u = m("o");
						break;
					case "m":
						j = m("m");
						break;
					case "M":
						j = n("M", i, g);
						break;
					case "y":
						c = m("y");
						break;
					case "@":
						var v = new Date(m("@"));
						c = v.getFullYear();
						j = v.getMonth() + 1;
						l = v.getDate();
						break;
					case "!":
						v = new Date((m("!") - this._ticksTo1970) / 1E4);
						c = v.getFullYear();
						j = v.getMonth() + 1;
						l = v.getDate();
						break;
					case "'":
						if (o("'"))
							s();
						else
							k = true;
						break;
					default:
						s()
					}
			if (q < b.length)
				throw "Extra/unparsed characters found in date: " + b.substring(q);
			if (c == -1)
				c = (new Date).getFullYear();
			else if (c < 100)
				c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100);
			if (u > -1) {
				j = 1;
				l = u;
				do {
					e = this._getDaysInMonth(c, j - 1);
					if (l <= e)
						break;
					j++;
					l -= e
				} while (1)
			}
			v = this._daylightSavingAdjust(new Date(c, j - 1, l));
			if (v.getFullYear() != c || v.getMonth() + 1 != j || v.getDate() != l)
				throw "Invalid date";
			return v
		},
		ATOM : "yy-mm-dd",
		COOKIE : "D, dd M yy",
		ISO_8601 : "yy-mm-dd",
		RFC_822 : "D, d M y",
		RFC_850 : "DD, dd-M-y",
		RFC_1036 : "D, d M y",
		RFC_1123 : "D, d M yy",
		RFC_2822 : "D, d M yy",
		RSS : "D, d M y",
		TICKS : "!",
		TIMESTAMP : "@",
		W3C : "yy-mm-dd",
		_ticksTo1970 : (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7,
		formatDate : function (a, b, c) {
			if (!b)
				return "";
			var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
			f = (c ? c.dayNames : null) || this._defaults.dayNames,
			h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
			c = (c ? c.monthNames : null) || this._defaults.monthNames;
			var i = function (o) {
				(o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
				return o
			},
			g = function (o, m, n) {
				m = "" + m;
				if (i(o))
					for (; m.length <
						n; )
						m = "0" + m;
				return m
			},
			j = function (o, m, n, s) {
				return i(o) ? s[m] : n[m]
			},
			l = "",
			u = false;
			if (b)
				for (var k = 0; k < a.length; k++)
					if (u)
						if (a.charAt(k) == "'" && !i("'"))
							u = false;
						else
							l += a.charAt(k);
					else
						switch (a.charAt(k)) {
						case "d":
							l += g("d", b.getDate(), 2);
							break;
						case "D":
							l += j("D", b.getDay(), e, f);
							break;
						case "o":
							l += g("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
							break;
						case "m":
							l += g("m", b.getMonth() + 1, 2);
							break;
						case "M":
							l += j("M", b.getMonth(), h,
								c);
							break;
						case "y":
							l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
							break;
						case "@":
							l += b.getTime();
							break;
						case "!":
							l += b.getTime() * 1E4 + this._ticksTo1970;
							break;
						case "'":
							if (i("'"))
								l += "'";
							else
								u = true;
							break;
						default:
							l += a.charAt(k)
						}
			return l
		},
		_possibleChars : function (a) {
			for (var b = "", c = false, e = function (h) {
				(h = f + 1 < a.length && a.charAt(f + 1) == h) && f++;
				return h
			}, f = 0; f < a.length; f++)
				if (c)
					if (a.charAt(f) == "'" && !e("'"))
						c = false;
					else
						b += a.charAt(f);
				else
					switch (a.charAt(f)) {
					case "d":
					case "m":
					case "y":
					case "@":
						b +=
						"0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						if (e("'"))
							b += "'";
						else
							c = true;
						break;
					default:
						b += a.charAt(f)
					}
			return b
		},
		_get : function (a, b) {
			return a.settings[b] !== C ? a.settings[b] : this._defaults[b]
		},
		_setDateFromField : function (a, b) {
			if (a.input.val() != a.lastVal) {
				var c = this._get(a, "dateFormat"),
				e = a.lastVal = a.input ? a.input.val() : null,
				f,
				h;
				f = h = this._getDefaultDate(a);
				var i = this._getFormatConfig(a);
				try {
					f = this.parseDate(c, e, i) || h
				} catch (g) {
					this.log(g);
					e = b ? "" : e
				}
				a.selectedDay = f.getDate();
				a.drawMonth = a.selectedMonth =
					f.getMonth();
				a.drawYear = a.selectedYear = f.getFullYear();
				a.currentDay = e ? f.getDate() : 0;
				a.currentMonth = e ? f.getMonth() : 0;
				a.currentYear = e ? f.getFullYear() : 0;
				this._adjustInstDate(a)
			}
		},
		_getDefaultDate : function (a) {
			return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
		},
		_determineDate : function (a, b, c) {
			var e = function (h) {
				var i = new Date;
				i.setDate(i.getDate() + h);
				return i
			},
			f = function (h) {
				try {
					return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a))
				} catch (i) {}
				
				var g =
					(h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date,
				j = g.getFullYear(),
				l = g.getMonth();
				g = g.getDate();
				for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k; ) {
					switch (k[2] || "d") {
					case "d":
					case "D":
						g += parseInt(k[1], 10);
						break;
					case "w":
					case "W":
						g += parseInt(k[1], 10) * 7;
						break;
					case "m":
					case "M":
						l += parseInt(k[1], 10);
						g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
						break;
					case "y":
					case "Y":
						j += parseInt(k[1], 10);
						g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
						break
					}
					k = u.exec(h)
				}
				return new Date(j,
					l, g)
			};
			if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) {
				b.setHours(0);
				b.setMinutes(0);
				b.setSeconds(0);
				b.setMilliseconds(0)
			}
			return this._daylightSavingAdjust(b)
		},
		_daylightSavingAdjust : function (a) {
			if (!a)
				return null;
			a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
			return a
		},
		_setDate : function (a, b, c) {
			var e = !b,
			f = a.selectedMonth,
			h = a.selectedYear;
			b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
			a.selectedDay =
				a.currentDay = b.getDate();
			a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
			a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
			if ((f != a.selectedMonth || h != a.selectedYear) && !c)
				this._notifyChange(a);
			this._adjustInstDate(a);
			if (a.input)
				a.input.val(e ? "" : this._formatDate(a))
		},
		_getDate : function (a) {
			return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
		},
		_generateHTML : function (a) {
			var b = new Date;
			b = this._daylightSavingAdjust(new Date(b.getFullYear(),
						b.getMonth(), b.getDate()));
			var c = this._get(a, "isRTL"),
			e = this._get(a, "showButtonPanel"),
			f = this._get(a, "hideIfNoPrevNext"),
			h = this._get(a, "navigationAsDateFormat"),
			i = this._getNumberOfMonths(a),
			g = this._get(a, "showCurrentAtPos"),
			j = this._get(a, "stepMonths"),
			l = i[0] != 1 || i[1] != 1,
			u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)),
			k = this._getMinMaxDate(a, "min"),
			o = this._getMinMaxDate(a, "max");
			g = a.drawMonth - g;
			var m = a.drawYear;
			if (g < 0) {
				g += 12;
				m--
			}
			if (o) {
				var n =
					this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate()));
				for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m, g, 1)) > n; ) {
					g--;
					if (g < 0) {
						g = 11;
						m--
					}
				}
			}
			a.drawMonth = g;
			a.drawYear = m;
			n = this._get(a, "prevText");
			n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m, g - j, 1)), this._getFormatConfig(a));
			n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + A + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' +
				(c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>";
			var s = this._get(a, "nextText");
			s = !h ? s : this.formatDate(s, this._daylightSavingAdjust(new Date(m, g + j, 1)), this._getFormatConfig(a));
			f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + A + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + s + '"><span class="ui-icon ui-icon-circle-triangle-' +
				(c ? "w" : "e") + '">' + s + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>";
			j = this._get(a, "currentText");
			s = this._get(a, "gotoCurrent") && a.currentDay ? u : b;
			j = !h ? j : this.formatDate(j, s, this._getFormatConfig(a));
			h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + A + '.datepicker._hideDatepicker();">' + this._get(a,
					"closeText") + "</button>" : "";
			e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, s) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + A + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : "";
			h = parseInt(this._get(a, "firstDay"), 10);
			h = isNaN(h) ? 0 : h;
			j = this._get(a, "showWeek");
			s = this._get(a, "dayNames");
			this._get(a, "dayNamesShort");
			var q = this._get(a, "dayNamesMin"),
			B =
				this._get(a, "monthNames"),
			v = this._get(a, "monthNamesShort"),
			p = this._get(a, "beforeShowDay"),
			D = this._get(a, "showOtherMonths"),
			K = this._get(a, "selectOtherMonths");
			this._get(a, "calculateWeek");
			for (var E = this._getDefaultDate(a), w = "", x = 0; x < i[0]; x++) {
				var O = "";
				this.maxRows = 4;
				for (var G = 0; G < i[1]; G++) {
					var P = this._daylightSavingAdjust(new Date(m, g, a.selectedDay)),
					t = " ui-corner-all",
					y = "";
					if (l) {
						y += '<div class="ui-datepicker-group';
						if (i[1] > 1)
							switch (G) {
							case 0:
								y += " ui-datepicker-group-first";
								t = " ui-corner-" + (c ? "right" :
										"left");
								break;
							case i[1] - 1:
								y += " ui-datepicker-group-last";
								t = " ui-corner-" + (c ? "left" : "right");
								break;
							default:
								y += " ui-datepicker-group-middle";
								t = "";
								break
							}
						y += '">'
					}
					y += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && x == 0 ? c ? f : n : "") + (/all|right/.test(t) && x == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, x > 0 || G > 0, B, v) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
					var z = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" :
						"";
					for (t = 0; t < 7; t++) {
						var r = (t + h) % 7;
						z += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + s[r] + '">' + q[r] + "</span></th>"
					}
					y += z + "</tr></thead><tbody>";
					z = this._getDaysInMonth(m, g);
					if (m == a.selectedYear && g == a.selectedMonth)
						a.selectedDay = Math.min(a.selectedDay, z);
					t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7;
					z = Math.ceil((t + z) / 7);
					this.maxRows = z = l ? this.maxRows > z ? this.maxRows : z : z;
					r = this._daylightSavingAdjust(new Date(m, g, 1 - t));
					for (var Q = 0; Q < z; Q++) {
						y += "<tr>";
						var R = !j ? "" : '<td class="ui-datepicker-week-col">' +
							this._get(a, "calculateWeek")(r) + "</td>";
						for (t = 0; t < 7; t++) {
							var I = p ? p.apply(a.input ? a.input[0] : null, [r]) : [true, ""],
							F = r.getMonth() != g,
							L = F && !K || !I[0] || k && r < k || o && r > o;
							R += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (r.getTime() == P.getTime() && g == a.selectedMonth && a._keyEvent || E.getTime() == r.getTime() && E.getTime() == P.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !D ? "" : " " + I[1] + (r.getTime() == u.getTime() ? " " +
									this._currentClass : "") + (r.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!F || D) && I[2] ? ' title="' + I[2] + '"' : "") + (L ? "" : ' onclick="DP_jQuery_' + A + ".datepicker._selectDay('#" + a.id + "'," + r.getMonth() + "," + r.getFullYear() + ', this);return false;"') + ">" + (F && !D ? "&#xa0;" : L ? '<span class="ui-state-default">' + r.getDate() + "</span>" : '<a class="ui-state-default' + (r.getTime() == b.getTime() ? " ui-state-highlight" : "") + (r.getTime() == u.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + '" href="#">' +
								r.getDate() + "</a>") + "</td>";
							r.setDate(r.getDate() + 1);
							r = this._daylightSavingAdjust(r)
						}
						y += R + "</tr>"
					}
					g++;
					if (g > 11) {
						g = 0;
						m++
					}
					y += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && G == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
					O += y
				}
				w += O
			}
			w += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
			a._keyEvent = false;
			return w
		},
		_generateMonthYearHeader : function (a, b, c, e, f, h, i, g) {
			var j = this._get(a, "changeMonth"),
			l = this._get(a, "changeYear"),
			u = this._get(a, "showMonthAfterYear"),
			k = '<div class="ui-datepicker-title">',
			o = "";
			if (h || !j)
				o += '<span class="ui-datepicker-month">' + i[b] + "</span>";
			else {
				i = e && e.getFullYear() == c;
				var m = f && f.getFullYear() == c;
				o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + A + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" onclick=\"DP_jQuery_" + A + ".datepicker._clickMonthYear('#" + a.id + "');\">";
				for (var n = 0; n < 12; n++)
					if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth()))
						o += '<option value="' +
						n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>";
				o += "</select>"
			}
			u || (k += o + (h || !(j && l) ? "&#xa0;" : ""));
			if (!a.yearshtml) {
				a.yearshtml = "";
				if (h || !l)
					k += '<span class="ui-datepicker-year">' + c + "</span>";
				else {
					g = this._get(a, "yearRange").split(":");
					var s = (new Date).getFullYear();
					i = function (q) {
						q = q.match(/c[+-].*/) ? c + parseInt(q.substring(1), 10) : q.match(/[+-].*/) ? s + parseInt(q, 10) : parseInt(q, 10);
						return isNaN(q) ? s : q
					};
					b = i(g[0]);
					g = Math.max(b, i(g[1] || ""));
					b = e ? Math.max(b, e.getFullYear()) : b;
					g = f ? Math.min(g, f.getFullYear()) :
						g;
					for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + A + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + A + ".datepicker._clickMonthYear('#" + a.id + "');\">"; b <= g; b++)
						a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>";
					a.yearshtml += "</select>";
					k += a.yearshtml;
					a.yearshtml = null
				}
			}
			k += this._get(a, "yearSuffix");
			if (u)
				k += (h || !(j && l) ? "&#xa0;" : "") + o;
			k += "</div>";
			return k
		},
		_adjustInstDate : function (a, b, c) {
			var e = a.drawYear + (c ==
					"Y" ? b : 0),
			f = a.drawMonth + (c == "M" ? b : 0);
			b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0);
			e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b)));
			a.selectedDay = e.getDate();
			a.drawMonth = a.selectedMonth = e.getMonth();
			a.drawYear = a.selectedYear = e.getFullYear();
			if (c == "M" || c == "Y")
				this._notifyChange(a)
		},
		_restrictMinMax : function (a, b) {
			var c = this._getMinMaxDate(a, "min");
			a = this._getMinMaxDate(a, "max");
			b = c && b < c ? c : b;
			return b = a && b > a ? a : b
		},
		_notifyChange : function (a) {
			var b = this._get(a, "onChangeMonthYear");
			if (b)
				b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
		},
		_getNumberOfMonths : function (a) {
			a = this._get(a, "numberOfMonths");
			return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a
		},
		_getMinMaxDate : function (a, b) {
			return this._determineDate(a, this._get(a, b + "Date"), null)
		},
		_getDaysInMonth : function (a, b) {
			return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
		},
		_getFirstDayOfMonth : function (a, b) {
			return (new Date(a, b, 1)).getDay()
		},
		_canAdjustMonth : function (a, b, c, e) {
			var f = this._getNumberOfMonths(a);
			c = this._daylightSavingAdjust(new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1));
			b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
			return this._isInRange(a, c)
		},
		_isInRange : function (a, b) {
			var c = this._getMinMaxDate(a, "min");
			a = this._getMinMaxDate(a, "max");
			return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
		},
		_getFormatConfig : function (a) {
			var b = this._get(a, "shortYearCutoff");
			b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
			return {
				shortYearCutoff : b,
				dayNamesShort : this._get(a,
					"dayNamesShort"),
				dayNames : this._get(a, "dayNames"),
				monthNamesShort : this._get(a, "monthNamesShort"),
				monthNames : this._get(a, "monthNames")
			}
		},
		_formatDate : function (a, b, c, e) {
			if (!b) {
				a.currentDay = a.selectedDay;
				a.currentMonth = a.selectedMonth;
				a.currentYear = a.selectedYear
			}
			b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
			return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
		}
	});
	d.fn.datepicker =
	function (a) {
		if (!this.length)
			return this;
		if (!d.datepicker.initialized) {
			d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
			d.datepicker.initialized = true
		}
		var b = Array.prototype.slice.call(arguments, 1);
		if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget"))
			return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
		if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string")
			return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker,
				[this[0]].concat(b));
		return this.each(function () {
			typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
		})
	};
	d.datepicker = new M;
	d.datepicker.initialized = false;
	d.datepicker.uuid = (new Date).getTime();
	d.datepicker.version = "1.8.14";
	window["DP_jQuery_" + A] = d
})(jQuery); ;

/*
Masked Input plugin for jQuery
Copyright (c) 2007-@Year Josh Bush (digitalbush.com)
Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
Version: @version
 */
(function ($) {
	var pasteEventName = ($.browser.msie ? 'paste' : 'input') + ".mask";
	var iPhone = (window.orientation != undefined);
	
	$.mask = {
		//Predefined character definitions
		definitions : {
			'9' : "[0-9]",
			'a' : "[A-Za-z]",
			'*' : "[A-Za-z0-9]"
		},
		dataName : "rawMaskFn"
	};
	
	$.fn.extend({
		//Helper Function for Caret positioning
		caret : function (begin, end) {
			if (this.length == 0)
				return;
			if (typeof begin == 'number') {
				end = (typeof end == 'number') ? end : begin;
				return this.each(function () {
					if (this.setSelectionRange) {
						this.setSelectionRange(begin, end);
					} else if (this.createTextRange) {
						var range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if (this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if (document.selection && document.selection.createRange) {
					var range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return {
					begin : begin,
					end : end
				};
			}
		},
		unmask : function () {
			return this.trigger("unmask");
		},
		mask : function (mask, settings) {
			if (!mask && this.length > 0) {
				var input = $(this[0]);
				return input.data($.mask.dataName)();
			}
			settings = $.extend({
					placeholder : "_",
					completed : null
				}, settings);
			
			var defs = $.mask.definitions;
			var tests = [];
			var partialPosition = mask.length;
			var firstNonMaskPos = null;
			var len = mask.length;
			
			$.each(mask.split(""), function (i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(new RegExp(defs[c]));
					if (firstNonMaskPos == null)
						firstNonMaskPos = tests.length - 1;
				} else {
					tests.push(null);
				}
			});
			
			return this.trigger("unmask").each(function () {
				var input = $(this);
				var buffer = $.map(mask.split(""), function (c, i) {
						if (c != '?')
							return defs[c] ? settings.placeholder : c
					});
				var focusText = input.val();
				
				function seekNext(pos) {
					while (++pos <= len && !tests[pos]);
					return pos;
				};
				function seekPrev(pos) {
					while (--pos >= 0 && !tests[pos]);
					return pos;
				};
				
				function shiftL(begin, end) {
					if (begin < 0)
						return;
					for (var i = begin, j = seekNext(end); i < len; i++) {
						if (tests[i]) {
							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
								buffer[j] = settings.placeholder;
							} else
								break;
							j = seekNext(j);
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, begin));
				};
				
				function shiftR(pos) {
					for (var i = pos, c = settings.placeholder; i < len; i++) {
						if (tests[i]) {
							var j = seekNext(i);
							var t = buffer[i];
							buffer[i] = c;
							if (j < len && tests[j].test(t))
								c = t;
							else
								break;
						}
					}
				};
				
				function keydownEvent(e) {
					var k = e.which;
					
					//backspace, delete, and escape get special treatment
					if (k == 8 || k == 46 || (iPhone && k == 127)) {
						var pos = input.caret(),
						begin = pos.begin,
						end = pos.end;
						
						if (end - begin == 0) {
							begin = k != 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
							end = k == 46 ? seekNext(end) : end;
						}
						clearBuffer(begin, end);
						shiftL(begin, end - 1);
						
						return false;
					} else if (k == 27) { //escape
						input.val(focusText);
						input.caret(0, checkVal());
						return false;
					}
				};
				
				function keypressEvent(e) {
					var k = e.which,
					pos = input.caret();
					if (e.ctrlKey || e.altKey || e.metaKey || k < 32) { //Ignore
						return true;
					} else if (k) {
						if (pos.end - pos.begin != 0) {
							clearBuffer(pos.begin, pos.end);
							shiftL(pos.begin, pos.end - 1);
						}
						
						var p = seekNext(pos.begin - 1);
						if (p < len) {
							var c = String.fromCharCode(k);
							if (tests[p].test(c)) {
								shiftR(p);
								buffer[p] = c;
								writeBuffer();
								var next = seekNext(p);
								input.caret(next);
								if (settings.completed && next >= len)
									settings.completed.call(input);
							}
						}
						return false;
					}
				};
				
				function clearBuffer(start, end) {
					for (var i = start; i < end && i < len; i++) {
						if (tests[i])
							buffer[i] = settings.placeholder;
					}
				};
				
				function writeBuffer() {
					return input.val(buffer.join('')).val();
				};
				
				function checkVal(allow) {
					//try to place characters where they belong
					var test = input.val();
					var lastMatch = -1;
					for (var i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
							while (pos++ < test.length) {
								var c = test.charAt(pos - 1);
								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if (pos > test.length)
								break;
						} else if (buffer[i] == test.charAt(pos) && i != partialPosition) {
							pos++;
							lastMatch = i;
						}
					}
					if (!allow && lastMatch + 1 < partialPosition) {
						input.val("");
						clearBuffer(0, len);
					} else if (allow || lastMatch + 1 >= partialPosition) {
						writeBuffer();
						if (!allow)
							input.val(input.val().substring(0, lastMatch + 1));
					}
					return (partialPosition ? i : firstNonMaskPos);
				};
				
				input.data($.mask.dataName, function () {
					return $.map(buffer, function (c, i) {
						return tests[i] && c != settings.placeholder ? c : null;
					}).join('');
				})
				
				if (!input.attr("readonly"))
					input
					.one("unmask", function () {
						input
						.unbind(".mask")
						.removeData($.mask.dataName);
					})
					.bind("focus.mask", function () {
						focusText = input.val();
						var pos = checkVal();
						writeBuffer();
						var moveCaret = function () {
							if (pos == mask.length)
								input.caret(0, pos);
							else
								input.caret(pos);
						};
						($.browser.msie ? moveCaret : function () {
							setTimeout(moveCaret, 0)
						})();
					})
					.bind("blur.mask", function () {
						checkVal();
						if (input.val() != focusText)
							input.change();
					})
					.bind("keydown.mask", keydownEvent)
					.bind("keypress.mask", keypressEvent)
					.bind(pasteEventName, function () {
						setTimeout(function () {
							input.caret(checkVal(true));
						}, 0);
					});
				
				checkVal(); //Perform initial check for existing values
			});
		}
	});
})(jQuery);

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, mint:true*/
/**
 * shims for builtin objects. must only provide methods that are in newer specs to enhance older browsers
 * this is not inherently evil but we should stop doing this at some point and resort to underscore js and our own util classes
 */

if (!Array.prototype.forEach)
	Array.prototype.forEach = function (cb) {
		for (var i = 0, j = this.length; i < j; ++i)
			cb(this[i], i);
	}

if (!Object.keys)
	Object.keys = function (o) {
		if (o !== Object(o))
			throw new TypeError('Object.keys called on non-object');
		var ret = [],
		p;
		for (p in o)
			if (Object.prototype.hasOwnProperty.call(o, p))
				ret.push(p);
		return ret;
	}

/*
THIS IS OUT OF SPEC AND NEEDS TO BE REMOVED NOW!
move to util class.
 */
Array.prototype.unique = function () {
	var a = [];
	var l = this.length;
	for (var i = 0; i < l; i++) {
		for (var j = i + 1; j < l; j++) {
			// If this[i] is found later in the array
			if (this[i] === this[j])
				j = ++i;
		}
		a.push(this[i]);
	}
	return a;
};

if (!window.console) {
	var names = ["log", "debug", "info", "warn", "error", "assert"],
	fn = function () {};
	window.console = {};
	for (var i = 0; i < names.length; ++i) {
		window.console[names[i]] = fn;
	}
}

(function () {
	window.onerror = function (msg, url, line) {
		//for selenium
		if (!window._JS_ERRORS)
			window._JS_ERRORS = [];
		_JS_ERRORS.push({
			msg : msg,
			url : url,
			line : line
		});
		
		try {
			var out = {};
			out.time = new Date().getTime();
			out.line = line;
			out.msg = msg;
			out.url = window.location.href;
			out.referrer = document.referrer;
			out.agent = window.navigator.userAgent;
			out.frame = window.parent !== window ? 1 : 0;
			
			var tracked = false;
			if (window.mint && window.mint.tracking) {
				try {
					mint.tracking.track(out, "_JSERROR");
					tracked = true;
				} catch (_e) {}
			}
			
			if (!tracked) {
				out.broken = 1;
				injectPixels(out, "_JSERROR");
			}
		} catch (e) {
			console.log('ERROR IN error pixel tracking');
		}
	};
	
	function injectPixels(out, prefix) {
		var undef,
		cname = getMintCname(),
		objLen = Object.keys(out).length,
		str = '',
		srcs = ["https://" + cname + "/skin/px.jpg?"];
		
		//loop names
		var i = 0;
		for (var name in out) {
			if (out[name] !== undef) {
				str += (prefix) + '.' + name + "=" + encodeURI(out[name]);
				if (i !== objLen)
					str += "&";
			}
			i++;
		}
		
		// track srcs
		for (i = 0, j = srcs.length; i < j; ++i) {
			var img = new Image();
			console.log(img.src = srcs[i] + str);
		}
	}
	
	function getMintCname() {
		var cname = 'prod-mint-js.beachmintdev.com',
		path;
		for (var s = document.getElementsByTagName('script'), i = 0, j = s.length; i < j; ++i) {
			if (s[i].src.indexOf('/mint.js') != -1) {
				path = s[i].src;
				if (path.indexOf('/') === 0) {
					cname = location.hostname || location.host;
				} else if (path.indexOf('//') != -1) {
					path = path.split('//')[1];
					cname = path.split('/').shift();
				}
				break;
			}
		}
		return cname;
	}
}
	());

if (window.jQuery) {
	if (!window.mint) {
		window.mint = {
			_inits : [],
			_configs : {},
			init : function (options) {
				/*if(window.self != window.top) {
				return;
				}*/
				options = options || {};
				
				$.each(options, function (i, v) {
					mint.config(i, v);
				});
				
				$.each(mint._inits, function (i, v) {
					v.fn.call(v.scope);
				});
			},
			
			config : function (key, value) {
				if (value) {
					this._configs[key] = value;
					return this;
				}
				return key ? this._configs[key] : this._configs;
			},
			
			getStoreInfo : function () {
				return window.stores[mint.config('store')];
			},
			/* Taken from facebook connect-js: https://github.com/facebook/connect-js */
			
			/**
			 * Copies things from source into target.
			 *
			 * @param target {Object} the target object where things will be copied into
			 * @param source {Object} the source object where things will be copied from
			 * @return {Object}
			 */
			copy : function (target, source) {
				// the pre function exists before the constructor on a module is called
				var hasPre = source.pre;
				
				for (var key in source) {
					target[key] = source[key];
				}
				
				if (target.init && mint != target) {
					mint._inits.push({
						scope : target,
						fn : target.init
					});
				}
				
				if (hasPre) {
					target.pre();
				}
				return target;
			},
			
			/**
			 * Create a namespaced object.
			 *
			 * @param name {String} full qualified name ('Util.foo', etc.)
			 * @return {Object} The created object
			 */
			create : function (name) {
				if (name == '')
					return mint;
				var node = mint, // We will use 'mint' as root namespace
				nameParts = name.split('.'),
				c = nameParts.length;
				for (var i = 0; i < c; i++) {
					var part = nameParts[i];
					node = node[part] = node[part] || {};
				}
				return node;
			},
			
			/**
			 * Copy stuff from one object to the specified namespace
			 * If the namespace target doesn't exist, it will be created automatically.
			 *
			 * @param target {Object|String} the target object to copy into
			 * @param source {Object} the source object to copy from
			 * @return {Object} the *same* target object back
			 */
			provide : function (target, source) {
				return mint.copy(
					mint.create(target),
					source);
			}
		};
		
		var $script = $('script[src*="mint.js"]');
		var url = $script[0].src.split(".com");
		if (url.length == 1) {
			url = [window.location.protocol + "//" + window.location.hostname, url[0]]
			mint.config('baseUrl', url[0]);
		} else {
			mint.config('baseUrl', url[0] + ".com");
		}
		
		// initial configuration objects of the mint object is done by
		// reading the parameters of the query string of the mint-js file
		var params = url[1].split("?");
		if (params[1]) {
			params = params[1];
			$.each(params.split('&'), function (i, v) {
				var param = v.split('=');
				mint.config(param[0], param[1]);
			});
		}
		
		if (mint.config('init')) {
			$(function () {
				mint.init({});
			});
		}
	}
	
} else {
	console.log("jQuery is required.")
}

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, mint:true*/

mint.provide('util', {
	cpy : function (a) {
		return Array.prototype.slice.call(a)
	},
	appendTo : function (b, a) {
		var c = this.cpy(b);
		c.unshift(a.length, 0);
		a.splice.apply(a, c);
		return a;
	},
	appendToCopy : function (b, a) {
		return appendTo(b, this.cpy(a));
	},
	ksort : function (inputArr) {
		var tmp_arr = {},
		keys = [],
		i,
		k,
		populateArr = {};
		
		var sorter = function (a, b) {
			var aFloat = parseFloat(a),
			bFloat = parseFloat(b),
			aNumeric = aFloat + '' === a,
			bNumeric = bFloat + '' === b;
			if (aNumeric && bNumeric) {
				return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
			} else if (aNumeric && !bNumeric) {
				return 1;
			} else if (!aNumeric && bNumeric) {
				return -1;
			}
			return a > b ? 1 : a < b ? -1 : 0;
		};
		
		// Make a list of key names
		for (k in inputArr) {
			if (inputArr.hasOwnProperty(k)) {
				keys.push(k);
			}
		}
		keys.sort(sorter);
		
		// Rebuild array with sorted key names
		for (i = 0; i < keys.length; i++) {
			k = keys[i];
			tmp_arr[k] = inputArr[k];
		}
		
		for (i in tmp_arr) {
			if (tmp_arr.hasOwnProperty(i)) {
				populateArr[i] = tmp_arr[i];
			}
		}
		
		return populateArr;
	},
	getParameterByName : function (name, url) {
		url = (url || window.location.href)
		name = name.replace(/[\[]/, "\\\\[").replace(/[\]]/, "\\\\]");
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(url);
		if (results === null)
			return false;
		else
			return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
});

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 * used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 * If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 * If set to null or omitted, the cookie will be a session cookie and will not be retained
 * when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 * require a secure protocol (like HTTPS).
 * @type undefined
 *
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * Code adapted from...
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

mint.provide('', {
	cookie : function (key, value, options) {
		
		// key and at least value given, set cookie...
		if (arguments.length > 1 && String(value) !== "[object Object]") {
			options = jQuery.extend({}, options);
			
			if (value === null || value === undefined) {
				options.expires = -1;
			}
			
			if (typeof options.expires === 'number') {
				var days = options.expires,
				t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}
			
			value = String(value);
			
			return (document.cookie = [
					encodeURIComponent(key), '=',
					options.raw ? value : encodeURIComponent(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path ? '; path=' + options.path : '; path=/',
					options.domain ? '; domain=' + options.domain : '',
					options.secure ? '; secure' : ''
				].join(''));
		}
		
		// key and possibly options given, get cookie...
		options = value || {};
		var result,
		decode = options.raw ? function (s) {
			return s;
		}
		 : decodeURIComponent;
		return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	}
});

mint.provide('session', {
	_callbacks : [],
	_obj : false,
	inited : false,
	init : function () {
		if (!this.inited) {
			this.inited = true;
			this.pull();
		}
	},
	set : function (value) {
		if (mint.session._obj === false) {
			mint.session._obj = {};
		}
		$.extend(true, mint.session._obj, value || {});
		var oldCookie = mint.cookie('mint-' + mint.config('store'));
		mint.cookie('mint-' + mint.config('store'), JSON.stringify(mint.session._obj));
		
		if (!oldCookie && mint.session._obj.logged_in) {
			window.location = window.location;
		}
		
		$.each(mint.session._callbacks, function () {
			this(mint.session._obj);
		});
		mint.session._callbacks = [];
		mint.session.verifyIp();
		
	},
	pull : function (cb) {
		var src = mint.config('baseUrl') + '/' + mint.config('store') + '/session.js',
		session = this._storeCookie();
		
		if (session && session.id) {
			src += "?session=" + session.id;
			
			if (session.platform_logged_in === false) {
				src += "&logout=1";
				delete mint.session._obj.platform_logged_in;
				mint.cookie('mint-' + mint.config('store'), JSON.stringify(mint.session._obj));
			}
		}
		
		this._injectScript(src);
	},
	get : function (cb) {
		if (mint.session._obj) {
			cb(mint.session._obj);
		} else {
			mint.session._callbacks.push(cb);
		}
	},
	loggedIn : function (cb) {
		this.get(function (session) {
			cb(mint.session._obj.logged_in);
		});
	},
	logout : function (cb) {
		mint.cookie('mint-' + mint.config('store'), null);
		
		mint.req.json('${baseUrl}/${store}/auth/logout', function (data) {
			mint.session.set({
				logged_in : false
			});
			cb = cb || $.noop;
			if (cb.call)
				cb(data); // call local callbacks first
			mint.event.trigger('logout', data);
		});
	},
	verifyIp : function () {
		var session = this._obj;
		if (session.ip_service) {
			var src = session.ip_service + '/' + mint.config('store') + '/ip.js';
			//prevent loop. clear it out
			delete session.ip_service;
			
			if (session && session.id) {
				src += "?session=" + session.id;
			}
			this._injectScript(src);
		}
	},
	_storeCookie : function () {
		try {
			var cookie = unescape(mint.cookie('mint-' + mint.config('store')));
			return $.parseJSON(cookie);
		} catch (e) {
			return false;
		}
	},
	_injectScript : function (src) {
		var e = document.createElement('script');
		e.type = 'text/javascript';
		e.async = true;
		e.src = src;
		(document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]).appendChild(e);
	}
});

// Dont wait...get the session asap
if (mint.config('baseUrl') && mint.config('store')) {
	mint.session.init();
}

/* Glabol Event Watching */
mint.provide('event', {
	watch : function (eventName, fn) {
		$('body').bind(eventName, fn);
	},
	unwatch : function (eventName, fn) {
		$('body').unbind(eventName, fn);
	},
	trigger : function (eventName, params) {
		$('body').trigger(eventName, params);
	}
});

mint.provide('modal', {
	/*
	 * Create a modal/lightbox
	 * @param {String} the title you want displayed on the modal
	 * @param {String} the html you want to insert into the modal
	 * @param {Object}(optional) the modal options that you want to use for the $ modal
	 * @return {Object} the modal object that was created
	 * */
	create : function (title, body, options, closeHtml, contentClass) {
		closeHtml = (closeHtml || '');
		contentClass = (contentClass || false);
		var z = this;
		
		body = '<div id="mint-modal-content"' + (contentClass ? ' class="' + contentClass + '"' : "") + '><div class="mint-modal-title">' + title + '</div><div class="close"><a href="#" class="simplemodal-close">x' + closeHtml + '</a></div><div class="mint-modal-data">' + body + '</div></div>';
		
		options = $.extend({}, {
				overlayId : 'mint-overlay',
				containerId : 'mint-container',
				closeHTML : null,
				opacity : 65,
				//position: ['0'],
				overlayClose : true,
				onOpen : z.open,
				onClose : z.close
				//after:function() a function that you want to be called after the modal is shown
			}, options || {});
		var modal = $.modal(body, options);
		return modal;
	},
	/*
	 * Show a modal
	 * @param {Object} a modal object
	 * @return
	 */
	open : function (d) {
		var z = this;
		z.container = d.container[0];
		d.overlay.fadeIn('fast', function () {
			$('#simplemodal-data').show();
			
			$('#mint-container').css('visibility', 'hidden').show();
			var h = $(".mint-modal-data").outerHeight() + $(".mint-modal-title").outerHeight();
			$('#mint-container').hide().css('visibility', 'visible').height(h).slideDown(function () {
				$(this).css('height', 'auto').css('top', ($(window).height() / 2) - ($('#mint-container').outerHeight() / 2));
				if (z.o.after) {
					z.o.after.call(d);
				}
				// trigger an event notifying subscribers that the modal is fully visible. This is mainly
				// needed for third party scripts where the element that its trying to append into (and it's
				// parents) have to be fully visible upon instantiation.
				if (mint.event.trigger) {
					mint.event.trigger("modalFullyVisible", [d]);
				}
			});
		});
	},
	/*
	 * Hide a modal
	 * @param {Object} close a modal
	 * @return
	 */
	close : function (d) {
		if (!d) {
			mint.event.unwatch("modalFullyVisible");
			$.modal.close();
			return;
		}
		d.container.animate({
			height : 1,
			opacity : 0
		},
			500,
			function () {
			mint.event.unwatch("modalFullyVisible");
			$.modal.close();
		});
	},
	/*
	 * Resize an existing modal container
	 * @return
	 */
	resize : function () {
		$('.resize-modal').css('left', ($(window).width() / 2) - ($('.resize-modal').outerWidth() / 2))
		.css('top', ($(window).height() / 2) - ($('.resize-modal').outerHeight() / 2));
	}
});

mint.provide('', {
	model : function () {}
});

// Create a new Class that inherits from this class
mint.provide('model', {
	initializing : false,
	extend : function (prop) {
		var _super = this.prototype;
		
		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		mint.model.initializing = true;
		var prototype = new this();
		mint.model.initializing = false;
		
		// Copy the properties over onto the new prototype
		for (var name in prop) {
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && $.isFunction(prop[name]) ?
				(function (name, fn) {
					return function () {
						var tmp = this._super;
						
						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = _super[name];
						
						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						var ret = fn.apply(this, arguments);
						this._super = tmp;
						
						return ret;
					};
				})(name, prop[name]) :
				prop[name];
		}
		
		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!mint.model.initializing && this.init)
				this.init.apply(this, arguments);
		}
		
		// Populate our constructed prototype object
		Class.prototype = prototype;
		
		// Enforce the constructor to be what we expect
		Class.constructor = Class;
		
		// And make this class extendable
		Class.extend = arguments.callee;
		
		return Class;
	}
});

mint.provide('msg', {
	init : function () {
		var z = this;
		mint.event.watch('mint-server-error', function (ev, error) {
			//console.log('hit server-error hanlder!',error);
			if (error.error)
				error = error.error;
			error = error || {
				message : 'Unknown Error'
			}
			
			var first = (error.list || [{}
					
				]).shift();
			z.create(error.details || '', error.message, 'mint-server-error');
		});
	},
	create : function (msg, title, type) {
		type = type || '';
		msg = msg || '';
		var $notification_holder = $('#notification_holder');
		if (!$notification_holder.length) {
			$notification_holder = $("<div id='notification_holder'></div>").css({
					zIndex : 15000,
					top : 0,
					left : 0,
					width : "100%",
					position : 'fixed'
				});
			$('body').append($notification_holder);
		}
		
		if (!$.support.boxModel) {
			$notification_holder.css({
				position : 'absolute',
				top : $(window).scrollTop()
			});
		}
		
		var $notification = $("<div class='notification " + type + "' data-stest='notification'></div>").css({
				position : 'relative',
				top : 0,
				left : 0
			}).hide();
		if (title) {
			$notification.append("<h3>" + title + "</h3>");
		}
		
		if (title == 'Internal Server Error') {
			//msg = 'An error occurred please try again.';
		}
		
		if (msg.length > 200) {
			msg = msg.substr(0, 197) + '...';
		}
		
		$notification.append("<p>" + msg + "</p>").appendTo($notification_holder);
		
		var $close = $("<a class='notification-close' href='#'>Close</a>").css({
				position : "absolute",
				top : 0,
				right : 21,
				display : "block",
				"line-height" : "20px",
				"height" : "20px"
			}).click(function () {
				$notification.slideUp('slow', function () {
					$(this).remove();
				});
				return false;
			}).appendTo($notification);
		$close.css("top", ($notification.outerHeight() - 20) / 2);
		
		if (navigator.userAgent.match(/iPad|iPhone/i) != null) {
			window.scroll(0, 0);
		}
		
		$notification.slideDown('slow', function () {
			$close.css("top", ($notification.outerHeight() - 20) / 2).hide().show();
		});
		
		setTimeout(function () {
			$notification.slideUp('slow', function () {
				$(this).remove();
			});
		}, 10000);
	}
});

mint.provide('msg.loading', {
	show : function () {
		if ($('#mint-loading-full').length)
			return;
		$('<div id="mint-loading-full"></div>')
		.html('<div class="mint-overlay"></div><div class="mint-loading-container"><div class="mint-loading" style="background: #fff url(' + mint.config('baseUrl') + '/images/loading.gif) no-repeat center center;"></div></div>')
		.appendTo('body')
		.fadeIn();
	},
	hide : function () {
		$('#mint-loading-full').fadeOut(function () {
			$(this).remove();
		});
	}
});

mint.provide('req', {
	timeout : 180000,
	requests : 0,
	errors : [],
	init : function () {
		var z = this;
		z.xhr = new easyXDM.Rpc({
				local : "/xd/name.html",
				swf : mint.config('baseUrl') + "/xd/easyxdm.swf",
				remote : mint.config('baseUrl') + "/proxy"
				//remoteHelper: mint.config('baseUrl')+ "/xd/name.html"
			,
				lazy : true
			}, {
				remote : {
					request : {}
				}
			});
		
		$.ajaxSetup({
			error : function (jqXHR, textStatus, errorThrown) {
				z.requests--;
				z.errors.push(errorThrown);
				if (textStatus == 'timeout') {
					z.failedRequest("Sorry, a request took too long to complete.");
				} else if (textStatus == 'abort') {
					//z.failedRequest("Woah, a request was stopped unexpectedly.");
				} else if (textStatus == 'parsererror') {
					//z.failedRequest("Weird, a request got a response that didnt make sense.");
				} else {
					//z.failedRequest("Sorry, there was an error with a request.");
				}
			}
		});
	},
	last_error : "",
	/*
	 * Get a url string that was interpolated with mint config vars
	 * @param {string} url string with template variables that are in the mint.config() return obj
	 * @param {obj(optional)} an object whos attributes you want to pass into the url string. these
	 *                        have precendence over the properties of the mint.config() obj
	 * @return {string} formatted string representing a url
	 */
	getUrlTmpl : function (url, optParams) {
		optParams = (optParams || false);
		var data = mint.config();
		if (optParams) {
			$.extend(data, optParams);
		}
		return $.tmpl(url, data).text();
	},
	json : function (url, data, cb) {
		url = this.getUrlTmpl(url);
		
		if (!cb) {
			cb = data;
			data = {};
		}
		
		var z = this;
		
		data = z.treat_data(data);
		mint.session.get(function (session) {
			if (session.id) {
				data.session = session.id;
			}
			z.requests++;
			
			$.ajax({
				type : "GET",
				data : data,
				url : url,
				dataType : 'jsonp',
				success : z.handle_session_timeout(cb)
			});
		});
	},
	post : function (url, data, cb, error) {
		var z = this,
		urlParts = [];
		mint.msg.loading.show();
		
		data = z.treat_data(data);
		mint.session.get(function (session) {
			if (url.indexOf("?") == -1) {
				url += "?";
			}
			if (session.id) {
				data.session = session.id;
				urlParts.push("session_id=" + session.id);
			}
			if (session.customer) {
				urlParts.push("customer=" + session.customer);
			}
			if (mint.cookie('aid')) {
				urlParts.push("aid=" + mint.cookie('aid'));
			}
			url += urlParts.join("&");
			
			z.requests++;
			
			z.xhr.request({
				url : url,
				method : "POST",
				data : data,
				timeout : z.timeout
			}, function (response) {
				var json = $.parseJSON(response.data);
				z.handle_session_timeout(cb)(json);
				mint.msg.loading.hide();
			}, function (err) {
				z.requests--;
				z.errors.push(err);
				mint.msg.loading.hide();
				if (error && error instanceof Function)
					error(err);
			});
		});
	},
	treat_data : function (data) {
		if (!data)
			data = {};
		
		var aid;
		if (aid = mint.util.getParameterByName('aid'))
			data.aid = aid;
		else if (typeof(data.aid) == 'undefined' && typeof(window._mint_aid) != 'undefined')
			data.aid = window._mint_aid;
		
		return data;
	},
	handle_session_timeout : function (cb) {
		var self = this;
		return function (data) {
			self.requests--;
			if (data && data.__session_timeout) {
				mint.event.trigger('mint-server-error', data);
				setTimeout(function () {
					mint.session.logout();
				}, 5000);
				mint.msg.loading.hide();
			} else {
				if (cb)
					cb.apply(this, arguments);
			}
		};
	},
	failedRequest : function (data) {
		var oldRedirect = mint.cookie('mint-error-redirect'),
		refreshMessage = "I'm going to refresh the page and hopefully things will function correctly.";
		
		if (oldRedirect != window.location) {
			mint.cookie('mint-error-redirect', window.location);
			data += ' ' + refreshMessage;
			setTimeout(function () {
				window.location = window.location;
			}, 6000);
		}
		
		mint.event.trigger('mint-server-error', {
			message : data
		});
	}
});

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, jQuery:true, mint:true*/

(function ($) {
	$.fn.serializeJSON = function () {
		var json = {};
		jQuery.map($(this).serializeArray(), function (n, i) {
			json[n.name] = n.value;
		});
		return json;
	};
})(jQuery);

mint.provide('form', {
	msg : {
		create : function (msg, title, type) {}
	},
	field : {
		error : {
			create : function ($field, msg) {
				var par = $field.addClass('has-errors').parent().parent();
				if (par.hasClass('error')) {
					par.find('.error-text').text(msg);
				} else {
					par.addClass('error').find('p').append('<div class="error-text">' + msg + '</div>');
				}
			},
			remove : function ($field) {
				$field.removeClass('has-errors').parent().parent().removeClass('error').find('.error-text').remove();
			}
		}
	},
	bind : function ($form, cb, before) {
		var z = this;
		$form.submit(function () {
			var $form = $(this),
			params = $form.serializeJSON(),
			validationErrors = [];
			
			if (!z.validate($form, validationErrors)) {
				mint.event.trigger('mint-validation-error', validationErrors);
				return false;
			}
			
			if (mint.session._obj.id) {
				params.session = mint.session._obj.id;
			}
			
			//allow before to stop submit
			if (before && before.call) {
				if (before(params) === false) {
					return false;
				}
			}
			
			mint.form.submit($form, params, cb);
			
			return false;
		});
	},
	submit : function ($form, params, cb) {
		if ($form.hasClass('mint-submit-block')) {
			if ($form.hasClass('mint-submit-is-blocked')) {
				return false;
			}
			$form.addClass('mint-submit-is-blocked');
		}
		mint.req.post($form.attr('action'), params, function (data) {
			$form.removeClass('mint-submit-is-blocked');
			
			if (data.error) {
				//alert("There has been an error. Spitting it out to console.log");
				//console.log('error!',data.error);
				data.error.params = params;
				mint.req.last_error = JSON.stringify(data.error);
				mint.req.errors.push(data.error);
				mint.event.trigger('mint-server-error', data.error);
				
				cb(data, data.error);
			} else {
				cb(data);
			}
		}, function (error) {
			$form.removeClass('mint-submit-is-blocked');
			mint.req.last_error = JSON.stringify(error);
			mint.req.errors.push(error);
			
			console.log('xdm transport error: ', error);
			//some kind of absolute failure
			mint.event.trigger('mint-server-error', {
				code : -552,
				type : 'xdm transport error',
				message : 'There was an error sending your request or reading the response. Please refresh the page and try again.',
				refresh : true,
				raw : error
			});
			cb(data, data.error);
		});
	},
	validate : function ($form, errored, silent) {
		var stopSubmit = false;
		if (!errored)
			errored = [];
		
		$form.find("[class*=validate]").each(function () {
			if (!$(this).hasClass('mint-disable-validation')) {
				if (!mint.form.validate.checkField(this, silent)) {
					errored.push(this);
					stopSubmit = true;
					
				}
			}
		});
		
		console.log('Validation ' + (stopSubmit ? "Failed" : "Passed"));
		
		return !stopSubmit;
	}
});

mint.provide('form.validate', {
	rules : {
		required : {
			regex : "none",
			alertText : "*This field is required.",
			alertTextCheckboxMultiple : "Please select an option.",
			alertTextCheckboxe : "This checkbox is required."
		},
		length : {
			regex : "none",
			alertText : "Between ",
			alertText2 : " and ",
			alertText3 : " characters allowed."
		},
		confirm : {
			regex : "none",
			alertText : "Your field is not matching."
		},
		telephone : {
			regex : /^[0-9\-\(\)\ ]+$/,
			alertText : "Invalid phone number."
		},
		email : {
			regex : /^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,
			alertText : "Invalid email address."
		},
		password : {
			regex : /^.*(?=.{8,}).*$/,
			alertText : "Password must be at least 8 characters."
		},
		date : {
			regex : /^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/,
			alertText : "Invalid date. (YYYY-MM-DD)"
		},
		onlyNumber : {
			regex : /^[0-9\ ]+$/,
			alertText : "Numbers only."
		},
		noSpecialCaracters : {
			regex : /^[0-9a-zA-Z]+$/,
			alertText : "No special characters allowed."
		},
		onlyLetter : {
			regex : /^[a-zA-Z\ \']+$/,
			alertText : "Letters only."
		}
	},
	checkField : function (el, silent) {
		rulesParsing = $(el).attr('class');
		rulesRegExp = /\[(.*)\]/;
		getRules = rulesRegExp.exec(rulesParsing);
		str = getRules[1];
		pattern = /\[|,|\]/;
		result = str.split(pattern);
		return this.validateCall($(el), result, silent)
	},
	validateCall : function ($field, rules, silent) { // EXECUTE VALIDATION REQUIRED BY THE USER FOR THIS FIELD
		var promptText = false;
		
		var fieldName = $field.attr("name");
		var fieldType = $field.is("select") ? 'select' : $field.attr('type');
		
		for (i = 0; i < rules.length; i++) {
			if (promptText)
				break;
			if (rules[i].length < 2) {
				continue;
			}
			switch (rules[i]) {
			case "required":
				_required($field, rules);
				break;
			case "length":
				_length($field, rules, i);
				i += 2;
				break;
			case "confirm":
				_confirm($field, rules, i);
				i++;
				break;
			case "notzero":
				_notZero($field, rules);
				i++;
				break;
			default:
				_default($field, rules, i);
			};
		};
		if (promptText && !silent) {
			mint.form.field.error.create($field, promptText);
		} else {
			mint.form.field.error.remove($field);
			$field.removeClass('has-errors').parent().find('.error').remove();
		}
		
		function _required($field, rules) {
			if (fieldType == "hidden" || fieldType == "text" || fieldType == "password" || fieldType == "textarea" || fieldType == "select") {
				if (!$field.val()) {
					promptText = mint.form.validate.rules[rules[i]].alertText;
				}
			}
			if (fieldType == "radio" || fieldType == "checkbox") {
				
				if ($("input[name='" + fieldName + "']:checked").size() == 0) {
					if ($("input[name='" + fieldName + "']").size() == 1) {
						promptText = mint.form.validate.rules[rules[i]].alertTextCheckboxe;
					} else {
						promptText = mint.form.validate.rules[rules[i]].alertTextCheckboxMultiple;
					}
				}
			}
		};
		function _notZero($field, rules) {
			if ($field.val() == "0") {
				promptText = "This field is required.";
			}
		};
		function _default($field, rules, position) { // VALIDATE REGEX RULES
			customRule = rules[position];
			if (mint.form.validate.rules[customRule]) {
				pattern = mint.form.validate.rules[customRule].regex;
				
				if ($field.attr('value') != "" && !pattern.test($field.attr('value'))) {
					promptText = mint.form.validate.rules[customRule].alertText;
				}
			}
		};
		function _confirm($field, rules, position) { // VALIDATE FIELD MATCH
			confirmField = rules[position + 1];
			
			if ($field.attr('value') != $("#" + confirmField).attr('value')) {
				promptText = mint.form.validate.rules["confirm"].alertText;
			}
		};
		function _length($field, rules, position) { // VALIDATE LENGTH
			startLength = parseInt(rules[position + 1]);
			endLength = parseInt(rules[position + 2]);
			fieldLength = $field.attr('value').length;
			
			if (fieldLength < startLength || fieldLength > endLength) {
				promptText = mint.form.validate.rules["length"].alertText + startLength + mint.form.validate.rules["length"].alertText2 + endLength + mint.form.validate.rules["length"].alertText3;
			}
		};
		
		return promptText ? false : true;
	}
});

mint.provide('ui', {
	widgets : {},
	_widgetsOnPage : [], // List of widget names that are present on the page.
	init : function () {
		this.parse();
		
		$('.case').live('click', function () {
			location.href = $(this).attr('goto');
			return false;
		}).live('mouseenter', function () {
			$(this).addClass('hover');
		})
		.live('mouseleave', function () {
			$(this).removeClass('hover');
		});
	},
	pre : function () { // Pre executes right when this module loads
		// register a jquery selector to get widgets
		$.fn.widgetize = function (name, options) {
			this.each(function () {
				mint.ui.factory(name, $(this).addClass('mint mint-' + name).attr('data-stest', 'mint-' + name).html(''), options || {});
			});
			return this; // make chainable
		};
	},
	tmplHTML : function (tmpl, data) {
		data = data || {};
		return $('<div>').append($.tmpl(tmpl, data)).remove().html();
	},
	baseWidget : mint.model.extend({
		init : function (name, $el, options) {
			var z = this;
			this.$el = $el;
			this.options = $.extend(true, {}, this.options || {}, options || {});
			this.templateName = name;
			if (this.options.events) {
				$.each(this.options.events, function (i, v) {
					z.$el.bind(i, v);
				});
			}
			this._init($el, this.options);
		},
		_init : function () {},
		options : {},
		render : function (data) {
			var obj = mint.tmpl,
			n = this.templateName.split('-'),
			v = obj;
			while ((obj = v) && n.length)
				v = obj[n.shift()];
			if (this.options.tmpl) {
				$(this.options.tmpl).tmpl(data || this.options).appendTo(this.$el.html(''));
			} else {
				$.tmpl(v, data || this.options).appendTo(this.$el.html(''));
			}
		}
	}),
	register : function (name, obj) {
		if (obj.init) {
			obj._init = obj.init;
			delete obj.init;
		}
		this.widgets[name] = this.baseWidget.extend(obj);
	},
	factory : function (name, $el, options) {
		options = ($.type(options) == "object" ? options : {});
		// wont be in the widget name obj if called via $.widgetize
		if (!this.widgets[name]) {
			this.register(name, options);
		}
		// add the name of this widget to the known widgets loaded on this page
		if ($.inArray(name, this._widgetsOnPage) == -1)
			this._widgetsOnPage.push(name);
		return new this.widgets[name](name, $el, options);
	},
	/**
	 * Check to see if a widget has been loaded into the UI
	 * @param {String} the name of the widget whos presence you want to check
	 * @return {Boolean} is the widget present?
	 */
	isWidgetPresent : function (widgetName) {
		return $.inArray(widgetName, this._widgetsOnPage) > -1;
	},
	parse : function () {
		var z = this;
		$('script[type^="text/mint-"]').each(function () {
			var
			$script = $(this),
			widgetName = $script.attr('type').replace('text/mint-', ''),
			options = {},
			optionsText = $.trim(this.innerHTML),
			$el = $("<div class='mint " + $script.attr('type').replace('text/', '') + "' data-stest='" + $script.attr('type').replace('text/', '') + "'></div>").insertAfter($script);
			
			if (optionsText != "") {
				try {
					options = eval('(' + optionsText + ')');
				} catch (e) {}
			}
			$script.remove();
			
			if (widgetName) {
				var widget = z.factory(widgetName, $el, options || {});
			} else {
				console.log("Could not load widget: " + widgetName);
			}
		});
	}
});

mint.provide('css', {
	render : function (styles) {
		// Yeah Facebook! They solved this bug.  Assumption: you have a stylesheet already
		if (!$.browser.msie) {
			var style = document.createElement('style');
			style.type = 'text/css';
			style.textContent = styles;
			document.getElementsByTagName('HEAD')[0].appendChild(style);
		} else {
			try {
				document.createStyleSheet().cssText = styles;
			} catch (exc) {
				// major problem on IE : You can only create 31 stylesheet objects with
				// this method. We will have to add the styles into an existing
				// stylesheet.
				if (document.styleSheets[0]) {
					document.styleSheets[0].cssText += styles;
				}
			}
		}
	}
});

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, mint:true*/
/*
 * mint.tracking.qParams = JSON Object representing query string parameters that should be turned into cookies
 * format
 *
 * { //main tracking object
 *      // the query parameter object with the query
 *      // parameter name as its key
 *      "aid":{
 *          // the name that the query parameter will be saved as in the cookie. this also serves
 *          // as the key that will be sent to the tracking pixel
 *          "name":"aid",
 *          // should this query parameter be set everytime track() is called? setting
 *          // this flag to true will remove any tracking prefix associated with this
 *          "alwaysTrack":false,
 *          // a prefix to attach that denotes a certain type of tracking in the query logs
 *          "namespace:"_CE"
 *          // optional options for the cookie that will be set for this query parameter
 *          "cookieOpts":{
 *              // true = do not url encode the query parameter value
 *              raw: false ,
 *              // number of days that this cookie should be valid for
 *              expires: 90,
 *              // the domain that this cookie is applicable to
 *              domain: "jewelmint.com",
 *              // the url path (within the domain) that this cookie applies to
 *              path: "/get-started",
 *              // should the cookie be transfered over a secure protocol?
 *              secure: false
 *          }
 *
 * }
 */

mint.provide('tracking', {
	//EXTERNAL
	//USE THIS METHOD TO TRACK STUF FOR REAL.
	track : function (vars, varPrefix, complete) {
		var useVars = vars || window._VARS,
		prefix = varPrefix || '_S',
		self = this,
		qs = this.parseQS(),
		undef;
		
		//clear global _VARS
		if (!vars && window._VARS)
			window._VARS = null;
		
		mint.session.get(function (session) {
			
			var params = self.getParams(session);
			
			if (qs.utm_campaign) {
				var campaign = {
					name : qs.utm_campaign || '',
					source : qs.utm_source || '',
					medium : qs.utm_medium || ''
				};
				self.flattenValues('campaign', campaign, params);
			}
			
			if (useVars) {
				var lengthCheck = (useVars.length !== undef ? useVars.length > 0 : 1);
				if (lengthCheck) {
					self.flattenValues(prefix, useVars, params);
				}
			}
			
			self.inject(params, complete);
		});
		
		return this;
	},
	preProccessTracking : function (text) {
		return text.replace(/<\\\/script>/g, "</script>");
	},
	processOnPageTracking : function (scriptType) {
		scriptType = (scriptType || false);
		var self = this;
		$("script").each(function () {
			var $elm = $(this),
			type = $elm.attr("type"),
			typeName = scriptType ? scriptType : "text/tracking-pixel";
			
			if (type != typeName)
				return;
			mint.session.get(function (session) {
				var groupId = parseInt(session.data.status, 10),
				ret = {
					customerGroupId : groupId,
					numberOrders : session.num_orders
				},
				tmplTxt = self.preProccessTracking($elm.text()),
				template = mint.ui.tmplHTML(tmplTxt, ret);
				
				$elm.replaceWith('<div style="display:none;position:absolute;top:-9999px;" data-stest="' + ($elm.attr("data-stest") || "") + '">' + template + '"</div>');
			});
		});
	},
	//EXTERNAL
	setTrackingQParams : function (config) {
		//no-op right now.
	},
	//tracking query string to cookie configuration.
	qParams : {
		//TODO update namespace / if undefined use default
		// key for tracking dynamic offers
		"aid" : {
			name : "aid",
			alwaysTrack : true,
			namespace : false
		},
		"s" : {
			name : "cpa-s",
			namespace : '_CE'
		},
		"p" : {
			name : "cpa-p",
			namespace : '_CE'
		},
		"a" : {
			name : "cpa-a",
			namespace : '_CE'
		},
		"cmp" : {
			name : "cpa-cmp",
			namespace : '_CE'
		},
		"lp_id" : {
			name : "lp_id",
			namespace : '_M'
		},
		"j" : {
			name : "j" //jobid
		},
		"e" : {
			name : "e" //email
		},
		"l" : {
			name : "l" //list-id
		},
		"u" : {
			name : "u" //landing page URL ID
		},
		"jb" : {
			name : "jb" //Job batch ID
		}
		/*,
		"mid":{
		name:"mid"//Exacttarget member ID
		}*/
	},
	/*
	 * create an object of default and confiugured tracking data
	 */
	getParams : function (session) {
		var cid,
		sid,
		ip;
		cid = sid = ip = '';
		
		if (session.id)
			sid = session.id;
		if (session.customer)
			cid = session.customer;
		if (session.ip)
			ip = session.ip
				
				var params = {
				store_id : mint.config('store'),
				sid : sid,
				cid : cid,
				ip : ip,
				ref : window.document.referrer + '',
				load : window._START ? (window._LOAD || new Date()) - window._START : 0,
				ready : window._START ? window._READY - window._START : 0,
				location : location.href,
				frame : window.parent !== window ? 1 : 0
			};
		
		this._log('default params: ', params);
		//the fixed params always override the env params
		return $.extend(this.getEnvironmentParams(), params);
	},
	getEnvironmentParams : function (params) {
		var obj = {},
		qs = this.parseQS(),
		cookieValue,
		cookieConfig,
		value;
		
		for (var qName in this.qParams) {
			cookieConfig = this.qParams[qName];
			cookieValue = mint.cookie(qName);
			value = false;
			if (qs[qName]) {
				//use qs var as value
				value = qs[qName];
				//set cookie! for 90 days default
				this._log('SET COOKIE: ', mint.cookie(qName, value, cookieConfig.cookieOpts || {
						expires : 90
					}));
				
			} else if (cookieValue) {
				value = cookieValue;
			}
			
			ns = cookieConfig.namespace;
			if (ns && value) {
				if (!obj[ns])
					obj[ns] = {};
				obj[ns][qName] = value;
			} else if (value) {
				obj[qName] = value;
			}
		}
		this._log('environment params: ', obj);
		return obj;
	},
	basePixels : {
		"default" : {
			url : function () {
				return mint.config('baseUrl') + "/skin/px.jpg"
			}
		},
		"marketing" : {
			url : "https://m1.jewelmint.com/maintrackv1/blank.gif"
		}
	},
	getBaseSrc : function (name) {
		var time = (new Date()).getTime(),
		px = this.basePixels[name] || this.basePixels['default'];
		
		return ($.isFunction(px.url) ? px.url() : px.url) + "?t=" + time;
	},
	toQstring : function (base, obj) {
		(obj = obj || false)
		var cur,
		ret = "",
		undef;
		if (obj) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key) && obj[key] != undef)
					ret += (base.indexOf("?") > -1 ? "&" : "") + key + "=" + obj[key];
				i++;
			}
		}
		return base + ret;
	},
	getQueryStrings : function (params, srcBase, additionalModifier) {
		var maxLength = 800,
		multipartChunkCountSize = 8,
		multipartBodyKey = 'body',
		rawParams = params,
		ret = [],
		s;
		params = $.param(params);
		
		// the length of the query string for the tracking pixel is too long
		// make multiple tracking pixels
		if ((params.length + srcBase.length + 1) > maxLength) {
			
			//sanitize params for chunked transfer
			params = encodeURIComponent(params);
			
			if (!rawParams)
				this._log('session id not found in parameters: ', rawParams);
			
			var multipartId = (new Date().getTime()) + rawParams.sid,
			multiParams = {
				"_MP" : multipartId
			},
			max = maxLength - (this.toQstring(srcBase, multiParams).length + multipartChunkCountSize + multipartBodyKey.length + 3),
			chunks = Math.ceil(params.length / max),
			chunk;
			
			for (var i = 0, j = chunks; i < j; i++) {
				chunk = params.substr(i * max, max);
				multiParams._c = chunks;
				multiParams._id = i;
				multiParams[multipartBodyKey] = chunk;
				s = this.toQstring(srcBase, multiParams);
				this._log('multi px ', i, ' of ', chunks, ': ', s);
				if ($.isFunction(additionalModifier)) {
					s = additionalModifier(s, srcBase, multiParams);
				}
				ret.push(s);
			}
		} else {
			s = this.toQstring(srcBase) + "&" + params;
			this._log('reg px: ', s);
			ret.push(s);
		}
		return ret;
	},
	inject : function (params, complete) {
		this._log('inject: ', params);
		
		var pixels = {
			"marketing" : {
				img : {}
				
			},
			"default" : {
				img : {}
				
			}
		},
		baseSrc,
		imgSrcs = [],
		pixel,
		self = this,
		_pending = 0,
		undef;
		
		// function that will modify the query string for multipart pixels instead
		// of the default query string concatination function
		pixels.marketing.queryAddFunc = function (str, base, multiParams) {
			multiParams._c = undef;
			return self.toQstring(base, multiParams);
		};
		
		//create array of pixels to track
		for (var pxName in pixels) {
			pixel = pixels[pxName]
				baseSrc = this.getBaseSrc(pxName);
			mint.util.appendTo(this.getQueryStrings(params, baseSrc, (pixel.queryAddFunc || false)), imgSrcs);
		}
		
		self._pendingPixels += imgSrcs.length;
		
		var counter = 0,
		results = [],
		errors = [],
		manageCB = function (err, data) {
			if (err)
				errors.push(err);
			else
				results.push(data);
			if (!(--counter)) {
				try {
					if (complete && complete.call) {
						console.log('tracking callback');
						complete(errors.length ? errors : null, results.length ? results : null);
					}
				} catch (e) {
					console.log('error calling user supplied callback')
				}
			}
		};
		
		for (var i = 0, j = imgSrcs.length; i < j; ++i) {
			counter++;
			self._createImage(imgSrcs[i], manageCB);
		}
		
		if (!$("#pixelTest").length) {
			$("body").append("<div id='pixelTest' style='position:absolute;top:0;left:-2000px;'></div>");
		}
	},
	_testMode : false,
	inTestMode : function () {
		return this._testMode;
	},
	startTestMode : function () {
		this._testMode = true;
	},
	getTrackedPixels : function () {
		return this._trackedSrcs.join(",");
	},
	//util methods - qunit reuired!
	flattenValues : function (k, v, obj) {
		var z = this;
		var t = typeof(v);
		if (v instanceof Array) {
			$.each(v, function (i, v) {
				z.flattenValues(k + '[' + i + ']', v, obj);
			});
		} else if (t == 'object' && v) {
			$.each(v, function (i, v) {
				z.flattenValues(k + '.' + i, v, obj);
			});
		} else {
			obj[k] = v;
		}
	},
	parsedQS : false,
	parseQS : function (str) {
		
		if (this.parsedQS)
			return this.parsedQS;
		
		var params = {};
		str = str || location.search.substr(1) || '';
		str = str.split('&');
		$.each(str, function (k, v) {
			v = v.split('=');
			//ignore arrays right now
			params[v[0] || ''] = decodeURIComponent(v[1]);
		});
		
		// cache for later
		this.parsedQS = params;
		
		return this.parsedQS;
	},
	trackCms : function (collection) {
		if ($.isEmptyObject(collection))
			return;
		
		var out = {
			nodes : []
		},
		reg = /\[[0-9:]+\]/g,
		cur;
		
		if (collection.pixel_tracker.match(reg)) {
			if (collection.pixel_tracker.indexOf("&") == -1)
				throw "pixel_tracker property of cms collection is malformed";
			$.each(collection.pixel_tracker.split("&"), function (idx, piece) {
				cur = reg.exec(piece);
				if (cur && cur.length)
					out.nodes.push(cur[0]);
			});
		}
		this.track(out, "_cms");
	},
	_createImage : function (src, cb) {
		var self = this,
		currentImage = new Image();
		
		currentImage.onload = function () {
			if (self._testMode)
				self._log('loaded px: ', this.src);
			self._pendingPixels--;
			if (cb && cb.call)
				cb(false, this.src);
		}
		currentImage.onerror = function (ev) {
			if (self._testMode)
				self._log('ERROR px: ', this.src);
			self._erroredPixels++;
			self._pendingPixels--;
			if (cb && cb.call)
				cb(ev, this.src);
		}
		
		currentImage.src = src;
		self._pendingPixels--;
		self._firedPixels++;
		
		// if testing mode is turned on, save the tracked src's to the tracking obj
		if (self._testMode) {
			self._trackedSrcs = this._trackedSrcs || [];
			if (self._trackedSrcs.indexOf(src) == -1)
				self._trackedSrcs.push(src);
		}
	},
	_debug : 0,
	_setDebug : function (on) {
		this._debug = on ? 1 : 0;
		mint.cookie('_tracking_debug', this._debug, {
			expires : 1
		});
	},
	_log : function () {
		if (this._debug) {
			console.log.apply(console, arguments);
		}
	},
	/*
	 * Test function for google analytics tracking pixels
	 * logs, and saves that data that is passed into the _jaq arr
	 * as well as the id
	 */
	trackGAPixel : function (GAData) {
		if (this._testMode) {
			if (!this._gaPixels)
				this._gaPixels = [];
			if (!$.isEmptyObject(GAData))
				this._gaPixels.push(GAData);
		}
	},
	getGAPixels : function () {
		return this._gaPixels;
	},
	_gaPixels : false,
	_firedPixels : 0,
	_pendingPixels : 0,
	_erroredPixels : 0
});

//enable debug mode
mint.tracking._debug = mint.cookie('_tracking_debug');

//GOOGLE ANALYTICS - this provides the abillity to use multiple accounts and fork events to the beachmint pixel
if (!window._jaq)
	var _jaq = [];
if (!window._gaq)
	var _gaq = [];
(function () {
	var _jaq_b4 = _jaq,
	undef;
	_jaq = {
		accounts : {},
		push : function (arr) {
			var uid;
			if (!arr.length)
				return;
			if (arr[0] == '_setAccount') {
				_jaq.accounts[arr[1] + ''] = [];
			} else if ((arr[0] + '').indexOf('_track') > -1) {
				//a track has been called unload stacks!
				var last = arr;
				for (uid in _jaq.accounts) {
					_gaq.push(['_setAccount', uid]);
					while (_jaq.accounts[uid].length) {
						_gaq.push(_jaq.accounts[uid].shift())
					}
					_gaq.push(last);
				}
				
				if (arr[0] == '_trackEvent') {
					mint.tracking.track({
						event : arr[1],
						action : arr[2],
						value : arr[3] || ''
					}, '_G');
				}
				
			} else {
				for (uid in _jaq.accounts) {
					
					_jaq.accounts[uid].push(arr);
					if (mint && mint.tracking && mint.tracking.inTestMode()) {
						mint.tracking.trackGAPixel({
							GAId : uid,
							data : arr
						});
					}
				}
			}
		}
	};
	
	for (var i = 0, j = _jaq_b4.length; i < j; i++)
		_jaq.push(_jaq_b4[i]);
	
	window._jaq_b4 = undef;
	
	//inject google async
	(function () {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	})();
	
	// get the query parameters list we want to track
	(function () {
		// make sure you are actually on a mint site
		var storeInfo = mint.getStoreInfo();
		// overwrite the tracking query parameters if the mint is configured to do so
		if ((String(storeInfo)).indexOf("object") > -1 && window.location.host.indexOf(storeInfo.name.toLowerCase()) > -1 && storeInfo.overwrite_query_params) {
			var self = this;
			var src = ('https:' == document.location.protocol ? 'https://' : 'http://') + window.location.host + "/assets/js/mint-query-params.js";
			var e = document.createElement('script');
			e.type = 'text/javascript';
			e.async = true;
			e.src = src;
			(document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]).appendChild(e);
		}
	})();
}
	());

$(window).bind('load', function () {
	mint.tracking.track().setTrackingQParams();
	mint.tracking.processOnPageTracking();
});

mint.provide("social", {
	options : {
		makePersonalURLCall : false,
		usingFacebookAPI : true
	},
	shareURL : false, // the tracking URL for the user to share and earn rewards
	shareTwitterURL : false,
	shareFacebookURL : false,
	doneQualifiers : {}, // an obj of deferreds that needs to be resolved or rejected for this module to be considered done/ready
	deferred : $.Deferred(),
	init : function () {
		
		// each of the following widgets needs the make personal URL call
		var fbInviteWidget = mint.ui.isWidgetPresent('social-invite_facebook'),
		twInviteWidget = mint.ui.isWidgetPresent('social-personal_url'),
		URLWidget = mint.ui.isWidgetPresent('social-personal_url'),
		self = this;
		
		if (fbInviteWidget || twInviteWidget || URLWidget)
			this.options.makePersonalURLCall = true;
		
		// since members or subscribers to this object count on facebook
		// to be present, add listeners to it.
		if (this.options.usingFacebookAPI) {
			this._addQualifier('facebookAPILoaded');
			
			mint.event.watch('facebookAPILoaded', function () {
				self._resolveQualifier("facebookAPILoaded");
			});
			
		}
		// get the share url
		if (this.options.makePersonalURLCall) {
			this._addQualifier('shareURL');
			this.getPersonalURL();
		}
		
		// there are no qualifers that need to be done for this module to be done
		if ($.isEmptyObject(this.doneQualifiers)) {
			this.deferred.resolve();
		}
	},
	/*
	 * Add a qualifier ( a deferred object that must resolve/reject) to the list of qualifiers.
	 * Only after each qualifier has resolved/rejected will this module be considered done
	 * and all of the subscribers to this module being done will be executed
	 * @param {String} name of the qualifier
	 * @return {Obj ($.Deferred) the newly added qualifier
	 */
	_addQualifier : function (qualifierName) {
		if (this.doneQualifiers.hasOwnProperty(qualifierName))
			throw new Error("Trying to add existing qualifier ");
		this.doneQualifiers[qualifierName] = new $.Deferred();
		return this.doneQualifiers[qualifierName];
	},
	getQualifier : function (qualifierName) {
		if (this.doneQualifiers.hasOwnProperty(qualifierName))
			throw new Error("Trying to get a non-existent qualifier ");
		return this.doneQualifiers[qualifierName].promise();
	},
	/*
	 * Resolve a qualifier
	 * @param {String} the name of the qualifier to resolve
	 * @param {Array (optional)} arguments to pass to the deferred when it resolves
	 * @return {Object ($.Deferred)} the deferred that was just resolved
	 */
	_resolveQualifier : function (qualifierName, qualifierArgs) {
		qualifierArgs = (qualifierArgs || []);
		if (!this.doneQualifiers[qualifierName])
			throw new Error(" qualifier:" + qualifierName + " is not a registered qualifier");
		var resolvedQualifier = this.doneQualifiers[qualifierName].resolve.apply(this.doneQualifiers[qualifierName], qualifierArgs);
		// check to see if all of the qualifiers are done
		var resolveQualifierCount = 0,
		numQualifiers = 0;
		for (var qualifier in this.doneQualifiers) {
			numQualifiers++;
			if (this.doneQualifiers[qualifier].isResolved()) {
				resolveQualifierCount++;
			}
		}
		// all of the parameters that we need have completed so
		// this objected is considereddone/ready
		if (resolveQualifierCount == numQualifiers) {
			this.deferred.resolve();
		}
		return resolvedQualifier;
		
	},
	/*
	 * Reject a qualifier
	 * @param {String} the name of the qualifier to reject
	 * @return {Object ($.Deferred)} the deferred that was just rejected
	 */
	_rejectQualifier : function (qualifierName) {
		if (!this.doneQualifiers[qualifierName])
			throw new Error(" qualifier:" + qualifierName + " is not a registered qualifier");
		return this.doneQualifiers[qualifierName].reject();
	},
	/*
	 * Get the personal url for the user
	 * @return
	 */
	getPersonalURL : function () {
		var self = this;
		if (this.options.makePersonalURLCall) {
			// make a request to get the user's personal sharing URL
			mint.req.json('${baseUrl}/${store}/customer/url', function (data) {
				if (!data.error) {
					var path = data.split('.com'),
					result = window.location.protocol + '//' + window.location.host + path[1];
					self.shareURL = result;
					
					self.shareTwitterURL = self.shareURL.replace(/invite-link/g, 'invite-twitter');
					self.shareFacebookURL = self.shareURL.replace(/invite-link/g, 'invite-facebook');
					
					if (!self.shareTwitterURL.indexOf('?')) {
						self.shareTwitterURL += "?";
					}
					self.shareTwitterURL += "?&sc=invite-twitter&utm_source=invite-twitter&utm_campaign=social-invite";
					
					if (!self.shareFacebookURL.indexOf('?')) {
						self.shareFacebookURL += "?";
					}
					self.shareFacebookURL += "&sc=invite-facebook&utm_source=invite-facebook&utm_campaign=social-invite";
					
					if (!self.shareURL.indexOf('?')) {
						self.shareURL += "?";
					}
					self.shareURL += "&sc=invite-link&utm_source=invite-link&utm_campaign=social-invite";
					
					//console.log(self.shareURL, self.shareTwitterURL, self.shareFacebookURL);
					
					if (mint.getStoreInfo().bitly) {
						var bitly = mint.getStoreInfo().bitly;
						mint.req.json('http://api.bitly.com/v3/shorten', {
							login : bitly.login,
							apiKey : bitly.key,
							longUrl : self.shareURL,
							format : 'json'
						}, function (data) {
							console.log(data);
							if (data.data && data.data.url) {
								self.shareURL = data.data.url;
							}
							self._resolveQualifier("shareURL");
						});
					} else {
						self._resolveQualifier("shareURL");
					}
					// success! notify all subscribers
					
				} else {
					// fail and notify all subscribers
					//self._rejectQualifier("shareURL", data );
					self._resolveQualifier("shareURL", {});
				}
			});
		} else {
			this.shareURL = false;
		}
		
	},
	/*
	 * Get the shortened invite link for the user to share via twitter/facebook
	 * @return {String} the link to share
	 */
	getShareURL : function (medium, cb) {
		var self = mint.social;
		if (medium && self['share' + medium + 'URL']) {
			//console.log('encoding: ' + self['share' + medium + 'URL']);
			var bitly = mint.getStoreInfo().bitly;
			mint.req.json('http://api.bitly.com/v3/shorten', {
				login : bitly.login,
				apiKey : bitly.key,
				longUrl : self['share' + medium + 'URL'],
				format : 'json'
			}, function (data) {
				if (data.data && data.data.url) {
					self['share' + medium + 'URL'] = data.data.url;
				}
				cb(self['share' + medium + 'URL']);
			});
		} else {
			cb(self['shareURL']);
		}
	},
	/*
	 * Get a boolean value of whether the main deferred is done
	 * at the time this method is called.
	 * @return {Bool} is the deferred resolved?
	 */
	isDone : function () {
		return this.deferred.isResolved();
	},
	done : function () {
		return this.deferred.promise();
	}
	
});

mint.provide('social.facebook', {
	loadingStatus : 'not loaded',
	_onLoad : [],
	init : function () {
		this.load();
	},
	ready : function (cb) {
		var z = this;
		switch (z.loadingStatus) {
		case 'loaded':
			cb();
			break;
		case 'not loaded':
			z.load();
		case 'loading':
			z._onLoad.push(cb);
			break;
		}
	},
	load : function () {
		var z = this;
		if (this.loadingStatus == 'not loaded' && mint.config('facebook')) {
			$('body').append('<div id="fb-root"></div>');
			this.loadingStatus = 'loading';
			$.ajax({
				url : window.location.protocol + '//connect.facebook.net/en_US/all.js',
				dataType : 'script',
				cache : true,
				success : function () {
					FB.init({
						appId : mint.config('facebook'),
						status : true,
						cookie : true,
						xfbml : true,
						oauth : true
					});
					z.loadingStatus = 'loaded';
					mint.event.trigger("facebookAPILoaded");
					$.each(z._onLoad, function (i, fn) {
						fn();
					});
				}
			});
		}
	},
	login : function (callback) {
		var z = this;
		z.ready(function () {
			FB.login(callback, {
				scope : 'email'
			});
		});
	},
	logout : function (callback) {
		var z = this;
		z.ready(function () {
			FB.logout(callback);
		});
	}
});

mint.provide('social.twitter', {
	options : {},
	_onLoad : [],
	init : function () {
		var twitterAPIKey = mint.config('twitter'),
		platformScriptURL = window.location.protocol + "//platform.twitter.com/anywhere.js?id=" + twitterAPIKey,
		self = this;
		
		// load the @anywhere api and execute all of the callback associated with its loading once
		// it loads
		$.getScript(platformScriptURL, function () {
			twttr.anywhere(function (T) {
				self.twitter = T;
				if (self._onLoad.length > 0) {
					$.each(self._onLoad, function (callbackObj) {
						if (!$.isFunction(callBackObj['func']))
							throw new Error(" callback function is not defined for twitter loading");
						if (!$.isArray(callBackObj['args']))
							throw new Error(" arguments for callback function are not defined for twitter loading");
						callbackObj['func'].apply(self, callBackObj['args']);
					});
				}
			});
		});
		
	},
	callOnLoad : function (args) {
		this._onLoad.push({
			func : args.callee,
			args : args
		});
	},
	tweet : function (useTweetBox, tweetOptions, tweetBoxElm) {
		if (!this.twitter) {
			this.callOnLoad(arguments);
			return false;
		}
		if (typeof useTweetBox == "undefined") {
			useTweetBox = true;
		} else if (!useTweetBox) {
			if (typeof tweetBoxElm == "undefined")
				throw new Error("using tweetbox but no tweet element defined");
		}
		var defaultTweetOptions = {
			height : 100,
			width : 400,
			label : "Share It",
			defaultContent : "this is a tweets content",
			data : null,
			onTweet : function () {
				if (useTweetBox)
					mint.modal.close();
			}
		},
		self = this,
		modal,
		modalCont;
		// overwrite the default options
		tweetOptions = (tweetOptions || $.extend(defaultTweetOptions, tweetOptions));
		if (useTweetBox) {
			
			// show the tweetbox once the modals showing animation has stopped
			mint.event.watch("modalFullyVisible", function (ev, modal) {
				var tweetBoxCont = modal.container.find(".mint-modal-data").get(0);
				self.twitter(tweetBoxCont).tweetBox(tweetOptions);
			});
			
			// instantiate the modal
			mint.modal.create("", "");
			
		} else {
			this.twitter(tweetBoxElm);
		}
	},
	/*
	 * Change the callback URL that twitter will use for oAuth. Necessary
	 * for trying to authenticate a user on a URL that is not mint's
	 * default callback_url
	 * https://dev.twitter.com/docs/anywhere/welcome#custom-callback
	 * @param {String} a string RELATIVE to the url's base that you want to change the callback url to
	 */
	changeCallbackURL : function (relativeURL) {
		if (!this.twitter) {
			this.callOnLoad(arguments);
			return false;
		}
		// the relative URL needs to start with a /
		var URL = mint.config("baseUrl") + relativeURL;
		twttr.anywhere.config(URL);
	}
});

mint.ui.register('auth-register', {
	options : {
		referral_token : null,
		action : '${baseUrl}/${store}/auth/create',
		fbAction : '${baseUrl}/${store}/auth/facebook',
		emailCheckUrl : '${baseUrl}/${store}/auth/check/email',
		passwordCheckUrl : '${baseUrl}/${store}/auth/login',
		disclaimer : 'We protect your privacy, see our <a href="/privacy-policy" target="_blank">privacy policy</a>.',
		buttons : [{
				title : "I'm Ready!",
				primary : true
			}
		]
	},
	bindSignup : function ($form) {
		var z = this;
		mint.form.bind($form, function (data) {
			if (data.session) {
				mint.session.set(data.session);
				z.$el.trigger('signup', data);
			}
		}, function (form) {
			if (z.options.referral_token) {
				this.referral_token = z.options.referral_token;
				return this;
			}
		});
	},
	bindFacebook : function ($el) {
		var z = this;
		$el.click(function () {
			mint.msg.loading.show();
			mint.social.facebook.login(function (response) {
				if (!response.authResponse) {
					mint.msg.loading.hide();
					return false;
				}
				var send = {
					access_token : response.authResponse.accessToken,
					user_id : response.authResponse.userID,
					expires_in : response.authResponse.expiresIn,
					signed_request : response.authResponse.signedRequest,
					scope : 'email'
				};
				mint.req.json(z.options.fbAction, send, function (data) {
					if (data.session) {
						mint.session.set(data.session);
						z.$el.trigger('signup', data);
					} else {
						mint.event.trigger('mint-server-error', data.error);
					}
					mint.msg.loading.hide();
				});
			});
			return false;
		});
	},
	init : function () {
		var z = this;
		var o = $.extend({}, z.options);
		o.action = $.tmpl(o.action, mint.config()).text();
		
		z.$el.hide();
		
		mint.session.get(function (session) {
			z.render(o);
			z.bindSignup.call(z, z.$el.find('form'));
			
			z.$el.find('input[name=email]').blur(function () {
				var $input = $(this);
				if (mint.form.validate.rules.email.regex.test($input.val())) {
					$input.addClass('input-loading');
					mint.req.json(z.options.emailCheckUrl, {
						email : $input.val()
					}, function (data) {
						$input.removeClass('input-loading');
						if (data.stores && data.stores.length) {
							data.alreadyRegistered = false;
							$.each(data.stores, function (i, v) {
								if (v.id == mint.config('store')) {
									data.alreadyRegistered = true;
									return false;
								}
							});
							data.passwordCheckUrl = mint.ui.tmplHTML(z.options.passwordCheckUrl, mint.config());
							data.buttons = [{
									title : "Continue",
									primary : true
								}
							];
							
							data.email = $input.val();
							mint.modal.create("We already know you!", mint.ui.tmplHTML(mint.tmpl.auth.linkaccount, data));
							
							z.bindFacebook.call(z, $('.mint-modal-data .mint-facebook-connect'));
							z.bindSignup.call(z, $('.mint-modal-data form'));
						}
					});
				}
			});
			
			if (!session.logged_in) {
				z.$el.show();
			}
			
			mint.event.watch('login', function () {
				z.onLogin.call(z);
			});
			mint.event.watch('signup', function () {
				mint.tracking.track({
					registered : 1
				}, "reg_complete");
				mint.cookie("justRegistered", 1, {
					expires : 1
				});
				z.onLogin.call(z);
			});
			mint.event.watch('logout', function () {
				z.onLogout.call(z);
			});
			
			z.bindFacebook.call(z, z.$el.find('.mint-facebook-connect'));
		});
	},
	onLogin : function () {
		this.$el.hide();
	},
	onLogout : function () {
		this.$el.show();
	}
});

mint.ui.register('auth-logout', {
	options : {
		text : 'Logout',
		events : {
			logout : function () {
				//alert('You are now logged out');
				console.log('You are now logged out');
			}
		}
	},
	init : function () {
		var z = this;
		
		z.render();
		
		z.$el.find('a').click(function () {
			mint.session.logout(function () {
				z.$el.trigger('logout');
			});
			return false;
		});
	}
});

mint.ui.register('auth-login', {
	options : {
		action : '${baseUrl}/${store}/auth/login',
		forgotText : 'Forgot your password?',
		fbAction : '${baseUrl}/${store}/auth/facebook',
		buttons : [{
				title : 'Sign In',
				primary : true
			}
		],
		forgot : {
			action : '${baseUrl}/${store}/auth/forgot',
			buttons : [{
					title : 'Recover Password',
					primary : true
				}
			]
		}
	},
	init : function () {
		var z = this;
		
		var o = $.extend({}, z.options);
		o.action = $.tmpl(o.action, mint.config()).text();
		z.$el.hide();
		mint.session.get(function (session) {
			z.render(o);
			mint.form.bind(z.$el.find('form'), function (data) {
				z.$el.find('input[name=password]').val('');
				if (data.session) {
					mint.session.set(data.session);
					z.$el.trigger('login', data);
				}
			});
			
			z.$el.find('.mint-forgot-password').click(function () {
				var forgotOptions = z.options.forgot;
				forgotOptions.action = $.tmpl(forgotOptions.action, mint.config()).text();
				mint.modal.create("Forgot Password", mint.ui.tmplHTML(mint.tmpl.auth.forgotpassword, z.options.forgot));
				
				var frm = $("#forgot-password-form");
				mint.form.bind(frm, function (data) {
					frm.parents('.mint-modal-data').html('<span data-stest="emailed-reset-password">Your password has been emailed to you.</span>');
				});
				
				return false;
			});
			z.$el.find('.mint-facebook-connect').click(function () {
				mint.msg.loading.show();
				mint.social.facebook.login(function (response) {
					if (!response.authResponse) {
						mint.msg.loading.hide();
						return false;
					}
					var send = {
						access_token : response.authResponse.accessToken,
						user_id : response.authResponse.userID,
						expires_in : response.authResponse.expiresIn,
						signed_request : response.authResponse.signedRequest,
						scope : 'email'
					};
					if (z.options.fb_app)
						send.fb_app = z.options.fb_app;
					if (typeof(z.options.fb_perms) == 'string')
						send.perms = z.options.fb_perms;
					var aidCookie = mint.cookie('aid');
					if (aidCookie) {
						send.aid = aidCookie;
					}
					mint.req.json(z.options.fbAction, send, function (data) {
						if (data.session) {
							mint.session.set(data.session);
							z.$el.trigger('login', data);
						} else if (data.error) {
							mint.event.trigger('mint-server-error', data.error);
						}
						mint.msg.loading.hide();
					});
				});
				return false;
			});
			
			if (!session.logged_in) {
				z.$el.show();
			}
			
			mint.event.trigger('loginInitialized');
			
		});
		
		mint.event.watch('login', function () {
			z.onLogin.call(z);
		});
		mint.event.watch('signup', function () {
			z.onLogin.call(z);
		});
		mint.event.watch('logout', function () {
			z.onLogout.call(z);
		});
		
	},
	onLogin : function () {
		this.$el.hide();
	},
	onLogout : function () {
		this.$el.show();
	}
});

mint.ui.register('cms-collection', {
	options : {},
	init : function () {
		var z = this;
		if (z.options.collection && z.options.tmpl) {
			z.getContent("${baseUrl}/${store}/cms/collection", z.options.collection, function (data) {
				$(z.options.tmpl).tmpl(data).appendTo(z.$el.html(''));
			});
		} else {
			console.log("Please define tmpl and collection");
		}
	},
	getContent : function (url, collection, callback) {
		mint.req.json(url, {
			collection : collection
		}, function (data) {
			console.log(data);
			mint.tracking.trackCms(data);
			callback(data);
		});
	}
});

mint.ui.register('giftcard-redeem', {
	options : {
		getUrl : '${baseUrl}/${store}/checkout/cart/get',
		startText : 'Received a Gift Card?',
		linkText : 'Redeem Here',
		buttons : [{
				title : 'Redeem',
				primary : true
			}
		],
		redeemUrl : '${baseUrl}/${store}/giftcard/redeem'
	},
	init : function () {
		var z = this;
		z.options.redeemUrl = $.tmpl(z.options.redeemUrl, mint.config()).text();
		
		mint.session.get(function (session) {
			
			if (session.logged_in) {
				z.render();
				
				z.$el.find("a").click(function () {
					mint.modal.create("Redeem Giftcard", mint.ui.tmplHTML(mint.tmpl.giftcard.redeem_modal, z.options));
					
					mint.form.bind($("#redeem-form"), function (data) {
						//console.log(data);
						if (!data.error) {
							if (data.credits_redeemed === 0) {
								mint.event.trigger('mint-server-error', {
									message : "Invalid Coupon Code!"
								});
							} else {
								data.credits_total = parseInt(data.credits_redeemed) + parseInt(data.credits_before_redemption);
								mint.msg.create('You now have a total of ' + data.credits_total + ' credit' + (data.credits_total > 1 ? 's' : ''), 'Success! You have redeemed a gift card for ' + data.credits_redeemed + ' credit' + (parseInt(data.credits_redeemed) > 1 ? 's' : ''), 'mint-success');
								mint.event.trigger('creditChanged', data);
								$("#redeem-form input").val('');
								mint.req.json(z.options.getUrl, function (data) {
									mint.event.trigger('cartUpdate', data);
									mint.modal.close();
								});
							}
						}
					});
					
					return false;
				});
			}
		});
	}
});

mint.ui.register('social-personal_url', {
	init : function () {
		var self = this;
		$('.personal-invites').hide();
		/*
		mint.req.json('${baseUrl}/${store}/customer/url', function(data){
		if(!data.error) {
		var path = data.split('.com');
		var result = window.location.protocol+'//'+window.location.host+path[1];
		// notify all subscribers that the share url loaded
		mint.event.trigger("shareURLLoaded", [result] );
		z.render({url: result});
		}
		});
		 */
		if (!mint.social)
			throw new Error("social-personal_url has a dependency (mint.social) which was not included");
		
		// when the personal url is loaded, render the widget
		$.when(mint.social.done()).then(function () {
			mint.social.getShareURL(null, function (shareURL) {
				
				if (shareURL) {
					$('.personal-invites').slideDown();
					self.render({
						url : shareURL
					});
				}
			});
			
		});
	}
});

mint.ui.register('social-check_status', {
	
	init : function () {
		var z = this;
		
		z.render();
		
		z.$el.find('.check-status').click(function () {
			mint.msg.loading.show();
			mint.req.json('${baseUrl}/${store}/invite/status', function (data) {
				mint.msg.loading.hide();
				if (data.error) {}
				else {
					console.log(arguments);
					mint.modal.create("Invite Status", mint.ui.tmplHTML(mint.tmpl.social.invites_status, {
							invites : data
						}));
				}
			});
			return false;
		});
	}
});

mint.ui.register('social-invite_twitter', {
	options : {},
	init : function () {
		var self = this;
		
		this.render({
			name : mint.getStoreInfo().name
		});
		
		// only let the user click the button once all
		// the main social obj has loaded since it contains
		// necessary information for the click action.
		$.when(mint.social.done()).then(function () {
			self.onResolvedInit.apply(self, arguments);
		});
	},
	/*
	 * Let the user click the button to tweet once the
	 * sharing url has loaded.
	 * @return
	 */
	onResolvedInit : function () {
		var $button = this.$el.find('.share-on-twitter');
		$button.removeAttr("disabled");
		mint.social.getShareURL('Twitter', function (shareURL) {
			if (!shareURL) {
				shareURL = '';
			}
			$button.click(function (e) {
				var tweetBoxOpts,
				siteName = mint.getStoreInfo().name,
				tweetTitle = $.trim($button.attr("data-tweet-title")) + " " + shareURL
					
					$button.removeAttr("disabled");
				tweetBoxOpts = {
					height : 100,
					width : 571,
					label : "Share It",
					data : null,
					defaultContent : tweetTitle,
					onTweet : function () {
						mint.modal.close();
						mint.msg.create("Your message has been posted to your Twitter stream.", "Success!", "success");
					}
				}; // tweetbox options
				mint.social.twitter.tweet(true, tweetBoxOpts);
			});
		});
	}
});

mint.ui.register('social-email_importer', {
	options : {
		buttons : [{
				title : "Send Invite",
				primary : true
			}
		]
	},
	init : function () {
		var z = this;
		window.csPageOptions = {
			domain_key : mint.getStoreInfo().cloudsponge,
			textarea_id : "invite-emails"
		}
		$.getScript('https://api.cloudsponge.com/address_books.js', function () {
			
			z.render();
			
			mint.form.bind(z.$el.find('form'), function (data) {
				if (data.error) {}
				else {
					mint.modal.create("Your invitations have been sent!", mint.ui.tmplHTML(mint.tmpl.social.invites_sent, data));
					$('#invite-emails').val('');
					$('#message').val('');
				}
			});
			
			window.afterSubmitContacts = function () {
				$('#invite-emails').focus();
			};
			// expands the textarea to multiple lines
			$('#invite-emails').expandingTextArea();
		});
		
	}
	
});

mint.ui.register('social-invite_facebook', {
	options : {
		FBOptions : {
			method : "stream.publish", // facebook UI method
			name : "Checkout ${name}", // facebook UI message
			title : "Invite Friends", // facebook UI title
			caption : "I love their site and I think you will too!",
			link : "${link}"
			//actions: [{ name: 'Check out ${name}', link: "" }],
		},
		picture : window.location.protocol + "//" + window.location.host + "/assets/images/facebook_invite_pic.jpg"
	},
	init : function () {
		var self = this
			this.render({
				name : mint.getStoreInfo().name
			});
		
		// only let the user click the button once all
		// the main social obj has loaded since it contains
		// necessary information for the click action.
		$.when(mint.social.done()).then(function () {
			self.onResolvedInit.call(self, arguments);
		});
	},
	/*
	 *  Let the user add their friends on Facebook once the main
	 *  mint.social object has loaded
	 *  @return
	 */
	onResolvedInit : function () {
		
		var self = this;
		
		mint.social.getShareURL('Facebook', function (shareURL) {
			var storeInfo = mint.getStoreInfo(),
			baseTmplObj = {
				name : storeInfo.name,
				link : shareURL
			},
			fbShowCallback,
			fbModalOptions,
			button = self.$el.find("input"),
			testImg = new Image(),
			testSrc;
			
			// enable the button to make it clickable
			button.removeAttr("disabled");
			
			// process the facebook message
			self.options.FBOptions.name = $.tmpl(self.options.FBOptions.name, baseTmplObj).text();
			self.options.FBOptions.link = baseTmplObj.link;
			// self.options.FBOptions.actions[0].name = $.tmpl( self.options.FBOptions.actions[0].name , baseTmplObj ).text();
			// self.options.FBOptions.actions[0].link = baseTmplObj.link;
			
			// test to see if the image is good since it is relative
			testSrc = mint.req.getUrlTmpl(self.options.picture, {
					storeUrl : window.location.host
				});
			
			testImg.onload = function () {
				self.options.FBOptions.picture = testSrc;
			};
			testImg.src = testSrc;
			
			// clicking the link to invite friends on facebook
			button.bind("click", function (e) {
				FB.ui($.extend({}, self.options.FBOptions), function (post) {
					if (post && post.post_id) {
						mint.msg.create("Your friends have been invited", "Success!", "success");
					}
				});
			});
		});
	}
});

mint.ui.register('customer-address', {
	options : {
		first_name : '',
		last_name : '',
		street1 : '',
		street2 : '',
		zip_code : '',
		city : '',
		region : '',
		country : 'US'
	},
	init : function () {
		var z = this;
		z.render(z.options);
	}
	
});

mint.ui.register('customer-settings', {
	options : {
		submitUrl : "${baseUrl}/${store}/customer/settings/save",
		getUrl : "${baseUrl}/${store}/customer/settings/get",
		orderHistoryUrl : "${baseUrl}/${store}/order/history",
		passwordInputWidth : 140,
		tabs : {
			basic : {
				title : 'Basic Information',
				fields : {
					firstname : {
						type : 'text',
						name : 'firstname',
						label : 'First Name',
						value : '',
						validation : ['required']
					},
					lastname : {
						type : 'text',
						name : 'lastname',
						label : 'Last Name',
						value : '',
						validation : ['required']
					},
					email : {
						type : 'text',
						name : 'email',
						label : 'Email Address',
						value : '',
						validation : ['required,email']
					},
					changepassword : {
						type : 'changepassword'
					}
				},
				always_required : 1
			},
			shipping : {
				title : 'Shipping Info'
			},
			payment : {
				title : 'Payment Info'
			},
			credits : {
				title : 'Credits'
			},
			skip : {
				title : 'Skip'
			},
			order_history : {
				title : 'Order History'
			},
			email : {
				title : 'Email Notifications',
				fields : {
					newsletter : {
						type : 'select',
						name : 'newsletter',
						label : 'Newsletter',
						value : '',
						options : {
							'1' : 'Yes',
							'0' : 'No'
						}
					}
				}
			}
		},
		address : {
			first_name : '',
			last_name : '',
			street1 : '',
			street2 : '',
			zip_code : '',
			city : '',
			region : '',
			region_id : 12,
			country : 'US'
		},
		billing_address : {
			first_name : '',
			last_name : '',
			street1 : '',
			street2 : '',
			zip_code : '',
			city : '',
			phone : '',
			region : '',
			region_id : 12,
			country : 'US',
			phone : '',
			no_shipping : false
		},
		buttons : [{
				title : 'Update Settings',
				primary : true
			}
		]
	},
	init : function () {
		var z = this;
		
		mint.event.watch('mint-validation-error', function () {
			// the only valid errors are ones that occur for the current form
			var ids = z.$el.find('.error-text');
			
			// bring the first errored tab into focus
			if (ids.length) {
				var id = $(ids[0]).closest('.mint-tab-content').attr('id');
				$('a.' + id).click();
			}
			$('.mint-settings-tabs li').removeClass('tab-error');
			ids.each(function () {
				var id = $(ids[0]).closest('.mint-tab-content').attr('id');
				$('a.' + id).parent().addClass('tab-error');
			});
		});
		
		mint.event.watch('updateSettings', function (data, tab) {
			var $elm = $(tab);
			var href = $elm.attr('href'); // IE7
			href = href.substring(href.indexOf('#'));
			if ($elm.attr('href') == '#mint-tab-content-order_history') {
				var $el = $(href, z.$el).addClass('visible').show();
				/*if($el.find('li').length == 0) {
				loadMoreOrders();
				}*/
			} else if (mint.config("store") == 3 && $elm.attr('href') == '#mint-tab-content-credits') {
				var $el = $(href, z.$el);
				$el.find('.credits').hide();
				$el.find('.system').show();
				$el.addClass('visible').show('fast');
				
			} else {
				$(href, z.$el).addClass('visible').show('fast');
			}
			
		});
		
		// get the users settings from the server
		mint.req.json(this.options.getUrl, function (data) {
			
			// update shipping fields with data sent back from server
			if (data.shipping && data.shipping != '') {
				z.options.address = data.shipping;
			}
			
			// update billing fields with data sent back from server
			if (data.billing && data.billing != '') {
				z.options.billing_address = $.extend(z.options.billing_address, data.billing);
			}
			
			// build the tabbed user settings view
			var tabs = z.options.tabs;
			$.each(tabs, function (tab, v) {
				if (v && tabs[tab].fields) {
					// if the user has already filled out some
					// settings, populate the fields
					$.each(tabs[tab].fields, function (field) {
						if (data[tab] && data[tab][field]) {
							tabs[tab].fields[field].value = data[tab][field];
						}
					});
				} else if (!v) {
					delete tabs[tab];
				}
			});
			
			z.options.submitUrl = mint.req.getUrlTmpl(z.options.submitUrl);
			
			var tmplData = {};
			$.extend(tmplData, z.options);
			z.render(tmplData);
			
			var changedInputs = [];
			
			// disable validation for tabs that arent required
			z.$el.find(".mint-tab-content").each(function (e) {
				var $li = $(this),
				alwaysRequired = Boolean($li.attr("data-always-required"))
					if (!alwaysRequired) {
						$li.find("input,select").addClass("mint-disable-validation");
					}
			});
			
			// enable validation for tabs that have fields have been changed
			z.$el.find("form").submit(function (e) {
				var $elm,
				$tabContent,
				tabId,
				alwaysRequired,
				tabsChanged = [],
				$form;
				for (var i = 0; i < changedInputs.length; i++) {
					
					$elm = $(changedInputs[i]);
					$tabContent = $elm.parents(".mint-tab-content");
					tabId = $tabContent.attr("id");
					alwaysRequired = Boolean($tabContent.attr("data-always-required"));
					
					if (!alwaysRequired && $.inArray(tabId, tabsChanged) == -1) {
						$tabContent.find("input,select").removeClass("mint-disable-validation");
						tabsChanged.push(tabId);
						
						// update the input that is a flag for the api to do authorization
						// on the changed billing address
						if (tabId.indexOf('content-payment') > -1) {
							$(this).find("input[name='billing_info_updated']").val("1");
						}
					}
				}
			});
			
			// inputs that have been changed that will later have to be validated
			z.$el.find("input,select").change(function (e) {
				if ($.inArray(this, changedInputs) == -1)
					changedInputs.push(this);
			});
			
			// keep the address fields in sync with one another when the user makes changes
			z.$el.find('.mint-customer-address').find('input, select').blur(function () {
				if (z.$el.find('.same-as-shipping').filter(':checked').length) {
					z.updateBillingWithShipping.call(z);
				}
			});
			
			// Load next shipping date
			//console.log(data);
			var store_num = mint.config("store");
			z.$el.find('.shipment-date').html(data.basic.next_billing_date[store_num]);
			
			z.$el.find('.same-as-shipping').change(function () {
				if ($(this).filter(':checked').length) {
					z.updateBillingWithShipping.call(z);
				} else {
					z.$el.find('.checkout-billing-form').find('input, select').val('');
				}
			});
			
			var $checkbox = $('input[name=change_password]').change(function () {
					if ($(this).is(':checked')) {
						$(this).next().animate({
							opacity : 0
						}, 'fast', function () {
							$(this).hide();
							$('#mint-tab-content-basic input[name=password]').css('display', 'inline-block').animate({
								width : z.options.passwordInputWidth
							}).focus();
						});
					} else {
						$('#mint-tab-content-basic input[name=password]').animate({
							width : 1
						}, function () {
							$(this).hide();
							$('input[name=change_password]').next().css('display', 'inline-block').animate({
								opacity : 1
							}, 'fast');
						});
					}
				});
			
			if ($checkbox.prop) {
				$checkbox.prop("checked", false);
			} else {
				$checkbox.removeAttr('checked');
			}
			
			$('#mint-tab-content-basic input[name=password]').width(1).hide();
			
			mint.form.bind(z.$el.find('form'), function (data) {
				if (!data.error) {
					z.setMailingListValue(data || {});
					mint.msg.create("Your settings have been saved. Thank you.", null, "success");
				}
			});
			
			z.setMailingListValue(data || {});
			
			var orderCursor = 0;
			
			var loadMoreOrders = function () {
				var $viewMore = z.$el.find('.view-more');
				
				if ($viewMore.hasClass('loading')) {
					return false;
				}
				
				$viewMore.addClass('loading').text('Loading...');
				mint.req.json(z.options.orderHistoryUrl, {
					start : orderCursor,
					limit : 10
				}, function (data) {
					orderCursor += 10;
					$viewMore.removeClass('loading').text('View More');
					if (data.more) {
						z.$el.find('.view-more').show();
					} else {
						z.$el.find('.view-more').hide();
					}
					if (data.orders.length) {
						$.each(data.orders, function (i, order) {
							console.log(order);
							$.tmpl(mint.tmpl.order.history, order).appendTo($('#mint-tab-content-order_history').find('ol'));
						});
					} else {
						$('#mint-tab-content-order_history').find('ol').append("<li class='no-orders'>You have not purchased any products yet.</li>");
						z.$el.find('.view-more').hide();
					}
					
				});
				return false;
			};
			
			z.$el.find('.view-more').click(loadMoreOrders);
			
			mint.ui.factory('giftcard-redeem', z.$el.find('.redeem-link'));
			
			z.$el.find('.mint-skip a').click(function () {
				mint.msg.loading.show();
				mint.req.json('${baseUrl}/${store}/customer/skip', function (data) {
					mint.msg.loading.hide();
					if (data.error) {}
					else {
						z.$el.find('.mint-skip').removeClass('mint-skip').addClass('mint-has-skip').html('<p>You have successfully skipped this month.</p>').attr('data-stest', 'hasSkipped');
						$('.mint-customer-bar-item-skip').remove();
					}
				});
				return false;
			});
			
			z.$el.find('.mint-tab-content:first').addClass('visible').show().end()
			.find('.mint-settings-tabs a').click(function () {
				var $elm = $(this),
				$updateSettingsBut = $("#buttonContainer .mint-button");
				
				if (!$elm.hasClass('selected')) {
					
					// update tab classes
					z.$el.find('.mint-settings-tabs a').removeClass('selected');
					// hide currently visible tab content
					z.$el.find('.mint-tab-content.visible').removeClass('visible').hide('fast');
					// by default, show the button
					$updateSettingsBut.show();
					// update current tab link as selected
					$elm.addClass("selected");
					
					var href = $elm.attr('href'); // IE7
					href = href.substring(href.indexOf('#'));
					
					// certain tabs do not need to have the update button shown
					if ($.inArray($elm.attr('href'), ['#mint-tab-content-skip', '#mint-tab-content-credits', '#mint-tab-content-order_history']) > -1) {
						$updateSettingsBut.hide();
					}
					
					mint.event.trigger('updateSettings', $elm);
					if ($elm.attr('href') == '#mint-tab-content-order_history') {
						//var $el = $(href, z.$el).addClass('visible').show();
						if ($(href, z.$el).find('li').length == 0) {
							loadMoreOrders();
						}
					}
				}
				return false;
			}).first().addClass('selected');
			
			z.$el.find('.mint-credits span').text(mint.session._obj.data.credits);
			if (location.hash == '#credits' || location.hash == '#mysystem') {
				$('a.mint-tab-content-credits').click();
			} else if ((location.hash == '#show-skip') || (location.hash == '#skip')) {
				$('a.mint-tab-content-skip').click();
			} else if (location.hash == '#order_history') {
				$('a.mint-tab-content-order_history').click();
			}
			$('.mint-customer-bar-item-credits a').click(function () {
				$('a.mint-tab-content-credits').click();
			});
			$('.mint-customer-bar-item-skip a').click(function () {
				$('a.mint-tab-content-skip').click();
			});
		});
	},
	
	setMailingListValue : function (data) {
		var sub = (data.email || []).length === 0;
		this.$el.find('select[name=newsletter]').val(sub ? 0 : 1);
	},
	updateBillingWithShipping : function () {
		var z = this;
		z.$el.find('.mint-customer-address').find('input, select').each(function () {
			var $input = $(this),
			name = $input.attr("name"),
			value = $input.val();
			if (name == 'region') {
				z.$el.find('*[name=cc_' + name + '_id]').val(value);
			} else {
				z.$el.find('*[name=cc_' + name + ']').val(value);
			}
		});
	}
});

$.jBox = function ($caller, options) {
	options = options || {};
	var offset = $caller.offset();
	$("#jbox").remove();
	var $modal = $("<div id='jbox' data-stest='jbox'><div id='jbox-content'></div></div>").find('div').html(options.content).end().css({
			width : options.width || 330
		});
	
	if (options.arrow) {
		$modal.append("<div id='jbox-arrow'></div>");
	}
	
	$modal.css({
		display : 'none',
		top : (options.offset && options.offset.top) ? options.offset.top : (offset.top + 80),
		left : (options.offset && options.offset.left) ? options.offset.left : (($caller.outerWidth() / 2) + offset.left - ($modal.outerWidth() / 2))
	}).appendTo("body").fadeIn();
};

$.fn.jBox = function (options) {
	var $caller = $(this);
	return new $.jBox($caller, options);
};

mint.ui.register('customer-showroom', {
	options : {
		showroomUrl : '${baseUrl}/${store}/customer/showroom',
		showmoreUrl : '${baseUrl}/${store}/customer/show-me-more',
		favoriteUrl : '${baseUrl}/${store}/customer/favorites',
		showRemovedRecommendations : '${baseUrl}/${store}/customer/show-removed-recommendations',
		why : "<h1 class='fav-modal-header'>This item has been marked as a favorite!</h1><div class='fav-body clearfix'><h2>Why do you like this piece?</h2><ul class='fav-tags clearfix' faved='yes'>{tags}</ul></div><div class='fav-modal-footer clearfix'><div class='L'><a class='fav-page' data-stest='fav-page' href='/jewelry/showroom/favorites'>See My Favorites</a></div><div class='R'><a href='#' data-stest='fav-close' class='fav-close' product='{id}'>Close</a></div></div>",
		whynot : "<h1 class='nofav-modal-header'>You have chosen to remove this item</h1><div class='fav-body clearfix'><h2>Why don't you like this piece?</h2><ul class='fav-tags clearfix' faved='no'>{tags}</ul></div><div class='fav-modal-footer clearfix'><div class='L'><a class='fav-page' data-stest='fav-page' href='/jewelry/showroom/favorites'>See My Favorites</a></div><div class='R'><a href='#' data-stest='fav-close' class='fav-close' product='{id}'>Close</a></div></div>"
	},
	init : function () {
		var z = this;
		$(".fav-tags a").live("click", function () {
			$(this).toggleClass("selected");
			return false;
		});
		mint.msg.loading.show();
		mint.req.json(z.options.showroomUrl, function (data) {
			mint.msg.loading.hide();
			z.renderRecommendations.call(z, data);
		});
		
		$(document.body).delegate(".show-me-more", "click", function (e) {
			e.preventDefault();
			$.modal.close();
			mint.msg.loading.show();
			
			var products;
			mint.req.json(z.options.showmoreUrl, {
				product : products
			}, function (data) {
				var removedRecommendations;
				mint.req.json(z.options.showRemovedRecommendations, {
					product : removedRecommendations
				}, function (data) {
					if (data.removedRecommendations.length == 0) {
						$(".mint-modal-data .removed-recommendations").parent().hide();
					}
				});
				mint.msg.loading.hide();
				z.loadProducts.call(z, data);
				$(".mint-modal-data .show-me-more").parent().hide();
			});
			return false;
		}).delegate('.removed-recommendations', "click", function (e) {
			e.preventDefault();
			$.modal.close();
			mint.msg.loading.show();
			
			var removedRecommendations;
			mint.req.json(z.options.showRemovedRecommendations, {
				product : removedRecommendations
			}, function (data) {
				mint.msg.loading.hide();
				z.loadProducts.call(z, data.removedRecommendations);
				$(".mint-modal-data .removed-recommendations").parent().hide();
			});
			return false;
		});
	},
	normalizeProducts : function (products) {
		$.each(products, function (i, product) {
			if (product.configurable == 1) {
				products[i].stock = products[i].stock || {};
				var qty = 0;
				$.each(product.associated_products, function (j, ap) {
					if (ap.stock && ap.stock.quantity) {
						qty += parseFloat(ap.stock.quantity);
					}
				});
				products[i].stock.quantity = qty;
			}
		});
		return products;
	},
	renderRecommendations : function (products, scroll) {
		var z = this;
		z.render({
			products : z.normalizeProducts(products)
		});
		
		// show the just registered element if they are coming to
		// the page directly after registering
		if (parseInt(mint.cookie("justRegistered")) === 1) {
			mint.tracking.processOnPageTracking("text/new-user-only");
			mint.event.trigger("justRegisteredFirstTimeHit");
			mint.cookie("justRegistered", null);
		}
		
		z.$el.find('.skip-a-month').click(function () {
			return false;
		});
		
		z.$el.find('.case-fav a').click(function () {
			var product_id = $(this).attr('product');
			if ($(this).hasClass('faved')) {
				mint.req.json("${baseUrl}/${store}/customer/product/unfavorite", {
					product : product_id
				}, function (data) {});
				$(this).toggleClass('faved').text('Mark item as favorite');
			} else {
				var $case = $(this).closest('.case');
				mint.req.json("${baseUrl}/${store}/customer/product/favorite", {
					product : product_id
				}, function (data) {
					z.renderTags.call(z, data.tags, $case, product_id, 'showroom', 'add')
				});
				$(this).toggleClass('faved').text('Remove item from favorites');
			}
			return false;
		});
		
		z.$el.find('.recommendations .case em').click(function () {
			z.removeCase.call(z, $(this), 'recommendations');
			return false;
		});
		
		mint.event.trigger('showMeMore');
		
		z.$el.find('.showroom-top .R a').click(function () {
			z.$el.find('.showroom-top .R a').removeClass('current');
			var $a = $(this).addClass('current');
			if ($a.hasClass('fav-view')) {
				z.loadFavorites.call(z);
			} else {
				z.showRecommendations.call(z);
			}
			return false;
		});
		
		if (scroll) {
			if (!$.browser.msie || $.browser.version.substr(0, 1) > 7) {
				$('html, body').animate({
					scrollTop : (z.$el.find('.recommendations .case:last').offset().top - 200) + 'px'
				}, 1000);
			}
		}
	},
	addToShowroom : function () {
		var
		z = this,
		likedProducts = [];
		
		$('.showme-images .selected').each(function () {
			likedProducts.push($(this).attr("product"));
		});
		$.modal.close();
		if (likedProducts.length) {
			mint.msg.loading.show();
			mint.req.json("${baseUrl}/${store}/customer/showroom/add/products", {
				products : likedProducts.join(',')
			}, function (data) {
				mint.msg.loading.hide();
				z.renderRecommendations.call(z, data, true);
			});
		}
		return false;
	},
	loadProducts : function (products) {
		var z = this;
		mint.modal.create("More recommendations!", mint.ui.tmplHTML(mint.tmpl.customer.showmore, {
				products : products
			}));
		$('#mint-container').addClass('recommendations resize-modal');
		mint.modal.resize();
		var page = 0;
		if (products.length > 4) {
			$('.mint-modal-data .showme-images').cycle({
				fx : 'scrollHorz',
				timeout : 0,
				containerResize : 0,
				speed : 1000,
				before : function (c, n) {
					if (page == 0) {
						$(".mint-modal-data .showmore-prev-arrow").hide();
					} else {
						$(".mint-modal-data .showmore-prev-arrow").show();
					}
					
					if ($(".mint-modal-data .showme-images>li").length - 1 == page) {
						$(".mint-modal-data .showmore-next-arrow").hide();
					} else {
						$(".mint-modal-data .showmore-next-arrow").show();
					}
				},
				prevNextClick : function (b, i) {
					page = i;
				},
				nowrap : true
			});
			
			$(".showmore-prev-arrow a").click(function () {
				$('.showme-images').cycle('prev');
				
				return false;
			});
			$(".showmore-next-arrow a").click(function () {
				$('.showme-images').cycle('next');
				console.log("CLICK");
				return false;
			});
		} else {
			$(".mint-modal-data .showmore-prev-arrow").hide();
			$(".mint-modal-data .showmore-next-arrow").hide();
		}
		$(".mint-modal-data li li").hover(function () {
			$(this).addClass("hover");
		}, function () {
			$(this).removeClass("hover");
		}).click(function () {
			$(this).toggleClass("selected");
			if ($('.mint-modal-data .showme-images .selected').length) {
				$(".mint-modal-data .add-to-showroom a").removeClass('disabled');
			} else {
				$(".mint-modal-data .add-to-showroom a").addClass('disabled');
			}
		});
		
		$(".mint-modal-data .add-to-showroom a").click(function () {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			return z.addToShowroom.call(z);
		});
		
		mint.event.trigger('showRemovedRecommendations');
		mint.event.trigger('showMeMore');
	},
	loadFavorites : function () {
		var z = this;
		mint.msg.loading.show();
		mint.req.json(z.options.favoriteUrl, function (data) {
			mint.msg.loading.hide();
			console.log(data);
			if (data.products) {
				data.products = z.normalizeProducts(data.products);
			}
			$.tmpl(mint.tmpl.customer.favorites, data).appendTo(z.$el.find('.showroom-favorites').html(''));
			z.showFavorites.call(z);
		});
	},
	showFavorites : function () {
		var z = this;
		z.$el.find('.recommendations').hide();
		z.$el.find('.showroom-favorites').show();
		z.$el.find('.showroom-favorites .case em').click(function () {
			z.removeCase.call(z, $(this), 'favorites');
			return false;
		});
	},
	showRecommendations : function () {
		var z = this;
		z.$el.find('.recommendations').show();
		z.$el.find('.showroom-favorites').hide();
	},
	renderTags : function (tags, $case, product_id, section, type) {
		var tagString = '';
		if (tags) {
			$.each(tags, function (i, v) {
				tagString += "<li><a data-stest='tag-" + i + "' href='#'>" + v + "</a></li>";
			});
			
			if (tagString != '') {
				var str = (type == 'remove') ? this.options.whynot : this.options.why;
				$case.jBox({
					content : str.replace("{tags}", tagString).replace("{id}", product_id)
				});
				$(".fav-close").click(function () {
					var ts = [];
					var productId = $(this).attr('product');
					var faved = $("#jbox").fadeOut(function () {
							$(this).remove();
						}).find(".fav-tags a.selected").each(function () {
							ts.push($(this).text());
						}).end().find(".fav-tags").attr("faved");
					mint.req.json("${baseUrl}/${store}/customer/tags/save", {
						product : productId,
						action : faved == "yes" ? 'favorited' : 'unfavorited',
						tags : ts.join(",")
					}, function (data) {});
					return false;
				});
				
				$('.fav-page').click(function () {
					$('.fav-view').click();
					$('#jbox').fadeOut(function () {
						$(this).remove();
					});
					return false;
				});
			}
		}
		if (type == 'remove') {
			var $cases = $case.closest(".cases");
			$case.hide("slow", function () {
				$case.remove();
				if ($cases.find('.case').length == 0) {
					$cases.find(".no-favorites,.no-recommendations").fadeIn();
				}
				$cases.find('.case').each(function (i) {
					var $c = $(this);
					$c.attr('class', 'case-for-' + section + ' case case-' + i);
					if (section != 'favorites' && i == 0) {
						$status = $c.find('.status');
						
						$c.addClass("wide")
						.find("img").attr({
							src : $c.attr('wide'),
							width : "445"
						});
						if (!$status.length) {
							$c.find(".product").append('<div class="status topmatch"><span>YOUR TOP MATCH</span></div>');
						}
					}
				});
			});
		}
	},
	removeCase : function ($el, section) {
		var
		z = this,
		$case = $el.closest('.case'),
		$cases = $el.closest(".cases"),
		product_id = $el.attr('product');
		if (section != 'favorites') {
			if ($cases.find('.case').length == 7) {
				mint.msg.loading.show();
				mint.req.json("${baseUrl}/${store}/customer/showroom/remove/product", {
					product : product_id
				}, function (data) {
					mint.msg.loading.hide();
					z.renderTags.call(z, data.tags, $case, product_id, section, 'remove');
					if (data.showroom) {
						z.renderRecommendations.call(z, data.showroom);
					}
				});
			} else {
				mint.req.json("${baseUrl}/${store}/customer/showroom/remove/product", {
					product : product_id
				}, function (data) {
					z.renderTags.call(z, data.tags, $case, product_id, section, 'remove');
				});
			}
			return;
		} else {
			mint.req.json("${baseUrl}/${store}/customer/product/unfavorite", {
				product : product_id
			}, function (data) {});
		}
		$(".faved").each(function () {
			if ($(this).attr('product') == product_id) {
				$(this).removeClass('faved').text('Mark item as favorite');
				return false;
			}
		});
		$case.hide("slow", function () {
			$case.remove();
			if ($cases.find('.case').length == 0) {
				$cases.find(".no-favorites,.no-recommendations").fadeIn();
			}
			$cases.find('.case').each(function (i) {
				var $c = $(this);
				$c.attr('class', 'case-for-' + section + ' case case-' + i);
				if (section != 'favorites' && i == 0) {
					$status = $c.find('.status');
					
					$c.addClass("wide")
					.find("img").attr({
						src : $c.attr('wide'),
						width : "445"
					});
					if (!$status.length) {
						$c.find(".product").append('<div class="status topmatch"><span>YOUR TOP MATCH</span></div>');
					}
				}
			});
		});
	}
	
});

mint.ui.register('customer-bar', {
	options : {
		nav : {
			loggedIn : {
				'who' : {
					type : 'text',
					text : 'Hi, ${session.data.firstname}'
				},
				'skip' : {
					type : 'skip',
					href : '/account#skip',
					text : 'Skip Month'
				},
				'account' : {
					type : 'link',
					href : '/account',
					text : 'Account'
				},
				'credits' : {
					type : 'link',
					href : '/account#credits',
					text : 'Credits (${session.data.credits})'
				},
				'logout' : {
					type : 'widget',
					widget : 'auth-logout',
					options : {}
					
				},
				'cart' : {
					type : 'link',
					href : '/checkout',
					text : 'Cart (${session.data.cart_quantity})'
				}
			},
			loggedOut : {
				"register" : {
					type : 'text',
					text : 'Are you new? <a href="/get-started">Register</a>'
				},
				'login' : {
					type : 'link',
					href : '/login',
					text : 'Login'
				}
			}
		}
	},
	render : function () {
		var z = this;
		mint.session.get(function (session) {
			var nav = session.logged_in ? z.options.nav.loggedIn : z.options.nav.loggedOut;
			
			session.data = session.data || {};
			session.data.credits = session.data.credits || 0;
			session.data.cart_quantity = session.data.cart_quantity || 0;
			
			$.tmpl(mint.tmpl.customer.bar, {
				session : session,
				nav : nav
			}).appendTo(z.$el.html(''));
			
			$(".mint-credits span").html(session.data.credits);
			
			// render widgets if there are
			$.each(nav, function (i, v) {
				if (v && v.type == 'widget') {
					z.$el.find(".mint-customer-bar-item-" + i).widgetize(v.widget, v.options || {});
				}
			});
		});
	},
	init : function () {
		var z = this;
		
		z.render();
		
		mint.event.watch('login', function () {
			z.render.call(z);
		});
		mint.event.watch('signup', function () {
			z.render.call(z);
		});
		mint.event.watch('logout', function () {
			z.render.call(z);
		});
		
		mint.event.watch('cartUpdate', function (evt, data) {
			if (data.total_quantity !== null) {
				$('.mint-customer-bar-item-cart a').text('Cart (' + data.total_quantity + ')');
			}
		});
		
		mint.event.watch('checkoutComplete', function (evt, data) {
			if (data.credits_left !== null) {
				$('.mint-customer-bar-item-credits a').text('Credits (' + data.credits_left + ')');
			}
		});
		
		mint.event.watch('creditChanged', function (evt, data) {
			if (data.credits_total !== null) {
				$('.mint-customer-bar-item-credits a').text('Credits (' + data.credits_total + ')');
				$(".mint-credits span").html(data.credits_total);
			}
		});
	}
	
});

mint.ui.register('customer-quiz', {
	options : {
		width : 936,
		height : 503,
		extra_params : null,
		quiz : false,
		hidePrev : false,
		hideNext : false,
		loadUrl : '${baseUrl}/${store}/customer/quiz/get',
		ajaxUrl : '${baseUrl}/${store}/customer/quiz/submit',
		getProductUrl : '${baseUrl}/${store}/catalog/product/summary',
		image_dir : '',
		question_prefix : 'q',
		// check this parameter in the query string to see if they want to save
		// a product to their showroom when they register
		showroomAddProductParam : "product",
		// product id of the product we would want to add to our showroom upon
		// successful registration
		addProductId : false
	},
	init : function () {
		var z = this,
		question_ids = [],
		possibleProductId = mint.util.getParameterByName(this.options.showroomAddProductParam);
		
		$.each(z.options.quiz.pages, function (i) {
			$.each(z.options.quiz.pages[i].questions, function (j, v) {
				question_ids.push(v);
			});
		});
		
		$('.tip-link').live('click', function () {
			if ($('.tip').is(':visible')) {
				$(this).next().hide();
			} else {
				$(this).next().show();
			}
			return false;
		});
		
		$('.tip .close').live('click', function () {
			$(this).parent().hide();
			return false;
		});
		
		// get the information about the product they wanted to add to their showroom
		// (which is why they are taking the quiz and registering)
		if (possibleProductId) {
			
			mint.req.json(this.options.getProductUrl, {
				product : possibleProductId
			}, function (data) {
				if (!data.product) {
					return false;
				} else { // product is verified as existing
					z.addProductId = possibleProductId;
				}
				
				var image = {
					height : 265,
					width : 212,
					name : "212x265"
				},
				tmpl = mint.tmpl.catalog.product.product_modal,
				$el;
				
				image.src = data.product.images.base[0][image.name.toLowerCase()]// lowercase the X in between the dims
					
					// build the template with the data and add to the DOM
					if (tmpl) {
						$el = $.tmpl(tmpl, {
								image : image
							});
						$(document.body).append($el);
						$el.delegate("a", "click", function (e) {
							e.preventDefault();
							$el.fadeOut("fast");
						});
						$el.fadeIn("fast");
					} else {
						throw new Error("product modal template not found");
						return;
					}
			});
		}
		
		// load and render the quiz
		mint.req.json(this.options.loadUrl, {
			question_ids : question_ids
		}, function (data) {
			if (!data.questions) {
				console.log("No questions returned. Shutting down", data);
				return;
			}
			z.options.qs = data.questions;
			z.options.baseUrl = mint.config('baseUrl');
			console.log(z.options);
			z.render();
			
			z.$el.find(".mint-quiz-answers").each(function () {
				$(this).find('li:last').addClass('mint-last-answer');
			});
			
			z.$el.find(".mint-quiz-slider-answers li:first-child").addClass("mint-selected");
			
			z.loadImages();
			
			if (location.hash == '#quick-complete') {
				try {
					mint.tracking.track().setTrackingQParams();
				} catch (e) {}
				z.$el.find(".mint-quiz-question").each(function () {
					$(this).find(".mint-quiz-answer:first").addClass('mint-selected');
				});
				var answers = [];
				z.$el.find(".mint-selected").each(function () {
					answers.push(this.id.replace("mint-quiz-answer-", ""));
				});
				
				mint.ui.factory('util-loading', z.$el);
				
				var inv_token = null;
				if (z.options.extra_params) {
					inv_token = JSON.parse(z.options.extra_params);
					inv_token = inv_token.inv;
				}
				mint.req.json(z.options.ajaxUrl, {
					answers : answers.join(","),
					addProductId : z.addProductId,
					link_token : inv_token
				}, function (data, error) {
					try {
						mint.session._obj.data.styleId = data.style_bucket_key;
						mint.session.set();
					} catch (e) {}
					
					mint.event.trigger('quiz_completed', data);
				});
			}
		});
		
	},
	loadImages : function () {
		/* To get the image height, we must load images first */
		var
		z = this,
		$images = z.$el.find(".mint-quiz-page-0 .mint-quiz-answer img");
		
		if ($images.length == 0) {
			z.initCycle();
		} else {
			var oldImage = $images[$images.length - 1];
			if (!oldImage.height) {
				var image = new Image();
				$(image).load(function () {
					z.initCycle();
				}).bind('error', function () {
					z.initCycle();
				}).attr('src', oldImage.src);
			} else {
				z.initCycle();
			}
		}
	},
	initCycle : function () {
		var
		z = this,
		init = false,
		submitting = false,
		totalWidth = z.$el.find(".mint-quiz-status").width(),
		currentPage = 0;
		
		z.$el.find(".mint-quiz-status-bar").width(0);
		
		z.pageCycle = z.$el
			.css({
				width : z.options.width,
				overflow : 'hidden'
			})
			.find('.mint-quiz-page').css({
				width : z.options.width
			}).end()
			.find('.mint-quiz-pages').cycle({
				fx : 'scrollHorz',
				timeout : 0,
				containerResize : 0,
				slideResize : false,
				speed : 1000,
				nowrap : true,
				height : z.options.height,
				before : function (c, n) {
					if (currentPage == 0) {
						z.$el.find(".mint-quiz-prev").hide();
					} else {
						z.$el.find(".mint-quiz-prev").show();
					}
					
					$(c).find('.tip').hide();
					
					if (!$(n).data("height")) {
						$(n).data("height", $(n).height());
					}
					$(n).show();
					//z.$el.find('.mint-quiz-pages').height($(c).data("height")).animate({height: $(n).data("height")}, 1000);
					
					//var percentComplete = Math.ceil(100*(currentPage)/(z.options.quiz.pages.length));
					var newWidth = Math.ceil(totalWidth * (currentPage + 1) / (z.options.quiz.pages.length));
					z.$el.find(".mint-quiz-status-text").html((currentPage + 1) + "/" + z.options.quiz.pages.length);
					z.$el.find(".mint-quiz-status-bar").animate({
						width : newWidth
					}, 1000);
					
					/*if(init == true) {
					$('html, body').animate({scrollTop: z.$el.offset().top + 'px'}, 1000);
					}*/
					init = true;
					
					mint.event.trigger('quizQuestionChange', currentPage);
					
					if (window._jaq) {
						_jaq.push([
								'_trackPageview',
								'/quiz/page/' + currentPage
							]);
					}
				},
				prevNextClick : function (b, i) {
					currentPage = i;
				}
			});
		
		var next = function () {
			
			if (!z.validatePage(currentPage) || submitting)
				return false;
			
			if (currentPage < z.options.quiz.pages.length - 1) {
				z.pageCycle.cycle('next');
				return false;
			}
			submitting = true;
			
			var answers = [];
			z.$el.find(".mint-selected").each(function () {
				answers.push(this.id.replace("mint-quiz-answer-", ""));
			});
			
			mint.ui.factory('util-loading', z.$el);
			
			var inv_token = null;
			if (z.options.extra_params) {
				inv_token = JSON.parse(z.options.extra_params);
				inv_token = inv_token.inv;
			}
			mint.req.json(z.options.ajaxUrl, {
				answers : answers.join(","),
				addProductId : z.addProductId,
				link_token : inv_token
			}, function (data, error) {
				mint.msg.loading.show();
				try {
					mint.session._obj.data.styleId = data.style_bucket_key;
					mint.session.set();
				} catch (e) {}
				mint.event.trigger('quiz_completed', data);
				mint.msg.loading.hide();
			});
			
			if (window._jaq) {
				_jaq.push([
						'_trackPageview',
						'/quiz/page/' + currentPage
					]);
			}
			
			return false;
		};
		
		z.$el.find(".mint-quiz-answer").click(function () {
			
			var $el = $(this);
			var $ul = $el.closest(".mint-quiz-answers");
			
			if ("mint-quiz-page-" + currentPage != $ul.closest('.mint-quiz-page').attr('data-stest')) {
				return false;
			}
			
			if ($ul.hasClass("mint-quiz-multiple-answers")) {
				$el.toggleClass('mint-selected').closest(".mint-quiz-question").removeClass("mint-error");
			} else {
				var numOfQuestions = $ul.find(".mint-quiz-answer").removeClass("mint-selected").closest(".mint-quiz-question").removeClass("mint-error").parent().find('.mint-quiz-question').length;
				$el.addClass('mint-selected');
				if (numOfQuestions === 1) {
					next();
				}
			}
			return false;
		});
		
		z.$el.find(".mint-quiz-slider-answers-count-4 li:first-child").css("margin-right", "81px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:nth-child(2)").css("margin-right", "83px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:nth-child(3)").css("margin-right", "82px");
		z.$el.find(".mint-quiz-slider-answers-count-4 li:last-child").css("margin-right", "0px");
		z.$el.find(".mint-quiz-slider-answers-count-3 li:last-child").css("margin-right", "0px");
		
		z.$el.find(".mint-quiz-slider-answers li").click(function () {
			var clicked = $(this);
			if (!clicked.hasClass("mint-selected")) {
				var all = clicked.parent().find('li');
				var slider = clicked.parent().siblings(".slider-container").find(".slider");
				var pos = all.index(clicked);
				var perc = 0;
				if (pos != 0) {
					perc = pos / (all.length - 1);
				}
				perc *= 100;
				slider.find(".ui-slider-handle").animate({
					left : perc + "%"
				}, function () {
					next();
				});
				slider.find(".ui-slider-range").animate({
					width : perc + "%"
				});
				clicked.parent().find(".mint-selected").removeClass("mint-selected");
				clicked.addClass("mint-selected");
			}
		});
		
		var sliders = z.$el.find(".slider");
		sliders.each(function () {
			var slide = $(this);
			var numquestions = parseInt(slide.attr("rel"));
			slide.slider({
				range : 'min',
				step : 1,
				max : numquestions - 1,
				animate : true,
				slide : function (event, ui) {
					var num = ui.value + 1;
					var all = $(this).parent().siblings(".mint-quiz-slider-answers");
					var s = all.find("li:nth-child(" + num + ")");
					all.find(".mint-selected").removeClass("mint-selected");
					s.addClass("mint-selected");
				},
				stop : function (event, ui) {
					next();
				}
			});
		});
		
		z.$el.find(".mint-quiz-next").click(next)
		.end()
		.find('.mint-quiz-prev').click(function () {
			z.pageCycle.cycle('prev');
			return false;
		});
		
		mint.event.trigger('quizInit');
	},
	validatePage : function (page) {
		var z = this,
		passed = true,
		$page = z.$el.find(".mint-quiz-page:eq(" + page + ")");
		
		$page.find(".mint-quiz-question").removeClass("mint-error").each(function () {
			var $q = $(this);
			
			if ($q.find(".mint-selected").length === 0) {
				passed = false;
				$q.addClass("mint-error");
			}
		});
		
		if (!passed) {
			mint.msg.create(null, "Please select an answer below.", "error");
		}
		return passed;
	}
	
});

mint.ui.register('util-loading', {
	init : function () {
		this.$el.html('<div class="mint-loading">Loading</div>');
	},
	remove : function () {
		this.$el.html('');
	}
});

mint.ui.register('util-toperror', {
	options : {
		position : {
			position : 'absolute',
			top : '0px',
			left : '0px',
			width : '100%',
			zIndex : 1002
		},
		style : {},
		debug : false,
		timeout : 0 //never disappear
	},
	hits : 0,
	init : function () {
		var z = this;
		z.$el.css($.extend({
				overflow : 'shown',
				display : 'none'
			}, z.options.style || {}, z.options.position || {}));
		
		mint.event.watch('mint-server-error', function (ev, error) {
			
			var data = $.extend({}, z.options);
			data.error = error;
			
			z.render(data);
			z.$el.show();
			z.hits++;
			var hits = z.hits;
			
			if (z.options.timeout) {
				setTimeout(function () {
					if (hits == z.hits) {
						z.$el.hide();
					}
				}, z.options.timeout);
			}
			
			z.$el.find(".mint-toperror-link-close").click(function () {
				z.$el.hide();
			});
		});
	},
	remove : function () {
		this.$el.html('').hide();
	}
});

mint.ui.register('catalog-category-products', {
	options : {
		id : 0,
		url : 'http://www.jewelmint.com',
		ajaxUrl : '${baseUrl}/${store}/catalog/category/products'
	},
	init : function () {
		var z = this;
		if (z.options.id) {
			
			if (z.options.products) { // we already know the products
				z.render(z.options);
			} else { // Lets get the product info by ajax
				// Do loading box
				var loading = mint.ui.factory('util-loading', z.$el);
				
				mint.req.json(this.options.ajaxUrl, {
					category : this.options.id
				}, function (data) {
					loading.remove();
					if (!data.error) {
						data.url = z.options.url;
						z.render(data);
						var hmm = $.extend({}, data);
						mint.event.trigger('categoryProductsLoaded', hmm);
					}
				});
			}
		} else {
			console.log("No category id found.");
			console.log(z.options);
		}
	}
	
});

mint.ui.register('catalog-product-summary', {
	options : {
		id : 0,
		url : 'http://www.jewelmint.com',
		ajaxUrl : '${baseUrl}/${store}/catalog/product/summary'
	},
	init : function () {
		var z = this;
		if (z.options.id) {
			
			if (z.options.name) { // we already know the product info
				z.render(z.options);
			} else { // Lets get the product info by ajax
				// Do loading box
				var loading = mint.ui.factory('util-loading', z.$el);
				
				mint.req.json(this.options.ajaxUrl, {
					product : this.options.id
				}, function (data) {
					loading.remove();
					if (!data.error) {
						data = data.product;
						data.url = z.options.url;
						z.render(data);
					}
				});
			}
		} else {
			console.log("No product id found.");
			console.log(z.options);
		}
	}
	
});

mint.ui.register('catalog-product-add', {
	options : {
		id : 0,
		quantity : 1,
		associatedProductsUrl : '${baseUrl}/${store}/catalog/product/${id}/associated-products',
		regUrl : '/style-profile',
		regText : 'Become a Member',
		addText : 'Add to Cart',
		ajaxUrl : '${baseUrl}/${store}/checkout/cart/${id}/add/${quantity}',
		waitlistBtnText : 'Waitlist Me',
		waitlist : true,
		possibleProductId : false
	},
	_render : function (data) {
		var z = this;
		var selectedProduct = 0;
		// Form matrix of assoc products
		var attrs = {
			size : {
				name : "Size",
				values : {},
				links : [{
						text : "Size Chart",
						classname : "show-size-chart",
						dataStest : "size-chart-link",
						href : "#modal-switch"
					}
				]
			},
			color : {
				name : "Color",
				values : {}
				
			}
		};
		var messages = {
			waitlist : "The item you\'ve selected is currently sold out. Join the waitlist and we will notify you by email as soon as it\'s back in stock.",
			waitlistConfirmation : "You've been added to the waitlist!",
			loading : "Loading..."
		};
		function waitlistMe() {
			$('.mint-catalog-product-add').addClass('waitlist-me');
			// add the waitlist message
			$('.mint-loading-placeholder').text(messages.waitlist).removeClass('mint-hidden');
			$('.mint-add-waitlist').addClass('waitlist-btn-showhide');
		};
		function waitlistMeDestroy() {
			$('.mint-catalog-product-add').removeClass('waitlist-me');
			$('.mint-loading-placeholder').text(messages.loading).addClass('mint-hidden');
			$('.mint-add-waitlist').removeClass('waitlist-btn-showhide');
		};
		function waitlistMeConfirmation() {
			$('.mint-add-waitlist').removeClass('waitlist-btn-showhide');
			$('.mint-loading-placeholder').text(messages.waitlistConfirmation);
		};
		
		// Dont render if disabled
		if (data.status === 0) {
			return;
		}
		
		// data.almost_sold_flag
		var totalInventory = 0;
		
		var hasAssoc = false;
		
		if (data.associated_products) {
			$.each(data.associated_products, function () {
				hasAssoc = true;
				return false;
			});
		}
		
		if (hasAssoc) {
			var isInStock = ((data.stock && data.stock.is_in_stock) != '0');
			// All assoc products have size, stylemint has color
			var assCount = 0;
			
			$.each(data.associated_products, function (i, v) {
				assCount++;
				if (v.stock && v.stock.quantity && isInStock) {
					totalInventory += parseInt(v.stock.quantity);
				} else if (v.stock && v.stock.quantity && !isInStock) {
					v.stock.quantity = data.associated_products[i].stock.quantity = 0;
				}
				$.each(attrs, function (attr) {
					if (v[attr] && v[attr] != "") {
						if (!attrs[attr].values[v[attr]]) {
							attrs[attr].values[v[attr]] = {};
						}
						
						var count = 0;
						$.each(attrs, function (a) {
							if (a != attr && v[a] && v[a] != "") {
								count++;
								if (!attrs[attr].values[v[attr]][a]) {
									attrs[attr].values[v[attr]][a] = {};
								}
								attrs[attr].values[v[attr]][a][v[a]] = v;
							}
						});
						
						if (count < 1) {
							attrs[attr].values[v[attr]] = v;
						}
						
					}
				});
			});
			if (assCount === 1) {
				$.each(data.associated_products, function (i, v) {
					selectedProduct = i;
					totalInventory = (v.stock && v.stock.quantity) ? parseInt(v.stock.quantity) : 0;
					totalInventory = (v.stock && v.stock.is_in_stock) != '0' ? totalInventory : 0;
					attrs = [];
					hasAssoc = false;
					data.associated_products = null;
				});
			}
		} else {
			selectedProduct = z.options.id;
			totalInventory = (data.stock && data.stock.quantity) ? parseInt(data.stock.quantity) : 0;
			totalInventory = (data.stock && data.stock.is_in_stock) != '0' ? totalInventory : 0;
		}
		var attrsCount = 2;
		// Order by size, color can go anywhere (although we order by name)
		$.each(attrs, function (attr) {
			attrs[attr].values = mint.util.ksort(attrs[attr].values);
			
			var hasValues = false;
			$.each(attrs[attr].values, function () {
				hasValues = true;
				return false;
			});
			
			if (!hasValues) {
				delete attrs[attr];
				attrsCount--;
			}
			
		});
		
		var inventoryStatus = 'healthy';
		
		if (totalInventory <= 0) {
			inventoryStatus = 'sold_out';
		} else if (totalInventory < 200 || (data.almost_sold_flag && data.almost_sold_flag != "0")) {
			inventoryStatus = 'almost_sold_out';
		}
		
		mint.session.loggedIn(function (loggedIn) {
			var o = z.options;
			o.loggedIn = loggedIn;
			o.attrs = attrs;
			o.inventoryStatus = inventoryStatus;
			//z.options.ajaxUrl = z.options.ajaxUrl.replace('${id}', z.options.id).replace('${quantity}', z.options.quantity);
			z.render(o);
			
			// when there is only one attribute
			if (attrsCount == 1) {
				$.each(attrs, function (i, attr) {
					$.each(attr.values, function (j, v) {
						var $el = $("#attr-" + i + "-value-" + j.replace('#', ''));
						if (!v.stock || parseInt(v.stock.quantity) == 0 || parseInt(v.stock.is_in_stock) == 0) {
							$el.addClass('inactive');
						}
					});
				});
			} else if ((attrsCount == 0) && (totalInventory == 0)) {
				waitlistMe();
				
				$('.mint-add-waitlist').click(function () {
					var quantity = z.$el.find("input").val();
					
					mint.msg.loading.show();
					mint.req.json('${baseUrl}/${store}/customer/waitlist', {
						product_id : selectedProduct,
						waitlist_me : 1
					}, function (data) {
						mint.msg.loading.hide();
						if (data.error) {
							console.log(data.error);
							data.error.message = (data.error.message || '').replace('waitinglist', 'waitlist');
							mint.event.trigger('mint-server-error', data.error);
						} else {
							waitlistMeConfirmation();
						}
					});
					return false;
				});
			} else if ((attrsCount == 2) && (totalInventory == 0)) {
				waitlistMe();
				setTimeout(function () {
					$('.attr-size-value:first a').click();
				}, 23);
			}
			
			z.$el.find('.attr-value a').click(function () {
				var
				$a = $(this),
				$dl = $a.closest('dl');
				$dl.find(".attr-value a").removeClass('selected');
				$a.addClass("selected");
				
				var attribute = attrs[$a.attr('type')].values[$a.attr('value')];
				
				selectedProduct = 0;
				
				console.log(attrs);
				if (!attribute.id) {
					$.each(attribute, function (otherAttribute, availableItems) {
						$("dl.attr." + otherAttribute + " .attr-value a").addClass('inactive');
						
						var count = 0;
						$.each(availableItems, function (i, v) {
							if (count == 0 && $a.parent().hasClass('attr-color-value')) {
								mint.event.trigger('cart-product-color-selected', {
									product : v
								});
							}
							count++;
							var $el = $("#attr-" + otherAttribute + "-value-" + i.replace('#', ''));
							if (v.stock && parseInt(v.stock.quantity) > 0 && parseInt(v.stock.is_in_stock)) {
								$el.removeClass('inactive');
								if ($el.hasClass('selected')) {
									selectedProduct = v.id;
									mint.event.trigger('cart-product-selected', {
										product : v,
										el : $el
									});
									waitlistMeDestroy();
								}
							} else if (z.options.waitlist && (v.stock == null || parseInt(v.stock.quantity) == 0 || parseInt(v.stock.is_in_stock) == 0)) {
								// waitlist behavior
								if ($el.hasClass('selected')) {
									if ($el.hasClass('inactive')) {
										waitlistMe();
									}
								}
							}
						});
					});
				} else {
					selectedProduct = attribute.id;
					if ($a.hasClass('inactive')) {
						waitlistMe();
					} else {
						waitlistMeDestroy();
					}
				}
				
				return false;
			});
			if (loggedIn) {
				z.favorite();
				
				z.$el.find('.mint-add-product').click(function () {
					var quantity = z.$el.find("input").val();
					if (selectedProduct == 0) {
						var msg = [];
						$.each(attrs, function (i) {
							msg.push(" a " + i);
						});
						mint.msg.create("Please select" + msg.join(' and'), "No product selected", "error");
						return false;
					} else if (quantity < 1 || quantity > 20) {
						mint.msg.create("Quantity has to be between 1 and 20", "There is an error with the quantity specified", "error");
						return false;
					}
					
					var button = this;
					$(button).addClass('mint-disabled').attr('disabled', 'disabled');
					var loader = $(button).parent().children('.mint-loading-placeholder');
					loader.addClass('mint-loading').removeClass('mint-hidden');
					
					mint.msg.loading.show();
					mint.req.json(z.options.ajaxUrl.replace('${id}', selectedProduct).replace('${quantity}', quantity), function (data) {
						$(button).removeClass('mint-disabled').removeAttr('disabled');
						loader.addClass('mint-hidden').removeClass('mint-loading');
						if (data.cart_quantity) {
							mint.session._obj.data = mint.session._obj.data || {};
							mint.session._obj.data.cart_quantity = data.cart_quantity;
						}
						//z.$el.trigger('cart-add', data);
						if (!data.error) {
							mint.event.trigger('cart-add', data);
							mint.event.trigger('cartUpdate', data);
						} else {
							mint.event.trigger('mint-server-error', data.error);
						}
						mint.msg.loading.hide();
					});
					return false;
				});
				if (z.options.waitlist) {
					$('.mint-add-waitlist').click(function () {
						var size = $('.attr-size-value .selected').attr('value');
						var color = $('.attr-color-value .selected').attr('value');
						var quantity = z.$el.find("input").val();
						
						$.each(data.associated_products, function (i, v) {
							if (v.size == size && v.color == color) {
								mint.msg.loading.show();
								mint.req.json('${baseUrl}/${store}/customer/waitlist', {
									product_id : v.id,
									waitlist_me : 1
								}, function (data) {
									mint.msg.loading.hide();
									if (data.error) {
										console.log(data.error);
										data.error.message = (data.error.message || '').replace('waitinglist', 'waitlist');
										mint.event.trigger('mint-server-error', data.error);
									} else {
										waitlistMeConfirmation();
									}
								});
							}
						});
						return false;
					});
				};
			}
		});
		if (!mint.session._obj.logged_in) {
			// Logged out users get redirected to /style-profile
			if (z.options.waitlist) {
				$('.mint-add-waitlist').click(function () {
					if (!mint.session._obj.logged_in) {
						if (z.options.possibleProductId) {
							var possibleProductId = $('.mint-add-waitlist').attr('href');
							location.href = possibleProductId;
						} else {
							location.href = z.options.regUrl;
						}
						
						return false;
					};
					return false;
				});
			};
			// Don't show Favorites Icon unless loggedIn
			$('.case-fav').css('display', 'none');
		};
	},
	favorite : function () {
		$('.case-fav a').click(function () {
			if ($(this).hasClass('faved')) {
				mint.req.json("${baseUrl}/${store}/customer/product/unfavorite", {
					product : $(this).attr('product')
				}, function (data) {});
				$(this).toggleClass('faved');
			} else {
				mint.req.json("${baseUrl}/${store}/customer/product/favorite", {
					product : $(this).attr('product')
				}, function (data) {});
				$(this).toggleClass('faved');
			}
			return false;
		});
	},
	init : function () {
		var z = this;
		
		var selectedProduct = 0;
		
		if (z.options.id) {
			if (z.options.associated_products) {
				z._render.call(z, z.options);
			} else {
				var loading = mint.ui.factory('util-loading', z.$el);
				mint.req.json(z.options.associatedProductsUrl.replace('${id}', z.options.id), function (data) {
					console.log(data);
					loading.remove();
					z._render.call(z, data);
				});
			}
		} else {
			console.log("No product id found.");
			console.log(z.options);
		}
	}
});

mint.ui.register('catalog-product-our_designs', {
	options : {
		getProductsUrl : '${baseUrl}/${store}/customer/our_designs',
		addToShowroomUrl : '${baseUrl}/${store}/customer/showroom/add/products',
		rootCategoryId : '46'
	},
	init : function () {
		//return // priority projects pushed back this. this is not done
		var self = this,
		getProductsArgs = {};
		this.loggedIn = false;
		mint.session.loggedIn(function (isLoggedIn) {
			self.loggedIn = isLoggedIn;
		});
		
		if (this.options.rootCategoryId) {
			mint.msg.loading.show();
			getProductsArgs['cat_id'] = this.options.rootCategoryId;
			getProductsArgs['limit'] = 10
				getProductsArgs['start'] = 0
				
				// make a call to get all of the products for this sites category
				mint.req.json(this.options.getProductsUrl, getProductsArgs, function (data) {
					self.successfulGetProducts.apply(self, arguments);
				});
			
		}
		this.$el.delegate(".recent-collection .but a", "click", function (e) {
			self.addToShowroomClick.apply(self, [e, this]);
		});
		
	},
	addToShowroomClick : function (e, elm) {
		if (this.loggedIn) {
			e.preventDefault();
			var $elm = $(elm),
			url = mint.req.getUrlTmpl(this.options.addToShowroomUrl);
			mint.req.json(url, {
				products : $elm.attr("data-product-id")
			}, function () {
				$elm.parent().after("<p>This product is now added to your showroom. <a href='/showroom'>Go To Your Showroom</a></p>").remove();
			});
		}
	},
	successfulGetProducts : function (data) {
		console.log(data);
		var sup = this
			var model = function () {
			var ret = {
				_data : data,
				hasCatId : (!!sup.options.rootCategoryId),
				idx : false,
				setIndex : function (index) {
					this.idx = index;
				},
				image : {
					_src : false,
					getHeight : function () {
						this.getSrc();
						return this._height;
					},
					getWidth : function () {
						this.getSrc();
						return this._width;
						
					},
					getSrc : function (index) {
						if (!this._src) {
							var images = self._data[self.idx].images;
							try {
								this._height = 371;
								this._width = 297;
								this._src = images.primary_model_image[0]['297x371'];
							} catch (e) {
								this._height = 361;
								this._width = 680;
								this._src = images.base[0]['361x680'];
							}
						}
						return this._src;
					},
					get : function () {
						var self = this,
						ret = {
							height : self.getHeight(),
							width : self.getWidth(),
							src : self.getSrc()
						}
						this._src = false;
						return ret;
						
					}
				},
				getId : function () {
					return this._data[this.idx].id;
				},
				title : function () {
					return this._data[this.idx].name;
				},
				isInStock : function () {
					/*
					 * A simple product is IN STOCK if:
					 * is_in_stock = 1
					 * enabled = 1
					 * quantity > 0
					 *
					 * A configurable product is IN STOCK if:
					 * is_in_stock = 1
					 * enabled = 1
					 * any of its children products have quantity > 0, enabled = 1, and is_in_stock = 1
					 */
					var data = this._data[this.idx],
					stock = data.stock,
					cur;
					var validate = function (stock) {
						return parseFloat(stock.quantity) > 0 && !!Number(stock.is_in_stock) && !!Number(stock.enabled);
					};
					if (!!Number(data.configurable)) {
						if (!$.isArray(data.associated_products) && !$.isEmptyObject(data.associated_products)) {
							for (var key in data.associated_products) {
								cur = validate(data.associated_products[key].stock);
								if (cur)
									return true;
							}
						}
					}
					return validate(stock);
				},
				isInShowroom : function () {
					var showroom = this._data[this.idx].inShowroom;
					return !(showroom == null || showroom == undefined);
				},
				getProductUrl : function () {
					return this._data[this.idx].url;
				},
				getCollection : function () {
					var collection = [];
					for (var name in this._data) {
						this.setIndex(name);
						var cur = {};
						cur['title'] = this.title();
						cur['inStock'] = this.isInStock();
						cur['inShowroom'] = this.isInShowroom();
						cur['image'] = this.image.get();
						cur['id'] = this.getId();
						cur['productUrl'] = this.getProductUrl();
						collection.push(cur);
					}
					return collection;
				}
			}
			var self = ret;
			return ret;
		}
		();
		var out = model.getCollection();
		console.log(out);
		this.render({
			products : out,
			userIsLoggedIn : sup.loggedIn,
			siteName : mint.getStoreInfo().name
		});
		mint.msg.loading.hide();
	}
});

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, jQuery:true, mint:true*/

mint.ui.register('catalog-product-details', {
	options : {
		url_key : null,
		productDetailsUrl : '${baseUrl}/${store}/catalog/product/details',
		cartOptions : {},
		videoStillHeight : '140px',
		videoStillWidth : '250px'
	},
	switchPrimaryImage : function ($a) {
		var $zoom = this.$el.find(".cloud-zoom");
		
		try {
			var links = $a.attr('href').split("?preview=");
			$zoom.attr("href", links[1]).find('img').attr({
				src : links[0]
			});
			if ($zoom.data('zoom')) {
				$zoom.data('zoom').destroy();
			}
			$zoom.CloudZoom();
		} catch (e) {}
	},
	applyCarousel : function () {
		var z = this;
		
		var
		$carousel = this.$el.find(".product-thumbs .carousel"),
		$links = $carousel.find('a');
		
		z.switchPrimaryImage.call(z, $($links[0]));
		
		if ($links.length < 4) {
			$(".product-thumbs .arrow-right").hide();
			$(".product-thumbs .arrow-left").hide();
		} else {
			$(".product-thumbs .arrow-right").show();
			$(".product-thumbs .arrow-left").show();
			$carousel.jCarouselLite({
				btnNext : ".product-thumbs .arrow-right",
				btnPrev : ".product-thumbs .arrow-left"
			});
		}
		
		z.$el.find(".carousel a").click(function () {
			z.switchPrimaryImage.call(z, $(this));
			return false;
		});
		
	},
	init : function () {
		var z = this;
		
		if (z.options.url_key) {
			var loading = mint.ui.factory('util-loading', z.$el);
			
			mint.req.json(this.options.productDetailsUrl, {
				url_key : z.options.url_key
			}, function (data) {
				console.log(data);
				loading.remove();
				z.render(data);
				
				if (z.options.addTmpl) {
					data.tmpl = z.options.addTmpl;
				}
				
				z.$el.find('.mint-catalog-product-add').widgetize('catalog-product-add', data);
				
				mint.event.trigger('sizeChart');
				
				if (data.video) {
					var bcExp;
					var modVP;
					var modExp;
					
					var resize = function () {
						$('.video-chrome').css('left', ($(window).width() / 2) - ($('.video-chrome').outerWidth() / 2))
						.css('top', ($(window).height() / 2) - ($('.video-chrome').outerHeight() / 2));
						$('#mint-overlay').css('height', $(window).height()).css('width', $(window).width());
					};
					
					var close = function () {
						$(window).unbind('resize', resize);
						$('#mint-overlay').remove();
						$('.video-chrome').css('left', -5000);
						if (modVP) {
							modVP.stop();
						}
						return false;
					};
					
					window.onTemplateLoaded = function (experienceID) {
						bcExp = brightcove.getExperience(experienceID);
						
						modVP = bcExp.getModule(APIModules.VIDEO_PLAYER);
						modExp = bcExp.getModule(APIModules.EXPERIENCE);
						
						modExp.addEventListener(BCExperienceEvent.CONTENT_LOAD, onContentLoad);
						
					}
					window.onContentLoad = function (evt) {
						var currentVideo = modVP.getCurrentVideo();
						console.log(currentVideo);
						//z.$el.find('.video-still').css('background', '#000 url('+currentVideo.videoStillURL+') no-repeat center center').find('div').addClass('loading');
						z.$el.find('.video-still').css('position', 'relative').append($("<img />").attr("src", currentVideo.videoStillURL).css({
								"position" : "absolute",
								"top" : "0",
								"width" : z.options.videoStillWidth,
								"height" : z.options.videoStillHeight
							}));
					}
					
					$.getScript('https://sadmin.brightcove.com/js/BrightcoveExperiences_all.js', function () {
						brightcove.createExperiences();
					});
					
					z.$el.find('.video-still div').addClass('loading').css({
						'background' : 'url(' + mint.config('baseUrl') + '/images/play.png) no-repeat center center',
						'position' : 'relative',
						'z-index' : '5'
					})
					.click(function () {
						z.$el.find('.video-chrome').css({
							zIndex : 10002
						})
						.find('.simplemodal-close').click(close);
						
						$('<div id="mint-overlay"></div>').css({
							zIndex : 10001,
							opacity : 0.65,
							top : 0,
							left : 0,
							position : 'fixed'
						}).appendTo('body').click(close);
						if (modVP) {
							modVP.play();
						}
						resize();
						$(window).bind('resize', resize);
					});
				}
				
				var $spotted = z.$el.find('.spotted .thumb');
				
				if ($spotted.find('img').length > 1) {
					$spotted.cycle({
						fx : 'scrollHorz',
						speed : 'fast',
						timeout : 0,
						prev : '.spotted .arrow-left',
						next : '.spotted .arrow-right'
					});
				} else {
					$('.spotted .arrow-left').remove();
					$('.spotted .arrow-right').remove();
					$spotted.css({
						margin : 0,
						'text-align' : 'center',
						width : 'auto',
						'float' : 'none'
					});
				}
				
				z.applyCarousel.call(z);
				
				setTimeout(function () {
					$('.attr-color-value:first a').click();
				}, 23);
			});
		} else {
			console.log("No product url key found.");
			console.log(z.options);
		}
		mint.event.watch('cart-product-color-selected', function (e, data) {
			console.log("Switching Images", data);
			$.tmpl(mint.tmpl.catalog.product.image_carousel, {
				images : data.product.images.base,
				ignore_first : false
			}).appendTo(z.$el.find('.carousel').html(''));
			if (data.product.images.small && data.product.images.small.length && data.product.images.small[0]['214x290']) {
				z.$el.find('.description p img').attr('src', data.product.images.small[0]['214x290']);
			}
			z.applyCarousel.call(z);
		});
	}
	
});

mint.ui.register('catalog-product-details_portrait_layout', {
	options : {
		url_key : null,
		productDetailsUrl : '${baseUrl}/${store}/catalog/product/details',
		cartOptions : {},
		video : true
	},
	switchPrimaryImage : function ($a) {
		var $zoom = this.$el.find(".cloud-zoom");
		
		try {
			var links = $a.attr('href').split("?preview=");
			$zoom.attr("href", links[1]).find('img').attr({
				src : links[0]
			});
			if ($zoom.data('zoom')) {
				$zoom.data('zoom').destroy();
			}
			$zoom.CloudZoom();
		} catch (e) {}
	},
	applyCarousel : function () {
		var z = this;
		
		var
		$carousel = this.$el.find(".product-thumbs .carousel"),
		$links = $carousel.find('a');
		
		z.switchPrimaryImage.call(z, $($links[0]));
		
		if ($links.length < 6) {
			$(".product-thumbs .arrow-right").hide();
			$(".product-thumbs .arrow-left").hide();
		} else {
			$(".product-thumbs .arrow-right").show();
			$(".product-thumbs .arrow-left").show();
			$carousel.jCarouselLite({
				visible : 6,
				divSize : -10,
				btnNext : ".product-thumbs .arrow-right",
				btnPrev : ".product-thumbs .arrow-left"
			});
		}
		
		z.$el.find(".carousel a").click(function () {
			z.switchPrimaryImage.call(z, $(this));
			return false;
		});
	},
	tabbedModule : function () {
		var tabContainers = $('.tabbed-module > div');
		tabContainers.hide().filter(':first').show();
		
		$('.tabbed-module .tab-nav a').click(function () {
			tabContainers.hide();
			tabContainers.filter(this.hash).show();
			$('.tabbed-module .tab-nav a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		}).filter(':first').click();
		
		// carousel slideshow
		$('.style-images').each(function () {
			// dynamically inject the slideshow nav if needed
			var $nav = $('<ul class="nav"></ul>').insertAfter(this);
			
			$(this).cycle({
				speed : 800,
				timeout : 6000,
				pager : $nav
			});
		});
	},
	init : function () {
		var z = this;
		
		if (z.options.url_key) {
			var loading = mint.ui.factory('util-loading', z.$el);
			
			mint.req.json(this.options.productDetailsUrl, {
				url_key : z.options.url_key
			}, function (data) {
				
				if (data.error) {
					var errorTitle,
					error = data.error;
					// no product found for the given url_key
					if (error.debug && error.debug.indexOf("No product") > -1) {
						errorTitle = "No Product Found"
					} else {
						errorTitle = error.type;
					}
					mint.msg.create(errorTitle, error.message);
					loading.$el.hide();
					return false;
				}
				console.log(data);
				loading.remove();
				z.render(data);
				
				data.possibleProductId = true; // add product to showroom upon completing registration
				z.$el.find('.mint-catalog-product-add').widgetize('catalog-product-add', data);
				
				if (data.video) {
					$.getScript('https://sadmin.brightcove.com/js/BrightcoveExperiences_all.js', function () {
						brightcove.createExperiences();
						
						// Create element for video component
						$('.product-video').html(data.video);
					});
				}
				
				z.applyCarousel.call(z);
				
				if ((data.attributes.stylist_1_name != 0) && (data.attributes.stylist_1_name != null)) {
					z.tabbedModule();
					var
					kate = data.attributes.stylist_1_name,
					katebosworth = kate + ' Bosworth',
					cher = data.attributes.stylist_2_name;
					
					if (kate) {
						$('.stylist-tab-Kate').text(katebosworth);
					}
					if (cher == 0) {
						var chercoulter = cher.replace(0, 'Cher') + ' Coulter';
						$('.stylist-tab-Cher').text(chercoulter);
					} else {
						$('.stylist-tab-Cher').text(cher + ' Coulter');
					}
				}
				
				setTimeout(function () {
					$('.attr-size-value:first a').click();
				}, 23);
			});
		} else {
			console.log("No product url key found.");
			console.log(z.options);
		}
	}
	
});

/*jshint asi:true, laxbreak:true */
/*GLOBAL $:true, mint:true*/
mint.ui.register('checkout-form', {
	options : {
		getUrl : '${baseUrl}/${store}/checkout/cart/get',
		couponUrl : '${baseUrl}/${store}/checkout/coupon/add',
		resetCouponUrl : '${baseUrl}/${store}/checkout/coupon/reset',
		submitUrl : '${baseUrl}/${store}/checkout/purchase',
		saveShippingUrl : '${baseUrl}/${store}/checkout/update/shipping',
		buttons : [{
				loading : true
			}, {
				i : 'purchase',
				title : 'Purchase',
				primary : true,
				cls : 'mint-checkout-submit'
			}, {
				i : 'recalculate',
				stest : 'recalculate',
				title : 'Almost ready',
				cls : 'mint-checkout-recalculate'
			}
		],
		fetchCart : true,
		giftcards : true
	},
	keepShippingAddressOpen : false,
	keepBillingAddressOpen : false,
	init : function () {
		var z = this,
		loading = mint.ui.factory('util-loading', z.$el),
		cb = function (data) {
			loading.remove();
			
			if (data.error) {
				if (data.error.code == 420) {
					mint.event.trigger('checkoutLoginRequired', data);
				} else {
					mint.event.trigger('checkoutError', data);
				}
				return;
			}
			
			var o = $.extend({}, z.options);
			o.submitUrl = $.tmpl(o.submitUrl, mint.config()).text();
			o.couponUrl = $.tmpl(o.couponUrl, mint.config()).text();
			o.resetCouponUrl = $.tmpl(o.resetCouponUrl, mint.config()).text();
			o.saveShippingUrl = $.tmpl(o.saveShippingUrl, mint.config()).text();
			
			z.submitUrl = o.submitUrl;
			z.saveShippingUrl = o.saveShippingUrl;
			
			data.have_saved_address = (data.address ? (data.address.city ? 1 : 0) : 0);
			data.have_saved_billing_address = (data.billing_address ? (data.billing_address.phone ? 1 : 0) : 0);
			data.billing_address.no_shipping = false;
			
			$.each(o.buttons, function (k, v) {
				if (v.i == "purchase") {
					v.hidden = data.have_saved_address ? false : true;
				} else if (v.i == "recalculate") {
					v.hidden = data.have_saved_address;
				}
			});
			
			if (data.balance_used)
				data.balance_used = z.formatPrice(data.balance_used);
			
			if (!data.address)
				data.address = {};
			
			if (!data.customer_credits || data.customer_credits === '')
				data.customer_credits = '0';
			
			var thisYear = new Date().getFullYear();
			data.years = {};
			for (var i = 0; i < 10; i++) {
				data.years[(thisYear + '').substr(2)] = thisYear++;
			}
			
			z.render($.extend(data, o));
			
			//z.hideDiscount(data.total_quantity);
			
			z.$el.find('.mint-customer-address').find('input, select').blur(function () {
				if (z.$el.find('.same-as-shipping').filter(':checked').length) {
					z.updateBillingWithShipping.call(z);
				}
			});
			z.$el.find('.same-as-shipping').change(function () {
				if ($(this).filter(':checked').length) {
					z.updateBillingWithShipping.call(z);
				} else {
					z.$el.find('.checkout-billing-form').find('input, select').val('');
				}
			});
			
			z.$el.find('.mint-tag').fieldtag();
			
			if (!data.have_saved_address) {
				z.addressChanged(true);
			}
			
			if (!data.have_saved_billing_address) {
				z.billingChanged(true);
				if (!data.have_saved_address) {
					z.$el.find(".checkout-billing-form").hide();
				}
			}
			
			$("input[name='cc_telephone']").mask("(999) 999-9999");
			
			var loader = z.$el.find('.mint-loading-placeholder') // loading notifcation
		,
			checkoutForm = z.$el.find('form')[0],
			isRecalculating = 0,
			$submitButton = z.$el.find('.mint-checkout-submit') // button to submit the order
		,
			$recalulateButton = z.$el.find('.mint-checkout-recalculate');
			
			var callback = function (data, error) {
				z.removeLock();
				loader.addClass('mint-hidden').removeClass('mint-loading');
				$submitButton.show();
				z.processComplete(data);
			};
			
			var before = function () {
				loader.addClass('mint-loading').removeClass('mint-hidden');
				$submitButton.hide();
				$recalulateButton.hide();
				z.setLock();
			};
			
			mint.form.bind($(checkoutForm), callback, before);
			var stateSelect = z.$el.find("select[name=region]");
			this.lastSavedAddressState = stateSelect.val();
			
			z.$el.find("input,select").change(function () {
				
				if ($(this).filter('select[name=region]')) {
					if (isRecalculating)
						return false;
					z.mustRecalculate();
				}
				
				var errors = [];
				mint.form.validate(z.$el.find('.mint-customer-address'), errors, true);
				
				if (!errors.length) {
					$recalulateButton.hide();
					$submitButton.show();
				}
				
				if ($(this).parents('.mint-customer-address').length) {
					z.$el.find("input[name=save_address]").val(1);
					
					var address_errors = [];
					mint.form.validate(z.$el.find('.mint-customer-address'), address_errors, true);
					if (!address_errors.length) {
						z.$el.find('.address-name').text(z.$el.find('input[name=first_name]').val() + ' ' + z.$el.find('input[name=last_name]').val());
						z.$el.find('.address-street').text(z.$el.find('input[name=street1]').val() + ' ' + z.$el.find('input[name=street2]').val());
						z.$el.find('.address-city').text(z.$el.find('input[name=city]').val() + ', ' + z.$el.find('select[name=region] option:selected').text() + ' ' + z.$el.find('input[name=zip_code]').val());
						
						if (!z.keepShippingAddressOpen) {
							z.$el.find(".customer-address-saved").slideDown();
							z.$el.find(".customer-address-field-holder").slideUp();
						}
						
						if (z.checkRecalculate && !isRecalculating) {
							isRecalculating = 1;
							
							loader.addClass('mint-loading').removeClass('mint-hidden');
							$submitButton.hide();
							$recalulateButton.hide();
							
							z.setLock();
							
							var params = {};
							
							z.$el.find('.mint-customer-address').find('input, select').each(function () {
								params[$(this).attr('name')] = $(this).val();
							});
							//params.region = stateSelect.val();
							z.$el.find('select[name=region]').attr('disabled', true);
							mint.req.json(z.saveShippingUrl, params, function (data) {
								z.updateTotals.call(z, data);
								z.checkRecalculate = 0;
								isRecalculating = 0;
								z.removeLock();
								loader.addClass('mint-hidden').removeClass('mint-loading');
								$submitButton.show();
								z.$el.find('select[name=region]').attr('disabled', false);
							});
							
						}
						
						var billing_address_errors = [];
						mint.form.validate(z.$el.find('.checkout-billing-form'), billing_address_errors, true);
						if (billing_address_errors.length) {
							z.billingChanged.call(z);
						}
					}
					
				}
				
				if ($(this).parents('.checkout-billing-form').length) {
					z.$el.find("input[name=save_billing_address]").val(1);
					var _billing_address_errors = [];
					mint.form.validate(z.$el.find('.checkout-billing-form'), _billing_address_errors, true);
					if (!_billing_address_errors.length) {
						z.$el.find('.billing-address-name').text(z.$el.find('input[name=cc_first_name]').val() + ' ' + z.$el.find('input[name=cc_last_name]').val());
						z.$el.find('.billing-address-street').text(z.$el.find('input[name=cc_street1]').val() + ' ' + z.$el.find('input[name=cc_street2]').val());
						z.$el.find('.billing-address-city').text(z.$el.find('input[name=cc_city]').val() + ', ' + z.$el.find('select[name=cc_region_id] option:selected').text() + ' ' + z.$el.find('input[name=cc_zip_code]').val());
						if (!z.keepBillingAddressOpen) {
							z.$el.find(".checkout-billing-info").slideDown();
							z.$el.find(".checkout-billing-form").slideUp();
						}
					}
				}
				
			});
			
			//grab all changes
			
			z.$el.find("a.checkout-toggle-address").click(function () {
				z.keepShippingAddressOpen = true;
				z.addressChanged();
			});
			
			// clicking the edit payment info link
			z.$el.find("a.checkout-toggle-payment").click(function () {
				$(this).hide();
				z.ccChanged();
			});
			
			z.$el.find("a.checkout-toggle-billing").click(function () {
				z.keepBillingAddressOpen = true;
				z.billingChanged.call(z);
			});
			
			z.$el.find("a.customer-credit-totals-discount-reset").click(function () {
				z.discountReset();
			});
			
			z.$el.find(".checkout-credit-coupon-button").click(function () {
				var holder = $(this).parents(".checkout-credit-coupon"),
				input = holder.find("input[name=coupon_code]");
				
				if (input.val().length) {
					z.discountUpdated($.trim(input.val()));
				}
				return false;
			});
			
			//if the credit form is hidden (have saved cc) disable payment validation
			if (data.valid_cc != '0') {
				z.$el.find(".customer-credit-form-holder input[class*=validate]").addClass('mint-disable-validation');
			}
			
			if (z.options.giftcards) {
				mint.ui.factory('giftcard-redeem', z.$el.find('.checkout-giftcard-redeem'));
			} else {
				z.$el.find(".checkout-giftcard").hide();
			}
			
			z.updateTotals(data);
			
			mint.event.trigger('checkoutFormInitialized', data);
			
			if (!data.have_saved_address) {
				z.$el.find(".checkout-billing-form").hide();
			}
			z.inited = true;
		};
		
		if (this.options.fetchCart) {
			mint.req.json(this.options.getUrl, cb);
		} else {
			mint.event.watch('checkoutCartInitialized', function (ev, data) {
				cb(data);
			});
		}
		mint.event.watch('cartUpdateStarted', function (ev, data) {
			z.setLock();
		});
		mint.event.watch('cartUpdate', function (ev, data) {
			//console.log('cart update!',data.class_name);
			z.cartUpdated(data);
			//z.hideDiscount(data.total_quantity);
		});
		
		mint.event.watch('cart-add', function (ev, data) {
			//cart add cart response has silly data in it
			z.cartUpdated(data);
		});
		
		z.externalLinks();
	},
	updateBillingWithShipping : function () {
		var z = this;
		
		z.$el.find('.mint-customer-address').find('input, select').each(function () {
			var $input = $(this);
			if ($input.attr('name') == 'region') {
				z.$el.find('*[name=cc_' + $input.attr('name') + '_id]').val($input.val());
			} else {
				z.$el.find('*[name=cc_' + $input.attr('name') + ']').val($input.val());
			}
		});
	},
	lastSavedAddressState : null,
	addressChanged : function (noAnimation) {
		var z = this;
		z.$el.find("input[name=save_address]").val(1);
		if (noAnimation) {
			z.$el.find(".customer-address-saved").hide();
			z.$el.find(".customer-address-field-holder").show();
		} else {
			z.$el.find(".customer-address-saved").slideUp();
			z.$el.find(".customer-address-field-holder").slideDown();
		}
	},
	billingChanged : function (noAnimation) {
		var z = this;
		z.$el.find("input[name=save_billing_address]").val(1);
		if (noAnimation) {
			z.$el.find(".checkout-billing-info").hide();
			z.$el.find(".checkout-billing-form").show();
		} else {
			z.$el.find(".checkout-billing-info").slideUp();
			z.$el.find(".checkout-billing-form").slideDown();
		}
		
	},
	checkRecalculate : 0,
	mustRecalculate : function () {
		var z = this;
		z.$el.find("input[name=save_address]").val(1);
		z.$el.find(".mint-checkout-recalculate").show();
		z.$el.find(".mint-checkout-submit").hide();
		z.checkRecalculate = 1;
	},
	ccChanged : function () {
		var z = this;
		//console.log('cc changed');
		z.$el.find(".checkout-credit-description").hide();
		z.$el.find(".customer-credit-form-holder, .checkout-billing-form").find("input[class*=validate], select[class*=validate]").removeClass('mint-disable-validation');
		z.$el.find(".customer-credit-form-holder").show();
		z.$el.find('.checkout-credit-description').css({
			border : '0',
			padding : '0'
		});
		//z.$el.find('.checkout-billing-info').hide();
		
		z.$el.find("input[name=save_cc]").val(1);
	},
	ccUnChanged : function (cart) {
		var z = this;
		z.$el.find(".customer-credit-form-holder, .checkout-billing-form").hide().find("input[class*=validate], select[class*=validate]").addClass('mint-disable-validation').val('');
		if (cart.last_four_cc && cart.last_four_cc.length) {
			var el = z.$el.find(".checkout-credit-description");
			el.find("span").text(cart.last_four_cc);
			if (parseFloat(cart.total) !== 0.00) {
				el.show();
			}
		} else {
			//console.log('NOT updating last 4 cc!');
		}
		z.$el.find("input[name=save_cc]").val(0);
	},
	addressSaved : function (cart, closeForm) {
		
		if (!cart.address)
			return;
		
		this.checkRecalculate = 0;
		this.$el.find(".mint-checkout-recalculate").hide();
		this.$el.find(".mint-checkout-submit").show();
		
		var savedCont = this.$el.find(".customer-address-saved");
		
		savedCont.find(".address-name").text(cart.address.first_name + ' ' + cart.address.last_name);
		savedCont.find(".address-street").text(cart.address.street1 + ' ' + (cart.address.street2 ? cart.address.street2 : ''));
		savedCont.find(".address-city").text(cart.address.city + ', ' + cart.address.region + ' ' + cart.address.zip_code);
		
		this.$el.find("input[name=save_address]").val(0);
		
		if (closeForm) {
			this.$el.find(".customer-address-field-holder").hide();
			savedCont.show();
		}
		
		mint.event.trigger('checkoutAddressSaved', cart);
	},
	setLock : function () {
		this.$el.find("button").attr('disabled', true).addClass('mint-disabled');
	},
	removeLock : function () {
		this.$el.find("button").removeAttr('disabled').removeClass('mint-disabled');
	},
	updateTotals : function (cart) {
		//update total's fields
		//console.log(cart);
		var base = '.customer-credit-totals-';
		this.$el.find(base + "subtotal span").text(cart.subtotal_with_codeless_discount);
		
		var discount = this.$el.find(base + "discount span").text(cart.discount || '0.00');
		
		if (cart.discount && cart.discount != "0.00") {
			discount.parent().show();
		} else {
			discount.parent().hide();
		}
		
		var shipping = 'FREE';
		if ((+cart.shipping_total) > 0) {
			shipping = cart.shipping_total;
		}
		
		this.$el.find(base + "shipping span").text(shipping);
		
		if ((+cart.tax_total) > 0) {
			this.$el.find(base + "tax").show().find("span").text(cart.tax_total);
		} else {
			this.$el.find(base + "tax").hide();
		}
		
		if ((+cart.credits_used) > 0) {
			this.$el.find(base + "credits").show()
			.find(".mint-credits-used").text(cart.credits_used);
			this.$el.find(base + "credits .mint-balance-used").text('-' + this.formatPrice(cart.balance_used));
		} else {
			this.$el.find(base + "credits").hide();
		}
		
		this.$el.find(base + "total span").text(cart.total);
		
		this.$el.find(".customer-credit-charged span").text(cart.total);
		
		var haveProducts = true;
		
		if (!cart.products || cart.products.length === 0)
			haveProducts = false;
		
		if (parseFloat(cart.total) === 0 || !cart.total) {
			//console.log('no charge due to credits or something');
			this.$el.find(".customer-credit-charged").hide();
			this.$el.find(".checkout-credit-description").hide();
			this.$el.find(".checkout-toggle-payment").hide();
			this.$el.find(".checkout-credit-description").hide();
			this.$el.find(".customer-credit-not-charged").show();
			this.$el.find(".checkout-billing-info, .checkout-billing-form").hide();
			
			//make sure cc form is hidden
			this.ccUnChanged(cart);
		} else {
			this.$el.find(".customer-credit-not-charged").hide();
			this.$el.find(".customer-credit-charged").show();
			
			if (cart.valid_cc != '1' || (+this.$el.find("input[name=save_cc]").val()) !== 0) {
				//make sure cc form is showing if its invalid
				this.$el.find(".checkout-toggle-payment").hide();
				this.$el.find(".checkout-credit-description").hide();
				this.ccChanged();
			} else {
				this.$el.find(".checkout-credit-description").show();
				this.$el.find(".checkout-toggle-payment").show();
			}
			var address_errors = [];
			
			mint.form.validate(this.$el.find('.checkout-billing-form'), address_errors, true);
			if (address_errors.length) {
				this.billingChanged();
			} else {
				this.$el.find(".checkout-billing-info").show();
			}
		}
		
		mint.event.trigger('checkoutTotalsUpdated', cart);
		//i want this event to be last
		if (!haveProducts) {
			//allows mints to bind and redirect to the showroom
			mint.event.trigger('checkoutEmptyCart', cart);
			this.$el.find(".mint-checkout-submit").parents('.mint-checkout-button-bar').hide();
			this.$el.find(".mint-checkout-empty-cart").show();
			this.$el.find(".checkout-credit-coupon").hide();
		} else {
			this.$el.find(".mint-checkout-submit").parents('.mint-checkout-button-bar').show();
			this.$el.find(".mint-checkout-empty-cart").hide();
			this.$el.find(".checkout-credit-coupon").show();
		}
		
	},
	discountReset : function (cb) {
		var z = this;
		z.setLock();
		mint.msg.loading.show();
		mint.req.json(z.options.resetCouponUrl, function (data) {
			mint.msg.loading.hide();
			z.removeLock();
			z.updateTotals(data);
			mint.event.trigger('checkoutDiscountReset', data);
			if (cb)
				cb(data);
		});
	},
	processComplete : function (data) {
		var z = this;
		//data.error = {code: 4059}
		if (!data.error) {
			z._trackSale(data.tracking, function () {
				console.info('TRACK SALE COMPLETE');
				mint.event.trigger('checkoutComplete', data);
			});
			z.cartUpdated(function (data) {
				z.addressSaved(data, true);
				z.ccUnChanged(data);
				z.$el.find(".checkout-credit-coupon-input-holder input").val("");
				z.$el.find(".checkout-credit-coupon-last").removeClass('mint-valid').removeClass('mint-error').text('');
			});
			mint.session._obj.data = mint.session._obj.data || {};
			mint.session._obj.data.cart_quantity = 0;
			if (data.credits_left !== null) {
				mint.session._obj.data.credits = data.credits_left;
			}
			
		} else {
			z.$el.find(".customer-credit-form-holder, .checkout-billing-form").slideDown().find("input[class*=validate], select[class*=validate]").removeClass('mint-disable-validation');
			z.$el.find(".checkout-billing-info, .checkout-credit-description").slideUp();
			if (data.error.code == 4059) {
				mint.form.field.error.create($('input[name=cc-number]'), "Your credit card was declined. Please check your number.");
				$('input[name=cc-cardcode], select[name=cc-type], select[name=cc-expiration-month], select[name=cc-expiration-year]').addClass('has-errors').closest('li').addClass('error');
			}
		}
	},
	_trackSale : function (tracking, complete) {
		var storeInfo = mint.getStoreInfo(),
		storeUrl = '.' + storeInfo.url.toLowerCase(),
		cur;
		
		tracking.order[1] = storeInfo.name;
		tracking.order.splice(0, 0, '_addTrans');
		_jaq.push(tracking.order);
		$.each(tracking.items, function (idx, itemObj) {
			cur = [];
			$.each(itemObj, function (name, value) {
				cur.push(value);
			});
			cur.splice(0, 0, '_addItem');
			_jaq.push(cur);
		});
		_jaq.push(['_trackTrans']);
		mint.tracking.track(tracking.track, "_S", complete);
	},
	cartUpdated : function (cb) {
		var z = this,
		data,
		haveCart = 0;
		z.setLock();
		
		if (cb && !(cb instanceof Function)) {
			data = arguments[0];
			cb = arguments[arguments.length - 1];
			if (data.class_name == "app\\dto\\order\\Cart") {
				haveCart = 1;
			}
		}
		
		var afterCart = function (data) {
			z.removeLock();
			if (data.error) {
				mint.event.trigger('mint-server-error', data.error);
			} else {
				z.updateTotals(data);
				if (cb instanceof Function)
					cb(data);
			}
		};
		
		if (haveCart) {
			afterCart(data);
		} else {
			mint.req.json(z.options.getUrl, afterCart);
		}
	},
	discountUpdated : function (code, cb) {
		var z = this;
		z.setLock();
		mint.msg.loading.show();
		mint.req.json(z.options.couponUrl, {
			coupon_code : code
		}, function (data) {
			mint.msg.loading.hide();
			z.removeLock();
			
			//console.log('coupon code update response ',data);
			
			if (!data.coupon_code || data.discount == '0.00') {
				//failed to apply coupon code
				z.$el.find(".checkout-credit-coupon-last").removeClass('mint-valid').addClass('mint-error').text('Invalid Discount Code');
				mint.event.trigger('checkoutInvalidCoupon', data);
			} else {
				//z.$el.find(".checkout-credit-coupon-input-holder input").val("");
				z.$el.find(".checkout-credit-coupon-last").addClass('mint-valid').removeClass('mint-error').text('');
				z.updateTotals(data);
				mint.event.trigger('checkoutCoupon', data);
			}
			if (cb)
				cb(data);
		});
		
	},
	formatPrice : function (price) {
		price = +price;
		if (isNaN(price))
			return '0.00';
		if ((price + '').indexOf('.') === -1)
			return price + '.00';
		
		var parts = (price + '').split('.');
		parts[1] = parts[1].substr(0, 2);
		return parts.join('.');
	},
	// open privacy and terms links from checkout in a new tab/window
	externalLinks : function () {
		$(".place-order a").each(function () {
			$(this).attr({
				target : '_blank'
			});
		});
	}
});

mint.ui.register('checkout-cart', {
	options : {
		id : 0,
		imageSize : '70x132',
		url : 'http://www.jewelmint.com',
		getUrl : '${baseUrl}/${store}/checkout/cart/get',
		removeUrl : '${baseUrl}/${store}/checkout/cart/${id}/remove',
		updateUrl : '${baseUrl}/${store}/checkout/cart/${id}/update/${quantity}'
	},
	init : function () {
		var z = this;
		z.buildUi();
		
		mint.event.watch('checkoutComplete', function (data) {
			z.$el.find('.mint-cart-item').slideUp(function () {
				$(this).remove();
			});
		});
		
		mint.event.watch('cart-add', function (ev, data) {
			z.buildUi();
		});
	},
	buildUi : function (data) {
		var z = this,
		loading = mint.ui.factory('util-loading', z.$el),
		after = function (data) {
			
			var quantities = [];
			for (var i = 1; i <= 20; i++) {
				quantities.push(i);
			}
			
			loading.remove();
			
			$.each(data.products, function (i) {
				if (data.products[i].stock) {
					data.products[i].stock.quantity = parseInt(data.products[i].stock.quantity);
					if (data.products[i].stock.quantity < 20) {
						data.products[i].selectOptions = [];
						for (var j = 1; j <= data.products[i].stock.quantity; j++) {
							data.products[i].selectOptions.push(j);
						}
					} else {
						data.products[i].selectOptions = quantities;
					}
				} else {
					data.products[i].stock = {
						quantity : 0
					};
					data.products[i].selectOptions = quantities;
				}
				if (window.location.protocol == 'https:') {
					try {
						data.products[i].images['thumbnail'][0][z.options.imageSize] = data.products[i].images['thumbnail'][0][z.options.imageSize].replace('http:', 'https:');
					} catch (e) {
						//adding catch
						data.products[i].images['thumbnail'][0][z.options.imageSize] = '/misssingimage.jpg';
					}
				}
			});
			data.imageSize = z.options.imageSize;
			z.render(data);
			z.$el.find('a.mint-remove-item').click(function () {
				var item = $(this).parent(),
				product = item.attr('product');
				
				mint.msg.loading.show();
				mint.req.json(z.options.removeUrl.replace('${id}', product), function (data) {
					mint.msg.loading.hide();
					if (data.cart_quantity !== null) {
						mint.session._obj.data = mint.session._obj.data || {};
						mint.session._obj.data.cart_quantity = data.cart_quantity;
					}
					
					item.slideUp(function () {
						$(this).remove();
					});
					mint.event.trigger('cartUpdate', data);
				});
				return false;
			});
			
			z.$el.find('select').change(function () {
				var item = $(this).closest('li'),
				product = item.attr('product');
				mint.event.trigger("cartUpdateStarted");
				mint.req.json(z.options.updateUrl.replace('${id}', product).replace('${quantity}', $(this).val()), function (data) {
					console.log('cart change quantity data: ', data);
					if (data.cart_quantity) {
						mint.session._obj.data = mint.session._obj.data || {};
						mint.session._obj.data.cart_quantity = data.cart_quantity;
					}
					mint.event.trigger('cartUpdate', data);
				});
				return false;
			});
			
			mint.event.trigger('checkoutCartInitialized', data);
		};
		
		if (data && data.class_name == "app\\dto\\order\\Cart") {
			after(data);
		} else {
			var aidCookie = mint.cookie('aid');
			mint.req.json(this.options.getUrl, {
				aid : aidCookie
			}, function (data) {
				after(data);
				// if a dynamic offer is present, hide the [reset] link
				if (aidCookie) {
					$('.customer-credit-totals-discount-reset').hide();
				}
			});
		}
	}
	
});

mint.ui.register('checkout-giftcard', {
	options : {
		getUrl : '${baseUrl}/${store}/checkout/cart/get',
		submitUrl : '${baseUrl}/${store}/checkout/giftcard/submit',
		amounts : [{
				label : '1 Credit',
				value : '29.99',
				qty : 1
			}, {
				label : '2 Credits',
				value : '59.98',
				qty : 2
			}, {
				label : '3 Credits',
				value : '89.97',
				qty : 3
			}, {
				label : '6 Credit',
				value : '179.94',
				qty : 6
			}
		],
		valid_cc : 0,
		billing_address : {
			first_name : '',
			last_name : '',
			street1 : '',
			street2 : '',
			zip_code : '',
			city : '',
			region_id : '',
			phone : '',
			no_shipping : true
		}
	},
	init : function () {
		var z = this;
		z.options.submitUrl = $.tmpl(z.options.submitUrl, mint.config()).text();
		
		var n = new Date();
		
		z.options.year = n.getFullYear();
		
		mint.session.get(function (session) {
			if (session.logged_in) {
				mint.req.json(z.options.getUrl, function (data) {
					$.extend(z.options.billing_address, data.billing_address);
					z.options.valid_cc = data.valid_cc;
					z.options.last_four_cc = data.last_four_cc;
					z.render.call(z);
					z.setup.call(z);
				});
			} else {
				z.render.call(z);
				z.setup.call(z);
			}
		});
		
		$('.reset-giftcard').live('click', function () {
			z.render.call(z);
			z.setup.call(z);
			return false;
		});
	},
	setup : function () {
		var z = this;
		
		mint.form.bind($("#gift-card-form"), function (data) {
			console.log(data);
			if (data.error) {
				// Do error handling
				if (data.error.code == 4061 || data.error.code == 4059) {
					$("#step-2-details").removeClass('saved-creditcard');
					$("#step-2-form").slideDown();
					$("#step-2-details").slideUp();
					$("#step-3-form").slideDown();
					$("#step-3-details").slideUp();
					$("#last-step-notification").hide();
					z.showCCValidation.call(z);
					mint.form.field.error.create($('input[name=cc-number]'), "Your credit card was declined. Please check your number.");
					$('input[name=cc-cardcode], select[name=cc-type], select[name=cc-expiration-month], select[name=cc-expiration-year]').addClass('has-errors').closest('li').addClass('error');
					
				}
			} else {
				z.$el.find('.giftcard-form').slideUp();
				z.$el.find('.giftcard-thankyou').slideDown();
				z.$el.find('#giftcard-code').html("<div data-stest='giftcard-return-code'>" + data.code + "</div><div data-stest='giftcard-return-total'>" + data.total + "</div>");
			}
		}, function () {
			$("input[name=use_saved_cc]").val($("#step-2-details").hasClass('saved-creditcard') ? 1 : 0);
		});
		
		$(".datepicker").datepicker({
			minDate : 0
		}).click(function () {
			$(this).parent().find("input[type=radio]").attr("checked", "true")
		}).parent().find("input[type=radio], img").click(function () {
			$(this).parent().find(".datepicker").focus().end().find('img').click(function () {
				$(this).parent().find("input[type=radio]").attr("checked", "true");
				return false;
			});
		});
		$('.picker-holder img').click(function () {
			$(this).parent().find("input[type=radio]").attr("checked", "true");
		});
		
		z.showStep();
		
		$('#step-1-details a').click(function () {
			z.showCCValidation.call(z);
			var a = $(this);
			$("#step-" + a.attr('step') + "-form").slideDown();
			$("#step-" + a.attr('step') + "-details").slideUp();
			$("#last-step-notification").hide();
			return false;
		});
		
		$('#step-2-details a').click(function () {
			z.showCCValidation.call(z);
			var a = $(this);
			$("#step-2-details").removeClass('saved-creditcard');
			$("#step-" + a.attr('step') + "-form").slideDown();
			$("#step-" + a.attr('step') + "-details").slideUp();
			$("#last-step-notification").hide();
			return false;
		});
		
		$('#step-3-details a').click(function () {
			z.showCCValidation.call(z);
			var a = $(this);
			$("#step-" + a.attr('step') + "-form").slideDown();
			$("#step-" + a.attr('step') + "-details").slideUp();
			$("#last-step-notification").hide();
			return false;
		});
		
		z.$el.find(".giftcard-continue").click(function () {
			var errors = false;
			
			if ($("#step-1-form").css("display") != "none") {
				var giftcard_errors = [];
				mint.form.validate($('#step-1-form'), giftcard_errors, false);
				errors = giftcard_errors.length ? true : false;
			}
			
			if (!errors && $("#step-2-form").css("display") != "none") {
				var payment_errors = [];
				mint.form.validate($('#step-2-form'), payment_errors, false);
				errors = payment_errors.length ? true : false;
			}
			
			if (!errors && $("#step-3-form").css("display") != "none") {
				var address_errors = [];
				mint.form.validate($('#step-3-form'), address_errors, false);
				errors = address_errors.length ? true : false;
			}
			
			if (errors) {
				return false;
			}
			
			var step = z.getStep.call(z);
			
			if ($("#step-1-form").css("display") == "none" && $("#step-2-form").css("display") == "none" && $("#step-3-form").css("display") == "none") {
				z.noCCValidation.call(z);
				$("#gift-card-form").submit();
			} else {
				z.showStep.call(z, step);
			}
			return false;
		});
	},
	
	showStep : function (step) {
		var z = this;
		step = step || z.getStep();
		$("#last-step-notification").hide();
		
		switch (parseInt(step)) {
		case 1:
			$("#step-1-form").slideDown();
			break;
		case 2:
			z.renderStep1Details.call(z);
			$("#step-1-form").slideUp();
			$("#step-1-details").css('height', 'auto');
			$("#step-1-details").slideDown();
			$("#step-2-form").slideDown();
			break;
		case 3:
			if ($("#step-1-form").css("display") != "none") {
				z.renderStep1Details.call(z);
				$("#step-1-form").slideUp();
				$("#step-1-details").css('height', 'auto');
				$("#step-1-details").slideDown();
			}
			if ($("#step-2-form").css("display") != "none") {
				z.renderStep2Details();
				$("#step-2-form").slideUp();
				$("#step-2-details").css('height', 'auto');
				$("#step-2-details").slideDown(function () {
					$("#step-2-details").height('auto');
				});
			} else if ($("#step-2-details").hasClass('saved-creditcard')) {
				$("#step-2-details").slideDown();
			}
			$("#step-3-form").slideDown();
			break;
		case 4:
			
			$("#last-step-notification").show();
			if ($("#step-1-form").css("display") != "none") {
				z.renderStep1Details.call(z);
				$("#step-1-form").slideUp();
				$("#step-1-details").css('height', 'auto');
				$("#step-1-details").slideDown();
			}
			if ($("#step-2-form").css("display") != "none") {
				z.renderStep2Details();
				$("#step-2-form").slideUp();
				$("#step-2-details").css('height', 'auto');
				$("#step-2-details").slideDown(function () {
					$("#step-2-details").height('auto');
				});
			}
			if ($("#step-2-form").css("display") != "none") {
				z.renderStep2Details();
				$("#step-2-form").slideUp();
				$("#step-2-details").css('height', 'auto');
				$("#step-2-details").slideDown(function () {
					$("#step-2-details").height('auto');
				});
			} else if ($("#step-2-details").hasClass('saved-creditcard')) {
				$("#step-2-details").slideDown(function () {
					$("#step-2-details").height('auto');
				});
			}
			if ($("#step-3-form").css("display") != "none") {
				z.renderStep3Details();
				$("#step-3-form").slideUp();
				$("#step-3-details").css('height', 'auto');
				$("#step-3-details").slideDown(function () {
					$("#step-3-details").height('auto');
				});
			} else if ($("#step-2-details").hasClass('saved-creditcard')) {
				$("#step-3-details").slideDown();
			}
			$("#step-4-form").slideDown();
			break;
		}
	},
	
	getStep : function () {
		var step = 4;
		$("#gift-card-form input[type=text]").each(function () {
			var val = $(this).val();
			if (val == "" && $(this).attr('name') != 'cc_street2') {
				var step_id = $(this).closest(".form-step").attr('id').split("-");
				step = step_id[1];
				return false;
			}
		});
		if (step == 2 && $("#step-2-details").hasClass('saved-creditcard')) {
			step = 3;
		}
		if (step == 3) {
			var address_errors = [];
			mint.form.validate($('#step-3-form'), address_errors, true);
			if (address_errors.length == 0) {
				step = 4;
			}
		}
		return step;
	},
	
	noCCValidation : function () {
		$('#step-2-form input, #step-2-form select').each(function () {
			var $el = $(this);
			$el.attr('validation', $(this).attr('class')).attr('class', '');
		});
	},
	
	showCCValidation : function () {
		$('#step-2-form input, #step-2-form select').each(function () {
			var $el = $(this);
			$el.attr('class', $(this).attr('validation'));
		});
	},
	
	renderStep1Details : function () {
		var str = "<li class='clearfix'><label>Gift Amount Selected</label><p>" + $(".gift-amount input:checked").parent().clone().find("input").remove().end().html().replace(/&nbsp;&nbsp;/g, "") + "</p></li>";
		$("#step-1-form .form-list li").each(function () {
			var li = $(this);
			if (li.hasClass("gift-message-li")) {
				if (li.find("textarea").val())
					str += "<li class='clearfix'><label>" + li.find('label').text() + "</label><p>" + li.find("textarea").val() + "</p></li>";
			} else {
				str += "<li class='clearfix'><label>" + li.find('label').text() + "</label><p>" + li.find("input").val() + "</p></li>";
			}
		});
		$("#step-1-details ol").html(str);
	},
	
	renderStep2Details : function () {
		if ($("#step-2-details").hasClass('saved-creditcard')) {
			return;
		}
		var str = "";
		$("#step-2-form .form-list li").each(function () {
			var li = $(this);
			var val = '';
			var $input = li.find("input");
			if ($input.length) {
				val = $input.val();
			} else {
				li.find("select").each(function () {
					var arr = $(this).find('option[value=' + $(this).val() + ']').text().split(' ');
					val += arr[0] + " "
				});
			}
			if ($input.length && $input.attr('id') == 'cc-number') {
				val = 'XXXX XXXX XXXX ' + (val.substring(val.length - 4));
			}
			
			if ($input.length && $input.attr('id') == 'cc-cardcode') {
				val = 'XXX';
			}
			
			str += "<li class='clearfix'><label>" + li.find('label').text() + "</label><p>" + val + "</p></li>";
		});
		$("#step-2-details ol").html(str);
	},
	renderStep3Details : function () {
		var z = this;
		z.$el.find('.billing-address-name').text(z.$el.find('input[name=cc_first_name]').val() + ' ' + z.$el.find('input[name=cc_last_name]').val());
		z.$el.find('.billing-address-street').text(z.$el.find('input[name=cc_street1]').val() + ' ' + z.$el.find('input[name=cc_street2]').val());
		z.$el.find('.billing-address-city').text(z.$el.find('input[name=cc_city]').val() + ', ' + z.$el.find('select[name=cc_region_id] option:selected').text() + ' ' + z.$el.find('input[name=cc_zip_code]').val());
	}
});

mint.ui.register('order-last', {
	options : {
		getUrl : "${baseUrl}/${store}/order/last"
	},
	init : function () {
		var z = this;
		
		mint.req.json(this.options.getUrl, function (data) {
			data.store_url = mint.getStoreInfo().url;
			z.render(data);
			
			mint.event.trigger('orderLastInitialized', data);
		});
	}
	
});

mint.css.render("div, span, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n{\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n.clearfix:after {\n\tvisibility: hidden;\n\tdisplay: block;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n}\n* html .clearfix             { zoom: 1; } \/* IE6 *\/\n*:first-child+html .clearfix { zoom: 1; } \/* IE7 *\/\n\n#notification_holder .notification h3, #notification_holder .notification p{padding: 0; margin:0;} \n\n#notification_holder .notification {\n\tpadding: 20px;\n\tbackground: #fff;\n\tborder-bottom: 1px solid #aaa;\n}\n\n#notification_holder .error {\n\tbackground: #fdd;\n}\n\n.mint-field-text {\n\tline-height: 22px;\n}\n\n.mint-hidden{\n\tdisplay:none;\n}\n\n.checkout-credit-coupon-input-holder div {\n\tfloat:left;\n\tcolor:#FF0000;\n}\n\n.invites .status {\n\ttext-align:right;\n}\n\n.no-orders {\n\tpadding: 20px 0;\n}\/* Overlay *\/\n#mint-overlay {background-color:#000;}\n\n\/* Container *\/\n.simplemodal-container {background-color:#fff; color:#000; padding-bottom:4px; width:656px; -moz-border-radius:10px; -webkit-border-radius:10px;border-radius:10px;}\n.simplemodal-container .mint-modal-title {\n\tcolor:#000;\n\tfont-family: \"Oswald\", \"Georgia\";\n\tfont-size: 18px;\n\tfont-weight: normal;\n\ttext-transform: uppercase;\n\tpadding:14px 24px 10px;\n}\n.simplemodal-container .close {position:absolute; right:0; top:0;}\n.simplemodal-container .close a {\n\tdisplay:block;\n\tcolor:#1875BD;\n\tfont-weight:bold;\n\tpadding:14px 14px 0;\n\ttext-decoration:none;\n\tfont-family: \"Oswald\", \"Georgia\";\n\tfont-size: 18px;\n\tfont-weight: normal;\n\ttext-transform: uppercase;\n}\n.simplemodal-container .close a:hover {color:#000;}\n.simplemodal-container .mint-modal-data {padding:0 24px 24px;}\n.simplemodal-container span {color:#777;}\n\n#mint-loading-full\n{\n\tdisplay: none;\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0px; left: 0px;\n}\n#mint-loading-full .mint-overlay\n{\n\twidth: 100%; height: 100%;\n\tposition: absolute;\n\tz-index: 100000;\n\ttop: 0px; left: 0px;\n}\n#mint-loading-full .mint-loading-container\n{\n\tposition: absolute;\n\twidth: 40px;\n\tleft: 50%;\n\ttop: 50%;\n\tz-index: 100005;\n}\n#mint-loading-full .mint-loading\n{\n\t-moz-box-shadow       : rgba(0, 0, 0, 0.25) 0 0 5px;\n\t-webkit-box-shadow    : rgba(0, 0, 0, 0.25) 0 0 5px;\n\tbox-shadow            : rgba(0, 0, 0, 0.25) 0 0 5px;\n\tposition: relative;\n\ttop: -20px;\n\tleft: -20px;\n\tz-index: 100010;\n\twidth: 40px;\n\theight: 40px;\n\tpadding: 0px;\n\t-webkit-border-radius: 5px;\n\t-moz-border-radius: 5px;\n\tborder-radius: 5px;\n\tfilter: Alpha(Opacity=40); -moz-opacity:0.9; opacity: 0.9;\n}\n\n.showme-images li li{\n\tfloat:left;\n\twidth: 144px;\n\tmargin-left: 10px;\n\tcursor:pointer;\n}\n\n.showme-images li li.first {\n\tmargin-left:0;\n}\n\n\n.showme-images li li .frame{\n\twidth: 128px;\n\theight: 160px;\n  overflow: hidden;\n  position: relative;\n}\n\n.showme-images li li.selected .frame .label {\n    display: block;\n}\n\n.showme-images li li .frame .label {\n    background: none repeat scroll 0 0 #000000;\n    bottom: 10px;\n    color: #B5D7D6;\n    display: none;\n    float: left;\n    font-size: 10px;\n    font-weight: normal;\n    left: 3px;\n    line-height: 14px;\n    padding: 8px 16px;\n    position: absolute;\n}\n\n.showme-images li li.selected .frame .border, .showme-images li li.hover .frame .border {\n    display: block;\n}\n.showme-images li li .frame .border {\n    border: 3px solid #000000;\n    display: none;\n    height: 154px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 122px;\n}\n\n.showme-images li li .framelabel {\n    color: #25B9B9;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 4px 0 0;\n    text-align: center;\n}\n\n.showmore-arrow {\n\tposition: absolute;\n\ttop: 154px;\n\tz-index: 99999;\n}\n\n.showmore-prev-arrow {\n\tleft:0;\n}\n\n.showmore-next-arrow {\n\tright:0;\n}\n\n#jbox {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tborder: 3px solid #b5d7d6;\n\tbackground: #f4f4f4;\n\tz-index: 1000;\n}.mint-customer-bar .mint-customer-bar-item {\n\tfloat:left;\n\tmargin-left: 10px;\n}\n\n.mint-settings-tabs {\n\tfont-size:11px;\n}\n\n.mint-settings-tabs li {\n\tfloat:left;\n\tmargin:0 5px 10px 0;\n}\n\n.mint-settings-tabs li a {\n\tpadding: 5px 10px;\n\tbackground: #eee;\n\ttext-decoration:none;\n\tcolor: #333;\n}\n.mint-settings-tabs li a:hover {text-decoration:none;}\n.mint-settings-tabs li a.selected {background:#c8e7ff;}\n\n.order-item .order-information {\n\tfloat:left;\n}\n\n.order-item ul {\n\tfloat:left;\n} \n\n.order-item li {\n\tfloat:left;\n\tpadding-left: 20px;\n}\n\n.sister-sites li {\n\tfloat:left;\n\tpadding-right:10px;\n}\n\n.hover .case-fav {\n\tdisplay:block !important;\n}\n\n.case {\n\tcursor: pointer;\n}.mint-customer-quiz {\n\t\/*border: 14px solid #323233;*\/\n}\n\n.mint .mint-quiz-status {\n\tmargin: 0 auto;\n\twidth:300px;\n\tborder:1px solid #666;\n}\n.mint-quiz-status-inner {\n\tbackground:#000;\n\tmargin:1px;\n\theight:24px;\n\tposition:relative;\n}\n\n.mint-quiz-status-bar {\n\tbackground:#555;\n\theight:24px;\n\toverflow:hidden;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:100;\n}\n.mint-quiz-status-bar\t.mint-quiz-status-text {\n\tcolor:#ccc\n}\n.mint-quiz-status-text {\n\tcolor:#666;\n\tfont-size:11px;\n\tfont-weight:bold;\n\ttext-align:center;\n\tposition:relative;\n\ttop:6px;\n\theight:24px;\n\twidth:298px;\n}\n\n.mint .mint-quiz-nav {\n\tposition:relative;\n\tmargin: 0 24px 12px;\n}\n\n.mint-quiz-nav a {\n\tposition:absolute;\n\ttop: 0;\n}\n\n.mint-quiz-nav a.mint-quiz-prev {\n\tleft: 0;\n}\n\n.mint-quiz-nav a.mint-quiz-next {\n\tright: 0;\n}\n\n.mint .mint-quiz-questions {\n\tmargin: 0 0 20px;\n}\n\n.mint .mint-quiz-question {\n\tpadding: 10px 0;\n\tmargin-top:5px;\n}\n\n.mint .mint-quiz-question-text {\n\tfont-size: 18px;\n\tfont-weight:bold;\n}\n\n.mint .mint-quiz-answer-holder {\n\tfloat: left;\n\tmargin: 12px 12px 0 0;\n}\n\n.mint .mint-last-answer {\n\tmargin-right:0 !important;\n}\n\n.mint .mint-quiz-answer {\n\ttext-align:center;\n\tline-height: 26px;\n\tdisplay:block;\n}\n\n.mint .mint-quiz-answer img {\n\tdisplay:block;\n\tborder: 4px solid #fff;\n}\n\n.mint .mint-quiz-answer:hover img,  .mint .mint-quiz-question .mint-selected img{\n\tdisplay:block;\n\tborder: 4px solid #999;\n}\n\n.mint .mint-quiz-answer-textonly {\n\tbackground: #f8f8f8;\n\tcolor:#555;\n  border: 4px solid #DDDDDD;\n  display: block;\n  float: left;\n  margin-top: 2px;\n  padding: 6px 0 5px;\n  text-decoration: none;\n  width: 296px;\n}\n\n.mint .mint-quiz-answers-count-5 .mint-quiz-answer-textonly {\n\twidth: 168px;\n}\n\n.mint .mint-quiz-answer-textonly:hover, .mint .mint-quiz-answer-textonly.mint-selected {\n\tborder: 4px solid #999;\n}\n\n.mint .mint-quiz-questions .mint-error {\n\tbackground: #fdd;\n}\/* waitlist base styles *\/\n.waitlist-me .attr-size-value a.inactive.selected {\n    border: 2px solid #f75dbf !important;\n    cursor: pointer;\n    opacity: 1.0;\n}\n\n.waitlist-me .product-add {\n    cursor: default;\n}\n\n.waitlist-me .mint-loading-placeholder {\n    background-color: transparent !important;\n    cursor: default;\n    display: block;\n    font-family: Arial !important;\n    font-size: 11px !important;\n    font-style: normal !important;\n    margin-bottom: 10px;\n    padding: 0 !important;\n    text-transform: none;\n    width: 228px;\n}\n\n.waitlist-me a.mint-add-product {\n    display: none;\n}\n\na.mint-add-waitlist {\n    display: none;\n}\n\n.waitlist-me a.mint-add-waitlist {\n    color: #000;\n    cursor: pointer;\n}\n\n.waitlist-me .waitlist-btn-showhide {\n    display: inline-block;\n}\n.product {\n\tdisplay:block;\n}\n\n.attr-color-value a {\n\tdisplay:block;\n\twidth: 16px;\n\theight: 16px;\n\ttext-decoration:none;\n\toverflow:hidden;\n}\n\n.cloud-zoom-lens {\n\tborder: 4px solid #888;\n\tmargin: -4px;\n\tbackground-color: #fff;\n\tcursor: move;\n}\n.product-image #wrap {\n\tz-index: 999 !important;\n}\n.cloud-zoom-title {\n\tposition: absolute !important;\n\tbackground-color: #000;\n\tcolor: #fff;\n\tpadding: 3px;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-weight: bold;\n\tfont-size: 10px;\n\ttop: 0px;\n}\n.cloud-zoom-big {\n\toverflow: hidden;\n}\n.cloud-zoom-loading {\n\tcolor: #fff;\n\tbackground: #222;\n\tpadding: 3px;\n\tborder: 1px solid #000;\n}\n\n.video .video-still {\n\theight:140px;\n\twidth: 250px;\n\tbackground: #000;\n}\n\n.video .video-still div {\n\theight:140px;\n\twidth: 250px;\n\tcursor: pointer;\n}\n\n.video .video-chrome {\n\tposition:fixed;\n\ttop: -5000px;\n\tleft: -5000px;\n}\n\n.video .video-chrome .modal-close {\n  cursor: pointer;\n  display: inline;\n  height: 29px;\n  position: absolute;\n  right: -16px;\n  top: -15px;\n  width: 25px;\n}\n\n.tel-required {\n\tfont-size:10px;\n\tcolor:#666666;\n\tdisplay:block;\n\tmargin:5px 0 0;\n}\n\n.street2 {\n\tmargin: 5px 0 0;\n}");

mint.tmpl = {
	"auth" : {
		"login" : "<h2>Login with Facebook:<\/h2>\n\n<div class=\"mint-facebook-connect-holder\">\n\t<a href=\"#\" class=\"mint-facebook-connect\" data-stest='mint-facebook-connect'>Login<\/a>\n<\/div>\n\n<h2>Or use your ${mint.getStoreInfo().name} account below:<\/h2>\n\n<form method=\"post\" action=\"${action}\" data-stest=\"login-form\">\n  <ol>\n     <li>\n\t\t\t{{tmpl({type:'text', name:'email', label: 'Email', value:'', validation: ['required', 'email']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t{{tmpl({type:'password', name:'password', label: 'Password', value:'', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t<label>{{tmpl({type:'checkbox', name:'remember', text: 'Remember me', value:''}) mint.tmpl.partials.form.fields.input}}<\/label>\n\t\t<\/li>\n  <\/ol>\n\t<div class='mint-auth-footer clearfix'>\n\t\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n\t\t<div class=\"mint-forgot-password-holder\">\n\t\t\t<a href=\"#\" class=\"mint-forgot-password\" data-stest=\"mint-forgot-password\">${forgotText}<\/a>\n\t\t<\/div>\n\t<\/div>\n<\/form>",
		"logout" : "<a href=\"\/logout\">${text}<\/a>",
		"linkaccount" : "<div class=\"mint mint-account-modal\">\n\t{{if alreadyRegistered}}\n\t\t<h2>You have already registered for ${mint.getStoreInfo().name}. Please login below:<\/h2>\n\t{{else}}\n\t<h2>We noticed you have an account on our sister site{{if stores.length > 1}}s{{\/if}}:<\/h2>\n\t<ul class='sister-sites clearfix'>\n\t\t{{each(i, store) stores}}\n\t\t<li>{{if window.stores[store.id]}}${window.stores[store.id].name}{{else}}${store.name}{{\/if}}<\/li>\n\t\t{{\/each}}\n\t<\/ul>\n\t<h2>Link with your existing Facebook login:<\/h2>\n\t{{\/if}}\n\t<div class=\"mint-facebook-connect-holder\">\n\t\t<a href=\"http:\/\/www.facebook.com\" class=\"mint-facebook-connect\">Login<\/a>\n\t<\/div>\n\t\n\t<h2>Or link ${mint.getStoreInfo().name} with your other mint account:<\/h2>\n\t\n\t<form method=\"post\" action=\"${passwordCheckUrl}\" data-stest=\"password-confirm-form\">\n\t  <ol>\n\t     <li>\n\t\t\t\t{{tmpl({type:'text', name:'email_disabled', label: 'Email', value:email, disabled: true}) mint.tmpl.partials.form.item}}\n\t\t\t\t{{tmpl({type:'hidden', name:'email', value:email}) mint.tmpl.partials.form.item}}\n\t\t\t<\/li>\n\t\t\t<li>\n\t\t\t\t{{tmpl({type:'password', name:'password', label: 'Password', value:'', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t\t<\/li>\n\t  <\/ol>\n\t\t<div class='mint-auth-footer clearfix'>\n\t\t\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n\t\t\t<div class=\"mint-forgot-password-holder\">\n\t\t\t\t<a href=\"#\" class=\"mint-forgot-password\" data-stest=\"mint-forgot-password\">${forgotText}<\/a>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/form>\n<\/div>\n",
		"forgotpassword" : "<div class=\"mint\">\n\t<form id=\"forgot-password-form\" method=\"post\" action=\"${action}\" data-stest=\"forgot-form\" class=\"mint-submit-block\">\n\t  <ol>\n\t     <li>\n\t\t\t\t{{tmpl({type:'text', name:'email', label: 'Email', value:'', validation: ['required', 'email']}) mint.tmpl.partials.form.item}}\n\t\t\t<\/li>\n\t  <\/ol>\n\t\t<div class='clearfix'>\n\t\t\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n\t\t<\/div>\n\t<\/form>\n<\/div>",
		"register" : "<h2>Use your Facebook Account to Register:<\/h2>\n\n<div class=\"mint-facebook-connect-holder\">\n\t<a href=\"#\" class=\"mint-facebook-connect\" data-stest='mint-facebook-connect'>Login<\/a>\n<\/div>\n\n<h2>\n\t<span style=\"font-size:16px;\">OR<\/span>\n\t<br><br>Register through ${mint.getStoreInfo().name} below:\n<\/h2>\n\n<form method=\"post\" action=\"${action}\" data-stest=\"register-form\">\n  <ol>\n     <li>\n\t\t\t{{tmpl({type:'text', name:'firstname', label: 'First Name', value:'', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t{{tmpl({type:'text', name:'lastname', label: 'Last Name', value:'', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n    <li>\n\t\t\t{{tmpl({type:'text', name:'email', label: 'Email', value:'', validation: ['required', 'email']}) mint.tmpl.partials.form.item}}\n    <\/li>\n    <li>\n\t\t\t{{tmpl({type:'password', name:'password', label: 'Password', value:'', validation: ['required', 'password']}) mint.tmpl.partials.form.item}}\n    <\/li>\n  <\/ol>\n<!--\n\t<p class=\"disclaimer\">{{html disclaimer}}<\/p>\n-->\n\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n<\/form>"
	},
	"giftcard" : {
		"redeem_modal" : "<div class=\"form\">\n\t\t<form id='redeem-form' action=\"${redeemUrl}\">\n\t\t\t<ol>\n\t\t     <li>\n\t\t\t\t\t{{tmpl({type:'text', name:'giftcard', label: 'Gift Card Number', value:'', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t\t\t<\/li>\n\t\t  <\/ol>\n\t\t\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n\t<\/form>\n<\/div>",
		"redeem" : "${startText} <a href=\"#\">${linkText}<\/a>"
	},
	"social" : {
		"personal_url" : "{{if url}}<a href=\"${url}\" target=\"_parent\">${url}<\/a>{{\/if}}",
		"invite_twitter" : "<input class=\"share-on-twitter\" type=\"button\" title='Invite your friends to ${name}' data-tweet-title=\"Checkout ${name}, I love them and I think you will too\" value=\"Twitter\" disabled=\"disabled\" \/>\n\n<!--\n    <a class=\"share-on-twitter\" title='Checkout StyleMint, I love their T-Shirts and I think you will too!  __URL__' href=\"\">Twitter<\/a>\n-->\n",
		"invite_facebook" : "<input type=\"button\" class=\"share-on-facebook\" title='Invite your friends to ${name}' value=\"Facebook\" disabled=\"disabled\"\/>\n",
		"email_importer" : "\n<h2>Invite Friends Through Email<\/h2>\n<p>Click the logos to search your email address book:<\/p>\n\n<form method=\"post\" action=\"${mint.config('baseUrl')}\/${mint.config('store')}\/customer\/invite\" data-stest=\"invite-friends\">\n    <a id=\"pull-email\" class=\"invite-modal cs_import\" href=\"#modal-switch\"><\/a>\n    <ol class=\"form-list\">\n        <li class=\"email-list\">\n            {{tmpl({type:'textarea', id:'invite-emails', name:'invite-emails', label:'Or, type your friend\\'s email addresses below', value:'', validation: ['required', 'emails']}) mint.tmpl.partials.form.item}}\n            <small>*Separate email addresses with a comma (e.g. abc@gmail.com, def@hotmail.com)<\/small>\n        <\/li>\n        <li>\n            {{tmpl({type:'textarea', id:'message', name:'message', label:'Add a personal message: (optional)', value:''}) mint.tmpl.partials.form.item}}\n        <\/li>\n    <\/ol>\n    {{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n<\/form>\n",
		"invites_status" : "<table class='invites'>\n{{each(i, invite) invites}}\n\t<tr>\n\t\t<td>${invite.to_email}<\/td>\n\t\t<td class='when'>${invite.referral_date}<\/td>\n\t\t<td class='status'>${invite.status}<\/td>\n\t<\/tr>\n{{\/each}}\n<\/ul>",
		"invites_sent" : "<div class='invite-success'>\n\t<p>Come back soon to check on your invitation status.<\/p>\n<\/div>",
		"check_status" : "Already invited friends? <a class=\"check-status\" href=\"#modal-switch\"><strong>Check status here<\/strong><\/a>"
	},
	"customer" : {
		"quiz" : "<ol class=\"mint-quiz-pages\">\n\t{{each(i, page) quiz.pages}}\n\t\t<li class=\"mint-quiz-page mint-quiz-page-${i}\" data-stest='mint-quiz-page-${i}'>\n\t\t\t\n\t\t\t{{tmpl({page:page, questions: qs, baseUrl: baseUrl, question_prefix: question_prefix, image_dir: image_dir}) mint.tmpl.customer.quiz_page}}\n\t\t<\/li>\n\t{{\/each}}\n<\/ol>\n<div class=\"mint-quiz-nav clearfix\">\n\t<div class=\"mint-quiz-status\">\n\t\t<div class=\"mint-quiz-status-inner\">\n\t\t\t<div class=\"mint-quiz-status-bar\">\n\t\t\t\t<div class=\"mint-quiz-status-text\">Loading...<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"mint-quiz-status-text mint-quiz-status-text-back\">Loading...<\/div>\n\t\t<\/div>\n\t<\/div>\n\t{{if !hidePrev}}\n\t<a href=\"#\" class=\"mint-quiz-prev\" data-stest=\"mint-quiz-prev\">Back<\/a>\n\t{{\/if}}\n\t{{if !hideNext}}\n\t<a href=\"#\" class=\"mint-quiz-next\" data-stest=\"mint-quiz-next\">Continue<\/a>\n\t{{\/if}}\n<\/div>",
		"credit_card" : "\t<ol class=\"checkout-credit-description\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Payment Information <a class=\"checkout-toggle-payment\" href=\"javascript:\/\/\" data-stest='customer-toggle-payment'>Edit<\/a><\/h2>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-saved-number\">Credit Card # Ending With: <span>${last_four_cc}<\/span><\/li>\n\t<\/ol>\n\t<ol class=\"customer-credit-form-holder\" data-stest=\"customer-credit-form-holder\" style=\"{{if valid_cc!=0}}display:none{{\/if}}\">\n\t\t<li>\n\t\t\t{{tmpl({type:'select', name:'cc-type', label: 'Card Type', value:'VI', options: {AE: 'American Express', VI: 'Visa', MC: 'MasterCard',DI:'Discover'} }) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t{{tmpl({type:'text', name:'cc-number', label: 'Card Number', value:'', maxlength: '16', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t<select name=\"cc-expiration-month\" data-stest=\"cc-expiration-month\" class=\"validation[required]\" value='1'>\n\t\t\t\t<option value=\"1\">January (1)<\/option>\n\t\t\t\t<option value=\"2\">February (2)<\/option>\n\t\t\t\t<option value=\"3\">March (3)<\/option>\n\t\t\t\t<option value=\"4\">April (4)<\/option>\n\t\t\t\t<option value=\"5\">May (5)<\/option>\n\t\t\t\t<option value=\"6\">June (6)<\/option>\n\t\t\t\t<option value=\"7\">July (7)<\/option>\n\t\t\t\t<option value=\"8\">August (8)<\/option>\n\t\t\t\t<option value=\"9\">September (9)<\/option>\n\t\t\t\t<option value=\"10\">October (10)<\/option>\n\t\t\t\t<option value=\"11\">November (11)<\/option>\n\t\t\t\t<option value=\"12\">December (12)<\/option>\n\t\t\t<\/select>\n\t\t\t<select name=\"cc-expiration-year\"  data-stest=\"cc-expiration-year\" class=\"validation[required]\">\n                <option value=\"11\">2011<\/option>\n                <option value=\"12\">2012<\/option>\n                <option value=\"13\">2013<\/option>\n                <option value=\"14\">2014<\/option>\n                <option value=\"15\">2015<\/option>\n                <option value=\"16\">2016<\/option>\n                <option value=\"17\">2017<\/option>\n                <option value=\"18\">2018<\/option>\n                <option value=\"19\">2019<\/option>\n                <option value=\"20\">2020<\/option>\n\t\t\t<\/select>\n\t\t<\/li>\n\t\t<li class=\"short\">\n\t\t\t{{tmpl({type:'text', name:'cc-cardcode', label: 'CVV Security Code', value:'', maxlength: '4', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t<\/ol>\n",
		"quiz_page" : "<ol class=\"mint-quiz-questions\">\n\t{{if page.tip}}\n\t\t<a class='tip-link' href='#'>TIPS ON ANSWERING THIS QUESTION<\/a>\n\t\t<div class='tip' style='display:none;'>\n\t\t\t<a href=\"#\" class='close'>X<\/a>\n\t\t\t<div>${page.tip}<\/div>\n\t\t<\/div>\n\t{{\/if}}\n\t{{each(i, question) page.questions}}\n\t\t<li class=\"mint-quiz-question mint-quiz-question-${i}\" data-stest='mint-quiz-question-${i}'>\n\t\t\t{{tmpl({question: questions[question], question_id: questions[question].id, keyorid: question, baseUrl: baseUrl, question_prefix: question_prefix, image_dir: image_dir, slider: page.slider}) mint.tmpl.customer.quiz_question}}\n\t\t<\/li>\n\t{{\/each}}\n<\/ol>",
		"bar" : "<ul class='clearfix mint-customer-bar mint-customer-bar{{if session.logged_in}}in{{else}}out{{\/if}}' data-stest=\"customer-bar\">\n\t{{each(i, navItem) nav}}\n\t\t{{if navItem}}\n\t\t\t{{if type!='skip' || ( mint.session._obj.data.skip_monthly == false && (mint.session._obj.data.skip_available || window.location.hash == \"#show-skip\") && parseInt(mint.session._obj.data.status) == 4)}}\n\n\t\t<li class=\"mint-customer-bar-item mint-customer-bar-item-${i} {{if ((i == 'cart') && (session.data.cart_quantity == 0))}}hidden{{\/if}}\" data-stest=\"customer-bar-item-${i}\">\n\t    \t{{if type=='link'}}<a href=\"${navItem.href}\" data-stest=\"customer-bar-item-${i}-link\">{{tmpl($data) navItem.text}}<\/a>\n\t\t\t\t{{else type=='text'}}{{tmpl($data) navItem.text}}\n\t\t\t\t{{else type=='skip'}}\n\t\t\t\t\t<a href=\"${navItem.href}\" data-stest=\"customer-bar-skip\">{{tmpl($data) navItem.text}}<\/a>\n\t\t\t\t{{\/if}}\n\t    <\/li>\n\n\t\t\t{{\/if}}\n\t\t{{\/if}}\n\t{{\/each}}\n<\/ul>",
		"showmore" : "{{if products && products.length }}\n\t<p>\n\t\tHelp us get to know you better. Select the pieces you'd like to add to your showroom.\n\t<\/p>\n\t<!--<ul>\n\t\t<li>See <a class=\"removed-recommendations\" href=\"#\">products<\/a> you have removed from your Showroom.<\/li>\n\t\t<li>See more <a class=\"show-me-more\" href=\"#\">products<\/a> to add to your Showroom.<\/li>\n\t<\/ul>-->\n\t<div class=\"showmore-arrow showmore-prev-arrow\" data-stest=\"prevArrow\"><a alt=\"prev\" href=\"#\">prev<\/a><\/div>\n\t<div class=\"showmore-arrow showmore-next-arrow\" data-stest=\"nextArrow\"><a alt=\"next\" href=\"#\">next<\/a><\/div>\n\n\t<ul class=\"showme-images\" style=\"height:205px;\">\n\t\t{{each(i, product) products}}\n\n\t\t\t{{if i % 4 == 0 && i !== 0}}\n\t\t\t\t<\/ul><\/li>\n\t\t\t{{\/if}}\n\n\t\t\t{{if i % 4 == 0}}\n\t\t\t\t<li><ul class='clearfix'>\n\t\t\t{{\/if}}\n\n\t\t\t<li class='{{if i % 4 == 0}}first{{\/if}}' product='${product.id}' data-stest='show-more-item-${i}'><div class='frame'><img src='${product.images.small[0][\"144x180\"]}' width=\"128\" height=\"160\"\/><div class='border'><\/div><div class='label'>SELECTED<\/div><\/div><div class='framelabel'>${product.name}<\/div><\/li>\n\n\t\t{{\/each}}\n\t\t<\/ul><\/li>\n\t<\/ul>\n{{else}}\n\t<p>You have successfully added all products to your showroom.<\/p>\n\t<!--<ul>\n\t\t<li>See <a class=\"removed-recommendations\" href=\"#\">products<\/a> you have removed from your Showroom.<\/li>\n\t\t<li>See more <a class=\"show-me-more\" href=\"#\">products<\/a> to add to your Showroom.<\/li>\n\t<\/ul>-->\n{{\/if}}\n\n<ul class=\"but showme-footer clearfix\">\n\t<li class=\"add-to-showroom\">\n\t\t<a href=\"#\" data-stest=\"addToShowroom\" class=\"disabled\">ADD SELECTED<\/a>\n\t<\/li>\n<\/ul>",
		"showroom" : "<h1 data-stest=\"showroomh1\">${mint.session._obj.data.firstname}'s Showroom<\/h1>\n\n<div class=\"showroom-top clearfix\">\n    <div class=\"L\">\n\t\t\t<div class=\"showroom-links clearfix\">\n\t\t\t\t<span><a data-stest=\"sendMoreOptionsFromShowroomLink\" href=\"#\" class=\"modalwindow show-me-more\">Show Me More<\/a><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"R clearfix\">\n\t\t\t<div>View by:<\/div>\n\t\t\t<ul class=\"clearfix\">\n\t\t\t\t<li class=\"first\"><a href=\"#\" class=\"recommended-view current\" data-stest=\"showroom-recommendations\">Recommended<\/a><\/li>\n\t\t\t\t<li><a href=\"#\" class=\"fav-view\" data-stest=\"showroom-favorites\">Favorites<\/a><\/li>\n\t\t\t<\/ul>\n\t\t<\/div>\n<\/div>\n\n<div class='showroom'>\n\t<div class=\"recommendations\">\n\t\t<ul class=\"cases clearfix\">\n\t\t\t{{if products && !products.error}}\n\t\t\t\t{{each(i, product) products}}\n\t\t\t\t\t{{tmpl({page:'recommendation', product: product, i: i}) mint.tmpl.customer.showroom_item}}\n\t\t\t\t{{\/each}}\n\t\t\t{{\/if}}\n\t\t\t<li class=\"no-recommendations\" {{if products}}style=\"display:none;\"{{\/if}}>\n\t\t\t\t<h2>We were unable to find any recommendations for you.<\/h2>\n\t\t\t<\/li>\n\t  <\/ul>\n\t<\/div>\n\t<div class=\"showroom-favorites\">\n\t<\/div>\n<\/div>\n\n<div class=\"showroom-bottom showroom-top clearfix\">\n    <div class=\"L\">\n\t\t\t<div class=\"showroom-links clearfix\">\n\t\t\t\t<span><a data-stest=\"sendMoreOptionsFromShowroomBottomLink\" href=\"#\" class=\"modalwindow show-me-more\">Show Me More<\/a><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n<\/div>",
		"billing_address" : "<li class=\"\">\n\t<h2>Billing Information<\/h2>\n<\/li>\n{{if !no_shipping}}\n<li>\n\t<label><input type=\"checkbox\" name='same-as-shipping' class='same-as-shipping' data-stest='sameShipping' value='1'\/> <strong>Same as shipping address<\/strong><\/label>\n<\/li>\n{{\/if}}\n<li>\n\t{{tmpl({type:'text', name:'cc_first_name', label: 'First Name on Credit Card', value:first_name, validation: ['required']}) mint.tmpl.partials.form.item}}\n<\/li>\n<li>\n\t{{tmpl({type:'text', name:'cc_last_name', label: 'Last Name on Credit Card', value:last_name, validation: ['required']}) mint.tmpl.partials.form.item}}\n<\/li>\n<li>\n\t{{tmpl({type:'text', name:'cc_street1', label: 'Billing Address on Credit Card', value:street1, validation: ['required']}) mint.tmpl.partials.form.item}}\n\t{{tmpl({type:'text', name:'cc_street2', cls: 'street2', value:street2}) mint.tmpl.partials.form.item}}\n<\/li>\n<li class=\"short\">\n\t{{tmpl({type:'text', name:'cc_zip_code', label: 'Zip Code', value:zip_code, validation: ['required','length[5,5]','custom[onlyNumber]']}) mint.tmpl.partials.form.item}}\n<\/li>\n<li>\n\t{{tmpl({type:'text', name:'cc_city', label: 'City', value:city, validation: ['required']}) mint.tmpl.partials.form.item}}\n<\/li>\n<li>\n\t{{tmpl({type:'select', name:'cc_region_id', label: 'State', value:region_id, validation: ['required','notzero'],cls:'mint-billing-state-select', options: {\"0\":\"Please select a state\",\"1\":\"Alabama\",\"2\":\"Alaska\",\"4\":\"Arizona\",\"5\":\"Arkansas\",\"12\":\"California\",\"13\":\"Colorado\",\"14\":\"Connecticut\",\"15\":\"Delaware\",\"16\":\"District of Columbia\",\"18\":\"Florida\",\"19\":\"Georgia\",\"21\":\"Hawaii\",\"22\":\"Idaho\",\"23\":\"Illinois\",\"24\":\"Indiana\",\"25\":\"Iowa\",\"26\":\"Kansas\",\"27\":\"Kentucky\",\"28\":\"Louisiana\",\"29\":\"Maine\",\"31\":\"Maryland\",\"32\":\"Massachusetts\",\"33\":\"Michigan\",\"34\":\"Minnesota\",\"35\":\"Mississippi\",\"36\":\"Missouri\",\"37\":\"Montana\",\"38\":\"Nebraska\",\"39\":\"Nevada\",\"40\":\"New Hampshire\",\"41\":\"New Jersey\",\"42\":\"New Mexico\",\"43\":\"New York\",\"44\":\"North Carolina\",\"45\":\"North Dakota\",\"47\":\"Ohio\",\"48\":\"Oklahoma\",\"49\":\"Oregon\",\"51\":\"Pennsylvania\",\"53\":\"Rhode Island\",\"54\":\"South Carolina\",\"55\":\"South Dakota\",\"56\":\"Tennessee\",\"57\":\"Texas\",\"58\":\"Utah\",\"59\":\"Vermont\",\"61\":\"Virginia\",\"62\":\"Washington\",\"63\":\"West Virginia\",\"64\":\"Wisconsin\",\"65\":\"Wyoming\"} }) mint.tmpl.partials.form.item}}\n<\/li>\n<li>\n\t{{tmpl({type:'text', name:'cc_telephone', label: 'Telephone Contact', value:phone, validation: ['required','telephone','length[9,14]']}) mint.tmpl.partials.form.item}}\n\t<span class='tel-required'>*Required for CC merchant (Visa, MC, Amex, etc.)<\/span>\n\t{{tmpl({type:'hidden', name:'billing_info_updated', value:0}) mint.tmpl.partials.form.item}}\n    \n<\/li>\n",
		"settings" : "<form method=\"post\" action=\"${submitUrl}\" data-stest=\"mint-settings-form\" class=\"mint-submit-block\">\n\t\n\t<ul class=\"mint-settings-tabs clearfix\">\n\t{{each(i, tab) tabs}}\n\t\t\t{{if i != 'skip' || mint.session._obj.data.skip_available || window.location.hash == \"#show-skip\"}}\n\t    \t<li data-stest=\"tab-${i}\"><a class=\"mint-tab-content-${i}\" data-stest=\"mint-tab-content-${i}\" href=\"#mint-tab-content-${i}\">${tab.title}<\/a><\/li>\n\t\t\t{{\/if}}\n\t{{\/each}}\n\t<\/ul>\n\t\n\t<ul class=\"mint-settings-tabs-content\">\n\t{{each(i, tab) tabs}}\n\t  <li id=\"mint-tab-content-${i}\" data-always-required=\"${tab.always_required}\"class=\"mint-tab-content\" data-stest=\"tab-content-${i}\" style=\"display:none;\">\n\t\t\t{{if i == 'shipping'}}\n\t\t\t\t{{tmpl(address) mint.tmpl.customer.address}}\n\t\t\t{{else i == 'order_history'}}\n\t\t\t\t<ol><\/ol>\n\t\t\t\t<a class='view-more' href=\"#\">View More<\/a>\n            {{else i == 'payment'}}\n               <ol class=\"billing-info-list\">{{tmpl(billing_address) mint.tmpl.customer.billing_address}}<\/ol>\n\t\t\t{{else i == 'credits'}}\n\t\t\t\t<div class=\"credits\">\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class='mint-credits'>Credits: <span><\/span><\/div>\n\t\t\t\t\t\t<\/li>\n\t\t\t\t\t<\/ol>\n\t\t\t\t\t<div id=\"credit-help\">\n\t\t\t\t\t\t<h3>How do credits work?<\/h3>\n\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t<dt>How do I receive credits?<\/dt>\n\t\t\t\t\t\t\t<dd>Each month you receive one credit with your membership fee of $29.99. Within the first five days of each month, you can choose to skip the month and you will not be charged for that month.<\/dd>\n\t\t\t\t\t\t\t{{if mint.config(\"store\") == 1}}\n\t\t\t\t\t\t\t\t<dt>Can I still buy jewelry if I have 0 credits?<\/dt>\n\t\t\t\t\t\t\t\t<dd>Yes! You can buy any piece of jewelry in your showroom at any time! Just click the product from your showroom, click \"ADD TO CART\", and confirm your selection on the next page. If you have not been charged your monthly membership fee yet, any item you buy will count toward your membership fee.<\/dd>\n\t\t\t\t\t\t\t\t<dt>Can I buy more credits?<\/dt>\n\t\t\t\t\t\t\t\t<dd>Not at this time. However, you don't need credits to order jewelry. Just click on the jewelry you love and click the \"ADD TO CART\" button.<\/dd>\n\t\t\t\t\t\t\t{{else mint.config(\"store\") == 2}}\n\t\t\t\t\t\t\t\t<dt>Can I still buy shirts if I have 0 credits?<\/dt>\n\t\t\t\t\t\t\t\t<dd>Yes! You can buy any shirt in your showroom at any time! Just click the product from your showroom, click \"ADD TO CART\", and confirm your selection on the next page. If you have not been charged your monthly membership fee yet, any item you buy will count toward your membership fee.<\/dd>\n\t\t\t\t\t\t\t\t<dt>Can I buy more credits?<\/dt>\n\t\t\t\t\t\t\t\t<dd>Not at this time. However, you don't need credits to order shirts. Just click on the shirt you love and click the \"ADD TO CART\" button.<\/dd>\n\t\t\t\t\t\t\t{{\/if}}\n\t\t\t\t\t\t<\/dl>\n\t\t\t\t\t\t<div class=\"redeem-link\" data-stest=\"redeem-link\"><\/div>\n\t\t\t\t\t\t<!-- <script type=\"text\/mint-giftcard-redeem\"><\/script> -->\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"system\" style=\"display:none;\">\n\t\t\t\t\t<h1>My System<\/h1>\n\t\t\t\t\t<!-- <h3>Advanced 5-piece BeautyMint System<\/h3> -->\n\t\t\t\t\t<div class=\"my-system-products\" data-stest=\"my-system-products\"><\/div>\n\t\t\t\t\t<p>Next shipment scheduled: <span class=\"shipment-date\"><\/span><\/p>\n\t\t\t\t\t<!-- <a href=\"\" class=\"skip\">Skip next shipment<\/a> -->\n\t\t\t\t<\/div>\n\t\t\t{{else i == 'skip'}}\n\t\t\t\t{{if  (mint.session._obj.data.skip_available || window.location.hash == \"#show-skip\") && parseInt(mint.session._obj.data.status) == 4 }}\n\t\t\t\t<ol><li>\n\t\t\t\t\t{{if mint.session._obj.data.skip_monthly}}\n\t\t\t\t\t<div class='mint-has-skip' data-stest=\"hasSkipped\"><p>You have successfully skipped this month.<\/p><\/div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t<div class='mint-skip' data-stest=\"skip\"><p>If you skip this month, you will not be charged again until next month.<\/p><a href=\"#\">Skip this month<\/a><\/div>\n\t\t\t\t\t{{\/if}}\n\t\t\t\t<\/li><\/ol>\n\t\t\t\t{{else mint.session._obj.data.skip_available || window.location.hash == \"#show-skip\"}}\n\t\t\t\t\t<ol><li><div class='mint-has-skip'><p>You are not a monthly member, your credit card will not be charged.<\/p><\/div><\/li><\/ol>\n\t\t\t\t{{\/if}}\n\t\t\t\n\t\t\t\t\n\t\t\t{{else}}\n\t\t\t\t<ol>\n\t\t\t\t{{each(j, field) fields}}\n\t\t\t\t\t<li>{{tmpl(field) mint.tmpl.partials.form.item}}<\/li>\n\t\t\t\t{{\/each}}\n\t\t\t\t<\/ol>\n\t\t\t{{\/if}}\n\t\t<\/li>\n\t{{\/each}}\n\t<\/ul>\n\n\t<div class='clearfix' id=\"buttonContainer\">\n\t\t{{tmpl({buttons:buttons}) mint.tmpl.partials.form.buttons.list}}\n\t<\/div>\n<\/form>\n",
		"case" : "<li class=\"case-for-${page} case case-${i}\" goto=\"${product.url}\" data-stest=\"case-${i}\" wide=\"${product.images.wide_image[0]['445x265']}\">\n\t<div class=\"case-header clearfix\">\n\t\t<h3>${product.name}<\/h3>\n\t\t<em product=\"${product.id}\" data-stest='case-close-${i}'><\/em>\n\t<\/div>\n  <div class=\"product\">\n\t\t{{if i == 0 && page == 'recommendation'}}\n\t\t\t<img src=\"${product.images.wide_image[0]['445x265']}\" width=\"445\" height=\"265\" \/>\n\t\t{{else}}\n      <img src=\"${product.images.showroom[0]['212x265']}\" width=\"212\" height=\"265\" \/>\n\t\t{{\/if}}\n\t\t\n\t\t{{if product.stock && product.stock.quantity && parseInt(product.stock.quantity) < 1}}\n\t\t\t<div class=\"status soldout\"><span>SOLD OUT<\/span><\/div>\n\t\t{{else product.stock && product.stock.quantity && parseInt(product.stock.quantity) < 100}}\n\t\t\t<div class=\"status almost-sold-out\" data-stest=\"almost-sold-out\"><span>ALMOST SOLD OUT<\/span><\/div>\n\t\t{{else i == 0 && page == 'recommendation'}}\n\t\t\t<div class=\"status topmatch\"><span>YOUR TOP MATCH<\/span><\/div>\n\t\t{{\/if}}\n\t\t\n\t\t{{if page != 'favorites'}}\n\t\t<div class=\"case-fav\">\n\t\t\t<a href=\"#${product.id}\" product=\"${product.id}\" class=\"{{if product.is_favorite}}faved{{\/if}}\" data-stest=\"product_id_${product.id}\">{{if product.is_favorite}}Remove item from favorites{{else}}Mark item as favorite{{\/if}}<\/a>\n\t\t<\/div>\n\t\t{{\/if}}\n  <\/div>\n<\/li>\n",
		"quiz_question" : "<div class=\"mint-quiz-question-text mint-quiz-question-text-${question_id}\">${question.question}<\/div>\n\n{{if slider}}\n\t<div class=\"slider-container\">\n\t\t<div id=\"slider-${question_id}\" class=\"slider\" rel=\"${Object.keys(question.answers).length}\"><\/div>\n\t<\/div>\n\t<ul class=\"mint-quiz-slider-answers mint-quiz-slider-answers-count-${Object.keys(question.answers).length} clearfix {{if question.multiple_choice == '1'}}mint-quiz-multiple-answers{{\/if}}\">\n\t\t{{each(j, answer) question.answers}}\n\t\t\t<li id=\"mint-quiz-answer-${answer.id}\" class=\"mint-quiz-answer-holder mint-quiz-answer-holder-${j}\">\n\t\t\t\t<a href=\"#\">${answer.text}<\/a>\n\t\t\t<\/li>\n\t\t{{\/each}}\n\t<\/ul>\n{{else}}\n\t<ul class=\"mint-quiz-answers mint-quiz-answers-count-${Object.keys(question.answers).length} clearfix {{if question.multiple_choice == '1'}}mint-quiz-multiple-answers{{\/if}}\">\n\t\t{{each(j, answer) question.answers}}\n\t\t\t<li class=\"mint-quiz-answer-holder mint-quiz-answer-holder-${j} clearfix\">\n\t\t\t\t{{tmpl({question_id: question_id, keyorid: keyorid, meta: answer, baseUrl: baseUrl, question_prefix: question_prefix, image_dir: image_dir}) mint.tmpl.customer.quiz_answer}}\n\t\t\t<\/li>\n\t\t{{\/each}}\n\t<\/ul>\n{{\/if}}\n",
		"quiz_answer" : "<a href=\"#\" id=\"mint-quiz-answer-${meta.id}\" class=\"mint-quiz-answer {{if meta.image}}{{else}}mint-quiz-answer-textonly{{\/if}} \">{{if meta.image}}<img src=\"${baseUrl}\/images\/quiz\/${image_dir}${question_prefix}${keyorid}\/${meta.image}\" \/>{{\/if}}${meta.text}<\/a>",
		"favorites" : "<ul class=\"cases clearfix\">\n\t{{if products}}\n\t\t{{each(i, product) products}}\n\t\t\t{{tmpl({page:'favorites', product: product, i: i}) mint.tmpl.customer.showroom_item}}\n\t\t{{\/each}}\n\t{{\/if}}\n\t\t<li class=\"no-favorites clearfix\" style=\"{{if products && products.length}}display:none;{{\/if}}\">\n\t\t\t<div class=\"main-image\"><\/div>\n\t\t\t<div class=\"main-content\">\n\t\t\t\t<h3>Start Building Your Collection SELECT YOUR FAVORITES AND HELP US GET TO KNOW YOU BETTER<\/h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><span>1.<\/span> Mark your favorite pieces by clicking on the <img src=\"\/assets\/images\/favorites\/fav_view.png\"><\/li>\n\t\t\t\t\t<li><span>2.<\/span> Your favorites live in one place and build a collection over time. So you can purchase your favorite pieces at anytime!<\/li>\n\t\t\t\t\t<li><span>3.<\/span> Your favorites help us understand your unique style, and help us make smarter recommendations.<\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/li>\n <\/ul>",
		"showroom_item" : "<li class=\"case-for-${page} case case-${i}\" goto=\"${product.url_key}\" data-stest=\"case-${i}\" wide=\"{{if product.images.wide_image}}${product.images.wide_image[0]['445x265']}{{\/if}}\">\n\t<div class=\"case-header clearfix\">\n\t\t<h3>${product.name}<\/h3>\n\t\t<em product=\"${product.id}\" data-stest='case-close-${i}'><\/em>\n\t<\/div>\n  <div class=\"product\">\n\t\t{{if i == 0 && page == 'recommendation' && product.images.wide_image}}\n\t\t\t<img src=\"${product.images.wide_image[0]['445x265']}\" width=\"445\" height=\"265\" \/>\n\t\t{{else}}\n      <img src=\"${product.images.base[0]['212x265']}\" width=\"212\" height=\"265\" \/>\n\t\t{{\/if}}\n\n\t\t{{if product.stock && ((product.stock.quantity !== null && parseInt(product.stock.quantity) < 1) || product.stock.is_in_stock == '0')}}\n\t\t\t<div class=\"status soldout\"><span>SOLD OUT<\/span><\/div>\n\t\t{{else product.stock && product.stock.quantity !== null && parseInt(product.stock.quantity) < 100}}\n\t\t\t<div class=\"status almost-sold-out\" data-stest=\"almost-sold-out\"><span>ALMOST SOLD OUT<\/span><\/div>\n\t\t{{else i == 0 && page == 'recommendation'}}\n\t\t\t<div class=\"status topmatch\"><span>YOUR TOP MATCH<\/span><\/div>\n\t\t{{\/if}}\n\n\t\t{{if page != 'favorites'}}\n\t\t<div class=\"case-fav\">\n\t\t\t<a href=\"#${product.id}\" product=\"${product.id}\" class=\"{{if product.is_favorite}}faved{{\/if}}\" data-stest=\"product_id_${product.id}\">{{if product.is_favorite}}Remove item from favorites{{else}}Mark item as favorite{{\/if}}<\/a>\n\t\t<\/div>\n\t\t{{\/if}}\n  <\/div>\n<\/li>\n",
		"address" : "<ul class='mint-customer-address' data-stest=\"customer-address\">\n\t<h2>Shipping Address<\/h2>\n\t<li>\n\t\t{{tmpl({type:'text', name:'first_name', label: 'First Name', value:first_name, validation: ['required','length[0,100]']}) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<li>\n\t\t{{tmpl({type:'text', name:'last_name', label: 'Last Name', value:last_name, validation: ['required']}) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<li class='mint-customer-address-street'>\n\t\t{{tmpl({type:'text', name:'street1', label: 'Street Address', value:street1, validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t{{tmpl({type:'text', cls:'street2', name:'street2', value:street2}) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<li class=\"short\">\n\t\t{{tmpl({type:'text', name:'zip_code', label: 'Zip Code', value:zip_code, maxlength: 5, validation: ['required','length[5,5]','custom[onlyNumber]']}) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<li>\n\t\t{{tmpl({type:'text', name:'city', label: 'City', value:city, validation: ['required']}) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<li>\n\t\t{{tmpl({type:'select', name:'region', label: 'State', value:region_id, validation: ['required','notzero'],cls:'mint-state-select', options: {\"0\":\"Please select a state\",\"1\":\"Alabama\",\"2\":\"Alaska\",\"4\":\"Arizona\",\"5\":\"Arkansas\",\"12\":\"California\",\"13\":\"Colorado\",\"14\":\"Connecticut\",\"15\":\"Delaware\",\"16\":\"District of Columbia\",\"18\":\"Florida\",\"19\":\"Georgia\",\"21\":\"Hawaii\",\"22\":\"Idaho\",\"23\":\"Illinois\",\"24\":\"Indiana\",\"25\":\"Iowa\",\"26\":\"Kansas\",\"27\":\"Kentucky\",\"28\":\"Louisiana\",\"29\":\"Maine\",\"31\":\"Maryland\",\"32\":\"Massachusetts\",\"33\":\"Michigan\",\"34\":\"Minnesota\",\"35\":\"Mississippi\",\"36\":\"Missouri\",\"37\":\"Montana\",\"38\":\"Nebraska\",\"39\":\"Nevada\",\"40\":\"New Hampshire\",\"41\":\"New Jersey\",\"42\":\"New Mexico\",\"43\":\"New York\",\"44\":\"North Carolina\",\"45\":\"North Dakota\",\"47\":\"Ohio\",\"48\":\"Oklahoma\",\"49\":\"Oregon\",\"51\":\"Pennsylvania\",\"53\":\"Rhode Island\",\"54\":\"South Carolina\",\"55\":\"South Dakota\",\"56\":\"Tennessee\",\"57\":\"Texas\",\"58\":\"Utah\",\"59\":\"Vermont\",\"61\":\"Virginia\",\"62\":\"Washington\",\"63\":\"West Virginia\",\"64\":\"Wisconsin\",\"65\":\"Wyoming\"} }) mint.tmpl.partials.form.item}}\n\t<\/li>\n\t<input type=\"hidden\" name=\"country\" value=\"US\"\/>\n<\/ul>"
	},
	"util" : {
		"toperror" : "<div class=\"mint-util-toperror mint-top-error-holder\" data-stest=\"mint-top-error\"  data-key=\"${error.key}\" data-code=\"${error.code}\">\n\t<ul class=\"mint-toperror-main\">\n\t\t{{if error.message}}\n\t\t<li class=\"mint-toperror-main-message\" data-stest=\"mint-toperror-main-message\">${error.message}<li>\n\t\t{{\/if}}\n\t\t<li class=\"mint-toperror-links\" data-stest=\"mint-toperror-links\">\n\t\t\t{{if error.refresh}}\n\t\t\t<span class=\"mint-toperror-link\">\n\t\t\t\t<a href=\"javascript:window.location.reload()\" class=\"mint-toperror-link-refresh\" data-stest=\"mint-toperror-link-refresh\">Refresh<\/a>\n\t\t\t<\/span>\n\t\t\t{{\/if}}\n\t\t\t<span class=\"mint-toperror-link\">\n\t\t\t\t<a href=\"#\" class=\"mint-toperror-link-close\" data-stest=\"mint-toperror-link-close\">Close<\/a>\n\t\t\t<\/span>\n\n\t\t<\/li>\n\t<\/ul>\n\t{{if error.list}}\n\t<ol class=\"mint-toperror-list\" data-stest=\"mint-toperror-list\">\n\t\t{{each(i, err) error.list}}\n\t\t\t<li class=\"mint-toperror-list-error\" data-stest=\"mint-toperror-listerror\" data-key=\"${err.key}\" data-code=\"${err.code}\">${err.message}<\/li>\n\t\t{{\/each}}\n\t<\/ol>\n\t{{\/if}}\n<\/div>"
	},
	"partials" : {
		"form" : {
			"fields" : {
				"textarea" : "<textarea type=\"${type}\" placeholder=\"${placeholder}\" class=\"input-${type} {{if validation}}validate[${validation.join(',')}]{{\/if}}{{if tag}} mint-tag{{\/if}}\" value=\"${value}\" {{if id}} id=\"${id}\"{{\/if}}name=\"${name}\" data-stest=\"${name}\" {{if tag}}title=\"${tag}\"{{\/if}}><\/textarea>{{if text}} <span class=\"mint-field-text\">${text}<\/span>{{\/if}}",
				"changepassword" : "{{tmpl({type: 'checkbox', name: 'change_password', text: 'Change Password'}) mint.tmpl.partials.form.fields.input}}\n\n{{tmpl({type:'password', name:'password', value:'', validation: ['password']}) mint.tmpl.partials.form.fields.input}}\n",
				"select" : "<select class=\"input-select {{if validation}}validate[${validation.join(',')}]{{\/if}} {{if cls}}${cls}{{\/if}}\" {{if id}} id=\"${id}\"{{\/if}}name=\"${name}\" data-stest=\"${name}\">\n\t{{each(i, option) options }}\n\t\t{{if !$.isArray(options) }}\n\t\t\t<option value=\"${i}\" {{if i == value}}selected{{\/if}}>${option}<\/option>\n\t\t{{else}}\n\t\t\t<option value=\"${option}\" {{if option == value}}selected{{\/if}}>${option}<\/option>\n\t\t{{\/if}}\n\t{{\/each}}\n<\/select>",
				"input" : "<input type=\"${type}\" class=\"input-${type} {{if validation}}validate[${validation.join(',')}]{{\/if}}{{if tag}} mint-tag{{\/if}}\" value=\"${value}\" {{if id}} id=\"${id}\"{{\/if}} name=\"${name}\" {{if maxlength}} maxlength=\"${maxlength}\" {{\/if}} data-stest=\"${name}\" {{if tag}}title=\"${tag}\"{{\/if}} {{if disabled}}disabled=\"1\"{{\/if}}\/>{{if text}} <span class=\"mint-field-text\">${$.trim(text)}<\/span>{{\/if}}"
			},
			"buttons" : {
				"list" : "<ul class=\"but clearfix {{if cls}}${cls}{{\/if}}\">\n\t{{each(i, button) buttons}}\n\t\t{{if button.loading}}\n\t\t\t<li class=\"mint-hidden mint-loading-placeholder\">Loading...<\/li>\n\t\t{{else}}\n\t\t\t<li>{{tmpl(button) mint.tmpl.partials.form.buttons.button}}<\/li>\n\t\t{{\/if}}\n\t{{\/each}}\n<\/ul>",
				"button" : "<button title=\"${title}\" data-stest=\"{{if stest}}${stest}{{else}}${title}{{\/if}}\" class=\"mint-button {{if cls}}${cls}{{\/if}}\" {{if primary }}type=\"submit\"{{\/if}} {{if hidden}}style=\"display:none;\"{{\/if}}><span>${title}<\/span><\/button>\n\n"
			},
			"item" : "{{if label}}\n<label for=\"${name}\">${label}:<\/label>\n{{\/if}}\n<p {{if cls}}class='${cls}'{{\/if}}>\n\t{{if fields}}\n\t\t{{each(i, field) fields}}\n\t\t\t{{tmpl(field) mint.tmpl.partials.form.field}}\n\t\t{{\/each}}\n\t{{else}}\n\t\t{{tmpl($data) mint.tmpl.partials.form.field}}\n\t{{\/if}}\n<\/p>",
			"field" : "{{if type == 'select'}}\n\t{{tmpl($data) mint.tmpl.partials.form.fields.select}}\n{{else type == 'changepassword'}}\n\t{{tmpl($data) mint.tmpl.partials.form.fields.changepassword}}\n{{else type == 'textarea'}}\n\t{{tmpl($data) mint.tmpl.partials.form.fields.textarea}}\n{{else}}\n\t{{tmpl($data) mint.tmpl.partials.form.fields.input}}\n{{\/if}}"
		}
	},
	"catalog" : {
		"category" : {
			"products" : "<ul class='mint-category-product-list' data-stest=\"category-widget\">\n\t{{each(i, product) products}}\n\t    <li data-stest=\"category-product-${i}\" data-id=\"${product.id}\">{{tmpl(product) mint.tmpl.catalog.product.summary}}<\/li>\n\t{{\/each}}\n<\/ul>"
		},
		"product" : {
			"summary" : "<div class='mint-product-image'>\n\t<a href=\"${url}\"><img src=\"${images['image']}\" alt=\"${name}\" data-stest=\"product-image\" \/><\/a>\n<\/div>\n<div class=\"mint-product-details\">\n\t<h4><a href=\"${url}\" data-stest=\"product-name\">${name}<\/a><\/h4>\n<\/div>",
			"add" : "{{if mint.config('store') == 2}}<h3>Get This Shirt<\/h3>{{\/if}}\n\t{{if price}}\n\t\t<div class=\"price\">Your price ${parseFloat(price)\/29.99} credit{{if parseFloat(price)\/29.99 != 1}}s{{\/if}} ($${parseFloat(price)})<\/div>\n\t{{\/if}}\n{{if inventoryStatus == 'almost_sold_out'}}\n<div class=\"pdetail-inventory-label almost-sold-out\">Almost Sold Out<\/div>\n{{else inventoryStatus == 'sold_out'}}\n<div class=\"pdetail-inventory-label sold-out\" data-stest=\"product-sold-out\" >Sold Out<\/div>\n{{\/if}}\n<ol class=\"size-color\">\n\t{{each(key, attr) attrs}}\n\t\t<li>\n\t\t\t<dl class=\"attr ${key}\">\n\t\t\t\t<dt>${attr.name}:<\/dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<ul class=\"clearfix\">\n\t\t\t\t\t\t{{each(i, value) attr.values}}\n\t\t\t\t\t\t\t{{if i.indexOf('#') === 0}}\n\t\t\t\t\t\t\t\t<li class=\"attr-value attr-${key}-value\" data-stest=\"attr-${key}-value\"><a id=\"attr-${key}-value-${i.replace('#','')}\" type=\"${key}\" style=\"background: ${i};\" value=\"${i}\" href=\"#\">&nbsp;<\/a><\/li>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<li class=\"attr-value attr-${key}-value\" data-stest=\"attr-${key}-value\"><a id=\"attr-${key}-value-${i}\" type=\"${key}\" value=\"${i}\" href=\"#\">${i}<\/a><\/li>\n\t\t\t\t\t\t\t{{\/if}}\n\t\t\t\t\t\t{{\/each}}\n\t\t\t\t\t\t{{if mint.config('store') == 2}}\n\t\t\t\t\t\t{{if attr.links}}\n\t\t\t\t\t\t\t{{each(i, link) attr.links}}\n\t\t\t\t\t\t\t\t<li class=\"attr-additional\"><a class=\"${link.classname}\" data-stest=\"${link.dataStest}\" href=\"${link.href}\">${link.text}<\/a><\/li>\n\t\t\t\t\t\t\t{{\/each}}\n\t\t\t\t\t\t{{\/if}}\n\t\t\t\t\t\t{{\/if}}\n\t\t\t\t\t<\/ul>\n\t\t\t\t<\/dd>\n\t\t\t<\/dl>\n\t\t<\/li>\n\t{{\/each}}\n\t<li><div class=\"quantity\"><label>Quantity:<\/label> <input name=\"quantity\" data-stest=\"add-to-cart-quantity\" size=\"3\" value=\"1\" \/><\/div><\/li>\n\t<li class=\"product-add\" data-stest=\"product-add\">\n\t\t<span class=\"mint-hidden mint-loading-placeholder\" data-stest=\"waitlist-response-message\">Loading...<\/span>\n\t\t<a class=\"mint-add-product\" href=\"{{if loggedIn}}#{{else}}${regUrl}{{if possibleProductId}}?product=${id}{{\/if}}{{\/if}}\" data-stest=\"product-add-${id}\"><span>{{if loggedIn}}${addText}{{else}}${regText}{{\/if}}<\/span><\/a>\n\t\t<a class=\"mint-add-waitlist\" data-stest=\"add-waitlist\" href=\"{{if loggedIn}}#{{else}}${regUrl}{{if possibleProductId}}?product=${id}{{\/if}}{{\/if}}\">${waitlistBtnText}<\/a>\n\t<\/li>\n<\/ol>\n",
			"our_designs" : "<div class=\"past-try-free clearfix\">\n    <h1 class=\"L\">Our Designs<\/h1>\n    <div class=\"R\">\n        <span>\n            Exclusive jewelry for only\n            <strong>$29.99<\/strong>\n            per item\n        <\/span>\n        <ul class=\"but\">\n            <li>\n                <a class=\"user-link\" href=\"\/style-profile\/\" data-loggedin=\"\/showroom\/\">Get Started Now<\/a>\n            <\/li>\n        <\/ul>\n    <\/div>\n<\/div>\n<ul class=\"col3 clearfix recent-collection\">\n   {{each(i, product) products}}\n   <li class=\"L col{{if i % 3 === 0 }} first-child{{\/if}}\" {{if product.inStock && !window.setFirstProduct}}${window.setFirstProduct = true} data-stest=\"first-product\"{{\/if}} data-product-id=\"${product.id}\">\n        <img src=\"${product.image.src}\" alt=\"${product.title}\" height=\"${product.image.height}\" width=\"${product.image.width}\">\n        {{if !product.inStock }}\n            <div class=\"status soldout\">\n                <span>SOLD OUT<\/span>\n            <\/div>\n        {{\/if}}\n        <div class=\"overlay\">\n            <div class=\"overlay-body\" data-stest=\"recent-product-add-${product.id}-container\">\n                <h2>${product.title}<\/h2>\n                {{if !product.inStock }}\n                    <p class=\"notInStockTitle\">Sorry, this item is extremely popular and we are currently all sold out!<\/p>\n                {{else}}\n                <div class=\"but clearfix\">\n                    {{if !product.inShowroom}}\n                        <a href=\"{{if !userIsLoggedIn }}\/style-profile?product=${product.id}{{else}}#{{\/if}}\" class=\"addToShowroomLink\" data-product-id=\"${product.id}\" data-stest=\"recent-product-add-${product.id}\">ADD TO SHOWROOM<\/a>\n                    {{else}}\n                        <p>This product is now added to your showroom. <a href=\"\/showroom\">Go To Your Showroom<\/a><\/p>\n                    {{\/if}}\n                <\/div>\n                <!--\n                <div class=\"share-product\">\n                    <a data-stest=\"recent-product-share-${product.id}\" product=\"${product.id}\" title=\"${product.title}\" message=\"I love this great piece on ${siteName}!\" subject=\"Introducing a new concept in jewelry by actress and style icon Kate Bosworth with celebrity stylist Cher Coulter.\" href=\"${product.url}\">Share this!<\/a>\n                <\/div> -->\n                {{\/if}}\n            <\/div>\n        <\/div>\n    <\/li>\n    {{\/each}}\n<\/ul>\n",
			"image_carousel" : "<ul class=\"clearfix\">\n\t{{each(i, img) images}}\n\t\t{{if !ignore_first || i != 0}}\n\t\t<li><a href='${img[\"361x680\"]}?preview=${img[\"722x1360\"]}'><img width=\"70\" height=\"132\" src=\"${img['70x132']}\" \/><\/a><\/li> \n\t\t{{\/if}}\n\t{{\/each}}\n<\/ul>",
			"details_portrait_layout" : "<div class=\"col2 clearfix product-detail\">\n\t<div class=\"col product-full\">\n\t\t<div class='main-image'>\n\t\t\t{{if images.base && images.base[0] && images.base[0][\"800x1000\"] && images.base[0][\"400x500\"]}}\n\t\t\t<a href='${images.base[0][\"800x1000\"]}' class='cloud-zoom' rel=\"position: 'inside' , showTitle: false, adjustX:0, adjustY:0\"><img src='${images.base[0][\"400x500\"]}' width='400' height='500' \/><\/a>\n\t\t\t{{else}}\n\t\t\t\tNo Image Found\n\t\t\t{{\/if}}\n\t\t<\/div>\n\n\t\t<div class=\"clearfix product-thumbs\">\n\t\t\t<div class=\"L arrow-left\"><img width=\"11\" height=\"18\" alt=\"previous\" src=\"\/assets\/images\/arrow-left-small.png\"><\/div>\n\t\t\t<div class='carousel L'>\n\t\t\t\t{{tmpl({images: images.general, ignore_first: false}) mint.tmpl.catalog.product.image_portrait_carousel}}\n\t\t\t<\/div>\n\t\t\t<div class=\"R arrow-right\"><img width=\"11\" height=\"18\" alt=\"next\" src=\"\/assets\/images\/arrow-right-small.png\"><\/div>\n\t\t<\/div>\n\t\t{{if video}}\n\t\t<div class=\"clearfix product-video\"><\/div>\n\t\t{{\/if}}\n\t<\/div>\n\n\t<div class=\"col R sidebar\">\n\t\t<h1>${name}<\/h1>\n\t\t<div class=\"case-fav\">\n\t\t\t<a href=\"#${id}\" product=\"${id}\" class=\"{{if is_favorite}}faved{{\/if}}\" data-stest=\"faved\"><\/a>\n\t\t<\/div>\n\t\t<div class=\"col attributes\">\n\t\t\t<div class=\"mint mint-catalog-product-add\" data-stest='mint-catalog-product-add'><\/div>\n\n\t\t\t<div class=\"description\">\n\t\t\t\t<p>{{tmpl({}) description}}<\/p>\n\t\t\t\t<div class=\"product-share clearfix\">\n\t\t\t\t\t<div class=\"facebook-like-block\">\n\t\t\t\t\t\t<fb:like href=\"\" send=\"true\" layout=\"button_count\" width=\"450\" show_faces=\"true\" font=\"lucida grande\"><\/fb:like>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t\t{{if attributes}}\n\t\t<ul class=\"clearfix editors-notes\">\n\t\t\t{{if attributes.style_term_1}}\n\t\t\t<li><dl>\n\t\t\t\t<dt><span class=\"styletip-1\">${attributes.style_term_1}<\/span><\/dt>\n\t\t\t\t<dd>${attributes.style_def_1}<\/dd>\n\t\t\t<\/dl><\/li>\n\t\t\t{{\/if}}\n\t\t\t{{if attributes.style_term_2}}\n\t\t\t<li><dl>\n\t\t\t\t<dt><span class=\"styletip-2\">${attributes.style_term_2}<\/span><\/dt>\n\t\t\t\t<dd>${attributes.style_def_2}<\/dd>\n\t\t\t<\/dl><\/li>\n\t\t\t{{\/if}}\n\t\t\t{{if attributes.style_term_3}}\n\t\t\t<li><dl>\n\t\t\t\t<dt><span class=\"styletip-3\">${attributes.style_term_3}<\/span><\/dt>\n\t\t\t\t<dd>${attributes.style_def_3}<\/dd>\n\t\t\t<\/dl><\/li>\n\t\t\t{{\/if}}\n\t\t<\/ul>\n\t\t{{\/if}}\n\n\t\t{{if attributes.stylist_1_name != 0 && attributes.stylist_1_name != null}}\n\t\t<div class=\"tabbed-module style-hints\">\n\t\t\t<ul class=\"tab-nav\">\n\t\t\t\t{{if attributes.stylist_1_name != 0}}\n\t\t\t\t<li><a href=\"#first\">From ${attributes.stylist_1_name}<\/a><\/li>\n\t\t\t\t{{\/if}}\n\t\t\t\t{{if attributes.stylist_2_name != 0}}\n\t\t\t\t<li><a href=\"#second\">From ${attributes.stylist_2_name}<\/a><\/li>\n\t\t\t\t{{\/if}}\n\t\t\t<\/ul>\n\n\t\t\t{{if attributes.stylist_1_name != 0}}\n\t\t\t<div id=\"first\" class=\"tab-content\">\n\t\t\t\t<div class=\"L\">\n\t\t\t\t\t<h3 class=\"stylist-tab-${attributes.stylist_1_name}\"><\/h3>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>\"${attributes.stylist_1_comment}\"<\/p>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"R\">\n\t\t\t\t\t<ul class=\"clearfix style-images\">\n\t\t\t\t\t{{if attributes.stylist_1_name == \"Kate\"}}\n\t\t\t\t\t\t{{each(i, img) images.kate}}\n\t\t\t\t\t\t<li><img width=\"174\" height=\"263\" src=\"${img['174x263']}\" \/><\/li>\n\t\t\t\t\t\t{{\/each}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{each(i, img) images.cher}}\n\t\t\t\t\t\t<li><img width=\"174\" height=\"263\" src=\"${img['174x263']}\" \/><\/li>\n\t\t\t\t\t\t{{\/each}}\n\t\t\t\t\t{{\/if}}\n\t\t\t\t\t<\/ul>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t{{\/if}}\n\t\t\t{{if attributes.stylist_2_name != 0}}\n\t\t\t<div id=\"second\" class=\"tab-content\">\n\t\t\t\t<div class=\"L\">\n\t\t\t\t\t<h3 class=\"stylist-tab-${attributes.stylist_2_name}\"><\/h3>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>\"${attributes.stylist_2_comment}\"<\/p>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"R\">\n\t\t\t\t\t<ul class=\"clearfix style-images\">\n\t\t\t\t\t\t{{each(i, img) images.cher}}\n\t\t\t\t\t\t<li><img width=\"174\" height=\"263\" src=\"${img['174x263']}\" \/><\/li>\n\t\t\t\t\t\t{{\/each}}\n\t\t\t\t\t<\/ul>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t{{\/if}}\n\t\t<\/div>\n\t\t{{\/if}}\n\t<\/div>\n<\/div>\n",
			"product_modal" : "<div id=\"product-modal\" data-stest=\"mint-customer-quiz-add-showroom\">\n    <div>\n        <img src=\"${image.src}\"  width=\"${image.width}\" height=\"${image.height}\" alt=\"\" \/>\n    <\/div>\n    <h2>Waiting in your showroom after we build your style profile!<\/h2>\n    <p>\n        <a href=\"#\" title=\"hide this product\">CLOSE<\/a>\n    <\/p>\n<\/div>\n",
			"details" : "<div class=\"col3 clearfix product-detail\">\n\t<div class=\"col sidebar\">\n\t\t<div class=\"styling\">\n\t\t\t<div class=\"dotted-heading editors-notes\">\n\t\t\t\tEditor's Notes\n\t\t\t<\/div>\n\t\t\t{{tmpl({}) style_description}}\n\t\t<\/div>\n\n\t\t{{if video}}\n\t\t\t<div class=\"video\">\n\t\t\t\t<div class=\"dotted-heading\">\n\t\t\t\t\tWatch the Video\n\t\t\t\t<\/div>\n\t\t\t\t<div class='video-chrome simplemodal-container'>\n\t\t\t\t\t<div class='mint-modal-title'>&nbsp;<\/div>\n\t\t\t\t\t<div class=\"close\">\n\t\t\t\t\t\t<a class='simplemodal-close' title=\"Close\" href=\"#\">x<\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"mint-modal-data\">\n\t\t\t\t\t\t<div style=\"display:none\"><\/div>\n\t\t\t\t\t\t<object id=\"myExperience${video}\" class=\"BrightcoveExperience\">\n\t\t\t\t\t\t\t<param name=\"bgcolor\" value=\"#FFFFFF\" \/>\n\t\t\t\t\t\t\t<param name=\"width\" value=\"608\" \/>\n\t\t\t\t\t\t\t<param name=\"height\" value=\"340\" \/>\n\t\t\t\t\t\t\t<param name=\"playerID\" value=\"625138936001\" \/>\n\t\t\t\t\t\t\t<param name=\"playerKey\" value=\"AQ~~,AAAAkQZlPSE~,1fpcN8W7qFzWmHW2iCo2P2CWs0YpQ0FQ\" \/>\n\t\t\t\t\t\t\t<param name=\"isVid\" value=\"true\" \/>\n\t\t\t\t\t\t\t<param name=\"isUI\" value=\"true\" \/>\n\t\t\t\t\t\t\t<param name=\"dynamicStreaming\" value=\"true\" \/>\n\t\t\t\t\t\t\t<param name=\"@videoPlayer\" value=\"${video}\" \/>\n\t\t\t\t\t\t<\/object>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class='video-still'><div><\/div><\/div>\n\t\t\t<\/div>\n\t\t{{\/if}}\n\n\t\t{{if images.spotted}}\n\t\t<div class=\"spotted\">\n\t\t\t<div class=\"dotted-heading\">\n\t\t\t\tSpotted\n\t\t\t<\/div>\n\t\t\t<div class=\"arrow-left L\">\n\t\t\t\t<a href=\"#\"><img width=\"15\" height=\"51\" border=\"0\" alt=\"previous\" src=\"\/assets\/images\/arrow-left.gif\"><\/a>\n\t\t\t<\/div>\n\t\t\t<div class=\"thumb L\">\n\t\t\t\t{{each(i, img) images.spotted}}\n\t\t\t\t<img width=\"166\" height=\"200\" border=\"0\" alt=\"\" src=\"${img[\"166x200\"]}\" \/>\n\t\t\t\t{{\/each}}\n\t\t\t<\/div>\n\t\t\t<div class=\"arrow-right R\">\n\t\t\t\t<a href=\"#\"><img width=\"15\" height=\"51\" border=\"0\" alt=\"next\" src=\"\/assets\/images\/arrow-right.gif\"><\/a>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t{{\/if}}\n\t<\/div>\n\n\t<div class=\"col product-full\">\n\t\t<div class='main-image'>\n\t\t\t{{if images.base[1]}}\n\t\t\t<a href='${images.base[1][\"722x1360\"]}' class='cloud-zoom' rel=\"position: 'inside' , showTitle: false, adjustX:0, adjustY:0\"><img src='${images.base[1][\"361x680\"]}' width='361' height='680' \/><\/a>\n\t\t\t{{else}}\n\t\t\t\tNo Image Found\n\t\t\t{{\/if}}\n\t\t<\/div>\n\n\t\t<div class=\"clearfix product-thumbs\">\n\t\t\t<div class=\"L arrow-left\"><img width=\"11\" height=\"18\" alt=\"previous\" src=\"\/assets\/images\/arrow-left-small.png\"><\/div>\n\t\t\t<div class='carousel L'>\n\t\t\t\t{{tmpl({images: images.base, ignore_first: true}) mint.tmpl.catalog.product.image_carousel}}\n\t\t\t<\/div>\n\t\t\t<div class=\"R arrow-right\"><img width=\"11\" height=\"18\" alt=\"next\" src=\"\/assets\/images\/arrow-right-small.png\"><\/div>\n\t\t<\/div>\n\n\t<\/div>\n\n\t<div class=\"col attributes\">\n\t\t<div class=\"mint mint-catalog-product-add\" data-stest='mint-catalog-product-add'><\/div>\n\n\t\t<div class=\"description\">\n\t\t\t<p><img src=\"${images.small[0]['214x290']}\"\/><\/p>\n\t\t\t<p>{{tmpl({}) short_description}}<\/p>\n\t\t<\/div>\n\n\t<\/div>\n<\/div>",
			"image_portrait_carousel" : "<ul class=\"clearfix\">\n\t{{each(i, img) images}}\n\t\t{{if !ignore_first || i != 0}}\n\t\t<li><a href='${img[\"400x500\"]}?preview=${img[\"800x1000\"]}'><img width=\"54\" height=\"67\" src=\"${img['54x67']}\" \/><\/a><\/li>\n\t\t{{\/if}}\n\t{{\/each}}\n<\/ul>"
		}
	},
	"checkout" : {
		"cart" : "<ul>\n\t{{each(i, product) products}}\n\t  <li data-stest=\"cart-item-${i}\" product=\"${product.id}\" class=\"mint-cart-item mint-cart-item-${product.id} clearfix\">\n\t\t\t<img src=\"${product.images['thumbnail'][0][imageSize]}\" \/>\n\t\t\t<h1>${product.name}<\/h1>\n\t\t\t{{if parseInt(product.stock.quantity) <= 0}}\n\t\t\t\t<div class=\"cart-inventory-label sold-out\">Sold Out<\/div>\n\t\t\t{{else}}\n\t\t\t\t<p>Quantity:\n\t\t\t\t\t\t{{tmpl({name: 'quantity',options: product.selectOptions, value:product.qty_ordered}) mint.tmpl.partials.form.fields.select}}\n\t\t\t\t<\/p>\n\t\t\t{{\/if}}\n\t\t\t<a href=\"#\" class='mint-remove-item'>remove<\/a>\n\t\t<\/li>\n\t{{\/each}}\n<\/ul>\n\n{{if dynamic_offer_markup}}\n<div class=\"dynamic-offer-markup\" data-stest=\"dynamic-offer-markup\">\n{{tmpl({}) dynamic_offer_markup}}\n<\/div>\n{{\/if}}",
		"giftcard" : "<div class='giftcard-form'>\n\t<form id=\"gift-card-form\" name=\"giftcard\" action=\"${submitUrl}\" method=\"POST\" data-stest='giftcard-form'>\n\t\t<div id=\"step-1-form\" class=\"form-step clearfix\" style=\"display:none\">\n\t\t\t<div class=\"giftcard-amounts\">\n\t\t\t\t<h3>Please select a gift amount<\/h3>\n\t\t\t\t<ul>\n\t\t\t\t\t{{each(i, amount) amounts}}\n\t\t\t\t\t\t<li class=\"gift-amount\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"giftcard_amount\" value=\"${amount.qty}\" data-stest=\"${amount.label}\" {{if i == 0}}checked{{\/if}}>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t${amount.label} &#8212; $${amount.value}\n\t\t\t\t\t\t\t<\/label>\n\t\t\t\t\t\t<\/li>\n\t\t\t\t\t\t{{\/each}}\n\t\t\t\t<\/ul>\n\t\t\t\t<div class=\"helper\">1 credit = 1 piece<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"giftcard-info\">\n\t\t\t\t<ol class=\"form-list\">\n\t\t\t\t<li>\n\t\t            <label for=\"yourfirstname\">Your First Name<\/label>\n\t\t            <p>\n\t\t                <input  type=\"text\" name=\"yourfirstname\" id=\"yourfirstname\" {{if mint.session._obj.data && mint.session._obj.data.firstname}}value=\"${mint.session._obj.data.firstname}\"{{\/if}} title=\"Firstname\" class=\"input-text validate[required,length[2,100]]\" data-stest=\"firstname\" \/>\n\t\t            <\/p>\n\t\t        <\/li>\n\t\t\t\t<li>\n\t\t            <label for=\"yourlastname\">Your Last Name<\/label>\n\t\t            <p>\n\t\t                <input  type=\"text\" name=\"yourlastname\" id=\"yourlastname\" {{if mint.session._obj.data && mint.session._obj.data.lastname}}value=\"${mint.session._obj.data.lastname}\"{{\/if}} title=\"Lastname\" class=\"input-text validate[required,length[2,100]]\" data-stest=\"lastname\" \/>\n\t\t            <\/p>\n\t\t        <\/li>\n\t\t        <li>\n\t\t            <label for=\"youremail\">Your Email<\/label>\n\t\t            <p>\n\t\t                <input  type=\"text\" name=\"youremail\" id=\"youremail\" {{if mint.session._obj.email}}value=\"${mint.session._obj.email}\"{{\/if}} title=\"Your Email Address\" class=\"input-text validate[required,custom[email]]\" data-stest=\"email\" \/>\n\t\t            <\/p>\n\t\t        <\/li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<label>Recipient Name<\/label>\n\t\t\t\t\t\t\t<p><input id=\"giftcard_recipient_name\" class=\"validate[required] text-input\" type=\"text\" title=\"name\" value=\"\" name=\"giftcard_recipient_name\" data-stest=\"recipientname\"><\/p>\n\t\t\t\t\t\t<\/li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<label>Recipient Email<\/label>\n\t\t\t\t\t\t\t<p><input id=\"giftcard_recipient_email\" class=\"validate[required,custom[email]] text-input\" type=\"text\" title=\"name\" value=\"\" name=\"giftcard_recipient_email\" data-stest=\"recipientemail\"><\/p>\n\t\t\t\t\t\t<\/li>\n\t\t\t\t\t\t<li class=\"gift-message-li\">\n\t\t\t\t\t\t\t<div id=\"gift-message\" class=\"clearfix\"><label>Message<\/label><div><\/div><\/div>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<textarea id=\"giftcard_message\" name=\"giftcard_message\" rows=\"3\" cols=\"15\" data-stest=\"message\"><\/textarea>\n\t\t\t\t\t\t\t<\/p>\n\t\t\t\t\t\t<\/li>\n\t\t    <\/ol>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t\t<div id=\"step-1-details\" class=\"clearfix step-details\" style=\"display:none\">\n\t\t\t<ol><\/ol>\n\t\t\t<a href=\"#\" step=\"1\">change<\/a>\n\t\t<\/div>\n\n\t\t<div id=\"step-2-form\" class=\"form-step clearfix\" style=\"display:none\">\n\t\t\t<h3>Payment Details<\/h3>\n\t\t\t<ol class=\"form-list\">\n\n\t\t\t  <li>\n\t\t\t\t\t\t<label for=\"cc-type\">Card Type<\/label>\n\t\t\t      <p>\n\t\t\t          <select id=\"cc-type\" name=\"cc-type\" value=\"\" class=\"input-text validate[required]\" data-stest=\"cc-type\" >\n\t\t\t         \t<option value=\"\"> <\/option>\n\t\t\t         \t<option value=\"AE\">American Express<\/option>\n\t\t\t         \t<option value=\"VI\">Visa<\/option>\n\t\t\t         \t<option value=\"MC\">MasterCard<\/option>\n\t\t\t         \t<option value=\"DI\">Discover<\/option>\n\t\t\t          <\/select>\n\t\t\t      <\/p>\n\t\t\t  <\/li>\n\t\t\t  <li>\n\t\t\t      <label for=\"cardnumber\">Card Number<\/label>\n\t\t\t      <p>\n\t\t\t          <input type=\"text\" id=\"cc-number\" name=\"cc-number\" value=\"\" class=\"input-text validate[required]\" maxlength=\"16\" data-stest=\"cc-number\" \/>\n\t\t\t      <\/p>\n\t\t\t  <\/li>\n\t\t\t  <li>\n\t\t\t      <label for=\"cc-expiration-month\">Card Expiration<\/label>\n\t\t\t      <p>\n\t\t\t          <select id=\"cc-expiration-month\" name=\"cc-expiration-month\" data-stest=\"cc-expiration-month\">\n\t\t\t\t\t\t\t\t\t{{each(i, month) ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October','November', 'December']}}\n\t\t\t\t\t\t\t\t\t\t<option value=\"${(i+1)}\">${month}<\/option>\n\t\t\t\t\t\t\t\t\t{{\/each}}\n\t\t\t          <\/select>\n\n\t\t\t          <select id=\"cc-expiration-year\" name=\"cc-expiration-year\" data-stest=\"cc-expiration-year\">\n\t\t\t\t\t\t\t\t\t{{each(i, month) ['0', '1', '2', '3', '4', '5', '6', '7','8', '9']}}\n\t\t\t\t\t\t\t\t\t\t<option value=\"${(year+i)}\">${(year+i)}<\/option>\n\t\t\t\t\t\t\t\t\t{{\/each}}\n\t\t\t          <\/select>\n\t\t\t      <\/p>\n\t\t\t  <\/li>\n\t\t\t  <li class=\"short\">\n\t\t\t\t <div id=\"cvv-header\" class=\"clearfix\">\n\t\t\t      <label for=\"cc-cardcode\">CVV Security Code<\/label>\n\t\t\t      <a href=\"https:\/\/www.usaepay.com\/cvv.htm\" target=\"_blank\">What's This?<\/a>\n\t\t\t     <\/div>\n\t\t\t     <p>\n\t\t\t         <input type=\"text\" id=\"cc-cardcode\" name=\"cc-cardcode\" value=\"\" maxlength=\"4\" class=\"input-text validate[required]\" data-stest=\"cc-cardcode\" \/>\n\t\t\t     <\/p>\n\t\t\t  <\/li>\n\t\t\t<\/ol>\n\n\t\t<\/div>\n\n\t\t<div id=\"step-2-details\" class=\"clearfix step-details {{if valid_cc && valid_cc == '1'}}saved-creditcard{{\/if}}\" style=\"display:none\">\n\t\t\t<input type='hidden' name='use_saved_cc' value=\"0\" \/>\n\t\t\t<ol>\n\t\t\t\t\t<li><label>Card Number<\/label><p>XXXX XXXX XXXX ${last_four_cc}<\/p><\/li>\n\t\t\t<\/ol>\n\t\t\t<a href=\"#\" step=\"2\">change<\/a>\n\t\t<\/div>\n\t\t\n\t\t\n\t\t<div id=\"step-3-form\" class=\"clearfix form-step\" style='display:none;'>\n\t\t\t<ol class=\"checkout-billing-form\" data-stest=\"checkout-billing-form\">\n\t\t\t\t{{tmpl(billing_address) mint.tmpl.customer.billing_address}}\n\t\t\t<\/ol>\n\t\t<\/div>\n\t\t\n\t\t<div id=\"step-3-details\" class=\"clearfix step-details\" style=\"display:none\">\n\t\t\t<ol class=\"checkout-billing-info\">\n\t\t\t\t<li class='clearfix'>\n\t\t\t\t\t<label>Name On Card<\/label>\n\t\t\t\t\t<p class=\"billing-address-name\">${billing_address.first_name} ${billing_address.last_name}<\/p>\n\t\t\t\t<\/li>\n\t\t\t\t<li class='clearfix'>\n\t\t\t\t\t<label>Billing Address<\/label>\n\t\t\t\t\t<p><span class=\"billing-address-street\">${billing_address.street1} ${billing_address.street2}<\/span><br\/><span class=\"billing-address-city\">${billing_address.city}, ${billing_address.region} ${billing_address.zip_code}<\/span><\/p>\n\t\t\t\t<\/li>\n\t\t\t<\/ol>\n\t\t\t<a href=\"#\" step=\"3\">change<\/a>\n\t\t<\/div>\n\n\t\t<div id=\"step-4-form\" class=\"form-step clearfix\" style=\"display:none\">\n\t\t\t<ol class=\"form-list clearfix\">\n\t\t\t\t<li class=\"clearfix\">\n\t\t\t\t\t<label for=\"sendit\" style=\"width: 360px;\">When would you like us to send this gift card?<\/label>\n\t\t\t\t\t<p class=\"clearfix\">\n\t\t\t\t\t\t<div><label for=\"sendit\" style=\"padding:0;margin:0\"><input type=\"radio\" name=\"sendit\" value=\"now\" checked \/>&nbsp;&nbsp;Now<\/label><\/div>\n\t\t\t\t\t\t<div class=\"picker-holder\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"sendit\" value=\"at\" data-stest=\"datepicker-radio\" \/>&nbsp;&nbsp;<input type=\"text\" class=\"datepicker\" name=\"senddate\" value=\"\" data-stest=\"datepicker-input\" \/>\n\t\t\t\t\t\t\t<img src=\"${mint.config('baseUrl')}\/images\/blank.gif\" width=\"15\" height=\"16\" style=\"background: url(${mint.config('baseUrl')}\/images\/cal.png) no-repeat 0 0;cursor: pointer;vertical-align: middle;\"\/>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/p>\n\t\t\t\t<\/li>\n\t\t\t<\/ol>\n\t\t<\/div>\n\n\t\t<ul class=\"but clearfix\">\n\t\t\t<li><a class=\"giftcard-continue mint-button\" href=\"#\" data-stest=\"giftcard-continue\">Continue<\/a><\/li>\n\t\t\t<li id=\"last-step-notification\" style=\"display:none\"><em>This is the last step, make sure to double check your information<\/em><\/li>\n\t\t<\/ul>\n\n\t<\/form>\n<\/div>\n<div class='giftcard-thankyou' style='display:none;' data-stest=\"giftcard-thankyou\">\n\tThank you for your purchase.  To purchase another gift card please <a href='#' class='reset-giftcard'>click here<\/a>.\n\t<div id=\"giftcard-code\" style=\"display:none;\"><\/div>\n<\/div>",
		"form" : "<form method=\"post\" action=\"${submitUrl}\" data-stest=\"mint-checkout-form\" class=\"mint-submit-block\">\n\t<ol class=\"customer-address-saved\" data-stest=\"customer-saved-address-info\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Shipping Address <a class=\"checkout-toggle-address\" href=\"javascript:\/\/\" data-stest='customer-address-toggle-form'>Edit<\/a><\/h2>\n\t\t<\/li>\n\t\t<li class=\"address-name\">${address.first_name} ${address.last_name}<\/li>\n\t\t<li class=\"address-street\">${address.street1} ${address.street2}<\/li>\n\t\t<li class=\"address-city\">${address.city}, ${address.region} ${address.zip_code}<\/li>\n\t<\/ol>\n\t<ol class=\"customer-address-field-holder\" data-stest=\"customer-address-field-holder\" style=\"{{if have_saved_address}}display:none{{\/if}}\">\n\t\t{{tmpl(address) mint.tmpl.customer.address}}\n\t<\/ol>\n\t<ol class=\"checkout-credit-description\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Payment Information <a class=\"checkout-toggle-payment\" href=\"javascript:\/\/\" data-stest='customer-toggle-payment'>Edit<\/a><\/h2>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-saved-number\">Credit Card # Ending With: <span>${last_four_cc}<\/span><\/li>\n\t<\/ol>\n\t<ol class=\"customer-credit-form-holder\" data-stest=\"customer-credit-form-holder\" style=\"{{if valid_cc!=0}}display:none{{\/if}}\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Payment Information <a class=\"checkout-toggle-payment\" href=\"javascript:\/\/\" data-stest='customer-toggle-payment'>Edit<\/a><\/h2>\n\t\t<\/li>\n\t\t<li>\n\t\t\t{{tmpl({type:'select', name:'cc-type', label: 'Card Type', value:'VI', options: {AE: 'American Express', VI: 'Visa', MC: 'MasterCard',DI:'Discover'} }) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t{{tmpl({type:'text', name:'cc-number', label: 'Card Number', value:'', maxlength: '16', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t\t<li>\n\t\t\t<select name=\"cc-expiration-month\" data-stest=\"cc-expiration-month\" class=\"validation[required]\" value='1'>\n\t\t\t\t<option value=\"1\">January (1)<\/option>\n\t\t\t\t<option value=\"2\">February (2)<\/option>\n\t\t\t\t<option value=\"3\">March (3)<\/option>\n\t\t\t\t<option value=\"4\">April (4)<\/option>\n\t\t\t\t<option value=\"5\">May (5)<\/option>\n\t\t\t\t<option value=\"6\">June (6)<\/option>\n\t\t\t\t<option value=\"7\">July (7)<\/option>\n\t\t\t\t<option value=\"8\">August (8)<\/option>\n\t\t\t\t<option value=\"9\">September (9)<\/option>\n\t\t\t\t<option value=\"10\">October (10)<\/option>\n\t\t\t\t<option value=\"11\">November (11)<\/option>\n\t\t\t\t<option value=\"12\">December (12)<\/option>\n\t\t\t<\/select>\n\t\t\t<select name=\"cc-expiration-year\"  data-stest=\"cc-expiration-year\" class=\"validation[required]\">\n\t\t\t\t{{each(i, y) years }}\n\t\t\t\t\t<option value=\"${i}\">${y}<\/option>\n\t\t\t\t{{\/each}}\n\t\t\t<\/select>\n\t\t<\/li>\n\t\t<li class=\"short\">\n\t\t\t{{tmpl({type:'text', name:'cc-cardcode', label: 'CVV Security Code', value:'', maxlength: '4', validation: ['required']}) mint.tmpl.partials.form.item}}\n\t\t<\/li>\n\t<\/ol>\n\n\n\t<ol class=\"checkout-billing-info\">\n\t\t<li class=\"\">\n\t\t\t<h2>Billing Information <a class=\"checkout-toggle-billing\" href=\"#\" data-stest='customer-toggle-billing'>Edit<\/a><\/h2>\n\t\t<\/li>\n\t\t<li class=\"billing-address-name\">${billing_address.first_name} ${billing_address.last_name}<\/li>\n\t\t<li class=\"billing-address-street\">${billing_address.street1} ${billing_address.street2}<\/li>\n\t\t<li class=\"billing-address-city\">${billing_address.city}, ${billing_address.region} ${billing_address.zip_code}<\/li>\n\t<\/ol>\n\n\t<ol class=\"checkout-billing-form\" data-stest=\"checkout-billing-form\" style=\"display:none\">\n\t\t{{tmpl(billing_address) mint.tmpl.customer.billing_address}}\n\t<\/ol>\n\t\n\t\n\t<ol class=\"checkout-credit-coupon\" data-stest=\"checkout-credit-coupon\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Discount Code<\/h2>\n\t\t<\/li>\n\t\t<li class=\"checkout-credit-coupon-input-holder clearfix\">\n\t\t\t<div>\n\t\t\t\t<input type=\"text\" data-stest=\"checkout-coupon-input\" name=\"coupon_code\" class=\"short\"\/>\n\t\t\t\t<button class=\"checkout-credit-coupon-button\" data-stest=\"checkout-coupon-button\">apply<\/button>\n\t\t\t<\/div>\n\t\t\t<div class=\"checkout-credit-coupon-last\" data-stest=\"checkout-credit-coupon-success-icon\"><\/div>\n\t\t<\/li>\n\t<\/ol>\n\t<ol class=\"checkout-giftcard\" data-stest=\"checkout-giftcard\">\n\t\t<li class=\"mint-checkout-section-title\">\n\t\t\t<h2>Gift Card<\/h2>\n\t\t<\/li>\n\t\t<li class=\"clearfix\">\n\t\t\t<div class=\"checkout-giftcard-redeem\" data-stest=\"checkout-giftcard-redeem\"><\/div>\n\t\t<\/li>\n\t<\/ol>\n\t<ol class=\"customer-credit-totals\">\n\t\t<li class=\"customer-credit-totals-subtotal clearfix\" data-stest=\"customer-credit-totals-subtotal\">\n\t\t\t<label>Subtotal:<\/label>\n\t\t\t<span>${subtotal_with_codeless_discount}<\/span>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-totals-shipping clearfix\" data-stest=\"customer-credit-totals-shipping\">\n\t\t\t<label>Shipping:<\/label>\n\t\t\t<span>FREE<\/span>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-totals-discount clearfix\" data-stest=\"customer-credit-totals-discount\" style=\"{{if discount=='0.00'}}display:none{{\/if}}\">\n\t\t\t<label><a href=\"javascript:\/\/\" class=\"customer-credit-totals-discount-reset\" data-stest=\"customer-credit-totals-discount-reset\">[Reset]<\/a> Discount:<\/label>\n\t\t\t<span>-${discount}<\/span>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-totals-tax clearfix\" data-stest=\"customer-credit-totals-tax\" style=\"{{if tax_total=='0.00'}}display:none{{\/if}}\">\n\t\t\t<label>Tax:<\/label>\n\t\t\t<span>${tax_total}<\/span>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-totals-credits clearfix\" data-stest=\"customer-credit-totals-credits\" style=\"{{if credits_used== 0}}display:none{{\/if}}\">\n\t\t\t<label>Credits (<span class=\"mint-credits-used\">${credits_used}<\/span>):<\/label>\n\t\t\t<span class=\"mint-balance-used\">-${balance_used}<\/span>\n\t\t<\/li>\n\t\t<li class=\"customer-credit-totals-total clearfix\" data-stest=\"customer-credit-totals-total\">\n\t\t\t<label>Total:<\/label>\n\t\t\t<span>$${total}<\/span>\n\t\t<\/li>\n\t<\/ol>\n\t<input type=\"hidden\" name=\"save_address\" value='{{if have_saved_address}}0{{else}}1{{\/if}}'\/>\n\t<input type=\"hidden\" name=\"save_billing_address\" value='{{if have_saved_billing_address}}0{{else}}1{{\/if}}'\/>\n\t<input type=\"hidden\" name=\"save_cc\" value='{{if valid_cc}}0{{else}}1{{\/if}}'\/>\n\t{{tmpl({buttons:buttons,cls:'mint-checkout-button-bar'}) mint.tmpl.partials.form.buttons.list}}\n\t<ul>\n\t\t<li class=\"mint-checkout-empty-cart\" style=\"display:none;\" data-stest=\"mint-checkout-empty-cart\">Your Cart is Empty<\/li>\n\t<\/ul>\n<\/form>"
	},
	"order" : {
		"last" : "\n\n<h4 data-stest=\"OrderNum\">Order #: ${id}<\/h4>\n<h4>Order Total: $<span data-stest='total'>${total}<\/span><\/h4>\n\n<h5>Shipping Address:<\/h5>\n<p>${shipping_address.first_name} ${shipping_address.last_name}<br\/>\n${shipping_address.street1}<br\/>\n{{if shipping_address.street2}}\n\t${shipping_address.street2}<br\/>\n{{\/if}}\n${shipping_address.city}, ${shipping_address.region} ${shipping_address.zip_code}<\/p>\n\t\t\n\t\t\t\t\n\t\t\t\n\t\n<!--\n\n\t<div class=\"col R\">\n\t\t<h1>Share With Friends<\/h1>\n\t\t<div class=\"share\">\n\t\t\t<ul class=\"clearfix\">\n\t\t\t\t{{each(i, product) products}}\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"L\">\n\t\t\t\t\t\t<img src=\"${product.images.thumbnail[0]['70x132']}\" \/>\n\t\t\t\t\t<\/div>\t\n\t\t\t\t\t<div class=\"L quote clearfix\">\n\t\t\t\t\t\t<p><textarea class=\"L\">I just bought the ${product.name} at ${store_url}!<\/textarea><br \/><\/p>\n\t\t\t\t\t\t<p><input type=\"submit\" class=\"R button-cta1\" value=\"tell your friends\" \/><\/p>\n\t\t\t\t\t<\/div>\t\n\t\t\t\t<\/li>\n\t\t\t\t{{\/each}}\n\t\t\t<\/ul>\t\n\t\t<\/div>\t\n\t<\/div>\t-->\n",
		"history" : "<li class=\"orders\" data-stest='order'>\n\t<ul class=\"order-entry clearfix\">\n\t\t<li class=\"order-information\" data-stest=\"order-information\">\n\t\t\t<h2>Order #: ${id}<\/h2>\n\t\t\t<dl>\n\t\t\t\t<dt>Order Date:<\/dt>\n\t\t\t\t<dd class=\"order-data-date\" data-stest='ordered_at'>${ordered_at}<\/dd>\n\t\t\t\t<dt>Total:<\/dt>\n\t\t\t\t<dd class=\"order-data-total\" data-stest='total'>$${total}<\/dd>\n\t\t\t\t<dt>Shipping Address:<\/dt>\n\t\t\t\t<dd class=\"order-data-address\" data-stest='shipping'>${shipping_address.first_name} ${shipping_address.last_name}<br\/>\n\t\t\t\t${shipping_address.street1}<br\/>\n\t\t\t\t{{if shipping_address.street2}}\n\t\t\t\t\t${shipping_address.street2}<br\/>\n\t\t\t\t{{\/if}}\n\t\t\t\t${shipping_address.city}, ${shipping_address.region}<br>\n\t\t\t\t${shipping_address.zip_code}\n\t\t\t\t<\/dd>\n\n\t\t\t\t{{if trackingNumber}}\n\t\t\t\t<dt>Tracking Number:<\/dt>\n\t\t\t\t<dd class=\"order-data-tracking\">\n\t\t\t\t\t<a data-stest='tracking' target=\"_blank\" href=\"http:\/\/www.streamliteinc.com\/en\/PackageTracking\/TrackMyPackage.aspx?refId=${trackingNumber}\" data-stest=\"${trackingNumber}\">${trackingNumber}<\/a>\n\t\t\t\t<\/dd>\n\t\t\t\t{{\/if}}\n\n\t\t\t\t<dt>Status:<\/dt>\n\t\t\t\t<dd class=\"order-data-status\" data-stest='status'>${status}<\/dd>\n\t\t\t<\/dl>\n\t\t<\/li>\n\t\t{{each(i, product) products}}\n\t\t<li data-stest='product'>\n\t\t\t<h3 data-stest='product_name'>${product.name}<\/h3>\n\t\t\t{{if product.images.small && product.images.small[0] && product.images.small[0]['214x290']}}\n\t\t\t<div><img width=\"214\" height=\"269\" src=\"${product.images.small[0]['214x290'].replace('http:','https:')}\"><\/div>\n\t\t\t{{\/if}}\n\t\t<\/li>\n\t\t{{\/each}}\n\t<\/ul>\n<\/li>"
	}
}
