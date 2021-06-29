var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var imgs = Array.from(document.querySelectorAll(".item img")) //M4 Array //NodeList //Array From
var currentIndex = 0 ;
var nextBtn = document.getElementById("next")
var prevBtn = document.getElementById("prev")
var closeBTn = document.getElementById("close")

for(var i = 0 ; i < imgs.length ; i++)
{
    imgs[i].addEventListener("click" , function(eventInfo)
    {
        currentIndex = imgs.indexOf(eventInfo.target); //hyrg3ly rgm el swra 

        var imgSrc = eventInfo.target.getAttribute("src"); //mskt src kol pic

        lightBoxItem.style.backgroundImage = `url(${imgSrc})`

        lightBoxContainer.classList.replace("d-none" , "d-flex")
    })
}

function nextSlide()
{
    currentIndex++; //btzwd 3la elswra 1 y3ny tro7 lly 3leha el dowr

    if(currentIndex == imgs.length)
    {
        currentIndex = 0 ; //hna b2olo brg3o ll zero tany lw zad 3n 3dd el swr
    }

    var imgSrc =  imgs[currentIndex].getAttribute("src") // hna hygeb src el sora elly 3lha eldowr

    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

function prevSlide()
{
    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = imgs.length - 1;
    }

    var imgSrc =  imgs[currentIndex].getAttribute("src") // hna hygeb src el sora elly 3lha eldowr

    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

function closeSlide()
{
    lightBoxContainer.classList.replace("d-flex" , "d-none");
}

document.addEventListener("keydown" ,function(eventInfo){

    if(eventInfo.code == "ArrowRight") //ArrowRight
    {
        nextSlide();
    }
    else if(eventInfo.code == "ArrowLeft") //ArrowLeft
    {
        prevSlide();
    }
    else if(eventInfo.code == "Escape") //Escape
    {
        closeSlide();
    }


} )



nextBtn.addEventListener("click" , nextSlide); 
prevBtn.addEventListener("click" , prevSlide);
closeBTn.addEventListener("click" , closeSlide);