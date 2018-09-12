/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ServerApp/Server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Components/common/CodeCampMenu.js":
/*!*****************************************************!*\
  !*** ./ClientApp/Components/common/CodeCampMenu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CodeCampMenu;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeCampMenu() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'header__open-button-mobile' },
            _react2.default.createElement(
                'a',
                { href: '', className: 'js-open-main-menu' },
                _react2.default.createElement('i', { className: 'fa fa-bars' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'header__user' },
            _react2.default.createElement('img', {
                src: 'assets/images/user-icon.png',
                className: 'header__user__icon',
                alt: 'User Icon'
            }),
            _react2.default.createElement(
                'span',
                { className: 'header__user__hello' },
                'Hello, stranger'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/login' },
                'Login'
            )
        ),
        _react2.default.createElement(
            'ul',
            { className: 'header__menu-list js-menu' },
            _react2.default.createElement(
                'li',
                { className: 'close-button-mobile' },
                _react2.default.createElement(
                    'a',
                    { href: '', className: 'js-close-main-menu' },
                    _react2.default.createElement('i', { className: 'fa fa-remove' })
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Home'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/speakers' },
                    'Speakers'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'social-icon' },
                _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-twitter', 'aria-hidden': 'true' })
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'social-icon' },
                _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-facebook', 'aria-hidden': 'true' })
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'social-icon' },
                _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-linkedin', 'aria-hidden': 'true' })
                )
            )
        )
    );
}

/***/ }),

/***/ "./ClientApp/Components/common/Footer.js":
/*!***********************************************!*\
  !*** ./ClientApp/Components/common/Footer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement(
      "div",
      { className: "container-main" },
      _react2.default.createElement("div", { className: "footer__menu" }),
      _react2.default.createElement(
        "div",
        { className: "footer__disclaimer" },
        _react2.default.createElement(
          "p",
          null,
          "Code Stars Summit and Silicon Valley Code Camp (tm) are trademarks of 73rd Street Associates (Copyright \xA9"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Site built with ASP.NET, WebAPI2, React and more by \xA0",
          _react2.default.createElement(
            "strong",
            null,
            "PeterKellner.net"
          )
        )
      )
    )
  );
}

/***/ }),

/***/ "./ClientApp/Components/common/FullPage.js":
/*!*************************************************!*\
  !*** ./ClientApp/Components/common/FullPage.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _CodeCampMenu = __webpack_require__(/*! ./CodeCampMenu */ "./ClientApp/Components/common/CodeCampMenu.js");

var _CodeCampMenu2 = _interopRequireDefault(_CodeCampMenu);

var _PageTop = __webpack_require__(/*! ./PageTop */ "./ClientApp/Components/common/PageTop.js");

var _PageTop2 = _interopRequireDefault(_PageTop);

var _Footer = __webpack_require__(/*! ./Footer */ "./ClientApp/Components/common/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Routes = __webpack_require__(/*! ../../Routes */ "./ClientApp/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullPage = function (_Component) {
    _inherits(FullPage, _Component);

    function FullPage(props) {
        _classCallCheck(this, FullPage);

        var _this = _possibleConstructorReturn(this, (FullPage.__proto__ || Object.getPrototypeOf(FullPage)).call(this, props));

        _this.handler = _this.handler.bind(_this);
        return _this;
    }

    _createClass(FullPage, [{
        key: 'handler',
        value: function handler(val) {
            this.props.action();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _PageTop2.default,
                    null,
                    _react2.default.createElement(_CodeCampMenu2.default, null)
                ),
                _react2.default.createElement(_Routes2.default, { action: this.handler }),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return FullPage;
}(_react.Component);

FullPage.defaultProps = {};

exports.default = FullPage;

/***/ }),

/***/ "./ClientApp/Components/common/Login.js":
/*!**********************************************!*\
  !*** ./ClientApp/Components/common/Login.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Login() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Login Page Place Holder'
    )
  );
}

/***/ }),

/***/ "./ClientApp/Components/common/PageTop.js":
/*!************************************************!*\
  !*** ./ClientApp/Components/common/PageTop.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageTop;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageTop(props) {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      { className: 'header' },
      _react2.default.createElement(
        'div',
        { className: 'container-main d-flex align-items-center justify-content-between' },
        _react2.default.createElement(
          'a',
          { href: '/', rel: 'home', className: 'header-logo' },
          _react2.default.createElement('img', { src: 'assets/images/SVCClogo.png', alt: 'SVCC' })
        ),
        props.children
      )
    )
  );
}

PageTop.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

/***/ }),

