"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let z = a => {

            for (let i = 1; i <= a; i++) {
                $('.result').append(`<div class="minibox"><h2>${a}</h2></div>`);

            }
        }

        let t = h => { h * 1 ? f($('input').val()) : $('.result').append(`<div class="minibox"><h2>${h}</h2></div>`);
        }

        t($('input').val())


    });



});