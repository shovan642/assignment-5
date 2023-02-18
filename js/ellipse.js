document.getElementById('calculate-btn-ellipse').addEventListener('click',function(){
    const firstInputNumber = getInputValue('first-input-ellipse');
    const secondInputNumber = getInputValue('second-input-ellipse');
  
    setFirstElementNumber('first-value-ellipse', firstInputNumber)
    setFirstElementNumber('second-value-ellipse', secondInputNumber)
  
    const getellipseAreaResult = firstInputNumber * secondInputNumber * 3.14
    const ellipseResultFixed = getellipseAreaResult.toFixed(2)
    setFirstElementNumber('ellipse-result', ellipseResultFixed)
  
    
  })