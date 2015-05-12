/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
	'use strict';

	/*
	 * Global api.
	 */
	var skrollr = {
		get: function() {
			return _instance;
		},
		//Main entry point.
		init: function(options) {
			return _instance || new Skrollr(options);
		},
		VERSION: '0.6.29'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	//They will be filled when skrollr gets initialized.
	var documentElement;
	var body;

	var EVENT_TOUCHSTART = 'touchstart';
	var EVENT_TOUCHMOVE = 'touchmove';
	var EVENT_TOUCHCANCEL = 'touchcancel';
	var EVENT_TOUCHEND = 'touchend';

	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
	var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
	var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
	var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
	var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000;//ms
	var DEFAULT_MOBILE_DECELERATION = 0.004;//pixel/ms²

	var DEFAULT_SKROLLRBODY = 'skrollr-body';

	var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

	var rxTrim = /^\s+|\s+$/g;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z0-9_])/g;
	var rxCamelCaseFn = function(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix = '';
	var theDashedCSSPrefix = '';

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if(!getStyle) {
			return;
		}

		var style = getStyle(body, null);

		for(var k in style) {
			//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
			theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

			if(theCSSPrefix) {
				break;
			}
		}

		//Did we even detect a prefix?
		if(!theCSSPrefix) {
			theCSSPrefix = theDashedCSSPrefix = '';

			return;
		}

		theCSSPrefix = theCSSPrefix[0];

		//We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
		if(theCSSPrefix.slice(0,1) === '-') {
			theDashedCSSPrefix = theCSSPrefix;

			//There's no logic behind these. Need a look up.
			theCSSPrefix = ({
				'-webkit-': 'webkit',
				'-moz-': 'Moz',
				'-ms-': 'ms',
				'-o-': 'O'
			})[theCSSPrefix];
		} else {
			theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
		}
	};

	var polyfillRAF = function() {
		var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

		var lastTime = _now();

		if(_isMobile || !requestAnimFrame) {
			requestAnimFrame = function(callback) {
				//How long did it take to render?
				var deltaTime = _now() - lastTime;
				var delay = Math.max(0, 1000 / 60 - deltaTime);

				return window.setTimeout(function() {
					lastTime = _now();
					callback();
				}, delay);
			};
		}

		return requestAnimFrame;
	};

	var polyfillCAF = function() {
		var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

		if(_isMobile || !cancelAnimFrame) {
			cancelAnimFrame = function(timeout) {
				return window.clearTimeout(timeout);
			};
		}

		return cancelAnimFrame;
	};

	//Built-in easing functions.
	var easings = {
		begin: function() {
			return 0;
		},
		end: function() {
			return 1;
		},
		linear: function(p) {
			return p;
		},
		quadratic: function(p) {
			return p * p;
		},
		cubic: function(p) {
			return p * p * p;
		},
		swing: function(p) {
			return (-Math.cos(p * Math.PI) / 2) + 0.5;
		},
		sqrt: function(p) {
			return Math.sqrt(p);
		},
		outCubic: function(p) {
			return (Math.pow((p - 1), 3) + 1);
		},
		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function(p) {
			var a;

			if(p <= 0.5083) {
				a = 3;
			} else if(p <= 0.8489) {
				a = 9;
			} else if(p <= 0.96208) {
				a = 27;
			} else if(p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
	 * Constructor.
	 */
	function Skrollr(options) {
		documentElement = document.documentElement;
		body = document.body;

		detectCSSPrefix();

		_instance = this;

		options = options || {};

		_constants = options.constants || {};

		//We allow defining custom easings or overwrite existing.
		if(options.easing) {
			for(var e in options.easing) {
				easings[e] = options.easing[e];
			}
		}

		_edgeStrategy = options.edgeStrategy || 'set';

		_listeners = {
			//Function to be called right before rendering.
			beforerender: options.beforerender,

			//Function to be called right after finishing rendering.
			render: options.render,

			//Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
			keyframe: options.keyframe
		};

		//forceHeight is true by default
		_forceHeight = options.forceHeight !== false;

		if(_forceHeight) {
			_scale = options.scale || 1;
		}

		_mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

		_smoothScrollingEnabled = options.smoothScrolling !== false;
		_smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

		//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
		_smoothScrolling = {
			targetTop: _instance.getScrollTop()
		};

		//A custom check function may be passed.
		_isMobile = ((options.mobileCheck || function() {
			return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
		})());

		if(_isMobile) {
			_skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY);

			//Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
			if(_skrollrBody) {
				_detect3DTransforms();
			}

			_initMobile();
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
		} else {
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
		}

		//Triggers parsing of elements and a first reflow.
		_instance.refresh();

		_addEvent(window, 'resize orientationchange', function() {
			var width = documentElement.clientWidth;
			var height = documentElement.clientHeight;

			//Only reflow if the size actually changed (#271).
			if(height !== _lastViewportHeight || width !== _lastViewportWidth) {
				_lastViewportHeight = height;
				_lastViewportWidth = width;

				_requestReflow = true;
			}
		});

		var requestAnimFrame = polyfillRAF();

		//Let's go.
		(function animloop(){
			_render();
			_animFrame = requestAnimFrame(animloop);
		}());

		return _instance;
	}

	/**
	 * (Re)parses some or all elements.
	 */
	Skrollr.prototype.refresh = function(elements) {
		var elementIndex;
		var elementsLength;
		var ignoreID = false;

		//Completely reparse anything without argument.
		if(elements === undefined) {
			//Ignore that some elements may already have a skrollable ID.
			ignoreID = true;

			_skrollables = [];
			_skrollableIdCounter = 0;

			elements = document.getElementsByTagName('*');
		} else if(elements.length === undefined) {
			//We also accept a single element as parameter.
			elements = [elements];
		}

		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var el = elements[elementIndex];
			var anchorTarget = el;
			var keyFrames = [];

			//If this particular element should be smooth scrolled.
			var smoothScrollThis = _smoothScrollingEnabled;

			//The edge strategy for this particular element.
			var edgeStrategy = _edgeStrategy;

			//If this particular element should emit keyframe events.
			var emitEvents = false;

			//If we're reseting the counter, remove any old element ids that may be hanging around.
			if(ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				delete el[SKROLLABLE_ID_DOM_PROPERTY];
			}

			if(!el.attributes) {
				continue;
			}

			//Iterate over all attributes and search for key frame attributes.
			var attributeIndex = 0;
			var attributesLength = el.attributes.length;

			for (; attributeIndex < attributesLength; attributeIndex++) {
				var attr = el.attributes[attributeIndex];

				if(attr.name === 'data-anchor-target') {
					anchorTarget = document.querySelector(attr.value);

					if(anchorTarget === null) {
						throw 'Unable to find anchor target "' + attr.value + '"';
					}

					continue;
				}

				//Global smooth scrolling can be overridden by the element attribute.
				if(attr.name === 'data-smooth-scrolling') {
					smoothScrollThis = attr.value !== 'off';

					continue;
				}

				//Global edge strategy can be overridden by the element attribute.
				if(attr.name === 'data-edge-strategy') {
					edgeStrategy = attr.value;

					continue;
				}

				//Is this element tagged with the `data-emit-events` attribute?
				if(attr.name === 'data-emit-events') {
					emitEvents = true;

					continue;
				}

				var match = attr.name.match(rxKeyframeAttribute);

				if(match === null) {
					continue;
				}

				var kf = {
					props: attr.value,
					//Point back to the element as well.
					element: el,
					//The name of the event which this keyframe will fire, if emitEvents is
					eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
				};

				keyFrames.push(kf);

				var constant = match[1];

				if(constant) {
					//Strip the underscore prefix.
					kf.constant = constant.substr(1);
				}

				//Get the key frame offset.
				var offset = match[2];

				//Is it a percentage offset?
				if(/p$/.test(offset)) {
					kf.isPercentage = true;
					kf.offset = (offset.slice(0, -1) | 0) / 100;
				} else {
					kf.offset = (offset | 0);
				}

				var anchor1 = match[3];

				//If second anchor is not set, the first will be taken for both.
				var anchor2 = match[4] || anchor1;

				//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
				if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
					kf.mode = 'absolute';

					//data-end needs to be calculated after all key frames are known.
					if(anchor1 === ANCHOR_END) {
						kf.isEnd = true;
					} else if(!kf.isPercentage) {
						//For data-start we can already set the key frame w/o calculations.
						//#59: "scale" options should only affect absolute mode.
						kf.offset = kf.offset * _scale;
					}
				}
				//"relative" mode, where numbers are relative to anchors.
				else {
					kf.mode = 'relative';
					kf.anchors = [anchor1, anchor2];
				}
			}

			//Does this element have key frames?
			if(!keyFrames.length) {
				continue;
			}

			//Will hold the original style and class attributes before we controlled the element (see #80).
			var styleAttr, classAttr;

			var id;

			if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				//We already have this element under control. Grab the corresponding skrollable id.
				id = el[SKROLLABLE_ID_DOM_PROPERTY];
				styleAttr = _skrollables[id].styleAttr;
				classAttr = _skrollables[id].classAttr;
			} else {
				//It's an unknown element. Asign it a new skrollable id.
				id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
				styleAttr = el.style.cssText;
				classAttr = _getClass(el);
			}

			_skrollables[id] = {
				element: el,
				styleAttr: styleAttr,
				classAttr: classAttr,
				anchorTarget: anchorTarget,
				keyFrames: keyFrames,
				smoothScrolling: smoothScrollThis,
				edgeStrategy: edgeStrategy,
				emitEvents: emitEvents,
				lastFrameIndex: -1
			};

			_updateClass(el, [SKROLLABLE_CLASS], []);
		}

		//Reflow for the first time.
		_reflow();

		//Now that we got all key frame numbers right, actually parse the properties.
		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

			if(sk === undefined) {
				continue;
			}

			//Parse the property string to objects
			_parseProps(sk);

			//Fill key frames with missing properties from left and right
			_fillProps(sk);
		}

		return _instance;
	};

	/**
	 * Transform "relative" mode to "absolute" mode.
	 * That is, calculate anchor position and offset of element.
	 */
	Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
		var viewportHeight = documentElement.clientHeight;
		var box = element.getBoundingClientRect();
		var absolute = box.top;

		//#100: IE doesn't supply "height" with getBoundingClientRect.
		var boxHeight = box.bottom - box.top;

		if(viewportAnchor === ANCHOR_BOTTOM) {
			absolute -= viewportHeight;
		} else if(viewportAnchor === ANCHOR_CENTER) {
			absolute -= viewportHeight / 2;
		}

		if(elementAnchor === ANCHOR_BOTTOM) {
			absolute += boxHeight;
		} else if(elementAnchor === ANCHOR_CENTER) {
			absolute += boxHeight / 2;
		}

		//Compensate scrolling since getBoundingClientRect is relative to viewport.
		absolute += _instance.getScrollTop();

		return (absolute + 0.5) | 0;
	};

	/**
	 * Animates scroll top to new position.
	 */
	Skrollr.prototype.animateTo = function(top, options) {
		options = options || {};

		var now = _now();
		var scrollTop = _instance.getScrollTop();

		//Setting this to a new value will automatically cause the current animation to stop, if any.
		_scrollAnimation = {
			startTop: scrollTop,
			topDiff: top - scrollTop,
			targetTop: top,
			duration: options.duration || DEFAULT_DURATION,
			startTime: now,
			endTime: now + (options.duration || DEFAULT_DURATION),
			easing: easings[options.easing || DEFAULT_EASING],
			done: options.done
		};

		//Don't queue the animation if there's nothing to animate.
		if(!_scrollAnimation.topDiff) {
			if(_scrollAnimation.done) {
				_scrollAnimation.done.call(_instance, false);
			}

			_scrollAnimation = undefined;
		}

		return _instance;
	};

	/**
	 * Stops animateTo animation.
	 */
	Skrollr.prototype.stopAnimateTo = function() {
		if(_scrollAnimation && _scrollAnimation.done) {
			_scrollAnimation.done.call(_instance, true);
		}

		_scrollAnimation = undefined;
	};

	/**
	 * Returns if an animation caused by animateTo is currently running.
	 */
	Skrollr.prototype.isAnimatingTo = function() {
		return !!_scrollAnimation;
	};

	Skrollr.prototype.isMobile = function() {
		return _isMobile;
	};

	Skrollr.prototype.setScrollTop = function(top, force) {
		_forceRender = (force === true);

		if(_isMobile) {
			_mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
		} else {
			window.scrollTo(0, top);
		}

		return _instance;
	};

	Skrollr.prototype.getScrollTop = function() {
		if(_isMobile) {
			return _mobileOffset;
		} else {
			return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
		}
	};

	Skrollr.prototype.getMaxScrollTop = function() {
		return _maxKeyFrame;
	};

	Skrollr.prototype.on = function(name, fn) {
		_listeners[name] = fn;

		return _instance;
	};

	Skrollr.prototype.off = function(name) {
		delete _listeners[name];

		return _instance;
	};

	Skrollr.prototype.destroy = function() {
		var cancelAnimFrame = polyfillCAF();
		cancelAnimFrame(_animFrame);
		_removeAllEvents();

		_updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			_reset(_skrollables[skrollableIndex].element);
		}

		documentElement.style.overflow = body.style.overflow = '';
		documentElement.style.height = body.style.height = '';

		if(_skrollrBody) {
			skrollr.setStyle(_skrollrBody, 'transform', 'none');
		}

		_instance = undefined;
		_skrollrBody = undefined;
		_listeners = undefined;
		_forceHeight = undefined;
		_maxKeyFrame = 0;
		_scale = 1;
		_constants = undefined;
		_mobileDeceleration = undefined;
		_direction = 'down';
		_lastTop = -1;
		_lastViewportWidth = 0;
		_lastViewportHeight = 0;
		_requestReflow = false;
		_scrollAnimation = undefined;
		_smoothScrollingEnabled = undefined;
		_smoothScrollingDuration = undefined;
		_smoothScrolling = undefined;
		_forceRender = undefined;
		_skrollableIdCounter = 0;
		_edgeStrategy = undefined;
		_isMobile = false;
		_mobileOffset = 0;
		_translateZ = undefined;
	};

	/*
		Private methods.
	*/

	var _initMobile = function() {
		var initialElement;
		var initialTouchY;
		var initialTouchX;
		var currentElement;
		var currentTouchY;
		var currentTouchX;
		var lastTouchY;
		var deltaY;

		var initialTouchTime;
		var currentTouchTime;
		var lastTouchTime;
		var deltaTime;

		_addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
			var touch = e.changedTouches[0];

			currentElement = e.target;

			//We don't want text nodes.
			while(currentElement.nodeType === 3) {
				currentElement = currentElement.parentNode;
			}

			currentTouchY = touch.clientY;
			currentTouchX = touch.clientX;
			currentTouchTime = e.timeStamp;

			if(!rxTouchIgnoreTags.test(currentElement.tagName)) {
				e.preventDefault();
			}

			switch(e.type) {
				case EVENT_TOUCHSTART:
					//The last element we tapped on.
					if(initialElement) {
						initialElement.blur();
					}

					_instance.stopAnimateTo();

					initialElement = currentElement;

					initialTouchY = lastTouchY = currentTouchY;
					initialTouchX = currentTouchX;
					initialTouchTime = currentTouchTime;

					break;
				case EVENT_TOUCHMOVE:
					//Prevent default event on touchIgnore elements in case they don't have focus yet.
					if(rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
						e.preventDefault();
					}

					deltaY = currentTouchY - lastTouchY;
					deltaTime = currentTouchTime - lastTouchTime;

					_instance.setScrollTop(_mobileOffset - deltaY, true);

					lastTouchY = currentTouchY;
					lastTouchTime = currentTouchTime;
					break;
				default:
				case EVENT_TOUCHCANCEL:
				case EVENT_TOUCHEND:
					var distanceY = initialTouchY - currentTouchY;
					var distanceX = initialTouchX - currentTouchX;
					var distance2 = distanceX * distanceX + distanceY * distanceY;

					//Check if it was more like a tap (moved less than 7px).
					if(distance2 < 49) {
						if(!rxTouchIgnoreTags.test(initialElement.tagName)) {
							initialElement.focus();

							//It was a tap, click the element.
							var clickEvent = document.createEvent('MouseEvents');
							clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
							initialElement.dispatchEvent(clickEvent);
						}

						return;
					}

					initialElement = undefined;

					var speed = deltaY / deltaTime;

					//Cap speed at 3 pixel/ms.
					speed = Math.max(Math.min(speed, 3), -3);

					var duration = Math.abs(speed / _mobileDeceleration);
					var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
					var targetTop = _instance.getScrollTop() - targetOffset;

					//Relative duration change for when scrolling above bounds.
					var targetRatio = 0;

					//Change duration proportionally when scrolling would leave bounds.
					if(targetTop > _maxKeyFrame) {
						targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

						targetTop = _maxKeyFrame;
					} else if(targetTop < 0) {
						targetRatio = -targetTop / targetOffset;

						targetTop = 0;
					}

					duration = duration * (1 - targetRatio);

					_instance.animateTo((targetTop + 0.5) | 0, {easing: 'outCubic', duration: duration});
					break;
			}
		});

		//Just in case there has already been some native scrolling, reset it.
		window.scrollTo(0, 0);
		documentElement.style.overflow = body.style.overflow = 'hidden';
	};

	/**
	 * Updates key frames which depend on others / need to be updated on resize.
	 * That is "end" in "absolute" mode and all key frames in "relative" mode.
	 * Also handles constants, because they may change on resize.
	 */
	var _updateDependentKeyFrames = function() {
		var viewportHeight = documentElement.clientHeight;
		var processedConstants = _processConstants();
		var skrollable;
		var element;
		var anchorTarget;
		var keyFrames;
		var keyFrameIndex;
		var keyFramesLength;
		var kf;
		var skrollableIndex;
		var skrollablesLength;
		var offset;
		var constantValue;

		//First process all relative-mode elements and find the max key frame.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				offset = kf.offset;
				constantValue = processedConstants[kf.constant] || 0;

				kf.frame = offset;

				if(kf.isPercentage) {
					//Convert the offset to percentage of the viewport height.
					offset = offset * viewportHeight;

					//Absolute + percentage mode.
					kf.frame = offset;
				}

				if(kf.mode === 'relative') {
					_reset(element);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

					_reset(element, true);
				}

				kf.frame += constantValue;

				//Only search for max key frame when forceHeight is enabled.
				if(_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if(!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//#133: The document can be larger than the maxKeyFrame we found.
		_maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

		//Now process all data-end keyframes.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				constantValue = processedConstants[kf.constant] || 0;

				if(kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset + constantValue;
				}
			}

			skrollable.keyFrames.sort(_keyFrameComparator);
		}
	};

	/**
	 * Calculates and sets the style properties for the element at the given frame.
	 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
	 * @param actualFrame The actual frame we are at.
	 */
	var _calcSteps = function(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var element = skrollable.element;
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var framesLength = frames.length;
			var firstFrame = frames[0];
			var lastFrame = frames[frames.length - 1];
			var beforeFirst = frame < firstFrame.frame;
			var afterLast = frame > lastFrame.frame;
			var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
			var emitEvents = skrollable.emitEvents;
			var lastFrameIndex = skrollable.lastFrameIndex;
			var key;
			var value;

			//If we are before/after the first/last frame, set the styles according to the given edge strategy.
			if(beforeFirst || afterLast) {
				//Check if we already handled this edge case last time.
				//Note: using setScrollTop it's possible that we jumped from one edge to the other.
				if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
					continue;
				}

				//Add the skrollr-before or -after class.
				if(beforeFirst) {
					_updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the first keyframe.
					if(emitEvents && lastFrameIndex > -1) {
						_emitEvent(element, firstFrame.eventType, _direction);
						skrollable.lastFrameIndex = -1;
					}
				} else {
					_updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the last keyframe.
					if(emitEvents && lastFrameIndex < framesLength) {
						_emitEvent(element, lastFrame.eventType, _direction);
						skrollable.lastFrameIndex = framesLength;
					}
				}

				//Remember that we handled the edge case (before/after the first/last keyframe).
				skrollable.edge = beforeFirst ? -1 : 1;

				switch(skrollable.edgeStrategy) {
					case 'reset':
						_reset(element);
						continue;
					case 'ease':
						//Handle this case like it would be exactly at first/last keyframe and just pass it on.
						frame = firstOrLastFrame.frame;
						break;
					default:
					case 'set':
						var props = firstOrLastFrame.props;

						for(key in props) {
							if(hasProp.call(props, key)) {
								value = _interpolateString(props[key].value);

								//Set style or attribute.
								if(key.indexOf('@') === 0) {
									element.setAttribute(key.substr(1), value);
								} else {
									skrollr.setStyle(element, key, value);
								}
							}
						}

						continue;
				}
			} else {
				//Did we handle an edge last time?
				if(skrollable.edge !== 0) {
					_updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
					skrollable.edge = 0;
				}
			}

			//Find out between which two key frames we are right now.
			var keyFrameIndex = 0;

			for(; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
				if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for(key in left.props) {
						if(hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							//Set style or attribute.
							if(key.indexOf('@') === 0) {
								element.setAttribute(key.substr(1), value);
							} else {
								skrollr.setStyle(element, key, value);
							}
						}
					}

					//Are events enabled on this element?
					//This code handles the usual cases of scrolling through different keyframes.
					//The special cases of before first and after last keyframe are handled above.
					if(emitEvents) {
						//Did we pass a new keyframe?
						if(lastFrameIndex !== keyFrameIndex) {
							if(_direction === 'down') {
								_emitEvent(element, left.eventType, _direction);
							} else {
								_emitEvent(element, right.eventType, _direction);
							}

							skrollable.lastFrameIndex = keyFrameIndex;
						}
					}

					break;
				}
			}
		}
	};

	/**
	 * Renders all elements.
	 */
	var _render = function() {
		if(_requestReflow) {
			_requestReflow = false;
			_reflow();
		}

		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback;
		var now = _now();
		var progress;

		//Before actually rendering handle the scroll animation, if any.
		if(_scrollAnimation) {
			//It's over
			if(now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
			}

			_instance.setScrollTop(renderTop, true);
		}
		//Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
		else if(!_forceRender) {
			var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

			//The user scrolled, start new smooth scrolling.
			if(smoothScrollingDiff) {
				_smoothScrolling = {
					startTop: _lastTop,
					topDiff: renderTop - _lastTop,
					targetTop: renderTop,
					startTime: _lastRenderCall,
					endTime: _lastRenderCall + _smoothScrollingDuration
				};
			}

			//Interpolate the internal scroll position (not the actual scrollbar).
			if(now <= _smoothScrolling.endTime) {
				//Map the current progress to the new progress using easing function.
				progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

				renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
			}
		}

		//That's were we actually "scroll" on mobile.
		if(_isMobile && _skrollrBody) {
			//Set the transform ("scroll it").
			skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
		}

		//Did the scroll position even change?
		if(_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if(continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if(_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if(afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
	 * Parses the properties for each key frame of the given skrollable.
	 */
	var _parseProps = function(skrollable) {
		//Iterate over all key frames
		var keyFrameIndex = 0;
		var keyFramesLength = skrollable.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			var frame = skrollable.keyFrames[keyFrameIndex];
			var easing;
			var value;
			var prop;
			var props = {};

			var match;

			while((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if(easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
	 * Parses a value extracting numeric values and generating a format string
	 * for later interpolation of the new values in old string.
	 *
	 * @param val The CSS value to be parsed.
	 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
	 * where the first element is the format string later used
	 * and all following elements are the numeric value.
	 */
	var _parseProp = function(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function(rgba) {
			return rgba.replace(rxNumericValue, function(n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		if(theDashedCSSPrefix) {
			rxGradient.lastIndex = 0;
			val = val.replace(rxGradient, function(s) {
				return theDashedCSSPrefix + s;
			});
		}

		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function(n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
	 * Fills the key frames with missing left and right hand properties.
	 * If key frame 1 has property X and key frame 2 is missing X,
	 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
	 *
	 * @param sk A skrollable.
	 */
	var _fillProps = function(sk) {
		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex;
		var keyFramesLength;

		//Iterate over all key frames from left to right
		keyFrameIndex = 0;
		keyFramesLength = sk.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		keyFrameIndex = sk.keyFrames.length - 1;

		for(; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function(frame, propList) {
		var key;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for(key in propList) {
			//The current frame misses this property, so assign it.
			if(!hasProp.call(frame.props, key)) {
				frame.props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for(key in frame.props) {
			propList[key] = frame.props[key];
		}
	};

	/**
	 * Calculates the new values for two given values array.
	 */
	var _calcInterpolation = function(val1, val2, progress) {
		var valueIndex;
		var val1Length = val1.length;

		//They both need to have the same length
		if(val1Length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		valueIndex = 1;

		for(; valueIndex < val1Length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
		}

		return interpolated;
	};

	/**
	 * Interpolates the numeric values into the format string.
	 */
	var _interpolateString = function(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function() {
			return val[valueIndex++];
		});
	};

	/**
	 * Resets the class and style attribute to what it was before skrollr manipulated the element.
	 * Also remembers the values it had before reseting, in order to undo the reset.
	 */
	var _reset = function(elements, undo) {
		//We accept a single element or an array of elements.
		elements = [].concat(elements);

		var skrollable;
		var element;
		var elementsIndex = 0;
		var elementsLength = elements.length;

		for(; elementsIndex < elementsLength; elementsIndex++) {
			element = elements[elementsIndex];
			skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

			//Couldn't find the skrollable for this DOM element.
			if(!skrollable) {
				continue;
			}

			if(undo) {
				//Reset class and style to the "dirty" (set by skrollr) values.
				element.style.cssText = skrollable.dirtyStyleAttr;
				_updateClass(element, skrollable.dirtyClassAttr);
			} else {
				//Remember the "dirty" (set by skrollr) class and style.
				skrollable.dirtyStyleAttr = element.style.cssText;
				skrollable.dirtyClassAttr = _getClass(element);

				//Reset class and style to what it originally was.
				element.style.cssText = skrollable.styleAttr;
				_updateClass(element, skrollable.classAttr);
			}
		}
	};

	/**
	 * Detects support for 3d transforms by applying it to the skrollr-body.
	 */
	var _detect3DTransforms = function() {
		_translateZ = 'translateZ(0)';
		skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

		var computedStyle = getStyle(_skrollrBody);
		var computedTransform = computedStyle.getPropertyValue('transform');
		var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
		var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

		if(!has3D) {
			_translateZ = '';
		}
	};

	/**
	 * Set the CSS property on the given element. Sets prefixed properties as well.
	 */
	skrollr.setStyle = function(el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if(prop === 'zIndex') {
			if(isNaN(val)) {
				//If it's not a number, don't touch it.
				//It could for example be "auto" (#351).
				style[prop] = val;
			} else {
				//Floor the number.
				style[prop] = '' + (val | 0);
			}
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if(prop === 'float') {
			style.styleFloat = style.cssFloat = val;
		}
		else {
			//Need try-catch for old IE.
			try {
				//Set prefixed property if there's a prefix.
				if(theCSSPrefix) {
					style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
				}

				//Set unprefixed.
				style[prop] = val;
			} catch(ignore) {}
		}
	};

	/**
	 * Cross browser event handling.
	 */
	var _addEvent = skrollr.addEvent = function(element, names, callback) {
		var intermediate = function(e) {
			//Normalize IE event stuff.
			e = e || window.event;

			if(!e.target) {
				e.target = e.srcElement;
			}

			if(!e.preventDefault) {
				e.preventDefault = function() {
					e.returnValue = false;
					e.defaultPrevented = true;
				};
			}

			return callback.call(this, e);
		};

		names = names.split(' ');

		var name;
		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			name = names[nameCounter];

			if(element.addEventListener) {
				element.addEventListener(name, callback, false);
			} else {
				element.attachEvent('on' + name, intermediate);
			}

			//Remember the events to be able to flush them later.
			_registeredEvents.push({
				element: element,
				name: name,
				listener: callback
			});
		}
	};

	var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
		names = names.split(' ');

		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			if(element.removeEventListener) {
				element.removeEventListener(names[nameCounter], callback, false);
			} else {
				element.detachEvent('on' + names[nameCounter], callback);
			}
		}
	};

	var _removeAllEvents = function() {
		var eventData;
		var eventCounter = 0;
		var eventsLength = _registeredEvents.length;

		for(; eventCounter < eventsLength; eventCounter++) {
			eventData = _registeredEvents[eventCounter];

			_removeEvent(eventData.element, eventData.name, eventData.listener);
		}

		_registeredEvents = [];
	};

	var _emitEvent = function(element, name, direction) {
		if(_listeners.keyframe) {
			_listeners.keyframe.call(_instance, element, name, direction);
		}
	};

	var _reflow = function() {
		var pos = _instance.getScrollTop();

		//Will be recalculated by _updateDependentKeyFrames.
		_maxKeyFrame = 0;

		if(_forceHeight && !_isMobile) {
			//un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
			body.style.height = '';
		}

		_updateDependentKeyFrames();

		if(_forceHeight && !_isMobile) {
			//"force" the height.
			body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
		}

		//The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
		if(_isMobile) {
			_instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
		} else {
			//Remember and reset the scroll pos (#217).
			_instance.setScrollTop(pos, true);
		}

		_forceRender = true;
	};

	/*
	 * Returns a copy of the constants object where all functions and strings have been evaluated.
	 */
	var _processConstants = function() {
		var viewportHeight = documentElement.clientHeight;
		var copy = {};
		var prop;
		var value;

		for(prop in _constants) {
			value = _constants[prop];

			if(typeof value === 'function') {
				value = value.call(_instance);
			}
			//Percentage offset.
			else if((/p$/).test(value)) {
				value = (value.slice(0, -1) / 100) * viewportHeight;
			}

			copy[prop] = value;
		}

		return copy;
	};

	/*
	 * Returns the height of the document.
	 */
	var _getDocumentHeight = function() {
		var skrollrBodyHeight = 0;
		var bodyHeight;

		if(_skrollrBody) {
			skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
		}

		bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

		return bodyHeight - documentElement.clientHeight;
	};

	/**
	 * Returns a string of space separated classnames for the current element.
	 * Works with SVG as well.
	 */
	var _getClass = function(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
	 * Adds and removes a CSS classes.
	 * Works with SVG as well.
	 * add and remove are arrays of strings,
	 * or if remove is ommited add is a string and overwrites all classes.
	 */
	var _updateClass = function(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if(remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be removed.
		var classRemoveIndex = 0;
		var removeLength = remove.length;

		for(; classRemoveIndex < removeLength; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		val = _trim(val);

		//All classes to be added.
		var classAddIndex = 0;
		var addLength = add.length;

		for(; classAddIndex < addLength; classAddIndex++) {
			//Only add if el not already has class.
			if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
				val += ' ' + add[classAddIndex];
			}
		}

		element[prop] = _trim(val);
	};

	var _trim = function(a) {
		return a.replace(rxTrim, '');
	};

	/**
	 * Adds a space before and after the string.
	 */
	var _untrim = function(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function() {
		return +new Date();
	};

	var _keyFrameComparator = function(a, b) {
		return a.frame - b.frame;
	};

	/*
	 * Private variables.
	 */

	//Singleton
	var _instance;

	/*
		A list of all elements which should be animated associated with their the metadata.
		Exmaple skrollable with two key frames animating from 100px width to 20px:

		skrollable = {
			element: <the DOM element>,
			styleAttr: <style attribute of the element before skrollr>,
			classAttr: <class attribute of the element before skrollr>,
			keyFrames: [
				{
					frame: 100,
					props: {
						width: {
							value: ['{?}px', 100],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				},
				{
					frame: 200,
					props: {
						width: {
							value: ['{?}px', 20],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				}
			]
		};
	*/
	var _skrollables;

	var _skrollrBody;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;

	var _scale = 1;
	var _constants;

	var _mobileDeceleration;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//For detecting if it actually resized (#271).
	var _lastViewportWidth = 0;
	var _lastViewportHeight = 0;

	var _requestReflow = false;

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	var _smoothScrollingDuration;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;

	var _edgeStrategy;


	//Mobile specific vars. Will be stripped by UglifyJS when not in use.
	var _isMobile = false;

	//The virtual scroll offset when using mobile scrolling.
	var _mobileOffset = 0;

	//If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
	var _translateZ;

	//Will contain data about registered events by skrollr.
	var _registeredEvents = [];

	//Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
	var _animFrame;

	//Expose skrollr as either a global variable or a require.js module.
	if(typeof define === 'function' && define.amd) {
		define([], function () {
			return skrollr;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = skrollr;
	} else {
		window.skrollr = skrollr;
	}

}(window, document));

/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// To understand behaviors, see https://drupal.org/node/756722#behaviors
	Drupal.behaviors.my_custom_behavior = {
		attach: function (context, settings) {

/* 
 * Global Vars 
 * Variables for various functions listed below
 *
*/
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var front = $("body.front");
var portfolioLink = $(".portfolio-content .group-projects .field-name-field-portfolio-images .field-item a");

/* 
 * Document.ready Functions
 *

*/
$(document).ready(function () {
	// Set up Toggle Sidebar
	$('[data-toggle=offcanvas]').click(function () {$('.row-offcanvas').toggleClass('active');});
	
	// windowSize();
	windowSize();
	
	// clientSlider();
	//clientSlider();
	
	// Check if the current page is the front
	front.exists(function() {
		// start the carousel
		carouselDimensions();
		
		// add active class to slider navigation
		$("#frontpage-carousel-attachment ul.slide-nav li.item-0").addClass("active");

		// Click functions for Frontpage slider
		$("ul.slide-nav li.item-0").click(function() {
			$('#views-bootstrap-carousel-1').carousel(0);
			frontpageCarousel();
		});
		$("ul.slide-nav li.item-1").click(function() {
			$('#views-bootstrap-carousel-1').carousel(1);
			frontpageCarousel();
		});
		$("ul.slide-nav li.item-2").click(function() {
			$('#views-bootstrap-carousel-1').carousel(2);
			frontpageCarousel();
		});
		$("ul.slide-nav li.item-3").click(function() {
			$('#views-bootstrap-carousel-1').carousel(3);
			frontpageCarousel();
		});
	});
	
	// create the modal functionality for portfolio images
	portfolioLink.exists(function() {
		$(this).each( function( index, element ){
			var imageLink = $(this).attr('href');
			var title = $(this).children('img').attr('title');
			$(this).attr('data-toggle','modal').attr('data-img-url', imageLink).attr('href', '#image-modal');
			$(this).click(function(e) {
				$('#image-modal img').attr('src', $(this).attr('data-img-url')); 
				$('#image-modal .modal-title').text(title);
			});
		});
	});
	
});


/* 
 * $(window).scroll(function(event)
 * When a user scrolls check weather bowser is large enough for custom scrolling functionality
 *
*/
$(window).scroll(function(event) {
	if (windowWidth > 1199) {
		didScroll = true;
		hasScrolled();
	} else {
		$('header').removeClass('nav-up').addClass('nav-down');
	}
	didScroll = false;
});

/* 
 * function hasScrolled()
 * Animate header on scroll up
 *
*/
function hasScrolled() {
	var st = $(this).scrollTop();
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
	return;
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$("#header").removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}

/*  
 * $(window).resize(function()
 * Check the browser size and adjust the variables
 *
*/
$(window).resize(function() {
	// adjust the variables
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	// check if the current page is the front
	front.exists(function() {
		carouselDimensions();
	});
});


/*
 * windowSize() Function
 * Check the window size
 *
*/
function windowSize() {
	// if windowWidth is greater than 1199px, 
	if (windowWidth > 1199) {
		sklStart();
	}
	else if (windowWidth < 767) {
		$('#reasons-content .carousel').carousel('pause');
	}
	else {}
}


/*
 * carouselDimensions() Function
 * Helper function for Bootstrap frontpage carousel
 *
*/
function carouselDimensions() {
	var imgHeight = "300";
	var containers = $("#view-frontpage-carousel-slider, .view-frontpage-carousel .slider-content, .view-frontpage-carousel .carousel-inner, .view-frontpage-carousel .item");	
	// if windowWidth is greater than 1199px, 
	// synchronize the height of the carousel and browser window
	if (windowWidth > 767) {
		containers.css({"height": windowHeight + "px"});
	}
	// else, synchronize the height of the carousel and slide image
	else {
		containers.css({"height": imgHeight + "px"});
	}
}

/*
 * Bootstrap on slid.bs.carousel
 *
*/
$('#views-bootstrap-carousel-1').on('slid.bs.carousel', function () {frontpageCarousel();});

/*
 * function frontpageCarousel()
 * Helper function for Bootstrap carousel
 *
*/
function frontpageCarousel() {
	var slide = $("#views-bootstrap-carousel-1 .carousel-inner .item");
	var slideActive = $("#views-bootstrap-carousel-1 .carousel-inner .item.active");
	var activeClasses = slideActive.attr("class").split(' ');
	var activeClass = activeClasses[1];
	$("#frontpage-carousel-attachment ul.slide-nav li.active").removeClass("active");
	$("#frontpage-carousel-attachment ul.slide-nav li."+activeClass).addClass("active");
}

/*
 * function clientSlider()
 * Client slider for the frontpage.
 *
*/
/*function clientSlider() {
	var content = $("#companies-content .view-content").width();
	var contentWidth = content / 5;
	var width = contentWidth;
	var size = $("#companies-content .view-content .client").size();
	var dimensions = width * size;
	var speed = 10000;
	
	// move the last list item before the first item.
	$("#companies-content .view-content .client").css({"width" : contentWidth+"px",});
	
	$("#companies-content .view-content").css({"left" : "-"+width+"px","width" : dimensions+"px",});
	
	$("#companies-content .view-content .client:first").before($("#companies-content .view-content .client:last"));

	// when the user clicks the bttn for sliding right
	$(".slider-nav .next").click(function() {
		// get the width of the items
		var item_width = $("#companies-content .view-content .client").outerWidth();
		// calculate the new left indent of the unordered list
		var left_indent = parseInt($("#companies-content .view-content").css("left")) - item_width;
		// make the sliding effect using jquery animate
		$("#companies-content .view-content:not(:animated)").animate({
			left : left_indent
		},500, function() {
			// get the first list item and put it after the last list item
			$("#companies-content .view-content .client:last").after($("#companies-content .view-content .client:first"));
			// and get the left indent to the default -700px
			$("#companies-content .view-content").css({"left" : "-"+width+"px"});
		});
	});
	
	// when the user clicks the bttn for sliding left
	$(".slider-nav .prev").click(function() {
		// get the width of the items
		var item_width = $("#companies-content .view-content .client").outerWidth();
		// calculate the new left indent of the unordered list
		var left_indent = parseInt($("#companies-content .view-content").css("left")) + item_width;
		// make the sliding effect using jquery animate
		$("#companies-content .view-content:not(:animated)").animate({
			left : left_indent
		},500, function() {
			// get the fist list item and put it after the last list item
			$("#companies-content .view-content .client:first").before($("#companies-content .view-content .client:last"));
			// and get the left indent to the default -700px
			$("#companies-content .view-content").css({"left" : "-"+width+"px"});
		});
	});
	
	if (windowWidth > 1199) {
		var run = setInterval(function() {rotate();}, speed);
		// if mouse hover, pause the auto rotation, otherwise rotate it
		$('.client, .slider-nav .next, .slider-nav .prev').hover(
			function() {
				clearInterval(run);
			}, function() {
				run = setInterval(function() {
					rotate();
				}, speed);
			}
		);
	}
}*/

/*
 * function rotate() 
 * Helper function for frontpage carousel
 *
*/
function rotate() {$('.slider-nav .next').click();}

/*
 * sklStart()
 * Adds parallax scrolling
 *
*/
function sklStart() {
	var s = skrollr.init({});
	s.refresh($('.parallax'));
}

/*
 * $.fn.exists = function(callback)
 * Check if the element exists and if so run some code.
 *
*/
$.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {callback.call(this, args);}
	return this;
};


}};})(jQuery, Drupal, this, this.document);