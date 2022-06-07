// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '../../Client'
import { groq } from 'next-sanity'

const feedQuery = groq`
*[_type == "post"] {
    _id,
...
  } | order(_createdAt desc)
`

export default async function handler(req, res) {
    const posts = await sanityClient.fetch(feedQuery)
    console.log(posts)
    res.status(200).json({ posts })
}
