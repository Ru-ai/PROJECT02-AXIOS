const id=new URLSearchParams(window.location.search).get('id');
const container=document.querySelector('.details');
const delete1=document.querySelector('.delete');

const renderPosts=async()=>{
    const uri='http://localhost:3000/books/' + id;
    // const book2=await res.json();
    
   axios.get(uri)
   .then(response=>{
     book2=response.data;
     var template = 
     `
     <div class="books">
     <h1>BOOK ID IS ${book2.id}</h1>
     <h1>TITLE: ${book2.title}</h1>
     <h1>AUTHOR:${book2.author}</h1>
     <h1>ABOUT THE BOOK</h1>
     <p> ${book2.description}</style></p>
     </div>
     `
 
 container.innerHTML=template;
 })
.catch(err=>{
    console.log(err,err.response);
})
}

delete1.addEventListener('click',async(e) => {
    const res='http://localhost:3000/books/' +id
      axios.delete(res)
      .then(response =>{
        console.log(response);
      })
      .catch(err=>{
          console.log(err,err.response);
      })


    window.location.replace('/index.html');
})


window.addEventListener('DOMContentLoaded',()=>renderPosts());
