import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "基礎から丁寧に",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        CSS初心者から脱出したい方向けに、基礎的な内容からごまかしなしで学習できます。
        しっかりとした土台を築いて、確実にスキルアップしていきましょう。
      </>
    ),
  },
  {
    title: "インタラクティブ学習",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        各CSSプロパティの動作を実際に確認しながら学習できます。
        理論だけでなく、視覚的に理解を深めることで効果的に習得できます。
      </>
    ),
  },
  {
    title: "実践的なスキル習得",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        単なる暗記ではなく、なぜそうなるのかを理解することで
        実際の開発現場で使える実践的なCSSスキルを身につけられます。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
