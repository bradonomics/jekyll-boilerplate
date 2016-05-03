---
layout: default
title: Blog
headline:
description:
permalink: /blog/
---

<article class="page entry" itemscope itemtype="http://schema.org/CreativeWork">

<!-- TODO: Fix this to be a more normal blog layout -->

<header class="entry-header">
  <h1 class="entry-title" itemprop="headline">{{ page.title }}</h1>
</header>

<div class="entry-content" itemprop="articleBody">
  <div class="wrap">
    <div class="group-year">
    {% for post in site.posts reverse %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% unless year == this_year %}
      {% assign year = this_year %}
      <p>{{ year }}</p>
    {% endunless %}
    <article>
      <h3><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h3>
      <time>
        <span class="month">{{ post.date | date: "%b" }}</span>
        <span class="day">{{ post.date | date: "%d" }}</span>
        <span class="year">{{ post.date | date: "%Y" }}</span>
      </time>
    </article>
    {% endfor %}
    </div>
  </div>
</div>

</article>