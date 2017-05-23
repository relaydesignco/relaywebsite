<template>
  <div class="projects">

        <header class="wrapper">
            <h2 class="page_title">{{page_title}}</h2>
        </header>

        <article class="wrapper">
          <section v-for="project in projects">
            <router-link :to="{ path: project.url }">
              <h3 class="project_title"><span>{{project.verb}}</span> {{project.title}}</h3>
              <div class="project_preview">
                <div class="preview_text">
                  <p>
                    {{project.excerpt}}<br />
                    <span class="btn">View Case Study</span>
                  </p>
                </div>
                <img :src="project.feature_image_filename" class="feature" />
              </div>
            </router-link>
          </section>
      </article>
      <sitefooter></sitefooter>
  </div>

</template>

<script>
import Sitefooter from '../components/Sitefooter'

export default {
  name: 'projects',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Projects',
      projects: [
    			{  
              verb:'Re-inventing',
              title:'PSA Airlines',
              url:'/project/psa',
              feature_image_filename:'/static/project-psa-feature.jpg',
              excerpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          },
          {  
              verb:'Growing to scale',
              title:'21c Museum Hotels',
              url:'/project/21c',
              feature_image_filename:'/static/project-21c-feature.jpg',
              excerpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          },
          {  
              verb:'Introducing',
              title:'Waterfront Botanical Gardens',
              url:'/project/waterfront-botanical-gardens',
              feature_image_filename:'/static/project-wbg-feature.jpg',
              excerpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          },
          {  
              verb:'Envisioning',
              title:'Garage Bar',
              url:'/project/garage-bar',
              feature_image_filename:'/static/project-garage-feature.jpg',
              excerpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          },
          {  
              verb:'Visualizing data with',
              title:'The Hub',
              url:'/projects/psa-airlines',
              feature_image_filename:'/static/fpo_large.png',
              excerpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          }
    	  ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
  
  @import "../assets/_variables.scss";

  section { position: relative; }

  .project_preview {
    position: relative;
    overflow: hidden; 

    img {
      display: block;
    }
  }

  .preview_text {
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s;
    background: rgba(45, 155, 214, 0);

    p {
      font-size: 1.6em;
      margin: 1em;
      opacity: 0;
      color: white;
      @media only screen and (min-width: $screen-md-min) {
       max-width: 70%;
      }

      .btn {
        border: 1px solid white;
        padding: .5em 1em;
        display:inline-block;
        font-size: .5em;
        line-height: 1;
        margin-top: 2em;
        transition: all .2s;

        &:hover {
          background: white;
          color: $brand-primary;
          box-shadow: 1px 1px 5px rgba(0,0,0,.2);
        }
      }
      
    }
  }

  a:hover .preview_text {
    background: rgba(45, 155, 214, .6);
    color: white;
    opacity: 1;

    p {
      opacity: 1;
    }
  }


</style>
