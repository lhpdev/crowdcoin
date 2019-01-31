webpackHotUpdate(5,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(495);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we want to define web3 in differnt ways
var web3 = void 0;

// to check if we are running i browser and check if it is defined
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // then we are in browser and metamask is running

  // to make sure we are using same version of web3
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on the server *or* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/a38640eb3e724728b9168faf705de730');
  web3 = new _web2.default(provider);

  try {
    provider.enable();
  } catch (error) {
    // User denied account access
  }
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImVuYWJsZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBO0FBQ0EsSUFBSSxZQUFKOztBQUVBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBMEUsQUFDdEU7QUFFQTs7QUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBRUg7QUFORCxPQU1PLEFBQ1A7QUFDSTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFFQTs7TUFBSSxBQUNGO2FBQVMsQUFBVCxBQUNEO0FBRkQsSUFFRSxPQUFPLEFBQVAsT0FBYyxBQUNkO0FBQ0Q7QUFDSjtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVjYXMvRG9jdW1lbnRzL2Rldi9Qb3J0Zm9saW8vUHJvamVjdHMvQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/lucas/Documents/dev/Portfolio/Projects/Blockchain/kickstart/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/lucas/Documents/dev/Portfolio/Projects/Blockchain/kickstart/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mODkyMjViMDYxYmQwNThjNmVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8xMTE0MDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG4vLyB3ZSB3YW50IHRvIGRlZmluZSB3ZWIzIGluIGRpZmZlcm50IHdheXNcbmxldCB3ZWIzO1xuXG4vLyB0byBjaGVjayBpZiB3ZSBhcmUgcnVubmluZyBpIGJyb3dzZXIgYW5kIGNoZWNrIGlmIGl0IGlzIGRlZmluZWRcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSAge1xuICAgIC8vIHRoZW4gd2UgYXJlIGluIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmdcblxuICAgIC8vIHRvIG1ha2Ugc3VyZSB3ZSBhcmUgdXNpbmcgc2FtZSB2ZXJzaW9uIG9mIHdlYjNcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcblxufSBlbHNlIHtcbi8vd2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKm9yKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzL2EzODY0MGViM2U3MjQ3MjhiOTE2OGZhZjcwNWRlNzMwJ1xuICAgICk7XG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcblxuICAgIHRyeSB7XG4gICAgICBwcm92aWRlci5lbmFibGUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVXNlciBkZW5pZWQgYWNjb3VudCBhY2Nlc3NcbiAgICB9XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9