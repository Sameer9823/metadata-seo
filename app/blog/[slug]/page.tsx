import React from 'react'


export async function generateMetadata({params}:any) {
    const {slug} = await params
    return {
        title: `Blog ${slug}`,
        description: `This is the blog post about ${slug}`,
        openGraph: {
            title: `Blog ${slug} kjrngjk4t`,
            description: `This is the blog post about ${slug}`,
            images: ['https://www.datocms-assets.com/45470/1664263294-nextjs-og-image.png'],
            url: "http://localhost:3000/blog"
        }

    }
}

async function Blog({params}:any) {
    const {slug} = await params

  return (
    <div>Blog {slug}</div>
  )
}

export default Blog