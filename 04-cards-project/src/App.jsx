import React from 'react'
import Card from "./components/Card";
import User from "./components/User"
const App = () => {
   const jobOpenings = [
  {
    brandLogo: "https://img.logo.dev/google.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mountain View, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/office.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Redmond, WA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/amazon.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Seattle, WA, USA",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Cupertino, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/meta.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Menlo Park, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/netflix.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Gatos, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/nvidia.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Santa Clara, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/openai.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "OpenAI",
    datePosted: "2 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, CA, USA",
  },
  {
    brandLogo: "https://img.logo.dev/tesla.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Austin, TX, USA",
  },
  {
    brandLogo: "https://img.logo.dev/uber.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
    companyName: "Uber",
    datePosted: "9 days ago",
    post: "Backend Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bengaluru, India",
  },
];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}


export default App