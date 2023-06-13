
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newElementNumber = updateElementNumber('case-number-field',true);

    updateTotalPrice('case-total',newElementNumber,59);

    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newElementNumber =  updateElementNumber('case-number-field',false);

    updateTotalPrice('case-total', newElementNumber,59);

    calculateSubTotal();
})