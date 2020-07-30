import React from 'react';
import $ from 'jquery'; 
import './Loader.css'

const Loader = () => {
    
    $(document).ready(function () {
        var count = 0;
        var counter = setInterval(function () {
            if (count < 101) {
                $('.counter').text(count + "%");
                $('.loader').css('width' ,  count + '%');
                count++; 
            }
            else {
                clearInterval(counter)
                $('.counter').addClass('hide');
                $('.loader').addClass('active');
                $('.Load').addClass('remove');
            }
        }, 50)
    })

    return (
        <div className="Load">
            <div className="loader" ></div>
            <div className="counter" ></div>
        </div>
    )
}
export default Loader;