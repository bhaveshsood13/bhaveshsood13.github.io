// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected machine learning and systems projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-books",
          title: "Books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-understanding-the-transformers-library",
        
          title: "Understanding the Transformers Library",
        
        description: "A practical guide to model classes, configurations, preprocessing, caching, and loading pretrained checkpoints.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/transformers-library/";
          
        },
      },{id: "post-what-hugging-face-actually-is",
        
          title: "What Hugging Face Actually Is",
        
        description: "A practical overview of Hugging Face, the Hub, and how the ecosystem fits together.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hugging-face-overview/";
          
        },
      },{id: "books-build-a-large-language-model-from-scratch",
          title: 'Build a Large Language Model (From Scratch)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/build-a-large-language-model-from-scratch/";
            },},{id: "books-distributed-optimization-learning-and-inference",
          title: 'Distributed Optimization, Learning, and Inference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/distributed-optimization-learning-inference/";
            },},{id: "books-probability-random-variables-and-stochastic-processes",
          title: 'Probability, Random Variables, and Stochastic Processes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/probability-random-variables-stochastic-processes/";
            },},{id: "books-warbreaker",
          title: 'Warbreaker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/warbreaker/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-building-my-own-llama-2-model",
          title: 'Building My Own LLaMA-2 Model',
          description: "Implemented modern LLM components from scratch, including RoPE, grouped-query attention, and LoRA fine-tuning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/building-my-own-llama2-model/";
            },},{id: "projects-prompt-to-prompt-image-editing-with-latent-diffusion-models",
          title: 'Prompt-to-Prompt Image Editing with Latent Diffusion Models',
          description: "Fine-grained text-driven image editing using cross-attention in latent diffusion models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prompt-to-prompt-image-editing/";
            },},{id: "projects-request-based-auto-scaling-using-aws-lambda",
          title: 'Request-based Auto-Scaling using AWS Lambda',
          description: "Serverless inference infrastructure with Terraform, Docker, and fine-grained request scaling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/request-based-auto-scaling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%68%61%76%65%73%68%73%6F%6F%64%31%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bhaveshsood13", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bhavesh-sood", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
