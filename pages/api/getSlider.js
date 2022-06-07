// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '../../Client'
import { groq } from 'next-sanity'

const feedQuery = groq`
*[_type == "slider"] {
  slider
  } | order(_createdAt desc)
`

export default async function handler(req, res) {
  const slider = await sanityClient.fetch(feedQuery)
  console.log(slider)
  res.status(200).json({ slider })
}
