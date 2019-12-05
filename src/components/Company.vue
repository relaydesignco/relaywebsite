<template>
  <div class="company">
    <!--
        <header class="wrapper">
            <h2 class="page_title">{{page_title}}</h2>
        </header>
    -->

    <img :src="feature_image_filename" class="featured-image" :alt="feature_image_alt" />

    <article class="wrapper">
      <header class="fadein">
        <h2
          class="intro"
        >We&rsquo;re a cross-disciplinary team that helps clients use design and technology to meet business challenges and improve customer experiences.</h2>
      </header>
      <section class="slat">
        <div class="column-half">
          <h3>We speak digital... and analog.</h3>
          <p>Our team understands that successful brands communicate consistently across all channels – from print to digital to environmental experiences. Our designers, developers, and strategists help bridge the gap between channels to deliver a cohesive, compelling experience for your customers.</p>
        </div>
        <div class="column-half">
          <img src="/static/company-small-1.jpg" alt="the team at work in the meeting room" />
        </div>
      </section>

      <section class="slat">
        <div class="column-half">
          <h3>Experience counts.</h3>
          <p>Relay may be the new kid on the block, but the team behind Relay has been in the industry for a good while. With over 20 years of experience, our team understands that although design trends come and go, the principles of good design are timeless. We try to reflect those principles in every project.</p>
        </div>
        <div class="column-half">
          <img src="/static/company-small-2.jpg" alt="the team and 1 of the office dogs" />
        </div>
      </section>

      <h2>The Team</h2>
      <section class="teamMembers">
        <div class="member" v-for="member in teamMembers" :key="member.name">
          <img :src="`/static/company-headshot-${member.headshot}.jpg`" :alt="member.name" />
          <h4>{{member.name}}</h4>
          <p>{{member.job}}</p>
          <ul class="inline-list icon-list">
            <li v-if="member.twitter">
              <a :href="`https://twitter.com/${member.twitter}`" target="_blank">
                <img src="/static/icon_twitter.svg" class="icon" alt="Twitter" />
              </a>
            </li>
            <li v-if="member.linkedIn">
              <a :href="`https://www.linkedin.com/in/${member.linkedIn}`" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="LinkedIn" />
              </a>
            </li>
            <li v-if="member.instagram">
              <a :href="`https://www.instagram.com/${member.instagram}`" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "company",
  components: {},
  data() {
    return {
      page_title: "Company",
      feature_image_filename: "/static/company-large.jpg",
      feature_image_alt: "Relay Design Co bullpen",
      teamMembers: [
        {
          name: "Brian Johnson",
          job: "Designer / Operations",
          headshot: "brian",
          instagram: "pokehill",
          linkedIn: "brianatmindsalt"
        },
        {
          name: "Drew McChesney",
          job: "Strategy / Operations",
          headshot: "drew",
          twitter: "mcchesney",
          linkedIn: "drewmcchesney"
        },
        {
          name: "Mike Casto",
          job: "Designer",
          headshot: "mike",
          linkedIn: "mike-casto-7661817"
        },
        {
          name: "Ashley Revlett",
          job: "Designer / Developer",
          headshot: "ashley",
          instagram: "backlashblues",
          linkedIn: "ashley-revlett-40a96917"
        },
        {
          name: "Lauren Graehler",
          job: "Designer",
          headshot: "lauren",
          instagram: "lagraeh"
        },
        {
          name: "Aaron Fautz",
          job: "Developer",
          headshot: "aaron",
          instagram: "corpsegrindersneck"
        },
        {
          name: "David Soards",
          job: "Developer",
          headshot: "david",
          twitter: "ninjasoards",
          linkedIn: "davidysoards",
          instagram: "ninjasoards"
        }
      ]
    };
  },
  head: {
    title: function() {
      return {
        inner: this.page_title
      };
    },
    meta: [
      {
        name: "description",
        content:
          "Relay is a cross-disciplinary team that helps clients use design and technology to meet business challenges and improve customer experiences."
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables";

h2 {
  margin-bottom: 2rem;
}

.teamMembers {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  display: grid;
  @media only screen and (min-width: $screen-md-min) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 2rem;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
  }
  p {
    margin: 0;
    font-size: 0.8em;
  }
}

.member {
  text-align: center;
  flex-basis: 22%;
}
</style>
