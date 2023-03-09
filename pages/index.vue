<template>
  <NuxtLayout name="default">
    <div>
      <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      />
      <Header />
      <TextLeftImgRight />
      <Skills :skill-set="skillSet" />
      <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      />
      <div id="projects"></div>
      <ProjectSection :projects="projects" />
      <HobbySection :hobbies="hobbies" />
      <div class="bg-white">
        <Contact id="contact" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
const projects = [
  {
    isReverse: true,
    title: "SPK AHP",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/SPK.gif",
    description: "This is a decision support system project that aims to assist managers in making the right decisions. This project was made using PHP, CodeIgniter and MySQL as a database processor.",
    techStack: [ 
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    isUrl: false,
    githubLink: "https://github.com/NurulHelda/SPK-AHP",
  },
  {
    isReverse: false,
    title: "Face Recognition",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/muka.gif",
    description:
      "This project uses Tensorflow.js which is an open source Machine Learning. Where this project helps perform facial recognition, detection of facial expressions, and detection of gender and age estimation.",
    techStack: [ 
      "JavaScript",
      "HTML",
      "TensorFlow",
    ],
    isUrl: false,
    githubLink: "https://github.com/NurulHelda/Face-API",
  },
  {
    isReverse: true,
    title: "Hijab Online Shop",
    titleColor: "text-white",
    filterColor: "bg-slate-500 mix-blend-hard-light",
    imageUrl: "/project-ss/belanja.gif",
    description:
      "Fully Responsive web project with the aim to reach a wider market and manage business more easily and efficiently.",
    techStack: [ 
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
    ],
    isUrl: false,
    githubLink: "https://github.com/NurulHelda/Toko-Online-Hijab",
  },
  {
    isReverse: false,
    title: "Finger Tracking",
    titleColor: "text-white",
    filterColor: "bg-slate-700 bg-opacity-60",
    imageUrl: "/project-ss/Finger.gif",
    description:
      "Artificial intelligence project for finger tracking using Python.",
    techStack: ["Python"],
    isUrl: false,
    githubLink: "https://github.com/NurulHelda/Finger-Tracking",
  },
];


// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  // lock page height?
  // fill up modals with details
  // open modal
  currentModalContent.value = content;
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
