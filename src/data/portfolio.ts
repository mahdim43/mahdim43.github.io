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
      statement: 'I find the problem and get systems working.',
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
        'متخصص سیستم و زیرساخت در مشهد. از ۱۳۹۸ در شبکه، مجازی‌سازی، VoIP و Odoo فعالم. عیب‌یابی، پایداری سرویس و خودکارسازی.',
      image: '/og/portfolio-fa.png',
    },
    navigation: [
      { href: '#case-studies', label: 'نمونه‌کار' },
      { href: '#experience', label: 'سوابق' },
      { href: '#capabilities', label: 'تخصص‌ها' },
      { href: '#projects', label: 'پروژه‌ها' },
      { href: '#contact', label: 'ارتباط' },
    ],
    ui: {
      skip: 'رفتن به محتوای اصلی',
      menu: 'باز کردن منو',
      closeMenu: 'بستن منو',
      switchLanguage: 'تغییر زبان',
      otherLanguage: 'English',
      viewCaseStudies: 'مشاهده نمونه‌کار',
      downloadCv: 'دریافت رزومه انگلیسی',
      openProject: 'مشاهده در گیت‌هاب',
      currentPage: 'زبان فعلی',
      available: 'آماده همکاری دورکار',
      copied: 'ایمیل کپی شد',
    },
    hero: {
      location: 'مشهد، ایران · دورکاری',
      discipline: 'سیستم · زیرساخت · ERP',
      name: 'مهدی هوشمند',
      title: 'متخصص سیستم و زیرساخت',
      statement: 'عیب‌یابی زیرساخت، پایداری سرویس، حل مشکل.',
      introduction:
        'از ۱۳۹۸ در شبکه، مجازی‌سازی، VoIP و Odoo کار کرده‌ام. تمرکزم عیب‌یابی دقیق و نگه‌داشتن سرویس در دسترسه.',
    },
    metrics: [
      { value: '۵۰۰', label: 'کاربر، بزرگ‌ترین محیط ERP' },
      { value: 'بیش از ۲۰۰', label: 'محیط مشتری، مرکز تماس ابری' },
      { value: 'بیش از ۲۰', label: 'سرور تحت پشتیبانی' },
      { value: '۶–۷', label: 'درخواست پیچیده در روز کاری عادی' },
    ],
    sectionCopy: {
      caseStudies: {
        eyebrow: 'نمونه‌کار',
        title: 'نمونه‌کارهای واقعی',
        description:
          'نام شرکت‌ها محرمانه است؛ مقیاس، ابزار و نتیجه واقعی.',
      },
      experience: {
        eyebrow: 'مسیر حرفه‌ای',
        title: 'از Helpdesk تا زیرساخت و ERP',
        description: 'از پشتیبانی کاربر شروع کردم، به شبکه، VoIP، پایگاه داده و Odoo رسیدم.',
      },
      capabilities: {
        eyebrow: 'تخصص‌ها',
        title: 'حوزه‌های تخصصی',
        description:
          'ابزار بخشی از کاره؛ مهارت اصلی عیب‌یابی بین لایه‌های مختلف و ساده‌تر کردن نگهداریه.',
      },
      projects: {
        eyebrow: 'پروژه‌های شخصی',
        title: 'پروژه‌هایی که ساختم',
        description:
          'تمرین معماری، API و خودکارسازی در کنار تجربه زیرساختی.',
      },
      credentials: { eyebrow: 'سوابق تکمیلی', title: 'تحصیلات، مدرک فنی و زبان‌ها' },
      contact: {
        eyebrow: 'همکاری',
        title: 'بیا صحبت کنیم',
        description:
          'برای موقعیت‌های دورکار سیستم و زیرساخت در دسترس هستم.',
      },
    },
    caseLabels: { challenge: 'مسئله', action: 'اقدام', outcome: 'نتیجه' },
    caseStudies: [
      {
        id: 'erp-operations',
        category: 'Odoo و ERP',
        title: 'تایید انتقال انبار بدون ماژول اختصاصی',
        summary:
          'پشتیبانی و شخصی‌سازی چند محیط Odoo ۱۵ و ۱۷، از تیم کوچک تا مجموعه‌ای با حدود ۵۰۰ کاربر.',
        challenge:
          'جابه‌جایی بین انبارها باید تایید دومرحله‌ای فرستنده و گیرنده داشته باشه تا بدون مجوز متوقف بشه.',
        action:
          'فرم، فیلد، گزارش، خودکارسازی، سطح دسترسی و تایید دومرحله‌ای — همه فقط با Odoo Studio.',
        outcome:
          'فرایند بدون ماژول اختصاصی اجرا شد. هم‌زمان روزانه ۶ تا ۷ درخواست پیچیده پشتیبانی حل می‌شد.',
        metric: { value: 'حدود ۵۰۰', label: 'کاربر در بزرگ‌ترین محیط' },
        technologies: ['Odoo 15/17', 'Odoo Studio', 'SQL', 'CRM', 'Access Control'],
      },
      {
        id: 'call-center-platform',
        category: 'زیرساخت مرکز تماس',
        title: 'پشتیبانی زیرساخت مرکز تماس ابری',
        summary:
          'سرویس ابری روی VMware، Linux، Windows و Asterisk با بیش از ۲۰۰ محیط مشتری.',
        challenge:
          'بیش از ۲۰۰ محیط جداگانه مشتری به صوت، شبکه و ماشین مجازی وابسته بود.',
        action:
          'پایش سرویس، ساخت ماشین مجازی، نگهداری مسیرهای تماس، عیب‌یابی بین VMware، Asterisk، MikroTik و Cisco.',
        outcome:
          'سرویس روزانه پایدار ماند و ظرفیت مشتری جدید فراهم شد — از هتل تا مجتمع مسکونی.',
        metric: { value: 'بیش از ۲۰۰', label: 'محیط مشتری' },
        technologies: ['VMware', 'Asterisk', 'Issabel', 'SIP', 'MikroTik', 'Cisco'],
      },
      {
        id: 'virtualization',
        category: 'مجازی‌سازی',
        title: 'مهاجرت ۶ سرور فیزیکی به ۸ ماشین مجازی',
        summary:
          'سرویس‌های پراکنده به VMware ESXi منتقل شد تا نگهداری متمرکز بشه.',
        challenge:
          '۶ سرور فیزیکی مدیریت سرویس‌ها رو سخت کرده بود.',
        action:
          'مهاجرت P2V، جابه‌جایی سرویس‌ها و سامان‌دهی حدود ۸ ماشین مجازی در ESXi.',
        outcome:
          'سرور فیزیکی کمتر شد، نگهداری و بازیابی متمرکزتر.',
        metric: { value: '۶ سرور', label: 'تبدیل‌شده به ۸ ماشین مجازی' },
        technologies: ['VMware ESXi', 'P2V', 'Windows Server', 'Linux', 'Backup Planning'],
      },
    ],
    experience: [
      {
        id: 'erp-specialist',
        period: '2024/04 — 2025/10',
        organization: 'نام شرکت محرمانه — راهکارهای ERP',
        role: 'کارشناس پشتیبانی نرم‌افزار و Odoo',
        summary: 'پشتیبانی و شخصی‌سازی محیط‌های Odoo و راهنمایی کاربران.',
        highlights: [
          'شخصی‌سازی فرایندهای انبار، فروش، خرید، حسابداری و CRM با Odoo Studio.',
          'عیب‌یابی نرم‌افزار، فرایند و پایگاه داده در محیط ۵۰۰ کاربره.',
          'تبدیل نیازهای کاری به فرم، گزارش، خودکارسازی و سطح دسترسی.',
        ],
        technologies: ['Odoo', 'Odoo Studio', 'SQL', 'ERP Support'],
      },
      {
        id: 'financial-support',
        period: '2023/06 — 2024/03',
        organization: 'نام شرکت محرمانه — نرم‌افزار مالی',
        role: 'کارشناس پشتیبانی فنی',
        summary: 'عیب‌یابی نرم‌افزار مالی، ویندوز و SQL Server در محیط مشتری.',
        highlights: [
          'کوئری پایگاه داده و عیب‌یابی چندلایه برای راه‌حل پایدار.',
          'خودکارسازی تنظیمات تکراری ایستگاه کاری با Batch و Registry.',
        ],
        technologies: ['SQL Server', 'Windows', 'Batch', 'Registry'],
      },
      {
        id: 'voip-network',
        period: '2020/01 — 2021/07',
        organization: 'نام شرکت محرمانه — ارتباطات ابری',
        role: 'کارشناس پشتیبانی VoIP و شبکه',
        summary: 'نگهداری سرور، ماشین مجازی، شبکه و صوت مرکز تماس ابری.',
        highlights: [
          'پشتیبانی بیش از ۲۰ سرور و ۲۰۰ محیط مشتری.',
          'پیکربندی Asterisk، ترانک SIP، IVR، صف تماس و تجهیزات Grandstream.',
          'عیب‌یابی مسیریابی و کیفیت صوت روی MikroTik و Cisco.',
        ],
        technologies: ['Asterisk', 'VMware', 'Linux', 'MikroTik', 'Cisco'],
      },
      {
        id: 'helpdesk',
        period: '2019/11 — 2020/07',
        organization: 'نام شرکت محرمانه — خدمات فناوری اطلاعات',
        role: 'کارشناس Helpdesk',
        summary: 'پشتیبانی کاربران در ویندوز، سخت‌افزار، نرم‌افزار و شبکه.',
        highlights: [
          'عیب‌یابی از ایستگاه کاری تا سرویس‌های زیرساختی.',
          'نصب، پیکربندی و نگهداری سیستم‌ها.',
        ],
        technologies: ['Windows', 'Networking', 'IT Support'],
      },
    ],
    capabilities: [
      {
        title: 'سیستم و مجازی‌سازی',
        description: 'نگهداری محیط‌های سرور ترکیبی و ساده‌سازی زیرساخت.',
        technologies: ['Linux', 'Windows Server', 'VMware ESXi', 'Docker', 'Virtual Machines'],
      },
      {
        title: 'شبکه',
        description: 'عیب‌یابی اتصال از ایستگاه کاری تا تجهیزات لبه.',
        technologies: ['MikroTik', 'Cisco', 'VLAN', 'NAT', 'Firewall', 'VPN', 'LAN/WAN'],
      },
      {
        title: 'VoIP',
        description: 'پیکربندی و پشتیبانی مسیر صوت و سناریوهای تماس سازمانی.',
        technologies: ['Asterisk', 'Issabel', 'SIP', 'IVR', 'Call Queues', 'FXO/FXS'],
      },
      {
        title: 'ERP و عملیات',
        description: 'تبدیل قواعد کسب‌وکار به فرایند و دسترسی قابل نگهداری.',
        technologies: ['Odoo 15/17', 'Odoo Studio', 'CRM', 'Inventory', 'Sales', 'Accounting'],
      },
      {
        title: 'داده و خودکارسازی',
        description: 'حذف کار تکراری با اسکریپت، کوئری و API.',
        technologies: ['SQL Server', 'SQL', 'Batch', 'Registry', 'REST APIs', 'Git'],
      },
    ],
    projects: [
      {
        title: 'VideoNest',
        type: 'کتابخانه ویدیویی روی سرور شخصی',
        description:
          'کتابخانه ویدیویی محلی با API در Go، رابط React، SQLite، FFmpeg و Docker.',
        url: 'https://github.com/mahdim43/videonest-go',
        technologies: ['Go', 'React', 'TypeScript', 'Docker', 'SQLite', 'FFmpeg'],
      },
      {
        title: 'Idea Expander',
        type: 'گردش کار دوزبانه با هوش مصنوعی',
        description:
          'ابزار دوزبانه گسترش ایده با خروجی دسته‌بندی‌شده، رتبه‌بندی‌شده و نقدشده.',
        url: 'https://github.com/mahdim43/idea-expander',
        technologies: ['AI Workflows', 'Prompt Design', 'English / Persian', 'Collaboration'],
      },
    ],
    credentials: {
      education: {
        label: 'تحصیلات',
        title: 'کاردانی مهندسی نرم‌افزار',
        detail: 'دانشگاه آزاد اسلامی، مشهد',
        period: '2021 — 2023',
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
    footer: 'مهدی هوشمند · سیستم و زیرساخت',
  },
};

export function getPortfolio(locale: Locale): PortfolioContent {
  return portfolio[locale];
}
