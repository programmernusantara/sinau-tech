import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mobile App Development',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Belajar membuat aplikasi modern dari awal menggunakan Dart & Flutter. 
        Bangun UI elegan, sistem terhubung ke backend, hingga aplikasi siap rilis.
      </>
    ),
  },
  {
    title: 'Internet of Things (IoT)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kuasai dunia IoT dengan Arduino dan Raspberry Pi. 
        Rancang perangkat pintar, automasi, dan sistem berbasis sensor dengan mudah.
      </>
    ),
  },
  {
    title: 'AI & Machine Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pelajari konsep kecerdasan buatan, machine learning, 
        dan cara membangun model AI yang dapat diintegrasikan langsung ke aplikasi Anda.
      </>
    ),
  },
];


function Feature({ Svg, title, description }) {
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
