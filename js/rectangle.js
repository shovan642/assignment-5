document.getElementById('calculate-btn-rectangle').addEventListener('click',function(){
    const firstInputNumber = getInputValue('first-input-rectangle');
    const secondInputNumber = getInputValue('second-input-rectangle');
  
    setFirstElementNumber('first-value-rectangle', firstInputNumber)
    setFirstElementNumber('second-value-rectangle', secondInputNumber)
  
    const getrectangleAreaResult = firstInputNumber * secondInputNumber
    const rectangleResultFixed = getrectangleAreaResult.toFixed(2)
    setFirstElementNumber('rectangle-result', rectangleResultFixed)
  
    
  })