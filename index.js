const inpEl = document.getElementById('inp');
const btnEl = document.getElementById('btn')



function extractUserDetails(){
    const str = 'https://api.github.com/users/' + inpEl.value;
    console.log(str);
    
}

btnEl.addEventListener('click', extractUserDetails)