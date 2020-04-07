$('.input-amount').keyup(function(e){
    const prop = $(this).attr('change-in')
    const value_input = $(this).val()
    const value_unity = $(`span[unity='${prop}']`).attr('value-unity')
    var array_validation = []

    $('.input-amount').each(function(index,element){
        array_validation.push( Math.floor($(this).val()) )
        
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const result = array_validation.reduce(reducer)

    if(result == 0 || !$.isNumeric(result) || NaN){
        $(`.total[price-total='${prop}'] span`).html('')
        $("#submit-form").addClass('disabled')
    }
    else{
        $(`.total[price-total='${prop}'] span`).html(value_input * value_unity).append(',00')
        $("#submit-form").removeClass('disabled');
    }
    
})

$('.erro-value').hide()
$('.message-form-submited').hide()


/* $('#form-store').submit(function(event){

    event.preventDefault();

    var array_validation = []
    $('.input-amount').each(function(index,element){
        array_validation.push( Math.floor($(this).val()) )
        
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const result = array_validation.reduce(reducer)

    if( result == 0 || !$.isNumeric(result) || NaN){
        $('.erro-value').fadeIn( "slow" ).text('digite a quantidade de produtos')
        setTimeout(function(){ $('.erro-value').fadeOut() }, 3000)
        return false;
    }
    else{
        $('.message-form-submited').fadeIn( "slow" )
        console.log(result)
        return true;
    }

}); */

$('.btn-car-shoping').click(function (){
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





