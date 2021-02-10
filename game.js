'use strict';

$(document).ready(function() {
    console.log('ready');

    $(document).on('keydown', function(e) {
        console.log('keydown')

        if( e.key === 'd') {
            console.log(e.key)

         
            let rndValue = 0;
            let imgRef = null;

            const PATH = 'https://openclipart.org/download/2821';            
            let imgRefs = $('body main img');

            console.log('length', imgRefs.length);

            let divRef = $('<div>');

            
            if(imgRefs.length !== 6) { 
                
                for(let j = 1; j <= 6; j++) {
                    rndValue = Math.floor( ( Math.random() * 6 ) + 1 );

                    imgRef = $('<img>')
                        .attr("alt", "Dice")
                        .attr('data-imgid', j)
                        .attr("src", PATH + (rndValue + 26) + '/Die' + rndValue + '.svg')
                        .css({ 'width' :  '10%', 'height' : '10%' })
                        .on('click', function() {
                            $(this).animate({'width' : '+=100px', 'height' : '+=100px'}, 1000, 'swing', function() {
                                console.log('Större bild...')
                            }).animate({'width' : '-=100px', 'height' : '-=100px'}, 1000, 'swing', function() {
                                console.log('Mindre bild...')
                            });
                        })
                        .appendTo('body main');

                    
                    $('<a>').attr('href', '#')
                        .text('Hide img nbr: ' + j)
                        .addClass('btn btn-primary btn-lg active')
                        .css('margin', '10px')
                        .attr('data-imgid', j)
                        .on('click', function(e) {

                            e.preventDefault();
                            $('img[data-imgid=' + $(this).attr('data-imgid') + ']').slideToggle('slow', function() {
                                console.log('slideToggle()');
                            });

                        })
                        .appendTo(divRef);
                }

                divRef.appendTo('body main');


            } else {

                imgRefs.each(function() {

                   

                    $(this).fadeOut('slow', function() {
                        rndValue = Math.floor( ( Math.random() * 6 ) + 1 );
                        $(this).attr('src', PATH + (rndValue + 26) + '/Die' + rndValue + '.svg');
                    }).fadeIn('slow', function() {
                        console.log('fadeIn()');
                    });
                        
                });
            }
        }
    });
});