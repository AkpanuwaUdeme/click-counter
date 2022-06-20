
/* this will track the count */
var count = 0;

/* add your event listener here */
btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log(' +1 clicked');
   count = count + 1;
  
number = document.querySelector('div>h2').textContent = count;
 
})
btn2 = document.querySelector('button#btn');

btn2.addEventListener('click', () => {
  console.log(' -1 clicked')
count = count - 1;
number = document.querySelector('div>h2').textContent = count;
  
  
})
