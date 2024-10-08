---
title: Renfrewshire Chamber of Commerce
slug: renfrewshire-chamber-of-commerce
excerpt: Custom built WordPress theme for Renfrewshire Chamber of Commerce to reflect their new brand identiy, with integration with Rubi CRM.
featuredImg: renfrewMain.webp
tags: ['wordpress', 'laravel blade', 'php', 'js', 'scss']
tech: WordPress, PHP, Laravel Blade, JavaScript, SCSS, HTML
priority: 1
featured: true
yearBuilt: 2022
designedBy: Emma Cathie
designedByURL: https://www.emmacathiedesign.co.uk/
developer1: Drew Reilly
siteURL: https://www.renfrewshirechamber.com/
---

This was the first big project I worked on solo for a WordPress build during my time at Cole AD. I had been with the company in my first junior role for around 8 months when I was tasked with building out the main WordPress theme for this new build for Renfrewshire Chamber of Commerce.

The site was designed by one of the designers at Cole AD, Emma Cathie. Initially, a rebranding design was done and then the design of the new website followed suit. If you are interested in seeing more about her design process for this site, you can <a href='https://www.emmacathiedesign.co.uk/work/renfrewshire-chamber-of-commerce' target='_blank'>read more about it here</a>.

<div class='project-image'>
    <img src='/projectImages/renfrew/renfrewMobile.webp' alt='Picture showing different examples of responsive mobile design on the Renfrewshire Chamber of Commerce site' loading='lazy'>
</div>

Once we had the site design, I began work on a new custom WordPress theme using the blank template Sage by Roots.io. Working with Sage gave me an already structured theme which is easy to follow, as well as the already configured setup of Laravel Blade which makes templating much easier.

The process we used at Cole AD to make sites as customisable as possible for users was to build out the new theme with custom Gutenberg blocks using ACF. This allowed us to give as much freedom to the client as possible to make changes in the future themselves without the need to come back to us and wait for the changes to be made. This approach meant the client was able to add new blocks, re-order blocks and update the content within the blocks themselves. Some key elements, like the header and hero sections were always stuck to the top and the footer always stuck to the bottom, but between those elements the client had complete freedom.

<div class='project-image'>
    <img src='/projectImages/renfrew/renfrewMenu.gif' alt='GIF showing the different menu sub-section styles on the Renfrewshire Chamber of Commerce site' loading='lazy'>
</div>

My senior developer, Drew Reilly, worked on the Rubi CRM portion of the website and directing the API to the WordPress site where I then handled the calls to display member events posted on the Rubi CRM site and listed them on the WordPress site where users are able to see a list or a detail-specific page.

Multiple custom post types were integrated into the site, for things like events, members and staff. Each of these custom post types have their own custom archive page as well as individual layout. Also added into the site was <a href='https://kenwheeler.github.io/slick/' target='_blank'>slick</a> for use of custom carousels, <a href='https://leafletjs.com/' target='_blank'>Leaflet</a> for adding a custom map with pin to the contact page, and <a href='https://www.gravityforms.com/' target='_blank'>Gravity Forms</a> for creating custom forms for contact us, event enquiries and membership enquiries.
