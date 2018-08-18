module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./pages/components/Layout.js");
var _jsxFileName = "E:\\projects\\nextreact\\pages\\Contact.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Contact, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact agileits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "agileits-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "w3ls_head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Contact "), "Us")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-agileinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-7 contact-form wthree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Name:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        required: "",
        placeholder: "Name",
        name: "Name",
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Email:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        required: "",
        placeholder: "Name",
        name: "Name",
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Email:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        placeholder: "Message",
        name: "Message",
        required: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), "        "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-4 contact-right wthree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-text w3-agileits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "GET IN TOUCH :"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), " Gajanan Nagar,Wathoda layout,", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), "B/h Plazza Bar,Nagpur 99,", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), "Wing No. 3 Rajat Sankul,", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), "Nagpur-10. "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), " Telephone : 09823382184"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), " Telephone : 09823487272"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), " Email : ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto: vvisheshta@rediffmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, " vvisheshta@rediffmail.com")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, " ")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "map w3layouts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.58514549601483!2d79.09475234213525!3d21.137974275423097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d36eb5bebed3580!2sRajat+Sankul+Appartment!5e0!3m2!1sen!2sin!4v1531433286921",
        width: "600",
        height: "450",
        frameborder: "0",
        allowfullscreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "E:\\projects\\nextreact\\pages\\components\\Footer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "agile-footer-grids",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-4 agile-footer-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "History"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Establishment Year :  April 2003 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), "Nature of Work : Event  Management Solution", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), "Working Area:   All Over India", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), "Company  Turn Over:  9 Digit  figure.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), "Working strength:  700 Events On Various Themes in  last  10 years")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2 agile-footer-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "EVENT COVERED AT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Maharashtra"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "AndhraPradesh"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "MadhyaPradesh"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Chhattisgarh"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Rajasthan"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Goa"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2 agile-footer-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "EVENT COVERED AT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Jharkhand"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Gujarat"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Delhi"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Telangana"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Bihar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Kerla"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2 agile-footer-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Vvisheshta A Concept"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/Services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Services")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/Portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Contact")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, " ")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "modal-dialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "modal-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "\xD7"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Vvisheshta"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/g11.jpg",
        alt: " ",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "We know what you love"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Providing guests unique and enchanting views from their events with its exceptional amenities, makes Star Hotel one of bests in its kind.Try our Event menu, awesome services and friendly staff while you are here."))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "agileits-w3layouts-copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "\xA9 2018 Vvisheshta. All rights reserved."))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar__ = __webpack_require__("./pages/components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./pages/components/Footer.js");
