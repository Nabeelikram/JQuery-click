

$(".click").click(function(){

    let x = Math.floor((Math.random() * 6) + 1);

    if(x==1){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.one').removeClass('hidden');
    }
    else if(x==2){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.two').removeClass('hidden');
    
    }
    else if(x==3){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.three').removeClass('hidden');
    
    }
    else if(x==4){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.four').removeClass('hidden');
    
    }
    else if(x==5){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.five').removeClass('hidden');
    
    }
    else if(x==6){
        $('.Dice').find('img').addClass('hidden');
        $('.Dice').find('.six').removeClass('hidden');
    
    }
  });
  



