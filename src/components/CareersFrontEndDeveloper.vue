<template>
  <div class="careers detail wrapper">
    <!--
    <header class="wrapper">
        <h1 class="page_title">{{page_title}}</h1>
    </header>
    -->
    <section class="slat">
      <div class="column-three-quarters">
        <h1>{{ page_title }}</h1>
        <h2>Join a collaborative, creative team that’s dedicated to building digital products for forward-thinking companies. </h2>
        <p>You’ll work directly with clients to define and create digital experiences across a range of platforms, from websites and web applications to interactive exhibits and digital marketing initiatives. Our creative team will provide support and guidance along the way as we collaborate to create digital products that delight clients.</p>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
        <h3>Who you are</h3>
        <ul class="dash-list">
          <li>You enjoy the challenge of developing for the web amidst an ever-evolving technical landscape.</li>
          <li>You look forward to collaborating with your team, as well as to spending time on your own deep in code.</li>
          <li>You enjoy finding simple, elegant solutions to complex technical problems.</li>
          <li>You appreciate good design and pay attention to the details of typography, color and composition.</li>
          <li>You’re excited to learn from others and to share your own knowledge with your team. </li>
          <li>You’re flexible, like to iterate, and are able to prioritize tasks on a daily basis.</li>
        </ul>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
        <h3>Day-to-day responsibilities</h3>
        <ul class="dash-list">
          <li>Front-end development of responsive web applications, content-managed websites, and single-page applications</li>
          <li>Work with designers and other developers to develop digital products that are technically feasible and in-budget, suggesting alternate design approaches when necessary</li>
          <li>Translate finished designs into semantic, accessible front-end code</li>
          <li>Develop integrations with third-party APIs and applications</li>
          <li>Participate in the testing of all code across a range of devices and platforms</li>
          <li>Deploy code to testing and production servers</li>
          <li>Work with the development team to decide on strategic approaches to problem-solving and technology stack decisions</li>
          <li>Practice good version control techniques using Git</li>
          <li>Stay up-to-date on best practices for speed, security and scalability</li>
        </ul>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
        <h3>Requirements</h3>
        <ul class="dash-list">
          <li>3+ years development experience</li>
          <li>Expert-level understanding of HTML and CSS, including mobile and responsive design and development practices</li>
          <li>Thorough knowledge of modern Javascript (ES6) and a modern Javascript framework (Vue/React/Angular)</li>
          <li>Experience interacting with a server-side framework like Django, Rails or Laravel</li>
          <li>Experience with Wordpress or similar content management system</li>
          <li>Experience with NPM and Javascript build tools </li>
          <li>Understanding of Git / Version Control </li>
          <li>Understanding of software engineering best practices, including modular class structures and ability to write DRY code</li>
          <li>Ability to work independently as well as on a team with multiple developers</li>
          <li>Bonus points: experience with Python, PHP, Docker and/or e-commerce platforms</li>
        </ul>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
      <h3>What we offer</h3>
      <ul class="dash-list">
        <li>Competitive salary and benefits package</li>
        <li>100% coverage of healthcare premiums</li>
        <li>Retirement plan with company match</li>
        <li>Flexible office hours and ability to work remote</li>
        <li>Opportunity to help shape the direction of our digital services, including technology stack decisions</li>
        <li>Opportunity to work on a wide range of projects for a variety of clients, from local start-ups to established national brands</li>
      </ul>
      </div>
    </section>

    <section class="wrapper">
      <h3>Ready to Apply?</h3>
      <p>Send your cover letter, résumé, and portfolio to <a href="mailto:careers@relaydesign.co">careers@relaydesign.co</a>.</p>
    </section>
  </div>

</template>

<script>

export default {
  name: 'CareersFrontEndDeveloper',
  components: {
  },
  data () {
    return {
      page_title: 'Front-end Developer',
    }
  },
  head: {
    title: function () {
      return {
        inner: this.page_title
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/project.scss";

</style>
