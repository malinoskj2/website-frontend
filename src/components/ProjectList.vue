<template>

              <div  class="column translate-content-mob">
                <div id="list-title">
                  <h1>
                    <strong>{{projectListTitle}}</strong>
                  </h1>
                  <div class="border-dummy"></div>
                </div>

                <div class="j-project"
                     v-for="(project) in projectList"
                     :key="project.name" >


                      <ProjectDescripBox
                        :projectInfo="project"/>

              </div>
              </div>
</template>

<script>
import ProjectDescripBox from '@/components/ProjectListItem.vue';


export default {
  name: 'ProjectTiles',
  components: {
    ProjectDescripBox,
  },
  props: {
    projectList: {
      type: Array,
      required: true,
      default: () => [{
        name: 'noProjectsGiven',
        description: 'did not receive project prop',
        html_url: '',
      }],
    },
    projectListTitle: {
      type: String,
      required: true,
      default: 'no name given',
    },
  },
  data() {
    return {
    };
  },
  computed: {
    getProjects() {
      const projects = this.$store.getters.getProjects;
      return projects;
    },
  },
  methods: {

  },
};
</script>

<style scoped>

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform:  translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform:  translate3d(0, 0, 0);
      transform:   translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    -webkit-animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }

  #list-title {
    font-title: Karla;
    margin-bottom: 1rem;
    letter-spacing: .1rem;
  }

  .border-dummy {

    transform-origin: left;
    width: 30rem;
    transform: scaleX(0) scaleY(2);
    animation: 300ms 50ms draw-border-anim forwards;
  }

  @keyframes draw-border-anim {
    0% {
      transform: scaleX(0) scaleY(2);
    }
    100% {
      transform:scaleX(.5) scaleY(2);
    }
  }


  @media only screen
  and (min-width: 769px) and (max-width: 1024px)  {
    .translate-content-mob{
      transform: translateX(20%);
    }
  }
</style>
