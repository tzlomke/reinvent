import React from 'react';
import './ArticleForm.css';
import { StyleButton } from "../../components/StyleButton";

function ArticleForm(props)  {
  let buttonText;
  (function noEmptyForms() {
    const submitButton = document.getElementById('submitArticle');
    if (submitButton === null) {
      return "User is on the Right Path"
    } else if (props.inputTitle === "" || props.inputContent === "") {
      buttonText = "Please Enter all Information"
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
      buttonText = "Add Article"
    };
  })();
  
    return(
      <div className= "modal" id="articleFormModal">
        <header className ="header">New Post</header>
          <section id="articleEntry">
            <form id="newArticle">
              <section id="newArticleTitle">
                <label htmlFor="articleTitle">Title</label>
                <input type="text" id="articleTitle" name="inputTitle" value={props.inputTitle} onChange={props.handleInputChange}></input>
              </section>
              <section id="newArticleAuthor">
                <h6 id="authorName" name="inputAuthor">{props.inputAuthor}</h6>
              </section>
              <section id="newArticleContent">
                <label htmlFor="content">Enter Content</label>
                <textarea id="content" name="inputContent" value={props.inputContent} onChange={props.handleInputChange}></textarea>
              </section>
              <StyleButton
                btnTxt= {buttonText}
                id="submitArticle"
                onClick={props.handleFormSubmit}
                modalClose= {true}
              />
            </form>
          </section>
      </div>
    );
};

export default ArticleForm;