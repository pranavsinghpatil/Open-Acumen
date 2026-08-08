import os
import tempfile

import gradio as gr
import numpy as np
import soundfile as sf
import torch
from transformers import AutoProcessor, VitsModel

try:
    import spaces
except ImportError:
    spaces = None


MODEL_ID = "facebook/mms-tts-hin"


def _load_tts():
    processor = AutoProcessor.from_pretrained(MODEL_ID)
    model = VitsModel.from_pretrained(MODEL_ID)
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = model.to(device)
    return processor, model, device


processor, model, device = _load_tts()


def _gpu_decorator(fn):
    if spaces is not None and hasattr(spaces, "GPU"):
        return spaces.GPU(fn)
    return fn


def _ensure_text(text: str) -> str:
    return (text or "").strip()


@_gpu_decorator
def synthesize(text):
    text = _ensure_text(text)
    if not text:
        return None

    inputs = processor(text=text, return_tensors="pt")
    inputs = {k: v.to(device) for k, v in inputs.items()}

    with torch.no_grad():
        output = model(**inputs)

    audio = output.waveform.squeeze().detach().cpu().numpy()
    if audio.ndim == 0:
        audio = np.array([float(audio)], dtype=np.float32)

    sample_rate = model.config.sampling_rate
    fd, path = tempfile.mkstemp(suffix=".wav")
    os.close(fd)
    sf.write(path, audio, sample_rate)
    return path


with gr.Blocks(theme=gr.themes.Soft(), title="Orato TTS Hindi Demo") as demo:
    gr.Markdown(
        """
        # Orato TTS Hindi Demo

        Type Hindi text and generate speech with `facebook/mms-tts-hin`.
        """
    )
    with gr.Row():
        text = gr.Textbox(
            label="Text",
            placeholder="नमस्ते, यह Orato TTS का परीक्षण है",
            lines=5,
        )
    btn = gr.Button("Generate Speech")
    output = gr.Audio(label="Generated Audio", type="filepath")
    btn.click(fn=synthesize, inputs=text, outputs=output)


if __name__ == "__main__":
    demo.launch()
