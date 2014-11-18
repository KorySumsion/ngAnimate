ngAnimate With CSS-ANIMATION
______________________________

The ngAnimate module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.

ngRepeat	enter, leave and move
ngView		enter and leave
ngInclude	enter and leave
ngSwitch	enter and leave
ngIf		enter and leave
ngClass		add and remove 
ngShow		add and remove 
ngModel		add and remove 
ngMessages	add and remove (ng-active & ng-inactive)
ngMessage	enter and leave

Reference: 
https://docs.angularjs.org/api/ngAnimate
https://github.com/daneden/animate.css

Step 1
_______________

You can download this file from the following places:

Google CDN
	//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-animate.js

Bower
	bower install angular-animate
	<!-- <script src="/node_modules/angular-animate/angular-animate.js"></script> -->

code.angularjs.org
	"//code.angularjs.org/1.3.2/angular-animate.js"

Step 2
______________

Then load the module in your application by adding it as a dependent module:

  angular.module('app', ['ngAnimate']);




