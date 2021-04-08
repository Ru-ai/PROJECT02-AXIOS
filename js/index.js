const book1=document.querySelector('#table');
const searchForm=document.querySelector('.search');


const renderPosts=async(term) =>{
    let url1=" http://localhost:3000/books?";
    if(term){
        url1 +=`&q=${term}`;
    }
   // const res=await fetch(url1);
   // const books=await res.json();
   axios.get(url1)
   .then(response=>{
       displaydata(response.data)
   })
   .catch(err=>{
       console.log(err,err.response);
   })

}


searchForm.addEventListener('submit',async(e)=>{
 e.preventDefault();
 renderPosts(searchForm.term.value.trim());

})



function displaydata(books){
    let design=' ';
    design +=`<tr>
    <th>Id</th>
    <th>Title</th>
    <th>Author</th>
    <th>Rating</th>
    <th>Price</th>
    <th>Details</th>
    
    </tr>`
    books.forEach(book => {
      design +=  `
          <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.rating}</td>
            <td>${book.price}</td>
            <td><a href="detail.html?id=${book.id}">Detail</td>
            
        </tr>`
        
    })
    book1.innerHTML=design;
}
window.addEventListener('DOMContentLoaded',()=>renderPosts());