/***/ "./ClientApp/Components/home/Home.js":
/*!*******************************************!*\
  !*** ./ClientApp/Components/home/Home.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HomeHeader = __webpack_require__(/*! ./HomeHeader */ "./ClientApp/Components/home/HomeHeader.js");

var _HomeHeader2 = _interopRequireDefault(_HomeHeader);

var _HomeContainer = __webpack_require__(/*! ./HomeContainer */ "./ClientApp/Components/home/HomeContainer.js");

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_HomeHeader2.default, null),
    _react2.default.createElement(_HomeContainer2.default, null)
  );
}

Home.propTypes = {
  notify: _propTypes2.default.func
};

/***/ }),

/***/ "./ClientApp/Components/home/HomeContainer.js":
/*!****************************************************!*\
  !*** ./ClientApp/Components/home/HomeContainer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HomeContainer;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HomeSpeakersCarousel = __webpack_require__(/*! ./HomeSpeakersCarousel */ "./ClientApp/Components/home/HomeSpeakersCarousel.js");

var _HomeSpeakersCarousel2 = _interopRequireDefault(_HomeSpeakersCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeContainer() {
  return _react2.default.createElement(
    'div',
    { className: 'container-main events' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-12' },
        _react2.default.createElement(_HomeSpeakersCarousel2.default, null)
      )
    )
  );
}

/***/ }),

/***/ "./ClientApp/Components/home/HomeHeader.js":
/*!*************************************************!*\
  !*** ./ClientApp/Components/home/HomeHeader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HomeHeader;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeHeader() {
  return _react2.default.createElement(
    "div",
    { className: "jumbo-events" },
    _react2.default.createElement(
      "div",
      { className: "container-main" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-12 col-sm-4 jumbo-events__info" },
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__participants" },
            "527"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__participants-label" },
            "Participants"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__when-label" },
            "When"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__when" },
            "April 1st 2017"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__where-label" },
            "Where"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__where" },
            "Evergreen College, San Jose, CA"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__directions" },
            _react2.default.createElement(
              "a",
              { href: "" },
              "See directions"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-12 col-sm-8" },
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__title" },
            "SVCC 2017"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__description" },
            "Silicon Valley Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-events__buttons" },
            _react2.default.createElement(
              "div",
              { className: "dropdown" },
              _react2.default.createElement(
                "button",
                {
                  className: "btn btn-white dropdown-toggle",
                  type: "button",
                  id: "dropdownEventsJumbo",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false"
                },
                _react2.default.createElement(
                  "span",
                  { className: "dropdown__label--registered" },
                  _react2.default.createElement("i", { className: "fa fa-check", "aria-hidden": "true" }),
                  " Registered"
                )
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "dropdown-menu",
                  "aria-labelledby": "dropdownEventsJumbo"
                },
                _react2.default.createElement(
                  "a",
                  { className: "dropdown-item", href: "" },
                  "Interested?"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "dropdown-item", href: "" },
                  "Register"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "dropdown-item", href: "" },
                  "Interested"
                )
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "", className: "btn btn-primary" },
              "Update your details"
            )
          )
        )
      )
    )
  );
}

/***/ }),

