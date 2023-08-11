!(function () {
    "use strict";
    var E,
        R,
        T,
        C,
        d,
        Y,
        B,
        F = {
            0x1532c: function (v, y, D) {
                D["d"](y, {
                    P: function () {
                        return N;
                    },
                });
                var N = { nn: 0x0, tn: 0x1, en: 0x2, rn: 0x3, $n: 0x4, un: 0x5, cn: 0x6, an: 0x7 };
            },
            0x1597a: function (v, y, D) {
                D["d"](y, {
                    C: function () {
                        return N;
                    },
                    W: function () {
                        return P;
                    },
                });
                var N = { fn: 0x0, sn: 0x1, ln: 0x2, _n: 0x3, En: 0x4 },
                    X = ["#2ecc71", "#5bbdff", "#ff0000", "white"],
                    P = function (I) {
                        return X[I];
                    };
            },
            0xe462: function (v, y, D) {
                D["d"](y, {
                    W3: function () {
                        return N;
                    },
                    mF: function () {
                        return M;
                    },
                    od: function () {
                        return p;
                    },
                    vt: function () {
                        return k;
                    },
                    _w: function () {
                        return l;
                    },
                });
                var N = { Sn: 0x0, In: 0x1, dn: 0x2, An: 0x3, Nn: 0x4, Cn: 0x5, Rn: 0x6 },
                    X = ["#757575", "#4263db", "#8b27ea", "#d424b4", "#e67e22", "#df1d41", "#f1c40f"],
                    P = ["#ffffff", "#809cff", "#b463ff", "#ff54e0", "#e67e22", "#ff4265", "#ffe063"],
                    I = ["Common", "Noteworthy", "Precious", "Magnificent", "Extraordinary", "Covert", "Artifact"],
                    A = [0x0, 0x1, 0x5, 0xa, 0x64, 0x1f4, 0x3e8],
                    M = function (U) {
                        return X[U];
                    },
                    p = function (U) {
                        return I[U];
                    },
                    k = function (U) {
                        return P[U];
                    },
                    l = function (U) {
                        return A[U];
                    };
            },
            0x13bce: function (v, y, D) {
                D["d"](y, {
                    Sc: function () {
                        return N;
                    },
                    Dx: function () {
                        return I;
                    },
                    nW: function () {
                        return A;
                    },
                });
                var N = { Sn: 0x0, Tn: 0x1, pn: 0x2, Mn: 0x3, Ln: 0x4, mn: 0x5 },
                    X = ["#95a5a6", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#d35400"],
                    P = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"],
                    I = function (M) {
                        return X[M];
                    },
                    A = function (M) {
                        return P[M];
                    };
            },
            0x93f9: function (v, y, D) {
                D["d"](y, {
                    q: function () {
                        return N;
                    },
                });
                var N = {
                    hn: 0x0,
                    gn: 0x1,
                    yn: 0x2,
                    Pn: 0x3,
                    Un: 0x4,
                    vn: 0x5,
                    wn: 0x6,
                    kn: 0x7,
                    Gn: 0x8,
                    Fn: 0x9,
                    Hn: 0xa,
                    Dn: 0xb,
                    Yn: 0xc,
                    xn: 0xd,
                    Vn: 0xe,
                    Bn: 0xf,
                    Kn: 0x10,
                    Wn: 0x11,
                    Xn: 0x12,
                    zn: 0x13,
                    jn: 0x14,
                    Zn: 0x15,
                    Qn: 0x16,
                    Jn: 0x17,
                    qn: 0x18,
                    nt: 0x19,
                    tt: 0x1a,
                    et: 0x1b,
                    rt: 0x1c,
                    ot: 0x1d,
                    it: 0x1e,
                    $t: 0x1f,
                    ut: 0x20,
                    ct: 0x21,
                    ft: 0x22,
                    st: 0x23,
                    lt: 0x24,
                    _t: 0x25,
                    Et: 0x26,
                    St: 0x27,
                    It: 0x28,
                    dt: 0x29,
                    At: 0x2a,
                    Nt: 0x2b,
                    Ct: 0x2c,
                    Rt: 0x2d,
                    Tt: 0x2e,
                    Lt: 0x2f,
                    Ot: 0x30,
                    ht: 0x31,
                    gt: 0x32,
                    yt: 0x33,
                    Ut: 0x34,
                    bt: 0x35,
                    wt: 0x36,
                    kt: 0x37,
                    Gt: 0x38,
                    Ft: 0x39,
                    Ht: 0x3a,
                    Dt: 0x3b,
                    Yt: 0x3c,
                    Vt: 0x3d,
                    Bt: 0x3e,
                    Kt: 0x3f,
                    Wt: 0x40,
                    Xt: 0x41,
                    jt: 0x42,
                    Zt: 0x43,
                    Jt: 0x44,
                    qt: 0x45,
                    ne: 0x46,
                    te: 0x47,
                    ee: 0x48,
                    re: 0x49,
                    oe: 0x4a,
                    ie: 0x4b,
                    $e: 0x4c,
                    ue: 0x4d,
                    ce: 0x4e,
                    ae: 0x4f,
                    fe: 0x50,
                    se: 0x51,
                    le: 0x52,
                    _e: 0x53,
                    Ee: 0x54,
                    Se: 0x55,
                    Ie: 0x56,
                    de: 0x2710,
                };
            },
            0xe33e: function (v, y, D) {
                D["d"](y, {
                    Qy: function () {
                        return P;
                    },
                    rO: function () {
                        return I;
                    },
                    wQ: function () {
                        return A;
                    },
                    r_: function () {
                        return M;
                    },
                    t7: function () {
                        return p;
                    },
                    D$: function () {
                        return k;
                    },
                    BS: function () {
                        return U;
                    },
                    ny: function () {
                        return q;
                    },
                    xt: function () {
                        return w;
                    },
                    Pt: function () {
                        return O;
                    },
                    uZ: function () {
                        return j;
                    },
                });
                var N = D(0x3978),
                    X = D(0x8a4),
                    P = function (h, g, W) {
                        return h() * (W - g) + g;
                    },
                    I = function (h, g) {
                        return (h = Math["ceil"](h)), (g = Math["floor"](g)), Math["floor"](Math["random"]() * (g - h + 0x1)) + h;
                    },
                    A = function (h, g) {
                        return ((h % g) + g) % g;
                    },
                    M = function (h, g, W) {
                        return g >= h ? Math["min"](g, h + W) : Math["max"](g, h - W);
                    },
                    p = function (h, g, W) {
                        return h + (W = Math["max"](0x0, Math["min"](0x1, W))) * (g - h);
                    },
                    k = function (h, g, W) {
                        return h < -Math["PI"] / 0x2 && g > Math["PI"] / 0x2 ? p(h + 0x2 * Math["PI"], g, W) - 0x2 * Math["PI"] : h > Math["PI"] / 0x2 && g < -Math["PI"] / 0x2 ? p(h, g + 0x2 * Math["PI"], W) - 0x2 * Math["PI"] : p(h, g, W);
                    },
                    U = function (h, g) {
                        return h < -Math["PI"] / 0x2 && g > Math["PI"] / 0x2 ? g - (h + 0x2 * Math["PI"]) : h > Math["PI"] / 0x2 && g < -Math["PI"] / 0x2 ? g + 0x2 * Math["PI"] - h : g - h;
                    },
                    q = function (h) {
                        return (0x0, N["XX"])(-Math["cos"](h["x"]) * Math["sin"](h["y"]), Math["sin"](h["x"]), -Math["cos"](h["x"]) * Math["cos"](h["y"]));
                    },
                    w = function (h, g, W, H) {
                        var x = new X["Vkp"]()["set"](h, 0x0, 0x0, 0x0, h, 0x0, 0x0, 0x0, 0x1),
                            K = new X["Vkp"]()["set"](Math["cos"](g), -Math["sin"](g), 0x0, Math["sin"](g), Math["cos"](g), 0x0, 0x0, 0x0, 0x1);
                        return new X["Vkp"]()["set"](0x1, 0x0, W, 0x0, 0x1, H, 0x0, 0x0, 0x1)["multiply"](K)["multiply"](x);
                    },
                    O = function (h) {
                        for (var g = h["toString"](0x10); g["length"] < 0x6; ) g = "0" + g;
                        return "#" + g;
                    },
                    j = function (h, g, W) {
                        return Math["min"](W, Math["max"](g, h));
                    };
            },
            0x86ec: function (v, y, D) {
                D["d"](y, {
                    m: function () {
                        return N;
                    },
                });
                var N = { Ae: 0x0, Ne: 0x1, Ce: 0x2, Re: 0x3, _n: 0x4, En: 0x5 };
            },
            0x12ccc: function (v, y, D) {
                D["d"](y, {
                    Mt: function () {
                        return X;
                    },
                    F1: function () {
                        return P;
                    },
                    YV: function () {
                        return I;
                    },
                    D_: function () {
                        return A;
                    },
                });
                var N = D(0x514d),
                    X = function () {
                        return (
                            (function (M) {
                                var p = (";\x20" + document["cookie"])["split"](";\x20" + M + "=");
                                if (0x2 === p["length"]) return p["pop"]()["split"](";")["shift"]();
                            })("_xst2") || ""
                        );
                    },
                    P = function (M) {
                        return Math["max"](0x1, Math["round"](N["Z"]["Te"] * M));
                    },
                    I = function (M) {
                        return 0x32;
                    },
                    A = function () {
                        return (0x3b9aca00 * Math["random"]())["toString"](0x24)["replace"](".", "-");
                    };
            },
            0x3978: function (v, y, D) {
                D["d"](y, {
                    XX: function () {
                        return N;
                    },
                    dg: function () {
                        return X;
                    },
                    r1: function () {
                        return P;
                    },
                    r8: function () {
                        return I;
                    },
                    $j: function () {
                        return A;
                    },
                    M4: function () {
                        return M;
                    },
                    Mt: function () {
                        return p;
                    },
                    BZ: function () {
                        return k;
                    },
                    _x: function () {
                        return q;
                    },
                    cz: function () {
                        return w;
                    },
                    qR: function () {
                        return O;
                    },
                    RJ: function () {
                        return j;
                    },
                });
                var N = function (h, g, W) {
                        return { x: h, y: g, z: W };
                    },
                    X = function (h) {
                        return N(h["x"], h["y"], h["z"]);
                    },
                    P = function (h, g) {
                        return h["x"] * g["x"] + h["y"] * g["y"] + h["z"] * g["z"];
                    },
                    I = function (h, g) {
                        var W = N(h["y"] * g["z"] - h["z"] * g["y"], h["z"] * g["x"] - h["x"] * g["z"], h["x"] * g["y"] - h["y"] * g["x"]);
                        (h["x"] = W["x"]), (h["y"] = W["y"]), (h["z"] = W["z"]);
                    },
                    A = function (h, g) {
                        (h["x"] += g["x"]), (h["y"] += g["y"]), (h["z"] += g["z"]);
                    },
                    M = function (h, g) {
                        (h["x"] -= g["x"]), (h["y"] -= g["y"]), (h["z"] -= g["z"]);
                    },
                    p = function (h, g) {
                        (h["x"] *= g), (h["y"] *= g), (h["z"] *= g);
                    },
                    k = function (h, g) {
                        (h["x"] /= g), (h["y"] /= g), (h["z"] /= g);
                    },
                    U = function (h) {
                        return h["x"] * h["x"] + h["y"] * h["y"] + h["z"] * h["z"];
                    },
                    q = function (h) {
                        return Math["sqrt"](U(h));
                    },
                    w = function (h) {
                        var g = q(h);
                        0x0 !== g && ((h["x"] /= g), (h["y"] /= g), (h["z"] /= g));
                    },
                    O = function (h, g) {
                        return Math["sqrt"](j(h, g));
                    },
                    j = function (h, g) {
                        var W = N(h["x"] - g["x"], h["y"] - g["y"], h["z"] - g["z"]);
                        return U(W);
                    };
            },
            0x11e39: function (v, y, D) {
                D["d"](y, {
                    Q: function () {
                        return N;
                    },
                });
                var N = { Me: 0x0, Le: 0x1, Oe: 0x2, me: 0x3, ge: 0x4, Pe: 0x5 };
            },
            0x13a4: function (v, y, D) {
                D["d"](y, {
                    no: function () {
                        return N;
                    },
                    Cp: function () {
                        return X;
                    },
                    DH: function () {
                        return I;
                    },
                    Zx: function () {
                        return A;
                    },
                    OA: function () {
                        return p;
                    },
                });
                var N = { Ue: 0x0, be: 0x1 },
                    X = { ve: 0x0, we: 0x1, ke: 0x2, Ge: 0x3, Fe: 0x4, He: 0x5, De: 0x6, Ye: 0x7, xe: 0x8 },
                    P = ["NONE", "COMBAT_ASSAULT_RIFLE", "TACTICAL_ASSAULT_RIFLE", "SURGE_ASSAULT_RIFLE", "BURST_SHOTGUN", "LIGHT_SUBMACHINE_GUN", "COMPACT_SUBMACHINE_GUN", "LIGHT_SNIPER_RIFLE", "HEAVY_SNIPER_RIFLE"],
                    I = function (k) {
                        return P[k];
                    },
                    A = { ve: 0x0, Ve: 0x1, Be: 0x2 },
                    M = ["NONE", "STRIKE_PISTOL", "MAGNUM_PISTOL"],
                    p = function (k) {
                        return M[k];
                    };
            },
            0x4022: function (v, y, D) {
                D["d"](y, {
                    t: function () {
                        return P;
                    },
                });
                var N = D(0x1219c),
                    X = D(0x2fda),
                    P = new ((function () {
                        function I() {
                            var M = this;
                            (this["_socket"] = (0x0, N["io"])()),
                                this["_socket"]["io"]["on"]("reconnect", function () {
                                    var p = X["h"]["getState"]();
                                    M["Ke"](p["game"]["We"]);
                                });
                        }
                        var A = I["prototype"];
                        return (
                            (A["Ke"] = function (M) {
                                this["_socket"]["emit"]("event", M);
                            }),
                            (A["disconnect"] = function () {
                                this["_socket"]["disconnect"]();
                            }),
                            I
                        );
                    })())();
            },
            0x10c41: function (v, y, D) {
                D["d"](y, {
                    H: function () {
                        return N;
                    },
                });
                var N = { Xe: 0x0, ze: 0x1, je: 0x2, Qe: 0x3, Je: 0x4, qe: 0x5, nr: 0x6, tr: 0x7, er: 0x8, rr: 0x9, En: 0xa };
            },
            0x514d: function (v, y, D) {
                var N = D(0x3978);
                y["Z"] = {
                    ir: 0x78,
                    $r: "undefined" == typeof navigator || void 0x0 === navigator["hardwareConcurrency"] ? 0x2 : navigator["hardwareConcurrency"],
                    ur: 0x10,
                    cr: "98f019cb-8997-482d-9961-566cb2ac6c7d",
                    ar: "localhost",
                    sr: 0xbb9,
                    lr: 0x640,
                    _r: 0x384,
                    Er: 0x20,
                    Sr: 0x8000,
                    Ir: 0.5,
                    Ar: 0x1f4,
                    Nr: 0xa,
                    Cr: 1.15,
                    Rr: (0x0, N["XX"])(0.35, 1.3, 0.35),
                    Tr: (0x0, N["XX"])(0.3, 1.3, 0.3),
                    pr: 0.77,
                    Mr: 1.35,
                    Lr: 0x7,
                    Or: 0x4,
                    mr: 0x2,
                    hr: 1.5,
                    gr: 0.3,
                    yr: 0.5,
                    Pr: 0.5,
                    Ur: 0x1,
                    vr: 0x4,
                    wr: 0.51,
                    kr: 0.2,
                    Gr: 0.4,
                    Fr: 0.5,
                    Hr: 0x32,
                    Dr: 0xbb8,
                    Yr: 0x1f4,
                    Vr: 0xfa,
                    Br: 0x64,
                    Kr: 0xfa,
                    Wr: 0x1f4,
                    Xr: 0x5,
                    zr: 0x5,
                    jr: 0x5,
                    Zr: 9.8,
                    Qr: 0xa,
                    Jr: 0x1,
                    qr: 0.04,
                    ro: 0xfa,
                    oo: 0x77b5fe,
                    $o: 0xff3045,
                    uo: 0x3938700,
                    co: 0x1,
                    ao: 0x3b9aca00,
                    Te: 0.1,
                    fo: 0xf,
                    so: 0x5,
                    lo: 0x64,
                    _o: 0x32,
                    Eo: 0x5,
                    So: 0x14,
                    Ao: 0xa,
                    No: 0x3e8,
                    Co: 0x3e8,
                    Ro: 0x1499700,
                    To: { po: 0x3, Mo: 0x12, Oo: /^[a-zA-Z0-9-_ ]+$/g, mo: /[^a-zA-Z0-9-_ ]/g },
                    ho: { po: 0x2, Mo: 0x4, Oo: /^[a-zA-Z0-9]+$/g, mo: /[^a-zA-Z0-9]/g },
                    yo: { po: 0x0, Mo: 0xc8, Oo: /^[^\r\n]*$/g, mo: /[\r\n]/g },
                    Po: { po: 0x1, Mo: 0x32, Oo: /^[a-zA-Z0-9-]+$/g, Uo: /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg|discord\.com\/invite|discordapp\.com\/invite)\/([a-zA-Z0-9-]{1,50})$/g },
                    bo: { vo: 0x1f4, wo: 0x1f4 },
                    ko: { po: 0.001, Mo: 0x28, Go: 0.001 },
                    Fo: { po: 0.001, Mo: 0x3, Go: 0.001 },
                    Ho: { po: 0.001, Mo: 0x3, Go: 0.001 },
                    Do: { po: 0x28, Mo: 0x64, Go: 0x1 },
                    Yo: { po: 0x28, Mo: 0x64, Go: 0x1 },
                    xo: { po: 0x0, Mo: 0x1, Go: 0.001 },
                    Vo: { po: 0x0, Mo: 0x1, Go: 0.001 },
                    Bo: { po: 0.1, Mo: 0x1, Go: 0.01 },
                    Ko: { po: 0x0, Mo: 0x1, Go: 0.01 },
                    Wo: { po: 0.001, Mo: 0xa, Go: 0.001 },
                    Xo: { po: 0.001, Mo: 0xa, Go: 0.001 },
                    zo: { po: 0x0, Mo: 0x1, Go: 0.01 },
                    jo: { po: 0x0, Mo: 0xa, Go: 0.01 },
                    Zo: { po: 0x0, Mo: 0xa, Go: 0.01 },
                    Qo: { po: 0x0, Mo: 0x1, Go: 0.01 },
                    Jo: !0x1,
                };
            },
            0x11d05: function (v, y, D) {
                D["d"](y, {
                    U_: function () {
                        return O;
                    },
                    Cl: function () {
                        return g;
                    },
                    Sd: function () {
                        return W;
                    },
                    p7: function () {
                        return H;
                    },
                    r7: function () {
                        return x;
                    },
                    r2: function () {
                        return K;
                    },
                    sF: function () {
                        return V;
                    },
                    tU: function () {
                        return J;
                    },
                    do: function () {
                        return G;
                    },
                });
                var X = D(0x155a6),
                    P = D(0x3df5),
                    M = D(0x156cd),
                    p = D["n"](M),
                    k = D(0x12a73),
                    U = D(0x1855e),
                    q = D(0x1498a),
                    w = {
                        authenticated: !0x1,
                        data: {
                            nickname: "Soldier",
                            has_nickname: !0x1,
                            creation_time: Date["now"](),
                            level: 0x1,
                            xp: 0x0,
                            gems: 0x0,
                            score: 0x0,
                            br: { total_games_played: 0x0, total_games_won: 0x0, total_kills: 0x0, total_deaths: 0x0, total_survival_time: 0x0, total_score: 0x0, matches: [] },
                            ctg: { total_games_played: 0x0, total_games_won: 0x0, total_kills: 0x0, total_deaths: 0x0, total_captures: 0x0, total_score: 0x0, matches: [] },
                            rewarded_ad_eligible: !0x1,
                            friend_status: U["lD"]["NONE"],
                            permissions: [],
                        },
                        qo: [],
                        ni: [],
                        ti: void 0x0,
                    },
                    O = (0x0, k["hg"])(
                        "account/refreshClanData",
                        (function () {
                            var Q = (0x0, P["Z"])(
                                p()["mark"](function z(r0, r1) {
                                    var r2, r3;
                                    return p()["wrap"](
                                        function (r4) {
                                            for (;;)
                                                switch ((r4["prev"] = r4["next"])) {
                                                    case 0x0:
                                                        return (
                                                            r1["dispatch"]((0x0, q["z_"])(!0x0)),
                                                            (r4["prev"] = 0x1),
                                                            (r4["next"] = 0x4),
                                                            fetch("/profile/myclan", { method: "post", headers: { Accept: "application/json", "Content-Type": "application/json" } })
                                                        );
                                                    case 0x4:
                                                        return (r2 = r4["sent"]), (r4["next"] = 0x7), r2["json"]();
                                                    case 0x7:
                                                        if (!(r3 = r4["sent"])["success"]) {
                                                            r4["next"] = 0xc;
                                                            break;
                                                        }
                                                        r1["dispatch"](L(r3["data"])), (r4["next"] = 0xd);
                                                        break;
                                                    case 0xc:
                                                        throw new Error("Failed\x20to\x20load\x20player\x20clan");
                                                    case 0xd:
                                                        r1["dispatch"]((0x0, q["gU"])(!0x0)), (r4["next"] = 0x14);
                                                        break;
                                                    case 0x10:
                                                        (r4["prev"] = 0x10), (r4["t0"] = r4["catch"](0x1)), console["error"]("Failed\x20to\x20load\x20player\x20clan"), r1["dispatch"]((0x0, q["gU"])(!0x1));
                                                    case 0x14:
                                                        return (r4["prev"] = 0x14), r1["dispatch"]((0x0, q["z_"])(!0x1)), r4["finish"](0x14);
                                                    case 0x17:
                                                    case "end":
                                                        return r4["stop"]();
                                                }
                                        },
                                        z,
                                        null,
                                        [[0x1, 0x10, 0x14, 0x17]]
                                    );
                                })
                            );
                            return function (r0, r1) {
                                return Q["apply"](this, arguments);
                            };
                        })()
                    ),
                    j = (0x0, k["oM"])({
                        name: "account",
                        initialState: w,
                        reducers: {
                            ei: function (Q, z) {
                                return (0x0, X["Z"])({}, Q, z["payload"]);
                            },
                            ri: function (Q, z) {
                                (Q["data"]["nickname"] = z["payload"]), (Q["data"]["has_nickname"] = !0x0);
                            },
                            oi: function (Q) {
                                (Q["data"]["nickname"] = "Soldier"), (Q["data"]["has_nickname"] = !0x1);
                            },
                            ii: function (Q, z) {
                                Q["data"]["gems"] += z["payload"];
                            },
                            $i: function (Q, z) {
                                Q["data"]["gems"] -= z["payload"];
                            },
                            ci: function (Q, z) {
                                Q["data"]["gems"] = z["payload"];
                            },
                            ai: function (Q, z) {
                                Q["qo"] = z["payload"];
                            },
                            fi: function (Q, z) {
                                Q["ni"] = z["payload"];
                            },
                            si: function (Q, z) {
                                Q["ti"] = z["payload"];
                            },
                        },
                    }),
                    h = j["actions"],
                    g = h["ei"],
                    W = h["ri"],
                    H = h["oi"],
                    x = h["ii"],
                    K = h["$i"],
                    V = h["ci"],
                    J = h["ai"],
                    G = h["fi"],
                    L = h["si"];
                y["ZP"] = j["reducer"];
            },
            0x919b: function (r0, r1, r2) {
                r2["d"](r1, {
                    V4: function () {
                        return rR;
                    },
                    U: function () {
                        return rB;
                    },
                    Mv: function () {
                        return rF;
                    },
                    AG: function () {
                        return rb;
                    },
                    jK: function () {
                        return rZ;
                    },
                    Wk: function () {
                        return rm;
                    },
                    lH: function () {
                        return rv;
                    },
                    bT: function () {
                        return ru;
                    },
                    iw: function () {
                        return ry;
                    },
                    t6: function () {
                        return rD;
                    },
                    IB: function () {
                        return rN;
                    },
                    Nk: function () {
                        return rX;
                    },
                    QK: function () {
                        return rf;
                    },
                    fK: function () {
                        return rP;
                    },
                    ye: function () {
                        return rI;
                    },
                    Sg: function () {
                        return rA;
                    },
                    Zy: function () {
                        return rM;
                    },
                    Q: function () {
                        return ro;
                    },
                    sq: function () {
                        return rt;
                    },
                    c1: function () {
                        return rp;
                    },
                    sy: function () {
                        return rk;
                    },
                    ad: function () {
                        return re;
                    },
                    Im: function () {
                        return rl;
                    },
                    qW: function () {
                        return rU;
                    },
                    eo: function () {
                        return rq;
                    },
                    iU: function () {
                        return rw;
                    },
                    r6: function () {
                        return rO;
                    },
                    Em: function () {
                        return rj;
                    },
                    Qj: function () {
                        return ri;
                    },
                    eR: function () {
                        return rh;
                    },
                    kW: function () {
                        return ra;
                    },
                    Ny: function () {
                        return rc;
                    },
                    Ow: function () {
                        return rS;
                    },
                    cL: function () {
                        return rg;
                    },
                    EP: function () {
                        return rW;
                    },
                    Ng: function () {
                        return rH;
                    },
                    Fh: function () {
                        return rx;
                    },
                    VN: function () {
                        return rK;
                    },
                    _y: function () {
                        return rV;
                    },
                    Vx: function () {
                        return rs;
                    },
                    zU: function () {
                        return rJ;
                    },
                    Wj: function () {
                        return rG;
                    },
                    Rz: function () {
                        return rL;
                    },
                    dr: function () {
                        return rQ;
                    },
                    wV: function () {
                        return rz;
                    },
                    he: function () {
                        return E0;
                    },
                    Ah: function () {
                        return E1;
                    },
                });
                var r3 = r2(0x12a73),
                    r4 = r2(0x877b),
                    r5 = r2(0x1532c),
                    r6 = r2(0x1597a),
                    r7 = r2(0xe462),
                    r8 = r2(0x13bce),
                    r9 = r2(0x93f9),
                    rr = r2(0x10c41),
                    rE = r2(0x514d),
                    rR = { li: 0x0, Me: 0x1 },
                    rT = [];
                (rT["length"] = 0x1b), rT["fill"]({ k: "", S: "", _i: r8["Sc"]["Sn"], Ei: r7["W3"]["Sn"], Si: r9["q"]["hn"], Ii: 0x0, di: 0x0 });
                var rC = {
                        We: rr["H"]["Xe"],
                        Ai: !0x1,
                        Ni: 0x64,
                        Ci: 0x64,
                        Ri: 0x64,
                        Ti: 0x0,
                        pi: !0x1,
                        Li: 0x0,
                        Oi: 0x0,
                        mi: [],
                        hi: {},
                        qo: rT,
                        gi: 0x0,
                        yi: { Si: r9["q"]["hn"], _i: r8["Sc"]["Sn"], Ii: 0x0, di: 0x0 },
                        Pi: { Si: r9["q"]["hn"], _i: r8["Sc"]["Sn"], Ui: "", bi: 0x0 },
                        vi: { Si: r9["q"]["hn"], _i: r8["Sc"]["Sn"], Ei: r7["W3"]["Sn"], Ui: "", k: "", Ii: 0x1 },
                        wi: [!0x1],
                        ki: r5["P"]["nn"],
                        Gi: !0x1,
                        Fi: "",
                        Hi: 0x0,
                        Di: 0x0,
                        Yi: 0x0,
                        xi: "Unknown",
                        Vi: -0x1,
                        Bi: "",
                        Ki: 0x0,
                        Wi: 0x0,
                        Xi: 0x0,
                        zi: 0x0,
                        ji: !0x1,
                        Zi: !0x1,
                        Qi: 0x1f4,
                        Ji: 0x1f4,
                        qi: rR["li"],
                        c$: 0x0,
                        f$: 0x0,
                        l$: 0x0,
                        _$: -0x1,
                        E$: -0x1,
                        S$: r6["C"]["fn"],
                        I$: "",
                        A$: (0x0, r4["ld"])(r4["ZP"]["BATTLE_ROYALE"]),
                        N$: !0x1,
                        C$: 0x0,
                        R$: "",
                        T$: !0x1,
                        p$: 0x0,
                        M$: "",
                        L$: 0x0,
                        O$: 0x1,
                        m$: [],
                    },
                    rd = (0x0, r3["oM"])({
                        name: "game",
                        initialState: rC,
                        reducers: {
                            h$: function (E2, E3) {
                                E2["We"] = E3["payload"];
                            },
                            g$: function (E2, E3) {
                                E2["Ai"] = E3["payload"];
                            },
                            P$: function (E2, E3) {
                                E2["zi"] = E3["payload"];
                            },
                            U$: function (E2, E3) {
                                E2["ki"] = E3["payload"];
                            },
                            b$: function (E2, E3) {
                                E2["C$"] = E3["payload"];
                            },
                            v$: function (E2, E3) {
                                E2["R$"] = E3["payload"];
                            },
                            w$: function (E2, E3) {
                                E2["T$"] = E3["payload"];
                            },
                            k$: function (E2, E3) {
                                E2["p$"] = E3["payload"];
                            },
                            G$: function (E2, E3) {
                                E2["M$"] = E3["payload"];
                            },
                            F$: function (E2, E3) {
                                E2["O$"] = E3["payload"];
                            },
                            H$: function (E2, E3) {
                                E2["L$"] = E3["payload"];
                            },
                            Y$: function (E2, E3) {
                                E2["mi"] = E3["payload"];
                            },
                            V$: function (E2, E3) {
                                E2["N$"] = E3["payload"];
                            },
                            B$: function (E2, E3) {
                                E2["S$"] = E3["payload"];
                            },
                            K$: function (E2, E3) {
                                E2["I$"] = E3["payload"];
                            },
                            X$: function (E2, E3) {
                                E2["E$"] = E3["payload"];
                            },
                            z$: function (E2, E3) {
                                E2["A$"] = E3["payload"];
                            },
                            j$: function (E2, E3) {
                                E2["_$"] = E3["payload"];
                            },
                            Z$: function (E2, E3) {
                                E2["f$"] = E3["payload"];
                            },
                            Q$: function (E2, E3) {
                                E2["l$"] = E3["payload"];
                            },
                            J$: function (E2, E3) {
                                E2["Xi"] = E3["payload"];
                            },
                            q$: function (E2, E3) {
                                E2["Wi"] = E3["payload"];
                            },
                            nu: function (E2, E3) {
                                E2["Gi"] = E3["payload"];
                            },
                            tu: function (E2, E3) {
                                (E2["c$"] = E3["payload"]["bi"]), (E2["qi"] = E3["payload"]["ru"]);
                            },
                            ou: function (E2, E3) {
                                (E2["Qi"] = E3["payload"]["x"]), (E2["Ji"] = E3["payload"]["y"]);
                            },
                            iu: function (E2, E3) {
                                E2["wi"] = E3["payload"];
                            },
                            $u: function (E2, E3) {
                                E2["Yi"] = E3["payload"];
                            },
                            uu: function (E2, E3) {
                                (E2["ji"] = E3["payload"]["ji"]), (E2["Zi"] = E3["payload"]["Zi"]);
                            },
                            cu: function (E2, E3) {
                                E2["Ki"] = E3["payload"];
                            },
                            au: function (E2, E3) {
                                E2["Hi"] = E3["payload"];
                            },
                            fu: function (E2, E3) {
                                E2["xi"] = E3["payload"];
                            },
                            su: function (E2, E3) {
                                E2["Vi"] = E3["payload"];
                            },
                            lu: function (E2, E3) {
                                E2["Bi"] = E3["payload"];
                            },
                            _u: function (E2, E3) {
                                E2["Di"] = E3["payload"];
                            },
                            Eu: function (E2, E3) {
                                E2["Fi"] = E3["payload"];
                            },
                            Su: function (E2, E3) {
                                E2["Pi"] = E3["payload"];
                            },
                            Iu: function (E2, E3) {
                                E2["vi"] = E3["payload"];
                            },
                            du: function (E2, E3) {
                                (E2["Ci"] = E3["payload"]["Ci"]), (E2["Ni"] = E3["payload"]["Ni"]), (E2["Ti"] = E3["payload"]["Ti"]), (E2["Ri"] = E3["payload"]["Ri"]);
                            },
                            Au: function (E2, E3) {
                                E2["pi"] = E3["payload"];
                            },
                            Nu: function (E2, E3) {
                                E2["Li"] = E3["payload"];
                            },
                            Cu: function (E2, E3) {
                                E2["Oi"] = E3["payload"];
                            },
                            Ru: function (E2, E3) {
                                var E4 = 0x0,
                                    E5 = 0x0,
                                    E6 = 0x0,
                                    E7 = 0x0,
                                    E8 = r6["C"]["_n"],
                                    E9 = "Player";
                                E3["payload"]["Tu"] in E2["hi"] &&
                                    ((E4 = E2["hi"][E3["payload"]["Tu"]]["pu"]),
                                    (E5 = E2["hi"][E3["payload"]["Tu"]]["Mu"]),
                                    (E6 = E2["hi"][E3["payload"]["Tu"]]["Lu"]),
                                    (E7 = E2["hi"][E3["payload"]["Tu"]]["Ou"]),
                                    (E8 = E2["hi"][E3["payload"]["Tu"]]["mu"]),
                                    (E9 = E2["hi"][E3["payload"]["Tu"]]["k"])),
                                    (E2["hi"][E3["payload"]["Tu"]] = {
                                        Tu: E3["payload"]["Tu"],
                                        mu: void 0x0 !== E3["payload"]["mu"] ? E3["payload"]["mu"] : E8,
                                        k: void 0x0 !== E3["payload"]["k"] ? E3["payload"]["k"] : E9,
                                        pu: void 0x0 !== E3["payload"]["pu"] ? E3["payload"]["pu"] : E4,
                                        Mu: void 0x0 !== E3["payload"]["Mu"] ? E3["payload"]["Mu"] : E5,
                                        Lu: void 0x0 !== E3["payload"]["Lu"] ? E3["payload"]["Lu"] : E6,
                                        Ou: void 0x0 !== E3["payload"]["Ou"] ? E3["payload"]["Ou"] : E7,
                                    });
                            },
                            gu: function (E2, E3) {
                                delete E2["hi"][E3["payload"]];
                            },
                            yu: function (E2, E3) {
                                if (E3["payload"]["Pu"] < 0x0 || E3["payload"]["Pu"] >= E2["qo"]["length"]) return E2;
                                E2["qo"][E3["payload"]["Pu"]] = E3["payload"]["Uu"];
                            },
                            bu: function (E2, E3) {
                                if (E3["payload"] < 0x0 || E3["payload"] >= rE["Z"]["Xr"]) return E2;
                                E2["gi"] = E3["payload"];
                            },
                            vu: function (E2, E3) {
                                E2["yi"] = E3["payload"];
                            },
                            wu: function (E2, E3) {
                                E2["m$"] = E3["payload"];
                            },
                        },
                    }),
                    rY = rd["actions"],
                    rB = rY["h$"],
                    rF = rY["g$"],
                    rb = rY["P$"],
                    rZ = rY["U$"],
                    rm = rY["b$"],
                    rv = rY["v$"],
                    ru = rY["w$"],
                    ry = rY["k$"],
                    rD = rY["G$"],
                    rN = rY["F$"],
                    rX = rY["H$"],
                    rf = rY["Y$"],
                    rP = rY["V$"],
                    rI = rY["B$"],
                    rA = rY["K$"],
                    rM = rY["X$"],
                    ro = rY["z$"],
                    rt = rY["j$"],
                    rp = rY["Z$"],
                    rk = rY["Q$"],
                    re = rY["J$"],
                    rl = rY["q$"],
                    rU = rY["nu"],
                    rq = rY["tu"],
                    rw = (rY["ou"], rY["iu"]),
                    rO = rY["$u"],
                    rj = rY["uu"],
                    ri = rY["cu"],
                    rh = rY["au"],
                    ra = rY["fu"],
                    rc = rY["su"],
                    rS = rY["lu"],
                    rg = rY["_u"],
                    rW = rY["Eu"],
                    rH = rY["Su"],
                    rx = rY["Iu"],
                    rK = rY["du"],
                    rV = rY["Au"],
                    rs = rY["Nu"],
                    rJ = rY["Cu"],
                    rG = rY["Ru"],
                    rL = rY["gu"],
                    rQ = rY["yu"],
                    rz = rY["bu"],
                    E0 = rY["vu"],
                    E1 = rY["wu"];
                r1["ZP"] = rd["reducer"];
            },
            0x99dd: function (q, J, r0) {
                r0["d"](J, {
                    hu: function () {
                        return r2;
                    },
                    ap: function () {
                        return r3;
                    },
                    kS: function () {
                        return r8;
                    },
                    E3: function () {
                        return r9;
                    },
                    Bj: function () {
                        return rn;
                    },
                    zR: function () {
                        return rB;
                    },
                    B3: function () {
                        return rF;
                    },
                    cp: function () {
                        return rb;
                    },
                    k3: function () {
                        return rZ;
                    },
                    Qx: function () {
                        return rm;
                    },
                    sS: function () {
                        return rv;
                    },
                    np: function () {
                        return ru;
                    },
                    oZ: function () {
                        return ry;
                    },
                    Lo: function () {
                        return rD;
                    },
                    L2: function () {
                        return rN;
                    },
                    tz: function () {
                        return rX;
                    },
                    UQ: function () {
                        return rf;
                    },
                    n6: function () {
                        return rP;
                    },
                    zb: function () {
                        return rI;
                    },
                    MO: function () {
                        return rA;
                    },
                    Hg: function () {
                        return rM;
                    },
                    TA: function () {
                        return ro;
                    },
                    W$: function () {
                        return rt;
                    },
                    cP: function () {
                        return rp;
                    },
                    Zw: function () {
                        return rk;
                    },
                    v4: function () {
                        return re;
                    },
                    Ze: function () {
                        return rl;
                    },
                    XY: function () {
                        return rU;
                    },
                    k_: function () {
                        return rq;
                    },
                    d7: function () {
                        return rw;
                    },
                    tJ: function () {
                        return rO;
                    },
                    $v: function () {
                        return rj;
                    },
                    mR: function () {
                        return ri;
                    },
                    cx: function () {
                        return rh;
                    },
                    RI: function () {
                        return ra;
                    },
                    EE: function () {
                        return rc;
                    },
                    eu: function () {
                        return rS;
                    },
                });
                var r1,
                    r2,
                    r3,
                    r4 = r0(0x155a6),
                    r5 = r0(0x12a73),
                    r6 = r0(0x13a4),
                    r7 = r0(0xf70a);
                !(function (rg) {
                    (rg[(rg["CROSS"] = 0x0)] = "CROSS"), (rg[(rg["CROSS_WITH_DOT"] = 0x1)] = "CROSS_WITH_DOT"), (rg[(rg["DOT"] = 0x2)] = "DOT"), (rg[(rg["NONE"] = 0x3)] = "NONE");
                })(r2 || (r2 = {})),
                    (function (rg) {
                        (rg["MOVE_LEFT"] = "MOVE_LEFT"),
                            (rg["MOVE_RIGHT"] = "MOVE_RIGHT"),
                            (rg["MOVE_FORWARD"] = "MOVE_FORWARD"),
                            (rg["MOVE_BACKWARD"] = "MOVE_BACKWARD"),
                            (rg["JUMP"] = "JUMP"),
                            (rg["SPRINT"] = "SPRINT"),
                            (rg["CROUCH"] = "CROUCH"),
                            (rg["DROP_CURRENT_ITEM"] = "DROP_CURRENT_ITEM"),
                            (rg["RELOAD"] = "RELOAD"),
                            (rg["TOGGLE_INVENTORY"] = "TOGGLE_INVENTORY"),
                            (rg["INVENTORY_HELPER_KEY"] = "INVENTORY_HELPER_KEY"),
                            (rg["MAP"] = "MAP"),
                            (rg["TOGGLE_MAP"] = "TOGGLE_MAP"),
                            (rg["SELECT_SLOT_1"] = "SELECT_SLOT_1"),
                            (rg["SELECT_SLOT_2"] = "SELECT_SLOT_2"),
                            (rg["SELECT_SLOT_3"] = "SELECT_SLOT_3"),
                            (rg["SELECT_SLOT_4"] = "SELECT_SLOT_4"),
                            (rg["SELECT_SLOT_5"] = "SELECT_SLOT_5"),
                            (rg["SELECT_NEXT_SLOT"] = "SELECT_NEXT_SLOT"),
                            (rg["SELECT_PREV_SLOT"] = "SELECT_PREV_SLOT"),
                            (rg["PRIMARY_ACTION"] = "PRIMARY_ACTION"),
                            (rg["SECONDARY_ACTION"] = "SECONDARY_ACTION"),
                            (rg["SECONDARY_ACTION_2"] = "SECONDARY_ACTION_2"),
                            (rg["INTERACT"] = "INTERACT"),
                            (rg["SPRAY"] = "SPRAY"),
                            (rg["TOGGLE_PLAYER_MENU"] = "TOGGLE_PLAYER_MENU");
                    })(r3 || (r3 = {}));
                for (
                    var r8 =
                            (((r1 = {})[r3["MOVE_LEFT"]] = { keyCode: r7["Z"]["A"], keyName: "KeyA" }),
                            (r1[r3["MOVE_RIGHT"]] = { keyCode: r7["Z"]["D"], keyName: "KeyD" }),
                            (r1[r3["MOVE_FORWARD"]] = { keyCode: r7["Z"]["W"], keyName: "KeyW" }),
                            (r1[r3["MOVE_BACKWARD"]] = { keyCode: r7["Z"]["S"], keyName: "KeyS" }),
                            (r1[r3["JUMP"]] = { keyCode: r7["Z"]["SPACE"], keyName: "Space" }),
                            (r1[r3["SPRINT"]] = { keyCode: r7["Z"]["SHIFT"], keyName: "Shift" }),
                            (r1[r3["CROUCH"]] = { keyCode: r7["Z"]["C"], keyName: "KeyC" }),
                            (r1[r3["DROP_CURRENT_ITEM"]] = { keyCode: r7["Z"]["G"], keyName: "KeyG" }),
                            (r1[r3["RELOAD"]] = { keyCode: r7["Z"]["R"], keyName: "KeyR" }),
                            (r1[r3["TOGGLE_INVENTORY"]] = { keyCode: r7["Z"]["X"], keyName: "KeyX" }),
                            (r1[r3["INVENTORY_HELPER_KEY"]] = { keyCode: r7["Z"]["SHIFT"], keyName: "Shift" }),
                            (r1[r3["MAP"]] = { keyCode: r7["Z"]["TAB"], keyName: "Tab" }),
                            (r1[r3["TOGGLE_MAP"]] = { keyCode: r7["Z"]["M"], keyName: "KeyM" }),
                            (r1[r3["SELECT_SLOT_1"]] = { keyCode: r7["Z"]["Number1"], keyName: "Digit1" }),
                            (r1[r3["SELECT_SLOT_2"]] = { keyCode: r7["Z"]["Number2"], keyName: "Digit2" }),
                            (r1[r3["SELECT_SLOT_3"]] = { keyCode: r7["Z"]["Number3"], keyName: "Digit3" }),
                            (r1[r3["SELECT_SLOT_4"]] = { keyCode: r7["Z"]["Number4"], keyName: "Digit4" }),
                            (r1[r3["SELECT_SLOT_5"]] = { keyCode: r7["Z"]["Number5"], keyName: "Digit5" }),
                            (r1[r3["PRIMARY_ACTION"]] = { keyCode: r7["Z"]["LEFT_MOUSE_BUTTON"], keyName: "LMB" }),
                            (r1[r3["SECONDARY_ACTION"]] = { keyCode: r7["Z"]["RIGHT_MOUSE_BUTTON"], keyName: "RMB" }),
                            (r1[r3["SECONDARY_ACTION_2"]] = { keyCode: r7["Z"]["F"], keyName: "KeyF" }),
                            (r1[r3["INTERACT"]] = { keyCode: r7["Z"]["E"], keyName: "KeyE" }),
                            (r1[r3["SPRAY"]] = { keyCode: r7["Z"]["T"], keyName: "KeyT" }),
                            (r1[r3["TOGGLE_PLAYER_MENU"]] = { keyCode: r7["Z"]["P"], keyName: "KeyP" }),
                            r1),
                        r9 = {
                            sensitivity: 7.5,
                            adsSensitivityMultiplier: 0.5628,
                            scopedSensitivityMultiplier: 0.1515,
                            renderScale: 0x1,
                            soundVolume: 0x1,
                            invertYAxis: !0x1,
                            invertMouseWheel: !0x1,
                            playerName: "Soldier",
                            keys: {},
                            crosshairWidth: 0.15,
                            crosshairLength: 0.8,
                            crosshairColor: "#ffffff",
                            crosshairHitColor: "#ff331c",
                            crosshairStyle: r2["CROSS"],
                            chatVisible: !0x0,
                            primaryLoadout: r6["Cp"]["we"],
                            secondaryLoadout: r6["Zx"]["Ve"],
                            terrainTextureURL: "",
                            sniperScopeImageURL: "",
                            sniperScopeImageOpacity: 0x1,
                            sniperScopeImageScaleX: 0x1,
                            sniperScopeImageScaleY: 0x1,
                            sniperScopeBackgroundColor: "#000000",
                            sniperScopeBackgroundOpacity: 0x1,
                            disableRewardedAdsPopup: !0x1,
                            showCrosshairWhenADS: !0x1,
                            hideModelWhenADS: !0x1,
                            generalFOV: 0x3c,
                            firstPersonModelFOV: 0x3c,
                            adsFOVMultiplier: 0x1,
                            runningFOVMultiplier: 0x1,
                            showBulletTracers: !0x0,
                            showAmmoShellsWhenFiring: !0x0,
                        },
                        rr = 0x0,
                        rE = Object["entries"](r8);
                    rr < rE["length"];
                    rr++
                ) {
                    var rR = rE[rr],
                        rT = rR[0x0],
                        rC = rR[0x1];
                    r9["keys"][rT] = (0x0, r4["Z"])({}, rC);
                }
                var rd = (0x0, r5["oM"])({
                        name: "settings",
                        initialState: r9,
                        reducers: {
                            ku: function (rg, rW) {
                                rg["disableRewardedAdsPopup"] = rW["payload"];
                            },
                            Gu: function (rg, rW) {
                                rg["sniperScopeBackgroundColor"] = rW["payload"];
                            },
                            Fu: function (rg, rW) {
                                rg["sniperScopeBackgroundOpacity"] = rW["payload"];
                            },
                            Hu: function (rg, rW) {
                                rg["sniperScopeImageScaleX"] = rW["payload"];
                            },
                            Du: function (rg, rW) {
                                rg["sniperScopeImageScaleY"] = rW["payload"];
                            },
                            Yu: function (rg, rW) {
                                rg["sniperScopeImageOpacity"] = rW["payload"];
                            },
                            xu: function (rg, rW) {
                                rg["sniperScopeImageURL"] = rW["payload"];
                            },
                            Vu: function (rg, rW) {
                                rg["terrainTextureURL"] = rW["payload"];
                            },
                            Bu: function (rg, rW) {
                                rW["payload"]["loadoutType"] === r6["no"]["Ue"]
                                    ? (rg["primaryLoadout"] = rW["payload"]["weaponType"])
                                    : rW["payload"]["loadoutType"] === r6["no"]["be"] && (rg["secondaryLoadout"] = rW["payload"]["weaponType"]);
                            },
                            Ku: function (rg, rW) {
                                rg["chatVisible"] = rW["payload"];
                            },
                            Wu: function (rg) {
                                for (var rW = 0x0, rH = Object["entries"](r8); rW < rH["length"]; rW++) {
                                    var rx = rH[rW],
                                        rK = rx[0x0],
                                        rV = rx[0x1];
                                    rg["keys"][rK] = (0x0, r4["Z"])({}, rV);
                                }
                            },
                            Xu: function (rg, rW) {
                                rg["keys"][rW["payload"]["keyType"]] = { keyCode: rW["payload"]["keyCode"], keyName: rW["payload"]["keyName"] };
                            },
                            zu: function (rg, rW) {
                                rg["invertYAxis"] = rW["payload"];
                            },
                            ju: function (rg, rW) {
                                rg["invertMouseWheel"] = rW["payload"];
                            },
                            Zu: function (rg, rW) {
                                rg["playerName"] = rW["payload"];
                            },
                            Qu: function (rg, rW) {
                                rg["sensitivity"] = rW["payload"];
                            },
                            Ju: function (rg, rW) {
                                rg["adsSensitivityMultiplier"] = rW["payload"];
                            },
                            qu: function (rg, rW) {
                                rg["scopedSensitivityMultiplier"] = rW["payload"];
                            },
                            tc: function (rg, rW) {
                                rg["renderScale"] = rW["payload"];
                            },
                            ec: function (rg, rW) {
                                rg["soundVolume"] = rW["payload"];
                            },
                            rc: function (rg, rW) {
                                rg["crosshairWidth"] = rW["payload"];
                            },
                            ic: function (rg, rW) {
                                rg["crosshairLength"] = rW["payload"];
                            },
                            $c: function (rg, rW) {
                                rg["crosshairColor"] = rW["payload"];
                            },
                            uc: function (rg, rW) {
                                rg["crosshairHitColor"] = rW["payload"];
                            },
                            cc: function (rg, rW) {
                                rg["crosshairStyle"] = rW["payload"];
                            },
                            ac: function (rg, rW) {
                                rg["showCrosshairWhenADS"] = rW["payload"];
                            },
                            fc: function (rg, rW) {
                                rg["hideModelWhenADS"] = rW["payload"];
                            },
                            sc: function (rg, rW) {
                                rg["generalFOV"] = rW["payload"];
                            },
                            lc: function (rg, rW) {
                                rg["firstPersonModelFOV"] = rW["payload"];
                            },
                            _c: function (rg, rW) {
                                rg["adsFOVMultiplier"] = rW["payload"];
                            },
                            Ec: function (rg, rW) {
                                rg["runningFOVMultiplier"] = rW["payload"];
                            },
                            Ic: function (rg, rW) {
                                rg["showBulletTracers"] = rW["payload"];
                            },
                            dc: function (rg, rW) {
                                rg["showAmmoShellsWhenFiring"] = rW["payload"];
                            },
                        },
                    }),
                    rY = rd["actions"],
                    rn = rY["ku"],
                    rB = rY["Gu"],
                    rF = rY["Fu"],
                    rb = rY["Hu"],
                    rZ = rY["Du"],
                    rm = rY["Yu"],
                    rv = rY["xu"],
                    ru = rY["Vu"],
                    ry = rY["Bu"],
                    rD = rY["Ku"],
                    rN = rY["Wu"],
                    rX = rY["Xu"],
                    rf = rY["zu"],
                    rP = rY["ju"],
                    rI = rY["Zu"],
                    rA = rY["Qu"],
                    rM = rY["Ju"],
                    ro = rY["qu"],
                    rt = rY["tc"],
                    rp = rY["ec"],
                    rk = rY["rc"],
                    re = rY["ic"],
                    rl = rY["$c"],
                    rU = rY["uc"],
                    rq = rY["cc"],
                    rw = rY["ac"],
                    rO = rY["fc"],
                    rj = rY["sc"],
                    ri = rY["lc"],
                    rh = rY["_c"],
                    ra = rY["Ec"],
                    rc = rY["Ic"],
                    rS = rY["dc"];
                J["ZP"] = rd["reducer"];
            },
            0x1498a: function (r0, r1, r2) {
                r2["d"](r1, {
                    O7: function () {
                        return rR;
                    },
                    b_: function () {
                        return rT;
                    },
                    w8: function () {
                        return rC;
                    },
                    ds: function () {
                        return rB;
                    },
                    tz: function () {
                        return rm;
                    },
                    pU: function () {
                        return rv;
                    },
                    DI: function () {
                        return ru;
                    },
                    vb: function () {
                        return ry;
                    },
                    i4: function () {
                        return rD;
                    },
                    Qt: function () {
                        return rN;
                    },
                    IX: function () {
                        return rX;
                    },
                    NU: function () {
                        return rf;
                    },
                    t1: function () {
                        return rP;
                    },
                    YH: function () {
                        return rI;
                    },
                    _l: function () {
                        return rA;
                    },
                    T8: function () {
                        return rM;
                    },
                    WN: function () {
                        return ro;
                    },
                    pE: function () {
                        return rt;
                    },
                    pe: function () {
                        return rp;
                    },
                    g1: function () {
                        return rk;
                    },
                    tb: function () {
                        return re;
                    },
                    sk: function () {
                        return rl;
                    },
                    qU: function () {
                        return rU;
                    },
                    DM: function () {
                        return rq;
                    },
                    qm: function () {
                        return rw;
                    },
                    tf: function () {
                        return rO;
                    },
                    c5: function () {
                        return rj;
                    },
                    P9: function () {
                        return ri;
                    },
                    Ch: function () {
                        return rh;
                    },
                    gH: function () {
                        return ra;
                    },
                    c1: function () {
                        return rc;
                    },
                    p1: function () {
                        return rS;
                    },
                    cy: function () {
                        return rg;
                    },
                    K6: function () {
                        return rW;
                    },
                    b3: function () {
                        return rH;
                    },
                    Ad: function () {
                        return rx;
                    },
                    Lk: function () {
                        return rK;
                    },
                    ly: function () {
                        return rV;
                    },
                    uT: function () {
                        return rs;
                    },
                    zh: function () {
                        return rJ;
                    },
                    Jm: function () {
                        return rG;
                    },
                    mb: function () {
                        return rL;
                    },
                    s2: function () {
                        return rQ;
                    },
                    YL: function () {
                        return rz;
                    },
                    x9: function () {
                        return E0;
                    },
                    CK: function () {
                        return E1;
                    },
                    k6: function () {
                        return E2;
                    },
                    Qb: function () {
                        return E3;
                    },
                    Mi: function () {
                        return E4;
                    },
                    NX: function () {
                        return E5;
                    },
                    G9: function () {
                        return E6;
                    },
                    Io: function () {
                        return E7;
                    },
                    G5: function () {
                        return E8;
                    },
                    wH: function () {
                        return E9;
                    },
                    nW: function () {
                        return Er;
                    },
                    SJ: function () {
                        return EE;
                    },
                    Y_: function () {
                        return ER;
                    },
                    oc: function () {
                        return ET;
                    },
                    gB: function () {
                        return EC;
                    },
                    v0: function () {
                        return Ed;
                    },
                    _p: function () {
                        return EY;
                    },
                    Pz: function () {
                        return EB;
                    },
                    On: function () {
                        return EF;
                    },
                    fx: function () {
                        return Eb;
                    },
                    G1: function () {
                        return EZ;
                    },
                    SD: function () {
                        return Em;
                    },
                    z_: function () {
                        return Ev;
                    },
                    gU: function () {
                        return Eu;
                    },
                });
                var r3 = r2(0x155a6),
                    r4 = r2(0x3df5),
                    r5 = r2(0x156cd),
                    r6 = r2["n"](r5),
                    r7 = r2(0x12a73),
                    r8 = r2(0x11e39),
                    r9 = r2(0x86ec),
                    rr = r2(0x1855e),
                    rE = r2(0x12ccc),
                    rR = { ve: 0x0, Ac: 0x1, Nc: 0x2, Cc: 0x3, Rc: 0x4 },
                    rT = { ve: 0x0, Xe: 0x1, ze: 0x2 },
                    rC = {
                        Tc: 0x0,
                        Mc: 0x1,
                        Lc: 0x2,
                        Oc: 0x3,
                        mc: 0x4,
                        hc: 0x5,
                        gc: 0x6,
                        yc: 0x7,
                        Pc: 0x8,
                        Uc: 0x9,
                        bc: 0xa,
                        vc: 0xb,
                        wc: 0xc,
                        kc: 0xd,
                        Gc: 0xe,
                        Fc: 0xf,
                        Hc: 0x10,
                        Dc: 0x11,
                        Yc: 0x12,
                        xc: 0x13,
                        Vc: 0x14,
                        Bc: 0x15,
                        Kc: 0x16,
                        Wc: 0x17,
                        Xc: 0x18,
                    },
                    rd = { search: "", sort: rr["iU"]["MOST_RECENT"], item_types: [], item_slots: [], item_tiers: [] },
                    rY = {
                        zc: !0x0,
                        jc: "localhost",
                        Zc: 0xbba,
                        Qc: r9["m"]["Ae"],
                        Jc: r8["Q"]["Me"],
                        qc: rT["ve"],
                        na: [],
                        ta: !0x1,
                        ea: "",
                        ra: [],
                        oa: [],
                        ia: !0x1,
                        $a: !0x1,
                        ua: "Sorry,\x20server\x20connection\x20failed\x20:(",
                        ca: 0x0,
                        aa: !0x1,
                        fa: "",
                        sa: 0x1,
                        la: window["innerWidth"],
                        _a: window["innerHeight"],
                        Ea: void 0x0,
                        Sa: !0x1,
                        Ia: !0x1,
                        da: !0x1,
                        Aa: !0x1,
                        Na: !0x1,
                        Ca: [],
                        Ra: !0x1,
                        Ta: !0x0,
                        pa: !0x0,
                        Ma: rR["ve"],
                        La: !0x0,
                        Oa: [],
                        ma: [],
                        ha: rd,
                        ga: !0x1,
                        ya: { Pa: !0x1, data: { i: 0x0, m: 0x0, Ua: "" } },
                        ba: !0x1,
                        va: !0x0,
                        wa: !0x1,
                        ka: !0x0,
                        Ga: void 0x0,
                    },
                    rB = (0x0, r7["hg"])(
                        "ui/refreshOtherClanData",
                        (function () {
                            var EX = (0x0, r4["Z"])(
                                r6()["mark"](function Ef(EP, EI) {
                                    var EA, EM;
                                    return r6()["wrap"](
                                        function (Eo) {
                                            for (;;)
                                                switch ((Eo["prev"] = Eo["next"])) {
                                                    case 0x0:
                                                        return (
                                                            EI["dispatch"](Ey(!0x0)),
                                                            (Eo["prev"] = 0x1),
                                                            (Eo["next"] = 0x4),
                                                            fetch("/clan/info/full", {
                                                                method: "post",
                                                                headers: { Accept: "application/json", "Content-Type": "application/json", "CSRF-Token": (0x0, rE["Mt"])() },
                                                                body: JSON["stringify"]({ clan_tag: EP }),
                                                            })
                                                        );
                                                    case 0x4:
                                                        return (EA = Eo["sent"]), (Eo["next"] = 0x7), EA["json"]();
                                                    case 0x7:
                                                        if (!(EM = Eo["sent"])["success"]) {
                                                            Eo["next"] = 0xc;
                                                            break;
                                                        }
                                                        EI["dispatch"](EN(EM["data"])), (Eo["next"] = 0xd);
                                                        break;
                                                    case 0xc:
                                                        throw new Error("Failed\x20to\x20load\x20clan\x20data");
                                                    case 0xd:
                                                        EI["dispatch"](ED(!0x0)), (Eo["next"] = 0x14);
                                                        break;
                                                    case 0x10:
                                                        (Eo["prev"] = 0x10), (Eo["t0"] = Eo["catch"](0x1)), console["error"]("Failed\x20to\x20load\x20clan\x20data"), EI["dispatch"](ED(!0x1));
                                                    case 0x14:
                                                        return (Eo["prev"] = 0x14), EI["dispatch"](Ey(!0x1)), Eo["finish"](0x14);
                                                    case 0x17:
                                                    case "end":
                                                        return Eo["stop"]();
                                                }
                                        },
                                        Ef,
                                        null,
                                        [[0x1, 0x10, 0x14, 0x17]]
                                    );
                                })
                            );
                            return function (EP, EI) {
                                return EX["apply"](this, arguments);
                            };
                        })()
                    ),
                    rF = 0x0,
                    rb = (0x0, r7["oM"])({
                        name: "ui",
                        initialState: rY,
                        reducers: {
                            Fa: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Mc"] }, Ef["payload"]));
                            },
                            Ha: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Tc"] }, Ef["payload"]));
                            },
                            Da: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Lc"] }, Ef["payload"]));
                            },
                            Ya: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Oc"] }, Ef["payload"]));
                            },
                            xa: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["mc"] }, Ef["payload"]));
                            },
                            Va: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["hc"] }, Ef["payload"]));
                            },
                            Ba: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["gc"] }, Ef["payload"]));
                            },
                            Ka: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["yc"] }, Ef["payload"]));
                            },
                            Wa: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Pc"] }, Ef["payload"]));
                            },
                            Xa: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Uc"] }, Ef["payload"]));
                            },
                            za: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["bc"] }, Ef["payload"]));
                            },
                            ja: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["vc"] }, Ef["payload"]));
                            },
                            Za: function (EX) {
                                EX["Oa"]["push"]({ Si: rC["kc"] });
                            },
                            Qa: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["wc"] }, Ef["payload"]));
                            },
                            Ja: function (EX) {
                                EX["Oa"]["push"]({ Si: rC["Gc"] });
                            },
                            qa: function (EX) {
                                EX["Oa"]["push"]({ Si: rC["Fc"] });
                            },
                            nf: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Hc"] }, Ef["payload"]));
                            },
                            ef: function (EX) {
                                EX["Oa"]["push"]({ Si: rC["Dc"] });
                            },
                            rf: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Yc"] }, Ef["payload"]));
                            },
                            if: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["xc"] }, Ef["payload"]));
                            },
                            $f: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Vc"] }, Ef["payload"]));
                            },
                            uf: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Bc"] }, Ef["payload"]));
                            },
                            cf: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Kc"] }, Ef["payload"]));
                            },
                            af: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Wc"] }, Ef["payload"]));
                            },
                            ff: function (EX, Ef) {
                                EX["Oa"]["push"]((0x0, r3["Z"])({ Si: rC["Xc"] }, Ef["payload"]));
                            },
                            sf: function (EX) {
                                EX["Oa"]["length"] > 0x0 && EX["Oa"]["pop"]();
                            },
                            lf: function (EX) {
                                EX["Oa"] = [];
                            },
                            _f: function (EX, Ef) {
                                EX["pa"] = Ef["payload"];
                            },
                            Ef: function (EX, Ef) {
                                EX["Ma"] = Ef["payload"];
                            },
                            Sf: function (EX, Ef) {
                                EX["La"] = Ef["payload"];
                            },
                            If: function (EX, Ef) {
                                EX["Ta"] = Ef["payload"];
                            },
                            df: function (EX, Ef) {
                                EX["Ra"] = Ef["payload"];
                            },
                            Af: function (EX, Ef) {
                                EX["Na"] = Ef["payload"];
                            },
                            Nf: function (EX, Ef) {
                                EX["Aa"] = Ef["payload"];
                            },
                            Cf: function (EX, Ef) {
                                EX["Ia"] = Ef["payload"];
                            },
                            Rf: function (EX, Ef) {
                                EX["da"] = Ef["payload"];
                            },
                            Tf: function (EX, Ef) {
                                EX["Sa"] = Ef["payload"];
                            },
                            pf: function (EX, Ef) {
                                EX["Ea"] = Ef["payload"];
                            },
                            Mf: function (EX, Ef) {
                                (EX["sa"] = Ef["payload"]["scale"]), (EX["la"] = Ef["payload"]["width"]), (EX["_a"] = Ef["payload"]["height"]);
                            },
                            Lf: function (EX, Ef) {
                                EX["Qc"] = Ef["payload"];
                            },
                            Of: function (EX, Ef) {
                                (EX["aa"] = !0x0), (EX["fa"] = Ef["payload"]);
                            },
                            mf: function (EX, Ef) {
                                EX["aa"] = !0x1;
                            },
                            hf: function (EX, Ef) {
                                EX["ca"] = Ef["payload"];
                            },
                            gf: function (EX, Ef) {
                                EX["ua"] = Ef["payload"];
                            },
                            yf: function (EX, Ef) {
                                (EX["jc"] = Ef["payload"]), (EX["zc"] = !0x1);
                            },
                            Pf: function (EX, Ef) {
                                (EX["Zc"] = Ef["payload"]), (EX["zc"] = !0x1);
                            },
                            Uf: function (EX, Ef) {
                                EX["Jc"] = Ef["payload"];
                            },
                            bf: function (EX, Ef) {
                                EX["qc"] = Ef["payload"];
                            },
                            vf: function (EX, Ef) {
                                EX["ta"] = Ef["payload"];
                            },
                            wf: function (EX, Ef) {
                                EX["ea"] = Ef["payload"];
                            },
                            kf: function (EX, Ef) {
                                EX["na"]["push"](Ef["payload"]), EX["na"]["length"] > 0x64 && EX["na"]["shift"]();
                            },
                            Gf: function (EX, Ef) {
                                (Ef["payload"]["Tu"] = rF++), EX["ra"]["push"](Ef["payload"]), EX["ra"]["length"] > 0xa && EX["ra"]["shift"]();
                            },
                            Ff: function (EX) {
                                EX["ra"]["shift"]();
                            },
                            Hf: function (EX, Ef) {
                                EX["Ca"]["push"](Ef["payload"]), EX["Ca"]["length"] > 0xa && EX["Ca"]["shift"]();
                            },
                            Df: function (EX) {
                                EX["Ca"]["shift"]();
                            },
                            Yf: function (EX, Ef) {
                                EX["$a"] = Ef["payload"];
                            },
                            xf: function (EX, Ef) {
                                EX["oa"]["push"](Ef["payload"]);
                            },
                            Vf: function (EX) {
                                EX["oa"]["shift"]();
                            },
                            Bf: function (EX, Ef) {
                                EX["ia"] = Ef["payload"];
                            },
                            Kf: function (EX, Ef) {
                                EX["ma"] = Ef["payload"];
                            },
                            Wf: function (EX, Ef) {
                                EX["ha"] = Ef["payload"];
                            },
                            Xf: function (EX) {
                                EX["ha"] = rd;
                            },
                            zf: function (EX, Ef) {
                                EX["ga"] = Ef["payload"];
                            },
                            jf: function (EX, Ef) {
                                EX["ya"] = { Pa: !0x0, data: Ef["payload"] };
                            },
                            Zf: function (EX) {
                                EX["ya"] = { Pa: !0x1, data: void 0x0 };
                            },
                            Qf: function (EX, Ef) {
                                EX["ba"] = Ef["payload"];
                            },
                            Jf: function (EX, Ef) {
                                EX["va"] = Ef["payload"];
                            },
                            qf: function (EX, Ef) {
                                EX["wa"] = Ef["payload"];
                            },
                            ns: function (EX, Ef) {
                                EX["ka"] = Ef["payload"];
                            },
                            ts: function (EX, Ef) {
                                EX["Ga"] = Ef["payload"];
                            },
                        },
                    }),
                    rZ = rb["actions"],
                    rm = rZ["Fa"],
                    rv = rZ["Ha"],
                    ru = rZ["Da"],
                    ry = rZ["Ya"],
                    rD = rZ["xa"],
                    rN = rZ["Va"],
                    rX = rZ["Ba"],
                    rf = rZ["Ka"],
                    rP = rZ["Wa"],
                    rI = rZ["Xa"],
                    rA = rZ["za"],
                    rM = rZ["ja"],
                    ro = rZ["Za"],
                    rt = rZ["Qa"],
                    rp = rZ["Ja"],
                    rk = rZ["qa"],
                    re = rZ["nf"],
                    rl = rZ["ef"],
                    rU = rZ["rf"],
                    rq = rZ["if"],
                    rw = rZ["$f"],
                    rO = rZ["uf"],
                    rj = rZ["cf"],
                    ri = rZ["af"],
                    rh = rZ["ff"],
                    ra = rZ["sf"],
                    rc = rZ["lf"],
                    rS = rZ["_f"],
                    rg = rZ["Ef"],
                    rW = rZ["Sf"],
                    rH = (rZ["If"], rZ["df"]),
                    rx = rZ["Af"],
                    rK = rZ["Nf"],
                    rV = rZ["Cf"],
                    rs = rZ["Rf"],
                    rJ = rZ["Tf"],
                    rG = rZ["pf"],
                    rL = rZ["Mf"],
                    rQ = rZ["Lf"],
                    rz = rZ["Of"],
                    E0 = rZ["mf"],
                    E1 = rZ["hf"],
                    E2 = rZ["gf"],
                    E3 = (rZ["yf"], rZ["Pf"], rZ["Uf"]),
                    E4 = rZ["bf"],
                    E5 = rZ["vf"],
                    E6 = rZ["wf"],
                    E7 = rZ["kf"],
                    E8 = rZ["Gf"],
                    E9 = rZ["Ff"],
                    Er = rZ["Hf"],
                    EE = rZ["Df"],
                    ER = rZ["Yf"],
                    ET = rZ["xf"],
                    EC = rZ["Vf"],
                    Ed = rZ["Bf"],
                    EY = rZ["Kf"],
                    EB = rZ["Wf"],
                    EF = rZ["Xf"],
                    Eb = rZ["zf"],
                    EZ = rZ["jf"],
                    Em = rZ["Zf"],
                    Ev = rZ["Qf"],
                    Eu = rZ["Jf"],
                    Ey = rZ["qf"],
                    ED = rZ["ns"],
                    EN = rZ["ts"];
                r1["ZP"] = rb["reducer"];
            },
            0xf70a: function (v, y) {
                y["Z"] = {
                    W: 0x57,
                    A: 0x41,
                    S: 0x53,
                    D: 0x44,
                    C: 0x43,
                    E: 0x45,
                    Q: 0x51,
                    F: 0x46,
                    G: 0x47,
                    P: 0x50,
                    R: 0x52,
                    T: 0x54,
                    X: 0x58,
                    M: 0x4d,
                    TAB: 0x9,
                    ALT: 0x12,
                    Number1: 0x31,
                    Number2: 0x32,
                    Number3: 0x33,
                    Number4: 0x34,
                    Number5: 0x35,
                    Number6: 0x36,
                    SPACE: 0x20,
                    SHIFT: 0x10,
                    CTRL: 0x11,
                    EQUALS: 0xbb,
                    ENTER: 0xd,
                    0x0: 0x30,
                    ESC: 0x1b,
                    LEFT_MOUSE_BUTTON: 0x0,
                    RIGHT_MOUSE_BUTTON: -0x2,
                    F9: 0x78,
                    F10: 0x79,
                };
            },
            0x2fda: function (v, y, D) {
                D["d"](y, {
                    tJ: function () {
                        return r0;
                    },
                    Dj: function () {
                        return z;
                    },
                    a1: function () {
                        return r1;
                    },
                    h: function () {
                        return Q;
                    },
                    TL: function () {
                        return r2;
                    },
                    CG: function () {
                        return r3;
                    },
                });
                var X = D(0x3df5),
                    P = D(0x155a6),
                    k = D(0x156cd),
                    U = D["n"](k),
                    q = D(0x3df1),
                    w = D(0x1498a),
                    O = D(0x99dd),
                    j = D(0x919b),
                    h = D(0x11d05),
                    g = (0x0, q["UY"])({ ui: w["ZP"], settings: O["ZP"], game: j["ZP"], account: h["ZP"] }),
                    W = D(0x12a73),
                    H = D(0x15a24),
                    x = D(0x12bbe),
                    K = D(0x9b18),
                    V = {
                        0x2: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { invertYAxis: !0x1 }) });
                        },
                        0x3: function (r4) {
                            for (var r5 = (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { invertMouseWheel: !0x1, keys: {} }) }), r6 = 0x0, r7 = Object["entries"](O["kS"]); r6 < r7["length"]; r6++) {
                                var r8 = r7[r6],
                                    r9 = r8[0x0],
                                    rr = r8[0x1];
                                r5["settings"]["keys"][r9] = (0x0, P["Z"])({}, rr);
                            }
                            return r5;
                        },
                        0x4: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { renderScale: 0x1 }) });
                        },
                        0x5: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { soundVolume: 0x1 }) });
                        },
                        0x6: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (
                                delete r5["settings"]["keys"][O["ap"]["SELECT_NEXT_SLOT"]],
                                delete r5["settings"]["keys"][O["ap"]["SELECT_PREV_SLOT"]],
                                (r5["settings"]["keys"][O["ap"]["INTERACT"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["INTERACT"]])),
                                r5
                            );
                        },
                        0x7: function (r4) {
                            return (0x0, P["Z"])({}, r4, {
                                settings: (0x0, P["Z"])({}, r4["settings"], {
                                    crosshairWidth: O["E3"]["crosshairWidth"],
                                    crosshairLength: O["E3"]["crosshairLength"],
                                    crosshairColor: O["E3"]["crosshairColor"],
                                    crosshairHitColor: O["E3"]["crosshairHitColor"],
                                    crosshairStyle: O["E3"]["crosshairStyle"],
                                }),
                            });
                        },
                        0x8: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { chatVisible: O["E3"]["chatVisible"] }) });
                        },
                        0x9: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { primaryLoadout: O["E3"]["primaryLoadout"], secondaryLoadout: O["E3"]["secondaryLoadout"] }) });
                        },
                        0xa: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { terrainTextureURL: O["E3"]["terrainTextureURL"] }) });
                        },
                        0xb: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (r5["settings"]["keys"][O["ap"]["SPRAY"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["SPRAY"]])), r5;
                        },
                        0xc: function (r4) {
                            return (0x0, P["Z"])({}, r4, {
                                settings: (0x0, P["Z"])({}, r4["settings"], {
                                    sniperScopeImageURL: O["E3"]["sniperScopeImageURL"],
                                    sniperScopeImageOpacity: O["E3"]["sniperScopeImageOpacity"],
                                    sniperScopeImageScaleX: O["E3"]["sniperScopeImageScaleX"],
                                    sniperScopeImageScaleY: O["E3"]["sniperScopeImageScaleY"],
                                    sniperScopeBackgroundColor: O["E3"]["sniperScopeBackgroundColor"],
                                    sniperScopeBackgroundOpacity: O["E3"]["sniperScopeBackgroundOpacity"],
                                    adsSensitivityMultiplier: O["E3"]["adsSensitivityMultiplier"],
                                    scopedSensitivityMultiplier: O["E3"]["scopedSensitivityMultiplier"],
                                }),
                            });
                        },
                        0xd: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (r5["settings"]["keys"][O["ap"]["INVENTORY_HELPER_KEY"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["INVENTORY_HELPER_KEY"]])), r5;
                        },
                        0xe: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { primaryLoadout: r4["settings"]["primaryLoadout"] + 0x1, secondaryLoadout: r4["settings"]["secondaryLoadout"] + 0x1 }) });
                        },
                        0xf: function (r4) {
                            return (0x0, P["Z"])({}, r4, { settings: (0x0, P["Z"])({}, r4["settings"], { disableRewardedAdsPopup: O["E3"]["disableRewardedAdsPopup"] }) });
                        },
                        0x10: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (
                                (r5["settings"]["keys"][O["ap"]["TOGGLE_PLAYER_MENU"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["TOGGLE_PLAYER_MENU"]])),
                                (r5["settings"]["keys"][O["ap"]["INVENTORY_HELPER_KEY"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["INVENTORY_HELPER_KEY"]])),
                                r5
                            );
                        },
                        0x11: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (r5["settings"]["keys"][O["ap"]["INVENTORY_HELPER_KEY"]] = (0x0, P["Z"])({}, O["kS"][O["ap"]["INVENTORY_HELPER_KEY"]])), (r5["settings"]["terrainTextureURL"] = O["E3"]["terrainTextureURL"]), r5;
                        },
                        0x12: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (r5["settings"]["terrainTextureURL"] = O["E3"]["terrainTextureURL"]), r5;
                        },
                        0x13: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (
                                (r5["settings"]["showCrosshairWhenADS"] = O["E3"]["showCrosshairWhenADS"]),
                                (r5["settings"]["hideModelWhenADS"] = O["E3"]["hideModelWhenADS"]),
                                (r5["settings"]["generalFOV"] = O["E3"]["generalFOV"]),
                                (r5["settings"]["firstPersonModelFOV"] = O["E3"]["firstPersonModelFOV"]),
                                (r5["settings"]["adsFOVMultiplier"] = O["E3"]["adsFOVMultiplier"]),
                                (r5["settings"]["runningFOVMultiplier"] = O["E3"]["runningFOVMultiplier"]),
                                r5
                            );
                        },
                        0x14: function (r4) {
                            var r5 = (0x0, P["Z"])({}, r4);
                            return (r5["settings"]["showBulletTracers"] = O["E3"]["showBulletTracers"]), (r5["settings"]["showAmmoShellsWhenFiring"] = O["E3"]["showAmmoShellsWhenFiring"]), r5;
                        },
                    },
                    J = { key: "root", storage: x["Z"], version: 0x14, whitelist: ["settings"], migrate: (0x0, H["yv"])(V, { debug: !0x1 }) },
                    G = (0x0, H["OJ"])(J, g),
                    Q = (0x0, W["xC"])({ reducer: G }),
                    z = void 0x0,
                    r0 = function (r4) {
                        z = (0x0, H["p5"])(Q, null, function () {
                            r4(z);
                        });
                    },
                    r1 = (function () {
                        var r4 = (0x0, X["Z"])(
                            U()["mark"](function r5(r6) {
                                return U()["wrap"](function (r7) {
                                    for (;;)
                                        switch ((r7["prev"] = r7["next"])) {
                                            case 0x0:
                                                return (r7["next"] = 0x2), z["persist"]();
                                            case 0x2:
                                                return r6(), (r7["next"] = 0x5), z["flush"]();
                                            case 0x5:
                                                return (r7["next"] = 0x7), z["pause"]();
                                            case 0x7:
                                            case "end":
                                                return r7["stop"]();
                                        }
                                }, r5);
                            })
                        );
                        return function (r6) {
                            return r4["apply"](this, arguments);
                        };
                    })(),
                    r2 = function () {
                        return (0x0, K["I0"])();
                    },
                    r3 = K["v9"];
            },
            0x17347: function (r0, r1, r2) {
                var r3 = r2(0x3df5),
                    r4 = r2(0x156cd),
                    r5 = r2["n"](r4),
                    r6 = r2(0x106de),
                    r7 = r2(0x120cf),
                    r8 = r2(0x9b18),
                    r9 = r2(0x2f31),
                    rr = r2(0x44d9),
                    rE = r2(0x71eb),
                    rR = r2(0x11e39),
                    rT = r2(0x2fda),
                    rC = rE["ZP"]["div"](["width:100%;height:100%;top:0;left:0;position:absolute;display:flex;align-items:center;justify-content:center;"]),
                    rd = rE["ZP"]["div"](["background-color:rgba(0,0,0,0.7);padding:30px;color:white;"]),
                    rY = rE["ZP"]["div"](["margin-bottom:20px;font-size:20px;display:flex;align-items:center;justify-content:center;"]),
                    rB = rE["ZP"]["div"](["width:300px;height:30px;position:relative;background-color:white;"]),
                    rF = rE["ZP"]["div"]["attrs"](function (E1) {
                        return { style: { width: E1["percent"] + "%", transition: "width\x20" + E1["speed"] + "s" } };
                    })(["background-color:#2ecc71;position:absolute;height:100%;display:flex;align-items:center;"]),
                    rb = rE["ZP"]["span"](["margin:0\x2010px;"]),
                    rZ = function (E1) {
                        var E2 = (0x0, rT["CG"])(function (E3) {
                            return E3["ui"]["ca"];
                        });
                        return (0x0, rT["CG"])(function (E3) {
                            return E3["ui"]["Jc"];
                        }) === rR["Q"]["Me"]
                            ? r6["createElement"](
                                  rC,
                                  null,
                                  r6["createElement"](
                                      rd,
                                      null,
                                      r6["createElement"](
                                          rY,
                                          null,
                                          r6["createElement"]("span", null, "Loading"),
                                          r6["createElement"](rb, null, r6["createElement"](rr["G"], { icon: r9["AX7"], spin: !0x0 })),
                                          r6["createElement"]("span", null, "Please\x20hold\x20on")
                                      ),
                                      r6["createElement"](rB, null, r6["createElement"](rF, { percent: 0x64 * E2, speed: 0.2 }))
                                  )
                              )
                            : null;
                    },
                    rm = r2(0x514d),
                    rv = r2(0x1498a),
                    ru = r2(0xc8d9),
                    ry = r2(0x11fff),
                    rD = r2(0xfe65),
                    rN = r2(0xbbd8),
                    rX = r2(0xe33e),
                    rf = r2(0x11d05),
                    rP = r2(0x1812f),
                    rI = r2(0xc333),
                    rA = rE["ZP"]["div"](["width:100%;height:100%;top:0;left:0;position:absolute;background-image:url(", ");background-size:cover;"], rN),
                    rM = rE["ZP"]["div"](["position:absolute;top:10px;left:10px;z-index:99999;pointer-events:auto;display:flex;flex-direction:column;align-items:flex-start;"]),
                    ro = rE["ZP"]["a"](["display:block;"]),
                    rt = rE["ZP"]["img"](["display:block;width:200px;"]),
                    rp = rE["ZP"]["a"](["color:white;text-decoration:none;:hover{text-decoration:underline;}"]),
                    rk = rE["ZP"]["div"](["color:white;:hover{cursor:pointer;text-decoration:underline;}"]),
                    re = rE["ZP"]["div"](["width:1px;height:16px;background-color:white;margin:0\x208px;"]),
                    rl = rE["ZP"]["div"](["position:absolute;top:10px;right:20px;z-index:99999;pointer-events:auto;"]),
                    rU = rE["ZP"]["div"](["margin-bottom:10px;"]),
                    rq = rE["ZP"]["div"](["margin-right:10px;"]),
                    rw = rE["ZP"]["a"](["display:flex;align-items:center;background-color:#ff1f1f;padding:5px\x2010px;border-radius:5px;margin-bottom:5px;text-decoration:none;color:white;"]),
                    rO = rE["ZP"]["div"](["margin-bottom:10px;"]),
                    rj = rE["ZP"]["a"](["display:flex;text-decoration:none;color:white;padding:5px\x200;"]),
                    ri = rE["ZP"]["img"](["display:block;width:32px;height:32px;margin-right:10px;border-radius:5px;"]),
                    rh = rE["ZP"]["div"]([""]),
                    ra = rE["ZP"]["div"](["font-weight:400;text-shadow:1px\x201px\x200\x20#3b3b3b;"]),
                    rc = rE["ZP"]["div"]([""]),
                    rS = rE["ZP"]["a"](["display:flex;align-items:center;background-color:#9146ff;padding:5px\x2010px;border-radius:5px;margin-bottom:5px;text-decoration:none;color:white;"]),
                    rg = rE["ZP"]["div"](["margin-right:10px;"]),
                    rW = rE["ZP"]["a"](["display:block;text-decoration:none;color:white;"]),
                    rH = rE["ZP"]["div"](["position:absolute;z-index:99999;pointer-events:auto;display:flex;bottom:0;left:0;background-color:rgba(0,0,0,0.5);padding:8px;font-size:14px;"]),
                    rx = rE["ZP"]["div"](["position:absolute;z-index:99999;pointer-events:auto;display:flex;bottom:0;right:0;background-color:rgba(0,0,0,0.5);padding:8px;font-size:14px;"]),
                    rK = rE["ZP"]["img"](["width:21px;margin-right:10px;"]),
                    rV = rE["ZP"]["div"](["display:flex;margin-top:10px;"]),
                    rs = (0x0, rE["ZP"])(ry["OL"])([
                        "margin-right:10px;background-color:rgba(0,0,0,0.7);display:flex;align-items:center;padding:10px;color:white;text-decoration:none;border-radius:5px;:hover{background-color:rgba(50,50,50,0.7);cursor:pointer;}",
                    ]),
                    rJ = [
                        { name: "CapsLck", link: "https://www.youtube.com/CapsLck" },
                        { name: "thebosskiddd", link: "https://www.youtube.com/thebosskiddd" },
                        { name: "ObiProm", link: "https://www.youtube.com/channel/UCswL6-1zXTeujZ4QvPOXorQ" },
                        { name: "Spicy\x20FL", link: "https://www.youtube.com/channel/UCBzpTMFwW_o0skMEydp2h7A" },
                        { name: "BIGDESTROYER", link: "https://www.youtube.com/channel/UCGTETVEhaq3KiMoX0_UNrpg" },
                        { name: "lord\x20sofdeez", link: "https://www.youtube.com/channel/UCC3wRPL9Ii6_UlvR5xAo7Cg" },
                        { name: "日本voxiom連合", link: "https://www.youtube.com/channel/UC-qdFqnjTVUj1Jxirki21Zw" },
                        { name: "Statefarm\x20YT", link: "https://www.youtube.com/channel/UCYw9aJUkV0E_fzYNWMSz6qQ" },
                        { name: "Nationwide\x20YT", link: "https://www.youtube.com/channel/UCF4LkuTU75FkZCDuRXi2MqA" },
                        { name: "Dous\x20Winter", link: "https://www.youtube.com/channel/UCMiNQjEZi3zLXCQtBJ0YwnA/" },
                        { name: "RMC365", link: "https://www.youtube.com/channel/UCy3vHdDfLYfdQijxH7bgPDQ" },
                        { name: "Dreampro", link: "https://www.youtube.com/channel/UC6BvX1iVFLRWbaHu8yFoC9g" },
                    ],
                    rG = function (E1) {
                        var E2 = (0x0, rT["CG"])(function (EY) {
                                return EY["ui"]["Jc"];
                            }),
                            E3 = (0x0, rT["CG"])(function (EY) {
                                return EY["ui"]["Ma"];
                            }),
                            E4 = (0x0, rT["CG"])(function (EY) {
                                return EY["ui"]["La"];
                            }),
                            E5 = (0x0, rT["CG"])(function (EY) {
                                return EY["settings"]["disableRewardedAdsPopup"];
                            }),
                            E6 = (0x0, rT["CG"])(function (EY) {
                                return EY["ui"]["ga"];
                            }),
                            E7 = (0x0, r6["useState"])(0x0),
                            E8 = E7[0x0],
                            E9 = E7[0x1],
                            Er = (0x0, rT["TL"])(),
                            EE = (0x0, r6["useState"])([]),
                            ER = EE[0x0],
                            ET = EE[0x1],
                            EC = ER["map"](function (EY, En) {
                                return r6["createElement"](
                                    rj,
                                    { key: En, href: "https://twitch.tv/" + EY["user_name"], target: "_blank" },
                                    r6["createElement"](ri, { src: EY["avatar"] }),
                                    r6["createElement"](rh, null, r6["createElement"](ra, null, EY["display_name"]), r6["createElement"](rc, null, EY["viewer_count"], "\x20Viewers"))
                                );
                            });
                        0x0 === EC["length"] && (EC = r6["createElement"](rW, { href: "https://www.twitch.tv/directory/game/Voxiom.io", target: "_blank" }, "Stream\x20to\x20get\x20featured\x20here!")),
                            (0x0, r6["useEffect"])(function () {
                                (0x0, r3["Z"])(
                                    r5()["mark"](function EY() {
                                        var En, EB;
                                        return r5()["wrap"](
                                            function (EF) {
                                                for (;;)
                                                    switch ((EF["prev"] = EF["next"])) {
                                                        case 0x0:
                                                            return (EF["prev"] = 0x0), (EF["next"] = 0x3), fetch("/twitch/streams");
                                                        case 0x3:
                                                            return (En = EF["sent"]), (EF["next"] = 0x6), En["json"]();
                                                        case 0x6:
                                                            (EB = EF["sent"]), ET(EB["data"]), (EF["next"] = 0xd);
                                                            break;
                                                        case 0xa:
                                                            (EF["prev"] = 0xa), (EF["t0"] = EF["catch"](0x0)), console["error"]("Failed\x20to\x20fetch\x20stream\x20data");
                                                        case 0xd:
                                                        case "end":
                                                            return EF["stop"]();
                                                    }
                                            },
                                            EY,
                                            null,
                                            [[0x0, 0xa]]
                                        );
                                    })
                                )(),
                                    E9((0x0, rX["rO"])(0x0, rJ["length"] - 0x1));
                            }, []);
                        var Ed = (0x0, r6["useRef"])(!0x1);
                        return (
                            (0x0, r6["useEffect"])(
                                function () {
                                    E6 &&
                                        (Ed["current"] ||
                                            ((Ed["current"] = !0x0),
                                            (0x0, r3["Z"])(
                                                r5()["mark"](function EY() {
                                                    var En, EB;
                                                    return r5()["wrap"](
                                                        function (EF) {
                                                            for (;;)
                                                                switch ((EF["prev"] = EF["next"])) {
                                                                    case 0x0:
                                                                        return (EF["prev"] = 0x0), (EF["next"] = 0x3), fetch("/profile/me", { method: "post" });
                                                                    case 0x3:
                                                                        return (En = EF["sent"]), (EF["next"] = 0x6), En["json"]();
                                                                    case 0x6:
                                                                        (EB = EF["sent"])["authenticated"] &&
                                                                            (Er((0x0, rf["Cl"])(EB)),
                                                                            -0x1 !== EB["data"]["permissions"]["indexOf"]("principal.noads") && (aiptag["disableInterstitialAd"] = !0x0),
                                                                            EB["authenticated"] && EB["data"]["rewarded_ad_eligible"] && !E5 && Er((0x0, rv["g1"])())),
                                                                            (EF["next"] = 0xd);
                                                                        break;
                                                                    case 0xa:
                                                                        (EF["prev"] = 0xa), (EF["t0"] = EF["catch"](0x0)), console["error"]("Failed\x20to\x20fetch\x20account\x20data");
                                                                    case 0xd:
                                                                    case "end":
                                                                        return EF["stop"]();
                                                                }
                                                        },
                                                        EY,
                                                        null,
                                                        [[0x0, 0xa]]
                                                    );
                                                })
                                            )()));
                                },
                                [E6]
                            ),
                            E2 === rR["Q"]["Me"] || E2 === rR["Q"]["Le"] || E2 === rR["Q"]["Oe"]
                                ? r6["createElement"](
                                      r6["Fragment"],
                                      null,
                                      r6["createElement"](rA, null),
                                      r6["createElement"](
                                          rM,
                                          null,
                                          r6["createElement"](ro, { href: "https://discord.gg/GBFtRcY", target: "_blank" }, r6["createElement"](rt, { src: rD })),
                                          r6["createElement"](
                                              rV,
                                              null,
                                              r6["createElement"](rs, { to: "/friends" }, r6["createElement"](rK, { src: rP }), "Friends"),
                                              r6["createElement"](rs, { to: "/clans" }, r6["createElement"](rK, { src: rI }), "Clans")
                                          )
                                      ),
                                      r6["createElement"](
                                          rl,
                                          null,
                                          r6["createElement"](rU, null, r6["createElement"](rw, { href: rJ[E8]["link"], target: "_blank" }, r6["createElement"](rq, null, r6["createElement"](rr["G"], { icon: ru["opf"] })), rJ[E8]["name"])),
                                          r6["createElement"](
                                              rO,
                                              null,
                                              r6["createElement"](
                                                  rS,
                                                  { href: "https://www.twitch.tv/directory/game/Voxiom.io", target: "_blank" },
                                                  r6["createElement"](rg, null, r6["createElement"](rr["G"], { icon: ru["z0T"] })),
                                                  "Featured\x20Streams"
                                              ),
                                              EC
                                          )
                                      ),
                                      r6["createElement"](
                                          rH,
                                          null,
                                          r6["createElement"](rp, { href: "/assets/pages/terms.html" }, "Terms\x20of\x20Use"),
                                          r6["createElement"](re, null),
                                          r6["createElement"](rp, { href: "/assets/pages/privacy.html" }, "Privacy\x20Policy"),
                                          E3 === rv["O7"]["Ac"] && E4
                                              ? r6["createElement"](
                                                    r6["Fragment"],
                                                    null,
                                                    r6["createElement"](re, null),
                                                    r6["createElement"](
                                                        rk,
                                                        {
                                                            onClick: function () {
                                                                aipAPItag["showCMPScreen"]();
                                                            },
                                                        },
                                                        "Cookies"
                                                    )
                                                )
                                              : null
                                      ),
                                      E3 !== rv["O7"]["Nc"]
                                          ? r6["createElement"](
                                                r6["Fragment"],
                                                null,
                                                r6["createElement"](
                                                    rx,
                                                    null,
                                                    r6["createElement"](rp, { href: "/assets/pages/partners.html", target: "_blank" }, "Partners"),
                                                    r6["createElement"](re, null),
                                                    r6["createElement"](rp, { href: "https://iogames.space", target: "_blank" }, "More\x20.io\x20Games!")
                                                )
                                            )
                                          : null
                                  )
                                : null
                        );
                    },
                    rL = rE["ZP"]["div"]["attrs"](function (E1) {
                        var E2 = E1["uiScale"];
                        return { style: { width: E1["uiWidth"] / E2 + "px", height: E1["uiHeight"] / E2 + "px", transform: "scale(" + E2 + ")" } };
                    })(["transform-origin:0\x200;position:absolute;top:0;left:0;pointer-events:none;"]),
                    rQ = r6["lazy"](function () {
                        return Promise["all"]([r2["e"](0x211), r2["e"](0x3bf), r2["e"](0x234), r2["e"](0x278)])["then"](r2["bind"](r2, 0x1dd0));
                    }),
                    rz = function () {
                        var E1 = (0x0, rT["TL"])(),
                            E2 = (0x0, rT["CG"])(function (E7) {
                                return E7["ui"]["sa"];
                            }),
                            E3 = (0x0, rT["CG"])(function (E7) {
                                return E7["ui"]["la"];
                            }),
                            E4 = (0x0, rT["CG"])(function (E7) {
                                return E7["ui"]["_a"];
                            }),
                            E5 = (0x0, rT["CG"])(function (E7) {
                                return E7["ui"]["Jc"];
                            });
                        (0x0, r6["useEffect"])(function () {
                            var E7 = (function () {
                                var E8 = (0x0, r3["Z"])(
                                    r5()["mark"](function E9(Er) {
                                        var EE, ER, ET, EC;
                                        return r5()["wrap"](
                                            function (Ed) {
                                                for (;;)
                                                    switch ((Ed["prev"] = Ed["next"])) {
                                                        case 0x0:
                                                            return (EE = !0x1), (Ed["prev"] = 0x1), (Ed["next"] = 0x4), fetch("/xbanner.js");
                                                        case 0x4:
                                                            Ed["next"] = 0x9;
                                                            break;
                                                        case 0x6:
                                                            (Ed["prev"] = 0x6), (Ed["t0"] = Ed["catch"](0x1)), (EE = !0x0);
                                                        case 0x9:
                                                            (ER = new URLSearchParams(window["location"]["search"])),
                                                                EE
                                                                    ? E1((0x0, rv["cy"])(rv["O7"]["Rc"]))
                                                                    : ER["has"]("nolinks")
                                                                    ? (((ET = document["createElement"]("script"))["src"] = "https://sdk.crazygames.com/crazygames-sdk-v1.js"),
                                                                      (ET["async"] = !0x0),
                                                                      document["head"]["appendChild"](ET),
                                                                      (ET["onload"] = function () {
                                                                          window["CrazyGames"]["CrazySDK"]["getInstance"]()["init"](), E1((0x0, rv["cy"])(rv["O7"]["Nc"]));
                                                                      }))
                                                                    : window["use_eg"]
                                                                    ? (function EY() {
                                                                          window["egAps"] && "function" == typeof window["egAps"]["reinstate"] ? E1((0x0, rv["cy"])(rv["O7"]["Cc"])) : setTimeout(EY, 0x1);
                                                                      })()
                                                                    : ((aiptag["cmp"] = { show: !0x0, position: "centered", button: !0x1, buttonText: "Privacy\x20settings", buttonPosition: "bottom-left" }),
                                                                      ((EC = document["createElement"]("script"))["src"] = "https://api.adinplay.com/libs/aiptag/pub/VXM/voxiom.io/tag.min.js"),
                                                                      (EC["async"] = !0x0),
                                                                      document["head"]["appendChild"](EC),
                                                                      document["addEventListener"]("aip_consentnotrequired", function (En) {
                                                                          E1((0x0, rv["K6"])(!0x1));
                                                                      }),
                                                                      (EC["onload"] = function () {
                                                                          E1((0x0, rv["cy"])(rv["O7"]["Ac"]));
                                                                      }));
                                                        case 0xb:
                                                        case "end":
                                                            return Ed["stop"]();
                                                    }
                                            },
                                            E9,
                                            null,
                                            [[0x1, 0x6]]
                                        );
                                    })
                                );
                                return function (Er) {
                                    return E8["apply"](this, arguments);
                                };
                            })();
                            if (window["Cookiebot"])
                                return (
                                    window["addEventListener"]("CookiebotOnLoad", E7),
                                    function () {
                                        window["removeEventListener"]("CookiebotOnLoad", E7);
                                    }
                                );
                            E7({});
                        }, []);
                        var E6 = (0x0, rT["CG"])(function (E7) {
                            return E7["ui"]["Ma"];
                        });
                        return (
                            (0x0, r6["useEffect"])(
                                function () {
                                    var E7 = function (E8) {
                                        "reload" === E8["data"] && (window["location"]["href"] = E6 === rv["O7"]["Nc"] ? "/?nolinks" : "/");
                                    };
                                    return (
                                        window["addEventListener"]("message", E7),
                                        function () {
                                            window["removeEventListener"]("message", E7);
                                        }
                                    );
                                },
                                [E6]
                            ),
                            (0x0, r6["useEffect"])(
                                function () {
                                    var E7 = function (E8) {
                                        var E9 = window["innerWidth"],
                                            Er = window["innerHeight"],
                                            EE = E5 === rR["Q"]["Me"] || E5 === rR["Q"]["Le"] || E5 === rR["Q"]["Oe"] ? Math["min"](E9 / 0x580, Er / 0x420) : Math["max"](E9 / rm["Z"]["lr"], Er / rm["Z"]["_r"]);
                                        E1((0x0, rv["mb"])({ scale: EE, width: E9, height: Er }));
                                    };
                                    return (
                                        window["addEventListener"]("resize", E7),
                                        E7(),
                                        function () {
                                            window["removeEventListener"]("resize", E7);
                                        }
                                    );
                                },
                                [E5]
                            ),
                            (0x0, r6["useEffect"])(function () {
                                "historynotes.club" === window["location"]["host"] && (document["title"] = "HistoryNotes.Club\x20-\x20Learn\x20World\x20History");
                            }, []),
                            r6["createElement"](
                                rL,
                                { uiScale: E2, uiWidth: E3, uiHeight: E4 },
                                r6["createElement"](rG, null),
                                r6["createElement"](rZ, null),
                                r6["createElement"](r6["Suspense"], { fallback: null }, r6["createElement"](rQ, null))
                            )
                        );
                    },
                    E0 = (function () {
                        function E1(E2) {
                            (this["es"] = E2), this["rs"]();
                        }
                        return (
                            (E1["prototype"]["rs"] = function () {
                                r7["render"](r6["createElement"](r8["zt"], { store: rT["h"] }, r6["createElement"](ry["VK"], null, r6["createElement"](rz, null))), document["querySelector"](this["es"]));
                            }),
                            E1
                        );
                    })();
                r2(0x4022),
                    ((0x0, r3["Z"])(
                        r5()["mark"](function E1() {
                            var E2;
                            return r5()["wrap"](function (E3) {
                                for (;;)
                                    switch ((E3["prev"] = E3["next"])) {
                                        case 0x0:
                                            return new E0("#app"), (E3["next"] = 0x3), Promise["all"]([r2["e"](0x211), r2["e"](0x97), r2["e"](0x234), r2["e"](0x3e0)])["then"](r2["bind"](r2, 0x1b50));
                                        case 0x3:
                                            (E2 = E3["sent"]), (0x0, E2["default"])();
                                        case 0x6:
                                        case "end":
                                            return E3["stop"]();
                                    }
                            }, E1);
                        })
                    )(),
                    setTimeout(function () {
                        console["log"]("%cSTOP\x20RIGHT\x20THERE!", "background-color:\x20yellow;\x20color:\x20red;\x20-webkit-text-stroke:\x202px\x20black;\x20font-size:\x2072px;\x20font-weight:\x20bold;"),
                            console["log"](
                                "%cThis\x20is\x20a\x20tool\x20for\x20developers.\x20If\x20anyone\x20told\x20you\x20to\x20copy/paste\x20something\x20here,\x20they\x20are\x20probably\x20trying\x20to\x20scam\x20you!!!",
                                "font-size:\x2020px"
                            ),
                            console["log"]("%cPasting\x20ANYTHING\x20in\x20here\x20might\x20give\x20hackers\x20access\x20to\x20your\x20account!!!", "color:\x20red;\x20font-size:\x2020px"),
                            console["log"]("%cDO\x20NOT\x20PASTE\x20ANYTHING!", "background-color:\x20yellow;\x20color:\x20red;\x20-webkit-text-stroke:\x202px\x20black;\x20font-size:\x2072px;\x20font-weight:\x20bold;");
                    }, 0x3e8));
            },
            0x877b: function (v, y, D) {
                var N;
                D["d"](y, {
                    r3: function () {
                        return P;
                    },
                    bn: function () {
                        return A;
                    },
                    ld: function () {
                        return p;
                    },
                }),
                    (function (k) {
                        (k[(k["BATTLE_ROYALE"] = 0x0)] = "BATTLE_ROYALE"),
                            (k[(k["CAPTURE_THE_GEMS"] = 0x1)] = "CAPTURE_THE_GEMS"),
                            (k[(k["SURVIVAL"] = 0x2)] = "SURVIVAL"),
                            (k[(k["FREE_FOR_ALL"] = 0x3)] = "FREE_FOR_ALL"),
                            (k[(k["CUSTOM_GAME"] = 0x4)] = "CUSTOM_GAME"),
                            (k[(k["UNKNOWN"] = 0x5)] = "UNKNOWN");
                    })(N || (N = {}));
                var X = ["Battle\x20Royale", "Capture\x20The\x20Gems", "Survival", "Free\x20For\x20All", "Custom\x20Game"],
                    P = function (k) {
                        return X[k];
                    },
                    I = ["br", "ctg", "svv", "ffa", "custom"],
                    A = function (k) {
                        return I[k];
                    },
                    M = ["BattleRoyale", "CaptureTheGems", "Survival", "FreeForAll", "CustomGame"],
                    p = function (k) {
                        return M[k];
                    };
                y["ZP"] = N;
            },
            0x1855e: function (v, y, D) {
                var N, X, P;
                D["d"](y, {
                    iU: function () {
                        return X;
                    },
                    lD: function () {
                        return P;
                    },
                }),
                    (function (I) {
                        (I[(I["GREEN"] = 0x0)] = "GREEN"), (I[(I["BLUE"] = 0x1)] = "BLUE"), (I[(I["RED"] = 0x2)] = "RED"), (I[(I["UNKNOWN"] = 0x3)] = "UNKNOWN"), (I[(I["__LENGTH"] = 0x4)] = "__LENGTH");
                    })(N || (N = {})),
                    (function (I) {
                        (I["MOST_RECENT"] = "MOST_RECENT"), (I["PRICE_HIGHEST"] = "PRICE_HIGHEST"), (I["PRICE_LOWEST"] = "PRICE_LOWEST");
                    })(X || (X = {})),
                    (function (I) {
                        (I[(I["NONE"] = 0x0)] = "NONE"),
                            (I[(I["REQUEST_RECEIVED"] = 0x1)] = "REQUEST_RECEIVED"),
                            (I[(I["REQUEST_SENT"] = 0x2)] = "REQUEST_SENT"),
                            (I[(I["CONFIRMED"] = 0x3)] = "CONFIRMED"),
                            (I[(I["BLOCKED"] = 0x4)] = "BLOCKED");
                    })(P || (P = {}));
            },
            0xbbd8: function (v, y, D) {
                v["exports"] = D["p"] + "./package/c30b27cd3f6c8d9bb236.jpg";
            },
            0xc333: function (v, y, D) {
                v["exports"] = D["p"] + "./package/f219eab7973b5ab639f6.png";
            },
            0x1812f: function (v, y, D) {
                v["exports"] = D["p"] + "./package/561b26986b5489c71284.png";
            },
            0xfe65: function (v, y, D) {
                v["exports"] = D["p"] + "./package/3ad1db34f5eb135eaf13.png";
            },
        },
        b = {};
    function Z(v) {
        var y = b[v];
        if (void 0x0 !== y) return y["exports"];
        var D = (b[v] = { id: v, loaded: !0x1, exports: {} });
        return F[v]["call"](D["exports"], D, D["exports"], Z), (D["loaded"] = !0x0), D["exports"];
    }
    (Z["m"] = F),
        (Z["amdD"] = function () {
            throw new Error("define\x20cannot\x20be\x20used\x20indirect");
        }),
        (Z["amdO"] = {}),
        (E = []),
        (Z["O"] = function (v, y, D, N) {
            if (!y) {
                var X = 0x1 / 0x0;
                for (M = 0x0; M < E["length"]; M++) {
                    (y = E[M][0x0]), (D = E[M][0x1]), (N = E[M][0x2]);
                    for (var P = !0x0, I = 0x0; I < y["length"]; I++)
                        (!0x1 & N || X >= N) &&
                        Object["keys"](Z["O"])["every"](function (p) {
                            return Z["O"][p](y[I]);
                        })
                            ? y["splice"](I--, 0x1)
                            : ((P = !0x1), N < X && (X = N));
                    if (P) {
                        E["splice"](M--, 0x1);
                        var A = D();
                        void 0x0 !== A && (v = A);
                    }
                }
                return v;
            }
            N = N || 0x0;
            for (var M = E["length"]; M > 0x0 && E[M - 0x1][0x2] > N; M--) E[M] = E[M - 0x1];
            E[M] = [y, D, N];
        }),
        (Z["n"] = function (v) {
            var y =
                v && v["__esModule"]
                    ? function () {
                          return v["default"];
                      }
                    : function () {
                          return v;
                      };
            return Z["d"](y, { a: y }), y;
        }),
        (T = Object["getPrototypeOf"]
            ? function (v) {
                  return Object["getPrototypeOf"](v);
              }
            : function (v) {
                  return v["__proto__"];
              }),
        (Z["t"] = function (v, y) {
            if ((0x1 & y && (v = this(v)), 0x8 & y)) return v;
            if ("object" == typeof v && v) {
                if (0x4 & y && v["__esModule"]) return v;
                if (0x10 & y && "function" == typeof v["then"]) return v;
            }
            var D = Object["create"](null);
            Z["r"](D);
            var N = {};
            R = R || [null, T({}), T([]), T(T)];
            for (var X = 0x2 & y && v; "object" == typeof X && !~R["indexOf"](X); X = T(X))
                Object["getOwnPropertyNames"](X)["forEach"](function (P) {
                    N[P] = function () {
                        return v[P];
                    };
                });
            return (
                (N["default"] = function () {
                    return v;
                }),
                Z["d"](D, N),
                D
            );
        }),
        (Z["d"] = function (v, y) {
            for (var D in y) Z["o"](y, D) && !Z["o"](v, D) && Object["defineProperty"](v, D, { enumerable: !0x0, get: y[D] });
        }),
        (Z["f"] = {}),
        (Z["e"] = function (v) {
            return Promise["all"](
                Object["keys"](Z["f"])["reduce"](function (y, D) {
                    return Z["f"][D](v, y), y;
                }, [])
            );
        }),
        (Z["u"] = function (v) {
            return (
                "./package/" +
                {
                    0x73: "8e2a4239e5dc27430a39",
                    0x97: "bbd125be04dfff8e756c",
                    0x211: "4548ba7c407d340895d2",
                    0x234: "5afdff015eb052662065",
                    0x278: "9f7f46fc63bc4f25dc99",
                    0x2bc: "f89ea3363c33ebe7df96",
                    0x373: "24a7e21efcf92b09954a",
                    0x3bf: "114fac1b8cad54396f74",
                    0x3e0: "47c622fd9bb9137cfb67",
                }[v] +
                ".js"
            );
        }),
        (Z["miniCssF"] = function (v) {
            return "./package/560db4d6e924979873a6.css";
        }),
        (Z["g"] = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return\x20this")();
            } catch (v) {
                if ("object" == typeof window) return window;
            }
        })()),
        (Z["o"] = function (v, y) {
            return Object["prototype"]["hasOwnProperty"]["call"](v, y);
        }),
        (C = {}),
        (d = "client:"),
        (Z["l"] = function (v, y, D, N) {
            if (C[v]) C[v]["push"](y);
            else {
                var X, P;
                if (void 0x0 !== D)
                    for (var I = document["getElementsByTagName"]("script"), A = 0x0; A < I["length"]; A++) {
                        var M = I[A];
                        if (M["getAttribute"]("src") == v || M["getAttribute"]("data-webpack") == d + D) {
                            X = M;
                            break;
                        }
                    }
                X || ((P = !0x0), ((X = document["createElement"]("script"))["charset"] = "utf-8"), (X["timeout"] = 0x78), Z["nc"] && X["setAttribute"]("nonce", Z["nc"]), X["setAttribute"]("data-webpack", d + D), (X["src"] = v)),
                    (C[v] = [y]);
                var p = function (U, q) {
                        (X["onerror"] = X["onload"] = null), clearTimeout(k);
                        var w = C[v];
                        if (
                            (delete C[v],
                            X["parentNode"] && X["parentNode"]["removeChild"](X),
                            w &&
                                w["forEach"](function (O) {
                                    return O(q);
                                }),
                            U)
                        )
                            return U(q);
                    },
                    k = setTimeout(p["bind"](null, void 0x0, { type: "timeout", target: X }), 0x1d4c0);
                (X["onerror"] = p["bind"](null, X["onerror"])), (X["onload"] = p["bind"](null, X["onload"])), P && document["head"]["appendChild"](X);
            }
        }),
        (Z["r"] = function (v) {
            "undefined" != typeof Symbol && Symbol["toStringTag"] && Object["defineProperty"](v, Symbol["toStringTag"], { value: "Module" }), Object["defineProperty"](v, "__esModule", { value: !0x0 });
        }),
        (Z["nmd"] = function (v) {
            return (v["paths"] = []), v["children"] || (v["children"] = []), v;
        }),
        (Z["p"] = "/"),
        (Y = function (v) {
            return new Promise(function (y, D) {
                var N = Z["miniCssF"](v),
                    X = Z["p"] + N;
                if (
                    (function (P, I) {
                        for (var A = document["getElementsByTagName"]("link"), M = 0x0; M < A["length"]; M++) {
                            var p = (l = A[M])["getAttribute"]("data-href") || l["getAttribute"]("href");
                            if ("stylesheet" === l["rel"] && (p === P || p === I)) return l;
                        }
                        var k = document["getElementsByTagName"]("style");
                        for (M = 0x0; M < k["length"]; M++) {
                            var l;
                            if ((p = (l = k[M])["getAttribute"]("data-href")) === P || p === I) return l;
                        }
                    })(N, X)
                )
                    return y();
                !(function (P, I, A, M) {
                    var p = document["createElement"]("link");
                    (p["rel"] = "stylesheet"),
                        (p["type"] = "text/css"),
                        (p["onerror"] = p["onload"] = function (k) {
                            if (((p["onerror"] = p["onload"] = null), "load" === k["type"])) A();
                            else {
                                var l = k && ("load" === k["type"] ? "missing" : k["type"]),
                                    U = (k && k["target"] && k["target"]["href"]) || I,
                                    q = new Error("Loading\x20CSS\x20chunk\x20" + P + "\x20failed.\x0a(" + U + ")");
                                (q["code"] = "CSS_CHUNK_LOAD_FAILED"), (q["type"] = l), (q["request"] = U), p["parentNode"]["removeChild"](p), M(q);
                            }
                        }),
                        (p["href"] = I),
                        document["head"]["appendChild"](p);
                })(v, X, y, D);
            });
        }),
        (B = { 0x2f: 0x0 }),
        (Z["f"]["miniCss"] = function (v, y) {
            B[v]
                ? y["push"](B[v])
                : 0x0 !== B[v] &&
                  { 0x278: 0x1 }[v] &&
                  y["push"](
                      (B[v] = Y(v)["then"](
                          function () {
                              B[v] = 0x0;
                          },
                          function (D) {
                              throw (delete B[v], D);
                          }
                      ))
                  );
        }),
        (function () {
            var v = { 0x2f: 0x0 };
            (Z["f"]["j"] = function (N, X) {
                var P = Z["o"](v, N) ? v[N] : void 0x0;
                if (0x0 !== P) {
                    if (P) X["push"](P[0x2]);
                    else {
                        var I = new Promise(function (p, k) {
                            P = v[N] = [p, k];
                        });
                        X["push"]((P[0x2] = I));
                        var A = Z["p"] + Z["u"](N),
                            M = new Error();
                        Z["l"](
                            A,
                            function (p) {
                                if (Z["o"](v, N) && (0x0 !== (P = v[N]) && (v[N] = void 0x0), P)) {
                                    var k = p && ("load" === p["type"] ? "missing" : p["type"]),
                                        l = p && p["target"] && p["target"]["src"];
                                    (M["message"] = "Loading\x20chunk\x20" + N + "\x20failed.\x0a(" + k + ":\x20" + l + ")"), (M["name"] = "ChunkLoadError"), (M["type"] = k), (M["request"] = l), P[0x1](M);
                                }
                            },
                            "chunk-" + N,
                            N
                        );
                    }
                }
            }),
                (Z["O"]["j"] = function (N) {
                    return 0x0 === v[N];
                });
            var y = function (N, X) {
                    var P,
                        I,
                        A = X[0x0],
                        M = X[0x1],
                        p = X[0x2],
                        k = 0x0;
                    if (
                        A["some"](function (U) {
                            return 0x0 !== v[U];
                        })
                    ) {
                        for (P in M) Z["o"](M, P) && (Z["m"][P] = M[P]);
                        if (p) var l = p(Z);
                    }
                    for (N && N(X); k < A["length"]; k++) (I = A[k]), Z["o"](v, I) && v[I] && v[I][0x0](), (v[A[k]] = 0x0);
                    return Z["O"](l);
                },
                D = (self["webpackChunkclient"] = self["webpackChunkclient"] || []);
            D["forEach"](y["bind"](null, 0x0)), (D["push"] = y["bind"](null, D["push"]["bind"](D)));
        })();
    var m = Z["O"](void 0x0, [0x35c], function () {
        return Z(0x17347);
    });
    m = Z["O"](m);
})();
