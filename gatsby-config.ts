import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ether Mage`,
    siteUrl: `https://ethmage.com`,
    description: `Etherians of Might and Magic - An experimental cross-L2s interactive collectible on StarkNet, zkSync, Arbitrum, Optimism`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ether Mage`,
        short_name: `Ether Mage`,
        start_url: `/`,
        background_color: `#0b1619`,
        theme_color: `#42d5d6`,
        display: `standalone`,
        icon: `static/logo-compact-transparent.png`,
      },
    },
  ],
};

export default config;
