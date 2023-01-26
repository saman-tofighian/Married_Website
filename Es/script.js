    function clickIcon(){
       document.getElementsByClassName('mobile')[0].classList.toggle('change')
       document.querySelector('#icon>strong:nth-of-type(1)').classList.toggle('strong1')
       document.querySelector('#icon>strong:nth-of-type(2)').classList.toggle('strong2')
       document.querySelector('#icon>strong:nth-of-type(3)').classList.toggle('strong3')
    }

      function dateText(){
         let _date = new Date().getFullYear()
         let _span = document.createElement('span')
         _span.innerHTML = _date
         document.getElementById('dateText').appendChild(_span)
      }
      dateText()

      window.addEventListener('scroll', function(){
         let _scroll = window.scrollY
         let _heightCardCouple = document.getElementById('card_couple').offsetTop
         let _header = document.getElementsByTagName('header')[0].clientHeight
         let _goTop = document.getElementById('backToTop').offsetTop
         let _story = document.getElementById('story').offsetTop
         let _gallery = document.getElementById('gallery').offsetTop
         let _event = document.getElementById('event').offsetTop
         let _aTag = document.querySelectorAll('#desc>li>a')
         
         if(_scroll > (_heightCardCouple - 450)){
            document.querySelector('#card_couple>section:nth-of-type(1)').style.transform = 'translateX(0)'
         }

         if(_scroll > (_heightCardCouple - 450)){
            document.querySelector('#card_couple>section:nth-of-type(2)').style.transform = 'translateX(0)'
         }

         if(_scroll > (_story - 200)){
            document.querySelector('#story>article>section:nth-of-type(1)>figure').style.transform = 'translateX(0)'
            document.querySelector('#story>article>section:nth-of-type(2)>figure').style.transform = 'translateX(0)'
            document.querySelector('#story>article>section:nth-of-type(3)>figure').style.transform = 'translateX(0)'
         }
         
         if(_scroll > (_gallery - 200)){
            document.querySelector('#img-sec>figure:nth-of-type(1)').style.transform = 'translateX(0)'
            document.querySelector('#img-sec>figure:nth-of-type(2)').style.transform = 'translateX(0)'
            document.querySelector('#img-sec>figure:nth-of-type(3)').style.transform = 'scale(1)'
            document.querySelector('#img-sec>figure:nth-of-type(4)').style.transform = 'translateX(0)'
            document.querySelector('#img-sec>figure:nth-of-type(5)').style.transform = 'translateX(0)'
            document.querySelector('#img-sec>figure:nth-of-type(6)').style.transform = 'scale(1)'
         }

         if(_scroll > (_event- 200)){
            document.querySelector('#event>#blogs>article:nth-of-type(1)').style.transform = 'translateX(0)'
            document.querySelector('#event>#blogs>article:nth-of-type(2)').style.transform = 'scale(1)'
            document.querySelector('#event>#blogs>article:nth-of-type(3)').style.transform = 'translateX(0)'
         }

         if(_scroll > _goTop){
            document.getElementById('backToTop').style.display = 'block'
         }

         if(_scroll > (_header - 20) ){
            document.getElementsByTagName('header')[0].style.background = '#fff'
            document.querySelector('header>nav>figure>img').src = 'images/logo-2.png'
            document.querySelector('#icon>strong:nth-of-type(1)').style.background = '#222'
            document.querySelector('#icon>strong:nth-of-type(2)').style.background = '#222'
            document.querySelector('#icon>strong:nth-of-type(3)').style.background = '#222'
            for(i=0; i<_aTag.length; i++){
               _aTag[i].style.color = '#38424D'
            }
         }

         

         else{
            document.getElementsByTagName('header')[0].style.background = 'rgba(255, 255, 255, 0.02)'
            document.querySelector('header>nav>figure>img').src = 'images/logo.png'
            for(i=0; i<_aTag.length; i++){
               _aTag[i].style.color = '#fff'
            }
            document.getElementById('backToTop').style.display = 'none'
            document.querySelector('#icon>strong:nth-of-type(1)').style.background = '#fff'
            document.querySelector('#icon>strong:nth-of-type(2)').style.background = '#fff'
            document.querySelector('#icon>strong:nth-of-type(3)').style.background = '#fff'
         }
      })