# Experiments

This directory stores experiment runs, configurations, and logs for reproducing paper results.

## Structure

```
Experiments/
├── {Year}/
│   └── {Paper_Name}/
│       ├── configs/               # Experiment configurations
│       │   ├── baseline.yaml      # Baseline configuration
│       │   ├── ablation1.yaml     # Ablation study 1
│       │   └── ...
│       ├── runs/                  # Experiment runs
│       │   ├── {exp_id}_seed42/   # Run with specific seed
│       │   │   ├── config.yaml    # Actual config used
│       │   │   ├── metrics.json   # Final metrics
│       │   │   ├── checkpoint.pt  # Model checkpoint
│       │   │   └── README.md      # Run-specific notes
│       │   └── ...
│       ├── logs/                  # Training logs
│       │   ├── {exp_id}_seed42.log
│       │   └── ...
│       ├── scripts/               # Experiment scripts
│       │   ├── run_experiment.py
│       │   ├── sweep.py           # Hyperparameter sweeping
│       │   └── ...
│       ├── results/               # Aggregated results
│       │   ├── summary.csv        # All results summary
│       │   └── plots/             # Generated plots
│       └── README.md              # Experiment documentation
└── README.md
```

## Experiment Workflow

### 1. Define Configurations

Create YAML configuration files in `configs/`:

```yaml
# configs/baseline.yaml
experiment_name: "baseline_v1"
model:
  type: "transformer"
  hidden_size: 512
  num_layers: 6
training:
  batch_size: 32
  learning_rate: 0.001
  epochs: 100
  seed: 42
```

### 2. Run Experiments

Use consistent naming for experiment IDs:
- `{paper_short_name}_{config_name}_seed{seed}`
- Example: `transformer_baseline_seed42`

### 3. Track Results

Save metrics in a structured format:

```json
{
  "experiment_id": "transformer_baseline_seed42",
  "config": "configs/baseline.yaml",
  "seed": 42,
  "metrics": {
    "train_loss": 0.123,
    "val_loss": 0.145,
    "accuracy": 0.92,
    "f1_score": 0.89
  },
  "timing": {
    "start_time": "2024-01-01T10:00:00",
    "end_time": "2024-01-01T12:30:00",
    "duration_seconds": 8999
  },
  "hardware": {
    "gpu": "NVIDIA A100",
    "memory_gb": 40
  }
}
```

## README Template

Each experiment directory should include a `README.md`:

```markdown
# {Paper Name} Experiments

## Overview
Reproducing results from "Paper Title" (Year)

## Experiment Configurations

| Config | Description | Expected Results |
|--------|-------------|-------------------|
| baseline.yaml | Baseline model | Acc: 0.92 |
| ablation1.yaml | Without attention | Acc: 0.85 |

## Running Experiments

### Single Run
```bash
python scripts/run_experiment.py \
  --paper transformer \
  --config configs/baseline.yaml \
  --seed 42
```

### Multiple Seeds
```bash
for seed in 42 123 456; do
  python scripts/run_experiment.py \
    --paper transformer \
    --config configs/baseline.yaml \
    --seed $seed
 done
```

### Hyperparameter Sweep
```bash
python scripts/sweep.py \
  --paper transformer \
  --config configs/sweep.yaml
```

## Results

### Baseline Results
| Seed | Train Loss | Val Loss | Accuracy |
|------|------------|----------|----------|
| 42   | 0.123      | 0.145    | 0.92     |
| 123  | 0.121      | 0.147    | 0.91     |

### Comparison with Paper
| Metric | Paper | Our Implementation |
|--------|-------|---------------------|
| Accuracy | 0.93 | 0.92 |
| F1 Score | 0.91 | 0.89 |

## Notes
- Differences from original paper
- Known issues
- Reproducibility notes
```

## Experiment Tracking

### Recommended Tools

1. **Weights & Biases** (Recommended)
   ```python
   import wandb
   wandb.init(project="paper-reproduction", config=config)
   ```

2. **MLflow**
   ```python
   import mlflow
   mlflow.log_metrics({"accuracy": 0.92})
   ```

3. **TensorBoard**
   ```python
   from torch.utils.tensorboard import SummaryWriter
   writer = SummaryWriter(log_dir="logs")
   ```

### Manual Tracking

If not using tracking tools, ensure you:
1. Save all hyperparameters in the config file
2. Log metrics to a JSON file
3. Save model checkpoints
4. Document the environment (Python version, library versions, hardware)

## Best Practices

1. **Isolate experiments**: Each run should be independent
2. **Fix random seeds**: For reproducibility
3. **Document everything**: Config, seed, hardware, timing
4. **Save checkpoints**: Save models at regular intervals
5. **Validate results**: Run multiple seeds and average
6. **Compare fairly**: Use same evaluation protocol as paper

## Example Structure

```
Experiments/
├── 2017/
│   └── transformer/
│       ├── configs/
│       │   ├── baseline.yaml
│       │   └── ablation.yaml
│       ├── runs/
│       │   ├── baseline_seed42/
│       │   │   ├── config.yaml
│       │   │   ├── metrics.json
│       │   │   └── checkpoint.pt
│       │   └── baseline_seed123/
│       │       ├── config.yaml
│       │       ├── metrics.json
│       │       └── checkpoint.pt
│       ├── logs/
│       │   ├── baseline_seed42.log
│       │   └── baseline_seed123.log
│       └── README.md
└── 2018/
    └── bert/
        ├── configs/
        │   └── base.yaml
        ├── runs/
        │   └── base_seed42/
        │       ├── config.yaml
        │       └── metrics.json
        └── README.md
```
