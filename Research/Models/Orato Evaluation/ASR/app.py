import gradio as gr
import spaces
import torch
import qwen_asr


MODEL_ID = "tryorato/orato-asr-hindi-v1"


def _load_asr():
    dtype = torch.bfloat16 if torch.cuda.is_available() else torch.float32
    wrapper = qwen_asr.Qwen3ASRModel.from_pretrained(
        MODEL_ID,
        dtype=dtype,
        device_map=None,
        attn_implementation="sdpa",
    )

    if torch.cuda.is_available():
        wrapper.model = wrapper.model.to("cuda")

    return wrapper


wrapper = _load_asr()


@spaces.GPU
def transcribe(audio_path):
    if audio_path is None:
        return ""

    result = wrapper.transcribe(audio=audio_path, language="Hindi")
    return result if isinstance(result, str) else str(result)


with gr.Blocks(theme=gr.themes.Soft(), title="Orato ASR Hindi Demo") as demo:
    gr.Markdown(
        """
        # Orato ASR Hindi Demo

        Upload or record Hindi speech to test `tryorato/orato-asr-hindi-v1`.
        """
    )
    with gr.Row():
        audio = gr.Audio(sources=["microphone", "upload"], type="filepath", label="Audio")
        output = gr.Textbox(label="Transcript", lines=8)
    btn = gr.Button("Transcribe")
    btn.click(fn=transcribe, inputs=audio, outputs=output)


if __name__ == "__main__":
    demo.launch()
