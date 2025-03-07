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
  <section>
    <div class="background">
      <div></div>
      <div></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-6 content-center">
          <h1>Thoth</h1>
          <p class="text-blue">Lay down your thoughts!</p>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequatur nostrum officiis quo animi cumque est alias quos, dolore
            labore!
          </h4>
          <a href="#" download class="button primary">Download</a>
        </div>
        <div class="col col-6">
          <img class="w-full" src="https://picsum.photos/800" />
        </div>
      </div>
    </div>
  </section>
  <!-- features -->
  <section>
    <div id="features" class="container">
      <p class="text-center text-blue">FEATURES</p>
      <h2 class="text-center">Simplify invoicing and elevate</h2>
      <p class="text-center text-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exer
      </p>
      <div
        class="row py-4"
        v-for="(feature, index) in features"
        :key="feature.index"
        :class="{ 'flex-reverse': index % 2 !== 0 }"
      >
        <div class="col col-6">
          <h3>{{ feature.title }}</h3>
          <p class="text-grey">{{ feature.description }}</p>
        </div>
        <div class="col col-6">
          <img src="https://picsum.photos/500/300" />
        </div>
      </div>
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
      <a href="#" download class="button primary">Download</a>
    </div>
  </section>
  <!-- about us -->
  <section>
    <div id="aboutus" class="container">
      <div class="row">
        <div class="col col-6">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col col-6">
          <img src="https://picsum.photos/500/300" />
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
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      features: [
        {
          title: "feature 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          src: "",
        },
        {
          title: "feature 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          src: "",
        },
        {
          title: "feature 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          src: "",
        },
        {
          title: "feature 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          src: "",
        },
      ],
      questions: [
        {
          title: "Question 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1",
        },
        {
          title: "Question 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1",
        },
        {
          title: "Question 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1",
        },
        {
          title: "Question 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1",
        },
      ],
    };
  },
};
</script>
<style>
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
</style>
