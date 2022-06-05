export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // },
    {
      name: 'titleImg',
      title: 'Title Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cardImg',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'postType',
      title: 'Post Type',
      type: 'string',
    },
    {
      name: 'webLink',
      title: 'Web/Youtube Link',
      type: 'string',
    },
    {
      name: 'portfolioLink',
      title: 'Behance/Github Link',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
