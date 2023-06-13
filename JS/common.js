
// upate element numbers -----------------------------------------------------------------------------------------------------
function updateElementNumber(elementId,isIncrease){
    const elementNumberField = document.getElementById(elementId);
    const elementNumberString = elementNumberField.value ;
    const previousElementNumber =  parseInt(elementNumberString);

    let newElementNumber;
    if(isIncrease === true ){
        newElementNumber = previousElementNumber + 1 ;
    }
    else{
        newElementNumber = previousElementNumber - 1 ;
    }
     
    elementNumberField.value = newElementNumber ;
    return newElementNumber ;
};

// update element number end  --------------------------------------------------------------------------------------------------

// update Total price ----------------------------------------------------
function updateTotalPrice(elementId,newElementNumber,price){
    const elementTotalPrice = newElementNumber * price ;
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = elementTotalPrice ;
}; 
// ----------------------------------------------------------------------

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal ;
 };
 

 function setTextElementValueById(elementId,value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
 };
 

//  calculate sub total -------------------------------------------------------------------------

 function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal  = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    setTextElementValueById('subtotal',currentSubTotal);

    // 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2) ;
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount',taxAmount);

    const finalAmount = currentSubTotal + taxAmount ;
    setTextElementValueById('final-total',finalAmount);


 }
 