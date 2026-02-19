import React from 'react'


export async function generateMetadata({params}:any) {
    const {slug} = await params
    const ogImageUrl = `http://localhost:3000/api?title=${slug}&description=${slug}`
    return{
        title: `About ${slug}`,
        description: `This is the about page of ${slug}`,
        openGraph: {
            images: [ogImageUrl],
        },
    }
}


function About() {

  return (
    <div>About</div>
  )
}

export default About