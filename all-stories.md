---
layout: story
title: All Voting Wars stories
permalink: /all-voting-wars-stories/
titlebelowhero: yes
image: /img/social/votingwars.jpg
description: "Index of all stories from the 2016 News21 Voting Wars project"
---

<div class="index-stories" style="padding-top: 20px;">

{% for story in site.stories %}

<div class="media">
  <div class="media-left">
    <a href="#">
           <img class="media-object" src="{{ story.image }}" width="300" />
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading"><a class="post-link" href="{{ story.permalink }}">{{ story.title }}</a></h4>
    <p>{{ story.description }}</p>
  </div>
</div>

{% endfor %}

</div>

