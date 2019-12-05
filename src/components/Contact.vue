<template>
  <div class="contact">
    <article class="wrapper">
      <div class="featured">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.952917922801!2d-85.762332684709!3d38.25739799201804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972a3bfcc2ae3%3A0x6ef9a61385b0c880!2s607+W+Main+St%2C+Louisville%2C+KY+40202!5e0!3m2!1sen!2sus!4v1495589809080"
          title="Relay Design Co Google Maps location"
          width="100%"
          height="300"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      <section class="row">
        <div class="column-quarter">
          <h3>Call</h3>
          <p>
            <a href="tel:5023377309" class="major">502 337 7309</a>
          </p>
        </div>
        <div class="column-quarter">
          <h3>Email</h3>
          <p>
            <a href="mailto:hello@relaydesign.co" class="major">hello@relaydesign.co</a>
          </p>
        </div>
        <div class="column-quarter">
          <h3>Follow</h3>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.facebook.com/relaydesignco/" target="_blank">
                <img src="/static/icon_facebook.svg" class="icon" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/relaydesignco" target="_blank">
                <img src="/static/icon_twitter.svg" class="icon" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/relaydesignco" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <h3>Visit</h3>
          <p>
            607 West Main Street, #100
            <br />Louisville, Kentucky 40202
          </p>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      msg: "contact"
    };
  },
  head: {
    title: function() {
      return {
        inner: "Contact"
      };
    },
    meta: [
      {
        name: "description",
        content: "Relay is a design firm based in Louisvile, KY."
      }
    ]
  }
};
</script>
