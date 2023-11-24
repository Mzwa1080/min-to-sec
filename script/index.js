function convertMIntoSec(){
    let input = document.getElementById('converter');
    let dispplayResults = document.getElementById('displayOutput')

    // My condition my check only minutes to seconds else display otherwise
    if(input.value <=60){
        let convertedAmount = Math.floor(input.value * 60).toFixed(2);
        console.log(convertedAmount);
        dispplayResults.textContent = `${input.value} min to seconds : ${convertedAmount}s`;
    }else{
        dispplayResults.textContent =  `Please minutes`
    }

}

document.querySelector('[data-submit]').addEventListener('click', convertMIntoSec)