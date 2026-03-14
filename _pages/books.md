---
layout: page
title: Books
permalink: /books/
nav: true
nav_order: 4
collection: books
---

> What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.
>
> -- Carl Sagan, Cosmos, Part 11: The Persistence of Memory (1980)

{% assign currently_reading = site.books | where: "status", "Reading" | sort: "started" | reverse %}
{% assign completed_books = site.books | where: "status", "Finished" | sort: "finished" | reverse %}

## Currently Reading

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  {% for item in currently_reading %}
    <div class="col mb-4">
      <a href="{{ item.url | relative_url }}" class="text-decoration-none">
        <div class="card h-100 hoverable">
          {% if item.cover %}
            <img src="{{ item.cover | relative_url }}" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% elsif item.olid %}
            <img src="https://covers.openlibrary.org/b/olid/{{ item.olid }}-L.jpg?default=false" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% elsif item.isbn %}
            <img src="https://covers.openlibrary.org/b/isbn/{{ item.isbn }}-L.jpg?default=false" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% endif %}
          <div class="card-body">
            <h3 class="card-title h5">{{ item.title }}</h3>
            <p class="card-text mb-1">{{ item.author }}</p>
            <p class="card-text"><small>{{ item.note }}</small></p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

## Completed

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  {% for item in completed_books %}
    <div class="col mb-4">
      <a href="{{ item.url | relative_url }}" class="text-decoration-none">
        <div class="card h-100 hoverable">
          {% if item.cover %}
            <img src="{{ item.cover | relative_url }}" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% elsif item.olid %}
            <img src="https://covers.openlibrary.org/b/olid/{{ item.olid }}-L.jpg?default=false" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% elsif item.isbn %}
            <img src="https://covers.openlibrary.org/b/isbn/{{ item.isbn }}-L.jpg?default=false" alt="{{ item.title }} cover" class="card-img-top" style="height: 320px; object-fit: cover;">
          {% endif %}
          <div class="card-body">
            <h3 class="card-title h5">{{ item.title }}</h3>
            <p class="card-text mb-1">{{ item.author }}</p>
            <p class="card-text"><small>{{ item.note }}</small></p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
