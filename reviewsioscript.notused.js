//For reference only. Doesn't seem as though they generate much schema other than the basic org information

var reviewsJsonLdRendered = reviewsJsonLdRendered || !1,
  floatingWidgetPosition = ''
;(richSnippetReviewsWidgets = function () {
  var e, t, n
  arguments.length > 1
    ? ((e = arguments[0]), (n = document.getElementById(e)), (t = arguments[1]))
    : ((t = arguments.length > 0 ? arguments[0] : {}),
      (e = 'richSnippetReviewsWidget-defaultContainer'),
      (n = document.createElement('div')),
      n.setAttribute('id', e),
      document.body.appendChild(n)),
    (richSnippetRecursiveMerge = function (e, t) {
      for (var i in t)
        try {
          t[i].constructor == Object
            ? (e[i] = richSnippetRecursiveMerge(e[i], t[i]))
            : (e[i] = t[i])
        } catch (n) {
          e[i] = t[i]
        }
      return e
    })
  var r = new XMLHttpRequest()
  ;(r.onreadystatechange = function () {
    if (4 === this.readyState && !reviewsJsonLdRendered && 200 == this.status) {
      var e = this.responseText,
        i = document.createElement('script'),
        n = JSON.parse(e)
      t.data &&
        'WebPage' !== n['@type'] &&
        ((reviews = JSON.parse(e)),
        (reviews = richSnippetRecursiveMerge(reviews, t.data)),
        (e = JSON.stringify(reviews))),
        i.setAttribute('type', 'application/ld+json'),
        i.appendChild(document.createTextNode(e)),
        document.getElementsByTagName('head')[0].appendChild(i),
        (reviewsJsonLdRendered = !0)
    }
  }),
    (t.keyword && ('company' == t.contentMode || !t.contentMode)) || t.branch
      ? 'lockrite-locksmiths' == t.store
        ? (r.open(
            'GET',
            'https://api.reviews.io/json-ld-legacy/company/snippet?store=' +
              t.store +
              '&url=' +
              document.location.href +
              '&type=store_review&branch=' +
              t.branch +
              '&per_page=1',
            !0
          ),
          r.send())
        : t.branchRichSnippet
        ? (r.open(
            'GET',
            'https://api.reviews.io/json-ld-legacy/company/snippet?store=' +
              t.store +
              '&url=' +
              document.location.href +
              '&type=store_review&branch=' +
              t.branch +
              '&per_page=1',
            !0
          ),
          r.send())
        : (r.open(
            'GET',
            'https://api.reviews.io/json-ld-legacy/company/snippet?store=' +
              t.store +
              '&url=' +
              document.location.href +
              '&type=store_review&keyword=' +
              t.keyword +
              '&product_name=' +
              t.product_name +
              '&per_page=1',
            !0
          ),
          r.send())
      : (r.open(
          'GET',
          'https://api.reviews.io/json-ld/company/snippet?store=' +
            t.store +
            '&url=' +
            document.location.href,
          !0
        ),
        r.send())
  var o = 'https://widget.reviews.io/rich-snippet-reviews-widgets/widget',
    a = 'version=13b'
  ;(t.elementId = e),
    (t.origin = window.location.href),
    t.floatPosition &&
      'right' == t.floatPosition &&
      (floatingWidgetPosition = '--right')
  for (i in t)
    'sku' == i && Array.isArray(t[i]) && (t[i] = t[i].join(';')),
      a.length > 0 && (a += '&'),
      'object' != typeof t[i]
        ? (a += i + '=' + encodeURIComponent(t[i]))
        : (a += i + '=' + encodeURIComponent(JSON.stringify(t[i])))
  var s = document.createElement('IFRAME')
  if (
    ((s.name += e + '_frame'),
    (s.id += e + '_frame'),
    s.setAttribute('frameborder', 0),
    (s.width = '100%'),
    (s.scrolling = 'no'),
    (s.maxWidth = '100%'),
    (s.minWidth = '100%'),
    (s.height = (function (e) {
      var t = 200
      switch (e) {
        case 'carousel':
          t = 297
          break
        case 'floating-widget':
          t = 0
          break
        case 'text-banner':
          t = 43
          break
        default:
          t = 200
      }
      return t
    })(null != t.widgetName ? t.widgetName : '')),
    (s.title = 'Reviews Widget'),
    (n.innerHTML = ''),
    n.appendChild(s),
    (window.onresize = function () {
      ;(s.width = window.getComputedStyle(n, null).getPropertyValue('width')),
        (s.style.width =
          window.getComputedStyle(n, null).getPropertyValue('width') + 'px')
    }),
    'get' == (a.length > 1e3 ? 'post' : 'get'))
  )
    s.setAttribute('src', o + '?' + a)
  else {
    var d = document.createElement('form')
    ;(d.style = 'display:none;'),
      (d.method = 'POST'),
      (d.action = o),
      (d.target = e + '_frame')
    for (var c in t) {
      var p = document.createElement('input')
      ;(p.type = 'hidden'), (p.value = t[c]), (p.name = c), d.appendChild(p)
    }
    document.body.appendChild(d), d.submit()
  }
  var l = function (t) {
    var i
    try {
      var n = JSON.parse(t.data)
      if (void 0 != n.action)
        switch (
          ((i = window.document.querySelector('iframe#' + e + '_frame')),
          n.action)
        ) {
          case 'resize':
            n.elementId == e && (s.height = n.height)
            break
          case 'resize-load':
            s.height = n.height
            break
          case 'RUKFloatingWidget' + floatingWidgetPosition + '#Ready':
            'richSnippetReviewsWidget-defaultContainer' == e &&
              i.classList.add('RUKFloatingWidget' + floatingWidgetPosition)
            break
          case 'RUKFloatingWidget' + floatingWidgetPosition + '#Expand':
            'richSnippetReviewsWidget-defaultContainer' == e &&
              i.classList.add('expanded')
            break
          case 'RUKFloatingWidget' + floatingWidgetPosition + '#Retract':
            'richSnippetReviewsWidget-defaultContainer' == e &&
              i.classList.remove('expanded')
            break
          case 'RUKFloatingWidget' + floatingWidgetPosition + '#Dismiss':
            'richSnippetReviewsWidget-defaultContainer' == e &&
              (i.style.display = 'none')
        }
    } catch (e) {}
  }
  window.addEventListener
    ? addEventListener('message', l, !1)
    : attachEvent('onmessage', l)
}),
  'function' == typeof richSnippetReviewsWidgetsListenerCallback &&
    richSnippetReviewsWidgetsListenerCallback()
