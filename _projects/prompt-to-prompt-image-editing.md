---
layout: page
title: Prompt-to-Prompt Image Editing with Latent Diffusion Models
description: Fine-grained text-driven image editing using cross-attention in latent diffusion models.
img: assets/img/12.jpg
importance: 1
category: work
---

Course project for Carnegie Mellon's Generative AI course (10-623), completed in March and April 2025.

### What I built

I implemented prompt-to-prompt image editing inside a latent diffusion pipeline so that specific words in a prompt could drive controlled edits without destroying the rest of the image.

### Core ideas

- Leveraged cross-attention between the BERT-based text encoder and the U-Net in the latent diffusion model.
- Used a VQ-VAE to encode images into discrete latent codes and reconstruct them after editing.
- Integrated word-swapping from the Prompt-to-Prompt method to selectively update image regions tied to modified tokens.

### Why it mattered

The project was about control rather than just generation. The main goal was to preserve structure and fine detail while making targeted semantic changes from one prompt to another.
