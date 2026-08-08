---
title: Orato ASR Hindi Demo
emoji: 🎙️
colorFrom: indigo
colorTo: blue
sdk: gradio
sdk_version: 5.38.0
app_file: app.py
pinned: false
license: apache-2.0
---

# Orato ASR Hindi Demo

This folder contains a Hugging Face Space demo for `tryorato/orato-asr-hindi-v1`.

## What it does

- Accepts Hindi audio from upload or microphone
- Runs ASR inference
- Returns the transcript in the browser

## Files

- `app.py` - Gradio Space entrypoint
- `requirements.txt` - Python dependencies

## Notes

- The app targets Hindi transcription with `task="transcribe"` and `language="hi"`
- The model is loaded from Hugging Face at runtime
