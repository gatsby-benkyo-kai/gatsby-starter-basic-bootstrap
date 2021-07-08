module.exports = {
  siteMetadata: {
    title: `Gatsby Basic Bootstrap Starter`,
    description: `A simple Gatsby starter leveraging react-bootstrap and little else.`,
    author: `@mik3y`,
  },
  plugins: [
    //metaタグの設定
    `gatsby-plugin-react-helmet`,
    {
      //resolve:使用するプラグイン名の指定
      //gatsby-source-filesystem:ローカルのファイルシステムと、gatsbyをつなぐインターフェイスになるようなプラグイン
      //name:識別用の名前
      //path:データソースの場所を指定
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        //imagesフォルダ
        path: `${__dirname}/src/images`,
      },
      options:{
        name:`information`,
        //informationフォルダ
        path:`${__dirname}/src/content/information`,
      },
    },
    
    {
      //gatsby-transformer-remark:あるデータを別のデータに変換するためのプラグイン
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[
          {
            //Gatsby上で画像を取り扱うプラグイン
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth:590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`,

    //Gatsby上で画像を取り扱うプラグイン
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
