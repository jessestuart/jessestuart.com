const siteMetadata = {
  author: 'Jesse Stuart',
  description: '',
  siteUrl: 'https://jessestuart.com',
  title: 'Jesse Stuart',
}

const sourceFilesystem = {
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/pages`,
    name: 'pages',
  },
}
const sourceFilesystemImages = {
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/images`,
    name: 'images',
  },
}

const transformerRemark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 590,
        },
      },
      'gatsby-remark-prismjs',
      'gatsby-remark-copy-linked-files',
      'gatsby-remark-smartypants',
    ],
  },
}

const typographyPlugin = {
  resolve: 'gatsby-plugin-typography',
  options: {
    pathToConfigModule: 'src/utils/typography',
  },
}

const plugins = [
  // ====================================
  // Gotta load those sweet, sweet files.
  // ====================================
  sourceFilesystem,
  sourceFilesystemImages,
  // =======================================================================
  // Add in React Helmet, and React 16 support until Gatsby HEAD catches up.
  // =======================================================================
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  // ========================
  // Styling-related plugins.
  // ========================
  'gatsby-plugin-styled-components',
  typographyPlugin,
  // ==========================================
  // Transformers for Markdown and image files.
  // ==========================================
  transformerRemark,
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  // ===========
  // Miscellany.
  // ===========
  'gatsby-plugin-feed',
  'gatsby-plugin-netlify',
  'gatsby-plugin-offline',
]

module.exports = {
  siteMetadata,
  plugins,
}
