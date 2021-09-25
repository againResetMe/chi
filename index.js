var init=document.querySelector('#wrap .init');
setTimeout(function(){
    init.className=''
},200)


// 选项卡
var lis = document.querySelectorAll('#wrap ul li');
var ul = document.querySelector('#wrap ul');
var closeBtns = document.querySelectorAll('#wrap ul .closeBtn')


var last = null;

lis.forEach(function(li, index){
    li.onclick=function(){
        ul.setAttribute('id', 'activeWrap');


        last && (last.className='');
        this.className = 'active';

        last = this;
    }
    closeBtns[index].onclick = function(ev){
        lis[index].className = '';
        ul.removeAttribute('id')
        last=null
        ev.stopPropagation()
    }
})



