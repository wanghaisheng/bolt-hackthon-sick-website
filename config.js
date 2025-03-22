// Configuration values for the hackathon landing page

// Set the countdown date (30 days from now for demo purposes)
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);
export const countdownDate = futureDate.getTime();

// Toggle button sets configuration
export const toggleButtonSets = [
    {
        buttonsQuery: '.about .toggle-btn',
        contentsQuery: '.about .audience-content'
    },
    {
        buttonsQuery: '.faq .toggle-btn',
        contentsQuery: '.faq .audience-content'
    },
    {
        buttonsQuery: '.resources .toggle-btn',
        contentsQuery: '.resources .audience-content'
    }
];

// Prize amounts configuration (for easy updating)
export const prizeAmounts = {
    grandPrize: "$500,000",
    bestAIApplication: "$100,000",
    mostInnovativeBeginner: "$75,000",
    bestUseOfAPI: "$50,000",
    bestEducational: "$50,000"
};

// Registration tiers pricing
export const registrationTiers = {
    basic: {
        originalPrice: "$99",
        salePrice: "$49"
    },
    standard: {
        originalPrice: "$249",
        salePrice: "$149"
    },
    premium: {
        originalPrice: "$499",
        salePrice: "$349"
    }
};

// Challenge categories information
export const challengeCategories = [
    {
        name: "AI for Good",
        icon: "brain",
        prize: "$100,000",
        description: "Create solutions that address social, environmental, or humanitarian challenges using AI."
    },
    {
        name: "Healthcare Innovation",
        icon: "heartbeat",
        prize: "$75,000",
        description: "Develop AI applications that improve healthcare delivery, patient outcomes, or medical research."
    },
    {
        name: "Generative AI",
        icon: "robot",
        prize: "$80,000",
        description: "Push the boundaries of what's possible with generative AI models in creative and practical applications."
    },
    {
        name: "Climate Tech",
        icon: "globe-americas",
        prize: "$90,000",
        description: "Build AI-powered solutions to address climate change, sustainability, and environmental challenges."
    }
];

// Resources information
export const resources = {
    experienced: [
        {
            title: "Advanced AI Techniques",
            icon: "book",
            description: "Explore cutting-edge AI algorithms and techniques to give your project a competitive edge."
        },
        {
            title: "API Documentation",
            icon: "code",
            description: "Comprehensive documentation for all APIs and services available during the hackathon."
        },
        {
            title: "Advanced Workshops",
            icon: "video",
            description: "Pre-recorded workshops on specialized topics from industry experts."
        }
    ],
    beginners: [
        {
            title: "AI Fundamentals",
            icon: "graduation-cap",
            description: "Learn the basics of AI and machine learning with our beginner-friendly guide."
        },
        {
            title: "No-Code AI Tools",
            icon: "tools",
            description: "Discover powerful no-code and low-code tools that make AI accessible to everyone."
        },
        {
            title: "Beginner Tutorials",
            icon: "users",
            description: "Step-by-step tutorials designed specifically for those new to AI development."
        }
    ]
};

// Judges information
export const judges = [
    {
        name: "Dr. Sarah Chen",
        title: "AI Research Director, Tech Giant Inc.",
        bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks. Passionate about mentoring the next generation of AI developers."
    },
    {
        name: "Mark Reynolds",
        title: "Founder & CEO, AI Startup Accelerator",
        bio: "Serial entrepreneur who has founded three successful AI startups. Specializes in identifying promising AI technologies and helping developers scale their innovations."
    },
    {
        name: "Prof. James Wilson",
        title: "Director, AI Education Institute",
        bio: "Pioneer in AI education with a focus on making machine learning accessible to beginners. Has developed curriculum used by over 50 universities worldwide."
    },
    {
        name: "Aisha Patel",
        title: "CTO, Innovation Labs",
        bio: "Technical leader with expertise in AI implementation across industries. Advocates for practical AI applications that solve real-world problems."
    }
];

// Project showcase information 
export const showcaseProjects = [
    {
        title: "AquaGuard AI",
        team: "Team EcoTech",
        category: "AI for Good",
        description: "An AI-powered system that monitors water quality in real-time and predicts contamination events before they affect communities.",
        prize: "$500,000",
        award: "Grand Prize"
    },
    {
        title: "NeuroDiagnose",
        team: "Team MedInnovate",
        category: "Healthcare",
        description: "An advanced neural network that analyzes medical images to detect early signs of neurological disorders with 97% accuracy.",
        prize: "$100,000",
        award: "Best AI Application"
    },
    {
        title: "SymphonyAI",
        team: "Team CreativeFusion",
        category: "Generative AI",
        description: "A groundbreaking generative AI that composes original music by learning from thousands of classical compositions across different eras.",
        prize: "$80,000",
        award: "Most Innovative"
    },
    {
        title: "ClimatePredict",
        team: "Team GreenFuture",
        category: "Climate Tech",
        description: "An interactive educational platform that uses AI to create personalized climate change simulations based on user location and lifestyle choices.",
        prize: "$50,000",
        award: "Best Educational"
    },
    {
        title: "SignalTranslate",
        team: "Team NewCoders",
        category: "AI for Good",
        description: "A mobile app that uses computer vision to translate sign language into text and speech in real-time, created by a team with no prior coding experience.",
        prize: "$75,000",
        award: "Best Beginner",
        beginnerProject: true
    },
    {
        title: "MediGenomics",
        team: "Team BioTech",
        category: "Healthcare, Generative AI",
        description: "An AI system that generates personalized treatment plans by analyzing patient genomic data and medical history using advanced LLMs.",
        prize: "$50,000",
        award: "Best Use of API"
    }
];

// Testimonials
export const testimonials = [
    {
        text: "As an experienced developer, I was amazed by the level of innovation and support at this hackathon. Our team built an AI model that's now the foundation of our startup!",
        name: "Jennifer Wu",
        company: "CTO, AI Health Solutions"
    },
    {
        text: "I joined with zero coding experience, just curiosity about AI. The mentors were incredibly supportive, and I created my first working AI project! Now I'm enrolled in a computer science degree program.",
        name: "Michael Torres",
        company: "Former Marketing Manager, Now CS Student"
    },
    {
        text: "Our team of experienced developers won the Best AI Application category. The prize money and connections we made at the hackathon helped us secure seed funding for our company.",
        name: "David Park",
        company: "Founder, NLP Innovations"
    }
];