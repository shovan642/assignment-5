document.getElementById('calculate-btn-pentagon').addEventListener('click',function(){
    const firstInputNumber = getInputValue('first-input-pentagon');
    const secondInputNumber = getInputValue('second-input-pentagon');
  
    setFirstElementNumber('first-value-pentagon', firstInputNumber)
    setFirstElementNumber('second-value-pentagon', secondInputNumber)
  
    const getpentagonAreaResult = firstInputNumber * secondInputNumber * 0.5
    const pentagonResultFixed = getpentagonAreaResult.toFixed(2)
    setFirstElementNumber('pentagon-result', pentagonResultFixed)
  
    
  })