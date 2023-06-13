
document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newElementNumber = updateElementNumber('phone-number-field',true);
   updateTotalPrice('phone-total',newElementNumber,1219);

   // calculate total
  calculateSubTotal();
   
});

document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newElementNumber = updateElementNumber('phone-number-field',false);
   updateTotalPrice('phone-total',newElementNumber,1219);

   calculateSubTotal();

})