/***/ "./ClientApp/Components/home/HomeSpeakersCarousel.js":
/*!***********************************************************!*\
  !*** ./ClientApp/Components/home/HomeSpeakersCarousel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HomeSpeakersCarousel;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeSpeakersCarousel() {
  return _react2.default.createElement(
    "div",
    { className: "speakers-carousel" },
    _react2.default.createElement(
      "div",
      { className: "speakers-carousel__title" },
      "Meet the speakers"
    ),
    _react2.default.createElement(
      "div",
      {
        id: "speakersCarouselIndicators",
        className: "carousel slide d-flex align-items-center",
        "data-interval": "false"
      },
      _react2.default.createElement(
        "div",
        { className: "carousel-inner", role: "listbox" },
        _react2.default.createElement(
          "div",
          { className: "carousel-item  active " },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker0.png",
                  alt: "Diane Green"
                })
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "speaker-name" },
                  "Diane Green"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-position" },
                  "Senior Vice President"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-company" },
                  "Google Cloud"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker1.png",
                  alt: "Marc Andreessen"
                })
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "speaker-name" },
                  "Marc Andreessen"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-position" },
                  "Cofounder and General Partner"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-company" },
                  "Andreessen Horowitz"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker2.png",
                  alt: "Llewellyn Falco"
                }),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-name" },
                    "Llewellyn Falco"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-position" },
                    "Inventor of Approval testing"
                  ),
                  _react2.default.createElement("div", { className: "speaker-company" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker3.png",
                  alt: "Stefania Kaczmarczyk"
                }),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-name" },
                    "Stefania Kaczmarczyk"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-position" },
                    "Developer advocate"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-company" },
                    "IBM"
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "carousel-item " },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker0.png",
                  alt: "Diane Green"
                }),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-name" },
                    "Diane Green"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-position" },
                    "Senior Vice President"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "speaker-company" },
                    "Google Cloud"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
                _react2.default.createElement(
                  "div",
                  { className: "speaker-photo" },
                  _react2.default.createElement("img", {
                    src: "assets/images/speakers/speaker1.png",
                    alt: "Marc Andreessen"
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-name" },
                  "Marc Andreessen"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-position" },
                  "Cofounder and General Partner"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-company" },
                  "Andreessen Horowitz"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker2.png",
                  alt: "Llewellyn Falco"
                })
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "speaker-name" },
                  "Llewellyn Falco"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-position" },
                  "Inventor of Approval testing"
                )
              ),
              _react2.default.createElement("div", { className: "speaker-company" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
            _react2.default.createElement(
              "div",
              { className: "speaker-photo" },
              _react2.default.createElement("img", {
                src: "assets/images/speakers/speaker3.png",
                alt: "Stefania Kaczmarczyk"
              })
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "div",
                { className: "speaker-name" },
                "Stefania Kaczmarczyk"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-position" },
                "Developer advocate"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-company" },
                "IBM"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "carousel-item " },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker0.png",
                  alt: "Diane Green"
                })
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  { className: "speaker-name" },
                  "Diane Green"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-position" },
                  "Senior Vice President"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "speaker-company" },
                  "Google Cloud"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
              _react2.default.createElement(
                "div",
                { className: "speaker-photo" },
                _react2.default.createElement("img", {
                  src: "assets/images/speakers/speaker1.png",
                  alt: "Marc Andreessen"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-name" },
                "Marc Andreessen"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-position" },
                "Cofounder and General Partner"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-company" },
                "Andreessen Horowitz"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
            _react2.default.createElement(
              "div",
              { className: "speaker-photo" },
              _react2.default.createElement("img", {
                src: "assets/images/speakers/speaker2.png",
                alt: "Llewellyn Falco"
              })
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "div",
                { className: "speaker-name" },
                "Llewellyn Falco"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-position" },
                "Inventor of Approval testing"
              ),
              _react2.default.createElement("div", { className: "speaker-company" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block" },
            _react2.default.createElement(
              "div",
              { className: "speaker-photo" },
              _react2.default.createElement("img", {
                src: "assets/images/speakers/speaker3.png",
                alt: "Stefania Kaczmarczyk"
              })
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "div",
                { className: "speaker-name" },
                "Stefania Kaczmarczyk"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-position" },
                "Developer advocate"
              ),
              _react2.default.createElement(
                "div",
                { className: "speaker-company" },
                "IBM"
              )
            )
          )
        ),
        _react2.default.createElement(
          "ol",
          { className: "carousel-indicators" },
          _react2.default.createElement("li", {
            "data-target": "#speakersCarouselIndicators",
            "data-slide-to": "0",
            className: "active"
          }),
          _react2.default.createElement("li", { "data-target": "#speakersCarouselIndicators", "data-slide-to": "1" }),
          _react2.default.createElement("li", { "data-target": "#speakersCarouselIndicators", "data-slide-to": "2" })
        )
      ),
      _react2.default.createElement(
        "a",
        {
          className: "carousel-control-prev",
          href: "#speakersCarouselIndicators",
          role: "button",
          "data-slide": "prev"
        },
        _react2.default.createElement("i", { className: "fa fa-angle-left", "aria-hidden": "true" })
      ),
      _react2.default.createElement(
        "a",
        {
          className: "carousel-control-next",
          href: "#speakersCarouselIndicators",
          role: "button",
          "data-slide": "next"
        },
        _react2.default.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })
      )
    )
  );
}

/***/ }),

/***/ "./ClientApp/Components/speakers/Speakers.js":
/*!***************************************************!*\
  !*** ./ClientApp/Components/speakers/Speakers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Speakers;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _SpeakersHeader = __webpack_require__(/*! ./SpeakersHeader */ "./ClientApp/Components/speakers/SpeakersHeader.js");

var _SpeakersHeader2 = _interopRequireDefault(_SpeakersHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Speakers(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_SpeakersHeader2.default, null)
  );
}

