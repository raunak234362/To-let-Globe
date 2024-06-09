import { BlogPage } from "../SampleData"

const Blog = () => {
  return (
    <div>
         <h1 className="text-4xl text-center font-semibold">To-Let Tales</h1>
         <h1 className="text-center mt-2 text-[#6CC1B6]">Dive into a Sea of Endless Stories and Insights</h1>
    <div>
      {
        BlogPage.map((data,index)=>(
            <div key={index}>
                <h1>{data?.title}</h1>
                <img src={data?.image1} alt="" />
                <p>{data?.date}</p>
            </div>
        ))
      }
    </div>
    </div>
       
  )
}

export default Blog
