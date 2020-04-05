---
title: "Markup: Another Post with Images"
sidebar_option: sidebar
tags:
  - sample post
  - images
  - test
---

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Figures (for images or video)

#### One Up

<figure>
  <a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
  <figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `row` class to the figure element and the `one-half` class to the image elements to display two images side by side that share the same caption.

```html
<figure class="row">
  <a class="one-half" href="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"><img src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"></a>
  <a class="one-half" href="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"><img src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"></a>
  <figcaption>Caption describing these two images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="row">
  <a class="one-half" href="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"><img src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"></a>
  <a class="one-half" href="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"><img src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}"></a>
  <figcaption>Caption describing these two images.</figcaption>
</figure>

#### Three Up

Apply the `row` class to the figure element and the `one-third` class to the image elements to display three images side by side that share the same caption.

```html
<figure class="row">
  <img class="one-third" src="{{ '/images/image-filename-1.jpg' | absolute_url }}">
  <img class="one-third" src="{{ '/images/image-filename-2.jpg' | absolute_url }}">
  <img class="one-third" src="{{ '/images/image-filename-3.jpg' | absolute_url }}">
  <figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="row">
  <img class="one-third" src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}">
  <img class="one-third" src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}">
  <img class="one-third" src="{{ '/images/image-alignment-580x300.jpg' | absolute_url }}">
  <figcaption>Three images.</figcaption>
</figure>
