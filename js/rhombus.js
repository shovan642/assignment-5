document.getElementById('calculate-btn-rhombus').addEventListener('click',function(){
    const firstInputNumber = getInputValue('first-input-rhombus');
    const secondInputNumber = getInputValue('second-input-rhombus');
  
    setFirstElementNumber('first-value-rhombus', firstInputNumber)
    setFirstElementNumber('second-value-rhombus', secondInputNumber)
  
    const getrhombusAreaResult = firstInputNumber * secondInputNumber * 0.5
    const rhombusResultFixed = getrhombusAreaResult.toFixed(2)
    setFirstElementNumber('rhombus-result', rhombusResultFixed)
  
    
  })