document.getElementById('calculate-btn-parallelogram').addEventListener('click',function(){
    const firstInputNumber = getInputValue('first-input-parallelogram');
    const secondInputNumber = getInputValue('second-input-parallelogram');
  
  
    setFirstElementNumber('first-value-parallelogram', firstInputNumber)
    setFirstElementNumber('second-value-parallelogram', secondInputNumber)
  
    const getparallelogramAreaResult = firstInputNumber * secondInputNumber
    const parallelogramResultFixed = getparallelogramAreaResult.toFixed(2)
    setFirstElementNumber('parallelogram-result', parallelogramResultFixed)
  
    
  })