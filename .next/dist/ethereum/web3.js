'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

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