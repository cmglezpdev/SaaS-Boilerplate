import { Faq } from '../interface/faq'

export const faqs: Faq[] = [
  {
    title: 'What do I get exactly?',
    content: '1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.'
  },
  {
    title: 'Javascript or Typescript?',
    content: 'Both! You can choose once you get access'
  },
  {
    title: '/app router or /pages router?',
    content: 'Both! You can choose once you get access'
  },
  {
    title: 'My tech stack is different, can I still use it?',
    content: `
    Yes, as long as you're comfortable with React & NextJS.

Libraries are independent. You can use SendGrid instead of Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.
    `
  },
  {
    title: 'Is it a website template?',
    content: `
    It's more than just a template. You can copy/paste sections to build your site quickly, like a pricing section, an FAQ, and even an entire blog. You also get a bunch of UI components like buttons, modals, popovers, etc.

The NextJS starter also comes with handy tools you need to run an online business—payment processing, emails, SEO, etc.
    `
  },
  {
    title: 'How do I get support?',
    content: `
    Join our Discord and ask in the #support channel. We're happy to help!
    `
  },
  {
    title: 'Are there any other costs associated?',
    content: `
    Many hosting platforms, like Vercel, let you host a project for free (front-end + back-end) and MongoDB/Supabase have free tiers — so you can launch for first app for $0/month.

If you use Magic Link sign-ups, you'll spend $1 per 1,000 users.
    `
  }
]