var _jsxFileName = "E:\\projects\\nextreact\\pages\\components\\Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Vvisheshta- A Concept"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "keywords",
        content: "Negotiation Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, \r\nSmartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "../static/css/bootstrap.css",
        rel: "stylesheet",
        type: "text/css",
        media: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "../static/css/style.css",
        rel: "stylesheet",
        type: "text/css",
        media: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        type: "text/javascript",
        src: "../static/js/jquery-2.1.4.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/main.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        type: "text/javascript",
        src: "../static/js/jquery-2.1.4.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/main.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/new.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "../static/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "../static/css/flexslider.css",
        type: "text/css",
        media: "screen",
        property: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Amita:700|Hind|Noto+Sans",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/jquery.waypoints.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/jquery.countup.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/bootstrap.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/jquery.filterizr.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/controls.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "../static/js/jquery.chocolat.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "E:\\projects\\nextreact\\pages\\components\\Navbar.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('.counter').countUp();
      $(function () {
        $('.filtr-container').filterizr();
      });
      $(function () {
        $('.filtr-item a').Chocolat();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-2622735714" + " " + "Navbar"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2622735714" + " " + "w3ls-banner-info-bottom"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-2622735714" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2622735714" + " " + "banner-address"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2622735714" + " " + "col-md-3 banner-address-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2622735714" + " " + "fa fa-map-marker"
      }), " Gajanan Nagar, Wathoda, Nagpur.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-2622735714" + " " + "col-md-3 banner-address-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-2622735714" + " " + "fa fa-envelope"
      }), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "mailto:vvisheshta@rediffmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "mailto:vvisheshta@rediffmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-2622735714"
      }, "vvisheshta@rediffmail.com")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-2622735714" + " " + "col-md-3 banner-address-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-2622735714" + " " + "fa fa-phone"
      }), " 09823382184")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-2622735714" + " " + "col-md-3 banner-address-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2622735714" + " " + "fa fa-phone"
      }), " 09823487272")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-2622735714" + " " + "clearfix"
      }, " ")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2622735714",
        css: ".aa.jsx-2622735714{color:#000;font-family:'Amita',cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NNLEFBR21CLFdBQ21CLDRCQUUvQiIsImZpbGUiOiJwYWdlc1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlUm9vdCI6IkU6XFxwcm9qZWN0c1xcbmV4dHJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoJy5jb3VudGVyJykuY291bnRVcCgpO1xyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmZpbHRyLWNvbnRhaW5lcicpLmZpbHRlcml6cigpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuZmlsdHItaXRlbSBhJykuQ2hvY29sYXQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbnJlbmRlcigpe1xyXG4gIFxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5hdmJhclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3M2xzLWJhbm5lci1pbmZvLWJvdHRvbVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItYWRkcmVzc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgYmFubmVyLWFkZHJlc3MtbGVmdFwiPlxyXG4gICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gR2FqYW5hbiBOYWdhciwgV2F0aG9kYSwgTmFncHVyLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGJhbm5lci1hZGRyZXNzLWxlZnRcIj5cclxuICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8TGluayBocmVmPVwibWFpbHRvOnZ2aXNoZXNodGFAcmVkaWZmbWFpbC5jb21cIj48YSBocmVmPVwibWFpbHRvOnZ2aXNoZXNodGFAcmVkaWZmbWFpbC5jb21cIj52dmlzaGVzaHRhQHJlZGlmZm1haWwuY29tPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBiYW5uZXItYWRkcmVzcy1sZWZ0XCI+XHJcbiAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gMDk4MjMzODIxODQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBiYW5uZXItYWRkcmVzcy1sZWZ0XCI+XHJcbiAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gMDk4MjM0ODcyNzI8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPiA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8c3R5bGUganN4PlxyXG4gIHtcclxuICAgICAgYFxyXG4gICAgICAuYWF7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FtaXRhJywgY3Vyc2l2ZTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyIG5hdmJhci1sZWZ0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYWEnPjxMaW5rICBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgICAgICDgpLXgpL/gpLbgpYfgpLfgpKTgpL48L2E+PC9MaW5rPjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbmF2YmFyLXJpZ2h0XCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNsLWVmZmVjdC0xM1wiIGlkPVwiY2wtZWZmZWN0LTEzXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxsaSA+PExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvU2VydmljZXNcIj48YSBocmVmPVwiU2VydmljZXNcIj5TZXJ2aWNlczwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9Qb3J0Zm9saW9cIj48YSBocmVmPVwiUG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9hPjwvTGluaz48L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9Db250YWN0XCI+PGEgaHJlZj1cIkNvbnRhY3RcIj5Db250YWN0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczX2FnaWxlX2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZC1tYWluLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2Qtc2VhcmNoLXRyaWdnZXJcIiBocmVmPVwiI2NkLXNlYXJjaFwiPiA8c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG59XHJcbn0iXX0= */\n/*@ sourceURL=pages\\components\\Navbar.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2622735714" + " " + "header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2622735714" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2622735714" + " " + "navbar navbar-default"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-2622735714" + " " + "navbar-header navbar-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#bs-example-navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-2622735714" + " " + "navbar-toggle collapsed"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2622735714" + " " + "sr-only"
      }, "Toggle navigation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2622735714" + " " + "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-2622735714" + " " + "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-2622735714" + " " + "icon-bar"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2622735714" + " " + 'aa'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2622735714"
      }, "\u0935\u093F\u0936\u0947\u0937\u0924\u093E")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "bs-example-navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2622735714" + " " + "collapse navbar-collapse navbar-right"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        id: "cl-effect-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2622735714" + " " + "cl-effect-13"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-2622735714" + " " + "nav navbar-nav"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-2622735714"
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/Services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "Services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-2622735714"
      }, "Services"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/Portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "Portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-2622735714"
      }, "Portfolio"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-2622735714"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-2622735714"
      }, "Contact")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-2622735714" + " " + "w3_agile_login"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-2622735714" + " " + "cd-main-header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#cd-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-2622735714" + " " + "cd-search-trigger"
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-2622735714"
      }))))))))));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/Contact.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=Contact.js.map