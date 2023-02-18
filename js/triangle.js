document.getElementById('calculate-btn-triangle').addEventListener('click',function(){
  const firstInputNumber = getInputValue('first-input-triangle');
  const secondInputNumber = getInputValue('second-input-triangle');

  setFirstElementNumber('first-value-triangle', firstInputNumber)
  setFirstElementNumber('second-value-triangle', secondInputNumber)

  const getTriangleAreaResult = firstInputNumber * secondInputNumber * 0.5
  const triangleResultFixed = getTriangleAreaResult.toFixed(2)
  setFirstElementNumber('triangle-result', triangleResultFixed)


  console.log()
  
})