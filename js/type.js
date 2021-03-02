window.onload = function(){
    function type(atribute){
        let txt = $(`.${atribute}`).text();
        $(`.${atribute}`).html("");
        let time = [];
        let speed = 50;
        

        for(let i=0;i<txt.length;i++){
            time.push(speed);
            speed+=60;
        }

        for(let i=0;i<txt.length;i++){
            typing(i,time[i]);
        }

        let display = document.querySelector(`.${atribute}`);
        display.style.display='block';

        function typing(i,time){
            setTimeout(()=>{
                document.getElementById(atribute).innerHTML += txt.charAt(i);
            },time);
        }

        return true;

    }

        setTimeout(()=>{type("type1");},0)
        let type2 = document.querySelector('.type2');
        type2.style.display="none";
        setTimeout(()=>{type("type2");},1800)
       
       


}