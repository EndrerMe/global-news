(function(t) {
  function a(a) {
    for (
      var e, n, c = a[0], l = a[1], o = a[2], v = 0, p = [];
      v < c.length;
      v++
    )
      (n = c[v]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && p.push(i[n][0]),
        (i[n] = 0);
    for (e in l) Object.prototype.hasOwnProperty.call(l, e) && (t[e] = l[e]);
    d && d(a);
    while (p.length) p.shift()();
    return r.push.apply(r, o || []), s();
  }
  function s() {
    for (var t, a = 0; a < r.length; a++) {
      for (var s = r[a], e = !0, c = 1; c < s.length; c++) {
        var l = s[c];
        0 !== i[l] && (e = !1);
      }
      e && (r.splice(a--, 1), (t = n((n.s = s[0]))));
    }
    return t;
  }
  var e = {},
    i = { app: 0 },
    r = [];
  function n(a) {
    if (e[a]) return e[a].exports;
    var s = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, a, s) {
      n.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: s });
    }),
    (n.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, a) {
      if ((1 & a && (t = n(t)), 8 & a)) return t;
      if (4 & a && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & a && "string" != typeof t)
      )
        for (var e in t)
          n.d(
            s,
            e,
            function(a) {
              return t[a];
            }.bind(null, e)
          );
      return s;
    }),
    (n.n = function(t) {
      var a =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return n.d(a, "a", a), a;
    }),
    (n.o = function(t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (n.p = "/global-news/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = a), (c = c.slice());
  for (var o = 0; o < c.length; o++) a(c[o]);
  var d = l;
  r.push([0, "chunk-vendors"]), s();
})({
  0: function(t, a, s) {
    t.exports = s("56d7");
  },
  "000a": function(t, a, s) {
    "use strict";
    var e = s("fd89"),
      i = s.n(e);
    i.a;
  },
  "0120": function(t, a, s) {
    "use strict";
    var e = s("fa70"),
      i = s.n(e);
    i.a;
  },
  "0167": function(t, a, s) {},
  "034f": function(t, a, s) {
    "use strict";
    var e = s("85ec"),
      i = s.n(e);
    i.a;
  },
  "03a8": function(t, a, s) {
    t.exports = s.p + "img/img-9.05f7ae2f.png";
  },
  "0528": function(t, a, s) {},
  "07ef": function(t, a, s) {
    t.exports = s.p + "img/img-5.d8416145.png";
  },
  "0c62": function(t, a, s) {
    t.exports = s.p + "img/img-13.12311347.png";
  },
  "0c7e": function(t, a, s) {
    "use strict";
    var e = s("590f"),
      i = s.n(e);
    i.a;
  },
  "0c85": function(t, a, s) {
    t.exports = s.p + "img/img-8.b8df922e.png";
  },
  "0ce4": function(t, a, s) {
    t.exports = s.p + "img/img-15.f11ddb58.png";
  },
  1495: function(t, a, s) {
    "use strict";
    var e = s("7454"),
      i = s.n(e);
    i.a;
  },
  "1ef3": function(t, a, s) {
    "use strict";
    var e = s("9ffd"),
      i = s.n(e);
    i.a;
  },
  2308: function(t, a, s) {
    "use strict";
    var e = s("5738"),
      i = s.n(e);
    i.a;
  },
  2373: function(t, a, s) {
    t.exports = s.p + "img/img-2.73205986.png";
  },
  "2cb1": function(t, a, s) {
    "use strict";
    var e = s("edc1"),
      i = s.n(e);
    i.a;
  },
  3361: function(t, a, s) {},
  3436: function(t, a, s) {
    t.exports = s.p + "img/img-6.e173a36f.png";
  },
  "351d": function(t, a, s) {
    "use strict";
    var e = s("5b0d"),
      i = s.n(e);
    i.a;
  },
  3635: function(t, a, s) {
    t.exports = s.p + "img/img-8.3553550f.png";
  },
  "39db": function(t, a, s) {},
  "3e8f": function(t, a, s) {
    "use strict";
    var e = s("afe7"),
      i = s.n(e);
    i.a;
  },
  "41d6": function(t, a, s) {
    "use strict";
    var e = s("6ccf"),
      i = s.n(e);
    i.a;
  },
  "427c": function(t, a, s) {
    "use strict";
    var e = s("5232"),
      i = s.n(e);
    i.a;
  },
  "46d6": function(t, a, s) {},
  "48c2": function(t, a, s) {
    "use strict";
    var e = s("5e53"),
      i = s.n(e);
    i.a;
  },
  "4d2f": function(t, a, s) {
    "use strict";
    var e = s("0528"),
      i = s.n(e);
    i.a;
  },
  "4f23": function(t, a, s) {
    t.exports = s.p + "img/img-1.26a9e1be.png";
  },
  5232: function(t, a, s) {},
  5689: function(t, a, s) {
    "use strict";
    var e = s("d58e"),
      i = s.n(e);
    i.a;
  },
  "56d7": function(t, a, s) {
    "use strict";
    s.r(a);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var e = s("2b0e"),
      i = function() {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      },
      r = [],
      n = { name: "app" },
      c = n,
      l = (s("034f"), s("2877")),
      o = Object(l["a"])(c, i, r, !1, null, null, null),
      d = o.exports,
      v = s("5f5b"),
      p = s("8c4f"),
      m = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "dark-screen" }),
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e(
                          "b-nav",
                          { staticClass: "mobile-top-menu" },
                          [
                            e("b-navbar-toggle", {
                              attrs: { target: "nav-collapse" },
                              on: {
                                click: function(a) {
                                  return t.toggleMobileSideMenu();
                                }
                              }
                            }),
                            e(
                              "b-nav-item",
                              { staticClass: "mobile-logo-wrap" },
                              [
                                e("img", {
                                  attrs: { src: s("e347"), alt: "logo" }
                                })
                              ]
                            ),
                            e(
                              "b-nav-item",
                              { staticClass: "mobnile-search-wrap" },
                              [
                                e("font-awesome-icon", {
                                  staticClass: "fa-lg",
                                  attrs: { icon: "search" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        e(
                          "div",
                          {
                            staticClass: "showTest",
                            class: { sideMenuActive: t.isShowSideMenu },
                            attrs: { id: "nav-collapse" }
                          },
                          [
                            e(
                              "div",
                              { staticClass: "sub-wrap" },
                              [
                                e(
                                  "b-navbar-nav",
                                  { staticClass: "wide-menu" },
                                  [
                                    e(
                                      "b-nav-item",
                                      { staticClass: "close-link-wrap" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "close-wrap",
                                            on: {
                                              click: function(a) {
                                                return t.toggleMobileSideMenu();
                                              }
                                            }
                                          },
                                          [e("a", { attrs: { href: "#" } })]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "logo-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("img", {
                                          attrs: { src: s("e347"), alt: "logo" }
                                        })
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "current-date",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("span", [t._v("October 8, 2019")]),
                                        e("span", [t._v("Tuesday")])
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "converter-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "span",
                                          [
                                            e("span", [
                                              t._v("Currency Converter")
                                            ]),
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "weather-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "weather-content" },
                                          [
                                            e("span", [
                                              e("img", {
                                                attrs: {
                                                  src: s("9853"),
                                                  alt: "cloud"
                                                }
                                              })
                                            ]),
                                            e(
                                              "span",
                                              { staticClass: "weather-value" },
                                              [
                                                t._v(" + 9 "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "celsius-value"
                                                  },
                                                  [t._v("℃")]
                                                )
                                              ]
                                            ),
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "weather-dropdown-arrow"
                                              },
                                              [
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            ),
                                            e("p", [t._v("Glasgow")])
                                          ]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "search-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("font-awesome-icon", {
                                          staticClass: "fa-lg",
                                          attrs: { icon: "search" }
                                        }),
                                        e("font-awesome-icon", {
                                          staticClass: "fa-lg",
                                          attrs: { icon: "bell" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                e(
                                  "b-navbar-nav",
                                  { staticClass: "mobile-side-menu" },
                                  [
                                    e(
                                      "b-nav-item",
                                      { staticClass: "close-link-wrap" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "close-wrap",
                                            on: {
                                              click: function(a) {
                                                return t.toggleMobileSideMenu();
                                              }
                                            }
                                          },
                                          [
                                            e("a", {
                                              staticClass: "close-button",
                                              attrs: { href: "#" }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "top-side-wrap" },
                                          [
                                            e(
                                              "span",
                                              { staticClass: "sub-item" },
                                              [
                                                t._v(" Currency Converter "),
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            ),
                                            e(
                                              "span",
                                              { staticClass: "sub-item" },
                                              [
                                                t._v(" Weather "),
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    e("b-nav-item", { attrs: { href: "#" } }, [
                                      e(
                                        "div",
                                        { staticClass: "bottom-side-wrap" },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "sub-item date" },
                                            [
                                              e("span", [
                                                t._v("October 8, 2019")
                                              ]),
                                              e("span", [t._v("Tuesday")])
                                            ]
                                          ),
                                          e(
                                            "div",
                                            { staticClass: "sub-item" },
                                            [
                                              e("button", [
                                                t._v("Subscribe Us")
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    e("div", { staticClass: "modile-side-weather-wrap" }, [
                      e("div", { staticClass: "mobile-weather-main-wrap" }, [
                        t._m(0),
                        t._m(1),
                        t._m(2),
                        t._m(3),
                        e("div", { staticClass: "links-wrap" }, [
                          e(
                            "div",
                            { staticClass: "mobile-weather-details-wrap" },
                            [
                              e("div", { staticClass: "links-wrap" }, [
                                e("div", { staticClass: "left-link" }, [
                                  e(
                                    "a",
                                    { attrs: { href: "#" } },
                                    [
                                      t._v(" More "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                t._m(4)
                              ]),
                              t._m(5)
                            ]
                          )
                        ])
                      ]),
                      t._m(6),
                      e(
                        "div",
                        {
                          staticClass: "mobile-notify-prompt-wrap",
                          staticStyle: { display: "none" }
                        },
                        [
                          t._m(7),
                          e("div", { staticClass: "text-wrap" }, [
                            e("p", [t._v("You subscribe on")]),
                            e("p", { staticClass: "dropdown" }, [
                              e("span", [t._v("All News")]),
                              e(
                                "span",
                                { staticClass: "wropdown-arrow" },
                                [
                                  e("font-awesome-icon", {
                                    attrs: { icon: "caret-down" }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          t._m(8)
                        ]
                      ),
                      t._m(9)
                    ])
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e("div", { staticClass: "container" }, [
                  e(
                    "div",
                    { staticClass: "box-menu" },
                    [
                      e(
                        "b-nav",
                        { staticClass: "bottom-menu" },
                        [
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "business" } }
                                },
                                [t._v("Business")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "entertainment" } }
                                },
                                [t._v("Entertainment")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "general" } }
                                },
                                [t._v("General")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "health" } }
                                },
                                [t._v("Health")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "science" } }
                                },
                                [t._v("Science")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "sport" } }
                                },
                                [t._v("Sport")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "technology" } }
                                },
                                [t._v("Technology")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          e("div", { staticClass: "container content" }, [
            e(
              "div",
              { staticClass: "slider-wrap" },
              [
                e(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "1px 1px 2px #333" },
                    attrs: {
                      id: "carousel-1",
                      interval: 4e3,
                      controls: "",
                      indicators: "",
                      background: "#ababab",
                      "img-width": "1024",
                      "img-height": "480"
                    }
                  },
                  [
                    e(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": "https://picsum.photos/1024/480/?image=52"
                        }
                      },
                      [
                        e("div", { staticClass: "slide-title" }, [
                          e("span", [
                            t._v("White House vows to boycott impeachment")
                          ])
                        ])
                      ]
                    ),
                    e(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": "https://picsum.photos/1024/480/?image=54"
                        }
                      },
                      [
                        e("div", { staticClass: "slide-title" }, [
                          e("span", [t._v("Second Slide")])
                        ])
                      ]
                    ),
                    e(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": "https://picsum.photos/1024/480/?image=58"
                        }
                      },
                      [
                        e("div", { staticClass: "slide-title" }, [
                          e("span", [t._v("Third Slide")])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            e(
              "div",
              { staticClass: "business-wrap" },
              [
                t._m(10),
                e("b-card-group", { attrs: { deck: "", row: "" } }, [
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "card mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("6 min ago")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("bbc.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("e91c") } }),
                          e("b-card-text", [
                            t._v(
                              "A mobile version of video game Call of Duty has been downloaded more than 100 million times in its first week..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("Yestesday")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("2373") } }),
                          e("b-card-text", [
                            t._v(
                              "All 555 Thomas Cook shops are to be bought by rival Hays Travel in a move that could save up to 2,500 jobs. The independent..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("October 10, 2019")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("fff1") } }),
                          e("b-card-text", [
                            t._v(
                              "Goldman Sachs will review its involvement in the planned stock market listing of Chinese artificial intelligence firm Megvii..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            e(
              "div",
              { staticClass: "entertainment-wrap" },
              [
                t._m(11),
                e("b-card-group", { attrs: { deck: "" } }, [
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("6 min ago")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("bbc.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("86d4") } }),
                          e("b-card-text", [
                            t._v(
                              "On World Mental Health Day, a disabled presenter shares her simple secrets of happiness. Jessica Kellgren-Fozard gets a..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("Yestesday")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("07ef") } }),
                          e("b-card-text", [
                            t._v(
                              "The Nobel Prize for Literature is set to be awarded on Thursday. Twice. The Handmaid's Tale author Margaret Atwood, fellow..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("October 10, 2019")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("d76d") } }),
                          e("b-card-text", [
                            t._v(
                              "Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick. The former San Francisco..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            e(
              "div",
              { staticClass: "science-wrap" },
              [
                t._m(12),
                e("b-card-group", { attrs: { deck: "" } }, [
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("6 min ago")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("bbc.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("a882") } }),
                          e("b-card-text", [
                            t._v(
                              "Culling badgers drives them to roam further afield, allowing them to disperse tuberculosis over a larger area, new..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("Yestesday")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("0c85") } }),
                          e("b-card-text", [
                            t._v(
                              'Three scientists have been awarded the 2019 Nobel Prize in Physics for "ground-breaking" discoveries about the Universe...'
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "mb-2 new-card",
                          scopedSlots: t._u([
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("October 10, 2019")
                                  ]),
                                  e("small", { staticClass: "text-muted" }, [
                                    t._v("sourcelink.com")
                                  ])
                                ];
                              },
                              proxy: !0
                            }
                          ])
                        },
                        [
                          e("b-card-img", { attrs: { src: s("c8d5") } }),
                          e("b-card-text", [
                            t._v(
                              "Antarctica's Emperor penguins could be in real difficulty come 2100 if the climate warms as expected. Experts say the birds..."
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ]),
          t._m(13)
        ]);
      },
      u = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "title-wrap section-elem" }, [
            s("span", [t._v("Weather")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "location-wrap section-elem" }, [
            s("span", [t._v("Glasgow")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "weather-data-wrap" }, [
            e("div", { staticClass: "clouds" }, [
              e("span", { staticClass: "icon" }, [
                e("img", { attrs: { src: s("9853"), alt: "cloud" } })
              ]),
              e("span", { staticClass: "cloud-state" }, [t._v("Broken Clouds")])
            ]),
            e("div", { staticClass: "temp-value-wrap" }, [
              e("span", { staticClass: "temp-value" }, [t._v("+9")]),
              e("span", { staticClass: "temp-symbol" }, [
                e("span", { staticClass: "activeMode active" }, [t._v("℃")]),
                e("span", { staticClass: "activeMode" }, [t._v("F")])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "seacrh-country-wrap" }, [
            s("div", { staticClass: "text-wrap" }, [
              s("p", [
                t._v(" Did you mean "),
                s("span", { staticClass: "serch-result" }, [t._v("London")]),
                t._v(" ? ")
              ])
            ]),
            s("div", { staticClass: "country-wrap" }, [
              s("span", [t._v("Lond")])
            ]),
            s("div", { staticClass: "button-wrap" }, [
              s("button", { attrs: { href: "#" } }, [t._v("Search")])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "right-link" }, [
            s("a", { attrs: { href: "#" } }, [t._v("Weather Map")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "sides-wrap" }, [
            e("div", { staticClass: "left-side" }, [
              e("div", { staticClass: "temp-info-wrap" }, [
                e("div", { staticClass: "temp-value-wrap info-elem" }, [
                  e("p", [
                    e("span", { staticClass: "cwitch" }, [
                      t._v("Show weather in :")
                    ]),
                    e("span", { staticClass: "temp-symbol" }, [
                      e("span", [t._v("F")]),
                      e("span", [t._v("℃")])
                    ])
                  ]),
                  e("p", [t._v("Place : London")])
                ]),
                e("div", { staticClass: "show-info-wrap info-elem" }, [
                  e("p", [
                    t._v(" Min Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ]),
                  e("p", [
                    t._v(" Max Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ]),
                  e("p", [
                    t._v(" Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ])
                ]),
                e("div", { staticClass: "additional-info info-elem" }, [
                  e("p", {}, [
                    t._v(" Humidity : "),
                    e("span", { staticClass: "value" }, [t._v("28")])
                  ]),
                  e("p", {}, [
                    t._v(" Wind Speed : "),
                    e("span", { staticClass: "value" }, [t._v("3")])
                  ])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side" }, [
              e("div", { staticClass: "wrap" }, [
                e("span", { staticClass: "icon-wrap" }, [
                  e("img", { attrs: { src: s("9853"), alt: "cloud" } })
                ]),
                e("span", { staticClass: "text" }, [t._v("Broken Clouds")])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            {
              staticClass: "mobile-weather-details-wrap",
              staticStyle: { display: "none" }
            },
            [
              e("div", { staticClass: "sides-wrap" }, [
                e("div", { staticClass: "weather-map left-side" }, [
                  e("div", { staticClass: "temp-info-wrap" }, [
                    e("div", { staticClass: "temp-value-wrap info-elem" }, [
                      e("p", [
                        e("span", { staticClass: "cwitch" }, [
                          t._v("Show weather in :")
                        ]),
                        e("span", { staticClass: "temp-symbol" }, [
                          e("span", [t._v("F")]),
                          e("span", [t._v("℃")])
                        ])
                      ]),
                      e("p", [t._v("Place : London")])
                    ]),
                    e("div", { staticClass: "show-info-wrap info-elem" }, [
                      e("p", [
                        t._v(" Min Temperature : "),
                        e("span", { staticClass: "temp-value" }, [
                          t._v(" 14 "),
                          e("span", { staticClass: "temp-val-symbol" })
                        ])
                      ]),
                      e("p", [
                        t._v(" Max Temperature : "),
                        e("span", { staticClass: "temp-value" }, [
                          t._v(" 14 "),
                          e("span", { staticClass: "temp-val-symbol" })
                        ])
                      ]),
                      e("p", [
                        t._v(" Temperature : "),
                        e("span", { staticClass: "temp-value" }, [
                          t._v(" 14 "),
                          e("span", { staticClass: "temp-val-symbol" })
                        ])
                      ])
                    ]),
                    e("div", { staticClass: "additional-info info-elem" }, [
                      e("p", {}, [
                        t._v(" Humidity : "),
                        e("span", { staticClass: "value" }, [t._v("28")])
                      ]),
                      e("p", {}, [
                        t._v(" Wind Speed : "),
                        e("span", { staticClass: "value" }, [t._v("3")])
                      ])
                    ])
                  ])
                ]),
                e("div", { staticClass: "right-side" }, [
                  e("div", { staticClass: "wrap" }, [
                    e("span", { staticClass: "icon-wrap" }, [
                      e("img", { attrs: { src: s("9853"), alt: "cloud" } })
                    ]),
                    e("span", { staticClass: "text" }, [t._v("Broken Clouds")])
                  ])
                ])
              ])
            ]
          );
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "close-wrap" }, [
            s("a", { staticClass: "close-button", attrs: { href: "#" } })
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "send-email-wrap" }, [
            s("div", { staticClass: "email-wrap" }, [
              s("span", [t._v("E-mail")])
            ]),
            s("div", { staticClass: "button-wrap" }, [
              s("button", { attrs: { href: "#" } }, [t._v("Subscribe")])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("footer", [
            e("div", { staticClass: "container content" }, [
              e("div", { staticClass: "content-wrap" }, [
                e("div", { staticClass: "left-item" }, [
                  e("img", { attrs: { src: s("e347"), alt: "logo" } })
                ]),
                e("div", { staticClass: "center-item" }, [
                  e("span", { staticClass: "text" }, [
                    t._v("Copyright © 2019 Global New. All rights reserved")
                  ])
                ]),
                e("div", { staticClass: "right-item" }, [
                  e("button", [t._v("Subscribe Us")])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "title-wrap" }, [
            s("span", { staticClass: "title-text" }, [t._v("Business")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "title-wrap" }, [
            s("span", { staticClass: "title-text" }, [t._v("Entertainment")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "title-wrap" }, [
            s("span", { staticClass: "title-text" }, [t._v("Science")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("footer", [
            e("div", { staticClass: "container content" }, [
              e("div", { staticClass: "content-wrap" }, [
                e("div", { staticClass: "left-item" }, [
                  e("img", { attrs: { src: s("e347"), alt: "logo" } })
                ]),
                e("div", { staticClass: "center-item" }, [
                  e("span", { staticClass: "text" }, [
                    t._v("Copyright © 2019 Global New. All rights reserved")
                  ])
                ]),
                e("div", { staticClass: "right-item" }, [
                  e("button", [t._v("Subscribe Us")])
                ])
              ])
            ])
          ]);
        }
      ],
      C = {
        data: function() {
          return { isShowSideMenu: !1 };
        },
        methods: {
          toggleMobileSideMenu: function() {
            this.isShowSideMenu = !this.isShowSideMenu;
          }
        }
      },
      b = C,
      f = (s("f61e"),
      s("baa9"),
      s("2308"),
      s("860b"),
      Object(l["a"])(b, m, u, !1, null, "c8d3bb70", null)),
      h = f.exports,
      g = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e("div", { staticClass: "container content" }, [
            e(
              "div",
              { staticClass: "card-wrap" },
              [
                e(
                  "b-card-group",
                  { attrs: { deck: "" } },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "new-info",
                        attrs: { "header-tag": "header" }
                      },
                      [
                        e("div", { staticClass: "title-wrap" }, [
                          e("span", { staticClass: "text" }, [
                            t._v(
                              'Rihanna wouldn\'t "sell out" For halftime show'
                            )
                          ])
                        ]),
                        e("b-card-img", { attrs: { src: s("60da4") } }),
                        e("b-card-text", [
                          e("span", [t._v("6 min ago")]),
                          e("span", [t._v("sourcelink.com")])
                        ]),
                        e("div", { staticClass: "description-wrap" }, [
                          e("p", [
                            t._v(
                              " Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick. The former San Francisco 49ers quarterback was dropped from the NFL for protesting social injustice "
                            ),
                            e("span", { staticClass: "blue-text" }, [
                              t._v("by kneeling during the national anthem")
                            ]),
                            t._v(
                              ". In this month's cover story with Vogue magazine, Rihanna said she did it to take a stand. "
                            )
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v(
                                "\"I couldn't dare do that. Who gains from that? Not my people. I just couldn't be a sellout.\""
                              )
                            ])
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v(
                                "\"I couldn't be an enabler. There's things within that organization that I do not agree with at all, and"
                              )
                            ])
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v(
                                'I was not about to go and be of service to them in any way."'
                              )
                            ])
                          ]),
                          e("p", [
                            t._v(
                              " It was widely rumoured she was offered the controversial February 2019 halftime show, which draws in audiences of up to 100m, but this is the first time Rihanna's talked about why she "
                            ),
                            e("span", { staticClass: "blue-text" }, [
                              t._v(" refused to appear. ")
                            ])
                          ]),
                          e("p", [
                            t._v(
                              " Cardi B and Pink, also reportedly rejected the NFL's offer to perform at the Atlanta event - in a show of solidarity with Kaepernick - and it was eventually headlined by Maroon 5, Travis Scott and Big Boi. It's not the only politics Rihanna gets into during the interview. She also opens up about gun violence in America. "
                            )
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v('"It is devastating," she says.')
                            ])
                          ]),
                          e("p", [
                            t._v(
                              ' "People are being murdered by war weapons that they legally purchase. This is just not normal. That should never, ever be normal." '
                            )
                          ]),
                          e("p", [
                            t._v(
                              " On her personal life, which she generally avoids discussing, Rihanna confirms she's in a relationship. Her rumoured boyfriend is the the Saudi businessman Hassan Jameel. "
                            )
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v(
                                " \"Yeah, I'm dating,\" she says. \"I'm actually in an exclusive relationship for quite some time, and it's going really well, so I'm happy.\" "
                              )
                            ])
                          ]),
                          e("p", [
                            t._v(
                              " She is, of course, keen to talk about her fashion brand, Fenty - named after her real name Robyn Rihanna Fenty. The 31-year-old says she made it a rule that she had to love and wear all of Fenty Maison herself - the high-end fashion line she founded with Louis Vuitton earlier this year. She also reveals that she inspires herself - she is her own muse. "
                            )
                          ]),
                          e("p", [
                            e("span", { staticClass: "bold-text" }, [
                              t._v(
                                '"I\'m not the face of my brand, but I am the muse, and my DNA has to run all the way through it,"'
                              )
                            ]),
                            t._v(" she says. ")
                          ])
                        ]),
                        e("div", { staticClass: "social-networks-wrap" }, [
                          e("div", { staticClass: "icons-wrap" }, [
                            e("a", { attrs: { href: "#" } }, [
                              e(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "9.212",
                                    height: "18.424",
                                    viewBox: "0 0 9.212 18.424"
                                  }
                                },
                                [
                                  e("path", {
                                    attrs: {
                                      id: "Path_22",
                                      "data-name": "Path 22",
                                      d:
                                        "M133.758,6.333V4.03a1.152,1.152,0,0,1,1.152-1.152h1.152V0h-2.3A3.454,3.454,0,0,0,130.3,3.455V6.333H128V9.212h2.3v9.212h3.455V9.212h2.3l1.152-2.879Z",
                                      transform: "translate(-128)",
                                      fill: ""
                                    }
                                  })
                                ]
                              )
                            ]),
                            e("a", { attrs: { href: "#" } }, [
                              e(
                                "svg",
                                {
                                  attrs: {
                                    id: "linkedin",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "18.424",
                                    height: "17.838",
                                    viewBox: "0 0 18.424 17.838"
                                  }
                                },
                                [
                                  e(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Group_38",
                                        "data-name": "Group 38",
                                        transform: "translate(0 5.171)"
                                      }
                                    },
                                    [
                                      e(
                                        "g",
                                        {
                                          attrs: {
                                            id: "Group_37",
                                            "data-name": "Group 37"
                                          }
                                        },
                                        [
                                          e("rect", {
                                            attrs: {
                                              id: "Rectangle_26",
                                              "data-name": "Rectangle 26",
                                              width: "4.12",
                                              height: "12.667",
                                              fill: ""
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  e(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Group_40",
                                        "data-name": "Group 40",
                                        transform: "translate(5.758 5.171)"
                                      }
                                    },
                                    [
                                      e(
                                        "g",
                                        {
                                          attrs: {
                                            id: "Group_39",
                                            "data-name": "Group 39"
                                          }
                                        },
                                        [
                                          e("path", {
                                            attrs: {
                                              id: "Path_23",
                                              "data-name": "Path 23",
                                              d:
                                                "M169.585,160.149c-.044-.014-.085-.029-.131-.041s-.111-.023-.167-.032a3.692,3.692,0,0,0-.739-.075,5.725,5.725,0,0,0-4.428,2.422V160H160v12.667h4.12v-6.909s3.114-4.337,4.428-1.152v8.061h4.119v-8.548A4.108,4.108,0,0,0,169.585,160.149Z",
                                              transform: "translate(-160 -160)",
                                              fill: ""
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  e(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Group_42",
                                        "data-name": "Group 42",
                                        transform: "translate(0.223 0)"
                                      }
                                    },
                                    [
                                      e(
                                        "g",
                                        {
                                          attrs: {
                                            id: "Group_41",
                                            "data-name": "Group 41"
                                          }
                                        },
                                        [
                                          e("circle", {
                                            attrs: {
                                              id: "Ellipse_12",
                                              "data-name": "Ellipse 12",
                                              cx: "1.94",
                                              cy: "1.94",
                                              r: "1.94",
                                              fill: ""
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            e("a", { attrs: { href: "#" } }, [
                              e(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "19.209",
                                    height: "15.607",
                                    viewBox: "0 0 19.209 15.607"
                                  }
                                },
                                [
                                  e("path", {
                                    attrs: {
                                      id: "Path_24",
                                      "data-name": "Path 24",
                                      d:
                                        "M19.209,49.848a8.21,8.21,0,0,1-2.269.622,3.916,3.916,0,0,0,1.732-2.177,7.87,7.87,0,0,1-2.5.953,3.938,3.938,0,0,0-6.812,2.693,4.055,4.055,0,0,0,.091.9,11.146,11.146,0,0,1-8.117-4.119,3.939,3.939,0,0,0,1.21,5.263A3.889,3.889,0,0,1,.768,53.5v.043a3.956,3.956,0,0,0,3.155,3.869,3.931,3.931,0,0,1-1.032.13,3.482,3.482,0,0,1-.746-.067,3.975,3.975,0,0,0,3.68,2.743,7.913,7.913,0,0,1-4.883,1.68A7.376,7.376,0,0,1,0,61.84a11.086,11.086,0,0,0,6.041,1.767A11.131,11.131,0,0,0,17.249,52.4c0-.174-.006-.342-.014-.509A7.856,7.856,0,0,0,19.209,49.848Z",
                                      transform: "translate(0 -48)",
                                      fill: ""
                                    }
                                  })
                                ]
                              )
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    e(
                      "b-card",
                      {
                        staticClass: "latest-news",
                        attrs: { "header-tag": "header" }
                      },
                      [
                        e("div", { staticClass: "title-wrap" }, [
                          e("span", { staticClass: "text" }, [
                            t._v("Latest News")
                          ])
                        ]),
                        e("div", { staticClass: "item-wrap" }, [
                          e("div", { staticClass: "image-wrap" }, [
                            e("img", { attrs: { src: s("959e") } })
                          ]),
                          e("div", { staticClass: "description-wrap" }, [
                            e("span", [
                              t._v(
                                "Nobel Prize for Literature to name two winners after scandal-hit year"
                              )
                            ])
                          ])
                        ]),
                        e("div", { staticClass: "item-wrap" }, [
                          e("div", { staticClass: "image-wrap" }, [
                            e("img", { attrs: { src: s("9a77") } })
                          ]),
                          e("div", { staticClass: "description-wrap" }, [
                            e("span", [
                              t._v(
                                "Goldman Sachs reviews role in Chinese tech firm Megvii"
                              )
                            ])
                          ])
                        ]),
                        e("div", { staticClass: "item-wrap" }, [
                          e("div", { staticClass: "image-wrap" }, [
                            e("img", { attrs: { src: s("89ac") } })
                          ]),
                          e("div", { staticClass: "description-wrap" }, [
                            e("span", [
                              t._v(
                                "Badger culls risk increased spread of TB to cattle, study finds"
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]);
      },
      w = [],
      _ = (s("c03b"), s("000a"), s("3e8f"), {}),
      y = Object(l["a"])(_, g, w, !1, null, "7bbc4b7a", null),
      x = y.exports,
      k = function() {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s("div", [
          t._m(0),
          s("div", { staticClass: "notify-prompt-wrap" }, [
            t._m(1),
            s("div", { staticClass: "text-wrap" }, [
              s("p", [t._v("You subscribe on")]),
              s("p", { staticClass: "dropdown" }, [
                s("span", [t._v("All News")]),
                s(
                  "span",
                  { staticClass: "wropdown-arrow" },
                  [s("font-awesome-icon", { attrs: { icon: "caret-down" } })],
                  1
                )
              ])
            ]),
            t._m(2)
          ]),
          t._m(3),
          t._m(4),
          t._m(5)
        ]);
      },
      S = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "subscribe-prompt-wrap" }, [
            s("div", { staticClass: "close-wrap" }, [
              s("a", { attrs: { href: "#" } })
            ]),
            s("div", { staticClass: "text-wrap" }, [
              s("span", [t._v("Do you want to receive more news ?")])
            ]),
            s("div", { staticClass: "button-wrap" }, [
              s("button", { attrs: { href: "#" } }, [t._v("Subscribe Us")])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "close-wrap" }, [
            s("a", { attrs: { href: "#" } })
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "send-email-wrap" }, [
            s("div", { staticClass: "email-wrap" }, [
              s("span", [t._v("E-mail")])
            ]),
            s("div", { staticClass: "button-wrap" }, [
              s("button", { attrs: { href: "#" } }, [t._v("Subscribe")])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "currency-converter-wrap" }, [
            s("div", { staticClass: "close-wrap" }, [
              s("a", { attrs: { href: "#" } })
            ]),
            s("div", { staticClass: "from" }, [
              s(
                "div",
                { staticClass: "dropdown-wrap", attrs: { selected: "" } },
                [
                  s("span", [t._v("from")]),
                  s("select", { staticClass: "dropdown" }, [
                    s("option", [t._v("USD")]),
                    s("option", [t._v("CHF")]),
                    s("option", [t._v("MYR")]),
                    s("option", [t._v("BGN")])
                  ])
                ]
              ),
              s("div", { staticClass: "value-wrap" }, [
                s("span", { staticClass: "value" }, [t._v("100")])
              ])
            ]),
            s("div", { staticClass: "to" }, [
              s(
                "div",
                { staticClass: "dropdown-wrap", attrs: { selected: "" } },
                [
                  s("span", [t._v("to")]),
                  s("select", { staticClass: "dropdown" }, [
                    s("option", [t._v("EUR")]),
                    s("option", [t._v("CHF")]),
                    s("option", [t._v("MYR")]),
                    s("option", [t._v("BGN")])
                  ])
                ]
              ),
              s("div", { staticClass: "value-wrap" }, [
                s("span", { staticClass: "value" }, [t._v("91.0249")])
              ])
            ]),
            s("div", { staticClass: "rate-wrap" }, [
              s("div", [s("span", [t._v("EUR/USD = 1.0986")])]),
              s("div", [s("span", [t._v("USD/JPY = 106.8905")])]),
              s("div", [s("span", [t._v("GBP/USD = 1.2234")])])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "weather-main-wrap" }, [
            e("div", { staticClass: "weather-search-wrap" }, [
              e("div", { staticClass: "close-wrap" }, [
                e("a", { attrs: { href: "#" } })
              ]),
              e("div", { staticClass: "text-wrap" }, [
                e("p", [t._v("Do you mean London?")])
              ]),
              e("div", { staticClass: "seacrh-country-wrap" }, [
                e("div", { staticClass: "country-wrap" }, [
                  e("span", [t._v("Lond")])
                ]),
                e("div", { staticClass: "button-wrap" }, [
                  e("button", { attrs: { href: "#" } }, [t._v("Search")])
                ])
              ]),
              e("div", { staticClass: "clouds" }, [
                e("span", [t._v("Broken Clouds")]),
                e("span", { staticClass: "icon" }, [
                  e("img", { attrs: { src: s("9853"), alt: "cloud" } })
                ])
              ]),
              e("div", { staticClass: "temp-value-wrap" }, [
                e("span", [t._v("+12")]),
                e("span", { staticClass: "temp-symbol" }, [
                  e("span", [t._v("℃")]),
                  e("span", [t._v("F")])
                ])
              ])
            ]),
            e("div", { staticClass: "links-wrap" }, [
              e("a", { attrs: { href: "#" } }, [t._v("Weather Map")]),
              e("a", { attrs: { href: "#" } }, [t._v("More")])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "weather-details-wrap" }, [
            e("div", { staticClass: "close-wrap" }, [
              e("a", { attrs: { href: "#" } })
            ]),
            e("div", { staticClass: "left-side" }, [
              e("div", { staticClass: "temp-info-wrap" }, [
                e("div", { staticClass: "temp-value-wrap info-elem" }, [
                  e("p", [
                    e("span", { staticClass: "cwitch" }, [
                      t._v("Show weather in :")
                    ]),
                    e("span", { staticClass: "temp-symbol" }, [
                      e("span", [t._v("F")]),
                      e("span", [t._v("℃")])
                    ])
                  ]),
                  e("p", [t._v("Place : London")])
                ]),
                e("div", { staticClass: "show-info-wrap info-elem" }, [
                  e("p", [
                    t._v(" Min Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ]),
                  e("p", [
                    t._v(" Max Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ]),
                  e("p", [
                    t._v(" Temperature : "),
                    e("span", { staticClass: "temp-value" }, [
                      t._v(" 14 "),
                      e("span", { staticClass: "temp-val-symbol" })
                    ])
                  ])
                ]),
                e("div", { staticClass: "additional-info info-elem" }, [
                  e("p", {}, [
                    t._v(" Humidity : "),
                    e("span", { staticClass: "value" }, [t._v("28")])
                  ]),
                  e("p", {}, [
                    t._v(" Wind Speed : "),
                    e("span", { staticClass: "value" }, [t._v("3")])
                  ])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side" }, [
              e("div", { staticClass: "wrap" }, [
                e("span", { staticClass: "icon-wrap" }, [
                  e("img", { attrs: { src: s("9853"), alt: "cloud" } })
                ]),
                e("span", [t._v("Broken Clouds")])
              ])
            ])
          ]);
        }
      ],
      B = (s("0120"), {}),
      A = Object(l["a"])(B, k, S, !1, null, "947968cc", null),
      E = A.exports,
      P = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "dark-screen" }),
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e(
                          "b-nav",
                          { staticClass: "mobile-top-menu" },
                          [
                            e("b-navbar-toggle", {
                              attrs: { target: "nav-collapse" }
                            }),
                            e(
                              "b-nav-item",
                              { staticClass: "mobile-logo-wrap" },
                              [
                                e("img", {
                                  attrs: { src: s("e347"), alt: "logo" }
                                })
                              ]
                            ),
                            e(
                              "b-nav-item",
                              { staticClass: "mobnile-search-wrap" },
                              [
                                e("font-awesome-icon", {
                                  staticClass: "fa-lg",
                                  attrs: { icon: "search" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "div",
                              { staticClass: "sub-wrap" },
                              [
                                e(
                                  "b-navbar-nav",
                                  { staticClass: "wide-menu" },
                                  [
                                    e(
                                      "b-nav-item",
                                      { staticClass: "close-link-wrap" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "close-wrap" },
                                          [e("a", { attrs: { href: "#" } })]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "logo-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("img", {
                                          attrs: { src: s("e347"), alt: "logo" }
                                        })
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "current-date",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("span", [t._v("October 8, 2019")]),
                                        e("span", [t._v("Tuesday")])
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "converter-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "span",
                                          [
                                            e("span", [
                                              t._v("Currency Converter")
                                            ]),
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "weather-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "weather-content" },
                                          [
                                            e("span", [
                                              e("img", {
                                                attrs: {
                                                  src: s("9853"),
                                                  alt: "cloud"
                                                }
                                              })
                                            ]),
                                            e(
                                              "span",
                                              { staticClass: "weather-value" },
                                              [
                                                t._v(" + 9 "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "celsius-value"
                                                  },
                                                  [t._v("℃")]
                                                )
                                              ]
                                            ),
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "weather-dropdown-arrow"
                                              },
                                              [
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            ),
                                            e("p", [t._v("Glasgow")])
                                          ]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "search-wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e("font-awesome-icon", {
                                          staticClass: "fa-lg",
                                          attrs: { icon: "search" }
                                        }),
                                        e("font-awesome-icon", {
                                          staticClass: "fa-lg",
                                          attrs: { icon: "bell" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                e(
                                  "b-navbar-nav",
                                  { staticClass: "mobile-side-menu" },
                                  [
                                    e(
                                      "b-nav-item",
                                      { staticClass: "close-link-wrap" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "close-wrap" },
                                          [e("a", { attrs: { href: "#" } })]
                                        )
                                      ]
                                    ),
                                    e(
                                      "b-nav-item",
                                      {
                                        staticClass: "wrap",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "top-side-wrap" },
                                          [
                                            e(
                                              "span",
                                              { staticClass: "sub-item" },
                                              [
                                                t._v(" Currency Converter "),
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            ),
                                            e(
                                              "span",
                                              { staticClass: "sub-item" },
                                              [
                                                t._v(" Weather "),
                                                e("font-awesome-icon", {
                                                  attrs: { icon: "caret-down" }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    e("b-nav-item", { attrs: { href: "#" } }, [
                                      e(
                                        "div",
                                        { staticClass: "bottom-side-wrap" },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "sub-item date" },
                                            [
                                              e("span", [
                                                t._v("October 8, 2019")
                                              ]),
                                              e("span", [t._v("Tuesday")])
                                            ]
                                          ),
                                          e(
                                            "div",
                                            { staticClass: "sub-item" },
                                            [
                                              e("button", [
                                                t._v("Subscribe Us")
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e("div", { staticClass: "container" }, [
                  e(
                    "div",
                    { staticClass: "box-menu" },
                    [
                      e(
                        "b-nav",
                        { staticClass: "bottom-menu" },
                        [
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "business" } }
                                },
                                [t._v("Business")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "entertainment" } }
                                },
                                [t._v("Entertainment")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "general" } }
                                },
                                [t._v("General")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "health" } }
                                },
                                [t._v("Health")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "science" } }
                                },
                                [t._v("Science")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "sport" } }
                                },
                                [t._v("Sport")]
                              )
                            ],
                            1
                          ),
                          e(
                            "b-nav-item",
                            [
                              e(
                                "router-link",
                                {
                                  staticClass: "link",
                                  attrs: { to: { name: "technology" } }
                                },
                                [t._v("Technology")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          ),
          t._m(3)
        ]);
      },
      H = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Business")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6 box-item" }, [
              e("div", { staticClass: "hover-link" }, [
                e("button", [t._v("Read More")])
              ]),
              e("div", { staticClass: "gradient" }),
              e("div", { staticClass: "image-box" }, [
                e("img", { attrs: { src: s("4f23") } })
              ]),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "box-item" }, [
                  e("div", { staticClass: "hover-link" }, [
                    e("button", [t._v("Read More")])
                  ]),
                  e("div", { staticClass: "gradient" }),
                  e("div", { staticClass: "image-box" }, [
                    e("img", { attrs: { src: s("7a9b") } })
                  ]),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Nobel Prize for Literature to name")]),
                      e("p", [t._v("two winners after scandal-hit year")])
                    ])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e(
                  "div",
                  { staticClass: "image-wrap col-md-6 col-sm-6 box-item" },
                  [
                    e("div", { staticClass: "hover-link" }, [
                      e("button", [t._v("Read More")])
                    ]),
                    e("div", { staticClass: "gradient" }),
                    e("div", { staticClass: "image-box" }, [
                      e("img", { attrs: { src: s("d5f2") } })
                    ]),
                    e("div", { staticClass: "title-wrap" }, [
                      e("span", { staticClass: "title" }, [
                        e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                        e("p", [t._v("halftime Superbowl show")])
                      ])
                    ])
                  ]
                ),
                e(
                  "div",
                  { staticClass: "image-wrap col-md-6 col-sm-6 box-item" },
                  [
                    e("div", { staticClass: "hover-link" }, [
                      e("button", [t._v("Read More")])
                    ]),
                    e("div", { staticClass: "gradient" }),
                    e("div", { staticClass: "image-box" }, [
                      e("img", { attrs: { src: s("e9e0") } })
                    ]),
                    e("div", { staticClass: "title-wrap" }, [
                      e("span", { staticClass: "title" }, [
                        e("p", [t._v("Sesame Street to cover opioid")]),
                        e("p", [t._v("addiction with new muppet Karli")])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("footer", [
            e("div", { staticClass: "container content" }, [
              e("div", { staticClass: "content-wrap" }, [
                e("div", { staticClass: "left-item" }, [
                  e("img", { attrs: { src: s("e347"), alt: "logo" } })
                ]),
                e("div", { staticClass: "center-item" }, [
                  e("span", { staticClass: "text" }, [
                    t._v("Copyright © 2019 Global New. All rights reserved")
                  ])
                ]),
                e("div", { staticClass: "right-item" }, [
                  e("button", [t._v("Subscribe Us")])
                ])
              ])
            ])
          ]);
        }
      ],
      D = (s("6d43"), s("4d2f"), s("0c7e"), s("1495"), {}),
      M = Object(l["a"])(D, P, H, !1, null, "7c081417", null),
      O = M.exports,
      T = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      J = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Entertainment")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      $ = (s("fe6f"), s("5715"), s("5a03"), {}),
      Y = Object(l["a"])($, T, J, !1, null, "3d13e6fa", null),
      G = Y.exports,
      R = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      F = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("General")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      K = (s("7d2a"), s("5689"), s("8928"), {}),
      I = Object(l["a"])(K, R, F, !1, null, "e8e12c94", null),
      N = I.exports,
      z = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      L = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Health")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      j = (s("72a0"), s("b322"), s("2cb1"), {}),
      W = Object(l["a"])(j, z, L, !1, null, "2e54f26d", null),
      V = W.exports,
      U = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      Q = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Science")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      Z = (s("80d2"), s("7c16"), s("427c"), {}),
      q = Object(l["a"])(Z, U, Q, !1, null, "a4aadbf8", null),
      X = q.exports,
      tt = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      at = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Sport")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      st = (s("48c2"), s("b681"), s("fdfc"), {}),
      et = Object(l["a"])(st, tt, at, !1, null, "0a4d27c6", null),
      it = et.exports,
      rt = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", [
          e("div", { staticClass: "header-wrap" }, [
            e("div", { staticClass: "header-content" }, [
              e("div", { staticClass: "top-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container content" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "top-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("img", {
                                    attrs: { src: s("e347"), alt: "logo" }
                                  })
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e("span", [t._v("October 8, 2019")]),
                                    e("span", [t._v("Tuesday")])
                                  ]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e(
                                    "span",
                                    [
                                      t._v(" Currency Converter "),
                                      e("font-awesome-icon", {
                                        attrs: { icon: "caret-down" }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "weather-content" },
                                      [
                                        e("span", [
                                          e("img", {
                                            attrs: {
                                              src: s("9853"),
                                              alt: "cloud"
                                            }
                                          })
                                        ]),
                                        e(
                                          "span",
                                          { staticClass: "weather-value" },
                                          [
                                            t._v(" + 9 "),
                                            e(
                                              "span",
                                              { staticClass: "celsius-value" },
                                              [t._v("℃")]
                                            )
                                          ]
                                        ),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "weather-dropdown-arrow"
                                          },
                                          [
                                            e("font-awesome-icon", {
                                              attrs: { icon: "caret-down" }
                                            })
                                          ],
                                          1
                                        ),
                                        e("p", [t._v("Glasgow")])
                                      ]
                                    )
                                  ]
                                ),
                                e(
                                  "b-nav-item",
                                  { attrs: { href: "#" } },
                                  [
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "search" }
                                    }),
                                    e("font-awesome-icon", {
                                      staticClass: "fa-lg",
                                      attrs: { icon: "bell" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("div", { staticClass: "bottom-menu-wrap" }, [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e(
                      "b-navbar",
                      {
                        staticClass: "bottom-menu",
                        attrs: {
                          toggleable: "md",
                          type: "dark",
                          variant: "info"
                        }
                      },
                      [
                        e("b-navbar-toggle", {
                          attrs: { target: "nav-collapse" }
                        }),
                        e(
                          "b-collapse",
                          { attrs: { id: "nav-collapse", "is-nav": "" } },
                          [
                            e(
                              "b-navbar-nav",
                              [
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "current-date",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Business")])]
                                ),
                                e("b-nav-item", { attrs: { href: "#" } }, [
                                  e("span", [t._v("Entertainment")])
                                ]),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("General")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Health")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Science")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Sport")])]
                                ),
                                e(
                                  "b-nav-item",
                                  {
                                    staticClass: "weather-wrap",
                                    attrs: { href: "#" }
                                  },
                                  [e("span", [t._v("Technology")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          e(
            "div",
            { staticClass: "container content" },
            [
              t._m(0),
              t._m(1),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("70fc") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("How tech changed the way")]),
                                e("p", [t._v("DreamWorks animates")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3436") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    'Five Star: Making Rain or Shine was "an ordeal",'
                                  )
                                ]),
                                e("p", [t._v("says Doris Pearson")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("fa32") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Rapper Jack Grange says music")]),
                                e("p", [t._v('releases ADHD "anger"')])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            'A teenage rap artist says performing music has helped him come to terms with his ADHD and release his "inside anger". Eighteen...'
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("3635") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "His Dark Materials: Behind the scenes of the TV"
                                  )
                                ]),
                                e("p", [t._v("adaptation")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("03a8") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Elton John:")]),
                                e("p", [
                                  t._v('"I still want my dad\'s approval"')
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("c80c") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Brit winner Finley Quaye sentenced for bar"
                                  )
                                ]),
                                e("p", [t._v("manager attack")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("9091") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Booker Prize: Margaret Atwood and Bernardine"
                                  )
                                ]),
                                e("p", [t._v("Evaristo share award")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("a645") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v('Pharrell says he\'s "embarrassed" by')
                                ]),
                                e("p", [t._v("Blurred Lines lyrics")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("John le Carré:")]),
                                e("p", [
                                  t._v(
                                    '"Politicians love chaos - it gives them authority"'
                                  )
                                ])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              e("b-card-group", { attrs: { deck: "", row: "" } }, [
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("6 min ago")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("bbc.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("775b") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [t._v("Russian rappers battle police")]),
                                e("p", [t._v("over protests")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("Yestesday")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0ce4") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Bill Turnbull backs cannabis for medicinal"
                                  )
                                ]),
                                e("p", [t._v("use ahead of cancer doc")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-2 new-card",
                        scopedSlots: t._u([
                          {
                            key: "footer",
                            fn: function() {
                              return [
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("October 10, 2019")
                                ]),
                                e("small", { staticClass: "text-muted" }, [
                                  t._v("sourcelink.com")
                                ])
                              ];
                            },
                            proxy: !0
                          }
                        ])
                      },
                      [
                        e(
                          "div",
                          { staticClass: "image-wrap" },
                          [
                            e("div", { staticClass: "gradient" }),
                            e("b-card-img", { attrs: { src: s("0c62") } }),
                            e("div", { staticClass: "title-wrap" }, [
                              e("span", { staticClass: "title" }, [
                                e("p", [
                                  t._v(
                                    "Billy Connolly: 'Nothing else will keep you going"
                                  )
                                ]),
                                e("p", [t._v("like laughter'")])
                              ])
                            ])
                          ],
                          1
                        ),
                        e("b-card-text", [
                          t._v(
                            "A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and..."
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              t._m(2)
            ],
            1
          )
        ]);
      },
      nt = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "main-title-wrap" }, [
            s("span", { staticClass: "text" }, [t._v("Technology")])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "top-box-preview row" }, [
            e("div", { staticClass: "left-side col-md-6" }, [
              e("div", { staticClass: "gradient" }),
              e("img", { attrs: { src: s("4f23") } }),
              e("div", { staticClass: "title-wrap" }, [
                e("span", { staticClass: "title" }, [
                  e("p", [t._v("YouTuber Jessica Kellgren-Fozard:")]),
                  e("p", [t._v('"It\'s OK not to be OK"')])
                ])
              ])
            ]),
            e("div", { staticClass: "right-side col-md-6" }, [
              e("div", { staticClass: "image-wrap right-side-top" }, [
                e("div", { staticClass: "gradient" }),
                e("img", { attrs: { src: s("7a9b") } }),
                e("div", { staticClass: "title-wrap" }, [
                  e("span", { staticClass: "title" }, [
                    e("p", [t._v("Nobel Prize for Literature to name")]),
                    e("p", [t._v("two winners after scandal-hit year")])
                  ])
                ])
              ]),
              e("div", { staticClass: "right-side-bottom row" }, [
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("d5f2") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v('Rihanna wouldn\'t "sell out" for')]),
                      e("p", [t._v("halftime Superbowl show")])
                    ])
                  ])
                ]),
                e("div", { staticClass: "image-wrap col-md-6" }, [
                  e("div", { staticClass: "gradient" }),
                  e("img", { attrs: { src: s("e9e0") } }),
                  e("div", { staticClass: "title-wrap" }, [
                    e("span", { staticClass: "title" }, [
                      e("p", [t._v("Sesame Street to cover opioid")]),
                      e("p", [t._v("addiction with new muppet Karli")])
                    ])
                  ])
                ])
              ])
            ])
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "pagination-wrap" }, [
            s("button", { staticClass: "double-arrow-left" }),
            s("button", { staticClass: "arrow-left" }),
            s("div", { staticClass: "numbers-wrap" }, [
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("1")])]
              ),
              s(
                "button",
                { staticClass: "page-number active", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("2")])]
              ),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("3")])]
              ),
              s("div", { staticClass: "separator-wrap" }, [
                s("span", { staticClass: "separator" }, [t._v("...")])
              ]),
              s(
                "button",
                { staticClass: "page-number", attrs: { href: "#" } },
                [s("span", { staticClass: "value" }, [t._v("16")])]
              )
            ]),
            s("button", { staticClass: "arrow-right", attrs: { href: "#" } }),
            s("button", {
              staticClass: "double-arrow-right",
              attrs: { href: "#" }
            })
          ]);
        }
      ],
      ct = (s("1ef3"), s("41d6"), s("351d"), {}),
      lt = Object(l["a"])(ct, rt, nt, !1, null, "6fa24521", null),
      ot = lt.exports,
      dt = [
        { path: "/", component: h, name: "Home", alias: "/Home" },
        { path: "/new-info", name: "newInfo", component: x },
        { path: "/test-hover", name: "testHover", component: E },
        { path: "/business", name: "business", component: O },
        { path: "/entertainment", name: "entertainment", component: G },
        { path: "/general", name: "general", component: N },
        { path: "/health", name: "health", component: V },
        { path: "/science", name: "science", component: X },
        { path: "/sport", name: "sport", component: it },
        { path: "/technology", name: "technology", component: ot }
      ],
      vt = dt,
      pt = (s("f9e3"), s("2dd8"), s("ecee")),
      mt = s("ad3d"),
      ut = s("c074");
    (e["default"].config.productionTip = !1),
      pt["c"].add(
        ut["d"],
        ut["j"],
        ut["f"],
        ut["c"],
        ut["b"],
        ut["i"],
        ut["g"],
        ut["a"],
        ut["h"],
        ut["e"],
        ut["k"]
      ),
      e["default"].component("font-awesome-icon", mt["a"]),
      e["default"].use(v["a"]),
      e["default"].use(p["a"]);
    var Ct = new p["a"]({ routes: vt });
    new e["default"]({
      render: function(t) {
        return t(d);
      },
      router: Ct
    }).$mount("#app");
  },
  5715: function(t, a, s) {
    "use strict";
    var e = s("9487"),
      i = s.n(e);
    i.a;
  },
  5738: function(t, a, s) {},
  "590f": function(t, a, s) {},
  "5a03": function(t, a, s) {
    "use strict";
    var e = s("e057"),
      i = s.n(e);
    i.a;
  },
  "5b0d": function(t, a, s) {},
  "5e53": function(t, a, s) {},
  "5f82": function(t, a, s) {},
  "60da4": function(t, a, s) {
    t.exports = s.p + "img/img-1.8f327b2c.png";
  },
  "6ccf": function(t, a, s) {},
  "6d43": function(t, a, s) {
    "use strict";
    var e = s("f4a1"),
      i = s.n(e);
    i.a;
  },
  "70fc": function(t, a, s) {
    t.exports = s.p + "img/img-5.ee6732a4.png";
  },
  "72a0": function(t, a, s) {
    "use strict";
    var e = s("8e80"),
      i = s.n(e);
    i.a;
  },
  "733d": function(t, a, s) {},
  7454: function(t, a, s) {},
  "775b": function(t, a, s) {
    t.exports = s.p + "img/img-14.345767d4.png";
  },
  7812: function(t, a, s) {},
  "7a9b": function(t, a, s) {
    t.exports = s.p + "img/img-2.258b3607.png";
  },
  "7c16": function(t, a, s) {
    "use strict";
    var e = s("9375"),
      i = s.n(e);
    i.a;
  },
  "7d2a": function(t, a, s) {
    "use strict";
    var e = s("3361"),
      i = s.n(e);
    i.a;
  },
  "7dcb": function(t, a, s) {},
  "80d2": function(t, a, s) {
    "use strict";
    var e = s("7dcb"),
      i = s.n(e);
    i.a;
  },
  "85ec": function(t, a, s) {},
  "860b": function(t, a, s) {
    "use strict";
    var e = s("733d"),
      i = s.n(e);
    i.a;
  },
  "86d4": function(t, a, s) {
    t.exports = s.p + "img/img-4.63c50fab.png";
  },
  8928: function(t, a, s) {
    "use strict";
    var e = s("b84c"),
      i = s.n(e);
    i.a;
  },
  "89ac": function(t, a, s) {
    t.exports = s.p + "img/img-4.4cd564a7.png";
  },
  "8e80": function(t, a, s) {},
  9091: function(t, a, s) {
    t.exports = s.p + "img/img-11.f7494255.png";
  },
  9375: function(t, a, s) {},
  9487: function(t, a, s) {},
  "959e": function(t, a, s) {
    t.exports = s.p + "img/img-2.a7365b11.png";
  },
  9696: function(t, a, s) {},
  9853: function(t, a, s) {
    t.exports = s.p + "img/cloud.f5dd0d9b.svg";
  },
  "9a77": function(t, a, s) {
    t.exports = s.p + "img/img-3.3cc6bb45.png";
  },
  "9ffd": function(t, a, s) {},
  a645: function(t, a, s) {
    t.exports = s.p + "img/img-12.836d073c.png";
  },
  a882: function(t, a, s) {
    t.exports = s.p + "img/img-7.cc7bd2b2.png";
  },
  afe7: function(t, a, s) {},
  b322: function(t, a, s) {
    "use strict";
    var e = s("46d6"),
      i = s.n(e);
    i.a;
  },
  b681: function(t, a, s) {
    "use strict";
    var e = s("39db"),
      i = s.n(e);
    i.a;
  },
  b84c: function(t, a, s) {},
  baa9: function(t, a, s) {
    "use strict";
    var e = s("cc13"),
      i = s.n(e);
    i.a;
  },
  c03b: function(t, a, s) {
    "use strict";
    var e = s("9696"),
      i = s.n(e);
    i.a;
  },
  c80c: function(t, a, s) {
    t.exports = s.p + "img/img-10.73b10d5d.png";
  },
  c8d5: function(t, a, s) {
    t.exports = s.p + "img/img-9.9767e3ae.png";
  },
  cc13: function(t, a, s) {},
  d58e: function(t, a, s) {},
  d5f2: function(t, a, s) {
    t.exports = s.p + "img/img-3.8bae1679.png";
  },
  d76d: function(t, a, s) {
    t.exports = s.p + "img/img-6.56acce51.png";
  },
  e057: function(t, a, s) {},
  e347: function(t, a, s) {
    t.exports = s.p + "img/logo.670f1991.svg";
  },
  e91c: function(t, a, s) {
    t.exports = s.p + "img/img-1.0c74dfe7.png";
  },
  e9e0: function(t, a, s) {
    t.exports = s.p + "img/img-4.d7938c16.png";
  },
  edc1: function(t, a, s) {},
  f4a1: function(t, a, s) {},
  f61e: function(t, a, s) {
    "use strict";
    var e = s("7812"),
      i = s.n(e);
    i.a;
  },
  fa32: function(t, a, s) {
    t.exports = s.p + "img/img-7.66d2351f.png";
  },
  fa70: function(t, a, s) {},
  fd89: function(t, a, s) {},
  fdfc: function(t, a, s) {
    "use strict";
    var e = s("0167"),
      i = s.n(e);
    i.a;
  },
  fe6f: function(t, a, s) {
    "use strict";
    var e = s("5f82"),
      i = s.n(e);
    i.a;
  },
  fff1: function(t, a, s) {
    t.exports = s.p + "img/img-3.71d930cf.png";
  }
});
//# sourceMappingURL=app.b8cafb54.js.map
