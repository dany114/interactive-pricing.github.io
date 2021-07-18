window.onload=function(){
    let slider = document.querySelector("#slider");

    let priceAmount = document.querySelector(".price-js");

    let pageViews = document.querySelector(".component-page-views");

    let yearlyBillingDiscount = document.querySelector(".component-checkbox");
    
    slider.addEventListener("input", ()=>{
        console.log(slider.value);
        let x = slider.value;
        var color = `linear-gradient(90deg, var(--full-slider-bar) ${x}%, var(--empty-slider-bar) ${x}%)`;
        slider.style.background = color;
    })

    slider.addEventListener("change" ,()=>{
    
        if(yearlyBillingDiscount.checked == true){
           var discount = ((slider.value / 3.125) * 25) / 100;
        }else{
            discount = 0;
        }
        pageViews.textContent = `${slider.value * 2}`
        priceAmount.textContent = `$${Math.round((slider.value / 3.125) - discount)}`
    })

    const mediaQuery = window.matchMedia('(max-width: 900px)');

    if(mediaQuery.matches == true){
        document.getElementById("discount").innerHTML = "-25%"
    }
}
