---
title: Anthropic's AI-native SDLC playbook and what it leaves out
description: A constructive read of Anthropic's playbook, from someone who writes the requirements rather than the code.
date: 2026-10-18
tags: [AI, business analysis, product]
draft: false
---

Anthropic recently published [The AI-native SDLC playbook](https://claude.com/resources/articles/the-ai-native-sdlc-playbook), a guide to rebuilding the software lifecycle around AI, specifically Claude if you can believe it. I read it with a business analyst's hat on, and my reaction is mostly positive with some reservations.

A disclosure first. It's a vendor's playbook, and I use these tools myself, so I'm not a neutral reader. I'll try to be fair anyway.

## What it does well

- **The diagnosis is credible.** Code is no longer the slow part. The slow parts are now the planning, reviewing and releasing around it, which still run at human speed.
- **It's concrete.** Most content like this stops at "embed AI everywhere". This one gives example files, example prompts and a way to measure each step.
- **It's honest about controls.** It says outright that a skill is only an advisory control, and that anything that must always hold needs something enforceable behind it.
- **Humans keep the decisions.** The agent can do a lot, but it can't pass the production gate.

## What it leaves out

### 1. Requirements aren't a brainstorm

In the Plan stage, the person with the idea brainstorms with the model, which asks the questions "an analyst would ask". Asking the questions is the easy part. The skill is knowing which answer is wrong.

The playbook's own example is a claims-status feature, written up by one person from claims operations. Fair enough. But who speaks for the people whose job changes when the phone stops ringing? Who notices that the idea conflicts with something another team is already building?

The old way is described as requirements "gathered by committee". Committees are annoying. They're also where disagreements come out cheaply, before anything is built.

### 2. Where did the analysts go?

Analysts appear in the playbook mostly in the "traditional" column - a spec written by analysts, parsed by designers. In the new column, the product owner reviews the agent's work.

The judgement the analyst provided hasn't gone anywhere, though. Someone still has to decide what's worth building, resolve conflicts between stakeholders and notice what nobody said. My guess is that the work moves towards facilitating those conversations and owning the policies that get written into skills for agents. The playbook doesn't say, and I'd have liked it to.

### 3. It measures speed, not whether it was the right thing

The measures are things like time from first conversation to a committed spec, which it expects to fall "from weeks to hours", and how much rework happens afterwards. These are useful. They're also all about speed.

A wrong idea built faster is still a wrong idea. I'd want at least one measure per stage that asks whether the result was used, and whether it solved the problem it was meant to.

### 4. People stop thinking

This is the one I care about most, and it's from watching it happen. When AI is part of the delivery process, people stop thinking about things.

When a draft arrives in seconds and reads well, reviewing it feels like finishing it. The playbook puts human attention "at the gates", which is right. But a gate only works if someone is actually thinking about how things need to work and whether there is enough evidence that the original problem is addressed.

I'd like to see approvals designed to prevent this. Ask the reviewer to record what they'd change, or what they checked, instead of just ticking a box.

## Should you read it?

Yes, for the plumbing. It's a good picture of how the mechanics could work. Bring your own judgement for the rest, because the conversations it skips are the ones that take the longest.
