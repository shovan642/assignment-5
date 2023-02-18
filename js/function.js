function getInputValue (inputFieldId){
    const getInputField = document.getElementById(inputFieldId);
    const getInputFieldString = getInputField.value;
    const getInputFieldNumber = parseInt(getInputFieldString)
    getInputField.value = '';
    return getInputFieldNumber;
}

function getElementText (ElementTextID){
    const getElementTag = document.getElementById(ElementTextID);
    const getElementString = getElementTag.innerHTML;
    const getElementNumber = parseInt(getElementString);
    return getElementNumber;
}


function setFirstElementNumber(ElementTextID, newElement){
    const getFirstInnerHtml = document.getElementById(ElementTextID);
    getFirstInnerHtml.innerHTML = newElement;
}