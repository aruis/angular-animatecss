/**
 * Created by liurui on 15/11/21.
 */
angular.module('angular-animatecss-aruis', [])
    .directive('animate', function () {
        return {
            link: function (scope, element, attrs) {
                var animatedClass = 'animated ' + attrs.animate;
                var isInfinite = attrs.hasOwnProperty('animateInfinite')
                if (isInfinite) {
                    animatedClass += ' infinite';
                }

                element.addClass(animatedClass);

                if (!isInfinite) {
                    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        element.removeClass(animatedClass);
                    });
                }


            }
        }
    });
