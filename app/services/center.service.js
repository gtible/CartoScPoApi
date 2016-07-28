'use strict';

/* Services */

angular.module('center.service', [])
	.factory('Center', ['$resource',
		function($resource) {
			return $resource('centers/:centerId', { groupId: '@_id'
			}, {
				update: {
					method: 'PUT'
				}
			});
		}
	]);