<template>
  <!-- nav -->
  <nav class="flex justify-between">
    <a href="#">Thoth</a>
    <div class="flex gap-4">
      <a href="#features">Features</a>
      <a href="#faq">FAQ</a>
      <a href="#application">Application</a>
      <a href="#aboutus">About us</a>
    </div>
  </nav>
  <!-- hero -->
  <section id="hero">
    <div class="background">
      <div></div>
      <div></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-6 content-center">
          <h1>Thoth</h1>
          <h4>
            <span class="text-blue">Lay down your thoughts</span>. Stay
            organized and enhance your productivity.
          </h4>
          <p>Start taking notes now!</p>
          <a href="#" download class="button primary">Download the app</a>
        </div>
        <div class="col col-6">
          <img class="w-full img" src="/thoth.png" />
        </div>
      </div>
    </div>
  </section>
  <!-- features -->
  <section>
    <div id="features" class="container">
      <p class="text-center text-blue">FEATURES</p>
      <h2 class="text-center">Take notes easily</h2>
      <p class="text-center text-grey">
        Organize your thoughts, and stay on track all in one simple app!
      </p>
      <div
        class="row py-4"
        v-for="(feature, index) in features"
        :key="feature.index"
        :class="{ 'flex-reverse': index % 2 !== 0 }"
      >
        <div class="col col-6 content-center">
          <h3>{{ feature.title }}</h3>
          <p class="text-grey">{{ feature.description }}</p>
        </div>
        <div class="col col-6">
          <img class="img" :src="'/' + feature.src + '.png'" />
        </div>
      </div>
    </div>
  </section>
  <!-- more features -->
  <section>
    <div id="morefeatures" class="container">
      <p class="text-center text-blue">MORE FEATURES</p>
      <ul>
        <li v-for="feature in moreFeatures">
          <strong>{{ feature.title }}</strong>
          {{ feature.description }}
        </li>
      </ul>
    </div>
  </section>
  <!-- faq -->
  <section class="">
    <div id="faq" class="container">
      <p class="text-blue text-center">FAQ</p>
      <h3 class="text-center">Common questions</h3>
      <details v-for="question in questions">
        <summary>{{ question.title }}</summary>
        <p>{{ question.description }}</p>
      </details>
    </div>
  </section>
  <!-- download -->
  <section class="text-center">
    <div id="application" class="container bg-blue border-radius">
      <p class="text-blue">READY TO GET STARTED ?</p>
      <a href="#" download class="button primary">Download the app</a>
    </div>
  </section>
  <!-- about us -->
  <section>
    <div id="aboutus" class="container">
      <div class="row">
        <div class="col col-6 content-center">
          <h3>About us</h3>
          <p>
            I am a passionate frontend developer who creates tools to make daily
            life easier for those who need them.
          </p>
          <p>You can find my work on my GitHub repository.</p>
          <a
            href="https://github.com/MiKL-B"
            target="_blank"
            class="button primary"
            >Github</a
          >
        </div>
        <div class="col col-6">
          <img class="flex mx-auto" src="/thoth-bird.png" />
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col col-6">
          <h2>Thoth</h2>
          <p class="text-blue">Lay down your thoughts!</p>
        </div>
        <div class="col col-6">
          <p>Links</p>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#application">Application</a></li>
            <li><a href="#aboutus">About us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-center">© 2025 Thoth</p>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      features: [
        {
          title: "Dark theme",
          description: "A dark theme is available.",
          src: "thoth-dark",
        },
        {
          title: "Distraction-free mode",
          description:
            "You can switch between default view and distraction-free mode.",
          src: "thoth-distraction-free",
        },
        {
          title: "Preview markdown",
          description:
            "You can switch between note view, preview, and side-by-side view.",
          src: "thoth-split",
        },
      ],
      moreFeatures: [
        {
          title: "Note demo",
          description:
            "The cheat sheet that will allow you to write markdown more easily.",
        },
        {
          title: "Export",
          description: "You can export data to different formats like JSON.",
        },
        {
          title: "Import",
          description: "You can import data from different formats like JSON",
        },
        {
          title: "Tags",
          description: "You can add tags, update color and text to your notes.",
        },
        {
          title: "Filters",
          description:
            "You can organize your notes by filtering them by name, date, status, tags...",
        },
        {
          title: "Translation",
          description:
            "The application supports both French and English languages.",
        },
        {
          title: "Font",
          description:
            "You can change the font as well as its size, so that you can make the application your own.",
        },
        {
          title: "Note features",
          description:
            "You can duplicate, pin / unpin, as well as set as important, the notes you want.",
        },
        {
          title: "Embedded database",
          description: "Your data is saved in a database on your computer.",
        },
      ],
      questions: [
        {
          title: "What features does your note-taking app offer?",
          description:
            "Our app offers many features, such as creating and organizing notes, you can find the features section on our website.",
        },
        {
          title: "Is the app free?",
          description: "Yes it is.",
        },
        {
          title: "Is there a dark mode in the app?",
          description:
            "Yes, the app offers a dark mode. You can enable this option in the app's settings.",
        },
      ],
    };
  },
};
</script>
<style>
#hero {
  padding: 8rem 1.5rem;
  margin-bottom: 1rem;
}
.flex-reverse {
  display: flex;
  flex-direction: row-reverse;
}
.text-blue {
  color: var(--blue);
}
.text-grey {
  color: var(--light-grey-3);
}
.bg-blue {
  background: rgba(97, 175, 239, 0.1);
}
.border-radius {
  border-radius: 5px;
}
.py-4 {
  padding: 2rem 0;
}
.background {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(to right, #ffffff, #ffffff);
  display: flex;
  flex-grow: 1;
  z-index: -1;
}
.background div {
  position: absolute;
  border-radius: 100%;
  height: 0;
  filter: blur(240vw);
  opacity: 0.4;
}
.background div:nth-child(1) {
  background: linear-gradient(132deg, var(--blue) 0%, #ffffff 100%);
  width: 75%;
  padding-top: 75%;
  left: 4%;
  top: 28%;
  transform: translateX(-50%) translateY(-50%);
}
.background div:nth-child(2) {
  background: linear-gradient(132deg, #ffffff 0%, var(--blue) 100%);
  width: 63%;
  padding-top: 63%;
  left: 83%;
  top: 74%;
  transform: translateX(-50%) translateY(-50%);
}
section {
  position: relative;
}
img {
  height: 300px;
}
.img {
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
