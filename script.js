/* const hexNumber=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn=document.querySelector('.hexBtn');
const bodyBcg=document.querySelector('body');
const hex=document.querySelector('.hex');

hexBtn.addEventListener('click', getHex) ; 
function getHex() 
{
    let hexCol='#';
    for(let i=0;i<6 ; i++)
    {
        let random = Math.floor(Math.random()*hexNumbers.length);
        //console.log(random);
        hexCol += hexNumbers[random];
        //console.log(hexCol);
      
    }
    bodyBcg.style.backgroundColor= hexCol;
    hex.innerHTML = hexCol;
}
*/
const colorBtn=document.querySelector('.colorBtn');
const bodyBcg=document.querySelector('body');

const colors=['yellow', 'red' , 'green' , '#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor=colors[3];
    let random=Math.floor(Math.random( )*colors.length)
    bodyBcg.style.backgroundColor=colors[random];

}
