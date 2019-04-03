import React from 'react';
import './ArticleForm.css';

function ArticleForm(props)  {
  console.log(props)

    return(
      <div className= "modal" id="articleFormModal">
        <header className ="header">New Post</header>
          <section id="articleEntry">
            <form id="newArticle">
              <section id="newArticleTitle">
                <label htmlFor="titleIt">Title</label>
                <input type="text" id="titleIt" name="title" value={props.titleInput} onChange={props.handleChange}></input>
              </section>
              <section id="newArticleAuthor">
                {/* <h6 id="authorIt" name="authorInput">{props.authorInput}</h6> */}
                <h6 id="authorName" name="author">{props.authorName}</h6>
              </section>
              <section id="newArticleContent">
                <label htmlFor="contentIt">Post Content</label>
                <textarea id="contentIt" name="content" value={props.articleInput} onChange={props.handleChange}></textarea>
              </section>
                <button id="submitArticle" type="submit" className="btn btn-dark modal-close" onClick = {props.handleFormSubmit}>Submit</button>
              </form>
            </section>
      </div>
    );
};

export default ArticleForm;