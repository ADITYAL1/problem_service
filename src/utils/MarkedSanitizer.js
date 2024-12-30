const marked =require('marked');
const sanitizedHtmlLibrary=require('sanitize-html');
const TurndownService=require('turndown')
const turndownservice =new TurndownService();

function SanitizeMark(markdowncontent){
    console.log(`my file ${markdowncontent}`)
    // 1. we need to convert out markedown content into html code
    const convertedHtml=marked.parse(markdowncontent);
    console.log(`my file converted to html ${convertedHtml}`)
    const sanitizeHtml=sanitizedHtmlLibrary(convertedHtml);

    console.log(`my file converted to sanitized html \n ${sanitizeHtml}`)

     const sanitizemarkdown= turndownservice.turndown(sanitizeHtml);
     console.log(`sanitized markdown file ${sanitizemarkdown}`)

     return sanitizemarkdown;


}


module.exports=SanitizeMark;