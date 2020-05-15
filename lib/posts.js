import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory=path.join(process.cwd(),'posts')

export function getSortedPostsData(){
    const fileNames=fs.readdirSync(postDirectory)
    const allPostsData=fileNames.map(fileName=>{
        const id=fileName.replace(/\.md$/,'')

        const fullPath=path.join(postDirectory,fileName)
        const fullContents=fs.readFileSync(fullPath,'utf-8')

        const matterResult=matter(fullContents)

        return {
            id,
            ...matterResult.data
        }
    })
    return allPostsData.sort((a,b)=>{
        if(a.date<b.date){
            return 1
        }
        else{
            return -1
        }
    })
}

export function getAllPostIds(){
    const fileNames=fs.readdirSync(postDirectory)
    return fileNames.map(fileName=>{
        return {
            params:{
                id:fileName.replace(/\.md$/,'')
            }
        }
    })
}

import remark from 'remark'
import html from 'remark-html'

export async function getPostData(id){
    const fullPath=path.join(postDirectory,`${id}.md`)
    const fullContents=fs.readFileSync(fullPath,'utf-8')

    const matterResult=matter(fullContents)

    const processedContent=await remark().use(html).process(matterResult.content)
    const contentHtml=processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}