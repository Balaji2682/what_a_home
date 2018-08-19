$(document).ready(function(){
    const service = window.top.location.href.split('?')[1];

    function generate(sImage,bImage,Head,Desc){
        $.each(sImage, function (key,value) {
            $('#images > div > div:nth-child('+ key +') > a >.img-responsive:nth-child(1)').attr('src','images/'+value)
        });

        $.each(bImage, function (key,value) {
            $('#images > div > div:nth-child('+ key +') > a ').attr('href','images/'+value);
        });

        $('#description h1').html(Head);

        $('#description span').html(Desc);
    }

    switch (service){
        case 'Architecture':
        {
            const sImage = {
                1: 'gardening-1.jpg',
                2: 'gardening-1.jpg',
                3: 'gardening-1.jpg',
                4: 'gardening-1.jpg',
                5: 'gardening-1.jpg',
                6: 'gardening-1.jpg'
            };
            const bImage = {
                1: 'gardening-1.jpg',
                2: 'gardening-1.jpg',
                3: 'gardening-1.jpg',
                4: 'gardening-1.jpg',
                5: 'gardening-1.jpg',
                6: 'gardening-1.jpg'
            };
            const Desc = 'Hi This is the Lorem Ispum Dude';
            const Head = 'Head Data Goes Here';
            generate(sImage,bImage,Head,Desc);
        }
            break;

        case 'Gardening':
        {
            const sImage = {
                1: 'gardening-1.jpg',
                2: 'gardening-1.jpg',
                3: 'gardening-1.jpg',
                4: 'gardening-1.jpg',
                5: 'gardening-1.jpg',
                6: 'gardening-1.jpg'
            };
            const bImage = {
                1: 'gardening-1.jpg',
                2: 'gardening-1.jpg',
                3: 'gardening-1.jpg',
                4: 'gardening-1.jpg',
                5: 'gardening-1.jpg',
                6: 'gardening-1.jpg'
            };
            const Desc = 'Hi This is the Gardening Ispum Dude';
            const Head = 'Head Data Goes Here';
            generate(sImage,bImage,Head,Desc);
        }
            break;

        default:
            $('body').html('');
    }
});
