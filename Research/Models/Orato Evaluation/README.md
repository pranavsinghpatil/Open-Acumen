# Orato Evaluation

This folder is the evidence trail for the Orato Hindi model evaluation work.
It contains the Hugging Face Space demos, generated outputs, prompts, and notes
used to assess ASR and TTS behavior in a structured way.

## What is included

- `ASR/` - Hindi speech-to-text evaluation Space and observations
- `TTS/` - Hindi text-to-speech evaluation Space, outputs, and observations
- `test-cases.csv` - Shared test set used across the evaluation

## How to read this folder

- The `ASR/` and `TTS/` folders are intended to show what was tested and how.
- The `observations.csv` files capture concise feedback from the runs.
- The `outputs/` folders contain generated artifacts that support the written observations.

## Evaluation approach

The goal was to capture credible observations from actual model runs rather than
generic comments. The test cases focused on:

- Conversational Hindi
- Long-form utterances
- Numerals and date-like strings
- Code-mixed Hindi and English
- Technical or product-related vocabulary
- Speaker-specific delivery for TTS

## Notes

- The Space demos were used as the test harness for the evaluation.
- The generated files in `outputs/` are part of the evidence for the feedback.
- The notes are written to be useful for engineering review and iteration.
