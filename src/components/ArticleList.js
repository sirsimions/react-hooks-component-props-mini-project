import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    let articlesList = blogData.posts.map((article)=>{
        return(
            <Article
				key={article.id}
				title={article.title}
				date={article.date} 
				preview={article.preview}
                minutes={article.minutes}
			/>
        )
    })
    return(
        <main>
            {articlesList}
        </main>
    )
}
export default ArticleList 