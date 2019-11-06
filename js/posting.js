document.querySelector('#btn-post').addEventListener('click', function(e){
    e.preventDefault();

    let question = document.querySelector("#question").value
    let optionA = document.querySelector("#option-a").value
    let optionB = document.querySelector("#option-b").value
    let optionC = document.querySelector("#option-c").value
    let optionD = document.querySelector("#option-d").value
    let answer = document.querySelector("#answer").value

    if (question ===  '' || optionA === '' || optionB === '' || optionC === '' || optionD === ''){
        alert('PLEASE MAKE SURE ALL CONTENTS ARE FILLED CORRECTLY');
        return;
    }

    $.ajax({
        type: "POST",
        url: "https://qudusayo.github.io/TestingPost",
        data:{
            question: question, 
	        optionA: optionA, 
	        optionB: optionB, 
	        optionC: optionC,
	        optionD: optionD,
	        answer: answer 
        },
        success: function (){
            alert('Question Posted successfully')
        }
    });
});