---
title: Orato TTS Hindi Evaluation
emoji: 🎙️
colorFrom: indigo
colorTo: blue
sdk: gradio
sdk_version: 5.38.0
app_file: app.py
pinned: false
license: apache-2.0
---

# Orato TTS Hindi Evaluation

This folder documents the Hindi text-to-speech evaluation for
`tryorato/orato-tts-hindi-v1`.

It is intended to serve as evidence of the test setup, the generated audio,
and the written observations from the evaluation.

## What this folder contains

- `app.py` - Hugging Face Space app used to run the TTS tests
- `requirements.txt` - Runtime dependencies for the Space
- `prompts/` - Prompt material used during evaluation
- `outputs/` - Generated audio evidence from the runs
- `observations.csv` - Compact notes captured from the evaluation

## Model under test

- `tryorato/orato-tts-hindi-v1`

This model is a Hindi/Hinglish TTS checkpoint with reference-audio based
speaker switching. The evaluation used the model card's `male` and `female`
reference packs rather than separate models.

## Output evidence

The `outputs/` folder currently includes generated audio files such as:

- `female_...wav` - female voice output for a longer Hindi prompt
- `male.wav` - male voice output sample

These files are included so someone reviewing the folder can inspect the actual
generated artifacts alongside the written observations.

## Evaluation focus

The feedback from the test runs focuses on concrete model behavior:

- Intelligibility of conversational Hindi
- Prosody and pacing in longer sentences
- Pause placement and flow between clauses
- Handling of numerals and code-mixed terms
- Consistency of male and female voice rendering

## Summary of observed quality

The generated speech was understandable and generally intelligible.
The main opportunities for improvement were:

- More natural prosody in longer utterances
- Smoother conversational flow
- Better handling of code-mixed or technical words
- Less synthesized delivery in some passages

## Notes for reviewers

- The Space is designed to make testing repeatable.
- The output files in `outputs/` are the most direct evidence of the model run.
- This folder is meant to be read as a testing record, not just as a demo.
