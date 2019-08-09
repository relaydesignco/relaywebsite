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
      <p>You’ll work directly with clients to define and create digital experiences across a range of platforms, from websites and web applications to interactive exhibits and digital marketing initiatives. Work directly with our in-house developers to ensure that the finished product meets your vision. Our creative team will provide support and guidance along the way as we collaborate to create digital products that delight clients.</p>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
      <h3>Who you are</h3>
      <ul class="dash-list">
        <li>You enjoy the challenge of designing for digital devices amidst an ever-evolving technical landscape.</li>
        <li>You are strategic. You can marry the needs of the brand with what is technically possible to design successful user experiences.</li>
        <li>You look forward to collaborating with your team, as well as to spending time on your own deep in design.</li>
        <li>You enjoy finding simple, elegant solutions to complex problems.</li>
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
        <li>Collaborate with the client and internal teams to set design priorities and goals.</li>
        <li>Design wireframes to prototype and test UI/UX.</li>
        <li>Work with developers to ensure projects are technically feasible and in-budget, suggesting alternate design approaches when necessary.</li>
        <li>Design high-fidelity mocks-up for responsive web applications, content-managed websites, and interactive experiences. </li>
        <li>Develop digital design systems and documentation.</li>
      </ul>
      </div>
    </section>

    <section class="slat">
      <div class="column-three-quarters">
      <h3>Requirements</h3>
      <ul class="dash-list">
        <li>Experience designing responsive websites and digital marketing materials. Experience with mobile application design is a plus.</li>
        <li>Experience working with developers to translate designs into finished products. Basic understanding of HTML/CSS is a plus.</li>
        <li>Interest in growing your UX skillset. Experience with user testing and using analytics to improve user experience is a plus.</li>
        <li>Proficiency with Adobe Creative Suite. Experience with Sketch and InVision is a plus.</li>
        <li>Desire to be part of a collaborative team that puts the good of the project and end-user first.</li>
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
        <li>Opportunity to help shape the direction of our digital design offerings</li>
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
  name: 'CareersDigitalDesigner',
  components: {
  },
  data () {
    return {
      page_title: 'Digital Designer',
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
