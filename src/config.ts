export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "StartMicrolearning",
  description: "Practical resources, templates, and tools for effective microlearning design and development in organizational contexts",
  author: {
    name: "Learning Design Expert",
    bio: "Helping organizations create effective microlearning experiences using the MICRO framework that drive real performance outcomes.",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/startmicrolearning",
    twitter: "https://twitter.com/startmicrolearn",
    linkedin: "https://linkedin.com/company/startmicrolearning",
    email: "hello@startmicrolearning.com"
  },
  siteUrl: "https://startmicrolearning.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;