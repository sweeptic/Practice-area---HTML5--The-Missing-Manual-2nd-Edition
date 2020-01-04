

/*
...
a lot of css code here ...
*/

//that waits until the HTML for a page loads before it runs your script.
$(document).ready(function () {


    $('#content').html('<h1>JavaScript was here</h1>');

    var contentPara = $('#content');

    $('body').fadeOut(500);

    //$('body').hide();
    $('body').fadeIn(500).show();

    //$('#errors').html('<p>there are four errors in this form</p>');

    $('#errors').append('<p>there are four errors in this form</p>');

    //$('#errors h2').text('No errors found');

    //$('#errors').prepend('<p>there are four errors in this form</p>');

    //$('#username').after('<span class="error">User name required</span>');

    var image = $('#banner img').attr('src');
    $('#banner').after(image);

    //$('#banner img').attr('src', '/../../images/banner.png');

    //$('img').each( () => {alert('i found an image' + this);});

    $('a[href^=http]').each(function () {
      
        var extLink = $(this).attr('href');   
        
        var cl = $(this).clone();
        alert(cl);
        
        $('#bibList').append('<li>' + extLink + '</li>');
    });







}); //end ready






