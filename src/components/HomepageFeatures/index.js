import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Komputer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pelajari dasar-dasar komputer secara lengkap, mulai dari sejarah, komponen, cara kerja, hingga perangkat lunak.
      </>
    ),
  },
  {
    title: 'Internet',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pahami apa itu internet, bagaimana cara kerjanya, dan bagaimana kita menggunakannya dalam kehidupan sehari-hari, termasuk keamanan dan etika digital.
      </>
    ),
  },
  {
    title: 'Aplikasi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kenali berbagai jenis aplikasi, dari aplikasi desktop hingga mobile. Pelajari fungsi, contoh, dan cara penggunaannya dalam berbagai bidang.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
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
