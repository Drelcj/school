import { gql, request} from "graphql-request"

const MASTER_URL="https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList=async()=>{
    const query=gql`
    query CourseLists {
        courseLists {
          name
          description
          banner {
            url
          } 
          free
          totalChapter
          id
        }
      }
    `
    const result=await request(MASTER_URL,query); 
    return result;
}


export const getCourseById=async(id)=>{
  const query=gql`
  query course {
    courseList(where: {id: "`+id+`"}) {
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
          youtubeUrl
        }
      }
      description
      name
      id
      free
      totalChapter
    }
  }
  
  `

  const result=await request(MASTER_URL,query); 
    return result;
}