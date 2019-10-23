/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
      {/* Hero Image */}
      <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          <img
            alt="Logo"
            className="index-hero-logo"
            // src={`${siteConfig.baseUrl}img/docusaurus_keytar.svg`}
            src="https://www.brandcrowd.com/gallery/brands/pictures/picture13274446056474.png"
          />
          Monitor and benchmark your routes{' '}
          with <span className="index-hero-site-title">{siteConfig.title}.{' '}</span>
          <span className="index-hero-project-keywords">Open Source</span>{' '}
          tool.
        </h1>
        <div className="index-ctas" style={{textAlign:`left`}}>
          <a
            className="button index-ctas-get-started-button"
            href={`${siteConfig.baseUrl}docs/${language}/installation`}>
            <div>Get Started</div>
          </a>
          <span className="index-ctas-github-button">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=zairza-cetb&amp;repo=bench-routes&amp;type=star&amp;count=true&amp;size=large"
              frameBorder={0}
              scrolling={0}
              width={160}
              height={30}
              title="GitHub Stars"
            />
            {/* <iframe 
              src="https://ghbtns.com/github-btn.html?user=zairza-cetb&repo=bench-routes&type=watch&count=true&size=large&v=2" 
              frameborder="0" 
              scrolling="0" 
              width="160px" 
              height="30px"/> */}
          </span>
        </div>
      </div>
      </div>
      {/* Hero Image end */}
      {/* Important announcements */}
      <div className="index-hero" style={{backgroundColor:`black`}}>
      <div className="index-hero-inner">
        <h1 
          className="index-hero-project-tagline" 
          style={{fontSize: `40px`, textAlign: `center`}}>
          {/* Enter announcement here */}
          Get <span className="index-hero-site-title">bench routes{' '}</span>for your platform.<br/>
            {/* Supported platforms */}
            <img src="https://img.shields.io/static/v1?label=Linux&message=amd64&color=lightgrey&logo=Linux&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Linux&message=ppc64&color=lightgrey&logo=Linux&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Linux&message=mips64&color=lightgrey&logo=Linux&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Darwin&message=amd64&color=lightgrey&logo=Apple&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Windows&message=amd64&color=lightgrey&logo=Windows&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=FreeBSD&message=amd64&color=lightgrey&logo=FreeBSD&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=NetBSD&message=amd64&color=lightgrey&logo=Simple%20Icons&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=OpenBSD&message=amd64&color=lightgrey&logo=OpenSUSE&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=NetBSD&message=amd64&color=lightgrey&logo=Simple%20Icons&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Dragonfly&message=amd64&color=lightgrey&logo=Simple%20Icons&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Plan9&message=amd64/386&color=lightgrey&logo=Simple%20Icons&style=for-the-badge"/>{' '}{' '}
            <img src="https://img.shields.io/static/v1?label=Solaris&message=amd64&color=lightgrey&logo=Simple%20Icons&style=for-the-badge"/>{' '}{' '}
            {/* Supported Platforms end */}
        </h1>
      </div>
      </div>
      {/* Announcements end */}
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
