const inpEl = document.getElementById('inp');
const btnEl = document.getElementById('btn')



async function extractUserDetails(){
    const str = 'https://api.github.com/users/' + inpEl.value;
    const res = await fetch(str);
    const data = await res.json();
    console.log(data)
    console.log('Location: ',data.location)
    console.log('Twitter userName : ',data.twitter_username)
}

btnEl.addEventListener('click', extractUserDetails)