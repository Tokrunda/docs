import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Secure and Profitable DeFi Ecosystem",
    image: require("@site/static/img/security.png").default,
    description: (
      <>
        Explore a secure and profitable DeFi ecosystem that prioritizes the
        safety of your assets while offering lucrative investment opportunities.
        Benefit from robust security measures, transparent operations, and a
        solid foundation for long-term growth.
      </>
    ),
  },
  {
    title: "Growth Oriented and Innovative Tokenomics",
    image: require("@site/static/img/innovative.png").default,
    description: (
      <>
        Discover our innovative tokenomics designed to drive growth and maximize
        returns for investors. With an ever-increasing floor price and carefully
        crafted mechanisms, our ecosystem creates a strong foundation for
        sustainable value appreciation and long-term profitability.
      </>
    ),
  },
  {
    title: "Cutting-Edge DeFi Solutions",
    image: require("@site/static/img/solutions.png").default,
    description: (
      <>
        Experience the power of cutting-edge DeFi solutions at your fingertips.
        Unlock a range of state-of-the-art utilities and platforms, including a
        multichain ecosystem, liquidity backing mechanisms, and advanced
        features that enhance your DeFi journey and open doors to new
        possibilities.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} title={title} role="img" height={200} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