/***/ }),

/***/ "./ClientApp/Components/speakers/SpeakersHeader.js":
/*!*********************************************************!*\
  !*** ./ClientApp/Components/speakers/SpeakersHeader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpeakersHeader;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpeakersHeader() {
  return _react2.default.createElement(
    "div",
    { className: "jumbo-common  speakers " },
    _react2.default.createElement(
      "div",
      { className: "container-main" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-12" },
          _react2.default.createElement(
            "div",
            { className: "jumbo-common__tip" },
            "Name of the event"
          ),
          _react2.default.createElement(
            "div",
            { className: "jumbo-common__content" },
            _react2.default.createElement(
              "h1",
              { className: "jumbo-common__title" },
              "The Speakers"
            ),
            _react2.default.createElement(
              "div",
              { className: "jumbo-common__desc" },
              "Silicon Valley Code Camp is the Perfect place to watch engaging and entertaining talks given by industry experts and luminaries, and meet with developers for enaging and motivating conversations around specific topics......"
            )
          )
        )
      )
    )
  );
}

/***/ }),

/***/ "./ClientApp/RouteNotFound.js":
/*!************************************!*\
  !*** ./ClientApp/RouteNotFound.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteNotFound = function (_Component) {
    _inherits(RouteNotFound, _Component);

    function RouteNotFound() {
        _classCallCheck(this, RouteNotFound);

        return _possibleConstructorReturn(this, (RouteNotFound.__proto__ || Object.getPrototypeOf(RouteNotFound)).apply(this, arguments));
    }

    _createClass(RouteNotFound, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h1',
                            null,
                            '404 : Not Found!'
                        )
                    );
                } });
        }
    }]);

    return RouteNotFound;
}(_react.Component);

RouteNotFound.defaultProps = {};

exports.default = RouteNotFound;

/***/ }),

/***/ "./ClientApp/Routes.js":
/*!*****************************!*\
  !*** ./ClientApp/Routes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Home = __webpack_require__(/*! ./Components/home/Home */ "./ClientApp/Components/home/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _Speakers = __webpack_require__(/*! ./Components/speakers/Speakers */ "./ClientApp/Components/speakers/Speakers.js");

var _Speakers2 = _interopRequireDefault(_Speakers);

var _Login = __webpack_require__(/*! ./Components/common/Login */ "./ClientApp/Components/common/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _RouteNotFound = __webpack_require__(/*! ./RouteNotFound */ "./ClientApp/RouteNotFound.js");

var _RouteNotFound2 = _interopRequireDefault(_RouteNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes(props) {
        _classCallCheck(this, Routes);

        var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));

        _this.handler = _this.handler.bind(_this);
        return _this;
    }

    _createClass(Routes, [{
        key: 'handler',
        value: function handler() {
            this.props.action();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/speakers', component: _Speakers2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                            return _react2.default.createElement(_RouteNotFound2.default, null);
                        } })
                )
            );
        }
    }]);

    return Routes;
}(_react.Component);

Routes.propTypes = {};
Routes.defaultProps = {};

exports.default = Routes;

/***/ }),

/***/ "./ServerApp/Renderer.js":
/*!*******************************!*\
  !*** ./ServerApp/Renderer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _FullPage = __webpack_require__(/*! ../ClientApp/Components/common/FullPage */ "./ClientApp/Components/common/FullPage.js");

var _FullPage2 = _interopRequireDefault(_FullPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var context = {};
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(_FullPage2.default, null)
    ));

    return {
        htmlcode: '<html>\n          <head>\n            <title>SVCC React Application</title>\n            <link rel="stylesheet" href="App.css">            \n          </head>\n          \n          <body>\n            <div id="app">' + content + '</div>\n            <script src="clientbundle.js"></script>\n          </body>\n          \n        </html>\n      ',
        routestatus: context.status
    };
};

/***/ }),

/***/ "./ServerApp/Server.js":
/*!*****************************!*\
  !*** ./ServerApp/Server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Renderer = __webpack_require__(/*! ./Renderer */ "./ServerApp/Renderer.js");

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(/*! express */ "express");
var app = express();

app.use(express.static('public', {
    index: false
}));

app.get('*', function (req, res) {
    var rendererInstance = (0, _Renderer2.default)(req);

    if (rendererInstance.routestatus == 404) {
        res.status(404).end("Not found, 404 status returned");
    } else {
        res.send((0, _Renderer2.default)(req).htmlcode);
    }
});

app.listen(3040, function () {
    console.log('Listening on port 3040!');
});

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=serverbundle.js.map