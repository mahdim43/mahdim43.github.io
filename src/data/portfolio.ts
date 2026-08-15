export type Locale = 'en' | 'fa';
export type Direction = 'ltr' | 'rtl';

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  action: string;
  outcome: string;
  metric: Metric;
  technologies: string[];
}

export interface Experience {
  id: string;
  period: string;
  organization: string;
  role: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Capability {
  title: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface PortfolioContent {
  locale: Locale;
  direction: Direction;
  htmlLocale: string;
  openGraphLocale: string;
  meta: {
    title: string;
    description: string;
    image: string;
  };
  navigation: Array<{ href: string; label: string }>;
  ui: {
    skip: string;
    menu: string;
    closeMenu: string;
    switchLanguage: string;
    otherLanguage: string;
    viewCaseStudies: string;
    downloadCv: string;
    openProject: string;
    currentPage: string;
    available: string;
    copied: string;
  };
  hero: {
    location: string;
    discipline: string;
    name: string;
    title: string;
    statement: string;
    introduction: string;
  };
  metrics: Metric[];
  sectionCopy: {
    caseStudies: { eyebrow: string; title: string; description: string };
    experience: { eyebrow: string; title: string; description: string };
    capabilities: { eyebrow: string; title: string; description: string };
    projects: { eyebrow: string; title: string; description: string };
    credentials: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string; description: string };
  };
  caseLabels: { challenge: string; action: string; outcome: string };
  caseStudies: CaseStudy[];
  experience: Experience[];
  capabilities: Capability[];
  projects: Project[];
  credentials: {
    education: { label: string; title: string; detail: string; period: string };
    certification: { label: string; title: string; detail: string };
    languages: { label: string; items: string[] };
  };
  contact: {
    location: string;
    availability: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: string;
}

const shared = {
  email: 'hooshmandm43@gmail.com',
  github: 'https://github.com/mahdim43',
  linkedin: 'https://www.linkedin.com/in/mahdi-hooshmand',
};

export const portfolio: Record<Locale, PortfolioContent> = {
  en: {
    locale: 'en',
    direction: 'ltr',
    htmlLocale: 'en',
    openGraphLocale: 'en_US',
    meta: {
      title: 'Mahdi Hooshmand — Systems & Infrastructure Specialist',
      description:
        'Systems and infrastructure specialist in Mashhad with experience spanning networking, VMware, VoIP, Odoo ERP, and operational automation since 2019.',
      image: '/og/portfolio-en.png',
    },
    navigation: [
      { href: '#case-studies', label: 'Case studies' },
      { href: '#experience', label: 'Experience' },
      { href: '#capabilities', label: 'Capabilities' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    ui: {
      skip: 'Skip to main content',
      menu: 'Open navigation',
      closeMenu: 'Close navigation',
      switchLanguage: 'Switch language',
      otherLanguage: 'فارسی',
      viewCaseStudies: 'Explore case studies',
      downloadCv: 'Download CV',
      openProject: 'View on GitHub',
      currentPage: 'Current language',
      available: 'Open to remote roles',
      copied: 'Email copied',
    },
    hero: {
      location: 'Mashhad, Iran · Remote',
      discipline: 'Systems · Infrastructure · ERP',
      name: 'Mahdi Hooshmand',
      title: 'Systems & Infrastructure Specialist',
      statement: 'I make complex systems dependable.',
      introduction:
        'Experience spanning infrastructure roles since 2019—supporting business-critical servers, VMware environments, VoIP platforms, Odoo workflows, and the people who rely on them.',
    },
    metrics: [
      { value: '500', label: 'users in the largest ERP environment supported' },
      { value: '200+', label: 'customer environments on a cloud call-center platform' },
      { value: '20+', label: 'Linux and Windows servers maintained' },
      { value: '6–7', label: 'complex support cases resolved on a typical day' },
    ],
    sectionCopy: {
      caseStudies: {
        eyebrow: 'Selected operations',
        title: 'Systems improved under real constraints.',
        description:
          'Anonymized field notes from ERP, communications, and virtualization work—focused on decisions, scale, and operational impact.',
      },
      experience: {
        eyebrow: 'Experience log',
        title: 'From frontline support to business-critical systems.',
        description:
          'A progression through support, networks, voice infrastructure, databases, and ERP operations.',
      },
      capabilities: {
        eyebrow: 'Technical range',
        title: 'Infrastructure breadth with a troubleshooting core.',
        description:
          'The tools matter, but the through-line is diagnosing behavior across layers and leaving systems easier to operate.',
      },
      projects: {
        eyebrow: 'Independent builds',
        title: 'Learning by shipping working systems.',
        description:
          'Selected software projects that extend my infrastructure background into application architecture, APIs, and automation.',
      },
      credentials: { eyebrow: 'Foundation', title: 'Education, certification, and languages.' },
      contact: {
        eyebrow: 'Next system',
        title: 'Need someone who can trace the whole problem?',
        description:
          'I am open to remote systems and infrastructure roles where careful troubleshooting, reliable operations, and clear communication matter.',
      },
    },
    caseLabels: { challenge: 'Constraint', action: 'Intervention', outcome: 'Result' },
    caseStudies: [
      {
        id: 'erp-operations',
        category: 'ERP operations',
        title: 'Made a complex approval process operable without custom code.',
        summary:
          'Supported and customized Odoo 15/17 across customer environments ranging from small teams to a business-critical deployment of approximately 500 users.',
        challenge:
          'Warehouse transfers required separate sender and receiver confirmation, with unauthorized stock movement prevented at each stage.',
        action:
          'Designed forms, fields, reports, automations, access controls, and a two-stage transfer approval entirely in Odoo Studio.',
        outcome:
          'Delivered the required control without the custom module initially expected, while continuing to resolve 6–7 complex support requests per day.',
        metric: { value: '≈500', label: 'users in the largest supported environment' },
        technologies: ['Odoo 15/17', 'Odoo Studio', 'SQL', 'CRM', 'Access control'],
      },
      {
        id: 'call-center-platform',
        category: 'Voice infrastructure',
        title: 'Kept a multi-tenant call-center platform ready to grow.',
        summary:
          'Supported the VMware, Linux, Windows, and Asterisk layers behind a hosted communications platform.',
        challenge:
          'More than 200 isolated customer environments depended on stable voice, network, and virtual-machine behavior.',
        action:
          'Monitored services, provisioned VMs, maintained SIP trunks and call flows, and traced faults across VMware, Asterisk, MikroTik, and Cisco systems.',
        outcome:
          'Sustained daily operations and capacity expansion while supporting deployments across hotels, residential complexes, and service centers.',
        metric: { value: '200+', label: 'customer environments supported' },
        technologies: ['VMware', 'Asterisk', 'Issabel', 'SIP', 'MikroTik', 'Cisco'],
      },
      {
        id: 'virtualization',
        category: 'Virtualization',
        title: 'Consolidated physical servers into a manageable virtual estate.',
        summary:
          'Moved fragmented workloads onto a centralized VMware ESXi environment to simplify infrastructure operations.',
        challenge:
          'Six physical servers increased maintenance overhead and made workload management harder to coordinate.',
        action:
          'Planned the physical-to-virtual migration, consolidated services, and organized approximately eight virtual machines in ESXi.',
        outcome:
          'Reduced physical sprawl and created a clearer foundation for centralized maintenance, monitoring, and recovery planning.',
        metric: { value: '6 → 8', label: 'physical servers consolidated into VMs' },
        technologies: ['VMware ESXi', 'P2V', 'Windows Server', 'Linux', 'Backup planning'],
      },
    ],
    experience: [
      {
        id: 'erp-specialist',
        period: 'Apr 2024 — Oct 2025',
        organization: 'ERP solutions provider · Anonymized',
        role: 'Software Support & Odoo Specialist',
        summary:
          'Owned support, customization, and user guidance across multiple Odoo customer environments.',
        highlights: [
          'Customized Inventory, Sales, Purchase, Accounting, and CRM workflows with Odoo Studio.',
          'Handled application, workflow, access, and database-related issues across deployments of up to approximately 500 users.',
          'Translated operational requirements into practical forms, reports, automations, and permissions.',
        ],
        technologies: ['Odoo', 'Odoo Studio', 'SQL', 'ERP support'],
      },
      {
        id: 'financial-support',
        period: 'Jun 2023 — Mar 2024',
        organization: 'Financial software provider · Anonymized',
        role: 'Technical Support Specialist',
        summary:
          'Diagnosed financial software, Windows, and SQL Server issues across customer environments.',
        highlights: [
          'Used structured database queries and cross-layer troubleshooting to find durable fixes.',
          'Automated repetitive workstation configuration using Batch and Registry files.',
        ],
        technologies: ['SQL Server', 'Windows', 'Batch', 'Registry'],
      },
      {
        id: 'voip-network',
        period: 'Jan 2020 — Jul 2021',
        organization: 'Cloud communications provider · Anonymized',
        role: 'VoIP & Network Support Specialist',
        summary:
          'Maintained servers, virtual machines, networking, and voice services for a hosted call-center platform.',
        highlights: [
          'Supported more than 20 Linux and Windows servers and over 200 customer environments.',
          'Configured Asterisk, Issabel, SIP trunks, IVR, call queues, and Grandstream equipment.',
          'Troubleshot routing, connectivity, and voice quality across MikroTik and Cisco equipment.',
        ],
        technologies: ['Asterisk', 'VMware', 'Linux', 'MikroTik', 'Cisco'],
      },
      {
        id: 'helpdesk',
        period: 'Nov 2019 — Jul 2020',
        organization: 'IT services company · Anonymized',
        role: 'IT Helpdesk',
        summary:
          'Supported users across Windows systems, hardware, software, and network connectivity.',
        highlights: [
          'Diagnosed issues from individual workstations through shared infrastructure services.',
          'Assisted with system installation, configuration, and maintenance.',
        ],
        technologies: ['Windows', 'Networking', 'IT support'],
      },
    ],
    capabilities: [
      {
        title: 'Systems & virtualization',
        description: 'Operate mixed server environments and reduce infrastructure complexity.',
        technologies: ['Linux', 'Windows Server', 'VMware ESXi', 'Docker', 'Virtual machines'],
      },
      {
        title: 'Networking',
        description: 'Trace connectivity and segmentation problems from endpoint to edge.',
        technologies: ['MikroTik', 'Cisco', 'VLAN', 'NAT', 'Firewall', 'VPN', 'LAN/WAN'],
      },
      {
        title: 'VoIP',
        description: 'Configure and support complete business voice paths and call flows.',
        technologies: ['Asterisk', 'Issabel', 'SIP', 'IVR', 'Call queues', 'FXO/FXS'],
      },
      {
        title: 'ERP & operations',
        description: 'Turn business rules into maintainable workflows and access controls.',
        technologies: ['Odoo 15/17', 'Odoo Studio', 'CRM', 'Inventory', 'Sales', 'Accounting'],
      },
      {
        title: 'Data & automation',
        description: 'Use scripts, queries, and APIs to remove repetitive operational work.',
        technologies: ['SQL Server', 'SQL', 'Batch', 'Registry', 'REST APIs', 'Git'],
      },
    ],
    projects: [
      {
        title: 'VideoNest',
        type: 'Self-hosted media platform',
        description:
          'A working local video library with a Go API, React interface, SQLite data layer, FFmpeg processing, Docker deployment, and HTTP range streaming.',
        url: 'https://github.com/mahdim43/videonest-go',
        technologies: ['Go', 'React', 'TypeScript', 'Docker', 'SQLite', 'FFmpeg'],
      },
      {
        title: 'Idea Expander',
        type: 'Bilingual AI workflow',
        description:
          'A collaborative, bilingual skill that turns one input into a ranked and red-teamed set of product ideas through a structured exploration process.',
        url: 'https://github.com/mahdim43/idea-expander',
        technologies: ['AI workflows', 'Prompt design', 'English / Persian', 'Collaboration'],
      },
    ],
    credentials: {
      education: {
        label: 'Education',
        title: 'Associate Degree in Software Engineering',
        detail: 'Islamic Azad University, Mashhad',
        period: '2021 — 2023',
      },
      certification: {
        label: 'Certification',
        title: 'MTCNA',
        detail: 'MikroTik Certified Network Associate',
      },
      languages: { label: 'Languages', items: ['Persian · Native', 'English · B2+'] },
    },
    contact: {
      location: 'Mashhad, Iran',
      availability: 'Available for remote systems and infrastructure roles',
      email: shared.email,
      github: shared.github,
      linkedin: shared.linkedin,
    },
    footer: 'Designed around systems, evidence, and clear communication.',
  },
  fa: {
    locale: 'fa',
    direction: 'rtl',
    htmlLocale: 'fa-IR',
    openGraphLocale: 'fa_IR',
    meta: {
      title: 'مهدی هوشمند — متخصص سیستم و زیرساخت',
      description:
        'متخصص سیستم و زیرساخت در مشهد با سابقه فعالیت از سال ۱۳۹۸ در شبکه، مجازی‌سازی، ویپ، اودوو و خودکارسازی عملیات فناوری اطلاعات.',
      image: '/og/portfolio-fa.png',
    },
    navigation: [
      { href: '#case-studies', label: 'مطالعات موردی' },
      { href: '#experience', label: 'سوابق' },
      { href: '#capabilities', label: 'توانمندی‌ها' },
      { href: '#projects', label: 'پروژه‌ها' },
      { href: '#contact', label: 'ارتباط' },
    ],
    ui: {
      skip: 'رفتن به محتوای اصلی',
      menu: 'باز کردن منو',
      closeMenu: 'بستن منو',
      switchLanguage: 'تغییر زبان',
      otherLanguage: 'English',
      viewCaseStudies: 'مشاهده مطالعات موردی',
      downloadCv: 'دریافت رزومه انگلیسی',
      openProject: 'مشاهده در گیت‌هاب',
      currentPage: 'زبان فعلی',
      available: 'آماده همکاری به‌صورت دورکار',
      copied: 'ایمیل کپی شد',
    },
    hero: {
      location: 'مشهد، ایران · دورکاری',
      discipline: 'سیستم · زیرساخت · ERP',
      name: 'مهدی هوشمند',
      title: 'متخصص سیستم و زیرساخت',
      statement: 'سیستم‌های پیچیده را قابل‌اعتماد می‌کنم.',
      introduction:
        'از سال ۱۳۹۸ در نقش‌های زیرساختی فعالیت کرده‌ام؛ از پشتیبانی سرورهای حیاتی و محیط‌های VMware تا سامانه‌های VoIP، فرایندهای Odoo و کاربرانی که هر روز به این سرویس‌ها وابسته‌اند.',
    },
    metrics: [
      { value: '۵۰۰', label: 'کاربر در بزرگ‌ترین محیط ERP تحت پشتیبانی' },
      { value: '+۲۰۰', label: 'محیط مشتری روی پلتفرم مرکز تماس ابری' },
      { value: '+۲۰', label: 'سرور لینوکس و ویندوز تحت نگهداری' },
      { value: '۶–۷', label: 'درخواست پیچیده حل‌شده در یک روز کاری معمول' },
    ],
    sectionCopy: {
      caseStudies: {
        eyebrow: 'عملیات منتخب',
        title: 'بهبود سیستم‌ها در محدودیت‌های واقعی.',
        description:
          'روایت‌های ناشناس از پروژه‌های ERP، ارتباطات و مجازی‌سازی؛ با تمرکز بر تصمیم‌ها، مقیاس و اثر عملیاتی.',
      },
      experience: {
        eyebrow: 'مسیر حرفه‌ای',
        title: 'از پشتیبانی خط مقدم تا سیستم‌های حیاتی کسب‌وکار.',
        description: 'مسیری در پشتیبانی، شبکه، زیرساخت صوت، پایگاه داده و عملیات ERP.',
      },
      capabilities: {
        eyebrow: 'دامنه فنی',
        title: 'تخصص زیرساخت با محوریت عیب‌یابی.',
        description:
          'ابزارها مهم‌اند، اما توانایی اصلی من بررسی رفتار سیستم در لایه‌های مختلف و تحویل محیطی ساده‌تر برای بهره‌برداری است.',
      },
      projects: {
        eyebrow: 'پروژه‌های مستقل',
        title: 'یادگیری با ساخت و تحویل محصول واقعی.',
        description:
          'پروژه‌هایی که تجربه زیرساختی من را به معماری نرم‌افزار، API و خودکارسازی پیوند می‌دهند.',
      },
      credentials: { eyebrow: 'پشتوانه', title: 'تحصیلات، گواهی‌نامه و زبان‌ها.' },
      contact: {
        eyebrow: 'سیستم بعدی',
        title: 'به کسی نیاز دارید که مسئله را از ابتدا تا انتها دنبال کند؟',
        description:
          'برای موقعیت‌های دورکار سیستم و زیرساخت که در آن عیب‌یابی دقیق، عملیات پایدار و ارتباط روشن اهمیت دارد آماده همکاری هستم.',
      },
    },
    caseLabels: { challenge: 'محدودیت', action: 'راهکار', outcome: 'نتیجه' },
    caseStudies: [
      {
        id: 'erp-operations',
        category: 'عملیات ERP',
        title: 'پیاده‌سازی فرایند تأیید پیچیده بدون توسعه ماژول اختصاصی.',
        summary:
          'پشتیبانی و شخصی‌سازی Odoo 15/17 برای محیط‌هایی از تیم‌های کوچک تا استقرار حیاتی با حدود ۵۰۰ کاربر.',
        challenge:
          'انتقال بین انبارها به تأیید جداگانه فرستنده و گیرنده نیاز داشت و جابه‌جایی غیرمجاز باید در هر مرحله کنترل می‌شد.',
        action:
          'فرم‌ها، فیلدها، گزارش‌ها، خودکارسازی، سطح دسترسی و فرایند تأیید دومرحله‌ای را به‌طور کامل با Odoo Studio طراحی کردم.',
        outcome:
          'نیاز عملیاتی بدون ماژول سفارشی مورد انتظار تحویل شد؛ هم‌زمان روزانه ۶ تا ۷ درخواست پشتیبانی پیچیده نیز رسیدگی می‌شد.',
        metric: { value: 'حدود ۵۰۰', label: 'کاربر در بزرگ‌ترین محیط تحت پشتیبانی' },
        technologies: ['Odoo 15/17', 'Odoo Studio', 'SQL', 'CRM', 'Access Control'],
      },
      {
        id: 'call-center-platform',
        category: 'زیرساخت صوت',
        title: 'حفظ آمادگی یک پلتفرم چندمشتری برای رشد مداوم.',
        summary:
          'پشتیبانی از لایه‌های VMware، لینوکس، ویندوز و Asterisk در یک پلتفرم ارتباطی میزبانی‌شده.',
        challenge:
          'بیش از ۲۰۰ محیط مستقل مشتری به پایداری سرویس‌های صوت، شبکه و ماشین‌های مجازی وابسته بودند.',
        action:
          'سرویس‌ها را پایش، ماشین‌های مجازی را آماده و مسیر تماس را نگهداری کردم و خطاها را میان VMware، Asterisk، MikroTik و Cisco ردیابی کردم.',
        outcome:
          'عملیات روزمره و افزایش ظرفیت پلتفرم حفظ شد و استقرارهای هتل، مجتمع مسکونی و مراکز خدماتی پشتیبانی شدند.',
        metric: { value: '+۲۰۰', label: 'محیط مشتری تحت پشتیبانی' },
        technologies: ['VMware', 'Asterisk', 'Issabel', 'SIP', 'MikroTik', 'Cisco'],
      },
      {
        id: 'virtualization',
        category: 'مجازی‌سازی',
        title: 'تجمیع سرورهای فیزیکی در یک محیط مجازی قابل‌مدیریت.',
        summary:
          'انتقال بارهای کاری پراکنده به VMware ESXi برای ساده‌سازی عملیات زیرساخت.',
        challenge:
          'شش سرور فیزیکی هزینه نگهداری را افزایش داده و هماهنگی مدیریت بارهای کاری را دشوار کرده بود.',
        action:
          'مهاجرت فیزیکی به مجازی را برنامه‌ریزی، سرویس‌ها را تجمیع و حدود هشت ماشین مجازی را در ESXi سازمان‌دهی کردم.',
        outcome:
          'پراکندگی سخت‌افزاری کاهش یافت و بستری شفاف‌تر برای نگهداری، پایش و برنامه بازیابی متمرکز ایجاد شد.',
        metric: { value: '۶ ← ۸', label: 'سرور فیزیکی تجمیع‌شده در ماشین مجازی' },
        technologies: ['VMware ESXi', 'P2V', 'Windows Server', 'Linux', 'Backup Planning'],
      },
    ],
    experience: [
      {
        id: 'erp-specialist',
        period: 'آوریل ۲۰۲۴ — اکتبر ۲۰۲۵',
        organization: 'شرکت راهکارهای ERP · نام محفوظ',
        role: 'کارشناس پشتیبانی نرم‌افزار و Odoo',
        summary: 'مسئول پشتیبانی، شخصی‌سازی و راهنمایی کاربران در چندین محیط مشتری Odoo.',
        highlights: [
          'شخصی‌سازی فرایندهای انبار، فروش، خرید، حسابداری و CRM با Odoo Studio.',
          'رسیدگی به مسائل نرم‌افزار، فرایند، دسترسی و پایگاه داده در استقرارهایی تا حدود ۵۰۰ کاربر.',
          'تبدیل نیازهای عملیاتی به فرم، گزارش، خودکارسازی و سطح دسترسی قابل‌نگهداری.',
        ],
        technologies: ['Odoo', 'Odoo Studio', 'SQL', 'ERP Support'],
      },
      {
        id: 'financial-support',
        period: 'ژوئن ۲۰۲۳ — مارس ۲۰۲۴',
        organization: 'شرکت نرم‌افزار مالی · نام محفوظ',
        role: 'کارشناس پشتیبانی فنی',
        summary: 'عیب‌یابی نرم‌افزار مالی، ویندوز و SQL Server در محیط‌های مشتری.',
        highlights: [
          'استفاده از کوئری‌های پایگاه داده و عیب‌یابی چندلایه برای رسیدن به راه‌حل پایدار.',
          'خودکارسازی تنظیمات تکراری ایستگاه‌های کاری با فایل‌های Batch و Registry.',
        ],
        technologies: ['SQL Server', 'Windows', 'Batch', 'Registry'],
      },
      {
        id: 'voip-network',
        period: 'ژانویه ۲۰۲۰ — ژوئیه ۲۰۲۱',
        organization: 'ارائه‌دهنده ارتباطات ابری · نام محفوظ',
        role: 'کارشناس پشتیبانی VoIP و شبکه',
        summary: 'نگهداری سرورها، ماشین‌های مجازی، شبکه و سرویس صوت برای یک پلتفرم مرکز تماس ابری.',
        highlights: [
          'پشتیبانی از بیش از ۲۰ سرور لینوکس و ویندوز و بیش از ۲۰۰ محیط مشتری.',
          'پیکربندی Asterisk، Issabel، ترانک SIP، IVR، صف تماس و تجهیزات Grandstream.',
          'عیب‌یابی مسیریابی، اتصال و کیفیت صوت روی تجهیزات MikroTik و Cisco.',
        ],
        technologies: ['Asterisk', 'VMware', 'Linux', 'MikroTik', 'Cisco'],
      },
      {
        id: 'helpdesk',
        period: 'نوامبر ۲۰۱۹ — ژوئیه ۲۰۲۰',
        organization: 'شرکت خدمات فناوری اطلاعات · نام محفوظ',
        role: 'کارشناس Helpdesk',
        summary: 'پشتیبانی کاربران در سیستم‌های ویندوز، سخت‌افزار، نرم‌افزار و اتصال شبکه.',
        highlights: [
          'عیب‌یابی از سطح ایستگاه کاری تا سرویس‌های مشترک زیرساخت.',
          'همکاری در نصب، پیکربندی و نگهداری سیستم‌ها.',
        ],
        technologies: ['Windows', 'Networking', 'IT Support'],
      },
    ],
    capabilities: [
      {
        title: 'سیستم و مجازی‌سازی',
        description: 'بهره‌برداری از محیط‌های ترکیبی سرور و کاهش پیچیدگی زیرساخت.',
        technologies: ['Linux', 'Windows Server', 'VMware ESXi', 'Docker', 'Virtual Machines'],
      },
      {
        title: 'شبکه',
        description: 'ردیابی مسائل اتصال و تفکیک شبکه از کاربر نهایی تا لبه شبکه.',
        technologies: ['MikroTik', 'Cisco', 'VLAN', 'NAT', 'Firewall', 'VPN', 'LAN/WAN'],
      },
      {
        title: 'VoIP',
        description: 'پیکربندی و پشتیبانی مسیر کامل صوت و سناریوهای تماس سازمانی.',
        technologies: ['Asterisk', 'Issabel', 'SIP', 'IVR', 'Call Queues', 'FXO/FXS'],
      },
      {
        title: 'ERP و عملیات',
        description: 'تبدیل قواعد کسب‌وکار به فرایند و سطح دسترسی قابل‌نگهداری.',
        technologies: ['Odoo 15/17', 'Odoo Studio', 'CRM', 'Inventory', 'Sales', 'Accounting'],
      },
      {
        title: 'داده و خودکارسازی',
        description: 'حذف کارهای تکراری عملیاتی با اسکریپت، کوئری و API.',
        technologies: ['SQL Server', 'SQL', 'Batch', 'Registry', 'REST APIs', 'Git'],
      },
    ],
    projects: [
      {
        title: 'VideoNest',
        type: 'پلتفرم رسانه‌ای Self-hosted',
        description:
          'کتابخانه ویدیویی محلی با API نوشته‌شده با Go، رابط React، پایگاه داده SQLite، پردازش FFmpeg، استقرار Docker و پخش مبتنی بر HTTP Range.',
        url: 'https://github.com/mahdim43/videonest-go',
        technologies: ['Go', 'React', 'TypeScript', 'Docker', 'SQLite', 'FFmpeg'],
      },
      {
        title: 'Idea Expander',
        type: 'گردش کار هوش مصنوعی دوزبانه',
        description:
          'ابزاری دوزبانه و مشارکتی که یک ورودی اولیه را طی فرایندی ساختاریافته به مجموعه‌ای رتبه‌بندی‌شده و نقدشده از ایده‌های محصول تبدیل می‌کند.',
        url: 'https://github.com/mahdim43/idea-expander',
        technologies: ['AI Workflows', 'Prompt Design', 'English / Persian', 'Collaboration'],
      },
    ],
    credentials: {
      education: {
        label: 'تحصیلات',
        title: 'کاردانی مهندسی نرم‌افزار',
        detail: 'دانشگاه آزاد اسلامی، مشهد',
        period: '۱۴۰۰ — ۱۴۰۲',
      },
      certification: {
        label: 'گواهی‌نامه',
        title: 'MTCNA',
        detail: 'MikroTik Certified Network Associate',
      },
      languages: { label: 'زبان‌ها', items: ['فارسی · زبان مادری', 'انگلیسی · B2+'] },
    },
    contact: {
      location: 'مشهد، ایران',
      availability: 'آماده همکاری دورکار در حوزه سیستم و زیرساخت',
      email: shared.email,
      github: shared.github,
      linkedin: shared.linkedin,
    },
    footer: 'طراحی‌شده بر پایه سیستم، شواهد و ارتباط روشن.',
  },
};

export function getPortfolio(locale: Locale): PortfolioContent {
  return portfolio[locale];
}
