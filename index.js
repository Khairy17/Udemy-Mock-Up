
window.onload=function(){

// let tabs=Array.from(document.querySelectorAll('button[data-tab]'))
// let ty=document.querySelectorAll('button.b1')
// let ty1=Array.from(ty);
// console.log(ty1)
// console.log(tabs)
// tabs.map(item=>{
//     console.log(item.dataset)
//     item.addEventListener('click',function(){
//         let tag=`.featured-courses-${this.dataset.item}.carousel-item`;
//         console.log(tag)
//     })
// })

let courses=document.querySelectorAll('.carousel-cards .featured-courses-python .carousel-item');
console.log(courses)
courses.forEach((e1)=>{
    const mins=4;
    let next=e1.nextElementSibling
    for(let i=1;i<mins;i++){
        if(!next){
            next=courses[0];
        }
        else{
            let clonechild=next.cloneNode(true);
            e1.appendChild(clonechild.children[0]);
            next=next.nextElementSibling;
        }
    }

})
let courses1=document.querySelectorAll('.carousel-cards .featured-courses-html .carousel-item');
console.log(courses)
courses1.forEach((e1)=>{
    const mins=4;
    let next=e1.nextElementSibling
    for(let i=1;i<mins;i++){
        if(!next){
            next=courses1[0];
        }
        else{
            let clonechild=next.cloneNode(true);
            e1.appendChild(clonechild.children[0]);
            next=next.nextElementSibling;
        }
    }

})


}
