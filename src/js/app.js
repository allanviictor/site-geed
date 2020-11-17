

$('.erro-value').hide()
$('.message-form-submited').hide()




$('.btn-car-shoping').click(function (){
    $(this).parent().parent().remove();
})

$('.btn-car-shoping-remove-mobile').click(function(){
    $(this).parent().parent().remove();
})

$('.view-register-success').hide()
$('#form-register').submit(function(event){
    event.preventDefault()
    var password = $('#password').val();
    var confirmPassWord = $('#confirm-password').val();

    if( confirmPassWord != password){
        $('.erro-value').fadeIn( "slow" ).text('confirme a senha corretamente')
        setTimeout(function(){ $('.erro-value').fadeOut() }, 4000)
        return false;
    }
    $('.view-register').hide()
    $('.view-register-success').fadeIn("fast")
    return true;
})

const values_chart = [
    {
        progress: 26,
        objective: 'Meta 1...'
    },
    {
        progress: 65,
        objective: 'Meta 2: 200 garrafas de água'
    },
    {
        progress: 99,
        objective: 'Meta 3: 20 feiras básicas'
    },
    {
        progress: 83,
        objective: 'Meta 4: 50 pacotes de feijão'
    },
    {
        progress: 57,
        objective: 'Meta 5...'
    },
    {
        progress: 30,
        objective: 'Meta 6: 10 sacos de cimento'
    },
];

const colors_chart = () => values_chart.map((value,index) => {
    const transform_int =  Math.floor((value.progress / 100) * 10)
    return `rgba(${value.progress * index}, 16${transform_int}, ${value.progress * 2}, 1)`
})


const ctx = $('#myChart');
new Chart(ctx,{
    type: 'pie',
    data: {
        datasets: [{
            data: values_chart.map((element,index)=>{
                return element.progress
            }),
            backgroundColor: colors_chart,
            borderColor: colors_chart,
            borderWidth: 1
        }]
    },  
    options: {
        plugins: {
            labels: {
                render: (args) => {
                    return args.value + '%'
                },
                fontSize: 18,
                fontColor: '#fff'
            }
        },
        tooltips: {
            enabled: false
       }
    }
})

const line_bars = values_chart.map((value,index) =>{
    const transform_int =  Math.floor((value.progress / 100) * 10) 
    const div_progress = $("<div>").addClass('mb-3 mt-2 progress').css({height: '20px',borderRadius: '16px'})
    const div_bar = $("<div>").addClass('progress-bar progress-bar-striped progress-bar-animated')
    .css({
        backgroundColor: `rgba(${value.progress * index}, 16${transform_int}, ${value.progress * 2}, 1)`,
        borderRadius: '16px',
    })
    .animate({
        width: value.progress + "%"
    }, 2000);

    div_progress.append(div_bar)
    $('.wrapper-bar-progress').append($('<div>').addClass('text-content').text(`${value.objective}`), div_progress)
});line_bars


$( document ).scroll(function() {
    if($(window).scrollTop() > 150) {
        $('.navbar.navbar-desktop').addClass('nopadding')
        $('.navbar.navbar-desktop .navbar-brand').addClass('navbrand-reduzida')
        $('.navbar.navbar-desktop .navlogonormal').attr("src", './assets/lg-logo-reduzida.png')
       
    } else if($(window).scrollTop() < 100){
        $('.navbar.navbar-desktop').removeClass('nopadding')
        $('.navbar.navbar-desktop .navbar-brand').removeClass('navbrand-reduzida')
        $('.navbar.navbar-desktop .navlogonormal').attr("src", './assets/lg-colorida.png')
    }
});






