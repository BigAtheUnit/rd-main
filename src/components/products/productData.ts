
import { Shield, FileEdit, Store, Clock } from 'lucide-react';
import { ProductType } from './productTypes';

export const productsData: ProductType[] = [
  {
    title: "RobinShield",
    description: "Premium WordPress security plugin bundle that protects your site from malware, hackers, and vulnerabilities.",
    fullDescription: "RobinShield is a comprehensive WordPress security solution designed to protect your website from malware, hackers, and vulnerabilities. With real-time monitoring, automated backups, firewall protection, and malware scanning, RobinShield offers peace of mind for website owners. Built by our expert security team, this plugin bundle ensures your WordPress site remains secure and operational.",
    icon: <Shield size={24} />,
    isFeatured: true,
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PDF Pro",
    description: "Powerful PDF converter and editor for seamless document management and collaboration.",
    fullDescription: "PDF Pro is a powerful tool designed to simplify document management and collaboration. It allows you to convert, edit, merge, split, compress, and annotate PDF files with ease. Perfect for businesses handling large volumes of documents, PDF Pro streamlines workflows and improves productivity with its intuitive interface and advanced features.",
    icon: <FileEdit size={24} />,
    isNew: true,
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "WordPress Templates",
    description: "Premium WordPress themes designed for performance, SEO, and beautiful user experience.",
    fullDescription: "Our premium WordPress templates are meticulously crafted for exceptional performance, SEO optimization, and beautiful user experiences. Each theme is responsive, highly customizable, and built with clean code to ensure fast loading times. Ideal for businesses, bloggers, and e-commerce sites looking to make a professional impression online.",
    icon: <Store size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Booking System Pro",
    description: "Complete appointment and booking solution for service-based businesses.",
    fullDescription: "Booking System Pro offers a comprehensive appointment scheduling solution for service-based businesses. With features like calendar management, automated reminders, payment processing, and customer management, it streamlines the booking process for both businesses and clients. Highly customizable to fit different industries including healthcare, fitness, beauty, consulting, and more.",
    icon: <Clock size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Template",
    description: "Fully responsive WordPress e-commerce theme with WooCommerce integration.",
    fullDescription: "Our E-commerce Template is a powerful, fully responsive WordPress theme designed specifically for online stores. Built with WooCommerce integration, it offers a smooth shopping experience across all devices. Features include customizable product pages, multiple payment gateways, inventory management, and analytics integration to help grow your online business.",
    icon: <Store size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Charity WordPress Theme",
    description: "Donor-focused WordPress theme built specifically for charitable organisations.",
    fullDescription: "Our Charity WordPress Theme is specifically designed to help nonprofit organizations maximize their online presence and fundraising efforts. With donation integration, campaign management, event scheduling, and volunteer coordination features, this theme provides everything needed to engage supporters and drive meaningful action. The donor-focused design ensures a seamless giving experience.",
    icon: <Store size={24} />,
    isNew: true,
    imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];
