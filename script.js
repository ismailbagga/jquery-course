const URL = "http://localhost:3000/posts"

const savePost = ()=> {
   const title =  $('#title').val()
   const description = $('#description').val()
   console.log({title , description})
   console.log({'title' : title , 'description' : description})

}


$('#post-btn').on('click',savePost)
