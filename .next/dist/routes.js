'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsa0JBR0csQUFISCxJQUdPLEFBSFAsZ0NBR3VDLEFBSHZDOztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVjYXMvRG9jdW1lbnRzL2Rldi9Qb3J0Zm9saW8vUHJvamVjdHMvQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==