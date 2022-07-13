
//To add a comment
  const newCommentHandler = async (event) => {
    event.preventDefault();
    //get the comment ID based on the current URL path
    const id = window.location.pathname.slice(6);

  //get the comment text
    const response = document.querySelector('.form-input').value.trim();

    //if textbox is not empty
    if (response) {
  
      //fetch request to create the comment
      const res = await fetch(`/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ response }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      //if response is okay, reload the page
      if (res.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }};

    //------------------------------------------
//to add upvotes
    const upvoteHandler = async (event) => {
      event.preventDefault();
      //event.stopPropagation;
      //if they click on the upvote button
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        let thumbs_up = event.target.getAttribute('data-upvotes');
        let commenter_id = event.target.getAttribute('data-commenter');
        let post_id = window.location.pathname.slice(6);


        async function getdata() {

          //run the fetch request to find out if they've upvoted in the past

        const response = await fetch(`/api/posts/upvote/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
    
        });
        let result = response;
        console.log(result.status);

        //check the status code to see if they've upvoted the comment previously
        if (result.status === 418) {
          alert("You've already upvoted this comment!")
          return;
          //if not, add the upvote to the upvote table
        } else {
          thumbs_up ++;
          const upvotes = await fetch(`/api/posts/upvote/${id}`, {
            method: 'POST',
            body: JSON.stringify({ post_id }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        //then add the upvote to the comment upvote score and the commenter's thumbs score
        const upvoted_comment = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ thumbs_up, commenter_id }),
          headers: {
            'Content-Type': 'application/json',
          },
      })
    
      }
}
        await getdata();
        document.location.reload();

    }};


    //event handler for comments
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

  //event handler for upvotes
  document
  .querySelectorAll('#thumbup').forEach(item => {
    item.addEventListener('click', upvoteHandler)
  })  ;
