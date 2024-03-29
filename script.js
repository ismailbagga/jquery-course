const URL = "http://localhost:3000/posts"


const buildCard = (id , title , views) => {
    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${id}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">${title}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">${views}</a>
  </div>
</div>
    
    `
}




const loadInfo  = () => {
    $.ajax({
        url : URL ,
        method : "GET" ,
        dataType : 'json' ,

        success : (response)=> {
            const array  = response
            for (let i = 0 ; i<array.length ;++i){
                const singleComment  = response[i]
                console.log(singleComment)
                // const id  =  singleComment.id
                // const text = singleComment.text
                // const postId = singleComment.postId

                const {id , title , views} = singleComment

                const commentHTML = buildCard(id,title,views)
                $('#comments').append(commentHTML)
                // console.log(singleComment['text'])
            }

        }
    })
}



$('#load-btn').on('click' , loadInfo)
