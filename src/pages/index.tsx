import * as React from "react";
import type { HeadFC } from "gatsby";
import "./css/index.css";

function IndexPage() {
  return <main></main>;
}

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ether Mage</title>
    <meta
      name="description"
      content="Etherians of Might and Magic - An experimental cross-L2s interactive collectible on StarkNet, zkSync, Arbitrum, Optimism"
    />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ethmage.com/" />
    <meta property="twitter:title" content="Ether Mage" />
    <meta
      property="twitter:description"
      content="Etherians of Might and Magic - An experimental cross-L2s interactive collectible on StarkNet, zkSync, Arbitrum, Optimism"
    />
    <meta
      property="twitter:image"
      content="https://raw.githubusercontent.com/yudus-labs/ethmage-web/master/static/twitter-preview.png"
    />

    <meta property="og:url" content="https://ethmage.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ether Mage" />
    <meta
      property="og:description"
      content="Etherians of Might and Magic - An experimental cross-L2s interactive collectible on StarkNet, zkSync, Arbitrum, Optimism"
    />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/yudus-labs/ethmage-web/master/static/twitter-preview.png"
    />
  </>
);
