/**
 * 
 * @authors H君
 * @date    2017-03-06 13:38:52
 * @version 0.0.1
 */
! function(window) {

	'use strict';

	var modalBtnOne = document.querySelector('#modal-one'),
		modalBtnTwo = document.querySelector('#modal-two');
		
	modalBtnOne.onclick = function() {

		Modal({
			id: 'modal',
			title: '提示',
			content: '确认执行此操作？',
			complete: function() {
				// do something ...				
			},
			confirm: function() {

			},
			cancel: function() {

			}
		})

	}

	modalBtnTwo.onclick = function() {

		Modal({
			id: 'modal1',
			type: 1,
			title: '提示',
			content: '操作成功',
			complete: function() {
				// do something ...				
			},
			confirm: function() {
				// do something ...
			},
			cancel: function() {
				// do something ...
			}
		})

	}

	prettyPrint();
	
}(this);